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
    "url": "webpack-runtime-43e5be8e67db18c1c850.js"
  },
  {
    "url": "styles.f76b2e4c44fca1a8f0ce.css"
  },
  {
    "url": "styles-407fe62976dc5310c43e.js"
  },
  {
    "url": "framework-306fc8568941f19b2859.js"
  },
  {
    "url": "app-5042aef824528b6be545.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "7aa17fc7ba75cec2bb937144213dfdb8"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-ad6431e4664bcf916d19.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "f5755ff82d7e93cf31c8eb17e487dca3"
  },
  {
    "url": "polyfill-90341bc35b5255d1a92f.js"
  },
  {
    "url": "821c7531d8400a0c7275a264f9c6c27a7763a7c4-153aaf473bdd2aff852c.js"
  },
  {
    "url": "24c4f8fc0e90ea27da9aadbea5cd31c330b01786-0226c8a3d6c751b57754.js"
  },
  {
    "url": "component---src-templates-for-about-js-abcff59c1c3153f0dc76.js"
  },
  {
    "url": "page-data/about/about-us/page-data.json",
    "revision": "22b5e194e8728f4689b342fb9e4ade1e"
  },
  {
    "url": "page-data/sq/d/2987686015.json",
    "revision": "957c4979004d881ce2a5c915bca4e9a0"
  },
  {
    "url": "page-data/sq/d/3431546305.json",
    "revision": "583c27033f9201d78992de2aa2aee730"
  },
  {
    "url": "page-data/about/agm-2020/page-data.json",
    "revision": "6391e3b19939e696a00f1bae6dd2b364"
  },
  {
    "url": "page-data/about/corvid-19/page-data.json",
    "revision": "8fcc03881862674fd7993666ee9b53bd"
  },
  {
    "url": "page-data/about/early-years-foundation-stage-(eyfs)/page-data.json",
    "revision": "68574d201f347ba9717b883f6184e6cc"
  },
  {
    "url": "page-data/about/fees/page-data.json",
    "revision": "ed311aec029c71f78f3caeaecb5945c9"
  },
  {
    "url": "component---src-pages-about-js-db534f4606611dcce7e6.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "345049e5e151ae6372bbb8f66af04753"
  },
  {
    "url": "page-data/sq/d/1855917675.json",
    "revision": "358b47fdf49e40e47f343034d877bb91"
  },
  {
    "url": "page-data/about/key-person-scheme/page-data.json",
    "revision": "80a3885416893190bf39b0fa05937c79"
  },
  {
    "url": "page-data/about/our-staff/page-data.json",
    "revision": "0a4e0dd3e1ded94f8f425b1c584b1f4c"
  },
  {
    "url": "page-data/about/preschool-closure/page-data.json",
    "revision": "1af5ab957e4ee91bd7c7b57d599873d3"
  },
  {
    "url": "page-data/about/routines-and-activities/page-data.json",
    "revision": "e6e0ccd5a42cf509a064763705676bda"
  },
  {
    "url": "page-data/about/template-for-news-item/page-data.json",
    "revision": "dd7f65da747e1056d76978ce4b20bce5"
  },
  {
    "url": "page-data/about/term-dates/page-data.json",
    "revision": "0a20977f170debe65db7e789a52b9fda"
  },
  {
    "url": "page-data/about/test-news-2/page-data.json",
    "revision": "c2e9a65cfb29c4498b0c30ee0f5ca61b"
  },
  {
    "url": "page-data/about/virtual-tour/page-data.json",
    "revision": "1b5db3c516bcb1d9db8bb96e8db9055d"
  },
  {
    "url": "page-data/about/welcome-to-our-preschool/page-data.json",
    "revision": "32556797091ee49eddac4ba59384332d"
  },
  {
    "url": "component---src-pages-contact-js-c987b156d03baca8f549.js"
  },
  {
    "url": "page-data/contact/page-data.json",
    "revision": "ffc84700efe20ae0d6c7e25d16eb0b27"
  },
  {
    "url": "page-data/sq/d/4142545967.json",
    "revision": "d6f66025e313853012f2ea9e21d7138d"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "fded7137410263d8c6463600ac227315"
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
  if (!resources || !(await caches.match(`/app-5042aef824528b6be545.js`))) {
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
