if (!self.define) {
	let e,
		a = {};
	const s = (s, i) => (
		(s = new URL(s + '.js', i).href),
		a[s] ||
			new Promise(a => {
				if ('document' in self) {
					const e = document.createElement('script');
					(e.src = s), (e.onload = a), document.head.appendChild(e);
				} else (e = s), importScripts(s), a();
			}).then(() => {
				let e = a[s];
				if (!e) throw new Error(`Module ${s} didn’t register its module`);
				return e;
			})
	);
	self.define = (i, c) => {
		const n = e || ('document' in self ? document.currentScript.src : '') || location.href;
		if (a[n]) return;
		let t = {};
		const d = e => s(e, n),
			r = { module: { uri: n }, exports: t, require: d };
		a[n] = Promise.all(i.map(e => r[e] || d(e))).then(e => (c(...e), t));
	};
}
define(['./workbox-9b4d2a02'], function (e) {
	'use strict';
	importScripts('worker-74EdFGTC67jC6k4cdK76V.js'),
		self.skipWaiting(),
		e.clientsClaim(),
		e.precacheAndRoute(
			[
				{ url: '/_next/static/chunks/250-815efb4bc43fb6a8.js', revision: '74EdFGTC67jC6k4cdK76V' },
				{ url: '/_next/static/chunks/253-be3fcb15ca1c4d79.js', revision: '74EdFGTC67jC6k4cdK76V' },
				{ url: '/_next/static/chunks/448-932659b38637ff7d.js', revision: '74EdFGTC67jC6k4cdK76V' },
				{ url: '/_next/static/chunks/529-b18b7260daa4f209.js', revision: '74EdFGTC67jC6k4cdK76V' },
				{ url: '/_next/static/chunks/55-4545ae7e2549dc5f.js', revision: '74EdFGTC67jC6k4cdK76V' },
				{ url: '/_next/static/chunks/630-371d8c9cb52aec35.js', revision: '74EdFGTC67jC6k4cdK76V' },
				{ url: '/_next/static/chunks/749-113c2c14d8af7f5d.js', revision: '74EdFGTC67jC6k4cdK76V' },
				{ url: '/_next/static/chunks/782-4dea0fe1ad489fca.js', revision: '74EdFGTC67jC6k4cdK76V' },
				{ url: '/_next/static/chunks/785-5fa1ba5eaabe2571.js', revision: '74EdFGTC67jC6k4cdK76V' },
				{ url: '/_next/static/chunks/938-402df33c1764a267.js', revision: '74EdFGTC67jC6k4cdK76V' },
				{ url: '/_next/static/chunks/969-370813671b93fa29.js', revision: '74EdFGTC67jC6k4cdK76V' },
				{
					url: '/_next/static/chunks/app/(private)/album/%5BalbumId%5D/diary/%5BdiaryId%5D/page-52fc2a8f50dfd375.js',
					revision: '74EdFGTC67jC6k4cdK76V',
				},
				{
					url: '/_next/static/chunks/app/(private)/album/%5BalbumId%5D/diary/page-043715fc8b2d724d.js',
					revision: '74EdFGTC67jC6k4cdK76V',
				},
				{
					url: '/_next/static/chunks/app/(private)/album/%5BalbumId%5D/page-85e5c4a8fed763dd.js',
					revision: '74EdFGTC67jC6k4cdK76V',
				},
				{
					url: '/_next/static/chunks/app/(private)/album/page-42b142bca24e2830.js',
					revision: '74EdFGTC67jC6k4cdK76V',
				},
				{
					url: '/_next/static/chunks/app/(private)/diary/page-051ec82486ff0cc3.js',
					revision: '74EdFGTC67jC6k4cdK76V',
				},
				{
					url: '/_next/static/chunks/app/(private)/layout-5c4182441f6e8ccf.js',
					revision: '74EdFGTC67jC6k4cdK76V',
				},
				{
					url: '/_next/static/chunks/app/(private)/mypage/page-299d33d740b39da5.js',
					revision: '74EdFGTC67jC6k4cdK76V',
				},
				{
					url: '/_next/static/chunks/app/(private)/search/diary/%5Bid%5D/page-70e0c96e215c62da.js',
					revision: '74EdFGTC67jC6k4cdK76V',
				},
				{
					url: '/_next/static/chunks/app/(private)/search/page-0565490760180386.js',
					revision: '74EdFGTC67jC6k4cdK76V',
				},
				{
					url: '/_next/static/chunks/app/(public)/auth/login/callback/page-c8ce912098588e26.js',
					revision: '74EdFGTC67jC6k4cdK76V',
				},
				{
					url: '/_next/static/chunks/app/(public)/auth/login/page-26e8c672701f78f3.js',
					revision: '74EdFGTC67jC6k4cdK76V',
				},
				{
					url: '/_next/static/chunks/app/(public)/auth/register/page-534a7186643de3c9.js',
					revision: '74EdFGTC67jC6k4cdK76V',
				},
				{
					url: '/_next/static/chunks/app/(public)/layout-4b05b6bf583e0466.js',
					revision: '74EdFGTC67jC6k4cdK76V',
				},
				{
					url: '/_next/static/chunks/app/_not-found-f64872c1e0431aa3.js',
					revision: '74EdFGTC67jC6k4cdK76V',
				},
				{
					url: '/_next/static/chunks/app/layout-8e21beb8131baab0.js',
					revision: '74EdFGTC67jC6k4cdK76V',
				},
				{
					url: '/_next/static/chunks/app/page-de4f012c2c06481f.js',
					revision: '74EdFGTC67jC6k4cdK76V',
				},
				{
					url: '/_next/static/chunks/fd9d1056-3ab72051547edebc.js',
					revision: '74EdFGTC67jC6k4cdK76V',
				},
				{
					url: '/_next/static/chunks/framework-c5181c9431ddc45b.js',
					revision: '74EdFGTC67jC6k4cdK76V',
				},
				{ url: '/_next/static/chunks/main-aa2eda1aaf995986.js', revision: '74EdFGTC67jC6k4cdK76V' },
				{
					url: '/_next/static/chunks/main-app-c0b1d86d4eb10240.js',
					revision: '74EdFGTC67jC6k4cdK76V',
				},
				{
					url: '/_next/static/chunks/pages/_app-98cb51ec6f9f135f.js',
					revision: '74EdFGTC67jC6k4cdK76V',
				},
				{
					url: '/_next/static/chunks/pages/_error-e87e5963ec1b8011.js',
					revision: '74EdFGTC67jC6k4cdK76V',
				},
				{
					url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
					revision: '837c0df77fd5009c9e46d446188ecfd0',
				},
				{
					url: '/_next/static/chunks/webpack-c664e1ee15ad12bb.js',
					revision: '74EdFGTC67jC6k4cdK76V',
				},
				{ url: '/_next/static/css/1527cfdab2ade1ee.css', revision: '1527cfdab2ade1ee' },
				{ url: '/_next/static/css/185608f87470e87b.css', revision: '185608f87470e87b' },
				{ url: '/_next/static/css/1f3bff70f60d9608.css', revision: '1f3bff70f60d9608' },
				{ url: '/_next/static/css/4758561debaae556.css', revision: '4758561debaae556' },
				{ url: '/_next/static/css/4f7940561042f47e.css', revision: '4f7940561042f47e' },
				{ url: '/_next/static/css/732cf4e2f6458ba7.css', revision: '732cf4e2f6458ba7' },
				{ url: '/_next/static/css/74ae609018c0dde1.css', revision: '74ae609018c0dde1' },
				{ url: '/_next/static/css/9cb66e636be6f0ba.css', revision: '9cb66e636be6f0ba' },
				{ url: '/_next/static/css/e9b94a5abd576885.css', revision: 'e9b94a5abd576885' },
				{ url: '/_next/static/css/f38db6192fa773a7.css', revision: 'f38db6192fa773a7' },
				{ url: '/_next/static/css/f5b9eb34a5328fef.css', revision: 'f5b9eb34a5328fef' },
				{
					url: '/_next/static/media/05a31a2ca4975f99-s.woff2',
					revision: 'f1b44860c66554b91f3b1c81556f73ca',
				},
				{
					url: '/_next/static/media/513657b02c5c193f-s.woff2',
					revision: 'c4eb7f37bc4206c901ab08601f21f0f2',
				},
				{
					url: '/_next/static/media/51ed15f9841b9f9d-s.woff2',
					revision: 'bb9d99fb9bbc695be80777ca2c1c2bee',
				},
				{
					url: '/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2',
					revision: '74c3556b9dad12fb76f84af53ba69410',
				},
				{
					url: '/_next/static/media/d6b16ce4a6175f26-s.woff2',
					revision: 'dd930bafc6297347be3213f22cc53d3e',
				},
				{
					url: '/_next/static/media/ec159349637c90ad-s.woff2',
					revision: '0e89df9522084290e01e4127495fae99',
				},
				{
					url: '/_next/static/media/fd4db3eb5472fc27-s.woff2',
					revision: '71f3fcaf22131c3368d9ec28ef839831',
				},
				{
					url: '/_next/static/media/loginStar.dbf00fff.png',
					revision: '87d2f9e8ec9ee1e0f908738481f4b148',
				},
				{
					url: '/font/Pretendard/Pretendard-Black.woff',
					revision: 'ffac9e667a7d8415953e5982a9ab1d51',
				},
				{
					url: '/font/Pretendard/Pretendard-Bold.woff',
					revision: 'bd94b933c6839371baa27f7950ef3784',
				},
				{
					url: '/font/Pretendard/Pretendard-ExtraBold.woff',
					revision: 'b065213da09db107d456c842bcff59ad',
				},
				{
					url: '/font/Pretendard/Pretendard-ExtraLight.woff',
					revision: 'a8765fcee2563360f3f8117835300c3d',
				},
				{
					url: '/font/Pretendard/Pretendard-Light.woff',
					revision: '0fcba49d32bb9e4b3738d28bedb1bdd2',
				},
				{
					url: '/font/Pretendard/Pretendard-Medium.woff',
					revision: '4750a6d12c26201887eee28ae55ed037',
				},
				{
					url: '/font/Pretendard/Pretendard-Regular.woff',
					revision: 'f897fa3ff216e4be74648184144780b1',
				},
				{
					url: '/font/Pretendard/Pretendard-SemiBold.woff',
					revision: 'e02072832a9d8ef22f3d1d08bb917f9d',
				},
				{
					url: '/font/Pretendard/Pretendard-Thin.woff',
					revision: 'bf79f0289a1950ddb6cbca0c709b77df',
				},
				{ url: '/font/Roboto/LICENSE.txt', revision: 'd273d63619c9aeaf15cdaf76422c4f87' },
				{ url: '/font/Roboto/Roboto-Medium.woff', revision: '803b7154bbae37008e91c97c501dca70' },
				{ url: '/image/Lee.png', revision: '32bd89310564ebdfd81a9333ffc18601' },
				{ url: '/image/Park.png', revision: '55192d82b773513b5043274730fd70ae' },
				{ url: '/image/Shin.png', revision: '488d3d327d65012d50cacc0c1c4a7494' },
				{ url: '/image/background-image.png', revision: 'd0f7ac680038ff55b41efe70868ecfb5' },
				{ url: '/image/default-image-00.png', revision: '0c8751ad28f45de998a3356b4d33b330' },
				{ url: '/image/default-image-01.png', revision: 'ee93a2e40e6d64d06392ee2d144b69fd' },
				{ url: '/image/default-image-02.png', revision: '767ff18945b15a4d9c5ba7939250f5ce' },
				{ url: '/image/default-image-03.png', revision: '029d3fd05dbc6be85a53872f828f0162' },
				{ url: '/image/default-image-04.png', revision: 'db0e62e478f4f19d2f88f68ace6862e0' },
				{ url: '/image/default-image-05.png', revision: 'b1571288ba2c160f2b614d4e67d4ee3e' },
				{ url: '/image/default-image-06.png', revision: 'b845b5865db707e9138544586a8ff675' },
				{ url: '/image/default-image-07.png', revision: '63896b1616666e788dce960333624836' },
				{ url: '/image/default-image-08.png', revision: '52009bd8a298e3aa6bb82c8cee32075d' },
				{ url: '/image/default-image-09.png', revision: '55786e787ac841b04ca609d38c6e6a98' },
				{ url: '/image/default-profile-image.png', revision: '323e4c81656f4694aab25262cfebb9d6' },
				{ url: '/image/icon-192.png', revision: '7d20225155c11d5be75ec54cd340a012' },
				{ url: '/image/icon-512.png', revision: '3b3ce2f6ef84b6d76ac520075732f67d' },
				{ url: '/image/loginStar.png', revision: '87d2f9e8ec9ee1e0f908738481f4b148' },
				{ url: '/image/test-image-00.png', revision: 'f37fb6975fd8d23fd990d640e0a2cada' },
				{ url: '/image/test-image-01.png', revision: '2b613fefd8799bb97d81588cde1497cd' },
				{ url: '/image/twinkleStar.png', revision: 'd282894e3062c6bf3b0a22bf6aac5e34' },
				{ url: '/image/you-know-what.png', revision: '02157a3ecb7855d0d2289a39d4aa0373' },
				{ url: '/manifest.webmanifest', revision: '49b11e00dd8feb50a7c2fc9675dc2811' },
				{ url: '/svg/chatBot1.svg', revision: '8e429a1c5e9df43ef4a35a13d02b6273' },
				{ url: '/svg/chatBot2.svg', revision: '14f95e2d3255b94ba26c0eb237550a18' },
				{ url: '/svg/chatBot3.svg', revision: '037b42a0b4f9e2356379f7a17be67853' },
				{ url: '/svg/chatBot4.svg', revision: 'f898aacbc44cf942e129b81b38432fc0' },
				{ url: '/svg/float1.svg', revision: '169978d30ce3113b0a98cb22271ce6c9' },
				{ url: '/svg/float2.svg', revision: 'b4129e2b646f02cc00079d118482770b' },
				{ url: '/svg/float3.svg', revision: 'e2ed8a4ec64aab63443c6e474e386796' },
				{ url: '/svg/float4.svg', revision: '7408f979d07d3d950c0c9ef0eaaa3af3' },
				{ url: '/svg/float5.svg', revision: '07dbf5806ec3052a94c334a65416784d' },
				{ url: '/svg/float6.svg', revision: '72419d82eb5ca461a6d8a8110c309ac7' },
				{ url: '/svg/heart.svg', revision: 'fa18e1653f949c3ac09db447c9fd1805' },
				{ url: '/svg/mic.svg', revision: '99d7278441f3de67a4b61d84f4d3b5ee' },
				{ url: '/svg/micWave1.svg', revision: '366b2d2304051f0db7e0b64f85caa52e' },
				{ url: '/svg/micWave2.svg', revision: 'a863374ae84dca2a852abb7f20c5d69d' },
				{ url: '/svg/micWave3.svg', revision: '14a7a18dd8e97f65aa8f6584321cfccd' },
				{ url: '/svg/next.svg', revision: '8e061864f388b47f33a1c3780831193e' },
				{ url: '/svg/vercel.svg', revision: '61c6b19abff40ea7acd577be818f3976' },
			],
			{ ignoreURLParametersMatching: [] },
		),
		e.cleanupOutdatedCaches(),
		e.registerRoute(
			'/',
			new e.NetworkFirst({
				cacheName: 'start-url',
				plugins: [
					{
						cacheWillUpdate: async ({ request: e, response: a, event: s, state: i }) =>
							a && 'opaqueredirect' === a.type
								? new Response(a.body, { status: 200, statusText: 'OK', headers: a.headers })
								: a,
					},
				],
			}),
			'GET',
		),
		e.registerRoute(
			/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
			new e.CacheFirst({
				cacheName: 'google-fonts-webfonts',
				plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
			}),
			'GET',
		),
		e.registerRoute(
			/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
			new e.StaleWhileRevalidate({
				cacheName: 'google-fonts-stylesheets',
				plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
			}),
			'GET',
		),
		e.registerRoute(
			/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-font-assets',
				plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
			}),
			'GET',
		),
		e.registerRoute(
			/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-image-assets',
				plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
			}),
			'GET',
		),
		e.registerRoute(
			/\/_next\/image\?url=.+$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'next-image',
				plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
			}),
			'GET',
		),
		e.registerRoute(
			/\.(?:mp3|wav|ogg)$/i,
			new e.CacheFirst({
				cacheName: 'static-audio-assets',
				plugins: [
					new e.RangeRequestsPlugin(),
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET',
		),
		e.registerRoute(
			/\.(?:mp4)$/i,
			new e.CacheFirst({
				cacheName: 'static-video-assets',
				plugins: [
					new e.RangeRequestsPlugin(),
					new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
				],
			}),
			'GET',
		),
		e.registerRoute(
			/\.(?:js)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-js-assets',
				plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
			}),
			'GET',
		),
		e.registerRoute(
			/\.(?:css|less)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-style-assets',
				plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
			}),
			'GET',
		),
		e.registerRoute(
			/\/_next\/data\/.+\/.+\.json$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'next-data',
				plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
			}),
			'GET',
		),
		e.registerRoute(
			/\.(?:json|xml|csv)$/i,
			new e.NetworkFirst({
				cacheName: 'static-data-assets',
				plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
			}),
			'GET',
		),
		e.registerRoute(
			({ url: e }) => {
				if (!(self.origin === e.origin)) return !1;
				const a = e.pathname;
				return !a.startsWith('/api/auth/') && !!a.startsWith('/api/');
			},
			new e.NetworkFirst({
				cacheName: 'apis',
				networkTimeoutSeconds: 10,
				plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
			}),
			'GET',
		),
		e.registerRoute(
			({ url: e }) => {
				if (!(self.origin === e.origin)) return !1;
				return !e.pathname.startsWith('/api/');
			},
			new e.NetworkFirst({
				cacheName: 'others',
				networkTimeoutSeconds: 10,
				plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
			}),
			'GET',
		),
		e.registerRoute(
			({ url: e }) => !(self.origin === e.origin),
			new e.NetworkFirst({
				cacheName: 'cross-origin',
				networkTimeoutSeconds: 10,
				plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
			}),
			'GET',
		);
});
