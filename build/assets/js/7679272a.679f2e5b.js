"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4566],{79384:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=i(74848),r=i(28453),s=i(3514),c=i(84142);const l={id:"entitlements-1",title:"Entitlements1",description:"Entitlements1",custom_edit_url:null},a=void 0,o={id:"eic/entitlements-1",title:"Entitlements1",description:"Entitlements1",source:"@site/docs/eic/entitlements-1.tag.mdx",sourceDirName:"eic",slug:"/eic/entitlements-1",permalink:"/developer-portal/eic/entitlements-1",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"entitlements-1",title:"Entitlements1",description:"Entitlements1",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"Update Role Request",permalink:"/developer-portal/eic/update-role-request"},next:{title:"Get User Requestable Entitlements",permalink:"/developer-portal/eic/get-user-requestable-entitlements"}},d={},u=[];function m(e){return(0,n.jsx)(s.A,{items:(0,c.$S)().items})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m()}},3514:(e,t,i)=>{i.d(t,{A:()=>g});i(96540);var n=i(18215),r=i(84142),s=i(28774),c=i(16654),l=i(21312),a=i(51107);const o={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=i(74848);function u(e){let{href:t,children:i}=e;return(0,d.jsx)(s.default,{href:t,className:(0,n.A)("card padding--lg",o.cardContainer),children:i})}function m(e){let{href:t,icon:i,title:r,description:s}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(a.default,{as:"h2",className:(0,n.A)("text--truncate",o.cardTitle),title:r,children:[i," ",r]}),s&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",o.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e;const i=(0,r.Nr)(t);return i?(0,d.jsx)(m,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const i=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:i,title:t.label,description:t.description??n?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const i=(0,r.$S)();return(0,d.jsx)(g,{items:i.items,className:t})}function g(e){const{items:t,className:i}=e;if(!t)return(0,d.jsx)(x,{...e});const s=(0,r.d1)(t);return(0,d.jsx)("section",{className:(0,n.A)("row",i),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:e})},t)))})}}}]);