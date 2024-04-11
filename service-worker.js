// service-worker.js

// Instala o Service Worker
self.addEventListener('install', event => {
    console.log('Service Worker instalado');
  });
  
  // Ativa o Service Worker
  self.addEventListener('activate', event => {
    console.log('Service Worker ativado');
  });
  
  // Intercepta requisições de rede
  self.addEventListener('fetch', event => {
    console.log('Interceptando requisição:', event.request.url);
    // Você pode adicionar lógica para responder à requisição aqui
  });
  
  // service-worker.js

const CACHE_NAME = 'my-app-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/css/style.css',
  '/assets/js/main.js',
  '/assets/img/favicon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
