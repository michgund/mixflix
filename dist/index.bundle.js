(self["webpackChunkmixflix"] = self["webpackChunkmixflix"] || []).push([["index"],{

/***/ "./apikey.js":
/*!*******************!*\
  !*** ./apikey.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_KEY: () => (/* binding */ API_KEY),
/* harmony export */   APP_ID: () => (/* binding */ APP_ID)
/* harmony export */ });
const APP_ID = "78Y2ZA7VMI";
const API_KEY = "974f01e5ce045d4406a7f69d3b03d35d";




/***/ }),

/***/ "./node_modules/algoliasearch/dist/algoliasearch.umd.js":
/*!**************************************************************!*\
  !*** ./node_modules/algoliasearch/dist/algoliasearch.umd.js ***!
  \**************************************************************/
/***/ (function(module) {

/*! algoliasearch.umd.js | 4.23.3 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */
!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";function t(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function e(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function r(r){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?e(Object(a),!0).forEach((function(e){t(r,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):e(Object(a)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(a,t))}))}return r}function n(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){a=!0,o=t}finally{try{n||null==u.return||u.return()}finally{if(a)throw o}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(t){var e,r="algoliasearch-client-js-".concat(t.key),n=function(){return void 0===e&&(e=t.localStorage||window.localStorage),e},o=function(){return JSON.parse(n().getItem(r)||"{}")},i=function(t){n().setItem(r,JSON.stringify(t))},u=function(){var e=t.timeToLive?1e3*t.timeToLive:null,r=o(),n=Object.fromEntries(Object.entries(r).filter((function(t){return void 0!==a(t,2)[1].timestamp})));if(i(n),e){var u=Object.fromEntries(Object.entries(n).filter((function(t){var r=a(t,2)[1],n=(new Date).getTime();return!(r.timestamp+e<n)})));i(u)}};return{get:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return Promise.resolve().then((function(){u();var e=JSON.stringify(t);return o()[e]})).then((function(t){return Promise.all([t?t.value:e(),void 0!==t])})).then((function(t){var e=a(t,2),n=e[0],o=e[1];return Promise.all([n,o||r.miss(n)])})).then((function(t){return a(t,1)[0]}))},set:function(t,e){return Promise.resolve().then((function(){var a=o();return a[JSON.stringify(t)]={timestamp:(new Date).getTime(),value:e},n().setItem(r,JSON.stringify(a)),e}))},delete:function(t){return Promise.resolve().then((function(){var e=o();delete e[JSON.stringify(t)],n().setItem(r,JSON.stringify(e))}))},clear:function(){return Promise.resolve().then((function(){n().removeItem(r)}))}}}function u(t){var e=o(t.caches),r=e.shift();return void 0===r?{get:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}},n=e();return n.then((function(t){return Promise.all([t,r.miss(t)])})).then((function(t){return a(t,1)[0]}))},set:function(t,e){return Promise.resolve(e)},delete:function(t){return Promise.resolve()},clear:function(){return Promise.resolve()}}:{get:function(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return r.get(t,n,a).catch((function(){return u({caches:e}).get(t,n,a)}))},set:function(t,n){return r.set(t,n).catch((function(){return u({caches:e}).set(t,n)}))},delete:function(t){return r.delete(t).catch((function(){return u({caches:e}).delete(t)}))},clear:function(){return r.clear().catch((function(){return u({caches:e}).clear()}))}}}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{serializable:!0},e={};return{get:function(r,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}},o=JSON.stringify(r);if(o in e)return Promise.resolve(t.serializable?JSON.parse(e[o]):e[o]);var i=n(),u=a&&a.miss||function(){return Promise.resolve()};return i.then((function(t){return u(t)})).then((function(){return i}))},set:function(r,n){return e[JSON.stringify(r)]=t.serializable?JSON.stringify(n):n,Promise.resolve(n)},delete:function(t){return delete e[JSON.stringify(t)],Promise.resolve()},clear:function(){return e={},Promise.resolve()}}}function c(t,e,r){var n={"x-algolia-api-key":r,"x-algolia-application-id":e};return{headers:function(){return t===m.WithinHeaders?n:{}},queryParameters:function(){return t===m.WithinQueryParameters?n:{}}}}function f(t){var e=0;return t((function r(){return e++,new Promise((function(n){setTimeout((function(){n(t(r))}),Math.min(100*e,1e3))}))}))}function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(t,e){return Promise.resolve()};return Object.assign(t,{wait:function(r){return d(t.then((function(t){return Promise.all([e(t,r),t])})).then((function(t){return t[1]})))}})}function l(t){for(var e=t.length-1;e>0;e--){var r=Math.floor(Math.random()*(e+1)),n=t[e];t[e]=t[r],t[r]=n}return t}function h(t,e){return e?(Object.keys(e).forEach((function(r){t[r]=e[r](t)})),t):t}function p(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var a=0;return t.replace(/%s/g,(function(){return encodeURIComponent(r[a++])}))}var m={WithinQueryParameters:0,WithinHeaders:1};function y(t,e){var r=t||{},n=r.data||{};return Object.keys(r).forEach((function(t){-1===["timeout","headers","queryParameters","data","cacheable"].indexOf(t)&&(n[t]=r[t])})),{data:Object.entries(n).length>0?n:void 0,timeout:r.timeout||e,headers:r.headers||{},queryParameters:r.queryParameters||{},cacheable:r.cacheable}}var g={Read:1,Write:2,Any:3},v=1,b=2,P=3;function O(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v;return r(r({},t),{},{status:e,lastUpdate:Date.now()})}function w(t){return"string"==typeof t?{protocol:"https",url:t,accept:g.Any}:{protocol:t.protocol||"https",url:t.url,accept:t.accept||g.Any}}var I="DELETE",x="GET",j="POST",D="PUT";function q(t,e){return Promise.all(e.map((function(e){return t.get(e,(function(){return Promise.resolve(O(e))}))}))).then((function(t){var r=t.filter((function(t){return function(t){return t.status===v||Date.now()-t.lastUpdate>12e4}(t)})),n=t.filter((function(t){return function(t){return t.status===P&&Date.now()-t.lastUpdate<=12e4}(t)})),a=[].concat(o(r),o(n));return{getTimeout:function(t,e){return(0===n.length&&0===t?1:n.length+3+t)*e},statelessHosts:a.length>0?a.map((function(t){return w(t)})):e}}))}function k(t,e,n,a){var i=[],u=function(t,e){if(t.method===x||void 0===t.data&&void 0===e.data)return;var n=Array.isArray(t.data)?t.data:r(r({},t.data),e.data);return JSON.stringify(n)}(n,a),s=function(t,e){var n=r(r({},t.headers),e.headers),a={};return Object.keys(n).forEach((function(t){var e=n[t];a[t.toLowerCase()]=e})),a}(t,a),c=n.method,f=n.method!==x?{}:r(r({},n.data),a.data),d=r(r(r({"x-algolia-agent":t.userAgent.value},t.queryParameters),f),a.queryParameters),l=0,h=function e(r,o){var f=r.pop();if(void 0===f)throw{name:"RetryError",message:"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",transporterStackTrace:E(i)};var h={data:u,headers:s,method:c,url:N(f,n.path,d),connectTimeout:o(l,t.timeouts.connect),responseTimeout:o(l,a.timeout)},p=function(t){var e={request:h,response:t,host:f,triesLeft:r.length};return i.push(e),e},m={onSuccess:function(t){return function(t){try{return JSON.parse(t.content)}catch(e){throw function(t,e){return{name:"DeserializationError",message:t,response:e}}(e.message,t)}}(t)},onRetry:function(n){var a=p(n);return n.isTimedOut&&l++,Promise.all([t.logger.info("Retryable failure",A(a)),t.hostsCache.set(f,O(f,n.isTimedOut?P:b))]).then((function(){return e(r,o)}))},onFail:function(t){throw p(t),function(t,e){var r=t.content,n=t.status,a=r;try{a=JSON.parse(r).message}catch(t){}return function(t,e,r){return{name:"ApiError",message:t,status:e,transporterStackTrace:r}}(a,n,e)}(t,E(i))}};return t.requester.send(h).then((function(t){return function(t,e){return function(t){var e=t.status;return t.isTimedOut||function(t){var e=t.isTimedOut,r=t.status;return!e&&0==~~r}(t)||2!=~~(e/100)&&4!=~~(e/100)}(t)?e.onRetry(t):2==~~(t.status/100)?e.onSuccess(t):e.onFail(t)}(t,m)}))};return q(t.hostsCache,e).then((function(t){return h(o(t.statelessHosts).reverse(),t.getTimeout)}))}function S(t){var e=t.hostsCache,r=t.logger,n=t.requester,o=t.requestsCache,i=t.responsesCache,u=t.timeouts,s=t.userAgent,c=t.hosts,f=t.queryParameters,d={hostsCache:e,logger:r,requester:n,requestsCache:o,responsesCache:i,timeouts:u,userAgent:s,headers:t.headers,queryParameters:f,hosts:c.map((function(t){return w(t)})),read:function(t,e){var r=y(e,d.timeouts.read),n=function(){return k(d,d.hosts.filter((function(t){return 0!=(t.accept&g.Read)})),t,r)};if(!0!==(void 0!==r.cacheable?r.cacheable:t.cacheable))return n();var o={request:t,mappedRequestOptions:r,transporter:{queryParameters:d.queryParameters,headers:d.headers}};return d.responsesCache.get(o,(function(){return d.requestsCache.get(o,(function(){return d.requestsCache.set(o,n()).then((function(t){return Promise.all([d.requestsCache.delete(o),t])}),(function(t){return Promise.all([d.requestsCache.delete(o),Promise.reject(t)])})).then((function(t){var e=a(t,2);e[0];return e[1]}))}))}),{miss:function(t){return d.responsesCache.set(o,t)}})},write:function(t,e){return k(d,d.hosts.filter((function(t){return 0!=(t.accept&g.Write)})),t,y(e,d.timeouts.write))}};return d}function T(t){var e={value:"Algolia for JavaScript (".concat(t,")"),add:function(t){var r="; ".concat(t.segment).concat(void 0!==t.version?" (".concat(t.version,")"):"");return-1===e.value.indexOf(r)&&(e.value="".concat(e.value).concat(r)),e}};return e}function N(t,e,r){var n=R(r),a="".concat(t.protocol,"://").concat(t.url,"/").concat("/"===e.charAt(0)?e.substr(1):e);return n.length&&(a+="?".concat(n)),a}function R(t){return Object.keys(t).map((function(e){return p("%s=%s",e,(r=t[e],"[object Object]"===Object.prototype.toString.call(r)||"[object Array]"===Object.prototype.toString.call(r)?JSON.stringify(t[e]):t[e]));var r})).join("&")}function E(t){return t.map((function(t){return A(t)}))}function A(t){var e=t.request.headers["x-algolia-api-key"]?{"x-algolia-api-key":"*****"}:{};return r(r({},t),{},{request:r(r({},t.request),{},{headers:r(r({},t.request.headers),e)})})}var C=function(t){return function(e,r){return t.transporter.write({method:j,path:"2/abtests",data:e},r)}},U=function(t){return function(e,r){return t.transporter.write({method:I,path:p("2/abtests/%s",e)},r)}},z=function(t){return function(e,r){return t.transporter.read({method:x,path:p("2/abtests/%s",e)},r)}},J=function(t){return function(e){return t.transporter.read({method:x,path:"2/abtests"},e)}},F=function(t){return function(e,r){return t.transporter.write({method:j,path:p("2/abtests/%s/stop",e)},r)}},H=function(t){return function(e){return t.transporter.read({method:x,path:"1/strategies/personalization"},e)}},M=function(t){return function(e,r){return t.transporter.write({method:j,path:"1/strategies/personalization",data:e},r)}};function B(t){return function e(r){return t.request(r).then((function(n){if(void 0!==t.batch&&t.batch(n.hits),!t.shouldStop(n))return n.cursor?e({cursor:n.cursor}):e({page:(r.page||0)+1})}))}({})}var K=function(t){return function(e,a){var o=a||{},i=o.queryParameters,u=n(o,["queryParameters"]),s=r({acl:e},void 0!==i?{queryParameters:i}:{});return d(t.transporter.write({method:j,path:"1/keys",data:s},u),(function(e,r){return f((function(n){return tt(t)(e.key,r).catch((function(t){if(404!==t.status)throw t;return n()}))}))}))}},W=function(t){return function(e,r,n){var a=y(n);return a.queryParameters["X-Algolia-User-ID"]=e,t.transporter.write({method:j,path:"1/clusters/mapping",data:{cluster:r}},a)}},L=function(t){return function(e,r,n){return t.transporter.write({method:j,path:"1/clusters/mapping/batch",data:{users:e,cluster:r}},n)}},Q=function(t){return function(e,r){return d(t.transporter.write({method:j,path:p("/1/dictionaries/%s/batch",e),data:{clearExistingDictionaryEntries:!0,requests:{action:"addEntry",body:[]}}},r),(function(e,r){return jt(t)(e.taskID,r)}))}},G=function(t){return function(e,r,n){return d(t.transporter.write({method:j,path:p("1/indexes/%s/operation",e),data:{operation:"copy",destination:r}},n),(function(r,n){return ut(t)(e,{methods:{waitTask:de}}).waitTask(r.taskID,n)}))}},V=function(t){return function(e,n,a){return G(t)(e,n,r(r({},a),{},{scope:[he.Rules]}))}},_=function(t){return function(e,n,a){return G(t)(e,n,r(r({},a),{},{scope:[he.Settings]}))}},X=function(t){return function(e,n,a){return G(t)(e,n,r(r({},a),{},{scope:[he.Synonyms]}))}},Y=function(t){return function(e,r){return e.method===x?t.transporter.read(e,r):t.transporter.write(e,r)}},Z=function(t){return function(e,r){return d(t.transporter.write({method:I,path:p("1/keys/%s",e)},r),(function(r,n){return f((function(r){return tt(t)(e,n).then(r).catch((function(t){if(404!==t.status)throw t}))}))}))}},$=function(t){return function(e,r,n){var a=r.map((function(t){return{action:"deleteEntry",body:{objectID:t}}}));return d(t.transporter.write({method:j,path:p("/1/dictionaries/%s/batch",e),data:{clearExistingDictionaryEntries:!1,requests:a}},n),(function(e,r){return jt(t)(e.taskID,r)}))}},tt=function(t){return function(e,r){return t.transporter.read({method:x,path:p("1/keys/%s",e)},r)}},et=function(t){return function(e,r){return t.transporter.read({method:x,path:p("1/task/%s",e.toString())},r)}},rt=function(t){return function(e){return t.transporter.read({method:x,path:"/1/dictionaries/*/settings"},e)}},nt=function(t){return function(e){return t.transporter.read({method:x,path:"1/logs"},e)}},at=function(t){return function(e){return t.transporter.read({method:x,path:"1/clusters/mapping/top"},e)}},ot=function(t){return function(e,r){return t.transporter.read({method:x,path:p("1/clusters/mapping/%s",e)},r)}},it=function(t){return function(e){var r=e||{},a=r.retrieveMappings,o=n(r,["retrieveMappings"]);return!0===a&&(o.getClusters=!0),t.transporter.read({method:x,path:"1/clusters/mapping/pending"},o)}},ut=function(t){return function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={transporter:t.transporter,appId:t.appId,indexName:e};return h(n,r.methods)}},st=function(t){return function(e){return t.transporter.read({method:x,path:"1/keys"},e)}},ct=function(t){return function(e){return t.transporter.read({method:x,path:"1/clusters"},e)}},ft=function(t){return function(e){return t.transporter.read({method:x,path:"1/indexes"},e)}},dt=function(t){return function(e){return t.transporter.read({method:x,path:"1/clusters/mapping"},e)}},lt=function(t){return function(e,r,n){return d(t.transporter.write({method:j,path:p("1/indexes/%s/operation",e),data:{operation:"move",destination:r}},n),(function(r,n){return ut(t)(e,{methods:{waitTask:de}}).waitTask(r.taskID,n)}))}},ht=function(t){return function(e,r){return d(t.transporter.write({method:j,path:"1/indexes/*/batch",data:{requests:e}},r),(function(e,r){return Promise.all(Object.keys(e.taskID).map((function(n){return ut(t)(n,{methods:{waitTask:de}}).waitTask(e.taskID[n],r)})))}))}},pt=function(t){return function(e,r){return t.transporter.read({method:j,path:"1/indexes/*/objects",data:{requests:e}},r)}},mt=function(t){return function(e,n){var a=e.map((function(t){return r(r({},t),{},{params:R(t.params||{})})}));return t.transporter.read({method:j,path:"1/indexes/*/queries",data:{requests:a},cacheable:!0},n)}},yt=function(t){return function(e,a){return Promise.all(e.map((function(e){var o=e.params,i=o.facetName,u=o.facetQuery,s=n(o,["facetName","facetQuery"]);return ut(t)(e.indexName,{methods:{searchForFacetValues:ue}}).searchForFacetValues(i,u,r(r({},a),s))})))}},gt=function(t){return function(e,r){var n=y(r);return n.queryParameters["X-Algolia-User-ID"]=e,t.transporter.write({method:I,path:"1/clusters/mapping"},n)}},vt=function(t){return function(e,r,n){var a=r.map((function(t){return{action:"addEntry",body:t}}));return d(t.transporter.write({method:j,path:p("/1/dictionaries/%s/batch",e),data:{clearExistingDictionaryEntries:!0,requests:a}},n),(function(e,r){return jt(t)(e.taskID,r)}))}},bt=function(t){return function(e,r){return d(t.transporter.write({method:j,path:p("1/keys/%s/restore",e)},r),(function(r,n){return f((function(r){return tt(t)(e,n).catch((function(t){if(404!==t.status)throw t;return r()}))}))}))}},Pt=function(t){return function(e,r,n){var a=r.map((function(t){return{action:"addEntry",body:t}}));return d(t.transporter.write({method:j,path:p("/1/dictionaries/%s/batch",e),data:{clearExistingDictionaryEntries:!1,requests:a}},n),(function(e,r){return jt(t)(e.taskID,r)}))}},Ot=function(t){return function(e,r,n){return t.transporter.read({method:j,path:p("/1/dictionaries/%s/search",e),data:{query:r},cacheable:!0},n)}},wt=function(t){return function(e,r){return t.transporter.read({method:j,path:"1/clusters/mapping/search",data:{query:e}},r)}},It=function(t){return function(e,r){return d(t.transporter.write({method:D,path:"/1/dictionaries/*/settings",data:e},r),(function(e,r){return jt(t)(e.taskID,r)}))}},xt=function(t){return function(e,r){var a=Object.assign({},r),o=r||{},i=o.queryParameters,u=n(o,["queryParameters"]),s=i?{queryParameters:i}:{},c=["acl","indexes","referers","restrictSources","queryParameters","description","maxQueriesPerIPPerHour","maxHitsPerQuery"];return d(t.transporter.write({method:D,path:p("1/keys/%s",e),data:s},u),(function(r,n){return f((function(r){return tt(t)(e,n).then((function(t){return function(t){return Object.keys(a).filter((function(t){return-1!==c.indexOf(t)})).every((function(e){if(Array.isArray(t[e])&&Array.isArray(a[e])){var r=t[e];return r.length===a[e].length&&r.every((function(t,r){return t===a[e][r]}))}return t[e]===a[e]}))}(t)?Promise.resolve():r()}))}))}))}},jt=function(t){return function(e,r){return f((function(n){return et(t)(e,r).then((function(t){return"published"!==t.status?n():void 0}))}))}},Dt=function(t){return function(e,r){return d(t.transporter.write({method:j,path:p("1/indexes/%s/batch",t.indexName),data:{requests:e}},r),(function(e,r){return de(t)(e.taskID,r)}))}},qt=function(t){return function(e){return B(r(r({shouldStop:function(t){return void 0===t.cursor}},e),{},{request:function(r){return t.transporter.read({method:j,path:p("1/indexes/%s/browse",t.indexName),data:r},e)}}))}},kt=function(t){return function(e){var n=r({hitsPerPage:1e3},e);return B(r(r({shouldStop:function(t){return t.hits.length<n.hitsPerPage}},n),{},{request:function(e){return se(t)("",r(r({},n),e)).then((function(t){return r(r({},t),{},{hits:t.hits.map((function(t){return delete t._highlightResult,t}))})}))}}))}},St=function(t){return function(e){var n=r({hitsPerPage:1e3},e);return B(r(r({shouldStop:function(t){return t.hits.length<n.hitsPerPage}},n),{},{request:function(e){return ce(t)("",r(r({},n),e)).then((function(t){return r(r({},t),{},{hits:t.hits.map((function(t){return delete t._highlightResult,t}))})}))}}))}},Tt=function(t){return function(e,r,a){var o=a||{},i=o.batchSize,u=n(o,["batchSize"]),s={taskIDs:[],objectIDs:[]};return d(function n(){var a,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,c=[];for(a=o;a<e.length&&(c.push(e[a]),c.length!==(i||1e3));a++);return 0===c.length?Promise.resolve(s):Dt(t)(c.map((function(t){return{action:r,body:t}})),u).then((function(t){return s.objectIDs=s.objectIDs.concat(t.objectIDs),s.taskIDs.push(t.taskID),a++,n(a)}))}(),(function(e,r){return Promise.all(e.taskIDs.map((function(e){return de(t)(e,r)})))}))}},Nt=function(t){return function(e){return d(t.transporter.write({method:j,path:p("1/indexes/%s/clear",t.indexName)},e),(function(e,r){return de(t)(e.taskID,r)}))}},Rt=function(t){return function(e){var r=e||{},a=r.forwardToReplicas,o=y(n(r,["forwardToReplicas"]));return a&&(o.queryParameters.forwardToReplicas=1),d(t.transporter.write({method:j,path:p("1/indexes/%s/rules/clear",t.indexName)},o),(function(e,r){return de(t)(e.taskID,r)}))}},Et=function(t){return function(e){var r=e||{},a=r.forwardToReplicas,o=y(n(r,["forwardToReplicas"]));return a&&(o.queryParameters.forwardToReplicas=1),d(t.transporter.write({method:j,path:p("1/indexes/%s/synonyms/clear",t.indexName)},o),(function(e,r){return de(t)(e.taskID,r)}))}},At=function(t){return function(e,r){return d(t.transporter.write({method:j,path:p("1/indexes/%s/deleteByQuery",t.indexName),data:e},r),(function(e,r){return de(t)(e.taskID,r)}))}},Ct=function(t){return function(e){return d(t.transporter.write({method:I,path:p("1/indexes/%s",t.indexName)},e),(function(e,r){return de(t)(e.taskID,r)}))}},Ut=function(t){return function(e,r){return d(zt(t)([e],r).then((function(t){return{taskID:t.taskIDs[0]}})),(function(e,r){return de(t)(e.taskID,r)}))}},zt=function(t){return function(e,r){var n=e.map((function(t){return{objectID:t}}));return Tt(t)(n,le.DeleteObject,r)}},Jt=function(t){return function(e,r){var a=r||{},o=a.forwardToReplicas,i=y(n(a,["forwardToReplicas"]));return o&&(i.queryParameters.forwardToReplicas=1),d(t.transporter.write({method:I,path:p("1/indexes/%s/rules/%s",t.indexName,e)},i),(function(e,r){return de(t)(e.taskID,r)}))}},Ft=function(t){return function(e,r){var a=r||{},o=a.forwardToReplicas,i=y(n(a,["forwardToReplicas"]));return o&&(i.queryParameters.forwardToReplicas=1),d(t.transporter.write({method:I,path:p("1/indexes/%s/synonyms/%s",t.indexName,e)},i),(function(e,r){return de(t)(e.taskID,r)}))}},Ht=function(t){return function(e){return Gt(t)(e).then((function(){return!0})).catch((function(t){if(404!==t.status)throw t;return!1}))}},Mt=function(t){return function(e,r,n){return t.transporter.read({method:j,path:p("1/answers/%s/prediction",t.indexName),data:{query:e,queryLanguages:r},cacheable:!0},n)}},Bt=function(t){return function(e,o){var i=o||{},u=i.query,s=i.paginate,c=n(i,["query","paginate"]),f=0;return function n(){return ie(t)(u||"",r(r({},c),{},{page:f})).then((function(t){for(var r=0,o=Object.entries(t.hits);r<o.length;r++){var i=a(o[r],2),u=i[0],c=i[1];if(e(c))return{object:c,position:parseInt(u,10),page:f}}if(f++,!1===s||f>=t.nbPages)throw{name:"ObjectNotFoundError",message:"Object not found."};return n()}))}()}},Kt=function(t){return function(e,r){return t.transporter.read({method:x,path:p("1/indexes/%s/%s",t.indexName,e)},r)}},Wt=function(){return function(t,e){for(var r=0,n=Object.entries(t.hits);r<n.length;r++){var o=a(n[r],2),i=o[0];if(o[1].objectID===e)return parseInt(i,10)}return-1}},Lt=function(t){return function(e,a){var o=a||{},i=o.attributesToRetrieve,u=n(o,["attributesToRetrieve"]),s=e.map((function(e){return r({indexName:t.indexName,objectID:e},i?{attributesToRetrieve:i}:{})}));return t.transporter.read({method:j,path:"1/indexes/*/objects",data:{requests:s}},u)}},Qt=function(t){return function(e,r){return t.transporter.read({method:x,path:p("1/indexes/%s/rules/%s",t.indexName,e)},r)}},Gt=function(t){return function(e){return t.transporter.read({method:x,path:p("1/indexes/%s/settings",t.indexName),data:{getVersion:2}},e)}},Vt=function(t){return function(e,r){return t.transporter.read({method:x,path:p("1/indexes/%s/synonyms/%s",t.indexName,e)},r)}},_t=function(t){return function(e,r){return d(Xt(t)([e],r).then((function(t){return{objectID:t.objectIDs[0],taskID:t.taskIDs[0]}})),(function(e,r){return de(t)(e.taskID,r)}))}},Xt=function(t){return function(e,r){var a=r||{},o=a.createIfNotExists,i=n(a,["createIfNotExists"]),u=o?le.PartialUpdateObject:le.PartialUpdateObjectNoCreate;return Tt(t)(e,u,i)}},Yt=function(t){return function(e,i){var u=i||{},s=u.safe,c=u.autoGenerateObjectIDIfNotExist,f=u.batchSize,l=n(u,["safe","autoGenerateObjectIDIfNotExist","batchSize"]),h=function(e,r,n,a){return d(t.transporter.write({method:j,path:p("1/indexes/%s/operation",e),data:{operation:n,destination:r}},a),(function(e,r){return de(t)(e.taskID,r)}))},m=Math.random().toString(36).substring(7),y="".concat(t.indexName,"_tmp_").concat(m),g=ee({appId:t.appId,transporter:t.transporter,indexName:y}),v=[],b=h(t.indexName,y,"copy",r(r({},l),{},{scope:["settings","synonyms","rules"]}));return v.push(b),d((s?b.wait(l):b).then((function(){var t=g(e,r(r({},l),{},{autoGenerateObjectIDIfNotExist:c,batchSize:f}));return v.push(t),s?t.wait(l):t})).then((function(){var e=h(y,t.indexName,"move",l);return v.push(e),s?e.wait(l):e})).then((function(){return Promise.all(v)})).then((function(t){var e=a(t,3),r=e[0],n=e[1],i=e[2];return{objectIDs:n.objectIDs,taskIDs:[r.taskID].concat(o(n.taskIDs),[i.taskID])}})),(function(t,e){return Promise.all(v.map((function(t){return t.wait(e)})))}))}},Zt=function(t){return function(e,n){return ne(t)(e,r(r({},n),{},{clearExistingRules:!0}))}},$t=function(t){return function(e,n){return oe(t)(e,r(r({},n),{},{clearExistingSynonyms:!0}))}},te=function(t){return function(e,r){return d(ee(t)([e],r).then((function(t){return{objectID:t.objectIDs[0],taskID:t.taskIDs[0]}})),(function(e,r){return de(t)(e.taskID,r)}))}},ee=function(t){return function(e,r){var a=r||{},o=a.autoGenerateObjectIDIfNotExist,i=n(a,["autoGenerateObjectIDIfNotExist"]),u=o?le.AddObject:le.UpdateObject;if(u===le.UpdateObject){var s=!0,c=!1,f=void 0;try{for(var l,h=e[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){if(void 0===l.value.objectID)return d(Promise.reject({name:"MissingObjectIDError",message:"All objects must have an unique objectID (like a primary key) to be valid. Algolia is also able to generate objectIDs automatically but *it's not recommended*. To do it, use the `{'autoGenerateObjectIDIfNotExist': true}` option."}))}}catch(t){c=!0,f=t}finally{try{s||null==h.return||h.return()}finally{if(c)throw f}}}return Tt(t)(e,u,i)}},re=function(t){return function(e,r){return ne(t)([e],r)}},ne=function(t){return function(e,r){var a=r||{},o=a.forwardToReplicas,i=a.clearExistingRules,u=y(n(a,["forwardToReplicas","clearExistingRules"]));return o&&(u.queryParameters.forwardToReplicas=1),i&&(u.queryParameters.clearExistingRules=1),d(t.transporter.write({method:j,path:p("1/indexes/%s/rules/batch",t.indexName),data:e},u),(function(e,r){return de(t)(e.taskID,r)}))}},ae=function(t){return function(e,r){return oe(t)([e],r)}},oe=function(t){return function(e,r){var a=r||{},o=a.forwardToReplicas,i=a.clearExistingSynonyms,u=a.replaceExistingSynonyms,s=y(n(a,["forwardToReplicas","clearExistingSynonyms","replaceExistingSynonyms"]));return o&&(s.queryParameters.forwardToReplicas=1),(u||i)&&(s.queryParameters.replaceExistingSynonyms=1),d(t.transporter.write({method:j,path:p("1/indexes/%s/synonyms/batch",t.indexName),data:e},s),(function(e,r){return de(t)(e.taskID,r)}))}},ie=function(t){return function(e,r){return t.transporter.read({method:j,path:p("1/indexes/%s/query",t.indexName),data:{query:e},cacheable:!0},r)}},ue=function(t){return function(e,r,n){return t.transporter.read({method:j,path:p("1/indexes/%s/facets/%s/query",t.indexName,e),data:{facetQuery:r},cacheable:!0},n)}},se=function(t){return function(e,r){return t.transporter.read({method:j,path:p("1/indexes/%s/rules/search",t.indexName),data:{query:e}},r)}},ce=function(t){return function(e,r){return t.transporter.read({method:j,path:p("1/indexes/%s/synonyms/search",t.indexName),data:{query:e}},r)}},fe=function(t){return function(e,r){var a=r||{},o=a.forwardToReplicas,i=y(n(a,["forwardToReplicas"]));return o&&(i.queryParameters.forwardToReplicas=1),d(t.transporter.write({method:D,path:p("1/indexes/%s/settings",t.indexName),data:e},i),(function(e,r){return de(t)(e.taskID,r)}))}},de=function(t){return function(e,r){return f((function(n){return function(t){return function(e,r){return t.transporter.read({method:x,path:p("1/indexes/%s/task/%s",t.indexName,e.toString())},r)}}(t)(e,r).then((function(t){return"published"!==t.status?n():void 0}))}))}},le={AddObject:"addObject",UpdateObject:"updateObject",PartialUpdateObject:"partialUpdateObject",PartialUpdateObjectNoCreate:"partialUpdateObjectNoCreate",DeleteObject:"deleteObject",DeleteIndex:"delete",ClearIndex:"clear"},he={Settings:"settings",Synonyms:"synonyms",Rules:"rules"},pe=1,me=2,ye=3;var ge=function(t){return function(e,n){var a=e.map((function(t){return r(r({},t),{},{threshold:t.threshold||0})}));return t.transporter.read({method:j,path:"1/indexes/*/recommendations",data:{requests:a},cacheable:!0},n)}},ve=function(t){return function(e,n){return ge(t)(e.map((function(t){return r(r({},t),{},{fallbackParameters:{},model:"bought-together"})})),n)}},be=function(t){return function(e,n){return ge(t)(e.map((function(t){return r(r({},t),{},{model:"related-products"})})),n)}},Pe=function(t){return function(e,n){var a=e.map((function(t){return r(r({},t),{},{model:"trending-facets",threshold:t.threshold||0})}));return t.transporter.read({method:j,path:"1/indexes/*/recommendations",data:{requests:a},cacheable:!0},n)}},Oe=function(t){return function(e,n){var a=e.map((function(t){return r(r({},t),{},{model:"trending-items",threshold:t.threshold||0})}));return t.transporter.read({method:j,path:"1/indexes/*/recommendations",data:{requests:a},cacheable:!0},n)}},we=function(t){return function(e,n){return ge(t)(e.map((function(t){return r(r({},t),{},{model:"looking-similar"})})),n)}},Ie=function(t){return function(e,n){var a=e.map((function(t){return r(r({},t),{},{model:"recommended-for-you",threshold:t.threshold||0})}));return t.transporter.read({method:j,path:"1/indexes/*/recommendations",data:{requests:a},cacheable:!0},n)}};function xe(t,e,n){var a,o={appId:t,apiKey:e,timeouts:{connect:1,read:2,write:30},requester:{send:function(t){return new Promise((function(e){var r=new XMLHttpRequest;r.open(t.method,t.url,!0),Object.keys(t.headers).forEach((function(e){return r.setRequestHeader(e,t.headers[e])}));var n,a=function(t,n){return setTimeout((function(){r.abort(),e({status:0,content:n,isTimedOut:!0})}),1e3*t)},o=a(t.connectTimeout,"Connection timeout");r.onreadystatechange=function(){r.readyState>r.OPENED&&void 0===n&&(clearTimeout(o),n=a(t.responseTimeout,"Socket timeout"))},r.onerror=function(){0===r.status&&(clearTimeout(o),clearTimeout(n),e({content:r.responseText||"Network request failed",status:r.status,isTimedOut:!1}))},r.onload=function(){clearTimeout(o),clearTimeout(n),e({content:r.responseText,status:r.status,isTimedOut:!1})},r.send(t.data)}))}},logger:(a=ye,{debug:function(t,e){return pe>=a&&console.debug(t,e),Promise.resolve()},info:function(t,e){return me>=a&&console.info(t,e),Promise.resolve()},error:function(t,e){return console.error(t,e),Promise.resolve()}}),responsesCache:s(),requestsCache:s({serializable:!1}),hostsCache:u({caches:[i({key:"".concat("4.23.3","-").concat(t)}),s()]}),userAgent:T("4.23.3").add({segment:"Browser"})},f=r(r({},o),n),d=function(){return function(t){return function(t){var e=t.region||"us",n=c(m.WithinHeaders,t.appId,t.apiKey),a=S(r(r({hosts:[{url:"personalization.".concat(e,".algolia.com")}]},t),{},{headers:r(r(r({},n.headers()),{"content-type":"application/json"}),t.headers),queryParameters:r(r({},n.queryParameters()),t.queryParameters)}));return h({appId:t.appId,transporter:a},t.methods)}(r(r(r({},o),t),{},{methods:{getPersonalizationStrategy:H,setPersonalizationStrategy:M}}))}};return function(t){var e=t.appId,n=c(void 0!==t.authMode?t.authMode:m.WithinHeaders,e,t.apiKey),a=S(r(r({hosts:[{url:"".concat(e,"-dsn.algolia.net"),accept:g.Read},{url:"".concat(e,".algolia.net"),accept:g.Write}].concat(l([{url:"".concat(e,"-1.algolianet.com")},{url:"".concat(e,"-2.algolianet.com")},{url:"".concat(e,"-3.algolianet.com")}]))},t),{},{headers:r(r(r({},n.headers()),{"content-type":"application/x-www-form-urlencoded"}),t.headers),queryParameters:r(r({},n.queryParameters()),t.queryParameters)}));return h({transporter:a,appId:e,addAlgoliaAgent:function(t,e){a.userAgent.add({segment:t,version:e})},clearCache:function(){return Promise.all([a.requestsCache.clear(),a.responsesCache.clear()]).then((function(){}))}},t.methods)}(r(r({},f),{},{methods:{search:mt,searchForFacetValues:yt,multipleBatch:ht,multipleGetObjects:pt,multipleQueries:mt,copyIndex:G,copySettings:_,copySynonyms:X,copyRules:V,moveIndex:lt,listIndices:ft,getLogs:nt,listClusters:ct,multipleSearchForFacetValues:yt,getApiKey:tt,addApiKey:K,listApiKeys:st,updateApiKey:xt,deleteApiKey:Z,restoreApiKey:bt,assignUserID:W,assignUserIDs:L,getUserID:ot,searchUserIDs:wt,listUserIDs:dt,getTopUserIDs:at,removeUserID:gt,hasPendingMappings:it,clearDictionaryEntries:Q,deleteDictionaryEntries:$,getDictionarySettings:rt,getAppTask:et,replaceDictionaryEntries:vt,saveDictionaryEntries:Pt,searchDictionaryEntries:Ot,setDictionarySettings:It,waitAppTask:jt,customRequest:Y,initIndex:function(t){return function(e){return ut(t)(e,{methods:{batch:Dt,delete:Ct,findAnswers:Mt,getObject:Kt,getObjects:Lt,saveObject:te,saveObjects:ee,search:ie,searchForFacetValues:ue,waitTask:de,setSettings:fe,getSettings:Gt,partialUpdateObject:_t,partialUpdateObjects:Xt,deleteObject:Ut,deleteObjects:zt,deleteBy:At,clearObjects:Nt,browseObjects:qt,getObjectPosition:Wt,findObject:Bt,exists:Ht,saveSynonym:ae,saveSynonyms:oe,getSynonym:Vt,searchSynonyms:ce,browseSynonyms:St,deleteSynonym:Ft,clearSynonyms:Et,replaceAllObjects:Yt,replaceAllSynonyms:$t,searchRules:se,getRule:Qt,deleteRule:Jt,saveRule:re,saveRules:ne,replaceAllRules:Zt,browseRules:kt,clearRules:Rt}})}},initAnalytics:function(){return function(t){return function(t){var e=t.region||"us",n=c(m.WithinHeaders,t.appId,t.apiKey),a=S(r(r({hosts:[{url:"analytics.".concat(e,".algolia.com")}]},t),{},{headers:r(r(r({},n.headers()),{"content-type":"application/json"}),t.headers),queryParameters:r(r({},n.queryParameters()),t.queryParameters)}));return h({appId:t.appId,transporter:a},t.methods)}(r(r(r({},o),t),{},{methods:{addABTest:C,getABTest:z,getABTests:J,stopABTest:F,deleteABTest:U}}))}},initPersonalization:d,initRecommendation:function(){return function(t){return f.logger.info("The `initRecommendation` method is deprecated. Use `initPersonalization` instead."),d()(t)}},getRecommendations:ge,getFrequentlyBoughtTogether:ve,getLookingSimilar:we,getRecommendedForYou:Ie,getRelatedProducts:be,getTrendingFacets:Pe,getTrendingItems:Oe}}))}return xe.version="4.23.3",xe}));


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  font-family: "Netflix Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #141414;
  color: #fff;
}

.container {
  max-width: 800px;
  margin: 20px auto;
  padding: 0 20px;
}

.netflix-heading {
  text-align: center;
  margin-bottom: 20px;
}

.netflix-heading h1 {
  font-family: "Netflix Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 48px;
  color: #fff;
  margin: 0;
}

.search-container {
  text-align: center;
  margin-bottom: 20px;
}

.search-container input[type="text"] {
  padding: 10px;
  width: 60%;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  background-color: #333;
  color: #fff;
}

.search-container button {
  padding: 10px 20px;
  background-color: #e50914;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.movies-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.movie {
  text-align: center;
  background-color: #222;
  padding: 15px;
  border-radius: 5px;
  transition: transform 0.3s;
  width: 14rem;
}

.movie:hover {
  transform: translateY(-5px);
}

.movie img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.movie h3 {
  margin-top: 10px;
  font-size: 18px;
  color: #fff;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay-content {
  width: 80%;
  background-color: #fff;
  color: black;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 24px;
  color: #333;
}

/* Blur effect */
.container {
  backdrop-filter: blur(5px);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,2EAA2E;EAC3E,SAAS;EACT,UAAU;EACV,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,2EAA2E;EAC3E,eAAe;EACf,WAAW;EACX,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,2DAA2D;EAC3D,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,aAAa;EACb,kBAAkB;EAClB,0BAA0B;EAC1B,YAAY;AACd;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,WAAW;AACb;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uCAAuC;EACvC,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,eAAe;EACf,eAAe;EACf,WAAW;AACb;;AAEA,gBAAgB;AAChB;EACE,0BAA0B;AAC5B","sourcesContent":["body {\n  font-family: \"Netflix Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n  background-color: #141414;\n  color: #fff;\n}\n\n.container {\n  max-width: 800px;\n  margin: 20px auto;\n  padding: 0 20px;\n}\n\n.netflix-heading {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.netflix-heading h1 {\n  font-family: \"Netflix Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 48px;\n  color: #fff;\n  margin: 0;\n}\n\n.search-container {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.search-container input[type=\"text\"] {\n  padding: 10px;\n  width: 60%;\n  border: none;\n  border-radius: 5px;\n  font-size: 16px;\n  background-color: #333;\n  color: #fff;\n}\n\n.search-container button {\n  padding: 10px 20px;\n  background-color: #e50914;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 16px;\n}\n\n.movies-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 20px;\n}\n\n.movie {\n  text-align: center;\n  background-color: #222;\n  padding: 15px;\n  border-radius: 5px;\n  transition: transform 0.3s;\n  width: 14rem;\n}\n\n.movie:hover {\n  transform: translateY(-5px);\n}\n\n.movie img {\n  max-width: 100%;\n  height: auto;\n  border-radius: 5px;\n}\n\n.movie h3 {\n  margin-top: 10px;\n  font-size: 18px;\n  color: #fff;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.overlay-content {\n  width: 80%;\n  background-color: #fff;\n  color: black;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n  text-align: center;\n  position: relative;\n}\n\n.close-button {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n  font-size: 24px;\n  color: #333;\n}\n\n/* Blur effect */\n.container {\n  backdrop-filter: blur(5px);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apikey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apikey */ "./apikey.js");


// Import algoliasearch
const algoliasearch = __webpack_require__(/*! algoliasearch */ "./node_modules/algoliasearch/dist/algoliasearch.umd.js");

// Connect and authenticate with the Algolia app
const client = algoliasearch(_apikey__WEBPACK_IMPORTED_MODULE_0__.APP_ID, _apikey__WEBPACK_IMPORTED_MODULE_0__.API_KEY);

// Find sample index of movies
const index = client.initIndex("movies_index");

// Add function to search the index
async function search(movie) {
  return await index.search(movie).then((response) => {
    return response.hits;
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);


/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMovieCard: () => (/* binding */ createMovieCard),
/* harmony export */   showMovieOverlay: () => (/* binding */ showMovieOverlay)
/* harmony export */ });
/* harmony import */ var _handlers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers.js */ "./src/handlers.js");


function createMovieCard(movie) {
  const movieCard = document.createElement("div");
  movieCard.classList.add("movie");
  movieCard.setAttribute("id", movie.id);

  const image = document.createElement("img");
  image.src = movie.backdrop_path;
  image.alt = movie.title;
  movieCard.appendChild(image);

  const title = document.createElement("h3");
  title.textContent = movie.title;
  movieCard.appendChild(title);

  movieCard.addEventListener("click", function (e) {
    (0,_handlers_js__WEBPACK_IMPORTED_MODULE_0__.handleMovieClick)(e, _handlers_js__WEBPACK_IMPORTED_MODULE_0__.searchedMovies);
  });

  return movieCard;
}

function showMovieOverlay(movie) {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const overlayContent = document.createElement("div");
  overlayContent.classList.add("overlay-content");

  const closeButton = document.createElement("span");
  closeButton.classList.add("close-button");
  closeButton.innerHTML = "&times;";
  closeButton.addEventListener("click", () => {
    overlay.remove();
  });

  const image = document.createElement("img");
  image.src = movie.backdrop_path;
  image.alt = movie.title;

  const title = document.createElement("h2");
  title.textContent = movie.title;

  const description = document.createElement("p");
  description.textContent = movie.overview;

  overlayContent.appendChild(closeButton);
  overlayContent.appendChild(image);
  overlayContent.appendChild(title);
  overlayContent.appendChild(description);

  overlay.appendChild(overlayContent);
  document.body.appendChild(overlay);
}




/***/ }),

