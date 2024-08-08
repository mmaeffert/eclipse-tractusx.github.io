"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[79672],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>f});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=l(i),p=o,f=u["".concat(c,".").concat(p)]||u[p]||h[p]||a;return i?n.createElement(f,s(s({ref:t},d),{},{components:i})):n.createElement(f,s({ref:t},d))}));function f(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,s=new Array(a);s[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[u]="string"==typeof e?e:o,s[1]=r;for(var l=2;l<a;l++)s[l]=i[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},28396:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var n=i(87462),o=(i(67294),i(3905));const a={sidebar_class_name:"hidden"},s=void 0,r={unversionedId:"kits/Industry Core Kit/Software Development View/part_uniqueidpush",id:"version-24.08/kits/Industry Core Kit/Software Development View/part_uniqueidpush",title:"part_uniqueidpush",description:"\x3c!--",source:"@site/docs-kits_versioned_docs/version-24.08/kits/Industry Core Kit/Software Development View/part_uniqueidpush.mdx",sourceDirName:"kits/Industry Core Kit/Software Development View",slug:"/kits/Industry Core Kit/Software Development View/part_uniqueidpush",permalink:"/docs-kits/kits/Industry Core Kit/Software Development View/part_uniqueidpush",draft:!1,tags:[],version:"24.08",frontMatter:{sidebar_class_name:"hidden"},sidebar:"kits",previous:{title:"part_aspect-model-overview",permalink:"/docs-kits/kits/Industry Core Kit/Software Development View/part_aspect-model-overview"},next:{title:"part_bill-of-materials",permalink:"/docs-kits/kits/Industry Core Kit/part_bill-of-materials"}},c={},l=[{value:"Unique ID Push",id:"unique-id-push",level:3},{value:"Connect to Parent",id:"connect-to-parent",level:5},{value:"Connect to Child",id:"connect-to-child",level:5},{value:"Prerequisites and Constraints",id:"prerequisites-and-constraints",level:4},{value:"Unique ID Push Process Overview",id:"unique-id-push-process-overview",level:4},{value:"Connect to Parent",id:"connect-to-parent-1",level:5},{value:"Connect to Child",id:"connect-to-child-1",level:5},{value:"Schema of Unique ID Push Notifications",id:"schema-of-unique-id-push-notifications",level:4},{value:"Connect to Parent",id:"connect-to-parent-2",level:5},{value:"Connect to Child",id:"connect-to-child-2",level:5},{value:"Notification Receiver",id:"notification-receiver",level:4},{value:"EDC Asset",id:"edc-asset",level:5},{value:"EDC Policies",id:"edc-policies",level:5},{value:"Backend Data Service to Process Unique ID Push Notifications",id:"backend-data-service-to-process-unique-id-push-notifications",level:5},{value:"Notification Sender",id:"notification-sender",level:4},{value:"Connect to Parent (Sender = Supplier)",id:"connect-to-parent-sender--supplier",level:5},{value:"Connect to Child (Sender = Customer)",id:"connect-to-child-sender--customer",level:5},{value:"Mapping BPN to EDC URL with EDC Discovery API",id:"mapping-bpn-to-edc-url-with-edc-discovery-api",level:5}],d={toc:l};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"unique-id-push"},"Unique ID Push"),(0,o.kt)("p",null,"Unique ID Push notifications provide the possibility to push specific information to a business partner in the value chain (one level up or one level down). This can help to provide faster information to reduce necessary information collection activities (connect-to-parent) or to provide information that is not available at all at the receiver side (connect-to-child)."),(0,o.kt)("p",null,"The solution is based on notification assets in the EDC (which is the same approach that is used for quality incidents). The notification receiver creates a notification asset in the EDC and the notification sender sends his notifications to this notification asset. As this notification asset is a general EDC asset - as for all EDC assets - access policies, usage policies and contract definitions must be created."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u270b It is important to understand that the receiver creates EDC asset and policies, and thus, the sender of the Unique ID push notification must check during the EDC negotiation process if the conditions the receiver offers are acceptable for the sender.")),(0,o.kt)("p",null,'Currently there are two types of Unique ID Push Notifications available: "Connect to Parent" and "Connect to Child".'),(0,o.kt)("h5",{id:"connect-to-parent"},"Connect to Parent"),(0,o.kt)("p",null,'Unique ID Push notifications of type "connect-to-parent" are a way for a manufacturer to notify a customer as soon as possible when a new digital twin for a part is available.'),(0,o.kt)("p",null,"The sender of the notification is the supplier of a part item and the receiver of the notification is the customer of that part item. The Unique ID of that part is sent in the notification."),(0,o.kt)("h5",{id:"connect-to-child"},"Connect to Child"),(0,o.kt)("p",null,"Unique ID Push notifications of type \"connect-to-child\" are a way for a manufacturer to notify a supplier when the supplier's part has been used (or is to be used in the case of part type) in the assembly or production of the manufacturer's product. This will result in an update of the corresponding SingleLevelUsage aspect at the supplier side."),(0,o.kt)("p",null,"The sender of the notification is the customer of a part item or type and the receiver of the notification is the supplier of that part item or type. The Unique ID of that part, quantity and dates are sent in the notification."),(0,o.kt)("p",null,"Connect to Parent and Connect to Child notifications can be applied to Digital Twins for part instances and for part types."),(0,o.kt)("h4",{id:"prerequisites-and-constraints"},"Prerequisites and Constraints"),(0,o.kt)("p",null,"In order to be able to push Unique ID(s) of part(s) to the correct partner, it is required that the sender pushing the Unique ID notification is aware of the BPN of the receiver of the notification or has enough data in its context to use BPDM functions to determine the BPN Number of the receiver."),(0,o.kt)("p",null,"For actively pushing Unique ID notifications, an EDC is required and the data provider needs to be enabled to execute the complete process including EDC communication and HTTP Push (i.e., HTTP POST) of the payload."),(0,o.kt)("p",null,"Secondly, EDCs are being used for the exchange and it is currently required to offer a HTTP POST API to receive the Unique ID notifications push at the receiver's side. This API needs to be registered in the EDC Catalog as a data offer and requires specific properties to be set to standardized values, as this allows discoverability. Details still tbd."),(0,o.kt)("h4",{id:"unique-id-push-process-overview"},"Unique ID Push Process Overview"),(0,o.kt)("h5",{id:"connect-to-parent-1"},"Connect to Parent"),(0,o.kt)("p",null,"How the actual process is triggered is application specific. It is recommended to trigger the push of Unique IDs towards the customer after the Goods Issue has been booked, since commonly at that point the serial numbers/batch numbers of the parts being delivered are fixed in the logistics process and shall be contained in delivery documents, EDI Messages and/or any internal representation of the received items (non-Catena-X communication)."),(0,o.kt)("p",null,"The Unique ID push is initiated by the supplier (acting as sender) towards their customer (acting as receiver). Since the Unique ID of the asset (i.e., serial unit / batch) is unknown in the logistics process, the message needs to include local identifiers to be matched towards the information from the delivery documents and furthermore the internal data of the recipient's traceability solution."),(0,o.kt)("p",null,"Upon receipt of the message, the customer needs to match the local identifiers with its internal traceability records and attach each Unique ID to the respective data set. How this is done is depending on the customer's internal systems:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If there is an object for incoming deliveries, this event could be updated.\nAlternatively, if only production events are tracked, the data could be integrated at this point into the data provisioning pipeline's data structure for consumed materials."),(0,o.kt)("li",{parentName:"ul"},"In the end this enables the customer to integrate the child parts into the SingleLevelBomAsBuilt aspect.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Unique ID Push Process",src:i(80981).Z,width:"1310",height:"562"})),(0,o.kt)("h5",{id:"connect-to-child-1"},"Connect to Child"),(0,o.kt)("p",null,'How the actual process is triggered is application specific. It is recommended to trigger the push of "connect-to-child" towards the supplier earliest after the singleLevelBom aspect (AsBuilt oder AsPlanned) has been created, since at that point all relevant information is available. It is also possible to collect "connect-to-child" notification content at customer side and send this in a list to the supplier, e.g. once a day or once a week.'),(0,o.kt)("p",null,"The Unique ID push is initiated by the customer (acting as sender) towards their supplier (acting as receiver). The body information comes from the corresponding singleLevelBom aspect."),(0,o.kt)("p",null,"Upon receipt of the message, the supplier needs to update the corresponding singleLevelUsageAspect(s) at his side. All information required can be taken from the body in the notification."),(0,o.kt)("h4",{id:"schema-of-unique-id-push-notifications"},"Schema of Unique ID Push Notifications"),(0,o.kt)("p",null,"The Unique ID Push notifications have a standardized format. Schemas of these notifications are described in detail in the Unique ID Push Open API specification. The standardized version of this API is ",(0,o.kt)("a",{target:"_blank",href:i(59136).Z},"2.0.0"),". Version ",(0,o.kt)("a",{target:"_blank",href:i(578).Z},"2.1.0")," is not (yet) standardized, but backwards compatible, and extends v2.0.0 with the Connect-to-Child feature."),(0,o.kt)("h5",{id:"connect-to-parent-2"},"Connect to Parent"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For the ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," field in the notification header, use the following string for Unique ID Push notifications as described in this KIT: ",(0,o.kt)("inlineCode",{parentName:"p"},"IndustryCore-UniqueIDPush-ConnectToParent:<API version>"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Adding the customer part ID to the notification is optional. The main reason for this is that it cannot be guaranteed that every manufacturer knows the customer part ID for their parts. But, in case the manufacturer knows the customer and the corresponding customer part ID of its part though, it is required to always add the customer part ID to the notification."))),(0,o.kt)("h5",{id:"connect-to-child-2"},"Connect to Child"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For the ",(0,o.kt)("inlineCode",{parentName:"li"},"context")," field in the notification header, use the following string for Unique ID Push notifications as described in this KIT: ",(0,o.kt)("inlineCode",{parentName:"li"},"IndustryCore-UniqueIDPush-ConnectToChild:<API version>"),".")),(0,o.kt)("h4",{id:"notification-receiver"},"Notification Receiver"),(0,o.kt)("p",null,"Here is a short overview what the receiver has to do when they want to support Unique ID Push notifications. This is an optional feature."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"}," Connect to Parent ")," The receiver in this scenario is the customer of a part."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"}," Connect to Child ")," The receiver in this scenario is the supplier of a part."),(0,o.kt)("li",{parentName:"ul"},"The receiver must create a EDC asset in their EDC that works as the endpoint for receiving notifications. Also, access & usage policies as described below must be configured."),(0,o.kt)("li",{parentName:"ul"},"The EDC in which the notification EDC asset was created must be registered at the EDC Discovery (so that the sender can find the partner's EDC which should receive notifications)"),(0,o.kt)("li",{parentName:"ul"},"When the Receiver receives a Unique ID Push notification, it must process this notification after it was received by the EDC (in a Backend Data Service)"),(0,o.kt)("li",{parentName:"ul"},"How the Receiver processes the notification is up to them, but the following steps are recommended:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Verify the correctness of the data in the notification (i.e., the receiver is actually the customer of this part)."),(0,o.kt)("li",{parentName:"ul"},"Store the notification data for later."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Connect to Parent")," Use this data when the digital twin for the part into which the delivered part is built into is created instead of doing a lookup to a supplier's Digital Twin Registry."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Connect to Child")," Use this data to update the corresponding singleLevelUsage aspect")))),(0,o.kt)("h5",{id:"edc-asset"},"EDC Asset"),(0,o.kt)("p",null,"For the EDC asset for receiving Unique ID Push notifications, the following properties must be set:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": {\n    "edc": "https://w3id.org/edc/v0.0.1/ns/",\n    "cx-common": "https://w3id.org/catenax/ontology/common#",\n    "cx-taxo": "https://w3id.org/catenax/taxonomy#",\n    "dct": "https://purl.org/dc/terms/"\n  },\n  "@id": "{{ _.assetId }}",\n  "properties": {\n    "dct:type": { "@id": "cx-taxo:{{ _.notificationType }}" },\n    "cx-common:version": "2.1"\n  }\n}\n')),(0,o.kt)("p",null,"Properties ",(0,o.kt)("inlineCode",{parentName:"p"},"https://purl.org/dc/terms/type")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"https://w3id.org/catenax/ontology/common#version")," are used to classify the asset and are explained in the ",(0,o.kt)("a",{parentName:"p",href:"https://eclipse-tractusx.github.io/docs-kits/kits/Digital%20Twin%20Kit/Software%20Development%20View/Specification%20Digital%20Twin%20KIT#registration-at-edc"},"Digital Twin KIT")," in more detail."),(0,o.kt)("p",null,"For ",(0,o.kt)("inlineCode",{parentName:"p"},"{{ _.notificationType }}"),", use"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"UniqueIdPushConnectToParentNotification")," for the Connect-To-Parent notification asset and"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"UniqueIdPushConnectToChildNotification")," for the Connect-To-Child notification asset.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u270b Note that the API version can be different depending on what Unique ID Push API version your company supports.")),(0,o.kt)("h5",{id:"edc-policies"},"EDC Policies"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Access Policies"),"\nA data provider can decide on its own what access policies they want to define for their notification asset. Based on the purpose of the asset, all suppliers of the data provider should in general be allowed to send notifications to this asset. Therefore, either a public access policy or a BPN-based access policy (allowing all suppliers) should be used."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage Policies"),"\nIn general, a data provider is free to decide which usage policies to define for its assets. For notifications, though, the data provider is actually the receiver of notifications, i.e., the usage policy here has the purpose to define what the data provider does or is allowed to do with the notifications. It's something the sender of the notification has to rely on and accept when sending its notification."),(0,o.kt)("p",null,"Keep in mind that usage policies currently aren't technically enforced by the EDC or other components."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u270b ",(0,o.kt)("strong",{parentName:"p"},"Usage Policy for Unique ID Push"),'\nThe Unique ID push notification endpoints are protected with a purpose-based usage policy and "cx.core.industrycore:1" as purpose.')),(0,o.kt)("h5",{id:"backend-data-service-to-process-unique-id-push-notifications"},"Backend Data Service to Process Unique ID Push Notifications"),(0,o.kt)("p",null,"The receiver must setup a backend data service that provides an HTTP Endpoint for notifications. All endpoints are described in detail in the Unique ID Push Open API specification. The standardized version of this API is ",(0,o.kt)("a",{parentName:"p",href:"../../../../openApi/industrycore/unique-id-push.yaml"},"2.0.0"),". Version ",(0,o.kt)("a",{parentName:"p",href:"../../../../openApi/industrycore/unique-id-push_2-1-0.yaml"},"2.1.0")," is not (yet) standardized, but backwards compatible, and extends v2.0.0 with the Connect-to-Child feature."),(0,o.kt)("h4",{id:"notification-sender"},"Notification Sender"),(0,o.kt)("p",null,"Here is a short overview what the sender has to do when they want to support Unique ID Push notifications. This is an optional feature."),(0,o.kt)("h5",{id:"connect-to-parent-sender--supplier"},"Connect to Parent (Sender = Supplier)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Sender in this scenario is the manufacturer or supplier of a part."),(0,o.kt)("li",{parentName:"ul"},"When a new digital twin for a part was created, the manufacturer is responsible to send a Unique ID Push notification for this twin to the customer of this part."),(0,o.kt)("li",{parentName:"ul"},"It is recommended to send this notification as soon as possible, i.e., directly after the digital twin was created.")),(0,o.kt)("h5",{id:"connect-to-child-sender--customer"},"Connect to Child (Sender = Customer)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Sender in this scenario is the consumer of the supplied part."),(0,o.kt)("li",{parentName:"ul"},"When the supplied part is used in the production or assembly at the customer side, the customer is responsible to send a Unique ID Push notification for the twin of the used part to the supplier of this part. This is known by the customer when the singleLevelBom aspect is created or updated."),(0,o.kt)("li",{parentName:"ul"},"This notification can be sent immediately or collected to be sent when convenient, e.g. once a day or once a week, depending on the use case.")),(0,o.kt)("h5",{id:"mapping-bpn-to-edc-url-with-edc-discovery-api"},"Mapping BPN to EDC URL with EDC Discovery API"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Connect to Parent")," The sender must first find the EDC of the customer (receiver) to which the notification should be sent to. For this, the BPN of the customer is required."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Connect to Child")," After creating the singleLevelBom aspect the sender should already know the BPN of the supplier (receiver)."),(0,o.kt)("p",null,"With this, the EDC Discovery can be used to query for all EDCs of the receiver. After that, the data catalog of each of these EDCs must be queried for the notification EDC asset as described above. If this notification EDC asset is found in one of these EDCs, the notification can be sent."),(0,o.kt)("p",null,"There should only be one EDC which provides the notification EDC asset for Unique ID Push. If more than one EDC (for the same BPN/partner) are found, this is considered a misconfiguration of the corresponding partner."))}u.isMDXComponent=!0},59136:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/files/unique-id-push-3bd97cbbb7d2fd026c799cbef2830ebc.yaml"},578:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/files/unique-id-push_2-1-0-0afd211c0d84f0e54ad966891bf9987c.yaml"},80981:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/unique_id_push_process-f39f701d98ca8a7046544c95e1dc6d14.png"}}]);