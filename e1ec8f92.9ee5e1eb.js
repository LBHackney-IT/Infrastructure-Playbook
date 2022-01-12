(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),c=(n(0),n(109)),o={id:"creating_accounts",title:"Creating a new AWS account"},i={unversionedId:"creating_accounts",id:"creating_accounts",isDocsHomePage:!1,title:"Creating a new AWS account",description:"How to request a new AWS account",source:"@site/docs/creating_accounts.md",slug:"/creating_accounts",permalink:"/Infrastructure-Playbook/creating_accounts",editUrl:"https://github.com/LBHackney-IT/Infrastructure-Playbook/edit/master/docs/creating_accounts.md",version:"current",sidebar:"docs",previous:{title:"Cloud Database Strategy",permalink:"/Infrastructure-Playbook/cloud_databases"},next:{title:"Creating an EC2 instance",permalink:"/Infrastructure-Playbook/terraform_ec2"}},u=[{value:"How to request a new AWS account",id:"how-to-request-a-new-aws-account",children:[{value:"Do I need a new account?",id:"do-i-need-a-new-account",children:[]}]},{value:"Creating a new account (CE team members)",id:"creating-a-new-account-ce-team-members",children:[{value:"Create a new account",id:"create-a-new-account",children:[]},{value:"Assign Users to the New Account",id:"assign-users-to-the-new-account",children:[]},{value:"Create a Secret in GitHub (if necessary)",id:"create-a-secret-in-github-if-necessary",children:[]},{value:"AWS Infrastructure",id:"aws-infrastructure",children:[]}]}],s={toc:u};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"how-to-request-a-new-aws-account"},"How to request a new AWS account"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"This represents the current process to request a new account in AWS. It will change once HaloITSM is in use, see below.")),Object(c.b)("p",null,"AWS accounts can only be created by the Cloud Engineering team. Request a new account in the ",Object(c.b)("a",{parentName:"p",href:"https://hackit-lbh.slack.com/archives/C01FX9ERRSL"},"#ask-devops")," channel in Slack, with the following details:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Name of account"),Object(c.b)("li",{parentName:"ul"},"Environment (Production, Staging or Development)"),Object(c.b)("li",{parentName:"ul"},"Name of team/project and people who should have access")),Object(c.b)("p",null,"An account will be created for you along with a Google Group to control access to the account."),Object(c.b)("p",null,"Once HaloITSM is in use, you must use that to raise your request. "),Object(c.b)("h3",{id:"do-i-need-a-new-account"},"Do I need a new account?"),Object(c.b)("p",null,"You may not need a new account. We try to group similar applications together, such as all housing applications in the Housing account. However, you may want to take into account the following:\nIs the purpose (development, testing or live) different to existing accounts?\nWill a third party need access?\nWill the application host a large amount of personal and/or sensitive data?"),Object(c.b)("p",null,"There may be an existing account that is suitable for your application. If in doubt, please check with the team first in ",Object(c.b)("a",{parentName:"p",href:"https://hackit-lbh.slack.com/archives/C01FX9ERRSL"},"#ask-devops")),Object(c.b)("h2",{id:"creating-a-new-account-ce-team-members"},"Creating a new account (CE team members)"),Object(c.b)("h3",{id:"create-a-new-account"},"Create a new account"),Object(c.b)("p",null,"Full instructions on how to create a new account are in the ",Object(c.b)("a",{parentName:"p",href:"https://docs.google.com/document/d/1JEaLgCDx5-j9Vo0whBwBYzUd5ZSjV5Q5WauyKLTAB48/edit#"},"team drive")," (restricted access). "),Object(c.b)("p",null,"New accounts are created using the AWS Service Catalog, but you have to make sure that the location is set to Ireland as our Control Tower is in that instance. "),Object(c.b)("p",null,"Make sure that you give the account a human-readable name, using the hyphen as the delimiter (e.g. Housing-Staging, Social-Care-Production)."),Object(c.b)("p",null,"Every account needs a root user email address and MFA set up. It is important that the QR code for MFA is screen-shot and saved. Speak to Frank, Matt, Mirela, Rashmi, or Selwyn about this. "),Object(c.b)("h3",{id:"assign-users-to-the-new-account"},"Assign Users to the New Account"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Sign into HackIT again as SSO-Admin and select AWS Single Sign On"),Object(c.b)("li",{parentName:"ul"},"Find the newly-created account; assign users as necessary")),Object(c.b)("h4",{id:"aws-role-mapping"},"AWS Role Mapping"),Object(c.b)("p",null,"TODO: How will AWS roles be mapped to SSO users? Currently done via ad-hoc mapping, but should each account have pre-defined SSO groups?"),Object(c.b)("h3",{id:"create-a-secret-in-github-if-necessary"},"Create a Secret in GitHub (if necessary)"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Open the Infrastructure repo in GitHub"),Object(c.b)("li",{parentName:"ul"},"Go to Settings"),Object(c.b)("li",{parentName:"ul"},"Choose Secrets in the left-hand panel"),Object(c.b)("li",{parentName:"ul"},"Choose New Repository Secret"),Object(c.b)("li",{parentName:"ul"},"Add the name as per the naming conventions: all caps, underscore as delimiter, prefixed by AWS_ACCOUNT e.g. AWS_ACCOUNT_ACADEMY_PRODUCTION"),Object(c.b)("li",{parentName:"ul"},"Add the account number as the value and choose Add Secret")),Object(c.b)("h3",{id:"aws-infrastructure"},"AWS Infrastructure"),Object(c.b)("p",null,"Currently, teams are fully responsible for their own infrastructure deployments within the accounts. In the future, the expectation is to evolve this so that the core of the AWS platform (Networking, Backups, IAM etc) are enabled and provisioned by Cloud Engineering when an account is boostrapped."),Object(c.b)("p",null,"At the moment, this is limited to deploying Backups and provioning the IAM roles required to run GitHub actions. New accounts will require updating ",Object(c.b)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/infrastructure/tree/master/platform/account-configuration"},"https://github.com/LBHackney-IT/infrastructure/tree/master/platform/account-configuration")," to add the account to the Terraform."))}l.isMDXComponent=!0},109:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,h=p["".concat(o,".").concat(d)]||p[d]||b[d]||c;return n?r.a.createElement(h,i(i({ref:t},s),{},{components:n})):r.a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);