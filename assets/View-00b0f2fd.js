import{a as s,j as e,F as E}from"./jsx-runtime-f14b59b8.js";import{r as o}from"./index-18f6e4ac.js";import{p as y}from"./index-780fc102.js";import{u as I,C as T}from"./store-bae56153.js";import{u as F}from"./useVisConfig-a08e56f4.js";import{B as J}from"./Button-ae9020f6.js";import{I as R}from"./Icon-ce256261.js";import{S as H}from"./SplashError-21d3d69e.js";import{O as q}from"./Overlay-e950ebf8.js";/* empty css             */const N=["360","480","768","960","1170","1280"];const K=({editorPanels:g,children:h})=>{var P,z;const{config:i,updateVisConfig:S}=F();const f=I(t=>t.os);const[a,v]=o.useState(true);const[c,n]=o.useState(false);const[r,b]=o.useState(null);const[m,w]=o.useState(false);const[u,_]=o.useState(false);const[x,W]=o.useState({});const p=o.useRef(null);const C=o.useRef(null);const k=o.useRef(null);const A=()=>{let t=JSON.parse(JSON.stringify(i));delete t.newViz;return t};o.useEffect(()=>{document.addEventListener("keydown",D);return()=>document.removeEventListener("keydown",D)},[]);o.useEffect(()=>{return r?n(true):n(false)},[r]);o.useEffect(()=>{if(i.missingRequiredSections===true)_(true);if(i.missingRequiredSections===false&&u===true)_(false)},[i.missingRequiredSections,u]);o.useEffect(()=>{if(u===false)S(A())},[u]);const M=o.useCallback(t=>{return b(d=>d!==t?t:null)},[r]);const D=t=>{if(t.code==="Escape")v(l=>!l);const d=f==="MacOS"?t.metaKey:t.altKey;if(d){let l=t.key;if(!isNaN(l)){if(l<=N.length){t.preventDefault();M(N[l-1])}}}if(!d){if(C.current&&!C.current.contains(document.activeElement)){if(t.code==="KeyG")n(l=>!l);if(t.code==="KeyR")V()}}};o.useEffect(()=>{if(!k.current)return;let t=new ResizeObserver(d=>{for(let l of d){let{width:$,height:j}=l.contentRect;W({width:$,height:j})}});t.observe(k.current);return()=>{if(!t)return;t.disconnect();t=null}},[]);const B=()=>v(!a);const L=()=>{const t=()=>_(false);return e("section",{className:"cove-splash__waiting",children:s("section",{className:"cove-splash__waiting__container",children:[e("h3",{children:"Finish Configuring"}),e("p",{children:"Set all required options to the left and confirm below to display the preview."}),e(J,{className:"mt-2 mx-auto",disabled:i.missingRequiredSections,onClick:()=>t(),children:"I'm Done"})]})})};const V=o.useCallback(()=>{if(!m&&p.current){b(null);w(true);n(false);p.current.style.transition="transform 800ms cubic-bezier(0.16, 1, 0.3, 1)";p.current.style.transform="rotate(-360deg)";const t=setTimeout(()=>{w(false);p.current.style.transition=null;p.current.style.transform="rotate(0deg)";p.current.style.transform=null},400);return()=>clearTimeout(t)}},[m]);let O=e(E,{children:h});if(g){O=s("div",{className:`cove-editor${a?" panel-shown":""}`,children:[e("button",{className:`cove-editor__toggle`+(!a?` collapsed`:``),title:a?`Collapse Editor`:`Expand Editor`,onClick:B}),s("section",{className:"cove-editor__panel",tabIndex:0,ref:C,children:[s("h2",{className:"cove-editor__panel-heading","aria-level":"2",role:"heading",children:["Configure ",i.type?T.String.convertKebabToTitle(i.type):"Component"]}),e("div",{className:"cove-editor__panel-container",children:e("section",{className:"cove-editor__panel-config",children:g})})]}),s("div",{className:"cove-editor__content","data-grid":c||null,children:[u&&e(L,{}),e("div",{className:"cove-editor__content-wrap--x",style:r?{maxWidth:r+"px",minWidth:"unset"}:null,children:s("div",{className:"cove-editor__content-wrap--y",children:[e("div",{className:"cove-editor-utils__breakpoints--px",children:c&&a&&s(E,{children:[Math.round(x.width),e("span",{className:"mx-1",style:{fontSize:"0.675rem"},children:"✕"}),Math.round(x.height)]})}),e("div",{className:"cove-editor__grid-caret--top",ref:k,children:s("div",{className:"cove-editor__grid-caret--bottom",children:[void 0===(i==null?void 0:i.newViz)&&((P=i==null?void 0:i.runtime)==null?void 0:P.editorErrorMessage)&&((z=i==null?void 0:i.runtime)==null?void 0:z.editorErrorMessage.length)>0&&e(H,{title:"Error With Configuration",message:i.runtime.editorErrorMessage}),h]})})]})}),s("div",{className:"cove-editor-utils__hotkeys",children:[s("div",{className:"cove-editor-utils__hotkeys--left",children:[e("p",{className:a?"hotkey--active":null,children:"Editor"}),e("p",{className:c?"hotkey--active":null,children:"Grid"}),e("p",{className:m?"hotkey--active":null,children:"Reset"}),e("p",{className:r?"hotkey--active":null,children:"View"})]}),s("div",{className:"cove-editor-utils__hotkeys--right",children:[e("p",{className:a?"hotkey--active":null,children:"esc"}),e("p",{className:c?"hotkey--active":null,children:"G"}),e("p",{className:m?"hotkey--active":null,children:"R"}),s("p",{className:r?"hotkey--active":null,children:[f==="MacOS"?e(R,{style:{marginRight:"0.25rem"},display:"command",size:12}):"Alt"," + ",r?N.indexOf(r)+1:`[1 - ${N.length}]`]})]})]}),e("div",{className:"cove-editor-utils__breakpoints",children:s("ul",{className:`cove-editor-utils__breakpoints-list${r?" has-active":""}`,children:[e("li",{className:"cove-editor-utils__breakpoints-item",onClick:()=>{n(t=>!t)},children:e("div",{className:"cove-editor-utils__breakpoints-grid",children:e(R,{display:"squareGrid"})})}),N.map((t,d)=>s("li",{className:`cove-editor-utils__breakpoints-item${r===t?" active":""}`,onClick:()=>M(t),children:[t,"px"]},d)),e("li",{className:"cove-editor-utils__breakpoints-item",onClick:()=>{V()},children:e("div",{className:"cove-editor-utils__breakpoints-reset",ref:p,children:e(R,{display:"rotateLeft"})})})]})})]})]})}return O};K.__docgenInfo={"description":"","methods":[],"displayName":"Editor"};const G=({editorPanels:g,isPreview:h,children:i})=>{const{viewMode:S,setViewMode:f,setViewport:a}=I();const v=window.location.href;o.useEffect(()=>{const w=new ResizeObserver(u=>{const{width:_}=u[0].contentRect;a(T.General.getViewport(_))});w.observe(document.documentElement);return()=>w.disconnect()},[]);o.useEffect(()=>{if(v.includes("editor=true"))f("isEditor",true);return()=>{}},[v,f]);const{isEditor:c,isDashboard:n,isWizard:r}=S;const b=o.useRef();const m=o.useCallback(()=>{if(c&&(!n&&!r)||c&&n&&!h||r){return e(K,{editorPanels:g,children:i})}return e(E,{children:i})},[c,n,r,h]);if(n||r)return s(E,{children:[e(m,{}),e(q,{})]});return s("div",{className:"cove",ref:b,children:[e(m,{}),e(q,{})]})};G.propTypes={"viewMode.isEditor":y.bool,"viewMode.isDashboard":y.bool,"viewMode.isPreview":y.bool,"viewMode.isWizard":y.bool,EditorPanels:y.func};G.__docgenInfo={"description":"","methods":[],"displayName":"View","props":{"viewMode.isEditor":{"type":{"name":"bool"},"required":false,"description":"**[External]** Defined in the `globalStore` - Sets the Editor view mode for the component"},"viewMode.isDashboard":{"type":{"name":"bool"},"required":false,"description":"**[External]** Defined in the `globalStore` - Sets the Dashboard view mode for the component"},"viewMode.isPreview":{"type":{"name":"bool"},"required":false,"description":"**[External]** Defined in the `globalStore` - Sets the Dashboard's Preview view mode for the component"},"viewMode.isWizard":{"type":{"name":"bool"},"required":false,"description":"**[External]** Defined in the `globalStore` - Sets the Wizard view mode for the component"},"EditorPanels":{"type":{"name":"func"},"required":false,"description":"The React component export of the EditorPanels for the component"}}};export{G as V};
//# sourceMappingURL=View-00b0f2fd.js.map
