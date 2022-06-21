const CACHE_NAME = 'sw-cache';
const toCache = [
    './',
    // '/index.html',
    // '/sw.js',
    // '/cs_indexdb.js',
    // './css/metroStyle.css',
    // './views/metrolyse.pug',
    // './views/settings.pug',
    // './views/layout.pug',
    // 'js/pwa.webmanifest',
    // './js/netState.js',
    // './js/pwa.js',
    // './js/metronomeControl.js',
    // './js/timer.js',
    // './js/input.js',
    // './js/settings.js',
    // './js/canvas.js',
    // './js/trainDiary.js',
    // './pics/maskable_icon.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(toCache)
      })
      .then(self.skipWaiting())
  )
})


self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys()
        .then((keyList) => {
          return Promise.all(keyList.map((key) => {
            if (key !== CACHE_NAME) {
              console.log('[ServiceWorker] Removing old cache', key)
              return caches.delete(key)
            }
          }))
        })
        .then(() => self.clients.claim())
    )
  })

  self.addEventListener('fetch', function(event) {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return caches.open(CACHE_NAME)
            .then((cache) => {
              return cache.match(event.request)
            })
        })
    )
  })
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