"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2235],{5822:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=i(74848),n=i(28453),s=i(3514),c=i(84142);const l={id:"privileges",title:"Privileges",description:"Privileges",custom_edit_url:null},a=void 0,o={id:"eic/privileges",title:"Privileges",description:"Privileges",source:"@site/docs/eic/privileges.tag.mdx",sourceDirName:"eic",slug:"/eic/privileges",permalink:"/developer-portal/eic/privileges",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"privileges",title:"Privileges",description:"Privileges",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"Get Entitlement Values For Endpoint",permalink:"/developer-portal/eic/get-entitlement-values-for-endpoint"},next:{title:"Create Privilege",permalink:"/developer-portal/eic/create-privilege"}},d={},u=[];function p(e){return(0,r.jsx)(s.A,{items:(0,c.$S)().items})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p()}},3514:(e,t,i)=>{i.d(t,{A:()=>v});i(96540);var r=i(18215),n=i(84142),s=i(28774),c=i(16654),l=i(21312),a=i(51107);const o={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=i(74848);function u(e){let{href:t,children:i}=e;return(0,d.jsx)(s.default,{href:t,className:(0,r.A)("card padding--lg",o.cardContainer),children:i})}function p(e){let{href:t,icon:i,title:n,description:s}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(a.default,{as:"h2",className:(0,r.A)("text--truncate",o.cardTitle),title:n,children:[i," ",n]}),s&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",o.cardDescription),title:s,children:s})]})}function m(e){let{item:t}=e;const i=(0,n.Nr)(t);return i?(0,d.jsx)(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const i=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,n.cC)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:i,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const i=(0,n.$S)();return(0,d.jsx)(v,{items:i.items,className:t})}function v(e){const{items:t,className:i}=e;if(!t)return(0,d.jsx)(h,{...e});const s=(0,n.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",i),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}}}]);