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
    "revision": "2fc8028e7f79469c5eb4d4a48d4c7c5c"
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
    "url": "assets/js/10.e0c19b0c.js",
    "revision": "28671e42befd5b8dd33e3fa43a0a4e8c"
  },
  {
    "url": "assets/js/11.cf7e0fc4.js",
    "revision": "eb8d013f4ccc9fd315feb2b4fd19cc4f"
  },
  {
    "url": "assets/js/12.550b6b7b.js",
    "revision": "bb0ad155a638eba2ea60366d4e37e33c"
  },
  {
    "url": "assets/js/13.e0dce5f6.js",
    "revision": "93e341d398553f1c52aff34819b952ed"
  },
  {
    "url": "assets/js/14.7cfca980.js",
    "revision": "225935811653faaa3ca903b09f249a2d"
  },
  {
    "url": "assets/js/15.81ed2bbe.js",
    "revision": "fbaf67374e783490b81417753f2e729c"
  },
  {
    "url": "assets/js/16.64c8b01c.js",
    "revision": "e3cd19936e8afb11f52fed0b7c9a3437"
  },
  {
    "url": "assets/js/17.15336333.js",
    "revision": "8148ee5fec40e0a30dbf77881e6b5a5d"
  },
  {
    "url": "assets/js/18.e43182ab.js",
    "revision": "aa631a29495b74613ab6b18c8156c9d6"
  },
  {
    "url": "assets/js/19.089acc2f.js",
    "revision": "30e4974bbdd6992361ac8cef020288ad"
  },
  {
    "url": "assets/js/20.d17d5fe9.js",
    "revision": "2cc3e791fb1f415f94c0b0d0b4f12859"
  },
  {
    "url": "assets/js/21.9c2a013d.js",
    "revision": "2301fd3d25f3db1457a28cc17b8f87e8"
  },
  {
    "url": "assets/js/22.39c2bf09.js",
    "revision": "7931b9ccbc52f885af83947046f906ab"
  },
  {
    "url": "assets/js/23.c4160f2c.js",
    "revision": "0a81aa012050ca1dc0d7d541feb0803b"
  },
  {
    "url": "assets/js/24.a987034f.js",
    "revision": "2ac4c2ee0a0037dce621573277ed203e"
  },
  {
    "url": "assets/js/25.e40e0391.js",
    "revision": "9eebcf09bf87a5f14baf13c390f9d9b7"
  },
  {
    "url": "assets/js/26.35788555.js",
    "revision": "9ade6021f6bfa06632353929ed4fedb2"
  },
  {
    "url": "assets/js/27.22cc5ae3.js",
    "revision": "41625fa2a2485ac9effa3fba78323e90"
  },
  {
    "url": "assets/js/28.4c7f2417.js",
    "revision": "e231b088aa591552ffd47d881249624b"
  },
  {
    "url": "assets/js/29.d82067ba.js",
    "revision": "0d60a3bcc6a85686617211fc34b9bc30"
  },
  {
    "url": "assets/js/30.fea981f4.js",
    "revision": "8544bf5d64dadd91477d2f1a6b4e545b"
  },
  {
    "url": "assets/js/31.991802c3.js",
    "revision": "10735fe16bb5edc163daaad5a8936354"
  },
  {
    "url": "assets/js/32.9da9bea2.js",
    "revision": "8f90bd0e07b5c1ef36946e6b6ed40ad6"
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
    "url": "assets/js/app.3e5d3dd5.js",
    "revision": "ad5fb3f64dee531265b305ac8da75906"
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
    "revision": "d4e0fc722481651dd52bec6b555f7fd7"
  },
  {
    "url": "categories/CSS/index.html",
    "revision": "26f00d891d0a5e4d7553c836d660e81f"
  },
  {
    "url": "categories/HTML/index.html",
    "revision": "0881290ad145974098dd6b14f07e4e95"
  },
  {
    "url": "categories/index.html",
    "revision": "a588ee3660b966aabfa05028d4490dc7"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "6158c526b7eb482e812ffb00f98cba05"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "9018628c47ef951f1941fdaca5604865"
  },
  {
    "url": "categories/Naming Conventions/index.html",
    "revision": "34de17e896099d6591647e87b01db55d"
  },
  {
    "url": "categories/Node.js/index.html",
    "revision": "baf1066804916e7b880993f492a13c3a"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "dbaa2b103257de263da3f4f40b901bdd"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "0288e812d3021dab00c296e2dc3934d3"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "f45d6d4fd217e57f5f6328c43ee9954c"
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
    "revision": "00ea18047bf8ab1cca1e9d9b8e586101"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "8dd3bc65f79a406425f712ee4473bcbd"
  },
  {
    "url": "tags/Ajax/index.html",
    "revision": "524513ab269c515ccf30ec9242e3813a"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "d4989a2355beab434db2597f094a2d52"
  },
  {
    "url": "tags/Html/index.html",
    "revision": "f4fdfec8935974d5f49741b9dd82a3e9"
  },
  {
    "url": "tags/Introduction/index.html",
    "revision": "1eee0f797d1e01abb46669d0592ba034"
  },
  {
    "url": "tags/Javascript/index.html",
    "revision": "1eeb4bae464363d1c7787c99d23dc4d9"
  },
  {
    "url": "tags/jQuery/index.html",
    "revision": "26ee529557d7c356022d24a5907ac7f8"
  },
  {
    "url": "tags/Naming Conventions/index.html",
    "revision": "b764c2a58b27aebdd57d878672e16bc2"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "8b7e8d4dee5f595b78b76c0f0ead99a7"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "20d2bd873c629cca38214a588677d6c8"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "800b55e01b2ccf34dfd8aab4f8389d71"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "cc2fd0e427597e254ce4d98669e7444c"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "e6dfcf46c498ed3116f577cfd1e185b2"
  },
  {
    "url": "timeline/index.html",
    "revision": "fac1ff890c83a481f1b90ff05f911a8f"
  },
  {
    "url": "技术文章/guide/index.html",
    "revision": "b9bb20ae9647538a2fd4db1a2e08fdb4"
  },
  {
    "url": "技术文章/index.html",
    "revision": "1da862a713a976a4fa44842c80c214af"
  },
  {
    "url": "技术文章/timeline/index.html",
    "revision": "9a52dc7cc6e88fad0c411be917799cd2"
  },
  {
    "url": "技术文章/技术文章/Ajax/ajax.html",
    "revision": "0e23a896e226c6c9cc098fcc014abad1"
  },
  {
    "url": "技术文章/技术文章/CSS/css1.html",
    "revision": "79a82778addb60109ea2d62ec3cc8c19"
  },
  {
    "url": "技术文章/技术文章/CSS/css2.html",
    "revision": "76fe43e484364337ae2bb04f1d4d47c1"
  },
  {
    "url": "技术文章/技术文章/CSS/css3.html",
    "revision": "8ecc5219fb28676d4336aa0ba255b04c"
  },
  {
    "url": "技术文章/技术文章/CSS/proj-record.html",
    "revision": "9f743ca6883535c9b77b9ab75bc3f677"
  },
  {
    "url": "技术文章/技术文章/Html/html.html",
    "revision": "a14aaec06ec0eae777fa6b885e4ac719"
  },
  {
    "url": "技术文章/技术文章/Intro/intro.html",
    "revision": "cc748b394beead2b9b6f44b8690de8bb"
  },
  {
    "url": "技术文章/技术文章/jQuery/jquery.html",
    "revision": "b752aebc7005c1a4235f39504854b1d5"
  },
  {
    "url": "技术文章/技术文章/JS/Javascript1.html",
    "revision": "3e0d864c7102b01b161332570976a806"
  },
  {
    "url": "技术文章/技术文章/JS/Javascript2.html",
    "revision": "4eb67df5fb2da929caeaed607cfa5ae3"
  },
  {
    "url": "技术文章/技术文章/Naming-Convention/var-name.html",
    "revision": "74275900a330d5f8145ce34c0c18bd20"
  },
  {
    "url": "技术文章/技术文章/Nodejs/Nodejs.html",
    "revision": "4641b52a4bb35f786bea8a63ddaa6f98"
  },
  {
    "url": "技术文章/技术文章/Vue/vue1.html",
    "revision": "7f3d77fbf3682e5a033180e34b817075"
  },
  {
    "url": "技术文章/技术文章/Vue/vue2.html",
    "revision": "14382fdd23f8799c75b6469b30923813"
  },
  {
    "url": "技术文章/技术文章/Vue/vue3.html",
    "revision": "e8edc6276c5bbca01322305bd381e2d7"
  },
  {
    "url": "生活分享/life.html",
    "revision": "ce8693d4c9702c41834b67e1c58367be"
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
