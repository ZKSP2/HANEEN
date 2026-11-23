const C = 'haneen-v1';
const CORE = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './math/assets/haneen-avatar.png', './shared/hnn-nav.js', './shared/hnn-boards.js'];
const CDN = ['fonts.googleapis.com', 'fonts.gstatic.com', 'unpkg.com', 'cdnjs.cloudflare.com', 'cdn.jsdelivr.net'];
self.addEventListener('install', e => { e.waitUntil(caches.open(C).then(c => c.addAll(CORE)).catch(() => {})); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('haneen-') && k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
function keep(req, res) { if (res && res.status === 200 && (res.type === 'basic' || res.type === 'cors')) { const cp = res.clone(); caches.open(C).then(c => c.put(req, cp)).catch(() => {}); } return res; }
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || req.headers.has('range')) return;
  const u = new URL(req.url);
  if (u.origin === location.origin) {
    e.respondWith(fetch(req).then(r => keep(req, r)).catch(() => caches.match(req, { ignoreSearch: req.mode === 'navigate' }).then(r => r || (req.mode === 'navigate' ? caches.match('./index.html') : Response.error()))));
  } else if (CDN.includes(u.hostname)) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => keep(req, r))));
  }
});
