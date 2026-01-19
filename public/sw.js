const APP_VERSION = '1.1.0';
const APP_SHELL_CACHE = `7k-hsc-shell-${APP_VERSION}`;
const RUNTIME_CACHE = `7k-hsc-runtime-${APP_VERSION}`;
const FONT_CACHE = `7k-hsc-fonts-${APP_VERSION}`;

const CORE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/offline.html',
  '/icons/icon-72x72.png',
  '/icons/icon-96x96.png',
  '/icons/icon-128x128.png',
  '/icons/icon-144x144.png',
  '/icons/icon-152x152.png',
  '/icons/icon-192x192.png',
  '/icons/icon-384x384.png',
  '/icons/icon-512x512.png'
];

const OFFLINE_IMAGE_PLACEHOLDER = '/icons/icon-192x192.png';

const CACHEABLE_DESTINATIONS = ['style', 'script', 'font'];

// Install: pre-cache core app shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(APP_SHELL_CACHE).then((cache) => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => ![APP_SHELL_CACHE, RUNTIME_CACHE, FONT_CACHE].includes(key))
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch strategies
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Navigation requests: network-first with offline fallback
  if (event.request.mode === 'navigate') {
    event.respondWith(networkFirst(event.request));
    return;
  }

  // Same-origin static assets (hashed Vite assets, scripts, styles)
  if (
    url.origin === self.location.origin &&
    (url.pathname.startsWith('/assets/') || CACHEABLE_DESTINATIONS.includes(event.request.destination))
  ) {
    event.respondWith(cacheFirst(event.request));
    return;
  }

  // Images: cache-first with icon fallback when offline
  if (event.request.destination === 'image') {
    event.respondWith(cacheFirst(event.request, APP_SHELL_CACHE, OFFLINE_IMAGE_PLACEHOLDER));
    return;
  }

  // Fonts (Google/other CDNs)
  if (event.request.destination === 'font' || url.hostname.includes('fonts.gstatic.com')) {
    event.respondWith(cacheFirst(event.request, FONT_CACHE));
    return;
  }

  // Default: stale-while-revalidate
  event.respondWith(staleWhileRevalidate(event.request));
});

function networkFirst(request) {
  return fetch(request)
    .then((response) => {
      const copy = response.clone();
      caches.open(APP_SHELL_CACHE).then((cache) => cache.put(request, copy));
      return response;
    })
    .catch(() => caches.match(request).then((cached) => cached || caches.match('/offline.html')));
}

function cacheFirst(request, cacheName = APP_SHELL_CACHE, fallbackUrl = '/offline.html') {
  return caches.match(request).then((cached) => {
    if (cached) return cached;
    return fetch(request)
      .then((response) => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(cacheName).then((cache) => cache.put(request, copy));
        }
        return response;
      })
      .catch(() => caches.match(fallbackUrl));
  });
}

function staleWhileRevalidate(request) {
  return caches.match(request).then((cached) => {
    const fetchPromise = fetch(request)
      .then((response) => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy));
        }
        return response;
      })
      .catch(() => cached || caches.match('/offline.html'));

    return cached || fetchPromise;
  });
}

// Listen for messages from the main app
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});
