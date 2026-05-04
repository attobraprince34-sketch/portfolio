// Custom cursor
const cursor=document.getElementById('cursor');
const dot=document.getElementById('cursorDot');
let mx=0,my=0,cx=0,cy=0;
window.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px';});
function loop(){cx+=(mx-cx)*.15;cy+=(my-cy)*.15;cursor.style.left=cx+'px';cursor.style.top=cy+'px';requestAnimationFrame(loop);}loop();
document.querySelectorAll('a,button,.skill-card,.project-visual').forEach(el=>{
  el.addEventListener('mouseenter',()=>cursor.classList.add('hover'));
  el.addEventListener('mouseleave',()=>cursor.classList.remove('hover'));
});

// Reveal on scroll
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}});
},{threshold:.15});
document.querySelectorAll('.reveal,.line,.skill-card,.project,.section-title,.eyebrow').forEach(el=>{
  if(!el.classList.contains('reveal')&&!el.classList.contains('line')){el.classList.add('reveal');}
  io.observe(el);
});

// Parallax floating tags
document.addEventListener('mousemove',e=>{
  const x=(e.clientX/window.innerWidth-.5)*20;
  const y=(e.clientY/window.innerHeight-.5)*20;
  document.querySelectorAll('.floating').forEach((el,i)=>{
    const f=(i+1)*.5;
    el.style.transform=`translate(${x*f}px,${y*f}px)`;
  });
});

// Nav scroll effect
let lastScroll=0;
window.addEventListener('scroll',()=>{
  const nav=document.querySelector('.nav');
  if(window.scrollY>50)nav.style.background='rgba(12,12,14,.85)';
  else nav.style.background='rgba(12,12,14,.6)';
});
