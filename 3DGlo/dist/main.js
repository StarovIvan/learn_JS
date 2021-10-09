(()=>{"use strict";let e=()=>{setInterval((function(){let t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),r=function(){let e=(new Date("1 september 2022").getTime()-(new Date).getTime())/1e3;return{seconds:Math.floor(e%60),minutes:Math.floor(e/60%60),hours:Math.floor(e/60/60)}}();r.seconds<10?o.textContent="0"+r.seconds:o.textContent=r.seconds,r.minutes<10?n.textContent="0"+r.minutes:n.textContent=r.minutes,r.hours<10?t.textContent="0"+r.hours:t.textContent=r.hours,r.seconds<0&&r.minutes<0&&r.hours<0&&(window.clearTimeout(e),t.textContent="00",n.textContent="00",o.textContent="00")}),1e3)};const t=e,n=document.querySelector(".popup-content");n.style.top="-62%";let o=()=>{let e=Date.now();if(document.documentElement.clientWidth>768){let t=setInterval((function(){let o=Date.now()-e;n.style.top=o/20+"%",o>400&&clearInterval(t)}),10)}else n.style.top="10%"};const r=function(e){return e.replace(/( |^)[а-яёa-z]/g,(function(e){return e.toUpperCase()}))},a=function(e){return e.replace(/^(\s+|\-+)+|(\s+|\-+)+$/g,"")},l=function(e){return e.replace(/(\s+)+/g," ")},c=function(e){return e.replace(/(\-+)+/g,"-")},s=function(e){return e.replace(/(\.\s*|^)[а-яёa-z]/g,(function(e){return e.toUpperCase()}))},u=function(e){return/[а-яё\s\B]/i.test(e)},i=function(e){return/[a-z\@\-\_\.\~\*\']/i.test(e)},d=function(e){return/[а-яё\s\B\.\,]/i.test(e)};t(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=document.querySelector(".close-btn");e.addEventListener("click",(e=>{let n=e.target;n=n.closest(".menu"),n&&t.classList.add("active-menu")})),t.addEventListener("click",(e=>{let o=e.target;o===n?t.classList.remove("active-menu"):(o=o.closest("a"),o&&t.classList.remove("active-menu"))}))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup"),r=document.querySelector(".popup-close"),a=()=>{t.querySelectorAll("input").forEach((e=>{e.value=""}))};e.forEach((e=>{e.addEventListener("click",(()=>t.style.display="block")),e.addEventListener("click",o)})),r.addEventListener("click",(()=>{t.style.display="none",n.style.top="-62%"})),t.addEventListener("click",(e=>{let n=e.target;n.classList.contains("popup-close")?(t.style.display="none",a()):(n=n.closest(".popup-content"),n||(t.style.display="none",a()))}))})(),(()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{let o=e.target;o=o.closest(".service-header-tab"),o&&t.forEach(((e,r)=>{e===o&&(e=>{for(let o=0;o<n.length;o++)e===o?(t[o].classList.add("active"),n[o].classList.remove("d-none")):(t[o].classList.remove("active"),n[o].classList.add("d-none"))})(r)}))}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item");document.querySelectorAll(".portfolio-btn");let n,o,r=document.querySelector(".portfolio-dots"),a=0;(()=>{for(let n=0;n<t.length;n++)r.innerHTML+='<li class="dot"></li>',e.append(r);n=r.querySelectorAll(".dot"),n[0].classList.add("dot-active")})();const l=(e,t,n)=>{e[t].classList.remove(n)},c=(e,t,n)=>{e[t].classList.add(n)},s=()=>{t[a].classList.remove("portfolio-item-active"),l(t,a,"portfolio-item-active"),l(n,a,"dot-active"),a++,a>=t.length&&(a=0),t[a].classList.add("portfolio-item-active"),c(t,a,"portfolio-item-active"),c(n,a,"dot-active")},u=(e=1500)=>{o=setInterval(s,e)};e.addEventListener("click",(e=>{e.preventDefault();const o=e.target;l(t,a,"portfolio-item-active"),l(n,a,"dot-active"),o.matches("#arrow-right")?(a++,a>=t.length&&(a=0)):o.matches("#arrow-left")?(a--,a<0&&(a=t.length-1)):o.matches(".dot")&&n.forEach(((e,t)=>{e===o&&(a=t)})),c(t,a,"portfolio-item-active"),c(n,a,"dot-active")})),e.addEventListener("mouseover",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(o)})),e.addEventListener("mouseout",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&u()})),u(1500)})(),document.querySelectorAll(".command__photo").forEach((e=>{const t=e.getAttribute("src");e.addEventListener("mouseenter",(t=>{e.src=t.target.getAttribute("data-img")})),e.addEventListener("mouseout",(()=>{e.src=t}))})),(()=>{const e=document.querySelector('input[placeholder="Ваше сообщение"]');e.addEventListener("keydown",(e=>{if(!d(e.key)||"b"===e.key||"B"===e.key)return e.preventDefault()})),e.addEventListener("blur",(e=>{e.target.value=s(e.target.value),e.target.value=c(e.target.value),e.target.value=l(e.target.value),e.target.value=a(e.target.value)})),document.querySelectorAll(".calc-item").forEach((e=>{e.addEventListener("keydown",(e=>{if(!/[0-9\B]/g.test(e.key)||"b"===e.key||"B"===e.key)return e.preventDefault()}))})),function(e,t="+7 (___) ___-__-__"){const n=document.querySelectorAll(e);function o(e){const n=e.keyCode,o=t,r=o.replace(/\D/g,""),a=this.value.replace(/\D/g,"");let l=0,c=o.replace(/[_\d]/g,(function(e){return l<a.length?a.charAt(l++)||r.charAt(l):e}));l=c.indexOf("_"),-1!=l&&(c=c.slice(0,l));let s=o.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");s=new RegExp("^"+s+"$"),(!s.test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=c),"blur"==e.type&&this.value.length<5&&(this.value="")}for(const e of n)e.addEventListener("input",o),e.addEventListener("focus",o),e.addEventListener("blur",o)}('input[name="user_phone"]'),document.querySelectorAll('input[placeholder="Ваше имя"]').forEach((e=>{e.addEventListener("keydown",(e=>{if(!u(e.key)||"b"===e.key||"B"===e.key)return e.preventDefault()})),e.addEventListener("blur",(e=>{e.target.value=r(e.target.value),e.target.value=c(e.target.value),e.target.value=l(e.target.value),e.target.value=a(e.target.value)}))})),document.querySelectorAll('input[type="email"]').forEach((e=>{e.addEventListener("keydown",(e=>{if(!i(e.key)||"b"===e.key||"B"===e.key)return e.preventDefault()})),e.addEventListener("blur",(e=>{e.target.value=a(e.target.value),e.target.value=c(e.target.value)}))}))})(),((e=100)=>{const t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),r=document.querySelector(".calc-count"),a=document.querySelector(".calc-day"),l=document.getElementById("total");t.addEventListener("change",(t=>{const c=t.target;(c.matches("select")||c.matches("input"))&&(()=>{let t=0,c=1,s=1,u=+n.options[n.selectedIndex].value,i=+o.value;r.value>1&&(c+=(r.value-1)/10),a.value&&a.value<5?s*=2:a.value&&a.value<10&&(s*=1.5),t=u&&i?e*u*i*c*s:0,l.textContent=Math.floor(t)})()}))})(200),(()=>{const e=document.getElementById("form1"),t=document.getElementById("form2"),n=document.getElementById("form3"),o=document.createElement("div");o.style.fontSize="25px",o.style.color="#fff";const r=e=>{const t=new Validator({selector:`#${e.id}`,pattern:{number:/^\+7\s[(]?\d{3}\)\s\d{3}-\d{2}-\d{2}$/},method:{"form1-name":[["notEmpty"],["pattern","name"]],"form2-name":[["notEmpty"],["pattern","name"]],"form3-name":[["notEmpty"],["pattern","name"]],"form1-email":[["notEmpty"],["pattern","email"]],"form2-email":[["notEmpty"],["pattern","email"]],"form3-email":[["notEmpty"],["pattern","email"]],"form1-phone":[["notEmpty"],["pattern","number"]],"form2-phone":[["notEmpty"],["pattern","number"]],"form3-phone":[["notEmpty"],["pattern","number"]]}});t.init(),e.addEventListener("submit",(n=>{if(n.preventDefault(),n.target.matches("form")&&e.appendChild(o),t.error.size>0)return n.preventDefault();const r=new FormData(e),l={};r.forEach(((e,t)=>{l[t]=e}));const c=e=>{setTimeout((()=>{e.remove()}),2e3)};a(l).then((e=>{if(200!==e.status)throw new Error(`status not defined: ${e.status}`);o.textContent="Данные отправлены, мы с вами скоро свяжемся",c(o)})).catch((e=>{o.style.color="red",o.textContent="Что-то пошло не так",console.error(e),c(o)})).finally((()=>{e.querySelectorAll("input").forEach((e=>{e.value=""}))}))}))};r(e),r(t),r(n);const a=e=>(o.textContent="Загрука...",fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}))})()})();