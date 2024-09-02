import{i as K,a as Z}from"./vendor-BRPE7r0H.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelectorAll(".nav-link");let t=window.location.pathname.split("/").pop();t!=="index.html"&&t!=="favorites.html"&&(t="index.html"),e.forEach(r=>{r.getAttribute("href")===t&&r.classList.add("active")})});const b=document.querySelector(".js-header"),F=document.querySelector("main"),D="is-scrolling",ee=e=>{e?b.classList.add(D):b.classList.remove(D)},te=e=>{e?F.style.marginTop=`${b.offsetHeight}px`:F.style.marginTop=0},R=()=>{let e=window.scrollY>b.offsetTop;ee(e),te(e)};document.addEventListener("DOMContentLoaded",()=>{R(),document.addEventListener("scroll",R)});const i=(e,t,r,o)=>{K.show({message:e,drag:!0,close:!1,timeout:5e3,position:"bottomRight",messageColor:"#2a2a2a",closeOnClick:!0,animateInside:!0,backgroundColor:r??"#f4f4f4",title:t??""})};async function re(){try{return await(await fetch("https://your-energy.b.goit.study/api/quote")).json()}catch{return i("Error fetching the quote:","Error ❌"),null}}function ne(e){const t=new Date().toISOString().split("T")[0];localStorage.setItem("dailyQuote",JSON.stringify({quote:e,date:t}))}function oe(){const e=localStorage.getItem("dailyQuote");return e?JSON.parse(e):null}async function ae(){const e=oe(),t=new Date().toISOString().split("T")[0];if(e&&e.date===t)return e.quote;{const r=await re();return r?(ne(r),r):e?e.quote:null}}async function se(){const e=await ae();if(e){const t=e.quote,r=e.author;document.querySelector(".quote").textContent=t,document.querySelector(".quote-author").textContent=r}}se();const T=()=>JSON.parse(localStorage.getItem("favorites"))||[];function ie(e){if(!e._id){i("Exercise ID is missing.","Error ❌");return}const t=T();t.find(r=>r._id===e._id)?i("This exercise is already in your favorites.","Error ❌"):(t.push(e),localStorage.setItem("favorites",JSON.stringify(t)),i("Exercise added to favorites!","Success ✅"))}function j(e,t){if(!e){i("Exercise ID is missing.","Error ❌");return}const r=T();if(!r.find(o=>o._id===e))i("This exercise is not in your favorites.","Error ❌");else{const o=r.filter(n=>n._id!==e);localStorage.setItem("favorites",JSON.stringify(o)),i("Exercise removed from favorites!","Success ✅"),t&&t()}}const u="https://your-energy.b.goit.study/api",g=async(e,t,r)=>{const a=await fetch(e,{headers:{"Content-type":"application/json"},method:t,body:r});if(!a.ok)throw new Error(`Error: status: ${a.status}, ${a.statusText}`);return a.json()},M={async getExercises(e){const t=new URLSearchParams(e),r=`${u}/exercises?${t}`;return await g(r)},async getExercisesId(e){const t=`${u}/exercises/${e}`;return await g(t)},async editExercisesIdRating(e,t){const r="PATCH",o=`${u}/exercises/${e}/rating`,n=JSON.stringify(t);return await g(o,r,n)},async getExercisesFilter(e){const t=new URLSearchParams(e),r=`${u}/filters?${t}`;return await g(r)},async getExercisesQuote(){const e=`${u}/quote`;return await g(e)},async addSubscription(e){const t="POST",r=`${u}/subscription`,o=JSON.stringify(e);return await g(r,t,o)}},U=Z.create({baseURL:u,headers:{"Content-type":"application/json"}}),v="/project-ilurgym2/assets/icons-DPmJyXT3.svg",p={MUSCLES:"Muscles",BODY_PARTS:"Body parts",EQUIPMENT:"Equipment"},E={EXERCISE:"exercises",CATEGORY:"categories"},Q=768;let I=p.MUSCLES,k=null;document.addEventListener("DOMContentLoaded",async()=>{if(document.getElementById("favorites"))N();else{const{categories:t,page:r,totalPages:o}=await A(p.MUSCLES);$(t),y(E.CATEGORY,r,o,p.MUSCLES),ce()}});const ce=()=>{const e=document.querySelectorAll(".filter-btn");e.forEach(t=>{t.addEventListener("click",async()=>{e.forEach(s=>s.classList.remove("active")),t.classList.add("active");const r=t.getAttribute("data-filter"),{categories:o,page:n,totalPages:a}=await A(r);$(o),y(E.CATEGORY,n,a,r)})})},A=async(e,t=1)=>{const r=window.innerWidth<Q?9:12;try{const n=(await U.get("/filters",{params:{filter:e,page:t,limit:r}})).data;return n.results?{categories:n.results,page:Number(n.page),totalPages:Number(n.totalPages)}:{categories:[],page:1,totalPages:1}}catch(o){return i(`Error fetching categories: ${o}`,"Error ❌"),{categories:[],page:1,totalPages:1}}},O=async(e,t,r=1,o=null)=>{const n=window.innerWidth<Q?8:10;try{const s=(await U.get("/exercises",{params:{page:r,limit:n,...e===p.MUSCLES&&{muscles:t},...e===p.BODY_PARTS&&{bodypart:t},...e===p.EQUIPMENT&&{equipment:t},...o&&{keyword:o}}})).data;return s.results?{exercises:s.results,page:Number(s.page),totalPages:Number(s.totalPages)}:{exercises:[],page:1,totalPages:1}}catch(a){return i(`Error fetching categories: ${a}`,"Error ❌"),{exercises:[],page:1,totalPages:1}}},$=e=>{const t=document.querySelector(".exercises-grid");if(!t)return;if(t.innerHTML="",Y(!1),V(!1),e.length===0){t.innerHTML="<p>No categories found.</p>";return}const r=document.createDocumentFragment();e.forEach(o=>{const n=document.createElement("div");n.classList.add("category-card"),n.innerHTML=`
      <img src="${o.imgURL}" alt="${o.name}" width="300px" height="300px"/>
      <h3>${o.name}</h3>
      <p>${o.filter}</p>
    `,n.addEventListener("click",async()=>{const{exercises:a,page:s,totalPages:c}=await O(o.filter,o.name);I=o.filter,k=o.name,q(a),y(E.EXERCISE,s,c,o.filter)}),r.appendChild(n)}),t.appendChild(r)},le=e=>`
  <div class="rating">
    <span>
      ${e}
    </span>
    <svg class="icon-star">
      <use href="${v}#icon-star-full"></use>
    </svg>
  </div>
