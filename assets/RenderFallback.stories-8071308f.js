import{M as f,C as S,S as h,A as y}from"./index-c4e09ba2.js";import{j as e,a as d,F as x}from"./jsx-runtime-670450c2.js";import{p as t}from"./index-4d501b15.js";import{L as g}from"./LoadSpin-71c660ed.js";import{u as p}from"./index-4fb8b842.js";import"./iframe-4ea23a2e.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./index-d37d4223.js";import"./index-356e4a49.js";const n=({fadeEffect:a=!0,text:o="Rendering visualization...",loadSpinColor:r="#005eaa",loadSpinOpacity:i=30,loadSpinSize:m=85,style:u})=>e("div",{className:"cove-render",style:u,children:d("div",{className:"cove-render__content",children:[e("div",{className:`cove-render__text${a?" cove-render__text--animate":""}`,children:o}),e(g,{size:m,color:r,opacity:i})]})});n.propTypes={fadeEffect:t.bool,text:t.string,loadSpinColor:t.string,loadSpinOpacity:t.number,loadSpinSize:t.number};n.__docgenInfo={description:"",methods:[],displayName:"RenderFallback",props:{fadeEffect:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:"Enable a pulse fade effect for text in the fallback"},text:{defaultValue:{value:"'Rendering visualization...'",computed:!1},type:{name:"string"},required:!1,description:"Set the text to display in the fallback"},loadSpinColor:{defaultValue:{value:"'#005eaa'",computed:!1},type:{name:"string"},required:!1,description:"Set the spinner color"},loadSpinOpacity:{defaultValue:{value:"30",computed:!1},type:{name:"number"},required:!1,description:"Set the spinner opacity `[0-100]`"},loadSpinSize:{defaultValue:{value:"85",computed:!1},type:{name:"number"},required:!1,description:"Set the size of the displayed spinner in px"}}};const c=({...a})=>e(n,{...a});function b(a={}){const{wrapper:o}=Object.assign({},p(),a.components);return o?e(o,{...a,children:e(r,{})}):r();function r(){const i=Object.assign({h1:"h1",p:"p"},p(),a.components);return d(x,{children:[e(f,{title:"Components/Loader/RenderFallback",component:n}),`
`,e(i.h1,{children:"RenderFallback Component"}),`
`,e(i.p,{children:"Used to provide an animated display while loading or processing any asynchronous data for components or visualizations."}),`
`,e(S,{sourceState:"shown",withSource:"open",children:e(h,{name:"Example",args:{fadeEffect:!0,text:"Rendering visualization...",loadSpinColor:"#005eaa",loadSpinOpacity:30,loadSpinSize:85},children:c.bind({})})}),`
`,e(y,{story:"Example"})]})}}const l=c.bind({});l.storyName="Example";l.args={fadeEffect:!0,text:"Rendering visualization...",loadSpinColor:"#005eaa",loadSpinOpacity:30,loadSpinSize:85};l.parameters={storySource:{source:`({ ...args
}) => <RenderFallback {...args} />`}};const s={title:"Components/Loader/RenderFallback",component:n,tags:["stories-mdx"],includeStories:["example"]};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:b};const T=["Template","example"];export{c as Template,T as __namedExportsOrder,s as default,l as example};
//# sourceMappingURL=RenderFallback.stories-8071308f.js.map