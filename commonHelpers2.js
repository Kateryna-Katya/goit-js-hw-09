import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e={email:"",message:""},a=document.querySelector(".feedback-form"),m=a.querySelector('input[name="email"]'),n=a.querySelector('textarea[name="message"]');function s(){localStorage.setItem("feedback-form-state",JSON.stringify(e))}function r(){const t=localStorage.getItem("feedback-form-state");if(t){const o=JSON.parse(t);e.email=o.email||"",e.message=o.message||"",m.value=e.email,n.value=e.message}}function i(t){e[t.target.name]=t.target.value.trim(),s()}function c(t){t.preventDefault(),!(e.email===""||e.message==="")&&(localStorage.removeItem("feedback-form-state"),a.reset(),e.email="",e.message="")}a.addEventListener("input",i);a.addEventListener("submit",c);document.addEventListener("DOMContentLoaded",r);
//# sourceMappingURL=commonHelpers2.js.map
