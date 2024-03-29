"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9821],{77786:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>A,contentTitle:()=>g,default:()=>C,frontMatter:()=>f,metadata:()=>N,toc:()=>S});var r=s(74848),t=s(28453),i=s(91366),n=s.n(i),l=(s(6050),s(57742)),d=s.n(l),o=(s(67792),s(27362)),c=s.n(o),h=s(36683),m=s.n(h),p=s(81124),x=s.n(p),j=s(60674),u=s.n(j),y=s(23397),b=s.n(y),v=(s(26651),s(51107)),D=(s(77675),s(19365));const f={id:"retrieve-dashboard-account-data",title:"Retrieve Dashboard Account Data",description:"The `Authorization` must have `Bearer` followed by `Token`.",sidebar_label:"Retrieve Dashboard Account Data",hide_title:!0,hide_table_of_contents:!0,api:"eJytVW1v2zYQ/ivEfWoB2ZLfNk9DP3iKWxhDXmC72ADXgGnpHLGRSJY8edUM/feBlNIkSBPnwz6JPB2fe4733PEExG8txBsYDPoRu+A23ytuMtgGkKFNjdAklIQY1jmy3ayiXBnxL3fGHSsrSyznR2S7P5AbNDt2UEWh/sGM7Wu2W6s7lLs++yK/yCvFNDe8tBCA0mg8xCKDGAySEXjEH8FnaaoqSRecOARg0GolLVqITzCMIvd5Sm3ZATzQZx0E6zBy5Bkaj3DBCd3XpjmW3K2o1ggxWDJC3kIA+J2XunCmvzAL2GDIVqjZMBpMWTSJJ9M4mrBPl2tomgBWaI5o3oo30zzNsZeoWhGGg/6gw6BeotSdeDOvJFktP/bW13/Orz5MJ6NfxtFo2BtOx6PeeHzA3n4wnfZ+G42j0a8YjYccf2c3nPIPoQ+3NlzaA5reXKYqc9BvjJrmlbzDzIP83ftoeIm9a18D+1aI1exyfr1cfFpcQeNgUiUJJblDXOtCpF4V4Vfr6voTSLX/iilBANo4DZFoVZH9TDkPp7gxvIYABGHp/JtHlDZbtzNGmURl+Dr7CJoASnt7JsfPSTJfrdoEO7NneU6m8QmOvKjw5Yw22ydcIYKOz+OgjQ/sew3Ji35zAslLd0Bzyt1FyIe1wW+VMJhBTKbC4MUyNs02gBIpV65ntbK+DA4jhvBMC1vfJS2TyhQQQ06kbRyGJ0LJJTV9y4+ilpQWqsr6qSrDeXIZci3C4wQCOHIj+L67x/bI8zHQ2d3gOvCqIIh/VKXx7C2mlRFUr1yKLdaeW5G6qfYoYccNuotwe+/jSr/3M+6ct3fyTSLkQXlPQa0y2hzZXBIabYRFtshQkqCaJS5xNrtZsCUe0KBMEZ6PYGFZoooCU2dh2qijyNAyypFlSFwUlqmD39pKa2UIM9bWzLKDMv7PeRbv5ovkvbt1NLaNPOlHfa9+V/eS++bsJHV++D5J4vTQ8//rk9JVg/A7hbrgQjq2XmunTqWb1x+abQC5E3W8gdNpzy1+NkXTOPO3Ck3dNt+9Dr2SM2HdOoP4wAuLryT6btk12Xv2EtX7USVrL3c/BgACuMP6vlcbN6ral8zHb3/N0hQ1PTr0bJA+adyb65V7uf4DM862Qw==",sidebar_class_name:"post api-method",info_path:"eic/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},g=void 0,N={id:"eic/retrieve-dashboard-account-data",title:"Retrieve Dashboard Account Data",description:"The `Authorization` must have `Bearer` followed by `Token`.",source:"@site/docs/eic/retrieve-dashboard-account-data.api.mdx",sourceDirName:"eic",slug:"/eic/retrieve-dashboard-account-data",permalink:"/docs/eic/retrieve-dashboard-account-data",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"retrieve-dashboard-account-data",title:"Retrieve Dashboard Account Data",description:"The `Authorization` must have `Bearer` followed by `Token`.",sidebar_label:"Retrieve Dashboard Account Data",hide_title:!0,hide_table_of_contents:!0,api:"eJytVW1v2zYQ/ivEfWoB2ZLfNk9DP3iKWxhDXmC72ADXgGnpHLGRSJY8edUM/feBlNIkSBPnwz6JPB2fe4733PEExG8txBsYDPoRu+A23ytuMtgGkKFNjdAklIQY1jmy3ayiXBnxL3fGHSsrSyznR2S7P5AbNDt2UEWh/sGM7Wu2W6s7lLs++yK/yCvFNDe8tBCA0mg8xCKDGAySEXjEH8FnaaoqSRecOARg0GolLVqITzCMIvd5Sm3ZATzQZx0E6zBy5Bkaj3DBCd3XpjmW3K2o1ggxWDJC3kIA+J2XunCmvzAL2GDIVqjZMBpMWTSJJ9M4mrBPl2tomgBWaI5o3oo30zzNsZeoWhGGg/6gw6BeotSdeDOvJFktP/bW13/Orz5MJ6NfxtFo2BtOx6PeeHzA3n4wnfZ+G42j0a8YjYccf2c3nPIPoQ+3NlzaA5reXKYqc9BvjJrmlbzDzIP83ftoeIm9a18D+1aI1exyfr1cfFpcQeNgUiUJJblDXOtCpF4V4Vfr6voTSLX/iilBANo4DZFoVZH9TDkPp7gxvIYABGHp/JtHlDZbtzNGmURl+Dr7CJoASnt7JsfPSTJfrdoEO7NneU6m8QmOvKjw5Yw22ydcIYKOz+OgjQ/sew3Ji35zAslLd0Bzyt1FyIe1wW+VMJhBTKbC4MUyNs02gBIpV65ntbK+DA4jhvBMC1vfJS2TyhQQQ06kbRyGJ0LJJTV9y4+ilpQWqsr6qSrDeXIZci3C4wQCOHIj+L67x/bI8zHQ2d3gOvCqIIh/VKXx7C2mlRFUr1yKLdaeW5G6qfYoYccNuotwe+/jSr/3M+6ct3fyTSLkQXlPQa0y2hzZXBIabYRFtshQkqCaJS5xNrtZsCUe0KBMEZ6PYGFZoooCU2dh2qijyNAyypFlSFwUlqmD39pKa2UIM9bWzLKDMv7PeRbv5ovkvbt1NLaNPOlHfa9+V/eS++bsJHV++D5J4vTQ8//rk9JVg/A7hbrgQjq2XmunTqWb1x+abQC5E3W8gdNpzy1+NkXTOPO3Ck3dNt+9Dr2SM2HdOoP4wAuLryT6btk12Xv2EtX7USVrL3c/BgACuMP6vlcbN6ral8zHb3/N0hQ1PTr0bJA+adyb65V7uf4DM862Qw==",sidebar_class_name:"post api-method",info_path:"eic/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"Retrieve Dashboard Tiles Data",permalink:"/docs/eic/retrieve-dashboard-tiles-data"},next:{title:"Retrieve Dashboard Data",permalink:"/docs/eic/retrieve-dashboard-data"}},A={},S=[];function B(e){const a={code:"code",p:"p",...(0,t.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v.default,{as:"h1",className:"openapi__heading",children:"Retrieve Dashboard Account Data"}),"\n",(0,r.jsx)(d(),{method:"post",path:"/retrieveDashboardAccountData"}),"\n",(0,r.jsxs)(a.p,{children:["The ",(0,r.jsx)(a.code,{children:"Authorization"})," must have ",(0,r.jsx)(a.code,{children:"Bearer"})," followed by ",(0,r.jsx)(a.code,{children:"Token"}),"."]}),"\n",(0,r.jsx)(a.p,{children:"No params"}),"\n",(0,r.jsx)(v.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},children:(0,r.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,r.jsx)(a.p,{children:"Path Parameters"})})}),(0,r.jsx)("div",{children:(0,r.jsx)("ul",{children:(0,r.jsx)(m(),{className:"paramsItem",param:{name:"path",in:"path",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:(0,r.jsx)(n(),{label:void 0,id:void 0,children:(0,r.jsxs)(D.default,{label:"200",value:"200",children:[(0,r.jsx)("div",{children:(0,r.jsx)(a.p,{children:"Retrieve Dashboard Account Data"})}),(0,r.jsxs)(s,{style:{textAlign:"left",marginBottom:"1rem"},className:"openapi-markdown__details","data-collaposed":!0,open:!1,children:[(0,r.jsx)("summary",{style:{},children:(0,r.jsx)("strong",{children:(0,r.jsx)(a.p,{children:"Response Headers"})})}),(0,r.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,r.jsxs)("li",{className:"schemaItem",children:[(0,r.jsxs)("summary",{style:{},children:[(0,r.jsx)("strong",{children:(0,r.jsx)(a.p,{children:"Date"})}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:(0,r.jsx)(a.p,{children:"string"})})]}),(0,r.jsx)("div",{})]}),(0,r.jsxs)("li",{className:"schemaItem",children:[(0,r.jsxs)("summary",{style:{},children:[(0,r.jsx)("strong",{children:(0,r.jsx)(a.p,{children:"Server"})}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:(0,r.jsx)(a.p,{children:"string"})})]}),(0,r.jsx)("div",{})]}),(0,r.jsxs)("li",{className:"schemaItem",children:[(0,r.jsxs)("summary",{style:{},children:[(0,r.jsx)("strong",{children:(0,r.jsx)(a.p,{children:"Set-Cookie"})}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:(0,r.jsx)(a.p,{children:"string"})})]}),(0,r.jsx)("div",{})]}),(0,r.jsxs)("li",{className:"schemaItem",children:[(0,r.jsxs)("summary",{style:{},children:[(0,r.jsx)("strong",{children:(0,r.jsx)(a.p,{children:"Transfer-Encoding"})}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:(0,r.jsx)(a.p,{children:"string"})})]}),(0,r.jsx)("div",{})]}),(0,r.jsxs)("li",{className:"schemaItem",children:[(0,r.jsxs)("summary",{style:{},children:[(0,r.jsx)("strong",{children:(0,r.jsx)(a.p,{children:"X-Frame-Options"})}),(0,r.jsx)("span",{style:{opacity:"0.6"},children:(0,r.jsx)(a.p,{children:"string"})})]}),(0,r.jsx)("div",{})]})]})]}),(0,r.jsx)("div",{children:(0,r.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,r.jsx)(D.default,{label:"application/json",value:"application/json",children:(0,r.jsxs)(b(),{className:"openapi-tabs__schema",children:[(0,r.jsx)(D.default,{label:"Schema",value:"Schema",children:(0,r.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,r.jsx)("strong",{children:(0,r.jsx)(a.p,{children:"Schema"})})}),(0,r.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,r.jsx)(u(),{collapsible:!1,name:"dashboardAccountData",required:!1,schemaName:"undefined[]",qualifierMessage:void 0,schema:{type:"array",items:{},example:[]}}),(0,r.jsx)(u(),{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"0"}}),(0,r.jsx)(u(),{collapsible:!1,name:"msg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"SUCCESS"}})]})]})}),(0,r.jsx)(D.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,r.jsx)(x(),{responseExample:'{\n  "dashboardAccountData": [],\n  "errorCode": "0",\n  "msg": "SUCCESS"\n}',language:"json"})}),(0,r.jsx)(D.default,{label:"Retrieve Dashboard Account Data",value:"Retrieve Dashboard Account Data",children:(0,r.jsx)(x(),{responseExample:'{\n  "dashboardAccountData": [],\n  "errorCode": "0",\n  "msg": "SUCCESS"\n}',language:"json"})})]})})})})]})})})})]})}function C(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(B,{...e})}):B(e)}}}]);