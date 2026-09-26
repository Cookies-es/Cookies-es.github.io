
const links=[['dashboard','⌂','Главная','index.html'],['calculator','◈','КБЖУ','calculator.html'],['workouts','ϟ','Тренировки','workouts.html'],['recipes','🥗','Рецепты','recipes.html'],['reviews','✳','Отзывы','reviews.html'],['profile','◎','Профиль','profile.html']];
const page=location.pathname.split('/').pop()||'index.html';
const active=links.find(x=>x[3]===page)||links[0];
function nav(){let html=`<aside class="sidebar"><div class="brand"><div class="mark">ϟ</div>Train<span class="gradient">Tracker</span></div><div class="navlabel">ПЛАТФОРМА</div><nav class="nav">${links.map(x=>`<a class="${x[3]===page?'active':''}" href="${x[3]}"><span>${x[1]}</span>${x[2]}</a>`).join('')}</nav><div class="sidebottom">⚡ Твой темп. Твой прогресс.<br><br><a href="login.html" onclick="logout()">↗ Выйти из аккаунта</a></div></aside><nav class="bottomnav">${links.slice(0,5).map(x=>`<a class="${x[3]===page?'active':''}" href="${x[3]}"><span>${x[1]}</span>${x[2]}</a>`).join('')}</nav>`;document.body.insertAdjacentHTML('afterbegin',html)}
function shell(title,sub='Твой фитнес. Твои правила.'){nav();document.getElementById('app').innerHTML=`<main class="main"><header class="top"><div class="mobilebrand brand"><div class="mark">ϟ</div>Train<span class="gradient">Tracker</span></div><div><div class="eyebrow">TRAINTRACKER / ${active[2].toUpperCase()}</div><div class="muted" style="font-size:12px;margin-top:5px">${sub}</div></div><span class="pill date">${new Date().toLocaleDateString('ru-RU',{day:'numeric',month:'long'})}</span></header>${title}<div class="footer">TRAINTRACKER © 2026 · Двигайся в своём темпе.</div></main>`}
function getUser(){return JSON.parse(localStorage.getItem('tt_user')||'null')}
function saveUser(u){localStorage.setItem('tt_user',JSON.stringify(u))}
function toast(t){let e=document.createElement('div');e.className='toast';e.textContent=t;document.body.append(e);setTimeout(()=>e.remove(),2800)}
function logout(){localStorage.removeItem('tt_session')}
function requireAuth(){if(!getUser()||localStorage.getItem('tt_session')!=='1'){location.href='login.html';return false}return true}
function calc(u){let bmr=10*Number(u.weight)+6.25*Number(u.height)-5*Number(u.age)+(u.gender==='male'?5:-161);let kcal=Math.round(bmr*Number(u.activity));let p=Math.round(Number(u.weight)*1.4),f=Math.round(Number(u.weight)*.9),c=Math.max(0,Math.round((kcal-p*4-f*9)/4));return{kcal,p,f,c}}
function fmt(n){return Number(n||0).toLocaleString('ru-RU')}
function allReviews(){return JSON.parse(localStorage.getItem('tt_reviews')||'[]')}
function allPlans(){return JSON.parse(localStorage.getItem('tt_plans')||'[]')}
