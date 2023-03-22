import{j as ge,a as at}from"./jsx-runtime-f14b59b8.js";import{r as g}from"./index-18f6e4ac.js";var Tt=Object.create;var ct=Object.defineProperty;var Rt=Object.getOwnPropertyDescriptor;var kt=Object.getOwnPropertyNames;var Lt=Object.getPrototypeOf;var Ot=Object.prototype.hasOwnProperty;var _t=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Ct=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let l of kt(t))!Ot.call(e,l)&&l!==n&&ct(e,l,{get:()=>t[l],enumerable:!(r=Rt(t,l))||r.enumerable});return e};var st=(e,t,n)=>(n=e!=null?Tt(Lt(e)):{},Ct(t||!e||!e.__esModule?ct(n,"default",{value:e,enumerable:true}):n,e));var ut=_t((e,t)=>{(function(){var n={}.hasOwnProperty;function r(){for(var l=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var a=typeof o;if(a==="string"||a==="number")l.push(o);else if(Array.isArray(o)){if(o.length){var s=r.apply(null,o);s&&l.push(s)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){l.push(o.toString());continue}for(var c in o)n.call(o,c)&&o[c]&&l.push(c)}}}return l.join(" ")}typeof t<"u"&&t.exports?(r.default=r,t.exports=r):typeof define=="function"&&typeof define.amd=="object"&&define.amd?define("classnames",[],function(){return r}):window.classNames=r})()});var Ge=st(ut());var Nt=(e,t,n)=>{let r=null;return function(...l){let i=()=>{r=null,n||e.apply(this,l)};r&&clearTimeout(r),r=setTimeout(i,t)}};var Ue=Nt;var Pt="DEFAULT_TOOLTIP_ID";var jt={anchorRefs:new Set,activeAnchor:{current:null},attach:()=>{},detach:()=>{},setActiveAnchor:()=>{}};var Dt={getTooltipData:()=>jt};var Bt=g.createContext(Dt);function ft(e=Pt){return g.useContext(Bt).getTooltipData(e)}st(ut());var Ht=typeof window!="undefined"?g.useLayoutEffect:g.useEffect;var qt=Ht;function Re(e){return e.split("-")[1]}function Ze(e){return e==="y"?"height":"width"}function ae(e){return e.split("-")[0]}function ke(e){return["top","bottom"].includes(ae(e))?"x":"y"}function Qe(e,t,n){let{reference:r,floating:l}=e,i=r.x+r.width/2-l.width/2,o=r.y+r.height/2-l.height/2,a=ke(t),s=Ze(a),c=r[s]/2-l[s]/2,f=a==="x",u;switch(ae(t)){case"top":u={x:i,y:r.y-l.height};break;case"bottom":u={x:i,y:r.y+r.height};break;case"right":u={x:r.x+r.width,y:o};break;case"left":u={x:r.x-l.width,y:o};break;default:u={x:r.x,y:r.y}}switch(Re(t)){case"start":u[a]-=c*(n&&f?-1:1);break;case"end":u[a]+=c*(n&&f?-1:1)}return u}var Mt=async(e,t,n)=>{let{placement:r="bottom",strategy:l="absolute",middleware:i=[],platform:o}=n,a=i.filter(Boolean),s=await(o.isRTL==null?void 0:o.isRTL(t)),c=await o.getElementRects({reference:e,floating:t,strategy:l}),{x:f,y:u}=Qe(c,r,s),d=r,m={},v=0;for(let y=0;y<a.length;y++){let{name:w,fn:x}=a[y],{x:b,y:A,data:_,reset:L}=await x({x:f,y:u,initialPlacement:r,placement:d,strategy:l,middlewareData:m,rects:c,platform:o,elements:{reference:e,floating:t}});f=b??f,u=A??u,m={...m,[w]:{...m[w],..._}},L&&v<=50&&(v++,typeof L=="object"&&(L.placement&&(d=L.placement),L.rects&&(c=L.rects===true?await o.getElementRects({reference:e,floating:t,strategy:l}):L.rects),{x:f,y:u}=Qe(c,d,s)),y=-1)}return{x:f,y:u,placement:d,strategy:l,middlewareData:m}};function dt(e){return typeof e!="number"?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(e):{top:e,right:e,bottom:e,left:e}}function je(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}async function pt(e,t){var n;t===void 0&&(t={});let{x:r,y:l,platform:i,rects:o,elements:a,strategy:s}=e,{boundary:c="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:d=false,padding:m=0}=t,v=dt(m),y=a[d?u==="floating"?"reference":"floating":u],w=je(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(y)))==null||n?y:y.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(a.floating)),boundary:c,rootBoundary:f,strategy:s})),x=u==="floating"?{...o.floating,x:r,y:l}:o.reference,b=await(i.getOffsetParent==null?void 0:i.getOffsetParent(a.floating)),A=await(i.isElement==null?void 0:i.isElement(b))&&await(i.getScale==null?void 0:i.getScale(b))||{x:1,y:1},_=je(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:x,offsetParent:b,strategy:s}):x);return{top:(w.top-_.top+v.top)/A.y,bottom:(_.bottom-w.bottom+v.bottom)/A.y,left:(w.left-_.left+v.left)/A.x,right:(_.right-w.right+v.right)/A.x}}var Vt=Math.min;var $t=Math.max;function We(e,t,n){return $t(e,Vt(t,n))}var It=e=>({name:"arrow",options:e,async fn(t){let{element:n,padding:r=0}=e||{},{x:l,y:i,placement:o,rects:a,platform:s,elements:c}=t;if(n==null)return{};let f=dt(r),u={x:l,y:i},d=ke(o),m=Ze(d),v=await s.getDimensions(n),y=d==="y",w=y?"top":"left",x=y?"bottom":"right",b=y?"clientHeight":"clientWidth",A=a.reference[m]+a.reference[d]-u[d]-a.floating[m],_=u[d]-a.reference[d],L=await(s.getOffsetParent==null?void 0:s.getOffsetParent(n)),D=L?L[b]:0;D&&await(s.isElement==null?void 0:s.isElement(L))||(D=c.floating[b]||a.floating[m]);let M=A/2-_/2,j=f[w],Y=D-v[m]-f[x],k=D/2-v[m]/2+M,T=We(j,k,Y),R=Re(o)!=null&&k!=T&&a.reference[m]/2-(k<j?f[w]:f[x])-v[m]/2<0;return{[d]:u[d]-(R?k<j?j-k:Y-k:0),data:{[d]:T,centerOffset:k-T}}}});var Kt=["top","right","bottom","left"];Kt.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);var Wt={left:"right",right:"left",bottom:"top",top:"bottom"};function De(e){return e.replace(/left|right|bottom|top/g,t=>Wt[t])}function Ft(e,t,n){n===void 0&&(n=false);let r=Re(e),l=ke(e),i=Ze(l),o=l==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(o=De(o)),{main:o,cross:De(o)}}var zt={start:"end",end:"start"};function Ke(e){return e.replace(/start|end/g,t=>zt[t])}var Zt=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n;let{placement:r,middlewareData:l,rects:i,initialPlacement:o,platform:a,elements:s}=t,{mainAxis:c=true,crossAxis:f=true,fallbackPlacements:u,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:v=true,...y}=e,w=ae(r),x=ae(o)===o,b=await(a.isRTL==null?void 0:a.isRTL(s.floating)),A=u||(x||!v?[De(o)]:function(T){let R=De(T);return[Ke(T),R,Ke(R)]}(o));u||m==="none"||A.push(...function(T,R,P,C){let O=Re(T),N=function(X,G,ce){let se=["left","right"],ne=["right","left"],F=["top","bottom"],ue=["bottom","top"];switch(X){case"top":case"bottom":return ce?G?ne:se:G?se:ne;case"left":case"right":return G?F:ue;default:return[]}}(ae(T),P==="start",C);return O&&(N=N.map(X=>X+"-"+O),R&&(N=N.concat(N.map(Ke)))),N}(o,v,m,b));let _=[o,...A],L=await pt(t,y),D=[],M=((n=l.flip)==null?void 0:n.overflows)||[];if(c&&D.push(L[w]),f){let{main:T,cross:R}=Ft(r,i,b);D.push(L[T],L[R])}if(M=[...M,{placement:r,overflows:D}],!D.every(T=>T<=0)){var j,Y;let T=(((j=l.flip)==null?void 0:j.index)||0)+1,R=_[T];if(R)return{data:{index:T,overflows:M},reset:{placement:R}};let P=(Y=M.filter(C=>C.overflows[0]<=0).sort((C,O)=>C.overflows[1]-O.overflows[1])[0])==null?void 0:Y.placement;if(!P)switch(d){case"bestFit":{var k;let C=(k=M.map(O=>[O.placement,O.overflows.filter(N=>N>0).reduce((N,X)=>N+X,0)]).sort((O,N)=>O[1]-N[1])[0])==null?void 0:k[0];C&&(P=C);break}case"initialPlacement":P=o}if(r!==P)return{reset:{placement:P}}}return{}}}};var Yt=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){let{x:n,y:r}=t,l=await async function(i,o){let{placement:a,platform:s,elements:c}=i,f=await(s.isRTL==null?void 0:s.isRTL(c.floating)),u=ae(a),d=Re(a),m=ke(a)==="x",v=["left","top"].includes(u)?-1:1,y=f&&m?-1:1,w=typeof o=="function"?o(i):o,{mainAxis:x,crossAxis:b,alignmentAxis:A}=typeof w=="number"?{mainAxis:w,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...w};return d&&typeof A=="number"&&(b=d==="end"?-1*A:A),m?{x:b*y,y:x*v}:{x:x*v,y:b*y}}(t,e);return{x:n+l.x,y:r+l.y,data:l}}}};function Xt(e){return e==="x"?"y":"x"}var Jt=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){let{x:n,y:r,placement:l}=t,{mainAxis:i=true,crossAxis:o=false,limiter:a={fn:w=>{let{x,y:b}=w;return{x,y:b}}},...s}=e,c={x:n,y:r},f=await pt(t,s),u=ke(ae(l)),d=Xt(u),m=c[u],v=c[d];if(i){let w=u==="y"?"bottom":"right";m=We(m+f[u==="y"?"top":"left"],m,m-f[w])}if(o){let w=d==="y"?"bottom":"right";v=We(v+f[d==="y"?"top":"left"],v,v-f[w])}let y=a.fn({...t,[u]:m,[d]:v});return{...y,data:{x:y.x-n,y:y.y-r}}}}};function W(e){var t;return((t=e.ownerDocument)==null?void 0:t.defaultView)||window}function J(e){return W(e).getComputedStyle(e)}var et=Math.min;var Ae=Math.max;var Be=Math.round;function mt(e){let t=J(e),n=parseFloat(t.width),r=parseFloat(t.height),l=e.offsetWidth,i=e.offsetHeight,o=Be(n)!==l||Be(r)!==i;return o&&(n=l,r=i),{width:n,height:r,fallback:o}}function re(e){return yt(e)?(e.nodeName||"").toLowerCase():""}var Pe;function ht(){if(Pe)return Pe;let e=navigator.userAgentData;return e&&Array.isArray(e.brands)?(Pe=e.brands.map(t=>t.brand+"/"+t.version).join(" "),Pe):navigator.userAgent}function Z(e){return e instanceof W(e).HTMLElement}function ee(e){return e instanceof W(e).Element}function yt(e){return e instanceof W(e).Node}function tt(e){return typeof ShadowRoot>"u"?false:e instanceof W(e).ShadowRoot||e instanceof ShadowRoot}function He(e){let{overflow:t,overflowX:n,overflowY:r,display:l}=J(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(l)}function Gt(e){return["table","td","th"].includes(re(e))}function Fe(e){let t=/firefox/i.test(ht()),n=J(e),r=n.backdropFilter||n.WebkitBackdropFilter;return n.transform!=="none"||n.perspective!=="none"||!!r&&r!=="none"||t&&n.willChange==="filter"||t&&!!n.filter&&n.filter!=="none"||["transform","perspective"].some(l=>n.willChange.includes(l))||["paint","layout","strict","content"].some(l=>{let i=n.contain;return i!=null&&i.includes(l)})}function ze(){return/^((?!chrome|android).)*safari/i.test(ht())}function Ye(e){return["html","body","#document"].includes(re(e))}function gt(e){return ee(e)?e:e.contextElement}var vt={x:1,y:1};function ye(e){let t=gt(e);if(!Z(t))return vt;let n=t.getBoundingClientRect(),{width:r,height:l,fallback:i}=mt(t),o=(i?Be(n.width):n.width)/r,a=(i?Be(n.height):n.height)/l;return o&&Number.isFinite(o)||(o=1),a&&Number.isFinite(a)||(a=1),{x:o,y:a}}function Ee(e,t,n,r){var l,i;t===void 0&&(t=false),n===void 0&&(n=false);let o=e.getBoundingClientRect(),a=gt(e),s=vt;t&&(r?ee(r)&&(s=ye(r)):s=ye(e));let c=a?W(a):window,f=ze()&&n,u=(o.left+(f&&((l=c.visualViewport)==null?void 0:l.offsetLeft)||0))/s.x,d=(o.top+(f&&((i=c.visualViewport)==null?void 0:i.offsetTop)||0))/s.y,m=o.width/s.x,v=o.height/s.y;if(a){let y=W(a),w=r&&ee(r)?W(r):r,x=y.frameElement;for(;x&&r&&w!==y;){let b=ye(x),A=x.getBoundingClientRect(),_=getComputedStyle(x);A.x+=(x.clientLeft+parseFloat(_.paddingLeft))*b.x,A.y+=(x.clientTop+parseFloat(_.paddingTop))*b.y,u*=b.x,d*=b.y,m*=b.x,v*=b.y,u+=A.x,d+=A.y,x=W(x).frameElement}}return je({width:m,height:v,x:u,y:d})}function te(e){return((yt(e)?e.ownerDocument:e.document)||window.document).documentElement}function qe(e){return ee(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function wt(e){return Ee(te(e)).left+qe(e).scrollLeft}function Te(e){if(re(e)==="html")return e;let t=e.assignedSlot||e.parentNode||tt(e)&&e.host||te(e);return tt(t)?t.host:t}function xt(e){let t=Te(e);return Ye(t)?t.ownerDocument.body:Z(t)&&He(t)?t:xt(t)}function bt(e,t){var n;t===void 0&&(t=[]);let r=xt(e),l=r===((n=e.ownerDocument)==null?void 0:n.body),i=W(r);return l?t.concat(i,i.visualViewport||[],He(r)?r:[]):t.concat(r,bt(r))}function rt(e,t,n){let r;if(t==="viewport")r=function(o,a){let s=W(o),c=te(o),f=s.visualViewport,u=c.clientWidth,d=c.clientHeight,m=0,v=0;if(f){u=f.width,d=f.height;let y=ze();(!y||y&&a==="fixed")&&(m=f.offsetLeft,v=f.offsetTop)}return{width:u,height:d,x:m,y:v}}(e,n);else if(t==="document")r=function(o){let a=te(o),s=qe(o),c=o.ownerDocument.body,f=Ae(a.scrollWidth,a.clientWidth,c.scrollWidth,c.clientWidth),u=Ae(a.scrollHeight,a.clientHeight,c.scrollHeight,c.clientHeight),d=-s.scrollLeft+wt(o),m=-s.scrollTop;return J(c).direction==="rtl"&&(d+=Ae(a.clientWidth,c.clientWidth)-f),{width:f,height:u,x:d,y:m}}(te(e));else if(ee(t))r=function(o,a){let s=Ee(o,true,a==="fixed"),c=s.top+o.clientTop,f=s.left+o.clientLeft,u=Z(o)?ye(o):{x:1,y:1};return{width:o.clientWidth*u.x,height:o.clientHeight*u.y,x:f*u.x,y:c*u.y}}(t,n);else{let o={...t};if(ze()){var l,i;let a=W(e);o.x-=((l=a.visualViewport)==null?void 0:l.offsetLeft)||0,o.y-=((i=a.visualViewport)==null?void 0:i.offsetTop)||0}r=o}return je(r)}function nt(e,t){return Z(e)&&J(e).position!=="fixed"?t?t(e):e.offsetParent:null}function ot(e,t){let n=W(e);if(!Z(e))return n;let r=nt(e,t);for(;r&&Gt(r)&&J(r).position==="static";)r=nt(r,t);return r&&(re(r)==="html"||re(r)==="body"&&J(r).position==="static"&&!Fe(r))?n:r||function(l){let i=Te(l);for(;Z(i)&&!Ye(i);){if(Fe(i))return i;i=Te(i)}return null}(e)||n}function Ut(e,t,n){let r=Z(t),l=te(t),i=Ee(e,true,n==="fixed",t),o={scrollLeft:0,scrollTop:0},a={x:0,y:0};if(r||!r&&n!=="fixed")if((re(t)!=="body"||He(l))&&(o=qe(t)),Z(t)){let s=Ee(t,true);a.x=s.x+t.clientLeft,a.y=s.y+t.clientTop}else l&&(a.x=wt(l));return{x:i.left+o.scrollLeft-a.x,y:i.top+o.scrollTop-a.y,width:i.width,height:i.height}}var Qt={getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:l}=e,i=n==="clippingAncestors"?function(c,f){let u=f.get(c);if(u)return u;let d=bt(c).filter(w=>ee(w)&&re(w)!=="body"),m=null,v=J(c).position==="fixed",y=v?Te(c):c;for(;ee(y)&&!Ye(y);){let w=J(y),x=Fe(y);w.position==="fixed"?m=null:(v?x||m:x||w.position!=="static"||!m||!["absolute","fixed"].includes(m.position))?m=w:d=d.filter(b=>b!==y),y=Te(y)}return f.set(c,d),d}(t,this._c):[].concat(n),o=[...i,r],a=o[0],s=o.reduce((c,f)=>{let u=rt(t,f,l);return c.top=Ae(u.top,c.top),c.right=et(u.right,c.right),c.bottom=et(u.bottom,c.bottom),c.left=Ae(u.left,c.left),c},rt(t,a,l));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:n,strategy:r}=e,l=Z(n),i=te(n);if(n===i)return t;let o={scrollLeft:0,scrollTop:0},a={x:1,y:1},s={x:0,y:0};if((l||!l&&r!=="fixed")&&((re(n)!=="body"||He(i))&&(o=qe(n)),Z(n))){let c=Ee(n);a=ye(n),s.x=c.x+n.clientLeft,s.y=c.y+n.clientTop}return{width:t.width*a.x,height:t.height*a.y,x:t.x*a.x-o.scrollLeft*a.x+s.x,y:t.y*a.y-o.scrollTop*a.y+s.y}},isElement:ee,getDimensions:function(e){return Z(e)?mt(e):e.getBoundingClientRect()},getOffsetParent:ot,getDocumentElement:te,getScale:ye,async getElementRects(e){let{reference:t,floating:n,strategy:r}=e,l=this.getOffsetParent||ot,i=this.getDimensions;return{reference:Ut(t,await l(n),r),floating:{x:0,y:0,...await i(n)}}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>J(e).direction==="rtl"};var lt=(e,t,n)=>{let r=new Map,l={platform:Qt,...n},i={...l.platform,_c:r};return Mt(e,t,{...l,platform:i})};var it=async({elementReference:e=null,tooltipReference:t=null,tooltipArrowReference:n=null,place:r="top",offset:l=10,strategy:i="absolute",middlewares:o=[Yt(Number(l)),Zt(),Jt({padding:5})]})=>{if(!e)return{tooltipStyles:{},tooltipArrowStyles:{},place:r};if(t===null)return{tooltipStyles:{},tooltipArrowStyles:{},place:r};let a=o;return n?(a.push(It({element:n,padding:5})),lt(e,t,{placement:r,strategy:i,middleware:a}).then(({x:s,y:c,placement:f,middlewareData:u})=>{var d,m;let v={left:`${s}px`,top:`${c}px`},{x:y,y:w}=(d=u.arrow)!=null?d:{x:0,y:0},x=(m={top:"bottom",right:"left",bottom:"top",left:"right"}[f.split("-")[0]])!=null?m:"bottom",b={left:y!=null?`${y}px`:"",top:w!=null?`${w}px`:"",right:"",bottom:"",[x]:"-4px"};return{tooltipStyles:v,tooltipArrowStyles:b,place:f}})):lt(e,t,{placement:"bottom",strategy:i,middleware:a}).then(({x:s,y:c,placement:f})=>({tooltipStyles:{left:`${s}px`,top:`${c}px`},tooltipArrowStyles:{},place:f}))};var ie={arrow:"react-tooltip__arrow_KtSkBq",clickable:"react-tooltip__clickable_KtSkBq",dark:"react-tooltip__dark_KtSkBq",error:"react-tooltip__error_KtSkBq",fixed:"react-tooltip__fixed_KtSkBq",info:"react-tooltip__info_KtSkBq",light:"react-tooltip__light_KtSkBq",noArrow:"react-tooltip__no-arrow_KtSkBq",show:"react-tooltip__show_KtSkBq",success:"react-tooltip__success_KtSkBq",tooltip:"react-tooltip__tooltip_KtSkBq",warning:"react-tooltip__warning_KtSkBq"};var er=({id:e,className:t,classNameArrow:n,variant:r="dark",anchorId:l,anchorSelect:i,place:o="top",offset:a=10,events:s=["hover"],openOnClick:c=false,positionStrategy:f="absolute",middlewares:u,wrapper:d,delayShow:m=0,delayHide:v=0,float:y=false,noArrow:w=false,clickable:x=false,closeOnEsc:b=false,style:A,position:_,afterShow:L,afterHide:D,content:M,isOpen:j,setIsOpen:Y,activeAnchor:k,setActiveAnchor:T})=>{let R=g.useRef(null),P=g.useRef(null),C=g.useRef(null),O=g.useRef(null),[N,X]=g.useState(o),[G,ce]=g.useState({}),[se,ne]=g.useState({}),[F,ue]=g.useState(false),[Le,fe]=g.useState(false),Oe=g.useRef(false),ve=g.useRef(null),{anchorRefs:_e,setActiveAnchor:Me}=ft(e),we=g.useRef(false),[U,xe]=g.useState([]),oe=g.useRef(false),de=c||s.includes("click");qt(()=>(oe.current=true,()=>{oe.current=false}),[]),g.useEffect(()=>{if(!F){let p=setTimeout(()=>{fe(false)},150);return()=>{clearTimeout(p)}}return()=>null},[F]);let V=p=>{oe.current&&(p&&fe(true),setTimeout(()=>{oe.current&&(Y==null||Y(p),j===void 0&&ue(p))},10))};g.useEffect(()=>{if(j===void 0)return()=>null;j&&fe(true);let p=setTimeout(()=>{ue(j)},10);return()=>{clearTimeout(p)}},[j]),g.useEffect(()=>{F!==Oe.current&&(Oe.current=F,F?L==null||L():D==null||D())},[F]);let Ve=()=>{C.current&&clearTimeout(C.current),C.current=setTimeout(()=>{V(true)},m)},pe=(p=v)=>{O.current&&clearTimeout(O.current),O.current=setTimeout(()=>{we.current||V(false)},p)},be=p=>{var E;if(!p)return;m?Ve():V(true);let S=(E=p.currentTarget)!=null?E:p.target;T(S),Me({current:S}),O.current&&clearTimeout(O.current)},Se=()=>{x?pe(v||100):v?pe():V(false),C.current&&clearTimeout(C.current)},me=({x:p,y:E})=>{it({place:o,offset:a,elementReference:{getBoundingClientRect(){return{x:p,y:E,width:0,height:0,top:E,left:p,right:p,bottom:E}}},tooltipReference:R.current,tooltipArrowReference:P.current,strategy:f,middlewares:u}).then(S=>{Object.keys(S.tooltipStyles).length&&ce(S.tooltipStyles),Object.keys(S.tooltipArrowStyles).length&&ne(S.tooltipArrowStyles),X(S.place)})},he=p=>{if(!p)return;let E=p,S={x:E.clientX,y:E.clientY};me(S),ve.current=S},$=p=>{be(p),v&&pe()},I=p=>{var E;[document.querySelector(`[id='${l}']`),...U].some(S=>S==null?void 0:S.contains(p.target))||(E=R.current)!=null&&E.contains(p.target)||V(false)},h=p=>{p.key==="Escape"&&V(false)},B=Ue(be,50),K=Ue(Se,50);g.useEffect(()=>{var p,E;let S=new Set(_e);U.forEach(z=>{S.add({current:z})});let le=document.querySelector(`[id='${l}']`);le&&S.add({current:le}),b&&window.addEventListener("keydown",h);let H=[];de?(window.addEventListener("click",I),H.push({event:"click",listener:$})):(H.push({event:"mouseenter",listener:B},{event:"mouseleave",listener:K},{event:"focus",listener:B},{event:"blur",listener:K}),y&&H.push({event:"mousemove",listener:he}));let q=()=>{we.current=true},Q=()=>{we.current=false,Se()};return x&&!de&&((p=R.current)==null||p.addEventListener("mouseenter",q),(E=R.current)==null||E.addEventListener("mouseleave",Q)),H.forEach(({event:z,listener:Ce})=>{S.forEach(Ie=>{var Ne;(Ne=Ie.current)==null||Ne.addEventListener(z,Ce)})}),()=>{var z,Ce;de&&window.removeEventListener("click",I),b&&window.removeEventListener("keydown",h),x&&!de&&((z=R.current)==null||z.removeEventListener("mouseenter",q),(Ce=R.current)==null||Ce.removeEventListener("mouseleave",Q)),H.forEach(({event:Ie,listener:Ne})=>{S.forEach(Et=>{var Je;(Je=Et.current)==null||Je.removeEventListener(Ie,Ne)})})}},[Le,_e,U,b,s]),g.useEffect(()=>{let p=i!=null?i:"";!p&&e&&(p=`[data-tooltip-id='${e}']`);let E=le=>{let H=[];le.forEach(q=>{if(q.type==="attributes"&&q.attributeName==="data-tooltip-id"&&q.target.getAttribute("data-tooltip-id")===e&&H.push(q.target),q.type==="childList"&&(k&&[...q.removedNodes].some(Q=>Q.contains(k)?(fe(false),V(false),T(null),true):false),!!p))try{let Q=[...q.addedNodes].filter(z=>z.nodeType===1);H.push(...Q.filter(z=>z.matches(p))),H.push(...Q.flatMap(z=>[...z.querySelectorAll(p)]))}catch(Q){}}),H.length&&xe(q=>[...q,...H])},S=new MutationObserver(E);return S.observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:["data-tooltip-id"]}),()=>{S.disconnect()}},[e,i,k]),g.useEffect(()=>{if(_){me(_);return}if(y){ve.current&&me(ve.current);return}it({place:o,offset:a,elementReference:k,tooltipReference:R.current,tooltipArrowReference:P.current,strategy:f,middlewares:u}).then(p=>{oe.current&&(Object.keys(p.tooltipStyles).length&&ce(p.tooltipStyles),Object.keys(p.tooltipArrowStyles).length&&ne(p.tooltipArrowStyles),X(p.place))})},[F,k,M,o,a,f,_]),g.useEffect(()=>{var p;let E=document.querySelector(`[id='${l}']`),S=[...U,E];(!k||!S.includes(k))&&T((p=U[0])!=null?p:E)},[l,U,k]),g.useEffect(()=>()=>{C.current&&clearTimeout(C.current),O.current&&clearTimeout(O.current)},[]),g.useEffect(()=>{let p=i;if(!p&&e&&(p=`[data-tooltip-id='${e}']`),!!p)try{let E=Array.from(document.querySelectorAll(p));xe(E)}catch(E){xe([])}},[e,i]);let $e=M&&F&&Object.keys(G).length>0;return Le?at(d,{id:e,role:"tooltip",className:(0,Ge.default)("react-tooltip",ie.tooltip,ie[r],t,`react-tooltip__place-${N}`,{[ie.show]:$e,[ie.fixed]:f==="fixed",[ie.clickable]:x}),style:{...A,...G},ref:R,children:[M,ge(d,{className:(0,Ge.default)("react-tooltip-arrow",ie.arrow,n,{[ie.noArrow]:w}),style:se,ref:P})]}):null};var tr=er;var rr=({content:e})=>ge("span",{dangerouslySetInnerHTML:{__html:e}});var nr=rr;var or=({id:e,anchorId:t,anchorSelect:n,content:r,html:l,render:i,className:o,classNameArrow:a,variant:s="dark",place:c="top",offset:f=10,wrapper:u="div",children:d=null,events:m=["hover"],openOnClick:v=false,positionStrategy:y="absolute",middlewares:w,delayShow:x=0,delayHide:b=0,float:A=false,noArrow:_=false,clickable:L=false,closeOnEsc:D=false,style:M,position:j,isOpen:Y,setIsOpen:k,afterShow:T,afterHide:R})=>{let[P,C]=g.useState(r),[O,N]=g.useState(l),[X,G]=g.useState(c),[ce,se]=g.useState(s),[ne,F]=g.useState(f),[ue,Le]=g.useState(x),[fe,Oe]=g.useState(b),[ve,_e]=g.useState(A),[Me,we]=g.useState(u),[U,xe]=g.useState(m),[oe,de]=g.useState(y),[V,Ve]=g.useState(null),{anchorRefs:pe,activeAnchor:be}=ft(e),Se=$=>$==null?void 0:$.getAttributeNames().reduce((I,h)=>{var B;if(h.startsWith("data-tooltip-")){let K=h.replace(/^data-tooltip-/,"");I[K]=(B=$==null?void 0:$.getAttribute(h))!=null?B:null}return I},{}),me=$=>{let I={place:h=>{G(h!=null?h:c)},content:h=>{C(h!=null?h:r)},html:h=>{N(h!=null?h:l)},variant:h=>{se(h!=null?h:s)},offset:h=>{F(h===null?f:Number(h))},wrapper:h=>{we(h!=null?h:u)},events:h=>{let B=h==null?void 0:h.split(" ");xe(B!=null?B:m)},"position-strategy":h=>{de(h!=null?h:y)},"delay-show":h=>{Le(h===null?x:Number(h))},"delay-hide":h=>{Oe(h===null?b:Number(h))},float:h=>{_e(h===null?A:h==="true")}};Object.values(I).forEach(h=>h(null)),Object.entries($).forEach(([h,B])=>{var K;(K=I[h])==null||K.call(I,B)})};g.useEffect(()=>{C(r)},[r]),g.useEffect(()=>{N(l)},[l]),g.useEffect(()=>{G(c)},[c]),g.useEffect(()=>{var $;let I=new Set(pe),h=n;if(!h&&e&&(h=`[data-tooltip-id='${e}']`),h)try{document.querySelectorAll(h).forEach(S=>{I.add({current:S})})}catch(S){}let B=document.querySelector(`[id='${t}']`);if(B&&I.add({current:B}),!I.size)return()=>null;let K=($=V!=null?V:B)!=null?$:be.current,$e=S=>{S.forEach(le=>{var H;if(!K||le.type!=="attributes"||!((H=le.attributeName)!=null&&H.startsWith("data-tooltip-")))return;let q=Se(K);me(q)})},p=new MutationObserver($e),E={attributes:true,childList:false,subtree:false};if(K){let S=Se(K);me(S),p.observe(K,E)}return()=>{p.disconnect()}},[pe,be,V,t,n]);let he=d;return i?he=i({content:P!=null?P:null,activeAnchor:V}):P&&(he=P),O&&(he=ge(nr,{content:O})),ge(tr,{...{id:e,anchorId:t,anchorSelect:n,className:o,classNameArrow:a,content:he,place:X,variant:ce,offset:ne,wrapper:Me,events:U,openOnClick:v,positionStrategy:oe,middlewares:w,delayShow:ue,delayHide:fe,float:ve,noArrow:_,clickable:L,closeOnEsc:D,style:M,position:j,isOpen:Y,setIsOpen:k,afterShow:T,afterHide:R,activeAnchor:V,setActiveAnchor:$=>Ve($)}})};var lr=or;/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/const St=()=>null;const At=()=>null;const Xe=({place:e="top",trigger:t="hover",float:n=false,shadow:r=true,border:l=false,children:i,style:o,...a})=>{const s=i.find(d=>d.type===St);const c=i.find(d=>d.type===At);const f="tooltip-"+g.useId();const u=d=>{const m={"hover":"hover","focus":"focus","click":"click focus"};return m[d]};return at("span",{className:"cove-tooltip",style:o,...a,children:[ge("a",{className:"cove-tooltip--target","data-tooltip-id":f,"data-tooltip-float":n,"data-tooltip-place":e,"data-tooltip-events":u(t),children:s?s.props.children:null}),ge(lr,{id:f,className:"cove-tooltip__content"+(" place-"+e)+(!n?" cove-tooltip__content--animated":"")+(t==="click"?" interactive":"")+(l?" cove-tooltip--border":"")+(r?" has-shadow":""),children:c?c.props.children:null})]})};Xe.Target=St;Xe.Content=At;Xe.__docgenInfo={"description":"","methods":[{"name":"Target","docblock":null,"modifiers":["static"],"params":[],"returns":null},{"name":"Content","docblock":null,"modifiers":["static"],"params":[],"returns":null}],"displayName":"Tooltip","props":{"place":{"defaultValue":{"value":"'top'","computed":false},"required":false},"trigger":{"defaultValue":{"value":"'hover'","computed":false},"required":false},"float":{"defaultValue":{"value":"false","computed":false},"required":false},"shadow":{"defaultValue":{"value":"true","computed":false},"required":false},"border":{"defaultValue":{"value":"false","computed":false},"required":false}}};export{Xe as T};
//# sourceMappingURL=Tooltip-8b5fc730.js.map
