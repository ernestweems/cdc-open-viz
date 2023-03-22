import{a as L,F as W,j as V}from"./jsx-runtime-f14b59b8.js";import{r as a}from"./index-18f6e4ac.js";import{p as u}from"./index-780fc102.js";import{u as D}from"./useVisConfig-a08e56f4.js";import{g as N}from"./visConfigSlice-c5711f83.js";import{L as B}from"./Label-8ac46115.js";/* empty css              */function M(t,r,c){var g=this;var o=a.useRef(null);var l=a.useRef(0);var i=a.useRef(null);var s=a.useRef([]);var f=a.useRef();var p=a.useRef();var k=a.useRef(t);var y=a.useRef(true);k.current=t;var q=!r&&r!==0&&typeof window!=="undefined";if(typeof t!=="function"){throw new TypeError("Expected a function")}r=+r||0;c=c||{};var E=!!c.leading;var d="trailing"in c?!!c.trailing:true;var m="maxWait"in c;var x=m?Math.max(+c.maxWait||0,r):null;a.useEffect(function(){y.current=true;return function(){y.current=false}},[]);var R=a.useMemo(function(){var v=function(e){var n=s.current;var b=f.current;s.current=f.current=null;l.current=e;return p.current=k.current.apply(b,n)};var h=function(e,n){if(q)cancelAnimationFrame(i.current);i.current=q?requestAnimationFrame(e):setTimeout(e,n)};var F=function(e){if(!y.current)return false;var n=e-o.current;var b=e-l.current;return!o.current||n>=r||n<0||m&&b>=x};var I=function(e){i.current=null;if(d&&s.current){return v(e)}s.current=f.current=null;return p.current};var C=function(){var e=Date.now();if(F(e)){return I(e)}if(!y.current){return}var n=e-o.current;var b=e-l.current;var S=r-n;var j=m?Math.min(S,x-b):S;h(C,j)};var T=function(){var e=[];for(var n=0;n<arguments.length;n++){e[n]=arguments[n]}var b=Date.now();var S=F(b);s.current=e;f.current=g;o.current=b;if(S){if(!i.current&&y.current){l.current=o.current;h(C,r);return E?v(o.current):p.current}if(m){h(C,r);return v(o.current)}}if(!i.current){h(C,r)}return p.current};T.cancel=function(){if(i.current){q?cancelAnimationFrame(i.current):clearTimeout(i.current)}l.current=0;s.current=o.current=f.current=i.current=null};T.isPending=function(){return!!i.current};T.flush=function(){return!i.current?p.current:I(Date.now())};return T},[E,m,r,x,d,q]);return R}function P(t,r){return t===r}function A(t){return typeof t==="function"?function(){return t}:t}function $(t){var r=a.useState(A(t)),c=r[0],g=r[1];var o=a.useCallback(function(l){return g(A(l))},[]);return[c,o]}function _(t,r,c){var g=c&&c.equalityFn||P;var o=$(t),l=o[0],i=o[1];var s=M(a.useCallback(function(p){return i(p)},[i]),r,c);var f=a.useRef(t);a.useEffect(function(){if(!g(f.current,t)){s(t);f.current=t}},[t,s,g]);return[l,{cancel:s.cancel,isPending:s.isPending,flush:s.flush}]}const O=({label:t,type:r="text",tooltip:c,placeholder:g,required:o,configField:l,value:i,min:s,max:f,className:p,onChange:k,...y})=>{const{config:q,updateVisConfigField:E}=D();const[d,m]=a.useState();const[x]=_(d,300);const R=a.useRef(null);const v=l&&N(l,q);const h=Boolean(v&&typeof v!==void 0);a.useEffect(()=>{if(h){v!==d&&m(v)}else{m(i)}return()=>{}},[h]);a.useEffect(()=>{if(l&&v!==x)E(l,x);return()=>{}},[l,x,E]);const F=e=>{let n=false;if(e==="")n=true;if(s||f){if(s&&parseFloat(e)>=parseFloat(s)){n=true}if(f&&parseFloat(e)<=parseFloat(f)){n=true}}else{n=true}return n};const I=e=>{switch(r){case"number":if(F(e.target.value)){m(e.target.value)}else{m(d)}break;default:m(e.target.value)}if(k){console.log(e);k(e)}};let C={className:`cove-input${"textarea"===r?" cove-input--textarea":""}${o&&(d===void 0||d==="")?" cove-input--error":""}${p?" "+p:""}`,type:r,placeholder:g,onChange:e=>I(e),...y};let T="textarea"===r?V("textarea",{...C,ref:R,value:d??""}):V("input",{...C,value:d??"",ref:R});return L(W,{children:[t&&V(B,{tooltip:c,onClick:()=>R.current.focus(),children:t}),T]})};O.propTypes={label:u.string,type:u.oneOf(["text","search","textarea","number","date"]),value:u.oneOfType([u.string,u.number]),tooltip:u.oneOfType([u.object,u.string]),placeholder:u.string,min:u.oneOfType([u.number,u.string]),max:u.oneOfType([u.number,u.string]),section:u.string,subsection:u.string,fieldName:u.string,updateConfigField:u.func};O.__docgenInfo={"description":"","methods":[],"displayName":"InputText","props":{"type":{"defaultValue":{"value":"'text'","computed":false},"type":{"name":"enum","value":[{"value":"'text'","computed":false},{"value":"'search'","computed":false},{"value":"'textarea'","computed":false},{"value":"'number'","computed":false},{"value":"'date'","computed":false}]},"required":false,"description":""},"label":{"type":{"name":"string"},"required":false,"description":""},"value":{"type":{"name":"union","value":[{"name":"string"},{"name":"number"}]},"required":false,"description":""},"tooltip":{"type":{"name":"union","value":[{"name":"object"},{"name":"string"}]},"required":false,"description":""},"placeholder":{"type":{"name":"string"},"required":false,"description":""},"min":{"type":{"name":"union","value":[{"name":"number"},{"name":"string"}]},"required":false,"description":""},"max":{"type":{"name":"union","value":[{"name":"number"},{"name":"string"}]},"required":false,"description":""},"section":{"type":{"name":"string"},"required":false,"description":""},"subsection":{"type":{"name":"string"},"required":false,"description":""},"fieldName":{"type":{"name":"string"},"required":false,"description":""},"updateConfigField":{"type":{"name":"func"},"required":false,"description":""}}};export{O as I};
//# sourceMappingURL=InputText-0693c5bc.js.map
