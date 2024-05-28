"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[71285],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),h=r,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},34143:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={id:"Specification",title:"Specification",description:"PCF-Exchange-KIT",sidebar_position:3},o=void 0,l={unversionedId:"kits/PCF Exchange Kit/Software Development View/Specification",id:"kits/PCF Exchange Kit/Software Development View/Specification",title:"Specification",description:"PCF-Exchange-KIT",source:"@site/docs-kits/kits/PCF Exchange Kit/Software Development View/page_software-development-view.md",sourceDirName:"kits/PCF Exchange Kit/Software Development View",slug:"/kits/PCF Exchange Kit/Software Development View/Specification",permalink:"/docs-kits/next/kits/PCF Exchange Kit/Software Development View/Specification",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"Specification",title:"Specification",description:"PCF-Exchange-KIT",sidebar_position:3},sidebar:"kits",previous:{title:"Development View",permalink:"/docs-kits/next/category/development-view-2"},next:{title:"PCF Exchange API",permalink:"/docs-kits/next/category/pcf-exchange-api"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Building Block View",id:"building-block-view",level:2},{value:"Sequence View",id:"sequence-view",level:2},{value:"EDC Discovery and dDTR Access",id:"edc-discovery-and-ddtr-access",level:3},{value:"PCF Request",id:"pcf-request",level:3},{value:"PCF Update",id:"pcf-update",level:3},{value:"API Calls",id:"api-calls",level:4},{value:"Payload for Requesting PCF Sub Model",id:"payload-for-requesting-pcf-sub-model",level:5},{value:"Payloads for EDC Asset",id:"payloads-for-edc-asset",level:4},{value:"Payload for EDC Data Asset PCF",id:"payload-for-edc-data-asset-pcf",level:5},{value:"Payload for EDC Policy",id:"payload-for-edc-policy",level:4},{value:"Payload to create a SSI based Policy",id:"payload-to-create-a-ssi-based-policy",level:5},{value:"Payload Contract Definition",id:"payload-contract-definition",level:4},{value:"Error Handling",id:"error-handling",level:2},{value:"Standards",id:"standards",level:2},{value:"Used CX Standards",id:"used-cx-standards",level:3},{value:"Other Standards",id:"other-standards",level:2},{value:"NOTICE",id:"notice",level:2}],c={toc:d};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PCF Exchange kit banner",src:a(32037).Z,width:"285",height:"244"})),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The developer view provides a detailed guide on how to utilize the PCF exchange KIT effectively. Developer will learn how to integrate the kit into there applications and make use of the feature of exchanging PCF values via the Catena-X network.\nIT-Administrators will learn how they need to provide PCF data and which components are needed therefore."),(0,r.kt)("p",null,"This Kit covers various aspects, starting from how utilize the available API Endpoints, the used data models and how to make them available to the Catena-X network."),(0,r.kt)("h2",{id:"building-block-view"},"Building Block View"),(0,r.kt)("p",null,"The following figure shows the current high level architecture of the use case PCF exchange. It is build on an asynchronous data exchange."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Building Block View",src:a(45526).Z,width:"3100",height:"2115"})),(0,r.kt)("h2",{id:"sequence-view"},"Sequence View"),(0,r.kt)("p",null,"The following chapter illustrates the process from searching for an EDC point, to querying a PCF value, and finally transmitting the requested value."),(0,r.kt)("h3",{id:"edc-discovery-and-ddtr-access"},"EDC Discovery and dDTR Access"),(0,r.kt)("p",null,"For receiving the EDC Endpoints for a requested partner, the EDC Discovery Service is used, following the ",(0,r.kt)("a",{parentName:"p",href:"%5Btest%5D(https://catena-x.net/de/standard-library)"},"CX-0001")," Standard. For receiving endpoints, at least the BPN-L needs to be known to get the related endpoints. For more details the used Catena-X Standard is linked."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"EDCDiscoveryAndDTRAccess",src:a(94854).Z,width:"1621",height:"1366"})),(0,r.kt)("h3",{id:"pcf-request"},"PCF Request"),(0,r.kt)("p",null,"To actual request PCF values via the PCF API endpoint first of all the EDC PCF asset needs to be identified. Therefore the decentralized Digital Twin Registry (dDTR) is used. Data provider must register their dDTR(s) as EDC assets following the CX-0002 standard. After identifying the dDTR the Digital Twin with the related PCF submodel can be looked up (see ",(0,r.kt)("a",{parentName:"p",href:"#api-calls"},"API calls [0003 +0004]"),"). An example is documented ",(0,r.kt)("a",{parentName:"p",href:"#payload-for-requesting-pcf-sub-model"},"here"),"."),(0,r.kt)("p",null,"After successfully locating the corresponding material twin containing a PCF submodel, the EDC asset containing the PCF request endpoint cen be extracted (Example Payload can be found ",(0,r.kt)("a",{parentName:"p",href:"#payload-for-edc-data-asset-pcf"},"here"),") and the query for a PCF dataset can be initiated, as illustrated in the attached sequence diagram."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PCF Request",src:a(96033).Z,width:"2796",height:"2778"})),(0,r.kt)("p",null,"In case no matching material twin or PCF submodel exists, the flow falls back to a direct lookup of an EDC asset containing the PCF request endpoint provided within the offers of any EDC registered for the Data provider's BPNL."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PCF Request without Twin or Submodel",src:a(48177).Z,width:"2685",height:"2336"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),"\nThe API Wrapper shown in the sequence diagrams is optional. The management API of the EDC can also be used directly.")),(0,r.kt)("h3",{id:"pcf-update"},"PCF Update"),(0,r.kt)("p",null,"The sequence diagram provided below presents an example of a PCF update flow. An update is feasible only for assets that have been previously requested at least once, as demonstrated in ",(0,r.kt)("a",{parentName:"p",href:"#sequence-view"},"PCF Request"),". Proactive updates without a prior request are not achievable with the current version."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PCF Update",src:a(5483).Z,width:"2309",height:"1036"})),(0,r.kt)("h4",{id:"api-calls"},"API Calls"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Call"),(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Path"),(0,r.kt)("th",{parentName:"tr",align:null},"Param"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://eclipse-tractusx.github.io/docs-kits/next/kits/Digital%20Twin%20Kit/Software%20Development%20View/API%20EDC%20Discovery/post-list-of-bpns-or-an-empty-array-to-retrieve-available-company-connector-authorization-required-roles-view-connectors"},"001")," (Look up EDC Endpoints)"),(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/administration/Connectors/discovery/"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[<Company's BPNL>]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://eclipse-tractusx.github.io/docs-kits/next/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/catalog"},"002")," (Look up dDTR)"),(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null},"/v2/catalog/request"),(0,r.kt)("td",{parentName:"tr",align:null},"--\x3e Lookup Asset in the EDC catalog (EDC asset type data.core.digitalTwinRegistry)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://eclipse-tractusx.github.io/docs-kits/next/kits/Digital%20Twin%20Kit/Software%20Development%20View/API%20AAS%20Discovery/get-all-asset-administration-shell-ids-by-asset-link"},"003")," (Lookup Twin ID)"),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/lookup/shells"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'assetIds= [{"key": "manufacturerPartId", "value":"mat345",{"key":"digitalTwinType", "value": "PartType"}}]'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://eclipse-tractusx.github.io/docs-kits/next/kits/Digital%20Twin%20Kit/Software%20Development%20View/API%20AAS%20Registry/get-all-asset-administration-shell-descriptors"},"004")," (Look Up PCF Submodel/EDC Asset ID)"),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/shell-descriptors"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{DIGITAL TWIN ID}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{target:"_blank",href:a(41487).Z},"005")," (Requesting PCF Value)"),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/productIds"),(0,r.kt)("td",{parentName:"tr",align:null},"{productId}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{target:"_blank",href:a(41487).Z},"006")," (Sending PCF Value)"),(0,r.kt)("td",{parentName:"tr",align:null},"PUT"),(0,r.kt)("td",{parentName:"tr",align:null},"/productIds"),(0,r.kt)("td",{parentName:"tr",align:null},"{productId}")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The assetIds under ","[003]"," must be base64 encoded!"),(0,r.kt)("li",{parentName:"ul"},'When responding on PCF exchange request the "requestID" is mandatory in the PUT call.'),(0,r.kt)("li",{parentName:"ul"},'When sharing a PCF update the "requestID" is NOT allowed in the PUT call.'),(0,r.kt)("li",{parentName:"ul"},'The EDC asset used to receive PCF is NOT looked up through AAS, but identified by type ("data.pcf.exchangeEndpoint").'),(0,r.kt)("li",{parentName:"ul"},"The Open API specification defining all mandatory PCF Exchange endpoints and the da structures transfered through those can be found ",(0,r.kt)("a",{target:"_blank",href:a(41487).Z},"here"))),(0,r.kt)("h5",{id:"payload-for-requesting-pcf-sub-model"},"Payload for Requesting PCF Sub Model"),(0,r.kt)("p",null,"The following JSON shows the structure of a registered PCF submodel in the DTR. The subprotocolBody is used for asset bundling. For this, the CX Standard ",(0,r.kt)("a",{parentName:"p",href:"https://catena-x.net/en/standard-library"},"CX-0002")," is to be followed."),(0,r.kt)("p",null,"The digital twin id can be searched via the ",(0,r.kt)("inlineCode",{parentName:"p"},"manufacturerPartId")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},'digitalTwinType:"PartType"'),"."),(0,r.kt)("p",null,"The sub-model PCF must be registered with the ",(0,r.kt)("inlineCode",{parentName:"p"},"idshort: PCFExchangeEndpoint"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "description": [\n        {\n            "language": "en",\n            "text": "PCF endpoint for material \'mat345\'"\n        }\n    ],\n    "idShort": "PCFExchangeEndpoint",\n    "identification": "urn:uuid:205cf8d1-8f07-483c-9c5b-c8d706c7d05d",\n    "semanticId": {\n       "type": "ExternalReference",\n       "keys": [\n          {\n             "type": "GlobalReference",\n             "value": "urn:samm:io.catenax.pcf:6.0.0#Pcf"\n           }\n       ]\n    },\n    "endpoints": [\n        {\n            "interface": "PCF-1.1",\n            "protocolInformation": {\n                "href": "https://edc.data.plane/productIds/mat345",\n                "endpointProtocol": "HTTP",\n                "endpointProtocolVersion": ["1.1"],\n                "subprotocol": "DSP",\n                "subprotocolBody": "id=c34018ab-5820-4065-9087-416d78e1ab60;dspEndpoint=https://some.controlplane.url:7173/api/v1/dsp",\n                "subprotocolBodyEncoding": "plain"\n            }\n        }\n    ]\n}\n')),(0,r.kt)("h4",{id:"payloads-for-edc-asset"},"Payloads for EDC Asset"),(0,r.kt)("h5",{id:"payload-for-edc-data-asset-pcf"},"Payload for EDC Data Asset PCF"),(0,r.kt)("p",null,"The following JSON shows the the EDC Asset for PCF defined in the EDC using the asset bundling mentioned under ",(0,r.kt)("a",{parentName:"p",href:"#api-calls"},"Payload for Requesting PCF Sub Model"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "@context": {\n        "edc": "https://w3id.org/edc/v0.0.1/ns/",\n        "odrl": "http://www.w3.org/ ns/odrl/2/",\n        "dcat": "http://www.w3.org/ns/dcat#",\n        "dct": "http://purl.org/dc/terms/",\n        "rdfs": "http://www.w3.org/2000/01/rdf-schema#",\n        "cx-taxo": "https://w3id.org/catenax/taxonomy#",\n        "cx-common": "https://w3id.org/catenax/ontology/common#",\n        "aas-semantics": "https://admin-shell.io/aas/3/0/HasSemantics/"\n    },\n    "@id": "c34018ab-5820-4065-9087-416d78e1ab60",\n    "@type": "edc:Asset",\n    "edc:properties": {\n        "rdfs:label": "PCF Data",\n        "rdfs:comment": "Endpoint for PCF data",\n        "cx-common:version": "1.1",\n        "aas-semantics:semanticId": {"@id":"urn:samm:io.catenax.pcf:6.0.0#Pcf"},\n        "edc:contentType": "application/json",\n        "dct:type": {"@id":"cx-taxo:PcfExchange"}\n    },\n    "edc:dataAddress": {\n        "edc:type": "HttpData",\n        "edc:baseUrl": "https://some.url/service",\n        "edc:proxyBody": "true",\n        "edc:proxyPath": "true",\n        "edc:proxyQueryParams": "true",\n        "edc:proxyMethod": "true",\n        "edc:contentType": "application/json"\n    }\n}\n')),(0,r.kt)("h4",{id:"payload-for-edc-policy"},"Payload for EDC Policy"),(0,r.kt)("p",null,'The following JSON is an policy definition including the policiy credentials for "active membership", "frameworkagreement pcf" and "pcf base usage purpose". The ',(0,r.kt)("a",{parentName:"p",href:"https://catena-x.net/fileadmin/user_upload/04_Einfuehren_und_umsetzen/Governance_Framework/231016_Catena-X_Use_Case_Framework_PCF.pdf"},"frameworkagreement document")," is published via the association and are available via the Catena-X homepage. The membership credential is automatically created after finishing successfully the onboarding process."),(0,r.kt)("h5",{id:"payload-to-create-a-ssi-based-policy"},"Payload to create a SSI based Policy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "@context": {\n        "@vocab": "https://w3id.org/edc/v0.0.1/ns/"\n    },\n    "@id": "<POLICY-ID>",\n    "policy": {\n        "@context": [\n            "https://www.w3.org/ns/odrl.jsonld",\n            {\n                "cx-policy": "https://w3id.org/catenax/policy/v1.0.0/"\n            }\n        ],\n        "@type": "Policy",\n        "profile": "cx-policy:profile2405",\n        "permission": [\n            {\n                "action": "use",\n                "constraint": {\n                    "and": [\n                        {\n                            "leftOperand": "cx-policy:Membership",\n                            "operator": "eq",\n                            "rightOperand": "active"\n                        },\n                        {\n                            "leftOperand": "cx-policy:FrameworkAgreement",\n                            "operator": "eq",\n                            "rightOperand": "pcf:1.0"\n                        },\n                        {\n                            "leftOperand": "cx-policy:UsagePurpose",\n                            "operator": "eq",\n                            "rightOperand": "cx.pcf.base:1"\n                        }\n                    ]\n                }\n            }\n        ]\n    }\n}\n')),(0,r.kt)("p",null,"For more examples how to define policies with SSI have a look ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/ssi-docu/blob/main/docs/architecture/cx-3-2/edc/policy.definitions.md"},"here"),"."),(0,r.kt)("h4",{id:"payload-contract-definition"},"Payload Contract Definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "@id": "54ef3326-42b2-4221-8c5a-3a6270d54db8",\n    "edc:accessPolicyId": "a343fcbf-99fc-4ce8-8e9b-148c97605aab",\n    "edc:contractPolicyId": "a343fcbf-99fc-4ce8-8e9b-148c97605aab",\n    "edc:assetsSelector":[\n        {\n            "@type": "Criterion",\n            "edc:operandLeft": "@id",\n            "edc:operator": "=",\n            "edc:operandRight": "c34018ab-5820-4065-9087-416d78e1ab60"\n        }\n    ]\n}\n')),(0,r.kt)("h2",{id:"error-handling"},"Error Handling"),(0,r.kt)("p",null,"In case no material twin or no PCF submodel is found, EDC Asset type has to be used to find the Endpoint needed to perform the PCF request."),(0,r.kt)("h2",{id:"standards"},"Standards"),(0,r.kt)("h3",{id:"used-cx-standards"},"Used CX Standards"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://catena-x.net/en/standard-library"},"CX-0001 EDC Discovery API v1.0.2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://catena-x.net/en/standard-library"},"CX-0002 Digital Twins in Catena-X v2.2.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://catena-x.net/en/standard-library"},"CX-0003 SAMMSemanticAspectMetaModel v1.1.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://catena-x.net/en/standard-library"},"CX-0018 Eclipse Data Space Connector (EDC) v3.0.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://catena-x.net/en/standard-library"},"CX-0126-Industry Core: Part Type v2.0.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://catena-x.net/en/standard-library"},"CX-0136 PCF UseCase v1.0.0"))),(0,r.kt)("h2",{id:"other-standards"},"Other Standards"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wbcsd.github.io/tr/2023/data-exchange-protocol-20230221"},"Pathfinder Framework - v2.0.0"))),(0,r.kt)("h2",{id:"notice"},"NOTICE"),(0,r.kt)("p",null,"This work is licensed under the ",(0,r.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023, 2024 ZF Friedrichshafen AG"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023, 2024 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023, 2024 T-Systems International GmbH"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023, 2024 SAP SE"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023, 2024 SIEMENS AG"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023, 2024 SUPPLY ON AG"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023, 2024 Volkswagen AG"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023, 2024 Robert Bosch GmbH"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023, 2024 Mercedes Benz Group"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023, 2024 BASF SE"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023, 2024 CCT"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023, 2024 Gris Group"),(0,r.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023, 2024 Contributors to the Eclipse Foundation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/pcf-exchange-kit"},"Source URL"))))}p.isMDXComponent=!0},41487:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/catena-x-pcf-endpoint-1_1_0-cdbce685d6b41fddf053e3a84867a50e.yaml"},45526:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/BuildingblockView-de3d6a2ba51c901052dc093276e670ff.png"},94854:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/EDCDiscoveryanddDTRAccess-0d6bc243678d4a22780de6d864757a98.png"},48177:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/PCFRequestWithoutTwinOrSubmodel-d9157d7885feb91375c238b4d4b903cd.png"},96033:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/PCFRequestthroughAAS-49f935209306d0968d04538d62e16076.png"},5483:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/PCFUpdatePushedThroughEDC-61779fcf28819f5464582f7bc27798cf.png"},32037:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pcf-kit-icon-8499d36d4fef319e8be8195f9de6e0f1.svg"}}]);