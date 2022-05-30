(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  background-color: rgb(235, 235, 235);\n  height: 100%;\n  font-family: sans-serif;\n}\n\nbody {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: 2fr 20fr 1fr;\n}\n\n.header {\n  background-color: rgb(65, 65, 65);\n  color: rgb(235, 235, 235);\n  padding-left: 25px;\n  padding-top: 25px;\n  padding-bottom: 0;\n  font-size: 32px;\n  font-weight: 800;\n  grid-column: 1 / -1;\n}\n\n.footer {\n  background-color: rgb(65, 65, 65);\n\n  grid-column: 1 / -1;\n}\n\n.task-area {\n  background-color: rgb(235, 235, 235);\n  grid-column: 2 / -1;\n  grid-row: 2 / 3;\n  display: grid;\n  gap: 5px;\n  grid-template-rows: repeat(auto-fit, 50px);\n}\n\n.side {\n  background-color: rgb(235, 235, 235);\n  grid-row: 2 / 3;\n  display: grid;\n  grid-template-rows: repeat(auto-fit, 50px);\n}\n\n.add,\n#cancel,\n#submit {\n  padding: 0.8rem 1.3rem;\n  font-size: 1.3rem;\n  background-color: rgb(235, 235, 235);\n  color: rgb(65, 65, 65);\n  border-radius: 10px;\n  letter-spacing: -1px;\n  border: none;\n  width: 600px;\n  height: 50px;\n}\n\nbutton:hover {\n  background-color: rgb(206, 206, 206);\n}\n\n#cancel:hover {\n  background-color: rgb(206, 206, 206);\n}\n\n#submit:hover {\n  background-color: rgb(206, 206, 206);\n}\n\ndialog {\n  position: fixed;\n  background: white;\n  box-shadow: 0 0 60px 10px rgba(0, 0, 0, 0.9);\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 100;\n  width: 600px;\n  max-width: 100%;\n  height: 300px;\n  max-height: 100%;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n}\n\nlabel {\n  font-size: 32px;\n  height: 60px;\n}\n\ninput {\n  font-size: 32px;\n  height: 60px;\n}\n\n.closeBtn,\n.editBtn {\n  padding: 0.8rem 1.3rem;\n  font-size: 25px;\n  background-color: rgb(235, 235, 235);\n  color: rgb(65, 65, 65);\n  border-radius: 10px;\n  letter-spacing: -1px;\n  border: none;\n  width: 50px;\n  height: 50px;\n  align-self: center;\n}\n\n.card {\n  display: flex;\n  align-items: center;\n  color: rgb(65, 65, 65);\n}\n\n.title {\n  height: 25px;\n  font-size: 25px;\n  width: 600px;\n  align-self: center;\n}\n\n.date {\n  height: 25px;\n  font-size: 25px;\n  align-self: center;\n  width: 200px;\n}\n\n.dateBtn,\n.dateBtn2,\n.dateBtn3,\n.add-prj,\n.project-title {\n  /* padding: 0.8rem 1.3rem; */\n  font-size: 1.3rem;\n  background-color: rgb(235, 235, 235);\n  color: rgb(65, 65, 65);\n  border-radius: 10px;\n  letter-spacing: -1px;\n  border: none;\n  width: 200px;\n  height: 50px;\n  text-align: center;\n  justify-content: center;\n}\n\n.project-title {\n  background-color: rgb(65, 65, 65);\n  color: rgb(235, 235, 235);\n  border-radius: 0px;\n  font-weight: 800;\n  font-size: 1.6rem;\n}\n",""]);const d=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],d=0;d<e.length;d++){var c=e[d],s=r.base?c[0]+r.base:c[0],l=o[s]||0,u="".concat(s," ").concat(l);o[s]=l+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=a(m,r);r.byIndex=d,t.splice(d,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var d=n(o[i]);t[d].references--}for(var c=r(e,a),s=0;s<o.length;s++){var l=n(o[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),i=n.n(o),d=n(565),c=n.n(d),s=n(216),l=n.n(s),u=n(589),p=n.n(u),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals,Math.pow(10,8);var g=36e5;function h(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function b(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function v(e,t){h(1,arguments);var n=t||{},r=null==n.additionalDigits?2:b(n.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var a,o=E(e);if(o.date){var i=L(o.date,r);a=T(i.restDateString,i.year)}if(!a||isNaN(a.getTime()))return new Date(NaN);var d,c=a.getTime(),s=0;if(o.time&&(s=N(o.time),isNaN(s)))return new Date(NaN);if(!o.timezone){var l=new Date(c+s),u=new Date(0);return u.setFullYear(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()),u.setHours(l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds()),u}return d=S(o.timezone),isNaN(d)?new Date(NaN):new Date(c+s+d)}var y={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},x=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,C=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,w=/^([+-])(\d{2})(?::?(\d{2}))?$/;function E(e){var t,n={},r=e.split(y.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?t=r[0]:(n.date=r[0],t=r[1],y.timeZoneDelimiter.test(n.date)&&(n.date=e.split(y.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var a=y.timezone.exec(t);a?(n.time=t.replace(a[1],""),n.timezone=a[1]):n.time=t}return n}function L(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:NaN,restDateString:""};var a=r[1]?parseInt(r[1]):null,o=r[2]?parseInt(r[2]):null;return{year:null===o?a:100*o,restDateString:e.slice((r[1]||r[2]).length)}}function T(e,t){if(null===t)return new Date(NaN);var n=e.match(x);if(!n)return new Date(NaN);var r=!!n[4],a=k(n[1]),o=k(n[2])-1,i=k(n[3]),d=k(n[4]),c=k(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,d,c)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var a=7*(t-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}(t,d,c):new Date(NaN);var s=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(M[t]||(j(e)?29:28))}(t,o,i)&&function(e,t){return t>=1&&t<=(j(e)?366:365)}(t,a)?(s.setUTCFullYear(t,o,Math.max(a,i)),s):new Date(NaN)}function k(e){return e?parseInt(e):1}function N(e){var t=e.match(C);if(!t)return NaN;var n=D(t[1]),r=D(t[2]),a=D(t[3]);return function(e,t,n){return 24===e?0===t&&0===n:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,r,a)?n*g+6e4*r+1e3*a:NaN}function D(e){return e&&parseFloat(e.replace(",","."))||0}function S(e){if("Z"===e)return 0;var t=e.match(w);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),a=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,a)?n*(r*g+6e4*a):NaN}var M=[31,null,31,30,31,30,31,31,30,31,30,31];function j(e){return e%400==0||e%4==0&&e%100!=0}function A(e){h(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function H(e){h(1,arguments);var t=A(e);return t.setHours(0,0,0,0),t}function q(e,t){h(2,arguments);var n=H(e),r=H(t);return n.getTime()===r.getTime()}function B(e){return h(1,arguments),q(e,Date.now())}function z(e,t){h(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,o=null==a?0:b(a),i=null==n.weekStartsOn?o:b(n.weekStartsOn);if(!(i>=0&&i<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=A(e),c=d.getDay(),s=(c<i?7:0)+c-i;return d.setDate(d.getDate()-s),d.setHours(0,0,0,0),d}function I(e,t,n){h(2,arguments);var r=z(e,n),a=z(t,n);return r.getTime()===a.getTime()}function U(e,t){return h(1,arguments),I(e,Date.now(),t)}let O=[];document.querySelector(".card-area");class Z{constructor(e,t,n){this.task=t,this.date=n,this.checkBox=e,this.info=function(){return 1==readStatus?"read":"unread"}}}function P(e){const t=document.querySelector(".card-area");if(t.innerHTML="","all"==e)for(let e=0;e<O.length;e++){let n,r,a,o,i=document.createElement("div");i.classList.add("card"),t.appendChild(i),n=document.createElement("p"),n.classList.add("title"),n.textContent=O[e].task,i.appendChild(n),r=document.createElement("p"),r.classList.add("date"),r.textContent=O[e].date,i.appendChild(r),o=document.createElement("button"),o.classList.add("editBtn"),o.textContent="E",i.appendChild(o),o.addEventListener("click",(t=>{let r=prompt("Please edit your task",`${O[e].task}`);n.textContent=r})),a=document.createElement("button"),a.classList.add("closeBtn"),a.textContent="x",i.appendChild(a),a.addEventListener("click",(n=>{t.removeChild(i),O.splice(e,1),P("all")}))}else if("today"==e){for(let e=0;e<O.length;e++)if(B(v(O[e].date))){let n,r,a=document.createElement("div");a.classList.add("card"),t.appendChild(a),n=document.createElement("p"),n.classList.add("title"),n.textContent=O[e].task,a.appendChild(n),r=document.createElement("p"),r.classList.add("date"),r.textContent=O[e].date,a.appendChild(r)}}else if("week"==e)for(let e=0;e<O.length;e++)if(U(v(O[e].date))){let n,r,a=document.createElement("div");a.classList.add("card"),t.appendChild(a),n=document.createElement("p"),n.classList.add("title"),n.textContent=O[e].task,a.appendChild(n),r=document.createElement("p"),r.classList.add("date"),r.textContent=O[e].date,a.appendChild(r)}}!function(){const e=document.createElement("div");e.classList.add("header"),e.innerHTML="TO-DO LIST",document.body.appendChild(e)}(),function(){const e=document.createElement("div");e.classList.add("side"),document.body.appendChild(e)}(),function(){const e=document.createElement("div");e.classList.add("task-area"),document.body.appendChild(e),function(){const e=document.createElement("button"),t=document.querySelector(".task-area");e.classList.add("add"),e.innerHTML="+ Add Task",t.appendChild(e)}();const t=document.createElement("div");t.classList.add("card-area"),e.appendChild(t)}(),function(){const e=document.createElement("div");e.classList.add("footer"),document.body.appendChild(e)}(),function(){const e=document.createElement("button"),t=document.querySelector(".side"),n=document.createElement("button"),r=document.createElement("button");r.classList.add("dateBtn3"),r.innerHTML="ALL",t.appendChild(r),e.classList.add("dateBtn"),e.innerHTML="Today",t.appendChild(e),n.classList.add("dateBtn2"),n.innerHTML="Week",t.appendChild(n)}(),function(){const e=document.createElement("div"),t=document.querySelector(".side");e.classList.add("project-title"),e.innerHTML="Projects",t.appendChild(e),function(){const e=document.createElement("button"),t=document.querySelector(".side");e.classList.add("add-prj"),e.innerHTML="+ Add Project",t.appendChild(e),e.addEventListener("click",(e=>{!function(){const e=document.querySelector(".side");let t=prompt("Name your project","My project");const n=document.createElement("button");n.classList.add("add-prj"),n.innerHTML=t,e.appendChild(n)}()}))}()}(),function(){const e=document.querySelector(".task-area"),t=document.createElement("dialog");t.id="dialogMod",e.appendChild(t);const n=document.createElement("form");n.setAttribute("method","dialog");const r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("name","todotask"),r.setAttribute("id","todotask"),r.setAttribute("placeholder","Task to complete");const a=document.createElement("input");a.setAttribute("type","date"),a.setAttribute("id","due"),a.setAttribute("name","due"),a.setAttribute("min","2022-01-01");const o=document.createElement("label");o.setAttribute("for","todotask"),o.innerHTML="Add new task: ";const i=document.createElement("label");i.setAttribute("for","due"),i.innerHTML="Due Date: ";const d=document.createElement("menu"),c=document.createElement("button");c.id="cancel",c.setAttribute("value","cancel"),c.innerHTML="CANCEL";const s=document.createElement("button");s.id="submit",c.setAttribute("value","default"),s.innerHTML="SUBMIT",t.appendChild(n),n.appendChild(o),n.appendChild(r),n.appendChild(i),n.appendChild(a),n.appendChild(d),d.appendChild(c),d.appendChild(s)}(),function(){const e=document.querySelector("#todotask"),t=document.getElementById("dialogMod"),n=document.querySelector("#due"),r=document.querySelector("#submit");let a="",o="";e.addEventListener("change",(function(t){a=e.value})),n.addEventListener("change",(function(e){o=n.value})),r.addEventListener("click",(e=>{!function(e,t,n){const r=new Z("steffan",t,n);O.push(r),P("all"),console.log(O)}(0,a,o)})),document.querySelector(".add").addEventListener("click",(e=>{t.showModal()})),document.querySelector(".dateBtn").addEventListener("click",(e=>{P("today")})),document.querySelector(".dateBtn2").addEventListener("click",(e=>{P("week")})),document.querySelector(".dateBtn3").addEventListener("click",(e=>{P("all")}))}()})()})();