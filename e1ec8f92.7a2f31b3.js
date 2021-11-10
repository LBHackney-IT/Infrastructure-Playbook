(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(90)),c={id:"creating_accounts",title:"Creating a new account"},i={unversionedId:"creating_accounts",id:"creating_accounts",isDocsHomePage:!1,title:"Creating a new account",description:"How to request a new account",source:"@site/docs/creating_accounts.md",slug:"/creating_accounts",permalink:"/Infrastructure-Playbook/creating_accounts",editUrl:"https://github.com/LBHackney-IT/Infrastructure-Playbook/edit/master/docs/creating_accounts.md",version:"current",sidebar:"docs",previous:{title:"Monitoring a Windows ec2 instance",permalink:"/Infrastructure-Playbook/terraform_ec2_monitoring"},next:{title:"Contact The Hackney Cloud Engineering team",permalink:"/Infrastructure-Playbook/contact_us"}},s=[{value:"How to request a new account",id:"how-to-request-a-new-account",children:[{value:"This represents the current process to request a new account in AWS. It will change once HaloITSM is in use, see below.",id:"this-represents-the-current-process-to-request-a-new-account-in-aws-it-will-change-once-haloitsm-is-in-use-see-below",children:[]},{value:"Do I need a new account?",id:"do-i-need-a-new-account",children:[]}]},{value:"Creating a new account (CE team members)",id:"creating-a-new-account-ce-team-members",children:[{value:"Create an Account in Service Catalog",id:"create-an-account-in-service-catalog",children:[]},{value:"Create a password for the root user and set up MFA",id:"create-a-password-for-the-root-user-and-set-up-mfa",children:[]},{value:"Set up MFA for the Account",id:"set-up-mfa-for-the-account",children:[]},{value:"Assign Users to the New Account",id:"assign-users-to-the-new-account",children:[]},{value:"Create a Secret in GitHub (if necessary)",id:"create-a-secret-in-github-if-necessary",children:[]}]}],l={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"how-to-request-a-new-account"},"How to request a new account"),Object(o.b)("h3",{id:"this-represents-the-current-process-to-request-a-new-account-in-aws-it-will-change-once-haloitsm-is-in-use-see-below"},"This represents the current process to request a new account in AWS. It will change once HaloITSM is in use, see below."),Object(o.b)("p",null,"AWS accounts can only be created by the Cloud Engineering team. Request a new account in the  #ask-devops channel in Slack, with the following details:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Name of account"),Object(o.b)("li",{parentName:"ul"},"Environment"),Object(o.b)("li",{parentName:"ul"},"Name of team/project and people who should have access")),Object(o.b)("p",null,"An account will be created for you along with a Google Group to control access to the account."),Object(o.b)("p",null,"Once HaloITSM is in use, you must use that to raise your request. "),Object(o.b)("h3",{id:"do-i-need-a-new-account"},"Do I need a new account?"),Object(o.b)("p",null,"You may not need a new account. We try to group similar applications together, such as all housing applications in the Housing account. However, you may want to take into account the following:\nWill a third party need access?\nWill the application host a large amount of personal and/or sensitive data?"),Object(o.b)("p",null,"There may be an existing account that is suitable for your application. If in doubt, please check with the team first in ",Object(o.b)("a",{parentName:"p",href:"https://hackit-lbh.slack.com/archives/C01FX9ERRSL"},"#ask-devops")),Object(o.b)("h2",{id:"creating-a-new-account-ce-team-members"},"Creating a new account (CE team members)"),Object(o.b)("h3",{id:"create-an-account-in-service-catalog"},"Create an Account in Service Catalog"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Go to the HackIT account"),Object(o.b)("li",{parentName:"ul"},"Sign in as Administrator or Service Catalog End User"),Object(o.b)("li",{parentName:"ul"},"Go to Service Catalog"),Object(o.b)("li",{parentName:"ul"},"Set Location to Ireland"),Object(o.b)("li",{parentName:"ul"},"Go to Products, select the radio button for Control Tower - Account Factory"),Object(o.b)("li",{parentName:"ul"},"Click Launch Product")),Object(o.b)("p",null,"Add Provisioned Product Name as per standards"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"e.g. Xpress-Staging (delimiter is hyphen)")),Object(o.b)("p",null,"Account email as per formula:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"hackitplatform+","[account name, including environment, as above]","@hackney.gov.uk"),Object(o.b)("li",{parentName:"ul"},"e.g. ",Object(o.b)("a",{parentName:"li",href:"mailto:hackitplatform+xpress-staging@hackney.gov.uk"},"hackitplatform+xpress-staging@hackney.gov.uk"))),Object(o.b)("p",null,"Account Name as above: Provisioned Product Name."),Object(o.b)("p",null,"Managed Organizational Unit: Select from dropdown, e.g. Staging, Production, etc. "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"SSOUserEmailAddress: ",Object(o.b)("a",{parentName:"li",href:"mailto:saml-aws-devops@hackney.gov.uk"},"saml-aws-devops@hackney.gov.uk")),Object(o.b)("li",{parentName:"ul"},"SSOUserFirstName: Cloud"),Object(o.b)("li",{parentName:"ul"},"SSOUserLastName: Engineering")),Object(o.b)("h3",{id:"create-a-password-for-the-root-user-and-set-up-mfa"},"Create a password for the root user and set up MFA"),Object(o.b)("p",null,"Each new account needs to have credentials set up for the root user for that account.\nOn initial account creation there will be no password, so you need to create a password.  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open an incognito browser and go to the AWS Console"),Object(o.b)("li",{parentName:"ul"},"Add the root user email address ","[see account email above]",", do the captcha, then select \u201cForgot password?\u201d")),Object(o.b)("p",null,"An email will be sent to the mailbox for ",Object(o.b)("a",{parentName:"p",href:"mailto:hackitplatform@hackney.gov.uk"},"hackitplatform@hackney.gov.uk"),", which, as of November 2021, is accessible to Matt Keyworth, Frank Barnett, Rashmi Shetty, Mirela Georgieva and Selwyn Preston. Please ask one of these users to click the link and create a password for the account. "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The username and password should be stored in the HackIT_AWS_Root_Credentials vault in 1Password. (The same individuals have access to this vault.)")),Object(o.b)("h3",{id:"set-up-mfa-for-the-account"},"Set up MFA for the Account"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Once the password is set up, MFA needs to be configured for the user"),Object(o.b)("li",{parentName:"ul"},"Follow these instructions AND, in addition, when you click on \u201cShow QR code\u201d make sure you screenshot or snip the QR code"),Object(o.b)("li",{parentName:"ul"},"Send the image of the QR code to one of the people listed above for storage in a restricted-access Drive")),Object(o.b)("h3",{id:"assign-users-to-the-new-account"},"Assign Users to the New Account"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Sign into HackIT again as SSO-Admin and select AWS Single Sign On"),Object(o.b)("li",{parentName:"ul"},"Find the newly-created account; assign users as necessary")),Object(o.b)("h3",{id:"create-a-secret-in-github-if-necessary"},"Create a Secret in GitHub (if necessary)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open the Infrastructure repo in GitHub"),Object(o.b)("li",{parentName:"ul"},"Go to Settings"),Object(o.b)("li",{parentName:"ul"},"Choose Secrets in the left-hand panel"),Object(o.b)("li",{parentName:"ul"},"Choose New Repository Secret"),Object(o.b)("li",{parentName:"ul"},"Add the name as per the naming conventions: all caps, underscore as delimiter, prefixed by AWS_ACCOUNT e.g. AWS_ACCOUNT_ACADEMY_PRODUCTION"),Object(o.b)("li",{parentName:"ul"},"Add the account number as the value and choose Add Secret")))}u.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,h=b["".concat(c,".").concat(d)]||b[d]||p[d]||o;return n?r.a.createElement(h,i(i({ref:t},l),{},{components:n})):r.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);