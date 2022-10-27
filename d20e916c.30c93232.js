(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{100:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return c}));var n=r(3),o=r(7),a=(r(0),r(112)),i={id:"supported_and_unsupported",title:"Supported and unsupported services"},s={unversionedId:"supported_and_unsupported",id:"supported_and_unsupported",isDocsHomePage:!1,title:"Supported and unsupported services",description:"Supported services",source:"@site/docs/supported_and_unsupported.md",slug:"/supported_and_unsupported",permalink:"/Infrastructure-Playbook/supported_and_unsupported",editUrl:"https://github.com/LBHackney-IT/Infrastructure-Playbook/edit/master/docs/supported_and_unsupported.md",version:"current",sidebar:"docs",previous:{title:"SSO sync job",permalink:"/Infrastructure-Playbook/sso_sync"},next:{title:"AppStream and Globalprotect",permalink:"/Infrastructure-Playbook/appstream_globalprotect"}},u=[{value:"Supported services",id:"supported-services",children:[]},{value:"Supported OS images",id:"supported-os-images",children:[{value:"Windows Server",id:"windows-server",children:[]},{value:"Linux",id:"linux",children:[]}]},{value:"Unsupported services",id:"unsupported-services",children:[]}],p={toc:u};function c(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"supported-services"},"Supported services"),Object(a.b)("p",null,"All AWS services are supported, except for the services listed below. This does not mean that we have experience with all services and can always help, but we will do our best to support you with any issues you encounter. If you are planning to use a service that is not currently in use by another team, please have a chat with us first so that we are aware. "),Object(a.b)("p",null,"The infrastructure pipeline is based on GitHub Actions and we support those pipelines built on our model. "),Object(a.b)("h2",{id:"supported-os-images"},"Supported OS images"),Object(a.b)("p",null,"We support the following OS images on EC2:"),Object(a.b)("h3",{id:"windows-server"},"Windows Server"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Microsoft Windows Server 2019 Base"),Object(a.b)("li",{parentName:"ul"},"Microsoft Windows Server 2019 with SQL Server 2017 Standard"),Object(a.b)("li",{parentName:"ul"},"Microsoft Windows Server 2019 with SQL Server 2019 Standard"),Object(a.b)("li",{parentName:"ul"},"Microsoft Windows Server 2016"),Object(a.b)("li",{parentName:"ul"},"Microsoft Windows Server 2016 with SQL Server 2016 Standard")),Object(a.b)("h3",{id:"linux"},"Linux"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Ubuntu "),Object(a.b)("li",{parentName:"ul"},"Debian"),Object(a.b)("li",{parentName:"ul"},"RedHat")),Object(a.b)("p",null,"The patching module can be used for scanning and/or patching the EC2 instances for the operating systems mentioned above. Work is in progress to create Hackney-specific AMIs that can be used for deploying EC2 instances. The documentation will be updated when this work is complete. "),Object(a.b)("h2",{id:"unsupported-services"},"Unsupported services"),Object(a.b)("p",null,"There are very few unsupported services. Some services are restricted to the Cloud Engineering team only. It should be noted that networking resources in particular are restricted and can only be created by the Cloud Engineering team."),Object(a.b)("p",null,"As a general rule, we do not support:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Oracle databases"),Object(a.b)("li",{parentName:"ul"},"Networking components other than the Hub"),Object(a.b)("li",{parentName:"ul"},"Tooling other than that found in the Infrastructure repo"),Object(a.b)("li",{parentName:"ul"},"CircleCI and other pipelines not built on our GitHub Actions model")),Object(a.b)("p",null,"This list will be reviewed and amended periodically. "))}c.isMDXComponent=!0},112:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),c=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=c(r),b=n,m=l["".concat(i,".").concat(b)]||l[b]||d[b]||a;return r?o.a.createElement(m,s(s({ref:t},p),{},{components:r})):o.a.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);