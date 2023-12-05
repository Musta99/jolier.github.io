'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b5dc436fe3f2c54bd8ae283e996b1746",
"assets/AssetManifest.bin.json": "ffe4d5194d21bb936c5b2dd93ff3b316",
"assets/AssetManifest.json": "6a2d4f7c877416632961bc04b93b3cfe",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "012b9a44cec2e25633df8da86ed81ced",
"assets/Images/clipperbg.png": "bbe6c6fb3d383fd5bc47d58d2660cf5c",
"assets/Images/contact.png": "d2c7202d775396df38cd3f3ee6a22bac",
"assets/Images/couple1.jpg": "50315e8ad45237d0cb602f9e12a230d6",
"assets/Images/couple3.jpg": "24c0c9b7e5f4f125c7bc89da4b14cdf2",
"assets/Images/couple4.png": "a4d320fbd7ab8d78ae553cbee869f284",
"assets/Images/friends.jpg": "222f7235a9e7b8749c691baff4c3c61f",
"assets/Images/landingpage/couples.png": "386ea608f3a7a807bdbcefe2235f02aa",
"assets/Images/landingpage/lgbtq.png": "9ed85dd97ac31f8bf0b276341ce7636d",
"assets/Images/landingpage/type3.png": "88db3cf313444b3c470f76f7442ffc0e",
"assets/Images/landingpage/type4.png": "1b046c7ddf36c10dce5ac71bf4fea0a8",
"assets/Images/manbg.png": "6bc2f746dda782bfb96a827007a5ca98",
"assets/Images/manhugging.png": "4762f0a5ba1abddc4373c3c6a31f2279",
"assets/Images/mobileviewbg.png": "099f402c8145effe80ffa4f9a933c3e0",
"assets/Images/Nature.png": "05a8b6428240eaf815291bcae5cb2b90",
"assets/Images/shade.png": "56b63543608b892f499c0aaf6cdffdba",
"assets/Images/websitebg.jpg": "ddc642f2f7349be1403cd3b553f0a2af",
"assets/Images/websitebg1.png": "e68906571ee92cb5d8e3fc6d5b35e2fb",
"assets/NOTICES": "98aac7721bd23f3b5da1988229932e69",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/SvgImages/appstore.svg": "bd8d74064d754701d6dcde07a0eaef08",
"assets/SvgImages/bg.svg": "646703f8c80fedb09d0b8dffa9df0403",
"assets/SvgImages/drawer3.svg": "5e5e732fcde04e83f1107f711069bdb8",
"assets/SvgImages/drawer4.svg": "2a204127cb86bffd51809f3ba9eef87c",
"assets/SvgImages/drawer5.svg": "9fdf99511c7a5dedc19ae8405893242e",
"assets/SvgImages/drawer6.svg": "252bd7b906936fe8f1ca957ea83e583c",
"assets/SvgImages/facebook.svg": "8311f4d83beb903eed2a86f5b1890efa",
"assets/SvgImages/friends.svg": "5b34435085926d889812f755377ffa02",
"assets/SvgImages/insta.svg": "b6c744edbbd685bced0fe1f69d0a0e89",
"assets/SvgImages/linkedin.svg": "c20e472dbbe47e5809cf79a0b4e283e4",
"assets/SvgImages/love.svg": "b33db1ac3f342bf1e9fc95c95311a571",
"assets/SvgImages/Nature.svg": "adde2989db855370cb671bbb6aeb9e2e",
"assets/SvgImages/playstore.svg": "f2d75ccd343281a25e5c3e27538ded40",
"assets/SvgImages/twitter.svg": "51d9469e799650f1f7295e4c53e05fce",
"assets/SvgImages/youtube.svg": "60c0377105ffb2506dc3f77342a87be9",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "baeb6ca592a0103a92f6c26ac2aeede5",
"/": "baeb6ca592a0103a92f6c26ac2aeede5",
"main.dart.js": "c4b68d882785d23baed958319f94f226",
"manifest.json": "451e75181f1201ba65275f5968ef4f50",
"version.json": "9b588288a8759770cc129e720282e48f"};
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
