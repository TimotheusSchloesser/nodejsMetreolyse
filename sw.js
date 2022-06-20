// const cacheName = 'cache-v1.02';
// const precache = [
//     '/',
//     'manifest.json',
//     'index.html',
//     'sw.js',
//     'app.js',
//     './css/metroStyle.css',
//     // {
//     //     scope: '/lib'
//     // }

//     '/metrolyse',
//     '/settings',
//     // '/TestDB',
//     // '/stuff',
//     // '/start',
//     // '/traindiary'
// ];

// self.addEventListener('install', event => {
//     console.log('Install event fired');
//     event.waitUntil(
//         caches.open(cacheName)
//             .then(cache => {
//                 return cache.addAll(precache);
//             })
//     );
// });

// self.addEventListener('fetch', event => {
//     console.log('Request intercepted: ', event.request.url);
//     event.respondWith(
//         caches.match(event.request)
//             .then(cached => {
//                 return cached || fetch(event.request);
//             })
//     );
// });  


self.addEventListener('install', (e) => {
    console.log('WORKER: install e in progress.');
    e.waitUntil(

      caches
        .open(1 + 'fundamentals')
        .then(function(cache) {

            return cache.addAll([
                'index.html',
                // 'manifest.json',
                // './public/css/metroStyle.css',
                // 'sw.js',
                // 'app.js'
          ]);
        })
        .then(function() {
          console.log('WORKER: install completed');
        })
    );
  });

self.addEventListener('activate', () => activateSW());
async function activateSW() {
    console.log('WORKER: Activated');
    const cacheKeys = await caches.keys();

    cacheKeys.forEach(cacheKey => {
        if (cacheKey !== getCacheName() ) {
            caches.delete(cacheKey);
        }
    });
}

self.addEventListener('fetch', (e) => {
  console.log(e.request);
    if (e.request.method != 'GET') {
        console.log("post");
        
    }else{
        console.log("get");
        
    }
    if(navigator.onLine){
      if(e.request.url.pathname === "/metrolyse"){
        console.log("metrolyse")
      }
    }

    console.log('FETCH:' +e.request.url.pathname);
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