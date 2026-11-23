(function () {
  if (window.__hqx) return;
  window.__hqx = true;
  var MT = (window.HQX && window.HQX.mt) || null;
  var AR = '٠١٢٣٤٥٦٧٨٩';
  function ar(n) { return String(n).replace(/\d/g, function (d) { return AR[d]; }); }
  function el(t, c, h) { var e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function pad(n) { return ('00' + n).slice(-3); }
  var css = '' +
    '.hqx{position:fixed;inset:0;z-index:2147483645;display:none;flex-direction:column;direction:rtl;background:#fdf2f8;color:#0f172a;font-family:"Baloo Bhaijaan 2",Tajawal,system-ui,sans-serif}' +
    '.hqx.on{display:flex}' +
    'html.hqx-open #hnn-bar{display:none!important}' +
    '.hqx *{box-sizing:border-box}' +
    '.hqx button{font-family:inherit}' +
    '.hqx-hd{flex-shrink:0;position:relative;overflow:hidden;color:#fff;padding:16px 18px 22px;background:radial-gradient(circle at 12% 0%,rgba(255,255,255,.25),transparent 40%),linear-gradient(135deg,#db2777,#be185d 55%,#831843)}' +
    '.hqx-hd.ali{background:radial-gradient(circle at 12% 0%,rgba(255,215,120,.3),transparent 45%),linear-gradient(135deg,#047857,#065f46 55%,#064e3b)}' +
    '.hqx-hr{display:flex;align-items:center;gap:12px;max-width:980px;margin:0 auto;position:relative}' +
    '.hqx-ib{all:unset;cursor:pointer;width:42px;height:42px;border-radius:14px;background:rgba(255,255,255,.18);display:grid;place-items:center;flex-shrink:0}' +
    '.hqx-ib svg{width:20px;height:20px}' +
    '.hqx-tt{flex:1;min-width:0}' +
    '.hqx-tt h2{margin:0;font-size:24px;font-weight:900;line-height:1.3}' +
    '.hqx-tt p{margin:2px 0 0;font-size:13.5px;font-weight:700;opacity:.88}' +
    '.hqx-body{flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch}' +
    '.hqx-wrap{max-width:980px;margin:0 auto;padding:16px 16px 70px}' +
    '.hqx-bar{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:14px}' +
    '.hqx-chip{all:unset;cursor:pointer;padding:8px 14px;border-radius:999px;background:#fff;border:1.5px solid #fbcfe8;font-size:14px;font-weight:800;color:#9d174d;white-space:nowrap}' +
    '.hqx-chip.on{background:#db2777;border-color:#db2777;color:#fff}' +
    '.hqx-act{all:unset;cursor:pointer;display:inline-flex;align-items:center;gap:7px;padding:9px 15px;border-radius:14px;font-size:14px;font-weight:900;background:#fff;border:1.5px solid #fbcfe8;color:#be185d}' +
    '.hqx-act svg{width:17px;height:17px}' +
    '.hqx-act.p{background:linear-gradient(135deg,#f472b6,#db2777);border-color:transparent;color:#fff;box-shadow:0 8px 18px -8px #db2777}' +
    '.hqx-act.on{background:#831843;border-color:#831843;color:#ffd27a}' +
    '.hqx-sp{flex:1}' +
    '.hqx-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(420px,1fr));gap:14px}' +
    '@media (max-width:900px){.hqx-grid{grid-template-columns:1fr}}' +
    '.hqx-g{background:#fff;border:1px solid #fce7f3;border-radius:24px;padding:16px;box-shadow:0 14px 28px -24px #be185d;display:flex;flex-direction:column;gap:10px}' +
    '.hqx-gh{display:flex;align-items:flex-start;gap:10px}' +
    '.hqx-gt{flex:1;font-family:"Amiri Quran",serif;font-size:24px;line-height:1.7;color:#831843}' +
    '.hqx-cnt{flex-shrink:0;font-size:12px;font-weight:900;padding:3px 10px;border-radius:999px;background:#fdf2f8;color:#be185d;border:1px solid #fbcfe8;margin-top:6px}' +
    '.hqx-tag{flex-shrink:0;font-size:11px;font-weight:900;padding:3px 9px;border-radius:999px;margin-top:6px}' +
    '.hqx-it{display:flex;gap:10px;align-items:flex-start;padding:10px 12px;border-radius:16px;background:#fdf2f8}' +
    '.hqx-it.tab{background:#f5f3ff}' +
    '.hqx-sn{flex-shrink:0;min-width:86px;text-align:center;font-size:13px;font-weight:900;padding:5px 9px;border-radius:12px;background:#db2777;color:#fff;line-height:1.35}' +
    '.hqx-it.tab .hqx-sn{background:#7c3aed}' +
    '.hqx-sn small{display:block;font-size:11px;font-weight:700;opacity:.85}' +
    '.hqx-ay{flex:1;min-width:0;font-family:"Amiri Quran",serif;font-size:23px;line-height:2.05;color:#0f172a}' +
    '.hqx-ay mark{background:linear-gradient(transparent 55%,#fde68a 55%);color:#be123c;padding:0 2px;border-radius:3px}' +
    '.hqx-it.tab .hqx-ay mark{color:#6d28d9}' +
    '.hqx-nx{display:block;margin-top:2px;font-size:19px;color:#475569}' +
    '.hqx-nx:before{content:"ثم: ";font-family:"Baloo Bhaijaan 2",sans-serif;font-size:13px;font-weight:900;color:#94a3b8}' +
    '.hqx-pl{all:unset;cursor:pointer;flex-shrink:0;width:38px;height:38px;border-radius:50%;background:#fff;border:1.5px solid #fbcfe8;color:#db2777;display:grid;place-items:center;margin-top:4px}' +
    '.hqx-pl.on{background:#db2777;color:#fff;border-color:#db2777}' +
    '.hqx-pl svg{width:16px;height:16px}' +
    '.hqx-hint{display:flex;gap:8px;align-items:flex-start;padding:10px 12px;border-radius:14px;background:#fffbeb;border:1px dashed #fcd34d;font-size:14.5px;font-weight:700;color:#78350f;line-height:1.7}' +
    '.hqx-hint svg{width:18px;height:18px;flex-shrink:0;margin-top:3px;color:#d97706}' +
    '.hide-sn .hqx-sn{color:transparent!important;text-shadow:0 0 9px rgba(255,255,255,.95);cursor:pointer}' +
    '.hide-sn .hqx-sn.r{color:#fff!important;text-shadow:none}' +
    '.hqx-q{max-width:680px;margin:0 auto;background:#fff;border-radius:28px;padding:22px;border:1px solid #fce7f3;box-shadow:0 20px 40px -30px #be185d}' +
    '.hqx-qp{display:flex;justify-content:space-between;font-size:14px;font-weight:900;color:#be185d;margin-bottom:10px}' +
    '.hqx-qbar{height:8px;border-radius:9px;background:#fce7f3;overflow:hidden;margin-bottom:18px}' +
    '.hqx-qbar i{display:block;height:100%;background:linear-gradient(90deg,#f472b6,#db2777);border-radius:9px;transition:width .3s}' +
    '.hqx-qs{font-size:15px;font-weight:800;color:#64748b;margin-bottom:6px}' +
    '.hqx-qt{font-family:"Amiri Quran",serif;font-size:27px;line-height:1.9;color:#831843;margin-bottom:16px}' +
    '.hqx-qt.plain{font-family:inherit;font-size:22px;font-weight:900;line-height:1.6;color:#0f172a}' +
    '.hqx-op{all:unset;cursor:pointer;display:block;width:100%;box-sizing:border-box;margin-bottom:10px;padding:13px 16px;border-radius:18px;border:2px solid #fbcfe8;background:#fff;font-size:19px;font-weight:800;color:#0f172a;transition:transform .12s}' +
    '.hqx-op.q{font-family:"Amiri Quran",serif;font-size:23px;font-weight:400}' +
    '.hqx-op:active{transform:scale(.98)}' +
    '.hqx-op.ok{background:#dcfce7;border-color:#22c55e;color:#14532d}' +
    '.hqx-op.no{background:#fee2e2;border-color:#ef4444;color:#7f1d1d}' +
    '.hqx-fb{min-height:26px;font-size:16px;font-weight:900;margin:6px 0 12px}' +
    '.hqx-res{text-align:center}' +
    '.hqx-res .big{font-size:56px;font-weight:900;color:#db2777;line-height:1.1}' +
    '.hqx-stars{font-size:34px;letter-spacing:6px;color:#f59e0b;margin:8px 0}' +
    '.hqx-hero{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px;margin-bottom:18px}' +
    '.hqx-fact{background:#fff;border:1px solid #d1fae5;border-radius:18px;padding:12px 14px;box-shadow:0 10px 22px -20px #047857}' +
    '.hqx-fact small{display:block;font-size:12.5px;font-weight:800;color:#059669}' +
    '.hqx-fact b{display:block;font-size:16.5px;font-weight:900;line-height:1.55;color:#0f172a}' +
    '.hqx-sec{display:flex;align-items:center;gap:10px;margin:20px 0 12px;font-size:21px;font-weight:900;color:#065f46}' +
    '.hqx-sec:after{content:"";flex:1;height:2px;background:repeating-linear-gradient(90deg,#a7f3d0 0 8px,transparent 8px 14px)}' +
    '.hqx-tl{position:relative;padding-right:30px}' +
    '.hqx-tl:before{content:"";position:absolute;right:13px;top:6px;bottom:6px;width:3px;border-radius:3px;background:linear-gradient(#34d399,#047857)}' +
    '.hqx-st{position:relative;background:#fff;border:1px solid #d1fae5;border-radius:20px;padding:14px 16px;margin-bottom:12px;box-shadow:0 12px 24px -22px #047857}' +
    '.hqx-st:before{content:attr(data-n);position:absolute;right:-30px;top:12px;width:30px;height:30px;border-radius:50%;background:#047857;color:#fff;font-size:14px;font-weight:900;display:grid;place-items:center;border:3px solid #ecfdf5;transform:translateX(-1px)}' +
    '.hqx-st h4{margin:0 0 4px;font-size:18.5px;font-weight:900;color:#065f46}' +
    '.hqx-st p{margin:0;font-size:16px;font-weight:600;line-height:1.85;color:#334155}' +
    '.hqx-src{display:inline-block;margin-top:6px;font-size:12px;font-weight:800;color:#047857;background:#ecfdf5;border-radius:999px;padding:1px 10px}' +
    '.hqx-ls{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:10px}' +
    '.hqx-l{background:linear-gradient(140deg,#fef3c7,#fff 75%);border:1px solid #fde68a;border-radius:18px;padding:12px 14px;font-size:15.5px;font-weight:800;color:#78350f;line-height:1.7}' +
    '.hqx-l b{display:block;font-size:17px;color:#92400e}' +
    '.hqx-ali .hqx-chip.on,.hqx-ali .hqx-act.p{background:#047857;border-color:#047857;color:#fff}' +
    '.hqx-ali .hqx-op{border-color:#a7f3d0}' +
    '.hqx-ali .hqx-qp,.hqx-ali .hqx-res .big{color:#047857}' +
    '.hqx-ali .hqx-qbar{background:#d1fae5}.hqx-ali .hqx-qbar i{background:linear-gradient(90deg,#34d399,#047857)}' +
    '.hqx-ali .hqx-q{border-color:#d1fae5}' +
    '.hqx-cards{display:grid;grid-template-columns:1fr 1fr;gap:12px}' +
    '.hqx-card{all:unset;box-sizing:border-box;cursor:pointer;text-align:right;border-radius:24px;padding:16px;display:flex;align-items:center;gap:12px;transition:transform .18s}' +
    '.hqx-card:active{transform:scale(.98)}' +
    '.hqx-card .ic{width:54px;height:54px;flex:none;border-radius:18px;color:#fff;display:grid;place-items:center;font-size:24px;font-weight:900}' +
    '.hqx-card .tx{flex:1;min-width:0;display:flex;flex-direction:column;gap:3px}' +
    '.hqx-card b{font-size:clamp(17px,4.6vw,20px);font-weight:900;color:#0f172a;line-height:1.35}' +
    '.hqx-card small{font-size:12.5px;color:#64748b;font-weight:700;line-height:1.5}' +
    '@media (max-width:520px){.hqx-cards{grid-template-columns:1fr}.hqx-ay{font-size:21px}.hqx-gt{font-size:22px}.hqx-sn{min-width:72px}}';
  var I = {
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5z"/></svg>',
    stop: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>',
    key: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="4"/><path d="M10.8 12.2L20 3M16 7l3 3M14 9l2 2"/></svg>',
    eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
    quiz: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 6.5 7 .8-5.2 4.8 1.5 7-6.3-3.6-6.3 3.6 1.5-7L2 9.3l7-.8z"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6c-2.5-2-6-2-8.5-1v14c2.5-1 6-1 8.5 1 2.5-2 6-2 8.5-1V5c-2.5-1-6-1-8.5 1z"/><path d="M12 6v14"/></svg>'
  };
  var audio = null, playing = null;
  function stopAudio() { if (audio) { try { audio.pause(); } catch (e) {} } if (playing) { playing.classList.remove('on'); playing.innerHTML = I.play; } playing = null; }
  function playAyah(btn, s, a) {
    if (playing === btn) { stopAudio(); return; }
    stopAudio();
    try { var app = document.querySelector('audio'); if (app && !app.paused) app.pause(); } catch (e) {}
    if (!audio) { audio = new Audio(); audio.preload = 'auto'; }
    var srcs = ['https://everyayah.com/data/Husary_128kbps/' + pad(s) + pad(a) + '.mp3', 'https://everyayah.com/data/Husary_64kbps/' + pad(s) + pad(a) + '.mp3'], k = 0;
    audio.onerror = function () { k++; if (k < srcs.length && playing === btn) { audio.src = srcs[k]; audio.play().catch(function () {}); } else stopAudio(); };
    audio.onended = function () { stopAudio(); };
    audio.src = srcs[0];
    playing = btn; btn.classList.add('on'); btn.innerHTML = I.stop;
    var p = audio.play(); if (p && p.catch) p.catch(function () {});
  }
  function ayahHtml(text, st, n) {
    var w = text.split(' ');
    if (st < 0 || !n) return esc(text);
    return w.map(function (x, i) { var e = esc(x); if (i === st) e = '<mark>' + e; if (i === st + n - 1) e = e + '</mark>'; return e; }).join(' ');
  }
  function juz(s) { return s >= 78 ? 'amma' : 'tab'; }
  var SCOPES = [['all', 'الكل'], ['cross', 'بين عم وتبارك'], ['amma', 'داخل جزء عم'], ['tab', 'داخل جزء تبارك']];
  var SCN = { cross: ['بين الجزأين', '#fef3c7', '#92400e'], amma: ['جزء عم', '#fce7f3', '#be185d'], tab: ['جزء تبارك', '#ede9fe', '#6d28d9'] };
  var ov = {}, state = { f: 'all', hide: false };
  function shell(id, title, sub, cls) {
    var o = el('div', 'hqx ' + (cls || '')); o.id = id;
    var hd = el('div', 'hqx-hd ' + (cls === 'hqx-ali' ? 'ali' : '')), r = el('div', 'hqx-hr');
    var b = el('button', 'hqx-ib', I.close); b.onclick = function () { history.back(); };
    r.appendChild(b);
    var tt = el('div', 'hqx-tt', '<h2></h2><p></p>'); r.appendChild(tt); hd.appendChild(r); o.appendChild(hd);
    var body = el('div', 'hqx-body'), w = el('div', 'hqx-wrap'); body.appendChild(w); o.appendChild(body);
    o._t = tt; o._w = w; o._b = body; o._x = b;
    o.setHead = function (t, s, back) { tt.querySelector('h2').textContent = t; tt.querySelector('p').textContent = s; b.innerHTML = back ? I.back : I.close; };
    o.setHead(title, sub);
    document.body.appendChild(o);
    return o;
  }
  function renderMt() {
    var o = ov.mt; o.setHead('متشابهات مختارة', ar(MT.groups.length) + ' موضعًا متشابهًا · جزء عم وتبارك', false); o._mode = 'list';
    var w = o._w; w.innerHTML = '';
    var bar = el('div', 'hqx-bar');
    SCOPES.forEach(function (s) {
      var c = el('button', 'hqx-chip' + (state.f === s[0] ? ' on' : ''), s[1]);
      c.onclick = function () { state.f = s[0]; renderMt(); }; bar.appendChild(c);
    });
    bar.appendChild(el('span', 'hqx-sp'));
    var hb = el('button', 'hqx-act' + (state.hide ? ' on' : ''), I.eye + (state.hide ? 'أسماء السور مخفية' : 'إخفاء أسماء السور'));
    hb.onclick = function () { state.hide = !state.hide; renderMt(); }; bar.appendChild(hb);
    var qb = el('button', 'hqx-act p', I.quiz + 'اختبار المتشابهات'); qb.onclick = function () { startMtQuiz(); }; bar.appendChild(qb);
    w.appendChild(bar);
    var grid = el('div', 'hqx-grid' + (state.hide ? ' hide-sn' : ''));
    MT.groups.forEach(function (g) {
      if (state.f !== 'all' && g.sc !== state.f) return;
      var c = el('div', 'hqx-g'), sc = SCN[g.sc];
      c.appendChild(el('div', 'hqx-gh', '<div class="hqx-gt">' + esc(g.t) + '</div><span class="hqx-tag" style="background:' + sc[1] + ';color:' + sc[2] + '">' + sc[0] + '</span><span class="hqx-cnt">' + ar(g.it.length) + ' مواضع</span>'));
      g.it.forEach(function (it) {
        var row = el('div', 'hqx-it ' + juz(it[0]));
        row.appendChild(el('div', 'hqx-sn', esc(MT.names[it[0]]) + '<small>آية ' + ar(it[1]) + '</small>'));
        var t = ayahHtml(it[2], it[3], it[4]);
        if (it[3] < 0 && it[5]) t += '<span class="hqx-nx">' + ayahHtml(it[5], it[6], it[7]) + '</span>';
        row.appendChild(el('div', 'hqx-ay', t));
        var pb = el('button', 'hqx-pl', I.play); pb.title = 'استماع';
        pb.onclick = function () { playAyah(pb, it[0], it[1]); }; row.appendChild(pb);
        c.appendChild(row);
      });
      if (g.h) c.appendChild(el('div', 'hqx-hint', I.key + '<span><b>رابط للحفظ: </b>' + esc(g.h) + '</span>'));
      grid.appendChild(c);
    });
    grid.addEventListener('click', function (e) { var t = e.target.closest ? e.target.closest('.hqx-sn') : null; if (t && state.hide) t.classList.toggle('r'); });
    w.appendChild(grid);
    o._b.scrollTop = 0;
  }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function keyOf(it) { var w = (it[3] < 0 ? it[5] : it[2]).split(' '), st = it[3] < 0 ? it[6] : it[3], n = it[3] < 0 ? it[7] : it[4]; return w.slice(st, st + n).join(' '); }
  function buildMtQs() {
    var qs = [];
    MT.groups.forEach(function (g) {
      if (g.it.length < 2) return;
      g.it.forEach(function (it) {
        var right = keyOf(it), opts = [];
        g.it.forEach(function (o) { var k = keyOf(o); if (k && opts.indexOf(k) < 0) opts.push(k); });
        if (opts.length < 2 || !right) return;
        if (Math.random() < .5) {
          qs.push({ kind: 'end', s: it[0], a: it[1], t: g.t, right: right, opts: shuffle(opts.slice(0, 4).indexOf(right) >= 0 ? opts.slice(0, 4) : opts.slice(0, 3).concat([right])) });
        } else {
          var names = [], rn = MT.names[it[0]];
          g.it.forEach(function (o) { var n = MT.names[o[0]]; if (names.indexOf(n) < 0) names.push(n); });
          if (names.length < 2) return;
          qs.push({ kind: 'surah', s: it[0], a: it[1], text: it[2], st: it[3], n: it[4], right: rn, opts: shuffle(names.slice(0, 4).indexOf(rn) >= 0 ? names.slice(0, 4) : names.slice(0, 3).concat([rn])) });
        }
      });
    });
    return shuffle(qs).slice(0, 10);
  }
  function runQuiz(o, qs, render, done) {
    var i = 0, score = 0;
    function show() {
      var w = o._w; w.innerHTML = '';
      if (i >= qs.length) { done(score, qs.length); return; }
      var q = qs[i], box = el('div', 'hqx-q');
      box.appendChild(el('div', 'hqx-qp', '<span>سؤال ' + ar(i + 1) + ' من ' + ar(qs.length) + '</span><span>' + ar(score) + ' صح</span>'));
      box.appendChild(el('div', 'hqx-qbar', '<i style="width:' + (i / qs.length * 100) + '%"></i>'));
      render(q, box);
      var fb = el('div', 'hqx-fb'); box.appendChild(fb);
      var answered = false;
      q.opts.forEach(function (op) {
        var b = el('button', 'hqx-op' + (q.quran ? ' q' : ''), esc(op));
        b.onclick = function () {
          if (answered) return; answered = true;
          var ok = op === q.right; if (ok) score++;
          b.classList.add(ok ? 'ok' : 'no');
          if (!ok) Array.prototype.forEach.call(box.querySelectorAll('.hqx-op'), function (x) { if (x.textContent === q.right) x.classList.add('ok'); });
          fb.textContent = ok ? 'إجابة صحيحة، ما شاء الله!' : 'الإجابة الصحيحة باللون الأخضر';
          fb.style.color = ok ? '#15803d' : '#b91c1c';
          var nx = el('button', 'hqx-act p', i + 1 < qs.length ? 'السؤال التالي' : 'النتيجة');
          nx.style.marginTop = '4px'; nx.onclick = function () { i++; show(); }; box.appendChild(nx);
        };
        box.appendChild(b);
      });
      w.appendChild(box); o._b.scrollTop = 0;
    }
    show();
  }
  function result(o, score, total, again, back) {
    var w = o._w; w.innerHTML = '';
    var st = Math.round(score / total * 5), box = el('div', 'hqx-q hqx-res');
    box.innerHTML = '<div class="big">' + ar(score) + ' / ' + ar(total) + '</div><div class="hqx-stars">' + '★★★★★'.slice(0, st) + '<span style="color:#e5e7eb">' + '★★★★★'.slice(st) + '</span></div><div style="font-size:19px;font-weight:900;margin-bottom:16px">' + (score === total ? 'ممتاز! كل الإجابات صحيحة' : score >= total * .7 ? 'أحسنت! مستوى رائع' : 'محاولة جميلة، نراجع ونحاول مرة ثانية') + '</div>';
    var b1 = el('button', 'hqx-act p', 'اختبار جديد'); b1.onclick = again;
    var b2 = el('button', 'hqx-act', 'رجوع'); b2.onclick = back; b2.style.marginRight = '8px';
    box.appendChild(b1); box.appendChild(b2); w.appendChild(box);
  }
  function startMtQuiz() {
    var o = ov.mt; o._mode = 'quiz'; push(3);
    o.setHead('اختبار المتشابهات', 'أكمل الآية أو اعرف السورة', true);
    runQuiz(o, buildMtQs(), function (q, box) {
      if (q.kind === 'end') {
        box.appendChild(el('div', 'hqx-qs', 'كيف تكمل الآية في سورة ' + esc(MT.names[q.s]) + '؟'));
        box.appendChild(el('div', 'hqx-qt', esc(q.t) + ' …'));
        q.quran = true;
      } else {
        box.appendChild(el('div', 'hqx-qs', 'في أي سورة هذه الآية؟'));
        box.appendChild(el('div', 'hqx-qt', ayahHtml(q.text, q.st, q.n)));
        q.quran = false;
      }
    }, function (s, t) { result(o, s, t, function () { startMtQuiz(); }, function () { history.back(); }); });
  }
  var ALI = {
    facts: [['الاسم', 'علي بن أبي طالب بن عبد المطلب بن هاشم'], ['قرابته من النبي ﷺ', 'ابن عمه، وزوج ابنته فاطمة'], ['كنيته', 'أبو الحسن'], ['لقبه', 'أبو تراب، لقّبه به النبي ﷺ'], ['مولده', 'مكة المكرمة، قبل البعثة بنحو ١٠ سنوات'], ['أمه', 'فاطمة بنت أسد'], ['أبناؤه من فاطمة', 'الحسن والحسين وزينب وأم كلثوم'], ['مكانته', 'من العشرة المبشرين بالجنة'], ['خلافته', 'رابع الخلفاء الراشدين (٣٥ – ٤٠ هـ)'], ['وفاته', 'استشهد في رمضان سنة ٤٠ هـ بالكوفة']],
    story: [
      ['طفولته في بيت النبي ﷺ', 'أصابت قريشًا سنوات صعبة، فأخذ النبي ﷺ عليًّا ليربيه ويخفف عن عمه أبي طالب، فنشأ في بيت النبوة وتعلّم من النبي ﷺ الأخلاق الجميلة.'],
      ['أول من أسلم من الصبيان', 'آمن بالنبي ﷺ وهو صغير عمره نحو عشر سنوات، فكان أول من أسلم من الصبيان، ولم يعبد صنمًا قط.'],
      ['ليلة الهجرة', 'ليلة هجرة النبي ﷺ نام علي في فراشه بشجاعة والكفار حول البيت، ثم بقي في مكة أيامًا ليردّ الأمانات إلى أصحابها، ثم لحق بالنبي ﷺ في المدينة.'],
      ['زواجه من فاطمة الزهراء', 'تزوج فاطمة بنت رسول الله ﷺ بعد الهجرة، وكان بيتهما بسيطًا مليئًا بالحب والطاعة، ورزقهما الله الحسن والحسين.'],
      ['أبو تراب', 'دخل النبي ﷺ المسجد فوجد عليًّا نائمًا وقد أصاب جسمه التراب، فجعل يمسح عنه ويقول: «قُمْ أبا تراب»، فكان هذا الاسم من أحب الأسماء إليه.', 'صحيح البخاري'],
      ['الفارس الشجاع', 'شهد بدرًا وأُحُدًا والخندق وأكثر الغزوات مع النبي ﷺ، وكان من أشجع الفرسان، وفي غزوة الخندق خرج لمبارزة عمرو بن عبد ودّ أشهر فرسان قريش.'],
      ['يوم خيبر', 'قال النبي ﷺ: «لأُعطينّ الراية غدًا رجلًا يحب الله ورسوله، ويحبه الله ورسوله»، فأعطاها عليًّا، ففتح الله على يديه.', 'صحيح البخاري ومسلم'],
      ['بمنزلة هارون من موسى', 'لما خرج النبي ﷺ إلى غزوة تبوك ترك عليًّا في المدينة يرعى أهله، وقال له: «أما ترضى أن تكون مني بمنزلة هارون من موسى؟ إلا أنه ليس نبيٌّ بعدي».', 'صحيح البخاري ومسلم'],
      ['العالِم القاضي', 'كان من أعلم الصحابة بالقرآن والأحكام وأحسنهم قضاءً بين الناس، حتى قال عمر بن الخطاب رضي الله عنه: «أقضانا عليّ». وهو الذي كتب صلح الحديبية بين يدي النبي ﷺ.', 'صحيح البخاري'],
      ['الخليفة الرابع', 'بعد استشهاد عثمان بن عفان رضي الله عنه بايعه المسلمون خليفة سنة ٣٥ هـ، فكان رابع الخلفاء الراشدين، واشتهر بالعدل والزهد والتواضع.'],
      ['استشهاده', 'في رمضان سنة ٤٠ هـ خرج لصلاة الفجر في الكوفة فاعتدى عليه رجل من الخوارج، فاستشهد رضي الله عنه وعمره نحو ٦٣ سنة.']
    ],
    lessons: [['الشجاعة', 'نقول الحق ولا نخاف إلا الله'], ['حب النبي ﷺ', 'نضحي من أجل ديننا ونحب رسولنا'], ['الأمانة', 'نردّ الأشياء إلى أصحابها مهما حصل'], ['طلب العلم', 'نتعلم القرآن ونفهمه ونعمل به'], ['التواضع', 'نعيش ببساطة ونرضى بما رزقنا الله'], ['العدل', 'نعامل الناس كلهم بالحق']],
    quiz: [
      ['علي بن أبي طالب رضي الله عنه هو … النبي ﷺ', 'ابن عم', ['ابن عم', 'عم', 'أخو']],
      ['أول من أسلم من الصبيان هو', 'علي بن أبي طالب', ['علي بن أبي طالب', 'أنس بن مالك', 'عبد الله بن عباس']],
      ['من نام في فراش النبي ﷺ ليلة الهجرة؟', 'علي بن أبي طالب', ['علي بن أبي طالب', 'أبو بكر الصديق', 'عمر بن الخطاب']],
      ['زوجة علي رضي الله عنه هي', 'فاطمة الزهراء', ['فاطمة الزهراء', 'رقية', 'أم كلثوم']],
      ['ما اللقب الذي لقّبه به النبي ﷺ وكان يحبه؟', 'أبو تراب', ['أبو تراب', 'الفاروق', 'ذو النورين']],
      ['كنية علي رضي الله عنه', 'أبو الحسن', ['أبو الحسن', 'أبو حفص', 'أبو عبد الله']],
      ['في أي غزوة أعطاه النبي ﷺ الراية ففتح الله على يديه؟', 'خيبر', ['خيبر', 'بدر', 'تبوك']],
      ['ترتيب علي بين الخلفاء الراشدين', 'الرابع', ['الرابع', 'الثاني', 'الثالث']],
      ['ابنا علي وفاطمة رضي الله عنهما', 'الحسن والحسين', ['الحسن والحسين', 'القاسم وعبد الله', 'زيد وأسامة']],
      ['من الذي قال: «أقضانا عليّ»؟', 'عمر بن الخطاب', ['عمر بن الخطاب', 'أبو بكر الصديق', 'عثمان بن عفان']],
      ['ماذا فعل علي في مكة بعد هجرة النبي ﷺ؟', 'ردّ الأمانات إلى أصحابها', ['ردّ الأمانات إلى أصحابها', 'سافر إلى الشام', 'بنى مسجدًا']],
      ['علي رضي الله عنه من العشرة', 'المبشرين بالجنة', ['المبشرين بالجنة', 'الذين هاجروا للحبشة', 'كُتّاب الدواوين']]
    ]
  };
  function renderAli() {
    var o = ov.ali; o.setHead('علي بن أبي طالب رضي الله عنه', 'ابن عم النبي ﷺ ورابع الخلفاء الراشدين', false); o._mode = 'list';
    var w = o._w; w.innerHTML = '';
    var bar = el('div', 'hqx-bar'); bar.appendChild(el('span', 'hqx-sp'));
    var qb = el('button', 'hqx-act p', I.quiz + 'اختبار السيرة'); qb.onclick = startAliQuiz; bar.appendChild(qb); w.appendChild(bar);
    var hero = el('div', 'hqx-hero');
    ALI.facts.forEach(function (f) { hero.appendChild(el('div', 'hqx-fact', '<small>' + esc(f[0]) + '</small><b>' + esc(f[1]) + '</b>')); });
    w.appendChild(hero);
    w.appendChild(el('div', 'hqx-sec', 'قصة حياته'));
    var tl = el('div', 'hqx-tl');
    ALI.story.forEach(function (s, i) { var c = el('div', 'hqx-st', '<h4>' + esc(s[0]) + '</h4><p>' + esc(s[1]) + '</p>' + (s[2] ? '<span class="hqx-src">' + esc(s[2]) + '</span>' : '')); c.setAttribute('data-n', ar(i + 1)); tl.appendChild(c); });
    w.appendChild(tl);
    w.appendChild(el('div', 'hqx-sec', 'نتعلم من سيرته'));
    var ls = el('div', 'hqx-ls');
    ALI.lessons.forEach(function (l) { ls.appendChild(el('div', 'hqx-l', '<b>' + esc(l[0]) + '</b>' + esc(l[1]))); });
    w.appendChild(ls);
    var end = el('div', '', ''); end.style.textAlign = 'center'; end.style.marginTop = '22px';
    var qb2 = el('button', 'hqx-act p', I.quiz + 'اختبر معلوماتك عن سيرته'); qb2.onclick = startAliQuiz; end.appendChild(qb2); w.appendChild(end);
    o._b.scrollTop = 0;
  }
  function startAliQuiz() {
    var o = ov.ali; o._mode = 'quiz'; push(3);
    o.setHead('اختبار سيرة علي رضي الله عنه', 'اختار الإجابة الصحيحة', true);
    var qs = shuffle(ALI.quiz.slice()).slice(0, 10).map(function (q) { return { t: q[0], right: q[1], opts: shuffle(q[2].slice()) }; });
    runQuiz(o, qs, function (q, box) { box.appendChild(el('div', 'hqx-qt plain', esc(q.t))); }, function (s, t) { result(o, s, t, function () { history.back(); setTimeout(startAliQuiz, 60); }, function () { history.back(); }); });
  }
  function push(n) { try { history.pushState({ hqx: n }, ''); } catch (e) {} }
  function ensure() {
    if (!document.getElementById('hqx-css')) { var s = el('style'); s.id = 'hqx-css'; s.textContent = css; document.head.appendChild(s); }
    if (!document.getElementById('hqx-font')) { var l = el('link'); l.id = 'hqx-font'; l.rel = 'stylesheet'; l.href = 'https://fonts.googleapis.com/css2?family=Amiri+Quran&family=Baloo+Bhaijaan+2:wght@500;600;700;800&display=swap'; document.head.appendChild(l); }
    if (MT && (!ov.mt || !document.body.contains(ov.mt))) ov.mt = shell('hqx-mt', '', '', '');
    if (!ov.ali || !document.body.contains(ov.ali)) ov.ali = shell('hqx-ali', '', '', 'hqx-ali');
  }
  var openId = null;
  function open(id) {
    ensure(); stopAudio();
    openId = id; push(2);
    ov[id].classList.add('on'); document.documentElement.style.overflow = 'hidden'; document.documentElement.classList.add('hqx-open');
    if (id === 'mt') renderMt(); else renderAli();
  }
  function closeAll() { openId = null; stopAudio(); ['mt', 'ali'].forEach(function (k) { if (ov[k]) ov[k].classList.remove('on'); }); document.documentElement.style.overflow = ''; document.documentElement.classList.remove('hqx-open'); }
  window.addEventListener('popstate', function () {
    if (!openId) return;
    var o = ov[openId];
    if (o && o._mode === 'quiz') { if (openId === 'mt') renderMt(); else renderAli(); return; }
    closeAll();
  });
  window.HQX_open = open;
  function cards() {
    var c = el('div', 'hqx-cards'); c.id = 'hqx-cards';
    if (MT) {
      var a = el('button', 'hqx-card', '<span class="ic" style="background:linear-gradient(140deg,#f472b6,#be185d);box-shadow:0 10px 18px -8px #be185d;font-family:\'Amiri Quran\',serif">≋</span><span class="tx"><b>متشابهات مختارة</b><small>' + ar(MT.groups.length) + ' موضعًا مع روابط للحفظ واختبار</small></span>');
      a.style.cssText = 'border:1px solid #fbcfe8;background:linear-gradient(140deg,#fce7f3,#fff 72%);box-shadow:0 14px 28px -20px #be185d';
      a.onclick = function () { open('mt'); }; c.appendChild(a);
    }
    var b = el('button', 'hqx-card', '<span class="ic" style="background:linear-gradient(140deg,#34d399,#047857);box-shadow:0 10px 18px -8px #047857">' + I.book.replace('<svg', '<svg width="28" height="28"') + '</span><span class="tx"><b>سيرة علي بن أبي طالب</b><small>قصة حياته ومواقفه واختبار</small></span>');
    b.style.cssText = 'border:1px solid #a7f3d0;background:linear-gradient(140deg,#d1fae5,#fff 72%);box-shadow:0 14px 28px -20px #047857';
    b.onclick = function () { open('ali'); }; c.appendChild(b);
    return c;
  }
  function tick() {
    if (!document.body) return;
    ensure();
    if (!document.getElementById('hqx-cards')) {
      var btns = document.querySelectorAll('button'), anchor = null;
      for (var i = 0; i < btns.length; i++) { if (btns[i].textContent.indexOf('المتشابهات في جزء عم وتبارك') >= 0) { anchor = btns[i]; break; } }
      if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(cards(), anchor.nextSibling);
    }
    var bar = document.getElementById('hnn-bar');
    if (bar && !document.getElementById('hqx-b1')) {
      if (MT) { var x = el('button', '', '<span>المتشابهات</span>'); x.id = 'hqx-b1'; x.style.background = '#be185d'; x.onclick = function () { open('mt'); }; bar.appendChild(el('span', 'sep')); bar.appendChild(x); }
      var y = el('button', '', '<span>سيرة علي</span>'); y.id = 'hqx-b2'; y.style.background = '#047857'; y.onclick = function () { open('ali'); }; bar.appendChild(el('span', 'sep')); bar.appendChild(y);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tick); else tick();
  setInterval(tick, 900);
})();
