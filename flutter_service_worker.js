'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fe299a54c36393d66056c6ebe15efee5",
"assets/AssetManifest.json": "a94f5e5353edc6c58caaa64c86940568",
"assets/assets/fonts/HindSiliguri-Bold.ttf": "09e7451bd892e6af09275b701369b454",
"assets/assets/fonts/HindSiliguri-Light.ttf": "8265fea97f78727b251c512253942467",
"assets/assets/fonts/HindSiliguri-Medium.ttf": "41fd138da9f718913aa98aae255b859b",
"assets/assets/fonts/HindSiliguri-Regular.ttf": "5858488e9870f755271e8a71754eda49",
"assets/assets/fonts/HindSiliguri-SemiBold.ttf": "c75e4224905a200c868801e66480b7d3",
"assets/assets/images/amazon_in.png": "eddd63076afdfca46c511c4207d5fd30",
"assets/assets/images/Board.HeavenFish.Web.jpg": "0332e69682160b8672d362c6d9bb69f5",
"assets/assets/images/cocacola.png": "2a71f584a56d2889e63d9781e7c60578",
"assets/assets/images/dashboard.png": "01243bcdcbcc72c270c19030eafe11bd",
"assets/assets/images/developer.riv": "a3c71d3449f970ea2583cc445dd580e7",
"assets/assets/images/developer2.0.riv": "0fc0212bad43d1bda524a28ad31716f8",
"assets/assets/images/fb.png": "6c1517033429601118f1d9698c9cb428",
"assets/assets/images/Fish.PNG": "ab18ea2bee25a2459caa602485828ef1",
"assets/assets/images/flutter-puzzle-hack-project.riv": "d0802f9a79fb2e387c86d44ce2bc2110",
"assets/assets/images/flutterLogo.png": "d744440971931f937269e060e720f5a7",
"assets/assets/images/geometry-madness.riv": "958a4cf071f04471880c10ebbe15be9c",
"assets/assets/images/google.png": "baa58fbc1529cfdee811fd2cd6ad9a14",
"assets/assets/images/HeavenFish.png": "db362390a237e0c3da440065198f3fff",
"assets/assets/images/home_img_1.jpg": "1a784747d1a088d80715d9cd67299c5a",
"assets/assets/images/illustration1.png": "07d124578e6482f4987fa83aa7d72d67",
"assets/assets/images/Illustration2.png": "04b3f0c5b8b28c3a5b1440f0bf023696",
"assets/assets/images/illustration3.png": "c4232b12a609e84636e17e2f0245f4fe",
"assets/assets/images/Illustrator.png": "e5aa8436bf30187a8ebc3cf8019292f8",
"assets/assets/images/linkedin.png": "524ddcf957551a4b6282cf9f28825b6d",
"assets/assets/images/Login.PNG": "aae19f597111daa93914262828d8d349",
"assets/assets/images/logo.png": "3d5a36612b9e73013cf2be68bbe2f90f",
"assets/assets/images/logo_transparente.png": "49f5e5b319296ef14be4f6a216177d34",
"assets/assets/images/me.jpg": "deaf746627c2b5237d9eafa7d59bd304",
"assets/assets/images/orbit-draw-order-demo2.0.riv": "43d0e9d8f58dd57a3099d608c1b5a005",
"assets/assets/images/orbit-draw-order-demo2.5.riv": "43d0e9d8f58dd57a3099d608c1b5a005",
"assets/assets/images/samsung.png": "fc7b329944af591fc4beb52b537647ea",
"assets/assets/images/vector.png": "0eede854c2d8031066895429c95453b6",
"assets/assets/images/vector1.png": "4bfc0123e83305884cd07ce7d4a37db8",
"assets/FontManifest.json": "f872be837643dd39175cc258f68a1f22",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "da1d3cb56d7c02656db5c1150a821a46",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/social_media_flutter/fonts/icons.ttf": "a2943704265adec89858d6d95150a109",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a9b04888291c69a116825690457e54f5",
"/": "a9b04888291c69a116825690457e54f5",
"main.dart.js": "e182994a420a6f612fd91e2af9cd2f5f",
"manifest.json": "ed8c3d4f561be9233500bfd2485b0e74",
"version.json": "a2c3fa42144d40b52a84c841de6243af"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
