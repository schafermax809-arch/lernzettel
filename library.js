'use strict';
// Shared, browser-local chapter links and last actually viewed learning chapter.
window.LearningLibrary=(()=>{
 const catalog=[
 {
  "id": "mathe2",
  "repo": "mathe-klausur2",
  "prefix": "#/thema/",
  "chapters": [
   {
    "id": "glockenkurve",
    "title": "Glockenkurve & Flächen"
   },
   {
    "id": "standardnormal",
    "title": "Standardnormalverteilung"
   },
   {
    "id": "prognose",
    "title": "Prognoseintervalle"
   },
   {
    "id": "konfidenz",
    "title": "Konfidenzintervalle"
   },
   {
    "id": "cas",
    "title": "Normalverteilung mit CAS"
   },
   {
    "id": "approximation",
    "title": "Binomialverteilung annähern"
   },
   {
    "id": "wiederholungen",
    "title": "Mindestanzahl an Wiederholungen"
   }
  ]
 },
 {
  "id": "biotop",
  "repo": "biotop-lernplattform",
  "prefix": "#learn/",
  "chapters": [
   {
    "id": "levels",
    "title": "Systemebenen der Ökologie"
   },
   {
    "id": "ecosystem",
    "title": "Ökosystem, Biotop und Biozönose"
   },
   {
    "id": "factors",
    "title": "Abiotische und biotische Umweltfaktoren"
   },
   {
    "id": "ecosphere",
    "title": "Ecosphere und Ökosystem-Check"
   },
   {
    "id": "river",
    "title": "Fließgewässer"
   },
   {
    "id": "foodweb",
    "title": "Nahrungsketten und Nahrungsnetze"
   },
   {
    "id": "spiral",
    "title": "Stoffspiralen"
   },
   {
    "id": "rules",
    "title": "Bergmann- & Allen-Regel"
   },
   {
    "id": "terms",
    "title": "Ökologische Fachbegriffe"
   },
   {
    "id": "relations",
    "title": "Beziehungen zwischen Lebewesen"
   }
  ]
 },
 {
  "id": "brcwelt",
  "repo": "brc-lernwelt",
  "prefix": "#lesson/",
  "chapters": [
   {
    "id": "kennzahlen",
    "title": "Kennzahlen auswerten"
   },
   {
    "id": "vorwaerts",
    "title": "Vorwärtskalkulation"
   },
   {
    "id": "rueckwaerts",
    "title": "Rückwärtskalkulation"
   },
   {
    "id": "analyse",
    "title": "Stärken & Schwächen"
   },
   {
    "id": "kalkulation",
    "title": "Zuschlags- & Differenzkalkulation"
   },
   {
    "id": "makebuy",
    "title": "Eigenfertigung oder Fremdbezug"
   },
   {
    "id": "breakeven",
    "title": "Break-even verstehen"
   },
   {
    "id": "bestellmenge",
    "title": "Optimale Bestellmenge"
   },
   {
    "id": "bedarf",
    "title": "Brutto- & Nettobedarf"
   },
   {
    "id": "jit",
    "title": "Just-in-time & Nachhaltigkeit"
   },
   {
    "id": "fifo",
    "title": "FIFO & LIFO"
   },
   {
    "id": "sourcing",
    "title": "Modular Sourcing"
   },
   {
    "id": "portfolio",
    "title": "Beschaffungsportfolio"
   },
   {
    "id": "scm",
    "title": "Supply Chain Management"
   },
   {
    "id": "personalbeschaffung",
    "title": "Personal intern oder extern beschaffen"
   },
   {
    "id": "onboarding",
    "title": "Onboarding & Personalentwicklung"
   },
   {
    "id": "mbo",
    "title": "Management by Objectives"
   },
   {
    "id": "digital",
    "title": "Digital Leadership"
   },
   {
    "id": "kultur",
    "title": "Ein passendes Führungskonzept"
   },
   {
    "id": "operatoren",
    "title": "So werden aus Antworten Punkte"
   },
   {
    "id": "marktsegmentierung",
    "title": "Marktsegmentierung"
   },
   {
    "id": "produktmatrix",
    "title": "Ansoff-Produktmatrix"
   }
  ]
 },
 {
  "id": "vwl",
  "repo": "VWL",
  "prefix": "#weiter/",
  "chapters": [
   {
    "id": "0",
    "title": "Arten & Folgen der Inflation"
   },
   {
    "id": "1",
    "title": "Wie misst man Geldwertstabilität?"
   },
   {
    "id": "2",
    "title": "Verbraucherpreisindex definieren"
   },
   {
    "id": "3",
    "title": "Grenzen der Preismessung"
   },
   {
    "id": "4",
    "title": "Aufgaben & Ziele der EZB"
   },
   {
    "id": "5",
    "title": "Die Zwei-Säulen-Strategie"
   },
   {
    "id": "6",
    "title": "Instrumente der EZB"
   },
   {
    "id": "7",
    "title": "Restriktiv oder expansiv?"
   },
   {
    "id": "8",
    "title": "Instrumente gezielt einsetzen"
   },
   {
    "id": "9",
    "title": "Kausalkette erklären"
   }
  ]
 },
 {
  "id": "informatik",
  "repo": "Informatik",
  "prefix": "#weiter/",
  "chapters": [
   {
    "id": "0",
    "title": "Responsive & Grid"
   },
   {
    "id": "1",
    "title": "Mobile First"
   },
   {
    "id": "2",
    "title": "HTML-Formulare"
   },
   {
    "id": "3",
    "title": "Formular-CSS"
   },
   {
    "id": "4",
    "title": "Algorithmen"
   },
   {
    "id": "5",
    "title": "Kontrollstrukturen"
   },
   {
    "id": "6",
    "title": "PAP & Struktogramm"
   },
   {
    "id": "7",
    "title": "Abläufe verstehen"
   }
  ]
 },
 {
  "id": "mathe",
  "repo": "mathe",
  "prefix": "#weiter/",
  "chapters": [
   {
    "id": "statistik",
    "title": "Beschreibende Statistik"
   },
   {
    "id": "mehrstufig",
    "title": "Mehrstufige Zufallsversuche"
   },
   {
    "id": "diskret",
    "title": "Diskrete Verteilungen"
   },
   {
    "id": "binomial",
    "title": "Binomialverteilung"
   }
  ]
 },
 {
  "id": "brc",
  "repo": "BRC",
  "prefix": "#lernen/",
  "chapters": [
   {
    "id": "d1",
    "title": "Primär-, Sekundär- und Tertiärbedarf"
   },
   {
    "id": "d2",
    "title": "Vom Brutto- zum Nettobedarf"
   },
   {
    "id": "b1",
    "title": "Das Prinzip der optimalen Bestellmenge"
   },
   {
    "id": "b2",
    "title": "Die Formeln, die du brauchst"
   },
   {
    "id": "b3",
    "title": "Mindestbestand & richtig runden"
   },
   {
    "id": "b4",
    "title": "Mengenrabatt in der Entscheidungstabelle"
   },
   {
    "id": "b5",
    "title": "Kostenkurven lesen und zeichnen"
   },
   {
    "id": "b6",
    "title": "Kritische Lagermenge: Eigen oder fremd?"
   },
   {
    "id": "l1",
    "title": "Die vier Lagerarten"
   },
   {
    "id": "l2",
    "title": "Welche Aufgaben haben die Lager?"
   },
   {
    "id": "l3",
    "title": "Systematisch, frei oder chaotisch?"
   },
   {
    "id": "l4",
    "title": "Eigenlager oder Fremdlager?"
   },
   {
    "id": "l5",
    "title": "FIFO, LIFO, FEFO & Cross-Docking"
   },
   {
    "id": "l6",
    "title": "Bestände, Kosten & Kapitalbindung"
   },
   {
    "id": "s1",
    "title": "Was ist ein Sourcing-Konzept?"
   },
   {
    "id": "s2",
    "title": "Single, Dual & Multiple Sourcing"
   },
   {
    "id": "s3",
    "title": "Local, Domestic & Global Sourcing"
   },
   {
    "id": "s4",
    "title": "Modular Sourcing"
   },
   {
    "id": "i1",
    "title": "Industrie 4.0 – kurz erklärt"
   }
  ]
 }
];
 const scriptURL=new URL(document.currentScript.src),root=new URL('../',scriptURL);
 const key=id=>'weiter-resume-v1:'+id;
 function read(name){try{return JSON.parse(localStorage.getItem(name));}catch{return null;}}
 function setting(name){try{return localStorage.getItem(name);}catch{return null;}}
 function config(id){return catalog.find(book=>book.id===id);}
 function chapter(id,chapterId){return config(id)?.chapters.find(item=>item.id===String(chapterId));}
 function href(id,chapterId,course='main'){
  const book=config(id);if(!book||!String(chapterId).match(/^[a-z0-9-]+$/i))return null;
  const url=new URL(book.repo+'/',root);url.hash=book.prefix+chapterId;
  if(id==='brcwelt')url.searchParams.set('kurs',course==='glaeser'?'glaeser':'main');
  return url.href;
 }
 function resume(id){
  const book=config(id);if(!book)return null;
  const saved=read(key(id));
  if(saved&&saved.site===id&&typeof saved.chapter==='string'&&typeof saved.title==='string'&&saved.title.length<=180&&Number.isFinite(saved.at)&&(chapter(id,saved.chapter)||id==='brcwelt'&&/^[a-z0-9-]+$/i.test(saved.chapter))){
   return {...saved,url:href(id,saved.chapter,saved.course)};
  }
  let last=null,course='main';
  if(id==='mathe2')last=read('mathe-v1-last-lesson');
  if(id==='biotop')last=read('biotop-progress-v1')?.lastTopic;
  if(id==='brc')last=read('brc-lernraum-v1')?.last;
  if(id==='brcwelt'){course=setting('brc-course-v1')==='glaeser'?'glaeser':'main';last=read(course==='main'?'brc-lernwelt-v1':'brc-lernwelt-glaeser-v1')?.lastRead;}
  const match=chapter(id,last);
  return match?{site:id,chapter:match.id,title:match.title,url:href(id,match.id,course),course,at:null}:null;
 }
 function remember(id,item,course='main'){
  if(!item||!href(id,item.id,course))return;
  const old=read(key(id));if(old?.chapter===item.id&&old?.course===course)return;
  try{localStorage.setItem(key(id),JSON.stringify({site:id,chapter:item.id,title:item.title.slice(0,180),course,at:Date.now()}));}catch{}
 }
 const active=catalog.find(book=>location.pathname===('/'+book.repo)||location.pathname.startsWith('/'+book.repo+'/'));
 // Course selection must happen before BRC's deferred module initializes.
 if(active?.id==='brcwelt'){const course=new URL(location.href).searchParams.get('kurs');if(course==='main'||course==='glaeser')try{localStorage.setItem('brc-course-v1',course);}catch{}}
 function applyVirtualRoute(){
  if(!active||active.prefix!=='#weiter/'||!location.hash.startsWith(active.prefix))return;
  const item=chapter(active.id,decodeURIComponent(location.hash.slice(active.prefix.length)));if(!item)return;
  if(active.id==='vwl'&&typeof state!=='undefined'&&typeof render==='function'){state.mode='learn';state.index=Number(item.id);state.flip=false;render();}
  if(active.id==='informatik'&&typeof nav==='function'){lesson=Number(item.id);nav(1);}
  if(active.id==='mathe'&&typeof renderLernen==='function'){document.querySelectorAll('.nav-btn').forEach(button=>button.classList.toggle('active',button.dataset.page==='lernen'));renderLernen(item.id);}
 }
 function snapshot(){
  if(!active)return;
  let item=null,course='main';
  if(active.prefix!=='#weiter/'&&location.hash.startsWith(active.prefix)){
   const id=decodeURIComponent(location.hash.slice(active.prefix.length).split('/')[0]);
   item=chapter(active.id,id);
   if(active.id==='brcwelt'){
    course=document.body.dataset.course==='glaeser'?'glaeser':'main';
    if(course==='glaeser'||!item){const heading=document.querySelector('#main h1');if(/^[a-z0-9-]+$/i.test(id)&&heading&&!heading.textContent.includes('gibt es nicht'))item={id,title:heading.textContent.trim()};else item=null;}
   }
  }
  if(active.id==='vwl'&&typeof state!=='undefined'&&state.mode==='learn')item=chapter(active.id,state.index);
  if(active.id==='informatik'&&typeof current!=='undefined'&&current===1)item=chapter(active.id,lesson);
  if(active.id==='mathe'){const filter=document.querySelector('#topicFilter');if(filter)item=chapter(active.id,filter.value);}
  if(item){
   remember(active.id,item,course);
   if(active.prefix==='#weiter/'&&location.hash!==active.prefix+item.id)history.replaceState(null,'',active.prefix+item.id);
  }else if(active.prefix==='#weiter/'&&location.hash.startsWith(active.prefix))history.replaceState(null,'',location.pathname+location.search);
 }
 function boot(){
  if(!active)return;
  applyVirtualRoute();snapshot();
  let frame=0;const schedule=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(snapshot);};
  document.addEventListener('click',schedule,{passive:true});document.addEventListener('change',schedule,{passive:true});
  window.addEventListener('hashchange',()=>{applyVirtualRoute();schedule();});
  window.addEventListener('pagehide',snapshot);window.addEventListener('focus',schedule);
  // Captures module-rendered pages after their asynchronous data becomes available.
  const host=document.querySelector('#main,#app,#content');if(host)new MutationObserver(schedule).observe(host,{childList:true,subtree:true});
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
 return {catalog,chapters:id=>config(id)?.chapters||[],href,resume};
})();

