(self.webpackChunk=self.webpackChunk||[]).push([[63721],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,y=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(y,i(i({ref:t},d),{},{components:n})):r.createElement(y,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68629:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(44256),a=n(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function i(e){var t=e.children;return a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),t)}var l=function(){var e=a.useState(!1),t=e[0],n=e[1],r=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":a.createElement(a.Fragment,null,"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return a.createElement("p",null,"Let us know how these docs can be improved by",a.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},p=function(){return a.createElement(i,null,a.createElement(s,null),a.createElement(l,null))},d=function(){return a.createElement(i,null,a.createElement(l,null))};const c=function(){return(0,r.fbContent)({internal:a.createElement(p,null),external:a.createElement(d,null)})}},7389:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>p,metadata:()=>d,toc:()=>c,default:()=>m});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=n(68629),l=n(44256),s=["components"],p={id:"load-entrypoint",title:"loadEntryPoint",slug:"/api-reference/load-entrypoint/",description:"API reference for loadEntryPoint, which imperatively loads an entrypoint and data for its queries",keywords:["entrypoint","preload","render-as-you-fetch"]},d={unversionedId:"api-reference/entrypoint-apis/load-entrypoint",id:"api-reference/entrypoint-apis/load-entrypoint",isDocsHomePage:!1,title:"loadEntryPoint",description:"API reference for loadEntryPoint, which imperatively loads an entrypoint and data for its queries",source:"@site/docs/api-reference/entrypoint-apis/load-entrypoint.md",sourceDirName:"api-reference/entrypoint-apis",slug:"/api-reference/load-entrypoint/",permalink:"/docs/next/api-reference/load-entrypoint/",editUrl:"https://github.com/facebook/relay/tree/main/website/docs/api-reference/entrypoint-apis/load-entrypoint.md",version:"current",lastUpdatedBy:"Evan Yeung",lastUpdatedAt:1626279463,formattedLastUpdatedAt:"7/14/2021",frontMatter:{id:"load-entrypoint",title:"loadEntryPoint",slug:"/api-reference/load-entrypoint/",description:"API reference for loadEntryPoint, which imperatively loads an entrypoint and data for its queries",keywords:["entrypoint","preload","render-as-you-fetch"]},sidebar:"docs",previous:{title:"useEntryPointLoader",permalink:"/docs/next/api-reference/use-entrypoint-loader/"},next:{title:"EntryPointContainer",permalink:"/docs/next/api-reference/entrypoint-container/"}},c=[{value:"<code>loadEntryPoint</code>",id:"loadentrypoint",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Flow Type Parameters",id:"flow-type-parameters",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Behavior",id:"behavior",children:[]}]}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"loadentrypoint"},(0,o.kt)("inlineCode",{parentName:"h2"},"loadEntryPoint")),(0,o.kt)("p",null,"This function is designed to be used with ",(0,o.kt)("inlineCode",{parentName:"p"},"EntryPointContainer"),' to implement the "render-as-you-fetch" pattern.'),(0,o.kt)("p",null,"EntryPoint references returned from ",(0,o.kt)("inlineCode",{parentName:"p"},"loadEntryPoint")," will leak data to the Relay store (if they have associated queries) unless ",(0,o.kt)("inlineCode",{parentName:"p"},".dispose()")," is called on them once they are no longer referenced. As such, prefer using ",(0,o.kt)("inlineCode",{parentName:"p"},"useEntryPointLoader")," when possible, which ensures that EntryPoint references are correctly disposed for you. See the ",(0,o.kt)("a",{parentName:"p",href:"../use-entrypoint-loader"},(0,o.kt)("inlineCode",{parentName:"a"},"useEntryPointLoader"))," docs for a more complete example."),(0,o.kt)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,o.kt)("p",null,"For more information, see the ",(0,o.kt)("a",{parentName:"p",href:"../../guides/entrypoints/using-entrypoints/#loading-entrypoints"},"Loading EntryPoints")," guide.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const EntryPoint = require('MyComponent.entrypoint.js');\n\nconst {loadQuery} = require('react-relay');\n\n// Generally, your component should access the environment from the React context,\n// and pass that environment to this function.\nconst getEntrypointReference = environment => loadEntryPoint(\n  { getEnvironment: () => environment },\n  EntryPoint,\n  {id: '4'},\n);\n\n// later: pass entryPointReference to EntryPointContainer\n// Note that EntryPoint references should have .dispose() called on them,\n// which is missing in this example.\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"environmentProvider"),": A provider for a Relay Environment instance on which to execute the request. If you're starting this request somewhere within a React component, you probably want to use the environment you obtain from using ",(0,o.kt)("a",{parentName:"li",href:"../use-relay-environment/"},(0,o.kt)("inlineCode",{parentName:"a"},"useRelayEnvironment")),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"EntryPoint"),": EntryPoint to load."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"entryPointParams"),": Parameters that will be passed to the EntryPoint's ",(0,o.kt)("inlineCode",{parentName:"li"},"getPreloadProps")," method.")),(0,o.kt)("h3",{id:"flow-type-parameters"},"Flow Type Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TEntryPointParams"),": Type parameter corresponding to the type of the first parameter of the ",(0,o.kt)("inlineCode",{parentName:"li"},"getPreloadProps")," method of the EntryPoint."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TPreloadedQueries"),": the type of the ",(0,o.kt)("inlineCode",{parentName:"li"},"queries")," parameter to the EntryPoint component."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TPreloadedEntryPoints"),": the type of the ",(0,o.kt)("inlineCode",{parentName:"li"},"entrypoints")," parameter passed to the EntryPoint component."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TRuntimeProps"),": the type of the ",(0,o.kt)("inlineCode",{parentName:"li"},"props")," prop passed to ",(0,o.kt)("inlineCode",{parentName:"li"},"EntryPointContainer"),". This object is passed down to the EntryPoint component, also as ",(0,o.kt)("inlineCode",{parentName:"li"},"props"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TExtraProps"),": if an EntryPoint's ",(0,o.kt)("inlineCode",{parentName:"li"},"getPreloadProps")," method returns an object with an ",(0,o.kt)("inlineCode",{parentName:"li"},"extraProps")," property, those extra props will be passed to the EntryPoint component as ",(0,o.kt)("inlineCode",{parentName:"li"},"extraProps"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TEntryPointComponent"),": the type of the EntryPoint."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TEntryPoint"),": the type of the EntryPoint.")),(0,o.kt)("h3",{id:"return-value"},"Return Value"),(0,o.kt)("p",null,"An EntryPoint reference with the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dispose"),": a method that will release any query references loaded by this EntryPoint (including indirectly, by way of other EntryPoints) from being retained by the store. This can cause the data referenced by these query reference to be garbage collected.")),(0,o.kt)("p",null,"The exact format of the return value is ",(0,o.kt)("em",{parentName:"p"},"unstable and highly likely to change"),". We strongly recommend not using any other properties of the return value, as such code would be highly likely to break when upgrading to future versions of Relay. Instead, pass the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"loadEntryPoint()")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"EntryPointContainer"),"."),(0,o.kt)("h3",{id:"behavior"},"Behavior"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When ",(0,o.kt)("inlineCode",{parentName:"li"},"loadEntryPoint()")," is called, each of an EntryPoint's associated queries (if it has any) will load their query data and query AST. Once both the query AST and the data are available, the data will be written to the store. This differs from the behavior of ",(0,o.kt)("inlineCode",{parentName:"li"},"prepareEntryPoint_DEPRECATED"),", which would only write the data from an associated query to the store when that query was rendered with ",(0,o.kt)("inlineCode",{parentName:"li"},"usePreloadedQuery"),"."),(0,o.kt)("li",{parentName:"ul"},"The EntryPoint reference's associated query references will be retained by the Relay store, preventing it the data from being garbage collected. Once you call ",(0,o.kt)("inlineCode",{parentName:"li"},".dispose()")," on the EntryPoint reference, the data from the associated queries is liable to be garbage collected."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"loadEntryPoint")," may throw an error if it is called during React's render phase.")),(0,o.kt)(i.Z,{mdxType:"DocsRating"}))}m.isMDXComponent=!0}}]);