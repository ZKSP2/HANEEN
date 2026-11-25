(function () {
  if (window.__hqp) return;
  window.__hqp = true;
  var P = window.HQP;
  if (!P) return;
  var AR = '٠١٢٣٤٥٦٧٨٩';
  function ar(n) { return String(n).replace(/\d/g, function (d) { return AR[d]; }); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function el(t, c, h) { var e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e; }
  function pad(n) { return ('00' + n).slice(-3); }
  var NAMES = { 61: 'الصف', 62: 'الجمعة', 63: 'المنافقون', 64: 'التغابن', 65: 'الطلاق', 66: 'التحريم', 67: 'الملك', 68: 'القلم', 69: 'الحاقة', 70: 'المعارج', 71: 'نوح', 72: 'الجن', 73: 'المزمل', 74: 'المدثر', 75: 'القيامة', 76: 'الإنسان', 77: 'المرسلات', 78: 'النبأ', 79: 'النازعات', 80: 'عبس', 81: 'التكوير', 82: 'الانفطار', 83: 'المطففين', 84: 'الانشقاق', 85: 'البروج', 86: 'الطارق', 87: 'الأعلى', 88: 'الغاشية', 89: 'الفجر', 90: 'البلد', 91: 'الشمس', 92: 'الليل', 93: 'الضحى', 94: 'الشرح', 95: 'التين', 96: 'العلق', 97: 'القدر', 98: 'البينة', 99: 'الزلزلة', 100: 'العاديات', 101: 'القارعة', 102: 'التكاثر', 103: 'العصر', 104: 'الهمزة', 105: 'الفيل', 106: 'قريش', 107: 'الماعون', 108: 'الكوثر', 109: 'الكافرون', 110: 'النصر', 111: 'المسد', 112: 'الإخلاص', 113: 'الفلق', 114: 'الناس' };
  var DAYS = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  var MONTHS = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
  var KEY = 'hqp_v1';
  function iso(d) { return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  function parse(s) { var p = s.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function addDays(d, n) { var x = new Date(d); x.setDate(x.getDate() + n); return x; }
  function dayName(d) { return DAYS[d.getDay()] + ' ' + ar(d.getDate()) + ' ' + MONTHS[d.getMonth()]; }
  function load() { try { var s = JSON.parse(localStorage.getItem(KEY) || '{}'); s.done = s.done || {}; s.rev = s.rev || {}; s.time = s.time || '19:00'; return s; } catch (e) { return { done: {}, rev: {}, time: '19:00' }; } }
  var ST = load();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(ST)); } catch (e) {} }
  var TODAY = new Date(); TODAY.setHours(0, 0, 0, 0);
  var TK = iso(TODAY);

  function planDays() {
    var due = parse(P.next.due), out = [], d = new Date(TODAY);
    while (d <= due) { out.push(new Date(d)); d = addDays(d, 1); }
    if (!out.length) out.push(new Date(TODAY));
    return out;
  }
  function buildPlan() {
    var days = planDays(), n = days.length, study = Math.max(1, n - 1);
    var plan = days.map(function (d) { return { d: d, k: iso(d), news: [], recs: [], last: false }; });
    if (n > 1) plan[n - 1].last = true;
    var newItems = P.next.items.filter(function (i) { return i.kind === 'new'; });
    var recItems = P.next.items.filter(function (i) { return i.kind !== 'new'; });
    var total = 0; newItems.forEach(function (i) { total += i.b - i.a + 1; });
    var per = Math.ceil(total / study), di = 0, left = per;
    newItems.forEach(function (it) {
      var a = it.a;
      while (a <= it.b) {
        var rem = it.b - a + 1, take = Math.min(left, rem);
        if (take < 3 && left < per && di < study - 1) { di++; left = per; take = Math.min(left, rem); }
        if (rem - take <= 2) take = rem;
        plan[Math.min(di, study - 1)].news.push({ s: it.s, a: a, b: a + take - 1, label: it.label });
        a += take; left -= take;
        if (left <= 0) { di++; left = per; }
      }
    });
    recItems.forEach(function (it, i) { plan[i % study].recs.push(it); });
    if (n > 1) plan[n - 1].recs = P.next.items.slice();
    return plan;
  }
  function revInit() {
    var changed = false;
    P.bank.forEach(function (b, i) {
      if (!ST.rev[b.id]) { ST.rev[b.id] = { due: iso(addDays(TODAY, Math.floor(i / 2))), iv: 2 }; changed = true; }
    });
    if (changed) save();
  }
  function revToday() {
    revInit();
    var due = P.bank.filter(function (b) { return ST.rev[b.id].due <= TK; });
    due.sort(function (x, y) { return ST.rev[x.id].due < ST.rev[y.id].due ? -1 : 1; });
    return due.slice(0, 2);
  }
  function rate(id, r) {
    var c = ST.rev[id] || { iv: 2 }, iv;
    if (r === 3) iv = Math.min(21, Math.max(4, Math.round(c.iv * 2.2)));
    else if (r === 2) iv = Math.max(2, Math.round(c.iv * 1.3));
    else iv = 1;
    ST.rev[id] = { due: iso(addDays(TODAY, iv)), iv: iv, last: TK, r: r };
    save();
  }
  function doneOf(k) { return ST.done[k] || (ST.done[k] = {}); }
  function streak() {
    var n = 0, d = new Date(TODAY);
    if (!isFull(iso(d))) d = addDays(d, -1);
    while (isFull(iso(d))) { n++; d = addDays(d, -1); }
    return n;
  }
  function isFull(k) { var x = ST.done[k]; return !!(x && x.n && x.w && x.r); }

  var TXT = {};
  function readAppCache(s) {
    try {
      var keys = ['hq_text_full_v1', 'hq_text_v2'];
      for (var i = 0; i < keys.length; i++) {
        var o = JSON.parse(localStorage.getItem(keys[i]) || 'null');
        if (o && o[s] && o[s].length) return o[s].map(function (x) { return typeof x === 'string' ? x : (x.t || x.text || ''); });
      }
    } catch (e) {}
    return null;
  }
  function getSurah(s, cb) {
    if (TXT[s]) return cb(TXT[s]);
    var c = readAppCache(s);
    if (!c) { try { c = JSON.parse(localStorage.getItem('hqp_s' + s) || 'null'); } catch (e) {} }
    if (c && c.length) { TXT[s] = c; return cb(c); }
    fetch('https://api.alquran.cloud/v1/surah/' + s + '/quran-uthmani').then(function (r) { return r.json(); }).then(function (j) {
      var arr = j.data.ayahs.map(function (x, i) { var t = (x.text || '').replace(/^﻿/, ''); if (i === 0 && s !== 1 && s !== 9) t = t.replace(/^بِسْمِ [^ ]+ [^ ]+ [^ ]+ ?/, ''); return t; });
      TXT[s] = arr; try { localStorage.setItem('hqp_s' + s, JSON.stringify(arr)); } catch (e) {}
      cb(arr);
    }).catch(function () { cb(null); });
  }

  var audio = null, queue = [], qBtn = null;
  function stop() { queue = []; if (audio) { try { audio.pause(); } catch (e) {} } if (qBtn) { qBtn.classList.remove('on'); qBtn.innerHTML = qBtn._lbl; } qBtn = null; }
  function playRange(btn, s, a, b, reps) {
    if (qBtn === btn) { stop(); return; }
    stop();
    try { var x = document.querySelectorAll('audio'); for (var i = 0; i < x.length; i++) if (!x[i].paused) x[i].pause(); } catch (e) {}
    for (var k = a; k <= b; k++) for (var r = 0; r < reps; r++) queue.push([s, k]);
    qBtn = btn; btn._lbl = btn._lbl || btn.innerHTML; btn.classList.add('on'); btn.innerHTML = '■ إيقاف';
    if (!audio) audio = new Audio();
    next();
  }
  function next() {
    if (!queue.length) { stop(); return; }
    var q = queue.shift(), urls = ['https://everyayah.com/data/Husary_128kbps/' + pad(q[0]) + pad(q[1]) + '.mp3', 'https://everyayah.com/data/Husary_64kbps/' + pad(q[0]) + pad(q[1]) + '.mp3'], u = 0;
    audio.onended = next;
    audio.onerror = function () { u++; if (u < urls.length) { audio.src = urls[u]; audio.play().catch(function () {}); } else next(); };
    audio.src = urls[0]; audio.play().catch(function () {});
  }

  var DB = null;
  function db(cb) {
    if (DB) return cb(DB);
    try {
      var r = indexedDB.open('hqp_rec', 1);
      r.onupgradeneeded = function () { r.result.createObjectStore('rec', { keyPath: 'id' }); };
      r.onsuccess = function () { DB = r.result; cb(DB); };
      r.onerror = function () { cb(null); };
    } catch (e) { cb(null); }
  }
  function recSave(o, cb) { db(function (d) { if (!d) return cb && cb(); var t = d.transaction('rec', 'readwrite'); t.objectStore('rec').put(o); t.oncomplete = function () { cb && cb(); }; }); }
  function recList(cb) { db(function (d) { if (!d) return cb([]); var out = [], t = d.transaction('rec', 'readonly'), c = t.objectStore('rec').openCursor(); c.onsuccess = function () { var x = c.result; if (x) { out.push(x.value); x.continue(); } else cb(out.sort(function (a, b) { return b.id - a.id; })); }; }); }
  function recDel(id, cb) { db(function (d) { if (!d) return cb(); var t = d.transaction('rec', 'readwrite'); t.objectStore('rec').delete(id); t.oncomplete = cb; }); }
  var mr = null, chunks = [];
  function recToggle(btn, label, onDone) {
    if (mr && mr.state === 'recording') { mr.stop(); return; }
    if (!navigator.mediaDevices || !window.MediaRecorder) { alertBox('التسجيل غير مدعوم على هذا المتصفح'); return; }
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
      chunks = []; mr = new MediaRecorder(stream);
      mr.ondataavailable = function (e) { if (e.data.size) chunks.push(e.data); };
      mr.onstop = function () {
        stream.getTracks().forEach(function (t) { t.stop(); });
        btn.classList.remove('rec'); btn.innerHTML = '● سجّلي تسميعك';
        var blob = new Blob(chunks, { type: mr.mimeType || 'audio/webm' });
        recSave({ id: Date.now(), day: TK, label: label, blob: blob, type: blob.type }, onDone);
      };
      mr.start(); btn.classList.add('rec'); btn.innerHTML = '■ إنهاء التسجيل';
    }).catch(function () { alertBox('لازم تسمحي للمتصفح باستخدام الميكروفون'); });
  }
  function alertBox(t) { var a = el('div', 'hqp-toast', esc(t)); document.body.appendChild(a); setTimeout(function () { a.remove(); }, 2600); }

  function ics() {
    var t = (ST.time || '19:00').split(':'), now = new Date(), stamp = now.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    var d0 = iso(TODAY).replace(/-/g, '');
    var due = parse(P.next.due), fri = new Date(TODAY); while (fri.getDay() !== P.classDay) fri = addDays(fri, 1);
    var ct = P.classTime.split(':'), cpre = new Date(fri); cpre.setHours(+ct[0], +ct[1], 0, 0);
    function hh(n) { return ('0' + n).slice(-2); }
    var L = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//HANEEN//Quran//AR', 'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT', 'UID:hqp-daily-' + d0 + '@haneen', 'DTSTAMP:' + stamp, 'DTSTART:' + d0 + 'T' + hh(+t[0]) + hh(+t[1]) + '00', 'DURATION:PT30M', 'RRULE:FREQ=DAILY',
      'SUMMARY:ورد حفظ القرآن – ٣٠ دقيقة', 'DESCRIPTION:افتحي خطة الحفظ: https://zksp2.github.io/HANEEN/quran/#plan',
      'BEGIN:VALARM', 'ACTION:DISPLAY', 'DESCRIPTION:وقت ورد القرآن', 'TRIGGER:PT0M', 'END:VALARM', 'END:VEVENT',
      'BEGIN:VEVENT', 'UID:hqp-class-' + d0 + '@haneen', 'DTSTAMP:' + stamp, 'DTSTART:' + iso(fri).replace(/-/g, '') + 'T' + hh(+ct[0]) + hh(+ct[1]) + '00', 'DURATION:PT1H', 'RRULE:FREQ=WEEKLY;BYDAY=FR',
      'SUMMARY:حصة القرآن', 'DESCRIPTION:تسميع واجب الأسبوع', 'BEGIN:VALARM', 'ACTION:DISPLAY', 'DESCRIPTION:حصة القرآن بعد ساعة', 'TRIGGER:-PT1H', 'END:VALARM', 'END:VEVENT', 'END:VCALENDAR'];
    var blob = new Blob([L.join('\r\n')], { type: 'text/calendar' }), a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = 'تذكير-حفظ-القرآن.ics'; document.body.appendChild(a); a.click(); setTimeout(function () { a.remove(); }, 500);
  }

  var css = '' +
    '.hqp{position:fixed;inset:0;z-index:2147483600;background:linear-gradient(180deg,#fdf2f8 0,#f5f3ff 60%,#fdf2f8 100%);direction:rtl;font-family:"Baloo Bhaijaan 2",Cairo,system-ui,sans-serif;color:#2b1840;display:none;flex-direction:column}' +
    '.hqp.on{display:flex}.hqp *{box-sizing:border-box}' +
    '.hqp-body{flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:0 0 100px}' +
    '.hqp-w{max-width:720px;margin:0 auto;display:flex;flex-direction:column;gap:16px;padding:0 16px}' +
    '.hqp-hero{position:relative;overflow:hidden;margin:0 -16px;padding:18px 20px 64px;background:radial-gradient(120% 90% at 20% 0,#f472b6 0,#c026d3 38%,#7c3aed 100%);color:#fff;border-radius:0 0 34px 34px}' +
    '.hqp-hero:before{content:"";position:absolute;inset:0;background-image:radial-gradient(#fff 1.2px,transparent 1.6px);background-size:46px 46px;opacity:.25}' +
    '.hqp-hero .moon{position:absolute;left:22px;top:22px;width:54px;height:54px;border-radius:50%;box-shadow:-12px 10px 0 0 #fde68a;transform:rotate(-20deg);opacity:.95}' +
    '.hqp-top{position:relative;display:flex;align-items:center;gap:10px}' +
    '.hqp-x{all:unset;cursor:pointer;width:42px;height:42px;border-radius:14px;background:rgba(255,255,255,.2);border:1px solid rgba(255,255,255,.35);display:grid;place-items:center;font-size:18px;color:#fff}' +
    '.hqp-hero h2{position:relative;margin:18px 0 2px;font-size:30px;font-weight:800;line-height:1.25}' +
    '.hqp-hero p{position:relative;margin:0;font-size:14px;font-weight:700;opacity:.92}' +
    '.hqp-stats{position:relative;margin:-48px 0 0;display:grid;grid-template-columns:1.4fr 1fr;gap:12px}' +
    '.hqp-st{background:#fff;border-radius:24px;padding:14px 16px;box-shadow:0 18px 34px -20px rgba(124,58,237,.55);border:1px solid #f3e8ff}' +
    '.hqp-st small{display:block;font-size:12.5px;font-weight:700;color:#8b5cf6}' +
    '.hqp-st b{display:block;font-size:30px;font-weight:800;line-height:1.15;color:#86198f}' +
    '.hqp-st span{font-size:12px;font-weight:700;color:#7c6a92}' +
    '.hqp-card{background:#fff;border-radius:28px;padding:16px;border:1px solid var(--bd,#f3e8ff);box-shadow:0 16px 32px -24px var(--sh,#7c3aed);background-image:linear-gradient(140deg,var(--tn,#faf5ff),#fff 55%)}' +
    '.hqp-card h3{margin:0 0 12px;font-size:19px;font-weight:800;display:flex;align-items:center;gap:10px;color:#2b1840}' +
    '.hqp-card h3 i{font-style:normal;width:42px;height:42px;border-radius:14px;display:grid;place-items:center;font-size:20px;color:#fff;background:var(--ic,linear-gradient(140deg,#a78bfa,#7c3aed));box-shadow:0 10px 18px -10px var(--sh,#7c3aed)}' +
    '.hqp-card h3 small{display:block;font-size:12.5px;font-weight:700;color:#7c6a92}' +
    '.hqp-res{display:flex;flex-wrap:wrap;gap:6px}.hqp-res span{font-size:13px;font-weight:700;background:#fff;color:#047857;border:1px solid #a7f3d0;border-radius:99px;padding:4px 11px}.hqp-res span:before{content:"★ ";color:#f59e0b}' +
    '.hqp-req{display:grid;grid-template-columns:1fr 1fr;gap:8px}.hqp-req div{display:flex;align-items:center;gap:8px;padding:10px 12px;border-radius:16px;background:#fff;border:1px solid #f0e6ff;font-weight:700;font-size:14.5px}' +
    '.hqp-tag{font-size:11.5px;font-weight:800;border-radius:99px;padding:2px 9px;margin-inline-start:auto;white-space:nowrap}' +
    '.t-new{background:#fce7f3;color:#be185d}.t-rec{background:#e0f2fe;color:#0369a1}.t-hd{background:#d1fae5;color:#047857}.t-x{background:#f3e8ff;color:#6d28d9}' +
    '.hqp-days{display:flex;gap:8px;overflow-x:auto;padding:2px 0 6px;scrollbar-width:none}.hqp-days::-webkit-scrollbar{display:none}' +
    '.hqp-day{all:unset;cursor:pointer;flex-shrink:0;min-width:92px;text-align:center;padding:9px 12px;border-radius:18px;background:#fff;border:1.5px solid #ede4fb;font-weight:700;font-size:12.5px;color:#7c6a92}' +
    '.hqp-day b{display:block;font-size:15px;color:#2b1840}' +
    '.hqp-day.on{background:linear-gradient(140deg,#db2777,#7c3aed);border-color:transparent;color:#fde7f3;box-shadow:0 10px 20px -12px #7c3aed}.hqp-day.on b{color:#fff}' +
    '.hqp-day.ok{border-color:#86efac}.hqp-day.ok b:after{content:" ✓";color:#16a34a}' +
    '.hqp-steps{display:flex;flex-direction:column;gap:12px;margin-top:12px}' +
    '.hqp-step{position:relative;border-radius:22px;border:1.5px solid #f0e6ff;padding:14px;background:#fff}' +
    '.hqp-step.ok{border-color:#86efac;background:linear-gradient(140deg,#f0fdf4,#fff 60%)}' +
    '.hqp-sh{display:flex;align-items:center;gap:10px;margin-bottom:10px}.hqp-sh b{font-size:16.5px;flex:1}' +
    '.hqp-sh em{font-style:normal;font-size:12px;font-weight:800;color:#a21caf;background:#fdf4ff;border:1px solid #f5d0fe;border-radius:99px;padding:3px 10px}' +
    '.hqp-chk{all:unset;cursor:pointer;width:34px;height:34px;border-radius:12px;border:2px solid #d8b4fe;display:grid;place-items:center;font-size:17px;font-weight:800;color:#fff;flex-shrink:0;background:#fff}' +
    '.hqp-step.ok .hqp-chk{background:#22c55e;border-color:#22c55e;box-shadow:0 8px 16px -8px #16a34a}' +
    '.hqp-lbl{display:inline-block;font-size:13.5px;font-weight:800;color:#86198f;background:#fdf4ff;border-radius:10px;padding:2px 10px;margin:2px 0 6px}' +
    '.hqp-ay{font-family:"Amiri Quran","Amiri",serif;font-size:23px;line-height:2.35;text-align:justify;background:linear-gradient(180deg,#fffbeb,#fff);border:1.5px solid #fde68a;border-radius:18px;padding:10px 14px;margin:4px 0 8px;color:#1f1530}' +
    '.hqp-ay span{cursor:pointer;transition:filter .2s}.hqp-ay.cov span{filter:blur(7px);color:#c4a35a}.hqp-ay.cov span.sh{filter:none;color:inherit}' +
    '.hqp-ay i{font-style:normal;font-size:.7em;color:#b45309;margin:0 3px}' +
    '.hqp-btns{display:flex;flex-wrap:wrap;gap:6px}' +
    '.hqp-b{all:unset;cursor:pointer;font-size:13px;font-weight:800;padding:8px 14px;border-radius:99px;background:#f5f3ff;color:#6d28d9;border:1px solid #e9d5ff}' +
    '.hqp-b.g{background:#fffbeb;color:#b45309;border-color:#fde68a}.hqp-b.on{background:linear-gradient(140deg,#db2777,#7c3aed);color:#fff;border-color:transparent}.hqp-b.rec{background:#ef4444;color:#fff;border-color:#ef4444}' +
    '.hqp-it{display:flex;align-items:center;gap:8px;flex-wrap:wrap;padding:8px 10px;border-radius:16px;background:#faf5ff;margin-bottom:6px}.hqp-it>b{font-size:14.5px;flex:1;min-width:110px}' +
    '.hqp-rate{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:8px}.hqp-rate button{all:unset;cursor:pointer;text-align:center;font-size:12.5px;font-weight:800;padding:8px 4px;border-radius:12px}' +
    '.hqp-rate .r3{background:#dcfce7;color:#15803d}.hqp-rate .r2{background:#fef3c7;color:#b45309}.hqp-rate .r1{background:#fee2e2;color:#b91c1c}' +
    '.hqp-hd2{font-family:"Amiri",serif;font-size:20px;line-height:2.05;background:linear-gradient(140deg,#ecfdf5,#fff);border:1.5px solid #a7f3d0;border-radius:18px;padding:12px 14px;color:#064e3b}' +
    '.hqp-note{margin:0 0 10px;font-size:13px;color:#7c6a92;font-weight:600}' +
    '.hqp-cyc{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:8px}.hqp-cyc div{font-size:13px;font-weight:800;padding:9px 11px;border-radius:16px;background:#fff;border:1px solid #f0e6ff}.hqp-cyc div small{display:block;font-size:11.5px;font-weight:700;color:#7c6a92}' +
    '.hqp-cyc .due{background:linear-gradient(140deg,#fef3c7,#fff);border-color:#fcd34d}.hqp-cyc .w1{background:linear-gradient(140deg,#fee2e2,#fff);border-color:#fca5a5}' +
    '.hqp-recs{display:grid;gap:8px}.hqp-recs div{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:700;background:#fff;border:1px solid #f0e6ff;border-radius:16px;padding:6px 10px}.hqp-recs audio{height:34px;flex:1;min-width:0}' +
    '.hqp-row{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.hqp-row input{font:inherit;font-weight:700;padding:7px 12px;border-radius:12px;border:1.5px solid #e9d5ff;background:#fff;color:#6d28d9}' +
    '.hqp-quiz{font-family:"Amiri Quran","Amiri",serif;font-size:23px;line-height:2.2;text-align:center;background:linear-gradient(140deg,#fdf4ff,#fff);border:1.5px solid #f5d0fe;border-radius:18px;padding:12px;margin:10px 0 8px}' +
    '.hqp-toast{position:fixed;bottom:96px;left:50%;transform:translateX(-50%);z-index:2147483647;background:linear-gradient(140deg,#db2777,#7c3aed);color:#fff;padding:11px 18px;border-radius:16px;font:700 14px Cairo,sans-serif;box-shadow:0 12px 24px -10px #7c3aed}' +
    '.hqp-entry{all:unset;box-sizing:border-box;cursor:pointer;position:relative;overflow:hidden;display:flex;align-items:center;gap:14px;width:100%;margin:0 0 16px;padding:18px;border-radius:28px;background:radial-gradient(120% 120% at 100% 0,#f472b6 0,#c026d3 45%,#7c3aed 100%);color:#fff;box-shadow:0 18px 34px -18px #7c3aed;direction:rtl;font-family:"Baloo Bhaijaan 2",Cairo,sans-serif;text-align:right}' +
    '.hqp-entry:before{content:"";position:absolute;inset:0;background-image:radial-gradient(#fff 1.2px,transparent 1.6px);background-size:38px 38px;opacity:.22}' +
    '.hqp-entry>*{position:relative}' +
    '.hqp-entry .ic{width:58px;height:58px;border-radius:18px;background:rgba(255,255,255,.22);border:1px solid rgba(255,255,255,.4);display:grid;place-items:center;font-size:28px;flex-shrink:0}' +
    '.hqp-entry .tx{flex:1;min-width:0}.hqp-entry b{display:block;font-size:20px;font-weight:800}.hqp-entry small{display:block;font-size:13px;font-weight:700;opacity:.92}' +
    '.hqp-entry .go{width:44px;height:44px;border-radius:50%;background:#fff;color:#be185d;display:grid;place-items:center;font-size:20px;font-weight:800;flex-shrink:0}' +
    '.hqp-entry .dot{position:absolute;top:14px;left:14px;width:12px;height:12px;border-radius:50%;background:#fde047;box-shadow:0 0 0 5px rgba(253,224,71,.3)}' +
    '@media (max-width:520px){.hqp-req{grid-template-columns:1fr}}';

  var ov = null, sel = TK;
  function style() { if (document.getElementById('hqp-css')) return; var s = el('style'); s.id = 'hqp-css'; s.textContent = css; document.head.appendChild(s); }
  function ensure() {
    style();
    if (ov) return;
    ov = el('div', 'hqp');
    ov.innerHTML = '<div class="hqp-body"><div class="hqp-w"></div></div>';
    document.body.appendChild(ov);
  }
  function open() { ensure(); stop(); ov.classList.add('on'); document.documentElement.style.overflow = 'hidden'; render(); if (location.hash !== '#plan') history.pushState({ hqp: 1 }, '', '#plan'); }
  function close() { stop(); if (ov) ov.classList.remove('on'); document.documentElement.style.overflow = ''; }
  window.addEventListener('popstate', function () { if (location.hash !== '#plan') close(); });

  function render() {
    var w = ov.querySelector('.hqp-w'); w.innerHTML = '';
    var plan = buildPlan(), due = parse(P.next.due), left = Math.round((due - TODAY) / 864e5);
    var hero = el('div', 'hqp-hero', '<span class="moon"></span><div class="hqp-top"><button class="hqp-x" aria-label="رجوع">→</button></div><h2>خطة الحفظ 📖</h2><p>' + esc(P.next.title) + ' · ' + esc(dayName(due)) + ' الساعة ' + ar(P.classTime) + ' ظهرًا</p>');
    hero.querySelector('.hqp-x').onclick = function () { if (location.hash === '#plan') history.back(); else close(); };
    w.appendChild(hero);
    var td = doneOf(TK), cnt = (td.n ? 1 : 0) + (td.w ? 1 : 0) + (td.r ? 1 : 0) + (td.h ? 1 : 0);
    w.appendChild(el('div', 'hqp-stats', '<div class="hqp-st"><small>باقي على الحصة</small><b>' + (left <= 0 ? 'النهارده!' : ar(left) + (left === 1 ? ' يوم' : left === 2 ? ' يومين' : ' أيام')) + '</b><span>ورد النهارده: ' + ar(cnt) + ' من ٤ خطوات</span></div><div class="hqp-st"><small>أيام متتالية</small><b>' + ar(streak()) + ' 🔥</b><span>كمّلي كل يوم</span></div>'));
    var c1 = el('div', 'hqp-card', '<h3><i>🏅</i><span>نتيجة ' + esc(P.last.title) + '<small>برافو يا حنين!</small></span></h3>'); c1.style.cssText = '--bd:#a7f3d0;--tn:#ecfdf5;--sh:#059669;--ic:linear-gradient(140deg,#34d399,#059669)';
    var rs = el('div', 'hqp-res'); P.last.results.forEach(function (r) { rs.appendChild(el('span', '', esc(r[0]) + ' · ' + esc(r[1]))); }); c1.appendChild(rs); w.appendChild(c1);

    var c2 = el('div', 'hqp-card', '<h3><i>📌</i><span>المطلوب في ' + esc(P.next.title) + '<small>' + esc(dayName(due)) + '</small></span></h3>'); c2.style.cssText = '--bd:#fbcfe8;--tn:#fdf2f8;--sh:#db2777;--ic:linear-gradient(140deg,#f472b6,#be185d)';
    var rq = el('div', 'hqp-req');
    P.next.items.forEach(function (it) { rq.appendChild(el('div', '', esc(it.label) + '<span class="hqp-tag ' + (it.kind === 'new' ? 't-new">حفظ' : 't-rec">تسميع') + '</span>')); });
    rq.appendChild(el('div', '', 'الحديث الجديد<span class="hqp-tag t-hd">حديث</span>'));
    (P.next.extra || []).forEach(function (x) { rq.appendChild(el('div', '', esc(x) + '<span class="hqp-tag t-x">مراجعة</span>')); });
    c2.appendChild(rq); w.appendChild(c2);

    var c3 = el('div', 'hqp-card', '<h3><i>🗓️</i><span>ورد كل يوم<small>نص ساعة بس · ٤ خطوات</small></span></h3>');
    var dz = el('div', 'hqp-days');
    if (!plan.some(function (p) { return p.k === sel; })) sel = plan[0].k;
    plan.forEach(function (p) {
      var b = el('button', 'hqp-day' + (p.k === sel ? ' on' : '') + (isFull(p.k) ? ' ok' : ''), '<b>' + (p.k === TK ? 'النهارده' : DAYS[p.d.getDay()]) + '</b>' + ar(p.d.getDate()) + ' ' + MONTHS[p.d.getMonth()] + (isFull(p.k) ? ' ✓' : ''));
      b.onclick = function () { sel = p.k; stop(); render(); };
      dz.appendChild(b);
    });
    c3.appendChild(dz);
    var day = plan.filter(function (p) { return p.k === sel; })[0];
    c3.appendChild(dayView(day));
    w.appendChild(c3);

    var c4 = el('div', 'hqp-card', '<h3><i>🔄</i><span>دورة المراجعة المستمرة<small>عشان المحفوظ مايقعش أبدًا</small></span></h3><p class="hqp-note">كل يوم جزء من المحفوظ القديم. اللي يتقال ممتاز يرجع بعد أيام أكتر، واللي محتاج مراجعة يرجع بكرة.</p>');
    c4.style.cssText = '--bd:#fde68a;--tn:#fffbeb;--sh:#d97706;--ic:linear-gradient(140deg,#fbbf24,#ea580c)';
    revInit();
    var cy = el('div', 'hqp-cyc');
    P.bank.slice().sort(function (a, b) { return ST.rev[a.id].due < ST.rev[b.id].due ? -1 : 1; }).forEach(function (b) {
      var r = ST.rev[b.id], d = parse(r.due), cls = r.due <= TK ? 'due' : '';
      if (r.r === 1) cls += ' w1';
      cy.appendChild(el('div', cls, esc(b.label) + '<small>' + (r.due <= TK ? 'عليها الدور النهارده' : 'المرة الجاية: ' + DAYS[d.getDay()] + ' ' + ar(d.getDate()) + ' ' + MONTHS[d.getMonth()]) + '</small>'));
    });
    c4.appendChild(cy); w.appendChild(c4);

    var c5 = el('div', 'hqp-card', '<h3><i>🎯</i><span>جاهزة للتسميع؟<small>اختبار سريع</small></span></h3><p class="hqp-note">بيطلعلك بداية آية من المحفوظ، كمّلي من غير ما تبصي.</p>');
    c5.style.cssText = '--bd:#bae6fd;--tn:#f0f9ff;--sh:#0284c7;--ic:linear-gradient(140deg,#38bdf8,#0284c7)';
    var qz = el('div', ''); var qb = el('button', 'hqp-b', 'هات آية'); qb.onclick = function () { quiz(qz); }; c5.appendChild(qb); c5.appendChild(qz); w.appendChild(c5);

    var c6 = el('div', 'hqp-card', '<h3><i>⏰</i><span>تذكير يومي على الموبايل<small>تنبيه كل يوم في ميعاد الورد</small></span></h3>'); c6.style.cssText = '--bd:#e9d5ff;--tn:#faf5ff';
    var rw = el('div', 'hqp-row', '<span style="font-weight:700;font-size:14px">ميعاد الورد:</span>');
    var inp = el('input'); inp.type = 'time'; inp.value = ST.time; inp.onchange = function () { ST.time = inp.value || '19:00'; save(); };
    rw.appendChild(inp);
    var ib = el('button', 'hqp-b g', '📅 أضيفي التذكير للتقويم'); ib.onclick = ics; rw.appendChild(ib);
    c6.appendChild(rw);
    c6.appendChild(el('p', 'hqp-note', '<span>بينزل ملف تفتحيه، فيتضاف للتقويم تنبيه كل يوم في الميعاد ده، وتنبيه قبل حصة الجمعة بساعة.</span>'));
    w.appendChild(c6);

    var c7 = el('div', 'hqp-card', '<h3><i>🎙️</i><span>تسجيلاتي<small>اسمعي نفسك واتأكدي من حفظك</small></span></h3>'); c7.style.cssText = '--bd:#fecaca;--tn:#fef2f2;--sh:#dc2626;--ic:linear-gradient(140deg,#fb7185,#dc2626)';
    var rl = el('div', 'hqp-recs'); c7.appendChild(rl); w.appendChild(c7);
    recList(function (L) {
      if (!L.length) { rl.appendChild(el('div', '', 'لسه مفيش تسجيلات. سجّلي تسميعك من ورد اليوم.')); return; }
      L.slice(0, 30).forEach(function (r) {
        var d = parse(r.day), row = el('div', '', '<span style="white-space:nowrap">' + DAYS[d.getDay()] + ' ' + ar(d.getDate()) + ' · ' + esc(r.label) + '</span>');
        var au = el('audio'); au.controls = true; au.src = URL.createObjectURL(r.blob); row.appendChild(au);
        var x = el('button', 'hqp-b', '🗑'); x.onclick = function () { recDel(r.id, render); }; row.appendChild(x);
        rl.appendChild(row);
      });
    });
  }

  function step(day, key, title, mins, body) {
    var dn = doneOf(day.k), s = el('div', 'hqp-step' + (dn[key] ? ' ok' : ''));
    var h = el('div', 'hqp-sh', '<b>' + title + '</b><em>' + ar(mins) + ' دقايق</em>');
    var c = el('button', 'hqp-chk', dn[key] ? '✓' : ''); c.title = 'خلصت';
    c.onclick = function () { dn[key] = !dn[key]; save(); render(); };
    h.insertBefore(c, h.firstChild); s.appendChild(h); s.appendChild(body); return s;
  }
  function ayatBlock(s, a, b, label) {
    var box = el('div', '');
    var ay = el('div', 'hqp-ay', '<span style="font-family:Cairo;font-size:14px;color:#8a6a40">جارِ تحميل الآيات…</span>'); box.appendChild(ay);
    getSurah(s, function (arr) {
      if (!arr) { ay.innerHTML = '<span style="font-family:Cairo;font-size:14px">' + esc(NAMES[s] || '') + ' ' + ar(a) + '–' + ar(b) + ' (افتحي المصحف)</span>'; return; }
      ay.innerHTML = arr.slice(a - 1, b).map(function (t, i) { return '<span>' + esc(t) + '</span><i>﴿' + ar(a + i) + '﴾</i>'; }).join(' ');
      ay.onclick = function (e) { var t = e.target.closest('span'); if (t && ay.classList.contains('cov')) t.classList.toggle('sh'); };
    });
    var bt = el('div', 'hqp-btns');
    var p1 = el('button', 'hqp-b', '▶ استمعي ×٣'); p1.onclick = function () { playRange(p1, s, a, b, 3); }; bt.appendChild(p1);
    var p2 = el('button', 'hqp-b', '▶ مرة واحدة'); p2.onclick = function () { playRange(p2, s, a, b, 1); }; bt.appendChild(p2);
    var cv = el('button', 'hqp-b g', '🙈 اخفي واختبري نفسك'); cv.onclick = function () { ay.classList.toggle('cov'); Array.prototype.forEach.call(ay.querySelectorAll('span'), function (x) { x.classList.remove('sh'); }); }; bt.appendChild(cv);
    var rc = el('button', 'hqp-b', '● سجّلي تسميعك'); rc.onclick = function () { recToggle(rc, label, function () { alertBox('اتحفظ التسجيل ✓'); }); }; bt.appendChild(rc);
    box.appendChild(bt);
    return box;
  }
  function dayView(day) {
    var v = el('div', ''), list = el('div', 'hqp-steps');
    var b1 = el('div', '');
    if (day.news.length) day.news.forEach(function (n) { b1.appendChild(el('span', 'hqp-lbl', 'سورة ' + esc(NAMES[n.s]) + ' · الآيات ' + ar(n.a) + ' – ' + ar(n.b))); b1.appendChild(ayatBlock(n.s, n.a, n.b, NAMES[n.s] + ' ' + ar(n.a) + '–' + ar(n.b))); });
    else b1.appendChild(el('div', '', '<span style="font-weight:700;color:#137a45">' + (day.last ? 'يوم الحصة: سمّعي الحفظ الجديد كله مرة قبل ما تمشي.' : 'الحفظ الجديد خلص 👏 كرري الجزء الجديد كله مرة.') + '</span>'));
    list.appendChild(step(day, 'n', day.last ? '١ · تسميع الحفظ الجديد' : '١ · حفظ جديد', 12, b1));
    var b2 = el('div', '');
    day.recs.forEach(function (it) {
      var r = el('div', 'hqp-it', '<b>' + esc(it.label) + '</b>');
      var p = el('button', 'hqp-b', '▶ استمعي'); p.onclick = function () { playRange(p, it.s, it.a, it.b, 1); }; r.appendChild(p);
      var rc = el('button', 'hqp-b', '● سجّلي'); rc.onclick = function () { recToggle(rc, it.label, function () { alertBox('اتحفظ التسجيل ✓'); }); }; r.appendChild(rc);
      b2.appendChild(r);
    });
    if (!day.recs.length) b2.appendChild(el('div', '', 'مفيش تسميع النهارده.'));
    list.appendChild(step(day, 'w', day.last ? '٢ · تسميع كل واجب الحصة' : '٢ · تسميع واجب الحصة', 10, b2));
    var b3 = el('div', '');
    if (day.k === TK) {
      var rv = revToday();
      if (!rv.length) b3.appendChild(el('div', '', '<span style="font-weight:700;color:#137a45">مفيش مراجعة مستحقة النهارده، اختاري أي سورة وسمّعيها.</span>'));
      rv.forEach(function (b) {
        var r = el('div', 'hqp-it', '<b>' + esc(b.label) + '</b>');
        var bt = el('div', 'hqp-btns');
        var rc = el('button', 'hqp-b', '● سجّلي'); rc.onclick = function () { recToggle(rc, 'مراجعة ' + b.label, function () { alertBox('اتحفظ التسجيل ✓'); }); }; bt.appendChild(rc);
        var p = el('button', 'hqp-b', '▶ استمعي لأول سورة'); p.onclick = function () { getSurah(b.s[0], function (arr) { playRange(p, b.s[0], 1, arr ? arr.length : 5, 1); }); }; bt.appendChild(p);
        r.appendChild(bt);
        var rt = el('div', 'hqp-rate', '<button class="r3">ممتاز</button><button class="r2">كويس</button><button class="r1">محتاجة مراجعة</button>');
        var bs = rt.querySelectorAll('button');
        [3, 2, 1].forEach(function (k, i) { bs[i].onclick = function () { rate(b.id, k); alertBox(k === 3 ? 'برافو! هترجعلها بعد كام يوم' : k === 2 ? 'تمام، هترجع قريب' : 'هترجعلها بكرة إن شاء الله'); render(); }; });
        var wrap = el('div', ''); wrap.style.marginBottom = '10px'; wrap.appendChild(r); wrap.appendChild(rt); b3.appendChild(wrap);
      });
    } else b3.appendChild(el('div', '', 'المراجعة الدائرية بتظهر في يومها.'));
    list.appendChild(step(day, 'r', '٣ · مراجعة المحفوظ القديم', 6, b3));
    var hd = P.next.hadith, b4 = el('div', '', '<div class="hqp-hd2">' + esc(hd.text) + '<div style="font-family:Cairo;font-size:12px;color:#137a45;font-weight:700">' + esc(hd.src) + '</div></div>');
    list.appendChild(step(day, 'h', '٤ · الحديث (كرريه ٣ مرات)', 2, b4));
    v.appendChild(list);
    return v;
  }
  function quiz(box) {
    var pool = [];
    P.bank.forEach(function (b) { b.s.forEach(function (s) { pool.push(s); }); });
    P.next.items.forEach(function (i) { if (pool.indexOf(i.s) < 0) pool.push(i.s); });
    var s = pool[Math.floor(Math.random() * pool.length)];
    box.innerHTML = '<div class="hqp-quiz" style="font-family:Cairo;font-size:14px">جاري التحميل…</div>';
    getSurah(s, function (arr) {
      if (!arr) { box.innerHTML = '<div class="hqp-quiz" style="font-family:Cairo;font-size:14px">محتاجين إنترنت أول مرة</div>'; return; }
      var i = Math.floor(Math.random() * Math.max(1, arr.length - 1)), w = arr[i].split(' ');
      box.innerHTML = '';
      var q = el('div', 'hqp-quiz', esc(w.slice(0, Math.min(4, w.length)).join(' ')) + ' …<div style="font-family:Cairo;font-size:13px;color:#6b5f80">سورة ' + esc(NAMES[s]) + ' · آية ' + ar(i + 1) + '</div>');
      box.appendChild(q);
      var bt = el('div', 'hqp-btns');
      var sh = el('button', 'hqp-b g', 'اعرضي الآية والي بعدها'); sh.onclick = function () { q.innerHTML = esc(arr[i]) + (arr[i + 1] ? ' ﴿' + ar(i + 1) + '﴾ ' + esc(arr[i + 1]) + ' ﴿' + ar(i + 2) + '﴾' : '') + '<div style="font-family:Cairo;font-size:13px;color:#6b5f80">سورة ' + esc(NAMES[s]) + '</div>'; }; bt.appendChild(sh);
      var pl = el('button', 'hqp-b', '▶ استمعي'); pl.onclick = function () { playRange(pl, s, i + 1, Math.min(arr.length, i + 2), 1); }; bt.appendChild(pl);
      box.appendChild(bt);
    });
  }

  function entry() {
    var b = el('button', 'hqp-entry'); b.id = 'hqp-entry';
    var due = parse(P.next.due), left = Math.round((due - TODAY) / 864e5), done = isFull(TK);
    b.innerHTML = '<span class="ic">📖</span><span class="tx"><b>خطة الحفظ</b><small>' + esc(P.next.title) + ' · باقي ' + (left <= 0 ? 'النهارده' : ar(left) + (left === 1 ? ' يوم' : left === 2 ? ' يومين' : ' أيام')) + '</small><small>' + (done ? 'خلصتي ورد النهارده ✓' : 'ورد النهارده مستنيكي · نص ساعة') + '</small></span>' + (done ? '' : '<span class="dot"></span>') + '<span class="go">←</span>';
    b.setAttribute('data-hqp-open', '1');
    return b;
  }
  function tick() {
    if (!document.body) return;
    style();
    var cards = document.getElementById('hqx-cards');
    if (cards && !document.getElementById('hqp-entry')) cards.parentNode.insertBefore(entry(), cards);
  }
  document.addEventListener('click', function (e) { var t = e.target && e.target.closest ? e.target.closest('[data-hqp-open]') : null; if (!t) return; e.preventDefault(); e.stopPropagation(); open(); }, true);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tick); else tick();
  setInterval(tick, 1000);
  if (location.hash === '#plan') setTimeout(open, 600);
  window.HQP_open = open;
})();
