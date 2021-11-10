(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(90)),i={id:"control_tower",title:"Control Tower setup at LBH"},c={unversionedId:"control_tower",id:"control_tower",isDocsHomePage:!1,title:"Control Tower setup at LBH",description:"Introduction",source:"@site/docs/control_tower.md",slug:"/control_tower",permalink:"/Infrastructure-Playbook/control_tower",editUrl:"https://github.com/LBHackney-IT/Infrastructure-Playbook/edit/master/docs/control_tower.md",version:"current",sidebar:"docs",previous:{title:"Support processes",permalink:"/Infrastructure-Playbook/support_processes"},next:{title:"SSO sync job",permalink:"/Infrastructure-Playbook/sso_sync"}},u=[{value:"Introduction",id:"introduction",children:[]},{value:"Initial set up",id:"initial-set-up",children:[]},{value:"User Authentication",id:"user-authentication",children:[]},{value:"User Authorisation",id:"user-authorisation",children:[]},{value:"Organisation",id:"organisation",children:[{value:"OUs",id:"ous",children:[]}]},{value:"Guardrails",id:"guardrails",children:[]},{value:"AWS Account bootstrap",id:"aws-account-bootstrap",children:[]},{value:"Creating a new AWS account",id:"creating-a-new-aws-account",children:[]}],s={toc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"Hackney\u2019s environment is set up using ",Object(a.b)("a",{parentName:"p",href:"https://aws.amazon.com/controltower/"},"AWS Control tower"),".  This gave us the ability to centrally manage a multi-account environment. It also allowed us to use SSO to provide a single user account whereby an individual can access resources across the Control Tower environment. "),Object(a.b)("h2",{id:"initial-set-up"},"Initial set up"),Object(a.b)("p",null,"Control tower was set up with the default initial account configuration. It was configured in eu-west-1 because at the point it was initially set up Control tower was not available in eu-west-2."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'Root account - called "HackIT"'),Object(a.b)("li",{parentName:"ul"},"Log Archive"),Object(a.b)("li",{parentName:"ul"},"Audit")),Object(a.b)("p",null,"It also sets up an organisation in the root account and a Core OU which the Log Archive and Audit were deployed to."),Object(a.b)("h2",{id:"user-authentication"},"User Authentication"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://aws.amazon.com/single-sign-on/"},"AWS SSO")," was configured and integrated with the LBH Google User Directory."),Object(a.b)("p",null,"It is configured in the eu-west-1 region along with Control tower."),Object(a.b)("p",null,"A sync was set up between AWS SSO and the Google directory which runs in the root account. ",Object(a.b)("a",{parentName:"p",href:"/sso_sync"},"SSO Sync")),Object(a.b)("h2",{id:"user-authorisation"},"User Authorisation"),Object(a.b)("p",null,"Initial access to the ",Object(a.b)("a",{parentName:"p",href:"https://hackney.awsapps.com/start#/"},"AWS dashboard"),' is granted via a single Google group called "saml-aws-dashboard-access".'),Object(a.b)("p",null,"Further access to accounts is controlled via occasional individual permissions and Google groups which is outlined in the ",Object(a.b)("a",{parentName:"p",href:"/permissions_management"},"Permissions management")," page."),Object(a.b)("h2",{id:"organisation"},"Organisation"),Object(a.b)("p",null,"We use Organisations Units to control which environment within the ",Object(a.b)("a",{parentName:"p",href:"/hub"},"hub")," the accounts are added to."),Object(a.b)("h3",{id:"ous"},"OUs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Root",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Production"),Object(a.b)("li",{parentName:"ul"},"Staging"),Object(a.b)("li",{parentName:"ul"},"Development"),Object(a.b)("li",{parentName:"ul"},"Core"),Object(a.b)("li",{parentName:"ul"},"Unmanaged")))),Object(a.b)("h2",{id:"guardrails"},"Guardrails"),Object(a.b)("p",null,"Multiple ",Object(a.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/controltower/latest/userguide/guardrails.html"},"Guardrails")," are configured against every account based on the organisation unit that account resides in. They allow you to enforce polices or detect violations throughout the Control tower environment."),Object(a.b)("h2",{id:"aws-account-bootstrap"},"AWS Account bootstrap"),Object(a.b)("p",null,"Initial Account set up information can be found in ",Object(a.b)("a",{parentName:"p",href:"/account_provisioning"},"account provisioning"),"."),Object(a.b)("h2",{id:"creating-a-new-aws-account"},"Creating a new AWS account"),Object(a.b)("p",null,"Under certain circumstances new accounts can be ",Object(a.b)("a",{parentName:"p",href:"/creating_accounts"},"created for you"),"."))}l.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,h=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(h,c(c({ref:t},s),{},{components:n})):o.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);