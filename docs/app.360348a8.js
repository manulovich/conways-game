parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"dOIN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var u=document.createElement(t);return e.forEach(function(t){var e=t[0],n=t[1];u.setAttribute(e,n)}),n.forEach(function(t){u.appendChild(t)}),u},e=function(t){return t.map(function(e,n){return e.map(function(e,r){var u=[[0,-1],[-1,0],[1,0],[0,1],[-1,-1],[1,-1],[-1,1],[1,1]].map(function(e){var u=e[0],o=e[1];if(t[n+o])return t[n+o][r+u]||null}).filter(function(t){return t}).length;return 3===u?1:!e||2!==u&&3!==u?u<2||u>3?0:void 0:1})})};exports.default={createElement:t,nextStep:e};
},{}],"ZB8V":[function(require,module,exports) {
"use strict";var t=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var n,i=0,o=e.length;i<o;i++)!n&&i in e||(n||(n=Array.prototype.slice.call(e,0,i)),n[i]=e[i]);return t.concat(n||Array.prototype.slice.call(e))},e=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var r=e(require("./utils")),n=r.default.nextStep,i=function(){function e(t){this.parent=t}return e.prototype.getMatrixFromDomThree=function(e){return t([],e.children[0].children,!0).map(function(e){return t([],e.children,!0).map(function(t){return t.classList.contains("live")?1:0})})},e.prototype.syncWidthDomThree=function(t){var e=this;t.forEach(function(t,r){t.forEach(function(t,n){var i=e.parent.children[0];t?i.children[r].children[n].classList.add("live"):i.children[r].children[n].classList.remove("live")})})},e.prototype.update=function(){var t=this.getMatrixFromDomThree(this.parent),e=n(t);this.syncWidthDomThree(e)},e}();exports.default=i;
},{"./utils":"dOIN"}],"ade5":[function(require,module,exports) {
"use strict";var t=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var n,a=0,i=e.length;a<i;a++)!n&&a in e||(n||(n=Array.prototype.slice.call(e,0,a)),n[a]=e[a]);return t.concat(n||Array.prototype.slice.call(e))},e=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(exports,"__esModule",{value:!0});var r=e(require("./DOMState")),n=e(require("./utils")),a=n.default.createElement,i=function(){function e(t){this.parent=t}return e.prototype.addEvents=function(t){t.addEventListener("click",function(t){t.target.classList.toggle("live")})},e.prototype.render=function(e){var r=this.parent.clientWidth/e[0].length,n=a.apply(void 0,t(["table",[["class","playground"]]],e.map(function(e){return a.apply(void 0,t(["tr",[["class","row"]]],e.map(function(t){return a("td",[["class","cell "+(t?"live":"")],["style","width: "+r+"px; height: "+r+"px"]])}),!1))}),!1));this.parent.appendChild(n),this.addEvents(n)},e.prototype.updateState=function(){new r.default(this.parent).update()},e}();exports.default=i;
},{"./DOMState":"ZB8V","./utils":"dOIN"}],"X0ZU":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(t){this.display=t,this.isPlay=!0}return t.prototype.play=function(){var t=this;this.isPlay=!0;var e=setInterval(function(){t.isPlay||clearInterval(e),t.display.updateState()},500)},t.prototype.pause=function(){this.isPlay=!1},t}();exports.default=t;
},{}],"sYRw":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];exports.default={simplePlan:e};
},{}],"LvKz":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("./DOMDisplay")),n=e(require("./Game")),u=e(require("./plans")),r=new t.default(document.querySelector(".app")),a=new n.default(r),l=document.getElementById("play"),d=document.getElementById("pause");r.render(u.default.simplePlan),l.addEventListener("click",function(){a.play()}),d.addEventListener("click",function(){a.pause()});
},{"./DOMDisplay":"ade5","./Game":"X0ZU","./plans":"sYRw"}]},{},["LvKz"], null)
//# sourceMappingURL=app.360348a8.js.map