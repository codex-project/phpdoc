(window.webpackJsonp=window.webpackJsonp||[]).push([["phpdoc.components.member-list"],{"./src/phpdoc/components/member-list/PhpdocMemberList.tsx":function(e,t,r){"use strict";r.r(t);var n=r("../node_modules/react/index.js"),i=r.n(n),o=(r("./src/phpdoc/components/member-list/member-list.scss"),r("@codex/core")),s=r("../node_modules/antd/lib/tooltip/index.js"),c=r.n(s),l=(r("../node_modules/antd/lib/tooltip/style/index.js"),r("./src/phpdoc/components/type/index.tsx")),a=r("./src/phpdoc/components/tooltips.tsx"),p=r("../node_modules/antd/lib/popover/index.js"),u=r.n(p),f=(r("../node_modules/antd/lib/popover/style/index.js"),r("../node_modules/typestyle/lib.es2015/index.js")),d=r("./src/phpdoc/logic/index.tsx"),h=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),m=r("./node_modules/debug/src/browser.js")("components:ListItem"),y={overlayClassName:"phpdoc-tooltip phpdoc-member-list-tooltip"},b=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return h(t,e),t.prototype.render=function(){var e=this.props,t=e.innerRef,r=e.onClick,n=e.modifiers,o=e.extras,s=e.className,c=e.style,l=e.children,a=e.selected,p=this.props.item;return i.a.createElement("div",{key:"list-item",ref:t,className:Object(f.classes)("phpdoc-member-list-item","phpdoc-member-list-item-"+p.type,a?"active":null,s),style:c},i.a.createElement("div",{className:"list-item-link",onClick:function(){m("onClick",p),r(p)}},l),o,n?this.renderModifiers():null)},t.prototype.renderModifiers=function(){var e=this.props.item;return i.a.createElement(i.a.Fragment,null,this.renderModifierDeprecated(e),this.renderModifierInherited(e),this.renderModifierStatic(e),Object(d.e)(e)?[e.abstract?i.a.createElement("a",{className:"list-col-auto no-click modifier"},i.a.createElement(c.a,{title:"Abstract",overlayClassName:"phpdoc-tooltip phpdoc-member-list-tooltip"},i.a.createElement("i",{className:"phpdoc-modifier-abstract"}))):null,e.final?i.a.createElement("a",{className:"list-col-auto no-click modifier"},i.a.createElement(c.a,{title:"Final",overlayClassName:"phpdoc-tooltip phpdoc-member-list-tooltip"},i.a.createElement("i",{className:"phpdoc-modifier-final"}))):null]:null,this.renderModifierGotoSource(e))},t.prototype.renderModifierStatic=function(e){return e.static?i.a.createElement("a",{className:"list-col-auto no-click modifier"},Object(a.d)({placement:"top"})):null},t.prototype.renderModifierGotoSource=function(e){var t=this;if(this.props.gotoSource&&!e.inherited_from)return i.a.createElement("a",{className:"list-col-auto modifier",onClick:function(){return t.props.onGotoSourceClick(e)}},Object(a.b)({placement:"left"}))},t.prototype.renderModifierInherited=function(e){var t=this;return e.inherited_from?i.a.createElement(u.a,Object.assign({},y,{content:i.a.createElement("div",null,"Inherited From:",i.a.createElement("br",null)," ",i.a.createElement(l.a,{type:e.inherited_from,showNamespace:!0,showTooltip:!1})),align:{points:["cr","cl"]}}),i.a.createElement("a",{className:"modifier"+(this.props.clickableInherits?"":" no-click"),onClick:function(){return t.props.clickableInherits?t.props.onInheritedClick(e):null}},i.a.createElement("i",{className:"phpdoc-modifier-inherited"}))):null},t.prototype.renderModifierDeprecated=function(e){return e.docblock.tags.has("deprecated")?i.a.createElement("a",{className:"list-col-auto no-click modifier"},Object(a.a)(e,{placement:"left"})):null},t.displayName="ListItem",t.defaultProps={onClick:function(){return null},onGotoSourceClick:function(){return null},onInheritedClick:function(){return null}},t}(n.PureComponent),v=i.a.createContext({manifest:null,file:null,fqsen:null,itemStore:null});v.displayName="MembersContext";var g=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),O=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(r[n[i]]=e[n[i]])}return r},j=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return g(t,e),t.prototype.render=function(){var e=this.props,t=(e.children,e.item),r=e.hide,n=O(e,["children","item","hide"]);return i.a.createElement(b,Object.assign({},n,{item:t}),r.visibility?null:i.a.createElement(c.a,{title:t.visibility}," ",i.a.createElement("i",{className:"phpdoc-visibility-"+t.visibility})," "),i.a.createElement("span",{className:"token property"},t.name),!r.types&&t.types?i.a.createElement(l.a,{className:"phpdoc-member-list-item-property-type",type:t.types}):null)},t.displayName="PropertyItem",t.defaultProps={hide:{}},t.contextType=v,t}(n.Component),S=r("./src/phpdoc/components/method/index.tsx"),_=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),k=function(){return(k=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},x=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(r[n[i]]=e[n[i]])}return r},C=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return _(t,e),t.prototype.render=function(){var e=this.props,t=(e.children,e.selected),r=e.item,n=x(e,["children","selected","item"]),o=k({deprecated:!1,modifiers:!1,namespace:!1,argumentDefaults:!t,argumentTypes:!t,returns:!t},this.props.hide||{},{visibility:!0,inherited:!0});return i.a.createElement(b,Object.assign({},n,{selected:t,item:r}),this.props.hide.visibility?null:i.a.createElement(c.a,{title:r.visibility}," ",i.a.createElement("i",{className:"phpdoc-visibility-"+r.visibility})," "),i.a.createElement(S.c,{fqsen:r.fqsen,file:this.context.file,inline:!0,size:12,noClick:!0,hide:o}))},t.displayName="MethodItem",t.defaultProps={hide:{}},t.contextType=v,t}(n.Component),E=r("./src/phpdoc/components/base/index.tsx"),P=r("./node_modules/lodash/isString.js"),w=r.n(P),F=r("./src/mobx.js"),N=function(){return(N=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},I=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},M=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)},R=function(){function e(e){this.file=e,this.exclude=[],this.selected=null,this.search=null,this.visible=[],this.length=0,this.filters={public:!1,protected:!1,private:!1,static:!1,abstract:!1,final:!1,inherited:!1,name:null},this.members=e.entity.members,this.setSorter(function(e){return e.sort(Object(o.firstBy)(function(e){return"method"===e.type},1).thenBy(function(e){return"__construct"===e.name},-1).thenBy("static").thenBy("isInherited"))}),this.filter()}return e.prototype.setSorter=function(e){this.sorter=e},Object.defineProperty(e.prototype,"_exclude",{get:function(){return w()(this.exclude)?this.exclude.split(",").map(function(e){return e.trim()}):this.exclude},enumerable:!0,configurable:!0}),e.prototype.reset=function(){var e=this;Object(F.transaction)(function(){e.visible=[],e.selected=null,e.search=null})},e.prototype.setSelected=function(e){Object(d.d)(e)&&(e=e.name),this.selected=e},e.prototype.isSelected=function(e){return Object(d.d)(e)&&(e=e.name),this.selected===e},e.prototype.setSearch=function(e){var t=this;Object(F.transaction)(function(){t.search=e,t.filter()})},e.prototype.setFilters=function(e){var t=this;Object(F.transaction)(function(){t.filters=e,t.filter()})},e.prototype.setFilter=function(e,t){this.filters[e]=t,this.filter()},e.prototype.mergeFilters=function(e){this.setFilters(N({},this.filters,e))},e.prototype.sort=function(e){return this.sorter?this.sorter(e):e},e.prototype.filter=function(){var e=this;Object(F.transaction)(function(){var t=e.filterMethods(),r=e.filterProperties(),n=t.toList().concat(r.toList()).toArray();n=e.sort(n),e.visible=n.map(function(e){return e.name}),e.length=e.visible.length})},e.prototype.filterMethods=function(){var e=this,t=this.members.getMethods(),r=function(e){t=t.filter(e)};return this.filters.public&&r(function(e){return"public"!==e.visibility}),this.filters.protected&&r(function(e){return"protected"!==e.visibility}),this.filters.private&&r(function(e){return"private"!==e.visibility}),this.filters.static&&r(function(e){return!e.static}),this.filters.abstract&&r(function(e){return!e.abstract}),this.filters.final&&r(function(e){return!e.final}),this.filters.inherited&&r(function(e){return!e.inherited_from||0===e.inherited_from.length}),this.search&&this.search.length>0&&r(function(t){return t.name.toLowerCase().indexOf(e.search.toLowerCase())>-1}),t},e.prototype.filterProperties=function(){var e=this,t=this.members.getProperties(),r=function(e){return t=t.filter(e)};return this.filters.public&&r(function(e){return"public"!==e.visibility}),this.filters.protected&&r(function(e){return"protected"!==e.visibility}),this.filters.private&&r(function(e){return"private"!==e.visibility}),this.filters.static&&r(function(e){return!e.static}),this.filters.inherited&&r(function(e){return!e.inherited_from||0===e.inherited_from.length}),this.search&&this.search.length>0&&r(function(t){return t.name.toLowerCase().indexOf(e.search.toLowerCase())>-1}),t},I([F.observable,M("design:type",String)],e.prototype,"selected",void 0),I([F.observable,M("design:type",String)],e.prototype,"search",void 0),I([F.observable,M("design:type",Array)],e.prototype,"visible",void 0),I([F.observable,M("design:type",Number)],e.prototype,"length",void 0),I([F.observable,M("design:type",Object)],e.prototype,"filters",void 0),I([F.action,M("design:type",Function),M("design:paramtypes",[Object]),M("design:returntype",void 0)],e.prototype,"setSelected",null),I([F.action,M("design:type",Function),M("design:paramtypes",[Object,Object]),M("design:returntype",void 0)],e.prototype,"setFilter",null),I([F.action,M("design:type",Function),M("design:paramtypes",[Object]),M("design:returntype",void 0)],e.prototype,"mergeFilters",null),e}(),L=r("../node_modules/mobx-react/index.module.js"),A=r("../node_modules/antd/lib/checkbox/index.js"),D=r.n(A),T=(r("../node_modules/antd/lib/checkbox/style/index.js"),r("../node_modules/antd/lib/input/index.js")),B=r.n(T),G=(r("../node_modules/antd/lib/input/style/index.js"),r("../node_modules/antd/lib/tabs/index.js")),q=r.n(G),z=(r("../node_modules/antd/lib/tabs/style/index.js"),r("./node_modules/lodash-decorators/index.js")),J=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),H=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},K=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)},Q=r("./node_modules/debug/src/browser.js")("phpdoc:components:ListFilters"),U=(q.a.TabPane,B.a.Search),V=function(e){function t(t,r){var n=e.call(this,t,r)||this;return n.state={searchFocus:!1},n.setSearchFocus=function(e){return n.setState(function(t){return{searchFocus:e}})},n.handleFilterChange=function(e){n.itemStore.setFilter(e.target.name,!1===e.target.checked),n.props.onFilter(n.itemStore.visible)},t.defaultFilters&&t.defaultFilters.length&&t.defaultFilters.forEach(function(e){return r.itemStore.setFilter(e,!0)}),n}return J(t,e),Object.defineProperty(t.prototype,"itemStore",{get:function(){return this.context.itemStore},enumerable:!0,configurable:!0}),t.prototype.handleSearch=function(e){Q("onSearch",e),this.props.searchable&&(this.itemStore.setSearch(0===e.length?null:e),this.props.onSearch(e))},t.prototype.render=function(){var e=this,t=this.props,r=t.searchable,s=t.filterable;return i.a.createElement(n.Fragment,null,r?[i.a.createElement(U,{key:"search",size:"small",placeholder:"Search",className:"phpdoc-member-list-search"+(this.state.searchFocus?" focus":""),onFocus:function(){return e.setSearchFocus(!0)},onBlur:function(){return e.setSearchFocus(!1)},onSearch:this.handleSearch,onChange:function(t){return e.handleSearch(t.target.value)},value:this.itemStore.search}),this.itemStore.search&&this.itemStore.search.length?i.a.createElement(c.a,{title:"Clear search",key:"search-clean"}," ",i.a.createElement(o.Button,{icon:"close",size:"small",onClick:function(){return e.itemStore.setSearch(null)}})," "):null]:null,s?i.a.createElement(u.a,{title:"Filters",key:"filters-button",content:["public","protected","private","static","abstract","final","inherited"].map(function(t){return i.a.createElement(L.Observer,{key:t},function(){return i.a.createElement(D.a,{key:t,name:t,defaultChecked:!1===e.itemStore.filters[t],style:{display:"block",marginLeft:0},onChange:function(r){e.handleFilterChange(r),Q("checkbox onChange",t,r.target,!1===e.itemStore.filters[t],"  list.filters[prop]: ",e.itemStore.filters[t])}},Object(o.ucfirst)(t))})})},i.a.createElement(o.Button,{icon:"filter",size:"small",style:{marginLeft:3}})):null)},t.displayName="FilterControls",t.defaultProps={onSearch:function(){return null},onFilter:function(){return null}},t.contextType=v,H([Object(z.debounce)(100,{leading:!0,trailing:!0}),K("design:type",Function),K("design:paramtypes",[String]),K("design:returntype",void 0)],t.prototype,"handleSearch",null),t}(n.Component);r.d(t,"PhpdocMemberList",function(){return ee});var W=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),X=function(){return(X=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},Y=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s},Z=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)},$=r("./node_modules/debug/src/browser.js")("phpdoc:members:Members"),ee=function(e){function t(t,r){var n=e.call(this,t,r)||this;return n.handleListItemClick=function(e){$("onItemClick",{item:e}),n.props.selectable&&(n.itemStore.isSelected(e)?(n.itemStore.setSelected(null),n.props.onDeselect(e)):(n.itemStore.setSelected(e),n.props.onSelect(e))),n.props.onItemClick(e)},n.getListItemProps=function(e){var t=n.props;t.onItemClick;return{item:e,gotoSource:t.gotoSource,clickableInherits:t.clickableInherits,onInheritedClick:t.onInheritedClick,onGotoSourceClick:t.onGotoSourceClick,selected:n.itemStore.isSelected(e),onClick:n.handleListItemClick}},n.itemStore=new R(r.file),n}var r;return W(t,e),t.prototype.render=function(){window.memberlist=this;var e=this.props.scrollable,t=this.context,r=t.file,n=t.fqsen,s=t.manifest,c=X({height:this.props.height||"100%",width:"100%"},this.props.style),l=i.a.createElement("div",{className:"phpdoc-member-list-inner"},this.isFilterable()?this.renderFilters():null,this.renderItems());return e&&(l=i.a.createElement(o.Scrollbar,{style:{height:"100%",width:"100%"}},l)),i.a.createElement("div",{className:"phpdoc-member-list",style:c},i.a.createElement(v.Provider,{value:{itemStore:this.itemStore,file:r,fqsen:n,manifest:s}},l))},t.prototype.isFilterable=function(){return this.props.filterable},t.prototype.renderFilters=function(){if(this.isFilterable())return i.a.createElement("div",{key:"filters",className:"hover-filters"},i.a.createElement(V,{filterable:this.props.filterable,searchable:this.props.searchable,onFilter:this.props.onFilter,onSearch:this.props.onSearch}))},t.prototype.renderItems=function(){var e=this,t=this.props,r=t.properties,n=t.methods;return this.itemStore.visible.map(function(t){return e.itemStore.members.get(t)}).map(function(t,o){var s=e.getListItemProps(t);return t.isProperty()?i.a.createElement(j,Object.assign({},s,{hide:r.hide,key:o,item:t,modifiers:!0})):t.isMethod()?i.a.createElement(C,Object.assign({},s,{hide:n.hide,key:o,item:t,modifiers:!0})):null})},t.displayName="Members",t.defaultProps={scrollable:!1,height:"100%",selected:null,onItemClick:function(){return null},onSelect:function(){return null},onDeselect:function(){return null},onInheritedClick:function(){return null},onGotoSourceClick:function(){return null},onSearch:function(){return null},onFilter:function(){return null},properties:{},methods:{}},t.contextType=E.b,t=Y([Object(E.a)(),L.observer,Z("design:paramtypes",[Object,"function"===typeof(r="undefined"!==typeof i.a&&i.a.ContextType)?r:Object])],t)}(n.Component)},"./src/phpdoc/components/member-list/member-list.scss":function(e,t,r){}}]);