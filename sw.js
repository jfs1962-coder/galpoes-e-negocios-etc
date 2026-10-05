const CACHE = 'galpoes-v4-limpo';
const FILES = ['index.html','logo.jpg','hero.jpg','manifest.json'];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = e.request.url;
  // NUNCA cacheia login, painel, cadastro
  if(url.includes('login.html') || url.includes('painel.html') || url.includes('cadastro')){
    return e.request.mode === 'navigate' ? e.respondWith(fetch(e.request)) : null;
  }
  e.respondWith(
    fetch(e.request).catch(()=>caches.match(e.request))
  );
});
