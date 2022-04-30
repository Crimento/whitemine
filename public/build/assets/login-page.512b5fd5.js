import{m as c,c as p,w as l,o as m,b as r,h as t,a as s,s as n,v as i,L as b,n as f,p as _,d as h}from"./main.32d597a0.js";import{a as w}from"./main-layout.5d6e9a5b.js";import{F as g}from"./form-template.d2fada6a.js";import{_ as x}from"./form-errors.fc7bb0a9.js";const v=s("label",{class:"label"},[s("span",{class:"label-text"},"\u041B\u043E\u0433\u0438\u043D")],-1),k=["onSubmit"],y=s("label",{class:"label"},[s("span",{class:"label-text"},"\u041F\u0430\u0440\u043E\u043B\u044C")],-1),V={class:"card-actions my-3"},B={class:"grid grid-cols-1 md:grid-cols-2 gap-4 w-full"},F=h("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"),L={props:{canResetPassword:Boolean,status:String},setup(N){const e=c({username:null,password:null,remember:!1}),u=()=>{e.clearErrors(),e.post(route("login"))};return(d,o)=>(m(),p(w,null,{default:l(()=>[r(g,{header:"\u0412\u0445\u043E\u0434 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443"},{default:l(()=>[r(x,{form:t(e)},null,8,["form"]),v,s("form",{onSubmit:_(u,["prevent"])},[n(s("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>t(e).username=a),type:"text",placeholder:"\u041B\u043E\u0433\u0438\u043D",class:"input input-bordered w-full mb-3",required:"",autofocus:"",autocomplete:"username"},null,512),[[i,t(e).username]]),y,n(s("input",{"onUpdate:modelValue":o[1]||(o[1]=a=>t(e).password=a),type:"password",placeholder:"\u041F\u0430\u0440\u043E\u043B\u044C",class:"input input-bordered w-full mb-3",required:"",autofocus:""},null,512),[[i,t(e).password]]),s("div",V,[s("div",B,[r(t(b),{href:d.route("register"),class:"btn btn-block btn-success"},{default:l(()=>[F]),_:1},8,["href"]),s("button",{class:f([{"loading btn-disabled opacity-25":t(e).processing},"btn btn-block btn-info"]),type:"submit"},"\u0412\u043E\u0439\u0442\u0438",2)])])],40,k)]),_:1})]),_:1}))}};export{L as default};
