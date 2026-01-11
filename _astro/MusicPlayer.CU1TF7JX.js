import{o as Xa,a as Ga,i as Ka}from"./lifecycle.D1DLjaLH.js";import{af as Ja,a6 as Qa,aA as Za,aB as tr,aC as He,u as Xe,aD as er,aa as Ge,aE as ar,V as Ke,aF as ht,a3 as rr,aG as ir,c as rt,f as Q,a as V,p as nr,b as sr,s as l,aj as q,g as t,aH as Ne,m as S,d as vt,h as d,e as s,r as n,n as lr,t as At}from"./template.DQxjygcm.js";import{a as or,s as G}from"./render.Clo92Wsj.js";import{i as B}from"./if.SXcYkDJs.js";import{e as cr,i as dr}from"./each.CZT3H_mf.js";import{a as $,s as Z,c as Ve}from"./props.CQ3QyfCF.js";import{e as p}from"./utils.BNwjkPnd.js";import{s as Ye}from"./event-modifiers.gvea_hMH.js";import{I as m}from"./Icon.CoZcY4qz.js";import{m as Dt}from"./config.CNHcugV5.js";import{I as ur}from"./zh_TW.BW8a2Ucy.js";import{i as vr}from"./translation.DQCip_iH.js";const fr=()=>performance.now(),K={tick:c=>requestAnimationFrame(c),now:()=>fr(),tasks:new Set};function Je(){const c=K.now();K.tasks.forEach(i=>{i.c(c)||(K.tasks.delete(i),i.f())}),K.tasks.size!==0&&K.tick(Je)}function pr(c){let i;return K.tasks.size===0&&K.tick(Je),{promise:new Promise(y=>{K.tasks.add(i={c,f:y})}),abort(){K.tasks.delete(i)}}}function zt(c,i){Ge(()=>{c.dispatchEvent(new CustomEvent(i))})}function mr(c){if(c==="float")return"cssFloat";if(c==="offset")return"cssOffset";if(c.startsWith("--"))return c;const i=c.split("-");return i.length===1?i[0]:i[0]+i.slice(1).map(y=>y[0].toUpperCase()+y.slice(1)).join("")}function qe(c){const i={},y=c.split(";");for(const M of y){const[k,b]=M.split(":");if(!k||b===void 0)break;const v=mr(k.trim());i[v]=b.trim()}return i}const br=c=>c;function hr(c,i,y,M){var k=(c&er)!==0,b="both",v,E=i.inert,A=i.style.overflow,g,x;function T(){return Ge(()=>v??=y()(i,M?.()??{},{direction:b}))}var D={is_global:k,in(){i.inert=E,zt(i,"introstart"),g=re(i,T(),x,1,()=>{zt(i,"introend"),g?.abort(),g=v=void 0,i.style.overflow=A})},out(L){i.inert=!0,zt(i,"outrostart"),x=re(i,T(),g,0,()=>{zt(i,"outroend"),L?.()})},stop:()=>{g?.abort(),x?.abort()}},W=Ja;if((W.nodes.t??=[]).push(D),or){var f=k;if(!f){for(var u=W.parent;u&&(u.f&Qa)!==0;)for(;(u=u.parent)&&(u.f&Za)===0;);f=!u||(u.f&tr)!==0}f&&He(()=>{Xe(()=>D.in())})}}function re(c,i,y,M,k){var b=M===1;if(ar(i)){var v,E=!1;return Ke(()=>{if(!E){var L=i({direction:b?"in":"out"});v=re(c,L,y,M,k)}}),{abort:()=>{E=!0,v?.abort()},deactivate:()=>v.deactivate(),reset:()=>v.reset(),t:()=>v.t()}}if(y?.deactivate(),!i?.duration)return k(),{abort:ht,deactivate:ht,reset:ht,t:()=>M};const{delay:A=0,css:g,tick:x,easing:T=br}=i;var D=[];if(b&&y===void 0&&(x&&x(0,1),g)){var W=qe(g(0,1));D.push(W,W)}var f=()=>1-M,u=c.animate(D,{duration:A,fill:"forwards"});return u.onfinish=()=>{u.cancel();var L=y?.t()??1-M;y?.abort();var j=M-L,U=i.duration*Math.abs(j),I=[];if(U>0){var _=!1;if(g)for(var F=Math.ceil(U/16.666666666666668),a=0;a<=F;a+=1){var J=L+j*T(a/F),H=qe(g(J,1-J));I.push(H),_||=H.overflow==="hidden"}_&&(c.style.overflow="hidden"),f=()=>{var it=u.currentTime;return L+j*T(it/U)},x&&pr(()=>{if(u.playState!=="running")return!1;var it=f();return x(it,1-it),!0})}u=c.animate(I,{duration:U,fill:"forwards"}),u.onfinish=()=>{f=()=>M,x?.(M,1-M),k()}},{abort:()=>{u&&(u.cancel(),u.effect=null,u.onfinish=ht)},deactivate:()=>{k=ht},reset:()=>{M===0&&x?.(1,0)},t:()=>f()}}function Oe(c,i){return c===i||c?.[ir]===i}function Ue(c={},i,y,M){return He(()=>{var k,b;return rr(()=>{k=b,b=[],Xe(()=>{c!==y(...b)&&(i(c,...b),k&&Oe(y(...k),c)&&i(null,...k))})}),()=>{Ke(()=>{b&&Oe(y(...b),c)&&i(null,...b)})}}),c}function gr(c){const i=c-1;return i*i*i+1}function xr(c,{delay:i=0,duration:y=400,easing:M=gr,axis:k="y"}={}){const b=getComputedStyle(c),v=+b.opacity,E=k==="y"?"height":"width",A=parseFloat(b[E]),g=k==="y"?["top","bottom"]:["left","right"],x=g.map(j=>`${j[0].toUpperCase()}${j.slice(1)}`),T=parseFloat(b[`padding${x[0]}`]),D=parseFloat(b[`padding${x[1]}`]),W=parseFloat(b[`margin${x[0]}`]),f=parseFloat(b[`margin${x[1]}`]),u=parseFloat(b[`border${x[0]}Width`]),L=parseFloat(b[`border${x[1]}Width`]);return{delay:i,duration:y,easing:M,css:j=>`overflow: hidden;opacity: ${Math.min(j*20,1)*v};${E}: ${j*A}px;padding-${g[0]}: ${j*T}px;padding-${g[1]}: ${j*D}px;margin-${g[0]}: ${j*W}px;margin-${g[1]}: ${j*f}px;border-${g[0]}-width: ${j*u}px;border-${g[1]}-width: ${j*L}px;min-${E}: 0`}}var yr=vt('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),_r=vt('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),wr=vt('<span class="text-sm text-[var(--content-meta)]"></span>'),kr=vt('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>'),Er=vt('<div class="playlist-panel float-panel fixed bottom-20 right-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80"></div></div>'),Lr=vt(`<!> <div><div role="button" tabindex="0" aria-label="显示音乐播放器"><!></div> <div><div class="flex items-center gap-3"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden cursor-pointer" role="button" tabindex="0"><img alt="封面"/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div> <div class="flex-1 min-w-0 cursor-pointer" role="button" tabindex="0" aria-label="展开音乐播放器"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div></div> <div><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"><img alt="封面"/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button title="播放列表"><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="播放进度" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button></div> <div class="bottom-controls flex items-center gap-2"><button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="音量控制" aria-valuemin="0" aria-valuemax="100"><div></div></div> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="收起播放器"><!></button></div></div> <!></div> <style>.orb-player {
	position: relative;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
}
.orb-player::before {
	content: '';
	position: absolute;
	inset: -2px;
	background: linear-gradient(45deg, var(--primary), transparent, var(--primary));
	border-radius: 50%;
	z-index: -1;
	opacity: 0;
	transition: opacity 0.3s ease;
}
.orb-player:hover::before {
	opacity: 0.3;
	animation: rotate 2s linear infinite;
}
.orb-player .animate-pulse {
	animation: musicWave 1.5s ease-in-out infinite;
}
@keyframes rotate {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}
@keyframes musicWave {
	0%, 100% { transform: scaleY(0.5); }
	50% { transform: scaleY(1); }
}
.music-player.hidden-mode {
	width: 48px;
	height: 48px;
}
.music-player {
    max-width: 320px;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
}
.mini-player {
    width: 280px;
    position: absolute;
    bottom: 0;
    right: 0;
    /*left: 0;*/
}
.expanded-player {
    width: 320px;
    position: absolute;
    bottom: 0;
    right: 0;
}
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}
.progress-section div:hover,
.bottom-controls > div:hover {
    transform: scaleY(1.2);
    transition: transform 0.2s ease;
}
@media (max-width: 768px) {
    .music-player {
        max-width: 280px;
        /*left: 8px !important;*/
        bottom: 8px !important;
        right: 8px !important;
    }
    .music-player.expanded {
        width: calc(100vw - 16px);
        max-width: none;
        /*left: 8px !important;*/
        right: 8px !important;
    }
    .playlist-panel {
        width: calc(100vw - 16px) !important;
        /*left: 8px !important;*/
        right: 8px !important;
        max-width: none;
    }
    .controls {
        gap: 8px;
    }
    .controls button {
        width: 36px;
        height: 36px;
    }
    .controls button:nth-child(3) {
        width: 44px;
        height: 44px;
    }
}
@media (max-width: 480px) {
    .music-player {
        max-width: 260px;
    }
    .song-title {
        font-size: 14px;
    }
    .song-artist {
        font-size: 12px;
    }
    .controls {
        gap: 6px;
        margin-bottom: 12px;
    }
    .controls button {
        width: 32px;
        height: 32px;
    }
    .controls button:nth-child(3) {
        width: 40px;
        height: 40px;
    }
    .playlist-item {
        padding: 8px 12px;
    }
    .playlist-item .w-10 {
        width: 32px;
        height: 32px;
    }
}
@keyframes slide-up {
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
.animate-slide-up {
    animation: slide-up 0.3s ease-out;
}
@media (hover: none) and (pointer: coarse) {
    .music-player button,
    .playlist-item {
        min-height: 44px;
    }
    .progress-section > div,
    .bottom-controls > div:nth-child(2) {
        height: 12px;
    }
}
/* 自定义旋转动画，停止时保持当前位置 */
@keyframes spin-continuous {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
.cover-container img {
    animation: spin-continuous 3s linear infinite;
    animation-play-state: paused;
}
.cover-container img.spinning {
    animation-play-state: running;
}
/* 让主题色按钮更有视觉反馈 */
button.bg-\\[var\\(--primary\\)\\] {
    box-shadow: 0 0 0 2px var(--primary);
    border: none;
}</style>`,1);function Rr(c,i){sr(i,!1);let y=Dt.meting_api,M=Dt.id,k=Dt.server,b=Dt.type,v=S(!1),E=S(!1),A=S(!1),g=S(!1),x=S(0),T=S(0),D=S(.7),W=S(!1),f=S(!1),u=S(!1),L=S(0),j=S(""),U=S(!1),I=S({title:"Sample Song",artist:"Sample Artist",cover:"/favicon/favicon.ico",url:"",duration:0}),_=S([]),F=S(0),a=S(),J=S(),H=S();async function it(){l(f,!0);const r=y.replace(":server",k).replace(":type",b).replace(":id",M).replace(":auth","").replace(":r",Date.now().toString());try{const C=await fetch(r);if(!C.ok)throw new Error("meting api error");const X=await C.json();l(_,X.map(N=>{let ft=N.name??N.title??"未知歌曲",kt=N.artist??N.author??"未知艺术家",R=N.duration??0;return R>1e4&&(R=Math.floor(R/1e3)),(!Number.isFinite(R)||R<=0)&&(R=0),{id:N.id,title:ft,artist:kt,cover:N.pic??"",url:N.url??"",duration:R}})),t(_).length>0&&ne(t(_)[0]),l(f,!1)}catch{$t("Meting 歌单获取失败"),l(f,!1)}}function Bt(){!t(a)||!t(I).url||(t(v)?t(a).pause():t(a).play())}function gt(){l(E,!t(E)),t(E)&&(l(g,!1),l(A,!1))}function xt(){l(A,!t(A)),t(A)&&(l(E,!1),l(g,!1))}function ie(){l(g,!t(g))}function Qe(){l(u,!t(u)),t(u)&&l(L,0)}function Ze(){l(L,(t(L)+1)%3),t(L)!==0&&l(u,!1)}function ta(){if(t(_).length<=1)return;const r=t(F)>0?t(F)-1:t(_).length-1;yt(r)}function It(){if(t(_).length<=1)return;let r;if(t(u))do r=Math.floor(Math.random()*t(_).length);while(r===t(F)&&t(_).length>1);else r=t(F)<t(_).length-1?t(F)+1:0;yt(r)}function yt(r){if(r<0||r>=t(_).length)return;const C=t(v);l(F,r),t(a)&&t(a).pause(),ne(t(_)[t(F)]),(C||!t(v))&&setTimeout(()=>{t(a)&&(t(a).readyState>=2?t(a).play().catch(()=>{}):t(a).addEventListener("canplay",()=>{t(a).play().catch(()=>{})},{once:!0}))},100)}function _t(r){return r.startsWith("http://")||r.startsWith("https://")||r.startsWith("/")?r:`/${r}`}function ne(r){!r||!t(a)||(l(I,{...r}),r.url?(l(f,!0),q(a,t(a).currentTime=0),l(x,0),l(T,r.duration??0),t(a).removeEventListener("loadeddata",se),t(a).removeEventListener("error",oe),t(a).removeEventListener("loadstart",ce),t(a).addEventListener("loadeddata",se,{once:!0}),t(a).addEventListener("error",oe,{once:!0}),t(a).addEventListener("loadstart",ce,{once:!0}),q(a,t(a).src=_t(r.url)),t(a).load()):l(f,!1))}let Rt=!1;function se(){if(l(f,!1),t(a)?.duration&&t(a).duration>1&&(l(T,Math.floor(t(a).duration)),t(_)[t(F)]&&q(_,t(_)[t(F)].duration=t(T)),q(I,t(I).duration=t(T))),t(v)){const r=t(a).play();r!==void 0&&r.catch(C=>{console.warn("自动播放被拦截，等待用户交互:",C),Rt=!0})}}function le(){if(Rt&&t(a)&&t(v)){const r=t(a).play();r!==void 0&&r.then(()=>{Rt=!1}).catch(()=>{})}}function oe(r){l(f,!1),$t(`无法播放 "${t(I).title}"，正在尝试下一首...`),t(_).length>1?setTimeout(()=>It(),1e3):$t("播放列表中没有可用的歌曲")}function ce(){}function $t(r){l(j,r),l(U,!0),setTimeout(()=>{l(U,!1)},3e3)}function ea(){l(U,!1)}function aa(r){if(!t(a)||!t(J))return;const C=t(J).getBoundingClientRect(),N=(r.clientX-C.left)/C.width*t(T);q(a,t(a).currentTime=N),l(x,N)}let wt=S(!1),Wt=!1,Nt=null,nt=null;function ra(r){t(H)&&(Wt=!0,Nt=t(H).getBoundingClientRect(),de(r.clientX))}function ia(r){Wt&&(l(wt,!0),!nt&&(nt=requestAnimationFrame(()=>{de(r.clientX),nt=null})))}function na(){Wt=!1,l(wt,!1),Nt=null,nt&&(cancelAnimationFrame(nt),nt=null)}function de(r){if(!t(a)||!t(H))return;const C=Nt||t(H).getBoundingClientRect(),X=Math.max(0,Math.min(1,(r-C.left)/C.width));l(D,X),q(a,t(a).volume=t(D)),l(W,t(D)===0)}function ue(){t(a)&&(l(W,!t(W)),q(a,t(a).muted=t(W)))}function ve(r){if(!Number.isFinite(r)||r<0)return"0:00";const C=Math.floor(r/60),X=Math.floor(r%60);return`${C}:${X.toString().padStart(2,"0")}`}function sa(){t(a)&&(t(a).addEventListener("play",()=>{l(v,!0)}),t(a).addEventListener("pause",()=>{l(v,!1)}),t(a).addEventListener("timeupdate",()=>{l(x,t(a).currentTime)}),t(a).addEventListener("ended",()=>{t(L)===1?(q(a,t(a).currentTime=0),t(a).play().catch(()=>{})):t(L)===2||t(u)?It():l(v,!1)}),t(a).addEventListener("error",r=>{l(f,!1)}),t(a).addEventListener("stalled",()=>{}),t(a).addEventListener("waiting",()=>{}))}const fe=["click","keydown","touchstart"];Xa(()=>{l(a,new Audio),q(a,t(a).volume=t(D)),sa(),fe.forEach(r=>{document.addEventListener(r,le,{capture:!0})}),it()}),Ga(()=>{typeof document<"u"&&fe.forEach(r=>{document.removeEventListener(r,le,{capture:!0})}),t(a)&&(t(a).pause(),q(a,t(a).src=""))}),Ka();var pe=rt();p("mousemove",Ne,ia),p("mouseup",Ne,na);var la=Q(pe);{var oa=r=>{var C=Lr(),X=Q(C);{var N=e=>{var h=yr(),w=s(h),P=s(w);m(P,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var z=d(P,2),o=s(z,!0);n(z);var et=d(z,2),Ct=s(et);m(Ct,{icon:"material-symbols:close",class:"text-lg"}),n(et),n(w),n(h),At(()=>G(o,t(j))),p("click",et,ea),V(e,h)};B(X,e=>{t(U)&&e(N)})}var ft=d(X,2);let kt;var R=s(ft);let me;var ca=s(R);{var da=e=>{m(e,{icon:"eos-icons:loading",class:"text-white text-lg"})},ua=e=>{var h=rt(),w=Q(h);{var P=o=>{var et=_r();V(o,et)},z=o=>{m(o,{icon:"material-symbols:music-note",class:"text-white text-lg"})};B(w,o=>{t(v)?o(P):o(z,!1)},!0)}V(e,h)};B(ca,e=>{t(f)?e(da):e(ua,!1)})}n(R);var Et=d(R,2);let be;var he=s(Et),st=s(he),Vt=s(st);let ge;var xe=d(Vt,2),va=s(xe);{var fa=e=>{m(e,{icon:"eos-icons:loading",class:"text-white text-xl"})},pa=e=>{var h=rt(),w=Q(h);{var P=o=>{m(o,{icon:"material-symbols:pause",class:"text-white text-xl"})},z=o=>{m(o,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};B(w,o=>{t(v)?o(P):o(z,!1)},!0)}V(e,h)};B(va,e=>{t(f)?e(fa):e(pa,!1)})}n(xe),n(st);var pt=d(st,2),Yt=s(pt),ma=s(Yt,!0);n(Yt);var ye=d(Yt,2),ba=s(ye,!0);n(ye),n(pt);var _e=d(pt,2),Lt=s(_e),ha=s(Lt);m(ha,{icon:"material-symbols:visibility-off",class:"text-lg"}),n(Lt);var qt=d(Lt,2),ga=s(qt);m(ga,{icon:"material-symbols:expand-less",class:"text-lg"}),n(qt),n(_e),n(he),n(Et);var St=d(Et,2);let we;var Ot=s(St),Ut=s(Ot),ke=s(Ut);let Ee;n(Ut);var Ht=d(Ut,2),Xt=s(Ht),xa=s(Xt,!0);n(Xt);var Gt=d(Xt,2),ya=s(Gt,!0);n(Gt);var Le=d(Gt,2),_a=s(Le);n(Le),n(Ht);var Se=d(Ht,2),Mt=s(Se),wa=s(Mt);m(wa,{icon:"material-symbols:visibility-off",class:"text-lg"}),n(Mt);var Tt=d(Mt,2);let Me;var ka=s(Tt);m(ka,{icon:"material-symbols:queue-music",class:"text-lg"}),n(Tt),n(Se),n(Ot);var Kt=d(Ot,2),lt=s(Kt),Ea=s(lt);n(lt),Ue(lt,e=>l(J,e),()=>t(J)),n(Kt);var Jt=d(Kt,2),ot=s(Jt);let Te;var La=s(ot);m(La,{icon:"material-symbols:shuffle",class:"text-lg"}),n(ot);var mt=d(ot,2),Sa=s(mt);m(Sa,{icon:"material-symbols:skip-previous",class:"text-xl"}),n(mt);var ct=d(mt,2);let Fe;var Ma=s(ct);{var Ta=e=>{m(e,{icon:"eos-icons:loading",class:"text-xl"})},Fa=e=>{var h=rt(),w=Q(h);{var P=o=>{m(o,{icon:"material-symbols:pause",class:"text-xl"})},z=o=>{m(o,{icon:"material-symbols:play-arrow",class:"text-xl"})};B(w,o=>{t(v)?o(P):o(z,!1)},!0)}V(e,h)};B(Ma,e=>{t(f)?e(Ta):e(Fa,!1)})}n(ct);var bt=d(ct,2),ja=s(bt);m(ja,{icon:"material-symbols:skip-next",class:"text-xl"}),n(bt);var Ft=d(bt,2);let je;var Ca=s(Ft);{var Pa=e=>{m(e,{icon:"material-symbols:repeat-one",class:"text-lg"})},Aa=e=>{var h=rt(),w=Q(h);{var P=o=>{m(o,{icon:"material-symbols:repeat",class:"text-lg"})},z=o=>{m(o,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};B(w,o=>{t(L)===2?o(P):o(z,!1)},!0)}V(e,h)};B(Ca,e=>{t(L)===1?e(Pa):e(Aa,!1)})}n(Ft),n(Jt);var Ce=d(Jt,2),jt=s(Ce),Da=s(jt);{var za=e=>{m(e,{icon:"material-symbols:volume-off",class:"text-lg"})},Ba=e=>{var h=rt(),w=Q(h);{var P=o=>{m(o,{icon:"material-symbols:volume-down",class:"text-lg"})},z=o=>{m(o,{icon:"material-symbols:volume-up",class:"text-lg"})};B(w,o=>{t(D)<.5?o(P):o(z,!1)},!0)}V(e,h)};B(Da,e=>{t(W)||t(D)===0?e(za):e(Ba,!1)})}n(jt);var tt=d(jt,2),Pe=s(tt);let Ae;n(tt),Ue(tt,e=>l(H,e),()=>t(H));var Qt=d(tt,2),Ia=s(Qt);m(Ia,{icon:"material-symbols:expand-more",class:"text-lg"}),n(Qt),n(Ce),n(St);var Ra=d(St,2);{var $a=e=>{var h=Er(),w=s(h),P=s(w),z=s(P,!0);n(P);var o=d(P,2),et=s(o);m(et,{icon:"material-symbols:close",class:"text-lg"}),n(o),n(w);var Ct=d(w,2);cr(Ct,5,()=>t(_),dr,(Zt,dt,O)=>{var at=kr();let De;var te=s(at),Wa=s(te);{var Na=Y=>{m(Y,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},Va=Y=>{var $e=rt(),Oa=Q($e);{var Ua=ut=>{m(ut,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},Ha=ut=>{var We=wr();We.textContent=O+1,V(ut,We)};B(Oa,ut=>{O===t(F)?ut(Ua):ut(Ha,!1)},!0)}V(Y,$e)};B(Wa,Y=>{O===t(F)&&t(v)?Y(Na):Y(Va,!1)})}n(te);var ee=d(te,2),ze=s(ee);n(ee);var Be=d(ee,2),Pt=s(Be);let Ie;var Ya=s(Pt,!0);n(Pt);var ae=d(Pt,2);let Re;var qa=s(ae,!0);n(ae),n(Be),n(at),At(Y=>{De=$(at,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,De,{"bg-[var(--btn-plain-bg)]":O===t(F),"text-[var(--primary)]":O===t(F)}),Z(at,"aria-label",`播放 ${t(dt).title??""} - ${t(dt).artist??""}`),Z(ze,"src",Y),Z(ze,"alt",t(dt).title),Ie=$(Pt,1,"font-medium truncate",null,Ie,{"text-[var(--primary)]":O===t(F),"text-90":O!==t(F)}),G(Ya,t(dt).title),Re=$(ae,1,"text-sm text-[var(--content-meta)] truncate",null,Re,{"text-[var(--primary)]":O===t(F)}),G(qa,t(dt).artist)},[()=>_t(t(dt).cover)]),p("click",at,()=>yt(O)),p("keydown",at,Y=>{(Y.key==="Enter"||Y.key===" ")&&(Y.preventDefault(),yt(O))}),V(Zt,at)}),n(Ct),n(h),At(Zt=>G(z,Zt),[()=>vr(ur.playlist)]),p("click",o,ie),hr(3,h,()=>xr,()=>({duration:300,axis:"y"})),V(e,h)};B(Ra,e=>{t(g)&&e($a)})}n(ft),lr(2),At((e,h,w,P)=>{kt=$(ft,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,kt,{expanded:t(E),"hidden-mode":t(A)}),me=$(R,1,"orb-player w-12 h-12 bg-[var(--primary)] rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95",null,me,{"opacity-0":!t(A),"scale-0":!t(A),"pointer-events-none":!t(A)}),be=$(Et,1,"mini-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-3 transition-all duration-500 ease-in-out",null,be,{"opacity-0":t(E)||t(A),"scale-95":t(E)||t(A),"pointer-events-none":t(E)||t(A)}),Z(st,"aria-label",t(v)?"暂停":"播放"),Z(Vt,"src",e),ge=$(Vt,1,"w-full h-full object-cover transition-transform duration-300",null,ge,{spinning:t(v)&&!t(f),"animate-pulse":t(f)}),G(ma,t(I).title),G(ba,t(I).artist),we=$(St,1,"expanded-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out",null,we,{"opacity-0":!t(E),"scale-95":!t(E),"pointer-events-none":!t(E)}),Z(ke,"src",h),Ee=$(ke,1,"w-full h-full object-cover transition-transform duration-300",null,Ee,{spinning:t(v)&&!t(f),"animate-pulse":t(f)}),G(xa,t(I).title),G(ya,t(I).artist),G(_a,`${w??""} / ${P??""}`),Me=$(Tt,1,"btn-plain w-8 h-8 rounded-lg flex items-center justify-center",null,Me,{"text-[var(--primary)]":t(g)}),Z(lt,"aria-valuenow",t(T)>0?t(x)/t(T)*100:0),Ve(Ea,`width: ${t(T)>0?t(x)/t(T)*100:0}%`),Te=$(ot,1,"w-10 h-10 rounded-lg",null,Te,{"btn-regular":t(u),"btn-plain":!t(u)}),ot.disabled=t(_).length<=1,mt.disabled=t(_).length<=1,Fe=$(ct,1,"btn-regular w-12 h-12 rounded-full",null,Fe,{"opacity-50":t(f)}),ct.disabled=t(f),bt.disabled=t(_).length<=1,je=$(Ft,1,"w-10 h-10 rounded-lg",null,je,{"btn-regular":t(L)>0,"btn-plain":t(L)===0}),Z(tt,"aria-valuenow",t(D)*100),Ae=$(Pe,1,"h-full bg-[var(--primary)] rounded-full transition-all",null,Ae,{"duration-100":!t(wt),"duration-0":t(wt)}),Ve(Pe,`width: ${t(D)*100}%`)},[()=>_t(t(I).cover),()=>_t(t(I).cover),()=>ve(t(x)),()=>ve(t(T))]),p("click",R,xt),p("keydown",R,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),xt())}),p("click",st,Bt),p("keydown",st,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),Bt())}),p("click",pt,gt),p("keydown",pt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),gt())}),p("click",Lt,Ye(xt)),p("click",qt,Ye(gt)),p("click",Mt,xt),p("click",Tt,ie),p("click",lt,aa),p("keydown",lt,e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault(),t(J).getBoundingClientRect();const w=.5*t(T);t(a)&&(q(a,t(a).currentTime=w),l(x,w))}}),p("click",ot,Qe),p("click",mt,ta),p("click",ct,Bt),p("click",bt,It),p("click",Ft,Ze),p("click",jt,ue),p("mousedown",tt,ra),p("keydown",tt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key==="Enter"&&ue())}),p("click",Qt,gt),V(r,C)};B(la,r=>{r(oa)})}V(c,pe),nr()}export{Rr as default};
