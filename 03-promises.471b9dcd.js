!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=n),n.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),n.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),n.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),n.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return o.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o.default(e,t)};var r,o=(r=n("8NIkP"))&&r.__esModule?r:{default:r}})),n.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}}));var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t){return i.default(e)||l.default(e,t)||f.default(e,t)||a.default()};var i=s(n("8slrw")),l=s(n("7AJDX")),a=s(n("ifqQW")),f=s(n("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}var c=n("h6c0i"),d={formEl:document.querySelector(".form"),btnEl:document.querySelector("button")};function p(e,t){return new Promise((function(r,o){setTimeout((function(){Math.random()>.3?r({position:e,delay:t}):o({position:e,delay:t})}),t)}))}d.formEl.addEventListener("submit",(function(t){t.preventDefault();var r=new FormData(t.currentTarget),o={},n=!0,i=!1,l=void 0;try{for(var a,f=r.entries()[Symbol.iterator]();!(n=(a=f.next()).done);n=!0){var s=e(u)(a.value,2),y=s[0],m=s[1];o[y]=Number(m)}}catch(e){i=!0,l=e}finally{try{n||null==f.return||f.return()}finally{if(i)throw l}}var v=o.delay,b=o.step,_=o.amount;console.log(v),console.log(b),console.log(_);for(var g=1;g<=_;g++)p(g,v).then((function(e){var t=e.position,r=e.delay;c.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(r,"ms"))})).catch((function(e){var t=e.position,r=e.delay;c.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(r,"ms"))})),v+=b,d.formEl.reset()}))}();
//# sourceMappingURL=03-promises.471b9dcd.js.map