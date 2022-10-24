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
    "revision": "0da047f57c685cc129d21f86f66633fe"
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
    "url": "assets/js/10.4577d80b.js",
    "revision": "a2d03d558fc891fb8d2ce735f93a15d7"
  },
  {
    "url": "assets/js/11.25626c15.js",
    "revision": "a19a1ca26d7a3dcc0912360b5c377fac"
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
    "url": "assets/js/14.4abfac78.js",
    "revision": "0d1240121240a4753a03913bd96b6718"
  },
  {
    "url": "assets/js/15.7034f8ed.js",
    "revision": "55f9a397be58c3aed29563369b54bef5"
  },
  {
    "url": "assets/js/16.01c210c9.js",
    "revision": "3effd76202ddaf52e35c1bff25317d38"
  },
  {
    "url": "assets/js/17.10f95ba3.js",
    "revision": "0240e72b2fc7ed78083fe27dc93d43ca"
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
    "url": "assets/js/20.8a739871.js",
    "revision": "0746b427aa59871f02b4d5ec2eeff126"
  },
  {
    "url": "assets/js/21.b46b89ca.js",
    "revision": "0b4768b56f2556b2561281907bbcea95"
  },
  {
    "url": "assets/js/22.7fe5e752.js",
    "revision": "e908fdce9cb56dad29c89c7997a040a2"
  },
  {
    "url": "assets/js/23.93b517ae.js",
    "revision": "50ea8ada18ee86e09139fb6c45a75114"
  },
  {
    "url": "assets/js/24.70c58641.js",
    "revision": "48b3dcc7dbe47dad4b6d37f816126ec2"
  },
  {
    "url": "assets/js/25.d80b81cc.js",
    "revision": "116576e3b8df8d33e48e41b182f91251"
  },
  {
    "url": "assets/js/26.64134fea.js",
    "revision": "e07ad5fb3c8a74b608ac736637f46b29"
  },
  {
    "url": "assets/js/27.c9c90172.js",
    "revision": "d9f1cbf5d177d4a130c0e97768fcd221"
  },
  {
    "url": "assets/js/28.0d3359d7.js",
    "revision": "bb659d88b01e29117094cc476f925895"
  },
  {
    "url": "assets/js/29.a314a421.js",
    "revision": "955b2db8c1478cc173a1ac6fd6a66473"
  },
  {
    "url": "assets/js/30.644c1d5c.js",
    "revision": "f621b29310883c79fc362942b9b6a6fa"
  },
  {
    "url": "assets/js/31.6a84c413.js",
    "revision": "7f068336694d3ca634adc0a567a76c3a"
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
    "url": "assets/js/app.d702e0da.js",
    "revision": "d1c07fe67c1adb99be775c8c821bfa5c"
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
    "revision": "6e2da5dd68bbbe1370819f4f289ec293"
  },
  {
    "url": "categories/CSS/index.html",
    "revision": "46bc86fac35de60844812f599678d096"
  },
  {
    "url": "categories/ES6/index.html",
    "revision": "54f0afa0ee76f2e421a85204f177406c"
  },
  {
    "url": "categories/Flex/index.html",
    "revision": "69482e58a14b5524621e7ff4e273a6a8"
  },
  {
    "url": "categories/HTML/index.html",
    "revision": "ac0e24d704cb350fdedb376962784dea"
  },
  {
    "url": "categories/index.html",
    "revision": "cd70d3d2cf5aa7600a6097021f9e53c8"
  },
  {
    "url": "categories/Introduction/index.html",
    "revision": "54557919a825031141224bea71b6259e"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "1a92f5bd529267b3bf7c681998691a20"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "290c3c0910f2a35dea61934b53251c30"
  },
  {
    "url": "categories/Naming Conventions/index.html",
    "revision": "0ce2701582c9eb9a7a661ce8907493fe"
  },
  {
    "url": "categories/Node.js/index.html",
    "revision": "00213a80eba61d34b19c400cdd1791a1"
  },
  {
    "url": "categories/Skills/index.html",
    "revision": "3ff89066703a0165f7cb40ce408fbe19"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "cad450ba4f96a9d44f8755911fca04b3"
  },
  {
    "url": "css/style.css",
    "revision": "eeb7d92e40b182ee5fb3381166aa3c97"
  },
  {
    "url": "guide/index.html",
    "revision": "123a171d8ad418bac23387b258a62939"
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
    "revision": "2652a3275c4324fc5f959b31da021a7b"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "d58dd9c635a3266c1ad5b80088aca027"
  },
  {
    "url": "tags/Ajax/index.html",
    "revision": "d158de4fb61d9449341c62b636acd70d"
  },
  {
    "url": "tags/async/await/index.html",
    "revision": "6e0ba619711810547b8bcdb9fae26536"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "1e1577281aaf4418643ecf38e33af65f"
  },
  {
    "url": "tags/ES6/index.html",
    "revision": "6b3b91edc308895a5aef16ec909bb54f"
  },
  {
    "url": "tags/Flex/index.html",
    "revision": "2d007eecc24c1735438895023d9a417d"
  },
  {
    "url": "tags/Html/index.html",
    "revision": "7d7cd9d2a132607521f8dfdd271ae86d"
  },
  {
    "url": "tags/Introduction/index.html",
    "revision": "cce6e2f2a43aeb200e465b409f7ef568"
  },
  {
    "url": "tags/Javascript/index.html",
    "revision": "04e690e217572e1a70c0dd1a8d3ae4df"
  },
  {
    "url": "tags/jQuery/index.html",
    "revision": "9eab8679e47de8fda10c2a66718ea627"
  },
  {
    "url": "tags/Naming Conventions/index.html",
    "revision": "88352c8fb84bf213e6e8c0e69aa010b1"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "477ee0f0a58939107e6a974ebea9d6b0"
  },
  {
    "url": "tags/Promise/index.html",
    "revision": "6717fb47d7fcee3fdc32f54246d6af02"
  },
  {
    "url": "tags/VSCode/index.html",
    "revision": "f130a92baf75db2c35bed495f44674bb"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "0d6164486982d92218005fe3f8686860"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "7334e29dbda695dd3d7169b83082edfd"
  },
  {
    "url": "timeline/index.html",
    "revision": "8e4559ceec4e6df82353b1d90a69a12d"
  },
  {
    "url": "技术文章/Ajax/ajax.html",
    "revision": "8454610d89acd9e3871ac3e6208f1431"
  },
  {
    "url": "技术文章/CSS/css1.html",
    "revision": "938fc1216b446d8e59dab9f6bb11fae2"
  },
  {
    "url": "技术文章/CSS/css2.html",
    "revision": "31831ec9df7d85a8063be9f0bcaa2f25"
  },
  {
    "url": "技术文章/CSS/css3.html",
    "revision": "ae54ae5cd492f099ad4d8bd165906877"
  },
  {
    "url": "技术文章/CSS/proj-record.html",
    "revision": "c400990c60e0514710ed1f8dfa6d4d64"
  },
  {
    "url": "技术文章/ES6/ES6.html",
    "revision": "67142ed8b6c7b5c181b95e7b061cad65"
  },
  {
    "url": "技术文章/Flex/Flex布局.html",
    "revision": "e0822c1b898d5cdb9e0bcaeb717ef75c"
  },
  {
    "url": "技术文章/Html/html.html",
    "revision": "b582afd3326878e9e65b34a50eb7804e"
  },
  {
    "url": "技术文章/Intro/intro.html",
    "revision": "c216ebb175974fed506fecc4343218a4"
  },
  {
    "url": "技术文章/jQuery/jquery.html",
    "revision": "e0b11268895c86f63713cb7deeed04e3"
  },
  {
    "url": "技术文章/JS/Javascript1.html",
    "revision": "0261d27a7b9a744a2c6338665ab9ce58"
  },
  {
    "url": "技术文章/JS/Javascript2.html",
    "revision": "715f8c13bc3822941175e4c5913b619f"
  },
  {
    "url": "技术文章/Naming-Convention/var-name.html",
    "revision": "4da015b4f3dd756f7187447437c0950e"
  },
  {
    "url": "技术文章/Nodejs/Nodejs.html",
    "revision": "096f24049aae7cae5ed8e9962f9ef578"
  },
  {
    "url": "技术文章/Skills/vscode连接远程服务器.html",
    "revision": "31b77013eef1bb7ffc4b2f86521e9955"
  },
  {
    "url": "技术文章/Vue/vue1.html",
    "revision": "cff3cdb48c139783036a4327d2cce646"
  },
  {
    "url": "技术文章/Vue/vue2.html",
    "revision": "74addc658c177c1c8bf29d28ecef82b4"
  },
  {
    "url": "技术文章/Vue/vue3.html",
    "revision": "02a10d547937c7389bde761449424e45"
  },
  {
    "url": "技术文章/Vue/vue4.html",
    "revision": "68316b2c127574a7189fe2a16d30e0ec"
  },
  {
    "url": "技术文章/Vue/vue5.html",
    "revision": "b418151441c42819e77ee60b9136f9fa"
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
