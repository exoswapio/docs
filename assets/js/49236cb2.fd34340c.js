"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6521],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,h=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return r?a.createElement(h,s(s({ref:t},p),{},{components:r})):a.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:n,s[1]=l;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(7294),n=r(6010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:r,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,s),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>v});var a=r(7462),n=r(7294),o=r(6010),s=r(2466),l=r(6550),i=r(1980),u=r(7392),p=r(12);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,u]=h({queryString:r,groupId:a}),[c,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),f=(()=>{const e=i??c;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var f=r(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:l,selectValue:i,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,r=p.indexOf(t),a=u[r].value;a!==l&&(c(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:s}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},s,{className:(0,o.Z)("tabs__item",k.tabItem,s?.className,{"tabs__item--active":l===t})}),r??t)})))}function w(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=b(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},n.createElement(g,(0,a.Z)({},e,t)),n.createElement(w,(0,a.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return n.createElement(y,(0,a.Z)({key:String(t)},e))}},2819:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=r(7462),n=(r(7294),r(3905)),o=r(4866),s=r(5162);const l={id:"network",title:"Network",description:"Build your next blockchain app with Exoswap.",keywords:["docs","exoswap","stratos"],image:"https://raw.githubusercontent.com/stratosnet/token-lists/master/logo.svg"},i=void 0,u={unversionedId:"develop/network-details/network",id:"develop/network-details/network",title:"Network",description:"Build your next blockchain app with Exoswap.",source:"@site/docs/develop/network-details/network.md",sourceDirName:"develop/network-details",slug:"/develop/network-details/network",permalink:"/docs/develop/network-details/network",draft:!1,editUrl:"https://github.com/exoswapio/docs/tree/master/docs/develop/network-details/network.md",tags:[],version:"current",frontMatter:{id:"network",title:"Network",description:"Build your next blockchain app with Exoswap.",keywords:["docs","exoswap","stratos"],image:"https://raw.githubusercontent.com/stratosnet/token-lists/master/logo.svg"},sidebar:"bridge",previous:{title:"Bridge Router",permalink:"/docs/bridge/contracts/bridge-router"},next:{title:"Deployed contracts",permalink:"/docs/bridge/network-details/deployed"}},p={},c=[],d={toc:c},m="wrapper";function h(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{defaultValue:"mesos",values:[{label:"Mesos-Testnet",value:"mesos"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"mesos",mdxType:"TabItem"},(0,n.kt)("h1",{id:"mesos-testnet"},"Mesos-Testnet"),(0,n.kt)("p",null,"Mesos Testnet replicates the Stratos Mainnet, which is to be used for testing. Testnet coins are separate and distinct from actual tokens/assets, and are never supposed to have any value. This allows application developers or validators/testers to experiment, without having to use real assets or worrying about breaking the main Stratos chain."),(0,n.kt)("p",null,"The documentation corresponding contains details for the RPC - HTTP, WS endpoints. There is also a full node setup if you wish to setup your own full node."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"NetworkName"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Mesos")," (",(0,n.kt)("a",{parentName:"td",href:"https://chainlist.org/?chain=2048&search=stratos&testnets=true"},"Add to MetaMask"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"chainId"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"2047"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Gas Token"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"STOS Token")," (",(0,n.kt)("a",{parentName:"td",href:"gas-token"},"For more..."),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RPC"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"https://web3-rpc-mesos.thestratos.org"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Block Explorer"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://web3-explorer-mesos.thestratos.org"},(0,n.kt)("inlineCode",{parentName:"a"},"https://web3-explorer-mesos.thestratos.org")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Faucet"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://faucet-mesos.thestratos.org"},"https://faucet-mesos.thestratos.org"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Thegraph (graphql)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://web3-thegraph-mesos.thestratos.org/subgraphs/name/"},(0,n.kt)("inlineCode",{parentName:"a"},"https://web3-thegraph-mesos.thestratos.org/subgraphs/name/")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Thegraph (rpc)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://web3-thegraph-mesos.thestratos.org/rpc/"},(0,n.kt)("inlineCode",{parentName:"a"},"https://web3-thegraph-mesos.thestratos.org/rpc/")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Thegraph (ipfs)"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://web3-thegraph-mesos.thestratos.org/ipfs/"},(0,n.kt)("inlineCode",{parentName:"a"},"https://web3-thegraph-mesos.thestratos.org/ipfs/")))))),(0,n.kt)("admonition",{type:"important"},(0,n.kt)("p",{parentName:"admonition"},"Mesos network native token is ",(0,n.kt)("strong",{parentName:"p"},"STOS")," which will be used as gas fee.")))))}h.isMDXComponent=!0}}]);