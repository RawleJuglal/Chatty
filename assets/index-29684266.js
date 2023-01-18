function K1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Y1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xs={},X1={get exports(){return xs},set exports(e){xs=e}},_a={},P={},q1={get exports(){return P},set exports(e){P=e}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var co=Symbol.for("react.element"),Q1=Symbol.for("react.portal"),J1=Symbol.for("react.fragment"),Z1=Symbol.for("react.strict_mode"),ew=Symbol.for("react.profiler"),tw=Symbol.for("react.provider"),nw=Symbol.for("react.context"),rw=Symbol.for("react.forward_ref"),iw=Symbol.for("react.suspense"),ow=Symbol.for("react.memo"),sw=Symbol.for("react.lazy"),Yd=Symbol.iterator;function aw(e){return e===null||typeof e!="object"?null:(e=Yd&&e[Yd]||e["@@iterator"],typeof e=="function"?e:null)}var Dm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lm=Object.assign,Mm={};function Kr(e,t,n){this.props=e,this.context=t,this.refs=Mm,this.updater=n||Dm}Kr.prototype.isReactComponent={};Kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $m(){}$m.prototype=Kr.prototype;function Kc(e,t,n){this.props=e,this.context=t,this.refs=Mm,this.updater=n||Dm}var Yc=Kc.prototype=new $m;Yc.constructor=Kc;Lm(Yc,Kr.prototype);Yc.isPureReactComponent=!0;var Xd=Array.isArray,Um=Object.prototype.hasOwnProperty,Xc={current:null},Fm={key:!0,ref:!0,__self:!0,__source:!0};function jm(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Um.call(t,r)&&!Fm.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:co,type:e,key:o,ref:s,props:i,_owner:Xc.current}}function lw(e,t){return{$$typeof:co,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function qc(e){return typeof e=="object"&&e!==null&&e.$$typeof===co}function uw(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var qd=/\/+/g;function gl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?uw(""+e.key):t.toString(36)}function fs(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case co:case Q1:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+gl(s,0):r,Xd(i)?(n="",e!=null&&(n=e.replace(qd,"$&/")+"/"),fs(i,t,n,"",function(u){return u})):i!=null&&(qc(i)&&(i=lw(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(qd,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Xd(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+gl(o,a);s+=fs(o,t,n,l,i)}else if(l=aw(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+gl(o,a++),s+=fs(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Lo(e,t,n){if(e==null)return e;var r=[],i=0;return fs(e,r,"","",function(o){return t.call(n,o,i++)}),r}function cw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},ds={transition:null},fw={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:ds,ReactCurrentOwner:Xc};U.Children={map:Lo,forEach:function(e,t,n){Lo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Lo(e,function(){t++}),t},toArray:function(e){return Lo(e,function(t){return t})||[]},only:function(e){if(!qc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Kr;U.Fragment=J1;U.Profiler=ew;U.PureComponent=Kc;U.StrictMode=Z1;U.Suspense=iw;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fw;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Lm({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Xc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Um.call(t,l)&&!Fm.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:co,type:e.type,key:i,ref:o,props:r,_owner:s}};U.createContext=function(e){return e={$$typeof:nw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:tw,_context:e},e.Consumer=e};U.createElement=jm;U.createFactory=function(e){var t=jm.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:rw,render:e}};U.isValidElement=qc;U.lazy=function(e){return{$$typeof:sw,_payload:{_status:-1,_result:e},_init:cw}};U.memo=function(e,t){return{$$typeof:ow,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=ds.transition;ds.transition={};try{e()}finally{ds.transition=t}};U.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};U.useCallback=function(e,t){return Pe.current.useCallback(e,t)};U.useContext=function(e){return Pe.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};U.useEffect=function(e,t){return Pe.current.useEffect(e,t)};U.useId=function(){return Pe.current.useId()};U.useImperativeHandle=function(e,t,n){return Pe.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return Pe.current.useMemo(e,t)};U.useReducer=function(e,t,n){return Pe.current.useReducer(e,t,n)};U.useRef=function(e){return Pe.current.useRef(e)};U.useState=function(e){return Pe.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return Pe.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return Pe.current.useTransition()};U.version="18.2.0";(function(e){e.exports=U})(q1);const ka=Y1(P),du=K1({__proto__:null,default:ka},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dw=P,hw=Symbol.for("react.element"),pw=Symbol.for("react.fragment"),mw=Object.prototype.hasOwnProperty,gw=dw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vw={key:!0,ref:!0,__self:!0,__source:!0};function zm(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)mw.call(t,r)&&!vw.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:hw,type:e,key:o,ref:s,props:i,_owner:gw.current}}_a.Fragment=pw;_a.jsx=zm;_a.jsxs=zm;(function(e){e.exports=_a})(X1);const _e=xs.jsx,hu=xs.jsxs;var pu={},mu={},yw={get exports(){return mu},set exports(e){mu=e}},Ge={},gu={},ww={get exports(){return gu},set exports(e){gu=e}},Bm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,D){var $=C.length;C.push(D);e:for(;0<$;){var ne=$-1>>>1,ue=C[ne];if(0<i(ue,D))C[ne]=D,C[$]=ue,$=ne;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var D=C[0],$=C.pop();if($!==D){C[0]=$;e:for(var ne=0,ue=C.length,No=ue>>>1;ne<No;){var An=2*(ne+1)-1,ml=C[An],xn=An+1,Do=C[xn];if(0>i(ml,$))xn<ue&&0>i(Do,ml)?(C[ne]=Do,C[xn]=$,ne=xn):(C[ne]=ml,C[An]=$,ne=An);else if(xn<ue&&0>i(Do,$))C[ne]=Do,C[xn]=$,ne=xn;else break e}}return D}function i(C,D){var $=C.sortIndex-D.sortIndex;return $!==0?$:C.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,h=3,g=!1,v=!1,y=!1,R=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(C){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=C)r(u),D.sortIndex=D.expirationTime,t(l,D);else break;D=n(u)}}function w(C){if(y=!1,m(C),!v)if(n(l)!==null)v=!0,hl(_);else{var D=n(u);D!==null&&pl(w,D.startTime-C)}}function _(C,D){v=!1,y&&(y=!1,p(x),x=-1),g=!0;var $=h;try{for(m(D),f=n(l);f!==null&&(!(f.expirationTime>D)||C&&!it());){var ne=f.callback;if(typeof ne=="function"){f.callback=null,h=f.priorityLevel;var ue=ne(f.expirationTime<=D);D=e.unstable_now(),typeof ue=="function"?f.callback=ue:f===n(l)&&r(l),m(D)}else r(l);f=n(l)}if(f!==null)var No=!0;else{var An=n(u);An!==null&&pl(w,An.startTime-D),No=!1}return No}finally{f=null,h=$,g=!1}}var k=!1,S=null,x=-1,F=5,L=-1;function it(){return!(e.unstable_now()-L<F)}function ei(){if(S!==null){var C=e.unstable_now();L=C;var D=!0;try{D=S(!0,C)}finally{D?ti():(k=!1,S=null)}}else k=!1}var ti;if(typeof d=="function")ti=function(){d(ei)};else if(typeof MessageChannel<"u"){var Kd=new MessageChannel,G1=Kd.port2;Kd.port1.onmessage=ei,ti=function(){G1.postMessage(null)}}else ti=function(){R(ei,0)};function hl(C){S=C,k||(k=!0,ti())}function pl(C,D){x=R(function(){C(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){v||g||(v=!0,hl(_))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(C){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var $=h;h=D;try{return C()}finally{h=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,D){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var $=h;h=C;try{return D()}finally{h=$}},e.unstable_scheduleCallback=function(C,D,$){var ne=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ne+$:ne):$=ne,C){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=$+ue,C={id:c++,callback:D,priorityLevel:C,startTime:$,expirationTime:ue,sortIndex:-1},$>ne?(C.sortIndex=$,t(u,C),n(l)===null&&C===n(u)&&(y?(p(x),x=-1):y=!0,pl(w,$-ne))):(C.sortIndex=ue,t(l,C),v||g||(v=!0,hl(_))),C},e.unstable_shouldYield=it,e.unstable_wrapCallback=function(C){var D=h;return function(){var $=h;h=D;try{return C.apply(this,arguments)}finally{h=$}}}})(Bm);(function(e){e.exports=Bm})(ww);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm=P,We=gu;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vm=new Set,Oi={};function nr(e,t){Mr(e,t),Mr(e+"Capture",t)}function Mr(e,t){for(Oi[e]=t,e=0;e<t.length;e++)Vm.add(t[e])}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vu=Object.prototype.hasOwnProperty,Ew=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qd={},Jd={};function _w(e){return vu.call(Jd,e)?!0:vu.call(Qd,e)?!1:Ew.test(e)?Jd[e]=!0:(Qd[e]=!0,!1)}function kw(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sw(e,t,n,r){if(t===null||typeof t>"u"||kw(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Re(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new Re(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ge[t]=new Re(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new Re(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new Re(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new Re(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new Re(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new Re(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new Re(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new Re(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qc=/[\-:]([a-z])/g;function Jc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Qc,Jc);ge[t]=new Re(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Qc,Jc);ge[t]=new Re(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Qc,Jc);ge[t]=new Re(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new Re(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new Re(e,1,!1,e.toLowerCase(),null,!0,!0)});function Zc(e,t,n,r){var i=ge.hasOwnProperty(t)?ge[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Sw(t,n,i,r)&&(n=null),r||i===null?_w(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Vt=Hm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mo=Symbol.for("react.element"),ar=Symbol.for("react.portal"),lr=Symbol.for("react.fragment"),ef=Symbol.for("react.strict_mode"),yu=Symbol.for("react.profiler"),Wm=Symbol.for("react.provider"),Gm=Symbol.for("react.context"),tf=Symbol.for("react.forward_ref"),wu=Symbol.for("react.suspense"),Eu=Symbol.for("react.suspense_list"),nf=Symbol.for("react.memo"),qt=Symbol.for("react.lazy"),Km=Symbol.for("react.offscreen"),Zd=Symbol.iterator;function ni(e){return e===null||typeof e!="object"?null:(e=Zd&&e[Zd]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,vl;function fi(e){if(vl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);vl=t&&t[1]||""}return`
`+vl+e}var yl=!1;function wl(e,t){if(!e||yl)return"";yl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{yl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?fi(e):""}function Iw(e){switch(e.tag){case 5:return fi(e.type);case 16:return fi("Lazy");case 13:return fi("Suspense");case 19:return fi("SuspenseList");case 0:case 2:case 15:return e=wl(e.type,!1),e;case 11:return e=wl(e.type.render,!1),e;case 1:return e=wl(e.type,!0),e;default:return""}}function _u(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case lr:return"Fragment";case ar:return"Portal";case yu:return"Profiler";case ef:return"StrictMode";case wu:return"Suspense";case Eu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gm:return(e.displayName||"Context")+".Consumer";case Wm:return(e._context.displayName||"Context")+".Provider";case tf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case nf:return t=e.displayName||null,t!==null?t:_u(e.type)||"Memo";case qt:t=e._payload,e=e._init;try{return _u(e(t))}catch{}}return null}function Tw(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _u(t);case 8:return t===ef?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ym(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cw(e){var t=Ym(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $o(e){e._valueTracker||(e._valueTracker=Cw(e))}function Xm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ym(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ps(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ku(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function eh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=yn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function qm(e,t){t=t.checked,t!=null&&Zc(e,"checked",t,!1)}function Su(e,t){qm(e,t);var n=yn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Iu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Iu(e,t.type,yn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function th(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Iu(e,t,n){(t!=="number"||Ps(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var di=Array.isArray;function Tr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+yn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Tu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(di(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yn(n)}}function Qm(e,t){var n=yn(t.value),r=yn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function rh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Jm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Jm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Uo,Zm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Uo=Uo||document.createElement("div"),Uo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Uo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ni(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var yi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bw=["Webkit","ms","Moz","O"];Object.keys(yi).forEach(function(e){bw.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),yi[t]=yi[e]})});function eg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||yi.hasOwnProperty(e)&&yi[e]?(""+t).trim():t+"px"}function tg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=eg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Aw=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bu(e,t){if(t){if(Aw[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Au(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xu=null;function rf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pu=null,Cr=null,br=null;function ih(e){if(e=po(e)){if(typeof Pu!="function")throw Error(E(280));var t=e.stateNode;t&&(t=ba(t),Pu(e.stateNode,e.type,t))}}function ng(e){Cr?br?br.push(e):br=[e]:Cr=e}function rg(){if(Cr){var e=Cr,t=br;if(br=Cr=null,ih(e),t)for(e=0;e<t.length;e++)ih(t[e])}}function ig(e,t){return e(t)}function og(){}var El=!1;function sg(e,t,n){if(El)return e(t,n);El=!0;try{return ig(e,t,n)}finally{El=!1,(Cr!==null||br!==null)&&(og(),rg())}}function Di(e,t){var n=e.stateNode;if(n===null)return null;var r=ba(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var Ru=!1;if(Lt)try{var ri={};Object.defineProperty(ri,"passive",{get:function(){Ru=!0}}),window.addEventListener("test",ri,ri),window.removeEventListener("test",ri,ri)}catch{Ru=!1}function xw(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var wi=!1,Rs=null,Os=!1,Ou=null,Pw={onError:function(e){wi=!0,Rs=e}};function Rw(e,t,n,r,i,o,s,a,l){wi=!1,Rs=null,xw.apply(Pw,arguments)}function Ow(e,t,n,r,i,o,s,a,l){if(Rw.apply(this,arguments),wi){if(wi){var u=Rs;wi=!1,Rs=null}else throw Error(E(198));Os||(Os=!0,Ou=u)}}function rr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ag(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function oh(e){if(rr(e)!==e)throw Error(E(188))}function Nw(e){var t=e.alternate;if(!t){if(t=rr(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return oh(i),e;if(o===r)return oh(i),t;o=o.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function lg(e){return e=Nw(e),e!==null?ug(e):null}function ug(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ug(e);if(t!==null)return t;e=e.sibling}return null}var cg=We.unstable_scheduleCallback,sh=We.unstable_cancelCallback,Dw=We.unstable_shouldYield,Lw=We.unstable_requestPaint,re=We.unstable_now,Mw=We.unstable_getCurrentPriorityLevel,of=We.unstable_ImmediatePriority,fg=We.unstable_UserBlockingPriority,Ns=We.unstable_NormalPriority,$w=We.unstable_LowPriority,dg=We.unstable_IdlePriority,Sa=null,Et=null;function Uw(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Sa,e,void 0,(e.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:zw,Fw=Math.log,jw=Math.LN2;function zw(e){return e>>>=0,e===0?32:31-(Fw(e)/jw|0)|0}var Fo=64,jo=4194304;function hi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ds(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=hi(a):(o&=s,o!==0&&(r=hi(o)))}else s=n&~i,s!==0?r=hi(s):o!==0&&(r=hi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ct(t),i=1<<n,r|=e[n],t&=~i;return r}function Bw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hw(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-ct(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Bw(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Nu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hg(){var e=Fo;return Fo<<=1,!(Fo&4194240)&&(Fo=64),e}function _l(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ct(t),e[t]=n}function Vw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ct(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function sf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ct(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var H=0;function pg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mg,af,gg,vg,yg,Du=!1,zo=[],ln=null,un=null,cn=null,Li=new Map,Mi=new Map,Jt=[],Ww="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ah(e,t){switch(e){case"focusin":case"focusout":ln=null;break;case"dragenter":case"dragleave":un=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":Li.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mi.delete(t.pointerId)}}function ii(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=po(t),t!==null&&af(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Gw(e,t,n,r,i){switch(t){case"focusin":return ln=ii(ln,e,t,n,r,i),!0;case"dragenter":return un=ii(un,e,t,n,r,i),!0;case"mouseover":return cn=ii(cn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Li.set(o,ii(Li.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Mi.set(o,ii(Mi.get(o)||null,e,t,n,r,i)),!0}return!1}function wg(e){var t=Nn(e.target);if(t!==null){var n=rr(t);if(n!==null){if(t=n.tag,t===13){if(t=ag(n),t!==null){e.blockedOn=t,yg(e.priority,function(){gg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Lu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xu=r,n.target.dispatchEvent(r),xu=null}else return t=po(n),t!==null&&af(t),e.blockedOn=n,!1;t.shift()}return!0}function lh(e,t,n){hs(e)&&n.delete(t)}function Kw(){Du=!1,ln!==null&&hs(ln)&&(ln=null),un!==null&&hs(un)&&(un=null),cn!==null&&hs(cn)&&(cn=null),Li.forEach(lh),Mi.forEach(lh)}function oi(e,t){e.blockedOn===t&&(e.blockedOn=null,Du||(Du=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,Kw)))}function $i(e){function t(i){return oi(i,e)}if(0<zo.length){oi(zo[0],e);for(var n=1;n<zo.length;n++){var r=zo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ln!==null&&oi(ln,e),un!==null&&oi(un,e),cn!==null&&oi(cn,e),Li.forEach(t),Mi.forEach(t),n=0;n<Jt.length;n++)r=Jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Jt.length&&(n=Jt[0],n.blockedOn===null);)wg(n),n.blockedOn===null&&Jt.shift()}var Ar=Vt.ReactCurrentBatchConfig,Ls=!0;function Yw(e,t,n,r){var i=H,o=Ar.transition;Ar.transition=null;try{H=1,lf(e,t,n,r)}finally{H=i,Ar.transition=o}}function Xw(e,t,n,r){var i=H,o=Ar.transition;Ar.transition=null;try{H=4,lf(e,t,n,r)}finally{H=i,Ar.transition=o}}function lf(e,t,n,r){if(Ls){var i=Lu(e,t,n,r);if(i===null)Rl(e,t,r,Ms,n),ah(e,r);else if(Gw(i,e,t,n,r))r.stopPropagation();else if(ah(e,r),t&4&&-1<Ww.indexOf(e)){for(;i!==null;){var o=po(i);if(o!==null&&mg(o),o=Lu(e,t,n,r),o===null&&Rl(e,t,r,Ms,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Rl(e,t,r,null,n)}}var Ms=null;function Lu(e,t,n,r){if(Ms=null,e=rf(r),e=Nn(e),e!==null)if(t=rr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ag(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ms=e,null}function Eg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mw()){case of:return 1;case fg:return 4;case Ns:case $w:return 16;case dg:return 536870912;default:return 16}default:return 16}}var rn=null,uf=null,ps=null;function _g(){if(ps)return ps;var e,t=uf,n=t.length,r,i="value"in rn?rn.value:rn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return ps=i.slice(e,1<r?1-r:void 0)}function ms(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bo(){return!0}function uh(){return!1}function Ke(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Bo:uh,this.isPropagationStopped=uh,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bo)},persist:function(){},isPersistent:Bo}),t}var Yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cf=Ke(Yr),ho=Z({},Yr,{view:0,detail:0}),qw=Ke(ho),kl,Sl,si,Ia=Z({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ff,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==si&&(si&&e.type==="mousemove"?(kl=e.screenX-si.screenX,Sl=e.screenY-si.screenY):Sl=kl=0,si=e),kl)},movementY:function(e){return"movementY"in e?e.movementY:Sl}}),ch=Ke(Ia),Qw=Z({},Ia,{dataTransfer:0}),Jw=Ke(Qw),Zw=Z({},ho,{relatedTarget:0}),Il=Ke(Zw),eE=Z({},Yr,{animationName:0,elapsedTime:0,pseudoElement:0}),tE=Ke(eE),nE=Z({},Yr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rE=Ke(nE),iE=Z({},Yr,{data:0}),fh=Ke(iE),oE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},aE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=aE[e])?!!t[e]:!1}function ff(){return lE}var uE=Z({},ho,{key:function(e){if(e.key){var t=oE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ms(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ff,charCode:function(e){return e.type==="keypress"?ms(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ms(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cE=Ke(uE),fE=Z({},Ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dh=Ke(fE),dE=Z({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ff}),hE=Ke(dE),pE=Z({},Yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),mE=Ke(pE),gE=Z({},Ia,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vE=Ke(gE),yE=[9,13,27,32],df=Lt&&"CompositionEvent"in window,Ei=null;Lt&&"documentMode"in document&&(Ei=document.documentMode);var wE=Lt&&"TextEvent"in window&&!Ei,kg=Lt&&(!df||Ei&&8<Ei&&11>=Ei),hh=String.fromCharCode(32),ph=!1;function Sg(e,t){switch(e){case"keyup":return yE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ig(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ur=!1;function EE(e,t){switch(e){case"compositionend":return Ig(t);case"keypress":return t.which!==32?null:(ph=!0,hh);case"textInput":return e=t.data,e===hh&&ph?null:e;default:return null}}function _E(e,t){if(ur)return e==="compositionend"||!df&&Sg(e,t)?(e=_g(),ps=uf=rn=null,ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kg&&t.locale!=="ko"?null:t.data;default:return null}}var kE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!kE[e.type]:t==="textarea"}function Tg(e,t,n,r){ng(r),t=$s(t,"onChange"),0<t.length&&(n=new cf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _i=null,Ui=null;function SE(e){Mg(e,0)}function Ta(e){var t=dr(e);if(Xm(t))return e}function IE(e,t){if(e==="change")return t}var Cg=!1;if(Lt){var Tl;if(Lt){var Cl="oninput"in document;if(!Cl){var gh=document.createElement("div");gh.setAttribute("oninput","return;"),Cl=typeof gh.oninput=="function"}Tl=Cl}else Tl=!1;Cg=Tl&&(!document.documentMode||9<document.documentMode)}function vh(){_i&&(_i.detachEvent("onpropertychange",bg),Ui=_i=null)}function bg(e){if(e.propertyName==="value"&&Ta(Ui)){var t=[];Tg(t,Ui,e,rf(e)),sg(SE,t)}}function TE(e,t,n){e==="focusin"?(vh(),_i=t,Ui=n,_i.attachEvent("onpropertychange",bg)):e==="focusout"&&vh()}function CE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ta(Ui)}function bE(e,t){if(e==="click")return Ta(t)}function AE(e,t){if(e==="input"||e==="change")return Ta(t)}function xE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dt=typeof Object.is=="function"?Object.is:xE;function Fi(e,t){if(dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vu.call(t,i)||!dt(e[i],t[i]))return!1}return!0}function yh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wh(e,t){var n=yh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yh(n)}}function Ag(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ag(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xg(){for(var e=window,t=Ps();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ps(e.document)}return t}function hf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function PE(e){var t=xg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ag(n.ownerDocument.documentElement,n)){if(r!==null&&hf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=wh(n,o);var s=wh(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var RE=Lt&&"documentMode"in document&&11>=document.documentMode,cr=null,Mu=null,ki=null,$u=!1;function Eh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$u||cr==null||cr!==Ps(r)||(r=cr,"selectionStart"in r&&hf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ki&&Fi(ki,r)||(ki=r,r=$s(Mu,"onSelect"),0<r.length&&(t=new cf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=cr)))}function Ho(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fr={animationend:Ho("Animation","AnimationEnd"),animationiteration:Ho("Animation","AnimationIteration"),animationstart:Ho("Animation","AnimationStart"),transitionend:Ho("Transition","TransitionEnd")},bl={},Pg={};Lt&&(Pg=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function Ca(e){if(bl[e])return bl[e];if(!fr[e])return e;var t=fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pg)return bl[e]=t[n];return e}var Rg=Ca("animationend"),Og=Ca("animationiteration"),Ng=Ca("animationstart"),Dg=Ca("transitionend"),Lg=new Map,_h="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(e,t){Lg.set(e,t),nr(t,[e])}for(var Al=0;Al<_h.length;Al++){var xl=_h[Al],OE=xl.toLowerCase(),NE=xl[0].toUpperCase()+xl.slice(1);Sn(OE,"on"+NE)}Sn(Rg,"onAnimationEnd");Sn(Og,"onAnimationIteration");Sn(Ng,"onAnimationStart");Sn("dblclick","onDoubleClick");Sn("focusin","onFocus");Sn("focusout","onBlur");Sn(Dg,"onTransitionEnd");Mr("onMouseEnter",["mouseout","mouseover"]);Mr("onMouseLeave",["mouseout","mouseover"]);Mr("onPointerEnter",["pointerout","pointerover"]);Mr("onPointerLeave",["pointerout","pointerover"]);nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DE=new Set("cancel close invalid load scroll toggle".split(" ").concat(pi));function kh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ow(r,t,void 0,e),e.currentTarget=null}function Mg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;kh(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;kh(i,a,u),o=l}}}if(Os)throw e=Ou,Os=!1,Ou=null,e}function W(e,t){var n=t[Bu];n===void 0&&(n=t[Bu]=new Set);var r=e+"__bubble";n.has(r)||($g(t,e,2,!1),n.add(r))}function Pl(e,t,n){var r=0;t&&(r|=4),$g(n,e,r,t)}var Vo="_reactListening"+Math.random().toString(36).slice(2);function ji(e){if(!e[Vo]){e[Vo]=!0,Vm.forEach(function(n){n!=="selectionchange"&&(DE.has(n)||Pl(n,!1,e),Pl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vo]||(t[Vo]=!0,Pl("selectionchange",!1,t))}}function $g(e,t,n,r){switch(Eg(t)){case 1:var i=Yw;break;case 4:i=Xw;break;default:i=lf}n=i.bind(null,t,n,e),i=void 0,!Ru||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Rl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Nn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}sg(function(){var u=o,c=rf(n),f=[];e:{var h=Lg.get(e);if(h!==void 0){var g=cf,v=e;switch(e){case"keypress":if(ms(n)===0)break e;case"keydown":case"keyup":g=cE;break;case"focusin":v="focus",g=Il;break;case"focusout":v="blur",g=Il;break;case"beforeblur":case"afterblur":g=Il;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=ch;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Jw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=hE;break;case Rg:case Og:case Ng:g=tE;break;case Dg:g=mE;break;case"scroll":g=qw;break;case"wheel":g=vE;break;case"copy":case"cut":case"paste":g=rE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=dh}var y=(t&4)!==0,R=!y&&e==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var d=u,m;d!==null;){m=d;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=Di(d,p),w!=null&&y.push(zi(d,w,m)))),R)break;d=d.return}0<y.length&&(h=new g(h,v,null,n,c),f.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==xu&&(v=n.relatedTarget||n.fromElement)&&(Nn(v)||v[Mt]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Nn(v):null,v!==null&&(R=rr(v),v!==R||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(y=ch,w="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=dh,w="onPointerLeave",p="onPointerEnter",d="pointer"),R=g==null?h:dr(g),m=v==null?h:dr(v),h=new y(w,d+"leave",g,n,c),h.target=R,h.relatedTarget=m,w=null,Nn(c)===u&&(y=new y(p,d+"enter",v,n,c),y.target=m,y.relatedTarget=R,w=y),R=w,g&&v)t:{for(y=g,p=v,d=0,m=y;m;m=sr(m))d++;for(m=0,w=p;w;w=sr(w))m++;for(;0<d-m;)y=sr(y),d--;for(;0<m-d;)p=sr(p),m--;for(;d--;){if(y===p||p!==null&&y===p.alternate)break t;y=sr(y),p=sr(p)}y=null}else y=null;g!==null&&Sh(f,h,g,y,!1),v!==null&&R!==null&&Sh(f,R,v,y,!0)}}e:{if(h=u?dr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var _=IE;else if(mh(h))if(Cg)_=AE;else{_=CE;var k=TE}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(_=bE);if(_&&(_=_(e,u))){Tg(f,_,n,c);break e}k&&k(e,h,u),e==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&Iu(h,"number",h.value)}switch(k=u?dr(u):window,e){case"focusin":(mh(k)||k.contentEditable==="true")&&(cr=k,Mu=u,ki=null);break;case"focusout":ki=Mu=cr=null;break;case"mousedown":$u=!0;break;case"contextmenu":case"mouseup":case"dragend":$u=!1,Eh(f,n,c);break;case"selectionchange":if(RE)break;case"keydown":case"keyup":Eh(f,n,c)}var S;if(df)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else ur?Sg(e,n)&&(x="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(kg&&n.locale!=="ko"&&(ur||x!=="onCompositionStart"?x==="onCompositionEnd"&&ur&&(S=_g()):(rn=c,uf="value"in rn?rn.value:rn.textContent,ur=!0)),k=$s(u,x),0<k.length&&(x=new fh(x,e,null,n,c),f.push({event:x,listeners:k}),S?x.data=S:(S=Ig(n),S!==null&&(x.data=S)))),(S=wE?EE(e,n):_E(e,n))&&(u=$s(u,"onBeforeInput"),0<u.length&&(c=new fh("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=S))}Mg(f,t)})}function zi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $s(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Di(e,n),o!=null&&r.unshift(zi(e,o,i)),o=Di(e,t),o!=null&&r.push(zi(e,o,i))),e=e.return}return r}function sr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Sh(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Di(n,o),l!=null&&s.unshift(zi(n,l,a))):i||(l=Di(n,o),l!=null&&s.push(zi(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var LE=/\r\n?/g,ME=/\u0000|\uFFFD/g;function Ih(e){return(typeof e=="string"?e:""+e).replace(LE,`
`).replace(ME,"")}function Wo(e,t,n){if(t=Ih(t),Ih(e)!==t&&n)throw Error(E(425))}function Us(){}var Uu=null,Fu=null;function ju(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zu=typeof setTimeout=="function"?setTimeout:void 0,$E=typeof clearTimeout=="function"?clearTimeout:void 0,Th=typeof Promise=="function"?Promise:void 0,UE=typeof queueMicrotask=="function"?queueMicrotask:typeof Th<"u"?function(e){return Th.resolve(null).then(e).catch(FE)}:zu;function FE(e){setTimeout(function(){throw e})}function Ol(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),$i(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$i(t)}function fn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ch(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Xr=Math.random().toString(36).slice(2),vt="__reactFiber$"+Xr,Bi="__reactProps$"+Xr,Mt="__reactContainer$"+Xr,Bu="__reactEvents$"+Xr,jE="__reactListeners$"+Xr,zE="__reactHandles$"+Xr;function Nn(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mt]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ch(e);e!==null;){if(n=e[vt])return n;e=Ch(e)}return t}e=n,n=e.parentNode}return null}function po(e){return e=e[vt]||e[Mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function ba(e){return e[Bi]||null}var Hu=[],hr=-1;function In(e){return{current:e}}function K(e){0>hr||(e.current=Hu[hr],Hu[hr]=null,hr--)}function V(e,t){hr++,Hu[hr]=e.current,e.current=t}var wn={},Te=In(wn),De=In(!1),Wn=wn;function $r(e,t){var n=e.type.contextTypes;if(!n)return wn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Le(e){return e=e.childContextTypes,e!=null}function Fs(){K(De),K(Te)}function bh(e,t,n){if(Te.current!==wn)throw Error(E(168));V(Te,t),V(De,n)}function Ug(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,Tw(e)||"Unknown",i));return Z({},n,r)}function js(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wn,Wn=Te.current,V(Te,e),V(De,De.current),!0}function Ah(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=Ug(e,t,Wn),r.__reactInternalMemoizedMergedChildContext=e,K(De),K(Te),V(Te,e)):K(De),V(De,n)}var bt=null,Aa=!1,Nl=!1;function Fg(e){bt===null?bt=[e]:bt.push(e)}function BE(e){Aa=!0,Fg(e)}function Tn(){if(!Nl&&bt!==null){Nl=!0;var e=0,t=H;try{var n=bt;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}bt=null,Aa=!1}catch(i){throw bt!==null&&(bt=bt.slice(e+1)),cg(of,Tn),i}finally{H=t,Nl=!1}}return null}var pr=[],mr=0,zs=null,Bs=0,Xe=[],qe=0,Gn=null,xt=1,Pt="";function Pn(e,t){pr[mr++]=Bs,pr[mr++]=zs,zs=e,Bs=t}function jg(e,t,n){Xe[qe++]=xt,Xe[qe++]=Pt,Xe[qe++]=Gn,Gn=e;var r=xt;e=Pt;var i=32-ct(r)-1;r&=~(1<<i),n+=1;var o=32-ct(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,xt=1<<32-ct(t)+i|n<<i|r,Pt=o+e}else xt=1<<o|n<<i|r,Pt=e}function pf(e){e.return!==null&&(Pn(e,1),jg(e,1,0))}function mf(e){for(;e===zs;)zs=pr[--mr],pr[mr]=null,Bs=pr[--mr],pr[mr]=null;for(;e===Gn;)Gn=Xe[--qe],Xe[qe]=null,Pt=Xe[--qe],Xe[qe]=null,xt=Xe[--qe],Xe[qe]=null}var ze=null,Fe=null,X=!1,lt=null;function zg(e,t){var n=Qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function xh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ze=e,Fe=fn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ze=e,Fe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Gn!==null?{id:xt,overflow:Pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ze=e,Fe=null,!0):!1;default:return!1}}function Vu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wu(e){if(X){var t=Fe;if(t){var n=t;if(!xh(e,t)){if(Vu(e))throw Error(E(418));t=fn(n.nextSibling);var r=ze;t&&xh(e,t)?zg(r,n):(e.flags=e.flags&-4097|2,X=!1,ze=e)}}else{if(Vu(e))throw Error(E(418));e.flags=e.flags&-4097|2,X=!1,ze=e}}}function Ph(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function Go(e){if(e!==ze)return!1;if(!X)return Ph(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ju(e.type,e.memoizedProps)),t&&(t=Fe)){if(Vu(e))throw Bg(),Error(E(418));for(;t;)zg(e,t),t=fn(t.nextSibling)}if(Ph(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Fe=fn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Fe=null}}else Fe=ze?fn(e.stateNode.nextSibling):null;return!0}function Bg(){for(var e=Fe;e;)e=fn(e.nextSibling)}function Ur(){Fe=ze=null,X=!1}function gf(e){lt===null?lt=[e]:lt.push(e)}var HE=Vt.ReactCurrentBatchConfig;function st(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Hs=In(null),Vs=null,gr=null,vf=null;function yf(){vf=gr=Vs=null}function wf(e){var t=Hs.current;K(Hs),e._currentValue=t}function Gu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function xr(e,t){Vs=e,vf=gr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ne=!0),e.firstContext=null)}function tt(e){var t=e._currentValue;if(vf!==e)if(e={context:e,memoizedValue:t,next:null},gr===null){if(Vs===null)throw Error(E(308));gr=e,Vs.dependencies={lanes:0,firstContext:e}}else gr=gr.next=e;return t}var Dn=null;function Ef(e){Dn===null?Dn=[e]:Dn.push(e)}function Hg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ef(t)):(n.next=i.next,i.next=n),t.interleaved=n,$t(e,r)}function $t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Qt=!1;function _f(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Dt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,$t(e,n)}return i=r.interleaved,i===null?(t.next=t,Ef(r)):(t.next=i.next,i.next=t),r.interleaved=t,$t(e,n)}function gs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sf(e,n)}}function Rh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ws(e,t,n,r){var i=e.updateQueue;Qt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var h=a.lane,g=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,y=a;switch(h=t,g=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){f=v.call(g,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(g,f,h):v,h==null)break e;f=Z({},f,h);break e;case 2:Qt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Yn|=s,e.lanes=s,e.memoizedState=f}}function Oh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var Wg=new Hm.Component().refs;function Ku(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xa={isMounted:function(e){return(e=e._reactInternals)?rr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=xe(),i=pn(e),o=Dt(r,i);o.payload=t,n!=null&&(o.callback=n),t=dn(e,o,i),t!==null&&(ft(t,e,i,r),gs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=xe(),i=pn(e),o=Dt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=dn(e,o,i),t!==null&&(ft(t,e,i,r),gs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=xe(),r=pn(e),i=Dt(n,r);i.tag=2,t!=null&&(i.callback=t),t=dn(e,i,r),t!==null&&(ft(t,e,r,n),gs(t,e,r))}};function Nh(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Fi(n,r)||!Fi(i,o):!0}function Gg(e,t,n){var r=!1,i=wn,o=t.contextType;return typeof o=="object"&&o!==null?o=tt(o):(i=Le(t)?Wn:Te.current,r=t.contextTypes,o=(r=r!=null)?$r(e,i):wn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Dh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xa.enqueueReplaceState(t,t.state,null)}function Yu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Wg,_f(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=tt(o):(o=Le(t)?Wn:Te.current,i.context=$r(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ku(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&xa.enqueueReplaceState(i,i.state,null),Ws(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ai(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===Wg&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function Ko(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Lh(e){var t=e._init;return t(e._payload)}function Kg(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=mn(p,d),p.index=0,p.sibling=null,p}function o(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,m,w){return d===null||d.tag!==6?(d=jl(m,p.mode,w),d.return=p,d):(d=i(d,m),d.return=p,d)}function l(p,d,m,w){var _=m.type;return _===lr?c(p,d,m.props.children,w,m.key):d!==null&&(d.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===qt&&Lh(_)===d.type)?(w=i(d,m.props),w.ref=ai(p,d,m),w.return=p,w):(w=ks(m.type,m.key,m.props,null,p.mode,w),w.ref=ai(p,d,m),w.return=p,w)}function u(p,d,m,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=zl(m,p.mode,w),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function c(p,d,m,w,_){return d===null||d.tag!==7?(d=Bn(m,p.mode,w,_),d.return=p,d):(d=i(d,m),d.return=p,d)}function f(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=jl(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Mo:return m=ks(d.type,d.key,d.props,null,p.mode,m),m.ref=ai(p,null,d),m.return=p,m;case ar:return d=zl(d,p.mode,m),d.return=p,d;case qt:var w=d._init;return f(p,w(d._payload),m)}if(di(d)||ni(d))return d=Bn(d,p.mode,m,null),d.return=p,d;Ko(p,d)}return null}function h(p,d,m,w){var _=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return _!==null?null:a(p,d,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Mo:return m.key===_?l(p,d,m,w):null;case ar:return m.key===_?u(p,d,m,w):null;case qt:return _=m._init,h(p,d,_(m._payload),w)}if(di(m)||ni(m))return _!==null?null:c(p,d,m,w,null);Ko(p,m)}return null}function g(p,d,m,w,_){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(d,p,""+w,_);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Mo:return p=p.get(w.key===null?m:w.key)||null,l(d,p,w,_);case ar:return p=p.get(w.key===null?m:w.key)||null,u(d,p,w,_);case qt:var k=w._init;return g(p,d,m,k(w._payload),_)}if(di(w)||ni(w))return p=p.get(m)||null,c(d,p,w,_,null);Ko(d,w)}return null}function v(p,d,m,w){for(var _=null,k=null,S=d,x=d=0,F=null;S!==null&&x<m.length;x++){S.index>x?(F=S,S=null):F=S.sibling;var L=h(p,S,m[x],w);if(L===null){S===null&&(S=F);break}e&&S&&L.alternate===null&&t(p,S),d=o(L,d,x),k===null?_=L:k.sibling=L,k=L,S=F}if(x===m.length)return n(p,S),X&&Pn(p,x),_;if(S===null){for(;x<m.length;x++)S=f(p,m[x],w),S!==null&&(d=o(S,d,x),k===null?_=S:k.sibling=S,k=S);return X&&Pn(p,x),_}for(S=r(p,S);x<m.length;x++)F=g(S,p,x,m[x],w),F!==null&&(e&&F.alternate!==null&&S.delete(F.key===null?x:F.key),d=o(F,d,x),k===null?_=F:k.sibling=F,k=F);return e&&S.forEach(function(it){return t(p,it)}),X&&Pn(p,x),_}function y(p,d,m,w){var _=ni(m);if(typeof _!="function")throw Error(E(150));if(m=_.call(m),m==null)throw Error(E(151));for(var k=_=null,S=d,x=d=0,F=null,L=m.next();S!==null&&!L.done;x++,L=m.next()){S.index>x?(F=S,S=null):F=S.sibling;var it=h(p,S,L.value,w);if(it===null){S===null&&(S=F);break}e&&S&&it.alternate===null&&t(p,S),d=o(it,d,x),k===null?_=it:k.sibling=it,k=it,S=F}if(L.done)return n(p,S),X&&Pn(p,x),_;if(S===null){for(;!L.done;x++,L=m.next())L=f(p,L.value,w),L!==null&&(d=o(L,d,x),k===null?_=L:k.sibling=L,k=L);return X&&Pn(p,x),_}for(S=r(p,S);!L.done;x++,L=m.next())L=g(S,p,x,L.value,w),L!==null&&(e&&L.alternate!==null&&S.delete(L.key===null?x:L.key),d=o(L,d,x),k===null?_=L:k.sibling=L,k=L);return e&&S.forEach(function(ei){return t(p,ei)}),X&&Pn(p,x),_}function R(p,d,m,w){if(typeof m=="object"&&m!==null&&m.type===lr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Mo:e:{for(var _=m.key,k=d;k!==null;){if(k.key===_){if(_=m.type,_===lr){if(k.tag===7){n(p,k.sibling),d=i(k,m.props.children),d.return=p,p=d;break e}}else if(k.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===qt&&Lh(_)===k.type){n(p,k.sibling),d=i(k,m.props),d.ref=ai(p,k,m),d.return=p,p=d;break e}n(p,k);break}else t(p,k);k=k.sibling}m.type===lr?(d=Bn(m.props.children,p.mode,w,m.key),d.return=p,p=d):(w=ks(m.type,m.key,m.props,null,p.mode,w),w.ref=ai(p,d,m),w.return=p,p=w)}return s(p);case ar:e:{for(k=m.key;d!==null;){if(d.key===k)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=zl(m,p.mode,w),d.return=p,p=d}return s(p);case qt:return k=m._init,R(p,d,k(m._payload),w)}if(di(m))return v(p,d,m,w);if(ni(m))return y(p,d,m,w);Ko(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=jl(m,p.mode,w),d.return=p,p=d),s(p)):n(p,d)}return R}var Fr=Kg(!0),Yg=Kg(!1),mo={},_t=In(mo),Hi=In(mo),Vi=In(mo);function Ln(e){if(e===mo)throw Error(E(174));return e}function kf(e,t){switch(V(Vi,t),V(Hi,e),V(_t,mo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Cu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Cu(t,e)}K(_t),V(_t,t)}function jr(){K(_t),K(Hi),K(Vi)}function Xg(e){Ln(Vi.current);var t=Ln(_t.current),n=Cu(t,e.type);t!==n&&(V(Hi,e),V(_t,n))}function Sf(e){Hi.current===e&&(K(_t),K(Hi))}var Q=In(0);function Gs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Dl=[];function If(){for(var e=0;e<Dl.length;e++)Dl[e]._workInProgressVersionPrimary=null;Dl.length=0}var vs=Vt.ReactCurrentDispatcher,Ll=Vt.ReactCurrentBatchConfig,Kn=0,J=null,se=null,ce=null,Ks=!1,Si=!1,Wi=0,VE=0;function ye(){throw Error(E(321))}function Tf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!dt(e[n],t[n]))return!1;return!0}function Cf(e,t,n,r,i,o){if(Kn=o,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,vs.current=e===null||e.memoizedState===null?YE:XE,e=n(r,i),Si){o=0;do{if(Si=!1,Wi=0,25<=o)throw Error(E(301));o+=1,ce=se=null,t.updateQueue=null,vs.current=qE,e=n(r,i)}while(Si)}if(vs.current=Ys,t=se!==null&&se.next!==null,Kn=0,ce=se=J=null,Ks=!1,t)throw Error(E(300));return e}function bf(){var e=Wi!==0;return Wi=0,e}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?J.memoizedState=ce=e:ce=ce.next=e,ce}function nt(){if(se===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=ce===null?J.memoizedState:ce.next;if(t!==null)ce=t,se=e;else{if(e===null)throw Error(E(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},ce===null?J.memoizedState=ce=e:ce=ce.next=e}return ce}function Gi(e,t){return typeof t=="function"?t(e):t}function Ml(e){var t=nt(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=se,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Kn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,J.lanes|=c,Yn|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,dt(r,t.memoizedState)||(Ne=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,J.lanes|=o,Yn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $l(e){var t=nt(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);dt(o,t.memoizedState)||(Ne=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function qg(){}function Qg(e,t){var n=J,r=nt(),i=t(),o=!dt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ne=!0),r=r.queue,Af(ev.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,Ki(9,Zg.bind(null,n,r,i,t),void 0,null),fe===null)throw Error(E(349));Kn&30||Jg(n,t,i)}return i}function Jg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zg(e,t,n,r){t.value=n,t.getSnapshot=r,tv(t)&&nv(e)}function ev(e,t,n){return n(function(){tv(t)&&nv(e)})}function tv(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!dt(e,n)}catch{return!0}}function nv(e){var t=$t(e,1);t!==null&&ft(t,e,1,-1)}function Mh(e){var t=gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:e},t.queue=e,e=e.dispatch=KE.bind(null,J,e),[t.memoizedState,e]}function Ki(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function rv(){return nt().memoizedState}function ys(e,t,n,r){var i=gt();J.flags|=e,i.memoizedState=Ki(1|t,n,void 0,r===void 0?null:r)}function Pa(e,t,n,r){var i=nt();r=r===void 0?null:r;var o=void 0;if(se!==null){var s=se.memoizedState;if(o=s.destroy,r!==null&&Tf(r,s.deps)){i.memoizedState=Ki(t,n,o,r);return}}J.flags|=e,i.memoizedState=Ki(1|t,n,o,r)}function $h(e,t){return ys(8390656,8,e,t)}function Af(e,t){return Pa(2048,8,e,t)}function iv(e,t){return Pa(4,2,e,t)}function ov(e,t){return Pa(4,4,e,t)}function sv(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function av(e,t,n){return n=n!=null?n.concat([e]):null,Pa(4,4,sv.bind(null,t,e),n)}function xf(){}function lv(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Tf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function uv(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Tf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function cv(e,t,n){return Kn&21?(dt(n,t)||(n=hg(),J.lanes|=n,Yn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=n)}function WE(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=Ll.transition;Ll.transition={};try{e(!1),t()}finally{H=n,Ll.transition=r}}function fv(){return nt().memoizedState}function GE(e,t,n){var r=pn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dv(e))hv(t,n);else if(n=Hg(e,t,n,r),n!==null){var i=xe();ft(n,e,r,i),pv(n,t,r)}}function KE(e,t,n){var r=pn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dv(e))hv(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,dt(a,s)){var l=t.interleaved;l===null?(i.next=i,Ef(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Hg(e,t,i,r),n!==null&&(i=xe(),ft(n,e,r,i),pv(n,t,r))}}function dv(e){var t=e.alternate;return e===J||t!==null&&t===J}function hv(e,t){Si=Ks=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sf(e,n)}}var Ys={readContext:tt,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},YE={readContext:tt,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:$h,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ys(4194308,4,sv.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ys(4194308,4,e,t)},useInsertionEffect:function(e,t){return ys(4,2,e,t)},useMemo:function(e,t){var n=gt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=GE.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:Mh,useDebugValue:xf,useDeferredValue:function(e){return gt().memoizedState=e},useTransition:function(){var e=Mh(!1),t=e[0];return e=WE.bind(null,e[1]),gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=J,i=gt();if(X){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),fe===null)throw Error(E(349));Kn&30||Jg(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,$h(ev.bind(null,r,o,e),[e]),r.flags|=2048,Ki(9,Zg.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=gt(),t=fe.identifierPrefix;if(X){var n=Pt,r=xt;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=VE++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},XE={readContext:tt,useCallback:lv,useContext:tt,useEffect:Af,useImperativeHandle:av,useInsertionEffect:iv,useLayoutEffect:ov,useMemo:uv,useReducer:Ml,useRef:rv,useState:function(){return Ml(Gi)},useDebugValue:xf,useDeferredValue:function(e){var t=nt();return cv(t,se.memoizedState,e)},useTransition:function(){var e=Ml(Gi)[0],t=nt().memoizedState;return[e,t]},useMutableSource:qg,useSyncExternalStore:Qg,useId:fv,unstable_isNewReconciler:!1},qE={readContext:tt,useCallback:lv,useContext:tt,useEffect:Af,useImperativeHandle:av,useInsertionEffect:iv,useLayoutEffect:ov,useMemo:uv,useReducer:$l,useRef:rv,useState:function(){return $l(Gi)},useDebugValue:xf,useDeferredValue:function(e){var t=nt();return se===null?t.memoizedState=e:cv(t,se.memoizedState,e)},useTransition:function(){var e=$l(Gi)[0],t=nt().memoizedState;return[e,t]},useMutableSource:qg,useSyncExternalStore:Qg,useId:fv,unstable_isNewReconciler:!1};function zr(e,t){try{var n="",r=t;do n+=Iw(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ul(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Xu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var QE=typeof WeakMap=="function"?WeakMap:Map;function mv(e,t,n){n=Dt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qs||(qs=!0,oc=r),Xu(e,t)},n}function gv(e,t,n){n=Dt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Xu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Xu(e,t),typeof r!="function"&&(hn===null?hn=new Set([this]):hn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Uh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new QE;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=f_.bind(null,e,t,n),t.then(e,e))}function Fh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function jh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Dt(-1,1),t.tag=2,dn(n,t,1))),n.lanes|=1),e)}var JE=Vt.ReactCurrentOwner,Ne=!1;function be(e,t,n,r){t.child=e===null?Yg(t,null,n,r):Fr(t,e.child,n,r)}function zh(e,t,n,r,i){n=n.render;var o=t.ref;return xr(t,i),r=Cf(e,t,n,r,o,i),n=bf(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ut(e,t,i)):(X&&n&&pf(t),t.flags|=1,be(e,t,r,i),t.child)}function Bh(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!$f(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,vv(e,t,o,r,i)):(e=ks(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Fi,n(s,r)&&e.ref===t.ref)return Ut(e,t,i)}return t.flags|=1,e=mn(o,r),e.ref=t.ref,e.return=t,t.child=e}function vv(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Fi(o,r)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ne=!0);else return t.lanes=e.lanes,Ut(e,t,i)}return qu(e,t,n,r,i)}function yv(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(yr,Ue),Ue|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(yr,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,V(yr,Ue),Ue|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,V(yr,Ue),Ue|=r;return be(e,t,i,n),t.child}function wv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function qu(e,t,n,r,i){var o=Le(n)?Wn:Te.current;return o=$r(t,o),xr(t,i),n=Cf(e,t,n,r,o,i),r=bf(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ut(e,t,i)):(X&&r&&pf(t),t.flags|=1,be(e,t,n,i),t.child)}function Hh(e,t,n,r,i){if(Le(n)){var o=!0;js(t)}else o=!1;if(xr(t,i),t.stateNode===null)ws(e,t),Gg(t,n,r),Yu(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=tt(u):(u=Le(n)?Wn:Te.current,u=$r(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Dh(t,s,r,u),Qt=!1;var h=t.memoizedState;s.state=h,Ws(t,r,s,i),l=t.memoizedState,a!==r||h!==l||De.current||Qt?(typeof c=="function"&&(Ku(t,n,c,r),l=t.memoizedState),(a=Qt||Nh(t,n,a,r,h,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Vg(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:st(t.type,a),s.props=u,f=t.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=tt(l):(l=Le(n)?Wn:Te.current,l=$r(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Dh(t,s,r,l),Qt=!1,h=t.memoizedState,s.state=h,Ws(t,r,s,i);var v=t.memoizedState;a!==f||h!==v||De.current||Qt?(typeof g=="function"&&(Ku(t,n,g,r),v=t.memoizedState),(u=Qt||Nh(t,n,u,r,h,v,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Qu(e,t,n,r,o,i)}function Qu(e,t,n,r,i,o){wv(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Ah(t,n,!1),Ut(e,t,o);r=t.stateNode,JE.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Fr(t,e.child,null,o),t.child=Fr(t,null,a,o)):be(e,t,a,o),t.memoizedState=r.state,i&&Ah(t,n,!0),t.child}function Ev(e){var t=e.stateNode;t.pendingContext?bh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&bh(e,t.context,!1),kf(e,t.containerInfo)}function Vh(e,t,n,r,i){return Ur(),gf(i),t.flags|=256,be(e,t,n,r),t.child}var Ju={dehydrated:null,treeContext:null,retryLane:0};function Zu(e){return{baseLanes:e,cachePool:null,transitions:null}}function _v(e,t,n){var r=t.pendingProps,i=Q.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),V(Q,i&1),e===null)return Wu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Na(s,r,0,null),e=Bn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Zu(n),t.memoizedState=Ju,e):Pf(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ZE(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=mn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=mn(a,o):(o=Bn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Zu(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Ju,r}return o=e.child,e=o.sibling,r=mn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Pf(e,t){return t=Na({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Yo(e,t,n,r){return r!==null&&gf(r),Fr(t,e.child,null,n),e=Pf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ZE(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Ul(Error(E(422))),Yo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Na({mode:"visible",children:r.children},i,0,null),o=Bn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Fr(t,e.child,null,s),t.child.memoizedState=Zu(s),t.memoizedState=Ju,o);if(!(t.mode&1))return Yo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(E(419)),r=Ul(o,r,void 0),Yo(e,t,s,r)}if(a=(s&e.childLanes)!==0,Ne||a){if(r=fe,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,$t(e,i),ft(r,e,i,-1))}return Mf(),r=Ul(Error(E(421))),Yo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=d_.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Fe=fn(i.nextSibling),ze=t,X=!0,lt=null,e!==null&&(Xe[qe++]=xt,Xe[qe++]=Pt,Xe[qe++]=Gn,xt=e.id,Pt=e.overflow,Gn=t),t=Pf(t,r.children),t.flags|=4096,t)}function Wh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Gu(e.return,t,n)}function Fl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function kv(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(be(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wh(e,n,t);else if(e.tag===19)Wh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(Q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Gs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Fl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Gs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Fl(t,!0,n,null,o);break;case"together":Fl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ws(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ut(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function e_(e,t,n){switch(t.tag){case 3:Ev(t),Ur();break;case 5:Xg(t);break;case 1:Le(t.type)&&js(t);break;case 4:kf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;V(Hs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?_v(e,t,n):(V(Q,Q.current&1),e=Ut(e,t,n),e!==null?e.sibling:null);V(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return kv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,yv(e,t,n)}return Ut(e,t,n)}var Sv,ec,Iv,Tv;Sv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ec=function(){};Iv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ln(_t.current);var o=null;switch(n){case"input":i=ku(e,i),r=ku(e,r),o=[];break;case"select":i=Z({},i,{value:void 0}),r=Z({},r,{value:void 0}),o=[];break;case"textarea":i=Tu(e,i),r=Tu(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Us)}bu(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Oi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Oi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&W("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Tv=function(e,t,n,r){n!==r&&(t.flags|=4)};function li(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function t_(e,t,n){var r=t.pendingProps;switch(mf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return Le(t.type)&&Fs(),we(t),null;case 3:return r=t.stateNode,jr(),K(De),K(Te),If(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Go(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,lt!==null&&(lc(lt),lt=null))),ec(e,t),we(t),null;case 5:Sf(t);var i=Ln(Vi.current);if(n=t.type,e!==null&&t.stateNode!=null)Iv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return we(t),null}if(e=Ln(_t.current),Go(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[vt]=t,r[Bi]=o,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<pi.length;i++)W(pi[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":eh(r,o),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},W("invalid",r);break;case"textarea":nh(r,o),W("invalid",r)}bu(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Wo(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Wo(r.textContent,a,e),i=["children",""+a]):Oi.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&W("scroll",r)}switch(n){case"input":$o(r),th(r,o,!0);break;case"textarea":$o(r),rh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Us)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Jm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[vt]=t,e[Bi]=r,Sv(e,t,!1,!1),t.stateNode=e;e:{switch(s=Au(n,r),n){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<pi.length;i++)W(pi[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":eh(e,r),i=ku(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Z({},r,{value:void 0}),W("invalid",e);break;case"textarea":nh(e,r),i=Tu(e,r),W("invalid",e);break;default:i=r}bu(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?tg(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Zm(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ni(e,l):typeof l=="number"&&Ni(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Oi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&W("scroll",e):l!=null&&Zc(e,o,l,s))}switch(n){case"input":$o(e),th(e,r,!1);break;case"textarea":$o(e),rh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Tr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Tr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Us)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return we(t),null;case 6:if(e&&t.stateNode!=null)Tv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=Ln(Vi.current),Ln(_t.current),Go(t)){if(r=t.stateNode,n=t.memoizedProps,r[vt]=t,(o=r.nodeValue!==n)&&(e=ze,e!==null))switch(e.tag){case 3:Wo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vt]=t,t.stateNode=r}return we(t),null;case 13:if(K(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Fe!==null&&t.mode&1&&!(t.flags&128))Bg(),Ur(),t.flags|=98560,o=!1;else if(o=Go(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[vt]=t}else Ur(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;we(t),o=!1}else lt!==null&&(lc(lt),lt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?ae===0&&(ae=3):Mf())),t.updateQueue!==null&&(t.flags|=4),we(t),null);case 4:return jr(),ec(e,t),e===null&&ji(t.stateNode.containerInfo),we(t),null;case 10:return wf(t.type._context),we(t),null;case 17:return Le(t.type)&&Fs(),we(t),null;case 19:if(K(Q),o=t.memoizedState,o===null)return we(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)li(o,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Gs(e),s!==null){for(t.flags|=128,li(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&re()>Br&&(t.flags|=128,r=!0,li(o,!1),t.lanes=4194304)}else{if(!r)if(e=Gs(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),li(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!X)return we(t),null}else 2*re()-o.renderingStartTime>Br&&n!==1073741824&&(t.flags|=128,r=!0,li(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=re(),t.sibling=null,n=Q.current,V(Q,r?n&1|2:n&1),t):(we(t),null);case 22:case 23:return Lf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ue&1073741824&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function n_(e,t){switch(mf(t),t.tag){case 1:return Le(t.type)&&Fs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jr(),K(De),K(Te),If(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Sf(t),null;case 13:if(K(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Ur()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(Q),null;case 4:return jr(),null;case 10:return wf(t.type._context),null;case 22:case 23:return Lf(),null;case 24:return null;default:return null}}var Xo=!1,ke=!1,r_=typeof WeakSet=="function"?WeakSet:Set,T=null;function vr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function tc(e,t,n){try{n()}catch(r){ee(e,t,r)}}var Gh=!1;function i_(e,t){if(Uu=Ls,e=xg(),hf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=e,h=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===e)break t;if(h===n&&++u===i&&(a=s),h===o&&++c===r&&(l=s),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fu={focusedElem:e,selectionRange:n},Ls=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,R=v.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:st(t.type,y),R);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){ee(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return v=Gh,Gh=!1,v}function Ii(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&tc(t,n,o)}i=i.next}while(i!==r)}}function Ra(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function nc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Cv(e){var t=e.alternate;t!==null&&(e.alternate=null,Cv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vt],delete t[Bi],delete t[Bu],delete t[jE],delete t[zE])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bv(e){return e.tag===5||e.tag===3||e.tag===4}function Kh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function rc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Us));else if(r!==4&&(e=e.child,e!==null))for(rc(e,t,n),e=e.sibling;e!==null;)rc(e,t,n),e=e.sibling}function ic(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ic(e,t,n),e=e.sibling;e!==null;)ic(e,t,n),e=e.sibling}var he=null,at=!1;function Kt(e,t,n){for(n=n.child;n!==null;)Av(e,t,n),n=n.sibling}function Av(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Sa,n)}catch{}switch(n.tag){case 5:ke||vr(n,t);case 6:var r=he,i=at;he=null,Kt(e,t,n),he=r,at=i,he!==null&&(at?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(at?(e=he,n=n.stateNode,e.nodeType===8?Ol(e.parentNode,n):e.nodeType===1&&Ol(e,n),$i(e)):Ol(he,n.stateNode));break;case 4:r=he,i=at,he=n.stateNode.containerInfo,at=!0,Kt(e,t,n),he=r,at=i;break;case 0:case 11:case 14:case 15:if(!ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&tc(n,t,s),i=i.next}while(i!==r)}Kt(e,t,n);break;case 1:if(!ke&&(vr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ee(n,t,a)}Kt(e,t,n);break;case 21:Kt(e,t,n);break;case 22:n.mode&1?(ke=(r=ke)||n.memoizedState!==null,Kt(e,t,n),ke=r):Kt(e,t,n);break;default:Kt(e,t,n)}}function Yh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new r_),t.forEach(function(r){var i=h_.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:he=a.stateNode,at=!1;break e;case 3:he=a.stateNode.containerInfo,at=!0;break e;case 4:he=a.stateNode.containerInfo,at=!0;break e}a=a.return}if(he===null)throw Error(E(160));Av(o,s,i),he=null,at=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ee(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xv(t,e),t=t.sibling}function xv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ot(t,e),mt(e),r&4){try{Ii(3,e,e.return),Ra(3,e)}catch(y){ee(e,e.return,y)}try{Ii(5,e,e.return)}catch(y){ee(e,e.return,y)}}break;case 1:ot(t,e),mt(e),r&512&&n!==null&&vr(n,n.return);break;case 5:if(ot(t,e),mt(e),r&512&&n!==null&&vr(n,n.return),e.flags&32){var i=e.stateNode;try{Ni(i,"")}catch(y){ee(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&qm(i,o),Au(a,s);var u=Au(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?tg(i,f):c==="dangerouslySetInnerHTML"?Zm(i,f):c==="children"?Ni(i,f):Zc(i,c,f,u)}switch(a){case"input":Su(i,o);break;case"textarea":Qm(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Tr(i,!!o.multiple,g,!1):h!==!!o.multiple&&(o.defaultValue!=null?Tr(i,!!o.multiple,o.defaultValue,!0):Tr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Bi]=o}catch(y){ee(e,e.return,y)}}break;case 6:if(ot(t,e),mt(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){ee(e,e.return,y)}}break;case 3:if(ot(t,e),mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$i(t.containerInfo)}catch(y){ee(e,e.return,y)}break;case 4:ot(t,e),mt(e);break;case 13:ot(t,e),mt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Nf=re())),r&4&&Yh(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(ke=(u=ke)||c,ot(t,e),ke=u):ot(t,e),mt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(T=e,c=e.child;c!==null;){for(f=T=c;T!==null;){switch(h=T,g=h.child,h.tag){case 0:case 11:case 14:case 15:Ii(4,h,h.return);break;case 1:vr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){ee(r,n,y)}}break;case 5:vr(h,h.return);break;case 22:if(h.memoizedState!==null){qh(f);continue}}g!==null?(g.return=h,T=g):qh(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=eg("display",s))}catch(y){ee(e,e.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){ee(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ot(t,e),mt(e),r&4&&Yh(e);break;case 21:break;default:ot(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(bv(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ni(i,""),r.flags&=-33);var o=Kh(e);ic(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Kh(e);rc(e,a,s);break;default:throw Error(E(161))}}catch(l){ee(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function o_(e,t,n){T=e,Pv(e)}function Pv(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Xo;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ke;a=Xo;var u=ke;if(Xo=s,(ke=l)&&!u)for(T=i;T!==null;)s=T,l=s.child,s.tag===22&&s.memoizedState!==null?Qh(i):l!==null?(l.return=s,T=l):Qh(i);for(;o!==null;)T=o,Pv(o),o=o.sibling;T=i,Xo=a,ke=u}Xh(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,T=o):Xh(e)}}function Xh(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ke||Ra(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ke)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:st(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Oh(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Oh(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&$i(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}ke||t.flags&512&&nc(t)}catch(h){ee(t,t.return,h)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function qh(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function Qh(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ra(4,t)}catch(l){ee(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ee(t,i,l)}}var o=t.return;try{nc(t)}catch(l){ee(t,o,l)}break;case 5:var s=t.return;try{nc(t)}catch(l){ee(t,s,l)}}}catch(l){ee(t,t.return,l)}if(t===e){T=null;break}var a=t.sibling;if(a!==null){a.return=t.return,T=a;break}T=t.return}}var s_=Math.ceil,Xs=Vt.ReactCurrentDispatcher,Rf=Vt.ReactCurrentOwner,Je=Vt.ReactCurrentBatchConfig,z=0,fe=null,oe=null,pe=0,Ue=0,yr=In(0),ae=0,Yi=null,Yn=0,Oa=0,Of=0,Ti=null,Oe=null,Nf=0,Br=1/0,Ct=null,qs=!1,oc=null,hn=null,qo=!1,on=null,Qs=0,Ci=0,sc=null,Es=-1,_s=0;function xe(){return z&6?re():Es!==-1?Es:Es=re()}function pn(e){return e.mode&1?z&2&&pe!==0?pe&-pe:HE.transition!==null?(_s===0&&(_s=hg()),_s):(e=H,e!==0||(e=window.event,e=e===void 0?16:Eg(e.type)),e):1}function ft(e,t,n,r){if(50<Ci)throw Ci=0,sc=null,Error(E(185));fo(e,n,r),(!(z&2)||e!==fe)&&(e===fe&&(!(z&2)&&(Oa|=n),ae===4&&Zt(e,pe)),Me(e,r),n===1&&z===0&&!(t.mode&1)&&(Br=re()+500,Aa&&Tn()))}function Me(e,t){var n=e.callbackNode;Hw(e,t);var r=Ds(e,e===fe?pe:0);if(r===0)n!==null&&sh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&sh(n),t===1)e.tag===0?BE(Jh.bind(null,e)):Fg(Jh.bind(null,e)),UE(function(){!(z&6)&&Tn()}),n=null;else{switch(pg(r)){case 1:n=of;break;case 4:n=fg;break;case 16:n=Ns;break;case 536870912:n=dg;break;default:n=Ns}n=Uv(n,Rv.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Rv(e,t){if(Es=-1,_s=0,z&6)throw Error(E(327));var n=e.callbackNode;if(Pr()&&e.callbackNode!==n)return null;var r=Ds(e,e===fe?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Js(e,r);else{t=r;var i=z;z|=2;var o=Nv();(fe!==e||pe!==t)&&(Ct=null,Br=re()+500,zn(e,t));do try{u_();break}catch(a){Ov(e,a)}while(1);yf(),Xs.current=o,z=i,oe!==null?t=0:(fe=null,pe=0,t=ae)}if(t!==0){if(t===2&&(i=Nu(e),i!==0&&(r=i,t=ac(e,i))),t===1)throw n=Yi,zn(e,0),Zt(e,r),Me(e,re()),n;if(t===6)Zt(e,r);else{if(i=e.current.alternate,!(r&30)&&!a_(i)&&(t=Js(e,r),t===2&&(o=Nu(e),o!==0&&(r=o,t=ac(e,o))),t===1))throw n=Yi,zn(e,0),Zt(e,r),Me(e,re()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:Rn(e,Oe,Ct);break;case 3:if(Zt(e,r),(r&130023424)===r&&(t=Nf+500-re(),10<t)){if(Ds(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){xe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=zu(Rn.bind(null,e,Oe,Ct),t);break}Rn(e,Oe,Ct);break;case 4:if(Zt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-ct(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*s_(r/1960))-r,10<r){e.timeoutHandle=zu(Rn.bind(null,e,Oe,Ct),r);break}Rn(e,Oe,Ct);break;case 5:Rn(e,Oe,Ct);break;default:throw Error(E(329))}}}return Me(e,re()),e.callbackNode===n?Rv.bind(null,e):null}function ac(e,t){var n=Ti;return e.current.memoizedState.isDehydrated&&(zn(e,t).flags|=256),e=Js(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&lc(t)),e}function lc(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function a_(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!dt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zt(e,t){for(t&=~Of,t&=~Oa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ct(t),r=1<<n;e[n]=-1,t&=~r}}function Jh(e){if(z&6)throw Error(E(327));Pr();var t=Ds(e,0);if(!(t&1))return Me(e,re()),null;var n=Js(e,t);if(e.tag!==0&&n===2){var r=Nu(e);r!==0&&(t=r,n=ac(e,r))}if(n===1)throw n=Yi,zn(e,0),Zt(e,t),Me(e,re()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Rn(e,Oe,Ct),Me(e,re()),null}function Df(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(Br=re()+500,Aa&&Tn())}}function Xn(e){on!==null&&on.tag===0&&!(z&6)&&Pr();var t=z;z|=1;var n=Je.transition,r=H;try{if(Je.transition=null,H=1,e)return e()}finally{H=r,Je.transition=n,z=t,!(z&6)&&Tn()}}function Lf(){Ue=yr.current,K(yr)}function zn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$E(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(mf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fs();break;case 3:jr(),K(De),K(Te),If();break;case 5:Sf(r);break;case 4:jr();break;case 13:K(Q);break;case 19:K(Q);break;case 10:wf(r.type._context);break;case 22:case 23:Lf()}n=n.return}if(fe=e,oe=e=mn(e.current,null),pe=Ue=t,ae=0,Yi=null,Of=Oa=Yn=0,Oe=Ti=null,Dn!==null){for(t=0;t<Dn.length;t++)if(n=Dn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Dn=null}return e}function Ov(e,t){do{var n=oe;try{if(yf(),vs.current=Ys,Ks){for(var r=J.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ks=!1}if(Kn=0,ce=se=J=null,Si=!1,Wi=0,Rf.current=null,n===null||n.return===null){ae=1,Yi=t,oe=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=pe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Fh(s);if(g!==null){g.flags&=-257,jh(g,s,a,o,t),g.mode&1&&Uh(o,u,t),t=g,l=u;var v=t.updateQueue;if(v===null){var y=new Set;y.add(l),t.updateQueue=y}else v.add(l);break e}else{if(!(t&1)){Uh(o,u,t),Mf();break e}l=Error(E(426))}}else if(X&&a.mode&1){var R=Fh(s);if(R!==null){!(R.flags&65536)&&(R.flags|=256),jh(R,s,a,o,t),gf(zr(l,a));break e}}o=l=zr(l,a),ae!==4&&(ae=2),Ti===null?Ti=[o]:Ti.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=mv(o,l,t);Rh(o,p);break e;case 1:a=l;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(hn===null||!hn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=gv(o,a,t);Rh(o,w);break e}}o=o.return}while(o!==null)}Lv(n)}catch(_){t=_,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(1)}function Nv(){var e=Xs.current;return Xs.current=Ys,e===null?Ys:e}function Mf(){(ae===0||ae===3||ae===2)&&(ae=4),fe===null||!(Yn&268435455)&&!(Oa&268435455)||Zt(fe,pe)}function Js(e,t){var n=z;z|=2;var r=Nv();(fe!==e||pe!==t)&&(Ct=null,zn(e,t));do try{l_();break}catch(i){Ov(e,i)}while(1);if(yf(),z=n,Xs.current=r,oe!==null)throw Error(E(261));return fe=null,pe=0,ae}function l_(){for(;oe!==null;)Dv(oe)}function u_(){for(;oe!==null&&!Dw();)Dv(oe)}function Dv(e){var t=$v(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?Lv(e):oe=t,Rf.current=null}function Lv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=n_(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,oe=null;return}}else if(n=t_(n,t,Ue),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);ae===0&&(ae=5)}function Rn(e,t,n){var r=H,i=Je.transition;try{Je.transition=null,H=1,c_(e,t,n,r)}finally{Je.transition=i,H=r}return null}function c_(e,t,n,r){do Pr();while(on!==null);if(z&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Vw(e,o),e===fe&&(oe=fe=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||qo||(qo=!0,Uv(Ns,function(){return Pr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Je.transition,Je.transition=null;var s=H;H=1;var a=z;z|=4,Rf.current=null,i_(e,n),xv(n,e),PE(Fu),Ls=!!Uu,Fu=Uu=null,e.current=n,o_(n),Lw(),z=a,H=s,Je.transition=o}else e.current=n;if(qo&&(qo=!1,on=e,Qs=i),o=e.pendingLanes,o===0&&(hn=null),Uw(n.stateNode),Me(e,re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qs)throw qs=!1,e=oc,oc=null,e;return Qs&1&&e.tag!==0&&Pr(),o=e.pendingLanes,o&1?e===sc?Ci++:(Ci=0,sc=e):Ci=0,Tn(),null}function Pr(){if(on!==null){var e=pg(Qs),t=Je.transition,n=H;try{if(Je.transition=null,H=16>e?16:e,on===null)var r=!1;else{if(e=on,on=null,Qs=0,z&6)throw Error(E(331));var i=z;for(z|=4,T=e.current;T!==null;){var o=T,s=o.child;if(T.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(T=u;T!==null;){var c=T;switch(c.tag){case 0:case 11:case 15:Ii(8,c,o)}var f=c.child;if(f!==null)f.return=c,T=f;else for(;T!==null;){c=T;var h=c.sibling,g=c.return;if(Cv(c),c===u){T=null;break}if(h!==null){h.return=g,T=h;break}T=g}}}var v=o.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var R=y.sibling;y.sibling=null,y=R}while(y!==null)}}T=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,T=s;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ii(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,T=p;break e}T=o.return}}var d=e.current;for(T=d;T!==null;){s=T;var m=s.child;if(s.subtreeFlags&2064&&m!==null)m.return=s,T=m;else e:for(s=d;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ra(9,a)}}catch(_){ee(a,a.return,_)}if(a===s){T=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,T=w;break e}T=a.return}}if(z=i,Tn(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Sa,e)}catch{}r=!0}return r}finally{H=n,Je.transition=t}}return!1}function Zh(e,t,n){t=zr(n,t),t=mv(e,t,1),e=dn(e,t,1),t=xe(),e!==null&&(fo(e,1,t),Me(e,t))}function ee(e,t,n){if(e.tag===3)Zh(e,e,n);else for(;t!==null;){if(t.tag===3){Zh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hn===null||!hn.has(r))){e=zr(n,e),e=gv(t,e,1),t=dn(t,e,1),e=xe(),t!==null&&(fo(t,1,e),Me(t,e));break}}t=t.return}}function f_(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=xe(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(pe&n)===n&&(ae===4||ae===3&&(pe&130023424)===pe&&500>re()-Nf?zn(e,0):Of|=n),Me(e,t)}function Mv(e,t){t===0&&(e.mode&1?(t=jo,jo<<=1,!(jo&130023424)&&(jo=4194304)):t=1);var n=xe();e=$t(e,t),e!==null&&(fo(e,t,n),Me(e,n))}function d_(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Mv(e,n)}function h_(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),Mv(e,n)}var $v;$v=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)Ne=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ne=!1,e_(e,t,n);Ne=!!(e.flags&131072)}else Ne=!1,X&&t.flags&1048576&&jg(t,Bs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ws(e,t),e=t.pendingProps;var i=$r(t,Te.current);xr(t,n),i=Cf(null,t,r,e,i,n);var o=bf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Le(r)?(o=!0,js(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_f(t),i.updater=xa,t.stateNode=i,i._reactInternals=t,Yu(t,r,e,n),t=Qu(null,t,r,!0,o,n)):(t.tag=0,X&&o&&pf(t),be(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ws(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=m_(r),e=st(r,e),i){case 0:t=qu(null,t,r,e,n);break e;case 1:t=Hh(null,t,r,e,n);break e;case 11:t=zh(null,t,r,e,n);break e;case 14:t=Bh(null,t,r,st(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:st(r,i),qu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:st(r,i),Hh(e,t,r,i,n);case 3:e:{if(Ev(t),e===null)throw Error(E(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Vg(e,t),Ws(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=zr(Error(E(423)),t),t=Vh(e,t,r,n,i);break e}else if(r!==i){i=zr(Error(E(424)),t),t=Vh(e,t,r,n,i);break e}else for(Fe=fn(t.stateNode.containerInfo.firstChild),ze=t,X=!0,lt=null,n=Yg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ur(),r===i){t=Ut(e,t,n);break e}be(e,t,r,n)}t=t.child}return t;case 5:return Xg(t),e===null&&Wu(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,ju(r,i)?s=null:o!==null&&ju(r,o)&&(t.flags|=32),wv(e,t),be(e,t,s,n),t.child;case 6:return e===null&&Wu(t),null;case 13:return _v(e,t,n);case 4:return kf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fr(t,null,r,n):be(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:st(r,i),zh(e,t,r,i,n);case 7:return be(e,t,t.pendingProps,n),t.child;case 8:return be(e,t,t.pendingProps.children,n),t.child;case 12:return be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,V(Hs,r._currentValue),r._currentValue=s,o!==null)if(dt(o.value,s)){if(o.children===i.children&&!De.current){t=Ut(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Dt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Gu(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(E(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Gu(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}be(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,xr(t,n),i=tt(i),r=r(i),t.flags|=1,be(e,t,r,n),t.child;case 14:return r=t.type,i=st(r,t.pendingProps),i=st(r.type,i),Bh(e,t,r,i,n);case 15:return vv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:st(r,i),ws(e,t),t.tag=1,Le(r)?(e=!0,js(t)):e=!1,xr(t,n),Gg(t,r,i),Yu(t,r,i,n),Qu(null,t,r,!0,e,n);case 19:return kv(e,t,n);case 22:return yv(e,t,n)}throw Error(E(156,t.tag))};function Uv(e,t){return cg(e,t)}function p_(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(e,t,n,r){return new p_(e,t,n,r)}function $f(e){return e=e.prototype,!(!e||!e.isReactComponent)}function m_(e){if(typeof e=="function")return $f(e)?1:0;if(e!=null){if(e=e.$$typeof,e===tf)return 11;if(e===nf)return 14}return 2}function mn(e,t){var n=e.alternate;return n===null?(n=Qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ks(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")$f(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case lr:return Bn(n.children,i,o,t);case ef:s=8,i|=8;break;case yu:return e=Qe(12,n,t,i|2),e.elementType=yu,e.lanes=o,e;case wu:return e=Qe(13,n,t,i),e.elementType=wu,e.lanes=o,e;case Eu:return e=Qe(19,n,t,i),e.elementType=Eu,e.lanes=o,e;case Km:return Na(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wm:s=10;break e;case Gm:s=9;break e;case tf:s=11;break e;case nf:s=14;break e;case qt:s=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Qe(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Bn(e,t,n,r){return e=Qe(7,e,r,t),e.lanes=n,e}function Na(e,t,n,r){return e=Qe(22,e,r,t),e.elementType=Km,e.lanes=n,e.stateNode={isHidden:!1},e}function jl(e,t,n){return e=Qe(6,e,null,t),e.lanes=n,e}function zl(e,t,n){return t=Qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function g_(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Uf(e,t,n,r,i,o,s,a,l){return e=new g_(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Qe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_f(o),e}function v_(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ar,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Fv(e){if(!e)return wn;e=e._reactInternals;e:{if(rr(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Le(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Le(n))return Ug(e,n,t)}return t}function jv(e,t,n,r,i,o,s,a,l){return e=Uf(n,r,!0,e,i,o,s,a,l),e.context=Fv(null),n=e.current,r=xe(),i=pn(n),o=Dt(r,i),o.callback=t??null,dn(n,o,i),e.current.lanes=i,fo(e,i,r),Me(e,r),e}function Da(e,t,n,r){var i=t.current,o=xe(),s=pn(i);return n=Fv(n),t.context===null?t.context=n:t.pendingContext=n,t=Dt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dn(i,t,s),e!==null&&(ft(e,i,s,o),gs(e,i,s)),s}function Zs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ep(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ff(e,t){ep(e,t),(e=e.alternate)&&ep(e,t)}function y_(){return null}var zv=typeof reportError=="function"?reportError:function(e){console.error(e)};function jf(e){this._internalRoot=e}La.prototype.render=jf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Da(e,t,null,null)};La.prototype.unmount=jf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xn(function(){Da(null,e,null,null)}),t[Mt]=null}};function La(e){this._internalRoot=e}La.prototype.unstable_scheduleHydration=function(e){if(e){var t=vg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jt.length&&t!==0&&t<Jt[n].priority;n++);Jt.splice(n,0,e),n===0&&wg(e)}};function zf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ma(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function tp(){}function w_(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Zs(s);o.call(u)}}var s=jv(t,r,e,0,null,!1,!1,"",tp);return e._reactRootContainer=s,e[Mt]=s.current,ji(e.nodeType===8?e.parentNode:e),Xn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Zs(l);a.call(u)}}var l=Uf(e,0,!1,null,null,!1,!1,"",tp);return e._reactRootContainer=l,e[Mt]=l.current,ji(e.nodeType===8?e.parentNode:e),Xn(function(){Da(t,l,n,r)}),l}function $a(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Zs(s);a.call(l)}}Da(t,s,e,i)}else s=w_(n,t,e,i,r);return Zs(s)}mg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=hi(t.pendingLanes);n!==0&&(sf(t,n|1),Me(t,re()),!(z&6)&&(Br=re()+500,Tn()))}break;case 13:Xn(function(){var r=$t(e,1);if(r!==null){var i=xe();ft(r,e,1,i)}}),Ff(e,1)}};af=function(e){if(e.tag===13){var t=$t(e,134217728);if(t!==null){var n=xe();ft(t,e,134217728,n)}Ff(e,134217728)}};gg=function(e){if(e.tag===13){var t=pn(e),n=$t(e,t);if(n!==null){var r=xe();ft(n,e,t,r)}Ff(e,t)}};vg=function(){return H};yg=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};Pu=function(e,t,n){switch(t){case"input":if(Su(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ba(r);if(!i)throw Error(E(90));Xm(r),Su(r,i)}}}break;case"textarea":Qm(e,n);break;case"select":t=n.value,t!=null&&Tr(e,!!n.multiple,t,!1)}};ig=Df;og=Xn;var E_={usingClientEntryPoint:!1,Events:[po,dr,ba,ng,rg,Df]},ui={findFiberByHostInstance:Nn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},__={bundleType:ui.bundleType,version:ui.version,rendererPackageName:ui.rendererPackageName,rendererConfig:ui.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lg(e),e===null?null:e.stateNode},findFiberByHostInstance:ui.findFiberByHostInstance||y_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qo.isDisabled&&Qo.supportsFiber)try{Sa=Qo.inject(__),Et=Qo}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E_;Ge.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zf(t))throw Error(E(200));return v_(e,t,null,n)};Ge.createRoot=function(e,t){if(!zf(e))throw Error(E(299));var n=!1,r="",i=zv;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Uf(e,1,!1,null,null,n,!1,r,i),e[Mt]=t.current,ji(e.nodeType===8?e.parentNode:e),new jf(t)};Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=lg(t),e=e===null?null:e.stateNode,e};Ge.flushSync=function(e){return Xn(e)};Ge.hydrate=function(e,t,n){if(!Ma(t))throw Error(E(200));return $a(null,e,t,!0,n)};Ge.hydrateRoot=function(e,t,n){if(!zf(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=zv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=jv(t,null,e,1,n??null,i,!1,o,s),e[Mt]=t.current,ji(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new La(t)};Ge.render=function(e,t,n){if(!Ma(t))throw Error(E(200));return $a(null,e,t,!1,n)};Ge.unmountComponentAtNode=function(e){if(!Ma(e))throw Error(E(40));return e._reactRootContainer?(Xn(function(){$a(null,null,e,!1,function(){e._reactRootContainer=null,e[Mt]=null})}),!0):!1};Ge.unstable_batchedUpdates=Df;Ge.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ma(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return $a(e,t,n,!1,r)};Ge.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Ge})(yw);var np=mu;pu.createRoot=np.createRoot,pu.hydrateRoot=np.hydrateRoot;/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uc(){return uc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},uc.apply(this,arguments)}var sn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(sn||(sn={}));const rp="popstate";function k_(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return cc("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Bf(i)}return T_(t,n,null,e)}function $e(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function S_(){return Math.random().toString(36).substr(2,8)}function ip(e){return{usr:e.state,key:e.key}}function cc(e,t,n,r){return n===void 0&&(n=null),uc({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ua(t):t,{state:n,key:t&&t.key||r||S_()})}function Bf(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ua(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function I_(e){let t=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:window.location.href,n=typeof e=="string"?e:Bf(e);return $e(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}function T_(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=sn.Pop,l=null;function u(){a=sn.Pop,l&&l({action:a,location:h.location})}function c(g,v){a=sn.Push;let y=cc(h.location,g,v);n&&n(y,g);let R=ip(y),p=h.createHref(y);try{s.pushState(R,"",p)}catch{i.location.assign(p)}o&&l&&l({action:a,location:h.location})}function f(g,v){a=sn.Replace;let y=cc(h.location,g,v);n&&n(y,g);let R=ip(y),p=h.createHref(y);s.replaceState(R,"",p),o&&l&&l({action:a,location:h.location})}let h={get action(){return a},get location(){return e(i,s)},listen(g){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(rp,u),l=g,()=>{i.removeEventListener(rp,u),l=null}},createHref(g){return t(i,g)},encodeLocation(g){let v=I_(typeof g=="string"?g:Bf(g));return{pathname:v.pathname,search:v.search,hash:v.hash}},push:c,replace:f,go(g){return s.go(g)}};return h}var op;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(op||(op={}));function C_(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Ua(t):t,i=Vv(r.pathname||"/",n);if(i==null)return null;let o=Bv(e);b_(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=M_(o[a],F_(i));return s}function Bv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&($e(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Rr([r,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&($e(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Bv(o.children,t,c,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:D_(u,o.index),routesMeta:c})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Hv(o.path))i(o,s,l)}),t}function Hv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Hv(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function b_(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:L_(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const A_=/^:\w+$/,x_=3,P_=2,R_=1,O_=10,N_=-2,sp=e=>e==="*";function D_(e,t){let n=e.split("/"),r=n.length;return n.some(sp)&&(r+=N_),t&&(r+=P_),n.filter(i=>!sp(i)).reduce((i,o)=>i+(A_.test(o)?x_:o===""?R_:O_),r)}function L_(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function M_(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=$_({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;o.push({params:r,pathname:Rr([i,c.pathname]),pathnameBase:z_(Rr([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=Rr([i,c.pathnameBase]))}return o}function $_(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=U_(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let h=a[f]||"";s=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=j_(a[f]||"",c),u},{}),pathname:o,pathnameBase:s,pattern:e}}function U_(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Hf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function F_(e){try{return decodeURI(e)}catch(t){return Hf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function j_(e,t){try{return decodeURIComponent(e)}catch(n){return Hf(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Vv(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Hf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}const Rr=e=>e.join("/").replace(/\/\/+/g,"/"),z_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");class B_{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function H_(e){return e instanceof B_}const V_=["post","put","patch","delete"];[...V_];/**
 * React Router v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fc(){return fc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fc.apply(this,arguments)}function W_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const G_=typeof Object.is=="function"?Object.is:W_,{useState:K_,useEffect:Y_,useLayoutEffect:X_,useDebugValue:q_}=du;function Q_(e,t,n){const r=t(),[{inst:i},o]=K_({inst:{value:r,getSnapshot:t}});return X_(()=>{i.value=r,i.getSnapshot=t,Bl(i)&&o({inst:i})},[e,r,t]),Y_(()=>(Bl(i)&&o({inst:i}),e(()=>{Bl(i)&&o({inst:i})})),[e]),q_(r),r}function Bl(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!G_(n,r)}catch{return!0}}function J_(e,t,n){return t()}const Z_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ek=!Z_,tk=ek?J_:Q_;"useSyncExternalStore"in du&&(e=>e.useSyncExternalStore)(du);const Wv=P.createContext(null),Gv=P.createContext(null),Kv=P.createContext(null),Fa=P.createContext(null),ja=P.createContext({outlet:null,matches:[]}),Yv=P.createContext(null);function Vf(){return P.useContext(Fa)!=null}function nk(){return Vf()||$e(!1),P.useContext(Fa).location}function rk(e,t){Vf()||$e(!1);let{navigator:n}=P.useContext(Kv),r=P.useContext(Gv),{matches:i}=P.useContext(ja),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=nk(),u;if(t){var c;let y=typeof t=="string"?Ua(t):t;a==="/"||(c=y.pathname)!=null&&c.startsWith(a)||$e(!1),u=y}else u=l;let f=u.pathname||"/",h=a==="/"?f:f.slice(a.length)||"/",g=C_(e,{pathname:h}),v=ak(g&&g.map(y=>Object.assign({},y,{params:Object.assign({},s,y.params),pathname:Rr([a,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:Rr([a,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,r||void 0);return t&&v?P.createElement(Fa.Provider,{value:{location:fc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:sn.Pop}},v):v}function ik(){let e=fk(),t=H_(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unhandled Thrown Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},t),n?P.createElement("pre",{style:i},n):null,P.createElement("p",null,"💿 Hey developer 👋"),P.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",P.createElement("code",{style:o},"errorElement")," props on ",P.createElement("code",{style:o},"<Route>")))}class ok extends P.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?P.createElement(ja.Provider,{value:this.props.routeContext},P.createElement(Yv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function sk(e){let{routeContext:t,match:n,children:r}=e,i=P.useContext(Wv);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(ja.Provider,{value:t},r)}function ak(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(s=>s.route.id&&(i==null?void 0:i[s.route.id]));o>=0||$e(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,s,a)=>{let l=s.route.id?i==null?void 0:i[s.route.id]:null,u=n?s.route.errorElement||P.createElement(ik,null):null,c=t.concat(r.slice(0,a+1)),f=()=>P.createElement(sk,{match:s,routeContext:{outlet:o,matches:c}},l?u:s.route.element!==void 0?s.route.element:o);return n&&(s.route.errorElement||a===0)?P.createElement(ok,{location:n.location,component:u,error:l,children:f(),routeContext:{outlet:null,matches:c}}):f()},null)}var ap;(function(e){e.UseRevalidator="useRevalidator"})(ap||(ap={}));var ea;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(ea||(ea={}));function lk(e){let t=P.useContext(Gv);return t||$e(!1),t}function uk(e){let t=P.useContext(ja);return t||$e(!1),t}function ck(e){let t=uk(),n=t.matches[t.matches.length-1];return n.route.id||$e(!1),n.route.id}function fk(){var e;let t=P.useContext(Yv),n=lk(ea.UseRouteError),r=ck(ea.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function dc(e){$e(!1)}function dk(e){let{basename:t="/",children:n=null,location:r,navigationType:i=sn.Pop,navigator:o,static:s=!1}=e;Vf()&&$e(!1);let a=t.replace(/^\/*/,"/"),l=P.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=Ua(r));let{pathname:u="/",search:c="",hash:f="",state:h=null,key:g="default"}=r,v=P.useMemo(()=>{let y=Vv(u,a);return y==null?null:{pathname:y,search:c,hash:f,state:h,key:g}},[a,u,c,f,h,g]);return v==null?null:P.createElement(Kv.Provider,{value:l},P.createElement(Fa.Provider,{children:n,value:{location:v,navigationType:i}}))}function hk(e){let{children:t,location:n}=e,r=P.useContext(Wv),i=r&&!t?r.router.routes:hc(t);return rk(i,n)}var lp;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(lp||(lp={}));new Promise(()=>{});function hc(e,t){t===void 0&&(t=[]);let n=[];return P.Children.forEach(e,(r,i)=>{if(!P.isValidElement(r))return;if(r.type===P.Fragment){n.push.apply(n,hc(r.props.children,t));return}r.type!==dc&&$e(!1),!r.props.index||!r.props.children||$e(!1);let o=[...t,i],s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(s.children=hc(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pk(e){let{basename:t,children:n,window:r}=e,i=P.useRef();i.current==null&&(i.current=k_({window:r,v5Compat:!0}));let o=i.current,[s,a]=P.useState({action:o.action,location:o.location});return P.useLayoutEffect(()=>o.listen(a),[o]),P.createElement(dk,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}var up;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(up||(up={}));var cp;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(cp||(cp={}));/**
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
 */const Xv=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},mk=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},qv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,f=(o&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(h=64)),r.push(n[c],n[f],n[h],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Xv(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):mk(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||f==null)throw Error();const h=o<<2|a>>4;if(r.push(h),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const v=u<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},gk=function(e){const t=Xv(e);return qv.encodeByteArray(t,!0)},ta=function(e){return gk(e).replace(/\./g,"")},Qv=function(e){try{return qv.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function Jv(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function yk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wk(){const e=Ce();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Zv(){try{return typeof indexedDB=="object"}catch{return!1}}function ey(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function Ek(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function _k(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kk=()=>_k().__FIREBASE_DEFAULTS__,Sk=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Ik=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Qv(e[1]);return t&&JSON.parse(t)},Wf=()=>{try{return kk()||Sk()||Ik()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ty=e=>{var t,n;return(n=(t=Wf())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Tk=e=>{const t=ty(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Ck=()=>{var e;return(e=Wf())===null||e===void 0?void 0:e.config},ny=e=>{var t;return(t=Wf())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class bk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Ak(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[ta(JSON.stringify(n)),ta(JSON.stringify(s)),a].join(".")}/**
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
 */const xk="FirebaseError";class pt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=xk,Object.setPrototypeOf(this,pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ir.prototype.create)}}class ir{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?Pk(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new pt(i,a,r)}}function Pk(e,t){return e.replace(Rk,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Rk=/\{\$([^}]+)}/g;function Ok(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Xi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(fp(o)&&fp(s)){if(!Xi(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function fp(e){return e!==null&&typeof e=="object"}/**
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
 */function go(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Nk(e,t){const n=new Dk(e,t);return n.subscribe.bind(n)}class Dk{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Lk(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Hl),i.error===void 0&&(i.error=Hl),i.complete===void 0&&(i.complete=Hl);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lk(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Hl(){}/**
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
 */const Mk=1e3,$k=2,Uk=4*60*60*1e3,Fk=.5;function dp(e,t=Mk,n=$k){const r=t*Math.pow(n,e),i=Math.round(Fk*r*(Math.random()-.5)*2);return Math.min(Uk,r+i)}/**
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
 */function Wt(e){return e&&e._delegate?e._delegate:e}class ht{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class jk{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new bk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Bk(t))try{this.getOrInitializeService({instanceIdentifier:On})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=On){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=On){return this.instances.has(t)}getOptions(t=On){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zk(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=On){return this.component?this.component.multipleInstances?t:On:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zk(e){return e===On?void 0:e}function Bk(e){return e.instantiationMode==="EAGER"}/**
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
 */class Hk{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new jk(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var B;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(B||(B={}));const Vk={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},Wk=B.INFO,Gk={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},Kk=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Gk[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class za{constructor(t){this.name=t,this._logLevel=Wk,this._logHandler=Kk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in B))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Vk[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...t),this._logHandler(this,B.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...t),this._logHandler(this,B.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,B.INFO,...t),this._logHandler(this,B.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,B.WARN,...t),this._logHandler(this,B.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...t),this._logHandler(this,B.ERROR,...t)}}const Yk=(e,t)=>t.some(n=>e instanceof n);let hp,pp;function Xk(){return hp||(hp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qk(){return pp||(pp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ry=new WeakMap,pc=new WeakMap,iy=new WeakMap,Vl=new WeakMap,Gf=new WeakMap;function Qk(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(gn(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&ry.set(n,e)}).catch(()=>{}),Gf.set(t,e),t}function Jk(e){if(pc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});pc.set(e,t)}let mc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return pc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||iy.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Zk(e){mc=e(mc)}function eS(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Wl(this),t,...n);return iy.set(r,t.sort?t.sort():[t]),gn(r)}:qk().includes(e)?function(...t){return e.apply(Wl(this),t),gn(ry.get(this))}:function(...t){return gn(e.apply(Wl(this),t))}}function tS(e){return typeof e=="function"?eS(e):(e instanceof IDBTransaction&&Jk(e),Yk(e,Xk())?new Proxy(e,mc):e)}function gn(e){if(e instanceof IDBRequest)return Qk(e);if(Vl.has(e))return Vl.get(e);const t=tS(e);return t!==e&&(Vl.set(e,t),Gf.set(t,e)),t}const Wl=e=>Gf.get(e);function oy(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=gn(s);return r&&s.addEventListener("upgradeneeded",l=>{r(gn(s.result),l.oldVersion,l.newVersion,gn(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const nS=["get","getKey","getAll","getAllKeys","count"],rS=["put","add","delete","clear"],Gl=new Map;function mp(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Gl.get(t))return Gl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=rS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||nS.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Gl.set(t,o),o}Zk(e=>({...e,get:(t,n,r)=>mp(t,n)||e.get(t,n,r),has:(t,n)=>!!mp(t,n)||e.has(t,n)}));/**
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
 */class iS{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(oS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function oS(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const gc="@firebase/app",gp="0.9.0";/**
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
 */const qn=new za("@firebase/app"),sS="@firebase/app-compat",aS="@firebase/analytics-compat",lS="@firebase/analytics",uS="@firebase/app-check-compat",cS="@firebase/app-check",fS="@firebase/auth",dS="@firebase/auth-compat",hS="@firebase/database",pS="@firebase/database-compat",mS="@firebase/functions",gS="@firebase/functions-compat",vS="@firebase/installations",yS="@firebase/installations-compat",wS="@firebase/messaging",ES="@firebase/messaging-compat",_S="@firebase/performance",kS="@firebase/performance-compat",SS="@firebase/remote-config",IS="@firebase/remote-config-compat",TS="@firebase/storage",CS="@firebase/storage-compat",bS="@firebase/firestore",AS="@firebase/firestore-compat",xS="firebase",PS="9.15.0";/**
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
 */const vc="[DEFAULT]",RS={[gc]:"fire-core",[sS]:"fire-core-compat",[lS]:"fire-analytics",[aS]:"fire-analytics-compat",[cS]:"fire-app-check",[uS]:"fire-app-check-compat",[fS]:"fire-auth",[dS]:"fire-auth-compat",[hS]:"fire-rtdb",[pS]:"fire-rtdb-compat",[mS]:"fire-fn",[gS]:"fire-fn-compat",[vS]:"fire-iid",[yS]:"fire-iid-compat",[wS]:"fire-fcm",[ES]:"fire-fcm-compat",[_S]:"fire-perf",[kS]:"fire-perf-compat",[SS]:"fire-rc",[IS]:"fire-rc-compat",[TS]:"fire-gcs",[CS]:"fire-gcs-compat",[bS]:"fire-fst",[AS]:"fire-fst-compat","fire-js":"fire-js",[xS]:"fire-js-all"};/**
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
 */const na=new Map,yc=new Map;function OS(e,t){try{e.container.addComponent(t)}catch(n){qn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function It(e){const t=e.name;if(yc.has(t))return qn.debug(`There were multiple attempts to register component ${t}.`),!1;yc.set(t,e);for(const n of na.values())OS(n,e);return!0}function or(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const NS={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},vn=new ir("app","Firebase",NS);/**
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
 */class DS{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw vn.create("app-deleted",{appName:this._name})}}/**
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
 */const vo=PS;function sy(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:vc,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw vn.create("bad-app-name",{appName:String(i)});if(n||(n=Ck()),!n)throw vn.create("no-options");const o=na.get(i);if(o){if(Xi(n,o.options)&&Xi(r,o.config))return o;throw vn.create("duplicate-app",{appName:i})}const s=new Hk(i);for(const l of yc.values())s.addComponent(l);const a=new DS(n,r,s);return na.set(i,a),a}function Kf(e=vc){const t=na.get(e);if(!t&&e===vc)return sy();if(!t)throw vn.create("no-app",{appName:e});return t}function Ze(e,t,n){var r;let i=(r=RS[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),qn.warn(a.join(" "));return}It(new ht(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const LS="firebase-heartbeat-database",MS=1,qi="firebase-heartbeat-store";let Kl=null;function ay(){return Kl||(Kl=oy(LS,MS,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(qi)}}}).catch(e=>{throw vn.create("idb-open",{originalErrorMessage:e.message})})),Kl}async function $S(e){try{return(await ay()).transaction(qi).objectStore(qi).get(ly(e))}catch(t){if(t instanceof pt)qn.warn(t.message);else{const n=vn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});qn.warn(n.message)}}}async function vp(e,t){try{const r=(await ay()).transaction(qi,"readwrite");return await r.objectStore(qi).put(t,ly(e)),r.done}catch(n){if(n instanceof pt)qn.warn(n.message);else{const r=vn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qn.warn(r.message)}}}function ly(e){return`${e.name}!${e.options.appId}`}/**
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
 */const US=1024,FS=30*24*60*60*1e3;class jS{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new BS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=yp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=FS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=yp(),{heartbeatsToSend:n,unsentEntries:r}=zS(this._heartbeatsCache.heartbeats),i=ta(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function yp(){return new Date().toISOString().substring(0,10)}function zS(e,t=US){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),wp(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),wp(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class BS{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zv()?ey().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await $S(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return vp(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return vp(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function wp(e){return ta(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function HS(e){It(new ht("platform-logger",t=>new iS(t),"PRIVATE")),It(new ht("heartbeat",t=>new jS(t),"PRIVATE")),Ze(gc,gp,e),Ze(gc,gp,"esm2017"),Ze("fire-js","")}HS("");var VS="firebase",WS="9.15.0";/**
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
 */Ze(VS,WS,"app");const uy="@firebase/installations",Yf="0.6.0";/**
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
 */const cy=1e4,fy=`w:${Yf}`,dy="FIS_v2",GS="https://firebaseinstallations.googleapis.com/v1",KS=60*60*1e3,YS="installations",XS="Installations";/**
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
 */const qS={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Qn=new ir(YS,XS,qS);function hy(e){return e instanceof pt&&e.code.includes("request-failed")}/**
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
 */function py({projectId:e}){return`${GS}/projects/${e}/installations`}function my(e){return{token:e.token,requestStatus:2,expiresIn:JS(e.expiresIn),creationTime:Date.now()}}async function gy(e,t){const r=(await t.json()).error;return Qn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function vy({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function QS(e,{refreshToken:t}){const n=vy(e);return n.append("Authorization",ZS(t)),n}async function yy(e){const t=await e();return t.status>=500&&t.status<600?e():t}function JS(e){return Number(e.replace("s","000"))}function ZS(e){return`${dy} ${e}`}/**
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
 */async function eI({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=py(e),i=vy(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:dy,appId:e.appId,sdkVersion:fy},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await yy(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:my(u.authToken)}}else throw await gy("Create Installation",l)}/**
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
 */function wy(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function tI(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const nI=/^[cdef][\w-]{21}$/,wc="";function rI(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=iI(e);return nI.test(n)?n:wc}catch{return wc}}function iI(e){return tI(e).substr(0,22)}/**
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
 */function Ba(e){return`${e.appName}!${e.appId}`}/**
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
 */const Ey=new Map;function _y(e,t){const n=Ba(e);ky(n,t),oI(n,t)}function ky(e,t){const n=Ey.get(e);if(n)for(const r of n)r(t)}function oI(e,t){const n=sI();n&&n.postMessage({key:e,fid:t}),aI()}let Mn=null;function sI(){return!Mn&&"BroadcastChannel"in self&&(Mn=new BroadcastChannel("[Firebase] FID Change"),Mn.onmessage=e=>{ky(e.data.key,e.data.fid)}),Mn}function aI(){Ey.size===0&&Mn&&(Mn.close(),Mn=null)}/**
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
 */const lI="firebase-installations-database",uI=1,Jn="firebase-installations-store";let Yl=null;function Xf(){return Yl||(Yl=oy(lI,uI,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Jn)}}})),Yl}async function ra(e,t){const n=Ba(e),i=(await Xf()).transaction(Jn,"readwrite"),o=i.objectStore(Jn),s=await o.get(n);return await o.put(t,n),await i.done,(!s||s.fid!==t.fid)&&_y(e,t.fid),t}async function Sy(e){const t=Ba(e),r=(await Xf()).transaction(Jn,"readwrite");await r.objectStore(Jn).delete(t),await r.done}async function Ha(e,t){const n=Ba(e),i=(await Xf()).transaction(Jn,"readwrite"),o=i.objectStore(Jn),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.done,a&&(!s||s.fid!==a.fid)&&_y(e,a.fid),a}/**
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
 */async function qf(e){let t;const n=await Ha(e.appConfig,r=>{const i=cI(r),o=fI(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===wc?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function cI(e){const t=e||{fid:rI(),registrationStatus:0};return Iy(t)}function fI(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Qn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=dI(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:hI(e)}:{installationEntry:t}}async function dI(e,t){try{const n=await eI(e,t);return ra(e.appConfig,n)}catch(n){throw hy(n)&&n.customData.serverCode===409?await Sy(e.appConfig):await ra(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function hI(e){let t=await Ep(e.appConfig);for(;t.registrationStatus===1;)await wy(100),t=await Ep(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await qf(e);return r||n}return t}function Ep(e){return Ha(e,t=>{if(!t)throw Qn.create("installation-not-found");return Iy(t)})}function Iy(e){return pI(e)?{fid:e.fid,registrationStatus:0}:e}function pI(e){return e.registrationStatus===1&&e.registrationTime+cy<Date.now()}/**
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
 */async function mI({appConfig:e,heartbeatServiceProvider:t},n){const r=gI(e,n),i=QS(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:fy,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await yy(()=>fetch(r,a));if(l.ok){const u=await l.json();return my(u)}else throw await gy("Generate Auth Token",l)}function gI(e,{fid:t}){return`${py(e)}/${t}/authTokens:generate`}/**
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
 */async function Qf(e,t=!1){let n;const r=await Ha(e.appConfig,o=>{if(!Ty(o))throw Qn.create("not-registered");const s=o.authToken;if(!t&&wI(s))return o;if(s.requestStatus===1)return n=vI(e,t),o;{if(!navigator.onLine)throw Qn.create("app-offline");const a=_I(o);return n=yI(e,a),a}});return n?await n:r.authToken}async function vI(e,t){let n=await _p(e.appConfig);for(;n.authToken.requestStatus===1;)await wy(100),n=await _p(e.appConfig);const r=n.authToken;return r.requestStatus===0?Qf(e,t):r}function _p(e){return Ha(e,t=>{if(!Ty(t))throw Qn.create("not-registered");const n=t.authToken;return kI(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function yI(e,t){try{const n=await mI(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await ra(e.appConfig,r),n}catch(n){if(hy(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Sy(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ra(e.appConfig,r)}throw n}}function Ty(e){return e!==void 0&&e.registrationStatus===2}function wI(e){return e.requestStatus===2&&!EI(e)}function EI(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+KS}function _I(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function kI(e){return e.requestStatus===1&&e.requestTime+cy<Date.now()}/**
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
 */async function SI(e){const t=e,{installationEntry:n,registrationPromise:r}=await qf(t);return r?r.catch(console.error):Qf(t).catch(console.error),n.fid}/**
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
 */async function II(e,t=!1){const n=e;return await TI(n),(await Qf(n,t)).token}async function TI(e){const{registrationPromise:t}=await qf(e);t&&await t}/**
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
 */function CI(e){if(!e||!e.options)throw Xl("App Configuration");if(!e.name)throw Xl("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Xl(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Xl(e){return Qn.create("missing-app-config-values",{valueName:e})}/**
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
 */const Cy="installations",bI="installations-internal",AI=e=>{const t=e.getProvider("app").getImmediate(),n=CI(t),r=or(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},xI=e=>{const t=e.getProvider("app").getImmediate(),n=or(t,Cy).getImmediate();return{getId:()=>SI(n),getToken:i=>II(n,i)}};function PI(){It(new ht(Cy,AI,"PUBLIC")),It(new ht(bI,xI,"PRIVATE"))}PI();Ze(uy,Yf);Ze(uy,Yf,"esm2017");/**
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
 */const ia="analytics",RI="firebase_id",OI="origin",NI=60*1e3,DI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",by="https://www.googletagmanager.com/gtag/js";/**
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
 */const Be=new za("@firebase/analytics");/**
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
 */function Ay(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function LI(e,t){const n=document.createElement("script");n.src=`${by}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function MI(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function $I(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await Ay(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){Be.error(a)}e("config",i,o)}async function UI(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await Ay(n);for(const l of s){const u=a.find(f=>f.measurementId===l),c=u&&t[u.appId];if(c)o.push(c);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){Be.error(o)}}function FI(e,t,n,r){async function i(o,s,a){try{o==="event"?await UI(e,t,n,s,a):o==="config"?await $I(e,t,n,r,s,a):o==="consent"?e("consent","update",a):e("set",s)}catch(l){Be.error(l)}}return i}function jI(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=FI(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function zI(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(by)&&n.src.includes(e))return n;return null}/**
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
 */const BI={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},et=new ir("analytics","Analytics",BI);/**
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
 */const HI=30,VI=1e3;class WI{constructor(t={},n=VI){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const xy=new WI;function GI(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function KI(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:GI(r)},o=DI.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw et.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function YI(e,t=xy,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw et.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw et.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new QI;return setTimeout(async()=>{a.abort()},n!==void 0?n:NI),Py({appId:r,apiKey:i,measurementId:o},s,a,t)}async function Py(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=xy){var o;const{appId:s,measurementId:a}=e;try{await XI(r,t)}catch(l){if(a)return Be.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await KI(e);return i.deleteThrottleMetadata(s),l}catch(l){const u=l;if(!qI(u)){if(i.deleteThrottleMetadata(s),a)return Be.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw l}const c=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?dp(n,i.intervalMillis,HI):dp(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(s,f),Be.debug(`Calling attemptFetch again in ${c} millis`),Py(e,f,r,i)}}function XI(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(et.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function qI(e){if(!(e instanceof pt)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class QI{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function JI(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}/**
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
 */async function ZI(){if(Zv())try{await ey()}catch(e){return Be.warn(et.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Be.warn(et.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function eT(e,t,n,r,i,o,s){var a;const l=YI(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&Be.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Be.error(g)),t.push(l);const u=ZI().then(g=>{if(g)return r.getId()}),[c,f]=await Promise.all([l,u]);zI(o)||LI(o,c.measurementId),i("js",new Date);const h=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return h[OI]="firebase",h.update=!0,f!=null&&(h[RI]=f),i("config",c.measurementId,h),c.measurementId}/**
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
 */class tT{constructor(t){this.app=t}_delete(){return delete bi[this.app.options.appId],Promise.resolve()}}let bi={},kp=[];const Sp={};let ql="dataLayer",nT="gtag",Ip,Ry,Tp=!1;function rT(){const e=[];if(Jv()&&e.push("This is a browser extension environment."),Ek()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=et.create("invalid-analytics-context",{errorInfo:t});Be.warn(n.message)}}function iT(e,t,n){rT();const r=e.options.appId;if(!r)throw et.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Be.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw et.create("no-api-key");if(bi[r]!=null)throw et.create("already-exists",{id:r});if(!Tp){MI(ql);const{wrappedGtag:o,gtagCore:s}=jI(bi,kp,Sp,ql,nT);Ry=o,Ip=s,Tp=!0}return bi[r]=eT(e,kp,Sp,t,Ip,ql,n),new tT(e)}function oT(e=Kf()){e=Wt(e);const t=or(e,ia);return t.isInitialized()?t.getImmediate():sT(e)}function sT(e,t={}){const n=or(e,ia);if(n.isInitialized()){const i=n.getImmediate();if(Xi(t,n.getOptions()))return i;throw et.create("already-initialized")}return n.initialize({options:t})}function aT(e,t,n,r){e=Wt(e),JI(Ry,bi[e.app.options.appId],t,n,r).catch(i=>Be.error(i))}const Cp="@firebase/analytics",bp="0.9.0";function lT(){It(new ht(ia,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return iT(r,i,n)},"PUBLIC")),It(new ht("analytics-internal",e,"PRIVATE")),Ze(Cp,bp),Ze(Cp,bp,"esm2017");function e(t){try{const n=t.getProvider(ia).getImmediate();return{logEvent:(r,i,o)=>aT(n,r,i,o)}}catch(n){throw et.create("interop-component-reg-failed",{reason:n})}}}lT();function Jf(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Oy(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uT=Oy,Ny=new ir("auth","Firebase",Oy());/**
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
 */const Ap=new za("@firebase/auth");function Ss(e,...t){Ap.logLevel<=B.ERROR&&Ap.error(`Auth (${vo}): ${e}`,...t)}/**
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
 */function Tt(e,...t){throw Zf(e,...t)}function kt(e,...t){return Zf(e,...t)}function Dy(e,t,n){const r=Object.assign(Object.assign({},uT()),{[t]:n});return new ir("auth","Firebase",r).create(t,{appName:e.name})}function cT(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Tt(e,"argument-error"),Dy(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Zf(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Ny.create(e,...t)}function O(e,t,...n){if(!e)throw Zf(t,...n)}function Rt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ss(t),new Error(t)}function Ft(e,t){e||Rt(t)}/**
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
 */const xp=new Map;function Ot(e){Ft(e instanceof Function,"Expected a class definition");let t=xp.get(e);return t?(Ft(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,xp.set(e,t),t)}/**
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
 */function fT(e,t){const n=or(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Xi(o,t??{}))return i;Tt(i,"already-initialized")}return n.initialize({options:t})}function dT(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ot);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
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
 */function Ec(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function hT(){return Pp()==="http:"||Pp()==="https:"}function Pp(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function pT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hT()||Jv()||"connection"in navigator)?navigator.onLine:!0}function mT(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class yo{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ft(n>t,"Short delay should be less than long delay!"),this.isMobile=vk()||yk()}get(){return pT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ed(e,t){Ft(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Ly{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const gT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const vT=new yo(3e4,6e4);function yT(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Va(e,t,n,r,i={}){return My(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=go(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Ly.fetch()($y(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function My(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},gT),t);try{const i=new ET(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Jo(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jo(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Jo(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw Jo(e,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Dy(e,c,u);Tt(e,c)}}catch(i){if(i instanceof pt)throw i;Tt(e,"network-request-failed")}}async function wT(e,t,n,r,i={}){const o=await Va(e,t,n,r,i);return"mfaPendingCredential"in o&&Tt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function $y(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?ed(e.config,i):`${e.config.apiScheme}://${i}`}class ET{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kt(this.auth,"network-request-failed")),vT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Jo(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=kt(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function _T(e,t){return Va(e,"POST","/v1/accounts:delete",t)}async function kT(e,t){return Va(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Ai(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function ST(e,t=!1){const n=Wt(e),r=await n.getIdToken(t),i=td(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Ai(Ql(i.auth_time)),issuedAtTime:Ai(Ql(i.iat)),expirationTime:Ai(Ql(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ql(e){return Number(e)*1e3}function td(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ss("JWT malformed, contained fewer than 3 sections"),null;try{const i=Qv(n);return i?JSON.parse(i):(Ss("Failed to decode base64 JWT payload"),null)}catch(i){return Ss("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function IT(e){const t=td(e);return O(t,"internal-error"),O(typeof t.exp<"u","internal-error"),O(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Qi(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof pt&&TT(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function TT({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class CT{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Uy{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ai(this.lastLoginAt),this.creationTime=Ai(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function oa(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Qi(e,kT(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?xT(o.providerUserInfo):[],a=AT(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Uy(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function bT(e){const t=Wt(e);await oa(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function AT(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function xT(e){return e.map(t=>{var{providerId:n}=t,r=Jf(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function PT(e,t){const n=await My(e,{},async()=>{const r=go({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=$y(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ly.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ji{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){O(t.idToken,"internal-error"),O(typeof t.idToken<"u","internal-error"),O(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):IT(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return O(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await PT(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Ji;return r&&(O(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(O(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ji,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
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
 */function Yt(e,t){O(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Hn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Jf(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new CT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Uy(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Qi(this,this.stsTokenManager.getToken(this.auth,t));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return ST(this,t)}reload(){return bT(this)}_assign(t){this!==t&&(O(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Hn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await oa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Qi(this,_T(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,v=(s=n.photoURL)!==null&&s!==void 0?s:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:_,providerData:k,stsTokenManager:S}=n;O(m&&S,t,"internal-error");const x=Ji.fromJSON(this.name,S);O(typeof m=="string",t,"internal-error"),Yt(f,t.name),Yt(h,t.name),O(typeof w=="boolean",t,"internal-error"),O(typeof _=="boolean",t,"internal-error"),Yt(g,t.name),Yt(v,t.name),Yt(y,t.name),Yt(R,t.name),Yt(p,t.name),Yt(d,t.name);const F=new Hn({uid:m,auth:t,email:h,emailVerified:w,displayName:f,isAnonymous:_,photoURL:v,phoneNumber:g,tenantId:y,stsTokenManager:x,createdAt:p,lastLoginAt:d});return k&&Array.isArray(k)&&(F.providerData=k.map(L=>Object.assign({},L))),R&&(F._redirectEventId=R),F}static async _fromIdTokenResponse(t,n,r=!1){const i=new Ji;i.updateFromServerResponse(n);const o=new Hn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await oa(o),o}}/**
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
 */class Fy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Fy.type="NONE";const Rp=Fy;/**
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
 */function Is(e,t,n){return`firebase:${e}:${t}:${n}`}class Or{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Is(this.userKey,i.apiKey,o),this.fullPersistenceKey=Is("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Hn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Or(Ot(Rp),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Ot(Rp);const s=Is(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const f=Hn._fromJSON(t,c);u!==o&&(a=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Or(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Or(o,t,r))}}/**
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
 */function Op(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(By(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(jy(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Vy(t))return"Blackberry";if(Wy(t))return"Webos";if(nd(t))return"Safari";if((t.includes("chrome/")||zy(t))&&!t.includes("edge/"))return"Chrome";if(Hy(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function jy(e=Ce()){return/firefox\//i.test(e)}function nd(e=Ce()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function zy(e=Ce()){return/crios\//i.test(e)}function By(e=Ce()){return/iemobile/i.test(e)}function Hy(e=Ce()){return/android/i.test(e)}function Vy(e=Ce()){return/blackberry/i.test(e)}function Wy(e=Ce()){return/webos/i.test(e)}function Wa(e=Ce()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function RT(e=Ce()){var t;return Wa(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function OT(){return wk()&&document.documentMode===10}function Gy(e=Ce()){return Wa(e)||Hy(e)||Wy(e)||Vy(e)||/windows phone/i.test(e)||By(e)}function NT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ky(e,t=[]){let n;switch(e){case"Browser":n=Op(Ce());break;case"Worker":n=`${Op(Ce())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${vo}/${r}`}/**
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
 */class DT{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class LT{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Np(this),this.idTokenSubscription=new Np(this),this.beforeStateQueue=new DT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ny,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Ot(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Or.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await oa(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=mT()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Wt(t):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&O(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ot(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new ir("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Ot(t)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Or.create(this,[Ot(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return O(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ky(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Ga(e){return Wt(e)}class Np{constructor(t){this.auth=t,this.observer=null,this.addObserver=Nk(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function MT(e,t,n){const r=Ga(e);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=Yy(t),{host:s,port:a}=$T(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||UT()}function Yy(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function $T(e){const t=Yy(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Dp(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Dp(s)}}}function Dp(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function UT(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Xy{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Rt("not implemented")}_getIdTokenResponse(t){return Rt("not implemented")}_linkToIdToken(t,n){return Rt("not implemented")}_getReauthenticationResolver(t){return Rt("not implemented")}}/**
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
 */async function Nr(e,t){return wT(e,"POST","/v1/accounts:signInWithIdp",yT(e,t))}/**
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
 */const FT="http://localhost";class Zn extends Xy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Zn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Jf(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Zn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return Nr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Nr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Nr(t,n)}buildRequest(){const t={requestUri:FT,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=go(n)}return t}}/**
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
 */class rd{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class wo extends rd{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class en extends wo{constructor(){super("facebook.com")}static credential(t){return Zn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return en.credentialFromTaggedObject(t)}static credentialFromError(t){return en.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return en.credential(t.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
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
 */class At extends wo{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Zn._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return At.credentialFromTaggedObject(t)}static credentialFromError(t){return At.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return At.credential(n,r)}catch{return null}}}At.GOOGLE_SIGN_IN_METHOD="google.com";At.PROVIDER_ID="google.com";/**
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
 */class tn extends wo{constructor(){super("github.com")}static credential(t){return Zn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return tn.credentialFromTaggedObject(t)}static credentialFromError(t){return tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return tn.credential(t.oauthAccessToken)}catch{return null}}}tn.GITHUB_SIGN_IN_METHOD="github.com";tn.PROVIDER_ID="github.com";/**
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
 */class nn extends wo{constructor(){super("twitter.com")}static credential(t,n){return Zn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return nn.credentialFromTaggedObject(t)}static credentialFromError(t){return nn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.TWITTER_SIGN_IN_METHOD="twitter.com";nn.PROVIDER_ID="twitter.com";/**
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
 */class Hr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await Hn._fromIdTokenResponse(t,r,i),s=Lp(r);return new Hr({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Lp(r);return new Hr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Lp(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class sa extends pt{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,sa.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new sa(t,n,r,i)}}function qy(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?sa._fromErrorAndOperation(e,o,t,r):o})}async function jT(e,t,n=!1){const r=await Qi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Hr._forOperation(e,"link",r)}/**
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
 */async function zT(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await Qi(e,qy(r,i,t,e),n);O(o.idToken,r,"internal-error");const s=td(o.idToken);O(s,r,"internal-error");const{sub:a}=s;return O(e.uid===a,r,"user-mismatch"),Hr._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Tt(r,"user-mismatch"),o}}/**
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
 */async function BT(e,t,n=!1){const r="signIn",i=await qy(e,r,t),o=await Hr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function HT(e,t,n,r){return Wt(e).onIdTokenChanged(t,n,r)}function VT(e,t,n){return Wt(e).beforeAuthStateChanged(t,n)}function WT(e,t,n,r){return Wt(e).onAuthStateChanged(t,n,r)}const aa="__sak";/**
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
 */class Qy{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(aa,"1"),this.storage.removeItem(aa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function GT(){const e=Ce();return nd(e)||Wa(e)}const KT=1e3,YT=10;class Jy extends Qy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=GT()&&NT(),this.fallbackToPolling=Gy(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);OT()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,YT):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},KT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Jy.type="LOCAL";const XT=Jy;/**
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
 */class Zy extends Qy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Zy.type="SESSION";const e0=Zy;/**
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
 */function qT(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ka{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Ka(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await qT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ka.receivers=[];/**
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
 */function id(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class QT{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=id("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(h.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function St(){return window}function JT(e){St().location.href=e}/**
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
 */function t0(){return typeof St().WorkerGlobalScope<"u"&&typeof St().importScripts=="function"}async function ZT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eC(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function tC(){return t0()?self:null}/**
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
 */const n0="firebaseLocalStorageDb",nC=1,la="firebaseLocalStorage",r0="fbase_key";class Eo{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ya(e,t){return e.transaction([la],t?"readwrite":"readonly").objectStore(la)}function rC(){const e=indexedDB.deleteDatabase(n0);return new Eo(e).toPromise()}function _c(){const e=indexedDB.open(n0,nC);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(la,{keyPath:r0})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(la)?t(r):(r.close(),await rC(),t(await _c()))})})}async function Mp(e,t,n){const r=Ya(e,!0).put({[r0]:t,value:n});return new Eo(r).toPromise()}async function iC(e,t){const n=Ya(e,!1).get(t),r=await new Eo(n).toPromise();return r===void 0?null:r.value}function $p(e,t){const n=Ya(e,!0).delete(t);return new Eo(n).toPromise()}const oC=800,sC=3;class i0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _c(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>sC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return t0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ka._getInstance(tC()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await ZT(),!this.activeServiceWorker)return;this.sender=new QT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||eC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await _c();return await Mp(t,aa,"1"),await $p(t,aa),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mp(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>iC(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>$p(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Ya(i,!1).getAll();return new Eo(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}i0.type="LOCAL";const aC=i0;/**
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
 */function lC(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function uC(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=kt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",lC().appendChild(r)})}function cC(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new yo(3e4,6e4);/**
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
 */function o0(e,t){return t?Ot(t):(O(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class od extends Xy{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Nr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Nr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Nr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function fC(e){return BT(e.auth,new od(e),e.bypassAuthState)}function dC(e){const{auth:t,user:n}=e;return O(n,t,"internal-error"),zT(n,new od(e),e.bypassAuthState)}async function hC(e){const{auth:t,user:n}=e;return O(n,t,"internal-error"),jT(n,new od(e),e.bypassAuthState)}/**
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
 */class s0{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return fC;case"linkViaPopup":case"linkViaRedirect":return hC;case"reauthViaPopup":case"reauthViaRedirect":return dC;default:Tt(this.auth,"internal-error")}}resolve(t){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const pC=new yo(2e3,1e4);class wr extends s0{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,wr.currentPopupAction&&wr.currentPopupAction.cancel(),wr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return O(t,this.auth,"internal-error"),t}async onExecution(){Ft(this.filter.length===1,"Popup operations only handle one event");const t=id();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,pC.get())};t()}}wr.currentPopupAction=null;/**
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
 */const mC="pendingRedirect",Ts=new Map;class gC extends s0{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Ts.get(this.auth._key());if(!t){try{const r=await vC(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ts.set(this.auth._key(),t)}return this.bypassAuthState||Ts.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vC(e,t){const n=l0(t),r=a0(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function yC(e,t){return a0(e)._set(l0(t),"true")}function wC(e,t){Ts.set(e._key(),t)}function a0(e){return Ot(e._redirectPersistence)}function l0(e){return Is(mC,e.config.apiKey,e.name)}/**
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
 */function EC(e,t,n){return _C(e,t,n)}async function _C(e,t,n){const r=Ga(e);cT(e,t,rd);const i=o0(r,n);return await yC(i,r),i._openRedirect(r,t,"signInViaRedirect")}async function kC(e,t,n=!1){const r=Ga(e),i=o0(r,t),s=await new gC(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
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
 */const SC=10*60*1e3;class IC{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!TC(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!u0(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(kt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=SC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Up(t))}saveEventToCache(t){this.cachedEventUids.add(Up(t)),this.lastProcessedEventTime=Date.now()}}function Up(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function u0({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function TC(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return u0(e);default:return!1}}/**
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
 */async function CC(e,t={}){return Va(e,"GET","/v1/projects",t)}/**
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
 */const bC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AC=/^https?/;async function xC(e){if(e.config.emulator)return;const{authorizedDomains:t}=await CC(e);for(const n of t)try{if(PC(n))return}catch{}Tt(e,"unauthorized-domain")}function PC(e){const t=Ec(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!AC.test(n))return!1;if(bC.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const RC=new yo(3e4,6e4);function Fp(){const e=St().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function OC(e){return new Promise((t,n)=>{var r,i,o;function s(){Fp(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Fp(),n(kt(e,"network-request-failed"))},timeout:RC.get()})}if(!((i=(r=St().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=St().gapi)===null||o===void 0)&&o.load)s();else{const a=cC("iframefcb");return St()[a]=()=>{gapi.load?s():n(kt(e,"network-request-failed"))},uC(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Cs=null,t})}let Cs=null;function NC(e){return Cs=Cs||OC(e),Cs}/**
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
 */const DC=new yo(5e3,15e3),LC="__/auth/iframe",MC="emulator/auth/iframe",$C={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FC(e){const t=e.config;O(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ed(t,MC):`https://${e.config.authDomain}/${LC}`,r={apiKey:t.apiKey,appName:e.name,v:vo},i=UC.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${go(r).slice(1)}`}async function jC(e){const t=await NC(e),n=St().gapi;return O(n,e,"internal-error"),t.open({where:document.body,url:FC(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$C,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=kt(e,"network-request-failed"),a=St().setTimeout(()=>{o(s)},DC.get());function l(){St().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const zC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BC=500,HC=600,VC="_blank",WC="http://localhost";class jp{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GC(e,t,n,r=BC,i=HC){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},zC),{width:r.toString(),height:i.toString(),top:o,left:s}),u=Ce().toLowerCase();n&&(a=zy(u)?VC:n),jy(u)&&(t=t||WC,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[g,v])=>`${h}${g}=${v},`,"");if(RT(u)&&a!=="_self")return KC(t||"",a),new jp(null);const f=window.open(t||"",a,c);O(f,e,"popup-blocked");try{f.focus()}catch{}return new jp(f)}function KC(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const YC="__/auth/handler",XC="emulator/auth/handler";function zp(e,t,n,r,i,o){O(e.config.authDomain,e,"auth-domain-config-required"),O(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:vo,eventId:i};if(t instanceof rd){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Ok(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(t instanceof wo){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${qC(e)}?${go(a).slice(1)}`}function qC({config:e}){return e.emulator?ed(e,XC):`https://${e.authDomain}/${YC}`}/**
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
 */const Jl="webStorageSupport";class QC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=e0,this._completeRedirectFn=kC,this._overrideRedirectResult=wC}async _openPopup(t,n,r,i){var o;Ft((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=zp(t,n,r,Ec(),i);return GC(t,s,id())}async _openRedirect(t,n,r,i){return await this._originValidation(t),JT(zp(t,n,r,Ec(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Ft(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await jC(t),r=new IC(t);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Jl,{type:Jl},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Jl];s!==void 0&&n(!!s),Tt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xC(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Gy()||nd()||Wa()}}const JC=QC;var Bp="@firebase/auth",Hp="0.21.0";/**
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
 */class ZC{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function eb(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function tb(e){It(new ht("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{O(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),O(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ky(e)},c=new LT(a,l,u);return dT(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),It(new ht("auth-internal",t=>{const n=Ga(t.getProvider("auth").getImmediate());return(r=>new ZC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ze(Bp,Hp,eb(e)),Ze(Bp,Hp,"esm2017")}/**
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
 */const nb=5*60,rb=ny("authIdTokenMaxAge")||nb;let Vp=null;const ib=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>rb)return;const i=n==null?void 0:n.token;Vp!==i&&(Vp=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ob(e=Kf()){const t=or(e,"auth");if(t.isInitialized())return t.getImmediate();const n=fT(e,{popupRedirectResolver:JC,persistence:[aC,XT,e0]}),r=ny("authTokenSyncURL");if(r){const o=ib(r);VT(n,o,()=>o(n.currentUser)),HT(n,s=>o(s))}const i=ty("auth");return i&&MT(n,`http://${i}`),n}tb("Browser");var sb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A,sd=sd||{},N=sb||self;function ua(){}function Xa(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function _o(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function ab(e){return Object.prototype.hasOwnProperty.call(e,Zl)&&e[Zl]||(e[Zl]=++lb)}var Zl="closure_uid_"+(1e9*Math.random()>>>0),lb=0;function ub(e,t,n){return e.call.apply(e.bind,arguments)}function cb(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Se(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Se=ub:Se=cb,Se.apply(null,arguments)}function Zo(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function ve(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(r,i,o){for(var s=Array(arguments.length-2),a=2;a<arguments.length;a++)s[a-2]=arguments[a];return t.prototype[i].apply(r,s)}}function Cn(){this.s=this.s,this.o=this.o}var fb=0;Cn.prototype.s=!1;Cn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),fb!=0)&&ab(this)};Cn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const c0=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function ad(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Wp(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Xa(r)){const i=e.length||0,o=r.length||0;e.length=i+o;for(let s=0;s<o;s++)e[i+s]=r[s]}else e.push(r)}}function Ie(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var db=function(){if(!N.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{N.addEventListener("test",ua,t),N.removeEventListener("test",ua,t)}catch{}return e}();function ca(e){return/^[\s\xa0]*$/.test(e)}var Gp=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function eu(e,t){return e<t?-1:e>t?1:0}function qa(){var e=N.navigator;return e&&(e=e.userAgent)?e:""}function yt(e){return qa().indexOf(e)!=-1}function ld(e){return ld[" "](e),e}ld[" "]=ua;function hb(e){var t=gb;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var pb=yt("Opera"),Zi=yt("Trident")||yt("MSIE"),f0=yt("Edge"),kc=f0||Zi,d0=yt("Gecko")&&!(qa().toLowerCase().indexOf("webkit")!=-1&&!yt("Edge"))&&!(yt("Trident")||yt("MSIE"))&&!yt("Edge"),mb=qa().toLowerCase().indexOf("webkit")!=-1&&!yt("Edge");function h0(){var e=N.document;return e?e.documentMode:void 0}var Sc;e:{var tu="",nu=function(){var e=qa();if(d0)return/rv:([^\);]+)(\)|;)/.exec(e);if(f0)return/Edge\/([\d\.]+)/.exec(e);if(Zi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(mb)return/WebKit\/(\S+)/.exec(e);if(pb)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(nu&&(tu=nu?nu[1]:""),Zi){var ru=h0();if(ru!=null&&ru>parseFloat(tu)){Sc=String(ru);break e}}Sc=tu}var gb={};function vb(){return hb(function(){let e=0;const t=Gp(String(Sc)).split("."),n=Gp("9").split("."),r=Math.max(t.length,n.length);for(let s=0;e==0&&s<r;s++){var i=t[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],i[0].length==0&&o[0].length==0)break;e=eu(i[1].length==0?0:parseInt(i[1],10),o[1].length==0?0:parseInt(o[1],10))||eu(i[2].length==0,o[2].length==0)||eu(i[2],o[2]),i=i[3],o=o[3]}while(e==0)}return 0<=e})}N.document&&Zi&&h0();function eo(e,t){if(Ie.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(d0){e:{try{ld(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:yb[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&eo.X.h.call(this)}}ve(eo,Ie);var yb={2:"touch",3:"pen",4:"mouse"};eo.prototype.h=function(){eo.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ko="closure_listenable_"+(1e6*Math.random()|0),wb=0;function Eb(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++wb,this.ba=this.ea=!1}function Qa(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function ud(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function p0(e){const t={};for(const n in e)t[n]=e[n];return t}const Kp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function m0(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let o=0;o<Kp.length;o++)n=Kp[o],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Ja(e){this.src=e,this.g={},this.h=0}Ja.prototype.add=function(e,t,n,r,i){var o=e.toString();e=this.g[o],e||(e=this.g[o]=[],this.h++);var s=Tc(e,t,r,i);return-1<s?(t=e[s],n||(t.ea=!1)):(t=new Eb(t,this.src,o,!!r,i),t.ea=n,e.push(t)),t};function Ic(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=c0(r,t),o;(o=0<=i)&&Array.prototype.splice.call(r,i,1),o&&(Qa(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Tc(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.ba&&o.listener==t&&o.capture==!!n&&o.ha==r)return i}return-1}var cd="closure_lm_"+(1e6*Math.random()|0),iu={};function g0(e,t,n,r,i){if(r&&r.once)return y0(e,t,n,r,i);if(Array.isArray(t)){for(var o=0;o<t.length;o++)g0(e,t[o],n,r,i);return null}return n=hd(n),e&&e[ko]?e.N(t,n,_o(r)?!!r.capture:!!r,i):v0(e,t,n,!1,r,i)}function v0(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var s=_o(i)?!!i.capture:!!i,a=dd(e);if(a||(e[cd]=a=new Ja(e)),n=a.add(t,n,r,s,o),n.proxy)return n;if(r=_b(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)db||(i=s),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(E0(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function _b(){function e(n){return t.call(e.src,e.listener,n)}const t=kb;return e}function y0(e,t,n,r,i){if(Array.isArray(t)){for(var o=0;o<t.length;o++)y0(e,t[o],n,r,i);return null}return n=hd(n),e&&e[ko]?e.O(t,n,_o(r)?!!r.capture:!!r,i):v0(e,t,n,!0,r,i)}function w0(e,t,n,r,i){if(Array.isArray(t))for(var o=0;o<t.length;o++)w0(e,t[o],n,r,i);else r=_o(r)?!!r.capture:!!r,n=hd(n),e&&e[ko]?(e=e.i,t=String(t).toString(),t in e.g&&(o=e.g[t],n=Tc(o,n,r,i),-1<n&&(Qa(o[n]),Array.prototype.splice.call(o,n,1),o.length==0&&(delete e.g[t],e.h--)))):e&&(e=dd(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Tc(t,n,r,i)),(n=-1<e?t[e]:null)&&fd(n))}function fd(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[ko])Ic(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(E0(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=dd(t))?(Ic(n,e),n.h==0&&(n.src=null,t[cd]=null)):Qa(e)}}}function E0(e){return e in iu?iu[e]:iu[e]="on"+e}function kb(e,t){if(e.ba)e=!0;else{t=new eo(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&fd(e),e=n.call(r,t)}return e}function dd(e){return e=e[cd],e instanceof Ja?e:null}var ou="__closure_events_fn_"+(1e9*Math.random()>>>0);function hd(e){return typeof e=="function"?e:(e[ou]||(e[ou]=function(t){return e.handleEvent(t)}),e[ou])}function de(){Cn.call(this),this.i=new Ja(this),this.P=this,this.I=null}ve(de,Cn);de.prototype[ko]=!0;de.prototype.removeEventListener=function(e,t,n,r){w0(this,e,t,n,r)};function me(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,typeof t=="string")t=new Ie(t,e);else if(t instanceof Ie)t.target=t.target||e;else{var i=t;t=new Ie(r,e),m0(t,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=t.g=n[o];i=es(s,r,!0,t)&&i}if(s=t.g=e,i=es(s,r,!0,t)&&i,i=es(s,r,!1,t)&&i,n)for(o=0;o<n.length;o++)s=t.g=n[o],i=es(s,r,!1,t)&&i}de.prototype.M=function(){if(de.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Qa(n[r]);delete e.g[t],e.h--}}this.I=null};de.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};de.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function es(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.ba&&s.capture==n){var a=s.listener,l=s.ha||s.src;s.ea&&Ic(e.i,s),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var pd=N.JSON.stringify;function Sb(){var e=S0;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ib{constructor(){this.h=this.g=null}add(t,n){const r=_0.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var _0=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Tb,e=>e.reset());class Tb{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Cb(e){N.setTimeout(()=>{throw e},0)}function k0(e,t){Cc||bb(),bc||(Cc(),bc=!0),S0.add(e,t)}var Cc;function bb(){var e=N.Promise.resolve(void 0);Cc=function(){e.then(Ab)}}var bc=!1,S0=new Ib;function Ab(){for(var e;e=Sb();){try{e.h.call(e.g)}catch(n){Cb(n)}var t=_0;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}bc=!1}function Za(e,t){de.call(this),this.h=e||1,this.g=t||N,this.j=Se(this.lb,this),this.l=Date.now()}ve(Za,de);A=Za.prototype;A.ca=!1;A.R=null;A.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),me(this,"tick"),this.ca&&(md(this),this.start()))}};A.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function md(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}A.M=function(){Za.X.M.call(this),md(this),delete this.g};function gd(e,t,n){if(typeof e=="function")n&&(e=Se(e,n));else if(e&&typeof e.handleEvent=="function")e=Se(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:N.setTimeout(e,t||0)}function I0(e){e.g=gd(()=>{e.g=null,e.i&&(e.i=!1,I0(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class xb extends Cn{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:I0(this)}M(){super.M(),this.g&&(N.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function to(e){Cn.call(this),this.h=e,this.g={}}ve(to,Cn);var Yp=[];function T0(e,t,n,r){Array.isArray(n)||(n&&(Yp[0]=n.toString()),n=Yp);for(var i=0;i<n.length;i++){var o=g0(t,n[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function C0(e){ud(e.g,function(t,n){this.g.hasOwnProperty(n)&&fd(t)},e),e.g={}}to.prototype.M=function(){to.X.M.call(this),C0(this)};to.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function el(){this.g=!0}el.prototype.Aa=function(){this.g=!1};function Pb(e,t,n,r,i,o){e.info(function(){if(e.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");s=2<=f.length&&f[1]=="type"?s+(c+"="+u+"&"):s+(c+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+s})}function Rb(e,t,n,r,i,o,s){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+o+" "+s})}function Er(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Nb(e,n)+(r?" "+r:"")})}function Ob(e,t){e.info(function(){return"TIMEOUT: "+t})}el.prototype.info=function(){};function Nb(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if(o!="noop"&&o!="stop"&&o!="close")for(var s=1;s<i.length;s++)i[s]=""}}}}return pd(n)}catch{return t}}var qr={},Xp=null;function vd(){return Xp=Xp||new de}qr.Pa="serverreachability";function b0(e){Ie.call(this,qr.Pa,e)}ve(b0,Ie);function no(e){const t=vd();me(t,new b0(t))}qr.STAT_EVENT="statevent";function A0(e,t){Ie.call(this,qr.STAT_EVENT,e),this.stat=t}ve(A0,Ie);function Ae(e){const t=vd();me(t,new A0(t,e))}qr.Qa="timingevent";function x0(e,t){Ie.call(this,qr.Qa,e),this.size=t}ve(x0,Ie);function So(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return N.setTimeout(function(){e()},t)}var yd={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Db={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function wd(){}wd.prototype.h=null;function qp(e){return e.h||(e.h=e.i())}function Lb(){}var Io={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ed(){Ie.call(this,"d")}ve(Ed,Ie);function _d(){Ie.call(this,"c")}ve(_d,Ie);var Ac;function tl(){}ve(tl,wd);tl.prototype.g=function(){return new XMLHttpRequest};tl.prototype.i=function(){return{}};Ac=new tl;function To(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new to(this),this.O=Mb,e=kc?125:void 0,this.T=new Za(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new P0}function P0(){this.i=null,this.g="",this.h=!1}var Mb=45e3,xc={},fa={};A=To.prototype;A.setTimeout=function(e){this.O=e};function Pc(e,t,n){e.K=1,e.v=rl(jt(t)),e.s=n,e.P=!0,R0(e,null)}function R0(e,t){e.F=Date.now(),Co(e),e.A=jt(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),F0(n.i,"t",r),e.C=0,n=e.l.H,e.h=new P0,e.g=s1(e.l,n?t:null,!e.s),0<e.N&&(e.L=new xb(Se(e.La,e,e.g),e.N)),T0(e.S,e.g,"readystatechange",e.ib),t=e.H?p0(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),no(),Pb(e.j,e.u,e.A,e.m,e.U,e.s)}A.ib=function(e){e=e.target;const t=this.L;t&&Nt(e)==3?t.l():this.La(e)};A.La=function(e){try{if(e==this.g)e:{const c=Nt(this.g);var t=this.g.Ea();const f=this.g.aa();if(!(3>c)&&(c!=3||kc||this.g&&(this.h.h||this.g.fa()||em(this.g)))){this.I||c!=4||t==7||(t==8||0>=f?no(3):no(2)),nl(this);var n=this.g.aa();this.Y=n;t:if(O0(this)){var r=em(this.g);e="";var i=r.length,o=Nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$n(this),xi(this);var s="";break t}this.h.i=new N.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:o&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.fa();if(this.i=n==200,Rb(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ca(a)){var u=a;break t}}u=null}if(n=u)Er(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Rc(this,n);else{this.i=!1,this.o=3,Ae(12),$n(this),xi(this);break e}}this.P?(N0(this,c,s),kc&&this.i&&c==3&&(T0(this.S,this.T,"tick",this.hb),this.T.start())):(Er(this.j,this.m,s,null),Rc(this,s)),c==4&&$n(this),this.i&&!this.I&&(c==4?n1(this.l,this):(this.i=!1,Co(this)))}else n==400&&0<s.indexOf("Unknown SID")?(this.o=3,Ae(12)):(this.o=0,Ae(13)),$n(this),xi(this)}}}catch{}finally{}};function O0(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function N0(e,t,n){let r=!0,i;for(;!e.I&&e.C<n.length;)if(i=$b(e,n),i==fa){t==4&&(e.o=4,Ae(14),r=!1),Er(e.j,e.m,null,"[Incomplete Response]");break}else if(i==xc){e.o=4,Ae(15),Er(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Er(e.j,e.m,i,null),Rc(e,i);O0(e)&&i!=fa&&i!=xc&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Ae(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ad(t),t.K=!0,Ae(11))):(Er(e.j,e.m,n,"[Invalid Chunked Response]"),$n(e),xi(e))}A.hb=function(){if(this.g){var e=Nt(this.g),t=this.g.fa();this.C<t.length&&(nl(this),N0(this,e,t),this.i&&e!=4&&Co(this))}};function $b(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?fa:(n=Number(t.substring(n,r)),isNaN(n)?xc:(r+=1,r+n>t.length?fa:(t=t.substr(r,n),e.C=r+n,t)))}A.cancel=function(){this.I=!0,$n(this)};function Co(e){e.V=Date.now()+e.O,D0(e,e.O)}function D0(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=So(Se(e.gb,e),t)}function nl(e){e.B&&(N.clearTimeout(e.B),e.B=null)}A.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(Ob(this.j,this.A),this.K!=2&&(no(),Ae(17)),$n(this),this.o=2,xi(this)):D0(this,this.V-e)};function xi(e){e.l.G==0||e.I||n1(e.l,e)}function $n(e){nl(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,md(e.T),C0(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Rc(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Oc(n.h,e))){if(!e.J&&Oc(n.h,e)&&n.G==3){try{var r=n.Fa.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)pa(n),al(n);else break e;bd(n),Ae(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=So(Se(n.cb,n),6e3));if(1>=B0(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Un(n,11)}else if((e.J||n.g==e)&&pa(n),!ca(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const f=u[4];f!=null&&(n.Ca=f,n.j.info("SVER="+n.Ca));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=e.g;if(g){const v=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var o=r.h;o.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(o.j=o.l,o.g=new Set,o.h&&(kd(o,o.h),o.h=null))}if(r.D){const y=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.za=y,q(r.F,r.D,y))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var s=e;if(r.sa=o1(r,r.H?r.ka:null,r.V),s.J){H0(r.h,s);var a=s,l=r.J;l&&a.setTimeout(l),a.B&&(nl(a),Co(a)),r.g=s}else e1(r);0<n.i.length&&ll(n)}else u[0]!="stop"&&u[0]!="close"||Un(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Un(n,7):Cd(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}no(4)}catch{}}function Ub(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Xa(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Fb(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Xa(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function L0(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Xa(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Fb(e),r=Ub(e),i=r.length,o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}var M0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jb(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Vn(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Vn){this.h=t!==void 0?t:e.h,da(this,e.j),this.s=e.s,this.g=e.g,ha(this,e.m),this.l=e.l,t=e.i;var n=new ro;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Qp(this,n),this.o=e.o}else e&&(n=String(e).match(M0))?(this.h=!!t,da(this,n[1]||"",!0),this.s=mi(n[2]||""),this.g=mi(n[3]||"",!0),ha(this,n[4]),this.l=mi(n[5]||"",!0),Qp(this,n[6]||"",!0),this.o=mi(n[7]||"")):(this.h=!!t,this.i=new ro(null,this.h))}Vn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(gi(t,Jp,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(gi(t,Jp,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(gi(n,n.charAt(0)=="/"?Hb:Bb,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",gi(n,Wb)),e.join("")};function jt(e){return new Vn(e)}function da(e,t,n){e.j=n?mi(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ha(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Qp(e,t,n){t instanceof ro?(e.i=t,Gb(e.i,e.h)):(n||(t=gi(t,Vb)),e.i=new ro(t,e.h))}function q(e,t,n){e.i.set(t,n)}function rl(e){return q(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function mi(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function gi(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,zb),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function zb(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Jp=/[#\/\?@]/g,Bb=/[#\?:]/g,Hb=/[#\?]/g,Vb=/[#\?@]/g,Wb=/#/g;function ro(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function bn(e){e.g||(e.g=new Map,e.h=0,e.i&&jb(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}A=ro.prototype;A.add=function(e,t){bn(this),this.i=null,e=Qr(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function $0(e,t){bn(e),t=Qr(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function U0(e,t){return bn(e),t=Qr(e,t),e.g.has(t)}A.forEach=function(e,t){bn(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};A.oa=function(){bn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let o=0;o<i.length;o++)n.push(t[r])}return n};A.W=function(e){bn(this);let t=[];if(typeof e=="string")U0(this,e)&&(t=t.concat(this.g.get(Qr(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};A.set=function(e,t){return bn(this),this.i=null,e=Qr(this,e),U0(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};A.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function F0(e,t,n){$0(e,t),0<n.length&&(e.i=null,e.g.set(Qr(e,t),ad(n)),e.h+=n.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const o=encodeURIComponent(String(r)),s=this.W(r);for(r=0;r<s.length;r++){var i=o;s[r]!==""&&(i+="="+encodeURIComponent(String(s[r]))),e.push(i)}}return this.i=e.join("&")};function Qr(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Gb(e,t){t&&!e.j&&(bn(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&($0(this,r),F0(this,i,n))},e)),e.j=t}var Kb=class{constructor(e,t){this.h=e,this.g=t}};function j0(e){this.l=e||Yb,N.PerformanceNavigationTiming?(e=N.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(N.g&&N.g.Ga&&N.g.Ga()&&N.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Yb=10;function z0(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function B0(e){return e.h?1:e.g?e.g.size:0}function Oc(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function kd(e,t){e.g?e.g.add(t):e.h=t}function H0(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}j0.prototype.cancel=function(){if(this.i=V0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function V0(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return ad(e.i)}function Sd(){}Sd.prototype.stringify=function(e){return N.JSON.stringify(e,void 0)};Sd.prototype.parse=function(e){return N.JSON.parse(e,void 0)};function Xb(){this.g=new Sd}function qb(e,t,n){const r=n||"";try{L0(e,function(i,o){let s=i;_o(i)&&(s=pd(i)),t.push(r+o+"="+encodeURIComponent(s))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Qb(e,t){const n=new el;if(N.Image){const r=new Image;r.onload=Zo(ts,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Zo(ts,n,r,"TestLoadImage: error",!1,t),r.onabort=Zo(ts,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Zo(ts,n,r,"TestLoadImage: timeout",!1,t),N.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function ts(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function il(e){this.l=e.ac||null,this.j=e.jb||!1}ve(il,wd);il.prototype.g=function(){return new ol(this.l,this.j)};il.prototype.i=function(e){return function(){return e}}({});function ol(e,t){de.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Id,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ve(ol,de);var Id=0;A=ol.prototype;A.open=function(e,t){if(this.readyState!=Id)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,io(this)};A.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||N).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bo(this)),this.readyState=Id};A.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,io(this)),this.g&&(this.readyState=3,io(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof N.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;W0(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function W0(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}A.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?bo(this):io(this),this.readyState==3&&W0(this)}};A.Va=function(e){this.g&&(this.response=this.responseText=e,bo(this))};A.Ua=function(e){this.g&&(this.response=e,bo(this))};A.ga=function(){this.g&&bo(this)};function bo(e){e.readyState=4,e.l=null,e.j=null,e.A=null,io(e)}A.setRequestHeader=function(e,t){this.v.append(e,t)};A.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function io(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(ol.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Jb=N.JSON.parse;function ie(e){de.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=G0,this.K=this.L=!1}ve(ie,de);var G0="",Zb=/^https?$/i,eA=["POST","PUT"];A=ie.prototype;A.Ka=function(e){this.L=e};A.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ac.g(),this.C=this.u?qp(this.u):qp(Ac),this.g.onreadystatechange=Se(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(o){Zp(this,o);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const o of r.keys())n.set(o,r.get(o));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(o=>o.toLowerCase()=="content-type"),i=N.FormData&&e instanceof N.FormData,!(0<=c0(eA,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,s]of n)this.g.setRequestHeader(o,s);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{X0(this),0<this.B&&((this.K=tA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Se(this.qa,this)):this.A=gd(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(o){Zp(this,o)}};function tA(e){return Zi&&vb()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}A.qa=function(){typeof sd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,me(this,"timeout"),this.abort(8))};function Zp(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,K0(e),sl(e)}function K0(e){e.D||(e.D=!0,me(e,"complete"),me(e,"error"))}A.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,me(this,"complete"),me(this,"abort"),sl(this))};A.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),sl(this,!0)),ie.X.M.call(this)};A.Ha=function(){this.s||(this.F||this.v||this.l?Y0(this):this.fb())};A.fb=function(){Y0(this)};function Y0(e){if(e.h&&typeof sd<"u"&&(!e.C[1]||Nt(e)!=4||e.aa()!=2)){if(e.v&&Nt(e)==4)gd(e.Ha,0,e);else if(me(e,"readystatechange"),Nt(e)==4){e.h=!1;try{const a=e.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=a===0){var i=String(e.H).match(M0)[1]||null;if(!i&&N.self&&N.self.location){var o=N.self.location.protocol;i=o.substr(0,o.length-1)}r=!Zb.test(i?i.toLowerCase():"")}n=r}if(n)me(e,"complete"),me(e,"success");else{e.m=6;try{var s=2<Nt(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.aa()+"]",K0(e)}}finally{sl(e)}}}}function sl(e,t){if(e.g){X0(e);const n=e.g,r=e.C[0]?ua:null;e.g=null,e.C=null,t||me(e,"ready");try{n.onreadystatechange=r}catch{}}}function X0(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(N.clearTimeout(e.A),e.A=null)}function Nt(e){return e.g?e.g.readyState:0}A.aa=function(){try{return 2<Nt(this)?this.g.status:-1}catch{return-1}};A.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Jb(t)}};function em(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case G0:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}A.Ea=function(){return this.m};A.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function q0(e){let t="";return ud(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Td(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=q0(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):q(e,t,n))}function ci(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Q0(e){this.Ca=0,this.i=[],this.j=new el,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ci("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ci("baseRetryDelayMs",5e3,e),this.bb=ci("retryDelaySeedMs",1e4,e),this.$a=ci("forwardChannelMaxRetries",2,e),this.ta=ci("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new j0(e&&e.concurrentRequestLimit),this.Fa=new Xb,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}A=Q0.prototype;A.ma=8;A.G=1;function Cd(e){if(J0(e),e.G==3){var t=e.U++,n=jt(e.F);q(n,"SID",e.I),q(n,"RID",t),q(n,"TYPE","terminate"),Ao(e,n),t=new To(e,e.j,t,void 0),t.K=2,t.v=rl(jt(n)),n=!1,N.navigator&&N.navigator.sendBeacon&&(n=N.navigator.sendBeacon(t.v.toString(),"")),!n&&N.Image&&(new Image().src=t.v,n=!0),n||(t.g=s1(t.l,null),t.g.da(t.v)),t.F=Date.now(),Co(t)}i1(e)}function al(e){e.g&&(Ad(e),e.g.cancel(),e.g=null)}function J0(e){al(e),e.u&&(N.clearTimeout(e.u),e.u=null),pa(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&N.clearTimeout(e.m),e.m=null)}function ll(e){z0(e.h)||e.m||(e.m=!0,k0(e.Ja,e),e.C=0)}function nA(e,t){return B0(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=So(Se(e.Ja,e,t),r1(e,e.C)),e.C++,!0)}A.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new To(this,this.j,e,void 0);let o=this.s;if(this.S&&(o?(o=p0(o),m0(o,this.S)):o=this.S),this.o!==null||this.N||(i.H=o,o=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Z0(this,i,t),n=jt(this.F),q(n,"RID",e),q(n,"CVER",22),this.D&&q(n,"X-HTTP-Session-Id",this.D),Ao(this,n),o&&(this.N?t="headers="+encodeURIComponent(String(q0(o)))+"&"+t:this.o&&Td(n,this.o,o)),kd(this.h,i),this.Ya&&q(n,"TYPE","init"),this.O?(q(n,"$req",t),q(n,"SID","null"),i.Z=!0,Pc(i,n,null)):Pc(i,n,t),this.G=2}}else this.G==3&&(e?tm(this,e):this.i.length==0||z0(this.h)||tm(this))};function tm(e,t){var n;t?n=t.m:n=e.U++;const r=jt(e.F);q(r,"SID",e.I),q(r,"RID",n),q(r,"AID",e.T),Ao(e,r),e.o&&e.s&&Td(r,e.o,e.s),n=new To(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=Z0(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),kd(e.h,n),Pc(n,r,t)}function Ao(e,t){e.ia&&ud(e.ia,function(n,r){q(t,r,n)}),e.l&&L0({},function(n,r){q(t,r,n)})}function Z0(e,t,n){n=Math.min(e.i.length,n);var r=e.l?Se(e.l.Ra,e.l,e):null;e:{var i=e.i;let o=-1;for(;;){const s=["count="+n];o==-1?0<n?(o=i[0].h,s.push("ofs="+o)):o=0:s.push("ofs="+o);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=o,0>u)o=Math.max(0,i[l].h-100),a=!1;else try{qb(c,s,"req"+u+"_")}catch{r&&r(c)}}if(a){r=s.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function e1(e){e.g||e.u||(e.Z=1,k0(e.Ia,e),e.A=0)}function bd(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=So(Se(e.Ia,e),r1(e,e.A)),e.A++,!0)}A.Ia=function(){if(this.u=null,t1(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=So(Se(this.eb,this),e)}};A.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ae(10),al(this),t1(this))};function Ad(e){e.B!=null&&(N.clearTimeout(e.B),e.B=null)}function t1(e){e.g=new To(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=jt(e.sa);q(t,"RID","rpc"),q(t,"SID",e.I),q(t,"CI",e.L?"0":"1"),q(t,"AID",e.T),q(t,"TYPE","xmlhttp"),Ao(e,t),e.o&&e.s&&Td(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=rl(jt(t)),n.s=null,n.P=!0,R0(n,e)}A.cb=function(){this.v!=null&&(this.v=null,al(this),bd(this),Ae(19))};function pa(e){e.v!=null&&(N.clearTimeout(e.v),e.v=null)}function n1(e,t){var n=null;if(e.g==t){pa(e),Ad(e),e.g=null;var r=2}else if(Oc(e.h,t))n=t.D,H0(e.h,t),r=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=vd(),me(r,new x0(r,n)),ll(e)}else e1(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(r==1&&nA(e,t)||r==2&&bd(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Un(e,5);break;case 4:Un(e,10);break;case 3:Un(e,6);break;default:Un(e,2)}}}function r1(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Un(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var r=Se(e.kb,e);n||(n=new Vn("//www.google.com/images/cleardot.gif"),N.location&&N.location.protocol=="http"||da(n,"https"),rl(n)),Qb(n.toString(),r)}else Ae(2);e.G=0,e.l&&e.l.va(t),i1(e),J0(e)}A.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Ae(2)):(this.j.info("Failed to ping google.com"),Ae(1))};function i1(e){if(e.G=0,e.la=[],e.l){const t=V0(e.h);(t.length!=0||e.i.length!=0)&&(Wp(e.la,t),Wp(e.la,e.i),e.h.i.length=0,ad(e.i),e.i.length=0),e.l.ua()}}function o1(e,t,n){var r=n instanceof Vn?jt(n):new Vn(n,void 0);if(r.g!="")t&&(r.g=t+"."+r.g),ha(r,r.m);else{var i=N.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var o=new Vn(null,void 0);r&&da(o,r),t&&(o.g=t),i&&ha(o,i),n&&(o.l=n),r=o}return n=e.D,t=e.za,n&&t&&q(r,n,t),q(r,"VER",e.ma),Ao(e,r),r}function s1(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new ie(new il({jb:!0})):new ie(e.ra),t.Ka(e.H),t}function a1(){}A=a1.prototype;A.xa=function(){};A.wa=function(){};A.va=function(){};A.ua=function(){};A.Ra=function(){};function rt(e,t){de.call(this),this.g=new Q0(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!ca(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ca(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Jr(this)}ve(rt,de);rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Ae(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=o1(e,null,e.V),ll(e)};rt.prototype.close=function(){Cd(this.g)};rt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=pd(e),e=n);t.i.push(new Kb(t.ab++,e)),t.G==3&&ll(t)};rt.prototype.M=function(){this.g.l=null,delete this.j,Cd(this.g),delete this.g,rt.X.M.call(this)};function l1(e){Ed.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}ve(l1,Ed);function u1(){_d.call(this),this.status=1}ve(u1,_d);function Jr(e){this.g=e}ve(Jr,a1);Jr.prototype.xa=function(){me(this.g,"a")};Jr.prototype.wa=function(e){me(this.g,new l1(e))};Jr.prototype.va=function(e){me(this.g,new u1)};Jr.prototype.ua=function(){me(this.g,"b")};rt.prototype.send=rt.prototype.u;rt.prototype.open=rt.prototype.m;rt.prototype.close=rt.prototype.close;yd.NO_ERROR=0;yd.TIMEOUT=8;yd.HTTP_ERROR=6;Db.COMPLETE="complete";Lb.EventType=Io;Io.OPEN="a";Io.CLOSE="b";Io.ERROR="c";Io.MESSAGE="d";de.prototype.listen=de.prototype.N;ie.prototype.listenOnce=ie.prototype.O;ie.prototype.getLastError=ie.prototype.Oa;ie.prototype.getLastErrorCode=ie.prototype.Ea;ie.prototype.getStatus=ie.prototype.aa;ie.prototype.getResponseJson=ie.prototype.Sa;ie.prototype.getResponseText=ie.prototype.fa;ie.prototype.send=ie.prototype.da;ie.prototype.setWithCredentials=ie.prototype.Ka;const nm="@firebase/firestore";/**
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
 */class Ee{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ee.UNAUTHENTICATED=new Ee(null),Ee.GOOGLE_CREDENTIALS=new Ee("google-credentials-uid"),Ee.FIRST_PARTY=new Ee("first-party-uid"),Ee.MOCK_USER=new Ee("mock-user");/**
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
 */const Vr=new za("@firebase/firestore");function je(e,...t){if(Vr.logLevel<=B.DEBUG){const n=t.map(Pd);Vr.debug(`Firestore (${xo}): ${e}`,...n)}}function xd(e,...t){if(Vr.logLevel<=B.ERROR){const n=t.map(Pd);Vr.error(`Firestore (${xo}): ${e}`,...n)}}function rA(e,...t){if(Vr.logLevel<=B.WARN){const n=t.map(Pd);Vr.warn(`Firestore (${xo}): ${e}`,...n)}}function Pd(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
 */function Rd(e="Unexpected state"){const t=`FIRESTORE (${xo}) INTERNAL ASSERTION FAILED: `+e;throw xd(t),new Error(t)}function ma(e,t){e||Rd()}/**
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
 */const He={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ve extends pt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class c1{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class iA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Ee.UNAUTHENTICATED))}shutdown(){}}class oA{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class sA{constructor(t){this.t=t,this.currentUser=Ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let o=new Dr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Dr,t.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const l=o;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{je("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(je("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Dr)}},0),s()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(je("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ma(typeof r.accessToken=="string"),new c1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ma(t===null||typeof t=="string"),new Ee(t)}}class aA{constructor(t,n,r,i){this.h=t,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=Ee.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ma(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class lA{constructor(t,n,r,i){this.h=t,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new aA(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(Ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class uA{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cA{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const r=o=>{o.error!=null&&je("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.A;return this.A=o.token,je("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{je("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.T.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.T.getImmediate({optional:!0});o?i(o):je("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(ma(typeof n.token=="string"),this.A=n.token,new uA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function fA(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class dA{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=fA(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=t.charAt(i[o]%t.length))}return r}}function f1(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class hA{constructor(t,n,r,i,o,s,a,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class ga{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ga("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ga&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var rm,j;(j=rm||(rm={}))[j.OK=0]="OK",j[j.CANCELLED=1]="CANCELLED",j[j.UNKNOWN=2]="UNKNOWN",j[j.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",j[j.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",j[j.NOT_FOUND=5]="NOT_FOUND",j[j.ALREADY_EXISTS=6]="ALREADY_EXISTS",j[j.PERMISSION_DENIED=7]="PERMISSION_DENIED",j[j.UNAUTHENTICATED=16]="UNAUTHENTICATED",j[j.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",j[j.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",j[j.ABORTED=10]="ABORTED",j[j.OUT_OF_RANGE=11]="OUT_OF_RANGE",j[j.UNIMPLEMENTED=12]="UNIMPLEMENTED",j[j.INTERNAL=13]="INTERNAL",j[j.UNAVAILABLE=14]="UNAVAILABLE",j[j.DATA_LOSS=15]="DATA_LOSS";function su(){return typeof document<"u"?document:null}class pA{constructor(t,n,r=1e3,i=1.5,o=6e4){this.Hs=t,this.timerId=n,this.mo=r,this.yo=i,this.po=o,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&je("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),t())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class Od{constructor(t,n,r,i,o){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Dr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}static createAndSchedule(t,n,r,i,o){const s=Date.now()+r,a=new Od(t,n,s,i,o);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ve(He.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mA(e,t){if(xd("AsyncQueue",`${t}: ${e}`),f1(e))return new Ve(He.UNAVAILABLE,`${t}: ${e}`);throw e}function gA(e,t,n,r){if(t===!0&&r===!0)throw new Ve(He.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function vA(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Rd()}function yA(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ve(He.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vA(e);throw new Ve(He.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */const im=new Map;class om{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new Ve(He.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Ve(He.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,gA("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class d1{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new om({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ve(He.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new Ve(He.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new om(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new iA;switch(n.type){case"gapi":const r=n.client;return new lA(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Ve(He.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=im.get(t);n&&(je("ComponentProvider","Removing Datastore"),im.delete(t),n.terminate())}(this),Promise.resolve()}}function wA(e,t,n,r={}){var i;const o=(e=yA(e,d1))._getSettings();if(o.host!=="firestore.googleapis.com"&&o.host!==t&&rA("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},o),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let s,a;if(typeof r.mockUserToken=="string")s=r.mockUserToken,a=Ee.MOCK_USER;else{s=Ak(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new Ve(He.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ee(l)}e._authCredentials=new oA(new c1(s,a))}}/**
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
 */class EA{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ee.UNAUTHENTICATED,this.clientId=dA.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{je("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(je("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ve(He.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Dr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=mA(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}class _A{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new pA(this,"async_queue_retry"),this.Wc=()=>{const n=su();n&&je("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const t=su();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const n=su();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Dr;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Lc.push(t),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!f1(t))throw t;je("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(t){const n=this.Bc.then(()=>(this.Gc=!0,t().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(o){let s=o.message||"";return o.stack&&(s=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),s}(r);throw xd("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(t,n,r){this.zc(),this.jc.indexOf(t)>-1&&(n=0);const i=Od.createAndSchedule(this,t,n,r,o=>this.Yc(o));return this.Uc.push(i),i}zc(){this.Kc&&Rd()}verifyOperationInProgress(){}async Xc(){let t;do t=this.Bc,await t;while(t!==this.Bc)}Zc(t){for(const n of this.Uc)if(n.timerId===t)return!0;return!1}ta(t){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Xc()})}ea(t){this.jc.push(t)}Yc(t){const n=this.Uc.indexOf(t);this.Uc.splice(n,1)}}class kA extends d1{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=new _A,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||IA(this),this._firestoreClient.terminate()}}function SA(e,t){const n=typeof e=="object"?e:Kf(),r=typeof e=="string"?e:t||"(default)",i=or(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Tk("firestore");o&&wA(i,...o)}return i}function IA(e){var t;const n=e._freezeSettings(),r=function(i,o,s,a){return new hA(i,o,s,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new EA(e._authCredentials,e._appCheckCredentials,e._queue,r)}(function(e,t=!0){(function(n){xo=n})(vo),It(new ht("firestore",(n,{instanceIdentifier:r,options:i})=>{const o=n.getProvider("app").getImmediate(),s=new kA(new sA(n.getProvider("auth-internal")),new cA(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new Ve(He.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ga(a.options.projectId,l)}(o,r),o);return i=Object.assign({useFetchStreams:t},i),s._setSettings(i),s},"PUBLIC").setMultipleInstances(!0)),Ze(nm,"3.8.0",e),Ze(nm,"3.8.0","esm2017")})();const TA={apiKey:"AIzaSyDz04nBEbZ1KR-F2MVLUPLItJBYdrR6byI",authDomain:"farmers-say.firebaseapp.com",projectId:"farmers-say",storageBucket:"farmers-say.appspot.com",messagingSenderId:"23878965921",appId:"1:23878965921:web:4e4c4730537a442ee52ee0",measurementId:"G-BYXEC5X69Q"},Nd=sy(TA);oT(Nd);const sm=ob(Nd);SA(Nd);/*! *****************************************************************************
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
***************************************************************************** */function CA(e,t,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(c){try{u(r.next(c))}catch(f){s(f)}}function l(c){try{u(r.throw(c))}catch(f){s(f)}}function u(c){c.done?o(c.value):i(c.value).then(a,l)}u((r=r.apply(e,t||[])).next())})}function bA(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){n.label=u[1];break}if(u[0]===6&&n.label<o[1]){n.label=o[1],o=u;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(u);break}o[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(c){u=[6,c],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
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
***************************************************************************** */var _r=function(){return _r=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},_r.apply(this,arguments)},h1=function(e){return{loading:e==null,value:e}},AA=function(){return function(e,t){switch(t.type){case"error":return _r(_r({},e),{error:t.error,loading:!1,value:void 0});case"reset":return h1(t.defaultValue);case"value":return _r(_r({},e),{error:void 0,loading:!1,value:t.value});default:return e}}},xA=function(e){var t=e?e():void 0,n=P.useReducer(AA(),h1(t)),r=n[0],i=n[1],o=P.useCallback(function(){var l=e?e():void 0;i({type:"reset",defaultValue:l})},[e]),s=P.useCallback(function(l){i({type:"error",error:l})},[]),a=P.useCallback(function(l){i({type:"value",value:l})},[]);return P.useMemo(function(){return{error:r.error,loading:r.loading,reset:o,setError:s,setValue:a,value:r.value}},[r.error,r.loading,o,s,a,r.value])},PA=function(e,t){var n=xA(function(){return e.currentUser}),r=n.error,i=n.loading,o=n.setError,s=n.setValue,a=n.value;return P.useEffect(function(){var l=WT(e,function(u){return CA(void 0,void 0,void 0,function(){var c;return bA(this,function(f){switch(f.label){case 0:if(!(t!=null&&t.onUserChanged))return[3,4];f.label=1;case 1:return f.trys.push([1,3,,4]),[4,t.onUserChanged(u)];case 2:return f.sent(),[3,4];case 3:return c=f.sent(),o(c),[3,4];case 4:return s(u),[2]}})})},o);return function(){l()}},[e]),[a,i,r]};function am(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?am(Object(n),!0).forEach(function(r){le(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):am(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function va(e){return va=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},va(e)}function RA(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function lm(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function OA(e,t,n){return t&&lm(e.prototype,t),n&&lm(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Dd(e,t){return DA(e)||MA(e,t)||p1(e,t)||UA()}function Po(e){return NA(e)||LA(e)||p1(e)||$A()}function NA(e){if(Array.isArray(e))return Nc(e)}function DA(e){if(Array.isArray(e))return e}function LA(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function MA(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,a;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));i=!0);}catch(l){o=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw a}}return r}}function p1(e,t){if(e){if(typeof e=="string")return Nc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nc(e,t)}}function Nc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function $A(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function UA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var um=function(){},Ld={},m1={},g1=null,v1={mark:um,measure:um};try{typeof window<"u"&&(Ld=window),typeof document<"u"&&(m1=document),typeof MutationObserver<"u"&&(g1=MutationObserver),typeof performance<"u"&&(v1=performance)}catch{}var FA=Ld.navigator||{},cm=FA.userAgent,fm=cm===void 0?"":cm,En=Ld,Y=m1,dm=g1,ns=v1;En.document;var Gt=!!Y.documentElement&&!!Y.head&&typeof Y.addEventListener=="function"&&typeof Y.createElement=="function",y1=~fm.indexOf("MSIE")||~fm.indexOf("Trident/"),rs,is,os,ss,as,zt="___FONT_AWESOME___",Dc=16,w1="fa",E1="svg-inline--fa",er="data-fa-i2svg",Lc="data-fa-pseudo-element",jA="data-fa-pseudo-element-pending",Md="data-prefix",$d="data-icon",hm="fontawesome-i2svg",zA="async",BA=["HTML","HEAD","STYLE","SCRIPT"],_1=function(){try{return!0}catch{return!1}}(),G="classic",te="sharp",Ud=[G,te];function Ro(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[G]}})}var oo=Ro((rs={},le(rs,G,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),le(rs,te,{fa:"solid",fass:"solid","fa-solid":"solid"}),rs)),so=Ro((is={},le(is,G,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),le(is,te,{solid:"fass"}),is)),ao=Ro((os={},le(os,G,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),le(os,te,{fass:"fa-solid"}),os)),HA=Ro((ss={},le(ss,G,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),le(ss,te,{"fa-solid":"fass"}),ss)),VA=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,k1="fa-layers-text",WA=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,GA=Ro((as={},le(as,G,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),le(as,te,{900:"fass"}),as)),S1=[1,2,3,4,5,6,7,8,9,10],KA=S1.concat([11,12,13,14,15,16,17,18,19,20]),YA=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Fn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},lo=new Set;Object.keys(so[G]).map(lo.add.bind(lo));Object.keys(so[te]).map(lo.add.bind(lo));var XA=[].concat(Ud,Po(lo),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Fn.GROUP,Fn.SWAP_OPACITY,Fn.PRIMARY,Fn.SECONDARY]).concat(S1.map(function(e){return"".concat(e,"x")})).concat(KA.map(function(e){return"w-".concat(e)})),Pi=En.FontAwesomeConfig||{};function qA(e){var t=Y.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function QA(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Y&&typeof Y.querySelector=="function"){var JA=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];JA.forEach(function(e){var t=Dd(e,2),n=t[0],r=t[1],i=QA(qA(n));i!=null&&(Pi[r]=i)})}var I1={styleDefault:"solid",familyDefault:"classic",cssPrefix:w1,replacementClass:E1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Pi.familyPrefix&&(Pi.cssPrefix=Pi.familyPrefix);var Wr=I(I({},I1),Pi);Wr.autoReplaceSvg||(Wr.observeMutations=!1);var b={};Object.keys(I1).forEach(function(e){Object.defineProperty(b,e,{enumerable:!0,set:function(n){Wr[e]=n,Ri.forEach(function(r){return r(b)})},get:function(){return Wr[e]}})});Object.defineProperty(b,"familyPrefix",{enumerable:!0,set:function(t){Wr.cssPrefix=t,Ri.forEach(function(n){return n(b)})},get:function(){return Wr.cssPrefix}});En.FontAwesomeConfig=b;var Ri=[];function ZA(e){return Ri.push(e),function(){Ri.splice(Ri.indexOf(e),1)}}var Xt=Dc,wt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ex(e){if(!(!e||!Gt)){var t=Y.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Y.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return Y.head.insertBefore(t,r),e}}var tx="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function uo(){for(var e=12,t="";e-- >0;)t+=tx[Math.random()*62|0];return t}function Zr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Fd(e){return e.classList?Zr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function T1(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function nx(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(T1(e[n]),'" ')},"").trim()}function ul(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function jd(e){return e.size!==wt.size||e.x!==wt.x||e.y!==wt.y||e.rotate!==wt.rotate||e.flipX||e.flipY}function rx(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function ix(e){var t=e.transform,n=e.width,r=n===void 0?Dc:n,i=e.height,o=i===void 0?Dc:i,s=e.startCentered,a=s===void 0?!1:s,l="";return a&&y1?l+="translate(".concat(t.x/Xt-r/2,"em, ").concat(t.y/Xt-o/2,"em) "):a?l+="translate(calc(-50% + ".concat(t.x/Xt,"em), calc(-50% + ").concat(t.y/Xt,"em)) "):l+="translate(".concat(t.x/Xt,"em, ").concat(t.y/Xt,"em) "),l+="scale(".concat(t.size/Xt*(t.flipX?-1:1),", ").concat(t.size/Xt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var ox=`:root, :host {
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
}`;function C1(){var e=w1,t=E1,n=b.cssPrefix,r=b.replacementClass,i=ox;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var pm=!1;function au(){b.autoAddCss&&!pm&&(ex(C1()),pm=!0)}var sx={mixout:function(){return{dom:{css:C1,insertCss:au}}},hooks:function(){return{beforeDOMElementCreation:function(){au()},beforeI2svg:function(){au()}}}},Bt=En||{};Bt[zt]||(Bt[zt]={});Bt[zt].styles||(Bt[zt].styles={});Bt[zt].hooks||(Bt[zt].hooks={});Bt[zt].shims||(Bt[zt].shims=[]);var ut=Bt[zt],b1=[],ax=function e(){Y.removeEventListener("DOMContentLoaded",e),ya=1,b1.map(function(t){return t()})},ya=!1;Gt&&(ya=(Y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Y.readyState),ya||Y.addEventListener("DOMContentLoaded",ax));function lx(e){Gt&&(ya?setTimeout(e,0):b1.push(e))}function Oo(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?T1(e):"<".concat(t," ").concat(nx(r),">").concat(o.map(Oo).join(""),"</").concat(t,">")}function mm(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ux=function(t,n){return function(r,i,o,s){return t.call(n,r,i,o,s)}},lu=function(t,n,r,i){var o=Object.keys(t),s=o.length,a=i!==void 0?ux(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[o[0]]):(l=0,c=r);l<s;l++)u=o[l],c=a(c,t[u],u,t);return c};function cx(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Mc(e){var t=cx(e);return t.length===1?t[0].toString(16):null}function fx(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function gm(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function $c(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=gm(t);typeof ut.hooks.addPack=="function"&&!i?ut.hooks.addPack(e,gm(t)):ut.styles[e]=I(I({},ut.styles[e]||{}),o),e==="fas"&&$c("fa",t)}var ls,us,cs,kr=ut.styles,dx=ut.shims,hx=(ls={},le(ls,G,Object.values(ao[G])),le(ls,te,Object.values(ao[te])),ls),zd=null,A1={},x1={},P1={},R1={},O1={},px=(us={},le(us,G,Object.keys(oo[G])),le(us,te,Object.keys(oo[te])),us);function mx(e){return~XA.indexOf(e)}function gx(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!mx(i)?i:null}var N1=function(){var t=function(o){return lu(kr,function(s,a,l){return s[l]=lu(a,o,{}),s},{})};A1=t(function(i,o,s){if(o[3]&&(i[o[3]]=s),o[2]){var a=o[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=s})}return i}),x1=t(function(i,o,s){if(i[s]=s,o[2]){var a=o[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=s})}return i}),O1=t(function(i,o,s){var a=o[2];return i[s]=s,a.forEach(function(l){i[l]=s}),i});var n="far"in kr||b.autoFetchSvg,r=lu(dx,function(i,o){var s=o[0],a=o[1],l=o[2];return a==="far"&&!n&&(a="fas"),typeof s=="string"&&(i.names[s]={prefix:a,iconName:l}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});P1=r.names,R1=r.unicodes,zd=cl(b.styleDefault,{family:b.familyDefault})};ZA(function(e){zd=cl(e.styleDefault,{family:b.familyDefault})});N1();function Bd(e,t){return(A1[e]||{})[t]}function vx(e,t){return(x1[e]||{})[t]}function jn(e,t){return(O1[e]||{})[t]}function D1(e){return P1[e]||{prefix:null,iconName:null}}function yx(e){var t=R1[e],n=Bd("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function _n(){return zd}var Hd=function(){return{prefix:null,iconName:null,rest:[]}};function cl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?G:n,i=oo[r][e],o=so[r][e]||so[r][i],s=e in ut.styles?e:null;return o||s||null}var vm=(cs={},le(cs,G,Object.keys(ao[G])),le(cs,te,Object.keys(ao[te])),cs);function fl(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(t={},le(t,G,"".concat(b.cssPrefix,"-").concat(G)),le(t,te,"".concat(b.cssPrefix,"-").concat(te)),t),s=null,a=G;(e.includes(o[G])||e.some(function(u){return vm[G].includes(u)}))&&(a=G),(e.includes(o[te])||e.some(function(u){return vm[te].includes(u)}))&&(a=te);var l=e.reduce(function(u,c){var f=gx(b.cssPrefix,c);if(kr[c]?(c=hx[a].includes(c)?HA[a][c]:c,s=c,u.prefix=c):px[a].indexOf(c)>-1?(s=c,u.prefix=cl(c,{family:a})):f?u.iconName=f:c!==b.replacementClass&&c!==o[G]&&c!==o[te]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=s==="fa"?D1(u.iconName):{},g=jn(u.prefix,u.iconName);h.prefix&&(s=null),u.iconName=h.iconName||g||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!kr.far&&kr.fas&&!b.autoFetchSvg&&(u.prefix="fas")}return u},Hd());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===te&&(kr.fass||b.autoFetchSvg)&&(l.prefix="fass",l.iconName=jn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=_n()||"fas"),l}var wx=function(){function e(){RA(this,e),this.definitions={}}return OA(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(a){n.definitions[a]=I(I({},n.definitions[a]||{}),s[a]),$c(a,s[a]);var l=ao[G][a];l&&$c(l,s[a]),N1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var s=i[o],a=s.prefix,l=s.iconName,u=s.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),e}(),ym=[],Sr={},Lr={},Ex=Object.keys(Lr);function _x(e,t){var n=t.mixoutsTo;return ym=e,Sr={},Object.keys(Lr).forEach(function(r){Ex.indexOf(r)===-1&&delete Lr[r]}),ym.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),va(i[s])==="object"&&Object.keys(i[s]).forEach(function(a){n[s]||(n[s]={}),n[s][a]=i[s][a]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(s){Sr[s]||(Sr[s]=[]),Sr[s].push(o[s])})}r.provides&&r.provides(Lr)}),n}function Uc(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=Sr[e]||[];return o.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function tr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Sr[e]||[];i.forEach(function(o){o.apply(null,n)})}function Ht(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Lr[e]?Lr[e].apply(null,t):void 0}function Fc(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||_n();if(t)return t=jn(n,t)||t,mm(L1.definitions,n,t)||mm(ut.styles,n,t)}var L1=new wx,kx=function(){b.autoReplaceSvg=!1,b.observeMutations=!1,tr("noAuto")},Sx={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Gt?(tr("beforeI2svg",t),Ht("pseudoElements2svg",t),Ht("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;b.autoReplaceSvg===!1&&(b.autoReplaceSvg=!0),b.observeMutations=!0,lx(function(){Tx({autoReplaceSvgRoot:n}),tr("watch",t)})}},Ix={icon:function(t){if(t===null)return null;if(va(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:jn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=cl(t[0]);return{prefix:r,iconName:jn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(b.cssPrefix,"-"))>-1||t.match(VA))){var i=fl(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||_n(),iconName:jn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=_n();return{prefix:o,iconName:jn(o,t)||t}}}},Ye={noAuto:kx,config:b,dom:Sx,parse:Ix,library:L1,findIconDefinition:Fc,toHtml:Oo},Tx=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Y:n;(Object.keys(ut.styles).length>0||b.autoFetchSvg)&&Gt&&b.autoReplaceSvg&&Ye.dom.i2svg({node:r})};function dl(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Oo(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Gt){var r=Y.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Cx(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,s=e.transform;if(jd(s)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=ul(I(I({},o),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function bx(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,s=o===!0?"".concat(t,"-").concat(b.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},i),{},{id:s}),children:r}]}]}function Vd(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,s=e.transform,a=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,h=e.watchable,g=h===void 0?!1:h,v=r.found?r:n,y=v.width,R=v.height,p=i==="fak",d=[b.replacementClass,o?"".concat(b.cssPrefix,"-").concat(o):""].filter(function(F){return f.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(f.classes).join(" "),m={children:[],attributes:I(I({},f.attributes),{},{"data-prefix":i,"data-icon":o,class:d,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(R)})},w=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(y/R*16*.0625,"em")}:{};g&&(m.attributes[er]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||uo())},children:[l]}),delete m.attributes.title);var _=I(I({},m),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:s,symbol:a,styles:I(I({},w),f.styles)}),k=r.found&&n.found?Ht("generateAbstractMask",_)||{children:[],attributes:{}}:Ht("generateAbstractIcon",_)||{children:[],attributes:{}},S=k.children,x=k.attributes;return _.children=S,_.attributes=x,a?bx(_):Cx(_)}function wm(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,s=e.extra,a=e.watchable,l=a===void 0?!1:a,u=I(I(I({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});l&&(u[er]="");var c=I({},s.styles);jd(i)&&(c.transform=ix({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=ul(c);f.length>0&&(u.style=f);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),o&&h.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),h}function Ax(e){var t=e.content,n=e.title,r=e.extra,i=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=ul(r.styles);o.length>0&&(i.style=o);var s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var uu=ut.styles;function jc(e){var t=e[0],n=e[1],r=e.slice(4),i=Dd(r,1),o=i[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(b.cssPrefix,"-").concat(Fn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(Fn.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(Fn.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:s}}var xx={found:!1,width:512,height:512};function Px(e,t){!_1&&!b.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function zc(e,t){var n=t;return t==="fa"&&b.styleDefault!==null&&(t=_n()),new Promise(function(r,i){if(Ht("missingIconAbstract"),n==="fa"){var o=D1(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&uu[t]&&uu[t][e]){var s=uu[t][e];return r(jc(s))}Px(e,t),r(I(I({},xx),{},{icon:b.showMissingIcons&&e?Ht("missingIconAbstract")||{}:{}}))})}var Em=function(){},Bc=b.measurePerformance&&ns&&ns.mark&&ns.measure?ns:{mark:Em,measure:Em},vi='FA "6.2.1"',Rx=function(t){return Bc.mark("".concat(vi," ").concat(t," begins")),function(){return M1(t)}},M1=function(t){Bc.mark("".concat(vi," ").concat(t," ends")),Bc.measure("".concat(vi," ").concat(t),"".concat(vi," ").concat(t," begins"),"".concat(vi," ").concat(t," ends"))},Wd={begin:Rx,end:M1},bs=function(){};function _m(e){var t=e.getAttribute?e.getAttribute(er):null;return typeof t=="string"}function Ox(e){var t=e.getAttribute?e.getAttribute(Md):null,n=e.getAttribute?e.getAttribute($d):null;return t&&n}function Nx(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(b.replacementClass)}function Dx(){if(b.autoReplaceSvg===!0)return As.replace;var e=As[b.autoReplaceSvg];return e||As.replace}function Lx(e){return Y.createElementNS("http://www.w3.org/2000/svg",e)}function Mx(e){return Y.createElement(e)}function $1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Lx:Mx:n;if(typeof e=="string")return Y.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){i.setAttribute(s,e.attributes[s])});var o=e.children||[];return o.forEach(function(s){i.appendChild($1(s,{ceFn:r}))}),i}function $x(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var As={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore($1(i),n)}),n.getAttribute(er)===null&&b.keepOriginalSource){var r=Y.createComment($x(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Fd(n).indexOf(b.replacementClass))return As.replace(t);var i=new RegExp("".concat(b.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(a,l){return l===b.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var s=r.map(function(a){return Oo(a)}).join(`
`);n.setAttribute(er,""),n.innerHTML=s}};function km(e){e()}function U1(e,t){var n=typeof t=="function"?t:bs;if(e.length===0)n();else{var r=km;b.mutateApproach===zA&&(r=En.requestAnimationFrame||km),r(function(){var i=Dx(),o=Wd.begin("mutate");e.map(i),o(),n()})}}var Gd=!1;function F1(){Gd=!0}function Hc(){Gd=!1}var wa=null;function Sm(e){if(dm&&b.observeMutations){var t=e.treeCallback,n=t===void 0?bs:t,r=e.nodeCallback,i=r===void 0?bs:r,o=e.pseudoElementsCallback,s=o===void 0?bs:o,a=e.observeMutationsRoot,l=a===void 0?Y:a;wa=new dm(function(u){if(!Gd){var c=_n();Zr(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!_m(f.addedNodes[0])&&(b.searchPseudoElements&&s(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&b.searchPseudoElements&&s(f.target.parentNode),f.type==="attributes"&&_m(f.target)&&~YA.indexOf(f.attributeName))if(f.attributeName==="class"&&Ox(f.target)){var h=fl(Fd(f.target)),g=h.prefix,v=h.iconName;f.target.setAttribute(Md,g||c),v&&f.target.setAttribute($d,v)}else Nx(f.target)&&i(f.target)})}}),Gt&&wa.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ux(){wa&&wa.disconnect()}function Fx(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(r[s]=a.join(":").trim()),r},{})),n}function jx(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=fl(Fd(e));return i.prefix||(i.prefix=_n()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=vx(i.prefix,e.innerText)||Bd(i.prefix,Mc(e.innerText))),!i.iconName&&b.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function zx(e){var t=Zr(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return b.autoA11y&&(n?t["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(r||uo()):(t["aria-hidden"]="true",t.focusable="false")),t}function Bx(){return{iconName:null,title:null,titleId:null,prefix:null,transform:wt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Im(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=jx(e),r=n.iconName,i=n.prefix,o=n.rest,s=zx(e),a=Uc("parseNodeAttributes",{},e),l=t.styleParser?Fx(e):[];return I({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:wt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:s}},a)}var Hx=ut.styles;function j1(e){var t=b.autoReplaceSvg==="nest"?Im(e,{styleParser:!1}):Im(e);return~t.extra.classes.indexOf(k1)?Ht("generateLayersText",e,t):Ht("generateSvgReplacementMutation",e,t)}var kn=new Set;Ud.map(function(e){kn.add("fa-".concat(e))});Object.keys(oo[G]).map(kn.add.bind(kn));Object.keys(oo[te]).map(kn.add.bind(kn));kn=Po(kn);function Tm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Gt)return Promise.resolve();var n=Y.documentElement.classList,r=function(f){return n.add("".concat(hm,"-").concat(f))},i=function(f){return n.remove("".concat(hm,"-").concat(f))},o=b.autoFetchSvg?kn:Ud.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Hx));o.includes("fa")||o.push("fa");var s=[".".concat(k1,":not([").concat(er,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(er,"])")})).join(", ");if(s.length===0)return Promise.resolve();var a=[];try{a=Zr(e.querySelectorAll(s))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Wd.begin("onTree"),u=a.reduce(function(c,f){try{var h=j1(f);h&&c.push(h)}catch(g){_1||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(h){U1(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(h){l(),f(h)})})}function Vx(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;j1(e).then(function(n){n&&U1([n],t)})}function Wx(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Fc(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Fc(i||{})),e(r,I(I({},n),{},{mask:i}))}}var Gx=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?wt:r,o=n.symbol,s=o===void 0?!1:o,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,h=f===void 0?null:f,g=n.titleId,v=g===void 0?null:g,y=n.classes,R=y===void 0?[]:y,p=n.attributes,d=p===void 0?{}:p,m=n.styles,w=m===void 0?{}:m;if(t){var _=t.prefix,k=t.iconName,S=t.icon;return dl(I({type:"icon"},t),function(){return tr("beforeDOMElementCreation",{iconDefinition:t,params:n}),b.autoA11y&&(h?d["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(v||uo()):(d["aria-hidden"]="true",d.focusable="false")),Vd({icons:{main:jc(S),mask:l?jc(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:k,transform:I(I({},wt),i),symbol:s,title:h,maskId:c,titleId:v,extra:{attributes:d,styles:w,classes:R}})})}},Kx={mixout:function(){return{icon:Wx(Gx)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Tm,n.nodeCallback=Vx,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Y:r,o=n.callback,s=o===void 0?function(){}:o;return Tm(i,s)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,s=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,h=r.extra;return new Promise(function(g,v){Promise.all([zc(i,a),c.iconName?zc(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var R=Dd(y,2),p=R[0],d=R[1];g([n,Vd({icons:{main:p,mask:d},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:o,titleId:s,extra:h,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.transform,a=n.styles,l=ul(a);l.length>0&&(i.style=l);var u;return jd(s)&&(u=Ht("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:i}}}},Yx={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return dl({type:"layer"},function(){tr("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(a){Array.isArray(a)?a.map(function(l){s=s.concat(l.abstract)}):s=s.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(b.cssPrefix,"-layers")].concat(Po(o)).join(" ")},children:s}]})}}}},Xx={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,s=r.classes,a=s===void 0?[]:s,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return dl({type:"counter",content:n},function(){return tr("beforeDOMElementCreation",{content:n,params:r}),Ax({content:n.toString(),title:o,extra:{attributes:u,styles:f,classes:["".concat(b.cssPrefix,"-layers-counter")].concat(Po(a))}})})}}}},qx={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?wt:i,s=r.title,a=s===void 0?null:s,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,h=r.styles,g=h===void 0?{}:h;return dl({type:"text",content:n},function(){return tr("beforeDOMElementCreation",{content:n,params:r}),wm({content:n,transform:I(I({},wt),o),title:a,extra:{attributes:f,styles:g,classes:["".concat(b.cssPrefix,"-layers-text")].concat(Po(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,o=r.transform,s=r.extra,a=null,l=null;if(y1){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return b.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,wm({content:n.innerHTML,width:a,height:l,transform:o,title:i,extra:s,watchable:!0})])}}},Qx=new RegExp('"',"ug"),Cm=[1105920,1112319];function Jx(e){var t=e.replace(Qx,""),n=fx(t,0),r=n>=Cm[0]&&n<=Cm[1],i=t.length===2?t[0]===t[1]:!1;return{value:Mc(i?t[0]:t),isSecondary:r||i}}function bm(e,t){var n="".concat(jA).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=Zr(e.children),s=o.filter(function(S){return S.getAttribute(Lc)===t})[0],a=En.getComputedStyle(e,t),l=a.getPropertyValue("font-family").match(WA),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?te:G,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?so[h][l[2].toLowerCase()]:GA[h][u],v=Jx(f),y=v.value,R=v.isSecondary,p=l[0].startsWith("FontAwesome"),d=Bd(g,y),m=d;if(p){var w=yx(y);w.iconName&&w.prefix&&(d=w.iconName,g=w.prefix)}if(d&&!R&&(!s||s.getAttribute(Md)!==g||s.getAttribute($d)!==m)){e.setAttribute(n,m),s&&e.removeChild(s);var _=Bx(),k=_.extra;k.attributes[Lc]=t,zc(d,g).then(function(S){var x=Vd(I(I({},_),{},{icons:{main:S,mask:Hd()},prefix:g,iconName:m,extra:k,watchable:!0})),F=Y.createElement("svg");t==="::before"?e.insertBefore(F,e.firstChild):e.appendChild(F),F.outerHTML=x.map(function(L){return Oo(L)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Zx(e){return Promise.all([bm(e,"::before"),bm(e,"::after")])}function e2(e){return e.parentNode!==document.head&&!~BA.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Lc)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Am(e){if(Gt)return new Promise(function(t,n){var r=Zr(e.querySelectorAll("*")).filter(e2).map(Zx),i=Wd.begin("searchPseudoElements");F1(),Promise.all(r).then(function(){i(),Hc(),t()}).catch(function(){i(),Hc(),n()})})}var t2={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Am,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Y:r;b.searchPseudoElements&&Am(i)}}},xm=!1,n2={mixout:function(){return{dom:{unwatch:function(){F1(),xm=!0}}}},hooks:function(){return{bootstrap:function(){Sm(Uc("mutationObserverCallbacks",{}))},noAuto:function(){Ux()},watch:function(n){var r=n.observeMutationsRoot;xm?Hc():Sm(Uc("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Pm=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),s=o[0],a=o.slice(1).join("-");if(s&&a==="h")return r.flipX=!0,r;if(s&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(s){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},r2={mixout:function(){return{parse:{transform:function(n){return Pm(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Pm(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,s=n.iconWidth,a={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(s/2*-1," -256)")},g={outer:a,inner:f,path:h};return{tag:"g",attributes:I({},g.outer),children:[{tag:"g",attributes:I({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),g.path)}]}]}}}},cu={x:0,y:0,width:"100%",height:"100%"};function Rm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function i2(e){return e.tag==="g"?e.children:[e]}var o2={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?fl(i.split(" ").map(function(s){return s.trim()})):Hd();return o.prefix||(o.prefix=_n()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.mask,a=n.maskId,l=n.transform,u=o.width,c=o.icon,f=s.width,h=s.icon,g=rx({transform:l,containerWidth:f,iconWidth:u}),v={tag:"rect",attributes:I(I({},cu),{},{fill:"white"})},y=c.children?{children:c.children.map(Rm)}:{},R={tag:"g",attributes:I({},g.inner),children:[Rm(I({tag:c.tag,attributes:I(I({},c.attributes),g.path)},y))]},p={tag:"g",attributes:I({},g.outer),children:[R]},d="mask-".concat(a||uo()),m="clip-".concat(a||uo()),w={tag:"mask",attributes:I(I({},cu),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,p]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:i2(h)},w]};return r.push(_,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(d,")")},cu)}),{children:r,attributes:i}}}},s2={provides:function(t){var n=!1;En.matchMedia&&(n=En.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=I(I({},o),{},{attributeName:"opacity"}),a={tag:"circle",attributes:I(I({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:I(I({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:I(I({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},a2={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},l2=[sx,Kx,Yx,Xx,qx,t2,n2,r2,o2,s2,a2];_x(l2,{mixoutsTo:Ye});Ye.noAuto;Ye.config;Ye.library;Ye.dom;var Vc=Ye.parse;Ye.findIconDefinition;Ye.toHtml;var u2=Ye.icon;Ye.layer;Ye.text;Ye.counter;var M={},c2={get exports(){return M},set exports(e){M=e}},f2="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",d2=f2,h2=d2;function z1(){}function B1(){}B1.resetWarningCache=z1;var p2=function(){function e(r,i,o,s,a,l){if(l!==h2){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:B1,resetWarningCache:z1};return n.PropTypes=n,n};c2.exports=p2();function Om(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function an(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Om(Object(n),!0).forEach(function(r){Ir(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Om(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ea(e){return Ea=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ea(e)}function Ir(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function g2(e,t){if(e==null)return{};var n=m2(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Wc(e){return v2(e)||y2(e)||w2(e)||E2()}function v2(e){if(Array.isArray(e))return Gc(e)}function y2(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function w2(e,t){if(e){if(typeof e=="string")return Gc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gc(e,t)}}function Gc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function E2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _2(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,s=e.shake,a=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,h=e.fixedWidth,g=e.inverse,v=e.border,y=e.listItem,R=e.flip,p=e.size,d=e.rotation,m=e.pull,w=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":h,"fa-inverse":g,"fa-border":v,"fa-li":y,"fa-flip":R===!0,"fa-flip-horizontal":R==="horizontal"||R==="both","fa-flip-vertical":R==="vertical"||R==="both"},Ir(t,"fa-".concat(p),typeof p<"u"&&p!==null),Ir(t,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),Ir(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Ir(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map(function(_){return w[_]?_:null}).filter(function(_){return _})}function k2(e){return e=e-0,e===e}function H1(e){return k2(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var S2=["style"];function I2(e){return e.charAt(0).toUpperCase()+e.slice(1)}function T2(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=H1(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[I2(i)]=o:t[i]=o,t},{})}function V1(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return V1(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=T2(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[H1(u)]=c}return l},{attrs:{}}),o=n.style,s=o===void 0?{}:o,a=g2(n,S2);return i.attrs.style=an(an({},i.attrs.style),s),e.apply(void 0,[t.tag,an(an({},i.attrs),a)].concat(Wc(r)))}var W1=!1;try{W1=!0}catch{}function C2(){if(!W1&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Nm(e){if(e&&Ea(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Vc.icon)return Vc.icon(e);if(e===null)return null;if(e&&Ea(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function fu(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Ir({},e,t):{}}var Gr=ka.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,o=e.className,s=e.title,a=e.titleId,l=e.maskId,u=Nm(n),c=fu("classes",[].concat(Wc(_2(e)),Wc(o.split(" ")))),f=fu("transform",typeof e.transform=="string"?Vc.transform(e.transform):e.transform),h=fu("mask",Nm(r)),g=u2(u,an(an(an(an({},c),f),h),{},{symbol:i,title:s,titleId:a,maskId:l}));if(!g)return C2("Could not find icon",u),null;var v=g.abstract,y={ref:t};return Object.keys(e).forEach(function(R){Gr.defaultProps.hasOwnProperty(R)||(y[R]=e[R])}),b2(v[0],y)});Gr.displayName="FontAwesomeIcon";Gr.propTypes={beat:M.bool,border:M.bool,beatFade:M.bool,bounce:M.bool,className:M.string,fade:M.bool,flash:M.bool,mask:M.oneOfType([M.object,M.array,M.string]),maskId:M.string,fixedWidth:M.bool,inverse:M.bool,flip:M.oneOf([!0,!1,"horizontal","vertical","both"]),icon:M.oneOfType([M.object,M.array,M.string]),listItem:M.bool,pull:M.oneOf(["right","left"]),pulse:M.bool,rotation:M.oneOf([0,90,180,270]),shake:M.bool,size:M.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:M.bool,spinPulse:M.bool,spinReverse:M.bool,symbol:M.oneOfType([M.bool,M.string]),title:M.string,titleId:M.string,transform:M.oneOfType([M.string,M.object]),swapOpacity:M.bool};Gr.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var b2=V1.bind(null,ka.createElement);function A2(){return PA(sm),hu("header",{id:"--header-header-container",children:[_e(Gr,{className:"--header-fa-tractor",icon:"fa-solid fa-tractor"}),_e("h1",{id:"--header-title",children:"Farmer say"}),_e(Gr,{className:"--header-fa-google",icon:"fa-brands fa-google",onClick:()=>{const t=new At;EC(sm,t)}})]})}function x2(){return _e("div",{children:_e("h1",{children:"Splash page"})})}function P2(){return _e("div",{children:_e("h1",{children:"Chat Box"})})}function R2(){return hu("div",{className:"--app-app-container",children:[_e("nav",{children:_e(A2,{})}),hu(hk,{children:[_e(dc,{index:!0,element:_e(x2,{})}),_e(dc,{path:"chat",element:_e(P2,{})})]})]})}pu.createRoot(document.getElementById("root")).render(_e(ka.StrictMode,{children:_e(pk,{children:_e(R2,{})})}));
