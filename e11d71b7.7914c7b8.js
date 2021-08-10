(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{122:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),o=(a(0),a(135)),i={id:"aws_ecs",title:"AWS / ECS with Fargate and when to use"},s={unversionedId:"aws_ecs",id:"aws_ecs",isDocsHomePage:!1,title:"AWS / ECS with Fargate and when to use",description:"ECS/Fargate",source:"@site/docs/aws_ecs.md",slug:"/aws_ecs",permalink:"/Infrastructure-Playbook/aws_ecs",editUrl:"https://github.com/LBHackney-IT/Infrastructure-Playbook/edit/master/docs/aws_ecs.md",version:"current"},l=[{value:"ECS/Fargate",id:"ecsfargate",children:[{value:"What is Fargate?",id:"what-is-fargate",children:[]}]},{value:"When to use Fargate?",id:"when-to-use-fargate",children:[{value:"Large request or response payload",id:"large-request-or-response-payload",children:[]},{value:"Long running function",id:"long-running-function",children:[]},{value:"Large number of requests",id:"large-number-of-requests",children:[]},{value:"Storing large files during run time",id:"storing-large-files-during-run-time",children:[]}]},{value:"How to create an app / API with ECS/Fargate hosting setup?",id:"how-to-create-an-app--api-with-ecsfargate-hosting-setup",children:[]}],c={toc:l};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"ecsfargate"},"ECS/Fargate"),Object(o.b)("p",null,"All new Hackney APIs developed using AWS Lambda as a serverless way of hosting APIs."),Object(o.b)("p",null,"There are APIs developed before we adopted the serverless approach, which use ECS with Fargate or EC2 as a hosting option."),Object(o.b)("h3",{id:"what-is-fargate"},"What is Fargate?"),Object(o.b)("p",null,"Fargate is an AWS service that works with AWS ECS and AWS Kubernetes. It is a severless way to manage containers, without the need to manage and provision servers."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://aws.amazon.com/fargate/"},"More information")),Object(o.b)("h2",{id:"when-to-use-fargate"},"When to use Fargate?"),Object(o.b)("p",null,"Lambda is to be used with all new APIs, with the exception of a few scenarios."),Object(o.b)("p",null,"The use cases below outline the scenarios, when ECS with Fargate should be chosen as a way to host an API, instead of Lambda."),Object(o.b)("h3",{id:"large-request-or-response-payload"},"Large request or response payload"),Object(o.b)("p",null,"Lambda has the following request/response payload limitations: ",Object(o.b)("em",{parentName:"p"},"6 MB (synchronous) / 256 KB (asynchronous)")," ",Object(o.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html"},"More details")),Object(o.b)("p",null,"In certain scenarios, an API might be required to take as an input a large object (e.g. a file) or need to return a large object. Fargate should be used in the above scenario as Lambda would not be suitable for this type of APIs."),Object(o.b)("h4",{id:"possible-work-around"},"Possible work-around"),Object(o.b)("p",null,"Even if a request/response payload is large, we can still use Lambda by inserting the request/response object into S3 and accept/return a link to the file in S3.only take as an input / return as an output an S3 link for retrieving the file."),Object(o.b)("h3",{id:"long-running-function"},"Long running function"),Object(o.b)("p",null,"We aim to develop APIs that are fast and reliable. This means that we typically expect an API response to be delivered in a matter of seconds.\nHowever, in some scenarios, we might need to execute a long running job (e.g. batch operation). In this case, Lambda will not be suitable as it has a 15 min timeout. ECS with Fargate should be used instead."),Object(o.b)("h3",{id:"large-number-of-requests"},"Large number of requests"),Object(o.b)("p",null,"If an API is expected to receive a large number of requests (millions per month) and that those requests might be frequent and happening any day of the week and any time of the day, then Fargate might prove as a more cost-effective solution, as Lambda is billed per invocations."),Object(o.b)("h3",{id:"storing-large-files-during-run-time"},"Storing large files during run time"),Object(o.b)("p",null,"Lambda has the limitation of a memory range from 128 to 3008 MB."),Object(o.b)("p",null,"This means that if any large file needs to be stored at run time to be accessed later on in the function, Lambda might not be the best a possible solution., in which case Fargate should be used, as we have  Fargate allows us control over the memory allocation for containers."),Object(o.b)("h2",{id:"how-to-create-an-app--api-with-ecsfargate-hosting-setup"},"How to create an app / API with ECS/Fargate hosting setup?"),Object(o.b)("p",null,"It is recommended that you use Terraform to provision AWS resources. We already have produced a terraform template that generates all necessary resources for an API/app that is to be hosted using ECS with Fargate."),Object(o.b)("p",null,"In this playbook, please refer to the ",Object(o.b)("a",{parentName:"p",href:"/infrastructure"},"Terraform section")," to find out more about the templates and how to use them. The template has configuration both for front end apps and for back end services that are to use ECS with Fargate."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," The Terraform template creates the following resources: ")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"  ",Object(o.b)("u",null," Common layer Fargate  ")," ")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"ECR repository")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Fargate service")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Security group"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," ",Object(o.b)("u",null," Back end layer ")," ")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"API Gateway")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Target group")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Network load-balancer listener"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," ",Object(o.b)("u",null," Front end layer ")," ")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Application load balancer rule")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Target group"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," ",Object(o.b)("a",{parentName:"strong",href:"https://docs.google.com/document/d/1Wwj0HTBuSPjQ0ym9dtnGc7pM4x4cfA7OsAbr4YVnsWI/edit#heading=h.bbczall7icfy"},"Step-by-step 'how to use' guide for the terraform template")," ")))}u.isMDXComponent=!0},135:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),u=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=u(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(a),d=r,h=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return a?n.a.createElement(h,s(s({ref:t},c),{},{components:a})):n.a.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);