"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[64122],{3905:(M,e,I)=>{I.d(e,{Zo:()=>n,kt:()=>l});var t=I(67294);function i(M,e,I){return e in M?Object.defineProperty(M,e,{value:I,enumerable:!0,configurable:!0,writable:!0}):M[e]=I,M}function N(M,e){var I=Object.keys(M);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(M);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(M,e).enumerable}))),I.push.apply(I,t)}return I}function a(M){for(var e=1;e<arguments.length;e++){var I=null!=arguments[e]?arguments[e]:{};e%2?N(Object(I),!0).forEach((function(e){i(M,e,I[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(I)):N(Object(I)).forEach((function(e){Object.defineProperty(M,e,Object.getOwnPropertyDescriptor(I,e))}))}return M}function D(M,e){if(null==M)return{};var I,t,i=function(M,e){if(null==M)return{};var I,t,i={},N=Object.keys(M);for(t=0;t<N.length;t++)I=N[t],e.indexOf(I)>=0||(i[I]=M[I]);return i}(M,e);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(M);for(t=0;t<N.length;t++)I=N[t],e.indexOf(I)>=0||Object.prototype.propertyIsEnumerable.call(M,I)&&(i[I]=M[I])}return i}var g=t.createContext({}),j=function(M){var e=t.useContext(g),I=e;return M&&(I="function"==typeof M?M(e):a(a({},e),M)),I},n=function(M){var e=j(M.components);return t.createElement(g.Provider,{value:e},M.children)},A="mdxType",T={inlineCode:"code",wrapper:function(M){var e=M.children;return t.createElement(t.Fragment,{},e)}},u=t.forwardRef((function(M,e){var I=M.components,i=M.mdxType,N=M.originalType,g=M.parentName,n=D(M,["components","mdxType","originalType","parentName"]),A=j(I),u=i,l=A["".concat(g,".").concat(u)]||A[u]||T[u]||N;return I?t.createElement(l,a(a({ref:e},n),{},{components:I})):t.createElement(l,a({ref:e},n))}));function l(M,e){var I=arguments,i=e&&e.mdxType;if("string"==typeof M||i){var N=I.length,a=new Array(N);a[0]=u;var D={};for(var g in e)hasOwnProperty.call(e,g)&&(D[g]=e[g]);D.originalType=M,D[A]="string"==typeof M?M:i,a[1]=D;for(var j=2;j<N;j++)a[j]=I[j];return t.createElement.apply(null,a)}return t.createElement.apply(null,I)}u.displayName="MDXCreateElement"},21702:(M,e,I)=>{I.r(e),I.d(e,{assets:()=>g,contentTitle:()=>a,default:()=>A,frontMatter:()=>N,metadata:()=>D,toc:()=>j});var t=I(87462),i=(I(67294),I(3905));const N={id:"api-WeekBasedCapacityGroup",title:"API - WeekBasedCapacityGroup",description:"API - WeekBasedCapacityGroup"},a=void 0,D={unversionedId:"kits/DCM-Kit/development-view/api-WeekBasedCapacityGroup",id:"kits/DCM-Kit/development-view/api-WeekBasedCapacityGroup",title:"API - WeekBasedCapacityGroup",description:"API - WeekBasedCapacityGroup",source:"@site/docs-kits/kits/DCM-Kit/development-view/api-capacity-group.md",sourceDirName:"kits/DCM-Kit/development-view",slug:"/kits/DCM-Kit/development-view/api-WeekBasedCapacityGroup",permalink:"/docs-kits/next/kits/DCM-Kit/development-view/api-WeekBasedCapacityGroup",draft:!1,tags:[],version:"current",frontMatter:{id:"api-WeekBasedCapacityGroup",title:"API - WeekBasedCapacityGroup",description:"API - WeekBasedCapacityGroup"},sidebar:"kits",previous:{title:"postWeekBasedMaterialDemand",permalink:"/docs-kits/next/kits/DCM-Kit/development-view/plugin-generated-material-demand-api/post-week-based-material-demand"},next:{title:"API Specification",permalink:"/docs-kits/next/category/api-specification-1"}},g={},j=[{value:"WeekBasedCapacityGroup API",id:"weekbasedcapacitygroup-api",level:2},{value:"Roles and Functions",id:"roles-and-functions",level:3},{value:"Data Exchange",id:"data-exchange",level:3},{value:"Open API documentation",id:"open-api-documentation",level:3},{value:"Notice",id:"notice",level:2}],n={toc:j};function A(M){let{components:e,...N}=M;return(0,i.kt)("wrapper",(0,t.Z)({},n,N,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"DCM kit banner",src:I(93191).Z,width:"285",height:"245"})),(0,i.kt)("h2",{id:"weekbasedcapacitygroup-api"},"WeekBasedCapacityGroup API"),(0,i.kt)("p",null,"The WeekBasedCapacityGroup API is owned and registered as an EDC asset by the supplier. The customer provides capacity group data to the API via POST request."),(0,i.kt)("h3",{id:"roles-and-functions"},"Roles and Functions"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Role / Function"),(0,i.kt)("th",{parentName:"tr",align:null},"API Owner"),(0,i.kt)("th",{parentName:"tr",align:null},"POST to API"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Customer"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"X")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Supplier"),(0,i.kt)("td",{parentName:"tr",align:null},"X"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"data-exchange"},"Data Exchange"),(0,i.kt)("mermaid",{value:"sequenceDiagram\n    actor c as Customer \n    participant ce as Customer EDC\n    participant se as Supplier EDC\n    participant a as WeekBasedCapacityGroup API\n    actor s as Supplier\n    \n    rect rgb(217,24,24)\n    s->>+se: Register API as Asset\n    se->>-s: API registered\n    end\n    rect rgb(128,149,00)\n    c->>+ce: Provide WeekBasedCapacityGroup\n    rect rgb(179,203,45)\n    ce->>+se: Initiate Handshake\n    se->>ce: Complete Handshake\n    end\n    ce->>se: Provide WeekBasedCapacityGroup\n    se->>+a: Provide WeekBasedCapacityGroup\n    a->>-se: WeekBasedCapacityGroup consumed\n    se->>-ce: WeekBasedCapacityGroup consumed\n    ce->>-c: WeekBasedCapacityGroup consumed\n    \n    end\n  "}),(0,i.kt)("h3",{id:"open-api-documentation"},"Open API documentation"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"API"),(0,i.kt)("th",{parentName:"tr",align:null},"Link"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"WeekBasedCapacityGroup"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs-kits/next/kits/DCM-Kit/development-view/plugin-generated-capacity-group-api/post-week-based-capacity-group"},"Find here"))))),(0,i.kt)("p",null,"For further details, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://catenax-ev.github.io/docs/next/standards/CX-0128-DemandandCapacityManagementDataExchange"},"CX-0128 Demand and Capacity Management Data Exchange"),"."),(0,i.kt)("h2",{id:"notice"},"Notice"),(0,i.kt)("p",null,"This work is licensed under the ",(0,i.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,i.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2024 ZF Friedrichshafen AG"),(0,i.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2024 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)"),(0,i.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2024 SAP SE"),(0,i.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2024 Volkswagen AG"),(0,i.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2024 Mercedes Benz Group AG"),(0,i.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2024 BASF SE"),(0,i.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2024 SupplyOn AG"),(0,i.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2024 Henkel AG & Co.KGaA"),(0,i.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2024 Fraunhofer-Gesellschaft zur F\xf6rderung der angewandten Forschung e.V (Fraunhofer)"),(0,i.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2024 Contributors to the Eclipse Foundation")))}A.isMDXComponent=!0},93191:(M,e,I)=>{I.d(e,{Z:()=>t});const t="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjg1IiBoZWlnaHQ9IjI0NSIgdmlld0JveD0iMCAwIDI4NSAyNDUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xXzE4MDYpIj4KPHBhdGggZD0iTTEyMy4wNDggOTEuODM2OUMxMzMuNzA1IDg1LjY4NDQgMTUwLjk4NSA4NS42ODQ0IDE2MS42NDIgOTEuODM2OUwyNTQuMzQ1IDE0NS4zNTRDMjY1LjAwMiAxNTEuNTA3IDI2NS4wMDIgMTYxLjQ4MiAyNTQuMzQ1IDE2Ny42MzVMMTYxLjY0MiAyMjEuMTUyQzE1MC45ODUgMjI3LjMwNCAxMzMuNzA1IDIyNy4zMDQgMTIzLjA0OCAyMjEuMTUyTDMwLjM0NTMgMTY3LjYzNUMxOS42ODc5IDE2MS40ODIgMTkuNjg3OCAxNTEuNTA3IDMwLjM0NTMgMTQ1LjM1NEwxMjMuMDQ4IDkxLjgzNjlaIiBmaWxsPSIjRTNERUU2IiBmaWxsLW9wYWNpdHk9IjAuOSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI1My4zOCAxNTguMTFMMTYwLjY3NyAxMDQuNTkzQzE1MC41NTMgOTguNzQ4MyAxMzQuMTM3IDk4Ljc0ODMgMTI0LjAxMyAxMDQuNTkzTDMxLjMxMDIgMTU4LjExQzIxLjE4NTYgMTYzLjk1NSAyMS4xODU2IDE3My40MzIgMzEuMzEwMiAxNzkuMjc3TDEyNC4wMTMgMjMyLjc5NEMxMzQuMTM3IDIzOC42MzkgMTUwLjU1MyAyMzguNjM5IDE2MC42NzcgMjMyLjc5NEwyNTMuMzggMTc5LjI3N0MyNjMuNTA0IDE3My40MzIgMjYzLjUwNCAxNjMuOTU1IDI1My4zOCAxNTguMTFaTTE2MS42NDIgMTA0LjAzNkMxNTAuOTg1IDk3Ljg4MzYgMTMzLjcwNSA5Ny44ODM2IDEyMy4wNDggMTA0LjAzNkwzMC4zNDU0IDE1Ny41NTNDMTkuNjg3OSAxNjMuNzA2IDE5LjY4NzkgMTczLjY4MSAzMC4zNDU0IDE3OS44MzRMMTIzLjA0OCAyMzMuMzUxQzEzMy43MDUgMjM5LjUwNCAxNTAuOTg1IDIzOS41MDQgMTYxLjY0MiAyMzMuMzUxTDI1NC4zNDUgMTc5LjgzNEMyNjUuMDAyIDE3My42ODEgMjY1LjAwMiAxNjMuNzA2IDI1NC4zNDUgMTU3LjU1M0wxNjEuNjQyIDEwNC4wMzZaIiBmaWxsPSIjRTVFMEU3Ii8+CjxwYXRoIGQ9Ik0xMjMuNjY0IDY0LjY5NjhDMTM0LjMyMiA1OC41NDQzIDE1MS42MDEgNTguNTQ0MyAxNjIuMjU5IDY0LjY5NjhMMjU0Ljk2MSAxMTguMjE0QzI2NS42MTkgMTI0LjM2NyAyNjUuNjE5IDEzNC4zNDIgMjU0Ljk2MSAxNDAuNDk0TDE2Mi4yNTkgMTk0LjAxMkMxNTEuNjAxIDIwMC4xNjQgMTM0LjMyMiAyMDAuMTY0IDEyMy42NjQgMTk0LjAxMkwzMC45NjE4IDE0MC40OTRDMjAuMzA0NCAxMzQuMzQyIDIwLjMwNDQgMTI0LjM2NyAzMC45NjE4IDExOC4yMTRMMTIzLjY2NCA2NC42OTY4WiIgZmlsbD0iI0Q2Q0VEQSIvPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kZGRkZF8xXzE4MDYpIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNTMuOTk2IDEzMC45N0wxNjEuMjk0IDc3LjQ1M0MxNTEuMTY5IDcxLjYwODEgMTM0Ljc1NCA3MS42MDgxIDEyNC42MjkgNzcuNDUzTDMxLjkyNjcgMTMwLjk3QzIxLjgwMjEgMTM2LjgxNSAyMS44MDIxIDE0Ni4yOTIgMzEuOTI2NyAxNTIuMTM3TDEyNC42MjkgMjA1LjY1NEMxMzQuNzU0IDIxMS40OTkgMTUxLjE2OSAyMTEuNDk5IDE2MS4yOTQgMjA1LjY1NEwyNTMuOTk2IDE1Mi4xMzdDMjY0LjEyMSAxNDYuMjkyIDI2NC4xMjEgMTM2LjgxNSAyNTMuOTk2IDEzMC45N1pNMTYyLjI1OSA3Ni44OTZDMTUxLjYwMSA3MC43NDM1IDEzNC4zMjIgNzAuNzQzNSAxMjMuNjY0IDc2Ljg5NkwzMC45NjE4IDEzMC40MTNDMjAuMzA0NCAxMzYuNTY2IDIwLjMwNDQgMTQ2LjU0MSAzMC45NjE4IDE1Mi42OTRMMTIzLjY2NCAyMDYuMjExQzEzNC4zMjIgMjEyLjM2MyAxNTEuNjAxIDIxMi4zNjMgMTYyLjI1OSAyMDYuMjExTDI1NC45NjEgMTUyLjY5NEMyNjUuNjE5IDE0Ni41NDEgMjY1LjYxOSAxMzYuNTY2IDI1NC45NjEgMTMwLjQxM0wxNjIuMjU5IDc2Ljg5NloiIGZpbGw9IiNENkNFREEiLz4KPC9nPgo8cGF0aCBkPSJNMTIzLjY2NCAzOC43ODk2QzEzNC4zMjIgMzIuNjM3IDE1MS42MDEgMzIuNjM3IDE2Mi4yNTkgMzguNzg5NkwyNTQuOTYxIDkyLjMwNjhDMjY1LjYxOSA5OC40NTk0IDI2NS42MTkgMTA4LjQzNSAyNTQuOTYxIDExNC41ODdMMTYyLjI1OSAxNjguMTA0QzE1MS42MDEgMTc0LjI1NyAxMzQuMzIyIDE3NC4yNTcgMTIzLjY2NCAxNjguMTA0TDMwLjk2MTggMTE0LjU4N0MyMC4zMDQ0IDEwOC40MzUgMjAuMzA0NCA5OC40NTk0IDMwLjk2MTggOTIuMzA2OEwxMjMuNjY0IDM4Ljc4OTZaIiBmaWxsPSIjQjZBNkJGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjUzLjk5NiAxMDUuMDYzTDE2MS4yOTQgNTEuNTQ1OEMxNTEuMTY5IDQ1LjcwMDkgMTM0Ljc1NCA0NS43MDA5IDEyNC42MjkgNTEuNTQ1OEwzMS45MjY3IDEwNS4wNjNDMjEuODAyMiAxMTAuOTA4IDIxLjgwMjIgMTIwLjM4NCAzMS45MjY3IDEyNi4yMjlMMTI0LjYyOSAxNzkuNzQ3QzEzNC43NTQgMTg1LjU5MiAxNTEuMTY5IDE4NS41OTIgMTYxLjI5NCAxNzkuNzQ3TDI1My45OTYgMTI2LjIyOUMyNjQuMTIxIDEyMC4zODQgMjY0LjEyMSAxMTAuOTA4IDI1My45OTYgMTA1LjA2M1pNMTYyLjI1OSA1MC45ODg4QzE1MS42MDEgNDQuODM2MyAxMzQuMzIyIDQ0LjgzNjMgMTIzLjY2NSA1MC45ODg4TDMwLjk2MTkgMTA0LjUwNkMyMC4zMDQ0IDExMC42NTkgMjAuMzA0NCAxMjAuNjM0IDMwLjk2MTkgMTI2Ljc4NkwxMjMuNjY1IDE4MC4zMDRDMTM0LjMyMiAxODYuNDU2IDE1MS42MDEgMTg2LjQ1NiAxNjIuMjU5IDE4MC4zMDRMMjU0Ljk2MSAxMjYuNzg2QzI2NS42MTkgMTIwLjYzNCAyNjUuNjE5IDExMC42NTkgMjU0Ljk2MSAxMDQuNTA2TDE2Mi4yNTkgNTAuOTg4OFoiIGZpbGw9IiNCNkE2QkYiLz4KPHBhdGggZD0iTTEyMy42NjUgMTEuNjQ5QzEzNC4zMjIgNS40OTY0MiAxNTEuNjAxIDUuNDk2NDEgMTYyLjI1OSAxMS42NDlMMjU0Ljk2MiA2NS4xNjYyQzI2NS42MTkgNzEuMzE4NyAyNjUuNjE5IDgxLjI5NCAyNTQuOTYyIDg3LjQ0NjVMMTYyLjI1OSAxNDAuOTY0QzE1MS42MDEgMTQ3LjExNiAxMzQuMzIyIDE0Ny4xMTYgMTIzLjY2NSAxNDAuOTY0TDMwLjk2MjIgODcuNDQ2NUMyMC4zMDQ4IDgxLjI5NCAyMC4zMDQ4IDcxLjMxODggMzAuOTYyMiA2NS4xNjYyTDEyMy42NjUgMTEuNjQ5WiIgZmlsbD0iIzk2NzZBNiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI1My45OTcgNzcuOTIyNEwxNjEuMjk0IDI0LjQwNTJDMTUxLjE3IDE4LjU2MDMgMTM0Ljc1NCAxOC41NjAzIDEyNC42MyAyNC40MDUyTDMxLjkyNzEgNzcuOTIyNEMyMS44MDI1IDgzLjc2NzMgMjEuODAyNSA5My4yNDM4IDMxLjkyNzEgOTkuMDg4OEwxMjQuNjMgMTUyLjYwNkMxMzQuNzU0IDE1OC40NTEgMTUxLjE3IDE1OC40NTEgMTYxLjI5NCAxNTIuNjA2TDI1My45OTcgOTkuMDg4OEMyNjQuMTIxIDkzLjI0MzggMjY0LjEyMSA4My43NjczIDI1My45OTcgNzcuOTIyNFpNMTYyLjI1OSAyMy44NDgyQzE1MS42MDEgMTcuNjk1NiAxMzQuMzIyIDE3LjY5NTYgMTIzLjY2NSAyMy44NDgyTDMwLjk2MjIgNzcuMzY1NEMyMC4zMDQ4IDgzLjUxOCAyMC4zMDQ4IDkzLjQ5MzIgMzAuOTYyMiA5OS42NDU4TDEyMy42NjUgMTUzLjE2M0MxMzQuMzIyIDE1OS4zMTYgMTUxLjYwMSAxNTkuMzE2IDE2Mi4yNTkgMTUzLjE2M0wyNTQuOTYyIDk5LjY0NThDMjY1LjYxOSA5My40OTMyIDI2NS42MTkgODMuNTE4IDI1NC45NjIgNzcuMzY1NEwxNjIuMjU5IDIzLjg0ODJaIiBmaWxsPSIjOTY3NkE2Ii8+CjxwYXRoIGQ9Ik0xMzguMjE3IDczLjI2NzFMMTE3LjcyNSA4NS4wOTc1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQiLz4KPHBhdGggZD0iTTE2MS42MzcgODkuODYwNEwxNDMuODA2IDEwMC4xNTQiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIvPgo8cGF0aCBkPSJNMTU4LjQ0NCA3Ni42NDdMMTMwLjc2NSA5Mi42MjU3IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQiLz4KPHBhdGggZD0iTTExNy43MjUgNzAuMDQwNUwxMDQuNjg0IDc3LjU2OSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjxwYXRoIGQ9Ik0xMTUuMDYzIDU2LjUyTDkxLjY0MyA3MC4wNDA1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQiLz4KPHBhdGggZD0iTTEyNC42NDQgNDkuNDUyNUwxMjQuNzMzIDUxLjc5NjhDMTI1LjA0IDU5LjkwNjUgMTM3LjA0IDY2LjIxNzMgMTUxLjA1NiA2NS42Mzk1VjY1LjYzOTVDMTY2LjU4OSA2NC45OTkxIDE3OS4yMjUgNzIuNzUzOSAxNzcuMTY5IDgxLjY2NTVMMTc2Ljg1NiA4My4wMjMzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQiLz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kZGRkZF8xXzE4MDYiIHg9Ii00Mi4wMzEyIiB5PSI1OC4yODE3IiB3aWR0aD0iMzkxLjk4NSIgaGVpZ2h0PSI0MTguNTQzIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xIDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfMV8xODA2Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHg9IjEiIGR5PSIxMiIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMyIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xIDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvd18xXzE4MDYiIHJlc3VsdD0iZWZmZWN0Ml9kcm9wU2hhZG93XzFfMTgwNiIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KPGZlT2Zmc2V0IGR4PSIzIiBkeT0iNDciLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMjQiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDkgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iZWZmZWN0Ml9kcm9wU2hhZG93XzFfMTgwNiIgcmVzdWx0PSJlZmZlY3QzX2Ryb3BTaGFkb3dfMV8xODA2Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHg9IjYiIGR5PSIxMDciLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMzIiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDUgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iZWZmZWN0M19kcm9wU2hhZG93XzFfMTgwNiIgcmVzdWx0PSJlZmZlY3Q0X2Ryb3BTaGFkb3dfMV8xODA2Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHg9IjExIiBkeT0iMTkwIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjM4Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjAxIDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9ImVmZmVjdDRfZHJvcFNoYWRvd18xXzE4MDYiIHJlc3VsdD0iZWZmZWN0NV9kcm9wU2hhZG93XzFfMTgwNiIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDVfZHJvcFNoYWRvd18xXzE4MDYiIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMV8xODA2Ij4KPHJlY3Qgd2lkdGg9IjI4NC4zNDIiIGhlaWdodD0iMjQzLjk4MyIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC41MDg3ODkpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="}}]);