const CACHE='imm-vnotch-v96';
const APP_SHELL=['./index.html','./manifest.json','./icon-192.png','./icon-512.png','./banpu-heart.png'];

self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE);
    await cache.addAll(APP_SHELL);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET') return;
  event.respondWith((async()=>{
    if(req.mode==='navigate'){
      try{
        const live=await fetch(req,{cache:'no-store'});
        return live;
      }catch(e){
        return (await caches.match('./index.html')) || new Response('IMM Water Monitoring offline shell belum tersedia.',{status:503});
      }
    }
    try{
      const live=await fetch(req,{cache:'no-store'});
      return live;
    }catch(e){
      return (await caches.match(req,{ignoreSearch:true})) || new Response('',{status:504});
    }
  })());
});
