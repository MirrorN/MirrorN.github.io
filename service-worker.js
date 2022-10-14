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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8ebe36debd28f82a8eff144bee802cd4"
  },
  {
    "url": "assets/css/0.styles.e6fe5a67.css",
    "revision": "abd1791bdc69c8e33cbb7b819ea692f7"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/image-20220921114425348.709612cf.png",
    "revision": "709612cf1fe541f24407f0b4d0913104"
  },
  {
    "url": "assets/img/image-20220922142125201.e565af66.png",
    "revision": "e565af664802cd5bd244ce50612f65f4"
  },
  {
    "url": "assets/img/image-20220922142159399.ce60c3ff.png",
    "revision": "ce60c3fff5dd452e8a200b1e2e8eb62e"
  },
  {
    "url": "assets/img/image-20220922143204479.f55b0674.png",
    "revision": "f55b06747cc0f13f4f7233826dd4f98f"
  },
  {
    "url": "assets/img/image-20220930151822272.a466640a.png",
    "revision": "a466640ad6b9dff3e0b77b9cc350ab59"
  },
  {
    "url": "assets/js/1.fe749e66.js",
    "revision": "75af5c9ac6532a5a5e58f86333ee96e2"
  },
  {
    "url": "assets/js/10.eb91db8a.js",
    "revision": "9ad47fbdde5c2728ef7f73c3fb98a1c6"
  },
  {
    "url": "assets/js/11.cf7e0fc4.js",
    "revision": "eb8d013f4ccc9fd315feb2b4fd19cc4f"
  },
  {
    "url": "assets/js/12.fb3b0293.js",
    "revision": "b725dcd8c3761fa3e74cb5e562c6ab9f"
  },
  {
    "url": "assets/js/13.51193a53.js",
    "revision": "3a27bcf6007fb9b3e6ee1465eda0f0a7"
  },
  {
    "url": "assets/js/14.a7227c7b.js",
    "revision": "3671511261c5e4e33e1d5ac06cdfb622"
  },
  {
    "url": "assets/js/15.ad67314e.js",
    "revision": "4da7264db434e448cb6f4417f68c650c"
  },
  {
    "url": "assets/js/16.cbeef306.js",
    "revision": "699da234186e9834f461339d8037c7c4"
  },
  {
    "url": "assets/js/17.878ca679.js",
    "revision": "c1126fe9bc6c6710074dd9c6588ce3a7"
  },
  {
    "url": "assets/js/18.efc81c79.js",
    "revision": "43c0602f857573b4f0708eaf1b4b8331"
  },
  {
    "url": "assets/js/19.189b5628.js",
    "revision": "acc50ec3f6d855c9d4d28a253b7815bb"
  },
  {
    "url": "assets/js/20.e727ed14.js",
    "revision": "aa5c6c13bc4a467e1111ac118461d80d"
  },
  {
    "url": "assets/js/21.2bbd61f3.js",
    "revision": "6a12bbabf8a4c05419e0d356636a6093"
  },
  {
    "url": "assets/js/22.4b627b36.js",
    "revision": "884322481d79cc644092e5db54dcae4d"
  },
  {
    "url": "assets/js/23.6cff0bd1.js",
    "revision": "433d462f6c3a0ed37c827d9a98ef2264"
  },
  {
    "url": "assets/js/24.a4e5c01c.js",
    "revision": "a502f45dd2fc3a5ede983388d1b7910d"
  },
  {
    "url": "assets/js/25.be6760fa.js",
    "revision": "d93360c7c2069cb3e8cea3a699eecbd4"
  },
  {
    "url": "assets/js/26.fca2e300.js",
    "revision": "80b207b6c732ebaecc12568cff50b149"
  },
  {
    "url": "assets/js/27.00923bf9.js",
    "revision": "efaa98fa53a89d6bdcedea52b9366776"
  },
  {
    "url": "assets/js/28.53939f00.js",
    "revision": "c5d9947e1466f3817907e5df52a3aca4"
  },
  {
    "url": "assets/js/29.aa093f18.js",
    "revision": "bb0754b743e1df7e2b809370c3265fda"
  },
  {
    "url": "assets/js/4.8f63224c.js",
    "revision": "7e7de570a873ddc179dc3af789cc8d12"
  },
  {
    "url": "assets/js/5.e7d32d4f.js",
    "revision": "b00e381d78d9074ea79eb2d883991fb6"
  },
  {
    "url": "assets/js/6.dc99ce07.js",
    "revision": "9c4439ff8521efe31afea6898d0b2676"
  },
  {
    "url": "assets/js/7.2e51fffc.js",
    "revision": "8ee4a72588098c6a2ed23315e8b31272"
  },
  {
    "url": "assets/js/8.1632fcb7.js",
    "revision": "2072f751524f7a049aee6aa912f2902d"
  },
  {
    "url": "assets/js/9.a5188932.js",
    "revision": "9b1d71cdf8f32b79021966799f8d3ba9"
  },
  {
    "url": "assets/js/app.c96602fc.js",
    "revision": "e4ec740ca592d14cdc0593517f167a1b"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.e57a2de0.js",
    "revision": "8f45f345a577413a6c0f71bb761882ce"
  },
  {
    "url": "avatar.jpg",
    "revision": "1b1be0dfef27416ef74644ba63c5aba6"
  },
  {
    "url": "categories/Ajax/index.html",
    "revision": "cdfea22d6658778f608657dccb2e5a03"
  },
  {
    "url": "categories/CSS/index.html",
    "revision": "61c06aac765bf0482a106a1417c825f6"
  },
  {
    "url": "categories/ES6/index.html",
    "revision": "4f48bc67b6fa4a28080ec1ea20c2ba6e"
  },
  {
    "url": "categories/HTML/index.html",
    "revision": "7444810438cc4725117b86facb94fefe"
  },
  {
    "url": "categories/index.html",
    "revision": "51086e8c2d8f18c2e33b745326181b53"
  },
  {
    "url": "categories/Introduction/index.html",
    "revision": "a3fe8a5aeba491baa03c0bc1566ba129"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "87dffe173953f487ad2ddd696cc2d044"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "48fc2376450ae341631b7b6d876ac8eb"
  },
  {
    "url": "categories/Naming Conventions/index.html",
    "revision": "01953b56efc7be1e1e50061888272726"
  },
  {
    "url": "categories/Node.js/index.html",
    "revision": "dc2b1ed57e66f811aa34fa9a7bd97cfc"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "5ccda6490f5eed822855a8603915dec5"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "a3cafa952a21309f13cd39c2c2b646e9"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/1.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/5.jpg",
    "revision": "1d0b0bb5f1a55902ad3f070fb8ba46b4"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "4a735d1bec0766a9bd031b5f696a3818"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "2b150f4582e2d2f1110d47a0a7079d77"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "e781c9b50e555a38d8795210212d0963"
  },
  {
    "url": "tags/Ajax/index.html",
    "revision": "1a4ae1cee89a3c8e5546ecbcbf6993cd"
  },
  {
    "url": "tags/async/await/index.html",
    "revision": "8d2abece905047a7f13dceeb9f19e4c7"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "5876d3b5869f276a54f8943c87c545e8"
  },
  {
    "url": "tags/ES6/index.html",
    "revision": "6c2e02be3eb02346b012e74b06a2ae7e"
  },
  {
    "url": "tags/Html/index.html",
    "revision": "6a3131ede1c8152614f463a8d6761fe2"
  },
  {
    "url": "tags/Introduction/index.html",
    "revision": "a6a1d1ea318ac73baf7c20ae965739d1"
  },
  {
    "url": "tags/Javascript/index.html",
    "revision": "ffd51b3bab57393d13a93d70d9a57f6a"
  },
  {
    "url": "tags/jQuery/index.html",
    "revision": "0054e66f1dedefa80e67fc84b6899af8"
  },
  {
    "url": "tags/Naming Conventions/index.html",
    "revision": "68d40fedb8d85c50ad3e47de4509dec4"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "22d1aa5d4a94bb94efa00336fa4a97b3"
  },
  {
    "url": "tags/Promise/index.html",
    "revision": "f8067d05a9008b689b2722959dad716d"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "83822433aa13fe14f53881a53464d784"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "72dc6bf865de05ecd62c6c80f78990f2"
  },
  {
    "url": "timeline/index.html",
    "revision": "43299e91c22182f35cafda3cebe100a8"
  },
  {
    "url": "技术文章/Ajax/ajax.html",
    "revision": "12b89a5a94e54ea62883382678e2b54b"
  },
  {
    "url": "技术文章/CSS/css1.html",
    "revision": "7a1bd1bf6d798c6a80a2b860f550b6ca"
  },
  {
    "url": "技术文章/CSS/css2.html",
    "revision": "6c6b986f08c1858e313427cea428a469"
  },
  {
    "url": "技术文章/CSS/css3.html",
    "revision": "566bdf40979d227a83b63f29d04204c1"
  },
  {
    "url": "技术文章/CSS/proj-record.html",
    "revision": "f4f84bddce1bf997586089fdc3c57c3f"
  },
  {
    "url": "技术文章/ES6/ES6.html",
    "revision": "628ad38c89e9964245c076c152aeedda"
  },
  {
    "url": "技术文章/Html/html.html",
    "revision": "044f5858726350001729a1ac6119310f"
  },
  {
    "url": "技术文章/Intro/intro.html",
    "revision": "39ee45a6c1303dd86572db0488eb1e39"
  },
  {
    "url": "技术文章/jQuery/jquery.html",
    "revision": "8f4e60b216a13d6a9234b77ae6b018e5"
  },
  {
    "url": "技术文章/JS/Javascript1.html",
    "revision": "62be5b9faf8f26aee1bbec594f16a507"
  },
  {
    "url": "技术文章/JS/Javascript2.html",
    "revision": "8b9098e68d6d20b31c691c83e8210b09"
  },
  {
    "url": "技术文章/Naming-Convention/var-name.html",
    "revision": "6c87e0ffeda3b4da51e48b461da91588"
  },
  {
    "url": "技术文章/Nodejs/Nodejs.html",
    "revision": "f5e436fa82a116111b6c649ac22fafbe"
  },
  {
    "url": "技术文章/Vue/vue1.html",
    "revision": "687f5259da17f45df9802c75dce7d418"
  },
  {
    "url": "技术文章/Vue/vue2.html",
    "revision": "8713e189876c4b793527bc72317b210d"
  },
  {
    "url": "技术文章/Vue/vue3.html",
    "revision": "8b71258d505c721025a0ad48078dc076"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
