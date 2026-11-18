-- Student reviews for mrertugrul.com
-- Run once in the Supabase SQL editor of the "mrertugrul-reviews" project.
--
-- Flow:
--   1. Admin creates an invite (student name + course) in /admin/  -> one-time link /yorum/?t=<token>
--   2. Student opens the link and submits a review (via submit_review, no login)
--   3. Admin publishes or hides it in /admin/
--   4. The home pages read published reviews (anon, read-only)

-- ---------------------------------------------------------------------------
-- Tables
-- ---------------------------------------------------------------------------

create table if not exists public.admins (
  email text primary key
);

create table if not exists public.review_invites (
  token        uuid primary key default gen_random_uuid(),
  student_name text not null check (char_length(student_name) between 1 and 80),
  course       text not null check (char_length(course) between 1 and 60),
  lang         text not null default 'tr' check (lang in ('tr', 'en')),
  created_at   timestamptz not null default now(),
  used_at      timestamptz
);

create table if not exists public.reviews (
  id             bigint generated always as identity primary key,
  invite_token   uuid unique references public.review_invites(token) on delete set null,
  display_name   text not null check (char_length(display_name) between 1 and 60),
  course         text not null,
  lang           text not null check (lang in ('tr', 'en')),
  rating         int  not null check (rating between 1 and 5),
  body           text not null check (char_length(body) between 20 and 1500),
  parent_consent boolean not null,
  status         text not null default 'pending' check (status in ('pending', 'published', 'hidden')),
  created_at     timestamptz not null default now(),
  published_at   timestamptz
);

create index if not exists reviews_published_idx on public.reviews (lang, published_at desc) where status = 'published';

-- ---------------------------------------------------------------------------
-- Admin check (security definer so RLS on admins does not recurse)
-- ---------------------------------------------------------------------------

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.admins where email = lower(auth.jwt() ->> 'email'));
$$;

-- ---------------------------------------------------------------------------
-- Row level security
-- ---------------------------------------------------------------------------

alter table public.admins         enable row level security;
alter table public.review_invites enable row level security;
alter table public.reviews        enable row level security;

-- admins: no policies -> nobody reads it through the API

drop policy if exists "admin manages invites" on public.review_invites;
create policy "admin manages invites" on public.review_invites
  for all to authenticated
  using (public.is_admin()) with check (public.is_admin());

drop policy if exists "anyone reads published reviews" on public.reviews;
create policy "anyone reads published reviews" on public.reviews
  for select to anon, authenticated
  using (status = 'published');

drop policy if exists "admin manages reviews" on public.reviews;
create policy "admin manages reviews" on public.reviews
  for all to authenticated
  using (public.is_admin()) with check (public.is_admin());

-- Anonymous visitors may only see the published columns they need.
revoke all on public.reviews from anon;
grant select (id, display_name, course, lang, rating, body, published_at) on public.reviews to anon;
revoke all on public.review_invites from anon;
revoke all on public.admins from anon, authenticated;

-- ---------------------------------------------------------------------------
-- Student-facing functions (no login; the token is the permission)
-- ---------------------------------------------------------------------------

create or replace function public.get_invite(p_token uuid)
returns table (student_name text, course text, lang text, used boolean)
language sql
stable
security definer
set search_path = public
as $$
  select i.student_name, i.course, i.lang, i.used_at is not null
  from public.review_invites i
  where i.token = p_token;
$$;

create or replace function public.submit_review(
  p_token uuid,
  p_display_name text,
  p_rating int,
  p_body text,
  p_parent_consent boolean
)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  v_invite public.review_invites;
begin
  select * into v_invite from public.review_invites where token = p_token for update;
  if not found then
    return 'invalid';
  end if;
  if v_invite.used_at is not null then
    return 'used';
  end if;
  if coalesce(p_parent_consent, false) = false then
    return 'consent_required';
  end if;

  insert into public.reviews (invite_token, display_name, course, lang, rating, body, parent_consent)
  values (p_token, trim(p_display_name), v_invite.course, v_invite.lang, p_rating, trim(p_body), true);

  update public.review_invites set used_at = now() where token = p_token;
  return 'ok';
end;
$$;

revoke all on function public.get_invite(uuid) from public;
revoke all on function public.submit_review(uuid, text, int, text, boolean) from public;
grant execute on function public.get_invite(uuid) to anon, authenticated;
grant execute on function public.submit_review(uuid, text, int, text, boolean) to anon, authenticated;

-- ---------------------------------------------------------------------------
-- Admin user
-- ---------------------------------------------------------------------------

insert into public.admins (email) values ('mertugrul68@gmail.com') on conflict do nothing;
