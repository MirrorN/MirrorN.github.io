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
    "revision": "bdf785b2415b69f853ee925ce4bcc57c"
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
    "url": "assets/js/10.e216e834.js",
    "revision": "edc64f4b7f906abe74b5b8800a6b2b54"
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
    "url": "assets/js/14.f5eb041c.js",
    "revision": "dfc54a05125495799a0fd721516b84b3"
  },
  {
    "url": "assets/js/15.9d785d02.js",
    "revision": "5a7db1683ed73dd6b2c330378774a269"
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
    "url": "assets/js/19.79a55de7.js",
    "revision": "9cf69542ebb249cbeb84bd9590cf346b"
  },
  {
    "url": "assets/js/20.adff40ff.js",
    "revision": "03cbefdaf669d01bf12f928de931209c"
  },
  {
    "url": "assets/js/21.7b8f9348.js",
    "revision": "483835d48d97f93fd0076bbcad69bf95"
  },
  {
    "url": "assets/js/22.441206c9.js",
    "revision": "c7b959f3aaf00d694048fba150906d4e"
  },
  {
    "url": "assets/js/23.50c945b2.js",
    "revision": "e01c7fc25e0352dbb91e69add665f91e"
  },
  {
    "url": "assets/js/24.d5e044d9.js",
    "revision": "b49908a5cea5edc8493d9191707bb154"
  },
  {
    "url": "assets/js/25.a83e3ba1.js",
    "revision": "d9611216ae5d0e096ca9f6604fbc2971"
  },
  {
    "url": "assets/js/26.77413750.js",
    "revision": "abbe4d105cd3af5556601b33200433ec"
  },
  {
    "url": "assets/js/27.fe2860d5.js",
    "revision": "821d51bfa2de33dff04759c9da6f2eba"
  },
  {
    "url": "assets/js/28.2b65ca82.js",
    "revision": "164bc4d678500d47603a5fb2c75df1fd"
  },
  {
    "url": "assets/js/29.bdb2494a.js",
    "revision": "302a1ca53311326c7af184b2e184d81e"
  },
  {
    "url": "assets/js/30.51a7eaf1.js",
    "revision": "c64d811191ec423ecb42b88fb9e55623"
  },
  {
    "url": "assets/js/31.ff480abf.js",
    "revision": "b0159e53fd704573c4ec411e440a1f53"
  },
  {
    "url": "assets/js/32.7384f65a.js",
    "revision": "b59fdfb32d26ea13b50d81a319f5547a"
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
    "url": "assets/js/app.f20a800f.js",
    "revision": "9901ec8bf71543efeebf14dc17ff278f"
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
    "revision": "d231ae9d2ba0a093836b22d739ec9ced"
  },
  {
    "url": "categories/CSS/index.html",
    "revision": "3e492c7aca5672d6572cc7882b8cb87c"
  },
  {
    "url": "categories/ES6/index.html",
    "revision": "a5cc9be106b774d02d785507227ad386"
  },
  {
    "url": "categories/HTML/index.html",
    "revision": "8f1ca4854ddaa9d5576dc4325424e290"
  },
  {
    "url": "categories/index.html",
    "revision": "0526acd7988a19687cdc21c5d442c89f"
  },
  {
    "url": "categories/Introduction/index.html",
    "revision": "08881341ef452387c994f8e62c148793"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "4911d2128d6951908ec349260a97607e"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "f5b5558f8e022786e1b513ee4816e1e3"
  },
  {
    "url": "categories/Naming Conventions/index.html",
    "revision": "81fbf2641a035881dd69ac0d72f93cf2"
  },
  {
    "url": "categories/Node.js/index.html",
    "revision": "96abae4a64e829a1490d07e193c61ab1"
  },
  {
    "url": "categories/Skills/index.html",
    "revision": "b86157d2ef394d0314597c1474c47a42"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "b6c310efcf747a16ff39fa4e7e6b11f3"
  },
  {
    "url": "css/style.css",
    "revision": "eeb7d92e40b182ee5fb3381166aa3c97"
  },
  {
    "url": "guide/index.html",
    "revision": "1c9cf6e8d6770ee013c37e342b60e602"
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
    "revision": "6d55f0af8b7bd2d7cea567bef1b01cef"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "a615c33801c2ce07c12ef8ceddbc8e19"
  },
  {
    "url": "tags/Ajax/index.html",
    "revision": "53df0b1b18c0a79098f475a7957a5d6b"
  },
  {
    "url": "tags/async/await/index.html",
    "revision": "c96ba45a2aaa4de0732f4c04150ddddb"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "593d64276a9af04646f82461317d3d8a"
  },
  {
    "url": "tags/ES6/index.html",
    "revision": "55f69bfca6d0fc060818909b51623dcb"
  },
  {
    "url": "tags/Html/index.html",
    "revision": "8a873012c0b3c7d4a795c416f3db4dc0"
  },
  {
    "url": "tags/Introduction/index.html",
    "revision": "7d7cef39a1d671d2fee7ad86da3ebba9"
  },
  {
    "url": "tags/Javascript/index.html",
    "revision": "92aee16ed539954511ec02f0bae4579a"
  },
  {
    "url": "tags/jQuery/index.html",
    "revision": "df5b49a42a887ff522468c2fde19a10a"
  },
  {
    "url": "tags/Naming Conventions/index.html",
    "revision": "fd08fac2e6e0d9b05cbe9144dcd83075"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "4314b3db57c38c6398eed89db26c870f"
  },
  {
    "url": "tags/Promise/index.html",
    "revision": "6e7d9653e9c5210f05ffdd9b3382fdfa"
  },
  {
    "url": "tags/VSCode/index.html",
    "revision": "f15fc8a95465e734eedc59e14d04c95d"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "8ebed296c28cd52063e5b912302ac161"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "8518557106b42a2391309df059960653"
  },
  {
    "url": "timeline/index.html",
    "revision": "a12d51ee6fa7428d0320449972c5cc29"
  },
  {
    "url": "技术文章/Ajax/ajax.html",
    "revision": "a0d63079851611683dfaba28e7baa7f5"
  },
  {
    "url": "技术文章/CSS/css1.html",
    "revision": "dc24773c3f1eb1d8a200f0b907412f41"
  },
  {
    "url": "技术文章/CSS/css2.html",
    "revision": "760cee1a1b9823e48a79e370a0be87a4"
  },
  {
    "url": "技术文章/CSS/css3.html",
    "revision": "8be6e3f4209477dae3665355243db612"
  },
  {
    "url": "技术文章/CSS/proj-record.html",
    "revision": "a6ced216b7883a3e7bb6dc99c94b5a6a"
  },
  {
    "url": "技术文章/ES6/ES6.html",
    "revision": "9f196bd0261008c9c15c5f69cb8b756b"
  },
  {
    "url": "技术文章/Html/html.html",
    "revision": "097e42172e93ce1347e4f9362fd7ded7"
  },
  {
    "url": "技术文章/Intro/intro.html",
    "revision": "9e7344d5825b5f4593eab35164f915a3"
  },
  {
    "url": "技术文章/jQuery/jquery.html",
    "revision": "598a623e66eacb7a8cec2196bf4afcbd"
  },
  {
    "url": "技术文章/JS/Javascript1.html",
    "revision": "b98a99c224c61bcef8b5e8360c51de9b"
  },
  {
    "url": "技术文章/JS/Javascript2.html",
    "revision": "f4e0709ec062971ec3e3d6300c34955b"
  },
  {
    "url": "技术文章/Naming-Convention/var-name.html",
    "revision": "b9d632ed1e4f28ee8868eb849e99f824"
  },
  {
    "url": "技术文章/Nodejs/Nodejs.html",
    "revision": "6fced5df5df747867196286cea0e2ef5"
  },
  {
    "url": "技术文章/Skills/vscode连接远程服务器.html",
    "revision": "88f58b03ab40f641a8eee68f90f16378"
  },
  {
    "url": "技术文章/Vue/vue1.html",
    "revision": "6831bc7e2bf43e8ad6109a85ed477feb"
  },
  {
    "url": "技术文章/Vue/vue2.html",
    "revision": "89a0ddf3a5f54299fbadb70bf1bd211e"
  },
  {
    "url": "技术文章/Vue/vue3.html",
    "revision": "3e5b87c797a7b828d50589ae1cf1d964"
  },
  {
    "url": "技术文章/Vue/vue4.html",
    "revision": "a208fe2bf055f40ffff90826a17a0bc6"
  },
  {
    "url": "技术文章/Vue/vue5.html",
    "revision": "4e1b854de4b21a6c7753416388cf219f"
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
