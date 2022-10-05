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
    "revision": "edad04f05ab469b8ece1b1eae2c3c1bd"
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
    "url": "assets/js/10.1de935b6.js",
    "revision": "7c667afa234384b3f350c38da4cdfc40"
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
    "url": "assets/js/13.20d78c76.js",
    "revision": "246f92b398482af0883d138f81d4246d"
  },
  {
    "url": "assets/js/14.3902b3af.js",
    "revision": "b3ba68e1acd111cbde724f00f03cc71b"
  },
  {
    "url": "assets/js/15.2ab47cde.js",
    "revision": "bc7a5f146b6dbd7380fdf09f5c7af0a2"
  },
  {
    "url": "assets/js/16.0c45607e.js",
    "revision": "b81373a03d7ebcac29b37428fea7f287"
  },
  {
    "url": "assets/js/17.878ca679.js",
    "revision": "c1126fe9bc6c6710074dd9c6588ce3a7"
  },
  {
    "url": "assets/js/18.56f22c0d.js",
    "revision": "8484ab988431d039902a0d324f2a5853"
  },
  {
    "url": "assets/js/19.8d1e728e.js",
    "revision": "57ca725752ac4568d2a1c88965f96be8"
  },
  {
    "url": "assets/js/20.88b3fa46.js",
    "revision": "394c3e89e92cd0fe9ef93de5e007adca"
  },
  {
    "url": "assets/js/21.e5f02414.js",
    "revision": "d37f6756e9aa41eb8da4b31c52d73792"
  },
  {
    "url": "assets/js/22.aa81bf08.js",
    "revision": "80072e1525dff6ea34ad30be13cb7723"
  },
  {
    "url": "assets/js/23.c7eb01f5.js",
    "revision": "5a2169b1d36f2c3d6efd6bce8efeac82"
  },
  {
    "url": "assets/js/24.a8f8b110.js",
    "revision": "24e49db31a62e6d9c86342f486d2db07"
  },
  {
    "url": "assets/js/25.b7ec7b5e.js",
    "revision": "95412f45ed8723a96dc25eac1a046ec9"
  },
  {
    "url": "assets/js/26.b0a99f02.js",
    "revision": "040f606733cf4a71ba02e9b478d77126"
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
    "url": "assets/js/app.21a64acf.js",
    "revision": "7f1f65dc9896581aab2a3e8adb8d135f"
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
    "revision": "9295dc51dd4d5b996ff9f2e872f42dfa"
  },
  {
    "url": "categories/CSS/index.html",
    "revision": "94ac2d5e05f49dbbda81b71cd09b8279"
  },
  {
    "url": "categories/HTML/index.html",
    "revision": "43e020907493323093fc76e26e5d88e2"
  },
  {
    "url": "categories/index.html",
    "revision": "1f8799e8d3802523712b91061490f141"
  },
  {
    "url": "categories/Introduction/index.html",
    "revision": "b072088be1aa193fb83c854993efd2f8"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "235f1fa25123a2a40aa85d9e910625f4"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "75fa69b2aa9f30a7e28769945caac5a9"
  },
  {
    "url": "categories/Naming Conventions/index.html",
    "revision": "361a1e2955d3215fd852a760fc64ad5e"
  },
  {
    "url": "categories/Node.js/index.html",
    "revision": "64671a7d6162355bf2c4966d41e0ae86"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "548b2337c1d2a1fbad40d98b79d4a51f"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "ee130a1bd2e7a2a2fa3836c5ea5d42f5"
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
    "revision": "04efdc29a29ea0ed208d65aba40cdc44"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "fcd1ac6f50769eb090265ea108bc6b65"
  },
  {
    "url": "tags/Ajax/index.html",
    "revision": "2f0bddc4a901596ac940485b53f55354"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "7b714865bc600d49898e10c0ca6117b1"
  },
  {
    "url": "tags/Html/index.html",
    "revision": "78ba577fdc7ac4b13ba51696f14e2fdf"
  },
  {
    "url": "tags/Introduction/index.html",
    "revision": "cd52ac6f979498ba805d1d4fb0db7ecc"
  },
  {
    "url": "tags/Javascript/index.html",
    "revision": "20af8d6e99ab41d269fb7d76e50ea24d"
  },
  {
    "url": "tags/jQuery/index.html",
    "revision": "b88c6ac893518c41af4e0fa97618e77e"
  },
  {
    "url": "tags/Naming Conventions/index.html",
    "revision": "739798a697cee041ee16be4d9587fb02"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "89e00d7a86f6c3158c655a54e298480c"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "f1bf3dcb7f4eecbc914515fa56d46b2d"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "c2ea98ad1157febea5a60b6bd4abc2c1"
  },
  {
    "url": "timeline/index.html",
    "revision": "c17b88cb7e0f595d4d50019a6649525f"
  },
  {
    "url": "技术文章/Ajax/ajax.html",
    "revision": "ad82dc1e0c9a7bcc8b90c1525db3e4fd"
  },
  {
    "url": "技术文章/CSS/css1.html",
    "revision": "804ecd87bcaa4860d0de34b778238863"
  },
  {
    "url": "技术文章/CSS/css2.html",
    "revision": "3353361e496b74156a625170a1b3adb0"
  },
  {
    "url": "技术文章/CSS/css3.html",
    "revision": "90a2b540c1965d0c10c8d23b709b59f4"
  },
  {
    "url": "技术文章/CSS/proj-record.html",
    "revision": "0c9a2149a1556f2deae7914d5dbf8293"
  },
  {
    "url": "技术文章/Html/html.html",
    "revision": "2e7ce726f5b1ee0828ebbd78b45041d3"
  },
  {
    "url": "技术文章/Intro/intro.html",
    "revision": "3e3c25c78bfbd0bca4f308dae6a32d02"
  },
  {
    "url": "技术文章/jQuery/jquery.html",
    "revision": "b14d337e8282f5d2779c29d9185602d9"
  },
  {
    "url": "技术文章/JS/Javascript1.html",
    "revision": "82e88a708413d08bd02a2dab297cc2f4"
  },
  {
    "url": "技术文章/JS/Javascript2.html",
    "revision": "04b889ee76869f02c91b6c5b3d9a85c9"
  },
  {
    "url": "技术文章/Naming-Convention/var-name.html",
    "revision": "79c74e53300ec50f30e759bea8ecf2ec"
  },
  {
    "url": "技术文章/Nodejs/Nodejs.html",
    "revision": "131681f0d6625262170c9e887433ee4f"
  },
  {
    "url": "技术文章/Vue/vue1.html",
    "revision": "d2ecfcb4e7aacc9312ad396b5bdfeae3"
  },
  {
    "url": "技术文章/Vue/vue2.html",
    "revision": "f4497535551c2b16ed830afdacbd530f"
  },
  {
    "url": "技术文章/Vue/vue3.html",
    "revision": "cad5f2fff4ff7b5ac9ccb149aba65c8b"
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
