(window.webpackJsonp=window.webpackJsonp||[]).push([["vendors~phpdoc.components.~phpdoc.components.docblock~phpdoc.components.entity~phpdoc.components.lin~69a9125d"],{"../node_modules/mobx-react/index.module.js":function(e,t,n){"use strict";n.r(t),n.d(t,"propTypes",function(){return L}),n.d(t,"PropTypes",function(){return L}),n.d(t,"onError",function(){return De}),n.d(t,"observer",function(){return we}),n.d(t,"Observer",function(){return Oe}),n.d(t,"renderReporter",function(){return ae}),n.d(t,"componentByNodeRegistery",function(){return ie}),n.d(t,"componentByNodeRegistry",function(){return ie}),n.d(t,"trackComponents",function(){return de}),n.d(t,"useStaticRendering",function(){return ye}),n.d(t,"Provider",function(){return Ce}),n.d(t,"inject",function(){return Z}),n.d(t,"disposeOnUnmount",function(){return Re});var r=n("./src/mobx.js"),o=n("../node_modules/react/index.js"),i=n.n(o),a=n("../node_modules/react-dom/index.js");function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e,t){return e(t={exports:{}},t.exports),t.exports}var b,v=m(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,p=n?Symbol.for("react.async_mode"):60111,l=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,y=n?Symbol.for("react.memo"):60115,h=n?Symbol.for("react.lazy"):60116;function m(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case p:case l:case i:case c:case a:return e;default:switch(e=e&&e.$$typeof){case u:case f:case s:return e;default:return t}}case o:return t}}}function b(e){return m(e)===l}t.typeOf=m,t.AsyncMode=p,t.ConcurrentMode=l,t.ContextConsumer=u,t.ContextProvider=s,t.Element=r,t.ForwardRef=f,t.Fragment=i,t.Profiler=c,t.Portal=o,t.StrictMode=a,t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===l||e===c||e===a||e===d||"object"===typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===y||e.$$typeof===s||e.$$typeof===u||e.$$typeof===f)},t.isAsyncMode=function(e){return b(e)||m(e)===p},t.isConcurrentMode=b,t.isContextConsumer=function(e){return m(e)===u},t.isContextProvider=function(e){return m(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return m(e)===f},t.isFragment=function(e){return m(e)===i},t.isProfiler=function(e){return m(e)===c},t.isPortal=function(e){return m(e)===o},t.isStrictMode=function(e){return m(e)===a}});(b=v)&&b.__esModule&&Object.prototype.hasOwnProperty.call(b,"default")&&b.default;v.typeOf,v.AsyncMode,v.ConcurrentMode,v.ContextConsumer,v.ContextProvider,v.Element,v.ForwardRef,v.Fragment,v.Profiler,v.Portal,v.StrictMode,v.isValidElementType,v.isAsyncMode,v.isConcurrentMode,v.isContextConsumer,v.isContextProvider,v.isElement,v.isForwardRef,v.isFragment,v.isProfiler,v.isPortal,v.isStrictMode;var g=m(function(e){e.exports=v}),w={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},O={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_={};_[g.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0};var j=Object.defineProperty,S=Object.getOwnPropertyNames,x=Object.getOwnPropertySymbols,P=Object.getOwnPropertyDescriptor,C=Object.getPrototypeOf,E=Object.prototype;var M=function e(t,n,r){if("string"!==typeof n){if(E){var o=C(n);o&&o!==E&&e(t,o,r)}var i=S(n);x&&(i=i.concat(x(n)));for(var a=_[t.$$typeof]||w,c=_[n.$$typeof]||w,s=0;s<i.length;++s){var u=i[s];if(!O[u]&&(!r||!r[u])&&(!c||!c[u])&&(!a||!a[u])){var p=P(n,u);try{j(t,u,p)}catch(l){}}}return t}return t},U=function(){function e(){s(this,e),this.listeners=[]}return p(e,[{key:"on",value:function(e){var t=this;return this.listeners.push(e),function(){var n=t.listeners.indexOf(e);-1!==n&&t.listeners.splice(n,1)}}},{key:"emit",value:function(e){this.listeners.forEach(function(t){return t(e)})}}]),e}();function k(e){function t(t,n,o,i,a,c){for(var s=arguments.length,u=new Array(s>6?s-6:0),p=6;p<s;p++)u[p-6]=arguments[p];return Object(r.untracked)(function(){if(i=i||"<<anonymous>>",c=c||o,null==n[o]){if(t){var r=null===n[o]?"null":"undefined";return new Error("The "+a+" `"+c+"` is marked as required in `"+i+"`, but its value is `"+r+"`.")}return null}return e.apply(void 0,[n,o,i,a,c].concat(u))})}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n}function R(e){var t=c(e);return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||"Symbol"===t["@@toStringTag"]||"function"===typeof Symbol&&t instanceof Symbol}(t,e)?"symbol":t}function D(e,t){return k(function(n,o,i,a,c){return Object(r.untracked)(function(){if(e&&R(n[o])===t.toLowerCase())return null;var a;switch(t){case"Array":a=r.isObservableArray;break;case"Object":a=r.isObservableObject;break;case"Map":a=r.isObservableMap;break;default:throw new Error("Unexpected mobxType: ".concat(t))}var s=n[o];if(!a(s)){var u=function(e){var t=R(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}(s),p=e?" or javascript `"+t.toLowerCase()+"`":"";return new Error("Invalid prop `"+c+"` of type `"+u+"` supplied to `"+i+"`, expected `mobx.Observable"+t+"`"+p+".")}return null})})}function A(e,t){return k(function(n,o,i,a,c){for(var s=arguments.length,u=new Array(s>5?s-5:0),p=5;p<s;p++)u[p-5]=arguments[p];return Object(r.untracked)(function(){if("function"!==typeof t)return new Error("Property `"+c+"` of component `"+i+"` has invalid PropType notation.");var r=D(e,"Array")(n,o,i);if(r instanceof Error)return r;for(var s=n[o],p=0;p<s.length;p++)if((r=t.apply(void 0,[s,p,i,a,c+"["+p+"]"].concat(u)))instanceof Error)return r;return null})})}var $=D(!1,"Array"),T=A.bind(null,!1),F=D(!1,"Map"),I=D(!1,"Object"),W=D(!0,"Array"),N=A.bind(null,!0),B=D(!0,"Object"),L=Object.freeze({observableArray:$,observableArrayOf:T,observableMap:F,observableObject:I,arrayOrObservableArray:W,arrayOrObservableArrayOf:N,objectOrObservableObject:B});var X=0;function H(e){if("function"===typeof Symbol)return Symbol(e);var t="__$mobx-react ".concat(e," (").concat(X,")");return X++,t}var q=H("patchMixins"),V=H("patchedDefinition");function G(e,t){for(var n=this,r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];t.locks++;try{var a;return void 0!==e&&null!==e&&(a=e.apply(this,o)),a}finally{t.locks--,0===t.locks&&t.methods.forEach(function(e){e.apply(n,o)})}}function K(e,t){return function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];G.call.apply(G,[this,e,t].concat(r))}}function z(e,t){for(var n=function(e,t){var n=e[q]=e[q]||{},r=n[t]=n[t]||{};return r.locks=r.locks||0,r.methods=r.methods||[],r}(e,t),r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];for(var a=0;a<o.length;a++){var c=o[a];n.methods.indexOf(c)<0&&n.methods.push(c)}var s=Object.getOwnPropertyDescriptor(e,t);if(!s||!s[V]){var u=e[t],p=function e(t,n,r,o,i){var a;var c=K(i,o);return a={},l(a,V,!0),l(a,"get",function(){return c}),l(a,"set",function(i){if(this===t)c=K(i,o);else{var a=e(this,n,r,o,i);Object.defineProperty(this,n,a)}}),l(a,"configurable",!0),l(a,"enumerable",r),a}(e,t,s?s.enumerable:void 0,n,u);Object.defineProperty(e,t,p)}}var J={mobxStores:B};Object.seal(J);var Y={contextTypes:{get:function(){return J},set:function(e){console.warn("Mobx Injector: you are trying to attach `contextTypes` on an component decorated with `inject` (or `observer`) HOC. Please specify the contextTypes on the wrapped component instead. It is accessible through the `wrappedComponent`")},configurable:!0,enumerable:!1},isMobxInjector:{value:!0,writable:!0,configurable:!0,enumerable:!0}};function Q(e,t,n){var r="inject-"+(t.displayName||t.name||t.constructor&&t.constructor.name||"Unknown");n&&(r+="-with-"+n);var i=function(n){function r(){var e,t;s(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=h(this,(e=d(r)).call.apply(e,[this].concat(o)))).storeRef=function(e){t.wrappedInstance=e},t}return f(r,o["Component"]),p(r,[{key:"render",value:function(){var n={};for(var r in this.props)this.props.hasOwnProperty(r)&&(n[r]=this.props[r]);var i=e(this.context.mobxStores||{},n,this.context)||{};for(var a in i)n[a]=i[a];return function(e){return!(e.prototype&&e.prototype.render)}(t)||(n.ref=this.storeRef),Object(o.createElement)(t,n)}}]),r}();return i.displayName=r,M(i,t),i.wrappedComponent=t,Object.defineProperties(i,Y),i}function Z(){var e;if("function"===typeof arguments[0])return e=arguments[0],function(t){var n=Q(e,t);return n.isMobxInjector=!1,(n=we(n)).isMobxInjector=!0,n};for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e=function(e){return function(t,n){return e.forEach(function(e){if(!(e in n)){if(!(e in t))throw new Error("MobX injector: Store '"+e+"' is not available! Make sure it is provided by some Provider");n[e]=t[e]}}),n}}(t),function(n){return Q(e,n,t.join("-"))}}var ee=r.$mobx||"$mobx",te=H("isUnmounted"),ne=!1,re=!1,oe=!1,ie="undefined"!==typeof WeakMap?new WeakMap:void 0,ae=new U,ce=H("skipRender"),se=H("isForcingUpdate"),ue="function"===typeof o.forwardRef&&Object(o.forwardRef)(function(e,t){}).$$typeof;function pe(e,t,n){Object.hasOwnProperty.call(e,t)?e[t]=n:Object.defineProperty(e,t,{enumerable:!1,configurable:!0,writable:!0,value:n})}function le(e){if(a.findDOMNode)try{return Object(a.findDOMNode)(e)}catch(t){return null}return null}function fe(e){var t=le(e);t&&ie&&ie.set(t,e),ae.emit({event:"render",renderTime:e.__$mobRenderEnd-e.__$mobRenderStart,totalTime:Date.now()-e.__$mobRenderStart,component:e,node:t})}function de(){if("undefined"===typeof WeakMap)throw new Error("[mobx-react] tracking components is not supported in this browser.");ne||(ne=!0)}function ye(e){re=e}var he=new U;function me(e,t){if(be(e,t))return!0;if("object"!==c(e)||null===e||"object"!==c(t)||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!hasOwnProperty.call(t,n[o])||!be(e[n[o]],t[n[o]]))return!1;return!0}function be(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}var ve={componentWillUnmount:function(){if(!0!==re&&(this.render[ee]&&this.render[ee].dispose(),this[te]=!0,ne)){var e=le(this);e&&ie&&ie.delete(e),ae.emit({event:"destroy",component:this,node:e})}},componentDidMount:function(){ne&&fe(this)},componentDidUpdate:function(){ne&&fe(this)},shouldComponentUpdate:function(e,t){return re&&console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side."),this.state!==t||!me(this.props,e)}};function ge(e,t){var n=H("reactProp_".concat(t,"_valueHolder")),o=H("reactProp_".concat(t,"_atomHolder"));function i(){return this[o]||pe(this,o,Object(r.createAtom)("reactive "+t)),this[o]}Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return i.call(this).reportObserved(),this[n]},set:function(e){this[se]||me(this[n],e)?pe(this,n,e):(pe(this,n,e),pe(this,ce,!0),i.call(this).reportChanged(),pe(this,ce,!1))}})}function we(e,t){if("string"===typeof e)throw new Error("Store names should be provided as array");if(Array.isArray(e))return oe||(oe=!0,console.warn('Mobx observer: Using observer to inject stores is deprecated since 4.0. Use `@inject("store1", "store2") @observer ComponentClass` or `inject("store1", "store2")(observer(componentClass))` instead of `@observer(["store1", "store2"]) ComponentClass`')),t?Z.apply(null,e)(we(t)):function(t){return we(e,t)};var n=e;if(!0===n.isMobxInjector&&console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'"),n.__proto__===o.PureComponent&&console.warn("Mobx observer: You are using 'observer' on React.PureComponent. These two achieve two opposite goals and should not be used together"),ue&&n.$$typeof===ue){var a=n.render;if("function"!==typeof a)throw new Error("render property of ForwardRef was not a function");return Object(o.forwardRef)(function(){var e=arguments;return i.a.createElement(Oe,null,function(){return a.apply(void 0,e)})})}if("function"===typeof n&&(!n.prototype||!n.prototype.render)&&!n.isReactClass&&!o.Component.isPrototypeOf(n)){var c,u,l=we((u=c=function(e){function t(){return s(this,t),h(this,d(t).apply(this,arguments))}return f(t,o["Component"]),p(t,[{key:"render",value:function(){return n.call(this,this.props,this.context)}}]),t}(),c.displayName=n.displayName||n.name,c.contextTypes=n.contextTypes,c.propTypes=n.propTypes,c.defaultProps=n.defaultProps,u));return M(l,n),l}if(!n)throw new Error("Please pass a valid component to 'observer'");var y=n.prototype||n;!function(e){["componentDidMount","componentWillUnmount","componentDidUpdate"].forEach(function(t){!function(e,t){z(e,t,ve[t])}(e,t)}),e.shouldComponentUpdate?e.shouldComponentUpdate!==ve.shouldComponentUpdate&&console.warn("Use `shouldComponentUpdate` in an `observer` based component breaks the behavior of `observer` and might lead to unexpected results. Manually implementing `sCU` should not be needed when using mobx-react."):e.shouldComponentUpdate=ve.shouldComponentUpdate}(y),n.isMobXReactObserver=!0,ge(y,"props"),ge(y,"state");var m=y.render;return y.render=function(){return function(e){var t=this;if(!0===re)return e.call(this);function n(){var e=this;s=!1;var t=void 0,n=void 0;if(u.track(function(){ne&&(e.__$mobRenderStart=Date.now());try{n=Object(r._allowStateChanges)(!1,c)}catch(o){t=o}ne&&(e.__$mobRenderEnd=Date.now())}),t)throw he.emit(t),t;return n}var i=this.displayName||this.name||this.constructor&&(this.constructor.displayName||this.constructor.name)||"<component>",a=this._reactInternalInstance&&this._reactInternalInstance._rootNodeID||this._reactInternalInstance&&this._reactInternalInstance._debugID||this._reactInternalFiber&&this._reactInternalFiber._debugID;pe(this,ce,!1),pe(this,se,!1);var c=e.bind(this),s=!1,u=new r.Reaction("".concat(i,"#").concat(a,".render()"),function(){if(!s&&(s=!0,"function"===typeof t.componentWillReact&&t.componentWillReact(),!0!==t[te])){var e=!0;try{pe(t,se,!0),t[ce]||o.Component.prototype.forceUpdate.call(t),e=!1}finally{pe(t,se,!1),e&&u.dispose()}}});return u.reactComponent=this,n[ee]=u,this.render=n,n.call(this)}.call(this,m)},n}var Oe=we(function(e){var t=e.children,n=e.inject,r=e.render,o=t||r;if("undefined"===typeof o)return null;if(!n)return o();console.warn("<Observer inject=.../> is no longer supported. Please use inject on the enclosing component instead");var a=Z(n)(o);return i.a.createElement(a,null)});Oe.displayName="Observer";var _e=function(e,t,n,r,o){var i="children"===t?"render":"children";return"function"===typeof e[t]&&"function"===typeof e[i]?new Error("Invalid prop,do not use children and render in the same time in`"+n):"function"!==typeof e[t]&&"function"!==typeof e[i]?new Error("Invalid prop `"+o+"` of type `"+c(e[t])+"` supplied to `"+n+"`, expected `function`."):void 0};function je(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function Se(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function xe(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}Oe.propTypes={render:_e,children:_e},je.__suppressDeprecationWarning=!0,Se.__suppressDeprecationWarning=!0,xe.__suppressDeprecationWarning=!0;var Pe={children:!0,key:!0,ref:!0},Ce=function(e){function t(e,n){var r;return s(this,t),(r=h(this,d(t).call(this,e,n))).state={},Ee(e,r.state),r}return f(t,o["Component"]),p(t,[{key:"render",value:function(){return o.Children.only(this.props.children)}},{key:"getChildContext",value:function(){var e={};return Ee(this.context.mobxStores,e),Ee(this.props,e),{mobxStores:e}}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(!e)return null;if(!t)return e;if(Object.keys(e).filter(Me).length!==Object.keys(t).filter(Me).length&&console.warn("MobX Provider: The set of provided stores has changed. Please avoid changing stores as the change might not propagate to all children"),!e.suppressChangedStoreWarning)for(var n in e)Me(n)&&t[n]!==e[n]&&console.warn("MobX Provider: Provided store '"+n+"' has changed. Please avoid replacing stores as the change might not propagate to all children");return e}}]),t}();function Ee(e,t){if(e)for(var n in e)Me(n)&&(t[n]=e[n])}function Me(e){return!Pe[e]&&"suppressChangedStoreWarning"!==e}Ce.contextTypes={mobxStores:B},Ce.childContextTypes={mobxStores:B.isRequired},function(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var n=null,r=null,o=null;if("function"===typeof t.componentWillMount?n="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?r="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(r="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?o="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(o="UNSAFE_componentWillUpdate"),null!==n||null!==r||null!==o){var i=e.displayName||e.name,a="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+i+" uses "+a+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==r?"\n  "+r:"")+(null!==o?"\n  "+o:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=je,t.componentWillReceiveProps=Se),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=xe;var c=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var r=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;c.call(this,e,t,r)}}}(Ce);var Ue=H("disposeOnUnmount");function ke(){var e=this;this[Ue]&&(this[Ue].forEach(function(t){var n="string"===typeof t?e[t]:t;if(void 0!==n&&null!==n){if("function"!==typeof n)throw new Error("[mobx-react] disposeOnUnmount only works on functions such as disposers returned by reactions, autorun, etc.");n()}}),this[Ue]=[])}function Re(e,t){if(Array.isArray(t))return t.map(function(t){return Re(e,t)});if(!e instanceof o.Component)throw new Error("[mobx-react] disposeOnUnmount only works on class based React components.");if("string"!==typeof t&&"function"!==typeof t)throw new Error("[mobx-react] disposeOnUnmount only works if the parameter is either a property key or a function.");var n=!!e[Ue];return(e[Ue]||(e[Ue]=[])).push(t),n||z(e,"componentWillUnmount",ke),"string"!==typeof t?t:void 0}if(!o.Component)throw new Error("mobx-react requires React to be available");if(!r.spy)throw new Error("mobx-react requires mobx to be available");"function"===typeof a.unstable_batchedUpdates&&Object(r.configure)({reactionScheduler:a.unstable_batchedUpdates});var De=function(e){return he.on(e)};if("object"===("undefined"===typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__?"undefined":c(__MOBX_DEVTOOLS_GLOBAL_HOOK__))){var Ae={spy:r.spy,extras:{getDebugName:r.getDebugName}},$e={renderReporter:ae,componentByNodeRegistry:ie,componentByNodeRegistery:ie,trackComponents:de};__MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobxReact($e,Ae)}}}]);