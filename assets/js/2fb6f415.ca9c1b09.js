"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7666],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,g=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(g,s(s({ref:t},u),{},{components:r})):a.createElement(g,s({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:n,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(7294),n=r(6010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:r,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,s),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>v});var a=r(7462),n=r(7294),o=r(6010),s=r(2466),l=r(6550),i=r(1980),c=r(7392),u=r(12);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=p(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,c]=g({queryString:r,groupId:a}),[d,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),f=(()=>{const e=i??d;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var f=r(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:r,selectedValue:l,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,r=u.indexOf(t),a=c[r].value;a!==l&&(d(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:s}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},s,{className:(0,o.Z)("tabs__item",h.tabItem,s?.className,{"tabs__item--active":l===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=b(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},n.createElement(k,(0,a.Z)({},e,t)),n.createElement(y,(0,a.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return n.createElement(w,(0,a.Z)({key:String(t)},e))}},2746:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=r(7462),n=(r(7294),r(3905)),o=r(4866),s=r(5162);const l={id:"deployed",title:"Deployed contracts",description:"Build your next blockchain app with Stratos.",keywords:["docs","stratos","exoswap"],image:"https://raw.githubusercontent.com/stratosnet/token-lists/master/logo.svg"},i=void 0,c={unversionedId:"bridge/network-details/deployed",id:"bridge/network-details/deployed",title:"Deployed contracts",description:"Build your next blockchain app with Stratos.",source:"@site/docs/bridge/network-details/deployed.md",sourceDirName:"bridge/network-details",slug:"/bridge/network-details/deployed",permalink:"/docs/bridge/network-details/deployed",draft:!1,editUrl:"https://github.com/exoswapio/docs/tree/master/docs/bridge/network-details/deployed.md",tags:[],version:"current",frontMatter:{id:"deployed",title:"Deployed contracts",description:"Build your next blockchain app with Stratos.",keywords:["docs","stratos","exoswap"],image:"https://raw.githubusercontent.com/stratosnet/token-lists/master/logo.svg"},sidebar:"bridge",previous:{title:"Network",permalink:"/docs/develop/network-details/network"},next:{title:"Exoswap tokens",permalink:"/docs/bridge/network-details/bridged-tokens"}},u={},d=[{value:"Mesos (Testnet)",id:"mesos-testnet",level:2},{value:"Goerli (Testnet)",id:"goerli-testnet",level:2}],p={toc:d},m="wrapper";function g(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{defaultValue:"mesos",values:[{label:"Mesos",value:"mesos"},{label:"Goerli",value:"goerli"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"mesos",mdxType:"TabItem"},(0,n.kt)("h2",{id:"mesos-testnet"},"Mesos (Testnet)"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Contract"),(0,n.kt)("th",{parentName:"tr",align:null},"ABI"),(0,n.kt)("th",{parentName:"tr",align:null},"Address"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"BridgeTokenManager"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{target:"_blank",href:"https://raw.githubusercontent.com/stratosnet/exoswap-monorepo/master/packages/contracts-bridge/deployments/mesos/BridgeTokenManager.json"},(0,n.kt)("img",{src:"https://img.icons8.com/metro/26/000000/download.png",width:"25px",style:{padding:"2px"}}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://web3-explorer-mesos.thestratos.org/address/0xf4cfB062dFd0A601B4d66c56c3Df100871951867/transactions"},"0xf4cfB062dFd0A601B4d66c56c3Df100871951867"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"BridgeCosignerManager"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{target:"_blank",href:"https://raw.githubusercontent.com/stratosnet/exoswap-monorepo/master/packages/contracts-bridge/deployments/mesos/BridgeCosignerManager.json"},(0,n.kt)("img",{src:"https://img.icons8.com/metro/26/000000/download.png",width:"25px",style:{padding:"2px"}}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://web3-explorer-mesos.thestratos.org/address/0x79691C47cBCBd7EfF0064722FBc5a2C73ea2dCDe/transactions"},"0x79691C47cBCBd7EfF0064722FBc5a2C73ea2dCDe"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"BridgeRouter"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{target:"_blank",href:"https://raw.githubusercontent.com/stratosnet/exoswap-monorepo/master/packages/contracts-bridge/deployments/mesos/BridgeRouter_Implementation.json"},(0,n.kt)("img",{src:"https://img.icons8.com/metro/26/000000/download.png",width:"25px",style:{padding:"2px"}}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://web3-explorer-mesos.thestratos.org/address/0x51694400Ee3Fa3383122a5cBa229C6b131E79f41/transactions"},"0x51694400Ee3Fa3383122a5cBa229C6b131E79f41")))))),(0,n.kt)(s.Z,{value:"goerli",mdxType:"TabItem"},(0,n.kt)("h2",{id:"goerli-testnet"},"Goerli (Testnet)"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Contract"),(0,n.kt)("th",{parentName:"tr",align:null},"ABI"),(0,n.kt)("th",{parentName:"tr",align:null},"Address"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"BridgeTokenManager"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{target:"_blank",href:"https://raw.githubusercontent.com/stratosnet/exoswap-monorepo/master/packages/contracts-bridge/deployments/goerli/BridgeTokenManager.json"},(0,n.kt)("img",{src:"https://img.icons8.com/metro/26/000000/download.png",width:"25px",style:{padding:"2px"}}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://goerli.etherscan.io/address/0x8c51a0ff7fEF18f6675532813b15b9F5ccd4a602#code"},"0x8c51a0ff7fEF18f6675532813b15b9F5ccd4a602"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"BridgeCosignerManager"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{target:"_blank",href:"https://raw.githubusercontent.com/stratosnet/exoswap-monorepo/master/packages/contracts-bridge/deployments/goerli/BridgeCosignerManager.json"},(0,n.kt)("img",{src:"https://img.icons8.com/metro/26/000000/download.png",width:"25px",style:{padding:"2px"}}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://goerli.etherscan.io/address/0x7097988a6E0a8EDC360FeCFd733C0B77938B4a75#code"},"0x7097988a6E0a8EDC360FeCFd733C0B77938B4a75"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"BridgeRouter"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{target:"_blank",href:"https://raw.githubusercontent.com/stratosnet/exoswap-monorepo/master/packages/contracts-bridge/deployments/goerli/BridgeRouter_Implementation.json"},(0,n.kt)("img",{src:"https://img.icons8.com/metro/26/000000/download.png",width:"25px",style:{padding:"2px"}}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://goerli.etherscan.io/address/0xC26078B526454b51DbDB5367c19280070180D5fC#readProxyContract"},"0xC26078B526454b51DbDB5367c19280070180D5fC"))))))))}g.isMDXComponent=!0}}]);