(function () {
  if (window.__hnnBoards) return;
  window.__hnnBoards = true;
  var B = window.HNN_BOARDS;
  if (!B || !B.lessons || !B.lessons.length) return;
  var base = new URL('./', location.href).href;
  var KIND = {
    'قراءة': ['#8fd3ff', '#1d4f6e'], 'قواعد': ['#ffe27a', '#6b5410'], 'نشيد': ['#ff9ec4', '#7a2148'],
    'استماع': ['#b6f09c', '#2f5e1c'], 'مراجعة': ['#ffc38a', '#7a4212'], 'تدريبات': ['#d4b8ff', '#4b2a86']
  };
  var MONTHS = { '09': 'سبتمبر', '10': 'أكتوبر', '11': 'نوفمبر', '12': 'ديسمبر', '01': 'يناير', '02': 'فبراير' };
  var NOISE = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 .07 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";
  var WOOD = 'linear-gradient(135deg,#a8743f 0%,#c99359 18%,#94612f 36%,#bd8650 55%,#8a5828 75%,#b47d48 100%)';
  var BOARD = NOISE + ',radial-gradient(120% 90% at 30% 10%,#2f5a4c 0%,#24493d 45%,#1b3a30 100%)';
  var css = '' +
    '#hnb-ov{position:fixed;inset:0;z-index:2147483647;display:none;flex-direction:column;direction:rtl;font-family:"Baloo Bhaijaan 2",Cairo,system-ui,sans-serif;color:#2a2620;background:#efe7da}' +
    '#hnb-ov.on{display:flex}' +
    '#hnb-ov *{box-sizing:border-box}' +
    '#hnb-ov button{font-family:inherit}' +
    '.hnb-hd{position:relative;flex-shrink:0;background:' + BOARD + ';color:#f4f1e8;padding:14px 16px 22px;border-bottom:8px solid transparent;border-image:' + WOOD + ' 1}' +
    '.hnb-hr{display:flex;align-items:center;gap:12px;max-width:1100px;margin:0 auto}' +
    '.hnb-ib{all:unset;cursor:pointer;width:40px;height:40px;border-radius:12px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.18);display:grid;place-items:center;color:#fff;flex-shrink:0}' +
    '.hnb-ib svg{width:18px;height:18px}' +
    '.hnb-tt{flex:1;min-width:0}' +
    '.hnb-tt h2{margin:0;font:700 26px/1.25 "Aref Ruqaa",serif;color:#fff;text-shadow:0 0 1px rgba(255,255,255,.6),0 2px 0 rgba(0,0,0,.15)}' +
    '.hnb-tt p{margin:2px 0 0;font-size:13px;font-weight:600;color:rgba(244,241,232,.75)}' +
    '.hnb-chalk{position:absolute;bottom:-8px;left:22px;display:flex;gap:6px;transform:translateY(50%)}' +
    '.hnb-chalk i{display:block;width:30px;height:7px;border-radius:3px;box-shadow:0 1px 2px rgba(0,0,0,.3)}' +
    '.hnb-body{flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch}' +
    '.hnb-wrap{max-width:1100px;margin:0 auto;padding:18px 16px 60px}' +
    '.hnb-filters{display:flex;gap:8px;overflow-x:auto;padding:2px 0 14px;scrollbar-width:none}' +
    '.hnb-filters::-webkit-scrollbar{display:none}' +
    '.hnb-f{all:unset;cursor:pointer;white-space:nowrap;padding:7px 14px;border-radius:999px;background:#fff;border:1.5px solid #e3d8c6;font-size:14px;font-weight:700;color:#6a5f50;display:inline-flex;align-items:center;gap:6px}' +
    '.hnb-f i{width:9px;height:9px;border-radius:50%;display:block}' +
    '.hnb-f.on{background:#24493d;border-color:#24493d;color:#fff}' +
    '.hnb-mh{display:flex;align-items:center;gap:10px;margin:14px 0 12px;font:700 22px "Aref Ruqaa",serif;color:#5b4a35}' +
    '.hnb-mh:after{content:"";flex:1;height:2px;background:repeating-linear-gradient(90deg,#d6c8b2 0 8px,transparent 8px 14px)}' +
    '.hnb-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:16px}' +
    '.hnb-lc{all:unset;cursor:pointer;position:relative;display:flex;flex-direction:column;min-height:150px;padding:14px 16px 18px;border-radius:14px;background:' + BOARD + ';color:#f4f1e8;border:7px solid transparent;border-image:' + WOOD + ' 1;box-shadow:0 10px 22px rgba(60,40,20,.22),0 2px 4px rgba(60,40,20,.18);transition:transform .15s}' +
    '.hnb-lc:hover{transform:translateY(-3px) rotate(-.3deg)}' +
    '.hnb-lc:active{transform:scale(.98)}' +
    '.hnb-lc .k{align-self:flex-start;font-size:12px;font-weight:800;padding:2px 10px;border-radius:999px}' +
    '.hnb-lc h3{margin:10px 0 4px;font:700 23px/1.35 "Aref Ruqaa",serif;color:#fff;text-shadow:0 0 1px rgba(255,255,255,.5)}' +
    '.hnb-lc .d{font-size:13px;font-weight:600;color:rgba(244,241,232,.75)}' +
    '.hnb-lc .m{margin-top:auto;padding-top:10px;display:flex;gap:12px;font-size:12px;font-weight:700;color:rgba(244,241,232,.65)}' +
    '.hnb-lc .n{position:absolute;top:10px;left:12px;font:700 13px "Baloo Bhaijaan 2",sans-serif;color:rgba(255,255,255,.35)}' +
    '.hnb-lc.new:after{content:"الأحدث";position:absolute;top:-12px;right:14px;background:#ff6b6b;color:#fff;font-size:11px;font-weight:800;padding:2px 10px;border-radius:999px;box-shadow:0 3px 8px rgba(0,0,0,.2)}' +
    '.hnb-tools{position:sticky;top:0;z-index:3;background:rgba(239,231,218,.92);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-bottom:1px solid #e0d4c1}' +
    '.hnb-tr{max-width:1100px;margin:0 auto;padding:10px 16px;display:flex;gap:8px;align-items:center;flex-wrap:wrap}' +
    '.hnb-seg{display:flex;background:#e2d6c3;border-radius:12px;padding:3px}' +
    '.hnb-seg button{all:unset;cursor:pointer;padding:7px 14px;border-radius:9px;font-size:14px;font-weight:700;color:#6a5f50}' +
    '.hnb-seg button.on{background:#fff;color:#24493d;box-shadow:0 1px 3px rgba(0,0,0,.12)}' +
    '.hnb-qz{all:unset;cursor:pointer;margin-inline-start:auto;display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border-radius:12px;background:#fff;border:1.5px solid #e0d4c1;font-size:14px;font-weight:800;color:#24493d}' +
    '.hnb-qz svg{width:17px;height:17px}' +
    '.hnb-qz.on{background:#24493d;border-color:#24493d;color:#ffe27a}' +
    '.hnb-b{position:relative;margin:0 0 22px;padding:20px 20px 26px;border-radius:10px;background:' + BOARD + ';color:#f4f1e8;border:12px solid transparent;border-image:' + WOOD + ' 1;box-shadow:0 14px 30px rgba(60,40,20,.25),inset 0 0 40px rgba(0,0,0,.25);font-size:19px;line-height:1.75}' +
    '.hnb-b:after{content:"";position:absolute;left:30px;bottom:-12px;width:46px;height:7px;border-radius:3px;background:#f6f3ea;box-shadow:58px 0 0 #ffe27a,104px 0 0 #ff9ec4}' +
    '.hnb-bt{display:flex;align-items:baseline;gap:10px;margin:0 0 14px;padding-bottom:8px;border-bottom:2px dashed rgba(255,255,255,.18)}' +
    '.hnb-bt h4{margin:0;font:700 25px/1.35 "Aref Ruqaa",serif;color:#ffe27a;text-shadow:0 0 1px rgba(255,226,122,.6)}' +
    '.hnb-bt .no{font-size:13px;font-weight:700;color:rgba(255,255,255,.4);margin-inline-start:auto}' +
    '.hnb-tb{width:100%;border-collapse:separate;border-spacing:0}' +
    '.hnb-tb th{font-size:15px;font-weight:800;padding:6px 10px;text-align:right;border-bottom:2px solid rgba(255,255,255,.35)}' +
    '.hnb-tb td{padding:8px 10px;border-bottom:1px solid rgba(255,255,255,.12);vertical-align:top}' +
    '.hnb-tb td:first-child{font-weight:800;color:#fff}' +
    '.hnb-tb tr:last-child td{border-bottom:0}' +
    '.hnb-tb th:nth-child(1){color:#8fd3ff}.hnb-tb th:nth-child(2){color:#ff9ec4}.hnb-tb th:nth-child(3){color:#b6f09c}.hnb-tb th:nth-child(4){color:#ffc38a}' +
    '.hnb-tb td:nth-child(2){color:#ffd5e6}.hnb-tb td:nth-child(3){color:#dcf8cf}.hnb-tb td:nth-child(4){color:#ffe3c7}' +
    '.hnb-ps{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:10px}' +
    '.hnb-p{display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:10px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1)}' +
    '.hnb-p b{color:#fff;font-weight:800;min-width:0}' +
    '.hnb-p .ar{color:rgba(255,255,255,.4);font-size:15px;flex-shrink:0}' +
    '.hnb-p .v{color:#ffd5e6;font-weight:700}' +
    '.hnb-sy{display:flex;flex-direction:column;gap:8px}' +
    '.hnb-sr{display:flex;align-items:center;gap:12px;flex-wrap:wrap;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.1)}' +
    '.hnb-sr:last-child{border-bottom:0}' +
    '.hnb-sr b{font-size:23px;color:#fff;min-width:120px}' +
    '.hnb-sr .ar{color:rgba(255,255,255,.4)}' +
    '.hnb-sr .v{color:#8fd3ff;font-weight:700;font-size:21px;letter-spacing:.5px}' +
    '.hnb-q{margin:0;padding:0;list-style:none;counter-reset:q;display:flex;flex-direction:column;gap:12px}' +
    '.hnb-q li{counter-increment:q;position:relative;padding-inline-start:40px}' +
    '.hnb-q li:before{content:counter(q);position:absolute;right:0;top:3px;width:28px;height:28px;border-radius:50%;border:2px solid rgba(255,255,255,.45);display:grid;place-items:center;font-size:14px;font-weight:800;color:#fff}' +
    '.hnb-q .qq{color:#fff;font-weight:700}' +
    '.hnb-q .aa{display:block;color:#b6f09c;font-weight:700;margin-top:2px}' +
    '.hnb-q .aa:before{content:"← ";color:rgba(255,255,255,.4)}' +
    '.hnb-psg{margin:0 0 16px;padding:12px 16px;border-radius:10px;border:2px solid rgba(255,226,122,.45);background:rgba(255,226,122,.07);color:#fff8dc;font-weight:700;font-size:20px;line-height:1.9;position:relative}' +
    '.hnb-psg:before{content:"اقرأ";position:absolute;top:-12px;right:14px;background:#ffe27a;color:#3d3207;font-size:12px;font-weight:800;padding:1px 10px;border-radius:999px}' +
    '.hnb-gap{display:inline-block;min-width:70px;border-bottom:2px dotted rgba(255,255,255,.5);margin:0 4px}' +
    '.hnb-nt{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:8px}' +
    '.hnb-nt li{position:relative;padding-inline-start:26px;color:#fff;font-weight:600}' +
    '.hnb-nt li:before{content:"";position:absolute;right:4px;top:13px;width:10px;height:10px;border-radius:50%;background:#ff9ec4}' +
    '.hnb-ch{display:flex;flex-wrap:wrap;gap:10px}' +
    '.hnb-ch span{padding:6px 14px;border-radius:10px;border:2px solid rgba(255,255,255,.3);font-weight:700;color:#fff;font-size:20px}' +
    '.hnb-hw{position:relative;margin:4px 6px 30px;padding:22px 22px 18px;background:linear-gradient(#fff6a8,#ffef7d);color:#4a3d06;border-radius:3px;box-shadow:0 12px 22px rgba(80,60,10,.22);transform:rotate(-.6deg);max-width:560px}' +
    '.hnb-hw:before{content:"";position:absolute;top:-12px;left:50%;width:110px;height:26px;margin-left:-55px;background:rgba(255,255,255,.55);box-shadow:0 1px 3px rgba(0,0,0,.08);transform:rotate(2deg)}' +
    '.hnb-hw h4{margin:0 0 8px;font:700 24px "Aref Ruqaa",serif;color:#7a5c00}' +
    '.hnb-hw ul{margin:0;padding-inline-start:22px;font-size:18px;font-weight:700;line-height:1.9}' +
    '.hnb-pr{display:inline-block;font-size:12px;font-weight:800;color:#3d3207;background:#ffe27a;border-radius:999px;padding:0 9px;margin-inline-start:6px;vertical-align:middle;line-height:20px}' +
    '.hnb-tip{font-size:15px;color:rgba(255,255,255,.7);margin:10px 0 0;font-weight:600}' +
    '.hz .hnb-h{cursor:pointer;color:transparent!important;text-shadow:0 0 9px rgba(255,255,255,.75);background:rgba(255,255,255,.07);border-radius:8px;padding:0 6px;user-select:none;transition:all .25s}' +
    '.hz .hnb-h.r{color:inherit!important;text-shadow:none;background:rgba(182,240,156,.12)}' +
    '.hnb-ph{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px}' +
    '.hnb-pt{all:unset;cursor:pointer;position:relative;aspect-ratio:3/4;border-radius:12px;overflow:hidden;background:#d8ccb8;box-shadow:0 6px 16px rgba(60,40,20,.2);border:4px solid #fff}' +
    '.hnb-pt img{width:100%;height:100%;object-fit:cover;display:block}' +
    '.hnb-pt span{position:absolute;bottom:6px;right:6px;background:rgba(0,0,0,.6);color:#fff;font-size:12px;font-weight:800;padding:1px 8px;border-radius:999px}' +
    '.hnb-nav{display:flex;gap:12px;margin-top:26px}' +
    '.hnb-nv{all:unset;cursor:pointer;flex:1;min-width:0;padding:12px 16px;border-radius:14px;background:#fff;border:1.5px solid #e0d4c1;display:flex;flex-direction:column;gap:2px}' +
    '.hnb-nv small{font-size:12px;font-weight:700;color:#8a7c68}' +
    '.hnb-nv b{font:700 19px "Aref Ruqaa",serif;color:#24493d;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}' +
    '.hnb-nv.nx{text-align:left}' +
    '.hnb-lb{position:fixed;inset:0;z-index:2147483647;background:rgba(10,12,10,.94);display:none;flex-direction:column;direction:rtl}' +
    '.hnb-lb.on{display:flex}' +
    '.hnb-lt{display:flex;align-items:center;gap:10px;padding:10px 12px;color:#fff;font-weight:700;font-size:14px}' +
    '.hnb-lt span{flex:1}' +
    '.hnb-li{flex:1;overflow:auto;display:flex;align-items:center;justify-content:center;touch-action:pan-x pan-y pinch-zoom}' +
    '.hnb-li img{max-width:100%;max-height:100%;object-fit:contain;cursor:zoom-in}' +
    '.hnb-li.z{align-items:flex-start;justify-content:flex-start}' +
    '.hnb-li.z img{max-width:none;max-height:none;width:180%;cursor:zoom-out}' +
    '.hnb-la{position:absolute;top:50%;margin-top:-24px;width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,.14);color:#fff;display:grid;place-items:center;cursor:pointer;border:0}' +
    '.hnb-la svg{width:22px;height:22px}' +
    '@media (max-width:440px){#hnn-bar .c{display:none}#hnn-bar a,#hnn-bar button{padding:7px 8px;gap:5px;font-size:12px}}' +
    '@media (max-width:640px){.hnb-b{font-size:17px;padding:16px 14px 22px;border-width:9px}.hnb-bt h4{font-size:22px}.hnb-sr b{font-size:20px;min-width:96px}.hnb-sr .v{font-size:18px}.hnb-tt h2{font-size:22px}.hnb-psg{font-size:18px}.hnb-tb td,.hnb-tb th{padding:6px}.hnb-la{display:none}}';
  var I = {
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    next: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>',
    board: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8 20l2-4M16 20l-2-4M7 9h6M7 12h4"/></svg>',
    eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
    eyeoff: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l18 18"/><path d="M10.6 5.1A10 10 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 4.1M6.6 6.6C3.8 8.4 2 12 2 12s3.5 7 10 7a9.6 9.6 0 0 0 5.4-1.6"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>'
  };
  function el(tag, cls, h) { var e = document.createElement(tag); if (cls) e.className = cls; if (h != null) e.innerHTML = h; return e; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function img(n) { return base + 'boards/img/' + ('00' + n).slice(-3) + '.webp'; }
  function H(v) { return v ? '<span class="hnb-h">' + esc(v) + '</span>' : '<span class="hnb-pr">تدريب</span>'; }
  function gapify(s) { return esc(s).replace(/……/g, '<span class="hnb-gap"></span>'); }
  var LS = B.lessons.slice().sort(function (a, b) { return a.sort < b.sort ? -1 : 1; });
  var ov, body, quiz = false, cur = -1, filter = 'الكل', lb, lbList = [], lbI = 0, depth = 0;
  function ensure() {
    if (!document.getElementById('hnb-css')) { var s = el('style'); s.id = 'hnb-css'; s.textContent = css; document.head.appendChild(s); }
    if (!document.getElementById('hnb-font')) { var l = el('link'); l.id = 'hnb-font'; l.rel = 'stylesheet'; l.href = 'https://fonts.googleapis.com/css2?family=Aref+Ruqaa:wght@700&family=Baloo+Bhaijaan+2:wght@500;600;700;800&display=swap'; document.head.appendChild(l); }
    if (ov && document.body.contains(ov)) return;
    ov = el('div'); ov.id = 'hnb-ov'; document.body.appendChild(ov);
    lb = el('div', 'hnb-lb'); document.body.appendChild(lb);
  }
  function kindStyle(k) { var c = KIND[k] || ['#fff', '#333']; return 'background:' + c[0] + ';color:' + c[1]; }
  function header(title, sub, backFn) {
    var hd = el('div', 'hnb-hd'), r = el('div', 'hnb-hr');
    var bk = el('button', 'hnb-ib', backFn ? I.back : I.close); bk.title = backFn ? 'رجوع' : 'إغلاق';
    bk.onclick = function () { history.back(); };
    r.appendChild(bk);
    r.appendChild(el('div', 'hnb-tt', '<h2>' + esc(title) + '</h2><p>' + esc(sub) + '</p>'));
    hd.appendChild(r);
    hd.appendChild(el('div', 'hnb-chalk', '<i style="background:#f6f3ea"></i><i style="background:#ffe27a"></i><i style="background:#ff9ec4"></i><i style="background:#8fd3ff"></i>'));
    return hd;
  }
  function renderList() {
    cur = -1; ov.innerHTML = '';
    var first = LS[0], last = LS[LS.length - 1];
    ov.appendChild(header('سبورة الفصل', LS.length + ' درس · من ' + first.dates[0] + ' إلى ' + last.dates[last.dates.length - 1], null));
    body = el('div', 'hnb-body'); var w = el('div', 'hnb-wrap'); body.appendChild(w); ov.appendChild(body);
    var kinds = ['الكل']; LS.forEach(function (l) { if (kinds.indexOf(l.kind) < 0) kinds.push(l.kind); });
    var fl = el('div', 'hnb-filters');
    kinds.forEach(function (k) {
      var b = el('button', 'hnb-f' + (k === filter ? ' on' : ''), (KIND[k] ? '<i style="background:' + KIND[k][0] + '"></i>' : '') + esc(k));
      b.onclick = function () { filter = k; renderList(); };
      fl.appendChild(b);
    });
    w.appendChild(fl);
    var groups = {}, order = [];
    LS.map(function (l, i) { return [l, i]; }).reverse().forEach(function (p) {
      var l = p[0]; if (filter !== 'الكل' && l.kind !== filter) return;
      var m = l.sort.slice(5, 7); if (!groups[m]) { groups[m] = []; order.push(m); } groups[m].push(p);
    });
    order.forEach(function (m) {
      w.appendChild(el('div', 'hnb-mh', esc(MONTHS[m] || m)));
      var g = el('div', 'hnb-grid');
      groups[m].forEach(function (p) {
        var l = p[0], i = p[1];
        var c = el('button', 'hnb-lc' + (i === LS.length - 1 ? ' new' : ''));
        c.innerHTML = '<span class="n">' + (i + 1) + '</span><span class="k" style="' + kindStyle(l.kind) + '">' + esc(l.kind) + '</span><h3>' + esc(l.title) + '</h3><span class="d">' + esc(l.dates.join(' · ')) + '</span><span class="m"><span>' + l.boards.length + ' سبورة</span><span>' + l.photos.length + ' صورة</span></span>';
        c.onclick = function () { openLesson(i, true); };
        g.appendChild(c);
      });
      w.appendChild(g);
    });
    body.scrollTop = 0;
  }
  function boardHtml(b, n) {
    var h = '<div class="hnb-bt"><h4>' + esc(b.title) + '</h4><span class="no">' + n + '</span></div>';
    if (b.intro) h += '<div class="hnb-psg">' + esc(b.intro) + '</div>';
    if (b.t === 'table') {
      h += '<table class="hnb-tb"><thead><tr>' + b.head.map(function (x) { return '<th>' + esc(x) + '</th>'; }).join('') + '</tr></thead><tbody>' +
        b.rows.map(function (r) { return '<tr>' + r.map(function (x, j) { return '<td>' + (j ? H(x) : esc(x)) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>';
    } else if (b.t === 'pairs') {
      h += '<div class="hnb-ps">' + b.rows.map(function (r) { return '<div class="hnb-p"><b>' + esc(r[0]) + '</b><span class="ar">←</span><span class="v">' + H(r[1]) + '</span></div>'; }).join('') + '</div>';
    } else if (b.t === 'syll') {
      h += '<div class="hnb-sy">' + b.rows.map(function (r) { return '<div class="hnb-sr"><b>' + esc(r[0]) + '</b><span class="ar">←</span><span class="v">' + H(r[1]) + '</span></div>'; }).join('') + '</div>';
      if (b.note) h += '<p class="hnb-tip">' + esc(b.note) + '</p>';
    } else if (b.t === 'qa' || b.t === 'fill') {
      h += '<ol class="hnb-q">' + b.items.map(function (q) { return '<li><span class="qq">' + gapify(q[0]) + '</span><span class="aa">' + H(q[1]) + '</span></li>'; }).join('') + '</ol>';
    } else if (b.t === 'note') {
      h += '<ul class="hnb-nt">' + b.lines.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
    } else if (b.t === 'list') {
      h += '<div class="hnb-ch">' + b.items.map(function (x) { return '<span>' + esc(x) + '</span>'; }).join('') + '</div>';
    }
    return h;
  }
  function openLesson(i, push) {
    if (push) { try { history.pushState({ hnb: 2 }, ''); } catch (e) {} depth = 2; }
    cur = i; var l = LS[i]; ov.innerHTML = '';
    ov.appendChild(header(l.title, l.kind + ' · ' + l.dates.join(' و '), true));
    body = el('div', 'hnb-body');
    var tools = el('div', 'hnb-tools'), tr = el('div', 'hnb-tr');
    var seg = el('div', 'hnb-seg'), s1 = el('button', 'on', 'السبورة'), s2 = el('button', '', 'صور السبورة الأصلية (' + l.photos.length + ')');
    seg.appendChild(s1); seg.appendChild(s2); tr.appendChild(seg);
    var qz = el('button', 'hnb-qz' + (quiz ? ' on' : ''));
    function qzLabel() { qz.innerHTML = (quiz ? I.eyeoff + 'اختبر نفسك: الإجابات مخفية' : I.eye + 'اختبر نفسك'); qz.classList.toggle('on', quiz); }
    qzLabel(); tr.appendChild(qz); tools.appendChild(tr); body.appendChild(tools);
    var w = el('div', 'hnb-wrap'); body.appendChild(w); ov.appendChild(body);
    var boards = el('div', quiz ? 'hz' : ''), photos = el('div', 'hnb-ph');
    var n = 0;
    l.boards.forEach(function (b) {
      if (b.t === 'hw') { boards.appendChild(el('div', 'hnb-hw', '<h4>' + esc(b.title) + '</h4><ul>' + b.items.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>')); return; }
      n++; boards.appendChild(el('section', 'hnb-b', boardHtml(b, n)));
    });
    boards.addEventListener('click', function (e) { var t = e.target.closest ? e.target.closest('.hnb-h') : null; if (t && quiz) t.classList.toggle('r'); });
    l.photos.forEach(function (p, j) {
      var t = el('button', 'hnb-pt', '<img loading="lazy" decoding="async" alt="" src="' + img(p) + '"><span>' + (j + 1) + '</span>');
      t.onclick = function () { openLb(l.photos, j); };
      photos.appendChild(t);
    });
    photos.style.display = 'none';
    w.appendChild(boards); w.appendChild(photos);
    qz.onclick = function () { quiz = !quiz; qzLabel(); boards.className = quiz ? 'hz' : ''; boards.querySelectorAll('.hnb-h.r').forEach(function (x) { x.classList.remove('r'); }); };
    s1.onclick = function () { s1.className = 'on'; s2.className = ''; boards.style.display = ''; photos.style.display = 'none'; qz.style.visibility = ''; };
    s2.onclick = function () { s2.className = 'on'; s1.className = ''; boards.style.display = 'none'; photos.style.display = ''; qz.style.visibility = 'hidden'; };
    var nav = el('div', 'hnb-nav');
    if (i > 0) { var pv = el('button', 'hnb-nv', '<small>الدرس السابق</small><b>' + esc(LS[i - 1].title) + '</b>'); pv.onclick = function () { openLesson(i - 1, false); }; nav.appendChild(pv); }
    if (i < LS.length - 1) { var nx = el('button', 'hnb-nv nx', '<small>الدرس التالي</small><b>' + esc(LS[i + 1].title) + '</b>'); nx.onclick = function () { openLesson(i + 1, false); }; nav.appendChild(nx); }
    w.appendChild(nav);
    body.scrollTop = 0;
  }
  function openLb(list, j) {
    lbList = list; lbI = j; lb.classList.add('on');
    try { history.pushState({ hnb: 3 }, ''); } catch (e) {} depth = 3;
    drawLb();
  }
  function drawLb() {
    lb.innerHTML = '';
    var t = el('div', 'hnb-lt'); var c = el('button', 'hnb-ib', I.close); c.onclick = function () { history.back(); };
    t.appendChild(c); t.appendChild(el('span', '', 'صورة ' + (lbI + 1) + ' من ' + lbList.length));
    var a = el('a', 'hnb-ib', '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>');
    a.href = img(lbList[lbI]); a.download = ''; a.target = '_blank'; t.appendChild(a);
    lb.appendChild(t);
    var box = el('div', 'hnb-li'); var im = el('img'); im.src = img(lbList[lbI]); im.alt = '';
    im.onclick = function () { box.classList.toggle('z'); };
    box.appendChild(im); lb.appendChild(box);
    if (lbI > 0) { var p = el('button', 'hnb-la', I.back); p.style.right = '14px'; p.onclick = function () { lbI--; drawLb(); }; lb.appendChild(p); }
    if (lbI < lbList.length - 1) { var n = el('button', 'hnb-la', I.next); n.style.left = '14px'; n.onclick = function () { lbI++; drawLb(); }; lb.appendChild(n); }
    var sx = null;
    box.addEventListener('touchstart', function (e) { if (e.touches.length === 1 && !box.classList.contains('z')) sx = e.touches[0].clientX; else sx = null; }, { passive: true });
    box.addEventListener('touchend', function (e) {
      if (sx == null) return; var dx = e.changedTouches[0].clientX - sx; sx = null;
      if (dx > 60 && lbI < lbList.length - 1) { lbI++; drawLb(); } else if (dx < -60 && lbI > 0) { lbI--; drawLb(); }
    });
  }
  var wantOpen = /[?&]boards=1/.test(location.search);
  function open() {
    ensure();
    if (!ov.classList.contains('on')) { try { history.pushState({ hnb: 1 }, ''); } catch (e) {} depth = 1; }
    wantOpen = true; ov.classList.add('on'); document.documentElement.style.overflow = 'hidden';
    renderList();
  }
  function close() { wantOpen = false; if (ov) ov.classList.remove('on'); if (lb) lb.classList.remove('on'); document.documentElement.style.overflow = ''; depth = 0; }
  window.addEventListener('popstate', function () {
    if (!ov || !ov.classList.contains('on')) return;
    if (lb.classList.contains('on')) { lb.classList.remove('on'); depth = 2; return; }
    if (cur >= 0) { depth = 1; renderList(); return; }
    close();
  });
  document.addEventListener('keydown', function (e) {
    if (!lb || !lb.classList.contains('on')) return;
    if (e.key === 'ArrowLeft' && lbI < lbList.length - 1) { lbI++; drawLb(); }
    if (e.key === 'ArrowRight' && lbI > 0) { lbI--; drawLb(); }
    if (e.key === 'Escape') history.back();
  });
  window.HNN_openBoards = open;
  function tick() {
    if (!document.body) return;
    var bar = document.getElementById('hnn-bar');
    if (bar && !document.getElementById('hnb-btn')) {
      var b = el('button', '', I.board + '<span>سبورة الفصل</span><span class="c">' + LS.length + '</span>'); b.id = 'hnb-btn';
      b.style.background = '#24493d'; b.onclick = open;
      bar.appendChild(el('span', 'sep')); bar.appendChild(b);
    }
    if (wantOpen && (!ov || !document.body.contains(ov) || !ov.classList.contains('on'))) { if (ov && !document.body.contains(ov)) ov = null; open(); }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tick); else tick();
  setInterval(tick, 800);
})();
