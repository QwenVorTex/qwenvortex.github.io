import{_ as Y,u as L,a as C,b as k,d as x,c as A,e as P,f as B}from"./app.CC7KlIlS.js";import{o as F}from"./index.DW-UsPWg.js";import{f as m,O as i,P as a,a4 as r,U as c,u as o,W as f,Q as u,F as b,a0 as V,c as w,N,y as n,a8 as W}from"./framework.DntyxCiH.js";import{_ as D}from"./YunPageHeader.vue_vue_type_script_setup_true_lang.CgGBEkNu.js";import"./chunks/dayjs.CCYrSalk.js";import{u as E}from"./chunks/vue-i18n.CrruEPAC.js";import"./chunks/vue-router.zIzVLjlC.js";import"./chunks/pinia.NfdmkE6C.js";import"./chunks/@vueuse/motion.D6rQsSfL.js";import"./chunks/nprogress.BahbDzmd.js";import"./animation.C_ru2laA.js";const I=["title"],O=["src","alt","on-error"],R={class:"yun-album-caption yun-title-effects text-$va-c-text inline-flex-center"},S=m({__name:"YunAlbum",props:{album:{}},setup(_){return(t,e)=>{const s=Y;return a(),i(s,{class:"yun-album-list-item",to:t.album.url},{default:r(()=>[c("figure",{class:"m-10",flex:"~ col",title:t.album.desc},[c("img",{loading:"lazy",class:"yun-album-list-cover",src:t.album.cover,alt:t.album.caption,"on-error":o(F)},null,40,O),c("figcaption",R,f(t.album.caption),1)],8,I)]),_:1},8,["to"])}}}),T={class:"yun-album-list mb-4"},z=m({__name:"YunAlbumList",props:{albums:{}},setup(_){return(t,e)=>{const s=S;return a(),u("div",T,[(a(!0),u(b,null,V(t.albums,l=>(a(),i(s,{key:l.url,album:l},null,8,["album"]))),128))])}}}),H={text:"center",class:"yun-text-light",p:"2"},ot=m({__name:"albums",setup(_){const{t}=E(),e=L(),s=C(e);k([x({"@type":"CollectionPage"})]);const l=w(()=>e.value.albums||[]);return(Q,U)=>{const d=A,g=D,y=z,p=N("RouterView"),h=P,v=B;return a(),u(b,null,[n(h,null,{default:r(()=>[n(d),n(p,null,{default:r(({Component:$})=>[(a(),i(W($),null,{"main-header":r(()=>[n(g,{title:o(s)||o(t)("title.album"),icon:o(e).icon||"i-ri-gallery-line",color:o(e).color,"page-title-class":o(e).pageTitleClass},null,8,["title","icon","color","page-title-class"])]),"main-content":r(()=>[c("div",H,f(o(t)("counter.albums",l.value.length)),1),n(y,{albums:l.value},null,8,["albums"]),n(p)]),_:2},1024))]),_:1})]),_:1}),n(v)],64)}}});export{ot as default};
