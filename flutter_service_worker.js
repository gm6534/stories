'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c1a4721a02f490383b36666448cc6337",
"index.html": "d9715f445c0d521a90d09a65d019be1c",
"/": "d9715f445c0d521a90d09a65d019be1c",
"main.dart.js": "4879fc13040436507109c133db09cfc8",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3641e7b297d145dcc8fa8ff662c330da",
"assets/AssetManifest.json": "7fa03aa0c1451c313e25821644a02c94",
"assets/NOTICES": "a2a20aa78c9ee05d97107f83bcac0a45",
"assets/FontManifest.json": "9898f516877d9d4b1b0e36fbeb01a6c6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/shaders/ink_sparkle.frag": "02a34c5a9c2314e9807abc70582fcdbd",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/PNG/img_1.png": "d5b15e4228ed03d89cb4d687ae7def28",
"assets/assets/PNG/bellIcon.png": "c4dc39c3f28ab0cf2df1719495e5ca68",
"assets/assets/PNG/img_2.png": "43d4b975bf59a0cd9f323731f215f6f1",
"assets/assets/PNG/img_3.png": "ffbc08f6af2f123c3f43ce3488ca8e31",
"assets/assets/PNG/orbit.png": "f7dfdaad19a4f387435c3a916e644369",
"assets/assets/PNG/img_4.png": "1a53deb4754ea43996138ed6df2bae5e",
"assets/assets/PNG/storyPrinces.png": "135d01e403fa9ac171636be414f42455",
"assets/assets/PNG/gridIcon.png": "4738d4c845dd4cdc00d71977edacc78d",
"assets/assets/PNG/loin.png": "d525622a1774020f73ca0ba04ad2ba97",
"assets/assets/PNG/splash_vector.png": "00428b5001de6980f59f84b6f59c146c",
"assets/assets/PNG/girl.png": "db90dc229ff01629e48efa77701bd627",
"assets/assets/PNG/img.png": "f801aeb067729bdbee572f38c1263540",
"assets/assets/PNG/giphy.gif": "47cd51f0fa9725884bb7e577ea0f9e77",
"assets/assets/PNG/storyFairy.png": "c0ab27d4c38a5ad0d9ac731e89b3c18c",
"assets/assets/PNG/age3-5.png": "8d6c21e70b90eaefcc8aa94dc95a1a46",
"assets/assets/PNG/storyHero.png": "18ce5e999f421812d6e63db60bcb61ba",
"assets/assets/PNG/storyImg.png": "db0a2d146a612f2f33a664ad4b99d7a2",
"assets/assets/PNG/giphy2.gif": "d9778c6527197de3510617f24792324e",
"assets/assets/PNG/age10.png": "d09cfb858043c7e8925ed279e2c6910f",
"assets/assets/PNG/splashIcon.png": "59f1eaf3bee2dadf20bcb8b7dd7f3da0",
"assets/assets/PNG/storyLion.png": "29bb2aa26e747b1c5bb3f2057344ac95",
"assets/assets/PNG/storyprince.png": "a2f46d02fb7317a3f85af9cecfba2af5",
"assets/assets/PNG/storyToy.png": "4d577cb32bd970b0403a1eea84696cbb",
"assets/assets/PNG/share.png": "181735b96530359742aa18bfac860fa6",
"assets/assets/PNG/age5-10.png": "2600a815aef308dce2fb548ec7acd072",
"assets/assets/PNG/age1-3.png": "5be8ae899e3e4ff11fac2d4d06458d61",
"assets/assets/PNG/storyJeannie.png": "6b9591c5c699bb5cc851f959ead362e0",
"assets/assets/PNG/rateus.png": "f3c6eb862bb28d381b508160e644a6a2",
"assets/assets/PNG/boy.png": "fed815368a4dc0a9095f851fe156a13e",
"assets/assets/PNG/people.png": "f1f0a98db92e6b12bc2e0f5e2f46b0b6",
"assets/assets/audio/welcome_sound.mp3": "0a9f8881ae61036871905916a6943751",
"assets/assets/Font/BalooBhai-Regular.ttf": "500f68b89cac76ae6d4cce96424f17fe",
"assets/assets/Font/DMSerifDisplay-Regular.ttf": "25b39681f8cf94ad3cbfc6d25d9c0c4e",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
