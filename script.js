const menu=document.querySelector(".menu"), nav=document.querySelector(".nav"); menu?.addEventListener("click",()=>{nav.classList.toggle("open")});
const links=[...document.querySelectorAll('.nav-links a')]; links.forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
const glow=document.querySelector(".cursor-glow"); if(glow && matchMedia("(pointer:fine)").matches){document.addEventListener("pointermove",e=>{glow.style.transform=`translate(${e.clientX-120}px,${e.clientY-120}px)`})}
document.querySelectorAll(".project").forEach(card=>{card.addEventListener("pointermove",e=>{if(!matchMedia("(pointer:fine)").matches)return; const r=card.getBoundingClientRect(); const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5; card.style.transform=`perspective(900px) rotateX(${y*-2}deg) rotateY(${x*2}deg)`}); card.addEventListener("pointerleave",()=>card.style.transform="")});