/***/ "./src/handlers.js":
/*!*************************!*\
  !*** ./src/handlers.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleMovieClick: () => (/* binding */ handleMovieClick),
/* harmony export */   handleSearch: () => (/* binding */ handleSearch),
/* harmony export */   searchedMovies: () => (/* binding */ searchedMovies)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/api.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



let searchedMovies = new Map();

async function handleSearch() {
  const searchInput = document.querySelector("#search").value.toLowerCase();
  const moviesContainer = document.querySelector("#movies-container");
  moviesContainer.innerHTML = ""; // Clear previous search results

  searchedMovies = new Map();

  if (searchInput) {
    let movies = await (0,_api__WEBPACK_IMPORTED_MODULE_0__["default"])(searchInput);
    console.log(movies);

    movies.forEach((movie) => {
      searchedMovies.set(movie.id.toString(), { movie });
      let movieCard = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createMovieCard)(movie);
      moviesContainer.appendChild(movieCard);
    });
  }
  return searchedMovies;
}

async function handleMovieClick(e, searchedMovies) {
  const movieID =
    e.target.id.length != 0 ? e.target.id : e.target.parentNode.id;
  if (searchedMovies.has(movieID)) {
    const movie = searchedMovies.get(movieID);
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.showMovieOverlay)(movie.movie);
  }
}




