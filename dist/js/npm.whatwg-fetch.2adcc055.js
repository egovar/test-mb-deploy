(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.whatwg-fetch"],{"6d93":function(t,e,r){"use strict";var o="undefined"!==typeof globalThis&&globalThis||"undefined"!==typeof self&&self||"undefined"!==typeof o&&o,n={searchParams:"URLSearchParams"in o,iterable:"Symbol"in o&&"iterator"in Symbol,blob:"FileReader"in o&&"Blob"in o&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in o,arrayBuffer:"ArrayBuffer"in o};function i(t){return t&&DataView.prototype.isPrototypeOf(t)}if(n.arrayBuffer)var s=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],a=ArrayBuffer.isView||function(t){return t&&s.indexOf(Object.prototype.toString.call(t))>-1};function h(t){if("string"!==typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||""===t)throw new TypeError('Invalid character in header field name: "'+t+'"');return t.toLowerCase()}function u(t){return"string"!==typeof t&&(t=String(t)),t}function f(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return n.iterable&&(e[Symbol.iterator]=function(){return e}),e}function c(t){this.map={},t instanceof c?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function d(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function y(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function l(t){var e=new FileReader,r=y(e);return e.readAsArrayBuffer(t),r}function p(t){var e=new FileReader,r=y(e);return e.readAsText(t),r}function b(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}function m(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function w(){return this.bodyUsed=!1,this._initBody=function(t){this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?"string"===typeof t?this._bodyText=t:n.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:n.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:n.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():n.arrayBuffer&&n.blob&&i(t)?(this._bodyArrayBuffer=m(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):n.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||a(t))?this._bodyArrayBuffer=m(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"===typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n.blob&&(this.blob=function(){var t=d(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var t=d(this);return t||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}return this.blob().then(l)}),this.text=function(){var t=d(this);if(t)return t;if(this._bodyBlob)return p(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(b(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},n.formData&&(this.formData=function(){return this.text().then(g)}),this.json=function(){return this.text().then(JSON.parse)},this}c.prototype.append=function(t,e){t=h(t),e=u(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},c.prototype["delete"]=function(t){delete this.map[h(t)]},c.prototype.get=function(t){return t=h(t),this.has(t)?this.map[t]:null},c.prototype.has=function(t){return this.map.hasOwnProperty(h(t))},c.prototype.set=function(t,e){this.map[h(t)]=u(e)},c.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},c.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),f(t)},c.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),f(t)},c.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),f(t)},n.iterable&&(c.prototype[Symbol.iterator]=c.prototype.entries);var v=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function T(t){var e=t.toUpperCase();return v.indexOf(e)>-1?e:t}function A(t,e){if(!(this instanceof A))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');e=e||{};var r=e.body;if(t instanceof A){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new c(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new c(e.headers)),this.method=T(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(r),("GET"===this.method||"HEAD"===this.method)&&("no-store"===e.cache||"no-cache"===e.cache)){var o=/([?&])_=[^&]*/;if(o.test(this.url))this.url=this.url.replace(o,"$1_="+(new Date).getTime());else{var n=/\?/;this.url+=(n.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function g(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}})),e}function _(t){var e=new c,r=t.replace(/\r?\n[\t ]+/g," ");return r.split("\r").map((function(t){return 0===t.indexOf("\n")?t.substr(1,t.length):t})).forEach((function(t){var r=t.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();e.append(o,n)}})),e}function B(t,e){if(!(this instanceof B))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText=void 0===e.statusText?"":""+e.statusText,this.headers=new c(e.headers),this.url=e.url||"",this._initBody(t)}A.prototype.clone=function(){return new A(this,{body:this._bodyInit})},w.call(A.prototype),w.call(B.prototype),B.prototype.clone=function(){return new B(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new c(this.headers),url:this.url})},B.error=function(){var t=new B(null,{status:0,statusText:""});return t.type="error",t};var E=[301,302,303,307,308];B.redirect=function(t,e){if(-1===E.indexOf(e))throw new RangeError("Invalid status code");return new B(null,{status:e,headers:{location:t}})};var P=o.DOMException;try{new P}catch(O){P=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack},P.prototype=Object.create(Error.prototype),P.prototype.constructor=P}function x(t,e){return new Promise((function(r,i){var s=new A(t,e);if(s.signal&&s.signal.aborted)return i(new P("Aborted","AbortError"));var a=new XMLHttpRequest;function h(){a.abort()}function f(t){try{return""===t&&o.location.href?o.location.href:t}catch(e){return t}}a.onload=function(){var t={status:a.status,statusText:a.statusText,headers:_(a.getAllResponseHeaders()||"")};t.url="responseURL"in a?a.responseURL:t.headers.get("X-Request-URL");var e="response"in a?a.response:a.responseText;setTimeout((function(){r(new B(e,t))}),0)},a.onerror=function(){setTimeout((function(){i(new TypeError("Network request failed"))}),0)},a.ontimeout=function(){setTimeout((function(){i(new TypeError("Network request failed"))}),0)},a.onabort=function(){setTimeout((function(){i(new P("Aborted","AbortError"))}),0)},a.open(s.method,f(s.url),!0),"include"===s.credentials?a.withCredentials=!0:"omit"===s.credentials&&(a.withCredentials=!1),"responseType"in a&&(n.blob?a.responseType="blob":n.arrayBuffer&&s.headers.get("Content-Type")&&-1!==s.headers.get("Content-Type").indexOf("application/octet-stream")&&(a.responseType="arraybuffer")),!e||"object"!==typeof e.headers||e.headers instanceof c?s.headers.forEach((function(t,e){a.setRequestHeader(e,t)})):Object.getOwnPropertyNames(e.headers).forEach((function(t){a.setRequestHeader(t,u(e.headers[t]))})),s.signal&&(s.signal.addEventListener("abort",h),a.onreadystatechange=function(){4===a.readyState&&s.signal.removeEventListener("abort",h)}),a.send("undefined"===typeof s._bodyInit?null:s._bodyInit)}))}x.polyfill=!0,o.fetch||(o.fetch=x,o.Headers=c,o.Request=A,o.Response=B)}}]);
//# sourceMappingURL=npm.whatwg-fetch.2adcc055.js.map