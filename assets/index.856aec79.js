var Ie=Object.defineProperty,Re=Object.defineProperties;var Be=Object.getOwnPropertyDescriptors;var ne=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable;var x=(e,t,r)=>t in e?Ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,A=(e,t)=>{for(var r in t||(t={}))we.call(t,r)&&x(e,r,t[r]);if(ne)for(var r of ne(t))Le.call(t,r)&&x(e,r,t[r]);return e},P=(e,t)=>Re(e,Be(t));var h=(e,t,r)=>(x(e,typeof t!="symbol"?t+"":t,r),r);import{c as ke,a as Ne,M as G,g as V,b as R,A as C,V as q,E as b,d as i,l as Ue,e as z,f as oe,n as B,h as je,i as $e,r as He,o as xe,j as Ge,k as Ve,m as qe,p as ze,q as Ye,s as Je,t as Ke,u as We,v as Xe,w as Ze,x as Qe,y as et,z as tt,B as rt,C as nt,D as ot,F as st,G as at,H as ut,I as it,J as ct,K as lt,L as mt,N as dt,O as Et,P as ft,Q as pt,R as _t,S as ht,T as gt,U as Tt,W as At,X as bt,Y as Ot,Z as St,_ as Dt,$ as Pt,a0 as Ct,a1 as Mt,a2 as vt,a3 as yt,a4 as Ft,a5 as It,a6 as Rt,a7 as Bt,a8 as wt,a9 as Lt,aa as kt,ab as Nt,ac as Ut,ad as jt,ae as $t,af as Ht,ag as xt,ah as Gt,ai as Vt,aj as qt,ak as zt,al as Yt,am as Jt,an as Kt,ao as Wt,ap as Xt,aq as Zt,ar as Qt,as as er,at as tr,au as rr,av as nr,aw as or,ax as sr,ay as ar,az as ur,aA as ir,aB as cr,aC as lr,aD as mr,aE as dr,aF as Er,aG as fr,aH as pr,aI as _r,aJ as hr}from"./vendor.24d725ed.js";const gr=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}};gr();const Tr="modulepreload",se={},Ar="/vue3-admin/",l=function(t,r){return!r||r.length===0?t():Promise.all(r.map(n=>{if(n=`${Ar}${n}`,n in se)return;se[n]=!0;const o=n.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${a}`))return;const s=document.createElement("link");if(s.rel=o?"stylesheet":Tr,o||(s.as="script",s.crossOrigin=""),s.href=n,document.head.appendChild(s),o)return new Promise((c,u)=>{s.addEventListener("load",c),s.addEventListener("error",u)})})).then(()=>t())};var f;(function(e){e.BASE_HOME="/home",e.BASE_LOGIN="/login"})(f||(f={}));const M="Redirect",g=()=>l(()=>import("./index.11288ef4.js"),["assets/index.11288ef4.js","assets/index.f220f8e2.css","assets/vendor.24d725ed.js"]),br={path:"/redirect",name:M,component:g,meta:{title:M,hideBreadcrumb:!0},children:[{path:"/redirect/:path(.*)",name:M,component:()=>l(()=>import("./Redirect.cc269bb7.js"),["assets/Redirect.cc269bb7.js","assets/vendor.24d725ed.js"]),meta:{title:M,hideBreadcrumb:!0}}]},ae={path:"/:path(.*)*",name:"ErrorPage",component:g,meta:{title:"ErrorPage",hideBreadcrumb:!0},children:[{path:"/:path(.*)*",name:"ErrorPage",component:()=>l(()=>import("./404.34dceca8.js"),["assets/404.34dceca8.js","assets/404.cbb2ea05.css","assets/vendor.24d725ed.js"]),meta:{title:"ErrorPage",hideBreadcrumb:!0}}]},Or={path:"/",name:"Root",redirect:f.BASE_HOME,meta:{title:"Root"}},Sr={path:"/login",name:"Login",component:()=>l(()=>import("./Login.87080c33.js"),["assets/Login.87080c33.js","assets/Login.b99da2f1.css","assets/vendor.24d725ed.js"]),meta:{title:"\u767B\u5F55"}};var Dr=[Or,Sr,ae,br];const Pr=[{path:"/about",name:"About",component:g,redirect:"/about/index",meta:{title:"\u5173\u4E8E\u6211",icon:"el-icon-user",menuNum:100},children:[{path:"index",name:"About",component:()=>l(()=>import("./About.66bc371f.js"),["assets/About.66bc371f.js","assets/About.78685734.css","assets/vendor.24d725ed.js"]),meta:{title:"\u5173\u4E8E\u6211",hideMenu:!0}}]}];var Cr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Pr});const Mr=[{path:"/form",name:"Form",component:g,redirect:"/form/step",meta:{title:"\u8868\u5355",icon:"el-icon-document",menuNum:50},children:[{path:"base",name:"BaseForm",component:()=>l(()=>import("./BaseForm.60b71167.js"),["assets/BaseForm.60b71167.js","assets/vendor.24d725ed.js"]),meta:{title:"\u57FA\u7840\u8868\u5355"}},{path:"step",name:"StepForm",component:()=>l(()=>import("./StepForm.91229ade.js"),["assets/StepForm.91229ade.js","assets/StepForm.1eb7387e.css","assets/vendor.24d725ed.js"]),meta:{title:"\u5206\u5E03\u8868\u5355"}}]}];var vr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Mr});const yr=[{path:"/home",name:"Home",component:g,redirect:"/home/index",meta:{title:"\u5206\u6790\u9875",icon:"el-icon-menu",menuNum:10},children:[{path:"index",name:"Home",component:()=>l(()=>import("./Home.09a7f978.js"),["assets/Home.09a7f978.js","assets/Home.ac3a5eec.css","assets/vendor.24d725ed.js"]),meta:{title:"\u5206\u6790\u9875",hideMenu:!0}}]}];var Fr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:yr});const Ir=[{path:"/icon",name:"Icon",component:g,redirect:"/icon/index",meta:{title:"\u56FE\u6807",icon:"el-icon-discount",menuNum:10},children:[{path:"index",name:"Icon",component:()=>l(()=>import("./Icon.9d0a71d1.js"),["assets/Icon.9d0a71d1.js","assets/Icon.5659f66b.css","assets/vendor.24d725ed.js"]),meta:{title:"\u56FE\u6807",hideMenu:!0}}]}];var Rr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ir});const Br=[{path:"/table",name:"Table",component:g,redirect:"/table/normal",meta:{title:"\u8868\u683C",icon:"el-icon-date",menuNum:30},children:[{path:"normal",name:"Normal",component:()=>l(()=>import("./NormalTable.266b6607.js"),["assets/NormalTable.266b6607.js","assets/NormalTable.c53b993d.css","assets/TableHeader.db6d4582.js","assets/TableHeader.aceab81a.css","assets/vendor.24d725ed.js"]),meta:{title:"\u666E\u901A\u8868\u683C"}},{path:"tree",name:"tree",component:()=>l(()=>import("./TreeTable.98cdc1ae.js"),["assets/TreeTable.98cdc1ae.js","assets/TableHeader.db6d4582.js","assets/TableHeader.aceab81a.css","assets/vendor.24d725ed.js"]),meta:{title:"\u6811\u578B\u8868\u683C"}}]}];var wr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Br});function Lr(){return!1}ke.rawError=!0;const w=Ne({strict:Lr()});function kr(e){e.use(w)}var Nr=Object.defineProperty,Ur=Object.getOwnPropertyDescriptor,Y=(e,t,r,n)=>{for(var o=n>1?void 0:n?Ur(t,r):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(o=(n?s(t,r,o):s(o))||o);return n&&o&&Nr(t,r,o),o};const jr="menu";let v=class extends q{constructor(){super(...arguments);h(this,"menus",[])}get getMenus(){return this.menus}commitMenus(e){this.menus=e}setMenusAction(e){this.commitMenus(e)}};Y([R],v.prototype,"commitMenus",1);Y([C],v.prototype,"setMenusAction",1);v=Y([G({dynamic:!0,namespaced:!0,store:w,name:jr})],v);const $r=V(v);function Hr(e){const t=ue(e);$r.setMenusAction(t)}function ue(e,t=""){const r=[];return e.sort((n,o)=>n.meta.menuNum&&o.meta.menuNum?n.meta.menuNum-o.meta.menuNum:1),e.forEach(n=>{if(!n.meta.hideMenu){const o={path:t?xr([t,n.path]):n.path,title:n.meta.title,name:n.name,icon:n.meta.icon||"",children:[]};n.children&&n.children.length!==0&&(o.children=ue(n.children,o.path)),r.push(o)}}),r}function xr(e){return e.reduce((t,r)=>(t=t.trim().replace("/",""),r=r.trim().replace("/",""),`/${t}/${r}`))}const ie="TOKEN__",ce="USER__INFO__";var le;(function(e){e[e.SESSION=0]="SESSION",e[e.LOCAL=1]="LOCAL"})(le||(le={}));var L;(function(e){e[e.SUCCESS=1e4]="SUCCESS",e[e.ERROR=10001]="ERROR",e[e.TIMEOUT=401]="TIMEOUT",e.TYPE="success"})(L||(L={}));var me;(function(e){e.UNDERLINE="underline",e.CAMEL="camel",e.MIX="mix"})(me||(me={}));var y;(function(e){e.MESSAGE="message",e.MODEL="model"})(y||(y={}));var p;(function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.DELETE="DELETE"})(p||(p={}));var k;(function(e){e.JSON="application/json;charset=UTF-8",e.FORM_URLENCODED="application/x-www-form-urlencoded;charset=UTF-8",e.FORM_DATA="multipart/form-data;charset=UTF-8"})(k||(k={}));function J(e,t){return toString.call(e)===`[object ${t}]`}function F(e){return J(e,"string")}function K(e){return typeof e=="function"}function Gr(e){return e&&Array.isArray(e)}function Vr(e){return e!==null&&J(e,"Object")}function qr(e){return J(e,"Date")}function zr(e){return typeof e=="object"}function de(e=!1){const t=new Date().getTime();return e?`?_t=${t}`:{_t:t}}const Yr="YYYY-MM-DD HH:mm";function Ee(e){for(const t in e){if(e[t]&&e[t]._isAMomentObject&&(e[t]=e[t].format(Yr)),F(t)){const r=e[t];if(r)try{e[t]=F(r)?r.trim():r}catch(n){throw new Error(n)}}Vr(e[t])&&Ee(e[t])}}const O="__ERROR_RESULT__",m={"401":"\u7528\u6237\u6CA1\u6709\u6743\u9650\uFF08\u4EE4\u724C\u3001\u7528\u6237\u540D\u3001\u5BC6\u7801\u9519\u8BEF\uFF09!","403":"\u7528\u6237\u5F97\u5230\u6388\u6743\uFF0C\u4F46\u662F\u8BBF\u95EE\u662F\u88AB\u7981\u6B62\u7684!","404":"\u7F51\u7EDC\u8BF7\u6C42\u9519\u8BEF,\u672A\u627E\u5230\u8BE5\u8D44\u6E90!","405":"\u7F51\u7EDC\u8BF7\u6C42\u9519\u8BEF,\u8BF7\u6C42\u65B9\u6CD5\u672A\u5141\u8BB8!","408":"\u7F51\u7EDC\u8BF7\u6C42\u8D85\u65F6!","500":"\u670D\u52A1\u5668\u9519\u8BEF,\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458!","501":"\u7F51\u7EDC\u672A\u5B9E\u73B0!","502":"\u7F51\u7EDC\u9519\u8BEF!","503":"\u670D\u52A1\u4E0D\u53EF\u7528\uFF0C\u670D\u52A1\u5668\u6682\u65F6\u8FC7\u8F7D\u6216\u7EF4\u62A4!","504":"\u7F51\u7EDC\u8D85\u65F6!","505":"http\u7248\u672C\u4E0D\u652F\u6301\u8BE5\u8BF7\u6C42!"};function W(e){return 1e4+e%1e4===L.SUCCESS}function Jr(e,t){var s;const{isCacheData:r,apiUrl:n,formatDate:o}=t;n&&F(n)&&(e.url=`${n}${e.url}`);const a=e.params||{};return((s=e.method)==null?void 0:s.toUpperCase())===p.GET?F(a)?(e.url=e.url+a+`${r?"":de(!0)}`,e.params=void 0):!r&&(e.params=Object.assign(a||{},de(!1))):F(a)?(e.url=e.url+a,e.params=void 0):(o&&Ee(a),e.data=a,e.params=void 0),e}const X=(e,t)=>{const{isTransformRequestResult:r}=t;if(!r)return e.data;if(!e.data)return O;const{code:n,data:o,message:a}=e.data,s=a||e.data.msg;if(!(W(n)&&(o||s)))return s&&(t.errorMessageMode===y.MODEL?b({title:"\u9519\u8BEF\u63D0\u793A",message:s}):t.errorMessageMode==="message"&&i.error(s)),Promise.reject(new Error(s)),O;if(W(n))return o||s;if(n===L.TIMEOUT){const u="\u767B\u5F55\u8D85\u65F6,\u8BF7\u91CD\u65B0\u767B\u5F55!";return b({title:"\u64CD\u4F5C\u5931\u8D25",message:u}),Promise.reject(new Error(u)),O}if(!W(n)){if(s)i.error(s),Promise.reject(new Error(s));else{const u="\u64CD\u4F5C\u5931\u8D25,\u7CFB\u7EDF\u5F02\u5E38!";i.error(u),Promise.reject(new Error(u))}return O}return O};function Z(e){return e}function Kr(e){var n;const t=e==null?void 0:e.headers;return((t==null?void 0:t["Content-Type"])||(t==null?void 0:t["content-type"]))!==k.FORM_URLENCODED||!Reflect.has(e,"data")||((n=e.method)==null?void 0:n.toUpperCase())===p.GET?e:P(A({},e),{data:Ue.stringify(e.data)})}function Wr(e){var s,c,u,E,te,re;const{response:t,code:r,message:n}=e||{},o=(u=(c=(s=t==null?void 0:t.data)==null?void 0:s.error)==null?void 0:c.message)!=null?u:"",a=(te=(E=e==null?void 0:e.toString)==null?void 0:E.call(e))!=null?te:"";try{r==="ECONNABORTED"&&n.indexOf("timeout")!==-1&&b({title:"\u8BF7\u6C42\u5931\u8D25",message:e.message,type:"error"}),(a==null?void 0:a.includes("Network Error"))&&b({title:"\u7F51\u7EDC\u5F02\u5E38",message:"\u8BF7\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC\u8FDE\u63A5\u662F\u5426\u6B63\u5E38\uFF01",type:"error"})}catch(Fe){throw new Error(Fe)}return Xr((re=e==null?void 0:e.response)==null?void 0:re.status,o),Promise.reject(e)}function Xr(e,t){switch(e){case 400:i.error(t);break;case 401:i.error(m["401"]),D.logout();break;case 403:i.error(m["403"]);break;case 404:i.error(m["404"]);break;case 405:i.error(m["405"]);break;case 408:i.error(m["408"]);break;case 500:i.error(m["500"]);break;case 501:i.error(m["501"]);break;case 502:i.error(m["502"]);break;case 503:i.error(m["503"]);break;case 504:i.error(m["504"]);break;case 505:i.error(m["505"]);break}}let _=new Map;class fe{addPending(t){this.removePending(t);const r=pe(t);t.cancelToken=t.cancelToken||new z.CancelToken(n=>{_.has(r)||_.set(r,n)})}removeAllPending(){_.forEach(t=>{t&&K(t)&&t()}),_.clear()}removePending(t){const r=pe(t);if(_.has(r)){const n=_.get(r);n&&n(r),_.delete(r)}}reset(){_=new Map}}function pe(e){const t=e.params;let r="";return t&&(r=Reflect.ownKeys(t).reduce((n,o)=>(o==="_t"||(n+=o+"="+t[o]+"&"),n),"?")),[e.method,e.url,r].join("&")}function _e(e){const t=Gr(e)?[]:{};for(const r in e)if(Reflect.has(e,r)){const n=e[r];zr(n)?t[r]=_e(n):qr(n)?t[r]=new Date(n):t[r]=n}return t}function Zr(e){return e.replace(/_(\w)/g,function(t,r){return r.toUpperCase()})}function N(e,t=!0){return e instanceof Array?e.forEach(function(r){N(r,t)}):e instanceof Object&&Object.keys(e).forEach(function(r){const n=Zr(r);n!==r&&(e[n]=e[r],t&&delete e[r]),N(e[n],t)}),e}class Qr{constructor(t){h(this,"config");h(this,"instance");this.config=t,this.instance=z.create(t),this.setInterceptors(this.instance)}get getConfig(){return this.config}get getinstance(){return this.instance}create(t){this.instance=z.create(t)}setHeader(t){!this.instance||Object.assign(this.instance.defaults.headers,t)}setInterceptors(t){const r=new fe;t.interceptors.request.use(n=>{var s;const{headers:{ignoreCancelToken:o}}=n;return!(o!==void 0?o:(s=this.config.requestOptions)==null?void 0:s.ignoreCancelToken)&&r.addPending(n),n.headers.Authorization=D.getTokenState||"",n},void 0),t.interceptors.response.use(n=>(n&&r.removePending(n.config),n),Wr)}configAxios(t){!this.instance||this.create(t)}request(t,r){let n=_e(t);const{requestOptions:o}=this.config,a=Object.assign({},o,r);return n=Jr(n,a),n=Kr(n),new Promise((s,c)=>{this.instance.request(n).then(u=>{if(X&&K(X)){const E=X(u,a);N(E,!1),E!==O?s(E):c(new Error("request error!"));return}N(u,!1),s(u)}).catch(u=>{if(Z&&K(Z)){c(Z(u));return}c(u)})})}get(t,r,n){return this.request({url:t,params:r,method:p.GET},n)}post(t,r,n){return this.request({url:t,params:r,method:p.POST},n)}put(t,r,n){return this.request({url:t,params:r,method:p.PUT},n)}delete(t,r,n){return this.request({url:t,params:r,method:p.DELETE},n)}}function en(e={}){return new Qr(A({baseURL:"/mock-api/",timeout:1e4,withCredentials:!0,headers:{"Content-Type":k.JSON},requestOptions:{isTransformRequestResult:!0,formatDate:!0,apiUrl:"",errorMessageMode:y.MESSAGE,isCacheData:!1,ignoreCancelToken:!0}},e))}const U=en();var S;(function(e){e.Login="/login",e.GetUserInfo="/getuserinfo",e.TableList="/table/list",e.TableTreeList="/table/treelist"})(S||(S={}));function tn(e,t=y.MODEL){return U.request({url:S.Login,method:"POST",params:e},{errorMessageMode:t})}function rn(e){return U.get(S.GetUserInfo,e)}function Jn(e){return U.get(S.TableList,e)}function Kn(e){return U.get(S.TableTreeList,e)}var nn=Object.defineProperty,on=Object.getOwnPropertyDescriptor,T=(e,t,r,n)=>{for(var o=n>1?void 0:n?on(t,r):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(o=(n?s(t,r,o):s(o))||o);return n&&o&&nn(t,r,o),o};const sn="user";function he(e){const t=localStorage.getItem(e)||"";return t.includes("{")?JSON.parse(t):t}function ge(e,t){localStorage.setItem(e,JSON.stringify(t))}let d=class extends q{constructor(){super(...arguments);h(this,"token","");h(this,"userInfo",{})}get getTokenState(){return this.token||he(ie)}get getUserInfoState(){return this.userInfo.username?this.userInfo:he(ce)}commitToken(e){this.token=e,ge(ie,e)}commitUserInfo(e){this.userInfo=e,ge(ce,e)}async loginAction(e){try{const{token:t}=await tn(e);this.commitToken(t);const r=await this.getUserInfoAction();return await $.replace(f.BASE_HOME),r}catch{return null}}logout(e=!1){e&&$.push(f.BASE_LOGIN)}async getUserInfoAction(){const e=await rn({token:"token__token"});return this.commitUserInfo(e),e}async confirmLoginOut(){oe.confirm("\u6E29\u99A8\u63D0\u793A","\u662F\u5426\u786E\u8BA4\u9000\u51FA\u7CFB\u7EDF\uFF1F",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88"}).then(()=>{this.logout(!0)})}};T([R],d.prototype,"commitToken",1);T([R],d.prototype,"commitUserInfo",1);T([C],d.prototype,"loginAction",1);T([C],d.prototype,"logout",1);T([C],d.prototype,"getUserInfoAction",1);T([C],d.prototype,"confirmLoginOut",1);d=T([G({dynamic:!0,namespaced:!0,store:w,name:sn})],d);const D=V(d);var an=Object.defineProperty,un=Object.getOwnPropertyDescriptor,Te=(e,t,r,n)=>{for(var o=n>1?void 0:n?un(t,r):t,a=e.length-1,s;a>=0;a--)(s=e[a])&&(o=(n?s(t,r,o):s(o))||o);return n&&o&&an(t,r,o),o};const cn="permission";let j=class extends q{constructor(){super(...arguments);h(this,"isDynamicAddedRouteState",!1)}get getIsDynamicAddedRouteState(){return this.isDynamicAddedRouteState}commitDynamicAddedRouteState(e){this.isDynamicAddedRouteState=e}};Te([R],j.prototype,"commitDynamicAddedRouteState",1);j=Te([G({dynamic:!0,namespaced:!0,store:w,name:cn})],j);const Ae=V(j),Q=f.BASE_LOGIN;B.exports.configure({showSpinner:!1});const ln=[Q];function mn(e){e.beforeEach((t,r,n)=>{if(B.exports.start(),r.path===Q&&t.name===ae.name){n(f.BASE_HOME);return}if(ln.includes(t.path)){B.exports.done(),n();return}if(!D.getTokenState){const u={path:Q,replace:!0};t.path&&(u.query=P(A({},u.query),{redirect:encodeURIComponent(t.fullPath)})),n(u);return}if(Ae.getIsDynamicAddedRouteState){n();return}const a=r.query.redirect||t.path,s=decodeURIComponent(a),c=s===t.path?P(A({},t),{replace:!0}):s;Ae.commitDynamicAddedRouteState(!0),n(c)}),e.afterEach(()=>{B.exports.done()})}const dn=e=>/^(\/|#)/.test(e);function En(e){const t=document.body;e.afterEach(async r=>(dn(r==null?void 0:r.href)&&t.scrollTo(0,0),!0))}const be={closeMessageOnSwitch:!0,removeAllHttpPending:!1};function fn(e){const{closeMessageOnSwitch:t}=be;e.beforeEach(async()=>{try{t&&(b.closeAll(),i.closeAll())}catch(r){console.warn("message guard error:"+r)}return!0})}function pn(e){const{removeAllHttpPending:t}=be;let r;t&&(r=new fe),e.beforeEach(async()=>(t&&(r==null||r.removeAllPending()),!0))}const _n={}.VITE_GLOB_APP_TITLE;function hn(e){console.warn(`[${_n} warn]:${e}`)}function gn(){return{VITE_PUBLIC_PATH:"/vue3-admin/",VITE_APP_TITLE:"Vue3-Admin",VITE_APP_SHORT_NAME:"Vue3Admin",BASE_URL:"/vue3-admin/",MODE:"production",DEV:!1,PROD:!0}}const Tn=()=>{const{VITE_APP_TITLE:e,VITE_API_URL:t,VITE_APP_SHORT_NAME:r,VITE_API_URL_PREFIX:n,VITE_UPLOAD_URL:o}=gn();return/[a-zA-Z\_]*/.test(r)||hn("VITE_APP_SHORT_NAME Variables can only be characters/underscores, please modify in the environment variables and re-running."),{title:e,apiUrl:t,shortName:r,urlPrefix:n,uploadUrl:o}};function An(e){document.title=e;const t=navigator.userAgent;if(/\bMicroMessenger\/([\d.]+)/.test(t)&&/ip(hone|od|ad)/i.test(t)){const n=document.createElement("iframe");n.src="/favicon.ico",n.style.display="none",n.onload=function(){setTimeout(function(){n.remove()},9)},document.body.appendChild(n)}}function bn(e,t){if(e){const r=e?` ${e} - ${t} `:`${t}`;An(r)}}const On=Tn();function Sn(e){e.afterEach(async t=>(t.name!==M&&bn(t.meta.title,On.title),!0))}function Dn(e){const r=[f.BASE_HOME];e.beforeEach(async n=>{var o;if(n.name&&r.includes(n.path))try{const a=await D.getUserInfoAction(),s=((o=D.getTokenState)==null?void 0:o.split("."))||[];if(!s.length)return!0;const c=s.length>1?JSON.parse(decodeURIComponent(atob(s[1]))):"",u=c.iat*1e3,E=new Date(a.updated_at).getTime();(u<E||a.roles!==c.role_id)&&D.logout(!0)}catch(a){console.log(a)}return!0})}function Pn(e){pn(e),En(e),fn(e),Sn(e),mn(e),Dn(e)}const Oe={"./modules/about.ts":Cr,"./modules/form.ts":vr,"./modules/home.ts":Fr,"./modules/icons.ts":Rr,"./modules/table.ts":wr},Se=Object.keys(Oe).reduce((e,t)=>[...e,...Oe[t].default],[]),Cn=[...Se,...Dr];Hr(Se);const $=je({history:$e(),routes:Cn});function Mn(e){e.use($),Pn($)}var vn=(e,t)=>{const r=e.__vccOpts||e;for(const[n,o]of t)r[n]=o;return r};const yn={};function Fn(e,t){const r=He("router-view");return xe(),Ge(r)}var In=vn(yn,[["render",Fn]]);const Rn=[Ve,qe,ze,Ye,Je,Ke,We,Xe,Ze,Qe,et,tt,rt,nt,ot,st,at,ut,it,ct,lt,mt,dt,Et,ft,pt,_t,ht,gt,Tt,At,bt,Ot,St,Dt,Pt,Ct,Mt,vt,yt,Ft,It,Rt,Bt,wt,Lt,kt,Nt,Ut,jt,$t,Ht,xt,Gt,Vt,qt,zt,Yt,Jt,Kt,Wt,Xt,Zt,Qt,er,tr,rr,nr,or,sr,ar,ur,ir,cr,lr,mr,dr,Er],Bn=[fr,pr,i,oe,b];function wn(e){Rn.forEach(t=>{e.component(t.name,t)}),Bn.forEach(t=>{e.use(t)})}function Ln(e){wn(e)}function H(e,{message:t="ok"}={}){return{code:0,data:e,message:t,type:"success"}}function ee(e,t,r,{message:n="ok"}={}){const o=Pe(e,t,r);return P(A({},H(o)),{total:r.length,message:n})}function De(e="Request failed",{code:t=-1,result:r=null}={}){return{code:t,result:r,message:e,type:"error"}}function Pe(e,t,r){const n=(e-1)*Number(t);return n+Number(t)>=r.length?r.slice(n,r.length):r.slice(n,n+Number(t))}function Ce({headers:e}){return e==null?void 0:e.authorization}var kn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",resultSuccess:H,resultPageSuccess:ee,resultError:De,pagination:Pe,getRequestToken:Ce});const Nn=(()=>new Array(50).fill("").map((e,t)=>({id:t,date:"@datetime",name:"@cname()",email:"@email",address:"@county(true)"})))(),Un=(()=>new Array(10).fill("").map((e,t)=>({id:`${t}`,date:"@date('yyyy-MM-dd')",name:"@cname()",email:"@email",address:"@province",children:new Array(Math.floor(Math.random()*20+1)).fill("").map((r,n)=>({id:`${t}-${n}`,date:"@date('yyyy-MM-dd')",name:"@cname()",email:"@email",address:"@province"}))})))();var jn=[{url:"/mock-api/table/list",timeout:100,method:"get",response:({query:e})=>{const{page:t=1,pageSize:r=20}=e;return ee(t,r,Nn)}},{url:"/mock-api/table/treelist",timeout:100,method:"get",response:({query:e})=>{const{page:t=1,pageSize:r=20}=e;return ee(t,r,Un)}}],$n=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:jn});const Me=[{id:1,username:"admin",token:"user_token_1",password:"123456"},{id:2,username:"test",token:"user_token_2",password:"123456"}],Hn={url:"/mock-api/login",timeout:200,method:"post",response:({body:e})=>{const{username:t,password:r}=e,n=Me.find(o=>o.username===t&&o.password===r);return H(n)}},xn={url:"/mock-api/getuserinfo",method:"get",response:e=>{const t=Ce(e);if(!t)return De("Invalid token");const r=Me.find(n=>n.token===t);return H(r)}};var Gn=[Hn,xn],Vn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Gn});const ve={"./_util.ts":kn,"./data/table.ts":$n,"./sys/user.ts":Vn},ye=[];Object.keys(ve).forEach(e=>{e.includes("/_")||ye.push(...ve[e].default)});function qn(){_r(ye)}const I=hr(In);I.config.globalProperties.foo="bar";Mn(I);kr(I);Ln(I);I.mount("#app");qn();export{vn as _,Kn as a,Tn as b,Jn as g,$r as m,$ as r,w as s,D as u};
