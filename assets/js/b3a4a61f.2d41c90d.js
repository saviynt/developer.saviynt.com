"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4649],{42633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var i=n(74848),r=n(28453),a=n(3514),c=n(84142);const s={id:"job-management",title:"Job Management",description:"Job Management",custom_edit_url:null},o=void 0,l={id:"eic/job-management",title:"Job Management",description:"Job Management",source:"@site/docs/eic/job-management.tag.mdx",sourceDirName:"eic",slug:"/eic/job-management",permalink:"/developer-portal/eic/job-management",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"job-management",title:"Job Management",description:"Job Management",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"Send Email",permalink:"/developer-portal/eic/send-email"},next:{title:"Create and Update Trigger",permalink:"/developer-portal/eic/create-and-update-trigger"}},d={},m=[];function u(e){return(0,i.jsx)(a.A,{items:(0,c.$S)().items})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u()}},3514:(e,t,n)=>{n.d(t,{A:()=>j});n(96540);var i=n(18215),r=n(84142),a=n(28774),c=n(16654),s=n(21312),o=n(51107);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(74848);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(a.default,{href:t,className:(0,i.A)("card padding--lg",l.cardContainer),children:n})}function u(e){let{href:t,icon:n,title:r,description:a}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(o.default,{as:"h2",className:(0,i.A)("text--truncate",l.cardTitle),title:r,children:[n," ",r]}),a&&(0,d.jsx)("p",{className:(0,i.A)("text--truncate",l.cardDescription),title:a,children:a})]})}function p(e){let{item:t}=e;const n=(0,r.Nr)(t);return n?(0,d.jsx)(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.cC)(t.docId??void 0);return(0,d.jsx)(u,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,r.$S)();return(0,d.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(h,{...e});const a=(0,r.d1)(t);return(0,d.jsx)("section",{className:(0,i.A)("row",n),children:a.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}}}]);