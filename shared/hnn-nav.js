(function () {
  if (window.__hnnNav) return;
  window.__hnnNav = true;
  var D = window.HNN_EXAMS || null;
  var C = (D && D.color) || '#1f1b16';
  var base = new URL('./', location.href).href;
  var home = new URL('../', location.href).href;
  var PDFJS = new URL('../shared/pdfjs/', location.href).href;
  var css = '' +
    '#hnn-bar{position:relative;z-index:2147483000;box-sizing:border-box;width:100%;display:flex;align-items:center;gap:8px;direction:rtl;padding:8px max(14px,env(safe-area-inset-right)) 8px max(14px,env(safe-area-inset-left));background:rgba(255,255,255,.94);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);border-bottom:1px solid rgba(31,27,22,.08);box-shadow:0 2px 14px rgba(31,27,22,.06);font-family:\'Baloo Bhaijaan 2\',Cairo,system-ui,sans-serif}' +
    '#hnn-bar *{box-sizing:border-box}' +
    '#hnn-bar{overflow:hidden;max-width:100vw}' +
    '#hnn-bar .hb{all:unset;cursor:pointer;display:inline-flex;align-items:center;gap:9px;margin-inline-end:auto;font:800 16px/1 \'Baloo Bhaijaan 2\',Cairo,system-ui,sans-serif;color:#2a241d;white-space:nowrap}' +
    '#hnn-bar .hb img{width:34px;height:34px;border-radius:10px;box-shadow:0 2px 6px rgba(0,0,0,.12)}' +
    '#hnn-bar a.nv,#hnn-bar button{all:unset;cursor:pointer;display:inline-flex;align-items:center;gap:7px;height:38px;padding:0 15px;border-radius:999px;font:700 14px/1 \'Baloo Bhaijaan 2\',Cairo,system-ui,sans-serif;white-space:nowrap;transition:transform .12s,filter .15s,background .15s}' +
    '#hnn-bar a.nv{background:#f2eee7;color:#3b342b;border:1px solid #e6dfd3}' +
    '#hnn-bar a.nv:hover{background:#ebe5da}' +
    '#hnn-bar button{color:#fff;background:var(--hc);box-shadow:0 3px 10px color-mix(in srgb,var(--hc) 35%,transparent)}' +
    '#hnn-bar button.bd{--hc:#2f6b5a}' +
    '#hnn-bar button:hover{filter:brightness(1.07)}' +
    '#hnn-bar a.nv:active,#hnn-bar button:active{transform:scale(.96)}' +
    '#hnn-bar svg{width:17px;height:17px;flex-shrink:0}' +
    '#hnn-bar .c{background:rgba(255,255,255,.26);border-radius:999px;padding:3px 8px;font-size:12px;line-height:1}' +
    '#hnn-bar .sep{display:none}' +
    '@media (max-width:560px){#hnn-bar a.pr span{display:none}#hnn-bar a.pr{padding:0 10px}#hnn-bar{gap:6px;padding-top:6px;padding-bottom:6px}#hnn-bar .hb span{display:none}#hnn-bar a.nv,#hnn-bar button{height:34px;padding:0 11px;font-size:12.5px}#hnn-bar .c{display:none}}' +
    '@media (max-width:360px){#hnn-bar a.nv span{display:none}}' +
    '@media print{#hnn-bar{display:none}}' +
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
      var hb = el('a', 'hb', '<img src="' + home + 'icons/icon-192.png" alt=""><span>تعلّم مع حنين</span>'); hb.href = home; b.appendChild(hb);
      var a = el('a', 'nv', ICON_HOME + '<span>كل المواد</span>'); a.href = home; b.appendChild(a);
      if (D) {
        b.appendChild(el('span', 'sep'));
        var e = el('button', '', ICON_DOC + '<span>الامتحانات</span><span class="c">' + D.total + '</span>');
        e.onclick = open; b.appendChild(e);
      }
      var PR = { english: ['print.html', 'طباعة السبورة'], religion: ['print.html', 'كتاب المراجعة'], arabic: ['summary.html', 'ملخص المنهج'] }[APP]; if (PR) { var pr = el('a', 'nv pr', '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg><span>' + PR[1] + '</span>'); pr.href = base + PR[0]; pr.target = '_blank'; pr.rel = 'noopener'; b.appendChild(pr); }
      if (APP === 'english') { b.style.position = 'fixed'; b.style.top = '0'; b.style.left = '0'; b.style.right = '0'; }
      document.body.insertBefore(b, document.body.firstChild);
    } else if (document.body.firstElementChild !== document.getElementById('hnn-bar')) {
      document.body.insertBefore(document.getElementById('hnn-bar'), document.body.firstChild);
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
  function fitEn() {
    var W = window.innerWidth, H = window.innerHeight;
    if (!document.getElementById('hnn-en-css')) { var st = document.createElement('style'); st.id = 'hnn-en-css'; st.textContent = '[data-hnnen] button{box-sizing:border-box;max-width:100%}[data-hnnen] div[style*="display: grid"]>*{min-width:0}[data-hnnen] button>div{min-width:0}html,body{overflow-x:hidden}'; document.head.appendChild(st); }
    var hb = document.getElementById('hnn-bar');
    if (hb && document.body) { var ph = hb.offsetHeight + 'px'; if (document.body.style.paddingTop !== ph) document.body.style.paddingTop = ph; }
    var e = document.querySelector('[data-hnnen]');
    if (!e) {
      var ds = document.querySelectorAll('div[style*="100vh"]');
      for (var i = 0; i < ds.length; i++) { if (/Nunito/.test(ds[i].style.fontFamily)) { e = ds[i]; break; } }
      if (!e) return;
      e.setAttribute('data-hnnen', '1');
    }
    var z = W >= 700 ? Math.round(Math.min(W * 0.94 / 430, H >= W ? 1.7 : 1.38) * 100) / 100 : 1;
    var want = z === 1 ? '' : String(z);
    if (String(e.style.zoom || '') !== want) e.style.zoom = want;
    var nv = e.querySelector('nav');
    var fd = e.querySelector('div[style*="pointer-events: none"][style*="bottom: 0"]');
    var wide = z !== 1;
    if (nv) {
      var S = wide ? { bottom: '14px', borderRadius: '28px', border: '1px solid rgb(241, 227, 239)', paddingBottom: '8px', boxShadow: '0 10px 30px -8px rgba(120, 50, 120, 0.35), 0 2px 6px rgba(120, 50, 120, 0.08)' } : { bottom: '0px', borderRadius: '26px 26px 0px 0px', border: '', paddingBottom: 'calc(10px + env(safe-area-inset-bottom))', boxShadow: 'rgba(120, 50, 120, 0.4) 0px -12px 34px -18px' };
      if (!wide) { if (nv.getAttribute('data-hnnw') === '1') { nv.style.border = ''; nv.style.borderTop = '1px solid rgb(241, 227, 239)'; for (var k in S) if (k !== 'border') nv.style[k] = S[k]; nv.removeAttribute('data-hnnw'); } }
      else { for (var k2 in S) if (nv.style[k2] !== S[k2]) nv.style[k2] = S[k2]; nv.setAttribute('data-hnnw', '1'); }
    }
    if (fd) {
      var fw = wide ? (Math.ceil(W / z) + 'px') : 'min(100%, 430px)';
      if (fd.style.width !== fw) fd.style.width = fw;
    }
  }
  function fit() {
    if (APP === 'english') { fitEn(); return; }
    if (APP !== 'arabic' && APP !== 'religion') return;
    var W = window.innerWidth, H = window.innerHeight;
    var els = document.querySelectorAll('[style*="max-width:480px"],[style*="max-width: 480px"],#hnn-fit,[data-hnnfit]');
    for (var i = 0; i < els.length; i++) {
      var e = els[i]; e.setAttribute('data-hnnfit', '1');
      var wide = APP === 'arabic' && W >= 1100 && e.textContent.indexOf('بطاقات الدروس') >= 0;
      var relw = APP === 'religion' && e.id === 'hnn-fit' && W >= 1000;
      var z, mw = '';
      if (wide) { z = W >= 1500 ? 1.22 : 1.08; mw = Math.min(1180, Math.floor(W * 0.92 / z)) + 'px'; }
      else if (relw) { z = Math.round(Math.min(1.3, W / 1200 + .25) * 100) / 100; mw = '760px'; }
      else z = W >= 700 ? Math.min(W * 0.94 / 480, H >= W ? 1.62 : (W >= 1500 ? 1.6 : 1.45)) : 1;
      z = Math.round(z * 100) / 100;
      if (e.id !== 'hnn-fit' || APP === 'religion') { var want = mw || '480px'; if (e.style.maxWidth !== want) e.style.maxWidth = want; }
      if (APP === 'religion' && e.id === 'hnn-fit') relNav(e, relw);
      if (String(e.style.zoom) !== String(z === 1 ? '' : z)) e.style.zoom = z === 1 ? '' : z;
      if (e.id === 'hnn-fit') { var hb0 = document.getElementById('hnn-bar'); var bh = hb0 ? hb0.offsetHeight : 0; var h = z === 1 ? 'calc(100dvh - ' + bh + 'px)' : Math.floor((H - bh) / z) + 'px'; if (e.style.height !== h) e.style.height = h; }
    }
  }
  function relNav(root, w) {
    var ds = root.querySelectorAll('div[style*="z-index: 6"],div[style*="z-index:6"]');
    for (var i = 0; i < ds.length; i++) {
      var d = ds[i];
      if (!/bottom: 16px|bottom:16px/.test(d.getAttribute('style') || '')) continue;
      var want = w ? '50%' : '14px';
      if (d.style.left !== want) { d.style.left = want; d.style.right = w ? 'auto' : '14px'; d.style.width = w ? '460px' : ''; d.style.transform = w ? 'translateX(-50%)' : ''; }
    }
  }
  function relHero() {
    var root = document.getElementById('hnn-fit');
    if (!root) return;
    var ds = root.querySelectorAll('div[style*="height:400px"],div[style*="height: 400px"]');
    for (var i = 0; i < ds.length; i++) {
      var d = ds[i];
      if (d.getAttribute('data-hnnhero') === '1') continue;
      if (!/url\(/.test(d.style.backgroundImage || '')) continue;
      d.setAttribute('data-hnnhero', '1');
      var pat = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Cg fill='none' stroke='%23e9c46a' stroke-opacity='.13' stroke-width='1'%3E%3Cpath d='M32 4l8 20 20 8-20 8-8 20-8-20-20-8 20-8z'/%3E%3Crect x='18' y='18' width='28' height='28' transform='rotate(45 32 32)'/%3E%3Ccircle cx='32' cy='32' r='7'/%3E%3C/g%3E%3C/svg%3E\")";
      d.style.backgroundImage = 'linear-gradient(180deg,rgba(11,21,48,0) 55%,#0b1530 100%),radial-gradient(60% 55% at 22% 18%,rgba(233,196,106,.28) 0%,rgba(233,196,106,0) 70%),' + pat + ',linear-gradient(160deg,#16306b 0%,#0f1f4a 45%,#0b1530 100%)';
      d.style.backgroundSize = 'auto,auto,64px 64px,auto';
      d.style.backgroundPosition = 'center';
      d.style.overflow = 'hidden';
      d.style.isolation = 'isolate';
      var m = document.createElement('div');
      m.setAttribute('aria-hidden', 'true');
      m.style.cssText = 'position:absolute;z-index:-1;top:34px;left:26px;width:110px;height:110px;pointer-events:none;filter:drop-shadow(0 0 18px rgba(233,196,106,.45))';
      m.innerHTML = '<svg viewBox="0 0 100 100" width="110" height="110"><path d="M62 12a40 40 0 1 0 26 66A34 34 0 1 1 62 12z" fill="#e9c46a"/><path d="M74 30l3.5 8 8.6.8-6.5 5.7 2 8.4-7.6-4.5-7.5 4.5 1.9-8.4-6.5-5.7 8.6-.8z" fill="#e9c46a"/></svg>';
      d.insertBefore(m, d.firstChild);
      var sk = document.createElement('div');
      sk.setAttribute('aria-hidden', 'true');
      sk.style.cssText = 'position:absolute;z-index:-1;left:0;right:0;bottom:0;height:120px;pointer-events:none;opacity:.5';
      sk.innerHTML = '<svg viewBox="0 0 480 120" preserveAspectRatio="xMidYMax slice" width="100%" height="120"><path fill="#1c3570" d="M0 120V86h40V70h14v16h30V52c0-14 12-26 26-26s26 12 26 26v34h22V40h6V22h4v18h6v46h40V60c0-22 18-40 40-40s40 18 40 40v26h40V40h6V22h4v18h6v46h22V52c0-14 12-26 26-26s26 12 26 26v34h30V70h14v16h40v34z"/></svg>';
      d.insertBefore(sk, d.firstChild);
    }
  }
  window.addEventListener('resize', fit);
  window.addEventListener('orientationchange', function () { setTimeout(fit, 250); });
  function boot() { bar(); theme(); fit(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
  setInterval(boot, 1000);
  if ('serviceWorker' in navigator && location.protocol === 'https:') { try { navigator.serviceWorker.register(home + 'sw.js', { scope: home }).catch(function () {}); } catch (e) {} }
})();
