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
    "revision": "4fcc1b60f6fbe42718d5e863f9002de6"
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
    "url": "assets/js/10.ad4108aa.js",
    "revision": "310a8277ff97f4db302dffcc88ddf745"
  },
  {
    "url": "assets/js/11.e196f149.js",
    "revision": "6ffb50544c0dc711f4f7e3b296148b16"
  },
  {
    "url": "assets/js/12.b9ebef0b.js",
    "revision": "2caf4bf32fc48d4f95a2de4a2a98079f"
  },
  {
    "url": "assets/js/13.60e5a684.js",
    "revision": "6511e208d6961a91cdf9ef400ea104a8"
  },
  {
    "url": "assets/js/14.4abfac78.js",
    "revision": "0d1240121240a4753a03913bd96b6718"
  },
  {
    "url": "assets/js/15.977c7a57.js",
    "revision": "454e32c2ad417eb475de1425d8a215df"
  },
  {
    "url": "assets/js/16.81d9f682.js",
    "revision": "09becf0eea48e907dd9f972bfeece12d"
  },
  {
    "url": "assets/js/17.5beab3b3.js",
    "revision": "f4d9cb2a8e257ec39972d9e42187064c"
  },
  {
    "url": "assets/js/18.c33fe7af.js",
    "revision": "8a10745b66840d42a81a10ce11bd7b07"
  },
  {
    "url": "assets/js/19.b5e4bda9.js",
    "revision": "9e6371b14799b2a4a2305fe0ba0344c4"
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
    "url": "assets/js/23.99e449b1.js",
    "revision": "e36cddc78f0ad016a0b9f4d856e25830"
  },
  {
    "url": "assets/js/24.3c77e808.js",
    "revision": "fefb8738cb62eedfd7521df3448bfda5"
  },
  {
    "url": "assets/js/25.3663b203.js",
    "revision": "534c84e941526f7a69e1600c77ff525c"
  },
  {
    "url": "assets/js/26.b4e540ba.js",
    "revision": "268b83d2e8e2b5c94671600ad7a2b16d"
  },
  {
    "url": "assets/js/27.1ebcda3f.js",
    "revision": "cd46b455f1b555b0d1de94b7bb94129d"
  },
  {
    "url": "assets/js/28.ac458240.js",
    "revision": "87e4a177f2f1526ea7ae968a294e032a"
  },
  {
    "url": "assets/js/29.d5693274.js",
    "revision": "c308580ba5739371e3da8220d38b4f76"
  },
  {
    "url": "assets/js/30.451ef293.js",
    "revision": "4e959d97dd7b99214dd488d0b7a3cdcf"
  },
  {
    "url": "assets/js/31.9846788a.js",
    "revision": "1bd72c152522566f50617f36320c8fb8"
  },
  {
    "url": "assets/js/32.54eee18f.js",
    "revision": "ee6ba3f19c2aa7a43fb2fa334e74aae1"
  },
  {
    "url": "assets/js/33.4fb8be27.js",
    "revision": "226e98112a64540302dac1f9c9713a6c"
  },
  {
    "url": "assets/js/34.8dcd119b.js",
    "revision": "a605aa4eac9ace3d1fcc3f5f888e9ed7"
  },
  {
    "url": "assets/js/35.92a693d3.js",
    "revision": "b1ff21e33e07de0c56fae52cab9ef36d"
  },
  {
    "url": "assets/js/36.a3512419.js",
    "revision": "9c3056f29941b8469cdca1749d299301"
  },
  {
    "url": "assets/js/37.34ad4790.js",
    "revision": "36a0e0c5ec34ff68aed35e1da6958357"
  },
  {
    "url": "assets/js/38.d9822a47.js",
    "revision": "c3467501c0a8c8230ab66c8a9b232257"
  },
  {
    "url": "assets/js/4.459388ab.js",
    "revision": "2c74a22ac2e63b50b970b8e81fcb9917"
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
    "url": "assets/js/app.bc9c9dfd.js",
    "revision": "299beb519f18f8de6991c346ab170b5e"
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
    "revision": "bed94a9dae78aa03aee2506fc2d5eff8"
  },
  {
    "url": "categories/CSS/index.html",
    "revision": "c5cee9b0a102a65512193abdd1218aa8"
  },
  {
    "url": "categories/ES6/index.html",
    "revision": "b7e5f24ce0238b616809a27de925aeda"
  },
  {
    "url": "categories/Flex/index.html",
    "revision": "681747d900c26abbeb090cb1d15917b8"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "5fa37008370005fa5414c876dc563501"
  },
  {
    "url": "categories/HTML/index.html",
    "revision": "938bcc74d5aa3ce51cb12180303efb6e"
  },
  {
    "url": "categories/index.html",
    "revision": "bba37129db9a0a8c229dd357aa6bd3b6"
  },
  {
    "url": "categories/Introduction/index.html",
    "revision": "1046f3c33b56bc90888a2170719bac39"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "4b3b839e0a5d51d43a8c77217b364c5b"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "9994edec91cd775666e9ad0bf9a73804"
  },
  {
    "url": "categories/Naming Conventions/index.html",
    "revision": "8d631984fa911e862560ba8f1cbe2a6c"
  },
  {
    "url": "categories/Node.js/index.html",
    "revision": "67af9fcaa03ab4c4a3b73dce043701ab"
  },
  {
    "url": "categories/Skills/index.html",
    "revision": "eebbc7037f12e5b07b2e402a85c042f8"
  },
  {
    "url": "categories/Three.js/index.html",
    "revision": "3982ab8234187a0fa5b78985b5fd871a"
  },
  {
    "url": "categories/Typescript/index.html",
    "revision": "37f2aaa7382d05eb6948096fcccd3f14"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "362c49e3165dda177aae85e5a8507afc"
  },
  {
    "url": "categories/Vue3/index.html",
    "revision": "bd6fdb0b86c8758222b302b6dc776cf3"
  },
  {
    "url": "css/style.css",
    "revision": "eeb7d92e40b182ee5fb3381166aa3c97"
  },
  {
    "url": "guide/index.html",
    "revision": "173a1c146b9acd5515214291f3213491"
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
    "revision": "098069532cf9cb7f6ff3cde8fcceebbc"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "43536fb6bf1d5bf1b2b88a9264c8cfa9"
  },
  {
    "url": "tags/Ajax/index.html",
    "revision": "791ab081e43981b13316658eff56994a"
  },
  {
    "url": "tags/async/await/index.html",
    "revision": "1d0fd45a21022ca7f701ebeebb7bcd58"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "386ca7930d5432f413a98b58dff1d92b"
  },
  {
    "url": "tags/ES6/index.html",
    "revision": "a659632eb5159bdfe6d959fa0cdbc53b"
  },
  {
    "url": "tags/Flex/index.html",
    "revision": "945fc99387cc51e48f0bb11c49457548"
  },
  {
    "url": "tags/Git/index.html",
    "revision": "cb408c3d5df78303708797c0cedc94c4"
  },
  {
    "url": "tags/Html/index.html",
    "revision": "ac6159d14c408cdb38d2677008ccd9fa"
  },
  {
    "url": "tags/Introduction/index.html",
    "revision": "677ecc6c8eb7d0a63b0bd17e22a0075b"
  },
  {
    "url": "tags/Javascript/index.html",
    "revision": "b9819bd620a30b1a98ee46c3cfa8fd99"
  },
  {
    "url": "tags/jQuery/index.html",
    "revision": "34b1f3c4f33d3e25010f2c1bae943a54"
  },
  {
    "url": "tags/Naming Conventions/index.html",
    "revision": "88372b74d1345f689e76ae30fceb66dd"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "4ece9c158d33fe6e7b9361a0b0f6951e"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "f180edfd2ac3b16c36c54dd69cdb00ea"
  },
  {
    "url": "tags/Promise/index.html",
    "revision": "364328939d616ded39821b1a9668f638"
  },
  {
    "url": "tags/Three.js/index.html",
    "revision": "d1e5961d5ae3cf367020e6caf0e420c8"
  },
  {
    "url": "tags/Typescript/index.html",
    "revision": "afca3fbfde57ec1ae070efb3f00866d5"
  },
  {
    "url": "tags/Vite/index.html",
    "revision": "62698d58882ae6a2d4d1e8c825f842e1"
  },
  {
    "url": "tags/VSCode/index.html",
    "revision": "4284600703f0f80b979047509892395b"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "a6e4a331e50e6772718e58d57512f433"
  },
  {
    "url": "tags/Vue3/index.html",
    "revision": "21f39f67136c9903f557112b30d591a0"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "7d0cb0284c21b1c66ffd6599d02472f2"
  },
  {
    "url": "timeline/index.html",
    "revision": "57b4e0254b9f54176dd7ef5c6292e8bf"
  },
  {
    "url": "技术文章/Ajax/ajax.html",
    "revision": "935362cd6d0d634e42ffa67fb617b893"
  },
  {
    "url": "技术文章/CSS/css1.html",
    "revision": "a81b8dcdf5dd2c1dd6ca7a832799aecc"
  },
  {
    "url": "技术文章/CSS/css2.html",
    "revision": "eda15fd04b2543e5131fbe2bf5c94d34"
  },
  {
    "url": "技术文章/CSS/css3.html",
    "revision": "55ce04cacfa09863a15297f4ddcb8cf5"
  },
  {
    "url": "技术文章/CSS/proj-record.html",
    "revision": "1b2761bc595bd9838a4ee617bc092432"
  },
  {
    "url": "技术文章/ES6/ES6.html",
    "revision": "7a60bdf268bb58febaa08b788ce7db0e"
  },
  {
    "url": "技术文章/Flex/Flex布局.html",
    "revision": "82febd3239efe5a0c5d48839fd2e84ed"
  },
  {
    "url": "技术文章/Git/Git.html",
    "revision": "e18f3a2d455c14758aad601e09ee3dca"
  },
  {
    "url": "技术文章/Html/html.html",
    "revision": "40b8a8e8e85870791832c80f512b08d6"
  },
  {
    "url": "技术文章/Intro/intro.html",
    "revision": "7785d6e196168cf2413ffe87bb280dbf"
  },
  {
    "url": "技术文章/jQuery/jquery.html",
    "revision": "029cc6c1f6454c7033ec0ebcfe5052e1"
  },
  {
    "url": "技术文章/JS/Javascript1.html",
    "revision": "14b729d34faab83a0ffb084f461101f8"
  },
  {
    "url": "技术文章/JS/Javascript2.html",
    "revision": "43af57c10aeffcab0b6737473d0c5c99"
  },
  {
    "url": "技术文章/Naming-Convention/var-name.html",
    "revision": "1562b23e808f5b16f6fe2a9a9718ab1b"
  },
  {
    "url": "技术文章/Nodejs/Nodejs.html",
    "revision": "0d5a31e63f3787cd2b377d10424eda41"
  },
  {
    "url": "技术文章/Skills/vscode连接远程服务器.html",
    "revision": "306eb1e74d149cf5ffe9ac29dcb1c147"
  },
  {
    "url": "技术文章/ThreeJs/threejs.html",
    "revision": "3fe72bb3d8050693aa4de6818bdf812c"
  },
  {
    "url": "技术文章/Typescript/Typescript.html",
    "revision": "7e81f24eb9d4a93e4df464e5e34af6d2"
  },
  {
    "url": "技术文章/Typescript/Typescript2.html",
    "revision": "cdb10e6b27ecbdbb5ccc59df128e1284"
  },
  {
    "url": "技术文章/Vite/vite-vue3.html",
    "revision": "c4ff383e998717d3464fc0ca17bf6df8"
  },
  {
    "url": "技术文章/Vue/vue1.html",
    "revision": "30d4719533973e6d0cc52535e60d97a0"
  },
  {
    "url": "技术文章/Vue/vue2.html",
    "revision": "7245afee30327cff33ecf90f3f2707e5"
  },
  {
    "url": "技术文章/Vue/vue3.html",
    "revision": "0d6ab5a69a058b1e9732888e0f2678f5"
  },
  {
    "url": "技术文章/Vue/vue4.html",
    "revision": "737c8979b1a045d5754e4e8ad1092d34"
  },
  {
    "url": "技术文章/Vue/vue5.html",
    "revision": "0d8a7d96b9b99203175a95b2dc1c6e90"
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
