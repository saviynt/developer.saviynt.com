"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[738],{46636:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var i=r(74848),s=r(28453),a=r(3514),n=r(84142);const c={id:"dashboard",title:"Dashboard",description:"Dashboard",custom_edit_url:null},o=void 0,d={id:"eic/dashboard",title:"Dashboard",description:"Dashboard",source:"@site/docs/eic/dashboard.tag.mdx",sourceDirName:"eic",slug:"/eic/dashboard",permalink:"/developer-portal/eic/dashboard",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"dashboard",title:"Dashboard",description:"Dashboard",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"Get Access Recommendations",permalink:"/developer-portal/eic/get-access-recommendations"},next:{title:"Retrieve Dashboard Tiles Data",permalink:"/developer-portal/eic/retrieve-dashboard-tiles-data"}},l={},u=[];function m(e){return(0,i.jsx)(a.A,{items:(0,n.$S)().items})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m()}},3514:(e,t,r)=>{r.d(t,{A:()=>x});r(96540);var i=r(18215),s=r(84142),a=r(28774),n=r(16654),c=r(21312),o=r(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=r(74848);function u(e){let{href:t,children:r}=e;return(0,l.jsx)(a.default,{href:t,className:(0,i.A)("card padding--lg",d.cardContainer),children:r})}function m(e){let{href:t,icon:r,title:s,description:a}=e;return(0,l.jsxs)(u,{href:t,children:[(0,l.jsxs)(o.default,{as:"h2",className:(0,i.A)("text--truncate",d.cardTitle),title:s,children:[r," ",s]}),a&&(0,l.jsx)("p",{className:(0,i.A)("text--truncate",d.cardDescription),title:a,children:a})]})}function h(e){let{item:t}=e;const r=(0,s.Nr)(t);return r?(0,l.jsx)(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const r=(0,n.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,s.cC)(t.docId??void 0);return(0,l.jsx)(m,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(p,{item:t});case"category":return(0,l.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const r=(0,s.$S)();return(0,l.jsx)(x,{items:r.items,className:t})}function x(e){const{items:t,className:r}=e;if(!t)return(0,l.jsx)(b,{...e});const a=(0,s.d1)(t);return(0,l.jsx)("section",{className:(0,i.A)("row",r),children:a.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(f,{item:e})},t)))})}}}]);