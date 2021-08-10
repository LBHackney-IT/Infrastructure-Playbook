(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(7),i=(n(0),n(137)),s={id:"unit_testing",title:"Writing Unit Tests"},o={unversionedId:"unit_testing",id:"unit_testing",isDocsHomePage:!1,title:"Writing Unit Tests",description:"Introduction",source:"@site/docs/unit_testing.md",slug:"/unit_testing",permalink:"/Infrastructure-Playbook/unit_testing",editUrl:"https://github.com/LBHackney-IT/Infrastructure-Playbook/edit/master/docs/unit_testing.md",version:"current"},l=[{value:"Introduction",id:"introduction",children:[{value:"Video Tutorial",id:"video-tutorial",children:[]},{value:"Create the Test File",id:"create-the-test-file",children:[]},{value:"Create the Implementation",id:"create-the-implementation",children:[]},{value:"Refactor the Test",id:"refactor-the-test",children:[]},{value:"Refactoring the Test (Again)",id:"refactoring-the-test-again",children:[]}]}],p={toc:l};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"Unit tests are used to test the functionality of an individual function or a\ncollection of functions. This will be a simple introduction to unit testing,\nwhere we use TDD to implement a basic greeter method."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"This article assumes you are working in a repository forked from ",Object(i.b)("a",{parentName:"strong",href:"https://github.com/LBHackney-IT/lbh-base-api"},"LBHackney-IT/lbh-base-api"),".")),Object(i.b)("h3",{id:"video-tutorial"},"Video Tutorial"),Object(i.b)("p",null,"Watch the video version of this page if you prefer:"),Object(i.b)("figure",{class:"video-container"},Object(i.b)("iframe",{width:"100%",src:"https://www.youtube.com/embed/M-_F_Tr6paQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(i.b)("h3",{id:"create-the-test-file"},"Create the Test File"),Object(i.b)("p",null,"Create a new file somewhere, named ",Object(i.b)("inlineCode",{parentName:"p"},"GreetingGatewayTests.cs"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dotnet",metastring:'title="GreetingGatewayTests.cs"',title:'"GreetingGatewayTests.cs"'},"using FluentAssertions;\nusing NUnit.Framework;\nusing TestApi.V1.Gateways;\n\nnamespace TestApi.Tests.V1.Gateways { }\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"The ",Object(i.b)("inlineCode",{parentName:"em"},"using")," statements at the top provide references to things we will use\nlater on.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"At HackIT, we typically use a separate ",Object(i.b)("inlineCode",{parentName:"em"},"<ProjectName>.Tests")," namespace to\ncontain test code."))),Object(i.b)("p",null,"This doesn't test anything yet! We need to add some more code."),Object(i.b)("p",null,"Create the test class, and the initial signature of the test method."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dotnet",metastring:'title="GreetingGatewayTests.cs" {7,9}',title:'"GreetingGatewayTests.cs"',"{7,9}":!0},"using FluentAssertions;\nusing NUnit.Framework;\nusing TestApi.V1.Gateways;\n\nnamespace TestApi.Tests.V1.Gateways\n{\n  [TestFixture]\n  public class GreetingGatewayTests {\n    [Test]\n    public void GetGreetingForNameReturnsCorrectGreeting() { }\n  }\n}\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Two of the lines above are highlighted. These ",Object(i.b)("inlineCode",{parentName:"em"},"[Symbols]")," are called\n"),Object(i.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/attributes/"},"Attributes"),Object(i.b)("em",{parentName:"li"},";\nthey are part of the C# Language."))),Object(i.b)("p",null,"We are using the ",Object(i.b)("a",{parentName:"p",href:"https://nunit.org/"},"NUnit unit-testing framework")," in this\nexample, so we use ",Object(i.b)("inlineCode",{parentName:"p"},"[TestFixture]")," attribute to indicate to NUnit that we are\nwriting a test ",Object(i.b)("strong",{parentName:"p"},"class"),"; and ",Object(i.b)("inlineCode",{parentName:"p"},"[Test]")," to indicate that we are writing a test\n",Object(i.b)("strong",{parentName:"p"},"method"),"."),Object(i.b)("p",null,"Also, notice the test method name. The name should be descriptive and indicative\nof the desired effect of calling the method."),Object(i.b)("p",null,"Now, add the actual test code!"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dotnet",metastring:'title="GreetingGatewayTests.cs" {11,12}',title:'"GreetingGatewayTests.cs"',"{11,12}":!0},'using FluentAssertions;\nusing NUnit.Framework;\nusing TestApi.V1.Gateways;\n\nnamespace TestApi.Tests.V1.Gateways\n{\n  [TestFixture]\n  public class GreetingGatewayTests {\n    [Test]\n    public void GetGreetingForNameReturnsCorrectGreeting() {\n      var result = GreetingGateway.GetGreetingForName();\n      result.Should().BeEquivalentTo("Hi, James!");\n    }\n  }\n}\n')),Object(i.b)("p",null,"First, we call the method we are testing, and assign its result to the\nvariable ",Object(i.b)("inlineCode",{parentName:"p"},"result"),".\nThen, we compare the result we captured with the result we want the method to\nprovide."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"The ",Object(i.b)("inlineCode",{parentName:"em"},"Should().BeEquivalentTo()")," syntax is provided by\n",Object(i.b)("a",{parentName:"em",href:"https://fluentassertions.com/"},Object(i.b)("inlineCode",{parentName:"a"},"FluentAssertions"))," extension methods. It\nmakes our "),"Assert",Object(i.b)("em",{parentName:"li"}," lines read more nicely.")),Object(i.b)("li",{parentName:"ul"},"Your IDE or Text Editor might complain when you write these lines, because\nneither the ",Object(i.b)("inlineCode",{parentName:"li"},"GreetingGateway")," nor its ",Object(i.b)("inlineCode",{parentName:"li"},"GetGreetingForName")," method exists yet.\nThis is normal, and is actually part of the TDD process!")),Object(i.b)("h4",{id:"running-the-test"},"Running the Test"),Object(i.b)("p",null,"Now that we have some test code, we can try to run it."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal" {7}',title:'"Terminal"',"{7}":!0},"~/tdd_practice$ dotnet test\n\n  Determining projects to restore...\n  All projects are up-to-date for restore.\n  TestApi -> ~/repo/test-api/TestApi/bin/Debug/netcoreapp3.1/TestApi.dll\n~/repo/test-api/TestApi.Tests/V1/Gateways/GreetingGatewayTests.cs(13,26):\nerror CS0103: The name 'GreetingGateway' does not exist in the current context [~/repo/test-api/TestApi.Tests/TestApi.Tests.csproj]\n\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"Running "),Object(i.b)("inlineCode",{parentName:"li"},"dotnet test"),Object(i.b)("em",{parentName:"li"}," this time exited before any tests were run, so the\noutput here is a compilation error, rather than being from the testing\nframework itself. However, we can "),"treat",Object(i.b)("em",{parentName:"li"}," this as a failing test, and solve\nthe problem that the output describes."))),Object(i.b)("p",null,"The output tells us that ",Object(i.b)("inlineCode",{parentName:"p"},"GreetingGateway")," doesn't exist. That's true - we\nhaven't made it yet!"),Object(i.b)("h3",{id:"create-the-implementation"},"Create the Implementation"),Object(i.b)("p",null,"We will write the most minimal piece of code that will pass the test."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dotnet",metastring:'title="GreetingGateway.cs"',title:'"GreetingGateway.cs"'},'namespace TestApi.V1.Gateways\n{\n  public static class GreetingGateway\n  {\n    public static string GetGreetingForName()\n    {\n      return "Hi, James!";\n    }\n  }\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"We are using the same names for the class and method that we wrote into the\ntest method."))),Object(i.b)("h4",{id:"running-the-test-1"},"Running the test"),Object(i.b)("p",null,"We have addressed the error in the previous test run's output by creating the\nclass that didn't exist, ",Object(i.b)("inlineCode",{parentName:"p"},"GreetingGateway")," (and added the method pre-emptively,\nto save some test runs)."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal" {14}',title:'"Terminal"',"{14}":!0},"~/tdd_practice$ dotnet test\n\n  Determining projects to restore...\n  All projects are up-to-date for restore.\n  TestApi -> ~/repo/test-api/TestApi/bin/Debug/netcoreapp3.1/TestApi.dll\n  TestApi.Tests -> ~/repo/test-api/TestApi.Tests/bin/Debug/netcoreapp3.1/TestApi.Tests.dll\nTest run for ~/repo/test-api/TestApi.Tests/bin/Debug/netcoreapp3.1/TestApi.Tests.dll (.NETCoreApp,Version=v3.1)\nMicrosoft (R) Test Execution Command Line Tool Version 16.8.1\nCopyright (c) Microsoft Corporation.  All rights reserved.\n\nStarting test execution, please wait...\nA total of 1 test files matched the specified pattern.\n\nPassed!  - Failed:  0, Passed:  23, Skipped:  0, Total:  23, Duration: 913 ms - ~/repo/test-api/TestApi.Tests/bin/Debug/netcoreapp3.1/TestApi.Tests.dll (netcoreapp3.1)\n\n")),Object(i.b)("p",null,"All of the tests in the project have passed! Our new code works, and it doesn't\nbreak anything that already existed in the codebase. Good news?"),Object(i.b)("p",null,"At this point, it probably seems like the method is wrong. It only works for\nJames, and it should greet anyone. In reality, though, the method is fine -\n",Object(i.b)("strong",{parentName:"p"},"it's the test that is wrong!")),Object(i.b)("h3",{id:"refactor-the-test"},"Refactor the Test"),Object(i.b)("p",null,"We need to make sure that this greeting method works regardless of the name of\nthe person it is greeting. Since this is a requirement of the feature, the test\nshould enforce it."),Object(i.b)("p",null,"What we want to do, is pass a name into ",Object(i.b)("inlineCode",{parentName:"p"},"GetGreetingForName"),", and have it return\nan appropriate greeting for that name."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dotnet",metastring:'title="GreetingGatewayTests.cs" {11-15}',title:'"GreetingGatewayTests.cs"',"{11-15}":!0},'using FluentAssertions;\nusing NUnit.Framework;\nusing TestApi.V1.Gateways;\n\nnamespace TestApi.Tests.V1.Gateways\n{\n  [TestFixture]\n  public class GreetingGatewayTests {\n    [Test]\n    public void GetGreetingForNameReturnsCorrectGreeting() {\n      var name = "Lisa";\n\n      var result = GreetingGateway.GetGreetingForName(name);\n\n      result.Should().BeEquivalentTo($"Hi, {name}!");\n    }\n  }\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"We've used "),Object(i.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated"},"string\ninterpolation"),Object(i.b)("em",{parentName:"li"},"\nin the "),"Assert",Object(i.b)("em",{parentName:"li"},", so that whatever we set "),Object(i.b)("inlineCode",{parentName:"li"},"name"),Object(i.b)("em",{parentName:"li"}," to, will be what we test\nthe "),Object(i.b)("inlineCode",{parentName:"li"},"result"),Object(i.b)("em",{parentName:"li"}," for."))),Object(i.b)("h4",{id:"running-the-tests"},Object(i.b)("em",{parentName:"h4"},"Running the tests")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal" {7}',title:'"Terminal"',"{7}":!0},"~/tdd_practice$ dotnet test\n\n  Determining projects to restore...\n  All projects are up-to-date for restore.\n  TestApi -> ~/repo/test-api/TestApi/bin/Debug/netcoreapp3.1/TestApi.dll\n~/repo/test-api/TestApi.Tests/V1/Gateways/GreetingGatewayTests.cs(14,42):\nerror CS1501: No overload for method 'GetGreetingForName' takes 1 arguments [~/repo/test-api/TestApi.Tests/TestApi.Tests.csproj]\n\n")),Object(i.b)("p",null,"And we are back to a compilation error."),Object(i.b)("p",null,"This time, it's because the method we've\nwritten for the implementation doesn't take any arguments, but we are trying to\nuse one in the test! Let's fix that."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dotnet",metastring:'title="GreetingGateway.cs" {5}',title:'"GreetingGateway.cs"',"{5}":!0},'namespace TestApi.V1.Gateways\n{\n  public static class GreetingGateway\n  {\n    public static string GetGreetingForName(string name)\n    {\n      return "Hi, James!";\n    }\n  }\n}\n')),Object(i.b)("p",null,"Now the method takes the name to be greeted as an argument."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal" {7}',title:'"Terminal"',"{7}":!0},"~/tdd_practice$ dotnet test\n\n  Determining projects to restore...\n  All projects are up-to-date for restore.\n  TestApi -> ~/repo/test-api/TestApi/bin/Debug/netcoreapp3.1/TestApi.dll\n~/repo/test-api/TestApi/V1/Gateways/GreetingGateway.cs(5,52):\nerror CA1801: Parameter name of method GetGreetingForName is never used. Remove the parameter or use it in the method body. [~/repo/test-api/TestApi/TestApi.csproj]\n\n")),Object(i.b)("p",null,"We are still getting a compilation error, because the compiler mandates that we\nuse the parameter we added to the method."),Object(i.b)("p",null,"This can be done using exactly the same interpolation used in the test itself."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dotnet",metastring:'title="GreetingGateway.cs" {7}',title:'"GreetingGateway.cs"',"{7}":!0},'namespace TestApi.V1.Gateways\n{\n  public static class GreetingGateway\n  {\n    public static string GetGreetingForName(string name)\n    {\n      return $"Hi, {name}!";\n    }\n  }\n}\n')),Object(i.b)("p",null,"Check the tests again:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal" {14}',title:'"Terminal"',"{14}":!0},"~/tdd_practice$ dotnet test\n\n  Determining projects to restore...\n  All projects are up-to-date for restore.\n  TestApi -> ~/repo/test-api/TestApi/bin/Debug/netcoreapp3.1/TestApi.dll\n  TestApi.Tests -> ~/repo/test-api/TestApi.Tests/bin/Debug/netcoreapp3.1/TestApi.Tests.dll\nTest run for ~/repo/test-api/TestApi.Tests/bin/Debug/netcoreapp3.1/TestApi.Tests.dll (.NETCoreApp,Version=v3.1)\nMicrosoft (R) Test Execution Command Line Tool Version 16.8.1\nCopyright (c) Microsoft Corporation.  All rights reserved.\n\nStarting test execution, please wait...\nA total of 1 test files matched the specified pattern.\n\nPassed!  - Failed:  0, Passed:  23, Skipped:  0, Total:  23, Duration: 908 ms - ~/repo/test-api/TestApi.Tests/bin/Debug/netcoreapp3.1/TestApi.Tests.dll (netcoreapp3.1)\n\n")),Object(i.b)("p",null,"This passes! \ud83c\udf89"),Object(i.b)("h3",{id:"refactoring-the-test-again"},"Refactoring the Test (Again)"),Object(i.b)("p",null,"To be pedantic, the test we currently have only ensures that the method will\nwork for people named Lisa. This is a simple example, so we can see quite\nclearly that this would work for other names as well."),Object(i.b)("p",null,"In other scenarios, it makes sense to test more thoroughly, covering as many use\ncases as possible. One approach that can help with this is to generate lots of\ndifferent inputs to the method, and check that they all work. This can help\nuncover strange edge cases."),Object(i.b)("p",null,"We can use a library called Bogus to help with this."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-dotnet",metastring:'title="GreetingGatewayTests.cs" {4,12}',title:'"GreetingGatewayTests.cs"',"{4,12}":!0},'using FluentAssertions;\nusing NUnit.Framework;\nusing TestApi.V1.Gateways;\nusing Bogus;\n\nnamespace TestApi.Tests.V1.Gateways\n{\n  [TestFixture]\n  public class GreetingGatewayTests {\n    [Test]\n    public void GetGreetingForNameReturnsCorrectGreeting() {\n      var name = new Faker().Name.FirstName();\n\n      var result = GreetingGateway.GetGreetingForName(name);\n\n      result.Should().BeEquivalentTo($"Hi, {name}!");\n    }\n  }\n}\n')),Object(i.b)("p",null,"In this example, we use Bogus to pick a random first name to assign to the\n",Object(i.b)("inlineCode",{parentName:"p"},"name")," variable. Every time the test is run, we assert that the method runs for\nthe random name."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal" {14}',title:'"Terminal"',"{14}":!0},"~/tdd_practice$ dotnet test\n\n  Determining projects to restore...\n  All projects are up-to-date for restore.\n  TestApi -> ~/repo/test-api/TestApi/bin/Debug/netcoreapp3.1/TestApi.dll\n  TestApi.Tests -> ~/repo/test-api/TestApi.Tests/bin/Debug/netcoreapp3.1/TestApi.Tests.dll\nTest run for ~/repo/test-api/TestApi.Tests/bin/Debug/netcoreapp3.1/TestApi.Tests.dll (.NETCoreApp,Version=v3.1)\nMicrosoft (R) Test Execution Command Line Tool Version 16.8.1\nCopyright (c) Microsoft Corporation.  All rights reserved.\n\nStarting test execution, please wait...\nA total of 1 test files matched the specified pattern.\n\nPassed!  - Failed:  0, Passed:  23, Skipped:  0, Total:  23, Duration: 939 ms - ~/repo/test-api/TestApi.Tests/bin/Debug/netcoreapp3.1/TestApi.Tests.dll (netcoreapp3.1)\n\n")),Object(i.b)("p",null,"Everything is still passing! The feature is complete and we have a robust test\nfor it."))}c.isMDXComponent=!0},137:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=c(n),m=a,d=b["".concat(s,".").concat(m)]||b[m]||u[m]||i;return n?r.a.createElement(d,o(o({ref:t},p),{},{components:n})):r.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);