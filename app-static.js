/* =========================================================================
   Muhammet Ertuğrul — static page behaviour (no i18n)
   - contact subject pills
   - mobile hamburger menu
   - contact form (Formspree / Web3Forms ready)
   - carousel
   ========================================================================= */

(function () {
  'use strict';

  /* ---- Contact subject pills ------------------------------------------ */
  function initPills() {
    var pills = document.querySelectorAll('[data-subject]');
    var hidden = document.getElementById('subjectField');
    pills.forEach(function (p) {
      p.addEventListener('click', function () {
        pills.forEach(function (o) { o.classList.remove('pill--active'); });
        p.classList.add('pill--active');
        if (hidden) hidden.value = p.getAttribute('data-subject');
      });
    });
  }

  /* ---- Mobile menu ---------------------------------------------------- */
  function initMenu() {
    var toggle = document.getElementById('navToggle');
    var menu = document.getElementById('navMenu');
    if (!toggle || !menu) return;

    function close() {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    }
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', close);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }

  /* ---- Contact form --------------------------------------------------- */
  function initForm() {
    var form = document.querySelector('.form');
    if (!form) return;
    var note = document.getElementById('formNote');
    var endpoint = form.getAttribute('data-endpoint');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!endpoint) {
        if (note) note.classList.add('is-visible');
        return;
      }

      var submitBtn = form.querySelector('[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;

      fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      }).then(function (res) {
        if (res.ok) {
          form.reset();
          if (note) note.classList.add('is-visible');
        } else {
          alert('Something went wrong. Please email mertugrul68@gmail.com directly.');
        }
      }).catch(function () {
        alert('Something went wrong. Please email mertugrul68@gmail.com directly.');
      }).finally(function () {
        if (submitBtn) submitBtn.disabled = false;
      });
    });
  }

  /* ---- Carousel ------------------------------------------------------- */
  function initCarousel() {
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.querySelectorAll('.carousel').forEach(function (carousel) {
      var slides = Array.from(carousel.querySelectorAll('.carousel__slide'));
      var dots   = Array.from(carousel.querySelectorAll('.carousel__dot'));
      var prev   = carousel.querySelector('.carousel__btn--prev');
      var next   = carousel.querySelector('.carousel__btn--next');
      var total  = slides.length;
      var current = 0;
      var timer = null;

      function goTo(n) {
        slides[current].classList.remove('carousel__slide--active');
        slides[current].setAttribute('aria-hidden', 'true');
        dots[current].classList.remove('carousel__dot--active');
        dots[current].setAttribute('aria-pressed', 'false');
        current = (n + total) % total;
        slides[current].classList.add('carousel__slide--active');
        slides[current].setAttribute('aria-hidden', 'false');
        dots[current].classList.add('carousel__dot--active');
        dots[current].setAttribute('aria-pressed', 'true');
      }

      function startAuto() {
        if (reducedMotion) return;
        timer = setInterval(function () { goTo(current + 1); }, 4000);
      }

      function resetAuto() { clearInterval(timer); startAuto(); }

      if (prev) prev.addEventListener('click', function () { goTo(current - 1); resetAuto(); });
      if (next) next.addEventListener('click', function () { goTo(current + 1); resetAuto(); });
      dots.forEach(function (dot, i) {
        dot.addEventListener('click', function () { goTo(i); resetAuto(); });
      });

      startAuto();
    });
  }

  /* ---- Boot ----------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    initPills();
    initMenu();
    initForm();
    initCarousel();
  });
})();
