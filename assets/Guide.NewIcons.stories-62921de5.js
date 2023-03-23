import{M as d}from"./index-c4e09ba2.js";import{j as n,a as i,F as s}from"./jsx-runtime-670450c2.js";import{u as t}from"./index-4fb8b842.js";import"./iframe-4ea23a2e.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./index-d37d4223.js";import"./index-356e4a49.js";function a(l={}){const{wrapper:o}=Object.assign({},t(),l.components);return o?n(o,{...l,children:n(c,{})}):c();function c(){const e=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",strong:"strong",pre:"pre",code:"code",em:"em",ol:"ol"},t(),l.components);return i(s,{children:[n(d,{title:"Guides/New Icons"}),`
`,n(e.h1,{children:"Adding New Icons"}),`
`,n("br",{}),`
`,n(e.h2,{children:"SVG Formatting & Markup"}),`
`,n(e.p,{children:"New icon svgs should adhere to the following guidelines:"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(e.p,{children:"Should be sized properly with vetor editing software, with extraneous, unnecessary padding removed."}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:"Should be monotone, with any white sections either removed, or clipped/masked to transparency."}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:"Should have its paths snapped to 1px increments, with whole number width/height dimensions to reduce subpixel malformations."}),`
`]}),`
`,i(e.li,{children:[`
`,n(e.p,{children:"Should have all ids, classes, inline css, unnecessary markup, and any other extraneous code, completely removed:"}),`
`,n(e.p,{children:n(e.strong,{children:"Markup Example (Bad):"})}),`
`,n(e.pre,{children:n(e.code,{className:"language-html",children:`<?xml version="1.0" encoding="UTF-8"?>
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" <style>.cls-1{fill:none;}</style> viewBox="0 0 20.556 20.566">
...
</svg>
`})}),`
`,n(e.p,{children:n(e.strong,{children:"Markup Example (Good):"})}),`
`,n(e.pre,{children:n(e.code,{className:"language-html",children:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
...
</svg>
`})}),`
`]}),`
`]}),`
`,n(e.p,{children:" "}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,i(e.p,{children:["Should be supplied with the accessibility-specific attributes ",n(e.code,{children:'aria-hidden="true" focusable="false" role="img"'})," to ensure proper 508 compliance:"]}),`
`,n(e.pre,{children:n(e.code,{className:"language-html",children:`<svg ... aria-hidden="true" focusable="false" role="img">
`})}),`
`]}),`
`]}),`
`,n(e.p,{children:" "}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,i(e.p,{children:["Should be supplied with ",n(e.code,{children:'fill="currentColor"'})," to support font color inheritance from parent for fill:"]}),`
`,i(e.p,{children:[` 
[`,i(e.em,{children:["Note: Some icons may require that the ",n(e.code,{children:"<path>"})," receive the fill, instead of the top-level ",n(e.code,{children:"<svg>"}),"; this entirely depends on whether clipping mask paths exist on the image."]}),"]"]}),`
`,n(e.pre,{children:n(e.code,{className:"language-html",children:`<svg ... fill="currentColor">
`})}),`
`]}),`
`]}),`
`,n(e.p,{children:" "}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[`
`,n(e.p,{children:"Your final svg output should look like the following:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-html",children:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true" focusable="false" role="img" fill="currentColor">
...
</svg>
`})}),`
`]}),`
`]}),`
`,n("br",{}),`
`,n(e.h2,{children:"Filename & Directory"}),`
`,i(e.p,{children:["All new icons should be named using the following convention: ",n(e.code,{children:"icon-"})," ",n(e.code,{children:"kebab-case-name"})," (",n(e.code,{children:"-variation"}),")",n(e.code,{children:".svg"}),"."]}),`
`,i(e.p,{children:["Once all of the above steps are completed, the new icon should be placed in the ",n(e.code,{children:"./packages/core/assets"})," directory."]}),`
`,n("br",{}),`
`,n(e.h2,{children:"Adding Icons to the Icon Component"}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:[`
`,i(e.p,{children:["Open the ",n(e.code,{children:"./packages/core/data/iconHash.js"})," file to access the hash list."]}),`
`]}),`
`,i(e.li,{children:[`
`,i(e.p,{children:["Import your new svg at the top of the file, maintaining alphabetical order of text following the ",n(e.code,{children:"icon"})," prefix."]}),`
`]}),`
`,i(e.li,{children:[`
`,i(e.p,{children:["Assign an import name using the following convention: ",n(e.code,{children:"icon"})," ",n(e.code,{children:"KebabToPascal"}),"."]}),`
`,i(e.p,{children:[n(e.strong,{children:"Example:"})," If you've created a file named ",n(e.code,{children:"icon-square-filled.svg"}),", your import name should be ",n(e.code,{children:"iconSquareFilled"}),"."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`import iconSquareFilled from '../assets/icon-square-filled.svg'
`})}),`
`]}),`
`]}),`
`,n(e.p,{children:" "}),`
`,i(e.ol,{start:"4",children:[`
`,i(e.li,{children:[`
`,i(e.p,{children:["Add the new icon and its hash to the hash object, maintaining alphabetical order; the ",n(e.code,{children:"icon"})," prefix should be removed for the key and converted to camelCase:"]}),`
`,n(e.p,{children:n(e.strong,{children:"Example:"})}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`const iconHash = {
  ...
  'squareFilled': iconSquareFilled,
  ...
}
`})}),`
`]}),`
`]}),`
`,i(e.ol,{start:"5",children:[`
`,i(e.li,{children:["Add your new icon to the Icon component documentation located at ",n(e.code,{children:"./packages/core/components/ui/_stories/Icon.stories.mdx"})," and test to ensure it is functioning properly."]}),`
`,n(e.li,{children:"You're done!"}),`
`]})]})}}const h=()=>{throw new Error("Docs-only story")};h.parameters={docsOnly:!0};const r={title:"Guides/New Icons",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:a};const S=["__page"];export{S as __namedExportsOrder,h as __page,r as default};
//# sourceMappingURL=Guide.NewIcons.stories-62921de5.js.map