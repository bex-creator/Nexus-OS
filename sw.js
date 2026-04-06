self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    // This minimal fetch handler satisfies Chrome's installation requirement
    // while allowing all network traffic to pass through normally.
    e.respondWith(fetch(e.request).catch(() => new Response("Offline")));
});
