import{s as E}from"./index-3e075a63.js";import"./index-87c76d85.js";var c="links";const{addons:s,makeDecorator:m}=__STORYBOOK_MODULE_PREVIEW_API__;const{STORY_CHANGED:l,SELECT_STORY:O}=__STORYBOOK_MODULE_CORE_EVENTS__;var{document:i,HTMLElement:L}=E;var d=e=>s.getChannel().emit(O,e);var o=e=>{let{target:t}=e;if(!(t instanceof L))return;let _=t,{sbKind:r,sbStory:a}=_.dataset;(r||a)&&(e.preventDefault(),d({kind:r,story:a}))};var n=false;var v=()=>{n||(n=true,i.addEventListener("click",o))};var k=()=>{n&&(n=false,i.removeEventListener("click",o))};var p=m({name:"withLinks",parameterName:c,wrapper:(e,t)=>(v(),s.getChannel().once(l,k),e(t))});var T=[p];export{T as decorators};
//# sourceMappingURL=preview-829a9511.js.map
