import{a as t,j as n}from"./jsx-runtime-670450c2.js";import{R as s}from"./index-f1f749bf.js";import{p}from"./index-4d501b15.js";class o extends s.Component{constructor(r){super(r),this.state={hasError:!1}}static getDerivedStateFromError(r){return{hasError:!0}}componentDidCatch(r,e){console.warn(r,e)}render(){return this.state.hasError?this.props.component?t("h1",{children:["Something went wrong with component ",this.props.component,"."]}):n("h1",{children:"Something went wrong."}):this.props.children}}o.propTypes={component:p.string};o.__docgenInfo={description:"",methods:[],displayName:"ErrorBoundary",props:{component:{type:{name:"string"},required:!1,description:"Supply the name of the component that the ErrorBoundary is referencing"}}};export{o as E};
//# sourceMappingURL=ErrorBoundary-d4835eb6.js.map