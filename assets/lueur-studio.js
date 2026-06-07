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
          var current = group.querySelector('[data-option-current]');
          if (current) current.textContent = btn.getAttribute('data-option-value');
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

    // Update every price node on the page (main price + floating bar)
    document.querySelectorAll('[data-variant-price]').forEach(function (el) {
      el.textContent = match.price;
    });

    var cta = form.querySelector('[data-add-label]');
    if (cta) cta.textContent = cta.getAttribute('data-add-prefix') + ' — ' + match.price;

    var img = document.querySelector('[data-gallery-main] img');
    if (img && match.image) img.setAttribute('src', match.image);
  }

  /* ---- Mobile drawer (inspiré Radix NavItemMobile) ---- */
  function initMobileMenu() {
    var toggle = document.querySelector('[data-menu-toggle]');
    var drawer = document.querySelector('[data-mobile-drawer]');
    if (!toggle || !drawer) return;
    var closers = drawer.querySelectorAll('[data-menu-close]');

    function open() {
      drawer.hidden = false;
      // force reflow so the transition runs from the hidden state
      void drawer.offsetWidth;
      drawer.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      document.documentElement.style.overflow = 'hidden';
    }
    function close() {
      drawer.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.documentElement.style.overflow = '';
      var onEnd = function () {
        drawer.hidden = true;
        drawer.removeEventListener('transitionend', onEnd);
      };
      drawer.addEventListener('transitionend', onEnd);
    }

    toggle.addEventListener('click', open);
    closers.forEach(function (el) { el.addEventListener('click', close); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) close();
    });
  }

  /* ---- Desktop nav: keyboard toggle for the mega-menu trigger ---- */
  function initNavMenu() {
    document.querySelectorAll('[data-nav-trigger]').forEach(function (trigger) {
      var item = trigger.closest('[data-nav-item]');
      if (!item) return;
      trigger.addEventListener('click', function () {
        var expanded = trigger.getAttribute('aria-expanded') === 'true';
        trigger.setAttribute('aria-expanded', String(!expanded));
      });
      document.addEventListener('click', function (e) {
        if (!item.contains(e.target)) trigger.setAttribute('aria-expanded', 'false');
      });
      item.addEventListener('mouseleave', function () {
        trigger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Reviews carousel: auto-scroll + arrow navigation via transform ---- */
  function initReviewCarousel() {
    var track = document.querySelector('[data-review-track]');
    if (!track) return;

    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Clone les cartes pour la boucle infinie.
    var originals = Array.prototype.slice.call(track.children);
    originals.forEach(function (card) {
      var clone = card.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    });

    var container = track.closest('.reviews') || track.parentNode.parentNode;
    var prev = container.querySelector('[data-review-prev]');
    var next = container.querySelector('[data-review-next]');

    // pos : décalage courant (toujours dans [-half, 0])
    // target : décalage voulu après un clic flèche
    var pos = 0;
    var target = 0;
    var paused = false;
    var easing = false;
    var autoSpeed = 0.5;
    var resumeTimer;

    function half() { return track.scrollWidth / 2; }

    function cardStep() {
      var card = track.firstElementChild;
      if (!card) return 340;
      var gap = parseFloat(getComputedStyle(track).gap) || 24;
      return card.offsetWidth + gap;
    }

    // Normalise pos dans ]-half, 0] sans saut visuel.
    function normalize(v) {
      var h = half();
      if (h <= 0) return v;
      v = v % h;
      if (v > 0) v -= h;
      return v;
    }

    function applyPos() {
      track.style.transform = 'translateX(' + pos + 'px)';
    }

    function tick() {
      if (easing) {
        var diff = target - pos;
        if (Math.abs(diff) < 0.3) {
          pos = normalize(target);
          target = pos;
          easing = false;
        } else {
          pos += diff * 0.14;
          // Garde pos normalisé pour éviter une dérive infinie.
          pos = normalize(pos);
          target = normalize(target);
        }
      } else if (!paused) {
        pos = normalize(pos - autoSpeed);
        target = pos;
      }
      applyPos();
      requestAnimationFrame(tick);
    }

    function manualShift(delta) {
      paused = true;
      easing = true;
      target = normalize(pos + delta);
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(function () { paused = false; }, 800);
    }

    if (prev) prev.addEventListener('click', function () { manualShift(cardStep() * 2); });
    if (next) next.addEventListener('click', function () { manualShift(-cardStep() * 2); });

    if (reduceMotion) {
      applyPos();
      if (prev) prev.addEventListener('click', function () { pos = normalize(pos + cardStep() * 2); applyPos(); });
      if (next) next.addEventListener('click', function () { pos = normalize(pos - cardStep() * 2); applyPos(); });
      return;
    }

    var carousel = track.closest('[data-review-carousel]');
    if (carousel) {
      carousel.addEventListener('mouseenter', function () { paused = true; });
      carousel.addEventListener('mouseleave', function () { paused = false; });
    }

    requestAnimationFrame(tick);
  }

  /* ---- Product carousel: single-row horizontal scroll with arrows ---- */
  function initProductCarousel() {
    document.querySelectorAll('[data-product-carousel]').forEach(function (carousel) {
      var track = carousel.querySelector('[data-carousel-track]');
      if (!track) return;
      var head = carousel.previousElementSibling;
      var prev = head && head.querySelector('[data-carousel-prev]');
      var next = head && head.querySelector('[data-carousel-next]');
      if (!prev || !next) return;

      function scrollAmount() {
        var item = track.firstElementChild;
        // défile d'une "page" (largeur visible), arrondie sur la carte
        if (item) {
          var style = getComputedStyle(track);
          var gap = parseFloat(style.columnGap || style.gap) || 0;
          var step = item.getBoundingClientRect().width + gap;
          var perView = Math.max(1, Math.round(track.clientWidth / step));
          return step * perView;
        }
        return track.clientWidth;
      }

      function updateArrows() {
        var maxScroll = track.scrollWidth - track.clientWidth - 1;
        prev.disabled = track.scrollLeft <= 0;
        next.disabled = track.scrollLeft >= maxScroll;
        // masque la nav si tout tient sans défilement
        var nav = prev.parentNode;
        if (nav) nav.style.display = maxScroll <= 1 ? 'none' : '';
      }

      prev.addEventListener('click', function () {
        track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
      });
      next.addEventListener('click', function () {
        track.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
      });
      track.addEventListener('scroll', updateArrows, { passive: true });
      window.addEventListener('resize', updateArrows);
      updateArrows();
    });
  }

  /* ---- Announcement marquee: clone items for seamless infinite loop ---- */
  function initMarquees() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.querySelectorAll('[data-marquee-track]').forEach(function (track) {
      var items = Array.prototype.slice.call(track.children);
      items.forEach(function (item) { track.appendChild(item.cloneNode(true)); });
    });
  }

  /* ---- Floating add-to-cart bar (inspiré Neutralighting) ----
     Reveals a sticky bottom bar when the main add-to-cart button
     scrolls out of view. Its button proxies a click to the real form. */
  function initFloatAtc() {
    var bar = document.querySelector('[data-float-atc]');
    var anchor = document.querySelector('[data-atc-anchor]');
    if (!bar || !anchor) return;

    var proxy = bar.querySelector('[data-float-atc-button]');
    var realButton = document.querySelector('[data-product-form] [name="add"]');

    if (proxy && realButton) {
      proxy.addEventListener('click', function () {
        if (realButton.disabled) return;
        realButton.click();
      });
    }

    if (!('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        // Show the bar once the real CTA has scrolled past (above viewport)
        var passed = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        bar.classList.toggle('is-visible', passed);
      });
    }, { threshold: 0, rootMargin: '0px 0px 0px 0px' });
    io.observe(anchor);
  }

  /* ---- Bundle / cross-sell: add checked add-ons alongside the main product ---- */
  function initBundle() {
    var bundle = document.querySelector('[data-bundle]');
    var form = document.querySelector('[data-product-form]');
    if (!bundle || !form) return;

    var submitting = false;
    form.addEventListener('submit', function (e) {
      if (submitting) return; // let the native submit through after add-ons are queued

      var checks = bundle.querySelectorAll('[data-bundle-variant]:checked');
      if (checks.length === 0) return; // nothing extra, native submit handles it

      e.preventDefault();
      var items = [];
      checks.forEach(function (c) {
        items.push({ id: parseInt(c.getAttribute('data-bundle-variant'), 10), quantity: 1 });
      });

      fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: items })
      })
        .then(function () {
          submitting = true;
          form.submit(); // main product + native redirect to cart
        })
        .catch(function () {
          submitting = true;
          form.submit();
        });
    });
  }

  function init() {
    initReveal();
    initGallery();
    initVariants();
    initMobileMenu();
    initReviewCarousel();
    initProductCarousel();
    initMarquees();
    initFloatAtc();
    initNavMenu();
    initBundle();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
