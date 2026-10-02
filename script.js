const menu=document.querySelector(".menu"),nav=document.querySelector(".nav");
menu?.addEventListener("click",()=>{nav.classList.toggle("open");menu.setAttribute("aria-expanded",nav.classList.contains("open"))});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(e=>observer.observe(e));
if(matchMedia("(pointer:fine)").matches){document.querySelectorAll(".project").forEach(card=>{card.addEventListener("pointermove",e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateX(${y*-2}deg) rotateY(${x*2}deg)`});card.addEventListener("pointerleave",()=>card.style.transform="")})}

/* SALEEH V7 — subtle futuristic interactions */
document.addEventListener("DOMContentLoaded", () => {
  const core = document.querySelector(".core-orbit");
  if (core && window.matchMedia("(pointer:fine)").matches) {
    document.addEventListener("pointermove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 8;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;
      core.style.transform = `translate(-50%,-50%) rotateX(${(-y).toFixed(2)}deg) rotateY(${x.toFixed(2)}deg)`;
    });
  }
});


/* =========================================================
   V8 interactive systems
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const time = document.getElementById("neuralTime");
  const cursor = document.querySelector(".v8-cursor-glow");

  function tick(){
    if(time){
      const d = new Date();
      time.textContent = [d.getHours(),d.getMinutes(),d.getSeconds()]
        .map(n=>String(n).padStart(2,"0")).join(":");
    }
  }
  tick();
  setInterval(tick,1000);

  if(cursor && window.matchMedia("(pointer:fine)").matches){
    let tx = innerWidth/2, ty = innerHeight/2, x = tx, y = ty;
    document.addEventListener("pointermove",(e)=>{tx=e.clientX;ty=e.clientY});
    function follow(){
      x += (tx-x)*.12; y += (ty-y)*.12;
      cursor.style.left = x+"px";
      cursor.style.top = y+"px";
      requestAnimationFrame(follow);
    }
    follow();
  }

  // Magnetic hover for primary CTAs
  document.querySelectorAll(".btn-primary,.hero-actions a").forEach(btn=>{
    if(!window.matchMedia("(pointer:fine)").matches) return;
    btn.addEventListener("pointermove",(e)=>{
      const r=btn.getBoundingClientRect();
      const dx=(e.clientX-(r.left+r.width/2))/r.width*8;
      const dy=(e.clientY-(r.top+r.height/2))/r.height*8;
      btn.style.transform=`translate(${dx}px,${dy}px)`;
    });
    btn.addEventListener("pointerleave",()=>btn.style.transform="");
  });

  // Reveal-on-scroll for V8 sections
  const revealTargets=document.querySelectorAll(".v8-neural,.v8-constellation,.neural-node,.const-node");
  if("IntersectionObserver" in window){
    const io=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add("v8-visible");
          io.unobserve(entry.target);
        }
      });
    },{threshold:.12});
    revealTargets.forEach(el=>io.observe(el));
  }

  // Subtle 3D tilt on the neural shell
  const shell=document.querySelector(".neural-shell");
  if(shell && window.matchMedia("(pointer:fine)").matches){
    shell.addEventListener("pointermove",(e)=>{
      const r=shell.getBoundingClientRect();
      const rx=((e.clientY-r.top)/r.height-.5)*-1.8;
      const ry=((e.clientX-r.left)/r.width-.5)*2.2;
      shell.style.transform=`perspective(1400px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    shell.addEventListener("pointerleave",()=>shell.style.transform="");
  }
});
