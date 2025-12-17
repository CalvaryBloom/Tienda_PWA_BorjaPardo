const CACHE_NAME = "tienda-cache-v3"; // He cambiado a v3 para forzar actualización
const assets = [
  "./",
  "index.html",
  "carrito.html",
  "style.css",
  "script.js",
  "manifest.json",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "assets/headphones.png",
  "assets/smartwatch.png",
  "assets/keyboard.png",
  "assets/mouse.png",
  "assets/speaker.png",
  "assets/stand.png",
  "assets/earbuds.png",
  "assets/lamp.png",
  "assets/powerbank.png",
  "assets/vr_headset.png",
  "assets/producto3.mp4" 
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(assets))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    )
  );
  // Importante: tomar control inmediato
  return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => resp || fetch(event.request))
  );
});