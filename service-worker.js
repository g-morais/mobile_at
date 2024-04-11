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
  