 importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
if (workbox)
{
  console.log(`Workbox berhasil dimuat`)
}
else
{
  console.log(`Workbox gagal dimuat`)
}
workbox.precaching.precacheAndRoute([
   '/assets/css/DetailTeam.css',
  '/assets/css/materialize.min.css',
  '/assets/css/style.css',
  '/assets/js/api.js',
  '/assets/js/apiDetail.js',
  '/assets/js/materialize.min.js',
  '/assets/js/script.js',
  '/assets/js/db.js',
  '/assets/js/idb.js',
  '/assets/font/Poppins-ExtraLight.ttf',
'/assets/img/home.png',
 '/assets/img/logo.png',
 '/assets/img/404.png',
 '/assets/img/icon.png',
 'https://fonts.googleapis.com/icon?family=Material+Icons',
 {url:'/index.html',revision:'3'},
 {url:'/nav.html',revision:'3'},
 {url:'/navbottom.html',revision:'3'},
 {url:'/Detail.html',revision:'3'},
 {url:'/DetailTeam.html',revision:'3'},
 {url:'/manifest.json',revision:'3'},
  ], {
  ignoreUrlParametersMatching: [/.*/]
})
workbox.routing.registerRoute(
new RegExp('/pages'),
workbox.strategies.staleWhileRevalidate({
  cacheName:'pages',
  plugins:[
  new workbox.cacheableResponse.Plugin({
    maxEntries:60,
    maxAgeSeconds: 30 * 24 * 60 * 60
  }),
  ],
}),
  )
workbox.routing.registerRoute(
new RegExp('/'),
workbox.strategies.staleWhileRevalidate({
  cacheName:'fullpages',
  plugins:[
  new workbox.cacheableResponse.Plugin({
    maxEntries:60,
    maxAgeSeconds: 30 * 24 * 60 * 60
  }),
  ],
}),
  )
workbox.routing.registerRoute(
  /^https:\/\/api\.football-data\.org/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'data',
     plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 hari
      }),
    ],
  })
);
workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 hari
      }),
    ],
  }),
);

self.addEventListener('push', function(event) {
  var body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  var options = {
    body: body,
    icon: 'assets/img/logo.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});
