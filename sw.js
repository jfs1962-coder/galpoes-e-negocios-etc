const CACHE_NAME = 'galpoes-v2';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/logo.png',
  '/logo.jpg',
  '/hero.jpg',
  '/banner.jpg',
  '/icon-192.png',
  '/icon-512.png',
  '/manifest.json',
  '/faq.html',
  '/termos.html'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => { if(key !== CACHE_NAME) return caches.delete(key); })
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      return cached || fetch(e.request).then(res => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(e.request, res.clone());
          return res;
        });
      });
    }).catch(() => caches.match('/index.html'))
  );
});
