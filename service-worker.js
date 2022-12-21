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
    "revision": "0e2c5d4c40c207344c13c5b1c6686bd7"
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
    "url": "assets/js/10.b5b4f9b8.js",
    "revision": "6d7e2a36d8c90b9f57117ccef7edd786"
  },
  {
    "url": "assets/js/11.347056f1.js",
    "revision": "640e2a1fdec1bcc4288d25176398ad22"
  },
  {
    "url": "assets/js/12.216bf9d4.js",
    "revision": "98ca18636d0923ac951d9b8edfbab099"
  },
  {
    "url": "assets/js/13.337b2ac4.js",
    "revision": "872f9851697989c3b64c630b79a4e6f9"
  },
  {
    "url": "assets/js/14.f5eb041c.js",
    "revision": "dfc54a05125495799a0fd721516b84b3"
  },
  {
    "url": "assets/js/15.3caeae2c.js",
    "revision": "a382c27ae97d42b7defb6e13b49c1718"
  },
  {
    "url": "assets/js/16.7746776a.js",
    "revision": "24284e02a84d49f3b0d06acbaca07349"
  },
  {
    "url": "assets/js/17.dc74052d.js",
    "revision": "63ac911977d54d7fa7ce6b999644532d"
  },
  {
    "url": "assets/js/18.8913bf2d.js",
    "revision": "30a466233fda15cd4eefb985c9dca519"
  },
  {
    "url": "assets/js/19.0e24b58d.js",
    "revision": "77f617f1de99d2f9a60bc06ee5e8bf21"
  },
  {
    "url": "assets/js/20.50674ca0.js",
    "revision": "2d3bb8d9fbb2344e048bfcc4a95bb6e8"
  },
  {
    "url": "assets/js/21.80606f98.js",
    "revision": "9a9914e00f63a3f4c50c9bc3b928d160"
  },
  {
    "url": "assets/js/22.5ed6aa22.js",
    "revision": "18a3e6a2b252586b14a420886c0e5acb"
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
    "url": "assets/js/25.c607de16.js",
    "revision": "415862d19a147f511414ad07ea472069"
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
    "url": "assets/js/30.99d5cd24.js",
    "revision": "af3366fb4fc6f636f052a02b4312d2eb"
  },
  {
    "url": "assets/js/31.62ab0a67.js",
    "revision": "a2c5fb3657462719f5a7a5bd38aae26d"
  },
  {
    "url": "assets/js/32.c7f6cae2.js",
    "revision": "f6ee164f32120b97a709bdbd660b264f"
  },
  {
    "url": "assets/js/33.43d4f034.js",
    "revision": "7e6083fba43a01d9376d05a8ffbb95b1"
  },
  {
    "url": "assets/js/34.339a5015.js",
    "revision": "cdc9bcbb8898d860d26bf6872d14c975"
  },
  {
    "url": "assets/js/35.b5db4fd0.js",
    "revision": "1e25b2e55cf13fc282119d4376ee983d"
  },
  {
    "url": "assets/js/36.a8651903.js",
    "revision": "02da72563494aaac16ab80b1c1068ff9"
  },
  {
    "url": "assets/js/37.ff3260c6.js",
    "revision": "3b101ad081fbbe14e834c8fb9e4c049e"
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
    "url": "assets/js/app.d527f978.js",
    "revision": "2757610eca1fd34596509d327f2d6849"
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
    "revision": "7138313ef7e84738379d8b10f583ab0b"
  },
  {
    "url": "categories/CSS/index.html",
    "revision": "9a962210d131ad592b23b58e2b7bf79b"
  },
  {
    "url": "categories/ES6/index.html",
    "revision": "f79a75f4061f2e6bdfa850d08de8d2e1"
  },
  {
    "url": "categories/Flex/index.html",
    "revision": "cba50a31ad75527dbde695c07201a8f8"
  },
  {
    "url": "categories/HTML/index.html",
    "revision": "0203a3d95eeecf0d66ca9fc557e61ada"
  },
  {
    "url": "categories/index.html",
    "revision": "4ef9df7a9428f4fd239d33681edda26e"
  },
  {
    "url": "categories/Introduction/index.html",
    "revision": "c06f84ae2b701fe5756f0ec989160ce9"
  },
  {
    "url": "categories/Javascript/index.html",
    "revision": "cbe0f38b04198b14bf4935e31c7a9705"
  },
  {
    "url": "categories/jQuery/index.html",
    "revision": "046718808f59c1f2fc2a739e9cddc387"
  },
  {
    "url": "categories/Naming Conventions/index.html",
    "revision": "cd613ceba62f4c8b2af69d0cf564d7e8"
  },
  {
    "url": "categories/Node.js/index.html",
    "revision": "3f7a2dae1e3bbb79c29ed5f51eeaa1cf"
  },
  {
    "url": "categories/Skills/index.html",
    "revision": "a047b57ecccd3ce9c8c09a0e5fb2e79a"
  },
  {
    "url": "categories/Three.js/index.html",
    "revision": "d3b96fb7d3c60e9f16f9afcd5d42d9e6"
  },
  {
    "url": "categories/Typescript/index.html",
    "revision": "a18107d30aa3eeaeb6b712a69d1d7c7d"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "4b8d3593ec9c1ea2d873d24eb25d6ff3"
  },
  {
    "url": "categories/Vue3/index.html",
    "revision": "5ea95973497ea8150c716e7bf833b134"
  },
  {
    "url": "css/style.css",
    "revision": "eeb7d92e40b182ee5fb3381166aa3c97"
  },
  {
    "url": "guide/index.html",
    "revision": "74ebb0d57d0a0c51bad4fa6f387b8b25"
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
    "revision": "ce688b21579c734d96f0ffaacbf4b3f6"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "7b7d497afde255be0d789b53ac040c75"
  },
  {
    "url": "tags/Ajax/index.html",
    "revision": "bbad4166b68af8b8c1f0e39499b00855"
  },
  {
    "url": "tags/async/await/index.html",
    "revision": "d6e0adda868ab282dca7a431e5ffed25"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "1bbeadd562097cab8d363a746bb9f09c"
  },
  {
    "url": "tags/ES6/index.html",
    "revision": "91a304d58eaa1088f07cb337cb215f79"
  },
  {
    "url": "tags/Flex/index.html",
    "revision": "d25f2576c74a39528e06cf8ea1345d75"
  },
  {
    "url": "tags/Html/index.html",
    "revision": "9af31cd8c325a043fed633fd5c17bfc0"
  },
  {
    "url": "tags/Introduction/index.html",
    "revision": "2a0e7da750b030cda8ff4d00aaa10e2d"
  },
  {
    "url": "tags/Javascript/index.html",
    "revision": "7635d2046de3ada7f65b8df7bf82803f"
  },
  {
    "url": "tags/jQuery/index.html",
    "revision": "935adf6b5858c7c94f2ee6be79889286"
  },
  {
    "url": "tags/Naming Conventions/index.html",
    "revision": "675210b80143dc0832cf5f6d9208866c"
  },
  {
    "url": "tags/Node.js/index.html",
    "revision": "e718e000e9e05461165e304c1750bbba"
  },
  {
    "url": "tags/Pinia/index.html",
    "revision": "7b0a5a89a4350f8a575c8585a03f64df"
  },
  {
    "url": "tags/Promise/index.html",
    "revision": "d3dad0623d800c1c8aee87eec45fa329"
  },
  {
    "url": "tags/Three.js/index.html",
    "revision": "407f1d05de5d94fd50e9ae7003523ffa"
  },
  {
    "url": "tags/Typescript/index.html",
    "revision": "da9b79667c9b1139915771ff1b1ce6af"
  },
  {
    "url": "tags/Vite/index.html",
    "revision": "3eac22198f1c7bce6c1495d407113b93"
  },
  {
    "url": "tags/VSCode/index.html",
    "revision": "5e2f835e398de61d6481f14beb366df4"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "ddfb5a0dc1b42ff992efb2c7f8dd99c9"
  },
  {
    "url": "tags/Vue3/index.html",
    "revision": "04d8bcccbec87fa5f8eeea9edf1cc722"
  },
  {
    "url": "tags/Webpack/index.html",
    "revision": "4524588ff8f94e5062369856d33b5189"
  },
  {
    "url": "timeline/index.html",
    "revision": "4d108979aa5fee9a70766688d6bbd14e"
  },
  {
    "url": "技术文章/Ajax/ajax.html",
    "revision": "0827690a2bdf03bbeecde9c1b42d973c"
  },
  {
    "url": "技术文章/CSS/css1.html",
    "revision": "3e71f20528b68e4d2847f27bb8ba6b32"
  },
  {
    "url": "技术文章/CSS/css2.html",
    "revision": "fce6112b6fef469e31ac46e3431074f2"
  },
  {
    "url": "技术文章/CSS/css3.html",
    "revision": "e19250a0080106d76a8752486f60a7fa"
  },
  {
    "url": "技术文章/CSS/proj-record.html",
    "revision": "77f7254d02fd7932b4d38e49ea653845"
  },
  {
    "url": "技术文章/ES6/ES6.html",
    "revision": "222514bddd2bb1602004a40a705e5d91"
  },
  {
    "url": "技术文章/Flex/Flex布局.html",
    "revision": "d4e029a3485d4374e6bc49a7c3c3b7a5"
  },
  {
    "url": "技术文章/Html/html.html",
    "revision": "f0c696d01091735fb5aac19f096dd368"
  },
  {
    "url": "技术文章/Intro/intro.html",
    "revision": "b7fc0251f47d163411ba46c8834cd8f5"
  },
  {
    "url": "技术文章/jQuery/jquery.html",
    "revision": "586bcf97c92e47b061d4dd1011a446e3"
  },
  {
    "url": "技术文章/JS/Javascript1.html",
    "revision": "2540a76ad41b74680063272f8fe352a2"
  },
  {
    "url": "技术文章/JS/Javascript2.html",
    "revision": "114b307d637a3cf896dc78c82927f5e6"
  },
  {
    "url": "技术文章/Naming-Convention/var-name.html",
    "revision": "3f348bb2ed84bf5fd99b5641f005018d"
  },
  {
    "url": "技术文章/Nodejs/Nodejs.html",
    "revision": "f5edbb82fa14cd90c289bdde6c9ca05b"
  },
  {
    "url": "技术文章/Skills/vscode连接远程服务器.html",
    "revision": "a6d1a0403f10b37024a5a03fd9fa26b1"
  },
  {
    "url": "技术文章/ThreeJs/threejs.html",
    "revision": "c8f1f729a444e2a5ba8f37cd1f48d168"
  },
  {
    "url": "技术文章/Typescript/Typescript.html",
    "revision": "2e562f9e93fa46b4cd65cedf61f64fff"
  },
  {
    "url": "技术文章/Typescript/Typescript2.html",
    "revision": "b013e6d90ca2f96cf359f9da2cf00de2"
  },
  {
    "url": "技术文章/Vite/vite-vue3.html",
    "revision": "517e40f201863fa0a0a2ce24235f800d"
  },
  {
    "url": "技术文章/Vue/vue1.html",
    "revision": "fbafb2bcfeb36a09c5b857f9581e3052"
  },
  {
    "url": "技术文章/Vue/vue2.html",
    "revision": "cb26ecac2dcfbbdaeb9599ec0732b2a4"
  },
  {
    "url": "技术文章/Vue/vue3.html",
    "revision": "95dfd9312f3ffe1890211d6810dd3d5f"
  },
  {
    "url": "技术文章/Vue/vue4.html",
    "revision": "7938d08a63c77d9aaa801d0237e5f0bc"
  },
  {
    "url": "技术文章/Vue/vue5.html",
    "revision": "44b3344db2f8993ee2130e1791676fc3"
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
