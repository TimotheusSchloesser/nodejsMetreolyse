const cacheName = 'cache-v1.02';
const precache = [
    '/',
    'manifest.json',
    'index.html',
    'sw.js',
    'app.js',
    './css/metroStyle.css',
    // {
    //     scope: '/lib'
    // }

    '/metrolyse',
    '/settings',
    // '/TestDB',
    // '/stuff',
    // '/start',
    // '/traindiary'
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

// function sync() {
//     navigator.serviceWorker.ready.then(sWorkerRegistration => {
//         return sWorkerRegistration.sync.register('extendCache')
//     })
// }

// self.addEventListener('sync', function(event) {
//     if(event.tag == 'extendCache') {
//         event.waitUntil(
//             caches.open(cacheName).then(cache => {
//                 cache.add("index.html")
//             })
//         )
//     }
// })