"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5525],{41390:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var n=i(74848),r=i(28453),s=i(3514),c=i(84142);const o={id:"endpoints",title:"Endpoints",description:"Endpoints",custom_edit_url:null},a=void 0,d={id:"eic/endpoints",title:"Endpoints",description:"Endpoints",source:"@site/docs/eic/endpoints.tag.mdx",sourceDirName:"eic",slug:"/eic/endpoints",permalink:"/developer.saviynt.com/eic/endpoints",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"endpoints",title:"Endpoints",description:"Endpoints",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"Remove Role",permalink:"/developer.saviynt.com/eic/remove-role"},next:{title:"Create Endpoint",permalink:"/developer.saviynt.com/eic/create-endpoint"}},l={},u=[];function p(e){return(0,n.jsx)(s.A,{items:(0,c.$S)().items})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p()}},3514:(e,t,i)=>{i.d(t,{A:()=>j});i(96540);var n=i(18215),r=i(84142),s=i(28774),c=i(16654),o=i(21312),a=i(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=i(74848);function u(e){let{href:t,children:i}=e;return(0,l.jsx)(s.default,{href:t,className:(0,n.A)("card padding--lg",d.cardContainer),children:i})}function p(e){let{href:t,icon:i,title:r,description:s}=e;return(0,l.jsxs)(u,{href:t,children:[(0,l.jsxs)(a.default,{as:"h2",className:(0,n.A)("text--truncate",d.cardTitle),title:r,children:[i," ",r]}),s&&(0,l.jsx)("p",{className:(0,n.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function m(e){let{item:t}=e;const i=(0,r.Nr)(t);return i?(0,l.jsx)(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const i=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.cC)(t.docId??void 0);return(0,l.jsx)(p,{href:t.href,icon:i,title:t.label,description:t.description??n?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(f,{item:t});case"category":return(0,l.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const i=(0,r.$S)();return(0,l.jsx)(j,{items:i.items,className:t})}function j(e){const{items:t,className:i}=e;if(!t)return(0,l.jsx)(x,{...e});const s=(0,r.d1)(t);return(0,l.jsx)("section",{className:(0,n.A)("row",i),children:s.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(h,{item:e})},t)))})}}}]);