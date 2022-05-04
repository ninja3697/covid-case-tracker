const { CacheableResponsePlugin } = require("workbox-cacheable-response");
const { clientsClaim } = require("workbox-core");
const { ExpirationPlugin } = require("workbox-expiration");
const { precacheAndRoute } = require("workbox-precaching");
const { registerRoute } = require("workbox-routing");
const { CacheFirst } = require("workbox-strategies");

// Adds an "activate" Listener
clientsClaim();

// @see https://developers.google.com/web/tools/workbox/modules/workbox-core
self.skipWaiting();

precacheAndRoute(self.__WB_MANIFEST);

// Using cache-first strategy with expiry to cache API responses
registerRoute(
  ({ url }) => {
    return url.origin === "https://demo2805718.mockable.io";
  },
  new CacheFirst({
    cacheName: "data_services",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 2 * 60, // 2 minutes
      }),
    ],
  })
);
