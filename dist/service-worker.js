const build = [
  "/_app/start-eb9f8610.js",
  "/_app/pages/__layout.svelte-41830854.js",
  "/_app/assets/pages/__layout.svelte-b5c4b71f.css",
  "/_app/error.svelte-d9762a8a.js",
  "/_app/pages/index.svelte-1cbc6f85.js",
  "/_app/assets/pages/index.svelte-0d9ad471.css",
  "/_app/pages/person/_id_.svelte-befbd259.js",
  "/_app/pages/_id_.svelte-c59533ef.js",
  "/_app/chunks/vendor-f9e5854b.js",
  "/_app/chunks/singletons-d1fb5791.js",
  "/_app/chunks/Movie-568841be.js",
  "/_app/chunks/variables-4b6f5b78.js",
  "/_app/chunks/MoviePreview-f88e5efc.js",
  "/_app/chunks/MovieSection-64e08383.js",
  "/_app/assets/MovieSection-6a1a599d.css"
];
const files = [
  "/favicon.png",
  "/img/loading.svg",
  "/img/mesh.png",
  "/img/themoviedb.svg"
];
const worker = self;
const FILES = `cache`;
const to_cache = build.concat(files);
const staticAssets = new Set(to_cache);
worker.addEventListener("install", (event) => {
  event.waitUntil(caches.open(FILES).then((cache) => cache.addAll(to_cache)).then(() => {
    worker.skipWaiting();
  }));
});
worker.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then(async (keys) => {
    for (const key of keys) {
      if (key !== FILES)
        await caches.delete(key);
    }
    worker.clients.claim();
  }));
});
async function fetchAndCache(request) {
  const cache = await caches.open(`offline`);
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (err) {
    const response = await cache.match(request);
    if (response)
      return response;
    throw err;
  }
}
worker.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || event.request.headers.has("range"))
    return;
  const url = new URL(event.request.url);
  const isHttp = url.protocol.startsWith("http");
  const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;
  const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);
  const skipBecauseUncached = event.request.cache === "only-if-cached" && !isStaticAsset;
  if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
    event.respondWith((async () => {
      const cachedAsset = isStaticAsset && await caches.match(event.request);
      return cachedAsset || fetchAndCache(event.request);
    })());
  }
});
