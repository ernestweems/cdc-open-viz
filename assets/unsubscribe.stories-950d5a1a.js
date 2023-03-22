import{M as l}from"./index-41cddf45.js";import{j as n,a as t,F as a}from"./jsx-runtime-f14b59b8.js";import{u as c}from"./index-093f7bde.js";import"./iframe-1badc4b0.js";import"../sb-preview/runtime.mjs";import"./index-18f6e4ac.js";import"./_commonjsHelpers-53f7dec1.js";import"./index-6820418a.js";import"./index-3e075a63.js";import"./index-8052939a.js";import"./index-87c76d85.js";import"./index-f4cbaf5b.js";import"./index-edb31f89.js";function h(o={}){const{wrapper:i}=Object.assign({},c(),o.components);return i?n(i,{...o,children:n(s,{})}):s();function s(){const e=Object.assign({h1:"h1",p:"p",a:"a",code:"code",h2:"h2",pre:"pre",strong:"strong",ul:"ul",li:"li",h3:"h3"},c(),o.components);return t(a,{children:[n(l,{title:"Helpers/CoveHelper/Event/unsubscribe"}),"\n",n(e.h1,{children:"unsubscribe"}),"\n",t(e.p,{children:["This function removes an event listener for a given event name from the document object. The listener function to be removed should be\nthe same as the one added previously using the ",n(e.a,{href:"/?path=/docs/helpers-covehelper-event-subscribe--docs",children:"subscribe"})," function."]}),"\n",t(e.p,{children:["The function returns the result of the ",n(e.code,{children:"removeEventListener"})," method call."]}),"\n",n(e.p,{children:" "}),"\n",n(e.h2,{children:"Syntax"}),"\n",n(e.pre,{children:n(e.code,{className:"language-js",children:"CoveHelper.Event.unsubscribe(eventName, listener);\n"})}),"\n",n(e.p,{children:n(e.strong,{children:"Parameters"})}),"\n",t(e.ul,{children:["\n",t(e.li,{children:[n(e.code,{children:"eventName"}),": A string representing the name of the event to remove the listener from."]}),"\n",t(e.li,{children:[n(e.code,{children:"listener"}),": A function to be removed from the event listener list."]}),"\n"]}),"\n",n(e.p,{children:" "}),"\n",n(e.h3,{children:"Example"}),"\n",t(e.p,{children:["In this example, the ",n(e.code,{children:"handleClick"})," function is registered as an event listener for the ",n(e.code,{children:"click"})," event\non a button element using the ",n(e.code,{children:"subscribe"})," function. The same function is later removed as a listener using the ",n(e.code,{children:"unsubscribe"})," function."]}),"\n",n(e.pre,{children:n(e.code,{className:"language-js",children:"function handleClick(event) {\n  console.log('Button clicked!', event.target);\n}\n\nconst button = document.querySelector('button');\nsubscribe('click', handleClick);\n\n// Later, to remove the listener:\nunsubscribe('click', handleClick);\n"})})]})}}const d=()=>{throw new Error("Docs-only story")};d.parameters={docsOnly:true};const r={title:"Helpers/CoveHelper/Event/unsubscribe",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:h};const E=["__page"];export{E as __namedExportsOrder,d as __page,r as default};
//# sourceMappingURL=unsubscribe.stories-950d5a1a.js.map
