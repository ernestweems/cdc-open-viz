import{M as j,S as p,A as z,C as u}from"./index-41cddf45.js";import{u as g}from"./store-bae56153.js";import{B as d}from"./Button-ae9020f6.js";import{a as t,j as e,F as s}from"./jsx-runtime-f14b59b8.js";import{r as V}from"./index-18f6e4ac.js";import{p as f}from"./index-780fc102.js";import{I as U}from"./Icon-ce256261.js";import{O as G}from"./Overlay-e950ebf8.js";import{u as D}from"./index-093f7bde.js";import"./iframe-1badc4b0.js";import"../sb-preview/runtime.mjs";import"./index-6820418a.js";import"./index-3e075a63.js";import"./index-8052939a.js";import"./_commonjsHelpers-53f7dec1.js";import"./index-87c76d85.js";import"./index-f4cbaf5b.js";import"./index-edb31f89.js";import"./visConfigSlice-c5711f83.js";import"./LoadSpin-552b11ee.js";const N=()=>null;const S=()=>null;const H=()=>null;const o=({fontTheme:n="dark",headerBgColor:l="#fff",showDividerTop:h=true,showDividerBottom:r=true,showClose:i=true,children:m,override:X=null})=>{var x,B,k;let{overlay:I,toggleOverlay:L}=g();const b=V.Children.toArray(m);const c=b.find(a=>(a==null?void 0:a.type)===N);const y=b.find(a=>(a==null?void 0:a.type)===S);const v=b.find(a=>(a==null?void 0:a.type)===H);const T=a=>{return!a?"none":null};return t("div",{className:`cove-modal cove-modal__theme--${n}`,children:[(i||c)&&t("div",{className:"cove-modal__header",style:{backgroundColor:l,boxShadow:T(c&&h),padding:!c?"0":null,minHeight:!c?"unset":null},children:[c&&((x=c==null?void 0:c.props)==null?void 0:x.children),i&&e("button",{className:"cove-modal--close",onClick:a=>{if(I)return L(false);a.preventDefault()},children:e(U,{display:"close"})})]}),e("div",{className:"cove-modal__content",children:y&&((B=y==null?void 0:y.props)==null?void 0:B.children)}),v&&e("div",{className:"cove-modal__footer",style:{boxShadow:T(r),paddingTop:r?"1rem":null},children:(k=v==null?void 0:v.props)==null?void 0:k.children})]})};o.Header=N;o.Content=S;o.Footer=H;o.propTypes={fontTheme:f.oneOf(["dark","light"]),headerBgColor:f.string,showDividerTop:f.bool,showDividerBottom:f.bool,showClose:f.bool};o.__docgenInfo={"description":"","methods":[{"name":"Header","docblock":null,"modifiers":["static"],"params":[],"returns":null},{"name":"Content","docblock":null,"modifiers":["static"],"params":[],"returns":null},{"name":"Footer","docblock":null,"modifiers":["static"],"params":[],"returns":null}],"displayName":"Modal","props":{"fontTheme":{"defaultValue":{"value":"'dark'","computed":false},"type":{"name":"enum","value":[{"value":"'dark'","computed":false},{"value":"'light'","computed":false}]},"required":false,"description":""},"headerBgColor":{"defaultValue":{"value":"'#fff'","computed":false},"type":{"name":"string"},"required":false,"description":""},"showDividerTop":{"defaultValue":{"value":"true","computed":false},"type":{"name":"bool"},"required":false,"description":""},"showDividerBottom":{"defaultValue":{"value":"true","computed":false},"type":{"name":"bool"},"required":false,"description":""},"showClose":{"defaultValue":{"value":"true","computed":false},"type":{"name":"bool"},"required":false,"description":""},"override":{"defaultValue":{"value":"null","computed":false},"required":false}}};const O=({header:n,content:l,footer:h,...r})=>t(o,{...r,children:[e(o.Header,{children:n}),e(o.Content,{children:l}),e(o.Footer,{children:h})]});function W(n={}){const{wrapper:l}=Object.assign({},D(),n.components);return l?e(l,{...n,children:e(h,{})}):h();function h(){const r=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3"},D(),n.components);if(!o)C("Modal",false);if(!o.Content)C("Modal.Content",true);if(!o.Footer)C("Modal.Footer",true);if(!o.Header)C("Modal.Header",true);return t(s,{children:[e(j,{title:"Components/UI/Modal",component:o,argTypes:{header:{table:{disable:true}},content:{table:{disable:true}},footer:{table:{disable:true}},fontTheme:{options:["light","dark"],control:{type:"radio"}},headerBgColor:{control:{type:"color"}},showDividerTop:{control:{type:"boolean"}},showDividerBottom:{control:{type:"boolean"}},showClose:{control:{type:"boolean"}}}}),"\n","\n",e(r.h1,{children:"Modal Component"}),"\n",e(r.p,{children:"Use the modal component to display content intended to be informative, but temporary. The content\ndisplayed is usually interactive, often requiring some type of confirmation - or input - from the user."}),"\n",e("br",{}),"\n",e(p,{name:"Default",args:{header:e(s,{children:"Default Modal Style"}),content:e(s,{children:"This is a modal that uses the default styles, and does not include any customization options."}),footer:e(d,{onClick:i=>i.preventDefault(),children:"Trigger an Action"}),fontTheme:"dark",headerBgColor:"#fff",showDividerTop:true,showDividerBottom:true,showClose:true},children:O.bind({})}),"\n",e(z,{story:"Default"}),"\n",e(r.h2,{children:"Usage Examples"}),"\n",e(r.p,{children:"Modals can be customized to fix various display requirements, depending on the situation. Below are a few examples highlighting various potential use cases."}),"\n",e(r.h3,{children:"Interaction"}),"\n",e(u,{children:e(p,{name:"Interaction",children:()=>{const i=g(m=>m.openOverlay);return e(s,{children:e(d,{onClick:()=>i(t(o,{fontTheme:"light",headerBgColor:"#824c88",children:[e(o.Header,{children:"Example Modal"}),e(o.Content,{children:e(r.p,{children:"This is a popup modal with general information. This serves as an example of how interaction with the modal is intended to work."})})]})),children:"Trigger Modal Open"})})}})}),"\n",e("br",{}),"\n",e(r.h3,{children:"Background Close Disabled"}),"\n",e(u,{children:e(p,{name:"BgCloseDisabled",children:()=>{const i=g(m=>m.openOverlay);return e(s,{children:e(d,{onClick:()=>i(t(o,{fontTheme:"light",headerBgColor:"#824c88",children:[e(o.Header,{children:"Example Modal"}),e(o.Content,{children:e(r.p,{children:"This is a popup modal with general information. This serves as an example of how interaction with the modal is intended to work."})})]}),true),children:"Trigger Locked Modal"})})}})}),"\n",e("br",{}),"\n",e(r.h3,{children:"Example #1"}),"\n",e(u,{withSource:"open",children:e(p,{name:"Example #1",children:e(o,{fontTheme:"light",headerBgColor:"#d9006e",children:e(o.Content,{children:e("p",{children:"This is a modal that contains a close button and content, but has no header or footer."})})})})}),"\n",e("br",{}),"\n",e(r.h3,{children:"Example #2"}),"\n",e(u,{withSource:"open",children:e(p,{name:"Example #2",children:t(o,{fontTheme:"light",headerBgColor:"#363955",showDividerBottom:false,children:[e(o.Header,{children:e(r.p,{children:"General Information Modal"})}),e(o.Content,{children:e("p",{children:"This is a modal with some general information. Anything can go here, to provide details or explain\ninformation further. The modal can contain as much information as needed, in order to provide the proper\ncontext for the content."})}),e(o.Footer,{children:e("sub",{children:e("em",{children:"Last updated 01/02/34"})})})]})})}),"\n",e("br",{}),"\n",e(r.h3,{children:"Example #3"}),"\n",e(u,{withSource:"open",children:e(p,{name:"Example #3",children:t(o,{fontTheme:"light",headerBgColor:"#d73636",showClose:false,children:[e(o.Header,{children:e("center",{children:"Warning Modal"})}),e(o.Content,{children:t("center",{children:[e("p",{children:"Making these changes will perform an irreversible action."}),"\n",e("p",{children:"No close button is provided; you are required to make a selection below."})]})}),t(o.Footer,{children:[e("div",{style:{textAlign:"center"},children:e("p",{style:{marginBottom:"1rem",fontSize:"1rem"},children:"Are you sure you want to continue?"})}),t("div",{style:{textAlign:"center"},children:[e(d,{className:"warn",onClick:i=>i.preventDefault(),children:"No, Cancel"}),"\n",e(d,{className:"success",onClick:i=>i.preventDefault(),children:"Yes, Continue"})]})]})]})})}),"\n",e(G,{})]})}}function C(n,l){throw new Error("Expected "+(l?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}const w=O.bind({});w.storyName="Default";w.args={header:e(s,{children:"Default Modal Style"}),content:e(s,{children:"This is a modal that uses the default styles, and does not include any customization options."}),footer:e(d,{onClick:n=>n.preventDefault(),children:"Trigger an Action"}),fontTheme:"dark",headerBgColor:"#fff",showDividerTop:true,showDividerBottom:true,showClose:true};w.parameters={storySource:{source:"({\n  header,\n  content,\n  footer,\n  ...args\n}) => <Modal {...args}>\n    <Modal.Header>\n      {header}\n    </Modal.Header>\n    <Modal.Content>\n      {content}\n    </Modal.Content>\n    <Modal.Footer>\n      {footer}\n    </Modal.Footer>\n  </Modal>"}};const E=()=>{const n=g(l=>l.openOverlay);return e(s,{children:e(d,{onClick:()=>n(t(o,{fontTheme:"light",headerBgColor:"#824c88",children:[e(o.Header,{children:"Example Modal"}),e(o.Content,{children:e("p",{children:"This is a popup modal with general information. This serves as an example of how interaction with the modal is intended to work."})})]})),children:"Trigger Modal Open"})})};E.storyName="Interaction";E.parameters={storySource:{source:'() => {\n  const openOverlay = useStore(state => state.openOverlay);\n  return <>\n        <Button onClick={() => openOverlay(<Modal fontTheme={"light"} headerBgColor={"#824c88"}>\n          <Modal.Header>\n            Example Modal\n          </Modal.Header>\n          <Modal.Content>\n            <p>This is a popup modal with general information. This serves as an example of how interaction with the\n              modal is intended to work.</p>\n          </Modal.Content>\n        </Modal>)}>\n          Trigger Modal Open\n        </Button>\n      </>;\n}'}};const A=()=>{const n=g(l=>l.openOverlay);return e(s,{children:e(d,{onClick:()=>n(t(o,{fontTheme:"light",headerBgColor:"#824c88",children:[e(o.Header,{children:"Example Modal"}),e(o.Content,{children:e("p",{children:"This is a popup modal with general information. This serves as an example of how interaction with the modal is intended to work."})})]}),true),children:"Trigger Locked Modal"})})};A.storyName="BgCloseDisabled";A.parameters={storySource:{source:'() => {\n  const openOverlay = useStore(state => state.openOverlay);\n  return <>\n        <Button onClick={() => openOverlay(<Modal fontTheme={"light"} headerBgColor={"#824c88"}>\n          <Modal.Header>\n            Example Modal\n          </Modal.Header>\n          <Modal.Content>\n            <p>This is a popup modal with general information. This serves as an example of how interaction with the\n              modal is intended to work.</p>\n          </Modal.Content>\n        </Modal>, true)}>\n          Trigger Locked Modal\n        </Button>\n      </>;\n}'}};const F=()=>e(o,{fontTheme:"light",headerBgColor:"#d9006e",children:e(o.Content,{children:e("p",{children:"This is a modal that contains a close button and content, but has no header or footer."})})});F.storyName="Example #1";F.parameters={storySource:{source:'<Modal fontTheme={"light"} headerBgColor={"#d9006e"}><Modal.Content><p>{"This is a modal that contains a close button and content, but has no header or footer."}</p></Modal.Content></Modal>'}};const _=()=>t(o,{fontTheme:"light",headerBgColor:"#363955",showDividerBottom:false,children:[e(o.Header,{children:e("p",{children:"General Information Modal"})}),e(o.Content,{children:e("p",{children:"This is a modal with some general information. Anything can go here, to provide details or explain\ninformation further. The modal can contain as much information as needed, in order to provide the proper\ncontext for the content."})}),e(o.Footer,{children:e("sub",{children:e("em",{children:"Last updated 01/02/34"})})})]});_.storyName="Example #2";_.parameters={storySource:{source:'<Modal fontTheme={"light"} headerBgColor={"#363955"} showDividerBottom={false}><Modal.Header><p>{"General Information Modal"}</p></Modal.Header><Modal.Content><p>{"This is a modal with some general information. Anything can go here, to provide details or explain\\ninformation further. The modal can contain as much information as needed, in order to provide the proper\\ncontext for the content."}</p></Modal.Content><Modal.Footer><sub><em>{"Last updated 01/02/34"}</em></sub></Modal.Footer></Modal>'}};const q=()=>t(o,{fontTheme:"light",headerBgColor:"#d73636",showClose:false,children:[e(o.Header,{children:e("center",{children:"Warning Modal"})}),e(o.Content,{children:t("center",{children:[e("p",{children:"Making these changes will perform an irreversible action."}),"\n",e("p",{children:"No close button is provided; you are required to make a selection below."})]})}),t(o.Footer,{children:[e("div",{style:{textAlign:"center"},children:e("p",{style:{marginBottom:"1rem",fontSize:"1rem"},children:"Are you sure you want to continue?"})}),t("div",{style:{textAlign:"center"},children:[e(d,{className:"warn",onClick:n=>n.preventDefault(),children:"No, Cancel"}),"\n",e(d,{className:"success",onClick:n=>n.preventDefault(),children:"Yes, Continue"})]})]})]});q.storyName="Example #3";q.parameters={storySource:{source:'<Modal fontTheme={"light"} headerBgColor={"#d73636"} showClose={false}><Modal.Header><center>{"Warning Modal"}</center></Modal.Header><Modal.Content><center><p>{"Making these changes will perform an irreversible action."}</p>{"\\n"}<p>{"No close button is provided; you are required to make a selection below."}</p></center></Modal.Content><Modal.Footer><div style={{\n      textAlign: "center"\n    }}><p style={{\n        marginBottom: "1rem",\n        fontSize: "1rem"\n      }}>{"Are you sure you want to continue?"}</p></div><div style={{\n      textAlign: "center"\n    }}><Button className="warn" onClick={e => e.preventDefault()}>{"No, Cancel"}</Button>{"\\n"}<Button className="success" onClick={e => e.preventDefault()}>{"Yes, Continue"}</Button></div></Modal.Footer></Modal>'}};const M={title:"Components/UI/Modal",component:o,argTypes:{header:{table:{disable:true}},content:{table:{disable:true}},footer:{table:{disable:true}},fontTheme:{options:["light","dark"],control:{type:"radio"}},headerBgColor:{control:{type:"color"}},showDividerTop:{control:{type:"boolean"}},showDividerBottom:{control:{type:"boolean"}},showClose:{control:{type:"boolean"}}},tags:["stories-mdx"],includeStories:["defaultStory","interaction","bgCloseDisabled","example1","example2","example3"]};M.parameters=M.parameters||{};M.parameters.docs={...M.parameters.docs||{},page:W};const pe=["Template","defaultStory","interaction","bgCloseDisabled","example1","example2","example3"];export{O as Template,pe as __namedExportsOrder,A as bgCloseDisabled,M as default,w as defaultStory,F as example1,_ as example2,q as example3,E as interaction};
//# sourceMappingURL=Modal.stories-4f0aecbf.js.map