/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers */ "./src/handlers.js");



const btn = document.querySelector("button");
btn.addEventListener("click", _handlers__WEBPACK_IMPORTED_MODULE_1__.handleSearch);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/script.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRTZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEbEI7QUFDK0I7O0FBRTFEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQzs7QUFFbEM7O0FBRUE7QUFDQSx1QkFBdUIsZ0RBQU07QUFDN0I7O0FBRUE7QUFDQSxnREFBZ0QsT0FBTztBQUN2RCxzQkFBc0IscURBQWU7QUFDckM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFnQjtBQUNwQjtBQUNBOztBQUUwRDs7Ozs7Ozs7Ozs7Ozs7O0FDbENyQztBQUNxQjs7QUFFMUM7QUFDQSw4QkFBOEIsbURBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taXhmbGl4Ly4vYXBpa2V5LmpzIiwid2VicGFjazovL21peGZsaXgvLi9ub2RlX21vZHVsZXMvYWxnb2xpYXNlYXJjaC9kaXN0L2FsZ29saWFzZWFyY2gudW1kLmpzIiwid2VicGFjazovL21peGZsaXgvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL21peGZsaXgvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL21peGZsaXgvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9taXhmbGl4Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL21peGZsaXgvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbWl4ZmxpeC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbWl4ZmxpeC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9taXhmbGl4Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL21peGZsaXgvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9taXhmbGl4Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbWl4ZmxpeC8uL3NyYy9hcGkuanMiLCJ3ZWJwYWNrOi8vbWl4ZmxpeC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vbWl4ZmxpeC8uL3NyYy9oYW5kbGVycy5qcyIsIndlYnBhY2s6Ly9taXhmbGl4Ly4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBUFBfSUQgPSBcIjc4WTJaQTdWTUlcIjtcbmNvbnN0IEFQSV9LRVkgPSBcIjk3NGYwMWU1Y2UwNDVkNDQwNmE3ZjY5ZDNiMDNkMzVkXCI7XG5cbmV4cG9ydCB7IEFQUF9JRCwgQVBJX0tFWSB9O1xuIiwiLyohIGFsZ29saWFzZWFyY2gudW1kLmpzIHwgNC4yMy4zIHwgwqkgQWxnb2xpYSwgaW5jLiB8IGh0dHBzOi8vZ2l0aHViLmNvbS9hbGdvbGlhL2FsZ29saWFzZWFyY2gtY2xpZW50LWphdmFzY3JpcHQgKi9cbiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOih0PXR8fHNlbGYpLmFsZ29saWFzZWFyY2g9ZSgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHQodCxlLHIpe3JldHVybiBlIGluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7dmFsdWU6cixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbZV09cix0fWZ1bmN0aW9uIGUodCxlKXt2YXIgcj1PYmplY3Qua2V5cyh0KTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHQpO2UmJihuPW4uZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LGUpLmVudW1lcmFibGV9KSkpLHIucHVzaC5hcHBseShyLG4pfXJldHVybiByfWZ1bmN0aW9uIHIocil7Zm9yKHZhciBuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyl7dmFyIGE9bnVsbCE9YXJndW1lbnRzW25dP2FyZ3VtZW50c1tuXTp7fTtuJTI/ZShPYmplY3QoYSksITApLmZvckVhY2goKGZ1bmN0aW9uKGUpe3QocixlLGFbZV0pfSkpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHIsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoYSkpOmUoT2JqZWN0KGEpKS5mb3JFYWNoKChmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkocix0LE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYSx0KSl9KSl9cmV0dXJuIHJ9ZnVuY3Rpb24gbih0LGUpe2lmKG51bGw9PXQpcmV0dXJue307dmFyIHIsbixhPWZ1bmN0aW9uKHQsZSl7aWYobnVsbD09dClyZXR1cm57fTt2YXIgcixuLGE9e30sbz1PYmplY3Qua2V5cyh0KTtmb3Iobj0wO248by5sZW5ndGg7bisrKXI9b1tuXSxlLmluZGV4T2Yocik+PTB8fChhW3JdPXRbcl0pO3JldHVybiBhfSh0LGUpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBvPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModCk7Zm9yKG49MDtuPG8ubGVuZ3RoO24rKylyPW9bbl0sZS5pbmRleE9mKHIpPj0wfHxPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodCxyKSYmKGFbcl09dFtyXSl9cmV0dXJuIGF9ZnVuY3Rpb24gYSh0LGUpe3JldHVybiBmdW5jdGlvbih0KXtpZihBcnJheS5pc0FycmF5KHQpKXJldHVybiB0fSh0KXx8ZnVuY3Rpb24odCxlKXtpZighKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QodCl8fFwiW29iamVjdCBBcmd1bWVudHNdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkpKXJldHVybjt2YXIgcj1bXSxuPSEwLGE9ITEsbz12b2lkIDA7dHJ5e2Zvcih2YXIgaSx1PXRbU3ltYm9sLml0ZXJhdG9yXSgpOyEobj0oaT11Lm5leHQoKSkuZG9uZSkmJihyLnB1c2goaS52YWx1ZSksIWV8fHIubGVuZ3RoIT09ZSk7bj0hMCk7fWNhdGNoKHQpe2E9ITAsbz10fWZpbmFsbHl7dHJ5e258fG51bGw9PXUucmV0dXJufHx1LnJldHVybigpfWZpbmFsbHl7aWYoYSl0aHJvdyBvfX1yZXR1cm4gcn0odCxlKXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKX0oKX1mdW5jdGlvbiBvKHQpe3JldHVybiBmdW5jdGlvbih0KXtpZihBcnJheS5pc0FycmF5KHQpKXtmb3IodmFyIGU9MCxyPW5ldyBBcnJheSh0Lmxlbmd0aCk7ZTx0Lmxlbmd0aDtlKyspcltlXT10W2VdO3JldHVybiByfX0odCl8fGZ1bmN0aW9uKHQpe2lmKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QodCl8fFwiW29iamVjdCBBcmd1bWVudHNdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkpcmV0dXJuIEFycmF5LmZyb20odCl9KHQpfHxmdW5jdGlvbigpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKX0oKX1mdW5jdGlvbiBpKHQpe3ZhciBlLHI9XCJhbGdvbGlhc2VhcmNoLWNsaWVudC1qcy1cIi5jb25jYXQodC5rZXkpLG49ZnVuY3Rpb24oKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9dC5sb2NhbFN0b3JhZ2V8fHdpbmRvdy5sb2NhbFN0b3JhZ2UpLGV9LG89ZnVuY3Rpb24oKXtyZXR1cm4gSlNPTi5wYXJzZShuKCkuZ2V0SXRlbShyKXx8XCJ7fVwiKX0saT1mdW5jdGlvbih0KXtuKCkuc2V0SXRlbShyLEpTT04uc3RyaW5naWZ5KHQpKX0sdT1mdW5jdGlvbigpe3ZhciBlPXQudGltZVRvTGl2ZT8xZTMqdC50aW1lVG9MaXZlOm51bGwscj1vKCksbj1PYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMocikuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwIT09YSh0LDIpWzFdLnRpbWVzdGFtcH0pKSk7aWYoaShuKSxlKXt2YXIgdT1PYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMobikuZmlsdGVyKChmdW5jdGlvbih0KXt2YXIgcj1hKHQsMilbMV0sbj0obmV3IERhdGUpLmdldFRpbWUoKTtyZXR1cm4hKHIudGltZXN0YW1wK2U8bil9KSkpO2kodSl9fTtyZXR1cm57Z2V0OmZ1bmN0aW9uKHQsZSl7dmFyIHI9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOnttaXNzOmZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpfX07cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKGZ1bmN0aW9uKCl7dSgpO3ZhciBlPUpTT04uc3RyaW5naWZ5KHQpO3JldHVybiBvKClbZV19KSkudGhlbigoZnVuY3Rpb24odCl7cmV0dXJuIFByb21pc2UuYWxsKFt0P3QudmFsdWU6ZSgpLHZvaWQgMCE9PXRdKX0pKS50aGVuKChmdW5jdGlvbih0KXt2YXIgZT1hKHQsMiksbj1lWzBdLG89ZVsxXTtyZXR1cm4gUHJvbWlzZS5hbGwoW24sb3x8ci5taXNzKG4pXSl9KSkudGhlbigoZnVuY3Rpb24odCl7cmV0dXJuIGEodCwxKVswXX0pKX0sc2V0OmZ1bmN0aW9uKHQsZSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKGZ1bmN0aW9uKCl7dmFyIGE9bygpO3JldHVybiBhW0pTT04uc3RyaW5naWZ5KHQpXT17dGltZXN0YW1wOihuZXcgRGF0ZSkuZ2V0VGltZSgpLHZhbHVlOmV9LG4oKS5zZXRJdGVtKHIsSlNPTi5zdHJpbmdpZnkoYSkpLGV9KSl9LGRlbGV0ZTpmdW5jdGlvbih0KXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoZnVuY3Rpb24oKXt2YXIgZT1vKCk7ZGVsZXRlIGVbSlNPTi5zdHJpbmdpZnkodCldLG4oKS5zZXRJdGVtKHIsSlNPTi5zdHJpbmdpZnkoZSkpfSkpfSxjbGVhcjpmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKChmdW5jdGlvbigpe24oKS5yZW1vdmVJdGVtKHIpfSkpfX19ZnVuY3Rpb24gdSh0KXt2YXIgZT1vKHQuY2FjaGVzKSxyPWUuc2hpZnQoKTtyZXR1cm4gdm9pZCAwPT09cj97Z2V0OmZ1bmN0aW9uKHQsZSl7dmFyIHI9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOnttaXNzOmZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpfX0sbj1lKCk7cmV0dXJuIG4udGhlbigoZnVuY3Rpb24odCl7cmV0dXJuIFByb21pc2UuYWxsKFt0LHIubWlzcyh0KV0pfSkpLnRoZW4oKGZ1bmN0aW9uKHQpe3JldHVybiBhKHQsMSlbMF19KSl9LHNldDpmdW5jdGlvbih0LGUpe3JldHVybiBQcm9taXNlLnJlc29sdmUoZSl9LGRlbGV0ZTpmdW5jdGlvbih0KXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCl9LGNsZWFyOmZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpfX06e2dldDpmdW5jdGlvbih0LG4pe3ZhciBhPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTp7bWlzczpmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUoKX19O3JldHVybiByLmdldCh0LG4sYSkuY2F0Y2goKGZ1bmN0aW9uKCl7cmV0dXJuIHUoe2NhY2hlczplfSkuZ2V0KHQsbixhKX0pKX0sc2V0OmZ1bmN0aW9uKHQsbil7cmV0dXJuIHIuc2V0KHQsbikuY2F0Y2goKGZ1bmN0aW9uKCl7cmV0dXJuIHUoe2NhY2hlczplfSkuc2V0KHQsbil9KSl9LGRlbGV0ZTpmdW5jdGlvbih0KXtyZXR1cm4gci5kZWxldGUodCkuY2F0Y2goKGZ1bmN0aW9uKCl7cmV0dXJuIHUoe2NhY2hlczplfSkuZGVsZXRlKHQpfSkpfSxjbGVhcjpmdW5jdGlvbigpe3JldHVybiByLmNsZWFyKCkuY2F0Y2goKGZ1bmN0aW9uKCl7cmV0dXJuIHUoe2NhY2hlczplfSkuY2xlYXIoKX0pKX19fWZ1bmN0aW9uIHMoKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e3NlcmlhbGl6YWJsZTohMH0sZT17fTtyZXR1cm57Z2V0OmZ1bmN0aW9uKHIsbil7dmFyIGE9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOnttaXNzOmZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpfX0sbz1KU09OLnN0cmluZ2lmeShyKTtpZihvIGluIGUpcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0LnNlcmlhbGl6YWJsZT9KU09OLnBhcnNlKGVbb10pOmVbb10pO3ZhciBpPW4oKSx1PWEmJmEubWlzc3x8ZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCl9O3JldHVybiBpLnRoZW4oKGZ1bmN0aW9uKHQpe3JldHVybiB1KHQpfSkpLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIGl9KSl9LHNldDpmdW5jdGlvbihyLG4pe3JldHVybiBlW0pTT04uc3RyaW5naWZ5KHIpXT10LnNlcmlhbGl6YWJsZT9KU09OLnN0cmluZ2lmeShuKTpuLFByb21pc2UucmVzb2x2ZShuKX0sZGVsZXRlOmZ1bmN0aW9uKHQpe3JldHVybiBkZWxldGUgZVtKU09OLnN0cmluZ2lmeSh0KV0sUHJvbWlzZS5yZXNvbHZlKCl9LGNsZWFyOmZ1bmN0aW9uKCl7cmV0dXJuIGU9e30sUHJvbWlzZS5yZXNvbHZlKCl9fX1mdW5jdGlvbiBjKHQsZSxyKXt2YXIgbj17XCJ4LWFsZ29saWEtYXBpLWtleVwiOnIsXCJ4LWFsZ29saWEtYXBwbGljYXRpb24taWRcIjplfTtyZXR1cm57aGVhZGVyczpmdW5jdGlvbigpe3JldHVybiB0PT09bS5XaXRoaW5IZWFkZXJzP246e319LHF1ZXJ5UGFyYW1ldGVyczpmdW5jdGlvbigpe3JldHVybiB0PT09bS5XaXRoaW5RdWVyeVBhcmFtZXRlcnM/bjp7fX19fWZ1bmN0aW9uIGYodCl7dmFyIGU9MDtyZXR1cm4gdCgoZnVuY3Rpb24gcigpe3JldHVybiBlKyssbmV3IFByb21pc2UoKGZ1bmN0aW9uKG4pe3NldFRpbWVvdXQoKGZ1bmN0aW9uKCl7bih0KHIpKX0pLE1hdGgubWluKDEwMCplLDFlMykpfSkpfSkpfWZ1bmN0aW9uIGQodCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpfTtyZXR1cm4gT2JqZWN0LmFzc2lnbih0LHt3YWl0OmZ1bmN0aW9uKHIpe3JldHVybiBkKHQudGhlbigoZnVuY3Rpb24odCl7cmV0dXJuIFByb21pc2UuYWxsKFtlKHQsciksdF0pfSkpLnRoZW4oKGZ1bmN0aW9uKHQpe3JldHVybiB0WzFdfSkpKX19KX1mdW5jdGlvbiBsKHQpe2Zvcih2YXIgZT10Lmxlbmd0aC0xO2U+MDtlLS0pe3ZhciByPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooZSsxKSksbj10W2VdO3RbZV09dFtyXSx0W3JdPW59cmV0dXJuIHR9ZnVuY3Rpb24gaCh0LGUpe3JldHVybiBlPyhPYmplY3Qua2V5cyhlKS5mb3JFYWNoKChmdW5jdGlvbihyKXt0W3JdPWVbcl0odCl9KSksdCk6dH1mdW5jdGlvbiBwKHQpe2Zvcih2YXIgZT1hcmd1bWVudHMubGVuZ3RoLHI9bmV3IEFycmF5KGU+MT9lLTE6MCksbj0xO248ZTtuKyspcltuLTFdPWFyZ3VtZW50c1tuXTt2YXIgYT0wO3JldHVybiB0LnJlcGxhY2UoLyVzL2csKGZ1bmN0aW9uKCl7cmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChyW2ErK10pfSkpfXZhciBtPXtXaXRoaW5RdWVyeVBhcmFtZXRlcnM6MCxXaXRoaW5IZWFkZXJzOjF9O2Z1bmN0aW9uIHkodCxlKXt2YXIgcj10fHx7fSxuPXIuZGF0YXx8e307cmV0dXJuIE9iamVjdC5rZXlzKHIpLmZvckVhY2goKGZ1bmN0aW9uKHQpey0xPT09W1widGltZW91dFwiLFwiaGVhZGVyc1wiLFwicXVlcnlQYXJhbWV0ZXJzXCIsXCJkYXRhXCIsXCJjYWNoZWFibGVcIl0uaW5kZXhPZih0KSYmKG5bdF09clt0XSl9KSkse2RhdGE6T2JqZWN0LmVudHJpZXMobikubGVuZ3RoPjA/bjp2b2lkIDAsdGltZW91dDpyLnRpbWVvdXR8fGUsaGVhZGVyczpyLmhlYWRlcnN8fHt9LHF1ZXJ5UGFyYW1ldGVyczpyLnF1ZXJ5UGFyYW1ldGVyc3x8e30sY2FjaGVhYmxlOnIuY2FjaGVhYmxlfX12YXIgZz17UmVhZDoxLFdyaXRlOjIsQW55OjN9LHY9MSxiPTIsUD0zO2Z1bmN0aW9uIE8odCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnY7cmV0dXJuIHIocih7fSx0KSx7fSx7c3RhdHVzOmUsbGFzdFVwZGF0ZTpEYXRlLm5vdygpfSl9ZnVuY3Rpb24gdyh0KXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdD97cHJvdG9jb2w6XCJodHRwc1wiLHVybDp0LGFjY2VwdDpnLkFueX06e3Byb3RvY29sOnQucHJvdG9jb2x8fFwiaHR0cHNcIix1cmw6dC51cmwsYWNjZXB0OnQuYWNjZXB0fHxnLkFueX19dmFyIEk9XCJERUxFVEVcIix4PVwiR0VUXCIsaj1cIlBPU1RcIixEPVwiUFVUXCI7ZnVuY3Rpb24gcSh0LGUpe3JldHVybiBQcm9taXNlLmFsbChlLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIHQuZ2V0KGUsKGZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShPKGUpKX0pKX0pKSkudGhlbigoZnVuY3Rpb24odCl7dmFyIHI9dC5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gdC5zdGF0dXM9PT12fHxEYXRlLm5vdygpLXQubGFzdFVwZGF0ZT4xMmU0fSh0KX0pKSxuPXQuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIHQuc3RhdHVzPT09UCYmRGF0ZS5ub3coKS10Lmxhc3RVcGRhdGU8PTEyZTR9KHQpfSkpLGE9W10uY29uY2F0KG8ociksbyhuKSk7cmV0dXJue2dldFRpbWVvdXQ6ZnVuY3Rpb24odCxlKXtyZXR1cm4oMD09PW4ubGVuZ3RoJiYwPT09dD8xOm4ubGVuZ3RoKzMrdCkqZX0sc3RhdGVsZXNzSG9zdHM6YS5sZW5ndGg+MD9hLm1hcCgoZnVuY3Rpb24odCl7cmV0dXJuIHcodCl9KSk6ZX19KSl9ZnVuY3Rpb24gayh0LGUsbixhKXt2YXIgaT1bXSx1PWZ1bmN0aW9uKHQsZSl7aWYodC5tZXRob2Q9PT14fHx2b2lkIDA9PT10LmRhdGEmJnZvaWQgMD09PWUuZGF0YSlyZXR1cm47dmFyIG49QXJyYXkuaXNBcnJheSh0LmRhdGEpP3QuZGF0YTpyKHIoe30sdC5kYXRhKSxlLmRhdGEpO3JldHVybiBKU09OLnN0cmluZ2lmeShuKX0obixhKSxzPWZ1bmN0aW9uKHQsZSl7dmFyIG49cihyKHt9LHQuaGVhZGVycyksZS5oZWFkZXJzKSxhPXt9O3JldHVybiBPYmplY3Qua2V5cyhuKS5mb3JFYWNoKChmdW5jdGlvbih0KXt2YXIgZT1uW3RdO2FbdC50b0xvd2VyQ2FzZSgpXT1lfSkpLGF9KHQsYSksYz1uLm1ldGhvZCxmPW4ubWV0aG9kIT09eD97fTpyKHIoe30sbi5kYXRhKSxhLmRhdGEpLGQ9cihyKHIoe1wieC1hbGdvbGlhLWFnZW50XCI6dC51c2VyQWdlbnQudmFsdWV9LHQucXVlcnlQYXJhbWV0ZXJzKSxmKSxhLnF1ZXJ5UGFyYW1ldGVycyksbD0wLGg9ZnVuY3Rpb24gZShyLG8pe3ZhciBmPXIucG9wKCk7aWYodm9pZCAwPT09Zil0aHJvd3tuYW1lOlwiUmV0cnlFcnJvclwiLG1lc3NhZ2U6XCJVbnJlYWNoYWJsZSBob3N0cyAtIHlvdXIgYXBwbGljYXRpb24gaWQgbWF5IGJlIGluY29ycmVjdC4gSWYgdGhlIGVycm9yIHBlcnNpc3RzLCBjb250YWN0IHN1cHBvcnRAYWxnb2xpYS5jb20uXCIsdHJhbnNwb3J0ZXJTdGFja1RyYWNlOkUoaSl9O3ZhciBoPXtkYXRhOnUsaGVhZGVyczpzLG1ldGhvZDpjLHVybDpOKGYsbi5wYXRoLGQpLGNvbm5lY3RUaW1lb3V0Om8obCx0LnRpbWVvdXRzLmNvbm5lY3QpLHJlc3BvbnNlVGltZW91dDpvKGwsYS50aW1lb3V0KX0scD1mdW5jdGlvbih0KXt2YXIgZT17cmVxdWVzdDpoLHJlc3BvbnNlOnQsaG9zdDpmLHRyaWVzTGVmdDpyLmxlbmd0aH07cmV0dXJuIGkucHVzaChlKSxlfSxtPXtvblN1Y2Nlc3M6ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKHQpe3RyeXtyZXR1cm4gSlNPTi5wYXJzZSh0LmNvbnRlbnQpfWNhdGNoKGUpe3Rocm93IGZ1bmN0aW9uKHQsZSl7cmV0dXJue25hbWU6XCJEZXNlcmlhbGl6YXRpb25FcnJvclwiLG1lc3NhZ2U6dCxyZXNwb25zZTplfX0oZS5tZXNzYWdlLHQpfX0odCl9LG9uUmV0cnk6ZnVuY3Rpb24obil7dmFyIGE9cChuKTtyZXR1cm4gbi5pc1RpbWVkT3V0JiZsKyssUHJvbWlzZS5hbGwoW3QubG9nZ2VyLmluZm8oXCJSZXRyeWFibGUgZmFpbHVyZVwiLEEoYSkpLHQuaG9zdHNDYWNoZS5zZXQoZixPKGYsbi5pc1RpbWVkT3V0P1A6YikpXSkudGhlbigoZnVuY3Rpb24oKXtyZXR1cm4gZShyLG8pfSkpfSxvbkZhaWw6ZnVuY3Rpb24odCl7dGhyb3cgcCh0KSxmdW5jdGlvbih0LGUpe3ZhciByPXQuY29udGVudCxuPXQuc3RhdHVzLGE9cjt0cnl7YT1KU09OLnBhcnNlKHIpLm1lc3NhZ2V9Y2F0Y2godCl7fXJldHVybiBmdW5jdGlvbih0LGUscil7cmV0dXJue25hbWU6XCJBcGlFcnJvclwiLG1lc3NhZ2U6dCxzdGF0dXM6ZSx0cmFuc3BvcnRlclN0YWNrVHJhY2U6cn19KGEsbixlKX0odCxFKGkpKX19O3JldHVybiB0LnJlcXVlc3Rlci5zZW5kKGgpLnRoZW4oKGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbih0LGUpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgZT10LnN0YXR1cztyZXR1cm4gdC5pc1RpbWVkT3V0fHxmdW5jdGlvbih0KXt2YXIgZT10LmlzVGltZWRPdXQscj10LnN0YXR1cztyZXR1cm4hZSYmMD09fn5yfSh0KXx8MiE9fn4oZS8xMDApJiY0IT1+fihlLzEwMCl9KHQpP2Uub25SZXRyeSh0KToyPT1+fih0LnN0YXR1cy8xMDApP2Uub25TdWNjZXNzKHQpOmUub25GYWlsKHQpfSh0LG0pfSkpfTtyZXR1cm4gcSh0Lmhvc3RzQ2FjaGUsZSkudGhlbigoZnVuY3Rpb24odCl7cmV0dXJuIGgobyh0LnN0YXRlbGVzc0hvc3RzKS5yZXZlcnNlKCksdC5nZXRUaW1lb3V0KX0pKX1mdW5jdGlvbiBTKHQpe3ZhciBlPXQuaG9zdHNDYWNoZSxyPXQubG9nZ2VyLG49dC5yZXF1ZXN0ZXIsbz10LnJlcXVlc3RzQ2FjaGUsaT10LnJlc3BvbnNlc0NhY2hlLHU9dC50aW1lb3V0cyxzPXQudXNlckFnZW50LGM9dC5ob3N0cyxmPXQucXVlcnlQYXJhbWV0ZXJzLGQ9e2hvc3RzQ2FjaGU6ZSxsb2dnZXI6cixyZXF1ZXN0ZXI6bixyZXF1ZXN0c0NhY2hlOm8scmVzcG9uc2VzQ2FjaGU6aSx0aW1lb3V0czp1LHVzZXJBZ2VudDpzLGhlYWRlcnM6dC5oZWFkZXJzLHF1ZXJ5UGFyYW1ldGVyczpmLGhvc3RzOmMubWFwKChmdW5jdGlvbih0KXtyZXR1cm4gdyh0KX0pKSxyZWFkOmZ1bmN0aW9uKHQsZSl7dmFyIHI9eShlLGQudGltZW91dHMucmVhZCksbj1mdW5jdGlvbigpe3JldHVybiBrKGQsZC5ob3N0cy5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiAwIT0odC5hY2NlcHQmZy5SZWFkKX0pKSx0LHIpfTtpZighMCE9PSh2b2lkIDAhPT1yLmNhY2hlYWJsZT9yLmNhY2hlYWJsZTp0LmNhY2hlYWJsZSkpcmV0dXJuIG4oKTt2YXIgbz17cmVxdWVzdDp0LG1hcHBlZFJlcXVlc3RPcHRpb25zOnIsdHJhbnNwb3J0ZXI6e3F1ZXJ5UGFyYW1ldGVyczpkLnF1ZXJ5UGFyYW1ldGVycyxoZWFkZXJzOmQuaGVhZGVyc319O3JldHVybiBkLnJlc3BvbnNlc0NhY2hlLmdldChvLChmdW5jdGlvbigpe3JldHVybiBkLnJlcXVlc3RzQ2FjaGUuZ2V0KG8sKGZ1bmN0aW9uKCl7cmV0dXJuIGQucmVxdWVzdHNDYWNoZS5zZXQobyxuKCkpLnRoZW4oKGZ1bmN0aW9uKHQpe3JldHVybiBQcm9taXNlLmFsbChbZC5yZXF1ZXN0c0NhY2hlLmRlbGV0ZShvKSx0XSl9KSwoZnVuY3Rpb24odCl7cmV0dXJuIFByb21pc2UuYWxsKFtkLnJlcXVlc3RzQ2FjaGUuZGVsZXRlKG8pLFByb21pc2UucmVqZWN0KHQpXSl9KSkudGhlbigoZnVuY3Rpb24odCl7dmFyIGU9YSh0LDIpO2VbMF07cmV0dXJuIGVbMV19KSl9KSl9KSx7bWlzczpmdW5jdGlvbih0KXtyZXR1cm4gZC5yZXNwb25zZXNDYWNoZS5zZXQobyx0KX19KX0sd3JpdGU6ZnVuY3Rpb24odCxlKXtyZXR1cm4gayhkLGQuaG9zdHMuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gMCE9KHQuYWNjZXB0JmcuV3JpdGUpfSkpLHQseShlLGQudGltZW91dHMud3JpdGUpKX19O3JldHVybiBkfWZ1bmN0aW9uIFQodCl7dmFyIGU9e3ZhbHVlOlwiQWxnb2xpYSBmb3IgSmF2YVNjcmlwdCAoXCIuY29uY2F0KHQsXCIpXCIpLGFkZDpmdW5jdGlvbih0KXt2YXIgcj1cIjsgXCIuY29uY2F0KHQuc2VnbWVudCkuY29uY2F0KHZvaWQgMCE9PXQudmVyc2lvbj9cIiAoXCIuY29uY2F0KHQudmVyc2lvbixcIilcIik6XCJcIik7cmV0dXJuLTE9PT1lLnZhbHVlLmluZGV4T2YocikmJihlLnZhbHVlPVwiXCIuY29uY2F0KGUudmFsdWUpLmNvbmNhdChyKSksZX19O3JldHVybiBlfWZ1bmN0aW9uIE4odCxlLHIpe3ZhciBuPVIociksYT1cIlwiLmNvbmNhdCh0LnByb3RvY29sLFwiOi8vXCIpLmNvbmNhdCh0LnVybCxcIi9cIikuY29uY2F0KFwiL1wiPT09ZS5jaGFyQXQoMCk/ZS5zdWJzdHIoMSk6ZSk7cmV0dXJuIG4ubGVuZ3RoJiYoYSs9XCI/XCIuY29uY2F0KG4pKSxhfWZ1bmN0aW9uIFIodCl7cmV0dXJuIE9iamVjdC5rZXlzKHQpLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIHAoXCIlcz0lc1wiLGUsKHI9dFtlXSxcIltvYmplY3QgT2JqZWN0XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHIpfHxcIltvYmplY3QgQXJyYXldXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocik/SlNPTi5zdHJpbmdpZnkodFtlXSk6dFtlXSkpO3ZhciByfSkpLmpvaW4oXCImXCIpfWZ1bmN0aW9uIEUodCl7cmV0dXJuIHQubWFwKChmdW5jdGlvbih0KXtyZXR1cm4gQSh0KX0pKX1mdW5jdGlvbiBBKHQpe3ZhciBlPXQucmVxdWVzdC5oZWFkZXJzW1wieC1hbGdvbGlhLWFwaS1rZXlcIl0/e1wieC1hbGdvbGlhLWFwaS1rZXlcIjpcIioqKioqXCJ9Ont9O3JldHVybiByKHIoe30sdCkse30se3JlcXVlc3Q6cihyKHt9LHQucmVxdWVzdCkse30se2hlYWRlcnM6cihyKHt9LHQucmVxdWVzdC5oZWFkZXJzKSxlKX0pfSl9dmFyIEM9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUscil7cmV0dXJuIHQudHJhbnNwb3J0ZXIud3JpdGUoe21ldGhvZDpqLHBhdGg6XCIyL2FidGVzdHNcIixkYXRhOmV9LHIpfX0sVT1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxyKXtyZXR1cm4gdC50cmFuc3BvcnRlci53cml0ZSh7bWV0aG9kOkkscGF0aDpwKFwiMi9hYnRlc3RzLyVzXCIsZSl9LHIpfX0sej1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxyKXtyZXR1cm4gdC50cmFuc3BvcnRlci5yZWFkKHttZXRob2Q6eCxwYXRoOnAoXCIyL2FidGVzdHMvJXNcIixlKX0scil9fSxKPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gdC50cmFuc3BvcnRlci5yZWFkKHttZXRob2Q6eCxwYXRoOlwiMi9hYnRlc3RzXCJ9LGUpfX0sRj1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxyKXtyZXR1cm4gdC50cmFuc3BvcnRlci53cml0ZSh7bWV0aG9kOmoscGF0aDpwKFwiMi9hYnRlc3RzLyVzL3N0b3BcIixlKX0scil9fSxIPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gdC50cmFuc3BvcnRlci5yZWFkKHttZXRob2Q6eCxwYXRoOlwiMS9zdHJhdGVnaWVzL3BlcnNvbmFsaXphdGlvblwifSxlKX19LE09ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUscil7cmV0dXJuIHQudHJhbnNwb3J0ZXIud3JpdGUoe21ldGhvZDpqLHBhdGg6XCIxL3N0cmF0ZWdpZXMvcGVyc29uYWxpemF0aW9uXCIsZGF0YTplfSxyKX19O2Z1bmN0aW9uIEIodCl7cmV0dXJuIGZ1bmN0aW9uIGUocil7cmV0dXJuIHQucmVxdWVzdChyKS50aGVuKChmdW5jdGlvbihuKXtpZih2b2lkIDAhPT10LmJhdGNoJiZ0LmJhdGNoKG4uaGl0cyksIXQuc2hvdWxkU3RvcChuKSlyZXR1cm4gbi5jdXJzb3I/ZSh7Y3Vyc29yOm4uY3Vyc29yfSk6ZSh7cGFnZTooci5wYWdlfHwwKSsxfSl9KSl9KHt9KX12YXIgSz1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxhKXt2YXIgbz1hfHx7fSxpPW8ucXVlcnlQYXJhbWV0ZXJzLHU9bihvLFtcInF1ZXJ5UGFyYW1ldGVyc1wiXSkscz1yKHthY2w6ZX0sdm9pZCAwIT09aT97cXVlcnlQYXJhbWV0ZXJzOml9Ont9KTtyZXR1cm4gZCh0LnRyYW5zcG9ydGVyLndyaXRlKHttZXRob2Q6aixwYXRoOlwiMS9rZXlzXCIsZGF0YTpzfSx1KSwoZnVuY3Rpb24oZSxyKXtyZXR1cm4gZigoZnVuY3Rpb24obil7cmV0dXJuIHR0KHQpKGUua2V5LHIpLmNhdGNoKChmdW5jdGlvbih0KXtpZig0MDQhPT10LnN0YXR1cyl0aHJvdyB0O3JldHVybiBuKCl9KSl9KSl9KSl9fSxXPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLHIsbil7dmFyIGE9eShuKTtyZXR1cm4gYS5xdWVyeVBhcmFtZXRlcnNbXCJYLUFsZ29saWEtVXNlci1JRFwiXT1lLHQudHJhbnNwb3J0ZXIud3JpdGUoe21ldGhvZDpqLHBhdGg6XCIxL2NsdXN0ZXJzL21hcHBpbmdcIixkYXRhOntjbHVzdGVyOnJ9fSxhKX19LEw9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUscixuKXtyZXR1cm4gdC50cmFuc3BvcnRlci53cml0ZSh7bWV0aG9kOmoscGF0aDpcIjEvY2x1c3RlcnMvbWFwcGluZy9iYXRjaFwiLGRhdGE6e3VzZXJzOmUsY2x1c3RlcjpyfX0sbil9fSxRPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLHIpe3JldHVybiBkKHQudHJhbnNwb3J0ZXIud3JpdGUoe21ldGhvZDpqLHBhdGg6cChcIi8xL2RpY3Rpb25hcmllcy8lcy9iYXRjaFwiLGUpLGRhdGE6e2NsZWFyRXhpc3RpbmdEaWN0aW9uYXJ5RW50cmllczohMCxyZXF1ZXN0czp7YWN0aW9uOlwiYWRkRW50cnlcIixib2R5OltdfX19LHIpLChmdW5jdGlvbihlLHIpe3JldHVybiBqdCh0KShlLnRhc2tJRCxyKX0pKX19LEc9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUscixuKXtyZXR1cm4gZCh0LnRyYW5zcG9ydGVyLndyaXRlKHttZXRob2Q6aixwYXRoOnAoXCIxL2luZGV4ZXMvJXMvb3BlcmF0aW9uXCIsZSksZGF0YTp7b3BlcmF0aW9uOlwiY29weVwiLGRlc3RpbmF0aW9uOnJ9fSxuKSwoZnVuY3Rpb24ocixuKXtyZXR1cm4gdXQodCkoZSx7bWV0aG9kczp7d2FpdFRhc2s6ZGV9fSkud2FpdFRhc2soci50YXNrSUQsbil9KSl9fSxWPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLG4sYSl7cmV0dXJuIEcodCkoZSxuLHIocih7fSxhKSx7fSx7c2NvcGU6W2hlLlJ1bGVzXX0pKX19LF89ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUsbixhKXtyZXR1cm4gRyh0KShlLG4scihyKHt9LGEpLHt9LHtzY29wZTpbaGUuU2V0dGluZ3NdfSkpfX0sWD1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxuLGEpe3JldHVybiBHKHQpKGUsbixyKHIoe30sYSkse30se3Njb3BlOltoZS5TeW5vbnltc119KSl9fSxZPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLHIpe3JldHVybiBlLm1ldGhvZD09PXg/dC50cmFuc3BvcnRlci5yZWFkKGUscik6dC50cmFuc3BvcnRlci53cml0ZShlLHIpfX0sWj1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxyKXtyZXR1cm4gZCh0LnRyYW5zcG9ydGVyLndyaXRlKHttZXRob2Q6SSxwYXRoOnAoXCIxL2tleXMvJXNcIixlKX0sciksKGZ1bmN0aW9uKHIsbil7cmV0dXJuIGYoKGZ1bmN0aW9uKHIpe3JldHVybiB0dCh0KShlLG4pLnRoZW4ocikuY2F0Y2goKGZ1bmN0aW9uKHQpe2lmKDQwNCE9PXQuc3RhdHVzKXRocm93IHR9KSl9KSl9KSl9fSwkPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLHIsbil7dmFyIGE9ci5tYXAoKGZ1bmN0aW9uKHQpe3JldHVybnthY3Rpb246XCJkZWxldGVFbnRyeVwiLGJvZHk6e29iamVjdElEOnR9fX0pKTtyZXR1cm4gZCh0LnRyYW5zcG9ydGVyLndyaXRlKHttZXRob2Q6aixwYXRoOnAoXCIvMS9kaWN0aW9uYXJpZXMvJXMvYmF0Y2hcIixlKSxkYXRhOntjbGVhckV4aXN0aW5nRGljdGlvbmFyeUVudHJpZXM6ITEscmVxdWVzdHM6YX19LG4pLChmdW5jdGlvbihlLHIpe3JldHVybiBqdCh0KShlLnRhc2tJRCxyKX0pKX19LHR0PWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLHIpe3JldHVybiB0LnRyYW5zcG9ydGVyLnJlYWQoe21ldGhvZDp4LHBhdGg6cChcIjEva2V5cy8lc1wiLGUpfSxyKX19LGV0PWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLHIpe3JldHVybiB0LnRyYW5zcG9ydGVyLnJlYWQoe21ldGhvZDp4LHBhdGg6cChcIjEvdGFzay8lc1wiLGUudG9TdHJpbmcoKSl9LHIpfX0scnQ9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiB0LnRyYW5zcG9ydGVyLnJlYWQoe21ldGhvZDp4LHBhdGg6XCIvMS9kaWN0aW9uYXJpZXMvKi9zZXR0aW5nc1wifSxlKX19LG50PWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gdC50cmFuc3BvcnRlci5yZWFkKHttZXRob2Q6eCxwYXRoOlwiMS9sb2dzXCJ9LGUpfX0sYXQ9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiB0LnRyYW5zcG9ydGVyLnJlYWQoe21ldGhvZDp4LHBhdGg6XCIxL2NsdXN0ZXJzL21hcHBpbmcvdG9wXCJ9LGUpfX0sb3Q9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUscil7cmV0dXJuIHQudHJhbnNwb3J0ZXIucmVhZCh7bWV0aG9kOngscGF0aDpwKFwiMS9jbHVzdGVycy9tYXBwaW5nLyVzXCIsZSl9LHIpfX0saXQ9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciByPWV8fHt9LGE9ci5yZXRyaWV2ZU1hcHBpbmdzLG89bihyLFtcInJldHJpZXZlTWFwcGluZ3NcIl0pO3JldHVybiEwPT09YSYmKG8uZ2V0Q2x1c3RlcnM9ITApLHQudHJhbnNwb3J0ZXIucmVhZCh7bWV0aG9kOngscGF0aDpcIjEvY2x1c3RlcnMvbWFwcGluZy9wZW5kaW5nXCJ9LG8pfX0sdXQ9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciByPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fSxuPXt0cmFuc3BvcnRlcjp0LnRyYW5zcG9ydGVyLGFwcElkOnQuYXBwSWQsaW5kZXhOYW1lOmV9O3JldHVybiBoKG4sci5tZXRob2RzKX19LHN0PWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gdC50cmFuc3BvcnRlci5yZWFkKHttZXRob2Q6eCxwYXRoOlwiMS9rZXlzXCJ9LGUpfX0sY3Q9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiB0LnRyYW5zcG9ydGVyLnJlYWQoe21ldGhvZDp4LHBhdGg6XCIxL2NsdXN0ZXJzXCJ9LGUpfX0sZnQ9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiB0LnRyYW5zcG9ydGVyLnJlYWQoe21ldGhvZDp4LHBhdGg6XCIxL2luZGV4ZXNcIn0sZSl9fSxkdD1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIHQudHJhbnNwb3J0ZXIucmVhZCh7bWV0aG9kOngscGF0aDpcIjEvY2x1c3RlcnMvbWFwcGluZ1wifSxlKX19LGx0PWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLHIsbil7cmV0dXJuIGQodC50cmFuc3BvcnRlci53cml0ZSh7bWV0aG9kOmoscGF0aDpwKFwiMS9pbmRleGVzLyVzL29wZXJhdGlvblwiLGUpLGRhdGE6e29wZXJhdGlvbjpcIm1vdmVcIixkZXN0aW5hdGlvbjpyfX0sbiksKGZ1bmN0aW9uKHIsbil7cmV0dXJuIHV0KHQpKGUse21ldGhvZHM6e3dhaXRUYXNrOmRlfX0pLndhaXRUYXNrKHIudGFza0lELG4pfSkpfX0saHQ9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUscil7cmV0dXJuIGQodC50cmFuc3BvcnRlci53cml0ZSh7bWV0aG9kOmoscGF0aDpcIjEvaW5kZXhlcy8qL2JhdGNoXCIsZGF0YTp7cmVxdWVzdHM6ZX19LHIpLChmdW5jdGlvbihlLHIpe3JldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhlLnRhc2tJRCkubWFwKChmdW5jdGlvbihuKXtyZXR1cm4gdXQodCkobix7bWV0aG9kczp7d2FpdFRhc2s6ZGV9fSkud2FpdFRhc2soZS50YXNrSURbbl0scil9KSkpfSkpfX0scHQ9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUscil7cmV0dXJuIHQudHJhbnNwb3J0ZXIucmVhZCh7bWV0aG9kOmoscGF0aDpcIjEvaW5kZXhlcy8qL29iamVjdHNcIixkYXRhOntyZXF1ZXN0czplfX0scil9fSxtdD1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxuKXt2YXIgYT1lLm1hcCgoZnVuY3Rpb24odCl7cmV0dXJuIHIocih7fSx0KSx7fSx7cGFyYW1zOlIodC5wYXJhbXN8fHt9KX0pfSkpO3JldHVybiB0LnRyYW5zcG9ydGVyLnJlYWQoe21ldGhvZDpqLHBhdGg6XCIxL2luZGV4ZXMvKi9xdWVyaWVzXCIsZGF0YTp7cmVxdWVzdHM6YX0sY2FjaGVhYmxlOiEwfSxuKX19LHl0PWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLGEpe3JldHVybiBQcm9taXNlLmFsbChlLm1hcCgoZnVuY3Rpb24oZSl7dmFyIG89ZS5wYXJhbXMsaT1vLmZhY2V0TmFtZSx1PW8uZmFjZXRRdWVyeSxzPW4obyxbXCJmYWNldE5hbWVcIixcImZhY2V0UXVlcnlcIl0pO3JldHVybiB1dCh0KShlLmluZGV4TmFtZSx7bWV0aG9kczp7c2VhcmNoRm9yRmFjZXRWYWx1ZXM6dWV9fSkuc2VhcmNoRm9yRmFjZXRWYWx1ZXMoaSx1LHIocih7fSxhKSxzKSl9KSkpfX0sZ3Q9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUscil7dmFyIG49eShyKTtyZXR1cm4gbi5xdWVyeVBhcmFtZXRlcnNbXCJYLUFsZ29saWEtVXNlci1JRFwiXT1lLHQudHJhbnNwb3J0ZXIud3JpdGUoe21ldGhvZDpJLHBhdGg6XCIxL2NsdXN0ZXJzL21hcHBpbmdcIn0sbil9fSx2dD1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxyLG4pe3ZhciBhPXIubWFwKChmdW5jdGlvbih0KXtyZXR1cm57YWN0aW9uOlwiYWRkRW50cnlcIixib2R5OnR9fSkpO3JldHVybiBkKHQudHJhbnNwb3J0ZXIud3JpdGUoe21ldGhvZDpqLHBhdGg6cChcIi8xL2RpY3Rpb25hcmllcy8lcy9iYXRjaFwiLGUpLGRhdGE6e2NsZWFyRXhpc3RpbmdEaWN0aW9uYXJ5RW50cmllczohMCxyZXF1ZXN0czphfX0sbiksKGZ1bmN0aW9uKGUscil7cmV0dXJuIGp0KHQpKGUudGFza0lELHIpfSkpfX0sYnQ9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUscil7cmV0dXJuIGQodC50cmFuc3BvcnRlci53cml0ZSh7bWV0aG9kOmoscGF0aDpwKFwiMS9rZXlzLyVzL3Jlc3RvcmVcIixlKX0sciksKGZ1bmN0aW9uKHIsbil7cmV0dXJuIGYoKGZ1bmN0aW9uKHIpe3JldHVybiB0dCh0KShlLG4pLmNhdGNoKChmdW5jdGlvbih0KXtpZig0MDQhPT10LnN0YXR1cyl0aHJvdyB0O3JldHVybiByKCl9KSl9KSl9KSl9fSxQdD1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxyLG4pe3ZhciBhPXIubWFwKChmdW5jdGlvbih0KXtyZXR1cm57YWN0aW9uOlwiYWRkRW50cnlcIixib2R5OnR9fSkpO3JldHVybiBkKHQudHJhbnNwb3J0ZXIud3JpdGUoe21ldGhvZDpqLHBhdGg6cChcIi8xL2RpY3Rpb25hcmllcy8lcy9iYXRjaFwiLGUpLGRhdGE6e2NsZWFyRXhpc3RpbmdEaWN0aW9uYXJ5RW50cmllczohMSxyZXF1ZXN0czphfX0sbiksKGZ1bmN0aW9uKGUscil7cmV0dXJuIGp0KHQpKGUudGFza0lELHIpfSkpfX0sT3Q9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUscixuKXtyZXR1cm4gdC50cmFuc3BvcnRlci5yZWFkKHttZXRob2Q6aixwYXRoOnAoXCIvMS9kaWN0aW9uYXJpZXMvJXMvc2VhcmNoXCIsZSksZGF0YTp7cXVlcnk6cn0sY2FjaGVhYmxlOiEwfSxuKX19LHd0PWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLHIpe3JldHVybiB0LnRyYW5zcG9ydGVyLnJlYWQoe21ldGhvZDpqLHBhdGg6XCIxL2NsdXN0ZXJzL21hcHBpbmcvc2VhcmNoXCIsZGF0YTp7cXVlcnk6ZX19LHIpfX0sSXQ9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUscil7cmV0dXJuIGQodC50cmFuc3BvcnRlci53cml0ZSh7bWV0aG9kOkQscGF0aDpcIi8xL2RpY3Rpb25hcmllcy8qL3NldHRpbmdzXCIsZGF0YTplfSxyKSwoZnVuY3Rpb24oZSxyKXtyZXR1cm4ganQodCkoZS50YXNrSUQscil9KSl9fSx4dD1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxyKXt2YXIgYT1PYmplY3QuYXNzaWduKHt9LHIpLG89cnx8e30saT1vLnF1ZXJ5UGFyYW1ldGVycyx1PW4obyxbXCJxdWVyeVBhcmFtZXRlcnNcIl0pLHM9aT97cXVlcnlQYXJhbWV0ZXJzOml9Ont9LGM9W1wiYWNsXCIsXCJpbmRleGVzXCIsXCJyZWZlcmVyc1wiLFwicmVzdHJpY3RTb3VyY2VzXCIsXCJxdWVyeVBhcmFtZXRlcnNcIixcImRlc2NyaXB0aW9uXCIsXCJtYXhRdWVyaWVzUGVySVBQZXJIb3VyXCIsXCJtYXhIaXRzUGVyUXVlcnlcIl07cmV0dXJuIGQodC50cmFuc3BvcnRlci53cml0ZSh7bWV0aG9kOkQscGF0aDpwKFwiMS9rZXlzLyVzXCIsZSksZGF0YTpzfSx1KSwoZnVuY3Rpb24ocixuKXtyZXR1cm4gZigoZnVuY3Rpb24ocil7cmV0dXJuIHR0KHQpKGUsbikudGhlbigoZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3Qua2V5cyhhKS5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybi0xIT09Yy5pbmRleE9mKHQpfSkpLmV2ZXJ5KChmdW5jdGlvbihlKXtpZihBcnJheS5pc0FycmF5KHRbZV0pJiZBcnJheS5pc0FycmF5KGFbZV0pKXt2YXIgcj10W2VdO3JldHVybiByLmxlbmd0aD09PWFbZV0ubGVuZ3RoJiZyLmV2ZXJ5KChmdW5jdGlvbih0LHIpe3JldHVybiB0PT09YVtlXVtyXX0pKX1yZXR1cm4gdFtlXT09PWFbZV19KSl9KHQpP1Byb21pc2UucmVzb2x2ZSgpOnIoKX0pKX0pKX0pKX19LGp0PWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLHIpe3JldHVybiBmKChmdW5jdGlvbihuKXtyZXR1cm4gZXQodCkoZSxyKS50aGVuKChmdW5jdGlvbih0KXtyZXR1cm5cInB1Ymxpc2hlZFwiIT09dC5zdGF0dXM/bigpOnZvaWQgMH0pKX0pKX19LER0PWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLHIpe3JldHVybiBkKHQudHJhbnNwb3J0ZXIud3JpdGUoe21ldGhvZDpqLHBhdGg6cChcIjEvaW5kZXhlcy8lcy9iYXRjaFwiLHQuaW5kZXhOYW1lKSxkYXRhOntyZXF1ZXN0czplfX0sciksKGZ1bmN0aW9uKGUscil7cmV0dXJuIGRlKHQpKGUudGFza0lELHIpfSkpfX0scXQ9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBCKHIocih7c2hvdWxkU3RvcDpmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dC5jdXJzb3J9fSxlKSx7fSx7cmVxdWVzdDpmdW5jdGlvbihyKXtyZXR1cm4gdC50cmFuc3BvcnRlci5yZWFkKHttZXRob2Q6aixwYXRoOnAoXCIxL2luZGV4ZXMvJXMvYnJvd3NlXCIsdC5pbmRleE5hbWUpLGRhdGE6cn0sZSl9fSkpfX0sa3Q9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciBuPXIoe2hpdHNQZXJQYWdlOjFlM30sZSk7cmV0dXJuIEIocihyKHtzaG91bGRTdG9wOmZ1bmN0aW9uKHQpe3JldHVybiB0LmhpdHMubGVuZ3RoPG4uaGl0c1BlclBhZ2V9fSxuKSx7fSx7cmVxdWVzdDpmdW5jdGlvbihlKXtyZXR1cm4gc2UodCkoXCJcIixyKHIoe30sbiksZSkpLnRoZW4oKGZ1bmN0aW9uKHQpe3JldHVybiByKHIoe30sdCkse30se2hpdHM6dC5oaXRzLm1hcCgoZnVuY3Rpb24odCl7cmV0dXJuIGRlbGV0ZSB0Ll9oaWdobGlnaHRSZXN1bHQsdH0pKX0pfSkpfX0pKX19LFN0PWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgbj1yKHtoaXRzUGVyUGFnZToxZTN9LGUpO3JldHVybiBCKHIocih7c2hvdWxkU3RvcDpmdW5jdGlvbih0KXtyZXR1cm4gdC5oaXRzLmxlbmd0aDxuLmhpdHNQZXJQYWdlfX0sbikse30se3JlcXVlc3Q6ZnVuY3Rpb24oZSl7cmV0dXJuIGNlKHQpKFwiXCIscihyKHt9LG4pLGUpKS50aGVuKChmdW5jdGlvbih0KXtyZXR1cm4gcihyKHt9LHQpLHt9LHtoaXRzOnQuaGl0cy5tYXAoKGZ1bmN0aW9uKHQpe3JldHVybiBkZWxldGUgdC5faGlnaGxpZ2h0UmVzdWx0LHR9KSl9KX0pKX19KSl9fSxUdD1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxyLGEpe3ZhciBvPWF8fHt9LGk9by5iYXRjaFNpemUsdT1uKG8sW1wiYmF0Y2hTaXplXCJdKSxzPXt0YXNrSURzOltdLG9iamVjdElEczpbXX07cmV0dXJuIGQoZnVuY3Rpb24gbigpe3ZhciBhLG89YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOjAsYz1bXTtmb3IoYT1vO2E8ZS5sZW5ndGgmJihjLnB1c2goZVthXSksYy5sZW5ndGghPT0oaXx8MWUzKSk7YSsrKTtyZXR1cm4gMD09PWMubGVuZ3RoP1Byb21pc2UucmVzb2x2ZShzKTpEdCh0KShjLm1hcCgoZnVuY3Rpb24odCl7cmV0dXJue2FjdGlvbjpyLGJvZHk6dH19KSksdSkudGhlbigoZnVuY3Rpb24odCl7cmV0dXJuIHMub2JqZWN0SURzPXMub2JqZWN0SURzLmNvbmNhdCh0Lm9iamVjdElEcykscy50YXNrSURzLnB1c2godC50YXNrSUQpLGErKyxuKGEpfSkpfSgpLChmdW5jdGlvbihlLHIpe3JldHVybiBQcm9taXNlLmFsbChlLnRhc2tJRHMubWFwKChmdW5jdGlvbihlKXtyZXR1cm4gZGUodCkoZSxyKX0pKSl9KSl9fSxOdD1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGQodC50cmFuc3BvcnRlci53cml0ZSh7bWV0aG9kOmoscGF0aDpwKFwiMS9pbmRleGVzLyVzL2NsZWFyXCIsdC5pbmRleE5hbWUpfSxlKSwoZnVuY3Rpb24oZSxyKXtyZXR1cm4gZGUodCkoZS50YXNrSUQscil9KSl9fSxSdD1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHI9ZXx8e30sYT1yLmZvcndhcmRUb1JlcGxpY2FzLG89eShuKHIsW1wiZm9yd2FyZFRvUmVwbGljYXNcIl0pKTtyZXR1cm4gYSYmKG8ucXVlcnlQYXJhbWV0ZXJzLmZvcndhcmRUb1JlcGxpY2FzPTEpLGQodC50cmFuc3BvcnRlci53cml0ZSh7bWV0aG9kOmoscGF0aDpwKFwiMS9pbmRleGVzLyVzL3J1bGVzL2NsZWFyXCIsdC5pbmRleE5hbWUpfSxvKSwoZnVuY3Rpb24oZSxyKXtyZXR1cm4gZGUodCkoZS50YXNrSUQscil9KSl9fSxFdD1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHI9ZXx8e30sYT1yLmZvcndhcmRUb1JlcGxpY2FzLG89eShuKHIsW1wiZm9yd2FyZFRvUmVwbGljYXNcIl0pKTtyZXR1cm4gYSYmKG8ucXVlcnlQYXJhbWV0ZXJzLmZvcndhcmRUb1JlcGxpY2FzPTEpLGQodC50cmFuc3BvcnRlci53cml0ZSh7bWV0aG9kOmoscGF0aDpwKFwiMS9pbmRleGVzLyVzL3N5bm9ueW1zL2NsZWFyXCIsdC5pbmRleE5hbWUpfSxvKSwoZnVuY3Rpb24oZSxyKXtyZXR1cm4gZGUodCkoZS50YXNrSUQscil9KSl9fSxBdD1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxyKXtyZXR1cm4gZCh0LnRyYW5zcG9ydGVyLndyaXRlKHttZXRob2Q6aixwYXRoOnAoXCIxL2luZGV4ZXMvJXMvZGVsZXRlQnlRdWVyeVwiLHQuaW5kZXhOYW1lKSxkYXRhOmV9LHIpLChmdW5jdGlvbihlLHIpe3JldHVybiBkZSh0KShlLnRhc2tJRCxyKX0pKX19LEN0PWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZCh0LnRyYW5zcG9ydGVyLndyaXRlKHttZXRob2Q6SSxwYXRoOnAoXCIxL2luZGV4ZXMvJXNcIix0LmluZGV4TmFtZSl9LGUpLChmdW5jdGlvbihlLHIpe3JldHVybiBkZSh0KShlLnRhc2tJRCxyKX0pKX19LFV0PWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLHIpe3JldHVybiBkKHp0KHQpKFtlXSxyKS50aGVuKChmdW5jdGlvbih0KXtyZXR1cm57dGFza0lEOnQudGFza0lEc1swXX19KSksKGZ1bmN0aW9uKGUscil7cmV0dXJuIGRlKHQpKGUudGFza0lELHIpfSkpfX0senQ9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUscil7dmFyIG49ZS5tYXAoKGZ1bmN0aW9uKHQpe3JldHVybntvYmplY3RJRDp0fX0pKTtyZXR1cm4gVHQodCkobixsZS5EZWxldGVPYmplY3Qscil9fSxKdD1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxyKXt2YXIgYT1yfHx7fSxvPWEuZm9yd2FyZFRvUmVwbGljYXMsaT15KG4oYSxbXCJmb3J3YXJkVG9SZXBsaWNhc1wiXSkpO3JldHVybiBvJiYoaS5xdWVyeVBhcmFtZXRlcnMuZm9yd2FyZFRvUmVwbGljYXM9MSksZCh0LnRyYW5zcG9ydGVyLndyaXRlKHttZXRob2Q6SSxwYXRoOnAoXCIxL2luZGV4ZXMvJXMvcnVsZXMvJXNcIix0LmluZGV4TmFtZSxlKX0saSksKGZ1bmN0aW9uKGUscil7cmV0dXJuIGRlKHQpKGUudGFza0lELHIpfSkpfX0sRnQ9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUscil7dmFyIGE9cnx8e30sbz1hLmZvcndhcmRUb1JlcGxpY2FzLGk9eShuKGEsW1wiZm9yd2FyZFRvUmVwbGljYXNcIl0pKTtyZXR1cm4gbyYmKGkucXVlcnlQYXJhbWV0ZXJzLmZvcndhcmRUb1JlcGxpY2FzPTEpLGQodC50cmFuc3BvcnRlci53cml0ZSh7bWV0aG9kOkkscGF0aDpwKFwiMS9pbmRleGVzLyVzL3N5bm9ueW1zLyVzXCIsdC5pbmRleE5hbWUsZSl9LGkpLChmdW5jdGlvbihlLHIpe3JldHVybiBkZSh0KShlLnRhc2tJRCxyKX0pKX19LEh0PWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gR3QodCkoZSkudGhlbigoZnVuY3Rpb24oKXtyZXR1cm4hMH0pKS5jYXRjaCgoZnVuY3Rpb24odCl7aWYoNDA0IT09dC5zdGF0dXMpdGhyb3cgdDtyZXR1cm4hMX0pKX19LE10PWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLHIsbil7cmV0dXJuIHQudHJhbnNwb3J0ZXIucmVhZCh7bWV0aG9kOmoscGF0aDpwKFwiMS9hbnN3ZXJzLyVzL3ByZWRpY3Rpb25cIix0LmluZGV4TmFtZSksZGF0YTp7cXVlcnk6ZSxxdWVyeUxhbmd1YWdlczpyfSxjYWNoZWFibGU6ITB9LG4pfX0sQnQ9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUsbyl7dmFyIGk9b3x8e30sdT1pLnF1ZXJ5LHM9aS5wYWdpbmF0ZSxjPW4oaSxbXCJxdWVyeVwiLFwicGFnaW5hdGVcIl0pLGY9MDtyZXR1cm4gZnVuY3Rpb24gbigpe3JldHVybiBpZSh0KSh1fHxcIlwiLHIocih7fSxjKSx7fSx7cGFnZTpmfSkpLnRoZW4oKGZ1bmN0aW9uKHQpe2Zvcih2YXIgcj0wLG89T2JqZWN0LmVudHJpZXModC5oaXRzKTtyPG8ubGVuZ3RoO3IrKyl7dmFyIGk9YShvW3JdLDIpLHU9aVswXSxjPWlbMV07aWYoZShjKSlyZXR1cm57b2JqZWN0OmMscG9zaXRpb246cGFyc2VJbnQodSwxMCkscGFnZTpmfX1pZihmKyssITE9PT1zfHxmPj10Lm5iUGFnZXMpdGhyb3d7bmFtZTpcIk9iamVjdE5vdEZvdW5kRXJyb3JcIixtZXNzYWdlOlwiT2JqZWN0IG5vdCBmb3VuZC5cIn07cmV0dXJuIG4oKX0pKX0oKX19LEt0PWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLHIpe3JldHVybiB0LnRyYW5zcG9ydGVyLnJlYWQoe21ldGhvZDp4LHBhdGg6cChcIjEvaW5kZXhlcy8lcy8lc1wiLHQuaW5kZXhOYW1lLGUpfSxyKX19LFd0PWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByPTAsbj1PYmplY3QuZW50cmllcyh0LmhpdHMpO3I8bi5sZW5ndGg7cisrKXt2YXIgbz1hKG5bcl0sMiksaT1vWzBdO2lmKG9bMV0ub2JqZWN0SUQ9PT1lKXJldHVybiBwYXJzZUludChpLDEwKX1yZXR1cm4tMX19LEx0PWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLGEpe3ZhciBvPWF8fHt9LGk9by5hdHRyaWJ1dGVzVG9SZXRyaWV2ZSx1PW4obyxbXCJhdHRyaWJ1dGVzVG9SZXRyaWV2ZVwiXSkscz1lLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIHIoe2luZGV4TmFtZTp0LmluZGV4TmFtZSxvYmplY3RJRDplfSxpP3thdHRyaWJ1dGVzVG9SZXRyaWV2ZTppfTp7fSl9KSk7cmV0dXJuIHQudHJhbnNwb3J0ZXIucmVhZCh7bWV0aG9kOmoscGF0aDpcIjEvaW5kZXhlcy8qL29iamVjdHNcIixkYXRhOntyZXF1ZXN0czpzfX0sdSl9fSxRdD1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxyKXtyZXR1cm4gdC50cmFuc3BvcnRlci5yZWFkKHttZXRob2Q6eCxwYXRoOnAoXCIxL2luZGV4ZXMvJXMvcnVsZXMvJXNcIix0LmluZGV4TmFtZSxlKX0scil9fSxHdD1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIHQudHJhbnNwb3J0ZXIucmVhZCh7bWV0aG9kOngscGF0aDpwKFwiMS9pbmRleGVzLyVzL3NldHRpbmdzXCIsdC5pbmRleE5hbWUpLGRhdGE6e2dldFZlcnNpb246Mn19LGUpfX0sVnQ9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUscil7cmV0dXJuIHQudHJhbnNwb3J0ZXIucmVhZCh7bWV0aG9kOngscGF0aDpwKFwiMS9pbmRleGVzLyVzL3N5bm9ueW1zLyVzXCIsdC5pbmRleE5hbWUsZSl9LHIpfX0sX3Q9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUscil7cmV0dXJuIGQoWHQodCkoW2VdLHIpLnRoZW4oKGZ1bmN0aW9uKHQpe3JldHVybntvYmplY3RJRDp0Lm9iamVjdElEc1swXSx0YXNrSUQ6dC50YXNrSURzWzBdfX0pKSwoZnVuY3Rpb24oZSxyKXtyZXR1cm4gZGUodCkoZS50YXNrSUQscil9KSl9fSxYdD1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxyKXt2YXIgYT1yfHx7fSxvPWEuY3JlYXRlSWZOb3RFeGlzdHMsaT1uKGEsW1wiY3JlYXRlSWZOb3RFeGlzdHNcIl0pLHU9bz9sZS5QYXJ0aWFsVXBkYXRlT2JqZWN0OmxlLlBhcnRpYWxVcGRhdGVPYmplY3ROb0NyZWF0ZTtyZXR1cm4gVHQodCkoZSx1LGkpfX0sWXQ9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUsaSl7dmFyIHU9aXx8e30scz11LnNhZmUsYz11LmF1dG9HZW5lcmF0ZU9iamVjdElESWZOb3RFeGlzdCxmPXUuYmF0Y2hTaXplLGw9bih1LFtcInNhZmVcIixcImF1dG9HZW5lcmF0ZU9iamVjdElESWZOb3RFeGlzdFwiLFwiYmF0Y2hTaXplXCJdKSxoPWZ1bmN0aW9uKGUscixuLGEpe3JldHVybiBkKHQudHJhbnNwb3J0ZXIud3JpdGUoe21ldGhvZDpqLHBhdGg6cChcIjEvaW5kZXhlcy8lcy9vcGVyYXRpb25cIixlKSxkYXRhOntvcGVyYXRpb246bixkZXN0aW5hdGlvbjpyfX0sYSksKGZ1bmN0aW9uKGUscil7cmV0dXJuIGRlKHQpKGUudGFza0lELHIpfSkpfSxtPU1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KSx5PVwiXCIuY29uY2F0KHQuaW5kZXhOYW1lLFwiX3RtcF9cIikuY29uY2F0KG0pLGc9ZWUoe2FwcElkOnQuYXBwSWQsdHJhbnNwb3J0ZXI6dC50cmFuc3BvcnRlcixpbmRleE5hbWU6eX0pLHY9W10sYj1oKHQuaW5kZXhOYW1lLHksXCJjb3B5XCIscihyKHt9LGwpLHt9LHtzY29wZTpbXCJzZXR0aW5nc1wiLFwic3lub255bXNcIixcInJ1bGVzXCJdfSkpO3JldHVybiB2LnB1c2goYiksZCgocz9iLndhaXQobCk6YikudGhlbigoZnVuY3Rpb24oKXt2YXIgdD1nKGUscihyKHt9LGwpLHt9LHthdXRvR2VuZXJhdGVPYmplY3RJRElmTm90RXhpc3Q6YyxiYXRjaFNpemU6Zn0pKTtyZXR1cm4gdi5wdXNoKHQpLHM/dC53YWl0KGwpOnR9KSkudGhlbigoZnVuY3Rpb24oKXt2YXIgZT1oKHksdC5pbmRleE5hbWUsXCJtb3ZlXCIsbCk7cmV0dXJuIHYucHVzaChlKSxzP2Uud2FpdChsKTplfSkpLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UuYWxsKHYpfSkpLnRoZW4oKGZ1bmN0aW9uKHQpe3ZhciBlPWEodCwzKSxyPWVbMF0sbj1lWzFdLGk9ZVsyXTtyZXR1cm57b2JqZWN0SURzOm4ub2JqZWN0SURzLHRhc2tJRHM6W3IudGFza0lEXS5jb25jYXQobyhuLnRhc2tJRHMpLFtpLnRhc2tJRF0pfX0pKSwoZnVuY3Rpb24odCxlKXtyZXR1cm4gUHJvbWlzZS5hbGwodi5tYXAoKGZ1bmN0aW9uKHQpe3JldHVybiB0LndhaXQoZSl9KSkpfSkpfX0sWnQ9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUsbil7cmV0dXJuIG5lKHQpKGUscihyKHt9LG4pLHt9LHtjbGVhckV4aXN0aW5nUnVsZXM6ITB9KSl9fSwkdD1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxuKXtyZXR1cm4gb2UodCkoZSxyKHIoe30sbikse30se2NsZWFyRXhpc3RpbmdTeW5vbnltczohMH0pKX19LHRlPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLHIpe3JldHVybiBkKGVlKHQpKFtlXSxyKS50aGVuKChmdW5jdGlvbih0KXtyZXR1cm57b2JqZWN0SUQ6dC5vYmplY3RJRHNbMF0sdGFza0lEOnQudGFza0lEc1swXX19KSksKGZ1bmN0aW9uKGUscil7cmV0dXJuIGRlKHQpKGUudGFza0lELHIpfSkpfX0sZWU9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUscil7dmFyIGE9cnx8e30sbz1hLmF1dG9HZW5lcmF0ZU9iamVjdElESWZOb3RFeGlzdCxpPW4oYSxbXCJhdXRvR2VuZXJhdGVPYmplY3RJRElmTm90RXhpc3RcIl0pLHU9bz9sZS5BZGRPYmplY3Q6bGUuVXBkYXRlT2JqZWN0O2lmKHU9PT1sZS5VcGRhdGVPYmplY3Qpe3ZhciBzPSEwLGM9ITEsZj12b2lkIDA7dHJ5e2Zvcih2YXIgbCxoPWVbU3ltYm9sLml0ZXJhdG9yXSgpOyEocz0obD1oLm5leHQoKSkuZG9uZSk7cz0hMCl7aWYodm9pZCAwPT09bC52YWx1ZS5vYmplY3RJRClyZXR1cm4gZChQcm9taXNlLnJlamVjdCh7bmFtZTpcIk1pc3NpbmdPYmplY3RJREVycm9yXCIsbWVzc2FnZTpcIkFsbCBvYmplY3RzIG11c3QgaGF2ZSBhbiB1bmlxdWUgb2JqZWN0SUQgKGxpa2UgYSBwcmltYXJ5IGtleSkgdG8gYmUgdmFsaWQuIEFsZ29saWEgaXMgYWxzbyBhYmxlIHRvIGdlbmVyYXRlIG9iamVjdElEcyBhdXRvbWF0aWNhbGx5IGJ1dCAqaXQncyBub3QgcmVjb21tZW5kZWQqLiBUbyBkbyBpdCwgdXNlIHRoZSBgeydhdXRvR2VuZXJhdGVPYmplY3RJRElmTm90RXhpc3QnOiB0cnVlfWAgb3B0aW9uLlwifSkpfX1jYXRjaCh0KXtjPSEwLGY9dH1maW5hbGx5e3RyeXtzfHxudWxsPT1oLnJldHVybnx8aC5yZXR1cm4oKX1maW5hbGx5e2lmKGMpdGhyb3cgZn19fXJldHVybiBUdCh0KShlLHUsaSl9fSxyZT1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxyKXtyZXR1cm4gbmUodCkoW2VdLHIpfX0sbmU9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUscil7dmFyIGE9cnx8e30sbz1hLmZvcndhcmRUb1JlcGxpY2FzLGk9YS5jbGVhckV4aXN0aW5nUnVsZXMsdT15KG4oYSxbXCJmb3J3YXJkVG9SZXBsaWNhc1wiLFwiY2xlYXJFeGlzdGluZ1J1bGVzXCJdKSk7cmV0dXJuIG8mJih1LnF1ZXJ5UGFyYW1ldGVycy5mb3J3YXJkVG9SZXBsaWNhcz0xKSxpJiYodS5xdWVyeVBhcmFtZXRlcnMuY2xlYXJFeGlzdGluZ1J1bGVzPTEpLGQodC50cmFuc3BvcnRlci53cml0ZSh7bWV0aG9kOmoscGF0aDpwKFwiMS9pbmRleGVzLyVzL3J1bGVzL2JhdGNoXCIsdC5pbmRleE5hbWUpLGRhdGE6ZX0sdSksKGZ1bmN0aW9uKGUscil7cmV0dXJuIGRlKHQpKGUudGFza0lELHIpfSkpfX0sYWU9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUscil7cmV0dXJuIG9lKHQpKFtlXSxyKX19LG9lPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLHIpe3ZhciBhPXJ8fHt9LG89YS5mb3J3YXJkVG9SZXBsaWNhcyxpPWEuY2xlYXJFeGlzdGluZ1N5bm9ueW1zLHU9YS5yZXBsYWNlRXhpc3RpbmdTeW5vbnltcyxzPXkobihhLFtcImZvcndhcmRUb1JlcGxpY2FzXCIsXCJjbGVhckV4aXN0aW5nU3lub255bXNcIixcInJlcGxhY2VFeGlzdGluZ1N5bm9ueW1zXCJdKSk7cmV0dXJuIG8mJihzLnF1ZXJ5UGFyYW1ldGVycy5mb3J3YXJkVG9SZXBsaWNhcz0xKSwodXx8aSkmJihzLnF1ZXJ5UGFyYW1ldGVycy5yZXBsYWNlRXhpc3RpbmdTeW5vbnltcz0xKSxkKHQudHJhbnNwb3J0ZXIud3JpdGUoe21ldGhvZDpqLHBhdGg6cChcIjEvaW5kZXhlcy8lcy9zeW5vbnltcy9iYXRjaFwiLHQuaW5kZXhOYW1lKSxkYXRhOmV9LHMpLChmdW5jdGlvbihlLHIpe3JldHVybiBkZSh0KShlLnRhc2tJRCxyKX0pKX19LGllPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLHIpe3JldHVybiB0LnRyYW5zcG9ydGVyLnJlYWQoe21ldGhvZDpqLHBhdGg6cChcIjEvaW5kZXhlcy8lcy9xdWVyeVwiLHQuaW5kZXhOYW1lKSxkYXRhOntxdWVyeTplfSxjYWNoZWFibGU6ITB9LHIpfX0sdWU9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUscixuKXtyZXR1cm4gdC50cmFuc3BvcnRlci5yZWFkKHttZXRob2Q6aixwYXRoOnAoXCIxL2luZGV4ZXMvJXMvZmFjZXRzLyVzL3F1ZXJ5XCIsdC5pbmRleE5hbWUsZSksZGF0YTp7ZmFjZXRRdWVyeTpyfSxjYWNoZWFibGU6ITB9LG4pfX0sc2U9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUscil7cmV0dXJuIHQudHJhbnNwb3J0ZXIucmVhZCh7bWV0aG9kOmoscGF0aDpwKFwiMS9pbmRleGVzLyVzL3J1bGVzL3NlYXJjaFwiLHQuaW5kZXhOYW1lKSxkYXRhOntxdWVyeTplfX0scil9fSxjZT1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxyKXtyZXR1cm4gdC50cmFuc3BvcnRlci5yZWFkKHttZXRob2Q6aixwYXRoOnAoXCIxL2luZGV4ZXMvJXMvc3lub255bXMvc2VhcmNoXCIsdC5pbmRleE5hbWUpLGRhdGE6e3F1ZXJ5OmV9fSxyKX19LGZlPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLHIpe3ZhciBhPXJ8fHt9LG89YS5mb3J3YXJkVG9SZXBsaWNhcyxpPXkobihhLFtcImZvcndhcmRUb1JlcGxpY2FzXCJdKSk7cmV0dXJuIG8mJihpLnF1ZXJ5UGFyYW1ldGVycy5mb3J3YXJkVG9SZXBsaWNhcz0xKSxkKHQudHJhbnNwb3J0ZXIud3JpdGUoe21ldGhvZDpELHBhdGg6cChcIjEvaW5kZXhlcy8lcy9zZXR0aW5nc1wiLHQuaW5kZXhOYW1lKSxkYXRhOmV9LGkpLChmdW5jdGlvbihlLHIpe3JldHVybiBkZSh0KShlLnRhc2tJRCxyKX0pKX19LGRlPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLHIpe3JldHVybiBmKChmdW5jdGlvbihuKXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUscil7cmV0dXJuIHQudHJhbnNwb3J0ZXIucmVhZCh7bWV0aG9kOngscGF0aDpwKFwiMS9pbmRleGVzLyVzL3Rhc2svJXNcIix0LmluZGV4TmFtZSxlLnRvU3RyaW5nKCkpfSxyKX19KHQpKGUscikudGhlbigoZnVuY3Rpb24odCl7cmV0dXJuXCJwdWJsaXNoZWRcIiE9PXQuc3RhdHVzP24oKTp2b2lkIDB9KSl9KSl9fSxsZT17QWRkT2JqZWN0OlwiYWRkT2JqZWN0XCIsVXBkYXRlT2JqZWN0OlwidXBkYXRlT2JqZWN0XCIsUGFydGlhbFVwZGF0ZU9iamVjdDpcInBhcnRpYWxVcGRhdGVPYmplY3RcIixQYXJ0aWFsVXBkYXRlT2JqZWN0Tm9DcmVhdGU6XCJwYXJ0aWFsVXBkYXRlT2JqZWN0Tm9DcmVhdGVcIixEZWxldGVPYmplY3Q6XCJkZWxldGVPYmplY3RcIixEZWxldGVJbmRleDpcImRlbGV0ZVwiLENsZWFySW5kZXg6XCJjbGVhclwifSxoZT17U2V0dGluZ3M6XCJzZXR0aW5nc1wiLFN5bm9ueW1zOlwic3lub255bXNcIixSdWxlczpcInJ1bGVzXCJ9LHBlPTEsbWU9Mix5ZT0zO3ZhciBnZT1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxuKXt2YXIgYT1lLm1hcCgoZnVuY3Rpb24odCl7cmV0dXJuIHIocih7fSx0KSx7fSx7dGhyZXNob2xkOnQudGhyZXNob2xkfHwwfSl9KSk7cmV0dXJuIHQudHJhbnNwb3J0ZXIucmVhZCh7bWV0aG9kOmoscGF0aDpcIjEvaW5kZXhlcy8qL3JlY29tbWVuZGF0aW9uc1wiLGRhdGE6e3JlcXVlc3RzOmF9LGNhY2hlYWJsZTohMH0sbil9fSx2ZT1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxuKXtyZXR1cm4gZ2UodCkoZS5tYXAoKGZ1bmN0aW9uKHQpe3JldHVybiByKHIoe30sdCkse30se2ZhbGxiYWNrUGFyYW1ldGVyczp7fSxtb2RlbDpcImJvdWdodC10b2dldGhlclwifSl9KSksbil9fSxiZT1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxuKXtyZXR1cm4gZ2UodCkoZS5tYXAoKGZ1bmN0aW9uKHQpe3JldHVybiByKHIoe30sdCkse30se21vZGVsOlwicmVsYXRlZC1wcm9kdWN0c1wifSl9KSksbil9fSxQZT1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxuKXt2YXIgYT1lLm1hcCgoZnVuY3Rpb24odCl7cmV0dXJuIHIocih7fSx0KSx7fSx7bW9kZWw6XCJ0cmVuZGluZy1mYWNldHNcIix0aHJlc2hvbGQ6dC50aHJlc2hvbGR8fDB9KX0pKTtyZXR1cm4gdC50cmFuc3BvcnRlci5yZWFkKHttZXRob2Q6aixwYXRoOlwiMS9pbmRleGVzLyovcmVjb21tZW5kYXRpb25zXCIsZGF0YTp7cmVxdWVzdHM6YX0sY2FjaGVhYmxlOiEwfSxuKX19LE9lPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLG4pe3ZhciBhPWUubWFwKChmdW5jdGlvbih0KXtyZXR1cm4gcihyKHt9LHQpLHt9LHttb2RlbDpcInRyZW5kaW5nLWl0ZW1zXCIsdGhyZXNob2xkOnQudGhyZXNob2xkfHwwfSl9KSk7cmV0dXJuIHQudHJhbnNwb3J0ZXIucmVhZCh7bWV0aG9kOmoscGF0aDpcIjEvaW5kZXhlcy8qL3JlY29tbWVuZGF0aW9uc1wiLGRhdGE6e3JlcXVlc3RzOmF9LGNhY2hlYWJsZTohMH0sbil9fSx3ZT1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSxuKXtyZXR1cm4gZ2UodCkoZS5tYXAoKGZ1bmN0aW9uKHQpe3JldHVybiByKHIoe30sdCkse30se21vZGVsOlwibG9va2luZy1zaW1pbGFyXCJ9KX0pKSxuKX19LEllPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlLG4pe3ZhciBhPWUubWFwKChmdW5jdGlvbih0KXtyZXR1cm4gcihyKHt9LHQpLHt9LHttb2RlbDpcInJlY29tbWVuZGVkLWZvci15b3VcIix0aHJlc2hvbGQ6dC50aHJlc2hvbGR8fDB9KX0pKTtyZXR1cm4gdC50cmFuc3BvcnRlci5yZWFkKHttZXRob2Q6aixwYXRoOlwiMS9pbmRleGVzLyovcmVjb21tZW5kYXRpb25zXCIsZGF0YTp7cmVxdWVzdHM6YX0sY2FjaGVhYmxlOiEwfSxuKX19O2Z1bmN0aW9uIHhlKHQsZSxuKXt2YXIgYSxvPXthcHBJZDp0LGFwaUtleTplLHRpbWVvdXRzOntjb25uZWN0OjEscmVhZDoyLHdyaXRlOjMwfSxyZXF1ZXN0ZXI6e3NlbmQ6ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbihlKXt2YXIgcj1uZXcgWE1MSHR0cFJlcXVlc3Q7ci5vcGVuKHQubWV0aG9kLHQudXJsLCEwKSxPYmplY3Qua2V5cyh0LmhlYWRlcnMpLmZvckVhY2goKGZ1bmN0aW9uKGUpe3JldHVybiByLnNldFJlcXVlc3RIZWFkZXIoZSx0LmhlYWRlcnNbZV0pfSkpO3ZhciBuLGE9ZnVuY3Rpb24odCxuKXtyZXR1cm4gc2V0VGltZW91dCgoZnVuY3Rpb24oKXtyLmFib3J0KCksZSh7c3RhdHVzOjAsY29udGVudDpuLGlzVGltZWRPdXQ6ITB9KX0pLDFlMyp0KX0sbz1hKHQuY29ubmVjdFRpbWVvdXQsXCJDb25uZWN0aW9uIHRpbWVvdXRcIik7ci5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXtyLnJlYWR5U3RhdGU+ci5PUEVORUQmJnZvaWQgMD09PW4mJihjbGVhclRpbWVvdXQobyksbj1hKHQucmVzcG9uc2VUaW1lb3V0LFwiU29ja2V0IHRpbWVvdXRcIikpfSxyLm9uZXJyb3I9ZnVuY3Rpb24oKXswPT09ci5zdGF0dXMmJihjbGVhclRpbWVvdXQobyksY2xlYXJUaW1lb3V0KG4pLGUoe2NvbnRlbnQ6ci5yZXNwb25zZVRleHR8fFwiTmV0d29yayByZXF1ZXN0IGZhaWxlZFwiLHN0YXR1czpyLnN0YXR1cyxpc1RpbWVkT3V0OiExfSkpfSxyLm9ubG9hZD1mdW5jdGlvbigpe2NsZWFyVGltZW91dChvKSxjbGVhclRpbWVvdXQobiksZSh7Y29udGVudDpyLnJlc3BvbnNlVGV4dCxzdGF0dXM6ci5zdGF0dXMsaXNUaW1lZE91dDohMX0pfSxyLnNlbmQodC5kYXRhKX0pKX19LGxvZ2dlcjooYT15ZSx7ZGVidWc6ZnVuY3Rpb24odCxlKXtyZXR1cm4gcGU+PWEmJmNvbnNvbGUuZGVidWcodCxlKSxQcm9taXNlLnJlc29sdmUoKX0saW5mbzpmdW5jdGlvbih0LGUpe3JldHVybiBtZT49YSYmY29uc29sZS5pbmZvKHQsZSksUHJvbWlzZS5yZXNvbHZlKCl9LGVycm9yOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIGNvbnNvbGUuZXJyb3IodCxlKSxQcm9taXNlLnJlc29sdmUoKX19KSxyZXNwb25zZXNDYWNoZTpzKCkscmVxdWVzdHNDYWNoZTpzKHtzZXJpYWxpemFibGU6ITF9KSxob3N0c0NhY2hlOnUoe2NhY2hlczpbaSh7a2V5OlwiXCIuY29uY2F0KFwiNC4yMy4zXCIsXCItXCIpLmNvbmNhdCh0KX0pLHMoKV19KSx1c2VyQWdlbnQ6VChcIjQuMjMuM1wiKS5hZGQoe3NlZ21lbnQ6XCJCcm93c2VyXCJ9KX0sZj1yKHIoe30sbyksbiksZD1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIGU9dC5yZWdpb258fFwidXNcIixuPWMobS5XaXRoaW5IZWFkZXJzLHQuYXBwSWQsdC5hcGlLZXkpLGE9UyhyKHIoe2hvc3RzOlt7dXJsOlwicGVyc29uYWxpemF0aW9uLlwiLmNvbmNhdChlLFwiLmFsZ29saWEuY29tXCIpfV19LHQpLHt9LHtoZWFkZXJzOnIocihyKHt9LG4uaGVhZGVycygpKSx7XCJjb250ZW50LXR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIn0pLHQuaGVhZGVycykscXVlcnlQYXJhbWV0ZXJzOnIocih7fSxuLnF1ZXJ5UGFyYW1ldGVycygpKSx0LnF1ZXJ5UGFyYW1ldGVycyl9KSk7cmV0dXJuIGgoe2FwcElkOnQuYXBwSWQsdHJhbnNwb3J0ZXI6YX0sdC5tZXRob2RzKX0ocihyKHIoe30sbyksdCkse30se21ldGhvZHM6e2dldFBlcnNvbmFsaXphdGlvblN0cmF0ZWd5Okgsc2V0UGVyc29uYWxpemF0aW9uU3RyYXRlZ3k6TX19KSl9fTtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIGU9dC5hcHBJZCxuPWModm9pZCAwIT09dC5hdXRoTW9kZT90LmF1dGhNb2RlOm0uV2l0aGluSGVhZGVycyxlLHQuYXBpS2V5KSxhPVMocihyKHtob3N0czpbe3VybDpcIlwiLmNvbmNhdChlLFwiLWRzbi5hbGdvbGlhLm5ldFwiKSxhY2NlcHQ6Zy5SZWFkfSx7dXJsOlwiXCIuY29uY2F0KGUsXCIuYWxnb2xpYS5uZXRcIiksYWNjZXB0OmcuV3JpdGV9XS5jb25jYXQobChbe3VybDpcIlwiLmNvbmNhdChlLFwiLTEuYWxnb2xpYW5ldC5jb21cIil9LHt1cmw6XCJcIi5jb25jYXQoZSxcIi0yLmFsZ29saWFuZXQuY29tXCIpfSx7dXJsOlwiXCIuY29uY2F0KGUsXCItMy5hbGdvbGlhbmV0LmNvbVwiKX1dKSl9LHQpLHt9LHtoZWFkZXJzOnIocihyKHt9LG4uaGVhZGVycygpKSx7XCJjb250ZW50LXR5cGVcIjpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwifSksdC5oZWFkZXJzKSxxdWVyeVBhcmFtZXRlcnM6cihyKHt9LG4ucXVlcnlQYXJhbWV0ZXJzKCkpLHQucXVlcnlQYXJhbWV0ZXJzKX0pKTtyZXR1cm4gaCh7dHJhbnNwb3J0ZXI6YSxhcHBJZDplLGFkZEFsZ29saWFBZ2VudDpmdW5jdGlvbih0LGUpe2EudXNlckFnZW50LmFkZCh7c2VnbWVudDp0LHZlcnNpb246ZX0pfSxjbGVhckNhY2hlOmZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UuYWxsKFthLnJlcXVlc3RzQ2FjaGUuY2xlYXIoKSxhLnJlc3BvbnNlc0NhY2hlLmNsZWFyKCldKS50aGVuKChmdW5jdGlvbigpe30pKX19LHQubWV0aG9kcyl9KHIocih7fSxmKSx7fSx7bWV0aG9kczp7c2VhcmNoOm10LHNlYXJjaEZvckZhY2V0VmFsdWVzOnl0LG11bHRpcGxlQmF0Y2g6aHQsbXVsdGlwbGVHZXRPYmplY3RzOnB0LG11bHRpcGxlUXVlcmllczptdCxjb3B5SW5kZXg6Ryxjb3B5U2V0dGluZ3M6Xyxjb3B5U3lub255bXM6WCxjb3B5UnVsZXM6Vixtb3ZlSW5kZXg6bHQsbGlzdEluZGljZXM6ZnQsZ2V0TG9nczpudCxsaXN0Q2x1c3RlcnM6Y3QsbXVsdGlwbGVTZWFyY2hGb3JGYWNldFZhbHVlczp5dCxnZXRBcGlLZXk6dHQsYWRkQXBpS2V5OkssbGlzdEFwaUtleXM6c3QsdXBkYXRlQXBpS2V5Onh0LGRlbGV0ZUFwaUtleTpaLHJlc3RvcmVBcGlLZXk6YnQsYXNzaWduVXNlcklEOlcsYXNzaWduVXNlcklEczpMLGdldFVzZXJJRDpvdCxzZWFyY2hVc2VySURzOnd0LGxpc3RVc2VySURzOmR0LGdldFRvcFVzZXJJRHM6YXQscmVtb3ZlVXNlcklEOmd0LGhhc1BlbmRpbmdNYXBwaW5nczppdCxjbGVhckRpY3Rpb25hcnlFbnRyaWVzOlEsZGVsZXRlRGljdGlvbmFyeUVudHJpZXM6JCxnZXREaWN0aW9uYXJ5U2V0dGluZ3M6cnQsZ2V0QXBwVGFzazpldCxyZXBsYWNlRGljdGlvbmFyeUVudHJpZXM6dnQsc2F2ZURpY3Rpb25hcnlFbnRyaWVzOlB0LHNlYXJjaERpY3Rpb25hcnlFbnRyaWVzOk90LHNldERpY3Rpb25hcnlTZXR0aW5nczpJdCx3YWl0QXBwVGFzazpqdCxjdXN0b21SZXF1ZXN0OlksaW5pdEluZGV4OmZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gdXQodCkoZSx7bWV0aG9kczp7YmF0Y2g6RHQsZGVsZXRlOkN0LGZpbmRBbnN3ZXJzOk10LGdldE9iamVjdDpLdCxnZXRPYmplY3RzOkx0LHNhdmVPYmplY3Q6dGUsc2F2ZU9iamVjdHM6ZWUsc2VhcmNoOmllLHNlYXJjaEZvckZhY2V0VmFsdWVzOnVlLHdhaXRUYXNrOmRlLHNldFNldHRpbmdzOmZlLGdldFNldHRpbmdzOkd0LHBhcnRpYWxVcGRhdGVPYmplY3Q6X3QscGFydGlhbFVwZGF0ZU9iamVjdHM6WHQsZGVsZXRlT2JqZWN0OlV0LGRlbGV0ZU9iamVjdHM6enQsZGVsZXRlQnk6QXQsY2xlYXJPYmplY3RzOk50LGJyb3dzZU9iamVjdHM6cXQsZ2V0T2JqZWN0UG9zaXRpb246V3QsZmluZE9iamVjdDpCdCxleGlzdHM6SHQsc2F2ZVN5bm9ueW06YWUsc2F2ZVN5bm9ueW1zOm9lLGdldFN5bm9ueW06VnQsc2VhcmNoU3lub255bXM6Y2UsYnJvd3NlU3lub255bXM6U3QsZGVsZXRlU3lub255bTpGdCxjbGVhclN5bm9ueW1zOkV0LHJlcGxhY2VBbGxPYmplY3RzOll0LHJlcGxhY2VBbGxTeW5vbnltczokdCxzZWFyY2hSdWxlczpzZSxnZXRSdWxlOlF0LGRlbGV0ZVJ1bGU6SnQsc2F2ZVJ1bGU6cmUsc2F2ZVJ1bGVzOm5lLHJlcGxhY2VBbGxSdWxlczpadCxicm93c2VSdWxlczprdCxjbGVhclJ1bGVzOlJ0fX0pfX0saW5pdEFuYWx5dGljczpmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIGU9dC5yZWdpb258fFwidXNcIixuPWMobS5XaXRoaW5IZWFkZXJzLHQuYXBwSWQsdC5hcGlLZXkpLGE9UyhyKHIoe2hvc3RzOlt7dXJsOlwiYW5hbHl0aWNzLlwiLmNvbmNhdChlLFwiLmFsZ29saWEuY29tXCIpfV19LHQpLHt9LHtoZWFkZXJzOnIocihyKHt9LG4uaGVhZGVycygpKSx7XCJjb250ZW50LXR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIn0pLHQuaGVhZGVycykscXVlcnlQYXJhbWV0ZXJzOnIocih7fSxuLnF1ZXJ5UGFyYW1ldGVycygpKSx0LnF1ZXJ5UGFyYW1ldGVycyl9KSk7cmV0dXJuIGgoe2FwcElkOnQuYXBwSWQsdHJhbnNwb3J0ZXI6YX0sdC5tZXRob2RzKX0ocihyKHIoe30sbyksdCkse30se21ldGhvZHM6e2FkZEFCVGVzdDpDLGdldEFCVGVzdDp6LGdldEFCVGVzdHM6SixzdG9wQUJUZXN0OkYsZGVsZXRlQUJUZXN0OlV9fSkpfX0saW5pdFBlcnNvbmFsaXphdGlvbjpkLGluaXRSZWNvbW1lbmRhdGlvbjpmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gZi5sb2dnZXIuaW5mbyhcIlRoZSBgaW5pdFJlY29tbWVuZGF0aW9uYCBtZXRob2QgaXMgZGVwcmVjYXRlZC4gVXNlIGBpbml0UGVyc29uYWxpemF0aW9uYCBpbnN0ZWFkLlwiKSxkKCkodCl9fSxnZXRSZWNvbW1lbmRhdGlvbnM6Z2UsZ2V0RnJlcXVlbnRseUJvdWdodFRvZ2V0aGVyOnZlLGdldExvb2tpbmdTaW1pbGFyOndlLGdldFJlY29tbWVuZGVkRm9yWW91OkllLGdldFJlbGF0ZWRQcm9kdWN0czpiZSxnZXRUcmVuZGluZ0ZhY2V0czpQZSxnZXRUcmVuZGluZ0l0ZW1zOk9lfX0pKX1yZXR1cm4geGUudmVyc2lvbj1cIjQuMjMuM1wiLHhlfSkpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBmb250LWZhbWlseTogXCJOZXRmbGl4IFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDE0MTQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuLm5ldGZsaXgtaGVhZGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLm5ldGZsaXgtaGVhZGluZyBoMSB7XG4gIGZvbnQtZmFtaWx5OiBcIk5ldGZsaXggU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNlYXJjaC1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5zZWFyY2gtY29udGFpbmVyIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDYwJTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zZWFyY2gtY29udGFpbmVyIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1MDkxNDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLm1vdmllcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgZ2FwOiAyMHB4O1xufVxuXG4ubW92aWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG4gIHdpZHRoOiAxNHJlbTtcbn1cblxuLm1vdmllOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xufVxuXG4ubW92aWUgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm1vdmllIGgzIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICB6LWluZGV4OiA5OTk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ub3ZlcmxheS1jb250ZW50IHtcbiAgd2lkdGg6IDgwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2xvc2UtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi8qIEJsdXIgZWZmZWN0ICovXG4uY29udGFpbmVyIHtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwyRUFBMkU7RUFDM0UsU0FBUztFQUNULFVBQVU7RUFDVix5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDJFQUEyRTtFQUMzRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0UsMEJBQTBCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOZXRmbGl4IFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDE0MTQ7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxufVxcblxcbi5uZXRmbGl4LWhlYWRpbmcge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLm5ldGZsaXgtaGVhZGluZyBoMSB7XFxuICBmb250LWZhbWlseTogXFxcIk5ldGZsaXggU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDQ4cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB3aWR0aDogNjAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uc2VhcmNoLWNvbnRhaW5lciBidXR0b24ge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1MDkxNDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4ubW92aWVzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5tb3ZpZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcbiAgd2lkdGg6IDE0cmVtO1xcbn1cXG5cXG4ubW92aWU6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbn1cXG5cXG4ubW92aWUgaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm1vdmllIGgzIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgei1pbmRleDogOTk5O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm92ZXJsYXktY29udGVudCB7XFxuICB3aWR0aDogODAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTBweDtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY29sb3I6ICMzMzM7XFxufVxcblxcbi8qIEJsdXIgZWZmZWN0ICovXFxuLmNvbnRhaW5lciB7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBBUElfS0VZLCBBUFBfSUQgfSBmcm9tIFwiLi4vYXBpa2V5XCI7XG5cbi8vIEltcG9ydCBhbGdvbGlhc2VhcmNoXG5jb25zdCBhbGdvbGlhc2VhcmNoID0gcmVxdWlyZShcImFsZ29saWFzZWFyY2hcIik7XG5cbi8vIENvbm5lY3QgYW5kIGF1dGhlbnRpY2F0ZSB3aXRoIHRoZSBBbGdvbGlhIGFwcFxuY29uc3QgY2xpZW50ID0gYWxnb2xpYXNlYXJjaChBUFBfSUQsIEFQSV9LRVkpO1xuXG4vLyBGaW5kIHNhbXBsZSBpbmRleCBvZiBtb3ZpZXNcbmNvbnN0IGluZGV4ID0gY2xpZW50LmluaXRJbmRleChcIm1vdmllc19pbmRleFwiKTtcblxuLy8gQWRkIGZ1bmN0aW9uIHRvIHNlYXJjaCB0aGUgaW5kZXhcbmFzeW5jIGZ1bmN0aW9uIHNlYXJjaChtb3ZpZSkge1xuICByZXR1cm4gYXdhaXQgaW5kZXguc2VhcmNoKG1vdmllKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIHJldHVybiByZXNwb25zZS5oaXRzO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoO1xuIiwiaW1wb3J0IHsgaGFuZGxlTW92aWVDbGljaywgc2VhcmNoZWRNb3ZpZXMgfSBmcm9tIFwiLi9oYW5kbGVycy5qc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVNb3ZpZUNhcmQobW92aWUpIHtcbiAgY29uc3QgbW92aWVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW92aWVDYXJkLmNsYXNzTGlzdC5hZGQoXCJtb3ZpZVwiKTtcbiAgbW92aWVDYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIG1vdmllLmlkKTtcblxuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltYWdlLnNyYyA9IG1vdmllLmJhY2tkcm9wX3BhdGg7XG4gIGltYWdlLmFsdCA9IG1vdmllLnRpdGxlO1xuICBtb3ZpZUNhcmQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IG1vdmllLnRpdGxlO1xuICBtb3ZpZUNhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIG1vdmllQ2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBoYW5kbGVNb3ZpZUNsaWNrKGUsIHNlYXJjaGVkTW92aWVzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIG1vdmllQ2FyZDtcbn1cblxuZnVuY3Rpb24gc2hvd01vdmllT3ZlcmxheShtb3ZpZSkge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwib3ZlcmxheVwiKTtcblxuICBjb25zdCBvdmVybGF5Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG92ZXJsYXlDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJvdmVybGF5LWNvbnRlbnRcIik7XG5cbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZChcImNsb3NlLWJ1dHRvblwiKTtcbiAgY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gXCImdGltZXM7XCI7XG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZS5zcmMgPSBtb3ZpZS5iYWNrZHJvcF9wYXRoO1xuICBpbWFnZS5hbHQgPSBtb3ZpZS50aXRsZTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBtb3ZpZS50aXRsZTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG1vdmllLm92ZXJ2aWV3O1xuXG4gIG92ZXJsYXlDb250ZW50LmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcbiAgb3ZlcmxheUNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICBvdmVybGF5Q29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIG92ZXJsYXlDb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICBvdmVybGF5LmFwcGVuZENoaWxkKG92ZXJsYXlDb250ZW50KTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlTW92aWVDYXJkLCBzaG93TW92aWVPdmVybGF5IH07XG4iLCJpbXBvcnQgc2VhcmNoIGZyb20gXCIuL2FwaVwiO1xuaW1wb3J0IHsgc2hvd01vdmllT3ZlcmxheSwgY3JlYXRlTW92aWVDYXJkIH0gZnJvbSBcIi4vZG9tXCI7XG5cbmxldCBzZWFyY2hlZE1vdmllcyA9IG5ldyBNYXAoKTtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlU2VhcmNoKCkge1xuICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoXCIpLnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IG1vdmllc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW92aWVzLWNvbnRhaW5lclwiKTtcbiAgbW92aWVzQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7IC8vIENsZWFyIHByZXZpb3VzIHNlYXJjaCByZXN1bHRzXG5cbiAgc2VhcmNoZWRNb3ZpZXMgPSBuZXcgTWFwKCk7XG5cbiAgaWYgKHNlYXJjaElucHV0KSB7XG4gICAgbGV0IG1vdmllcyA9IGF3YWl0IHNlYXJjaChzZWFyY2hJbnB1dCk7XG4gICAgY29uc29sZS5sb2cobW92aWVzKTtcblxuICAgIG1vdmllcy5mb3JFYWNoKChtb3ZpZSkgPT4ge1xuICAgICAgc2VhcmNoZWRNb3ZpZXMuc2V0KG1vdmllLmlkLnRvU3RyaW5nKCksIHsgbW92aWUgfSk7XG4gICAgICBsZXQgbW92aWVDYXJkID0gY3JlYXRlTW92aWVDYXJkKG1vdmllKTtcbiAgICAgIG1vdmllc0NvbnRhaW5lci5hcHBlbmRDaGlsZChtb3ZpZUNhcmQpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBzZWFyY2hlZE1vdmllcztcbn1cblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlTW92aWVDbGljayhlLCBzZWFyY2hlZE1vdmllcykge1xuICBjb25zdCBtb3ZpZUlEID1cbiAgICBlLnRhcmdldC5pZC5sZW5ndGggIT0gMCA/IGUudGFyZ2V0LmlkIDogZS50YXJnZXQucGFyZW50Tm9kZS5pZDtcbiAgaWYgKHNlYXJjaGVkTW92aWVzLmhhcyhtb3ZpZUlEKSkge1xuICAgIGNvbnN0IG1vdmllID0gc2VhcmNoZWRNb3ZpZXMuZ2V0KG1vdmllSUQpO1xuICAgIHNob3dNb3ZpZU92ZXJsYXkobW92aWUubW92aWUpO1xuICB9XG59XG5cbmV4cG9ydCB7IGhhbmRsZU1vdmllQ2xpY2ssIGhhbmRsZVNlYXJjaCwgc2VhcmNoZWRNb3ZpZXMgfTtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBoYW5kbGVTZWFyY2ggfSBmcm9tIFwiLi9oYW5kbGVyc1wiO1xuXG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xuYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVTZWFyY2gpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9