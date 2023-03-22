import{M as s}from"./index-41cddf45.js";import{j as n,a as r,F as l}from"./jsx-runtime-f14b59b8.js";import{u as c}from"./index-093f7bde.js";import"./iframe-1badc4b0.js";import"../sb-preview/runtime.mjs";import"./index-18f6e4ac.js";import"./_commonjsHelpers-53f7dec1.js";import"./index-6820418a.js";import"./index-3e075a63.js";import"./index-8052939a.js";import"./index-87c76d85.js";import"./index-f4cbaf5b.js";import"./index-edb31f89.js";function d(a={}){const{wrapper:o}=Object.assign({},c(),a.components);return o?n(o,{...a,children:n(i,{})}):i();function i(){const e=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",strong:"strong",ul:"ul",li:"li",h3:"h3"},c(),a.components);return r(l,{children:[n(s,{title:"Helpers/CoveHelper/Data/getFilteredDataColumns"}),"\n",n(e.h1,{children:"getFilteredDataColumns"}),"\n",n(e.p,{children:"Function that iterates over a provided array of data and returns an array of filtered column names that are in the provided config object."}),"\n",n(e.p,{children:" "}),"\n",n(e.h2,{children:"Syntax"}),"\n",n(e.pre,{children:n(e.code,{className:"language-js",children:"CoveHelper.Data.getFilteredDataColumns(config, dataArray)\n"})}),"\n",n(e.p,{children:n(e.strong,{children:"Parameters:"})}),"\n",r(e.ul,{children:["\n",r(e.li,{children:[n(e.code,{children:"config"})," is an object that may contain two keys: ",n(e.code,{children:"series"})," and ",n(e.code,{children:"confidenceKeys"}),":","\n",r(e.ul,{children:["\n",r(e.li,{children:[n(e.code,{children:"series"})," is an array of objects that each contain a dataKey property"]}),"\n",r(e.li,{children:[n(e.code,{children:"confidenceKeys"})," is an object that contains key-value pairs where the keys are column names and the values are boolean values indicating whether the column is a confidence interval"]}),"\n"]}),"\n"]}),"\n",r(e.li,{children:[n(e.code,{children:"dataArray"})," is an array of objects where each object represents a row of data"]}),"\n"]}),"\n",n(e.p,{children:n(e.strong,{children:"Returns:"})}),"\n",r(e.p,{children:["An array of filtered data column names from ",n(e.code,{children:"dataArray"})]}),"\n",n(e.p,{children:" "}),"\n",n(e.h3,{children:"Example"}),"\n",n(e.pre,{children:n(e.code,{className:"language-js",children:"import CoveHelper from '@cdc/core/helpers/CoveHelper'\n\n...\n\nconst config = {\n  series: [\n    { dataKey: 'name' },\n    { dataKey: 'age' }\n  ],\n  confidenceKeys: {\n    height: true,\n    weight: true\n  }\n}\n\nconst dataArray = [\n  { name: 'Alice', age: 30, height: 5.6, weight: 130 },\n  { name: 'Bob', age: 40, height: 5.9, weight: 160 },\n  { name: 'Charlie', age: 50, height: 5.11, weight: 180 }\n]\n\nconst columns = CoveHelper.Data.getFilteredDataColumns(config, dataArray)\nconsole.log(columns) // Output: ['height', 'weight']\n"})})]})}}const h=()=>{throw new Error("Docs-only story")};h.parameters={docsOnly:true};const t={title:"Helpers/CoveHelper/Data/getFilteredDataColumns",tags:["stories-mdx"],includeStories:["__page"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:d};const x=["__page"];export{x as __namedExportsOrder,h as __page,t as default};
//# sourceMappingURL=getFilteredDataColumns.stories-8274f32f.js.map
