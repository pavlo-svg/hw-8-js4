let e=document.querySelector("#bookmarkInput"),t=document.querySelector("#addBookmarkBtn"),a=document.querySelector("#bookmarkList"),o=JSON.parse(localStorage.getItem("bookmarks"))||[];function r(){a.innerHTML=o.map((e,t)=>`
        <li>
          <a href="${e}" target="_blank">${e}</a>
          <button type="button" data-index="${t}">X</button>
        </li>`).join("")}t.addEventListener("click",t=>{let a=e.value.trim();a&&(o.push(a),localStorage.setItem("bookmarks",JSON.stringify(o)),r(),e.value="")}),a.addEventListener("click",e=>{if("BUTTON"===e.target.nodeName){let t=e.target.dataset.index;o.splice(t,1),localStorage.setItem("bookmarks",JSON.stringify(o)),r()}}),r();let l=document.querySelector("#username"),n=document.querySelector("#password"),u=document.querySelector("#saveBtn"),s=JSON.parse(localStorage.getItem("formData"));s&&(l.value=s.name||"",n.value=s.password||""),u.addEventListener("click",e=>{let t={name:l.value,password:n.value};localStorage.setItem("formData",JSON.stringify(t)),l.value="",n.value=""});
//# sourceMappingURL=hw-8-js4.88044ac0.js.map
