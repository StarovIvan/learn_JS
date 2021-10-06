(()=>{"use strict";var e=document.querySelector(".popup-content");e.style.top="-62%";var t=function(){var t=Date.now();if(document.documentElement.clientWidth>768)var n=setInterval((function(){var r=Date.now()-t;e.style.top=r/20+"%",r>400&&clearInterval(n)}),10);else e.style.top="10%"};function n(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,u=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){i=!0,c=e},f:function(){try{u||null==n.return||n.return()}finally{if(i)throw c}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var o=function(e){return e.replace(/( |^)[а-яёa-z]/g,(function(e){return e.toUpperCase()}))},a=function(e){return e.replace(/^(\s+|\-+)+|(\s+|\-+)+$/g,"")},c=function(e){return e.replace(/(\s+)+/g," ")},u=function(e){return e.replace(/(\-+)+/g,"-")},i=function(e){return e.replace(/(\.\s*|^)[а-яёa-z]/g,(function(e){return e.toUpperCase()}))},l=function(e){return/[а-яё\s\B]/i.test(e)},s=function(e){return/[a-z\@\-\_\.\~\*\']/i.test(e)},d=function(e){return/[а-яё\s\B\.\,]/i.test(e)};function f(e,t,n,r,o,a,c){try{var u=e[a](c),i=u.value}catch(e){return void n(e)}u.done?t(i):Promise.resolve(i).then(r,o)}var v,m,p,y,h,g,E,b,L,S;(function e(){setInterval((function(){var t,n=document.getElementById("timer-hours"),r=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),a=(t=(new Date("1 september 2022").getTime()-(new Date).getTime())/1e3,{seconds:Math.floor(t%60),minutes:Math.floor(t/60%60),hours:Math.floor(t/60/60)});o.textContent=a.seconds<10?"0"+a.seconds:a.seconds,r.textContent=a.minutes<10?"0"+a.minutes:a.minutes,n.textContent=a.hours<10?"0"+a.hours:a.hours,a.seconds<0&&a.minutes<0&&a.hours<0&&(window.clearTimeout(e),n.textContent="00",r.textContent="00",o.textContent="00")}),1e3)})(),b=document.querySelector(".menu"),L=document.querySelector("menu"),S=document.querySelector(".close-btn"),b.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".menu"))&&L.classList.add("active-menu")})),L.addEventListener("click",(function(e){var t=e.target;(t===S||(t=t.closest("a")))&&L.classList.remove("active-menu")})),h=document.querySelectorAll(".popup-btn"),g=document.querySelector(".popup"),E=document.querySelector(".popup-close"),h.forEach((function(e){e.addEventListener("click",(function(){return g.style.display="block"})),e.addEventListener("click",t)})),E.addEventListener("click",(function(){return g.style.display="none"})),E.addEventListener("click",(function(){return e.style.top="-62%"})),g.addEventListener("click",(function(e){var t=e.target;t.classList.contains("popup-close")?g.style.display="none":(t=t.closest(".popup-content"))||(g.style.display="none")})),m=document.querySelector(".service-header"),p=m.querySelectorAll(".service-header-tab"),y=document.querySelectorAll(".service-tab"),m.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".service-header-tab"))&&p.forEach((function(e,n){e===t&&function(e){for(var t=0;t<y.length;t++)e===t?(p[t].classList.add("active"),y[t].classList.remove("d-none")):(p[t].classList.remove("active"),y[t].classList.add("d-none"))}(n)}))})),function(){var e,t,n=document.querySelector(".portfolio-content"),r=document.querySelectorAll(".portfolio-item"),o=(document.querySelectorAll(".portfolio-btn"),document.querySelector(".portfolio-dots")),a=0;!function(){for(var t=0;t<r.length;t++)o.innerHTML+='<li class="dot"></li>',n.append(o);(e=o.querySelectorAll(".dot"))[0].classList.add("dot-active")}();var c=function(e,t,n){e[t].classList.remove(n)},u=function(e,t,n){e[t].classList.add(n)},i=function(){r[a].classList.remove("portfolio-item-active"),c(r,a,"portfolio-item-active"),c(e,a,"dot-active"),++a>=r.length&&(a=0),r[a].classList.add("portfolio-item-active"),u(r,a,"portfolio-item-active"),u(e,a,"dot-active")},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1500;t=setInterval(i,e)};n.addEventListener("click",(function(t){t.preventDefault();var n=t.target;c(r,a,"portfolio-item-active"),c(e,a,"dot-active"),n.matches("#arrow-right")?++a>=r.length&&(a=0):n.matches("#arrow-left")?--a<0&&(a=r.length-1):n.matches(".dot")&&e.forEach((function(e,t){e===n&&(a=t)})),u(r,a,"portfolio-item-active"),u(e,a,"dot-active")})),n.addEventListener("mouseover",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(t)})),n.addEventListener("mouseout",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&l()})),l(1500)}(),document.querySelectorAll(".command__photo").forEach((function(e){var t=e.getAttribute("src");e.addEventListener("mouseenter",(function(t){e.src=t.target.getAttribute("data-img")})),e.addEventListener("mouseout",(function(){e.src=t}))})),(v=document.querySelector('input[placeholder="Ваше сообщение"]')).addEventListener("keydown",(function(e){if(!d(e.key)||"b"===e.key||"B"===e.key)return e.preventDefault()})),v.addEventListener("blur",(function(e){e.target.value=i(e.target.value),e.target.value=u(e.target.value),e.target.value=c(e.target.value),e.target.value=a(e.target.value)})),document.querySelectorAll(".calc-item").forEach((function(e){e.addEventListener("keydown",(function(e){if(!/[0-9\B]/g.test(e.key)||"b"===e.key||"B"===e.key)return e.preventDefault()}))})),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__";function r(e){var n=e.keyCode,r=t,o=r.replace(/\D/g,""),a=this.value.replace(/\D/g,""),c=0,u=r.replace(/[_\d]/g,(function(e){return c<a.length?a.charAt(c++)||o.charAt(c):e}));-1!=(c=u.indexOf("_"))&&(u=u.slice(0,c));var i=r.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(i=new RegExp("^"+i+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=u),"blur"==e.type&&this.value.length<5&&(this.value="")}var o,a=n(document.querySelectorAll(e));try{for(a.s();!(o=a.n()).done;){var c=o.value;c.addEventListener("input",r),c.addEventListener("focus",r),c.addEventListener("blur",r)}}catch(e){a.e(e)}finally{a.f()}}('input[name="user_phone"]'),document.querySelectorAll('input[placeholder="Ваше имя"]').forEach((function(e){e.addEventListener("keydown",(function(e){if(!l(e.key)||"b"===e.key||"B"===e.key)return e.preventDefault()})),e.addEventListener("blur",(function(e){e.target.value=o(e.target.value),e.target.value=u(e.target.value),e.target.value=c(e.target.value),e.target.value=a(e.target.value)}))})),document.querySelectorAll('input[type="email"]').forEach((function(e){e.addEventListener("keydown",(function(e){if(!s(e.key)||"b"===e.key||"B"===e.key)return e.preventDefault()})),e.addEventListener("blur",(function(e){e.target.value=a(e.target.value),e.target.value=u(e.target.value)}))})),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),o=document.querySelector(".calc-count"),a=document.querySelector(".calc-day"),c=document.getElementById("total"),u=function(){var t,u=1,i=1,l=+n.options[n.selectedIndex].value,s=+r.value;o.value>1&&(u+=(o.value-1)/10),a.value&&a.value<5?i*=2:a.value&&a.value<10&&(i*=1.5),t=l&&s?e*l*s*u*i:0,c.textContent=Math.floor(t)};t.addEventListener("change",(function(e){var t=e.target;(t.matches("select")||t.matches("input"))&&u()}))}(200),function(){var e=document.getElementById("form1"),t=document.getElementById("form2"),n=document.getElementById("form3"),r=document.createElement("div");r.style.fontSize="25px";var o=function(e){new Validator({selector:"#".concat(e.id),pattern:{number:/^\+7\s[(]?\d{3}\)\s\d{3}-\d{2}-\d{2}$/},method:{"form1-name":[["notEmpty"],["pattern","name"]],"form2-name":[["notEmpty"],["pattern","name"]],"form3-name":[["notEmpty"],["pattern","name"]],"form1-email":[["notEmpty"],["pattern","email"]],"form2-email":[["notEmpty"],["pattern","email"]],"form3-email":[["notEmpty"],["pattern","email"]],"form1-phone":[["notEmpty"],["pattern","number"]],"form2-phone":[["notEmpty"],["pattern","number"]],"form3-phone":[["notEmpty"],["pattern","number"]]}}).init(),e.addEventListener("submit",(function(t){if(t.preventDefault(),t.target.matches("#form1")&&e.appendChild(r),t.target.querySelectorAll(".error").length>0)return t.preventDefault();var n=new FormData(e),o={};n.forEach((function(e,t){o[t]=e})),a(o).then((function(e){if(console.log(e),201!==e.status)throw new Error("status not defined: ".concat(e.status));r.textContent="Данные отправлены, мы с вами скоро свяжемся"})).catch((function(e){r.style.color="red",r.textContent="Что-то пошло не так",console.error(e)})).finally((function(){e.querySelectorAll("input").forEach((function(e){e.value=""}))}))}))};o(e),o(t),o(n);var a=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.textContent="Загрука...",e.abrupt("return",fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}));case 2:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){f(a,r,o,c,u,"next",e)}function u(e){f(a,r,o,c,u,"throw",e)}c(void 0)}))});return function(e){return t.apply(this,arguments)}}()}()})();