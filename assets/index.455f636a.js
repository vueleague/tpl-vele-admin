var j=Object.defineProperty,R=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var H=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,D=(e,t)=>{for(var n in t||(t={}))G.call(t,n)&&H(e,n,t[n]);if(W)for(var n of W(t))q.call(t,n)&&H(e,n,t[n]);return e},F=(e,t)=>R(e,z(t));var I=(e,t,n)=>(H(e,typeof t!="symbol"?t+"":t,n),n);import{_ as w,s as Z,u as A,r as J,m as K,b as Q}from"./index.a94fbcfe.js";import{q as f,r as o,o as c,s as h,O as a,M as X,g as Y,V as ee,b as S,A as k,D as g,H as r,B as y,j as m,Z as te,_ as ne,$ as oe,w as b,a0 as se,x,y as B,a1 as ae,t as O,F as T,a2 as re,L as ce,a3 as L,a4 as le,u as ue,v as _e,C as ie,R as de}from"./vendor.b909feb4.js";const pe=f({name:"LayoutContent",setup(){return{}}}),me={class:"layout-content-container"};function fe(e,t,n,_,l,u){const s=o("router-view");return c(),h("div",me,[a(s)])}var he=w(pe,[["render",fe],["__scopeId","data-v-04ac938a"]]);const ge=f({name:"LayoutFooter",setup(){return{}}}),ve={class:"layout-footer-container"};function ye(e,t,n,_,l,u){return c(),h("div",ve," LayoutFooter-container ")}var we=w(ge,[["render",ye]]),$e=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,C=(e,t,n,_)=>{for(var l=_>1?void 0:_?Ce(t,n):t,u=e.length-1,s;u>=0;u--)(s=e[u])&&(l=(_?s(t,n,l):s(l))||l);return _&&l&&$e(t,n,l),l};const Ie="layout";let v=class extends ee{constructor(){super(...arguments);I(this,"isCollapse",!1);I(this,"windowsHeight",0);I(this,"footerHeirght",48);I(this,"headerHeirght",48);I(this,"loadingInstance",null)}get getIsCollapse(){return this.isCollapse}get getWindowsHeight(){return this.windowsHeight}get getLoadingInstance(){return this.loadingInstance}get getContentHeight(){return this.windowsHeight-this.footerHeirght-this.headerHeirght}commitIsCollapse(e){this.isCollapse=e}commitWindowsHeight(e){e<400&&(e=400),this.windowsHeight=e}commitLoadingInstance(e){this.loadingInstance=e}setIsCollapse(e){this.commitIsCollapse(e)}setWindowsHeight(e){this.commitWindowsHeight(e)}setLoadingInstance(e){this.commitLoadingInstance(e)}};C([S],v.prototype,"commitIsCollapse",1);C([S],v.prototype,"commitWindowsHeight",1);C([S],v.prototype,"commitLoadingInstance",1);C([k],v.prototype,"setIsCollapse",1);C([k],v.prototype,"setWindowsHeight",1);C([k],v.prototype,"setLoadingInstance",1);v=C([X({dynamic:!0,namespaced:!0,store:Z,name:Ie})],v);const M=Y(v);const be={class:"Trigger"},xe=f({setup(e){const t=g(()=>M.getIsCollapse);function n(){M.setIsCollapse(!t.value)}return(_,l)=>{const u=o("el-icon");return c(),h("div",be,[a(u,{class:"icon",onClick:n},{default:r(()=>[y(t)?(c(),m(y(te),{key:0})):(c(),m(y(ne),{key:1}))]),_:1})])}}});var Me=w(xe,[["__scopeId","data-v-4242ab7e"]]);const He={class:"user-dropdown"},Le={class:"el-dropdown-link"},Se={class:"user-name"},ke=B(" \u767B\u51FA "),Be=f({setup(e){const t=g(()=>A.getUserInfoState);function n(){A.confirmLoginOut()}return(_,l)=>{const u=o("el-icon"),s=o("el-dropdown-item"),d=o("el-dropdown-menu"),i=o("el-dropdown");return c(),h("div",He,[a(i,{style:{height:"100%"}},{dropdown:r(()=>[a(d,null,{default:r(()=>[a(s,{icon:y(oe),onClick:n},{default:r(()=>[ke]),_:1},8,["icon"])]),_:1})]),default:r(()=>[b("div",Le,[a(u,null,{default:r(()=>[a(y(se))]),_:1}),b("span",Se,x(y(t).username),1)])]),_:1})])}}});var Oe=w(Be,[["__scopeId","data-v-277aed6f"]]);const Te=f({setup(e){const{currentRoute:t}=ae(),n=g(()=>t.value.path.includes("index")?[t.value]:t.value.matched);return(_,l)=>{const u=o("el-breadcrumb-item"),s=o("el-breadcrumb");return c(),m(s,{separator:"/",route:""},{default:r(()=>[(c(!0),h(T,null,O(y(n),d=>(c(),m(u,{to:{path:d.path}},{default:r(()=>[B(x(d.meta.title),1)]),_:2},1032,["to"]))),256))]),_:1})}}});const Pe=f({name:"LayoutHeader",components:{Trigger:Me,Breadcrumb:Te,UserDropdown:Oe},setup(){return{}}}),We={class:"layout-header-container"};function De(e,t,n,_,l,u){const s=o("Trigger"),d=o("Breadcrumb"),i=o("el-col"),p=o("UserDropdown"),$=o("el-row");return c(),h("div",We,[a($,null,{default:r(()=>[a(i,{span:12,class:"header-left-container"},{default:r(()=>[a(s,{class:"mr-5"}),a(d)]),_:1}),a(i,{span:12,class:"header-right-container"},{default:r(()=>[a(p)]),_:1})]),_:1})])}var Fe=w(Pe,[["render",De],["__scopeId","data-v-1345f44e"]]);function Ae(e){console.error(e)}function N(){const{push:e}=J;function t(n){!n||e(n).catch(Ae)}return t}const Ne=f({name:"MyMenuItem"}),Ve=f(F(D({},Ne),{props:{menu:{type:Object,default:{}}},setup(e){const t=e,n=N(),_=g(()=>t.menu.children.length>0);function l(u){n(u.path)}return(u,s)=>{const d=o("MyMenuItem"),i=o("el-sub-menu"),p=o("el-menu-item");return y(_)?(c(),m(i,{key:0,index:e.menu.name},{title:r(()=>[b("span",null,x(e.menu.title),1)]),default:r(()=>[(c(!0),h(T,null,O(e.menu.children,$=>(c(),m(d,{menu:$,key:$.path},null,8,["menu"]))),128))]),_:1},8,["index"])):(c(),m(p,{key:1,index:e.menu.name,onClick:s[0]||(s[0]=$=>l(e.menu))},{title:r(()=>[B(x(e.menu.title),1)]),_:1},8,["index"]))}}}));function Ee(){return{"background-color":"#282c34","text-color":"#fff","active-text-color":"#1890ff"}}const Ue=f({components:{MenuItem:Ve},setup(){const e=g(()=>M.getIsCollapse),t=g(()=>K.getMenus),_=re().name,l=N();function u(i){l(i.path)}function s(i,p){console.log(i,p)}function d(i,p){console.log(i,p)}return{menus:t,isCollapse:e,handleOpen:s,handleClose:d,getMenuColor:Ee,defaultActive:_,onClick:u}}});function je(e,t,n,_,l,u){const s=o("MenuItem"),d=o("el-menu"),i=o("el-scrollbar");return c(),m(i,{"wrap-class":"scrollbar-wrapper"},{default:r(()=>[a(d,ce({"default-active":e.defaultActive,class:"el-menu-vertical-demo",onOpen:e.handleOpen,onClose:e.handleClose,collapse:e.isCollapse},e.getMenuColor()),{default:r(()=>[(c(!0),h(T,null,O(e.menus,p=>(c(),m(s,{menu:p,key:p.path},null,8,["menu"]))),128))]),_:1},16,["default-active","onOpen","onClose","collapse"])]),_:1})}var Re=w(Ue,[["render",je],["__scopeId","data-v-7a5f9416"]]),ze="/vue3-element-plus-admin/assets/logo.a67ad87f.svg";const Ge=f({name:"Menu",components:{MenuBar:Re},setup(){const e=g(()=>M.getIsCollapse),t=g(()=>({width:e.value?"64px":"200px"})),{shortName:n,title:_}=Q();return{appTitle:g(()=>_),getTitleStyle:t,isCollapse:e}}}),qe=e=>(ue("data-v-9111c0be"),e=e(),_e(),e),Ze={class:"menu-container"},Je=qe(()=>b("img",{src:ze},null,-1)),Ke={key:0},Qe={class:"menu"};function Xe(e,t,n,_,l,u){const s=o("menu-bar");return c(),h("div",Ze,[b("div",{class:"app-title",style:le(e.getTitleStyle),onClick:t[0]||(t[0]=d=>e.$router.push("/"))},[Je,e.isCollapse?L("",!0):(c(),h("span",Ke,x(e.appTitle),1))],4),b("div",Qe,[a(s)])])}var Ye=w(Ge,[["render",Xe],["__scopeId","data-v-9111c0be"]]);const et=f({name:"Layout",components:{LayoutContent:he,LayoutFooter:we,LayoutHeader:Fe,LayoutMenu:Ye},setup(){const e=ie({header:!0,footer:!1});return de(()=>{const t=()=>{const n=window.innerHeight||document.documentElement.clientWidth||document.body.clientHeight;M.setWindowsHeight(n)};t(),window.addEventListener("resize",t)}),{isShow:e}}});function tt(e,t,n,_,l,u){const s=o("layout-menu"),d=o("el-aside"),i=o("layout-header"),p=o("el-header"),$=o("layout-content"),V=o("el-main"),E=o("layout-footer"),U=o("el-footer"),P=o("el-container");return c(),m(P,null,{default:r(()=>[a(d,{width:"inherit"},{default:r(()=>[a(s)]),_:1}),a(P,null,{default:r(()=>[e.isShow.header?(c(),m(p,{key:0},{default:r(()=>[a(i)]),_:1})):L("",!0),a(V,null,{default:r(()=>[a($)]),_:1}),e.isShow.footer?(c(),m(U,{key:1},{default:r(()=>[a(E)]),_:1})):L("",!0)]),_:1})]),_:1})}var at=w(et,[["render",tt],["__scopeId","data-v-d9f17f4a"]]);export{at as default};