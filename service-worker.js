"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/This-Is-Me-old/index.html","2d7952e87e0c62f783561e3bb0b3f895"],["/This-Is-Me-old/static/css/main.4861c4a8.css","2068c8697c13dc823275e7e89bd6a1c2"],["/This-Is-Me-old/static/js/main.8d2968ca.js","9892b88d04d86f2b988b72b4d393ce29"],["/This-Is-Me-old/static/media/1.0083470a.jpg","0083470ab6eefb15491c52d10bb94098"],["/This-Is-Me-old/static/media/Avenir-Book.6b414da3.ttf","6b414da3a1720c4f383496b0ab088e13"],["/This-Is-Me-old/static/media/d-1.4805bf44.jpg","4805bf44cda46efa9d0d4ace5f5b537a"],["/This-Is-Me-old/static/media/d-2.5c80cabc.jpg","5c80cabca0ed325b87bb7dc61a9d676d"],["/This-Is-Me-old/static/media/d-3.0ac95cec.jpg","0ac95cec3d1c2087278f11d921813c70"],["/This-Is-Me-old/static/media/d-4.cfafaec0.jpg","cfafaec0ff278a65d5f5cb96d9a8fd00"],["/This-Is-Me-old/static/media/d-5.bbac3863.jpg","bbac3863643dad72ee39bb6576615828"],["/This-Is-Me-old/static/media/d-6.59354c18.jpg","59354c18b3197da11ac94d4781241298"],["/This-Is-Me-old/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/This-Is-Me-old/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/This-Is-Me-old/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/This-Is-Me-old/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/This-Is-Me-old/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/This-Is-Me-old/static/media/pp.71a697e1.jpg","71a697e154d4e32d1d00f4694bcb9db0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var s=new URL(e);return n&&s.pathname.match(n)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),s=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/This-Is-Me-old/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});