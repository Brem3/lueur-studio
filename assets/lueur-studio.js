/* ============================================================
   LUEUR STUDIO — Interactions
   ============================================================ */
(function () {
  'use strict';

  /* ---- Reveal on scroll ---- */
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---- Product gallery (thumbnail switch) ---- */
  function initGallery() {
    var gallery = document.querySelector('[data-gallery]');
    if (!gallery) return;
    var main = gallery.querySelector('[data-gallery-main]');
    var thumbs = gallery.querySelectorAll('[data-gallery-thumb]');
    thumbs.forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        var src = thumb.getAttribute('data-full');
        var img = main.querySelector('img');
        if (img && src) img.setAttribute('src', src);
        thumbs.forEach(function (t) { t.setAttribute('aria-current', 'false'); });
        thumb.setAttribute('aria-current', 'true');
      });
    });
  }

  /* ---- Variant swatches + price + CTA label ---- */
  function initVariants() {
    var form = document.querySelector('[data-product-form]');
    if (!form) return;

    var groups = form.querySelectorAll('[data-option-group]');
    groups.forEach(function (group) {
      var buttons = group.querySelectorAll('[data-option-value]');
      buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
          buttons.forEach(function (b) { b.setAttribute('aria-checked', 'false'); });
          btn.setAttribute('aria-checked', 'true');
          var input = group.querySelector('input[type="hidden"]');
          if (input) input.value = btn.getAttribute('data-option-value');
          updateVariant(form);
        });
      });
    });
  }

  function updateVariant(form) {
    var dataEl = form.querySelector('[data-variants-json]');
    if (!dataEl) return;
    var variants;
    try { variants = JSON.parse(dataEl.textContent); } catch (e) { return; }

    var selected = [];
    form.querySelectorAll('[data-option-group] input[type="hidden"]').forEach(function (input) {
      selected.push(input.value);
    });

    var match = variants.find(function (v) {
      return v.options.every(function (opt, i) { return opt === selected[i]; });
    });
    if (!match) return;

    var idInput = form.querySelector('[name="id"]');
    if (idInput) idInput.value = match.id;

    var priceEl = form.querySelector('[data-variant-price]');
    if (priceEl) priceEl.textContent = match.price;

    var cta = form.querySelector('[data-add-label]');
    if (cta) cta.textContent = cta.getAttribute('data-add-prefix') + ' — ' + match.price;

    var img = document.querySelector('[data-gallery-main] img');
    if (img && match.image) img.setAttribute('src', match.image);
  }

  /* ---- Mobile menu toggle ---- */
  function initMobileMenu() {
    var toggle = document.querySelector('[data-menu-toggle]');
    var drawer = document.querySelector('[data-mobile-drawer]');
    if (!toggle || !drawer) return;
    toggle.addEventListener('click', function () {
      var open = drawer.hasAttribute('open');
      if (open) { drawer.removeAttribute('open'); }
      else { drawer.setAttribute('open', ''); }
      toggle.setAttribute('aria-expanded', String(!open));
    });
  }

  function init() {
    initReveal();
    initGallery();
    initVariants();
    initMobileMenu();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
