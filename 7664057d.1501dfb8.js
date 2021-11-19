(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),h=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=h(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=h(n),b=a,p=u["".concat(s,".").concat(b)]||u[b]||d[b]||r;return n?o.a.createElement(p,i(i({ref:t},l),{},{components:n})):o.a.createElement(p,i({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},161:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/change_flow-103d869558ee9082540c96322df95a16.png"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return h}));var a=n(3),o=n(7),r=(n(0),n(101)),s={id:"change_process",title:"Change Process"},i={unversionedId:"change_process",id:"change_process",isDocsHomePage:!1,title:"Change Process",description:"As the Cloud Platform is developed, frequent change will occur on the platform as new features and functionalities are released. In order to ensure that users of the platform are aware of the changes, the need for a standard way of communicating change is required.",source:"@site/docs/change_process.md",slug:"/change_process",permalink:"/Infrastructure-Playbook/change_process",editUrl:"https://github.com/LBHackney-IT/Infrastructure-Playbook/edit/master/docs/change_process.md",version:"current",sidebar:"docs",previous:{title:"The hub",permalink:"/Infrastructure-Playbook/hub"},next:{title:"Backup module",permalink:"/Infrastructure-Playbook/backups"}},c=[{value:"When to raise a change request",id:"when-to-raise-a-change-request",children:[]},{value:"Change Process",id:"change-process",children:[]},{value:"Change Communication",id:"change-communication",children:[]},{value:"Change Log",id:"change-log",children:[]}],l={toc:c};function h(e){var t=e.components,s=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"As the Cloud Platform is developed, frequent change will occur on the platform as new features and functionalities are released. In order to ensure that users of the platform are aware of the changes, the need for a standard way of communicating change is required."),Object(r.b)("p",null,"As this is a lightweight informative process, changes will be approved by internal leads or managers rather than seek sign off from external stakeholders."),Object(r.b)("p",null,"Before raising a change, speak to stakeholders about when it would be appropriate for the changes to be applied. Try to accommodate the end users in terms of timing, if possible, including asking about working hours. Give as much notice as possible. If things are very short notice, explain why."),Object(r.b)("h3",{id:"when-to-raise-a-change-request"},"When to raise a change request"),Object(r.b)("p",null,"A change request should be raised when a change is going to affect the stakeholders through a change that the team implements. Operational exercises shouldn\u2019t require a change request (e.g. increasing disk size on a server) as the change was requested by a stakeholder.  "),Object(r.b)("h3",{id:"change-process"},"Change Process"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Change Process Flow",src:n(161).default,title:"image_tooltip"})),Object(r.b)("p",null,"The above flow diagram shows the high level decisions made to communicate change to outside teams"),Object(r.b)("h3",{id:"change-communication"},"Change Communication"),Object(r.b)("p",null,"Depending on the environment, changes will be communicated out in the below methods:"),Object(r.b)("h5",{id:"production"},"Production"),Object(r.b)("p",null,"Email is sent to Monsur Zaman which will then be communicated to the whole council."),Object(r.b)("p",null,"The change is also communicated through Slack to the #aws-outage channel"),Object(r.b)("h5",{id:"staging-and-development"},"Staging and Development"),Object(r.b)("p",null,"Developer working on the change sends an email to HackIT and also communicates through Slack to the #aws-outage channel"),Object(r.b)("h4",{id:"template"},"Template"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Requester:\n\nDate:\n\nRequest Name:\n\nReason for change:\n\nChange Description:\n\nEnvironment:\n\nImpact/Risk Assessment:\n\n    Scope of change:\n\n    Implementation time:\n\n    Risk:\n\n    Rollback:\n")),Object(r.b)("h5",{id:"requester"},"Requester"),Object(r.b)("p",null,"The team or person who has requested a change to the platform (Can be yourself or CE if it is on behalf of the team)."),Object(r.b)("h5",{id:"date"},"Date"),Object(r.b)("p",null,"Date the request was submitted"),Object(r.b)("h5",{id:"request-name"},"Request name"),Object(r.b)("p",null,"Name of the request that summarises the change"),Object(r.b)("h5",{id:"reason-for-change"},"Reason for change"),Object(r.b)("p",null,"How did this request come about? "),Object(r.b)("h5",{id:"change-description"},"Change description"),Object(r.b)("p",null,"What is going to be changed? What is the outcome of the change?"),Object(r.b)("h5",{id:"environment"},"Environment"),Object(r.b)("p",null,"Is this a dev, staging or production change? This can be helpful to stakeholders who may only be interested in a change in a particular environment."),Object(r.b)("h5",{id:"impactrisk-assessment"},"Impact/Risk Assessment"),Object(r.b)("p",null,"Consider the effects of the change on the platform, what kind of risks are associated with those, and how long the change will take to implement."),Object(r.b)("h6",{id:"scope"},"Scope"),Object(r.b)("p",null,"What systems are affected by this change? This is important to stakeholders who may rely on certain systems being unaffected during a change window."),Object(r.b)("h6",{id:"implementation-time-and-duration"},"Implementation Time and Duration"),Object(r.b)("p",null,"How long will it take to roll this change out? This is important to stakeholders as they may be using the system for important processes during this time. It is important to note that changes will need to be made between 20:00 - 06:00 for production systems."),Object(r.b)("h6",{id:"rollback-plan"},"Rollback Plan"),Object(r.b)("p",null,"What is the plan to revert this change if there is a problem? (Note: This should only really matter to production environments since development and staging environments are used for active testing)."),Object(r.b)("h6",{id:"risk"},"Risk"),Object(r.b)("p",null,"What are the risks of this change if it goes wrong? How much in the scope of the change will be affected and for how long? Will there be a cost or outage of the platform if a change goes wrong? This is probably the part that stakeholders will be most concerned about."),Object(r.b)("h3",{id:"change-log"},"Change Log"),Object(r.b)("p",null,"The change log is kept ",Object(r.b)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/u/0/d/1uJ9H1uqGFMZuXnzLvHKEtQFvA36PssqRgulH_P9Mxk0/edit"},"here")," and should be filled out before a change is made. The fields that are filled in can then be sent to the Service Desk for communication."),Object(r.b)("p",null,"We should keep a log of all change requests that have been created as a form of auditing and being able to track changes made."))}h.isMDXComponent=!0}}]);