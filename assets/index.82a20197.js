var Re=Object.defineProperty,Me=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var te=Object.getOwnPropertySymbols;var Be=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var V=(e,t,n)=>t in e?Re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,A=(e,t)=>{for(var n in t||(t={}))Be.call(t,n)&&V(e,n,t[n]);if(te)for(var n of te(t))we.call(t,n)&&V(e,n,t[n]);return e},S=(e,t)=>Me(e,ye(t));var h=(e,t,n)=>(V(e,typeof t!="symbol"?t+"":t,n),n);import{c as Le,a as ke,M as G,g as $,b as M,A as P,V as x,E as T,d as i,l as Ue,e as q,f as ne,n as y,h as Ne,i as je,r as He,o as Ve,j as Ge,k as $e,m as xe,p as qe,q as Ye,s as ze,t as Je,u as Ke,v as We,w as Xe,x as Ze,y as Qe,z as et,B as tt,C as nt,D as rt,F as ot,G as st,H as at,I as ut,J as it,K as ct,L as lt,N as mt,O as dt,P as Et,Q as ft,R as pt,S as _t,T as ht,U as gt,W as At,X as Tt,Y as Ot,Z as Dt,_ as St,$ as Pt,a0 as Ct,a1 as bt,a2 as vt,a3 as Ft,a4 as It,a5 as Rt,a6 as Mt,a7 as yt,a8 as Bt,a9 as wt,aa as Lt,ab as kt,ac as Ut,ad as Nt,ae as jt,af as Ht,ag as Vt,ah as Gt,ai as $t,aj as xt,ak as qt,al as Yt,am as zt,an as Jt,ao as Kt,ap as Wt,aq as Xt,ar as Zt,as as Qt,at as en,au as tn,av as nn,aw as rn,ax as on,ay as sn,az as an,aA as un,aB as cn,aC as ln,aD as mn,aE as dn,aF as En,aG as fn,aH as pn,aI as _n,aJ as hn}from"./vendor.d88ae094.js";const gn=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}};gn();const An="modulepreload",re={},Tn="/vue3-admin/",l=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${Tn}${r}`,r in re)return;re[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${a}`))return;const s=document.createElement("link");if(s.rel=o?"stylesheet":An,o||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),o)return new Promise((c,u)=>{s.addEventListener("load",c),s.addEventListener("error",u)})})).then(()=>t())};var f;(function(e){e.BASE_HOME="/home",e.BASE_LOGIN="/login"})(f||(f={}));const C="Redirect",b=()=>l(()=>import("./index.5ba04406.js"),["assets/index.5ba04406.js","assets/index.3a5e8ff0.css","assets/vendor.d88ae094.js"]),On={path:"/redirect",name:C,component:b,meta:{title:C,hideBreadcrumb:!0},children:[{path:"/redirect/:path(.*)",name:C,component:()=>l(()=>import("./Redirect.7552cfed.js"),["assets/Redirect.7552cfed.js","assets/vendor.d88ae094.js"]),meta:{title:C,hideBreadcrumb:!0}}]},oe={path:"/:path(.*)*",name:"ErrorPage",component:b,meta:{title:"ErrorPage",hideBreadcrumb:!0},children:[{path:"/:path(.*)*",name:"ErrorPage",component:()=>l(()=>import("./404.d1616214.js"),["assets/404.d1616214.js","assets/404.14f22a81.css","assets/vendor.d88ae094.js"]),meta:{title:"ErrorPage",hideBreadcrumb:!0}}]},Dn={path:"/",name:"Root",redirect:f.BASE_HOME,meta:{title:"Root"}},Sn={path:"/login",name:"Login",component:()=>l(()=>import("./Login.53f648e5.js"),["assets/Login.53f648e5.js","assets/Login.b99da2f1.css","assets/vendor.d88ae094.js"]),meta:{title:"\u767B\u5F55"}};var Pn=[Dn,Sn,oe,On];const Cn=[{path:"/demo",name:"Demo",component:b,redirect:"/demo/file-split",meta:{title:"Demo",icon:"el-icon-menu",menuNum:30},children:[{path:"file-split",name:"FileSplit",component:()=>l(()=>import("./FileSplit.4ed8eb63.js"),["assets/FileSplit.4ed8eb63.js","assets/FileSplit.81b5e4d3.css","assets/vendor.d88ae094.js"]),meta:{title:"\u6587\u4EF6\u62C6\u5206"}},{path:"usedate",name:"UseData",component:()=>l(()=>import("./UseData.006e57cd.js"),["assets/UseData.006e57cd.js","assets/vendor.d88ae094.js"]),meta:{title:"useData"}},{path:"setup",name:"Setup",component:()=>l(()=>import("./index.5abb6d36.js"),["assets/index.5abb6d36.js","assets/vendor.d88ae094.js"]),meta:{title:"Setup"}}]}];var bn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Cn});const vn=[{path:"/home",name:"Home",component:b,redirect:"/home/index",meta:{title:"\u5206\u6790\u9875",icon:"el-icon-menu",menuNum:10},children:[{path:"index",name:"Home",component:()=>l(()=>import("./Home.d86c64a0.js"),["assets/Home.d86c64a0.js","assets/Home.ac3a5eec.css","assets/vendor.d88ae094.js"]),meta:{title:"\u5206\u6790\u9875",hideMenu:!0}}]}];var Fn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:vn});const In=[{path:"/table",name:"Table",component:b,redirect:"/table/normal",meta:{title:"\u8868\u683C",icon:"el-icon-menu",menuNum:30},children:[{path:"normal",name:"Normal",redirect:"/table/normal/one",component:()=>l(()=>import("./Normal.34d7af98.js"),["assets/Normal.34d7af98.js","assets/vendor.d88ae094.js"]),meta:{title:"\u666E\u901A\u8868\u683C"},children:[{path:"one",name:"One",component:()=>l(()=>import("./Normal1.2acbaec4.js"),["assets/Normal1.2acbaec4.js","assets/vendor.d88ae094.js"]),meta:{title:"\u666E\u901A\u8868\u683C1"}},{path:"two",name:"Two",component:()=>l(()=>import("./Normal2.6b51dcf3.js"),["assets/Normal2.6b51dcf3.js","assets/vendor.d88ae094.js"]),meta:{title:"\u666E\u901A\u8868\u683C2"}}]},{path:"high",name:"TableHigh",component:()=>l(()=>import("./HighTable.581ede60.js"),["assets/HighTable.581ede60.js","assets/vendor.d88ae094.js"]),meta:{title:"\u9AD8\u7EA7\u8868\u683C"}}]}];var Rn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:In});function Mn(){return!1}Le.rawError=!0;const B=ke({strict:Mn()});function yn(e){e.use(B)}var Bn=Object.defineProperty,wn=Object.getOwnPropertyDescriptor,Y=(e,t,n,r)=>{for(var o=r>1?void 0:r?wn(t,n):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(o=(r?s(t,n,o):s(o))||o);return r&&o&&Bn(t,n,o),o};const Ln="menu";let v=class extends x{constructor(){super(...arguments);h(this,"menus",[])}get getMenus(){return this.menus}commitMenus(e){this.menus=e}setMenusAction(e){this.commitMenus(e)}};Y([M],v.prototype,"commitMenus",1);Y([P],v.prototype,"setMenusAction",1);v=Y([G({dynamic:!0,namespaced:!0,store:B,name:Ln})],v);const kn=$(v);function Un(e){const t=se(e);kn.setMenusAction(t)}function se(e,t=""){const n=[];return e.sort((r,o)=>r.meta.menuNum&&o.meta.menuNum?r.meta.menuNum-o.meta.menuNum:1),e.forEach(r=>{if(!r.meta.hideMenu){const o={path:t?Nn([t,r.path]):r.path,title:r.meta.title,name:r.name,icon:r.meta.icon||"",children:[]};r.children&&r.children.length!==0&&(o.children=se(r.children,o.path)),n.push(o)}}),n}function Nn(e){return e.reduce((t,n)=>(t=t.trim().replace("/",""),n=n.trim().replace("/",""),`/${t}/${n}`))}const ae="TOKEN__",ue="USER__INFO__";var ie;(function(e){e[e.SESSION=0]="SESSION",e[e.LOCAL=1]="LOCAL"})(ie||(ie={}));var w;(function(e){e[e.SUCCESS=1e4]="SUCCESS",e[e.ERROR=10001]="ERROR",e[e.TIMEOUT=401]="TIMEOUT",e.TYPE="success"})(w||(w={}));var ce;(function(e){e.UNDERLINE="underline",e.CAMEL="camel",e.MIX="mix"})(ce||(ce={}));var F;(function(e){e.MESSAGE="message",e.MODEL="model"})(F||(F={}));var p;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.DELETE="DELETE"})(p||(p={}));var L;(function(e){e.JSON="application/json;charset=UTF-8",e.FORM_URLENCODED="application/x-www-form-urlencoded;charset=UTF-8",e.FORM_DATA="multipart/form-data;charset=UTF-8"})(L||(L={}));function z(e,t){return toString.call(e)===`[object ${t}]`}function I(e){return z(e,"string")}function J(e){return typeof e=="function"}function jn(e){return e&&Array.isArray(e)}function Hn(e){return e!==null&&z(e,"Object")}function Vn(e){return z(e,"Date")}function Gn(e){return typeof e=="object"}function le(e=!1){const t=new Date().getTime();return e?`?_t=${t}`:{_t:t}}const $n="YYYY-MM-DD HH:mm";function me(e){for(const t in e){if(e[t]&&e[t]._isAMomentObject&&(e[t]=e[t].format($n)),I(t)){const n=e[t];if(n)try{e[t]=I(n)?n.trim():n}catch(r){throw new Error(r)}}Hn(e[t])&&me(e[t])}}const O="__ERROR_RESULT__",m={"401":"\u7528\u6237\u6CA1\u6709\u6743\u9650\uFF08\u4EE4\u724C\u3001\u7528\u6237\u540D\u3001\u5BC6\u7801\u9519\u8BEF\uFF09!","403":"\u7528\u6237\u5F97\u5230\u6388\u6743\uFF0C\u4F46\u662F\u8BBF\u95EE\u662F\u88AB\u7981\u6B62\u7684!","404":"\u7F51\u7EDC\u8BF7\u6C42\u9519\u8BEF,\u672A\u627E\u5230\u8BE5\u8D44\u6E90!","405":"\u7F51\u7EDC\u8BF7\u6C42\u9519\u8BEF,\u8BF7\u6C42\u65B9\u6CD5\u672A\u5141\u8BB8!","408":"\u7F51\u7EDC\u8BF7\u6C42\u8D85\u65F6!","500":"\u670D\u52A1\u5668\u9519\u8BEF,\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458!","501":"\u7F51\u7EDC\u672A\u5B9E\u73B0!","502":"\u7F51\u7EDC\u9519\u8BEF!","503":"\u670D\u52A1\u4E0D\u53EF\u7528\uFF0C\u670D\u52A1\u5668\u6682\u65F6\u8FC7\u8F7D\u6216\u7EF4\u62A4!","504":"\u7F51\u7EDC\u8D85\u65F6!","505":"http\u7248\u672C\u4E0D\u652F\u6301\u8BE5\u8BF7\u6C42!"};function K(e){return 1e4+e%1e4===w.SUCCESS}function xn(e,t){var s;const{isCacheData:n,apiUrl:r,formatDate:o}=t;r&&I(r)&&(e.url=`${r}${e.url}`);const a=e.params||{};return((s=e.method)==null?void 0:s.toUpperCase())===p.GET?I(a)?(e.url=e.url+a+`${n?"":le(!0)}`,e.params=void 0):!n&&(e.params=Object.assign(a||{},le(!1))):I(a)?(e.url=e.url+a,e.params=void 0):(o&&me(a),e.data=a,e.params=void 0),e}const W=(e,t)=>{const{isTransformRequestResult:n}=t;if(!n)return e.data;if(!e.data)return O;const{code:r,data:o,message:a}=e.data,s=a||e.data.msg;if(!(K(r)&&(o||s)))return s&&(t.errorMessageMode===F.MODEL?T({title:"\u9519\u8BEF\u63D0\u793A",message:s}):t.errorMessageMode==="message"&&i.error(s)),Promise.reject(new Error(s)),O;if(K(r))return o||s;if(r===w.TIMEOUT){const u="\u767B\u5F55\u8D85\u65F6,\u8BF7\u91CD\u65B0\u767B\u5F55!";return T({title:"\u64CD\u4F5C\u5931\u8D25",message:u}),Promise.reject(new Error(u)),O}if(!K(r)){if(s)i.error(s),Promise.reject(new Error(s));else{const u="\u64CD\u4F5C\u5931\u8D25,\u7CFB\u7EDF\u5F02\u5E38!";i.error(u),Promise.reject(new Error(u))}return O}return O};function X(e){return e}function qn(e){var r;const t=e==null?void 0:e.headers;return((t==null?void 0:t["Content-Type"])||(t==null?void 0:t["content-type"]))!==L.FORM_URLENCODED||!Reflect.has(e,"data")||((r=e.method)==null?void 0:r.toUpperCase())===p.GET?e:S(A({},e),{data:Ue.stringify(e.data)})}function Yn(e){var s,c,u,E,Q,ee;const{response:t,code:n,message:r}=e||{},o=(u=(c=(s=t==null?void 0:t.data)==null?void 0:s.error)==null?void 0:c.message)!=null?u:"",a=(Q=(E=e==null?void 0:e.toString)==null?void 0:E.call(e))!=null?Q:"";try{n==="ECONNABORTED"&&r.indexOf("timeout")!==-1&&T({title:"\u8BF7\u6C42\u5931\u8D25",message:e.message,type:"error"}),(a==null?void 0:a.includes("Network Error"))&&T({title:"\u7F51\u7EDC\u5F02\u5E38",message:"\u8BF7\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC\u8FDE\u63A5\u662F\u5426\u6B63\u5E38\uFF01",type:"error"})}catch(Ie){throw new Error(Ie)}return zn((ee=e==null?void 0:e.response)==null?void 0:ee.status,o),Promise.reject(e)}function zn(e,t){switch(e){case 400:i.error(t);break;case 401:i.error(m["401"]),D.logout();break;case 403:i.error(m["403"]);break;case 404:i.error(m["404"]);break;case 405:i.error(m["405"]);break;case 408:i.error(m["408"]);break;case 500:i.error(m["500"]);break;case 501:i.error(m["501"]);break;case 502:i.error(m["502"]);break;case 503:i.error(m["503"]);break;case 504:i.error(m["504"]);break;case 505:i.error(m["505"]);break}}let _=new Map;class de{addPending(t){this.removePending(t);const n=Ee(t);t.cancelToken=t.cancelToken||new q.CancelToken(r=>{_.has(n)||_.set(n,r)})}removeAllPending(){_.forEach(t=>{t&&J(t)&&t()}),_.clear()}removePending(t){const n=Ee(t);if(_.has(n)){const r=_.get(n);r&&r(n),_.delete(n)}}reset(){_=new Map}}function Ee(e){const t=e.params;let n="";return t&&(n=Reflect.ownKeys(t).reduce((r,o)=>(o==="_t"||(r+=o+"="+t[o]+"&"),r),"?")),[e.method,e.url,n].join("&")}function fe(e){const t=jn(e)?[]:{};for(const n in e)if(Reflect.has(e,n)){const r=e[n];Gn(r)?t[n]=fe(r):Vn(r)?t[n]=new Date(r):t[n]=r}return t}function Jn(e){return e.replace(/_(\w)/g,function(t,n){return n.toUpperCase()})}function k(e,t=!0){return e instanceof Array?e.forEach(function(n){k(n,t)}):e instanceof Object&&Object.keys(e).forEach(function(n){const r=Jn(n);r!==n&&(e[r]=e[n],t&&delete e[n]),k(e[r],t)}),e}class Kn{constructor(t){h(this,"config");h(this,"instance");this.config=t,this.instance=q.create(t),this.setInterceptors(this.instance)}get getConfig(){return this.config}get getinstance(){return this.instance}create(t){this.instance=q.create(t)}setHeader(t){!this.instance||Object.assign(this.instance.defaults.headers,t)}setInterceptors(t){const n=new de;t.interceptors.request.use(r=>{var s;const{headers:{ignoreCancelToken:o}}=r;return!(o!==void 0?o:(s=this.config.requestOptions)==null?void 0:s.ignoreCancelToken)&&n.addPending(r),r.headers.Authorization=D.getTokenState||"",r},void 0),t.interceptors.response.use(r=>(r&&n.removePending(r.config),r),Yn)}configAxios(t){!this.instance||this.create(t)}request(t,n){let r=fe(t);const{requestOptions:o}=this.config,a=Object.assign({},o,n);return r=xn(r,a),r=qn(r),new Promise((s,c)=>{this.instance.request(r).then(u=>{if(W&&J(W)){const E=W(u,a);k(E,!1),E!==O?s(E):c(new Error("request error!"));return}k(u,!1),s(u)}).catch(u=>{if(X&&J(X)){c(X(u));return}c(u)})})}get(t,n,r){return this.request({url:t,params:n,method:p.GET},r)}post(t,n,r){return this.request({url:t,params:n,method:p.POST},r)}put(t,n,r){return this.request({url:t,params:n,method:p.PUT},r)}delete(t,n,r){return this.request({url:t,params:n,method:p.DELETE},r)}}function Wn(e={}){return new Kn(A({baseURL:"/mock-api/",timeout:1e4,withCredentials:!0,headers:{"Content-Type":L.JSON},requestOptions:{isTransformRequestResult:!0,formatDate:!0,apiUrl:"",errorMessageMode:F.MESSAGE,isCacheData:!1,ignoreCancelToken:!0}},e))}const pe=Wn();var U;(function(e){e.Login="/login",e.Logout="/logout",e.GetUserInfo="/getuserinfo"})(U||(U={}));function Xn(e,t=F.MODEL){return pe.request({url:U.Login,method:"POST",params:e},{errorMessageMode:t})}function Zn(e){return pe.get(U.GetUserInfo,e)}var Qn=Object.defineProperty,er=Object.getOwnPropertyDescriptor,g=(e,t,n,r)=>{for(var o=r>1?void 0:r?er(t,n):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(o=(r?s(t,n,o):s(o))||o);return r&&o&&Qn(t,n,o),o};const tr="user";function _e(e){return localStorage.getItem(e)}function he(e,t){localStorage.setItem(e,t)}let d=class extends x{constructor(){super(...arguments);h(this,"token","");h(this,"userInfo",{})}get getTokenState(){return this.token||_e(ae)}get getUserInfoState(){return this.userInfo||_e(ue)}commitToken(e){this.token=e,he(ae,e)}commitUserInfo(e){this.userInfo=e,he(ue,JSON.stringify(e))}async loginAction(e){try{const t=await Xn(e);console.log("loginAction token",t),this.commitToken(t),await j.replace(f.BASE_HOME)}catch{return null}}logout(e=!1){e&&j.push(f.BASE_LOGIN)}async getUserInfoAction(){const e=await Zn({token:"token__token"});return this.commitUserInfo(e),e}async confirmLoginOut(){ne.confirm("\u6E29\u99A8\u63D0\u793A","\u662F\u5426\u786E\u8BA4\u9000\u51FA\u7CFB\u7EDF\uFF1F",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88"}).then(()=>{this.logout(!0)})}};g([M],d.prototype,"commitToken",1);g([M],d.prototype,"commitUserInfo",1);g([P],d.prototype,"loginAction",1);g([P],d.prototype,"logout",1);g([P],d.prototype,"getUserInfoAction",1);g([P],d.prototype,"confirmLoginOut",1);d=g([G({dynamic:!0,namespaced:!0,store:B,name:tr})],d);const D=$(d);var nr=Object.defineProperty,rr=Object.getOwnPropertyDescriptor,ge=(e,t,n,r)=>{for(var o=r>1?void 0:r?rr(t,n):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(o=(r?s(t,n,o):s(o))||o);return r&&o&&nr(t,n,o),o};const or="permission";let N=class extends x{constructor(){super(...arguments);h(this,"isDynamicAddedRouteState",!1)}get getIsDynamicAddedRouteState(){return this.isDynamicAddedRouteState}commitDynamicAddedRouteState(e){this.isDynamicAddedRouteState=e}};ge([M],N.prototype,"commitDynamicAddedRouteState",1);N=ge([G({dynamic:!0,namespaced:!0,store:B,name:or})],N);const Ae=$(N),Z=f.BASE_LOGIN;y.exports.configure({showSpinner:!1});const sr=[Z];function ar(e){e.beforeEach((t,n,r)=>{if(y.exports.start(),n.path===Z&&t.name===oe.name){r(f.BASE_HOME);return}if(sr.includes(t.path)){y.exports.done(),r();return}if(!D.getTokenState){const u={path:Z,replace:!0};t.path&&(u.query=S(A({},u.query),{redirect:encodeURIComponent(t.fullPath)})),r(u);return}if(Ae.getIsDynamicAddedRouteState){r();return}const a=n.query.redirect||t.path,s=decodeURIComponent(a),c=s===t.path?S(A({},t),{replace:!0}):s;Ae.commitDynamicAddedRouteState(!0),r(c)}),e.afterEach(()=>{y.exports.done()})}const ur=e=>/^(\/|#)/.test(e);function ir(e){const t=document.body;e.afterEach(async n=>(ur(n==null?void 0:n.href)&&t.scrollTo(0,0),!0))}const Te={closeMessageOnSwitch:!0,removeAllHttpPending:!1};function cr(e){const{closeMessageOnSwitch:t}=Te;e.beforeEach(async()=>{try{t&&(T.closeAll(),i.closeAll())}catch(n){console.warn("message guard error:"+n)}return!0})}function lr(e){const{removeAllHttpPending:t}=Te;let n;t&&(n=new de),e.beforeEach(async()=>(t&&(n==null||n.removeAllPending()),!0))}const mr={}.VITE_GLOB_APP_TITLE;function dr(e){console.warn(`[${mr} warn]:${e}`)}function Er(){return{VITE_PUBLIC_PATH:"/vue3-admin/",VITE_APP_TITLE:"Vue3-Admin",VITE_APP_SHORT_NAME:"Vue3Admin",BASE_URL:"/vue3-admin/",MODE:"production",DEV:!1,PROD:!0}}const fr=()=>{const{VITE_APP_TITLE:e,VITE_API_URL:t,VITE_APP_SHORT_NAME:n,VITE_API_URL_PREFIX:r,VITE_UPLOAD_URL:o}=Er();return/[a-zA-Z\_]*/.test(n)||dr("VITE_APP_SHORT_NAME Variables can only be characters/underscores, please modify in the environment variables and re-running."),{title:e,apiUrl:t,shortName:n,urlPrefix:r,uploadUrl:o}};function pr(e){document.title=e;const t=navigator.userAgent;if(/\bMicroMessenger\/([\d.]+)/.test(t)&&/ip(hone|od|ad)/i.test(t)){const r=document.createElement("iframe");r.src="/favicon.ico",r.style.display="none",r.onload=function(){setTimeout(function(){r.remove()},9)},document.body.appendChild(r)}}function _r(e,t){if(e){const n=e?` ${e} - ${t} `:`${t}`;pr(n)}}const hr=fr();function gr(e){e.afterEach(async t=>(t.name!==C&&_r(t.meta.title,hr.title),!0))}function Ar(e){const n=[f.BASE_HOME];e.beforeEach(async r=>{var o;if(r.name&&n.includes(r.path))try{const a=await D.getUserInfoAction(),s=((o=D.getTokenState)==null?void 0:o.split("."))||[];if(!s.length)return!0;const c=s.length>1?JSON.parse(decodeURIComponent(atob(s[1]))):"",u=c.iat*1e3,E=new Date(a.updated_at).getTime();(u<E||a.roles!==c.role_id)&&D.logout(!0)}catch(a){console.log(a)}return!0})}function Tr(e){lr(e),ir(e),cr(e),gr(e),ar(e),Ar(e)}const Oe={"./modules/demo.ts":bn,"./modules/home.ts":Fn,"./modules/table.ts":Rn},De=Object.keys(Oe).reduce((e,t)=>[...e,...Oe[t].default],[]),Or=[...De,...Pn];Un(De);const j=Ne({history:je(),routes:Or});function Dr(e){e.use(j),Tr(j)}var Sr=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n};const Pr={};function Cr(e,t){const n=He("router-view");return Ve(),Ge(n)}var br=Sr(Pr,[["render",Cr]]);const vr=[$e,xe,qe,Ye,ze,Je,Ke,We,Xe,Ze,Qe,et,tt,nt,rt,ot,st,at,ut,it,ct,lt,mt,dt,Et,ft,pt,_t,ht,gt,At,Tt,Ot,Dt,St,Pt,Ct,bt,vt,Ft,It,Rt,Mt,yt,Bt,wt,Lt,kt,Ut,Nt,jt,Ht,Vt,Gt,$t,xt,qt,Yt,zt,Jt,Kt,Wt,Xt,Zt,Qt,en,tn,nn,rn,on,sn,an,un,cn,ln,mn,dn,En],Fr=[fn,pn,i,ne,T];function Ir(e){vr.forEach(t=>{e.component(t.name,t)}),Fr.forEach(t=>{e.use(t)})}function Rr(e){Ir(e)}function H(e,{message:t="ok"}={}){return{code:0,result:e,message:t,type:"success"}}function Mr(e,t,n,{message:r="ok"}={}){const o=Pe(e,t,n);return S(A({},H({items:o,total:n.length})),{message:r})}function Se(e="Request failed",{code:t=-1,result:n=null}={}){return{code:t,result:n,message:e,type:"error"}}function Pe(e,t,n){const r=(e-1)*Number(t);return r+Number(t)>=n.length?n.slice(r,n.length):n.slice(r,r+Number(t))}function Ce({headers:e}){return e==null?void 0:e.authorization}var yr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",resultSuccess:H,resultPageSuccess:Mr,resultError:Se,pagination:Pe,getRequestToken:Ce});const be=[{id:1,username:"admin",token:"user_token_1",password:"123456"},{id:2,username:"test",token:"user_token_2",password:"123456"}],Br={url:"/mock-api/login",timeout:200,method:"post",response:({body:e})=>{const{username:t,password:n}=e,r=be.find(o=>o.username===t&&o.password===n);return H(r)}},wr={url:"/mock-api/getUserInfo",method:"get",response:e=>{const t=Ce(e);if(!t)return Se("Invalid token");const n=be.find(r=>r.token===t);return H(n)}};var Lr=[Br,wr],kr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Lr});const ve={"./_util.ts":yr,"./sys/user.ts":kr},Fe=[];Object.keys(ve).forEach(e=>{e.includes("/_")||Fe.push(...ve[e].default)});function Ur(){_n(Fe)}const R=hn(br);R.config.globalProperties.foo="bar";Dr(R);yn(R);Rr(R);R.mount("#app");Ur();export{Sr as _,fr as a,kn as m,j as r,B as s,D as u};
