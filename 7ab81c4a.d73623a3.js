(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(3),a=n(7),r=(n(0),n(137)),i={id:"documentation",title:"API Documentation"},c={unversionedId:"documentation",id:"documentation",isDocsHomePage:!1,title:"API Documentation",description:"Introduction",source:"@site/docs/documentation.md",slug:"/documentation",permalink:"/Infrastructure-Playbook/documentation",editUrl:"https://github.com/LBHackney-IT/Infrastructure-Playbook/edit/master/docs/documentation.md",version:"current"},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Purpose",id:"purpose",children:[]},{value:"SwaggerHub",id:"swaggerhub",children:[]},{value:"Documenting APIs",id:"documenting-apis",children:[]},{value:"Where to find SwaggerHub",id:"where-to-find-swaggerhub",children:[]}],l={toc:s};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"At Hackney, we believe in working in a collaborative way and this is embedded into our API development process. Before commencing the implementation stage, each API endpoint will first need to be documented using SwaggerHub. "),Object(r.b)("p",null,"The benefits of this include:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Open specification standards."),Object(r.b)("li",{parentName:"ul"},"Opportunity to mock the API and avoid possible blockers for front end development."),Object(r.b)("li",{parentName:"ul"},"Opportunity to share and reach a common agreement of what the API request and response should look like before any work has commenced.")),Object(r.b)("h2",{id:"purpose"},"Purpose"),Object(r.b)("p",null,"The documentation aids our collaboration process, as it is shared with the whole team. People, both from technical and non-technical backgrounds, can provide feedback and request changes. This can save hours of development and also ensures that every team member has an understanding of the main question \u2014 what will this API do?"),Object(r.b)("p",null,"We have chosen SwaggerHub as a tool to document our APIs as it contributes to the efficiency of our development process, by giving us a central point of reference, built collaboratively, with a defined objective for the eventual shape of the API."),Object(r.b)("h2",{id:"swaggerhub"},"SwaggerHub"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," You can start by watching our overview video: ")),Object(r.b)("figure",{class:"video-container"},Object(r.b)("iframe",{width:"100%",src:"https://www.youtube.com/embed/QYQNgeDuqok",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"}," SwaggerHub ")," is an integrated API development platform that brings together all the core capabilities of the open source Swagger framework, along with additional advanced capabilities to build, document, manage, and deploy your APIs."),Object(r.b)("p",null,"SwaggerHub allows us to build an implementation specification, and serves as documentation for the API we are developing. In this way, developers have clearly defined requirements of how the API endpoint they are working on needs to look \u2014 this includes request parameters, response object and error responses."),Object(r.b)("p",null,"Additionally, we share the API blueprint with other relevant parties, such as the Product Owner, to confirm that the data, that is part of the request and response of the API, is correct, based on the business area understanding of the wider team and any prior discovery work completed. It is a way of getting everyone from the team to work towards the same, shared goal."),Object(r.b)("h2",{id:"documenting-apis"},"Documenting APIs"),Object(r.b)("p",null,"The process of documenting API endpoints involves working with a YAML file, where we would specify information such as the path to the API endpoint, the search parameters, API response object, the data types used and whether input fields are mandatory or not."),Object(r.b)("p",null,Object(r.b)("img",{alt:"YAML file",src:n(214).default}),"\n",Object(r.b)("em",{parentName:"p"},"The YAML file"),"\n",Object(r.b)("img",{alt:"Open API generated documentation",src:n(215).default}),"\n",Object(r.b)("em",{parentName:"p"},"The generated documentation")),Object(r.b)("p",null,"SwaggerHub\u2019s online editor automatically validates the YAML file produced and allows developers to instantly see any changes they make by reflecting them onto the visual representation of the API endpoint. For easy visualisation, SwaggerHub interprets the OpenAPI document as easy to read documentation. This UI clearly lays out the endpoints for the API, which the development team can use for reference when writing code."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Example payload",src:n(216).default})),Object(r.b)("p",null,Object(r.b)("img",{alt:"Models used in the response",src:n(217).default}),"\n",Object(r.b)("em",{parentName:"p"},"The documentation outlines an example payload and the models which will be used")),Object(r.b)("p",null,"Documenting the API with SwaggerHub means that we have a consistent specification to follow throughout the development of the API.\nThis is beneficial for the team as we can refer to the swagger docs to confirm that the API is functioning as specified and that the completed API matches the swagger doc specification."),Object(r.b)("p",null,"At the end of the project, we can continue to use SwaggerHub as documentation, giving an easy summary of the functions of the API."),Object(r.b)("p",null,"Additionally, SwaggerHub provides a way to mock the APIs developed via the tool and make requests against them. This is particularly useful when front end and back end teams are working on the same project. Often, front end work might get blocked as it has a dependency on an API.\nProviding a mock API and API blueprints will remove this blocker as it will give the front end developers all the information they need to proceed with their work, while back end developers can focus on developing good, reliable and resilient APIs."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"This is highly important as it avoids the situation where back-end developers would be rushed to deliver thier work in a quicker manner so that it doesn't block other project work, which may result in lower quality APIs. ")),Object(r.b)("h2",{id:"where-to-find-swaggerhub"},"Where to find SwaggerHub"),Object(r.b)("p",null,"Hackney SwaggerHub is located at ",Object(r.b)("a",{parentName:"p",href:"https://app.swaggerhub.com/organizations/Hackney"},"https://app.swaggerhub.com/organizations/Hackney"),"."),Object(r.b)("p",null,"All the Platform APIs in development have been documented and are viewable on the SwaggerHub."))}u.isMDXComponent=!0},137:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=o,h=d["".concat(i,".").concat(b)]||d[b]||p[b]||r;return n?a.a.createElement(h,c(c({ref:t},l),{},{components:n})):a.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},214:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/swagger_yaml-513beff4ebb5ec56b910fc7e06d07b72.png"},215:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/swagger_generated_spec-ff4154c6b00e8575930ea38dcc36651e.png"},216:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/swagger_example_payload-1e0fd775c1ab2abcabc0c69359729a6a.png"},217:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/swagger_models-e326568cfd202b1ed3586b880f435f52.png"}}]);