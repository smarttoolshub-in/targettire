/* TargetTire featured poster slider. Content is loaded from featured-updates.js. */
(function(){
"use strict";
function init(){
 const root=document.getElementById("targettire-featured-posters"),track=document.getElementById("tt-poster-track"),dots=document.getElementById("tt-poster-dots"),count=document.getElementById("tt-poster-count");
 if(!root||!track||root.dataset.ready==="1")return;root.dataset.ready="1";
 const items=Array.isArray(window.TARGETTIRE_FEATURED_UPDATES)?window.TARGETTIRE_FEATURED_UPDATES.filter(x=>x&&x.title):[];
 if(!items.length){track.textContent="Featured updates data could not be loaded. Check featured-updates.js.";return;}
 const esc=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 let current=0,timer=null;const reduced=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
 track.innerHTML=items.map((x,i)=>{const theme=["blue","violet","teal","amber","rose"].includes(x.theme)?x.theme:"blue";const layout=["split","seal","editorial","grid","command","ribbon"].includes(x.layout)?x.layout:"split";const icon=/^[a-z0-9-]+$/i.test(x.icon||"")?x.icon:"fa-bullhorn";return `<article class="tt-poster-slide theme-${theme} layout-${layout}${i===0?" is-active":""}" data-poster-card="${i}" role="link" tabindex="${i===0?0:-1}" aria-label="Open ${esc(x.title)} exam"><div class="tt-poster-copy"><span class="tt-poster-badge">${esc(x.badge||"FEATURED UPDATE")}</span><div class="tt-poster-category">${esc(x.category||"GOVERNMENT EXAMS")}</div><div class="tt-poster-title">${esc(x.title)}</div><div class="tt-poster-highlight">${esc(x.highlight||"")}</div><div class="tt-poster-line">${esc(x.subtitle||"")}</div><div class="tt-poster-description">${esc(x.description||"")}</div><button type="button" class="tt-poster-cta" data-poster="${i}">${esc(x.buttonText||"Explore Exam")} <i class="fa-solid fa-arrow-right"></i></button></div><div class="tt-poster-art"><i class="fa-solid ${icon}"></i></div></article>`}).join("");
 dots.innerHTML=items.map((x,i)=>`<button type="button" class="tt-poster-dot${i===0?" is-active":""}" data-dot="${i}" aria-label="Show poster ${i+1}"></button>`).join("");
 function show(n){current=(n+items.length)%items.length;track.querySelectorAll(".tt-poster-slide").forEach((s,i)=>{s.classList.toggle("is-active",i===current);s.tabIndex=i===current?0:-1;s.setAttribute("aria-hidden",i===current?"false":"true")});dots.querySelectorAll(".tt-poster-dot").forEach((d,i)=>d.classList.toggle("is-active",i===current));if(count)count.textContent=String(current+1).padStart(2,"0")+" / "+String(items.length).padStart(2,"0")}
 function stop(){if(timer){clearInterval(timer);timer=null}}function start(){stop();if(!reduced&&items.length>1&&!document.hidden)timer=setInterval(()=>show(current+1),5500)}
 document.getElementById("tt-poster-prev")?.addEventListener("click",()=>{show(current-1);start()});document.getElementById("tt-poster-next")?.addEventListener("click",()=>{show(current+1);start()});
 dots.addEventListener("click",e=>{const b=e.target.closest("[data-dot]");if(b){show(Number(b.dataset.dot));start()}});
 function openPoster(index){
 const x=items[index];if(!x)return;
 if(x.url&&/^https?:\/\//i.test(x.url)){window.open(x.url,"_blank","noopener,noreferrer");return}
 const groups=window.examGroupsData||{},all=[];
 Object.values(groups).forEach(g=>(Array.isArray(g?.subExams)?g.subExams:[]).forEach(ex=>all.push(ex)));
 const aliases=Array.isArray(x.examMatch)?x.examMatch:[x.title];
 const norm=s=>String(s||"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim();
 let match=null;
 for(const alias of aliases){const a=norm(alias);match=all.find(ex=>norm(ex.name)===a);if(match)break}
 if(!match){for(const alias of aliases){const a=norm(alias);match=all.find(ex=>{const n=norm(ex.name);return a.length>3&&(n.includes(a)||a.includes(n))});if(match)break}}
 if(match&&typeof window.selectExamCategory==="function"){window.selectExamCategory(match.name);return}
 if(typeof window.switchTab==="function")window.switchTab("my_exams");
 if(typeof window.showToast==="function")window.showToast("इस परीक्षा का पेज अभी वेबसाइट के Exam Data में उपलब्ध नहीं है।","info");
}
track.addEventListener("click",e=>{const card=e.target.closest("[data-poster-card]");if(card)openPoster(Number(card.dataset.posterCard))});
track.addEventListener("keydown",e=>{if(e.target.matches("[data-poster-card]")&&(e.key==="Enter"||e.key===" ")){e.preventDefault();openPoster(Number(e.target.dataset.posterCard))}});
 root.addEventListener("mouseenter",stop);root.addEventListener("mouseleave",start);document.addEventListener("visibilitychange",()=>document.hidden?stop():start());show(0);start();
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});else init();
})();