"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3750],{70710:(t,e,c)=>{c.r(e),c.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=c(74848),n=c(28453),s=c(3514),r=c(84142);const o={id:"accounts",title:"Accounts",description:"Accounts",custom_edit_url:null},a=void 0,l={id:"eic/accounts",title:"Accounts",description:"Accounts",source:"@site/docs/eic/accounts.tag.mdx",sourceDirName:"eic",slug:"/eic/accounts",permalink:"/docs/eic/accounts",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"accounts",title:"Accounts",description:"Accounts",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"Get SavRoles",permalink:"/docs/eic/get-savroles"},next:{title:"Get Account Details",permalink:"/docs/eic/get-account-details"}},d={},u=[];function m(t){return(0,i.jsx)(s.A,{items:(0,r.$S)().items})}function f(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(m,{...t})}):m()}},3514:(t,e,c)=>{c.d(e,{A:()=>g});c(96540);var i=c(18215),n=c(84142),s=c(28774),r=c(16654),o=c(21312),a=c(51107);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=c(74848);function u(t){let{href:e,children:c}=t;return(0,d.jsx)(s.default,{href:e,className:(0,i.A)("card padding--lg",l.cardContainer),children:c})}function m(t){let{href:e,icon:c,title:n,description:s}=t;return(0,d.jsxs)(u,{href:e,children:[(0,d.jsxs)(a.default,{as:"h2",className:(0,i.A)("text--truncate",l.cardTitle),title:n,children:[c," ",n]}),s&&(0,d.jsx)("p",{className:(0,i.A)("text--truncate",l.cardDescription),title:s,children:s})]})}function f(t){let{item:e}=t;const c=(0,n.Nr)(e);return c?(0,d.jsx)(m,{href:c,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,o.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function p(t){let{item:e}=t;const c=(0,r.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,n.cC)(e.docId??void 0);return(0,d.jsx)(m,{href:e.href,icon:c,title:e.label,description:e.description??i?.description})}function h(t){let{item:e}=t;switch(e.type){case"link":return(0,d.jsx)(p,{item:e});case"category":return(0,d.jsx)(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function x(t){let{className:e}=t;const c=(0,n.$S)();return(0,d.jsx)(g,{items:c.items,className:e})}function g(t){const{items:e,className:c}=t;if(!e)return(0,d.jsx)(x,{...t});const s=(0,n.d1)(e);return(0,d.jsx)("section",{className:(0,i.A)("row",c),children:s.map(((t,e)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:t})},e)))})}}}]);