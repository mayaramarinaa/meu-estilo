const CACHE_NAME = "meu-estilo-v2";

const ARQUIVOS = [
    "./",
    "./index.html",
    "./estilos.html",
    "./style.css",
    "./script.js",
    "./manifest.json",
    "./icones/icon-192.png",
    "./icones/icon-512.png"
];

self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(ARQUIVOS);
        })
    );

    self.skipWaiting();
});

self.addEventListener("activate", function(event) {
    event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", function(event) {
    event.respondWith(
        fetch(event.request).catch(function() {
            return caches.match(event.request);
        })
    );
});