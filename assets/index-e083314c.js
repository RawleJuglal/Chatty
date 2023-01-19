function D1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function L1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xs={},M1={get exports(){return xs},set exports(e){xs=e}},_a={},Q={},$1={get exports(){return Q},set exports(e){Q=e}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var co=Symbol.for("react.element"),U1=Symbol.for("react.portal"),F1=Symbol.for("react.fragment"),j1=Symbol.for("react.strict_mode"),z1=Symbol.for("react.profiler"),B1=Symbol.for("react.provider"),H1=Symbol.for("react.context"),V1=Symbol.for("react.forward_ref"),W1=Symbol.for("react.suspense"),G1=Symbol.for("react.memo"),K1=Symbol.for("react.lazy"),Fd=Symbol.iterator;function Y1(e){return e===null||typeof e!="object"?null:(e=Fd&&e[Fd]||e["@@iterator"],typeof e=="function"?e:null)}var Im={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tm=Object.assign,Cm={};function Kr(e,t,n){this.props=e,this.context=t,this.refs=Cm,this.updater=n||Im}Kr.prototype.isReactComponent={};Kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function bm(){}bm.prototype=Kr.prototype;function Fc(e,t,n){this.props=e,this.context=t,this.refs=Cm,this.updater=n||Im}var jc=Fc.prototype=new bm;jc.constructor=Fc;Tm(jc,Kr.prototype);jc.isPureReactComponent=!0;var jd=Array.isArray,Am=Object.prototype.hasOwnProperty,zc={current:null},xm={key:!0,ref:!0,__self:!0,__source:!0};function Pm(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Am.call(t,r)&&!xm.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:co,type:e,key:o,ref:s,props:i,_owner:zc.current}}function X1(e,t){return{$$typeof:co,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Bc(e){return typeof e=="object"&&e!==null&&e.$$typeof===co}function q1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var zd=/\/+/g;function dl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?q1(""+e.key):t.toString(36)}function fs(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case co:case U1:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+dl(s,0):r,jd(i)?(n="",e!=null&&(n=e.replace(zd,"$&/")+"/"),fs(i,t,n,"",function(u){return u})):i!=null&&(Bc(i)&&(i=X1(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(zd,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",jd(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+dl(o,a);s+=fs(o,t,n,l,i)}else if(l=Y1(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+dl(o,a++),s+=fs(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Lo(e,t,n){if(e==null)return e;var r=[],i=0;return fs(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Q1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},ds={transition:null},J1={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:ds,ReactCurrentOwner:zc};$.Children={map:Lo,forEach:function(e,t,n){Lo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Lo(e,function(){t++}),t},toArray:function(e){return Lo(e,function(t){return t})||[]},only:function(e){if(!Bc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=Kr;$.Fragment=F1;$.Profiler=z1;$.PureComponent=Fc;$.StrictMode=j1;$.Suspense=W1;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J1;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Tm({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=zc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Am.call(t,l)&&!xm.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:co,type:e.type,key:i,ref:o,props:r,_owner:s}};$.createContext=function(e){return e={$$typeof:H1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:B1,_context:e},e.Consumer=e};$.createElement=Pm;$.createFactory=function(e){var t=Pm.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:V1,render:e}};$.isValidElement=Bc;$.lazy=function(e){return{$$typeof:K1,_payload:{_status:-1,_result:e},_init:Q1}};$.memo=function(e,t){return{$$typeof:G1,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=ds.transition;ds.transition={};try{e()}finally{ds.transition=t}};$.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};$.useCallback=function(e,t){return Pe.current.useCallback(e,t)};$.useContext=function(e){return Pe.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};$.useEffect=function(e,t){return Pe.current.useEffect(e,t)};$.useId=function(){return Pe.current.useId()};$.useImperativeHandle=function(e,t,n){return Pe.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return Pe.current.useMemo(e,t)};$.useReducer=function(e,t,n){return Pe.current.useReducer(e,t,n)};$.useRef=function(e){return Pe.current.useRef(e)};$.useState=function(e){return Pe.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return Pe.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return Pe.current.useTransition()};$.version="18.2.0";(function(e){e.exports=$})($1);const ka=L1(Q),lu=D1({__proto__:null,default:ka},[Q]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z1=Q,ew=Symbol.for("react.element"),tw=Symbol.for("react.fragment"),nw=Object.prototype.hasOwnProperty,rw=Z1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,iw={key:!0,ref:!0,__self:!0,__source:!0};function Om(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)nw.call(t,r)&&!iw.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ew,type:e,key:o,ref:s,props:i,_owner:rw.current}}_a.Fragment=tw;_a.jsx=Om;_a.jsxs=Om;(function(e){e.exports=_a})(M1);const te=xs.jsx,Qt=xs.jsxs;var uu={},cu={},ow={get exports(){return cu},set exports(e){cu=e}},We={},fu={},sw={get exports(){return fu},set exports(e){fu=e}},Rm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,N){var M=C.length;C.push(N);e:for(;0<M;){var re=M-1>>>1,ce=C[re];if(0<i(ce,N))C[re]=N,C[M]=ce,M=re;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var N=C[0],M=C.pop();if(M!==N){C[0]=M;e:for(var re=0,ce=C.length,No=ce>>>1;re<No;){var bn=2*(re+1)-1,fl=C[bn],An=bn+1,Do=C[An];if(0>i(fl,M))An<ce&&0>i(Do,fl)?(C[re]=Do,C[An]=M,re=An):(C[re]=fl,C[bn]=M,re=bn);else if(An<ce&&0>i(Do,M))C[re]=Do,C[An]=M,re=An;else break e}}return N}function i(C,N){var M=C.sortIndex-N.sortIndex;return M!==0?M:C.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,h=3,g=!1,v=!1,w=!1,P=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(C){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=C)r(u),N.sortIndex=N.expirationTime,t(l,N);else break;N=n(u)}}function y(C){if(w=!1,m(C),!v)if(n(l)!==null)v=!0,ul(k);else{var N=n(u);N!==null&&cl(y,N.startTime-C)}}function k(C,N){v=!1,w&&(w=!1,p(x),x=-1),g=!0;var M=h;try{for(m(N),f=n(l);f!==null&&(!(f.expirationTime>N)||C&&!rt());){var re=f.callback;if(typeof re=="function"){f.callback=null,h=f.priorityLevel;var ce=re(f.expirationTime<=N);N=e.unstable_now(),typeof ce=="function"?f.callback=ce:f===n(l)&&r(l),m(N)}else r(l);f=n(l)}if(f!==null)var No=!0;else{var bn=n(u);bn!==null&&cl(y,bn.startTime-N),No=!1}return No}finally{f=null,h=M,g=!1}}var E=!1,S=null,x=-1,U=5,D=-1;function rt(){return!(e.unstable_now()-D<U)}function ei(){if(S!==null){var C=e.unstable_now();D=C;var N=!0;try{N=S(!0,C)}finally{N?ti():(E=!1,S=null)}}else E=!1}var ti;if(typeof d=="function")ti=function(){d(ei)};else if(typeof MessageChannel<"u"){var Ud=new MessageChannel,N1=Ud.port2;Ud.port1.onmessage=ei,ti=function(){N1.postMessage(null)}}else ti=function(){P(ei,0)};function ul(C){S=C,E||(E=!0,ti())}function cl(C,N){x=P(function(){C(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,ul(k))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(C){switch(h){case 1:case 2:case 3:var N=3;break;default:N=h}var M=h;h=N;try{return C()}finally{h=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,N){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var M=h;h=C;try{return N()}finally{h=M}},e.unstable_scheduleCallback=function(C,N,M){var re=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?re+M:re):M=re,C){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=M+ce,C={id:c++,callback:N,priorityLevel:C,startTime:M,expirationTime:ce,sortIndex:-1},M>re?(C.sortIndex=M,t(u,C),n(l)===null&&C===n(u)&&(w?(p(x),x=-1):w=!0,cl(y,M-re))):(C.sortIndex=ce,t(l,C),v||g||(v=!0,ul(k))),C},e.unstable_shouldYield=rt,e.unstable_wrapCallback=function(C){var N=h;return function(){var M=h;h=N;try{return C.apply(this,arguments)}finally{h=M}}}})(Rm);(function(e){e.exports=Rm})(sw);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm=Q,Ve=fu;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dm=new Set,Ri={};function rr(e,t){$r(e,t),$r(e+"Capture",t)}function $r(e,t){for(Ri[e]=t,e=0;e<t.length;e++)Dm.add(t[e])}var Dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),du=Object.prototype.hasOwnProperty,aw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bd={},Hd={};function lw(e){return du.call(Hd,e)?!0:du.call(Bd,e)?!1:aw.test(e)?Hd[e]=!0:(Bd[e]=!0,!1)}function uw(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function cw(e,t,n,r){if(t===null||typeof t>"u"||uw(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Oe(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ve[e]=new Oe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ve[t]=new Oe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ve[e]=new Oe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ve[e]=new Oe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ve[e]=new Oe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ve[e]=new Oe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ve[e]=new Oe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ve[e]=new Oe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ve[e]=new Oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Hc=/[\-:]([a-z])/g;function Vc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Hc,Vc);ve[t]=new Oe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Hc,Vc);ve[t]=new Oe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Hc,Vc);ve[t]=new Oe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ve[e]=new Oe(e,1,!1,e.toLowerCase(),null,!1,!1)});ve.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ve[e]=new Oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Wc(e,t,n,r){var i=ve.hasOwnProperty(t)?ve[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(cw(t,n,i,r)&&(n=null),r||i===null?lw(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ht=Nm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mo=Symbol.for("react.element"),lr=Symbol.for("react.portal"),ur=Symbol.for("react.fragment"),Gc=Symbol.for("react.strict_mode"),hu=Symbol.for("react.profiler"),Lm=Symbol.for("react.provider"),Mm=Symbol.for("react.context"),Kc=Symbol.for("react.forward_ref"),pu=Symbol.for("react.suspense"),mu=Symbol.for("react.suspense_list"),Yc=Symbol.for("react.memo"),Xt=Symbol.for("react.lazy"),$m=Symbol.for("react.offscreen"),Vd=Symbol.iterator;function ni(e){return e===null||typeof e!="object"?null:(e=Vd&&e[Vd]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,hl;function fi(e){if(hl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);hl=t&&t[1]||""}return`
`+hl+e}var pl=!1;function ml(e,t){if(!e||pl)return"";pl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{pl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?fi(e):""}function fw(e){switch(e.tag){case 5:return fi(e.type);case 16:return fi("Lazy");case 13:return fi("Suspense");case 19:return fi("SuspenseList");case 0:case 2:case 15:return e=ml(e.type,!1),e;case 11:return e=ml(e.type.render,!1),e;case 1:return e=ml(e.type,!0),e;default:return""}}function gu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ur:return"Fragment";case lr:return"Portal";case hu:return"Profiler";case Gc:return"StrictMode";case pu:return"Suspense";case mu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Mm:return(e.displayName||"Context")+".Consumer";case Lm:return(e._context.displayName||"Context")+".Provider";case Kc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yc:return t=e.displayName||null,t!==null?t:gu(e.type)||"Memo";case Xt:t=e._payload,e=e._init;try{return gu(e(t))}catch{}}return null}function dw(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gu(t);case 8:return t===Gc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Um(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function hw(e){var t=Um(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $o(e){e._valueTracker||(e._valueTracker=hw(e))}function Fm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Um(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ps(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vu(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Wd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jm(e,t){t=t.checked,t!=null&&Wc(e,"checked",t,!1)}function yu(e,t){jm(e,t);var n=vn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?wu(e,t.type,n):t.hasOwnProperty("defaultValue")&&wu(e,t.type,vn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Gd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function wu(e,t,n){(t!=="number"||Ps(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var di=Array.isArray;function Cr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function _u(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Kd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(di(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vn(n)}}function zm(e,t){var n=vn(t.value),r=vn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Yd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ku(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Uo,Hm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Uo=Uo||document.createElement("div"),Uo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Uo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ni(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var yi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pw=["Webkit","ms","Moz","O"];Object.keys(yi).forEach(function(e){pw.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),yi[t]=yi[e]})});function Vm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||yi.hasOwnProperty(e)&&yi[e]?(""+t).trim():t+"px"}function Wm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Vm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var mw=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Eu(e,t){if(t){if(mw[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Su(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Iu=null;function Xc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tu=null,br=null,Ar=null;function Xd(e){if(e=po(e)){if(typeof Tu!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Ca(t),Tu(e.stateNode,e.type,t))}}function Gm(e){br?Ar?Ar.push(e):Ar=[e]:br=e}function Km(){if(br){var e=br,t=Ar;if(Ar=br=null,Xd(e),t)for(e=0;e<t.length;e++)Xd(t[e])}}function Ym(e,t){return e(t)}function Xm(){}var gl=!1;function qm(e,t,n){if(gl)return e(t,n);gl=!0;try{return Ym(e,t,n)}finally{gl=!1,(br!==null||Ar!==null)&&(Xm(),Km())}}function Di(e,t){var n=e.stateNode;if(n===null)return null;var r=Ca(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Cu=!1;if(Dt)try{var ri={};Object.defineProperty(ri,"passive",{get:function(){Cu=!0}}),window.addEventListener("test",ri,ri),window.removeEventListener("test",ri,ri)}catch{Cu=!1}function gw(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var wi=!1,Os=null,Rs=!1,bu=null,vw={onError:function(e){wi=!0,Os=e}};function yw(e,t,n,r,i,o,s,a,l){wi=!1,Os=null,gw.apply(vw,arguments)}function ww(e,t,n,r,i,o,s,a,l){if(yw.apply(this,arguments),wi){if(wi){var u=Os;wi=!1,Os=null}else throw Error(_(198));Rs||(Rs=!0,bu=u)}}function ir(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Qm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qd(e){if(ir(e)!==e)throw Error(_(188))}function _w(e){var t=e.alternate;if(!t){if(t=ir(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return qd(i),e;if(o===r)return qd(i),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Jm(e){return e=_w(e),e!==null?Zm(e):null}function Zm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zm(e);if(t!==null)return t;e=e.sibling}return null}var eg=Ve.unstable_scheduleCallback,Qd=Ve.unstable_cancelCallback,kw=Ve.unstable_shouldYield,Ew=Ve.unstable_requestPaint,ie=Ve.unstable_now,Sw=Ve.unstable_getCurrentPriorityLevel,qc=Ve.unstable_ImmediatePriority,tg=Ve.unstable_UserBlockingPriority,Ns=Ve.unstable_NormalPriority,Iw=Ve.unstable_LowPriority,ng=Ve.unstable_IdlePriority,Ea=null,_t=null;function Tw(e){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(Ea,e,void 0,(e.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:Aw,Cw=Math.log,bw=Math.LN2;function Aw(e){return e>>>=0,e===0?32:31-(Cw(e)/bw|0)|0}var Fo=64,jo=4194304;function hi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ds(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=hi(a):(o&=s,o!==0&&(r=hi(o)))}else s=n&~i,s!==0?r=hi(s):o!==0&&(r=hi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ut(t),i=1<<n,r|=e[n],t&=~i;return r}function xw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pw(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-ut(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=xw(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Au(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function rg(){var e=Fo;return Fo<<=1,!(Fo&4194240)&&(Fo=64),e}function vl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ut(t),e[t]=n}function Ow(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ut(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Qc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ut(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var B=0;function ig(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var og,Jc,sg,ag,lg,xu=!1,zo=[],an=null,ln=null,un=null,Li=new Map,Mi=new Map,Jt=[],Rw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jd(e,t){switch(e){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":Li.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mi.delete(t.pointerId)}}function ii(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=po(t),t!==null&&Jc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Nw(e,t,n,r,i){switch(t){case"focusin":return an=ii(an,e,t,n,r,i),!0;case"dragenter":return ln=ii(ln,e,t,n,r,i),!0;case"mouseover":return un=ii(un,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Li.set(o,ii(Li.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Mi.set(o,ii(Mi.get(o)||null,e,t,n,r,i)),!0}return!1}function ug(e){var t=Rn(e.target);if(t!==null){var n=ir(t);if(n!==null){if(t=n.tag,t===13){if(t=Qm(n),t!==null){e.blockedOn=t,lg(e.priority,function(){sg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Pu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Iu=r,n.target.dispatchEvent(r),Iu=null}else return t=po(n),t!==null&&Jc(t),e.blockedOn=n,!1;t.shift()}return!0}function Zd(e,t,n){hs(e)&&n.delete(t)}function Dw(){xu=!1,an!==null&&hs(an)&&(an=null),ln!==null&&hs(ln)&&(ln=null),un!==null&&hs(un)&&(un=null),Li.forEach(Zd),Mi.forEach(Zd)}function oi(e,t){e.blockedOn===t&&(e.blockedOn=null,xu||(xu=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,Dw)))}function $i(e){function t(i){return oi(i,e)}if(0<zo.length){oi(zo[0],e);for(var n=1;n<zo.length;n++){var r=zo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(an!==null&&oi(an,e),ln!==null&&oi(ln,e),un!==null&&oi(un,e),Li.forEach(t),Mi.forEach(t),n=0;n<Jt.length;n++)r=Jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Jt.length&&(n=Jt[0],n.blockedOn===null);)ug(n),n.blockedOn===null&&Jt.shift()}var xr=Ht.ReactCurrentBatchConfig,Ls=!0;function Lw(e,t,n,r){var i=B,o=xr.transition;xr.transition=null;try{B=1,Zc(e,t,n,r)}finally{B=i,xr.transition=o}}function Mw(e,t,n,r){var i=B,o=xr.transition;xr.transition=null;try{B=4,Zc(e,t,n,r)}finally{B=i,xr.transition=o}}function Zc(e,t,n,r){if(Ls){var i=Pu(e,t,n,r);if(i===null)bl(e,t,r,Ms,n),Jd(e,r);else if(Nw(i,e,t,n,r))r.stopPropagation();else if(Jd(e,r),t&4&&-1<Rw.indexOf(e)){for(;i!==null;){var o=po(i);if(o!==null&&og(o),o=Pu(e,t,n,r),o===null&&bl(e,t,r,Ms,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else bl(e,t,r,null,n)}}var Ms=null;function Pu(e,t,n,r){if(Ms=null,e=Xc(r),e=Rn(e),e!==null)if(t=ir(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Qm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ms=e,null}function cg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sw()){case qc:return 1;case tg:return 4;case Ns:case Iw:return 16;case ng:return 536870912;default:return 16}default:return 16}}var rn=null,ef=null,ps=null;function fg(){if(ps)return ps;var e,t=ef,n=t.length,r,i="value"in rn?rn.value:rn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return ps=i.slice(e,1<r?1-r:void 0)}function ms(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bo(){return!0}function eh(){return!1}function Ge(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Bo:eh,this.isPropagationStopped=eh,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bo)},persist:function(){},isPersistent:Bo}),t}var Yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tf=Ge(Yr),ho=Z({},Yr,{view:0,detail:0}),$w=Ge(ho),yl,wl,si,Sa=Z({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==si&&(si&&e.type==="mousemove"?(yl=e.screenX-si.screenX,wl=e.screenY-si.screenY):wl=yl=0,si=e),yl)},movementY:function(e){return"movementY"in e?e.movementY:wl}}),th=Ge(Sa),Uw=Z({},Sa,{dataTransfer:0}),Fw=Ge(Uw),jw=Z({},ho,{relatedTarget:0}),_l=Ge(jw),zw=Z({},Yr,{animationName:0,elapsedTime:0,pseudoElement:0}),Bw=Ge(zw),Hw=Z({},Yr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vw=Ge(Hw),Ww=Z({},Yr,{data:0}),nh=Ge(Ww),Gw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yw[e])?!!t[e]:!1}function nf(){return Xw}var qw=Z({},ho,{key:function(e){if(e.key){var t=Gw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ms(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nf,charCode:function(e){return e.type==="keypress"?ms(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ms(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qw=Ge(qw),Jw=Z({},Sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rh=Ge(Jw),Zw=Z({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nf}),e_=Ge(Zw),t_=Z({},Yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),n_=Ge(t_),r_=Z({},Sa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),i_=Ge(r_),o_=[9,13,27,32],rf=Dt&&"CompositionEvent"in window,_i=null;Dt&&"documentMode"in document&&(_i=document.documentMode);var s_=Dt&&"TextEvent"in window&&!_i,dg=Dt&&(!rf||_i&&8<_i&&11>=_i),ih=String.fromCharCode(32),oh=!1;function hg(e,t){switch(e){case"keyup":return o_.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cr=!1;function a_(e,t){switch(e){case"compositionend":return pg(t);case"keypress":return t.which!==32?null:(oh=!0,ih);case"textInput":return e=t.data,e===ih&&oh?null:e;default:return null}}function l_(e,t){if(cr)return e==="compositionend"||!rf&&hg(e,t)?(e=fg(),ps=ef=rn=null,cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return dg&&t.locale!=="ko"?null:t.data;default:return null}}var u_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!u_[e.type]:t==="textarea"}function mg(e,t,n,r){Gm(r),t=$s(t,"onChange"),0<t.length&&(n=new tf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ki=null,Ui=null;function c_(e){Cg(e,0)}function Ia(e){var t=hr(e);if(Fm(t))return e}function f_(e,t){if(e==="change")return t}var gg=!1;if(Dt){var kl;if(Dt){var El="oninput"in document;if(!El){var ah=document.createElement("div");ah.setAttribute("oninput","return;"),El=typeof ah.oninput=="function"}kl=El}else kl=!1;gg=kl&&(!document.documentMode||9<document.documentMode)}function lh(){ki&&(ki.detachEvent("onpropertychange",vg),Ui=ki=null)}function vg(e){if(e.propertyName==="value"&&Ia(Ui)){var t=[];mg(t,Ui,e,Xc(e)),qm(c_,t)}}function d_(e,t,n){e==="focusin"?(lh(),ki=t,Ui=n,ki.attachEvent("onpropertychange",vg)):e==="focusout"&&lh()}function h_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ia(Ui)}function p_(e,t){if(e==="click")return Ia(t)}function m_(e,t){if(e==="input"||e==="change")return Ia(t)}function g_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:g_;function Fi(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!du.call(t,i)||!ft(e[i],t[i]))return!1}return!0}function uh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ch(e,t){var n=uh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=uh(n)}}function yg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?yg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wg(){for(var e=window,t=Ps();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ps(e.document)}return t}function of(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function v_(e){var t=wg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&yg(n.ownerDocument.documentElement,n)){if(r!==null&&of(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=ch(n,o);var s=ch(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var y_=Dt&&"documentMode"in document&&11>=document.documentMode,fr=null,Ou=null,Ei=null,Ru=!1;function fh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ru||fr==null||fr!==Ps(r)||(r=fr,"selectionStart"in r&&of(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ei&&Fi(Ei,r)||(Ei=r,r=$s(Ou,"onSelect"),0<r.length&&(t=new tf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=fr)))}function Ho(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var dr={animationend:Ho("Animation","AnimationEnd"),animationiteration:Ho("Animation","AnimationIteration"),animationstart:Ho("Animation","AnimationStart"),transitionend:Ho("Transition","TransitionEnd")},Sl={},_g={};Dt&&(_g=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function Ta(e){if(Sl[e])return Sl[e];if(!dr[e])return e;var t=dr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in _g)return Sl[e]=t[n];return e}var kg=Ta("animationend"),Eg=Ta("animationiteration"),Sg=Ta("animationstart"),Ig=Ta("transitionend"),Tg=new Map,dh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function En(e,t){Tg.set(e,t),rr(t,[e])}for(var Il=0;Il<dh.length;Il++){var Tl=dh[Il],w_=Tl.toLowerCase(),__=Tl[0].toUpperCase()+Tl.slice(1);En(w_,"on"+__)}En(kg,"onAnimationEnd");En(Eg,"onAnimationIteration");En(Sg,"onAnimationStart");En("dblclick","onDoubleClick");En("focusin","onFocus");En("focusout","onBlur");En(Ig,"onTransitionEnd");$r("onMouseEnter",["mouseout","mouseover"]);$r("onMouseLeave",["mouseout","mouseover"]);$r("onPointerEnter",["pointerout","pointerover"]);$r("onPointerLeave",["pointerout","pointerover"]);rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),k_=new Set("cancel close invalid load scroll toggle".split(" ").concat(pi));function hh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ww(r,t,void 0,e),e.currentTarget=null}function Cg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;hh(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;hh(i,a,u),o=l}}}if(Rs)throw e=bu,Rs=!1,bu=null,e}function V(e,t){var n=t[$u];n===void 0&&(n=t[$u]=new Set);var r=e+"__bubble";n.has(r)||(bg(t,e,2,!1),n.add(r))}function Cl(e,t,n){var r=0;t&&(r|=4),bg(n,e,r,t)}var Vo="_reactListening"+Math.random().toString(36).slice(2);function ji(e){if(!e[Vo]){e[Vo]=!0,Dm.forEach(function(n){n!=="selectionchange"&&(k_.has(n)||Cl(n,!1,e),Cl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vo]||(t[Vo]=!0,Cl("selectionchange",!1,t))}}function bg(e,t,n,r){switch(cg(t)){case 1:var i=Lw;break;case 4:i=Mw;break;default:i=Zc}n=i.bind(null,t,n,e),i=void 0,!Cu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function bl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Rn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}qm(function(){var u=o,c=Xc(n),f=[];e:{var h=Tg.get(e);if(h!==void 0){var g=tf,v=e;switch(e){case"keypress":if(ms(n)===0)break e;case"keydown":case"keyup":g=Qw;break;case"focusin":v="focus",g=_l;break;case"focusout":v="blur",g=_l;break;case"beforeblur":case"afterblur":g=_l;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=th;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Fw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=e_;break;case kg:case Eg:case Sg:g=Bw;break;case Ig:g=n_;break;case"scroll":g=$w;break;case"wheel":g=i_;break;case"copy":case"cut":case"paste":g=Vw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=rh}var w=(t&4)!==0,P=!w&&e==="scroll",p=w?h!==null?h+"Capture":null:h;w=[];for(var d=u,m;d!==null;){m=d;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=Di(d,p),y!=null&&w.push(zi(d,y,m)))),P)break;d=d.return}0<w.length&&(h=new g(h,v,null,n,c),f.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==Iu&&(v=n.relatedTarget||n.fromElement)&&(Rn(v)||v[Lt]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Rn(v):null,v!==null&&(P=ir(v),v!==P||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(w=th,y="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=rh,y="onPointerLeave",p="onPointerEnter",d="pointer"),P=g==null?h:hr(g),m=v==null?h:hr(v),h=new w(y,d+"leave",g,n,c),h.target=P,h.relatedTarget=m,y=null,Rn(c)===u&&(w=new w(p,d+"enter",v,n,c),w.target=m,w.relatedTarget=P,y=w),P=y,g&&v)t:{for(w=g,p=v,d=0,m=w;m;m=ar(m))d++;for(m=0,y=p;y;y=ar(y))m++;for(;0<d-m;)w=ar(w),d--;for(;0<m-d;)p=ar(p),m--;for(;d--;){if(w===p||p!==null&&w===p.alternate)break t;w=ar(w),p=ar(p)}w=null}else w=null;g!==null&&ph(f,h,g,w,!1),v!==null&&P!==null&&ph(f,P,v,w,!0)}}e:{if(h=u?hr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var k=f_;else if(sh(h))if(gg)k=m_;else{k=h_;var E=d_}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=p_);if(k&&(k=k(e,u))){mg(f,k,n,c);break e}E&&E(e,h,u),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&wu(h,"number",h.value)}switch(E=u?hr(u):window,e){case"focusin":(sh(E)||E.contentEditable==="true")&&(fr=E,Ou=u,Ei=null);break;case"focusout":Ei=Ou=fr=null;break;case"mousedown":Ru=!0;break;case"contextmenu":case"mouseup":case"dragend":Ru=!1,fh(f,n,c);break;case"selectionchange":if(y_)break;case"keydown":case"keyup":fh(f,n,c)}var S;if(rf)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else cr?hg(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(dg&&n.locale!=="ko"&&(cr||x!=="onCompositionStart"?x==="onCompositionEnd"&&cr&&(S=fg()):(rn=c,ef="value"in rn?rn.value:rn.textContent,cr=!0)),E=$s(u,x),0<E.length&&(x=new nh(x,e,null,n,c),f.push({event:x,listeners:E}),S?x.data=S:(S=pg(n),S!==null&&(x.data=S)))),(S=s_?a_(e,n):l_(e,n))&&(u=$s(u,"onBeforeInput"),0<u.length&&(c=new nh("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=S))}Cg(f,t)})}function zi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $s(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Di(e,n),o!=null&&r.unshift(zi(e,o,i)),o=Di(e,t),o!=null&&r.push(zi(e,o,i))),e=e.return}return r}function ar(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ph(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Di(n,o),l!=null&&s.unshift(zi(n,l,a))):i||(l=Di(n,o),l!=null&&s.push(zi(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var E_=/\r\n?/g,S_=/\u0000|\uFFFD/g;function mh(e){return(typeof e=="string"?e:""+e).replace(E_,`
`).replace(S_,"")}function Wo(e,t,n){if(t=mh(t),mh(e)!==t&&n)throw Error(_(425))}function Us(){}var Nu=null,Du=null;function Lu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Mu=typeof setTimeout=="function"?setTimeout:void 0,I_=typeof clearTimeout=="function"?clearTimeout:void 0,gh=typeof Promise=="function"?Promise:void 0,T_=typeof queueMicrotask=="function"?queueMicrotask:typeof gh<"u"?function(e){return gh.resolve(null).then(e).catch(C_)}:Mu;function C_(e){setTimeout(function(){throw e})}function Al(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),$i(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$i(t)}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function vh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Xr=Math.random().toString(36).slice(2),gt="__reactFiber$"+Xr,Bi="__reactProps$"+Xr,Lt="__reactContainer$"+Xr,$u="__reactEvents$"+Xr,b_="__reactListeners$"+Xr,A_="__reactHandles$"+Xr;function Rn(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Lt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=vh(e);e!==null;){if(n=e[gt])return n;e=vh(e)}return t}e=n,n=e.parentNode}return null}function po(e){return e=e[gt]||e[Lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function hr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Ca(e){return e[Bi]||null}var Uu=[],pr=-1;function Sn(e){return{current:e}}function G(e){0>pr||(e.current=Uu[pr],Uu[pr]=null,pr--)}function H(e,t){pr++,Uu[pr]=e.current,e.current=t}var yn={},Te=Sn(yn),De=Sn(!1),Gn=yn;function Ur(e,t){var n=e.type.contextTypes;if(!n)return yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Le(e){return e=e.childContextTypes,e!=null}function Fs(){G(De),G(Te)}function yh(e,t,n){if(Te.current!==yn)throw Error(_(168));H(Te,t),H(De,n)}function Ag(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,dw(e)||"Unknown",i));return Z({},n,r)}function js(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yn,Gn=Te.current,H(Te,e),H(De,De.current),!0}function wh(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Ag(e,t,Gn),r.__reactInternalMemoizedMergedChildContext=e,G(De),G(Te),H(Te,e)):G(De),H(De,n)}var bt=null,ba=!1,xl=!1;function xg(e){bt===null?bt=[e]:bt.push(e)}function x_(e){ba=!0,xg(e)}function In(){if(!xl&&bt!==null){xl=!0;var e=0,t=B;try{var n=bt;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}bt=null,ba=!1}catch(i){throw bt!==null&&(bt=bt.slice(e+1)),eg(qc,In),i}finally{B=t,xl=!1}}return null}var mr=[],gr=0,zs=null,Bs=0,Ye=[],Xe=0,Kn=null,At=1,xt="";function xn(e,t){mr[gr++]=Bs,mr[gr++]=zs,zs=e,Bs=t}function Pg(e,t,n){Ye[Xe++]=At,Ye[Xe++]=xt,Ye[Xe++]=Kn,Kn=e;var r=At;e=xt;var i=32-ut(r)-1;r&=~(1<<i),n+=1;var o=32-ut(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,At=1<<32-ut(t)+i|n<<i|r,xt=o+e}else At=1<<o|n<<i|r,xt=e}function sf(e){e.return!==null&&(xn(e,1),Pg(e,1,0))}function af(e){for(;e===zs;)zs=mr[--gr],mr[gr]=null,Bs=mr[--gr],mr[gr]=null;for(;e===Kn;)Kn=Ye[--Xe],Ye[Xe]=null,xt=Ye[--Xe],Ye[Xe]=null,At=Ye[--Xe],Ye[Xe]=null}var je=null,Ue=null,Y=!1,at=null;function Og(e,t){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _h(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,Ue=cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,Ue=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Kn!==null?{id:At,overflow:xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,je=e,Ue=null,!0):!1;default:return!1}}function Fu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ju(e){if(Y){var t=Ue;if(t){var n=t;if(!_h(e,t)){if(Fu(e))throw Error(_(418));t=cn(n.nextSibling);var r=je;t&&_h(e,t)?Og(r,n):(e.flags=e.flags&-4097|2,Y=!1,je=e)}}else{if(Fu(e))throw Error(_(418));e.flags=e.flags&-4097|2,Y=!1,je=e}}}function kh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function Go(e){if(e!==je)return!1;if(!Y)return kh(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Lu(e.type,e.memoizedProps)),t&&(t=Ue)){if(Fu(e))throw Rg(),Error(_(418));for(;t;)Og(e,t),t=cn(t.nextSibling)}if(kh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ue=cn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ue=null}}else Ue=je?cn(e.stateNode.nextSibling):null;return!0}function Rg(){for(var e=Ue;e;)e=cn(e.nextSibling)}function Fr(){Ue=je=null,Y=!1}function lf(e){at===null?at=[e]:at.push(e)}var P_=Ht.ReactCurrentBatchConfig;function ot(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Hs=Sn(null),Vs=null,vr=null,uf=null;function cf(){uf=vr=Vs=null}function ff(e){var t=Hs.current;G(Hs),e._currentValue=t}function zu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Pr(e,t){Vs=e,uf=vr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ne=!0),e.firstContext=null)}function et(e){var t=e._currentValue;if(uf!==e)if(e={context:e,memoizedValue:t,next:null},vr===null){if(Vs===null)throw Error(_(308));vr=e,Vs.dependencies={lanes:0,firstContext:e}}else vr=vr.next=e;return t}var Nn=null;function df(e){Nn===null?Nn=[e]:Nn.push(e)}function Ng(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,df(t)):(n.next=i.next,i.next=n),t.interleaved=n,Mt(e,r)}function Mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qt=!1;function hf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function fn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,j&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Mt(e,n)}return i=r.interleaved,i===null?(t.next=t,df(r)):(t.next=i.next,i.next=t),r.interleaved=t,Mt(e,n)}function gs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qc(e,n)}}function Eh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ws(e,t,n,r){var i=e.updateQueue;qt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var h=a.lane,g=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,w=a;switch(h=t,g=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){f=v.call(g,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,h=typeof v=="function"?v.call(g,f,h):v,h==null)break e;f=Z({},f,h);break e;case 2:qt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Xn|=s,e.lanes=s,e.memoizedState=f}}function Sh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var Lg=new Nm.Component().refs;function Bu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Aa={isMounted:function(e){return(e=e._reactInternals)?ir(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=xe(),i=hn(e),o=Nt(r,i);o.payload=t,n!=null&&(o.callback=n),t=fn(e,o,i),t!==null&&(ct(t,e,i,r),gs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=xe(),i=hn(e),o=Nt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=fn(e,o,i),t!==null&&(ct(t,e,i,r),gs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xe(),r=hn(e),i=Nt(n,r);i.tag=2,t!=null&&(i.callback=t),t=fn(e,i,r),t!==null&&(ct(t,e,r,n),gs(t,e,r))}};function Ih(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Fi(n,r)||!Fi(i,o):!0}function Mg(e,t,n){var r=!1,i=yn,o=t.contextType;return typeof o=="object"&&o!==null?o=et(o):(i=Le(t)?Gn:Te.current,r=t.contextTypes,o=(r=r!=null)?Ur(e,i):yn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Aa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Th(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Aa.enqueueReplaceState(t,t.state,null)}function Hu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Lg,hf(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=et(o):(o=Le(t)?Gn:Te.current,i.context=Ur(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Bu(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Aa.enqueueReplaceState(i,i.state,null),Ws(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ai(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===Lg&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Ko(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ch(e){var t=e._init;return t(e._payload)}function $g(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=pn(p,d),p.index=0,p.sibling=null,p}function o(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,m,y){return d===null||d.tag!==6?(d=Ml(m,p.mode,y),d.return=p,d):(d=i(d,m),d.return=p,d)}function l(p,d,m,y){var k=m.type;return k===ur?c(p,d,m.props.children,y,m.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Xt&&Ch(k)===d.type)?(y=i(d,m.props),y.ref=ai(p,d,m),y.return=p,y):(y=Es(m.type,m.key,m.props,null,p.mode,y),y.ref=ai(p,d,m),y.return=p,y)}function u(p,d,m,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=$l(m,p.mode,y),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function c(p,d,m,y,k){return d===null||d.tag!==7?(d=Bn(m,p.mode,y,k),d.return=p,d):(d=i(d,m),d.return=p,d)}function f(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Ml(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Mo:return m=Es(d.type,d.key,d.props,null,p.mode,m),m.ref=ai(p,null,d),m.return=p,m;case lr:return d=$l(d,p.mode,m),d.return=p,d;case Xt:var y=d._init;return f(p,y(d._payload),m)}if(di(d)||ni(d))return d=Bn(d,p.mode,m,null),d.return=p,d;Ko(p,d)}return null}function h(p,d,m,y){var k=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:a(p,d,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Mo:return m.key===k?l(p,d,m,y):null;case lr:return m.key===k?u(p,d,m,y):null;case Xt:return k=m._init,h(p,d,k(m._payload),y)}if(di(m)||ni(m))return k!==null?null:c(p,d,m,y,null);Ko(p,m)}return null}function g(p,d,m,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,a(d,p,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Mo:return p=p.get(y.key===null?m:y.key)||null,l(d,p,y,k);case lr:return p=p.get(y.key===null?m:y.key)||null,u(d,p,y,k);case Xt:var E=y._init;return g(p,d,m,E(y._payload),k)}if(di(y)||ni(y))return p=p.get(m)||null,c(d,p,y,k,null);Ko(d,y)}return null}function v(p,d,m,y){for(var k=null,E=null,S=d,x=d=0,U=null;S!==null&&x<m.length;x++){S.index>x?(U=S,S=null):U=S.sibling;var D=h(p,S,m[x],y);if(D===null){S===null&&(S=U);break}e&&S&&D.alternate===null&&t(p,S),d=o(D,d,x),E===null?k=D:E.sibling=D,E=D,S=U}if(x===m.length)return n(p,S),Y&&xn(p,x),k;if(S===null){for(;x<m.length;x++)S=f(p,m[x],y),S!==null&&(d=o(S,d,x),E===null?k=S:E.sibling=S,E=S);return Y&&xn(p,x),k}for(S=r(p,S);x<m.length;x++)U=g(S,p,x,m[x],y),U!==null&&(e&&U.alternate!==null&&S.delete(U.key===null?x:U.key),d=o(U,d,x),E===null?k=U:E.sibling=U,E=U);return e&&S.forEach(function(rt){return t(p,rt)}),Y&&xn(p,x),k}function w(p,d,m,y){var k=ni(m);if(typeof k!="function")throw Error(_(150));if(m=k.call(m),m==null)throw Error(_(151));for(var E=k=null,S=d,x=d=0,U=null,D=m.next();S!==null&&!D.done;x++,D=m.next()){S.index>x?(U=S,S=null):U=S.sibling;var rt=h(p,S,D.value,y);if(rt===null){S===null&&(S=U);break}e&&S&&rt.alternate===null&&t(p,S),d=o(rt,d,x),E===null?k=rt:E.sibling=rt,E=rt,S=U}if(D.done)return n(p,S),Y&&xn(p,x),k;if(S===null){for(;!D.done;x++,D=m.next())D=f(p,D.value,y),D!==null&&(d=o(D,d,x),E===null?k=D:E.sibling=D,E=D);return Y&&xn(p,x),k}for(S=r(p,S);!D.done;x++,D=m.next())D=g(S,p,x,D.value,y),D!==null&&(e&&D.alternate!==null&&S.delete(D.key===null?x:D.key),d=o(D,d,x),E===null?k=D:E.sibling=D,E=D);return e&&S.forEach(function(ei){return t(p,ei)}),Y&&xn(p,x),k}function P(p,d,m,y){if(typeof m=="object"&&m!==null&&m.type===ur&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Mo:e:{for(var k=m.key,E=d;E!==null;){if(E.key===k){if(k=m.type,k===ur){if(E.tag===7){n(p,E.sibling),d=i(E,m.props.children),d.return=p,p=d;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Xt&&Ch(k)===E.type){n(p,E.sibling),d=i(E,m.props),d.ref=ai(p,E,m),d.return=p,p=d;break e}n(p,E);break}else t(p,E);E=E.sibling}m.type===ur?(d=Bn(m.props.children,p.mode,y,m.key),d.return=p,p=d):(y=Es(m.type,m.key,m.props,null,p.mode,y),y.ref=ai(p,d,m),y.return=p,p=y)}return s(p);case lr:e:{for(E=m.key;d!==null;){if(d.key===E)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=$l(m,p.mode,y),d.return=p,p=d}return s(p);case Xt:return E=m._init,P(p,d,E(m._payload),y)}if(di(m))return v(p,d,m,y);if(ni(m))return w(p,d,m,y);Ko(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=Ml(m,p.mode,y),d.return=p,p=d),s(p)):n(p,d)}return P}var jr=$g(!0),Ug=$g(!1),mo={},kt=Sn(mo),Hi=Sn(mo),Vi=Sn(mo);function Dn(e){if(e===mo)throw Error(_(174));return e}function pf(e,t){switch(H(Vi,t),H(Hi,e),H(kt,mo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ku(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ku(t,e)}G(kt),H(kt,t)}function zr(){G(kt),G(Hi),G(Vi)}function Fg(e){Dn(Vi.current);var t=Dn(kt.current),n=ku(t,e.type);t!==n&&(H(Hi,e),H(kt,n))}function mf(e){Hi.current===e&&(G(kt),G(Hi))}var q=Sn(0);function Gs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Pl=[];function gf(){for(var e=0;e<Pl.length;e++)Pl[e]._workInProgressVersionPrimary=null;Pl.length=0}var vs=Ht.ReactCurrentDispatcher,Ol=Ht.ReactCurrentBatchConfig,Yn=0,J=null,ae=null,fe=null,Ks=!1,Si=!1,Wi=0,O_=0;function we(){throw Error(_(321))}function vf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function yf(e,t,n,r,i,o){if(Yn=o,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,vs.current=e===null||e.memoizedState===null?L_:M_,e=n(r,i),Si){o=0;do{if(Si=!1,Wi=0,25<=o)throw Error(_(301));o+=1,fe=ae=null,t.updateQueue=null,vs.current=$_,e=n(r,i)}while(Si)}if(vs.current=Ys,t=ae!==null&&ae.next!==null,Yn=0,fe=ae=J=null,Ks=!1,t)throw Error(_(300));return e}function wf(){var e=Wi!==0;return Wi=0,e}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?J.memoizedState=fe=e:fe=fe.next=e,fe}function tt(){if(ae===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=fe===null?J.memoizedState:fe.next;if(t!==null)fe=t,ae=e;else{if(e===null)throw Error(_(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},fe===null?J.memoizedState=fe=e:fe=fe.next=e}return fe}function Gi(e,t){return typeof t=="function"?t(e):t}function Rl(e){var t=tt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ae,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Yn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,J.lanes|=c,Xn|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,ft(r,t.memoizedState)||(Ne=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,J.lanes|=o,Xn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Nl(e){var t=tt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);ft(o,t.memoizedState)||(Ne=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function jg(){}function zg(e,t){var n=J,r=tt(),i=t(),o=!ft(r.memoizedState,i);if(o&&(r.memoizedState=i,Ne=!0),r=r.queue,_f(Vg.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,Ki(9,Hg.bind(null,n,r,i,t),void 0,null),de===null)throw Error(_(349));Yn&30||Bg(n,t,i)}return i}function Bg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Hg(e,t,n,r){t.value=n,t.getSnapshot=r,Wg(t)&&Gg(e)}function Vg(e,t,n){return n(function(){Wg(t)&&Gg(e)})}function Wg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function Gg(e){var t=Mt(e,1);t!==null&&ct(t,e,1,-1)}function bh(e){var t=mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:e},t.queue=e,e=e.dispatch=D_.bind(null,J,e),[t.memoizedState,e]}function Ki(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Kg(){return tt().memoizedState}function ys(e,t,n,r){var i=mt();J.flags|=e,i.memoizedState=Ki(1|t,n,void 0,r===void 0?null:r)}function xa(e,t,n,r){var i=tt();r=r===void 0?null:r;var o=void 0;if(ae!==null){var s=ae.memoizedState;if(o=s.destroy,r!==null&&vf(r,s.deps)){i.memoizedState=Ki(t,n,o,r);return}}J.flags|=e,i.memoizedState=Ki(1|t,n,o,r)}function Ah(e,t){return ys(8390656,8,e,t)}function _f(e,t){return xa(2048,8,e,t)}function Yg(e,t){return xa(4,2,e,t)}function Xg(e,t){return xa(4,4,e,t)}function qg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qg(e,t,n){return n=n!=null?n.concat([e]):null,xa(4,4,qg.bind(null,t,e),n)}function kf(){}function Jg(e,t){var n=tt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zg(e,t){var n=tt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ev(e,t,n){return Yn&21?(ft(n,t)||(n=rg(),J.lanes|=n,Xn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=n)}function R_(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=Ol.transition;Ol.transition={};try{e(!1),t()}finally{B=n,Ol.transition=r}}function tv(){return tt().memoizedState}function N_(e,t,n){var r=hn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nv(e))rv(t,n);else if(n=Ng(e,t,n,r),n!==null){var i=xe();ct(n,e,r,i),iv(n,t,r)}}function D_(e,t,n){var r=hn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nv(e))rv(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,ft(a,s)){var l=t.interleaved;l===null?(i.next=i,df(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Ng(e,t,i,r),n!==null&&(i=xe(),ct(n,e,r,i),iv(n,t,r))}}function nv(e){var t=e.alternate;return e===J||t!==null&&t===J}function rv(e,t){Si=Ks=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function iv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qc(e,n)}}var Ys={readContext:et,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},L_={readContext:et,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:et,useEffect:Ah,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ys(4194308,4,qg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ys(4194308,4,e,t)},useInsertionEffect:function(e,t){return ys(4,2,e,t)},useMemo:function(e,t){var n=mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=N_.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:bh,useDebugValue:kf,useDeferredValue:function(e){return mt().memoizedState=e},useTransition:function(){var e=bh(!1),t=e[0];return e=R_.bind(null,e[1]),mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,i=mt();if(Y){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),de===null)throw Error(_(349));Yn&30||Bg(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Ah(Vg.bind(null,r,o,e),[e]),r.flags|=2048,Ki(9,Hg.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=mt(),t=de.identifierPrefix;if(Y){var n=xt,r=At;n=(r&~(1<<32-ut(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=O_++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},M_={readContext:et,useCallback:Jg,useContext:et,useEffect:_f,useImperativeHandle:Qg,useInsertionEffect:Yg,useLayoutEffect:Xg,useMemo:Zg,useReducer:Rl,useRef:Kg,useState:function(){return Rl(Gi)},useDebugValue:kf,useDeferredValue:function(e){var t=tt();return ev(t,ae.memoizedState,e)},useTransition:function(){var e=Rl(Gi)[0],t=tt().memoizedState;return[e,t]},useMutableSource:jg,useSyncExternalStore:zg,useId:tv,unstable_isNewReconciler:!1},$_={readContext:et,useCallback:Jg,useContext:et,useEffect:_f,useImperativeHandle:Qg,useInsertionEffect:Yg,useLayoutEffect:Xg,useMemo:Zg,useReducer:Nl,useRef:Kg,useState:function(){return Nl(Gi)},useDebugValue:kf,useDeferredValue:function(e){var t=tt();return ae===null?t.memoizedState=e:ev(t,ae.memoizedState,e)},useTransition:function(){var e=Nl(Gi)[0],t=tt().memoizedState;return[e,t]},useMutableSource:jg,useSyncExternalStore:zg,useId:tv,unstable_isNewReconciler:!1};function Br(e,t){try{var n="",r=t;do n+=fw(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Dl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Vu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var U_=typeof WeakMap=="function"?WeakMap:Map;function ov(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qs||(qs=!0,ec=r),Vu(e,t)},n}function sv(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Vu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Vu(e,t),typeof r!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function xh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new U_;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=J_.bind(null,e,t,n),t.then(e,e))}function Ph(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Oh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,fn(n,t,1))),n.lanes|=1),e)}var F_=Ht.ReactCurrentOwner,Ne=!1;function be(e,t,n,r){t.child=e===null?Ug(t,null,n,r):jr(t,e.child,n,r)}function Rh(e,t,n,r,i){n=n.render;var o=t.ref;return Pr(t,i),r=yf(e,t,n,r,o,i),n=wf(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,$t(e,t,i)):(Y&&n&&sf(t),t.flags|=1,be(e,t,r,i),t.child)}function Nh(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!xf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,av(e,t,o,r,i)):(e=Es(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Fi,n(s,r)&&e.ref===t.ref)return $t(e,t,i)}return t.flags|=1,e=pn(o,r),e.ref=t.ref,e.return=t,t.child=e}function av(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Fi(o,r)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ne=!0);else return t.lanes=e.lanes,$t(e,t,i)}return Wu(e,t,n,r,i)}function lv(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(wr,$e),$e|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(wr,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,H(wr,$e),$e|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,H(wr,$e),$e|=r;return be(e,t,i,n),t.child}function uv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Wu(e,t,n,r,i){var o=Le(n)?Gn:Te.current;return o=Ur(t,o),Pr(t,i),n=yf(e,t,n,r,o,i),r=wf(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,$t(e,t,i)):(Y&&r&&sf(t),t.flags|=1,be(e,t,n,i),t.child)}function Dh(e,t,n,r,i){if(Le(n)){var o=!0;js(t)}else o=!1;if(Pr(t,i),t.stateNode===null)ws(e,t),Mg(t,n,r),Hu(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=et(u):(u=Le(n)?Gn:Te.current,u=Ur(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Th(t,s,r,u),qt=!1;var h=t.memoizedState;s.state=h,Ws(t,r,s,i),l=t.memoizedState,a!==r||h!==l||De.current||qt?(typeof c=="function"&&(Bu(t,n,c,r),l=t.memoizedState),(a=qt||Ih(t,n,a,r,h,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Dg(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ot(t.type,a),s.props=u,f=t.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=et(l):(l=Le(n)?Gn:Te.current,l=Ur(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Th(t,s,r,l),qt=!1,h=t.memoizedState,s.state=h,Ws(t,r,s,i);var v=t.memoizedState;a!==f||h!==v||De.current||qt?(typeof g=="function"&&(Bu(t,n,g,r),v=t.memoizedState),(u=qt||Ih(t,n,u,r,h,v,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Gu(e,t,n,r,o,i)}function Gu(e,t,n,r,i,o){uv(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&wh(t,n,!1),$t(e,t,o);r=t.stateNode,F_.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=jr(t,e.child,null,o),t.child=jr(t,null,a,o)):be(e,t,a,o),t.memoizedState=r.state,i&&wh(t,n,!0),t.child}function cv(e){var t=e.stateNode;t.pendingContext?yh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&yh(e,t.context,!1),pf(e,t.containerInfo)}function Lh(e,t,n,r,i){return Fr(),lf(i),t.flags|=256,be(e,t,n,r),t.child}var Ku={dehydrated:null,treeContext:null,retryLane:0};function Yu(e){return{baseLanes:e,cachePool:null,transitions:null}}function fv(e,t,n){var r=t.pendingProps,i=q.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),H(q,i&1),e===null)return ju(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ra(s,r,0,null),e=Bn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Yu(n),t.memoizedState=Ku,e):Ef(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return j_(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=pn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=pn(a,o):(o=Bn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Yu(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Ku,r}return o=e.child,e=o.sibling,r=pn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ef(e,t){return t=Ra({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Yo(e,t,n,r){return r!==null&&lf(r),jr(t,e.child,null,n),e=Ef(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function j_(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Dl(Error(_(422))),Yo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ra({mode:"visible",children:r.children},i,0,null),o=Bn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&jr(t,e.child,null,s),t.child.memoizedState=Yu(s),t.memoizedState=Ku,o);if(!(t.mode&1))return Yo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(_(419)),r=Dl(o,r,void 0),Yo(e,t,s,r)}if(a=(s&e.childLanes)!==0,Ne||a){if(r=de,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Mt(e,i),ct(r,e,i,-1))}return Af(),r=Dl(Error(_(421))),Yo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Z_.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ue=cn(i.nextSibling),je=t,Y=!0,at=null,e!==null&&(Ye[Xe++]=At,Ye[Xe++]=xt,Ye[Xe++]=Kn,At=e.id,xt=e.overflow,Kn=t),t=Ef(t,r.children),t.flags|=4096,t)}function Mh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),zu(e.return,t,n)}function Ll(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function dv(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(be(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mh(e,n,t);else if(e.tag===19)Mh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(H(q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Gs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ll(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Gs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ll(t,!0,n,null,o);break;case"together":Ll(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ws(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function z_(e,t,n){switch(t.tag){case 3:cv(t),Fr();break;case 5:Fg(t);break;case 1:Le(t.type)&&js(t);break;case 4:pf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;H(Hs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(H(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?fv(e,t,n):(H(q,q.current&1),e=$t(e,t,n),e!==null?e.sibling:null);H(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return dv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,lv(e,t,n)}return $t(e,t,n)}var hv,Xu,pv,mv;hv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xu=function(){};pv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Dn(kt.current);var o=null;switch(n){case"input":i=vu(e,i),r=vu(e,r),o=[];break;case"select":i=Z({},i,{value:void 0}),r=Z({},r,{value:void 0}),o=[];break;case"textarea":i=_u(e,i),r=_u(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Us)}Eu(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ri.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ri.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&V("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};mv=function(e,t,n,r){n!==r&&(t.flags|=4)};function li(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function B_(e,t,n){var r=t.pendingProps;switch(af(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return Le(t.type)&&Fs(),_e(t),null;case 3:return r=t.stateNode,zr(),G(De),G(Te),gf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Go(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,at!==null&&(rc(at),at=null))),Xu(e,t),_e(t),null;case 5:mf(t);var i=Dn(Vi.current);if(n=t.type,e!==null&&t.stateNode!=null)pv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return _e(t),null}if(e=Dn(kt.current),Go(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[gt]=t,r[Bi]=o,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(i=0;i<pi.length;i++)V(pi[i],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Wd(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":Kd(r,o),V("invalid",r)}Eu(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Wo(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Wo(r.textContent,a,e),i=["children",""+a]):Ri.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&V("scroll",r)}switch(n){case"input":$o(r),Gd(r,o,!0);break;case"textarea":$o(r),Yd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Us)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[gt]=t,e[Bi]=r,hv(e,t,!1,!1),t.stateNode=e;e:{switch(s=Su(n,r),n){case"dialog":V("cancel",e),V("close",e),i=r;break;case"iframe":case"object":case"embed":V("load",e),i=r;break;case"video":case"audio":for(i=0;i<pi.length;i++)V(pi[i],e);i=r;break;case"source":V("error",e),i=r;break;case"img":case"image":case"link":V("error",e),V("load",e),i=r;break;case"details":V("toggle",e),i=r;break;case"input":Wd(e,r),i=vu(e,r),V("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Z({},r,{value:void 0}),V("invalid",e);break;case"textarea":Kd(e,r),i=_u(e,r),V("invalid",e);break;default:i=r}Eu(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Wm(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Hm(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ni(e,l):typeof l=="number"&&Ni(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ri.hasOwnProperty(o)?l!=null&&o==="onScroll"&&V("scroll",e):l!=null&&Wc(e,o,l,s))}switch(n){case"input":$o(e),Gd(e,r,!1);break;case"textarea":$o(e),Yd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Cr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Cr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Us)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return _e(t),null;case 6:if(e&&t.stateNode!=null)mv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=Dn(Vi.current),Dn(kt.current),Go(t)){if(r=t.stateNode,n=t.memoizedProps,r[gt]=t,(o=r.nodeValue!==n)&&(e=je,e!==null))switch(e.tag){case 3:Wo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gt]=t,t.stateNode=r}return _e(t),null;case 13:if(G(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Ue!==null&&t.mode&1&&!(t.flags&128))Rg(),Fr(),t.flags|=98560,o=!1;else if(o=Go(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(_(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(_(317));o[gt]=t}else Fr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;_e(t),o=!1}else at!==null&&(rc(at),at=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?le===0&&(le=3):Af())),t.updateQueue!==null&&(t.flags|=4),_e(t),null);case 4:return zr(),Xu(e,t),e===null&&ji(t.stateNode.containerInfo),_e(t),null;case 10:return ff(t.type._context),_e(t),null;case 17:return Le(t.type)&&Fs(),_e(t),null;case 19:if(G(q),o=t.memoizedState,o===null)return _e(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)li(o,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Gs(e),s!==null){for(t.flags|=128,li(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(q,q.current&1|2),t.child}e=e.sibling}o.tail!==null&&ie()>Hr&&(t.flags|=128,r=!0,li(o,!1),t.lanes=4194304)}else{if(!r)if(e=Gs(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),li(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Y)return _e(t),null}else 2*ie()-o.renderingStartTime>Hr&&n!==1073741824&&(t.flags|=128,r=!0,li(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ie(),t.sibling=null,n=q.current,H(q,r?n&1|2:n&1),t):(_e(t),null);case 22:case 23:return bf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?$e&1073741824&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function H_(e,t){switch(af(t),t.tag){case 1:return Le(t.type)&&Fs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zr(),G(De),G(Te),gf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return mf(t),null;case 13:if(G(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(q),null;case 4:return zr(),null;case 10:return ff(t.type._context),null;case 22:case 23:return bf(),null;case 24:return null;default:return null}}var Xo=!1,Ee=!1,V_=typeof WeakSet=="function"?WeakSet:Set,T=null;function yr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function qu(e,t,n){try{n()}catch(r){ee(e,t,r)}}var $h=!1;function W_(e,t){if(Nu=Ls,e=wg(),of(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=e,h=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===e)break t;if(h===n&&++u===i&&(a=s),h===o&&++c===r&&(l=s),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Du={focusedElem:e,selectionRange:n},Ls=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,P=v.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:ot(t.type,w),P);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(y){ee(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return v=$h,$h=!1,v}function Ii(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&qu(t,n,o)}i=i.next}while(i!==r)}}function Pa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Qu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function gv(e){var t=e.alternate;t!==null&&(e.alternate=null,gv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gt],delete t[Bi],delete t[$u],delete t[b_],delete t[A_])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vv(e){return e.tag===5||e.tag===3||e.tag===4}function Uh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ju(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Us));else if(r!==4&&(e=e.child,e!==null))for(Ju(e,t,n),e=e.sibling;e!==null;)Ju(e,t,n),e=e.sibling}function Zu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Zu(e,t,n),e=e.sibling;e!==null;)Zu(e,t,n),e=e.sibling}var pe=null,st=!1;function Gt(e,t,n){for(n=n.child;n!==null;)yv(e,t,n),n=n.sibling}function yv(e,t,n){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(Ea,n)}catch{}switch(n.tag){case 5:Ee||yr(n,t);case 6:var r=pe,i=st;pe=null,Gt(e,t,n),pe=r,st=i,pe!==null&&(st?(e=pe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):pe.removeChild(n.stateNode));break;case 18:pe!==null&&(st?(e=pe,n=n.stateNode,e.nodeType===8?Al(e.parentNode,n):e.nodeType===1&&Al(e,n),$i(e)):Al(pe,n.stateNode));break;case 4:r=pe,i=st,pe=n.stateNode.containerInfo,st=!0,Gt(e,t,n),pe=r,st=i;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&qu(n,t,s),i=i.next}while(i!==r)}Gt(e,t,n);break;case 1:if(!Ee&&(yr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ee(n,t,a)}Gt(e,t,n);break;case 21:Gt(e,t,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Gt(e,t,n),Ee=r):Gt(e,t,n);break;default:Gt(e,t,n)}}function Fh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new V_),t.forEach(function(r){var i=ek.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function it(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:pe=a.stateNode,st=!1;break e;case 3:pe=a.stateNode.containerInfo,st=!0;break e;case 4:pe=a.stateNode.containerInfo,st=!0;break e}a=a.return}if(pe===null)throw Error(_(160));yv(o,s,i),pe=null,st=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ee(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wv(t,e),t=t.sibling}function wv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(it(t,e),pt(e),r&4){try{Ii(3,e,e.return),Pa(3,e)}catch(w){ee(e,e.return,w)}try{Ii(5,e,e.return)}catch(w){ee(e,e.return,w)}}break;case 1:it(t,e),pt(e),r&512&&n!==null&&yr(n,n.return);break;case 5:if(it(t,e),pt(e),r&512&&n!==null&&yr(n,n.return),e.flags&32){var i=e.stateNode;try{Ni(i,"")}catch(w){ee(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&jm(i,o),Su(a,s);var u=Su(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?Wm(i,f):c==="dangerouslySetInnerHTML"?Hm(i,f):c==="children"?Ni(i,f):Wc(i,c,f,u)}switch(a){case"input":yu(i,o);break;case"textarea":zm(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Cr(i,!!o.multiple,g,!1):h!==!!o.multiple&&(o.defaultValue!=null?Cr(i,!!o.multiple,o.defaultValue,!0):Cr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Bi]=o}catch(w){ee(e,e.return,w)}}break;case 6:if(it(t,e),pt(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){ee(e,e.return,w)}}break;case 3:if(it(t,e),pt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$i(t.containerInfo)}catch(w){ee(e,e.return,w)}break;case 4:it(t,e),pt(e);break;case 13:it(t,e),pt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Tf=ie())),r&4&&Fh(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(u=Ee)||c,it(t,e),Ee=u):it(t,e),pt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(T=e,c=e.child;c!==null;){for(f=T=c;T!==null;){switch(h=T,g=h.child,h.tag){case 0:case 11:case 14:case 15:Ii(4,h,h.return);break;case 1:yr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){ee(r,n,w)}}break;case 5:yr(h,h.return);break;case 22:if(h.memoizedState!==null){zh(f);continue}}g!==null?(g.return=h,T=g):zh(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Vm("display",s))}catch(w){ee(e,e.return,w)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){ee(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:it(t,e),pt(e),r&4&&Fh(e);break;case 21:break;default:it(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(vv(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ni(i,""),r.flags&=-33);var o=Uh(e);Zu(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Uh(e);Ju(e,a,s);break;default:throw Error(_(161))}}catch(l){ee(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function G_(e,t,n){T=e,_v(e)}function _v(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Xo;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ee;a=Xo;var u=Ee;if(Xo=s,(Ee=l)&&!u)for(T=i;T!==null;)s=T,l=s.child,s.tag===22&&s.memoizedState!==null?Bh(i):l!==null?(l.return=s,T=l):Bh(i);for(;o!==null;)T=o,_v(o),o=o.sibling;T=i,Xo=a,Ee=u}jh(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,T=o):jh(e)}}function jh(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ee||Pa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ot(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Sh(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Sh(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&$i(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Ee||t.flags&512&&Qu(t)}catch(h){ee(t,t.return,h)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function zh(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Bh(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Pa(4,t)}catch(l){ee(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ee(t,i,l)}}var o=t.return;try{Qu(t)}catch(l){ee(t,o,l)}break;case 5:var s=t.return;try{Qu(t)}catch(l){ee(t,s,l)}}}catch(l){ee(t,t.return,l)}if(t===e){T=null;break}var a=t.sibling;if(a!==null){a.return=t.return,T=a;break}T=t.return}}var K_=Math.ceil,Xs=Ht.ReactCurrentDispatcher,Sf=Ht.ReactCurrentOwner,Qe=Ht.ReactCurrentBatchConfig,j=0,de=null,se=null,me=0,$e=0,wr=Sn(0),le=0,Yi=null,Xn=0,Oa=0,If=0,Ti=null,Re=null,Tf=0,Hr=1/0,Ct=null,qs=!1,ec=null,dn=null,qo=!1,on=null,Qs=0,Ci=0,tc=null,_s=-1,ks=0;function xe(){return j&6?ie():_s!==-1?_s:_s=ie()}function hn(e){return e.mode&1?j&2&&me!==0?me&-me:P_.transition!==null?(ks===0&&(ks=rg()),ks):(e=B,e!==0||(e=window.event,e=e===void 0?16:cg(e.type)),e):1}function ct(e,t,n,r){if(50<Ci)throw Ci=0,tc=null,Error(_(185));fo(e,n,r),(!(j&2)||e!==de)&&(e===de&&(!(j&2)&&(Oa|=n),le===4&&Zt(e,me)),Me(e,r),n===1&&j===0&&!(t.mode&1)&&(Hr=ie()+500,ba&&In()))}function Me(e,t){var n=e.callbackNode;Pw(e,t);var r=Ds(e,e===de?me:0);if(r===0)n!==null&&Qd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Qd(n),t===1)e.tag===0?x_(Hh.bind(null,e)):xg(Hh.bind(null,e)),T_(function(){!(j&6)&&In()}),n=null;else{switch(ig(r)){case 1:n=qc;break;case 4:n=tg;break;case 16:n=Ns;break;case 536870912:n=ng;break;default:n=Ns}n=Av(n,kv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function kv(e,t){if(_s=-1,ks=0,j&6)throw Error(_(327));var n=e.callbackNode;if(Or()&&e.callbackNode!==n)return null;var r=Ds(e,e===de?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Js(e,r);else{t=r;var i=j;j|=2;var o=Sv();(de!==e||me!==t)&&(Ct=null,Hr=ie()+500,zn(e,t));do try{q_();break}catch(a){Ev(e,a)}while(1);cf(),Xs.current=o,j=i,se!==null?t=0:(de=null,me=0,t=le)}if(t!==0){if(t===2&&(i=Au(e),i!==0&&(r=i,t=nc(e,i))),t===1)throw n=Yi,zn(e,0),Zt(e,r),Me(e,ie()),n;if(t===6)Zt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Y_(i)&&(t=Js(e,r),t===2&&(o=Au(e),o!==0&&(r=o,t=nc(e,o))),t===1))throw n=Yi,zn(e,0),Zt(e,r),Me(e,ie()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:Pn(e,Re,Ct);break;case 3:if(Zt(e,r),(r&130023424)===r&&(t=Tf+500-ie(),10<t)){if(Ds(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Mu(Pn.bind(null,e,Re,Ct),t);break}Pn(e,Re,Ct);break;case 4:if(Zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-ut(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*K_(r/1960))-r,10<r){e.timeoutHandle=Mu(Pn.bind(null,e,Re,Ct),r);break}Pn(e,Re,Ct);break;case 5:Pn(e,Re,Ct);break;default:throw Error(_(329))}}}return Me(e,ie()),e.callbackNode===n?kv.bind(null,e):null}function nc(e,t){var n=Ti;return e.current.memoizedState.isDehydrated&&(zn(e,t).flags|=256),e=Js(e,t),e!==2&&(t=Re,Re=n,t!==null&&rc(t)),e}function rc(e){Re===null?Re=e:Re.push.apply(Re,e)}function Y_(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ft(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zt(e,t){for(t&=~If,t&=~Oa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ut(t),r=1<<n;e[n]=-1,t&=~r}}function Hh(e){if(j&6)throw Error(_(327));Or();var t=Ds(e,0);if(!(t&1))return Me(e,ie()),null;var n=Js(e,t);if(e.tag!==0&&n===2){var r=Au(e);r!==0&&(t=r,n=nc(e,r))}if(n===1)throw n=Yi,zn(e,0),Zt(e,t),Me(e,ie()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pn(e,Re,Ct),Me(e,ie()),null}function Cf(e,t){var n=j;j|=1;try{return e(t)}finally{j=n,j===0&&(Hr=ie()+500,ba&&In())}}function qn(e){on!==null&&on.tag===0&&!(j&6)&&Or();var t=j;j|=1;var n=Qe.transition,r=B;try{if(Qe.transition=null,B=1,e)return e()}finally{B=r,Qe.transition=n,j=t,!(j&6)&&In()}}function bf(){$e=wr.current,G(wr)}function zn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,I_(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(af(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fs();break;case 3:zr(),G(De),G(Te),gf();break;case 5:mf(r);break;case 4:zr();break;case 13:G(q);break;case 19:G(q);break;case 10:ff(r.type._context);break;case 22:case 23:bf()}n=n.return}if(de=e,se=e=pn(e.current,null),me=$e=t,le=0,Yi=null,If=Oa=Xn=0,Re=Ti=null,Nn!==null){for(t=0;t<Nn.length;t++)if(n=Nn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Nn=null}return e}function Ev(e,t){do{var n=se;try{if(cf(),vs.current=Ys,Ks){for(var r=J.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ks=!1}if(Yn=0,fe=ae=J=null,Si=!1,Wi=0,Sf.current=null,n===null||n.return===null){le=1,Yi=t,se=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=me,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Ph(s);if(g!==null){g.flags&=-257,Oh(g,s,a,o,t),g.mode&1&&xh(o,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(l),t.updateQueue=w}else v.add(l);break e}else{if(!(t&1)){xh(o,u,t),Af();break e}l=Error(_(426))}}else if(Y&&a.mode&1){var P=Ph(s);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Oh(P,s,a,o,t),lf(Br(l,a));break e}}o=l=Br(l,a),le!==4&&(le=2),Ti===null?Ti=[o]:Ti.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=ov(o,l,t);Eh(o,p);break e;case 1:a=l;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(dn===null||!dn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=sv(o,a,t);Eh(o,y);break e}}o=o.return}while(o!==null)}Tv(n)}catch(k){t=k,se===n&&n!==null&&(se=n=n.return);continue}break}while(1)}function Sv(){var e=Xs.current;return Xs.current=Ys,e===null?Ys:e}function Af(){(le===0||le===3||le===2)&&(le=4),de===null||!(Xn&268435455)&&!(Oa&268435455)||Zt(de,me)}function Js(e,t){var n=j;j|=2;var r=Sv();(de!==e||me!==t)&&(Ct=null,zn(e,t));do try{X_();break}catch(i){Ev(e,i)}while(1);if(cf(),j=n,Xs.current=r,se!==null)throw Error(_(261));return de=null,me=0,le}function X_(){for(;se!==null;)Iv(se)}function q_(){for(;se!==null&&!kw();)Iv(se)}function Iv(e){var t=bv(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?Tv(e):se=t,Sf.current=null}function Tv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=H_(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,se=null;return}}else if(n=B_(n,t,$e),n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);le===0&&(le=5)}function Pn(e,t,n){var r=B,i=Qe.transition;try{Qe.transition=null,B=1,Q_(e,t,n,r)}finally{Qe.transition=i,B=r}return null}function Q_(e,t,n,r){do Or();while(on!==null);if(j&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ow(e,o),e===de&&(se=de=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qo||(qo=!0,Av(Ns,function(){return Or(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Qe.transition,Qe.transition=null;var s=B;B=1;var a=j;j|=4,Sf.current=null,W_(e,n),wv(n,e),v_(Du),Ls=!!Nu,Du=Nu=null,e.current=n,G_(n),Ew(),j=a,B=s,Qe.transition=o}else e.current=n;if(qo&&(qo=!1,on=e,Qs=i),o=e.pendingLanes,o===0&&(dn=null),Tw(n.stateNode),Me(e,ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qs)throw qs=!1,e=ec,ec=null,e;return Qs&1&&e.tag!==0&&Or(),o=e.pendingLanes,o&1?e===tc?Ci++:(Ci=0,tc=e):Ci=0,In(),null}function Or(){if(on!==null){var e=ig(Qs),t=Qe.transition,n=B;try{if(Qe.transition=null,B=16>e?16:e,on===null)var r=!1;else{if(e=on,on=null,Qs=0,j&6)throw Error(_(331));var i=j;for(j|=4,T=e.current;T!==null;){var o=T,s=o.child;if(T.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(T=u;T!==null;){var c=T;switch(c.tag){case 0:case 11:case 15:Ii(8,c,o)}var f=c.child;if(f!==null)f.return=c,T=f;else for(;T!==null;){c=T;var h=c.sibling,g=c.return;if(gv(c),c===u){T=null;break}if(h!==null){h.return=g,T=h;break}T=g}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var P=w.sibling;w.sibling=null,w=P}while(w!==null)}}T=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,T=s;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ii(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,T=p;break e}T=o.return}}var d=e.current;for(T=d;T!==null;){s=T;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,T=m;else e:for(s=d;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Pa(9,a)}}catch(k){ee(a,a.return,k)}if(a===s){T=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,T=y;break e}T=a.return}}if(j=i,In(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(Ea,e)}catch{}r=!0}return r}finally{B=n,Qe.transition=t}}return!1}function Vh(e,t,n){t=Br(n,t),t=ov(e,t,1),e=fn(e,t,1),t=xe(),e!==null&&(fo(e,1,t),Me(e,t))}function ee(e,t,n){if(e.tag===3)Vh(e,e,n);else for(;t!==null;){if(t.tag===3){Vh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dn===null||!dn.has(r))){e=Br(n,e),e=sv(t,e,1),t=fn(t,e,1),e=xe(),t!==null&&(fo(t,1,e),Me(t,e));break}}t=t.return}}function J_(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=xe(),e.pingedLanes|=e.suspendedLanes&n,de===e&&(me&n)===n&&(le===4||le===3&&(me&130023424)===me&&500>ie()-Tf?zn(e,0):If|=n),Me(e,t)}function Cv(e,t){t===0&&(e.mode&1?(t=jo,jo<<=1,!(jo&130023424)&&(jo=4194304)):t=1);var n=xe();e=Mt(e,t),e!==null&&(fo(e,t,n),Me(e,n))}function Z_(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cv(e,n)}function ek(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Cv(e,n)}var bv;bv=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)Ne=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ne=!1,z_(e,t,n);Ne=!!(e.flags&131072)}else Ne=!1,Y&&t.flags&1048576&&Pg(t,Bs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ws(e,t),e=t.pendingProps;var i=Ur(t,Te.current);Pr(t,n),i=yf(null,t,r,e,i,n);var o=wf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Le(r)?(o=!0,js(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hf(t),i.updater=Aa,t.stateNode=i,i._reactInternals=t,Hu(t,r,e,n),t=Gu(null,t,r,!0,o,n)):(t.tag=0,Y&&o&&sf(t),be(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ws(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=nk(r),e=ot(r,e),i){case 0:t=Wu(null,t,r,e,n);break e;case 1:t=Dh(null,t,r,e,n);break e;case 11:t=Rh(null,t,r,e,n);break e;case 14:t=Nh(null,t,r,ot(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),Wu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),Dh(e,t,r,i,n);case 3:e:{if(cv(t),e===null)throw Error(_(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Dg(e,t),Ws(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Br(Error(_(423)),t),t=Lh(e,t,r,n,i);break e}else if(r!==i){i=Br(Error(_(424)),t),t=Lh(e,t,r,n,i);break e}else for(Ue=cn(t.stateNode.containerInfo.firstChild),je=t,Y=!0,at=null,n=Ug(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fr(),r===i){t=$t(e,t,n);break e}be(e,t,r,n)}t=t.child}return t;case 5:return Fg(t),e===null&&ju(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Lu(r,i)?s=null:o!==null&&Lu(r,o)&&(t.flags|=32),uv(e,t),be(e,t,s,n),t.child;case 6:return e===null&&ju(t),null;case 13:return fv(e,t,n);case 4:return pf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=jr(t,null,r,n):be(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),Rh(e,t,r,i,n);case 7:return be(e,t,t.pendingProps,n),t.child;case 8:return be(e,t,t.pendingProps.children,n),t.child;case 12:return be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,H(Hs,r._currentValue),r._currentValue=s,o!==null)if(ft(o.value,s)){if(o.children===i.children&&!De.current){t=$t(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Nt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),zu(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(_(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),zu(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}be(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Pr(t,n),i=et(i),r=r(i),t.flags|=1,be(e,t,r,n),t.child;case 14:return r=t.type,i=ot(r,t.pendingProps),i=ot(r.type,i),Nh(e,t,r,i,n);case 15:return av(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ot(r,i),ws(e,t),t.tag=1,Le(r)?(e=!0,js(t)):e=!1,Pr(t,n),Mg(t,r,i),Hu(t,r,i,n),Gu(null,t,r,!0,e,n);case 19:return dv(e,t,n);case 22:return lv(e,t,n)}throw Error(_(156,t.tag))};function Av(e,t){return eg(e,t)}function tk(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,n,r){return new tk(e,t,n,r)}function xf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function nk(e){if(typeof e=="function")return xf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Kc)return 11;if(e===Yc)return 14}return 2}function pn(e,t){var n=e.alternate;return n===null?(n=qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Es(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")xf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case ur:return Bn(n.children,i,o,t);case Gc:s=8,i|=8;break;case hu:return e=qe(12,n,t,i|2),e.elementType=hu,e.lanes=o,e;case pu:return e=qe(13,n,t,i),e.elementType=pu,e.lanes=o,e;case mu:return e=qe(19,n,t,i),e.elementType=mu,e.lanes=o,e;case $m:return Ra(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Lm:s=10;break e;case Mm:s=9;break e;case Kc:s=11;break e;case Yc:s=14;break e;case Xt:s=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=qe(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Bn(e,t,n,r){return e=qe(7,e,r,t),e.lanes=n,e}function Ra(e,t,n,r){return e=qe(22,e,r,t),e.elementType=$m,e.lanes=n,e.stateNode={isHidden:!1},e}function Ml(e,t,n){return e=qe(6,e,null,t),e.lanes=n,e}function $l(e,t,n){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function rk(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vl(0),this.expirationTimes=vl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pf(e,t,n,r,i,o,s,a,l){return e=new rk(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=qe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hf(o),e}function ik(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:lr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function xv(e){if(!e)return yn;e=e._reactInternals;e:{if(ir(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Le(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Le(n))return Ag(e,n,t)}return t}function Pv(e,t,n,r,i,o,s,a,l){return e=Pf(n,r,!0,e,i,o,s,a,l),e.context=xv(null),n=e.current,r=xe(),i=hn(n),o=Nt(r,i),o.callback=t??null,fn(n,o,i),e.current.lanes=i,fo(e,i,r),Me(e,r),e}function Na(e,t,n,r){var i=t.current,o=xe(),s=hn(i);return n=xv(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=fn(i,t,s),e!==null&&(ct(e,i,s,o),gs(e,i,s)),s}function Zs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Of(e,t){Wh(e,t),(e=e.alternate)&&Wh(e,t)}function ok(){return null}var Ov=typeof reportError=="function"?reportError:function(e){console.error(e)};function Rf(e){this._internalRoot=e}Da.prototype.render=Rf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Na(e,t,null,null)};Da.prototype.unmount=Rf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qn(function(){Na(null,e,null,null)}),t[Lt]=null}};function Da(e){this._internalRoot=e}Da.prototype.unstable_scheduleHydration=function(e){if(e){var t=ag();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jt.length&&t!==0&&t<Jt[n].priority;n++);Jt.splice(n,0,e),n===0&&ug(e)}};function Nf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function La(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gh(){}function sk(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Zs(s);o.call(u)}}var s=Pv(t,r,e,0,null,!1,!1,"",Gh);return e._reactRootContainer=s,e[Lt]=s.current,ji(e.nodeType===8?e.parentNode:e),qn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Zs(l);a.call(u)}}var l=Pf(e,0,!1,null,null,!1,!1,"",Gh);return e._reactRootContainer=l,e[Lt]=l.current,ji(e.nodeType===8?e.parentNode:e),qn(function(){Na(t,l,n,r)}),l}function Ma(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Zs(s);a.call(l)}}Na(t,s,e,i)}else s=sk(n,t,e,i,r);return Zs(s)}og=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=hi(t.pendingLanes);n!==0&&(Qc(t,n|1),Me(t,ie()),!(j&6)&&(Hr=ie()+500,In()))}break;case 13:qn(function(){var r=Mt(e,1);if(r!==null){var i=xe();ct(r,e,1,i)}}),Of(e,1)}};Jc=function(e){if(e.tag===13){var t=Mt(e,134217728);if(t!==null){var n=xe();ct(t,e,134217728,n)}Of(e,134217728)}};sg=function(e){if(e.tag===13){var t=hn(e),n=Mt(e,t);if(n!==null){var r=xe();ct(n,e,t,r)}Of(e,t)}};ag=function(){return B};lg=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};Tu=function(e,t,n){switch(t){case"input":if(yu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ca(r);if(!i)throw Error(_(90));Fm(r),yu(r,i)}}}break;case"textarea":zm(e,n);break;case"select":t=n.value,t!=null&&Cr(e,!!n.multiple,t,!1)}};Ym=Cf;Xm=qn;var ak={usingClientEntryPoint:!1,Events:[po,hr,Ca,Gm,Km,Cf]},ui={findFiberByHostInstance:Rn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},lk={bundleType:ui.bundleType,version:ui.version,rendererPackageName:ui.rendererPackageName,rendererConfig:ui.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Jm(e),e===null?null:e.stateNode},findFiberByHostInstance:ui.findFiberByHostInstance||ok,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qo.isDisabled&&Qo.supportsFiber)try{Ea=Qo.inject(lk),_t=Qo}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ak;We.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nf(t))throw Error(_(200));return ik(e,t,null,n)};We.createRoot=function(e,t){if(!Nf(e))throw Error(_(299));var n=!1,r="",i=Ov;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Pf(e,1,!1,null,null,n,!1,r,i),e[Lt]=t.current,ji(e.nodeType===8?e.parentNode:e),new Rf(t)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Jm(t),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return qn(e)};We.hydrate=function(e,t,n){if(!La(t))throw Error(_(200));return Ma(null,e,t,!0,n)};We.hydrateRoot=function(e,t,n){if(!Nf(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Ov;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Pv(t,null,e,1,n??null,i,!1,o,s),e[Lt]=t.current,ji(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Da(t)};We.render=function(e,t,n){if(!La(t))throw Error(_(200));return Ma(null,e,t,!1,n)};We.unmountComponentAtNode=function(e){if(!La(e))throw Error(_(40));return e._reactRootContainer?(qn(function(){Ma(null,null,e,!1,function(){e._reactRootContainer=null,e[Lt]=null})}),!0):!1};We.unstable_batchedUpdates=Cf;We.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!La(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Ma(e,t,n,!1,r)};We.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=We})(ow);var Kh=cu;uu.createRoot=Kh.createRoot,uu.hydrateRoot=Kh.hydrateRoot;/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ic(){return ic=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ic.apply(this,arguments)}var Ln;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ln||(Ln={}));const Yh="popstate";function uk(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return oc("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Df(i)}return dk(t,n,null,e)}function Rv(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ck(){return Math.random().toString(36).substr(2,8)}function Xh(e){return{usr:e.state,key:e.key}}function oc(e,t,n,r){return n===void 0&&(n=null),ic({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Nv(t):t,{state:n,key:t&&t.key||r||ck()})}function Df(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Nv(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function fk(e){let t=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:window.location.href,n=typeof e=="string"?e:Df(e);return Rv(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}function dk(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Ln.Pop,l=null;function u(){a=Ln.Pop,l&&l({action:a,location:h.location})}function c(g,v){a=Ln.Push;let w=oc(h.location,g,v);n&&n(w,g);let P=Xh(w),p=h.createHref(w);try{s.pushState(P,"",p)}catch{i.location.assign(p)}o&&l&&l({action:a,location:h.location})}function f(g,v){a=Ln.Replace;let w=oc(h.location,g,v);n&&n(w,g);let P=Xh(w),p=h.createHref(w);s.replaceState(P,"",p),o&&l&&l({action:a,location:h.location})}let h={get action(){return a},get location(){return e(i,s)},listen(g){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Yh,u),l=g,()=>{i.removeEventListener(Yh,u),l=null}},createHref(g){return t(i,g)},encodeLocation(g){let v=fk(typeof g=="string"?g:Df(g));return{pathname:v.pathname,search:v.search,hash:v.hash}},push:c,replace:f,go(g){return s.go(g)}};return h}var qh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(qh||(qh={}));function hk(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const pk=["post","put","patch","delete"];[...pk];/**
 * React Router v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const gk=typeof Object.is=="function"?Object.is:mk,{useState:vk,useEffect:yk,useLayoutEffect:wk,useDebugValue:_k}=lu;function kk(e,t,n){const r=t(),[{inst:i},o]=vk({inst:{value:r,getSnapshot:t}});return wk(()=>{i.value=r,i.getSnapshot=t,Ul(i)&&o({inst:i})},[e,r,t]),yk(()=>(Ul(i)&&o({inst:i}),e(()=>{Ul(i)&&o({inst:i})})),[e]),_k(r),r}function Ul(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!gk(n,r)}catch{return!0}}function Ek(e,t,n){return t()}const Sk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ik=!Sk,Tk=Ik?Ek:kk;"useSyncExternalStore"in lu&&(e=>e.useSyncExternalStore)(lu);const Ck=Q.createContext(null),Dv=Q.createContext(null);function bk(){return Q.useContext(Dv)!=null}var Qh;(function(e){e.UseRevalidator="useRevalidator"})(Qh||(Qh={}));var Jh;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Jh||(Jh={}));function Ak(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ln.Pop,navigator:o,static:s=!1}=e;bk()&&Rv(!1);let a=t.replace(/^\/*/,"/"),l=Q.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=Nv(r));let{pathname:u="/",search:c="",hash:f="",state:h=null,key:g="default"}=r,v=Q.useMemo(()=>{let w=hk(u,a);return w==null?null:{pathname:w,search:c,hash:f,state:h,key:g}},[a,u,c,f,h,g]);return v==null?null:Q.createElement(Ck.Provider,{value:l},Q.createElement(Dv.Provider,{children:n,value:{location:v,navigationType:i}}))}var Zh;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Zh||(Zh={}));new Promise(()=>{});/**
 * React Router DOM v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xk(e){let{basename:t,children:n,window:r}=e,i=Q.useRef();i.current==null&&(i.current=uk({window:r,v5Compat:!0}));let o=i.current,[s,a]=Q.useState({action:o.action,location:o.location});return Q.useLayoutEffect(()=>o.listen(a),[o]),Q.createElement(Ak,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}var ep;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(ep||(ep={}));var tp;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(tp||(tp={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Pk=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},Mv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,f=(o&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(h=64)),r.push(n[c],n[f],n[h],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Lv(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Pk(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||f==null)throw Error();const h=o<<2|a>>4;if(r.push(h),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const v=u<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Ok=function(e){const t=Lv(e);return Mv.encodeByteArray(t,!0)},ea=function(e){return Ok(e).replace(/\./g,"")},$v=function(e){try{return Mv.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function Uv(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Nk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dk(){const e=Ce();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Fv(){try{return typeof indexedDB=="object"}catch{return!1}}function jv(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function Lk(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function Mk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k=()=>Mk().__FIREBASE_DEFAULTS__,Uk=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Fk=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&$v(e[1]);return t&&JSON.parse(t)},Lf=()=>{try{return $k()||Uk()||Fk()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},zv=e=>{var t,n;return(n=(t=Lf())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},jk=e=>{const t=zv(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},zk=()=>{var e;return(e=Lf())===null||e===void 0?void 0:e.config},Bv=e=>{var t;return(t=Lf())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hk(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[ea(JSON.stringify(n)),ea(JSON.stringify(s)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk="FirebaseError";class ht extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Vk,Object.setPrototypeOf(this,ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,or.prototype.create)}}class or{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?Wk(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new ht(i,a,r)}}function Wk(e,t){return e.replace(Gk,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Gk=/\{\$([^}]+)}/g;function Kk(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Xi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(np(o)&&np(s)){if(!Xi(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function np(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Yk(e,t){const n=new Xk(e,t);return n.subscribe.bind(n)}class Xk{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qk(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Fl),i.error===void 0&&(i.error=Fl),i.complete===void 0&&(i.complete=Fl);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qk(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Fl(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk=1e3,Jk=2,Zk=4*60*60*1e3,eE=.5;function rp(e,t=Qk,n=Jk){const r=t*Math.pow(n,e),i=Math.round(eE*r*(Math.random()-.5)*2);return Math.min(Zk,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(e){return e&&e._delegate?e._delegate:e}class dt{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Bk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(rE(t))try{this.getOrInitializeService({instanceIdentifier:On})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=On){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=On){return this.instances.has(t)}getOptions(t=On){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nE(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=On){return this.component?this.component.multipleInstances?t:On:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nE(e){return e===On?void 0:e}function rE(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new tE(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(z||(z={}));const oE={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},sE=z.INFO,aE={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},lE=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=aE[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class $a{constructor(t){this.name=t,this._logLevel=sE,this._logHandler=lE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?oE[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...t),this._logHandler(this,z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...t),this._logHandler(this,z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,z.INFO,...t),this._logHandler(this,z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,z.WARN,...t),this._logHandler(this,z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...t),this._logHandler(this,z.ERROR,...t)}}const uE=(e,t)=>t.some(n=>e instanceof n);let ip,op;function cE(){return ip||(ip=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fE(){return op||(op=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hv=new WeakMap,sc=new WeakMap,Vv=new WeakMap,jl=new WeakMap,Mf=new WeakMap;function dE(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(mn(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&Hv.set(n,e)}).catch(()=>{}),Mf.set(t,e),t}function hE(e){if(sc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});sc.set(e,t)}let ac={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return sc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Vv.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function pE(e){ac=e(ac)}function mE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(zl(this),t,...n);return Vv.set(r,t.sort?t.sort():[t]),mn(r)}:fE().includes(e)?function(...t){return e.apply(zl(this),t),mn(Hv.get(this))}:function(...t){return mn(e.apply(zl(this),t))}}function gE(e){return typeof e=="function"?mE(e):(e instanceof IDBTransaction&&hE(e),uE(e,cE())?new Proxy(e,ac):e)}function mn(e){if(e instanceof IDBRequest)return dE(e);if(jl.has(e))return jl.get(e);const t=gE(e);return t!==e&&(jl.set(e,t),Mf.set(t,e)),t}const zl=e=>Mf.get(e);function Wv(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=mn(s);return r&&s.addEventListener("upgradeneeded",l=>{r(mn(s.result),l.oldVersion,l.newVersion,mn(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const vE=["get","getKey","getAll","getAllKeys","count"],yE=["put","add","delete","clear"],Bl=new Map;function sp(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Bl.get(t))return Bl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=yE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||vE.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Bl.set(t,o),o}pE(e=>({...e,get:(t,n,r)=>sp(t,n)||e.get(t,n,r),has:(t,n)=>!!sp(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_E(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _E(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const lc="@firebase/app",ap="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=new $a("@firebase/app"),kE="@firebase/app-compat",EE="@firebase/analytics-compat",SE="@firebase/analytics",IE="@firebase/app-check-compat",TE="@firebase/app-check",CE="@firebase/auth",bE="@firebase/auth-compat",AE="@firebase/database",xE="@firebase/database-compat",PE="@firebase/functions",OE="@firebase/functions-compat",RE="@firebase/installations",NE="@firebase/installations-compat",DE="@firebase/messaging",LE="@firebase/messaging-compat",ME="@firebase/performance",$E="@firebase/performance-compat",UE="@firebase/remote-config",FE="@firebase/remote-config-compat",jE="@firebase/storage",zE="@firebase/storage-compat",BE="@firebase/firestore",HE="@firebase/firestore-compat",VE="firebase",WE="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="[DEFAULT]",GE={[lc]:"fire-core",[kE]:"fire-core-compat",[SE]:"fire-analytics",[EE]:"fire-analytics-compat",[TE]:"fire-app-check",[IE]:"fire-app-check-compat",[CE]:"fire-auth",[bE]:"fire-auth-compat",[AE]:"fire-rtdb",[xE]:"fire-rtdb-compat",[PE]:"fire-fn",[OE]:"fire-fn-compat",[RE]:"fire-iid",[NE]:"fire-iid-compat",[DE]:"fire-fcm",[LE]:"fire-fcm-compat",[ME]:"fire-perf",[$E]:"fire-perf-compat",[UE]:"fire-rc",[FE]:"fire-rc-compat",[jE]:"fire-gcs",[zE]:"fire-gcs-compat",[BE]:"fire-fst",[HE]:"fire-fst-compat","fire-js":"fire-js",[VE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=new Map,cc=new Map;function KE(e,t){try{e.container.addComponent(t)}catch(n){Qn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function It(e){const t=e.name;if(cc.has(t))return Qn.debug(`There were multiple attempts to register component ${t}.`),!1;cc.set(t,e);for(const n of ta.values())KE(n,e);return!0}function sr(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gn=new or("app","Firebase",YE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw gn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=WE;function Gv(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:uc,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw gn.create("bad-app-name",{appName:String(i)});if(n||(n=zk()),!n)throw gn.create("no-options");const o=ta.get(i);if(o){if(Xi(n,o.options)&&Xi(r,o.config))return o;throw gn.create("duplicate-app",{appName:i})}const s=new iE(i);for(const l of cc.values())s.addComponent(l);const a=new XE(n,r,s);return ta.set(i,a),a}function $f(e=uc){const t=ta.get(e);if(!t&&e===uc)return Gv();if(!t)throw gn.create("no-app",{appName:e});return t}function Je(e,t,n){var r;let i=(r=GE[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Qn.warn(a.join(" "));return}It(new dt(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE="firebase-heartbeat-database",QE=1,qi="firebase-heartbeat-store";let Hl=null;function Kv(){return Hl||(Hl=Wv(qE,QE,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(qi)}}}).catch(e=>{throw gn.create("idb-open",{originalErrorMessage:e.message})})),Hl}async function JE(e){try{return(await Kv()).transaction(qi).objectStore(qi).get(Yv(e))}catch(t){if(t instanceof ht)Qn.warn(t.message);else{const n=gn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Qn.warn(n.message)}}}async function lp(e,t){try{const r=(await Kv()).transaction(qi,"readwrite");return await r.objectStore(qi).put(t,Yv(e)),r.done}catch(n){if(n instanceof ht)Qn.warn(n.message);else{const r=gn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qn.warn(r.message)}}}function Yv(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=1024,eS=30*24*60*60*1e3;class tS{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=up();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=eS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=up(),{heartbeatsToSend:n,unsentEntries:r}=nS(this._heartbeatsCache.heartbeats),i=ea(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function up(){return new Date().toISOString().substring(0,10)}function nS(e,t=ZE){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),cp(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),cp(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class rS{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fv()?jv().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await JE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lp(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lp(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function cp(e){return ea(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(e){It(new dt("platform-logger",t=>new wE(t),"PRIVATE")),It(new dt("heartbeat",t=>new tS(t),"PRIVATE")),Je(lc,ap,e),Je(lc,ap,"esm2017"),Je("fire-js","")}iS("");var oS="firebase",sS="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Je(oS,sS,"app");const Xv="@firebase/installations",Uf="0.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv=1e4,Qv=`w:${Uf}`,Jv="FIS_v2",aS="https://firebaseinstallations.googleapis.com/v1",lS=60*60*1e3,uS="installations",cS="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Jn=new or(uS,cS,fS);function Zv(e){return e instanceof ht&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey({projectId:e}){return`${aS}/projects/${e}/installations`}function ty(e){return{token:e.token,requestStatus:2,expiresIn:hS(e.expiresIn),creationTime:Date.now()}}async function ny(e,t){const r=(await t.json()).error;return Jn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ry({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function dS(e,{refreshToken:t}){const n=ry(e);return n.append("Authorization",pS(t)),n}async function iy(e){const t=await e();return t.status>=500&&t.status<600?e():t}function hS(e){return Number(e.replace("s","000"))}function pS(e){return`${Jv} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mS({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=ey(e),i=ry(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:Jv,appId:e.appId,sdkVersion:Qv},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await iy(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:ty(u.authToken)}}else throw await ny("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gS(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS=/^[cdef][\w-]{21}$/,fc="";function yS(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=wS(e);return vS.test(n)?n:fc}catch{return fc}}function wS(e){return gS(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=new Map;function ay(e,t){const n=Ua(e);ly(n,t),_S(n,t)}function ly(e,t){const n=sy.get(e);if(n)for(const r of n)r(t)}function _S(e,t){const n=kS();n&&n.postMessage({key:e,fid:t}),ES()}let Mn=null;function kS(){return!Mn&&"BroadcastChannel"in self&&(Mn=new BroadcastChannel("[Firebase] FID Change"),Mn.onmessage=e=>{ly(e.data.key,e.data.fid)}),Mn}function ES(){sy.size===0&&Mn&&(Mn.close(),Mn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="firebase-installations-database",IS=1,Zn="firebase-installations-store";let Vl=null;function Ff(){return Vl||(Vl=Wv(SS,IS,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Zn)}}})),Vl}async function na(e,t){const n=Ua(e),i=(await Ff()).transaction(Zn,"readwrite"),o=i.objectStore(Zn),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&ay(e,t.fid),t}async function uy(e){const t=Ua(e),r=(await Ff()).transaction(Zn,"readwrite");await r.objectStore(Zn).delete(t),await r.done}async function Fa(e,t){const n=Ua(e),i=(await Ff()).transaction(Zn,"readwrite"),o=i.objectStore(Zn),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&ay(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jf(e){let t;const n=await Fa(e.appConfig,r=>{const i=TS(r),o=CS(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===fc?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function TS(e){const t=e||{fid:yS(),registrationStatus:0};return cy(t)}function CS(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Jn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=bS(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:AS(e)}:{installationEntry:t}}async function bS(e,t){try{const n=await mS(e,t);return na(e.appConfig,n)}catch(n){throw Zv(n)&&n.customData.serverCode===409?await uy(e.appConfig):await na(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function AS(e){let t=await fp(e.appConfig);for(;t.registrationStatus===1;)await oy(100),t=await fp(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await jf(e);return r||n}return t}function fp(e){return Fa(e,t=>{if(!t)throw Jn.create("installation-not-found");return cy(t)})}function cy(e){return xS(e)?{fid:e.fid,registrationStatus:0}:e}function xS(e){return e.registrationStatus===1&&e.registrationTime+qv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PS({appConfig:e,heartbeatServiceProvider:t},n){const r=OS(e,n),i=dS(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:Qv,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await iy(()=>fetch(r,a));if(l.ok){const u=await l.json();return ty(u)}else throw await ny("Generate Auth Token",l)}function OS(e,{fid:t}){return`${ey(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zf(e,t=!1){let n;const r=await Fa(e.appConfig,o=>{if(!fy(o))throw Jn.create("not-registered");const s=o.authToken;if(!t&&DS(s))return o;if(s.requestStatus===1)return n=RS(e,t),o;{if(!navigator.onLine)throw Jn.create("app-offline");const a=MS(o);return n=NS(e,a),a}});return n?await n:r.authToken}async function RS(e,t){let n=await dp(e.appConfig);for(;n.authToken.requestStatus===1;)await oy(100),n=await dp(e.appConfig);const r=n.authToken;return r.requestStatus===0?zf(e,t):r}function dp(e){return Fa(e,t=>{if(!fy(t))throw Jn.create("not-registered");const n=t.authToken;return $S(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function NS(e,t){try{const n=await PS(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await na(e.appConfig,r),n}catch(n){if(Zv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await uy(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await na(e.appConfig,r)}throw n}}function fy(e){return e!==void 0&&e.registrationStatus===2}function DS(e){return e.requestStatus===2&&!LS(e)}function LS(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+lS}function MS(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function $S(e){return e.requestStatus===1&&e.requestTime+qv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function US(e){const t=e,{installationEntry:n,registrationPromise:r}=await jf(t);return r?r.catch(console.error):zf(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FS(e,t=!1){const n=e;return await jS(n),(await zf(n,t)).token}async function jS(e){const{registrationPromise:t}=await jf(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zS(e){if(!e||!e.options)throw Wl("App Configuration");if(!e.name)throw Wl("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Wl(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Wl(e){return Jn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy="installations",BS="installations-internal",HS=e=>{const t=e.getProvider("app").getImmediate(),n=zS(t),r=sr(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},VS=e=>{const t=e.getProvider("app").getImmediate(),n=sr(t,dy).getImmediate();return{getId:()=>US(n),getToken:i=>FS(n,i)}};function WS(){It(new dt(dy,HS,"PUBLIC")),It(new dt(BS,VS,"PRIVATE"))}WS();Je(Xv,Uf);Je(Xv,Uf,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra="analytics",GS="firebase_id",KS="origin",YS=60*1e3,XS="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",hy="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze=new $a("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function qS(e,t){const n=document.createElement("script");n.src=`${hy}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function QS(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function JS(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await py(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){ze.error(a)}e("config",i,o)}async function ZS(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await py(n);for(const l of s){const u=a.find(f=>f.measurementId===l),c=u&&t[u.appId];if(c)o.push(c);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){ze.error(o)}}function eI(e,t,n,r){async function i(o,s,a){try{o==="event"?await ZS(e,t,n,s,a):o==="config"?await JS(e,t,n,r,s,a):o==="consent"?e("consent","update",a):e("set",s)}catch(l){ze.error(l)}}return i}function tI(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=eI(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function nI(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(hy)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Ze=new or("analytics","Analytics",rI);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI=30,oI=1e3;class sI{constructor(t={},n=oI){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const my=new sI;function aI(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function lI(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:aI(r)},o=XS.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw Ze.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function uI(e,t=my,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw Ze.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Ze.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new dI;return setTimeout(async()=>{a.abort()},n!==void 0?n:YS),gy({appId:r,apiKey:i,measurementId:o},s,a,t)}async function gy(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=my){var o;const{appId:s,measurementId:a}=e;try{await cI(r,t)}catch(l){if(a)return ze.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await lI(e);return i.deleteThrottleMetadata(s),l}catch(l){const u=l;if(!fI(u)){if(i.deleteThrottleMetadata(s),a)return ze.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw l}const c=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?rp(n,i.intervalMillis,iI):rp(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(s,f),ze.debug(`Calling attemptFetch again in ${c} millis`),gy(e,f,r,i)}}function cI(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(Ze.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function fI(e){if(!(e instanceof ht)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class dI{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function hI(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pI(){if(Fv())try{await jv()}catch(e){return ze.warn(Ze.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return ze.warn(Ze.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function mI(e,t,n,r,i,o,s){var a;const l=uI(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&ze.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>ze.error(g)),t.push(l);const u=pI().then(g=>{if(g)return r.getId()}),[c,f]=await Promise.all([l,u]);nI(o)||qS(o,c.measurementId),i("js",new Date);const h=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return h[KS]="firebase",h.update=!0,f!=null&&(h[GS]=f),i("config",c.measurementId,h),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(t){this.app=t}_delete(){return delete bi[this.app.options.appId],Promise.resolve()}}let bi={},hp=[];const pp={};let Gl="dataLayer",vI="gtag",mp,vy,gp=!1;function yI(){const e=[];if(Uv()&&e.push("This is a browser extension environment."),Lk()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ze.create("invalid-analytics-context",{errorInfo:t});ze.warn(n.message)}}function wI(e,t,n){yI();const r=e.options.appId;if(!r)throw Ze.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ze.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ze.create("no-api-key");if(bi[r]!=null)throw Ze.create("already-exists",{id:r});if(!gp){QS(Gl);const{wrappedGtag:o,gtagCore:s}=tI(bi,hp,pp,Gl,vI);vy=o,mp=s,gp=!0}return bi[r]=mI(e,hp,pp,t,mp,Gl,n),new gI(e)}function _I(e=$f()){e=Vt(e);const t=sr(e,ra);return t.isInitialized()?t.getImmediate():kI(e)}function kI(e,t={}){const n=sr(e,ra);if(n.isInitialized()){const i=n.getImmediate();if(Xi(t,n.getOptions()))return i;throw Ze.create("already-initialized")}return n.initialize({options:t})}function EI(e,t,n,r){e=Vt(e),hI(vy,bi[e.app.options.appId],t,n,r).catch(i=>ze.error(i))}const vp="@firebase/analytics",yp="0.9.0";function SI(){It(new dt(ra,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return wI(r,i,n)},"PUBLIC")),It(new dt("analytics-internal",e,"PRIVATE")),Je(vp,yp),Je(vp,yp,"esm2017");function e(t){try{const n=t.getProvider(ra).getImmediate();return{logEvent:(r,i,o)=>EI(n,r,i,o)}}catch(n){throw Ze.create("interop-component-reg-failed",{reason:n})}}}SI();function Bf(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function yy(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const II=yy,wy=new or("auth","Firebase",yy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp=new $a("@firebase/auth");function Ss(e,...t){wp.logLevel<=z.ERROR&&wp.error(`Auth (${vo}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(e,...t){throw Hf(e,...t)}function Et(e,...t){return Hf(e,...t)}function _y(e,t,n){const r=Object.assign(Object.assign({},II()),{[t]:n});return new or("auth","Firebase",r).create(t,{appName:e.name})}function TI(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Tt(e,"argument-error"),_y(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Hf(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return wy.create(e,...t)}function O(e,t,...n){if(!e)throw Hf(t,...n)}function Pt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ss(t),new Error(t)}function Ut(e,t){e||Pt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p=new Map;function Ot(e){Ut(e instanceof Function,"Expected a class definition");let t=_p.get(e);return t?(Ut(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,_p.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(e,t){const n=sr(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Xi(o,t??{}))return i;Tt(i,"already-initialized")}return n.initialize({options:t})}function bI(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ot);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function AI(){return kp()==="http:"||kp()==="https:"}function kp(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(AI()||Uv()||"connection"in navigator)?navigator.onLine:!0}function PI(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ut(n>t,"Short delay should be less than long delay!"),this.isMobile=Rk()||Nk()}get(){return xI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(e,t){Ut(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=new yo(3e4,6e4);function NI(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ja(e,t,n,r,i={}){return Ey(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=go(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),ky.fetch()(Sy(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function Ey(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},OI),t);try{const i=new LI(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Jo(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jo(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Jo(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw Jo(e,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw _y(e,c,u);Tt(e,c)}}catch(i){if(i instanceof ht)throw i;Tt(e,"network-request-failed")}}async function DI(e,t,n,r,i={}){const o=await ja(e,t,n,r,i);return"mfaPendingCredential"in o&&Tt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function Sy(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Vf(e.config,i):`${e.config.apiScheme}://${i}`}class LI{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Et(this.auth,"network-request-failed")),RI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Jo(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Et(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MI(e,t){return ja(e,"POST","/v1/accounts:delete",t)}async function $I(e,t){return ja(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function UI(e,t=!1){const n=Vt(e),r=await n.getIdToken(t),i=Wf(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Ai(Kl(i.auth_time)),issuedAtTime:Ai(Kl(i.iat)),expirationTime:Ai(Kl(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Kl(e){return Number(e)*1e3}function Wf(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ss("JWT malformed, contained fewer than 3 sections"),null;try{const i=$v(n);return i?JSON.parse(i):(Ss("Failed to decode base64 JWT payload"),null)}catch(i){return Ss("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function FI(e){const t=Wf(e);return O(t,"internal-error"),O(typeof t.exp<"u","internal-error"),O(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qi(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof ht&&jI(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function jI({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ai(this.lastLoginAt),this.creationTime=Ai(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ia(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Qi(e,$I(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?VI(o.providerUserInfo):[],a=HI(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Iy(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function BI(e){const t=Vt(e);await ia(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function HI(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function VI(e){return e.map(t=>{var{providerId:n}=t,r=Bf(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WI(e,t){const n=await Ey(e,{},async()=>{const r=go({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=Sy(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ky.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){O(t.idToken,"internal-error"),O(typeof t.idToken<"u","internal-error"),O(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):FI(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return O(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await WI(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Ji;return r&&(O(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(O(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ji,this.toJSON())}_performRefresh(){return Pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(e,t){O(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Hn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Bf(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Iy(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Qi(this,this.stsTokenManager.getToken(this.auth,t));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return UI(this,t)}reload(){return BI(this)}_assign(t){this!==t&&(O(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Hn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ia(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Qi(this,MI(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,v=(s=n.photoURL)!==null&&s!==void 0?s:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:y,isAnonymous:k,providerData:E,stsTokenManager:S}=n;O(m&&S,t,"internal-error");const x=Ji.fromJSON(this.name,S);O(typeof m=="string",t,"internal-error"),Kt(f,t.name),Kt(h,t.name),O(typeof y=="boolean",t,"internal-error"),O(typeof k=="boolean",t,"internal-error"),Kt(g,t.name),Kt(v,t.name),Kt(w,t.name),Kt(P,t.name),Kt(p,t.name),Kt(d,t.name);const U=new Hn({uid:m,auth:t,email:h,emailVerified:y,displayName:f,isAnonymous:k,photoURL:v,phoneNumber:g,tenantId:w,stsTokenManager:x,createdAt:p,lastLoginAt:d});return E&&Array.isArray(E)&&(U.providerData=E.map(D=>Object.assign({},D))),P&&(U._redirectEventId=P),U}static async _fromIdTokenResponse(t,n,r=!1){const i=new Ji;i.updateFromServerResponse(n);const o=new Hn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await ia(o),o}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Ty.type="NONE";const Ep=Ty;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(e,t,n){return`firebase:${e}:${t}:${n}`}class Rr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Is(this.userKey,i.apiKey,o),this.fullPersistenceKey=Is("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Hn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Rr(Ot(Ep),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Ot(Ep);const s=Is(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const f=Hn._fromJSON(t,c);u!==o&&(a=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Rr(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Rr(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ay(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Cy(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Py(t))return"Blackberry";if(Oy(t))return"Webos";if(Gf(t))return"Safari";if((t.includes("chrome/")||by(t))&&!t.includes("edge/"))return"Chrome";if(xy(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Cy(e=Ce()){return/firefox\//i.test(e)}function Gf(e=Ce()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function by(e=Ce()){return/crios\//i.test(e)}function Ay(e=Ce()){return/iemobile/i.test(e)}function xy(e=Ce()){return/android/i.test(e)}function Py(e=Ce()){return/blackberry/i.test(e)}function Oy(e=Ce()){return/webos/i.test(e)}function za(e=Ce()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function GI(e=Ce()){var t;return za(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function KI(){return Dk()&&document.documentMode===10}function Ry(e=Ce()){return za(e)||xy(e)||Oy(e)||Py(e)||/windows phone/i.test(e)||Ay(e)}function YI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(e,t=[]){let n;switch(e){case"Browser":n=Sp(Ce());break;case"Worker":n=`${Sp(Ce())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${vo}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ip(this),this.idTokenSubscription=new Ip(this),this.beforeStateQueue=new XI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wy,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Ot(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Rr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ia(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=PI()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Vt(t):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&O(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ot(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new or("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Ot(t)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Rr.create(this,[Ot(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return O(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ny(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Ba(e){return Vt(e)}class Ip{constructor(t){this.auth=t,this.observer=null,this.addObserver=Yk(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function QI(e,t,n){const r=Ba(e);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=Dy(t),{host:s,port:a}=JI(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ZI()}function Dy(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function JI(e){const t=Dy(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Tp(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Tp(s)}}}function Tp(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function ZI(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Pt("not implemented")}_getIdTokenResponse(t){return Pt("not implemented")}_linkToIdToken(t,n){return Pt("not implemented")}_getReauthenticationResolver(t){return Pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nr(e,t){return DI(e,"POST","/v1/accounts:signInWithIdp",NI(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT="http://localhost";class er extends Ly{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new er(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Bf(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new er(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return Nr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Nr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Nr(t,n)}buildRequest(){const t={requestUri:eT,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=go(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo extends Kf{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends wo{constructor(){super("facebook.com")}static credential(t){return er._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return en.credentialFromTaggedObject(t)}static credentialFromError(t){return en.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return en.credential(t.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends wo{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return er._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return vt.credentialFromTaggedObject(t)}static credentialFromError(t){return vt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return vt.credential(n,r)}catch{return null}}}vt.GOOGLE_SIGN_IN_METHOD="google.com";vt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends wo{constructor(){super("github.com")}static credential(t){return er._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return tn.credentialFromTaggedObject(t)}static credentialFromError(t){return tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return tn.credential(t.oauthAccessToken)}catch{return null}}}tn.GITHUB_SIGN_IN_METHOD="github.com";tn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends wo{constructor(){super("twitter.com")}static credential(t,n){return er._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return nn.credentialFromTaggedObject(t)}static credentialFromError(t){return nn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.TWITTER_SIGN_IN_METHOD="twitter.com";nn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await Hn._fromIdTokenResponse(t,r,i),s=Cp(r);return new Vr({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Cp(r);return new Vr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Cp(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa extends ht{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,oa.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new oa(t,n,r,i)}}function My(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?oa._fromErrorAndOperation(e,o,t,r):o})}async function tT(e,t,n=!1){const r=await Qi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Vr._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nT(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await Qi(e,My(r,i,t,e),n);O(o.idToken,r,"internal-error");const s=Wf(o.idToken);O(s,r,"internal-error");const{sub:a}=s;return O(e.uid===a,r,"user-mismatch"),Vr._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Tt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rT(e,t,n=!1){const r="signIn",i=await My(e,r,t),o=await Vr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function iT(e,t,n,r){return Vt(e).onIdTokenChanged(t,n,r)}function oT(e,t,n){return Vt(e).beforeAuthStateChanged(t,n)}function sT(e,t,n,r){return Vt(e).onAuthStateChanged(t,n,r)}const sa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(sa,"1"),this.storage.removeItem(sa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(){const e=Ce();return Gf(e)||za(e)}const lT=1e3,uT=10;class Uy extends $y{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=aT()&&YI(),this.fallbackToPolling=Ry(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);KI()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,uT):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},lT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Uy.type="LOCAL";const cT=Uy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy extends $y{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Fy.type="SESSION";const jy=Fy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Ha(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await fT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ha.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Yf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(h.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return window}function hT(e){St().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(){return typeof St().WorkerGlobalScope<"u"&&typeof St().importScripts=="function"}async function pT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mT(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function gT(){return zy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By="firebaseLocalStorageDb",vT=1,aa="firebaseLocalStorage",Hy="fbase_key";class _o{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Va(e,t){return e.transaction([aa],t?"readwrite":"readonly").objectStore(aa)}function yT(){const e=indexedDB.deleteDatabase(By);return new _o(e).toPromise()}function hc(){const e=indexedDB.open(By,vT);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(aa,{keyPath:Hy})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(aa)?t(r):(r.close(),await yT(),t(await hc()))})})}async function bp(e,t,n){const r=Va(e,!0).put({[Hy]:t,value:n});return new _o(r).toPromise()}async function wT(e,t){const n=Va(e,!1).get(t),r=await new _o(n).toPromise();return r===void 0?null:r.value}function Ap(e,t){const n=Va(e,!0).delete(t);return new _o(n).toPromise()}const _T=800,kT=3;class Vy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hc(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>kT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ha._getInstance(gT()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await pT(),!this.activeServiceWorker)return;this.sender=new dT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||mT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await hc();return await bp(t,sa,"1"),await Ap(t,sa),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>bp(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>wT(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ap(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Va(i,!1).getAll();return new _o(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_T)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vy.type="LOCAL";const ET=Vy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function IT(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=Et("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",ST().appendChild(r)})}function TT(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new yo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(e,t){return t?Ot(t):(O(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf extends Ly{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Nr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Nr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Nr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function CT(e){return rT(e.auth,new Xf(e),e.bypassAuthState)}function bT(e){const{auth:t,user:n}=e;return O(n,t,"internal-error"),nT(n,new Xf(e),e.bypassAuthState)}async function AT(e){const{auth:t,user:n}=e;return O(n,t,"internal-error"),tT(n,new Xf(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return CT;case"linkViaPopup":case"linkViaRedirect":return AT;case"reauthViaPopup":case"reauthViaRedirect":return bT;default:Tt(this.auth,"internal-error")}}resolve(t){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT=new yo(2e3,1e4);class _r extends Gy{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,_r.currentPopupAction&&_r.currentPopupAction.cancel(),_r.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return O(t,this.auth,"internal-error"),t}async onExecution(){Ut(this.filter.length===1,"Popup operations only handle one event");const t=Yf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_r.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Et(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,xT.get())};t()}}_r.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT="pendingRedirect",Ts=new Map;class OT extends Gy{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Ts.get(this.auth._key());if(!t){try{const r=await RT(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ts.set(this.auth._key(),t)}return this.bypassAuthState||Ts.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RT(e,t){const n=Yy(t),r=Ky(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function NT(e,t){return Ky(e)._set(Yy(t),"true")}function DT(e,t){Ts.set(e._key(),t)}function Ky(e){return Ot(e._redirectPersistence)}function Yy(e){return Is(PT,e.config.apiKey,e.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(e,t,n){return LT(e,t,n)}async function LT(e,t,n){const r=Ba(e);TI(e,t,Kf);const i=Wy(r,n);return await NT(i,r),i._openRedirect(r,t,"signInViaRedirect")}async function MT(e,t,n=!1){const r=Ba(e),i=Wy(r,t),s=await new OT(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T=10*60*1e3;class UT{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!FT(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!qy(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Et(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=$T&&this.cachedEventUids.clear(),this.cachedEventUids.has(xp(t))}saveEventToCache(t){this.cachedEventUids.add(xp(t)),this.lastProcessedEventTime=Date.now()}}function xp(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function qy({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function FT(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qy(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jT(e,t={}){return ja(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BT=/^https?/;async function HT(e){if(e.config.emulator)return;const{authorizedDomains:t}=await jT(e);for(const n of t)try{if(VT(n))return}catch{}Tt(e,"unauthorized-domain")}function VT(e){const t=dc(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!BT.test(n))return!1;if(zT.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=new yo(3e4,6e4);function Pp(){const e=St().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function GT(e){return new Promise((t,n)=>{var r,i,o;function s(){Pp(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Pp(),n(Et(e,"network-request-failed"))},timeout:WT.get()})}if(!((i=(r=St().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=St().gapi)===null||o===void 0)&&o.load)s();else{const a=TT("iframefcb");return St()[a]=()=>{gapi.load?s():n(Et(e,"network-request-failed"))},IT(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Cs=null,t})}let Cs=null;function KT(e){return Cs=Cs||GT(e),Cs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT=new yo(5e3,15e3),XT="__/auth/iframe",qT="emulator/auth/iframe",QT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZT(e){const t=e.config;O(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Vf(t,qT):`https://${e.config.authDomain}/${XT}`,r={apiKey:t.apiKey,appName:e.name,v:vo},i=JT.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${go(r).slice(1)}`}async function eC(e){const t=await KT(e),n=St().gapi;return O(n,e,"internal-error"),t.open({where:document.body,url:ZT(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QT,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Et(e,"network-request-failed"),a=St().setTimeout(()=>{o(s)},YT.get());function l(){St().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nC=500,rC=600,iC="_blank",oC="http://localhost";class Op{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sC(e,t,n,r=nC,i=rC){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},tC),{width:r.toString(),height:i.toString(),top:o,left:s}),u=Ce().toLowerCase();n&&(a=by(u)?iC:n),Cy(u)&&(t=t||oC,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[g,v])=>`${h}${g}=${v},`,"");if(GI(u)&&a!=="_self")return aC(t||"",a),new Op(null);const f=window.open(t||"",a,c);O(f,e,"popup-blocked");try{f.focus()}catch{}return new Op(f)}function aC(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC="__/auth/handler",uC="emulator/auth/handler";function Rp(e,t,n,r,i,o){O(e.config.authDomain,e,"auth-domain-config-required"),O(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:vo,eventId:i};if(t instanceof Kf){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Kk(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(t instanceof wo){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${cC(e)}?${go(a).slice(1)}`}function cC({config:e}){return e.emulator?Vf(e,uC):`https://${e.authDomain}/${lC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl="webStorageSupport";class fC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jy,this._completeRedirectFn=MT,this._overrideRedirectResult=DT}async _openPopup(t,n,r,i){var o;Ut((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=Rp(t,n,r,dc(),i);return sC(t,s,Yf())}async _openRedirect(t,n,r,i){return await this._originValidation(t),hT(Rp(t,n,r,dc(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Ut(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await eC(t),r=new UT(t);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Yl,{type:Yl},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Yl];s!==void 0&&n(!!s),Tt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=HT(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ry()||Gf()||za()}}const dC=fC;var Np="@firebase/auth",Dp="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function mC(e){It(new dt("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{O(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),O(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ny(e)},c=new qI(a,l,u);return bI(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),It(new dt("auth-internal",t=>{const n=Ba(t.getProvider("auth").getImmediate());return(r=>new hC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Je(Np,Dp,pC(e)),Je(Np,Dp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC=5*60,vC=Bv("authIdTokenMaxAge")||gC;let Lp=null;const yC=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vC)return;const i=n==null?void 0:n.token;Lp!==i&&(Lp=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function wC(e=$f()){const t=sr(e,"auth");if(t.isInitialized())return t.getImmediate();const n=CI(e,{popupRedirectResolver:dC,persistence:[ET,cT,jy]}),r=Bv("authTokenSyncURL");if(r){const o=yC(r);oT(n,o,()=>o(n.currentUser)),iT(n,s=>o(s))}const i=zv("auth");return i&&QI(n,`http://${i}`),n}mC("Browser");var _C=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A,qf=qf||{},R=_C||self;function la(){}function Wa(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function ko(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function kC(e){return Object.prototype.hasOwnProperty.call(e,Xl)&&e[Xl]||(e[Xl]=++EC)}var Xl="closure_uid_"+(1e9*Math.random()>>>0),EC=0;function SC(e,t,n){return e.call.apply(e.bind,arguments)}function IC(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Se(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Se=SC:Se=IC,Se.apply(null,arguments)}function Zo(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function ye(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(r,i,o){for(var s=Array(arguments.length-2),a=2;a<arguments.length;a++)s[a-2]=arguments[a];return t.prototype[i].apply(r,s)}}function Tn(){this.s=this.s,this.o=this.o}var TC=0;Tn.prototype.s=!1;Tn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),TC!=0)&&kC(this)};Tn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Qy=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Qf(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Mp(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Wa(r)){const i=e.length||0,o=r.length||0;e.length=i+o;for(let s=0;s<o;s++)e[i+s]=r[s]}else e.push(r)}}function Ie(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var CC=function(){if(!R.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{R.addEventListener("test",la,t),R.removeEventListener("test",la,t)}catch{}return e}();function ua(e){return/^[\s\xa0]*$/.test(e)}var $p=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function ql(e,t){return e<t?-1:e>t?1:0}function Ga(){var e=R.navigator;return e&&(e=e.userAgent)?e:""}function yt(e){return Ga().indexOf(e)!=-1}function Jf(e){return Jf[" "](e),e}Jf[" "]=la;function bC(e){var t=PC;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var AC=yt("Opera"),Zi=yt("Trident")||yt("MSIE"),Jy=yt("Edge"),pc=Jy||Zi,Zy=yt("Gecko")&&!(Ga().toLowerCase().indexOf("webkit")!=-1&&!yt("Edge"))&&!(yt("Trident")||yt("MSIE"))&&!yt("Edge"),xC=Ga().toLowerCase().indexOf("webkit")!=-1&&!yt("Edge");function e0(){var e=R.document;return e?e.documentMode:void 0}var mc;e:{var Ql="",Jl=function(){var e=Ga();if(Zy)return/rv:([^\);]+)(\)|;)/.exec(e);if(Jy)return/Edge\/([\d\.]+)/.exec(e);if(Zi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(xC)return/WebKit\/(\S+)/.exec(e);if(AC)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Jl&&(Ql=Jl?Jl[1]:""),Zi){var Zl=e0();if(Zl!=null&&Zl>parseFloat(Ql)){mc=String(Zl);break e}}mc=Ql}var PC={};function OC(){return bC(function(){let e=0;const t=$p(String(mc)).split("."),n=$p("9").split("."),r=Math.max(t.length,n.length);for(let s=0;e==0&&s<r;s++){var i=t[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],i[0].length==0&&o[0].length==0)break;e=ql(i[1].length==0?0:parseInt(i[1],10),o[1].length==0?0:parseInt(o[1],10))||ql(i[2].length==0,o[2].length==0)||ql(i[2],o[2]),i=i[3],o=o[3]}while(e==0)}return 0<=e})}R.document&&Zi&&e0();function eo(e,t){if(Ie.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Zy){e:{try{Jf(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:RC[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&eo.X.h.call(this)}}ye(eo,Ie);var RC={2:"touch",3:"pen",4:"mouse"};eo.prototype.h=function(){eo.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Eo="closure_listenable_"+(1e6*Math.random()|0),NC=0;function DC(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++NC,this.ba=this.ea=!1}function Ka(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Zf(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function t0(e){const t={};for(const n in e)t[n]=e[n];return t}const Up="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function n0(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let o=0;o<Up.length;o++)n=Up[o],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Ya(e){this.src=e,this.g={},this.h=0}Ya.prototype.add=function(e,t,n,r,i){var o=e.toString();e=this.g[o],e||(e=this.g[o]=[],this.h++);var s=vc(e,t,r,i);return-1<s?(t=e[s],n||(t.ea=!1)):(t=new DC(t,this.src,o,!!r,i),t.ea=n,e.push(t)),t};function gc(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=Qy(r,t),o;(o=0<=i)&&Array.prototype.splice.call(r,i,1),o&&(Ka(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function vc(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.ba&&o.listener==t&&o.capture==!!n&&o.ha==r)return i}return-1}var ed="closure_lm_"+(1e6*Math.random()|0),eu={};function r0(e,t,n,r,i){if(r&&r.once)return o0(e,t,n,r,i);if(Array.isArray(t)){for(var o=0;o<t.length;o++)r0(e,t[o],n,r,i);return null}return n=rd(n),e&&e[Eo]?e.N(t,n,ko(r)?!!r.capture:!!r,i):i0(e,t,n,!1,r,i)}function i0(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var s=ko(i)?!!i.capture:!!i,a=nd(e);if(a||(e[ed]=a=new Ya(e)),n=a.add(t,n,r,s,o),n.proxy)return n;if(r=LC(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)CC||(i=s),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(a0(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function LC(){function e(n){return t.call(e.src,e.listener,n)}const t=MC;return e}function o0(e,t,n,r,i){if(Array.isArray(t)){for(var o=0;o<t.length;o++)o0(e,t[o],n,r,i);return null}return n=rd(n),e&&e[Eo]?e.O(t,n,ko(r)?!!r.capture:!!r,i):i0(e,t,n,!0,r,i)}function s0(e,t,n,r,i){if(Array.isArray(t))for(var o=0;o<t.length;o++)s0(e,t[o],n,r,i);else r=ko(r)?!!r.capture:!!r,n=rd(n),e&&e[Eo]?(e=e.i,t=String(t).toString(),t in e.g&&(o=e.g[t],n=vc(o,n,r,i),-1<n&&(Ka(o[n]),Array.prototype.splice.call(o,n,1),o.length==0&&(delete e.g[t],e.h--)))):e&&(e=nd(e))&&(t=e.g[t.toString()],e=-1,t&&(e=vc(t,n,r,i)),(n=-1<e?t[e]:null)&&td(n))}function td(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[Eo])gc(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(a0(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=nd(t))?(gc(n,e),n.h==0&&(n.src=null,t[ed]=null)):Ka(e)}}}function a0(e){return e in eu?eu[e]:eu[e]="on"+e}function MC(e,t){if(e.ba)e=!0;else{t=new eo(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&td(e),e=n.call(r,t)}return e}function nd(e){return e=e[ed],e instanceof Ya?e:null}var tu="__closure_events_fn_"+(1e9*Math.random()>>>0);function rd(e){return typeof e=="function"?e:(e[tu]||(e[tu]=function(t){return e.handleEvent(t)}),e[tu])}function he(){Tn.call(this),this.i=new Ya(this),this.P=this,this.I=null}ye(he,Tn);he.prototype[Eo]=!0;he.prototype.removeEventListener=function(e,t,n,r){s0(this,e,t,n,r)};function ge(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,typeof t=="string")t=new Ie(t,e);else if(t instanceof Ie)t.target=t.target||e;else{var i=t;t=new Ie(r,e),n0(t,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=t.g=n[o];i=es(s,r,!0,t)&&i}if(s=t.g=e,i=es(s,r,!0,t)&&i,i=es(s,r,!1,t)&&i,n)for(o=0;o<n.length;o++)s=t.g=n[o],i=es(s,r,!1,t)&&i}he.prototype.M=function(){if(he.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Ka(n[r]);delete e.g[t],e.h--}}this.I=null};he.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};he.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function es(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.ba&&s.capture==n){var a=s.listener,l=s.ha||s.src;s.ea&&gc(e.i,s),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var id=R.JSON.stringify;function $C(){var e=c0;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class UC{constructor(){this.h=this.g=null}add(t,n){const r=l0.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var l0=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new FC,e=>e.reset());class FC{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function jC(e){R.setTimeout(()=>{throw e},0)}function u0(e,t){yc||zC(),wc||(yc(),wc=!0),c0.add(e,t)}var yc;function zC(){var e=R.Promise.resolve(void 0);yc=function(){e.then(BC)}}var wc=!1,c0=new UC;function BC(){for(var e;e=$C();){try{e.h.call(e.g)}catch(n){jC(n)}var t=l0;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}wc=!1}function Xa(e,t){he.call(this),this.h=e||1,this.g=t||R,this.j=Se(this.lb,this),this.l=Date.now()}ye(Xa,he);A=Xa.prototype;A.ca=!1;A.R=null;A.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ge(this,"tick"),this.ca&&(od(this),this.start()))}};A.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function od(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}A.M=function(){Xa.X.M.call(this),od(this),delete this.g};function sd(e,t,n){if(typeof e=="function")n&&(e=Se(e,n));else if(e&&typeof e.handleEvent=="function")e=Se(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:R.setTimeout(e,t||0)}function f0(e){e.g=sd(()=>{e.g=null,e.i&&(e.i=!1,f0(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class HC extends Tn{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:f0(this)}M(){super.M(),this.g&&(R.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function to(e){Tn.call(this),this.h=e,this.g={}}ye(to,Tn);var Fp=[];function d0(e,t,n,r){Array.isArray(n)||(n&&(Fp[0]=n.toString()),n=Fp);for(var i=0;i<n.length;i++){var o=r0(t,n[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function h0(e){Zf(e.g,function(t,n){this.g.hasOwnProperty(n)&&td(t)},e),e.g={}}to.prototype.M=function(){to.X.M.call(this),h0(this)};to.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function qa(){this.g=!0}qa.prototype.Aa=function(){this.g=!1};function VC(e,t,n,r,i,o){e.info(function(){if(e.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");s=2<=f.length&&f[1]=="type"?s+(c+"="+u+"&"):s+(c+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+s})}function WC(e,t,n,r,i,o,s){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+o+" "+s})}function kr(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+KC(e,n)+(r?" "+r:"")})}function GC(e,t){e.info(function(){return"TIMEOUT: "+t})}qa.prototype.info=function(){};function KC(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if(o!="noop"&&o!="stop"&&o!="close")for(var s=1;s<i.length;s++)i[s]=""}}}}return id(n)}catch{return t}}var qr={},jp=null;function ad(){return jp=jp||new he}qr.Pa="serverreachability";function p0(e){Ie.call(this,qr.Pa,e)}ye(p0,Ie);function no(e){const t=ad();ge(t,new p0(t))}qr.STAT_EVENT="statevent";function m0(e,t){Ie.call(this,qr.STAT_EVENT,e),this.stat=t}ye(m0,Ie);function Ae(e){const t=ad();ge(t,new m0(t,e))}qr.Qa="timingevent";function g0(e,t){Ie.call(this,qr.Qa,e),this.size=t}ye(g0,Ie);function So(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return R.setTimeout(function(){e()},t)}var ld={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},YC={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ud(){}ud.prototype.h=null;function zp(e){return e.h||(e.h=e.i())}function XC(){}var Io={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function cd(){Ie.call(this,"d")}ye(cd,Ie);function fd(){Ie.call(this,"c")}ye(fd,Ie);var _c;function Qa(){}ye(Qa,ud);Qa.prototype.g=function(){return new XMLHttpRequest};Qa.prototype.i=function(){return{}};_c=new Qa;function To(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new to(this),this.O=qC,e=pc?125:void 0,this.T=new Xa(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new v0}function v0(){this.i=null,this.g="",this.h=!1}var qC=45e3,kc={},ca={};A=To.prototype;A.setTimeout=function(e){this.O=e};function Ec(e,t,n){e.K=1,e.v=Za(Ft(t)),e.s=n,e.P=!0,y0(e,null)}function y0(e,t){e.F=Date.now(),Co(e),e.A=Ft(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),C0(n.i,"t",r),e.C=0,n=e.l.H,e.h=new v0,e.g=K0(e.l,n?t:null,!e.s),0<e.N&&(e.L=new HC(Se(e.La,e,e.g),e.N)),d0(e.S,e.g,"readystatechange",e.ib),t=e.H?t0(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),no(),VC(e.j,e.u,e.A,e.m,e.U,e.s)}A.ib=function(e){e=e.target;const t=this.L;t&&Rt(e)==3?t.l():this.La(e)};A.La=function(e){try{if(e==this.g)e:{const c=Rt(this.g);var t=this.g.Ea();const f=this.g.aa();if(!(3>c)&&(c!=3||pc||this.g&&(this.h.h||this.g.fa()||Wp(this.g)))){this.I||c!=4||t==7||(t==8||0>=f?no(3):no(2)),Ja(this);var n=this.g.aa();this.Y=n;t:if(w0(this)){var r=Wp(this.g);e="";var i=r.length,o=Rt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$n(this),xi(this);var s="";break t}this.h.i=new R.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:o&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.fa();if(this.i=n==200,WC(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ua(a)){var u=a;break t}}u=null}if(n=u)kr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Sc(this,n);else{this.i=!1,this.o=3,Ae(12),$n(this),xi(this);break e}}this.P?(_0(this,c,s),pc&&this.i&&c==3&&(d0(this.S,this.T,"tick",this.hb),this.T.start())):(kr(this.j,this.m,s,null),Sc(this,s)),c==4&&$n(this),this.i&&!this.I&&(c==4?H0(this.l,this):(this.i=!1,Co(this)))}else n==400&&0<s.indexOf("Unknown SID")?(this.o=3,Ae(12)):(this.o=0,Ae(13)),$n(this),xi(this)}}}catch{}finally{}};function w0(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function _0(e,t,n){let r=!0,i;for(;!e.I&&e.C<n.length;)if(i=QC(e,n),i==ca){t==4&&(e.o=4,Ae(14),r=!1),kr(e.j,e.m,null,"[Incomplete Response]");break}else if(i==kc){e.o=4,Ae(15),kr(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else kr(e.j,e.m,i,null),Sc(e,i);w0(e)&&i!=ca&&i!=kc&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Ae(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),yd(t),t.K=!0,Ae(11))):(kr(e.j,e.m,n,"[Invalid Chunked Response]"),$n(e),xi(e))}A.hb=function(){if(this.g){var e=Rt(this.g),t=this.g.fa();this.C<t.length&&(Ja(this),_0(this,e,t),this.i&&e!=4&&Co(this))}};function QC(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?ca:(n=Number(t.substring(n,r)),isNaN(n)?kc:(r+=1,r+n>t.length?ca:(t=t.substr(r,n),e.C=r+n,t)))}A.cancel=function(){this.I=!0,$n(this)};function Co(e){e.V=Date.now()+e.O,k0(e,e.O)}function k0(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=So(Se(e.gb,e),t)}function Ja(e){e.B&&(R.clearTimeout(e.B),e.B=null)}A.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(GC(this.j,this.A),this.K!=2&&(no(),Ae(17)),$n(this),this.o=2,xi(this)):k0(this,this.V-e)};function xi(e){e.l.G==0||e.I||H0(e.l,e)}function $n(e){Ja(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,od(e.T),h0(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Sc(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Ic(n.h,e))){if(!e.J&&Ic(n.h,e)&&n.G==3){try{var r=n.Fa.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)ha(n),rl(n);else break e;vd(n),Ae(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=So(Se(n.cb,n),6e3));if(1>=x0(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Un(n,11)}else if((e.J||n.g==e)&&ha(n),!ua(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const f=u[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=e.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var o=r.h;o.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(o.j=o.l,o.g=new Set,o.h&&(dd(o,o.h),o.h=null))}if(r.D){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.za=w,X(r.F,r.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var s=e;if(r.sa=G0(r,r.H?r.ka:null,r.V),s.J){P0(r.h,s);var a=s,l=r.J;l&&a.setTimeout(l),a.B&&(Ja(a),Co(a)),r.g=s}else z0(r);0<n.i.length&&il(n)}else u[0]!="stop"&&u[0]!="close"||Un(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Un(n,7):gd(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}no(4)}catch{}}function JC(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Wa(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function ZC(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Wa(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function E0(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Wa(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=ZC(e),r=JC(e),i=r.length,o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}var S0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eb(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Vn(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Vn){this.h=t!==void 0?t:e.h,fa(this,e.j),this.s=e.s,this.g=e.g,da(this,e.m),this.l=e.l,t=e.i;var n=new ro;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Bp(this,n),this.o=e.o}else e&&(n=String(e).match(S0))?(this.h=!!t,fa(this,n[1]||"",!0),this.s=mi(n[2]||""),this.g=mi(n[3]||"",!0),da(this,n[4]),this.l=mi(n[5]||"",!0),Bp(this,n[6]||"",!0),this.o=mi(n[7]||"")):(this.h=!!t,this.i=new ro(null,this.h))}Vn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(gi(t,Hp,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(gi(t,Hp,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(gi(n,n.charAt(0)=="/"?rb:nb,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",gi(n,ob)),e.join("")};function Ft(e){return new Vn(e)}function fa(e,t,n){e.j=n?mi(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function da(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Bp(e,t,n){t instanceof ro?(e.i=t,sb(e.i,e.h)):(n||(t=gi(t,ib)),e.i=new ro(t,e.h))}function X(e,t,n){e.i.set(t,n)}function Za(e){return X(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function mi(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function gi(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,tb),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function tb(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Hp=/[#\/\?@]/g,nb=/[#\?:]/g,rb=/[#\?]/g,ib=/[#\?@]/g,ob=/#/g;function ro(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Cn(e){e.g||(e.g=new Map,e.h=0,e.i&&eb(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}A=ro.prototype;A.add=function(e,t){Cn(this),this.i=null,e=Qr(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function I0(e,t){Cn(e),t=Qr(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function T0(e,t){return Cn(e),t=Qr(e,t),e.g.has(t)}A.forEach=function(e,t){Cn(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};A.oa=function(){Cn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let o=0;o<i.length;o++)n.push(t[r])}return n};A.W=function(e){Cn(this);let t=[];if(typeof e=="string")T0(this,e)&&(t=t.concat(this.g.get(Qr(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};A.set=function(e,t){return Cn(this),this.i=null,e=Qr(this,e),T0(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};A.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function C0(e,t,n){I0(e,t),0<n.length&&(e.i=null,e.g.set(Qr(e,t),Qf(n)),e.h+=n.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const o=encodeURIComponent(String(r)),s=this.W(r);for(r=0;r<s.length;r++){var i=o;s[r]!==""&&(i+="="+encodeURIComponent(String(s[r]))),e.push(i)}}return this.i=e.join("&")};function Qr(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function sb(e,t){t&&!e.j&&(Cn(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(I0(this,r),C0(this,i,n))},e)),e.j=t}var ab=class{constructor(e,t){this.h=e,this.g=t}};function b0(e){this.l=e||lb,R.PerformanceNavigationTiming?(e=R.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(R.g&&R.g.Ga&&R.g.Ga()&&R.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var lb=10;function A0(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function x0(e){return e.h?1:e.g?e.g.size:0}function Ic(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function dd(e,t){e.g?e.g.add(t):e.h=t}function P0(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}b0.prototype.cancel=function(){if(this.i=O0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function O0(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Qf(e.i)}function hd(){}hd.prototype.stringify=function(e){return R.JSON.stringify(e,void 0)};hd.prototype.parse=function(e){return R.JSON.parse(e,void 0)};function ub(){this.g=new hd}function cb(e,t,n){const r=n||"";try{E0(e,function(i,o){let s=i;ko(i)&&(s=id(i)),t.push(r+o+"="+encodeURIComponent(s))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function fb(e,t){const n=new qa;if(R.Image){const r=new Image;r.onload=Zo(ts,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Zo(ts,n,r,"TestLoadImage: error",!1,t),r.onabort=Zo(ts,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Zo(ts,n,r,"TestLoadImage: timeout",!1,t),R.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function ts(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function el(e){this.l=e.ac||null,this.j=e.jb||!1}ye(el,ud);el.prototype.g=function(){return new tl(this.l,this.j)};el.prototype.i=function(e){return function(){return e}}({});function tl(e,t){he.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=pd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ye(tl,he);var pd=0;A=tl.prototype;A.open=function(e,t){if(this.readyState!=pd)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,io(this)};A.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||R).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bo(this)),this.readyState=pd};A.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,io(this)),this.g&&(this.readyState=3,io(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof R.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;R0(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function R0(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}A.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?bo(this):io(this),this.readyState==3&&R0(this)}};A.Va=function(e){this.g&&(this.response=this.responseText=e,bo(this))};A.Ua=function(e){this.g&&(this.response=e,bo(this))};A.ga=function(){this.g&&bo(this)};function bo(e){e.readyState=4,e.l=null,e.j=null,e.A=null,io(e)}A.setRequestHeader=function(e,t){this.v.append(e,t)};A.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function io(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(tl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var db=R.JSON.parse;function oe(e){he.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=N0,this.K=this.L=!1}ye(oe,he);var N0="",hb=/^https?$/i,pb=["POST","PUT"];A=oe.prototype;A.Ka=function(e){this.L=e};A.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():_c.g(),this.C=this.u?zp(this.u):zp(_c),this.g.onreadystatechange=Se(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(o){Vp(this,o);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const o of r.keys())n.set(o,r.get(o));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(o=>o.toLowerCase()=="content-type"),i=R.FormData&&e instanceof R.FormData,!(0<=Qy(pb,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,s]of n)this.g.setRequestHeader(o,s);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{M0(this),0<this.B&&((this.K=mb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Se(this.qa,this)):this.A=sd(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(o){Vp(this,o)}};function mb(e){return Zi&&OC()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}A.qa=function(){typeof qf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ge(this,"timeout"),this.abort(8))};function Vp(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,D0(e),nl(e)}function D0(e){e.D||(e.D=!0,ge(e,"complete"),ge(e,"error"))}A.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ge(this,"complete"),ge(this,"abort"),nl(this))};A.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),nl(this,!0)),oe.X.M.call(this)};A.Ha=function(){this.s||(this.F||this.v||this.l?L0(this):this.fb())};A.fb=function(){L0(this)};function L0(e){if(e.h&&typeof qf<"u"&&(!e.C[1]||Rt(e)!=4||e.aa()!=2)){if(e.v&&Rt(e)==4)sd(e.Ha,0,e);else if(ge(e,"readystatechange"),Rt(e)==4){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=a===0){var i=String(e.H).match(S0)[1]||null;if(!i&&R.self&&R.self.location){var o=R.self.location.protocol;i=o.substr(0,o.length-1)}r=!hb.test(i?i.toLowerCase():"")}n=r}if(n)ge(e,"complete"),ge(e,"success");else{e.m=6;try{var s=2<Rt(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.aa()+"]",D0(e)}}finally{nl(e)}}}}function nl(e,t){if(e.g){M0(e);const n=e.g,r=e.C[0]?la:null;e.g=null,e.C=null,t||ge(e,"ready");try{n.onreadystatechange=r}catch{}}}function M0(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(R.clearTimeout(e.A),e.A=null)}function Rt(e){return e.g?e.g.readyState:0}A.aa=function(){try{return 2<Rt(this)?this.g.status:-1}catch{return-1}};A.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),db(t)}};function Wp(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case N0:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}A.Ea=function(){return this.m};A.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function $0(e){let t="";return Zf(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function md(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=$0(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):X(e,t,n))}function ci(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function U0(e){this.Ca=0,this.i=[],this.j=new qa,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ci("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ci("baseRetryDelayMs",5e3,e),this.bb=ci("retryDelaySeedMs",1e4,e),this.$a=ci("forwardChannelMaxRetries",2,e),this.ta=ci("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new b0(e&&e.concurrentRequestLimit),this.Fa=new ub,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}A=U0.prototype;A.ma=8;A.G=1;function gd(e){if(F0(e),e.G==3){var t=e.U++,n=Ft(e.F);X(n,"SID",e.I),X(n,"RID",t),X(n,"TYPE","terminate"),Ao(e,n),t=new To(e,e.j,t,void 0),t.K=2,t.v=Za(Ft(n)),n=!1,R.navigator&&R.navigator.sendBeacon&&(n=R.navigator.sendBeacon(t.v.toString(),"")),!n&&R.Image&&(new Image().src=t.v,n=!0),n||(t.g=K0(t.l,null),t.g.da(t.v)),t.F=Date.now(),Co(t)}W0(e)}function rl(e){e.g&&(yd(e),e.g.cancel(),e.g=null)}function F0(e){rl(e),e.u&&(R.clearTimeout(e.u),e.u=null),ha(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&R.clearTimeout(e.m),e.m=null)}function il(e){A0(e.h)||e.m||(e.m=!0,u0(e.Ja,e),e.C=0)}function gb(e,t){return x0(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=So(Se(e.Ja,e,t),V0(e,e.C)),e.C++,!0)}A.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new To(this,this.j,e,void 0);let o=this.s;if(this.S&&(o?(o=t0(o),n0(o,this.S)):o=this.S),this.o!==null||this.N||(i.H=o,o=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=j0(this,i,t),n=Ft(this.F),X(n,"RID",e),X(n,"CVER",22),this.D&&X(n,"X-HTTP-Session-Id",this.D),Ao(this,n),o&&(this.N?t="headers="+encodeURIComponent(String($0(o)))+"&"+t:this.o&&md(n,this.o,o)),dd(this.h,i),this.Ya&&X(n,"TYPE","init"),this.O?(X(n,"$req",t),X(n,"SID","null"),i.Z=!0,Ec(i,n,null)):Ec(i,n,t),this.G=2}}else this.G==3&&(e?Gp(this,e):this.i.length==0||A0(this.h)||Gp(this))};function Gp(e,t){var n;t?n=t.m:n=e.U++;const r=Ft(e.F);X(r,"SID",e.I),X(r,"RID",n),X(r,"AID",e.T),Ao(e,r),e.o&&e.s&&md(r,e.o,e.s),n=new To(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=j0(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),dd(e.h,n),Ec(n,r,t)}function Ao(e,t){e.ia&&Zf(e.ia,function(n,r){X(t,r,n)}),e.l&&E0({},function(n,r){X(t,r,n)})}function j0(e,t,n){n=Math.min(e.i.length,n);var r=e.l?Se(e.l.Ra,e.l,e):null;e:{var i=e.i;let o=-1;for(;;){const s=["count="+n];o==-1?0<n?(o=i[0].h,s.push("ofs="+o)):o=0:s.push("ofs="+o);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=o,0>u)o=Math.max(0,i[l].h-100),a=!1;else try{cb(c,s,"req"+u+"_")}catch{r&&r(c)}}if(a){r=s.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function z0(e){e.g||e.u||(e.Z=1,u0(e.Ia,e),e.A=0)}function vd(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=So(Se(e.Ia,e),V0(e,e.A)),e.A++,!0)}A.Ia=function(){if(this.u=null,B0(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=So(Se(this.eb,this),e)}};A.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ae(10),rl(this),B0(this))};function yd(e){e.B!=null&&(R.clearTimeout(e.B),e.B=null)}function B0(e){e.g=new To(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=Ft(e.sa);X(t,"RID","rpc"),X(t,"SID",e.I),X(t,"CI",e.L?"0":"1"),X(t,"AID",e.T),X(t,"TYPE","xmlhttp"),Ao(e,t),e.o&&e.s&&md(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Za(Ft(t)),n.s=null,n.P=!0,y0(n,e)}A.cb=function(){this.v!=null&&(this.v=null,rl(this),vd(this),Ae(19))};function ha(e){e.v!=null&&(R.clearTimeout(e.v),e.v=null)}function H0(e,t){var n=null;if(e.g==t){ha(e),yd(e),e.g=null;var r=2}else if(Ic(e.h,t))n=t.D,P0(e.h,t),r=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=ad(),ge(r,new g0(r,n)),il(e)}else z0(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(r==1&&gb(e,t)||r==2&&vd(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Un(e,5);break;case 4:Un(e,10);break;case 3:Un(e,6);break;default:Un(e,2)}}}function V0(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Un(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var r=Se(e.kb,e);n||(n=new Vn("//www.google.com/images/cleardot.gif"),R.location&&R.location.protocol=="http"||fa(n,"https"),Za(n)),fb(n.toString(),r)}else Ae(2);e.G=0,e.l&&e.l.va(t),W0(e),F0(e)}A.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Ae(2)):(this.j.info("Failed to ping google.com"),Ae(1))};function W0(e){if(e.G=0,e.la=[],e.l){const t=O0(e.h);(t.length!=0||e.i.length!=0)&&(Mp(e.la,t),Mp(e.la,e.i),e.h.i.length=0,Qf(e.i),e.i.length=0),e.l.ua()}}function G0(e,t,n){var r=n instanceof Vn?Ft(n):new Vn(n,void 0);if(r.g!="")t&&(r.g=t+"."+r.g),da(r,r.m);else{var i=R.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var o=new Vn(null,void 0);r&&fa(o,r),t&&(o.g=t),i&&da(o,i),n&&(o.l=n),r=o}return n=e.D,t=e.za,n&&t&&X(r,n,t),X(r,"VER",e.ma),Ao(e,r),r}function K0(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new oe(new el({jb:!0})):new oe(e.ra),t.Ka(e.H),t}function Y0(){}A=Y0.prototype;A.xa=function(){};A.wa=function(){};A.va=function(){};A.ua=function(){};A.Ra=function(){};function nt(e,t){he.call(this),this.g=new U0(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!ua(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ua(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Jr(this)}ye(nt,he);nt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Ae(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=G0(e,null,e.V),il(e)};nt.prototype.close=function(){gd(this.g)};nt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=id(e),e=n);t.i.push(new ab(t.ab++,e)),t.G==3&&il(t)};nt.prototype.M=function(){this.g.l=null,delete this.j,gd(this.g),delete this.g,nt.X.M.call(this)};function X0(e){cd.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}ye(X0,cd);function q0(){fd.call(this),this.status=1}ye(q0,fd);function Jr(e){this.g=e}ye(Jr,Y0);Jr.prototype.xa=function(){ge(this.g,"a")};Jr.prototype.wa=function(e){ge(this.g,new X0(e))};Jr.prototype.va=function(e){ge(this.g,new q0)};Jr.prototype.ua=function(){ge(this.g,"b")};nt.prototype.send=nt.prototype.u;nt.prototype.open=nt.prototype.m;nt.prototype.close=nt.prototype.close;ld.NO_ERROR=0;ld.TIMEOUT=8;ld.HTTP_ERROR=6;YC.COMPLETE="complete";XC.EventType=Io;Io.OPEN="a";Io.CLOSE="b";Io.ERROR="c";Io.MESSAGE="d";he.prototype.listen=he.prototype.N;oe.prototype.listenOnce=oe.prototype.O;oe.prototype.getLastError=oe.prototype.Oa;oe.prototype.getLastErrorCode=oe.prototype.Ea;oe.prototype.getStatus=oe.prototype.aa;oe.prototype.getResponseJson=oe.prototype.Sa;oe.prototype.getResponseText=oe.prototype.fa;oe.prototype.send=oe.prototype.da;oe.prototype.setWithCredentials=oe.prototype.Ka;const Kp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ke.UNAUTHENTICATED=new ke(null),ke.GOOGLE_CREDENTIALS=new ke("google-credentials-uid"),ke.FIRST_PARTY=new ke("first-party-uid"),ke.MOCK_USER=new ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xo="9.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new $a("@firebase/firestore");function Fe(e,...t){if(Wr.logLevel<=z.DEBUG){const n=t.map(_d);Wr.debug(`Firestore (${xo}): ${e}`,...n)}}function wd(e,...t){if(Wr.logLevel<=z.ERROR){const n=t.map(_d);Wr.error(`Firestore (${xo}): ${e}`,...n)}}function vb(e,...t){if(Wr.logLevel<=z.WARN){const n=t.map(_d);Wr.warn(`Firestore (${xo}): ${e}`,...n)}}function _d(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(e="Unexpected state"){const t=`FIRESTORE (${xo}) INTERNAL ASSERTION FAILED: `+e;throw wd(t),new Error(t)}function pa(e,t){e||kd()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class He extends ht{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class yb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ke.UNAUTHENTICATED))}shutdown(){}}class wb{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _b{constructor(t){this.t=t,this.currentUser=ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let o=new Dr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Dr,t.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const l=o;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Dr)}},0),s()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(Fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(pa(typeof r.accessToken=="string"),new Q0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return pa(t===null||typeof t=="string"),new ke(t)}}class kb{constructor(t,n,r,i){this.h=t,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=ke.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(pa(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Eb{constructor(t,n,r,i){this.h=t,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new kb(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Sb{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ib{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const r=o=>{o.error!=null&&Fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.A;return this.A=o.token,Fe("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{Fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.T.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.T.getImmediate({optional:!0});o?i(o):Fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(pa(typeof n.token=="string"),this.A=n.token,new Sb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Tb(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=t.charAt(i[o]%t.length))}return r}}function J0(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(t,n,r,i,o,s,a,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class ma{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ma("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ma&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yp,F;(F=Yp||(Yp={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";function nu(){return typeof document<"u"?document:null}class Ab{constructor(t,n,r=1e3,i=1.5,o=6e4){this.Hs=t,this.timerId=n,this.mo=r,this.yo=i,this.po=o,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&Fe("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(t,n,r,i,o){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Dr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}static createAndSchedule(t,n,r,i,o){const s=Date.now()+r,a=new Ed(t,n,s,i,o);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new He(Be.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xb(e,t){if(wd("AsyncQueue",`${t}: ${e}`),J0(e))return new He(Be.UNAVAILABLE,`${t}: ${e}`);throw e}function Pb(e,t,n,r){if(t===!0&&r===!0)throw new He(Be.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ob(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":kd()}function Rb(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new He(Be.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ob(e);throw new He(Be.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp=new Map;class qp{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new He(Be.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new He(Be.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Pb("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new He(Be.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new He(Be.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qp(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new yb;switch(n.type){case"gapi":const r=n.client;return new Eb(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new He(Be.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Xp.get(t);n&&(Fe("ComponentProvider","Removing Datastore"),Xp.delete(t),n.terminate())}(this),Promise.resolve()}}function Nb(e,t,n,r={}){var i;const o=(e=Rb(e,Z0))._getSettings();if(o.host!=="firestore.googleapis.com"&&o.host!==t&&vb("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},o),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let s,a;if(typeof r.mockUserToken=="string")s=r.mockUserToken,a=ke.MOCK_USER;else{s=Hk(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new He(Be.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ke(l)}e._authCredentials=new wb(new Q0(s,a))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ke.UNAUTHENTICATED,this.clientId=Cb.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{Fe("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Fe("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new He(Be.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Dr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=xb(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}class Lb{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Ab(this,"async_queue_retry"),this.Wc=()=>{const n=nu();n&&Fe("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const t=nu();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const n=nu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Dr;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!J0(t))throw t;Fe("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(o){let s=o.message||"";return o.stack&&(s=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),s}(r);throw wd("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(t,n,r){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const i=Ed.createAndSchedule(this,t,n,r,o=>this.Yc(o));return this.Uc.push(i),i}zc(){this.Kc&&kd()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.Uc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.Uc.indexOf(t);this.Uc.splice(n,1)}}class Mb extends Z0{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new Lb,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ub(this),this._firestoreClient.terminate()}}function $b(e,t){const n=typeof e=="object"?e:$f(),r=typeof e=="string"?e:t||"(default)",i=sr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=jk("firestore");o&&Nb(i,...o)}return i}function Ub(e){var t;const n=e._freezeSettings(),r=function(i,o,s,a){return new bb(i,o,s,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Db(e._authCredentials,e._appCheckCredentials,e._queue,r)}(function(e,t=!0){(function(n){xo=n})(vo),It(new dt("firestore",(n,{instanceIdentifier:r,options:i})=>{const o=n.getProvider("app").getImmediate(),s=new Mb(new _b(n.getProvider("auth-internal")),new Ib(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new He(Be.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ma(a.options.projectId,l)}(o,r),o);return i=Object.assign({useFetchStreams:t},i),s._setSettings(i),s},"PUBLIC").setMultipleInstances(!0)),Je(Kp,"3.8.0",e),Je(Kp,"3.8.0","esm2017")})();const Fb={apiKey:"AIzaSyDz04nBEbZ1KR-F2MVLUPLItJBYdrR6byI",authDomain:"farmers-say.firebaseapp.com",projectId:"farmers-say",storageBucket:"farmers-say.appspot.com",messagingSenderId:"23878965921",appId:"1:23878965921:web:4e4c4730537a442ee52ee0",measurementId:"G-BYXEC5X69Q"},Sd=Gv(Fb);_I(Sd);const Lr=wC(Sd);$b(Sd);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function jb(e,t,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(c){try{u(r.next(c))}catch(f){s(f)}}function l(c){try{u(r.throw(c))}catch(f){s(f)}}function u(c){c.done?o(c.value):i(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})}function zb(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(c){u=[6,c],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Er=function(){return Er=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Er.apply(this,arguments)},e1=function(e){return{loading:e==null,value:e}},Bb=function(){return function(e,t){switch(t.type){case"error":return Er(Er({},e),{error:t.error,loading:!1,value:void 0});case"reset":return e1(t.defaultValue);case"value":return Er(Er({},e),{error:void 0,loading:!1,value:t.value});default:return e}}},Hb=function(e){var t=e?e():void 0,n=Q.useReducer(Bb(),e1(t)),r=n[0],i=n[1],o=Q.useCallback(function(){var l=e?e():void 0;i({type:"reset",defaultValue:l})},[e]),s=Q.useCallback(function(l){i({type:"error",error:l})},[]),a=Q.useCallback(function(l){i({type:"value",value:l})},[]);return Q.useMemo(function(){return{error:r.error,loading:r.loading,reset:o,setError:s,setValue:a,value:r.value}},[r.error,r.loading,o,s,a,r.value])},Id=function(e,t){var n=Hb(function(){return e.currentUser}),r=n.error,i=n.loading,o=n.setError,s=n.setValue,a=n.value;return Q.useEffect(function(){var l=sT(e,function(u){return jb(void 0,void 0,void 0,function(){var c;return zb(this,function(f){switch(f.label){case 0:if(!(t!=null&&t.onUserChanged))return[3,4];f.label=1;case 1:return f.trys.push([1,3,,4]),[4,t.onUserChanged(u)];case 2:return f.sent(),[3,4];case 3:return c=f.sent(),o(c),[3,4];case 4:return s(u),[2]}})})},o);return function(){l()}},[e]),[a,i,r]};function Qp(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qp(Object(n),!0).forEach(function(r){ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qp(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ga(e){return ga=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ga(e)}function Vb(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Jp(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Wb(e,t,n){return t&&Jp(e.prototype,t),n&&Jp(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Td(e,t){return Kb(e)||Xb(e,t)||t1(e,t)||Qb()}function Po(e){return Gb(e)||Yb(e)||t1(e)||qb()}function Gb(e){if(Array.isArray(e))return Tc(e)}function Kb(e){if(Array.isArray(e))return e}function Yb(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Xb(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,a;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));i=!0);}catch(l){o=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw a}}return r}}function t1(e,t){if(e){if(typeof e=="string")return Tc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tc(e,t)}}function Tc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function qb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Zp=function(){},Cd={},n1={},r1=null,i1={mark:Zp,measure:Zp};try{typeof window<"u"&&(Cd=window),typeof document<"u"&&(n1=document),typeof MutationObserver<"u"&&(r1=MutationObserver),typeof performance<"u"&&(i1=performance)}catch{}var Jb=Cd.navigator||{},em=Jb.userAgent,tm=em===void 0?"":em,wn=Cd,K=n1,nm=r1,ns=i1;wn.document;var Wt=!!K.documentElement&&!!K.head&&typeof K.addEventListener=="function"&&typeof K.createElement=="function",o1=~tm.indexOf("MSIE")||~tm.indexOf("Trident/"),rs,is,os,ss,as,jt="___FONT_AWESOME___",Cc=16,s1="fa",a1="svg-inline--fa",tr="data-fa-i2svg",bc="data-fa-pseudo-element",Zb="data-fa-pseudo-element-pending",bd="data-prefix",Ad="data-icon",rm="fontawesome-i2svg",eA="async",tA=["HTML","HEAD","STYLE","SCRIPT"],l1=function(){try{return!0}catch{return!1}}(),W="classic",ne="sharp",xd=[W,ne];function Oo(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[W]}})}var oo=Oo((rs={},ue(rs,W,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ue(rs,ne,{fa:"solid",fass:"solid","fa-solid":"solid"}),rs)),so=Oo((is={},ue(is,W,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ue(is,ne,{solid:"fass"}),is)),ao=Oo((os={},ue(os,W,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ue(os,ne,{fass:"fa-solid"}),os)),nA=Oo((ss={},ue(ss,W,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ue(ss,ne,{"fa-solid":"fass"}),ss)),rA=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,u1="fa-layers-text",iA=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,oA=Oo((as={},ue(as,W,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ue(as,ne,{900:"fass"}),as)),c1=[1,2,3,4,5,6,7,8,9,10],sA=c1.concat([11,12,13,14,15,16,17,18,19,20]),aA=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Fn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},lo=new Set;Object.keys(so[W]).map(lo.add.bind(lo));Object.keys(so[ne]).map(lo.add.bind(lo));var lA=[].concat(xd,Po(lo),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Fn.GROUP,Fn.SWAP_OPACITY,Fn.PRIMARY,Fn.SECONDARY]).concat(c1.map(function(e){return"".concat(e,"x")})).concat(sA.map(function(e){return"w-".concat(e)})),Pi=wn.FontAwesomeConfig||{};function uA(e){var t=K.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function cA(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(K&&typeof K.querySelector=="function"){var fA=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];fA.forEach(function(e){var t=Td(e,2),n=t[0],r=t[1],i=cA(uA(n));i!=null&&(Pi[r]=i)})}var f1={styleDefault:"solid",familyDefault:"classic",cssPrefix:s1,replacementClass:a1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Pi.familyPrefix&&(Pi.cssPrefix=Pi.familyPrefix);var Gr=I(I({},f1),Pi);Gr.autoReplaceSvg||(Gr.observeMutations=!1);var b={};Object.keys(f1).forEach(function(e){Object.defineProperty(b,e,{enumerable:!0,set:function(n){Gr[e]=n,Oi.forEach(function(r){return r(b)})},get:function(){return Gr[e]}})});Object.defineProperty(b,"familyPrefix",{enumerable:!0,set:function(t){Gr.cssPrefix=t,Oi.forEach(function(n){return n(b)})},get:function(){return Gr.cssPrefix}});wn.FontAwesomeConfig=b;var Oi=[];function dA(e){return Oi.push(e),function(){Oi.splice(Oi.indexOf(e),1)}}var Yt=Cc,wt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function hA(e){if(!(!e||!Wt)){var t=K.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=K.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return K.head.insertBefore(t,r),e}}var pA="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function uo(){for(var e=12,t="";e-- >0;)t+=pA[Math.random()*62|0];return t}function Zr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Pd(e){return e.classList?Zr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function d1(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function mA(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(d1(e[n]),'" ')},"").trim()}function ol(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Od(e){return e.size!==wt.size||e.x!==wt.x||e.y!==wt.y||e.rotate!==wt.rotate||e.flipX||e.flipY}function gA(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function vA(e){var t=e.transform,n=e.width,r=n===void 0?Cc:n,i=e.height,o=i===void 0?Cc:i,s=e.startCentered,a=s===void 0?!1:s,l="";return a&&o1?l+="translate(".concat(t.x/Yt-r/2,"em, ").concat(t.y/Yt-o/2,"em) "):a?l+="translate(calc(-50% + ".concat(t.x/Yt,"em), calc(-50% + ").concat(t.y/Yt,"em)) "):l+="translate(".concat(t.x/Yt,"em, ").concat(t.y/Yt,"em) "),l+="scale(".concat(t.size/Yt*(t.flipX?-1:1),", ").concat(t.size/Yt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var yA=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function h1(){var e=s1,t=a1,n=b.cssPrefix,r=b.replacementClass,i=yA;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var im=!1;function ru(){b.autoAddCss&&!im&&(hA(h1()),im=!0)}var wA={mixout:function(){return{dom:{css:h1,insertCss:ru}}},hooks:function(){return{beforeDOMElementCreation:function(){ru()},beforeI2svg:function(){ru()}}}},zt=wn||{};zt[jt]||(zt[jt]={});zt[jt].styles||(zt[jt].styles={});zt[jt].hooks||(zt[jt].hooks={});zt[jt].shims||(zt[jt].shims=[]);var lt=zt[jt],p1=[],_A=function e(){K.removeEventListener("DOMContentLoaded",e),va=1,p1.map(function(t){return t()})},va=!1;Wt&&(va=(K.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(K.readyState),va||K.addEventListener("DOMContentLoaded",_A));function kA(e){Wt&&(va?setTimeout(e,0):p1.push(e))}function Ro(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?d1(e):"<".concat(t," ").concat(mA(r),">").concat(o.map(Ro).join(""),"</").concat(t,">")}function om(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var EA=function(t,n){return function(r,i,o,s){return t.call(n,r,i,o,s)}},iu=function(t,n,r,i){var o=Object.keys(t),s=o.length,a=i!==void 0?EA(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[o[0]]):(l=0,c=r);l<s;l++)u=o[l],c=a(c,t[u],u,t);return c};function SA(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Ac(e){var t=SA(e);return t.length===1?t[0].toString(16):null}function IA(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function sm(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function xc(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=sm(t);typeof lt.hooks.addPack=="function"&&!i?lt.hooks.addPack(e,sm(t)):lt.styles[e]=I(I({},lt.styles[e]||{}),o),e==="fas"&&xc("fa",t)}var ls,us,cs,Sr=lt.styles,TA=lt.shims,CA=(ls={},ue(ls,W,Object.values(ao[W])),ue(ls,ne,Object.values(ao[ne])),ls),Rd=null,m1={},g1={},v1={},y1={},w1={},bA=(us={},ue(us,W,Object.keys(oo[W])),ue(us,ne,Object.keys(oo[ne])),us);function AA(e){return~lA.indexOf(e)}function xA(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!AA(i)?i:null}var _1=function(){var t=function(o){return iu(Sr,function(s,a,l){return s[l]=iu(a,o,{}),s},{})};m1=t(function(i,o,s){if(o[3]&&(i[o[3]]=s),o[2]){var a=o[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=s})}return i}),g1=t(function(i,o,s){if(i[s]=s,o[2]){var a=o[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=s})}return i}),w1=t(function(i,o,s){var a=o[2];return i[s]=s,a.forEach(function(l){i[l]=s}),i});var n="far"in Sr||b.autoFetchSvg,r=iu(TA,function(i,o){var s=o[0],a=o[1],l=o[2];return a==="far"&&!n&&(a="fas"),typeof s=="string"&&(i.names[s]={prefix:a,iconName:l}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});v1=r.names,y1=r.unicodes,Rd=sl(b.styleDefault,{family:b.familyDefault})};dA(function(e){Rd=sl(e.styleDefault,{family:b.familyDefault})});_1();function Nd(e,t){return(m1[e]||{})[t]}function PA(e,t){return(g1[e]||{})[t]}function jn(e,t){return(w1[e]||{})[t]}function k1(e){return v1[e]||{prefix:null,iconName:null}}function OA(e){var t=y1[e],n=Nd("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function _n(){return Rd}var Dd=function(){return{prefix:null,iconName:null,rest:[]}};function sl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?W:n,i=oo[r][e],o=so[r][e]||so[r][i],s=e in lt.styles?e:null;return o||s||null}var am=(cs={},ue(cs,W,Object.keys(ao[W])),ue(cs,ne,Object.keys(ao[ne])),cs);function al(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(t={},ue(t,W,"".concat(b.cssPrefix,"-").concat(W)),ue(t,ne,"".concat(b.cssPrefix,"-").concat(ne)),t),s=null,a=W;(e.includes(o[W])||e.some(function(u){return am[W].includes(u)}))&&(a=W),(e.includes(o[ne])||e.some(function(u){return am[ne].includes(u)}))&&(a=ne);var l=e.reduce(function(u,c){var f=xA(b.cssPrefix,c);if(Sr[c]?(c=CA[a].includes(c)?nA[a][c]:c,s=c,u.prefix=c):bA[a].indexOf(c)>-1?(s=c,u.prefix=sl(c,{family:a})):f?u.iconName=f:c!==b.replacementClass&&c!==o[W]&&c!==o[ne]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=s==="fa"?k1(u.iconName):{},g=jn(u.prefix,u.iconName);h.prefix&&(s=null),u.iconName=h.iconName||g||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!Sr.far&&Sr.fas&&!b.autoFetchSvg&&(u.prefix="fas")}return u},Dd());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===ne&&(Sr.fass||b.autoFetchSvg)&&(l.prefix="fass",l.iconName=jn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=_n()||"fas"),l}var RA=function(){function e(){Vb(this,e),this.definitions={}}return Wb(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(a){n.definitions[a]=I(I({},n.definitions[a]||{}),s[a]),xc(a,s[a]);var l=ao[W][a];l&&xc(l,s[a]),_1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var s=i[o],a=s.prefix,l=s.iconName,u=s.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),e}(),lm=[],Ir={},Mr={},NA=Object.keys(Mr);function DA(e,t){var n=t.mixoutsTo;return lm=e,Ir={},Object.keys(Mr).forEach(function(r){NA.indexOf(r)===-1&&delete Mr[r]}),lm.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),ga(i[s])==="object"&&Object.keys(i[s]).forEach(function(a){n[s]||(n[s]={}),n[s][a]=i[s][a]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(s){Ir[s]||(Ir[s]=[]),Ir[s].push(o[s])})}r.provides&&r.provides(Mr)}),n}function Pc(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=Ir[e]||[];return o.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function nr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Ir[e]||[];i.forEach(function(o){o.apply(null,n)})}function Bt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Mr[e]?Mr[e].apply(null,t):void 0}function Oc(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||_n();if(t)return t=jn(n,t)||t,om(E1.definitions,n,t)||om(lt.styles,n,t)}var E1=new RA,LA=function(){b.autoReplaceSvg=!1,b.observeMutations=!1,nr("noAuto")},MA={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Wt?(nr("beforeI2svg",t),Bt("pseudoElements2svg",t),Bt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;b.autoReplaceSvg===!1&&(b.autoReplaceSvg=!0),b.observeMutations=!0,kA(function(){UA({autoReplaceSvgRoot:n}),nr("watch",t)})}},$A={icon:function(t){if(t===null)return null;if(ga(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:jn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=sl(t[0]);return{prefix:r,iconName:jn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(b.cssPrefix,"-"))>-1||t.match(rA))){var i=al(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||_n(),iconName:jn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=_n();return{prefix:o,iconName:jn(o,t)||t}}}},Ke={noAuto:LA,config:b,dom:MA,parse:$A,library:E1,findIconDefinition:Oc,toHtml:Ro},UA=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?K:n;(Object.keys(lt.styles).length>0||b.autoFetchSvg)&&Wt&&b.autoReplaceSvg&&Ke.dom.i2svg({node:r})};function ll(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ro(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Wt){var r=K.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function FA(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,s=e.transform;if(Od(s)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=ol(I(I({},o),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function jA(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,s=o===!0?"".concat(t,"-").concat(b.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},i),{},{id:s}),children:r}]}]}function Ld(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,s=e.transform,a=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,h=e.watchable,g=h===void 0?!1:h,v=r.found?r:n,w=v.width,P=v.height,p=i==="fak",d=[b.replacementClass,o?"".concat(b.cssPrefix,"-").concat(o):""].filter(function(U){return f.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(f.classes).join(" "),m={children:[],attributes:I(I({},f.attributes),{},{"data-prefix":i,"data-icon":o,class:d,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(P)})},y=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(w/P*16*.0625,"em")}:{};g&&(m.attributes[tr]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||uo())},children:[l]}),delete m.attributes.title);var k=I(I({},m),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:s,symbol:a,styles:I(I({},y),f.styles)}),E=r.found&&n.found?Bt("generateAbstractMask",k)||{children:[],attributes:{}}:Bt("generateAbstractIcon",k)||{children:[],attributes:{}},S=E.children,x=E.attributes;return k.children=S,k.attributes=x,a?jA(k):FA(k)}function um(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,s=e.extra,a=e.watchable,l=a===void 0?!1:a,u=I(I(I({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});l&&(u[tr]="");var c=I({},s.styles);Od(i)&&(c.transform=vA({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=ol(c);f.length>0&&(u.style=f);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),o&&h.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),h}function zA(e){var t=e.content,n=e.title,r=e.extra,i=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=ol(r.styles);o.length>0&&(i.style=o);var s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var ou=lt.styles;function Rc(e){var t=e[0],n=e[1],r=e.slice(4),i=Td(r,1),o=i[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(b.cssPrefix,"-").concat(Fn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(Fn.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(Fn.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:s}}var BA={found:!1,width:512,height:512};function HA(e,t){!l1&&!b.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Nc(e,t){var n=t;return t==="fa"&&b.styleDefault!==null&&(t=_n()),new Promise(function(r,i){if(Bt("missingIconAbstract"),n==="fa"){var o=k1(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&ou[t]&&ou[t][e]){var s=ou[t][e];return r(Rc(s))}HA(e,t),r(I(I({},BA),{},{icon:b.showMissingIcons&&e?Bt("missingIconAbstract")||{}:{}}))})}var cm=function(){},Dc=b.measurePerformance&&ns&&ns.mark&&ns.measure?ns:{mark:cm,measure:cm},vi='FA "6.2.1"',VA=function(t){return Dc.mark("".concat(vi," ").concat(t," begins")),function(){return S1(t)}},S1=function(t){Dc.mark("".concat(vi," ").concat(t," ends")),Dc.measure("".concat(vi," ").concat(t),"".concat(vi," ").concat(t," begins"),"".concat(vi," ").concat(t," ends"))},Md={begin:VA,end:S1},bs=function(){};function fm(e){var t=e.getAttribute?e.getAttribute(tr):null;return typeof t=="string"}function WA(e){var t=e.getAttribute?e.getAttribute(bd):null,n=e.getAttribute?e.getAttribute(Ad):null;return t&&n}function GA(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(b.replacementClass)}function KA(){if(b.autoReplaceSvg===!0)return As.replace;var e=As[b.autoReplaceSvg];return e||As.replace}function YA(e){return K.createElementNS("http://www.w3.org/2000/svg",e)}function XA(e){return K.createElement(e)}function I1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?YA:XA:n;if(typeof e=="string")return K.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){i.setAttribute(s,e.attributes[s])});var o=e.children||[];return o.forEach(function(s){i.appendChild(I1(s,{ceFn:r}))}),i}function qA(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var As={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(I1(i),n)}),n.getAttribute(tr)===null&&b.keepOriginalSource){var r=K.createComment(qA(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Pd(n).indexOf(b.replacementClass))return As.replace(t);var i=new RegExp("".concat(b.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(a,l){return l===b.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var s=r.map(function(a){return Ro(a)}).join(`
`);n.setAttribute(tr,""),n.innerHTML=s}};function dm(e){e()}function T1(e,t){var n=typeof t=="function"?t:bs;if(e.length===0)n();else{var r=dm;b.mutateApproach===eA&&(r=wn.requestAnimationFrame||dm),r(function(){var i=KA(),o=Md.begin("mutate");e.map(i),o(),n()})}}var $d=!1;function C1(){$d=!0}function Lc(){$d=!1}var ya=null;function hm(e){if(nm&&b.observeMutations){var t=e.treeCallback,n=t===void 0?bs:t,r=e.nodeCallback,i=r===void 0?bs:r,o=e.pseudoElementsCallback,s=o===void 0?bs:o,a=e.observeMutationsRoot,l=a===void 0?K:a;ya=new nm(function(u){if(!$d){var c=_n();Zr(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!fm(f.addedNodes[0])&&(b.searchPseudoElements&&s(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&b.searchPseudoElements&&s(f.target.parentNode),f.type==="attributes"&&fm(f.target)&&~aA.indexOf(f.attributeName))if(f.attributeName==="class"&&WA(f.target)){var h=al(Pd(f.target)),g=h.prefix,v=h.iconName;f.target.setAttribute(bd,g||c),v&&f.target.setAttribute(Ad,v)}else GA(f.target)&&i(f.target)})}}),Wt&&ya.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function QA(){ya&&ya.disconnect()}function JA(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(r[s]=a.join(":").trim()),r},{})),n}function ZA(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=al(Pd(e));return i.prefix||(i.prefix=_n()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=PA(i.prefix,e.innerText)||Nd(i.prefix,Ac(e.innerText))),!i.iconName&&b.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function e2(e){var t=Zr(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return b.autoA11y&&(n?t["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(r||uo()):(t["aria-hidden"]="true",t.focusable="false")),t}function t2(){return{iconName:null,title:null,titleId:null,prefix:null,transform:wt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function pm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ZA(e),r=n.iconName,i=n.prefix,o=n.rest,s=e2(e),a=Pc("parseNodeAttributes",{},e),l=t.styleParser?JA(e):[];return I({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:wt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:s}},a)}var n2=lt.styles;function b1(e){var t=b.autoReplaceSvg==="nest"?pm(e,{styleParser:!1}):pm(e);return~t.extra.classes.indexOf(u1)?Bt("generateLayersText",e,t):Bt("generateSvgReplacementMutation",e,t)}var kn=new Set;xd.map(function(e){kn.add("fa-".concat(e))});Object.keys(oo[W]).map(kn.add.bind(kn));Object.keys(oo[ne]).map(kn.add.bind(kn));kn=Po(kn);function mm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Wt)return Promise.resolve();var n=K.documentElement.classList,r=function(f){return n.add("".concat(rm,"-").concat(f))},i=function(f){return n.remove("".concat(rm,"-").concat(f))},o=b.autoFetchSvg?kn:xd.map(function(c){return"fa-".concat(c)}).concat(Object.keys(n2));o.includes("fa")||o.push("fa");var s=[".".concat(u1,":not([").concat(tr,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(tr,"])")})).join(", ");if(s.length===0)return Promise.resolve();var a=[];try{a=Zr(e.querySelectorAll(s))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Md.begin("onTree"),u=a.reduce(function(c,f){try{var h=b1(f);h&&c.push(h)}catch(g){l1||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(h){T1(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),f(h)})})}function r2(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;b1(e).then(function(n){n&&T1([n],t)})}function i2(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Oc(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Oc(i||{})),e(r,I(I({},n),{},{mask:i}))}}var o2=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?wt:r,o=n.symbol,s=o===void 0?!1:o,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,h=f===void 0?null:f,g=n.titleId,v=g===void 0?null:g,w=n.classes,P=w===void 0?[]:w,p=n.attributes,d=p===void 0?{}:p,m=n.styles,y=m===void 0?{}:m;if(t){var k=t.prefix,E=t.iconName,S=t.icon;return ll(I({type:"icon"},t),function(){return nr("beforeDOMElementCreation",{iconDefinition:t,params:n}),b.autoA11y&&(h?d["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(v||uo()):(d["aria-hidden"]="true",d.focusable="false")),Ld({icons:{main:Rc(S),mask:l?Rc(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:E,transform:I(I({},wt),i),symbol:s,title:h,maskId:c,titleId:v,extra:{attributes:d,styles:y,classes:P}})})}},s2={mixout:function(){return{icon:i2(o2)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=mm,n.nodeCallback=r2,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?K:r,o=n.callback,s=o===void 0?function(){}:o;return mm(i,s)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,s=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,h=r.extra;return new Promise(function(g,v){Promise.all([Nc(i,a),c.iconName?Nc(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var P=Td(w,2),p=P[0],d=P[1];g([n,Ld({icons:{main:p,mask:d},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:o,titleId:s,extra:h,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.transform,a=n.styles,l=ol(a);l.length>0&&(i.style=l);var u;return Od(s)&&(u=Bt("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:i}}}},a2={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return ll({type:"layer"},function(){nr("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(a){Array.isArray(a)?a.map(function(l){s=s.concat(l.abstract)}):s=s.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(b.cssPrefix,"-layers")].concat(Po(o)).join(" ")},children:s}]})}}}},l2={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,s=r.classes,a=s===void 0?[]:s,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return ll({type:"counter",content:n},function(){return nr("beforeDOMElementCreation",{content:n,params:r}),zA({content:n.toString(),title:o,extra:{attributes:u,styles:f,classes:["".concat(b.cssPrefix,"-layers-counter")].concat(Po(a))}})})}}}},u2={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?wt:i,s=r.title,a=s===void 0?null:s,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,h=r.styles,g=h===void 0?{}:h;return ll({type:"text",content:n},function(){return nr("beforeDOMElementCreation",{content:n,params:r}),um({content:n,transform:I(I({},wt),o),title:a,extra:{attributes:f,styles:g,classes:["".concat(b.cssPrefix,"-layers-text")].concat(Po(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,o=r.transform,s=r.extra,a=null,l=null;if(o1){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return b.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,um({content:n.innerHTML,width:a,height:l,transform:o,title:i,extra:s,watchable:!0})])}}},c2=new RegExp('"',"ug"),gm=[1105920,1112319];function f2(e){var t=e.replace(c2,""),n=IA(t,0),r=n>=gm[0]&&n<=gm[1],i=t.length===2?t[0]===t[1]:!1;return{value:Ac(i?t[0]:t),isSecondary:r||i}}function vm(e,t){var n="".concat(Zb).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=Zr(e.children),s=o.filter(function(S){return S.getAttribute(bc)===t})[0],a=wn.getComputedStyle(e,t),l=a.getPropertyValue("font-family").match(iA),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?ne:W,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?so[h][l[2].toLowerCase()]:oA[h][u],v=f2(f),w=v.value,P=v.isSecondary,p=l[0].startsWith("FontAwesome"),d=Nd(g,w),m=d;if(p){var y=OA(w);y.iconName&&y.prefix&&(d=y.iconName,g=y.prefix)}if(d&&!P&&(!s||s.getAttribute(bd)!==g||s.getAttribute(Ad)!==m)){e.setAttribute(n,m),s&&e.removeChild(s);var k=t2(),E=k.extra;E.attributes[bc]=t,Nc(d,g).then(function(S){var x=Ld(I(I({},k),{},{icons:{main:S,mask:Dd()},prefix:g,iconName:m,extra:E,watchable:!0})),U=K.createElement("svg");t==="::before"?e.insertBefore(U,e.firstChild):e.appendChild(U),U.outerHTML=x.map(function(D){return Ro(D)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function d2(e){return Promise.all([vm(e,"::before"),vm(e,"::after")])}function h2(e){return e.parentNode!==document.head&&!~tA.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(bc)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ym(e){if(Wt)return new Promise(function(t,n){var r=Zr(e.querySelectorAll("*")).filter(h2).map(d2),i=Md.begin("searchPseudoElements");C1(),Promise.all(r).then(function(){i(),Lc(),t()}).catch(function(){i(),Lc(),n()})})}var p2={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ym,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?K:r;b.searchPseudoElements&&ym(i)}}},wm=!1,m2={mixout:function(){return{dom:{unwatch:function(){C1(),wm=!0}}}},hooks:function(){return{bootstrap:function(){hm(Pc("mutationObserverCallbacks",{}))},noAuto:function(){QA()},watch:function(n){var r=n.observeMutationsRoot;wm?Lc():hm(Pc("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},_m=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),s=o[0],a=o.slice(1).join("-");if(s&&a==="h")return r.flipX=!0,r;if(s&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(s){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},g2={mixout:function(){return{parse:{transform:function(n){return _m(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=_m(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,s=n.iconWidth,a={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(s/2*-1," -256)")},g={outer:a,inner:f,path:h};return{tag:"g",attributes:I({},g.outer),children:[{tag:"g",attributes:I({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),g.path)}]}]}}}},su={x:0,y:0,width:"100%",height:"100%"};function km(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function v2(e){return e.tag==="g"?e.children:[e]}var y2={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?al(i.split(" ").map(function(s){return s.trim()})):Dd();return o.prefix||(o.prefix=_n()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.mask,a=n.maskId,l=n.transform,u=o.width,c=o.icon,f=s.width,h=s.icon,g=gA({transform:l,containerWidth:f,iconWidth:u}),v={tag:"rect",attributes:I(I({},su),{},{fill:"white"})},w=c.children?{children:c.children.map(km)}:{},P={tag:"g",attributes:I({},g.inner),children:[km(I({tag:c.tag,attributes:I(I({},c.attributes),g.path)},w))]},p={tag:"g",attributes:I({},g.outer),children:[P]},d="mask-".concat(a||uo()),m="clip-".concat(a||uo()),y={tag:"mask",attributes:I(I({},su),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,p]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:v2(h)},y]};return r.push(k,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(d,")")},su)}),{children:r,attributes:i}}}},w2={provides:function(t){var n=!1;wn.matchMedia&&(n=wn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=I(I({},o),{},{attributeName:"opacity"}),a={tag:"circle",attributes:I(I({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:I(I({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:I(I({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},_2={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},k2=[wA,s2,a2,l2,u2,p2,m2,g2,y2,w2,_2];DA(k2,{mixoutsTo:Ke});Ke.noAuto;Ke.config;Ke.library;Ke.dom;var Mc=Ke.parse;Ke.findIconDefinition;Ke.toHtml;var E2=Ke.icon;Ke.layer;Ke.text;Ke.counter;var L={},S2={get exports(){return L},set exports(e){L=e}},I2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",T2=I2,C2=T2;function A1(){}function x1(){}x1.resetWarningCache=A1;var b2=function(){function e(r,i,o,s,a,l){if(l!==C2){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:x1,resetWarningCache:A1};return n.PropTypes=n,n};S2.exports=b2();function Em(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function sn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Em(Object(n),!0).forEach(function(r){Tr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Em(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wa(e){return wa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wa(e)}function Tr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function x2(e,t){if(e==null)return{};var n=A2(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function $c(e){return P2(e)||O2(e)||R2(e)||N2()}function P2(e){if(Array.isArray(e))return Uc(e)}function O2(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function R2(e,t){if(e){if(typeof e=="string")return Uc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Uc(e,t)}}function Uc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function N2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D2(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,s=e.shake,a=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,h=e.fixedWidth,g=e.inverse,v=e.border,w=e.listItem,P=e.flip,p=e.size,d=e.rotation,m=e.pull,y=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":h,"fa-inverse":g,"fa-border":v,"fa-li":w,"fa-flip":P===!0,"fa-flip-horizontal":P==="horizontal"||P==="both","fa-flip-vertical":P==="vertical"||P==="both"},Tr(t,"fa-".concat(p),typeof p<"u"&&p!==null),Tr(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),Tr(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Tr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(y).map(function(k){return y[k]?k:null}).filter(function(k){return k})}function L2(e){return e=e-0,e===e}function P1(e){return L2(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var M2=["style"];function $2(e){return e.charAt(0).toUpperCase()+e.slice(1)}function U2(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=P1(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[$2(i)]=o:t[i]=o,t},{})}function O1(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return O1(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=U2(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[P1(u)]=c}return l},{attrs:{}}),o=n.style,s=o===void 0?{}:o,a=x2(n,M2);return i.attrs.style=sn(sn({},i.attrs.style),s),e.apply(void 0,[t.tag,sn(sn({},i.attrs),a)].concat($c(r)))}var R1=!1;try{R1=!0}catch{}function F2(){if(!R1&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Sm(e){if(e&&wa(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Mc.icon)return Mc.icon(e);if(e===null)return null;if(e&&wa(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function au(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Tr({},e,t):{}}var Wn=ka.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,o=e.className,s=e.title,a=e.titleId,l=e.maskId,u=Sm(n),c=au("classes",[].concat($c(D2(e)),$c(o.split(" ")))),f=au("transform",typeof e.transform=="string"?Mc.transform(e.transform):e.transform),h=au("mask",Sm(r)),g=E2(u,sn(sn(sn(sn({},c),f),h),{},{symbol:i,title:s,titleId:a,maskId:l}));if(!g)return F2("Could not find icon",u),null;var v=g.abstract,w={ref:t};return Object.keys(e).forEach(function(P){Wn.defaultProps.hasOwnProperty(P)||(w[P]=e[P])}),j2(v[0],w)});Wn.displayName="FontAwesomeIcon";Wn.propTypes={beat:L.bool,border:L.bool,beatFade:L.bool,bounce:L.bool,className:L.string,fade:L.bool,flash:L.bool,mask:L.oneOfType([L.object,L.array,L.string]),maskId:L.string,fixedWidth:L.bool,inverse:L.bool,flip:L.oneOf([!0,!1,"horizontal","vertical","both"]),icon:L.oneOfType([L.object,L.array,L.string]),listItem:L.bool,pull:L.oneOf(["right","left"]),pulse:L.bool,rotation:L.oneOf([0,90,180,270]),shake:L.bool,size:L.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:L.bool,spinPulse:L.bool,spinReverse:L.bool,symbol:L.oneOfType([L.bool,L.string]),title:L.string,titleId:L.string,transform:L.oneOfType([L.string,L.object]),swapOpacity:L.bool};Wn.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var j2=O1.bind(null,ka.createElement);function z2(){const e=Id(Lr);return console.log(e),Qt("header",{id:"--header-header-container",children:[te(Wn,{className:"--header-fa-tractor",icon:"fa-solid fa-tractor"}),te("h1",{id:"--header-title",children:"Farmer say"}),e?Qt("div",{id:"--header-sign-out-container",children:[te(Wn,{icon:"fa-solid fa-door-open",onClick:()=>{Lr.signOut()},className:"--header-sign-out"}),te("span",{id:"--header-sign-out-text",children:"Sign Out"})]}):te(Wn,{className:"--header-fa-google",icon:"fa-brands fa-google",onClick:()=>{const r=new vt;Xy(Lr,r)}})]})}const B2="/Chatty/assets/google_signin_btn-3426a2d2.png",H2="/Chatty/assets/cowgirl-e51c8c91.jpg",V2="/Chatty/assets/harvest-ace09061.jpg",W2="/Chatty/assets/mechanic-78d7bd4f.jpg";function G2(){return Id(Lr),Qt("section",{id:"--splash-splash-container",children:[Qt("div",{id:"flexed-ipad",children:[Qt("div",{id:"--splash-lifestyle",className:"flexed-right",children:[te("img",{className:"--splash-img",src:H2,alt:"cowgirl"}),te("h1",{id:"--splash-lifestyle-title",className:"--splash-title",children:"People who appreciate your lifestyle"})]}),Qt("div",{id:"--splash-harvest",children:[te("img",{className:"--splash-img",src:V2,alt:"basket of vegetables"}),te("h1",{id:"--splash-harvest-title",className:"--splash-title",children:"Sell or trade directly"})]}),Qt("div",{id:"--splash-mechanic",className:"flexed-right",children:[te("img",{className:"--splash-img",src:W2,alt:"mechanic with oil stick"}),te("h1",{id:"--splash-mechanic-title",className:"--splash-title",children:"Questions about your tractor"})]})]}),te("p",{id:"--splash-cta",children:"Sign in with Google and start chatting with other farmers"}),te("img",{src:B2,alt:"sign in with google",className:"--splash-btn-google",onClick:()=>{const t=new vt;Xy(Lr,t)}})]})}function K2(){return te("div",{children:te("h1",{children:"Chat Box"})})}function Y2(){const[e]=Id(Lr);return Qt("div",{className:"--app-app-container",children:[te("nav",{children:te(z2,{})}),e?te(K2,{}):te(G2,{})]})}uu.createRoot(document.getElementById("root")).render(te(ka.StrictMode,{children:te(xk,{children:te(Y2,{})})}));
