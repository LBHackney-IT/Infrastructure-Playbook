(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,b=d["".concat(i,".").concat(p)]||d[p]||m[p]||o;return n?r.a.createElement(b,l(l({ref:t},c),{},{components:n})):r.a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(110)),i={id:"terraform_ec2_monitoring",title:"Monitoring a Windows EC2 instance"},l={unversionedId:"terraform_ec2_monitoring",id:"terraform_ec2_monitoring",isDocsHomePage:!1,title:"Monitoring a Windows EC2 instance",description:"Overview",source:"@site/docs/terraform_ec2_monitoring.md",slug:"/terraform_ec2_monitoring",permalink:"/Infrastructure-Playbook/terraform_ec2_monitoring",editUrl:"https://github.com/LBHackney-IT/Infrastructure-Playbook/edit/master/docs/terraform_ec2_monitoring.md",version:"current",sidebar:"docs",previous:{title:"AWS Programmatic Access",permalink:"/Infrastructure-Playbook/programmatic_access"},next:{title:"Overnight shutdown module",permalink:"/Infrastructure-Playbook/overnight_shutdown"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Default monitors and alerts",id:"default-monitors-and-alerts",children:[]},{value:"Custom monitoring",id:"custom-monitoring",children:[{value:"Required Module Variables",id:"required-module-variables",children:[]},{value:"Optional Module Variables",id:"optional-module-variables",children:[]},{value:"Module Output Variables",id:"module-output-variables",children:[]}]}],c={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"This module deploys monitoring and alerting of Windows EC2 instances."),Object(o.b)("p",null,"It will:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Save the Cloudwatch Agent configuration into the parameter store"),Object(o.b)("li",{parentName:"ul"},"Create Cloudwatch rules for installing and configuring the Cloudwatch agent on instances"),Object(o.b)("li",{parentName:"ul"},"Create an SNS queue and add a subscription for the provided email address(es)"),Object(o.b)("li",{parentName:"ul"},"Create Cloudwatch alarms for either the default or provided metrics")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"Declare the module and provide the required inputs and optional inputs as needed:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-terraform"},'module "monitoring" {\n  source = "../../../modules/ec2-monitoring/module"\n  tags          = module.tags.values\n  ec2_instance_ids = local.ec2_instances\n  alert_emails = local.alert_emails\n}\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ec2_instance_ids")," is a list of strings that holds the instance_ids of the instances you want to monitor."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"alert_emails"),' is a list of strings that holds the email addresses you want to receive alerts. Any new subscription will need to be confirmed by clicking on the "Confirm Subscription" link in the email that is sent post deployment.'),Object(o.b)("h2",{id:"default-monitors-and-alerts"},"Default monitors and alerts"),Object(o.b)("p",null,"By default, the module will alarm for:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Instance status (when the instance is offline)"),Object(o.b)("li",{parentName:"ul"},"CPU > 80% for 5 minutes"),Object(o.b)("li",{parentName:"ul"},"Free space on C: drive less than 20% for one hour"),Object(o.b)("li",{parentName:"ul"},"Memory above 80% for 5 minutes")),Object(o.b)("h2",{id:"custom-monitoring"},"Custom monitoring"),Object(o.b)("p",null,"Custom monitoring can be implemented by providing the following optional variables:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ssm_cloudwatch_config_windows_value")," is a JSON file which tells the Cloudwatch agent what metrics from the operating system to output to Cloudwatch. Examples can be found ",Object(o.b)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-Configuration-File-Details.html#CloudWatch-Agent-Configuration-File-Complete-Example"},"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-Configuration-File-Details.html#CloudWatch-Agent-Configuration-File-Complete-Example")," "),Object(o.b)("p",null,"The default Cloudwatch Agent config for this project can be found ",Object(o.b)("a",{parentName:"p",href:"module/default-config/AmazonCloudwatch-windows.json"},"here"),".\nNew Metrics can be either added to the default config if they are likely to be needed across all instances at Hackney, or the file can be copied, amended and provided as an optional value in the ",Object(o.b)("inlineCode",{parentName:"p"},"ssm_cloudwatch_config_windows_value")," variable."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"alarm_configs")," is a YAML file which holds the desired configuration of the alarms that are required.\nThe default alarm config for this project can be found ",Object(o.b)("a",{parentName:"p",href:"module/default-config/windows-alarms.yml"},"here"),".\nNew alarms can be either added to the default config if they are likely to be needed across all instances at Hackney, or the file can be copied, amended and provided as an optional value in the ",Object(o.b)("inlineCode",{parentName:"p"},"alarm_configs")," variable."),Object(o.b)("p",null,"The current default is below:"),Object(o.b)("p",null,"YAML:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'---\ncpu:\n  alarm_name: "CPU above 80% for 5 mins"\n  comparison_operator: GreaterThanOrEqualToThreshold\n  metric_name: CPUUtilization\n  evaluation_periods: 2\n  namespace: AWS/EC2\n  period: 360\n  statistic: Average\n  threshold: 80\n  alarm_description: "Reports where CPU is above 80% for 5 minutes"\n  treat_missing_data: breaching\n  dimensions: []\n\nec2_status:\n  alarm_name: "Instance status failure"\n  comparison_operator: GreaterThanOrEqualToThreshold\n  metric_name: StatusCheckFailed_Instance\n  evaluation_periods: 1\n  namespace: AWS/EC2\n  period: 60\n  statistic: Sum\n  threshold: 1\n  alarm_description: "Reports whether the instance has passed both the instance status check and the system status check in the last minute."\n  treat_missing_data: breaching\n  dimensions: []\n    \nfree-space:\n  alarm_name: "Free disk space less than 20%"\n  comparison_operator: LessThanThreshold\n  metric_name: Free_Space\n  evaluation_periods: 1  \n  namespace: CWAgent\n  period: 3600\n  statistic: Average\n  threshold: 20\n  alarm_description: "Reports where free disk space is less than 20%."\n  treat_missing_data: breaching\n  dimensions:\n    objectname: LogicalDisk\n    instance: "C:"\n\nmemory:\n  alarm_name: "Memory usage above 80%"\n  comparison_operator: GreaterThanThreshold\n  metric_name: RAM_USED\n  evaluation_periods: 1  \n  namespace: CWAgent\n  period: 300\n  statistic: Average\n  threshold: 80\n  alarm_description: "Reports where memory usage is above 80% for 5 mins."\n  treat_missing_data: breaching\n  dimensions:\n    objectname: Memory  \n')),Object(o.b)("h3",{id:"required-module-variables"},"Required Module Variables"),Object(o.b)("p",null,"See ",Object(o.b)("inlineCode",{parentName:"p"},"01-inputs-required.tf")),Object(o.b)("h3",{id:"optional-module-variables"},"Optional Module Variables"),Object(o.b)("p",null,"See ",Object(o.b)("inlineCode",{parentName:"p"},"02-inputs-optional.tf")),Object(o.b)("h3",{id:"module-output-variables"},"Module Output Variables"),Object(o.b)("p",null,"See ",Object(o.b)("inlineCode",{parentName:"p"},"99-outputs.tf")))}u.isMDXComponent=!0}}]);