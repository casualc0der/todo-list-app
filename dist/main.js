!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);const o=(()=>{const e=(e,t,n,o)=>{const r=document.getElementById(`${t}`),c=document.createElement(`${e}`);c.id=n,c.classList.add(`${o}`),r.appendChild(c)},t=e=>{const t=document.getElementById(e);for(;t.firstChild;)t.removeChild(t.lastChild)};return{createButton:(e,t,n,o)=>{const r=document.getElementById(`${n}`),c=document.createElement("button");c.classList.add("xxx"),c.id=o,c.innerHTML=e,c.addEventListener("click",()=>t()),r.appendChild(c)},createSection:e,addInnerHTML:(e,t)=>{document.getElementById(`${e}`).innerHTML=t},clearInputText:e=>{const t=document.getElementById(e);t.innerText="",t.value=""},clearSection:t,renderTodos:n=>{console.log(n);const o=document.getElementById("todoLists");t(o.id);const r=n.retriveToDoLists();e("div","todoLists",n.name,"todoCard");const c=document.getElementById(n.name);o.appendChild(c),c.innerHTML=r}}})(),r=(()=>{o.createSection("div","main-content","todoLists","todos"),o.createSection("div","main-content","projects","projects"),o.createSection("div","main-content","projectAdd","projectAdd"),o.createSection("div","main-content","projectArea","projects");const e=document.createElement("input");document.getElementById("projectAdd").appendChild(e),e.id="newProjectName"})(),c=(()=>{const e=[];return{createProject:t=>{if(!t)return;const n=(e=>{const t=[];return{name:e,retriveToDoLists:()=>t,addToDoList:(e,n)=>{t.push({title:e,description:n})}}})(t);e.push(n)},retrieveProjects:()=>e}})();(()=>{document.addEventListener("DOMContentLoaded",r);const e=document.getElementById("newProjectName");o.createButton("Add project",()=>{o.clearSection("projectArea"),c.createProject(e.value),o.clearInputText("newProjectName");const t=c.retrieveProjects();t.forEach(e=>{const n=`project-id${t.indexOf(e)}`;o.createSection("div","projectArea",n,"x"),o.createButton(e.name,()=>o.renderTodos(e),n,e.name)})},"projectAdd","hello")})();n(0)}]);