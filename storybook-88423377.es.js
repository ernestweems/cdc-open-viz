import { c as re, g as St } from "./storybook-92157f1b.es.js";
import { r as Rt, R as ce } from "./storybook-b5af0f4a.es.js";
var Qe = {}, et = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Doctype = e.CDATA = e.Tag = e.Style = e.Script = e.Comment = e.Directive = e.Text = e.Root = e.isTag = e.ElementType = void 0;
  var t;
  (function(n) {
    n.Root = "root", n.Text = "text", n.Directive = "directive", n.Comment = "comment", n.Script = "script", n.Style = "style", n.Tag = "tag", n.CDATA = "cdata", n.Doctype = "doctype";
  })(t = e.ElementType || (e.ElementType = {}));
  function r(n) {
    return n.type === t.Tag || n.type === t.Script || n.type === t.Style;
  }
  e.isTag = r, e.Root = t.Root, e.Text = t.Text, e.Directive = t.Directive, e.Comment = t.Comment, e.Script = t.Script, e.Style = t.Style, e.Tag = t.Tag, e.CDATA = t.CDATA, e.Doctype = t.Doctype;
})(et);
var T = {}, me = re && re.__extends || function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, s) {
      n.__proto__ = s;
    } || function(n, s) {
      for (var l in s)
        Object.prototype.hasOwnProperty.call(s, l) && (n[l] = s[l]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), Ce = re && re.__assign || function() {
  return Ce = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    }
    return e;
  }, Ce.apply(this, arguments);
};
Object.defineProperty(T, "__esModule", { value: !0 });
T.cloneNode = T.hasChildren = T.isDocument = T.isDirective = T.isComment = T.isText = T.isCDATA = T.isTag = T.Element = T.Document = T.CDATA = T.NodeWithChildren = T.ProcessingInstruction = T.Comment = T.Text = T.DataNode = T.Node = void 0;
var K = et, tt = (
  /** @class */
  function() {
    function e() {
      this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    return Object.defineProperty(e.prototype, "parentNode", {
      // Read-write aliases for properties
      /**
       * Same as {@link parent}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.parent;
      },
      set: function(t) {
        this.parent = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "previousSibling", {
      /**
       * Same as {@link prev}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.prev;
      },
      set: function(t) {
        this.prev = t;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "nextSibling", {
      /**
       * Same as {@link next}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.next;
      },
      set: function(t) {
        this.next = t;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.cloneNode = function(t) {
      return t === void 0 && (t = !1), rt(this, t);
    }, e;
  }()
);
T.Node = tt;
var Ne = (
  /** @class */
  function(e) {
    me(t, e);
    function t(r) {
      var n = e.call(this) || this;
      return n.data = r, n;
    }
    return Object.defineProperty(t.prototype, "nodeValue", {
      /**
       * Same as {@link data}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.data;
      },
      set: function(r) {
        this.data = r;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(tt)
);
T.DataNode = Ne;
var At = (
  /** @class */
  function(e) {
    me(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = K.ElementType.Text, r;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 3;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(Ne)
);
T.Text = At;
var It = (
  /** @class */
  function(e) {
    me(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = K.ElementType.Comment, r;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 8;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(Ne)
);
T.Comment = It;
var Dt = (
  /** @class */
  function(e) {
    me(t, e);
    function t(r, n) {
      var s = e.call(this, n) || this;
      return s.name = r, s.type = K.ElementType.Directive, s;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(Ne)
);
T.ProcessingInstruction = Dt;
var Le = (
  /** @class */
  function(e) {
    me(t, e);
    function t(r) {
      var n = e.call(this) || this;
      return n.children = r, n;
    }
    return Object.defineProperty(t.prototype, "firstChild", {
      // Aliases
      /** First child of the node. */
      get: function() {
        var r;
        return (r = this.children[0]) !== null && r !== void 0 ? r : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "lastChild", {
      /** Last child of the node. */
      get: function() {
        return this.children.length > 0 ? this.children[this.children.length - 1] : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "childNodes", {
      /**
       * Same as {@link children}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.children;
      },
      set: function(r) {
        this.children = r;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(tt)
);
T.NodeWithChildren = Le;
var Pt = (
  /** @class */
  function(e) {
    me(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = K.ElementType.CDATA, r;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 4;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(Le)
);
T.CDATA = Pt;
var Mt = (
  /** @class */
  function(e) {
    me(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = K.ElementType.Root, r;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 9;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(Le)
);
T.Document = Mt;
var Nt = (
  /** @class */
  function(e) {
    me(t, e);
    function t(r, n, s, l) {
      s === void 0 && (s = []), l === void 0 && (l = r === "script" ? K.ElementType.Script : r === "style" ? K.ElementType.Style : K.ElementType.Tag);
      var f = e.call(this, s) || this;
      return f.name = r, f.attribs = n, f.type = l, f;
    }
    return Object.defineProperty(t.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "tagName", {
      // DOM Level 1 aliases
      /**
       * Same as {@link name}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.name;
      },
      set: function(r) {
        this.name = r;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "attributes", {
      get: function() {
        var r = this;
        return Object.keys(this.attribs).map(function(n) {
          var s, l;
          return {
            name: n,
            value: r.attribs[n],
            namespace: (s = r["x-attribsNamespace"]) === null || s === void 0 ? void 0 : s[n],
            prefix: (l = r["x-attribsPrefix"]) === null || l === void 0 ? void 0 : l[n]
          };
        });
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }(Le)
);
T.Element = Nt;
function Lt(e) {
  return (0, K.isTag)(e);
}
T.isTag = Lt;
function Ft(e) {
  return e.type === K.ElementType.CDATA;
}
T.isCDATA = Ft;
function zt(e) {
  return e.type === K.ElementType.Text;
}
T.isText = zt;
function jt(e) {
  return e.type === K.ElementType.Comment;
}
T.isComment = jt;
function Ht(e) {
  return e.type === K.ElementType.Directive;
}
T.isDirective = Ht;
function Bt(e) {
  return e.type === K.ElementType.Root;
}
T.isDocument = Bt;
function ur(e) {
  return Object.prototype.hasOwnProperty.call(e, "children");
}
T.hasChildren = ur;
function rt(e, t) {
  t === void 0 && (t = !1);
  var r;
  if (zt(e))
    r = new At(e.data);
  else if (jt(e))
    r = new It(e.data);
  else if (Lt(e)) {
    var n = t ? We(e.children) : [], s = new Nt(e.name, Ce({}, e.attribs), n);
    n.forEach(function(o) {
      return o.parent = s;
    }), e.namespace != null && (s.namespace = e.namespace), e["x-attribsNamespace"] && (s["x-attribsNamespace"] = Ce({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (s["x-attribsPrefix"] = Ce({}, e["x-attribsPrefix"])), r = s;
  } else if (Ft(e)) {
    var n = t ? We(e.children) : [], l = new Pt(n);
    n.forEach(function(h) {
      return h.parent = l;
    }), r = l;
  } else if (Bt(e)) {
    var n = t ? We(e.children) : [], f = new Mt(n);
    n.forEach(function(h) {
      return h.parent = f;
    }), e["x-mode"] && (f["x-mode"] = e["x-mode"]), r = f;
  } else if (Ht(e)) {
    var u = new Dt(e.name, e.data);
    e["x-name"] != null && (u["x-name"] = e["x-name"], u["x-publicId"] = e["x-publicId"], u["x-systemId"] = e["x-systemId"]), r = u;
  } else
    throw new Error("Not implemented yet: ".concat(e.type));
  return r.startIndex = e.startIndex, r.endIndex = e.endIndex, e.sourceCodeLocation != null && (r.sourceCodeLocation = e.sourceCodeLocation), r;
}
T.cloneNode = rt;
function We(e) {
  for (var t = e.map(function(n) {
    return rt(n, !0);
  }), r = 1; r < t.length; r++)
    t[r].prev = t[r - 1], t[r - 1].next = t[r];
  return t;
}
(function(e) {
  var t = re && re.__createBinding || (Object.create ? function(u, o, h, _) {
    _ === void 0 && (_ = h);
    var x = Object.getOwnPropertyDescriptor(o, h);
    (!x || ("get" in x ? !o.__esModule : x.writable || x.configurable)) && (x = { enumerable: !0, get: function() {
      return o[h];
    } }), Object.defineProperty(u, _, x);
  } : function(u, o, h, _) {
    _ === void 0 && (_ = h), u[_] = o[h];
  }), r = re && re.__exportStar || function(u, o) {
    for (var h in u)
      h !== "default" && !Object.prototype.hasOwnProperty.call(o, h) && t(o, u, h);
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.DomHandler = void 0;
  var n = et, s = T;
  r(T, e);
  var l = {
    withStartIndices: !1,
    withEndIndices: !1,
    xmlMode: !1
  }, f = (
    /** @class */
    function() {
      function u(o, h, _) {
        this.dom = [], this.root = new s.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof h == "function" && (_ = h, h = l), typeof o == "object" && (h = o, o = void 0), this.callback = o ?? null, this.options = h ?? l, this.elementCB = _ ?? null;
      }
      return u.prototype.onparserinit = function(o) {
        this.parser = o;
      }, u.prototype.onreset = function() {
        this.dom = [], this.root = new s.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
      }, u.prototype.onend = function() {
        this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
      }, u.prototype.onerror = function(o) {
        this.handleCallback(o);
      }, u.prototype.onclosetag = function() {
        this.lastNode = null;
        var o = this.tagStack.pop();
        this.options.withEndIndices && (o.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(o);
      }, u.prototype.onopentag = function(o, h) {
        var _ = this.options.xmlMode ? n.ElementType.Tag : void 0, x = new s.Element(o, h, void 0, _);
        this.addNode(x), this.tagStack.push(x);
      }, u.prototype.ontext = function(o) {
        var h = this.lastNode;
        if (h && h.type === n.ElementType.Text)
          h.data += o, this.options.withEndIndices && (h.endIndex = this.parser.endIndex);
        else {
          var _ = new s.Text(o);
          this.addNode(_), this.lastNode = _;
        }
      }, u.prototype.oncomment = function(o) {
        if (this.lastNode && this.lastNode.type === n.ElementType.Comment) {
          this.lastNode.data += o;
          return;
        }
        var h = new s.Comment(o);
        this.addNode(h), this.lastNode = h;
      }, u.prototype.oncommentend = function() {
        this.lastNode = null;
      }, u.prototype.oncdatastart = function() {
        var o = new s.Text(""), h = new s.CDATA([o]);
        this.addNode(h), o.parent = h, this.lastNode = o;
      }, u.prototype.oncdataend = function() {
        this.lastNode = null;
      }, u.prototype.onprocessinginstruction = function(o, h) {
        var _ = new s.ProcessingInstruction(o, h);
        this.addNode(_);
      }, u.prototype.handleCallback = function(o) {
        if (typeof this.callback == "function")
          this.callback(o, this.dom);
        else if (o)
          throw o;
      }, u.prototype.addNode = function(o) {
        var h = this.tagStack[this.tagStack.length - 1], _ = h.children[h.children.length - 1];
        this.options.withStartIndices && (o.startIndex = this.parser.startIndex), this.options.withEndIndices && (o.endIndex = this.parser.endIndex), h.children.push(o), _ && (o.prev = _, _.next = o), o.parent = h, this.lastNode = null;
      }, u;
    }()
  );
  e.DomHandler = f, e.default = f;
})(Qe);
var ht = "html", dt = "head", Re = "body", cr = /<([a-zA-Z]+[0-9]?)/, pt = /<head[^]*>/i, vt = /<body[^]*>/i, Ie = function() {
  throw new Error(
    "This browser does not support `document.implementation.createHTMLDocument`"
  );
}, Ke = function() {
  throw new Error(
    "This browser does not support `DOMParser.prototype.parseFromString`"
  );
}, mt = typeof window == "object" && window.DOMParser;
if (typeof mt == "function") {
  var fr = new mt(), hr = "text/html";
  Ke = function(e, t) {
    return t && (e = "<" + t + ">" + e + "</" + t + ">"), fr.parseFromString(e, hr);
  }, Ie = Ke;
}
if (typeof document == "object" && document.implementation) {
  var Ae = document.implementation.createHTMLDocument();
  Ie = function(e, t) {
    if (t) {
      var r = Ae.documentElement.querySelector(t);
      return r.innerHTML = e, Ae;
    }
    return Ae.documentElement.innerHTML = e, Ae;
  };
}
var $e = typeof document == "object" ? document.createElement("template") : {}, Je;
$e.content && (Je = function(e) {
  return $e.innerHTML = e, $e.content.childNodes;
});
function dr(e) {
  var t, r = e.match(cr);
  r && r[1] && (t = r[1].toLowerCase());
  var n, s, l;
  switch (t) {
    case ht:
      return n = Ke(e), pt.test(e) || (s = n.querySelector(dt), s && s.parentNode.removeChild(s)), vt.test(e) || (s = n.querySelector(Re), s && s.parentNode.removeChild(s)), n.querySelectorAll(ht);
    case dt:
    case Re:
      return n = Ie(e), l = n.querySelectorAll(t), vt.test(e) && pt.test(e) ? l[0].parentNode.childNodes : l;
    default:
      return Je ? Je(e) : (s = Ie(e, Re).querySelector(Re), s.childNodes);
  }
}
var pr = dr, nt = {}, Ut = {};
Ut.CASE_SENSITIVE_TAG_NAMES = [
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussainBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "linearGradient",
  "radialGradient",
  "textPath"
];
var Fe = Qe, vr = Ut, gt = vr.CASE_SENSITIVE_TAG_NAMES, mr = Fe.Comment, gr = Fe.Element, yr = Fe.ProcessingInstruction, _r = Fe.Text, Gt = {}, Xe;
for (var Ye = 0, br = gt.length; Ye < br; Ye++)
  Xe = gt[Ye], Gt[Xe.toLowerCase()] = Xe;
function Er(e) {
  return Gt[e];
}
function qt(e) {
  for (var t = {}, r, n = 0, s = e.length; n < s; n++)
    r = e[n], t[r.name] = r.value;
  return t;
}
function wr(e) {
  e = e.toLowerCase();
  var t = Er(e);
  return t || e;
}
function Vt(e, t, r) {
  t = t || null;
  for (var n = [], s, l = 0, f = e.length; l < f; l++) {
    var u = e[l], o;
    switch (u.nodeType) {
      case 1:
        s = wr(u.nodeName), o = new gr(s, qt(u.attributes)), o.children = Vt(
          // template children are on content
          s === "template" ? u.content.childNodes : u.childNodes,
          o
        );
        break;
      case 3:
        o = new _r(u.nodeValue);
        break;
      case 8:
        o = new mr(u.nodeValue);
        break;
      default:
        continue;
    }
    var h = n[l - 1] || null;
    h && (h.next = o), o.parent = t, o.prev = h, o.next = null, n.push(o);
  }
  return r && (o = new yr(
    r.substring(0, r.indexOf(" ")).toLowerCase(),
    r
  ), o.next = n[0] || null, o.parent = t, n.unshift(o), n[1] && (n[1].prev = n[0])), n;
}
nt.formatAttributes = qt;
nt.formatDOM = Vt;
var Tr = pr, Or = nt, kr = Or.formatDOM, xr = /<(![a-zA-Z\s]+)>/;
function Cr(e) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (e === "")
    return [];
  var t = e.match(xr), r;
  return t && t[1] && (r = t[1]), kr(Tr(e), null, r);
}
var Sr = Cr, ee = {}, ze = {}, Rr = 0;
ze.SAME = Rr;
var Ar = 1;
ze.CAMELCASE = Ar;
ze.possibleStandardNames = {
  accept: 0,
  acceptCharset: 1,
  "accept-charset": "acceptCharset",
  accessKey: 1,
  action: 0,
  allowFullScreen: 1,
  alt: 0,
  as: 0,
  async: 0,
  autoCapitalize: 1,
  autoComplete: 1,
  autoCorrect: 1,
  autoFocus: 1,
  autoPlay: 1,
  autoSave: 1,
  capture: 0,
  cellPadding: 1,
  cellSpacing: 1,
  challenge: 0,
  charSet: 1,
  checked: 0,
  children: 0,
  cite: 0,
  class: "className",
  classID: 1,
  className: 1,
  cols: 0,
  colSpan: 1,
  content: 0,
  contentEditable: 1,
  contextMenu: 1,
  controls: 0,
  controlsList: 1,
  coords: 0,
  crossOrigin: 1,
  dangerouslySetInnerHTML: 1,
  data: 0,
  dateTime: 1,
  default: 0,
  defaultChecked: 1,
  defaultValue: 1,
  defer: 0,
  dir: 0,
  disabled: 0,
  disablePictureInPicture: 1,
  disableRemotePlayback: 1,
  download: 0,
  draggable: 0,
  encType: 1,
  enterKeyHint: 1,
  for: "htmlFor",
  form: 0,
  formMethod: 1,
  formAction: 1,
  formEncType: 1,
  formNoValidate: 1,
  formTarget: 1,
  frameBorder: 1,
  headers: 0,
  height: 0,
  hidden: 0,
  high: 0,
  href: 0,
  hrefLang: 1,
  htmlFor: 1,
  httpEquiv: 1,
  "http-equiv": "httpEquiv",
  icon: 0,
  id: 0,
  innerHTML: 1,
  inputMode: 1,
  integrity: 0,
  is: 0,
  itemID: 1,
  itemProp: 1,
  itemRef: 1,
  itemScope: 1,
  itemType: 1,
  keyParams: 1,
  keyType: 1,
  kind: 0,
  label: 0,
  lang: 0,
  list: 0,
  loop: 0,
  low: 0,
  manifest: 0,
  marginWidth: 1,
  marginHeight: 1,
  max: 0,
  maxLength: 1,
  media: 0,
  mediaGroup: 1,
  method: 0,
  min: 0,
  minLength: 1,
  multiple: 0,
  muted: 0,
  name: 0,
  noModule: 1,
  nonce: 0,
  noValidate: 1,
  open: 0,
  optimum: 0,
  pattern: 0,
  placeholder: 0,
  playsInline: 1,
  poster: 0,
  preload: 0,
  profile: 0,
  radioGroup: 1,
  readOnly: 1,
  referrerPolicy: 1,
  rel: 0,
  required: 0,
  reversed: 0,
  role: 0,
  rows: 0,
  rowSpan: 1,
  sandbox: 0,
  scope: 0,
  scoped: 0,
  scrolling: 0,
  seamless: 0,
  selected: 0,
  shape: 0,
  size: 0,
  sizes: 0,
  span: 0,
  spellCheck: 1,
  src: 0,
  srcDoc: 1,
  srcLang: 1,
  srcSet: 1,
  start: 0,
  step: 0,
  style: 0,
  summary: 0,
  tabIndex: 1,
  target: 0,
  title: 0,
  type: 0,
  useMap: 1,
  value: 0,
  width: 0,
  wmode: 0,
  wrap: 0,
  about: 0,
  accentHeight: 1,
  "accent-height": "accentHeight",
  accumulate: 0,
  additive: 0,
  alignmentBaseline: 1,
  "alignment-baseline": "alignmentBaseline",
  allowReorder: 1,
  alphabetic: 0,
  amplitude: 0,
  arabicForm: 1,
  "arabic-form": "arabicForm",
  ascent: 0,
  attributeName: 1,
  attributeType: 1,
  autoReverse: 1,
  azimuth: 0,
  baseFrequency: 1,
  baselineShift: 1,
  "baseline-shift": "baselineShift",
  baseProfile: 1,
  bbox: 0,
  begin: 0,
  bias: 0,
  by: 0,
  calcMode: 1,
  capHeight: 1,
  "cap-height": "capHeight",
  clip: 0,
  clipPath: 1,
  "clip-path": "clipPath",
  clipPathUnits: 1,
  clipRule: 1,
  "clip-rule": "clipRule",
  color: 0,
  colorInterpolation: 1,
  "color-interpolation": "colorInterpolation",
  colorInterpolationFilters: 1,
  "color-interpolation-filters": "colorInterpolationFilters",
  colorProfile: 1,
  "color-profile": "colorProfile",
  colorRendering: 1,
  "color-rendering": "colorRendering",
  contentScriptType: 1,
  contentStyleType: 1,
  cursor: 0,
  cx: 0,
  cy: 0,
  d: 0,
  datatype: 0,
  decelerate: 0,
  descent: 0,
  diffuseConstant: 1,
  direction: 0,
  display: 0,
  divisor: 0,
  dominantBaseline: 1,
  "dominant-baseline": "dominantBaseline",
  dur: 0,
  dx: 0,
  dy: 0,
  edgeMode: 1,
  elevation: 0,
  enableBackground: 1,
  "enable-background": "enableBackground",
  end: 0,
  exponent: 0,
  externalResourcesRequired: 1,
  fill: 0,
  fillOpacity: 1,
  "fill-opacity": "fillOpacity",
  fillRule: 1,
  "fill-rule": "fillRule",
  filter: 0,
  filterRes: 1,
  filterUnits: 1,
  floodOpacity: 1,
  "flood-opacity": "floodOpacity",
  floodColor: 1,
  "flood-color": "floodColor",
  focusable: 0,
  fontFamily: 1,
  "font-family": "fontFamily",
  fontSize: 1,
  "font-size": "fontSize",
  fontSizeAdjust: 1,
  "font-size-adjust": "fontSizeAdjust",
  fontStretch: 1,
  "font-stretch": "fontStretch",
  fontStyle: 1,
  "font-style": "fontStyle",
  fontVariant: 1,
  "font-variant": "fontVariant",
  fontWeight: 1,
  "font-weight": "fontWeight",
  format: 0,
  from: 0,
  fx: 0,
  fy: 0,
  g1: 0,
  g2: 0,
  glyphName: 1,
  "glyph-name": "glyphName",
  glyphOrientationHorizontal: 1,
  "glyph-orientation-horizontal": "glyphOrientationHorizontal",
  glyphOrientationVertical: 1,
  "glyph-orientation-vertical": "glyphOrientationVertical",
  glyphRef: 1,
  gradientTransform: 1,
  gradientUnits: 1,
  hanging: 0,
  horizAdvX: 1,
  "horiz-adv-x": "horizAdvX",
  horizOriginX: 1,
  "horiz-origin-x": "horizOriginX",
  ideographic: 0,
  imageRendering: 1,
  "image-rendering": "imageRendering",
  in2: 0,
  in: 0,
  inlist: 0,
  intercept: 0,
  k1: 0,
  k2: 0,
  k3: 0,
  k4: 0,
  k: 0,
  kernelMatrix: 1,
  kernelUnitLength: 1,
  kerning: 0,
  keyPoints: 1,
  keySplines: 1,
  keyTimes: 1,
  lengthAdjust: 1,
  letterSpacing: 1,
  "letter-spacing": "letterSpacing",
  lightingColor: 1,
  "lighting-color": "lightingColor",
  limitingConeAngle: 1,
  local: 0,
  markerEnd: 1,
  "marker-end": "markerEnd",
  markerHeight: 1,
  markerMid: 1,
  "marker-mid": "markerMid",
  markerStart: 1,
  "marker-start": "markerStart",
  markerUnits: 1,
  markerWidth: 1,
  mask: 0,
  maskContentUnits: 1,
  maskUnits: 1,
  mathematical: 0,
  mode: 0,
  numOctaves: 1,
  offset: 0,
  opacity: 0,
  operator: 0,
  order: 0,
  orient: 0,
  orientation: 0,
  origin: 0,
  overflow: 0,
  overlinePosition: 1,
  "overline-position": "overlinePosition",
  overlineThickness: 1,
  "overline-thickness": "overlineThickness",
  paintOrder: 1,
  "paint-order": "paintOrder",
  panose1: 0,
  "panose-1": "panose1",
  pathLength: 1,
  patternContentUnits: 1,
  patternTransform: 1,
  patternUnits: 1,
  pointerEvents: 1,
  "pointer-events": "pointerEvents",
  points: 0,
  pointsAtX: 1,
  pointsAtY: 1,
  pointsAtZ: 1,
  prefix: 0,
  preserveAlpha: 1,
  preserveAspectRatio: 1,
  primitiveUnits: 1,
  property: 0,
  r: 0,
  radius: 0,
  refX: 1,
  refY: 1,
  renderingIntent: 1,
  "rendering-intent": "renderingIntent",
  repeatCount: 1,
  repeatDur: 1,
  requiredExtensions: 1,
  requiredFeatures: 1,
  resource: 0,
  restart: 0,
  result: 0,
  results: 0,
  rotate: 0,
  rx: 0,
  ry: 0,
  scale: 0,
  security: 0,
  seed: 0,
  shapeRendering: 1,
  "shape-rendering": "shapeRendering",
  slope: 0,
  spacing: 0,
  specularConstant: 1,
  specularExponent: 1,
  speed: 0,
  spreadMethod: 1,
  startOffset: 1,
  stdDeviation: 1,
  stemh: 0,
  stemv: 0,
  stitchTiles: 1,
  stopColor: 1,
  "stop-color": "stopColor",
  stopOpacity: 1,
  "stop-opacity": "stopOpacity",
  strikethroughPosition: 1,
  "strikethrough-position": "strikethroughPosition",
  strikethroughThickness: 1,
  "strikethrough-thickness": "strikethroughThickness",
  string: 0,
  stroke: 0,
  strokeDasharray: 1,
  "stroke-dasharray": "strokeDasharray",
  strokeDashoffset: 1,
  "stroke-dashoffset": "strokeDashoffset",
  strokeLinecap: 1,
  "stroke-linecap": "strokeLinecap",
  strokeLinejoin: 1,
  "stroke-linejoin": "strokeLinejoin",
  strokeMiterlimit: 1,
  "stroke-miterlimit": "strokeMiterlimit",
  strokeWidth: 1,
  "stroke-width": "strokeWidth",
  strokeOpacity: 1,
  "stroke-opacity": "strokeOpacity",
  suppressContentEditableWarning: 1,
  suppressHydrationWarning: 1,
  surfaceScale: 1,
  systemLanguage: 1,
  tableValues: 1,
  targetX: 1,
  targetY: 1,
  textAnchor: 1,
  "text-anchor": "textAnchor",
  textDecoration: 1,
  "text-decoration": "textDecoration",
  textLength: 1,
  textRendering: 1,
  "text-rendering": "textRendering",
  to: 0,
  transform: 0,
  typeof: 0,
  u1: 0,
  u2: 0,
  underlinePosition: 1,
  "underline-position": "underlinePosition",
  underlineThickness: 1,
  "underline-thickness": "underlineThickness",
  unicode: 0,
  unicodeBidi: 1,
  "unicode-bidi": "unicodeBidi",
  unicodeRange: 1,
  "unicode-range": "unicodeRange",
  unitsPerEm: 1,
  "units-per-em": "unitsPerEm",
  unselectable: 0,
  vAlphabetic: 1,
  "v-alphabetic": "vAlphabetic",
  values: 0,
  vectorEffect: 1,
  "vector-effect": "vectorEffect",
  version: 0,
  vertAdvY: 1,
  "vert-adv-y": "vertAdvY",
  vertOriginX: 1,
  "vert-origin-x": "vertOriginX",
  vertOriginY: 1,
  "vert-origin-y": "vertOriginY",
  vHanging: 1,
  "v-hanging": "vHanging",
  vIdeographic: 1,
  "v-ideographic": "vIdeographic",
  viewBox: 1,
  viewTarget: 1,
  visibility: 0,
  vMathematical: 1,
  "v-mathematical": "vMathematical",
  vocab: 0,
  widths: 0,
  wordSpacing: 1,
  "word-spacing": "wordSpacing",
  writingMode: 1,
  "writing-mode": "writingMode",
  x1: 0,
  x2: 0,
  x: 0,
  xChannelSelector: 1,
  xHeight: 1,
  "x-height": "xHeight",
  xlinkActuate: 1,
  "xlink:actuate": "xlinkActuate",
  xlinkArcrole: 1,
  "xlink:arcrole": "xlinkArcrole",
  xlinkHref: 1,
  "xlink:href": "xlinkHref",
  xlinkRole: 1,
  "xlink:role": "xlinkRole",
  xlinkShow: 1,
  "xlink:show": "xlinkShow",
  xlinkTitle: 1,
  "xlink:title": "xlinkTitle",
  xlinkType: 1,
  "xlink:type": "xlinkType",
  xmlBase: 1,
  "xml:base": "xmlBase",
  xmlLang: 1,
  "xml:lang": "xmlLang",
  xmlns: 0,
  "xml:space": "xmlSpace",
  xmlnsXlink: 1,
  "xmlns:xlink": "xmlnsXlink",
  xmlSpace: 1,
  y1: 0,
  y2: 0,
  y: 0,
  yChannelSelector: 1,
  z: 0,
  zoomAndPan: 1
};
Object.defineProperty(ee, "__esModule", { value: !0 });
function Ir(e, t) {
  return Dr(e) || Pr(e, t) || Mr(e, t) || Nr();
}
function Dr(e) {
  if (Array.isArray(e))
    return e;
}
function Pr(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], s = !0, l = !1, f, u;
    try {
      for (r = r.call(e); !(s = (f = r.next()).done) && (n.push(f.value), !(t && n.length === t)); s = !0)
        ;
    } catch (o) {
      l = !0, u = o;
    } finally {
      try {
        !s && r.return != null && r.return();
      } finally {
        if (l)
          throw u;
      }
    }
    return n;
  }
}
function Mr(e, t) {
  if (e) {
    if (typeof e == "string")
      return yt(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return yt(e, t);
  }
}
function yt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Nr() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Wt = 0, ge = 1, je = 2, He = 3, it = 4, $t = 5, Xt = 6;
function Lr(e) {
  return V.hasOwnProperty(e) ? V[e] : null;
}
function Y(e, t, r, n, s, l, f) {
  this.acceptsBooleans = t === je || t === He || t === it, this.attributeName = n, this.attributeNamespace = s, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = f;
}
var V = {}, Fr = [
  "children",
  "dangerouslySetInnerHTML",
  // TODO: This prevents the assignment of defaultValue to regular
  // elements (not just inputs). Now that ReactDOMInput assigns to the
  // defaultValue property -- do we need this?
  "defaultValue",
  "defaultChecked",
  "innerHTML",
  "suppressContentEditableWarning",
  "suppressHydrationWarning",
  "style"
];
Fr.forEach(function(e) {
  V[e] = new Y(
    e,
    Wt,
    !1,
    // mustUseProperty
    e,
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = Ir(e, 2), r = t[0], n = t[1];
  V[r] = new Y(
    r,
    ge,
    !1,
    // mustUseProperty
    n,
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  V[e] = new Y(
    e,
    je,
    !1,
    // mustUseProperty
    e.toLowerCase(),
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  V[e] = new Y(
    e,
    je,
    !1,
    // mustUseProperty
    e,
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
[
  "allowFullScreen",
  "async",
  // Note: there is a special case that prevents it from being written to the DOM
  // on the client side because the browsers are inconsistent. Instead we call focus().
  "autoFocus",
  "autoPlay",
  "controls",
  "default",
  "defer",
  "disabled",
  "disablePictureInPicture",
  "disableRemotePlayback",
  "formNoValidate",
  "hidden",
  "loop",
  "noModule",
  "noValidate",
  "open",
  "playsInline",
  "readOnly",
  "required",
  "reversed",
  "scoped",
  "seamless",
  // Microdata
  "itemScope"
].forEach(function(e) {
  V[e] = new Y(
    e,
    He,
    !1,
    // mustUseProperty
    e.toLowerCase(),
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
[
  "checked",
  // Note: `option.selected` is not updated if `select.multiple` is
  // disabled with `removeAttribute`. We have special logic for handling this.
  "multiple",
  "muted",
  "selected"
  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(function(e) {
  V[e] = new Y(
    e,
    He,
    !0,
    // mustUseProperty
    e,
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
[
  "capture",
  "download"
  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(function(e) {
  V[e] = new Y(
    e,
    it,
    !1,
    // mustUseProperty
    e,
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
[
  "cols",
  "rows",
  "size",
  "span"
  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(function(e) {
  V[e] = new Y(
    e,
    Xt,
    !1,
    // mustUseProperty
    e,
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
["rowSpan", "start"].forEach(function(e) {
  V[e] = new Y(
    e,
    $t,
    !1,
    // mustUseProperty
    e.toLowerCase(),
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
var at = /[\-\:]([a-z])/g, ot = function(t) {
  return t[1].toUpperCase();
};
[
  "accent-height",
  "alignment-baseline",
  "arabic-form",
  "baseline-shift",
  "cap-height",
  "clip-path",
  "clip-rule",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "dominant-baseline",
  "enable-background",
  "fill-opacity",
  "fill-rule",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "glyph-name",
  "glyph-orientation-horizontal",
  "glyph-orientation-vertical",
  "horiz-adv-x",
  "horiz-origin-x",
  "image-rendering",
  "letter-spacing",
  "lighting-color",
  "marker-end",
  "marker-mid",
  "marker-start",
  "overline-position",
  "overline-thickness",
  "paint-order",
  "panose-1",
  "pointer-events",
  "rendering-intent",
  "shape-rendering",
  "stop-color",
  "stop-opacity",
  "strikethrough-position",
  "strikethrough-thickness",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  "text-anchor",
  "text-decoration",
  "text-rendering",
  "underline-position",
  "underline-thickness",
  "unicode-bidi",
  "unicode-range",
  "units-per-em",
  "v-alphabetic",
  "v-hanging",
  "v-ideographic",
  "v-mathematical",
  "vector-effect",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "word-spacing",
  "writing-mode",
  "xmlns:xlink",
  "x-height"
  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(function(e) {
  var t = e.replace(at, ot);
  V[t] = new Y(
    t,
    ge,
    !1,
    // mustUseProperty
    e,
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
[
  "xlink:actuate",
  "xlink:arcrole",
  "xlink:role",
  "xlink:show",
  "xlink:title",
  "xlink:type"
  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(function(e) {
  var t = e.replace(at, ot);
  V[t] = new Y(
    t,
    ge,
    !1,
    // mustUseProperty
    e,
    "http://www.w3.org/1999/xlink",
    !1,
    // sanitizeURL
    !1
  );
});
[
  "xml:base",
  "xml:lang",
  "xml:space"
  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach(function(e) {
  var t = e.replace(at, ot);
  V[t] = new Y(
    t,
    ge,
    !1,
    // mustUseProperty
    e,
    "http://www.w3.org/XML/1998/namespace",
    !1,
    // sanitizeURL
    !1
  );
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  V[e] = new Y(
    e,
    ge,
    !1,
    // mustUseProperty
    e.toLowerCase(),
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
  );
});
var zr = "xlinkHref";
V[zr] = new Y(
  "xlinkHref",
  ge,
  !1,
  // mustUseProperty
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  // sanitizeURL
  !1
);
["src", "href", "action", "formAction"].forEach(function(e) {
  V[e] = new Y(
    e,
    ge,
    !1,
    // mustUseProperty
    e.toLowerCase(),
    // attributeName
    null,
    // attributeNamespace
    !0,
    // sanitizeURL
    !0
  );
});
var st = ze, jr = st.CAMELCASE, Hr = st.SAME, _t = st.possibleStandardNames, Br = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ur = Br + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Gr = RegExp.prototype.test.bind(
  // eslint-disable-next-line no-misleading-character-class
  new RegExp("^(data|aria)-[" + Ur + "]*$")
), qr = Object.keys(_t).reduce(function(e, t) {
  var r = _t[t];
  return r === Hr ? e[t] = t : r === jr ? e[t.toLowerCase()] = t : e[t] = r, e;
}, {});
ee.BOOLEAN = He;
ee.BOOLEANISH_STRING = je;
ee.NUMERIC = $t;
ee.OVERLOADED_BOOLEAN = it;
ee.POSITIVE_NUMERIC = Xt;
ee.RESERVED = Wt;
ee.STRING = ge;
ee.getPropertyInfo = Lr;
ee.isCustomAttribute = Gr;
ee.possibleStandardNames = qr;
var Yt = {}, lt = { exports: {} }, bt = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, Vr = /\n/g, Wr = /^\s*/, $r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, Xr = /^:\s*/, Yr = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, Kr = /^[;\s]*/, Jr = /^\s+|\s+$/g, Zr = `
`, Et = "/", wt = "*", be = "", Qr = "comment", en = "declaration", tn = function(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e)
    return [];
  t = t || {};
  var r = 1, n = 1;
  function s(w) {
    var E = w.match(Vr);
    E && (r += E.length);
    var U = w.lastIndexOf(Zr);
    n = ~U ? w.length - U : n + w.length;
  }
  function l() {
    var w = { line: r, column: n };
    return function(E) {
      return E.position = new f(w), h(), E;
    };
  }
  function f(w) {
    this.start = w, this.end = { line: r, column: n }, this.source = t.source;
  }
  f.prototype.content = e;
  function u(w) {
    var E = new Error(
      t.source + ":" + r + ":" + n + ": " + w
    );
    if (E.reason = w, E.filename = t.source, E.line = r, E.column = n, E.source = e, !t.silent)
      throw E;
  }
  function o(w) {
    var E = w.exec(e);
    if (E) {
      var U = E[0];
      return s(U), e = e.slice(U.length), E;
    }
  }
  function h() {
    o(Wr);
  }
  function _(w) {
    var E;
    for (w = w || []; E = x(); )
      E !== !1 && w.push(E);
    return w;
  }
  function x() {
    var w = l();
    if (!(Et != e.charAt(0) || wt != e.charAt(1))) {
      for (var E = 2; be != e.charAt(E) && (wt != e.charAt(E) || Et != e.charAt(E + 1)); )
        ++E;
      if (E += 2, be === e.charAt(E - 1))
        return u("End of comment missing");
      var U = e.slice(2, E - 2);
      return n += 2, s(U), e = e.slice(E), n += 2, w({
        type: Qr,
        comment: U
      });
    }
  }
  function ne() {
    var w = l(), E = o($r);
    if (E) {
      if (x(), !o(Xr))
        return u("property missing ':'");
      var U = o(Yr), ke = w({
        type: en,
        property: Tt(E[0].replace(bt, be)),
        value: U ? Tt(U[0].replace(bt, be)) : be
      });
      return o(Kr), ke;
    }
  }
  function se() {
    var w = [];
    _(w);
    for (var E; E = ne(); )
      E !== !1 && (w.push(E), _(w));
    return w;
  }
  return h(), se();
};
function Tt(e) {
  return e ? e.replace(Jr, be) : be;
}
var rn = tn;
function Kt(e, t) {
  var r = null;
  if (!e || typeof e != "string")
    return r;
  for (var n, s = rn(e), l = typeof t == "function", f, u, o = 0, h = s.length; o < h; o++)
    n = s[o], f = n.property, u = n.value, l ? t(f, u, n) : u && (r || (r = {}), r[f] = u);
  return r;
}
lt.exports = Kt;
lt.exports.default = Kt;
var nn = lt.exports, Be = {};
Be.__esModule = !0;
Be.camelCase = void 0;
var an = /^--[a-zA-Z0-9-]+$/, on = /-([a-z])/g, sn = /^[^-]+$/, ln = /^-(webkit|moz|ms|o|khtml)-/, un = /^-(ms)-/, cn = function(e) {
  return !e || sn.test(e) || an.test(e);
}, fn = function(e, t) {
  return t.toUpperCase();
}, Ot = function(e, t) {
  return "".concat(t, "-");
}, hn = function(e, t) {
  return t === void 0 && (t = {}), cn(e) ? e : (e = e.toLowerCase(), t.reactCompat ? e = e.replace(un, Ot) : e = e.replace(ln, Ot), e.replace(on, fn));
};
Be.camelCase = hn;
(function(e) {
  var t = re && re.__importDefault || function(l) {
    return l && l.__esModule ? l : { default: l };
  };
  e.__esModule = !0;
  var r = t(nn), n = Be;
  function s(l, f) {
    var u = {};
    return !l || typeof l != "string" || (0, r.default)(l, function(o, h) {
      o && h && (u[(0, n.camelCase)(o, f)] = h);
    }), u;
  }
  e.default = s;
})(Yt);
var dn = Rt, pn = Yt.default;
function vn(e, t) {
  if (!e || typeof e != "object")
    throw new TypeError("First argument must be an object");
  var r, n, s = typeof t == "function", l = {}, f = {};
  for (r in e) {
    if (n = e[r], s && (l = t(r, n), l && l.length === 2)) {
      f[l[0]] = l[1];
      continue;
    }
    typeof n == "string" && (f[n] = r);
  }
  return f;
}
function mn(e, t) {
  if (e.indexOf("-") === -1)
    return t && typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var gn = { reactCompat: !0 };
function yn(e, t) {
  if (e != null)
    try {
      t.style = pn(e, gn);
    } catch {
      t.style = {};
    }
}
var _n = dn.version.split(".")[0] >= 16, Jt = /* @__PURE__ */ new Set([
  "tr",
  "tbody",
  "thead",
  "tfoot",
  "colgroup",
  "table",
  "head",
  "html",
  "frameset"
]);
function bn(e) {
  return !Jt.has(e.name);
}
var Zt = {
  PRESERVE_CUSTOM_ATTRIBUTES: _n,
  invertObject: vn,
  isCustomComponent: mn,
  setStyleProp: yn,
  canTextBeChildOfNode: bn,
  elementsWithNoTextChildren: Jt
}, xe = ee, kt = Zt, En = ["checked", "value"], wn = ["input", "select", "textarea"], Tn = {
  reset: !0,
  submit: !0
}, Qt = function(t, r) {
  t = t || {};
  var n, s, l, f, u, o = {}, h = t.type && Tn[t.type];
  for (n in t) {
    if (l = t[n], xe.isCustomAttribute(n)) {
      o[n] = l;
      continue;
    }
    if (s = n.toLowerCase(), f = xt(s), f) {
      switch (u = xe.getPropertyInfo(f), En.indexOf(f) !== -1 && wn.indexOf(r) !== -1 && !h && (f = xt("default" + s)), o[f] = l, u && u.type) {
        case xe.BOOLEAN:
          o[f] = !0;
          break;
        case xe.OVERLOADED_BOOLEAN:
          l === "" && (o[f] = !0);
          break;
      }
      continue;
    }
    kt.PRESERVE_CUSTOM_ATTRIBUTES && (o[n] = l);
  }
  return kt.setStyleProp(t.style, o), o;
};
function xt(e) {
  return xe.possibleStandardNames[e];
}
var On = Rt, kn = Qt, De = Zt, xn = De.setStyleProp, Cn = De.canTextBeChildOfNode;
function er(e, t) {
  t = t || {};
  for (var r = t.library || On, n = r.cloneElement, s = r.createElement, l = r.isValidElement, f = [], u, o, h = typeof t.replace == "function", _, x, ne, se = t.trim, w = 0, E = e.length; w < E; w++) {
    if (u = e[w], h && (_ = t.replace(u), l(_))) {
      E > 1 && (_ = n(_, {
        key: _.key || w
      })), f.push(_);
      continue;
    }
    if (u.type === "text") {
      if (o = !u.data.trim().length, o && u.parent && !Cn(u.parent) || se && o)
        continue;
      f.push(u.data);
      continue;
    }
    switch (x = u.attribs, Sn(u) ? xn(x.style, x) : x && (x = kn(x, u.name)), ne = null, u.type) {
      case "script":
      case "style":
        u.children[0] && (x.dangerouslySetInnerHTML = {
          __html: u.children[0].data
        });
        break;
      case "tag":
        u.name === "textarea" && u.children[0] ? x.defaultValue = u.children[0].data : u.children && u.children.length && (ne = er(u.children, t));
        break;
      default:
        continue;
    }
    E > 1 && (x.key = w), f.push(s(u.name, x, ne));
  }
  return f.length === 1 ? f[0] : f;
}
function Sn(e) {
  return De.PRESERVE_CUSTOM_ATTRIBUTES && e.type === "tag" && De.isCustomComponent(e.name, e.attribs);
}
var Rn = er, Ue = Qe, Te = Sr, An = Qt, tr = Rn;
Te = /* istanbul ignore next */
typeof Te.default == "function" ? Te.default : Te;
var In = { lowerCaseAttributeNames: !1 };
function oe(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  return e === "" ? [] : (t = t || {}, tr(
    Te(e, t.htmlparser2 || In),
    t
  ));
}
oe.domToReact = tr;
oe.htmlToDOM = Te;
oe.attributesToProps = An;
oe.Comment = Ue.Comment;
oe.Element = Ue.Element;
oe.ProcessingInstruction = Ue.ProcessingInstruction;
oe.Text = Ue.Text;
var Dn = oe;
oe.default = oe;
const Ee = /* @__PURE__ */ St(Dn);
Ee.domToReact;
Ee.htmlToDOM;
Ee.attributesToProps;
Ee.Comment;
Ee.Element;
Ee.ProcessingInstruction;
Ee.Text;
var rr = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, r) {
    var n = -1;
    return t.some(function(s, l) {
      return s[0] === r ? (n = l, !0) : !1;
    }), n;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(r) {
        var n = e(this.__entries__, r), s = this.__entries__[n];
        return s && s[1];
      }, t.prototype.set = function(r, n) {
        var s = e(this.__entries__, r);
        ~s ? this.__entries__[s][1] = n : this.__entries__.push([r, n]);
      }, t.prototype.delete = function(r) {
        var n = this.__entries__, s = e(n, r);
        ~s && n.splice(s, 1);
      }, t.prototype.has = function(r) {
        return !!~e(this.__entries__, r);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(r, n) {
        n === void 0 && (n = null);
        for (var s = 0, l = this.__entries__; s < l.length; s++) {
          var f = l[s];
          r.call(n, f[1], f[0]);
        }
      }, t;
    }()
  );
}(), Ze = typeof window < "u" && typeof document < "u" && window.document === document, Pe = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Pn = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Pe) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), Mn = 2;
function Nn(e, t) {
  var r = !1, n = !1, s = 0;
  function l() {
    r && (r = !1, e()), n && u();
  }
  function f() {
    Pn(l);
  }
  function u() {
    var o = Date.now();
    if (r) {
      if (o - s < Mn)
        return;
      n = !0;
    } else
      r = !0, n = !1, setTimeout(f, t);
    s = o;
  }
  return u;
}
var Ln = 20, Fn = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], zn = typeof MutationObserver < "u", jn = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Nn(this.refresh.bind(this), Ln);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var r = this.observers_, n = r.indexOf(t);
      ~n && r.splice(n, 1), !r.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(r) {
        return r.gatherActive(), r.hasActive();
      });
      return t.forEach(function(r) {
        return r.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !Ze || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), zn ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Ze || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var r = t.propertyName, n = r === void 0 ? "" : r, s = Fn.some(function(l) {
        return !!~n.indexOf(l);
      });
      s && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), nr = function(e, t) {
  for (var r = 0, n = Object.keys(t); r < n.length; r++) {
    var s = n[r];
    Object.defineProperty(e, s, {
      value: t[s],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, Oe = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Pe;
}, ir = Ge(0, 0, 0, 0);
function Me(e) {
  return parseFloat(e) || 0;
}
function Ct(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return t.reduce(function(n, s) {
    var l = e["border-" + s + "-width"];
    return n + Me(l);
  }, 0);
}
function Hn(e) {
  for (var t = ["top", "right", "bottom", "left"], r = {}, n = 0, s = t; n < s.length; n++) {
    var l = s[n], f = e["padding-" + l];
    r[l] = Me(f);
  }
  return r;
}
function Bn(e) {
  var t = e.getBBox();
  return Ge(0, 0, t.width, t.height);
}
function Un(e) {
  var t = e.clientWidth, r = e.clientHeight;
  if (!t && !r)
    return ir;
  var n = Oe(e).getComputedStyle(e), s = Hn(n), l = s.left + s.right, f = s.top + s.bottom, u = Me(n.width), o = Me(n.height);
  if (n.boxSizing === "border-box" && (Math.round(u + l) !== t && (u -= Ct(n, "left", "right") + l), Math.round(o + f) !== r && (o -= Ct(n, "top", "bottom") + f)), !qn(e)) {
    var h = Math.round(u + l) - t, _ = Math.round(o + f) - r;
    Math.abs(h) !== 1 && (u -= h), Math.abs(_) !== 1 && (o -= _);
  }
  return Ge(s.left, s.top, u, o);
}
var Gn = function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof Oe(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof Oe(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function qn(e) {
  return e === Oe(e).document.documentElement;
}
function Vn(e) {
  return Ze ? Gn(e) ? Bn(e) : Un(e) : ir;
}
function Wn(e) {
  var t = e.x, r = e.y, n = e.width, s = e.height, l = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, f = Object.create(l.prototype);
  return nr(f, {
    x: t,
    y: r,
    width: n,
    height: s,
    top: r,
    right: t + n,
    bottom: s + r,
    left: t
  }), f;
}
function Ge(e, t, r, n) {
  return { x: e, y: t, width: r, height: n };
}
var $n = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ge(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = Vn(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), Xn = (
  /** @class */
  function() {
    function e(t, r) {
      var n = Wn(r);
      nr(this, { target: t, contentRect: n });
    }
    return e;
  }()
), Yn = (
  /** @class */
  function() {
    function e(t, r, n) {
      if (this.activeObservations_ = [], this.observations_ = new rr(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = r, this.callbackCtx_ = n;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Oe(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) || (r.set(t, new $n(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Oe(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) && (r.delete(t), r.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(r) {
        r.isActive() && t.activeObservations_.push(r);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, r = this.activeObservations_.map(function(n) {
          return new Xn(n.target, n.broadcastRect());
        });
        this.callback_.call(t, r, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), ar = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new rr(), or = (
  /** @class */
  function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var r = jn.getInstance(), n = new Yn(t, r, this);
      ar.set(this, n);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  or.prototype[e] = function() {
    var t;
    return (t = ar.get(this))[e].apply(t, arguments);
  };
});
var ei = function() {
  return typeof Pe.ResizeObserver < "u" ? Pe.ResizeObserver : or;
}();
function ti(e) {
  let t = "lg";
  const r = {
    lg: 1200,
    md: 992,
    sm: 768,
    xs: 576,
    xxs: 350
  };
  if (e > 1200)
    return t;
  for (let n in r)
    e <= r[n] && (t = n);
  return t;
}
var sr = { exports: {} };
/* @license
Papa Parse
v5.4.0
https://github.com/mholt/PapaParse
License: MIT
*/
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(re, function r() {
    var n = typeof self < "u" ? self : typeof window < "u" ? window : n !== void 0 ? n : {}, s = !n.document && !!n.postMessage, l = n.IS_PAPA_WORKER || !1, f = {}, u = 0, o = { parse: function(a, i) {
      var c = (i = i || {}).dynamicTyping || !1;
      if (S(c) && (i.dynamicTypingFunction = c, c = {}), i.dynamicTyping = c, i.transform = !!S(i.transform) && i.transform, i.worker && o.WORKERS_SUPPORTED) {
        var d = function() {
          if (!o.WORKERS_SUPPORTED)
            return !1;
          var b = (G = n.URL || n.webkitURL || null, M = r.toString(), o.BLOB_URL || (o.BLOB_URL = G.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", M, ")();"], { type: "text/javascript" })))), O = new n.Worker(b), G, M;
          return O.onmessage = lr, O.id = u++, f[O.id] = O;
        }();
        return d.userStep = i.step, d.userChunk = i.chunk, d.userComplete = i.complete, d.userError = i.error, i.step = S(i.step), i.chunk = S(i.chunk), i.complete = S(i.complete), i.error = S(i.error), delete i.worker, void d.postMessage({ input: a, config: i, workerId: d.id });
      }
      var v = null;
      return o.NODE_STREAM_INPUT, typeof a == "string" ? (a = function(b) {
        return b.charCodeAt(0) === 65279 ? b.slice(1) : b;
      }(a), v = i.download ? new x(i) : new se(i)) : a.readable === !0 && S(a.read) && S(a.on) ? v = new w(i) : (n.File && a instanceof File || a instanceof Object) && (v = new ne(i)), v.stream(a);
    }, unparse: function(a, i) {
      var c = !1, d = !0, v = ",", b = `\r
`, O = '"', G = O + O, M = !1, m = null, L = !1;
      (function() {
        if (typeof i == "object") {
          if (typeof i.delimiter != "string" || o.BAD_DELIMITERS.filter(function(p) {
            return i.delimiter.indexOf(p) !== -1;
          }).length || (v = i.delimiter), (typeof i.quotes == "boolean" || typeof i.quotes == "function" || Array.isArray(i.quotes)) && (c = i.quotes), typeof i.skipEmptyLines != "boolean" && typeof i.skipEmptyLines != "string" || (M = i.skipEmptyLines), typeof i.newline == "string" && (b = i.newline), typeof i.quoteChar == "string" && (O = i.quoteChar), typeof i.header == "boolean" && (d = i.header), Array.isArray(i.columns)) {
            if (i.columns.length === 0)
              throw new Error("Option columns is empty");
            m = i.columns;
          }
          i.escapeChar !== void 0 && (G = i.escapeChar + O), (typeof i.escapeFormulae == "boolean" || i.escapeFormulae instanceof RegExp) && (L = i.escapeFormulae instanceof RegExp ? i.escapeFormulae : /^[=+\-@\t\r].*$/);
        }
      })();
      var y = new RegExp(U(O), "g");
      if (typeof a == "string" && (a = JSON.parse(a)), Array.isArray(a)) {
        if (!a.length || Array.isArray(a[0]))
          return ie(null, a, M);
        if (typeof a[0] == "object")
          return ie(m || Object.keys(a[0]), a, M);
      } else if (typeof a == "object")
        return typeof a.data == "string" && (a.data = JSON.parse(a.data)), Array.isArray(a.data) && (a.fields || (a.fields = a.meta && a.meta.fields || m), a.fields || (a.fields = Array.isArray(a.data[0]) ? a.fields : typeof a.data[0] == "object" ? Object.keys(a.data[0]) : []), Array.isArray(a.data[0]) || typeof a.data[0] == "object" || (a.data = [a.data])), ie(a.fields || [], a.data || [], M);
      throw new Error("Unable to serialize unrecognized input");
      function ie(p, I, $) {
        var N = "";
        typeof p == "string" && (p = JSON.parse(p)), typeof I == "string" && (I = JSON.parse(I));
        var q = Array.isArray(p) && 0 < p.length, j = !Array.isArray(I[0]);
        if (q && d) {
          for (var H = 0; H < p.length; H++)
            0 < H && (N += v), N += W(p[H], H);
          0 < I.length && (N += b);
        }
        for (var g = 0; g < I.length; g++) {
          var k = q ? p.length : I[g].length, D = !1, B = q ? Object.keys(I[g]).length === 0 : I[g].length === 0;
          if ($ && !q && (D = $ === "greedy" ? I[g].join("").trim() === "" : I[g].length === 1 && I[g][0].length === 0), $ === "greedy" && q) {
            for (var R = [], X = 0; X < k; X++) {
              var F = j ? p[X] : X;
              R.push(I[g][F]);
            }
            D = R.join("").trim() === "";
          }
          if (!D) {
            for (var A = 0; A < k; A++) {
              0 < A && !B && (N += v);
              var he = q && j ? p[A] : A;
              N += W(I[g][he], A);
            }
            g < I.length - 1 && (!$ || 0 < k && !B) && (N += b);
          }
        }
        return N;
      }
      function W(p, I) {
        if (p == null)
          return "";
        if (p.constructor === Date)
          return JSON.stringify(p).slice(1, 25);
        var $ = !1;
        L && typeof p == "string" && L.test(p) && (p = "'" + p, $ = !0);
        var N = p.toString().replace(y, G);
        return ($ = $ || c === !0 || typeof c == "function" && c(p, I) || Array.isArray(c) && c[I] || function(q, j) {
          for (var H = 0; H < j.length; H++)
            if (-1 < q.indexOf(j[H]))
              return !0;
          return !1;
        }(N, o.BAD_DELIMITERS) || -1 < N.indexOf(v) || N.charAt(0) === " " || N.charAt(N.length - 1) === " ") ? O + N + O : N;
      }
    } };
    if (o.RECORD_SEP = String.fromCharCode(30), o.UNIT_SEP = String.fromCharCode(31), o.BYTE_ORDER_MARK = "\uFEFF", o.BAD_DELIMITERS = ["\r", `
`, '"', o.BYTE_ORDER_MARK], o.WORKERS_SUPPORTED = !s && !!n.Worker, o.NODE_STREAM_INPUT = 1, o.LocalChunkSize = 10485760, o.RemoteChunkSize = 5242880, o.DefaultDelimiter = ",", o.Parser = ke, o.ParserHandle = E, o.NetworkStreamer = x, o.FileStreamer = ne, o.StringStreamer = se, o.ReadableStreamStreamer = w, n.jQuery) {
      var h = n.jQuery;
      h.fn.parse = function(a) {
        var i = a.config || {}, c = [];
        return this.each(function(b) {
          if (!(h(this).prop("tagName").toUpperCase() === "INPUT" && h(this).attr("type").toLowerCase() === "file" && n.FileReader) || !this.files || this.files.length === 0)
            return !0;
          for (var O = 0; O < this.files.length; O++)
            c.push({ file: this.files[O], inputElem: this, instanceConfig: h.extend({}, i) });
        }), d(), this;
        function d() {
          if (c.length !== 0) {
            var b, O, G, M, m = c[0];
            if (S(a.before)) {
              var L = a.before(m.file, m.inputElem);
              if (typeof L == "object") {
                if (L.action === "abort")
                  return b = "AbortError", O = m.file, G = m.inputElem, M = L.reason, void (S(a.error) && a.error({ name: b }, O, G, M));
                if (L.action === "skip")
                  return void v();
                typeof L.config == "object" && (m.instanceConfig = h.extend(m.instanceConfig, L.config));
              } else if (L === "skip")
                return void v();
            }
            var y = m.instanceConfig.complete;
            m.instanceConfig.complete = function(ie) {
              S(y) && y(ie, m.file, m.inputElem), v();
            }, o.parse(m.file, m.instanceConfig);
          } else
            S(a.complete) && a.complete();
        }
        function v() {
          c.splice(0, 1), d();
        }
      };
    }
    function _(a) {
      this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, function(i) {
        var c = qe(i);
        c.chunkSize = parseInt(c.chunkSize), i.step || i.chunk || (c.chunkSize = null), this._handle = new E(c), (this._handle.streamer = this)._config = c;
      }.call(this, a), this.parseChunk = function(i, c) {
        if (this.isFirstChunk && S(this._config.beforeFirstChunk)) {
          var d = this._config.beforeFirstChunk(i);
          d !== void 0 && (i = d);
        }
        this.isFirstChunk = !1, this._halted = !1;
        var v = this._partialLine + i;
        this._partialLine = "";
        var b = this._handle.parse(v, this._baseIndex, !this._finished);
        if (!this._handle.paused() && !this._handle.aborted()) {
          var O = b.meta.cursor;
          this._finished || (this._partialLine = v.substring(O - this._baseIndex), this._baseIndex = O), b && b.data && (this._rowCount += b.data.length);
          var G = this._finished || this._config.preview && this._rowCount >= this._config.preview;
          if (l)
            n.postMessage({ results: b, workerId: o.WORKER_ID, finished: G });
          else if (S(this._config.chunk) && !c) {
            if (this._config.chunk(b, this._handle), this._handle.paused() || this._handle.aborted())
              return void (this._halted = !0);
            b = void 0, this._completeResults = void 0;
          }
          return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(b.data), this._completeResults.errors = this._completeResults.errors.concat(b.errors), this._completeResults.meta = b.meta), this._completed || !G || !S(this._config.complete) || b && b.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), G || b && b.meta.paused || this._nextChunk(), b;
        }
        this._halted = !0;
      }, this._sendError = function(i) {
        S(this._config.error) ? this._config.error(i) : l && this._config.error && n.postMessage({ workerId: o.WORKER_ID, error: i, finished: !1 });
      };
    }
    function x(a) {
      var i;
      (a = a || {}).chunkSize || (a.chunkSize = o.RemoteChunkSize), _.call(this, a), this._nextChunk = s ? function() {
        this._readChunk(), this._chunkLoaded();
      } : function() {
        this._readChunk();
      }, this.stream = function(c) {
        this._input = c, this._nextChunk();
      }, this._readChunk = function() {
        if (this._finished)
          this._chunkLoaded();
        else {
          if (i = new XMLHttpRequest(), this._config.withCredentials && (i.withCredentials = this._config.withCredentials), s || (i.onload = fe(this._chunkLoaded, this), i.onerror = fe(this._chunkError, this)), i.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !s), this._config.downloadRequestHeaders) {
            var c = this._config.downloadRequestHeaders;
            for (var d in c)
              i.setRequestHeader(d, c[d]);
          }
          if (this._config.chunkSize) {
            var v = this._start + this._config.chunkSize - 1;
            i.setRequestHeader("Range", "bytes=" + this._start + "-" + v);
          }
          try {
            i.send(this._config.downloadRequestBody);
          } catch (b) {
            this._chunkError(b.message);
          }
          s && i.status === 0 && this._chunkError();
        }
      }, this._chunkLoaded = function() {
        i.readyState === 4 && (i.status < 200 || 400 <= i.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : i.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(c) {
          var d = c.getResponseHeader("Content-Range");
          return d === null ? -1 : parseInt(d.substring(d.lastIndexOf("/") + 1));
        }(i), this.parseChunk(i.responseText)));
      }, this._chunkError = function(c) {
        var d = i.statusText || c;
        this._sendError(new Error(d));
      };
    }
    function ne(a) {
      var i, c;
      (a = a || {}).chunkSize || (a.chunkSize = o.LocalChunkSize), _.call(this, a);
      var d = typeof FileReader < "u";
      this.stream = function(v) {
        this._input = v, c = v.slice || v.webkitSlice || v.mozSlice, d ? ((i = new FileReader()).onload = fe(this._chunkLoaded, this), i.onerror = fe(this._chunkError, this)) : i = new FileReaderSync(), this._nextChunk();
      }, this._nextChunk = function() {
        this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
      }, this._readChunk = function() {
        var v = this._input;
        if (this._config.chunkSize) {
          var b = Math.min(this._start + this._config.chunkSize, this._input.size);
          v = c.call(v, this._start, b);
        }
        var O = i.readAsText(v, this._config.encoding);
        d || this._chunkLoaded({ target: { result: O } });
      }, this._chunkLoaded = function(v) {
        this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(v.target.result);
      }, this._chunkError = function() {
        this._sendError(i.error);
      };
    }
    function se(a) {
      var i;
      _.call(this, a = a || {}), this.stream = function(c) {
        return i = c, this._nextChunk();
      }, this._nextChunk = function() {
        if (!this._finished) {
          var c, d = this._config.chunkSize;
          return d ? (c = i.substring(0, d), i = i.substring(d)) : (c = i, i = ""), this._finished = !i, this.parseChunk(c);
        }
      };
    }
    function w(a) {
      _.call(this, a = a || {});
      var i = [], c = !0, d = !1;
      this.pause = function() {
        _.prototype.pause.apply(this, arguments), this._input.pause();
      }, this.resume = function() {
        _.prototype.resume.apply(this, arguments), this._input.resume();
      }, this.stream = function(v) {
        this._input = v, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
      }, this._checkIsFinished = function() {
        d && i.length === 1 && (this._finished = !0);
      }, this._nextChunk = function() {
        this._checkIsFinished(), i.length ? this.parseChunk(i.shift()) : c = !0;
      }, this._streamData = fe(function(v) {
        try {
          i.push(typeof v == "string" ? v : v.toString(this._config.encoding)), c && (c = !1, this._checkIsFinished(), this.parseChunk(i.shift()));
        } catch (b) {
          this._streamError(b);
        }
      }, this), this._streamError = fe(function(v) {
        this._streamCleanUp(), this._sendError(v);
      }, this), this._streamEnd = fe(function() {
        this._streamCleanUp(), d = !0, this._streamData("");
      }, this), this._streamCleanUp = fe(function() {
        this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
      }, this);
    }
    function E(a) {
      var i, c, d, v = Math.pow(2, 53), b = -v, O = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, G = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, M = this, m = 0, L = 0, y = !1, ie = !1, W = [], p = { data: [], errors: [], meta: {} };
      if (S(a.step)) {
        var I = a.step;
        a.step = function(g) {
          if (p = g, q())
            N();
          else {
            if (N(), p.data.length === 0)
              return;
            m += g.data.length, a.preview && m > a.preview ? c.abort() : (p.data = p.data[0], I(p, M));
          }
        };
      }
      function $(g) {
        return a.skipEmptyLines === "greedy" ? g.join("").trim() === "" : g.length === 1 && g[0].length === 0;
      }
      function N() {
        return p && d && (H("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + o.DefaultDelimiter + "'"), d = !1), a.skipEmptyLines && (p.data = p.data.filter(function(g) {
          return !$(g);
        })), q() && function() {
          if (!p)
            return;
          function g(D, B) {
            S(a.transformHeader) && (D = a.transformHeader(D, B)), W.push(D);
          }
          if (Array.isArray(p.data[0])) {
            for (var k = 0; q() && k < p.data.length; k++)
              p.data[k].forEach(g);
            p.data.splice(0, 1);
          } else
            p.data.forEach(g);
        }(), function() {
          if (!p || !a.header && !a.dynamicTyping && !a.transform)
            return p;
          function g(D, B) {
            var R, X = a.header ? {} : [];
            for (R = 0; R < D.length; R++) {
              var F = R, A = D[R];
              a.header && (F = R >= W.length ? "__parsed_extra" : W[R]), a.transform && (A = a.transform(A, F)), A = j(F, A), F === "__parsed_extra" ? (X[F] = X[F] || [], X[F].push(A)) : X[F] = A;
            }
            return a.header && (R > W.length ? H("FieldMismatch", "TooManyFields", "Too many fields: expected " + W.length + " fields but parsed " + R, L + B) : R < W.length && H("FieldMismatch", "TooFewFields", "Too few fields: expected " + W.length + " fields but parsed " + R, L + B)), X;
          }
          var k = 1;
          return !p.data.length || Array.isArray(p.data[0]) ? (p.data = p.data.map(g), k = p.data.length) : p.data = g(p.data, 0), a.header && p.meta && (p.meta.fields = W), L += k, p;
        }();
      }
      function q() {
        return a.header && W.length === 0;
      }
      function j(g, k) {
        return D = g, a.dynamicTypingFunction && a.dynamicTyping[D] === void 0 && (a.dynamicTyping[D] = a.dynamicTypingFunction(D)), (a.dynamicTyping[D] || a.dynamicTyping) === !0 ? k === "true" || k === "TRUE" || k !== "false" && k !== "FALSE" && (function(B) {
          if (O.test(B)) {
            var R = parseFloat(B);
            if (b < R && R < v)
              return !0;
          }
          return !1;
        }(k) ? parseFloat(k) : G.test(k) ? new Date(k) : k === "" ? null : k) : k;
        var D;
      }
      function H(g, k, D, B) {
        var R = { type: g, code: k, message: D };
        B !== void 0 && (R.row = B), p.errors.push(R);
      }
      this.parse = function(g, k, D) {
        var B = a.quoteChar || '"';
        if (a.newline || (a.newline = function(F, A) {
          F = F.substring(0, 1048576);
          var he = new RegExp(U(A) + "([^]*?)" + U(A), "gm"), te = (F = F.replace(he, "")).split("\r"), ae = F.split(`
`), le = 1 < ae.length && ae[0].length < te[0].length;
          if (te.length === 1 || le)
            return `
`;
          for (var J = 0, P = 0; P < te.length; P++)
            te[P][0] === `
` && J++;
          return J >= te.length / 2 ? `\r
` : "\r";
        }(g, B)), d = !1, a.delimiter)
          S(a.delimiter) && (a.delimiter = a.delimiter(g), p.meta.delimiter = a.delimiter);
        else {
          var R = function(F, A, he, te, ae) {
            var le, J, P, z;
            ae = ae || [",", "	", "|", ";", o.RECORD_SEP, o.UNIT_SEP];
            for (var ye = 0; ye < ae.length; ye++) {
              var C = ae[ye], we = 0, ue = 0, _e = 0;
              P = void 0;
              for (var de = new ke({ comments: te, delimiter: C, newline: A, preview: 10 }).parse(F), pe = 0; pe < de.data.length; pe++)
                if (he && $(de.data[pe]))
                  _e++;
                else {
                  var ve = de.data[pe].length;
                  ue += ve, P !== void 0 ? 0 < ve && (we += Math.abs(ve - P), P = ve) : P = ve;
                }
              0 < de.data.length && (ue /= de.data.length - _e), (J === void 0 || we <= J) && (z === void 0 || z < ue) && 1.99 < ue && (J = we, le = C, z = ue);
            }
            return { successful: !!(a.delimiter = le), bestDelimiter: le };
          }(g, a.newline, a.skipEmptyLines, a.comments, a.delimitersToGuess);
          R.successful ? a.delimiter = R.bestDelimiter : (d = !0, a.delimiter = o.DefaultDelimiter), p.meta.delimiter = a.delimiter;
        }
        var X = qe(a);
        return a.preview && a.header && X.preview++, i = g, c = new ke(X), p = c.parse(i, k, D), N(), y ? { meta: { paused: !0 } } : p || { meta: { paused: !1 } };
      }, this.paused = function() {
        return y;
      }, this.pause = function() {
        y = !0, c.abort(), i = S(a.chunk) ? "" : i.substring(c.getCharIndex());
      }, this.resume = function() {
        M.streamer._halted ? (y = !1, M.streamer.parseChunk(i, !0)) : setTimeout(M.resume, 3);
      }, this.aborted = function() {
        return ie;
      }, this.abort = function() {
        ie = !0, c.abort(), p.meta.aborted = !0, S(a.complete) && a.complete(p), i = "";
      };
    }
    function U(a) {
      return a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function ke(a) {
      var i, c = (a = a || {}).delimiter, d = a.newline, v = a.comments, b = a.step, O = a.preview, G = a.fastMode, M = i = a.quoteChar === void 0 || a.quoteChar === null ? '"' : a.quoteChar;
      if (a.escapeChar !== void 0 && (M = a.escapeChar), (typeof c != "string" || -1 < o.BAD_DELIMITERS.indexOf(c)) && (c = ","), v === c)
        throw new Error("Comment character same as delimiter");
      v === !0 ? v = "#" : (typeof v != "string" || -1 < o.BAD_DELIMITERS.indexOf(v)) && (v = !1), d !== `
` && d !== "\r" && d !== `\r
` && (d = `
`);
      var m = 0, L = !1;
      this.parse = function(y, ie, W) {
        if (typeof y != "string")
          throw new Error("Input must be a string");
        var p = y.length, I = c.length, $ = d.length, N = v.length, q = S(b), j = [], H = [], g = [], k = m = 0;
        if (!y)
          return Z();
        if (a.header) {
          var D = y.split(d)[0].split(c), B = [], R = {}, X = !1;
          for (var F in D) {
            var A = D[F];
            S(a.transformHeader) && (A = a.transformHeader(A, F));
            var he = A, te = R[A] || 0;
            0 < te && (X = !0, he = A + "_" + te), R[A] = te + 1, B.push(he);
          }
          if (X) {
            var ae = y.split(d);
            ae[0] = B.join(c), y = ae.join(d);
          }
        }
        if (G || G !== !1 && y.indexOf(i) === -1) {
          for (var le = y.split(d), J = 0; J < le.length; J++) {
            if (g = le[J], m += g.length, J !== le.length - 1)
              m += d.length;
            else if (W)
              return Z();
            if (!v || g.substring(0, N) !== v) {
              if (q) {
                if (j = [], _e(g.split(c)), Se(), L)
                  return Z();
              } else
                _e(g.split(c));
              if (O && O <= J)
                return j = j.slice(0, O), Z(!0);
            }
          }
          return Z();
        }
        for (var P = y.indexOf(c, m), z = y.indexOf(d, m), ye = new RegExp(U(M) + U(i), "g"), C = y.indexOf(i, m); ; )
          if (y[m] !== i)
            if (v && g.length === 0 && y.substring(m, m + N) === v) {
              if (z === -1)
                return Z();
              m = z + $, z = y.indexOf(d, m), P = y.indexOf(c, m);
            } else if (P !== -1 && (P < z || z === -1))
              g.push(y.substring(m, P)), m = P + I, P = y.indexOf(c, m);
            else {
              if (z === -1)
                break;
              if (g.push(y.substring(m, z)), ve(z + $), q && (Se(), L))
                return Z();
              if (O && j.length >= O)
                return Z(!0);
            }
          else
            for (C = m, m++; ; ) {
              if ((C = y.indexOf(i, C + 1)) === -1)
                return W || H.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: j.length, index: m }), pe();
              if (C === p - 1)
                return pe(y.substring(m, C).replace(ye, i));
              if (i !== M || y[C + 1] !== M) {
                if (i === M || C === 0 || y[C - 1] !== M) {
                  P !== -1 && P < C + 1 && (P = y.indexOf(c, C + 1)), z !== -1 && z < C + 1 && (z = y.indexOf(d, C + 1));
                  var we = de(z === -1 ? P : Math.min(P, z));
                  if (y.substr(C + 1 + we, I) === c) {
                    g.push(y.substring(m, C).replace(ye, i)), y[m = C + 1 + we + I] !== i && (C = y.indexOf(i, m)), P = y.indexOf(c, m), z = y.indexOf(d, m);
                    break;
                  }
                  var ue = de(z);
                  if (y.substring(C + 1 + ue, C + 1 + ue + $) === d) {
                    if (g.push(y.substring(m, C).replace(ye, i)), ve(C + 1 + ue + $), P = y.indexOf(c, m), C = y.indexOf(i, m), q && (Se(), L))
                      return Z();
                    if (O && j.length >= O)
                      return Z(!0);
                    break;
                  }
                  H.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: j.length, index: m }), C++;
                }
              } else
                C++;
            }
        return pe();
        function _e(Q) {
          j.push(Q), k = m;
        }
        function de(Q) {
          var ft = 0;
          if (Q !== -1) {
            var Ve = y.substring(C + 1, Q);
            Ve && Ve.trim() === "" && (ft = Ve.length);
          }
          return ft;
        }
        function pe(Q) {
          return W || (Q === void 0 && (Q = y.substring(m)), g.push(Q), m = p, _e(g), q && Se()), Z();
        }
        function ve(Q) {
          m = Q, _e(g), g = [], z = y.indexOf(d, m);
        }
        function Z(Q) {
          return { data: j, errors: H, meta: { delimiter: c, linebreak: d, aborted: L, truncated: !!Q, cursor: k + (ie || 0) } };
        }
        function Se() {
          b(Z()), j = [], H = [];
        }
      }, this.abort = function() {
        L = !0;
      }, this.getCharIndex = function() {
        return m;
      };
    }
    function lr(a) {
      var i = a.data, c = f[i.workerId], d = !1;
      if (i.error)
        c.userError(i.error, i.file);
      else if (i.results && i.results.data) {
        var v = { abort: function() {
          d = !0, ut(i.workerId, { data: [], errors: [], meta: { aborted: !0 } });
        }, pause: ct, resume: ct };
        if (S(c.userStep)) {
          for (var b = 0; b < i.results.data.length && (c.userStep({ data: i.results.data[b], errors: i.results.errors, meta: i.results.meta }, v), !d); b++)
            ;
          delete i.results;
        } else
          S(c.userChunk) && (c.userChunk(i.results, v, i.file), delete i.results);
      }
      i.finished && !d && ut(i.workerId, i.results);
    }
    function ut(a, i) {
      var c = f[a];
      S(c.userComplete) && c.userComplete(i), c.terminate(), delete f[a];
    }
    function ct() {
      throw new Error("Not implemented.");
    }
    function qe(a) {
      if (typeof a != "object" || a === null)
        return a;
      var i = Array.isArray(a) ? [] : {};
      for (var c in a)
        i[c] = qe(a[c]);
      return i;
    }
    function fe(a, i) {
      return function() {
        a.apply(i, arguments);
      };
    }
    function S(a) {
      return typeof a == "function";
    }
    return l && (n.onmessage = function(a) {
      var i = a.data;
      if (o.WORKER_ID === void 0 && i && (o.WORKER_ID = i.workerId), typeof i.input == "string")
        n.postMessage({ workerId: o.WORKER_ID, results: o.parse(i.input, i.config), finished: !0 });
      else if (n.File && i.input instanceof File || i.input instanceof Object) {
        var c = o.parse(i.input, i.config);
        c && n.postMessage({ workerId: o.WORKER_ID, results: c, finished: !0 });
      }
    }), (x.prototype = Object.create(_.prototype)).constructor = x, (ne.prototype = Object.create(_.prototype)).constructor = ne, (se.prototype = Object.create(se.prototype)).constructor = se, (w.prototype = Object.create(_.prototype)).constructor = w, o;
  });
})(sr);
var Kn = sr.exports;
const Jn = /* @__PURE__ */ St(Kn);
async function ri(e, t = "") {
  try {
    e = new URL(e);
    const r = e.pathname;
    return /(?:\.([^.]+))?$/.exec(r)[1] === "csv" ? await fetch(e.href).then((l) => l.text()).then((l) => (l = l.replace(/(".*?")|,/g, (...u) => u[1] || "|"), l = l.replace(/["]+/g, ""), Jn.parse(l, {
      //quotes: "true",  // dont need these
      //quoteChar: "'",  // has no effect that I can tell
      header: !0,
      skipEmptyLines: !0,
      delimiter: "|",
      // we are using pipe symbol as delimiter so setting this explicitly for Papa.parse
      dynamicTyping: !1
    }).data)) : await fetch(e.href).then((l) => l.json());
  } catch {
    try {
      return await (await fetch(e)).json();
    } catch {
      console.error(`Cannot parse URL: ${e}`);
    }
  }
}
class ni extends ce.Component {
  constructor(t) {
    super(t), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError(t) {
    return { hasError: !0 };
  }
  componentDidCatch(t, r) {
    console.warn(t, r);
  }
  render() {
    return this.state.hasError ? this.props.component ? /* @__PURE__ */ ce.createElement("h1", null, "Something went wrong with component ", this.props.component, ".") : /* @__PURE__ */ ce.createElement("h1", null, "Something went wrong.") : this.props.children;
  }
}
function ii({ viewport: e = "lg" }) {
  return /* @__PURE__ */ ce.createElement("section", { className: "loading", "aria-live": "assertive" }, /* @__PURE__ */ ce.createElement("span", { className: "sr-only", style: { display: "none" } }, "Content is loading."), /* @__PURE__ */ ce.createElement("div", { className: `la-ball-beat la-dark ${e}` }, /* @__PURE__ */ ce.createElement("div", null), /* @__PURE__ */ ce.createElement("div", null), /* @__PURE__ */ ce.createElement("div", null)));
}
export {
  ni as E,
  Ee as H,
  ii as L,
  Jn as P,
  ri as f,
  ti as g,
  ei as i
};