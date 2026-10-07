const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'Close':'Menu'});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu'}));
const motion=document.querySelector('#motion'),yard=document.querySelector('.yard');
let paused=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function updateMotion(){yard.classList.toggle('paused',paused);motion.setAttribute('aria-pressed',String(paused));motion.setAttribute('aria-label',paused?'Play yard animation':'Pause yard animation');motion.innerHTML=paused?'▶ <span>Play animation</span>':'Ⅱ <span>Pause animation</span>'}if(motion) updateMotion();
motion?.addEventListener('click',()=>{paused=!paused;updateMotion()});

