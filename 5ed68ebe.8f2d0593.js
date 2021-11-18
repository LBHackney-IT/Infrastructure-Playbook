(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(98)),i={id:"overnight_shutdown",title:"Overnight shutdown module"},c={unversionedId:"overnight_shutdown",id:"overnight_shutdown",isDocsHomePage:!1,title:"Overnight shutdown module",description:"About",source:"@site/docs/overnight_shutdown.md",slug:"/overnight_shutdown",permalink:"/Infrastructure-Playbook/overnight_shutdown",editUrl:"https://github.com/LBHackney-IT/Infrastructure-Playbook/edit/master/docs/overnight_shutdown.md",version:"current",sidebar:"docs",previous:{title:"DNS Module",permalink:"/Infrastructure-Playbook/dns"},next:{title:"Patching module",permalink:"/Infrastructure-Playbook/patching"}},u=[{value:"About",id:"about",children:[{value:"What it does",id:"what-it-does",children:[]},{value:"How can I use it?",id:"how-can-i-use-it",children:[]}]},{value:"TODO",id:"todo",children:[]}],s={toc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"about"},"About"),Object(a.b)("p",null,"To save cost on running EC2 Instances in Dev and Staging environments, there's a need to power down instances during Out of Office hours (19:00-7:00 Monday-Friday and Saturday and Sunday). This account-wide code seeks to address this."),Object(a.b)("h3",{id:"what-it-does"},"What it does"),Object(a.b)("p",null,"1) Creates an IAM policy that allows the following actions:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"a) Stop an EC2 Instance"),Object(a.b)("li",{parentName:"ul"},"b) Start an EC2 Instance"),Object(a.b)("li",{parentName:"ul"},"c) List EC2 Instance in the AWS accounnt\n2) Creates an IAM role to stop/start the Instance. Attached to this role is the policy defined in step 1 above\n3) Defines a Lambda function that handles the stop/start of the Instance. This uses a Python script (boto3). The script uses AWS tags to identify the Instance. Any EC2 Instance with a tag ",Object(a.b)("inlineCode",{parentName:"li"},"OOOShutdown")," with ",Object(a.b)("inlineCode",{parentName:"li"},"true")," value will be stopped/started at the time defined within the Cloudwatch rules\n4) Defines Cloudwatch rules and grants permission to trigger the execution of the Lambda function at the following times:"),Object(a.b)("li",{parentName:"ul"},"Stop EC2 at 7pm"),Object(a.b)("li",{parentName:"ul"},"Start EC2 at 7am")),Object(a.b)("h3",{id:"how-can-i-use-it"},"How can I use it?"),Object(a.b)("p",null,"Ensure your instance has a tag ",Object(a.b)("inlineCode",{parentName:"p"},"OOOShutdown")," with a value of ",Object(a.b)("inlineCode",{parentName:"p"},"true"),"."),Object(a.b)("h2",{id:"todo"},"TODO"),Object(a.b)("p",null,"Possibly extend this to RDS Instances"),Object(a.b)("p",null,"The module for overnight shutdown can be found here:\n",Object(a.b)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/infrastructure/tree/master/platform/instance-scheduler"},"https://github.com/LBHackney-IT/infrastructure/tree/master/platform/instance-scheduler")))}l.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(n),b=r,h=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return n?o.a.createElement(h,c(c({ref:t},s),{},{components:n})):o.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);