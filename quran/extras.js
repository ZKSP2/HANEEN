(function () {
  if (window.__hqx) return;
  window.__hqx = true;
  var MT = (window.HQX && window.HQX.mt) || null;
  var AQ = (window.HQX && window.HQX.aq) || null;
  var HD = (window.HQX && window.HQX.hd) || null;
  var MM = (window.HQX && window.HQX.mm) || null;
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
    '.hqx-cards{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:0}' +
    '.hqx-card{all:unset;box-sizing:border-box;cursor:pointer;text-align:right;border-radius:24px;padding:16px;display:flex;align-items:center;gap:12px;transition:transform .18s}' +
    '.hqx-card:active{transform:scale(.98)}' +
    '.hqx-card .ic{width:54px;height:54px;flex:none;border-radius:18px;color:#fff;display:grid;place-items:center;font-size:24px;font-weight:900}' +
    '.hqx-card .tx{flex:1;min-width:0;display:flex;flex-direction:column;gap:3px}' +
    '.hqx-card b{font-size:clamp(17px,4.6vw,20px);font-weight:900;color:#0f172a;line-height:1.35}' +
    '.hqx-card small{font-size:12.5px;color:#64748b;font-weight:700;line-height:1.5}' +
    '.hqx-hd.aq{background:radial-gradient(circle at 12% 0%,rgba(255,255,255,.25),transparent 40%),linear-gradient(135deg,#0ea5e9,#0284c7 55%,#075985)}' +
    '.hqx-hd.hd{background:radial-gradient(circle at 12% 0%,rgba(255,255,255,.25),transparent 40%),linear-gradient(135deg,#14b8a6,#0d9488 55%,#115e59)}' +
    '.hqx-aq .hqx-chip.on,.hqx-aq .hqx-act.p{background:#0284c7;border-color:#0284c7;color:#fff}.hqx-aq .hqx-op{border-color:#bae6fd}.hqx-aq .hqx-qp,.hqx-aq .hqx-res .big{color:#0284c7}.hqx-aq .hqx-qbar{background:#e0f2fe}.hqx-aq .hqx-qbar i{background:linear-gradient(90deg,#38bdf8,#0284c7)}' +
    '.hqx-hdx .hqx-chip.on,.hqx-hdx .hqx-act.p{background:#0d9488;border-color:#0d9488;color:#fff}.hqx-hdx .hqx-chip{border-color:#99f6e4;color:#115e59}.hqx-hdx .hqx-act{border-color:#99f6e4;color:#0f766e}' +
    '.hqx-fc{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:14px}' +
    '.hqx-f{all:unset;box-sizing:border-box;cursor:pointer;position:relative;min-height:170px;border-radius:24px;perspective:900px}' +
    '.hqx-fi{position:absolute;inset:0;transition:transform .5s;transform-style:preserve-3d}' +
    '.hqx-f.r .hqx-fi{transform:rotateY(180deg)}' +
    '.hqx-fs{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:24px;padding:16px 18px;display:flex;flex-direction:column;justify-content:center;gap:8px}' +
    '.hqx-fs.q{background:linear-gradient(140deg,#e0f2fe,#fff 75%);border:1.5px solid #bae6fd;box-shadow:0 14px 26px -22px #0284c7}' +
    '.hqx-fs.a{background:linear-gradient(140deg,#0284c7,#075985);color:#fff;transform:rotateY(180deg)}' +
    '.hqx-fs .no{position:absolute;top:10px;left:14px;font-size:12px;font-weight:900;color:#0284c7;opacity:.6}' +
    '.hqx-fs.a .no{color:#fff}' +
    '.hqx-fs b{font-size:19px;font-weight:900;line-height:1.55;color:#0c4a6e}' +
    '.hqx-fs.a b{color:#fff;font-size:17.5px;font-weight:800;line-height:1.75}' +
    '.hqx-fs small{font-size:12px;font-weight:800;color:#0284c7}' +
    '.hqx-fs.a small{color:#bae6fd}' +
    '.hqx-search{flex:1;min-width:180px;padding:10px 14px;border-radius:14px;border:1.5px solid #99f6e4;font:700 15px "Baloo Bhaijaan 2",sans-serif;background:#fff;outline:none}' +
    '.hqx-h{background:#fff;border:1px solid #ccfbf1;border-radius:22px;padding:14px 16px;margin-bottom:12px;box-shadow:0 12px 24px -22px #0d9488}' +
    '.hqx-h.m{background:linear-gradient(140deg,#f0fdfa,#fff 70%);border-color:#5eead4}' +
    '.hqx-hh{display:flex;align-items:center;gap:8px;margin-bottom:6px}' +
    '.hqx-hn{min-width:34px;height:34px;border-radius:11px;background:#ccfbf1;color:#0f766e;font-weight:900;font-size:14px;display:grid;place-items:center;padding:0 6px}' +
    '.hqx-nar{flex:1;font-size:13.5px;font-weight:700;color:#64748b;line-height:1.6}' +
    '.hqx-mt{font-family:"Amiri",serif;font-size:22px;line-height:2;color:#0f172a;font-weight:700}' +
    '.hqx-mt:before{content:"«";color:#14b8a6}.hqx-mt:after{content:"»";color:#14b8a6}' +
    '.hqx-hf{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:6px}' +
    '.hqx-src2{font-size:12px;font-weight:900;color:#0f766e;background:#f0fdfa;border:1px solid #99f6e4;border-radius:999px;padding:2px 10px}' +
    '.hqx-x{font-size:13.5px;font-weight:700;color:#92400e;background:#fffbeb;border-radius:10px;padding:3px 10px}' +
    '.hqx-mb{all:unset;cursor:pointer;margin-inline-start:auto;font-size:13px;font-weight:900;padding:6px 12px;border-radius:12px;border:1.5px solid #99f6e4;color:#0f766e;background:#fff}' +
    '.hqx-h.m .hqx-mb{background:#0d9488;border-color:#0d9488;color:#fff}' +
    '.hqx-prog{display:flex;align-items:center;gap:10px;margin:0 0 14px;font-size:14px;font-weight:900;color:#0f766e}' +
    '.hqx-prog i{flex:1;height:9px;border-radius:9px;background:#ccfbf1;overflow:hidden;display:block}' +
    '.hqx-prog i b{display:block;height:100%;background:linear-gradient(90deg,#2dd4bf,#0d9488);border-radius:9px}' +
    '.hqx-hd.mm{background:radial-gradient(circle at 12% 0%,rgba(255,255,255,.25),transparent 40%),linear-gradient(135deg,#f59e0b,#ea580c 55%,#9a3412)}' +
    '.hqx-mmx .hqx-chip.on,.hqx-mmx .hqx-act.p{background:#ea580c;border-color:#ea580c;color:#fff}.hqx-mmx .hqx-chip{border-color:#fed7aa;color:#9a3412}.hqx-mmx .hqx-act{border-color:#fed7aa;color:#c2410c}' +
    '.hqx-js{margin:18px 0 10px;font-size:19px;font-weight:900;color:#9a3412;display:flex;align-items:center;gap:10px}' +
    '.hqx-js:after{content:"";flex:1;height:2px;background:repeating-linear-gradient(90deg,#fed7aa 0 8px,transparent 8px 14px)}' +
    '.hqx-sg{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:10px}' +
    '.hqx-sc{all:unset;box-sizing:border-box;cursor:pointer;border-radius:18px;padding:12px 10px;text-align:center;background:linear-gradient(140deg,#ffedd5,#fff 75%);border:1.5px solid #fed7aa;box-shadow:0 10px 20px -18px #ea580c;display:flex;flex-direction:column;gap:3px;align-items:center}' +
    '.hqx-sc b{font-family:"Amiri Quran",serif;font-size:22px;font-weight:400;color:#7c2d12;line-height:1.6}' +
    '.hqx-sc small{font-size:11.5px;font-weight:800;color:#c2410c}' +
    '.hqx-sc i{font-style:normal;font-size:11px;font-weight:900;color:#fff;background:#ea580c;border-radius:999px;padding:0 8px}' +
    '.hqx-mv{display:flex;flex-direction:column;gap:16px;align-items:center}' +
    '.hqx-mf{width:100%;max-width:1400px;background:#fff;border-radius:18px;overflow:auto;box-shadow:0 14px 30px -22px #9a3412;border:1px solid #fed7aa;position:relative}' +
    '.hqx-mf img{display:block;width:100%;height:auto;cursor:zoom-in}' +
    '.hqx-mf.z img{width:220%;max-width:none;cursor:zoom-out}' +
    '.hqx-mf span{position:absolute;top:8px;right:10px;background:rgba(154,52,18,.85);color:#fff;font-size:12px;font-weight:900;padding:2px 10px;border-radius:999px}' +
    '.hqx-mapbtn{all:unset;cursor:pointer;display:inline-flex;align-items:center;gap:6px;padding:8px 14px;border-radius:12px;background:linear-gradient(135deg,#f59e0b,#ea580c);color:#fff;font:900 14px "Baloo Bhaijaan 2",sans-serif;box-shadow:0 8px 16px -8px #ea580c}' +
    '.hqx-mapbtn svg{width:16px;height:16px}' +
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
    var hd = el('div', 'hqx-hd ' + ({ 'hqx-ali': 'ali', 'hqx-aq': 'aq', 'hqx-hdx': 'hd', 'hqx-mmx': 'mm' }[cls] || '')), r = el('div', 'hqx-hr');
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
  function renderAq(cards) {
    var o = ov.aq; o.setHead('العقيدة سؤال وجواب', ar(AQ.items.length) + ' سؤالًا · بطاقات تنقلب واختبار', false); o._mode = 'list';
    var w = o._w; w.innerHTML = '';
    var bar = el('div', 'hqx-bar');
    var c1 = el('button', 'hqx-chip' + (state.aqAll ? '' : ' on'), 'بطاقات تنقلب'); c1.onclick = function () { state.aqAll = false; renderAq(); };
    var c2 = el('button', 'hqx-chip' + (state.aqAll ? ' on' : ''), 'عرض كل الإجابات'); c2.onclick = function () { state.aqAll = true; renderAq(); };
    bar.appendChild(c1); bar.appendChild(c2); bar.appendChild(el('span', 'hqx-sp'));
    if (AQ.pdf) { var pd = el('a', 'hqx-act', I.book + 'الكتاب الأصلي'); pd.href = AQ.pdf; pd.target = '_blank'; bar.appendChild(pd); }
    var qb = el('button', 'hqx-act p', I.quiz + 'اختبار العقيدة'); qb.onclick = startAqQuiz; bar.appendChild(qb);
    w.appendChild(bar);
    var g = el('div', 'hqx-fc');
    AQ.items.forEach(function (it, i) {
      var f = el('button', 'hqx-f' + (state.aqAll ? ' r' : ''));
      f.innerHTML = '<span class="hqx-fi"><span class="hqx-fs q"><span class="no">' + ar(i + 1) + '</span><small>سؤال</small><b>' + esc(it[0]) + '</b><small style="color:#94a3b8">اضغط لرؤية الإجابة</small></span><span class="hqx-fs a"><span class="no">' + ar(i + 1) + '</span><small>' + esc(it[0]) + '</small><b>' + esc(it[1]) + '</b></span></span>';
      f.onclick = function () { f.classList.toggle('r'); };
      g.appendChild(f);
    });
    w.appendChild(g); o._b.scrollTop = 0;
  }
  function startAqQuiz() {
    var o = ov.aq; o._mode = 'quiz'; push(3);
    o.setHead('اختبار العقيدة', 'اختار الإجابة الصحيحة', true);
    var pool = AQ.items.filter(function (x) { return x[1].length <= 70; });
    var qs = shuffle(pool.slice()).slice(0, 10).map(function (q) {
      var others = shuffle(pool.filter(function (x) { return x !== q && x[1] !== q[1]; })).slice(0, 2).map(function (x) { return x[1]; });
      return { t: q[0], right: q[1], opts: shuffle(others.concat([q[1]])) };
    });
    runQuiz(o, qs, function (q, box) { box.appendChild(el('div', 'hqx-qt plain', esc(q.t))); }, function (s, t) { result(o, s, t, function () { history.back(); setTimeout(startAqQuiz, 60); }, function () { history.back(); }); });
  }
  function memGet() { try { return JSON.parse(localStorage.getItem('hqx_hd_mem') || '{}'); } catch (e) { return {}; } }
  function memSet(m) { try { localStorage.setItem('hqx_hd_mem', JSON.stringify(m)); } catch (e) {} }
  function renderHd() {
    var o = ov.hd; o.setHead('٢٠٠ حديث من الصحيحين', 'أحاديث قصيرة سهلة الحفظ من البخاري ومسلم', false); o._mode = 'list';
    var w = o._w; w.innerHTML = '';
    var mem = memGet(), done = HD.items.filter(function (h) { return mem[h.n]; }).length;
    w.appendChild(el('div', 'hqx-prog', '<span>حفظت ' + ar(done) + ' من ' + ar(HD.items.length) + '</span><i><b style="width:' + (done / HD.items.length * 100) + '%"></b></i>'));
    var bar = el('div', 'hqx-bar');
    [['all', 'الكل'], ['todo', 'لم أحفظها'], ['done', 'حفظتها']].forEach(function (f) {
      var c = el('button', 'hqx-chip' + ((state.hdF || 'all') === f[0] ? ' on' : ''), f[1]); c.onclick = function () { state.hdF = f[0]; renderHd(); }; bar.appendChild(c);
    });
    var rb = el('button', 'hqx-act', I.quiz + 'حديث عشوائي'); rb.onclick = function () { var l = HD.items.filter(function (h) { return !mem[h.n]; }); if (!l.length) l = HD.items; var h = l[Math.floor(Math.random() * l.length)]; state.hdQ = String(h.n); renderHd(); };
    bar.appendChild(rb);
    if (HD.pdf) { var pd = el('a', 'hqx-act', I.book + 'الكتاب الأصلي'); pd.href = HD.pdf; pd.target = '_blank'; bar.appendChild(pd); }
    w.appendChild(bar);
    var sb = el('div', 'hqx-bar'); var inp = el('input', 'hqx-search'); inp.placeholder = 'ابحث بكلمة أو برقم الحديث…'; inp.value = state.hdQ || ''; sb.appendChild(inp); w.appendChild(sb);
    var list = el('div', ''); w.appendChild(list);
    function strip(s) { return String(s).replace(/[ً-ْٰ]/g, '').replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي'); }
    function draw() {
      list.innerHTML = '';
      var q = strip((state.hdQ || '').trim()), shown = 0;
      HD.items.forEach(function (h) {
        var f = state.hdF || 'all';
        if (f === 'todo' && mem[h.n]) return; if (f === 'done' && !mem[h.n]) return;
        if (q && !(String(h.n) === q || strip(h.m + ' ' + h.nar).indexOf(q) >= 0)) return;
        if (shown >= 60 && !q) return; shown++;
        var c = el('div', 'hqx-h' + (mem[h.n] ? ' m' : ''));
        c.innerHTML = '<div class="hqx-hh"><span class="hqx-hn">' + ar(h.n) + '</span><span class="hqx-nar">' + esc(h.nar) + '</span></div><div class="hqx-mt">' + esc(h.m) + '</div>';
        var ft = el('div', 'hqx-hf', (h.s ? '<span class="hqx-src2">' + esc(h.s) + '</span>' : '') + (h.x ? '<span class="hqx-x">' + esc(h.x) + '</span>' : ''));
        var mb = el('button', 'hqx-mb', mem[h.n] ? 'حفظته ✓' : 'حفظته؟');
        mb.onclick = function () { if (mem[h.n]) delete mem[h.n]; else mem[h.n] = 1; memSet(mem); var y = o._b.scrollTop; renderHd(); o._b.scrollTop = y; };
        ft.appendChild(mb); c.appendChild(ft); list.appendChild(c);
      });
      if (!shown) list.appendChild(el('div', 'hqx-hint', '<span>لا توجد أحاديث مطابقة.</span>'));
      else if (!q && shown >= 60) { var more = el('div', 'hqx-hint', '<span>اكتب كلمة أو رقمًا في البحث لعرض باقي الأحاديث، أو اختر «لم أحفظها».</span>'); list.appendChild(more); }
    }
    var tm; inp.oninput = function () { clearTimeout(tm); tm = setTimeout(function () { state.hdQ = inp.value; draw(); }, 200); };
    draw(); o._b.scrollTop = 0;
  }
  var JUZ = [['الجزء الأول', 1, 2], ['الجزء الثاني', 2, 2], ['الجزء الثالث', 2, 3], ['جزء الذاريات (٢٧)', 51, 57], ['جزء قد سمع (٢٨)', 58, 66], ['جزء تبارك (٢٩)', 67, 77], ['جزء عم (٣٠)', 78, 114]];
  var SN = { 1: 'الفاتحة', 2: 'البقرة', 3: 'آل عمران' };
  function sname(s) { return SN[s] || (MT && MT.names[s]) || ('سورة ' + ar(s)); }
  function mmImg(s, k) { return base + 'maps/' + ('00' + s).slice(-3) + '-' + ('0' + k).slice(-2) + '.webp'; }
  var base = new URL('./', location.href).href;
  function renderMm() {
    var o = ov.mm; o.setHead('الخرائط الذهنية', 'خريطة لكل سورة تساعد على الحفظ والفهم', false); o._mode = 'list';
    var w = o._w; w.innerHTML = '';
    var done = {};
    [['جزء عم', 78, 114], ['جزء تبارك', 67, 77], ['جزء قد سمع', 58, 66], ['جزء الذاريات', 51, 57], ['الفاتحة والبقرة وآل عمران', 1, 3]].forEach(function (g) {
      var list = []; for (var s = g[1]; s <= g[2]; s++) if (MM.c[s]) list.push(s);
      if (g[1] >= 78) list.reverse();
      if (!list.length) return;
      w.appendChild(el('div', 'hqx-js', esc(g[0])));
      var grid = el('div', 'hqx-sg');
      list.forEach(function (s) {
        var c = el('button', 'hqx-sc', '<small>' + ar(s) + '</small><b>' + esc(sname(s)) + '</b>' + (MM.c[s] > 1 ? '<i>' + ar(MM.c[s]) + ' خرائط</i>' : '<i>خريطة</i>'));
        c.onclick = function () { openMap(s, true); };
        grid.appendChild(c);
      });
      w.appendChild(grid);
    });
    o._b.scrollTop = 0;
  }
  function openMap(s, push2) {
    var o = ov.mm; if (push2) push(3); o._mode = 'quiz';
    var n = MM.c[s] || 0;
    o.setHead('الخريطة الذهنية · سورة ' + sname(s), n > 1 ? ar(n) + ' خرائط بالترتيب · اضغط على الخريطة للتكبير' : 'اضغط على الخريطة للتكبير', true);
    var w = o._w; w.innerHTML = '';
    var v = el('div', 'hqx-mv');
    for (var k = 1; k <= n; k++) {
      var f = el('div', 'hqx-mf', (n > 1 ? '<span>' + ar(k) + ' / ' + ar(n) + '</span>' : '') + '<img loading="' + (k < 3 ? 'eager' : 'lazy') + '" decoding="async" alt="" src="' + mmImg(s, k) + '">');
      f.querySelector('img').onclick = (function (f) { return function () { f.classList.toggle('z'); }; })(f);
      v.appendChild(f);
    }
    w.appendChild(v); o._b.scrollTop = 0;
  }
  window.HQX_map = function (s) { ensure(); stopAudio(); if (openId !== 'mm') { openId = 'mm'; push(2); ov.mm.classList.add('on'); document.documentElement.style.overflow = 'hidden'; document.documentElement.classList.add('hqx-open'); renderMm(); } openMap(s, true); };
  function push(n) { try { history.pushState({ hqx: n }, ''); } catch (e) {} }
  function ensure() {
    if (!document.getElementById('hqx-css')) { var s = el('style'); s.id = 'hqx-css'; s.textContent = css; document.head.appendChild(s); }
    if (!document.getElementById('hqx-font')) { var l = el('link'); l.id = 'hqx-font'; l.rel = 'stylesheet'; l.href = 'https://fonts.googleapis.com/css2?family=Amiri+Quran&family=Baloo+Bhaijaan+2:wght@500;600;700;800&display=swap'; document.head.appendChild(l); }
    if (MT && (!ov.mt || !document.body.contains(ov.mt))) ov.mt = shell('hqx-mt', '', '', '');
    if (!ov.ali || !document.body.contains(ov.ali)) ov.ali = shell('hqx-ali', '', '', 'hqx-ali');
    if (AQ && (!ov.aq || !document.body.contains(ov.aq))) ov.aq = shell('hqx-aq', '', '', 'hqx-aq');
    if (HD && (!ov.hd || !document.body.contains(ov.hd))) ov.hd = shell('hqx-hd', '', '', 'hqx-hdx');
    if (MM && (!ov.mm || !document.body.contains(ov.mm))) ov.mm = shell('hqx-mm', '', '', 'hqx-mmx');
  }
  var openId = null;
  var R = { mt: function () { renderMt(); }, ali: function () { renderAli(); }, aq: function () { renderAq(); }, hd: function () { renderHd(); }, mm: function () { renderMm(); } };
  function open(id) {
    ensure(); stopAudio();
    openId = id; push(2);
    ov[id].classList.add('on'); document.documentElement.style.overflow = 'hidden'; document.documentElement.classList.add('hqx-open');
    R[id]();
  }
  function closeAll() { openId = null; stopAudio(); ['mt', 'ali', 'aq', 'hd', 'mm'].forEach(function (k) { if (ov[k]) ov[k].classList.remove('on'); }); document.documentElement.style.overflow = ''; document.documentElement.classList.remove('hqx-open'); }
  window.addEventListener('popstate', function () {
    if (!openId) return;
    var o = ov[openId];
    if (o && o._mode === 'quiz') { R[openId](); return; }
    closeAll();
  });
  window.HQX_open = open;
  document.addEventListener('click', function (e) {
    var mp = e.target && e.target.closest ? e.target.closest('[data-hqx-map]') : null;
    if (mp) { e.preventDefault(); e.stopPropagation(); window.HQX_map(+mp.getAttribute('data-hqx-map')); return; }
    var t = e.target && e.target.closest ? e.target.closest('[data-hqx-open]') : null;
    if (!t) return;
    e.preventDefault(); e.stopPropagation();
    open(t.getAttribute('data-hqx-open'));
  }, true);
  function cards() {
    var c = el('div', 'hqx-cards'); c.id = 'hqx-cards';
    if (MT) {
      var a = el('button', 'hqx-card', '<span class="ic" style="background:linear-gradient(140deg,#f472b6,#be185d);box-shadow:0 10px 18px -8px #be185d;font-family:\'Amiri Quran\',serif">≋</span><span class="tx"><b>متشابهات مختارة</b><small>' + ar(MT.groups.length) + ' موضعًا مع روابط للحفظ واختبار</small></span>');
      a.style.cssText = 'border:1px solid #fbcfe8;background:linear-gradient(140deg,#fce7f3,#fff 72%);box-shadow:0 14px 28px -20px #be185d';
      a.setAttribute('data-hqx-open', 'mt'); c.appendChild(a);
    }
    var b = el('button', 'hqx-card', '<span class="ic" style="background:linear-gradient(140deg,#34d399,#047857);box-shadow:0 10px 18px -8px #047857">' + I.book.replace('<svg', '<svg width="28" height="28"') + '</span><span class="tx"><b>سيرة علي بن أبي طالب</b><small>قصة حياته ومواقفه واختبار</small></span>');
    b.style.cssText = 'border:1px solid #a7f3d0;background:linear-gradient(140deg,#d1fae5,#fff 72%);box-shadow:0 14px 28px -20px #047857';
    b.setAttribute('data-hqx-open', 'ali'); c.appendChild(b);
    if (AQ) {
      var e1 = el('button', 'hqx-card', '<span class="ic" style="background:linear-gradient(140deg,#38bdf8,#0284c7);box-shadow:0 10px 18px -8px #0284c7">؟</span><span class="tx"><b>العقيدة سؤال وجواب</b><small>' + ar(AQ.items.length) + ' سؤالًا في بطاقات تنقلب واختبار</small></span>');
      e1.style.cssText = 'border:1px solid #bae6fd;background:linear-gradient(140deg,#e0f2fe,#fff 72%);box-shadow:0 14px 28px -20px #0284c7';
      e1.setAttribute('data-hqx-open', 'aq'); c.appendChild(e1);
    }
    if (HD) {
      var e2 = el('button', 'hqx-card', '<span class="ic" style="background:linear-gradient(140deg,#2dd4bf,#0d9488);box-shadow:0 10px 18px -8px #0d9488;font-family:\'Amiri\',serif">«»</span><span class="tx"><b>٢٠٠ حديث من الصحيحين</b><small>أحاديث قصيرة مع متابعة الحفظ</small></span>');
      e2.style.cssText = 'border:1px solid #99f6e4;background:linear-gradient(140deg,#ccfbf1,#fff 72%);box-shadow:0 14px 28px -20px #0d9488';
      e2.setAttribute('data-hqx-open', 'hd'); c.appendChild(e2);
    }
    if (MM) {
      var e3 = el('button', 'hqx-card', '<span class="ic" style="background:linear-gradient(140deg,#fbbf24,#ea580c);box-shadow:0 10px 18px -8px #ea580c"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="4" cy="5" r="2"/><circle cx="20" cy="5" r="2"/><circle cx="4" cy="19" r="2"/><circle cx="20" cy="19" r="2"/><path d="M6 6l4 4M18 6l-4 4M6 18l4-4M18 18l-4-4"/></svg></span><span class="tx"><b>الخرائط الذهنية للسور</b><small>' + ar(Object.keys(MM.c).length) + ' سورة · خريطة تساعد على الحفظ والفهم</small></span>');
      e3.style.cssText = 'border:1px solid #fed7aa;background:linear-gradient(140deg,#ffedd5,#fff 72%);box-shadow:0 14px 28px -20px #ea580c;grid-column:1/-1';
      e3.setAttribute('data-hqx-open', 'mm'); c.appendChild(e3);
    }
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
    if (MM) {
      var AD = '٠١٢٣٤٥٦٧٨٩';
      var divs = document.querySelectorAll('div');
      for (var q = 0; q < divs.length; q++) {
        var d = divs[q];
        if (d.querySelector('div,button,section') || d.textContent.indexOf('سورة رقم') < 0 || d.textContent.length > 120) continue;
        var m = d.textContent.match(/سورة رقم\s*([٠-٩0-9]+)/); if (!m) continue;
        var sn = +m[1].replace(/[٠-٩]/g, function (x) { return AD.indexOf(x); });
        var host = d.parentNode, ex = host.querySelector('[data-hqx-map]');
        if (!MM.c[sn]) { if (ex) ex.remove(); continue; }
        if (ex && +ex.getAttribute('data-hqx-map') === sn) continue;
        if (ex) ex.remove();
        var mb = el('button', 'hqx-mapbtn', '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><path d="M6 6l4 4M18 6l-4 4M6 18l4-4M18 18l-4-4"/></svg>الخريطة الذهنية');
        mb.setAttribute('data-hqx-map', sn); host.appendChild(mb);
      }
    }
    var bar = document.getElementById('hnn-bar');
    if (bar && !document.getElementById('hqx-b1')) {
      if (MT) { var x = el('button', '', '<span>المتشابهات</span>'); x.id = 'hqx-b1'; x.style.background = '#be185d'; x.setAttribute('data-hqx-open', 'mt'); bar.appendChild(el('span', 'sep')); bar.appendChild(x); }
      var y = el('button', '', '<span>سيرة علي</span>'); y.id = 'hqx-b2'; y.style.background = '#047857'; y.setAttribute('data-hqx-open', 'ali'); bar.appendChild(el('span', 'sep')); bar.appendChild(y);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tick); else tick();
  setInterval(tick, 900);
})();
