(function () {
  if (window.__hnnNav) return;
  window.__hnnNav = true;
  var D = window.HNN_EXAMS || null;
  var C = (D && D.color) || '#1f1b16';
  var base = new URL('./', location.href).href;
  var home = new URL('../', location.href).href;
  var PDFJS = new URL('../shared/pdfjs/', location.href).href;
  var css = '' +
    '#hnn-bar{position:fixed;top:10px;left:10px;z-index:2147483646;display:flex;align-items:center;gap:2px;padding:4px;direction:rtl;background:rgba(24,21,18,.82);-webkit-backdrop-filter:blur(12px) saturate(1.4);backdrop-filter:blur(12px) saturate(1.4);border:1px solid rgba(255,255,255,.14);border-radius:14px;box-shadow:0 8px 24px rgba(0,0,0,.22),0 1px 2px rgba(0,0,0,.2)}' +
    '#hnn-bar a,#hnn-bar button{all:unset;cursor:pointer;display:inline-flex;align-items:center;gap:6px;color:#fff;font:700 12.5px Cairo,system-ui,sans-serif;padding:7px 11px;border-radius:10px;white-space:nowrap;line-height:1;transition:background .15s}' +
    '#hnn-bar a:hover{background:rgba(255,255,255,.1)}' +
    '#hnn-bar svg{width:15px;height:15px;flex-shrink:0}' +
    '#hnn-bar button{background:var(--hc)}' +
    '#hnn-bar button:hover{filter:brightness(1.08)}' +
    '#hnn-bar .c{background:rgba(255,255,255,.25);border-radius:6px;padding:2px 6px;font-size:11px}' +
    '#hnn-bar .sep{width:1px;height:18px;background:rgba(255,255,255,.16);margin:0 2px}' +
    '#hnn-ov{position:fixed;inset:0;z-index:2147483647;background:#f7f5f1;direction:rtl;font-family:Cairo,system-ui,sans-serif;color:#1f1b16;display:none;flex-direction:column}' +
    '#hnn-ov.on{display:flex}' +
    '#hnn-ov *{box-sizing:border-box}' +
    '.hnn-top{background:var(--hc);color:#fff;padding:14px 16px 18px;display:flex;align-items:center;gap:12px;flex-shrink:0}' +
    '.hnn-top h2{margin:0;font-size:20px;font-weight:800;flex:1;line-height:1.3}' +
    '.hnn-top small{display:block;font-size:12px;font-weight:600;opacity:.85}' +
    '.hnn-ib{all:unset;cursor:pointer;width:38px;height:38px;border-radius:12px;background:rgba(255,255,255,.18);display:grid;place-items:center;font-size:18px;color:#fff;flex-shrink:0}' +
    '.hnn-tabs{display:flex;gap:8px;overflow-x:auto;padding:14px 16px 4px;flex-shrink:0;scrollbar-width:none}' +
    '.hnn-tabs::-webkit-scrollbar{display:none}' +
    '.hnn-tab{all:unset;cursor:pointer;white-space:nowrap;padding:8px 14px;border-radius:999px;background:#fff;border:1.5px solid #e8e1d6;font-size:13px;font-weight:700;color:#5c5348}' +
    '.hnn-tab.on{background:var(--hc);border-color:var(--hc);color:#fff}' +
    '.hnn-body{flex:1;overflow-y:auto;padding:12px 16px 40px;-webkit-overflow-scrolling:touch}' +
    '.hnn-src{margin:10px 0 22px}' +
    '.hnn-sh{display:flex;align-items:center;gap:10px;margin-bottom:12px}' +
    '.hnn-pub{background:var(--hc);color:#fff;font-size:12px;font-weight:800;padding:4px 10px;border-radius:8px}' +
    '.hnn-st{font-size:16px;font-weight:800;flex:1}' +
    '.hnn-cnt{font-size:12px;color:#8a8073;font-weight:700}' +
    '.hnn-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}' +
    '.hnn-card{all:unset;cursor:pointer;background:#fff;border-radius:16px;padding:14px;box-shadow:0 1px 2px rgba(0,0,0,.05),0 4px 14px rgba(0,0,0,.05);border:1.5px solid #efe9df;display:flex;flex-direction:column;gap:8px;min-height:104px;transition:transform .12s}' +
    '.hnn-card:active{transform:scale(.97)}' +
    '.hnn-num{width:36px;height:36px;border-radius:11px;display:grid;place-items:center;font-weight:800;font-size:16px;background:color-mix(in srgb,var(--hc) 14%,#fff);color:var(--hc)}' +
    '.hnn-cn{font-size:14px;font-weight:800;line-height:1.45}' +
    '.hnn-meta{display:flex;gap:6px;flex-wrap:wrap;margin-top:auto}' +
    '.hnn-tag{font-size:11px;font-weight:700;padding:2px 8px;border-radius:6px;background:#f3efe8;color:#6d6458}' +
    '.hnn-tag.a{background:#e7f7ee;color:#11804a}' +
    '.hnn-tag.l{background:#e8f0fd;color:#2456b8}' +
    '.hnn-full{all:unset;cursor:pointer;display:flex;align-items:center;gap:8px;margin-top:10px;padding:10px 12px;border-radius:12px;border:1.5px dashed #ddd3c4;font-size:13px;font-weight:700;color:#6d6458;width:100%;box-sizing:border-box}' +
    '.hnn-vw{position:absolute;inset:0;background:#2b2722;display:none;flex-direction:column}' +
    '.hnn-vw.on{display:flex}' +
    '.hnn-vt{background:#1f1b16;color:#fff;padding:10px 12px;display:flex;align-items:center;gap:10px;flex-shrink:0}' +
    '.hnn-vt h3{margin:0;font-size:15px;font-weight:800;flex:1;line-height:1.35;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}' +
    '.hnn-vt small{display:block;font-size:11px;opacity:.7;font-weight:600}' +
    '.hnn-pages{flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;align-items:center;gap:12px;-webkit-overflow-scrolling:touch}' +
    '.hnn-pg{flex-shrink:0;width:100%;max-width:900px;background:#fff;border-radius:6px;box-shadow:0 4px 18px rgba(0,0,0,.35);position:relative;overflow:hidden}' +
    '.hnn-pg canvas{display:block;width:100%;height:auto}' +
    '.hnn-pg .ph{position:absolute;inset:0;display:grid;place-items:center;color:#a39a8d;font-size:13px;font-weight:700}' +
    '.hnn-pn{position:absolute;bottom:8px;left:8px;background:rgba(31,27,22,.75);color:#fff;font:700 11px Cairo,system-ui,sans-serif;padding:3px 8px;border-radius:6px}' +
    '.hnn-msg{color:#fff;text-align:center;padding:40px 20px;font-weight:700;line-height:1.8}' +
    '.hnn-msg a{color:#fff}';
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function url(f) { return base + f.split('/').map(encodeURIComponent).join('/'); }
  function ensureFont() {
    if (document.getElementById('hnn-font')) return;
    var l = document.createElement('link'); l.id = 'hnn-font'; l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Cairo:wght@600;700;800&display=swap';
    (document.head || document.documentElement).appendChild(l);
  }
  function ensureStyle() {
    if (document.getElementById('hnn-css')) return;
    var s = document.createElement('style'); s.id = 'hnn-css'; s.textContent = css;
    (document.head || document.documentElement).appendChild(s);
  }
  var pdfP = null;
  function loadPdfJs() {
    if (pdfP) return pdfP;
    pdfP = new Promise(function (ok, no) {
      if (window.pdfjsLib) return ok(window.pdfjsLib);
      var s = document.createElement('script'); s.src = PDFJS + 'pdf.min.js';
      s.onload = function () { window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS + 'pdf.worker.min.js'; ok(window.pdfjsLib); };
      s.onerror = function () { pdfP = null; no(new Error('load')); };
      document.head.appendChild(s);
    });
    return pdfP;
  }
  var ov = null, vw = null, cur = 0, tok = 0;
  function kindTag(k) {
    if (k === 'answers') return '<span class="hnn-tag a">إجابات</span>';
    if (k === 'listening') return '<span class="hnn-tag l">نصوص استماع</span>';
    if (k === 'solved') return '<span class="hnn-tag a">محلول</span>';
    if (k === 'summary') return '<span class="hnn-tag l">ملخص</span>';
    return '<span class="hnn-tag">أسئلة</span>';
  }
  function build() {
    ov = el('div'); ov.id = 'hnn-ov'; ov.style.setProperty('--hc', C);
    var top = el('div', 'hnn-top');
    var x = el('button', 'hnn-ib', '✕'); x.setAttribute('aria-label', 'إغلاق'); x.onclick = close;
    top.appendChild(el('h2', '', 'الامتحانات والمراجعات<small>' + esc(D.title) + ' · ' + D.total + ' ملفًا</small>'));
    top.appendChild(x);
    ov.appendChild(top);
    var tabs = el('div', 'hnn-tabs'); ov.appendChild(tabs);
    var body = el('div', 'hnn-body'); ov.appendChild(body);
    var all = el('button', 'hnn-tab on', 'الكل'); tabs.appendChild(all);
    var tbs = [all];
    all.onclick = function () { pick(-1); };
    D.sources.forEach(function (s, i) { var b = el('button', 'hnn-tab', esc(s.pub)); b.onclick = function () { pick(i); }; tabs.appendChild(b); tbs.push(b); });
    function pick(i) {
      tbs.forEach(function (b, k) { b.classList.toggle('on', k === i + 1); });
      body.innerHTML = '';
      D.sources.forEach(function (s, k) { if (i === -1 || i === k) body.appendChild(srcBlock(s)); });
      body.scrollTop = 0;
    }
    pick(-1);
    vw = el('div', 'hnn-vw'); ov.appendChild(vw);
    document.body.appendChild(ov);
  }
  function srcBlock(s) {
    var b = el('section', 'hnn-src');
    var h = el('div', 'hnn-sh');
    h.innerHTML = '<span class="hnn-pub">' + esc(s.pub) + '</span><span class="hnn-st">' + esc(s.title) + '</span><span class="hnn-cnt">' + s.items.length + '</span>';
    b.appendChild(h);
    var g = el('div', 'hnn-grid');
    s.items.forEach(function (it, i) {
      var c = el('button', 'hnn-card');
      var n = it.kind === 'answers' ? '✓' : it.kind === 'listening' ? '🎧' : it.kind === 'summary' ? '📘' : String(it.n || i + 1);
      c.innerHTML = '<span class="hnn-num">' + n + '</span><span class="hnn-cn">' + esc(it.name) + '</span><span class="hnn-meta">' + kindTag(it.kind) + '<span class="hnn-tag">' + it.pages + ' ص</span></span>';
      c.onclick = function () { view(it, s); };
      g.appendChild(c);
    });
    b.appendChild(g);
    if (s.full) {
      var f = el('button', 'hnn-full', '📚 الملف الكامل كما هو · ' + s.full.pages + ' صفحة');
      f.onclick = function () { view({ name: 'الملف الكامل', file: s.full.file, pages: s.full.pages }, s); };
      b.appendChild(f);
    }
    return b;
  }
  function view(it, s) {
    var my = ++tok;
    vw.innerHTML = '';
    var t = el('div', 'hnn-vt');
    var bk = el('button', 'hnn-ib', '→'); bk.setAttribute('aria-label', 'رجوع'); bk.onclick = closeView;
    var dl = el('a', 'hnn-ib', '⬇'); dl.href = url(it.file); dl.setAttribute('download', ''); dl.setAttribute('aria-label', 'تحميل');
    var op = el('a', 'hnn-ib', '🖨'); op.href = url(it.file); op.target = '_blank'; op.rel = 'noopener'; op.setAttribute('aria-label', 'فتح للطباعة');
    t.appendChild(bk);
    t.appendChild(el('h3', '', esc(it.name) + '<small>' + esc(s.pub + ' · ' + s.title) + ' · ' + it.pages + ' صفحة</small>'));
    t.appendChild(op); t.appendChild(dl);
    vw.appendChild(t);
    var pg = el('div', 'hnn-pages'); vw.appendChild(pg);
    vw.classList.add('on');
    var slots = [];
    for (var i = 1; i <= it.pages; i++) {
      var p = el('div', 'hnn-pg'); p.style.aspectRatio = '0.72'; p.appendChild(el('div', 'ph', 'جاري التحميل…')); p.appendChild(el('span', 'hnn-pn', i + ' / ' + it.pages));
      pg.appendChild(p); slots.push(p);
    }
    loadPdfJs().then(function (lib) { return lib.getDocument(url(it.file)).promise; }).then(function (doc) {
      if (my !== tok) return;
      var done = {};
      function render(i) {
        if (done[i] || my !== tok) return; done[i] = 1;
        doc.getPage(i + 1).then(function (page) {
          if (my !== tok) return;
          var w = slots[i].clientWidth || 360;
          var v1 = page.getViewport({ scale: 1 });
          var dpr = Math.min(window.devicePixelRatio || 1, 2);
          var vp = page.getViewport({ scale: (w * dpr) / v1.width });
          var cv = document.createElement('canvas'); cv.width = Math.floor(vp.width); cv.height = Math.floor(vp.height);
          slots[i].style.aspectRatio = v1.width + ' / ' + v1.height;
          return page.render({ canvasContext: cv.getContext('2d'), viewport: vp }).promise.then(function () {
            if (my !== tok) return;
            var ph = slots[i].querySelector('.ph'); if (ph) ph.remove();
            slots[i].insertBefore(cv, slots[i].firstChild);
          });
        });
      }
      if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) render(slots.indexOf(e.target)); }); }, { root: pg, rootMargin: '600px 0px' });
        slots.forEach(function (sl) { io.observe(sl); });
      } else slots.forEach(function (_, i) { render(i); });
    }).catch(function () {
      if (my !== tok) return;
      pg.innerHTML = '<div class="hnn-msg">تعذّر عرض الملف داخل التطبيق.<br><a href="' + url(it.file) + '" target="_blank" rel="noopener">افتح الملف</a></div>';
    });
  }
  function closeView() { tok++; vw.classList.remove('on'); vw.innerHTML = ''; }
  function open() {
    ensureFont(); ensureStyle();
    if (!ov || !document.body.contains(ov)) build();
    ov.classList.add('on');
    if (!wantOpen) { try { history.pushState({ hnn: 1 }, ''); } catch (e) {} }
    wantOpen = true;
    loadPdfJs().catch(function () {});
  }
  function close() { wantOpen = false; if (vw) closeView(); if (ov) ov.classList.remove('on'); }
  window.addEventListener('popstate', function () {
    if (vw && vw.classList.contains('on')) { closeView(); try { history.pushState({ hnn: 1 }, ''); } catch (e) {} return; }
    if (ov && ov.classList.contains('on')) close();
  });
  var ICON_HOME = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>';
  var ICON_DOC = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h4"/></svg>';
  var wantOpen = /[?&]exams=1/.test(location.search) || /hnn-exams/.test(location.hash);
  function bar() {
    if (!document.body) return;
    ensureStyle(); ensureFont();
    if (!document.getElementById('hnn-bar')) {
      var b = el('div'); b.id = 'hnn-bar'; b.style.setProperty('--hc', C);
      var a = el('a', '', ICON_HOME + '<span>كل المواد</span>'); a.href = home; b.appendChild(a);
      if (D) {
        b.appendChild(el('span', 'sep'));
        var e = el('button', '', ICON_DOC + '<span>الامتحانات</span><span class="c">' + D.total + '</span>');
        e.onclick = open; b.appendChild(e);
      }
      document.body.appendChild(b);
    }
    if (D && wantOpen && (!ov || !document.body.contains(ov) || !ov.classList.contains('on'))) { if (ov && !document.body.contains(ov)) ov = null; open(); }
  }
  var APP = (location.pathname.match(/\/(arabic|religion|math|english|quran)\//) || [])[1] || '';
  function theme() {
    if (APP !== 'arabic' && APP !== 'religion') return;
    if (document.getElementById('hnn-theme')) return;
    var l = document.createElement('link'); l.id = 'hnn-theme-font'; l.rel = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Aref+Ruqaa:wght@400;700&family=Baloo+Bhaijaan+2:wght@500;600;700;800&display=swap';
    document.head.appendChild(l);
    var B = "'Baloo Bhaijaan 2',Cairo,sans-serif", R = "'Aref Ruqaa','Baloo Bhaijaan 2',serif";
    var c = APP === 'religion'
      ? '[style*="Cairo"],[style*="Noto Naskh Arabic"]{font-family:' + B + '!important}[style*="Reem Kufi"]{font-family:' + R + '!important}'
      : '[style*="\'Cairo\'"]{font-family:' + B + '!important}[style*="font:800 40px"],[style*="font:800 22px"],[style*="font: 800 40px"],[style*="font: 800 22px"],[style*="font-size:40px"],[style*="font-size: 40px"]{font-family:' + R + '!important}';
    var s = document.createElement('style'); s.id = 'hnn-theme'; s.textContent = c; document.head.appendChild(s);
  }
  var lastFit = '';
  function fit() {
    if (APP !== 'arabic' && APP !== 'religion') return;
    var W = window.innerWidth, H = window.innerHeight;
    var z = W >= 700 ? Math.min(W * 0.94 / 480, H >= W ? 1.62 : 1.45) : 1;
    z = Math.round(z * 100) / 100;
    var els = document.querySelectorAll('[style*="max-width:480px"],[style*="max-width: 480px"],#hnn-fit');
    var key = z + '|' + H + '|' + els.length;
    for (var i = 0; i < els.length; i++) {
      var e = els[i];
      if (String(e.style.zoom) !== String(z)) e.style.zoom = z === 1 ? '' : z;
      if (e.id === 'hnn-fit') { var h = z === 1 ? '' : Math.floor(H / z) + 'px'; if (e.style.height !== h) e.style.height = h || '100dvh'; }
    }
    lastFit = key;
  }
  window.addEventListener('resize', fit);
  window.addEventListener('orientationchange', function () { setTimeout(fit, 250); });
  function boot() { bar(); theme(); fit(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
  setInterval(boot, 1000);
  if ('serviceWorker' in navigator && location.protocol === 'https:') { try { navigator.serviceWorker.register(home + 'sw.js', { scope: home }).catch(function () {}); } catch (e) {} }
})();
