!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vueEditable=e():t.vueEditable=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=44)}([function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(25)("wks"),o=n(15),i=n(2).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t,e,n,r,o){var i,u=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,u=t.default);var a="function"==typeof u?u.options:u;e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),r&&(a._scopeId=r);var c;if(o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},a._ssrRegister=c):n&&(c=n),c){var l=a.functional,f=l?a.render:a.beforeCreate;l?a.render=function(t,e){return c.call(e),f(t,e)}:a.beforeCreate=f?[].concat(f,c):[c]}return{esModule:i,exports:u,options:a}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){t.exports=!n(12)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(7),o=n(14);t.exports=n(5)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(9),o=n(34),i=n(27),u=Object.defineProperty;e.f=n(5)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(73),o=n(18);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports={}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=!0},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){"use strict";var r=n(56),o=n.n(r),i=n(60),u=n.n(i);e.a={zIndex:2e3,getZIndex:function(){return this.zIndex++},extendCopy:function(t){var e={};for(var n in t)e[n]=t[n];return e.uber=t,e},deepCopy:function(t,e){var e=e||{};for(var n in t)"object"===u()(t[n])&&t[n]?(e[n]=t[n].constructor===Array?[]:{},this.deepCopy(t[n],e[n])):e[n]=t[n];return e},currencyFormat:function(t,e){return(o()(100*t)/100).toFixed(e)},currencyParse:function(t,e,n){var r=function(t){return{value:t}},o=function(e,n){return{warning:e,value:n,attempt:t}},i=function(e){return new o(t+" is not a valid dollar amount",e)},u=function(e){return new o(t+" was automatically converted to "+e,e)},s=Number(t),a=t.indexOf("."),c=t.indexOf("e");if(isNaN(s))return-1===a&&c>0&&c===t.length-1&&0!==Number(t.slice(0,c))?new r(e):new i(e);var l=this.currencyFormat(s,n),f=Number(l);return f===s?-1!==c&&c===t.length-2?new u(s):new r(s):new i(s>f?f:e)},isObject:function(t){var e=void 0===t?"undefined":u()(t);return!!t&&("object"==e||"function"==e)},toNumber:function(t){if("number"==typeof t)return t;if(isSymbol(t))return NAN;if(isObject(t)){var e=isFunction(t.valueOf)?t.valueOf():t;t=isObject(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(reTrim,"");var n=reIsBinary.test(t);return n||reIsOctal.test(t)?freeParseInt(t.slice(2),n?2:8):reIsBadHex.test(t)?NAN:+t},debounce:function(t,e,n){function r(e){var n=d,r=p;return d=p=void 0,b=e,v=t.apply(r,n)}function o(t){return b=t,y=setTimeout(s,e),g?r(t):v}function i(t){var n=t-m,r=t-b,o=e-n;return x?nativeMin(o,h-r):o}function u(t){var n=t-m,r=t-b;return void 0===m||n>=e||n<0||x&&r>=h}function s(){var t=Date.now();if(u(t))return a(t);y=setTimeout(s,i(t))}function a(t){return y=void 0,_&&d?r(t):(d=p=void 0,v)}function c(){b=0,d=m=p=y=void 0}function l(){return void 0===y?v:a(Date.now())}function f(){var t=Date.now(),n=u(t);if(d=arguments,p=this,m=t,n){if(void 0===y)return o(m);if(x)return y=setTimeout(s,e),r(m)}return void 0===y&&(y=setTimeout(s,e)),v}var d,p,h,v,y,m,b=0,g=!1,x=!1,_=!0;if("function"!=typeof t)throw new TypeError(FUNC_ERROR_TEXT);return e=this.toNumber(e)||0,this.isObject(n)&&(g=!!n.leading,x="maxWait"in n,h=x?nativeMax(this.toNumber(n.maxWait)||0,e):h,_="trailing"in n?!!n.trailing:_),f.cancel=c,f.flush=l,f},add:function(){var t=[].slice.call(arguments);return function(){function e(){return[].push.apply(t,[].slice.call(arguments)),e}return e.valueOf=function(){return t.reduce(function(t,e){return t+e})},e}.apply(null,[].slice.call(arguments))}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(2),o=n(0),i=n(70),u=n(6),s=n(4),a=function(t,e,n){var c,l,f,d=t&a.F,p=t&a.G,h=t&a.S,v=t&a.P,y=t&a.B,m=t&a.W,b=p?o:o[e]||(o[e]={}),g=b.prototype,x=p?r:h?r[e]:(r[e]||{}).prototype;p&&(n=e);for(c in n)(l=!d&&x&&void 0!==x[c])&&s(b,c)||(f=l?x[c]:n[c],b[c]=p&&"function"!=typeof x[c]?n[c]:y&&l?i(f,r):m&&x[c]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):v&&"function"==typeof f?i(Function.call,f):f,v&&((b.virtual||(b.virtual={}))[c]=f,t&a.R&&g&&!g[c]&&u(g,c,f)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e,n){var r=n(39),o=n(19);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(7).f,o=n(4),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(25)("keys"),o=n(15);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(0),o=n(2),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(13)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(10);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(2),o=n(0),i=n(13),u=n(29),s=n(7).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:u.f(t)})}},function(t,e,n){e.f=n(1)},function(t,e,n){"use strict";var r=n(82)(!0);n(35)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){n(89);for(var r=n(2),o=n(6),i=n(11),u=n(1)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<s.length;a++){var c=s[a],l=r[c],f=l&&l.prototype;f&&!f[u]&&o(f,u,c),i[c]=i.Array}},function(t,e,n){var r=n(17),o=n(1)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),o))?n:i?r(e):"Object"==(s=r(e))&&"function"==typeof e.callee?"Arguments":s}},function(t,e,n){var r=n(10),o=n(2).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){t.exports=!n(5)&&!n(12)(function(){return 7!=Object.defineProperty(n(33)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var r=n(13),o=n(20),i=n(40),u=n(6),s=n(11),a=n(75),c=n(23),l=n(81),f=n(1)("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,h,v,y,m){a(n,e,h);var b,g,x,_=function(t){if(!d&&t in O)return O[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",k="values"==v,S=!1,O=t.prototype,C=O[f]||O["@@iterator"]||v&&O[v],j=C||_(v),I=v?k?_("entries"):j:void 0,P="Array"==e?O.entries||C:C;if(P&&(x=l(P.call(new t)))!==Object.prototype&&x.next&&(c(x,w,!0),r||"function"==typeof x[f]||u(x,f,p)),k&&C&&"values"!==C.name&&(S=!0,j=function(){return C.call(this)}),r&&!m||!d&&!S&&O[f]||u(O,f,j),s[e]=j,s[w]=p,v)if(b={values:k?j:_("values"),keys:y?j:_("keys"),entries:I},m)for(g in b)g in O||i(O,g,b[g]);else o(o.P+o.F*(d||S),e,b);return b}},function(t,e,n){var r=n(9),o=n(78),i=n(19),u=n(24)("IE_PROTO"),s=function(){},a=function(){var t,e=n(33)("iframe"),r=i.length;for(e.style.display="none",n(72).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[i[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(s.prototype=r(t),n=new s,s.prototype=null,n[u]=t):n=a(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(39),o=n(19).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(4),o=n(8),i=n(69)(!1),u=n(24)("IE_PROTO");t.exports=function(t,e){var n,s=o(t),a=0,c=[];for(n in s)n!=u&&r(s,n)&&c.push(n);for(;e.length>a;)r(s,n=e[a++])&&(~i(c,n)||c.push(n));return c}},function(t,e,n){t.exports=n(6)},function(t,e){!function(t){function e(){var t,e;t=document.createElement("div"),t.innerHTML=n,n=null,(e=t.getElementsByTagName("svg")[0])&&(e.setAttribute("aria-hidden","true"),e.style.position="absolute",e.style.width=0,e.style.height=0,e.style.overflow="hidden",u(e,document.body))}var n='<svg><symbol id="icon-arrow-down" viewBox="0 0 1024 1024"><path d="M27.285 281.115c0-10.874 1.86-17.008 10.206-25.163 16.497-16.148 45.055 14.62 61.204 31.113l413.142 420.797 425.387-425.387c16.323-16.323 48.791-44.033 65.116-27.714s10.374 35.363-5.947 51.684l-455.135 455.135c-7.818 7.818-18.54 12.234-29.757 12.234s-21.765-4.587-29.582-12.579l-442.56-450.89c-8.17-8.17-12.073-18.706-12.073-29.243z" fill="" ></path></symbol><symbol id="icon-checked" viewBox="0 0 1024 1024"><path d="M205.414 467.096l179.11 142.672 445.944-410.835s29.936-27.293 56.033-5.971c7.797 6.402 16.763 24.608-3.471 53.052L417.439 791.447s-35.736 48.861-78.105-0.538L138.421 519.597s-23.823-36.72 5.986-58.764c10.041-7.353 32.944-18.85 61.007 6.263"  ></path></symbol><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M486.4 811.52c-193.024 0-350.208-157.184-350.208-350.208S293.376 111.104 486.4 111.104s350.208 157.184 350.208 350.208c0.512 193.024-156.672 350.208-350.208 350.208m0-643.072c-161.28 0-292.864 131.584-292.864 292.864 0 161.28 131.584 292.864 292.864 292.864s292.864-131.584 292.864-292.864c0-161.792-131.072-292.864-292.864-292.864"  ></path><path d="M875.008 922.624c-9.216 0-18.432-3.584-25.6-10.752l-172.544-173.056c-13.824-13.824-13.824-36.864 0-50.688s36.864-13.824 50.688 0l172.544 173.056c13.824 13.824 13.824 36.864 0 50.688-6.656 7.168-15.872 10.752-25.088 10.752"  ></path></symbol></svg>',r=function(){var t=document.getElementsByTagName("script");return t[t.length-1]}(),o=r.getAttribute("data-injectcss"),i=function(t,e){e.parentNode.insertBefore(t,e)},u=function(t,e){e.firstChild?i(t,e.firstChild):e.appendChild(t)};if(o&&!t.__iconfont__svg__cssinject__){t.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(t){console&&console.log(t)}}!function(e){if(document.addEventListener)if(~["complete","loaded","interactive"].indexOf(document.readyState))setTimeout(e,0);else{var n=function t(){document.removeEventListener("DOMContentLoaded",t,!1),e()};document.addEventListener("DOMContentLoaded",n,!1)}else document.attachEvent&&function(t,e){var n=t.document,r=!1,o=function(){r||(r=!0,e())};!function t(){try{n.documentElement.doScroll("left")}catch(e){return void setTimeout(t,50)}o()}(),n.onreadystatechange=function(){"complete"==n.readyState&&(n.onreadystatechange=null,o())}}(t,e)}(e)}(window)},function(t,e,n){function r(t){n(99)}var o=n(3)(n(46),n(112),r,null,null);t.exports=o.exports},function(t,e,n){var r=n(3)(n(48),n(108),null,null,null);t.exports=r.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(41),o=(n.n(r),n(42)),i=n.n(o),u=n(43),s=n.n(u),a=n(16),c=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.installed||(e.prototype.$knife=a.a,e.config.keyCodes={up:[38],down:[40],left:[37],right:[39]},e.component("k-icon",s.a),e.component(i.a.name,i.a),n.zIndex&&a.a.zIndex)};"undefined"!=typeof window&&window.Vue&&c(window.Vue),e.default={install:c}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"k-check-box",props:["value"],data:function(){return{focus:!1}},methods:{checkedHandle:function(){this.$emit("change",!this.value)},handleKeyup:function(t){switch(t.keyCode){case 13:this.checkedHandle()}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(55),o=n.n(r),i=n(101),u=n.n(i);e.default={name:"k-editable",props:{config:{type:Object,required:!0},dataList:{type:Array}},components:{KField:u.a},computed:{hideFields:function(){var t=this.config.hideFields;return t?"string"==typeof t?t.split("|"):t:[]},fields:function(){var t=this;if(this.config.fields){return this.config.fields.filter(function(e){return!t.hideFields.includes(e.name)}).sort(function(t,e){return t.id-e.id})}return[]},list:function(){return this.config.list||{}},table:function(){return this.config.table||{}},query:function(){return this.config.query||{}}},data:function(){return{currentCell:null,currentRow:null,lastElement:null,dragField:null,dropField:null}},methods:{onChoose:function(t,e){var n=this;if(this.dataList.map(function(t){return t[n.config.primaryKey]}).includes(t[this.config.primaryKey]))return void alert("已经存在");this.currentRow=JSON.parse(o()(t)),this.dataList.splice(e,1,this.currentRow)},addRow:function(t,e,n){this.$emit("add-row",e)},deleteRow:function(t,e,n){this.$emit("del-row",e)},handleDragstart:function(t){this.dragField=t.target.dataset.field},handleDragenter:function(t){t.target.dataset.field!==this.dragField&&(this.dropField=t.target.dataset.field,t.target.style.backgroundColor="red")},handleDragleave:function(t){t.target.style.backgroundColor="#F9FAFC"},handleDrop:function(t){var e=this;if(this.dragField&&this.dropField){var n=this.config.fields,r=n.find(function(t){return t.name===e.dragField}),o=n.find(function(t){return t.name===e.dropField}),i=r.id;r.id=o.id,o.id=i,this.dragField=null,this.dropField=null}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(100),o=n.n(r),i=n(102),u=n.n(i),s=n(104),a=n.n(s),c=n(103),l=n.n(c),f=n(105),d=n.n(f);e.default={name:"k-field",props:{rowIndex:{type:Number},cellIndex:{type:Number},type:{required:!0,default:"span"},value:{required:!0},len:{default:0},listSlots:{default:""},table:{default:function(){return{}}}},components:{KCheckBox:o.a,KNumber:u.a,KSelect:a.a,KQuery:l.a,KText:d.a},data:function(){return{}},methods:{changeVal:function(t){this.$emit("update:value",t)},chooseVal:function(t){this.$emit("on-choose",t,this.rowIndex)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"m-icon",props:["xlink"]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(16);e.default={name:"k-number",props:{value:{default:0},len:{default:0}},mounted:function(){this.formatValue()},methods:{updateValue:function(t){var e=r.a.currencyParse(t,this.value,this.len);e.warning&&(this.$refs.input.value=0),this.$emit("change",isNaN(e.value)?0:e.value)},formatValue:function(){this.$refs.input.value=r.a.currencyFormat(this.value,this.len)},selectAll:function(t){setTimeout(function(){t.target.select()},0)},increment:function(){this.$emit("change",this.value+1)},diff:function(){this.$emit("change",this.value-1)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(16);e.default={name:"k-query",props:{value:{},fields:{type:Array,default:function(){return[]}},dataList:{type:Array,default:function(){return[]}},showAllInEmpty:{type:Boolean,default:!1}},data:function(){return{show:!1,searchList:[]}},methods:{openPanel:function(t){this.show=!0,this.$refs.contentInput.onblur=this.hidePanel},hidePanel:function(t){this.show=!1},choose:function(t){this.$emit("choose",t)},search:r.a.debounce(function(t){if(!this.showAllInEmpty&&""==t)return this.show=!1,void this.searchList.splice(0);this.searchList=this.dataList.filter(function(e){return e.name.includes(t)||e.No.toString().includes(t)})},300)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(59),o=n.n(r);e.default={name:"k-select",props:["value","slots"],data:function(){return{show:!1,activeItem:{}}},watch:{show:function(t){t&&this.$refs.selectInput.focus()}},computed:{optionsSlots:function(){return(this.slots&&this.slots.split(",")||[]).map(function(t){var e=t.split("|"),n=o()(e,2);return{name:n[0],value:n[1]}})}},methods:{choose:function(t){var e=this;this.$nextTick(function(){e.$refs.selectInput.blur()}),this.activeItem.value!==t.value&&(this.activeItem=t,this.$emit("change",t&&t.value))},handleFocus:function(t){this.show||(this.show=!0)},handleKeyup:function(t){switch(t.keyCode){case 9:break;case 13:this.show=!0;break;case 18:case 27:break;case 38:this.lastActive();break;case 40:this.nextActive()}},lastActive:function(){var t=this;if(this.optionsSlots&&this.optionsSlots.length){if(!this.activeItem||!this.activeItem.value)return void(this.activeItem=this.optionsSlots[0]||{});var e=this.optionsSlots.findIndex(function(e){return e.value===t.activeItem.value});e<=0?e=0:e--,this.activeItem=this.optionsSlots[e]}},nextActive:function(){var t=this;if(this.optionsSlots&&this.optionsSlots.length){if(!this.activeItem||!this.activeItem.value)return void(this.activeItem=this.optionsSlots[0]||{});var e=this.optionsSlots.findIndex(function(e){return e.value===t.activeItem.value});e>=this.optionsSlots.length?e=this.optionsSlots.length:e++,this.activeItem=this.optionsSlots[e]}},handleBlur:function(){var t=this;setTimeout(function(){t.show=!1},300)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"k-text",props:["value"]}},function(t,e,n){t.exports={default:n(61),__esModule:!0}},function(t,e,n){t.exports={default:n(62),__esModule:!0}},function(t,e,n){t.exports={default:n(63),__esModule:!0}},function(t,e,n){t.exports={default:n(64),__esModule:!0}},function(t,e,n){t.exports={default:n(65),__esModule:!0}},function(t,e,n){t.exports={default:n(66),__esModule:!0}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(54),i=r(o),u=n(53),s=r(u);e.default=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=(0,s.default)(t);!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if((0,i.default)(Object(e)))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(58),i=r(o),u=n(57),s=r(u),a="function"==typeof s.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof s.default&&t.constructor===s.default&&t!==s.default.prototype?"symbol":typeof t};e.default="function"==typeof s.default&&"symbol"===a(i.default)?function(t){return void 0===t?"undefined":a(t)}:function(t){return t&&"function"==typeof s.default&&t.constructor===s.default&&t!==s.default.prototype?"symbol":void 0===t?"undefined":a(t)}},function(t,e,n){n(31),n(30),t.exports=n(87)},function(t,e,n){n(31),n(30),t.exports=n(88)},function(t,e,n){var r=n(0),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},function(t,e,n){n(90),t.exports=n(0).Math.trunc},function(t,e,n){n(92),n(91),n(93),n(94),t.exports=n(0).Symbol},function(t,e,n){n(30),n(31),t.exports=n(29).f("iterator")},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(8),o=n(84),i=n(83);t.exports=function(t){return function(e,n,u){var s,a=r(e),c=o(a.length),l=i(u,c);if(t&&n!=n){for(;c>l;)if((s=a[l++])!=s)return!0}else for(;c>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var r=n(67);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(21),o=n(38),i=n(22);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,s=n(t),a=i.f,c=0;s.length>c;)a.call(t,u=s[c++])&&e.push(u);return e}},function(t,e,n){var r=n(2).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(17);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(17);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";var r=n(36),o=n(14),i=n(23),u={};n(6)(u,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(15)("meta"),o=n(10),i=n(4),u=n(7).f,s=0,a=Object.isExtensible||function(){return!0},c=!n(12)(function(){return a(Object.preventExtensions({}))}),l=function(t){u(t,r,{value:{i:"O"+ ++s,w:{}}})},f=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!a(t))return"F";if(!e)return"E";l(t)}return t[r].i},d=function(t,e){if(!i(t,r)){if(!a(t))return!0;if(!e)return!1;l(t)}return t[r].w},p=function(t){return c&&h.NEED&&a(t)&&!i(t,r)&&l(t),t},h=t.exports={KEY:r,NEED:!1,fastKey:f,getWeak:d,onFreeze:p}},function(t,e,n){var r=n(7),o=n(9),i=n(21);t.exports=n(5)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),s=u.length,a=0;s>a;)r.f(t,n=u[a++],e[n]);return t}},function(t,e,n){var r=n(22),o=n(14),i=n(8),u=n(27),s=n(4),a=n(34),c=Object.getOwnPropertyDescriptor;e.f=n(5)?c:function(t,e){if(t=i(t),e=u(e,!0),a)try{return c(t,e)}catch(t){}if(s(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){var r=n(8),o=n(37).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return o(t)}catch(t){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?s(t):o(r(t))}},function(t,e,n){var r=n(4),o=n(85),i=n(24)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(26),o=n(18);t.exports=function(t){return function(e,n){var i,u,s=String(o(e)),a=r(n),c=s.length;return a<0||a>=c?t?"":void 0:(i=s.charCodeAt(a),i<55296||i>56319||a+1===c||(u=s.charCodeAt(a+1))<56320||u>57343?t?s.charAt(a):i:t?s.slice(a,a+2):u-56320+(i-55296<<10)+65536)}}},function(t,e,n){var r=n(26),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(26),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(18);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(32),o=n(1)("iterator"),i=n(11);t.exports=n(0).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){var r=n(9),o=n(86);t.exports=n(0).getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},function(t,e,n){var r=n(32),o=n(1)("iterator"),i=n(11);t.exports=n(0).isIterable=function(t){var e=Object(t);return void 0!==e[o]||"@@iterator"in e||i.hasOwnProperty(r(e))}},function(t,e,n){"use strict";var r=n(68),o=n(76),i=n(11),u=n(8);t.exports=n(35)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e,n){var r=n(20);r(r.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},function(t,e){},function(t,e,n){"use strict";var r=n(2),o=n(4),i=n(5),u=n(20),s=n(40),a=n(77).KEY,c=n(12),l=n(25),f=n(23),d=n(15),p=n(1),h=n(29),v=n(28),y=n(71),m=n(74),b=n(9),g=n(10),x=n(8),_=n(27),w=n(14),k=n(36),S=n(80),O=n(79),C=n(7),j=n(21),I=O.f,P=C.f,E=S.f,M=r.Symbol,F=r.JSON,T=F&&F.stringify,L=p("_hidden"),N=p("toPrimitive"),A={}.propertyIsEnumerable,$=l("symbol-registry"),R=l("symbols"),D=l("op-symbols"),V=Object.prototype,K="function"==typeof M,B=r.QObject,z=!B||!B.prototype||!B.prototype.findChild,q=i&&c(function(){return 7!=k(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=I(V,e);r&&delete V[e],P(t,e,n),r&&t!==V&&P(V,e,r)}:P,G=function(t){var e=R[t]=k(M.prototype);return e._k=t,e},H=K&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof M},J=function(t,e,n){return t===V&&J(D,e,n),b(t),e=_(e,!0),b(n),o(R,e)?(n.enumerable?(o(t,L)&&t[L][e]&&(t[L][e]=!1),n=k(n,{enumerable:w(0,!1)})):(o(t,L)||P(t,L,w(1,{})),t[L][e]=!0),q(t,e,n)):P(t,e,n)},W=function(t,e){b(t);for(var n,r=y(e=x(e)),o=0,i=r.length;i>o;)J(t,n=r[o++],e[n]);return t},U=function(t,e){return void 0===e?k(t):W(k(t),e)},X=function(t){var e=A.call(this,t=_(t,!0));return!(this===V&&o(R,t)&&!o(D,t))&&(!(e||!o(this,t)||!o(R,t)||o(this,L)&&this[L][t])||e)},Z=function(t,e){if(t=x(t),e=_(e,!0),t!==V||!o(R,e)||o(D,e)){var n=I(t,e);return!n||!o(R,e)||o(t,L)&&t[L][e]||(n.enumerable=!0),n}},Q=function(t){for(var e,n=E(x(t)),r=[],i=0;n.length>i;)o(R,e=n[i++])||e==L||e==a||r.push(e);return r},Y=function(t){for(var e,n=t===V,r=E(n?D:x(t)),i=[],u=0;r.length>u;)!o(R,e=r[u++])||n&&!o(V,e)||i.push(R[e]);return i};K||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===V&&e.call(D,n),o(this,L)&&o(this[L],t)&&(this[L][t]=!1),q(this,t,w(1,n))};return i&&z&&q(V,t,{configurable:!0,set:e}),G(t)},s(M.prototype,"toString",function(){return this._k}),O.f=Z,C.f=J,n(37).f=S.f=Q,n(22).f=X,n(38).f=Y,i&&!n(13)&&s(V,"propertyIsEnumerable",X,!0),h.f=function(t){return G(p(t))}),u(u.G+u.W+u.F*!K,{Symbol:M});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;tt.length>et;)p(tt[et++]);for(var nt=j(p.store),rt=0;nt.length>rt;)v(nt[rt++]);u(u.S+u.F*!K,"Symbol",{for:function(t){return o($,t+="")?$[t]:$[t]=M(t)},keyFor:function(t){if(!H(t))throw TypeError(t+" is not a symbol!");for(var e in $)if($[e]===t)return e},useSetter:function(){z=!0},useSimple:function(){z=!1}}),u(u.S+u.F*!K,"Object",{create:U,defineProperty:J,defineProperties:W,getOwnPropertyDescriptor:Z,getOwnPropertyNames:Q,getOwnPropertySymbols:Y}),F&&u(u.S+u.F*(!K||c(function(){var t=M();return"[null]"!=T([t])||"{}"!=T({a:t})||"{}"!=T(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(g(e)||void 0!==t)&&!H(t))return m(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!H(e))return e}),r[1]=e,T.apply(F,r)}}),M.prototype[N]||n(6)(M.prototype,N,M.prototype.valueOf),f(M,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},function(t,e,n){n(28)("asyncIterator")},function(t,e,n){n(28)("observable")},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){function r(t){n(98)}var o=n(3)(n(45),n(111),r,null,null);t.exports=o.exports},function(t,e,n){function r(t){n(95)}var o=n(3)(n(47),n(106),r,null,null);t.exports=o.exports},function(t,e,n){var r=n(3)(n(49),n(113),null,null,null);t.exports=r.exports},function(t,e,n){function r(t){n(96)}var o=n(3)(n(50),n(109),r,null,null);t.exports=o.exports},function(t,e,n){function r(t){n(97)}var o=n(3)(n(51),n(110),r,null,null);t.exports=o.exports},function(t,e,n){var r=n(3)(n(52),n(107),null,null,null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"knife-field"},[n(t.type,{tag:"component",attrs:{value:t.value,fields:t.table.fields,"data-list":t.table.dataList,len:t.len,slots:t.listSlots},on:{change:t.changeVal,choose:t.chooseVal}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field-box field-Text"},[n("input",{ref:"curTxt",attrs:{type:"text"},domProps:{value:t.value},on:{input:function(e){t.$emit("change",e.target.value)}}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"knife-icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":t.xlink}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field-query"},[n("div",{staticClass:"field-query-block",attrs:{layout:"row","layout-align":"space-between stretch"}},[n("input",{ref:"contentInput",attrs:{type:"text",flex:"",placeholder:t.value},on:{focus:function(e){t.openPanel(e.target.value)},input:function(e){t.search(e.target.value)}}}),t._v(" "),n("span",{staticClass:"label-icon",attrs:{layout:"row","layout-align":"center center"},on:{click:function(e){e.stopPropagation(),t.show=!0}}},[n("k-icon",{attrs:{xlink:"#icon-search"}})],1)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"select-box",style:{zIndex:t.$knife.getZIndex()},on:{mouseenter:function(e){t.$refs.contentInput.onblur=null},mouseleave:function(e){t.$refs.contentInput.onblur=t.hidePanel}}},[n("table",{staticClass:"select-box-table table"},[n("thead",[n("tr",t._l(t.fields,function(e,r){return n("td",{key:r},[t._v(t._s(e.label))])}))]),t._v(" "),n("tbody",t._l(t.dataList,function(e,r){return n("tr",{key:r,on:{click:function(n){t.choose(e)}}},t._l(t.fields,function(r,o){return n("td",{key:o},[t._v(t._s(e[r.name]))])}))}))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field-select",class:{show:t.show}},[n("div",{staticClass:"field-select-block",attrs:{layout:"row","layout-align":"space-between stretch"}},[n("input",{ref:"selectInput",attrs:{type:"text",flex:"",readonly:""},domProps:{value:t.activeItem.name},on:{focus:t.handleFocus,blur:t.handleBlur,keyup:t.handleKeyup}}),t._v(" "),n("span",{staticClass:"label-icon",attrs:{layout:"row","layout-align":"center center"},on:{click:function(e){t.show=!t.show}}},[n("k-icon",{attrs:{xlink:"#icon-arrow-down"}})],1)]),t._v(" "),n("transition",{attrs:{name:"slide-up",mode:"out-in"}},[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"field-select-box",style:{zIndex:t.$knife.getZIndex()}},t._l(t.optionsSlots,function(e,r){return n("li",{key:e.value||r,staticClass:"field-option",class:{active:t.activeItem&&t.activeItem.value===e.value},on:{click:function(n){t.choose(e)}}},[t._v(t._s(e.name)+"\n    ")])}))])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field-check-box",class:{show:t.focus}},[n("input",{staticClass:"hide-checkbox",attrs:{type:"checkbox"},domProps:{value:t.value},on:{keyup:t.handleKeyup,focus:function(e){t.focus=!0},blur:function(e){t.focus=!1}}}),t._v(" "),n("span",{staticClass:"k-check-box",class:{checked:t.value},on:{click:t.checkedHandle}},[t.value?n("k-icon",{attrs:{xlink:"#icon-checked"}}):t._e()],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"k_e"},[n("table",{staticClass:"k_e_t",attrs:{colspan:"0"}},[n("thead",[n("tr",[n("th",{staticClass:"w50"},[t._v("行号")]),t._v(" "),n("th",{staticClass:"w150"},[t._v("操作")]),t._v(" "),t._l(t.fields,function(e){return n("th",{key:e.id,attrs:{draggable:"","data-field":e.name,"data-key":e.id},on:{dragstart:t.handleDragstart,dragenter:t.handleDragenter,dragleave:t.handleDragleave,dragend:t.handleDrop}},[t._v("\n          "+t._s(e.label)+"\n        ")])})],2)]),t._v(" "),n("tbody",t._l(t.dataList,function(e,r){return n("tr",{key:e[t.config.primaryKey],attrs:{"data-key":e[t.config.primaryKey]}},[n("th",{staticClass:"row-no"},[t._v(t._s(r+1))]),t._v(" "),n("th",[n("a",{staticClass:"btn",on:{click:function(n){n.stopPropagation(),t.addRow(e,r,n)}}},[t._v("新增一行")]),t._v(" "),n("a",{staticClass:"btn",on:{click:function(n){n.stopPropagation(),t.deleteRow(e,r,n)}}},[t._v("删除此行")])]),t._v(" "),t._l(t.fields,function(o,i){return n("td",{key:o.id,attrs:{"data-key":o.id}},[n("k-field",{attrs:{"data-key":o.id,"row-index":r,"cell-index":i,table:t.table[o.name],type:o.type,value:e[o.name],len:0,"list-slots":t.list[o.name]},on:{"update:value":function(n){t.$set(e,o.name,n)},"on-choose":t.onChoose}})],1)})],2)}))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field-box field-number"},[n("input",{ref:"input",domProps:{value:t.value},on:{input:function(e){t.updateValue(e.target.value)},focus:t.selectAll,blur:t.formatValue,keyup:[function(e){return"button"in e||!t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?t.increment(e):null},function(e){return"button"in e||!t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?t.diff(e):null}]}})])},staticRenderFns:[]}}])});
//# sourceMappingURL=vue-editable.js.map