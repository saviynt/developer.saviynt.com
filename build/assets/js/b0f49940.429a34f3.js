"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9625],{7303:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=i(74848),s=i(28453),n=i(3514),c=i(84142);const o={id:"roles",title:"Roles",description:"Roles",custom_edit_url:null},l=void 0,a={id:"eic/roles",title:"Roles",description:"Roles",source:"@site/docs/eic/roles.tag.mdx",sourceDirName:"eic",slug:"/eic/roles",permalink:"/docs/eic/roles",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"roles",title:"Roles",description:"Roles",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"Delete Privilege",permalink:"/docs/eic/delete-privilege"},next:{title:"Add Role",permalink:"/docs/eic/add-role"}},d={},u=[];function m(e){return(0,r.jsx)(n.A,{items:(0,c.$S)().items})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m()}},3514:(e,t,i)=>{i.d(t,{A:()=>g});i(96540);var r=i(18215),s=i(84142),n=i(28774),c=i(16654),o=i(21312),l=i(51107);const a={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=i(74848);function u(e){let{href:t,children:i}=e;return(0,d.jsx)(n.default,{href:t,className:(0,r.A)("card padding--lg",a.cardContainer),children:i})}function m(e){let{href:t,icon:i,title:s,description:n}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(l.default,{as:"h2",className:(0,r.A)("text--truncate",a.cardTitle),title:s,children:[i," ",s]}),n&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",a.cardDescription),title:n,children:n})]})}function f(e){let{item:t}=e;const i=(0,s.Nr)(t);return i?(0,d.jsx)(m,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const i=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:i,title:t.label,description:t.description??r?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(p,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const i=(0,s.$S)();return(0,d.jsx)(g,{items:i.items,className:t})}function g(e){const{items:t,className:i}=e;if(!t)return(0,d.jsx)(x,{...e});const n=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",i),children:n.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:e})},t)))})}}}]);