`,de=e=>`
  <button class="trash-btn" data-id="${e}">
    <svg width="16px" height="16px">
      <use href="${v}#icon-trash"></use>
    </svg>
  </button>
`,q=(e,t=!1)=>{const r=document.querySelector(".exercises-grid");if(!r)return;if(r.innerHTML="",Y(!0),V(!0,k),e.length===0){r.innerHTML="<p>No exercises found.</p>";return}const o=e.map(({bodyPart:n,burnedCalories:a,target:s,name:c,rating:l,_id:m})=>`
    <div class="exercise-card">
      <div class="exercise-card-header">
        <div class="label">WORKOUT</div>
        ${t?de(m):le(l)}
        <button class="start-btn" data-id="${m}">
          Start
          <svg class="icon-arrow">
            <use href="${v}#icon-arrow-start"></use>
          </svg>
        </button>
      </div>
      <div class="title-wrapper">
        <div class="icon-run-exercises">
          <svg class="icon-run">
            <use href="${v}#icon-run"></use>
          </svg>
        </div>
        <div class="title">${c}</div>
      </div>
      <div class="details">
        <div class="details-item">
          Burned calories: <span>${a}</span>
        </div>
        <div class="details-item">
          Body part: <span>${n}</span>
        </div>
        <div class="details-item">
          Target:<span>${s}</span>
        </div>
      </div>
    </div>
  `).join(" ");r.insertAdjacentHTML("afterbegin",o),document.querySelectorAll(".exercise-card .start-btn").forEach(n=>{const a=n.getAttribute("data-id");a?n.addEventListener("click",()=>{ue(a)}):i("Exercise ID is missing.","Error ❌")}),document.querySelectorAll(".trash-btn").forEach(n=>{const a=n.getAttribute("data-id");a?n.addEventListener("click",()=>{j(a,N)}):i("Exercise ID is missing.","Error ❌")})},y=(e,t,r,o)=>{const n=document.getElementById("pagination");if(!n||(n.innerHTML="",r<=1))return;const a=document.createDocumentFragment();for(let s=1;s<=r;s++){const c=document.createElement("div");c.innerText=s,c.className=s===t?"page current":"page",c.addEventListener("click",async()=>{if(e===E.CATEGORY){const{categories:l}=await A(o,s);$(l),y(e,s,r,o)}else{const{exercises:l}=await O(o,null,s);q(l),y(e,s,r,o)}}),a.appendChild(c)}n.appendChild(a)},N=()=>{const e=document.querySelector(".exercises-grid"),t=T();t.length>0?q(t,!0):e.innerHTML=`<p class="empty-favorites">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>`},Y=e=>{const t=document.getElementById("search-form");t&&(t.style.display=e?"block":"none",e?t.addEventListener("submit",H):t.removeEventListener("submit",H))},H=async e=>{e.preventDefault();const t=document.getElementById("search-input"),r=t.value.trim();if(t.value="",r==="")return;const{exercises:o}=await O(I,k,1,r);q(o),y(E.EXERCISE,1,1,I)},V=(e,t="")=>{const r=document.querySelector(".exercises-header-span"),o=document.querySelector(".exercises-subcategory");!r||!o||(r.style.display=e?"flex":"none",o.textContent=t)};function ue(e,t){M.getExercisesId(e).then(r=>{ye(r),Ee()}).catch(r=>{i(`Error fetching exercise details: ${r}`,"Error ❌")})}function me(){const e=document.querySelector(".modal__block").getAttribute("data-id");if(e){_();const t=document.getElementById("ratingModal");t&&(W(),pe(),t.setAttribute("data-exercise-id",e),t.classList.add("is-visible"),fe(),document.addEventListener("keydown",G))}else i("Exercise ID is missing when trying to open the rating modal.","Error ❌")}document.addEventListener("click",function(e){e.target.closest(".rating-modal__exit")&&h()});document.addEventListener("click",function(e){const t=document.getElementById("ratingModal"),r=document.querySelector(".rating-modal__block");t.classList.contains("is-visible")&&t&&!r.contains(e.target)&&h()});const G=e=>{e.key==="Escape"&&h()};document.addEventListener("click",function(e){e.target.matches(".rating-modal__cancel-btn")&&h()});function h(){const e=document.getElementById("ratingModal");e&&(e.classList.remove("is-visible"),W(),document.removeEventListener("keydown",G))}function ge(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(e).toLowerCase())}function fe(){const e=document.querySelector(".rating-modal__stars");if(!e)return;const t=e.querySelectorAll("span");t.length!==0&&t.forEach((r,o)=>{r.addEventListener("click",function(){t.forEach(s=>s.classList.remove("selected"));for(let s=0;s<=o;s++)t[s].classList.add("selected");const n=o+1,a=document.querySelector(".rating-modal__value");if(a){a.textContent=n.toFixed(1),a.setAttribute("data-selected-rating",n);const s=JSON.parse(localStorage.getItem("rating-form-data"))||{};s.rating=n,localStorage.setItem("rating-form-data",JSON.stringify(s))}})})}function W(){const e=document.querySelector(".rating-modal__email"),t=document.querySelector(".rating-modal__comment"),r=document.querySelectorAll(".rating-modal__stars span"),o=document.querySelector(".rating-modal__value");e&&(e.value=""),t&&(t.value=""),r.length>0&&r.forEach(n=>n.classList.remove("selected")),o&&(o.textContent="0.0",o.removeAttribute("data-selected-rating")),localStorage.removeItem("rating-form-data")}function pe(){const e=JSON.parse(localStorage.getItem("rating-form-data"));e!==null&&(e.email&&(document.querySelector(".rating-modal__email").value=e.email),e.comment&&(document.querySelector(".rating-modal__comment").value=e.comment),e.rating&&(document.querySelectorAll(".rating-modal__stars span").forEach((r,o)=>{o<e.rating&&r.classList.add("selected")}),document.querySelector(".rating-modal__value").textContent=e.rating,document.querySelector(".rating-modal__value").setAttribute("data-selected-rating",e.rating)))}document.addEventListener("input",e=>{var t,r,o;if(e.target.matches(".rating-modal__email")||e.target.matches(".rating-modal__comment")){const n=(t=document.querySelector(".rating-modal__email"))==null?void 0:t.value.trim(),a=(r=document.querySelector(".rating-modal__comment"))==null?void 0:r.value.trim(),s=(o=document.querySelector(".rating-modal__value"))==null?void 0:o.getAttribute("data-selected-rating"),c={email:n||"",comment:a||"",rating:s||""};localStorage.setItem("rating-form-data",JSON.stringify(c))}});document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",function(e){var t,r,o;if(e.target.matches(".rating-btn")&&me(),e.target.matches(".rating-modal__submit-btn")){const n=document.getElementById("ratingModal"),a=n==null?void 0:n.getAttribute("data-exercise-id");if(!a)return;const s=(t=document.querySelector(".rating-modal__value"))==null?void 0:t.getAttribute("data-selected-rating");if(!s){i("Please select a rating.","Error ❌");return}const c=(r=document.querySelector(".rating-modal__email"))==null?void 0:r.value.trim(),l=(o=document.querySelector(".rating-modal__comment"))==null?void 0:o.value.trim();if(!s||!c||!l){i("Please fill in all fields.","Error ❌");return}if(!ge(c)){i("Please enter a valid email address.","Error ❌");return}const m={rate:Number(s),email:c,review:l};M.editExercisesIdRating(a,m).then(d=>{i("Thank you for your feedback","Done ✅"),localStorage.removeItem("rating-form-data"),h()}).catch(d=>{console.error("Error details:",d),d.message.includes("Rating already submitted with this email")?i("You have already submitted a rating using this email address.","Error ❌"):i("Error submitting rating. Please try again later.","Error ❌")})}})});const ve=e=>{const t=Math.round(e),r=Array(t).fill(`<svg class="icon-star"><use href="${v}#icon-star-full"></use></svg>`),o=Array(5-t).fill(`<svg class="icon-star"><use href="${v}#icon-star-empty"></use></svg>`);return`
    ${r.join("")}
    ${o.join("")}
  `},f=(e,t)=>{e.forEach(r=>r.style.display=t?"block":"none")};function ye(e){const t=document.querySelector(".modal-title"),r=document.querySelector(".modal-image"),o=document.querySelector(".modal-target"),n=document.querySelector(".modal-bodyPart"),a=document.querySelector(".modal-equipment"),s=document.querySelector(".modal-calories"),c=document.querySelector(".modal__description"),l=document.querySelector(".modal__block"),m=document.querySelector(".modal__rating");l.setAttribute("data-id",e._id),t.textContent=e.name||"No name available",r.src=e.gifUrl||"",r.alt=e.name||"Exercise image",o.textContent=e.target||"No target available",n.textContent=e.bodyPart||"No body part available",a.textContent=e.equipment||"No equipment available",s.textContent=`${e.burnedCalories||"N/A"}`,c.textContent=e.description||"No description available",m.innerHTML=`
    <span>${e.rating}</span>
    <span>${ve(e.rating)}</span>
  `;const d=document.querySelectorAll(".js-favorite-remove"),x=document.querySelectorAll(".js-favorite-add"),P=(JSON.parse(localStorage.getItem("favorites"))||[]).find(w=>w._id===e._id);f(d,P),f(x,!P);const B=document.querySelector(".favorites-btn"),z=document.getElementById("favorites");B.addEventListener("click",function(w){if(w.stopImmediatePropagation(),(JSON.parse(localStorage.getItem("favorites"))||[]).find(C=>C._id===e._id)){const C=z?N:void 0;j(e._id,C),f(d,!1),f(x,!0)}else ie(e),f(d,!0),f(x,!1);B.blur()})}function Ee(){const e=document.querySelector(".modal");e?(e.classList.add("is-visible"),document.addEventListener("keydown",X)):i("Modal element is missing.","Error ❌")}function _(){const e=document.querySelector(".modal");e?(e.classList.remove("is-visible"),document.removeEventListener("keydown",X)):i("Modal element is missing.","Error ❌")}const J=document.querySelector(".modal-close");J&&J.addEventListener("click",_);document.addEventListener("click",e=>{const t=document.querySelector(".modal"),r=document.querySelector(".modal__block");t&&r&&t.classList.contains("is-visible")&&!r.contains(e.target)&&_()});const X=e=>{e.key==="Escape"&&_()},S=document.querySelector(".subscribe-form");if(S!==null){S.addEventListener("submit",e);async function e(o){o.preventDefault();const n=o.target.elements.email.value;try{await M.addSubscription({email:n}),i("You have subscribed 🥳","Congratulations!","#f4f4f4")}catch{i("Subscription already exists 😊","","#c6cdd1")}finally{o.target.reset(),localStorage.removeItem("subscribe-form-email")}}const t={email:""};(o=>{const n=JSON.parse(localStorage.getItem("subscribe-form-email"));if(n!==null)for(const a in n)n.hasOwnProperty(a)&&(o.elements[a].value=n[a],t[a]=n[a])})(S),S.addEventListener("input",o=>{const n=o.target.name,a=o.target.value.trim();t[n]=a,localStorage.setItem("subscribe-form-email",JSON.stringify(t))})}(()=>{let e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),o=[...document.getElementsByClassName("mobile-menu-link")],n=()=>{let s=t.getAttribute("aria-expanded")==="true";t.setAttribute("aria-expanded",!s),e.classList.toggle("is-open"),document.body.style.overflow=s?"auto":"hidden"};const a=()=>{window.matchMedia("(max-width: 767px)").matches?(t.addEventListener("click",n),r.addEventListener("click",n),o.forEach(s=>{s.addEventListener("click",n)})):(t.removeEventListener("click",n),r.removeEventListener("click",n),o.forEach(s=>{s.removeEventListener("click",n)}),e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))};window.addEventListener("resize",a),a()})();const he=()=>{document.querySelector(".preloader").classList.add("preloader--hidden")};document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>{he()},500)});let L=document.getElementById("myBtn");document.getElementsByClassName(".footer");L&&(L.onclick=function(){be()});window.onscroll=function(){Se()};function Se(){document.body.scrollTop>20||document.documentElement.scrollTop>20?L.style.display="block":L.style.display="none"}function be(){document.body.scrollTop=0,document.documentElement.scrollTop=0}
//# sourceMappingURL=main-Chbnoifk.js.map
