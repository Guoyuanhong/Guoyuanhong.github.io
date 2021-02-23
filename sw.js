const workboxVersion = '6.1.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "GYH's Blog"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"d9ce66ccc2461c6a1b2547b9054ff77a","url":"./404.html"},{"revision":"e7f18a30b0d318dd3fdfbdd6881ffbff","url":"./about/index.html"},{"revision":"dae716ffbd9124e28c1ce7e036574f80","url":"./archives/2020/02/index.html"},{"revision":"73c5ae6a9e1a71fc637e612b8d70cc6c","url":"./archives/2020/02/page/2/index.html"},{"revision":"e8470b7ba2dd3fb1ab2b904c430309a0","url":"./archives/2020/03/index.html"},{"revision":"346549a1fbc97db79fe21c33fc0bd5a1","url":"./archives/2020/03/page/2/index.html"},{"revision":"a709f80b89a17108b6860f115d492c20","url":"./archives/2020/04/index.html"},{"revision":"c0049ceb7814c300b3dca9933f065a9f","url":"./archives/2020/04/page/2/index.html"},{"revision":"87e17ae8c8d48440dc789913680c4493","url":"./archives/2020/05/index.html"},{"revision":"45e3820452ba0ebdcd4cad35f13a5e47","url":"./archives/2020/06/index.html"},{"revision":"17341b03c506df3c861df146c736f98e","url":"./archives/2020/08/index.html"},{"revision":"6c9b84cfc70c77edd313160a0d1a369f","url":"./archives/2020/index.html"},{"revision":"3e9d94125e5f0a94df697da511300ffe","url":"./archives/2020/page/2/index.html"},{"revision":"e1f9fffa5c2aa1e17e17af0b3228b4f1","url":"./archives/2020/page/3/index.html"},{"revision":"f991a5803d9a259ab77993b2874c220a","url":"./archives/2020/page/4/index.html"},{"revision":"d0bd00735dc9bcb0496842e3b94656ec","url":"./archives/2020/page/5/index.html"},{"revision":"2d1933cbcbb3aefa958b3969a40f6d73","url":"./archives/2021/01/index.html"},{"revision":"9a3802cc868035cf669350992e9e1285","url":"./archives/2021/02/index.html"},{"revision":"9d9ff74ef15c14612d4f2867cc3095cc","url":"./archives/2021/index.html"},{"revision":"510024afd2f4d4bea7cb8768e811d6cc","url":"./archives/index.html"},{"revision":"2407fbc0aec55eae25a4b5b95f84165b","url":"./archives/page/2/index.html"},{"revision":"24873a0f64af5e845cdee76f15170d39","url":"./archives/page/3/index.html"},{"revision":"5458f443dba37cd5c90dd3bf8764867a","url":"./archives/page/4/index.html"},{"revision":"c7563350a2ea65e72a37cae039734a9f","url":"./archives/page/5/index.html"},{"revision":"ed25077d3ca6103442bd312ebe3531fb","url":"./categories/Hexo/index.html"},{"revision":"5c0fab7c120fac2b9b0048594c40dab3","url":"./categories/Hexo/page/2/index.html"},{"revision":"a1375fc00e1b2ab141e5d8ea056112df","url":"./categories/index.html"},{"revision":"e9f73acf6a766881b85ba7adf875a570","url":"./categories/Learn/Embedded/index.html"},{"revision":"582437172791eb06e7e55ef681a79ff2","url":"./categories/Learn/index.html"},{"revision":"7b9e953e06d721e49be211091d8a5a30","url":"./categories/Learn/Python/index.html"},{"revision":"52edd9138837d9d21c69f833f0a0ada0","url":"./categories/Linux/index.html"},{"revision":"026eb286d85115056faa2dbb95613fd6","url":"./categories/技术分享/index.html"},{"revision":"2ce23a15877ea6a1c837cc9bd3665f7f","url":"./categories/技术分享/page/2/index.html"},{"revision":"992a6bad5482e1dc34ffe9cdc7138dd0","url":"./categories/技术分享/page/3/index.html"},{"revision":"b1fe3bfafecaeaf3494f00a24a957350","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"639bd87735375f75e11a2749fc4b5e2c","url":"./gallery/index.html"},{"revision":"4c210070127f18446cc4d6f38861925a","url":"./gallery/taylor/index.html"},{"revision":"c96881c862989eec48b2c7a1d8666783","url":"./gallery/wallpaper/index.html"},{"revision":"64c23f50b3613d19b39d7366828d0394","url":"./index.html"},{"revision":"284b95d3ba335fd99e07ea05d0602eb7","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"b671d12f421df84c72684da542833b74","url":"./link/index.html"},{"revision":"9519b2c225281366aa984ebc91bee03b","url":"./messageboard/index.html"},{"revision":"bc08683048898a45492038c9fdd9d2b7","url":"./page/2/index.html"},{"revision":"7c6e1048a5c8d14560839b4dc0982b1d","url":"./page/3/index.html"},{"revision":"da79faf4a67ad2bdfb0f1f1663b70e39","url":"./page/4/index.html"},{"revision":"683784fd606249ca7871f8879e3dfd97","url":"./page/5/index.html"},{"revision":"f013cc41d378b8aff747b60b383bf979","url":"./posts/1225a85c/index.html"},{"revision":"1488e5e7abb9c28f96258c0b01724378","url":"./posts/2242452b/index.html"},{"revision":"1bbf1ff9840c61214e16b16e8180bfeb","url":"./posts/2805db8d/index.html"},{"revision":"9fd45ea76bf1a9fd0f39f69a6c37a596","url":"./posts/29ade658/index.html"},{"revision":"194c8678c1e8daefb450f1ccec59f825","url":"./posts/32baccf/index.html"},{"revision":"48b25d098ca267a846ec93ced22c9787","url":"./posts/36e1b6fa/index.html"},{"revision":"850a9bd44b3d907c7118360cc09975d0","url":"./posts/39508e15/index.html"},{"revision":"0ee7f8bbac12b33b4a1ed164e47aaf84","url":"./posts/4a79441/index.html"},{"revision":"e5849acd5d23848059e4debed489f352","url":"./posts/51df657a/index.html"},{"revision":"de011bb62c52d4943904eb34bebefc73","url":"./posts/553fb3c9/index.html"},{"revision":"b3a1027499134ed845cb39730d68a854","url":"./posts/58a32e43/index.html"},{"revision":"1034e225c44628da620c02ba2f9d97f9","url":"./posts/66650f51/index.html"},{"revision":"6b36793397375c3f6f88d3ee03824148","url":"./posts/6b33fe6/index.html"},{"revision":"501fcf8d3c9e1a8d8c985150b1f338ab","url":"./posts/6c9f7751/index.html"},{"revision":"891d2c6b07036e18930e68a91f4f1274","url":"./posts/6f63f859/index.html"},{"revision":"f60c19ca8624c44acae8733ac7872592","url":"./posts/7386aa8e/index.html"},{"revision":"117ba19f19f744074aa6da7de805766d","url":"./posts/74ba30cc/index.html"},{"revision":"e0036cd30566758568d9316d611e6358","url":"./posts/75146fb8/index.html"},{"revision":"57a1dbd755e3e536a98a5f93ec9cbcc2","url":"./posts/79e427dd/index.html"},{"revision":"23089d5ba8b01c3e757ef5dc090a227b","url":"./posts/7db32d68/index.html"},{"revision":"b26362d350d31c3c5ee4ab90129cb62e","url":"./posts/7f071992/index.html"},{"revision":"8fabbb9f1af0733b3b2bed3de4cd6f2b","url":"./posts/805d5d89/index.html"},{"revision":"256453600f8fcadb65e498b468331d97","url":"./posts/85f489f0/index.html"},{"revision":"8fe591c5385df63731a801cd69ecd76f","url":"./posts/87a2932/index.html"},{"revision":"de94281d1ea8d8874e09544a826833cf","url":"./posts/8eabdcaf/index.html"},{"revision":"77c4d2ed115f9620712960cb6c668f05","url":"./posts/9585444e/index.html"},{"revision":"ecfdd819f846de30d84c74f4aec64809","url":"./posts/9b8ebfa5/index.html"},{"revision":"6d833449ecee2e0efddd26376e435f32","url":"./posts/9d3b758e/index.html"},{"revision":"4c9a1ee1665432994bf3bad1e6ab330d","url":"./posts/afe4c68d/index.html"},{"revision":"77478be4475356ad862e38eeaf2d5993","url":"./posts/b5427f21/index.html"},{"revision":"14ea623ae59fe0fff53e623c78aea9f7","url":"./posts/bcc8a0c7/index.html"},{"revision":"bc4fa1f5f02ab05570852c3db6f10c88","url":"./posts/bdd85b8e/index.html"},{"revision":"3f3eb84a572b64bbf883f067d60b1618","url":"./posts/c4f1574a/index.html"},{"revision":"f4cb5ab22dab269a9f71bf4bea268bed","url":"./posts/c51b991a/index.html"},{"revision":"7c176b6070c41adba9f85cf9965cba0c","url":"./posts/caa4f244/index.html"},{"revision":"7db20940441396b300b7250fc3e4f8ed","url":"./posts/d9d9afd1/index.html"},{"revision":"507d53e0da5d7657e60597158adb2c24","url":"./posts/da913900/index.html"},{"revision":"edac9f2164a6fd33ba8db68f4be132a6","url":"./posts/dadde4c0/index.html"},{"revision":"2872b21340d1effa307099db0bfd19f5","url":"./posts/dc1f1b6b/index.html"},{"revision":"f5eaf7ae2af67bd343f253dfa6a03893","url":"./posts/dff3835f/index.html"},{"revision":"ff279b10bd1ffef5106f936f2ec98911","url":"./posts/e4b3ef62/index.html"},{"revision":"338b1086d662d0723c6818726b79960b","url":"./posts/e74af289/index.html"},{"revision":"3cf7e9aa8a064544e950bcd5af29a06f","url":"./posts/e968e4c0/index.html"},{"revision":"46333702f0af9bce087d533c4e5bed5f","url":"./posts/ea73cc4c/index.html"},{"revision":"5cf4c7cd7de2a3792428e40f42120e9d","url":"./posts/ee1b50a3/index.html"},{"revision":"f69dbb81f7c872d457d904ddf0e62f03","url":"./posts/ee4f8e00/index.html"},{"revision":"ed57333e2913fb79d38e35044461b1fd","url":"./posts/eeb69578/index.html"},{"revision":"dcb70360d1ab85d4b8a12398dda5587f","url":"./posts/ef89201e/index.html"},{"revision":"b69231dc00f63302be90a4efeb6fa942","url":"./posts/f019efb0/index.html"},{"revision":"bb74c987d9581fd91bbf324b89834006","url":"./pwa/manifest.json"},{"revision":"96749ea067805b5a7b50d9430c943520","url":"./tags/Aplayer/index.html"},{"revision":"e63193257066329fc9e0ccaa2e78ac1b","url":"./tags/Aria2/index.html"},{"revision":"c24f5d657fbac8ed538c7c31ddd08fd3","url":"./tags/BeautifulSoup/index.html"},{"revision":"73fc90f6e8f85a4c3eaff36551bfca6e","url":"./tags/CDN/index.html"},{"revision":"faf5a7f3ade28dc88baee8ec535f5685","url":"./tags/Cloudflare/index.html"},{"revision":"4dc03875b50f8281dc7c721902cc74a7","url":"./tags/Cloudreve/index.html"},{"revision":"4d50c9dccf457fcd6f15d1b70285c42e","url":"./tags/Coding/index.html"},{"revision":"88e40d076087029acf679d8f44635b98","url":"./tags/Docker/index.html"},{"revision":"6e3ce73b7f629378c427a121a335888a","url":"./tags/Echarts/index.html"},{"revision":"8f95a87c12bb05e007e691077fcdd792","url":"./tags/Embedded/index.html"},{"revision":"fbf287b29c82d7a479c209cf7a3d3134","url":"./tags/Flask/index.html"},{"revision":"72f1ac5f77f94221b8f67e3702d3146b","url":"./tags/Github/index.html"},{"revision":"09c72153c8bf5c45d47a67828ff9a2a3","url":"./tags/Github/page/2/index.html"},{"revision":"5aac8381a53f014ad1f008300b7cf794","url":"./tags/Goindex/index.html"},{"revision":"592240221cd8ecb113213395c5583772","url":"./tags/GoogleDrive/index.html"},{"revision":"cc65cf0d9cf170a47c2f882261e971ad","url":"./tags/Hexo/index.html"},{"revision":"d4557e9b4d149a7dc4530d61e0790f37","url":"./tags/Hexo/page/2/index.html"},{"revision":"991b4b3242e3b48df8b6b9e64e2a345e","url":"./tags/index.html"},{"revision":"78d841989876aa3b350d6e7dd6286087","url":"./tags/Ipv6/index.html"},{"revision":"0cff5b4a154642119efb3e652563de0c","url":"./tags/jsDelivr/index.html"},{"revision":"ce8ea18bb51d04256b348112adc063e8","url":"./tags/LeanCloud/index.html"},{"revision":"53045b7d67b28603fc1466b41a5c0d23","url":"./tags/Linux/index.html"},{"revision":"05153d19cbae6458587a3d557d2de7ba","url":"./tags/live2d/index.html"},{"revision":"25362b619eb0a7b080688b06aaac8210","url":"./tags/NeteaseMusic/index.html"},{"revision":"5cb8eabf2cf768886adbce90586c3c0a","url":"./tags/Office/index.html"},{"revision":"fc227d013653e8a990d00a48f103eadc","url":"./tags/OneDrive/index.html"},{"revision":"8cb56bb19798c25128f24c5ec9f82550","url":"./tags/Onelist/index.html"},{"revision":"2e915ef4e35d4ceb38ce60eff68efd05","url":"./tags/OneManager/index.html"},{"revision":"a0c2a6945c76339f995dfacdf675964f","url":"./tags/OpenVpn/index.html"},{"revision":"79c5b3992dc8725c56da9e5551b0fdd3","url":"./tags/PWA/index.html"},{"revision":"86ba6505af68311e8947acadc8a51822","url":"./tags/Python/index.html"},{"revision":"57af11760e6549a0ed38a68401e7f46f","url":"./tags/qBittorrent/index.html"},{"revision":"f258138af308eabd32c1e2f1c7aea079","url":"./tags/Rclone/index.html"},{"revision":"01b5c75116626f5d6a17af026b3b433e","url":"./tags/Requests/index.html"},{"revision":"c93b60668742774ca08fa807d8cbffc0","url":"./tags/ServerStatus/index.html"},{"revision":"a48a497de0f31e96813d059379cbca31","url":"./tags/SpeedTest/index.html"},{"revision":"3e9fd89d69365ebd3d91fde6dce6ccfc","url":"./tags/Spider/index.html"},{"revision":"0e1570764678385cc62a574ab8b6158e","url":"./tags/TestRace/index.html"},{"revision":"d4ab60aba1354dc4438ee5a64b56889e","url":"./tags/Valine/index.html"},{"revision":"1f07e58c5ad8c065d79d774ca4cbc85c","url":"./tags/Vercel/index.html"},{"revision":"80118b98b49fcf07534e1f21c460d557","url":"./tags/WordCloud/index.html"},{"revision":"4586472d4079c742535bfc37de3f337b","url":"./tags/宝塔/index.html"}],{
    directoryIndex: null
});

workbox.precaching.cleanupOutdatedCaches();

// Images
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Fonts
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Google Fonts
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Static Libraries
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

workbox.googleAnalytics.initialize();