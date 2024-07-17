'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "58577f93ca99ddc4089f45e7995b87ec",
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
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6b538406014b5f6cb8ae77db46bb44e9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "64845293f63271a23b8950a9ce00cbb6",
".git/logs/refs/heads/main": "3fee2b427708b233ea10f2b35929992e",
".git/logs/refs/remotes/origin/main": "dae28d2a772f48170f74955a0dfb41ad",
".git/objects/00/1a9d94cf9dbeb30afb98510a948b023a439801": "d7927854d77f6268303ee38cca8338ea",
".git/objects/00/e92ced0a13b7bbc4889eb041e279964b6c4e42": "06de4f30ecb13ec2417b1e4f92c47830",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1b/e55aaaaabbee3c9746256ab418013340e46e51": "25ceae3b333b0e48e720d8a00ed1a25f",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/563a465d45462b2d2c3e114cb3a991b5309d75": "4a44e9bb3c958aeaf20d4f71b5f4fa14",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/3e/1d4b71c7c028c1a9549b3c7eacd4d533cad4d6": "e78f6ddd0072241b760f94a6fe739770",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/68/315886ba13ea86f73dd74edcc1a35788a67795": "2eb247d69dc60af2579116e3b60e5771",
".git/objects/6b/eb2bb7ed311b9c865451a8d554ad5a6d849b82": "2e4c200c29ffb90223255a782d508e49",
".git/objects/6d/2cfaa3c0673a6333992d6279f92f40743532b3": "7df983299048b4fe8a7f206720fba051",
".git/objects/70/2b5d48c17c560c8121ac26f0d5957dc293ca92": "035cc718d76e6205d6a2ddfa52bb9403",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/74/ef3d4c1c577a256b9b153db8d5f1400af59920": "51de0303339fce610f9e1298856cc340",
".git/objects/79/9c7563aae9f21f72dc406b110e9b38818dfb7e": "45567403678990b0f8fd24ab707064fe",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/82/617915990ffb7d81335c412e36b7b3e090e603": "3faea1bc8cd98211a50ab2122291b99b",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8d/d407ca6288654ff1330ac9691f4ac05f09e81f": "ee935b7b55566feffabbbe421f271d54",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9d/2ccde644e4dde0f2c7c8177eb000ac64e51cf2": "165115d49771af2b342c98ca9c52204e",
".git/objects/9d/3e1a475363e54dbd817d60e8f528895854f87b": "7cbc7d94d9dc9ad110572cbba07f8d1b",
".git/objects/9d/6143b9b5bc94d4ddc46c8853066788194feef3": "ce7014a10486613a2d231944191553f0",
".git/objects/a1/80cdcc2458c4b981f94c9e15a16baa790c76f6": "2dcfc5abc8a83525897d3235717ef4f7",
".git/objects/aa/ac7a105a658d69e92dfe02dc3dff42ede3fdca": "45888120ef2bd1a38aef072d819563dc",
".git/objects/ac/6baf145be5c86002ba806ec6ac7c51a39edffb": "5fc3a120af107318138f2243e7f16cfc",
".git/objects/ae/d37d2a76f2d126991d30dc98c3c10305ab1e10": "930bcacd3e8bf58c34f9369dd623aa83",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/9850299dbe09c88be6104acf6a4dc87b2cf0bc": "b18b80f5d9689096e14cfe2ddefb2977",
".git/objects/c1/3b942fdf9da8cff182e82c8c4d24e86d08cb0e": "c31730f9bdb3d43510945192876c4a25",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cc/6aefa8e8dc70999c491c4656058b3d0c703dd5": "57f0f5203c79d7ac2f4a7790d69ea8cc",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d3/755b261ddf93ffd32ff6da2a79702b8707f58f": "898384e6113dc5c04f3e1b9f67e75627",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/35142d83dd382cfb3d54524582e5b6d6dec65f": "e07080248db4386aaaf0141edbdd9abc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/5e23e2b1411da74ca7652d5a31730117bb4a62": "9d9720bd8d7089467af28ce39eb68382",
".git/objects/e3/0f509720f773e5bbdf1ecbacbb958e5c91a6eb": "0e65e09287fe187c8eaeb82daecbc320",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fb/19fce5b8a19e85a6ab1c602ba3f842f4498046": "67d420ed688489f8fc47a0af921d6bb8",
".git/refs/heads/main": "d41852bf9875ba2a6c66e4606a76953d",
".git/refs/remotes/origin/main": "d41852bf9875ba2a6c66e4606a76953d",
"assets/AssetManifest.bin": "692bb91705c6063c218c866cfa059264",
"assets/AssetManifest.bin.json": "3eaa11e4a7d81a1e26f082c8c473617f",
"assets/AssetManifest.json": "fb716ecb35b8465cbea939dd64416eed",
"assets/assets/images/css.jpeg": "c429542e467e4b4421b95fce0dfae15e",
"assets/assets/images/dart_logo.png": "76f060364bb2623ba272028fec80c796",
"assets/assets/images/finaly_image.png": "c7521df0fec0a979422fac4d1a7cda7f",
"assets/assets/images/firebase_logo.png": "54fb52129519bad40506b0eff47f35cc",
"assets/assets/images/Flutter.png": "e31f1c20d27c4415bce49ca10cc44ba1",
"assets/assets/images/github-logo.png": "a72e6834278f1cf31482a5bd1a0031f9",
"assets/assets/images/google-icon.png": "90d9a6177561b49de976e76721d9375f",
"assets/assets/images/html.png": "a397bdd8d276632756bf304235d52532",
"assets/assets/images/img.png": "dfe5e3367418b31bc36b468663f3a5f0",
"assets/assets/images/jslogo.png": "f100af3b80b4e146d3d335e7a5e57711",
"assets/assets/images/test.jpg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "451f805e1d44c1a5f2aaf02e49bc1cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "562c67fcb434842abb624e1395c573c7",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "9da6a2086cf816ec1ea1d6c12f8520ac",
"icons/Icon-192.png": "c8d85192e9e21ee0f901cb16594b6d8d",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4467792d989e00ca74ae5ecfc0a0741e",
"/": "4467792d989e00ca74ae5ecfc0a0741e",
"main.dart.js": "548a20db6b527aa94fc9e5eee3b10313",
"manifest.json": "3ffd0eb1c219c58ad473c11346ee7ef8",
"version.json": "7a41bedc1922911fcaa6e4d857d6d35a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
