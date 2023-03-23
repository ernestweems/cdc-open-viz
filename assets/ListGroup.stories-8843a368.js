import{M as j,C as G,S as N,A as W}from"./index-c4e09ba2.js";import{a as p,F as w,j as t}from"./jsx-runtime-670450c2.js";import{r as g}from"./index-f1f749bf.js";import{p as i}from"./index-4d501b15.js";import{v as q}from"./visConfigSlice-d502a2ab.js";import{I as M}from"./Icon-e6436e69.js";import{I as O}from"./InputSelect-0513aac4.js";import{L as X}from"./Label-90f045e3.js";import{T as C}from"./Tooltip-e87d4e0c.js";import{u as L}from"./index-4fb8b842.js";import"./iframe-4ea23a2e.js";import"../sb-preview/runtime.mjs";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./useVisConfig-ebd632ff.js";import"./store-e4d3035e.js";/* empty css              */import"./index-e3f86ac2.js";const k=250,D=150,S=e=>e.charAt(0).toUpperCase()+e.slice(1),F=e=>e===Object(e),J=(e,r)=>Object.keys(r).map(a=>a===e?r[e]:null)[0],E=({textValueKey:e,listData:r,canClear:s,options:a,optionsSection:m,optionsSubsection:u,removeAction:d,index:v})=>{const{updateConfigField:h}=q(),[l,_]=g.useState(0);g.useEffect(()=>{const o=document.createElement("span");o.style.opacity="0",o.style.visibility="hidden",o.style.position="absolute",o.appendChild(document.createTextNode(e)),document.body.appendChild(o),_(o.offsetWidth),document.body.removeChild(o)},[]);const b=()=>a?l>D:l>k,f=o=>{let n=[...r];n[v][u]=o.target.value,h([m,u],{...n})};return p("li",{className:`cove-list-group__item${a?" cove-list-group__item--has-option":""}${b()?" cove-list-group__item--truncate":""}`,children:[t("div",{className:"cove-list-group__item-value",children:b()?p(C,{float:!0,children:[t(C.Target,{children:t("div",{className:"cove-list-group__item-value__text",children:S(e)})}),t(C.Content,{children:S(e)})]}):t("div",{className:"cove-list-group__item-value__text",children:S(e)})}),p("div",{className:"cove-list-group__item-children",children:[a&&t(O,{className:"mr-1",options:a[0],style:{width:"100px"},onChange:o=>f(o)}),d&&(s||r.length>1)&&t("div",{className:"cove-list-group__item-remove",children:t(M,{display:"close",size:16,onClick:()=>d(e)})})]})]})},c=({label:e,tooltip:r,items:s,textValueKey:a,canClear:m=!0,options:u,optionsSection:d,optionsSubsection:v,removeAction:h})=>{const[l,_]=g.useState(s);return g.useEffect(()=>{_(s)},[s]),p(w,{children:[e&&t(X,{tooltip:r||null,children:e}),t("ul",{className:"cove-list-group",children:s&&(f=>{let o=[];return f&&f.map((n,x)=>{if(F(n)){let I=J(a,n);return o.push(t(E,{textValueKey:I,listData:l,canClear:m,options:u,optionsSection:d,optionsSubsection:v,removeAction:h,index:x},x))}return o.push(t(E,{textValueKey:n,listData:l,canClear:m,removeAction:h},x))}),o})(s)})]})};c.propTypes={label:i.string,canClear:i.bool,textValueKey:i.string,options:i.array,optionsSection:i.string,optionsSubsection:i.string,removeAction:i.func,items:i.array,tooltip:i.oneOfType([i.string,i.object])};c.__docgenInfo={description:"",methods:[],displayName:"ListGroup",props:{canClear:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:"Allow all items from the list to be removed. Set `false` to force at least 1 to remain"},label:{type:{name:"string"},required:!1,description:"Supply a label for the ListGroup"},textValueKey:{type:{name:"string"},required:!1,description:"Supply the key name containing the value to be used when populating the text value"},options:{type:{name:"array"},required:!1,description:"Array list of values for additional dropdown selections on each list item"},optionsSection:{type:{name:"string"},required:!1,description:"First config key value to target when updating the option of the dropdown"},optionsSubsection:{type:{name:"string"},required:!1,description:"Second, nested config key value to target when updating the option of the dropdown"},removeAction:{type:{name:"func"},required:!1,description:"Callback function to trigger when removing an item from the ListGroup"},items:{type:{name:"array"},required:!1,description:"Array of strings, or objects, used to populate the list. If objects are used, each entry's key is set to the text and the value is set to the value of"},tooltip:{type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:"Add a tooltip to describe the ListGroup's usage; JSX markup can also be supplied"}}};const A=({...e})=>t(c,{...e});function V(e={}){const{wrapper:r}=Object.assign({},L(),e.components);return r?t(r,{...e,children:t(s,{})}):s();function s(){const a=Object.assign({h1:"h1",p:"p"},L(),e.components);return p(w,{children:[t(j,{title:"Components/Element/ListGroup-WIP",component:c}),`
`,t(a.h1,{children:"ListGroup Component (WIP)"}),`
`,t(a.p,{children:"Used to display a list of items from a pre-populated array that can be acted upon, specifically for removing an item from the initial array."}),`
`,t(G,{sourceState:"shown",withSource:"open",children:t(N,{name:"Example",args:{label:"State Values",canClear:!0,options:["Line","Bar","Wave"],removeAction:()=>alert("Removed"),items:["test","test2","test3"],tooltip:"This is an <strong>example</strong> tooltip."},children:A.bind({})})}),`
`,t(W,{story:"Example"})]})}}const T=A.bind({});T.storyName="Example";T.args={label:"State Values",canClear:!0,options:["Line","Bar","Wave"],removeAction:()=>alert("Removed"),items:["test","test2","test3"],tooltip:"This is an <strong>example</strong> tooltip."};T.parameters={storySource:{source:`({ ...args
}) => <ListGroup {...args} />`}};const y={title:"Components/Element/ListGroup-WIP",component:c,tags:["stories-mdx"],includeStories:["example"]};y.parameters=y.parameters||{};y.parameters.docs={...y.parameters.docs||{},page:V};const me=["Template","example"];export{A as Template,me as __namedExportsOrder,y as default,T as example};
//# sourceMappingURL=ListGroup.stories-8843a368.js.map