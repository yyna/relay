(self.webpackChunk=self.webpackChunk||[]).push([[11451],{3905:(e,n,r)=>{"use strict";r.d(n,{Zo:()=>u,kt:()=>m});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),d=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(r),m=i,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||a;return r?t.createElement(h,o(o({ref:n},u),{},{components:r})):t.createElement(h,o({ref:n},u))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=r[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},34561:(e,n,r)=>{"use strict";r.r(n),r.d(n,{frontMatter:()=>l,metadata:()=>s,toc:()=>d,default:()=>p});var t=r(22122),i=r(19756),a=(r(67294),r(3905)),o=["components"],l={id:"new-in-relay-modern",title:"New in Relay Modern",original_id:"new-in-relay-modern"},s={unversionedId:"new-in-relay-modern",id:"version-v8.0.0/new-in-relay-modern",isDocsHomePage:!1,title:"New in Relay Modern",description:"A summary of the improvements and new features in Relay Modern.",source:"@site/versioned_docs/version-v8.0.0/Modern-NewInRelayModern.md",sourceDirName:".",slug:"/new-in-relay-modern",permalink:"/docs/v8.0.0/new-in-relay-modern",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v8.0.0/Modern-NewInRelayModern.md",version:"v8.0.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1622846240,formattedLastUpdatedAt:"6/4/2021",frontMatter:{id:"new-in-relay-modern",title:"New in Relay Modern",original_id:"new-in-relay-modern"}},d=[{value:"Modern API",id:"modern-api",children:[]},{value:"Modern Runtime",id:"modern-runtime",children:[{value:"Performance",id:"performance",children:[]},{value:"Smaller Bundle Size",id:"smaller-bundle-size",children:[]},{value:"Garbage Collection",id:"garbage-collection",children:[]},{value:"GraphQL Subscriptions &amp; Live Queries",id:"graphql-subscriptions--live-queries",children:[]},{value:"Injectable Custom Field Handlers",id:"injectable-custom-field-handlers",children:[]},{value:"Simpler Mutation API",id:"simpler-mutation-api",children:[]},{value:"Client Schema Extensions (Experimental)",id:"client-schema-extensions-experimental",children:[]},{value:"Flow Type Generation",id:"flow-type-generation",children:[]}]},{value:"Fewer Requirements around Routing",id:"fewer-requirements-around-routing",children:[]},{value:"Extensible Core",id:"extensible-core",children:[]}],u={toc:d};function p(e){var n=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,"A summary of the improvements and new features in Relay Modern."),(0,a.kt)("h2",{id:"modern-api"},"Modern API"),(0,a.kt)("p",null,"Compared to Relay Classic, the Relay Modern API has the following differentiating features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A simpler, more predictable mutation API. The restrictions on mutation queries from Relay Classic are also removed: mutation queries are static, fields can be arbitrarily nested, and may use arbitrary arguments."),(0,a.kt)("li",{parentName:"ul"},"When using ",(0,a.kt)("a",{parentName:"li",href:"./query-renderer"},(0,a.kt)("inlineCode",{parentName:"a"},"QueryRenderer")),", the restrictions on queries from Relay Classic are removed: queries may contain multiple root fields that use arbitrary arguments and return singular or plural values. The ",(0,a.kt)("inlineCode",{parentName:"li"},"viewer")," root field is now optional."),(0,a.kt)("li",{parentName:"ul"},"Routes are now optional: ",(0,a.kt)("inlineCode",{parentName:"li"},"QueryRenderer")," can be used without defining a route. More in the ",(0,a.kt)("a",{parentName:"li",href:"./routing"},"routing guide"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"QueryRenderer")," supports rendering small amounts of data directly, instead of requiring a container to access data. ",(0,a.kt)("a",{parentName:"li",href:"./fragment-container"},"Containers")," are optional and can be used as your application grows in size and complexity."),(0,a.kt)("li",{parentName:"ul"},"The API is overall simpler and more predictable.")),(0,a.kt)("p",null,"You can use ",(0,a.kt)("a",{parentName:"p",href:"./relay-compat"},"Compat mode")," to incrementally adopt Relay Modern APIs in an existing Relay app."),(0,a.kt)("h2",{id:"modern-runtime"},"Modern Runtime"),(0,a.kt)("p",null,"For new Relay apps or existing apps that have been fully converted to the Modern/Compat API, the Relay Modern runtime can be enabled to activate even more features. In addition to those described above, this includes:"),(0,a.kt)("h3",{id:"performance"},"Performance"),(0,a.kt)("p",null,"The new Relay Modern core is more light-weight and significantly faster than the previous version. It is redesigned to work with static queries, which allow us to push more work to build/compilation time. The Modern core is much smaller as a result of removing a lot of the complex features required for dynamic queries. The new core is also an order of magnitude faster in processing the response with an optimized parsing instruction set that is generated at build time. We no longer keep around tracking information needed for dynamic query generation, which drastically reduces the memory overhead of using Relay. This means more memory is left for making the UI feel responsive. Relay Modern also supports persisted queries, reducing the upload size of the request from the full query text to a simple id."),(0,a.kt)("h3",{id:"smaller-bundle-size"},"Smaller Bundle Size"),(0,a.kt)("p",null,"The Relay runtime bundle is roughly 20% of the size of Relay Classic."),(0,a.kt)("h3",{id:"garbage-collection"},"Garbage Collection"),(0,a.kt)("p",null,"The runtime automatically removes cached data that is no longer referenced, helping to reduce memory usage."),(0,a.kt)("h3",{id:"graphql-subscriptions--live-queries"},"GraphQL Subscriptions & Live Queries"),(0,a.kt)("p",null,"Relay Modern supports GraphQL Subscriptions, using the imperative update API to allow modifications to the store whenever a payload is received. It also features experimental support for GraphQL Live Queries via polling."),(0,a.kt)("h3",{id:"injectable-custom-field-handlers"},"Injectable Custom Field Handlers"),(0,a.kt)("p",null,"Some fields - especially those for paginated data - can require post-processing on the client in order to merge previously fetched data with new information. Relay Modern supports custom field handlers that can be used to process these fields to work with various pagination patterns and other use cases."),(0,a.kt)("h3",{id:"simpler-mutation-api"},"Simpler Mutation API"),(0,a.kt)("p",null,"An area we've gotten a lot of questions on was mutations and their configs. Relay Modern introduces a new mutation API that allows records and fields to be updated in a more direct manner."),(0,a.kt)("h3",{id:"client-schema-extensions-experimental"},"Client Schema Extensions (Experimental)"),(0,a.kt)("p",null,"The Relay Modern Core adds support for client schema extensions. These allow Relay to conveniently store some extra information with data fetched from the server and be rendered like any other field fetched from the server. This should be able to replace some use cases that previously required a Flux/Redux store on the side."),(0,a.kt)("h3",{id:"flow-type-generation"},"Flow Type Generation"),(0,a.kt)("p",null,"Relay Modern comes with automatic Flow type generation for the fragments used in Relay containers based on the GraphQL schema. Using these Flow types can help make an application less error-prone, by ensuring all possible ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," cases are considered even if they don't happen frequently."),(0,a.kt)("h2",{id:"fewer-requirements-around-routing"},"Fewer Requirements around Routing"),(0,a.kt)("p",null,"Routes no longer need to know anything about the query root in Relay Modern. Relay components can be rendered anywhere wrapped in a ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryRenderer"),". This should bring more flexibility around picking routing frameworks."),(0,a.kt)("h2",{id:"extensible-core"},"Extensible Core"),(0,a.kt)("p",null,"Relay Modern's core is essentially an un-opinionated store for GraphQL data. It can be used independent of rendering views using React and can be extended to be used with other frameworks."))}p.isMDXComponent=!0}}]);