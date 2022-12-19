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
    "revision": "3880a2da64bf94551918bfaa04e11c65"
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
    "url": "assets/js/10.b5b4f9b8.js",
    "revision": "6d7e2a36d8c90b9f57117ccef7edd786"
  },
  {
    "url": "assets/js/11.d7c2cbeb.js",
    "revision": "38837694d18ef3c091cb037a14e90a9b"
  },
  {
    "url": "assets/js/12.521dc3a6.js",
    "revision": "351db2cc7ed4c0acac6bfce5f199c2e9"
  },
  {
    "url": "assets/js/13.a1a81e5e.js",
    "revision": "994cd56d97192a1d1f079c05a7149a9d"
  },
  {
    "url": "assets/js/14.c35799b7.js",
    "revision": "2436605b1e69a09f5d5463ceaab04ea8"
  },
  {
    "url": "assets/js/15.7034f8ed.js",
    "revision": "55f9a397be58c3aed29563369b54bef5"
  },
  {
    "url": "assets/js/16.2b6cef28.js",
    "revision": "cb2453c16ae522e0e19ccc75d46b43a1"
  },
  {
    "url": "assets/js/17.c01808db.js",
    "revision": "b618f81c72a305e463c331605d0424a0"
  },
  {
    "url": "assets/js/18.4563622e.js",
    "revision": "c4d6ceafd73825a15666db98a4930629"
  },
  {
    "url": "assets/js/19.2efc145b.js",
    "revision": "c520e6d28ac712ce5c3b8b48eb38f7f9"
  },
  {
    "url": "assets/js/20.adff40ff.js",
    "revision": "03cbefdaf669d01bf12f928de931209c"
  },
  {
    "url": "assets/js/21.bce69599.js",
    "revision": "517128e1aad8b3eab2007b3d329ef902"
  },
  {
    "url": "assets/js/22.c36dea77.js",
    "revision": "86805c9b77dc69f62bbeaa528782d7ad"
  },
  {
    "url": "assets/js/23.5647126e.js",
    "revision": "79256bfe82f04254c2e69b5a2ec49b42"
  },
  {
    "url": "assets/js/24.f153daf9.js",
    "revision": "cecd44b856ee73913d76f466bead169b"
  },
  {
    "url": "assets/js/25.a1e671f0.js",
    "revision": "837473cc5400b4a762341fe88532ca8a"
  },
  {
    "url": "assets/js/26.64134fea.js",
    "revision": "e07ad5fb3c8a74b608ac736637f46b29"
  },
  {
    "url": "assets/js/27.08f1de62.js",
    "revision": "9d026326642e007f2a7abc5d521ed2a0"
  },
  {
    "url": "assets/js/28.0d3359d7.js",
    "revision": "bb659d88b01e29117094cc476f925895"
  },
  {
    "url": "assets/js/29.d9cdd1b3.js",
    "revision": "8dbbfc47638e238ba81c753a01de7549"
  },
  {
    "url": "assets/js/30.c20a5f67.js",
    "revision": "302fc56ca64ad376521ed6b54379dfef"
  },
  {
    "url": "assets/js/31.4ac86fe7.js",
    "revision": "c5a9d57f54ce4388df01b2c6ed2729f3"
  },
  {
    "url": "assets/js/32.d3d4a940.js",
    "revision": "ea578645516df0f42a1c9e40795aafc7"
  },
  {
    "url": "assets/js/33.0a44fdc3.js",
    "revision": "ecc41c7faae5d9458b280924e07b936a"
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
    "url": "assets/js/app.35803fb5.js",
    "revision": "343bf7dd900e64390886e3959feee352"
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
    "revision": "0d04b6ad22f6dfd59775812f34bd27cb"
  },
  {
    "url": "categories/CSS/index.html",
    "revision": "5bc581a1130ac8b92f56243d99e155da"
  },
  {
    "url": "categories/ES6/index.html",
    "revision": "30322136f0ff278b1dd32c2820c95655"
  },
  {
    "url": "categories/Flex/index.html",
    "revision": "7543f8c2038229c0a8f81d0e952af647"
  },
  {
    "url": "categories/HTML/index.html",
    "revision": "3adedd369b4b950c4a8a47f97f066158"
  },
  {
    "url": "categories/index.html",
    "revision": "4dd2295217585ba1a5b0fe4af15cab86"
  },
  {
    "url": "categories/Introduction/index.html",
    "revision": "30c373cc71d33f6aea4733dda84eebeb"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "5e0f9376b47a4276ef3a5c33c0535b7e"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "3805a85cff744fc3791b49bb89e2fd2b"
  },
  {
    "url": "categories/Naming Conventions/index.html",
    "revision": "ed8c5ea4b52e3e54b27a26b9715e6f47"
  },
  {
    "url": "categories/Node.js/index.html",
    "revision": "a7de936b305054cbe392339fd9df78aa"
  },
  {
    "url": "categories/Skills/index.html",
    "revision": "0631fc0286f7620c873ca5463e0397a3"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "dcacc76ad964cc721c56a94442ece3d3"
  },
  {
    "url": "css/style.css",
    "revision": "eeb7d92e40b182ee5fb3381166aa3c97"
  },
  {
    "url": "guide/index.html",
    "revision": "7cd7ac27281f1c5731b09ce445c283db"
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
    "revision": "30a036a18cbc2a976a03e312e127d4c5"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "dcfb61fa66a4a60e57cddd1da3baec6a"
  },
  {
    "url": "tags/Ajax/index.html",
    "revision": "969a489580c70dc3af3ea11891e502ba"
  },
  {
    "url": "tags/async/await/index.html",
    "revision": "347367f17a5d0cf405e77a3db2a40d0b"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "e441b5ee9f288553c38397645207ab6e"
  },
  {
    "url": "tags/ES6/index.html",
    "revision": "2a3c8bad58b987a5f1369089710963e6"
  },
  {
    "url": "tags/Flex/index.html",
    "revision": "3ce41e5ac9be92db833233d06879cff1"
  },
  {
    "url": "tags/Html/index.html",
    "revision": "796d0aac51190e9542ed6861810e0ed1"
  },
  {
    "url": "tags/Introduction/index.html",
    "revision": "1a2477daabd327472d606480a25c86b7"
  },
  {
    "url": "tags/Javascript/index.html",
    "revision": "67120d00bbb16d000184e4b2bdacb72b"
  },
  {
    "url": "tags/jQuery/index.html",
    "revision": "39d769f598d6cd271e947cec1cc5a3d7"
  },
  {
    "url": "tags/Naming Conventions/index.html",
    "revision": "780915f207f4ac6170451f43f9e0ceb6"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "b1ccdd1c5db33c055c4528d450a7e41f"
  },
  {
    "url": "tags/Promise/index.html",
    "revision": "631a833bb5fe393f7b7cfb5c298982fd"
  },
  {
    "url": "tags/VSCode/index.html",
    "revision": "51a44f0cffd4149178c87cd563acf97f"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "90b171f9bc0aff2f1d321d1a3588d4d6"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "29c311fbd6d022f05602997d91bbb8f1"
  },
  {
    "url": "timeline/index.html",
    "revision": "7a377bfb92d27195811ba4737781c503"
  },
  {
    "url": "技术文章/Ajax/ajax.html",
    "revision": "4e6e2345e81c0f362d9abe06e80e41ed"
  },
  {
    "url": "技术文章/CSS/css1.html",
    "revision": "97648456f35268d311b2d0630b567b11"
  },
  {
    "url": "技术文章/CSS/css2.html",
    "revision": "d2c4202aa63868172d089361b4a422f2"
  },
  {
    "url": "技术文章/CSS/css3.html",
    "revision": "0680314af4c8eee07d847339dc12ae17"
  },
  {
    "url": "技术文章/CSS/proj-record.html",
    "revision": "f14d3f1a2d79e0a364c4b2391fbdec71"
  },
  {
    "url": "技术文章/ES6/ES6.html",
    "revision": "a5cf14f35fcd9f6b10339d50d55d5cc1"
  },
  {
    "url": "技术文章/Flex/Flex布局.html",
    "revision": "950874ba87fefda0bbdbfd09ec29c736"
  },
  {
    "url": "技术文章/Html/html.html",
    "revision": "81e1306ecfb611f5db2c38fcfc233988"
  },
  {
    "url": "技术文章/Intro/intro.html",
    "revision": "6d8b4fc3d86414cd6c5c43a1987c6d3d"
  },
  {
    "url": "技术文章/jQuery/jquery.html",
    "revision": "ebacaeb750c11eb42b95ad19a634384a"
  },
  {
    "url": "技术文章/JS/Javascript1.html",
    "revision": "4a88e9330b1bc2fb3fecdf9d2df0f34d"
  },
  {
    "url": "技术文章/JS/Javascript2.html",
    "revision": "914333745a1e43616740e650e1bd18b6"
  },
  {
    "url": "技术文章/Naming-Convention/var-name.html",
    "revision": "42674b0bc962c1688c9a07e925bf6ed8"
  },
  {
    "url": "技术文章/Nodejs/Nodejs.html",
    "revision": "264bbebfccf0bf25becfdef39bc9a871"
  },
  {
    "url": "技术文章/Skills/vscode连接远程服务器.html",
    "revision": "3ee92f6b139055ee6024cad6720cd60b"
  },
  {
    "url": "技术文章/Vue/vue1.html",
    "revision": "aa8681f95a96b66b032410697468e419"
  },
  {
    "url": "技术文章/Vue/vue2.html",
    "revision": "dfb2b0ac129542d6633f9d107aadcd33"
  },
  {
    "url": "技术文章/Vue/vue3.html",
    "revision": "10a3e95438b545847c9482573d205b41"
  },
  {
    "url": "技术文章/Vue/vue4.html",
    "revision": "c5ea1788889c04f76731a9232131f079"
  },
  {
    "url": "技术文章/Vue/vue5.html",
    "revision": "c33f086f193c591bc747bea9a924ae9a"
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
