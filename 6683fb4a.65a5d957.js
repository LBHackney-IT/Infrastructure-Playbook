(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{137:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),i=u(r),d=n,O=i["".concat(c,".").concat(d)]||i[d]||b[d]||o;return r?a.a.createElement(O,s(s({ref:t},p),{},{components:r})):a.a.createElement(O,s({ref:t},p))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(137)),c={id:"postgresql",title:"Creating users in PostgreSQL"},s={unversionedId:"postgresql",id:"postgresql",isDocsHomePage:!1,title:"Creating users in PostgreSQL",description:"How to add a Read-Only User to a PostgreSQL Database",source:"@site/docs/postgresql.md",slug:"/postgresql",permalink:"/Infrastructure-Playbook/postgresql",editUrl:"https://github.com/LBHackney-IT/Infrastructure-Playbook/edit/master/docs/postgresql.md",version:"current"},l=[{value:"How to add a Read-Only User to a PostgreSQL Database",id:"how-to-add-a-read-only-user-to-a-postgresql-database",children:[]},{value:"Optional",id:"optional",children:[]}],p={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"how-to-add-a-read-only-user-to-a-postgresql-database"},"How to add a Read-Only User to a PostgreSQL Database"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," 1. Create a new user: ")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"CREATE USER username WITH PASSWORD 'your_password';\n")),Object(o.b)("p",null,"This creates a new user with given username and password. By default password is set to never expire."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," 2. Grant user access to connect to the database: ")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"GRANT CONNECT ON DATABASE database_name TO username;\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," 3. Grant user access to specific schema: ")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"GRANT USAGE ON SCHEMA schema_name TO username;\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," 4. Grant select access to table(s) ")),Object(o.b)("p",null,"For a specific table:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT ON table_name TO username;\n")),Object(o.b)("p",null,"For all tables in specific schema:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT ON ALL TABLES IN SCHEMA schema_name TO username;\n")),Object(o.b)("h2",{id:"optional"},"Optional"),Object(o.b)("p",null,"If you want user to have select access to all new tables created in the future:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"ALTER DEFAULT PRIVILEGES IN SCHEMA schema_name\n\nGRANT SELECT ON TABLES TO username;\n")))}u.isMDXComponent=!0}}]);