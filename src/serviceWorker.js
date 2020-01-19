workbox.precaching.precacheAndRoute(self.__precacheManifest)

workbox.routing.registerRoute(
  /https:\/\/superheroapi\.com\/api/,
  new workbox.strategies.NetworkFirst({
    cacheName: 'super-heroes',
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 10 * 60, // 10 minutes
      }),
    ],
  })
)
