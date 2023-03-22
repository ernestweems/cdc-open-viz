import{g as A}from"./_commonjsHelpers-53f7dec1.js";function D(e,t){for(var n=0;n<t.length;n++){const u=t[n];if(typeof u!=="string"&&!Array.isArray(u)){for(const o in u){if(o!=="default"&&!(o in e)){const c=Object.getOwnPropertyDescriptor(u,o);if(c){Object.defineProperty(e,o,c.get?c:{enumerable:true,get:()=>u[o]})}}}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var m={};var T={get exports(){return m},set exports(e){m=e}};var r={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=Symbol.for("react.element");var V=Symbol.for("react.portal");var F=Symbol.for("react.fragment");var U=Symbol.for("react.strict_mode");var q=Symbol.for("react.profiler");var L=Symbol.for("react.provider");var M=Symbol.for("react.context");var N=Symbol.for("react.forward_ref");var z=Symbol.for("react.suspense");var B=Symbol.for("react.memo");var H=Symbol.for("react.lazy");var k=Symbol.iterator;function W(e){if(null===e||"object"!==typeof e)return null;e=k&&e[k]||e["@@iterator"];return"function"===typeof e?e:null}var $={isMounted:function(){return false},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};var j=Object.assign;var C={};function p(e,t,n){this.props=e;this.context=t;this.refs=C;this.updater=n||$}p.prototype.isReactComponent={};p.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};p.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function O(){}O.prototype=p.prototype;function S(e,t,n){this.props=e;this.context=t;this.refs=C;this.updater=n||$}var E=S.prototype=new O;E.constructor=S;j(E,p.prototype);E.isPureReactComponent=true;var g=Array.isArray;var x=Object.prototype.hasOwnProperty;var b={current:null};var P={key:true,ref:true,__self:true,__source:true};function I(e,t,n){var u,o={},c=null,s=null;if(null!=t)for(u in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(c=""+t.key),t)x.call(t,u)&&!P.hasOwnProperty(u)&&(o[u]=t[u]);var f=arguments.length-2;if(1===f)o.children=n;else if(1<f){for(var i=Array(f),a=0;a<f;a++)i[a]=arguments[a+2];o.children=i}if(e&&e.defaultProps)for(u in f=e.defaultProps,f)void 0===o[u]&&(o[u]=f[u]);return{$$typeof:y,type:e,key:c,ref:s,props:o,_owner:b.current}}function G(e,t){return{$$typeof:y,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function R(e){return"object"===typeof e&&null!==e&&e.$$typeof===y}function J(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var w=/\/+/g;function v(e,t){return"object"===typeof e&&null!==e&&null!=e.key?J(""+e.key):t.toString(36)}function _(e,t,n,u,o){var c=typeof e;if("undefined"===c||"boolean"===c)e=null;var s=false;if(null===e)s=true;else switch(c){case"string":case"number":s=true;break;case"object":switch(e.$$typeof){case y:case V:s=true}}if(s)return s=e,o=o(s),e=""===u?"."+v(s,0):u,g(o)?(n="",null!=e&&(n=e.replace(w,"$&/")+"/"),_(o,t,n,"",function(a){return a})):null!=o&&(R(o)&&(o=G(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(w,"$&/")+"/")+e)),t.push(o)),1;s=0;u=""===u?".":u+":";if(g(e))for(var f=0;f<e.length;f++){c=e[f];var i=u+v(c,f);s+=_(c,t,n,i,o)}else if(i=W(e),"function"===typeof i)for(e=i.call(e),f=0;!(c=e.next()).done;)c=c.value,i=u+v(c,f++),s+=_(c,t,n,i,o);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function d(e,t,n){if(null==e)return e;var u=[],o=0;_(e,u,"","",function(c){return t.call(n,c,o++)});return u}function K(e){if(-1===e._status){var t=e._result;t=t();t.then(function(n){if(0===e._status||-1===e._status)e._status=1,e._result=n},function(n){if(0===e._status||-1===e._status)e._status=2,e._result=n});-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var l={current:null};var h={transition:null};var Q={ReactCurrentDispatcher:l,ReactCurrentBatchConfig:h,ReactCurrentOwner:b};r.Children={map:d,forEach:function(e,t,n){d(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;d(e,function(){t++});return t},toArray:function(e){return d(e,function(t){return t})||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};r.Component=p;r.Fragment=F;r.Profiler=q;r.PureComponent=S;r.StrictMode=U;r.Suspense=z;r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q;r.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var u=j({},e.props),o=e.key,c=e.ref,s=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,s=b.current);void 0!==t.key&&(o=""+t.key);if(e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(i in t)x.call(t,i)&&!P.hasOwnProperty(i)&&(u[i]=void 0===t[i]&&void 0!==f?f[i]:t[i])}var i=arguments.length-2;if(1===i)u.children=n;else if(1<i){f=Array(i);for(var a=0;a<i;a++)f[a]=arguments[a+2];u.children=f}return{$$typeof:y,type:e.type,key:o,ref:c,props:u,_owner:s}};r.createContext=function(e){e={$$typeof:M,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};e.Provider={$$typeof:L,_context:e};return e.Consumer=e};r.createElement=I;r.createFactory=function(e){var t=I.bind(null,e);t.type=e;return t};r.createRef=function(){return{current:null}};r.forwardRef=function(e){return{$$typeof:N,render:e}};r.isValidElement=R;r.lazy=function(e){return{$$typeof:H,_payload:{_status:-1,_result:e},_init:K}};r.memo=function(e,t){return{$$typeof:B,type:e,compare:void 0===t?null:t}};r.startTransition=function(e){var t=h.transition;h.transition={};try{e()}finally{h.transition=t}};r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};r.useCallback=function(e,t){return l.current.useCallback(e,t)};r.useContext=function(e){return l.current.useContext(e)};r.useDebugValue=function(){};r.useDeferredValue=function(e){return l.current.useDeferredValue(e)};r.useEffect=function(e,t){return l.current.useEffect(e,t)};r.useId=function(){return l.current.useId()};r.useImperativeHandle=function(e,t,n){return l.current.useImperativeHandle(e,t,n)};r.useInsertionEffect=function(e,t){return l.current.useInsertionEffect(e,t)};r.useLayoutEffect=function(e,t){return l.current.useLayoutEffect(e,t)};r.useMemo=function(e,t){return l.current.useMemo(e,t)};r.useReducer=function(e,t,n){return l.current.useReducer(e,t,n)};r.useRef=function(e){return l.current.useRef(e)};r.useState=function(e){return l.current.useState(e)};r.useSyncExternalStore=function(e,t,n){return l.current.useSyncExternalStore(e,t,n)};r.useTransition=function(){return l.current.useTransition()};r.version="18.2.0";(function(e){{e.exports=r}})(T);const Y=A(m);const Z=D({__proto__:null,default:Y},[m]);export{Y as R,Z as a,m as r};
//# sourceMappingURL=index-18f6e4ac.js.map
