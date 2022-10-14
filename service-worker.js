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
    "revision": "5b19b1323e0721c0d56c49375908b73d"
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
    "url": "assets/img/image-20221013165316355.49bf5449.png",
    "revision": "49bf54497906a665d9319f8e32396e11"
  },
  {
    "url": "assets/img/image-20221013195759583.1a811242.png",
    "revision": "1a81124234cb97091379d921f892d669"
  },
  {
    "url": "assets/js/1.fe749e66.js",
    "revision": "75af5c9ac6532a5a5e58f86333ee96e2"
  },
  {
    "url": "assets/js/10.bad77aaf.js",
    "revision": "34417b5b1ea00341207e1bc4eed13e63"
  },
  {
    "url": "assets/js/11.ef33841c.js",
    "revision": "49cc830267328a1d3731d377585411b5"
  },
  {
    "url": "assets/js/12.da56352b.js",
    "revision": "da0142778bb6033f3217da9712a665bd"
  },
  {
    "url": "assets/js/13.3a5b023b.js",
    "revision": "1f770189668464c4549115df5bdb11bf"
  },
  {
    "url": "assets/js/14.d0a2df5b.js",
    "revision": "0b4175e49bbeb181c0d0bb4e2641a5a2"
  },
  {
    "url": "assets/js/15.5e0a20b0.js",
    "revision": "9c7d404e2260b09e606f023f4226560c"
  },
  {
    "url": "assets/js/16.4499d313.js",
    "revision": "a9e4504eedc02ef5189a66843d3bb9b4"
  },
  {
    "url": "assets/js/17.de0681d2.js",
    "revision": "9cda1d7a144ea0f24c20ec822a681522"
  },
  {
    "url": "assets/js/18.28a817f6.js",
    "revision": "f727ff5cf1d0066cc38a3135b3e2b117"
  },
  {
    "url": "assets/js/19.90642d44.js",
    "revision": "09797dd6ad8c0774c1792551454cdbaa"
  },
  {
    "url": "assets/js/20.6ca6b7d8.js",
    "revision": "d7deba82dd512ddd481a07d03f69478e"
  },
  {
    "url": "assets/js/21.a031c11f.js",
    "revision": "a463ac696ea47cc845052e9497ddeab7"
  },
  {
    "url": "assets/js/22.7093a6cf.js",
    "revision": "3a5c9f9d368488f0572d2520f5dd6682"
  },
  {
    "url": "assets/js/23.20567c18.js",
    "revision": "c42ed5a295e5a6bb0e89e2bf2cbe8b95"
  },
  {
    "url": "assets/js/24.c0b2d798.js",
    "revision": "64f6e21408630b45022c9953ceb34713"
  },
  {
    "url": "assets/js/25.1790fbb5.js",
    "revision": "6761f22fd7ccd3b8f7f1113e24f9376e"
  },
  {
    "url": "assets/js/26.f08354a8.js",
    "revision": "d72ca6c3d99636a257586e20de74ca02"
  },
  {
    "url": "assets/js/27.66d59ad3.js",
    "revision": "a19a9e35bacfbc1031107e9f2addf36c"
  },
  {
    "url": "assets/js/28.78d01522.js",
    "revision": "2c5cedf9a4c39eef18b085946d592579"
  },
  {
    "url": "assets/js/29.39b52d47.js",
    "revision": "699d8874978730f17ad4fa615e1caf96"
  },
  {
    "url": "assets/js/30.718da211.js",
    "revision": "a1f2e7ca1c2302690ca216a4a16b8dc5"
  },
  {
    "url": "assets/js/31.b8bc3085.js",
    "revision": "58663277fab872ac18a2ec1131e0a8ed"
  },
  {
    "url": "assets/js/4.25f53893.js",
    "revision": "53ddc3de4214b45386133608021aa6c0"
  },
  {
    "url": "assets/js/5.86a5d949.js",
    "revision": "c78686e177ce76cb2dda0c88768e4306"
  },
  {
    "url": "assets/js/6.1bae910a.js",
    "revision": "29520d63a66742dce28be1f3dbc9f8bb"
  },
  {
    "url": "assets/js/7.3f5ee07b.js",
    "revision": "4d86f7567a61cc62f798cf1f641b55ec"
  },
  {
    "url": "assets/js/8.37532ca9.js",
    "revision": "41f80623f457f4e3ac01a5237611d60e"
  },
  {
    "url": "assets/js/9.99c02e27.js",
    "revision": "4913944ed56c21fbfc61b6036d973177"
  },
  {
    "url": "assets/js/app.ecaedc8a.js",
    "revision": "48f018dcf68205e9cf4a40aed129ad7d"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.fbec0bde.js",
    "revision": "d92f8ccac4275f151a9592fb37f85b02"
  },
  {
    "url": "avatar.jpg",
    "revision": "1b1be0dfef27416ef74644ba63c5aba6"
  },
  {
    "url": "categories/Ajax/index.html",
    "revision": "a0af1bbe4a0384d3129cd8428988b82d"
  },
  {
    "url": "categories/CSS/index.html",
    "revision": "7899da82006db59650435547d70e5cc6"
  },
  {
    "url": "categories/ES6/index.html",
    "revision": "8834bd26622b1da3e04ff3ae71de3efc"
  },
  {
    "url": "categories/HTML/index.html",
    "revision": "d7d77dd8f44411b011d541230ceff742"
  },
  {
    "url": "categories/index.html",
    "revision": "050a399e70f69e60645bd2156eb47b54"
  },
  {
    "url": "categories/Introduction/index.html",
    "revision": "952ec2edd74263c6c71a8007cd92f50d"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "8e9d6276a30da422d26cb9792500e05a"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "b672331fbfdb36d78bf1883363cc2233"
  },
  {
    "url": "categories/Naming Conventions/index.html",
    "revision": "191035d8734d0d98f3b2778a89f1e3d8"
  },
  {
    "url": "categories/Node.js/index.html",
    "revision": "bdd0677c5882ea060fa3a48118957309"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "adb513a4c0dce540f5f3ecfb39c742ac"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "0cbed4558b4110bd10682c5adc4c9282"
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
    "revision": "59a8d1f0d9d1b8da72bb162c9f3736ce"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "8c1d1f73bb88fc5764f325b4df3fc427"
  },
  {
    "url": "tags/Ajax/index.html",
    "revision": "031c88944680d8014551e3f2f252d745"
  },
  {
    "url": "tags/async/await/index.html",
    "revision": "13a1bead2bfa2955621c8640caf201c6"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "e21d468dbea7227941536d993de2f67a"
  },
  {
    "url": "tags/ES6/index.html",
    "revision": "a402c8356c9eb839566033ff37aaca08"
  },
  {
    "url": "tags/Html/index.html",
    "revision": "070c9cb33d60c48c869e53a6cd382dc2"
  },
  {
    "url": "tags/Introduction/index.html",
    "revision": "8e4dcf55e2a3b9ceb0a1d2a36c236295"
  },
  {
    "url": "tags/Javascript/index.html",
    "revision": "89a3d3b447dd43ecc0f0cc7fc67b23f2"
  },
  {
    "url": "tags/jQuery/index.html",
    "revision": "ec8912ad180fd08bb21e2da7fff336b3"
  },
  {
    "url": "tags/Naming Conventions/index.html",
    "revision": "05f7add6a496a8c5910af9dd8c40adac"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "a01141821b95e3589bfaf30f97f838e5"
  },
  {
    "url": "tags/Promise/index.html",
    "revision": "9c91af18a30a8530c1909a6651d2865d"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "c32aa5228a4f3571de5910d1f20c3ea1"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "455c1c3e710ecd410e95234e616f2e24"
  },
  {
    "url": "timeline/index.html",
    "revision": "8eff5759b5deea46d476a2b4a9570249"
  },
  {
    "url": "技术文章/Ajax/ajax.html",
    "revision": "08bdf10e5eeb1c0608fd1a7eb4b4d005"
  },
  {
    "url": "技术文章/CSS/css1.html",
    "revision": "010f62dcabcc3c52e2a1c809e732726b"
  },
  {
    "url": "技术文章/CSS/css2.html",
    "revision": "afcda8524cba5ab4077db3ff8f65695d"
  },
  {
    "url": "技术文章/CSS/css3.html",
    "revision": "85922d8932c73ca7126bc4a234165600"
  },
  {
    "url": "技术文章/CSS/proj-record.html",
    "revision": "b1757295ad1bd9a6194a7bc49803c6c1"
  },
  {
    "url": "技术文章/ES6/ES6.html",
    "revision": "05c5d041194d76d43dd825660d7f0d93"
  },
  {
    "url": "技术文章/Html/html.html",
    "revision": "181a87a71f2b64ec612b262548d96d0d"
  },
  {
    "url": "技术文章/Intro/intro.html",
    "revision": "fe3e6dcbc0e0ba71def7a83e4bb54e6a"
  },
  {
    "url": "技术文章/jQuery/jquery.html",
    "revision": "e0da7ea19a2c95d47fce437e9dcbeb84"
  },
  {
    "url": "技术文章/JS/Javascript1.html",
    "revision": "e1a67995696b7137420ac9173b7f4afb"
  },
  {
    "url": "技术文章/JS/Javascript2.html",
    "revision": "50921a9d181abb0bcbf14daa6253e0df"
  },
  {
    "url": "技术文章/Naming-Convention/var-name.html",
    "revision": "aacaff989105c1bc09e97b2442294512"
  },
  {
    "url": "技术文章/Nodejs/Nodejs.html",
    "revision": "ab1ee5f2646cb53e2d1b6999e55894b9"
  },
  {
    "url": "技术文章/Vue/vue1.html",
    "revision": "7803957461ca6478207f138ec0341987"
  },
  {
    "url": "技术文章/Vue/vue2.html",
    "revision": "1d9c386d3c1567e2099aca06ffeafc7d"
  },
  {
    "url": "技术文章/Vue/vue3.html",
    "revision": "8b1caf4a80049c6ed284c8218499950b"
  },
  {
    "url": "技术文章/Vue/vue4.html",
    "revision": "f396a9d1d583d75e38b60447613ea7e9"
  },
  {
    "url": "技术文章/Vue/vue5.html",
    "revision": "528d3dd391ae30e2a4eada76670970f3"
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
