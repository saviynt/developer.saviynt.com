"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1312],{18760:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>O,contentTitle:()=>k,default:()=>F,frontMatter:()=>g,metadata:()=>z,toc:()=>S});var a=t(74848),i=t(28453),r=t(91366),l=t.n(r),n=(t(6050),t(57742)),c=t.n(n),o=(t(67792),t(27362)),d=t.n(o),m=t(36683),h=t.n(m),p=t(81124),x=t.n(p),j=t(60674),u=t.n(j),f=t(23397),y=t.n(f),b=(t(26651),t(51107)),v=(t(77675),t(19365));const g={id:"check-import-status",title:"Check Import Status",description:"This API is used to check the status of data import job.",sidebar_label:"Check Import Status",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVdtu2zgQ/ZXBPLWAfImTtFkVffCqbmHsOgliFyiQBvBIGkdMJFIlR956Df37gpTbXOomeV3AgGRqLmcu53CLQtcO40tMTFUZDZ9FlUoUO7yKMGeXWVWLMhpjXBTKwfh8CspB4zgHMZAVnN2CFAxOSBoHZgU5CYGqamMFbkzah6/6qz41wjFIQQL+B6IqjsDocgNG8z1zyEhDymAb3feOi4JhOW6kMFb9Sx7KEqrGCRS0Zlj+yWTZLmFlytL8wzmkG1guzC3rZZcWarJUOYzQ1GxDgGmOMQbk05B2HqBjhJZdbbRjh/EWR8OhfzzsQRLq7dzgp1/BlLMNXh9I2D9dVnBF/k02NWOMTqzS1xghf6eqLjk0tIlgOIJxcw2j4cEJjIbx0Ul8OIJPswW2bYRztmu2L403rikruJeYjREeHPQPdjGklxhzq16MK0nmFx97i7O/Jqfvj1ejdDg8etM7zNOD3tHx0R89Sg8Oe+mbt4dvKaP0hOgdnJMU7wch3cKSdiu2vYnOTO5DvzBrVjT6lvMQ5Evvo6WKe2eh7+6lIebj2eTsYvppeoqtD5MZLazFO1FdlyoL4x/cOD/LPSFNesOZYIS19csSaBBvka01NjE5P519iG3U2c7YObp+xtxbq/v79/RMzmbnf08Wkw9dZbsPwWnfTsZbXFPZ8CP4OMTHEBEfw3iYqw35AolYwpJfblFT5V1rksK767t3y98aZTnHWGzD0W/H1rZXEVYshfFkrI0LbfcxYhzs46YLVOjSN7bEGAuR2sWDwVZYk5a272itNlqy0jR5PzPVYJLMBlSrwfoYI1yTVZTueta5/Mrv3bmXvhU1pWD8cwZtgOw4a6ySzdzX1cVKyanMK9S9Kj023FXv/wcbP/E06NVz1sEoMEHplQmWSroV72qEiRa2tVWOYZqzFiUbSHzhQaEveMWWdca4V8QTU5ac+ROorVmrnF3Q8JyFVBlEPEh6U/sRcA7doBysjA1fnkfxajJNXvuus3Vd5uP+sB8o4oddUWDgbo/2q+oD4Ns7Mv/vL6Ld1IW/y6AuSWnflbDT2x0FLvdcT1cRFp4m8SVutyk5/mzLtvXH3xq2G4wvr+6WPNAkV86/5xivqHT8REdfXexo+xp+h293SHoTuBS0xWvHLW9+sL+9an/chSF/92mcZVzLPadfpPiBFJyfzf3d9x8hyu/i",sidebar_class_name:"post api-method",info_path:"eic/2.0/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},k=void 0,z={id:"eic/2.0/check-import-status",title:"Check Import Status",description:"This API is used to check the status of data import job.",source:"@site/docs/eic/2.0/check-import-status.api.mdx",sourceDirName:"eic/2.0",slug:"/eic/2.0/check-import-status",permalink:"/developer-portal/eic/2.0/check-import-status",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"check-import-status",title:"Check Import Status",description:"This API is used to check the status of data import job.",sidebar_label:"Check Import Status",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVdtu2zgQ/ZXBPLWAfImTtFkVffCqbmHsOgliFyiQBvBIGkdMJFIlR956Df37gpTbXOomeV3AgGRqLmcu53CLQtcO40tMTFUZDZ9FlUoUO7yKMGeXWVWLMhpjXBTKwfh8CspB4zgHMZAVnN2CFAxOSBoHZgU5CYGqamMFbkzah6/6qz41wjFIQQL+B6IqjsDocgNG8z1zyEhDymAb3feOi4JhOW6kMFb9Sx7KEqrGCRS0Zlj+yWTZLmFlytL8wzmkG1guzC3rZZcWarJUOYzQ1GxDgGmOMQbk05B2HqBjhJZdbbRjh/EWR8OhfzzsQRLq7dzgp1/BlLMNXh9I2D9dVnBF/k02NWOMTqzS1xghf6eqLjk0tIlgOIJxcw2j4cEJjIbx0Ul8OIJPswW2bYRztmu2L403rikruJeYjREeHPQPdjGklxhzq16MK0nmFx97i7O/Jqfvj1ejdDg8etM7zNOD3tHx0R89Sg8Oe+mbt4dvKaP0hOgdnJMU7wch3cKSdiu2vYnOTO5DvzBrVjT6lvMQ5Evvo6WKe2eh7+6lIebj2eTsYvppeoqtD5MZLazFO1FdlyoL4x/cOD/LPSFNesOZYIS19csSaBBvka01NjE5P519iG3U2c7YObp+xtxbq/v79/RMzmbnf08Wkw9dZbsPwWnfTsZbXFPZ8CP4OMTHEBEfw3iYqw35AolYwpJfblFT5V1rksK767t3y98aZTnHWGzD0W/H1rZXEVYshfFkrI0LbfcxYhzs46YLVOjSN7bEGAuR2sWDwVZYk5a272itNlqy0jR5PzPVYJLMBlSrwfoYI1yTVZTueta5/Mrv3bmXvhU1pWD8cwZtgOw4a6ySzdzX1cVKyanMK9S9Kj023FXv/wcbP/E06NVz1sEoMEHplQmWSroV72qEiRa2tVWOYZqzFiUbSHzhQaEveMWWdca4V8QTU5ac+ROorVmrnF3Q8JyFVBlEPEh6U/sRcA7doBysjA1fnkfxajJNXvuus3Vd5uP+sB8o4oddUWDgbo/2q+oD4Ns7Mv/vL6Ld1IW/y6AuSWnflbDT2x0FLvdcT1cRFp4m8SVutyk5/mzLtvXH3xq2G4wvr+6WPNAkV86/5xivqHT8REdfXexo+xp+h293SHoTuBS0xWvHLW9+sL+9an/chSF/92mcZVzLPadfpPiBFJyfzf3d9x8hyu/i",sidebar_class_name:"post api-method",info_path:"eic/2.0/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},sidebar:"eic-1.0.0",previous:{title:"Import Application Data",permalink:"/developer-portal/eic/2.0/import-application-data"},next:{title:"Force Complete",permalink:"/developer-portal/eic/2.0/force-complete"}},O={},S=[];function M(e){const s={code:"code",p:"p",...(0,i.R)(),...e.components},{Details:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b.default,{as:"h1",className:"openapi__heading",children:"Check Import Status"}),"\n",(0,a.jsx)(c(),{method:"post",path:"/checkImportStatus"}),"\n",(0,a.jsx)(s.p,{children:"This API is used to check the status of data import job."}),"\n",(0,a.jsx)(s.p,{children:"Note: that at a time, only one import job can be run."}),"\n",(0,a.jsxs)(s.p,{children:["The ",(0,a.jsx)(s.code,{children:"Authorization"})," must have ",(0,a.jsx)(s.code,{children:"Bearer"})," followed by ",(0,a.jsx)(s.code,{children:"Token"})]}),"\n",(0,a.jsx)(s.p,{children:"No params"}),"\n",(0,a.jsx)(b.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsxs)(t,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,a.jsx)(s.p,{children:"Path Parameters"})})}),(0,a.jsx)("div",{children:(0,a.jsx)("ul",{children:(0,a.jsx)(h(),{className:"paramsItem",param:{name:"path",in:"path",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsx)(l(),{label:void 0,id:void 0,children:(0,a.jsxs)(v.default,{label:"200",value:"200",children:[(0,a.jsx)("div",{children:(0,a.jsx)(s.p,{children:"Check Import Status"})}),(0,a.jsxs)(t,{style:{textAlign:"left",marginBottom:"1rem"},className:"openapi-markdown__details","data-collaposed":!0,open:!1,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("strong",{children:(0,a.jsx)(s.p,{children:"Response Headers"})})}),(0,a.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,a.jsxs)("li",{className:"schemaItem",children:[(0,a.jsxs)("summary",{style:{},children:[(0,a.jsx)("strong",{children:(0,a.jsx)(s.p,{children:"Date"})}),(0,a.jsx)("span",{style:{opacity:"0.6"},children:(0,a.jsx)(s.p,{children:"string"})})]}),(0,a.jsx)("div",{})]}),(0,a.jsxs)("li",{className:"schemaItem",children:[(0,a.jsxs)("summary",{style:{},children:[(0,a.jsx)("strong",{children:(0,a.jsx)(s.p,{children:"Server"})}),(0,a.jsx)("span",{style:{opacity:"0.6"},children:(0,a.jsx)(s.p,{children:"string"})})]}),(0,a.jsx)("div",{})]}),(0,a.jsxs)("li",{className:"schemaItem",children:[(0,a.jsxs)("summary",{style:{},children:[(0,a.jsx)("strong",{children:(0,a.jsx)(s.p,{children:"Set-Cookie"})}),(0,a.jsx)("span",{style:{opacity:"0.6"},children:(0,a.jsx)(s.p,{children:"string"})})]}),(0,a.jsx)("div",{})]}),(0,a.jsxs)("li",{className:"schemaItem",children:[(0,a.jsxs)("summary",{style:{},children:[(0,a.jsx)("strong",{children:(0,a.jsx)(s.p,{children:"Transfer-Encoding"})}),(0,a.jsx)("span",{style:{opacity:"0.6"},children:(0,a.jsx)(s.p,{children:"string"})})]}),(0,a.jsx)("div",{})]}),(0,a.jsxs)("li",{className:"schemaItem",children:[(0,a.jsxs)("summary",{style:{},children:[(0,a.jsx)("strong",{children:(0,a.jsx)(s.p,{children:"X-Frame-Options"})}),(0,a.jsx)("span",{style:{opacity:"0.6"},children:(0,a.jsx)(s.p,{children:"string"})})]}),(0,a.jsx)("div",{})]})]})]}),(0,a.jsx)("div",{children:(0,a.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,a.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,a.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,a.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,a.jsxs)(t,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,a.jsx)("strong",{children:(0,a.jsx)(s.p,{children:"Schema"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,a.jsx)(u(),{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"0"}}),(0,a.jsx)(u(),{collapsible:!1,name:"errorMessage",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:""}}),(0,a.jsx)(u(),{collapsible:!1,name:"importStatus",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"COMPLETED"}})]})]})}),(0,a.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,a.jsx)(x(),{responseExample:'{\n  "errorCode": "0",\n  "errorMessage": "",\n  "importStatus": "COMPLETED"\n}',language:"json"})}),(0,a.jsx)(v.default,{label:"Check Import Status",value:"Check Import Status",children:(0,a.jsx)(x(),{responseExample:'{\n  "errorCode": "0",\n  "errorMessage": "",\n  "importStatus": "COMPLETED"\n}',language:"json"})})]})})})})]})})})})]})}function F(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(M,{...e})}):M(e)}}}]);