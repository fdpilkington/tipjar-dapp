(function(t){function e(e){for(var i,o,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={app:0},r=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},4754:function(t,e,n){},5356:function(t,e,n){"use strict";var i=n("91a4"),a=n.n(i);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"root"}},[n("div",{attrs:{id:"header-container"}},[n("div",{attrs:{id:"header-content"}},[n("a",{staticClass:"has-text-primary is-size-5",attrs:{id:"header-title",href:"https://tipjar.link"}},[t._v("💸 TipJar")]),n("button",{staticClass:"button is-primary is-rounded",class:t.styleConnectButton,attrs:{id:"header-button"},on:{click:t.connectMetaMask}},[t._v(" "+t._s(t.connectMessage)+" ")])])]),n("div",{attrs:{id:"body-container"}},[n("div",{staticClass:"field has-addons has-addons-centered"},t._l(t.tabButtons,(function(e){return n("p",{key:e.label,staticClass:"control"},[n("button",{staticClass:"button is-rounded",on:{click:function(n){return t.changeTab(e)}}},[t._v(t._s(e.label))])])})),0),n(t.currentTab,{tag:"component"})],1),t._m(0)])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"footer-container"}},[n("div",{attrs:{id:"footer-content"}},[n("a",{staticClass:"has-text-primary",attrs:{id:"footer-github",href:"https://github.com/fdpilkington/tipjar-dapp"}},[t._v("GitHub")]),n("a",{staticClass:"has-text-primary",attrs:{id:"footer-about",href:"https://github.com/fdpilkington/tipjar-dapp#what-is-this"}},[t._v("What is this?")])])])}],o=(n("4de4"),n("c975"),n("fb6a"),n("07ac"),n("6314")),s=n.n(o),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"field has-addons has-addons-centered"},[n("p",{staticClass:"control is-expanded has-icons-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.fiatInput,expression:"fiatInput"}],staticClass:"input is-fullwidth",attrs:{type:"text",placeholder:"0.00",maxlength:"9",id:"fiat-input"},domProps:{value:t.fiatInput},on:{click:function(e){return t.errorFiatInputReset()},input:function(e){e.target.composing||(t.fiatInput=e.target.value)}}}),n("span",{staticClass:"icon is-small is-left"},[t._v("$")])]),n("p",{staticClass:"control"},[n("a",{staticClass:"button is-static",attrs:{id:"eth-price-button"}},[n("span",{attrs:{id:"eth-price-value"}},[t._v("≈ "+t._s(t.convertedToEth)+" ETH")])])])]),n("div",{staticClass:"field has-addons has-addons-centered"},[n("p",{staticClass:"control is-expanded"},[n("input",{staticClass:"input is-fullwidth",attrs:{type:"text",id:"get-link",readonly:""},domProps:{value:t.generatedLink}})]),n("p",{staticClass:"control"},[n("a",{staticClass:"button is-primary is-outlined",attrs:{id:"get-link-button"},on:{click:t.copyGeneratedLink}},[n("span",[t._v("Copy")])])])]),n("div",[n("button",{staticClass:"button is-primary is-rounded",attrs:{id:"send-tip-button"},on:{click:t.contractSend}},[t._v("Generate Link")])])])},l=[],u=(n("b680"),n("d3b7"),n("25f0"),n("bc3a")),d=n.n(u),p=n("1c55"),h=n("4e58"),f=n.n(h),b={label:"Send",props:["contract"],data:function(){return{fiatInput:null,ethPriceUsd:null,ethAmount:null,generatedLink:null}},computed:{convertedToEth:function(){var t=this.convertedToEthHelper();return isNaN(t)?(0).toFixed(3):t}},methods:{convertedToEthHelper:function(){var t=parseFloat(this.fiatInput)/parseFloat(this.ethPriceUsd);this.ethAmount=t;var e=Math.floor(t).toString().length;if(e>4){var n=7-e;return t.toFixed(n)}return t.toFixed(3)},contractSend:function(){if(this.fiatInput&&!isNaN(this.fiatInput)){var t=f()({length:16});this.generatedLink="tipjar.link/?"+t;var e="0x"+Object(p["keccak256"])(t),n=window.web3.utils.toWei(this.ethAmount.toString(),"ether");this.$parent.contract.methods.send(e).send({from:window.web3.givenProvider.selectedAddress,value:n})}else this.errorFiatInput()},copyGeneratedLink:function(){var t=document.getElementById("get-link");t.select(),t.setSelectionRange(0,99999),document.execCommand("copy")},errorFiatInput:function(){document.getElementById("fiat-input").classList.add("is-danger")},errorFiatInputReset:function(){document.getElementById("fiat-input").classList.remove("is-danger")}},mounted:function(){var t=this;this.generatedLink="Your link will appear here.",d.a.get("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd").then((function(e){return t.ethPriceUsd=e.data.ethereum.usd}))}},m=b,v=(n("5356"),n("2877")),g=Object(v["a"])(m,c,l,!1,null,null,null),y=g.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"field has-addons has-addons-centered"},[n("p",{staticClass:"control is-expanded"},[n("input",{staticClass:"input is-fullwidth",attrs:{type:"text",id:"fill-id",readonly:""},domProps:{value:t.id}})])]),n("div",[n("button",{staticClass:"button is-primary is-rounded",attrs:{id:"claim-tip-button"},on:{click:t.contractClaim}},[t._v("Claim Tip")])])])},k=[],C={label:"Claim",props:["idFromUrl"],data:function(){return{id:null}},methods:{contractClaim:function(){"Got a TipJar link? Paste it in your browser."!=this.$parent.idFromUrl?this.$parent.contract.methods.claim(this.$parent.idFromUrl).call({from:window.web3.givenProvider.selectedAddress}):this.errorFillId()},errorFillId:function(){document.getElementById("fill-id").classList.add("is-danger")}},mounted:function(){this.id=this.$parent.idFromUrl}},M=C,_=(n("61eb"),Object(v["a"])(M,w,k,!1,null,null,null)),T=_.exports,x={components:{SendTab:y,ClaimTab:T},data:function(){return{currentTab:y,connectedToMetaMask:!1,connectMessage:null,contract:null,idFromUrl:null}},computed:{tabButtons:function(){return Object.values(this.$options.components).filter((function(t){return Object.prototype.hasOwnProperty.call(t,"label")}))},styleConnectButton:function(){return{"is-outlined":!this.connectedToMetaMask,"is-light":this.connectedToMetaMask}}},methods:{changeTab:function(t){this.currentTab=t},queryUrl:function(){var t=window.location.href.slice(window.location.href.indexOf("?")+1);return"https://tipjar.link/"==t||"http://localhost:8080/"==t?"Got a TipJar link? Paste it in your browser.":t},connectMetaMask:function(){var t=this;window.ethereum?window.ethereum.enable().then((function(e){t.connectMessage=e[0].substring(0,12)+"...",t.connectedToMetaMask=!0})):window.location.href="https://metamask.io"},getContract:function(){return new window.web3.eth.Contract([{constant:!1,inputs:[{internalType:"string",name:"_id",type:"string"}],name:"claim",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"bytes32",name:"_hash",type:"bytes32"}],name:"send",outputs:[],payable:!0,stateMutability:"payable",type:"function"}],"0x10e8e03B97ebA42007C7AF80F1B723b954F7b550")}},mounted:function(){var t=this;window.ethereum?this.connectMessage="Connect to MetaMask":this.connectMessage="Install MetaMask",window.web3=new s.a(window.web3.currentProvider),window.web3.eth.getAccounts().then((function(e){0==e.length?t.connectMessage="Connect to MetaMask":(t.connectMessage=e[0].toLowerCase().substring(0,12)+"...",t.connectedToMetaMask=!0)})),this.contract=this.getContract(),this.idFromUrl=this.queryUrl(),window.alert(window.location.href),"Got a TipJar link? Paste it in your browser."!=this.idFromUrl&&this.changeTab("claimTab")}},F=x,j=(n("af28"),Object(v["a"])(F,a,r,!1,null,"5150b2a1",null)),P=j.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(P)}}).$mount("#app")},"61eb":function(t,e,n){"use strict";var i=n("b2a3"),a=n.n(i);a.a},"91a4":function(t,e,n){},af28:function(t,e,n){"use strict";var i=n("4754"),a=n.n(i);a.a},b2a3:function(t,e,n){}});
//# sourceMappingURL=app.4f886cef.js.map