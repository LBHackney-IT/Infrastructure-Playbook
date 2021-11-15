(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{76:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),i=(r(0),r(91)),o={id:"services_we_provide",title:"Services we provide"},c={unversionedId:"services_we_provide",id:"services_we_provide",isDocsHomePage:!1,title:"Services we provide",description:"Shared services provided by Cloud Engineering",source:"@site/docs/services_we_provide.md",slug:"/services_we_provide",permalink:"/Infrastructure-Playbook/services_we_provide",editUrl:"https://github.com/LBHackney-IT/Infrastructure-Playbook/edit/master/docs/services_we_provide.md",version:"current",sidebar:"docs",previous:{title:"The Hackney Cloud Engineering team",permalink:"/Infrastructure-Playbook/the_team"},next:{title:"Support processes",permalink:"/Infrastructure-Playbook/support_processes"}},u=[{value:"Shared services provided by Cloud Engineering",id:"shared-services-provided-by-cloud-engineering",children:[]},{value:"Backups",id:"backups",children:[]},{value:"Patching",id:"patching",children:[]},{value:"Tagging",id:"tagging",children:[]},{value:"Certificates",id:"certificates",children:[]},{value:"Route53",id:"route53",children:[]},{value:"Overnight shutdown",id:"overnight-shutdown",children:[]},{value:"Monitoring",id:"monitoring",children:[]}],s={toc:u};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"shared-services-provided-by-cloud-engineering"},"Shared services provided by Cloud Engineering"),Object(i.b)("p",null,"The Cloud Engineering team provides a number of shared services for teams to integrate into their accounts. These are mostly provided by Terraform modules in the Infrastructure repo, and in most cases are enabled through tagging. All defaults can be varied according to the needs of the team."),Object(i.b)("h2",{id:"backups"},"Backups"),Object(i.b)("p",null,"The Backup module uses AWS Backup. Enable backups by using the BackupPolicy tags in the Tagging module. This stores a backup of the following resources in the same account:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"EC2 instances"),Object(i.b)("li",{parentName:"ul"},"EBS volumes"),Object(i.b)("li",{parentName:"ul"},"RDS databases"),Object(i.b)("li",{parentName:"ul"},"DynamoDB tables"),Object(i.b)("li",{parentName:"ul"},"EFS")),Object(i.b)("p",null,"The default backup policies are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"RPO 24 hours"),Object(i.b)("li",{parentName:"ul"},"RTO 4 hours"),Object(i.b)("li",{parentName:"ul"},"30 days immutable retention")),Object(i.b)("p",null,"These defaults must only be varied with the agreement of the Information Asset Owner. "),Object(i.b)("h2",{id:"patching"},"Patching"),Object(i.b)("p",null,"The Patching module automatically scans all Windows and Ubuntu EC2 instances to make sure they have the most up-to-date patches. Note that this is OS only, not application patches. Enable by using the TOSCAN and TOPATCH tag groups (note: case-sensitive)."),Object(i.b)("p",null,"TOSCAN:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Scans EC2s for Critical or Important patches"),Object(i.b)("li",{parentName:"ul"},"Alerts the Cloud Engineering team if patches are required")),Object(i.b)("p",null,"TOPATCH:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Will trigger a cron job to patch the instance out of hours")),Object(i.b)("h2",{id:"tagging"},"Tagging"),Object(i.b)("p",null,"The Cloud Engineering team has built a tagging module in Terraform to make it easier to apply tags when building infrastructure as code. Tags are used for many purposes in AWS; we principally use them to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Manage costs; "),Object(i.b)("li",{parentName:"ul"},"Identify which resources to backup; "),Object(i.b)("li",{parentName:"ul"},'Identify which resources power down during "out of office" hours;'),Object(i.b)("li",{parentName:"ul"},"Identify resources by team, application, environment and project;"),Object(i.b)("li",{parentName:"ul"},"Identify which EC2 resources to scan and/or patch.")),Object(i.b)("h2",{id:"certificates"},"Certificates"),Object(i.b)("p",null,"Our certificates are managed in AWS Certificate Manager. This is integrated into the Hub, and will automatically renew any certificates generated by it. "),Object(i.b)("h2",{id:"route53"},"Route53"),Object(i.b)("p",null,"Route53 manages our DNS. DNS entries can be added, amended, or removed through Terraform in the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/infrastructure/tree/master/platform/public-dns"},"platform/public-dns")," project in the Infrastructure repo. All changes must be made in a branch, and the PR must be approved by the Cloud Engineering team. See this ",Object(i.b)("a",{parentName:"p",href:"https://docs.google.com/document/d/1eCJ9PVVKvpwmSFSBXVLBR36GpnqQSQ07vA1u0NY41t4/edit"},"How to HackIT")," for more detail. "),Object(i.b)("h2",{id:"overnight-shutdown"},"Overnight shutdown"),Object(i.b)("p",null,"The Overnight Shutdown module will automatically shut down EC2 instances overnight. The default is 19:00 to 07:00 Monday\u2013Thursday and 19:00 Friday to 07:00 Monday, in the development and staging environments. "),Object(i.b)("h2",{id:"monitoring"},"Monitoring"),Object(i.b)("p",null,"The ",Object(i.b)("a",{parentName:"p",href:"/terraform_ec2_monitoring"},"Monitoring module")," provides monitoring on EC2 (Windows only) and RDS instances via CloudWatch. This is part of the EC2/RDS Terraform and the coverage includes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"EC2 \u2013 status, disk space, disk i/o, and CPU & memory usage"),Object(i.b)("li",{parentName:"ul"},"RDS \u2013 status, CPU, disk space, memory, login failures, custom metrics")),Object(i.b)("p",null,"Some manual configuration is required for this service. Alerts are currently via SNS. "))}l.isMDXComponent=!0},91:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(r),b=n,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return r?a.a.createElement(m,c(c({ref:t},s),{},{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);