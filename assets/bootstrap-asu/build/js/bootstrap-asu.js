/**========================================================================
 * Web Standards: bootstrap-asu.js v0.4.4
 * ========================================================================
 * Copyright 2014-2016 ASU
 * Licensed under MIT (https://github.com/gios-asu/ASU-Web-Standards-Bootstrap/blob/master/LICENSE)
 * @license MIT
 * ======================================================================== */

/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-inlinesvg-svg-svgclippaths-cssclasses-load
 */
;window.Modernizr=function(a,b,c){function v(a){j.cssText=a}function w(a,b){return v(prefixes.join(a+";")+(b||""))}function x(a,b){return typeof a===b}function y(a,b){return!!~(""+a).indexOf(b)}function z(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:x(f,"function")?f.bind(d||b):f}return!1}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m={svg:"http://www.w3.org/2000/svg"},n={},o={},p={},q=[],r=q.slice,s,t={}.hasOwnProperty,u;!x(t,"undefined")&&!x(t.call,"undefined")?u=function(a,b){return t.call(a,b)}:u=function(a,b){return b in a&&x(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.svg=function(){return!!b.createElementNS&&!!b.createElementNS(m.svg,"svg").createSVGRect},n.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==m.svg},n.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(l.call(b.createElementNS(m.svg,"clipPath")))};for(var A in n)u(n,A)&&(s=A.toLowerCase(),e[s]=n[A](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)u(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},v(""),i=k=null,e._version=d,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/** smooth-scroll v4.8.2, by Chris Ferdinandi | http://github.com/cferdinandi/smooth-scroll | Licensed under MIT: http://gomakethings.com/mit/ */
!function(e,t){"function"==typeof define&&define.amd?define("smoothScroll",t(e)):"object"==typeof exports?module.smoothScroll=t(e):e.smoothScroll=t(e)}(this,function(e){"use strict";var t,n={},o=!!document.querySelector&&!!e.addEventListener,a={speed:500,easing:"easeInOutCubic",offset:0,updateURL:!1,callbackBefore:function(){},callbackAfter:function(){}},r=function(e,t,n){if("[object Object]"===Object.prototype.toString.call(e))for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(n,e[o],o,e);else for(var a=0,r=e.length;r>a;a++)t.call(n,e[a],a,e)},u=function(e,t){var n={};return r(e,function(t,o){n[o]=e[o]}),r(t,function(e,o){n[o]=t[o]}),n},c=function(e,t){var n;return"easeInQuad"===e&&(n=t*t),"easeOutQuad"===e&&(n=t*(2-t)),"easeInOutQuad"===e&&(n=.5>t?2*t*t:-1+(4-2*t)*t),"easeInCubic"===e&&(n=t*t*t),"easeOutCubic"===e&&(n=--t*t*t+1),"easeInOutCubic"===e&&(n=.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e&&(n=t*t*t*t),"easeOutQuart"===e&&(n=1- --t*t*t*t),"easeInOutQuart"===e&&(n=.5>t?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e&&(n=t*t*t*t*t),"easeOutQuint"===e&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e&&(n=.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t),n||t},i=function(e,t,n){var o=0;if(e.offsetParent)do o+=e.offsetTop,e=e.offsetParent;while(e);return o=o-t-n,o>=0?o:0},l=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},f=function(e){return e.replace(/^\s+|\s+$/g,"")},s=function(e){var t={};return e&&(e=e.split(";"),e.forEach(function(e){e=f(e),""!==e&&(e=e.split(":"),t[e[0]]=f(e[1]))})),t},d=function(e,t){history.pushState&&(t||"true"===t)&&history.pushState({pos:e.id},"",e)};return n.animateScroll=function(t,n,o,r){var f=u(f||a,o||{}),p=s(t?t.getAttribute("data-options"):null);f=u(f,p);var h,m,b,g=document.querySelector("[data-scroll-header]"),v=null===g?0:g.offsetHeight+g.offsetTop,O=e.pageYOffset,y=i(document.querySelector(n),v,parseInt(f.offset,10)),I=y-O,S=l(),Q=0;t&&"a"===t.tagName.toLowerCase()&&r&&r.preventDefault(),d(n,f.updateURL);var H=function(o,a,r){var u=e.pageYOffset;(o==a||u==a||e.innerHeight+u>=S)&&(clearInterval(r),f.callbackAfter(t,n))},E=function(){Q+=16,m=Q/parseInt(f.speed,10),m=m>1?1:m,b=O+I*c(f.easing,m),e.scrollTo(0,Math.floor(b)),H(b,y,h)},j=function(){f.callbackBefore(t,n),h=setInterval(E,16)};0===e.pageYOffset&&e.scrollTo(0,0),j()},n.init=function(e){if(o){t=u(a,e||{});var c=document.querySelectorAll("[data-scroll]");r(c,function(e){e.addEventListener("click",n.animateScroll.bind(null,e,e.hash,t),!1)})}},n});


//! moment.js
//! version : 2.8.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(a,b,c){switch(arguments.length){case 2:return null!=a?a:b;case 3:return null!=a?a:null!=b?b:c;default:throw new Error("Implement me")}}function c(a,b){return zb.call(a,b)}function d(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function e(a){tb.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}function f(a,b){var c=!0;return m(function(){return c&&(e(a),c=!1),b.apply(this,arguments)},b)}function g(a,b){qc[a]||(e(b),qc[a]=!0)}function h(a,b){return function(c){return p(a.call(this,c),b)}}function i(a,b){return function(c){return this.localeData().ordinal(a.call(this,c),b)}}function j(){}function k(a,b){b!==!1&&F(a),n(this,a),this._d=new Date(+a._d)}function l(a){var b=y(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=tb.localeData(),this._bubble()}function m(a,b){for(var d in b)c(b,d)&&(a[d]=b[d]);return c(b,"toString")&&(a.toString=b.toString),c(b,"valueOf")&&(a.valueOf=b.valueOf),a}function n(a,b){var c,d,e;if("undefined"!=typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject),"undefined"!=typeof b._i&&(a._i=b._i),"undefined"!=typeof b._f&&(a._f=b._f),"undefined"!=typeof b._l&&(a._l=b._l),"undefined"!=typeof b._strict&&(a._strict=b._strict),"undefined"!=typeof b._tzm&&(a._tzm=b._tzm),"undefined"!=typeof b._isUTC&&(a._isUTC=b._isUTC),"undefined"!=typeof b._offset&&(a._offset=b._offset),"undefined"!=typeof b._pf&&(a._pf=b._pf),"undefined"!=typeof b._locale&&(a._locale=b._locale),Ib.length>0)for(c in Ib)d=Ib[c],e=b[d],"undefined"!=typeof e&&(a[d]=e);return a}function o(a){return 0>a?Math.ceil(a):Math.floor(a)}function p(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function q(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function r(a,b){var c;return b=K(b,a),a.isBefore(b)?c=q(a,b):(c=q(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c}function s(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(g(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=tb.duration(c,d),t(this,e,a),this}}function t(a,b,c,d){var e=b._milliseconds,f=b._days,g=b._months;d=null==d?!0:d,e&&a._d.setTime(+a._d+e*c),f&&nb(a,"Date",mb(a,"Date")+f*c),g&&lb(a,mb(a,"Month")+g*c),d&&tb.updateOffset(a,f||g)}function u(a){return"[object Array]"===Object.prototype.toString.call(a)}function v(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function w(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&A(a[d])!==A(b[d]))&&g++;return g+f}function x(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=jc[a]||kc[b]||b}return a}function y(a){var b,d,e={};for(d in a)c(a,d)&&(b=x(d),b&&(e[b]=a[d]));return e}function z(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}tb[b]=function(e,f){var g,h,i=tb._locale[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=tb().utc().set(d,a);return i.call(tb._locale,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function A(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function B(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function C(a,b,c){return hb(tb([a,11,31+b-c]),b,c).week}function D(a){return E(a)?366:365}function E(a){return a%4===0&&a%100!==0||a%400===0}function F(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[Bb]<0||a._a[Bb]>11?Bb:a._a[Cb]<1||a._a[Cb]>B(a._a[Ab],a._a[Bb])?Cb:a._a[Db]<0||a._a[Db]>24||24===a._a[Db]&&(0!==a._a[Eb]||0!==a._a[Fb]||0!==a._a[Gb])?Db:a._a[Eb]<0||a._a[Eb]>59?Eb:a._a[Fb]<0||a._a[Fb]>59?Fb:a._a[Gb]<0||a._a[Gb]>999?Gb:-1,a._pf._overflowDayOfYear&&(Ab>b||b>Cb)&&(b=Cb),a._pf.overflow=b)}function G(b){return null==b._isValid&&(b._isValid=!isNaN(b._d.getTime())&&b._pf.overflow<0&&!b._pf.empty&&!b._pf.invalidMonth&&!b._pf.nullInput&&!b._pf.invalidFormat&&!b._pf.userInvalidated,b._strict&&(b._isValid=b._isValid&&0===b._pf.charsLeftOver&&0===b._pf.unusedTokens.length&&b._pf.bigHour===a)),b._isValid}function H(a){return a?a.toLowerCase().replace("_","-"):a}function I(a){for(var b,c,d,e,f=0;f<a.length;){for(e=H(a[f]).split("-"),b=e.length,c=H(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=J(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&w(e,c,!0)>=b-1)break;b--}f++}return null}function J(a){var b=null;if(!Hb[a]&&Jb)try{b=tb.locale(),require("./locale/"+a),tb.locale(b)}catch(c){}return Hb[a]}function K(a,b){var c,d;return b._isUTC?(c=b.clone(),d=(tb.isMoment(a)||v(a)?+a:+tb(a))-+c,c._d.setTime(+c._d+d),tb.updateOffset(c,!1),c):tb(a).local()}function L(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function M(a){var b,c,d=a.match(Nb);for(b=0,c=d.length;c>b;b++)d[b]=pc[d[b]]?pc[d[b]]:L(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function N(a,b){return a.isValid()?(b=O(b,a.localeData()),lc[b]||(lc[b]=M(b)),lc[b](a)):a.localeData().invalidDate()}function O(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Ob.lastIndex=0;d>=0&&Ob.test(a);)a=a.replace(Ob,c),Ob.lastIndex=0,d-=1;return a}function P(a,b){var c,d=b._strict;switch(a){case"Q":return Zb;case"DDDD":return _b;case"YYYY":case"GGGG":case"gggg":return d?ac:Rb;case"Y":case"G":case"g":return cc;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?bc:Sb;case"S":if(d)return Zb;case"SS":if(d)return $b;case"SSS":if(d)return _b;case"DDD":return Qb;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Ub;case"a":case"A":return b._locale._meridiemParse;case"x":return Xb;case"X":return Yb;case"Z":case"ZZ":return Vb;case"T":return Wb;case"SSSS":return Tb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?$b:Pb;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Pb;case"Do":return d?b._locale._ordinalParse:b._locale._ordinalParseLenient;default:return c=new RegExp(Y(X(a.replace("\\","")),"i"))}}function Q(a){a=a||"";var b=a.match(Vb)||[],c=b[b.length-1]||[],d=(c+"").match(hc)||["-",0,0],e=+(60*d[1])+A(d[2]);return"+"===d[0]?-e:e}function R(a,b,c){var d,e=c._a;switch(a){case"Q":null!=b&&(e[Bb]=3*(A(b)-1));break;case"M":case"MM":null!=b&&(e[Bb]=A(b)-1);break;case"MMM":case"MMMM":d=c._locale.monthsParse(b,a,c._strict),null!=d?e[Bb]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[Cb]=A(b));break;case"Do":null!=b&&(e[Cb]=A(parseInt(b.match(/\d{1,2}/)[0],10)));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=A(b));break;case"YY":e[Ab]=tb.parseTwoDigitYear(b);break;case"YYYY":case"YYYYY":case"YYYYYY":e[Ab]=A(b);break;case"a":case"A":c._isPm=c._locale.isPM(b);break;case"h":case"hh":c._pf.bigHour=!0;case"H":case"HH":e[Db]=A(b);break;case"m":case"mm":e[Eb]=A(b);break;case"s":case"ss":e[Fb]=A(b);break;case"S":case"SS":case"SSS":case"SSSS":e[Gb]=A(1e3*("0."+b));break;case"x":c._d=new Date(A(b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=Q(b);break;case"dd":case"ddd":case"dddd":d=c._locale.weekdaysParse(b),null!=d?(c._w=c._w||{},c._w.d=d):c._pf.invalidWeekday=b;break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":a=a.substr(0,1);case"gggg":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=A(b));break;case"gg":case"GG":c._w=c._w||{},c._w[a]=tb.parseTwoDigitYear(b)}}function S(a){var c,d,e,f,g,h,i;c=a._w,null!=c.GG||null!=c.W||null!=c.E?(g=1,h=4,d=b(c.GG,a._a[Ab],hb(tb(),1,4).year),e=b(c.W,1),f=b(c.E,1)):(g=a._locale._week.dow,h=a._locale._week.doy,d=b(c.gg,a._a[Ab],hb(tb(),g,h).year),e=b(c.w,1),null!=c.d?(f=c.d,g>f&&++e):f=null!=c.e?c.e+g:g),i=ib(d,e,f,h,g),a._a[Ab]=i.year,a._dayOfYear=i.dayOfYear}function T(a){var c,d,e,f,g=[];if(!a._d){for(e=V(a),a._w&&null==a._a[Cb]&&null==a._a[Bb]&&S(a),a._dayOfYear&&(f=b(a._a[Ab],e[Ab]),a._dayOfYear>D(f)&&(a._pf._overflowDayOfYear=!0),d=db(f,0,a._dayOfYear),a._a[Bb]=d.getUTCMonth(),a._a[Cb]=d.getUTCDate()),c=0;3>c&&null==a._a[c];++c)a._a[c]=g[c]=e[c];for(;7>c;c++)a._a[c]=g[c]=null==a._a[c]?2===c?1:0:a._a[c];24===a._a[Db]&&0===a._a[Eb]&&0===a._a[Fb]&&0===a._a[Gb]&&(a._nextDay=!0,a._a[Db]=0),a._d=(a._useUTC?db:cb).apply(null,g),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()+a._tzm),a._nextDay&&(a._a[Db]=24)}}function U(a){var b;a._d||(b=y(a._i),a._a=[b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],T(a))}function V(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function W(b){if(b._f===tb.ISO_8601)return void $(b);b._a=[],b._pf.empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=O(b._f,b._locale).match(Nb)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(P(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&b._pf.unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),pc[f]?(d?b._pf.empty=!1:b._pf.unusedTokens.push(f),R(f,d,b)):b._strict&&!d&&b._pf.unusedTokens.push(f);b._pf.charsLeftOver=i-j,h.length>0&&b._pf.unusedInput.push(h),b._pf.bigHour===!0&&b._a[Db]<=12&&(b._pf.bigHour=a),b._isPm&&b._a[Db]<12&&(b._a[Db]+=12),b._isPm===!1&&12===b._a[Db]&&(b._a[Db]=0),T(b),F(b)}function X(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function Y(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Z(a){var b,c,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,void(a._d=new Date(0/0));for(f=0;f<a._f.length;f++)g=0,b=n({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._pf=d(),b._f=a._f[f],W(b),G(b)&&(g+=b._pf.charsLeftOver,g+=10*b._pf.unusedTokens.length,b._pf.score=g,(null==e||e>g)&&(e=g,c=b));m(a,c||b)}function $(a){var b,c,d=a._i,e=dc.exec(d);if(e){for(a._pf.iso=!0,b=0,c=fc.length;c>b;b++)if(fc[b][1].exec(d)){a._f=fc[b][0]+(e[6]||" ");break}for(b=0,c=gc.length;c>b;b++)if(gc[b][1].exec(d)){a._f+=gc[b][0];break}d.match(Vb)&&(a._f+="Z"),W(a)}else a._isValid=!1}function _(a){$(a),a._isValid===!1&&(delete a._isValid,tb.createFromInputFallback(a))}function ab(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function bb(b){var c,d=b._i;d===a?b._d=new Date:v(d)?b._d=new Date(+d):null!==(c=Kb.exec(d))?b._d=new Date(+c[1]):"string"==typeof d?_(b):u(d)?(b._a=ab(d.slice(0),function(a){return parseInt(a,10)}),T(b)):"object"==typeof d?U(b):"number"==typeof d?b._d=new Date(d):tb.createFromInputFallback(b)}function cb(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function db(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function eb(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function fb(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function gb(a,b,c){var d=tb.duration(a).abs(),e=yb(d.as("s")),f=yb(d.as("m")),g=yb(d.as("h")),h=yb(d.as("d")),i=yb(d.as("M")),j=yb(d.as("y")),k=e<mc.s&&["s",e]||1===f&&["m"]||f<mc.m&&["mm",f]||1===g&&["h"]||g<mc.h&&["hh",g]||1===h&&["d"]||h<mc.d&&["dd",h]||1===i&&["M"]||i<mc.M&&["MM",i]||1===j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,fb.apply({},k)}function hb(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=tb(a).add(f,"d"),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function ib(a,b,c,d,e){var f,g,h=db(a,0,1).getUTCDay();return h=0===h?7:h,c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:D(a-1)+g}}function jb(b){var c,d=b._i,e=b._f;return b._locale=b._locale||tb.localeData(b._l),null===d||e===a&&""===d?tb.invalid({nullInput:!0}):("string"==typeof d&&(b._i=d=b._locale.preparse(d)),tb.isMoment(d)?new k(d,!0):(e?u(e)?Z(b):W(b):bb(b),c=new k(b),c._nextDay&&(c.add(1,"d"),c._nextDay=a),c))}function kb(a,b){var c,d;if(1===b.length&&u(b[0])&&(b=b[0]),!b.length)return tb();for(c=b[0],d=1;d<b.length;++d)b[d][a](c)&&(c=b[d]);return c}function lb(a,b){var c;return"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),B(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function mb(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function nb(a,b,c){return"Month"===b?lb(a,c):a._d["set"+(a._isUTC?"UTC":"")+b](c)}function ob(a,b){return function(c){return null!=c?(nb(this,a,c),tb.updateOffset(this,b),this):mb(this,a)}}function pb(a){return 400*a/146097}function qb(a){return 146097*a/400}function rb(a){tb.duration.fn[a]=function(){return this._data[a]}}function sb(a){"undefined"==typeof ender&&(ub=xb.moment,xb.moment=a?f("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",tb):tb)}for(var tb,ub,vb,wb="2.8.4",xb="undefined"!=typeof global?global:this,yb=Math.round,zb=Object.prototype.hasOwnProperty,Ab=0,Bb=1,Cb=2,Db=3,Eb=4,Fb=5,Gb=6,Hb={},Ib=[],Jb="undefined"!=typeof module&&module&&module.exports,Kb=/^\/?Date\((\-?\d+)/i,Lb=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Mb=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Nb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,Ob=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Pb=/\d\d?/,Qb=/\d{1,3}/,Rb=/\d{1,4}/,Sb=/[+\-]?\d{1,6}/,Tb=/\d+/,Ub=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Vb=/Z|[\+\-]\d\d:?\d\d/gi,Wb=/T/i,Xb=/[\+\-]?\d+/,Yb=/[\+\-]?\d+(\.\d{1,3})?/,Zb=/\d/,$b=/\d\d/,_b=/\d{3}/,ac=/\d{4}/,bc=/[+-]?\d{6}/,cc=/[+-]?\d+/,dc=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,ec="YYYY-MM-DDTHH:mm:ssZ",fc=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],gc=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],hc=/([\+\-]|\d\d)/gi,ic=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),jc={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},kc={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},lc={},mc={s:45,m:45,h:22,d:26,M:11},nc="DDD w W M D d".split(" "),oc="M D H h m s w W".split(" "),pc={M:function(){return this.month()+1},MMM:function(a){return this.localeData().monthsShort(this,a)},MMMM:function(a){return this.localeData().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.localeData().weekdaysMin(this,a)},ddd:function(a){return this.localeData().weekdaysShort(this,a)},dddd:function(a){return this.localeData().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return p(this.year()%100,2)},YYYY:function(){return p(this.year(),4)},YYYYY:function(){return p(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+p(Math.abs(a),6)},gg:function(){return p(this.weekYear()%100,2)},gggg:function(){return p(this.weekYear(),4)},ggggg:function(){return p(this.weekYear(),5)},GG:function(){return p(this.isoWeekYear()%100,2)},GGGG:function(){return p(this.isoWeekYear(),4)},GGGGG:function(){return p(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return A(this.milliseconds()/100)},SS:function(){return p(A(this.milliseconds()/10),2)},SSS:function(){return p(this.milliseconds(),3)},SSSS:function(){return p(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+p(A(a/60),2)+":"+p(A(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+p(A(a/60),2)+p(A(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},x:function(){return this.valueOf()},X:function(){return this.unix()},Q:function(){return this.quarter()}},qc={},rc=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];nc.length;)vb=nc.pop(),pc[vb+"o"]=i(pc[vb],vb);for(;oc.length;)vb=oc.pop(),pc[vb+vb]=h(pc[vb],2);pc.DDDD=h(pc.DDD,3),m(j.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a,b,c){var d,e,f;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=tb.utc([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=tb([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b,c){var d=this._calendar[a];return"function"==typeof d?d.apply(b,[c]):d},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",_ordinalParse:/\d{1,2}/,preparse:function(a){return a},postformat:function(a){return a},week:function(a){return hb(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),tb=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._i=b,g._f=c,g._l=e,g._strict=f,g._isUTC=!1,g._pf=d(),jb(g)},tb.suppressDeprecationWarnings=!1,tb.createFromInputFallback=f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),tb.min=function(){var a=[].slice.call(arguments,0);return kb("isBefore",a)},tb.max=function(){var a=[].slice.call(arguments,0);return kb("isAfter",a)},tb.utc=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._useUTC=!0,g._isUTC=!0,g._l=e,g._i=b,g._f=c,g._strict=f,g._pf=d(),jb(g).utc()},tb.unix=function(a){return tb(1e3*a)},tb.duration=function(a,b){var d,e,f,g,h=a,i=null;return tb.isDuration(a)?h={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(h={},b?h[b]=a:h.milliseconds=a):(i=Lb.exec(a))?(d="-"===i[1]?-1:1,h={y:0,d:A(i[Cb])*d,h:A(i[Db])*d,m:A(i[Eb])*d,s:A(i[Fb])*d,ms:A(i[Gb])*d}):(i=Mb.exec(a))?(d="-"===i[1]?-1:1,f=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*d},h={y:f(i[2]),M:f(i[3]),d:f(i[4]),h:f(i[5]),m:f(i[6]),s:f(i[7]),w:f(i[8])}):"object"==typeof h&&("from"in h||"to"in h)&&(g=r(tb(h.from),tb(h.to)),h={},h.ms=g.milliseconds,h.M=g.months),e=new l(h),tb.isDuration(a)&&c(a,"_locale")&&(e._locale=a._locale),e},tb.version=wb,tb.defaultFormat=ec,tb.ISO_8601=function(){},tb.momentProperties=Ib,tb.updateOffset=function(){},tb.relativeTimeThreshold=function(b,c){return mc[b]===a?!1:c===a?mc[b]:(mc[b]=c,!0)},tb.lang=f("moment.lang is deprecated. Use moment.locale instead.",function(a,b){return tb.locale(a,b)}),tb.locale=function(a,b){var c;return a&&(c="undefined"!=typeof b?tb.defineLocale(a,b):tb.localeData(a),c&&(tb.duration._locale=tb._locale=c)),tb._locale._abbr},tb.defineLocale=function(a,b){return null!==b?(b.abbr=a,Hb[a]||(Hb[a]=new j),Hb[a].set(b),tb.locale(a),Hb[a]):(delete Hb[a],null)},tb.langData=f("moment.langData is deprecated. Use moment.localeData instead.",function(a){return tb.localeData(a)}),tb.localeData=function(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return tb._locale;if(!u(a)){if(b=J(a))return b;a=[a]}return I(a)},tb.isMoment=function(a){return a instanceof k||null!=a&&c(a,"_isAMomentObject")},tb.isDuration=function(a){return a instanceof l};for(vb=rc.length-1;vb>=0;--vb)z(rc[vb]);tb.normalizeUnits=function(a){return x(a)},tb.invalid=function(a){var b=tb.utc(0/0);return null!=a?m(b._pf,a):b._pf.userInvalidated=!0,b},tb.parseZone=function(){return tb.apply(null,arguments).parseZone()},tb.parseTwoDigitYear=function(a){return A(a)+(A(a)>68?1900:2e3)},m(tb.fn=k.prototype,{clone:function(){return tb(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=tb(this).utc();return 0<a.year()&&a.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():N(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):N(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return G(this)},isDSTShifted:function(){return this._a?this.isValid()&&w(this._a,(this._isUTC?tb.utc(this._a):tb(this._a)).toArray())>0:!1},parsingFlags:function(){return m({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(a){return this.zone(0,a)},local:function(a){return this._isUTC&&(this.zone(0,a),this._isUTC=!1,a&&this.add(this._dateTzOffset(),"m")),this},format:function(a){var b=N(this,a||tb.defaultFormat);return this.localeData().postformat(b)},add:s(1,"add"),subtract:s(-1,"subtract"),diff:function(a,b,c){var d,e,f,g=K(a,this),h=6e4*(this.zone()-g.zone());return b=x(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+g.daysInMonth()),e=12*(this.year()-g.year())+(this.month()-g.month()),f=this-tb(this).startOf("month")-(g-tb(g).startOf("month")),f-=6e4*(this.zone()-tb(this).startOf("month").zone()-(g.zone()-tb(g).startOf("month").zone())),e+=f/d,"year"===b&&(e/=12)):(d=this-g,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-h)/864e5:"week"===b?(d-h)/6048e5:d),c?e:o(e)},from:function(a,b){return tb.duration({to:this,from:a}).locale(this.locale()).humanize(!b)},fromNow:function(a){return this.from(tb(),a)},calendar:function(a){var b=a||tb(),c=K(b,this).startOf("day"),d=this.diff(c,"days",!0),e=-6>d?"sameElse":-1>d?"lastWeek":0>d?"lastDay":1>d?"sameDay":2>d?"nextDay":7>d?"nextWeek":"sameElse";return this.format(this.localeData().calendar(e,this,tb(b)))},isLeapYear:function(){return E(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=eb(a,this.localeData()),this.add(a-b,"d")):b},month:ob("Month",!0),startOf:function(a){switch(a=x(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(b){return b=x(b),b===a||"millisecond"===b?this:this.startOf(b).add(1,"isoWeek"===b?"week":b).subtract(1,"ms")},isAfter:function(a,b){var c;return b=x("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+this>+a):(c=tb.isMoment(a)?+a:+tb(a),c<+this.clone().startOf(b))},isBefore:function(a,b){var c;return b=x("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+a>+this):(c=tb.isMoment(a)?+a:+tb(a),+this.clone().endOf(b)<c)},isSame:function(a,b){var c;return b=x(b||"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+this===+a):(c=+tb(a),+this.clone().startOf(b)<=c&&c<=+this.clone().endOf(b))},min:f("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(a){return a=tb.apply(null,arguments),this>a?this:a}),max:f("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(a){return a=tb.apply(null,arguments),a>this?this:a}),zone:function(a,b){var c,d=this._offset||0;return null==a?this._isUTC?d:this._dateTzOffset():("string"==typeof a&&(a=Q(a)),Math.abs(a)<16&&(a=60*a),!this._isUTC&&b&&(c=this._dateTzOffset()),this._offset=a,this._isUTC=!0,null!=c&&this.subtract(c,"m"),d!==a&&(!b||this._changeInProgress?t(this,tb.duration(d-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,tb.updateOffset(this,!0),this._changeInProgress=null)),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(a){return a=a?tb(a).zone():0,(this.zone()-a)%60===0},daysInMonth:function(){return B(this.year(),this.month())},dayOfYear:function(a){var b=yb((tb(this).startOf("day")-tb(this).startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")},quarter:function(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)},weekYear:function(a){var b=hb(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")},isoWeekYear:function(a){var b=hb(this,1,4).year;return null==a?b:this.add(a-b,"y")},week:function(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")},isoWeek:function(a){var b=hb(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")},weekday:function(a){var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},isoWeeksInYear:function(){return C(this.year(),1,4)},weeksInYear:function(){var a=this.localeData()._week;return C(this.year(),a.dow,a.doy)},get:function(a){return a=x(a),this[a]()},set:function(a,b){return a=x(a),"function"==typeof this[a]&&this[a](b),this},locale:function(b){var c;return b===a?this._locale._abbr:(c=tb.localeData(b),null!=c&&(this._locale=c),this)},lang:f("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(b){return b===a?this.localeData():this.locale(b)}),localeData:function(){return this._locale},_dateTzOffset:function(){return 15*Math.round(this._d.getTimezoneOffset()/15)}}),tb.fn.millisecond=tb.fn.milliseconds=ob("Milliseconds",!1),tb.fn.second=tb.fn.seconds=ob("Seconds",!1),tb.fn.minute=tb.fn.minutes=ob("Minutes",!1),tb.fn.hour=tb.fn.hours=ob("Hours",!0),tb.fn.date=ob("Date",!0),tb.fn.dates=f("dates accessor is deprecated. Use date instead.",ob("Date",!0)),tb.fn.year=ob("FullYear",!0),tb.fn.years=f("years accessor is deprecated. Use year instead.",ob("FullYear",!0)),tb.fn.days=tb.fn.day,tb.fn.months=tb.fn.month,tb.fn.weeks=tb.fn.week,tb.fn.isoWeeks=tb.fn.isoWeek,tb.fn.quarters=tb.fn.quarter,tb.fn.toJSON=tb.fn.toISOString,m(tb.duration.fn=l.prototype,{_bubble:function(){var a,b,c,d=this._milliseconds,e=this._days,f=this._months,g=this._data,h=0;g.milliseconds=d%1e3,a=o(d/1e3),g.seconds=a%60,b=o(a/60),g.minutes=b%60,c=o(b/60),g.hours=c%24,e+=o(c/24),h=o(pb(e)),e-=o(qb(h)),f+=o(e/30),e%=30,h+=o(f/12),f%=12,g.days=e,g.months=f,g.years=h},abs:function(){return this._milliseconds=Math.abs(this._milliseconds),this._days=Math.abs(this._days),this._months=Math.abs(this._months),this._data.milliseconds=Math.abs(this._data.milliseconds),this._data.seconds=Math.abs(this._data.seconds),this._data.minutes=Math.abs(this._data.minutes),this._data.hours=Math.abs(this._data.hours),this._data.months=Math.abs(this._data.months),this._data.years=Math.abs(this._data.years),this},weeks:function(){return o(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*A(this._months/12)},humanize:function(a){var b=gb(this,!a,this.localeData());return a&&(b=this.localeData().pastFuture(+this,b)),this.localeData().postformat(b)},add:function(a,b){var c=tb.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=tb.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=x(a),this[a.toLowerCase()+"s"]()},as:function(a){var b,c;if(a=x(a),"month"===a||"year"===a)return b=this._days+this._milliseconds/864e5,c=this._months+12*pb(b),"month"===a?c:c/12;switch(b=this._days+Math.round(qb(this._months/12)),a){case"week":return b/7+this._milliseconds/6048e5;case"day":return b+this._milliseconds/864e5;case"hour":return 24*b+this._milliseconds/36e5;case"minute":return 24*b*60+this._milliseconds/6e4;case"second":return 24*b*60*60+this._milliseconds/1e3;
case"millisecond":return Math.floor(24*b*60*60*1e3)+this._milliseconds;default:throw new Error("Unknown unit "+a)}},lang:tb.fn.lang,locale:tb.fn.locale,toIsoString:f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){return this.toISOString()}),toISOString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"},localeData:function(){return this._locale}}),tb.duration.fn.toString=tb.duration.fn.toISOString;for(vb in ic)c(ic,vb)&&rb(vb.toLowerCase());tb.duration.fn.asMilliseconds=function(){return this.as("ms")},tb.duration.fn.asSeconds=function(){return this.as("s")},tb.duration.fn.asMinutes=function(){return this.as("m")},tb.duration.fn.asHours=function(){return this.as("h")},tb.duration.fn.asDays=function(){return this.as("d")},tb.duration.fn.asWeeks=function(){return this.as("weeks")},tb.duration.fn.asMonths=function(){return this.as("M")},tb.duration.fn.asYears=function(){return this.as("y")},tb.locale("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===A(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),function(a){a(tb)}(function(a){return a.defineLocale("af",{months:"Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),weekdays:"Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),weekdaysShort:"Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),weekdaysMin:"So_Ma_Di_Wo_Do_Vr_Sa".split("_"),meridiem:function(a,b,c){return 12>a?c?"vm":"VM":c?"nm":"NM"},longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Vandag om] LT",nextDay:"[MÃ´re om] LT",nextWeek:"dddd [om] LT",lastDay:"[Gister om] LT",lastWeek:"[Laas] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oor %s",past:"%s gelede",s:"'n paar sekondes",m:"'n minuut",mm:"%d minute",h:"'n uur",hh:"%d ure",d:"'n dag",dd:"%d dae",M:"'n maand",MM:"%d maande",y:"'n jaar",yy:"%d jaar"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(a){return a+(1===a||8===a||a>=20?"ste":"de")},week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("ar-ma",{months:"ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),monthsShort:"ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),weekdays:"Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥ØªÙ†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),weekdaysShort:"Ø§Ø­Ø¯_Ø§ØªÙ†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),weekdaysMin:"Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",nextDay:"[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",nextWeek:"dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",lastDay:"[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",lastWeek:"dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",sameElse:"L"},relativeTime:{future:"ÙÙŠ %s",past:"Ù…Ù†Ø° %s",s:"Ø«ÙˆØ§Ù†",m:"Ø¯Ù‚ÙŠÙ‚Ø©",mm:"%d Ø¯Ù‚Ø§Ø¦Ù‚",h:"Ø³Ø§Ø¹Ø©",hh:"%d Ø³Ø§Ø¹Ø§Øª",d:"ÙŠÙˆÙ…",dd:"%d Ø£ÙŠØ§Ù…",M:"Ø´Ù‡Ø±",MM:"%d Ø£Ø´Ù‡Ø±",y:"Ø³Ù†Ø©",yy:"%d Ø³Ù†ÙˆØ§Øª"},week:{dow:6,doy:12}})}),function(a){a(tb)}(function(a){var b={1:"Ù¡",2:"Ù¢",3:"Ù£",4:"Ù¤",5:"Ù¥",6:"Ù¦",7:"Ù§",8:"Ù¨",9:"Ù©",0:"Ù "},c={"Ù¡":"1","Ù¢":"2","Ù£":"3","Ù¤":"4","Ù¥":"5","Ù¦":"6","Ù§":"7","Ù¨":"8","Ù©":"9","Ù ":"0"};return a.defineLocale("ar-sa",{months:"ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠÙˆ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆ_Ø£ØºØ³Ø·Ø³_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),monthsShort:"ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠÙˆ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆ_Ø£ØºØ³Ø·Ø³_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),weekdays:"Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),weekdaysShort:"Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),weekdaysMin:"Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},meridiem:function(a){return 12>a?"Øµ":"Ù…"},calendar:{sameDay:"[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",nextDay:"[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",nextWeek:"dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",lastDay:"[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",lastWeek:"dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",sameElse:"L"},relativeTime:{future:"ÙÙŠ %s",past:"Ù…Ù†Ø° %s",s:"Ø«ÙˆØ§Ù†",m:"Ø¯Ù‚ÙŠÙ‚Ø©",mm:"%d Ø¯Ù‚Ø§Ø¦Ù‚",h:"Ø³Ø§Ø¹Ø©",hh:"%d Ø³Ø§Ø¹Ø§Øª",d:"ÙŠÙˆÙ…",dd:"%d Ø£ÙŠØ§Ù…",M:"Ø´Ù‡Ø±",MM:"%d Ø£Ø´Ù‡Ø±",y:"Ø³Ù†Ø©",yy:"%d Ø³Ù†ÙˆØ§Øª"},preparse:function(a){return a.replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g,function(a){return c[a]}).replace(/ØŒ/g,",")},postformat:function(a){return a.replace(/\d/g,function(a){return b[a]}).replace(/,/g,"ØŒ")},week:{dow:6,doy:12}})}),function(a){a(tb)}(function(a){var b={1:"Ù¡",2:"Ù¢",3:"Ù£",4:"Ù¤",5:"Ù¥",6:"Ù¦",7:"Ù§",8:"Ù¨",9:"Ù©",0:"Ù "},c={"Ù¡":"1","Ù¢":"2","Ù£":"3","Ù¤":"4","Ù¥":"5","Ù¦":"6","Ù§":"7","Ù¨":"8","Ù©":"9","Ù ":"0"},d=function(a){return 0===a?0:1===a?1:2===a?2:a%100>=3&&10>=a%100?3:a%100>=11?4:5},e={s:["Ø£Ù‚Ù„ Ù…Ù† Ø«Ø§Ù†ÙŠØ©","Ø«Ø§Ù†ÙŠØ© ÙˆØ§Ø­Ø¯Ø©",["Ø«Ø§Ù†ÙŠØªØ§Ù†","Ø«Ø§Ù†ÙŠØªÙŠÙ†"],"%d Ø«ÙˆØ§Ù†","%d Ø«Ø§Ù†ÙŠØ©","%d Ø«Ø§Ù†ÙŠØ©"],m:["Ø£Ù‚Ù„ Ù…Ù† Ø¯Ù‚ÙŠÙ‚Ø©","Ø¯Ù‚ÙŠÙ‚Ø© ÙˆØ§Ø­Ø¯Ø©",["Ø¯Ù‚ÙŠÙ‚ØªØ§Ù†","Ø¯Ù‚ÙŠÙ‚ØªÙŠÙ†"],"%d Ø¯Ù‚Ø§Ø¦Ù‚","%d Ø¯Ù‚ÙŠÙ‚Ø©","%d Ø¯Ù‚ÙŠÙ‚Ø©"],h:["Ø£Ù‚Ù„ Ù…Ù† Ø³Ø§Ø¹Ø©","Ø³Ø§Ø¹Ø© ÙˆØ§Ø­Ø¯Ø©",["Ø³Ø§Ø¹ØªØ§Ù†","Ø³Ø§Ø¹ØªÙŠÙ†"],"%d Ø³Ø§Ø¹Ø§Øª","%d Ø³Ø§Ø¹Ø©","%d Ø³Ø§Ø¹Ø©"],d:["Ø£Ù‚Ù„ Ù…Ù† ÙŠÙˆÙ…","ÙŠÙˆÙ… ÙˆØ§Ø­Ø¯",["ÙŠÙˆÙ…Ø§Ù†","ÙŠÙˆÙ…ÙŠÙ†"],"%d Ø£ÙŠØ§Ù…","%d ÙŠÙˆÙ…Ù‹Ø§","%d ÙŠÙˆÙ…"],M:["Ø£Ù‚Ù„ Ù…Ù† Ø´Ù‡Ø±","Ø´Ù‡Ø± ÙˆØ§Ø­Ø¯",["Ø´Ù‡Ø±Ø§Ù†","Ø´Ù‡Ø±ÙŠÙ†"],"%d Ø£Ø´Ù‡Ø±","%d Ø´Ù‡Ø±Ø§","%d Ø´Ù‡Ø±"],y:["Ø£Ù‚Ù„ Ù…Ù† Ø¹Ø§Ù…","Ø¹Ø§Ù… ÙˆØ§Ø­Ø¯",["Ø¹Ø§Ù…Ø§Ù†","Ø¹Ø§Ù…ÙŠÙ†"],"%d Ø£Ø¹ÙˆØ§Ù…","%d Ø¹Ø§Ù…Ù‹Ø§","%d Ø¹Ø§Ù…"]},f=function(a){return function(b,c){var f=d(b),g=e[a][d(b)];return 2===f&&(g=g[c?0:1]),g.replace(/%d/i,b)}},g=["ÙƒØ§Ù†ÙˆÙ† Ø§Ù„Ø«Ø§Ù†ÙŠ ÙŠÙ†Ø§ÙŠØ±","Ø´Ø¨Ø§Ø· ÙØ¨Ø±Ø§ÙŠØ±","Ø¢Ø°Ø§Ø± Ù…Ø§Ø±Ø³","Ù†ÙŠØ³Ø§Ù† Ø£Ø¨Ø±ÙŠÙ„","Ø£ÙŠØ§Ø± Ù…Ø§ÙŠÙˆ","Ø­Ø²ÙŠØ±Ø§Ù† ÙŠÙˆÙ†ÙŠÙˆ","ØªÙ…ÙˆØ² ÙŠÙˆÙ„ÙŠÙˆ","Ø¢Ø¨ Ø£ØºØ³Ø·Ø³","Ø£ÙŠÙ„ÙˆÙ„ Ø³Ø¨ØªÙ…Ø¨Ø±","ØªØ´Ø±ÙŠÙ† Ø§Ù„Ø£ÙˆÙ„ Ø£ÙƒØªÙˆØ¨Ø±","ØªØ´Ø±ÙŠÙ† Ø§Ù„Ø«Ø§Ù†ÙŠ Ù†ÙˆÙÙ…Ø¨Ø±","ÙƒØ§Ù†ÙˆÙ† Ø§Ù„Ø£ÙˆÙ„ Ø¯ÙŠØ³Ù…Ø¨Ø±"];return a.defineLocale("ar",{months:g,monthsShort:g,weekdays:"Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),weekdaysShort:"Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),weekdaysMin:"Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},meridiem:function(a){return 12>a?"Øµ":"Ù…"},calendar:{sameDay:"[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",nextDay:"[ØºØ¯Ù‹Ø§ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",nextWeek:"dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",lastDay:"[Ø£Ù…Ø³ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",lastWeek:"dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",sameElse:"L"},relativeTime:{future:"Ø¨Ø¹Ø¯ %s",past:"Ù…Ù†Ø° %s",s:f("s"),m:f("m"),mm:f("m"),h:f("h"),hh:f("h"),d:f("d"),dd:f("d"),M:f("M"),MM:f("M"),y:f("y"),yy:f("y")},preparse:function(a){return a.replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g,function(a){return c[a]}).replace(/ØŒ/g,",")},postformat:function(a){return a.replace(/\d/g,function(a){return b[a]}).replace(/,/g,"ØŒ")},week:{dow:6,doy:12}})}),function(a){a(tb)}(function(a){var b={1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-Ã¼ncÃ¼",4:"-Ã¼ncÃ¼",100:"-Ã¼ncÃ¼",6:"-ncÄ±",9:"-uncu",10:"-uncu",30:"-uncu",60:"-Ä±ncÄ±",90:"-Ä±ncÄ±"};return a.defineLocale("az",{months:"yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),monthsShort:"yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),weekdays:"Bazar_Bazar ertÉ™si_Ã‡É™rÅŸÉ™nbÉ™ axÅŸamÄ±_Ã‡É™rÅŸÉ™nbÉ™_CÃ¼mÉ™ axÅŸamÄ±_CÃ¼mÉ™_ÅžÉ™nbÉ™".split("_"),weekdaysShort:"Baz_BzE_Ã‡Ax_Ã‡É™r_CAx_CÃ¼m_ÅžÉ™n".split("_"),weekdaysMin:"Bz_BE_Ã‡A_Ã‡É™_CA_CÃ¼_ÅžÉ™".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[bugÃ¼n saat] LT",nextDay:"[sabah saat] LT",nextWeek:"[gÉ™lÉ™n hÉ™ftÉ™] dddd [saat] LT",lastDay:"[dÃ¼nÉ™n] LT",lastWeek:"[keÃ§É™n hÉ™ftÉ™] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s É™vvÉ™l",s:"birneÃ§É™ saniyyÉ™",m:"bir dÉ™qiqÉ™",mm:"%d dÉ™qiqÉ™",h:"bir saat",hh:"%d saat",d:"bir gÃ¼n",dd:"%d gÃ¼n",M:"bir ay",MM:"%d ay",y:"bir il",yy:"%d il"},meridiem:function(a){return 4>a?"gecÉ™":12>a?"sÉ™hÉ™r":17>a?"gÃ¼ndÃ¼z":"axÅŸam"},ordinalParse:/\d{1,2}-(Ä±ncÄ±|inci|nci|Ã¼ncÃ¼|ncÄ±|uncu)/,ordinal:function(a){if(0===a)return a+"-Ä±ncÄ±";var c=a%10,d=a%100-c,e=a>=100?100:null;return a+(b[c]||b[d]||b[e])},week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){function b(a,b){var c=a.split("_");return b%10===1&&b%100!==11?c[0]:b%10>=2&&4>=b%10&&(10>b%100||b%100>=20)?c[1]:c[2]}function c(a,c,d){var e={mm:c?"Ñ…Ð²Ñ–Ð»Ñ–Ð½Ð°_Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñ‹_Ñ…Ð²Ñ–Ð»Ñ–Ð½":"Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñƒ_Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñ‹_Ñ…Ð²Ñ–Ð»Ñ–Ð½",hh:c?"Ð³Ð°Ð´Ð·Ñ–Ð½Ð°_Ð³Ð°Ð´Ð·Ñ–Ð½Ñ‹_Ð³Ð°Ð´Ð·Ñ–Ð½":"Ð³Ð°Ð´Ð·Ñ–Ð½Ñƒ_Ð³Ð°Ð´Ð·Ñ–Ð½Ñ‹_Ð³Ð°Ð´Ð·Ñ–Ð½",dd:"Ð´Ð·ÐµÐ½ÑŒ_Ð´Ð½Ñ–_Ð´Ð·Ñ‘Ð½",MM:"Ð¼ÐµÑÑÑ†_Ð¼ÐµÑÑÑ†Ñ‹_Ð¼ÐµÑÑÑ†Ð°Ñž",yy:"Ð³Ð¾Ð´_Ð³Ð°Ð´Ñ‹_Ð³Ð°Ð´Ð¾Ñž"};return"m"===d?c?"Ñ…Ð²Ñ–Ð»Ñ–Ð½Ð°":"Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñƒ":"h"===d?c?"Ð³Ð°Ð´Ð·Ñ–Ð½Ð°":"Ð³Ð°Ð´Ð·Ñ–Ð½Ñƒ":a+" "+b(e[d],+a)}function d(a,b){var c={nominative:"ÑÑ‚ÑƒÐ´Ð·ÐµÐ½ÑŒ_Ð»ÑŽÑ‚Ñ‹_ÑÐ°ÐºÐ°Ð²Ñ–Ðº_ÐºÑ€Ð°ÑÐ°Ð²Ñ–Ðº_Ñ‚Ñ€Ð°Ð²ÐµÐ½ÑŒ_Ñ‡ÑÑ€Ð²ÐµÐ½ÑŒ_Ð»Ñ–Ð¿ÐµÐ½ÑŒ_Ð¶Ð½Ñ–Ð²ÐµÐ½ÑŒ_Ð²ÐµÑ€Ð°ÑÐµÐ½ÑŒ_ÐºÐ°ÑÑ‚Ñ€Ñ‹Ñ‡Ð½Ñ–Ðº_Ð»Ñ–ÑÑ‚Ð°Ð¿Ð°Ð´_ÑÐ½ÐµÐ¶Ð°Ð½ÑŒ".split("_"),accusative:"ÑÑ‚ÑƒÐ´Ð·ÐµÐ½Ñ_Ð»ÑŽÑ‚Ð°Ð³Ð°_ÑÐ°ÐºÐ°Ð²Ñ–ÐºÐ°_ÐºÑ€Ð°ÑÐ°Ð²Ñ–ÐºÐ°_Ñ‚Ñ€Ð°ÑžÐ½Ñ_Ñ‡ÑÑ€Ð²ÐµÐ½Ñ_Ð»Ñ–Ð¿ÐµÐ½Ñ_Ð¶Ð½Ñ–ÑžÐ½Ñ_Ð²ÐµÑ€Ð°ÑÐ½Ñ_ÐºÐ°ÑÑ‚Ñ€Ñ‹Ñ‡Ð½Ñ–ÐºÐ°_Ð»Ñ–ÑÑ‚Ð°Ð¿Ð°Ð´Ð°_ÑÐ½ÐµÐ¶Ð½Ñ".split("_")},d=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b)?"accusative":"nominative";return c[d][a.month()]}function e(a,b){var c={nominative:"Ð½ÑÐ´Ð·ÐµÐ»Ñ_Ð¿Ð°Ð½ÑÐ´Ð·ÐµÐ»Ð°Ðº_Ð°ÑžÑ‚Ð¾Ñ€Ð°Ðº_ÑÐµÑ€Ð°Ð´Ð°_Ñ‡Ð°Ñ†Ð²ÐµÑ€_Ð¿ÑÑ‚Ð½Ñ–Ñ†Ð°_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"),accusative:"Ð½ÑÐ´Ð·ÐµÐ»ÑŽ_Ð¿Ð°Ð½ÑÐ´Ð·ÐµÐ»Ð°Ðº_Ð°ÑžÑ‚Ð¾Ñ€Ð°Ðº_ÑÐµÑ€Ð°Ð´Ñƒ_Ñ‡Ð°Ñ†Ð²ÐµÑ€_Ð¿ÑÑ‚Ð½Ñ–Ñ†Ñƒ_ÑÑƒÐ±Ð¾Ñ‚Ñƒ".split("_")},d=/\[ ?[Ð’Ð²] ?(?:Ð¼Ñ–Ð½ÑƒÐ»ÑƒÑŽ|Ð½Ð°ÑÑ‚ÑƒÐ¿Ð½ÑƒÑŽ)? ?\] ?dddd/.test(b)?"accusative":"nominative";return c[d][a.day()]}return a.defineLocale("be",{months:d,monthsShort:"ÑÑ‚ÑƒÐ´_Ð»ÑŽÑ‚_ÑÐ°Ðº_ÐºÑ€Ð°Ñ_Ñ‚Ñ€Ð°Ð²_Ñ‡ÑÑ€Ð²_Ð»Ñ–Ð¿_Ð¶Ð½Ñ–Ð²_Ð²ÐµÑ€_ÐºÐ°ÑÑ‚_Ð»Ñ–ÑÑ‚_ÑÐ½ÐµÐ¶".split("_"),weekdays:e,weekdaysShort:"Ð½Ð´_Ð¿Ð½_Ð°Ñ‚_ÑÑ€_Ñ‡Ñ†_Ð¿Ñ‚_ÑÐ±".split("_"),weekdaysMin:"Ð½Ð´_Ð¿Ð½_Ð°Ñ‚_ÑÑ€_Ñ‡Ñ†_Ð¿Ñ‚_ÑÐ±".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY Ð³.",LLL:"D MMMM YYYY Ð³., LT",LLLL:"dddd, D MMMM YYYY Ð³., LT"},calendar:{sameDay:"[Ð¡Ñ‘Ð½Ð½Ñ Ñž] LT",nextDay:"[Ð—Ð°ÑžÑ‚Ñ€Ð° Ñž] LT",lastDay:"[Ð£Ñ‡Ð¾Ñ€Ð° Ñž] LT",nextWeek:function(){return"[Ð£] dddd [Ñž] LT"},lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return"[Ð£ Ð¼Ñ–Ð½ÑƒÐ»ÑƒÑŽ] dddd [Ñž] LT";case 1:case 2:case 4:return"[Ð£ Ð¼Ñ–Ð½ÑƒÐ»Ñ‹] dddd [Ñž] LT"}},sameElse:"L"},relativeTime:{future:"Ð¿Ñ€Ð°Ð· %s",past:"%s Ñ‚Ð°Ð¼Ñƒ",s:"Ð½ÐµÐºÐ°Ð»ÑŒÐºÑ– ÑÐµÐºÑƒÐ½Ð´",m:c,mm:c,h:c,hh:c,d:"Ð´Ð·ÐµÐ½ÑŒ",dd:c,M:"Ð¼ÐµÑÑÑ†",MM:c,y:"Ð³Ð¾Ð´",yy:c},meridiem:function(a){return 4>a?"Ð½Ð¾Ñ‡Ñ‹":12>a?"Ñ€Ð°Ð½Ñ–Ñ†Ñ‹":17>a?"Ð´Ð½Ñ":"Ð²ÐµÑ‡Ð°Ñ€Ð°"},ordinalParse:/\d{1,2}-(Ñ–|Ñ‹|Ð³Ð°)/,ordinal:function(a,b){switch(b){case"M":case"d":case"DDD":case"w":case"W":return a%10!==2&&a%10!==3||a%100===12||a%100===13?a+"-Ñ‹":a+"-Ñ–";case"D":return a+"-Ð³Ð°";default:return a}},week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){return a.defineLocale("bg",{months:"ÑÐ½ÑƒÐ°Ñ€Ð¸_Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ð¹_ÑŽÐ½Ð¸_ÑŽÐ»Ð¸_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸_Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸_Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸_Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸".split("_"),monthsShort:"ÑÐ½Ñ€_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_ÑŽÐ½Ð¸_ÑŽÐ»Ð¸_Ð°Ð²Ð³_ÑÐµÐ¿_Ð¾ÐºÑ‚_Ð½Ð¾Ðµ_Ð´ÐµÐº".split("_"),weekdays:"Ð½ÐµÐ´ÐµÐ»Ñ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÑÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÑŠÑ€Ñ‚ÑŠÐº_Ð¿ÐµÑ‚ÑŠÐº_ÑÑŠÐ±Ð¾Ñ‚Ð°".split("_"),weekdaysShort:"Ð½ÐµÐ´_Ð¿Ð¾Ð½_Ð²Ñ‚Ð¾_ÑÑ€Ñ_Ñ‡ÐµÑ‚_Ð¿ÐµÑ‚_ÑÑŠÐ±".split("_"),weekdaysMin:"Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Ð”Ð½ÐµÑ Ð²] LT",nextDay:"[Ð£Ñ‚Ñ€Ðµ Ð²] LT",nextWeek:"dddd [Ð²] LT",lastDay:"[Ð’Ñ‡ÐµÑ€Ð° Ð²] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[Ð’ Ð¸Ð·Ð¼Ð¸Ð½Ð°Ð»Ð°Ñ‚Ð°] dddd [Ð²] LT";case 1:case 2:case 4:case 5:return"[Ð’ Ð¸Ð·Ð¼Ð¸Ð½Ð°Ð»Ð¸Ñ] dddd [Ð²] LT"}},sameElse:"L"},relativeTime:{future:"ÑÐ»ÐµÐ´ %s",past:"Ð¿Ñ€ÐµÐ´Ð¸ %s",s:"Ð½ÑÐºÐ¾Ð»ÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´Ð¸",m:"Ð¼Ð¸Ð½ÑƒÑ‚Ð°",mm:"%d Ð¼Ð¸Ð½ÑƒÑ‚Ð¸",h:"Ñ‡Ð°Ñ",hh:"%d Ñ‡Ð°ÑÐ°",d:"Ð´ÐµÐ½",dd:"%d Ð´Ð½Ð¸",M:"Ð¼ÐµÑÐµÑ†",MM:"%d Ð¼ÐµÑÐµÑ†Ð°",y:"Ð³Ð¾Ð´Ð¸Ð½Ð°",yy:"%d Ð³Ð¾Ð´Ð¸Ð½Ð¸"},ordinalParse:/\d{1,2}-(ÐµÐ²|ÐµÐ½|Ñ‚Ð¸|Ð²Ð¸|Ñ€Ð¸|Ð¼Ð¸)/,ordinal:function(a){var b=a%10,c=a%100;return 0===a?a+"-ÐµÐ²":0===c?a+"-ÐµÐ½":c>10&&20>c?a+"-Ñ‚Ð¸":1===b?a+"-Ð²Ð¸":2===b?a+"-Ñ€Ð¸":7===b||8===b?a+"-Ð¼Ð¸":a+"-Ñ‚Ð¸"},week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){var b={1:"à§§",2:"à§¨",3:"à§©",4:"à§ª",5:"à§«",6:"à§¬",7:"à§­",8:"à§®",9:"à§¯",0:"à§¦"},c={"à§§":"1","à§¨":"2","à§©":"3","à§ª":"4","à§«":"5","à§¬":"6","à§­":"7","à§®":"8","à§¯":"9","à§¦":"0"};return a.defineLocale("bn",{months:"à¦œà¦¾à¦¨à§à§Ÿà¦¾à¦°à§€_à¦«à§‡à¦¬à§à§Ÿà¦¾à¦°à§€_à¦®à¦¾à¦°à§à¦š_à¦à¦ªà§à¦°à¦¿à¦²_à¦®à§‡_à¦œà§à¦¨_à¦œà§à¦²à¦¾à¦‡_à¦…à¦—à¦¾à¦¸à§à¦Ÿ_à¦¸à§‡à¦ªà§à¦Ÿà§‡à¦®à§à¦¬à¦°_à¦…à¦•à§à¦Ÿà§‹à¦¬à¦°_à¦¨à¦­à§‡à¦®à§à¦¬à¦°_à¦¡à¦¿à¦¸à§‡à¦®à§à¦¬à¦°".split("_"),monthsShort:"à¦œà¦¾à¦¨à§_à¦«à§‡à¦¬_à¦®à¦¾à¦°à§à¦š_à¦à¦ªà¦°_à¦®à§‡_à¦œà§à¦¨_à¦œà§à¦²_à¦…à¦—_à¦¸à§‡à¦ªà§à¦Ÿ_à¦…à¦•à§à¦Ÿà§‹_à¦¨à¦­_à¦¡à¦¿à¦¸à§‡à¦®à§".split("_"),weekdays:"à¦°à¦¬à¦¿à¦¬à¦¾à¦°_à¦¸à§‹à¦®à¦¬à¦¾à¦°_à¦®à¦™à§à¦—à¦²à¦¬à¦¾à¦°_à¦¬à§à¦§à¦¬à¦¾à¦°_à¦¬à§ƒà¦¹à¦¸à§à¦ªà¦¤à§à¦¤à¦¿à¦¬à¦¾à¦°_à¦¶à§à¦•à§à¦°à§à¦¬à¦¾à¦°_à¦¶à¦¨à¦¿à¦¬à¦¾à¦°".split("_"),weekdaysShort:"à¦°à¦¬à¦¿_à¦¸à§‹à¦®_à¦®à¦™à§à¦—à¦²_à¦¬à§à¦§_à¦¬à§ƒà¦¹à¦¸à§à¦ªà¦¤à§à¦¤à¦¿_à¦¶à§à¦•à§à¦°à§_à¦¶à¦¨à¦¿".split("_"),weekdaysMin:"à¦°à¦¬_à¦¸à¦®_à¦®à¦™à§à¦—_à¦¬à§_à¦¬à§à¦°à¦¿à¦¹_à¦¶à§_à¦¶à¦¨à¦¿".split("_"),longDateFormat:{LT:"A h:mm à¦¸à¦®à§Ÿ",LTS:"A h:mm:ss à¦¸à¦®à§Ÿ",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[à¦†à¦œ] LT",nextDay:"[à¦†à¦—à¦¾à¦®à§€à¦•à¦¾à¦²] LT",nextWeek:"dddd, LT",lastDay:"[à¦—à¦¤à¦•à¦¾à¦²] LT",lastWeek:"[à¦—à¦¤] dddd, LT",sameElse:"L"},relativeTime:{future:"%s à¦ªà¦°à§‡",past:"%s à¦†à¦—à§‡",s:"à¦•à¦à¦• à¦¸à§‡à¦•à§‡à¦¨à§à¦¡",m:"à¦à¦• à¦®à¦¿à¦¨à¦¿à¦Ÿ",mm:"%d à¦®à¦¿à¦¨à¦¿à¦Ÿ",h:"à¦à¦• à¦˜à¦¨à§à¦Ÿà¦¾",hh:"%d à¦˜à¦¨à§à¦Ÿà¦¾",d:"à¦à¦• à¦¦à¦¿à¦¨",dd:"%d à¦¦à¦¿à¦¨",M:"à¦à¦• à¦®à¦¾à¦¸",MM:"%d à¦®à¦¾à¦¸",y:"à¦à¦• à¦¬à¦›à¦°",yy:"%d à¦¬à¦›à¦°"},preparse:function(a){return a.replace(/[à§§à§¨à§©à§ªà§«à§¬à§­à§®à§¯à§¦]/g,function(a){return c[a]})},postformat:function(a){return a.replace(/\d/g,function(a){return b[a]})},meridiem:function(a){return 4>a?"à¦°à¦¾à¦¤":10>a?"à¦¶à¦•à¦¾à¦²":17>a?"à¦¦à§à¦ªà§à¦°":20>a?"à¦¬à¦¿à¦•à§‡à¦²":"à¦°à¦¾à¦¤"},week:{dow:0,doy:6}})}),function(a){a(tb)}(function(a){var b={1:"à¼¡",2:"à¼¢",3:"à¼£",4:"à¼¤",5:"à¼¥",6:"à¼¦",7:"à¼§",8:"à¼¨",9:"à¼©",0:"à¼ "},c={"à¼¡":"1","à¼¢":"2","à¼£":"3","à¼¤":"4","à¼¥":"5","à¼¦":"6","à¼§":"7","à¼¨":"8","à¼©":"9","à¼ ":"0"};return a.defineLocale("bo",{months:"à½Ÿà¾³à¼‹à½–à¼‹à½‘à½„à¼‹à½”à½¼_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½‰à½²à½¦à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½¦à½´à½˜à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½žà½²à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½£à¾”à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à¾²à½´à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½‘à½´à½“à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½¢à¾’à¾±à½‘à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à½‚à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½…à½²à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½‰à½²à½¦à¼‹à½”".split("_"),monthsShort:"à½Ÿà¾³à¼‹à½–à¼‹à½‘à½„à¼‹à½”à½¼_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½‰à½²à½¦à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½¦à½´à½˜à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½žà½²à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½£à¾”à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à¾²à½´à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½‘à½´à½“à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½¢à¾’à¾±à½‘à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à½‚à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½…à½²à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½‰à½²à½¦à¼‹à½”".split("_"),weekdays:"à½‚à½Ÿà½ à¼‹à½‰à½²à¼‹à½˜à¼‹_à½‚à½Ÿà½ à¼‹à½Ÿà¾³à¼‹à½–à¼‹_à½‚à½Ÿà½ à¼‹à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½‚à½Ÿà½ à¼‹à½£à¾·à½‚à¼‹à½”à¼‹_à½‚à½Ÿà½ à¼‹à½•à½´à½¢à¼‹à½–à½´_à½‚à½Ÿà½ à¼‹à½”à¼‹à½¦à½„à½¦à¼‹_à½‚à½Ÿà½ à¼‹à½¦à¾¤à½ºà½“à¼‹à½”à¼‹".split("_"),weekdaysShort:"à½‰à½²à¼‹à½˜à¼‹_à½Ÿà¾³à¼‹à½–à¼‹_à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½£à¾·à½‚à¼‹à½”à¼‹_à½•à½´à½¢à¼‹à½–à½´_à½”à¼‹à½¦à½„à½¦à¼‹_à½¦à¾¤à½ºà½“à¼‹à½”à¼‹".split("_"),weekdaysMin:"à½‰à½²à¼‹à½˜à¼‹_à½Ÿà¾³à¼‹à½–à¼‹_à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½£à¾·à½‚à¼‹à½”à¼‹_à½•à½´à½¢à¼‹à½–à½´_à½”à¼‹à½¦à½„à½¦à¼‹_à½¦à¾¤à½ºà½“à¼‹à½”à¼‹".split("_"),longDateFormat:{LT:"A h:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[à½‘à½²à¼‹à½¢à½²à½„] LT",nextDay:"[à½¦à½„à¼‹à½‰à½²à½“] LT",nextWeek:"[à½–à½‘à½´à½“à¼‹à½•à¾²à½‚à¼‹à½¢à¾—à½ºà½¦à¼‹à½˜], LT",lastDay:"[à½à¼‹à½¦à½„] LT",lastWeek:"[à½–à½‘à½´à½“à¼‹à½•à¾²à½‚à¼‹à½˜à½à½ à¼‹à½˜] dddd, LT",sameElse:"L"},relativeTime:{future:"%s à½£à¼‹",past:"%s à½¦à¾”à½“à¼‹à½£",s:"à½£à½˜à¼‹à½¦à½„",m:"à½¦à¾à½¢à¼‹à½˜à¼‹à½‚à½…à½²à½‚",mm:"%d à½¦à¾à½¢à¼‹à½˜",h:"à½†à½´à¼‹à½šà½¼à½‘à¼‹à½‚à½…à½²à½‚",hh:"%d à½†à½´à¼‹à½šà½¼à½‘",d:"à½‰à½²à½“à¼‹à½‚à½…à½²à½‚",dd:"%d à½‰à½²à½“à¼‹",M:"à½Ÿà¾³à¼‹à½–à¼‹à½‚à½…à½²à½‚",MM:"%d à½Ÿà¾³à¼‹à½–",y:"à½£à½¼à¼‹à½‚à½…à½²à½‚",yy:"%d à½£à½¼"},preparse:function(a){return a.replace(/[à¼¡à¼¢à¼£à¼¤à¼¥à¼¦à¼§à¼¨à¼©à¼ ]/g,function(a){return c[a]})},postformat:function(a){return a.replace(/\d/g,function(a){return b[a]})},meridiem:function(a){return 4>a?"à½˜à½šà½“à¼‹à½˜à½¼":10>a?"à½žà½¼à½‚à½¦à¼‹à½€à½¦":17>a?"à½‰à½²à½“à¼‹à½‚à½´à½„":20>a?"à½‘à½‚à½¼à½„à¼‹à½‘à½‚":"à½˜à½šà½“à¼‹à½˜à½¼"},week:{dow:0,doy:6}})}),function(a){a(tb)}(function(b){function c(a,b,c){var d={mm:"munutenn",MM:"miz",dd:"devezh"};return a+" "+f(d[c],a)}function d(a){switch(e(a)){case 1:case 3:case 4:case 5:case 9:return a+" bloaz";default:return a+" vloaz"}}function e(a){return a>9?e(a%10):a}function f(a,b){return 2===b?g(a):a}function g(b){var c={m:"v",b:"v",d:"z"};return c[b.charAt(0)]===a?b:c[b.charAt(0)]+b.substring(1)}return b.defineLocale("br",{months:"Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),monthsShort:"Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),weekdays:"Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),weekdaysShort:"Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),weekdaysMin:"Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),longDateFormat:{LT:"h[e]mm A",LTS:"h[e]mm:ss A",L:"DD/MM/YYYY",LL:"D [a viz] MMMM YYYY",LLL:"D [a viz] MMMM YYYY LT",LLLL:"dddd, D [a viz] MMMM YYYY LT"},calendar:{sameDay:"[Hiziv da] LT",nextDay:"[Warc'hoazh da] LT",nextWeek:"dddd [da] LT",lastDay:"[Dec'h da] LT",lastWeek:"dddd [paset da] LT",sameElse:"L"},relativeTime:{future:"a-benn %s",past:"%s 'zo",s:"un nebeud segondennoÃ¹",m:"ur vunutenn",mm:c,h:"un eur",hh:"%d eur",d:"un devezh",dd:c,M:"ur miz",MM:c,y:"ur bloaz",yy:d},ordinalParse:/\d{1,2}(aÃ±|vet)/,ordinal:function(a){var b=1===a?"aÃ±":"vet";return a+b},week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){function b(a,b,c){var d=a+" ";switch(c){case"m":return b?"jedna minuta":"jedne minute";case"mm":return d+=1===a?"minuta":2===a||3===a||4===a?"minute":"minuta";case"h":return b?"jedan sat":"jednog sata";case"hh":return d+=1===a?"sat":2===a||3===a||4===a?"sata":"sati";case"dd":return d+=1===a?"dan":"dana";case"MM":return d+=1===a?"mjesec":2===a||3===a||4===a?"mjeseca":"mjeseci";case"yy":return d+=1===a?"godina":2===a||3===a||4===a?"godine":"godina"}}return a.defineLocale("bs",{months:"januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),weekdays:"nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._Äet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_Äe_pe_su".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[juÄer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[proÅ¡lu] dddd [u] LT";case 6:return"[proÅ¡le] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[proÅ¡li] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:b,mm:b,h:b,hh:b,d:"dan",dd:b,M:"mjesec",MM:b,y:"godinu",yy:b},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){return a.defineLocale("ca",{months:"gener_febrer_marÃ§_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),monthsShort:"gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),weekdays:"diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),weekdaysShort:"dg._dl._dt._dc._dj._dv._ds.".split("_"),weekdaysMin:"Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:function(){return"[avui a "+(1!==this.hours()?"les":"la")+"] LT"},nextDay:function(){return"[demÃ  a "+(1!==this.hours()?"les":"la")+"] LT"},nextWeek:function(){return"dddd [a "+(1!==this.hours()?"les":"la")+"] LT"},lastDay:function(){return"[ahir a "+(1!==this.hours()?"les":"la")+"] LT"},lastWeek:function(){return"[el] dddd [passat a "+(1!==this.hours()?"les":"la")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"fa %s",s:"uns segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},ordinalParse:/\d{1,2}(r|n|t|Ã¨|a)/,ordinal:function(a,b){var c=1===a?"r":2===a?"n":3===a?"r":4===a?"t":"Ã¨";return("w"===b||"W"===b)&&(c="a"),a+c},week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){function b(a){return a>1&&5>a&&1!==~~(a/10)}function c(a,c,d,e){var f=a+" ";switch(d){case"s":return c||e?"pÃ¡r sekund":"pÃ¡r sekundami";case"m":return c?"minuta":e?"minutu":"minutou";case"mm":return c||e?f+(b(a)?"minuty":"minut"):f+"minutami";break;case"h":return c?"hodina":e?"hodinu":"hodinou";case"hh":return c||e?f+(b(a)?"hodiny":"hodin"):f+"hodinami";break;case"d":return c||e?"den":"dnem";case"dd":return c||e?f+(b(a)?"dny":"dnÃ­"):f+"dny";break;case"M":return c||e?"mÄ›sÃ­c":"mÄ›sÃ­cem";case"MM":return c||e?f+(b(a)?"mÄ›sÃ­ce":"mÄ›sÃ­cÅ¯"):f+"mÄ›sÃ­ci";break;case"y":return c||e?"rok":"rokem";case"yy":return c||e?f+(b(a)?"roky":"let"):f+"lety"}}var d="leden_Ãºnor_bÅ™ezen_duben_kvÄ›ten_Äerven_Äervenec_srpen_zÃ¡Å™Ã­_Å™Ã­jen_listopad_prosinec".split("_"),e="led_Ãºno_bÅ™e_dub_kvÄ›_Ävn_Ävc_srp_zÃ¡Å™_Å™Ã­j_lis_pro".split("_");return a.defineLocale("cs",{months:d,monthsShort:e,monthsParse:function(a,b){var c,d=[];for(c=0;12>c;c++)d[c]=new RegExp("^"+a[c]+"$|^"+b[c]+"$","i");return d}(d,e),weekdays:"nedÄ›le_pondÄ›lÃ­_ÃºterÃ½_stÅ™eda_Ätvrtek_pÃ¡tek_sobota".split("_"),weekdaysShort:"ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"),weekdaysMin:"ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd D. MMMM YYYY LT"},calendar:{sameDay:"[dnes v] LT",nextDay:"[zÃ­tra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nedÄ›li v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve stÅ™edu v] LT";case 4:return"[ve Ätvrtek v] LT";case 5:return"[v pÃ¡tek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[vÄera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou nedÄ›li v] LT";case 1:case 2:return"[minulÃ©] dddd [v] LT";case 3:return"[minulou stÅ™edu v] LT";case 4:case 5:return"[minulÃ½] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pÅ™ed %s",s:c,m:c,mm:c,h:c,hh:c,d:c,dd:c,M:c,MM:c,y:c,yy:c},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("cv",{months:"ÐºÄƒÑ€Ð»Ð°Ñ‡_Ð½Ð°Ñ€ÄƒÑ_Ð¿ÑƒÑˆ_Ð°ÐºÐ°_Ð¼Ð°Ð¹_Ã§Ä•Ñ€Ñ‚Ð¼Ðµ_ÑƒÑ‚Äƒ_Ã§ÑƒÑ€Ð»Ð°_Ð°Ð²ÄƒÐ½_ÑŽÐ¿Ð°_Ñ‡Ó³Ðº_Ñ€Ð°ÑˆÑ‚Ð°Ð²".split("_"),monthsShort:"ÐºÄƒÑ€_Ð½Ð°Ñ€_Ð¿ÑƒÑˆ_Ð°ÐºÐ°_Ð¼Ð°Ð¹_Ã§Ä•Ñ€_ÑƒÑ‚Äƒ_Ã§ÑƒÑ€_Ð°Ð²_ÑŽÐ¿Ð°_Ñ‡Ó³Ðº_Ñ€Ð°Ñˆ".split("_"),weekdays:"Ð²Ñ‹Ñ€ÑÐ°Ñ€Ð½Ð¸ÐºÑƒÐ½_Ñ‚ÑƒÐ½Ñ‚Ð¸ÐºÑƒÐ½_Ñ‹Ñ‚Ð»Ð°Ñ€Ð¸ÐºÑƒÐ½_ÑŽÐ½ÐºÑƒÐ½_ÐºÄ•Ã§Ð½ÐµÑ€Ð½Ð¸ÐºÑƒÐ½_ÑÑ€Ð½ÐµÐºÑƒÐ½_ÑˆÄƒÐ¼Ð°Ñ‚ÐºÑƒÐ½".split("_"),weekdaysShort:"Ð²Ñ‹Ñ€_Ñ‚ÑƒÐ½_Ñ‹Ñ‚Ð»_ÑŽÐ½_ÐºÄ•Ã§_ÑÑ€Ð½_ÑˆÄƒÐ¼".split("_"),weekdaysMin:"Ð²Ñ€_Ñ‚Ð½_Ñ‹Ñ‚_ÑŽÐ½_ÐºÃ§_ÑÑ€_ÑˆÐ¼".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD-MM-YYYY",LL:"YYYY [Ã§ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹ÄƒÑ…Ä•Ð½] D[-Ð¼Ä•ÑˆÄ•]",LLL:"YYYY [Ã§ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹ÄƒÑ…Ä•Ð½] D[-Ð¼Ä•ÑˆÄ•], LT",LLLL:"dddd, YYYY [Ã§ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹ÄƒÑ…Ä•Ð½] D[-Ð¼Ä•ÑˆÄ•], LT"},calendar:{sameDay:"[ÐŸÐ°ÑÐ½] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",nextDay:"[Ð«Ñ€Ð°Ð½] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",lastDay:"[Ä”Ð½ÐµÑ€] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",nextWeek:"[Ã‡Ð¸Ñ‚ÐµÑ] dddd LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",lastWeek:"[Ð˜Ñ€Ñ‚Ð½Ä•] dddd LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",sameElse:"L"},relativeTime:{future:function(a){var b=/ÑÐµÑ…ÐµÑ‚$/i.exec(a)?"Ñ€ÐµÐ½":/Ã§ÑƒÐ»$/i.exec(a)?"Ñ‚Ð°Ð½":"Ñ€Ð°Ð½";return a+b},past:"%s ÐºÐ°ÑÐ»Ð»Ð°",s:"Ð¿Ä•Ñ€-Ð¸Ðº Ã§ÐµÐºÐºÑƒÐ½Ñ‚",m:"Ð¿Ä•Ñ€ Ð¼Ð¸Ð½ÑƒÑ‚",mm:"%d Ð¼Ð¸Ð½ÑƒÑ‚",h:"Ð¿Ä•Ñ€ ÑÐµÑ…ÐµÑ‚",hh:"%d ÑÐµÑ…ÐµÑ‚",d:"Ð¿Ä•Ñ€ ÐºÑƒÐ½",dd:"%d ÐºÑƒÐ½",M:"Ð¿Ä•Ñ€ ÑƒÐ¹ÄƒÑ…",MM:"%d ÑƒÐ¹ÄƒÑ…",y:"Ð¿Ä•Ñ€ Ã§ÑƒÐ»",yy:"%d Ã§ÑƒÐ»"},ordinalParse:/\d{1,2}-Ð¼Ä•Ñˆ/,ordinal:"%d-Ð¼Ä•Ñˆ",week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){return a.defineLocale("cy",{months:"Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),monthsShort:"Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),weekdays:"Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),weekdaysShort:"Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),weekdaysMin:"Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Heddiw am] LT",nextDay:"[Yfory am] LT",nextWeek:"dddd [am] LT",lastDay:"[Ddoe am] LT",lastWeek:"dddd [diwethaf am] LT",sameElse:"L"},relativeTime:{future:"mewn %s",past:"%s yn Ã´l",s:"ychydig eiliadau",m:"munud",mm:"%d munud",h:"awr",hh:"%d awr",d:"diwrnod",dd:"%d diwrnod",M:"mis",MM:"%d mis",y:"blwyddyn",yy:"%d flynedd"},ordinalParse:/\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,ordinal:function(a){var b=a,c="",d=["","af","il","ydd","ydd","ed","ed","ed","fed","fed","fed","eg","fed","eg","eg","fed","eg","eg","fed","eg","fed"];return b>20?c=40===b||50===b||60===b||80===b||100===b?"fed":"ain":b>0&&(c=d[b]),a+c},week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("da",{months:"januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split("_"),weekdaysShort:"sÃ¸n_man_tir_ons_tor_fre_lÃ¸r".split("_"),weekdaysMin:"sÃ¸_ma_ti_on_to_fr_lÃ¸".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd [d.] D. MMMM YYYY LT"},calendar:{sameDay:"[I dag kl.] LT",nextDay:"[I morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[I gÃ¥r kl.] LT",lastWeek:"[sidste] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"fÃ¥ sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en mÃ¥ned",MM:"%d mÃ¥neder",y:"et Ã¥r",yy:"%d Ã¥r"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){function b(a,b,c){var d={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[a+" Tage",a+" Tagen"],M:["ein Monat","einem Monat"],MM:[a+" Monate",a+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[a+" Jahre",a+" Jahren"]};return b?d[c][0]:d[c][1]}return a.defineLocale("de-at",{months:"JÃ¤nner_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"JÃ¤n._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[Heute um] LT [Uhr]",sameElse:"L",nextDay:"[Morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[Gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:b,mm:"%d Minuten",h:b,hh:"%d Stunden",d:b,dd:b,M:b,MM:b,y:b,yy:b},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){function b(a,b,c){var d={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[a+" Tage",a+" Tagen"],M:["ein Monat","einem Monat"],MM:[a+" Monate",a+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[a+" Jahre",a+" Jahren"]};return b?d[c][0]:d[c][1]}return a.defineLocale("de",{months:"Januar_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[Heute um] LT [Uhr]",sameElse:"L",nextDay:"[Morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[Gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:b,mm:"%d Minuten",h:b,hh:"%d Stunden",d:b,dd:b,M:b,MM:b,y:b,yy:b},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("el",{monthsNominativeEl:"Î™Î±Î½Î¿Ï…Î¬ÏÎ¹Î¿Ï‚_Î¦ÎµÎ²ÏÎ¿Ï…Î¬ÏÎ¹Î¿Ï‚_ÎœÎ¬ÏÏ„Î¹Î¿Ï‚_Î‘Ï€ÏÎ¯Î»Î¹Î¿Ï‚_ÎœÎ¬Î¹Î¿Ï‚_Î™Î¿ÏÎ½Î¹Î¿Ï‚_Î™Î¿ÏÎ»Î¹Î¿Ï‚_Î‘ÏÎ³Î¿Ï…ÏƒÏ„Î¿Ï‚_Î£ÎµÏ€Ï„Î­Î¼Î²ÏÎ¹Î¿Ï‚_ÎŸÎºÏ„ÏŽÎ²ÏÎ¹Î¿Ï‚_ÎÎ¿Î­Î¼Î²ÏÎ¹Î¿Ï‚_Î”ÎµÎºÎ­Î¼Î²ÏÎ¹Î¿Ï‚".split("_"),monthsGenitiveEl:"Î™Î±Î½Î¿Ï…Î±ÏÎ¯Î¿Ï…_Î¦ÎµÎ²ÏÎ¿Ï…Î±ÏÎ¯Î¿Ï…_ÎœÎ±ÏÏ„Î¯Î¿Ï…_Î‘Ï€ÏÎ¹Î»Î¯Î¿Ï…_ÎœÎ±ÎÎ¿Ï…_Î™Î¿Ï…Î½Î¯Î¿Ï…_Î™Î¿Ï…Î»Î¯Î¿Ï…_Î‘Ï…Î³Î¿ÏÏƒÏ„Î¿Ï…_Î£ÎµÏ€Ï„ÎµÎ¼Î²ÏÎ¯Î¿Ï…_ÎŸÎºÏ„Ï‰Î²ÏÎ¯Î¿Ï…_ÎÎ¿ÎµÎ¼Î²ÏÎ¯Î¿Ï…_Î”ÎµÎºÎµÎ¼Î²ÏÎ¯Î¿Ï…".split("_"),months:function(a,b){return/D/.test(b.substring(0,b.indexOf("MMMM")))?this._monthsGenitiveEl[a.month()]:this._monthsNominativeEl[a.month()]},monthsShort:"Î™Î±Î½_Î¦ÎµÎ²_ÎœÎ±Ï_Î‘Ï€Ï_ÎœÎ±ÏŠ_Î™Î¿Ï…Î½_Î™Î¿Ï…Î»_Î‘Ï…Î³_Î£ÎµÏ€_ÎŸÎºÏ„_ÎÎ¿Îµ_Î”ÎµÎº".split("_"),weekdays:"ÎšÏ…ÏÎ¹Î±ÎºÎ®_Î”ÎµÏ…Ï„Î­ÏÎ±_Î¤ÏÎ¯Ï„Î·_Î¤ÎµÏ„Î¬ÏÏ„Î·_Î Î­Î¼Ï€Ï„Î·_Î Î±ÏÎ±ÏƒÎºÎµÏ…Î®_Î£Î¬Î²Î²Î±Ï„Î¿".split("_"),weekdaysShort:"ÎšÏ…Ï_Î”ÎµÏ…_Î¤ÏÎ¹_Î¤ÎµÏ„_Î ÎµÎ¼_Î Î±Ï_Î£Î±Î²".split("_"),weekdaysMin:"ÎšÏ…_Î”Îµ_Î¤Ï_Î¤Îµ_Î Îµ_Î Î±_Î£Î±".split("_"),meridiem:function(a,b,c){return a>11?c?"Î¼Î¼":"ÎœÎœ":c?"Ï€Î¼":"Î Îœ"},isPM:function(a){return"Î¼"===(a+"").toLowerCase()[0]},meridiemParse:/[Î Îœ]\.?Îœ?\.?/i,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendarEl:{sameDay:"[Î£Î®Î¼ÎµÏÎ± {}] LT",nextDay:"[Î‘ÏÏÎ¹Î¿ {}] LT",nextWeek:"dddd [{}] LT",lastDay:"[Î§Î¸ÎµÏ‚ {}] LT",lastWeek:function(){switch(this.day()){case 6:return"[Ï„Î¿ Ï€ÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î¿] dddd [{}] LT";default:return"[Ï„Î·Î½ Ï€ÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î·] dddd [{}] LT"}},sameElse:"L"},calendar:function(a,b){var c=this._calendarEl[a],d=b&&b.hours();return"function"==typeof c&&(c=c.apply(b)),c.replace("{}",d%12===1?"ÏƒÏ„Î·":"ÏƒÏ„Î¹Ï‚")},relativeTime:{future:"ÏƒÎµ %s",past:"%s Ï€ÏÎ¹Î½",s:"Î»Î¯Î³Î± Î´ÎµÏ…Ï„ÎµÏÏŒÎ»ÎµÏ€Ï„Î±",m:"Î­Î½Î± Î»ÎµÏ€Ï„ÏŒ",mm:"%d Î»ÎµÏ€Ï„Î¬",h:"Î¼Î¯Î± ÏŽÏÎ±",hh:"%d ÏŽÏÎµÏ‚",d:"Î¼Î¯Î± Î¼Î­ÏÎ±",dd:"%d Î¼Î­ÏÎµÏ‚",M:"Î­Î½Î±Ï‚ Î¼Î®Î½Î±Ï‚",MM:"%d Î¼Î®Î½ÎµÏ‚",y:"Î­Î½Î±Ï‚ Ï‡ÏÏŒÎ½Î¿Ï‚",yy:"%d Ï‡ÏÏŒÎ½Î¹Î±"},ordinalParse:/\d{1,2}Î·/,ordinal:"%dÎ·",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("en-au",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(a){var b=a%10,c=1===~~(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c},week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("en-ca",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"YYYY-MM-DD",LL:"D MMMM, YYYY",LLL:"D MMMM, YYYY LT",LLLL:"dddd, D MMMM, YYYY LT"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(a){var b=a%10,c=1===~~(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}})}),function(a){a(tb)}(function(a){return a.defineLocale("en-gb",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(a){var b=a%10,c=1===~~(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c},week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("eo",{months:"januaro_februaro_marto_aprilo_majo_junio_julio_aÅ­gusto_septembro_oktobro_novembro_decembro".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aÅ­g_sep_okt_nov_dec".split("_"),weekdays:"DimanÄ‰o_Lundo_Mardo_Merkredo_Ä´aÅ­do_Vendredo_Sabato".split("_"),weekdaysShort:"Dim_Lun_Mard_Merk_Ä´aÅ­_Ven_Sab".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Ä´a_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"D[-an de] MMMM, YYYY",LLL:"D[-an de] MMMM, YYYY LT",LLLL:"dddd, [la] D[-an de] MMMM, YYYY LT"},meridiem:function(a,b,c){return a>11?c?"p.t.m.":"P.T.M.":c?"a.t.m.":"A.T.M."},calendar:{sameDay:"[HodiaÅ­ je] LT",nextDay:"[MorgaÅ­ je] LT",nextWeek:"dddd [je] LT",lastDay:"[HieraÅ­ je] LT",lastWeek:"[pasinta] dddd [je] LT",sameElse:"L"},relativeTime:{future:"je %s",past:"antaÅ­ %s",s:"sekundoj",m:"minuto",mm:"%d minutoj",h:"horo",hh:"%d horoj",d:"tago",dd:"%d tagoj",M:"monato",MM:"%d monatoj",y:"jaro",yy:"%d jaroj"},ordinalParse:/\d{1,2}a/,ordinal:"%da",week:{dow:1,doy:7}})
}),function(a){a(tb)}(function(a){var b="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),c="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");return a.defineLocale("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(a,d){return/-MMM-/.test(d)?c[a.month()]:b[a.month()]},weekdays:"domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado".split("_"),weekdaysShort:"dom._lun._mar._miÃ©._jue._vie._sÃ¡b.".split("_"),weekdaysMin:"Do_Lu_Ma_Mi_Ju_Vi_SÃ¡".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY LT",LLLL:"dddd, D [de] MMMM [de] YYYY LT"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[maÃ±ana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un dÃ­a",dd:"%d dÃ­as",M:"un mes",MM:"%d meses",y:"un aÃ±o",yy:"%d aÃ±os"},ordinalParse:/\d{1,2}Âº/,ordinal:"%dÂº",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){function b(a,b,c,d){var e={s:["mÃµne sekundi","mÃµni sekund","paar sekundit"],m:["Ã¼he minuti","Ã¼ks minut"],mm:[a+" minuti",a+" minutit"],h:["Ã¼he tunni","tund aega","Ã¼ks tund"],hh:[a+" tunni",a+" tundi"],d:["Ã¼he pÃ¤eva","Ã¼ks pÃ¤ev"],M:["kuu aja","kuu aega","Ã¼ks kuu"],MM:[a+" kuu",a+" kuud"],y:["Ã¼he aasta","aasta","Ã¼ks aasta"],yy:[a+" aasta",a+" aastat"]};return b?e[c][2]?e[c][2]:e[c][1]:d?e[c][0]:e[c][1]}return a.defineLocale("et",{months:"jaanuar_veebruar_mÃ¤rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_mÃ¤rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),weekdays:"pÃ¼hapÃ¤ev_esmaspÃ¤ev_teisipÃ¤ev_kolmapÃ¤ev_neljapÃ¤ev_reede_laupÃ¤ev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[TÃ¤na,] LT",nextDay:"[Homme,] LT",nextWeek:"[JÃ¤rgmine] dddd LT",lastDay:"[Eile,] LT",lastWeek:"[Eelmine] dddd LT",sameElse:"L"},relativeTime:{future:"%s pÃ¤rast",past:"%s tagasi",s:b,m:b,mm:b,h:b,hh:b,d:b,dd:"%d pÃ¤eva",M:b,MM:b,y:b,yy:b},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("eu",{months:"urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),weekdaysMin:"ig_al_ar_az_og_ol_lr".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"YYYY[ko] MMMM[ren] D[a]",LLL:"YYYY[ko] MMMM[ren] D[a] LT",LLLL:"dddd, YYYY[ko] MMMM[ren] D[a] LT",l:"YYYY-M-D",ll:"YYYY[ko] MMM D[a]",lll:"YYYY[ko] MMM D[a] LT",llll:"ddd, YYYY[ko] MMM D[a] LT"},calendar:{sameDay:"[gaur] LT[etan]",nextDay:"[bihar] LT[etan]",nextWeek:"dddd LT[etan]",lastDay:"[atzo] LT[etan]",lastWeek:"[aurreko] dddd LT[etan]",sameElse:"L"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",m:"minutu bat",mm:"%d minutu",h:"ordu bat",hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){var b={1:"Û±",2:"Û²",3:"Û³",4:"Û´",5:"Ûµ",6:"Û¶",7:"Û·",8:"Û¸",9:"Û¹",0:"Û°"},c={"Û±":"1","Û²":"2","Û³":"3","Û´":"4","Ûµ":"5","Û¶":"6","Û·":"7","Û¸":"8","Û¹":"9","Û°":"0"};return a.defineLocale("fa",{months:"Ú˜Ø§Ù†ÙˆÛŒÙ‡_ÙÙˆØ±ÛŒÙ‡_Ù…Ø§Ø±Ø³_Ø¢ÙˆØ±ÛŒÙ„_Ù…Ù‡_Ú˜ÙˆØ¦Ù†_Ú˜ÙˆØ¦ÛŒÙ‡_Ø§ÙˆØª_Ø³Ù¾ØªØ§Ù…Ø¨Ø±_Ø§Ú©ØªØ¨Ø±_Ù†ÙˆØ§Ù…Ø¨Ø±_Ø¯Ø³Ø§Ù…Ø¨Ø±".split("_"),monthsShort:"Ú˜Ø§Ù†ÙˆÛŒÙ‡_ÙÙˆØ±ÛŒÙ‡_Ù…Ø§Ø±Ø³_Ø¢ÙˆØ±ÛŒÙ„_Ù…Ù‡_Ú˜ÙˆØ¦Ù†_Ú˜ÙˆØ¦ÛŒÙ‡_Ø§ÙˆØª_Ø³Ù¾ØªØ§Ù…Ø¨Ø±_Ø§Ú©ØªØ¨Ø±_Ù†ÙˆØ§Ù…Ø¨Ø±_Ø¯Ø³Ø§Ù…Ø¨Ø±".split("_"),weekdays:"ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡_Ø¯ÙˆØ´Ù†Ø¨Ù‡_Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡_Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡_Ù¾Ù†Ø¬â€ŒØ´Ù†Ø¨Ù‡_Ø¬Ù…Ø¹Ù‡_Ø´Ù†Ø¨Ù‡".split("_"),weekdaysShort:"ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡_Ø¯ÙˆØ´Ù†Ø¨Ù‡_Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡_Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡_Ù¾Ù†Ø¬â€ŒØ´Ù†Ø¨Ù‡_Ø¬Ù…Ø¹Ù‡_Ø´Ù†Ø¨Ù‡".split("_"),weekdaysMin:"ÛŒ_Ø¯_Ø³_Ú†_Ù¾_Ø¬_Ø´".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},meridiem:function(a){return 12>a?"Ù‚Ø¨Ù„ Ø§Ø² Ø¸Ù‡Ø±":"Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±"},calendar:{sameDay:"[Ø§Ù…Ø±ÙˆØ² Ø³Ø§Ø¹Øª] LT",nextDay:"[ÙØ±Ø¯Ø§ Ø³Ø§Ø¹Øª] LT",nextWeek:"dddd [Ø³Ø§Ø¹Øª] LT",lastDay:"[Ø¯ÛŒØ±ÙˆØ² Ø³Ø§Ø¹Øª] LT",lastWeek:"dddd [Ù¾ÛŒØ´] [Ø³Ø§Ø¹Øª] LT",sameElse:"L"},relativeTime:{future:"Ø¯Ø± %s",past:"%s Ù¾ÛŒØ´",s:"Ú†Ù†Ø¯ÛŒÙ† Ø«Ø§Ù†ÛŒÙ‡",m:"ÛŒÚ© Ø¯Ù‚ÛŒÙ‚Ù‡",mm:"%d Ø¯Ù‚ÛŒÙ‚Ù‡",h:"ÛŒÚ© Ø³Ø§Ø¹Øª",hh:"%d Ø³Ø§Ø¹Øª",d:"ÛŒÚ© Ø±ÙˆØ²",dd:"%d Ø±ÙˆØ²",M:"ÛŒÚ© Ù…Ø§Ù‡",MM:"%d Ù…Ø§Ù‡",y:"ÛŒÚ© Ø³Ø§Ù„",yy:"%d Ø³Ø§Ù„"},preparse:function(a){return a.replace(/[Û°-Û¹]/g,function(a){return c[a]}).replace(/ØŒ/g,",")},postformat:function(a){return a.replace(/\d/g,function(a){return b[a]}).replace(/,/g,"ØŒ")},ordinalParse:/\d{1,2}Ù…/,ordinal:"%dÙ…",week:{dow:6,doy:12}})}),function(a){a(tb)}(function(a){function b(a,b,d,e){var f="";switch(d){case"s":return e?"muutaman sekunnin":"muutama sekunti";case"m":return e?"minuutin":"minuutti";case"mm":f=e?"minuutin":"minuuttia";break;case"h":return e?"tunnin":"tunti";case"hh":f=e?"tunnin":"tuntia";break;case"d":return e?"pÃ¤ivÃ¤n":"pÃ¤ivÃ¤";case"dd":f=e?"pÃ¤ivÃ¤n":"pÃ¤ivÃ¤Ã¤";break;case"M":return e?"kuukauden":"kuukausi";case"MM":f=e?"kuukauden":"kuukautta";break;case"y":return e?"vuoden":"vuosi";case"yy":f=e?"vuoden":"vuotta"}return f=c(a,e)+" "+f}function c(a,b){return 10>a?b?e[a]:d[a]:a}var d="nolla yksi kaksi kolme neljÃ¤ viisi kuusi seitsemÃ¤n kahdeksan yhdeksÃ¤n".split(" "),e=["nolla","yhden","kahden","kolmen","neljÃ¤n","viiden","kuuden",d[7],d[8],d[9]];return a.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesÃ¤kuu_heinÃ¤kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesÃ¤_heinÃ¤_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] LT",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] LT",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] LT",llll:"ddd, Do MMM YYYY, [klo] LT"},calendar:{sameDay:"[tÃ¤nÃ¤Ã¤n] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s pÃ¤Ã¤stÃ¤",past:"%s sitten",s:b,m:b,mm:b,h:b,hh:b,d:b,dd:b,M:b,MM:b,y:b,yy:b},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("fo",{months:"januar_februar_mars_aprÃ­l_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sunnudagur_mÃ¡nadagur_tÃ½sdagur_mikudagur_hÃ³sdagur_frÃ­ggjadagur_leygardagur".split("_"),weekdaysShort:"sun_mÃ¡n_tÃ½s_mik_hÃ³s_frÃ­_ley".split("_"),weekdaysMin:"su_mÃ¡_tÃ½_mi_hÃ³_fr_le".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D. MMMM, YYYY LT"},calendar:{sameDay:"[Ã dag kl.] LT",nextDay:"[Ã morgin kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[Ã gjÃ¡r kl.] LT",lastWeek:"[sÃ­Ã°stu] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"um %s",past:"%s sÃ­Ã°ani",s:"fÃ¡ sekund",m:"ein minutt",mm:"%d minuttir",h:"ein tÃ­mi",hh:"%d tÃ­mar",d:"ein dagur",dd:"%d dagar",M:"ein mÃ¡naÃ°i",MM:"%d mÃ¡naÃ°ir",y:"eitt Ã¡r",yy:"%d Ã¡r"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("fr-ca",{months:"janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),monthsShort:"janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[Aujourd'hui Ã ] LT",nextDay:"[Demain Ã ] LT",nextWeek:"dddd [Ã ] LT",lastDay:"[Hier Ã ] LT",lastWeek:"dddd [dernier Ã ] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|)/,ordinal:function(a){return a+(1===a?"er":"")}})}),function(a){a(tb)}(function(a){return a.defineLocale("fr",{months:"janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),monthsShort:"janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[Aujourd'hui Ã ] LT",nextDay:"[Demain Ã ] LT",nextWeek:"dddd [Ã ] LT",lastDay:"[Hier Ã ] LT",lastWeek:"dddd [dernier Ã ] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|)/,ordinal:function(a){return a+(1===a?"er":"")},week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("gl",{months:"Xaneiro_Febreiro_Marzo_Abril_Maio_XuÃ±o_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),monthsShort:"Xan._Feb._Mar._Abr._Mai._XuÃ±._Xul._Ago._Set._Out._Nov._Dec.".split("_"),weekdays:"Domingo_Luns_Martes_MÃ©rcores_Xoves_Venres_SÃ¡bado".split("_"),weekdaysShort:"Dom._Lun._Mar._MÃ©r._Xov._Ven._SÃ¡b.".split("_"),weekdaysMin:"Do_Lu_Ma_MÃ©_Xo_Ve_SÃ¡".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:function(){return"[hoxe "+(1!==this.hours()?"Ã¡s":"Ã¡")+"] LT"},nextDay:function(){return"[maÃ±Ã¡ "+(1!==this.hours()?"Ã¡s":"Ã¡")+"] LT"},nextWeek:function(){return"dddd ["+(1!==this.hours()?"Ã¡s":"a")+"] LT"},lastDay:function(){return"[onte "+(1!==this.hours()?"Ã¡":"a")+"] LT"},lastWeek:function(){return"[o] dddd [pasado "+(1!==this.hours()?"Ã¡s":"a")+"] LT"},sameElse:"L"},relativeTime:{future:function(a){return"uns segundos"===a?"nuns segundos":"en "+a},past:"hai %s",s:"uns segundos",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un dÃ­a",dd:"%d dÃ­as",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"},ordinalParse:/\d{1,2}Âº/,ordinal:"%dÂº",week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){return a.defineLocale("he",{months:"×™× ×•××¨_×¤×‘×¨×•××¨_×ž×¨×¥_××¤×¨×™×œ_×ž××™_×™×•× ×™_×™×•×œ×™_××•×’×•×¡×˜_×¡×¤×˜×ž×‘×¨_××•×§×˜×•×‘×¨_× ×•×‘×ž×‘×¨_×“×¦×ž×‘×¨".split("_"),monthsShort:"×™× ×•×³_×¤×‘×¨×³_×ž×¨×¥_××¤×¨×³_×ž××™_×™×•× ×™_×™×•×œ×™_××•×’×³_×¡×¤×˜×³_××•×§×³_× ×•×‘×³_×“×¦×ž×³".split("_"),weekdays:"×¨××©×•×Ÿ_×©× ×™_×©×œ×™×©×™_×¨×‘×™×¢×™_×—×ž×™×©×™_×©×™×©×™_×©×‘×ª".split("_"),weekdaysShort:"××³_×‘×³_×’×³_×“×³_×”×³_×•×³_×©×³".split("_"),weekdaysMin:"×_×‘_×’_×“_×”_×•_×©".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D [×‘]MMMM YYYY",LLL:"D [×‘]MMMM YYYY LT",LLLL:"dddd, D [×‘]MMMM YYYY LT",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY LT",llll:"ddd, D MMM YYYY LT"},calendar:{sameDay:"[×”×™×•× ×‘Ö¾]LT",nextDay:"[×ž×—×¨ ×‘Ö¾]LT",nextWeek:"dddd [×‘×©×¢×”] LT",lastDay:"[××ª×ž×•×œ ×‘Ö¾]LT",lastWeek:"[×‘×™×•×] dddd [×”××—×¨×•×Ÿ ×‘×©×¢×”] LT",sameElse:"L"},relativeTime:{future:"×‘×¢×•×“ %s",past:"×œ×¤× ×™ %s",s:"×ž×¡×¤×¨ ×©× ×™×•×ª",m:"×“×§×”",mm:"%d ×“×§×•×ª",h:"×©×¢×”",hh:function(a){return 2===a?"×©×¢×ª×™×™×":a+" ×©×¢×•×ª"},d:"×™×•×",dd:function(a){return 2===a?"×™×•×ž×™×™×":a+" ×™×ž×™×"},M:"×—×•×“×©",MM:function(a){return 2===a?"×—×•×“×©×™×™×":a+" ×—×•×“×©×™×"},y:"×©× ×”",yy:function(a){return 2===a?"×©× ×ª×™×™×":a+" ×©× ×™×"}}})}),function(a){a(tb)}(function(a){var b={1:"à¥§",2:"à¥¨",3:"à¥©",4:"à¥ª",5:"à¥«",6:"à¥¬",7:"à¥­",8:"à¥®",9:"à¥¯",0:"à¥¦"},c={"à¥§":"1","à¥¨":"2","à¥©":"3","à¥ª":"4","à¥«":"5","à¥¬":"6","à¥­":"7","à¥®":"8","à¥¯":"9","à¥¦":"0"};return a.defineLocale("hi",{months:"à¤œà¤¨à¤µà¤°à¥€_à¤«à¤¼à¤°à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆà¤²_à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤¸à¥à¤¤_à¤¸à¤¿à¤¤à¤®à¥à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‚à¤¬à¤°_à¤¨à¤µà¤®à¥à¤¬à¤°_à¤¦à¤¿à¤¸à¤®à¥à¤¬à¤°".split("_"),monthsShort:"à¤œà¤¨._à¤«à¤¼à¤°._à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆ._à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²._à¤…à¤—._à¤¸à¤¿à¤¤._à¤…à¤•à¥à¤Ÿà¥‚._à¤¨à¤µ._à¤¦à¤¿à¤¸.".split("_"),weekdays:"à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥‹à¤®à¤µà¤¾à¤°_à¤®à¤‚à¤—à¤²à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤—à¥à¤°à¥‚à¤µà¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°".split("_"),weekdaysShort:"à¤°à¤µà¤¿_à¤¸à¥‹à¤®_à¤®à¤‚à¤—à¤²_à¤¬à¥à¤§_à¤—à¥à¤°à¥‚_à¤¶à¥à¤•à¥à¤°_à¤¶à¤¨à¤¿".split("_"),weekdaysMin:"à¤°_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤—à¥_à¤¶à¥_à¤¶".split("_"),longDateFormat:{LT:"A h:mm à¤¬à¤œà¥‡",LTS:"A h:mm:ss à¤¬à¤œà¥‡",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[à¤†à¤œ] LT",nextDay:"[à¤•à¤²] LT",nextWeek:"dddd, LT",lastDay:"[à¤•à¤²] LT",lastWeek:"[à¤ªà¤¿à¤›à¤²à¥‡] dddd, LT",sameElse:"L"},relativeTime:{future:"%s à¤®à¥‡à¤‚",past:"%s à¤ªà¤¹à¤²à¥‡",s:"à¤•à¥à¤› à¤¹à¥€ à¤•à¥à¤·à¤£",m:"à¤à¤• à¤®à¤¿à¤¨à¤Ÿ",mm:"%d à¤®à¤¿à¤¨à¤Ÿ",h:"à¤à¤• à¤˜à¤‚à¤Ÿà¤¾",hh:"%d à¤˜à¤‚à¤Ÿà¥‡",d:"à¤à¤• à¤¦à¤¿à¤¨",dd:"%d à¤¦à¤¿à¤¨",M:"à¤à¤• à¤®à¤¹à¥€à¤¨à¥‡",MM:"%d à¤®à¤¹à¥€à¤¨à¥‡",y:"à¤à¤• à¤µà¤°à¥à¤·",yy:"%d à¤µà¤°à¥à¤·"},preparse:function(a){return a.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g,function(a){return c[a]})},postformat:function(a){return a.replace(/\d/g,function(a){return b[a]})},meridiem:function(a){return 4>a?"à¤°à¤¾à¤¤":10>a?"à¤¸à¥à¤¬à¤¹":17>a?"à¤¦à¥‹à¤ªà¤¹à¤°":20>a?"à¤¶à¤¾à¤®":"à¤°à¤¾à¤¤"},week:{dow:0,doy:6}})}),function(a){a(tb)}(function(a){function b(a,b,c){var d=a+" ";switch(c){case"m":return b?"jedna minuta":"jedne minute";case"mm":return d+=1===a?"minuta":2===a||3===a||4===a?"minute":"minuta";case"h":return b?"jedan sat":"jednog sata";case"hh":return d+=1===a?"sat":2===a||3===a||4===a?"sata":"sati";case"dd":return d+=1===a?"dan":"dana";case"MM":return d+=1===a?"mjesec":2===a||3===a||4===a?"mjeseca":"mjeseci";case"yy":return d+=1===a?"godina":2===a||3===a||4===a?"godine":"godina"}}return a.defineLocale("hr",{months:"sjeÄanj_veljaÄa_oÅ¾ujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"),monthsShort:"sje._vel._oÅ¾u._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),weekdays:"nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._Äet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_Äe_pe_su".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[juÄer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[proÅ¡lu] dddd [u] LT";case 6:return"[proÅ¡le] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[proÅ¡li] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:b,mm:b,h:b,hh:b,d:"dan",dd:b,M:"mjesec",MM:b,y:"godinu",yy:b},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){function b(a,b,c,d){var e=a;switch(c){case"s":return d||b?"nÃ©hÃ¡ny mÃ¡sodperc":"nÃ©hÃ¡ny mÃ¡sodperce";case"m":return"egy"+(d||b?" perc":" perce");case"mm":return e+(d||b?" perc":" perce");case"h":return"egy"+(d||b?" Ã³ra":" Ã³rÃ¡ja");case"hh":return e+(d||b?" Ã³ra":" Ã³rÃ¡ja");case"d":return"egy"+(d||b?" nap":" napja");case"dd":return e+(d||b?" nap":" napja");case"M":return"egy"+(d||b?" hÃ³nap":" hÃ³napja");case"MM":return e+(d||b?" hÃ³nap":" hÃ³napja");case"y":return"egy"+(d||b?" Ã©v":" Ã©ve");case"yy":return e+(d||b?" Ã©v":" Ã©ve")}return""}function c(a){return(a?"":"[mÃºlt] ")+"["+d[this.day()]+"] LT[-kor]"}var d="vasÃ¡rnap hÃ©tfÅ‘n kedden szerdÃ¡n csÃ¼tÃ¶rtÃ¶kÃ¶n pÃ©nteken szombaton".split(" ");return a.defineLocale("hu",{months:"januÃ¡r_februÃ¡r_mÃ¡rcius_Ã¡prilis_mÃ¡jus_jÃºnius_jÃºlius_augusztus_szeptember_oktÃ³ber_november_december".split("_"),monthsShort:"jan_feb_mÃ¡rc_Ã¡pr_mÃ¡j_jÃºn_jÃºl_aug_szept_okt_nov_dec".split("_"),weekdays:"vasÃ¡rnap_hÃ©tfÅ‘_kedd_szerda_csÃ¼tÃ¶rtÃ¶k_pÃ©ntek_szombat".split("_"),weekdaysShort:"vas_hÃ©t_kedd_sze_csÃ¼t_pÃ©n_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D., LT",LLLL:"YYYY. MMMM D., dddd LT"},meridiem:function(a,b,c){return 12>a?c===!0?"de":"DE":c===!0?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return c.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return c.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s mÃºlva",past:"%s",s:b,m:b,mm:b,h:b,hh:b,d:b,dd:b,M:b,MM:b,y:b,yy:b},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){function b(a,b){var c={nominative:"Õ°Õ¸Ö‚Õ¶Õ¾Õ¡Ö€_ÖƒÕ¥Õ¿Ö€Õ¾Õ¡Ö€_Õ´Õ¡Ö€Õ¿_Õ¡ÕºÖ€Õ«Õ¬_Õ´Õ¡ÕµÕ«Õ½_Õ°Õ¸Ö‚Õ¶Õ«Õ½_Õ°Õ¸Ö‚Õ¬Õ«Õ½_Ö…Õ£Õ¸Õ½Õ¿Õ¸Õ½_Õ½Õ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö€_Õ°Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€_Õ¶Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö€_Õ¤Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€".split("_"),accusative:"Õ°Õ¸Ö‚Õ¶Õ¾Õ¡Ö€Õ«_ÖƒÕ¥Õ¿Ö€Õ¾Õ¡Ö€Õ«_Õ´Õ¡Ö€Õ¿Õ«_Õ¡ÕºÖ€Õ«Õ¬Õ«_Õ´Õ¡ÕµÕ«Õ½Õ«_Õ°Õ¸Ö‚Õ¶Õ«Õ½Õ«_Õ°Õ¸Ö‚Õ¬Õ«Õ½Õ«_Ö…Õ£Õ¸Õ½Õ¿Õ¸Õ½Õ«_Õ½Õ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«_Õ°Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«_Õ¶Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö€Õ«_Õ¤Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«".split("_")},d=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b)?"accusative":"nominative";return c[d][a.month()]}function c(a){var b="Õ°Õ¶Õ¾_ÖƒÕ¿Ö€_Õ´Ö€Õ¿_Õ¡ÕºÖ€_Õ´ÕµÕ½_Õ°Õ¶Õ½_Õ°Õ¬Õ½_Ö…Õ£Õ½_Õ½ÕºÕ¿_Õ°Õ¯Õ¿_Õ¶Õ´Õ¢_Õ¤Õ¯Õ¿".split("_");return b[a.month()]}function d(a){var b="Õ¯Õ«Ö€Õ¡Õ¯Õ«_Õ¥Ö€Õ¯Õ¸Ö‚Õ·Õ¡Õ¢Õ©Õ«_Õ¥Ö€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«_Õ¹Õ¸Ö€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«_Õ°Õ«Õ¶Õ£Õ·Õ¡Õ¢Õ©Õ«_Õ¸Ö‚Ö€Õ¢Õ¡Õ©_Õ·Õ¡Õ¢Õ¡Õ©".split("_");return b[a.day()]}return a.defineLocale("hy-am",{months:b,monthsShort:c,weekdays:d,weekdaysShort:"Õ¯Ö€Õ¯_Õ¥Ö€Õ¯_Õ¥Ö€Ö„_Õ¹Ö€Ö„_Õ°Õ¶Õ£_Õ¸Ö‚Ö€Õ¢_Õ·Õ¢Õ©".split("_"),weekdaysMin:"Õ¯Ö€Õ¯_Õ¥Ö€Õ¯_Õ¥Ö€Ö„_Õ¹Ö€Ö„_Õ°Õ¶Õ£_Õ¸Ö‚Ö€Õ¢_Õ·Õ¢Õ©".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY Õ©.",LLL:"D MMMM YYYY Õ©., LT",LLLL:"dddd, D MMMM YYYY Õ©., LT"},calendar:{sameDay:"[Õ¡ÕµÕ½Ö…Ö€] LT",nextDay:"[Õ¾Õ¡Õ²Õ¨] LT",lastDay:"[Õ¥Ö€Õ¥Õ¯] LT",nextWeek:function(){return"dddd [Ö…Ö€Õ¨ ÕªÕ¡Õ´Õ¨] LT"},lastWeek:function(){return"[Õ¡Õ¶ÖÕ¡Õ®] dddd [Ö…Ö€Õ¨ ÕªÕ¡Õ´Õ¨] LT"},sameElse:"L"},relativeTime:{future:"%s Õ°Õ¥Õ¿Õ¸",past:"%s Õ¡Õ¼Õ¡Õ»",s:"Õ´Õ« Ö„Õ¡Õ¶Õ« Õ¾Õ¡ÕµÖ€Õ¯ÕµÕ¡Õ¶",m:"Ö€Õ¸ÕºÕ¥",mm:"%d Ö€Õ¸ÕºÕ¥",h:"ÕªÕ¡Õ´",hh:"%d ÕªÕ¡Õ´",d:"Ö…Ö€",dd:"%d Ö…Ö€",M:"Õ¡Õ´Õ«Õ½",MM:"%d Õ¡Õ´Õ«Õ½",y:"Õ¿Õ¡Ö€Õ«",yy:"%d Õ¿Õ¡Ö€Õ«"},meridiem:function(a){return 4>a?"Õ£Õ«Õ·Õ¥Ö€Õ¾Õ¡":12>a?"Õ¡Õ¼Õ¡Õ¾Õ¸Õ¿Õ¾Õ¡":17>a?"ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡":"Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶"},ordinalParse:/\d{1,2}|\d{1,2}-(Õ«Õ¶|Ö€Õ¤)/,ordinal:function(a,b){switch(b){case"DDD":case"w":case"W":case"DDDo":return 1===a?a+"-Õ«Õ¶":a+"-Ö€Õ¤";default:return a}},week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){return a.defineLocale("id",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"LT.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] LT",LLLL:"dddd, D MMMM YYYY [pukul] LT"},meridiem:function(a){return 11>a?"pagi":15>a?"siang":19>a?"sore":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){function b(a){return a%100===11?!0:a%10===1?!1:!0}function c(a,c,d,e){var f=a+" ";switch(d){case"s":return c||e?"nokkrar sekÃºndur":"nokkrum sekÃºndum";case"m":return c?"mÃ­nÃºta":"mÃ­nÃºtu";case"mm":return b(a)?f+(c||e?"mÃ­nÃºtur":"mÃ­nÃºtum"):c?f+"mÃ­nÃºta":f+"mÃ­nÃºtu";case"hh":return b(a)?f+(c||e?"klukkustundir":"klukkustundum"):f+"klukkustund";case"d":return c?"dagur":e?"dag":"degi";case"dd":return b(a)?c?f+"dagar":f+(e?"daga":"dÃ¶gum"):c?f+"dagur":f+(e?"dag":"degi");case"M":return c?"mÃ¡nuÃ°ur":e?"mÃ¡nuÃ°":"mÃ¡nuÃ°i";case"MM":return b(a)?c?f+"mÃ¡nuÃ°ir":f+(e?"mÃ¡nuÃ°i":"mÃ¡nuÃ°um"):c?f+"mÃ¡nuÃ°ur":f+(e?"mÃ¡nuÃ°":"mÃ¡nuÃ°i");case"y":return c||e?"Ã¡r":"Ã¡ri";case"yy":return b(a)?f+(c||e?"Ã¡r":"Ã¡rum"):f+(c||e?"Ã¡r":"Ã¡ri")}}return a.defineLocale("is",{months:"janÃºar_febrÃºar_mars_aprÃ­l_maÃ­_jÃºnÃ­_jÃºlÃ­_Ã¡gÃºst_september_oktÃ³ber_nÃ³vember_desember".split("_"),monthsShort:"jan_feb_mar_apr_maÃ­_jÃºn_jÃºl_Ã¡gÃº_sep_okt_nÃ³v_des".split("_"),weekdays:"sunnudagur_mÃ¡nudagur_Ã¾riÃ°judagur_miÃ°vikudagur_fimmtudagur_fÃ¶studagur_laugardagur".split("_"),weekdaysShort:"sun_mÃ¡n_Ã¾ri_miÃ°_fim_fÃ¶s_lau".split("_"),weekdaysMin:"Su_MÃ¡_Ãžr_Mi_Fi_FÃ¶_La".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] LT",LLLL:"dddd, D. MMMM YYYY [kl.] LT"},calendar:{sameDay:"[Ã­ dag kl.] LT",nextDay:"[Ã¡ morgun kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[Ã­ gÃ¦r kl.] LT",lastWeek:"[sÃ­Ã°asta] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"eftir %s",past:"fyrir %s sÃ­Ã°an",s:c,m:c,mm:c,h:"klukkustund",hh:c,d:c,dd:c,M:c,MM:c,y:c,yy:c},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("it",{months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdays:"Domenica_LunedÃ¬_MartedÃ¬_MercoledÃ¬_GiovedÃ¬_VenerdÃ¬_Sabato".split("_"),weekdaysShort:"Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),weekdaysMin:"D_L_Ma_Me_G_V_S".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Oggi alle] LT",nextDay:"[Domani alle] LT",nextWeek:"dddd [alle] LT",lastDay:"[Ieri alle] LT",lastWeek:function(){switch(this.day()){case 0:return"[la scorsa] dddd [alle] LT";default:return"[lo scorso] dddd [alle] LT"}},sameElse:"L"},relativeTime:{future:function(a){return(/^[0-9].+$/.test(a)?"tra":"in")+" "+a},past:"%s fa",s:"alcuni secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},ordinalParse:/\d{1,2}Âº/,ordinal:"%dÂº",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("ja",{months:"1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),monthsShort:"1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),weekdays:"æ—¥æ›œæ—¥_æœˆæ›œæ—¥_ç«æ›œæ—¥_æ°´æ›œæ—¥_æœ¨æ›œæ—¥_é‡‘æ›œæ—¥_åœŸæ›œæ—¥".split("_"),weekdaysShort:"æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ".split("_"),weekdaysMin:"æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ".split("_"),longDateFormat:{LT:"Ahæ™‚måˆ†",LTS:"LTsç§’",L:"YYYY/MM/DD",LL:"YYYYå¹´MæœˆDæ—¥",LLL:"YYYYå¹´MæœˆDæ—¥LT",LLLL:"YYYYå¹´MæœˆDæ—¥LT dddd"},meridiem:function(a){return 12>a?"åˆå‰":"åˆå¾Œ"},calendar:{sameDay:"[ä»Šæ—¥] LT",nextDay:"[æ˜Žæ—¥] LT",nextWeek:"[æ¥é€±]dddd LT",lastDay:"[æ˜¨æ—¥] LT",lastWeek:"[å‰é€±]dddd LT",sameElse:"L"},relativeTime:{future:"%så¾Œ",past:"%så‰",s:"æ•°ç§’",m:"1åˆ†",mm:"%dåˆ†",h:"1æ™‚é–“",hh:"%dæ™‚é–“",d:"1æ—¥",dd:"%dæ—¥",M:"1ãƒ¶æœˆ",MM:"%dãƒ¶æœˆ",y:"1å¹´",yy:"%då¹´"}})}),function(a){a(tb)}(function(a){function b(a,b){var c={nominative:"áƒ˜áƒáƒœáƒ•áƒáƒ áƒ˜_áƒ—áƒ”áƒ‘áƒ”áƒ áƒ•áƒáƒšáƒ˜_áƒ›áƒáƒ áƒ¢áƒ˜_áƒáƒžáƒ áƒ˜áƒšáƒ˜_áƒ›áƒáƒ˜áƒ¡áƒ˜_áƒ˜áƒ•áƒœáƒ˜áƒ¡áƒ˜_áƒ˜áƒ•áƒšáƒ˜áƒ¡áƒ˜_áƒáƒ’áƒ•áƒ˜áƒ¡áƒ¢áƒ_áƒ¡áƒ”áƒ¥áƒ¢áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜_áƒáƒ¥áƒ¢áƒáƒ›áƒ‘áƒ”áƒ áƒ˜_áƒœáƒáƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜_áƒ“áƒ”áƒ™áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜".split("_"),accusative:"áƒ˜áƒáƒœáƒ•áƒáƒ áƒ¡_áƒ—áƒ”áƒ‘áƒ”áƒ áƒ•áƒáƒšáƒ¡_áƒ›áƒáƒ áƒ¢áƒ¡_áƒáƒžáƒ áƒ˜áƒšáƒ˜áƒ¡_áƒ›áƒáƒ˜áƒ¡áƒ¡_áƒ˜áƒ•áƒœáƒ˜áƒ¡áƒ¡_áƒ˜áƒ•áƒšáƒ˜áƒ¡áƒ¡_áƒáƒ’áƒ•áƒ˜áƒ¡áƒ¢áƒ¡_áƒ¡áƒ”áƒ¥áƒ¢áƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡_áƒáƒ¥áƒ¢áƒáƒ›áƒ‘áƒ”áƒ áƒ¡_áƒœáƒáƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡_áƒ“áƒ”áƒ™áƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡".split("_")},d=/D[oD] *MMMM?/.test(b)?"accusative":"nominative";return c[d][a.month()]}function c(a,b){var c={nominative:"áƒ™áƒ•áƒ˜áƒ áƒ_áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒžáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ˜_áƒ¨áƒáƒ‘áƒáƒ—áƒ˜".split("_"),accusative:"áƒ™áƒ•áƒ˜áƒ áƒáƒ¡_áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒžáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ¡_áƒ¨áƒáƒ‘áƒáƒ—áƒ¡".split("_")},d=/(áƒ¬áƒ˜áƒœáƒ|áƒ¨áƒ”áƒ›áƒ“áƒ”áƒ’)/.test(b)?"accusative":"nominative";return c[d][a.day()]}return a.defineLocale("ka",{months:b,monthsShort:"áƒ˜áƒáƒœ_áƒ—áƒ”áƒ‘_áƒ›áƒáƒ _áƒáƒžáƒ _áƒ›áƒáƒ˜_áƒ˜áƒ•áƒœ_áƒ˜áƒ•áƒš_áƒáƒ’áƒ•_áƒ¡áƒ”áƒ¥_áƒáƒ¥áƒ¢_áƒœáƒáƒ”_áƒ“áƒ”áƒ™".split("_"),weekdays:c,weekdaysShort:"áƒ™áƒ•áƒ˜_áƒáƒ áƒ¨_áƒ¡áƒáƒ›_áƒáƒ—áƒ®_áƒ®áƒ£áƒ—_áƒžáƒáƒ _áƒ¨áƒáƒ‘".split("_"),weekdaysMin:"áƒ™áƒ•_áƒáƒ _áƒ¡áƒ_áƒáƒ—_áƒ®áƒ£_áƒžáƒ_áƒ¨áƒ".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[áƒ“áƒ¦áƒ”áƒ¡] LT[-áƒ–áƒ”]",nextDay:"[áƒ®áƒ•áƒáƒš] LT[-áƒ–áƒ”]",lastDay:"[áƒ’áƒ£áƒ¨áƒ˜áƒœ] LT[-áƒ–áƒ”]",nextWeek:"[áƒ¨áƒ”áƒ›áƒ“áƒ”áƒ’] dddd LT[-áƒ–áƒ”]",lastWeek:"[áƒ¬áƒ˜áƒœáƒ] dddd LT-áƒ–áƒ”",sameElse:"L"},relativeTime:{future:function(a){return/(áƒ¬áƒáƒ›áƒ˜|áƒ¬áƒ£áƒ—áƒ˜|áƒ¡áƒáƒáƒ—áƒ˜|áƒ¬áƒ”áƒšáƒ˜)/.test(a)?a.replace(/áƒ˜$/,"áƒ¨áƒ˜"):a+"áƒ¨áƒ˜"},past:function(a){return/(áƒ¬áƒáƒ›áƒ˜|áƒ¬áƒ£áƒ—áƒ˜|áƒ¡áƒáƒáƒ—áƒ˜|áƒ“áƒ¦áƒ”|áƒ—áƒ•áƒ”)/.test(a)?a.replace(/(áƒ˜|áƒ”)$/,"áƒ˜áƒ¡ áƒ¬áƒ˜áƒœ"):/áƒ¬áƒ”áƒšáƒ˜/.test(a)?a.replace(/áƒ¬áƒ”áƒšáƒ˜$/,"áƒ¬áƒšáƒ˜áƒ¡ áƒ¬áƒ˜áƒœ"):void 0},s:"áƒ áƒáƒ›áƒ“áƒ”áƒœáƒ˜áƒ›áƒ” áƒ¬áƒáƒ›áƒ˜",m:"áƒ¬áƒ£áƒ—áƒ˜",mm:"%d áƒ¬áƒ£áƒ—áƒ˜",h:"áƒ¡áƒáƒáƒ—áƒ˜",hh:"%d áƒ¡áƒáƒáƒ—áƒ˜",d:"áƒ“áƒ¦áƒ”",dd:"%d áƒ“áƒ¦áƒ”",M:"áƒ—áƒ•áƒ”",MM:"%d áƒ—áƒ•áƒ”",y:"áƒ¬áƒ”áƒšáƒ˜",yy:"%d áƒ¬áƒ”áƒšáƒ˜"},ordinalParse:/0|1-áƒšáƒ˜|áƒ›áƒ”-\d{1,2}|\d{1,2}-áƒ”/,ordinal:function(a){return 0===a?a:1===a?a+"-áƒšáƒ˜":20>a||100>=a&&a%20===0||a%100===0?"áƒ›áƒ”-"+a:a+"-áƒ”"},week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){return a.defineLocale("km",{months:"áž˜áž€ážšáž¶_áž€áž»áž˜áŸ’áž—áŸˆ_áž˜áž·áž“áž¶_áž˜áŸážŸáž¶_áž§ážŸáž—áž¶_áž˜áž·ážáž»áž“áž¶_áž€áž€áŸ’áž€ážŠáž¶_ážŸáž¸áž áž¶_áž€áž‰áŸ’áž‰áž¶_ážáž»áž›áž¶_ážœáž·áž…áŸ’áž†áž·áž€áž¶_áž’áŸ’áž“áž¼".split("_"),monthsShort:"áž˜áž€ážšáž¶_áž€áž»áž˜áŸ’áž—áŸˆ_áž˜áž·áž“áž¶_áž˜áŸážŸáž¶_áž§ážŸáž—áž¶_áž˜áž·ážáž»áž“áž¶_áž€áž€áŸ’áž€ážŠáž¶_ážŸáž¸áž áž¶_áž€áž‰áŸ’áž‰áž¶_ážáž»áž›áž¶_ážœáž·áž…áŸ’áž†áž·áž€áž¶_áž’áŸ’áž“áž¼".split("_"),weekdays:"áž¢áž¶áž‘áž·ážáŸ’áž™_áž…áŸáž“áŸ’áž‘_áž¢áž„áŸ’áž‚áž¶ážš_áž–áž»áž’_áž–áŸ’ážšáž ážŸáŸ’áž”ážáž·áŸ_ážŸáž»áž€áŸ’ážš_ážŸáŸ…ážšáŸ".split("_"),weekdaysShort:"áž¢áž¶áž‘áž·ážáŸ’áž™_áž…áŸáž“áŸ’áž‘_áž¢áž„áŸ’áž‚áž¶ážš_áž–áž»áž’_áž–áŸ’ážšáž ážŸáŸ’áž”ážáž·áŸ_ážŸáž»áž€áŸ’ážš_ážŸáŸ…ážšáŸ".split("_"),weekdaysMin:"áž¢áž¶áž‘áž·ážáŸ’áž™_áž…áŸáž“áŸ’áž‘_áž¢áž„áŸ’áž‚áž¶ážš_áž–áž»áž’_áž–áŸ’ážšáž ážŸáŸ’áž”ážáž·áŸ_ážŸáž»áž€áŸ’ážš_ážŸáŸ…ážšáŸ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[ážáŸ’áž„áŸƒáž“áŸˆ áž˜áŸ‰áŸ„áž„] LT",nextDay:"[ážŸáŸ’áž¢áŸ‚áž€ áž˜áŸ‰áŸ„áž„] LT",nextWeek:"dddd [áž˜áŸ‰áŸ„áž„] LT",lastDay:"[áž˜áŸ’ážŸáž·áž›áž˜áž·áž‰ áž˜áŸ‰áŸ„áž„] LT",lastWeek:"dddd [ážŸáž”áŸ’ážáž¶áž áŸáž˜áž»áž“] [áž˜áŸ‰áŸ„áž„] LT",sameElse:"L"},relativeTime:{future:"%sáž‘áŸ€áž",past:"%sáž˜áž»áž“",s:"áž”áŸ‰áž»áž“áŸ’áž˜áž¶áž“ážœáž·áž“áž¶áž‘áž¸",m:"áž˜áž½áž™áž“áž¶áž‘áž¸",mm:"%d áž“áž¶áž‘áž¸",h:"áž˜áž½áž™áž˜áŸ‰áŸ„áž„",hh:"%d áž˜áŸ‰áŸ„áž„",d:"áž˜áž½áž™ážáŸ’áž„áŸƒ",dd:"%d ážáŸ’áž„áŸƒ",M:"áž˜áž½áž™ážáŸ‚",MM:"%d ážáŸ‚",y:"áž˜áž½áž™áž†áŸ’áž“áž¶áŸ†",yy:"%d áž†áŸ’áž“áž¶áŸ†"},week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("ko",{months:"1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”".split("_"),monthsShort:"1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”".split("_"),weekdays:"ì¼ìš”ì¼_ì›”ìš”ì¼_í™”ìš”ì¼_ìˆ˜ìš”ì¼_ëª©ìš”ì¼_ê¸ˆìš”ì¼_í† ìš”ì¼".split("_"),weekdaysShort:"ì¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† ".split("_"),weekdaysMin:"ì¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† ".split("_"),longDateFormat:{LT:"A hì‹œ më¶„",LTS:"A hì‹œ më¶„ sì´ˆ",L:"YYYY.MM.DD",LL:"YYYYë…„ MMMM Dì¼",LLL:"YYYYë…„ MMMM Dì¼ LT",LLLL:"YYYYë…„ MMMM Dì¼ dddd LT"},meridiem:function(a){return 12>a?"ì˜¤ì „":"ì˜¤í›„"},calendar:{sameDay:"ì˜¤ëŠ˜ LT",nextDay:"ë‚´ì¼ LT",nextWeek:"dddd LT",lastDay:"ì–´ì œ LT",lastWeek:"ì§€ë‚œì£¼ dddd LT",sameElse:"L"},relativeTime:{future:"%s í›„",past:"%s ì „",s:"ëª‡ì´ˆ",ss:"%dì´ˆ",m:"ì¼ë¶„",mm:"%dë¶„",h:"í•œì‹œê°„",hh:"%dì‹œê°„",d:"í•˜ë£¨",dd:"%dì¼",M:"í•œë‹¬",MM:"%dë‹¬",y:"ì¼ë…„",yy:"%dë…„"},ordinalParse:/\d{1,2}ì¼/,ordinal:"%dì¼",meridiemParse:/(ì˜¤ì „|ì˜¤í›„)/,isPM:function(a){return"ì˜¤í›„"===a}})}),function(a){a(tb)}(function(a){function b(a,b,c){var d={m:["eng Minutt","enger Minutt"],h:["eng Stonn","enger Stonn"],d:["een Dag","engem Dag"],M:["ee Mount","engem Mount"],y:["ee Joer","engem Joer"]};return b?d[c][0]:d[c][1]}function c(a){var b=a.substr(0,a.indexOf(" "));return e(b)?"a "+a:"an "+a}function d(a){var b=a.substr(0,a.indexOf(" "));return e(b)?"viru "+a:"virun "+a}function e(a){if(a=parseInt(a,10),isNaN(a))return!1;if(0>a)return!0;if(10>a)return a>=4&&7>=a?!0:!1;if(100>a){var b=a%10,c=a/10;return e(0===b?c:b)}if(1e4>a){for(;a>=10;)a/=10;return e(a)}return a/=1e3,e(a)}return a.defineLocale("lb",{months:"Januar_Februar_MÃ¤erz_AbrÃ«ll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdays:"Sonndeg_MÃ©indeg_DÃ«nschdeg_MÃ«ttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),weekdaysShort:"So._MÃ©._DÃ«._MÃ«._Do._Fr._Sa.".split("_"),weekdaysMin:"So_MÃ©_DÃ«_MÃ«_Do_Fr_Sa".split("_"),longDateFormat:{LT:"H:mm [Auer]",LTS:"H:mm:ss [Auer]",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[Haut um] LT",sameElse:"L",nextDay:"[Muer um] LT",nextWeek:"dddd [um] LT",lastDay:"[GÃ«schter um] LT",lastWeek:function(){switch(this.day()){case 2:case 4:return"[Leschten] dddd [um] LT";default:return"[Leschte] dddd [um] LT"}}},relativeTime:{future:c,past:d,s:"e puer Sekonnen",m:b,mm:"%d Minutten",h:b,hh:"%d Stonnen",d:b,dd:"%d Deeg",M:b,MM:"%d MÃ©int",y:b,yy:"%d Joer"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){function b(a,b,c,d){return b?"kelios sekundÄ—s":d?"keliÅ³ sekundÅ¾iÅ³":"kelias sekundes"}function c(a,b,c,d){return b?e(c)[0]:d?e(c)[1]:e(c)[2]}function d(a){return a%10===0||a>10&&20>a}function e(a){return h[a].split("_")}function f(a,b,f,g){var h=a+" ";return 1===a?h+c(a,b,f[0],g):b?h+(d(a)?e(f)[1]:e(f)[0]):g?h+e(f)[1]:h+(d(a)?e(f)[1]:e(f)[2])}function g(a,b){var c=-1===b.indexOf("dddd HH:mm"),d=i[a.day()];return c?d:d.substring(0,d.length-2)+"Ä¯"}var h={m:"minutÄ—_minutÄ—s_minutÄ™",mm:"minutÄ—s_minuÄiÅ³_minutes",h:"valanda_valandos_valandÄ…",hh:"valandos_valandÅ³_valandas",d:"diena_dienos_dienÄ…",dd:"dienos_dienÅ³_dienas",M:"mÄ—nuo_mÄ—nesio_mÄ—nesÄ¯",MM:"mÄ—nesiai_mÄ—nesiÅ³_mÄ—nesius",y:"metai_metÅ³_metus",yy:"metai_metÅ³_metus"},i="sekmadienis_pirmadienis_antradienis_treÄiadienis_ketvirtadienis_penktadienis_Å¡eÅ¡tadienis".split("_");return a.defineLocale("lt",{months:"sausio_vasario_kovo_balandÅ¾io_geguÅ¾Ä—s_birÅ¾elio_liepos_rugpjÅ«Äio_rugsÄ—jo_spalio_lapkriÄio_gruodÅ¾io".split("_"),monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays:g,weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_Å eÅ¡".split("_"),weekdaysMin:"S_P_A_T_K_Pn_Å ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], LT [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, LT [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], LT [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, LT [val.]"},calendar:{sameDay:"[Å iandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",lastDay:"[Vakar] LT",lastWeek:"[PraÄ—jusÄ¯] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prieÅ¡ %s",s:b,m:c,mm:f,h:c,hh:f,d:c,dd:f,M:c,MM:f,y:c,yy:f},ordinalParse:/\d{1,2}-oji/,ordinal:function(a){return a+"-oji"},week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){function b(a,b,c){var d=a.split("_");return c?b%10===1&&11!==b?d[2]:d[3]:b%10===1&&11!==b?d[0]:d[1]}function c(a,c,e){return a+" "+b(d[e],a,c)}var d={mm:"minÅ«ti_minÅ«tes_minÅ«te_minÅ«tes",hh:"stundu_stundas_stunda_stundas",dd:"dienu_dienas_diena_dienas",MM:"mÄ“nesi_mÄ“neÅ¡us_mÄ“nesis_mÄ“neÅ¡i",yy:"gadu_gadus_gads_gadi"};return a.defineLocale("lv",{months:"janvÄris_februÄris_marts_aprÄ«lis_maijs_jÅ«nijs_jÅ«lijs_augusts_septembris_oktobris_novembris_decembris".split("_"),monthsShort:"jan_feb_mar_apr_mai_jÅ«n_jÅ«l_aug_sep_okt_nov_dec".split("_"),weekdays:"svÄ“tdiena_pirmdiena_otrdiena_treÅ¡diena_ceturtdiena_piektdiena_sestdiena".split("_"),weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"YYYY. [gada] D. MMMM",LLL:"YYYY. [gada] D. MMMM, LT",LLLL:"YYYY. [gada] D. MMMM, dddd, LT"},calendar:{sameDay:"[Å odien pulksten] LT",nextDay:"[RÄ«t pulksten] LT",nextWeek:"dddd [pulksten] LT",lastDay:"[Vakar pulksten] LT",lastWeek:"[PagÄjuÅ¡Ä] dddd [pulksten] LT",sameElse:"L"},relativeTime:{future:"%s vÄ“lÄk",past:"%s agrÄk",s:"daÅ¾as sekundes",m:"minÅ«ti",mm:c,h:"stundu",hh:c,d:"dienu",dd:c,M:"mÄ“nesi",MM:c,y:"gadu",yy:c},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("mk",{months:"Ñ˜Ð°Ð½ÑƒÐ°Ñ€Ð¸_Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½Ð¸_Ñ˜ÑƒÐ»Ð¸_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸_Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸_Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸_Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸".split("_"),monthsShort:"Ñ˜Ð°Ð½_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½_Ñ˜ÑƒÐ»_Ð°Ð²Ð³_ÑÐµÐ¿_Ð¾ÐºÑ‚_Ð½Ð¾Ðµ_Ð´ÐµÐº".split("_"),weekdays:"Ð½ÐµÐ´ÐµÐ»Ð°_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚Ð¾Ðº_Ð¿ÐµÑ‚Ð¾Ðº_ÑÐ°Ð±Ð¾Ñ‚Ð°".split("_"),weekdaysShort:"Ð½ÐµÐ´_Ð¿Ð¾Ð½_Ð²Ñ‚Ð¾_ÑÑ€Ðµ_Ñ‡ÐµÑ‚_Ð¿ÐµÑ‚_ÑÐ°Ð±".split("_"),weekdaysMin:"Ð½e_Ð¿o_Ð²Ñ‚_ÑÑ€_Ñ‡Ðµ_Ð¿Ðµ_Ña".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Ð”ÐµÐ½ÐµÑ Ð²Ð¾] LT",nextDay:"[Ð£Ñ‚Ñ€Ðµ Ð²Ð¾] LT",nextWeek:"dddd [Ð²Ð¾] LT",lastDay:"[Ð’Ñ‡ÐµÑ€Ð° Ð²Ð¾] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[Ð’Ð¾ Ð¸Ð·Ð¼Ð¸Ð½Ð°Ñ‚Ð°Ñ‚Ð°] dddd [Ð²Ð¾] LT";case 1:case 2:case 4:case 5:return"[Ð’Ð¾ Ð¸Ð·Ð¼Ð¸Ð½Ð°Ñ‚Ð¸Ð¾Ñ‚] dddd [Ð²Ð¾] LT"}},sameElse:"L"},relativeTime:{future:"Ð¿Ð¾ÑÐ»Ðµ %s",past:"Ð¿Ñ€ÐµÐ´ %s",s:"Ð½ÐµÐºÐ¾Ð»ÐºÑƒ ÑÐµÐºÑƒÐ½Ð´Ð¸",m:"Ð¼Ð¸Ð½ÑƒÑ‚Ð°",mm:"%d Ð¼Ð¸Ð½ÑƒÑ‚Ð¸",h:"Ñ‡Ð°Ñ",hh:"%d Ñ‡Ð°ÑÐ°",d:"Ð´ÐµÐ½",dd:"%d Ð´ÐµÐ½Ð°",M:"Ð¼ÐµÑÐµÑ†",MM:"%d Ð¼ÐµÑÐµÑ†Ð¸",y:"Ð³Ð¾Ð´Ð¸Ð½Ð°",yy:"%d Ð³Ð¾Ð´Ð¸Ð½Ð¸"},ordinalParse:/\d{1,2}-(ÐµÐ²|ÐµÐ½|Ñ‚Ð¸|Ð²Ð¸|Ñ€Ð¸|Ð¼Ð¸)/,ordinal:function(a){var b=a%10,c=a%100;return 0===a?a+"-ÐµÐ²":0===c?a+"-ÐµÐ½":c>10&&20>c?a+"-Ñ‚Ð¸":1===b?a+"-Ð²Ð¸":2===b?a+"-Ñ€Ð¸":7===b||8===b?a+"-Ð¼Ð¸":a+"-Ñ‚Ð¸"
},week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){return a.defineLocale("ml",{months:"à´œà´¨àµà´µà´°à´¿_à´«àµ†à´¬àµà´°àµà´µà´°à´¿_à´®à´¾àµ¼à´šàµà´šàµ_à´à´ªàµà´°à´¿àµ½_à´®àµ‡à´¯àµ_à´œàµ‚àµº_à´œàµ‚à´²àµˆ_à´“à´—à´¸àµà´±àµà´±àµ_à´¸àµ†à´ªàµà´±àµà´±à´‚à´¬àµ¼_à´’à´•àµà´Ÿàµ‹à´¬àµ¼_à´¨à´µà´‚à´¬àµ¼_à´¡à´¿à´¸à´‚à´¬àµ¼".split("_"),monthsShort:"à´œà´¨àµ._à´«àµ†à´¬àµà´°àµ._à´®à´¾àµ¼._à´à´ªàµà´°à´¿._à´®àµ‡à´¯àµ_à´œàµ‚àµº_à´œàµ‚à´²àµˆ._à´“à´—._à´¸àµ†à´ªàµà´±àµà´±._à´’à´•àµà´Ÿàµ‹._à´¨à´µà´‚._à´¡à´¿à´¸à´‚.".split("_"),weekdays:"à´žà´¾à´¯à´±à´¾à´´àµà´š_à´¤à´¿à´™àµà´•à´³à´¾à´´àµà´š_à´šàµŠà´µàµà´µà´¾à´´àµà´š_à´¬àµà´§à´¨à´¾à´´àµà´š_à´µàµà´¯à´¾à´´à´¾à´´àµà´š_à´µàµ†à´³àµà´³à´¿à´¯à´¾à´´àµà´š_à´¶à´¨à´¿à´¯à´¾à´´àµà´š".split("_"),weekdaysShort:"à´žà´¾à´¯àµ¼_à´¤à´¿à´™àµà´•àµ¾_à´šàµŠà´µàµà´µ_à´¬àµà´§àµ»_à´µàµà´¯à´¾à´´à´‚_à´µàµ†à´³àµà´³à´¿_à´¶à´¨à´¿".split("_"),weekdaysMin:"à´žà´¾_à´¤à´¿_à´šàµŠ_à´¬àµ_à´µàµà´¯à´¾_à´µàµ†_à´¶".split("_"),longDateFormat:{LT:"A h:mm -à´¨àµ",LTS:"A h:mm:ss -à´¨àµ",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[à´‡à´¨àµà´¨àµ] LT",nextDay:"[à´¨à´¾à´³àµ†] LT",nextWeek:"dddd, LT",lastDay:"[à´‡à´¨àµà´¨à´²àµ†] LT",lastWeek:"[à´•à´´à´¿à´žàµà´ž] dddd, LT",sameElse:"L"},relativeTime:{future:"%s à´•à´´à´¿à´žàµà´žàµ",past:"%s à´®àµàµ»à´ªàµ",s:"à´…àµ½à´ª à´¨à´¿à´®à´¿à´·à´™àµà´™àµ¾",m:"à´’à´°àµ à´®à´¿à´¨à´¿à´±àµà´±àµ",mm:"%d à´®à´¿à´¨à´¿à´±àµà´±àµ",h:"à´’à´°àµ à´®à´£à´¿à´•àµà´•àµ‚àµ¼",hh:"%d à´®à´£à´¿à´•àµà´•àµ‚àµ¼",d:"à´’à´°àµ à´¦à´¿à´µà´¸à´‚",dd:"%d à´¦à´¿à´µà´¸à´‚",M:"à´’à´°àµ à´®à´¾à´¸à´‚",MM:"%d à´®à´¾à´¸à´‚",y:"à´’à´°àµ à´µàµ¼à´·à´‚",yy:"%d à´µàµ¼à´·à´‚"},meridiem:function(a){return 4>a?"à´°à´¾à´¤àµà´°à´¿":12>a?"à´°à´¾à´µà´¿à´²àµ†":17>a?"à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ":20>a?"à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚":"à´°à´¾à´¤àµà´°à´¿"}})}),function(a){a(tb)}(function(a){var b={1:"à¥§",2:"à¥¨",3:"à¥©",4:"à¥ª",5:"à¥«",6:"à¥¬",7:"à¥­",8:"à¥®",9:"à¥¯",0:"à¥¦"},c={"à¥§":"1","à¥¨":"2","à¥©":"3","à¥ª":"4","à¥«":"5","à¥¬":"6","à¥­":"7","à¥®":"8","à¥¯":"9","à¥¦":"0"};return a.defineLocale("mr",{months:"à¤œà¤¾à¤¨à¥‡à¤µà¤¾à¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤¾à¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤à¤ªà¥à¤°à¤¿à¤²_à¤®à¥‡_à¤œà¥‚à¤¨_à¤œà¥à¤²à¥ˆ_à¤‘à¤—à¤¸à¥à¤Ÿ_à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚à¤¬à¤°_à¤‘à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤‚à¤¬à¤°".split("_"),monthsShort:"à¤œà¤¾à¤¨à¥‡._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š._à¤à¤ªà¥à¤°à¤¿._à¤®à¥‡._à¤œà¥‚à¤¨._à¤œà¥à¤²à¥ˆ._à¤‘à¤—._à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚._à¤‘à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚._à¤¡à¤¿à¤¸à¥‡à¤‚.".split("_"),weekdays:"à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥‹à¤®à¤µà¤¾à¤°_à¤®à¤‚à¤—à¤³à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤—à¥à¤°à¥‚à¤µà¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°".split("_"),weekdaysShort:"à¤°à¤µà¤¿_à¤¸à¥‹à¤®_à¤®à¤‚à¤—à¤³_à¤¬à¥à¤§_à¤—à¥à¤°à¥‚_à¤¶à¥à¤•à¥à¤°_à¤¶à¤¨à¤¿".split("_"),weekdaysMin:"à¤°_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤—à¥_à¤¶à¥_à¤¶".split("_"),longDateFormat:{LT:"A h:mm à¤µà¤¾à¤œà¤¤à¤¾",LTS:"A h:mm:ss à¤µà¤¾à¤œà¤¤à¤¾",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[à¤†à¤œ] LT",nextDay:"[à¤‰à¤¦à¥à¤¯à¤¾] LT",nextWeek:"dddd, LT",lastDay:"[à¤•à¤¾à¤²] LT",lastWeek:"[à¤®à¤¾à¤—à¥€à¤²] dddd, LT",sameElse:"L"},relativeTime:{future:"%s à¤¨à¤‚à¤¤à¤°",past:"%s à¤ªà¥‚à¤°à¥à¤µà¥€",s:"à¤¸à¥‡à¤•à¤‚à¤¦",m:"à¤à¤• à¤®à¤¿à¤¨à¤¿à¤Ÿ",mm:"%d à¤®à¤¿à¤¨à¤¿à¤Ÿà¥‡",h:"à¤à¤• à¤¤à¤¾à¤¸",hh:"%d à¤¤à¤¾à¤¸",d:"à¤à¤• à¤¦à¤¿à¤µà¤¸",dd:"%d à¤¦à¤¿à¤µà¤¸",M:"à¤à¤• à¤®à¤¹à¤¿à¤¨à¤¾",MM:"%d à¤®à¤¹à¤¿à¤¨à¥‡",y:"à¤à¤• à¤µà¤°à¥à¤·",yy:"%d à¤µà¤°à¥à¤·à¥‡"},preparse:function(a){return a.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g,function(a){return c[a]})},postformat:function(a){return a.replace(/\d/g,function(a){return b[a]})},meridiem:function(a){return 4>a?"à¤°à¤¾à¤¤à¥à¤°à¥€":10>a?"à¤¸à¤•à¤¾à¤³à¥€":17>a?"à¤¦à¥à¤ªà¤¾à¤°à¥€":20>a?"à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€":"à¤°à¤¾à¤¤à¥à¤°à¥€"},week:{dow:0,doy:6}})}),function(a){a(tb)}(function(a){return a.defineLocale("ms-my",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"LT.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] LT",LLLL:"dddd, D MMMM YYYY [pukul] LT"},meridiem:function(a){return 11>a?"pagi":15>a?"tengahari":19>a?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){var b={1:"á",2:"á‚",3:"áƒ",4:"á„",5:"á…",6:"á†",7:"á‡",8:"áˆ",9:"á‰",0:"á€"},c={"á":"1","á‚":"2","áƒ":"3","á„":"4","á…":"5","á†":"6","á‡":"7","áˆ":"8","á‰":"9","á€":"0"};return a.defineLocale("my",{months:"á€‡á€”á€ºá€”á€á€«á€›á€®_á€–á€±á€–á€±á€¬á€ºá€á€«á€›á€®_á€™á€á€º_á€§á€•á€¼á€®_á€™á€±_á€‡á€½á€”á€º_á€‡á€°á€œá€­á€¯á€„á€º_á€žá€¼á€‚á€¯á€á€º_á€…á€€á€ºá€á€„á€ºá€˜á€¬_á€¡á€±á€¬á€€á€ºá€á€­á€¯á€˜á€¬_á€”á€­á€¯á€á€„á€ºá€˜á€¬_á€’á€®á€‡á€„á€ºá€˜á€¬".split("_"),monthsShort:"á€‡á€”á€º_á€–á€±_á€™á€á€º_á€•á€¼á€®_á€™á€±_á€‡á€½á€”á€º_á€œá€­á€¯á€„á€º_á€žá€¼_á€…á€€á€º_á€¡á€±á€¬á€€á€º_á€”á€­á€¯_á€’á€®".split("_"),weekdays:"á€á€”á€„á€ºá€¹á€‚á€”á€½á€±_á€á€”á€„á€ºá€¹á€œá€¬_á€¡á€„á€ºá€¹á€‚á€«_á€—á€¯á€’á€¹á€“á€Ÿá€°á€¸_á€€á€¼á€¬á€žá€•á€á€±á€¸_á€žá€±á€¬á€€á€¼á€¬_á€…á€”á€±".split("_"),weekdaysShort:"á€”á€½á€±_á€œá€¬_á€„á€ºá€¹á€‚á€«_á€Ÿá€°á€¸_á€€á€¼á€¬_á€žá€±á€¬_á€”á€±".split("_"),weekdaysMin:"á€”á€½á€±_á€œá€¬_á€„á€ºá€¹á€‚á€«_á€Ÿá€°á€¸_á€€á€¼á€¬_á€žá€±á€¬_á€”á€±".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[á€šá€”á€±.] LT [á€™á€¾á€¬]",nextDay:"[á€™á€”á€€á€ºá€–á€¼á€”á€º] LT [á€™á€¾á€¬]",nextWeek:"dddd LT [á€™á€¾á€¬]",lastDay:"[á€™á€”á€±.á€€] LT [á€™á€¾á€¬]",lastWeek:"[á€•á€¼á€®á€¸á€á€²á€·á€žá€±á€¬] dddd LT [á€™á€¾á€¬]",sameElse:"L"},relativeTime:{future:"á€œá€¬á€™á€Šá€ºá€· %s á€™á€¾á€¬",past:"á€œá€½á€”á€ºá€á€²á€·á€žá€±á€¬ %s á€€",s:"á€…á€€á€¹á€€á€”á€º.á€¡á€”á€Šá€ºá€¸á€„á€šá€º",m:"á€á€…á€ºá€™á€­á€”á€…á€º",mm:"%d á€™á€­á€”á€…á€º",h:"á€á€…á€ºá€”á€¬á€›á€®",hh:"%d á€”á€¬á€›á€®",d:"á€á€…á€ºá€›á€€á€º",dd:"%d á€›á€€á€º",M:"á€á€…á€ºá€œ",MM:"%d á€œ",y:"á€á€…á€ºá€”á€¾á€…á€º",yy:"%d á€”á€¾á€…á€º"},preparse:function(a){return a.replace(/[áá‚áƒá„á…á†á‡áˆá‰á€]/g,function(a){return c[a]})},postformat:function(a){return a.replace(/\d/g,function(a){return b[a]})},week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("nb",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split("_"),weekdaysShort:"sÃ¸n_man_tirs_ons_tors_fre_lÃ¸r".split("_"),weekdaysMin:"sÃ¸_ma_ti_on_to_fr_lÃ¸".split("_"),longDateFormat:{LT:"H.mm",LTS:"LT.ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] LT",LLLL:"dddd D. MMMM YYYY [kl.] LT"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[i gÃ¥r kl.] LT",lastWeek:"[forrige] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"for %s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en mÃ¥ned",MM:"%d mÃ¥neder",y:"ett Ã¥r",yy:"%d Ã¥r"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){var b={1:"à¥§",2:"à¥¨",3:"à¥©",4:"à¥ª",5:"à¥«",6:"à¥¬",7:"à¥­",8:"à¥®",9:"à¥¯",0:"à¥¦"},c={"à¥§":"1","à¥¨":"2","à¥©":"3","à¥ª":"4","à¥«":"5","à¥¬":"6","à¥­":"7","à¥®":"8","à¥¯":"9","à¥¦":"0"};return a.defineLocale("ne",{months:"à¤œà¤¨à¤µà¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¤¿à¤²_à¤®à¤ˆ_à¤œà¥à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤·à¥à¤Ÿ_à¤¸à¥‡à¤ªà¥à¤Ÿà¥‡à¤®à¥à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤­à¥‡à¤®à¥à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤®à¥à¤¬à¤°".split("_"),monthsShort:"à¤œà¤¨._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¤¿._à¤®à¤ˆ_à¤œà¥à¤¨_à¤œà¥à¤²à¤¾à¤ˆ._à¤…à¤—._à¤¸à¥‡à¤ªà¥à¤Ÿ._à¤…à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤­à¥‡._à¤¡à¤¿à¤¸à¥‡.".split("_"),weekdays:"à¤†à¤‡à¤¤à¤¬à¤¾à¤°_à¤¸à¥‹à¤®à¤¬à¤¾à¤°_à¤®à¤™à¥à¤—à¤²à¤¬à¤¾à¤°_à¤¬à¥à¤§à¤¬à¤¾à¤°_à¤¬à¤¿à¤¹à¤¿à¤¬à¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤¬à¤¾à¤°_à¤¶à¤¨à¤¿à¤¬à¤¾à¤°".split("_"),weekdaysShort:"à¤†à¤‡à¤¤._à¤¸à¥‹à¤®._à¤®à¤™à¥à¤—à¤²._à¤¬à¥à¤§._à¤¬à¤¿à¤¹à¤¿._à¤¶à¥à¤•à¥à¤°._à¤¶à¤¨à¤¿.".split("_"),weekdaysMin:"à¤†à¤‡._à¤¸à¥‹._à¤®à¤™à¥_à¤¬à¥._à¤¬à¤¿._à¤¶à¥._à¤¶.".split("_"),longDateFormat:{LT:"Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡",LTS:"Aà¤•à¥‹ h:mm:ss à¤¬à¤œà¥‡",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},preparse:function(a){return a.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g,function(a){return c[a]})},postformat:function(a){return a.replace(/\d/g,function(a){return b[a]})},meridiem:function(a){return 3>a?"à¤°à¤¾à¤¤à¥€":10>a?"à¤¬à¤¿à¤¹à¤¾à¤¨":15>a?"à¤¦à¤¿à¤‰à¤à¤¸à¥‹":18>a?"à¤¬à¥‡à¤²à¥à¤•à¤¾":20>a?"à¤¸à¤¾à¤à¤":"à¤°à¤¾à¤¤à¥€"},calendar:{sameDay:"[à¤†à¤œ] LT",nextDay:"[à¤­à¥‹à¤²à¥€] LT",nextWeek:"[à¤†à¤‰à¤à¤¦à¥‹] dddd[,] LT",lastDay:"[à¤¹à¤¿à¤œà¥‹] LT",lastWeek:"[à¤—à¤à¤•à¥‹] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%sà¤®à¤¾",past:"%s à¤…à¤—à¤¾à¤¡à¥€",s:"à¤•à¥‡à¤¹à¥€ à¤¸à¤®à¤¯",m:"à¤à¤• à¤®à¤¿à¤¨à¥‡à¤Ÿ",mm:"%d à¤®à¤¿à¤¨à¥‡à¤Ÿ",h:"à¤à¤• à¤˜à¤£à¥à¤Ÿà¤¾",hh:"%d à¤˜à¤£à¥à¤Ÿà¤¾",d:"à¤à¤• à¤¦à¤¿à¤¨",dd:"%d à¤¦à¤¿à¤¨",M:"à¤à¤• à¤®à¤¹à¤¿à¤¨à¤¾",MM:"%d à¤®à¤¹à¤¿à¤¨à¤¾",y:"à¤à¤• à¤¬à¤°à¥à¤·",yy:"%d à¤¬à¤°à¥à¤·"},week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){var b="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),c="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");return a.defineLocale("nl",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(a,d){return/-MMM-/.test(d)?c[a.month()]:b[a.month()]},weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"Ã©Ã©n minuut",mm:"%d minuten",h:"Ã©Ã©n uur",hh:"%d uur",d:"Ã©Ã©n dag",dd:"%d dagen",M:"Ã©Ã©n maand",MM:"%d maanden",y:"Ã©Ã©n jaar",yy:"%d jaar"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(a){return a+(1===a||8===a||a>=20?"ste":"de")},week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("nn",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sundag_mÃ¥ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),weekdaysShort:"sun_mÃ¥n_tys_ons_tor_fre_lau".split("_"),weekdaysMin:"su_mÃ¥_ty_on_to_fr_lÃ¸".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[I dag klokka] LT",nextDay:"[I morgon klokka] LT",nextWeek:"dddd [klokka] LT",lastDay:"[I gÃ¥r klokka] LT",lastWeek:"[FÃ¸regÃ¥ande] dddd [klokka] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"for %s sidan",s:"nokre sekund",m:"eit minutt",mm:"%d minutt",h:"ein time",hh:"%d timar",d:"ein dag",dd:"%d dagar",M:"ein mÃ¥nad",MM:"%d mÃ¥nader",y:"eit Ã¥r",yy:"%d Ã¥r"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){function b(a){return 5>a%10&&a%10>1&&~~(a/10)%10!==1}function c(a,c,d){var e=a+" ";switch(d){case"m":return c?"minuta":"minutÄ™";case"mm":return e+(b(a)?"minuty":"minut");case"h":return c?"godzina":"godzinÄ™";case"hh":return e+(b(a)?"godziny":"godzin");case"MM":return e+(b(a)?"miesiÄ…ce":"miesiÄ™cy");case"yy":return e+(b(a)?"lata":"lat")}}var d="styczeÅ„_luty_marzec_kwiecieÅ„_maj_czerwiec_lipiec_sierpieÅ„_wrzesieÅ„_paÅºdziernik_listopad_grudzieÅ„".split("_"),e="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrzeÅ›nia_paÅºdziernika_listopada_grudnia".split("_");return a.defineLocale("pl",{months:function(a,b){return/D MMMM/.test(b)?e[a.month()]:d[a.month()]},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paÅº_lis_gru".split("_"),weekdays:"niedziela_poniedziaÅ‚ek_wtorek_Å›roda_czwartek_piÄ…tek_sobota".split("_"),weekdaysShort:"nie_pon_wt_Å›r_czw_pt_sb".split("_"),weekdaysMin:"N_Pn_Wt_Åšr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[DziÅ› o] LT",nextDay:"[Jutro o] LT",nextWeek:"[W] dddd [o] LT",lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszÅ‚Ä… niedzielÄ™ o] LT";case 3:return"[W zeszÅ‚Ä… Å›rodÄ™ o] LT";case 6:return"[W zeszÅ‚Ä… sobotÄ™ o] LT";default:return"[W zeszÅ‚y] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:c,mm:c,h:c,hh:c,d:"1 dzieÅ„",dd:"%d dni",M:"miesiÄ…c",MM:c,y:"rok",yy:c},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("pt-br",{months:"janeiro_fevereiro_marÃ§o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"domingo_segunda-feira_terÃ§a-feira_quarta-feira_quinta-feira_sexta-feira_sÃ¡bado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_sÃ¡b".split("_"),weekdaysMin:"dom_2Âª_3Âª_4Âª_5Âª_6Âª_sÃ¡b".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [Ã s] LT",LLLL:"dddd, D [de] MMMM [de] YYYY [Ã s] LT"},calendar:{sameDay:"[Hoje Ã s] LT",nextDay:"[AmanhÃ£ Ã s] LT",nextWeek:"dddd [Ã s] LT",lastDay:"[Ontem Ã s] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Ãšltimo] dddd [Ã s] LT":"[Ãšltima] dddd [Ã s] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"%s atrÃ¡s",s:"segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mÃªs",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinalParse:/\d{1,2}Âº/,ordinal:"%dÂº"})}),function(a){a(tb)}(function(a){return a.defineLocale("pt",{months:"janeiro_fevereiro_marÃ§o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"domingo_segunda-feira_terÃ§a-feira_quarta-feira_quinta-feira_sexta-feira_sÃ¡bado".split("_"),weekdaysShort:"dom_seg_ter_qua_qui_sex_sÃ¡b".split("_"),weekdaysMin:"dom_2Âª_3Âª_4Âª_5Âª_6Âª_sÃ¡b".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY LT",LLLL:"dddd, D [de] MMMM [de] YYYY LT"},calendar:{sameDay:"[Hoje Ã s] LT",nextDay:"[AmanhÃ£ Ã s] LT",nextWeek:"dddd [Ã s] LT",lastDay:"[Ontem Ã s] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Ãšltimo] dddd [Ã s] LT":"[Ãšltima] dddd [Ã s] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"hÃ¡ %s",s:"segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mÃªs",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinalParse:/\d{1,2}Âº/,ordinal:"%dÂº",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){function b(a,b,c){var d={mm:"minute",hh:"ore",dd:"zile",MM:"luni",yy:"ani"},e=" ";return(a%100>=20||a>=100&&a%100===0)&&(e=" de "),a+e+d[c]}return a.defineLocale("ro",{months:"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),monthsShort:"ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),weekdays:"duminicÄƒ_luni_marÈ›i_miercuri_joi_vineri_sÃ¢mbÄƒtÄƒ".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_SÃ¢m".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_SÃ¢".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[azi la] LT",nextDay:"[mÃ¢ine la] LT",nextWeek:"dddd [la] LT",lastDay:"[ieri la] LT",lastWeek:"[fosta] dddd [la] LT",sameElse:"L"},relativeTime:{future:"peste %s",past:"%s Ã®n urmÄƒ",s:"cÃ¢teva secunde",m:"un minut",mm:b,h:"o orÄƒ",hh:b,d:"o zi",dd:b,M:"o lunÄƒ",MM:b,y:"un an",yy:b},week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){function b(a,b){var c=a.split("_");return b%10===1&&b%100!==11?c[0]:b%10>=2&&4>=b%10&&(10>b%100||b%100>=20)?c[1]:c[2]}function c(a,c,d){var e={mm:c?"Ð¼Ð¸Ð½ÑƒÑ‚Ð°_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚":"Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚",hh:"Ñ‡Ð°Ñ_Ñ‡Ð°ÑÐ°_Ñ‡Ð°ÑÐ¾Ð²",dd:"Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ_Ð´Ð½ÐµÐ¹",MM:"Ð¼ÐµÑÑÑ†_Ð¼ÐµÑÑÑ†Ð°_Ð¼ÐµÑÑÑ†ÐµÐ²",yy:"Ð³Ð¾Ð´_Ð³Ð¾Ð´Ð°_Ð»ÐµÑ‚"};return"m"===d?c?"Ð¼Ð¸Ð½ÑƒÑ‚Ð°":"Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ":a+" "+b(e[d],+a)}function d(a,b){var c={nominative:"ÑÐ½Ð²Ð°Ñ€ÑŒ_Ñ„ÐµÐ²Ñ€Ð°Ð»ÑŒ_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»ÑŒ_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ_Ð¾ÐºÑ‚ÑÐ±Ñ€ÑŒ_Ð½Ð¾ÑÐ±Ñ€ÑŒ_Ð´ÐµÐºÐ°Ð±Ñ€ÑŒ".split("_"),accusative:"ÑÐ½Ð²Ð°Ñ€Ñ_Ñ„ÐµÐ²Ñ€Ð°Ð»Ñ_Ð¼Ð°Ñ€Ñ‚Ð°_Ð°Ð¿Ñ€ÐµÐ»Ñ_Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³ÑƒÑÑ‚Ð°_ÑÐµÐ½Ñ‚ÑÐ±Ñ€Ñ_Ð¾ÐºÑ‚ÑÐ±Ñ€Ñ_Ð½Ð¾ÑÐ±Ñ€Ñ_Ð´ÐµÐºÐ°Ð±Ñ€Ñ".split("_")},d=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b)?"accusative":"nominative";return c[d][a.month()]}function e(a,b){var c={nominative:"ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"),accusative:"ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_")},d=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b)?"accusative":"nominative";return c[d][a.month()]}function f(a,b){var c={nominative:"Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ð°_ÑÑƒÐ±Ð±Ð¾Ñ‚Ð°".split("_"),accusative:"Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ñƒ_ÑÑƒÐ±Ð±Ð¾Ñ‚Ñƒ".split("_")},d=/\[ ?[Ð’Ð²] ?(?:Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ|ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ|ÑÑ‚Ñƒ)? ?\] ?dddd/.test(b)?"accusative":"nominative";return c[d][a.day()]}return a.defineLocale("ru",{months:d,monthsShort:e,weekdays:f,weekdaysShort:"Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),weekdaysMin:"Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),monthsParse:[/^ÑÐ½Ð²/i,/^Ñ„ÐµÐ²/i,/^Ð¼Ð°Ñ€/i,/^Ð°Ð¿Ñ€/i,/^Ð¼Ð°[Ð¹|Ñ]/i,/^Ð¸ÑŽÐ½/i,/^Ð¸ÑŽÐ»/i,/^Ð°Ð²Ð³/i,/^ÑÐµÐ½/i,/^Ð¾ÐºÑ‚/i,/^Ð½Ð¾Ñ/i,/^Ð´ÐµÐº/i],longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY Ð³.",LLL:"D MMMM YYYY Ð³., LT",LLLL:"dddd, D MMMM YYYY Ð³., LT"},calendar:{sameDay:"[Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ Ð²] LT",nextDay:"[Ð—Ð°Ð²Ñ‚Ñ€Ð° Ð²] LT",lastDay:"[Ð’Ñ‡ÐµÑ€Ð° Ð²] LT",nextWeek:function(){return 2===this.day()?"[Ð’Ð¾] dddd [Ð²] LT":"[Ð’] dddd [Ð²] LT"},lastWeek:function(a){if(a.week()===this.week())return 2===this.day()?"[Ð’Ð¾] dddd [Ð²] LT":"[Ð’] dddd [Ð²] LT";switch(this.day()){case 0:return"[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ðµ] dddd [Ð²] LT";case 1:case 2:case 4:return"[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ñ‹Ð¹] dddd [Ð²] LT";case 3:case 5:case 6:return"[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ] dddd [Ð²] LT"}},sameElse:"L"},relativeTime:{future:"Ñ‡ÐµÑ€ÐµÐ· %s",past:"%s Ð½Ð°Ð·Ð°Ð´",s:"Ð½ÐµÑÐºÐ¾Ð»ÑŒÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´",m:c,mm:c,h:"Ñ‡Ð°Ñ",hh:c,d:"Ð´ÐµÐ½ÑŒ",dd:c,M:"Ð¼ÐµÑÑÑ†",MM:c,y:"Ð³Ð¾Ð´",yy:c},meridiemParse:/Ð½Ð¾Ñ‡Ð¸|ÑƒÑ‚Ñ€Ð°|Ð´Ð½Ñ|Ð²ÐµÑ‡ÐµÑ€Ð°/i,isPM:function(a){return/^(Ð´Ð½Ñ|Ð²ÐµÑ‡ÐµÑ€Ð°)$/.test(a)},meridiem:function(a){return 4>a?"Ð½Ð¾Ñ‡Ð¸":12>a?"ÑƒÑ‚Ñ€Ð°":17>a?"Ð´Ð½Ñ":"Ð²ÐµÑ‡ÐµÑ€Ð°"},ordinalParse:/\d{1,2}-(Ð¹|Ð³Ð¾|Ñ)/,ordinal:function(a,b){switch(b){case"M":case"d":case"DDD":return a+"-Ð¹";case"D":return a+"-Ð³Ð¾";case"w":case"W":return a+"-Ñ";default:return a}},week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){function b(a){return a>1&&5>a}function c(a,c,d,e){var f=a+" ";switch(d){case"s":return c||e?"pÃ¡r sekÃºnd":"pÃ¡r sekundami";case"m":return c?"minÃºta":e?"minÃºtu":"minÃºtou";case"mm":return c||e?f+(b(a)?"minÃºty":"minÃºt"):f+"minÃºtami";break;case"h":return c?"hodina":e?"hodinu":"hodinou";case"hh":return c||e?f+(b(a)?"hodiny":"hodÃ­n"):f+"hodinami";break;case"d":return c||e?"deÅˆ":"dÅˆom";case"dd":return c||e?f+(b(a)?"dni":"dnÃ­"):f+"dÅˆami";break;case"M":return c||e?"mesiac":"mesiacom";case"MM":return c||e?f+(b(a)?"mesiace":"mesiacov"):f+"mesiacmi";break;case"y":return c||e?"rok":"rokom";case"yy":return c||e?f+(b(a)?"roky":"rokov"):f+"rokmi"}}var d="januÃ¡r_februÃ¡r_marec_aprÃ­l_mÃ¡j_jÃºn_jÃºl_august_september_oktÃ³ber_november_december".split("_"),e="jan_feb_mar_apr_mÃ¡j_jÃºn_jÃºl_aug_sep_okt_nov_dec".split("_");return a.defineLocale("sk",{months:d,monthsShort:e,monthsParse:function(a,b){var c,d=[];for(c=0;12>c;c++)d[c]=new RegExp("^"+a[c]+"$|^"+b[c]+"$","i");return d}(d,e),weekdays:"nedeÄ¾a_pondelok_utorok_streda_Å¡tvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_Å¡t_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_Å¡t_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd D. MMMM YYYY LT"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nedeÄ¾u o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo Å¡tvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[vÄera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulÃº nedeÄ¾u o] LT";case 1:case 2:return"[minulÃ½] dddd [o] LT";case 3:return"[minulÃº stredu o] LT";case 4:case 5:return"[minulÃ½] dddd [o] LT";case 6:return"[minulÃº sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:c,m:c,mm:c,h:c,hh:c,d:c,dd:c,M:c,MM:c,y:c,yy:c},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){function b(a,b,c){var d=a+" ";switch(c){case"m":return b?"ena minuta":"eno minuto";case"mm":return d+=1===a?"minuta":2===a?"minuti":3===a||4===a?"minute":"minut";case"h":return b?"ena ura":"eno uro";case"hh":return d+=1===a?"ura":2===a?"uri":3===a||4===a?"ure":"ur";case"dd":return d+=1===a?"dan":"dni";case"MM":return d+=1===a?"mesec":2===a?"meseca":3===a||4===a?"mesece":"mesecev";case"yy":return d+=1===a?"leto":2===a?"leti":3===a||4===a?"leta":"let"}}return a.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),weekdays:"nedelja_ponedeljek_torek_sreda_Äetrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._Äet._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_Äe_pe_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT";case 3:return"[v] [sredo] [ob] LT";case 6:return"[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"}},lastDay:"[vÄeraj ob] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[prejÅ¡nja] dddd [ob] LT";case 1:case 2:case 4:case 5:return"[prejÅ¡nji] dddd [ob] LT"}},sameElse:"L"},relativeTime:{future:"Äez %s",past:"%s nazaj",s:"nekaj sekund",m:b,mm:b,h:b,hh:b,d:"en dan",dd:b,M:"en mesec",MM:b,y:"eno leto",yy:b},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){return a.defineLocale("sq",{months:"Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_NÃ«ntor_Dhjetor".split("_"),monthsShort:"Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_NÃ«n_Dhj".split("_"),weekdays:"E Diel_E HÃ«nÃ«_E MartÃ«_E MÃ«rkurÃ«_E Enjte_E Premte_E ShtunÃ«".split("_"),weekdaysShort:"Die_HÃ«n_Mar_MÃ«r_Enj_Pre_Sht".split("_"),weekdaysMin:"D_H_Ma_MÃ«_E_P_Sh".split("_"),meridiem:function(a){return 12>a?"PD":"MD"},longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[Sot nÃ«] LT",nextDay:"[NesÃ«r nÃ«] LT",nextWeek:"dddd [nÃ«] LT",lastDay:"[Dje nÃ«] LT",lastWeek:"dddd [e kaluar nÃ«] LT",sameElse:"L"},relativeTime:{future:"nÃ« %s",past:"%s mÃ« parÃ«",s:"disa sekonda",m:"njÃ« minutÃ«",mm:"%d minuta",h:"njÃ« orÃ«",hh:"%d orÃ«",d:"njÃ« ditÃ«",dd:"%d ditÃ«",M:"njÃ« muaj",MM:"%d muaj",y:"njÃ« vit",yy:"%d vite"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){var b={words:{m:["Ñ˜ÐµÐ´Ð°Ð½ Ð¼Ð¸Ð½ÑƒÑ‚","Ñ˜ÐµÐ´Ð½Ðµ Ð¼Ð¸Ð½ÑƒÑ‚Ðµ"],mm:["Ð¼Ð¸Ð½ÑƒÑ‚","Ð¼Ð¸Ð½ÑƒÑ‚Ðµ","Ð¼Ð¸Ð½ÑƒÑ‚Ð°"],h:["Ñ˜ÐµÐ´Ð°Ð½ ÑÐ°Ñ‚","Ñ˜ÐµÐ´Ð½Ð¾Ð³ ÑÐ°Ñ‚Ð°"],hh:["ÑÐ°Ñ‚","ÑÐ°Ñ‚Ð°","ÑÐ°Ñ‚Ð¸"],dd:["Ð´Ð°Ð½","Ð´Ð°Ð½Ð°","Ð´Ð°Ð½Ð°"],MM:["Ð¼ÐµÑÐµÑ†","Ð¼ÐµÑÐµÑ†Ð°","Ð¼ÐµÑÐµÑ†Ð¸"],yy:["Ð³Ð¾Ð´Ð¸Ð½Ð°","Ð³Ð¾Ð´Ð¸Ð½Ðµ","Ð³Ð¾Ð´Ð¸Ð½Ð°"]},correctGrammaticalCase:function(a,b){return 1===a?b[0]:a>=2&&4>=a?b[1]:b[2]},translate:function(a,c,d){var e=b.words[d];return 1===d.length?c?e[0]:e[1]:a+" "+b.correctGrammaticalCase(a,e)}};return a.defineLocale("sr-cyrl",{months:["Ñ˜Ð°Ð½ÑƒÐ°Ñ€","Ñ„ÐµÐ±Ñ€ÑƒÐ°Ñ€","Ð¼Ð°Ñ€Ñ‚","Ð°Ð¿Ñ€Ð¸Ð»","Ð¼Ð°Ñ˜","Ñ˜ÑƒÐ½","Ñ˜ÑƒÐ»","Ð°Ð²Ð³ÑƒÑÑ‚","ÑÐµÐ¿Ñ‚ÐµÐ¼Ð±Ð°Ñ€","Ð¾ÐºÑ‚Ð¾Ð±Ð°Ñ€","Ð½Ð¾Ð²ÐµÐ¼Ð±Ð°Ñ€","Ð´ÐµÑ†ÐµÐ¼Ð±Ð°Ñ€"],monthsShort:["Ñ˜Ð°Ð½.","Ñ„ÐµÐ±.","Ð¼Ð°Ñ€.","Ð°Ð¿Ñ€.","Ð¼Ð°Ñ˜","Ñ˜ÑƒÐ½","Ñ˜ÑƒÐ»","Ð°Ð²Ð³.","ÑÐµÐ¿.","Ð¾ÐºÑ‚.","Ð½Ð¾Ð².","Ð´ÐµÑ†."],weekdays:["Ð½ÐµÐ´ÐµÑ™Ð°","Ð¿Ð¾Ð½ÐµÐ´ÐµÑ™Ð°Ðº","ÑƒÑ‚Ð¾Ñ€Ð°Ðº","ÑÑ€ÐµÐ´Ð°","Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚Ð°Ðº","Ð¿ÐµÑ‚Ð°Ðº","ÑÑƒÐ±Ð¾Ñ‚Ð°"],weekdaysShort:["Ð½ÐµÐ´.","Ð¿Ð¾Ð½.","ÑƒÑ‚Ð¾.","ÑÑ€Ðµ.","Ñ‡ÐµÑ‚.","Ð¿ÐµÑ‚.","ÑÑƒÐ±."],weekdaysMin:["Ð½Ðµ","Ð¿Ð¾","ÑƒÑ‚","ÑÑ€","Ñ‡Ðµ","Ð¿Ðµ","ÑÑƒ"],longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[Ð´Ð°Ð½Ð°Ñ Ñƒ] LT",nextDay:"[ÑÑƒÑ‚Ñ€Ð° Ñƒ] LT",nextWeek:function(){switch(this.day()){case 0:return"[Ñƒ] [Ð½ÐµÐ´ÐµÑ™Ñƒ] [Ñƒ] LT";case 3:return"[Ñƒ] [ÑÑ€ÐµÐ´Ñƒ] [Ñƒ] LT";case 6:return"[Ñƒ] [ÑÑƒÐ±Ð¾Ñ‚Ñƒ] [Ñƒ] LT";case 1:case 2:case 4:case 5:return"[Ñƒ] dddd [Ñƒ] LT"}},lastDay:"[Ñ˜ÑƒÑ‡Ðµ Ñƒ] LT",lastWeek:function(){var a=["[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [Ð½ÐµÐ´ÐµÑ™Ðµ] [Ñƒ] LT","[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ð¿Ð¾Ð½ÐµÐ´ÐµÑ™ÐºÐ°] [Ñƒ] LT","[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [ÑƒÑ‚Ð¾Ñ€ÐºÐ°] [Ñƒ] LT","[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [ÑÑ€ÐµÐ´Ðµ] [Ñƒ] LT","[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚ÐºÐ°] [Ñƒ] LT","[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ð¿ÐµÑ‚ÐºÐ°] [Ñƒ] LT","[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [ÑÑƒÐ±Ð¾Ñ‚Ðµ] [Ñƒ] LT"];return a[this.day()]},sameElse:"L"},relativeTime:{future:"Ð·Ð° %s",past:"Ð¿Ñ€Ðµ %s",s:"Ð½ÐµÐºÐ¾Ð»Ð¸ÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´Ð¸",m:b.translate,mm:b.translate,h:b.translate,hh:b.translate,d:"Ð´Ð°Ð½",dd:b.translate,M:"Ð¼ÐµÑÐµÑ†",MM:b.translate,y:"Ð³Ð¾Ð´Ð¸Ð½Ñƒ",yy:b.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){var b={words:{m:["jedan minut","jedne minute"],mm:["minut","minute","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mesec","meseca","meseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(a,b){return 1===a?b[0]:a>=2&&4>=a?b[1]:b[2]},translate:function(a,c,d){var e=b.words[d];return 1===d.length?c?e[0]:e[1]:a+" "+b.correctGrammaticalCase(a,e)}};return a.defineLocale("sr",{months:["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"],monthsShort:["jan.","feb.","mar.","apr.","maj","jun","jul","avg.","sep.","okt.","nov.","dec."],weekdays:["nedelja","ponedeljak","utorak","sreda","Äetvrtak","petak","subota"],weekdaysShort:["ned.","pon.","uto.","sre.","Äet.","pet.","sub."],weekdaysMin:["ne","po","ut","sr","Äe","pe","su"],longDateFormat:{LT:"H:mm",LTS:"LT:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY LT",LLLL:"dddd, D. MMMM YYYY LT"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedelju] [u] LT";case 3:return"[u] [sredu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[juÄe u] LT",lastWeek:function(){var a=["[proÅ¡le] [nedelje] [u] LT","[proÅ¡log] [ponedeljka] [u] LT","[proÅ¡log] [utorka] [u] LT","[proÅ¡le] [srede] [u] LT","[proÅ¡log] [Äetvrtka] [u] LT","[proÅ¡log] [petka] [u] LT","[proÅ¡le] [subote] [u] LT"];return a[this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",m:b.translate,mm:b.translate,h:b.translate,hh:b.translate,d:"dan",dd:b.translate,M:"mesec",MM:b.translate,y:"godinu",yy:b.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){return a.defineLocale("sv",{months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"sÃ¶ndag_mÃ¥ndag_tisdag_onsdag_torsdag_fredag_lÃ¶rdag".split("_"),weekdaysShort:"sÃ¶n_mÃ¥n_tis_ons_tor_fre_lÃ¶r".split("_"),weekdaysMin:"sÃ¶_mÃ¥_ti_on_to_fr_lÃ¶".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[Idag] LT",nextDay:"[Imorgon] LT",lastDay:"[IgÃ¥r] LT",nextWeek:"dddd LT",lastWeek:"[FÃ¶rra] dddd[en] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"fÃ¶r %s sedan",s:"nÃ¥gra sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en mÃ¥nad",MM:"%d mÃ¥nader",y:"ett Ã¥r",yy:"%d Ã¥r"},ordinalParse:/\d{1,2}(e|a)/,ordinal:function(a){var b=a%10,c=1===~~(a%100/10)?"e":1===b?"a":2===b?"a":3===b?"e":"e";return a+c},week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("ta",{months:"à®œà®©à®µà®°à®¿_à®ªà®¿à®ªà¯à®°à®µà®°à®¿_à®®à®¾à®°à¯à®šà¯_à®à®ªà¯à®°à®²à¯_à®®à¯‡_à®œà¯‚à®©à¯_à®œà¯‚à®²à¯ˆ_à®†à®•à®¸à¯à®Ÿà¯_à®šà¯†à®ªà¯à®Ÿà¯†à®®à¯à®ªà®°à¯_à®…à®•à¯à®Ÿà¯‡à®¾à®ªà®°à¯_à®¨à®µà®®à¯à®ªà®°à¯_à®Ÿà®¿à®šà®®à¯à®ªà®°à¯".split("_"),monthsShort:"à®œà®©à®µà®°à®¿_à®ªà®¿à®ªà¯à®°à®µà®°à®¿_à®®à®¾à®°à¯à®šà¯_à®à®ªà¯à®°à®²à¯_à®®à¯‡_à®œà¯‚à®©à¯_à®œà¯‚à®²à¯ˆ_à®†à®•à®¸à¯à®Ÿà¯_à®šà¯†à®ªà¯à®Ÿà¯†à®®à¯à®ªà®°à¯_à®…à®•à¯à®Ÿà¯‡à®¾à®ªà®°à¯_à®¨à®µà®®à¯à®ªà®°à¯_à®Ÿà®¿à®šà®®à¯à®ªà®°à¯".split("_"),weekdays:"à®žà®¾à®¯à®¿à®±à¯à®±à¯à®•à¯à®•à®¿à®´à®®à¯ˆ_à®¤à®¿à®™à¯à®•à®Ÿà¯à®•à®¿à®´à®®à¯ˆ_à®šà¯†à®µà¯à®µà®¾à®¯à¯à®•à®¿à®´à®®à¯ˆ_à®ªà¯à®¤à®©à¯à®•à®¿à®´à®®à¯ˆ_à®µà®¿à®¯à®¾à®´à®•à¯à®•à®¿à®´à®®à¯ˆ_à®µà¯†à®³à¯à®³à®¿à®•à¯à®•à®¿à®´à®®à¯ˆ_à®šà®©à®¿à®•à¯à®•à®¿à®´à®®à¯ˆ".split("_"),weekdaysShort:"à®žà®¾à®¯à®¿à®±à¯_à®¤à®¿à®™à¯à®•à®³à¯_à®šà¯†à®µà¯à®µà®¾à®¯à¯_à®ªà¯à®¤à®©à¯_à®µà®¿à®¯à®¾à®´à®©à¯_à®µà¯†à®³à¯à®³à®¿_à®šà®©à®¿".split("_"),weekdaysMin:"à®žà®¾_à®¤à®¿_à®šà¯†_à®ªà¯_à®µà®¿_à®µà¯†_à®š".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, LT",LLLL:"dddd, D MMMM YYYY, LT"},calendar:{sameDay:"[à®‡à®©à¯à®±à¯] LT",nextDay:"[à®¨à®¾à®³à¯ˆ] LT",nextWeek:"dddd, LT",lastDay:"[à®¨à¯‡à®±à¯à®±à¯] LT",lastWeek:"[à®•à®Ÿà®¨à¯à®¤ à®µà®¾à®°à®®à¯] dddd, LT",sameElse:"L"},relativeTime:{future:"%s à®‡à®²à¯",past:"%s à®®à¯à®©à¯",s:"à®’à®°à¯ à®šà®¿à®² à®µà®¿à®¨à®¾à®Ÿà®¿à®•à®³à¯",m:"à®’à®°à¯ à®¨à®¿à®®à®¿à®Ÿà®®à¯",mm:"%d à®¨à®¿à®®à®¿à®Ÿà®™à¯à®•à®³à¯",h:"à®’à®°à¯ à®®à®£à®¿ à®¨à¯‡à®°à®®à¯",hh:"%d à®®à®£à®¿ à®¨à¯‡à®°à®®à¯",d:"à®’à®°à¯ à®¨à®¾à®³à¯",dd:"%d à®¨à®¾à®Ÿà¯à®•à®³à¯",M:"à®’à®°à¯ à®®à®¾à®¤à®®à¯",MM:"%d à®®à®¾à®¤à®™à¯à®•à®³à¯",y:"à®’à®°à¯ à®µà®°à¯à®Ÿà®®à¯",yy:"%d à®†à®£à¯à®Ÿà¯à®•à®³à¯"},ordinalParse:/\d{1,2}à®µà®¤à¯/,ordinal:function(a){return a+"à®µà®¤à¯"},meridiem:function(a){return a>=6&&10>=a?" à®•à®¾à®²à¯ˆ":a>=10&&14>=a?" à®¨à®£à¯à®ªà®•à®²à¯":a>=14&&18>=a?" à®Žà®±à¯à®ªà®¾à®Ÿà¯":a>=18&&20>=a?" à®®à®¾à®²à¯ˆ":a>=20&&24>=a?" à®‡à®°à®µà¯":a>=0&&6>=a?" à®µà¯ˆà®•à®±à¯ˆ":void 0},week:{dow:0,doy:6}})}),function(a){a(tb)}(function(a){return a.defineLocale("th",{months:"à¸¡à¸à¸£à¸²à¸„à¸¡_à¸à¸¸à¸¡à¸ à¸²à¸žà¸±à¸™à¸˜à¹Œ_à¸¡à¸µà¸™à¸²à¸„à¸¡_à¹€à¸¡à¸©à¸²à¸¢à¸™_à¸žà¸¤à¸©à¸ à¸²à¸„à¸¡_à¸¡à¸´à¸–à¸¸à¸™à¸²à¸¢à¸™_à¸à¸£à¸à¸Žà¸²à¸„à¸¡_à¸ªà¸´à¸‡à¸«à¸²à¸„à¸¡_à¸à¸±à¸™à¸¢à¸²à¸¢à¸™_à¸•à¸¸à¸¥à¸²à¸„à¸¡_à¸žà¸¤à¸¨à¸ˆà¸´à¸à¸²à¸¢à¸™_à¸˜à¸±à¸™à¸§à¸²à¸„à¸¡".split("_"),monthsShort:"à¸¡à¸à¸£à¸²_à¸à¸¸à¸¡à¸ à¸²_à¸¡à¸µà¸™à¸²_à¹€à¸¡à¸©à¸²_à¸žà¸¤à¸©à¸ à¸²_à¸¡à¸´à¸–à¸¸à¸™à¸²_à¸à¸£à¸à¸Žà¸²_à¸ªà¸´à¸‡à¸«à¸²_à¸à¸±à¸™à¸¢à¸²_à¸•à¸¸à¸¥à¸²_à¸žà¸¤à¸¨à¸ˆà¸´à¸à¸²_à¸˜à¸±à¸™à¸§à¸²".split("_"),weekdays:"à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ_à¸ˆà¸±à¸™à¸—à¸£à¹Œ_à¸­à¸±à¸‡à¸„à¸²à¸£_à¸žà¸¸à¸˜_à¸žà¸¤à¸«à¸±à¸ªà¸šà¸”à¸µ_à¸¨à¸¸à¸à¸£à¹Œ_à¹€à¸ªà¸²à¸£à¹Œ".split("_"),weekdaysShort:"à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ_à¸ˆà¸±à¸™à¸—à¸£à¹Œ_à¸­à¸±à¸‡à¸„à¸²à¸£_à¸žà¸¸à¸˜_à¸žà¸¤à¸«à¸±à¸ª_à¸¨à¸¸à¸à¸£à¹Œ_à¹€à¸ªà¸²à¸£à¹Œ".split("_"),weekdaysMin:"à¸­à¸²._à¸ˆ._à¸­._à¸ž._à¸žà¸¤._à¸¨._à¸ª.".split("_"),longDateFormat:{LT:"H à¸™à¸²à¸¬à¸´à¸à¸² m à¸™à¸²à¸—à¸µ",LTS:"LT s à¸§à¸´à¸™à¸²à¸—à¸µ",L:"YYYY/MM/DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY à¹€à¸§à¸¥à¸² LT",LLLL:"à¸§à¸±à¸™ddddà¸—à¸µà¹ˆ D MMMM YYYY à¹€à¸§à¸¥à¸² LT"},meridiem:function(a){return 12>a?"à¸à¹ˆà¸­à¸™à¹€à¸—à¸µà¹ˆà¸¢à¸‡":"à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡"},calendar:{sameDay:"[à¸§à¸±à¸™à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",nextDay:"[à¸žà¸£à¸¸à¹ˆà¸‡à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",nextWeek:"dddd[à¸«à¸™à¹‰à¸² à¹€à¸§à¸¥à¸²] LT",lastDay:"[à¹€à¸¡à¸·à¹ˆà¸­à¸§à¸²à¸™à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",lastWeek:"[à¸§à¸±à¸™]dddd[à¸—à¸µà¹ˆà¹à¸¥à¹‰à¸§ à¹€à¸§à¸¥à¸²] LT",sameElse:"L"},relativeTime:{future:"à¸­à¸µà¸ %s",past:"%sà¸—à¸µà¹ˆà¹à¸¥à¹‰à¸§",s:"à¹„à¸¡à¹ˆà¸à¸µà¹ˆà¸§à¸´à¸™à¸²à¸—à¸µ",m:"1 à¸™à¸²à¸—à¸µ",mm:"%d à¸™à¸²à¸—à¸µ",h:"1 à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡",hh:"%d à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡",d:"1 à¸§à¸±à¸™",dd:"%d à¸§à¸±à¸™",M:"1 à¹€à¸”à¸·à¸­à¸™",MM:"%d à¹€à¸”à¸·à¸­à¸™",y:"1 à¸›à¸µ",yy:"%d à¸›à¸µ"}})}),function(a){a(tb)}(function(a){return a.defineLocale("tl-ph",{months:"Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),monthsShort:"Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),weekdays:"Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),weekdaysShort:"Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),weekdaysMin:"Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"MM/D/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM DD, YYYY LT"},calendar:{sameDay:"[Ngayon sa] LT",nextDay:"[Bukas sa] LT",nextWeek:"dddd [sa] LT",lastDay:"[Kahapon sa] LT",lastWeek:"dddd [huling linggo] LT",sameElse:"L"},relativeTime:{future:"sa loob ng %s",past:"%s ang nakalipas",s:"ilang segundo",m:"isang minuto",mm:"%d minuto",h:"isang oras",hh:"%d oras",d:"isang araw",dd:"%d araw",M:"isang buwan",MM:"%d buwan",y:"isang taon",yy:"%d taon"},ordinalParse:/\d{1,2}/,ordinal:function(a){return a},week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){var b={1:"'inci",5:"'inci",8:"'inci",70:"'inci",80:"'inci",2:"'nci",7:"'nci",20:"'nci",50:"'nci",3:"'Ã¼ncÃ¼",4:"'Ã¼ncÃ¼",100:"'Ã¼ncÃ¼",6:"'ncÄ±",9:"'uncu",10:"'uncu",30:"'uncu",60:"'Ä±ncÄ±",90:"'Ä±ncÄ±"};return a.defineLocale("tr",{months:"Ocak_Åžubat_Mart_Nisan_MayÄ±s_Haziran_Temmuz_AÄŸustos_EylÃ¼l_Ekim_KasÄ±m_AralÄ±k".split("_"),monthsShort:"Oca_Åžub_Mar_Nis_May_Haz_Tem_AÄŸu_Eyl_Eki_Kas_Ara".split("_"),weekdays:"Pazar_Pazartesi_SalÄ±_Ã‡arÅŸamba_PerÅŸembe_Cuma_Cumartesi".split("_"),weekdaysShort:"Paz_Pts_Sal_Ã‡ar_Per_Cum_Cts".split("_"),weekdaysMin:"Pz_Pt_Sa_Ã‡a_Pe_Cu_Ct".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd, D MMMM YYYY LT"},calendar:{sameDay:"[bugÃ¼n saat] LT",nextDay:"[yarÄ±n saat] LT",nextWeek:"[haftaya] dddd [saat] LT",lastDay:"[dÃ¼n] LT",lastWeek:"[geÃ§en hafta] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s Ã¶nce",s:"birkaÃ§ saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir gÃ¼n",dd:"%d gÃ¼n",M:"bir ay",MM:"%d ay",y:"bir yÄ±l",yy:"%d yÄ±l"},ordinalParse:/\d{1,2}'(inci|nci|Ã¼ncÃ¼|ncÄ±|uncu|Ä±ncÄ±)/,ordinal:function(a){if(0===a)return a+"'Ä±ncÄ±";var c=a%10,d=a%100-c,e=a>=100?100:null;return a+(b[c]||b[d]||b[e])},week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){return a.defineLocale("tzm-latn",{months:"innayr_brË¤ayrË¤_marË¤sË¤_ibrir_mayyw_ywnyw_ywlywz_É£wÅ¡t_Å¡wtanbir_ktË¤wbrË¤_nwwanbir_dwjnbir".split("_"),monthsShort:"innayr_brË¤ayrË¤_marË¤sË¤_ibrir_mayyw_ywnyw_ywlywz_É£wÅ¡t_Å¡wtanbir_ktË¤wbrË¤_nwwanbir_dwjnbir".split("_"),weekdays:"asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),weekdaysShort:"asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),weekdaysMin:"asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[asdkh g] LT",nextDay:"[aska g] LT",nextWeek:"dddd [g] LT",lastDay:"[assant g] LT",lastWeek:"dddd [g] LT",sameElse:"L"},relativeTime:{future:"dadkh s yan %s",past:"yan %s",s:"imik",m:"minuá¸",mm:"%d minuá¸",h:"saÉ›a",hh:"%d tassaÉ›in",d:"ass",dd:"%d ossan",M:"ayowr",MM:"%d iyyirn",y:"asgas",yy:"%d isgasn"},week:{dow:6,doy:12}})}),function(a){a(tb)}(function(a){return a.defineLocale("tzm",{months:"âµ‰âµâµâ´°âµ¢âµ”_â´±âµ•â´°âµ¢âµ•_âµŽâ´°âµ•âµš_âµ‰â´±âµ”âµ‰âµ”_âµŽâ´°âµ¢âµ¢âµ“_âµ¢âµ“âµâµ¢âµ“_âµ¢âµ“âµâµ¢âµ“âµ£_âµ–âµ“âµ›âµœ_âµ›âµ“âµœâ´°âµâ´±âµ‰âµ”_â´½âµŸâµ“â´±âµ•_âµâµ“âµ¡â´°âµâ´±âµ‰âµ”_â´·âµ“âµŠâµâ´±âµ‰âµ”".split("_"),monthsShort:"âµ‰âµâµâ´°âµ¢âµ”_â´±âµ•â´°âµ¢âµ•_âµŽâ´°âµ•âµš_âµ‰â´±âµ”âµ‰âµ”_âµŽâ´°âµ¢âµ¢âµ“_âµ¢âµ“âµâµ¢âµ“_âµ¢âµ“âµâµ¢âµ“âµ£_âµ–âµ“âµ›âµœ_âµ›âµ“âµœâ´°âµâ´±âµ‰âµ”_â´½âµŸâµ“â´±âµ•_âµâµ“âµ¡â´°âµâ´±âµ‰âµ”_â´·âµ“âµŠâµâ´±âµ‰âµ”".split("_"),weekdays:"â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"),weekdaysShort:"â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"),weekdaysMin:"â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:"[â´°âµ™â´·âµ… â´´] LT",nextDay:"[â´°âµ™â´½â´° â´´] LT",nextWeek:"dddd [â´´] LT",lastDay:"[â´°âµšâ´°âµâµœ â´´] LT",lastWeek:"dddd [â´´] LT",sameElse:"L"},relativeTime:{future:"â´·â´°â´·âµ… âµ™ âµ¢â´°âµ %s",past:"âµ¢â´°âµ %s",s:"âµ‰âµŽâµ‰â´½",m:"âµŽâµ‰âµâµ“â´º",mm:"%d âµŽâµ‰âµâµ“â´º",h:"âµ™â´°âµ„â´°",hh:"%d âµœâ´°âµ™âµ™â´°âµ„âµ‰âµ",d:"â´°âµ™âµ™",dd:"%d oâµ™âµ™â´°âµ",M:"â´°âµ¢oâµ“âµ”",MM:"%d âµ‰âµ¢âµ¢âµ‰âµ”âµ",y:"â´°âµ™â´³â´°âµ™",yy:"%d âµ‰âµ™â´³â´°âµ™âµ"},week:{dow:6,doy:12}})
}),function(a){a(tb)}(function(a){function b(a,b){var c=a.split("_");return b%10===1&&b%100!==11?c[0]:b%10>=2&&4>=b%10&&(10>b%100||b%100>=20)?c[1]:c[2]}function c(a,c,d){var e={mm:"Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð°_Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð¸_Ñ…Ð²Ð¸Ð»Ð¸Ð½",hh:"Ð³Ð¾Ð´Ð¸Ð½Ð°_Ð³Ð¾Ð´Ð¸Ð½Ð¸_Ð³Ð¾Ð´Ð¸Ð½",dd:"Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ–_Ð´Ð½Ñ–Ð²",MM:"Ð¼Ñ–ÑÑÑ†ÑŒ_Ð¼Ñ–ÑÑÑ†Ñ–_Ð¼Ñ–ÑÑÑ†Ñ–Ð²",yy:"Ñ€Ñ–Ðº_Ñ€Ð¾ÐºÐ¸_Ñ€Ð¾ÐºÑ–Ð²"};return"m"===d?c?"Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð°":"Ñ…Ð²Ð¸Ð»Ð¸Ð½Ñƒ":"h"===d?c?"Ð³Ð¾Ð´Ð¸Ð½Ð°":"Ð³Ð¾Ð´Ð¸Ð½Ñƒ":a+" "+b(e[d],+a)}function d(a,b){var c={nominative:"ÑÑ–Ñ‡ÐµÐ½ÑŒ_Ð»ÑŽÑ‚Ð¸Ð¹_Ð±ÐµÑ€ÐµÐ·ÐµÐ½ÑŒ_ÐºÐ²Ñ–Ñ‚ÐµÐ½ÑŒ_Ñ‚Ñ€Ð°Ð²ÐµÐ½ÑŒ_Ñ‡ÐµÑ€Ð²ÐµÐ½ÑŒ_Ð»Ð¸Ð¿ÐµÐ½ÑŒ_ÑÐµÑ€Ð¿ÐµÐ½ÑŒ_Ð²ÐµÑ€ÐµÑÐµÐ½ÑŒ_Ð¶Ð¾Ð²Ñ‚ÐµÐ½ÑŒ_Ð»Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´_Ð³Ñ€ÑƒÐ´ÐµÐ½ÑŒ".split("_"),accusative:"ÑÑ–Ñ‡Ð½Ñ_Ð»ÑŽÑ‚Ð¾Ð³Ð¾_Ð±ÐµÑ€ÐµÐ·Ð½Ñ_ÐºÐ²Ñ–Ñ‚Ð½Ñ_Ñ‚Ñ€Ð°Ð²Ð½Ñ_Ñ‡ÐµÑ€Ð²Ð½Ñ_Ð»Ð¸Ð¿Ð½Ñ_ÑÐµÑ€Ð¿Ð½Ñ_Ð²ÐµÑ€ÐµÑÐ½Ñ_Ð¶Ð¾Ð²Ñ‚Ð½Ñ_Ð»Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´Ð°_Ð³Ñ€ÑƒÐ´Ð½Ñ".split("_")},d=/D[oD]? *MMMM?/.test(b)?"accusative":"nominative";return c[d][a.month()]}function e(a,b){var c={nominative:"Ð½ÐµÐ´Ñ–Ð»Ñ_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº_ÑÐµÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"),accusative:"Ð½ÐµÐ´Ñ–Ð»ÑŽ_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº_ÑÐµÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†ÑŽ_ÑÑƒÐ±Ð¾Ñ‚Ñƒ".split("_"),genitive:"Ð½ÐµÐ´Ñ–Ð»Ñ–_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»ÐºÐ°_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€ÐºÐ°_ÑÐµÑ€ÐµÐ´Ð¸_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³Ð°_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ–_ÑÑƒÐ±Ð¾Ñ‚Ð¸".split("_")},d=/(\[[Ð’Ð²Ð£Ñƒ]\]) ?dddd/.test(b)?"accusative":/\[?(?:Ð¼Ð¸Ð½ÑƒÐ»Ð¾Ñ—|Ð½Ð°ÑÑ‚ÑƒÐ¿Ð½Ð¾Ñ—)? ?\] ?dddd/.test(b)?"genitive":"nominative";return c[d][a.day()]}function f(a){return function(){return a+"Ð¾"+(11===this.hours()?"Ð±":"")+"] LT"}}return a.defineLocale("uk",{months:d,monthsShort:"ÑÑ–Ñ‡_Ð»ÑŽÑ‚_Ð±ÐµÑ€_ÐºÐ²Ñ–Ñ‚_Ñ‚Ñ€Ð°Ð²_Ñ‡ÐµÑ€Ð²_Ð»Ð¸Ð¿_ÑÐµÑ€Ð¿_Ð²ÐµÑ€_Ð¶Ð¾Ð²Ñ‚_Ð»Ð¸ÑÑ‚_Ð³Ñ€ÑƒÐ´".split("_"),weekdays:e,weekdaysShort:"Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),weekdaysMin:"Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY Ñ€.",LLL:"D MMMM YYYY Ñ€., LT",LLLL:"dddd, D MMMM YYYY Ñ€., LT"},calendar:{sameDay:f("[Ð¡ÑŒÐ¾Ð³Ð¾Ð´Ð½Ñ– "),nextDay:f("[Ð—Ð°Ð²Ñ‚Ñ€Ð° "),lastDay:f("[Ð’Ñ‡Ð¾Ñ€Ð° "),nextWeek:f("[Ð£] dddd ["),lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return f("[ÐœÐ¸Ð½ÑƒÐ»Ð¾Ñ—] dddd [").call(this);case 1:case 2:case 4:return f("[ÐœÐ¸Ð½ÑƒÐ»Ð¾Ð³Ð¾] dddd [").call(this)}},sameElse:"L"},relativeTime:{future:"Ð·Ð° %s",past:"%s Ñ‚Ð¾Ð¼Ñƒ",s:"Ð´ÐµÐºÑ–Ð»ÑŒÐºÐ° ÑÐµÐºÑƒÐ½Ð´",m:c,mm:c,h:"Ð³Ð¾Ð´Ð¸Ð½Ñƒ",hh:c,d:"Ð´ÐµÐ½ÑŒ",dd:c,M:"Ð¼Ñ–ÑÑÑ†ÑŒ",MM:c,y:"Ñ€Ñ–Ðº",yy:c},meridiem:function(a){return 4>a?"Ð½Ð¾Ñ‡Ñ–":12>a?"Ñ€Ð°Ð½ÐºÑƒ":17>a?"Ð´Ð½Ñ":"Ð²ÐµÑ‡Ð¾Ñ€Ð°"},ordinalParse:/\d{1,2}-(Ð¹|Ð³Ð¾)/,ordinal:function(a,b){switch(b){case"M":case"d":case"DDD":case"w":case"W":return a+"-Ð¹";case"D":return a+"-Ð³Ð¾";default:return a}},week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){return a.defineLocale("uz",{months:"ÑÐ½Ð²Ð°Ñ€ÑŒ_Ñ„ÐµÐ²Ñ€Ð°Ð»ÑŒ_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»ÑŒ_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ_Ð¾ÐºÑ‚ÑÐ±Ñ€ÑŒ_Ð½Ð¾ÑÐ±Ñ€ÑŒ_Ð´ÐµÐºÐ°Ð±Ñ€ÑŒ".split("_"),monthsShort:"ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"),weekdays:"Ð¯ÐºÑˆÐ°Ð½Ð±Ð°_Ð”ÑƒÑˆÐ°Ð½Ð±Ð°_Ð¡ÐµÑˆÐ°Ð½Ð±Ð°_Ð§Ð¾Ñ€ÑˆÐ°Ð½Ð±Ð°_ÐŸÐ°Ð¹ÑˆÐ°Ð½Ð±Ð°_Ð–ÑƒÐ¼Ð°_Ð¨Ð°Ð½Ð±Ð°".split("_"),weekdaysShort:"Ð¯ÐºÑˆ_Ð”ÑƒÑˆ_Ð¡ÐµÑˆ_Ð§Ð¾Ñ€_ÐŸÐ°Ð¹_Ð–ÑƒÐ¼_Ð¨Ð°Ð½".split("_"),weekdaysMin:"Ð¯Ðº_Ð”Ñƒ_Ð¡Ðµ_Ð§Ð¾_ÐŸÐ°_Ð–Ñƒ_Ð¨Ð°".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"D MMMM YYYY, dddd LT"},calendar:{sameDay:"[Ð‘ÑƒÐ³ÑƒÐ½ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",nextDay:"[Ð­Ñ€Ñ‚Ð°Ð³Ð°] LT [Ð´Ð°]",nextWeek:"dddd [ÐºÑƒÐ½Ð¸ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",lastDay:"[ÐšÐµÑ‡Ð° ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",lastWeek:"[Ð£Ñ‚Ð³Ð°Ð½] dddd [ÐºÑƒÐ½Ð¸ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",sameElse:"L"},relativeTime:{future:"Ð¯ÐºÐ¸Ð½ %s Ð¸Ñ‡Ð¸Ð´Ð°",past:"Ð‘Ð¸Ñ€ Ð½ÐµÑ‡Ð° %s Ð¾Ð»Ð´Ð¸Ð½",s:"Ñ„ÑƒÑ€ÑÐ°Ñ‚",m:"Ð±Ð¸Ñ€ Ð´Ð°ÐºÐ¸ÐºÐ°",mm:"%d Ð´Ð°ÐºÐ¸ÐºÐ°",h:"Ð±Ð¸Ñ€ ÑÐ¾Ð°Ñ‚",hh:"%d ÑÐ¾Ð°Ñ‚",d:"Ð±Ð¸Ñ€ ÐºÑƒÐ½",dd:"%d ÐºÑƒÐ½",M:"Ð±Ð¸Ñ€ Ð¾Ð¹",MM:"%d Ð¾Ð¹",y:"Ð±Ð¸Ñ€ Ð¹Ð¸Ð»",yy:"%d Ð¹Ð¸Ð»"},week:{dow:1,doy:7}})}),function(a){a(tb)}(function(a){return a.defineLocale("vi",{months:"thÃ¡ng 1_thÃ¡ng 2_thÃ¡ng 3_thÃ¡ng 4_thÃ¡ng 5_thÃ¡ng 6_thÃ¡ng 7_thÃ¡ng 8_thÃ¡ng 9_thÃ¡ng 10_thÃ¡ng 11_thÃ¡ng 12".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),weekdays:"chá»§ nháº­t_thá»© hai_thá»© ba_thá»© tÆ°_thá»© nÄƒm_thá»© sÃ¡u_thá»© báº£y".split("_"),weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),longDateFormat:{LT:"HH:mm",LTS:"LT:ss",L:"DD/MM/YYYY",LL:"D MMMM [nÄƒm] YYYY",LLL:"D MMMM [nÄƒm] YYYY LT",LLLL:"dddd, D MMMM [nÄƒm] YYYY LT",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY LT",llll:"ddd, D MMM YYYY LT"},calendar:{sameDay:"[HÃ´m nay lÃºc] LT",nextDay:"[NgÃ y mai lÃºc] LT",nextWeek:"dddd [tuáº§n tá»›i lÃºc] LT",lastDay:"[HÃ´m qua lÃºc] LT",lastWeek:"dddd [tuáº§n rá»“i lÃºc] LT",sameElse:"L"},relativeTime:{future:"%s tá»›i",past:"%s trÆ°á»›c",s:"vÃ i giÃ¢y",m:"má»™t phÃºt",mm:"%d phÃºt",h:"má»™t giá»",hh:"%d giá»",d:"má»™t ngÃ y",dd:"%d ngÃ y",M:"má»™t thÃ¡ng",MM:"%d thÃ¡ng",y:"má»™t nÄƒm",yy:"%d nÄƒm"},ordinalParse:/\d{1,2}/,ordinal:function(a){return a},week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("zh-cn",{months:"ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),monthsShort:"1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),weekdays:"æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),weekdaysShort:"å‘¨æ—¥_å‘¨ä¸€_å‘¨äºŒ_å‘¨ä¸‰_å‘¨å››_å‘¨äº”_å‘¨å…­".split("_"),weekdaysMin:"æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),longDateFormat:{LT:"Ahç‚¹mm",LTS:"Ahç‚¹måˆ†sç§’",L:"YYYY-MM-DD",LL:"YYYYå¹´MMMDæ—¥",LLL:"YYYYå¹´MMMDæ—¥LT",LLLL:"YYYYå¹´MMMDæ—¥ddddLT",l:"YYYY-MM-DD",ll:"YYYYå¹´MMMDæ—¥",lll:"YYYYå¹´MMMDæ—¥LT",llll:"YYYYå¹´MMMDæ—¥ddddLT"},meridiem:function(a,b){var c=100*a+b;return 600>c?"å‡Œæ™¨":900>c?"æ—©ä¸Š":1130>c?"ä¸Šåˆ":1230>c?"ä¸­åˆ":1800>c?"ä¸‹åˆ":"æ™šä¸Š"},calendar:{sameDay:function(){return 0===this.minutes()?"[ä»Šå¤©]Ah[ç‚¹æ•´]":"[ä»Šå¤©]LT"},nextDay:function(){return 0===this.minutes()?"[æ˜Žå¤©]Ah[ç‚¹æ•´]":"[æ˜Žå¤©]LT"},lastDay:function(){return 0===this.minutes()?"[æ˜¨å¤©]Ah[ç‚¹æ•´]":"[æ˜¨å¤©]LT"},nextWeek:function(){var b,c;return b=a().startOf("week"),c=this.unix()-b.unix()>=604800?"[ä¸‹]":"[æœ¬]",0===this.minutes()?c+"dddAhç‚¹æ•´":c+"dddAhç‚¹mm"},lastWeek:function(){var b,c;return b=a().startOf("week"),c=this.unix()<b.unix()?"[ä¸Š]":"[æœ¬]",0===this.minutes()?c+"dddAhç‚¹æ•´":c+"dddAhç‚¹mm"},sameElse:"LL"},ordinalParse:/\d{1,2}(æ—¥|æœˆ|å‘¨)/,ordinal:function(a,b){switch(b){case"d":case"D":case"DDD":return a+"æ—¥";case"M":return a+"æœˆ";case"w":case"W":return a+"å‘¨";default:return a}},relativeTime:{future:"%så†…",past:"%så‰",s:"å‡ ç§’",m:"1åˆ†é’Ÿ",mm:"%dåˆ†é’Ÿ",h:"1å°æ—¶",hh:"%då°æ—¶",d:"1å¤©",dd:"%då¤©",M:"1ä¸ªæœˆ",MM:"%dä¸ªæœˆ",y:"1å¹´",yy:"%då¹´"},week:{dow:1,doy:4}})}),function(a){a(tb)}(function(a){return a.defineLocale("zh-tw",{months:"ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),monthsShort:"1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),weekdays:"æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),weekdaysShort:"é€±æ—¥_é€±ä¸€_é€±äºŒ_é€±ä¸‰_é€±å››_é€±äº”_é€±å…­".split("_"),weekdaysMin:"æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),longDateFormat:{LT:"Ahé»žmm",LTS:"Ahé»žmåˆ†sç§’",L:"YYYYå¹´MMMDæ—¥",LL:"YYYYå¹´MMMDæ—¥",LLL:"YYYYå¹´MMMDæ—¥LT",LLLL:"YYYYå¹´MMMDæ—¥ddddLT",l:"YYYYå¹´MMMDæ—¥",ll:"YYYYå¹´MMMDæ—¥",lll:"YYYYå¹´MMMDæ—¥LT",llll:"YYYYå¹´MMMDæ—¥ddddLT"},meridiem:function(a,b){var c=100*a+b;return 900>c?"æ—©ä¸Š":1130>c?"ä¸Šåˆ":1230>c?"ä¸­åˆ":1800>c?"ä¸‹åˆ":"æ™šä¸Š"},calendar:{sameDay:"[ä»Šå¤©]LT",nextDay:"[æ˜Žå¤©]LT",nextWeek:"[ä¸‹]ddddLT",lastDay:"[æ˜¨å¤©]LT",lastWeek:"[ä¸Š]ddddLT",sameElse:"L"},ordinalParse:/\d{1,2}(æ—¥|æœˆ|é€±)/,ordinal:function(a,b){switch(b){case"d":case"D":case"DDD":return a+"æ—¥";case"M":return a+"æœˆ";case"w":case"W":return a+"é€±";default:return a}},relativeTime:{future:"%så…§",past:"%så‰",s:"å¹¾ç§’",m:"ä¸€åˆ†é˜",mm:"%dåˆ†é˜",h:"ä¸€å°æ™‚",hh:"%då°æ™‚",d:"ä¸€å¤©",dd:"%då¤©",M:"ä¸€å€‹æœˆ",MM:"%då€‹æœˆ",y:"ä¸€å¹´",yy:"%då¹´"}})}),tb.locale("en"),Jb?module.exports=tb:"function"==typeof define&&define.amd?(define("moment",function(a,b,c){return c.config&&c.config()&&c.config().noGlobal===!0&&(xb.moment=ub),tb}),sb(!0)):sb()}).call(this);

+function () {
  'use strict';

  if ( typeof Modernizr == 'undefined' ) throw new Error( 'Modernizr is required!' )

  Modernizr.load( {
    text: Modernizr.touch,
    yep : '/js/lightningtouch.js'
  } )

} ();

+function ($) {
  'use strict';

  $(document).ready(function () {
    /*
     * iframes with content like google maps will take control of mouse scrolling
     * and cause unwanted interaction when scrolling through a page.
     * There is an invisible div over the visit our campus map to stop this behavior.
     * This script will disable the overlay div and allow map interaction after a click.
     */
    $('.iframe-overlay').on( 'click', function () {
      $(this).css( 'pointerEvents', 'none' )
    } )
  })

} (jQuery);

+function () {
  'use strict';

  if ( typeof smoothScroll == 'undefined' ) throw new Error( 'SmoothScroll is required!' )

  smoothScroll.init()

} ();

/*
 * Throttle the window resize event for performance and smoothness.
 */
+function ($) {
  'use strict';

  // SMARTRESIZE PUBLIC CLASS DEFINITION
  // ===================================

  var Smartresize = function (element, options) {
    this.element = element
    this.options = options
    this._bounce = []
  }

  Smartresize.VERSION = '0.0.2'

  Smartresize.prototype = {}

  Smartresize.prototype.constructor = Smartresize

  /**
   * Debounce function
   * @author John Hann
   * @source http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
   */
  Smartresize.prototype.debounce = function ( func, threshold, execAsap ) {
    var timeout
    var outer = function () {
      var obj = this
      var args = arguments

      function delayed () {
        if ( ! execAsap ) {
          func.apply ( obj, args )
        }

        timeout = null
      }

      if ( timeout )
        clearTimeout( timeout )
      else if ( execAsap )
        func.apply( obj, args )

      timeout = setTimeout( delayed, threshold || 500 )
    }

    this._bounce.push({
      bounce : outer,
      callback : func
    })

    return outer
  }

  /**
   * Unbinds specific handlers or if handler is null or undefined, will
   * unbind ALL handlers
   *
   * @param  {function} handler the callback
   * @return {$}         returns the element for chainability
   */
  Smartresize.prototype.unbind = function (handler) {
    for (var i = 0; i < this._bounce.length; i++ ) {
      if (handler == null || handler == this._bounce[i].callback) {
        $(this.element).unbind( 'resize', this._bounce[i].bounce )
      }
    }
    return $(this.element)
  }

  // SMARTRESIZE POPOVER PLUGIN DEFINITION
  // ==================================

  function Plugin(option, handler) {
    var $this    = $(this)
    var data     = $this.data('bs.smartresize')
    var options  = typeof option == 'object' && option
    var selector = options && options.selector

    if (! data && option == 'destroy')
        return
    if (selector) {
      if (! data)
        $this.data('bs.smartresize', (data = {}))
      if (! data[selector])
        data[selector] = new Smartresize(this, options)
    } else {
      if (! data)
        $this.data('bs.smartresize', (data = new Smartresize(this, options)))
    }

    if (typeof option == 'string')
      data[option](handler)
    else {
      return option ? this.bind( 'resize', data.debounce( option ) ) : this.trigger( 'smartresize' )
    }
  }

  var old = $.fn.smartresize

  $.fn.smartresize             = Plugin
  $.fn.smartresize.Constructor = Smartresize

  // SMARTRESIZE POPOVER NO CONFLICT
  // ============================

  $.fn.smartresize.noConflict = function () {
    $.fn.smartresize = old
    return this
  }

} (jQuery)

/* global moment */

/*
 * Calendar Documentation
 *
 * Allows you to add calendar popups and downloads
 * to elements.  Calendar dropdowns will get
 * automatically added to `.calendarPopover` elements
 * on page ready.
 *
 * If you do not override the content option, the plugin
 * will automatically generate a data-uri for your calendar
 * markup as an ICS file.  The examples demonstrate the
 * proper markup for a calendar icon.
 *
 * Definition:
 *
 * $( selector ).calendarPopover( [options] )
 *
 * Options:
 *
 * ```js
 * {
 *   "animation": Boolean [true],
 *   "html": Boolean [true],
 *   "placement": ("bottom", "top", "left", "right") ["bottom"],
 *   "trigger": String ["click"],
 *   "content": Function [Add To Calendar Function]
 * }
 * ```
 *
 * Example:
 *
 * Calendar invite for the School of Sustainability at 1:00pm on
 * December 1st of 2016.
 *
 * ```html
 * <div class="calendar-date calendarPopover"
 *     data-timezone="Z"
 *     data-description="Example"
 *     data-mailto="user-email@asu.edu"
 *     data-date-end="2016-12-01 2:00 pm"
 *     data-location="School of Sustainability"
 *     data-summary="Just an Example" title="">
 * <time datetime="2016-12-01 1:00 pm">
 * <span class="weekday">Thr</span>
 * <span class="date">1</span>
 * <span class="month">Dec</span>
 * </time>
 * </div>
 * ```
 */

+function ($) {
  'use strict';

  if ( typeof moment == 'undefined' ) throw new Error( 'Moment is required!' )

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var CalendarPopover = function (element, options) {
    this.options = $.extend({}, CalendarPopover.DEFAULTS, options)
    this.init('calendarPopover', element, this.options)
  }

  if (! $.fn.popover) throw new Error('Calendar Popover requires popover')

  CalendarPopover.VERSION = '0.0.1'

  CalendarPopover.DEFAULTS = $.extend({}, $.fn.popover.Constructor.DEFAULTS, {
    animation: true,
    html: true,
    placement: 'bottom',
    trigger: 'click',
    content: function () {
      var $this = $( this )
      var $time = $this.find( 'time' )

      // Grab the datetime from the content
      var dateStart   = $time.attr('datetime') || ''
      var timeZone    = $time.attr('data-timezone') || 'Z'
      var dateEnd     = $this.attr('data-date-end') || ''
      var eventName   = $this.attr('title') || ''
      var filename    = $this.attr('data-filename') || 'invite.ics'
      var subject     = $this.attr('data-subject') || ''
      var description = $this.attr('data-description') || ''
      var location    = $this.attr('data-location') || ''
      var mailto      = $this.attr('data-mailto') || 'me@email.com'

      // TODO test
      var ics = CalendarPopover.ICS( {
        timeZone : timeZone,
        message : description,
        mailto : mailto,
        dateStart : dateStart,
        dateEnd : dateEnd,
        location : location,
        summary : eventName + ( subject === '' ? '' : ' : ' + subject )
      } )

      return '<a download="' + filename + '" href="' + 'data:text/plain;charset=utf-8,' + encodeURIComponent(ics) + '">Add this event to your calendar<\/a>';
    }
  })

  CalendarPopover.ICS = function ( data ) {
    var outputFormat = 'YYYYMMDD\\THHmmss'
    var inputFormat = 'YYYY-MM-DD HH:mm a'

    // dateEnd first so that we can add 1 hour to dateStart
    // if necessary
    if ( typeof data.dateEnd == 'string' ) {
      if ( data.dateEnd === '' ) {
        data.dateEnd = moment( data.dateStart, inputFormat ).add( 1, 'hour' ).format( outputFormat )
      } else {
        data.dateEnd = moment( data.dateEnd, inputFormat ).format( outputFormat )
      }
    }

    if ( typeof data.dateStart == 'string' ) {
      data.dateStart = moment( data.dateStart, inputFormat ).format( outputFormat )
    }

    var icsMessage = 'BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//'
    icsMessage += 'ASU'
    icsMessage += '//NONSGML v1.0//EN\nBEGIN:VEVENT\nUID:'
    icsMessage += CalendarPopover.UID()
    icsMessage += '\nDTSTAMP:'
    icsMessage += Date.now() + data.timeZone
    icsMessage += '\nATTENDEE;CN='
    icsMessage += data.message + ' '
    icsMessage += ';RSVP=TRUE:MAILTO:'
    icsMessage += data.mailto
    icsMessage += '\nORGANIZER;CN=Me:MAILTO::'
    icsMessage += data.mailto
    icsMessage += '\nDTSTART:'
    icsMessage += data.dateStart
    icsMessage += '\nDTEND:'
    icsMessage += data.dateEnd
    icsMessage += '\nLOCATION:'
    icsMessage += data.location
    icsMessage += '\nSUMMARY:'
    icsMessage += data.summary
    icsMessage += '\nEND:VEVENT\nEND:VCALENDAR';

    return icsMessage
  }

  CalendarPopover.UID = function () {
    // Quick, short uid
    return ('0000' + (Math.random() * Math.pow(36,4) << 0).toString(36)).slice(-4)
  }

  // NOTE: POPOVER EXTENDS popover.js
  // ================================

  CalendarPopover.prototype = $.extend({}, $.fn.popover.Constructor.prototype)

  CalendarPopover.prototype.constructor = CalendarPopover

  CalendarPopover.prototype.getDefault = function () {
    return CalendarPopover.DEFAULTS
  }

  // CALENDAR POPOVER PLUGIN DEFINITION
  // ==================================

  function Plugin(option) {
    return this.each(function () {
      var $this    = $(this)
      var data     = $this.data('bs.calendarPopover')
      var options  = typeof option == 'object' && option

      if (! data && option == 'destroy')
        return
      else {
        if (! option)
          option = CalendarPopover.prototype.getDefault()

        if (! data)
          $this.data('bs.calendarPopover', (data = new CalendarPopover(this, options)))
      }

      if (typeof option == 'string')
        data[option]()
    })
  }

  var old = $.fn.calendarPopover

  $.fn.calendarPopover             = Plugin
  $.fn.calendarPopover.Constructor = CalendarPopover

  // CALENDAR POPOVER NO CONFLICT
  // ============================

  $.fn.calendarPopover.noConflict = function () {
    $.fn.calendarPopover = old
    return this
  }

  /*
   * Run on page load (bootstrap it)
   */
  $(document).ready( function () {
    $('.calendarPopover').calendarPopover()
  } )
} (jQuery);

+function ($) {
  'use strict';

  $(document).ready(function () {
    var navbarHeight = $('.navbar-ws').outerHeight() + 20 /* padding */;

    var affixed = $('#sidebarNav').each(function () {
      var $this = $(this);

      $this.affix( {
        offset: {
          top : $this.offset().top - navbarHeight,
          bottom : function () {
            var fix = parseInt($this.css('margin-bottom'), 10)
            fix += parseInt($this.css('padding-top'), 10)
            fix += parseInt($this.css('padding-bottom'), 10)
            return $('.footer').outerHeight(true) + fix
          }
        }
      } )

      // Hacky fix for responsive width
      // Set the sidebar's width to be the width of the
      // parent.
      var responsiveFix = function () {
        var padding = $this.innerWidth() - $this.width()
        $this.width( $this.parent().width() - padding )
      }

      $(window).smartresize( responsiveFix )

      responsiveFix()
    })

    /*
     * Fix the pushed column affix bug in safari. Applies to the
     * sticky sidebar.
     *
     * @sourcehttps://github.com/twbs/bootstrap/issues/12126
     */
    if ( navigator.userAgent.indexOf('Safari') != -1 &&
         navigator.userAgent.indexOf('Chrome') == -1 ) {

      var explicitlySetAffixPosition = function () {
        if ( $(window).innerWidth() >= 992 ) {
          affixed.css('left', affixed.offset().left + 'px')
        }
      }

      /*
       * Before the element becomes affixed, add left CSS that is equal
       * to the distance of the element from the left of the screen
       */
      affixed.on('affix.bs.affix', function () {
        explicitlySetAffixPosition()
      })
    }

    /*
     * Remove left position when affix-top class is applied
     * Also, remove the top offset
     */
    affixed.on('affix-top.bs.affix', function () {
      affixed.css({
        left: 'auto',
        top : 0
      })
    })

    /*
     * Add a top offset so that the sidebar is not behing the navbar
     */
    affixed.on('affix.bs.affix', function () {
      affixed.css({
        top : navbarHeight + 'px'
      })
    })

    /**
     * On resize, un-affix the affixed widget to measure where it
     * should be located, then set the left CSS accordingly, re-affix
     * it
     */
    $(window).smartresize(function () {
      if ( affixed.hasClass('affix') ) {
        affixed.removeClass('affix')
        affixed.css('left','auto')
        explicitlySetAffixPosition()
        affixed.addClass('affix')
      }
    })

    /**
     * Now we have to remove the left positioning of get affix-bottom
     * to work properly
     */
    affixed.on('affix-bottom.bs.affix', function () {
      affixed.css('left','auto')
    })
  })

} (jQuery);

+function ($) {
  'use strict';

  // TODO refactor this constant
  var mobileWidth = 768

  function collapseFooter () {
    // Adjust footer classes so they are only collapsed on mobile
    if ( $(window).innerWidth() >= mobileWidth ) {
      // Add collapse open class
      $('.big-foot-nav').not('.in').addClass('in')
    } else {
      // Remove collapse open class
      $('.big-foot-nav').removeClass('in')
    }
  }

  $('.big-foot h2[data-toggle="collapse"]').click(function (e) {
    if ( $(window).innerWidth() >= mobileWidth ) {
      // Don't collapse!
      e.preventDefault();

      var id = $(this).attr('data-target');
      $(id).addClass('in');

      return false;
    }
  });


  $(document).ready(function () {
    // Keep all window resize scripts within the throttling function
    $(window).smartresize( collapseFooter )

    // Run collapse footer right off the bat
    collapseFooter()
  });
} (jQuery);

/*
 * Wait For Documentation
 *
 * Allows you to wait for when a given element is
 * a given selector and run a callback.  The callback
 * is only run once.  If the condition is true, then
 * the callback will be run immediately; i.e. it does
 * not wait for the condition to be false and then wait
 * for the condition to be true.
 *
 * Definition:
 *
 * $( selector ).waitFor( selector, callback [, options] )
 *
 * Options:
 *
 * ```js
 * {
 *   "rate" : Number [200]
 * }
 * ```
 *
 * Example:
 *
 * Run a function when $('body') has the class 'done'
 *
 * ```js
 * $( 'body' ).waitFor( '.done', function () {
 *   console.log( 'body is done!' )
 * } );
 * ```
 *
 * Example 2:
 *
 * Run a function when $('body') does not have the class 'done'.
 * This will run immediately once run
 *
 * ```js
 * $( 'body' ).waitFor( ':not(.done)', function () {
 *   console.log( 'body is not done!' )
 * } );
 * ```
 */

+function ($) {
  'use strict';

  // WAITFOR PUBLIC CLASS DEFINITION
  // ===============================

  var WaitFor = function (element, options) {
    this.options = $.extend({}, options)
  }

  WaitFor.VERSION = '0.0.1'

  WaitFor.DEFAULTS = {
    rate : 100
  }

  WaitFor.prototype = {}

  WaitFor.prototype.constructor = WaitFor

  // WAITFOR PLUGIN DEFINITION
  // =========================

  function Plugin( selector, callback, option ) {
    return this.each(function () {
      var $self    = $(this)
      var options  = typeof option == 'object' && option
      var interval = -1;
      var checker  = function () {
        if ( $self.is( selector ) ) {
          clearInterval( interval )

          callback.call( $self )

          return true
        }

        return false
      }

      options = $.extend( WaitFor.DEFAULTS, options )

      var success = checker();
      if ( ! success ) {
        interval = setInterval( checker, options.rate )
      }
    })
  }

  var old = $.fn.WaitFor

  $.fn.waitFor             = Plugin
  $.fn.waitFor.Constructor = WaitFor

  // WAITFOR NO CONFLICT
  // ===================

  $.fn.waitFor.noConflict = function () {
    $.fn.waitFor = old
    return this
  }

} (jQuery);

+function ($) {
  'use strict';

  // TODO refactor this constant
  var mobileWidth = 991

  var desktopElements = [
    '.navbar-ws .navbar-toggle'
  ].join( ',' )
  var mobileElements = [
    '.asu_mobile_nav_item',
    '#main-search',
    '#asu_mobile_menu_button',
    '#asu_mobile_search_button'
  ].join( ',' )


  /**
   * Create nagivation, search, and icons
   * if they do not already exist
   *
   * Don't use #main-search id for anything else!
   */
  function generateMarkup() {
    var $blackout = $('<div class="blackout"></div>').appendTo('body').hide();

    var showBlackout = function () {
      if ( ( window.matchMedia &&
             window.matchMedia('(max-width: ' + mobileWidth + 'px)').matches ) ||
          ( typeof window.matchMedia === 'undefined' &&
            $( window ).width() < mobileWidth ) ) {
        $blackout.show();
      }
    }

    var hideBlackout = function () {
      $blackout.hide();
    }

    $( window ).smartresize( function () {
      if ( ( window.matchMedia && window.matchMedia('(min-width: ' + ( mobileWidth + 1 ) + 'px)').matches ) ||
          ( typeof window.matchMedia === 'undefined' && $( window ).width() > mobileWidth ) ) {
        hideBlackout();
      }
    } )

    var mainSearch = document.getElementById( 'main-search' )
    if ( mainSearch === null ) {
      // ==========
      // Navigation
      // ==========
      var $menuHiddenButton = $( '.navbar-ws .navbar-toggle' )
      $menuHiddenButton.hide()

      // add asu menu items
      $( '#asu_universal_nav>ul>li' ).each( function ( i, e ) {
        var $clone = $( e ).clone().addClass( 'asu_mobile_nav_item' )

        // Transform nested ul li's into dropdowns
        if ( $clone.find( 'ul' ).length > 0 ) {
          $clone.find( '>a' )
            .addClass( 'dropdown-toggle' )
            .attr( 'data-toggle', 'dropdown' )
            .append( '&nbsp;<span class="caret"></span>' )

          $clone.find( 'ul' )
            .addClass( 'dropdown-menu' )
            .attr( 'role', 'menu' )
            .find( 'li' )
              .addClass( 'external-link' )
        } else {
          // Add extrenal link
          $clone.addClass( 'external-link' )
        }

        $clone.appendTo( '.navbar-ws .nav.navbar-nav' )
      } )


      // ======
      // Search
      // ======

      // Prepended to '#block-asu-brand-asu-brand-header .content'
      // Will get an '.opened' class added to it when opened
      var searchMarkUp = ''

      searchMarkUp += '<div id="main-search" class="main-search">'
      searchMarkUp += '  <form target="_top" action="https://search.asu.edu/search" method="get" name="gs">'
      searchMarkUp += '    <input class="asu_search_box" name="q" id="asu_search_box" placeholder="Search" autocomplete="off" type="text">'
      searchMarkUp += '    <input class="asu_search_button" type="submit" value="Search">'
      searchMarkUp += '    <input name="site" value="default_collection" type="hidden">'
      searchMarkUp += '    <input name="sort" value="date:D:L:d1" type="hidden">'
      searchMarkUp += '    <input name="output" value="xml_no_dtd" type="hidden">'
      searchMarkUp += '    <input name="ie" value="UTF-8" type="hidden">'
      searchMarkUp += '    <input name="oe" value="UTF-8" type="hidden">'
      searchMarkUp += '    <input name="client" value="asu_frontend" type="hidden">'
      searchMarkUp += '    <input name="proxystylesheet" value="asu_frontend" type="hidden">'
      searchMarkUp += '  </form>'
      searchMarkUp += '</div>'

      var $search = $( searchMarkUp ).prependTo( '#block-asu-brand-asu-brand-header .content' )

      // =====
      // Icons
      // =====

      // Appended to .asu_mobile_hdr_wrapper
      var mobileMenuMarkup = ''

      mobileMenuMarkup += '<div class="fa fa-navicon" id="asu_mobile_menu_button">'
      mobileMenuMarkup += '  <a href="#">Menu</a>'
      mobileMenuMarkup += '</div>'

      var searchMenuMarkup = '<div class="fa fa-search" id="asu_mobile_search_button"></div>'

      // TODO We should be appending to .asu_mobile_hdr_wrapper but
      // our markup does not have a .asu_mobile_hdr_wrapper nested in
      // the #asu_mobile_hdr like webspark does.
      // For now, we will append to #asu_mobile_hdr, but we should look into
      // this again in the future.
      var $mobileMenuButton = $( mobileMenuMarkup ).appendTo( '#asu_mobile_hdr' )
      var $searchButton = $( searchMenuMarkup ).appendTo( '#asu_mobile_hdr' )

      // ===========
      // Icon Events
      // ===========

      $searchButton.click( function ( e ) {
        e.preventDefault();

        if ( $( this ).is( '.clicked' ) ) {
          // Close the search
          $( this ).removeClass( 'clicked' )

          $search.removeClass( 'opened' )
        } else {
          // Open (and focus on) the search
          $( this ).addClass( 'clicked' )
          $search.addClass( 'opened' )
          $search.find('input[type=text]').focus()
        }
      } )

      $blackout.click(function () {
        // Close the menu
        $( '.navbar-ws .navbar-collapse' ).waitFor( ':not(.in)', function () {
          $mobileMenuButton.removeClass( 'fa-close' )
          $mobileMenuButton.addClass( 'fa-navicon' )
        } )

        $menuHiddenButton.click()
        hideBlackout();
      } );

      $mobileMenuButton.click( function ( e ) {
        e.preventDefault();
        var $self = $( this )
        if ( $self.is( '.fa-close' ) ) {
          // Close the menu
          $( '.navbar-ws .navbar-collapse' ).waitFor( ':not(.in)', function () {
            $self.removeClass( 'fa-close' )
            $self.addClass( 'fa-navicon' )
          } )

          $menuHiddenButton.click()
          hideBlackout();
        } else {
          // Open the menu
          $( '.navbar-ws .navbar-collapse' ).waitFor( '.in', function () {
            $self.addClass( 'fa-close' )
            $self.removeClass( 'fa-navicon' )
          } )

          $menuHiddenButton.click()
          showBlackout();
        }
      } )
    }
  }

  /**
   * Hide and show elements depending on viewport size.
   */
  function collapseHeader () {
    if ( ( window.matchMedia &&
             window.matchMedia('(min-width: ' + (mobileWidth + 1) + 'px)').matches ) ||
          ( typeof window.matchMedia === 'undefined' &&
            $( window ).width() > mobileWidth ) ) {
      $( desktopElements ).show()
      $( mobileElements ).hide()
    } else {
      $( desktopElements ).hide()
      $( mobileElements ).show()
    }
  }

  /**
   * Bootstrap the markup.
   */
  $(document).ready(function () {
    // Re-check viewport size on resize
    $(window).resize( collapseHeader )

    // Run collapse header right off the bat
    generateMarkup()
    collapseHeader()
  } );
} (jQuery);

+function ($) {
  'use strict';

  // TODO refactor this constant
  var mobileWidth = 992

  $(function () {
    $('.navbar.navbar-ws').affix({
      offset: {
        top: $('#asu_header').outerHeight()
      }
    }).each(function (i, e) {
      $(e).on('affix.bs.affix', function () {
        // Add the height of the navbar to the margin of the body
        if ( $( window ).width() >= mobileWidth ) {
          $('body').css('margin-top', $(e).outerHeight() + 'px');
        }
      }).on('affixed-top.bs.affix', function () {
        // Remove the height of the navbar to the margin of the body
        $('body').css('margin-top', '0px');
      })
    })
  })
} (jQuery);

+function ($) {
  'use strict';

  // TODO refactor this constant
  // Nav goes to mobile for medium size devices
  var mobileWidth = 991;

  /*
   * The hover functions will trigger even on mobile devices. When
   * touch event happens on a mobile device, the onhoverstart is called
   * and then the click event is called.  Since the hover adds the
   * open class to the element, we need to add a quick dying variable
   * to let the click event know whether the element was just opened or
   * not.
   *
   * Basically:
   * - if clicked and not open, open
   * - if clicked and open, close
   * - if hovered over, open (no matter the previous state)
   * - if hover left, close (no matter the previous state)
   */
  $.setupNavigation = function () {
    $('.navbar-ws ul.nav>li.dropdown').click(function (e) {
      e.stopPropagation()

      var self = $( this )
      self.find( 'a' ).blur()

      if ( self.hasClass( 'open' ) && ! self.data( 'sos-click' ) ) {
        self.removeClass( 'open' )
      } else {
        // No other li can be open
        $('.navbar-ws ul.nav>li.dropdown').each(function (i, e) {
          $(e).removeClass( 'open' )
        })

        self.addClass( 'open' )
      }
    }).hover( function () {
      // Don't worry about mobile devices
      if ( ( window.matchMedia &&
             window.matchMedia('(max-width: ' + mobileWidth + 'px)').matches ) ||
          ( typeof window.matchMedia === 'undefined' &&
            $( window ).width() < mobileWidth ) ) {
        return
      }

      var self = $( this )
      self.addClass( 'open' )
      self.data( 'sos-click', true )

      setTimeout( function () {
        self.data( 'sos-click', false )
      }, 5 )
    }, function (e) {
      // Don't worry about mobile devices
      if ( ( window.matchMedia &&
             window.matchMedia('(max-width: ' + mobileWidth + 'px)').matches ) ||
          ( typeof window.matchMedia === 'undefined' &&
            $( window ).width() < mobileWidth ) ) {
        e.preventDefault()
        e.stopPropagation()
        return
      }

      $( this ).removeClass( 'open' )
    })

    $('ul.dropdown-menu').click(function (e) {
      if ( ( $( e.target ).is( ':not(a)' ) && $( e.target ).is( ':not(li)' ) ) || $( e.target ).is( '.dropdown-title') ) {
        e.preventDefault();
        e.stopPropagation();
      }

      if ( $( e.target ).is( '.dropdown-title' ) ) {
        if ( ( window.matchMedia &&
               window.matchMedia('(max-width: ' + mobileWidth + 'px)').matches ) ||
            ( typeof window.matchMedia === 'undefined' &&
              $( window ).width() < mobileWidth ) ) {
          e.preventDefault()
          e.stopPropagation()

          $( e.target ).closest('.column').toggleClass('active');
        }
      }
    })
  }

  $(document).ready(function () {
    $.setupNavigation();
  })

}( jQuery );
