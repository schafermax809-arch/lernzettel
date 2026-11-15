'use strict';
(()=>{
 const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
 const sites=LEARNING_SITES,subjects=['Alle','Mathe','Biologie','BRC','VWL','Informatik'],known=new Set(sites.map(site=>site.id));
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const fold=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/ß/g,'ss');
 function read(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback;}catch{return fallback;}}
 function write(key,value){try{localStorage.setItem(key,JSON.stringify(value));return true;}catch{return false;}}
 const storedFavorites=read('weiter-favorites-v1',[]),storedRecents=read('weiter-recents-v1',[]);
 let favorites=new Set(Array.isArray(storedFavorites)?storedFavorites.filter(id=>known.has(id)):[]);
 let recents=Array.isArray(storedRecents)?storedRecents.filter(item=>item&&known.has(item.id)&&Number.isFinite(item.at)).sort((a,b)=>b.at-a.at).filter((item,i,list)=>list.findIndex(other=>other.id===item.id)===i).slice(0,4):[];
 let subject='Alle',onlyFavorites=false,query='',featured=0,toastTimer=0,artAnimation=null;
 let layout=read('weiter-layout-v1','books')==='cards'?'cards':'books';
 const originalHeading=$('#hero-heading').innerHTML,originalCopy=$('.hero-copy>p').innerHTML;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)'),fine=matchMedia('(hover: hover) and (pointer: fine)');
 const star='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9Z"/></svg>';
 function toast(message){const node=$('#toast');node.textContent=message;node.hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>node.hidden=true,2400);}
 function cardMarkup(site,index){const favorite=favorites.has(site.id);return `<article class="site-card theme-${site.theme}" style="--i:${index}" data-site="${site.id}"><a class="site-link" href="${site.url}" target="_blank" rel="noopener noreferrer" data-open="${site.id}" aria-label="${esc(site.title)} öffnen, neuer Tab"><div class="site-visual"><span class="visual-index">${String(sites.indexOf(site)+1).padStart(2,'0')} / ${esc(site.subject)}</span>${PortalArt(site.art)}<span class="visual-label">${esc(site.label)}</span></div><div class="site-info"><div class="site-kicker"><span>${esc(site.subject)}</span><span>${esc(site.kicker)}</span></div><h3>${esc(site.title)}<span aria-hidden="true">↗</span></h3><p>${esc(site.description)}</p><div class="site-bottom"><span>Deine Lernseite</span><span>Öffnen</span></div></div></a><button class="favorite-button" type="button" data-favorite="${site.id}" aria-pressed="${favorite}" aria-label="${esc(site.title)} ${favorite?'aus Favoriten entfernen':'zu Favoriten hinzufügen'}">${star}</button></article>`;}
 function matchingSites(){const tokens=fold(query.trim()).split(/\s+/).filter(Boolean);return sites.filter(site=>(subject==='Alle'||subject===site.subject)&&(!onlyFavorites||favorites.has(site.id))&&tokens.every(token=>fold([site.title,site.subject,site.kicker,site.description,...site.tags].join(' ')).includes(token)));}
 function renderFavorites(){
  $('#favorites-count').textContent=String(favorites.size);$('#favorites-nav').setAttribute('aria-pressed',String(onlyFavorites));
  $$('[data-favorite]').forEach(button=>{const site=sites.find(site=>site.id===button.dataset.favorite),favorite=favorites.has(site.id);button.setAttribute('aria-pressed',String(favorite));button.setAttribute('aria-label',`${site.title} ${favorite?'aus Favoriten entfernen':'zu Favoriten hinzufügen'}`);});
  ShelfView.refreshFavorites(favorites);
 }
 function render(){
  const filtered=matchingSites();$('#site-grid').innerHTML=layout==='books'?ShelfView.markup(filtered,favorites):filtered.map(cardMarkup).join('');
  if(layout==='books')ShelfView.mounted();
  $('#results-status').textContent=`${filtered.length} ${filtered.length===1?'Lernseite':'Lernseiten'}${onlyFavorites?' in deinen Favoriten':''}`;
  $('#collection-heading').innerHTML=onlyFavorites?'Deine Favoriten<span>.</span>':layout==='books'?'Dein Bücherregal<span>.</span>':'Such dir deinen<br>nächsten Schritt aus<span>.</span>';
  $('#reset-filters').hidden=subject==='Alle'&&!query&&!onlyFavorites;
  $('#empty-state').hidden=filtered.length!==0;
  const trulyEmptyFavorites=onlyFavorites&&favorites.size===0;
  $('#empty-title').textContent=trulyEmptyFavorites?'Deine Favoriten fangen hier an.':'Noch nicht das Richtige gefunden?';
  $('#empty-description').textContent=trulyEmptyFavorites?'Setze bei einer Lernseite einen Stern. Dann findest du sie hier sofort wieder.':'Versuche einen anderen Suchbegriff oder zeige dir wieder alle Lernseiten an.';
  $$('#subject-filters button').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.subject===subject)));
  renderFavorites();
 }
 function reset(){subject='Alle';query='';onlyFavorites=false;$('#search').value='';render();}
 function applyLayout(){
  document.body.dataset.layout=layout;
  $$('[data-layout-choice]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.layoutChoice===layout)));
  $('#hero-heading').innerHTML=layout==='books'?'Dein Wissen.<br>Gut einsortiert<span class="word-dot">.</span>':originalHeading;
  $('.hero-copy>p').innerHTML=layout==='books'?'Nimm dir ein Thema aus dem Regal. Jedes Buch öffnet eine deiner Lernseiten.':originalCopy;
  $('.hero-copy>.pill-button>span').textContent=layout==='books'?'Zum Bücherregal':'Deine Sammlung entdecken';
  render();
 }
 $$('[data-layout-choice]').forEach(button=>button.addEventListener('click',()=>{layout=button.dataset.layoutChoice;write('weiter-layout-v1',layout);applyLayout();}));
 ShelfView.compact.addEventListener('change',()=>{if(layout==='books')render();});
 function scrollCollection(){const heading=$('#collection-heading');$('#sammlung').scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'start'});heading.tabIndex=-1;heading.focus({preventScroll:true});}
 function renderRecents(){
  $('#recent-section').hidden=recents.length===0;
  $('#recent-list').innerHTML=recents.map(item=>{const site=sites.find(site=>site.id===item.id);return `<a class="recent-link" href="${site.url}" data-open="${site.id}" target="_blank" rel="noopener noreferrer">${esc(site.title)}<span aria-hidden="true">↗</span></a>`;}).join('');
 }
 function recordOpen(id){if(!known.has(id))return;recents=[{id,at:Date.now()},...recents.filter(item=>item.id!==id)].slice(0,4);if(!write('weiter-recents-v1',recents))toast('Der Verlauf kann in diesem Browser gerade nicht gespeichert werden.');renderRecents();}
 function setFeatured(index){
  featured=(index+sites.length)%sites.length;const site=sites[featured],link=$('#featured-link');
  link.className=`deck-sheet front theme-${site.theme}`;link.href=site.url;link.dataset.open=site.id;link.setAttribute('aria-label',`${site.title} öffnen, neuer Tab`);
  $('#featured-subject').textContent=site.subject;$('#featured-kicker').textContent=site.kicker;$('#featured-title').textContent=site.title;$('#featured-art').innerHTML=PortalArt(site.art);
  $('#deck-current').textContent=String(featured+1).padStart(2,'0');
  $$('#deck-dots button').forEach((button,i)=>button.setAttribute('aria-pressed',String(i===featured)));
  artAnimation?.cancel();if(!reduced.matches)artAnimation=$('#featured-art').animate([{opacity:.15,transform:'translateY(10px) scale(.97)'},{opacity:1,transform:'none'}],{duration:380,easing:'cubic-bezier(.2,.8,.2,1)'});
 }
 $('#subject-filters').innerHTML=subjects.map(name=>`<button type="button" data-subject="${name}" aria-pressed="${name==='Alle'}">${name}</button>`).join('');
 $('#deck-dots').innerHTML=sites.map((site,i)=>`<button type="button" data-preview="${i}" aria-pressed="${i===0}" aria-label="Vorschau ${esc(site.title)}"></button>`).join('');
 $('#subject-filters').addEventListener('click',event=>{const button=event.target.closest('[data-subject]');if(!button)return;subject=button.dataset.subject;render();});
 $('#search').addEventListener('input',event=>{query=event.target.value;render();});
 $('#favorites-nav').addEventListener('click',()=>{onlyFavorites=!onlyFavorites;subject='Alle';query='';$('#search').value='';render();scrollCollection();});
 $('#collection-nav').addEventListener('click',()=>reset());
 $('#reset-filters').addEventListener('click',()=>{reset();$('#search').focus({preventScroll:true});});
 $('#empty-reset').addEventListener('click',()=>{reset();$('#search').focus({preventScroll:true});});
 $('#clear-recent').addEventListener('click',()=>{recents=[];write('weiter-recents-v1',[]);renderRecents();$('#collection-heading').tabIndex=-1;$('#collection-heading').focus({preventScroll:true});toast('Verlauf geleert.');});
 $('#previous-site').addEventListener('click',()=>setFeatured(featured-1));$('#next-site').addEventListener('click',()=>setFeatured(featured+1));
 $('#deck-dots').addEventListener('click',event=>{const button=event.target.closest('[data-preview]');if(button)setFeatured(Number(button.dataset.preview));});
 $('#deck-dots').addEventListener('pointerover',event=>{if(!fine.matches||reduced.matches)return;const button=event.target.closest('[data-preview]');if(button&&featured!==Number(button.dataset.preview))setFeatured(Number(button.dataset.preview));});
 $('#deck-dots').addEventListener('focusin',event=>{const button=event.target.closest('[data-preview]');if(button&&featured!==Number(button.dataset.preview))setFeatured(Number(button.dataset.preview));});
 document.addEventListener('click',event=>{
  const favorite=event.target.closest('[data-favorite]');if(favorite){
   const id=favorite.dataset.favorite;if(favorites.has(id))favorites.delete(id);else favorites.add(id);
   const saved=write('weiter-favorites-v1',[...favorites]);
   if(onlyFavorites){render();const next=$('[data-favorite]')||$('#empty-reset');next.focus({preventScroll:true});}else renderFavorites();
   if(!saved)toast('Favoriten bleiben für diesen Besuch erhalten. Speichern ist gerade nicht möglich.');return;
  }
  const link=event.target.closest('[data-open]');if(link)recordOpen(link.dataset.open);
 });
 document.addEventListener('auxclick',event=>{if(event.button===1){const link=event.target.closest('[data-open]');if(link)recordOpen(link.dataset.open);}});
 document.addEventListener('keydown',event=>{
  const editing=event.target.matches('input,textarea,select')||event.target.isContentEditable;
  if(event.key==='/'&&!editing&&!event.ctrlKey&&!event.metaKey&&!event.altKey){event.preventDefault();$('#search').focus();}
  if(event.key==='Escape'&&event.target===$('#search')&&query){event.preventDefault();query='';$('#search').value='';render();}
 });
 window.addEventListener('storage',event=>{
  if(event.key==='weiter-layout-v1'){layout=read(event.key,'books')==='cards'?'cards':'books';applyLayout();}
  if(event.key==='weiter-favorites-v1'){const value=read(event.key,[]);favorites=new Set(Array.isArray(value)?value.filter(id=>known.has(id)):[]);render();}
  if(event.key==='weiter-recents-v1'){const value=read(event.key,[]);recents=Array.isArray(value)?value.filter(item=>item&&known.has(item.id)&&Number.isFinite(item.at)).slice(0,4):[];renderRecents();}
 });
 // Motion is event driven. Nothing renders continuously while the page is idle.
 let frame=0,pending=null,activeCard=null,activeMagnet=null,deckActive=false;
 const deck=$('#deck');
 function resetCard(){if(activeCard){for(const name of ['--art-x','--art-y','--art-rotate'])activeCard.style.removeProperty(name);activeCard=null;}}
 function resetMagnet(){if(activeMagnet){activeMagnet.style.setProperty('--magnet-x','0px');activeMagnet.style.setProperty('--magnet-y','0px');activeMagnet=null;}}
 function resetDeck(){deck.style.setProperty('--deck-rx','3deg');deck.style.setProperty('--deck-ry','-6deg');deck.style.setProperty('--deck-x','0px');deck.style.setProperty('--deck-y','0px');deckActive=false;}
 function resetMotion(){cancelAnimationFrame(frame);frame=0;pending=null;resetCard();resetMagnet();resetDeck();artAnimation?.cancel();}
 function applyMotion(){
  frame=0;if(!pending)return;const {target,x,y}=pending;pending=null;
  const card=target.closest('.site-card');if(activeCard&&activeCard!==card)resetCard();
  if(card){activeCard=card;const r=card.getBoundingClientRect(),px=(x-r.left)/r.width,py=(y-r.top)/r.height;card.style.setProperty('--card-x',`${px*100}%`);card.style.setProperty('--card-y',`${py*100}%`);card.style.setProperty('--art-x',`${(px-.5)*10}px`);card.style.setProperty('--art-y',`${(py-.5)*7}px`);card.style.setProperty('--art-rotate',`${(px-.5)*3}deg`);}
  if(deck.contains(target)){const r=deck.getBoundingClientRect(),px=(x-r.left)/r.width-.5,py=(y-r.top)/r.height-.5;deck.style.setProperty('--deck-rx',`${3-py*7}deg`);deck.style.setProperty('--deck-ry',`${-6+px*10}deg`);deck.style.setProperty('--deck-x',`${px*9}px`);deck.style.setProperty('--deck-y',`${py*7}px`);deckActive=true;}else if(deckActive)resetDeck();
  const magnet=target.closest('.magnetic');if(activeMagnet&&activeMagnet!==magnet)resetMagnet();if(magnet){activeMagnet=magnet;const r=magnet.getBoundingClientRect(),px=(x-r.left)/r.width,py=(y-r.top)/r.height;magnet.style.setProperty('--magnet-x',`${(px-.5)*8}px`);magnet.style.setProperty('--magnet-y',`${(py-.5)*6}px`);magnet.style.setProperty('--fill-x',`${px*100}%`);magnet.style.setProperty('--fill-y',`${py*100}%`);}
 }
 document.addEventListener('pointermove',event=>{if(event.pointerType!=='mouse'||!fine.matches||reduced.matches)return;pending={target:event.target,x:event.clientX,y:event.clientY};if(!frame)frame=requestAnimationFrame(applyMotion);},{passive:true});
 document.addEventListener('pointerleave',resetMotion);window.addEventListener('blur',resetMotion);reduced.addEventListener('change',resetMotion);fine.addEventListener('change',resetMotion);
 applyLayout();renderRecents();setFeatured(0);
})();
