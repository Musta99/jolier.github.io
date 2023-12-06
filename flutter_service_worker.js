'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "664394500005d44b6eaa5b35d6618f87",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fb7fb59f70689131f80b2343ecb64b22",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f5169b45751544a6dc932bae259b21d7",
".git/logs/refs/heads/main": "74e8378a6d917311ee910f59ec6bf1a3",
".git/objects/04/d8901ed6fd33fc4c39c55fe317a5fa5e456926": "3c3f02c6288a59b0732493f9e9ff4a4b",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/11/0e3cbec1f6dbb931e37292c19453e2ff86d93a": "7b2d7145a95f40c1d1dc2c52c46a285c",
".git/objects/15/c453181e1e1aa8a5201a065379472dfca556e9": "9bc4aa7e47667bf9560531e2ec2f28ac",
".git/objects/18/5d4a7af335277a40e3e768ce3abe7cdf1fac2c": "840c1c14d10df8e3ab6edd37f05f9895",
".git/objects/1a/d459e1d9832a680276f5f0ed7e600cb7965d5d": "9689634b1535e3f2e16c6bfd13717224",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/1b/c256ae476fc89e697de9d7ab0a4b6fbc72a87a": "af19ac959a162cf6e3598f8adaf979f3",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/5baf872eeb30a487388baf143305c4e508c88d": "81e4ebf18fb10dbfadacd8c7d4a6179f",
".git/objects/22/9b7784cc5c367e66e6ee3bf3839a83fb2cf72b": "9f76bd45e6fc5071b96ec070f6f34ec0",
".git/objects/2a/9b824d4a9a8efa3a624968eb562a576a7bf67e": "9fe2733ebb75794e80a65577f58a0ec2",
".git/objects/2e/5a1ce2742a0998eadead9b14e5ebf7d2f7b647": "4acef7d901a489945e46d27274d01ecf",
".git/objects/34/3cd2e151f848afa110ef263f1a26477cef45a4": "daf5333bc5ddf60e3f526613ac023aa5",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/6fa357faf7c49fe53230fec05bd482d6658ef7": "db2c868b461161b25fa624d1f31dfb57",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/7ba2498d33ecf8a45670673f1622465d21e2b1": "a37465476a30cdde303d34af4e234394",
".git/objects/4d/eb4f2abc9a1134d09a9a79978b34fd8e91707a": "5da32db68d78e8e008477e7e1ea1b999",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/51/c766e3bdc130bb10139c7458d0b2555f0623d5": "ea64f01e8bd8c0388340b295baca6113",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/c7ed6ec6df107a7a1abc065dfa51a39ddc79f9": "e1de6414ff47cd8004df4aa68ab8200a",
".git/objects/5a/72a01777ce5b3663fd35294240b8f8f8d92c53": "38c687b607fa5560ad3287e170a469b9",
".git/objects/5c/a34a9eff28df4499dbaa7eb49b54248cb3678e": "f420b147b6b9c5a4ec09b027ec92a5fb",
".git/objects/61/09b0959b9d803b7560cb877a7a30cc9554b2ab": "c6cecf9c5efff515776015aeff038ebe",
".git/objects/62/08adb4412abc36ebf0f08dc87fabe855e63d53": "7fb619a8c7a7b91e469ef8312afaf480",
".git/objects/65/0bcf9d8a2120ce72c364aeabee9d4b70487bdc": "ebc6fc3ac9088d412149f3c73625a1f3",
".git/objects/75/4733d0bf4729ad0f6eea6d39d0be8bd375da8a": "dcf5a9cd638aa26ad24a98408ebc247d",
".git/objects/76/4106703fd221555630523c8d434b72dd0773af": "d96885cc0e5bf64624ee518449fa3396",
".git/objects/79/9e88f934679becc3dd526c295b2752fcc4aa05": "ac956ab85597f2c930304e686c1e35ed",
".git/objects/7b/a3ae1bedaba88d54d5f3a6037281cdf8caf539": "55fade4ca08be0933fccb01c06af2af7",
".git/objects/82/13b23eb882c5c2608058613d47a06588f33908": "5e13f47de88bea4cf7a1904e06c64a0a",
".git/objects/85/50fa5699eb6c3aa3aecad6d227c221d4ad7581": "616b6fa8a694a9b938c0a62579c886d7",
".git/objects/86/086e6dc9d44daf0b41e96e6d6558ad46ac02d0": "9f161fb417313d6790e091b51c02a91f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/6824f0353f49f8233c2d1335331c9ecba93adb": "68c66f8e6f672c5030ebe68cf92bb847",
".git/objects/90/f605544be166d86f1a3b6aba5385882f08fefe": "744aa9b2f5677144957a31844edffdbc",
".git/objects/91/9c6250815801c928e65195ae8fa75d5eb017af": "d149dda0937e17b441230fabfa629f16",
".git/objects/93/bdb1b765df915d1d3ef4c538090191f748da80": "b377704c7f2d7374163acdd50172c806",
".git/objects/95/a893d80013de6318ad7af3eb390e71f5029b64": "75c1126b8de4b5825cb3408356c5a9d4",
".git/objects/97/ce631a5af65f41f0a7c85db634b8d6a97527c8": "7a4a1c46e1049803b3fdb200dcf5977a",
".git/objects/a4/1c9c54f51579e9d8d375468dac30cb9cc39523": "6d76bca132a99f3c731d3cd0ffda28d9",
".git/objects/aa/804d060e88d4f2c5db8ba2495aea674b4a6e70": "eb95c0a3bfe3cc08775f5e99caa74d49",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/9ce0a008ec557bf423fa05c3a49b7b90a2e16d": "05ad3af30db630840c6d63aa23acfeae",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/3baa655c8ce2b513512566f90b659c1caa8d8f": "b8f700dac77f36b1672133df1f20eb26",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/cb/2399ab7d786ec66dd39b1a02c63c326b23b605": "5b80a436f96f226436d3070d9ec9cd10",
".git/objects/cb/623a4392bcc7d394c4c1a51801b089c21d6f70": "f2a27c4e440cbed973e38620c6be97a7",
".git/objects/d0/4fecc139fe1786e504850bc2154ab8ed2e790a": "3e6fac005149db0bdea2e763d5ec04e7",
".git/objects/d2/919619e6d2bbcf986a4ce5505051a251d4aad1": "445ccfb1ec10897a2091919a30ccd865",
".git/objects/d5/90c94382991afc4bdecfb92ebfc17d3f919e69": "3a2027dfc293aa6f451310206c053b23",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/db/a0128eb9e8b7a3fdec3735f319ec2feecf9dd4": "8c3d03b9bcbd5804589a6e3741763234",
".git/objects/dc/7b3fd3a0af8d78db3ac2f527765dea04697fcc": "db9e0c6707fec246611da95ea4ee70c6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e4/e61cf45476191d2bdc2d7c4d7e70c7f503879b": "64f5551528c1398e3b4215d3199e1d14",
".git/objects/e6/33fd8fb302c9f2969d4e8c5df7e56607ef5cc3": "f95e7fd6001976ab18a1aeea0ba11e2a",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/4bc937220d8216ccc72e1c180d1851e63a364f": "b7ce2e567579d3966b18add99e783a7a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/ebfbd1c97021b5c719e71a810c1bcc226d172f": "6cfa28b933987de26c37f52365a38ddf",
".git/objects/fb/47688ac16ac373067370b36549178d666fc66e": "c3d43fe92971ee4e22bc6fe7a1d5d667",
".git/refs/heads/main": "0d1f63abe52d9182c03a75cb41a1906f",
"assets/AssetManifest.bin": "c621ff4fb86260c818d8f9b813a0a3e1",
"assets/AssetManifest.bin.json": "527287f879724da0782239f10958646a",
"assets/AssetManifest.json": "1b9b668226d8e35217a7ad508b2e5fcd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "012b9a44cec2e25633df8da86ed81ced",
"assets/Images/androidinitial.png": "e3cde08d55e35ad6694cd1f95dcdb732",
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
"index.html": "08fc50ceedd777465bf5a2a8768bfe71",
"/": "08fc50ceedd777465bf5a2a8768bfe71",
"main.dart.js": "bb95c3aa2d2760c5ad9f41a481aecf58",
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
