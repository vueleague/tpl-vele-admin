import{_,u as $}from"./index.82a20197.js";import{aK as c,aP as C,aO as f,d as D,r,o as v,j as w,aS as n,aR as a,aT as g,aL as V,aM as b}from"./vendor.d88ae094.js";const k=c({setup(){const e=C({username:"admin",password:"123456"}),o=f(!1),t=f();function l(){o.value=!0,t.value.validate(async d=>{if(d)await $.loginAction(e);else return D.error("\u7528\u6237\u540D\u6216\u5BC6\u7801\u9519\u8BEF\uFF01"),!1;o.value=!1})}function u(){t.value.resetFields()}return{formData:e,formRef:t,loading:o,submitForm:l,resetForm:u}}}),y=g(" \u63D0\u4EA4 "),B=g("\u91CD\u7F6E");function h(e,o,t,l,u,d){const s=r("el-input"),m=r("el-form-item"),p=r("el-button"),F=r("el-form");return v(),w(F,{model:e.formData,ref:"formRef","label-width":"60px"},{default:n(()=>[a(m,{label:"\u7528\u6237\u540D",prop:"username"},{default:n(()=>[a(s,{modelValue:e.formData.username,"onUpdate:modelValue":o[0]||(o[0]=i=>e.formData.username=i),placeholder:"please enter username"},null,8,["modelValue"])]),_:1}),a(m,{label:"\u5BC6\u7801",prop:"password"},{default:n(()=>[a(s,{type:"password",modelValue:e.formData.password,"onUpdate:modelValue":o[1]||(o[1]=i=>e.formData.password=i),placeholder:"please enter password"},null,8,["modelValue"])]),_:1}),a(m,null,{default:n(()=>[a(p,{type:"primary",loading:e.loading,onClick:e.submitForm},{default:n(()=>[y]),_:1},8,["loading","onClick"]),a(p,{onClick:e.resetForm},{default:n(()=>[B]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])}var L=_(k,[["render",h]]);const E=c({components:{LoginForm:L},setup(){return{}}}),j={class:"layout-login-container"},N={class:"login-form-container"};function R(e,o,t,l,u,d){const s=r("LoginForm");return v(),V("div",j,[b("div",N,[a(s)])])}var S=_(E,[["render",R],["__scopeId","data-v-16336048"]]);export{S as default};
