
const cacheName = 'cache-v1.02';
const precache = [
    '/',
    'index.html',
    'sw.js'
];

self.addEventListener('install', event => {
    console.log('Install event fired');
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(precache);
            })
    );
});

self.addEventListener('fetch', event => {
    console.log('Request intercepted: ', event.request.url);
    event.respondWith(
        caches.match(event.request)
            .then(cached => {
                return cached || fetch(event.request);
            })
    );
});  
