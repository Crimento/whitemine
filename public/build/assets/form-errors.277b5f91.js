import{_ as d}from"./main-layout.9e2c20ed.js";import{t as s,y as t,u as r,E as c,z as l,I as i,J as _,G as m}from"./vendor.7dbc2f53.js";const u={props:{header:{type:String,default:"Header"}}},h={class:"h-screen flex justify-center items-center"},f={class:"card w-full md:w-128 bg-base-300 shadow-xl m-3"},p={class:"card-body"},$={class:"card-title mx-auto mb-3"};function x(e,n,a,o,v,k){return s(),t("div",h,[r("div",f,[r("div",p,[r("h2",$,c(a.header),1),l(e.$slots,"default")])])])}var B=d(u,[["render",x]]);const y={key:0,class:"alert alert-error shadow-lg"},b={class:"list-disc"},g={class:"mx-3"},F={props:{form:Object},setup(e){return(n,a)=>Object.keys(e.form.errors).length!==0?(s(),t("div",y,[r("ul",b,[(s(!0),t(i,null,_(e.form.errors,o=>(s(),t("li",g,c(o),1))),256))])])):m("",!0)}};export{B as F,F as _};
