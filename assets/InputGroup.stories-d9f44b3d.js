import{M as N,S}from"./index-676c21af.js";import{j as e,a as r,F as a}from"./jsx-runtime-670450c2.js";import{r as i}from"./index-f1f749bf.js";import{p as c}from"./index-4d501b15.js";import{I as s}from"./InputText-b32e4cdb.js";import{I as y}from"./Icon-11079a09.js";import{u as x}from"./index-9ec211f2.js";import"./preload-helper-41c905a7.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-c4724429.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-a253c635.js";import"./chunk-XHUUYXNA-19dd1a76.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-3EFM6HRY-4c51b38f.js";import"./_getTag-6acf5a83.js";import"./_commonjsHelpers-042e6b4d.js";import"./_baseIsEqual-0821e666.js";import"./index-8796c665.js";import"./index-356e4a49.js";import"./configStore-d2c2b356.js";import"./middleware-8046ed8c.js";import"./Label-ecfa30b4.js";import"./index-286867b9.js";import"./Tooltip-ed90ab02.js";/* empty css              */const o=({label:n,flow:t,children:p,clear:l,className:h,style:G,...I})=>{const[_,b]=i.useState({}),[d,T]=i.useState(null),m=i.useRef(null),f=e("div",{className:"cove-input-group__label",ref:m,children:n});return i.useLayoutEffect(()=>{l&&m.current&&T(m.current.offsetWidth)},[l,m]),i.useLayoutEffect(()=>{l&&(t==="left"&&b(()=>({paddingLeft:d+"px"})),t==="right"&&b(()=>({paddingRight:d+"px"})))},[l,t,d]),e("div",{className:`cove-input-group${l?" clear":""}${h?" "+h:""}`,flow:t,...I,children:n&&t?r(a,{children:[t==="left"&&r(a,{children:[" ",f,p," "]}),t==="right"&&r(a,{children:[" ",p,f," "]}),t==="center"&&p.length>1&&r(a,{children:[" ",p[0],f,p[1]," "]})]}):p})};o.propTypes={label:c.oneOfType([c.string,c.object]),flow:c.oneOf(["left","center","right"])};o.__docgenInfo={description:"",methods:[],displayName:"InputGroup",props:{label:{type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:""},flow:{type:{name:"enum",value:[{value:"'left'",computed:!1},{value:"'center'",computed:!1},{value:"'right'",computed:!1}]},required:!1,description:""}}};function v(n={}){const{wrapper:t}=Object.assign({},x(),n.components);return t?e(t,{...n,children:e(p,{})}):p();function p(){const l=Object.assign({h1:"h1"},x(),n.components);return r(a,{children:[e(N,{title:"Components/Input/Group",component:o,parameters:{options:{isToolshown:!0}}}),`
`,e(l.h1,{children:"Group"}),`
`,r(S,{name:"Default",children:[e(o,{flow:"left",label:r(a,{children:[e(y,{className:"mr-1",display:"upload"})," There is text here"]}),className:"mb-2",children:e(s,{type:"text",label:"bob"})}),e(o,{flow:"right",label:"Test label text",className:"mb-2",children:e(s,{type:"text"})}),r(o,{flow:"center",label:"@",className:"mb-2",children:[e(s,{type:"text",placeholder:"User"}),e(s,{type:"text",placeholder:"Server"})]})]})]})}}const g=()=>r(a,{children:[e(o,{flow:"left",label:r(a,{children:[e(y,{className:"mr-1",display:"upload"})," There is text here"]}),className:"mb-2",children:e(s,{type:"text",label:"bob"})}),e(o,{flow:"right",label:"Test label text",className:"mb-2",children:e(s,{type:"text"})}),r(o,{flow:"center",label:"@",className:"mb-2",children:[e(s,{type:"text",placeholder:"User"}),e(s,{type:"text",placeholder:"Server"})]})]});g.storyName="Default";g.parameters={storySource:{source:`<InputGroup flow="left" label={<><Icon className="mr-1" display="upload" /> There is text here</>} className="mb-2"><InputText type="text" label="bob" /></InputGroup>
<InputGroup flow="right" label="Test label text" className="mb-2"><InputText type="text" /></InputGroup>
<InputGroup flow="center" label="@" className="mb-2"><InputText type="text" placeholder="User" /><InputText type="text" placeholder="Server" /></InputGroup>`}};const u={title:"Components/Input/Group",parameters:{options:{isToolshown:!0}},component:o,tags:["stories-mdx"],includeStories:["defaultStory"]};u.parameters=u.parameters||{};u.parameters.docs={...u.parameters.docs||{},page:v};const te=["defaultStory"];export{te as __namedExportsOrder,u as default,g as defaultStory};
//# sourceMappingURL=InputGroup.stories-d9f44b3d.js.map