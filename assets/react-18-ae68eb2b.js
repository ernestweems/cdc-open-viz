import{R as c,r as n}from"./index-18f6e4ac.js";import{r as m}from"./index-8052939a.js";var a={};var s=m;{a.createRoot=s.createRoot;a.hydrateRoot=s.hydrateRoot}var o=new Map;var R=({callback:e,children:t})=>{let r=n.useRef();return n.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t};var p=async(e,t)=>{let r=await d(t);return new Promise(u=>{r.render(c.createElement(R,{callback:()=>u(null)},e))})};var E=(e,t)=>{let r=o.get(e);r&&(r.unmount(),o.delete(e))};var d=async e=>{let t=o.get(e);return t||(t=a.createRoot(e),o.set(e,t)),t};export{p as r,E as u};
//# sourceMappingURL=react-18-ae68eb2b.js.map
