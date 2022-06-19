self.addEventListener('install', (e) => {
    console.log('WORKER: install e in progress.');
    e.waitUntil(

      caches


        .open(1 + 'fundamentals')
        .then(function(cache) {

          return cache.addAll([
            '/',
            '/css/style.css',
            '/js/my.js',
            '/app.js'
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
      if(e.request.url.pathname === "add"){
        console.log("yea")
      }
    }

    console.log('FETCH:' +e.request.url.pathname);
});
