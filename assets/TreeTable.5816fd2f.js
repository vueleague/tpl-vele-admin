import{T as b}from"./TableHeader.a050ab5e.js";import{a as f}from"./index.570f599a.js";import{s as y,B as u,S as v,r,o as w,t as x,P as a,I as n,F as C,z as m}from"./vendor.f8fe33af.js";const k=m("\u5C55\u5F00\u5168\u90E8"),h=m("\u6298\u53E0\u5168\u90E8"),g=y({setup(B){const o=u([]),d=u([]),s=u([]);v(async()=>{const t=await f();o.value=d.value=t});async function c(t){o.value=d.value.filter(e=>e.name.includes(t))}function p(t){t?s.value=o.value.map(e=>e.id):s.value=[]}return(t,e)=>{const i=r("el-button"),l=r("el-table-column"),_=r("el-table");return w(),x(C,null,[a(b,{title:"\u6811\u578B\u8868\u683C",placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u7684\u540D\u5B57",onSearch:c},{default:n(()=>[a(i,{type:"primary",onClick:e[0]||(e[0]=()=>p(!0))},{default:n(()=>[k]),_:1}),a(i,{type:"primary",onClick:e[1]||(e[1]=()=>p(!1))},{default:n(()=>[h]),_:1})]),_:1}),a(_,{data:o.value,style:{width:"100%","margin-bottom":"20px"},"row-key":"id",border:"","expand-row-keys":s.value},{default:n(()=>[a(l,{prop:"date",label:"date",sortable:"",width:"180"}),a(l,{prop:"name",label:"Name",sortable:"",width:"180"}),a(l,{prop:"email",label:"Email",sortable:""}),a(l,{prop:"address",label:"Address",sortable:""})]),_:1},8,["data","expand-row-keys"])],64)}}});export{g as default};