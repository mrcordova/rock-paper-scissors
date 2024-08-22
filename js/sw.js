const VERSION = "v1";
const CACHE_NAME = `hand-clash-${VERSION}`;
const APP_STATIC_RESOURCES = [
  "index.html",
  "js/script.js",
  "css/style.css",
  "css/reset.css",
  "manifest.json",
  "images/bg-pentagon.svg",
  "images/icon-close.svg",
  "images/icon-lizard.svg",
  "images/icon-paper.svg",
  "images/icon-rock.svg",
  "images/icon-scissors.svg",
  "images/icon-spock.svg",
  "images/image-rules-bonus.svg",
  "images/logo-bonus.svg",
  "images/maskable_icon_x512.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      cache.addAll(APP_STATIC_RESOURCES);
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
      await clients.claim();
    })()
  );
});
