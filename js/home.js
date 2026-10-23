// Florería Eben Ezer · index — la vitrina en arco, las entradas y la marquesina.
// Sin este archivo la página funciona igual: la vitrina es una fila con scroll y cada losa es un enlace a WhatsApp.
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- entradas (una vez, nunca dejan contenido oculto) ---------- */
  (function () {
    var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }) : null;
    function observe() {
      var targets = document.querySelectorAll('[data-reveal]:not(.is-in):not([data-observed])');
      targets.forEach(function (el) {
        el.setAttribute('data-observed', '');
        if (io) io.observe(el); else el.classList.add('is-in');
      });
      // Red de seguridad: pasados 2,5 s todo queda visible aunque el observador no haya disparado.
      setTimeout(function () { targets.forEach(function (el) { el.classList.add('is-in'); }); }, 2500);
    }
    window.ebenReveal = observe;
    observe();
  })();

  /* ---------- fila arrastrable: el rótulo aparece cuando la pieza entra entera ---------- */
  (function () {
    var runs = document.querySelectorAll('.run');
    if (!runs.length || !('IntersectionObserver' in window)) return;
    runs.forEach(function (run) {
      var frames = run.querySelectorAll('.frame');
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { e.target.classList.toggle('is-whole', e.intersectionRatio >= 0.98); });
      }, { root: run, threshold: [0, 0.98, 1] });
      frames.forEach(function (f) { io.observe(f); });
    });
  })();

  /* ---------- la vitrina ---------- */
  var vitrina = document.getElementById('vitrina');
  var track = document.getElementById('track');
  var pieces = vitrina ? Array.prototype.slice.call(vitrina.querySelectorAll('.piece')) : [];
  if (!vitrina || !track || pieces.length < 2) return;

  var slots = Array.prototype.slice.call(vitrina.querySelectorAll('.slot'));
  var nameEl = document.getElementById('piece-name');
  var factEl = document.getElementById('piece-fact');
  var orderBtn = document.getElementById('hero-order');
  var stickyBtn = document.getElementById('sticky-order');
  var current = -1;
  var stepPx = 260;

  function measure() {
    stepPx = slots[0] ? slots[0].getBoundingClientRect().width : 260;
  }

  function render() {
    var tr = track.getBoundingClientRect();
    var centre = tr.left + tr.width / 2;
    var best = 0, bestD = Infinity;
    for (var i = 0; i < pieces.length; i++) {
      var sr = slots[i].getBoundingClientRect();
      var d = (sr.left + sr.width / 2 - centre) / stepPx;   // distancia en pasos al centro
      var ad = Math.abs(d);
      var s = Math.pow(0.74, Math.min(ad, 3));
      var b = Math.max(0.25, 1 - 0.25 * Math.min(ad, 3));
      var dy = (i % 2 ? -1 : 1) * 28 * Math.min(ad, 1);
      var rot = Math.max(-8, Math.min(8, d * 2.5));
      var el = pieces[i];
      el.style.setProperty('--dx', (d * stepPx).toFixed(1) + 'px');
      el.style.setProperty('--dy', dy.toFixed(1) + 'px');
      el.style.setProperty('--s', s.toFixed(3));
      el.style.setProperty('--b', b.toFixed(3));
      el.style.setProperty('--rot', rot.toFixed(2) + 'deg');
      el.style.setProperty('--z', String(100 - Math.round(ad * 10)));
      if (ad < bestD) { bestD = ad; best = i; }
    }
    if (best !== current) setCurrent(best);
  }

  function setCurrent(i) {
    current = i;
    pieces.forEach(function (el, k) {
      el.classList.toggle('is-current', k === i);
      el.setAttribute('aria-current', k === i ? 'true' : 'false');
    });
    var el = pieces[i];
    if (nameEl) nameEl.textContent = el.dataset.name;
    if (factEl) factEl.innerHTML = el.dataset.flowers + ' · <b>' + el.dataset.price + '</b> · Ref. ' + el.dataset.ref;
    if (orderBtn) orderBtn.href = el.dataset.href;
    if (stickyBtn) stickyBtn.href = el.dataset.href;
  }

  function scrollToIndex(i, smooth) {
    i = Math.max(0, Math.min(pieces.length - 1, i));
    var slot = slots[i];
    var target = slot.offsetLeft + slot.offsetWidth / 2 - track.clientWidth / 2;
    track.scrollTo({ left: target, behavior: (smooth && !reduce) ? 'smooth' : 'auto' });
  }

  var raf = null;
  track.addEventListener('scroll', function () {
    if (raf) return;
    raf = requestAnimationFrame(function () { raf = null; render(); });
  }, { passive: true });
  window.addEventListener('resize', function () { measure(); render(); });

  // Clic en una vecina: la trae al frente. Clic en la actual: sigue al enlace de WhatsApp.
  var dragged = false;
  pieces.forEach(function (el, i) {
    el.querySelector('a').addEventListener('click', function (ev) {
      if (dragged) { ev.preventDefault(); return; }
      if (i !== current) { ev.preventDefault(); scrollToIndex(i, true); }
    });
  });

  // Teclado: flechas mueven la vitrina.
  track.addEventListener('keydown', function (ev) {
    if (ev.key === 'ArrowRight') { ev.preventDefault(); scrollToIndex(current + 1, true); }
    if (ev.key === 'ArrowLeft') { ev.preventDefault(); scrollToIndex(current - 1, true); }
    if (ev.key === 'Home') { ev.preventDefault(); scrollToIndex(0, true); }
    if (ev.key === 'End') { ev.preventDefault(); scrollToIndex(pieces.length - 1, true); }
  });

  // Arrastre con el mouse (el táctil ya desplaza de forma nativa).
  var pointerDown = false, startX = 0, startLeft = 0;
  track.addEventListener('pointerdown', function (ev) {
    if (ev.pointerType !== 'mouse') return;
    pointerDown = true; dragged = false; startX = ev.clientX; startLeft = track.scrollLeft;
    vitrina.classList.add('is-dragging');
    track.setPointerCapture(ev.pointerId);
  });
  track.addEventListener('pointermove', function (ev) {
    if (!pointerDown) return;
    var dx = ev.clientX - startX;
    if (Math.abs(dx) > 4) dragged = true;
    track.scrollLeft = startLeft - dx;
  });
  function endDrag(ev) {
    if (!pointerDown) return;
    pointerDown = false;
    vitrina.classList.remove('is-dragging');
    if (dragged) { scrollToIndex(current, true); setTimeout(function () { dragged = false; }, 50); }
  }
  track.addEventListener('pointerup', endDrag);
  track.addEventListener('pointercancel', endDrag);

  // Arranque: la pieza del medio al centro, sin animación.
  measure();
  var start = Math.floor(pieces.length / 2);
  scrollToIndex(start, false);
  render();
  // Las fuentes y las imágenes cambian anchos; se vuelve a medir al cargar.
  var userMoved = false;
  track.addEventListener('pointerdown', function () { userMoved = true; }, { once: true, passive: true });
  track.addEventListener('wheel', function () { userMoved = true; }, { once: true, passive: true });
  track.addEventListener('touchstart', function () { userMoved = true; }, { once: true, passive: true });
  function settle() { if (userMoved) return; measure(); scrollToIndex(start, false); render(); }
  window.addEventListener('load', function () { settle(); requestAnimationFrame(settle); setTimeout(settle, 400); });
})();
