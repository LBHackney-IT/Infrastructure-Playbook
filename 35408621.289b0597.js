(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{135:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=b(a),d=n,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||s;return a?r.a.createElement(m,o(o({ref:t},c),{},{components:a})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),s=(a(0),a(135)),i={id:"http",title:"HTTP"},o={unversionedId:"http",id:"http",isDocsHomePage:!1,title:"HTTP",description:"MUST Use REST Maturity Level 2",source:"@site/docs/http.md",slug:"/http",permalink:"/Infrastructure-Playbook/http",editUrl:"https://github.com/LBHackney-IT/Infrastructure-Playbook/edit/master/docs/http.md",version:"current",sidebar:"docs",previous:{title:"Naming Conventions",permalink:"/Infrastructure-Playbook/naming_conventions"},next:{title:"Resources",permalink:"/Infrastructure-Playbook/resources"}},l=[{value:"MUST Use REST Maturity Level 2",id:"must-use-rest-maturity-level-2",children:[]},{value:"MUST Use HTTP Methods Correctly",id:"must-use-http-methods-correctly",children:[{value:"GET",id:"get",children:[]},{value:"PUT",id:"put",children:[]},{value:"POST",id:"post",children:[]},{value:"PATCH",id:"patch",children:[]},{value:"DELETE",id:"delete",children:[]}]},{value:"MUST Use Content Headers Correctly",id:"must-use-content-headers-correctly",children:[]},{value:"MAY Use Other Standardized Headers",id:"may-use-other-standardized-headers",children:[]},{value:"MUST Fulfill Safeness and Idempotency Properties",id:"must-fulfill-safeness-and-idempotency-properties",children:[]},{value:"SHOULD Define Collection Format of Query Parameters and Headers",id:"should-define-collection-format-of-query-parameters-and-headers",children:[]},{value:"MUST Document Implicit Filtering",id:"must-document-implicit-filtering",children:[]},{value:"MUST Specify Success and Error Responses",id:"must-specify-success-and-error-responses",children:[]},{value:"MUST Use Standard HTTP Status Codes",id:"must-use-standard-http-status-codes",children:[{value:"Success Codes",id:"success-codes",children:[]},{value:"Redirection Codes",id:"redirection-codes",children:[]},{value:"Client Side Error Codes",id:"client-side-error-codes",children:[]},{value:"Server Side Error Codes:",id:"server-side-error-codes",children:[]}]},{value:"MUST Use Most Specific HTTP Status Codes",id:"must-use-most-specific-http-status-codes",children:[]},{value:"MUST Use Code 207 for Batch or Bulk Requests",id:"must-use-code-207-for-batch-or-bulk-requests",children:[]},{value:"MUST Use Code 429 with Headers for Rate Limits",id:"must-use-code-429-with-headers-for-rate-limits",children:[]}],c={toc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"must-use-rest-maturity-level-2"},"MUST Use REST Maturity Level 2"),Object(s.b)("p",null,"We strive for a good implementation of ",Object(s.b)("a",{parentName:"p",href:"http://martinfowler.com/articles/richardsonMaturityModelhtml#level2"},"REST Maturity Level 2")," as it enables us to build resource-oriented APIs that make full use of HTTP verbs and status codes. You can see this expressed by many rules throughout these guidelines, e.g.:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("a",{parentName:"p",href:"/Infrastructure-Playbook/resources#must-avoid-actions--think-about-resources"},"Avoid Actions \u2014 Think About Resources"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("a",{parentName:"p",href:"/Infrastructure-Playbook/resources#must-keep-urls-verb-free"},"MUST Keep URLs Verb-Free"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("a",{parentName:"p",href:"#must-use-http-methods-correctly"},"MUST Use HTTP Methods Correctly"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("a",{parentName:"p",href:"#must-use-standard-http-status-codes"},"MUST Use Standard HTTP Status Codes")))),Object(s.b)("h2",{id:"must-use-http-methods-correctly"},"MUST Use HTTP Methods Correctly"),Object(s.b)("p",null,"Be compliant with the standardized HTTP method semantics summarized as follows:"),Object(s.b)("h3",{id:"get"},"GET"),Object(s.b)("p",null,"GET requests are used to ",Object(s.b)("strong",{parentName:"p"},"read")," either a single or a collection resource."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"GET requests for individual resources will usually generate a 404 if the resource does not exist")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"GET requests for collection resources may return either 200 (if the collection is empty) or 404 (if the collection is missing)")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"GET requests must NOT have a request body payload"))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Note:")," GET requests on collection resources should provide sufficient filter and ",Object(s.b)("a",{parentName:"p",href:"/Infrastructure-Playbook/pagination"},"pagination")," mechanisms."),Object(s.b)("h3",{id:"put"},"PUT"),Object(s.b)("p",null,"PUT requests are used to ",Object(s.b)("strong",{parentName:"p"},"update entire")," resources. The semantic is best described as ",Object(s.b)("em",{parentName:"p"},'"please put the enclosed representation at the resource mentioned by the URL, replacing any existing resource."'),"."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"PUT requests are usually applied to single resources, and not to collection resources, as this would imply replacing the entire collection")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"PUT requests are usually robust against non-existence of resources by implicitly creating before updating")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"on successful PUT requests, the server will ",Object(s.b)("strong",{parentName:"p"},"replace the entire resource")," addressed by the URL with the representation passed in the payload (subsequent reads will deliver the same payload)")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"successful PUT requests will usually generate 200 or 204 (if the resource was updated - with or without actual content returned), and 201 (if the resource was created)"))),Object(s.b)("h3",{id:"post"},"POST"),Object(s.b)("p",null,"POST requests are idiomatically used to ",Object(s.b)("strong",{parentName:"p"},"create")," single resources on a collection resource endpoint, but other semantics on single resources endpoint are possible. The semantic for collection endpoints is best described as ",Object(s.b)("em",{parentName:"p"},'"please add the enclosed representation to the collection resource identified by the URL"'),"."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"on a successful POST request, the server will create one or multiple new resources and provide their URI/URLs in the response")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"successful POST requests will usually generate 200 (if resources have been updated), 201 (if resources have been created), and 202 (if the request was accepted but has not been finished yet)"))),Object(s.b)("p",null,"The semantic for single resource endpoints is best described as ",Object(s.b)("em",{parentName:"p"},'"please execute the given well specified request on the resource identified by the URL"'),"."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Generally:")," POST should be used for scenarios that cannot be covered by the other methods sufficiently. In such cases, make sure to document the fact that POST is used as a workaround."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Note:")," Resource IDs with respect to POST requests are created and maintained by server and returned with response payload."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Tip:")," Posting the same resource twice is by itself ",Object(s.b)("strong",{parentName:"p"},"not")," required to be ",Object(s.b)("em",{parentName:"p"},"idempotent")," and may result in multiple resource instances."),Object(s.b)("h3",{id:"patch"},"PATCH"),Object(s.b)("p",null,"PATCH requests are used to ",Object(s.b)("strong",{parentName:"p"},"update parts")," of single resources, i.e. where only a specific subset of resource fields should be replaced. The semantic is best described as ",Object(s.b)("em",{parentName:"p"},'"please change the resource identified by the URL according to my change request"'),". The semantic of the change request is not defined in the HTTP standard and must be described in the API specification by using suitable media types."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"PATCH requests are usually applied to single resources as patching entire collection is challenging")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"PATCH requests are usually not robust against non-existence of resource instances")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"on successful PATCH requests, the server will update parts of the resource addressed by the URL as defined by the change request in the payload")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"successful PATCH requests will usually generate 200 or 204 (if resources have been updated with or without updated content returned)"))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Note (To Be Clarified):")," since implementing PATCH correctly is a bit tricky, we strongly suggest to choose one and only one of the following patterns per endpoint."),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"use PUT with complete objects to update a resource as long as feasible (i.e. do not use PATCH at all).")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"use PATCH with partial objects to only update parts of a resource, whenever possible. (This is basically ",Object(s.b)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7396"},"JSON Merge Patch"),",a specialized media type ",Object(s.b)("inlineCode",{parentName:"p"},"application/merge-patch+json")," that is a partial resource representation.)")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"use PATCH with ",Object(s.b)("a",{parentName:"p",href:"http://tools.ietf.org/html/rfc6902"},"JSON Patch"),", a specialized media type ",Object(s.b)("inlineCode",{parentName:"p"},"application/json-patch+json")," that includes instructions on how to change the resource.")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"use POST (with a proper description of what is happening) instead of PATCH, if the request does not modify the resource in a way defined by the semantics of the media type."))),Object(s.b)("p",null,"In practice ",Object(s.b)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7396"},"JSON Merge Patch")," quickly turns out to be too limited, especially when trying to update single objects in large collections (as part of the resource). In this cases ",Object(s.b)("a",{parentName:"p",href:"http://tools.ietf.org/html/rfc6902"},"JSON Patch")," can shown its full power while still showing readable patch requests (see also ",Object(s.b)("a",{parentName:"p",href:"http://erosb.github.io/post/json-patch-vs-merge-patch"},"JSON patch vs. merge"),")."),Object(s.b)("h3",{id:"delete"},"DELETE"),Object(s.b)("p",null,"DELETE requests are used to ",Object(s.b)("strong",{parentName:"p"},"delete")," resources. The semantic is best described as ",Object(s.b)("em",{parentName:"p"},'"please delete the resource identified by the URL"'),"."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"DELETE requests are usually applied to single resources, not on collection resources, as this would imply deleting the entire collection")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"successful DELETE requests will usually generate 200 (if the deleted resource is returned) or 204 (if no content is returned)")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"failed DELETE requests will usually generate 404 (if the resource cannot be found) or 410 (if the resource was already deleted before)"))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Important:")," After deleting a resource with DELETE, a GET request on the resource is expected to either return 404 (not found) or 410 (gone) depending on how the resource is represented after deletion. Under no circumstances the resource must be accessible after this operation on its endpoint."),Object(s.b)("h2",{id:"must-use-content-headers-correctly"},"MUST Use Content Headers Correctly"),Object(s.b)("p",null,"Content or entity headers are headers with a ",Object(s.b)("inlineCode",{parentName:"p"},"Content-")," prefix. They describe the content of the body of the message and they can be used in both, HTTP requests and responses. Commonly used content headers include but are not limited to:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc6266"},Object(s.b)("inlineCode",{parentName:"a"},"Content-Disposition"))," can indicate that the representation is supposed to be saved as a file, and the proposed file name.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7231#section-3.1.2.2"},Object(s.b)("inlineCode",{parentName:"a"},"Content-Encoding"))," indicates compression or encryption algorithms applied to the content.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7230#section-3.3.2"},Object(s.b)("inlineCode",{parentName:"a"},"Content-Length"))," indicates the length of the content (in bytes).")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7231#section-3.1.3.2"},Object(s.b)("inlineCode",{parentName:"a"},"Content-Language"))," indicates that the body is meant for people literate in some human language(s).")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7231#section-3.1.4.2"},Object(s.b)("inlineCode",{parentName:"a"},"Content-Location"))," indicates where the body can be found otherwise.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7233#section-4.2"},Object(s.b)("inlineCode",{parentName:"a"},"Content-Range"))," is used in responses to range requests to indicate which part of the requested resource representation is delivered with the body.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7231#section-3.1.1.5"},Object(s.b)("inlineCode",{parentName:"a"},"Content-Type"))," indicates the media type of the body content."))),Object(s.b)("h2",{id:"may-use-other-standardized-headers"},"MAY Use Other Standardized Headers"),Object(s.b)("p",null,"Use ",Object(s.b)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/List_of_HTTP_header_fields"},"this list")," and mention its support in your OpenAPI definition."),Object(s.b)("h2",{id:"must-fulfill-safeness-and-idempotency-properties"},"MUST Fulfill Safeness and Idempotency Properties"),Object(s.b)("p",null,"An operation can be..."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"idempotent, i.e. operation will have the same effect on the server\u2019s state if executed once or multiple times (note: this does not necessarily mean returning the same response or status code)")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"safe, i.e. must not have side effects such as state changes"))),Object(s.b)("p",null,"Method implementations must fulfill the following basic properties:"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"HTTP method"),Object(s.b)("th",{parentName:"tr",align:null},"safe"),Object(s.b)("th",{parentName:"tr",align:null},"idempotent"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"GET"),Object(s.b)("td",{parentName:"tr",align:null},"Yes"),Object(s.b)("td",{parentName:"tr",align:null},"Yes")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"PUT"),Object(s.b)("td",{parentName:"tr",align:null},"No"),Object(s.b)("td",{parentName:"tr",align:null},"Yes")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"POST"),Object(s.b)("td",{parentName:"tr",align:null},"No"),Object(s.b)("td",{parentName:"tr",align:null},"No")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"DELETE"),Object(s.b)("td",{parentName:"tr",align:null},"No"),Object(s.b)("td",{parentName:"tr",align:null},"Yes")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"PATCH"),Object(s.b)("td",{parentName:"tr",align:null},"No"),Object(s.b)("td",{parentName:"tr",align:null},"No")))),Object(s.b)("h2",{id:"should-define-collection-format-of-query-parameters-and-headers"},"SHOULD Define Collection Format of Query Parameters and Headers"),Object(s.b)("p",null,"Sometimes, query parameters and headers may allow users to provide a list of values by providing a comma-separated list (",Object(s.b)("inlineCode",{parentName:"p"},"csv"),"). The API specification should explicitly define the type as follows:"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Description"),Object(s.b)("th",{parentName:"tr",align:null},"OpenAPI 3.0"),Object(s.b)("th",{parentName:"tr",align:null},"Example"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"Comma separated values"),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("inlineCode",{parentName:"td"},"style: form, explode: false")),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("inlineCode",{parentName:"td"},"?param=value1,value2"))))),Object(s.b)("h2",{id:"must-document-implicit-filtering"},"MUST Document Implicit Filtering"),Object(s.b)("p",null,"Sometimes certain collection resources or queries will not list all the possible elements they have, but only those for which the current client is authorized to access."),Object(s.b)("p",null,"Implicit filtering could be done on:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"the collection of resources being returned on a parent ",Object(s.b)("inlineCode",{parentName:"p"},"GET")," request")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"the fields returned for the resource\u2019s detail"))),Object(s.b)("p",null,"In such cases, the implicit filtering must be in the API Specification (in its description):"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"paths:\n  /business-partner:\n    get:\n      description: >-\n        Get the list of registered business partner.\n        Only the business partners to which you have access to are returned.\n")),Object(s.b)("h2",{id:"must-specify-success-and-error-responses"},"MUST Specify Success and Error Responses"),Object(s.b)("p",null,"APIs should define the functional, business view and abstract from implementation aspects. Success and error responses are a vital part to define how an API is used correctly."),Object(s.b)("p",null,"Therefore, you must define ",Object(s.b)("strong",{parentName:"p"},"all")," success and service specific error responses in your API specification. Both are part of the interface definition and provide important information for service clients to handle standard as well as exceptional situations."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Hint:")," In most cases it is not useful to document all technical errors, especially if they are not under control of the service provider. Thus unless a response code conveys application-specific functional semantics or is used in a none standard way that requires additional explanation, multiple error response specifications can be combined using the following pattern:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"responses:\n  ...\n  default:\n    description: error occurred - see status code and problem object for more information.\n    content:\n      \"application/problem+json\":\n        schema:\n          $ref: 'https://github.io/problem/schema.yaml#/Problem'\n")),Object(s.b)("p",null,"API designers should also think about a ",Object(s.b)("strong",{parentName:"p"},"troubleshooting board")," as part of the associated online API documentation. It provides information and handling guidance on application-specific errors and is referenced via links from the API specification. This can reduce service support tasks and contribute to service client and provider performance."),Object(s.b)("h2",{id:"must-use-standard-http-status-codes"},"MUST Use Standard HTTP Status Codes"),Object(s.b)("p",null,"You must only use standardized HTTP status codes consistently with their intended semantics. You must not invent new HTTP status codes."),Object(s.b)("p",null,"RFC standards define ","~","60 different HTTP status codes with specific semantics (mainly ",Object(s.b)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7231#section-6"},"RFC7231")," and ",Object(s.b)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc6585"},"RFC-6585"),") \u2014 and there are upcoming new ones, e.g. ",Object(s.b)("a",{parentName:"p",href:"https://tools.ietf.org/html/draft-tbray-http-legally-restricted-status-05"},"draft legally-restricted-status"),".See overview on all error codes on ",Object(s.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes"},"Wikipedia")," or via ",Object(s.b)("a",{parentName:"p",href:"https://httpstatuses.com/"},"https://httpstatuses.com/"),") also inculding 'unofficial codes', e.g. used by popular web servers like Nginx."),Object(s.b)("p",null,"Below we list the most commonly used and best understood HTTP status codes, consistent with their semantics in the RFCs. APIs should only use these to prevent misconceptions that arise from less commonly used HTTP status codes."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Important:")," As long as your HTTP status code usage is well covered by the semantic defined here, you should not describe it to avoid an overload with common sense information and the risk of inconsistent definitions. Only if the HTTP status code is not in the list below or its usage requires additional information aside the well defined semantic, the API specification must provide a clear description of the HTTP status code in the response."),Object(s.b)("h3",{id:"success-codes"},"Success Codes"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Code"),Object(s.b)("th",{parentName:"tr",align:null},"Meaning"),Object(s.b)("th",{parentName:"tr",align:null},"Methods"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"200"),Object(s.b)("td",{parentName:"tr",align:null},"OK - this is the standard success response"),Object(s.b)("td",{parentName:"tr",align:null},"All")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"201"),Object(s.b)("td",{parentName:"tr",align:null},"Created - Returned on successful entity creation. You are free to return either an empty response or the created resource in conjunction with the Location header. (More details found in ",Object(s.b)("a",{parentName:"td",href:"#must-use-content-headers-correctly"},"common headers"),".) ",Object(s.b)("em",{parentName:"td"},"Always")," set the Location header."),Object(s.b)("td",{parentName:"tr",align:null},"POST, PUT")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"202"),Object(s.b)("td",{parentName:"tr",align:null},"Accepted - The request was successful and will be processed asynchronously."),Object(s.b)("td",{parentName:"tr",align:null},"POST, PUT, DELETE, PATCH")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"204"),Object(s.b)("td",{parentName:"tr",align:null},"No content - There is no response body"),Object(s.b)("td",{parentName:"tr",align:null},"PUT, DELETE, PATCH")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"207"),Object(s.b)("td",{parentName:"tr",align:null},"Multi-Status - The response body contains multiple status informations for different parts of a batch/bulk request. See ",Object(s.b)("a",{parentName:"td",href:"#must-use-code-207-for-batch-or-bulk-requests"},"MUST Use Code 207 for Batch or Bulk Requests"),"."),Object(s.b)("td",{parentName:"tr",align:null},"POST")))),Object(s.b)("h3",{id:"redirection-codes"},"Redirection Codes"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Code"),Object(s.b)("th",{parentName:"tr",align:null},"Meaning"),Object(s.b)("th",{parentName:"tr",align:null},"Methods"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"301"),Object(s.b)("td",{parentName:"tr",align:null},"Moved Permanently - This and all future requests should be directed to the given URI."),Object(s.b)("td",{parentName:"tr",align:null},"All")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"303"),Object(s.b)("td",{parentName:"tr",align:null},"See Other - The response to the request can be found under another URI using a GET method."),Object(s.b)("td",{parentName:"tr",align:null},"PATCH, POST, PUT, DELETE")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"304"),Object(s.b)("td",{parentName:"tr",align:null},"Not Modified - resource has not been modified since the date or version passed via request headers If-Modified-Since or If-None-Match."),Object(s.b)("td",{parentName:"tr",align:null},"GET")))),Object(s.b)("h3",{id:"client-side-error-codes"},"Client Side Error Codes"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Code"),Object(s.b)("th",{parentName:"tr",align:null},"Meaning"),Object(s.b)("th",{parentName:"tr",align:null},"Methods"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"400"),Object(s.b)("td",{parentName:"tr",align:null},"Bad request - generic / unknown error. Should also be delivered in case of input payload fails business logic validation."),Object(s.b)("td",{parentName:"tr",align:null},"All")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"401"),Object(s.b)("td",{parentName:"tr",align:null},'Unauthorized - the users must log in (this often means "Unauthenticated")'),Object(s.b)("td",{parentName:"tr",align:null},"All")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"403"),Object(s.b)("td",{parentName:"tr",align:null},"Forbidden - the user is not authorized to use this resource"),Object(s.b)("td",{parentName:"tr",align:null},"All")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"404"),Object(s.b)("td",{parentName:"tr",align:null},"Not found - the resource is not found"),Object(s.b)("td",{parentName:"tr",align:null},"All")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"405"),Object(s.b)("td",{parentName:"tr",align:null},"Method Not Allowed - the method is not supported"),Object(s.b)("td",{parentName:"tr",align:null},"All")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"406"),Object(s.b)("td",{parentName:"tr",align:null},"Not Acceptable - resource can only generate content not acceptable according to the Accept headers sent in the request"),Object(s.b)("td",{parentName:"tr",align:null},"All")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"415"),Object(s.b)("td",{parentName:"tr",align:null},"Unsupported Media Type - e.g. clients sends request body without content type"),Object(s.b)("td",{parentName:"tr",align:null},"POST, PUT, DELETE, PATCH")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"429"),Object(s.b)("td",{parentName:"tr",align:null},"Too many requests - the client does not consider rate limiting and sent too many requests. See ",Object(s.b)("a",{parentName:"td",href:"#153"},"MUST Use Code 429 with Headers for Rate Limits"),"."),Object(s.b)("td",{parentName:"tr",align:null},"All")))),Object(s.b)("h3",{id:"server-side-error-codes"},"Server Side Error Codes:"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Code"),Object(s.b)("th",{parentName:"tr",align:null},"Meaning"),Object(s.b)("th",{parentName:"tr",align:null},"Methods"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"500"),Object(s.b)("td",{parentName:"tr",align:null},"Internal Server Error - a generic error indication for an unexpected server execution problem (here, client retry may be sensible)"),Object(s.b)("td",{parentName:"tr",align:null},"All")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"503"),Object(s.b)("td",{parentName:"tr",align:null},"Service Unavailable - service is (temporarily) not available (e.g. if a required component or downstream service is not available)\u2009\u2014\u2009client retry may be sensible. If possible, the service should indicate how long the client should wait by setting the ",Object(s.b)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-7.1.3"},"'Retry-After'")," header."),Object(s.b)("td",{parentName:"tr",align:null},"All")))),Object(s.b)("h2",{id:"must-use-most-specific-http-status-codes"},"MUST Use Most Specific HTTP Status Codes"),Object(s.b)("p",null,"You must use the most specific HTTP status code when returning information about your request processing status or error situations."),Object(s.b)("h2",{id:"must-use-code-207-for-batch-or-bulk-requests"},"MUST Use Code 207 for Batch or Bulk Requests"),Object(s.b)("p",null,"Some APIs are required to provide either ",Object(s.b)("em",{parentName:"p"},"batch")," or ",Object(s.b)("em",{parentName:"p"},"bulk")," requests using POST for performance reasons, i.e. for communication and processing efficiency. In this case services may be in need to signal multiple response codes for each part of an batch or bulk request. As HTTP does not provide proper guidance for handling batch/bulk requests and responses, we herewith define the following approach:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"A batch or bulk request ",Object(s.b)("strong",{parentName:"p"},"always")," has to respond with HTTP status code ",Object(s.b)("strong",{parentName:"p"},"207"),", unless it encounters a generic or unexpected failure before looking at individual parts.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"A batch or bulk response with status code 207 ",Object(s.b)("strong",{parentName:"p"},"always")," returns a multi-status object containing sufficient status and/or monitoring information for each part of the batch or bulk request.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"A batch or bulk request may result in a status code 400/500, only if the service encounters a failure before looking at individual parts or, if an unanticipated failure occurs."))),Object(s.b)("p",null,"The before rules apply ",Object(s.b)("em",{parentName:"p"},"even in the case")," that processing of all individual part ",Object(s.b)("em",{parentName:"p"},"fail")," or each part is executed ",Object(s.b)("em",{parentName:"p"},"asynchronously"),"!"," They are intended to allow clients to act on batch and bulk responses by inspecting the individual results in a consistent way."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Note"),": while a ",Object(s.b)("em",{parentName:"p"},"batch")," defines a collection of requests triggering independent processes, a ",Object(s.b)("em",{parentName:"p"},"bulk")," defines a collection of independent resources created or updated together in one request. With respect to response processing this distinction normally does not matter."),Object(s.b)("h2",{id:"must-use-code-429-with-headers-for-rate-limits"},"MUST Use Code 429 with Headers for Rate Limits"),Object(s.b)("p",null,"APIs that wish to manage the request rate of clients must use the ",Object(s.b)("a",{parentName:"p",href:"http://tools.ietf.org/html/rfc6585"},"'429 Too Many Requests'")," response code if the client exceeded the request rate and therefore the request can\u2019t be fulfilled. Such responses must also contain header information providing further details to the client. There are two approaches a service can take for header information:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Return a ",Object(s.b)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7231#section-7.1.3"},"'Retry-After'")," header indicating how long the client ought to wait before making a follow-up request. The Retry-After header can contain a HTTP date value to retry after or the number of seconds to delay. Either is acceptable but APIs should prefer to use a delay in seconds.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Return a trio of 'X-RateLimit' headers. These headers (described below) allow a server to express a service level in the form of a number of allowing requests within a given window of time and when the window is reset."))),Object(s.b)("p",null,"The 'X-RateLimit' headers are:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"p"},"X-RateLimit-Limit"),": The maximum number of requests that the client is allowed to make in this window.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"p"},"X-RateLimit-Remaining"),": The number of requests allowed in the current window.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("inlineCode",{parentName:"p"},"X-RateLimit-Reset"),": The relative time in seconds when the rate limit window will be reset. ",Object(s.b)("strong",{parentName:"p"},"Beware")," that this is different to Github and Twitter\u2019s usage of a header with the same name which is using UTC epoch seconds instead."))),Object(s.b)("p",null,"The reason to allow both approaches is that APIs can have different needs. Retry-After is often sufficient for general load handling and request throttling scenarios and notably, does not strictly require the concept of a calling entity such as a tenant or named account. In turn this allows resource owners to minimise the amount of state they have to carry with respect to client requests. The 'X-RateLimit' headers are suitable for scenarios where clients are associated with pre-existing account or tenancy structures. 'X-RateLimit' headers are generally returned on every request and not just on a 429, which implies the service implementing the API is carrying sufficient state to track the number of requests made within a given window for each named entity."))}b.isMDXComponent=!0}}]);