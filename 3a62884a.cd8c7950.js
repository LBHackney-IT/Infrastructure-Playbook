(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{135:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||s[d]||i;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(135)),o={id:"notes",title:"Release Notes"},c={unversionedId:"notes",id:"notes",isDocsHomePage:!1,title:"Release Notes",description:"Target Audience",source:"@site/docs/notes.md",slug:"/notes",permalink:"/Infrastructure-Playbook/notes",editUrl:"https://github.com/LBHackney-IT/Infrastructure-Playbook/edit/master/docs/notes.md",version:"current",sidebar:"docs",next:{title:"Introduction",permalink:"/Infrastructure-Playbook/"}},l=[{value:"Target Audience",id:"target-audience",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Feedback",id:"feedback",children:[]}],u={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"target-audience"},"Target Audience"),Object(i.b)("p",null,"All HackIT internal developers and external agencies developer collaborating on Hackney projects."),Object(i.b)("h2",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Align the API playbook with the new design system to maintain consistency across the board."),Object(i.b)("li",{parentName:"ul"},"Self training modules"),Object(i.b)("li",{parentName:"ul"},"Serverless Lambda framework"),Object(i.b)("li",{parentName:"ul"},"Linting"),Object(i.b)("li",{parentName:"ul"},"Static Code Analysis"),Object(i.b)("li",{parentName:"ul"},"DevOps Practices (including videos)"),Object(i.b)("li",{parentName:"ul"},"Updated API boilerplate"),Object(i.b)("li",{parentName:"ul"},"Monitoring and alerts via Cloudwatch canaries."),Object(i.b)("li",{parentName:"ul"},"Uptime Monitoring using X-Ray"),Object(i.b)("li",{parentName:"ul"},"Performance monitoring using Lambda Insight"),Object(i.b)("li",{parentName:"ul"},"Standardised Error Messages"),Object(i.b)("li",{parentName:"ul"},"Preferred Tech Stack"),Object(i.b)("li",{parentName:"ul"},"API Boilerplate - Base API "),Object(i.b)("li",{parentName:"ul"},"Clean Architecture"),Object(i.b)("li",{parentName:"ul"},"Entity Framework"),Object(i.b)("li",{parentName:"ul"},"AWS/ECS with Fargate "),Object(i.b)("li",{parentName:"ul"},"Lambda Functions "),Object(i.b)("li",{parentName:"ul"},"Docker Containers"),Object(i.b)("li",{parentName:"ul"},"Application Logging Guidelines"),Object(i.b)("li",{parentName:"ul"},"Lambda Authoriser "),Object(i.b)("li",{parentName:"ul"},"Setting Up DMS"),Object(i.b)("li",{parentName:"ul"},"Pipeline Implementation"),Object(i.b)("li",{parentName:"ul"},"End to End Training - Create your First endpoint video"),Object(i.b)("li",{parentName:"ul"},"Contact Us")),Object(i.b)("h2",{id:"feedback"},"Feedback"),Object(i.b)("p",null,"We would be pleased to hear from you about our new iteration of the API Playbook. Please feel free to give us your feedback."))}b.isMDXComponent=!0}}]);