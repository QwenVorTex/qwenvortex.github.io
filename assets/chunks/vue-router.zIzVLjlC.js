const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.ITmHbD_9.js","assets/YunPostList.vue_vue_type_script_setup_true_lang.CjidfzDY.js","assets/app.CC7KlIlS.js","assets/framework.DntyxCiH.js","assets/chunks/dayjs.CCYrSalk.js","assets/chunks/vue-i18n.CrruEPAC.js","assets/chunks/pinia.NfdmkE6C.js","assets/chunks/@vueuse/motion.D6rQsSfL.js","assets/chunks/nprogress.BahbDzmd.js","assets/app.CKVoGlqJ.css","assets/YunPostMeta.vue_vue_type_style_index_0_lang.D4qLfdrx.js","assets/index.DW-UsPWg.js","assets/animation.C_ru2laA.js","assets/YunPostMeta.DCrVMfuT.css","assets/post.Bsp5l8Hn.js","assets/YunPostList.BfWGcc9d.css","assets/_...path_.B17ze7lO.js","assets/404.BmiCHv62.js","assets/ValaxyMain.vue_vue_type_style_index_0_lang.Dj2j0HJ9.js","assets/YunComment.vue_vue_type_style_index_0_lang.7l6OCcLl.js","assets/index.C5okkQwF.js","assets/YunComment.BL40W_Hn.css","assets/YunPageHeader.vue_vue_type_script_setup_true_lang.CgGBEkNu.js","assets/ValaxyMain.BHXg_53O.css","assets/index.DN5moUBP.js","assets/site.CWO27rP0.js","assets/index.DhjcD6GY.js","assets/index.3d13rA-y.js","assets/index.0hswvTxd.js","assets/index.DfXt1eUW.css","assets/_page_.DfhjZqI3.js","assets/index.BwLeRhC_.js","assets/hello-valaxy.BkVk2II6.js","assets/index.Bf1DJXhx.js"])))=>i.map(i=>d[i]);
import{k as U,s as oe,f as rt,u as se,z as At,r as bt,c as $,i as ot,A as _e,e as Lt,w as Ot,p as Tt,l as Ct,_ as N}from"../framework.DntyxCiH.js";var Ae=(e,t,n)=>typeof e=="function"?e(t,n):e;/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const W=typeof document<"u";function st(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function kt(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&st(e.default)}const b=Object.assign;function Re(e,t){const n={};for(const r in t){const o=t[r];n[r]=V(o)?o.map(e):e(o)}return n}const ae=()=>{},V=Array.isArray,at=/#/g,xt=/&/g,It=/\//g,Dt=/=/g,Nt=/\?/g,it=/\+/g,Vt=/%5B/g,Mt=/%5D/g,ct=/%5E/g,jt=/%60/g,lt=/%7B/g,$t=/%7C/g,ut=/%7D/g,Ht=/%20/g;function Te(e){return encodeURI(""+e).replace($t,"|").replace(Vt,"[").replace(Mt,"]")}function Kt(e){return Te(e).replace(lt,"{").replace(ut,"}").replace(ct,"^")}function be(e){return Te(e).replace(it,"%2B").replace(Ht,"+").replace(at,"%23").replace(xt,"%26").replace(jt,"`").replace(lt,"{").replace(ut,"}").replace(ct,"^")}function Bt(e){return be(e).replace(Dt,"%3D")}function Gt(e){return Te(e).replace(at,"%23").replace(Nt,"%3F")}function zt(e){return e==null?"":Gt(e).replace(It,"%2F")}function ie(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const qt=/\/$/,Ut=e=>e.replace(qt,"");function we(e,t,n="/"){let r,o={},f="",h="";const p=t.indexOf("#");let s=t.indexOf("?");return p<s&&p>=0&&(s=-1),s>-1&&(r=t.slice(0,s),f=t.slice(s+1,p>-1?p:t.length),o=e(f)),p>-1&&(r=r||t.slice(0,p),h=t.slice(p,t.length)),r=Ft(r??t,n),{fullPath:r+(f&&"?")+f+h,path:r,query:o,hash:ie(h)}}function Zt(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Me(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Wt(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&Q(t.matched[r],n.matched[o])&&ft(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Q(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ft(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Yt(e[n],t[n]))return!1;return!0}function Yt(e,t){return V(e)?je(e,t):V(t)?je(t,e):e===t}function je(e,t){return V(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Ft(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let f=n.length-1,h,p;for(h=0;h<r.length;h++)if(p=r[h],p!==".")if(p==="..")f>1&&f--;else break;return n.slice(0,f).join("/")+"/"+r.slice(h).join("/")}const K={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var X;(function(e){e.pop="pop",e.push="push"})(X||(X={}));var q;(function(e){e.back="back",e.forward="forward",e.unknown=""})(q||(q={}));const Pe="";function dt(e){if(!e)if(W){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ut(e)}const Qt=/^[^#]+#/;function ht(e,t){return e.replace(Qt,"#")+t}function Xt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const de=()=>({left:window.scrollX,top:window.scrollY});function Jt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Xt(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function $e(e,t){return(history.state?history.state.position-t:-1)+e}const Le=new Map;function en(e,t){Le.set(e,t)}function tn(e){const t=Le.get(e);return Le.delete(e),t}let nn=()=>location.protocol+"//"+location.host;function pt(e,t){const{pathname:n,search:r,hash:o}=t,f=e.indexOf("#");if(f>-1){let p=o.includes(e.slice(f))?e.slice(f).length:1,s=o.slice(p);return s[0]!=="/"&&(s="/"+s),Me(s,"")}return Me(n,e)+r+o}function rn(e,t,n,r){let o=[],f=[],h=null;const p=({state:c})=>{const u=pt(e,location),m=n.value,y=t.value;let w=0;if(c){if(n.value=u,t.value=c,h&&h===m){h=null;return}w=y?c.position-y.position:0}else r(u);o.forEach(S=>{S(n.value,m,{delta:w,type:X.pop,direction:w?w>0?q.forward:q.back:q.unknown})})};function s(){h=n.value}function l(c){o.push(c);const u=()=>{const m=o.indexOf(c);m>-1&&o.splice(m,1)};return f.push(u),u}function d(){const{history:c}=window;c.state&&c.replaceState(b({},c.state,{scroll:de()}),"")}function a(){for(const c of f)c();f=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:s,listen:l,destroy:a}}function He(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?de():null}}function on(e){const{history:t,location:n}=window,r={value:pt(e,n)},o={value:t.state};o.value||f(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function f(s,l,d){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+s:nn()+e+s;try{t[d?"replaceState":"pushState"](l,"",c),o.value=l}catch(u){console.error(u),n[d?"replace":"assign"](c)}}function h(s,l){const d=b({},t.state,He(o.value.back,s,o.value.forward,!0),l,{position:o.value.position});f(s,d,!0),r.value=s}function p(s,l){const d=b({},o.value,t.state,{forward:s,scroll:de()});f(d.current,d,!0);const a=b({},He(r.value,s,null),{position:d.position+1},l);f(s,a,!1),r.value=s}return{location:r,state:o,push:p,replace:h}}function $n(e){e=dt(e);const t=on(e),n=rn(e,t.state,t.location,t.replace);function r(f,h=!0){h||n.pauseListeners(),history.go(f)}const o=b({location:"",base:e,go:r,createHref:ht.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Hn(e=""){let t=[],n=[Pe],r=0;e=dt(e);function o(p){r++,r!==n.length&&n.splice(r),n.push(p)}function f(p,s,{direction:l,delta:d}){const a={direction:l,delta:d,type:X.pop};for(const c of t)c(p,s,a)}const h={location:Pe,state:{},base:e,createHref:ht.bind(null,e),replace(p){n.splice(r--,1),o(p)},push(p,s){o(p)},listen(p){return t.push(p),()=>{const s=t.indexOf(p);s>-1&&t.splice(s,1)}},destroy(){t=[],n=[Pe],r=0},go(p,s=!0){const l=this.location,d=p<0?q.back:q.forward;r=Math.max(0,Math.min(r+p,n.length-1)),s&&f(this.location,l,{direction:d,delta:p})}};return Object.defineProperty(h,"location",{enumerable:!0,get:()=>n[r]}),h}function sn(e){return typeof e=="string"||e&&typeof e=="object"}function mt(e){return typeof e=="string"||typeof e=="symbol"}const gt=Symbol("");var Ke;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ke||(Ke={}));function J(e,t){return b(new Error,{type:e,[gt]:!0},t)}function j(e,t){return e instanceof Error&&gt in e&&(t==null||!!(e.type&t))}const Be="[^/]+?",an={sensitive:!1,strict:!1,start:!0,end:!0},cn=/[.+*?^${}()[\]/\\]/g;function ln(e,t){const n=b({},an,t),r=[];let o=n.start?"^":"";const f=[];for(const l of e){const d=l.length?[]:[90];n.strict&&!l.length&&(o+="/");for(let a=0;a<l.length;a++){const c=l[a];let u=40+(n.sensitive?.25:0);if(c.type===0)a||(o+="/"),o+=c.value.replace(cn,"\\$&"),u+=40;else if(c.type===1){const{value:m,repeatable:y,optional:w,regexp:S}=c;f.push({name:m,repeatable:y,optional:w});const E=S||Be;if(E!==Be){u+=10;try{new RegExp(`(${E})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${m}" (${E}): `+O.message)}}let R=y?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;a||(R=w&&l.length<2?`(?:/${R})`:"/"+R),w&&(R+="?"),o+=R,u+=20,w&&(u+=-8),y&&(u+=-20),E===".*"&&(u+=-50)}d.push(u)}r.push(d)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const h=new RegExp(o,n.sensitive?"":"i");function p(l){const d=l.match(h),a={};if(!d)return null;for(let c=1;c<d.length;c++){const u=d[c]||"",m=f[c-1];a[m.name]=u&&m.repeatable?u.split("/"):u}return a}function s(l){let d="",a=!1;for(const c of e){(!a||!d.endsWith("/"))&&(d+="/"),a=!1;for(const u of c)if(u.type===0)d+=u.value;else if(u.type===1){const{value:m,repeatable:y,optional:w}=u,S=m in l?l[m]:"";if(V(S)&&!y)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const E=V(S)?S.join("/"):S;if(!E)if(w)c.length<2&&(d.endsWith("/")?d=d.slice(0,-1):a=!0);else throw new Error(`Missing required param "${m}"`);d+=E}}return d||"/"}return{re:h,score:r,keys:f,parse:p,stringify:s}}function un(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function vt(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const f=un(r[n],o[n]);if(f)return f;n++}if(Math.abs(o.length-r.length)===1){if(Ge(r))return 1;if(Ge(o))return-1}return o.length-r.length}function Ge(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const fn={type:0,value:""},dn=/[a-zA-Z0-9_]/;function hn(e){if(!e)return[[]];if(e==="/")return[[fn]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(u){throw new Error(`ERR (${n})/"${l}": ${u}`)}let n=0,r=n;const o=[];let f;function h(){f&&o.push(f),f=[]}let p=0,s,l="",d="";function a(){l&&(n===0?f.push({type:0,value:l}):n===1||n===2||n===3?(f.length>1&&(s==="*"||s==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),f.push({type:1,value:l,regexp:d,repeatable:s==="*"||s==="+",optional:s==="*"||s==="?"})):t("Invalid state to consume buffer"),l="")}function c(){l+=s}for(;p<e.length;){if(s=e[p++],s==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:s==="/"?(l&&a(),h()):s===":"?(a(),n=1):c();break;case 4:c(),n=r;break;case 1:s==="("?n=2:dn.test(s)?c():(a(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&p--);break;case 2:s===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+s:n=3:d+=s;break;case 3:a(),n=0,s!=="*"&&s!=="?"&&s!=="+"&&p--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),a(),h(),o}function pn(e,t,n){const r=ln(hn(e.path),n),o=b(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function mn(e,t){const n=[],r=new Map;t=Ze({strict:!1,end:!0,sensitive:!1},t);function o(a){return r.get(a)}function f(a,c,u){const m=!u,y=qe(a);y.aliasOf=u&&u.record;const w=Ze(t,a),S=[y];if("alias"in a){const O=typeof a.alias=="string"?[a.alias]:a.alias;for(const k of O)S.push(qe(b({},y,{components:u?u.record.components:y.components,path:k,aliasOf:u?u.record:y})))}let E,R;for(const O of S){const{path:k}=O;if(c&&k[0]!=="/"){const I=c.record.path,x=I[I.length-1]==="/"?"":"/";O.path=c.record.path+(k&&x+k)}if(E=pn(O,c,w),u?u.alias.push(E):(R=R||E,R!==E&&R.alias.push(E),m&&a.name&&!Ue(E)&&h(a.name)),yt(E)&&s(E),y.children){const I=y.children;for(let x=0;x<I.length;x++)f(I[x],E,u&&u.children[x])}u=u||E}return R?()=>{h(R)}:ae}function h(a){if(mt(a)){const c=r.get(a);c&&(r.delete(a),n.splice(n.indexOf(c),1),c.children.forEach(h),c.alias.forEach(h))}else{const c=n.indexOf(a);c>-1&&(n.splice(c,1),a.record.name&&r.delete(a.record.name),a.children.forEach(h),a.alias.forEach(h))}}function p(){return n}function s(a){const c=yn(a,n);n.splice(c,0,a),a.record.name&&!Ue(a)&&r.set(a.record.name,a)}function l(a,c){let u,m={},y,w;if("name"in a&&a.name){if(u=r.get(a.name),!u)throw J(1,{location:a});w=u.record.name,m=b(ze(c.params,u.keys.filter(R=>!R.optional).concat(u.parent?u.parent.keys.filter(R=>R.optional):[]).map(R=>R.name)),a.params&&ze(a.params,u.keys.map(R=>R.name))),y=u.stringify(m)}else if(a.path!=null)y=a.path,u=n.find(R=>R.re.test(y)),u&&(m=u.parse(y),w=u.record.name);else{if(u=c.name?r.get(c.name):n.find(R=>R.re.test(c.path)),!u)throw J(1,{location:a,currentLocation:c});w=u.record.name,m=b({},c.params,a.params),y=u.stringify(m)}const S=[];let E=u;for(;E;)S.unshift(E.record),E=E.parent;return{name:w,path:y,params:m,matched:S,meta:vn(S)}}e.forEach(a=>f(a));function d(){n.length=0,r.clear()}return{addRoute:f,resolve:l,removeRoute:h,clearRoutes:d,getRoutes:p,getRecordMatcher:o}}function ze(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function qe(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:gn(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function gn(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Ue(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function vn(e){return e.reduce((t,n)=>b(t,n.meta),{})}function Ze(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function yn(e,t){let n=0,r=t.length;for(;n!==r;){const f=n+r>>1;vt(e,t[f])<0?r=f:n=f+1}const o=En(e);return o&&(r=t.lastIndexOf(o,r-1)),r}function En(e){let t=e;for(;t=t.parent;)if(yt(t)&&vt(e,t)===0)return t}function yt({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function _n(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const f=r[o].replace(it," "),h=f.indexOf("="),p=ie(h<0?f:f.slice(0,h)),s=h<0?null:ie(f.slice(h+1));if(p in t){let l=t[p];V(l)||(l=t[p]=[l]),l.push(s)}else t[p]=s}return t}function We(e){let t="";for(let n in e){const r=e[n];if(n=Bt(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(V(r)?r.map(f=>f&&be(f)):[r&&be(r)]).forEach(f=>{f!==void 0&&(t+=(t.length?"&":"")+n,f!=null&&(t+="="+f))})}return t}function Rn(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=V(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const wn=Symbol(""),Ye=Symbol(""),he=Symbol(""),Ce=Symbol(""),Oe=Symbol("");function ne(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function G(e,t,n,r,o,f=h=>h()){const h=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((p,s)=>{const l=c=>{c===!1?s(J(4,{from:n,to:t})):c instanceof Error?s(c):sn(c)?s(J(2,{from:t,to:c})):(h&&r.enterCallbacks[o]===h&&typeof c=="function"&&h.push(c),p())},d=f(()=>e.call(r&&r.instances[o],t,n,l));let a=Promise.resolve(d);e.length<3&&(a=a.then(l)),a.catch(c=>s(c))})}function Se(e,t,n,r,o=f=>f()){const f=[];for(const h of e)for(const p in h.components){let s=h.components[p];if(!(t!=="beforeRouteEnter"&&!h.instances[p]))if(st(s)){const d=(s.__vccOpts||s)[t];d&&f.push(G(d,n,r,h,p,o))}else{let l=s();f.push(()=>l.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${p}" at "${h.path}"`);const a=kt(d)?d.default:d;h.mods[p]=d,h.components[p]=a;const u=(a.__vccOpts||a)[t];return u&&G(u,n,r,h,p,o)()}))}}return f}function Fe(e){const t=U(he),n=U(Ce),r=$(()=>{const s=se(e.to);return t.resolve(s)}),o=$(()=>{const{matched:s}=r.value,{length:l}=s,d=s[l-1],a=n.matched;if(!d||!a.length)return-1;const c=a.findIndex(Q.bind(null,d));if(c>-1)return c;const u=Qe(s[l-2]);return l>1&&Qe(d)===u&&a[a.length-1].path!==u?a.findIndex(Q.bind(null,s[l-2])):c}),f=$(()=>o.value>-1&&Ln(n.params,r.value.params)),h=$(()=>o.value>-1&&o.value===n.matched.length-1&&ft(n.params,r.value.params));function p(s={}){if(bn(s)){const l=t[se(e.replace)?"replace":"push"](se(e.to)).catch(ae);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:$(()=>r.value.href),isActive:f,isExactActive:h,navigate:p}}function Pn(e){return e.length===1?e[0]:e}const Sn=rt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Fe,setup(e,{slots:t}){const n=bt(Fe(e)),{options:r}=U(he),o=$(()=>({[Xe(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Xe(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const f=t.default&&Pn(t.default(n));return e.custom?f:ot("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},f)}}}),An=Sn;function bn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ln(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!V(o)||o.length!==r.length||r.some((f,h)=>f!==o[h]))return!1}return!0}function Qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xe=(e,t,n)=>e??t??n,On=rt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=U(Oe),o=$(()=>e.route||r.value),f=U(Ye,0),h=$(()=>{let l=se(f);const{matched:d}=o.value;let a;for(;(a=d[l])&&!a.components;)l++;return l}),p=$(()=>o.value.matched[h.value]);_e(Ye,$(()=>h.value+1)),_e(wn,p),_e(Oe,o);const s=Lt();return Ot(()=>[s.value,p.value,e.name],([l,d,a],[c,u,m])=>{d&&(d.instances[a]=l,u&&u!==d&&l&&l===c&&(d.leaveGuards.size||(d.leaveGuards=u.leaveGuards),d.updateGuards.size||(d.updateGuards=u.updateGuards))),l&&d&&(!u||!Q(d,u)||!c)&&(d.enterCallbacks[a]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=o.value,d=e.name,a=p.value,c=a&&a.components[d];if(!c)return Je(n.default,{Component:c,route:l});const u=a.props[d],m=u?u===!0?l.params:typeof u=="function"?u(l):u:null,w=ot(c,b({},m,t,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(a.instances[d]=null)},ref:s}));return Je(n.default,{Component:w,route:l})||w}}});function Je(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Tn=On;function Kn(e){const t=mn(e.routes,e),n=e.parseQuery||_n,r=e.stringifyQuery||We,o=e.history,f=ne(),h=ne(),p=ne(),s=oe(K);let l=K;W&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Re.bind(null,i=>""+i),a=Re.bind(null,zt),c=Re.bind(null,ie);function u(i,v){let g,_;return mt(i)?(g=t.getRecordMatcher(i),_=v):_=i,t.addRoute(_,g)}function m(i){const v=t.getRecordMatcher(i);v&&t.removeRoute(v)}function y(){return t.getRoutes().map(i=>i.record)}function w(i){return!!t.getRecordMatcher(i)}function S(i,v){if(v=b({},v||s.value),typeof i=="string"){const P=we(n,i,v.path),C=t.resolve({path:P.path},v),te=o.createHref(P.fullPath);return b(P,C,{params:c(C.params),hash:ie(P.hash),redirectedFrom:void 0,href:te})}let g;if(i.path!=null)g=b({},i,{path:we(n,i.path,v.path).path});else{const P=b({},i.params);for(const C in P)P[C]==null&&delete P[C];g=b({},i,{params:a(P)}),v.params=a(v.params)}const _=t.resolve(g,v),L=i.hash||"";_.params=d(c(_.params));const T=Zt(r,b({},i,{hash:Kt(L),path:_.path})),A=o.createHref(T);return b({fullPath:T,hash:L,query:r===We?Rn(i.query):i.query||{}},_,{redirectedFrom:void 0,href:A})}function E(i){return typeof i=="string"?we(n,i,s.value.path):b({},i)}function R(i,v){if(l!==i)return J(8,{from:v,to:i})}function O(i){return x(i)}function k(i){return O(b(E(i),{replace:!0}))}function I(i){const v=i.matched[i.matched.length-1];if(v&&v.redirect){const{redirect:g}=v;let _=typeof g=="function"?g(i):g;return typeof _=="string"&&(_=_.includes("?")||_.includes("#")?_=E(_):{path:_},_.params={}),b({query:i.query,hash:i.hash,params:_.path!=null?{}:i.params},_)}}function x(i,v){const g=l=S(i),_=s.value,L=i.state,T=i.force,A=i.replace===!0,P=I(g);if(P)return x(b(E(P),{state:typeof P=="object"?b({},L,P.state):L,force:T,replace:A}),v||g);const C=g;C.redirectedFrom=v;let te;return!T&&Wt(r,_,g)&&(te=J(16,{to:C,from:_}),Ne(_,_,!0,!1)),(te?Promise.resolve(te):ke(C,_)).catch(D=>j(D)?j(D,2)?D:ve(D):ge(D,C,_)).then(D=>{if(D){if(j(D,2))return x(b({replace:A},E(D.to),{state:typeof D.to=="object"?b({},L,D.to.state):L,force:T}),v||C)}else D=Ie(C,_,!0,A,L);return xe(C,_,D),D})}function H(i,v){const g=R(i,v);return g?Promise.reject(g):Promise.resolve()}function pe(i){const v=le.values().next().value;return v&&typeof v.runWithContext=="function"?v.runWithContext(i):i()}function ke(i,v){let g;const[_,L,T]=Cn(i,v);g=Se(_.reverse(),"beforeRouteLeave",i,v);for(const P of _)P.leaveGuards.forEach(C=>{g.push(G(C,i,v))});const A=H.bind(null,i,v);return g.push(A),Z(g).then(()=>{g=[];for(const P of f.list())g.push(G(P,i,v));return g.push(A),Z(g)}).then(()=>{g=Se(L,"beforeRouteUpdate",i,v);for(const P of L)P.updateGuards.forEach(C=>{g.push(G(C,i,v))});return g.push(A),Z(g)}).then(()=>{g=[];for(const P of T)if(P.beforeEnter)if(V(P.beforeEnter))for(const C of P.beforeEnter)g.push(G(C,i,v));else g.push(G(P.beforeEnter,i,v));return g.push(A),Z(g)}).then(()=>(i.matched.forEach(P=>P.enterCallbacks={}),g=Se(T,"beforeRouteEnter",i,v,pe),g.push(A),Z(g))).then(()=>{g=[];for(const P of h.list())g.push(G(P,i,v));return g.push(A),Z(g)}).catch(P=>j(P,8)?P:Promise.reject(P))}function xe(i,v,g){p.list().forEach(_=>pe(()=>_(i,v,g)))}function Ie(i,v,g,_,L){const T=R(i,v);if(T)return T;const A=v===K,P=W?history.state:{};g&&(_||A?o.replace(i.fullPath,b({scroll:A&&P&&P.scroll},L)):o.push(i.fullPath,L)),s.value=i,Ne(i,v,g,A),ve()}let ee;function Pt(){ee||(ee=o.listen((i,v,g)=>{if(!Ve.listening)return;const _=S(i),L=I(_);if(L){x(b(L,{replace:!0,force:!0}),_).catch(ae);return}l=_;const T=s.value;W&&en($e(T.fullPath,g.delta),de()),ke(_,T).catch(A=>j(A,12)?A:j(A,2)?(x(b(E(A.to),{force:!0}),_).then(P=>{j(P,20)&&!g.delta&&g.type===X.pop&&o.go(-1,!1)}).catch(ae),Promise.reject()):(g.delta&&o.go(-g.delta,!1),ge(A,_,T))).then(A=>{A=A||Ie(_,T,!1),A&&(g.delta&&!j(A,8)?o.go(-g.delta,!1):g.type===X.pop&&j(A,20)&&o.go(-1,!1)),xe(_,T,A)}).catch(ae)}))}let me=ne(),De=ne(),ce;function ge(i,v,g){ve(i);const _=De.list();return _.length?_.forEach(L=>L(i,v,g)):console.error(i),Promise.reject(i)}function St(){return ce&&s.value!==K?Promise.resolve():new Promise((i,v)=>{me.add([i,v])})}function ve(i){return ce||(ce=!i,Pt(),me.list().forEach(([v,g])=>i?g(i):v()),me.reset()),i}function Ne(i,v,g,_){const{scrollBehavior:L}=e;if(!W||!L)return Promise.resolve();const T=!g&&tn($e(i.fullPath,0))||(_||!g)&&history.state&&history.state.scroll||null;return Tt().then(()=>L(i,v,T)).then(A=>A&&Jt(A)).catch(A=>ge(A,i,v))}const ye=i=>o.go(i);let Ee;const le=new Set,Ve={currentRoute:s,listening:!0,addRoute:u,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:w,getRoutes:y,resolve:S,options:e,push:O,replace:k,go:ye,back:()=>ye(-1),forward:()=>ye(1),beforeEach:f.add,beforeResolve:h.add,afterEach:p.add,onError:De.add,isReady:St,install(i){const v=this;i.component("RouterLink",An),i.component("RouterView",Tn),i.config.globalProperties.$router=v,Object.defineProperty(i.config.globalProperties,"$route",{enumerable:!0,get:()=>se(s)}),W&&!Ee&&s.value===K&&(Ee=!0,O(o.location).catch(L=>{}));const g={};for(const L in K)Object.defineProperty(g,L,{get:()=>s.value[L],enumerable:!0});i.provide(he,v),i.provide(Ce,At(g)),i.provide(Oe,s);const _=i.unmount;le.add(i),i.unmount=function(){le.delete(i),le.size<1&&(l=K,ee&&ee(),ee=null,s.value=K,Ee=!1,ce=!1),_()}}};function Z(i){return i.reduce((v,g)=>v.then(()=>pe(g)),Promise.resolve())}return Ve}function Cn(e,t){const n=[],r=[],o=[],f=Math.max(t.matched.length,e.matched.length);for(let h=0;h<f;h++){const p=t.matched[h];p&&(e.matched.find(l=>Q(l,p))?r.push(p):n.push(p));const s=e.matched[h];s&&(t.matched.find(l=>Q(l,s))||o.push(s))}return[n,r,o]}function kn(){return U(he)}function xn(e){return U(Ce)}var M=Symbol("loaders"),F=Symbol("loaderEntries"),Et=Symbol(),B=Symbol(),z=Symbol(),fe=Symbol(),re=Symbol(),ue=Symbol(),_t=Symbol();function et(e){return e&&e[Et]}var Rt;function tt(){return Rt||[]}function Y(e){Rt=e&&e.length?e:null}var In=Object.assign,Dn=Symbol();function Nn({router:e,app:t,effect:n,isSSR:r,errors:o=[],selectNavigationResult:f=h=>h[0].value}){if(e[F]!=null)return()=>{};e[F]=new WeakMap,e[fe]=t,e[_t]=!!r;const h=n.run(()=>oe(!1));t.provide(Dn,h);const p=e.beforeEach(a=>{var u;e[B]&&((u=e[B].meta[re])==null||u.abort()),e[B]=a,a.meta[M]=new Set,a.meta[re]=new AbortController,a.meta[ue]=[];const c=[];for(const m of a.matched)if(!m.meta[M]){m.meta[M]=new Set(m.meta.loaders||[]);for(const y in m.components){const w=m.components[y],S=(Vn(w)?w():Promise.resolve(w)).then(E=>{if(typeof E!="function"){for(const R in E){const O=E[R];et(O)&&m.meta[M].add(O)}if(Array.isArray(E.__loaders))for(const R of E.__loaders)et(R)&&m.meta[M].add(R)}});c.push(S)}}return Promise.all(c).then(()=>{for(const m of a.matched)for(const y of m.meta[M])a.meta[M].add(y)})}),s=e.beforeResolve((a,c)=>{const u=Array.from(a.meta[M]);return Y([]),h.value=!0,Promise.all(u.map(m=>{const{server:y,lazy:w,errors:S}=m._.options;if(!y&&r)return;const E=n.run(()=>t.runWithContext(()=>m._.load(a,e,c)));return!r&&Ae(w,a,c)?void 0:E.catch(R=>{if(!S)throw R;if(S===!0){if(Array.isArray(o)?o.some(O=>R instanceof O):o(R))return}else if(Array.isArray(S)?S.some(O=>R instanceof O):S(R))return;throw R})})).then(()=>{if(a.meta[ue].length)return f(a.meta[ue])}).catch(m=>m instanceof wt?m.value:Promise.reject(m)).finally(()=>{Y([]),h.value=!1})}),l=e.afterEach((a,c,u)=>{var m;if(u){if((m=a.meta[re])==null||m.abort(u),j(u,16))for(const y of a.meta[M])y._.getEntry(e).resetPending()}else for(const y of a.meta[M]){const{commit:w,lazy:S}=y._.options;if(w==="after-load"){const E=y._.getEntry(e);E&&(!Ae(S,a,c)||!E.isLoading.value)&&E.commit(a)}}e[B]===a&&(e[B]=null)}),d=e.onError((a,c)=>{var u;(u=c.meta[re])==null||u.abort(a),e[B]===c&&(e[B]=null)});return()=>{delete e[F],delete e[fe],p(),s(),l(),d()}}function Vn(e){return typeof e=="function"&&!("displayName"in e)&&!("props"in e)&&!("emits"in e)&&!("__vccOpts"in e)}var wt=class{constructor(e){this.value=e}};function Bn(e,t){const n=Ct(!0),r=Nn(In({app:e,effect:n},t)),{unmount:o}=e;e.unmount=()=>{n.stop(),r(),o.call(e)}}const Gn=[{path:"/",name:"/",component:()=>N(()=>import("../index.ITmHbD_9.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])),meta:{layout:"home",frontmatter:{time_warning:15552e6}}},{path:"/:path(.*)",name:"/[...path]",component:()=>N(()=>import("../_...path_.B17ze7lO.js"),__vite__mapDeps([16,3])),meta:{layout:404,frontmatter:{time_warning:15552e6}}},{path:"/404",name:"/404",component:()=>N(()=>import("../404.BmiCHv62.js"),__vite__mapDeps([17,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,layout:404,date:"2025-03-16T07:07:58.236Z",updated:"2025-03-16T07:07:58.236Z"},excerpt:"",layout:404}},{path:"/about",children:[{path:"",name:"/about/",component:()=>N(()=>import("../index.DN5moUBP.js"),__vite__mapDeps([24,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,title:"关于我",date:"2025-03-16T07:07:58.236Z",updated:"2025-03-16T07:07:58.236Z"},excerpt:""}},{path:"site",name:"/about/site",component:()=>N(()=>import("../site.CWO27rP0.js"),__vite__mapDeps([25,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,title:"关于站点",date:"2025-03-16T07:07:58.236Z",updated:"2025-03-16T07:07:58.236Z"},excerpt:""}}],meta:{frontmatter:{time_warning:15552e6}}},{path:"/archives",children:[{path:"",name:"/archives/",component:()=>N(()=>import("../index.DhjcD6GY.js"),__vite__mapDeps([26,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,layout:"archives",nav:!1,comment:!1,date:"2025-03-16T07:07:58.236Z",updated:"2025-03-16T07:07:58.236Z"},excerpt:"",layout:"archives"}}],meta:{frontmatter:{time_warning:15552e6}}},{path:"/categories",children:[{path:"",name:"/categories/",component:()=>N(()=>import("../index.3d13rA-y.js"),__vite__mapDeps([27,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,layout:"categories",nav:!1,toc:!1,icon:"i-ri-folder-2-line",date:"2025-03-16T07:07:58.236Z",updated:"2025-03-16T07:07:58.236Z"},excerpt:"",layout:"categories"}}],meta:{frontmatter:{time_warning:15552e6}}},{path:"/links",children:[{path:"",name:"/links/",component:()=>N(()=>import("../index.0hswvTxd.js"),__vite__mapDeps([28,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23,11,12,29])),meta:{frontmatter:{time_warning:15552e6,title:"我的小伙伴们",keywords:"链接",description:"云游的小伙伴们",random:!0,date:"2025-03-16T07:07:58.236Z",updated:"2025-03-16T07:07:58.236Z"},excerpt:""}}],meta:{frontmatter:{time_warning:15552e6}}},{path:"/page",children:[{path:":page",name:"/page/[page]",component:()=>N(()=>import("../_page_.DfhjZqI3.js"),__vite__mapDeps([30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])),meta:{frontmatter:{time_warning:15552e6}}}],meta:{frontmatter:{time_warning:15552e6},layout:"home"}},{path:"/posts",children:[{path:"",name:"/posts/",component:()=>N(()=>import("../index.BwLeRhC_.js"),__vite__mapDeps([31,2,3,4,5,6,7,8,9,1,10,11,12,13,14,15])),meta:{frontmatter:{time_warning:15552e6},layout:"posts"}},{path:"hello-valaxy",name:"/posts/hello-valaxy",component:()=>N(()=>import("../hello-valaxy.BkVk2II6.js"),__vite__mapDeps([32,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,title:"Hello, Valaxy!",date:"2022-04-01",updated:"2022-04-01",categories:"Valaxy 笔记",tags:["valaxy","笔记"],top:1},layout:"post",excerpt:""}}],meta:{frontmatter:{time_warning:15552e6},layout:"posts"}},{path:"/tags",children:[{path:"",name:"/tags/",component:()=>N(()=>import("../index.Bf1DJXhx.js"),__vite__mapDeps([33,18,2,3,4,5,6,7,8,9,19,20,21,22,14,23])),meta:{frontmatter:{time_warning:15552e6,layout:"tags",icon:"i-ri-price-tag-3-line",nav:!1,date:"2025-03-16T07:07:58.236Z",updated:"2025-03-16T07:07:58.236Z"},excerpt:"",layout:"tags"}}],meta:{frontmatter:{time_warning:15552e6}}}],zn={};function qn(e,t,n){const r=typeof e=="function"?e:t;n=typeof t=="object"?t:n;const o={...nt,...n,commit:(n==null?void 0:n.commit)||nt.commit};function f(s,l,d,a){var x;const c=l[F],u=l[_t];c.has(r)||c.set(r,{data:oe(),isLoading:oe(!1),error:oe(),to:s,options:o,children:new Set,resetPending(){this.pendingLoad=null,this.pendingTo=null},pendingLoad:null,pendingTo:null,staged:z,stagedError:null,commit:h});const m=c.get(r);if(m.pendingTo===s&&m.pendingLoad)return m.pendingLoad;const{error:y,isLoading:w,data:S}=m,E=l[Mn],R=o.key||"";let O=z;if(E&&R in E&&(O=E[R],delete E[R]),O!==z)return S.value=O,m.pendingLoad=Promise.resolve();m.pendingTo=s,w.value=!0;const k=tt();Y([m,l,s]),m.staged=z,m.stagedError=y.value;const I=Promise.resolve(r(s,{signal:(x=s.meta[re])==null?void 0:x.signal})).then(H=>{m.pendingLoad===I&&(H instanceof wt?s.meta[ue].push(H):(m.staged=H,m.stagedError=null))}).catch(H=>{if(m.pendingLoad===I&&(m.stagedError=H,!Ae(o.lazy,s,d)||u))throw H}).finally(()=>{Y(k),m.pendingLoad===I&&(w.value=!1,(o.commit==="immediate"||!l[B])&&m.commit(s))});return Y(k),m.pendingLoad=I,I}function h(s){if(this.pendingTo===s){this.staged!==z&&(this.data.value=this.staged),this.error.value=this.stagedError,this.staged=z,this.stagedError=this.error.value,this.pendingTo=null,this.to=s;for(const l of this.children)l.commit(s)}}const p=()=>{const s=tt(),[l,d,a]=s,c=d||kn(),u=a||xn(),m=c[F];let y=m.get(r);(!y||l&&y.pendingTo!==u||!y.pendingLoad)&&c[fe].runWithContext(()=>f(u,c,void 0)),y=m.get(r),l&&(l===y&&console.warn(`👶❌ "${o.key}" has itself as parent. This shouldn't be happening. Please report a bug with a reproduction to https://github.com/posva/unplugin-vue-router/`),l.children.add(y));const{data:w,error:S,isLoading:E}=y,R={data:w,error:S,isLoading:E,reload:(k=c.currentRoute.value)=>c[fe].runWithContext(()=>f(k,c)).then(()=>y.commit(k))},O=y.pendingLoad.then(()=>y.staged===z?w.value:y.staged).catch(k=>l?Promise.reject(k):null);return Y(s),Object.assign(O,R)};return p[Et]=!0,p._={load:f,options:o,getEntry(s){return s[F].get(r)}},p}var nt={lazy:!1,server:!0,commit:"after-load"},Mn=Symbol();export{Bn as D,xn as a,$n as b,Kn as c,Hn as d,zn as e,qn as f,Gn as r,kn as u};
