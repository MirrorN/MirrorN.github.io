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
    "revision": "d02d7f9ce58d20c4d46a791d495ae579"
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
    "url": "assets/img/image-20221007110311270.ac45aacf.png",
    "revision": "ac45aacff46182ef81042a42cb6aeb4a"
  },
  {
    "url": "assets/img/image-20221008153659821.a1b73197.png",
    "revision": "a1b731976da7eebb4a35d03d7fc60c02"
  },
  {
    "url": "assets/img/image-20221010095959541.a4352442.png",
    "revision": "a43524421915eaf22cccc439a22ee025"
  },
  {
    "url": "assets/img/image-20221010102809371.4428b398.png",
    "revision": "4428b398a76e5f3b310485e9bda0f7de"
  },
  {
    "url": "assets/img/image-20221010103207266.383e39f9.png",
    "revision": "383e39f9cc52559580b13a424d2eb16f"
  },
  {
    "url": "assets/img/image-20221013165316355.49bf5449.png",
    "revision": "49bf54497906a665d9319f8e32396e11"
  },
  {
    "url": "assets/img/image-20221013195759583.1a811242.png",
    "revision": "1a81124234cb97091379d921f892d669"
  },
  {
    "url": "assets/js/1.2bab5923.js",
    "revision": "75af5c9ac6532a5a5e58f86333ee96e2"
  },
  {
    "url": "assets/js/10.a2af966a.js",
    "revision": "9f5bf54bca6fad272813a9ae9ae58bb6"
  },
  {
    "url": "assets/js/11.56d772e4.js",
    "revision": "e59a3d4ff5c0c94d778af9fb8926a233"
  },
  {
    "url": "assets/js/12.521dc3a6.js",
    "revision": "351db2cc7ed4c0acac6bfce5f199c2e9"
  },
  {
    "url": "assets/js/13.36ced758.js",
    "revision": "fc70cb1d5b702eb51920294d4f33183e"
  },
  {
    "url": "assets/js/14.77641bea.js",
    "revision": "be0770736b9bddb1df16174461a7d23d"
  },
  {
    "url": "assets/js/15.1c9020ca.js",
    "revision": "87a7e83b6c10d9687ac6e7e6222d7e33"
  },
  {
    "url": "assets/js/16.89ce8904.js",
    "revision": "8f89a9e2ce6a1347d3823c032729483b"
  },
  {
    "url": "assets/js/17.d6df1295.js",
    "revision": "94b067a1cfe3de04b33f3b2450fd2e0d"
  },
  {
    "url": "assets/js/18.cbf14807.js",
    "revision": "9db5f329747d33e163e3f37186534a22"
  },
  {
    "url": "assets/js/19.2efc145b.js",
    "revision": "c520e6d28ac712ce5c3b8b48eb38f7f9"
  },
  {
    "url": "assets/js/20.7d131467.js",
    "revision": "8bd3c5fab3ad76b563b279e12b1d4477"
  },
  {
    "url": "assets/js/21.1ae4b915.js",
    "revision": "ce33d7d8178f2995bc05602fd2fe4ccf"
  },
  {
    "url": "assets/js/22.af8e9fec.js",
    "revision": "ee393b27f6426ac2b69f703151ec76ac"
  },
  {
    "url": "assets/js/23.e3b2b248.js",
    "revision": "aca70800626d5b61de2e7bd7a50b6504"
  },
  {
    "url": "assets/js/24.79dcd760.js",
    "revision": "8f5665a4d20d55ddf06338f08bad50b2"
  },
  {
    "url": "assets/js/25.0ba8ea6f.js",
    "revision": "1cd58bfa0a4fb4197aae66ece319e083"
  },
  {
    "url": "assets/js/26.a973d3a4.js",
    "revision": "37412a99941239c02cd02e2c161e1519"
  },
  {
    "url": "assets/js/27.24f51db3.js",
    "revision": "f38d286f67be7834d71099a3f07e1591"
  },
  {
    "url": "assets/js/28.e7dc4570.js",
    "revision": "1ba3f211676c66468137839d9b55eb4d"
  },
  {
    "url": "assets/js/29.17c78f50.js",
    "revision": "f7729c300752a650d6d9f3dda513f68a"
  },
  {
    "url": "assets/js/30.6e831eba.js",
    "revision": "bc5c330cd61a0f2488fe87e0362fba99"
  },
  {
    "url": "assets/js/31.7ae38bac.js",
    "revision": "f03305ae35c379cf6becfdb3aae84804"
  },
  {
    "url": "assets/js/32.0cb45202.js",
    "revision": "6400d5118b65501a0d67e085739ef6e8"
  },
  {
    "url": "assets/js/4.11809c88.js",
    "revision": "f678db6be8d993025077ed94805f4a57"
  },
  {
    "url": "assets/js/5.d7bf4d86.js",
    "revision": "87120ce20db05e101bd51755b4f207ac"
  },
  {
    "url": "assets/js/6.852b39b1.js",
    "revision": "b052db4a4e13d68f07c4af2400858590"
  },
  {
    "url": "assets/js/7.9c61e2c6.js",
    "revision": "839835be9139bae7065b2e09af2ec9be"
  },
  {
    "url": "assets/js/8.779b588f.js",
    "revision": "afe8a81e2dc4c45503eba04905a56b2a"
  },
  {
    "url": "assets/js/9.7b265198.js",
    "revision": "aa8956a351081019df0b7fb7fb32c5de"
  },
  {
    "url": "assets/js/app.5be5727d.js",
    "revision": "5755766f2ce8949c18a16ae42887c02c"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.4a63dd5b.js",
    "revision": "0e30b41fa6dd7ec2f8b24da5816bf8ec"
  },
  {
    "url": "avatar.jpg",
    "revision": "1b1be0dfef27416ef74644ba63c5aba6"
  },
  {
    "url": "categories/Ajax/index.html",
    "revision": "daa1cb9140587ca5dcfec78a8c700765"
  },
  {
    "url": "categories/CSS/index.html",
    "revision": "239616ac50656b8704f48d1b97bd3d13"
  },
  {
    "url": "categories/ES6/index.html",
    "revision": "143bb3754384b28aec8a33040db06d4e"
  },
  {
    "url": "categories/HTML/index.html",
    "revision": "c3e90292933671999e2023a25b1a183e"
  },
  {
    "url": "categories/index.html",
    "revision": "38dfb3ee85130efc27da3162299ad771"
  },
  {
    "url": "categories/Introduction/index.html",
    "revision": "064bde719fa1df421fa504c026eb7460"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "9c2f5069cba40d95bd275ab76c29e538"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "c6ab038d5551fe7fe70b8186149cdf56"
  },
  {
    "url": "categories/Naming Conventions/index.html",
    "revision": "0c3f068ddd97a7e7d456e77550f2ddb3"
  },
  {
    "url": "categories/Node.js/index.html",
    "revision": "565b3cad56441bae3d0906f46017e3ae"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "c8cbca91e9a5841442ca3825c6d4531f"
  },
  {
    "url": "css/style.css",
    "revision": "eeb7d92e40b182ee5fb3381166aa3c97"
  },
  {
    "url": "guide/index.html",
    "revision": "bc1dd4c67563ae0f59ecf95c8e43349c"
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
    "revision": "3497f11832f9a686c677cdd37703b751"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "6f3f395a7a4362008ebb3c58eb12b074"
  },
  {
    "url": "tags/Ajax/index.html",
    "revision": "2a5354873438fc9a5e0e1839ba74f5ec"
  },
  {
    "url": "tags/async/await/index.html",
    "revision": "1e45c5eb49ecf2878a2533bf5a97b43d"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "cb0b76a11ecc44312a0e7962c60865aa"
  },
  {
    "url": "tags/ES6/index.html",
    "revision": "2de3f5603bb355ca0af0ff50abf0b63d"
  },
  {
    "url": "tags/Html/index.html",
    "revision": "2a9fc50f007cbfb7b544f0353b71bbd8"
  },
  {
    "url": "tags/Introduction/index.html",
    "revision": "165a06e9f06550206ef9702d39253f34"
  },
  {
    "url": "tags/Javascript/index.html",
    "revision": "5f36e9ffe3468b16882df9488d32b19a"
  },
  {
    "url": "tags/jQuery/index.html",
    "revision": "0aff6960b2cad7186f2ce79197010a06"
  },
  {
    "url": "tags/Naming Conventions/index.html",
    "revision": "f80029d67e825dc2786934b7f4dd009e"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "51a32e46e50bb9e9a2b9841c1f289be5"
  },
  {
    "url": "tags/Promise/index.html",
    "revision": "331ff61b31478b90d7ab53eb949c35c4"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "24c6c141e7995632e95196ea8e713d10"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "322751609e5759009f4b2bb5cd94e1f5"
  },
  {
    "url": "timeline/index.html",
    "revision": "6b8d1ba255c1393018baefbf20ecc2ca"
  },
  {
    "url": "技术文章/Ajax/ajax.html",
    "revision": "2f21503157e863d4aba140d9488f46cc"
  },
  {
    "url": "技术文章/CSS/css1.html",
    "revision": "2dca2b065b6a4d722ff2db2466878947"
  },
  {
    "url": "技术文章/CSS/css2.html",
    "revision": "69c3c150457cae60041aee1c050787b4"
  },
  {
    "url": "技术文章/CSS/css3.html",
    "revision": "e9b743a6561ba4f8af88c9f036037ccc"
  },
  {
    "url": "技术文章/CSS/proj-record.html",
    "revision": "0cc203df33582845c6998d7f38c0529c"
  },
  {
    "url": "技术文章/ES6/ES6.html",
    "revision": "492d0421b8d3fe1c5fc2f8e8fd5f6e48"
  },
  {
    "url": "技术文章/Html/html.html",
    "revision": "95c21caa1140e13261fdac60e4039744"
  },
  {
    "url": "技术文章/Intro/intro.html",
    "revision": "beea308a501815d82b048cf54d79e614"
  },
  {
    "url": "技术文章/jQuery/jquery.html",
    "revision": "226536eff24794eb85d6c02190d3bdfd"
  },
  {
    "url": "技术文章/JS/Javascript1.html",
    "revision": "a54d5e6a4b2a7b26147a5ccf563552d5"
  },
  {
    "url": "技术文章/JS/Javascript2.html",
    "revision": "728f9b90f6effd3c8328437a36d29e83"
  },
  {
    "url": "技术文章/Naming-Convention/var-name.html",
    "revision": "123cae0bc6ed55107a721856e4fc2fb9"
  },
  {
    "url": "技术文章/Nodejs/Nodejs.html",
    "revision": "db822cf2305fbda97e07021db1bba15a"
  },
  {
    "url": "技术文章/Skills/vscode连接远程服务器.html",
    "revision": "bbab23d5b9c3eafa9a594613e871413e"
  },
  {
    "url": "技术文章/Vue/vue1.html",
    "revision": "ab278300d5c1f35c16883c9a3807a0b0"
  },
  {
    "url": "技术文章/Vue/vue2.html",
    "revision": "d33d8f9e3cd81f383d97947ac14fbf90"
  },
  {
    "url": "技术文章/Vue/vue3.html",
    "revision": "5bf1321e20ef49c50b2bb22286581aa6"
  },
  {
    "url": "技术文章/Vue/vue4.html",
    "revision": "c031e7cb05609c1a1ad969b94d709590"
  },
  {
    "url": "技术文章/Vue/vue5.html",
    "revision": "6dd3b9c772cc8cea92387ff299dd58e8"
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
