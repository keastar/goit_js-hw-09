!function(){var t,e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]"),a=document.querySelector("body");function n(t){a.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}e.addEventListener("click",(function(){e.setAttribute("disabled",!0),r.removeAttribute("disabled",!0),t||(t=setInterval(n,1e3))})),r.addEventListener("click",(function(){e.removeAttribute("disabled",!0),r.setAttribute("disabled",!0),clearInterval(t),t=null}))}();
//# sourceMappingURL=01-color-switcher.34c0aff2.js.map