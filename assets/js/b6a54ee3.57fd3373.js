"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8624],{3043:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var s=i(74848),r=i(28453),n=i(3514),a=i(84142);const c={id:"update-task",title:"Update Task",description:"Update Task",custom_edit_url:null},o=void 0,d={id:"eic/update-task",title:"Update Task",description:"Update Task",source:"@site/docs/eic/update-task.tag.mdx",sourceDirName:"eic",slug:"/eic/update-task",permalink:"/docs/eic/update-task",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-task",title:"Update Task",description:"Update Task",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"Create Task - Remove Entitlement",permalink:"/docs/eic/create-task-remove-entitlement"},next:{title:"Complete Single Task",permalink:"/docs/eic/complete-single-task"}},l={},u=[];function m(e){return(0,s.jsx)(n.A,{items:(0,a.$S)().items})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},3514:(e,t,i)=>{i.d(t,{A:()=>x});i(96540);var s=i(18215),r=i(84142),n=i(28774),a=i(16654),c=i(21312),o=i(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=i(74848);function u(e){let{href:t,children:i}=e;return(0,l.jsx)(n.default,{href:t,className:(0,s.A)("card padding--lg",d.cardContainer),children:i})}function m(e){let{href:t,icon:i,title:r,description:n}=e;return(0,l.jsxs)(u,{href:t,children:[(0,l.jsxs)(o.default,{as:"h2",className:(0,s.A)("text--truncate",d.cardTitle),title:r,children:[i," ",r]}),n&&(0,l.jsx)("p",{className:(0,s.A)("text--truncate",d.cardDescription),title:n,children:n})]})}function p(e){let{item:t}=e;const i=(0,r.Nr)(t);return i?(0,l.jsx)(m,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const i=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,r.cC)(t.docId??void 0);return(0,l.jsx)(m,{href:t.href,icon:i,title:t.label,description:t.description??s?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(f,{item:t});case"category":return(0,l.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const i=(0,r.$S)();return(0,l.jsx)(x,{items:i.items,className:t})}function x(e){const{items:t,className:i}=e;if(!t)return(0,l.jsx)(k,{...e});const n=(0,r.d1)(t);return(0,l.jsx)("section",{className:(0,s.A)("row",i),children:n.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(h,{item:e})},t)))})}}}]);