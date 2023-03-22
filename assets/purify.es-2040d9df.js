/*! @license DOMPurify 2.4.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.4/LICENSE */function C(r){"@babel/helpers - typeof";return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},C(r)}function ke(r,n){ke=Object.setPrototypeOf||function o(s,f){s.__proto__=f;return s};return ke(r,n)}function Ft(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true}catch(r){return false}}function oe(r,n,o){if(Ft()){oe=Reflect.construct}else{oe=function s(f,O,D){var L=[null];L.push.apply(L,O);var B=Function.bind.apply(f,L);var $=new B;if(D)ke($,D.prototype);return $}}return oe.apply(null,arguments)}function S(r){return Ut(r)||Ht(r)||zt(r)||Gt()}function Ut(r){if(Array.isArray(r))return Pe(r)}function Ht(r){if(typeof Symbol!=="undefined"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function zt(r,n){if(!r)return;if(typeof r==="string")return Pe(r,n);var o=Object.prototype.toString.call(r).slice(8,-1);if(o==="Object"&&r.constructor)o=r.constructor.name;if(o==="Map"||o==="Set")return Array.from(r);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Pe(r,n)}function Pe(r,n){if(n==null||n>r.length)n=r.length;for(var o=0,s=new Array(n);o<n;o++)s[o]=r[o];return s}function Gt(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var Wt=Object.hasOwnProperty;var lt=Object.setPrototypeOf;var Bt=Object.isFrozen;var $t=Object.getPrototypeOf;var jt=Object.getOwnPropertyDescriptor;var A=Object.freeze;var R=Object.seal;var Yt=Object.create;var pt=typeof Reflect!=="undefined"&&Reflect;var se=pt.apply;var Fe=pt.construct;if(!se){se=function r(n,o,s){return n.apply(o,s)}}if(!A){A=function r(n){return n}}if(!R){R=function r(n){return n}}if(!Fe){Fe=function r(n,o){return oe(n,S(o))}}var Vt=y(Array.prototype.forEach);var st=y(Array.prototype.pop);var X=y(Array.prototype.push);var le=y(String.prototype.toLowerCase);var De=y(String.prototype.toString);var Xt=y(String.prototype.match);var b=y(String.prototype.replace);var qt=y(String.prototype.indexOf);var Kt=y(String.prototype.trim);var _=y(RegExp.prototype.test);var Me=Zt(TypeError);function y(r){return function(n){for(var o=arguments.length,s=new Array(o>1?o-1:0),f=1;f<o;f++){s[f-1]=arguments[f]}return se(r,n,s)}}function Zt(r){return function(){for(var n=arguments.length,o=new Array(n),s=0;s<n;s++){o[s]=arguments[s]}return Fe(r,o)}}function l(r,n,o){o=o?o:le;if(lt){lt(r,null)}var s=n.length;while(s--){var f=n[s];if(typeof f==="string"){var O=o(f);if(O!==f){if(!Bt(n)){n[s]=O}f=O}}r[f]=true}return r}function P(r){var n=Yt(null);var o;for(o in r){if(se(Wt,r,[o])===true){n[o]=r[o]}}return n}function ne(r,n){while(r!==null){var o=jt(r,n);if(o){if(o.get){return y(o.get)}if(typeof o.value==="function"){return y(o.value)}}r=$t(r)}function s(f){console.warn("fallback value for",f);return null}return s}var ut=A(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]);var we=A(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]);var Ie=A(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]);var Jt=A(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]);var Ce=A(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]);var Qt=A(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]);var ft=A(["#text"]);var ct=A(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]);var xe=A(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]);var mt=A(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]);var ie=A(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]);var er=R(/\{\{[\w\W]*|[\w\W]*\}\}/gm);var tr=R(/<%[\w\W]*|[\w\W]*%>/gm);var rr=R(/\${[\w\W]*}/gm);var ar=R(/^data-[\-\w.\u00B7-\uFFFF]/);var nr=R(/^aria-[\-\w]+$/);var ir=R(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);var or=R(/^(?:\w+script|data):/i);var lr=R(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);var sr=R(/^html$/i);var ur=function r(){return typeof window==="undefined"?null:window};var fr=function r(n,o){if(C(n)!=="object"||typeof n.createPolicy!=="function"){return null}var s=null;var f="data-tt-policy-suffix";if(o.currentScript&&o.currentScript.hasAttribute(f)){s=o.currentScript.getAttribute(f)}var O="dompurify"+(s?"#"+s:"");try{return n.createPolicy(O,{createHTML:function D(L){return L},createScriptURL:function D(L){return L}})}catch(D){console.warn("TrustedTypes policy "+O+" could not be created.");return null}};function dt(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ur();var n=function i(e){return dt(e)};n.version="2.4.4";n.removed=[];if(!r||!r.document||r.document.nodeType!==9){n.isSupported=false;return n}var o=r.document;var s=r.document;var f=r.DocumentFragment,O=r.HTMLTemplateElement,D=r.Node,L=r.Element,B=r.NodeFilter,$=r.NamedNodeMap,vt=$===void 0?r.NamedNodeMap||r.MozNamedAttrMap:$,Tt=r.HTMLFormElement,ht=r.DOMParser,q=r.trustedTypes;var K=L.prototype;var _t=ne(K,"cloneNode");var At=ne(K,"nextSibling");var Et=ne(K,"childNodes");var ue=ne(K,"parentNode");if(typeof O==="function"){var fe=s.createElement("template");if(fe.content&&fe.content.ownerDocument){s=fe.content.ownerDocument}}var g=fr(q,o);var ce=g?g.createHTML(""):"";var Z=s,me=Z.implementation,yt=Z.createNodeIterator,gt=Z.createDocumentFragment,bt=Z.getElementsByTagName;var St=o.importNode;var Ue={};try{Ue=P(s).documentMode?s.documentMode:{}}catch(i){}var N={};n.isSupported=typeof ue==="function"&&me&&typeof me.createHTMLDocument!=="undefined"&&Ue!==9;var pe=er,de=tr,ve=rr,Rt=ar,Ot=nr,Lt=or,He=lr;var Te=ir;var m=null;var ze=l({},[].concat(S(ut),S(we),S(Ie),S(Ce),S(ft)));var p=null;var Ge=l({},[].concat(S(ct),S(xe),S(mt),S(ie)));var c=Object.seal(Object.create(null,{tagNameCheck:{writable:true,configurable:false,enumerable:true,value:null},attributeNameCheck:{writable:true,configurable:false,enumerable:true,value:null},allowCustomizedBuiltInElements:{writable:true,configurable:false,enumerable:true,value:false}}));var j=null;var he=null;var We=true;var _e=true;var Be=false;var $e=true;var F=false;var x=false;var Ae=false;var Ee=false;var U=false;var J=false;var Q=false;var je=true;var Ye=false;var Nt="user-content-";var ye=true;var Y=false;var H={};var z=null;var Ve=l({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);var Xe=null;var qe=l({},["audio","video","img","source","image","track"]);var ge=null;var Ke=l({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]);var ee="http://www.w3.org/1998/Math/MathML";var te="http://www.w3.org/2000/svg";var M="http://www.w3.org/1999/xhtml";var G=M;var be=false;var Se=null;var Dt=l({},[ee,te,M],De);var k;var Mt=["application/xhtml+xml","text/html"];var wt="text/html";var d;var W=null;var It=s.createElement("form");var Ze=function i(e){return e instanceof RegExp||e instanceof Function};var Re=function i(e){if(W&&W===e){return}if(!e||C(e)!=="object"){e={}}e=P(e);k=Mt.indexOf(e.PARSER_MEDIA_TYPE)===-1?k=wt:k=e.PARSER_MEDIA_TYPE;d=k==="application/xhtml+xml"?De:le;m="ALLOWED_TAGS"in e?l({},e.ALLOWED_TAGS,d):ze;p="ALLOWED_ATTR"in e?l({},e.ALLOWED_ATTR,d):Ge;Se="ALLOWED_NAMESPACES"in e?l({},e.ALLOWED_NAMESPACES,De):Dt;ge="ADD_URI_SAFE_ATTR"in e?l(P(Ke),e.ADD_URI_SAFE_ATTR,d):Ke;Xe="ADD_DATA_URI_TAGS"in e?l(P(qe),e.ADD_DATA_URI_TAGS,d):qe;z="FORBID_CONTENTS"in e?l({},e.FORBID_CONTENTS,d):Ve;j="FORBID_TAGS"in e?l({},e.FORBID_TAGS,d):{};he="FORBID_ATTR"in e?l({},e.FORBID_ATTR,d):{};H="USE_PROFILES"in e?e.USE_PROFILES:false;We=e.ALLOW_ARIA_ATTR!==false;_e=e.ALLOW_DATA_ATTR!==false;Be=e.ALLOW_UNKNOWN_PROTOCOLS||false;$e=e.ALLOW_SELF_CLOSE_IN_ATTR!==false;F=e.SAFE_FOR_TEMPLATES||false;x=e.WHOLE_DOCUMENT||false;U=e.RETURN_DOM||false;J=e.RETURN_DOM_FRAGMENT||false;Q=e.RETURN_TRUSTED_TYPE||false;Ee=e.FORCE_BODY||false;je=e.SANITIZE_DOM!==false;Ye=e.SANITIZE_NAMED_PROPS||false;ye=e.KEEP_CONTENT!==false;Y=e.IN_PLACE||false;Te=e.ALLOWED_URI_REGEXP||Te;G=e.NAMESPACE||M;if(e.CUSTOM_ELEMENT_HANDLING&&Ze(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)){c.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck}if(e.CUSTOM_ELEMENT_HANDLING&&Ze(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)){c.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck}if(e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements==="boolean"){c.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements}if(F){_e=false}if(J){U=true}if(H){m=l({},S(ft));p=[];if(H.html===true){l(m,ut);l(p,ct)}if(H.svg===true){l(m,we);l(p,xe);l(p,ie)}if(H.svgFilters===true){l(m,Ie);l(p,xe);l(p,ie)}if(H.mathMl===true){l(m,Ce);l(p,mt);l(p,ie)}}if(e.ADD_TAGS){if(m===ze){m=P(m)}l(m,e.ADD_TAGS,d)}if(e.ADD_ATTR){if(p===Ge){p=P(p)}l(p,e.ADD_ATTR,d)}if(e.ADD_URI_SAFE_ATTR){l(ge,e.ADD_URI_SAFE_ATTR,d)}if(e.FORBID_CONTENTS){if(z===Ve){z=P(z)}l(z,e.FORBID_CONTENTS,d)}if(ye){m["#text"]=true}if(x){l(m,["html","head","body"])}if(m.table){l(m,["tbody"]);delete j.tbody}if(A){A(e)}W=e};var Je=l({},["mi","mo","mn","ms","mtext"]);var Qe=l({},["foreignobject","desc","title","annotation-xml"]);var Ct=l({},["title","style","font","a","script"]);var re=l({},we);l(re,Ie);l(re,Jt);var Oe=l({},Ce);l(Oe,Qt);var xt=function i(e){var t=ue(e);if(!t||!t.tagName){t={namespaceURI:G,tagName:"template"}}var a=le(e.tagName);var u=le(t.tagName);if(!Se[e.namespaceURI]){return false}if(e.namespaceURI===te){if(t.namespaceURI===M){return a==="svg"}if(t.namespaceURI===ee){return a==="svg"&&(u==="annotation-xml"||Je[u])}return Boolean(re[a])}if(e.namespaceURI===ee){if(t.namespaceURI===M){return a==="math"}if(t.namespaceURI===te){return a==="math"&&Qe[u]}return Boolean(Oe[a])}if(e.namespaceURI===M){if(t.namespaceURI===te&&!Qe[u]){return false}if(t.namespaceURI===ee&&!Je[u]){return false}return!Oe[a]&&(Ct[a]||!re[a])}if(k==="application/xhtml+xml"&&Se[e.namespaceURI]){return true}return false};var w=function i(e){X(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=ce}catch(a){e.remove()}}};var Le=function i(e,t){try{X(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(a){X(n.removed,{attribute:null,from:t})}t.removeAttribute(e);if(e==="is"&&!p[e]){if(U||J){try{w(t)}catch(a){}}else{try{t.setAttribute(e,"")}catch(a){}}}};var et=function i(e){var t;var a;if(Ee){e="<remove></remove>"+e}else{var u=Xt(e,/^[\r\n\t ]+/);a=u&&u[0]}if(k==="application/xhtml+xml"&&G===M){e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>"}var E=g?g.createHTML(e):e;if(G===M){try{t=new ht().parseFromString(E,k)}catch(T){}}if(!t||!t.documentElement){t=me.createDocument(G,"template",null);try{t.documentElement.innerHTML=be?ce:E}catch(T){}}var h=t.body||t.documentElement;if(e&&a){h.insertBefore(s.createTextNode(a),h.childNodes[0]||null)}if(G===M){return bt.call(t,x?"html":"body")[0]}return x?t.documentElement:h};var tt=function i(e){return yt.call(e.ownerDocument||e,e,B.SHOW_ELEMENT|B.SHOW_COMMENT|B.SHOW_TEXT,null,false)};var kt=function i(e){return e instanceof Tt&&(typeof e.nodeName!=="string"||typeof e.textContent!=="string"||typeof e.removeChild!=="function"||!(e.attributes instanceof vt)||typeof e.removeAttribute!=="function"||typeof e.setAttribute!=="function"||typeof e.namespaceURI!=="string"||typeof e.insertBefore!=="function"||typeof e.hasChildNodes!=="function")};var V=function i(e){return C(D)==="object"?e instanceof D:e&&C(e)==="object"&&typeof e.nodeType==="number"&&typeof e.nodeName==="string"};var I=function i(e,t,a){if(!N[e]){return}Vt(N[e],function(u){u.call(n,t,a,W)})};var rt=function i(e){var t;I("beforeSanitizeElements",e,null);if(kt(e)){w(e);return true}if(_(/[\u0080-\uFFFF]/,e.nodeName)){w(e);return true}var a=d(e.nodeName);I("uponSanitizeElement",e,{tagName:a,allowedTags:m});if(e.hasChildNodes()&&!V(e.firstElementChild)&&(!V(e.content)||!V(e.content.firstElementChild))&&_(/<[/\w]/g,e.innerHTML)&&_(/<[/\w]/g,e.textContent)){w(e);return true}if(a==="select"&&_(/<template/i,e.innerHTML)){w(e);return true}if(!m[a]||j[a]){if(!j[a]&&nt(a)){if(c.tagNameCheck instanceof RegExp&&_(c.tagNameCheck,a))return false;if(c.tagNameCheck instanceof Function&&c.tagNameCheck(a))return false}if(ye&&!z[a]){var u=ue(e)||e.parentNode;var E=Et(e)||e.childNodes;if(E&&u){var h=E.length;for(var T=h-1;T>=0;--T){u.insertBefore(_t(E[T],true),At(e))}}}w(e);return true}if(e instanceof L&&!xt(e)){w(e);return true}if((a==="noscript"||a==="noembed")&&_(/<\/no(script|embed)/i,e.innerHTML)){w(e);return true}if(F&&e.nodeType===3){t=e.textContent;t=b(t,pe," ");t=b(t,de," ");t=b(t,ve," ");if(e.textContent!==t){X(n.removed,{element:e.cloneNode()});e.textContent=t}}I("afterSanitizeElements",e,null);return false};var at=function i(e,t,a){if(je&&(t==="id"||t==="name")&&(a in s||a in It)){return false}if(_e&&!he[t]&&_(Rt,t));else if(We&&_(Ot,t));else if(!p[t]||he[t]){if(nt(e)&&(c.tagNameCheck instanceof RegExp&&_(c.tagNameCheck,e)||c.tagNameCheck instanceof Function&&c.tagNameCheck(e))&&(c.attributeNameCheck instanceof RegExp&&_(c.attributeNameCheck,t)||c.attributeNameCheck instanceof Function&&c.attributeNameCheck(t))||t==="is"&&c.allowCustomizedBuiltInElements&&(c.tagNameCheck instanceof RegExp&&_(c.tagNameCheck,a)||c.tagNameCheck instanceof Function&&c.tagNameCheck(a)));else{return false}}else if(ge[t]);else if(_(Te,b(a,He,"")));else if((t==="src"||t==="xlink:href"||t==="href")&&e!=="script"&&qt(a,"data:")===0&&Xe[e]);else if(Be&&!_(Lt,b(a,He,"")));else if(!a);else{return false}return true};var nt=function i(e){return e.indexOf("-")>0};var it=function i(e){var t;var a;var u;var E;I("beforeSanitizeAttributes",e,null);var h=e.attributes;if(!h){return}var T={attrName:"",attrValue:"",keepAttr:true,allowedAttributes:p};E=h.length;while(E--){t=h[E];var ae=t,v=ae.name,Ne=ae.namespaceURI;a=v==="value"?t.value:Kt(t.value);u=d(v);T.attrName=u;T.attrValue=a;T.keepAttr=true;T.forceKeepAttr=void 0;I("uponSanitizeAttribute",e,T);a=T.attrValue;if(T.forceKeepAttr){continue}Le(v,e);if(!T.keepAttr){continue}if(!$e&&_(/\/>/i,a)){Le(v,e);continue}if(F){a=b(a,pe," ");a=b(a,de," ");a=b(a,ve," ")}var ot=d(e.nodeName);if(!at(ot,u,a)){continue}if(Ye&&(u==="id"||u==="name")){Le(v,e);a=Nt+a}if(g&&C(q)==="object"&&typeof q.getAttributeType==="function"){if(Ne);else{switch(q.getAttributeType(ot,u)){case"TrustedHTML":a=g.createHTML(a);break;case"TrustedScriptURL":a=g.createScriptURL(a);break}}}try{if(Ne){e.setAttributeNS(Ne,v,a)}else{e.setAttribute(v,a)}st(n.removed)}catch(cr){}}I("afterSanitizeAttributes",e,null)};var Pt=function i(e){var t;var a=tt(e);I("beforeSanitizeShadowDOM",e,null);while(t=a.nextNode()){I("uponSanitizeShadowNode",t,null);if(rt(t)){continue}if(t.content instanceof f){i(t.content)}it(t)}I("afterSanitizeShadowDOM",e,null)};n.sanitize=function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};var t;var a;var u;var E;var h;be=!i;if(be){i="<!-->"}if(typeof i!=="string"&&!V(i)){if(typeof i.toString!=="function"){throw Me("toString is not a function")}else{i=i.toString();if(typeof i!=="string"){throw Me("dirty is not a string, aborting")}}}if(!n.isSupported){if(C(r.toStaticHTML)==="object"||typeof r.toStaticHTML==="function"){if(typeof i==="string"){return r.toStaticHTML(i)}if(V(i)){return r.toStaticHTML(i.outerHTML)}}return i}if(!Ae){Re(e)}n.removed=[];if(typeof i==="string"){Y=false}if(Y){if(i.nodeName){var T=d(i.nodeName);if(!m[T]||j[T]){throw Me("root node is forbidden and cannot be sanitized in-place")}}}else if(i instanceof D){t=et("<!---->");a=t.ownerDocument.importNode(i,true);if(a.nodeType===1&&a.nodeName==="BODY"){t=a}else if(a.nodeName==="HTML"){t=a}else{t.appendChild(a)}}else{if(!U&&!F&&!x&&i.indexOf("<")===-1){return g&&Q?g.createHTML(i):i}t=et(i);if(!t){return U?null:Q?ce:""}}if(t&&Ee){w(t.firstChild)}var ae=tt(Y?i:t);while(u=ae.nextNode()){if(u.nodeType===3&&u===E){continue}if(rt(u)){continue}if(u.content instanceof f){Pt(u.content)}it(u);E=u}E=null;if(Y){return i}if(U){if(J){h=gt.call(t.ownerDocument);while(t.firstChild){h.appendChild(t.firstChild)}}else{h=t}if(p.shadowroot||p.shadowrootmod){h=St.call(o,h,true)}return h}var v=x?t.outerHTML:t.innerHTML;if(x&&m["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&_(sr,t.ownerDocument.doctype.name)){v="<!DOCTYPE "+t.ownerDocument.doctype.name+">\n"+v}if(F){v=b(v,pe," ");v=b(v,de," ");v=b(v,ve," ")}return g&&Q?g.createHTML(v):v};n.setConfig=function(i){Re(i);Ae=true};n.clearConfig=function(){W=null;Ae=false};n.isValidAttribute=function(i,e,t){if(!W){Re({})}var a=d(i);var u=d(e);return at(a,u,t)};n.addHook=function(i,e){if(typeof e!=="function"){return}N[i]=N[i]||[];X(N[i],e)};n.removeHook=function(i){if(N[i]){return st(N[i])}};n.removeHooks=function(i){if(N[i]){N[i]=[]}};n.removeAllHooks=function(){N={}};return n}var mr=dt();export{mr as default};
//# sourceMappingURL=purify.es-2040d9df.js.map
