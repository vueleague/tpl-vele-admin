var Ce=Object.defineProperty,Se=Object.defineProperties;var Ie=Object.getOwnPropertyDescriptors;var te=Object.getOwnPropertySymbols;var Fe=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var V=(e,t,r)=>t in e?Ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,P=(e,t)=>{for(var r in t||(t={}))Fe.call(t,r)&&V(e,r,t[r]);if(te)for(var r of te(t))be.call(t,r)&&V(e,r,t[r]);return e},y=(e,t)=>Se(e,Ie(t));var h=(e,t,r)=>(V(e,typeof t!="symbol"?t+"":t,r),r);import{c as Re,a as Me,M as G,g as $,b as B,A as C,V as q,E as A,d as i,l as ve,e as Y,f as re,n as w,h as ye,i as Be,r as we,o as Le,j as Ne,k as ke,m as Ue,p as He,q as je,s as xe,t as Ve,u as Ge,v as $e,w as qe,x as Ye,y as Je,z as ze,B as Ke,C as We,D as Xe,F as Ze,G as Qe,H as et,I as tt,J as rt,K as nt,L as ot,N as at,O as st,P as ut,Q as it,R as ct,S as lt,T as mt,U as Et,W as dt,X as pt,Y as ft,Z as _t,_ as ht,$ as gt,a0 as At,a1 as Tt,a2 as Ot,a3 as Dt,a4 as Pt,a5 as Ct,a6 as St,a7 as It,a8 as Ft,a9 as bt,aa as Rt,ab as Mt,ac as vt,ad as yt,ae as Bt,af as wt,ag as Lt,ah as Nt,ai as kt,aj as Ut,ak as Ht,al as jt,am as xt,an as Vt,ao as Gt,ap as $t,aq as qt,ar as Yt,as as Jt,at as zt,au as Kt,av as Wt,aw as Xt,ax as Zt,ay as Qt,az as er,aA as tr,aB as rr,aC as nr,aD as or,aE as ar,aF as sr,aG as ur,aH as ir,aI as T,aJ as cr}from"./vendor.6ad0549f.js";const lr=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}};lr();const mr="modulepreload",ne={},Er="/",l=function(t,r){return!r||r.length===0?t():Promise.all(r.map(n=>{if(n=`${Er}${n}`,n in ne)return;ne[n]=!0;const o=n.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${s}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":mr,o||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),o)return new Promise((c,u)=>{a.addEventListener("load",c),a.addEventListener("error",u)})})).then(()=>t())};var E;(function(e){e.BASE_HOME="/home",e.BASE_LOGIN="/login"})(E||(E={}));const S="Redirect",I=()=>l(()=>import("./index.c00c4301.js"),["assets/index.c00c4301.js","assets/index.aba19a13.css","assets/vendor.6ad0549f.js"]),dr={path:"/redirect",name:S,component:I,meta:{title:S,hideBreadcrumb:!0},children:[{path:"/redirect/:path(.*)",name:S,component:()=>l(()=>import("./Redirect.74078512.js"),["assets/Redirect.74078512.js","assets/vendor.6ad0549f.js"]),meta:{title:S,hideBreadcrumb:!0}}]},oe={path:"/:path(.*)*",name:"ErrorPage",component:I,meta:{title:"ErrorPage",hideBreadcrumb:!0},children:[{path:"/:path(.*)*",name:"ErrorPage",component:()=>l(()=>import("./404.363a132a.js"),["assets/404.363a132a.js","assets/404.9f716fb9.css","assets/vendor.6ad0549f.js"]),meta:{title:"ErrorPage",hideBreadcrumb:!0}}]},pr={path:"/",name:"Root",redirect:E.BASE_HOME,meta:{title:"Root"}},fr={path:"/login",name:"Login",component:()=>l(()=>import("./Login.3e363131.js"),["assets/Login.3e363131.js","assets/Login.1318f48d.css","assets/vendor.6ad0549f.js"]),meta:{title:"\u767B\u5F55"}};var _r=[pr,fr,oe,dr];const hr=[{path:"/demo",name:"Demo",component:I,redirect:"/demo/file-split",meta:{title:"Demo",icon:"el-icon-menu",menuNum:30},children:[{path:"file-split",name:"FileSplit",component:()=>l(()=>import("./FileSplit.f91b3310.js"),["assets/FileSplit.f91b3310.js","assets/FileSplit.81b5e4d3.css","assets/vendor.6ad0549f.js"]),meta:{title:"\u6587\u4EF6\u62C6\u5206"}},{path:"usedate",name:"UseData",component:()=>l(()=>import("./useData.79be972c.js"),["assets/useData.79be972c.js","assets/vendor.6ad0549f.js"]),meta:{title:"useData"}},{path:"setup",name:"Setup",component:()=>l(()=>import("./index.818c1c46.js"),["assets/index.818c1c46.js","assets/vendor.6ad0549f.js"]),meta:{title:"Setup"}}]}];var gr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:hr});const Ar=[{path:"/home",name:"Home",component:I,redirect:"/home/index",meta:{title:"\u5206\u6790\u9875",icon:"el-icon-menu",menuNum:10},children:[{path:"index",name:"Home",component:()=>l(()=>import("./Home.b5266649.js"),["assets/Home.b5266649.js","assets/Home.fbeeec66.css","assets/vendor.6ad0549f.js"]),meta:{title:"\u5206\u6790\u9875",hideMenu:!0}}]}];var Tr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ar});const Or=[{path:"/table",name:"Table",component:I,redirect:"/table/normal",meta:{title:"\u8868\u683C",icon:"el-icon-menu",menuNum:30},children:[{path:"normal",name:"Normal",redirect:"/table/normal/one",component:()=>l(()=>import("./Normal.d2bbebc0.js"),["assets/Normal.d2bbebc0.js","assets/vendor.6ad0549f.js"]),meta:{title:"\u666E\u901A\u8868\u683C"},children:[{path:"one",name:"One",component:()=>l(()=>import("./Normal1.ccb13781.js"),["assets/Normal1.ccb13781.js","assets/vendor.6ad0549f.js"]),meta:{title:"\u666E\u901A\u8868\u683C1"}},{path:"two",name:"Two",component:()=>l(()=>import("./Normal2.75b54e2a.js"),["assets/Normal2.75b54e2a.js","assets/vendor.6ad0549f.js"]),meta:{title:"\u666E\u901A\u8868\u683C2"}}]},{path:"high",name:"TableHigh",component:()=>l(()=>import("./HighTable.8faeadee.js"),["assets/HighTable.8faeadee.js","assets/vendor.6ad0549f.js"]),meta:{title:"\u9AD8\u7EA7\u8868\u683C"}}]}];var Dr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Or});function Pr(){return!1}Re.rawError=!0;const L=Me({strict:Pr()});function Cr(e){e.use(L)}var Sr=Object.defineProperty,Ir=Object.getOwnPropertyDescriptor,J=(e,t,r,n)=>{for(var o=n>1?void 0:n?Ir(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&Sr(t,r,o),o};const Fr="menu";let F=class extends q{constructor(){super(...arguments);h(this,"menus",[])}get getMenus(){return this.menus}commitMenus(e){this.menus=e}setMenusAction(e){this.commitMenus(e)}};J([B],F.prototype,"commitMenus",1);J([C],F.prototype,"setMenusAction",1);F=J([G({dynamic:!0,namespaced:!0,store:L,name:Fr})],F);const br=$(F);function Rr(e){const t=ae(e);br.setMenusAction(t)}function ae(e,t=""){const r=[];return e.sort((n,o)=>n.meta.menuNum&&o.meta.menuNum?n.meta.menuNum-o.meta.menuNum:1),e.forEach(n=>{if(!n.meta.hideMenu){const o={path:t?Mr([t,n.path]):n.path,title:n.meta.title,name:n.name,icon:n.meta.icon||"",children:[]};n.children&&n.children.length!==0&&(o.children=ae(n.children,o.path)),r.push(o)}}),r}function Mr(e){return e.reduce((t,r)=>(t=t.trim().replace("/",""),r=r.trim().replace("/",""),`/${t}/${r}`))}const se="TOKEN__",ue="USER__INFO__";var ie;(function(e){e[e.SESSION=0]="SESSION",e[e.LOCAL=1]="LOCAL"})(ie||(ie={}));var N;(function(e){e[e.SUCCESS=1e4]="SUCCESS",e[e.ERROR=10001]="ERROR",e[e.TIMEOUT=401]="TIMEOUT",e.TYPE="success"})(N||(N={}));var ce;(function(e){e.UNDERLINE="underline",e.CAMEL="camel",e.MIX="mix"})(ce||(ce={}));var b;(function(e){e.MESSAGE="message",e.MODEL="model"})(b||(b={}));var f;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.DELETE="DELETE"})(f||(f={}));var k;(function(e){e.JSON="application/json;charset=UTF-8",e.FORM_URLENCODED="application/x-www-form-urlencoded;charset=UTF-8",e.FORM_DATA="multipart/form-data;charset=UTF-8"})(k||(k={}));function z(e,t){return toString.call(e)===`[object ${t}]`}function R(e){return z(e,"string")}function K(e){return typeof e=="function"}function vr(e){return e&&Array.isArray(e)}function yr(e){return e!==null&&z(e,"Object")}function Br(e){return z(e,"Date")}function wr(e){return typeof e=="object"}function le(e=!1){const t=new Date().getTime();return e?`?_t=${t}`:{_t:t}}const Lr="YYYY-MM-DD HH:mm";function me(e){for(const t in e){if(e[t]&&e[t]._isAMomentObject&&(e[t]=e[t].format(Lr)),R(t)){const r=e[t];if(r)try{e[t]=R(r)?r.trim():r}catch(n){throw new Error(n)}}yr(e[t])&&me(e[t])}}const O="__ERROR_RESULT__",m={"401":"\u7528\u6237\u6CA1\u6709\u6743\u9650\uFF08\u4EE4\u724C\u3001\u7528\u6237\u540D\u3001\u5BC6\u7801\u9519\u8BEF\uFF09!","403":"\u7528\u6237\u5F97\u5230\u6388\u6743\uFF0C\u4F46\u662F\u8BBF\u95EE\u662F\u88AB\u7981\u6B62\u7684!","404":"\u7F51\u7EDC\u8BF7\u6C42\u9519\u8BEF,\u672A\u627E\u5230\u8BE5\u8D44\u6E90!","405":"\u7F51\u7EDC\u8BF7\u6C42\u9519\u8BEF,\u8BF7\u6C42\u65B9\u6CD5\u672A\u5141\u8BB8!","408":"\u7F51\u7EDC\u8BF7\u6C42\u8D85\u65F6!","500":"\u670D\u52A1\u5668\u9519\u8BEF,\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458!","501":"\u7F51\u7EDC\u672A\u5B9E\u73B0!","502":"\u7F51\u7EDC\u9519\u8BEF!","503":"\u670D\u52A1\u4E0D\u53EF\u7528\uFF0C\u670D\u52A1\u5668\u6682\u65F6\u8FC7\u8F7D\u6216\u7EF4\u62A4!","504":"\u7F51\u7EDC\u8D85\u65F6!","505":"http\u7248\u672C\u4E0D\u652F\u6301\u8BE5\u8BF7\u6C42!"};function W(e){return 1e4+e%1e4===N.SUCCESS}function Nr(e,t){var a;const{isCacheData:r,apiUrl:n,formatDate:o}=t;n&&R(n)&&(e.url=`${n}${e.url}`);const s=e.params||{};return((a=e.method)==null?void 0:a.toUpperCase())===f.GET?R(s)?(e.url=e.url+s+`${r?"":le(!0)}`,e.params=void 0):!r&&(e.params=Object.assign(s||{},le(!1))):R(s)?(e.url=e.url+s,e.params=void 0):(o&&me(s),e.data=s,e.params=void 0),e}const X=(e,t)=>{const{isTransformRequestResult:r}=t;if(!r)return e.data;if(!e.data)return O;const{code:n,data:o,message:s}=e.data,a=s||e.data.msg;if(!(W(n)&&(o||a)))return a&&(t.errorMessageMode===b.MODEL?A({title:"\u9519\u8BEF\u63D0\u793A",message:a}):t.errorMessageMode==="message"&&i.error(a)),Promise.reject(new Error(a)),O;if(W(n))return o||a;if(n===N.TIMEOUT){const u="\u767B\u5F55\u8D85\u65F6,\u8BF7\u91CD\u65B0\u767B\u5F55!";return A({title:"\u64CD\u4F5C\u5931\u8D25",message:u}),Promise.reject(new Error(u)),O}if(!W(n)){if(a)i.error(a),Promise.reject(new Error(a));else{const u="\u64CD\u4F5C\u5931\u8D25,\u7CFB\u7EDF\u5F02\u5E38!";i.error(u),Promise.reject(new Error(u))}return O}return O};function Z(e){return e}function kr(e){var n;const t=e==null?void 0:e.headers;return((t==null?void 0:t["Content-Type"])||(t==null?void 0:t["content-type"]))!==k.FORM_URLENCODED||!Reflect.has(e,"data")||((n=e.method)==null?void 0:n.toUpperCase())===f.GET?e:y(P({},e),{data:ve.stringify(e.data)})}function Ur(e){var a,c,u,p,v,ee;const{response:t,code:r,message:n}=e||{},o=(u=(c=(a=t==null?void 0:t.data)==null?void 0:a.error)==null?void 0:c.message)!=null?u:"",s=(v=(p=e==null?void 0:e.toString)==null?void 0:p.call(e))!=null?v:"";try{r==="ECONNABORTED"&&n.indexOf("timeout")!==-1&&A({title:"\u8BF7\u6C42\u5931\u8D25",message:e.message,type:"error"}),(s==null?void 0:s.includes("Network Error"))&&A({title:"\u7F51\u7EDC\u5F02\u5E38",message:"\u8BF7\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC\u8FDE\u63A5\u662F\u5426\u6B63\u5E38\uFF01",type:"error"})}catch(Pe){throw new Error(Pe)}return Hr((ee=e==null?void 0:e.response)==null?void 0:ee.status,o),Promise.reject(e)}function Hr(e,t){switch(e){case 400:i.error(t);break;case 401:i.error(m["401"]),D.logout();break;case 403:i.error(m["403"]);break;case 404:i.error(m["404"]);break;case 405:i.error(m["405"]);break;case 408:i.error(m["408"]);break;case 500:i.error(m["500"]);break;case 501:i.error(m["501"]);break;case 502:i.error(m["502"]);break;case 503:i.error(m["503"]);break;case 504:i.error(m["504"]);break;case 505:i.error(m["505"]);break}}let _=new Map;class Ee{addPending(t){this.removePending(t);const r=de(t);t.cancelToken=t.cancelToken||new Y.CancelToken(n=>{_.has(r)||_.set(r,n)})}removeAllPending(){_.forEach(t=>{t&&K(t)&&t()}),_.clear()}removePending(t){const r=de(t);if(_.has(r)){const n=_.get(r);n&&n(r),_.delete(r)}}reset(){_=new Map}}function de(e){const t=e.params;let r="";return t&&(r=Reflect.ownKeys(t).reduce((n,o)=>(o==="_t"||(n+=o+"="+t[o]+"&"),n),"?")),[e.method,e.url,r].join("&")}function pe(e){const t=vr(e)?[]:{};for(const r in e)if(Reflect.has(e,r)){const n=e[r];wr(n)?t[r]=pe(n):Br(n)?t[r]=new Date(n):t[r]=n}return t}function jr(e){return e.replace(/_(\w)/g,function(t,r){return r.toUpperCase()})}function U(e,t=!0){return e instanceof Array?e.forEach(function(r){U(r,t)}):e instanceof Object&&Object.keys(e).forEach(function(r){const n=jr(r);n!==r&&(e[n]=e[r],t&&delete e[r]),U(e[n],t)}),e}class xr{constructor(t){h(this,"config");h(this,"instance");this.config=t,this.instance=Y.create(t),this.setInterceptors(this.instance)}get getConfig(){return this.config}get getinstance(){return this.instance}create(t){this.instance=Y.create(t)}setHeader(t){!this.instance||Object.assign(this.instance.defaults.headers,t)}setInterceptors(t){const r=new Ee;t.interceptors.request.use(n=>{var a;const{headers:{ignoreCancelToken:o}}=n;return!(o!==void 0?o:(a=this.config.requestOptions)==null?void 0:a.ignoreCancelToken)&&r.addPending(n),n.headers.Authorization=D.getTokenState||"",n},void 0),t.interceptors.response.use(n=>(n&&r.removePending(n.config),n),Ur)}configAxios(t){!this.instance||this.create(t)}request(t,r){let n=pe(t);const{requestOptions:o}=this.config,s=Object.assign({},o,r);return n=Nr(n,s),n=kr(n),new Promise((a,c)=>{this.instance.request(n).then(u=>{if(X&&K(X)){const p=X(u,s);U(p,!1),p!==O?a(p):c(new Error("request error!"));return}U(u,!1),a(u)}).catch(u=>{if(Z&&K(Z)){c(Z(u));return}c(u)})})}get(t,r,n){return this.request({url:t,params:r,method:f.GET},n)}post(t,r,n){return this.request({url:t,params:r,method:f.POST},n)}put(t,r,n){return this.request({url:t,params:r,method:f.PUT},n)}delete(t,r,n){return this.request({url:t,params:r,method:f.DELETE},n)}}function Vr(e={}){return new xr(P({timeout:1e4,withCredentials:!0,headers:{"Content-Type":k.JSON},requestOptions:{isTransformRequestResult:!0,formatDate:!0,apiUrl:"",errorMessageMode:b.MESSAGE,isCacheData:!1,ignoreCancelToken:!0}},e))}const fe=Vr();var H;(function(e){e.Login="/login",e.Logout="/logout",e.GetUserInfo="/getuserinfo"})(H||(H={}));function Gr(e,t=b.MODEL){return fe.request({url:H.Login,method:"POST",params:e},{errorMessageMode:t})}function $r(e){return fe.get(H.GetUserInfo,e)}var qr=Object.defineProperty,Yr=Object.getOwnPropertyDescriptor,g=(e,t,r,n)=>{for(var o=n>1?void 0:n?Yr(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&qr(t,r,o),o};const Jr="user";function _e(e){return localStorage.getItem(e)}function he(e,t){localStorage.setItem(e,t)}let d=class extends q{constructor(){super(...arguments);h(this,"token","");h(this,"userInfo",{})}get getTokenState(){return this.token||_e(se)}get getUserInfoState(){return this.userInfo||_e(ue)}commitToken(e){this.token=e,he(se,e)}commitUserInfo(e){this.userInfo=e,he(ue,JSON.stringify(e))}async loginAction(e){try{const t=await Gr(e);console.log("loginAction token",t),this.commitToken(t);const r=await this.getUserInfoAction();return await x.replace(E.BASE_HOME),r}catch{return null}}logout(e=!1){e&&x.push(E.BASE_LOGIN)}async getUserInfoAction(){const e=await $r({token:"token__token"});return this.commitUserInfo(e),e}async confirmLoginOut(){re.confirm("\u6E29\u99A8\u63D0\u793A","\u662F\u5426\u786E\u8BA4\u9000\u51FA\u7CFB\u7EDF\uFF1F",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88"}).then(()=>{this.logout(!0)})}};g([B],d.prototype,"commitToken",1);g([B],d.prototype,"commitUserInfo",1);g([C],d.prototype,"loginAction",1);g([C],d.prototype,"logout",1);g([C],d.prototype,"getUserInfoAction",1);g([C],d.prototype,"confirmLoginOut",1);d=g([G({dynamic:!0,namespaced:!0,store:L,name:Jr})],d);const D=$(d);var zr=Object.defineProperty,Kr=Object.getOwnPropertyDescriptor,ge=(e,t,r,n)=>{for(var o=n>1?void 0:n?Kr(t,r):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(o=(n?a(t,r,o):a(o))||o);return n&&o&&zr(t,r,o),o};const Wr="permission";let j=class extends q{constructor(){super(...arguments);h(this,"isDynamicAddedRouteState",!1)}get getIsDynamicAddedRouteState(){return this.isDynamicAddedRouteState}commitDynamicAddedRouteState(e){this.isDynamicAddedRouteState=e}};ge([B],j.prototype,"commitDynamicAddedRouteState",1);j=ge([G({dynamic:!0,namespaced:!0,store:L,name:Wr})],j);const Ae=$(j),Q=E.BASE_LOGIN;w.exports.configure({showSpinner:!1});const Xr=[Q];function Zr(e){e.beforeEach((t,r,n)=>{if(w.exports.start(),r.path===Q&&t.name===oe.name){n(E.BASE_HOME);return}if(Xr.includes(t.path)){w.exports.done(),n();return}if(!D.getTokenState){const u={path:Q,replace:!0};t.path&&(u.query=y(P({},u.query),{redirect:encodeURIComponent(t.fullPath)})),n(u);return}if(Ae.getIsDynamicAddedRouteState){n();return}const s=r.query.redirect||t.path,a=decodeURIComponent(s),c=a===t.path?y(P({},t),{replace:!0}):a;Ae.commitDynamicAddedRouteState(!0),n(c)}),e.afterEach(()=>{w.exports.done()})}const Qr=e=>/^(\/|#)/.test(e);function en(e){const t=document.body;e.afterEach(async r=>(Qr(r==null?void 0:r.href)&&t.scrollTo(0,0),!0))}const Te={closeMessageOnSwitch:!0,removeAllHttpPending:!1};function tn(e){const{closeMessageOnSwitch:t}=Te;e.beforeEach(async()=>{try{t&&(A.closeAll(),i.closeAll())}catch(r){console.warn("message guard error:"+r)}return!0})}function rn(e){const{removeAllHttpPending:t}=Te;let r;t&&(r=new Ee),e.beforeEach(async()=>(t&&(r==null||r.removeAllPending()),!0))}const nn={}.VITE_GLOB_APP_TITLE;function on(e){console.warn(`[${nn} warn]:${e}`)}const an=e=>`__PRODUCTION__${e.VITE_APP_SHORT_NAME||"__APP"}__CONF__`.toUpperCase().replace(/\s/g,"");function sn(){const e=an({VITE_APP_SHORT_NAME:"Vue3Admin",VITE_APP_TITLE:"Vue3-Element-Admin",VITE_PUBLIC_PATH:"/",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0});return window[e]}const un=()=>{const{VITE_APP_TITLE:e,VITE_API_URL:t,VITE_APP_SHORT_NAME:r,VITE_API_URL_PREFIX:n,VITE_UPLOAD_URL:o}=sn();return/[a-zA-Z\_]*/.test(r)||on("VITE_APP_SHORT_NAME Variables can only be characters/underscores, please modify in the environment variables and re-running."),{title:e,apiUrl:t,shortName:r,urlPrefix:n,uploadUrl:o}};function cn(e){document.title=e;const t=navigator.userAgent;if(/\bMicroMessenger\/([\d.]+)/.test(t)&&/ip(hone|od|ad)/i.test(t)){const n=document.createElement("iframe");n.src="/favicon.ico",n.style.display="none",n.onload=function(){setTimeout(function(){n.remove()},9)},document.body.appendChild(n)}}function ln(e,t){if(e){const r=e?` ${e} - ${t} `:`${t}`;cn(r)}}const mn=un();function En(e){e.afterEach(async t=>(t.name!==S&&ln(t.meta.title,mn.title),!0))}function dn(e){const t=E.BASE_LOGIN,r=E.BASE_HOME,n=[t,r];e.beforeEach(async o=>{var s;if(o.name&&n.includes(o.path))try{const a=await D.getUserInfoAction(),c=((s=D.getTokenState)==null?void 0:s.split("."))||[];if(!c.length)return!0;const u=c.length>1?JSON.parse(decodeURIComponent(atob(c[1]))):"",p=u.iat*1e3,v=new Date(a.updated_at).getTime();(p<v||a.roles!==u.role_id)&&D.logout(!0)}catch(a){console.log(a)}return!0})}function pn(e){rn(e),en(e),tn(e),En(e),Zr(e),dn(e)}const Oe={"./modules/demo.ts":gr,"./modules/home.ts":Tr,"./modules/table.ts":Dr},De=Object.keys(Oe).reduce((e,t)=>[...e,...Oe[t].default],[]),fn=[...De,..._r];Rr(De);const x=ye({history:Be(),routes:fn});function _n(e){e.use(x),pn(x)}var hn=(e,t)=>{for(const[r,n]of t)e[r]=n;return e};const gn={};function An(e,t){const r=we("router-view");return Le(),Ne(r)}var Tn=hn(gn,[["render",An]]);const On=[ke,Ue,He,je,xe,Ve,Ge,$e,qe,Ye,Je,ze,Ke,We,Xe,Ze,Qe,et,tt,rt,nt,ot,at,st,ut,it,ct,lt,mt,Et,dt,pt,ft,_t,ht,gt,At,Tt,Ot,Dt,Pt,Ct,St,It,Ft,bt,Rt,Mt,vt,yt,Bt,wt,Lt,Nt,kt,Ut,Ht,jt,xt,Vt,Gt,$t,qt,Yt,Jt,zt,Kt,Wt,Xt,Zt,Qt,er,tr,rr,nr,or,ar,sr],Dn=[ur,ir,i,re,A];function Pn(e){On.forEach(t=>{e.component(t.name,t)}),Dn.forEach(t=>{e.use(t)})}function Cn(e){Pn(e)}T.exports.mock("/login","post",e=>(JSON.parse(e.body),T.exports.mock({code:1e4,msg:"ok",data:"this is token"})));T.exports.mock("/getuserinfo","get",e=>{const{token:t}=JSON.parse(e);return console.log("token",t),T.exports.mock({code:1e4,msg:"ok",data:{token:t}})});T.exports.mock("/test","get",()=>T.exports.mock({code:1e4,msg:"ok",data:[{name:"1"},{name:"2"},{name:"3"}]}));const M=cr(Tn);M.config.globalProperties.foo="bar";_n(M);Cr(M);Cn(M);M.mount("#app");export{hn as _,un as a,br as m,x as r,L as s,D as u};