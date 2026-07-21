# Muhammet Ertuğrul — Personal Site

A single-page, framework-free static website for Muhammet Ertuğrul — Computer
Science & IB Design teacher and EdTech consultant. Plain HTML, CSS and
vanilla JavaScript. No build step.

## Features

- **One page, anchor-linked sections:** Hero, Tutoring, Consulting & AI,
  Robotics, About, Reviews, FAQ, Contact, Footer.
- **Trilingual (EN / DE / TR):** client-side switching, browser-language
  detection on first visit, preference remembered via `localStorage`, and
  `<html lang>` kept in sync.
- **Palette:** Slate / Coral, defined with CSS custom properties in `:root`.
- **Accessible:** visible keyboard focus, `prefers-reduced-motion` support,
  semantic headings, alt text and ARIA labels.
- **Responsive:** mobile hamburger menu under 820px.
- **SEO:** title, description, canonical, Open Graph / Twitter cards, favicon.

## Project structure

```
.
├── index.html        # markup + content (English is the source of truth)
├── styles.css        # all styling; Slate/Coral palette in :root
├── app.js            # i18n, language switch, subject pills, menu, form
├── vercel.json       # clean URLs, cache + security headers
├── assets/
│   ├── muhammet.jpg  # profile photo
│   └── favicon.svg   # brand favicon
├── .gitignore
└── README.md
```

## Local preview

No tooling needed — open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Contact form (TODO before launch)

The contact form currently shows a demo note on submit. To make it send real
messages, use a form backend such as [Formspree](https://formspree.io) or
[Web3Forms](https://web3forms.com) — no server required.

**Formspree**

1. Create a form and copy your endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
2. In `index.html`, set the endpoint on the `<form>`:
   ```html
   <form class="form" data-endpoint="https://formspree.io/f/abcdwxyz" ...>
   ```
   `app.js` will POST the form via `fetch` and reset it on success.

**Web3Forms**

1. Get a free access key at web3forms.com.
2. Add a hidden field inside the `<form>` and set the endpoint:
   ```html
   <input type="hidden" name="access_key" value="YOUR-ACCESS-KEY">
   ```
   ```html
   <form class="form" data-endpoint="https://api.web3forms.com/submit" ...>
   ```

Until `data-endpoint` is set, the form stays in demo mode.

## Deploy to Vercel

This is a zero-config static site — Vercel serves the folder as-is using
`vercel.json`.

### Option A — Vercel CLI

```bash
npm i -g vercel      # once
vercel               # preview deployment (follow prompts)
vercel --prod        # production deployment
```

### Option B — GitHub → Vercel

1. Push this folder to a GitHub repository.
2. On [vercel.com](https://vercel.com) → **Add New… → Project** and import the repo.
3. Framework preset: **Other**. Leave Build Command empty and Output
   Directory as the repository root (default). Click **Deploy**.
4. Every push to the default branch redeploys production; pull requests get
   preview URLs automatically.

### Custom domain

Project → **Settings → Domains**, add your domain and follow the DNS
instructions. Then update the `https://muhammetertugrul.com/` URLs in the
`<head>` of `index.html` (canonical + Open Graph) to your real domain.
