
const PRECACHE = 'precache-V1'

const PRECACHE_URLS = [
    '/',
    '../app.js',
    
]


// Laden der Seite
self.addEventListener('install',event => {

})

// Event wird gefeuert um Elemente zu verarbeiten.
self.addEventListener('activate',event => {
    
})


//Fängt Requests an den Server ab
self.addEventListener('fetch',event => {
    if(event.request.url("/users")){
        event.request
    }
})