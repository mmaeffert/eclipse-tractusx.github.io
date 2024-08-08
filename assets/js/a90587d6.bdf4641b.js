"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[27506],{84216:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>b,frontMatter:()=>m,metadata:()=>h,toc:()=>g});var a=i(87462),s=(i(67294),i(3905)),n=i(26389),r=i(94891),o=i(75190),l=i(47507),d=i(24310),p=i(63303),c=(i(75035),i(85162));const m={id:"get-sites-1",title:"Returns all sites of a legal entity with a specific BPNL",description:"Get business partners of type site belonging to a business partner of type legal entity, identified by the business partner's bpnl ignoring case.",sidebar_label:"Returns all sites of a legal entity with a specific BPNL",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Legal Entity Controller"],description:"Get business partners of type site belonging to a business partner of type legal entity, identified by the business partner's bpnl ignoring case.",operationId:"getSites_1",parameters:[{name:"bpnl",in:"path",description:"BPNL value",required:!0,schema:{type:"string"}},{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}}],responses:{200:{description:"The sites for the specified bpnl",content:{"application/json":{schema:{required:["content","contentSize","page","totalElements","totalPages"],type:"object",properties:{totalElements:{type:"integer",description:"Total number of all results in all pages",format:"int64"},totalPages:{type:"integer",description:"Total number pages",format:"int32"},page:{type:"integer",description:"Current page number",format:"int32"},contentSize:{type:"integer",description:"Number of results in the page",format:"int32"},content:{type:"array",description:"Collection of results in the page",items:{required:["bpnLegalEntity","bpns","confidenceCriteria","createdAt","isCatenaXMemberData","name","states","updatedAt"],type:"object",properties:{bpns:{type:"string",description:"A BPNS represents and uniquely identifies a site, which is where for example a production plant, a warehouse, or an office building is located."},name:{type:"string",description:"The name of the site. This is not according to official registers but according to the name the owner chooses."},states:{type:"array",description:"The list of the (temporary) states of the site.",items:{required:["type"],type:"object",properties:{validFrom:{type:"string",description:"The date from which the state is valid.",format:"date-time"},validTo:{type:"string",description:"The date until the state is valid.",format:"date-time"},type:{required:["name","technicalKey"],type:"object",properties:{technicalKey:{type:"string",description:"Unique key of this type for reference",enum:["ACTIVE","INACTIVE"]},name:{type:"string",description:"Name or denotation of this type"}},description:"Named type uniquely identified by its technical key"}},description:"A site state indicates if the site is active or inactive. This does not describe the relation between a sharing member and a business partner and whether they have active business, but it describes whether the site is still operating."}},isCatenaXMemberData:{type:"boolean",description:"Indicates whether the site is owned and thus provided by a Catena-X Member."},bpnLegalEntity:{type:"string",description:"The BPNL of the legal entity owning the site."},createdAt:{type:"string",description:"The date when the data record has been created.",format:"date-time"},updatedAt:{type:"string",description:"The date when the data record has been last updated.",format:"date-time"},confidenceCriteria:{required:["checkedByExternalDataSource","confidenceLevel","lastConfidenceCheckAt","nextConfidenceCheckAt","numberOfSharingMembers","sharedByOwner"],type:"object",properties:{sharedByOwner:{type:"boolean"},checkedByExternalDataSource:{type:"boolean"},numberOfSharingMembers:{type:"integer",format:"int32"},lastConfidenceCheckAt:{type:"string",format:"date-time"},nextConfidenceCheckAt:{type:"string",format:"date-time"},confidenceLevel:{type:"integer",format:"int32"}}}},description:"In general, a site is a delimited geographical area in which an organization (such as an enterprise or company, university, association, etc.) conducts business. In Catena-X, a site is a type of business partner representing a physical location or area owned by a legal entity, where a production plant, a warehouse, or an office building is located. A site is owned by a legal entity. Thus, exactly one legal entity is assigned to a site. A site has exactly one main address, but it is possible to specify additional addresses (such as different gates), that belong to a site. Thus, at least one address is assigned to a site. A site can only be uploaded and modified by the owner (the legal entity), because only the owner knows which addresses belong to which site. A site is uniquely identified by the BPNS."}}},description:"Paginated collection of results"}}}},400:{description:"On malformed pagination request"},404:{description:"No business partner found for specified bpnl"}},method:"get",path:"/v6/legal-entities/{bpnl}/sites",servers:[{url:"http://localhost:8080",description:"Generated server url"}],info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"6.0.0"},postman:{name:"Returns all sites of a legal entity with a specific BPNL",description:{content:"Get business partners of type site belonging to a business partner of type legal entity, identified by the business partner's bpnl ignoring case.",type:"text/plain"},url:{path:["v6","legal-entities",":bpnl","sites"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Number of page to get results from",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"Size of each page",type:"text/plain"},key:"size",value:""}],variable:[{disabled:!1,description:{content:"(Required) BPNL value",type:"text/plain"},type:"any",value:"",key:"bpnl"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-data-management-pool",custom_edit_url:null},u=void 0,h={unversionedId:"kits/Business Partner Kit/Software Development View/Pool Api/get-sites-1",id:"version-24.05/kits/Business Partner Kit/Software Development View/Pool Api/get-sites-1",title:"Returns all sites of a legal entity with a specific BPNL",description:"Get business partners of type site belonging to a business partner of type legal entity, identified by the business partner's bpnl ignoring case.",source:"@site/docs-kits_versioned_docs/version-24.05/kits/Business Partner Kit/Software Development View/Pool Api/get-sites-1.api.mdx",sourceDirName:"kits/Business Partner Kit/Software Development View/Pool Api",slug:"/kits/Business Partner Kit/Software Development View/Pool Api/get-sites-1",permalink:"/docs-kits/24.05/kits/Business Partner Kit/Software Development View/Pool Api/get-sites-1",draft:!1,editUrl:null,tags:[],version:"24.05",frontMatter:{id:"get-sites-1",title:"Returns all sites of a legal entity with a specific BPNL",description:"Get business partners of type site belonging to a business partner of type legal entity, identified by the business partner's bpnl ignoring case.",sidebar_label:"Returns all sites of a legal entity with a specific BPNL",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Legal Entity Controller"],description:"Get business partners of type site belonging to a business partner of type legal entity, identified by the business partner's bpnl ignoring case.",operationId:"getSites_1",parameters:[{name:"bpnl",in:"path",description:"BPNL value",required:!0,schema:{type:"string"}},{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}}],responses:{200:{description:"The sites for the specified bpnl",content:{"application/json":{schema:{required:["content","contentSize","page","totalElements","totalPages"],type:"object",properties:{totalElements:{type:"integer",description:"Total number of all results in all pages",format:"int64"},totalPages:{type:"integer",description:"Total number pages",format:"int32"},page:{type:"integer",description:"Current page number",format:"int32"},contentSize:{type:"integer",description:"Number of results in the page",format:"int32"},content:{type:"array",description:"Collection of results in the page",items:{required:["bpnLegalEntity","bpns","confidenceCriteria","createdAt","isCatenaXMemberData","name","states","updatedAt"],type:"object",properties:{bpns:{type:"string",description:"A BPNS represents and uniquely identifies a site, which is where for example a production plant, a warehouse, or an office building is located."},name:{type:"string",description:"The name of the site. This is not according to official registers but according to the name the owner chooses."},states:{type:"array",description:"The list of the (temporary) states of the site.",items:{required:["type"],type:"object",properties:{validFrom:{type:"string",description:"The date from which the state is valid.",format:"date-time"},validTo:{type:"string",description:"The date until the state is valid.",format:"date-time"},type:{required:["name","technicalKey"],type:"object",properties:{technicalKey:{type:"string",description:"Unique key of this type for reference",enum:["ACTIVE","INACTIVE"]},name:{type:"string",description:"Name or denotation of this type"}},description:"Named type uniquely identified by its technical key"}},description:"A site state indicates if the site is active or inactive. This does not describe the relation between a sharing member and a business partner and whether they have active business, but it describes whether the site is still operating."}},isCatenaXMemberData:{type:"boolean",description:"Indicates whether the site is owned and thus provided by a Catena-X Member."},bpnLegalEntity:{type:"string",description:"The BPNL of the legal entity owning the site."},createdAt:{type:"string",description:"The date when the data record has been created.",format:"date-time"},updatedAt:{type:"string",description:"The date when the data record has been last updated.",format:"date-time"},confidenceCriteria:{required:["checkedByExternalDataSource","confidenceLevel","lastConfidenceCheckAt","nextConfidenceCheckAt","numberOfSharingMembers","sharedByOwner"],type:"object",properties:{sharedByOwner:{type:"boolean"},checkedByExternalDataSource:{type:"boolean"},numberOfSharingMembers:{type:"integer",format:"int32"},lastConfidenceCheckAt:{type:"string",format:"date-time"},nextConfidenceCheckAt:{type:"string",format:"date-time"},confidenceLevel:{type:"integer",format:"int32"}}}},description:"In general, a site is a delimited geographical area in which an organization (such as an enterprise or company, university, association, etc.) conducts business. In Catena-X, a site is a type of business partner representing a physical location or area owned by a legal entity, where a production plant, a warehouse, or an office building is located. A site is owned by a legal entity. Thus, exactly one legal entity is assigned to a site. A site has exactly one main address, but it is possible to specify additional addresses (such as different gates), that belong to a site. Thus, at least one address is assigned to a site. A site can only be uploaded and modified by the owner (the legal entity), because only the owner knows which addresses belong to which site. A site is uniquely identified by the BPNS."}}},description:"Paginated collection of results"}}}},400:{description:"On malformed pagination request"},404:{description:"No business partner found for specified bpnl"}},method:"get",path:"/v6/legal-entities/{bpnl}/sites",servers:[{url:"http://localhost:8080",description:"Generated server url"}],info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"6.0.0"},postman:{name:"Returns all sites of a legal entity with a specific BPNL",description:{content:"Get business partners of type site belonging to a business partner of type legal entity, identified by the business partner's bpnl ignoring case.",type:"text/plain"},url:{path:["v6","legal-entities",":bpnl","sites"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Number of page to get results from",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"Size of each page",type:"text/plain"},key:"size",value:""}],variable:[{disabled:!1,description:{content:"(Required) BPNL value",type:"text/plain"},type:"any",value:"",key:"bpnl"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-data-management-pool",custom_edit_url:null},sidebar:"kits",previous:{title:"Returns a legal entity by identifier, like BPN, DUNS or EU VAT ID, specified by the identifier type",permalink:"/docs-kits/24.05/kits/Business Partner Kit/Software Development View/Pool Api/get-legal-entity"},next:{title:"Returns all addresses of a legal entity with a specific BPNL",permalink:"/docs-kits/24.05/kits/Business Partner Kit/Software Development View/Pool Api/get-addresses"}},y={},g=[{value:"Returns all sites of a legal entity with a specific BPNL",id:"returns-all-sites-of-a-legal-entity-with-a-specific-bpnl",level:2}],f={toc:g};function b(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"returns-all-sites-of-a-legal-entity-with-a-specific-bpnl"},"Returns all sites of a legal entity with a specific BPNL"),(0,s.kt)("p",null,"Get business partners of type site belonging to a business partner of type legal entity, identified by the business partner's bpnl ignoring case."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"bpnl",in:"path",description:"BPNL value",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},mdxType:"ParamsItem"}),(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The sites for the specified bpnl")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"totalElements",required:!1,deprecated:void 0,schemaDescription:"Total number of all results in all pages",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"totalPages",required:!1,deprecated:void 0,schemaDescription:"Total number pages",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"page",required:!1,deprecated:void 0,schemaDescription:"Current page number",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"contentSize",required:!1,deprecated:void 0,schemaDescription:"Number of results in the page",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"content"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Collection of results in the page")),(0,s.kt)(d.Z,{collapsible:!1,name:"bpns",required:!1,deprecated:void 0,schemaDescription:"A BPNS represents and uniquely identifies a site, which is where for example a production plant, a warehouse, or an office building is located.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:"The name of the site. This is not according to official registers but according to the name the owner chooses.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"states"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"The list of the (temporary) states of the site.")),(0,s.kt)(d.Z,{collapsible:!1,name:"validFrom",required:!1,deprecated:void 0,schemaDescription:"The date from which the state is valid.",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"validTo",required:!1,deprecated:void 0,schemaDescription:"The date until the state is valid.",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"type"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Named type uniquely identified by its technical key")),(0,s.kt)(d.Z,{collapsible:!1,name:"technicalKey",required:!1,deprecated:void 0,schemaDescription:"Unique key of this type for reference",schemaName:"string",qualifierMessage:"**Possible values:** [`ACTIVE`, `INACTIVE`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:"Name or denotation of this type",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(d.Z,{collapsible:!1,name:"isCatenaXMemberData",required:!1,deprecated:void 0,schemaDescription:"Indicates whether the site is owned and thus provided by a Catena-X Member.",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"bpnLegalEntity",required:!1,deprecated:void 0,schemaDescription:"The BPNL of the legal entity owning the site.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"createdAt",required:!1,deprecated:void 0,schemaDescription:"The date when the data record has been created.",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"updatedAt",required:!1,deprecated:void 0,schemaDescription:"The date when the data record has been last updated.",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"confidenceCriteria"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"sharedByOwner",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"checkedByExternalDataSource",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"numberOfSharingMembers",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"lastConfidenceCheckAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"nextConfidenceCheckAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"confidenceLevel",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "totalElements": 0,\n  "totalPages": 0,\n  "page": 0,\n  "contentSize": 0,\n  "content": [\n    {\n      "bpns": "string",\n      "name": "string",\n      "states": [\n        {\n          "validFrom": "2024-05-15",\n          "validTo": "2024-05-15",\n          "type": {\n            "technicalKey": "ACTIVE",\n            "name": "string"\n          }\n        }\n      ],\n      "isCatenaXMemberData": true,\n      "bpnLegalEntity": "string",\n      "createdAt": "2024-05-15",\n      "updatedAt": "2024-05-15",\n      "confidenceCriteria": {\n        "sharedByOwner": true,\n        "checkedByExternalDataSource": true,\n        "numberOfSharingMembers": 0,\n        "lastConfidenceCheckAt": "2024-05-15",\n        "nextConfidenceCheckAt": "2024-05-15",\n        "confidenceLevel": 0\n      }\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"On malformed pagination request")),(0,s.kt)("div",null)),(0,s.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"No business partner found for specified bpnl")),(0,s.kt)("div",null)))))}b.isMDXComponent=!0}}]);