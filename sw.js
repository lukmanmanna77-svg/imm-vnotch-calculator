const CACHE='imm-vnotch-v94';
const ASSETS=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png','./banpu-heart.png'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== CACHE).map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  event.respondWith((async () => {
    try {
      const response = await fetch(request);
      return response;
    } catch (error) {
      // Offline navigation: always serve the cached app shell,
      // even when the URL contains ?v=93, ?v=94, etc.
      if (request.mode === 'navigate') {
        const cached = await caches.match('./index.html', { ignoreSearch: true })
          || await caches.match('./', { ignoreSearch: true });
        if (cached) return cached;
      }

      // Offline assets with cache-busting query strings.
      const cached = await caches.match(request, { ignoreSearch: true });
      if (cached) return cached;

      return new Response('Offline — IMM Water Monitoring belum memiliki file yang tersimpan di perangkat ini.', {
        status: 503,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }
  })());
});
