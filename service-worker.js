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
    "revision": "3f89da6afac0055c7294b5836c265634"
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
    "url": "assets/js/10.fd99506f.js",
    "revision": "c3d749a8937f16ce424928d954c4ec6b"
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
    "url": "assets/js/14.d50838ea.js",
    "revision": "ecc9db1a749b53536dddaa4c530c44b8"
  },
  {
    "url": "assets/js/15.240e3d50.js",
    "revision": "55df7f6fff668e11406380a1e22363b8"
  },
  {
    "url": "assets/js/16.a7a41869.js",
    "revision": "46b6809a4d8a537e8b93ce66c6c8de77"
  },
  {
    "url": "assets/js/17.90199bb7.js",
    "revision": "c00a091c4897f7d95b92024b7c36a1c0"
  },
  {
    "url": "assets/js/18.1c6b9f1e.js",
    "revision": "de62c372aa18b613d0176b0cb1a16f3c"
  },
  {
    "url": "assets/js/19.9f22daa8.js",
    "revision": "1079694319cbd5ec1e9fdfe16da132ca"
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
    "url": "assets/js/22.adba1915.js",
    "revision": "d525e14a7a9906a8a7de2b80eb25f6f6"
  },
  {
    "url": "assets/js/23.f7847f1a.js",
    "revision": "e9c12a81494e3b3372c8afe451722d59"
  },
  {
    "url": "assets/js/24.910c9432.js",
    "revision": "429a90cdb183016b5f9568833009e208"
  },
  {
    "url": "assets/js/25.3663b203.js",
    "revision": "534c84e941526f7a69e1600c77ff525c"
  },
  {
    "url": "assets/js/26.cac119e7.js",
    "revision": "365ad6b1a72ad20f71abef779da4dfb9"
  },
  {
    "url": "assets/js/27.494c6523.js",
    "revision": "c71bcedcdb33c45630749929273ac2df"
  },
  {
    "url": "assets/js/28.788101d7.js",
    "revision": "dd715fab0b26d2336d3c41ab56ff9322"
  },
  {
    "url": "assets/js/29.5acf7d34.js",
    "revision": "8813e2883e8727f94ca7d9d61604c764"
  },
  {
    "url": "assets/js/30.738bbe47.js",
    "revision": "5e013aaf2c2c9f3ebc5a70a8bb4c760a"
  },
  {
    "url": "assets/js/31.1fda5173.js",
    "revision": "66e53488c64259e8470e5a9d531390fe"
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
    "url": "assets/js/34.1a47c88f.js",
    "revision": "055c569c3f505f5ef2e53c8849472539"
  },
  {
    "url": "assets/js/35.bf149fbe.js",
    "revision": "72ee7fcc8a2c01afe9ac6283d04dca7f"
  },
  {
    "url": "assets/js/36.d04c2593.js",
    "revision": "e438c130cc0d833a427409d308a929f8"
  },
  {
    "url": "assets/js/37.71ee6061.js",
    "revision": "6dabdeb9d7b6e2eb27effd8bfb75b1ea"
  },
  {
    "url": "assets/js/38.a93a0212.js",
    "revision": "1b93a86f190cbb7294e8d1d747711c2e"
  },
  {
    "url": "assets/js/39.9231368e.js",
    "revision": "f0adb59f4f62a45e123fc8ce859f42d9"
  },
  {
    "url": "assets/js/4.459388ab.js",
    "revision": "2c74a22ac2e63b50b970b8e81fcb9917"
  },
  {
    "url": "assets/js/40.dd11da2c.js",
    "revision": "51371e177a36373f0426be7bf7360198"
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
    "url": "assets/js/app.dbf225ea.js",
    "revision": "90e7b3a8721cf39a69fcb99ee72d446f"
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
    "revision": "7a59de4559cfa7f5785d4c535528c23c"
  },
  {
    "url": "categories/CSS/index.html",
    "revision": "0f0c8ad9e934abad359b2b92cdd46acd"
  },
  {
    "url": "categories/ES6/index.html",
    "revision": "4507f727555594f7539f692530726071"
  },
  {
    "url": "categories/Flex/index.html",
    "revision": "959279e26f604c76b53d53cd0a23d2e0"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "11fbf1367cc2d31eb4077d008fe8d66e"
  },
  {
    "url": "categories/HTML/index.html",
    "revision": "b3ab2c301fb1c93270de9da553ed1f98"
  },
  {
    "url": "categories/index.html",
    "revision": "a96bae49f46c4d4d646aabb83d330555"
  },
  {
    "url": "categories/Introduction/index.html",
    "revision": "8bd58b157461018e4a94d5a63ddb16f5"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "f0a3a6577d0622ada1d43c3371f384f8"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "5626a0c826bf5f691bf12d608b8880cb"
  },
  {
    "url": "categories/Naming Conventions/index.html",
    "revision": "fe0491716341626fe67e2cf39d14aeb6"
  },
  {
    "url": "categories/Node.js/index.html",
    "revision": "51b620bbceca297de200906990cf39d8"
  },
  {
    "url": "categories/Skills/index.html",
    "revision": "4a5079b8a96e60271c15ffce5ef77448"
  },
  {
    "url": "categories/Three.js/index.html",
    "revision": "dc98d612b4794e4c88dd1027e1ace229"
  },
  {
    "url": "categories/Typescript/index.html",
    "revision": "acc5eedd29d9ac7a06833030f3ff1ad8"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "80706aeb025d164b8833b9ae3d767c04"
  },
  {
    "url": "categories/Vue3/index.html",
    "revision": "d8b368e76aab8cede25e9ba6cda36a4d"
  },
  {
    "url": "css/style.css",
    "revision": "eeb7d92e40b182ee5fb3381166aa3c97"
  },
  {
    "url": "guide/index.html",
    "revision": "6535aaa4d54e723392cb177fe835a270"
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
    "revision": "d63dc4101bff9dd81c3ef4fcc762ed57"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "33369f2ba79ae330c370fbdfc5096014"
  },
  {
    "url": "tags/Ajax/index.html",
    "revision": "388c4da0877de24cfa3024d7eb3d2359"
  },
  {
    "url": "tags/async/await/index.html",
    "revision": "4e00b1276e373d54a102ae2606a0d416"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "a1e28ba19e0697eb6884cc610ac5fbe0"
  },
  {
    "url": "tags/ES6/index.html",
    "revision": "25c8bf15aad33cc8a1bd244a3bcbc4bd"
  },
  {
    "url": "tags/Flex/index.html",
    "revision": "ea385401902fc4c8b83d9b699a996565"
  },
  {
    "url": "tags/Git/index.html",
    "revision": "476902e2c178ac661ecb6d719274ab73"
  },
  {
    "url": "tags/Html/index.html",
    "revision": "47f46a1b2e63160c063149ae5e14d2c9"
  },
  {
    "url": "tags/Introduction/index.html",
    "revision": "c116e00765c442844aaa11ba1b0433e9"
  },
  {
    "url": "tags/Javascript/index.html",
    "revision": "dd8e6d9fa422e2185ef46304e4aacbb9"
  },
  {
    "url": "tags/jQuery/index.html",
    "revision": "59fc6d3403f242e5747fe71379155ec2"
  },
  {
    "url": "tags/Naming Conventions/index.html",
    "revision": "fac85e638d06e961afd71199320854d5"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "48f46f8c960e7819c30bad1fdceddde1"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "642e3798ccea7f364aaa637e6caedbd2"
  },
  {
    "url": "tags/Promise/index.html",
    "revision": "e58d8dddcd029f9f4f63d5a072062f26"
  },
  {
    "url": "tags/Three.js/index.html",
    "revision": "506eea1c02a94af048f1de35b9644ab6"
  },
  {
    "url": "tags/TypeScript/index.html",
    "revision": "344c52b92cf027e392813a49c6c74ceb"
  },
  {
    "url": "tags/Vite/index.html",
    "revision": "6a570a28b6c1a16ddc29ef078381139a"
  },
  {
    "url": "tags/VSCode/index.html",
    "revision": "63179ba6c9014283156a455f230a8b47"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "52d39a45de8bdff5cea7e625c384abd7"
  },
  {
    "url": "tags/Vue3/index.html",
    "revision": "c80ca19fe68da3a8fe46bfc3137d290e"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "912d0a8478aa6477c183a045924c15ea"
  },
  {
    "url": "timeline/index.html",
    "revision": "9dd907fd85e16ac4613ed66d55a7851d"
  },
  {
    "url": "技术文章/Ajax/ajax.html",
    "revision": "b05345b2ddfeb81374eac137a7f90abf"
  },
  {
    "url": "技术文章/CSS/css1.html",
    "revision": "34b943f19c78453bd2607253855c059a"
  },
  {
    "url": "技术文章/CSS/css2.html",
    "revision": "ce8664b696fa6c94e70c2608f9072281"
  },
  {
    "url": "技术文章/CSS/css3.html",
    "revision": "9c5e42ef76d8f34d01b0c2942e060a61"
  },
  {
    "url": "技术文章/CSS/proj-record.html",
    "revision": "1d6fb616aa96a41ff995a4a67004733f"
  },
  {
    "url": "技术文章/ES6/ES6.html",
    "revision": "5b9a32fc3e1eb938597a45988a63427a"
  },
  {
    "url": "技术文章/Flex/Flex布局.html",
    "revision": "dbddeba36e47ba050df09cf85c2cfcb5"
  },
  {
    "url": "技术文章/Git/Git.html",
    "revision": "591e67a81fe14e89cdb6529f111ac24a"
  },
  {
    "url": "技术文章/Html/html.html",
    "revision": "04e6cda4891454b16b437dae0a8f5375"
  },
  {
    "url": "技术文章/Intro/intro.html",
    "revision": "14833f0b3604dd1da2deaa146121a7e5"
  },
  {
    "url": "技术文章/jQuery/jquery.html",
    "revision": "a850f2f07cffd8a3d2fdd269d411f6f8"
  },
  {
    "url": "技术文章/JS/Javascript1.html",
    "revision": "9d2c54a30d63c8d28cfbbcf5a07f44da"
  },
  {
    "url": "技术文章/JS/Javascript2.html",
    "revision": "2d4f786133351d56d99e3c1b06f2ebee"
  },
  {
    "url": "技术文章/JS/JS-进阶.html",
    "revision": "49b08c187dabd68212e1694ef47a954b"
  },
  {
    "url": "技术文章/Naming-Convention/var-name.html",
    "revision": "30ed71a8193b78e4870135927f5ce502"
  },
  {
    "url": "技术文章/Nodejs/Nodejs.html",
    "revision": "b5ae4101bedeeb26a9e5e88190f404a7"
  },
  {
    "url": "技术文章/Skills/vscode连接远程服务器.html",
    "revision": "aed9374cae9f15a1a6fa0688416a1687"
  },
  {
    "url": "技术文章/Skills/前端进阶.html",
    "revision": "8c236a15a0fda7c69eb198ba253bf50f"
  },
  {
    "url": "技术文章/ThreeJs/threejs.html",
    "revision": "c3d24998a65fbadaca77e17eb218c988"
  },
  {
    "url": "技术文章/Typescript/Typescript.html",
    "revision": "da7d8759424e0194840ba747094c8c52"
  },
  {
    "url": "技术文章/Typescript/Typescript2.html",
    "revision": "90df4d90f25497767824b38ae86cd19d"
  },
  {
    "url": "技术文章/Vite/vite-vue3.html",
    "revision": "56b3a9f618cdfd186e1e523277524cd6"
  },
  {
    "url": "技术文章/Vue/vue1.html",
    "revision": "a00b4cc9194d3cf59247ed56946ee9df"
  },
  {
    "url": "技术文章/Vue/vue2.html",
    "revision": "6a4a869e5755427fa8273ce404d948ef"
  },
  {
    "url": "技术文章/Vue/vue3.html",
    "revision": "915bdbacfc008fb2f6db7455273b9486"
  },
  {
    "url": "技术文章/Vue/vue4.html",
    "revision": "a9ab169230f3f04fe8183b039288393a"
  },
  {
    "url": "技术文章/Vue/vue5.html",
    "revision": "369dbbcca91ab335f9e822a17bf82a61"
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
