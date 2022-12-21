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
    "revision": "edc26fe1257961d6754ca848013aae6c"
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
    "url": "assets/img/image-20221114133544106.7a54e9e3.png",
    "revision": "7a54e9e35fa9142d0b11f75e38028be4"
  },
  {
    "url": "assets/js/1.2bab5923.js",
    "revision": "75af5c9ac6532a5a5e58f86333ee96e2"
  },
  {
    "url": "assets/js/10.c01323db.js",
    "revision": "661a54c41c120e432f52edda8591e556"
  },
  {
    "url": "assets/js/11.6a42f6b4.js",
    "revision": "40af695e7d3c85eb613699cdc177aee1"
  },
  {
    "url": "assets/js/12.b9ebef0b.js",
    "revision": "2caf4bf32fc48d4f95a2de4a2a98079f"
  },
  {
    "url": "assets/js/13.14edcdab.js",
    "revision": "d51bf5a9dc5a54f3830895898611a906"
  },
  {
    "url": "assets/js/14.15092860.js",
    "revision": "e234c82b6cfb33971831be0da3c1f1ce"
  },
  {
    "url": "assets/js/15.ec2002b2.js",
    "revision": "e29f394c75c39759868e3f1b472628cb"
  },
  {
    "url": "assets/js/16.566caca5.js",
    "revision": "3296c44dd49af4c9cc8aecdbcecaf911"
  },
  {
    "url": "assets/js/17.f832f066.js",
    "revision": "63a72a82facd4ef1f1a2ab241cc8d8e5"
  },
  {
    "url": "assets/js/18.c606a8fd.js",
    "revision": "789ac0a0bc6a958ea549edf72dd5fc49"
  },
  {
    "url": "assets/js/19.338ede9c.js",
    "revision": "adcfaaf0eb662e83e400724f19b2835e"
  },
  {
    "url": "assets/js/20.2db75f12.js",
    "revision": "bff57ab7cdccd779826b2e3a3b39a078"
  },
  {
    "url": "assets/js/21.512c3446.js",
    "revision": "265e4a885f9fec4a249f4148244d1afa"
  },
  {
    "url": "assets/js/22.a996e553.js",
    "revision": "1eb42a652cb90455667a615aaa49767e"
  },
  {
    "url": "assets/js/23.e0caeb44.js",
    "revision": "c3ffb5f389abae66e42435fbf755467b"
  },
  {
    "url": "assets/js/24.acf23d53.js",
    "revision": "f21c27d7ff9bfbefcedc7ca128e3e4ab"
  },
  {
    "url": "assets/js/25.d928a797.js",
    "revision": "405184b0660f9c7ad598701ce0ac2cf1"
  },
  {
    "url": "assets/js/26.b6b0124b.js",
    "revision": "d4c51b851ed89671c3e1d9c7f2ff00b7"
  },
  {
    "url": "assets/js/27.e74db850.js",
    "revision": "f063c29cecbc17f083290a54e282c1f8"
  },
  {
    "url": "assets/js/28.788101d7.js",
    "revision": "dd715fab0b26d2336d3c41ab56ff9322"
  },
  {
    "url": "assets/js/29.d5693274.js",
    "revision": "c308580ba5739371e3da8220d38b4f76"
  },
  {
    "url": "assets/js/30.8c81d5ff.js",
    "revision": "55ba65d42909add82bc125228e14cbcd"
  },
  {
    "url": "assets/js/31.747daa75.js",
    "revision": "b030619e3eac75a2d81fcfe1af427899"
  },
  {
    "url": "assets/js/32.0ceb6b39.js",
    "revision": "6d85648409c8e31a8b52636bc555c703"
  },
  {
    "url": "assets/js/33.8061e7cb.js",
    "revision": "69d87c29e7eeb95266e1828427b8ac29"
  },
  {
    "url": "assets/js/34.2831e1f9.js",
    "revision": "00bdc9280751d2b2aa8d6a9e0318c1a5"
  },
  {
    "url": "assets/js/35.61a9d516.js",
    "revision": "d98e2150a0906dd3e4a949431890af31"
  },
  {
    "url": "assets/js/36.5c5a6158.js",
    "revision": "05a7c71832a6b80eac57de6a4faca70c"
  },
  {
    "url": "assets/js/37.b0c35510.js",
    "revision": "92d9cbc1c6313f5fa209904c43548a94"
  },
  {
    "url": "assets/js/38.9251cc83.js",
    "revision": "700e4d2318a1f28e27da88e7e6619a15"
  },
  {
    "url": "assets/js/39.e93690e2.js",
    "revision": "0e53dea79fca3386ade3c6965bbe46ed"
  },
  {
    "url": "assets/js/4.459388ab.js",
    "revision": "2c74a22ac2e63b50b970b8e81fcb9917"
  },
  {
    "url": "assets/js/40.82accd15.js",
    "revision": "64127ada801a5391cee054e450992b3f"
  },
  {
    "url": "assets/js/5.9a1a69fd.js",
    "revision": "5dc739e288aa7f067cc14bcf279a7d88"
  },
  {
    "url": "assets/js/6.01b05367.js",
    "revision": "e34dd5ee10d636d93155b94f787df463"
  },
  {
    "url": "assets/js/7.13976600.js",
    "revision": "b55a39ef0495454ef10e484300ba6db8"
  },
  {
    "url": "assets/js/8.80195312.js",
    "revision": "6c601cd8c446c5a35ed8e718d782fc42"
  },
  {
    "url": "assets/js/9.56744fe1.js",
    "revision": "7e25d6b209e02ca24bddcf3ec7ab2a1a"
  },
  {
    "url": "assets/js/app.43264f66.js",
    "revision": "6c63df02d7dc88889829cf582107cf66"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.92c16569.js",
    "revision": "6506aef721da9e5d9495231b6c5ac915"
  },
  {
    "url": "avatar.jpg",
    "revision": "1b1be0dfef27416ef74644ba63c5aba6"
  },
  {
    "url": "categories/Ajax/index.html",
    "revision": "2c2c7f8889a2fd6d443ee5705d35f04c"
  },
  {
    "url": "categories/CSS/index.html",
    "revision": "bf2bbe61788984f302d650eef677f387"
  },
  {
    "url": "categories/ES6/index.html",
    "revision": "f040d4ae68212db6b0ebac68f5972b17"
  },
  {
    "url": "categories/Flex/index.html",
    "revision": "3ea17a0f80a44dd927079029d4244349"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "734bc6be01a564a0a41e1db848a0f458"
  },
  {
    "url": "categories/HTML/index.html",
    "revision": "f52c9bf3846df384c3a310d2d7e87373"
  },
  {
    "url": "categories/index.html",
    "revision": "3eaa613562b83ba03d3d08e2b67b835a"
  },
  {
    "url": "categories/Introduction/index.html",
    "revision": "42ce0ad358c14c886cfbb46ce29c3917"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "47f652278ca217e6d3ec71b4a9ad5c06"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "d0ee17b24971114f6d26a97f20a4a528"
  },
  {
    "url": "categories/Naming Conventions/index.html",
    "revision": "8dcb3925116eca98178906b03c10dfa6"
  },
  {
    "url": "categories/Node.js/index.html",
    "revision": "9707b985a8bb8a10cb55f79fb17a78b1"
  },
  {
    "url": "categories/Skills/index.html",
    "revision": "c9c7b9f0760d4f0eeeea78c4b920dd92"
  },
  {
    "url": "categories/Three.js/index.html",
    "revision": "a128da70c93e21bb3c3ebb951288b496"
  },
  {
    "url": "categories/Typescript/index.html",
    "revision": "78f657c8b5d43c562f4dd99a5eec69da"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "70f202a7795fabee5c7b45465078776f"
  },
  {
    "url": "categories/Vue3/index.html",
    "revision": "51ad8fe925c783bff3678113a9dae1d8"
  },
  {
    "url": "css/style.css",
    "revision": "eeb7d92e40b182ee5fb3381166aa3c97"
  },
  {
    "url": "guide/index.html",
    "revision": "36cbf4cfc4efd21f23f85a870d9d33ca"
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
    "revision": "7fa47d3b4c7cab6c018f0c66e50b55ff"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "90a81bd556ddc1314f3f51c182e9f50d"
  },
  {
    "url": "tags/Ajax/index.html",
    "revision": "5a3081268ab5505e09c87d9e197fe032"
  },
  {
    "url": "tags/async/await/index.html",
    "revision": "a0ad64cfa66fd33256733abfef374690"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "4511bd0acf3660be24e2b36de3819f3d"
  },
  {
    "url": "tags/ES6/index.html",
    "revision": "0c3ab6016383c5699d143276f0196ffa"
  },
  {
    "url": "tags/Flex/index.html",
    "revision": "cf7f1e04142312caf6b275024827fafa"
  },
  {
    "url": "tags/Git/index.html",
    "revision": "984d1b5e1631fccab245b662b2714654"
  },
  {
    "url": "tags/Html/index.html",
    "revision": "7d1b3849ae45c195439fe2c5656de0b1"
  },
  {
    "url": "tags/Javascript/index.html",
    "revision": "0494b68a60fde59f5211817eda2ad631"
  },
  {
    "url": "tags/jQuery/index.html",
    "revision": "5276cfcbbdf308b5f58220fcc331a0b8"
  },
  {
    "url": "tags/Naming Conventions/index.html",
    "revision": "6bf3f6906f4adfb922ada7c57ee44f11"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "fc1f0600cf735741e9a6614b15ad0387"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "6e7969b406c98dcf2b0fe02af5104da5"
  },
  {
    "url": "tags/Promise/index.html",
    "revision": "82b2c4ab35669e1a04f5c53bb57cc18e"
  },
  {
    "url": "tags/Three.js/index.html",
    "revision": "278adae19d87d39f50ca4baf9d7b30db"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "6c99c0c2483c0cc15608dfa31a5648f9"
  },
  {
    "url": "tags/Vite/index.html",
    "revision": "e98bd3d4c1693f77a0e215f4768c71cb"
  },
  {
    "url": "tags/VSCode/index.html",
    "revision": "f3dbb04b30949aaff9116dc82f4aee27"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "7fff59ea3211708f7b382e3cdf0741ea"
  },
  {
    "url": "tags/Vue3/index.html",
    "revision": "53b73b3404577d498f37a03f13e09f4e"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "15d5d7f80ad1399f634d884b416caf4c"
  },
  {
    "url": "timeline/index.html",
    "revision": "1a60c258bfaa173d2915306859b7a209"
  },
  {
    "url": "技术文章/Ajax/ajax.html",
    "revision": "a8f0693cb7dc59bba2854b4e12e327a8"
  },
  {
    "url": "技术文章/CSS/css1.html",
    "revision": "3fdfa83861ac8542090e34ba246de25d"
  },
  {
    "url": "技术文章/CSS/css2.html",
    "revision": "66b0705b0d200218277531099571c0fd"
  },
  {
    "url": "技术文章/CSS/css3.html",
    "revision": "79e45483f1a2230cc4863f5e57946524"
  },
  {
    "url": "技术文章/CSS/proj-record.html",
    "revision": "610c0a39f34d29eaa3544da609911857"
  },
  {
    "url": "技术文章/ES6/ES6.html",
    "revision": "1b6a335d02e1a4c852368292893ff4ad"
  },
  {
    "url": "技术文章/Flex/Flex布局.html",
    "revision": "2a0a8c54bc3872f162f46ff28f7614ea"
  },
  {
    "url": "技术文章/Git/Git.html",
    "revision": "b5e813b2276fa6bffed63bbb4c916740"
  },
  {
    "url": "技术文章/Html/html.html",
    "revision": "adb201520964f2d2da34b1eed7328f07"
  },
  {
    "url": "技术文章/Intro/intro.html",
    "revision": "57429dda4320c6551963ac2544db5952"
  },
  {
    "url": "技术文章/jQuery/jquery.html",
    "revision": "4e0711ebd4465178452dac5b2b50f09b"
  },
  {
    "url": "技术文章/JS/Javascript1.html",
    "revision": "49d9b2129a87269e9ecac564bda6c62e"
  },
  {
    "url": "技术文章/JS/Javascript2.html",
    "revision": "453b5405783fe30f816563ea6ac4bab9"
  },
  {
    "url": "技术文章/JS/JS-进阶.html",
    "revision": "cf69a8f868344ac987a2af166707d787"
  },
  {
    "url": "技术文章/Naming-Convention/var-name.html",
    "revision": "68e3181e928dd2264f24ed303d4dfed8"
  },
  {
    "url": "技术文章/Nodejs/Nodejs.html",
    "revision": "db6f161c2fd9b74df5c977bba37ffbfa"
  },
  {
    "url": "技术文章/Skills/vscode连接远程服务器.html",
    "revision": "c1f538c409373b6303fe61bbe6a3f549"
  },
  {
    "url": "技术文章/Skills/前端进阶.html",
    "revision": "9408ed298afd2c4a50de56a9b5cfad47"
  },
  {
    "url": "技术文章/ThreeJs/threejs.html",
    "revision": "00ec8b06769638c3e13b4da325b991c9"
  },
  {
    "url": "技术文章/Typescript/Typescript.html",
    "revision": "8d4d72df878610bac29ae69dd9243aec"
  },
  {
    "url": "技术文章/Typescript/Typescript2.html",
    "revision": "11d19cdcc94f43664725ed2e8ea1da9d"
  },
  {
    "url": "技术文章/Vite/vite-vue3.html",
    "revision": "ab0bcbc88e99e3adc83bfa6db0de1bb2"
  },
  {
    "url": "技术文章/Vue/vue1.html",
    "revision": "b49ddf7cc58a775f92536642e6620271"
  },
  {
    "url": "技术文章/Vue/vue2.html",
    "revision": "066000fbc291d13183c8f22c7356f69c"
  },
  {
    "url": "技术文章/Vue/vue3.html",
    "revision": "86de8b042b4ca7156d32b28f32dbdb1c"
  },
  {
    "url": "技术文章/Vue/vue4.html",
    "revision": "3813deb67d046b7250090bf38a643f4c"
  },
  {
    "url": "技术文章/Vue/vue5.html",
    "revision": "4b823783c3ded37ce034192d3b3cf61d"
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
