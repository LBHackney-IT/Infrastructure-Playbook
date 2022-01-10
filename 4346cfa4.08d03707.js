(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},g=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,d=p["".concat(o,".").concat(g)]||p[g]||f[g]||a;return n?i.a.createElement(d,c(c({ref:t},l),{},{components:n})):i.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(107)),o={id:"aws_cli",title:"AWS CLI"},c={unversionedId:"aws_cli",id:"aws_cli",isDocsHomePage:!1,title:"AWS CLI",description:"There is nothing custom about the way we use the AWS CLI at Hackney so this document will just refer you to the official AWS documentation for the different ways to use it.",source:"@site/docs/aws_cli.md",slug:"/aws_cli",permalink:"/Infrastructure-Playbook/aws_cli",editUrl:"https://github.com/LBHackney-IT/Infrastructure-Playbook/edit/master/docs/aws_cli.md",version:"current",sidebar:"docs",previous:{title:"Backup module",permalink:"/Infrastructure-Playbook/backups"},next:{title:"Cloud Engineering Team Ways of Working",permalink:"/Infrastructure-Playbook/ways_of_working"}},s=[{value:"Getting started and installing",id:"getting-started-and-installing",children:[]},{value:"Configuring the CLI",id:"configuring-the-cli",children:[]},{value:"Configuring the CLI to work with SSO",id:"configuring-the-cli-to-work-with-sso",children:[]},{value:"Session manager plug-in",id:"session-manager-plug-in",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"There is nothing custom about the way we use the AWS CLI at Hackney so this document will just refer you to the official AWS documentation for the different ways to use it."),Object(a.b)("h3",{id:"getting-started-and-installing"},"Getting started and installing"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html"},"Getting started and installing")),Object(a.b)("h3",{id:"configuring-the-cli"},"Configuring the CLI"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html"},"Configuring the CLI")),Object(a.b)("h3",{id:"configuring-the-cli-to-work-with-sso"},"Configuring the CLI to work with SSO"),Object(a.b)("p",null,"If you don't want to have to continually copy and paste credentials each time you want to interact with AWS then this is the way to go!"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html"},"Configuring CLI to work with SSO")),Object(a.b)("h3",{id:"session-manager-plug-in"},"Session manager plug-in"),Object(a.b)("p",null,"This allows you to create sessions in session manager for securely connecting to private EC2 instances and creating tunnels for connecting with private RDS instances."),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html"},"Installing the session manager plug-in")),Object(a.b)("p",null,"To try this out on an instance, follow ",Object(a.b)("a",{parentName:"p",href:"../API-Playbook/ec2_access"},"these instructions"),"."))}u.isMDXComponent=!0}}]);