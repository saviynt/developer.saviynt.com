"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7774],{16430:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>m});var n=i(74848),r=i(28453),s=i(3514),o=i(84142);const c={id:"common-utilities",title:"Common Utilities",description:"Common Utilities",custom_edit_url:null},l=void 0,a={id:"eic/common-utilities",title:"Common Utilities",description:"Common Utilities",source:"@site/docs/eic/common-utilities.tag.mdx",sourceDirName:"eic",slug:"/eic/common-utilities",permalink:"/developer-portal/eic/common-utilities",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"common-utilities",title:"Common Utilities",description:"Common Utilities",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"Change User Password",permalink:"/developer-portal/eic/change-user-password"},next:{title:"Upload New File",permalink:"/developer-portal/eic/upload-new-file"}},d={},m=[];function u(e){return(0,n.jsx)(s.A,{items:(0,o.$S)().items})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u()}},3514:(e,t,i)=>{i.d(t,{A:()=>g});i(96540);var n=i(18215),r=i(84142),s=i(28774),o=i(16654),c=i(21312),l=i(51107);const a={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=i(74848);function m(e){let{href:t,children:i}=e;return(0,d.jsx)(s.default,{href:t,className:(0,n.A)("card padding--lg",a.cardContainer),children:i})}function u(e){let{href:t,icon:i,title:r,description:s}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(l.default,{as:"h2",className:(0,n.A)("text--truncate",a.cardTitle),title:r,children:[i," ",r]}),s&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",a.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e;const i=(0,r.Nr)(t);return i?(0,d.jsx)(u,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const i=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.cC)(t.docId??void 0);return(0,d.jsx)(u,{href:t.href,icon:i,title:t.label,description:t.description??n?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const i=(0,r.$S)();return(0,d.jsx)(g,{items:i.items,className:t})}function g(e){const{items:t,className:i}=e;if(!t)return(0,d.jsx)(x,{...e});const s=(0,r.d1)(t);return(0,d.jsx)("section",{className:(0,n.A)("row",i),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:e})},t)))})}}}]);