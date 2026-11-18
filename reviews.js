/* =========================================================================
   Student reviews: shared Supabase client + the home-page reviews section.
   The URL and anon key are public by design: row level security in
   supabase/reviews.sql decides what anyone can read or write.
   ========================================================================= */

window.REVIEWS_CONFIG = {
  url: 'https://ymjwsarymasoggcaemhq.supabase.co',
  anonKey: 'sb_publishable_Qhv_CFs4CYItaBEO_aspEg_yGwvy_ts'
};

window.reviewsClient = function () {
  if (!window.supabase || window.REVIEWS_CONFIG.url.indexOf('http') !== 0) return null;
  if (!window.__reviewsClient) {
    window.__reviewsClient = window.supabase.createClient(
      window.REVIEWS_CONFIG.url,
      window.REVIEWS_CONFIG.anonKey
    );
  }
  return window.__reviewsClient;
};

/* ---- Home page section --------------------------------------------------
   <section id="reviews" data-lang="tr" hidden> with a .reviews-grid inside.
   The section stays hidden until at least one review is published.       */
(function () {
  'use strict';

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  async function loadReviews() {
    var section = document.getElementById('reviews');
    if (!section) return;
    var client = window.reviewsClient();
    if (!client) return;

    var lang = section.getAttribute('data-lang') || 'tr';
    var res = await client
      .from('site_reviews')
      .select('id, display_name, course, rating, body, published_at')
      .eq('lang', lang)
      .order('published_at', { ascending: false })
      .limit(12);
    if (res.error || !res.data || !res.data.length) return;

    var grid = section.querySelector('.reviews-grid');
    res.data.forEach(function (r) {
      var card = el('article', 'review-card');
      var stars = el('div', 'review-card__stars', '★★★★★'.slice(0, r.rating) + '☆☆☆☆☆'.slice(0, 5 - r.rating));
      stars.setAttribute('aria-label', r.rating + ' / 5');
      card.appendChild(stars);
      card.appendChild(el('p', 'review-card__body', r.body));
      var who = el('div', 'review-card__who');
      who.appendChild(el('span', 'review-card__name', r.display_name));
      who.appendChild(el('span', 'review-card__course mono', r.course));
      card.appendChild(who);
      grid.appendChild(card);
    });
    section.hidden = false;
  }

  document.addEventListener('DOMContentLoaded', function () {
    loadReviews().catch(function () {});
  });
})();
