"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5718],{46195:(e,s,l)=>{l.r(s),l.d(s,{assets:()=>v,contentTitle:()=>b,default:()=>Z,frontMatter:()=>I,metadata:()=>S,toc:()=>k});var a=l(74848),i=l(28453),t=l(91366),n=l.n(t),r=(l(6050),l(57742)),d=l.n(r),c=(l(67792),l(27362)),p=l.n(c),m=l(36683),o=l.n(m),h=l(81124),x=l.n(h),u=l(60674),j=l.n(u),g=l(23397),y=l.n(g),f=(l(26651),l(51107)),N=(l(77675),l(19365));const I={id:"delete-delegate",title:"Delete Delegate",description:"This API is used to delete a specific delegate.",sidebar_label:"Delete Delegate",hide_title:!0,hide_table_of_contents:!0,api:"eJzlVttu2zgQ/RVinlpAspSL01SLPriuUxiLXJC4QAHXgGlqZLGWSJak7GgN/fuClJw4SVNnnxd+MG9z5nB4ZkZbsHRpIJnCN4OafMECl9RyKWAWQIqGaa78NIFJzg0Z3IwJN6QymBIrSYoFWiSUGIWMZ5z5lSW12CM/hPtNciTzQWVzqfk/HnlOyspYktM1kvlnpBr1nGSyKOQGU7KoyXwiVyjmPWd+SUVKrdQ1UVTT0iQedl4Z1Fe0xDkJiXW8uCE2R8dLk00u3dxz42LpN3a0Am++wrq1xJ3hbn+FNQQgFWrPdZxCAu0lu9AgBKDxV4XGfpZpDckWmBQWhXVDqlTBmTeN7sPNZhNmUpdhpQsUTKaYukOG5VhSN7K1QkhALn4isxCA0s6z5WjcruPyeMhYzcUSAsB7WqrCLR1/gCaAXSz+fJamJRfQNM3DovfxpX3Ah8slW1jTosIH/87Jvo9HII+l0SgpTAt2HMfu76lsnnsIIEeaom7ddz5fhOQ3N7jQPCDxCRlUS3IcH52TOE76/eT4lHy9nIAjc4d6jfqteANFWY7hUNbSYnTUO+owbDiUcsXfzGs4vLu9CCfXf4+uPp1SGi+ybBFmZycn4Wn2MQvPz+LjkNEP5x/pGeuni/5f5Iba/FPk3U00FSZDHY6cPhz0G72yvBIrTD3I9/BC0xLDax9z81aIu8Hl6Pp2/HV81eriFR3/NO4d3y5b1FrqoUwPCDJ22i3N8gDHijE0JquK/6bdPRIQQ+foGVqrYF9X0HpBTrcgWpUranMIgIvHsct6rl0KW11h8GqIm2YWQIk2l654KGl8iBxGAtGLWmK8ZlvflS4ggdxaZZIo2loUVNimZ+ia18KyQlZpj8kyGg0vI6p4tO5DAGuqOV10IWlNXiZht+5KekarwkLyEOPG8zXIKs1tfecu1WItqOHMVe69Kzpu0F3dzf0Z95ALX8cPnfaHvGS5yKQ/yW37zu0dyUhY1Epzg2ScorDc1mToLu47zy1mqFEwhN82p6EsCmRuhSgt1zzFXXG3lBeGyMxPTaWU1BZT0r6SIZnUfucwi3ej8fC9izpq03ru9+Ke17J76ZL6VOlE9LL0PSG91zn+T821E4fFexupgrpmErTS33ZpMn3ecmcB5C6Pkilstwtq8JsumsYt/6pQ15BMZ4+J4FMp5caNU0gyWhj8Q+Tf3XZ5/Z68Rq5bpKL2+eZLDEDQNUjPuZk1u8bm/bdbw9ZLOHEAj6aHvxKaYAcxYAyVfcXYl+Yn5ebm+m4CASy6T5OyrYB7yMH+JJnOmqb5F2+ccKs=",sidebar_class_name:"post api-method",info_path:"eic/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},b=void 0,S={id:"eic/delete-delegate",title:"Delete Delegate",description:"This API is used to delete a specific delegate.",source:"@site/docs/eic/delete-delegate.api.mdx",sourceDirName:"eic",slug:"/eic/delete-delegate",permalink:"/developer-portal/eic/delete-delegate",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"delete-delegate",title:"Delete Delegate",description:"This API is used to delete a specific delegate.",sidebar_label:"Delete Delegate",hide_title:!0,hide_table_of_contents:!0,api:"eJzlVttu2zgQ/RVinlpAspSL01SLPriuUxiLXJC4QAHXgGlqZLGWSJak7GgN/fuClJw4SVNnnxd+MG9z5nB4ZkZbsHRpIJnCN4OafMECl9RyKWAWQIqGaa78NIFJzg0Z3IwJN6QymBIrSYoFWiSUGIWMZ5z5lSW12CM/hPtNciTzQWVzqfk/HnlOyspYktM1kvlnpBr1nGSyKOQGU7KoyXwiVyjmPWd+SUVKrdQ1UVTT0iQedl4Z1Fe0xDkJiXW8uCE2R8dLk00u3dxz42LpN3a0Am++wrq1xJ3hbn+FNQQgFWrPdZxCAu0lu9AgBKDxV4XGfpZpDckWmBQWhXVDqlTBmTeN7sPNZhNmUpdhpQsUTKaYukOG5VhSN7K1QkhALn4isxCA0s6z5WjcruPyeMhYzcUSAsB7WqrCLR1/gCaAXSz+fJamJRfQNM3DovfxpX3Ah8slW1jTosIH/87Jvo9HII+l0SgpTAt2HMfu76lsnnsIIEeaom7ddz5fhOQ3N7jQPCDxCRlUS3IcH52TOE76/eT4lHy9nIAjc4d6jfqteANFWY7hUNbSYnTUO+owbDiUcsXfzGs4vLu9CCfXf4+uPp1SGi+ybBFmZycn4Wn2MQvPz+LjkNEP5x/pGeuni/5f5Iba/FPk3U00FSZDHY6cPhz0G72yvBIrTD3I9/BC0xLDax9z81aIu8Hl6Pp2/HV81eriFR3/NO4d3y5b1FrqoUwPCDJ22i3N8gDHijE0JquK/6bdPRIQQ+foGVqrYF9X0HpBTrcgWpUranMIgIvHsct6rl0KW11h8GqIm2YWQIk2l654KGl8iBxGAtGLWmK8ZlvflS4ggdxaZZIo2loUVNimZ+ia18KyQlZpj8kyGg0vI6p4tO5DAGuqOV10IWlNXiZht+5KekarwkLyEOPG8zXIKs1tfecu1WItqOHMVe69Kzpu0F3dzf0Z95ALX8cPnfaHvGS5yKQ/yW37zu0dyUhY1Epzg2ScorDc1mToLu47zy1mqFEwhN82p6EsCmRuhSgt1zzFXXG3lBeGyMxPTaWU1BZT0r6SIZnUfucwi3ej8fC9izpq03ru9+Ke17J76ZL6VOlE9LL0PSG91zn+T821E4fFexupgrpmErTS33ZpMn3ecmcB5C6Pkilstwtq8JsumsYt/6pQ15BMZ4+J4FMp5caNU0gyWhj8Q+Tf3XZ5/Z68Rq5bpKL2+eZLDEDQNUjPuZk1u8bm/bdbw9ZLOHEAj6aHvxKaYAcxYAyVfcXYl+Yn5ebm+m4CASy6T5OyrYB7yMH+JJnOmqb5F2+ccKs=",sidebar_class_name:"post api-method",info_path:"eic/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"Edit Delegate",permalink:"/developer-portal/eic/edit-delegate"},next:{title:"Fetch Attestation List",permalink:"/developer-portal/eic/fetch-attestation-list"}},v={},k=[];function D(e){const s={code:"code",p:"p",...(0,i.R)(),...e.components},{Details:l}=s;return l||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Delete Delegate"}),"\n",(0,a.jsx)(d(),{method:"post",path:"/deleteDelegate"}),"\n",(0,a.jsx)(s.p,{children:"This API is used to delete a specific delegate."}),"\n",(0,a.jsxs)(s.p,{children:["The ",(0,a.jsx)(s.code,{children:"Authorization"})," must have ",(0,a.jsx)(s.code,{children:"Bearer"})," followed by ",(0,a.jsx)(s.code,{children:"Token"}),"."]}),"\n",(0,a.jsx)(s.p,{children:"Mandatory params:"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"userName"})," - this is the user who is deleting the delegate,"]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"key"})," - the is the delegatekey"]}),"\n",(0,a.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsxs)(l,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,a.jsx)(s.p,{children:"Path Parameters"})})}),(0,a.jsx)("div",{children:(0,a.jsx)("ul",{children:(0,a.jsx)(o(),{className:"paramsItem",param:{name:"path",in:"path",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,a.jsx)(p(),{className:"openapi-tabs__mime",children:(0,a.jsx)(N.default,{label:"application/x-www-form-urlencoded",value:"application/x-www-form-urlencoded-schema",children:(0,a.jsxs)(l,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,a.jsx)(s.p,{children:"Body"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,a.jsx)(j(),{collapsible:!1,name:"key",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"27"}}),(0,a.jsx)(j(),{collapsible:!1,name:"userName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"admin"}})]})]})})}),"\n",(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsx)(n(),{label:void 0,id:void 0,children:(0,a.jsxs)(N.default,{label:"200",value:"200",children:[(0,a.jsx)("div",{children:(0,a.jsx)(s.p,{children:"Delete Delegate"})}),(0,a.jsxs)(l,{style:{textAlign:"left",marginBottom:"1rem"},className:"openapi-markdown__details","data-collaposed":!0,open:!1,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("strong",{children:(0,a.jsx)(s.p,{children:"Response Headers"})})}),(0,a.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,a.jsxs)("li",{className:"schemaItem",children:[(0,a.jsxs)("summary",{style:{},children:[(0,a.jsx)("strong",{children:(0,a.jsx)(s.p,{children:"Date"})}),(0,a.jsx)("span",{style:{opacity:"0.6"},children:(0,a.jsx)(s.p,{children:"string"})})]}),(0,a.jsx)("div",{})]}),(0,a.jsxs)("li",{className:"schemaItem",children:[(0,a.jsxs)("summary",{style:{},children:[(0,a.jsx)("strong",{children:(0,a.jsx)(s.p,{children:"Server"})}),(0,a.jsx)("span",{style:{opacity:"0.6"},children:(0,a.jsx)(s.p,{children:"string"})})]}),(0,a.jsx)("div",{})]}),(0,a.jsxs)("li",{className:"schemaItem",children:[(0,a.jsxs)("summary",{style:{},children:[(0,a.jsx)("strong",{children:(0,a.jsx)(s.p,{children:"Set-Cookie"})}),(0,a.jsx)("span",{style:{opacity:"0.6"},children:(0,a.jsx)(s.p,{children:"string"})})]}),(0,a.jsx)("div",{})]}),(0,a.jsxs)("li",{className:"schemaItem",children:[(0,a.jsxs)("summary",{style:{},children:[(0,a.jsx)("strong",{children:(0,a.jsx)(s.p,{children:"Transfer-Encoding"})}),(0,a.jsx)("span",{style:{opacity:"0.6"},children:(0,a.jsx)(s.p,{children:"string"})})]}),(0,a.jsx)("div",{})]}),(0,a.jsxs)("li",{className:"schemaItem",children:[(0,a.jsxs)("summary",{style:{},children:[(0,a.jsx)("strong",{children:(0,a.jsx)(s.p,{children:"X-Frame-Options"})}),(0,a.jsx)("span",{style:{opacity:"0.6"},children:(0,a.jsx)(s.p,{children:"string"})})]}),(0,a.jsx)("div",{})]})]})]}),(0,a.jsx)("div",{children:(0,a.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,a.jsx)(N.default,{label:"application/json",value:"application/json",children:(0,a.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,a.jsx)(N.default,{label:"Schema",value:"Schema",children:(0,a.jsxs)(l,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,a.jsx)("strong",{children:(0,a.jsx)(s.p,{children:"Schema"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,a.jsx)(j(),{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"0"}}),(0,a.jsx)(j(),{collapsible:!1,name:"msg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Successful"}})]})]})}),(0,a.jsx)(N.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,a.jsx)(x(),{responseExample:'{\n  "errorCode": "0",\n  "msg": "Successful"\n}',language:"json"})}),(0,a.jsx)(N.default,{label:"Delete Delegate",value:"Delete Delegate",children:(0,a.jsx)(x(),{responseExample:'{\n  "errorCode": "0",\n  "msg": "Successful"\n}',language:"json"})})]})})})})]})})})})]})}function Z(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(D,{...e})}):D(e)}}}]);