"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[70613],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(r),f=i,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(d,a(a({ref:t},l),{},{components:r})):n.createElement(d,a({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[m]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},79843:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const o={slug:"security-office-hour-2024-02-29",title:"Security Office Hour 29.02.2024",authors:["daniel_dilger"],tags:["meeting-minutes","community","security"]},a=void 0,s={permalink:"/community/meeting-minutes/security-office-hour-2024-02-29",source:"@site/blog-meeting-minutes/2024-02-29-security-hour.md",title:"Security Office Hour 29.02.2024",description:"Security Office Hour meeting minutes",date:"2024-02-29T00:00:00.000Z",formattedDate:"February 29, 2024",tags:[{label:"meeting-minutes",permalink:"/community/meeting-minutes/tags/meeting-minutes"},{label:"community",permalink:"/community/meeting-minutes/tags/community"},{label:"security",permalink:"/community/meeting-minutes/tags/security"}],hasTruncateMarker:!1,authors:[{name:"Daniel Dilger",title:"Consortia Security Team Member",url:"https://github.com/mm73628486283/",key:"daniel_dilger"}],frontMatter:{slug:"security-office-hour-2024-02-29",title:"Security Office Hour 29.02.2024",authors:["daniel_dilger"],tags:["meeting-minutes","community","security"]},prevItem:{title:"Tractus-X Office Hour 01.03.2024",permalink:"/community/meeting-minutes/office-hour-2024-03-01"},nextItem:{title:"Office Hour 23.02.2024",permalink:"/community/meeting-minutes/office-hour-2024-02-23"}},u={authorsImageUrls:[void 0]},c=[{value:"Security Office Hour meeting minutes",id:"security-office-hour-meeting-minutes",level:2},{value:"Announcements",id:"announcements",level:3},{value:"Open Discussions",id:"open-discussions",level:3}],l={toc:c};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"security-office-hour-meeting-minutes"},"Security Office Hour meeting minutes"),(0,i.kt)("h3",{id:"announcements"},"Announcements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Security team approvals for most projects in scope of release 24.03 have been completed."),(0,i.kt)("li",{parentName:"ul"},"Upcoming changes for release 24.05 will focus on FOSS security tools, including",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"switch from Veracode to CodeQL for SAST,"),(0,i.kt)("li",{parentName:"ul"},"switch from Gitguardian to gitleaks for secrets scanning,"),(0,i.kt)("li",{parentName:"ul"},"DAST will not be part of the upcoming TRG until further notice."))),(0,i.kt)("li",{parentName:"ul"},"DAST was removed from TRG due to issues with authenticated scans and SARIF report as scanning alerts in repository security section.")),(0,i.kt)("h3",{id:"open-discussions"},"Open Discussions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An overarching issue for tracking the tool shifts was discussed, as it is necessary for proper planning by teams.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Teams need to estimate efforts to adjust Github workflows"))),(0,i.kt)("li",{parentName:"ul"},"The PR for the new Security TRG was discussed, which includes a new requirement of remediation of findings with medium severity, but not for the 25.05 release.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Concerns were raised about the need for additional planned team resources for triaging these issues, and it was suggested that the TRG should be finalized and teams made aware."))),(0,i.kt)("li",{parentName:"ul"},"What are best-practices for scheduling security tools Action workflows, with every PR or another frequency?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The TRG claims at least once, this is mandatory baseline for all."),(0,i.kt)("li",{parentName:"ul"},"Best practice is more frequently, recommendations differ per tool (e.g. secret scanning for every PR, dependency scan on a weekly basis)."),(0,i.kt)("li",{parentName:"ul"},"The trigger will be on push + on pull + scheduled - frequency depends on repositories activity, so the team has to decide."),(0,i.kt)("li",{parentName:"ul"},"Best practice recommendations will be published in the sig-security repository.")))))}m.isMDXComponent=!0}}]);