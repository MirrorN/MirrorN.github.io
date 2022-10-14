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
    "revision": "6189ca03aa22cd7c565e7ee3e8fd68de"
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
    "url": "assets/js/10.8ad10d85.js",
    "revision": "a403626bb8102133ebac419bf825c733"
  },
  {
    "url": "assets/js/11.f8820b2c.js",
    "revision": "1cdb69bfc59f927a33152449997df5b7"
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
    "url": "assets/js/14.7dcaf657.js",
    "revision": "d029a56030333a63ee7c15eda72fd953"
  },
  {
    "url": "assets/js/15.518ee2f9.js",
    "revision": "fc99d4ef7747bd76d9ff1435c032e15e"
  },
  {
    "url": "assets/js/16.fd061d96.js",
    "revision": "09306f18b8463f62d7c17f898c13850b"
  },
  {
    "url": "assets/js/17.6ef602cc.js",
    "revision": "4f0bdb348ce5774b806330f44dcf393d"
  },
  {
    "url": "assets/js/18.8bb32268.js",
    "revision": "9a1519befdd869504d91ca90469f67e6"
  },
  {
    "url": "assets/js/19.bb623d81.js",
    "revision": "cc4216ce5bd8081eef519d1187de16ad"
  },
  {
    "url": "assets/js/20.8a739871.js",
    "revision": "0746b427aa59871f02b4d5ec2eeff126"
  },
  {
    "url": "assets/js/21.5ab99ac2.js",
    "revision": "f7ec3bbef7c755b451625c89589e72cb"
  },
  {
    "url": "assets/js/22.7fe5e752.js",
    "revision": "e908fdce9cb56dad29c89c7997a040a2"
  },
  {
    "url": "assets/js/23.f0764f84.js",
    "revision": "498d834a5a6c39b585f6d1011aecd1cb"
  },
  {
    "url": "assets/js/24.f153daf9.js",
    "revision": "cecd44b856ee73913d76f466bead169b"
  },
  {
    "url": "assets/js/25.6da10e91.js",
    "revision": "6df08a847ab5702e8693bdcfeb04555e"
  },
  {
    "url": "assets/js/26.d85ba31f.js",
    "revision": "63c633ab3fb82bc61bcbf849641c301b"
  },
  {
    "url": "assets/js/27.235a63c2.js",
    "revision": "23d1891c3ce4ff3fd84b8aa22805b72f"
  },
  {
    "url": "assets/js/28.cf893daf.js",
    "revision": "a8efbff62103691a67e903a38f94f2a0"
  },
  {
    "url": "assets/js/29.709d6ccc.js",
    "revision": "85d40bcb254f1ad6f7a2cd5166c6d269"
  },
  {
    "url": "assets/js/30.51a7eaf1.js",
    "revision": "c64d811191ec423ecb42b88fb9e55623"
  },
  {
    "url": "assets/js/31.71f501a7.js",
    "revision": "60ed5f8370bd67277bdd94042b259891"
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
    "url": "assets/js/app.13360fba.js",
    "revision": "13a435f7f49606f29df63edc5ea56e8d"
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
    "revision": "837df233a7eeb3b6d8bf6225b467f10b"
  },
  {
    "url": "categories/CSS/index.html",
    "revision": "caa687216f648f0d434c045b45399cbb"
  },
  {
    "url": "categories/ES6/index.html",
    "revision": "a555aad629dc8fab1e3787168cadfe9a"
  },
  {
    "url": "categories/HTML/index.html",
    "revision": "c08fd9fe9ce7b57c67e9afdfd43fd93a"
  },
  {
    "url": "categories/index.html",
    "revision": "92026224f7c4b2df69273c32ae7df916"
  },
  {
    "url": "categories/Introduction/index.html",
    "revision": "82f52e2c6397a098893f1c25ebc33a7b"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "b4f03243fed2c9aab61beff20f5a6002"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "ad8c6ac69c011a60e33d412e7c7ec4a9"
  },
  {
    "url": "categories/Naming Conventions/index.html",
    "revision": "ad2b2aacf240b697910207343c524432"
  },
  {
    "url": "categories/Node.js/index.html",
    "revision": "6023da60a9446bb3af2a6c50a8ecb375"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "51e379b912f0f5c65a89fcd0f711aa8b"
  },
  {
    "url": "css/style.css",
    "revision": "eeb7d92e40b182ee5fb3381166aa3c97"
  },
  {
    "url": "guide/index.html",
    "revision": "244c019fb3ae67f525b8e63b7823b7ee"
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
    "revision": "c2c4506fa9471b8e0127ce213ea05b4f"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "05bac129092891bc3b9716fcad2bbc10"
  },
  {
    "url": "tags/Ajax/index.html",
    "revision": "b3afc96e1d6eef9bf69a257874fe097f"
  },
  {
    "url": "tags/async/await/index.html",
    "revision": "d2c57d4646cef586e49ea958a3043661"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "6159f4c443226985c78264d9f2055d07"
  },
  {
    "url": "tags/ES6/index.html",
    "revision": "007d05a3ec79be7caffbd7723005be63"
  },
  {
    "url": "tags/Html/index.html",
    "revision": "4739cac72ddd97cf370ee72867094da4"
  },
  {
    "url": "tags/Introduction/index.html",
    "revision": "c6a89e6830399044135c7f8ab1145e49"
  },
  {
    "url": "tags/Javascript/index.html",
    "revision": "089e155c4ee4c4b2c2d1faf5521b1a57"
  },
  {
    "url": "tags/jQuery/index.html",
    "revision": "f9fb61a639525dc5416909e2b975fe88"
  },
  {
    "url": "tags/Naming Conventions/index.html",
    "revision": "7487dfa7b638f04c658f491081fe310a"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "75526329e06809c9db8a3a411a1d7c75"
  },
  {
    "url": "tags/Promise/index.html",
    "revision": "332e9fb766ded693785c226fadd98387"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "13c774e5cb13449767dd6c5c4b1ec278"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "ee81770c596736990180a48dd8d5b7e8"
  },
  {
    "url": "timeline/index.html",
    "revision": "c461a759a8b61cc73c3173b5203c1710"
  },
  {
    "url": "技术文章/Ajax/ajax.html",
    "revision": "cde598fa3d59f151e855e0af418f5219"
  },
  {
    "url": "技术文章/CSS/css1.html",
    "revision": "0e7dce7185f0496e32c7962b2a2ac6d8"
  },
  {
    "url": "技术文章/CSS/css2.html",
    "revision": "787b47e9a0f51ab93d60aeb9f4d5afe8"
  },
  {
    "url": "技术文章/CSS/css3.html",
    "revision": "35cc8350918890200a701d37f5cb1914"
  },
  {
    "url": "技术文章/CSS/proj-record.html",
    "revision": "4add39249c85427e8e2304bfd2f7d6d7"
  },
  {
    "url": "技术文章/ES6/ES6.html",
    "revision": "62df06f9b101974da38b651dfb7e7485"
  },
  {
    "url": "技术文章/Html/html.html",
    "revision": "aef1b12fd221ceda4ecd57308ccf1abc"
  },
  {
    "url": "技术文章/Intro/intro.html",
    "revision": "284135660c7e22163c8341ee28cd1353"
  },
  {
    "url": "技术文章/jQuery/jquery.html",
    "revision": "81446be1dab84c52d3bbf7b2ff4ce2a7"
  },
  {
    "url": "技术文章/JS/Javascript1.html",
    "revision": "1bd86910fb0d38373a4079c06a355585"
  },
  {
    "url": "技术文章/JS/Javascript2.html",
    "revision": "c4f360a1c45c9e953fc9acabe17ea3dd"
  },
  {
    "url": "技术文章/Naming-Convention/var-name.html",
    "revision": "c08120a9bb72e56e00d0322f4e745c44"
  },
  {
    "url": "技术文章/Nodejs/Nodejs.html",
    "revision": "0cc79584602f3932a7a156e6e21299e9"
  },
  {
    "url": "技术文章/Skills/vscode连接远程服务器.html",
    "revision": "ce3cbc40de6abdd731ec99c10084f537"
  },
  {
    "url": "技术文章/Vue/vue1.html",
    "revision": "70f1365a9527da964eef1c3a2802045c"
  },
  {
    "url": "技术文章/Vue/vue2.html",
    "revision": "a764f560c063b7a2c3418636268388d6"
  },
  {
    "url": "技术文章/Vue/vue3.html",
    "revision": "77803dd579d0cc519ad8c93aeffb0953"
  },
  {
    "url": "技术文章/Vue/vue4.html",
    "revision": "0849888e844daa0207d4c62c142a6187"
  },
  {
    "url": "技术文章/Vue/vue5.html",
    "revision": "e9cded8684f96936f138bda5463fcd47"
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
