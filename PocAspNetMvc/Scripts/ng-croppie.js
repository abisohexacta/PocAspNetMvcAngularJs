/*************************
 * Croppie
 * Copyright 2015
 * Foliotek
 * Version: 1.0.3
 *************************/
!function(t,e){"function"==typeof define&&define.amd?define(["exports","b"],e):"object"==typeof exports&&"string"!=typeof exports.nodeName?e(exports,require("b")):e(t.commonJsStrict={},t.b)}(this,function(t,e){function n(t){if(t in j)return t;for(var e=t[0].toUpperCase()+t.slice(1),n=X.length;n--;)if(t=X[n]+e,t in j)return t}function r(t){t=t||{};for(var e=1;e<arguments.length;e++){var n=arguments[e];if(n)for(var o in n)n.hasOwnProperty(o)&&("object"==typeof n[o]?t[o]=r({},n[o]):t[o]=n[o])}return t}function o(t,e,n){var r;return function(){var o=this,i=arguments,s=function(){r=null,n||t.apply(o,i)},a=n&&!r;clearTimeout(r),r=setTimeout(s,e),a&&t.apply(o,i)}}function i(t){if("createEvent"in document){var e=document.createEvent("HTMLEvents");e.initEvent("change",!1,!0),t.dispatchEvent(e)}else t.fireEvent("onchange")}function s(t,e,n){if("string"==typeof e){var r=e;e={},e[r]=n}for(var o in e)t.style[o]=e[o]}function a(t){var e=t.points,n=document.createElement("div"),r=document.createElement("img"),o=e[2]-e[0],i=e[3]-e[1];return n.classList.add("croppie-result"),n.appendChild(r),s(r,{left:-1*e[0]+"px",top:-1*e[1]+"px"}),r.src=t.url,s(n,{width:o+"px",height:i+"px"}),n}function u(t,e){var n=e.points,r=n[0],o=n[1],i=n[2]-n[0],s=n[3]-n[1],a=e.circle,u=document.createElement("canvas"),l=u.getContext("2d"),c=i,p=s;return e.outputWidth&&e.outputHeight&&(c=e.outputWidth,p=e.outputHeight),u.width=c,u.height=p,a&&(l.save(),l.beginPath(),l.arc(c/2,p/2,c/2,0,2*Math.PI,!0),l.closePath(),l.clip()),l.drawImage(t,r,o,i,s,0,0,c,p),u.toDataURL()}function l(t,e){var n,r=e||new Image;return n=new Promise(function(t,e){r.setAttribute("crossOrigin","anonymous"),r.onload=function(){setTimeout(function(){t(r)},1)}}),r.src=t,n}function c(){var t,e,n,r,o=this,i=["croppie-container"],a=o.options.viewport.type?"cr-vp-"+o.options.viewport.type:null;o.data={},o.elements={},t=o.elements.boundary=document.createElement("div"),n=o.elements.viewport=document.createElement("div"),e=o.elements.img=document.createElement("img"),r=o.elements.overlay=document.createElement("div"),t.classList.add("cr-boundary"),s(t,{width:o.options.boundary.width+"px",height:o.options.boundary.height+"px"}),n.classList.add("cr-viewport"),a&&n.classList.add(a),s(n,{width:o.options.viewport.width+"px",height:o.options.viewport.height+"px"}),e.classList.add("cr-image"),r.classList.add("cr-overlay"),o.element.appendChild(t),t.appendChild(e),t.appendChild(n),t.appendChild(r),o.element.classList.add(i),o.options.customClass&&o.element.classList.add(o.options.customClass),g.call(this),o.options.showZoom&&m.call(o)}function p(t){this.options.showZoom&&(this.elements.zoomer.value=E(t))}function m(){function t(){h.call(s),r=new I(s.elements.img),o=s.elements.viewport.getBoundingClientRect(),i=F.parse(s.elements.img)}function e(){d.call(s,{value:parseFloat(u.value),origin:r||new I(s.elements.img),viewportRect:o||s.elements.viewport.getBoundingClientRect(),transform:i||F.parse(s.elements.img)})}function n(n){var r=n.deltaY/-2e3,o=s._currentZoom+r;n.preventDefault(),t(),p.call(s,o),e()}var r,o,i,s=this,a=s.elements.zoomerWrap=document.createElement("div"),u=s.elements.zoomer=document.createElement("input");a.classList.add("cr-slider-wrap"),u.type="range",u.classList.add("cr-slider"),u.step="0.01",u.value=1,s.element.appendChild(a),a.appendChild(u),s._currentZoom=1,s.elements.zoomer.addEventListener("mousedown",t),s.elements.zoomer.addEventListener("touchstart",t),s.elements.zoomer.addEventListener("input",e),s.elements.zoomer.addEventListener("change",e),s.options.mouseWheelZoom&&(s.elements.boundary.addEventListener("mousewheel",n),s.elements.boundary.addEventListener("DOMMouseScroll",n))}function d(t){var e=this,n=t.transform,r=t.viewportRect,o=t.origin;e._currentZoom=t.value,n.scale=e._currentZoom;var i=f.call(e,r),a=i.translate,u=i.origin;n.x>=a.maxX&&(o.x=u.minX,n.x=a.maxX),n.x<=a.minX&&(o.x=u.maxX,n.x=a.minX),n.y>=a.maxY&&(o.y=u.minY,n.y=a.maxY),n.y<=a.minY&&(o.y=u.maxY,n.y=a.minY);var l={};l[B]=n.toString(),l[M]=o.toString(),s(e.elements.img,l),O.call(e),y.call(e)}function f(t){var e=this,n=e._currentZoom,r=t.width,o=t.height,i=e.options.boundary.width/2,s=e.options.boundary.height/2,a=e._originalImageWidth,u=e._originalImageHeight,l=a*n,c=u*n,p=r/2,m=o/2,d=-1*(p/n-i),f=d-(l*(1/n)-r*(1/n)),h=-1*(m/n-s),g=h-(c*(1/n)-o*(1/n)),v=1/n*p,y=l*(1/n)-v,w=1/n*m,_=c*(1/n)-w;return{translate:{maxX:d,minX:f,maxY:h,minY:g},origin:{maxX:y,minX:v,maxY:_,minY:w}}}function h(){var t=this,e=t._currentZoom,n=t.elements.img.getBoundingClientRect(),r=t.elements.viewport.getBoundingClientRect(),o=F.parse(t.elements.img.style[B]),i=new I(t.elements.img),a=r.top-n.top+r.height/2,u=r.left-n.left+r.width/2,l={},c={};l.y=a/e,l.x=u/e,c.y=(l.y-i.y)*(1-e),c.x=(l.x-i.x)*(1-e),o.x-=c.x,o.y-=c.y;var p={};p[M]=l.x+"px "+l.y+"px",p[B]=o.toString(),s(t.elements.img,p)}function g(){function t(t){t.preventDefault(),c||(c=!0,r=t.pageX,o=t.pageY,transform=F.parse(l.elements.img),window.addEventListener("mousemove",e),window.addEventListener("touchmove",e),window.addEventListener("mouseup",n),window.addEventListener("touchend",n),document.body.style[Z]="none",u=l.elements.viewport.getBoundingClientRect())}function e(t){t.preventDefault();var e=t.pageX||t.touches[0].pageX,n=t.pageY||t.touches[0].pageY,c=e-r,m=n-o,d=l.elements.img.getBoundingClientRect(),f=transform.y+m,h=transform.x+c,g={};if("touchmove"==t.type&&t.touches.length>1){var y=t.touches[0],w=t.touches[1],_=Math.sqrt((y.pageX-w.pageX)*(y.pageX-w.pageX)+(y.pageY-w.pageY)*(y.pageY-w.pageY));a||(a=_/l._currentZoom);var x=_/a;return p.call(l,x),void i(l.elements.zoomer)}u.top>d.top+m&&u.bottom<d.bottom+m&&(transform.y=f),u.left>d.left+c&&u.right<d.right+c&&(transform.x=h),g[B]=transform.toString(),s(l.elements.img,g),v.call(l),o=n,r=e}function n(){c=!1,window.removeEventListener("mousemove",e),window.removeEventListener("touchmove",e),window.removeEventListener("mouseup",n),window.removeEventListener("touchend",n),document.body.style[Z]="",h.call(l),y.call(l),a=0}var r,o,a,u,l=this,c=!1;l.elements.overlay.addEventListener("mousedown",t),l.elements.overlay.addEventListener("touchstart",t)}function v(){var t=this,e=t.elements.boundary.getBoundingClientRect(),n=t.elements.img.getBoundingClientRect();s(t.elements.overlay,{width:n.width+"px",height:n.height+"px",top:n.top-e.top+"px",left:n.left-e.left+"px"})}function y(){var t=this;w.call(t)&&t.options.update.call(t,t.get())}function w(){return this.elements.img.offsetHeight>0&&this.elements.img.offsetWidth>0}function _(){var t,e,n,r,o,a=this,u=0,l=1.5,c=1,m={},d=a.elements.img,f=a.elements.zoomer,h=new F(0,0,c),g=new I,y=w.call(a);y&&!a.data.bound&&(a.data.bound=!0,m[B]=h.toString(),m[M]=g.toString(),s(d,m),t=d.getBoundingClientRect(),e=a.elements.viewport.getBoundingClientRect(),n=a.elements.boundary.getBoundingClientRect(),a._originalImageWidth=t.width,a._originalImageHeight=t.height,a.options.showZoom&&(r=e.width/t.width,o=e.height/t.height,u=Math.max(r,o),u>=l&&(l=u+1),f.min=E(u),f.max=E(l),c=Math.max(n.width/t.width,n.height/t.height),p.call(a,c),i(f)),a._currentZoom=h.scale=c,m[B]=h.toString(),s(d,m),a.data.points.length?x.call(a,a.data.points):b.call(a),v.call(a))}function x(t){if(4!=t.length)throw"Croppie - Invalid number of points supplied: "+t;var e=this,n=t[2]-t[0],r=e.elements.viewport.getBoundingClientRect(),o=e.elements.boundary.getBoundingClientRect(),i={left:r.left-o.left,top:r.top-o.top},a=r.width/n,u=t[1],l=t[0],c=-1*t[1]+i.top,m=-1*t[0]+i.left,d={};d[M]=l+"px "+u+"px",d[B]=new F(m,c,a).toString(),s(e.elements.img,d),p.call(e,a),e._currentZoom=a}function b(){var t=this,e=t.elements.img.getBoundingClientRect(),n=t.elements.viewport.getBoundingClientRect(),r=t.elements.boundary.getBoundingClientRect(),o=n.left-r.left,i=n.top-r.top,a=o-(e.width-n.width)/2,u=i-(e.height-n.height)/2,l=new F(a,u,t._currentZoom);s(t.elements.img,B,l.toString())}function C(t,e){var n,r=this,o=[];if("string"==typeof t)n=t,t={};else if(Array.isArray(t))o=t.slice();else{if("undefined"==typeof t&&r.data.url)return _.call(r),y.call(r),null;n=t.url,o=t.points||[]}r.data.bound=!1,r.data.url=n||r.data.url,r.data.points=(o||r.data.points).map(function(t){return parseFloat(t)});var i=l(n,r.elements.img);return i.then(function(){_.call(r),y.call(r),e&&e()}),i}function E(t){return parseFloat(t).toFixed(2)}function L(){var t=this,e=t.elements.img.getBoundingClientRect(),n=t.elements.viewport.getBoundingClientRect(),r=n.left-e.left,o=n.top-e.top,i=r+n.width,s=o+n.height,a=t._currentZoom;return(a===1/0||isNaN(a))&&(a=1),r=Math.max(0,r/a),o=Math.max(0,o/a),i=Math.max(0,i/a),s=Math.max(0,s/a),{points:[E(r),E(o),E(i),E(s)],zoom:a}}function S(t){var e,n,r=this,o=L.call(r),i=t||{type:"canvas",size:"viewport"},s="string"==typeof i?i:i.type,c=i.size||"viewport";return"viewport"===c&&(e=r.elements.viewport.getBoundingClientRect(),o.outputWidth=e.width,o.outputHeight=e.height),o.circle="circle"===r.options.viewport.type,o.url=r.data.url,n=new Promise(function(t,e){"canvas"===s?l(o.url).then(function(e){t(u(e,o))}):t(a(o))})}function A(){console.warn("Croppie.refresh() is deprecated.  Please use Croppie.bind() without any arguments instead.  refresh() will be removed in a later release."),_.call(this)}function R(){var t=this;t.element.removeChild(t.elements.boundary),t.options.showZoom&&t.element.removeChild(t.elements.zoomerWrap),delete t.elements}function Y(t,e){this.element=t,this.options=r({},Y.defaults,e),c.call(this)}"function"!=typeof Promise&&function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function e(t){return"function"==typeof t}function n(t){return"object"==typeof t&&null!==t}function r(t){W=t}function o(t){k=t}function i(){return function(){process.nextTick(c)}}function s(){return function(){T(c)}}function a(){var t=0,e=new Q(c),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=c,function(){t.port2.postMessage(0)}}function l(){return function(){setTimeout(c,1)}}function c(){for(var t=0;q>t;t+=2){var e=G[t],n=G[t+1];e(n),G[t]=void 0,G[t+1]=void 0}q=0}function p(){try{var t=require,e=t("vertx");return T=e.runOnLoop||e.runOnContext,s()}catch(n){return l()}}function m(){}function d(){return new TypeError("You cannot resolve a promise with itself")}function f(){return new TypeError("A promises callback cannot return that same promise.")}function h(t){try{return t.then}catch(e){return et.error=e,et}}function g(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function v(t,e,n){k(function(t){var r=!1,o=g(n,e,function(n){r||(r=!0,e!==n?_(t,n):b(t,n))},function(e){r||(r=!0,C(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,C(t,o))},t)}function y(t,e){e._state===$?b(t,e._result):e._state===tt?C(t,e._result):E(e,void 0,function(e){_(t,e)},function(e){C(t,e)})}function w(t,n){if(n.constructor===t.constructor)y(t,n);else{var r=h(n);r===et?C(t,et.error):void 0===r?b(t,n):e(r)?v(t,n,r):b(t,n)}}function _(e,n){e===n?C(e,d()):t(n)?w(e,n):b(e,n)}function x(t){t._onerror&&t._onerror(t._result),L(t)}function b(t,e){t._state===V&&(t._result=e,t._state=$,0!==t._subscribers.length&&k(L,t))}function C(t,e){t._state===V&&(t._state=tt,t._result=e,k(x,t))}function E(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+$]=n,o[i+tt]=r,0===i&&t._state&&k(L,t)}function L(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r,o,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?R(n,r,o,i):o(i);t._subscribers.length=0}}function S(){this.error=null}function A(t,e){try{return t(e)}catch(n){return nt.error=n,nt}}function R(t,n,r,o){var i,s,a,u,l=e(r);if(l){if(i=A(r,o),i===nt?(u=!0,s=i.error,i=null):a=!0,n===i)return void C(n,f())}else i=o,a=!0;n._state!==V||(l&&a?_(n,i):u?C(n,s):t===$?b(n,i):t===tt&&C(n,i))}function Y(t,e){try{e(function(e){_(t,e)},function(e){C(t,e)})}catch(n){C(t,n)}}function M(t,e){var n=this;n._instanceConstructor=t,n.promise=new t(m),n._validateInput(e)?(n._input=e,n.length=e.length,n._remaining=e.length,n._init(),0===n.length?b(n.promise,n._result):(n.length=n.length||0,n._enumerate(),0===n._remaining&&b(n.promise,n._result))):C(n.promise,n._validationError())}function B(t){return new rt(this,t).promise}function Z(t){function e(t){_(o,t)}function n(t){C(o,t)}var r=this,o=new r(m);if(!H(t))return C(o,new TypeError("You must pass an array to race.")),o;for(var i=t.length,s=0;o._state===V&&i>s;s++)E(r.resolve(t[s]),void 0,e,n);return o}function X(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(m);return _(n,t),n}function j(t){var e=this,n=new e(m);return C(n,t),n}function P(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function z(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function F(t){this._id=ut++,this._state=void 0,this._result=void 0,this._subscribers=[],m!==t&&(e(t)||P(),this instanceof F||z(),Y(this,t))}function I(){var t;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;(!n||"[object Promise]"!==Object.prototype.toString.call(n.resolve())||n.cast)&&(t.Promise=lt)}var O;O=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var T,W,D,H=O,q=0,k=({}.toString,function(t,e){G[q]=t,G[q+1]=e,q+=2,2===q&&(W?W(c):D())}),N="undefined"!=typeof window?window:void 0,U=N||{},Q=U.MutationObserver||U.WebKitMutationObserver,J="undefined"!=typeof process&&"[object process]"==={}.toString.call(process),K="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,G=new Array(1e3);D=J?i():Q?a():K?u():void 0===N&&"function"==typeof require?p():l();var V=void 0,$=1,tt=2,et=new S,nt=new S;M.prototype._validateInput=function(t){return H(t)},M.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},M.prototype._init=function(){this._result=new Array(this.length)};var rt=M;M.prototype._enumerate=function(){for(var t=this,e=t.length,n=t.promise,r=t._input,o=0;n._state===V&&e>o;o++)t._eachEntry(r[o],o)},M.prototype._eachEntry=function(t,e){var r=this,o=r._instanceConstructor;n(t)?t.constructor===o&&t._state!==V?(t._onerror=null,r._settledAt(t._state,e,t._result)):r._willSettleAt(o.resolve(t),e):(r._remaining--,r._result[e]=t)},M.prototype._settledAt=function(t,e,n){var r=this,o=r.promise;o._state===V&&(r._remaining--,t===tt?C(o,n):r._result[e]=n),0===r._remaining&&b(o,r._result)},M.prototype._willSettleAt=function(t,e){var n=this;E(t,void 0,function(t){n._settledAt($,e,t)},function(t){n._settledAt(tt,e,t)})};var ot=B,it=Z,st=X,at=j,ut=0,lt=F;F.all=ot,F.race=it,F.resolve=st,F.reject=at,F._setScheduler=r,F._setAsap=o,F._asap=k,F.prototype={constructor:F,then:function(t,e){var n=this,r=n._state;if(r===$&&!t||r===tt&&!e)return this;var o=new this.constructor(m),i=n._result;if(r){var s=arguments[r-1];k(function(){R(r,o,s,i)})}else E(n,o,t,e);return o},"catch":function(t){return this.then(null,t)}};var ct=I,pt={Promise:lt,polyfill:ct};"function"==typeof define&&define.amd?define(function(){return pt}):"undefined"!=typeof module&&module.exports?module.exports=pt:"undefined"!=typeof this&&(this.ES6Promise=pt),ct()}.call(this);var M,B,Z,X=["Webkit","Moz","ms"],j=document.createElement("div").style;B=n("transform"),M=n("transformOrigin"),Z=n("userSelect");var P="translate3d",z=", 0px",F=function(t,e,n){this.x=parseFloat(t),this.y=parseFloat(e),this.scale=parseFloat(n)};F.parse=function(t){return t.style?F.parse(t.style[B]):t.indexOf("matrix")>-1||t.indexOf("none")>-1?F.fromMatrix(t):F.fromString(t)},F.fromMatrix=function(t){var e=t.substring(7).split(",");return e.length&&"none"!==t||(e=[1,0,0,1,0,0]),new F(parseInt(e[4],10),parseInt(e[5],10),parseFloat(e[0]))},F.fromString=function(t){var e=t.split(") "),n=e[0].substring(P.length+1).split(","),r=e.length>1?e[1].substring(6):1,o=n.length>1?n[0]:0,i=n.length>1?n[1]:0;return new F(o,i,r)},F.prototype.toString=function(){return P+"("+this.x+"px, "+this.y+"px"+z+") scale("+this.scale+")"};var I=function(t){if(!t||!t.style[M])return this.x=0,void(this.y=0);var e=t.style[M].split(" ");this.x=parseFloat(e[0]),this.y=parseFloat(e[1])};I.prototype.toString=function(){return this.x+"px "+this.y+"px"};var O=o(v,500);if(this.jQuery){var T=this.jQuery;T.fn.croppie=function(t){var e=typeof t;if("string"===e){var n=Array.prototype.slice.call(arguments,1),r=T(this).data("croppie");return"get"===t?r.get():"result"===t?r.result.apply(r,n):this.each(function(){var e=T(this).data("croppie");if(e){var r=e[t];if(!T.isFunction(r))throw"Croppie "+t+" method not found";r.apply(e,n),"destroy"===t&&T(this).removeData("croppie")}})}return this.each(function(){var e=new Y(this,t);T(this).data("croppie",e)})}}Y.defaults={viewport:{width:100,height:100,type:"square"},boundary:{width:300,height:300},customClass:"",showZoom:!0,mouseWheelZoom:!0,update:function(){}},r(Y.prototype,{bind:function(t,e){return C.call(this,t,e)},get:function(){return L.call(this)},result:function(t){return S.call(this,t)},refresh:function(){return A.call(this)},destroy:function(){return R.call(this)}}),t.Croppie=window.Croppie=Y});

/*************************
 * acrCroppie
 * Allen Royston
 * Version: 1.0.0
 * Updated 4/12/2016
 *************************/
angular.module('ngCroppie', []).directive('ngCroppie', [
  function ($compile) {
    return {
        restrict: 'AE',
        scope:{
          src: '=',
          viewport: '=',
          boundry: '=',
          type: '@',
          zoom: '@',
          mousezoom: '@',
          update: '=',
          ngModel: '='
        },
        link: function(scope, elem, attr) {

                // defaults
                if(scope.viewport == undefined){
                  scope.viewport = {w: null, h: null}
                }

                if(scope.boundry == undefined){
                  scope.boundry = {w: null, h: null}
                }

                // catches
                scope.viewport.w = (scope.viewport.w != undefined) ? scope.viewport.w : 300;
                scope.viewport.h = (scope.viewport.h != undefined) ? scope.viewport.h : 300;
                scope.boundry.w = (scope.boundry.w != undefined) ? scope.boundry.w : 400;
                scope.boundry.h = (scope.boundry.h != undefined) ? scope.boundry.h : 400;

                // viewport cannot be larger than the boundaries
                if(scope.viewport.w > scope.boundry.w){ scope.viewport.w = scope.boundry.w }
                if(scope.viewport.h > scope.boundry.h){ scope.viewport.h = scope.boundry.h }

                // convert string to Boolean
                var zoom = (scope.zoom === "true"),
                    mouseZoom = (scope.mousezoom === "true");

                // define options
                var options =  {
                    viewport: {
                      width: scope.viewport.w,
                      height: scope.viewport.h,
                      type: scope.type || 'square'
                    },
                    boundary: {
                      width: scope.boundry.w,
                      height: scope.boundry.h
                    },
                    showZoom: zoom,
                    mouseWheelZoom: mouseZoom,
                }

                if (scope.update != undefined){
                  options.update = scope.update
                }

                // create new croppie and settime for updates
                var c = new Croppie(elem[0], options);
                var intervalID = window.setInterval(function(){
                  c.result('canvas').then(function(img){
                    scope.$apply(function(){
                      scope.ngModel = img
                    })
                  })
                }, 250);

                scope.$on("$destroy",
                    function( event ) {
                        clearInterval(intervalID);
                    }
                );

                // respond to changes in src
                scope.$watch('src', function(newValue, oldValue) {
                    if(scope.src != undefined){
                          c.bind(scope.src);
                          c.result('canvas').then(function(img){
                            scope.$apply(function(){
                              scope.ngModel = img
                            })
                          })
                    }
              })


        }

    };
  }
]);