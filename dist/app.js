!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=3)}([function(e,t,n){var i=n(1);"string"==typeof i&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};n(2)(i,r);i.locals&&(e.exports=i.locals)},function(e,t,n){},function(e,t,n){"use strict";var i,r={},o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function s(e,t){for(var n=[],i={},r=0;r<e.length;r++){var o=e[r],a=t.base?o[0]+t.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};i[a]?i[a].parts.push(s):n.push(i[a]={id:a,parts:[s]})}return n}function l(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=r[i.id],a=0;if(o){for(o.refs++;a<o.parts.length;a++)o.parts[a](i.parts[a]);for(;a<i.parts.length;a++)o.parts.push(y(i.parts[a],t))}else{for(var s=[];a<i.parts.length;a++)s.push(y(i.parts[a],t));r[i.id]={id:i.id,refs:1,parts:s}}}}function c(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var i=n.nc;i&&(e.attributes.nonce=i)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var r=a(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function p(e,t,n){var i=n.css,r=n.media,o=n.sourceMap;if(r&&e.setAttribute("media",r),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var v=null,m=0;function y(e,t){var n,i,r;if(t.singleton){var o=m++;n=v||(v=c(t)),i=f.bind(null,n,o,!1),r=f.bind(null,n,o,!0)}else n=c(t),i=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e,t);return l(n,t),function(e){for(var i=[],o=0;o<n.length;o++){var a=n[o],c=r[a.id];c&&(c.refs--,i.push(c))}e&&l(s(e,t),t);for(var u=0;u<i.length;u++){var d=i[u];if(0===d.refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete r[d.id]}}}}},function(e,t,n){"use strict";n.r(t);n(0);function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var r=function(){function e(t,n,i,r){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.title=t,this.description=n,this.priority=i,this.id=r,this.isDone=o,this.isControlsOpened=!1}var t,n,r;return t=e,(n=[{key:"toggleTaskStatus",value:function(){this.isDone=!this.isDone}},{key:"editTitle",value:function(e){this.title=e}},{key:"editDescription",value:function(e){this.description=e}},{key:"editPriority",value:function(e){this.priority=e}},{key:"toggleControls",value:function(){this.isControlsOpened=!this.isControlsOpened}}])&&i(t.prototype,n),r&&i(t,r),e}(),o=[],a=function(e,t,n){var i=document.createElement(e);return Object.assign(i,t),n.appendChild(i),i},s=function(e,t){e.toggleControls(),e.isControlsOpened?t.style.display="flex":t.style.display="none"},l=function(e){e.innerHTML=""},c=function(){localStorage.setItem("taskList",JSON.stringify(o))},u=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,n=document.getElementById("taskListWrapper");l(n),t.forEach((function(i,r){var o=i.title,l=i.description,u=i.priority,d=a("div",{className:i.isDone?"task-wrapper done-task":"task-wrapper"},n);a("h3",{className:"task-title",innerHTML:o},d),a("p",{className:"task-description",innerHTML:l},d);var f=a("div",{className:"controls-wrapper"},d);a("p",{className:"task-priority",innerHTML:u},f);var p=a("button",{className:"base-btn controls-btn",innerHTML:". . ."},f),v=a("ul",{className:"controls"},f),m=a("li",{className:"controls-item",innerHTML:"Done"},v),y=a("li",{className:"controls-item",innerHTML:"Edit"},v),h=a("li",{className:"controls-item",innerHTML:"Delete"},v);p.addEventListener("click",(function(){return s(i,v)})),m.addEventListener("click",(function(){i.toggleTaskStatus(),d.classList.toggle("done-task"),s(i,v),c()})),y.addEventListener("click",(function(){k(i,!0),s(i,v)})),h.addEventListener("click",(function(){t.splice(r,1),e()}))})),c()},d=document.getElementById("open-modal-btn"),f=document.getElementById("modal-wrapper"),p=document.getElementById("modal"),v=document.getElementById("save-btn"),m=document.getElementById("cancel-btn"),y=document.getElementById("title-input"),h=document.getElementById("description-area"),g=document.getElementById("priority-select"),b={isModalOpened:!1,isEdit:!1,editableElement:null},E=function(){y.value="",h.value="",g.value=""},k=function(e,t){b.isModalOpened=!b.isModalOpened,b.isModalOpened?f.style.display="flex":f.style.display="none",t&&function(e){y.value=e.title,h.value=e.description,g.value=e.priority,b.isEdit=!0,b.editableElement=e}(e)},L=function(){k(),E()};d.addEventListener("click",(function(){return k()})),m.addEventListener("click",(function(){return L()})),document.addEventListener("keyup",(function(e){return"Escape"===e.key&&b.isModalOpened&&L()})),f.addEventListener("click",(function(e){p.contains(e.target)||(k(),E())})),v.addEventListener("click",(function(){if(function(){for(var e=p.checkValidity(),t=0;t<p.length;t++)p[t].checkValidity()?p[t].classList.remove("error"):p[t].classList.add("error");return e}()){var e=y.value,t=h.value,n=g.value;if(b.isEdit)b.editableElement.editTitle(e),b.editableElement.editDescription(t),b.editableElement.editPriority(n),b.isEdit=!1;else{var i=new r(e,t,n,Number(new Date));o.push(i)}E(),k(),u()}}));var M=document.getElementById("search"),O=document.getElementById("filter-status"),T=document.getElementById("filter-priority"),w=function(e,t,n){if("all"===n)u();else{var i=e.filter((function(e){return e[t]===n}));u(i),"isDone"===t?T.selectedIndex=0:O.selectedIndex=0,M.value=""}};M.addEventListener("input",(function(e){var t,n,i=e.target.value;t=i,n=o.filter((function(e){return e.title.includes(t)})),u(n),T.selectedIndex=0,O.selectedIndex=0})),O.addEventListener("change",(function(e){var t,n=e.target,i=n.value,r=n.name;w(o,r,"done"===(t=i)||"open"!==t&&t)})),T.addEventListener("change",(function(e){var t=e.target,n=t.value,i=t.name;w(o,i,n)}));var I=JSON.parse(localStorage.getItem("taskList"));if(I){var N=[];I.forEach((function(e){N.push(new r(e.title,e.description,e.priority,e.id,e.isDone))})),N.forEach((function(e){o.push(e)})),u()}}]);