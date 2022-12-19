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
    "revision": "bb4eb698a15b8672a5751b07b128d5c2"
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
    "url": "assets/js/10.ad4108aa.js",
    "revision": "310a8277ff97f4db302dffcc88ddf745"
  },
  {
    "url": "assets/js/11.98834196.js",
    "revision": "011667a0c9704ad5cee47b1b217e5bb5"
  },
  {
    "url": "assets/js/12.521dc3a6.js",
    "revision": "351db2cc7ed4c0acac6bfce5f199c2e9"
  },
  {
    "url": "assets/js/13.13cfaadb.js",
    "revision": "16e842f20c0573369969d9b97340480e"
  },
  {
    "url": "assets/js/14.2bf9552c.js",
    "revision": "a356183aa6479b61208de38b2a1b5f51"
  },
  {
    "url": "assets/js/15.7b08bbc3.js",
    "revision": "b4ce3dfa22b34031d3b35199737f77c0"
  },
  {
    "url": "assets/js/16.397cfd3f.js",
    "revision": "827bd09c311b2efd62c4274a6dddc04a"
  },
  {
    "url": "assets/js/17.2bd0156c.js",
    "revision": "57c71d4058104c19d6e0cdbf1c3b04fa"
  },
  {
    "url": "assets/js/18.8bb32268.js",
    "revision": "9a1519befdd869504d91ca90469f67e6"
  },
  {
    "url": "assets/js/19.79a55de7.js",
    "revision": "9cf69542ebb249cbeb84bd9590cf346b"
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
    "url": "assets/js/22.7fe5e752.js",
    "revision": "e908fdce9cb56dad29c89c7997a040a2"
  },
  {
    "url": "assets/js/23.6c54028d.js",
    "revision": "22925203aae37b6270fab7da72372a94"
  },
  {
    "url": "assets/js/24.9ebc382f.js",
    "revision": "1964aadd2c6107c58b3c5a895a1ee979"
  },
  {
    "url": "assets/js/25.7c0b8729.js",
    "revision": "48293095b30e7fa68f3b6f36267ece31"
  },
  {
    "url": "assets/js/26.64134fea.js",
    "revision": "e07ad5fb3c8a74b608ac736637f46b29"
  },
  {
    "url": "assets/js/27.6f43d9b1.js",
    "revision": "c2db5ce2df1efeae0d2bac34970a8d03"
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
    "url": "assets/js/32.a4fa5feb.js",
    "revision": "038dcadc99110dd41285ffba37c09878"
  },
  {
    "url": "assets/js/33.276d1bcb.js",
    "revision": "307a8ba5f94c038cb0653dc15ddd83d9"
  },
  {
    "url": "assets/js/34.d6d49ab4.js",
    "revision": "9d5015448e178dabf4296cb11ecb8539"
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
    "url": "assets/js/app.bf43678d.js",
    "revision": "a0347d7d6464c0761e225d8210e7b7a7"
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
    "revision": "e484fbe43e54b116ac1f1325ef0f358e"
  },
  {
    "url": "categories/CSS/index.html",
    "revision": "c8fbbfb1da9a358554f2a091b8120b77"
  },
  {
    "url": "categories/ES6/index.html",
    "revision": "d74c20879196307fb20611149e9a3d05"
  },
  {
    "url": "categories/Flex/index.html",
    "revision": "8c37a6a96997ee40ace94b7d08678ff9"
  },
  {
    "url": "categories/HTML/index.html",
    "revision": "50b6f836021591c2b6d23f3e16e93fa9"
  },
  {
    "url": "categories/index.html",
    "revision": "8b1c61ac1f770a4c86a00857475bab06"
  },
  {
    "url": "categories/Introduction/index.html",
    "revision": "988dc16d236c474503159e8feb43d47a"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "c05535ce0208e9f835a46c61b476b927"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "ab9b6af43c15743fa3e94beaf89e0c16"
  },
  {
    "url": "categories/Naming Conventions/index.html",
    "revision": "c2259f8749077ace81d2b5a7f74892a1"
  },
  {
    "url": "categories/Node.js/index.html",
    "revision": "eff7ade5bcd842ff3eaa90f6fc46e7b7"
  },
  {
    "url": "categories/Skills/index.html",
    "revision": "02c5d96cf88132da4690eac77c39a1ef"
  },
  {
    "url": "categories/Three.js/index.html",
    "revision": "b431021a6fecb6eb91b494874992d2ed"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "0d0cc8eab1e7be4dbe322393966b505e"
  },
  {
    "url": "css/style.css",
    "revision": "eeb7d92e40b182ee5fb3381166aa3c97"
  },
  {
    "url": "guide/index.html",
    "revision": "277b9b8c5840a26300c0d872c9a00bca"
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
    "revision": "0bd36f512d46a0f23663b863d200b874"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "54fec6c6fbf023d1155e7cedbda42430"
  },
  {
    "url": "tags/Ajax/index.html",
    "revision": "dd469a2c94d76508d3aab8ae73d541ca"
  },
  {
    "url": "tags/async/await/index.html",
    "revision": "5b2cbdd2bf44eb1da3eef2175d0df227"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "dfc359c6bf463fdff4d81a1084a2b5eb"
  },
  {
    "url": "tags/ES6/index.html",
    "revision": "f0c249add28d6f29404fe75514317fcf"
  },
  {
    "url": "tags/Flex/index.html",
    "revision": "af6eff768cb1d9ecc3e8e3129d9f45c0"
  },
  {
    "url": "tags/Html/index.html",
    "revision": "3881f037302721402dda19445f15f0e7"
  },
  {
    "url": "tags/Introduction/index.html",
    "revision": "755c69551382337231565ca188aad172"
  },
  {
    "url": "tags/Javascript/index.html",
    "revision": "e7782a30d38ec8e9010d3306e671cdb8"
  },
  {
    "url": "tags/jQuery/index.html",
    "revision": "d74b78cad676ca2aac4ff1858560a78e"
  },
  {
    "url": "tags/Naming Conventions/index.html",
    "revision": "90af9ce7eaa63f1c92c7be7fcdbc12b1"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "bb8ed065851236ff69eeadaa95765bda"
  },
  {
    "url": "tags/Promise/index.html",
    "revision": "4f911b48d84fee99d82b9f3b50cc5da1"
  },
  {
    "url": "tags/Three.js/index.html",
    "revision": "7ebf95ee557e032db9018ef11e85f7ae"
  },
  {
    "url": "tags/VSCode/index.html",
    "revision": "d3103963b9f7111544b344b581e33243"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "62da552ff2df97b7f75d73a3abf11278"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "bd1cecee81f6ada41758090ad1c7df39"
  },
  {
    "url": "timeline/index.html",
    "revision": "44868472259685f37f84adfb7196e58d"
  },
  {
    "url": "技术文章/Ajax/ajax.html",
    "revision": "b89c71eeabd68a19905747618c890837"
  },
  {
    "url": "技术文章/CSS/css1.html",
    "revision": "c101c6e6519f6c1d2863ab17687157d2"
  },
  {
    "url": "技术文章/CSS/css2.html",
    "revision": "2008e6cf67836b6121737119985b5a8e"
  },
  {
    "url": "技术文章/CSS/css3.html",
    "revision": "4eacd8262ccf2214b05ccd9a95a8652f"
  },
  {
    "url": "技术文章/CSS/proj-record.html",
    "revision": "056f59697d7c54a8b46a4c497392c03a"
  },
  {
    "url": "技术文章/ES6/ES6.html",
    "revision": "7833584088d11c38e887598b573df9ea"
  },
  {
    "url": "技术文章/Flex/Flex布局.html",
    "revision": "f6aa05dcbb86100371dc61a445758d6e"
  },
  {
    "url": "技术文章/Html/html.html",
    "revision": "350e4d429e81fcbbef17706b6ad4057d"
  },
  {
    "url": "技术文章/Intro/intro.html",
    "revision": "ea1effdc83c43db2f9adddef65eaf13f"
  },
  {
    "url": "技术文章/jQuery/jquery.html",
    "revision": "e59f4c98390123f59bf80d1c79f5d0f7"
  },
  {
    "url": "技术文章/JS/Javascript1.html",
    "revision": "1fbcefd3901d84e56d989bc562043b7f"
  },
  {
    "url": "技术文章/JS/Javascript2.html",
    "revision": "74fb5da70b55359b647b557e61524ee8"
  },
  {
    "url": "技术文章/Naming-Convention/var-name.html",
    "revision": "df781a348cffc1f8b41228e0f69fb67e"
  },
  {
    "url": "技术文章/Nodejs/Nodejs.html",
    "revision": "c0dce69798109c2858f52fc036355a92"
  },
  {
    "url": "技术文章/Skills/vscode连接远程服务器.html",
    "revision": "6db660f287e3220a2977f887ed80cd95"
  },
  {
    "url": "技术文章/ThreeJs/threejs.html",
    "revision": "a2d8df99366c346fb878394dbc249cd9"
  },
  {
    "url": "技术文章/Vue/vue1.html",
    "revision": "a2ac5c0c3816ecbb622b7c94f99374cf"
  },
  {
    "url": "技术文章/Vue/vue2.html",
    "revision": "dbe2fca64e0e09784865fa2e844f1922"
  },
  {
    "url": "技术文章/Vue/vue3.html",
    "revision": "269867ff72d01d81e205e761574ab61f"
  },
  {
    "url": "技术文章/Vue/vue4.html",
    "revision": "10c0bafc2e75a9e03e1ad48b3f30e4e0"
  },
  {
    "url": "技术文章/Vue/vue5.html",
    "revision": "22d13e0e350c25e595c0fa9e9cbd1b35"
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
