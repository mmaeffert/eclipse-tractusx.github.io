"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[6432],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},50046:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={id:"bpdm_arc42",title:"Architecture documentation (arc42)",description:"Architecture documentation (arc42)",sidebar_position:1},l=void 0,o={unversionedId:"kits/Business Partner Kit/Documentation BPDM/bpdm_arc42",id:"kits/Business Partner Kit/Documentation BPDM/bpdm_arc42",title:"Architecture documentation (arc42)",description:"Architecture documentation (arc42)",source:"@site/docs-kits/kits/Business Partner Kit/Documentation BPDM/bpdm_arc42.md",sourceDirName:"kits/Business Partner Kit/Documentation BPDM",slug:"/kits/Business Partner Kit/Documentation BPDM/bpdm_arc42",permalink:"/docs-kits/next/kits/Business Partner Kit/Documentation BPDM/bpdm_arc42",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"bpdm_arc42",title:"Architecture documentation (arc42)",description:"Architecture documentation (arc42)",sidebar_position:1},sidebar:"kits",previous:{title:"Documentation",permalink:"/docs-kits/next/category/documentation"},next:{title:"Connector KIT",permalink:"/docs-kits/next/category/connector-kit"}},s={},d=[{value:"Business Partner KIT",id:"business-partner-kit",level:2},{value:"Business Partner Data Management Application for Golden Record (BPDM)",id:"business-partner-data-management-application-for-golden-record-bpdm",level:2},{value:"Introduction and Goals",id:"introduction-and-goals",level:2},{value:"Goals Overview",id:"goals-overview",level:2},{value:"Requirements Overview",id:"requirements-overview",level:2},{value:"Quality Goals {#_quality_goals}",id:"_quality_goals",level:2},{value:"Stakeholders",id:"stakeholders",level:2},{value:"Architecture Constraints",id:"architecture-constraints",level:2},{value:"System Scope and Context",id:"system-scope-and-context",level:2},{value:"Business Context",id:"business-context",level:2},{value:"Master Data Management (Catena-X Member)",id:"master-data-management-catena-x-member",level:3},{value:"Small-Medium-Enterprises (SME) (Catena-X Member)",id:"small-medium-enterprises-sme-catena-x-member",level:3},{value:"Catena-X Portal/Marketplace (CX Portal)",id:"catena-x-portalmarketplace-cx-portal",level:3},{value:"Value Added Services",id:"value-added-services",level:3},{value:"Catena-X Operative Environment for BPDM",id:"catena-x-operative-environment-for-bpdm",level:3},{value:"Catena-X BPDM Application",id:"catena-x-bpdm-application",level:3},{value:"Curation &amp; Enrichment Services",id:"curation--enrichment-services",level:3},{value:"Technical Context",id:"technical-context",level:2},{value:"Solution Strategy (High Level Picture)",id:"solution-strategy-high-level-picture",level:2},{value:"BPDM Gate",id:"bpdm-gate",level:3},{value:"BPDM Pool",id:"bpdm-pool",level:3},{value:"BPN Issuer",id:"bpn-issuer",level:3},{value:"BPDM Orchestrator",id:"bpdm-orchestrator",level:3},{value:"Building Block View",id:"building-block-view",level:2},{value:"Target Architecture",id:"target-architecture",level:2},{value:"Architecture for Release 3.2",id:"architecture-for-release-32",level:2},{value:"Simulator Service",id:"simulator-service",level:3},{value:"Architecture for Release 3.3",id:"architecture-for-release-33",level:2},{value:"Keycloak Authentication &amp; Autorization Flow",id:"keycloak-authentication--autorization-flow",level:2},{value:"Runtime View",id:"runtime-view",level:2},{value:"Upload Business Partner (BPN-L)",id:"upload-business-partner-bpn-l",level:2},{value:"Deployment View",id:"deployment-view",level:2},{value:"Crosscutting Concepts",id:"crosscutting-concepts",level:2},{value:"Business Partner Data Management Standards",id:"business-partner-data-management-standards",level:2},{value:"Architecture Decisions",id:"architecture-decisions",level:2},{value:"Quality Requirements",id:"quality-requirements",level:2},{value:"Risks and Technical Debts",id:"risks-and-technical-debts",level:2},{value:"Open EDC Questions",id:"open-edc-questions",level:3},{value:"Lack on Developer Resources",id:"lack-on-developer-resources",level:3},{value:"Semantic Model and SSI Integration of the Golden Record",id:"semantic-model-and-ssi-integration-of-the-golden-record",level:3},{value:"Dependency on third party service provider",id:"dependency-on-third-party-service-provider",level:3},{value:"Data Storage and anonymize concept",id:"data-storage-and-anonymize-concept",level:3},{value:"Accessability for SME",id:"accessability-for-sme",level:3},{value:"Glossary",id:"glossary",level:2}],c={toc:d};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Business partner kit banner",src:a(20140).Z,width:"285",height:"244"})),(0,r.kt)("h2",{id:"business-partner-kit"},"Business Partner KIT"),(0,r.kt)("h2",{id:"business-partner-data-management-application-for-golden-record-bpdm"},"Business Partner Data Management Application for Golden Record (BPDM)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#business-partner-data-management-application-for-golden-record-bpdm"},"Business Partner Data Management Application for Golden Record (BPDM)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#introduction-and-goals"},"Introduction and Goals"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#goals-overview"},"Goals Overview")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#requirements-overview"},"Requirements Overview")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#quality-goals-_quality_goals"},"Quality Goals {#","_","quality","_","goals}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#stakeholders"},"Stakeholders")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#architecture-constraints"},"Architecture Constraints")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#system-scope-and-context"},"System Scope and Context"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#business-context"},"Business Context")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#technical-context"},"Technical Context")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#solution-strategy-high-level-picture"},"Solution Strategy (High Level Picture)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#building-block-view"},"Building Block View"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#target-architecture"},"Target Architecture")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#architecture-for-release-32"},"Architecture for Release 3.2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#architecture-for-release-33"},"Architecture for Release 3.3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#keycloak-authentication--autorization-flow"},"Keycloak Authentication \\& Autorization Flow")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#runtime-view"},"Runtime View"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#upload-business-partner-bpn-l"},"Upload Business Partner (BPN-L)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#deployment-view"},"Deployment View")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#crosscutting-concepts"},"Crosscutting Concepts"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#business-partner-data-management-standards"},"Business Partner Data Management Standards")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#architecture-decisions"},"Architecture Decisions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#quality-requirements"},"Quality Requirements")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#risks-and-technical-debts"},"Risks and Technical Debts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#glossary"},"Glossary"))),(0,r.kt)("h2",{id:"introduction-and-goals"},"Introduction and Goals"),(0,r.kt)("p",null,"This document describes the Catena-X Business Partner Data Management Application, short BPDM."),(0,r.kt)("p",null,"In the Catena-X Automotive Network, the so-called Golden Record, together with a unique identifier, the Business Partner Number (BPN), creates an efficient solution to the increasing data retention costs."),(0,r.kt)("p",null,'The Golden Record is a concept that identifies, links and harmonizes identical data on legal entites, sites and addresses from different sources (\u201csharing members"). During the creation of the Golden Record data, duplicates are removed, the quality within the data records is improved, missing information is added and deviations are automatically corrected. This is done using public, commercial or other agreed sources of trust and/or information. This approach reduces costs of business partner data maintenance and validation for all the companies concerned.'),(0,r.kt)("p",null,"The BPN, as the unique identifier of the Golden Record, can be stored as a verifiable credential used in an SSI solution so that a business partner can provide it for authentication and authorization."),(0,r.kt)("p",null,"The Golden Record business partner data in combination with the BPN acts as the basis for a range of supplementary value-added services to optimize business partner data management. These are referred to as value-added services. Together with decentralized, self-determined identity management, they create a global, cross-industry standard for business partner data and a possible 360\xb0 view of the value chain."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"HINT"),": A Business Partner Data cleaning as well as Golden Record Creation Process is ",(0,r.kt)("strong",{parentName:"p"},"not")," part of this reference implementation!")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Additional Information Material"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Visit BPDM on the official Catena-X Website: ",(0,r.kt)("a",{parentName:"li",href:"https://catena-x.net/en/offers/bpdm"},"bpdm_catenax_website"))),(0,r.kt)("h2",{id:"goals-overview"},"Goals Overview"),(0,r.kt)("p",null,"The following goals have been established for this system:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Priority"),(0,r.kt)("th",{parentName:"tr",align:null},"Goal"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide unique global business partner IDs within the Catena-X Network")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide centralized Master Data Management for business partner data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable network-based data sharing for business partner data to increase overall data quality and reliability")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable also Small and medium-sized Businesses (SMEs) to use the services")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide a change history f\xfcr business partner data")))),(0,r.kt)("h2",{id:"requirements-overview"},"Requirements Overview"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"Note:")," Cross-Check with CACs")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"bpdm_usecase_diagram",src:a(77497).Z,width:"641",height:"601"})),(0,r.kt)("p",null,"The following Usecases together with its requirements exist for this system:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Req-Id"),(0,r.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,r.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BPDM-R1"),(0,r.kt)("td",{parentName:"tr",align:null},"Upload and curate BP data"),(0,r.kt)("td",{parentName:"tr",align:null},"CX Member can upload their business partner and get curated business partner information back, based on the Golden Record")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BPDM-R2"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide changelog for BP"),(0,r.kt)("td",{parentName:"tr",align:null},"A changelog is provided to determine which changes on which date are available")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BPDM-R3"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide GR"),(0,r.kt)("td",{parentName:"tr",align:null},"Based on the shared business partner information and external service providers a Golden Record is created")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BPDM-R4"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide changelog for GR"),(0,r.kt)("td",{parentName:"tr",align:null},"A changelog is provided to determine which changes on which date are available")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BPDM-R5"),(0,r.kt)("td",{parentName:"tr",align:null},"Keep GR up-to-date based on external resources"),(0,r.kt)("td",{parentName:"tr",align:null},"Golden Records must regularly checked for changes based on external resources")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BPDM-R6"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide unique business partner IDs"),(0,r.kt)("td",{parentName:"tr",align:null},"For each Golden Record a unique ID, the so called Business Partner Number (BPN) is created")))),(0,r.kt)("h2",{id:"_quality_goals"},"Quality Goals {#","_","quality","_","goals}"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Priority"),(0,r.kt)("th",{parentName:"tr",align:null},"Quality Goal"),(0,r.kt)("th",{parentName:"tr",align:null},"Scenario"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Security"),(0,r.kt)("td",{parentName:"tr",align:null},"All users and services which access the Golden Record Application must be authenticated and authorized. Only the Golden Record Application itself is allowed to perform changes on data. Consuming services/users are only allowed to read data. In addition they are only allowed to read the specific data that belongs with this, the Data Sovereignty principles of Catena-X has to be fulfilled")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Integrity"),(0,r.kt)("td",{parentName:"tr",align:null},"Only the Golden Record Application is allowed to perform changes on the data. In addition, all changes must be traceable and must be able to be rolled back")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Legally"),(0,r.kt)("td",{parentName:"tr",align:null},"No natural persons are allowed to get uploaded and stored. For all other uploaded Business Partner data it is mandatory that users (CX Members) can only see their own uploaded data and that it is not possible to draw conclusions about other business partner relationships")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Integrity & Correctness"),(0,r.kt)("td",{parentName:"tr",align:null},"It must be ensured that the data of the golden record which is created during the process is correct.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Reliability"),(0,r.kt)("td",{parentName:"tr",align:null},"The Golden Record Application is a central foundation in the Catena-X Network. It provides all participants and services, business partner data and the unique Business Partner Number (BPN) as identifier. Therefore the BPDM Services must be always/highly available")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"Functional Stability"),(0,r.kt)("td",{parentName:"tr",align:null},"Since the Golden Record Application is a central foundation in the Catena-X Network the defined standards of the API and datamodel for the associated Release Version must be fulfilled")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Sensitivity of data"),(0,r.kt)("td",{parentName:"tr",align:null},"the uploaded business partner data is highly sensitive, that's why it must be ensured that no unauthorized user/system can access data which does not belong to it. More over it must be guaranteed that no one can see the business partners related to the specific Catena-X Member.")))),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(16955).Z})),(0,r.kt)("h2",{id:"stakeholders"},"Stakeholders"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Role/Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Expectations"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Big Company (CX-Member)"),(0,r.kt)("td",{parentName:"tr",align:null},"Company wants to have cleaned and enriched business partner data objects with a BPN."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SME Company (CX-Member)"),(0,r.kt)("td",{parentName:"tr",align:null},"Company wants to have cleaned and enriched business partner data objects with a BPN based on a CSV data."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CX Apps"),(0,r.kt)("td",{parentName:"tr",align:null},"Other apps and their use cases want to use the business partner data objects and the BPN for their processes"),(0,r.kt)("td",{parentName:"tr",align:null},"The CX Portal will use the BPN for on-boarding new companies into the network. Traceability Apps will use BPN to describe business partners")))),(0,r.kt)("h2",{id:"architecture-constraints"},"Architecture Constraints"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Constraint ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Constraint"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"C-1"),(0,r.kt)("td",{parentName:"tr",align:null},"Software and third party software must be compliant to the Catena-X and Eclipse Foundation Guidelines/Policies ",(0,r.kt)("a",{parentName:"td",href:"https://www.eclipse.org/projects/dev_process/"},"eclipse_foundation")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"C-2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/eclipse-tractusx/tractusx-edc/tree/main"},"Eclipse Dataspace Connector")," must be used for data transfer between different legal entities"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"system-scope-and-context"},"System Scope and Context"),(0,r.kt)("h2",{id:"business-context"},"Business Context"),(0,r.kt)("p",null,"The following figure depicts the business context setup for BPDM:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"bpdm_business_context",src:a(64035).Z,width:"1211",height:"681"})),(0,r.kt)("p",null,"The following are the various components of the business context setup:"),(0,r.kt)("h3",{id:"master-data-management-catena-x-member"},"Master Data Management (Catena-X Member)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A backend system that's operated by a company which is participating in the Catena-X Ecosystem and consuming digital services or data assets.")),(0,r.kt)("h3",{id:"small-medium-enterprises-sme-catena-x-member"},"Small-Medium-Enterprises (SME) (Catena-X Member)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A SME company that's participating in the Catena-X Ecosystem and consuming digital services or data assets.")),(0,r.kt)("h3",{id:"catena-x-portalmarketplace-cx-portal"},"Catena-X Portal/Marketplace (CX Portal)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Portal which provides an entry point for the Catena-X Members, to discover Apps that are offered in Catena-X.")),(0,r.kt)("h3",{id:"value-added-services"},"Value Added Services"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Value Added Services can be provided be either the Operator itself or by an external App/Service Provider. The Value Added Services provide data or service offers based on Catena-X Network data."),(0,r.kt)("li",{parentName:"ul"},"There are several value added services that can be offered in context of business partner data. For example a Fraud Prevention Dashboard/API, Country Risk Scoring and so on.")),(0,r.kt)("h3",{id:"catena-x-operative-environment-for-bpdm"},"Catena-X Operative Environment for BPDM"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Within Catena-X there will be only one central operation environment that operates the BPDM Application. This operative environment provides the services and data for other operation environment or applications which needs to consume business partner data or golden record data.")),(0,r.kt)("h3",{id:"catena-x-bpdm-application"},"Catena-X BPDM Application"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The BPDM Application which offers services to Catena-X Members, Catena-X Use Cases and Catena-X BPDM Value Added Services for consuming and processing business partner data as well as Golden Record Information and BPN Numbers.")),(0,r.kt)("h3",{id:"curation--enrichment-services"},"Curation & Enrichment Services"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To offer the BPDM and Golden Record Services, Catena-X uses services from external third party service providers. These can either be operated by the operator itself or external companies that have a contract with the operator.")),(0,r.kt)("h2",{id:"technical-context"},"Technical Context"),(0,r.kt)("p",null,"The technical context setup including deployment is depicted in the following figure:\n",(0,r.kt)("img",{alt:"cx_bpdm_deployment_context",src:a(60376).Z,width:"1351",height:"701"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The BPDM Application follows a microservice approach to separate the different components of the system."),(0,r.kt)("li",{parentName:"ul"},"Within Catena-X there will be only one central operation environment that operates the BPDM Application. This operation environment provides the services and data for other operation environment or applications which needs to consume business partner data or golden record data.")),(0,r.kt)("h2",{id:"solution-strategy-high-level-picture"},"Solution Strategy (High Level Picture)"),(0,r.kt)("p",null,"The following high level view gives a basic overview about the BPDM Components:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"cx_bpdm_highlevel",src:a(56943).Z,width:"401",height:"586"})),(0,r.kt)("h3",{id:"bpdm-gate"},"BPDM Gate"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The BPDM Gate provides the interfaces for Catena-X Members to manage their business partner data within Catena-X."),(0,r.kt)("li",{parentName:"ul"},"Based on the network data a Golden Record Proposal is created."),(0,r.kt)("li",{parentName:"ul"},"The BPDM Gate has its own persistence layer in which the business partner data of the Catena-X Members are stored."),(0,r.kt)("li",{parentName:"ul"},"For the current reference implementation, multi-tenancy is realized via a 1:1 deployment for each Catena-X Member. This means that every Catena-X Member who shares his business partner data, has its own Gate and own persistence.")),(0,r.kt)("h3",{id:"bpdm-pool"},"BPDM Pool"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The BPDM Pool is the central instance for business partner data within Catena-X."),(0,r.kt)("li",{parentName:"ul"},"The BPDM Pool provides the interface and persistance for accessing Golden Record Data and the unique Business Partner Number."),(0,r.kt)("li",{parentName:"ul"},"In comparison to the BPDM Gate, there is only one central instance of the BPDM Pool.")),(0,r.kt)("h3",{id:"bpn-issuer"},"BPN Issuer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Every participant in the Catena-X network shall have a unique Business Partner Number (BPN) according to the concept defined by the Catena-X BPN concept. The task of the BPN Generator is to issue such a BPN for a presented Business Partner data object. In that, the BPN Generator serves as the central issuing authority for BPNs within Catena-X."),(0,r.kt)("li",{parentName:"ul"},"Technically, it constitutes a service that is available as a singleton within the network."),(0,r.kt)("li",{parentName:"ul"},"Currently (Release 3.2) the BPN Issuer is part of the BPDM Pool. After implementing the BPDM Orchestrator, the BPN Issuer should become an independent component.")),(0,r.kt)("h3",{id:"bpdm-orchestrator"},"BPDM Orchestrator"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The BPDM Orchestrator is ",(0,r.kt)("strong",{parentName:"li"},"not")," part of Release 3.2."),(0,r.kt)("li",{parentName:"ul"},"Intention of the BPDM Orchestrator is to provide a passive component that offers standardized APIs for the BPDM Gate, BPDM Pool and Data Curation and Enrichment Services to orchestrate the process of Golden Record Creation and handling the different states a business partner record can have during this process.")),(0,r.kt)("h2",{id:"building-block-view"},"Building Block View"),(0,r.kt)("h2",{id:"target-architecture"},"Target Architecture"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"bpdm_target_architecture",src:a(92856).Z,width:"2461",height:"1161"})),(0,r.kt)("h2",{id:"architecture-for-release-32"},"Architecture for Release 3.2"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"bpdm_current_architecture",src:a(8598).Z,width:"2462",height:"1161"})),(0,r.kt)("h3",{id:"simulator-service"},"Simulator Service"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To become more independent in testing the BPDM Application, a Simulator Service was developed."),(0,r.kt)("li",{parentName:"ul"},"The Simulator Services supports the E2E Test Cases to validate the flow from BPDM Gate to BPDM Pool and back again.")),(0,r.kt)("h2",{id:"architecture-for-release-33"},"Architecture for Release 3.3"),(0,r.kt)("p",null,"The transition architecture outlines the next goal for current development phase to get one step closer to the target architecture."),(0,r.kt)("p",null,"In Progress..."),(0,r.kt)("h2",{id:"keycloak-authentication--autorization-flow"},"Keycloak Authentication & Autorization Flow"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mermaid"},'\nsequenceDiagram\n    participant EDC of CX Member\n    participant OpenIDConnect Server\n    participant BPDM Gate\n\n    autonumber\n\n    EDC of CX Member--\x3e>OpenIDConnect Server: Send Client Credentials\n    OpenIDConnect Server--\x3e>EDC of CX Member: Respond OAuth2 Token\n    EDC of CX Member --\x3e> BPDM Gate: Send Request with OAuth2 Token in Authorization Header\n    BPDM Gate --\x3e> OpenIDConnect Server: Validate Token\n    OpenIDConnect Server --\x3e> BPDM Gate: Confirms validity of Token\n    BPDM Gate --\x3e> BPDM Gate: Check "resource_access" section of OAuth Token\n\n    \n')),(0,r.kt)("h2",{id:"runtime-view"},"Runtime View"),(0,r.kt)("h2",{id:"upload-business-partner-bpn-l"},"Upload Business Partner (BPN-L)"),(0,r.kt)("p",null,'The diagram below describes the flow of uploading a business partner of type "legal entity".\nFor further information about the different business partner types (Legal Entity, Site, Address), please have a look on the Standards ',(0,r.kt)("a",{parentName:"p",href:"https://catena-x.net/de/standard-library"},"CX - 0010 Business Partner Number")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-mermaid"},"\nsequenceDiagram\n    participant CX Member\n    participant BPDM Gate\n    participant BPDM Simulator\n    participant BPDM Pool\n    autonumber\n\n    rect rgb(125, 184, 240)\n      Note over CX Member,BPDM Gate: EDC enabled\n    CX Member->>BPDM Gate: Upload Business Partner\n      Note left of BPDM Gate: PUT api/catena/input/legal-entities\n    # loop Healthcheck\n      #  John->>John: Fight against hypochondria\n    # end\n    # Note right of John: Rational thoughts!\n    end\n    BPDM Gate--\x3eBPDM Gate: Update input changelog\n    BPDM Simulator->>BPDM Gate: Poll for Business Partner changes\n      Note right of BPDM Gate: POST api/catena/input/changelog/search\n    BPDM Gate --\x3e> BPDM Simulator: Send Changelog for Business Partners\n    BPDM Simulator->>BPDM Gate: Request Business Partner based on Changelog (external ID and business partner type)\n      Note right of BPDM Gate: POST /api/catena/input/legal-entities/search\n    BPDM Gate --\x3e> BPDM Simulator: Send Business Partners\n    BPDM Simulator->>BPDM Gate: Request Sharing State for Business Partner based on Changelog\n      Note right of BPDM Gate: GET api/catena/sharing-state\n    BPDM Gate --\x3e> BPDM Simulator: Send Sharing State (BPN) of Business Partners (Sharing state determines if BPN exist or not)\n    BPDM Simulator--\x3e> BPDM Simulator: Update last sync changelog timestamp\n    BPDM Simulator->>BPDM Pool: Forward Business Partner\n      Note left of BPDM Pool: POST/PUT api/catena/legal-entities\n    opt BPN does not exist \n    BPDM Pool--\x3e>BPDM Pool: Create BPN\n    end\n    BPDM Pool--\x3e>BPDM Pool: Update Changelog\n    BPDM Pool--\x3e>BPDM Simulator: Respond Business Partner with BPN\n    BPDM Simulator--\x3e>BPDM Gate: Forward Business Partner with BPN\n      Note right of BPDM Gate: PUT api/catena/output/legal-entities\n    BPDM Simulator--\x3e>BPDM Gate: Update Sharing State\n      Note right of BPDM Gate: PUT api/catena/sharing-state\n    BPDM Gate--\x3eBPDM Gate: Link External ID with BPN\n    BPDM Gate--\x3eBPDM Gate: Update Output Changelog\n\n    loop Every x hour\n      rect rgb(125, 184, 240)\n      Note over CX Member,BPDM Gate: EDC enabled\n        CX Member->>BPDM Gate: Poll output changelog and fetch updates\n          Note left of BPDM Gate: POST api/catena/output/changelog/search\n        BPDM Gate--\x3e>CX Member: Send changelog\n        CX Member->>BPDM Gate: Fetch updates\n          Note left of BPDM Gate: POST api/catena/output/legal-entities/search\n        BPDM Gate--\x3e>CX Member: Send Business Partner changes\n        end\n        CX Member--\x3e>CX Member: Update data\n        CX Member--\x3e>CX Member: Update last polled timestamp\n    end\n")),(0,r.kt)("h2",{id:"deployment-view"},"Deployment View"),(0,r.kt)("p",null,"How to run the service"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deployment View",src:a(34253).Z,width:"2140",height:"600"})),(0,r.kt)("h2",{id:"crosscutting-concepts"},"Crosscutting Concepts"),(0,r.kt)("h2",{id:"business-partner-data-management-standards"},"Business Partner Data Management Standards"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://catena-x.net/de/standard-library"},"bpdm_standards")),(0,r.kt)("h2",{id:"architecture-decisions"},"Architecture Decisions"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://confluence.catena-x.net/display/CORE/BPDM+%7C+Decision+Logs"},"Architecture Decision Logs"),"\n(Link will be replaced with ADRs based on Markdown)"),(0,r.kt)("h2",{id:"quality-requirements"},"Quality Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"see: ",(0,r.kt)("a",{parentName:"li",href:"#quality-goals-_quality_goals"},"Quality Goals"))),(0,r.kt)("h2",{id:"risks-and-technical-debts"},"Risks and Technical Debts"),(0,r.kt)("h3",{id:"open-edc-questions"},"Open EDC Questions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What capabilities will be provided in the future?"),(0,r.kt)("li",{parentName:"ul"},"How to deal with APIs provided behind an EDC? Swagger documentation cannot be seen by the requesting service?"),(0,r.kt)("li",{parentName:"ul"},"How can we authorize and authenticate a User/System with individual permissions after it passes the EDC?"),(0,r.kt)("li",{parentName:"ul"},"Will there by a Proxy EDC concept?"),(0,r.kt)("li",{parentName:"ul"},"...")),(0,r.kt)("h3",{id:"lack-on-developer-resources"},"Lack on Developer Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Too less developer resources in contrast to the expectations that the BPDM Product and its Golden Record will be a foundation component within Catena-X.")),(0,r.kt)("h3",{id:"semantic-model-and-ssi-integration-of-the-golden-record"},"Semantic Model and SSI Integration of the Golden Record"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Not in scope.")),(0,r.kt)("h3",{id:"dependency-on-third-party-service-provider"},"Dependency on third party service provider"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Currently we are not flexible enough to easily change the third party service provider for golden record creation. Therefore the next step will be to introduce an own data persistence layer, getting more independent."),(0,r.kt)("li",{parentName:"ul"},'\u2714\ufe0fSolved via "Simulator Application"')),(0,r.kt)("h3",{id:"data-storage-and-anonymize-concept"},"Data Storage and anonymize concept"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How to anonymize the relations between CX-Member and its belonging Business Partner?"),(0,r.kt)("li",{parentName:"ul"},'\ud83d\udca1 Idea: using kind of "ticket numbering"')),(0,r.kt)("h3",{id:"accessability-for-sme"},"Accessability for SME"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Uploading via CSV File. Does it requires an EDC?"),(0,r.kt)("li",{parentName:"ul"},"\u26a0\ufe0fCurrent State: Yes, is needed.")),(0,r.kt)("h2",{id:"glossary"},"Glossary"),(0,r.kt)("p",null,"The Glossary is currently under development and will be added below after internal approval (",(0,r.kt)("a",{parentName:"p",href:"https://confluence.catena-x.net/display/CORE/BPDM+Glossary+-+Internal+-+DRAFT"},"DRAFT"),")."),(0,r.kt)("p",null,"The current version you can find in the Catena-X Standards."))}u.isMDXComponent=!0},16955:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/iso_25010-49b3702ca5acdfcc459a1982dffdf597.png"},20140:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/BPKitIcon-55e920e08d5706764626858aebe41780.png"},8598:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cx_bpdm_architecture_v3_2.drawio-cb1f9132227f510a6f3b78d86cb46de2.svg"},64035:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cx_bpdm_context_business.drawio-d2149f9afc13aef2bc3f69307a7d48df.svg"},60376:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cx_bpdm_context_technical.drawio-5a4636add1898f5c5ab7f840cd423c9d.svg"},56943:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cx_bpdm_highlevel.drawio-135d7c07b001180b4e04997df98f43d9.svg"},92856:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cx_bpdm_target_architecture.drawio-aedd5a1d1c7f54fa3e797e98e2b069ef.svg"},34253:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deployment-view-3-2-f26c60f7832d85a7a2fcd0420a4c81d8.png"},77497:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/usecase_diagram.drawio-56c53142e06e8fda1965a83656b0d5d7.svg"}}]);