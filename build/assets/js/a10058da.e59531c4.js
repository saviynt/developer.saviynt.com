"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9755],{21490:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>S,contentTitle:()=>b,default:()=>P,frontMatter:()=>v,metadata:()=>z,toc:()=>k});var i=r(74848),a=r(28453),n=r(91366),l=r.n(n),t=(r(6050),r(57742)),d=r.n(t),c=(r(67792),r(27362)),o=r.n(c),p=r(36683),m=r.n(p),h=r(81124),u=r.n(h),j=r(60674),x=r.n(j),y=r(23397),g=r.n(y),N=(r(26651),r(51107)),f=(r(77675),r(19365));const v={id:"delete-usergroup",title:"Delete UserGroup",description:"This API delete usergroup in SSM.",sidebar_label:"Delete UserGroup",hide_title:!0,hide_table_of_contents:!0,api:"eJzNVl1v2zoM/SsCnzbAztda3MYXe8iyrAguuhZJClygLRBFomOttqRKcjov8H8fJDttunb9APawvESmKR6S4jnyFhxdW0gu4NyiIcdGldrCVQQcLTNCO6EkJLDIhCWjsynhmKNDUlo0a+9LhCTz+UnnUl7KRYZkOSpdpoz4Qf3OJSlK60hGN0iWn5AaNEuSqjxXt8jJqiLLhbpGuQzbT6jk1ClTEU0NLWzijUuPJGmBy6h9CLBLiEBpNAFlyiGBJrHznQNEYPCmROs+KV5BsgWmpEPp/JJqnQsW9na/WV/gFizLsKB+5SqNkIBafUPmIAJtPJITaP3buxT2XK0zQq4hAvxOC517k0PrRloMoI5gV8LzO2xBzU2JP6Cu6zt7gPzc9NzXdrxD3tC8xF/yuQfdx3wQOMQ2aLWStgk+6PX838PjfoQYQYaUo2nyoQ6fbNkTVc2pi8hgSD4jI4Ne/4j0+snBh6R/SI5PFuCzmaPZoHltvJGmLMN4rCrlsNvv9NsYLh4rdS1endd4PJ99iRen/02+fjzgaf+A8V7cG/T/iQ9WQ4yPhr2jeDhkg0EfPwyR47/kjLrsYzfALQyVNkUTTyRT3Id+JSrLSnmNPAT5Px43ExkvKo3xaei9fW0kqawUadpG+mJo8eYQ89HJ5HQ2PZ5+bUbuDxEEjVFmrPgL497zzCjs+oUcS8bQ2jdyYi8F6EELsx+r4UGQGXRhqi+20NJFU5dBBELer72SCIMcEmdKjH7b3bq+iqBAlymvSFrZ0B0fI4HuvUDtKGXD5Dfgpckhgcw5bZNud+tQUunqjqUbUUnHclXyDlNFdzI+6VItuptDiGBDjaCrtiPNlsdcbu1e0VNa5g6Su/7WIWGLrDTCVXNfVRNrRa1gXsn3avS5QVu7fw4+/hBXQddf8g5OYVz9QM3utXmyO+y3aZk/oVQFROFaqQm9IhPp0GgjLJIpR+mEq8jYNzBcYDNM0aBkCE/ecWOV58i8hWijNoKjJS5DwtFRkVui0vBoS62VcchJc9yWpMqENy9n8W4yHb/3p4fGNsiHnV4n8MGPTEED3dqCn1DiB1nv3Wt/5SXdjoPD766rcypkuBD9sG9bZlzAr8y4iiDz3EkuYLtdUYvnJq9rb74p0VSQXFzdz35gDxfWrzkkKc0tPtOjd7OWy+/J77JrjVRWgWJBUwAiuMZqJwn1Vb27EQN+82pfz/e2PhLTOtrtGDGG2j3ru68oZ6fzBUSwar9oikbhDL31GkVvIYFLuITwaXR3EwT7FnIq1yVde/8mrv/9BKufcRU=",sidebar_class_name:"post api-method",info_path:"eic/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},b=void 0,z={id:"eic/delete-usergroup",title:"Delete UserGroup",description:"This API delete usergroup in SSM.",source:"@site/docs/eic/delete-usergroup.api.mdx",sourceDirName:"eic",slug:"/eic/delete-usergroup",permalink:"/developer-portal/eic/delete-usergroup",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"delete-usergroup",title:"Delete UserGroup",description:"This API delete usergroup in SSM.",sidebar_label:"Delete UserGroup",hide_title:!0,hide_table_of_contents:!0,api:"eJzNVl1v2zoM/SsCnzbAztda3MYXe8iyrAguuhZJClygLRBFomOttqRKcjov8H8fJDttunb9APawvESmKR6S4jnyFhxdW0gu4NyiIcdGldrCVQQcLTNCO6EkJLDIhCWjsynhmKNDUlo0a+9LhCTz+UnnUl7KRYZkOSpdpoz4Qf3OJSlK60hGN0iWn5AaNEuSqjxXt8jJqiLLhbpGuQzbT6jk1ClTEU0NLWzijUuPJGmBy6h9CLBLiEBpNAFlyiGBJrHznQNEYPCmROs+KV5BsgWmpEPp/JJqnQsW9na/WV/gFizLsKB+5SqNkIBafUPmIAJtPJITaP3buxT2XK0zQq4hAvxOC517k0PrRloMoI5gV8LzO2xBzU2JP6Cu6zt7gPzc9NzXdrxD3tC8xF/yuQfdx3wQOMQ2aLWStgk+6PX838PjfoQYQYaUo2nyoQ6fbNkTVc2pi8hgSD4jI4Ne/4j0+snBh6R/SI5PFuCzmaPZoHltvJGmLMN4rCrlsNvv9NsYLh4rdS1endd4PJ99iRen/02+fjzgaf+A8V7cG/T/iQ9WQ4yPhr2jeDhkg0EfPwyR47/kjLrsYzfALQyVNkUTTyRT3Id+JSrLSnmNPAT5Px43ExkvKo3xaei9fW0kqawUadpG+mJo8eYQ89HJ5HQ2PZ5+bUbuDxEEjVFmrPgL497zzCjs+oUcS8bQ2jdyYi8F6EELsx+r4UGQGXRhqi+20NJFU5dBBELer72SCIMcEmdKjH7b3bq+iqBAlymvSFrZ0B0fI4HuvUDtKGXD5Dfgpckhgcw5bZNud+tQUunqjqUbUUnHclXyDlNFdzI+6VItuptDiGBDjaCrtiPNlsdcbu1e0VNa5g6Su/7WIWGLrDTCVXNfVRNrRa1gXsn3avS5QVu7fw4+/hBXQddf8g5OYVz9QM3utXmyO+y3aZk/oVQFROFaqQm9IhPp0GgjLJIpR+mEq8jYNzBcYDNM0aBkCE/ecWOV58i8hWijNoKjJS5DwtFRkVui0vBoS62VcchJc9yWpMqENy9n8W4yHb/3p4fGNsiHnV4n8MGPTEED3dqCn1DiB1nv3Wt/5SXdjoPD766rcypkuBD9sG9bZlzAr8y4iiDz3EkuYLtdUYvnJq9rb74p0VSQXFzdz35gDxfWrzkkKc0tPtOjd7OWy+/J77JrjVRWgWJBUwAiuMZqJwn1Vb27EQN+82pfz/e2PhLTOtrtGDGG2j3ru68oZ6fzBUSwar9oikbhDL31GkVvIYFLuITwaXR3EwT7FnIq1yVde/8mrv/9BKufcRU=",sidebar_class_name:"post api-method",info_path:"eic/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"Add/Remove User From UserGroup",permalink:"/developer-portal/eic/add-remove-user-from-usergroup"},next:{title:"Get List of UserGroups",permalink:"/developer-portal/eic/get-list-of-usergroups"}},S={},k=[];function D(e){const s={code:"code",p:"p",...(0,a.R)(),...e.components},{Details:r}=s;return r||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(N.default,{as:"h1",className:"openapi__heading",children:"Delete UserGroup"}),"\n",(0,i.jsx)(d(),{method:"post",path:"/deleteUserGroup"}),"\n",(0,i.jsx)(s.p,{children:"This API delete usergroup in SSM."}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"Authorization"})," must have ",(0,i.jsx)(s.code,{children:"Bearer"})," followed by ",(0,i.jsx)(s.code,{children:"Token"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"Mandatory params:"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"username"}),",\n",(0,i.jsx)(s.code,{children:"usergroup"})]}),"\n",(0,i.jsx)(N.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsxs)(r,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(m(),{className:"paramsItem",param:{name:"path",in:"path",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsx)(o(),{className:"openapi-tabs__mime",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(r,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(s.p,{children:"Body"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(x(),{collapsible:!1,name:"usergroup",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"testApi2"}}),(0,i.jsx)(x(),{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"smarquez"}})]})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(l(),{label:void 0,id:void 0,children:(0,i.jsxs)(f.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Delete UserGroup"})}),(0,i.jsxs)(r,{style:{textAlign:"left",marginBottom:"1rem"},className:"openapi-markdown__details","data-collaposed":!0,open:!1,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Response Headers"})})}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsxs)("li",{className:"schemaItem",children:[(0,i.jsxs)("summary",{style:{},children:[(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Date"})}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:(0,i.jsx)(s.p,{children:"string"})})]}),(0,i.jsx)("div",{})]}),(0,i.jsxs)("li",{className:"schemaItem",children:[(0,i.jsxs)("summary",{style:{},children:[(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Server"})}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:(0,i.jsx)(s.p,{children:"string"})})]}),(0,i.jsx)("div",{})]}),(0,i.jsxs)("li",{className:"schemaItem",children:[(0,i.jsxs)("summary",{style:{},children:[(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Set-Cookie"})}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:(0,i.jsx)(s.p,{children:"string"})})]}),(0,i.jsx)("div",{})]}),(0,i.jsxs)("li",{className:"schemaItem",children:[(0,i.jsxs)("summary",{style:{},children:[(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Transfer-Encoding"})}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:(0,i.jsx)(s.p,{children:"string"})})]}),(0,i.jsx)("div",{})]}),(0,i.jsxs)("li",{className:"schemaItem",children:[(0,i.jsxs)("summary",{style:{},children:[(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"X-Content-Type-Options"})}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:(0,i.jsx)(s.p,{children:"string"})})]}),(0,i.jsx)("div",{})]}),(0,i.jsxs)("li",{className:"schemaItem",children:[(0,i.jsxs)("summary",{style:{},children:[(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"X-Frame-Options"})}),(0,i.jsx)("span",{style:{opacity:"0.6"},children:(0,i.jsx)(s.p,{children:"string"})})]}),(0,i.jsx)("div",{})]})]})]}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(r,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(x(),{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"0"}}),(0,i.jsx)(x(),{collapsible:!1,name:"msg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Success"}})]})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "errorCode": "0",\n  "msg": "Success"\n}',language:"json"})}),(0,i.jsx)(f.default,{label:"Delete UserGroup",value:"Delete UserGroup",children:(0,i.jsx)(u(),{responseExample:'{\n  "errorCode": "0",\n  "msg": "Success"\n}',language:"json"})})]})})})})]})})})})]})}function P(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(D,{...e})}):D(e)}}}]);