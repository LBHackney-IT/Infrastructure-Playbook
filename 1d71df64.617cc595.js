(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{137:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return p}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(t),b=r,p=m["".concat(s,".").concat(b)]||m[b]||d[b]||o;return t?a.a.createElement(p,i(i({ref:n},l),{},{components:t})):a.a.createElement(p,i({ref:n},l))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=b;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},77:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),o=(t(0),t(137)),s={id:"serverless_lambda",title:"Serverless Lambda Framework"},i={unversionedId:"serverless_lambda",id:"serverless_lambda",isDocsHomePage:!1,title:"Serverless Lambda Framework",description:"Introduction",source:"@site/docs/serverless_lambda.md",slug:"/serverless_lambda",permalink:"/Infrastructure-Playbook/serverless_lambda",editUrl:"https://github.com/LBHackney-IT/Infrastructure-Playbook/edit/master/docs/serverless_lambda.md",version:"current"},c=[{value:"Introduction",id:"introduction",children:[{value:"Video Tutorial",id:"video-tutorial",children:[]}]},{value:"Terminology",id:"terminology",children:[{value:"Functions",id:"functions",children:[]},{value:"Events",id:"events",children:[]},{value:"Resources",id:"resources",children:[]},{value:"Services",id:"services",children:[]}]}],l={toc:c};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"What is Serverless Lambda?")),Object(o.b)("p",null,"The Serverless Framework provides support when developing and deploying AWS (Amazon Web Services) Lambda Functions, along with any AWS infrastructure resources that are required. It provides a Command Line Interface (CLI) structure, automation and best practices out-of-the-box,  allowing developers to focus on building sophisticated, event-driven, serverless architectures, composed of Functions and Events."),Object(o.b)("h3",{id:"video-tutorial"},"Video Tutorial"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," Start by having a look at our Serverless Lambda Framework overview: ")),Object(o.b)("figure",{class:"video-container"},Object(o.b)("iframe",{width:"100%",src:"https://www.youtube.com/embed/EnID_C4yB_Y",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(o.b)("h2",{id:"terminology"},"Terminology"),Object(o.b)("h3",{id:"functions"},"Functions"),Object(o.b)("p",null,"A function is an AWS Lambda function that is similar to a microservice. It\u2019s simply code that is deployed in the cloud, this is mostly written as a single job. An example of a function could be to provide Database Credentials if you\u2019re using PostgreSQL DB service (At Hackney we do not hard code this):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="serverless.yml" {9}',title:'"serverless.yml"',"{9}":!0},"functions:\n  baseApi:\n    name: ${self:service}-${self:provider.stage}\n    handler: BaseApi::BaseApi.LambdaEntryPoint::FunctionHandlerAsync\n    role: lambdaExecutionRole\n    environment:\n# TODO: Create ssm variables for this API's postgres mirror then rename base-api below to match api name\n# TODO: Remove this line if DynamoDb is being used\n      CONNECTION_STRING: Host=${ssm:/base-api/${self:provider.stage}/postgres-hostname};Port=${ssm:/base-api/${self:provider.stage}/postgres-port};Database=base-api-mirror;Username=${ssm:/base-api/${self:provider.stage}/postgres-username};Password=${ssm:/base-api/${self:provider.stage}/postgres-password}\n    events:\n      - http:\n          path: /{proxy+}\n          method: ANY\n          private: true\n")),Object(o.b)("h3",{id:"events"},"Events"),Object(o.b)("p",null,"Anything that triggers an AWS Lambda Function to execute is regarded by the Framework as an Event. Events are infrastructure events on AWS such as:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An AWS API Gateway HTTP endpoint request"),Object(o.b)("li",{parentName:"ul"},"An AWS S3 bucket upload")),Object(o.b)("p",null,"When you define an event for your AWS Lambda functions in the Serverless Framework, the Framework will automatically create any infrastructure necessary for that event (e.g. an API Gateway endpoint) and configure your AWS Lambda Functions to listen to it."),Object(o.b)("h3",{id:"resources"},"Resources"),Object(o.b)("p",null,"Resources are AWS infrastructure components that your Functions use such as:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An AWS DynamoDB Table"),Object(o.b)("li",{parentName:"ul"},"An AWS S3 Bucket (e.g. for saving images or files)"),Object(o.b)("li",{parentName:"ul"},"An AWS SNS Topic (e.g. for sending messages asynchronously)")),Object(o.b)("p",null,"The Serverless Framework not only deploys your Functions and the Events that trigger them, but it also deploys the AWS infrastructure components your Functions depend upon."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="serverless.yml"',title:'"serverless.yml"'},"resources:\n  Resources:\n    lambdaExecutionRole:\n      Type: AWS::IAM::Role\n      Properties:\n        Path: /${self:service}/${self:provider.stage}/\n        RoleName: ${self:service}-lambdaExecutionRole\n        AssumeRolePolicyDocument:\n          Version: '2012-10-17'\n          Statement:\n            - Effect: Allow\n              Principal:\n                Service:\n                  - lambda.amazonaws.com\n              Action: sts:AssumeRole\n        ManagedPolicyArns:\n          - arn:aws:iam::aws:policy/service-role/AWSLambdaVPCAccessExecutionRole\n          - arn:aws:iam::aws:policy/AWSXRayDaemonWriteAccess\n# TODO: Enable this line and set the correct policy name if DynamoDb is in use\n#          - arn:aws:iam::${self:provider.account}:policy/base-api/lambda-dynamodb-base-api\n        Policies:\n          - PolicyName: manageLogs\n            PolicyDocument:\n              Version: '2012-10-17'\n              Statement:\n                - Effect: Allow\n                  Action:\n                    - logs:CreateLogGroup\n                    - logs:CreateLogStream\n                    - logs:PutLogEvents\n                  Resource:\n                    - 'Fn::Join':\n                        - ':'\n                        - - 'arn:aws:logs'\n                          - Ref: 'AWS::Region'\n                          - Ref: 'AWS::AccountId'\n                          - 'log-group:/aws/lambda/*:*:*'\n                - Effect: \"Allow\"\n                  Action:\n                    - \"s3:PutObject\"\n                    - \"s3:GetObject\"\n                  Resource:\n                    Fn::Join:\n                      - \"\"\n                      - - \"arn:aws:s3:::\"\n                        - \"Ref\": \"ServerlessDeploymentBucket\"\n")),Object(o.b)("h3",{id:"services"},"Services"),Object(o.b)("p",null,"A service is the framework\u2019s unit of organisation, it\u2019s where you define the functions, events which trigger them and resources that your functions use. A service can be described in a YAML or JSON format. "),Object(o.b)("p",null,"At Hackney, we define the service in the YAML format (serverless.yml) which is stored in the root directory of our projects."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="serverless.yml"',title:'"serverless.yml"'},"service: your-api-name\nprovider:\n  name: aws\n  runtime: dotnetcore3.1\n  memorySize: 2048\n  tracing:\n    lambda: true\n    apiGateway: true\n")))}u.isMDXComponent=!0}}]);