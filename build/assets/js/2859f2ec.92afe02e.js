"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[255],{59968:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>S,contentTitle:()=>D,default:()=>N,frontMatter:()=>g,metadata:()=>R,toc:()=>k});var r=a(74848),i=a(28453),t=a(91366),l=a.n(t),n=(a(6050),a(57742)),d=a.n(n),o=(a(67792),a(27362)),c=a.n(o),h=a(36683),m=a.n(h),p=a(81124),x=a.n(p),j=a(60674),u=a.n(j),b=a(23397),f=a.n(b),v=(a(26651),a(51107)),y=(a(77675),a(19365));const g={id:"retrieve-dashboard-data",title:"Retrieve Dashboard Data",description:"The `Authorization` must have `Bearer` followed by `Token`.",sidebar_label:"Retrieve Dashboard Data",hide_title:!0,hide_table_of_contents:!0,api:"eJytVdtu2zgQ/RVinlpA8g3xbqxFH7yKWxiLXGC7aAHXgClpFLGRSHZIudUa+vcFKaVJkLrJwz4IEkecmTPDc4ZHsPzWQLSF8XgwYhfcFInilMEugAxNSkJboSREsCmQ7ee1LRSJf7kz7llVG8sKfkC2/xs5Ie1ZrspSfceMJQ3bb9Qdyv3gC32R7rlSTHPilYEAlEbyUZYZREBoSeABf+a/4JZDAIRGK2nQQHSEyWjkXk9hrXrPB+is9y2QZ0je84JbdG+TFlhx92UbjRCBsSTkLQSAP3ilS2f6hFnAxhO2Rs0mo/E5G02j6Z/R2YR9uNxA2wawRjogvTbeXPO0wDBWjbI4HA/GfQwbxkrdiVfjiuP16n24uf5ncfUOx+fns/Q8DxFnk/BseoZhMpvNwjydJrNk+sdoejb9i91wW7wb+nQb4tLkSOFCpipzoV+ZNS1qeYeZD/I5fE+8wvDa9968NsR6frm4Xi0/LK+gdWFSJS1K65y41qVIPQ2GX407z1+EVMlXTC0EoMmRxoqODdkTqjxs50S8gQCExcptbB9h2e7cikhRrDL8PewRtAFU5vaF4j7G8WK97irrzR7eKV5GRzjwssZflLDdPQEHI+gBPM7S+kxeRmg9vbdHkLxyDprbwlUuH74Jv9WCMIPIUo3ByQNr210AFdpCOTlqZXzDXYwIhqfUabwQOgg1lRBBYa020XB4tCi5tO3A8INopE1LVWeDVFXDRXw55FoMD1MI4MBJ8KTvWOfyXOG93c2jnNelhehn/1sP22Bak7DN2tXWxUq4EakbVo8qddig74Bb+z3ukBM/ul7a7Td5HQiZK79T2I4DXY1sIS2SJmGQLTOUVtiGxa5wNr9ZshXmSChThOeTVRgWq7LE1FmYJnUQGRpmC2QZWi5Kw1Tul6bWWpHFjHWHZViuyP95GcWbxTJ+67qOZLrM08Fo4HnuDrziXn89l07P1Sfgjw9y/r9viP4gLP6wQ11yIR1QT7Njz8ztiXtjF0DhGBxt4XhMuMGPVLatM3+rkZpOaffc8+zNhHHfGUQ5Lw3+psg3q15Rb9kpjPeDSDae4l7sAAHcYXMvzNYNou6C8vm7X/M0RW0fOT2bj09UenO9dhfSfwr1o4o=",sidebar_class_name:"post api-method",info_path:"eic/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},D=void 0,R={id:"eic/retrieve-dashboard-data",title:"Retrieve Dashboard Data",description:"The `Authorization` must have `Bearer` followed by `Token`.",source:"@site/docs/eic/retrieve-dashboard-data.api.mdx",sourceDirName:"eic",slug:"/eic/retrieve-dashboard-data",permalink:"/developer.saviynt.com/eic/retrieve-dashboard-data",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"retrieve-dashboard-data",title:"Retrieve Dashboard Data",description:"The `Authorization` must have `Bearer` followed by `Token`.",sidebar_label:"Retrieve Dashboard Data",hide_title:!0,hide_table_of_contents:!0,api:"eJytVdtu2zgQ/RVinlpA8g3xbqxFH7yKWxiLXGC7aAHXgClpFLGRSHZIudUa+vcFKaVJkLrJwz4IEkecmTPDc4ZHsPzWQLSF8XgwYhfcFInilMEugAxNSkJboSREsCmQ7ee1LRSJf7kz7llVG8sKfkC2/xs5Ie1ZrspSfceMJQ3bb9Qdyv3gC32R7rlSTHPilYEAlEbyUZYZREBoSeABf+a/4JZDAIRGK2nQQHSEyWjkXk9hrXrPB+is9y2QZ0je84JbdG+TFlhx92UbjRCBsSTkLQSAP3ilS2f6hFnAxhO2Rs0mo/E5G02j6Z/R2YR9uNxA2wawRjogvTbeXPO0wDBWjbI4HA/GfQwbxkrdiVfjiuP16n24uf5ncfUOx+fns/Q8DxFnk/BseoZhMpvNwjydJrNk+sdoejb9i91wW7wb+nQb4tLkSOFCpipzoV+ZNS1qeYeZD/I5fE+8wvDa9968NsR6frm4Xi0/LK+gdWFSJS1K65y41qVIPQ2GX407z1+EVMlXTC0EoMmRxoqODdkTqjxs50S8gQCExcptbB9h2e7cikhRrDL8PewRtAFU5vaF4j7G8WK97irrzR7eKV5GRzjwssZflLDdPQEHI+gBPM7S+kxeRmg9vbdHkLxyDprbwlUuH74Jv9WCMIPIUo3ByQNr210AFdpCOTlqZXzDXYwIhqfUabwQOgg1lRBBYa020XB4tCi5tO3A8INopE1LVWeDVFXDRXw55FoMD1MI4MBJ8KTvWOfyXOG93c2jnNelhehn/1sP22Bak7DN2tXWxUq4EakbVo8qddig74Bb+z3ukBM/ul7a7Td5HQiZK79T2I4DXY1sIS2SJmGQLTOUVtiGxa5wNr9ZshXmSChThOeTVRgWq7LE1FmYJnUQGRpmC2QZWi5Kw1Tul6bWWpHFjHWHZViuyP95GcWbxTJ+67qOZLrM08Fo4HnuDrziXn89l07P1Sfgjw9y/r9viP4gLP6wQ11yIR1QT7Njz8ztiXtjF0DhGBxt4XhMuMGPVLatM3+rkZpOaffc8+zNhHHfGUQ5Lw3+psg3q15Rb9kpjPeDSDae4l7sAAHcYXMvzNYNou6C8vm7X/M0RW0fOT2bj09UenO9dhfSfwr1o4o=",sidebar_class_name:"post api-method",info_path:"eic/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"Retrieve Dashboard Account Data",permalink:"/developer.saviynt.com/eic/retrieve-dashboard-account-data"},next:{title:"13.0 PAA",permalink:"/developer.saviynt.com/eic/13-0-paa"}},S={},k=[];function w(e){const s={code:"code",p:"p",...(0,i.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v.default,{as:"h1",className:"openapi__heading",children:"Retrieve Dashboard Data"}),"\n",(0,r.jsx)(d(),{method:"post",path:"/retrieveDashboardData"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"Authorization"})," must have ",(0,r.jsx)(s.code,{children:"Bearer"})," followed by ",(0,r.jsx)(s.code,{children:"Token"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"No params"}),"\n",(0,r.jsx)(v.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},children:(0,r.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,r.jsx)(s.p,{children:"Path Parameters"})})}),(0,r.jsx)("div",{children:(0,r.jsx)("ul",{children:(0,r.jsx)(m(),{className:"paramsItem",param:{name:"path",in:"path",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:(0,r.jsx)(l(),{label:void 0,id:void 0,children:(0,r.jsxs)(y.default,{label:"200",value:"200",children:[(0,r.jsx)("div",{children:(0,r.jsx)(s.p,{children:"Retrieve Dashboard Data"})}),(0,r.jsxs)(a,{style:{textAlign:"left",marginBottom:"1rem"},className:"openapi-markdown__details","data-collaposed":!0,open:!1,children:[(0,r.jsx)("summary",{style:{},children:(0,r.jsx)("strong",{children:(0,r.jsx)(s.p,{children:"Response Headers"})})}),(0,r.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,r.jsxs)("li",{className:"schemaItem",children:[(0,r.jsxs)("summary",{style:{},children:[(0,r.jsx)("strong",{children:(0,r.jsx)(s.p,{children:"Date"})}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:(0,r.jsx)(s.p,{children:"string"})})]}),(0,r.jsx)("div",{})]}),(0,r.jsxs)("li",{className:"schemaItem",children:[(0,r.jsxs)("summary",{style:{},children:[(0,r.jsx)("strong",{children:(0,r.jsx)(s.p,{children:"Server"})}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:(0,r.jsx)(s.p,{children:"string"})})]}),(0,r.jsx)("div",{})]}),(0,r.jsxs)("li",{className:"schemaItem",children:[(0,r.jsxs)("summary",{style:{},children:[(0,r.jsx)("strong",{children:(0,r.jsx)(s.p,{children:"Set-Cookie"})}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:(0,r.jsx)(s.p,{children:"string"})})]}),(0,r.jsx)("div",{})]}),(0,r.jsxs)("li",{className:"schemaItem",children:[(0,r.jsxs)("summary",{style:{},children:[(0,r.jsx)("strong",{children:(0,r.jsx)(s.p,{children:"Transfer-Encoding"})}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:(0,r.jsx)(s.p,{children:"string"})})]}),(0,r.jsx)("div",{})]}),(0,r.jsxs)("li",{className:"schemaItem",children:[(0,r.jsxs)("summary",{style:{},children:[(0,r.jsx)("strong",{children:(0,r.jsx)(s.p,{children:"X-Frame-Options"})}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:(0,r.jsx)(s.p,{children:"string"})})]}),(0,r.jsx)("div",{})]})]})]}),(0,r.jsx)("div",{children:(0,r.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,r.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,r.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,r.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,r.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,r.jsx)("strong",{children:(0,r.jsx)(s.p,{children:"Schema"})})}),(0,r.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,r.jsx)(u(),{collapsible:!1,name:"dashboardData",required:!1,schemaName:"undefined[]",qualifierMessage:void 0,schema:{type:"array",items:{},example:[]}}),(0,r.jsx)(u(),{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"0"}}),(0,r.jsx)(u(),{collapsible:!1,name:"msg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"SUCCESS"}})]})]})}),(0,r.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,r.jsx)(x(),{responseExample:'{\n  "dashboardData": [],\n  "errorCode": "0",\n  "msg": "SUCCESS"\n}',language:"json"})}),(0,r.jsx)(y.default,{label:"Retrieve Dashboard Data",value:"Retrieve Dashboard Data",children:(0,r.jsx)(x(),{responseExample:'{\n  "dashboardData": [],\n  "errorCode": "0",\n  "msg": "SUCCESS"\n}',language:"json"})})]})})})})]})})})})]})}function N(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(w,{...e})}):w(e)}}}]);