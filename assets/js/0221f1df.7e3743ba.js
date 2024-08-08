"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[88217],{41501:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>y,frontMatter:()=>p,metadata:()=>m,toc:()=>k});var s=a(87462),r=(a(67294),a(3905)),n=a(26389),i=a(94891),o=a(75190),d=a(47507),l=(a(24310),a(63303)),c=(a(75035),a(85162));const p={id:"create-asset",title:"Creates a new asset together with a data address",description:"Creates a new asset together with a data address",sidebar_label:"Creates a new asset together with a data address",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Asset V2"],operationId:"createAsset",parameters:[{name:"connectorUrl",in:"header",required:!1,schema:{type:"string",default:""}}],requestBody:{content:{"application/json":{schema:{type:"object"}}},required:!0},responses:{200:{description:"Asset was created successfully. Returns the asset Id and created timestamp",content:{"application/json":{schema:{type:"object"}}}},400:{description:"Request body was malformed"},409:{description:"Could not create asset, because an asset with that ID already exists"}},description:"Creates a new asset together with a data address",method:"post",path:"/v2/assets",servers:[{url:"https://dgk.cx.dev.dih-cloud.com",description:"Generated server url"}],jsonRequestBodyExample:{},info:{title:"data-governance-kit",description:"REST API Contract for Data Governance KIT",version:"0.0.1-SNAPSHOT"},postman:{name:"Creates a new asset together with a data address",description:{type:"text/plain"},url:{path:["v2","assets"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"",type:"text/plain"},key:"connectorUrl",value:""},{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Data Governance Kit/resources/data-governance-kit",custom_edit_url:null},u=void 0,m={unversionedId:"kits/Data Governance Kit/resources/MDX Files/create-asset",id:"version-24.05/kits/Data Governance Kit/resources/MDX Files/create-asset",title:"Creates a new asset together with a data address",description:"Creates a new asset together with a data address",source:"@site/docs-kits_versioned_docs/version-24.05/kits/Data Governance Kit/resources/MDX Files/create-asset.api.mdx",sourceDirName:"kits/Data Governance Kit/resources/MDX Files",slug:"/kits/Data Governance Kit/resources/MDX Files/create-asset",permalink:"/docs-kits/24.05/kits/Data Governance Kit/resources/MDX Files/create-asset",draft:!1,editUrl:null,tags:[],version:"24.05",frontMatter:{id:"create-asset",title:"Creates a new asset together with a data address",description:"Creates a new asset together with a data address",sidebar_label:"Creates a new asset together with a data address",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Asset V2"],operationId:"createAsset",parameters:[{name:"connectorUrl",in:"header",required:!1,schema:{type:"string",default:""}}],requestBody:{content:{"application/json":{schema:{type:"object"}}},required:!0},responses:{200:{description:"Asset was created successfully. Returns the asset Id and created timestamp",content:{"application/json":{schema:{type:"object"}}}},400:{description:"Request body was malformed"},409:{description:"Could not create asset, because an asset with that ID already exists"}},description:"Creates a new asset together with a data address",method:"post",path:"/v2/assets",servers:[{url:"https://dgk.cx.dev.dih-cloud.com",description:"Generated server url"}],jsonRequestBodyExample:{},info:{title:"data-governance-kit",description:"REST API Contract for Data Governance KIT",version:"0.0.1-SNAPSHOT"},postman:{name:"Creates a new asset together with a data address",description:{type:"text/plain"},url:{path:["v2","assets"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{disabled:!1,description:{content:"",type:"text/plain"},key:"connectorUrl",value:""},{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Data Governance Kit/resources/data-governance-kit",custom_edit_url:null},sidebar:"kits",previous:{title:"Creates a new asset revision",permalink:"/docs-kits/24.05/kits/Data Governance Kit/resources/MDX Files/create-asset-1"},next:{title:"Creates a new contract definition revision",permalink:"/docs-kits/24.05/kits/Data Governance Kit/resources/MDX Files/create-contract-definition"}},h={},k=[{value:"Creates a new asset together with a data address",id:"creates-a-new-asset-together-with-a-data-address",level:2}],v={toc:k};function y(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,s.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"creates-a-new-asset-together-with-a-data-address"},"Creates a new asset together with a data address"),(0,r.kt)("p",null,"Creates a new asset together with a data address"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Header Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"connectorUrl",in:"header",required:!1,schema:{type:"string",default:""}},mdxType:"ParamsItem"})))),(0,r.kt)(i.Z,{mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",null,(0,r.kt)("strong",null,"object"))))))),(0,r.kt)("div",null,(0,r.kt)(n.Z,{mdxType:"ApiTabs"},(0,r.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Asset was created successfully. Returns the asset Id and created timestamp")),(0,r.kt)("div",null,(0,r.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",null,(0,r.kt)("strong",null,"object")))))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(d.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Request body was malformed")),(0,r.kt)("div",null)),(0,r.kt)(c.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Could not create asset, because an asset with that ID already exists")),(0,r.kt)("div",null)))))}y.isMDXComponent=!0}}]);