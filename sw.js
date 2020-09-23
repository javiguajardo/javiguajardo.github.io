/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-51de249f805e6deb552a.js"
  },
  {
    "url": "framework-fd2b85530eec85104a39.js"
  },
  {
    "url": "app-427d5c04edc2172df455.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "789661e093188b3911a17fc58743e420"
  },
  {
    "url": "google-fonts/s/poppins/v13/pxiByp8kv8JHgFVrLBT5Z1xlFQ.woff2",
    "revision": "383f9e8cda46555882e015765c59e4f0"
  },
  {
    "url": "google-fonts/s/poppins/v13/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2",
    "revision": "f4f17fd53c7d040e56f91a3ecb692b22"
  },
  {
    "url": "google-fonts/s/poppins/v13/pxiByp8kv8JHgFVrLDD4Z1xlFQ.woff2",
    "revision": "93c0db9332c3f46d1842b36bcf89dac0"
  },
  {
    "url": "google-fonts/s/poppins/v13/pxiByp8kv8JHgFVrLDz8Z1xlFQ.woff2",
    "revision": "9ddc04912d6e8f88d9de4045b8b89c59"
  },
  {
    "url": "google-fonts/s/poppins/v13/pxiDyp8kv8JHgFVrJJLm111VF9eO.woff2",
    "revision": "8102a0868a600e270fc7a471a9e542aa"
  },
  {
    "url": "google-fonts/s/poppins/v13/pxiDyp8kv8JHgFVrJJLm21lVF9eO.woff2",
    "revision": "020e7a3762470c85aef405ce3351b026"
  },
  {
    "url": "google-fonts/s/poppins/v13/pxiDyp8kv8JHgFVrJJLm81xVF9eO.woff2",
    "revision": "c248bb043deaa4ede0a863cbfc02b293"
  },
  {
    "url": "google-fonts/s/poppins/v13/pxiDyp8kv8JHgFVrJJLmy15VF9eO.woff2",
    "revision": "586bea02b1f51cf7dfd1a374111d51b8"
  },
  {
    "url": "google-fonts/s/poppins/v13/pxiEyp8kv8JHgFVrJJfecg.woff2",
    "revision": "9ed361bba8488aeb2797b82befda20f1"
  },
  {
    "url": "google-fonts/s/poppins/v13/pxiGyp8kv8JHgFVrJJLucHtA.woff2",
    "revision": "c8844b2518e608504a044c16951c094e"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-0097d26fbd474b34ff9b.js"
  },
  {
    "url": "polyfill-5ace7e86a4d67524f45c.js"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "d0fa0f77df836c4e42f66228822a3f97"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-427d5c04edc2172df455.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
