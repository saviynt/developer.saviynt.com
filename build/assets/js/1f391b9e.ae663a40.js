"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[66061],{67973:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});t(96540);var a=t(18215),i=t(69024),l=t(17559),s=t(37747),r=t(9911),c=t(67763),o=t(25496);const d={mdxPageWrapper:"mdxPageWrapper_j9I6"};var m=t(74848);function u(e){const{content:n}=e,{metadata:{title:t,description:u,frontMatter:f,unlisted:v},assets:h}=n,{keywords:g,wrapperClassName:x,hide_table_of_contents:p}=f,L=h.image??f.image;return(0,m.jsx)(i.e3,{className:(0,a.A)(x??l.G.wrapper.mdxPages,l.G.page.mdxPage),children:(0,m.jsxs)(s.A,{children:[(0,m.jsx)(i.be,{title:t,description:u,keywords:g,image:L}),(0,m.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,m.jsxs)("div",{className:(0,a.A)("row",d.mdxPageWrapper),children:[(0,m.jsxs)("div",{className:(0,a.A)("col",!p&&"col--8"),children:[v&&(0,m.jsx)(o.default,{}),(0,m.jsx)("article",{children:(0,m.jsx)(r.A,{children:(0,m.jsx)(n,{})})})]}),!p&&n.toc.length>0&&(0,m.jsx)("div",{className:"col col--2",children:(0,m.jsx)(c.A,{toc:n.toc,minHeadingLevel:f.toc_min_heading_level,maxHeadingLevel:f.toc_max_heading_level})})]})})]})})}},67763:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var a=t(18215),i=t(19114);const l={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var s=t(74848);const r="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function o(e){let{className:n,...t}=e;return(0,s.jsx)("div",{className:(0,a.A)(l.tableOfContents,"thin-scrollbar",n),children:(0,s.jsx)(i.A,{...t,linkClassName:r,linkActiveClassName:c})})}},19114:(e,n,t)=>{t.d(n,{A:()=>m});var a=t(96540),i=t(6342),l=t(37243),s=t(20366),r=t(28774),c=t(74848);function o(e){let{toc:n,className:t,linkClassName:a,isChild:i}=e;return n.length?(0,c.jsx)("ul",{className:i?void 0:t,children:n.map((e=>(0,c.jsxs)("li",{children:[(0,c.jsx)(r.default,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,c.jsx)(o,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)))}):null}const d=a.memo(o);function m(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:m,maxHeadingLevel:u,...f}=e;const v=(0,i.p)(),h=m??v.tableOfContents.minHeadingLevel,g=u??v.tableOfContents.maxHeadingLevel,x=(0,l.h)({toc:n,minHeadingLevel:h,maxHeadingLevel:g}),p=(0,a.useMemo)((()=>{if(r&&o)return{linkClassName:r,linkActiveClassName:o,minHeadingLevel:h,maxHeadingLevel:g}}),[r,o,h,g]);return(0,s.i)(p),(0,c.jsx)(d,{toc:x,className:t,linkClassName:r,...f})}},25496:(e,n,t)=>{t.r(n),t.d(n,{default:()=>o});t(96540);var a=t(18215),i=t(46445),l=t(17559),s=t(13472),r=t(74848);function c(e){let{className:n}=e;return(0,r.jsx)(s.A,{type:"caution",title:(0,r.jsx)(i.Rc,{}),className:(0,a.A)(n,l.G.common.unlistedBanner),children:(0,r.jsx)(i.Uh,{})})}function o(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.AE,{}),(0,r.jsx)(c,{...e})]})}},20366:(e,n,t)=>{t.d(n,{i:()=>c});var a=t(96540),i=t(6342);function l(e){const n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function s(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>l(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function r(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.p)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function c(e){const n=(0,a.useRef)(void 0),t=r();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:l,maxHeadingLevel:r}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let i=n;i<=t;i+=1)a.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:r}),o=s(c,{anchorTopOffset:t.current}),d=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])}},37243:(e,n,t)=>{t.d(n,{h:()=>r,v:()=>l});var a=t(96540);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...i}=e;t>=0?n[t].children.push(i):a.push(i)})),a}function l(e){return(0,a.useMemo)((()=>i(e)),[e])}function s(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function r(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>s({toc:i(n),minHeadingLevel:t,maxHeadingLevel:l})),[n,t,l])}},46445:(e,n,t)=>{t.d(n,{AE:()=>c,Rc:()=>s,Uh:()=>r});t(96540);var a=t(21312),i=t(5260),l=t(74848);function s(){return(0,l.jsx)(a.default,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,l.jsx)(a.default,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,l.jsx)(i.A,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}}}]);