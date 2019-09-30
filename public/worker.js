const CACHE_NAME = 'PWA-Calculator';
const urlsToCache = [
	'index.html',
	'/',
	'/basic',
	'/advanced',
	'/ultimate',
	'/options'
];

// Install a service worker
// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', event => {
	// Perform install steps
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then(function(cache) {
				return cache.addAll(urlsToCache);
			})
	);
});

// Cache and return requests
// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request)
			.then(function(response) {
					// Cache hit - return response
					if (response) {
						return response;
					}
					return fetch(event.request);
				}
			)
	);
});

// Update a service worker
// eslint-disable-next-line no-restricted-globals
self.addEventListener('activate', event => {
	const cacheWhitelist = ['PWA-Calculator'];
	event.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(
				// eslint-disable-next-line array-callback-return
				cacheNames.map(cacheName => {
					if (cacheWhitelist.indexOf(cacheName) === -1) {
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});