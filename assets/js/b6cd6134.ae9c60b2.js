"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[812],{82424:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>R,contentTitle:()=>f,default:()=>B,frontMatter:()=>N,metadata:()=>k,toc:()=>Q});var l=a(74848),i=a(28453),r=a(91366),n=a.n(r),d=(a(6050),a(57742)),t=a.n(d),o=(a(67792),a(27362)),c=a.n(o),p=a(36683),h=a.n(p),m=a(81124),j=a.n(m),x=a(60674),u=a.n(x),v=a(23397),y=a.n(v),b=(a(26651),a(51107)),g=(a(77675),a(19365));const N={id:"add-role",title:"Add Role",description:"This API adds role to user.",sidebar_label:"Add Role",hide_title:!0,hide_table_of_contents:!0,api:"eJzNVk1v2zgQ/SvEnFpA8lebpNGiB9d1CmOROnC82AWcAB6L44iJRLIk5VQ19N8XpGTHQdMkBfawvpgacd6bGc48agsObywkC5ipnCxcR8DJpkZoJ5SEBOaZsGx4MWHIuWVG5cScYqUl07mSV3KeEVsOS5cpI36g91myorSOZbghtvxEaMgs2VrlubonzlYVW87VHcllcD9HydEpUzGNBgubeOPSo0ssaBldyaWnDA8QgdJkAsmEQwLIuQ8aIjD0rSTrPileQbKFVElH0vklap2LNPh0b63PaAs2zahAv3KVJkhArW4pdRCBNp7BCbL+7Y75YKd1RsgbiIC+Y6FzbzoThtiZuMkcGagj2AX/vNetyiRXBHVd782BdMg5C1klW9hgXtLjSB7THbIdQgZUQ1YraRvYQa/n/x6f7Z4rgoyQkwlbP6OjJ8v0RBp/E4/Y4D2bpo4Nev0PbNBP+idJ75R9OZ+Dj+KSzIbMa/GGGtOM4pGqlKNuv9NvMVw8UupOvDqu0ehydhbPp3+Ov348RVzx1SnFg8Eqjd/zwUl8SvwoHgyOj/vE0wG++/AHu0CXfewGurlBaddk4rFMFffQr2RNs1LeEQ8g/8SjpgvjeaUpnoaa29ciSWWlWK9bpDODxW9DXA7Px9PZ5Mvka9Nk/9FQFGQt3rzQ3WyO9s6y1BA64h02+WyThB2fvDs9OWKv7Pk90ctoTb8HBSEXunixhXYqNLoMIhDyYe3VQhjikDhTUvTLatb1dQQFuUx5tdHKhmp4jAS6yLlpRseGDm9IS5NDAplz2ibd7taRROnqjsWNqKRLc1XyTqqK7nh03kUtupsjiGCDRuCqrUXj8vOstnYvz2sscwfJvt51CNRSWhrhqkufTYO1QitSL84HufnYoM3ZP4c9XrdWQapf2h02hbb0jTN70N3x7vB/V6382axV4BSu6dymWmwsHRlthCU24SSdcBUb+RKG+2hGazIkU4Inr6yRynNKvYVpozaCk2UuI8bJocgtU+vwaEutlXHEWXPQlq2VCW9ejuLNeDJ668+PjG2Yjzq9Ts+n5JulwDBYbb4HWvso2oPb6v9117Yd4Oi76+ochQyXm+/vbTsEC9gNwXUEmR+PZAHb7Qot/WXyuvbmbyWZCpLF9UObh0Hhwvo1h2SNuaVnivJm1o7rW/arqFojyipMUxAQgAjuqNpNfX1d7y65wN+8OpToA9ef9LGOdh7DNCXtnt17KBoX08s5RLBqP0wKxb2PwXsvQ3gPCVzBFYQvm724B/sWcpQ3ZSOADa7//QvgFk4x",sidebar_class_name:"post api-method",info_path:"eic/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},f=void 0,k={id:"eic/add-role",title:"Add Role",description:"This API adds role to user.",source:"@site/docs/eic/add-role.api.mdx",sourceDirName:"eic",slug:"/eic/add-role",permalink:"/developer-portal/eic/add-role",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"add-role",title:"Add Role",description:"This API adds role to user.",sidebar_label:"Add Role",hide_title:!0,hide_table_of_contents:!0,api:"eJzNVk1v2zgQ/SvEnFpA8lebpNGiB9d1CmOROnC82AWcAB6L44iJRLIk5VQ19N8XpGTHQdMkBfawvpgacd6bGc48agsObywkC5ipnCxcR8DJpkZoJ5SEBOaZsGx4MWHIuWVG5cScYqUl07mSV3KeEVsOS5cpI36g91myorSOZbghtvxEaMgs2VrlubonzlYVW87VHcllcD9HydEpUzGNBgubeOPSo0ssaBldyaWnDA8QgdJkAsmEQwLIuQ8aIjD0rSTrPileQbKFVElH0vklap2LNPh0b63PaAs2zahAv3KVJkhArW4pdRCBNp7BCbL+7Y75YKd1RsgbiIC+Y6FzbzoThtiZuMkcGagj2AX/vNetyiRXBHVd782BdMg5C1klW9hgXtLjSB7THbIdQgZUQ1YraRvYQa/n/x6f7Z4rgoyQkwlbP6OjJ8v0RBp/E4/Y4D2bpo4Nev0PbNBP+idJ75R9OZ+Dj+KSzIbMa/GGGtOM4pGqlKNuv9NvMVw8UupOvDqu0ehydhbPp3+Ov348RVzx1SnFg8Eqjd/zwUl8SvwoHgyOj/vE0wG++/AHu0CXfewGurlBaddk4rFMFffQr2RNs1LeEQ8g/8SjpgvjeaUpnoaa29ciSWWlWK9bpDODxW9DXA7Px9PZ5Mvka9Nk/9FQFGQt3rzQ3WyO9s6y1BA64h02+WyThB2fvDs9OWKv7Pk90ctoTb8HBSEXunixhXYqNLoMIhDyYe3VQhjikDhTUvTLatb1dQQFuUx5tdHKhmp4jAS6yLlpRseGDm9IS5NDAplz2ibd7taRROnqjsWNqKRLc1XyTqqK7nh03kUtupsjiGCDRuCqrUXj8vOstnYvz2sscwfJvt51CNRSWhrhqkufTYO1QitSL84HufnYoM3ZP4c9XrdWQapf2h02hbb0jTN70N3x7vB/V6382axV4BSu6dymWmwsHRlthCU24SSdcBUb+RKG+2hGazIkU4Inr6yRynNKvYVpozaCk2UuI8bJocgtU+vwaEutlXHEWXPQlq2VCW9ejuLNeDJ668+PjG2Yjzq9Ts+n5JulwDBYbb4HWvso2oPb6v9117Yd4Oi76+ochQyXm+/vbTsEC9gNwXUEmR+PZAHb7Qot/WXyuvbmbyWZCpLF9UObh0Hhwvo1h2SNuaVnivJm1o7rW/arqFojyipMUxAQgAjuqNpNfX1d7y65wN+8OpToA9ef9LGOdh7DNCXtnt17KBoX08s5RLBqP0wKxb2PwXsvQ3gPCVzBFYQvm724B/sWcpQ3ZSOADa7//QvgFk4x",sidebar_class_name:"post api-method",info_path:"eic/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"Remove Entitlement From Role",permalink:"/developer-portal/eic/remove-entitlement-from-role"},next:{title:"Get Role Details for user",permalink:"/developer-portal/eic/get-role-details-for-user"}},R={},Q=[];function A(e){const s={code:"code",p:"p",...(0,i.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b.default,{as:"h1",className:"openapi__heading",children:"Add Role"}),"\n",(0,l.jsx)(t(),{method:"post",path:"/addrole"}),"\n",(0,l.jsx)(s.p,{children:"This API adds role to user."}),"\n",(0,l.jsxs)(s.p,{children:["The ",(0,l.jsx)(s.code,{children:"Authorization"})," must have ",(0,l.jsx)(s.code,{children:"Bearer"})," followed by ",(0,l.jsx)(s.code,{children:"Token"}),"."]}),"\n",(0,l.jsx)(s.p,{children:"Mandatory params:"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"username"}),",\n",(0,l.jsx)(s.code,{children:"rolename"})]}),"\n",(0,l.jsx)(b.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,l.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,l.jsx)(s.p,{children:"Path Parameters"})})}),(0,l.jsx)("div",{children:(0,l.jsx)("ul",{children:(0,l.jsx)(h(),{className:"paramsItem",param:{name:"path",in:"path",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,l.jsx)(c(),{className:"openapi-tabs__mime",children:(0,l.jsx)(g.default,{label:"application/json",value:"application/json-schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,l.jsx)(s.p,{children:"Body"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(u(),{collapsible:!1,name:"rolename",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Fire Fighter"}}),(0,l.jsx)(u(),{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"johndoe"}})]})]})})}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsx)(n(),{label:void 0,id:void 0,children:(0,l.jsxs)(g.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Add Role"})}),(0,l.jsxs)(a,{style:{textAlign:"left",marginBottom:"1rem"},className:"openapi-markdown__details","data-collaposed":!0,open:!1,children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Response Headers"})})}),(0,l.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,l.jsxs)("li",{className:"schemaItem",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Date"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"string"})})]}),(0,l.jsx)("div",{})]}),(0,l.jsxs)("li",{className:"schemaItem",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Server"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"string"})})]}),(0,l.jsx)("div",{})]}),(0,l.jsxs)("li",{className:"schemaItem",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Set-Cookie"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"string"})})]}),(0,l.jsx)("div",{})]}),(0,l.jsxs)("li",{className:"schemaItem",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Transfer-Encoding"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"string"})})]}),(0,l.jsx)("div",{})]}),(0,l.jsxs)("li",{className:"schemaItem",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"X-Content-Type-Options"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"string"})})]}),(0,l.jsx)("div",{})]}),(0,l.jsxs)("li",{className:"schemaItem",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"X-Frame-Options"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"string"})})]}),(0,l.jsx)("div",{})]})]})]}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(g.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(u(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:" Tasks created. IDs:: 673975 "}})})]})}),(0,l.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(j(),{responseExample:'{\n  "message": " Tasks created. IDs:: 673975 "\n}',language:"json"})}),(0,l.jsx)(g.default,{label:"Add Role",value:"Add Role",children:(0,l.jsx)(j(),{responseExample:'{\n  "message": " Tasks created. IDs:: 673975 "\n}',language:"json"})})]})})})})]})})})})]})}function B(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(A,{...e})}):A(e)}}}]);