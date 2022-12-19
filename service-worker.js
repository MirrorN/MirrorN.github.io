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
    "revision": "212067563fb046c8eb432d051073bd1a"
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
    "url": "assets/img/image-20221029101043592.008dddc7.png",
    "revision": "008dddc75669420e522faf4ff838d889"
  },
  {
    "url": "assets/js/1.2bab5923.js",
    "revision": "75af5c9ac6532a5a5e58f86333ee96e2"
  },
  {
    "url": "assets/js/10.8c8e0c1d.js",
    "revision": "45853e31452e38523157afc2fea880a6"
  },
  {
    "url": "assets/js/11.a1fa2a33.js",
    "revision": "ffd9828bf3896dd500f85a0543f2e81b"
  },
  {
    "url": "assets/js/12.216bf9d4.js",
    "revision": "98ca18636d0923ac951d9b8edfbab099"
  },
  {
    "url": "assets/js/13.9f81290a.js",
    "revision": "5780a327c057fef8a498c9f63dd41cf0"
  },
  {
    "url": "assets/js/14.f5eb041c.js",
    "revision": "dfc54a05125495799a0fd721516b84b3"
  },
  {
    "url": "assets/js/15.8e3f9b04.js",
    "revision": "482e8ec65335ec318ddb7cdbbddec230"
  },
  {
    "url": "assets/js/16.7746776a.js",
    "revision": "24284e02a84d49f3b0d06acbaca07349"
  },
  {
    "url": "assets/js/17.883fe577.js",
    "revision": "f6860e34e2c54990eea002c5ac20a07c"
  },
  {
    "url": "assets/js/18.072453e4.js",
    "revision": "af3492f0cb271fe2174dd0646626297a"
  },
  {
    "url": "assets/js/19.a3ad7ed7.js",
    "revision": "9674b470e04ec4656ce126cb50df9a53"
  },
  {
    "url": "assets/js/20.8c51ed2a.js",
    "revision": "484721da9e6ff814b3d29274b989e6b6"
  },
  {
    "url": "assets/js/21.dae5a620.js",
    "revision": "65e76c6578e5f95e0239f813d77b2dc7"
  },
  {
    "url": "assets/js/22.56f54320.js",
    "revision": "68bbfd92976dd7df40b5604fe6f03cfa"
  },
  {
    "url": "assets/js/23.c2cd8dfe.js",
    "revision": "36bba71455a1babffb24752b33b75ae4"
  },
  {
    "url": "assets/js/24.661651b5.js",
    "revision": "f9c66814139ee9548cb820a912e74a11"
  },
  {
    "url": "assets/js/25.ae912329.js",
    "revision": "111c00b6cd1f2e40cc167ac96c62cef7"
  },
  {
    "url": "assets/js/26.29863ed5.js",
    "revision": "374c1503c163ad72447dd7b4fa0b0e6a"
  },
  {
    "url": "assets/js/27.992088e0.js",
    "revision": "e71db62bc0d19c9bbd4c74c449580214"
  },
  {
    "url": "assets/js/28.1493512b.js",
    "revision": "96beffc45c8a8a1016d092244044db3e"
  },
  {
    "url": "assets/js/29.2b1261ca.js",
    "revision": "15f140d7775a7a773d9b194937ab02d8"
  },
  {
    "url": "assets/js/30.b805af86.js",
    "revision": "0143e29dda433e04662111ab21ba3d0e"
  },
  {
    "url": "assets/js/31.7c6fc2d8.js",
    "revision": "88aa89d9ca86f54182b614ac4501067d"
  },
  {
    "url": "assets/js/32.c2719a52.js",
    "revision": "e7b410c828c8b2551fe7989662e59296"
  },
  {
    "url": "assets/js/33.4e5313a1.js",
    "revision": "33478e27d1661f84531470e3ea3f3655"
  },
  {
    "url": "assets/js/34.8fb2b0e2.js",
    "revision": "cfd51c0f96d434f103eddfc5d3df0a1e"
  },
  {
    "url": "assets/js/35.8dfe1a10.js",
    "revision": "4b178c6f2b3154c7ab27090dca080a5e"
  },
  {
    "url": "assets/js/36.33960ef5.js",
    "revision": "a7a55bfb44bed99516e6cb67b2d6e4e1"
  },
  {
    "url": "assets/js/4.59a1108c.js",
    "revision": "4fcfec808c4f4a39088f3c6f39083801"
  },
  {
    "url": "assets/js/5.246df733.js",
    "revision": "1b2a1876cdbb4095568a420a2dac0ff6"
  },
  {
    "url": "assets/js/6.3d649493.js",
    "revision": "fda231ce96fcee0341778810678059cc"
  },
  {
    "url": "assets/js/7.b159e648.js",
    "revision": "63a5bb27f59641d86357acce410a0cf3"
  },
  {
    "url": "assets/js/8.155b6152.js",
    "revision": "fbc7430123a5bf3274ce3b266977e265"
  },
  {
    "url": "assets/js/9.0c53848f.js",
    "revision": "5da8fef161c4d0f59f94358e2d3a4e51"
  },
  {
    "url": "assets/js/app.a6799e27.js",
    "revision": "c4df533c9e3c2cc107c86ec62fbf79a7"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.b4aee4ac.js",
    "revision": "2004eca4fb66a2b6491493fbcafdde79"
  },
  {
    "url": "avatar.jpg",
    "revision": "1b1be0dfef27416ef74644ba63c5aba6"
  },
  {
    "url": "categories/Ajax/index.html",
    "revision": "b87079983aa2dba15bd622ccc6145953"
  },
  {
    "url": "categories/CSS/index.html",
    "revision": "1adc8ff9529c43f36c7dbd084ab7f646"
  },
  {
    "url": "categories/ES6/index.html",
    "revision": "405861dea9eb9f61c0f25ce7801a909e"
  },
  {
    "url": "categories/Flex/index.html",
    "revision": "6d01d590ec026ae4cb8e4802424d3311"
  },
  {
    "url": "categories/HTML/index.html",
    "revision": "efdc68e4a63b1196afab0e6e42cc80e4"
  },
  {
    "url": "categories/index.html",
    "revision": "c626122a8b8823113c97819a5fadda4d"
  },
  {
    "url": "categories/Introduction/index.html",
    "revision": "c20a7d56f364d916e2757830a208f6d6"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "28d9c134043cbef23a13acd4b811af95"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "1b97fb6b6861904385763058c13c11bc"
  },
  {
    "url": "categories/Naming Conventions/index.html",
    "revision": "c5e54e284700ae6832f49251e4c333c6"
  },
  {
    "url": "categories/Node.js/index.html",
    "revision": "da8f0f66632ccf634c108a4dcfc3fb91"
  },
  {
    "url": "categories/Skills/index.html",
    "revision": "d7694b51781b80b5b8a99757cee8f34f"
  },
  {
    "url": "categories/Three.js/index.html",
    "revision": "0e4503c66d444bbe1d237f682f2c06e7"
  },
  {
    "url": "categories/Typescript/index.html",
    "revision": "89ab1424a3bfc23b190f64009b65a236"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "ceb8dbd577105d07cd48508248384dd7"
  },
  {
    "url": "css/style.css",
    "revision": "eeb7d92e40b182ee5fb3381166aa3c97"
  },
  {
    "url": "guide/index.html",
    "revision": "8e8aa80a2f1ca2e796ed51c0b2ef0f90"
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
    "revision": "0858b2076266aa8b771871c616960e85"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "0c45bd6ec9c94c8c9904cb38e6421ead"
  },
  {
    "url": "tags/Ajax/index.html",
    "revision": "0fe4b123ed666219180aafd19ec4cad3"
  },
  {
    "url": "tags/async/await/index.html",
    "revision": "9c9003d5fee166a2419c0ab13df57e27"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "d8d00d5e5135cbf394c909cf2d8ced1d"
  },
  {
    "url": "tags/ES6/index.html",
    "revision": "252ebd001e3248b7d564973ec9c2bfda"
  },
  {
    "url": "tags/Flex/index.html",
    "revision": "76fd7892197a8a519b3e8c9460cdaed0"
  },
  {
    "url": "tags/Html/index.html",
    "revision": "13252c88d25bcf149b8e3768698a7940"
  },
  {
    "url": "tags/Introduction/index.html",
    "revision": "95d1e15f4eaae6958925626dff29ffa3"
  },
  {
    "url": "tags/Javascript/index.html",
    "revision": "53e28bfd9d141d033c4e020e8eb8420c"
  },
  {
    "url": "tags/jQuery/index.html",
    "revision": "ca510c98fa79caa9471b2e2dc4ab2808"
  },
  {
    "url": "tags/Naming Conventions/index.html",
    "revision": "d8ea1c817103dcf5bf54ed0d8b503f22"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "fe06fdf4186778563a1ec3016af3570e"
  },
  {
    "url": "tags/Promise/index.html",
    "revision": "2976373b6ad350e87b8db05990594878"
  },
  {
    "url": "tags/Three.js/index.html",
    "revision": "47c9e21d570744d274dc4dbf577c6603"
  },
  {
    "url": "tags/Typescript/index.html",
    "revision": "795a4530b062d8eea9412934cba6be92"
  },
  {
    "url": "tags/VSCode/index.html",
    "revision": "c0b9a9862890148eb99dea3397843309"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "39cb277691e001e537a951709fb25d28"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "db0a1a7d9a97e11807119629477e7583"
  },
  {
    "url": "timeline/index.html",
    "revision": "a04b24b18943e077f89a785c65a6dd02"
  },
  {
    "url": "技术文章/Ajax/ajax.html",
    "revision": "53df1a5271ae1aa740c9d8727bcc06dd"
  },
  {
    "url": "技术文章/CSS/css1.html",
    "revision": "8bc7ad99790058fc6f940b007dace596"
  },
  {
    "url": "技术文章/CSS/css2.html",
    "revision": "1ef0d5d508bb9b25a323babfed53900e"
  },
  {
    "url": "技术文章/CSS/css3.html",
    "revision": "330090824c052d20f5b26c34b693c6a4"
  },
  {
    "url": "技术文章/CSS/proj-record.html",
    "revision": "d87c1ea16a6c5f59e4c1c3b5e836a1a0"
  },
  {
    "url": "技术文章/ES6/ES6.html",
    "revision": "04cbcc2d51c800906a347e55510d37ad"
  },
  {
    "url": "技术文章/Flex/Flex布局.html",
    "revision": "557b06e058169c7ef9f90f1c6d3f2619"
  },
  {
    "url": "技术文章/Html/html.html",
    "revision": "3b8bcb6762055838fe350fccff903503"
  },
  {
    "url": "技术文章/Intro/intro.html",
    "revision": "f4ae9be7b598e944895cc2d54ea7a854"
  },
  {
    "url": "技术文章/jQuery/jquery.html",
    "revision": "0f9240048490537ec1e557c4f75f892a"
  },
  {
    "url": "技术文章/JS/Javascript1.html",
    "revision": "105325eeba4173d42f485bbc14b11a28"
  },
  {
    "url": "技术文章/JS/Javascript2.html",
    "revision": "ba1c00dfca92d2b0cc9aa28932569f90"
  },
  {
    "url": "技术文章/Naming-Convention/var-name.html",
    "revision": "7769f6bd295a597ebf6e8490b9c2d0e1"
  },
  {
    "url": "技术文章/Nodejs/Nodejs.html",
    "revision": "592a66da3f0f0a87fb2a291b28da5444"
  },
  {
    "url": "技术文章/Skills/vscode连接远程服务器.html",
    "revision": "726c1a03a25e51043c1439d96e7b42f1"
  },
  {
    "url": "技术文章/ThreeJs/threejs.html",
    "revision": "d1b26c11ea332660d6489faa0584eaf6"
  },
  {
    "url": "技术文章/Typescript/Typescript.html",
    "revision": "fa06c03226aae03cee1054b57620d23f"
  },
  {
    "url": "技术文章/Typescript/Typescript2.html",
    "revision": "3878aefdbadf1de6b830954549315b9f"
  },
  {
    "url": "技术文章/Vue/vue1.html",
    "revision": "00995847affccc7cdc15012cce69bbad"
  },
  {
    "url": "技术文章/Vue/vue2.html",
    "revision": "2eb11e4813b0ff7179ad975e36e385b3"
  },
  {
    "url": "技术文章/Vue/vue3.html",
    "revision": "7dd0e873778f2a4639ec0b472cc1b640"
  },
  {
    "url": "技术文章/Vue/vue4.html",
    "revision": "b83de69257bb1bfa95c2ce090d66855b"
  },
  {
    "url": "技术文章/Vue/vue5.html",
    "revision": "bdce1867100e8bdb10c64f382c4b7707"
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
