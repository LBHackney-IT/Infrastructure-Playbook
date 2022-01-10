(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var o=n(3),a=n(7),r=(n(0),n(107)),c={id:"s3_download",title:"How to download from an S3 bucket"},l={unversionedId:"s3_download",id:"s3_download",isDocsHomePage:!1,title:"How to download from an S3 bucket",description:"This document is intended for vendors/users outside of Hackney and/or users who have been assigned programmatic access to an S3 bucket within one of our accounts in the AWS organization.",source:"@site/docs/s3_download.md",slug:"/s3_download",permalink:"/Infrastructure-Playbook/s3_download",editUrl:"https://github.com/LBHackney-IT/Infrastructure-Playbook/edit/master/docs/s3_download.md",version:"current",sidebar:"docs",previous:{title:"Migrate an EC2 instance to another AWS Account",permalink:"/Infrastructure-Playbook/migrating_instances"},next:{title:"Contact The Hackney Cloud Engineering team",permalink:"/Infrastructure-Playbook/contact_us"}},i=[{value:"Install AWS CLI",id:"install-aws-cli",children:[]},{value:"Configure Access to the S3 bucket",id:"configure-access-to-the-s3-bucket",children:[]},{value:"List all objects in the S3 bucket",id:"list-all-objects-in-the-s3-bucket",children:[]},{value:"Download files from the S3 bucket to your local machine",id:"download-files-from-the-s3-bucket-to-your-local-machine",children:[]},{value:"Accessing S3 bucket from an EC2 instance",id:"accessing-s3-bucket-from-an-ec2-instance",children:[]}],s={toc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"This document is intended for vendors/users outside of Hackney and/or users who have been assigned programmatic access to an S3 bucket within one of our accounts in the AWS organization.")),Object(r.b)("h3",{id:"install-aws-cli"},"Install AWS CLI"),Object(r.b)("p",null,"To check if you have AWS CLI installed run the command:  ",Object(r.b)("inlineCode",{parentName:"p"},"aws --version")," from the command line prompt"),Object(r.b)("p",null,"If you do not currently have AWS CLI, follow the ",Object(r.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-windows.html"},"instructions")," provided in the AWS documentation to download it to your local machine. "),Object(r.b)("h3",{id:"configure-access-to-the-s3-bucket"},"Configure Access to the S3 bucket"),Object(r.b)("p",null,"To set up access to the S3 bucket for the first time, run the following command in your command prompt or terminal: ",Object(r.b)("inlineCode",{parentName:"p"},"aws configure")),Object(r.b)("p",null,"When prompted, enter the ",Object(r.b)("inlineCode",{parentName:"p"},"Access Key ID")," as provided to you."),Object(r.b)("p",null,"When prompted, enter the ",Object(r.b)("inlineCode",{parentName:"p"},"Secret Access Key")," as provided to you. "),Object(r.b)("p",null,"When prompted, enter ",Object(r.b)("inlineCode",{parentName:"p"},"eu-west-2")," for the region."),Object(r.b)("p",null,"When prompted, enter ",Object(r.b)("inlineCode",{parentName:"p"},"JSON "),"as default output format."),Object(r.b)("h3",{id:"list-all-objects-in-the-s3-bucket"},"List all objects in the S3 bucket"),Object(r.b)("p",null,"To list objects (files) in the S3 bucket run the following command: "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"aws s3 ls s3://<name of S3 bucket> --recursive\nE.g., aws s3 ls s3://example-data- --recursive\n")),Object(r.b)("p",null,"_NB the name of the S3 bucket in this example is example-bucket"),Object(r.b)("h3",{id:"download-files-from-the-s3-bucket-to-your-local-machine"},"Download files from the S3 bucket to your local machine"),Object(r.b)("p",null,"Navigate in the command prompt or terminal to the local directory where you would like to save files."),Object(r.b)("p",null,"Use the following command to copy files from the S3 bucket to your local machine:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"aws s3 cp s3://example-data- . --recursive\n")),Object(r.b)("p",null,"NB the \u201c.\u201d above will copy to the directory you have navigated to. If you would like to copy to another location use the following command, where ","<","path> is the location you would like to copy the files to:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"aws s3 cp s3://example-data-/example_2_Zip.7z <path> --recursive\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"NB these commands and file names are case sensitive.")),Object(r.b)("h3",{id:"accessing-s3-bucket-from-an-ec2-instance"},"Accessing S3 bucket from an EC2 instance"),Object(r.b)("p",null,"In order to download data from an EC2 instance, the IAM role for the EC2 instance must have access to the S3 bucket from where the data needs to be downloaded."),Object(r.b)("p",null,"To copy files, do the following"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"aws s3 ls s3://s3-bucket-name  /destination-folder  --profile=[Profile name]\n")),Object(r.b)("p",null,"In the EC2 instance with the destination folder, you can use the AWS CLI command aws configure to create a profile named default in the credentials file. The credentials file location would be C:\\Users","_","USERNAME_",".","aws\\credentials. Multiple profiles can be added to the credentials file with different profile names."),Object(r.b)("p",null,"When you enter aws configure at the command line, you're asked for four pieces of information:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Access key ID"),Object(r.b)("li",{parentName:"ul"},"Secret access key"),Object(r.b)("li",{parentName:"ul"},"AWS Region"),Object(r.b)("li",{parentName:"ul"},"Output format")),Object(r.b)("p",null,"The following example shows sample values:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ aws configure\n\nAWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE\n\nAWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY\n\nDefault region name [None]: us-west-2\n\nDefault output format [None]: json\n")))}u.isMDXComponent=!0},107:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=u(n),p=o,m=b["".concat(c,".").concat(p)]||b[p]||d[p]||r;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<r;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);