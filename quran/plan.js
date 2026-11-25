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
    '.hqp{position:fixed;inset:0;z-index:2147483600;background:#fff8ef;direction:rtl;font-family:"Baloo Bhaijaan 2",Cairo,system-ui,sans-serif;color:#2b2342;display:none;flex-direction:column}' +
    '.hqp.on{display:flex}.hqp *{box-sizing:border-box}' +
    '.hqp-hd{flex-shrink:0;background:radial-gradient(120% 140% at 85% 0,#ffd9ec 0,#fff0dc 55%,#fff8ef 100%);padding:14px 16px 16px;border-bottom:1px solid #f3e3c9}' +
    '.hqp-hr{display:flex;align-items:center;gap:10px;max-width:760px;margin:0 auto}' +
    '.hqp-x{all:unset;cursor:pointer;width:40px;height:40px;border-radius:12px;background:#fff;border:1px solid #f0dcc0;display:grid;place-items:center;font-size:20px;color:#7a3fd0}' +
    '.hqp-hr h2{margin:0;font-size:21px;font-weight:800;color:#3a1f5c;flex:1}.hqp-hr small{display:block;font-size:12.5px;color:#8a6a40;font-weight:700}' +
    '.hqp-body{flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:14px 14px 90px}' +
    '.hqp-w{max-width:760px;margin:0 auto;display:flex;flex-direction:column;gap:14px}' +
    '.hqp-card{background:#fff;border:1px solid #f0e2c8;border-radius:22px;padding:14px 16px;box-shadow:0 8px 22px -16px rgba(122,63,208,.35)}' +
    '.hqp-card h3{margin:0 0 8px;font-size:17px;font-weight:800;display:flex;align-items:center;gap:8px;color:#3a1f5c}' +
    '.hqp-card h3 i{font-style:normal;width:30px;height:30px;border-radius:10px;display:grid;place-items:center;font-size:16px}' +
    '.hqp-cd{display:flex;gap:10px;align-items:stretch}' +
    '.hqp-cd .big{flex:1;border-radius:18px;padding:12px 14px;background:linear-gradient(135deg,#7a3fd0,#b86ad9);color:#fff}' +
    '.hqp-cd .big b{display:block;font-size:30px;line-height:1.1}.hqp-cd .big span{font-size:13px;font-weight:700;opacity:.9}' +
    '.hqp-cd .sm{width:108px;border-radius:18px;padding:10px;background:#fff4dc;border:1px solid #f3d79b;text-align:center;font-weight:800;color:#b0761a}.hqp-cd .sm b{display:block;font-size:28px;line-height:1.1}' +
    '.hqp-res{display:flex;flex-wrap:wrap;gap:6px}.hqp-res span{font-size:12.5px;font-weight:700;background:#e8f8ee;color:#137a45;border:1px solid #bfe9cf;border-radius:99px;padding:3px 10px}' +
    '.hqp-req{display:grid;gap:8px}.hqp-req div{display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:14px;background:#faf6ff;border:1px solid #ece2ff;font-weight:700;font-size:14.5px}' +
    '.hqp-tag{font-size:11.5px;font-weight:800;border-radius:99px;padding:2px 9px;margin-inline-start:auto;white-space:nowrap}' +
    '.t-new{background:#ffe7c2;color:#9a5a00}.t-rec{background:#dcefff;color:#1d5fa8}.t-hd{background:#e8f8ee;color:#137a45}.t-x{background:#f1edf7;color:#6b5f80}' +
    '.hqp-days{display:flex;gap:8px;overflow-x:auto;padding-bottom:4px;scrollbar-width:none}.hqp-days::-webkit-scrollbar{display:none}' +
    '.hqp-day{all:unset;cursor:pointer;flex-shrink:0;min-width:96px;text-align:center;padding:8px 10px;border-radius:16px;background:#fff;border:1.5px solid #efe2cb;font-weight:700;font-size:13px}' +
    '.hqp-day.on{border-color:#7a3fd0;background:#f5eeff;color:#5a2bb0}.hqp-day.ok{background:#e8f8ee;border-color:#9fdcb8}.hqp-day b{display:block;font-size:15px}' +
    '.hqp-step{border-radius:18px;border:1.5px solid #efe2cb;padding:12px;background:#fffdf9}.hqp-step.ok{border-color:#9fdcb8;background:#f3fbf6}' +
    '.hqp-sh{display:flex;align-items:center;gap:8px;margin-bottom:8px}.hqp-sh b{font-size:15.5px;flex:1}.hqp-sh em{font-style:normal;font-size:12px;font-weight:800;color:#8a6a40;background:#fff4dc;border-radius:99px;padding:2px 9px}' +
    '.hqp-chk{all:unset;cursor:pointer;width:30px;height:30px;border-radius:10px;border:2px solid #cdbbe8;display:grid;place-items:center;font-size:16px;color:#fff;flex-shrink:0}.hqp-step.ok .hqp-chk{background:#22a35a;border-color:#22a35a}' +
    '.hqp-ay{font-family:"Amiri Quran","Amiri",serif;font-size:22px;line-height:2.3;text-align:justify;background:#fffaf0;border:1px solid #f3e3c4;border-radius:14px;padding:8px 12px;margin:6px 0}' +
    '.hqp-ay span{cursor:pointer;transition:filter .2s}.hqp-ay.cov span{filter:blur(6px);color:#b9a47a}.hqp-ay.cov span.sh{filter:none;color:inherit}' +
    '.hqp-ay i{font-style:normal;font-size:.7em;color:#b0761a;margin:0 3px}' +
    '.hqp-btns{display:flex;flex-wrap:wrap;gap:6px;margin-top:6px}' +
    '.hqp-b{all:unset;cursor:pointer;font-size:13px;font-weight:800;padding:7px 12px;border-radius:99px;background:#f3ecff;color:#5a2bb0;border:1px solid #e1d2fb}' +
    '.hqp-b.g{background:#fff1d6;color:#8a5a10;border-color:#f3d79b}.hqp-b.on{background:#7a3fd0;color:#fff}.hqp-b.rec{background:#e5484d;color:#fff;border-color:#e5484d}' +
    '.hqp-rate{display:flex;gap:6px;margin-top:8px}.hqp-rate button{all:unset;cursor:pointer;flex:1;text-align:center;font-size:12.5px;font-weight:800;padding:7px 4px;border-radius:12px}' +
    '.hqp-rate .r3{background:#e8f8ee;color:#137a45}.hqp-rate .r2{background:#fff4dc;color:#9a5a00}.hqp-rate .r1{background:#ffe9ea;color:#b4232a}' +
    '.hqp-hd2{font-family:"Amiri",serif;font-size:19px;line-height:2;background:#f4fbf6;border:1px solid #cdebd8;border-radius:14px;padding:10px 12px}' +
    '.hqp-cyc{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:6px}.hqp-cyc div{font-size:12.5px;font-weight:700;padding:7px 9px;border-radius:12px;background:#faf7f1;border:1px solid #efe5d2}.hqp-cyc div small{display:block;font-size:11px;color:#8a7a5e}' +
    '.hqp-cyc .due{background:#fff1d6;border-color:#f3d79b}.hqp-cyc .w1{background:#ffe9ea;border-color:#f5c2c5}' +
    '.hqp-recs{display:grid;gap:6px}.hqp-recs div{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:700;background:#faf7f1;border-radius:12px;padding:6px 8px}.hqp-recs audio{height:32px;flex:1;min-width:0}' +
    '.hqp-row{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.hqp-row input{font:inherit;padding:6px 10px;border-radius:10px;border:1px solid #e1d2fb}' +
    '.hqp-quiz{font-family:"Amiri Quran","Amiri",serif;font-size:22px;line-height:2.2;text-align:center;background:#f5eeff;border-radius:14px;padding:10px}' +
    '.hqp-toast{position:fixed;bottom:90px;left:50%;transform:translateX(-50%);z-index:2147483647;background:#3a1f5c;color:#fff;padding:10px 16px;border-radius:14px;font:700 14px Cairo,sans-serif}' +
    '.hqp-entry{all:unset;cursor:pointer;display:flex;align-items:center;gap:12px;margin:12px 16px;padding:14px;border-radius:22px;background:linear-gradient(135deg,#f5eeff,#fff3dc);border:1.5px solid #e1d2fb;box-shadow:0 12px 26px -18px #7a3fd0;direction:rtl;font-family:"Baloo Bhaijaan 2",Cairo,sans-serif}' +
    '.hqp-entry .ic{width:52px;height:52px;border-radius:16px;background:linear-gradient(140deg,#a78bfa,#7a3fd0);display:grid;place-items:center;color:#fff;font-size:26px;flex-shrink:0}' +
    '.hqp-entry b{display:block;font-size:17px;color:#3a1f5c}.hqp-entry small{font-size:12.5px;color:#7a6a90;font-weight:700}.hqp-entry .go{margin-inline-start:auto;font-weight:800;color:#fff;background:#7a3fd0;border-radius:99px;padding:6px 12px;font-size:13px;white-space:nowrap}' +
    '.hqp-entry .dot{width:10px;height:10px;border-radius:50%;background:#e5484d;box-shadow:0 0 0 4px rgba(229,72,77,.2)}';

  var ov = null, sel = TK;
  function ensure() {
    if (ov) return;
    var s = el('style'); s.textContent = css; document.head.appendChild(s);
    ov = el('div', 'hqp');
    ov.innerHTML = '<div class="hqp-hd"><div class="hqp-hr"><button class="hqp-x" aria-label="إغلاق">✕</button><h2>خطة الحفظ<small></small></h2></div></div><div class="hqp-body"><div class="hqp-w"></div></div>';
    ov.querySelector('.hqp-x').onclick = function () { if (location.hash === '#plan') history.back(); else close(); };
    document.body.appendChild(ov);
  }
  function open() { ensure(); stop(); ov.classList.add('on'); document.documentElement.style.overflow = 'hidden'; render(); if (location.hash !== '#plan') history.pushState({ hqp: 1 }, '', '#plan'); }
  function close() { stop(); if (ov) ov.classList.remove('on'); document.documentElement.style.overflow = ''; }
  window.addEventListener('popstate', function () { if (location.hash !== '#plan') close(); });

  function render() {
    var w = ov.querySelector('.hqp-w'); w.innerHTML = '';
    var plan = buildPlan(), due = parse(P.next.due), left = Math.round((due - TODAY) / 864e5);
    ov.querySelector('.hqp-hr small').textContent = P.next.title + ' · ' + dayName(due) + ' الساعة ' + ar(P.classTime);
    var top = el('div', 'hqp-cd', '<div class="big"><span>باقي على ' + esc(P.next.title) + '</span><b>' + (left <= 0 ? 'النهارده!' : ar(left) + (left === 1 ? ' يوم' : left === 2 ? ' يومين' : ' أيام')) + '</b><span>' + esc(dayName(due)) + ' · ' + ar(P.classTime) + ' ظهرًا</span></div><div class="sm"><b>' + ar(streak()) + '</b>أيام متتالية 🔥</div>');
    w.appendChild(top);

    var c1 = el('div', 'hqp-card', '<h3><i style="background:#e8f8ee">🏅</i>نتيجة ' + esc(P.last.title) + '</h3>');
    var rs = el('div', 'hqp-res'); P.last.results.forEach(function (r) { rs.appendChild(el('span', '', esc(r[0]) + ' · ' + esc(r[1]))); }); c1.appendChild(rs); w.appendChild(c1);

    var c2 = el('div', 'hqp-card', '<h3><i style="background:#fff1d6">📌</i>المطلوب في ' + esc(P.next.title) + '</h3>');
    var rq = el('div', 'hqp-req');
    P.next.items.forEach(function (it) { rq.appendChild(el('div', '', esc(it.label) + '<span class="hqp-tag ' + (it.kind === 'new' ? 't-new">حفظ' : 't-rec">تسميع') + '</span>')); });
    rq.appendChild(el('div', '', 'الحديث الجديد<span class="hqp-tag t-hd">حديث</span>'));
    (P.next.extra || []).forEach(function (x) { rq.appendChild(el('div', '', esc(x) + '<span class="hqp-tag t-x">مراجعة</span>')); });
    c2.appendChild(rq); w.appendChild(c2);

    var c3 = el('div', 'hqp-card', '<h3><i style="background:#f3ecff">🗓️</i>ورد كل يوم · نص ساعة بس</h3>');
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

    var c4 = el('div', 'hqp-card', '<h3><i style="background:#ffe9ea">🔄</i>دورة المراجعة المستمرة</h3><p style="margin:0 0 8px;font-size:13px;color:#6b5f80;font-weight:600">كل يوم جزء من المحفوظ القديم. اللي يتقال ممتاز يرجع بعد أيام أكتر، واللي محتاج مراجعة يرجع بكرة.</p>');
    revInit();
    var cy = el('div', 'hqp-cyc');
    P.bank.slice().sort(function (a, b) { return ST.rev[a.id].due < ST.rev[b.id].due ? -1 : 1; }).forEach(function (b) {
      var r = ST.rev[b.id], d = parse(r.due), cls = r.due <= TK ? 'due' : '';
      if (r.r === 1) cls += ' w1';
      cy.appendChild(el('div', cls, esc(b.label) + '<small>' + (r.due <= TK ? 'عليها الدور النهارده' : 'المرة الجاية: ' + DAYS[d.getDay()] + ' ' + ar(d.getDate()) + ' ' + MONTHS[d.getMonth()]) + '</small>'));
    });
    c4.appendChild(cy); w.appendChild(c4);

    var c5 = el('div', 'hqp-card', '<h3><i style="background:#f3ecff">🎯</i>جاهزة للتسميع؟ اختبار سريع</h3><p style="margin:0 0 8px;font-size:13px;color:#6b5f80;font-weight:600">بيطلعلك بداية آية من المحفوظ، كمّلي من غير ما تبصي.</p>');
    var qz = el('div', ''); var qb = el('button', 'hqp-b', 'هات آية'); qb.onclick = function () { quiz(qz); }; c5.appendChild(qb); c5.appendChild(qz); w.appendChild(c5);

    var c6 = el('div', 'hqp-card', '<h3><i style="background:#fff1d6">⏰</i>تذكير يومي على الموبايل</h3>');
    var rw = el('div', 'hqp-row', '<span style="font-weight:700;font-size:14px">ميعاد الورد:</span>');
    var inp = el('input'); inp.type = 'time'; inp.value = ST.time; inp.onchange = function () { ST.time = inp.value || '19:00'; save(); };
    rw.appendChild(inp);
    var ib = el('button', 'hqp-b g', '📅 أضيفي التذكير للتقويم'); ib.onclick = ics; rw.appendChild(ib);
    c6.appendChild(rw);
    c6.appendChild(el('p', '', '<span style="font-size:12.5px;color:#6b5f80;font-weight:600">بينزل ملف تفتحيه، فيتضاف للتقويم تنبيه كل يوم في الميعاد ده، وتنبيه قبل حصة الجمعة بساعة.</span>'));
    w.appendChild(c6);

    var c7 = el('div', 'hqp-card', '<h3><i style="background:#ffe9ea">🎙️</i>تسجيلاتي</h3>');
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
    var v = el('div', ''), list = el('div', ''); list.style.cssText = 'display:flex;flex-direction:column;gap:10px;margin-top:10px';
    var b1 = el('div', '');
    if (day.news.length) day.news.forEach(function (n) { b1.appendChild(el('div', '', '<b style="font-size:14.5px">' + esc(NAMES[n.s]) + ' · الآيات ' + ar(n.a) + ' – ' + ar(n.b) + '</b>')); b1.appendChild(ayatBlock(n.s, n.a, n.b, NAMES[n.s] + ' ' + ar(n.a) + '–' + ar(n.b))); });
    else b1.appendChild(el('div', '', '<span style="font-weight:700;color:#137a45">' + (day.last ? 'يوم الحصة: سمّعي الحفظ الجديد كله مرة قبل ما تمشي.' : 'الحفظ الجديد خلص 👏 كرري الجزء الجديد كله مرة.') + '</span>'));
    list.appendChild(step(day, 'n', day.last ? '١ · تسميع الحفظ الجديد' : '١ · حفظ جديد', 12, b1));
    var b2 = el('div', '');
    day.recs.forEach(function (it) {
      var r = el('div', 'hqp-row', '<b style="font-size:14px">' + esc(it.label) + '</b>');
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
        var r = el('div', '', '<b style="font-size:14px">' + esc(b.label) + '</b>');
        var bt = el('div', 'hqp-btns');
        var rc = el('button', 'hqp-b', '● سجّلي'); rc.onclick = function () { recToggle(rc, 'مراجعة ' + b.label, function () { alertBox('اتحفظ التسجيل ✓'); }); }; bt.appendChild(rc);
        var p = el('button', 'hqp-b', '▶ استمعي لأول سورة'); p.onclick = function () { getSurah(b.s[0], function (arr) { playRange(p, b.s[0], 1, arr ? arr.length : 5, 1); }); }; bt.appendChild(p);
        r.appendChild(bt);
        var rt = el('div', 'hqp-rate', '<button class="r3">ممتاز</button><button class="r2">كويس</button><button class="r1">محتاجة مراجعة</button>');
        var bs = rt.querySelectorAll('button');
        [3, 2, 1].forEach(function (k, i) { bs[i].onclick = function () { rate(b.id, k); alertBox(k === 3 ? 'برافو! هترجعلها بعد كام يوم' : k === 2 ? 'تمام، هترجع قريب' : 'هترجعلها بكرة إن شاء الله'); render(); }; });
        r.appendChild(rt); b3.appendChild(r);
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
    b.innerHTML = '<span class="ic">📖</span><span><b>خطة الحفظ · ' + esc(P.next.title) + '</b><small>' + (done ? 'خلصتي ورد النهارده ✓' : 'ورد النهارده مستنيكي · نص ساعة') + ' · باقي ' + ar(Math.max(0, left)) + ' يوم</small></span>' + (done ? '' : '<span class="dot"></span>') + '<span class="go">افتحي ←</span>';
    b.onclick = open;
    return b;
  }
  function tick() {
    if (!document.body) return;
    var cards = document.getElementById('hqx-cards');
    if (cards && !document.getElementById('hqp-entry')) cards.parentNode.insertBefore(entry(), cards);
    var bar = document.getElementById('hnn-bar');
    if (bar && !document.getElementById('hqp-b')) {
      var x = el('button', '', '<span>خطة الحفظ</span>'); x.id = 'hqp-b'; x.style.background = '#7a3fd0'; x.onclick = open;
      bar.appendChild(x);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tick); else tick();
  setInterval(tick, 1000);
  if (location.hash === '#plan') setTimeout(open, 600);
  window.HQP_open = open;
})();
