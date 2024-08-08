"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[2496],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,d=p["".concat(u,".").concat(m)]||p[m]||f[m]||a;return n?r.createElement(d,o(o({ref:t},l),{},{components:n})):r.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57791:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={id:"Request for Quotation API Description Manufacturing as a Service Kit",title:"API Description",description:"Manufacturing as a Service Kit",sidebar_position:4},o=void 0,s={unversionedId:"kits/Manufacturing as a Service Kit/Software Development View/Request for Quotation/Request for Quotation API Description Manufacturing as a Service Kit",id:"version-24.08/kits/Manufacturing as a Service Kit/Software Development View/Request for Quotation/Request for Quotation API Description Manufacturing as a Service Kit",title:"API Description",description:"Manufacturing as a Service Kit",source:"@site/docs-kits_versioned_docs/version-24.08/kits/Manufacturing as a Service Kit/Software Development View/Request for Quotation/page_software-development-view.md",sourceDirName:"kits/Manufacturing as a Service Kit/Software Development View/Request for Quotation",slug:"/kits/Manufacturing as a Service Kit/Software Development View/Request for Quotation/Request for Quotation API Description Manufacturing as a Service Kit",permalink:"/docs-kits/kits/Manufacturing as a Service Kit/Software Development View/Request for Quotation/Request for Quotation API Description Manufacturing as a Service Kit",draft:!1,tags:[],version:"24.08",sidebarPosition:4,frontMatter:{id:"Request for Quotation API Description Manufacturing as a Service Kit",title:"API Description",description:"Manufacturing as a Service Kit",sidebar_position:4},sidebar:"kits",previous:{title:"Introduction",permalink:"/docs-kits/kits/Manufacturing as a Service Kit/Software Development View/Request for Quotation/request-for-quotation"},next:{title:"postRequestForQuotation",permalink:"/docs-kits/kits/Manufacturing as a Service Kit/Software Development View/Request for Quotation/post-request-for-quotation"}},u={},c=[{value:"Sample Data",id:"sample-data",level:2}],l={toc:c};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Request for Quotation API description below shows how the Request for Quotation Aspect Model could be used. A Request for Quotation defines detailed requirements, deadlines and evaluation criteria for obtaining quotations from potential manufacturers for specific products or services."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Reference Architecture Request for Quotation",src:n(89393).Z,width:"1241",height:"749"})),(0,i.kt)("p",null,"Depending on the use case different request paths can be implemented, based on the specific MaaS implementations. Below is a sample request option:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"POST:/{api-endpoint}/request-for-quotation",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Description: The API endpoint to send a request for quotation to a manufacturer.")))),(0,i.kt)("h2",{id:"sample-data"},"Sample Data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "rfqConfiguration" : {\n    "firstDeliveryDate" : "2023-10-24",\n    "additionalFiles" : {\n      "fileName" : "fraesteil",\n      "fileObject" : { },\n      "fileType" : "STEP, stl, jt",\n      "filePath" : "https://anypath/..."\n    },\n    "cadFile" : {\n      "fileName" : "fraesteil",\n      "fileObject" : { },\n      "fileType" : "STEP, stl, jt",\n      "filePath" : "https://anypath/..."\n    },\n    "additionalComments" : "this is a prototype, recommendations towards design for manufacturing are highly welcome",\n    "parts" : {\n      "generalTolerance" : "ISO 2768-1 (m), Rough DIN ISO 2768 cL, Medium DIN ISO 2768 mK, Fine DIN ISO 2768 fH",\n      "manufacturingDomain" : "additive manufacturing",\n      "material" : {\n        "materialFamily" : "aluminum, steel, ...",\n        "materialProperties" : {\n          "value" : "2.7 or black",\n          "propertyName" : "density or color",\n          "valueType" : "g/cm3 or string"\n        }\n      },\n      "partId" : "Drehteil",\n      "additionalRequirements" : "premium quality check, standard quality check",\n      "partQuantity" : {\n        "quantityNumber" : 2.5,\n        "measurementUnit" : "unit:litre"\n      },\n      "billOfProcess" : {\n        "process" : [ {\n          "capabilityId" : "urn:manufacturing-capability:capability:42",\n          "childProcessSteps" : [ "pick" ],\n          "precedenceRelation" : [ {\n            "precedenceElements" : [ {\n              "successor" : [ "TransportStepId" ]\n            } ]\n          } ],\n          "processStepIdentifier" : [ "1234-transport" ],\n          "inputParameters" : [ {\n            "name" : "dimensionality",\n            "parameterKey" : "HasValue",\n            "valueRangeList" : [ {\n              "name" : "dimensionality",\n              "lowerValue" : "5",\n              "upperValue" : "10"\n            } ],\n            "semanticReference" : [ "0173-1#02-BAD875#008" ],\n            "tolerances" : [ {\n              "name" : "dimensionality",\n              "upperLimit" : "5.1",\n              "lowerLimit" : "4.9"\n            } ],\n            "value" : "{\\\\\\"height\\\\\\" : \\\\\\"5\\\\\\", \\\\\\"length\\\\\\" : \\\\\\"3\\\\\\", \\\\\\"width\\\\\\" : \\\\\\"7\\\\\\"}"\n          } ],\n          "processStepType" : "IsFirstElement",\n          "outputParameters" : [ {\n            "name" : "dimensionality",\n            "parameterKey" : "HasValue",\n            "valueRangeList" : [ {\n              "name" : "dimensionality",\n              "lowerValue" : "5",\n              "upperValue" : "10"\n            } ],\n            "semanticReference" : [ "0173-1#02-BAD875#008" ],\n            "tolerances" : [ {\n              "name" : "dimensionality",\n              "upperLimit" : "5.1",\n              "lowerLimit" : "4.9"\n            } ],\n            "value" : "{\\\\\\"height\\\\\\" : \\\\\\"5\\\\\\", \\\\\\"length\\\\\\" : \\\\\\"3\\\\\\", \\\\\\"width\\\\\\" : \\\\\\"7\\\\\\"}"\n          } ]\n        } ],\n        "productVersion" : "bar_chair_1.0.0",\n        "billOfProcessIdentification" : "www.1234-bar-chair-billOfProcess.de",\n        "version" : "2.0.0",\n        "productName" : "Bar Chair"\n      },\n      "partName" : "Drehteil"\n    },\n    "orderQuantity" : {\n      "quantityNumber" : 2.5,\n      "measurementUnit" : "unit:litre"\n    },\n    "lastDeliveryDate" : "2023-12-24"\n  },\n  "rfqIdentification" : {\n    "rfqVersion" : "1.0.0",\n    "rfqName" : "Drehteil",\n    "rfqDateTime" : "2023-10-24T14:48:54.709Z",\n    "rfqSource" : "https://maasportal.mendixcloud.com/",\n    "rfqId" : "Drehteil_02_0815"\n  },\n  "cxHeader" : {\n    "senderBpn" : "BPNL7588787849VQ",\n    "relatedMessageId" : "d9452f24-3bf3-4134-b3eb-68858f1b2362",\n    "expectedResponseBy" : "2023-06-19T21:24:00+07:00",\n    "context" : "urn:samm:io.catenax.<ASPECT-MODEL-NAME>:1.x.x",\n    "messageId" : "3b4edc05-e214-47a1-b0c2-1d831cdd9ba9",\n    "receiverBpn" : "BPNL6666787765VQ",\n    "sentDateTime" : "2023-06-19T21:24:00+07:00",\n    "version" : "2.0.0"\n  },\n  "rfqSender" : {\n    "deliveryRequirements" : "no plastic for packaging",\n    "senderName" : "John Doe",\n    "senderPhoneNumber" : "555 123456",\n    "senderEMail" : "johndoe@sunny.com",\n    "senderDeliveryAddress" : "Mystreet 1, 1234 Mystate",\n    "senderAdress" : "Sunstreet 1, 5555 Sunstate",\n    "senderAccountAddress" : "Accountstreet 1, 1234 Accountstate",\n    "senderCompanyName" : "ManufactureEnterprise"\n  }\n}\n')))}p.isMDXComponent=!0},89393:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/RefArcRfQ-aa86bf24e81e24ebfa8235b7035e3a0c.JPG"}}]);