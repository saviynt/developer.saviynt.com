"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3503],{11937:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var i=s(74848),r=s(28453),c=s(3514),n=s(84142);const a={id:"security-systems",title:"Security Systems",description:"Security Systems",custom_edit_url:null},l=void 0,o={id:"eic/security-systems",title:"Security Systems",description:"Security Systems",source:"@site/docs/eic/security-systems.tag.mdx",sourceDirName:"eic",slug:"/eic/security-systems",permalink:"/developer-portal/eic/security-systems",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"security-systems",title:"Security Systems",description:"Security Systems",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"Delete Entitlement Types",permalink:"/developer-portal/eic/delete-entitlement-types"},next:{title:"Create Security System",permalink:"/developer-portal/eic/create-security-system"}},d={},u=[];function m(e){return(0,i.jsx)(c.A,{items:(0,n.$S)().items})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m()}},3514:(e,t,s)=>{s.d(t,{A:()=>x});s(96540);var i=s(18215),r=s(84142),c=s(28774),n=s(16654),a=s(21312),l=s(51107);const o={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=s(74848);function u(e){let{href:t,children:s}=e;return(0,d.jsx)(c.default,{href:t,className:(0,i.A)("card padding--lg",o.cardContainer),children:s})}function m(e){let{href:t,icon:s,title:r,description:c}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(l.default,{as:"h2",className:(0,i.A)("text--truncate",o.cardTitle),title:r,children:[s," ",r]}),c&&(0,d.jsx)("p",{className:(0,i.A)("text--truncate",o.cardDescription),title:c,children:c})]})}function p(e){let{item:t}=e;const s=(0,r.Nr)(t);return s?(0,d.jsx)(m,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,a.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const s=(0,n.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:s,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(y,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const s=(0,r.$S)();return(0,d.jsx)(x,{items:s.items,className:t})}function x(e){const{items:t,className:s}=e;if(!t)return(0,d.jsx)(h,{...e});const c=(0,r.d1)(t);return(0,d.jsx)("section",{className:(0,i.A)("row",s),children:c.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}}}]);