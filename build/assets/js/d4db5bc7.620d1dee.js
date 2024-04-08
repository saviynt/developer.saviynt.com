"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[53582],{55298:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>v,contentTitle:()=>k,default:()=>F,frontMatter:()=>S,metadata:()=>C,toc:()=>N});var t=i(74848),a=i(28453),r=i(91366),l=i.n(r),n=(i(6050),i(57742)),c=i.n(n),o=(i(67792),i(27362)),d=i.n(o),p=i(36683),m=i.n(p),h=i(81124),x=i.n(h),j=i(60674),u=i.n(j),f=i(23397),b=i.n(f),g=(i(26651),i(51107)),y=(i(77675),i(19365));const S={id:"force-complete",title:"Force Complete",description:"This API is used to terminate data import job.",sidebar_label:"Force Complete",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVdtu2zgQ/RVinlpAsqw07iYq+uDVOoWxyAWxAxRwDZiWRhETiWTJkVuvoH9fkFI3idM2edsnSdTMmds5wxaI31pIVpCqulaS3ZCoBAm0sA4gR5sZoUkoCQksS2HZ9GrOhGWNxZyRYoSmFpITspwTZ6LWyhC7U9vRF/lFLktkm2lDpTLiH+5gNqxuLLGS75Bt/kRu0GxYoapKfcOcbfdss1T3KDcj5vwvFNPc8NpCAEqj8RDzHBIolMkwVbWukBACMGi1khYtJC0cjcfu8TT7M+fBHrmUyHM03uEvTuieNiux5u6N9hohAUtGyFsIAL9z5+i70ARsfMSmzS07Gscn7GicvDtJ4gn7dL6ErgtggWaH5rV4U82zEsNU7RVhFI/iAYPCVKl78eq80nRxfRYuL/+eXXyM4wzxND4O+Wk2Do/juAhP35+8D48n8Wn8bovF5I/tB3bFqfwY+XBLw6Ut0IQzmancQb8yalY28h5zD/I5PDO8xvDSt9y+FmIxPZ9dXs8/zS+gczCZkoSSnBPXuhKZn3p0Z90YfwKptneYEQSgjeOI527SAhqjTKpy/H30MXRBb3uO1vLbF8ydtSVOjX2hqJs0nS0WfUXDsXc5oGHSwo5XDR5kDGM4zArgIfJj+M6H8DJB8nxetSB57Vw0pxICEPLh3eDXRhjMISHTYPDLCXXdOoAaqVROblpZ32GHkUB0qD7rGd+HbkwFCZRE2iZR1BJKLqkbWb4Te0lZpZp8lKk6mqXnEdci2k0ggB03gm+HFvUuzxU8nLu1VPCmIkj+a3jn07WYNUbQfuFq6rG23IrMbaBHFbrcYKjcfXsbN9it30cvWXsjT3ghC+UtBfVD72tkM0lotBEW2TxHSYL2LHWF++15jQUalBnCTxdsqqoKM3fCtFE7kaNlVCLLkbioLFOF/7SNdqsWc9YPybJCGf/n5SzezObpW9d1NLaPPBmNR14JbtA190IbOPRsbz7JuX2Q6/98PwzjIvxOka64kK4cT8Z24O3q4NZYB1A6XicraNstt3hjqq5zx18bNHtIVusHZnpu58K69xySglcWf9OLN9eDzt6yX+U2HHK59wLwS8CJ/B73P+Tarbsf95SP3/+aZhlqeuT0bE0+0e7V5cLdS/8CcqOw1w==",sidebar_class_name:"post api-method",info_path:"eic/2.0/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},k=void 0,C={id:"eic/2.0/force-complete",title:"Force Complete",description:"This API is used to terminate data import job.",source:"@site/docs/eic/2.0/force-complete.api.mdx",sourceDirName:"eic/2.0",slug:"/eic/2.0/force-complete",permalink:"/developer-portal/eic/2.0/force-complete",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"force-complete",title:"Force Complete",description:"This API is used to terminate data import job.",sidebar_label:"Force Complete",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVdtu2zgQ/RVinlpAsqw07iYq+uDVOoWxyAWxAxRwDZiWRhETiWTJkVuvoH9fkFI3idM2edsnSdTMmds5wxaI31pIVpCqulaS3ZCoBAm0sA4gR5sZoUkoCQksS2HZ9GrOhGWNxZyRYoSmFpITspwTZ6LWyhC7U9vRF/lFLktkm2lDpTLiH+5gNqxuLLGS75Bt/kRu0GxYoapKfcOcbfdss1T3KDcj5vwvFNPc8NpCAEqj8RDzHBIolMkwVbWukBACMGi1khYtJC0cjcfu8TT7M+fBHrmUyHM03uEvTuieNiux5u6N9hohAUtGyFsIAL9z5+i70ARsfMSmzS07Gscn7GicvDtJ4gn7dL6ErgtggWaH5rV4U82zEsNU7RVhFI/iAYPCVKl78eq80nRxfRYuL/+eXXyM4wzxND4O+Wk2Do/juAhP35+8D48n8Wn8bovF5I/tB3bFqfwY+XBLw6Ut0IQzmancQb8yalY28h5zD/I5PDO8xvDSt9y+FmIxPZ9dXs8/zS+gczCZkoSSnBPXuhKZn3p0Z90YfwKptneYEQSgjeOI527SAhqjTKpy/H30MXRBb3uO1vLbF8ydtSVOjX2hqJs0nS0WfUXDsXc5oGHSwo5XDR5kDGM4zArgIfJj+M6H8DJB8nxetSB57Vw0pxICEPLh3eDXRhjMISHTYPDLCXXdOoAaqVROblpZ32GHkUB0qD7rGd+HbkwFCZRE2iZR1BJKLqkbWb4Te0lZpZp8lKk6mqXnEdci2k0ggB03gm+HFvUuzxU8nLu1VPCmIkj+a3jn07WYNUbQfuFq6rG23IrMbaBHFbrcYKjcfXsbN9it30cvWXsjT3ghC+UtBfVD72tkM0lotBEW2TxHSYL2LHWF++15jQUalBnCTxdsqqoKM3fCtFE7kaNlVCLLkbioLFOF/7SNdqsWc9YPybJCGf/n5SzezObpW9d1NLaPPBmNR14JbtA190IbOPRsbz7JuX2Q6/98PwzjIvxOka64kK4cT8Z24O3q4NZYB1A6XicraNstt3hjqq5zx18bNHtIVusHZnpu58K69xySglcWf9OLN9eDzt6yX+U2HHK59wLwS8CJ/B73P+Tarbsf95SP3/+aZhlqeuT0bE0+0e7V5cLdS/8CcqOw1w==",sidebar_class_name:"post api-method",info_path:"eic/2.0/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},sidebar:"eic-2.0",previous:{title:"Check Import Status",permalink:"/developer-portal/eic/2.0/check-import-status"},next:{title:"Send Email",permalink:"/developer-portal/eic/2.0/send-email"}},v={},N=[];function q(e){const s={code:"code",p:"p",...(0,a.R)(),...e.components},{Details:i}=s;return i||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Force Complete"}),"\n",(0,t.jsx)(c(),{method:"post",path:"/forceComplete"}),"\n",(0,t.jsx)(s.p,{children:"This API is used to terminate data import job."}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"Authorization"})," must have ",(0,t.jsx)(s.code,{children:"Bearer"})," followed by ",(0,t.jsx)(s.code,{children:"Token"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"No params"}),"\n",(0,t.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,t.jsxs)(i,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(s.p,{children:"Path Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{children:(0,t.jsx)(m(),{className:"paramsItem",param:{name:"path",in:"path",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsx)(l(),{label:void 0,id:void 0,children:(0,t.jsxs)(y.default,{label:"200",value:"200",children:[(0,t.jsx)("div",{children:(0,t.jsx)(s.p,{children:"Force Complete"})}),(0,t.jsxs)(i,{style:{textAlign:"left",marginBottom:"1rem"},className:"openapi-markdown__details","data-collaposed":!0,open:!1,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Response Headers"})})}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Date"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]}),(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Server"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]}),(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Set-Cookie"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]}),(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Transfer-Encoding"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]}),(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"X-Frame-Options"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]})]})]}),(0,t.jsx)("div",{children:(0,t.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(b(),{className:"openapi-tabs__schema",children:[(0,t.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)(u(),{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"0"}}),(0,t.jsx)(u(),{collapsible:!1,name:"errorMessage",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:""}}),(0,t.jsx)(u(),{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"SUCCESS"}})]})]})}),(0,t.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(x(),{responseExample:'{\n  "errorCode": "0",\n  "errorMessage": "",\n  "status": "SUCCESS"\n}',language:"json"})}),(0,t.jsx)(y.default,{label:"Force Complete",value:"Force Complete",children:(0,t.jsx)(x(),{responseExample:'{\n  "errorCode": "0",\n  "errorMessage": "",\n  "status": "SUCCESS"\n}',language:"json"})})]})})})})]})})})})]})}function F(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(q,{...e})}):q(e)}}}]);