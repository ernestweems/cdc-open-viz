function l(o){var f=[];for(var i=1;i<arguments.length;i++){f[i-1]=arguments[i]}var n=Array.from(typeof o==="string"?[o]:o);n[n.length-1]=n[n.length-1].replace(/\r?\n([\t ]*)$/,"");var s=n.reduce(function(t,g){var a=g.match(/\n([\t ]+|(?!\s).)/g);if(a){return t.concat(a.map(function(u){var r,e;return(e=(r=u.match(/[\t ]/g))===null||r===void 0?void 0:r.length)!==null&&e!==void 0?e:0}))}return t},[]);if(s.length){var d=new RegExp("\n[	 ]{"+Math.min.apply(Math,s)+"}","g");n=n.map(function(t){return t.replace(d,"\n")})}n[0]=n[0].replace(/^\r?\n/,"");var c=n[0];f.forEach(function(t,g){var a=c.match(/(?:^|\n)( *)$/);var u=a?a[1]:"";var r=t;if(typeof t==="string"&&t.includes("\n")){r=String(t).split("\n").map(function(e,h){return h===0?e:""+u+e}).join("\n")}c+=r+n[g+1]});return c}export{l as d};
//# sourceMappingURL=index-edb31f89.js.map
