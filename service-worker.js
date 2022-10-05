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
    "revision": "e191dbfe3d51cf74c30f87c6a85365f9"
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
    "url": "assets/js/10.9a163a90.js",
    "revision": "d12ea4851cb071568da48d5fbce9199c"
  },
  {
    "url": "assets/js/11.ffd9087a.js",
    "revision": "7242f82ac56369b09e04847ab3b4530e"
  },
  {
    "url": "assets/js/12.6cbeae84.js",
    "revision": "25ab620108bd8b2e11ee40e5c21fc4cb"
  },
  {
    "url": "assets/js/13.893531f8.js",
    "revision": "8c8560f6a6f4b159803e34e574dd8ca3"
  },
  {
    "url": "assets/js/14.aa5f22f8.js",
    "revision": "ef29d4a910032d9d303875b650b705e1"
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
    "url": "assets/js/17.c1174ad6.js",
    "revision": "35d54d6a6401b4f9612d10c5838e2bee"
  },
  {
    "url": "assets/js/18.efc81c79.js",
    "revision": "43c0602f857573b4f0708eaf1b4b8331"
  },
  {
    "url": "assets/js/19.74e7fec8.js",
    "revision": "e372455752f21d3633cbe043b4fb032a"
  },
  {
    "url": "assets/js/20.e727ed14.js",
    "revision": "aa5c6c13bc4a467e1111ac118461d80d"
  },
  {
    "url": "assets/js/21.181f8b7e.js",
    "revision": "0335f59e5e1b3e7cf71c06eb7e16f06a"
  },
  {
    "url": "assets/js/22.b0c5c383.js",
    "revision": "6aa2dba42f96844d7a13c90b3694165f"
  },
  {
    "url": "assets/js/23.eeb20ae5.js",
    "revision": "bd56a9f762198a9b495c72dc88fd632e"
  },
  {
    "url": "assets/js/24.a8f8b110.js",
    "revision": "24e49db31a62e6d9c86342f486d2db07"
  },
  {
    "url": "assets/js/25.b4c7ca5b.js",
    "revision": "d37899af376285a50155745ad7b2ea0f"
  },
  {
    "url": "assets/js/26.ca8b8771.js",
    "revision": "3fd2b1d570d5f70944013df1b9a7be85"
  },
  {
    "url": "assets/js/27.b7f39faa.js",
    "revision": "2be193464ba75cf72bbe5fc7afc4c2f7"
  },
  {
    "url": "assets/js/28.51a15d1c.js",
    "revision": "3465c583c965622790164a0a3267c0f9"
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
    "url": "assets/js/app.6c4e4c65.js",
    "revision": "db9eee2d86f02b889280e65bcd640f43"
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
    "revision": "e4a495442bb709c005b11c69b57ada62"
  },
  {
    "url": "categories/CSS/index.html",
    "revision": "15ea4993fe5d59452ab3af1f0a07f536"
  },
  {
    "url": "categories/HTML/index.html",
    "revision": "858503dc69da791c5678483d86089cbf"
  },
  {
    "url": "categories/index.html",
    "revision": "92efa7bc104d76cb72d66ef97ed3de35"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "cabad49ba843f26470efe6c91211970d"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "568272a0442d904954bf2fdd556e57fe"
  },
  {
    "url": "categories/Naming Conventions/index.html",
    "revision": "fe30cb77784674ddc8f5f5a99ec0b877"
  },
  {
    "url": "categories/Node.js/index.html",
    "revision": "d32ffe1ec24a79c72cd0bbb850ac8edf"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "42a5d691cf70e97d74bed20b0b7d8fc7"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "e1fa949db2e7e0f49a6a0526b7c3fdc3"
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
    "revision": "32cebb96b313882f97e10936c0a22a4b"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "f1aba3ed3f6937e0d00b318e68b06206"
  },
  {
    "url": "tags/Ajax/index.html",
    "revision": "50c6ee3b74aee8391f188b05f4deb337"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "7cc8925140dcea7d52567a8d90cde6e7"
  },
  {
    "url": "tags/Html/index.html",
    "revision": "87506c73d145835f5fac71a109c87245"
  },
  {
    "url": "tags/Introduction/index.html",
    "revision": "9008ea271cc59dd78e9e2c25d4b69023"
  },
  {
    "url": "tags/Javascript/index.html",
    "revision": "0af441bbad1f71211d7c4a1717666508"
  },
  {
    "url": "tags/jQuery/index.html",
    "revision": "b1765ff03fcae31e5ae6386e2d12a51b"
  },
  {
    "url": "tags/Naming Conventions/index.html",
    "revision": "3f99ed378aacd7ead56f9082b08aa692"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "14f1366d586f2152b2a3a2fdd05d59e9"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "8b5c3cf31b3dcbeea50edefbb4c26e73"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "800896137c8e4d9f71b75eb7f0d45035"
  },
  {
    "url": "timeline/index.html",
    "revision": "f1863d4f52f7390a1fa3ada436065b57"
  },
  {
    "url": "技术文章/Ajax/ajax.html",
    "revision": "2631a544d5e1c12d18757ae7222f41d0"
  },
  {
    "url": "技术文章/CSS/css1.html",
    "revision": "14ba83f94fb72156b29571fbc959e770"
  },
  {
    "url": "技术文章/CSS/css2.html",
    "revision": "cff1b6107754aca499a52201aee3685a"
  },
  {
    "url": "技术文章/CSS/css3.html",
    "revision": "ed79c3d2aa72a7e2ea59ba0f99b3d956"
  },
  {
    "url": "技术文章/CSS/proj-record.html",
    "revision": "1e9cb0f104c29b7c7cbe02152aca71db"
  },
  {
    "url": "技术文章/Html/html.html",
    "revision": "73a7f9790180f0bc70958a0f5661197c"
  },
  {
    "url": "技术文章/Intro/intro.html",
    "revision": "1f0e9fe8ebca07311ac206d3abae2780"
  },
  {
    "url": "技术文章/jQuery/jquery.html",
    "revision": "98558177e160b7b846f0acd192c4fa30"
  },
  {
    "url": "技术文章/JS/Javascript1.html",
    "revision": "bf21c2c51c16cd0c33d8817f4689b45d"
  },
  {
    "url": "技术文章/JS/Javascript2.html",
    "revision": "5d6cf335c8f955bb6cd67432d081f4f3"
  },
  {
    "url": "技术文章/Naming-Convention/var-name.html",
    "revision": "925f441b9fbcc23db68fc525a1201c98"
  },
  {
    "url": "技术文章/Nodejs/Nodejs.html",
    "revision": "7978e66404e7f5abef0d1d936100128d"
  },
  {
    "url": "技术文章/Vue/vue1.html",
    "revision": "2e47b93fba54b717e7e9475c4e38c987"
  },
  {
    "url": "技术文章/Vue/vue2.html",
    "revision": "d74bccbc8a63f455c6767ee9ad56d5c1"
  },
  {
    "url": "技术文章/Vue/vue3.html",
    "revision": "6b87043bd0fc2b181118d13f886d4b52"
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
