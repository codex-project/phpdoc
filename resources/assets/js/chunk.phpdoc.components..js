(window.webpackJsonp=window.webpackJsonp||[]).push([["phpdoc.components."],{"../node_modules/react-hot-loader/dist/react-hot-loader.production.min.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=(n=o("../node_modules/react/index.js"))&&"object"==typeof n&&"default"in n?n.default:n;t.AppContainer=function(e){return r.Children.only(e.children)},t.hot=function(){return function(e){return e}},t.areComponentsEqual=function(e,t){return e===t},t.setConfig=function(){},t.cold=function(e){return e},t.configureComponent=function(){}},"../node_modules/react-hot-loader/index.js":function(e,t,o){"use strict";e.exports=o("../node_modules/react-hot-loader/dist/react-hot-loader.production.min.js")},"../node_modules/webpack/buildin/harmony-module.js":function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},"./node_modules/lodash/_arrayReduce.js":function(e,t){e.exports=function(e,t,o,n){var r=-1,s=null==e?0:e.length;for(n&&s&&(o=e[++r]);++r<s;)o=t(o,e[r],r,e);return o}},"./node_modules/lodash/_asciiToArray.js":function(e,t){e.exports=function(e){return e.split("")}},"./node_modules/lodash/_asciiWords.js":function(e,t){var o=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(o)||[]}},"./node_modules/lodash/_baseEach.js":function(e,t,o){var n=o("./node_modules/lodash/_baseForOwn.js"),r=o("./node_modules/lodash/_createBaseEach.js")(n);e.exports=r},"./node_modules/lodash/_basePropertyOf.js":function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},"./node_modules/lodash/_createBaseEach.js":function(e,t,o){var n=o("./node_modules/lodash/isArrayLike.js");e.exports=function(e,t){return function(o,r){if(null==o)return o;if(!n(o))return e(o,r);for(var s=o.length,d=t?s:-1,l=Object(o);(t?d--:++d<s)&&!1!==r(l[d],d,l););return o}}},"./node_modules/lodash/_createCaseFirst.js":function(e,t,o){var n=o("./node_modules/lodash/_castSlice.js"),r=o("./node_modules/lodash/_hasUnicode.js"),s=o("./node_modules/lodash/_stringToArray.js"),d=o("./node_modules/lodash/toString.js");e.exports=function(e){return function(t){t=d(t);var o=r(t)?s(t):void 0,l=o?o[0]:t.charAt(0),i=o?n(o,1).join(""):t.slice(1);return l[e]()+i}}},"./node_modules/lodash/_createCompounder.js":function(e,t,o){var n=o("./node_modules/lodash/_arrayReduce.js"),r=o("./node_modules/lodash/deburr.js"),s=o("./node_modules/lodash/words.js"),d=RegExp("['\u2019]","g");e.exports=function(e){return function(t){return n(s(r(t).replace(d,"")),e,"")}}},"./node_modules/lodash/_deburrLetter.js":function(e,t,o){var n=o("./node_modules/lodash/_basePropertyOf.js")({"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i","\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S","\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe","\u0149":"'n","\u017f":"s"});e.exports=n},"./node_modules/lodash/_hasUnicode.js":function(e,t){var o=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return o.test(e)}},"./node_modules/lodash/_hasUnicodeWord.js":function(e,t){var o=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return o.test(e)}},"./node_modules/lodash/_stringToArray.js":function(e,t,o){var n=o("./node_modules/lodash/_asciiToArray.js"),r=o("./node_modules/lodash/_hasUnicode.js"),s=o("./node_modules/lodash/_unicodeToArray.js");e.exports=function(e){return r(e)?s(e):n(e)}},"./node_modules/lodash/_unicodeToArray.js":function(e,t){var o="[\\ud800-\\udfff]",n="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",r="\\ud83c[\\udffb-\\udfff]",s="[^\\ud800-\\udfff]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",i="(?:"+n+"|"+r+")"+"?",a="[\\ufe0e\\ufe0f]?"+i+("(?:\\u200d(?:"+[s,d,l].join("|")+")[\\ufe0e\\ufe0f]?"+i+")*"),c="(?:"+[s+n+"?",n,d,l,o].join("|")+")",u=RegExp(r+"(?="+r+")|"+c+a,"g");e.exports=function(e){return e.match(u)||[]}},"./node_modules/lodash/_unicodeWords.js":function(e,t){var o="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",n="["+o+"]",r="\\d+",s="[\\u2700-\\u27bf]",d="[a-z\\xdf-\\xf6\\xf8-\\xff]",l="[^\\ud800-\\udfff"+o+r+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",a="[\\ud800-\\udbff][\\udc00-\\udfff]",c="[A-Z\\xc0-\\xd6\\xd8-\\xde]",u="(?:"+d+"|"+l+")",f="(?:"+c+"|"+l+")",p="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",h="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",i,a].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),m="(?:"+[s,i,a].join("|")+")"+h,y=RegExp([c+"?"+d+"+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?="+[n,c,"$"].join("|")+")",f+"+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?="+[n,c+u,"$"].join("|")+")",c+"?"+u+"+(?:['\u2019](?:d|ll|m|re|s|t|ve))?",c+"+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",r,m].join("|"),"g");e.exports=function(e){return e.match(y)||[]}},"./node_modules/lodash/camelCase.js":function(e,t,o){var n=o("./node_modules/lodash/capitalize.js"),r=o("./node_modules/lodash/_createCompounder.js")(function(e,t,o){return t=t.toLowerCase(),e+(o?n(t):t)});e.exports=r},"./node_modules/lodash/capitalize.js":function(e,t,o){var n=o("./node_modules/lodash/toString.js"),r=o("./node_modules/lodash/upperFirst.js");e.exports=function(e){return r(n(e).toLowerCase())}},"./node_modules/lodash/clone.js":function(e,t,o){var n=o("./node_modules/lodash/_baseClone.js"),r=4;e.exports=function(e){return n(e,r)}},"./node_modules/lodash/deburr.js":function(e,t,o){var n=o("./node_modules/lodash/_deburrLetter.js"),r=o("./node_modules/lodash/toString.js"),s=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,d=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=r(e))&&e.replace(s,n).replace(d,"")}},"./node_modules/lodash/each.js":function(e,t,o){e.exports=o("./node_modules/lodash/forEach.js")},"./node_modules/lodash/forEach.js":function(e,t,o){var n=o("./node_modules/lodash/_arrayEach.js"),r=o("./node_modules/lodash/_baseEach.js"),s=o("./node_modules/lodash/_castFunction.js"),d=o("./node_modules/lodash/isArray.js");e.exports=function(e,t){return(d(e)?n:r)(e,s(t))}},"./node_modules/lodash/isEmpty.js":function(e,t,o){var n=o("./node_modules/lodash/_baseKeys.js"),r=o("./node_modules/lodash/_getTag.js"),s=o("./node_modules/lodash/isArguments.js"),d=o("./node_modules/lodash/isArray.js"),l=o("./node_modules/lodash/isArrayLike.js"),i=o("./node_modules/lodash/isBuffer.js"),a=o("./node_modules/lodash/_isPrototype.js"),c=o("./node_modules/lodash/isTypedArray.js"),u="[object Map]",f="[object Set]",p=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(l(e)&&(d(e)||"string"==typeof e||"function"==typeof e.splice||i(e)||c(e)||s(e)))return!e.length;var t=r(e);if(t==u||t==f)return!e.size;if(a(e))return!n(e).length;for(var o in e)if(p.call(e,o))return!1;return!0}},"./node_modules/lodash/upperFirst.js":function(e,t,o){var n=o("./node_modules/lodash/_createCaseFirst.js")("toUpperCase");e.exports=n},"./node_modules/lodash/words.js":function(e,t,o){var n=o("./node_modules/lodash/_asciiWords.js"),r=o("./node_modules/lodash/_hasUnicodeWord.js"),s=o("./node_modules/lodash/toString.js"),d=o("./node_modules/lodash/_unicodeWords.js");e.exports=function(e,t,o){return e=s(e),void 0===(t=o?void 0:t)?r(e)?d(e):n(e):e.match(t)||[]}},"./src/phpdoc/components/tree/PhpdocTree.scss":function(e,t,o){},"./src/phpdoc/components/tree/PhpdocTree.tsx":function(e,t,o){"use strict";o.r(t),function(e){o.d(t,"PhpdocTree",function(){return N});var n=o("../node_modules/react/index.js"),r=o.n(n),s=o("../node_modules/mobx-react/index.module.js"),d=o("../node_modules/typestyle/lib.es2015/index.js"),l=o("../node_modules/antd/lib/checkbox/index.js"),i=o.n(l),a=(o("../node_modules/antd/lib/checkbox/style/index.js"),o("../node_modules/antd/lib/input/index.js")),c=o.n(a),u=(o("../node_modules/antd/lib/input/style/index.js"),o("../node_modules/antd/lib/popover/index.js")),f=o.n(u),p=(o("../node_modules/antd/lib/popover/style/index.js"),o("../node_modules/antd/lib/tooltip/index.js")),h=o.n(p),m=(o("../node_modules/antd/lib/tooltip/style/index.js"),o("./src/phpdoc/components/tree/Tree.tsx")),y=o("./src/mobx.js"),_=o("./node_modules/lodash-decorators/index.js"),j=o("@codex/core"),b=o("./src/phpdoc/components/tree/TreeBuilder.tsx"),x=o("../node_modules/react-hot-loader/index.js"),g=(o("./src/phpdoc/components/tree/PhpdocTree.scss"),o("./src/phpdoc/components/base/index.tsx")),v=function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),O=function(e,t,o,n){var r,s=arguments.length,d=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)d=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(d=(s<3?r(d):s>3?r(t,o,d):r(t,o))||d);return s>3&&d&&Object.defineProperty(t,o,d),d},C=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)},T=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(o[n[r]]=e[n[r]])}return o},E=c.a.Search,w=o("./node_modules/debug/src/browser.js")("components:PhpdocTree"),N=function(t){function o(e,o){var n=t.call(this,e,o)||this;if(n.scrollbar=r.a.createRef(),n.treeFilters={search:null,class:!1,trait:!1,interface:!1},e.tree)n.tree=e.tree;else{var s=new b.a(o.manifest.files.keyBy("name"),{manifest:o.manifest});n.tree=s.build()}return e.getTree(n.tree),n}return v(o,t),o.prototype.setTreeFilter=function(e,t){this.treeFilters[e]=t,this.updateTreeFilter()},o.prototype.updateTreeFilter=function(){var e=this;this.tree.setSyncable(!1),this.tree.visible().filterBy(function(t){return e.treeFilters[t.type]}).hide().each(function(e){e.getParent().hasVisibleChildren()?e.getParent().show():e.getParent().hide()}),this.tree.hidden().filterBy(function(t){return!e.treeFilters[t.type]}).show().filterBy(function(e){return e.hasChildren()&&!e.hasVisibleChildren()}).hide(),this.tree.setSyncable(!0).sync()},o.prototype.searchInTree=function(e){if(e=null===e?null:0===e.length?null:e,this.treeFilters.search!==e&&(this.treeFilters.search=e),w("searchInTree",{search:e,selected:this.tree.selected(),lastSelectedNode:this.tree.lastSelectedNode()}),null===e&&this.tree.selected().length>0){var t=this.tree.selected().get(0);this.tree.clearSearch().node(t.id).expandParents()}else this.tree.setSyncable(!1),this.tree.search(e),this.updateTreeFilter()},o.prototype.scrollToNode=function(e){var t=this,o=$('li[data-uid="'+e.id+'"]');if(1===o.length){var n=o.get(0).offsetTop;j.scroll.animScrollToFn(function(){return t.scrollbar.current.getScrollTop()},function(e){return t.scrollbar.current.scrollTop(e)},n,600),w("scrollTop offsetTop",n)}},o.prototype.componentDidMount=function(){var e=this;this.tree.on("node.selected",function(t){e.props.scrollToSelected&&e.scrollToNode(t)}),this.tree.selected().length&&this.scrollToNode(this.tree.selected().get(0))},o.prototype.render=function(){window.phpdoctree=this;var e=this.props,t=(e.nodes,e.searchable,e.filterable,e.style,e.className,T(e,["nodes","searchable","filterable","style","className"]));return r.a.createElement("div",{className:this.getClassName()},this.renderControls(),r.a.createElement(j.Scrollbar,{innerRef:this.scrollbar},r.a.createElement(m.a,Object.assign({tree:this.tree},t,{style:{marginRight:8,paddingBottom:40}}))))},o.prototype.renderControls=function(){var e=this,t=this.props,o=(t.nodes,t.searchable),s=t.filterable;t.style,t.className,T(t,["nodes","searchable","filterable","style","className"]);return r.a.createElement(n.Fragment,null,o&&s?r.a.createElement("div",{style:{padding:5,textAlign:"right",borderBottom:"1px solid rgba(0, 0, 0, 0.2)",marginBottom:5,display:"flex"}},o?[r.a.createElement(E,{ref:function(t){return e.search=t},key:"search",size:"small",placeholder:"Search",style:{width:"auto",flexBasis:0,flexGrow:1,minWidth:50},onSearch:function(t){return e.searchInTree(t)},onChange:function(t){Object(y.runInAction)(function(){return e.treeFilters.search=t.target.value}),e.searchInTree(t.target.value)},value:this.treeFilters.search}),r.a.createElement(h.a,{title:"Clear search",key:"search-clean"},r.a.createElement(j.Button,{icon:"close",size:"small",onClick:function(){return e.searchInTree(null)}}))]:null,s?r.a.createElement(f.a,{title:"Filters",key:"filters",content:["class","trait","interface"].map(function(t){return r.a.createElement(i.a,{name:t,key:t,checked:!1===e.treeFilters[t],onChange:function(o){return e.setTreeFilter(t,!o.target.checked)},style:{display:"block",marginLeft:0}},Object(j.ucfirst)(t))})},r.a.createElement(j.Button,{icon:"filter",size:"small",style:{marginLeft:3}})):null):null)},o.prototype.getClassName=function(){return Object(d.classes)("phpdoc-tree",Object(d.style)({marginBottom:"0 !important"}),Object(d.style)(this.props.style),this.props.className)},o.displayName="PhpdocTree",o.defaultProps={getTree:function(){return null}},o.contextType=g.c,O([y.observable,C("design:type",Object)],o.prototype,"treeFilters",void 0),O([y.action,C("design:type",Function),C("design:paramtypes",[String,Boolean]),C("design:returntype",void 0)],o.prototype,"setTreeFilter",null),O([Object(_.debounce)(400),y.action,C("design:type",Function),C("design:paramtypes",[String]),C("design:returntype",void 0)],o.prototype,"searchInTree",null),o=O([Object(x.hot)(e),s.observer,C("design:paramtypes",[Object,Object])],o)}(r.a.Component)}.call(this,o("../node_modules/webpack/buildin/harmony-module.js")(e))},"./src/phpdoc/components/tree/Tree.tsx":function(e,t,o){"use strict";(function(e){o.d(t,"a",function(){return j});var n=o("../node_modules/react/index.js"),r=o.n(n),s=o("./src/phpdoc/components/tree/TreeNodes.tsx"),d=o("./node_modules/lodash/camelCase.js"),l=o.n(d),i=o("./node_modules/lodash/isFunction.js"),a=o.n(i),c=o("./node_modules/lodash/upperFirst.js"),u=o.n(c),f=o("../node_modules/typestyle/lib.es2015/index.js"),p=(o("./src/phpdoc/styling/vendor/inspire-tree/light.scss"),o("../node_modules/react-hot-loader/index.js")),h=o("./src/phpdoc/components/tree/InspireTree.tsx"),m=function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),y=function(e,t,o,n){var r,s=arguments.length,d=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)d=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(d=(s<3?r(d):s>3?r(t,o,d):r(t,o))||d);return s>3&&d&&Object.defineProperty(t,o,d),d},_=o("./node_modules/debug/src/browser.js")("components:inspire-tree:Tree"),j=function(t){function o(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={nodes:[]},e.tree=null,e}return m(o,t),o.prototype.componentDidMount=function(){var e=this;this.props.tree?this.tree=this.props.tree:this.tree=new h.a({data:this.props.nodes}),this.tree.setSyncer(function(t){return e.setState({nodes:t.nodes()})}),this.tree.on("model.loaded",function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];_("model.loaded",t),e.tree.sync()}),this.tree.on("changes.applied",function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];_("changes.applied",t),e.tree.sync()}),this.tree.onAny(function(t){for(var o,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var s="on"+u()(l()(t.toString()));a()(e.props[s])&&(_("on",t.toString(),s,{event:t,args:n},e.props),(o=e.props)[s].apply(o,n))}),0===this.tree.loading().length&&this.props.onModelLoaded&&this.props.onModelLoaded(this.tree),this.tree.sync()},o.prototype.componentWillUnmount=function(){this.tree.removeAllListeners()},o.prototype.render=function(){return window.tree=this,r.a.createElement("div",{className:this.getClassName()},r.a.createElement(s.a,{nodes:this.state.nodes}))},o.prototype.getClassName=function(){return Object(f.classes)("inspire-tree",Object(f.style)(this.props.style),this.props.className)},o=y([Object(p.hot)(e)],o)}(r.a.Component)}).call(this,o("../node_modules/webpack/buildin/harmony-module.js")(e))},"./src/phpdoc/components/tree/TreeNodes.tsx":function(e,t,o){"use strict";var n=o("../node_modules/react/index.js"),r=o.n(n),s=o("./node_modules/lodash/clone.js"),d=o.n(s),l=o("./node_modules/lodash/each.js"),i=o.n(l),a=o("./node_modules/lodash/isArray.js"),c=o.n(a),u=o("./node_modules/lodash/isEmpty.js"),f=o.n(u),p=o("./node_modules/lodash/isFunction.js"),h=o.n(p),m=o("./node_modules/lodash/isString.js"),y=o.n(m),_=function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),j=o("./node_modules/debug/src/browser.js")("phpdoc:components:tree-node-anchor"),b=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onBlur=function(e){j("blur",{self:t,node:t.props.node}),t.props.node.blur()},t.onClick=function(e){var o=t.props.node,n=o.tree();j("click",{self:t,event:e,node:t.props.node});var r=function(){if(e.preventDefault(),(e.metaKey||e.ctrlKey||e.shiftKey)&&n.disableDeselection(),e.shiftKey){n.deselect();var t=n.lastSelectedNode();if(t){var r=n.boundingNodes(t,o),s=r[0],d=r[1];n.selectBetween(s,d)}}o.selected()?n.config.selection.disableDirectDeselection||o.deselect():o.select(),n.enableDeselection()};n.emit("node.click",o,r),e.treeDefaultPrevented||r()},t.onContextMenu=function(e){t.props.node.tree().emit("node.contextmenu",t.props.node)},t.onDoubleClick=function(e){var o=t.props.node;j("click",{self:t,event:e,node:t.props.node});var n=function(){o.tree().deselect(),o.toggleCollapse()};o.tree().emit("node.dblclick",o,n),e.treeDefaultPrevented||n()},t.onFocus=function(e){j("click",{self:t,event:e,node:t.props.node}),t.props.node.focus()},t}return _(t,e),t.prototype.render=function(){var e=this.props.node,t=e.itree.a.attributes||{};t.className=t.className||"",!1===t.className.includes("title")&&(t.className+=" title"),!1===t.className.includes("icon")&&(t.className+=" icon"),t.tabIndex=1,t.unselectable="on";var o,n=this.props.text;if(e.type){var s="phpdoc-type-"+e.type;!1===t.className.includes(s)&&(t.className+=" "+s),o=r.a.createElement("i",{className:s+" on-left"})}return r.a.createElement("a",Object.assign({"data-uid":e.id,onBlur:this.onBlur,onClick:this.onClick,onContextMenu:this.onContextMenu,onDoubleClick:this.onDoubleClick,onFocus:this.onFocus},t),o||"",n)},t}(r.a.Component),x=function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),g=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return x(t,e),t.prototype.renderToggle=function(e){if(e.children)return r.a.createElement("a",{className:"toggle icon "+(e.expanded()?"icon-collapse":"icon-expand"),onClick:function(t){return e.toggleCollapse()}})},t.prototype.renderChildren=function(e){if(e.expanded()&&e.hasChildren())return r.a.createElement(O,{nodes:e.children})},t.prototype.getClassNames=function(){var e=this.props.node,t=e.itree.state,o=e.itree.li.attributes,n=[];i()(Object.keys(t),function(e){t[e]&&n.push(e)}),!e.hidden()&&e.removed()&&n.push("hidden"),e.expanded()&&n.push("expanded"),n.push(e.hasOrWillHaveChildren()?"folder":"leaf");var r=o.className||o.className;return h()(r)&&(r=r(e)),f()(r)||(y()(r)?n=n.concat(r.split(/[\s\.]+/)):c()(r)&&(n=n.concat(r))),n.join(" ")},t.prototype.getAttributes=function(){var e=this.props.node,t=d()(e.itree.li.attributes)||{};return t.className=this.getClassNames(),t["data-uid"]=e.id,t},t.prototype.render=function(){var e=this.props.node;return e.available()?r.a.createElement("li",this.getAttributes(),r.a.createElement("div",{className:"title-wrap"},this.renderToggle(e),r.a.createElement(b,{expanded:e.expanded(),node:e,text:e.text})),r.a.createElement("div",{className:"wholerow"}),this.renderChildren(e)):null},t}(r.a.Component);o.d(t,"a",function(){return O});var v=function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),O=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return v(t,e),t.prototype.render=function(){var e=this.props.nodes.map(function(e){return r.a.createElement(g,{key:e.id,node:e})});return r.a.createElement("ol",null,e)},t}(r.a.Component)},"./src/phpdoc/styling/vendor/inspire-tree/light.scss":function(e,t,o){}}]);