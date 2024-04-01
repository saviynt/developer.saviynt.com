"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1815],{24622:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>b,contentTitle:()=>v,default:()=>D,frontMatter:()=>k,metadata:()=>q,toc:()=>w});var n=i(74848),a=i(28453),l=i(91366),t=i.n(l),r=(i(6050),i(57742)),c=i.n(r),d=(i(67792),i(27362)),o=i.n(d),p=i(36683),m=i.n(p),h=i(81124),u=i.n(h),x=i(60674),j=i.n(x),y=i(23397),g=i.n(y),f=(i(26651),i(51107)),N=(i(77675),i(19365));const k={id:"cancel-pending-request",title:"Cancel Pending Request",description:"This API discontinues an open request in SSM.",sidebar_label:"Cancel Pending Request",hide_title:!0,hide_table_of_contents:!0,api:"eJzdVttu2zgQ/RVinlpAsmV3c9OiD6nWLYyFm8D2AgskAUyLI4uNRLIk5VQ19O8Lkkpio0mavTytX0yO5nI4nDPDHVi6MZBewXmeozFkjl8bNBZuImBocs2V5VJACsuSG3J+OSWMm1wKy0WDhlBBpEJBdDAjXJDFYja4FtdiWSJZnTe2lJp/p87LitSNsaSkWySrD0g16hUpZFXJO2Rk3ZLVUt6iWHnzGRWMWqlboqimtUmdcNXHucV2Re43Uq/ctwuPlFYH+rmsaxTWrCACqVB7HFMGKeRU5FhdomBcbO5PHUHv84NkLaQ7cCdFYd2SKlXx3DsYfjEuJzsweYk1dSvbKoQU5PoL5s6P0i6c5WiCmwBjT9NYzcUGIsBvtFaVE1k0losNEfIOugcot9i+bDY+O3m3py/1y+qU1VxA13UPQg8r8/kgfUIe6iDdwZZWDR6e4gDqIdIA5wDNY0gfVaNRUpgQdpwk7u+w1p7BEkGJlKH2hr9Ri09ewRNHnkkRkeSUXOSWjJPRKRmdpaOT9OiYfJotwWFaoN6ifq2/c0XzEuNMttLicDQY9T5snEl5y1+NK8sW84/x8uL3yef34/FxkozH7+L1ScLiX07WRXxWjIp4dMzoGsdHyTGe/kouqS3fD324pabCFKjjicily9Nro+ZlI26ReSd/xlmo8HjZKowDh8xrPQlpBC+K3tNHTeu/7WJxPptczKefpp9DSf5HhEOtpc4kw5ejJ443tdn8BGPje+M/4sweEEigD7bvMXDC9yy0vravdiBo7QwUtSVEwMXj2tGKa2SQWt1g9GyOu+4mghptKV2zU9LTx/tIYfhM7zOeBAFBoytIobRWmXQ43FkUVNhuYOiWt8LmlWzYIJf1cJLNhlTx4fYIIthSzem6T04w+ZHcvdzNl4I2lYX0IdWdR20wbzS37cIdLfhaU8NzN0v2DuqwQZ8At/c67j7XfrL8TNsr+cp1tTV/bPuT+3v/9w3PXV0hPQpuQymF/JGJsKiV5gbJlKGw3LYkc0n1I3aOBWoUOcKTUziTVYW5kxCl5ZYzNMSWSBhayitDZOG3plFKaouMhDowpJDaf/k5ijeTafbW3ShqEyIfDZKBp4urpZp6NvZl+my7PsC+N0z/B4+JvqwsfrNDVdFw2540u55mV08/MW4iKB0b0yvY7dbU4B+66jon/tqgbiG9unkkkqci48atGaQFrQy+kNY38747vCXPQeyFVLSer75LAUQQStkj7266+0nr44dP+3Niz/SHJt1F9xbuRansi7r7PeryYrGECNb9y6sOPVNTzzd6BylcwzX4d9zDhPHyHVRUbBq6cfrBr/v9BXMWwE0=",sidebar_class_name:"post api-method",info_path:"eic/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},v=void 0,q={id:"eic/cancel-pending-request",title:"Cancel Pending Request",description:"This API discontinues an open request in SSM.",source:"@site/docs/eic/cancel-pending-request.api.mdx",sourceDirName:"eic",slug:"/eic/cancel-pending-request",permalink:"/developer-portal/eic/cancel-pending-request",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"cancel-pending-request",title:"Cancel Pending Request",description:"This API discontinues an open request in SSM.",sidebar_label:"Cancel Pending Request",hide_title:!0,hide_table_of_contents:!0,api:"eJzdVttu2zgQ/RVinlpAsmV3c9OiD6nWLYyFm8D2AgskAUyLI4uNRLIk5VQ19O8Lkkpio0mavTytX0yO5nI4nDPDHVi6MZBewXmeozFkjl8bNBZuImBocs2V5VJACsuSG3J+OSWMm1wKy0WDhlBBpEJBdDAjXJDFYja4FtdiWSJZnTe2lJp/p87LitSNsaSkWySrD0g16hUpZFXJO2Rk3ZLVUt6iWHnzGRWMWqlboqimtUmdcNXHucV2Re43Uq/ctwuPlFYH+rmsaxTWrCACqVB7HFMGKeRU5FhdomBcbO5PHUHv84NkLaQ7cCdFYd2SKlXx3DsYfjEuJzsweYk1dSvbKoQU5PoL5s6P0i6c5WiCmwBjT9NYzcUGIsBvtFaVE1k0losNEfIOugcot9i+bDY+O3m3py/1y+qU1VxA13UPQg8r8/kgfUIe6iDdwZZWDR6e4gDqIdIA5wDNY0gfVaNRUpgQdpwk7u+w1p7BEkGJlKH2hr9Ri09ewRNHnkkRkeSUXOSWjJPRKRmdpaOT9OiYfJotwWFaoN6ifq2/c0XzEuNMttLicDQY9T5snEl5y1+NK8sW84/x8uL3yef34/FxkozH7+L1ScLiX07WRXxWjIp4dMzoGsdHyTGe/kouqS3fD324pabCFKjjicily9Nro+ZlI26ReSd/xlmo8HjZKowDh8xrPQlpBC+K3tNHTeu/7WJxPptczKefpp9DSf5HhEOtpc4kw5ejJ443tdn8BGPje+M/4sweEEigD7bvMXDC9yy0vravdiBo7QwUtSVEwMXj2tGKa2SQWt1g9GyOu+4mghptKV2zU9LTx/tIYfhM7zOeBAFBoytIobRWmXQ43FkUVNhuYOiWt8LmlWzYIJf1cJLNhlTx4fYIIthSzem6T04w+ZHcvdzNl4I2lYX0IdWdR20wbzS37cIdLfhaU8NzN0v2DuqwQZ8At/c67j7XfrL8TNsr+cp1tTV/bPuT+3v/9w3PXV0hPQpuQymF/JGJsKiV5gbJlKGw3LYkc0n1I3aOBWoUOcKTUziTVYW5kxCl5ZYzNMSWSBhayitDZOG3plFKaouMhDowpJDaf/k5ijeTafbW3ShqEyIfDZKBp4urpZp6NvZl+my7PsC+N0z/B4+JvqwsfrNDVdFw2540u55mV08/MW4iKB0b0yvY7dbU4B+66jon/tqgbiG9unkkkqci48atGaQFrQy+kNY38747vCXPQeyFVLSer75LAUQQStkj7266+0nr44dP+3Niz/SHJt1F9xbuRansi7r7PeryYrGECNb9y6sOPVNTzzd6BylcwzX4d9zDhPHyHVRUbBq6cfrBr/v9BXMWwE0=",sidebar_class_name:"post api-method",info_path:"eic/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},sidebar:"eic-5.0.0",previous:{title:"Add Approver to existing Request",permalink:"/developer-portal/eic/add-approver-to-existing-request"},next:{title:"Get List of Pending Requests for Approver",permalink:"/developer-portal/eic/get-list-of-pending-requests-for-approver"}},b={},w=[];function S(e){const s={code:"code",p:"p",...(0,a.R)(),...e.components},{Details:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Cancel Pending Request"}),"\n",(0,n.jsx)(c(),{method:"post",path:"/cancelPendingRequest"}),"\n",(0,n.jsx)(s.p,{children:"This API discontinues an open request in SSM."}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"Authorization"})," must have ",(0,n.jsx)(s.code,{children:"Bearer"})," followed by ",(0,n.jsx)(s.code,{children:"Token"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Mandatory params:"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"requestkey"})," ",(0,n.jsx)(s.code,{children:"requestor"})]}),"\n",(0,n.jsx)(s.p,{children:"Optional params:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"comments"})}),"\n",(0,n.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,n.jsx)(s.p,{children:"Path Parameters"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("ul",{children:(0,n.jsx)(m(),{className:"paramsItem",param:{name:"path",in:"path",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,n.jsx)(o(),{className:"openapi-tabs__mime",children:(0,n.jsx)(N.default,{label:"application/json",value:"application/json-schema",children:(0,n.jsxs)(i,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,n.jsx)(s.p,{children:"Body"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(j(),{collapsible:!1,name:"comments",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"testing now"}}),(0,n.jsx)(j(),{collapsible:!1,name:"requestkey",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"2973"}}),(0,n.jsx)(j(),{collapsible:!1,name:"requestor",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"admin"}})]})]})})}),"\n",(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsx)(t(),{label:void 0,id:void 0,children:(0,n.jsxs)(N.default,{label:"200",value:"200",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Cancel Pending Request"})}),(0,n.jsxs)(i,{style:{textAlign:"left",marginBottom:"1rem"},className:"openapi-markdown__details","data-collaposed":!0,open:!1,children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Response Headers"})})}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsxs)("li",{className:"schemaItem",children:[(0,n.jsxs)("summary",{style:{},children:[(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Date"})}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:(0,n.jsx)(s.p,{children:"string"})})]}),(0,n.jsx)("div",{})]}),(0,n.jsxs)("li",{className:"schemaItem",children:[(0,n.jsxs)("summary",{style:{},children:[(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Server"})}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:(0,n.jsx)(s.p,{children:"string"})})]}),(0,n.jsx)("div",{})]}),(0,n.jsxs)("li",{className:"schemaItem",children:[(0,n.jsxs)("summary",{style:{},children:[(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Set-Cookie"})}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:(0,n.jsx)(s.p,{children:"string"})})]}),(0,n.jsx)("div",{})]}),(0,n.jsxs)("li",{className:"schemaItem",children:[(0,n.jsxs)("summary",{style:{},children:[(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Transfer-Encoding"})}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:(0,n.jsx)(s.p,{children:"string"})})]}),(0,n.jsx)("div",{})]}),(0,n.jsxs)("li",{className:"schemaItem",children:[(0,n.jsxs)("summary",{style:{},children:[(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"X-Content-Type-Options"})}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:(0,n.jsx)(s.p,{children:"string"})})]}),(0,n.jsx)("div",{})]}),(0,n.jsxs)("li",{className:"schemaItem",children:[(0,n.jsxs)("summary",{style:{},children:[(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"X-Frame-Options"})}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:(0,n.jsx)(s.p,{children:"string"})})]}),(0,n.jsx)("div",{})]})]})]}),(0,n.jsx)("div",{children:(0,n.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(N.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(N.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(j(),{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"0"}}),(0,n.jsx)(j(),{collapsible:!1,name:"msg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Success"}})]})]})}),(0,n.jsx)(N.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(u(),{responseExample:'{\n  "errorCode": "0",\n  "msg": "Success"\n}',language:"json"})}),(0,n.jsx)(N.default,{label:"Cancel Pending Request",value:"Cancel Pending Request",children:(0,n.jsx)(u(),{responseExample:'{\n  "errorCode": "0",\n  "msg": "Success"\n}',language:"json"})})]})})})})]})})})})]})}function D(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(S,{...e})}):S(e)}}}]);