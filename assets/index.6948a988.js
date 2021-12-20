var q=Object.defineProperty,Q=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var M=(e,t,n)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,P=(e,t)=>{for(var n in t||(t={}))J.call(t,n)&&M(e,n,t[n]);if(N)for(var n of N(t))Y.call(t,n)&&M(e,n,t[n]);return e},W=(e,t)=>Q(e,Z(t));var b=(e,t,n)=>(M(e,typeof t!="symbol"?t+"":t,n),n);import{_ as v,s as ee,u as D,r as te,m as ne,b as oe}from"./index.8853f0fe.js";import{aK as f,r as o,o as a,aL as m,b2 as u,M as se,g as ae,V as re,b as H,A as T,aW as h,b9 as O,aZ as i,aQ as $,aR as I,aO as V,aP as U,aS as k,bb as ce,j as g,aN as B,aU as S,aM as A,bc as j,bd as le,b1 as ue,be as R,aV as ie,b4 as _e}from"./vendor.c2753726.js";const de=f({name:"LayoutContent",setup(){return{}}}),pe={class:"layout-content-container"};function me(e,t,n,l,s,r){const c=o("router-view");return a(),m("div",pe,[u(c)])}var fe=v(de,[["render",me],["__scopeId","data-v-04ac938a"]]);const he=f({name:"LayoutFooter",setup(){return{}}}),ge={class:"layout-footer-container"};function ve(e,t,n,l,s,r){return a(),m("div",ge," LayoutFooter-container ")}var ye=v(he,[["render",ve]]),$e=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,w=(e,t,n,l)=>{for(var s=l>1?void 0:l?Ce(t,n):t,r=e.length-1,c;r>=0;r--)(c=e[r])&&(s=(l?c(t,n,s):c(s))||s);return l&&s&&$e(t,n,s),s};const we="layout";let y=class extends re{constructor(){super(...arguments);b(this,"isCollapse",!1);b(this,"windowsHeight",0);b(this,"footerHeirght",48);b(this,"headerHeirght",48);b(this,"loadingInstance",null)}get getIsCollapse(){return this.isCollapse}get getWindowsHeight(){return this.windowsHeight}get getLoadingInstance(){return this.loadingInstance}get getContentHeight(){return this.windowsHeight-this.footerHeirght-this.headerHeirght}commitIsCollapse(e){this.isCollapse=e}commitWindowsHeight(e){e<400&&(e=400),this.windowsHeight=e}commitLoadingInstance(e){this.loadingInstance=e}setIsCollapse(e){this.commitIsCollapse(e)}setWindowsHeight(e){this.commitWindowsHeight(e)}setLoadingInstance(e){this.commitLoadingInstance(e)}};w([H],y.prototype,"commitIsCollapse",1);w([H],y.prototype,"commitWindowsHeight",1);w([H],y.prototype,"commitLoadingInstance",1);w([T],y.prototype,"setIsCollapse",1);w([T],y.prototype,"setWindowsHeight",1);w([T],y.prototype,"setLoadingInstance",1);y=w([se({dynamic:!0,namespaced:!0,store:ee,name:we})],y);const x=ae(y);const be=f({name:"Trigger",setup(){const e=h(()=>x.getIsCollapse),t=h(()=>e.value?"el-icon-s-unfold":"el-icon-s-fold");function n(){x.setIsCollapse(!e.value)}return{iconClass:t,changCollapse:n}}}),Ie={class:"Trigger"};function xe(e,t,n,l,s,r){const c=o("el-icon");return a(),m("div",Ie,[u(c,{class:O(e.iconClass),onClick:e.changCollapse},null,8,["class","onClick"])])}var Le=v(be,[["render",xe],["__scopeId","data-v-c1e76f36"]]);const Oe=f({setup(){const e=h(()=>D.getUserInfoState);function t(){D.confirmLoginOut()}return{logout:t,userInfo:e}}}),Se=e=>(V("data-v-0fee3b9c"),e=e(),U(),e),Me={class:"user-dropdown"},He={class:"el-dropdown-link"},Te={class:"user-name"},ke=Se(()=>$("i",{class:"el-icon-arrow-down el-icon--right"},null,-1)),Be=k(" \u767B\u51FA ");function Ae(e,t,n,l,s,r){const c=o("el-icon"),d=o("el-dropdown-item"),_=o("el-dropdown-menu"),p=o("el-dropdown");return a(),m("div",Me,[u(p,null,{dropdown:i(()=>[u(_,null,{default:i(()=>[u(d,{icon:"el-icon-switch-button",onClick:e.logout},{default:i(()=>[Be]),_:1},8,["onClick"])]),_:1})]),default:i(()=>[$("div",He,[u(c,{class:"el-icon-user-solid"}),$("span",Te,I(e.userInfo.username),1),ke])]),_:1})])}var Re=v(Oe,[["render",Ae],["__scopeId","data-v-0fee3b9c"]]);const Ee=f({setup(e){const{currentRoute:t}=ce();console.log();const n=h(()=>t.value.path.includes("index")?[t.value]:t.value.matched);return console.log(n.value),(l,s)=>{const r=o("el-breadcrumb-item"),c=o("el-breadcrumb");return a(),g(c,{separator:"/",route:""},{default:i(()=>[(a(!0),m(A,null,B(S(n),d=>(a(),g(r,{to:{path:d.path}},{default:i(()=>[k(I(d.meta.title),1)]),_:2},1032,["to"]))),256))]),_:1})}}});const Ne=f({name:"LayoutHeader",components:{Trigger:Le,Breadcrumb:Ee,UserDropdown:Re},setup(){return{}}}),Pe={class:"layout-header-container"};function We(e,t,n,l,s,r){const c=o("Trigger"),d=o("Breadcrumb"),_=o("el-col"),p=o("UserDropdown"),C=o("el-row");return a(),m("div",Pe,[u(C,null,{default:i(()=>[u(_,{span:12,class:"header-left-container"},{default:i(()=>[u(c,{class:"mr-5"}),u(d)]),_:1}),u(_,{span:12,class:"header-right-container"},{default:i(()=>[u(p)]),_:1})]),_:1})])}var De=v(Ne,[["render",We],["__scopeId","data-v-1345f44e"]]);const Ve=["xlink:href"],Ue=f({props:{prefix:{type:String,default:"icon"},name:{type:String,required:!0},size:{type:[Number,String],default:16},spin:{type:Boolean,default:!1}},setup(e){const t=e,n=h(()=>`#${t.prefix}-${t.name}`),l=h(()=>{const{size:s}=t;let r=`${s}`;return r=`${r.replace("px","")}px`,{width:r,height:r}});return(s,r)=>(a(),m("svg",{class:O(["svg-icon",s.$attrs.class,e.spin&&"svg-icon-spin"]),style:j(S(l)),"aria-hidden":"true"},[$("use",{"xlink:href":S(n)},null,8,Ve)],6))}});var z=v(Ue,[["__scopeId","data-v-f1db07a6"]]);function je(e){console.error(e)}function F(){const{push:e}=te;function t(n){!n||e(n).catch(je)}return t}const ze=f({name:"MyMenuItem"}),Fe=f(W(P({},ze),{props:{menu:{type:Object,default:{}}},setup(e){const t=e,n=F(),l=h(()=>t.menu.children.length>0);function s(r){n(r.path)}return(r,c)=>{const d=o("MyMenuItem"),_=o("el-sub-menu"),p=o("el-menu-item");return S(l)?(a(),g(_,{key:0,index:e.menu.name},{title:i(()=>[e.menu.icon.includes("el")?(a(),m("i",{key:0,class:O(e.menu.icon)},null,2)):(a(),g(z,{key:1,name:e.menu.icon},null,8,["name"])),$("span",null,I(e.menu.title),1)]),default:i(()=>[(a(!0),m(A,null,B(e.menu.children,C=>(a(),g(d,{menu:C,key:C.path},null,8,["menu"]))),128))]),_:1},8,["index"])):(a(),g(p,{key:1,index:e.menu.name,onClick:c[0]||(c[0]=C=>s(e.menu))},{title:i(()=>[k(I(e.menu.title),1)]),default:i(()=>[e.menu.icon.includes("el")?(a(),m("i",{key:0,class:O(e.menu.icon)},null,2)):(a(),g(z,{key:1,name:e.menu.icon},null,8,["name"]))]),_:1},8,["index"]))}}}));var L;(function(e){e.BACKGROUND_COLOR="#282c34",e.TEXT_COLOR="#fff",e.ACTIVE_TEXT_COLOR="#1890ff"})(L||(L={}));function Ge(){return{"background-color":L.BACKGROUND_COLOR,"text-color":L.TEXT_COLOR,"active-text-color":L.ACTIVE_TEXT_COLOR}}const Xe=f({components:{MenuItem:Fe},setup(){const e=h(()=>x.getIsCollapse),t=h(()=>ne.getMenus),l=le().name,s=F();function r(_){s(_.path)}function c(_,p){console.log(_,p)}function d(_,p){console.log(_,p)}return{menus:t,isCollapse:e,handleOpen:c,handleClose:d,getMenuColor:Ge,defaultActive:l,onClick:r}}});function Ke(e,t,n,l,s,r){const c=o("MenuItem"),d=o("el-menu"),_=o("el-scrollbar");return a(),g(_,{"wrap-class":"scrollbar-wrapper"},{default:i(()=>[u(d,ue({defaultActive:e.defaultActive,class:"el-menu-vertical-demo",onOpen:e.handleOpen,onClose:e.handleClose,collapse:e.isCollapse},e.getMenuColor()),{default:i(()=>[(a(!0),m(A,null,B(e.menus,p=>(a(),g(c,{menu:p,key:p.path},null,8,["menu"]))),128))]),_:1},16,["defaultActive","onOpen","onClose","collapse"])]),_:1})}var qe=v(Xe,[["render",Ke],["__scopeId","data-v-443b01ab"]]),Qe="/vue3-element-plus-admin/assets/logo.a67ad87f.svg";const Ze=f({name:"Menu",components:{MenuBar:qe},setup(){const e=h(()=>x.getIsCollapse),t=h(()=>({width:e.value?"64px":"200px"})),{shortName:n,title:l}=oe();return{appTitle:h(()=>l),getTitleStyle:t,isCollapse:e}}}),Je=e=>(V("data-v-9111c0be"),e=e(),U(),e),Ye={class:"menu-container"},et=Je(()=>$("img",{src:Qe},null,-1)),tt={key:0},nt={class:"menu"};function ot(e,t,n,l,s,r){const c=o("menu-bar");return a(),m("div",Ye,[$("div",{class:"app-title",style:j(e.getTitleStyle),onClick:t[0]||(t[0]=d=>e.$router.push("/"))},[et,e.isCollapse?R("",!0):(a(),m("span",tt,I(e.appTitle),1))],4),$("div",nt,[u(c)])])}var st=v(Ze,[["render",ot],["__scopeId","data-v-9111c0be"]]);const at=f({name:"Layout",components:{LayoutContent:fe,LayoutFooter:ye,LayoutHeader:De,LayoutMenu:st},setup(){const e=ie({header:!0,footer:!1});return _e(()=>{const t=()=>{const n=window.innerHeight||document.documentElement.clientWidth||document.body.clientHeight;x.setWindowsHeight(n)};t(),window.addEventListener("resize",t)}),{isShow:e}}});function rt(e,t,n,l,s,r){const c=o("layout-menu"),d=o("el-aside"),_=o("layout-header"),p=o("el-header"),C=o("layout-content"),G=o("el-main"),X=o("layout-footer"),K=o("el-footer"),E=o("el-container");return a(),g(E,null,{default:i(()=>[u(d,{width:"inherit"},{default:i(()=>[u(c)]),_:1}),u(E,null,{default:i(()=>[e.isShow.header?(a(),g(p,{key:0},{default:i(()=>[u(_)]),_:1})):R("",!0),u(G,null,{default:i(()=>[u(C)]),_:1}),e.isShow.footer?(a(),g(K,{key:1},{default:i(()=>[u(X)]),_:1})):R("",!0)]),_:1})]),_:1})}var it=v(at,[["render",rt],["__scopeId","data-v-d9f17f4a"]]);export{it as default};
