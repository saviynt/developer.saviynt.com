"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5718],{46195:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>b,contentTitle:()=>N,default:()=>w,frontMatter:()=>D,metadata:()=>S,toc:()=>C});var l=a(74848),i=a(28453),t=a(91366),n=a.n(t),r=(a(6050),a(57742)),d=a.n(r),c=(a(67792),a(27362)),o=a.n(c),m=a(36683),h=a.n(m),p=a(81124),x=a.n(p),j=a(60674),u=a.n(j),y=a(23397),g=a.n(y),f=(a(26651),a(51107)),v=(a(77675),a(19365));const D={id:"delete-delegate",title:"Delete Delegate",description:"This API is used to delete a specific delegate.",sidebar_label:"Delete Delegate",hide_title:!0,hide_table_of_contents:!0,api:"eJzlVttu2zgQ/RVinlpAspSL01SLPriuUxiLXBB7gQKuAdPUyGIjkSxJ2VEN/fuClJw4SVNnnxd+MDnknLnwzIy2YOnKQDKDfi8mX7DAFbWYkkFacsGN1dRyKWAeQIqGaa78NoFpzg0Z3IwJN6QymBIrSYoFWiSUGIWMZ5x5icPrke/C/aY5ksWgsrnU/JdHXpCyMpbkdI1k8RmpRr0gmSwKucGULGuymMo7FIueU7+kIqVW6pooqmlpEg+7qAzqK1rigoTEOr+4ITZH55cmm1y6vfeNi5U/2LkVePU7rFtN3Cnuzu+whgCkwjYL4xQSaIPcJQoC0PizQmM/y7SGZAtMCovCuiVVquDMq0b34WazCTOpy7DSBQomU0zdJcNyLKlb2VohJCCXP5BZCEBpZ9lyNO7U+fJ4yVjNxQoCwHtaqsKJjj9AE8AuF3++S93rQtM0D0Jv40v7gA/BJVtY06LCB/vOyL6NRyCPpdEoKUwLdhzH7u8pbZ5bCCBHmqJuzXc2X6TkNxFcaB6Q+IQMqhU5jo/OSRwn/X5yfEq+Xk7BOTNBvUb9VryBoizHcChraTE66h11GDYcSnnH3+zXcDi5vQin13+Prj6dUhovs2wZZmcnJ+Fp9jELz8/i45DRD+cf6Rnrp8v+X+SG2vxT5M1NNRUmQx2OHD8c9ButsrwSd5h6kG/hhaYlhtc+5+atEJPB5ej6dvx1fNXy4hUe/zDuHd9OW9Ra6qFMDxAydtwtzeqAjxVjaExWFf+Nu3tOQAydoWdoLYN9X0HrCTnbgmhZrqjNIQAuHteu6rl2JWx1hcGrKW6aeQAl2ly65qGk8SlyGAlEL3qJ8ZxtbVe6gARya5VJomhrUVBhm56ha14LywpZpT0my2g0vIyo4tG6DwGsqeZ02aWkVXlZhJ3ctfSMVoWF5CHHjffXIKs0t/XEBdViLanhzHXuvRCdb9CF7vb+jnvIpe/jh277S56yXGTS3+S2fec2RjISFrXS3CAZpygstzUZusD95LnFDDUKhvDb4TSURYHMSYjScs1T3DV3S3lhiMz81lRKSe1GXvtKhmRS+5PDXrwbjYfvXdZRm9Zyvxf3PJfdS5fUl0pHopet74nTe5Pj/zRcO3JYvLeRKqgbJkFL/W1XJrPnI3ceQO7qKJnBdrukBv/RRdM48c8KdQ3JbP5YCL6UUm7cOoUko4XBP2T+3W1X1+/Ja851QipqX2++xQAE3YD0PjfzZjfYvP32aNhaCacO4FH18FdCE+wgBoyhsq8o+9b8pN3cXE+mEMCy+zQp2w64hxzsb5LZvGmafwE5MXUI",sidebar_class_name:"post api-method",info_path:"eic/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},N=void 0,S={id:"eic/delete-delegate",title:"Delete Delegate",description:"This API is used to delete a specific delegate.",source:"@site/docs/eic/delete-delegate.api.mdx",sourceDirName:"eic",slug:"/eic/delete-delegate",permalink:"/docs/eic/delete-delegate",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"delete-delegate",title:"Delete Delegate",description:"This API is used to delete a specific delegate.",sidebar_label:"Delete Delegate",hide_title:!0,hide_table_of_contents:!0,api:"eJzlVttu2zgQ/RVinlpAspSL01SLPriuUxiLXBB7gQKuAdPUyGIjkSxJ2VEN/fuClJw4SVNnnxd+MDnknLnwzIy2YOnKQDKDfi8mX7DAFbWYkkFacsGN1dRyKWAeQIqGaa78NoFpzg0Z3IwJN6QymBIrSYoFWiSUGIWMZ5x5icPrke/C/aY5ksWgsrnU/JdHXpCyMpbkdI1k8RmpRr0gmSwKucGULGuymMo7FIueU7+kIqVW6pooqmlpEg+7qAzqK1rigoTEOr+4ITZH55cmm1y6vfeNi5U/2LkVePU7rFtN3Cnuzu+whgCkwjYL4xQSaIPcJQoC0PizQmM/y7SGZAtMCovCuiVVquDMq0b34WazCTOpy7DSBQomU0zdJcNyLKlb2VohJCCXP5BZCEBpZ9lyNO7U+fJ4yVjNxQoCwHtaqsKJjj9AE8AuF3++S93rQtM0D0Jv40v7gA/BJVtY06LCB/vOyL6NRyCPpdEoKUwLdhzH7u8pbZ5bCCBHmqJuzXc2X6TkNxFcaB6Q+IQMqhU5jo/OSRwn/X5yfEq+Xk7BOTNBvUb9VryBoizHcChraTE66h11GDYcSnnH3+zXcDi5vQin13+Prj6dUhovs2wZZmcnJ+Fp9jELz8/i45DRD+cf6Rnrp8v+X+SG2vxT5M1NNRUmQx2OHD8c9ButsrwSd5h6kG/hhaYlhtc+5+atEJPB5ej6dvx1fNXy4hUe/zDuHd9OW9Ra6qFMDxAydtwtzeqAjxVjaExWFf+Nu3tOQAydoWdoLYN9X0HrCTnbgmhZrqjNIQAuHteu6rl2JWx1hcGrKW6aeQAl2ly65qGk8SlyGAlEL3qJ8ZxtbVe6gARya5VJomhrUVBhm56ha14LywpZpT0my2g0vIyo4tG6DwGsqeZ02aWkVXlZhJ3ctfSMVoWF5CHHjffXIKs0t/XEBdViLanhzHXuvRCdb9CF7vb+jnvIpe/jh277S56yXGTS3+S2fec2RjISFrXS3CAZpygstzUZusD95LnFDDUKhvDb4TSURYHMSYjScs1T3DV3S3lhiMz81lRKSe1GXvtKhmRS+5PDXrwbjYfvXdZRm9Zyvxf3PJfdS5fUl0pHopet74nTe5Pj/zRcO3JYvLeRKqgbJkFL/W1XJrPnI3ceQO7qKJnBdrukBv/RRdM48c8KdQ3JbP5YCL6UUm7cOoUko4XBP2T+3W1X1+/Ja851QipqX2++xQAE3YD0PjfzZjfYvP32aNhaCacO4FH18FdCE+wgBoyhsq8o+9b8pN3cXE+mEMCy+zQp2w64hxzsb5LZvGmafwE5MXUI",sidebar_class_name:"post api-method",info_path:"eic/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"Edit Delegate",permalink:"/docs/eic/edit-delegate"},next:{title:"6.0 Attestations",permalink:"/docs/eic/6-0-attestations"}},b={},C=[];function k(e){const s={code:"code",p:"p",...(0,i.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Delete Delegate"}),"\n",(0,l.jsx)(d(),{method:"post",path:"/deleteDelegate"}),"\n",(0,l.jsx)(s.p,{children:"This API is used to delete a specific delegate."}),"\n",(0,l.jsxs)(s.p,{children:["The ",(0,l.jsx)(s.code,{children:"Authorization"})," must have ",(0,l.jsx)(s.code,{children:"Bearer"})," followed by ",(0,l.jsx)(s.code,{children:"Token"}),"."]}),"\n",(0,l.jsx)(s.p,{children:"Mandatory params:"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"userName"})," - this is the user who is deleting the delegate,"]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"key"})," - the is the delegatekey"]}),"\n",(0,l.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,l.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,l.jsx)(s.p,{children:"Path Parameters"})})}),(0,l.jsx)("div",{children:(0,l.jsx)("ul",{children:(0,l.jsx)(h(),{className:"paramsItem",param:{name:"path",in:"path",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,l.jsx)(o(),{className:"openapi-tabs__mime",children:(0,l.jsx)(v.default,{label:"application/x-www-form-urlencoded",value:"application/x-www-form-urlencoded-schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,l.jsx)(s.p,{children:"Body"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(u(),{collapsible:!1,name:"key",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"27"}}),(0,l.jsx)(u(),{collapsible:!1,name:"userName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"admin"}})]})]})})}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsx)(n(),{label:void 0,id:void 0,children:(0,l.jsxs)(v.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Delete Delegate"})}),(0,l.jsxs)(a,{style:{textAlign:"left",marginBottom:"1rem"},className:"openapi-markdown__details","data-collaposed":!0,open:!1,children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Response Headers"})})}),(0,l.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,l.jsxs)("li",{className:"schemaItem",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Date"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"string"})})]}),(0,l.jsx)("div",{})]}),(0,l.jsxs)("li",{className:"schemaItem",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Server"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"string"})})]}),(0,l.jsx)("div",{})]}),(0,l.jsxs)("li",{className:"schemaItem",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Set-Cookie"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"string"})})]}),(0,l.jsx)("div",{})]}),(0,l.jsxs)("li",{className:"schemaItem",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Transfer-Encoding"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"string"})})]}),(0,l.jsx)("div",{})]}),(0,l.jsxs)("li",{className:"schemaItem",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"X-Frame-Options"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"string"})})]}),(0,l.jsx)("div",{})]})]})]}),(0,l.jsx)("div",{children:(0,l.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(u(),{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"0"}}),(0,l.jsx)(u(),{collapsible:!1,name:"msg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Successful"}})]})]})}),(0,l.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(x(),{responseExample:'{\n  "errorCode": "0",\n  "msg": "Successful"\n}',language:"json"})}),(0,l.jsx)(v.default,{label:"Delete Delegate",value:"Delete Delegate",children:(0,l.jsx)(x(),{responseExample:'{\n  "errorCode": "0",\n  "msg": "Successful"\n}',language:"json"})})]})})})})]})})})})]})}function w(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(k,{...e})}):k(e)}}}]);