import { r as se, R as i } from "./storybook-index-45401197.es.js";
import { a as xy, i as Oh, b as Mh, g as by } from "./storybook-isSolr-6a0136d5.es.js";
import { A as Sy, e as Ey } from "./storybook-queryStringUtils-aa6bd55f.es.js";
import { L as Qd, a as ky } from "./storybook-coveUpdateWorker-d90b7f10.es.js";
import { B as Hf } from "./storybook-Button-d74e310e.es.js";
import { p as Sm, P as he } from "./storybook-index-43433e35.es.js";
import { d as wy } from "./storybook-debounce-cc216a80.es.js";
import { a as Wf } from "./storybook-_commonjsHelpers-c5d32002.es.js";
import { P as _h } from "./storybook-papaparse.min-b07ddc33.es.js";
import { H as _i, T as Ty } from "./storybook-index-e5bf02db.es.js";
import { _ as fn } from "./storybook-extends-70f3d2a3.es.js";
import { _ as Gr, p as Nh, d as Ci, s as jr, c as Yt, h as Fh, a as Sc, e as Gn, t as zu, f as Ko, m as Ad, i as zh, j as qn, k as $h, l as Cy, n as Ay, G as Py, o as ju, q as fr, r as Uu, g as Zo, T as Et, P as Em, I as Bh, u as Ry, D as Ih, C as Hh, F as Wh } from "./storybook-Filters-3aee42ac.es.js";
import { D as km } from "./storybook-DataTransform-b554456e.es.js";
import { t as Ly, a as Cn, f as wm, L as Vh, b as ts, g as Ai, S as Dy, M as Pd, D as Oy } from "./storybook-DataTable-4263c458.es.js";
import { E as zr, L as My } from "./storybook-Loading-f180d060.es.js";
import { s as ls, t as Tm, a as Cm, b as Am, d as Cs, B as yr, c as Xn, C as _y, S as Pm } from "./storybook-icon-check-d4f3700e.es.js";
import { b as Ec, t as Ny, e as Rm, f as jh, g as Fy, h as zy, j as $y, k as Uh, m as By, G as rt, c as Dn } from "./storybook-Group-e6c0d0df.es.js";
import { R as Iy } from "./storybook-index-633d712d.es.js";
import { e as bs, a as _n, b as Nn, c as Fn, d as zn, A as Ni } from "./storybook-index-66852bf6.es.js";
import { i as Lm, m as Rd, c as Dm, j as bu, k as Su, l as Eu, n as Kh, o as Hy, p as Yh, b as Om, d as Mm } from "./storybook-year-bedc547d.es.js";
import { a as kt } from "./storybook-Icon-adc4a8a7.es.js";
import { T as Le } from "./storybook-Tooltip-edc0f7ab.es.js";
import { S as Ct, T as Qe, C as yt, D as Wy } from "./storybook-DataTableEditor-07723af8.es.js";
import { I as Wa } from "./storybook-InputSelect-a65afd95.es.js";
import { u as Vy, p as jy, s as Uy, a as Ky } from "./storybook-useDataVizClasses-d9099587.es.js";
import { n as Xh } from "./storybook-numberFromString-24623c03.es.js";
import { c as qh } from "./storybook-cacheBustingString-7a3dd9ba.es.js";
function _m(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Gh(e) {
  let t = e, r = e;
  e.length === 1 && (t = (f, s) => e(f) - s, r = Yy(e));
  function n(f, s, c, d) {
    for (c == null && (c = 0), d == null && (d = f.length); c < d; ) {
      const g = c + d >>> 1;
      r(f[g], s) < 0 ? c = g + 1 : d = g;
    }
    return c;
  }
  function a(f, s, c, d) {
    for (c == null && (c = 0), d == null && (d = f.length); c < d; ) {
      const g = c + d >>> 1;
      r(f[g], s) > 0 ? d = g : c = g + 1;
    }
    return c;
  }
  function o(f, s, c, d) {
    c == null && (c = 0), d == null && (d = f.length);
    const g = n(f, s, c, d - 1);
    return g > c && t(f[g - 1], s) > -t(f[g], s) ? g - 1 : g;
  }
  return { left: n, center: o, right: a };
}
function Yy(e) {
  return (t, r) => _m(e(t), r);
}
function* Xy(e, t) {
  if (t === void 0)
    for (let r of e)
      r != null && (r = +r) >= r && (yield r);
  else {
    let r = -1;
    for (let n of e)
      (n = t(n, ++r, e)) != null && (n = +n) >= n && (yield n);
  }
}
function qy(e, t) {
  let r = 0, n, a = 0, o = 0;
  if (t === void 0)
    for (let f of e)
      f != null && (f = +f) >= f && (n = f - a, a += n / ++r, o += n * (f - a));
  else {
    let f = -1;
    for (let s of e)
      (s = t(s, ++f, e)) != null && (s = +s) >= s && (n = s - a, a += n / ++r, o += n * (s - a));
  }
  if (r > 1)
    return o / (r - 1);
}
function Gy(e, t) {
  const r = qy(e, t);
  return r && Math.sqrt(r);
}
function ss(e, t) {
  let r;
  if (t === void 0)
    for (const n of e)
      n != null && (r < n || r === void 0 && n >= n) && (r = n);
  else {
    let n = -1;
    for (let a of e)
      (a = t(a, ++n, e)) != null && (r < a || r === void 0 && a >= a) && (r = a);
  }
  return r;
}
function us(e, t) {
  let r;
  if (t === void 0)
    for (const n of e)
      n != null && (r > n || r === void 0 && n >= n) && (r = n);
  else {
    let n = -1;
    for (let a of e)
      (a = t(a, ++n, e)) != null && (r > a || r === void 0 && a >= a) && (r = a);
  }
  return r;
}
function Nm(e, t, r = 0, n = e.length - 1, a = _m) {
  for (; n > r; ) {
    if (n - r > 600) {
      const c = n - r + 1, d = t - r + 1, g = Math.log(c), y = 0.5 * Math.exp(2 * g / 3), v = 0.5 * Math.sqrt(g * y * (c - y) / c) * (d - c / 2 < 0 ? -1 : 1), E = Math.max(r, Math.floor(t - d * y / c + v)), k = Math.min(n, Math.floor(t + (c - d) * y / c + v));
      Nm(e, t, E, k, a);
    }
    const o = e[t];
    let f = r, s = n;
    for (ns(e, r, t), a(e[n], o) > 0 && ns(e, r, n); f < s; ) {
      for (ns(e, f, s), ++f, --s; a(e[f], o) < 0; )
        ++f;
      for (; a(e[s], o) > 0; )
        --s;
    }
    a(e[r], o) === 0 ? ns(e, r, s) : (++s, ns(e, s, n)), s <= t && (r = s + 1), t <= s && (n = s - 1);
  }
  return e;
}
function ns(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function Zy(e, t, r) {
  if (e = Float64Array.from(Xy(e, r)), !!(n = e.length)) {
    if ((t = +t) <= 0 || n < 2)
      return us(e);
    if (t >= 1)
      return ss(e);
    var n, a = (n - 1) * t, o = Math.floor(a), f = ss(Nm(e, o).subarray(0, o + 1)), s = us(e.subarray(o + 1));
    return f + (s - f) * (a - o);
  }
}
function Qy(e, t) {
  let r = 0, n = 0;
  if (t === void 0)
    for (let a of e)
      a != null && (a = +a) >= a && (++r, n += a);
  else {
    let a = -1;
    for (let o of e)
      (o = t(o, ++a, e)) != null && (o = +o) >= o && (++r, n += o);
  }
  if (r)
    return n / r;
}
function Jy(e, t) {
  return Zy(e, 0.5, t);
}
class Zh extends Map {
  constructor(t, r = nv) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null)
      for (const [n, a] of t)
        this.set(n, a);
  }
  get(t) {
    return super.get(Qh(this, t));
  }
  has(t) {
    return super.has(Qh(this, t));
  }
  set(t, r) {
    return super.set(ev(this, t), r);
  }
  delete(t) {
    return super.delete(tv(this, t));
  }
}
function Qh({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function ev({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function tv({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function nv(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function rv(e, t, r) {
  e = +e, t = +t, r = (a = arguments.length) < 2 ? (t = e, e = 0, 1) : a < 3 ? 1 : +r;
  for (var n = -1, a = Math.max(0, Math.ceil((t - e) / r)) | 0, o = new Array(a); ++n < a; )
    o[n] = e + n * r;
  return o;
}
const Jh = Symbol("implicit");
function Vf() {
  var e = new Zh(), t = [], r = [], n = Jh;
  function a(o) {
    let f = e.get(o);
    if (f === void 0) {
      if (n !== Jh)
        return n;
      e.set(o, f = t.push(o) - 1);
    }
    return r[f % r.length];
  }
  return a.domain = function(o) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new Zh();
    for (const f of o)
      e.has(f) || e.set(f, t.push(f) - 1);
    return a;
  }, a.range = function(o) {
    return arguments.length ? (r = Array.from(o), a) : r.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.copy = function() {
    return Vf(t, r).unknown(n);
  }, Ec.apply(a, arguments), a;
}
function jf() {
  var e = Vf().unknown(void 0), t = e.domain, r = e.range, n = 0, a = 1, o, f, s = !1, c = 0, d = 0, g = 0.5;
  delete e.unknown;
  function y() {
    var v = t().length, E = a < n, k = E ? a : n, M = E ? n : a;
    o = (M - k) / Math.max(1, v - c + d * 2), s && (o = Math.floor(o)), k += (M - k - o * (v - c)) * g, f = o * (1 - c), s && (k = Math.round(k), f = Math.round(f));
    var T = rv(v).map(function(m) {
      return k + o * m;
    });
    return r(E ? T.reverse() : T);
  }
  return e.domain = function(v) {
    return arguments.length ? (t(v), y()) : t();
  }, e.range = function(v) {
    return arguments.length ? ([n, a] = v, n = +n, a = +a, y()) : [n, a];
  }, e.rangeRound = function(v) {
    return [n, a] = v, n = +n, a = +a, s = !0, y();
  }, e.bandwidth = function() {
    return f;
  }, e.step = function() {
    return o;
  }, e.round = function(v) {
    return arguments.length ? (s = !!v, y()) : s;
  }, e.padding = function(v) {
    return arguments.length ? (c = Math.min(1, d = +v), y()) : c;
  }, e.paddingInner = function(v) {
    return arguments.length ? (c = Math.min(1, v), y()) : c;
  }, e.paddingOuter = function(v) {
    return arguments.length ? (d = +v, y()) : d;
  }, e.align = function(v) {
    return arguments.length ? (g = Math.max(0, Math.min(1, v)), y()) : g;
  }, e.copy = function() {
    return jf(t(), [n, a]).round(s).paddingInner(c).paddingOuter(d).align(g);
  }, Ec.apply(y(), arguments);
}
function Fm(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Fm(t());
  }, e;
}
function av() {
  return Fm(jf.apply(null, arguments).paddingInner(1));
}
function zm(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, a = e[r], o = e[n], f;
  return o < a && (f = r, r = n, n = f, f = a, a = o, o = f), e[r] = t.floor(a), e[n] = t.ceil(o), e;
}
function ep(e) {
  return Math.log(e);
}
function tp(e) {
  return Math.exp(e);
}
function iv(e) {
  return -Math.log(-e);
}
function ov(e) {
  return -Math.exp(-e);
}
function lv(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function sv(e) {
  return e === 10 ? lv : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function uv(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function np(e) {
  return (t, r) => -e(-t, r);
}
function cv(e) {
  const t = e(ep, tp), r = t.domain;
  let n = 10, a, o;
  function f() {
    return a = uv(n), o = sv(n), r()[0] < 0 ? (a = np(a), o = np(o), e(iv, ov)) : e(ep, tp), t;
  }
  return t.base = function(s) {
    return arguments.length ? (n = +s, f()) : n;
  }, t.domain = function(s) {
    return arguments.length ? (r(s), f()) : r();
  }, t.ticks = (s) => {
    const c = r();
    let d = c[0], g = c[c.length - 1];
    const y = g < d;
    y && ([d, g] = [g, d]);
    let v = a(d), E = a(g), k, M;
    const T = s == null ? 10 : +s;
    let m = [];
    if (!(n % 1) && E - v < T) {
      if (v = Math.floor(v), E = Math.ceil(E), d > 0) {
        for (; v <= E; ++v)
          for (k = 1; k < n; ++k)
            if (M = v < 0 ? k / o(-v) : k * o(v), !(M < d)) {
              if (M > g)
                break;
              m.push(M);
            }
      } else
        for (; v <= E; ++v)
          for (k = n - 1; k >= 1; --k)
            if (M = v > 0 ? k / o(-v) : k * o(v), !(M < d)) {
              if (M > g)
                break;
              m.push(M);
            }
      m.length * 2 < T && (m = jh(d, g, T));
    } else
      m = jh(v, E, Math.min(E - v, T)).map(o);
    return y ? m.reverse() : m;
  }, t.tickFormat = (s, c) => {
    if (s == null && (s = 10), c == null && (c = n === 10 ? "s" : ","), typeof c != "function" && (!(n % 1) && (c = Fy(c)).precision == null && (c.trim = !0), c = zy(c)), s === 1 / 0)
      return c;
    const d = Math.max(1, n * s / t.ticks().length);
    return (g) => {
      let y = g / o(Math.round(a(g)));
      return y * n < n - 0.5 && (y *= n), y <= d ? c(g) : "";
    };
  }, t.nice = () => r(zm(r(), {
    floor: (s) => o(Math.floor(a(s))),
    ceil: (s) => o(Math.ceil(a(s)))
  })), t;
}
function $m() {
  const e = cv(Ny()).domain([1, 10]);
  return e.copy = () => Rm(e, $m()).base(e.base()), Ec.apply(e, arguments), e;
}
const Ku = Lm(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Ku.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Lm((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Ku);
Ku.range;
function dv(e, t, r, n, a, o) {
  const f = [
    [ls, 1, bu],
    [ls, 5, 5 * bu],
    [ls, 15, 15 * bu],
    [ls, 30, 30 * bu],
    [o, 1, Su],
    [o, 5, 5 * Su],
    [o, 15, 15 * Su],
    [o, 30, 30 * Su],
    [a, 1, Eu],
    [a, 3, 3 * Eu],
    [a, 6, 6 * Eu],
    [a, 12, 12 * Eu],
    [n, 1, Kh],
    [n, 2, 2 * Kh],
    [r, 1, Hy],
    [t, 1, Yh],
    [t, 3, 3 * Yh],
    [e, 1, Rd]
  ];
  function s(d, g, y) {
    const v = g < d;
    v && ([d, g] = [g, d]);
    const E = y && typeof y.range == "function" ? y : c(d, g, y), k = E ? E.range(d, +g + 1) : [];
    return v ? k.reverse() : k;
  }
  function c(d, g, y) {
    const v = Math.abs(g - d) / y, E = $y(([, , T]) => T).right(f, v);
    if (E === f.length)
      return e.every(Uh(d / Rd, g / Rd, y));
    if (E === 0)
      return Ku.every(Math.max(Uh(d, g, y), 1));
    const [k, M] = f[v / f[E - 1][2] < f[E][2] / v ? E - 1 : E];
    return k.every(M);
  }
  return [s, c];
}
const [fv, hv] = dv(Dm, Am, Mm, Om, Cm, Tm);
function pv(e) {
  return new Date(e);
}
function mv(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Bm(e, t, r, n, a, o, f, s, c, d) {
  var g = By(), y = g.invert, v = g.domain, E = d(".%L"), k = d(":%S"), M = d("%I:%M"), T = d("%I %p"), m = d("%a %d"), R = d("%b %d"), O = d("%B"), _ = d("%Y");
  function N(D) {
    return (c(D) < D ? E : s(D) < D ? k : f(D) < D ? M : o(D) < D ? T : n(D) < D ? a(D) < D ? m : R : r(D) < D ? O : _)(D);
  }
  return g.invert = function(D) {
    return new Date(y(D));
  }, g.domain = function(D) {
    return arguments.length ? v(Array.from(D, mv)) : v().map(pv);
  }, g.ticks = function(D) {
    var I = v();
    return e(I[0], I[I.length - 1], D ?? 10);
  }, g.tickFormat = function(D, I) {
    return I == null ? N : d(I);
  }, g.nice = function(D) {
    var I = v();
    return (!D || typeof D.range != "function") && (D = t(I[0], I[I.length - 1], D ?? 10)), D ? v(zm(I, D)) : g;
  }, g.copy = function() {
    return Rm(g, Bm(e, t, r, n, a, o, f, s, c, d));
  }, g;
}
function gv() {
  return Ec.apply(Bm(fv, hv, Dm, Am, Mm, Om, Cm, Tm, ls, Ly).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var yv = Cs("domain", "range", "reverse", "align", "padding", "round");
function Jd(e) {
  return yv(jf(), e);
}
var vv = Cs("domain", "range", "reverse", "align", "padding", "round");
function Yo(e) {
  return vv(av(), e);
}
var xv = Cs("domain", "range", "reverse", "clamp", "interpolate", "nice", "round");
function bv(e) {
  return xv(gv(), e);
}
var Sv = Cs("domain", "range", "reverse", "base", "clamp", "interpolate", "nice", "round");
function Yu(e) {
  return Sv($m(), e);
}
var Ev = Cs("domain", "range", "reverse", "unknown");
function Uf(e) {
  return Ev(Vf(), e);
}
function kv(e) {
  if ((typeof e == "function" || typeof e == "object" && e) && "valueOf" in e) {
    var t = e.valueOf();
    if (typeof t == "number")
      return t;
  }
  return e;
}
function wv(e, t) {
  var r = e;
  return "ticks" in r ? r.ticks(t) : r.domain().filter(function(n, a, o) {
    return t == null || o.length <= t || a % Math.round((o.length - 1) / t) === 0;
  });
}
function Tv(e) {
  return e == null ? void 0 : e.toString();
}
var Fi = [], Cv = function() {
  return Fi.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, Av = function() {
  return Fi.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, rp = "ResizeObserver loop completed with undelivered notifications.", Pv = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: rp
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = rp), window.dispatchEvent(e);
}, Ss;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(Ss || (Ss = {}));
var zi = function(e) {
  return Object.freeze(e);
}, Im = function() {
  function e(t, r) {
    this.inlineSize = t, this.blockSize = r, zi(this);
  }
  return e;
}(), Hm = function() {
  function e(t, r, n, a) {
    return this.x = t, this.y = r, this.width = n, this.height = a, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, zi(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, r = t.x, n = t.y, a = t.top, o = t.right, f = t.bottom, s = t.left, c = t.width, d = t.height;
    return { x: r, y: n, top: a, right: o, bottom: f, left: s, width: c, height: d };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), Kf = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, Wm = function(e) {
  if (Kf(e)) {
    var t = e.getBBox(), r = t.width, n = t.height;
    return !r && !n;
  }
  var a = e, o = a.offsetWidth, f = a.offsetHeight;
  return !(o || f || e.getClientRects().length);
}, ap = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var r = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(r && e instanceof r.Element);
}, Rv = function(e) {
  switch (e.tagName) {
    case "INPUT":
      if (e.type !== "image")
        break;
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return !0;
  }
  return !1;
}, cs = typeof window < "u" ? window : {}, ku = /* @__PURE__ */ new WeakMap(), ip = /auto|scroll/, Lv = /^tb|vertical/, Dv = /msie|trident/i.test(cs.navigator && cs.navigator.userAgent), Ur = function(e) {
  return parseFloat(e || "0");
}, qo = function(e, t, r) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = !1), new Im((r ? t : e) || 0, (r ? e : t) || 0);
}, op = zi({
  devicePixelContentBoxSize: qo(),
  borderBoxSize: qo(),
  contentBoxSize: qo(),
  contentRect: new Hm(0, 0, 0, 0)
}), Vm = function(e, t) {
  if (t === void 0 && (t = !1), ku.has(e) && !t)
    return ku.get(e);
  if (Wm(e))
    return ku.set(e, op), op;
  var r = getComputedStyle(e), n = Kf(e) && e.ownerSVGElement && e.getBBox(), a = !Dv && r.boxSizing === "border-box", o = Lv.test(r.writingMode || ""), f = !n && ip.test(r.overflowY || ""), s = !n && ip.test(r.overflowX || ""), c = n ? 0 : Ur(r.paddingTop), d = n ? 0 : Ur(r.paddingRight), g = n ? 0 : Ur(r.paddingBottom), y = n ? 0 : Ur(r.paddingLeft), v = n ? 0 : Ur(r.borderTopWidth), E = n ? 0 : Ur(r.borderRightWidth), k = n ? 0 : Ur(r.borderBottomWidth), M = n ? 0 : Ur(r.borderLeftWidth), T = y + d, m = c + g, R = M + E, O = v + k, _ = s ? e.offsetHeight - O - e.clientHeight : 0, N = f ? e.offsetWidth - R - e.clientWidth : 0, D = a ? T + R : 0, I = a ? m + O : 0, B = n ? n.width : Ur(r.width) - D - N, U = n ? n.height : Ur(r.height) - I - _, q = B + T + N + R, K = U + m + _ + O, j = zi({
    devicePixelContentBoxSize: qo(Math.round(B * devicePixelRatio), Math.round(U * devicePixelRatio), o),
    borderBoxSize: qo(q, K, o),
    contentBoxSize: qo(B, U, o),
    contentRect: new Hm(y, c, B, U)
  });
  return ku.set(e, j), j;
}, jm = function(e, t, r) {
  var n = Vm(e, r), a = n.borderBoxSize, o = n.contentBoxSize, f = n.devicePixelContentBoxSize;
  switch (t) {
    case Ss.DEVICE_PIXEL_CONTENT_BOX:
      return f;
    case Ss.BORDER_BOX:
      return a;
    default:
      return o;
  }
}, Um = function() {
  function e(t) {
    var r = Vm(t);
    this.target = t, this.contentRect = r.contentRect, this.borderBoxSize = zi([r.borderBoxSize]), this.contentBoxSize = zi([r.contentBoxSize]), this.devicePixelContentBoxSize = zi([r.devicePixelContentBoxSize]);
  }
  return e;
}(), Km = function(e) {
  if (Wm(e))
    return 1 / 0;
  for (var t = 0, r = e.parentNode; r; )
    t += 1, r = r.parentNode;
  return t;
}, Ov = function() {
  var e = 1 / 0, t = [];
  Fi.forEach(function(f) {
    if (f.activeTargets.length !== 0) {
      var s = [];
      f.activeTargets.forEach(function(d) {
        var g = new Um(d.target), y = Km(d.target);
        s.push(g), d.lastReportedSize = jm(d.target, d.observedBox), y < e && (e = y);
      }), t.push(function() {
        f.callback.call(f.observer, s, f.observer);
      }), f.activeTargets.splice(0, f.activeTargets.length);
    }
  });
  for (var r = 0, n = t; r < n.length; r++) {
    var a = n[r];
    a();
  }
  return e;
}, lp = function(e) {
  Fi.forEach(function(r) {
    r.activeTargets.splice(0, r.activeTargets.length), r.skippedTargets.splice(0, r.skippedTargets.length), r.observationTargets.forEach(function(a) {
      a.isActive() && (Km(a.target) > e ? r.activeTargets.push(a) : r.skippedTargets.push(a));
    });
  });
}, Mv = function() {
  var e = 0;
  for (lp(e); Cv(); )
    e = Ov(), lp(e);
  return Av() && Pv(), e > 0;
}, Ld, Ym = [], _v = function() {
  return Ym.splice(0).forEach(function(e) {
    return e();
  });
}, Nv = function(e) {
  if (!Ld) {
    var t = 0, r = document.createTextNode(""), n = { characterData: !0 };
    new MutationObserver(function() {
      return _v();
    }).observe(r, n), Ld = function() {
      r.textContent = "".concat(t ? t-- : t++);
    };
  }
  Ym.push(e), Ld();
}, Fv = function(e) {
  Nv(function() {
    requestAnimationFrame(e);
  });
}, $u = 0, zv = function() {
  return !!$u;
}, $v = 250, Bv = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, sp = [
  "resize",
  "load",
  "transitionend",
  "animationend",
  "animationstart",
  "animationiteration",
  "keyup",
  "keydown",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout",
  "blur",
  "focus"
], up = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Dd = !1, Iv = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var r = this;
    if (t === void 0 && (t = $v), !Dd) {
      Dd = !0;
      var n = up(t);
      Fv(function() {
        var a = !1;
        try {
          a = Mv();
        } finally {
          if (Dd = !1, t = n - up(), !zv())
            return;
          a ? r.run(1e3) : t > 0 ? r.run(t) : r.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, r = function() {
      return t.observer && t.observer.observe(document.body, Bv);
    };
    document.body ? r() : cs.addEventListener("DOMContentLoaded", r);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), sp.forEach(function(r) {
      return cs.addEventListener(r, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), sp.forEach(function(r) {
      return cs.removeEventListener(r, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), ef = new Iv(), cp = function(e) {
  !$u && e > 0 && ef.start(), $u += e, !$u && ef.stop();
}, Hv = function(e) {
  return !Kf(e) && !Rv(e) && getComputedStyle(e).display === "inline";
}, Wv = function() {
  function e(t, r) {
    this.target = t, this.observedBox = r || Ss.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = jm(this.target, this.observedBox, !0);
    return Hv(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), Vv = function() {
  function e(t, r) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = r;
  }
  return e;
}(), wu = /* @__PURE__ */ new WeakMap(), dp = function(e, t) {
  for (var r = 0; r < e.length; r += 1)
    if (e[r].target === t)
      return r;
  return -1;
}, Tu = function() {
  function e() {
  }
  return e.connect = function(t, r) {
    var n = new Vv(t, r);
    wu.set(t, n);
  }, e.observe = function(t, r, n) {
    var a = wu.get(t), o = a.observationTargets.length === 0;
    dp(a.observationTargets, r) < 0 && (o && Fi.push(a), a.observationTargets.push(new Wv(r, n && n.box)), cp(1), ef.schedule());
  }, e.unobserve = function(t, r) {
    var n = wu.get(t), a = dp(n.observationTargets, r), o = n.observationTargets.length === 1;
    a >= 0 && (o && Fi.splice(Fi.indexOf(n), 1), n.observationTargets.splice(a, 1), cp(-1));
  }, e.disconnect = function(t) {
    var r = this, n = wu.get(t);
    n.observationTargets.slice().forEach(function(a) {
      return r.unobserve(t, a.target);
    }), n.activeTargets.splice(0, n.activeTargets.length);
  }, e;
}(), jv = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Tu.connect(this, t);
  }
  return e.prototype.observe = function(t, r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!ap(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Tu.observe(this, t, r);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!ap(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Tu.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    Tu.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
const Uv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ResizeObserver: jv,
  ResizeObserverEntry: Um,
  ResizeObserverSize: Im
}, Symbol.toStringTag, { value: "Module" })), Kv = /* @__PURE__ */ Wf(Uv);
var fp = Gm, _a = qm(Sm), Yv = qm(wy), Wo = Gv(se), Xv = Kv, qv = ["className", "children", "debounceTime", "ignoreDimensions", "parentSizeStyles", "enableDebounceLeadingCall"];
function Xm(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Xm = function(a) {
    return a ? r : t;
  })(e);
}
function Gv(e, t) {
  if (!t && e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Xm(t);
  if (r && r.has(e))
    return r.get(e);
  var n = {}, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var f = a ? Object.getOwnPropertyDescriptor(e, o) : null;
      f && (f.get || f.set) ? Object.defineProperty(n, o, f) : n[o] = e[o];
    }
  return n.default = e, r && r.set(e, n), n;
}
function qm(e) {
  return e && e.__esModule ? e : { default: e };
}
function Xu() {
  return Xu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Xu.apply(this, arguments);
}
function Zv(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var Qv = [];
function Gm(e) {
  var t = e.className, r = e.children, n = e.debounceTime, a = n === void 0 ? 300 : n, o = e.ignoreDimensions, f = o === void 0 ? Qv : o, s = e.parentSizeStyles, c = s === void 0 ? {
    width: "100%",
    height: "100%"
  } : s, d = e.enableDebounceLeadingCall, g = d === void 0 ? !0 : d, y = Zv(e, qv), v = (0, Wo.useRef)(null), E = (0, Wo.useRef)(0), k = (0, Wo.useState)({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), M = k[0], T = k[1], m = (0, Wo.useMemo)(function() {
    var R = Array.isArray(f) ? f : [f];
    return (0, Yv.default)(function(O) {
      T(function(_) {
        var N = Object.keys(_), D = N.filter(function(B) {
          return _[B] !== O[B];
        }), I = D.every(function(B) {
          return R.includes(B);
        });
        return I ? _ : O;
      });
    }, a, {
      leading: g
    });
  }, [a, g, f]);
  return (0, Wo.useEffect)(function() {
    var R = new Xv.ResizeObserver(function(O) {
      O === void 0 && (O = []), O.forEach(function(_) {
        var N = _.contentRect, D = N.left, I = N.top, B = N.width, U = N.height;
        E.current = window.requestAnimationFrame(function() {
          m({
            width: B,
            height: U,
            top: I,
            left: D
          });
        });
      });
    });
    return v.current && R.observe(v.current), function() {
      window.cancelAnimationFrame(E.current), R.disconnect(), m != null && m.cancel && m.cancel();
    };
  }, [m]), /* @__PURE__ */ Wo.default.createElement("div", Xu({
    style: c,
    ref: v,
    className: t
  }, y), r(Xu({}, M, {
    ref: v.current,
    resize: m
  })));
}
Gm.propTypes = {
  className: _a.default.string,
  debounceTime: _a.default.number,
  enableDebounceLeadingCall: _a.default.bool,
  ignoreDimensions: _a.default.oneOfType([_a.default.any, _a.default.arrayOf(_a.default.any)]),
  children: _a.default.func.isRequired
};
var Od = /* @__PURE__ */ new Date(), Md = /* @__PURE__ */ new Date();
function ha(e, t, r, n) {
  function a(o) {
    return e(o = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+o)), o;
  }
  return a.floor = function(o) {
    return e(o = /* @__PURE__ */ new Date(+o)), o;
  }, a.ceil = function(o) {
    return e(o = new Date(o - 1)), t(o, 1), e(o), o;
  }, a.round = function(o) {
    var f = a(o), s = a.ceil(o);
    return o - f < s - o ? f : s;
  }, a.offset = function(o, f) {
    return t(o = /* @__PURE__ */ new Date(+o), f == null ? 1 : Math.floor(f)), o;
  }, a.range = function(o, f, s) {
    var c = [], d;
    if (o = a.ceil(o), s = s == null ? 1 : Math.floor(s), !(o < f) || !(s > 0))
      return c;
    do
      c.push(d = /* @__PURE__ */ new Date(+o)), t(o, s), e(o);
    while (d < o && o < f);
    return c;
  }, a.filter = function(o) {
    return ha(function(f) {
      if (f >= f)
        for (; e(f), !o(f); )
          f.setTime(f - 1);
    }, function(f, s) {
      if (f >= f)
        if (s < 0)
          for (; ++s <= 0; )
            for (; t(f, -1), !o(f); )
              ;
        else
          for (; --s >= 0; )
            for (; t(f, 1), !o(f); )
              ;
    });
  }, r && (a.count = function(o, f) {
    return Od.setTime(+o), Md.setTime(+f), e(Od), e(Md), Math.floor(r(Od, Md));
  }, a.every = function(o) {
    return o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? a.filter(n ? function(f) {
      return n(f) % o === 0;
    } : function(f) {
      return a.count(0, f) % o === 0;
    }) : a;
  }), a;
}
const Jv = 1e3, Yf = Jv * 60, ex = Yf * 60, Xf = ex * 24, Zm = Xf * 7;
var Qm = ha(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Yf) / Xf,
  (e) => e.getDate() - 1
);
const Jm = Qm;
Qm.range;
function Wi(e) {
  return ha(function(t) {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, function(t, r) {
    t.setDate(t.getDate() + r * 7);
  }, function(t, r) {
    return (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Yf) / Zm;
  });
}
var eg = Wi(0), qu = Wi(1), tx = Wi(2), nx = Wi(3), Qo = Wi(4), rx = Wi(5), ax = Wi(6);
eg.range;
qu.range;
tx.range;
nx.range;
Qo.range;
rx.range;
ax.range;
var qf = ha(function(e) {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, function(e, t) {
  e.setFullYear(e.getFullYear() + t);
}, function(e, t) {
  return t.getFullYear() - e.getFullYear();
}, function(e) {
  return e.getFullYear();
});
qf.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ha(function(t) {
    t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, function(t, r) {
    t.setFullYear(t.getFullYear() + r * e);
  });
};
const Es = qf;
qf.range;
var tg = ha(function(e) {
  e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCDate(e.getUTCDate() + t);
}, function(e, t) {
  return (t - e) / Xf;
}, function(e) {
  return e.getUTCDate() - 1;
});
const ng = tg;
tg.range;
function Vi(e) {
  return ha(function(t) {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, function(t, r) {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, function(t, r) {
    return (r - t) / Zm;
  });
}
var rg = Vi(0), Gu = Vi(1), ix = Vi(2), ox = Vi(3), Jo = Vi(4), lx = Vi(5), sx = Vi(6);
rg.range;
Gu.range;
ix.range;
ox.range;
Jo.range;
lx.range;
sx.range;
var Gf = ha(function(e) {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, function(e, t) {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, function(e, t) {
  return t.getUTCFullYear() - e.getUTCFullYear();
}, function(e) {
  return e.getUTCFullYear();
});
Gf.every = function(e) {
  return !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ha(function(t) {
    t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, function(t, r) {
    t.setUTCFullYear(t.getUTCFullYear() + r * e);
  });
};
const ks = Gf;
Gf.range;
function _d(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Nd(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function rs(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function ux(e) {
  var t = e.dateTime, r = e.date, n = e.time, a = e.periods, o = e.days, f = e.shortDays, s = e.months, c = e.shortMonths, d = as(a), g = is(a), y = as(o), v = is(o), E = as(f), k = is(f), M = as(s), T = is(s), m = as(c), R = is(c), O = {
    a: ue,
    A: fe,
    b: ae,
    B: V,
    c: null,
    d: vp,
    e: vp,
    f: Ox,
    g: Wx,
    G: jx,
    H: Rx,
    I: Lx,
    j: Dx,
    L: ag,
    m: Mx,
    M: _x,
    p: Z,
    q: ee,
    Q: Sp,
    s: Ep,
    S: Nx,
    u: Fx,
    U: zx,
    V: $x,
    w: Bx,
    W: Ix,
    x: null,
    X: null,
    y: Hx,
    Y: Vx,
    Z: Ux,
    "%": bp
  }, _ = {
    a: Ae,
    A: xe,
    b: De,
    B: oe,
    c: null,
    d: xp,
    e: xp,
    f: qx,
    g: ib,
    G: lb,
    H: Kx,
    I: Yx,
    j: Xx,
    L: og,
    m: Gx,
    M: Zx,
    p: ze,
    q: Ie,
    Q: Sp,
    s: Ep,
    S: Qx,
    u: Jx,
    U: eb,
    V: tb,
    w: nb,
    W: rb,
    x: null,
    X: null,
    y: ab,
    Y: ob,
    Z: sb,
    "%": bp
  }, N = {
    a: q,
    A: K,
    b: j,
    B: te,
    c: me,
    d: gp,
    e: gp,
    f: Tx,
    g: mp,
    G: pp,
    H: yp,
    I: yp,
    j: Sx,
    L: wx,
    m: bx,
    M: Ex,
    p: U,
    q: xx,
    Q: Ax,
    s: Px,
    S: kx,
    u: px,
    U: mx,
    V: gx,
    w: hx,
    W: yx,
    x: H,
    X: le,
    y: mp,
    Y: pp,
    Z: vx,
    "%": Cx
  };
  O.x = D(r, O), O.X = D(n, O), O.c = D(t, O), _.x = D(r, _), _.X = D(n, _), _.c = D(t, _);
  function D(Ce, ge) {
    return function(Oe) {
      var ie = [], we = -1, Pe = 0, He = Ce.length, Ye, Je, at;
      for (Oe instanceof Date || (Oe = /* @__PURE__ */ new Date(+Oe)); ++we < He; )
        Ce.charCodeAt(we) === 37 && (ie.push(Ce.slice(Pe, we)), (Je = hp[Ye = Ce.charAt(++we)]) != null ? Ye = Ce.charAt(++we) : Je = Ye === "e" ? " " : "0", (at = ge[Ye]) && (Ye = at(Oe, Je)), ie.push(Ye), Pe = we + 1);
      return ie.push(Ce.slice(Pe, we)), ie.join("");
    };
  }
  function I(Ce, ge) {
    return function(Oe) {
      var ie = rs(1900, void 0, 1), we = B(ie, Ce, Oe += "", 0), Pe, He;
      if (we != Oe.length)
        return null;
      if ("Q" in ie)
        return new Date(ie.Q);
      if ("s" in ie)
        return new Date(ie.s * 1e3 + ("L" in ie ? ie.L : 0));
      if (ge && !("Z" in ie) && (ie.Z = 0), "p" in ie && (ie.H = ie.H % 12 + ie.p * 12), ie.m === void 0 && (ie.m = "q" in ie ? ie.q : 0), "V" in ie) {
        if (ie.V < 1 || ie.V > 53)
          return null;
        "w" in ie || (ie.w = 1), "Z" in ie ? (Pe = Nd(rs(ie.y, 0, 1)), He = Pe.getUTCDay(), Pe = He > 4 || He === 0 ? Gu.ceil(Pe) : Gu(Pe), Pe = ng.offset(Pe, (ie.V - 1) * 7), ie.y = Pe.getUTCFullYear(), ie.m = Pe.getUTCMonth(), ie.d = Pe.getUTCDate() + (ie.w + 6) % 7) : (Pe = _d(rs(ie.y, 0, 1)), He = Pe.getDay(), Pe = He > 4 || He === 0 ? qu.ceil(Pe) : qu(Pe), Pe = Jm.offset(Pe, (ie.V - 1) * 7), ie.y = Pe.getFullYear(), ie.m = Pe.getMonth(), ie.d = Pe.getDate() + (ie.w + 6) % 7);
      } else
        ("W" in ie || "U" in ie) && ("w" in ie || (ie.w = "u" in ie ? ie.u % 7 : "W" in ie ? 1 : 0), He = "Z" in ie ? Nd(rs(ie.y, 0, 1)).getUTCDay() : _d(rs(ie.y, 0, 1)).getDay(), ie.m = 0, ie.d = "W" in ie ? (ie.w + 6) % 7 + ie.W * 7 - (He + 5) % 7 : ie.w + ie.U * 7 - (He + 6) % 7);
      return "Z" in ie ? (ie.H += ie.Z / 100 | 0, ie.M += ie.Z % 100, Nd(ie)) : _d(ie);
    };
  }
  function B(Ce, ge, Oe, ie) {
    for (var we = 0, Pe = ge.length, He = Oe.length, Ye, Je; we < Pe; ) {
      if (ie >= He)
        return -1;
      if (Ye = ge.charCodeAt(we++), Ye === 37) {
        if (Ye = ge.charAt(we++), Je = N[Ye in hp ? ge.charAt(we++) : Ye], !Je || (ie = Je(Ce, Oe, ie)) < 0)
          return -1;
      } else if (Ye != Oe.charCodeAt(ie++))
        return -1;
    }
    return ie;
  }
  function U(Ce, ge, Oe) {
    var ie = d.exec(ge.slice(Oe));
    return ie ? (Ce.p = g.get(ie[0].toLowerCase()), Oe + ie[0].length) : -1;
  }
  function q(Ce, ge, Oe) {
    var ie = E.exec(ge.slice(Oe));
    return ie ? (Ce.w = k.get(ie[0].toLowerCase()), Oe + ie[0].length) : -1;
  }
  function K(Ce, ge, Oe) {
    var ie = y.exec(ge.slice(Oe));
    return ie ? (Ce.w = v.get(ie[0].toLowerCase()), Oe + ie[0].length) : -1;
  }
  function j(Ce, ge, Oe) {
    var ie = m.exec(ge.slice(Oe));
    return ie ? (Ce.m = R.get(ie[0].toLowerCase()), Oe + ie[0].length) : -1;
  }
  function te(Ce, ge, Oe) {
    var ie = M.exec(ge.slice(Oe));
    return ie ? (Ce.m = T.get(ie[0].toLowerCase()), Oe + ie[0].length) : -1;
  }
  function me(Ce, ge, Oe) {
    return B(Ce, t, ge, Oe);
  }
  function H(Ce, ge, Oe) {
    return B(Ce, r, ge, Oe);
  }
  function le(Ce, ge, Oe) {
    return B(Ce, n, ge, Oe);
  }
  function ue(Ce) {
    return f[Ce.getDay()];
  }
  function fe(Ce) {
    return o[Ce.getDay()];
  }
  function ae(Ce) {
    return c[Ce.getMonth()];
  }
  function V(Ce) {
    return s[Ce.getMonth()];
  }
  function Z(Ce) {
    return a[+(Ce.getHours() >= 12)];
  }
  function ee(Ce) {
    return 1 + ~~(Ce.getMonth() / 3);
  }
  function Ae(Ce) {
    return f[Ce.getUTCDay()];
  }
  function xe(Ce) {
    return o[Ce.getUTCDay()];
  }
  function De(Ce) {
    return c[Ce.getUTCMonth()];
  }
  function oe(Ce) {
    return s[Ce.getUTCMonth()];
  }
  function ze(Ce) {
    return a[+(Ce.getUTCHours() >= 12)];
  }
  function Ie(Ce) {
    return 1 + ~~(Ce.getUTCMonth() / 3);
  }
  return {
    format: function(Ce) {
      var ge = D(Ce += "", O);
      return ge.toString = function() {
        return Ce;
      }, ge;
    },
    parse: function(Ce) {
      var ge = I(Ce += "", !1);
      return ge.toString = function() {
        return Ce;
      }, ge;
    },
    utcFormat: function(Ce) {
      var ge = D(Ce += "", _);
      return ge.toString = function() {
        return Ce;
      }, ge;
    },
    utcParse: function(Ce) {
      var ge = I(Ce += "", !0);
      return ge.toString = function() {
        return Ce;
      }, ge;
    }
  };
}
var hp = { "-": "", _: " ", 0: "0" }, jn = /^\s*\d+/, cx = /^%/, dx = /[\\^$*+?|[\]().{}]/g;
function Gt(e, t, r) {
  var n = e < 0 ? "-" : "", a = (n ? -e : e) + "", o = a.length;
  return n + (o < r ? new Array(r - o + 1).join(t) + a : a);
}
function fx(e) {
  return e.replace(dx, "\\$&");
}
function as(e) {
  return new RegExp("^(?:" + e.map(fx).join("|") + ")", "i");
}
function is(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function hx(e, t, r) {
  var n = jn.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function px(e, t, r) {
  var n = jn.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function mx(e, t, r) {
  var n = jn.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function gx(e, t, r) {
  var n = jn.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function yx(e, t, r) {
  var n = jn.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function pp(e, t, r) {
  var n = jn.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function mp(e, t, r) {
  var n = jn.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function vx(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function xx(e, t, r) {
  var n = jn.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function bx(e, t, r) {
  var n = jn.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function gp(e, t, r) {
  var n = jn.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function Sx(e, t, r) {
  var n = jn.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function yp(e, t, r) {
  var n = jn.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function Ex(e, t, r) {
  var n = jn.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function kx(e, t, r) {
  var n = jn.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function wx(e, t, r) {
  var n = jn.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function Tx(e, t, r) {
  var n = jn.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function Cx(e, t, r) {
  var n = cx.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function Ax(e, t, r) {
  var n = jn.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function Px(e, t, r) {
  var n = jn.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function vp(e, t) {
  return Gt(e.getDate(), t, 2);
}
function Rx(e, t) {
  return Gt(e.getHours(), t, 2);
}
function Lx(e, t) {
  return Gt(e.getHours() % 12 || 12, t, 2);
}
function Dx(e, t) {
  return Gt(1 + Jm.count(Es(e), e), t, 3);
}
function ag(e, t) {
  return Gt(e.getMilliseconds(), t, 3);
}
function Ox(e, t) {
  return ag(e, t) + "000";
}
function Mx(e, t) {
  return Gt(e.getMonth() + 1, t, 2);
}
function _x(e, t) {
  return Gt(e.getMinutes(), t, 2);
}
function Nx(e, t) {
  return Gt(e.getSeconds(), t, 2);
}
function Fx(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function zx(e, t) {
  return Gt(eg.count(Es(e) - 1, e), t, 2);
}
function ig(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Qo(e) : Qo.ceil(e);
}
function $x(e, t) {
  return e = ig(e), Gt(Qo.count(Es(e), e) + (Es(e).getDay() === 4), t, 2);
}
function Bx(e) {
  return e.getDay();
}
function Ix(e, t) {
  return Gt(qu.count(Es(e) - 1, e), t, 2);
}
function Hx(e, t) {
  return Gt(e.getFullYear() % 100, t, 2);
}
function Wx(e, t) {
  return e = ig(e), Gt(e.getFullYear() % 100, t, 2);
}
function Vx(e, t) {
  return Gt(e.getFullYear() % 1e4, t, 4);
}
function jx(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Qo(e) : Qo.ceil(e), Gt(e.getFullYear() % 1e4, t, 4);
}
function Ux(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Gt(t / 60 | 0, "0", 2) + Gt(t % 60, "0", 2);
}
function xp(e, t) {
  return Gt(e.getUTCDate(), t, 2);
}
function Kx(e, t) {
  return Gt(e.getUTCHours(), t, 2);
}
function Yx(e, t) {
  return Gt(e.getUTCHours() % 12 || 12, t, 2);
}
function Xx(e, t) {
  return Gt(1 + ng.count(ks(e), e), t, 3);
}
function og(e, t) {
  return Gt(e.getUTCMilliseconds(), t, 3);
}
function qx(e, t) {
  return og(e, t) + "000";
}
function Gx(e, t) {
  return Gt(e.getUTCMonth() + 1, t, 2);
}
function Zx(e, t) {
  return Gt(e.getUTCMinutes(), t, 2);
}
function Qx(e, t) {
  return Gt(e.getUTCSeconds(), t, 2);
}
function Jx(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function eb(e, t) {
  return Gt(rg.count(ks(e) - 1, e), t, 2);
}
function lg(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Jo(e) : Jo.ceil(e);
}
function tb(e, t) {
  return e = lg(e), Gt(Jo.count(ks(e), e) + (ks(e).getUTCDay() === 4), t, 2);
}
function nb(e) {
  return e.getUTCDay();
}
function rb(e, t) {
  return Gt(Gu.count(ks(e) - 1, e), t, 2);
}
function ab(e, t) {
  return Gt(e.getUTCFullYear() % 100, t, 2);
}
function ib(e, t) {
  return e = lg(e), Gt(e.getUTCFullYear() % 100, t, 2);
}
function ob(e, t) {
  return Gt(e.getUTCFullYear() % 1e4, t, 4);
}
function lb(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Jo(e) : Jo.ceil(e), Gt(e.getUTCFullYear() % 1e4, t, 4);
}
function sb() {
  return "+0000";
}
function bp() {
  return "%";
}
function Sp(e) {
  return +e;
}
function Ep(e) {
  return Math.floor(+e / 1e3);
}
var Vo, tf, sg;
ub({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function ub(e) {
  return Vo = ux(e), tf = Vo.format, sg = Vo.parse, Vo.utcFormat, Vo.utcParse, Vo;
}
const wt = se.createContext({}), Vt = {
  arr: Array.isArray,
  obj: (e) => Object.prototype.toString.call(e) === "[object Object]",
  fun: (e) => typeof e == "function",
  str: (e) => typeof e == "string",
  num: (e) => typeof e == "number",
  und: (e) => e === void 0,
  nul: (e) => e === null,
  set: (e) => e instanceof Set,
  map: (e) => e instanceof Map,
  equ(e, t) {
    if (typeof e != typeof t)
      return !1;
    if (Vt.str(e) || Vt.num(e))
      return e === t;
    if (Vt.obj(e) && Vt.obj(t) && Object.keys(e).length + Object.keys(t).length === 0)
      return !0;
    let r;
    for (r in e)
      if (!(r in t))
        return !1;
    for (r in t)
      if (e[r] !== t[r])
        return !1;
    return Vt.und(r) ? e === t : !0;
  }
};
function cb(e, t) {
  return t === void 0 && (t = !0), (r) => (Vt.arr(r) ? r : Object.keys(r)).reduce((n, a) => {
    const o = t ? a[0].toLowerCase() + a.substring(1) : a;
    return n[o] = e(o), n;
  }, e);
}
function ug() {
  const e = se.useState(!1), t = e[1];
  return se.useCallback(() => t((n) => !n), []);
}
function Pi(e, t) {
  return Vt.und(e) || Vt.nul(e) ? t : e;
}
function Xo(e) {
  return Vt.und(e) ? [] : Vt.arr(e) ? e : [e];
}
function _r(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return Vt.fun(e) ? e(...r) : e;
}
function db(e) {
  return e.to, e.from, e.config, e.onStart, e.onRest, e.onFrame, e.children, e.reset, e.reverse, e.force, e.immediate, e.delay, e.attach, e.destroyed, e.interpolateTo, e.ref, e.lazy, Gr(e, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);
}
function Fd(e) {
  const t = db(e);
  if (Vt.und(t))
    return fn({
      to: t
    }, e);
  const r = Object.keys(e).reduce((n, a) => Vt.und(t[a]) ? fn({}, n, {
    [a]: e[a]
  }) : n, {});
  return fn({
    to: t
  }, r);
}
function fb(e, t) {
  return t && (Vt.fun(t) ? t(e) : Vt.obj(t) && (t.current = e)), e;
}
class Nr {
  constructor() {
    this.payload = void 0, this.children = [];
  }
  getAnimatedValue() {
    return this.getValue();
  }
  getPayload() {
    return this.payload || this;
  }
  attach() {
  }
  detach() {
  }
  getChildren() {
    return this.children;
  }
  addChild(t) {
    this.children.length === 0 && this.attach(), this.children.push(t);
  }
  removeChild(t) {
    const r = this.children.indexOf(t);
    this.children.splice(r, 1), this.children.length === 0 && this.detach();
  }
}
class nf extends Nr {
  constructor() {
    super(...arguments), this.payload = [], this.attach = () => this.payload.forEach((t) => t instanceof Nr && t.addChild(this)), this.detach = () => this.payload.forEach((t) => t instanceof Nr && t.removeChild(this));
  }
}
class cg extends Nr {
  constructor() {
    super(...arguments), this.payload = {}, this.attach = () => Object.values(this.payload).forEach((t) => t instanceof Nr && t.addChild(this)), this.detach = () => Object.values(this.payload).forEach((t) => t instanceof Nr && t.removeChild(this));
  }
  getValue(t) {
    t === void 0 && (t = !1);
    const r = {};
    for (const n in this.payload) {
      const a = this.payload[n];
      t && !(a instanceof Nr) || (r[n] = a instanceof Nr ? a[t ? "getAnimatedValue" : "getValue"]() : a);
    }
    return r;
  }
  getAnimatedValue() {
    return this.getValue(!0);
  }
}
let Zf;
function hb(e, t) {
  Zf = {
    fn: e,
    transform: t
  };
}
let dg;
function pb(e) {
  dg = e;
}
let fg = (e) => typeof window < "u" ? window.requestAnimationFrame(e) : -1, Zu;
function mb(e) {
  Zu = e;
}
let hg = () => Date.now(), gb = (e) => e.current, pg;
function yb(e) {
  pg = e;
}
class vb extends cg {
  constructor(t, r) {
    super(), this.update = void 0, this.payload = t.style ? fn({}, t, {
      style: pg(t.style)
    }) : t, this.update = r, this.attach();
  }
}
const xb = (e) => Vt.fun(e) && !(e.prototype instanceof i.Component), bb = (e) => se.forwardRef((r, n) => {
  const a = ug(), o = se.useRef(!0), f = se.useRef(null), s = se.useRef(null), c = se.useCallback((v) => {
    const E = f.current, k = () => {
      let M = !1;
      s.current && (M = Zf.fn(s.current, f.current.getAnimatedValue())), (!s.current || M === !1) && a();
    };
    f.current = new vb(v, k), E && E.detach();
  }, []);
  se.useEffect(() => () => {
    o.current = !1, f.current && f.current.detach();
  }, []), se.useImperativeHandle(n, () => gb(s)), c(r);
  const d = f.current.getValue();
  d.scrollTop, d.scrollLeft;
  const g = Gr(d, ["scrollTop", "scrollLeft"]), y = xb(e) ? void 0 : (v) => s.current = fb(v, n);
  return i.createElement(e, fn({}, g, {
    ref: y
  }));
});
let ds = !1;
const $i = /* @__PURE__ */ new Set(), mg = () => {
  if (!ds)
    return !1;
  let e = hg();
  for (let t of $i) {
    let r = !1;
    for (let n = 0; n < t.configs.length; n++) {
      let a = t.configs[n], o, f;
      for (let s = 0; s < a.animatedValues.length; s++) {
        let c = a.animatedValues[s];
        if (c.done)
          continue;
        let d = a.fromValues[s], g = a.toValues[s], y = c.lastPosition, v = g instanceof Nr, E = Array.isArray(a.initialVelocity) ? a.initialVelocity[s] : a.initialVelocity;
        if (v && (g = g.getValue()), a.immediate) {
          c.setValue(g), c.done = !0;
          continue;
        }
        if (typeof d == "string" || typeof g == "string") {
          c.setValue(g), c.done = !0;
          continue;
        }
        if (a.duration !== void 0)
          y = d + a.easing((e - c.startTime) / a.duration) * (g - d), o = e >= c.startTime + a.duration;
        else if (a.decay)
          y = d + E / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (e - c.startTime))), o = Math.abs(c.lastPosition - y) < 0.1, o && (g = y);
        else {
          f = c.lastTime !== void 0 ? c.lastTime : e, E = c.lastVelocity !== void 0 ? c.lastVelocity : a.initialVelocity, e > f + 64 && (f = e);
          let k = Math.floor(e - f);
          for (let R = 0; R < k; ++R) {
            let O = -a.tension * (y - g), _ = -a.friction * E, N = (O + _) / a.mass;
            E = E + N * 1 / 1e3, y = y + E * 1 / 1e3;
          }
          let M = a.clamp && a.tension !== 0 ? d < g ? y > g : y < g : !1, T = Math.abs(E) <= a.precision, m = a.tension !== 0 ? Math.abs(g - y) <= a.precision : !0;
          o = M || T && m, c.lastVelocity = E, c.lastTime = e;
        }
        v && !a.toValues[s].done && (o = !1), o ? (c.value !== g && (y = g), c.done = !0) : r = !0, c.setValue(y), c.lastPosition = y;
      }
      t.props.onFrame && (t.values[a.name] = a.interpolation.getValue());
    }
    t.props.onFrame && t.props.onFrame(t.values), r || ($i.delete(t), t.stop(!0));
  }
  return $i.size ? fg(mg) : ds = !1, ds;
}, Sb = (e) => {
  $i.has(e) || $i.add(e), ds || (ds = !0, fg(mg));
}, Eb = (e) => {
  $i.has(e) && $i.delete(e);
};
function Qu(e, t, r) {
  if (typeof e == "function")
    return e;
  if (Array.isArray(e))
    return Qu({
      range: e,
      output: t,
      extrapolate: r
    });
  if (Zu && typeof e.output[0] == "string")
    return Zu(e);
  const n = e, a = n.output, o = n.range || [0, 1], f = n.extrapolateLeft || n.extrapolate || "extend", s = n.extrapolateRight || n.extrapolate || "extend", c = n.easing || ((d) => d);
  return (d) => {
    const g = wb(d, o);
    return kb(d, o[g], o[g + 1], a[g], a[g + 1], c, f, s, n.map);
  };
}
function kb(e, t, r, n, a, o, f, s, c) {
  let d = c ? c(e) : e;
  if (d < t) {
    if (f === "identity")
      return d;
    f === "clamp" && (d = t);
  }
  if (d > r) {
    if (s === "identity")
      return d;
    s === "clamp" && (d = r);
  }
  return n === a ? n : t === r ? e <= t ? n : a : (t === -1 / 0 ? d = -d : r === 1 / 0 ? d = d - t : d = (d - t) / (r - t), d = o(d), n === -1 / 0 ? d = -d : a === 1 / 0 ? d = d + n : d = d * (a - n) + n, d);
}
function wb(e, t) {
  for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r)
    ;
  return r - 1;
}
class el extends nf {
  constructor(t, r, n, a) {
    super(), this.calc = void 0, this.payload = t instanceof nf && !(t instanceof el) ? t.getPayload() : Array.isArray(t) ? t : [t], this.calc = Qu(r, n, a);
  }
  getValue() {
    return this.calc(...this.payload.map((t) => t.getValue()));
  }
  updateConfig(t, r, n) {
    this.calc = Qu(t, r, n);
  }
  interpolate(t, r, n) {
    return new el(this, t, r, n);
  }
}
const Tb = (e, t, r) => e && new el(e, t, r);
function gg(e, t) {
  "update" in e ? t.add(e) : e.getChildren().forEach((r) => gg(r, t));
}
class rf extends Nr {
  constructor(t) {
    var r;
    super(), r = this, this.animatedStyles = /* @__PURE__ */ new Set(), this.value = void 0, this.startPosition = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.startTime = void 0, this.lastTime = void 0, this.done = !1, this.setValue = function(n, a) {
      a === void 0 && (a = !0), r.value = n, a && r.flush();
    }, this.value = t, this.startPosition = t, this.lastPosition = t;
  }
  flush() {
    this.animatedStyles.size === 0 && gg(this, this.animatedStyles), this.animatedStyles.forEach((t) => t.update());
  }
  clearStyles() {
    this.animatedStyles.clear();
  }
  getValue() {
    return this.value;
  }
  interpolate(t, r, n) {
    return new el(this, t, r, n);
  }
}
class Cb extends nf {
  constructor(t) {
    super(), this.payload = t.map((r) => new rf(r));
  }
  setValue(t, r) {
    r === void 0 && (r = !0), Array.isArray(t) ? t.length === this.payload.length && t.forEach((n, a) => this.payload[a].setValue(n, r)) : this.payload.forEach((n) => n.setValue(t, r));
  }
  getValue() {
    return this.payload.map((t) => t.getValue());
  }
  interpolate(t, r) {
    return new el(this, t, r);
  }
}
let Ab = 0;
class Pb {
  constructor() {
    this.id = void 0, this.idle = !0, this.hasChanged = !1, this.guid = 0, this.local = 0, this.props = {}, this.merged = {}, this.animations = {}, this.interpolations = {}, this.values = {}, this.configs = [], this.listeners = [], this.queue = [], this.localQueue = void 0, this.getValues = () => this.interpolations, this.id = Ab++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */
  update(t) {
    if (!t)
      return this;
    const r = Fd(t), n = r.delay, a = n === void 0 ? 0 : n, o = r.to, f = Gr(r, ["delay", "to"]);
    if (Vt.arr(o) || Vt.fun(o))
      this.queue.push(fn({}, f, {
        delay: a,
        to: o
      }));
    else if (o) {
      let s = {};
      Object.entries(o).forEach((c) => {
        let d = c[0], g = c[1];
        const y = fn({
          to: {
            [d]: g
          },
          delay: _r(a, d)
        }, f), v = s[y.delay] && s[y.delay].to;
        s[y.delay] = fn({}, s[y.delay], y, {
          to: fn({}, v, y.to)
        });
      }), this.queue = Object.values(s);
    }
    return this.queue = this.queue.sort((s, c) => s.delay - c.delay), this.diff(f), this;
  }
  /** start(onEnd)
   *  This function either executes a queue, if present, or starts the frameloop, which animates */
  start(t) {
    if (this.queue.length) {
      this.idle = !1, this.localQueue && this.localQueue.forEach((a) => {
        let o = a.from, f = o === void 0 ? {} : o, s = a.to, c = s === void 0 ? {} : s;
        Vt.obj(f) && (this.merged = fn({}, f, this.merged)), Vt.obj(c) && (this.merged = fn({}, this.merged, c));
      });
      const r = this.local = ++this.guid, n = this.localQueue = this.queue;
      this.queue = [], n.forEach((a, o) => {
        let f = a.delay, s = Gr(a, ["delay"]);
        const c = (g) => {
          o === n.length - 1 && r === this.guid && g && (this.idle = !0, this.props.onRest && this.props.onRest(this.merged)), t && t();
        };
        let d = Vt.arr(s.to) || Vt.fun(s.to);
        f ? setTimeout(() => {
          r === this.guid && (d ? this.runAsync(s, c) : this.diff(s).start(c));
        }, f) : d ? this.runAsync(s, c) : this.diff(s).start(c);
      });
    } else
      Vt.fun(t) && this.listeners.push(t), this.props.onStart && this.props.onStart(), Sb(this);
    return this;
  }
  stop(t) {
    return this.listeners.forEach((r) => r(t)), this.listeners = [], this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */
  pause(t) {
    return this.stop(!0), t && Eb(this), this;
  }
  runAsync(t, r) {
    var n = this;
    t.delay;
    let a = Gr(t, ["delay"]);
    const o = this.local;
    let f = Promise.resolve(void 0);
    if (Vt.arr(a.to))
      for (let s = 0; s < a.to.length; s++) {
        const c = s, d = fn({}, a, Fd(a.to[c]));
        Vt.arr(d.config) && (d.config = d.config[c]), f = f.then(() => {
          if (o === this.guid)
            return new Promise((g) => this.diff(d).start(g));
        });
      }
    else if (Vt.fun(a.to)) {
      let s = 0, c;
      f = f.then(() => a.to(
        // next(props)
        (d) => {
          const g = fn({}, a, Fd(d));
          if (Vt.arr(g.config) && (g.config = g.config[s]), s++, o === this.guid)
            return c = new Promise((y) => this.diff(g).start(y));
        },
        // cancel()
        function(d) {
          return d === void 0 && (d = !0), n.stop(d);
        }
      ).then(() => c));
    }
    f.then(r);
  }
  diff(t) {
    this.props = fn({}, this.props, t);
    let r = this.props, n = r.from, a = n === void 0 ? {} : n, o = r.to, f = o === void 0 ? {} : o, s = r.config, c = s === void 0 ? {} : s, d = r.reverse, g = r.attach, y = r.reset, v = r.immediate;
    if (d) {
      var E = [f, a];
      a = E[0], f = E[1];
    }
    this.merged = fn({}, a, this.merged, f), this.hasChanged = !1;
    let k = g && g(this);
    if (this.animations = Object.entries(this.merged).reduce((M, T) => {
      let m = T[0], R = T[1], O = M[m] || {};
      const _ = Vt.num(R), N = Vt.str(R) && !R.startsWith("#") && !/\d/.test(R) && !dg[R], D = Vt.arr(R), I = !_ && !D && !N;
      let B = Vt.und(a[m]) ? R : a[m], U = _ || D || N ? R : 1, q = _r(c, m);
      k && (U = k.animations[m].parent);
      let K = O.parent, j = O.interpolation, te = Xo(k ? U.getPayload() : U), me, H = R;
      I && (H = Zu({
        range: [0, 1],
        output: [R, R]
      })(1));
      let le = j && j.getValue();
      const fe = !Vt.und(K) && O.animatedValues.some((ee) => !ee.done), ae = !Vt.equ(H, le), V = !Vt.equ(H, O.previous), Z = !Vt.equ(q, O.config);
      if (y || V && ae || Z) {
        if (_ || N)
          K = j = O.parent || new rf(B);
        else if (D)
          K = j = O.parent || new Cb(B);
        else if (I) {
          let ee = O.interpolation && O.interpolation.calc(O.parent.value);
          ee = ee !== void 0 && !y ? ee : B, O.parent ? (K = O.parent, K.setValue(0, !1)) : K = new rf(0);
          const Ae = {
            output: [ee, R]
          };
          O.interpolation ? (j = O.interpolation, O.interpolation.updateConfig(Ae)) : j = K.interpolate(Ae);
        }
        return te = Xo(k ? U.getPayload() : U), me = Xo(K.getPayload()), y && !I && K.setValue(B, !1), this.hasChanged = !0, me.forEach((ee) => {
          ee.startPosition = ee.value, ee.lastPosition = ee.value, ee.lastVelocity = fe ? ee.lastVelocity : void 0, ee.lastTime = fe ? ee.lastTime : void 0, ee.startTime = hg(), ee.done = !1, ee.animatedStyles.clear();
        }), _r(v, m) && K.setValue(I ? U : R, !1), fn({}, M, {
          [m]: fn({}, O, {
            name: m,
            parent: K,
            interpolation: j,
            animatedValues: me,
            toValues: te,
            previous: H,
            config: q,
            fromValues: Xo(K.getValue()),
            immediate: _r(v, m),
            initialVelocity: Pi(q.velocity, 0),
            clamp: Pi(q.clamp, !1),
            precision: Pi(q.precision, 0.01),
            tension: Pi(q.tension, 170),
            friction: Pi(q.friction, 26),
            mass: Pi(q.mass, 1),
            duration: q.duration,
            easing: Pi(q.easing, (ee) => ee),
            decay: q.decay
          })
        });
      } else
        return ae ? M : (I && (K.setValue(1, !1), j.updateConfig({
          output: [H, H]
        })), K.done = !0, this.hasChanged = !0, fn({}, M, {
          [m]: fn({}, M[m], {
            previous: H
          })
        }));
    }, this.animations), this.hasChanged) {
      this.configs = Object.values(this.animations), this.values = {}, this.interpolations = {};
      for (let M in this.animations)
        this.interpolations[M] = this.animations[M].interpolation, this.values[M] = this.animations[M].interpolation.getValue();
    }
    return this;
  }
  destroy() {
    this.stop(), this.props = {}, this.merged = {}, this.animations = {}, this.interpolations = {}, this.values = {}, this.configs = [], this.local = 0;
  }
}
let Rb = 0;
const Bu = "enter", zd = "leave", $d = "update", Lb = (e, t) => (typeof t == "function" ? e.map(t) : Xo(t)).map(String), af = (e) => {
  let t = e.items, r = e.keys, n = r === void 0 ? (o) => o : r, a = Gr(e, ["items", "keys"]);
  return t = Xo(t !== void 0 ? t : null), fn({
    items: t,
    keys: Lb(t, n)
  }, a);
};
function Db(e, t, r) {
  const n = fn({
    items: e,
    keys: t || ((R) => R)
  }, r), a = af(n), o = a.lazy, f = o === void 0 ? !1 : o;
  a.unique;
  const s = a.reset, c = s === void 0 ? !1 : s;
  a.enter, a.leave, a.update;
  const d = a.onDestroyed;
  a.keys, a.items;
  const g = a.onFrame, y = a.onRest, v = a.onStart, E = a.ref, k = Gr(a, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]), M = ug(), T = se.useRef(!1), m = se.useRef({
    mounted: !1,
    first: !0,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!n.ref,
    instances: !T.current && /* @__PURE__ */ new Map(),
    forceUpdate: M
  });
  return se.useImperativeHandle(n.ref, () => ({
    start: () => Promise.all(Array.from(m.current.instances).map((R) => {
      let O = R[1];
      return new Promise((_) => O.start(_));
    })),
    stop: (R) => Array.from(m.current.instances).forEach((O) => O[1].stop(R)),
    get controllers() {
      return Array.from(m.current.instances).map((R) => R[1]);
    }
  })), m.current = Ob(m.current, n), m.current.changed && m.current.transitions.forEach((R) => {
    const O = R.slot, _ = R.from, N = R.to, D = R.config, I = R.trail, B = R.key, U = R.item;
    m.current.instances.has(B) || m.current.instances.set(B, new Pb());
    const q = m.current.instances.get(B), K = fn({}, k, {
      to: N,
      from: _,
      config: D,
      ref: E,
      onRest: (j) => {
        m.current.mounted && (R.destroyed && (!E && !f && kp(m, B), d && d(U)), !Array.from(m.current.instances).some((H) => !H[1].idle) && (E || f) && m.current.deleted.length > 0 && kp(m), y && y(U, O, j));
      },
      onStart: v && (() => v(U, O)),
      onFrame: g && ((j) => g(U, O, j)),
      delay: I,
      reset: c && O === Bu
      // Update controller
    });
    q.update(K), m.current.paused || q.start();
  }), se.useEffect(() => (m.current.mounted = T.current = !0, () => {
    m.current.mounted = T.current = !1, Array.from(m.current.instances).map((R) => R[1].destroy()), m.current.instances.clear();
  }), []), m.current.transitions.map((R) => {
    let O = R.item, _ = R.slot, N = R.key;
    return {
      item: O,
      key: N,
      state: _,
      props: m.current.instances.get(N).getValues()
    };
  });
}
function kp(e, t) {
  const r = e.current.deleted;
  for (let n of r) {
    let a = n.key;
    const o = (f) => f.key !== a;
    (Vt.und(t) || t === a) && (e.current.instances.delete(a), e.current.transitions = e.current.transitions.filter(o), e.current.deleted = e.current.deleted.filter(o));
  }
  e.current.forceUpdate();
}
function Ob(e, t) {
  let r = e.first, n = e.prevProps, a = Gr(e, ["first", "prevProps"]), o = af(t), f = o.items, s = o.keys, c = o.initial, d = o.from, g = o.enter, y = o.leave, v = o.update, E = o.trail, k = E === void 0 ? 0 : E, M = o.unique, T = o.config, m = o.order, R = m === void 0 ? [Bu, zd, $d] : m, O = af(n), _ = O.keys, N = O.items, D = fn({}, a.current), I = [...a.deleted], B = Object.keys(D), U = new Set(B), q = new Set(s), K = s.filter((le) => !U.has(le)), j = a.transitions.filter((le) => !le.destroyed && !q.has(le.originalKey)).map((le) => le.originalKey), te = s.filter((le) => U.has(le)), me = -k;
  for (; R.length; )
    switch (R.shift()) {
      case Bu: {
        K.forEach((ue, fe) => {
          M && I.find((ee) => ee.originalKey === ue) && (I = I.filter((ee) => ee.originalKey !== ue));
          const ae = s.indexOf(ue), V = f[ae], Z = r && c !== void 0 ? "initial" : Bu;
          D[ue] = {
            slot: Z,
            originalKey: ue,
            key: M ? String(ue) : Rb++,
            item: V,
            trail: me = me + k,
            config: _r(T, V, Z),
            from: _r(r && c !== void 0 ? c || {} : d, V),
            to: _r(g, V)
          };
        });
        break;
      }
      case zd: {
        j.forEach((ue) => {
          const fe = _.indexOf(ue), ae = N[fe], V = zd;
          I.unshift(fn({}, D[ue], {
            slot: V,
            destroyed: !0,
            left: _[Math.max(0, fe - 1)],
            right: _[Math.min(_.length, fe + 1)],
            trail: me = me + k,
            config: _r(T, ae, V),
            to: _r(y, ae)
          })), delete D[ue];
        });
        break;
      }
      case $d: {
        te.forEach((ue) => {
          const fe = s.indexOf(ue), ae = f[fe], V = $d;
          D[ue] = fn({}, D[ue], {
            item: ae,
            slot: V,
            trail: me = me + k,
            config: _r(T, ae, V),
            to: _r(v, ae)
          });
        });
        break;
      }
    }
  let H = s.map((le) => D[le]);
  return I.forEach((le) => {
    let ue = le.left;
    le.right;
    let fe = Gr(le, ["left", "right"]), ae;
    (ae = H.findIndex((V) => V.originalKey === ue)) !== -1 && (ae += 1), ae = Math.max(0, ae), H = [...H.slice(0, ae), fe, ...H.slice(ae)];
  }), fn({}, a, {
    changed: K.length || j.length || te.length,
    first: r && K.length === 0,
    transitions: H,
    current: D,
    deleted: I,
    prevProps: t
  });
}
class Mb extends cg {
  constructor(t) {
    t === void 0 && (t = {}), super(), t.transform && !(t.transform instanceof Nr) && (t = Zf.transform(t)), this.payload = t;
  }
}
const Ju = {
  transparent: 0,
  aliceblue: 4042850303,
  antiquewhite: 4209760255,
  aqua: 16777215,
  aquamarine: 2147472639,
  azure: 4043309055,
  beige: 4126530815,
  bisque: 4293182719,
  black: 255,
  blanchedalmond: 4293643775,
  blue: 65535,
  blueviolet: 2318131967,
  brown: 2771004159,
  burlywood: 3736635391,
  burntsienna: 3934150143,
  cadetblue: 1604231423,
  chartreuse: 2147418367,
  chocolate: 3530104575,
  coral: 4286533887,
  cornflowerblue: 1687547391,
  cornsilk: 4294499583,
  crimson: 3692313855,
  cyan: 16777215,
  darkblue: 35839,
  darkcyan: 9145343,
  darkgoldenrod: 3095792639,
  darkgray: 2846468607,
  darkgreen: 6553855,
  darkgrey: 2846468607,
  darkkhaki: 3182914559,
  darkmagenta: 2332068863,
  darkolivegreen: 1433087999,
  darkorange: 4287365375,
  darkorchid: 2570243327,
  darkred: 2332033279,
  darksalmon: 3918953215,
  darkseagreen: 2411499519,
  darkslateblue: 1211993087,
  darkslategray: 793726975,
  darkslategrey: 793726975,
  darkturquoise: 13554175,
  darkviolet: 2483082239,
  deeppink: 4279538687,
  deepskyblue: 12582911,
  dimgray: 1768516095,
  dimgrey: 1768516095,
  dodgerblue: 512819199,
  firebrick: 2988581631,
  floralwhite: 4294635775,
  forestgreen: 579543807,
  fuchsia: 4278255615,
  gainsboro: 3705462015,
  ghostwhite: 4177068031,
  gold: 4292280575,
  goldenrod: 3668254975,
  gray: 2155905279,
  green: 8388863,
  greenyellow: 2919182335,
  grey: 2155905279,
  honeydew: 4043305215,
  hotpink: 4285117695,
  indianred: 3445382399,
  indigo: 1258324735,
  ivory: 4294963455,
  khaki: 4041641215,
  lavender: 3873897215,
  lavenderblush: 4293981695,
  lawngreen: 2096890111,
  lemonchiffon: 4294626815,
  lightblue: 2916673279,
  lightcoral: 4034953471,
  lightcyan: 3774873599,
  lightgoldenrodyellow: 4210742015,
  lightgray: 3553874943,
  lightgreen: 2431553791,
  lightgrey: 3553874943,
  lightpink: 4290167295,
  lightsalmon: 4288707327,
  lightseagreen: 548580095,
  lightskyblue: 2278488831,
  lightslategray: 2005441023,
  lightslategrey: 2005441023,
  lightsteelblue: 2965692159,
  lightyellow: 4294959359,
  lime: 16711935,
  limegreen: 852308735,
  linen: 4210091775,
  magenta: 4278255615,
  maroon: 2147483903,
  mediumaquamarine: 1724754687,
  mediumblue: 52735,
  mediumorchid: 3126187007,
  mediumpurple: 2473647103,
  mediumseagreen: 1018393087,
  mediumslateblue: 2070474495,
  mediumspringgreen: 16423679,
  mediumturquoise: 1221709055,
  mediumvioletred: 3340076543,
  midnightblue: 421097727,
  mintcream: 4127193855,
  mistyrose: 4293190143,
  moccasin: 4293178879,
  navajowhite: 4292783615,
  navy: 33023,
  oldlace: 4260751103,
  olive: 2155872511,
  olivedrab: 1804477439,
  orange: 4289003775,
  orangered: 4282712319,
  orchid: 3664828159,
  palegoldenrod: 4008225535,
  palegreen: 2566625535,
  paleturquoise: 2951671551,
  palevioletred: 3681588223,
  papayawhip: 4293907967,
  peachpuff: 4292524543,
  peru: 3448061951,
  pink: 4290825215,
  plum: 3718307327,
  powderblue: 2967529215,
  purple: 2147516671,
  rebeccapurple: 1714657791,
  red: 4278190335,
  rosybrown: 3163525119,
  royalblue: 1097458175,
  saddlebrown: 2336560127,
  salmon: 4202722047,
  sandybrown: 4104413439,
  seagreen: 780883967,
  seashell: 4294307583,
  sienna: 2689740287,
  silver: 3233857791,
  skyblue: 2278484991,
  slateblue: 1784335871,
  slategray: 1887473919,
  slategrey: 1887473919,
  snow: 4294638335,
  springgreen: 16744447,
  steelblue: 1182971135,
  tan: 3535047935,
  teal: 8421631,
  thistle: 3636451583,
  tomato: 4284696575,
  turquoise: 1088475391,
  violet: 4001558271,
  wheat: 4125012991,
  white: 4294967295,
  whitesmoke: 4126537215,
  yellow: 4294902015,
  yellowgreen: 2597139199
}, Fr = "[-+]?\\d*\\.?\\d+", ec = Fr + "%";
function kc() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)";
}
const _b = new RegExp("rgb" + kc(Fr, Fr, Fr)), Nb = new RegExp("rgba" + kc(Fr, Fr, Fr, Fr)), Fb = new RegExp("hsl" + kc(Fr, ec, ec)), zb = new RegExp("hsla" + kc(Fr, ec, ec, Fr)), $b = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Bb = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, Ib = /^#([0-9a-fA-F]{6})$/, Hb = /^#([0-9a-fA-F]{8})$/;
function Wb(e) {
  let t;
  return typeof e == "number" ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Ib.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : Ju.hasOwnProperty(e) ? Ju[e] : (t = _b.exec(e)) ? (jo(t[1]) << 24 | // r
  jo(t[2]) << 16 | // g
  jo(t[3]) << 8 | // b
  255) >>> // a
  0 : (t = Nb.exec(e)) ? (jo(t[1]) << 24 | // r
  jo(t[2]) << 16 | // g
  jo(t[3]) << 8 | // b
  Cp(t[4])) >>> // a
  0 : (t = $b.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    "ff",
    // a
    16
  ) >>> 0 : (t = Hb.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Bb.exec(e)) ? parseInt(
    t[1] + t[1] + // r
    t[2] + t[2] + // g
    t[3] + t[3] + // b
    t[4] + t[4],
    // a
    16
  ) >>> 0 : (t = Fb.exec(e)) ? (wp(
    Tp(t[1]),
    // h
    Cu(t[2]),
    // s
    Cu(t[3])
    // l
  ) | 255) >>> // a
  0 : (t = zb.exec(e)) ? (wp(
    Tp(t[1]),
    // h
    Cu(t[2]),
    // s
    Cu(t[3])
    // l
  ) | Cp(t[4])) >>> // a
  0 : null;
}
function Bd(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function wp(e, t, r) {
  const n = r < 0.5 ? r * (1 + t) : r + t - r * t, a = 2 * r - n, o = Bd(a, n, e + 1 / 3), f = Bd(a, n, e), s = Bd(a, n, e - 1 / 3);
  return Math.round(o * 255) << 24 | Math.round(f * 255) << 16 | Math.round(s * 255) << 8;
}
function jo(e) {
  const t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Tp(e) {
  return (parseFloat(e) % 360 + 360) % 360 / 360;
}
function Cp(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function Cu(e) {
  const t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Ap(e) {
  let t = Wb(e);
  if (t === null)
    return e;
  t = t || 0;
  let r = (t & 4278190080) >>> 24, n = (t & 16711680) >>> 16, a = (t & 65280) >>> 8, o = (t & 255) / 255;
  return `rgba(${r}, ${n}, ${a}, ${o})`;
}
const Au = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, Vb = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, jb = new RegExp(`(${Object.keys(Ju).join("|")})`, "g"), Ub = (e) => {
  const t = e.output.map((a) => a.replace(Vb, Ap)).map((a) => a.replace(jb, Ap)), r = t[0].match(Au).map(() => []);
  t.forEach((a) => {
    a.match(Au).forEach((o, f) => r[f].push(+o));
  });
  const n = t[0].match(Au).map((a, o) => Qu(fn({}, e, {
    output: r[o]
  })));
  return (a) => {
    let o = 0;
    return t[0].replace(Au, () => n[o++](a)).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (f, s, c, d, g) => `rgba(${Math.round(s)}, ${Math.round(c)}, ${Math.round(d)}, ${g})`);
  };
};
let fs = {
  animationIterationCount: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  // SVG-related properties
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
};
const Kb = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1), Yb = ["Webkit", "Ms", "Moz", "O"];
fs = Object.keys(fs).reduce((e, t) => (Yb.forEach((r) => e[Kb(r, t)] = e[t]), e), fs);
function Xb(e, t, r) {
  return t == null || typeof t == "boolean" || t === "" ? "" : !r && typeof t == "number" && t !== 0 && !(fs.hasOwnProperty(e) && fs[e]) ? t + "px" : ("" + t).trim();
}
const Pp = {};
yb((e) => new Mb(e));
mb(Ub);
pb(Ju);
hb((e, t) => {
  if (e.nodeType && e.setAttribute !== void 0) {
    const a = t.style, o = t.children, f = t.scrollTop, s = t.scrollLeft, c = Gr(t, ["style", "children", "scrollTop", "scrollLeft"]), d = e.nodeName === "filter" || e.parentNode && e.parentNode.nodeName === "filter";
    f !== void 0 && (e.scrollTop = f), s !== void 0 && (e.scrollLeft = s), o !== void 0 && (e.textContent = o);
    for (let g in a)
      if (a.hasOwnProperty(g)) {
        var r = g.indexOf("--") === 0, n = Xb(g, a[g], r);
        g === "float" && (g = "cssFloat"), r ? e.style.setProperty(g, n) : e.style[g] = n;
      }
    for (let g in c) {
      const y = d ? g : Pp[g] || (Pp[g] = g.replace(/([A-Z])/g, (v) => "-" + v.toLowerCase()));
      typeof e.getAttribute(y) < "u" && e.setAttribute(y, c[g]);
    }
    return;
  } else
    return !1;
}, (e) => e);
const qb = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Gb = cb(bb, !1), Rp = Gb(qb);
function Zb(e) {
  return e.innerRadius;
}
function Qb(e) {
  return e.outerRadius;
}
function Jb(e) {
  return e.startAngle;
}
function e0(e) {
  return e.endAngle;
}
function t0(e) {
  return e && e.padAngle;
}
function n0(e, t, r, n, a, o, f, s) {
  var c = r - e, d = n - t, g = f - a, y = s - o, v = y * c - g * d;
  if (!(v * v < Gn))
    return v = (g * (t - o) - y * (e - a)) / v, [e + v * c, t + v * d];
}
function Pu(e, t, r, n, a, o, f) {
  var s = e - r, c = t - n, d = (f ? o : -o) / Ko(s * s + c * c), g = d * c, y = -d * s, v = e + g, E = t + y, k = r + g, M = n + y, T = (v + k) / 2, m = (E + M) / 2, R = k - v, O = M - E, _ = R * R + O * O, N = a - o, D = v * M - k * E, I = (O < 0 ? -1 : 1) * Ko(Ay(0, N * N * _ - D * D)), B = (D * O - R * I) / _, U = (-D * R - O * I) / _, q = (D * O + R * I) / _, K = (-D * R + O * I) / _, j = B - T, te = U - m, me = q - T, H = K - m;
  return j * j + te * te > me * me + H * H && (B = q, U = K), {
    cx: B,
    cy: U,
    x01: -g,
    y01: -y,
    x11: B * (a / N - 1),
    y11: U * (a / N - 1)
  };
}
function r0() {
  var e = Zb, t = Qb, r = Yt(0), n = null, a = Jb, o = e0, f = t0, s = null;
  function c() {
    var d, g, y = +e.apply(this, arguments), v = +t.apply(this, arguments), E = a.apply(this, arguments) - Fh, k = o.apply(this, arguments) - Fh, M = zh(k - E), T = k > E;
    if (s || (s = d = Sc()), v < y && (g = v, v = y, y = g), !(v > Gn))
      s.moveTo(0, 0);
    else if (M > zu - Gn)
      s.moveTo(v * Ci(E), v * jr(E)), s.arc(0, 0, v, E, k, !T), y > Gn && (s.moveTo(y * Ci(k), y * jr(k)), s.arc(0, 0, y, k, E, T));
    else {
      var m = E, R = k, O = E, _ = k, N = M, D = M, I = f.apply(this, arguments) / 2, B = I > Gn && (n ? +n.apply(this, arguments) : Ko(y * y + v * v)), U = Ad(zh(v - y) / 2, +r.apply(this, arguments)), q = U, K = U, j, te;
      if (B > Gn) {
        var me = $h(B / y * jr(I)), H = $h(B / v * jr(I));
        (N -= me * 2) > Gn ? (me *= T ? 1 : -1, O += me, _ -= me) : (N = 0, O = _ = (E + k) / 2), (D -= H * 2) > Gn ? (H *= T ? 1 : -1, m += H, R -= H) : (D = 0, m = R = (E + k) / 2);
      }
      var le = v * Ci(m), ue = v * jr(m), fe = y * Ci(_), ae = y * jr(_);
      if (U > Gn) {
        var V = v * Ci(R), Z = v * jr(R), ee = y * Ci(O), Ae = y * jr(O), xe;
        if (M < Nh && (xe = n0(le, ue, ee, Ae, V, Z, fe, ae))) {
          var De = le - xe[0], oe = ue - xe[1], ze = V - xe[0], Ie = Z - xe[1], Ce = 1 / jr(Cy((De * ze + oe * Ie) / (Ko(De * De + oe * oe) * Ko(ze * ze + Ie * Ie))) / 2), ge = Ko(xe[0] * xe[0] + xe[1] * xe[1]);
          q = Ad(U, (y - ge) / (Ce - 1)), K = Ad(U, (v - ge) / (Ce + 1));
        }
      }
      D > Gn ? K > Gn ? (j = Pu(ee, Ae, le, ue, v, K, T), te = Pu(V, Z, fe, ae, v, K, T), s.moveTo(j.cx + j.x01, j.cy + j.y01), K < U ? s.arc(j.cx, j.cy, K, qn(j.y01, j.x01), qn(te.y01, te.x01), !T) : (s.arc(j.cx, j.cy, K, qn(j.y01, j.x01), qn(j.y11, j.x11), !T), s.arc(0, 0, v, qn(j.cy + j.y11, j.cx + j.x11), qn(te.cy + te.y11, te.cx + te.x11), !T), s.arc(te.cx, te.cy, K, qn(te.y11, te.x11), qn(te.y01, te.x01), !T))) : (s.moveTo(le, ue), s.arc(0, 0, v, m, R, !T)) : s.moveTo(le, ue), !(y > Gn) || !(N > Gn) ? s.lineTo(fe, ae) : q > Gn ? (j = Pu(fe, ae, V, Z, y, -q, T), te = Pu(le, ue, ee, Ae, y, -q, T), s.lineTo(j.cx + j.x01, j.cy + j.y01), q < U ? s.arc(j.cx, j.cy, q, qn(j.y01, j.x01), qn(te.y01, te.x01), !T) : (s.arc(j.cx, j.cy, q, qn(j.y01, j.x01), qn(j.y11, j.x11), !T), s.arc(0, 0, y, qn(j.cy + j.y11, j.cx + j.x11), qn(te.cy + te.y11, te.cx + te.x11), T), s.arc(te.cx, te.cy, q, qn(te.y11, te.x11), qn(te.y01, te.x01), !T))) : s.arc(0, 0, y, _, O, T);
    }
    if (s.closePath(), d)
      return s = null, d + "" || null;
  }
  return c.centroid = function() {
    var d = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2, g = (+a.apply(this, arguments) + +o.apply(this, arguments)) / 2 - Nh / 2;
    return [Ci(g) * d, jr(g) * d];
  }, c.innerRadius = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : Yt(+d), c) : e;
  }, c.outerRadius = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : Yt(+d), c) : t;
  }, c.cornerRadius = function(d) {
    return arguments.length ? (r = typeof d == "function" ? d : Yt(+d), c) : r;
  }, c.padRadius = function(d) {
    return arguments.length ? (n = d == null ? null : typeof d == "function" ? d : Yt(+d), c) : n;
  }, c.startAngle = function(d) {
    return arguments.length ? (a = typeof d == "function" ? d : Yt(+d), c) : a;
  }, c.endAngle = function(d) {
    return arguments.length ? (o = typeof d == "function" ? d : Yt(+d), c) : o;
  }, c.padAngle = function(d) {
    return arguments.length ? (f = typeof d == "function" ? d : Yt(+d), c) : f;
  }, c.context = function(d) {
    return arguments.length ? (s = d ?? null, c) : s;
  }, c;
}
function yg(e) {
  this._context = e;
}
yg.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function wc(e) {
  return new yg(e);
}
function Qf(e) {
  return e[0];
}
function Jf(e) {
  return e[1];
}
function vg() {
  var e = Qf, t = Jf, r = Yt(!0), n = null, a = wc, o = null;
  function f(s) {
    var c, d = s.length, g, y = !1, v;
    for (n == null && (o = a(v = Sc())), c = 0; c <= d; ++c)
      !(c < d && r(g = s[c], c, s)) === y && ((y = !y) ? o.lineStart() : o.lineEnd()), y && o.point(+e(g, c, s), +t(g, c, s));
    if (v)
      return o = null, v + "" || null;
  }
  return f.x = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : Yt(+s), f) : e;
  }, f.y = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : Yt(+s), f) : t;
  }, f.defined = function(s) {
    return arguments.length ? (r = typeof s == "function" ? s : Yt(!!s), f) : r;
  }, f.curve = function(s) {
    return arguments.length ? (a = s, n != null && (o = a(n)), f) : a;
  }, f.context = function(s) {
    return arguments.length ? (s == null ? n = o = null : o = a(n = s), f) : n;
  }, f;
}
function a0() {
  var e = Qf, t = null, r = Yt(0), n = Jf, a = Yt(!0), o = null, f = wc, s = null;
  function c(g) {
    var y, v, E, k = g.length, M, T = !1, m, R = new Array(k), O = new Array(k);
    for (o == null && (s = f(m = Sc())), y = 0; y <= k; ++y) {
      if (!(y < k && a(M = g[y], y, g)) === T)
        if (T = !T)
          v = y, s.areaStart(), s.lineStart();
        else {
          for (s.lineEnd(), s.lineStart(), E = y - 1; E >= v; --E)
            s.point(R[E], O[E]);
          s.lineEnd(), s.areaEnd();
        }
      T && (R[y] = +e(M, y, g), O[y] = +r(M, y, g), s.point(t ? +t(M, y, g) : R[y], n ? +n(M, y, g) : O[y]));
    }
    if (m)
      return s = null, m + "" || null;
  }
  function d() {
    return vg().defined(a).curve(f).context(o);
  }
  return c.x = function(g) {
    return arguments.length ? (e = typeof g == "function" ? g : Yt(+g), t = null, c) : e;
  }, c.x0 = function(g) {
    return arguments.length ? (e = typeof g == "function" ? g : Yt(+g), c) : e;
  }, c.x1 = function(g) {
    return arguments.length ? (t = g == null ? null : typeof g == "function" ? g : Yt(+g), c) : t;
  }, c.y = function(g) {
    return arguments.length ? (r = typeof g == "function" ? g : Yt(+g), n = null, c) : r;
  }, c.y0 = function(g) {
    return arguments.length ? (r = typeof g == "function" ? g : Yt(+g), c) : r;
  }, c.y1 = function(g) {
    return arguments.length ? (n = g == null ? null : typeof g == "function" ? g : Yt(+g), c) : n;
  }, c.lineX0 = c.lineY0 = function() {
    return d().x(e).y(r);
  }, c.lineY1 = function() {
    return d().x(e).y(n);
  }, c.lineX1 = function() {
    return d().x(t).y(r);
  }, c.defined = function(g) {
    return arguments.length ? (a = typeof g == "function" ? g : Yt(!!g), c) : a;
  }, c.curve = function(g) {
    return arguments.length ? (f = g, o != null && (s = f(o)), c) : f;
  }, c.context = function(g) {
    return arguments.length ? (g == null ? o = s = null : s = f(o = g), c) : o;
  }, c;
}
function i0(e, t) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function o0(e) {
  return e;
}
function l0() {
  var e = o0, t = i0, r = null, n = Yt(0), a = Yt(zu), o = Yt(0);
  function f(s) {
    var c, d = s.length, g, y, v = 0, E = new Array(d), k = new Array(d), M = +n.apply(this, arguments), T = Math.min(zu, Math.max(-zu, a.apply(this, arguments) - M)), m, R = Math.min(Math.abs(T) / d, o.apply(this, arguments)), O = R * (T < 0 ? -1 : 1), _;
    for (c = 0; c < d; ++c)
      (_ = k[E[c] = c] = +e(s[c], c, s)) > 0 && (v += _);
    for (t != null ? E.sort(function(N, D) {
      return t(k[N], k[D]);
    }) : r != null && E.sort(function(N, D) {
      return r(s[N], s[D]);
    }), c = 0, y = v ? (T - d * O) / v : 0; c < d; ++c, M = m)
      g = E[c], _ = k[g], m = M + (_ > 0 ? _ * y : 0) + O, k[g] = {
        data: s[g],
        index: c,
        value: _,
        startAngle: M,
        endAngle: m,
        padAngle: R
      };
    return k;
  }
  return f.value = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : Yt(+s), f) : e;
  }, f.sortValues = function(s) {
    return arguments.length ? (t = s, r = null, f) : t;
  }, f.sort = function(s) {
    return arguments.length ? (r = s, t = null, f) : r;
  }, f.startAngle = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : Yt(+s), f) : n;
  }, f.endAngle = function(s) {
    return arguments.length ? (a = typeof s == "function" ? s : Yt(+s), f) : a;
  }, f.padAngle = function(s) {
    return arguments.length ? (o = typeof s == "function" ? s : Yt(+s), f) : o;
  }, f;
}
var of = Array.prototype.slice;
function s0(e) {
  return e.source;
}
function u0(e) {
  return e.target;
}
function c0(e) {
  var t = s0, r = u0, n = Qf, a = Jf, o = null;
  function f() {
    var s, c = of.call(arguments), d = t.apply(this, c), g = r.apply(this, c);
    if (o || (o = s = Sc()), e(o, +n.apply(this, (c[0] = d, c)), +a.apply(this, c), +n.apply(this, (c[0] = g, c)), +a.apply(this, c)), s)
      return o = null, s + "" || null;
  }
  return f.source = function(s) {
    return arguments.length ? (t = s, f) : t;
  }, f.target = function(s) {
    return arguments.length ? (r = s, f) : r;
  }, f.x = function(s) {
    return arguments.length ? (n = typeof s == "function" ? s : Yt(+s), f) : n;
  }, f.y = function(s) {
    return arguments.length ? (a = typeof s == "function" ? s : Yt(+s), f) : a;
  }, f.context = function(s) {
    return arguments.length ? (o = s ?? null, f) : o;
  }, f;
}
function d0(e, t, r, n, a) {
  e.moveTo(t, r), e.bezierCurveTo(t = (t + n) / 2, r, t, a, n, a);
}
function f0() {
  return c0(d0);
}
function Va() {
}
function tc(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function Tc(e) {
  this._context = e;
}
Tc.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        tc(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        tc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function h0(e) {
  return new Tc(e);
}
function xg(e) {
  this._context = e;
}
xg.prototype = {
  areaStart: Va,
  areaEnd: Va,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        tc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function p0(e) {
  return new xg(e);
}
function bg(e) {
  this._context = e;
}
bg.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      default:
        tc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function m0(e) {
  return new bg(e);
}
function Sg(e, t) {
  this._basis = new Tc(e), this._beta = t;
}
Sg.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length - 1;
    if (r > 0)
      for (var n = e[0], a = t[0], o = e[r] - n, f = t[r] - a, s = -1, c; ++s <= r; )
        c = s / r, this._basis.point(
          this._beta * e[s] + (1 - this._beta) * (n + c * o),
          this._beta * t[s] + (1 - this._beta) * (a + c * f)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
const g0 = function e(t) {
  function r(n) {
    return t === 1 ? new Tc(n) : new Sg(n, t);
  }
  return r.beta = function(n) {
    return e(+n);
  }, r;
}(0.85);
function nc(e, t, r) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - r),
    e._x2,
    e._y2
  );
}
function eh(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
eh.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        nc(this, this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2, this._x1 = e, this._y1 = t;
        break;
      case 2:
        this._point = 3;
      default:
        nc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const y0 = function e(t) {
  function r(n) {
    return new eh(n, t);
  }
  return r.tension = function(n) {
    return e(+n);
  }, r;
}(0);
function th(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
th.prototype = {
  areaStart: Va,
  areaEnd: Va,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x3 = e, this._y3 = t;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
        break;
      case 2:
        this._point = 3, this._x5 = e, this._y5 = t;
        break;
      default:
        nc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const v0 = function e(t) {
  function r(n) {
    return new th(n, t);
  }
  return r.tension = function(n) {
    return e(+n);
  }, r;
}(0);
function nh(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
nh.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        nc(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const x0 = function e(t) {
  function r(n) {
    return new nh(n, t);
  }
  return r.tension = function(n) {
    return e(+n);
  }, r;
}(0);
function rh(e, t, r) {
  var n = e._x1, a = e._y1, o = e._x2, f = e._y2;
  if (e._l01_a > Gn) {
    var s = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, c = 3 * e._l01_a * (e._l01_a + e._l12_a);
    n = (n * s - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / c, a = (a * s - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / c;
  }
  if (e._l23_a > Gn) {
    var d = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, g = 3 * e._l23_a * (e._l23_a + e._l12_a);
    o = (o * d + e._x1 * e._l23_2a - t * e._l12_2a) / g, f = (f * d + e._y1 * e._l23_2a - r * e._l12_2a) / g;
  }
  e._context.bezierCurveTo(n, a, o, f, e._x2, e._y2);
}
function Eg(e, t) {
  this._context = e, this._alpha = t;
}
Eg.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var r = this._x2 - e, n = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + n * n, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        rh(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const b0 = function e(t) {
  function r(n) {
    return t ? new Eg(n, t) : new eh(n, 0);
  }
  return r.alpha = function(n) {
    return e(+n);
  }, r;
}(0.5);
function kg(e, t) {
  this._context = e, this._alpha = t;
}
kg.prototype = {
  areaStart: Va,
  areaEnd: Va,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var r = this._x2 - e, n = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + n * n, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._x3 = e, this._y3 = t;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
        break;
      case 2:
        this._point = 3, this._x5 = e, this._y5 = t;
        break;
      default:
        rh(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const S0 = function e(t) {
  function r(n) {
    return t ? new kg(n, t) : new th(n, 0);
  }
  return r.alpha = function(n) {
    return e(+n);
  }, r;
}(0.5);
function wg(e, t) {
  this._context = e, this._alpha = t;
}
wg.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var r = this._x2 - e, n = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + n * n, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        rh(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const E0 = function e(t) {
  function r(n) {
    return t ? new wg(n, t) : new nh(n, 0);
  }
  return r.alpha = function(n) {
    return e(+n);
  }, r;
}(0.5);
function Tg(e) {
  this._context = e;
}
Tg.prototype = {
  areaStart: Va,
  areaEnd: Va,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function lf(e) {
  return new Tg(e);
}
function Lp(e) {
  return e < 0 ? -1 : 1;
}
function Dp(e, t, r) {
  var n = e._x1 - e._x0, a = t - e._x1, o = (e._y1 - e._y0) / (n || a < 0 && -0), f = (r - e._y1) / (a || n < 0 && -0), s = (o * a + f * n) / (n + a);
  return (Lp(o) + Lp(f)) * Math.min(Math.abs(o), Math.abs(f), 0.5 * Math.abs(s)) || 0;
}
function Op(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Id(e, t, r) {
  var n = e._x0, a = e._y0, o = e._x1, f = e._y1, s = (o - n) / 3;
  e._context.bezierCurveTo(n + s, a + s * t, o - s, f - s * r, o, f);
}
function rc(e) {
  this._context = e;
}
rc.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Id(this, this._t0, Op(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, Id(this, Op(this, r = Dp(this, e, t)), r);
          break;
        default:
          Id(this, this._t0, r = Dp(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function Cg(e) {
  this._context = new Ag(e);
}
(Cg.prototype = Object.create(rc.prototype)).point = function(e, t) {
  rc.prototype.point.call(this, t, e);
};
function Ag(e) {
  this._context = e;
}
Ag.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, n, a, o) {
    this._context.bezierCurveTo(t, e, n, r, o, a);
  }
};
function Iu(e) {
  return new rc(e);
}
function k0(e) {
  return new Cg(e);
}
function Pg(e) {
  this._context = e;
}
Pg.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = Mp(e), a = Mp(t), o = 0, f = 1; f < r; ++o, ++f)
          this._context.bezierCurveTo(n[0][o], a[0][o], n[1][o], a[1][o], e[f], t[f]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function Mp(e) {
  var t, r = e.length - 1, n, a = new Array(r), o = new Array(r), f = new Array(r);
  for (a[0] = 0, o[0] = 2, f[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t)
    a[t] = 1, o[t] = 4, f[t] = 4 * e[t] + 2 * e[t + 1];
  for (a[r - 1] = 2, o[r - 1] = 7, f[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t)
    n = a[t] / o[t - 1], o[t] -= n, f[t] -= n * f[t - 1];
  for (a[r - 1] = f[r - 1] / o[r - 1], t = r - 2; t >= 0; --t)
    a[t] = (f[t] - a[t + 1]) / o[t];
  for (o[r - 1] = (e[r] + a[r - 1]) / 2, t = 0; t < r - 1; ++t)
    o[t] = 2 * e[t + 1] - a[t + 1];
  return [a, o];
}
function w0(e) {
  return new Pg(e);
}
function Cc(e, t) {
  this._context = e, this._t = t;
}
Cc.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function T0(e) {
  return new Cc(e, 0.5);
}
function C0(e) {
  return new Cc(e, 0);
}
function A0(e) {
  return new Cc(e, 1);
}
function tl(e, t) {
  if ((f = e.length) > 1)
    for (var r = 1, n, a, o = e[t[0]], f, s = o.length; r < f; ++r)
      for (a = o, o = e[t[r]], n = 0; n < s; ++n)
        o[n][1] += o[n][0] = isNaN(a[n][1]) ? a[n][0] : a[n][1];
}
function nl(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; )
    r[t] = t;
  return r;
}
function P0(e, t) {
  return e[t];
}
function ah() {
  var e = Yt([]), t = nl, r = tl, n = P0;
  function a(o) {
    var f = e.apply(this, arguments), s, c = o.length, d = f.length, g = new Array(d), y;
    for (s = 0; s < d; ++s) {
      for (var v = f[s], E = g[s] = new Array(c), k = 0, M; k < c; ++k)
        E[k] = M = [0, +n(o[k], v, k, o)], M.data = o[k];
      E.key = v;
    }
    for (s = 0, y = t(g); s < d; ++s)
      g[y[s]].index = s;
    return r(g, y), g;
  }
  return a.keys = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : Yt(of.call(o)), a) : e;
  }, a.value = function(o) {
    return arguments.length ? (n = typeof o == "function" ? o : Yt(+o), a) : n;
  }, a.order = function(o) {
    return arguments.length ? (t = o == null ? nl : typeof o == "function" ? o : Yt(of.call(o)), a) : t;
  }, a.offset = function(o) {
    return arguments.length ? (r = o ?? tl, a) : r;
  }, a;
}
function R0(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, a = 0, o = e[0].length, f; a < o; ++a) {
      for (f = r = 0; r < n; ++r)
        f += e[r][a][1] || 0;
      if (f)
        for (r = 0; r < n; ++r)
          e[r][a][1] /= f;
    }
    tl(e, t);
  }
}
function L0(e, t) {
  if ((c = e.length) > 0)
    for (var r, n = 0, a, o, f, s, c, d = e[t[0]].length; n < d; ++n)
      for (f = s = 0, r = 0; r < c; ++r)
        (o = (a = e[t[r]][n])[1] - a[0]) > 0 ? (a[0] = f, a[1] = f += o) : o < 0 ? (a[1] = s, a[0] = s += o) : (a[0] = 0, a[1] = o);
}
function D0(e, t) {
  if ((a = e.length) > 0) {
    for (var r = 0, n = e[t[0]], a, o = n.length; r < o; ++r) {
      for (var f = 0, s = 0; f < a; ++f)
        s += e[f][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    tl(e, t);
  }
}
function O0(e, t) {
  if (!(!((f = e.length) > 0) || !((o = (a = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, a, o, f; n < o; ++n) {
      for (var s = 0, c = 0, d = 0; s < f; ++s) {
        for (var g = e[t[s]], y = g[n][1] || 0, v = g[n - 1][1] || 0, E = (y - v) / 2, k = 0; k < s; ++k) {
          var M = e[t[k]], T = M[n][1] || 0, m = M[n - 1][1] || 0;
          E += T - m;
        }
        c += y, d += E * y;
      }
      a[n - 1][1] += a[n - 1][0] = r, c && (r -= d / c);
    }
    a[n - 1][1] += a[n - 1][0] = r, tl(e, t);
  }
}
function M0(e) {
  var t = e.map(_0);
  return nl(e).sort(function(r, n) {
    return t[r] - t[n];
  });
}
function _0(e) {
  for (var t = -1, r = 0, n = e.length, a, o = -1 / 0; ++t < n; )
    (a = +e[t][1]) > o && (o = a, r = t);
  return r;
}
function Rg(e) {
  var t = e.map(Lg);
  return nl(e).sort(function(r, n) {
    return t[r] - t[n];
  });
}
function Lg(e) {
  for (var t = 0, r = -1, n = e.length, a; ++r < n; )
    (a = +e[r][1]) && (t += a);
  return t;
}
function N0(e) {
  return Rg(e).reverse();
}
function F0(e) {
  var t = e.length, r, n, a = e.map(Lg), o = M0(e), f = 0, s = 0, c = [], d = [];
  for (r = 0; r < t; ++r)
    n = o[r], f < s ? (f += a[n], c.push(n)) : (s += a[n], d.push(n));
  return d.reverse().concat(c);
}
function z0(e) {
  return nl(e).reverse();
}
function kn(e, t) {
  e(t);
}
var _p = {
  ascending: Rg,
  descending: N0,
  insideout: F0,
  none: nl,
  reverse: z0
};
function ih(e) {
  return e && _p[e] || _p.none;
}
var Np = {
  expand: R0,
  diverging: L0,
  none: tl,
  silhouette: D0,
  wiggle: O0
};
function oh(e) {
  return e && Np[e] || Np.none;
}
function $0(e) {
  var t = e === void 0 ? {} : e, r = t.innerRadius, n = t.outerRadius, a = t.cornerRadius, o = t.startAngle, f = t.endAngle, s = t.padAngle, c = t.padRadius, d = r0();
  return r != null && kn(d.innerRadius, r), n != null && kn(d.outerRadius, n), a != null && kn(d.cornerRadius, a), o != null && kn(d.startAngle, o), f != null && kn(d.endAngle, f), s != null && kn(d.padAngle, s), c != null && kn(d.padRadius, c), d;
}
function lh(e) {
  var t = e === void 0 ? {} : e, r = t.x, n = t.x0, a = t.x1, o = t.y, f = t.y0, s = t.y1, c = t.defined, d = t.curve, g = a0();
  return r && kn(g.x, r), n && kn(g.x0, n), a && kn(g.x1, a), o && kn(g.y, o), f && kn(g.y0, f), s && kn(g.y1, s), c && g.defined(c), d && g.curve(d), g;
}
function Dg(e) {
  var t = e === void 0 ? {} : e, r = t.x, n = t.y, a = t.defined, o = t.curve, f = vg();
  return r && kn(f.x, r), n && kn(f.y, n), a && f.defined(a), o && f.curve(o), f;
}
function B0(e) {
  var t = e === void 0 ? {} : e, r = t.startAngle, n = t.endAngle, a = t.padAngle, o = t.value, f = t.sort, s = t.sortValues, c = l0();
  return (f === null || f != null) && c.sort(f), (s === null || s != null) && c.sortValues(s), o != null && c.value(o), a != null && kn(c.padAngle, a), r != null && kn(c.startAngle, r), n != null && kn(c.endAngle, n), c;
}
function I0(e) {
  var t = e.keys, r = e.value, n = e.order, a = e.offset, o = ah();
  return t && o.keys(t), r && kn(o.value, r), n && o.order(ih(n)), a && o.offset(oh(a)), o;
}
var H0 = ["className", "top", "left", "data", "centroid", "innerRadius", "outerRadius", "cornerRadius", "startAngle", "endAngle", "padAngle", "padRadius", "pieSort", "pieSortValues", "pieValue", "children", "fill"];
function sf() {
  return sf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, sf.apply(this, arguments);
}
function W0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function V0(e) {
  var t = e.className, r = e.top, n = e.left, a = e.data, o = a === void 0 ? [] : a, f = e.centroid, s = e.innerRadius, c = s === void 0 ? 0 : s, d = e.outerRadius, g = e.cornerRadius, y = e.startAngle, v = e.endAngle, E = e.padAngle, k = e.padRadius, M = e.pieSort, T = e.pieSortValues, m = e.pieValue, R = e.children, O = e.fill, _ = O === void 0 ? "" : O, N = W0(e, H0), D = $0({
    innerRadius: c,
    outerRadius: d,
    cornerRadius: g,
    padRadius: k
  }), I = B0({
    startAngle: y,
    endAngle: v,
    padAngle: E,
    value: m,
    sort: M,
    sortValues: T
  }), B = I(o);
  return R ? /* @__PURE__ */ i.createElement(i.Fragment, null, R({
    arcs: B,
    path: D,
    pie: I
  })) : /* @__PURE__ */ i.createElement(rt, {
    className: "visx-pie-arcs-group",
    top: r,
    left: n
  }, B.map(function(U, q) {
    return /* @__PURE__ */ i.createElement("g", {
      key: "pie-arc-" + q
    }, /* @__PURE__ */ i.createElement("path", sf({
      className: Dn("visx-pie-arc", t),
      d: D(U) || "",
      fill: _ == null || typeof _ == "string" ? _ : _(U)
    }, N)), f == null ? void 0 : f(D.centroid(U), U));
  }));
}
var j0 = ["from", "to", "fill", "className", "innerRef"];
function uf() {
  return uf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, uf.apply(this, arguments);
}
function U0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function an(e) {
  var t = e.from, r = t === void 0 ? {
    x: 0,
    y: 0
  } : t, n = e.to, a = n === void 0 ? {
    x: 1,
    y: 1
  } : n, o = e.fill, f = o === void 0 ? "transparent" : o, s = e.className, c = e.innerRef, d = U0(e, j0), g = r.x === a.x || r.y === a.y;
  return /* @__PURE__ */ i.createElement("line", uf({
    ref: c,
    className: Dn("visx-line", s),
    x1: r.x,
    y1: r.y,
    x2: a.x,
    y2: a.y,
    fill: f,
    shapeRendering: g ? "crispEdges" : "auto"
  }, d));
}
var K0 = ["children", "data", "x", "y", "fill", "className", "curve", "innerRef", "defined"];
function cf() {
  return cf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, cf.apply(this, arguments);
}
function Y0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function fa(e) {
  var t = e.children, r = e.data, n = r === void 0 ? [] : r, a = e.x, o = e.y, f = e.fill, s = f === void 0 ? "transparent" : f, c = e.className, d = e.curve, g = e.innerRef, y = e.defined, v = y === void 0 ? function() {
    return !0;
  } : y, E = Y0(e, K0), k = Dg({
    x: a,
    y: o,
    defined: v,
    curve: d
  });
  return t ? /* @__PURE__ */ i.createElement(i.Fragment, null, t({
    path: k
  })) : /* @__PURE__ */ i.createElement("path", cf({
    ref: g,
    className: Dn("visx-linepath", c),
    d: k(n) || "",
    fill: s,
    strokeLinecap: "round"
  }, E));
}
var X0 = ["children", "x", "x0", "x1", "y", "y0", "y1", "data", "defined", "className", "curve", "innerRef"];
function df() {
  return df = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, df.apply(this, arguments);
}
function q0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function G0(e) {
  var t = e.children, r = e.x, n = e.x0, a = e.x1, o = e.y, f = e.y0, s = e.y1, c = e.data, d = c === void 0 ? [] : c, g = e.defined, y = g === void 0 ? function() {
    return !0;
  } : g, v = e.className, E = e.curve, k = e.innerRef, M = q0(e, X0), T = lh({
    x: r,
    x0: n,
    x1: a,
    y: o,
    y0: f,
    y1: s,
    defined: y,
    curve: E
  });
  return t ? /* @__PURE__ */ i.createElement(i.Fragment, null, t({
    path: T
  })) : /* @__PURE__ */ i.createElement("path", df({
    ref: k,
    className: Dn("visx-area", v),
    d: T(d) || ""
  }, M));
}
var Z0 = ["x", "x0", "x1", "y", "y1", "y0", "yScale", "data", "defined", "className", "curve", "innerRef", "children"];
function ff() {
  return ff = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ff.apply(this, arguments);
}
function Q0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function J0(e) {
  var t = e.x, r = e.x0, n = e.x1, a = e.y, o = e.y1, f = e.y0, s = e.yScale, c = e.data, d = c === void 0 ? [] : c, g = e.defined, y = g === void 0 ? function() {
    return !0;
  } : g, v = e.className, E = e.curve, k = e.innerRef, M = e.children, T = Q0(e, Z0), m = lh({
    x: t,
    x0: r,
    x1: n,
    defined: y,
    curve: E
  });
  return f == null ? m.y0(s.range()[0]) : kn(m.y0, f), a && !o && kn(m.y1, a), o && !a && kn(m.y1, o), M ? /* @__PURE__ */ i.createElement(i.Fragment, null, M({
    path: m
  })) : /* @__PURE__ */ i.createElement("path", ff({
    ref: k,
    className: Dn("visx-area-closed", v),
    d: m(d) || ""
  }, T));
}
var eS = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
function hf() {
  return hf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, hf.apply(this, arguments);
}
function tS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function nS(e) {
  var t = e.className, r = e.top, n = e.left, a = e.keys, o = e.data, f = e.curve, s = e.defined, c = e.x, d = e.x0, g = e.x1, y = e.y0, v = e.y1, E = e.value, k = e.order, M = e.offset, T = e.color, m = e.children, R = tS(e, eS), O = I0({
    keys: a,
    value: E,
    order: k,
    offset: M
  }), _ = lh({
    x: c,
    x0: d,
    x1: g,
    y0: y,
    y1: v,
    curve: f,
    defined: s
  }), N = O(o);
  return m ? /* @__PURE__ */ i.createElement(i.Fragment, null, m({
    stacks: N,
    path: _,
    stack: O
  })) : /* @__PURE__ */ i.createElement(rt, {
    top: r,
    left: n
  }, N.map(function(D, I) {
    return /* @__PURE__ */ i.createElement("path", hf({
      className: Dn("visx-stack", t),
      key: "stack-" + I + "-" + (D.key || ""),
      d: _(D) || "",
      fill: T == null ? void 0 : T(D.key, I)
    }, R));
  }));
}
var rS = ["className", "top", "left", "keys", "data", "curve", "defined", "x", "x0", "x1", "y0", "y1", "value", "order", "offset", "color", "children"];
function ac() {
  return ac = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ac.apply(this, arguments);
}
function aS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function iS(e) {
  var t = e.className, r = e.top, n = e.left, a = e.keys, o = e.data, f = e.curve, s = e.defined, c = e.x, d = e.x0, g = e.x1, y = e.y0, v = e.y1, E = e.value, k = e.order, M = e.offset, T = e.color, m = e.children, R = aS(e, rS);
  return /* @__PURE__ */ i.createElement(nS, ac({
    className: t,
    top: r,
    left: n,
    keys: a,
    data: o,
    curve: f,
    defined: s,
    x: c,
    x0: d,
    x1: g,
    y0: y,
    y1: v,
    value: E,
    order: k,
    offset: M,
    color: T
  }, R), m || function(O) {
    var _ = O.stacks, N = O.path;
    return _.map(function(D, I) {
      return /* @__PURE__ */ i.createElement("path", ac({
        className: Dn("visx-area-stack", t),
        key: "area-stack-" + I + "-" + (D.key || ""),
        d: N(D) || "",
        fill: T == null ? void 0 : T(D.key, I)
      }, R));
    });
  });
}
function sh(e) {
  if ("bandwidth" in e)
    return e.bandwidth();
  var t = e.range(), r = e.domain();
  return Math.abs(t[t.length - 1] - t[0]) / r.length;
}
var oS = ["data", "className", "top", "left", "x0", "x0Scale", "x1Scale", "yScale", "color", "keys", "height", "children"];
function pf() {
  return pf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, pf.apply(this, arguments);
}
function lS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Og(e) {
  var t = e.data, r = e.className, n = e.top, a = e.left, o = e.x0, f = e.x0Scale, s = e.x1Scale, c = e.yScale, d = e.color, g = e.keys, y = e.height, v = e.children, E = lS(e, oS), k = sh(s), M = t.map(function(T, m) {
    return {
      index: m,
      x0: f(o(T)),
      bars: g.map(function(R, O) {
        var _ = T[R];
        return {
          index: O,
          key: R,
          value: _,
          width: k,
          x: s(R) || 0,
          y: c(_) || 0,
          color: d(R, O),
          height: y - (c(_) || 0)
        };
      })
    };
  });
  return v ? /* @__PURE__ */ i.createElement(i.Fragment, null, v(M)) : /* @__PURE__ */ i.createElement(rt, {
    className: Dn("visx-bar-group", r),
    top: n,
    left: a
  }, M.map(function(T) {
    return /* @__PURE__ */ i.createElement(rt, {
      key: "bar-group-" + T.index + "-" + T.x0,
      left: T.x0
    }, T.bars.map(function(m) {
      return /* @__PURE__ */ i.createElement(yr, pf({
        key: "bar-group-bar-" + T.index + "-" + m.index + "-" + m.value + "-" + m.key,
        x: m.x,
        y: m.y,
        width: m.width,
        height: m.height,
        fill: m.color
      }, E));
    }));
  }));
}
function Mg(e) {
  return e == null ? void 0 : e[0];
}
function _g(e) {
  return e == null ? void 0 : e[1];
}
var sS = ["data", "className", "top", "left", "x", "y0", "y1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
function mf() {
  return mf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, mf.apply(this, arguments);
}
function uS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function cS(e) {
  var t = e.data, r = e.className, n = e.top, a = e.left, o = e.x, f = e.y0, s = f === void 0 ? Mg : f, c = e.y1, d = c === void 0 ? _g : c, g = e.xScale, y = e.yScale, v = e.color, E = e.keys, k = e.value, M = e.order, T = e.offset, m = e.children, R = uS(e, sS), O = ah();
  E && O.keys(E), k && kn(O.value, k), M && O.order(ih(M)), T && O.offset(oh(T));
  var _ = O(t), N = sh(g), D = _.map(function(I, B) {
    var U = I.key;
    return {
      index: B,
      key: U,
      bars: I.map(function(q, K) {
        var j = (y(s(q)) || 0) - (y(d(q)) || 0), te = y(d(q)), me = "bandwidth" in g ? g(o(q.data)) : Math.max((g(o(q.data)) || 0) - N / 2);
        return {
          bar: q,
          key: U,
          index: K,
          height: j,
          width: N,
          x: me || 0,
          y: te || 0,
          color: v(I.key, K)
        };
      })
    };
  });
  return m ? /* @__PURE__ */ i.createElement(i.Fragment, null, m(D)) : /* @__PURE__ */ i.createElement(rt, {
    className: Dn("visx-bar-stack", r),
    top: n,
    left: a
  }, D.map(function(I) {
    return I.bars.map(function(B) {
      return /* @__PURE__ */ i.createElement(yr, mf({
        key: "bar-stack-" + I.index + "-" + B.index,
        x: B.x,
        y: B.y,
        height: B.height,
        width: B.width,
        fill: B.color
      }, R));
    });
  }));
}
var dS = ["data", "className", "top", "left", "y", "x0", "x1", "xScale", "yScale", "color", "keys", "value", "order", "offset", "children"];
function gf() {
  return gf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, gf.apply(this, arguments);
}
function fS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function hS(e) {
  var t = e.data, r = e.className, n = e.top, a = e.left, o = e.y, f = e.x0, s = f === void 0 ? Mg : f, c = e.x1, d = c === void 0 ? _g : c, g = e.xScale, y = e.yScale, v = e.color, E = e.keys, k = e.value, M = e.order, T = e.offset, m = e.children, R = fS(e, dS), O = ah();
  E && O.keys(E), k && kn(O.value, k), M && O.order(ih(M)), T && O.offset(oh(T));
  var _ = O(t), N = sh(y), D = _.map(function(I, B) {
    var U = I.key;
    return {
      index: B,
      key: U,
      bars: I.map(function(q, K) {
        var j = (g(d(q)) || 0) - (g(s(q)) || 0), te = g(s(q)), me = "bandwidth" in y ? y(o(q.data)) : Math.max((y(o(q.data)) || 0) - j / 2);
        return {
          bar: q,
          key: U,
          index: K,
          height: N,
          width: j,
          x: te || 0,
          y: me || 0,
          color: v(I.key, K)
        };
      })
    };
  });
  return m ? /* @__PURE__ */ i.createElement(i.Fragment, null, m(D)) : /* @__PURE__ */ i.createElement(rt, {
    className: Dn("visx-bar-stack-horizontal", r),
    top: n,
    left: a
  }, D.map(function(I) {
    return I.bars.map(function(B) {
      return /* @__PURE__ */ i.createElement(yr, gf({
        key: "bar-stack-" + I.index + "-" + B.index,
        x: B.x,
        y: B.y,
        height: B.height,
        width: B.width,
        fill: B.color
      }, R));
    });
  }));
}
var Fp = "http://www.w3.org/2000/svg";
function pS(e) {
  var t = document.getElementById(e);
  if (!t) {
    var r = document.createElementNS(Fp, "svg");
    r.setAttribute("aria-hidden", "true"), r.style.opacity = "0", r.style.width = "0", r.style.height = "0", r.style.position = "absolute", r.style.top = "-100%", r.style.left = "-100%", r.style.pointerEvents = "none", t = document.createElementNS(Fp, "path"), t.setAttribute("id", e), r.appendChild(t), document.body.appendChild(r);
  }
  return t;
}
var mS = "__visx_splitpath_svg_path_measurement_id", zp = function() {
  return !0;
};
function gS(e) {
  var t = e.path, r = e.pointsInSegments, n = e.segmentation, a = n === void 0 ? "x" : n, o = e.sampleRate, f = o === void 0 ? 1 : o;
  try {
    var s = pS(mS);
    s.setAttribute("d", t);
    var c = s.getTotalLength(), d = r.length, g = r.map(function() {
      return [];
    });
    if (a === "x" || a === "y")
      for (var y = r.map(function(te) {
        var me;
        return (me = te.find(function(H) {
          return typeof H[a] == "number";
        })) == null ? void 0 : me[a];
      }), v = s.getPointAtLength(0), E = s.getPointAtLength(c), k = E[a] > v[a], M = k ? y.map(function(te) {
        return typeof te > "u" ? zp : function(me) {
          return me >= te;
        };
      }) : y.map(function(te) {
        return typeof te > "u" ? zp : function(me) {
          return me <= te;
        };
      }), T = 0, m = 0; m <= c; m += f) {
        for (var R = s.getPointAtLength(m), O = R[a]; T < d - 1 && M[T + 1](O); )
          T += 1;
        g[T].push(R);
      }
    else {
      var _ = r.map(function(te) {
        return te.length;
      }), N = _.reduce(function(te, me) {
        return te + me;
      }, 0), D = c / Math.max(1, N - 1), I = _.slice(0, d - 1);
      I.unshift(0);
      for (var B = 2; B < d; B += 1)
        I[B] += I[B - 1];
      for (var U = 0; U < d; U += 1)
        I[U] *= D;
      for (var q = 0, K = 0; K <= c; K += f) {
        for (var j = s.getPointAtLength(K); q < d - 1 && K >= I[q + 1]; )
          q += 1;
        g[q].push(j);
      }
    }
    return g;
  } catch {
    return [];
  }
}
function yf() {
  return yf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, yf.apply(this, arguments);
}
var yS = function(t) {
  return t.x || 0;
}, vS = function(t) {
  return t.y || 0;
};
function Ng(e) {
  var t = e.children, r = e.className, n = e.curve, a = e.defined, o = e.segmentation, f = e.sampleRate, s = e.segments, c = e.x, d = e.y, g = e.styles, y = se.useMemo(function() {
    var k = typeof c == "number" || typeof c > "u" ? function() {
      return c;
    } : c, M = typeof d == "number" || typeof d > "u" ? function() {
      return d;
    } : d;
    return s.map(function(T) {
      return T.map(function(m, R) {
        return {
          x: k(m, R, T),
          y: M(m, R, T)
        };
      });
    });
  }, [c, d, s]), v = se.useMemo(function() {
    var k = Dg({
      x: c,
      y: d,
      defined: a,
      curve: n
    });
    return k(s.flat()) || "";
  }, [c, d, a, n, s]), E = se.useMemo(function() {
    return gS({
      path: v,
      segmentation: o,
      pointsInSegments: y,
      sampleRate: f
    });
  }, [v, o, y, f]);
  return /* @__PURE__ */ i.createElement("g", null, E.map(function(k, M) {
    return t ? /* @__PURE__ */ i.createElement(i.Fragment, {
      key: M
    }, t({
      index: M,
      segment: k,
      styles: g[M] || g[M % g.length]
    })) : /* @__PURE__ */ i.createElement(fa, yf({
      key: M,
      className: r,
      data: k,
      x: yS,
      y: vS
    }, g[M] || g[M % g.length]));
  }));
}
Ng.propTypes = {
  segments: he.arrayOf(he.array).isRequired,
  styles: he.array.isRequired,
  children: he.func,
  className: he.string
};
var xS = ["tooltipOpen"];
function bS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function ic() {
  return ic = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ic.apply(this, arguments);
}
function Fg(e) {
  var t = se.useState(ic({
    tooltipOpen: !1
  }, e)), r = t[0], n = t[1], a = se.useCallback(function(f) {
    return n(typeof f == "function" ? function(s) {
      s.tooltipOpen;
      var c = bS(s, xS);
      return ic({}, f(c), {
        tooltipOpen: !0
      });
    } : {
      tooltipOpen: !0,
      tooltipLeft: f.tooltipLeft,
      tooltipTop: f.tooltipTop,
      tooltipData: f.tooltipData
    });
  }, [n]), o = se.useCallback(function() {
    return n({
      tooltipOpen: !1,
      tooltipLeft: void 0,
      tooltipTop: void 0,
      tooltipData: void 0
    });
  }, [n]);
  return {
    tooltipOpen: r.tooltipOpen,
    tooltipLeft: r.tooltipLeft,
    tooltipTop: r.tooltipTop,
    tooltipData: r.tooltipData,
    updateTooltip: n,
    showTooltip: a,
    hideTooltip: o
  };
}
var SS = ["className", "top", "left", "offsetLeft", "offsetTop", "style", "children", "unstyled", "applyPositionStyle"];
function oc() {
  return oc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, oc.apply(this, arguments);
}
function ES(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var zg = {
  position: "absolute",
  backgroundColor: "white",
  color: "#666666",
  padding: ".3rem .5rem",
  borderRadius: "3px",
  fontSize: "14px",
  boxShadow: "0 1px 2px rgba(33,33,33,0.2)",
  lineHeight: "1em",
  pointerEvents: "none"
}, uh = /* @__PURE__ */ i.forwardRef(function(e, t) {
  var r = e.className, n = e.top, a = e.left, o = e.offsetLeft, f = o === void 0 ? 10 : o, s = e.offsetTop, c = s === void 0 ? 10 : s, d = e.style, g = d === void 0 ? zg : d, y = e.children, v = e.unstyled, E = v === void 0 ? !1 : v, k = e.applyPositionStyle, M = k === void 0 ? !1 : k, T = ES(e, SS);
  return /* @__PURE__ */ i.createElement("div", oc({
    ref: t,
    className: Dn("visx-tooltip", r),
    style: oc({
      top: n == null || c == null ? n : n + c,
      left: a == null || f == null ? a : a + f
    }, M && {
      position: "absolute"
    }, !E && g)
  }, T), y);
});
uh.propTypes = {
  children: he.node,
  className: he.string,
  left: he.number,
  offsetLeft: he.number,
  offsetTop: he.number,
  top: he.number,
  applyPositionStyle: he.bool,
  unstyled: he.bool
};
uh.displayName = "Tooltip";
const kS = uh;
function vf() {
  return vf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vf.apply(this, arguments);
}
function wS(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function TS(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, xf(e, t);
}
function xf(e, t) {
  return xf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, xf(e, t);
}
var $p = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0
};
function CS(e) {
  var t;
  return t = /* @__PURE__ */ function(r) {
    TS(n, r);
    function n(o) {
      var f;
      return f = r.call(this, o) || this, f.state = {
        rect: void 0,
        parentRect: void 0
      }, f.nodeRef = /* @__PURE__ */ i.createRef(), f.getRects = f.getRects.bind(wS(f)), f;
    }
    var a = n.prototype;
    return a.componentDidMount = function() {
      var f, s = this;
      this.node = (f = this.nodeRef) != null && f.current ? this.nodeRef.current : Iy.findDOMNode(this), this.setState(function() {
        return s.getRects();
      });
    }, a.getRects = function() {
      if (!this.node)
        return this.state;
      var f = this.node, s = f.parentNode, c = f.getBoundingClientRect ? f.getBoundingClientRect() : $p, d = s != null && s.getBoundingClientRect ? s.getBoundingClientRect() : $p;
      return {
        rect: c,
        parentRect: d
      };
    }, a.render = function() {
      return /* @__PURE__ */ i.createElement(e, vf({
        nodeRef: this.nodeRef,
        getRects: this.getRects
      }, this.state, this.props));
    }, n;
  }(i.PureComponent), t.displayName = "withBoundingRects(" + (e.displayName || "") + ")", t;
}
var $g = /* @__PURE__ */ se.createContext({
  isFlippedVertically: !1,
  isFlippedHorizontally: !1
}), AS = $g.Provider;
$g.Consumer;
var PS = ["children", "getRects", "left", "offsetLeft", "offsetTop", "parentRect", "rect", "style", "top", "unstyled", "nodeRef"];
function lc() {
  return lc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, lc.apply(this, arguments);
}
function RS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Bg(e) {
  var t = e.children;
  e.getRects;
  var r = e.left, n = r === void 0 ? 0 : r, a = e.offsetLeft, o = a === void 0 ? 10 : a, f = e.offsetTop, s = f === void 0 ? 10 : f, c = e.parentRect, d = e.rect, g = e.style, y = g === void 0 ? zg : g, v = e.top, E = v === void 0 ? 0 : v, k = e.unstyled, M = k === void 0 ? !1 : k, T = e.nodeRef, m = RS(e, PS), R, O = !1, _ = !1;
  if (d && c) {
    var N = n, D = E;
    if (c.width) {
      var I = N + o + d.width - c.width, B = d.width - N - o;
      O = I > 0 && I > B;
    } else {
      var U = N + o + d.width - window.innerWidth, q = d.width - N - o;
      O = U > 0 && U > q;
    }
    if (c.height) {
      var K = D + s + d.height - c.height, j = d.height - D - s;
      _ = K > 0 && K > j;
    } else
      _ = D + s + d.height > window.innerHeight;
    N = O ? N - d.width - o : N + o, D = _ ? D - d.height - s : D + s, N = Math.round(N), D = Math.round(D), R = "translate(" + N + "px, " + D + "px)";
  }
  return /* @__PURE__ */ i.createElement(kS, lc({
    ref: T,
    style: lc({
      left: 0,
      top: 0,
      transform: R
    }, !M && y)
  }, m), /* @__PURE__ */ i.createElement(AS, {
    value: {
      isFlippedVertically: !_,
      isFlippedHorizontally: !O
    }
  }, t));
}
Bg.propTypes = {
  nodeRef: he.oneOfType([he.string, he.func, he.object])
};
const Ig = CS(Bg);
var rl = /* @__PURE__ */ function() {
  function e(r) {
    var n = r.x, a = n === void 0 ? 0 : n, o = r.y, f = o === void 0 ? 0 : o;
    this.x = 0, this.y = 0, this.x = a, this.y = f;
  }
  var t = e.prototype;
  return t.value = function() {
    return {
      x: this.x,
      y: this.y
    };
  }, t.toArray = function() {
    return [this.x, this.y];
  }, e;
}();
function LS(e, t) {
  return new rl({
    x: e.x + t.x,
    y: e.y + t.y
  });
}
function DS(e, t) {
  return new rl({
    x: e.x - t.x,
    y: e.y - t.y
  });
}
const OS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Point: rl,
  subtractPoints: DS,
  sumPoints: LS
}, Symbol.toStringTag, { value: "Module" }));
function MS(e) {
  return !!e && e instanceof Element;
}
function _S(e) {
  return !!e && (e instanceof SVGElement || "ownerSVGElement" in e);
}
function NS(e) {
  return !!e && "createSVGPoint" in e;
}
function FS(e) {
  return !!e && "getScreenCTM" in e;
}
function zS(e) {
  return !!e && "changedTouches" in e;
}
function $S(e) {
  return !!e && "clientX" in e;
}
function BS(e) {
  return !!e && (e instanceof Event || "nativeEvent" in e && e.nativeEvent instanceof Event);
}
function hs() {
  return hs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, hs.apply(this, arguments);
}
var Hd = {
  x: 0,
  y: 0
};
function IS(e) {
  if (!e)
    return hs({}, Hd);
  if (zS(e))
    return e.changedTouches.length > 0 ? {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    } : hs({}, Hd);
  if ($S(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  var t = e == null ? void 0 : e.target, r = t && "getBoundingClientRect" in t ? t.getBoundingClientRect() : null;
  return r ? {
    x: r.x + r.width / 2,
    y: r.y + r.height / 2
  } : hs({}, Hd);
}
function bf(e, t) {
  if (!e || !t)
    return null;
  var r = IS(t), n = _S(e) ? e.ownerSVGElement : e, a = FS(n) ? n.getScreenCTM() : null;
  if (NS(n) && a) {
    var o = n.createSVGPoint();
    return o.x = r.x, o.y = r.y, o = o.matrixTransform(a.inverse()), new rl({
      x: o.x,
      y: o.y
    });
  }
  var f = e.getBoundingClientRect();
  return new rl({
    x: r.x - f.left - e.clientLeft,
    y: r.y - f.top - e.clientTop
  });
}
function Sf(e, t) {
  if (MS(e) && t)
    return bf(e, t);
  if (BS(e)) {
    var r = e, n = r.target;
    if (n)
      return bf(n, r);
  }
  return null;
}
const HS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  localPoint: Sf,
  touchPoint: bf
}, Symbol.toStringTag, { value: "Module" })), WS = new km(), Hg = (e) => {
  const { tableData: t, config: r, formatNumber: n, capitalize: a, formatDate: o, formatTooltipsDate: f, parseDate: s, setSharedFilter: c } = se.useContext(wt), { xScale: d, yScale: g, showTooltip: y, hideTooltip: v } = e, { xAxis: E, visualizationType: k, orientation: M, yAxis: T, runtime: m } = r, R = WS.applySuppression(t, r.suppressedData), O = (H, le) => {
    const { x: ue, y: fe } = le, V = {
      data: H || {},
      dataXPosition: ue + 10,
      dataYPosition: fe
    };
    return {
      tooltipLeft: V.dataXPosition,
      tooltipTop: V.dataYPosition,
      tooltipData: V
    };
  }, _ = (H, le) => {
    H.stopPropagation();
    const ue = Sf(H), { x: fe, y: ae } = ue, { data: V, arc: Z } = le ?? {}, ee = I(fe - Number(r.yAxis.size || 0)), Ae = k !== "Pie" ? r.series.filter((ie) => ie.tooltip === !0).map((ie) => ie.dataKey) : r.series.map((ie) => ie.dataKey);
    Ae.push(r.xAxis.dataKey), r.visualizationType === "Forecasting" && r.series.map((ie) => {
      ie.confidenceIntervals.map((we) => {
        we.showInTooltip && (Ae.push(we.high), Ae.push(we.low));
      });
    });
    function xe(ie) {
      let we = [];
      for (let Pe in ie)
        ie.hasOwnProperty(Pe) && we.push(ie[Pe].name);
      return we;
    }
    Ae.push(...xe(r.columns)), Ae.push(...xe(r.columns));
    const De = q(ee, Ae), oe = R.filter((ie) => ie[E.dataKey] === B(ae)), ze = M === "vertical" ? De : oe, Ie = (ie) => {
      const we = r.series.filter((He) => He.dataKey === ie)[0];
      return we != null && we.axis ? String(we.axis).toLowerCase() : "left";
    }, ge = (() => {
      var Ye, Je, at;
      const ie = r.columns, we = [], Pe = [];
      for (const [it, st] of Object.entries(ie)) {
        const Ge = {
          addColPrefix: r.columns[it].prefix,
          addColSuffix: r.columns[it].suffix,
          addColRoundTo: r.columns[it].roundToPlace ? r.columns[it].roundToPlace : "",
          addColCommas: r.columns[it].commas
        };
        let We = null;
        r.visualizationType === "Pie" ? We = Z == null ? void 0 : Z.data[st.name] : We = (Ye = ze[0]) == null ? void 0 : Ye[st.name];
        const Fe = wm(We, "left", !0, r, Ge);
        st.tooltips && we.push([st.label, Fe]);
      }
      const He = [];
      return we.forEach((it) => {
        He.push([it[0], it[1]]);
      }), k === "Pie" && Pe.push(
        // ignore
        [r.xAxis.dataKey, V],
        [r.runtime.yAxis.dataKey, n(Z == null ? void 0 : Z.data[r.runtime.yAxis.dataKey])],
        ["Percent", `${Math.round(((Z == null ? void 0 : Z.endAngle) - (Z == null ? void 0 : Z.startAngle)) * 180 / Math.PI / 360 * 100) + "%"}`]
      ), k === "Forest Plot" && Pe.push([r.xAxis.dataKey, B(ae)]), k !== "Pie" && k !== "Forest Plot" && Pe.push(
        ...(at = (Je = K()) == null ? void 0 : Je.filter(Boolean)) == null ? void 0 : at.flatMap((it) => {
          var Ge, We, Fe;
          const st = it === r.xAxis.dataKey ? (Ge = ze[0]) == null ? void 0 : Ge[it] : n((We = ze[0]) == null ? void 0 : We[it], Ie(it));
          return (Fe = ze == null ? void 0 : ze[0]) != null && Fe[it] ? [[it, st, Ie(it)]] : [];
        })
      ), [...Pe, ...He];
    })();
    if (!ge)
      return;
    const Oe = O(ge, ue);
    y(Oe);
  }, N = () => {
    r.visualizationType === "Area Chart" ? setTimeout(() => {
      v();
    }, 3e3) : v();
  }, D = (H) => {
    if (r.xAxis.type === "categorical" || r.visualizationType === "Combo") {
      let le = d.step();
      const fe = Math.floor(Number(H) / le);
      return d.domain()[fe - 1];
    }
    if (Cn(r.xAxis) && r.visualizationType !== "Combo") {
      const le = Gh((V) => s(V[r.xAxis.dataKey])).left, ue = d.invert(d(H)), fe = le(r.data, ue, 1);
      return s(r.data[fe - 1][r.xAxis.dataKey]);
    }
  }, I = (H, le = !1) => {
    if (k !== "Pie" && M !== "horizontal") {
      if (d.type === "point" || E.type === "continuous" || Cn(E)) {
        let ue = null, fe = Number.MAX_VALUE, ae = H;
        return R.forEach((V) => {
          const Z = Cn(E) ? d(s(V[E.dataKey])) : d(V[E.dataKey]);
          let ee = r.barHeight;
          const Ae = Math.abs(Number(Z - ae + (le ? ee * 2 : 0)));
          Ae <= fe && (fe = Ae, ue = (Cn(E), V[E.dataKey]));
        }), ue;
      }
      if (r.xAxis.type === "categorical" || k === "Combo" && M !== "horizontal" && k !== "Forest Plot") {
        let fe = (d.range()[1] - d.range()[0]) / (d.domain().length + 1);
        const V = Math.floor((Number(H) - fe / 2) / fe);
        return d.domain()[V];
      }
      if (Cn(E) && k !== "Combo" && M !== "horizontal") {
        const ue = Gh((Z) => s(Z[r.xAxis.dataKey])).left, fe = d.invert(H), ae = ue(r.data, fe, 1);
        return s(r.data[ae - 1][r.xAxis.dataKey]);
      }
    }
  }, B = (H, le) => {
    if (k === "Pie")
      return;
    let ue = Number.MAX_VALUE, fe = null;
    return R.forEach((ae, V) => {
      const Z = g(k !== "Forest Plot" ? ae[r.xAxis.dataKey] : V), ee = Math.abs(Z - H);
      ee < ue && (ue = ee, fe = le ? ae[le] : ae[r.xAxis.dataKey]);
    }), fe;
  }, U = (H) => {
    var le, ue;
    try {
      const fe = Sf(H), { x: ae } = fe;
      if (!ae)
        throw new Error("COVE: no x value in handleTooltipClick.");
      let V = I(ae, !0), Z = (le = r.data) == null ? void 0 : le.filter((ee) => ee[r.xAxis.dataKey] === V);
      if (!V)
        throw new Error("COVE: no closest x scale value in handleTooltipClick");
      if (Cn(E) && V && (V = new Date(V), V = o(V), Z = (ue = r.data) == null ? void 0 : ue.filter((ee) => o(new Date(ee[r.xAxis.dataKey])) === V)), !Z[0])
        throw new Error(`COVE: no data found matching the closest xScale value: ${V}`);
      c && (r != null && r.uid) && (Z != null && Z[0]) && c(r.uid, Z[0]);
    } catch (fe) {
      console.error(fe.message);
    }
  }, q = (H, le) => {
    try {
      let ue;
      return E.type === "categorical" ? ue = R.filter((ae) => ae[E.dataKey] === H) : ue = R.filter((ae) => ae[E.dataKey] === H), !ue || ue.length === 0 ? [] : ue.map((ae) => Object.fromEntries(Object.entries(ae).filter(([V, Z]) => le.includes(V))));
    } catch (ue) {
      console.error("COVE", ue);
    }
  }, K = () => {
    var H;
    try {
      let le, ue = [], fe = [];
      if ((H = r.series) == null || H.forEach((ae) => {
        ae.type === "Forecasting" && (ue.push(ae.stageColumn), ae == null || ae.confidenceIntervals.forEach((V) => {
          V.showInTooltip === !0 && (fe.push(V.low), fe.push(V.high));
        }));
      }), !r.dashboard)
        switch (k) {
          case "Combo":
            le = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys, ...fe];
            break;
          case "Forecasting":
            le = [m.xAxis.dataKey, ...ue, ...fe];
            break;
          case "Line":
            le = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
            break;
          case "Area Chart":
            le = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
            break;
          case "Bar":
            le = M === "vertical" ? [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys] : [m.yAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
            break;
          case "Pie":
            le = [m.xAxis.dataKey, ...m == null ? void 0 : m.seriesKeys];
          default:
            throw new Error("No visualization type found in handleTooltipMouseOver");
        }
      return r.dashboard && (le = [m.xAxis.dataKey, ...m == null ? void 0 : m.barSeriesKeys, ...m == null ? void 0 : m.lineSeriesKeys, ...ue, ...fe]), le;
    } catch (le) {
      console.error("COVE", le);
    }
  }, j = (H) => {
    const { dataXPosition: le, dataYPosition: ue } = H;
    return {
      opacity: r.tooltips.opacity ? r.tooltips.opacity / 100 : 1,
      position: "absolute",
      backgroundColor: "white",
      borderRadius: "4px",
      transform: `translate(${le}px, ${Number(ue)}px)`
    };
  }, te = (H) => {
    var ue, fe;
    let le = r.series.filter((ae) => ae.dataKey === H);
    return (ue = le[0]) != null && ue.name ? (fe = le[0]) == null ? void 0 : fe.name : H;
  };
  return {
    getIncludedTooltipSeries: K,
    getXValueFromCoordinate: I,
    getXValueFromCoordinateDate: D,
    getYScaleValues: q,
    handleTooltipClick: U,
    handleTooltipMouseOff: N,
    handleTooltipMouseOver: _,
    TooltipListItem: ({ item: H }) => {
      const [le, ue] = H, [fe, ae, V] = ue;
      if (k === "Forest Plot")
        return fe === r.xAxis.dataKey ? /* @__PURE__ */ i.createElement("li", { className: "tooltip-heading" }, `${a(r.xAxis.dataKey ? `${r.xAxis.dataKey}: ` : "")} ${Cn(T) ? o(s(fe, !1)) : ae}`) : /* @__PURE__ */ i.createElement("li", { className: "tooltip-body" }, `${te(fe)}: ${n(ae, "left")}`);
      const Z = r.tooltips.dateDisplayFormat ? f(s(ae, !1)) : o(s(ae, !1));
      return k === "Bar" && M === "horizontal" && fe === r.xAxis.dataKey ? /* @__PURE__ */ i.createElement("li", { className: "tooltip-heading" }, `${a(r.runtime.yAxis.label ? `${r.runtime.yAxis.label}: ` : "")} ${r.xAxis.type === "date" ? Z : ae}`) : fe === r.xAxis.dataKey ? /* @__PURE__ */ i.createElement("li", { className: "tooltip-heading" }, `${a(r.runtime.xAxis.label ? `${r.runtime.xAxis.label}: ` : "")} ${Cn(E) ? Z : ae}`) : /* @__PURE__ */ i.createElement("li", { className: "tooltip-body" }, `${te(fe)}: ${ae}`);
    },
    tooltipStyles: j
  };
};
function ch(e, { threshold: t = 0, root: r = null, rootMargin: n = "0%", freezeOnceVisible: a = !1 }) {
  const [o, f] = se.useState(), s = (o == null ? void 0 : o.isIntersecting) && a, c = ([d]) => {
    f(d);
  };
  return se.useEffect(() => {
    setTimeout(() => {
      const d = e == null ? void 0 : e.current;
      if (!!!window.IntersectionObserver || s || !d)
        return;
      const y = { threshold: t, root: r, rootMargin: n }, v = new IntersectionObserver(c, y);
      return v.observe(d), () => v.disconnect();
    }, 500);
  }, [e, t, r, n, s]), o;
}
const Ef = (e, t = !1) => {
  t && console.log("handleChartAriaLabels Testing On:", e);
  try {
    if (!e.visualizationType)
      throw Error("handleChartAriaLabels: no visualization type found in state");
    let r = "";
    return e.visualizationType && (r += `${e.visualizationType} chart`), e.title && e.visualizationType && (r += ` with the title: ${e.title}`), r;
  } catch (r) {
    console.error("COVE: ", r.message);
  }
};
var VS = ["flexDirection", "alignItems", "margin", "display", "children"];
function kf() {
  return kf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, kf.apply(this, arguments);
}
function jS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function sc(e) {
  var t = e.flexDirection, r = t === void 0 ? "row" : t, n = e.alignItems, a = n === void 0 ? "center" : n, o = e.margin, f = o === void 0 ? "0" : o, s = e.display, c = s === void 0 ? "flex" : s, d = e.children, g = jS(e, VS);
  return /* @__PURE__ */ i.createElement("div", kf({
    className: "visx-legend-item",
    style: {
      display: c,
      alignItems: a,
      flexDirection: r,
      margin: f
    }
  }, g), d);
}
sc.propTypes = {
  alignItems: he.string,
  margin: he.oneOfType([he.string, he.number]),
  children: he.node,
  display: he.string
};
var US = ["flex", "label", "margin", "align", "children"];
function wf() {
  return wf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, wf.apply(this, arguments);
}
function KS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function uc(e) {
  var t = e.flex, r = t === void 0 ? "1" : t, n = e.label, a = e.margin, o = a === void 0 ? "5px 0" : a, f = e.align, s = f === void 0 ? "left" : f, c = e.children, d = KS(e, US);
  return /* @__PURE__ */ i.createElement("div", wf({
    className: "visx-legend-label",
    style: {
      justifyContent: s,
      display: "flex",
      flex: r,
      margin: o
    }
  }, d), c || n);
}
uc.propTypes = {
  align: he.string,
  label: he.node,
  flex: he.oneOfType([he.string, he.number]),
  margin: he.oneOfType([he.string, he.number]),
  children: he.node
};
function Tf() {
  return Tf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Tf.apply(this, arguments);
}
function dh(e) {
  var t = e.fill, r = e.width, n = e.height, a = e.style;
  return /* @__PURE__ */ i.createElement("div", {
    style: Tf({
      width: r,
      height: n,
      background: t
    }, a)
  });
}
dh.propTypes = {
  fill: he.string,
  width: he.oneOfType([he.string, he.number]),
  height: he.oneOfType([he.string, he.number])
};
function Wg(e) {
  var t = e.fill, r = e.width, n = e.height, a = e.style, o = typeof r == "string" || typeof r > "u" ? 0 : r, f = typeof n == "string" || typeof n > "u" ? 0 : n, s = Math.max(o, f), c = s / 2;
  return /* @__PURE__ */ i.createElement("svg", {
    width: s,
    height: s
  }, /* @__PURE__ */ i.createElement(rt, {
    top: c,
    left: c
  }, /* @__PURE__ */ i.createElement("circle", {
    r: c,
    fill: t,
    style: a
  })));
}
Wg.propTypes = {
  fill: he.string,
  width: he.oneOfType([he.string, he.number]),
  height: he.oneOfType([he.string, he.number])
};
function Vg(e) {
  var t = e.fill, r = e.width, n = e.height, a = e.style, o = typeof n == "string" || typeof n > "u" ? 0 : n, f = typeof (a == null ? void 0 : a.strokeWidth) == "number" ? a == null ? void 0 : a.strokeWidth : 2;
  return /* @__PURE__ */ i.createElement("svg", {
    width: r,
    height: n
  }, /* @__PURE__ */ i.createElement(rt, {
    top: o / 2 - f / 2
  }, /* @__PURE__ */ i.createElement("line", {
    x1: 0,
    x2: r,
    y1: 0,
    y2: 0,
    stroke: t,
    strokeWidth: f,
    style: a
  })));
}
Vg.propTypes = {
  fill: he.string,
  width: he.oneOfType([he.string, he.number]),
  height: he.oneOfType([he.string, he.number])
};
function ps() {
  return ps = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ps.apply(this, arguments);
}
var Wd = function() {
};
function YS(e) {
  var t = e.shape, r = t === void 0 ? "rect" : t, n = e.fill, a = n === void 0 ? Wd : n, o = e.size, f = o === void 0 ? Wd : o, s = e.width, c = e.height, d = e.label, g = e.item, y = e.itemIndex, v = e.shapeStyle, E = v === void 0 ? Wd : v, k = {
    width: s,
    height: c,
    item: g,
    itemIndex: y,
    label: d,
    fill: a(ps({}, d)),
    size: f(ps({}, d)),
    style: E(ps({}, d))
  };
  return typeof r == "string" ? r === "circle" ? /* @__PURE__ */ i.createElement(Wg, k) : r === "line" ? /* @__PURE__ */ i.createElement(Vg, k) : /* @__PURE__ */ i.createElement(dh, k) : /* @__PURE__ */ i.isValidElement(r) ? /* @__PURE__ */ i.cloneElement(r, k) : r ? /* @__PURE__ */ i.createElement(r, k) : null;
}
function cc() {
  return cc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, cc.apply(this, arguments);
}
function jg(e) {
  var t = e.shape, r = t === void 0 ? dh : t, n = e.width, a = e.height, o = e.margin, f = e.label, s = e.item, c = e.itemIndex, d = e.fill, g = e.size, y = e.shapeStyle;
  return /* @__PURE__ */ i.createElement("div", {
    className: "visx-legend-shape",
    style: {
      display: "flex",
      width: g ? g(cc({}, f)) : n,
      height: g ? g(cc({}, f)) : a,
      margin: o
    }
  }, YS({
    shape: r,
    item: s,
    itemIndex: c,
    label: f,
    width: n,
    height: a,
    fill: d,
    shapeStyle: y
  }));
}
jg.propTypes = {
  itemIndex: he.number.isRequired,
  margin: he.oneOfType([he.string, he.number]),
  width: he.oneOfType([he.string, he.number]),
  height: he.oneOfType([he.string, he.number])
};
function Ug(e) {
  return e && typeof e == "object" && "value" in e && typeof e.value < "u" ? e.value : e;
}
function Bp(e) {
  return String(Ug(e));
}
function XS(e) {
  var t = e.scale, r = e.labelFormat;
  return function(n, a) {
    return {
      datum: n,
      index: a,
      text: "" + r(n, a),
      value: t(n)
    };
  };
}
var qS = ["className", "style", "scale", "shape", "domain", "fill", "size", "labelFormat", "labelTransform", "shapeWidth", "shapeHeight", "shapeMargin", "shapeStyle", "labelAlign", "labelFlex", "labelMargin", "itemMargin", "direction", "itemDirection", "legendLabelProps", "children"];
function ms() {
  return ms = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ms.apply(this, arguments);
}
function GS(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var ZS = {
  display: "flex"
};
function Kg(e) {
  var t = e.className, r = e.style, n = r === void 0 ? ZS : r, a = e.scale, o = e.shape, f = e.domain, s = e.fill, c = s === void 0 ? Bp : s, d = e.size, g = d === void 0 ? Bp : d, y = e.labelFormat, v = y === void 0 ? Ug : y, E = e.labelTransform, k = E === void 0 ? XS : E, M = e.shapeWidth, T = M === void 0 ? 15 : M, m = e.shapeHeight, R = m === void 0 ? 15 : m, O = e.shapeMargin, _ = O === void 0 ? "2px 4px 2px 0" : O, N = e.shapeStyle, D = e.labelAlign, I = D === void 0 ? "left" : D, B = e.labelFlex, U = B === void 0 ? "1" : B, q = e.labelMargin, K = q === void 0 ? "0 4px" : q, j = e.itemMargin, te = j === void 0 ? "0" : j, me = e.direction, H = me === void 0 ? "column" : me, le = e.itemDirection, ue = le === void 0 ? "row" : le, fe = e.legendLabelProps, ae = e.children, V = GS(e, qS), Z = f || ("domain" in a ? a.domain() : []), ee = k({
    scale: a,
    labelFormat: v
  }), Ae = Z.map(ee);
  return ae ? /* @__PURE__ */ i.createElement(i.Fragment, null, ae(Ae)) : /* @__PURE__ */ i.createElement("div", {
    className: Dn("visx-legend", t),
    style: ms({}, n, {
      flexDirection: H
    })
  }, Ae.map(function(xe, De) {
    return /* @__PURE__ */ i.createElement(sc, ms({
      key: "legend-" + xe.text + "-" + De,
      margin: te,
      flexDirection: ue
    }, V), /* @__PURE__ */ i.createElement(jg, {
      shape: o,
      height: R,
      width: T,
      margin: _,
      item: Z[De],
      itemIndex: De,
      label: xe,
      fill: c,
      size: g,
      shapeStyle: N
    }), /* @__PURE__ */ i.createElement(uc, ms({
      label: xe.text,
      flex: U,
      margin: K,
      align: I
    }, fe)));
  }));
}
Kg.propTypes = {
  children: he.func,
  className: he.string,
  domain: he.array,
  shapeWidth: he.oneOfType([he.string, he.number]),
  shapeHeight: he.oneOfType([he.string, he.number]),
  shapeMargin: he.oneOfType([he.string, he.number]),
  labelAlign: he.string,
  labelFlex: he.oneOfType([he.string, he.number]),
  labelMargin: he.oneOfType([he.string, he.number]),
  itemMargin: he.oneOfType([he.string, he.number]),
  fill: he.func,
  size: he.func,
  shapeStyle: he.func
};
function QS(e) {
  return /* @__PURE__ */ i.createElement(Kg, e);
}
function JS(e) {
  let t = ["legend-container"], r = ["legend-container__inner"];
  return e.legend.position === "left" && t.push("left"), e.legend.position === "bottom" && (t.push("bottom"), r.push("bottom")), e.legend.position === "bottom" && e.legend.singleRow && r.push("single-row"), e.legend.reverseLabelOrder && (r.push("d-flex"), r.push("flex-column-reverse")), e.legend.position === "bottom" && e.legend.verticalSorted && r.push("vertical-sorted"), {
    containerClasses: t,
    innerClasses: r
  };
}
const Ac = (e, t) => {
  var M;
  const { formatDate: r, parseDate: n } = se.useContext(wt);
  let a = [], o = "", f = [], s = [];
  ((M = e.series) == null ? void 0 : M.length) > 0 && e.data ? (a = e.series[0], o = e.series[0].dataKey, f = e.highlightedBarValues, s = e.data.map((T) => T[e.xAxis.dataKey])) : (a = [], o = "", f = [], s = []);
  const c = (T, m) => {
    const R = [...e.highlightedBarValues];
    R[m].borderWidth = T.target.value, t({
      ...e,
      highlightedBarValues: R
    });
  }, d = (T, m) => {
    T.preventDefault();
    const R = [...e.highlightedBarValues];
    R[m].value = T.target.value, R[m].dataKey = o, t({
      ...e,
      highlightedBarValues: R
    });
  }, g = (T, m) => {
    T.preventDefault();
    const R = [...e.highlightedBarValues];
    R.push({ dataKey: o }), t({
      ...e,
      highlightedBarValues: R
    });
  }, y = (T, m) => {
    T.preventDefault();
    const R = [...e.highlightedBarValues];
    R.splice(m, 1), t({
      ...e,
      highlightedBarValues: R
    });
  }, v = (T, m) => {
    const R = [...e.highlightedBarValues];
    R[m].color = T.target.value, t({
      ...e
    });
  }, E = (T, m) => {
    const R = [...e.highlightedBarValues];
    R[m].legendLabel = T.target.value, t({
      ...e,
      copyOfHighlightedBarValues: R
    });
  }, k = () => {
  };
  return k.checkFontColor = (T, m, R) => {
    if (e.xAxis.type === "date") {
      if (k.formatDates(m).includes(T))
        return "#000";
    } else if (m.includes(T))
      return "#000";
    return R;
  }, k.formatDates = (T) => T.map((m) => m ? r(n(m)) : !1), k.findDuplicates = (T) => {
    const m = {};
    return T == null ? void 0 : T.filter((O) => {
      const { legendLabel: _ } = O;
      return m[_] ? !1 : (m[_] = !0, !0);
    });
  }, {
    HighLightedBarUtils: k,
    highlightedSeries: a,
    highlightedSeriesKey: o,
    highlightedBarValues: f,
    highlightedSeriesValues: s,
    handleUpdateHighlightedBar: d,
    handleAddNewHighlightedBar: g,
    handleRemoveHighlightedBar: y,
    handleUpdateHighlightedBarColor: v,
    handleHighlightedBarLegendLabel: E,
    handleUpdateHighlightedBorderWidth: c
  };
}, Cf = (e) => {
  switch (e) {
    case "dashed-sm":
      return "5 5";
    case "Dashed Small":
      return "5 5";
    case "dashed-md":
      return "10 5";
    case "Dashed Medium":
      return "10 5";
    case "dashed-lg":
      return "15 5";
    case "Dashed Large":
      return "15 5";
    default:
      return 0;
  }
}, Yg = se.forwardRef(({ config: e, colorScale: t, seriesHighlight: r, highlight: n, highlightReset: a, currentViewport: o, formatLabels: f, skipId: s = "legend" }, c) => {
  var O;
  const { innerClasses: d, containerClasses: g } = JS(e), { runtime: y, orientation: v, legend: E } = e;
  if (!E)
    return null;
  const k = Uf({
    domain: (O = e.suppressedData) == null ? void 0 : O.map((_) => _.label),
    range: ["none"],
    unknown: "block"
  }), M = E.position === "bottom" || ["sm", "xs", "xxs"].includes(o), T = {
    marginBottom: M ? "15px" : "0px",
    marginTop: M && v === "horizontal" ? `${e.yAxis.label && e.isResponsiveTicks ? e.dynamicMarginTop : e.runtime.xAxis.size}px` : `${M ? e.dynamicMarginTop + 15 : 0}px`
  }, { HighLightedBarUtils: m } = Ac(e);
  let R = m.findDuplicates(e.highlightedBarValues);
  return /* @__PURE__ */ i.createElement("aside", { ref: c, style: T, id: s || "legend", className: g.join(" "), role: "region", "aria-label": "legend", tabIndex: 0 }, E.label && /* @__PURE__ */ i.createElement("h3", null, _i(E.label)), E.description && /* @__PURE__ */ i.createElement("p", null, _i(E.description)), /* @__PURE__ */ i.createElement(QS, { scale: t, itemDirection: "row", labelMargin: "0 20px 0 0", shapeMargin: "0 10px 0" }, (_) => {
    var N, D;
    return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: d.join(" ") }, f(_).map((I, B) => {
      var K, j, te, me;
      let U = ["legend-item", `legend-text--${I.text.replace(" ", "").toLowerCase()}`], q = I.datum;
      if (e.exclusions.active && ((K = e.exclusions.keys) != null && K.includes(q)))
        return null;
      if (y.seriesLabels) {
        let H = e.runtime.seriesLabelsAll.indexOf(q);
        q = e.runtime.seriesKeys[H], ((j = y == null ? void 0 : y.forecastingSeriesKeys) == null ? void 0 : j.length) > 0 && (q = I.text);
      }
      return r.length > 0 && r.includes(q) === !1 && U.push("inactive"), /* @__PURE__ */ i.createElement(
        sc,
        {
          className: U.join(" "),
          tabIndex: 0,
          key: `legend-quantile-${B}`,
          onKeyDown: (H) => {
            H.key === "Enter" && (H.preventDefault(), n(I));
          },
          onClick: (H) => {
            H.preventDefault(), n(I);
          },
          role: "button"
        },
        e.visualizationType === "Line" && e.legend.lineMode ? /* @__PURE__ */ i.createElement("svg", { width: 40, height: 20 }, /* @__PURE__ */ i.createElement(an, { from: { x: 10, y: 10 }, to: { x: 40, y: 10 }, stroke: I.value, strokeWidth: 2, strokeDasharray: Cf((te = e.series[B]) != null && te.type ? (me = e.series[B]) == null ? void 0 : me.type : "") })) : /* @__PURE__ */ i.createElement("div", { style: { display: "flex", flexDirection: "column" } }, /* @__PURE__ */ i.createElement(Vh, { margin: "0", fill: I.value, display: k(I.datum) }), /* @__PURE__ */ i.createElement("div", { style: { marginTop: "2px", marginRight: "6px" } }, I.icon)),
        /* @__PURE__ */ i.createElement(uc, { align: "left", margin: "0 0 0 4px" }, I.text)
      );
    }), R.map((I, B) => {
      let U = "legend-item", q = I.legendLabel;
      return q ? (r.length > 0 && r.includes(q) === !1 && (U += " inactive"), /* @__PURE__ */ i.createElement(
        sc,
        {
          className: U,
          tabIndex: 0,
          key: `legend-quantile-${B}`,
          onKeyDown: (K) => {
            K.key === "Enter" && (K.preventDefault(), n(I.legendLabel));
          },
          onClick: (K) => {
            K.preventDefault(), n(I.legendLabel);
          }
        },
        /* @__PURE__ */ i.createElement(Vh, { fill: "transparent", borderColor: I.color ? I.color : "rgba(255, 102, 1)" }),
        " ",
        /* @__PURE__ */ i.createElement(uc, { align: "left", margin: "0 0 0 4px" }, I.legendLabel ? I.legendLabel : I.value)
      )) : !1;
    })), /* @__PURE__ */ i.createElement(i.Fragment, null, ((N = e == null ? void 0 : e.preliminaryData) == null ? void 0 : N.some((I) => I.label)) && ["Line", "Combo"].includes(e.visualizationType) && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("div", { className: e.legend.singleRow && M ? "legend-container__inner bottom single-row" : "" }, (D = e == null ? void 0 : e.preliminaryData) == null ? void 0 : D.map((I, B) => /* @__PURE__ */ i.createElement(i.Fragment, null, I.label && /* @__PURE__ */ i.createElement("div", { key: B, className: "legend-preliminary" }, /* @__PURE__ */ i.createElement("svg", null, I.style.includes("Dashed") ? /* @__PURE__ */ i.createElement(an, { from: { x: 10, y: 10 }, to: { x: 40, y: 10 }, stroke: "#000", strokeWidth: 2, strokeDasharray: Cf(I.style) }) : /* @__PURE__ */ i.createElement("circle", { r: 6, strokeWidth: 2, stroke: "#000", cx: 22, cy: 10, fill: "transparent" })), /* @__PURE__ */ i.createElement("span", null, " ", I.label))))))));
  }), r.length > 0 && /* @__PURE__ */ i.createElement(Hf, { onClick: (_) => a(_), style: { marginTop: "1rem" } }, "Reset"));
});
function fh(e) {
  return Py({ tag: "svg", attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" } }] })(e);
}
const Xg = (e, t, r, n) => (a) => {
  var v, E, k, M, T;
  const { visualizationType: o, visualizationSubType: f, series: s, runtime: c } = e, d = (m) => e.legend.reverseLabelOrder && e.legend.position === "bottom" ? m.reverse() : m, g = (v = e.legend) == null ? void 0 : v.colorCode;
  if (o === "Deviation Bar") {
    const [m, R] = ju[e.twoColor.palette], O = {
      datum: "X",
      index: 0,
      text: `Below ${e.xAxis.targetLabel}`,
      value: m
    }, _ = {
      datum: "X",
      index: 1,
      text: `Above ${e.xAxis.targetLabel}`,
      value: R
    };
    return d([O, _]);
  }
  if (o === "Bar" && f === "regular" && g && (s == null ? void 0 : s.length) === 1) {
    let m = fr[e.palette];
    for (; t.length > m.length; )
      m = m.concat(m);
    m = m.slice(0, r.length);
    const R = /* @__PURE__ */ new Set();
    t.forEach((_) => R.add(_[g]));
    const O = Array.from(R).map((_, N) => ({
      datum: _,
      index: N,
      text: _,
      value: m[N]
    }));
    return d(O);
  }
  if (((E = c == null ? void 0 : c.forecastingSeriesKeys) == null ? void 0 : E.length) > 0) {
    let m = [];
    return (M = (k = e.runtime) == null ? void 0 : k.forecastingSeriesKeys) == null || M.map((R, O) => {
      var _;
      return (_ = R == null ? void 0 : R.stages) == null ? void 0 : _.map((N, D) => {
        var U, q, K, j;
        let I = (U = Uu[N.color]) != null && U[2] ? (q = Uu[N.color]) == null ? void 0 : q[2] : (K = fr[N.color]) != null && K[2] ? (j = fr[N.color]) == null ? void 0 : j[2] : "#ccc";
        const B = {
          datum: N.key,
          index: D,
          text: N.key,
          value: I
        };
        m.push(B);
      });
    }), e.runtime.barSeriesKeys && e.runtime.barSeriesKeys.forEach((R, O) => {
      let _ = fr[e.palette][O] ? fr[e.palette][O] : "#ccc";
      const N = {
        datum: R,
        index: O,
        text: R,
        value: _
      };
      m.push(N);
    }), d(m);
  }
  if (e.series.filter((m) => !!m.name).length > 0) {
    const m = /* @__PURE__ */ new Set();
    e.series.forEach((O) => {
      m.add(O.name || O.dataKey);
    });
    const R = Array.from(m).map((O, _) => ({
      datum: O,
      index: _,
      text: O,
      value: n(O)
    }));
    return d(R);
  }
  if ((e.visualizationType === "Bar" || e.visualizationType === "Combo") && e.visualizationSubType === "regular" && e.suppressedData) {
    const m = a.length - 1;
    let R = [];
    return (T = e.suppressedData) == null || T.forEach(({ label: O, icon: _ }, N) => {
      if (O && _) {
        const D = {
          datum: O,
          index: m + N,
          text: O,
          icon: /* @__PURE__ */ i.createElement(fh, { color: "#000", size: 15 })
        };
        R.push(D);
      }
    }), [...a, ...R];
  }
  return d(a);
}, Ru = ({ startAngle: e, endAngle: t }) => ({
  startAngle: e,
  endAngle: t
}), eE = (e) => {
  const { transformedData: t, config: r, colorScale: n, currentViewport: a, dimensions: o, highlight: f, highlightReset: s, seriesHighlight: c } = se.useContext(wt), { tooltipData: d, showTooltip: g, hideTooltip: y, tooltipOpen: v, tooltipLeft: E, tooltipTop: k } = Fg(), { handleTooltipMouseOver: M, handleTooltipMouseOff: T, TooltipListItem: m } = Hg({
    xScale: !1,
    yScale: !1,
    showTooltip: g,
    hideTooltip: y
  }), [R, O] = se.useState(void 0), [_, N] = se.useState(!1), D = Object.values(r.columns).filter((Z) => Z.showInViz), I = D.length > 0, B = I ? "pivotColumn" : void 0, U = se.useMemo(() => {
    if (I) {
      let Z = [];
      const ee = r.yAxis.dataKey, Ae = D.map((oe) => oe.name), xe = [ee, ...Ae], De = r.xAxis.dataKey;
      return t.forEach((oe) => {
        xe.forEach((ze) => {
          const Ie = oe[ze];
          Ie && Z.push({
            [B]: Ie,
            [De]: `${oe[De]} - ${ze}`
          });
        });
      }), Z;
    }
    return t;
  }, [t, I]), q = se.useMemo(() => {
    if (I) {
      const Z = {};
      U.forEach((xe) => {
        Z[xe[r.xAxis.dataKey]] || (Z[xe[r.xAxis.dataKey]] = !0);
      });
      const ee = Object.entries(Z).length;
      let Ae = r.customColors || fr[r.palette];
      return Ae = Ae.slice(0, ee), Uf({
        domain: Object.keys(Z),
        range: Ae,
        unknown: null
      });
    }
    return n;
  }, [n, I]), K = se.useRef(), j = ch(K, {
    freezeOnceVisible: !1
  });
  se.useEffect(() => {
    document.querySelector(".isEditor") && N((ee) => !0);
  }), se.useEffect(() => {
    j != null && j.isIntersecting && r.animate && !_ && setTimeout(() => {
      N(!0);
    }, 500);
  }, [j == null ? void 0 : j.isIntersecting, r.animate]);
  const te = ({ arcs: Z, path: ee, getKey: Ae }) => {
    const xe = Db(Z, Ae, {
      from: Ru,
      enter: Ru,
      update: Ru,
      leave: Ru
    });
    return se.useEffect(() => {
      const De = setTimeout(() => {
        y();
      }, 500);
      return () => {
        clearTimeout(De);
      };
    }, [d]), /* @__PURE__ */ i.createElement(i.Fragment, null, xe.map(({ item: De, props: oe, key: ze }, Ie) => /* @__PURE__ */ i.createElement(rt, { className: De.data[r.xAxis.dataKey], key: `${ze}-${Ie}`, style: { opacity: r.legend.behavior === "highlight" && c.length > 0 && c.indexOf(De.data[r.runtime.xAxis.dataKey]) === -1 ? 0.5 : 1 } }, /* @__PURE__ */ i.createElement(
      Rp.path,
      {
        d: Tb(
          [oe.startAngle, oe.endAngle],
          (Ce, ge) => ee({
            ...De,
            startAngle: Ce,
            endAngle: ge
          })
        ),
        fill: q(De.data[r.runtime.xAxis.dataKey]),
        onMouseEnter: (Ce) => M(Ce, { data: De.data[r.runtime.xAxis.dataKey], arc: De }),
        onMouseLeave: (Ce) => T()
      }
    ))), xe.map(({ item: De, key: oe }, ze) => {
      const [Ie, Ce] = ee.centroid(De), ge = De.endAngle - De.startAngle >= 0.1;
      let Oe = "#FFF";
      return q(De.data[r.runtime.xAxis.dataKey]) && (Oe = Zo(Oe, q(De.data[r.runtime.xAxis.dataKey]))), /* @__PURE__ */ i.createElement(Rp.g, { key: `${oe}${ze}` }, ge && /* @__PURE__ */ i.createElement(Et, { style: { fill: Oe }, x: Ie, y: Ce, dy: ".33em", textAnchor: "middle", pointerEvents: "none" }, Math.round((De.endAngle - De.startAngle) * 180 / Math.PI / 360 * 100) + "%"));
    }));
  };
  let [me] = o;
  r && r.legend && !r.legend.hide && a === "lg" && (me = me * 0.73);
  const H = r.heights.vertical, le = Math.min(me, H) / 2, ue = H / 2, fe = me / 2, ae = r.pieType === "Donut" ? 75 : le;
  se.useEffect(() => {
    if (c.length > 0 && r.legend.behavior !== "highlight") {
      let Z = [];
      U.forEach((ee) => {
        c.indexOf(ee[r.runtime.xAxis.dataKey]) !== -1 && Z.push(ee);
      }), O(Z);
    } else
      O(void 0);
  }, [c]);
  const V = Xg(r, [], U, q);
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(zr, { component: "PieChart" }, /* @__PURE__ */ i.createElement("svg", { width: me, height: H, className: `animated-pie group ${r.animate === !1 || _ ? "animated" : ""}`, role: "img", "aria-label": Ef(r) }, /* @__PURE__ */ i.createElement(rt, { top: ue, left: fe }, /* @__PURE__ */ i.createElement(
    V0,
    {
      data: R || U,
      pieValue: (Z) => Z[B || r.runtime.yAxis.dataKey],
      pieSortValues: () => -1,
      innerRadius: le - ae,
      outerRadius: le
    },
    (Z) => /* @__PURE__ */ i.createElement(te, { ...Z, getKey: (ee) => ee.data[r.runtime.xAxis.dataKey] })
  ))), /* @__PURE__ */ i.createElement("div", { ref: K }), d && Object.entries(d.data).length > 0 && v && g && d.dataYPosition && d.dataXPosition && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${r.tooltips.opacity / 100}) !important`), /* @__PURE__ */ i.createElement(Ig, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: E, top: k }, /* @__PURE__ */ i.createElement("ul", null, typeof d == "object" && Object.entries(d.data).map((Z, ee) => /* @__PURE__ */ i.createElement(m, { item: Z, key: ee })))))), /* @__PURE__ */ i.createElement(Yg, { config: r, colorScale: q, seriesHighlight: c, highlight: f, highlightReset: s, currentViewport: a, formatLabels: V }));
};
function As(e) {
  return e.split("-")[1];
}
function hh(e) {
  return e === "y" ? "height" : "width";
}
function Bi(e) {
  return e.split("-")[0];
}
function Ps(e) {
  return ["top", "bottom"].includes(Bi(e)) ? "x" : "y";
}
function Ip(e, t, r) {
  let { reference: n, floating: a } = e;
  const o = n.x + n.width / 2 - a.width / 2, f = n.y + n.height / 2 - a.height / 2, s = Ps(t), c = hh(s), d = n[c] / 2 - a[c] / 2, g = s === "x";
  let y;
  switch (Bi(t)) {
    case "top":
      y = { x: o, y: n.y - a.height };
      break;
    case "bottom":
      y = { x: o, y: n.y + n.height };
      break;
    case "right":
      y = { x: n.x + n.width, y: f };
      break;
    case "left":
      y = { x: n.x - a.width, y: f };
      break;
    default:
      y = { x: n.x, y: n.y };
  }
  switch (As(t)) {
    case "start":
      y[s] -= d * (r && g ? -1 : 1);
      break;
    case "end":
      y[s] += d * (r && g ? -1 : 1);
  }
  return y;
}
function qg(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function gs(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Gg(e, t) {
  var r;
  t === void 0 && (t = {});
  const { x: n, y: a, platform: o, rects: f, elements: s, strategy: c } = e, { boundary: d = "clippingAncestors", rootBoundary: g = "viewport", elementContext: y = "floating", altBoundary: v = !1, padding: E = 0 } = t, k = qg(E), M = s[v ? y === "floating" ? "reference" : "floating" : y], T = gs(await o.getClippingRect({ element: (r = await (o.isElement == null ? void 0 : o.isElement(M))) == null || r ? M : M.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(s.floating)), boundary: d, rootBoundary: g, strategy: c })), m = y === "floating" ? { ...f.floating, x: n, y: a } : f.reference, R = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(s.floating)), O = await (o.isElement == null ? void 0 : o.isElement(R)) && await (o.getScale == null ? void 0 : o.getScale(R)) || { x: 1, y: 1 }, _ = gs(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: m, offsetParent: R, strategy: c }) : m);
  return { top: (T.top - _.top + k.top) / O.y, bottom: (_.bottom - T.bottom + k.bottom) / O.y, left: (T.left - _.left + k.left) / O.x, right: (_.right - T.right + k.right) / O.x };
}
const tE = Math.min, nE = Math.max;
function Af(e, t, r) {
  return nE(e, tE(t, r));
}
["top", "right", "bottom", "left"].reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const rE = { left: "right", right: "left", bottom: "top", top: "bottom" };
function dc(e) {
  return e.replace(/left|right|bottom|top/g, (t) => rE[t]);
}
function aE(e, t, r) {
  r === void 0 && (r = !1);
  const n = As(e), a = Ps(e), o = hh(a);
  let f = a === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (f = dc(f)), { main: f, cross: dc(f) };
}
const iE = { start: "end", end: "start" };
function Vd(e) {
  return e.replace(/start|end/g, (t) => iE[t]);
}
const oE = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var r;
    const { placement: n, middlewareData: a, rects: o, initialPlacement: f, platform: s, elements: c } = t, { mainAxis: d = !0, crossAxis: g = !0, fallbackPlacements: y, fallbackStrategy: v = "bestFit", fallbackAxisSideDirection: E = "none", flipAlignment: k = !0, ...M } = e, T = Bi(n), m = Bi(f) === f, R = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), O = y || (m || !k ? [dc(f)] : function(K) {
      const j = dc(K);
      return [Vd(K), j, Vd(j)];
    }(f));
    y || E === "none" || O.push(...function(K, j, te, me) {
      const H = As(K);
      let le = function(ue, fe, ae) {
        const V = ["left", "right"], Z = ["right", "left"], ee = ["top", "bottom"], Ae = ["bottom", "top"];
        switch (ue) {
          case "top":
          case "bottom":
            return ae ? fe ? Z : V : fe ? V : Z;
          case "left":
          case "right":
            return fe ? ee : Ae;
          default:
            return [];
        }
      }(Bi(K), te === "start", me);
      return H && (le = le.map((ue) => ue + "-" + H), j && (le = le.concat(le.map(Vd)))), le;
    }(f, k, E, R));
    const _ = [f, ...O], N = await Gg(t, M), D = [];
    let I = ((r = a.flip) == null ? void 0 : r.overflows) || [];
    if (d && D.push(N[T]), g) {
      const { main: K, cross: j } = aE(n, o, R);
      D.push(N[K], N[j]);
    }
    if (I = [...I, { placement: n, overflows: D }], !D.every((K) => K <= 0)) {
      var B, U;
      const K = (((B = a.flip) == null ? void 0 : B.index) || 0) + 1, j = _[K];
      if (j)
        return { data: { index: K, overflows: I }, reset: { placement: j } };
      let te = (U = I.find((me) => me.overflows[0] <= 0)) == null ? void 0 : U.placement;
      if (!te)
        switch (v) {
          case "bestFit": {
            var q;
            const me = (q = I.map((H) => [H.placement, H.overflows.filter((le) => le > 0).reduce((le, ue) => le + ue, 0)]).sort((H, le) => H[1] - le[1])[0]) == null ? void 0 : q[0];
            me && (te = me);
            break;
          }
          case "initialPlacement":
            te = f;
        }
      if (n !== te)
        return { reset: { placement: te } };
    }
    return {};
  } };
}, lE = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: r, y: n } = t, a = await async function(o, f) {
      const { placement: s, platform: c, elements: d } = o, g = await (c.isRTL == null ? void 0 : c.isRTL(d.floating)), y = Bi(s), v = As(s), E = Ps(s) === "x", k = ["left", "top"].includes(y) ? -1 : 1, M = g && E ? -1 : 1, T = typeof f == "function" ? f(o) : f;
      let { mainAxis: m, crossAxis: R, alignmentAxis: O } = typeof T == "number" ? { mainAxis: T, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...T };
      return v && typeof O == "number" && (R = v === "end" ? -1 * O : O), E ? { x: R * M, y: m * k } : { x: m * k, y: R * M };
    }(t, e);
    return { x: r + a.x, y: n + a.y, data: a };
  } };
}, sE = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: r, y: n, placement: a } = t, { mainAxis: o = !0, crossAxis: f = !1, limiter: s = { fn: (T) => {
      let { x: m, y: R } = T;
      return { x: m, y: R };
    } }, ...c } = e, d = { x: r, y: n }, g = await Gg(t, c), y = Ps(Bi(a)), v = y === "x" ? "y" : "x";
    let E = d[y], k = d[v];
    if (o) {
      const T = y === "y" ? "bottom" : "right";
      E = Af(E + g[y === "y" ? "top" : "left"], E, E - g[T]);
    }
    if (f) {
      const T = v === "y" ? "bottom" : "right";
      k = Af(k + g[v === "y" ? "top" : "left"], k, k - g[T]);
    }
    const M = s.fn({ ...t, [y]: E, [v]: k });
    return { ...M, data: { x: M.x - r, y: M.y - n } };
  } };
};
function Cr(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Zr(e) {
  return Cr(e).getComputedStyle(e);
}
const Hp = Math.min, ys = Math.max, fc = Math.round;
function Zg(e) {
  const t = Zr(e);
  let r = parseFloat(t.width), n = parseFloat(t.height);
  const a = e.offsetWidth, o = e.offsetHeight, f = fc(r) !== a || fc(n) !== o;
  return f && (r = a, n = o), { width: r, height: n, fallback: f };
}
function ja(e) {
  return Jg(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Lu;
function Qg() {
  if (Lu)
    return Lu;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Lu = e.brands.map((t) => t.brand + "/" + t.version).join(" "), Lu) : navigator.userAgent;
}
function Qr(e) {
  return e instanceof Cr(e).HTMLElement;
}
function Ia(e) {
  return e instanceof Cr(e).Element;
}
function Jg(e) {
  return e instanceof Cr(e).Node;
}
function Wp(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Cr(e).ShadowRoot || e instanceof ShadowRoot;
}
function Pc(e) {
  const { overflow: t, overflowX: r, overflowY: n, display: a } = Zr(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(a);
}
function uE(e) {
  return ["table", "td", "th"].includes(ja(e));
}
function Pf(e) {
  const t = /firefox/i.test(Qg()), r = Zr(e), n = r.backdropFilter || r.WebkitBackdropFilter;
  return r.transform !== "none" || r.perspective !== "none" || !!n && n !== "none" || t && r.willChange === "filter" || t && !!r.filter && r.filter !== "none" || ["transform", "perspective"].some((a) => r.willChange.includes(a)) || ["paint", "layout", "strict", "content"].some((a) => {
    const o = r.contain;
    return o != null && o.includes(a);
  });
}
function ey() {
  return !/^((?!chrome|android).)*safari/i.test(Qg());
}
function ph(e) {
  return ["html", "body", "#document"].includes(ja(e));
}
function ty(e) {
  return Ia(e) ? e : e.contextElement;
}
const ny = { x: 1, y: 1 };
function Go(e) {
  const t = ty(e);
  if (!Qr(t))
    return ny;
  const r = t.getBoundingClientRect(), { width: n, height: a, fallback: o } = Zg(t);
  let f = (o ? fc(r.width) : r.width) / n, s = (o ? fc(r.height) : r.height) / a;
  return f && Number.isFinite(f) || (f = 1), s && Number.isFinite(s) || (s = 1), { x: f, y: s };
}
function ws(e, t, r, n) {
  var a, o;
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const f = e.getBoundingClientRect(), s = ty(e);
  let c = ny;
  t && (n ? Ia(n) && (c = Go(n)) : c = Go(e));
  const d = s ? Cr(s) : window, g = !ey() && r;
  let y = (f.left + (g && ((a = d.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / c.x, v = (f.top + (g && ((o = d.visualViewport) == null ? void 0 : o.offsetTop) || 0)) / c.y, E = f.width / c.x, k = f.height / c.y;
  if (s) {
    const M = Cr(s), T = n && Ia(n) ? Cr(n) : n;
    let m = M.frameElement;
    for (; m && n && T !== M; ) {
      const R = Go(m), O = m.getBoundingClientRect(), _ = getComputedStyle(m);
      O.x += (m.clientLeft + parseFloat(_.paddingLeft)) * R.x, O.y += (m.clientTop + parseFloat(_.paddingTop)) * R.y, y *= R.x, v *= R.y, E *= R.x, k *= R.y, y += O.x, v += O.y, m = Cr(m).frameElement;
    }
  }
  return { width: E, height: k, top: v, right: y + E, bottom: v + k, left: y, x: y, y: v };
}
function Ha(e) {
  return ((Jg(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Rc(e) {
  return Ia(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function ry(e) {
  return ws(Ha(e)).left + Rc(e).scrollLeft;
}
function Ts(e) {
  if (ja(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || Wp(e) && e.host || Ha(e);
  return Wp(t) ? t.host : t;
}
function ay(e) {
  const t = Ts(e);
  return ph(t) ? t.ownerDocument.body : Qr(t) && Pc(t) ? t : ay(t);
}
function iy(e, t) {
  var r;
  t === void 0 && (t = []);
  const n = ay(e), a = n === ((r = e.ownerDocument) == null ? void 0 : r.body), o = Cr(n);
  return a ? t.concat(o, o.visualViewport || [], Pc(n) ? n : []) : t.concat(n, iy(n));
}
function Vp(e, t, r) {
  return t === "viewport" ? gs(function(n, a) {
    const o = Cr(n), f = Ha(n), s = o.visualViewport;
    let c = f.clientWidth, d = f.clientHeight, g = 0, y = 0;
    if (s) {
      c = s.width, d = s.height;
      const v = ey();
      (v || !v && a === "fixed") && (g = s.offsetLeft, y = s.offsetTop);
    }
    return { width: c, height: d, x: g, y };
  }(e, r)) : Ia(t) ? gs(function(n, a) {
    const o = ws(n, !0, a === "fixed"), f = o.top + n.clientTop, s = o.left + n.clientLeft, c = Qr(n) ? Go(n) : { x: 1, y: 1 };
    return { width: n.clientWidth * c.x, height: n.clientHeight * c.y, x: s * c.x, y: f * c.y };
  }(t, r)) : gs(function(n) {
    const a = Ha(n), o = Rc(n), f = n.ownerDocument.body, s = ys(a.scrollWidth, a.clientWidth, f.scrollWidth, f.clientWidth), c = ys(a.scrollHeight, a.clientHeight, f.scrollHeight, f.clientHeight);
    let d = -o.scrollLeft + ry(n);
    const g = -o.scrollTop;
    return Zr(f).direction === "rtl" && (d += ys(a.clientWidth, f.clientWidth) - s), { width: s, height: c, x: d, y: g };
  }(Ha(e)));
}
function jp(e) {
  return Qr(e) && Zr(e).position !== "fixed" ? e.offsetParent : null;
}
function Up(e) {
  const t = Cr(e);
  let r = jp(e);
  for (; r && uE(r) && Zr(r).position === "static"; )
    r = jp(r);
  return r && (ja(r) === "html" || ja(r) === "body" && Zr(r).position === "static" && !Pf(r)) ? t : r || function(n) {
    let a = Ts(n);
    for (; Qr(a) && !ph(a); ) {
      if (Pf(a))
        return a;
      a = Ts(a);
    }
    return null;
  }(e) || t;
}
function cE(e, t, r) {
  const n = Qr(t), a = Ha(t), o = ws(e, !0, r === "fixed", t);
  let f = { scrollLeft: 0, scrollTop: 0 };
  const s = { x: 0, y: 0 };
  if (n || !n && r !== "fixed")
    if ((ja(t) !== "body" || Pc(a)) && (f = Rc(t)), Qr(t)) {
      const c = ws(t, !0);
      s.x = c.x + t.clientLeft, s.y = c.y + t.clientTop;
    } else
      a && (s.x = ry(a));
  return { x: o.left + f.scrollLeft - s.x, y: o.top + f.scrollTop - s.y, width: o.width, height: o.height };
}
const dE = { getClippingRect: function(e) {
  let { element: t, boundary: r, rootBoundary: n, strategy: a } = e;
  const o = r === "clippingAncestors" ? function(d, g) {
    const y = g.get(d);
    if (y)
      return y;
    let v = iy(d).filter((T) => Ia(T) && ja(T) !== "body"), E = null;
    const k = Zr(d).position === "fixed";
    let M = k ? Ts(d) : d;
    for (; Ia(M) && !ph(M); ) {
      const T = Zr(M), m = Pf(M);
      (k ? m || E : m || T.position !== "static" || !E || !["absolute", "fixed"].includes(E.position)) ? E = T : v = v.filter((R) => R !== M), M = Ts(M);
    }
    return g.set(d, v), v;
  }(t, this._c) : [].concat(r), f = [...o, n], s = f[0], c = f.reduce((d, g) => {
    const y = Vp(t, g, a);
    return d.top = ys(y.top, d.top), d.right = Hp(y.right, d.right), d.bottom = Hp(y.bottom, d.bottom), d.left = ys(y.left, d.left), d;
  }, Vp(t, s, a));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: r, strategy: n } = e;
  const a = Qr(r), o = Ha(r);
  if (r === o)
    return t;
  let f = { scrollLeft: 0, scrollTop: 0 }, s = { x: 1, y: 1 };
  const c = { x: 0, y: 0 };
  if ((a || !a && n !== "fixed") && ((ja(r) !== "body" || Pc(o)) && (f = Rc(r)), Qr(r))) {
    const d = ws(r);
    s = Go(r), c.x = d.x + r.clientLeft, c.y = d.y + r.clientTop;
  }
  return { width: t.width * s.x, height: t.height * s.y, x: t.x * s.x - f.scrollLeft * s.x + c.x, y: t.y * s.y - f.scrollTop * s.y + c.y };
}, isElement: Ia, getDimensions: function(e) {
  return Qr(e) ? Zg(e) : e.getBoundingClientRect();
}, getOffsetParent: Up, getDocumentElement: Ha, getScale: Go, async getElementRects(e) {
  let { reference: t, floating: r, strategy: n } = e;
  const a = this.getOffsetParent || Up, o = this.getDimensions;
  return { reference: cE(t, await a(r), n), floating: { x: 0, y: 0, ...await o(r) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Zr(e).direction === "rtl" }, Kp = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), a = { platform: dE, ...r }, o = { ...a.platform, _c: n };
  return (async (f, s, c) => {
    const { placement: d = "bottom", strategy: g = "absolute", middleware: y = [], platform: v } = c, E = y.filter(Boolean), k = await (v.isRTL == null ? void 0 : v.isRTL(s));
    if (v == null && console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" ")), E.filter((N) => {
      let { name: D } = N;
      return D === "autoPlacement" || D === "flip";
    }).length > 1)
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
    f && s || console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
    let M = await v.getElementRects({ reference: f, floating: s, strategy: g }), { x: T, y: m } = Ip(M, d, k), R = d, O = {}, _ = 0;
    for (let N = 0; N < E.length; N++) {
      const { name: D, fn: I } = E[N], { x: B, y: U, data: q, reset: K } = await I({ x: T, y: m, initialPlacement: d, placement: R, strategy: g, middlewareData: O, rects: M, platform: v, elements: { reference: f, floating: s } });
      T = B ?? T, m = U ?? m, O = { ...O, [D]: { ...O[D], ...q } }, _ > 50 && console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" ")), K && _ <= 50 && (_++, typeof K == "object" && (K.placement && (R = K.placement), K.rects && (M = K.rects === !0 ? await v.getElementRects({ reference: f, floating: s, strategy: g }) : K.rects), { x: T, y: m } = Ip(M, R, k)), N = -1);
    }
    return { x: T, y: m, placement: R, strategy: g, middlewareData: O };
  })(e, t, { ...a, platform: o });
};
var Na, Ii = { exports: {} }, Yp = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Na = Yp, function() {
  var e = i, t = 60103, r = 60106;
  Na.Fragment = 60107;
  var n = 60108, a = 60114, o = 60109, f = 60110, s = 60112, c = 60113, d = 60120, g = 60115, y = 60116, v = 60121, E = 60122, k = 60117, M = 60129, T = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var m = Symbol.for;
    t = m("react.element"), r = m("react.portal"), Na.Fragment = m("react.fragment"), n = m("react.strict_mode"), a = m("react.profiler"), o = m("react.provider"), f = m("react.context"), s = m("react.forward_ref"), c = m("react.suspense"), d = m("react.suspense_list"), g = m("react.memo"), y = m("react.lazy"), v = m("react.block"), E = m("react.server.block"), k = m("react.fundamental"), m("react.scope"), m("react.opaque.id"), M = m("react.debug_trace_mode"), m("react.offscreen"), T = m("react.legacy_hidden");
  }
  var R = typeof Symbol == "function" && Symbol.iterator, O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function _(ge) {
    for (var Oe = arguments.length, ie = new Array(Oe > 1 ? Oe - 1 : 0), we = 1; we < Oe; we++)
      ie[we - 1] = arguments[we];
    N("error", ge, ie);
  }
  function N(ge, Oe, ie) {
    var we = O.ReactDebugCurrentFrame, Pe = "";
    if (U) {
      var He = I(U.type), Ye = U._owner;
      Pe += function(at, it, st) {
        var Ge = "";
        if (it) {
          var We = it.fileName, Fe = We.replace(D, "");
          if (/^index\./.test(Fe)) {
            var ft = We.match(D);
            if (ft) {
              var Ke = ft[1];
              Ke && (Fe = Ke.replace(D, "") + "/" + Fe);
            }
          }
          Ge = " (at " + Fe + ":" + it.lineNumber + ")";
        } else
          st && (Ge = " (created by " + st + ")");
        return `
    in ` + (at || "Unknown") + Ge;
      }(He, U._source, Ye && I(Ye.type));
    }
    (Pe += we.getStackAddendum()) !== "" && (Oe += "%s", ie = ie.concat([Pe]));
    var Je = ie.map(function(at) {
      return "" + at;
    });
    Je.unshift("Warning: " + Oe), Function.prototype.apply.call(console[ge], console, Je);
  }
  var D = /^(.*)[\\\/]/;
  function I(ge) {
    if (ge == null)
      return null;
    if (typeof ge.tag == "number" && _("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof ge == "function")
      return ge.displayName || ge.name || null;
    if (typeof ge == "string")
      return ge;
    switch (ge) {
      case Na.Fragment:
        return "Fragment";
      case r:
        return "Portal";
      case a:
        return "Profiler";
      case n:
        return "StrictMode";
      case c:
        return "Suspense";
      case d:
        return "SuspenseList";
    }
    if (typeof ge == "object")
      switch (ge.$$typeof) {
        case f:
          return "Context.Consumer";
        case o:
          return "Context.Provider";
        case s:
          return we = ge, Pe = ge.render, He = "ForwardRef", Ye = Pe.displayName || Pe.name || "", we.displayName || (Ye !== "" ? He + "(" + Ye + ")" : He);
        case g:
          return I(ge.type);
        case v:
          return I(ge.render);
        case y:
          var Oe = (ie = ge)._status === 1 ? ie._result : null;
          if (Oe)
            return I(Oe);
      }
    var ie, we, Pe, He, Ye;
    return null;
  }
  var B = {};
  O.ReactDebugCurrentFrame;
  var U = null;
  function q(ge) {
    U = ge;
  }
  var K, j, te, me = O.ReactCurrentOwner, H = Object.prototype.hasOwnProperty, le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ue(ge, Oe, ie, we, Pe) {
    var He, Ye = {}, Je = null, at = null;
    for (He in ie !== void 0 && (Je = "" + ie), function(Ge) {
      if (H.call(Ge, "key")) {
        var We = Object.getOwnPropertyDescriptor(Ge, "key").get;
        if (We && We.isReactWarning)
          return !1;
      }
      return Ge.key !== void 0;
    }(Oe) && (Je = "" + Oe.key), function(Ge) {
      if (H.call(Ge, "ref")) {
        var We = Object.getOwnPropertyDescriptor(Ge, "ref").get;
        if (We && We.isReactWarning)
          return !1;
      }
      return Ge.ref !== void 0;
    }(Oe) && (at = Oe.ref, function(Ge, We) {
      if (typeof Ge.ref == "string" && me.current && We && me.current.stateNode !== We) {
        var Fe = I(me.current.type);
        te[Fe] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(me.current.type), Ge.ref), te[Fe] = !0);
      }
    }(Oe, Pe)), Oe)
      H.call(Oe, He) && !le.hasOwnProperty(He) && (Ye[He] = Oe[He]);
    if (ge && ge.defaultProps) {
      var it = ge.defaultProps;
      for (He in it)
        Ye[He] === void 0 && (Ye[He] = it[He]);
    }
    if (Je || at) {
      var st = typeof ge == "function" ? ge.displayName || ge.name || "Unknown" : ge;
      Je && function(Ge, We) {
        var Fe = function() {
          K || (K = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", We));
        };
        Fe.isReactWarning = !0, Object.defineProperty(Ge, "key", { get: Fe, configurable: !0 });
      }(Ye, st), at && function(Ge, We) {
        var Fe = function() {
          j || (j = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", We));
        };
        Fe.isReactWarning = !0, Object.defineProperty(Ge, "ref", { get: Fe, configurable: !0 });
      }(Ye, st);
    }
    return function(Ge, We, Fe, ft, Ke, Ze, ut) {
      var ht = { $$typeof: t, type: Ge, key: We, ref: Fe, props: ut, _owner: Ze, _store: {} };
      return Object.defineProperty(ht._store, "validated", { configurable: !1, enumerable: !1, writable: !0, value: !1 }), Object.defineProperty(ht, "_self", { configurable: !1, enumerable: !1, writable: !1, value: ft }), Object.defineProperty(ht, "_source", { configurable: !1, enumerable: !1, writable: !1, value: Ke }), Object.freeze && (Object.freeze(ht.props), Object.freeze(ht)), ht;
    }(ge, Je, at, Pe, we, me.current, Ye);
  }
  te = {};
  var fe, ae = O.ReactCurrentOwner;
  function V(ge) {
    U = ge;
  }
  function Z(ge) {
    return typeof ge == "object" && ge !== null && ge.$$typeof === t;
  }
  function ee() {
    if (ae.current) {
      var ge = I(ae.current.type);
      if (ge)
        return `

Check the render method of \`` + ge + "`.";
    }
    return "";
  }
  O.ReactDebugCurrentFrame, fe = !1;
  var Ae = {};
  function xe(ge, Oe) {
    if (ge._store && !ge._store.validated && ge.key == null) {
      ge._store.validated = !0;
      var ie = function(Pe) {
        var He = ee();
        if (!He) {
          var Ye = typeof Pe == "string" ? Pe : Pe.displayName || Pe.name;
          Ye && (He = `

Check the top-level render call using <` + Ye + ">.");
        }
        return He;
      }(Oe);
      if (!Ae[ie]) {
        Ae[ie] = !0;
        var we = "";
        ge && ge._owner && ge._owner !== ae.current && (we = " It was passed a child from " + I(ge._owner.type) + "."), V(ge), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ie, we), V(null);
      }
    }
  }
  function De(ge, Oe) {
    if (typeof ge == "object") {
      if (Array.isArray(ge))
        for (var ie = 0; ie < ge.length; ie++) {
          var we = ge[ie];
          Z(we) && xe(we, Oe);
        }
      else if (Z(ge))
        ge._store && (ge._store.validated = !0);
      else if (ge) {
        var Pe = function(Je) {
          if (Je === null || typeof Je != "object")
            return null;
          var at = R && Je[R] || Je["@@iterator"];
          return typeof at == "function" ? at : null;
        }(ge);
        if (typeof Pe == "function" && Pe !== ge.entries)
          for (var He, Ye = Pe.call(ge); !(He = Ye.next()).done; )
            Z(He.value) && xe(He.value, Oe);
      }
    }
  }
  function oe(ge) {
    var Oe, ie = ge.type;
    if (ie != null && typeof ie != "string") {
      if (typeof ie == "function")
        Oe = ie.propTypes;
      else {
        if (typeof ie != "object" || ie.$$typeof !== s && ie.$$typeof !== g)
          return;
        Oe = ie.propTypes;
      }
      if (Oe) {
        var we = I(ie);
        (function(Pe, He, Ye, Je, at) {
          var it = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var st in Pe)
            if (it(Pe, st)) {
              var Ge = void 0;
              try {
                if (typeof Pe[st] != "function") {
                  var We = Error((Je || "React class") + ": " + Ye + " type `" + st + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof Pe[st] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw We.name = "Invariant Violation", We;
                }
                Ge = Pe[st](He, st, Je, Ye, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Fe) {
                Ge = Fe;
              }
              !Ge || Ge instanceof Error || (q(at), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Je || "React class", Ye, st, typeof Ge), q(null)), Ge instanceof Error && !(Ge.message in B) && (B[Ge.message] = !0, q(at), _("Failed %s type: %s", Ye, Ge.message), q(null));
            }
        })(Oe, ge.props, "prop", we, ge);
      } else
        ie.PropTypes === void 0 || fe || (fe = !0, _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", I(ie) || "Unknown"));
      typeof ie.getDefaultProps != "function" || ie.getDefaultProps.isReactClassApproved || _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function ze(ge, Oe, ie, we, Pe, He) {
    var Ye = function(Fe) {
      return typeof Fe == "string" || typeof Fe == "function" || Fe === Na.Fragment || Fe === a || Fe === M || Fe === n || Fe === c || Fe === d || Fe === T || typeof Fe == "object" && Fe !== null && (Fe.$$typeof === y || Fe.$$typeof === g || Fe.$$typeof === o || Fe.$$typeof === f || Fe.$$typeof === s || Fe.$$typeof === k || Fe.$$typeof === v || Fe[0] === E);
    }(ge);
    if (!Ye) {
      var Je = "";
      (ge === void 0 || typeof ge == "object" && ge !== null && Object.keys(ge).length === 0) && (Je += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
      var at, it = function(Fe) {
        return Fe !== void 0 ? `

Check your code at ` + Fe.fileName.replace(/^.*[\\\/]/, "") + ":" + Fe.lineNumber + "." : "";
      }(Pe);
      Je += it || ee(), ge === null ? at = "null" : Array.isArray(ge) ? at = "array" : ge !== void 0 && ge.$$typeof === t ? (at = "<" + (I(ge.type) || "Unknown") + " />", Je = " Did you accidentally export a JSX literal instead of a component?") : at = typeof ge, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", at, Je);
    }
    var st = ue(ge, Oe, ie, Pe, He);
    if (st == null)
      return st;
    if (Ye) {
      var Ge = Oe.children;
      if (Ge !== void 0)
        if (we)
          if (Array.isArray(Ge)) {
            for (var We = 0; We < Ge.length; We++)
              De(Ge[We], ge);
            Object.freeze && Object.freeze(Ge);
          } else
            _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else
          De(Ge, ge);
    }
    return ge === Na.Fragment ? function(Fe) {
      for (var ft = Object.keys(Fe.props), Ke = 0; Ke < ft.length; Ke++) {
        var Ze = ft[Ke];
        if (Ze !== "children" && Ze !== "key") {
          V(Fe), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ze), V(null);
          break;
        }
      }
      Fe.ref !== null && (V(Fe), _("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
    }(st) : oe(st), st;
  }
  var Ie = function(ge, Oe, ie) {
    return ze(ge, Oe, ie, !1);
  }, Ce = function(ge, Oe, ie) {
    return ze(ge, Oe, ie, !0);
  };
  Na.jsx = Ie, Na.jsxs = Ce;
}(), Ii.exports = Yp;
var jd, oy = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
jd = oy, function() {
  var e = {}.hasOwnProperty;
  function t() {
    for (var r = [], n = 0; n < arguments.length; n++) {
      var a = arguments[n];
      if (a) {
        var o = typeof a;
        if (o === "string" || o === "number")
          r.push(a);
        else if (Array.isArray(a)) {
          if (a.length) {
            var f = t.apply(null, a);
            f && r.push(f);
          }
        } else if (o === "object") {
          if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]")) {
            r.push(a.toString());
            continue;
          }
          for (var s in a)
            e.call(a, s) && a[s] && r.push(s);
        }
      }
    }
    return r.join(" ");
  }
  jd.exports ? (t.default = t, jd.exports = t) : window.classNames = t;
}();
var Xp = oy.exports;
const qp = (e, t, r) => {
  let n = null;
  return function(...a) {
    n && clearTimeout(n), n = setTimeout(() => {
      n = null, r || e.apply(this, a);
    }, t);
  };
}, fE = ({ content: e }) => Ii.exports.jsx("span", { dangerouslySetInnerHTML: { __html: e } }), hE = { anchorRefs: /* @__PURE__ */ new Set(), activeAnchor: { current: null }, attach: () => {
}, detach: () => {
}, setActiveAnchor: () => {
} }, pE = se.createContext({ getTooltipData: () => hE });
function ly(e = "DEFAULT_TOOLTIP_ID") {
  return se.useContext(pE).getTooltipData(e);
}
const Gp = async ({ elementReference: e = null, tooltipReference: t = null, tooltipArrowReference: r = null, place: n = "top", offset: a = 10, strategy: o = "absolute", middlewares: f = [lE(Number(a)), oE(), sE({ padding: 5 })] }) => {
  if (!e)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  if (t === null)
    return { tooltipStyles: {}, tooltipArrowStyles: {} };
  const s = f;
  return r ? (s.push({ name: "arrow", options: c = { element: r, padding: 5 }, async fn(d) {
    const { element: g, padding: y = 0 } = c || {}, { x: v, y: E, placement: k, rects: M, platform: T } = d;
    if (g == null)
      return console.warn("Floating UI: No `element` was passed to the `arrow` middleware."), {};
    const m = qg(y), R = { x: v, y: E }, O = Ps(k), _ = hh(O), N = await T.getDimensions(g), D = O === "y" ? "top" : "left", I = O === "y" ? "bottom" : "right", B = M.reference[_] + M.reference[O] - R[O] - M.floating[_], U = R[O] - M.reference[O], q = await (T.getOffsetParent == null ? void 0 : T.getOffsetParent(g));
    let K = q ? O === "y" ? q.clientHeight || 0 : q.clientWidth || 0 : 0;
    K === 0 && (K = M.floating[_]);
    const j = B / 2 - U / 2, te = m[D], me = K - N[_] - m[I], H = K / 2 - N[_] / 2 + j, le = Af(te, H, me), ue = As(k) != null && H != le && M.reference[_] / 2 - (H < te ? m[D] : m[I]) - N[_] / 2 < 0;
    return { [O]: R[O] - (ue ? H < te ? te - H : me - H : 0), data: { [O]: le, centerOffset: H - le } };
  } }), Kp(e, t, { placement: n, strategy: o, middleware: s }).then(({ x: d, y: g, placement: y, middlewareData: v }) => {
    var E, k;
    const M = { left: `${d}px`, top: `${g}px` }, { x: T, y: m } = (E = v.arrow) !== null && E !== void 0 ? E : { x: 0, y: 0 };
    return { tooltipStyles: M, tooltipArrowStyles: { left: T != null ? `${T}px` : "", top: m != null ? `${m}px` : "", right: "", bottom: "", [(k = { top: "bottom", right: "left", bottom: "top", left: "right" }[y.split("-")[0]]) !== null && k !== void 0 ? k : "bottom"]: "-4px" } };
  })) : Kp(e, t, { placement: "bottom", strategy: o, middleware: s }).then(({ x: d, y: g }) => ({ tooltipStyles: { left: `${d}px`, top: `${g}px` }, tooltipArrowStyles: {} }));
  var c;
};
var Ri = { tooltip: "styles-module_tooltip__mnnfp", fixed: "styles-module_fixed__7ciUi", arrow: "styles-module_arrow__K0L3T", "no-arrow": "styles-module_no-arrow__KcFZN", clickable: "styles-module_clickable__Bv9o7", show: "styles-module_show__2NboJ", dark: "styles-module_dark__xNqje", light: "styles-module_light__Z6W-X", success: "styles-module_success__A2AKt", warning: "styles-module_warning__SCK0X", error: "styles-module_error__JvumD", info: "styles-module_info__BWdHW" };
const Zp = ({ id: e, className: t, classNameArrow: r, variant: n = "dark", anchorId: a, anchorSelect: o, place: f = "top", offset: s = 10, events: c = ["hover"], positionStrategy: d = "absolute", middlewares: g, wrapper: y, children: v = null, delayShow: E = 0, delayHide: k = 0, float: M = !1, noArrow: T = !1, clickable: m = !1, closeOnEsc: R = !1, style: O, position: _, afterShow: N, afterHide: D, content: I, html: B, isOpen: U, setIsOpen: q, activeAnchor: K, setActiveAnchor: j }) => {
  const te = se.useRef(null), me = se.useRef(null), H = se.useRef(null), le = se.useRef(null), [ue, fe] = se.useState({}), [ae, V] = se.useState({}), [Z, ee] = se.useState(!1), [Ae, xe] = se.useState(!1), De = se.useRef(!1), oe = se.useRef(null), { anchorRefs: ze, setActiveAnchor: Ie } = ly(e), Ce = se.useRef(!1), [ge, Oe] = se.useState([]), ie = se.useRef(!1);
  se.useLayoutEffect(() => (ie.current = !0, () => {
    ie.current = !1;
  }), []), se.useEffect(() => {
    if (!Z) {
      const Ke = setTimeout(() => {
        xe(!1);
      }, 150);
      return () => {
        clearTimeout(Ke);
      };
    }
    return () => null;
  }, [Z]);
  const we = (Ke) => {
    ie.current && (Ke && xe(!0), setTimeout(() => {
      ie.current && (q == null || q(Ke), U === void 0 && ee(Ke));
    }, 10));
  };
  se.useEffect(() => {
    if (U === void 0)
      return () => null;
    U && xe(!0);
    const Ke = setTimeout(() => {
      ee(U);
    }, 10);
    return () => {
      clearTimeout(Ke);
    };
  }, [U]), se.useEffect(() => {
    Z !== De.current && (De.current = Z, Z ? N == null || N() : D == null || D());
  }, [Z]);
  const Pe = (Ke = k) => {
    le.current && clearTimeout(le.current), le.current = setTimeout(() => {
      Ce.current || we(!1);
    }, Ke);
  }, He = (Ke) => {
    var Ze;
    if (!Ke)
      return;
    E ? (H.current && clearTimeout(H.current), H.current = setTimeout(() => {
      we(!0);
    }, E)) : we(!0);
    const ut = (Ze = Ke.currentTarget) !== null && Ze !== void 0 ? Ze : Ke.target;
    j(ut), Ie({ current: ut }), le.current && clearTimeout(le.current);
  }, Ye = () => {
    m ? Pe(k || 100) : k ? Pe() : we(!1), H.current && clearTimeout(H.current);
  }, Je = ({ x: Ke, y: Ze }) => {
    Gp({ place: f, offset: s, elementReference: { getBoundingClientRect: () => ({ x: Ke, y: Ze, width: 0, height: 0, top: Ze, left: Ke, right: Ke, bottom: Ze }) }, tooltipReference: te.current, tooltipArrowReference: me.current, strategy: d, middlewares: g }).then((ut) => {
      Object.keys(ut.tooltipStyles).length && fe(ut.tooltipStyles), Object.keys(ut.tooltipArrowStyles).length && V(ut.tooltipArrowStyles);
    });
  }, at = (Ke) => {
    if (!Ke)
      return;
    const Ze = Ke, ut = { x: Ze.clientX, y: Ze.clientY };
    Je(ut), oe.current = ut;
  }, it = (Ke) => {
    He(Ke), k && Pe();
  }, st = (Ke) => {
    const Ze = document.querySelector(`[id='${a}']`);
    Ze != null && Ze.contains(Ke.target) || ge.some((ut) => ut.contains(Ke.target)) || we(!1);
  }, Ge = (Ke) => {
    Ke.key === "Escape" && we(!1);
  }, We = qp(He, 50), Fe = qp(Ye, 50);
  se.useEffect(() => {
    var Ke, Ze;
    const ut = new Set(ze);
    ge.forEach((Ot) => {
      ut.add({ current: Ot });
    });
    const ht = document.querySelector(`[id='${a}']`);
    ht && ut.add({ current: ht }), R && window.addEventListener("keydown", Ge);
    const Pt = [];
    c.find((Ot) => Ot === "click") && (window.addEventListener("click", st), Pt.push({ event: "click", listener: it })), c.find((Ot) => Ot === "hover") && (Pt.push({ event: "mouseenter", listener: We }, { event: "mouseleave", listener: Fe }, { event: "focus", listener: We }, { event: "blur", listener: Fe }), M && Pt.push({ event: "mousemove", listener: at }));
    const on = () => {
      Ce.current = !0;
    }, un = () => {
      Ce.current = !1, Ye();
    };
    return m && ((Ke = te.current) === null || Ke === void 0 || Ke.addEventListener("mouseenter", on), (Ze = te.current) === null || Ze === void 0 || Ze.addEventListener("mouseleave", un)), Pt.forEach(({ event: Ot, listener: jt }) => {
      ut.forEach((Ft) => {
        var nn;
        (nn = Ft.current) === null || nn === void 0 || nn.addEventListener(Ot, jt);
      });
    }), () => {
      var Ot, jt;
      c.find((Ft) => Ft === "click") && window.removeEventListener("click", st), R && window.removeEventListener("keydown", Ge), m && ((Ot = te.current) === null || Ot === void 0 || Ot.removeEventListener("mouseenter", on), (jt = te.current) === null || jt === void 0 || jt.removeEventListener("mouseleave", un)), Pt.forEach(({ event: Ft, listener: nn }) => {
        ut.forEach((yn) => {
          var hn;
          (hn = yn.current) === null || hn === void 0 || hn.removeEventListener(Ft, nn);
        });
      });
    };
  }, [Ae, ze, ge, R, c]), se.useEffect(() => {
    let Ke = o ?? "";
    !Ke && e && (Ke = `[data-tooltip-id='${e}']`);
    const Ze = new MutationObserver((ut) => {
      const ht = [];
      ut.forEach((Pt) => {
        if (Pt.type === "attributes" && Pt.attributeName === "data-tooltip-id" && Pt.target.getAttribute("data-tooltip-id") === e && ht.push(Pt.target), Pt.type === "childList" && (K && [...Pt.removedNodes].some((on) => !!on.contains(K) && (xe(!1), we(!1), j(null), !0)), Ke))
          try {
            const on = [...Pt.addedNodes].filter((un) => un.nodeType === 1);
            ht.push(...on.filter((un) => un.matches(Ke))), ht.push(...on.flatMap((un) => [...un.querySelectorAll(Ke)]));
          } catch {
          }
      }), ht.length && Oe((Pt) => [...Pt, ...ht]);
    });
    return Ze.observe(document.body, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["data-tooltip-id"] }), () => {
      Ze.disconnect();
    };
  }, [e, o, K]), se.useEffect(() => {
    _ ? Je(_) : M ? oe.current && Je(oe.current) : Gp({ place: f, offset: s, elementReference: K, tooltipReference: te.current, tooltipArrowReference: me.current, strategy: d, middlewares: g }).then((Ke) => {
      ie.current && (Object.keys(Ke.tooltipStyles).length && fe(Ke.tooltipStyles), Object.keys(Ke.tooltipArrowStyles).length && V(Ke.tooltipArrowStyles));
    });
  }, [Z, K, I, B, f, s, d, _]), se.useEffect(() => {
    var Ke;
    const Ze = document.querySelector(`[id='${a}']`), ut = [...ge, Ze];
    K && ut.includes(K) || j((Ke = ge[0]) !== null && Ke !== void 0 ? Ke : Ze);
  }, [a, ge, K]), se.useEffect(() => () => {
    H.current && clearTimeout(H.current), le.current && clearTimeout(le.current);
  }, []), se.useEffect(() => {
    let Ke = o;
    if (!Ke && e && (Ke = `[data-tooltip-id='${e}']`), Ke)
      try {
        const Ze = Array.from(document.querySelectorAll(Ke));
        Oe(Ze);
      } catch {
        Oe([]);
      }
  }, [e, o]);
  const ft = !!(B || I || v) && Z && Object.keys(ue).length > 0;
  return Ae ? Ii.exports.jsxs(y, { id: e, role: "tooltip", className: Xp("react-tooltip", Ri.tooltip, Ri[n], t, { [Ri.show]: ft, [Ri.fixed]: d === "fixed", [Ri.clickable]: m }), style: { ...O, ...ue }, ref: te, children: [B && Ii.exports.jsx(fE, { content: B }) || I || v, Ii.exports.jsx(y, { className: Xp("react-tooltip-arrow", Ri.arrow, r, { [Ri["no-arrow"]]: T }), style: ae, ref: me })] }) : null;
}, sy = ({ id: e, anchorId: t, anchorSelect: r, content: n, html: a, className: o, classNameArrow: f, variant: s = "dark", place: c = "top", offset: d = 10, wrapper: g = "div", children: y = null, events: v = ["hover"], positionStrategy: E = "absolute", middlewares: k, delayShow: M = 0, delayHide: T = 0, float: m = !1, noArrow: R = !1, clickable: O = !1, closeOnEsc: _ = !1, style: N, position: D, isOpen: I, setIsOpen: B, afterShow: U, afterHide: q }) => {
  const [K, j] = se.useState(n), [te, me] = se.useState(a), [H, le] = se.useState(c), [ue, fe] = se.useState(s), [ae, V] = se.useState(d), [Z, ee] = se.useState(M), [Ae, xe] = se.useState(T), [De, oe] = se.useState(m), [ze, Ie] = se.useState(g), [Ce, ge] = se.useState(v), [Oe, ie] = se.useState(E), [we, Pe] = se.useState(null), { anchorRefs: He, activeAnchor: Ye } = ly(e), Je = (st) => st == null ? void 0 : st.getAttributeNames().reduce((Ge, We) => {
    var Fe;
    return We.startsWith("data-tooltip-") && (Ge[We.replace(/^data-tooltip-/, "")] = (Fe = st == null ? void 0 : st.getAttribute(We)) !== null && Fe !== void 0 ? Fe : null), Ge;
  }, {}), at = (st) => {
    const Ge = { place: (We) => {
      var Fe;
      le((Fe = We) !== null && Fe !== void 0 ? Fe : c);
    }, content: (We) => {
      j(We ?? n);
    }, html: (We) => {
      me(We ?? a);
    }, variant: (We) => {
      var Fe;
      fe((Fe = We) !== null && Fe !== void 0 ? Fe : s);
    }, offset: (We) => {
      V(We === null ? d : Number(We));
    }, wrapper: (We) => {
      var Fe;
      Ie((Fe = We) !== null && Fe !== void 0 ? Fe : g);
    }, events: (We) => {
      const Fe = We == null ? void 0 : We.split(" ");
      ge(Fe ?? v);
    }, "position-strategy": (We) => {
      var Fe;
      ie((Fe = We) !== null && Fe !== void 0 ? Fe : E);
    }, "delay-show": (We) => {
      ee(We === null ? M : Number(We));
    }, "delay-hide": (We) => {
      xe(We === null ? T : Number(We));
    }, float: (We) => {
      oe(We === null ? m : !!We);
    } };
    Object.values(Ge).forEach((We) => We(null)), Object.entries(st).forEach(([We, Fe]) => {
      var ft;
      (ft = Ge[We]) === null || ft === void 0 || ft.call(Ge, Fe);
    });
  };
  se.useEffect(() => {
    j(n);
  }, [n]), se.useEffect(() => {
    me(a);
  }, [a]), se.useEffect(() => {
    le(c);
  }, [c]), se.useEffect(() => {
    var st;
    const Ge = new Set(He);
    let We = r;
    if (!We && e && (We = `[data-tooltip-id='${e}']`), We)
      try {
        document.querySelectorAll(We).forEach((ut) => {
          Ge.add({ current: ut });
        });
      } catch {
        console.warn(`[react-tooltip] "${r}" is not a valid CSS selector`);
      }
    const Fe = document.querySelector(`[id='${t}']`);
    if (Fe && Ge.add({ current: Fe }), !Ge.size)
      return () => null;
    const ft = (st = we ?? Fe) !== null && st !== void 0 ? st : Ye.current, Ke = new MutationObserver((ut) => {
      ut.forEach((ht) => {
        var Pt;
        if (!ft || ht.type !== "attributes" || !(!((Pt = ht.attributeName) === null || Pt === void 0) && Pt.startsWith("data-tooltip-")))
          return;
        const on = Je(ft);
        at(on);
      });
    }), Ze = { attributes: !0, childList: !1, subtree: !1 };
    if (ft) {
      const ut = Je(ft);
      at(ut), Ke.observe(ft, Ze);
    }
    return () => {
      Ke.disconnect();
    };
  }, [He, Ye, we, t, r]);
  const it = { id: e, anchorId: t, anchorSelect: r, className: o, classNameArrow: f, content: K, html: te, place: H, variant: ue, offset: ae, wrapper: ze, events: Ce, positionStrategy: Oe, middlewares: k, delayShow: Z, delayHide: Ae, float: De, noArrow: R, clickable: O, closeOnEsc: _, style: N, position: D, isOpen: I, setIsOpen: B, afterShow: U, afterHide: q, activeAnchor: we, setActiveAnchor: (st) => Pe(st) };
  return y ? Ii.exports.jsx(Zp, { ...it, children: y }) : Ii.exports.jsx(Zp, { ...it });
};
function Qp(e, t) {
  let r;
  if (t === void 0)
    for (const n of e)
      n != null && (r < n || r === void 0 && n >= n) && (r = n);
  else {
    let n = -1;
    for (let a of e)
      (a = t(a, ++n, e)) != null && (r < a || r === void 0 && a >= a) && (r = a);
  }
  return r;
}
function mE(e, t) {
  let r;
  if (t === void 0)
    for (const n of e)
      n != null && (r > n || r === void 0 && n >= n) && (r = n);
  else {
    let n = -1;
    for (let a of e)
      (a = t(a, ++n, e)) != null && (r > a || r === void 0 && a >= a) && (r = a);
  }
  return r;
}
function Ud(e, t) {
  let r = 0;
  if (t === void 0)
    for (let n of e)
      (n = +n) && (r += n);
  else {
    let n = -1;
    for (let a of e)
      (a = +t(a, ++n, e)) && (r += a);
  }
  return r;
}
function gE(e) {
  return e.depth;
}
function yE(e, t) {
  return e.sourceLinks.length ? e.depth : t - 1;
}
function Du(e) {
  return function() {
    return e;
  };
}
function Jp(e, t) {
  return hc(e.source, t.source) || e.index - t.index;
}
function em(e, t) {
  return hc(e.target, t.target) || e.index - t.index;
}
function hc(e, t) {
  return e.y0 - t.y0;
}
function Kd(e) {
  return e.value;
}
function vE(e) {
  return e.index;
}
function xE(e) {
  return e.nodes;
}
function bE(e) {
  return e.links;
}
function tm(e, t) {
  const r = e.get(t);
  if (!r)
    throw new Error("missing: " + t);
  return r;
}
function nm({ nodes: e }) {
  for (const t of e) {
    let r = t.y0, n = r;
    for (const a of t.sourceLinks)
      a.y0 = r + a.width / 2, r += a.width;
    for (const a of t.targetLinks)
      a.y1 = n + a.width / 2, n += a.width;
  }
}
function SE() {
  let e = 0, t = 0, r = 1, n = 1, a = 24, o = 8, f, s = vE, c = yE, d, g, y = xE, v = bE, E = 6;
  function k() {
    const H = { nodes: y.apply(null, arguments), links: v.apply(null, arguments) };
    return M(H), T(H), m(H), R(H), N(H), nm(H), H;
  }
  k.update = function(H) {
    return nm(H), H;
  }, k.nodeId = function(H) {
    return arguments.length ? (s = typeof H == "function" ? H : Du(H), k) : s;
  }, k.nodeAlign = function(H) {
    return arguments.length ? (c = typeof H == "function" ? H : Du(H), k) : c;
  }, k.nodeSort = function(H) {
    return arguments.length ? (d = H, k) : d;
  }, k.nodeWidth = function(H) {
    return arguments.length ? (a = +H, k) : a;
  }, k.nodePadding = function(H) {
    return arguments.length ? (o = f = +H, k) : o;
  }, k.nodes = function(H) {
    return arguments.length ? (y = typeof H == "function" ? H : Du(H), k) : y;
  }, k.links = function(H) {
    return arguments.length ? (v = typeof H == "function" ? H : Du(H), k) : v;
  }, k.linkSort = function(H) {
    return arguments.length ? (g = H, k) : g;
  }, k.size = function(H) {
    return arguments.length ? (e = t = 0, r = +H[0], n = +H[1], k) : [r - e, n - t];
  }, k.extent = function(H) {
    return arguments.length ? (e = +H[0][0], r = +H[1][0], t = +H[0][1], n = +H[1][1], k) : [[e, t], [r, n]];
  }, k.iterations = function(H) {
    return arguments.length ? (E = +H, k) : E;
  };
  function M({ nodes: H, links: le }) {
    for (const [fe, ae] of H.entries())
      ae.index = fe, ae.sourceLinks = [], ae.targetLinks = [];
    const ue = new Map(H.map((fe, ae) => [s(fe, ae, H), fe]));
    for (const [fe, ae] of le.entries()) {
      ae.index = fe;
      let { source: V, target: Z } = ae;
      typeof V != "object" && (V = ae.source = tm(ue, V)), typeof Z != "object" && (Z = ae.target = tm(ue, Z)), V.sourceLinks.push(ae), Z.targetLinks.push(ae);
    }
    if (g != null)
      for (const { sourceLinks: fe, targetLinks: ae } of H)
        fe.sort(g), ae.sort(g);
  }
  function T({ nodes: H }) {
    for (const le of H)
      le.value = le.fixedValue === void 0 ? Math.max(Ud(le.sourceLinks, Kd), Ud(le.targetLinks, Kd)) : le.fixedValue;
  }
  function m({ nodes: H }) {
    const le = H.length;
    let ue = new Set(H), fe = /* @__PURE__ */ new Set(), ae = 0;
    for (; ue.size; ) {
      for (const V of ue) {
        V.depth = ae;
        for (const { target: Z } of V.sourceLinks)
          fe.add(Z);
      }
      if (++ae > le)
        throw new Error("circular link");
      ue = fe, fe = /* @__PURE__ */ new Set();
    }
  }
  function R({ nodes: H }) {
    const le = H.length;
    let ue = new Set(H), fe = /* @__PURE__ */ new Set(), ae = 0;
    for (; ue.size; ) {
      for (const V of ue) {
        V.height = ae;
        for (const { source: Z } of V.targetLinks)
          fe.add(Z);
      }
      if (++ae > le)
        throw new Error("circular link");
      ue = fe, fe = /* @__PURE__ */ new Set();
    }
  }
  function O({ nodes: H }) {
    const le = Qp(H, (ae) => ae.depth) + 1, ue = (r - e - a) / (le - 1), fe = new Array(le);
    for (const ae of H) {
      const V = Math.max(0, Math.min(le - 1, Math.floor(c.call(null, ae, le))));
      ae.layer = V, ae.x0 = e + V * ue, ae.x1 = ae.x0 + a, fe[V] ? fe[V].push(ae) : fe[V] = [ae];
    }
    if (d)
      for (const ae of fe)
        ae.sort(d);
    return fe;
  }
  function _(H) {
    const le = mE(H, (ue) => (n - t - (ue.length - 1) * f) / Ud(ue, Kd));
    for (const ue of H) {
      let fe = t;
      for (const ae of ue) {
        ae.y0 = fe, ae.y1 = fe + ae.value * le, fe = ae.y1 + f;
        for (const V of ae.sourceLinks)
          V.width = V.value * le;
      }
      fe = (n - fe + f) / (ue.length + 1);
      for (let ae = 0; ae < ue.length; ++ae) {
        const V = ue[ae];
        V.y0 += fe * (ae + 1), V.y1 += fe * (ae + 1);
      }
      j(ue);
    }
  }
  function N(H) {
    const le = O(H);
    f = Math.min(o, (n - t) / (Qp(le, (ue) => ue.length) - 1)), _(le);
    for (let ue = 0; ue < E; ++ue) {
      const fe = Math.pow(0.99, ue), ae = Math.max(1 - fe, (ue + 1) / E);
      I(le, fe, ae), D(le, fe, ae);
    }
  }
  function D(H, le, ue) {
    for (let fe = 1, ae = H.length; fe < ae; ++fe) {
      const V = H[fe];
      for (const Z of V) {
        let ee = 0, Ae = 0;
        for (const { source: De, value: oe } of Z.targetLinks) {
          let ze = oe * (Z.layer - De.layer);
          ee += te(De, Z) * ze, Ae += ze;
        }
        if (!(Ae > 0))
          continue;
        let xe = (ee / Ae - Z.y0) * le;
        Z.y0 += xe, Z.y1 += xe, K(Z);
      }
      d === void 0 && V.sort(hc), B(V, ue);
    }
  }
  function I(H, le, ue) {
    for (let fe = H.length, ae = fe - 2; ae >= 0; --ae) {
      const V = H[ae];
      for (const Z of V) {
        let ee = 0, Ae = 0;
        for (const { target: De, value: oe } of Z.sourceLinks) {
          let ze = oe * (De.layer - Z.layer);
          ee += me(Z, De) * ze, Ae += ze;
        }
        if (!(Ae > 0))
          continue;
        let xe = (ee / Ae - Z.y0) * le;
        Z.y0 += xe, Z.y1 += xe, K(Z);
      }
      d === void 0 && V.sort(hc), B(V, ue);
    }
  }
  function B(H, le) {
    const ue = H.length >> 1, fe = H[ue];
    q(H, fe.y0 - f, ue - 1, le), U(H, fe.y1 + f, ue + 1, le), q(H, n, H.length - 1, le), U(H, t, 0, le);
  }
  function U(H, le, ue, fe) {
    for (; ue < H.length; ++ue) {
      const ae = H[ue], V = (le - ae.y0) * fe;
      V > 1e-6 && (ae.y0 += V, ae.y1 += V), le = ae.y1 + f;
    }
  }
  function q(H, le, ue, fe) {
    for (; ue >= 0; --ue) {
      const ae = H[ue], V = (ae.y1 - le) * fe;
      V > 1e-6 && (ae.y0 -= V, ae.y1 -= V), le = ae.y0 - f;
    }
  }
  function K({ sourceLinks: H, targetLinks: le }) {
    if (g === void 0) {
      for (const { source: { sourceLinks: ue } } of le)
        ue.sort(em);
      for (const { target: { targetLinks: ue } } of H)
        ue.sort(Jp);
    }
  }
  function j(H) {
    if (g === void 0)
      for (const { sourceLinks: le, targetLinks: ue } of H)
        le.sort(em), ue.sort(Jp);
  }
  function te(H, le) {
    let ue = H.y0 - (H.sourceLinks.length - 1) * f / 2;
    for (const { target: fe, width: ae } of H.sourceLinks) {
      if (fe === le)
        break;
      ue += ae + f;
    }
    for (const { source: fe, width: ae } of le.targetLinks) {
      if (fe === H)
        break;
      ue -= ae;
    }
    return ue;
  }
  function me(H, le) {
    let ue = le.y0 - (le.targetLinks.length - 1) * f / 2;
    for (const { source: fe, width: ae } of le.targetLinks) {
      if (fe === H)
        break;
      ue += ae + f;
    }
    for (const { target: fe, width: ae } of H.sourceLinks) {
      if (fe === le)
        break;
      ue -= ae;
    }
    return ue;
  }
  return k;
}
function EE(e) {
  return [e.source.x1, e.y0];
}
function kE(e) {
  return [e.target.x0, e.y1];
}
function wE() {
  return f0().source(EE).target(kE);
}
var Ua = {}, Li = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rm;
function TE() {
  if (rm)
    return Li;
  rm = 1;
  var e = se;
  function t(x) {
    for (var A = "https://reactjs.org/docs/error-decoder.html?invariant=" + x, $ = 1; $ < arguments.length; $++)
      A += "&args[]=" + encodeURIComponent(arguments[$]);
    return "Minified React error #" + x + "; visit " + A + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, n = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, a = {}, o = {};
  function f(x) {
    return r.call(o, x) ? !0 : r.call(a, x) ? !1 : n.test(x) ? o[x] = !0 : (a[x] = !0, !1);
  }
  function s(x, A, $, X, be, ye, Te) {
    this.acceptsBooleans = A === 2 || A === 3 || A === 4, this.attributeName = X, this.attributeNamespace = be, this.mustUseProperty = $, this.propertyName = x, this.type = A, this.sanitizeURL = ye, this.removeEmptyString = Te;
  }
  var c = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(x) {
    c[x] = new s(x, 0, !1, x, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(x) {
    var A = x[0];
    c[A] = new s(A, 1, !1, x[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(x) {
    c[x] = new s(x, 2, !1, x.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(x) {
    c[x] = new s(x, 2, !1, x, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(x) {
    c[x] = new s(x, 3, !1, x.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(x) {
    c[x] = new s(x, 3, !0, x, null, !1, !1);
  }), ["capture", "download"].forEach(function(x) {
    c[x] = new s(x, 4, !1, x, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(x) {
    c[x] = new s(x, 6, !1, x, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(x) {
    c[x] = new s(x, 5, !1, x.toLowerCase(), null, !1, !1);
  });
  var d = /[\-:]([a-z])/g;
  function g(x) {
    return x[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(x) {
    var A = x.replace(
      d,
      g
    );
    c[A] = new s(A, 1, !1, x, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(x) {
    var A = x.replace(d, g);
    c[A] = new s(A, 1, !1, x, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(x) {
    var A = x.replace(d, g);
    c[A] = new s(A, 1, !1, x, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(x) {
    c[x] = new s(x, 1, !1, x.toLowerCase(), null, !1, !1);
  }), c.xlinkHref = new s("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(x) {
    c[x] = new s(x, 1, !1, x.toLowerCase(), null, !0, !0);
  });
  var y = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, v = ["Webkit", "ms", "Moz", "O"];
  Object.keys(y).forEach(function(x) {
    v.forEach(function(A) {
      A = A + x.charAt(0).toUpperCase() + x.substring(1), y[A] = y[x];
    });
  });
  var E = /["'&<>]/;
  function k(x) {
    if (typeof x == "boolean" || typeof x == "number")
      return "" + x;
    x = "" + x;
    var A = E.exec(x);
    if (A) {
      var $ = "", X, be = 0;
      for (X = A.index; X < x.length; X++) {
        switch (x.charCodeAt(X)) {
          case 34:
            A = "&quot;";
            break;
          case 38:
            A = "&amp;";
            break;
          case 39:
            A = "&#x27;";
            break;
          case 60:
            A = "&lt;";
            break;
          case 62:
            A = "&gt;";
            break;
          default:
            continue;
        }
        be !== X && ($ += x.substring(be, X)), be = X + 1, $ += A;
      }
      x = be !== X ? $ + x.substring(be, X) : $;
    }
    return x;
  }
  var M = /([A-Z])/g, T = /^ms-/, m = Array.isArray;
  function R(x, A) {
    return { insertionMode: x, selectedValue: A };
  }
  function O(x, A, $) {
    switch (A) {
      case "select":
        return R(1, $.value != null ? $.value : $.defaultValue);
      case "svg":
        return R(2, null);
      case "math":
        return R(3, null);
      case "foreignObject":
        return R(1, null);
      case "table":
        return R(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return R(5, null);
      case "colgroup":
        return R(7, null);
      case "tr":
        return R(6, null);
    }
    return 4 <= x.insertionMode || x.insertionMode === 0 ? R(1, null) : x;
  }
  var _ = /* @__PURE__ */ new Map();
  function N(x, A, $) {
    if (typeof $ != "object")
      throw Error(t(62));
    A = !0;
    for (var X in $)
      if (r.call($, X)) {
        var be = $[X];
        if (be != null && typeof be != "boolean" && be !== "") {
          if (X.indexOf("--") === 0) {
            var ye = k(X);
            be = k(("" + be).trim());
          } else {
            ye = X;
            var Te = _.get(ye);
            Te !== void 0 || (Te = k(ye.replace(M, "-$1").toLowerCase().replace(T, "-ms-")), _.set(ye, Te)), ye = Te, be = typeof be == "number" ? be === 0 || r.call(y, X) ? "" + be : be + "px" : k(("" + be).trim());
          }
          A ? (A = !1, x.push(' style="', ye, ":", be)) : x.push(";", ye, ":", be);
        }
      }
    A || x.push('"');
  }
  function D(x, A, $, X) {
    switch ($) {
      case "style":
        N(x, A, X);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < $.length) || $[0] !== "o" && $[0] !== "O" || $[1] !== "n" && $[1] !== "N") {
      if (A = c.hasOwnProperty($) ? c[$] : null, A !== null) {
        switch (typeof X) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!A.acceptsBooleans)
              return;
        }
        switch ($ = A.attributeName, A.type) {
          case 3:
            X && x.push(" ", $, '=""');
            break;
          case 4:
            X === !0 ? x.push(" ", $, '=""') : X !== !1 && x.push(" ", $, '="', k(X), '"');
            break;
          case 5:
            isNaN(X) || x.push(" ", $, '="', k(X), '"');
            break;
          case 6:
            !isNaN(X) && 1 <= X && x.push(" ", $, '="', k(X), '"');
            break;
          default:
            A.sanitizeURL && (X = "" + X), x.push(" ", $, '="', k(X), '"');
        }
      } else if (f($)) {
        switch (typeof X) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (A = $.toLowerCase().slice(0, 5), A !== "data-" && A !== "aria-")
              return;
        }
        x.push(" ", $, '="', k(X), '"');
      }
    }
  }
  function I(x, A, $) {
    if (A != null) {
      if ($ != null)
        throw Error(t(60));
      if (typeof A != "object" || !("__html" in A))
        throw Error(t(61));
      A = A.__html, A != null && x.push("" + A);
    }
  }
  function B(x) {
    var A = "";
    return e.Children.forEach(x, function($) {
      $ != null && (A += $);
    }), A;
  }
  function U(x, A, $, X) {
    x.push(j($));
    var be = $ = null, ye;
    for (ye in A)
      if (r.call(A, ye)) {
        var Te = A[ye];
        if (Te != null)
          switch (ye) {
            case "children":
              $ = Te;
              break;
            case "dangerouslySetInnerHTML":
              be = Te;
              break;
            default:
              D(x, X, ye, Te);
          }
      }
    return x.push(">"), I(x, be, $), typeof $ == "string" ? (x.push(k($)), null) : $;
  }
  var q = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, K = /* @__PURE__ */ new Map();
  function j(x) {
    var A = K.get(x);
    if (A === void 0) {
      if (!q.test(x))
        throw Error(t(65, x));
      A = "<" + x, K.set(x, A);
    }
    return A;
  }
  function te(x, A, $, X, be) {
    switch (A) {
      case "select":
        x.push(j("select"));
        var ye = null, Te = null;
        for (dt in $)
          if (r.call($, dt)) {
            var je = $[dt];
            if (je != null)
              switch (dt) {
                case "children":
                  ye = je;
                  break;
                case "dangerouslySetInnerHTML":
                  Te = je;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  D(x, X, dt, je);
              }
          }
        return x.push(">"), I(x, Te, ye), ye;
      case "option":
        Te = be.selectedValue, x.push(j("option"));
        var lt = je = null, gt = null, dt = null;
        for (ye in $)
          if (r.call($, ye)) {
            var Nt = $[ye];
            if (Nt != null)
              switch (ye) {
                case "children":
                  je = Nt;
                  break;
                case "selected":
                  gt = Nt;
                  break;
                case "dangerouslySetInnerHTML":
                  dt = Nt;
                  break;
                case "value":
                  lt = Nt;
                default:
                  D(x, X, ye, Nt);
              }
          }
        if (Te != null)
          if ($ = lt !== null ? "" + lt : B(je), m(Te)) {
            for (X = 0; X < Te.length; X++)
              if ("" + Te[X] === $) {
                x.push(' selected=""');
                break;
              }
          } else
            "" + Te === $ && x.push(' selected=""');
        else
          gt && x.push(' selected=""');
        return x.push(">"), I(x, dt, je), je;
      case "textarea":
        x.push(j("textarea")), dt = Te = ye = null;
        for (je in $)
          if (r.call($, je) && (lt = $[je], lt != null))
            switch (je) {
              case "children":
                dt = lt;
                break;
              case "value":
                ye = lt;
                break;
              case "defaultValue":
                Te = lt;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(91));
              default:
                D(
                  x,
                  X,
                  je,
                  lt
                );
            }
        if (ye === null && Te !== null && (ye = Te), x.push(">"), dt != null) {
          if (ye != null)
            throw Error(t(92));
          if (m(dt) && 1 < dt.length)
            throw Error(t(93));
          ye = "" + dt;
        }
        return typeof ye == "string" && ye[0] === `
` && x.push(`
`), ye !== null && x.push(k("" + ye)), null;
      case "input":
        x.push(j("input")), lt = dt = je = ye = null;
        for (Te in $)
          if (r.call($, Te) && (gt = $[Te], gt != null))
            switch (Te) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, "input"));
              case "defaultChecked":
                lt = gt;
                break;
              case "defaultValue":
                je = gt;
                break;
              case "checked":
                dt = gt;
                break;
              case "value":
                ye = gt;
                break;
              default:
                D(x, X, Te, gt);
            }
        return dt !== null ? D(x, X, "checked", dt) : lt !== null && D(x, X, "checked", lt), ye !== null ? D(x, X, "value", ye) : je !== null && D(x, X, "value", je), x.push("/>"), null;
      case "menuitem":
        x.push(j("menuitem"));
        for (var On in $)
          if (r.call($, On) && (ye = $[On], ye != null))
            switch (On) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(400));
              default:
                D(x, X, On, ye);
            }
        return x.push(">"), null;
      case "title":
        x.push(j("title")), ye = null;
        for (Nt in $)
          if (r.call($, Nt) && (Te = $[Nt], Te != null))
            switch (Nt) {
              case "children":
                ye = Te;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(434));
              default:
                D(x, X, Nt, Te);
            }
        return x.push(">"), ye;
      case "listing":
      case "pre":
        x.push(j(A)), Te = ye = null;
        for (lt in $)
          if (r.call($, lt) && (je = $[lt], je != null))
            switch (lt) {
              case "children":
                ye = je;
                break;
              case "dangerouslySetInnerHTML":
                Te = je;
                break;
              default:
                D(x, X, lt, je);
            }
        if (x.push(">"), Te != null) {
          if (ye != null)
            throw Error(t(60));
          if (typeof Te != "object" || !("__html" in Te))
            throw Error(t(61));
          $ = Te.__html, $ != null && (typeof $ == "string" && 0 < $.length && $[0] === `
` ? x.push(`
`, $) : x.push("" + $));
        }
        return typeof ye == "string" && ye[0] === `
` && x.push(`
`), ye;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        x.push(j(A));
        for (var Pn in $)
          if (r.call($, Pn) && (ye = $[Pn], ye != null))
            switch (Pn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, A));
              default:
                D(x, X, Pn, ye);
            }
        return x.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return U(
          x,
          $,
          A,
          X
        );
      case "html":
        return be.insertionMode === 0 && x.push("<!DOCTYPE html>"), U(x, $, A, X);
      default:
        if (A.indexOf("-") === -1 && typeof $.is != "string")
          return U(x, $, A, X);
        x.push(j(A)), Te = ye = null;
        for (gt in $)
          if (r.call($, gt) && (je = $[gt], je != null))
            switch (gt) {
              case "children":
                ye = je;
                break;
              case "dangerouslySetInnerHTML":
                Te = je;
                break;
              case "style":
                N(x, X, je);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                f(gt) && typeof je != "function" && typeof je != "symbol" && x.push(" ", gt, '="', k(je), '"');
            }
        return x.push(">"), I(x, Te, ye), ye;
    }
  }
  function me(x, A, $) {
    if (x.push('<!--$?--><template id="'), $ === null)
      throw Error(t(395));
    return x.push($), x.push('"></template>');
  }
  function H(x, A, $, X) {
    switch ($.insertionMode) {
      case 0:
      case 1:
        return x.push('<div hidden id="'), x.push(A.segmentPrefix), A = X.toString(16), x.push(A), x.push('">');
      case 2:
        return x.push('<svg aria-hidden="true" style="display:none" id="'), x.push(A.segmentPrefix), A = X.toString(16), x.push(A), x.push('">');
      case 3:
        return x.push('<math aria-hidden="true" style="display:none" id="'), x.push(A.segmentPrefix), A = X.toString(16), x.push(A), x.push('">');
      case 4:
        return x.push('<table hidden id="'), x.push(A.segmentPrefix), A = X.toString(16), x.push(A), x.push('">');
      case 5:
        return x.push('<table hidden><tbody id="'), x.push(A.segmentPrefix), A = X.toString(16), x.push(A), x.push('">');
      case 6:
        return x.push('<table hidden><tr id="'), x.push(A.segmentPrefix), A = X.toString(16), x.push(A), x.push('">');
      case 7:
        return x.push('<table hidden><colgroup id="'), x.push(A.segmentPrefix), A = X.toString(16), x.push(A), x.push('">');
      default:
        throw Error(t(397));
    }
  }
  function le(x, A) {
    switch (A.insertionMode) {
      case 0:
      case 1:
        return x.push("</div>");
      case 2:
        return x.push("</svg>");
      case 3:
        return x.push("</math>");
      case 4:
        return x.push("</table>");
      case 5:
        return x.push("</tbody></table>");
      case 6:
        return x.push("</tr></table>");
      case 7:
        return x.push("</colgroup></table>");
      default:
        throw Error(t(397));
    }
  }
  var ue = /[<\u2028\u2029]/g;
  function fe(x) {
    return JSON.stringify(x).replace(ue, function(A) {
      switch (A) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  function ae(x, A) {
    return A = A === void 0 ? "" : A, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: A + "P:", segmentPrefix: A + "S:", boundaryPrefix: A + "B:", idPrefix: A, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: x };
  }
  function V(x, A, $, X) {
    return $.generateStaticMarkup ? (x.push(k(A)), !1) : (A === "" ? x = X : (X && x.push("<!-- -->"), x.push(k(A)), x = !0), x);
  }
  var Z = Object.assign, ee = Symbol.for("react.element"), Ae = Symbol.for("react.portal"), xe = Symbol.for("react.fragment"), De = Symbol.for("react.strict_mode"), oe = Symbol.for("react.profiler"), ze = Symbol.for("react.provider"), Ie = Symbol.for("react.context"), Ce = Symbol.for("react.forward_ref"), ge = Symbol.for("react.suspense"), Oe = Symbol.for("react.suspense_list"), ie = Symbol.for("react.memo"), we = Symbol.for("react.lazy"), Pe = Symbol.for("react.scope"), He = Symbol.for("react.debug_trace_mode"), Ye = Symbol.for("react.legacy_hidden"), Je = Symbol.for("react.default_value"), at = Symbol.iterator;
  function it(x) {
    if (x == null)
      return null;
    if (typeof x == "function")
      return x.displayName || x.name || null;
    if (typeof x == "string")
      return x;
    switch (x) {
      case xe:
        return "Fragment";
      case Ae:
        return "Portal";
      case oe:
        return "Profiler";
      case De:
        return "StrictMode";
      case ge:
        return "Suspense";
      case Oe:
        return "SuspenseList";
    }
    if (typeof x == "object")
      switch (x.$$typeof) {
        case Ie:
          return (x.displayName || "Context") + ".Consumer";
        case ze:
          return (x._context.displayName || "Context") + ".Provider";
        case Ce:
          var A = x.render;
          return x = x.displayName, x || (x = A.displayName || A.name || "", x = x !== "" ? "ForwardRef(" + x + ")" : "ForwardRef"), x;
        case ie:
          return A = x.displayName || null, A !== null ? A : it(x.type) || "Memo";
        case we:
          A = x._payload, x = x._init;
          try {
            return it(x(A));
          } catch {
          }
      }
    return null;
  }
  var st = {};
  function Ge(x, A) {
    if (x = x.contextTypes, !x)
      return st;
    var $ = {}, X;
    for (X in x)
      $[X] = A[X];
    return $;
  }
  var We = null;
  function Fe(x, A) {
    if (x !== A) {
      x.context._currentValue2 = x.parentValue, x = x.parent;
      var $ = A.parent;
      if (x === null) {
        if ($ !== null)
          throw Error(t(401));
      } else {
        if ($ === null)
          throw Error(t(401));
        Fe(x, $);
      }
      A.context._currentValue2 = A.value;
    }
  }
  function ft(x) {
    x.context._currentValue2 = x.parentValue, x = x.parent, x !== null && ft(x);
  }
  function Ke(x) {
    var A = x.parent;
    A !== null && Ke(A), x.context._currentValue2 = x.value;
  }
  function Ze(x, A) {
    if (x.context._currentValue2 = x.parentValue, x = x.parent, x === null)
      throw Error(t(402));
    x.depth === A.depth ? Fe(x, A) : Ze(x, A);
  }
  function ut(x, A) {
    var $ = A.parent;
    if ($ === null)
      throw Error(t(402));
    x.depth === $.depth ? Fe(x, $) : ut(x, $), A.context._currentValue2 = A.value;
  }
  function ht(x) {
    var A = We;
    A !== x && (A === null ? Ke(x) : x === null ? ft(A) : A.depth === x.depth ? Fe(A, x) : A.depth > x.depth ? Ze(A, x) : ut(A, x), We = x);
  }
  var Pt = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(x, A) {
    x = x._reactInternals, x.queue !== null && x.queue.push(A);
  }, enqueueReplaceState: function(x, A) {
    x = x._reactInternals, x.replace = !0, x.queue = [A];
  }, enqueueForceUpdate: function() {
  } };
  function on(x, A, $, X) {
    var be = x.state !== void 0 ? x.state : null;
    x.updater = Pt, x.props = $, x.state = be;
    var ye = { queue: [], replace: !1 };
    x._reactInternals = ye;
    var Te = A.contextType;
    if (x.context = typeof Te == "object" && Te !== null ? Te._currentValue2 : X, Te = A.getDerivedStateFromProps, typeof Te == "function" && (Te = Te($, be), be = Te == null ? be : Z({}, be, Te), x.state = be), typeof A.getDerivedStateFromProps != "function" && typeof x.getSnapshotBeforeUpdate != "function" && (typeof x.UNSAFE_componentWillMount == "function" || typeof x.componentWillMount == "function"))
      if (A = x.state, typeof x.componentWillMount == "function" && x.componentWillMount(), typeof x.UNSAFE_componentWillMount == "function" && x.UNSAFE_componentWillMount(), A !== x.state && Pt.enqueueReplaceState(x, x.state, null), ye.queue !== null && 0 < ye.queue.length)
        if (A = ye.queue, Te = ye.replace, ye.queue = null, ye.replace = !1, Te && A.length === 1)
          x.state = A[0];
        else {
          for (ye = Te ? A[0] : x.state, be = !0, Te = Te ? 1 : 0; Te < A.length; Te++) {
            var je = A[Te];
            je = typeof je == "function" ? je.call(x, ye, $, X) : je, je != null && (be ? (be = !1, ye = Z({}, ye, je)) : Z(ye, je));
          }
          x.state = ye;
        }
      else
        ye.queue = null;
  }
  var un = { id: 1, overflow: "" };
  function Ot(x, A, $) {
    var X = x.id;
    x = x.overflow;
    var be = 32 - jt(X) - 1;
    X &= ~(1 << be), $ += 1;
    var ye = 32 - jt(A) + be;
    if (30 < ye) {
      var Te = be - be % 5;
      return ye = (X & (1 << Te) - 1).toString(32), X >>= Te, be -= Te, { id: 1 << 32 - jt(A) + be | $ << be | X, overflow: ye + x };
    }
    return { id: 1 << ye | $ << be | X, overflow: x };
  }
  var jt = Math.clz32 ? Math.clz32 : yn, Ft = Math.log, nn = Math.LN2;
  function yn(x) {
    return x >>>= 0, x === 0 ? 32 : 31 - (Ft(x) / nn | 0) | 0;
  }
  function hn(x, A) {
    return x === A && (x !== 0 || 1 / x === 1 / A) || x !== x && A !== A;
  }
  var Rt = typeof Object.is == "function" ? Object.is : hn, Zt = null, _e = null, wn = null, Lt = null, vn = !1, It = !1, pn = 0, An = null, $n = 0;
  function Me() {
    if (Zt === null)
      throw Error(t(321));
    return Zt;
  }
  function Xe() {
    if (0 < $n)
      throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Tt() {
    return Lt === null ? wn === null ? (vn = !1, wn = Lt = Xe()) : (vn = !0, Lt = wn) : Lt.next === null ? (vn = !1, Lt = Lt.next = Xe()) : (vn = !0, Lt = Lt.next), Lt;
  }
  function nt() {
    _e = Zt = null, It = !1, wn = null, $n = 0, Lt = An = null;
  }
  function zt(x, A) {
    return typeof A == "function" ? A(x) : A;
  }
  function _t(x, A, $) {
    if (Zt = Me(), Lt = Tt(), vn) {
      var X = Lt.queue;
      if (A = X.dispatch, An !== null && ($ = An.get(X), $ !== void 0)) {
        An.delete(X), X = Lt.memoizedState;
        do
          X = x(X, $.action), $ = $.next;
        while ($ !== null);
        return Lt.memoizedState = X, [X, A];
      }
      return [Lt.memoizedState, A];
    }
    return x = x === zt ? typeof A == "function" ? A() : A : $ !== void 0 ? $(A) : A, Lt.memoizedState = x, x = Lt.queue = { last: null, dispatch: null }, x = x.dispatch = Wn.bind(null, Zt, x), [Lt.memoizedState, x];
  }
  function Tn(x, A) {
    if (Zt = Me(), Lt = Tt(), A = A === void 0 ? null : A, Lt !== null) {
      var $ = Lt.memoizedState;
      if ($ !== null && A !== null) {
        var X = $[1];
        e:
          if (X === null)
            X = !1;
          else {
            for (var be = 0; be < X.length && be < A.length; be++)
              if (!Rt(A[be], X[be])) {
                X = !1;
                break e;
              }
            X = !0;
          }
        if (X)
          return $[0];
      }
    }
    return x = x(), Lt.memoizedState = [x, A], x;
  }
  function Wn(x, A, $) {
    if (25 <= $n)
      throw Error(t(301));
    if (x === Zt)
      if (It = !0, x = { action: $, next: null }, An === null && (An = /* @__PURE__ */ new Map()), $ = An.get(A), $ === void 0)
        An.set(A, x);
      else {
        for (A = $; A.next !== null; )
          A = A.next;
        A.next = x;
      }
  }
  function Y() {
    throw Error(t(394));
  }
  function $e() {
  }
  var et = { readContext: function(x) {
    return x._currentValue2;
  }, useContext: function(x) {
    return Me(), x._currentValue2;
  }, useMemo: Tn, useReducer: _t, useRef: function(x) {
    Zt = Me(), Lt = Tt();
    var A = Lt.memoizedState;
    return A === null ? (x = { current: x }, Lt.memoizedState = x) : A;
  }, useState: function(x) {
    return _t(zt, x);
  }, useInsertionEffect: $e, useLayoutEffect: function() {
  }, useCallback: function(x, A) {
    return Tn(function() {
      return x;
    }, A);
  }, useImperativeHandle: $e, useEffect: $e, useDebugValue: $e, useDeferredValue: function(x) {
    return Me(), x;
  }, useTransition: function() {
    return Me(), [
      !1,
      Y
    ];
  }, useId: function() {
    var x = _e.treeContext, A = x.overflow;
    x = x.id, x = (x & ~(1 << 32 - jt(x) - 1)).toString(32) + A;
    var $ = Ve;
    if ($ === null)
      throw Error(t(404));
    return A = pn++, x = ":" + $.idPrefix + "R" + x, 0 < A && (x += "H" + A.toString(32)), x + ":";
  }, useMutableSource: function(x, A) {
    return Me(), A(x._source);
  }, useSyncExternalStore: function(x, A, $) {
    if ($ === void 0)
      throw Error(t(407));
    return $();
  } }, Ve = null, pt = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function ot(x) {
    return console.error(x), null;
  }
  function bt() {
  }
  function mt(x, A, $, X, be, ye, Te, je, lt) {
    var gt = [], dt = /* @__PURE__ */ new Set();
    return A = { destination: null, responseState: A, progressiveChunkSize: X === void 0 ? 12800 : X, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: dt, pingedTasks: gt, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: be === void 0 ? ot : be, onAllReady: ye === void 0 ? bt : ye, onShellReady: Te === void 0 ? bt : Te, onShellError: je === void 0 ? bt : je, onFatalError: lt === void 0 ? bt : lt }, $ = Ut(A, 0, null, $, !1, !1), $.parentFlushed = !0, x = qe(A, x, null, $, dt, st, null, un), gt.push(x), A;
  }
  function qe(x, A, $, X, be, ye, Te, je) {
    x.allPendingTasks++, $ === null ? x.pendingRootTasks++ : $.pendingTasks++;
    var lt = { node: A, ping: function() {
      var gt = x.pingedTasks;
      gt.push(lt), gt.length === 1 && en(x);
    }, blockedBoundary: $, blockedSegment: X, abortSet: be, legacyContext: ye, context: Te, treeContext: je };
    return be.add(lt), lt;
  }
  function Ut(x, A, $, X, be, ye) {
    return { status: 0, id: -1, index: A, parentFlushed: !1, chunks: [], children: [], formatContext: X, boundary: $, lastPushedText: be, textEmbedded: ye };
  }
  function Qt(x, A) {
    if (x = x.onError(A), x != null && typeof x != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof x + '" instead');
    return x;
  }
  function cn(x, A) {
    var $ = x.onShellError;
    $(A), $ = x.onFatalError, $(A), x.destination !== null ? (x.status = 2, x.destination.destroy(A)) : (x.status = 1, x.fatalError = A);
  }
  function Jt(x, A, $, X, be) {
    for (Zt = {}, _e = A, pn = 0, x = $(X, be); It; )
      It = !1, pn = 0, $n += 1, Lt = null, x = $(X, be);
    return nt(), x;
  }
  function Kt(x, A, $, X) {
    var be = $.render(), ye = X.childContextTypes;
    if (ye != null) {
      var Te = A.legacyContext;
      if (typeof $.getChildContext != "function")
        X = Te;
      else {
        $ = $.getChildContext();
        for (var je in $)
          if (!(je in ye))
            throw Error(t(108, it(X) || "Unknown", je));
        X = Z({}, Te, $);
      }
      A.legacyContext = X, xt(x, A, be), A.legacyContext = Te;
    } else
      xt(x, A, be);
  }
  function $t(x, A) {
    if (x && x.defaultProps) {
      A = Z({}, A), x = x.defaultProps;
      for (var $ in x)
        A[$] === void 0 && (A[$] = x[$]);
      return A;
    }
    return A;
  }
  function Bt(x, A, $, X, be) {
    if (typeof $ == "function")
      if ($.prototype && $.prototype.isReactComponent) {
        be = Ge($, A.legacyContext);
        var ye = $.contextType;
        ye = new $(X, typeof ye == "object" && ye !== null ? ye._currentValue2 : be), on(ye, $, X, be), Kt(x, A, ye, $);
      } else {
        ye = Ge($, A.legacyContext), be = Jt(x, A, $, X, ye);
        var Te = pn !== 0;
        if (typeof be == "object" && be !== null && typeof be.render == "function" && be.$$typeof === void 0)
          on(be, $, X, ye), Kt(x, A, be, $);
        else if (Te) {
          X = A.treeContext, A.treeContext = Ot(X, 1, 0);
          try {
            xt(x, A, be);
          } finally {
            A.treeContext = X;
          }
        } else
          xt(x, A, be);
      }
    else if (typeof $ == "string") {
      switch (be = A.blockedSegment, ye = te(be.chunks, $, X, x.responseState, be.formatContext), be.lastPushedText = !1, Te = be.formatContext, be.formatContext = O(Te, $, X), Sn(x, A, ye), be.formatContext = Te, $) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          be.chunks.push("</", $, ">");
      }
      be.lastPushedText = !1;
    } else {
      switch ($) {
        case Ye:
        case He:
        case De:
        case oe:
        case xe:
          xt(x, A, X.children);
          return;
        case Oe:
          xt(x, A, X.children);
          return;
        case Pe:
          throw Error(t(343));
        case ge:
          e: {
            $ = A.blockedBoundary, be = A.blockedSegment, ye = X.fallback, X = X.children, Te = /* @__PURE__ */ new Set();
            var je = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: Te, errorDigest: null }, lt = Ut(x, be.chunks.length, je, be.formatContext, !1, !1);
            be.children.push(lt), be.lastPushedText = !1;
            var gt = Ut(x, 0, null, be.formatContext, !1, !1);
            gt.parentFlushed = !0, A.blockedBoundary = je, A.blockedSegment = gt;
            try {
              if (Sn(
                x,
                A,
                X
              ), x.responseState.generateStaticMarkup || gt.lastPushedText && gt.textEmbedded && gt.chunks.push("<!-- -->"), gt.status = 1, xn(je, gt), je.pendingTasks === 0)
                break e;
            } catch (dt) {
              gt.status = 4, je.forceClientRender = !0, je.errorDigest = Qt(x, dt);
            } finally {
              A.blockedBoundary = $, A.blockedSegment = be;
            }
            A = qe(x, ye, $, lt, Te, A.legacyContext, A.context, A.treeContext), x.pingedTasks.push(A);
          }
          return;
      }
      if (typeof $ == "object" && $ !== null)
        switch ($.$$typeof) {
          case Ce:
            if (X = Jt(x, A, $.render, X, be), pn !== 0) {
              $ = A.treeContext, A.treeContext = Ot($, 1, 0);
              try {
                xt(x, A, X);
              } finally {
                A.treeContext = $;
              }
            } else
              xt(x, A, X);
            return;
          case ie:
            $ = $.type, X = $t($, X), Bt(x, A, $, X, be);
            return;
          case ze:
            if (be = X.children, $ = $._context, X = X.value, ye = $._currentValue2, $._currentValue2 = X, Te = We, We = X = { parent: Te, depth: Te === null ? 0 : Te.depth + 1, context: $, parentValue: ye, value: X }, A.context = X, xt(x, A, be), x = We, x === null)
              throw Error(t(403));
            X = x.parentValue, x.context._currentValue2 = X === Je ? x.context._defaultValue : X, x = We = x.parent, A.context = x;
            return;
          case Ie:
            X = X.children, X = X($._currentValue2), xt(x, A, X);
            return;
          case we:
            be = $._init, $ = be($._payload), X = $t($, X), Bt(
              x,
              A,
              $,
              X,
              void 0
            );
            return;
        }
      throw Error(t(130, $ == null ? $ : typeof $, ""));
    }
  }
  function xt(x, A, $) {
    if (A.node = $, typeof $ == "object" && $ !== null) {
      switch ($.$$typeof) {
        case ee:
          Bt(x, A, $.type, $.props, $.ref);
          return;
        case Ae:
          throw Error(t(257));
        case we:
          var X = $._init;
          $ = X($._payload), xt(x, A, $);
          return;
      }
      if (m($)) {
        mn(x, A, $);
        return;
      }
      if ($ === null || typeof $ != "object" ? X = null : (X = at && $[at] || $["@@iterator"], X = typeof X == "function" ? X : null), X && (X = X.call($))) {
        if ($ = X.next(), !$.done) {
          var be = [];
          do
            be.push($.value), $ = X.next();
          while (!$.done);
          mn(x, A, be);
        }
        return;
      }
      throw x = Object.prototype.toString.call($), Error(t(31, x === "[object Object]" ? "object with keys {" + Object.keys($).join(", ") + "}" : x));
    }
    typeof $ == "string" ? (X = A.blockedSegment, X.lastPushedText = V(A.blockedSegment.chunks, $, x.responseState, X.lastPushedText)) : typeof $ == "number" && (X = A.blockedSegment, X.lastPushedText = V(A.blockedSegment.chunks, "" + $, x.responseState, X.lastPushedText));
  }
  function mn(x, A, $) {
    for (var X = $.length, be = 0; be < X; be++) {
      var ye = A.treeContext;
      A.treeContext = Ot(ye, X, be);
      try {
        Sn(x, A, $[be]);
      } finally {
        A.treeContext = ye;
      }
    }
  }
  function Sn(x, A, $) {
    var X = A.blockedSegment.formatContext, be = A.legacyContext, ye = A.context;
    try {
      return xt(x, A, $);
    } catch (lt) {
      if (nt(), typeof lt == "object" && lt !== null && typeof lt.then == "function") {
        $ = lt;
        var Te = A.blockedSegment, je = Ut(x, Te.chunks.length, null, Te.formatContext, Te.lastPushedText, !0);
        Te.children.push(je), Te.lastPushedText = !1, x = qe(x, A.node, A.blockedBoundary, je, A.abortSet, A.legacyContext, A.context, A.treeContext).ping, $.then(x, x), A.blockedSegment.formatContext = X, A.legacyContext = be, A.context = ye, ht(ye);
      } else
        throw A.blockedSegment.formatContext = X, A.legacyContext = be, A.context = ye, ht(ye), lt;
    }
  }
  function Ht(x) {
    var A = x.blockedBoundary;
    x = x.blockedSegment, x.status = 3, Xt(this, A, x);
  }
  function En(x, A, $) {
    var X = x.blockedBoundary;
    x.blockedSegment.status = 3, X === null ? (A.allPendingTasks--, A.status !== 2 && (A.status = 2, A.destination !== null && A.destination.push(null))) : (X.pendingTasks--, X.forceClientRender || (X.forceClientRender = !0, x = $ === void 0 ? Error(t(432)) : $, X.errorDigest = A.onError(x), X.parentFlushed && A.clientRenderedBoundaries.push(X)), X.fallbackAbortableTasks.forEach(function(be) {
      return En(be, A, $);
    }), X.fallbackAbortableTasks.clear(), A.allPendingTasks--, A.allPendingTasks === 0 && (X = A.onAllReady, X()));
  }
  function xn(x, A) {
    if (A.chunks.length === 0 && A.children.length === 1 && A.children[0].boundary === null) {
      var $ = A.children[0];
      $.id = A.id, $.parentFlushed = !0, $.status === 1 && xn(x, $);
    } else
      x.completedSegments.push(A);
  }
  function Xt(x, A, $) {
    if (A === null) {
      if ($.parentFlushed) {
        if (x.completedRootSegment !== null)
          throw Error(t(389));
        x.completedRootSegment = $;
      }
      x.pendingRootTasks--, x.pendingRootTasks === 0 && (x.onShellError = bt, A = x.onShellReady, A());
    } else
      A.pendingTasks--, A.forceClientRender || (A.pendingTasks === 0 ? ($.parentFlushed && $.status === 1 && xn(A, $), A.parentFlushed && x.completedBoundaries.push(A), A.fallbackAbortableTasks.forEach(Ht, x), A.fallbackAbortableTasks.clear()) : $.parentFlushed && $.status === 1 && (xn(A, $), A.completedSegments.length === 1 && A.parentFlushed && x.partialBoundaries.push(A)));
    x.allPendingTasks--, x.allPendingTasks === 0 && (x = x.onAllReady, x());
  }
  function en(x) {
    if (x.status !== 2) {
      var A = We, $ = pt.current;
      pt.current = et;
      var X = Ve;
      Ve = x.responseState;
      try {
        var be = x.pingedTasks, ye;
        for (ye = 0; ye < be.length; ye++) {
          var Te = be[ye], je = x, lt = Te.blockedSegment;
          if (lt.status === 0) {
            ht(Te.context);
            try {
              xt(je, Te, Te.node), je.responseState.generateStaticMarkup || lt.lastPushedText && lt.textEmbedded && lt.chunks.push("<!-- -->"), Te.abortSet.delete(Te), lt.status = 1, Xt(je, Te.blockedBoundary, lt);
            } catch (Rn) {
              if (nt(), typeof Rn == "object" && Rn !== null && typeof Rn.then == "function") {
                var gt = Te.ping;
                Rn.then(gt, gt);
              } else {
                Te.abortSet.delete(Te), lt.status = 4;
                var dt = Te.blockedBoundary, Nt = Rn, On = Qt(je, Nt);
                if (dt === null ? cn(je, Nt) : (dt.pendingTasks--, dt.forceClientRender || (dt.forceClientRender = !0, dt.errorDigest = On, dt.parentFlushed && je.clientRenderedBoundaries.push(dt))), je.allPendingTasks--, je.allPendingTasks === 0) {
                  var Pn = je.onAllReady;
                  Pn();
                }
              }
            } finally {
            }
          }
        }
        be.splice(0, ye), x.destination !== null && Ln(x, x.destination);
      } catch (Rn) {
        Qt(x, Rn), cn(x, Rn);
      } finally {
        Ve = X, pt.current = $, $ === et && ht(A);
      }
    }
  }
  function Bn(x, A, $) {
    switch ($.parentFlushed = !0, $.status) {
      case 0:
        var X = $.id = x.nextSegmentId++;
        return $.lastPushedText = !1, $.textEmbedded = !1, x = x.responseState, A.push('<template id="'), A.push(x.placeholderPrefix), x = X.toString(16), A.push(x), A.push('"></template>');
      case 1:
        $.status = 2;
        var be = !0;
        X = $.chunks;
        var ye = 0;
        $ = $.children;
        for (var Te = 0; Te < $.length; Te++) {
          for (be = $[Te]; ye < be.index; ye++)
            A.push(X[ye]);
          be = Vn(x, A, be);
        }
        for (; ye < X.length - 1; ye++)
          A.push(X[ye]);
        return ye < X.length && (be = A.push(X[ye])), be;
      default:
        throw Error(t(390));
    }
  }
  function Vn(x, A, $) {
    var X = $.boundary;
    if (X === null)
      return Bn(x, A, $);
    if (X.parentFlushed = !0, X.forceClientRender)
      return x.responseState.generateStaticMarkup || (X = X.errorDigest, A.push("<!--$!-->"), A.push("<template"), X && (A.push(' data-dgst="'), X = k(X), A.push(X), A.push('"')), A.push("></template>")), Bn(x, A, $), x = x.responseState.generateStaticMarkup ? !0 : A.push("<!--/$-->"), x;
    if (0 < X.pendingTasks) {
      X.rootSegmentID = x.nextSegmentId++, 0 < X.completedSegments.length && x.partialBoundaries.push(X);
      var be = x.responseState, ye = be.nextSuspenseID++;
      return be = be.boundaryPrefix + ye.toString(16), X = X.id = be, me(A, x.responseState, X), Bn(x, A, $), A.push("<!--/$-->");
    }
    if (X.byteSize > x.progressiveChunkSize)
      return X.rootSegmentID = x.nextSegmentId++, x.completedBoundaries.push(X), me(A, x.responseState, X.id), Bn(x, A, $), A.push("<!--/$-->");
    if (x.responseState.generateStaticMarkup || A.push("<!--$-->"), $ = X.completedSegments, $.length !== 1)
      throw Error(t(391));
    return Vn(x, A, $[0]), x = x.responseState.generateStaticMarkup ? !0 : A.push("<!--/$-->"), x;
  }
  function or(x, A, $) {
    return H(A, x.responseState, $.formatContext, $.id), Vn(x, A, $), le(A, $.formatContext);
  }
  function Zn(x, A, $) {
    for (var X = $.completedSegments, be = 0; be < X.length; be++)
      sn(x, A, $, X[be]);
    if (X.length = 0, x = x.responseState, X = $.id, $ = $.rootSegmentID, A.push(x.startInlineScript), x.sentCompleteBoundaryFunction ? A.push('$RC("') : (x.sentCompleteBoundaryFunction = !0, A.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), X === null)
      throw Error(t(395));
    return $ = $.toString(16), A.push(X), A.push('","'), A.push(x.segmentPrefix), A.push($), A.push('")<\/script>');
  }
  function sn(x, A, $, X) {
    if (X.status === 2)
      return !0;
    var be = X.id;
    if (be === -1) {
      if ((X.id = $.rootSegmentID) === -1)
        throw Error(t(392));
      return or(x, A, X);
    }
    return or(x, A, X), x = x.responseState, A.push(x.startInlineScript), x.sentCompleteSegmentFunction ? A.push('$RS("') : (x.sentCompleteSegmentFunction = !0, A.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), A.push(x.segmentPrefix), be = be.toString(16), A.push(be), A.push('","'), A.push(x.placeholderPrefix), A.push(be), A.push('")<\/script>');
  }
  function Ln(x, A) {
    try {
      var $ = x.completedRootSegment;
      if ($ !== null && x.pendingRootTasks === 0) {
        Vn(x, A, $), x.completedRootSegment = null;
        var X = x.responseState.bootstrapChunks;
        for ($ = 0; $ < X.length - 1; $++)
          A.push(X[$]);
        $ < X.length && A.push(X[$]);
      }
      var be = x.clientRenderedBoundaries, ye;
      for (ye = 0; ye < be.length; ye++) {
        var Te = be[ye];
        X = A;
        var je = x.responseState, lt = Te.id, gt = Te.errorDigest, dt = Te.errorMessage, Nt = Te.errorComponentStack;
        if (X.push(je.startInlineScript), je.sentClientRenderFunction ? X.push('$RX("') : (je.sentClientRenderFunction = !0, X.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), lt === null)
          throw Error(t(395));
        if (X.push(lt), X.push('"'), gt || dt || Nt) {
          X.push(",");
          var On = fe(gt || "");
          X.push(On);
        }
        if (dt || Nt) {
          X.push(",");
          var Pn = fe(dt || "");
          X.push(Pn);
        }
        if (Nt) {
          X.push(",");
          var Rn = fe(Nt);
          X.push(Rn);
        }
        if (!X.push(")<\/script>")) {
          x.destination = null, ye++, be.splice(0, ye);
          return;
        }
      }
      be.splice(0, ye);
      var ne = x.completedBoundaries;
      for (ye = 0; ye < ne.length; ye++)
        if (!Zn(x, A, ne[ye])) {
          x.destination = null, ye++, ne.splice(0, ye);
          return;
        }
      ne.splice(0, ye);
      var J = x.partialBoundaries;
      for (ye = 0; ye < J.length; ye++) {
        var de = J[ye];
        e: {
          be = x, Te = A;
          var Re = de.completedSegments;
          for (je = 0; je < Re.length; je++)
            if (!sn(be, Te, de, Re[je])) {
              je++, Re.splice(0, je);
              var Mt = !1;
              break e;
            }
          Re.splice(0, je), Mt = !0;
        }
        if (!Mt) {
          x.destination = null, ye++, J.splice(0, ye);
          return;
        }
      }
      J.splice(0, ye);
      var qt = x.completedBoundaries;
      for (ye = 0; ye < qt.length; ye++)
        if (!Zn(x, A, qt[ye])) {
          x.destination = null, ye++, qt.splice(0, ye);
          return;
        }
      qt.splice(0, ye);
    } finally {
      x.allPendingTasks === 0 && x.pingedTasks.length === 0 && x.clientRenderedBoundaries.length === 0 && x.completedBoundaries.length === 0 && A.push(null);
    }
  }
  function Ar(x, A) {
    try {
      var $ = x.abortableTasks;
      $.forEach(function(X) {
        return En(X, x, A);
      }), $.clear(), x.destination !== null && Ln(x, x.destination);
    } catch (X) {
      Qt(x, X), cn(x, X);
    }
  }
  function hr() {
  }
  function pr(x, A, $, X) {
    var be = !1, ye = null, Te = "", je = { push: function(gt) {
      return gt !== null && (Te += gt), !0;
    }, destroy: function(gt) {
      be = !0, ye = gt;
    } }, lt = !1;
    if (x = mt(x, ae($, A ? A.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, hr, void 0, function() {
      lt = !0;
    }, void 0, void 0), en(x), Ar(x, X), x.status === 1)
      x.status = 2, je.destroy(x.fatalError);
    else if (x.status !== 2 && x.destination === null) {
      x.destination = je;
      try {
        Ln(x, je);
      } catch (gt) {
        Qt(x, gt), cn(x, gt);
      }
    }
    if (be)
      throw ye;
    if (!lt)
      throw Error(t(426));
    return Te;
  }
  return Li.renderToNodeStream = function() {
    throw Error(t(207));
  }, Li.renderToStaticMarkup = function(x, A) {
    return pr(x, A, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Li.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, Li.renderToString = function(x, A) {
    return pr(x, A, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Li.version = "18.2.0", Li;
}
var Ou = {};
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var am;
function CE() {
  if (am)
    return Ou;
  am = 1;
  var e = se;
  function t(b) {
    for (var P = "https://reactjs.org/docs/error-decoder.html?invariant=" + b, z = 1; z < arguments.length; z++)
      P += "&args[]=" + encodeURIComponent(arguments[z]);
    return "Minified React error #" + b + "; visit " + P + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = null, n = 0;
  function a(b, P) {
    if (P.length !== 0)
      if (512 < P.length)
        0 < n && (b.enqueue(new Uint8Array(r.buffer, 0, n)), r = new Uint8Array(512), n = 0), b.enqueue(P);
      else {
        var z = r.length - n;
        z < P.length && (z === 0 ? b.enqueue(r) : (r.set(P.subarray(0, z), n), b.enqueue(r), P = P.subarray(z)), r = new Uint8Array(512), n = 0), r.set(P, n), n += P.length;
      }
  }
  function o(b, P) {
    return a(b, P), !0;
  }
  function f(b) {
    r && 0 < n && (b.enqueue(new Uint8Array(r.buffer, 0, n)), r = null, n = 0);
  }
  var s = new TextEncoder();
  function c(b) {
    return s.encode(b);
  }
  function d(b) {
    return s.encode(b);
  }
  function g(b, P) {
    typeof b.error == "function" ? b.error(P) : b.close();
  }
  var y = Object.prototype.hasOwnProperty, v = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, E = {}, k = {};
  function M(b) {
    return y.call(k, b) ? !0 : y.call(E, b) ? !1 : v.test(b) ? k[b] = !0 : (E[b] = !0, !1);
  }
  function T(b, P, z, G, Se, ve, Ne) {
    this.acceptsBooleans = P === 2 || P === 3 || P === 4, this.attributeName = G, this.attributeNamespace = Se, this.mustUseProperty = z, this.propertyName = b, this.type = P, this.sanitizeURL = ve, this.removeEmptyString = Ne;
  }
  var m = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(b) {
    m[b] = new T(b, 0, !1, b, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(b) {
    var P = b[0];
    m[P] = new T(P, 1, !1, b[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(b) {
    m[b] = new T(b, 2, !1, b.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(b) {
    m[b] = new T(b, 2, !1, b, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(b) {
    m[b] = new T(b, 3, !1, b.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(b) {
    m[b] = new T(b, 3, !0, b, null, !1, !1);
  }), ["capture", "download"].forEach(function(b) {
    m[b] = new T(b, 4, !1, b, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(b) {
    m[b] = new T(b, 6, !1, b, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(b) {
    m[b] = new T(b, 5, !1, b.toLowerCase(), null, !1, !1);
  });
  var R = /[\-:]([a-z])/g;
  function O(b) {
    return b[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(b) {
    var P = b.replace(
      R,
      O
    );
    m[P] = new T(P, 1, !1, b, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(b) {
    var P = b.replace(R, O);
    m[P] = new T(P, 1, !1, b, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(b) {
    var P = b.replace(R, O);
    m[P] = new T(P, 1, !1, b, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(b) {
    m[b] = new T(b, 1, !1, b.toLowerCase(), null, !1, !1);
  }), m.xlinkHref = new T("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(b) {
    m[b] = new T(b, 1, !1, b.toLowerCase(), null, !0, !0);
  });
  var _ = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, N = ["Webkit", "ms", "Moz", "O"];
  Object.keys(_).forEach(function(b) {
    N.forEach(function(P) {
      P = P + b.charAt(0).toUpperCase() + b.substring(1), _[P] = _[b];
    });
  });
  var D = /["'&<>]/;
  function I(b) {
    if (typeof b == "boolean" || typeof b == "number")
      return "" + b;
    b = "" + b;
    var P = D.exec(b);
    if (P) {
      var z = "", G, Se = 0;
      for (G = P.index; G < b.length; G++) {
        switch (b.charCodeAt(G)) {
          case 34:
            P = "&quot;";
            break;
          case 38:
            P = "&amp;";
            break;
          case 39:
            P = "&#x27;";
            break;
          case 60:
            P = "&lt;";
            break;
          case 62:
            P = "&gt;";
            break;
          default:
            continue;
        }
        Se !== G && (z += b.substring(Se, G)), Se = G + 1, z += P;
      }
      b = Se !== G ? z + b.substring(Se, G) : z;
    }
    return b;
  }
  var B = /([A-Z])/g, U = /^ms-/, q = Array.isArray, K = d("<script>"), j = d("<\/script>"), te = d('<script src="'), me = d('<script type="module" src="'), H = d('" async=""><\/script>'), le = /(<\/|<)(s)(cript)/gi;
  function ue(b, P, z, G) {
    return "" + P + (z === "s" ? "\\u0073" : "\\u0053") + G;
  }
  function fe(b, P, z, G, Se) {
    b = b === void 0 ? "" : b, P = P === void 0 ? K : d('<script nonce="' + I(P) + '">');
    var ve = [];
    if (z !== void 0 && ve.push(P, c(("" + z).replace(le, ue)), j), G !== void 0)
      for (z = 0; z < G.length; z++)
        ve.push(te, c(I(G[z])), H);
    if (Se !== void 0)
      for (G = 0; G < Se.length; G++)
        ve.push(me, c(I(Se[G])), H);
    return { bootstrapChunks: ve, startInlineScript: P, placeholderPrefix: d(b + "P:"), segmentPrefix: d(b + "S:"), boundaryPrefix: b + "B:", idPrefix: b, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function ae(b, P) {
    return { insertionMode: b, selectedValue: P };
  }
  function V(b) {
    return ae(b === "http://www.w3.org/2000/svg" ? 2 : b === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function Z(b, P, z) {
    switch (P) {
      case "select":
        return ae(1, z.value != null ? z.value : z.defaultValue);
      case "svg":
        return ae(2, null);
      case "math":
        return ae(3, null);
      case "foreignObject":
        return ae(1, null);
      case "table":
        return ae(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return ae(5, null);
      case "colgroup":
        return ae(7, null);
      case "tr":
        return ae(6, null);
    }
    return 4 <= b.insertionMode || b.insertionMode === 0 ? ae(1, null) : b;
  }
  var ee = d("<!-- -->");
  function Ae(b, P, z, G) {
    return P === "" ? G : (G && b.push(ee), b.push(c(I(P))), !0);
  }
  var xe = /* @__PURE__ */ new Map(), De = d(' style="'), oe = d(":"), ze = d(";");
  function Ie(b, P, z) {
    if (typeof z != "object")
      throw Error(t(62));
    P = !0;
    for (var G in z)
      if (y.call(z, G)) {
        var Se = z[G];
        if (Se != null && typeof Se != "boolean" && Se !== "") {
          if (G.indexOf("--") === 0) {
            var ve = c(I(G));
            Se = c(I(("" + Se).trim()));
          } else {
            ve = G;
            var Ne = xe.get(ve);
            Ne !== void 0 || (Ne = d(I(ve.replace(B, "-$1").toLowerCase().replace(U, "-ms-"))), xe.set(ve, Ne)), ve = Ne, Se = typeof Se == "number" ? Se === 0 || y.call(_, G) ? c("" + Se) : c(Se + "px") : c(I(("" + Se).trim()));
          }
          P ? (P = !1, b.push(De, ve, oe, Se)) : b.push(ze, ve, oe, Se);
        }
      }
    P || b.push(Oe);
  }
  var Ce = d(" "), ge = d('="'), Oe = d('"'), ie = d('=""');
  function we(b, P, z, G) {
    switch (z) {
      case "style":
        Ie(b, P, G);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < z.length) || z[0] !== "o" && z[0] !== "O" || z[1] !== "n" && z[1] !== "N") {
      if (P = m.hasOwnProperty(z) ? m[z] : null, P !== null) {
        switch (typeof G) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!P.acceptsBooleans)
              return;
        }
        switch (z = c(P.attributeName), P.type) {
          case 3:
            G && b.push(Ce, z, ie);
            break;
          case 4:
            G === !0 ? b.push(Ce, z, ie) : G !== !1 && b.push(Ce, z, ge, c(I(G)), Oe);
            break;
          case 5:
            isNaN(G) || b.push(Ce, z, ge, c(I(G)), Oe);
            break;
          case 6:
            !isNaN(G) && 1 <= G && b.push(Ce, z, ge, c(I(G)), Oe);
            break;
          default:
            P.sanitizeURL && (G = "" + G), b.push(Ce, z, ge, c(I(G)), Oe);
        }
      } else if (M(z)) {
        switch (typeof G) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (P = z.toLowerCase().slice(0, 5), P !== "data-" && P !== "aria-")
              return;
        }
        b.push(Ce, c(z), ge, c(I(G)), Oe);
      }
    }
  }
  var Pe = d(">"), He = d("/>");
  function Ye(b, P, z) {
    if (P != null) {
      if (z != null)
        throw Error(t(60));
      if (typeof P != "object" || !("__html" in P))
        throw Error(t(61));
      P = P.__html, P != null && b.push(c("" + P));
    }
  }
  function Je(b) {
    var P = "";
    return e.Children.forEach(b, function(z) {
      z != null && (P += z);
    }), P;
  }
  var at = d(' selected=""');
  function it(b, P, z, G) {
    b.push(Fe(z));
    var Se = z = null, ve;
    for (ve in P)
      if (y.call(P, ve)) {
        var Ne = P[ve];
        if (Ne != null)
          switch (ve) {
            case "children":
              z = Ne;
              break;
            case "dangerouslySetInnerHTML":
              Se = Ne;
              break;
            default:
              we(b, G, ve, Ne);
          }
      }
    return b.push(Pe), Ye(b, Se, z), typeof z == "string" ? (b.push(c(I(z))), null) : z;
  }
  var st = d(`
`), Ge = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, We = /* @__PURE__ */ new Map();
  function Fe(b) {
    var P = We.get(b);
    if (P === void 0) {
      if (!Ge.test(b))
        throw Error(t(65, b));
      P = d("<" + b), We.set(b, P);
    }
    return P;
  }
  var ft = d("<!DOCTYPE html>");
  function Ke(b, P, z, G, Se) {
    switch (P) {
      case "select":
        b.push(Fe("select"));
        var ve = null, Ne = null;
        for (At in z)
          if (y.call(z, At)) {
            var Ue = z[At];
            if (Ue != null)
              switch (At) {
                case "children":
                  ve = Ue;
                  break;
                case "dangerouslySetInnerHTML":
                  Ne = Ue;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  we(b, G, At, Ue);
              }
          }
        return b.push(Pe), Ye(b, Ne, ve), ve;
      case "option":
        Ne = Se.selectedValue, b.push(Fe("option"));
        var vt = Ue = null, Dt = null, At = null;
        for (ve in z)
          if (y.call(z, ve)) {
            var ln = z[ve];
            if (ln != null)
              switch (ve) {
                case "children":
                  Ue = ln;
                  break;
                case "selected":
                  Dt = ln;
                  break;
                case "dangerouslySetInnerHTML":
                  At = ln;
                  break;
                case "value":
                  vt = ln;
                default:
                  we(b, G, ve, ln);
              }
          }
        if (Ne != null)
          if (z = vt !== null ? "" + vt : Je(Ue), q(Ne)) {
            for (G = 0; G < Ne.length; G++)
              if ("" + Ne[G] === z) {
                b.push(at);
                break;
              }
          } else
            "" + Ne === z && b.push(at);
        else
          Dt && b.push(at);
        return b.push(Pe), Ye(b, At, Ue), Ue;
      case "textarea":
        b.push(Fe("textarea")), At = Ne = ve = null;
        for (Ue in z)
          if (y.call(z, Ue) && (vt = z[Ue], vt != null))
            switch (Ue) {
              case "children":
                At = vt;
                break;
              case "value":
                ve = vt;
                break;
              case "defaultValue":
                Ne = vt;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(91));
              default:
                we(b, G, Ue, vt);
            }
        if (ve === null && Ne !== null && (ve = Ne), b.push(Pe), At != null) {
          if (ve != null)
            throw Error(t(92));
          if (q(At) && 1 < At.length)
            throw Error(t(93));
          ve = "" + At;
        }
        return typeof ve == "string" && ve[0] === `
` && b.push(st), ve !== null && b.push(c(I("" + ve))), null;
      case "input":
        b.push(Fe("input")), vt = At = Ue = ve = null;
        for (Ne in z)
          if (y.call(z, Ne) && (Dt = z[Ne], Dt != null))
            switch (Ne) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, "input"));
              case "defaultChecked":
                vt = Dt;
                break;
              case "defaultValue":
                Ue = Dt;
                break;
              case "checked":
                At = Dt;
                break;
              case "value":
                ve = Dt;
                break;
              default:
                we(b, G, Ne, Dt);
            }
        return At !== null ? we(
          b,
          G,
          "checked",
          At
        ) : vt !== null && we(b, G, "checked", vt), ve !== null ? we(b, G, "value", ve) : Ue !== null && we(b, G, "value", Ue), b.push(He), null;
      case "menuitem":
        b.push(Fe("menuitem"));
        for (var Yn in z)
          if (y.call(z, Yn) && (ve = z[Yn], ve != null))
            switch (Yn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(400));
              default:
                we(b, G, Yn, ve);
            }
        return b.push(Pe), null;
      case "title":
        b.push(Fe("title")), ve = null;
        for (ln in z)
          if (y.call(z, ln) && (Ne = z[ln], Ne != null))
            switch (ln) {
              case "children":
                ve = Ne;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(t(434));
              default:
                we(b, G, ln, Ne);
            }
        return b.push(Pe), ve;
      case "listing":
      case "pre":
        b.push(Fe(P)), Ne = ve = null;
        for (vt in z)
          if (y.call(z, vt) && (Ue = z[vt], Ue != null))
            switch (vt) {
              case "children":
                ve = Ue;
                break;
              case "dangerouslySetInnerHTML":
                Ne = Ue;
                break;
              default:
                we(b, G, vt, Ue);
            }
        if (b.push(Pe), Ne != null) {
          if (ve != null)
            throw Error(t(60));
          if (typeof Ne != "object" || !("__html" in Ne))
            throw Error(t(61));
          z = Ne.__html, z != null && (typeof z == "string" && 0 < z.length && z[0] === `
` ? b.push(st, c(z)) : b.push(c("" + z)));
        }
        return typeof ve == "string" && ve[0] === `
` && b.push(st), ve;
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        b.push(Fe(P));
        for (var Jn in z)
          if (y.call(z, Jn) && (ve = z[Jn], ve != null))
            switch (Jn) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(t(399, P));
              default:
                we(b, G, Jn, ve);
            }
        return b.push(He), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return it(b, z, P, G);
      case "html":
        return Se.insertionMode === 0 && b.push(ft), it(b, z, P, G);
      default:
        if (P.indexOf("-") === -1 && typeof z.is != "string")
          return it(b, z, P, G);
        b.push(Fe(P)), Ne = ve = null;
        for (Dt in z)
          if (y.call(z, Dt) && (Ue = z[Dt], Ue != null))
            switch (Dt) {
              case "children":
                ve = Ue;
                break;
              case "dangerouslySetInnerHTML":
                Ne = Ue;
                break;
              case "style":
                Ie(b, G, Ue);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                M(Dt) && typeof Ue != "function" && typeof Ue != "symbol" && b.push(Ce, c(Dt), ge, c(I(Ue)), Oe);
            }
        return b.push(Pe), Ye(b, Ne, ve), ve;
    }
  }
  var Ze = d("</"), ut = d(">"), ht = d('<template id="'), Pt = d('"></template>'), on = d("<!--$-->"), un = d('<!--$?--><template id="'), Ot = d('"></template>'), jt = d("<!--$!-->"), Ft = d("<!--/$-->"), nn = d("<template"), yn = d('"'), hn = d(' data-dgst="');
  d(' data-msg="'), d(' data-stck="');
  var Rt = d("></template>");
  function Zt(b, P, z) {
    if (a(b, un), z === null)
      throw Error(t(395));
    return a(b, z), o(b, Ot);
  }
  var _e = d('<div hidden id="'), wn = d('">'), Lt = d("</div>"), vn = d('<svg aria-hidden="true" style="display:none" id="'), It = d('">'), pn = d("</svg>"), An = d('<math aria-hidden="true" style="display:none" id="'), $n = d('">'), Me = d("</math>"), Xe = d('<table hidden id="'), Tt = d('">'), nt = d("</table>"), zt = d('<table hidden><tbody id="'), _t = d('">'), Tn = d("</tbody></table>"), Wn = d('<table hidden><tr id="'), Y = d('">'), $e = d("</tr></table>"), et = d('<table hidden><colgroup id="'), Ve = d('">'), pt = d("</colgroup></table>");
  function ot(b, P, z, G) {
    switch (z.insertionMode) {
      case 0:
      case 1:
        return a(b, _e), a(b, P.segmentPrefix), a(b, c(G.toString(16))), o(b, wn);
      case 2:
        return a(b, vn), a(b, P.segmentPrefix), a(b, c(G.toString(16))), o(b, It);
      case 3:
        return a(b, An), a(b, P.segmentPrefix), a(b, c(G.toString(16))), o(b, $n);
      case 4:
        return a(b, Xe), a(b, P.segmentPrefix), a(b, c(G.toString(16))), o(b, Tt);
      case 5:
        return a(b, zt), a(b, P.segmentPrefix), a(b, c(G.toString(16))), o(b, _t);
      case 6:
        return a(b, Wn), a(b, P.segmentPrefix), a(b, c(G.toString(16))), o(b, Y);
      case 7:
        return a(
          b,
          et
        ), a(b, P.segmentPrefix), a(b, c(G.toString(16))), o(b, Ve);
      default:
        throw Error(t(397));
    }
  }
  function bt(b, P) {
    switch (P.insertionMode) {
      case 0:
      case 1:
        return o(b, Lt);
      case 2:
        return o(b, pn);
      case 3:
        return o(b, Me);
      case 4:
        return o(b, nt);
      case 5:
        return o(b, Tn);
      case 6:
        return o(b, $e);
      case 7:
        return o(b, pt);
      default:
        throw Error(t(397));
    }
  }
  var mt = d('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), qe = d('$RS("'), Ut = d('","'), Qt = d('")<\/script>'), cn = d('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), Jt = d('$RC("'), Kt = d('","'), $t = d('")<\/script>'), Bt = d('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), xt = d('$RX("'), mn = d('"'), Sn = d(")<\/script>"), Ht = d(","), En = /[<\u2028\u2029]/g;
  function xn(b) {
    return JSON.stringify(b).replace(En, function(P) {
      switch (P) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  var Xt = Object.assign, en = Symbol.for("react.element"), Bn = Symbol.for("react.portal"), Vn = Symbol.for("react.fragment"), or = Symbol.for("react.strict_mode"), Zn = Symbol.for("react.profiler"), sn = Symbol.for("react.provider"), Ln = Symbol.for("react.context"), Ar = Symbol.for("react.forward_ref"), hr = Symbol.for("react.suspense"), pr = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), $ = Symbol.for("react.scope"), X = Symbol.for("react.debug_trace_mode"), be = Symbol.for("react.legacy_hidden"), ye = Symbol.for("react.default_value"), Te = Symbol.iterator;
  function je(b) {
    if (b == null)
      return null;
    if (typeof b == "function")
      return b.displayName || b.name || null;
    if (typeof b == "string")
      return b;
    switch (b) {
      case Vn:
        return "Fragment";
      case Bn:
        return "Portal";
      case Zn:
        return "Profiler";
      case or:
        return "StrictMode";
      case hr:
        return "Suspense";
      case pr:
        return "SuspenseList";
    }
    if (typeof b == "object")
      switch (b.$$typeof) {
        case Ln:
          return (b.displayName || "Context") + ".Consumer";
        case sn:
          return (b._context.displayName || "Context") + ".Provider";
        case Ar:
          var P = b.render;
          return b = b.displayName, b || (b = P.displayName || P.name || "", b = b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef"), b;
        case x:
          return P = b.displayName || null, P !== null ? P : je(b.type) || "Memo";
        case A:
          P = b._payload, b = b._init;
          try {
            return je(b(P));
          } catch {
          }
      }
    return null;
  }
  var lt = {};
  function gt(b, P) {
    if (b = b.contextTypes, !b)
      return lt;
    var z = {}, G;
    for (G in b)
      z[G] = P[G];
    return z;
  }
  var dt = null;
  function Nt(b, P) {
    if (b !== P) {
      b.context._currentValue = b.parentValue, b = b.parent;
      var z = P.parent;
      if (b === null) {
        if (z !== null)
          throw Error(t(401));
      } else {
        if (z === null)
          throw Error(t(401));
        Nt(b, z);
      }
      P.context._currentValue = P.value;
    }
  }
  function On(b) {
    b.context._currentValue = b.parentValue, b = b.parent, b !== null && On(b);
  }
  function Pn(b) {
    var P = b.parent;
    P !== null && Pn(P), b.context._currentValue = b.value;
  }
  function Rn(b, P) {
    if (b.context._currentValue = b.parentValue, b = b.parent, b === null)
      throw Error(t(402));
    b.depth === P.depth ? Nt(b, P) : Rn(b, P);
  }
  function ne(b, P) {
    var z = P.parent;
    if (z === null)
      throw Error(t(402));
    b.depth === z.depth ? Nt(b, z) : ne(b, z), P.context._currentValue = P.value;
  }
  function J(b) {
    var P = dt;
    P !== b && (P === null ? Pn(b) : b === null ? On(P) : P.depth === b.depth ? Nt(P, b) : P.depth > b.depth ? Rn(P, b) : ne(P, b), dt = b);
  }
  var de = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(b, P) {
    b = b._reactInternals, b.queue !== null && b.queue.push(P);
  }, enqueueReplaceState: function(b, P) {
    b = b._reactInternals, b.replace = !0, b.queue = [P];
  }, enqueueForceUpdate: function() {
  } };
  function Re(b, P, z, G) {
    var Se = b.state !== void 0 ? b.state : null;
    b.updater = de, b.props = z, b.state = Se;
    var ve = { queue: [], replace: !1 };
    b._reactInternals = ve;
    var Ne = P.contextType;
    if (b.context = typeof Ne == "object" && Ne !== null ? Ne._currentValue : G, Ne = P.getDerivedStateFromProps, typeof Ne == "function" && (Ne = Ne(z, Se), Se = Ne == null ? Se : Xt({}, Se, Ne), b.state = Se), typeof P.getDerivedStateFromProps != "function" && typeof b.getSnapshotBeforeUpdate != "function" && (typeof b.UNSAFE_componentWillMount == "function" || typeof b.componentWillMount == "function"))
      if (P = b.state, typeof b.componentWillMount == "function" && b.componentWillMount(), typeof b.UNSAFE_componentWillMount == "function" && b.UNSAFE_componentWillMount(), P !== b.state && de.enqueueReplaceState(b, b.state, null), ve.queue !== null && 0 < ve.queue.length)
        if (P = ve.queue, Ne = ve.replace, ve.queue = null, ve.replace = !1, Ne && P.length === 1)
          b.state = P[0];
        else {
          for (ve = Ne ? P[0] : b.state, Se = !0, Ne = Ne ? 1 : 0; Ne < P.length; Ne++) {
            var Ue = P[Ne];
            Ue = typeof Ue == "function" ? Ue.call(b, ve, z, G) : Ue, Ue != null && (Se ? (Se = !1, ve = Xt({}, ve, Ue)) : Xt(ve, Ue));
          }
          b.state = ve;
        }
      else
        ve.queue = null;
  }
  var Mt = { id: 1, overflow: "" };
  function qt(b, P, z) {
    var G = b.id;
    b = b.overflow;
    var Se = 32 - Mn(G) - 1;
    G &= ~(1 << Se), z += 1;
    var ve = 32 - Mn(P) + Se;
    if (30 < ve) {
      var Ne = Se - Se % 5;
      return ve = (G & (1 << Ne) - 1).toString(32), G >>= Ne, Se -= Ne, { id: 1 << 32 - Mn(P) + Se | z << Se | G, overflow: ve + b };
    }
    return { id: 1 << ve | z << Se | G, overflow: b };
  }
  var Mn = Math.clz32 ? Math.clz32 : Ka, Pr = Math.log, il = Math.LN2;
  function Ka(b) {
    return b >>>= 0, b === 0 ? 32 : 31 - (Pr(b) / il | 0) | 0;
  }
  function ol(b, P) {
    return b === P && (b !== 0 || 1 / b === 1 / P) || b !== b && P !== P;
  }
  var Ya = typeof Object.is == "function" ? Object.is : ol, mr = null, Jr = null, pa = null, rn = null, vr = !1, Un = !1, Rr = 0, xr = null, ma = 0;
  function br() {
    if (mr === null)
      throw Error(t(321));
    return mr;
  }
  function Qn() {
    if (0 < ma)
      throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Xa() {
    return rn === null ? pa === null ? (vr = !1, pa = rn = Qn()) : (vr = !0, rn = pa) : rn.next === null ? (vr = !1, rn = rn.next = Qn()) : (vr = !0, rn = rn.next), rn;
  }
  function qa() {
    Jr = mr = null, Un = !1, pa = null, ma = 0, rn = xr = null;
  }
  function ji(b, P) {
    return typeof P == "function" ? P(b) : P;
  }
  function Ui(b, P, z) {
    if (mr = br(), rn = Xa(), vr) {
      var G = rn.queue;
      if (P = G.dispatch, xr !== null && (z = xr.get(G), z !== void 0)) {
        xr.delete(G), G = rn.memoizedState;
        do
          G = b(G, z.action), z = z.next;
        while (z !== null);
        return rn.memoizedState = G, [G, P];
      }
      return [rn.memoizedState, P];
    }
    return b = b === ji ? typeof P == "function" ? P() : P : z !== void 0 ? z(P) : P, rn.memoizedState = b, b = rn.queue = { last: null, dispatch: null }, b = b.dispatch = ll.bind(null, mr, b), [rn.memoizedState, b];
  }
  function Ki(b, P) {
    if (mr = br(), rn = Xa(), P = P === void 0 ? null : P, rn !== null) {
      var z = rn.memoizedState;
      if (z !== null && P !== null) {
        var G = z[1];
        e:
          if (G === null)
            G = !1;
          else {
            for (var Se = 0; Se < G.length && Se < P.length; Se++)
              if (!Ya(P[Se], G[Se])) {
                G = !1;
                break e;
              }
            G = !0;
          }
        if (G)
          return z[0];
      }
    }
    return b = b(), rn.memoizedState = [b, P], b;
  }
  function ll(b, P, z) {
    if (25 <= ma)
      throw Error(t(301));
    if (b === mr)
      if (Un = !0, b = { action: z, next: null }, xr === null && (xr = /* @__PURE__ */ new Map()), z = xr.get(P), z === void 0)
        xr.set(P, b);
      else {
        for (P = z; P.next !== null; )
          P = P.next;
        P.next = b;
      }
  }
  function sl() {
    throw Error(t(394));
  }
  function ga() {
  }
  var ya = { readContext: function(b) {
    return b._currentValue;
  }, useContext: function(b) {
    return br(), b._currentValue;
  }, useMemo: Ki, useReducer: Ui, useRef: function(b) {
    mr = br(), rn = Xa();
    var P = rn.memoizedState;
    return P === null ? (b = { current: b }, rn.memoizedState = b) : P;
  }, useState: function(b) {
    return Ui(ji, b);
  }, useInsertionEffect: ga, useLayoutEffect: function() {
  }, useCallback: function(b, P) {
    return Ki(function() {
      return b;
    }, P);
  }, useImperativeHandle: ga, useEffect: ga, useDebugValue: ga, useDeferredValue: function(b) {
    return br(), b;
  }, useTransition: function() {
    return br(), [!1, sl];
  }, useId: function() {
    var b = Jr.treeContext, P = b.overflow;
    b = b.id, b = (b & ~(1 << 32 - Mn(b) - 1)).toString(32) + P;
    var z = va;
    if (z === null)
      throw Error(t(404));
    return P = Rr++, b = ":" + z.idPrefix + "R" + b, 0 < P && (b += "H" + P.toString(32)), b + ":";
  }, useMutableSource: function(b, P) {
    return br(), P(b._source);
  }, useSyncExternalStore: function(b, P, z) {
    if (z === void 0)
      throw Error(t(407));
    return z();
  } }, va = null, ea = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function ul(b) {
    return console.error(b), null;
  }
  function ta() {
  }
  function Ga(b, P, z, G, Se, ve, Ne, Ue, vt) {
    var Dt = [], At = /* @__PURE__ */ new Set();
    return P = { destination: null, responseState: P, progressiveChunkSize: G === void 0 ? 12800 : G, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: At, pingedTasks: Dt, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: Se === void 0 ? ul : Se, onAllReady: ve === void 0 ? ta : ve, onShellReady: Ne === void 0 ? ta : Ne, onShellError: Ue === void 0 ? ta : Ue, onFatalError: vt === void 0 ? ta : vt }, z = $r(P, 0, null, z, !1, !1), z.parentFlushed = !0, b = Za(P, b, null, z, At, lt, null, Mt), Dt.push(b), P;
  }
  function Za(b, P, z, G, Se, ve, Ne, Ue) {
    b.allPendingTasks++, z === null ? b.pendingRootTasks++ : z.pendingTasks++;
    var vt = { node: P, ping: function() {
      var Dt = b.pingedTasks;
      Dt.push(vt), Dt.length === 1 && Qi(b);
    }, blockedBoundary: z, blockedSegment: G, abortSet: Se, legacyContext: ve, context: Ne, treeContext: Ue };
    return Se.add(vt), vt;
  }
  function $r(b, P, z, G, Se, ve) {
    return { status: 0, id: -1, index: P, parentFlushed: !1, chunks: [], children: [], formatContext: G, boundary: z, lastPushedText: Se, textEmbedded: ve };
  }
  function Br(b, P) {
    if (b = b.onError(P), b != null && typeof b != "string")
      throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof b + '" instead');
    return b;
  }
  function xa(b, P) {
    var z = b.onShellError;
    z(P), z = b.onFatalError, z(P), b.destination !== null ? (b.status = 2, g(b.destination, P)) : (b.status = 1, b.fatalError = P);
  }
  function Yi(b, P, z, G, Se) {
    for (mr = {}, Jr = P, Rr = 0, b = z(G, Se); Un; )
      Un = !1, Rr = 0, ma += 1, rn = null, b = z(G, Se);
    return qa(), b;
  }
  function Qa(b, P, z, G) {
    var Se = z.render(), ve = G.childContextTypes;
    if (ve != null) {
      var Ne = P.legacyContext;
      if (typeof z.getChildContext != "function")
        G = Ne;
      else {
        z = z.getChildContext();
        for (var Ue in z)
          if (!(Ue in ve))
            throw Error(t(108, je(G) || "Unknown", Ue));
        G = Xt({}, Ne, z);
      }
      P.legacyContext = G, Kn(b, P, Se), P.legacyContext = Ne;
    } else
      Kn(b, P, Se);
  }
  function Xi(b, P) {
    if (b && b.defaultProps) {
      P = Xt({}, P), b = b.defaultProps;
      for (var z in b)
        P[z] === void 0 && (P[z] = b[z]);
      return P;
    }
    return P;
  }
  function ba(b, P, z, G, Se) {
    if (typeof z == "function")
      if (z.prototype && z.prototype.isReactComponent) {
        Se = gt(z, P.legacyContext);
        var ve = z.contextType;
        ve = new z(G, typeof ve == "object" && ve !== null ? ve._currentValue : Se), Re(ve, z, G, Se), Qa(b, P, ve, z);
      } else {
        ve = gt(z, P.legacyContext), Se = Yi(b, P, z, G, ve);
        var Ne = Rr !== 0;
        if (typeof Se == "object" && Se !== null && typeof Se.render == "function" && Se.$$typeof === void 0)
          Re(Se, z, G, ve), Qa(b, P, Se, z);
        else if (Ne) {
          G = P.treeContext, P.treeContext = qt(G, 1, 0);
          try {
            Kn(b, P, Se);
          } finally {
            P.treeContext = G;
          }
        } else
          Kn(b, P, Se);
      }
    else if (typeof z == "string") {
      switch (Se = P.blockedSegment, ve = Ke(Se.chunks, z, G, b.responseState, Se.formatContext), Se.lastPushedText = !1, Ne = Se.formatContext, Se.formatContext = Z(Ne, z, G), Sa(b, P, ve), Se.formatContext = Ne, z) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          Se.chunks.push(Ze, c(z), ut);
      }
      Se.lastPushedText = !1;
    } else {
      switch (z) {
        case be:
        case X:
        case or:
        case Zn:
        case Vn:
          Kn(b, P, G.children);
          return;
        case pr:
          Kn(b, P, G.children);
          return;
        case $:
          throw Error(t(343));
        case hr:
          e: {
            z = P.blockedBoundary, Se = P.blockedSegment, ve = G.fallback, G = G.children, Ne = /* @__PURE__ */ new Set();
            var Ue = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: Ne, errorDigest: null }, vt = $r(b, Se.chunks.length, Ue, Se.formatContext, !1, !1);
            Se.children.push(vt), Se.lastPushedText = !1;
            var Dt = $r(b, 0, null, Se.formatContext, !1, !1);
            Dt.parentFlushed = !0, P.blockedBoundary = Ue, P.blockedSegment = Dt;
            try {
              if (Sa(
                b,
                P,
                G
              ), Dt.lastPushedText && Dt.textEmbedded && Dt.chunks.push(ee), Dt.status = 1, Ea(Ue, Dt), Ue.pendingTasks === 0)
                break e;
            } catch (At) {
              Dt.status = 4, Ue.forceClientRender = !0, Ue.errorDigest = Br(b, At);
            } finally {
              P.blockedBoundary = z, P.blockedSegment = Se;
            }
            P = Za(b, ve, z, vt, Ne, P.legacyContext, P.context, P.treeContext), b.pingedTasks.push(P);
          }
          return;
      }
      if (typeof z == "object" && z !== null)
        switch (z.$$typeof) {
          case Ar:
            if (G = Yi(b, P, z.render, G, Se), Rr !== 0) {
              z = P.treeContext, P.treeContext = qt(z, 1, 0);
              try {
                Kn(b, P, G);
              } finally {
                P.treeContext = z;
              }
            } else
              Kn(b, P, G);
            return;
          case x:
            z = z.type, G = Xi(z, G), ba(b, P, z, G, Se);
            return;
          case sn:
            if (Se = G.children, z = z._context, G = G.value, ve = z._currentValue, z._currentValue = G, Ne = dt, dt = G = { parent: Ne, depth: Ne === null ? 0 : Ne.depth + 1, context: z, parentValue: ve, value: G }, P.context = G, Kn(b, P, Se), b = dt, b === null)
              throw Error(t(403));
            G = b.parentValue, b.context._currentValue = G === ye ? b.context._defaultValue : G, b = dt = b.parent, P.context = b;
            return;
          case Ln:
            G = G.children, G = G(z._currentValue), Kn(b, P, G);
            return;
          case A:
            Se = z._init, z = Se(z._payload), G = Xi(z, G), ba(b, P, z, G, void 0);
            return;
        }
      throw Error(t(
        130,
        z == null ? z : typeof z,
        ""
      ));
    }
  }
  function Kn(b, P, z) {
    if (P.node = z, typeof z == "object" && z !== null) {
      switch (z.$$typeof) {
        case en:
          ba(b, P, z.type, z.props, z.ref);
          return;
        case Bn:
          throw Error(t(257));
        case A:
          var G = z._init;
          z = G(z._payload), Kn(b, P, z);
          return;
      }
      if (q(z)) {
        qi(b, P, z);
        return;
      }
      if (z === null || typeof z != "object" ? G = null : (G = Te && z[Te] || z["@@iterator"], G = typeof G == "function" ? G : null), G && (G = G.call(z))) {
        if (z = G.next(), !z.done) {
          var Se = [];
          do
            Se.push(z.value), z = G.next();
          while (!z.done);
          qi(b, P, Se);
        }
        return;
      }
      throw b = Object.prototype.toString.call(z), Error(t(31, b === "[object Object]" ? "object with keys {" + Object.keys(z).join(", ") + "}" : b));
    }
    typeof z == "string" ? (G = P.blockedSegment, G.lastPushedText = Ae(P.blockedSegment.chunks, z, b.responseState, G.lastPushedText)) : typeof z == "number" && (G = P.blockedSegment, G.lastPushedText = Ae(P.blockedSegment.chunks, "" + z, b.responseState, G.lastPushedText));
  }
  function qi(b, P, z) {
    for (var G = z.length, Se = 0; Se < G; Se++) {
      var ve = P.treeContext;
      P.treeContext = qt(ve, G, Se);
      try {
        Sa(b, P, z[Se]);
      } finally {
        P.treeContext = ve;
      }
    }
  }
  function Sa(b, P, z) {
    var G = P.blockedSegment.formatContext, Se = P.legacyContext, ve = P.context;
    try {
      return Kn(b, P, z);
    } catch (vt) {
      if (qa(), typeof vt == "object" && vt !== null && typeof vt.then == "function") {
        z = vt;
        var Ne = P.blockedSegment, Ue = $r(b, Ne.chunks.length, null, Ne.formatContext, Ne.lastPushedText, !0);
        Ne.children.push(Ue), Ne.lastPushedText = !1, b = Za(b, P.node, P.blockedBoundary, Ue, P.abortSet, P.legacyContext, P.context, P.treeContext).ping, z.then(b, b), P.blockedSegment.formatContext = G, P.legacyContext = Se, P.context = ve, J(ve);
      } else
        throw P.blockedSegment.formatContext = G, P.legacyContext = Se, P.context = ve, J(ve), vt;
    }
  }
  function cl(b) {
    var P = b.blockedBoundary;
    b = b.blockedSegment, b.status = 3, Zi(this, P, b);
  }
  function Gi(b, P, z) {
    var G = b.blockedBoundary;
    b.blockedSegment.status = 3, G === null ? (P.allPendingTasks--, P.status !== 2 && (P.status = 2, P.destination !== null && P.destination.close())) : (G.pendingTasks--, G.forceClientRender || (G.forceClientRender = !0, b = z === void 0 ? Error(t(432)) : z, G.errorDigest = P.onError(b), G.parentFlushed && P.clientRenderedBoundaries.push(G)), G.fallbackAbortableTasks.forEach(function(Se) {
      return Gi(Se, P, z);
    }), G.fallbackAbortableTasks.clear(), P.allPendingTasks--, P.allPendingTasks === 0 && (G = P.onAllReady, G()));
  }
  function Ea(b, P) {
    if (P.chunks.length === 0 && P.children.length === 1 && P.children[0].boundary === null) {
      var z = P.children[0];
      z.id = P.id, z.parentFlushed = !0, z.status === 1 && Ea(b, z);
    } else
      b.completedSegments.push(P);
  }
  function Zi(b, P, z) {
    if (P === null) {
      if (z.parentFlushed) {
        if (b.completedRootSegment !== null)
          throw Error(t(389));
        b.completedRootSegment = z;
      }
      b.pendingRootTasks--, b.pendingRootTasks === 0 && (b.onShellError = ta, P = b.onShellReady, P());
    } else
      P.pendingTasks--, P.forceClientRender || (P.pendingTasks === 0 ? (z.parentFlushed && z.status === 1 && Ea(P, z), P.parentFlushed && b.completedBoundaries.push(P), P.fallbackAbortableTasks.forEach(cl, b), P.fallbackAbortableTasks.clear()) : z.parentFlushed && z.status === 1 && (Ea(P, z), P.completedSegments.length === 1 && P.parentFlushed && b.partialBoundaries.push(P)));
    b.allPendingTasks--, b.allPendingTasks === 0 && (b = b.onAllReady, b());
  }
  function Qi(b) {
    if (b.status !== 2) {
      var P = dt, z = ea.current;
      ea.current = ya;
      var G = va;
      va = b.responseState;
      try {
        var Se = b.pingedTasks, ve;
        for (ve = 0; ve < Se.length; ve++) {
          var Ne = Se[ve], Ue = b, vt = Ne.blockedSegment;
          if (vt.status === 0) {
            J(Ne.context);
            try {
              Kn(Ue, Ne, Ne.node), vt.lastPushedText && vt.textEmbedded && vt.chunks.push(ee), Ne.abortSet.delete(Ne), vt.status = 1, Zi(Ue, Ne.blockedBoundary, vt);
            } catch (er) {
              if (qa(), typeof er == "object" && er !== null && typeof er.then == "function") {
                var Dt = Ne.ping;
                er.then(Dt, Dt);
              } else {
                Ne.abortSet.delete(Ne), vt.status = 4;
                var At = Ne.blockedBoundary, ln = er, Yn = Br(Ue, ln);
                if (At === null ? xa(Ue, ln) : (At.pendingTasks--, At.forceClientRender || (At.forceClientRender = !0, At.errorDigest = Yn, At.parentFlushed && Ue.clientRenderedBoundaries.push(At))), Ue.allPendingTasks--, Ue.allPendingTasks === 0) {
                  var Jn = Ue.onAllReady;
                  Jn();
                }
              }
            } finally {
            }
          }
        }
        Se.splice(0, ve), b.destination !== null && Ja(b, b.destination);
      } catch (er) {
        Br(b, er), xa(b, er);
      } finally {
        va = G, ea.current = z, z === ya && J(P);
      }
    }
  }
  function ka(b, P, z) {
    switch (z.parentFlushed = !0, z.status) {
      case 0:
        var G = z.id = b.nextSegmentId++;
        return z.lastPushedText = !1, z.textEmbedded = !1, b = b.responseState, a(P, ht), a(P, b.placeholderPrefix), b = c(G.toString(16)), a(P, b), o(P, Pt);
      case 1:
        z.status = 2;
        var Se = !0;
        G = z.chunks;
        var ve = 0;
        z = z.children;
        for (var Ne = 0; Ne < z.length; Ne++) {
          for (Se = z[Ne]; ve < Se.index; ve++)
            a(P, G[ve]);
          Se = wa(b, P, Se);
        }
        for (; ve < G.length - 1; ve++)
          a(P, G[ve]);
        return ve < G.length && (Se = o(P, G[ve])), Se;
      default:
        throw Error(t(390));
    }
  }
  function wa(b, P, z) {
    var G = z.boundary;
    if (G === null)
      return ka(b, P, z);
    if (G.parentFlushed = !0, G.forceClientRender)
      G = G.errorDigest, o(P, jt), a(P, nn), G && (a(P, hn), a(P, c(I(G))), a(P, yn)), o(P, Rt), ka(b, P, z);
    else if (0 < G.pendingTasks) {
      G.rootSegmentID = b.nextSegmentId++, 0 < G.completedSegments.length && b.partialBoundaries.push(G);
      var Se = b.responseState, ve = Se.nextSuspenseID++;
      Se = d(Se.boundaryPrefix + ve.toString(16)), G = G.id = Se, Zt(P, b.responseState, G), ka(b, P, z);
    } else if (G.byteSize > b.progressiveChunkSize)
      G.rootSegmentID = b.nextSegmentId++, b.completedBoundaries.push(G), Zt(P, b.responseState, G.id), ka(b, P, z);
    else {
      if (o(P, on), z = G.completedSegments, z.length !== 1)
        throw Error(t(391));
      wa(b, P, z[0]);
    }
    return o(P, Ft);
  }
  function Ji(b, P, z) {
    return ot(P, b.responseState, z.formatContext, z.id), wa(b, P, z), bt(P, z.formatContext);
  }
  function eo(b, P, z) {
    for (var G = z.completedSegments, Se = 0; Se < G.length; Se++)
      to(b, P, z, G[Se]);
    if (G.length = 0, b = b.responseState, G = z.id, z = z.rootSegmentID, a(P, b.startInlineScript), b.sentCompleteBoundaryFunction ? a(P, Jt) : (b.sentCompleteBoundaryFunction = !0, a(P, cn)), G === null)
      throw Error(t(395));
    return z = c(z.toString(16)), a(P, G), a(P, Kt), a(P, b.segmentPrefix), a(P, z), o(P, $t);
  }
  function to(b, P, z, G) {
    if (G.status === 2)
      return !0;
    var Se = G.id;
    if (Se === -1) {
      if ((G.id = z.rootSegmentID) === -1)
        throw Error(t(392));
      return Ji(b, P, G);
    }
    return Ji(b, P, G), b = b.responseState, a(P, b.startInlineScript), b.sentCompleteSegmentFunction ? a(P, qe) : (b.sentCompleteSegmentFunction = !0, a(P, mt)), a(P, b.segmentPrefix), Se = c(Se.toString(16)), a(P, Se), a(P, Ut), a(P, b.placeholderPrefix), a(P, Se), o(P, Qt);
  }
  function Ja(b, P) {
    r = new Uint8Array(512), n = 0;
    try {
      var z = b.completedRootSegment;
      if (z !== null && b.pendingRootTasks === 0) {
        wa(b, P, z), b.completedRootSegment = null;
        var G = b.responseState.bootstrapChunks;
        for (z = 0; z < G.length - 1; z++)
          a(P, G[z]);
        z < G.length && o(P, G[z]);
      }
      var Se = b.clientRenderedBoundaries, ve;
      for (ve = 0; ve < Se.length; ve++) {
        var Ne = Se[ve];
        G = P;
        var Ue = b.responseState, vt = Ne.id, Dt = Ne.errorDigest, At = Ne.errorMessage, ln = Ne.errorComponentStack;
        if (a(G, Ue.startInlineScript), Ue.sentClientRenderFunction ? a(G, xt) : (Ue.sentClientRenderFunction = !0, a(
          G,
          Bt
        )), vt === null)
          throw Error(t(395));
        a(G, vt), a(G, mn), (Dt || At || ln) && (a(G, Ht), a(G, c(xn(Dt || "")))), (At || ln) && (a(G, Ht), a(G, c(xn(At || "")))), ln && (a(G, Ht), a(G, c(xn(ln)))), o(G, Sn);
      }
      Se.splice(0, ve);
      var Yn = b.completedBoundaries;
      for (ve = 0; ve < Yn.length; ve++)
        eo(b, P, Yn[ve]);
      Yn.splice(0, ve), f(P), r = new Uint8Array(512), n = 0;
      var Jn = b.partialBoundaries;
      for (ve = 0; ve < Jn.length; ve++) {
        var er = Jn[ve];
        e: {
          Se = b, Ne = P;
          var Ta = er.completedSegments;
          for (Ue = 0; Ue < Ta.length; Ue++)
            if (!to(
              Se,
              Ne,
              er,
              Ta[Ue]
            )) {
              Ue++, Ta.splice(0, Ue);
              var ro = !1;
              break e;
            }
          Ta.splice(0, Ue), ro = !0;
        }
        if (!ro) {
          b.destination = null, ve++, Jn.splice(0, ve);
          return;
        }
      }
      Jn.splice(0, ve);
      var ei = b.completedBoundaries;
      for (ve = 0; ve < ei.length; ve++)
        eo(b, P, ei[ve]);
      ei.splice(0, ve);
    } finally {
      f(P), b.allPendingTasks === 0 && b.pingedTasks.length === 0 && b.clientRenderedBoundaries.length === 0 && b.completedBoundaries.length === 0 && P.close();
    }
  }
  function no(b, P) {
    try {
      var z = b.abortableTasks;
      z.forEach(function(G) {
        return Gi(G, b, P);
      }), z.clear(), b.destination !== null && Ja(b, b.destination);
    } catch (G) {
      Br(b, G), xa(b, G);
    }
  }
  return Ou.renderToReadableStream = function(b, P) {
    return new Promise(function(z, G) {
      var Se, ve, Ne = new Promise(function(At, ln) {
        ve = At, Se = ln;
      }), Ue = Ga(b, fe(P ? P.identifierPrefix : void 0, P ? P.nonce : void 0, P ? P.bootstrapScriptContent : void 0, P ? P.bootstrapScripts : void 0, P ? P.bootstrapModules : void 0), V(P ? P.namespaceURI : void 0), P ? P.progressiveChunkSize : void 0, P ? P.onError : void 0, ve, function() {
        var At = new ReadableStream({ type: "bytes", pull: function(ln) {
          if (Ue.status === 1)
            Ue.status = 2, g(ln, Ue.fatalError);
          else if (Ue.status !== 2 && Ue.destination === null) {
            Ue.destination = ln;
            try {
              Ja(Ue, ln);
            } catch (Yn) {
              Br(Ue, Yn), xa(Ue, Yn);
            }
          }
        }, cancel: function() {
          no(Ue);
        } }, { highWaterMark: 0 });
        At.allReady = Ne, z(At);
      }, function(At) {
        Ne.catch(function() {
        }), G(At);
      }, Se);
      if (P && P.signal) {
        var vt = P.signal, Dt = function() {
          no(Ue, vt.reason), vt.removeEventListener("abort", Dt);
        };
        vt.addEventListener("abort", Dt);
      }
      Qi(Ue);
    });
  }, Ou.version = "18.2.0", Ou;
}
var Di = {};
/**
 * @license React
 * react-dom-server-legacy.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var im;
function AE() {
  return im || (im = 1, process.env.NODE_ENV !== "production" && function() {
    var e = se, t = "18.2.0", r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(l) {
      {
        for (var h = arguments.length, S = new Array(h > 1 ? h - 1 : 0), C = 1; C < h; C++)
          S[C - 1] = arguments[C];
        o("warn", l, S);
      }
    }
    function a(l) {
      {
        for (var h = arguments.length, S = new Array(h > 1 ? h - 1 : 0), C = 1; C < h; C++)
          S[C - 1] = arguments[C];
        o("error", l, S);
      }
    }
    function o(l, h, S) {
      {
        var C = r.ReactDebugCurrentFrame, F = C.getStackAddendum();
        F !== "" && (h += "%s", S = S.concat([F]));
        var Q = S.map(function(ce) {
          return String(ce);
        });
        Q.unshift("Warning: " + h), Function.prototype.apply.call(console[l], console, Q);
      }
    }
    function f(l) {
      l();
    }
    function s(l) {
    }
    function c(l, h) {
      d(l, h);
    }
    function d(l, h) {
      return l.push(h);
    }
    function g(l) {
    }
    function y(l) {
      l.push(null);
    }
    function v(l) {
      return l;
    }
    function E(l) {
      return l;
    }
    function k(l, h) {
      l.destroy(h);
    }
    function M(l) {
      {
        var h = typeof Symbol == "function" && Symbol.toStringTag, S = h && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return S;
      }
    }
    function T(l) {
      try {
        return m(l), !1;
      } catch {
        return !0;
      }
    }
    function m(l) {
      return "" + l;
    }
    function R(l, h) {
      if (T(l))
        return a("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", h, M(l)), m(l);
    }
    function O(l, h) {
      if (T(l))
        return a("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", h, M(l)), m(l);
    }
    function _(l) {
      if (T(l))
        return a("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", M(l)), m(l);
    }
    var N = Object.prototype.hasOwnProperty, D = 0, I = 1, B = 2, U = 3, q = 4, K = 5, j = 6, te = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", me = te + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", H = new RegExp("^[" + te + "][" + me + "]*$"), le = {}, ue = {};
    function fe(l) {
      return N.call(ue, l) ? !0 : N.call(le, l) ? !1 : H.test(l) ? (ue[l] = !0, !0) : (le[l] = !0, a("Invalid attribute name: `%s`", l), !1);
    }
    function ae(l, h, S, C) {
      if (S !== null && S.type === D)
        return !1;
      switch (typeof h) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (C)
            return !1;
          if (S !== null)
            return !S.acceptsBooleans;
          var F = l.toLowerCase().slice(0, 5);
          return F !== "data-" && F !== "aria-";
        }
        default:
          return !1;
      }
    }
    function V(l) {
      return ee.hasOwnProperty(l) ? ee[l] : null;
    }
    function Z(l, h, S, C, F, Q, ce) {
      this.acceptsBooleans = h === B || h === U || h === q, this.attributeName = C, this.attributeNamespace = F, this.mustUseProperty = S, this.propertyName = l, this.type = h, this.sanitizeURL = Q, this.removeEmptyString = ce;
    }
    var ee = {}, Ae = [
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
    Ae.forEach(function(l) {
      ee[l] = new Z(
        l,
        D,
        !1,
        // mustUseProperty
        l,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(l) {
      var h = l[0], S = l[1];
      ee[h] = new Z(
        h,
        I,
        !1,
        // mustUseProperty
        S,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(l) {
      ee[l] = new Z(
        l,
        B,
        !1,
        // mustUseProperty
        l.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(l) {
      ee[l] = new Z(
        l,
        B,
        !1,
        // mustUseProperty
        l,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
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
    ].forEach(function(l) {
      ee[l] = new Z(
        l,
        U,
        !1,
        // mustUseProperty
        l.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(l) {
      ee[l] = new Z(
        l,
        U,
        !0,
        // mustUseProperty
        l,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(l) {
      ee[l] = new Z(
        l,
        q,
        !1,
        // mustUseProperty
        l,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(l) {
      ee[l] = new Z(
        l,
        j,
        !1,
        // mustUseProperty
        l,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(l) {
      ee[l] = new Z(
        l,
        K,
        !1,
        // mustUseProperty
        l.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var xe = /[\-\:]([a-z])/g, De = function(l) {
      return l[1].toUpperCase();
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
    ].forEach(function(l) {
      var h = l.replace(xe, De);
      ee[h] = new Z(
        h,
        I,
        !1,
        // mustUseProperty
        l,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(l) {
      var h = l.replace(xe, De);
      ee[h] = new Z(
        h,
        I,
        !1,
        // mustUseProperty
        l,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(l) {
      var h = l.replace(xe, De);
      ee[h] = new Z(
        h,
        I,
        !1,
        // mustUseProperty
        l,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(l) {
      ee[l] = new Z(
        l,
        I,
        !1,
        // mustUseProperty
        l.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var oe = "xlinkHref";
    ee[oe] = new Z(
      "xlinkHref",
      I,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(l) {
      ee[l] = new Z(
        l,
        I,
        !1,
        // mustUseProperty
        l.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var ze = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Ie(l, h) {
      return l + h.charAt(0).toUpperCase() + h.substring(1);
    }
    var Ce = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ze).forEach(function(l) {
      Ce.forEach(function(h) {
        ze[Ie(h, l)] = ze[l];
      });
    });
    var ge = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Oe(l, h) {
      ge[h.type] || h.onChange || h.onInput || h.readOnly || h.disabled || h.value == null || a("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), h.onChange || h.readOnly || h.disabled || h.checked == null || a("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function ie(l, h) {
      if (l.indexOf("-") === -1)
        return typeof h.is == "string";
      switch (l) {
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
    var we = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Pe = {}, He = new RegExp("^(aria)-[" + me + "]*$"), Ye = new RegExp("^(aria)[A-Z][" + me + "]*$");
    function Je(l, h) {
      {
        if (N.call(Pe, h) && Pe[h])
          return !0;
        if (Ye.test(h)) {
          var S = "aria-" + h.slice(4).toLowerCase(), C = we.hasOwnProperty(S) ? S : null;
          if (C == null)
            return a("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", h), Pe[h] = !0, !0;
          if (h !== C)
            return a("Invalid ARIA attribute `%s`. Did you mean `%s`?", h, C), Pe[h] = !0, !0;
        }
        if (He.test(h)) {
          var F = h.toLowerCase(), Q = we.hasOwnProperty(F) ? F : null;
          if (Q == null)
            return Pe[h] = !0, !1;
          if (h !== Q)
            return a("Unknown ARIA attribute `%s`. Did you mean `%s`?", h, Q), Pe[h] = !0, !0;
        }
      }
      return !0;
    }
    function at(l, h) {
      {
        var S = [];
        for (var C in h) {
          var F = Je(l, C);
          F || S.push(C);
        }
        var Q = S.map(function(ce) {
          return "`" + ce + "`";
        }).join(", ");
        S.length === 1 ? a("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", Q, l) : S.length > 1 && a("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", Q, l);
      }
    }
    function it(l, h) {
      ie(l, h) || at(l, h);
    }
    var st = !1;
    function Ge(l, h) {
      {
        if (l !== "input" && l !== "textarea" && l !== "select")
          return;
        h != null && h.value === null && !st && (st = !0, l === "select" && h.multiple ? a("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", l) : a("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", l));
      }
    }
    var We = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Fe = function() {
    };
    {
      var ft = {}, Ke = /^on./, Ze = /^on[^A-Z]/, ut = new RegExp("^(aria)-[" + me + "]*$"), ht = new RegExp("^(aria)[A-Z][" + me + "]*$");
      Fe = function(l, h, S, C) {
        if (N.call(ft, h) && ft[h])
          return !0;
        var F = h.toLowerCase();
        if (F === "onfocusin" || F === "onfocusout")
          return a("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ft[h] = !0, !0;
        if (C != null) {
          var Q = C.registrationNameDependencies, ce = C.possibleRegistrationNames;
          if (Q.hasOwnProperty(h))
            return !0;
          var Ee = ce.hasOwnProperty(F) ? ce[F] : null;
          if (Ee != null)
            return a("Invalid event handler property `%s`. Did you mean `%s`?", h, Ee), ft[h] = !0, !0;
          if (Ke.test(h))
            return a("Unknown event handler property `%s`. It will be ignored.", h), ft[h] = !0, !0;
        } else if (Ke.test(h))
          return Ze.test(h) && a("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", h), ft[h] = !0, !0;
        if (ut.test(h) || ht.test(h))
          return !0;
        if (F === "innerhtml")
          return a("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ft[h] = !0, !0;
        if (F === "aria")
          return a("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ft[h] = !0, !0;
        if (F === "is" && S !== null && S !== void 0 && typeof S != "string")
          return a("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof S), ft[h] = !0, !0;
        if (typeof S == "number" && isNaN(S))
          return a("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", h), ft[h] = !0, !0;
        var Be = V(h), tt = Be !== null && Be.type === D;
        if (We.hasOwnProperty(F)) {
          var ct = We[F];
          if (ct !== h)
            return a("Invalid DOM property `%s`. Did you mean `%s`?", h, ct), ft[h] = !0, !0;
        } else if (!tt && h !== F)
          return a("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", h, F), ft[h] = !0, !0;
        return typeof S == "boolean" && ae(h, S, Be, !1) ? (S ? a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', S, h, h, S, h) : a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', S, h, h, S, h, h, h), ft[h] = !0, !0) : tt ? !0 : ae(h, S, Be, !1) ? (ft[h] = !0, !1) : ((S === "false" || S === "true") && Be !== null && Be.type === U && (a("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", S, h, S === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', h, S), ft[h] = !0), !0);
      };
    }
    var Pt = function(l, h, S) {
      {
        var C = [];
        for (var F in h) {
          var Q = Fe(l, F, h[F], S);
          Q || C.push(F);
        }
        var ce = C.map(function(Ee) {
          return "`" + Ee + "`";
        }).join(", ");
        C.length === 1 ? a("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", ce, l) : C.length > 1 && a("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", ce, l);
      }
    };
    function on(l, h, S) {
      ie(l, h) || Pt(l, h, S);
    }
    var un = function() {
    };
    {
      var Ot = /^(?:webkit|moz|o)[A-Z]/, jt = /^-ms-/, Ft = /-(.)/g, nn = /;\s*$/, yn = {}, hn = {}, Rt = !1, Zt = !1, _e = function(l) {
        return l.replace(Ft, function(h, S) {
          return S.toUpperCase();
        });
      }, wn = function(l) {
        yn.hasOwnProperty(l) && yn[l] || (yn[l] = !0, a(
          "Unsupported style property %s. Did you mean %s?",
          l,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          _e(l.replace(jt, "ms-"))
        ));
      }, Lt = function(l) {
        yn.hasOwnProperty(l) && yn[l] || (yn[l] = !0, a("Unsupported vendor-prefixed style property %s. Did you mean %s?", l, l.charAt(0).toUpperCase() + l.slice(1)));
      }, vn = function(l, h) {
        hn.hasOwnProperty(h) && hn[h] || (hn[h] = !0, a(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, l, h.replace(nn, "")));
      }, It = function(l, h) {
        Rt || (Rt = !0, a("`NaN` is an invalid value for the `%s` css style property.", l));
      }, pn = function(l, h) {
        Zt || (Zt = !0, a("`Infinity` is an invalid value for the `%s` css style property.", l));
      };
      un = function(l, h) {
        l.indexOf("-") > -1 ? wn(l) : Ot.test(l) ? Lt(l) : nn.test(h) && vn(l, h), typeof h == "number" && (isNaN(h) ? It(l, h) : isFinite(h) || pn(l, h));
      };
    }
    var An = un, $n = /["'&<>]/;
    function Me(l) {
      _(l);
      var h = "" + l, S = $n.exec(h);
      if (!S)
        return h;
      var C, F = "", Q, ce = 0;
      for (Q = S.index; Q < h.length; Q++) {
        switch (h.charCodeAt(Q)) {
          case 34:
            C = "&quot;";
            break;
          case 38:
            C = "&amp;";
            break;
          case 39:
            C = "&#x27;";
            break;
          case 60:
            C = "&lt;";
            break;
          case 62:
            C = "&gt;";
            break;
          default:
            continue;
        }
        ce !== Q && (F += h.substring(ce, Q)), ce = Q + 1, F += C;
      }
      return ce !== Q ? F + h.substring(ce, Q) : F;
    }
    function Xe(l) {
      return typeof l == "boolean" || typeof l == "number" ? "" + l : Me(l);
    }
    var Tt = /([A-Z])/g, nt = /^ms-/;
    function zt(l) {
      return l.replace(Tt, "-$1").toLowerCase().replace(nt, "-ms-");
    }
    var _t = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Tn = !1;
    function Wn(l) {
      !Tn && _t.test(l) && (Tn = !0, a("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(l)));
    }
    var Y = Array.isArray;
    function $e(l) {
      return Y(l);
    }
    var et = "<script>", Ve = "<\/script>", pt = '<script src="', ot = '<script type="module" src="', bt = '" async=""><\/script>';
    function mt(l) {
      return _(l), ("" + l).replace(qe, Ut);
    }
    var qe = /(<\/|<)(s)(cript)/gi, Ut = function(l, h, S, C) {
      return "" + h + (S === "s" ? "\\u0073" : "\\u0053") + C;
    };
    function Qt(l, h, S, C, F) {
      var Q = l === void 0 ? "" : l, ce = h === void 0 ? et : '<script nonce="' + Xe(h) + '">', Ee = [];
      if (S !== void 0 && Ee.push(ce, mt(S), Ve), C !== void 0)
        for (var Be = 0; Be < C.length; Be++)
          Ee.push(pt, Xe(C[Be]), bt);
      if (F !== void 0)
        for (var tt = 0; tt < F.length; tt++)
          Ee.push(ot, Xe(F[tt]), bt);
      return {
        bootstrapChunks: Ee,
        startInlineScript: ce,
        placeholderPrefix: Q + "P:",
        segmentPrefix: Q + "S:",
        boundaryPrefix: Q + "B:",
        idPrefix: Q,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var cn = 0, Jt = 1, Kt = 2, $t = 3, Bt = 4, xt = 5, mn = 6, Sn = 7;
    function Ht(l, h) {
      return {
        insertionMode: l,
        selectedValue: h
      };
    }
    function En(l, h, S) {
      switch (h) {
        case "select":
          return Ht(Jt, S.value != null ? S.value : S.defaultValue);
        case "svg":
          return Ht(Kt, null);
        case "math":
          return Ht($t, null);
        case "foreignObject":
          return Ht(Jt, null);
        case "table":
          return Ht(Bt, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return Ht(xt, null);
        case "colgroup":
          return Ht(Sn, null);
        case "tr":
          return Ht(mn, null);
      }
      return l.insertionMode >= Bt || l.insertionMode === cn ? Ht(Jt, null) : l;
    }
    var xn = null;
    function Xt(l) {
      var h = l.nextSuspenseID++;
      return l.boundaryPrefix + h.toString(16);
    }
    function en(l, h, S) {
      var C = l.idPrefix, F = ":" + C + "R" + h;
      return S > 0 && (F += "H" + S.toString(32)), F + ":";
    }
    function Bn(l) {
      return Xe(l);
    }
    var Vn = "<!-- -->";
    function or(l, h, S, C) {
      return h === "" ? C : (C && l.push(Vn), l.push(Bn(h)), !0);
    }
    function Zn(l, h, S, C) {
      S && C && l.push(Vn);
    }
    var sn = /* @__PURE__ */ new Map();
    function Ln(l) {
      var h = sn.get(l);
      if (h !== void 0)
        return h;
      var S = Xe(zt(l));
      return sn.set(l, S), S;
    }
    var Ar = ' style="', hr = ":", pr = ";";
    function x(l, h, S) {
      if (typeof S != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var C = !0;
      for (var F in S)
        if (N.call(S, F)) {
          var Q = S[F];
          if (!(Q == null || typeof Q == "boolean" || Q === "")) {
            var ce = void 0, Ee = void 0, Be = F.indexOf("--") === 0;
            Be ? (ce = Xe(F), O(Q, F), Ee = Xe(("" + Q).trim())) : (An(F, Q), ce = Ln(F), typeof Q == "number" ? Q !== 0 && !N.call(ze, F) ? Ee = Q + "px" : Ee = "" + Q : (O(Q, F), Ee = Xe(("" + Q).trim()))), C ? (C = !1, l.push(Ar, ce, hr, Ee)) : l.push(pr, ce, hr, Ee);
          }
        }
      C || l.push(X);
    }
    var A = " ", $ = '="', X = '"', be = '=""';
    function ye(l, h, S, C) {
      switch (S) {
        case "style": {
          x(l, h, C);
          return;
        }
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (
        // shouldIgnoreAttribute
        // We have already filtered out null/undefined and reserved words.
        !(S.length > 2 && (S[0] === "o" || S[0] === "O") && (S[1] === "n" || S[1] === "N"))
      ) {
        var F = V(S);
        if (F !== null) {
          switch (typeof C) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!F.acceptsBooleans)
                return;
          }
          var Q = F.attributeName, ce = Q;
          switch (F.type) {
            case U:
              C && l.push(A, ce, be);
              return;
            case q:
              C === !0 ? l.push(A, ce, be) : C === !1 || l.push(A, ce, $, Xe(C), X);
              return;
            case K:
              isNaN(C) || l.push(A, ce, $, Xe(C), X);
              break;
            case j:
              !isNaN(C) && C >= 1 && l.push(A, ce, $, Xe(C), X);
              break;
            default:
              F.sanitizeURL && (R(C, Q), C = "" + C, Wn(C)), l.push(A, ce, $, Xe(C), X);
          }
        } else if (fe(S)) {
          switch (typeof C) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var Ee = S.toLowerCase().slice(0, 5);
              if (Ee !== "data-" && Ee !== "aria-")
                return;
            }
          }
          l.push(A, S, $, Xe(C), X);
        }
      }
    }
    var Te = ">", je = "/>";
    function lt(l, h, S) {
      if (h != null) {
        if (S != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof h != "object" || !("__html" in h))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var C = h.__html;
        C != null && (_(C), l.push("" + C));
      }
    }
    var gt = !1, dt = !1, Nt = !1, On = !1, Pn = !1, Rn = !1, ne = !1;
    function J(l, h) {
      {
        var S = l[h];
        if (S != null) {
          var C = $e(S);
          l.multiple && !C ? a("The `%s` prop supplied to <select> must be an array if `multiple` is true.", h) : !l.multiple && C && a("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", h);
        }
      }
    }
    function de(l, h, S) {
      Oe("select", h), J(h, "value"), J(h, "defaultValue"), h.value !== void 0 && h.defaultValue !== void 0 && !Nt && (a("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Nt = !0), l.push(Un("select"));
      var C = null, F = null;
      for (var Q in h)
        if (N.call(h, Q)) {
          var ce = h[Q];
          if (ce == null)
            continue;
          switch (Q) {
            case "children":
              C = ce;
              break;
            case "dangerouslySetInnerHTML":
              F = ce;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ye(l, S, Q, ce);
              break;
          }
        }
      return l.push(Te), lt(l, F, C), C;
    }
    function Re(l) {
      var h = "";
      return e.Children.forEach(l, function(S) {
        S != null && (h += S, !Pn && typeof S != "string" && typeof S != "number" && (Pn = !0, a("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), h;
    }
    var Mt = ' selected=""';
    function qt(l, h, S, C) {
      var F = C.selectedValue;
      l.push(Un("option"));
      var Q = null, ce = null, Ee = null, Be = null;
      for (var tt in h)
        if (N.call(h, tt)) {
          var ct = h[tt];
          if (ct == null)
            continue;
          switch (tt) {
            case "children":
              Q = ct;
              break;
            case "selected":
              Ee = ct, ne || (a("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ne = !0);
              break;
            case "dangerouslySetInnerHTML":
              Be = ct;
              break;
            case "value":
              ce = ct;
            default:
              ye(l, S, tt, ct);
              break;
          }
        }
      if (F != null) {
        var St;
        if (ce !== null ? (R(ce, "value"), St = "" + ce) : (Be !== null && (Rn || (Rn = !0, a("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), St = Re(Q)), $e(F))
          for (var dn = 0; dn < F.length; dn++) {
            R(F[dn], "value");
            var Hn = "" + F[dn];
            if (Hn === St) {
              l.push(Mt);
              break;
            }
          }
        else
          R(F, "select.value"), "" + F === St && l.push(Mt);
      } else
        Ee && l.push(Mt);
      return l.push(Te), lt(l, Be, Q), Q;
    }
    function Mn(l, h, S) {
      Oe("input", h), h.checked !== void 0 && h.defaultChecked !== void 0 && !dt && (a("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", h.type), dt = !0), h.value !== void 0 && h.defaultValue !== void 0 && !gt && (a("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", h.type), gt = !0), l.push(Un("input"));
      var C = null, F = null, Q = null, ce = null;
      for (var Ee in h)
        if (N.call(h, Ee)) {
          var Be = h[Ee];
          if (Be == null)
            continue;
          switch (Ee) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              ce = Be;
              break;
            case "defaultValue":
              F = Be;
              break;
            case "checked":
              Q = Be;
              break;
            case "value":
              C = Be;
              break;
            default:
              ye(l, S, Ee, Be);
              break;
          }
        }
      return Q !== null ? ye(l, S, "checked", Q) : ce !== null && ye(l, S, "checked", ce), C !== null ? ye(l, S, "value", C) : F !== null && ye(l, S, "value", F), l.push(je), null;
    }
    function Pr(l, h, S) {
      Oe("textarea", h), h.value !== void 0 && h.defaultValue !== void 0 && !On && (a("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), On = !0), l.push(Un("textarea"));
      var C = null, F = null, Q = null;
      for (var ce in h)
        if (N.call(h, ce)) {
          var Ee = h[ce];
          if (Ee == null)
            continue;
          switch (ce) {
            case "children":
              Q = Ee;
              break;
            case "value":
              C = Ee;
              break;
            case "defaultValue":
              F = Ee;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              ye(l, S, ce, Ee);
              break;
          }
        }
      if (C === null && F !== null && (C = F), l.push(Te), Q != null) {
        if (a("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), C != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if ($e(Q)) {
          if (Q.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          _(Q[0]), C = "" + Q[0];
        }
        _(Q), C = "" + Q;
      }
      return typeof C == "string" && C[0] === `
` && l.push(Jr), C !== null && (R(C, "value"), l.push(Bn("" + C))), null;
    }
    function il(l, h, S, C) {
      l.push(Un(S));
      for (var F in h)
        if (N.call(h, F)) {
          var Q = h[F];
          if (Q == null)
            continue;
          switch (F) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(S + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              ye(l, C, F, Q);
              break;
          }
        }
      return l.push(je), null;
    }
    function Ka(l, h, S) {
      l.push(Un("menuitem"));
      for (var C in h)
        if (N.call(h, C)) {
          var F = h[C];
          if (F == null)
            continue;
          switch (C) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              ye(l, S, C, F);
              break;
          }
        }
      return l.push(Te), null;
    }
    function ol(l, h, S) {
      l.push(Un("title"));
      var C = null;
      for (var F in h)
        if (N.call(h, F)) {
          var Q = h[F];
          if (Q == null)
            continue;
          switch (F) {
            case "children":
              C = Q;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              ye(l, S, F, Q);
              break;
          }
        }
      l.push(Te);
      {
        var ce = Array.isArray(C) && C.length < 2 ? C[0] || null : C;
        Array.isArray(C) && C.length > 1 ? a("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : ce != null && ce.$$typeof != null ? a("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : ce != null && typeof ce != "string" && typeof ce != "number" && a("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return C;
    }
    function Ya(l, h, S, C) {
      l.push(Un(S));
      var F = null, Q = null;
      for (var ce in h)
        if (N.call(h, ce)) {
          var Ee = h[ce];
          if (Ee == null)
            continue;
          switch (ce) {
            case "children":
              F = Ee;
              break;
            case "dangerouslySetInnerHTML":
              Q = Ee;
              break;
            default:
              ye(l, C, ce, Ee);
              break;
          }
        }
      return l.push(Te), lt(l, Q, F), typeof F == "string" ? (l.push(Bn(F)), null) : F;
    }
    function mr(l, h, S, C) {
      l.push(Un(S));
      var F = null, Q = null;
      for (var ce in h)
        if (N.call(h, ce)) {
          var Ee = h[ce];
          if (Ee == null)
            continue;
          switch (ce) {
            case "children":
              F = Ee;
              break;
            case "dangerouslySetInnerHTML":
              Q = Ee;
              break;
            case "style":
              x(l, C, Ee);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              fe(ce) && typeof Ee != "function" && typeof Ee != "symbol" && l.push(A, ce, $, Xe(Ee), X);
              break;
          }
        }
      return l.push(Te), lt(l, Q, F), F;
    }
    var Jr = `
`;
    function pa(l, h, S, C) {
      l.push(Un(S));
      var F = null, Q = null;
      for (var ce in h)
        if (N.call(h, ce)) {
          var Ee = h[ce];
          if (Ee == null)
            continue;
          switch (ce) {
            case "children":
              F = Ee;
              break;
            case "dangerouslySetInnerHTML":
              Q = Ee;
              break;
            default:
              ye(l, C, ce, Ee);
              break;
          }
        }
      if (l.push(Te), Q != null) {
        if (F != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof Q != "object" || !("__html" in Q))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var Be = Q.__html;
        Be != null && (typeof Be == "string" && Be.length > 0 && Be[0] === `
` ? l.push(Jr, Be) : (_(Be), l.push("" + Be)));
      }
      return typeof F == "string" && F[0] === `
` && l.push(Jr), F;
    }
    var rn = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, vr = /* @__PURE__ */ new Map();
    function Un(l) {
      var h = vr.get(l);
      if (h === void 0) {
        if (!rn.test(l))
          throw new Error("Invalid tag: " + l);
        h = "<" + l, vr.set(l, h);
      }
      return h;
    }
    var Rr = "<!DOCTYPE html>";
    function xr(l, h, S, C, F) {
      switch (it(h, S), Ge(h, S), on(h, S, null), !S.suppressContentEditableWarning && S.contentEditable && S.children != null && a("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), F.insertionMode !== Kt && F.insertionMode !== $t && h.indexOf("-") === -1 && typeof S.is != "string" && h.toLowerCase() !== h && a("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", h), h) {
        case "select":
          return de(l, S, C);
        case "option":
          return qt(l, S, C, F);
        case "textarea":
          return Pr(l, S, C);
        case "input":
          return Mn(l, S, C);
        case "menuitem":
          return Ka(l, S, C);
        case "title":
          return ol(l, S, C);
        case "listing":
        case "pre":
          return pa(l, S, h, C);
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return il(l, S, h, C);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return Ya(l, S, h, C);
        case "html":
          return F.insertionMode === cn && l.push(Rr), Ya(l, S, h, C);
        default:
          return h.indexOf("-") === -1 && typeof S.is != "string" ? Ya(l, S, h, C) : mr(l, S, h, C);
      }
    }
    var ma = "</", br = ">";
    function Qn(l, h, S) {
      switch (h) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          l.push(ma, h, br);
      }
    }
    function Xa(l, h) {
      for (var S = h.bootstrapChunks, C = 0; C < S.length - 1; C++)
        c(l, S[C]);
      return C < S.length ? d(l, S[C]) : !0;
    }
    var qa = '<template id="', ji = '"></template>';
    function Ui(l, h, S) {
      c(l, qa), c(l, h.placeholderPrefix);
      var C = S.toString(16);
      return c(l, C), d(l, ji);
    }
    var Ki = "<!--$-->", ll = '<!--$?--><template id="', sl = '"></template>', ga = "<!--$!-->", ya = "<!--/$-->", va = "<template", ea = '"', ul = ' data-dgst="', ta = ' data-msg="', Ga = ' data-stck="', Za = "></template>";
    function $r(l, h) {
      return d(l, Ki);
    }
    function Br(l, h, S) {
      if (c(l, ll), S === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return c(l, S), d(l, sl);
    }
    function xa(l, h, S, C, F) {
      var Q;
      return Q = d(l, ga), c(l, va), S && (c(l, ul), c(l, Xe(S)), c(l, ea)), C && (c(l, ta), c(l, Xe(C)), c(l, ea)), F && (c(l, Ga), c(l, Xe(F)), c(l, ea)), Q = d(l, Za), Q;
    }
    function Yi(l, h) {
      return d(l, ya);
    }
    function Qa(l, h) {
      return d(l, ya);
    }
    function Xi(l, h) {
      return d(l, ya);
    }
    var ba = '<div hidden id="', Kn = '">', qi = "</div>", Sa = '<svg aria-hidden="true" style="display:none" id="', cl = '">', Gi = "</svg>", Ea = '<math aria-hidden="true" style="display:none" id="', Zi = '">', Qi = "</math>", ka = '<table hidden id="', wa = '">', Ji = "</table>", eo = '<table hidden><tbody id="', to = '">', Ja = "</tbody></table>", no = '<table hidden><tr id="', b = '">', P = "</tr></table>", z = '<table hidden><colgroup id="', G = '">', Se = "</colgroup></table>";
    function ve(l, h, S, C) {
      switch (S.insertionMode) {
        case cn:
        case Jt:
          return c(l, ba), c(l, h.segmentPrefix), c(l, C.toString(16)), d(l, Kn);
        case Kt:
          return c(l, Sa), c(l, h.segmentPrefix), c(l, C.toString(16)), d(l, cl);
        case $t:
          return c(l, Ea), c(l, h.segmentPrefix), c(l, C.toString(16)), d(l, Zi);
        case Bt:
          return c(l, ka), c(l, h.segmentPrefix), c(l, C.toString(16)), d(l, wa);
        case xt:
          return c(l, eo), c(l, h.segmentPrefix), c(l, C.toString(16)), d(l, to);
        case mn:
          return c(l, no), c(l, h.segmentPrefix), c(l, C.toString(16)), d(l, b);
        case Sn:
          return c(l, z), c(l, h.segmentPrefix), c(l, C.toString(16)), d(l, G);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Ne(l, h) {
      switch (h.insertionMode) {
        case cn:
        case Jt:
          return d(l, qi);
        case Kt:
          return d(l, Gi);
        case $t:
          return d(l, Qi);
        case Bt:
          return d(l, Ji);
        case xt:
          return d(l, Ja);
        case mn:
          return d(l, P);
        case Sn:
          return d(l, Se);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Ue = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", vt = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', Dt = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', At = Ue + ';$RS("', ln = '$RS("', Yn = '","', Jn = '")<\/script>';
    function er(l, h, S) {
      c(l, h.startInlineScript), h.sentCompleteSegmentFunction ? c(l, ln) : (h.sentCompleteSegmentFunction = !0, c(l, At)), c(l, h.segmentPrefix);
      var C = S.toString(16);
      return c(l, C), c(l, Yn), c(l, h.placeholderPrefix), c(l, C), d(l, Jn);
    }
    var Ta = vt + ';$RC("', ro = '$RC("', ei = '","', _c = '")<\/script>';
    function Nc(l, h, S, C) {
      if (c(l, h.startInlineScript), h.sentCompleteBoundaryFunction ? c(l, ro) : (h.sentCompleteBoundaryFunction = !0, c(l, Ta)), S === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var F = C.toString(16);
      return c(l, S), c(l, ei), c(l, h.segmentPrefix), c(l, F), d(l, _c);
    }
    var Fc = Dt + ';$RX("', zc = '$RX("', $c = '"', Bc = ")<\/script>", dl = ",";
    function Ic(l, h, S, C, F, Q) {
      if (c(l, h.startInlineScript), h.sentClientRenderFunction ? c(l, zc) : (h.sentClientRenderFunction = !0, c(l, Fc)), S === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return c(l, S), c(l, $c), (C || F || Q) && (c(l, dl), c(l, fl(C || ""))), (F || Q) && (c(l, dl), c(l, fl(F || ""))), Q && (c(l, dl), c(l, fl(Q))), d(l, Bc);
    }
    var Hc = /[<\u2028\u2029]/g;
    function fl(l) {
      var h = JSON.stringify(l);
      return h.replace(Hc, function(S) {
        switch (S) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    function Wc(l, h) {
      var S = Qt(h, void 0);
      return {
        // Keep this in sync with ReactDOMServerFormatConfig
        bootstrapChunks: S.bootstrapChunks,
        startInlineScript: S.startInlineScript,
        placeholderPrefix: S.placeholderPrefix,
        segmentPrefix: S.segmentPrefix,
        boundaryPrefix: S.boundaryPrefix,
        idPrefix: S.idPrefix,
        nextSuspenseID: S.nextSuspenseID,
        sentCompleteSegmentFunction: S.sentCompleteSegmentFunction,
        sentCompleteBoundaryFunction: S.sentCompleteBoundaryFunction,
        sentClientRenderFunction: S.sentClientRenderFunction,
        // This is an extra field for the legacy renderer
        generateStaticMarkup: l
      };
    }
    function hl() {
      return {
        insertionMode: Jt,
        // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
        selectedValue: null
      };
    }
    function Os(l, h, S, C) {
      return S.generateStaticMarkup ? (l.push(Xe(h)), !1) : or(l, h, S, C);
    }
    function Ms(l, h, S, C) {
      if (!h.generateStaticMarkup)
        return Zn(l, h, S, C);
    }
    function pl(l, h) {
      return h.generateStaticMarkup ? !0 : $r(l);
    }
    function lr(l, h, S, C, F) {
      return h.generateStaticMarkup ? !0 : xa(l, h, S, C, F);
    }
    function Vc(l, h) {
      return h.generateStaticMarkup ? !0 : Yi(l);
    }
    function _s(l, h) {
      return h.generateStaticMarkup ? !0 : Xi(l);
    }
    var tr = Object.assign, Ns = Symbol.for("react.element"), ml = Symbol.for("react.portal"), ao = Symbol.for("react.fragment"), io = Symbol.for("react.strict_mode"), oo = Symbol.for("react.profiler"), ti = Symbol.for("react.provider"), ni = Symbol.for("react.context"), ri = Symbol.for("react.forward_ref"), Ca = Symbol.for("react.suspense"), gl = Symbol.for("react.suspense_list"), yl = Symbol.for("react.memo"), lo = Symbol.for("react.lazy"), jc = Symbol.for("react.scope"), Fs = Symbol.for("react.debug_trace_mode"), Uc = Symbol.for("react.legacy_hidden"), Kc = Symbol.for("react.default_value"), zs = Symbol.iterator, $s = "@@iterator";
    function bn(l) {
      if (l === null || typeof l != "object")
        return null;
      var h = zs && l[zs] || l[$s];
      return typeof h == "function" ? h : null;
    }
    function ai(l, h, S) {
      var C = l.displayName;
      if (C)
        return C;
      var F = h.displayName || h.name || "";
      return F !== "" ? S + "(" + F + ")" : S;
    }
    function vl(l) {
      return l.displayName || "Context";
    }
    function gn(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && a("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
        return l.displayName || l.name || null;
      if (typeof l == "string")
        return l;
      switch (l) {
        case ao:
          return "Fragment";
        case ml:
          return "Portal";
        case oo:
          return "Profiler";
        case io:
          return "StrictMode";
        case Ca:
          return "Suspense";
        case gl:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case ni:
            var h = l;
            return vl(h) + ".Consumer";
          case ti:
            var S = l;
            return vl(S._context) + ".Provider";
          case ri:
            return ai(l, l.render, "ForwardRef");
          case yl:
            var C = l.displayName || null;
            return C !== null ? C : gn(l.type) || "Memo";
          case lo: {
            var F = l, Q = F._payload, ce = F._init;
            try {
              return gn(ce(Q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Aa = 0, xl, bl, Sl, El, kl, Bs, Is;
    function so() {
    }
    so.__reactDisabledLog = !0;
    function wl() {
      {
        if (Aa === 0) {
          xl = console.log, bl = console.info, Sl = console.warn, El = console.error, kl = console.group, Bs = console.groupCollapsed, Is = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: so,
            writable: !0
          };
          Object.defineProperties(console, {
            info: l,
            log: l,
            warn: l,
            error: l,
            group: l,
            groupCollapsed: l,
            groupEnd: l
          });
        }
        Aa++;
      }
    }
    function ii() {
      {
        if (Aa--, Aa === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: tr({}, l, {
              value: xl
            }),
            info: tr({}, l, {
              value: bl
            }),
            warn: tr({}, l, {
              value: Sl
            }),
            error: tr({}, l, {
              value: El
            }),
            group: tr({}, l, {
              value: kl
            }),
            groupCollapsed: tr({}, l, {
              value: Bs
            }),
            groupEnd: tr({}, l, {
              value: Is
            })
          });
        }
        Aa < 0 && a("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var oi = r.ReactCurrentDispatcher, Pa;
    function li(l, h, S) {
      {
        if (Pa === void 0)
          try {
            throw Error();
          } catch (F) {
            var C = F.stack.trim().match(/\n( *(at )?)/);
            Pa = C && C[1] || "";
          }
        return `
` + Pa + l;
      }
    }
    var si = !1, uo;
    {
      var Hs = typeof WeakMap == "function" ? WeakMap : Map;
      uo = new Hs();
    }
    function Tl(l, h) {
      if (!l || si)
        return "";
      {
        var S = uo.get(l);
        if (S !== void 0)
          return S;
      }
      var C;
      si = !0;
      var F = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Q;
      Q = oi.current, oi.current = null, wl();
      try {
        if (h) {
          var ce = function() {
            throw Error();
          };
          if (Object.defineProperty(ce.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ce, []);
            } catch (dr) {
              C = dr;
            }
            Reflect.construct(l, [], ce);
          } else {
            try {
              ce.call();
            } catch (dr) {
              C = dr;
            }
            l.call(ce.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (dr) {
            C = dr;
          }
          l();
        }
      } catch (dr) {
        if (dr && C && typeof dr.stack == "string") {
          for (var Ee = dr.stack.split(`
`), Be = C.stack.split(`
`), tt = Ee.length - 1, ct = Be.length - 1; tt >= 1 && ct >= 0 && Ee[tt] !== Be[ct]; )
            ct--;
          for (; tt >= 1 && ct >= 0; tt--, ct--)
            if (Ee[tt] !== Be[ct]) {
              if (tt !== 1 || ct !== 1)
                do
                  if (tt--, ct--, ct < 0 || Ee[tt] !== Be[ct]) {
                    var St = `
` + Ee[tt].replace(" at new ", " at ");
                    return l.displayName && St.includes("<anonymous>") && (St = St.replace("<anonymous>", l.displayName)), typeof l == "function" && uo.set(l, St), St;
                  }
                while (tt >= 1 && ct >= 0);
              break;
            }
        }
      } finally {
        si = !1, oi.current = Q, ii(), Error.prepareStackTrace = F;
      }
      var dn = l ? l.displayName || l.name : "", Hn = dn ? li(dn) : "";
      return typeof l == "function" && uo.set(l, Hn), Hn;
    }
    function Cl(l, h, S) {
      return Tl(l, !0);
    }
    function Al(l, h, S) {
      return Tl(l, !1);
    }
    function Ws(l) {
      var h = l.prototype;
      return !!(h && h.isReactComponent);
    }
    function Ra(l, h, S) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return Tl(l, Ws(l));
      if (typeof l == "string")
        return li(l);
      switch (l) {
        case Ca:
          return li("Suspense");
        case gl:
          return li("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case ri:
            return Al(l.render);
          case yl:
            return Ra(l.type, h, S);
          case lo: {
            var C = l, F = C._payload, Q = C._init;
            try {
              return Ra(Q(F), h, S);
            } catch {
            }
          }
        }
      return "";
    }
    var Pl = {}, co = r.ReactDebugCurrentFrame;
    function na(l) {
      if (l) {
        var h = l._owner, S = Ra(l.type, l._source, h ? h.type : null);
        co.setExtraStackFrame(S);
      } else
        co.setExtraStackFrame(null);
    }
    function Rl(l, h, S, C, F) {
      {
        var Q = Function.call.bind(N);
        for (var ce in l)
          if (Q(l, ce)) {
            var Ee = void 0;
            try {
              if (typeof l[ce] != "function") {
                var Be = Error((C || "React class") + ": " + S + " type `" + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[ce] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Be.name = "Invariant Violation", Be;
              }
              Ee = l[ce](h, ce, C, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (tt) {
              Ee = tt;
            }
            Ee && !(Ee instanceof Error) && (na(F), a("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", C || "React class", S, ce, typeof Ee), na(null)), Ee instanceof Error && !(Ee.message in Pl) && (Pl[Ee.message] = !0, na(F), a("Failed %s type: %s", S, Ee.message), na(null));
          }
      }
    }
    var Ll;
    Ll = {};
    var Ir = {};
    Object.freeze(Ir);
    function Vs(l, h) {
      {
        var S = l.contextTypes;
        if (!S)
          return Ir;
        var C = {};
        for (var F in S)
          C[F] = h[F];
        {
          var Q = gn(l) || "Unknown";
          Rl(S, C, "context", Q);
        }
        return C;
      }
    }
    function ra(l, h, S, C) {
      {
        if (typeof l.getChildContext != "function") {
          {
            var F = gn(h) || "Unknown";
            Ll[F] || (Ll[F] = !0, a("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", F, F));
          }
          return S;
        }
        var Q = l.getChildContext();
        for (var ce in Q)
          if (!(ce in C))
            throw new Error((gn(h) || "Unknown") + '.getChildContext(): key "' + ce + '" is not defined in childContextTypes.');
        {
          var Ee = gn(h) || "Unknown";
          Rl(C, Q, "child context", Ee);
        }
        return tr({}, S, Q);
      }
    }
    var aa;
    aa = {};
    var Dl = null, Sr = null;
    function fo(l) {
      l.context._currentValue2 = l.parentValue;
    }
    function ho(l) {
      l.context._currentValue2 = l.value;
    }
    function ui(l, h) {
      if (l !== h) {
        fo(l);
        var S = l.parent, C = h.parent;
        if (S === null) {
          if (C !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (C === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          ui(S, C);
        }
        ho(h);
      }
    }
    function Ol(l) {
      fo(l);
      var h = l.parent;
      h !== null && Ol(h);
    }
    function ci(l) {
      var h = l.parent;
      h !== null && ci(h), ho(l);
    }
    function js(l, h) {
      fo(l);
      var S = l.parent;
      if (S === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      S.depth === h.depth ? ui(S, h) : js(S, h);
    }
    function Us(l, h) {
      var S = h.parent;
      if (S === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      l.depth === S.depth ? ui(l, S) : Us(l, S), ho(h);
    }
    function po(l) {
      var h = Sr, S = l;
      h !== S && (h === null ? ci(S) : S === null ? Ol(h) : h.depth === S.depth ? ui(h, S) : h.depth > S.depth ? js(h, S) : Us(h, S), Sr = S);
    }
    function di(l, h) {
      var S;
      S = l._currentValue2, l._currentValue2 = h, l._currentRenderer2 !== void 0 && l._currentRenderer2 !== null && l._currentRenderer2 !== aa && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), l._currentRenderer2 = aa;
      var C = Sr, F = {
        parent: C,
        depth: C === null ? 0 : C.depth + 1,
        context: l,
        parentValue: S,
        value: h
      };
      return Sr = F, F;
    }
    function Ml(l) {
      var h = Sr;
      if (h === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      h.context !== l && a("The parent context is not the expected context. This is probably a bug in React.");
      {
        var S = h.parentValue;
        S === Kc ? h.context._currentValue2 = h.context._defaultValue : h.context._currentValue2 = S, l._currentRenderer2 !== void 0 && l._currentRenderer2 !== null && l._currentRenderer2 !== aa && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), l._currentRenderer2 = aa;
      }
      return Sr = h.parent;
    }
    function Yc() {
      return Sr;
    }
    function La(l) {
      var h = l._currentValue2;
      return h;
    }
    function mo(l) {
      return l._reactInternals;
    }
    function _l(l, h) {
      l._reactInternals = h;
    }
    var go = {}, yo = {}, fi, vo, Da, hi, xo, Oa, bo, So, Eo;
    {
      fi = /* @__PURE__ */ new Set(), vo = /* @__PURE__ */ new Set(), Da = /* @__PURE__ */ new Set(), bo = /* @__PURE__ */ new Set(), hi = /* @__PURE__ */ new Set(), So = /* @__PURE__ */ new Set(), Eo = /* @__PURE__ */ new Set();
      var Ks = /* @__PURE__ */ new Set();
      Oa = function(l, h) {
        if (!(l === null || typeof l == "function")) {
          var S = h + "_" + l;
          Ks.has(S) || (Ks.add(S), a("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", h, l));
        }
      }, xo = function(l, h) {
        if (h === void 0) {
          var S = gn(l) || "Component";
          hi.has(S) || (hi.add(S), a("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", S));
        }
      };
    }
    function Ys(l, h) {
      {
        var S = l.constructor, C = S && gn(S) || "ReactClass", F = C + "." + h;
        if (go[F])
          return;
        a(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, h, h, C), go[F] = !0;
      }
    }
    var Xs = {
      isMounted: function(l) {
        return !1;
      },
      enqueueSetState: function(l, h, S) {
        var C = mo(l);
        C.queue === null ? Ys(l, "setState") : (C.queue.push(h), S != null && Oa(S, "setState"));
      },
      enqueueReplaceState: function(l, h, S) {
        var C = mo(l);
        C.replace = !0, C.queue = [h], S != null && Oa(S, "setState");
      },
      enqueueForceUpdate: function(l, h) {
        var S = mo(l);
        S.queue === null ? Ys(l, "forceUpdate") : h != null && Oa(h, "setState");
      }
    };
    function Xc(l, h, S, C, F) {
      var Q = S(F, C);
      xo(h, Q);
      var ce = Q == null ? C : tr({}, C, Q);
      return ce;
    }
    function qc(l, h, S) {
      var C = Ir, F = l.contextType;
      if ("contextType" in l) {
        var Q = (
          // Allow null for conditional declaration
          F === null || F !== void 0 && F.$$typeof === ni && F._context === void 0
        );
        if (!Q && !Eo.has(l)) {
          Eo.add(l);
          var ce = "";
          F === void 0 ? ce = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof F != "object" ? ce = " However, it is set to a " + typeof F + "." : F.$$typeof === ti ? ce = " Did you accidentally pass the Context.Provider instead?" : F._context !== void 0 ? ce = " Did you accidentally pass the Context.Consumer instead?" : ce = " However, it is set to an object with keys {" + Object.keys(F).join(", ") + "}.", a("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", gn(l) || "Component", ce);
        }
      }
      typeof F == "object" && F !== null ? C = La(F) : C = S;
      var Ee = new l(h, C);
      {
        if (typeof l.getDerivedStateFromProps == "function" && (Ee.state === null || Ee.state === void 0)) {
          var Be = gn(l) || "Component";
          fi.has(Be) || (fi.add(Be), a("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", Be, Ee.state === null ? "null" : "undefined", Be));
        }
        if (typeof l.getDerivedStateFromProps == "function" || typeof Ee.getSnapshotBeforeUpdate == "function") {
          var tt = null, ct = null, St = null;
          if (typeof Ee.componentWillMount == "function" && Ee.componentWillMount.__suppressDeprecationWarning !== !0 ? tt = "componentWillMount" : typeof Ee.UNSAFE_componentWillMount == "function" && (tt = "UNSAFE_componentWillMount"), typeof Ee.componentWillReceiveProps == "function" && Ee.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? ct = "componentWillReceiveProps" : typeof Ee.UNSAFE_componentWillReceiveProps == "function" && (ct = "UNSAFE_componentWillReceiveProps"), typeof Ee.componentWillUpdate == "function" && Ee.componentWillUpdate.__suppressDeprecationWarning !== !0 ? St = "componentWillUpdate" : typeof Ee.UNSAFE_componentWillUpdate == "function" && (St = "UNSAFE_componentWillUpdate"), tt !== null || ct !== null || St !== null) {
            var dn = gn(l) || "Component", Hn = typeof l.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Da.has(dn) || (Da.add(dn), a(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, dn, Hn, tt !== null ? `
  ` + tt : "", ct !== null ? `
  ` + ct : "", St !== null ? `
  ` + St : ""));
          }
        }
      }
      return Ee;
    }
    function qs(l, h, S) {
      {
        var C = gn(h) || "Component", F = l.render;
        F || (h.prototype && typeof h.prototype.render == "function" ? a("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", C) : a("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", C)), l.getInitialState && !l.getInitialState.isReactClassApproved && !l.state && a("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", C), l.getDefaultProps && !l.getDefaultProps.isReactClassApproved && a("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", C), l.propTypes && a("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", C), l.contextType && a("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", C), l.contextTypes && a("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", C), h.contextType && h.contextTypes && !So.has(h) && (So.add(h), a("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", C)), typeof l.componentShouldUpdate == "function" && a("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", C), h.prototype && h.prototype.isPureReactComponent && typeof l.shouldComponentUpdate < "u" && a("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", gn(h) || "A pure component"), typeof l.componentDidUnmount == "function" && a("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", C), typeof l.componentDidReceiveProps == "function" && a("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", C), typeof l.componentWillRecieveProps == "function" && a("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", C), typeof l.UNSAFE_componentWillRecieveProps == "function" && a("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", C);
        var Q = l.props !== S;
        l.props !== void 0 && Q && a("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", C, C), l.defaultProps && a("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", C, C), typeof l.getSnapshotBeforeUpdate == "function" && typeof l.componentDidUpdate != "function" && !vo.has(h) && (vo.add(h), a("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", gn(h))), typeof l.getDerivedStateFromProps == "function" && a("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", C), typeof l.getDerivedStateFromError == "function" && a("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", C), typeof h.getSnapshotBeforeUpdate == "function" && a("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", C);
        var ce = l.state;
        ce && (typeof ce != "object" || $e(ce)) && a("%s.state: must be set to an object or null", C), typeof l.getChildContext == "function" && typeof h.childContextTypes != "object" && a("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", C);
      }
    }
    function Gc(l, h) {
      var S = h.state;
      if (typeof h.componentWillMount == "function") {
        if (h.componentWillMount.__suppressDeprecationWarning !== !0) {
          var C = gn(l) || "Unknown";
          yo[C] || (n(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            C
          ), yo[C] = !0);
        }
        h.componentWillMount();
      }
      typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), S !== h.state && (a("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", gn(l) || "Component"), Xs.enqueueReplaceState(h, h.state, null));
    }
    function Zc(l, h, S, C) {
      if (l.queue !== null && l.queue.length > 0) {
        var F = l.queue, Q = l.replace;
        if (l.queue = null, l.replace = !1, Q && F.length === 1)
          h.state = F[0];
        else {
          for (var ce = Q ? F[0] : h.state, Ee = !0, Be = Q ? 1 : 0; Be < F.length; Be++) {
            var tt = F[Be], ct = typeof tt == "function" ? tt.call(h, ce, S, C) : tt;
            ct != null && (Ee ? (Ee = !1, ce = tr({}, ce, ct)) : tr(ce, ct));
          }
          h.state = ce;
        }
      } else
        l.queue = null;
    }
    function ko(l, h, S, C) {
      qs(l, h, S);
      var F = l.state !== void 0 ? l.state : null;
      l.updater = Xs, l.props = S, l.state = F;
      var Q = {
        queue: [],
        replace: !1
      };
      _l(l, Q);
      var ce = h.contextType;
      if (typeof ce == "object" && ce !== null ? l.context = La(ce) : l.context = C, l.state === S) {
        var Ee = gn(h) || "Component";
        bo.has(Ee) || (bo.add(Ee), a("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", Ee));
      }
      var Be = h.getDerivedStateFromProps;
      typeof Be == "function" && (l.state = Xc(l, h, Be, F, S)), typeof h.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (Gc(h, l), Zc(Q, l, S, C));
    }
    var wo = {
      id: 1,
      overflow: ""
    };
    function Qc(l) {
      var h = l.overflow, S = l.id, C = S & ~Jc(S);
      return C.toString(32) + h;
    }
    function Nl(l, h, S) {
      var C = l.id, F = l.overflow, Q = To(C) - 1, ce = C & ~(1 << Q), Ee = S + 1, Be = To(h) + Q;
      if (Be > 30) {
        var tt = Q - Q % 5, ct = (1 << tt) - 1, St = (ce & ct).toString(32), dn = ce >> tt, Hn = Q - tt, dr = To(h) + Hn, yu = Ee << Hn, vu = yu | dn, xu = St + F;
        return {
          id: 1 << dr | vu,
          overflow: xu
        };
      } else {
        var Ho = Ee << Q, yy = Ho | ce, vy = F;
        return {
          id: 1 << Be | yy,
          overflow: vy
        };
      }
    }
    function To(l) {
      return 32 - ed(l);
    }
    function Jc(l) {
      return 1 << To(l) - 1;
    }
    var ed = Math.clz32 ? Math.clz32 : Lr, td = Math.log, nd = Math.LN2;
    function Lr(l) {
      var h = l >>> 0;
      return h === 0 ? 32 : 31 - (td(h) / nd | 0) | 0;
    }
    function Fl(l, h) {
      return l === h && (l !== 0 || 1 / l === 1 / h) || l !== l && h !== h;
    }
    var Co = typeof Object.is == "function" ? Object.is : Fl, Wt = null, ia = null, oa = null, tn = null, sr = !1, la = !1, Ao = 0, In = null, Dr = 0, sa = 25, Er = !1, ua;
    function Or() {
      if (Wt === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return Er && a("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Wt;
    }
    function rd(l, h) {
      if (h === null)
        return a("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ua), !1;
      l.length !== h.length && a(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ua, "[" + l.join(", ") + "]", "[" + h.join(", ") + "]");
      for (var S = 0; S < h.length && S < l.length; S++)
        if (!Co(l[S], h[S]))
          return !1;
      return !0;
    }
    function Gs() {
      if (Dr > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function Po() {
      return tn === null ? oa === null ? (sr = !1, oa = tn = Gs()) : (sr = !0, tn = oa) : tn.next === null ? (sr = !1, tn = tn.next = Gs()) : (sr = !0, tn = tn.next), tn;
    }
    function zl(l, h) {
      Wt = h, ia = l, Er = !1, Ao = 0;
    }
    function ad(l, h, S, C) {
      for (; la; )
        la = !1, Ao = 0, Dr += 1, tn = null, S = l(h, C);
      return pi(), S;
    }
    function Zs() {
      var l = Ao !== 0;
      return l;
    }
    function pi() {
      Er = !1, Wt = null, ia = null, la = !1, oa = null, Dr = 0, In = null, tn = null;
    }
    function id(l) {
      return Er && a("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), La(l);
    }
    function Qs(l) {
      return ua = "useContext", Or(), La(l);
    }
    function Ro(l, h) {
      return typeof h == "function" ? h(l) : h;
    }
    function od(l) {
      return ua = "useState", Js(
        Ro,
        // useReducer has a special case to support lazy useState initializers
        l
      );
    }
    function Js(l, h, S) {
      if (l !== Ro && (ua = "useReducer"), Wt = Or(), tn = Po(), sr) {
        var C = tn.queue, F = C.dispatch;
        if (In !== null) {
          var Q = In.get(C);
          if (Q !== void 0) {
            In.delete(C);
            var ce = tn.memoizedState, Ee = Q;
            do {
              var Be = Ee.action;
              Er = !0, ce = l(ce, Be), Er = !1, Ee = Ee.next;
            } while (Ee !== null);
            return tn.memoizedState = ce, [ce, F];
          }
        }
        return [tn.memoizedState, F];
      } else {
        Er = !0;
        var tt;
        l === Ro ? tt = typeof h == "function" ? h() : h : tt = S !== void 0 ? S(h) : h, Er = !1, tn.memoizedState = tt;
        var ct = tn.queue = {
          last: null,
          dispatch: null
        }, St = ct.dispatch = ud.bind(null, Wt, ct);
        return [tn.memoizedState, St];
      }
    }
    function eu(l, h) {
      Wt = Or(), tn = Po();
      var S = h === void 0 ? null : h;
      if (tn !== null) {
        var C = tn.memoizedState;
        if (C !== null && S !== null) {
          var F = C[1];
          if (rd(S, F))
            return C[0];
        }
      }
      Er = !0;
      var Q = l();
      return Er = !1, tn.memoizedState = [Q, S], Q;
    }
    function ld(l) {
      Wt = Or(), tn = Po();
      var h = tn.memoizedState;
      if (h === null) {
        var S = {
          current: l
        };
        return Object.seal(S), tn.memoizedState = S, S;
      } else
        return h;
    }
    function sd(l, h) {
      ua = "useLayoutEffect", a("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function ud(l, h, S) {
      if (Dr >= sa)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (l === Wt) {
        la = !0;
        var C = {
          action: S,
          next: null
        };
        In === null && (In = /* @__PURE__ */ new Map());
        var F = In.get(h);
        if (F === void 0)
          In.set(h, C);
        else {
          for (var Q = F; Q.next !== null; )
            Q = Q.next;
          Q.next = C;
        }
      }
    }
    function cd(l, h) {
      return eu(function() {
        return l;
      }, h);
    }
    function dd(l, h, S) {
      return Or(), h(l._source);
    }
    function fd(l, h, S) {
      if (S === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return S();
    }
    function hd(l) {
      return Or(), l;
    }
    function Lo() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function tu() {
      return Or(), [!1, Lo];
    }
    function $l() {
      var l = ia, h = Qc(l.treeContext), S = gi;
      if (S === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var C = Ao++;
      return en(S, h, C);
    }
    function mi() {
    }
    var nu = {
      readContext: id,
      useContext: Qs,
      useMemo: eu,
      useReducer: Js,
      useRef: ld,
      useState: od,
      useInsertionEffect: mi,
      useLayoutEffect: sd,
      useCallback: cd,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: mi,
      // Effects are not run in the server environment.
      useEffect: mi,
      // Debugging effect
      useDebugValue: mi,
      useDeferredValue: hd,
      useTransition: tu,
      useId: $l,
      // Subscriptions are not setup in a server environment.
      useMutableSource: dd,
      useSyncExternalStore: fd
    }, gi = null;
    function Do(l) {
      gi = l;
    }
    function Bl(l) {
      try {
        var h = "", S = l;
        do {
          switch (S.tag) {
            case 0:
              h += li(S.type, null, null);
              break;
            case 1:
              h += Al(S.type, null, null);
              break;
            case 2:
              h += Cl(S.type, null, null);
              break;
          }
          S = S.parent;
        } while (S);
        return h;
      } catch (C) {
        return `
Error generating stack: ` + C.message + `
` + C.stack;
      }
    }
    var Hr = r.ReactCurrentDispatcher, Oo = r.ReactDebugCurrentFrame, Mo = 0, ca = 1, ru = 2, Il = 3, da = 4, pd = 0, au = 1, kr = 2, md = 12800;
    function gd(l) {
      return console.error(l), null;
    }
    function yi() {
    }
    function Hl(l, h, S, C, F, Q, ce, Ee, Be) {
      var tt = [], ct = /* @__PURE__ */ new Set(), St = {
        destination: null,
        responseState: h,
        progressiveChunkSize: C === void 0 ? md : C,
        status: pd,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: ct,
        pingedTasks: tt,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: F === void 0 ? gd : F,
        onAllReady: Q === void 0 ? yi : Q,
        onShellReady: ce === void 0 ? yi : ce,
        onShellError: Ee === void 0 ? yi : Ee,
        onFatalError: Be === void 0 ? yi : Be
      }, dn = Wr(
        St,
        0,
        null,
        S,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      dn.parentFlushed = !0;
      var Hn = vi(St, l, null, dn, ct, Ir, Dl, wo);
      return tt.push(Hn), St;
    }
    function _o(l, h) {
      var S = l.pingedTasks;
      S.push(h), S.length === 1 && f(function() {
        return mu(l);
      });
    }
    function Mr(l, h) {
      return {
        id: xn,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: h,
        errorDigest: null
      };
    }
    function vi(l, h, S, C, F, Q, ce, Ee) {
      l.allPendingTasks++, S === null ? l.pendingRootTasks++ : S.pendingTasks++;
      var Be = {
        node: h,
        ping: function() {
          return _o(l, Be);
        },
        blockedBoundary: S,
        blockedSegment: C,
        abortSet: F,
        legacyContext: Q,
        context: ce,
        treeContext: Ee
      };
      return Be.componentStack = null, F.add(Be), Be;
    }
    function Wr(l, h, S, C, F, Q) {
      return {
        status: Mo,
        id: -1,
        // lazily assigned later
        index: h,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: C,
        boundary: S,
        lastPushedText: F,
        textEmbedded: Q
      };
    }
    var wr = null;
    function Wl() {
      return wr === null || wr.componentStack === null ? "" : Bl(wr.componentStack);
    }
    function ur(l, h) {
      l.componentStack = {
        tag: 0,
        parent: l.componentStack,
        type: h
      };
    }
    function Ma(l, h) {
      l.componentStack = {
        tag: 1,
        parent: l.componentStack,
        type: h
      };
    }
    function Vl(l, h) {
      l.componentStack = {
        tag: 2,
        parent: l.componentStack,
        type: h
      };
    }
    function cr(l) {
      l.componentStack === null ? a("Unexpectedly popped too many stack frames. This is a bug in React.") : l.componentStack = l.componentStack.parent;
    }
    var Vr = null;
    function jl(l, h) {
      {
        var S;
        typeof h == "string" ? S = h : h && typeof h.message == "string" ? S = h.message : S = String(h);
        var C = Vr || Wl();
        Vr = null, l.errorMessage = S, l.errorComponentStack = C;
      }
    }
    function xi(l, h) {
      var S = l.onError(h);
      if (S != null && typeof S != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof S + '" instead');
      return S;
    }
    function No(l, h) {
      var S = l.onShellError;
      S(h);
      var C = l.onFatalError;
      C(h), l.destination !== null ? (l.status = kr, k(l.destination, h)) : (l.status = au, l.fatalError = h);
    }
    function iu(l, h, S) {
      ur(h, "Suspense");
      var C = h.blockedBoundary, F = h.blockedSegment, Q = S.fallback, ce = S.children, Ee = /* @__PURE__ */ new Set(), Be = Mr(l, Ee), tt = F.chunks.length, ct = Wr(
        l,
        tt,
        Be,
        F.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      F.children.push(ct), F.lastPushedText = !1;
      var St = Wr(
        l,
        0,
        null,
        F.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      St.parentFlushed = !0, h.blockedBoundary = Be, h.blockedSegment = St;
      try {
        if (Fo(l, h, ce), Ms(St.chunks, l.responseState, St.lastPushedText, St.textEmbedded), St.status = ca, Ei(Be, St), Be.pendingTasks === 0) {
          cr(h);
          return;
        }
      } catch (Hn) {
        St.status = da, Be.forceClientRender = !0, Be.errorDigest = xi(l, Hn), jl(Be, Hn);
      } finally {
        h.blockedBoundary = C, h.blockedSegment = F;
      }
      var dn = vi(l, Q, C, ct, Ee, h.legacyContext, h.context, h.treeContext);
      dn.componentStack = h.componentStack, l.pingedTasks.push(dn), cr(h);
    }
    function ou(l, h, S, C) {
      ur(h, S);
      var F = h.blockedSegment, Q = xr(F.chunks, S, C, l.responseState, F.formatContext);
      F.lastPushedText = !1;
      var ce = F.formatContext;
      F.formatContext = En(ce, S, C), Fo(l, h, Q), F.formatContext = ce, Qn(F.chunks, S), F.lastPushedText = !1, cr(h);
    }
    function yd(l) {
      return l.prototype && l.prototype.isReactComponent;
    }
    function Ul(l, h, S, C, F) {
      var Q = {};
      zl(h, Q);
      var ce = S(C, F);
      return ad(S, C, ce, F);
    }
    function bi(l, h, S, C, F) {
      var Q = S.render();
      S.props !== F && (ql || a("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", gn(C) || "a component"), ql = !0);
      {
        var ce = C.childContextTypes;
        if (ce != null) {
          var Ee = h.legacyContext, Be = ra(S, C, Ee, ce);
          h.legacyContext = Be, rr(l, h, Q), h.legacyContext = Ee;
          return;
        }
      }
      rr(l, h, Q);
    }
    function lu(l, h, S, C) {
      Vl(h, S);
      var F = Vs(S, h.legacyContext), Q = qc(S, C, F);
      ko(Q, S, C, F), bi(l, h, Q, S, C), cr(h);
    }
    var Kl = {}, Si = {}, Yl = {}, Xl = {}, ql = !1, su = !1, uu = !1, Gl = !1;
    function vd(l, h, S, C) {
      var F;
      if (F = Vs(S, h.legacyContext), Ma(h, S), S.prototype && typeof S.prototype.render == "function") {
        var Q = gn(S) || "Unknown";
        Kl[Q] || (a("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", Q, Q), Kl[Q] = !0);
      }
      var ce = Ul(l, h, S, C, F), Ee = Zs();
      if (typeof ce == "object" && ce !== null && typeof ce.render == "function" && ce.$$typeof === void 0) {
        var Be = gn(S) || "Unknown";
        Si[Be] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", Be, Be, Be), Si[Be] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof ce == "object" && ce !== null && typeof ce.render == "function" && ce.$$typeof === void 0
      ) {
        {
          var tt = gn(S) || "Unknown";
          Si[tt] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", tt, tt, tt), Si[tt] = !0);
        }
        ko(ce, S, C, F), bi(l, h, ce, S, C);
      } else if (xd(S), Ee) {
        var ct = h.treeContext, St = 1, dn = 0;
        h.treeContext = Nl(ct, St, dn);
        try {
          rr(l, h, ce);
        } finally {
          h.treeContext = ct;
        }
      } else
        rr(l, h, ce);
      cr(h);
    }
    function xd(l) {
      {
        if (l && l.childContextTypes && a("%s(...): childContextTypes cannot be defined on a function component.", l.displayName || l.name || "Component"), typeof l.getDerivedStateFromProps == "function") {
          var h = gn(l) || "Unknown";
          Xl[h] || (a("%s: Function components do not support getDerivedStateFromProps.", h), Xl[h] = !0);
        }
        if (typeof l.contextType == "object" && l.contextType !== null) {
          var S = gn(l) || "Unknown";
          Yl[S] || (a("%s: Function components do not support contextType.", S), Yl[S] = !0);
        }
      }
    }
    function cu(l, h) {
      if (l && l.defaultProps) {
        var S = tr({}, h), C = l.defaultProps;
        for (var F in C)
          S[F] === void 0 && (S[F] = C[F]);
        return S;
      }
      return h;
    }
    function bd(l, h, S, C, F) {
      Ma(h, S.render);
      var Q = Ul(l, h, S.render, C, F), ce = Zs();
      if (ce) {
        var Ee = h.treeContext, Be = 1, tt = 0;
        h.treeContext = Nl(Ee, Be, tt);
        try {
          rr(l, h, Q);
        } finally {
          h.treeContext = Ee;
        }
      } else
        rr(l, h, Q);
      cr(h);
    }
    function Sd(l, h, S, C, F) {
      var Q = S.type, ce = cu(Q, C);
      Ql(l, h, Q, ce, F);
    }
    function Zl(l, h, S, C) {
      S._context === void 0 ? S !== S.Consumer && (Gl || (Gl = !0, a("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : S = S._context;
      var F = C.children;
      typeof F != "function" && a("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var Q = La(S), ce = F(Q);
      rr(l, h, ce);
    }
    function Ed(l, h, S, C) {
      var F = S._context, Q = C.value, ce = C.children, Ee;
      Ee = h.context, h.context = di(F, Q), rr(l, h, ce), h.context = Ml(F), Ee !== h.context && a("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function nr(l, h, S, C, F) {
      ur(h, "Lazy");
      var Q = S._payload, ce = S._init, Ee = ce(Q), Be = cu(Ee, C);
      Ql(l, h, Ee, Be, F), cr(h);
    }
    function Ql(l, h, S, C, F) {
      if (typeof S == "function")
        if (yd(S)) {
          lu(l, h, S, C);
          return;
        } else {
          vd(l, h, S, C);
          return;
        }
      if (typeof S == "string") {
        ou(l, h, S, C);
        return;
      }
      switch (S) {
        case Uc:
        case Fs:
        case io:
        case oo:
        case ao: {
          rr(l, h, C.children);
          return;
        }
        case gl: {
          ur(h, "SuspenseList"), rr(l, h, C.children), cr(h);
          return;
        }
        case jc:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case Ca: {
          iu(l, h, C);
          return;
        }
      }
      if (typeof S == "object" && S !== null)
        switch (S.$$typeof) {
          case ri: {
            bd(l, h, S, C, F);
            return;
          }
          case yl: {
            Sd(l, h, S, C, F);
            return;
          }
          case ti: {
            Ed(l, h, S, C);
            return;
          }
          case ni: {
            Zl(l, h, S, C);
            return;
          }
          case lo: {
            nr(l, h, S, C);
            return;
          }
        }
      var Q = "";
      throw (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (Q += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (S == null ? S : typeof S) + "." + Q));
    }
    function du(l, h) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      l[Symbol.toStringTag] === "Generator" && (su || a("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), su = !0), l.entries === h && (uu || a("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), uu = !0);
    }
    function rr(l, h, S) {
      try {
        return Jl(l, h, S);
      } catch (C) {
        throw typeof C == "object" && C !== null && typeof C.then == "function" || (Vr = Vr !== null ? Vr : Wl()), C;
      }
    }
    function Jl(l, h, S) {
      if (h.node = S, typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Ns: {
            var C = S, F = C.type, Q = C.props, ce = C.ref;
            Ql(l, h, F, Q, ce);
            return;
          }
          case ml:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case lo: {
            var Ee = S, Be = Ee._payload, tt = Ee._init, ct;
            try {
              ct = tt(Be);
            } catch (Ho) {
              throw typeof Ho == "object" && Ho !== null && typeof Ho.then == "function" && ur(h, "Lazy"), Ho;
            }
            rr(l, h, ct);
            return;
          }
        }
        if ($e(S)) {
          fu(l, h, S);
          return;
        }
        var St = bn(S);
        if (St) {
          du(S, St);
          var dn = St.call(S);
          if (dn) {
            var Hn = dn.next();
            if (!Hn.done) {
              var dr = [];
              do
                dr.push(Hn.value), Hn = dn.next();
              while (!Hn.done);
              fu(l, h, dr);
              return;
            }
            return;
          }
        }
        var yu = Object.prototype.toString.call(S);
        throw new Error("Objects are not valid as a React child (found: " + (yu === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : yu) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof S == "string") {
        var vu = h.blockedSegment;
        vu.lastPushedText = Os(h.blockedSegment.chunks, S, l.responseState, vu.lastPushedText);
        return;
      }
      if (typeof S == "number") {
        var xu = h.blockedSegment;
        xu.lastPushedText = Os(h.blockedSegment.chunks, "" + S, l.responseState, xu.lastPushedText);
        return;
      }
      typeof S == "function" && a("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function fu(l, h, S) {
      for (var C = S.length, F = 0; F < C; F++) {
        var Q = h.treeContext;
        h.treeContext = Nl(Q, C, F);
        try {
          Fo(l, h, S[F]);
        } finally {
          h.treeContext = Q;
        }
      }
    }
    function kd(l, h, S) {
      var C = h.blockedSegment, F = C.chunks.length, Q = Wr(
        l,
        F,
        null,
        C.formatContext,
        // Adopt the parent segment's leading text embed
        C.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      C.children.push(Q), C.lastPushedText = !1;
      var ce = vi(l, h.node, h.blockedBoundary, Q, h.abortSet, h.legacyContext, h.context, h.treeContext);
      h.componentStack !== null && (ce.componentStack = h.componentStack.parent);
      var Ee = ce.ping;
      S.then(Ee, Ee);
    }
    function Fo(l, h, S) {
      var C = h.blockedSegment.formatContext, F = h.legacyContext, Q = h.context, ce = null;
      ce = h.componentStack;
      try {
        return rr(l, h, S);
      } catch (Ee) {
        if (pi(), typeof Ee == "object" && Ee !== null && typeof Ee.then == "function") {
          kd(l, h, Ee), h.blockedSegment.formatContext = C, h.legacyContext = F, h.context = Q, po(Q), h.componentStack = ce;
          return;
        } else
          throw h.blockedSegment.formatContext = C, h.legacyContext = F, h.context = Q, po(Q), h.componentStack = ce, Ee;
      }
    }
    function zo(l, h, S, C) {
      var F = xi(l, C);
      if (h === null ? No(l, C) : (h.pendingTasks--, h.forceClientRender || (h.forceClientRender = !0, h.errorDigest = F, jl(h, C), h.parentFlushed && l.clientRenderedBoundaries.push(h))), l.allPendingTasks--, l.allPendingTasks === 0) {
        var Q = l.onAllReady;
        Q();
      }
    }
    function hu(l) {
      var h = this, S = l.blockedBoundary, C = l.blockedSegment;
      C.status = Il, ki(h, S, C);
    }
    function pu(l, h, S) {
      var C = l.blockedBoundary, F = l.blockedSegment;
      if (F.status = Il, C === null)
        h.allPendingTasks--, h.status !== kr && (h.status = kr, h.destination !== null && y(h.destination));
      else {
        if (C.pendingTasks--, !C.forceClientRender) {
          C.forceClientRender = !0;
          var Q = S === void 0 ? new Error("The render was aborted by the server without a reason.") : S;
          C.errorDigest = h.onError(Q);
          {
            var ce = "The server did not finish this Suspense boundary: ";
            Q && typeof Q.message == "string" ? Q = ce + Q.message : Q = ce + String(Q);
            var Ee = wr;
            wr = l;
            try {
              jl(C, Q);
            } finally {
              wr = Ee;
            }
          }
          C.parentFlushed && h.clientRenderedBoundaries.push(C);
        }
        if (C.fallbackAbortableTasks.forEach(function(tt) {
          return pu(tt, h, S);
        }), C.fallbackAbortableTasks.clear(), h.allPendingTasks--, h.allPendingTasks === 0) {
          var Be = h.onAllReady;
          Be();
        }
      }
    }
    function Ei(l, h) {
      if (h.chunks.length === 0 && h.children.length === 1 && h.children[0].boundary === null) {
        var S = h.children[0];
        S.id = h.id, S.parentFlushed = !0, S.status === ca && Ei(l, S);
      } else {
        var C = l.completedSegments;
        C.push(h);
      }
    }
    function ki(l, h, S) {
      if (h === null) {
        if (S.parentFlushed) {
          if (l.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          l.completedRootSegment = S;
        }
        if (l.pendingRootTasks--, l.pendingRootTasks === 0) {
          l.onShellError = yi;
          var C = l.onShellReady;
          C();
        }
      } else if (h.pendingTasks--, !h.forceClientRender) {
        if (h.pendingTasks === 0)
          S.parentFlushed && S.status === ca && Ei(h, S), h.parentFlushed && l.completedBoundaries.push(h), h.fallbackAbortableTasks.forEach(hu, l), h.fallbackAbortableTasks.clear();
        else if (S.parentFlushed && S.status === ca) {
          Ei(h, S);
          var F = h.completedSegments;
          F.length === 1 && h.parentFlushed && l.partialBoundaries.push(h);
        }
      }
      if (l.allPendingTasks--, l.allPendingTasks === 0) {
        var Q = l.onAllReady;
        Q();
      }
    }
    function $o(l, h) {
      var S = h.blockedSegment;
      if (S.status === Mo) {
        po(h.context);
        var C = null;
        C = wr, wr = h;
        try {
          rr(l, h, h.node), Ms(S.chunks, l.responseState, S.lastPushedText, S.textEmbedded), h.abortSet.delete(h), S.status = ca, ki(l, h.blockedBoundary, S);
        } catch (Q) {
          if (pi(), typeof Q == "object" && Q !== null && typeof Q.then == "function") {
            var F = h.ping;
            Q.then(F, F);
          } else
            h.abortSet.delete(h), S.status = da, zo(l, h.blockedBoundary, S, Q);
        } finally {
          wr = C;
        }
      }
    }
    function mu(l) {
      if (l.status !== kr) {
        var h = Yc(), S = Hr.current;
        Hr.current = nu;
        var C;
        C = Oo.getCurrentStack, Oo.getCurrentStack = Wl;
        var F = gi;
        Do(l.responseState);
        try {
          var Q = l.pingedTasks, ce;
          for (ce = 0; ce < Q.length; ce++) {
            var Ee = Q[ce];
            $o(l, Ee);
          }
          Q.splice(0, ce), l.destination !== null && Io(l, l.destination);
        } catch (Be) {
          xi(l, Be), No(l, Be);
        } finally {
          Do(F), Hr.current = S, Oo.getCurrentStack = C, S === nu && po(h);
        }
      }
    }
    function wi(l, h, S) {
      switch (S.parentFlushed = !0, S.status) {
        case Mo: {
          var C = S.id = l.nextSegmentId++;
          return S.lastPushedText = !1, S.textEmbedded = !1, Ui(h, l.responseState, C);
        }
        case ca: {
          S.status = ru;
          for (var F = !0, Q = S.chunks, ce = 0, Ee = S.children, Be = 0; Be < Ee.length; Be++) {
            for (var tt = Ee[Be]; ce < tt.index; ce++)
              c(h, Q[ce]);
            F = Ti(l, h, tt);
          }
          for (; ce < Q.length - 1; ce++)
            c(h, Q[ce]);
          return ce < Q.length && (F = d(h, Q[ce])), F;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function Ti(l, h, S) {
      var C = S.boundary;
      if (C === null)
        return wi(l, h, S);
      if (C.parentFlushed = !0, C.forceClientRender)
        return lr(h, l.responseState, C.errorDigest, C.errorMessage, C.errorComponentStack), wi(l, h, S), _s(h, l.responseState);
      if (C.pendingTasks > 0) {
        C.rootSegmentID = l.nextSegmentId++, C.completedSegments.length > 0 && l.partialBoundaries.push(C);
        var F = C.id = Xt(l.responseState);
        return Br(h, l.responseState, F), wi(l, h, S), Qa(h, l.responseState);
      } else {
        if (C.byteSize > l.progressiveChunkSize)
          return C.rootSegmentID = l.nextSegmentId++, l.completedBoundaries.push(C), Br(h, l.responseState, C.id), wi(l, h, S), Qa(h, l.responseState);
        pl(h, l.responseState);
        var Q = C.completedSegments;
        if (Q.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var ce = Q[0];
        return Ti(l, h, ce), Vc(h, l.responseState);
      }
    }
    function wd(l, h, S) {
      return Ic(h, l.responseState, S.id, S.errorDigest, S.errorMessage, S.errorComponentStack);
    }
    function es(l, h, S) {
      return ve(h, l.responseState, S.formatContext, S.id), Ti(l, h, S), Ne(h, S.formatContext);
    }
    function Bo(l, h, S) {
      for (var C = S.completedSegments, F = 0; F < C.length; F++) {
        var Q = C[F];
        gu(l, h, S, Q);
      }
      return C.length = 0, Nc(h, l.responseState, S.id, S.rootSegmentID);
    }
    function Td(l, h, S) {
      for (var C = S.completedSegments, F = 0; F < C.length; F++) {
        var Q = C[F];
        if (!gu(l, h, S, Q))
          return F++, C.splice(0, F), !1;
      }
      return C.splice(0, F), !0;
    }
    function gu(l, h, S, C) {
      if (C.status === ru)
        return !0;
      var F = C.id;
      if (F === -1) {
        var Q = C.id = S.rootSegmentID;
        if (Q === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return es(l, h, C);
      } else
        return es(l, h, C), er(h, l.responseState, F);
    }
    function Io(l, h) {
      try {
        var S = l.completedRootSegment;
        S !== null && l.pendingRootTasks === 0 && (Ti(l, h, S), l.completedRootSegment = null, Xa(h, l.responseState));
        var C = l.clientRenderedBoundaries, F;
        for (F = 0; F < C.length; F++) {
          var Q = C[F];
          if (!wd(l, h, Q)) {
            l.destination = null, F++, C.splice(0, F);
            return;
          }
        }
        C.splice(0, F);
        var ce = l.completedBoundaries;
        for (F = 0; F < ce.length; F++) {
          var Ee = ce[F];
          if (!Bo(l, h, Ee)) {
            l.destination = null, F++, ce.splice(0, F);
            return;
          }
        }
        ce.splice(0, F);
        var Be = l.partialBoundaries;
        for (F = 0; F < Be.length; F++) {
          var tt = Be[F];
          if (!Td(l, h, tt)) {
            l.destination = null, F++, Be.splice(0, F);
            return;
          }
        }
        Be.splice(0, F);
        var ct = l.completedBoundaries;
        for (F = 0; F < ct.length; F++) {
          var St = ct[F];
          if (!Bo(l, h, St)) {
            l.destination = null, F++, ct.splice(0, F);
            return;
          }
        }
        ct.splice(0, F);
      } finally {
        l.allPendingTasks === 0 && l.pingedTasks.length === 0 && l.clientRenderedBoundaries.length === 0 && l.completedBoundaries.length === 0 && (l.abortableTasks.size !== 0 && a("There was still abortable task at the root when we closed. This is a bug in React."), y(h));
      }
    }
    function Cd(l) {
      f(function() {
        return mu(l);
      });
    }
    function u(l, h) {
      if (l.status === au) {
        l.status = kr, k(h, l.fatalError);
        return;
      }
      if (l.status !== kr && l.destination === null) {
        l.destination = h;
        try {
          Io(l, h);
        } catch (S) {
          xi(l, S), No(l, S);
        }
      }
    }
    function p(l, h) {
      try {
        var S = l.abortableTasks;
        S.forEach(function(C) {
          return pu(C, l, h);
        }), S.clear(), l.destination !== null && Io(l, l.destination);
      } catch (C) {
        xi(l, C), No(l, C);
      }
    }
    function w() {
    }
    function L(l, h, S, C) {
      var F = !1, Q = null, ce = "", Ee = {
        push: function(St) {
          return St !== null && (ce += St), !0;
        },
        destroy: function(St) {
          F = !0, Q = St;
        }
      }, Be = !1;
      function tt() {
        Be = !0;
      }
      var ct = Hl(l, Wc(S, h ? h.identifierPrefix : void 0), hl(), 1 / 0, w, void 0, tt, void 0, void 0);
      if (Cd(ct), p(ct, C), u(ct, Ee), F)
        throw Q;
      if (!Be)
        throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return ce;
    }
    function W(l, h) {
      return L(l, h, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function re(l, h) {
      return L(l, h, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
    }
    function pe() {
      throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
    }
    function ke() {
      throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
    }
    Di.renderToNodeStream = pe, Di.renderToStaticMarkup = re, Di.renderToStaticNodeStream = ke, Di.renderToString = W, Di.version = t;
  }()), Di;
}
var Mu = {};
/**
 * @license React
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var om;
function PE() {
  return om || (om = 1, process.env.NODE_ENV !== "production" && function() {
    var e = se, t = "18.2.0", r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(u) {
      {
        for (var p = arguments.length, w = new Array(p > 1 ? p - 1 : 0), L = 1; L < p; L++)
          w[L - 1] = arguments[L];
        o("warn", u, w);
      }
    }
    function a(u) {
      {
        for (var p = arguments.length, w = new Array(p > 1 ? p - 1 : 0), L = 1; L < p; L++)
          w[L - 1] = arguments[L];
        o("error", u, w);
      }
    }
    function o(u, p, w) {
      {
        var L = r.ReactDebugCurrentFrame, W = L.getStackAddendum();
        W !== "" && (p += "%s", w = w.concat([W]));
        var re = w.map(function(pe) {
          return String(pe);
        });
        re.unshift("Warning: " + p), Function.prototype.apply.call(console[u], console, re);
      }
    }
    function f(u) {
      u();
    }
    var s = 512, c = null, d = 0;
    function g(u) {
      c = new Uint8Array(s), d = 0;
    }
    function y(u, p) {
      if (p.length !== 0) {
        if (p.length > s) {
          d > 0 && (u.enqueue(new Uint8Array(c.buffer, 0, d)), c = new Uint8Array(s), d = 0), u.enqueue(p);
          return;
        }
        var w = p, L = c.length - d;
        L < w.length && (L === 0 ? u.enqueue(c) : (c.set(w.subarray(0, L), d), u.enqueue(c), w = w.subarray(L)), c = new Uint8Array(s), d = 0), c.set(w, d), d += w.length;
      }
    }
    function v(u, p) {
      return y(u, p), !0;
    }
    function E(u) {
      c && d > 0 && (u.enqueue(new Uint8Array(c.buffer, 0, d)), c = null, d = 0);
    }
    function k(u) {
      u.close();
    }
    var M = new TextEncoder();
    function T(u) {
      return M.encode(u);
    }
    function m(u) {
      return M.encode(u);
    }
    function R(u, p) {
      typeof u.error == "function" ? u.error(p) : u.close();
    }
    function O(u) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, w = p && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return w;
      }
    }
    function _(u) {
      try {
        return N(u), !1;
      } catch {
        return !0;
      }
    }
    function N(u) {
      return "" + u;
    }
    function D(u, p) {
      if (_(u))
        return a("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", p, O(u)), N(u);
    }
    function I(u, p) {
      if (_(u))
        return a("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", p, O(u)), N(u);
    }
    function B(u) {
      if (_(u))
        return a("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", O(u)), N(u);
    }
    var U = Object.prototype.hasOwnProperty, q = 0, K = 1, j = 2, te = 3, me = 4, H = 5, le = 6, ue = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", fe = ue + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ae = new RegExp("^[" + ue + "][" + fe + "]*$"), V = {}, Z = {};
    function ee(u) {
      return U.call(Z, u) ? !0 : U.call(V, u) ? !1 : ae.test(u) ? (Z[u] = !0, !0) : (V[u] = !0, a("Invalid attribute name: `%s`", u), !1);
    }
    function Ae(u, p, w, L) {
      if (w !== null && w.type === q)
        return !1;
      switch (typeof p) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (L)
            return !1;
          if (w !== null)
            return !w.acceptsBooleans;
          var W = u.toLowerCase().slice(0, 5);
          return W !== "data-" && W !== "aria-";
        }
        default:
          return !1;
      }
    }
    function xe(u) {
      return oe.hasOwnProperty(u) ? oe[u] : null;
    }
    function De(u, p, w, L, W, re, pe) {
      this.acceptsBooleans = p === j || p === te || p === me, this.attributeName = L, this.attributeNamespace = W, this.mustUseProperty = w, this.propertyName = u, this.type = p, this.sanitizeURL = re, this.removeEmptyString = pe;
    }
    var oe = {}, ze = [
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
    ze.forEach(function(u) {
      oe[u] = new De(
        u,
        q,
        !1,
        // mustUseProperty
        u,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(u) {
      var p = u[0], w = u[1];
      oe[p] = new De(
        p,
        K,
        !1,
        // mustUseProperty
        w,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(u) {
      oe[u] = new De(
        u,
        j,
        !1,
        // mustUseProperty
        u.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(u) {
      oe[u] = new De(
        u,
        j,
        !1,
        // mustUseProperty
        u,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
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
    ].forEach(function(u) {
      oe[u] = new De(
        u,
        te,
        !1,
        // mustUseProperty
        u.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(u) {
      oe[u] = new De(
        u,
        te,
        !0,
        // mustUseProperty
        u,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(u) {
      oe[u] = new De(
        u,
        me,
        !1,
        // mustUseProperty
        u,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(u) {
      oe[u] = new De(
        u,
        le,
        !1,
        // mustUseProperty
        u,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(u) {
      oe[u] = new De(
        u,
        H,
        !1,
        // mustUseProperty
        u.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Ie = /[\-\:]([a-z])/g, Ce = function(u) {
      return u[1].toUpperCase();
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
    ].forEach(function(u) {
      var p = u.replace(Ie, Ce);
      oe[p] = new De(
        p,
        K,
        !1,
        // mustUseProperty
        u,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(u) {
      var p = u.replace(Ie, Ce);
      oe[p] = new De(
        p,
        K,
        !1,
        // mustUseProperty
        u,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(u) {
      var p = u.replace(Ie, Ce);
      oe[p] = new De(
        p,
        K,
        !1,
        // mustUseProperty
        u,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(u) {
      oe[u] = new De(
        u,
        K,
        !1,
        // mustUseProperty
        u.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ge = "xlinkHref";
    oe[ge] = new De(
      "xlinkHref",
      K,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(u) {
      oe[u] = new De(
        u,
        K,
        !1,
        // mustUseProperty
        u.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Oe = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function ie(u, p) {
      return u + p.charAt(0).toUpperCase() + p.substring(1);
    }
    var we = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Oe).forEach(function(u) {
      we.forEach(function(p) {
        Oe[ie(p, u)] = Oe[u];
      });
    });
    var Pe = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function He(u, p) {
      Pe[p.type] || p.onChange || p.onInput || p.readOnly || p.disabled || p.value == null || a("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), p.onChange || p.readOnly || p.disabled || p.checked == null || a("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Ye(u, p) {
      if (u.indexOf("-") === -1)
        return typeof p.is == "string";
      switch (u) {
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
    var Je = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, at = {}, it = new RegExp("^(aria)-[" + fe + "]*$"), st = new RegExp("^(aria)[A-Z][" + fe + "]*$");
    function Ge(u, p) {
      {
        if (U.call(at, p) && at[p])
          return !0;
        if (st.test(p)) {
          var w = "aria-" + p.slice(4).toLowerCase(), L = Je.hasOwnProperty(w) ? w : null;
          if (L == null)
            return a("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", p), at[p] = !0, !0;
          if (p !== L)
            return a("Invalid ARIA attribute `%s`. Did you mean `%s`?", p, L), at[p] = !0, !0;
        }
        if (it.test(p)) {
          var W = p.toLowerCase(), re = Je.hasOwnProperty(W) ? W : null;
          if (re == null)
            return at[p] = !0, !1;
          if (p !== re)
            return a("Unknown ARIA attribute `%s`. Did you mean `%s`?", p, re), at[p] = !0, !0;
        }
      }
      return !0;
    }
    function We(u, p) {
      {
        var w = [];
        for (var L in p) {
          var W = Ge(u, L);
          W || w.push(L);
        }
        var re = w.map(function(pe) {
          return "`" + pe + "`";
        }).join(", ");
        w.length === 1 ? a("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", re, u) : w.length > 1 && a("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", re, u);
      }
    }
    function Fe(u, p) {
      Ye(u, p) || We(u, p);
    }
    var ft = !1;
    function Ke(u, p) {
      {
        if (u !== "input" && u !== "textarea" && u !== "select")
          return;
        p != null && p.value === null && !ft && (ft = !0, u === "select" && p.multiple ? a("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", u) : a("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", u));
      }
    }
    var Ze = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, ut = function() {
    };
    {
      var ht = {}, Pt = /^on./, on = /^on[^A-Z]/, un = new RegExp("^(aria)-[" + fe + "]*$"), Ot = new RegExp("^(aria)[A-Z][" + fe + "]*$");
      ut = function(u, p, w, L) {
        if (U.call(ht, p) && ht[p])
          return !0;
        var W = p.toLowerCase();
        if (W === "onfocusin" || W === "onfocusout")
          return a("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), ht[p] = !0, !0;
        if (L != null) {
          var re = L.registrationNameDependencies, pe = L.possibleRegistrationNames;
          if (re.hasOwnProperty(p))
            return !0;
          var ke = pe.hasOwnProperty(W) ? pe[W] : null;
          if (ke != null)
            return a("Invalid event handler property `%s`. Did you mean `%s`?", p, ke), ht[p] = !0, !0;
          if (Pt.test(p))
            return a("Unknown event handler property `%s`. It will be ignored.", p), ht[p] = !0, !0;
        } else if (Pt.test(p))
          return on.test(p) && a("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", p), ht[p] = !0, !0;
        if (un.test(p) || Ot.test(p))
          return !0;
        if (W === "innerhtml")
          return a("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), ht[p] = !0, !0;
        if (W === "aria")
          return a("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), ht[p] = !0, !0;
        if (W === "is" && w !== null && w !== void 0 && typeof w != "string")
          return a("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof w), ht[p] = !0, !0;
        if (typeof w == "number" && isNaN(w))
          return a("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", p), ht[p] = !0, !0;
        var l = xe(p), h = l !== null && l.type === q;
        if (Ze.hasOwnProperty(W)) {
          var S = Ze[W];
          if (S !== p)
            return a("Invalid DOM property `%s`. Did you mean `%s`?", p, S), ht[p] = !0, !0;
        } else if (!h && p !== W)
          return a("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", p, W), ht[p] = !0, !0;
        return typeof w == "boolean" && Ae(p, w, l, !1) ? (w ? a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', w, p, p, w, p) : a('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', w, p, p, w, p, p, p), ht[p] = !0, !0) : h ? !0 : Ae(p, w, l, !1) ? (ht[p] = !0, !1) : ((w === "false" || w === "true") && l !== null && l.type === te && (a("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", w, p, w === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', p, w), ht[p] = !0), !0);
      };
    }
    var jt = function(u, p, w) {
      {
        var L = [];
        for (var W in p) {
          var re = ut(u, W, p[W], w);
          re || L.push(W);
        }
        var pe = L.map(function(ke) {
          return "`" + ke + "`";
        }).join(", ");
        L.length === 1 ? a("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", pe, u) : L.length > 1 && a("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", pe, u);
      }
    };
    function Ft(u, p, w) {
      Ye(u, p) || jt(u, p, w);
    }
    var nn = function() {
    };
    {
      var yn = /^(?:webkit|moz|o)[A-Z]/, hn = /^-ms-/, Rt = /-(.)/g, Zt = /;\s*$/, _e = {}, wn = {}, Lt = !1, vn = !1, It = function(u) {
        return u.replace(Rt, function(p, w) {
          return w.toUpperCase();
        });
      }, pn = function(u) {
        _e.hasOwnProperty(u) && _e[u] || (_e[u] = !0, a(
          "Unsupported style property %s. Did you mean %s?",
          u,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          It(u.replace(hn, "ms-"))
        ));
      }, An = function(u) {
        _e.hasOwnProperty(u) && _e[u] || (_e[u] = !0, a("Unsupported vendor-prefixed style property %s. Did you mean %s?", u, u.charAt(0).toUpperCase() + u.slice(1)));
      }, $n = function(u, p) {
        wn.hasOwnProperty(p) && wn[p] || (wn[p] = !0, a(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, u, p.replace(Zt, "")));
      }, Me = function(u, p) {
        Lt || (Lt = !0, a("`NaN` is an invalid value for the `%s` css style property.", u));
      }, Xe = function(u, p) {
        vn || (vn = !0, a("`Infinity` is an invalid value for the `%s` css style property.", u));
      };
      nn = function(u, p) {
        u.indexOf("-") > -1 ? pn(u) : yn.test(u) ? An(u) : Zt.test(p) && $n(u, p), typeof p == "number" && (isNaN(p) ? Me(u, p) : isFinite(p) || Xe(u, p));
      };
    }
    var Tt = nn, nt = /["'&<>]/;
    function zt(u) {
      B(u);
      var p = "" + u, w = nt.exec(p);
      if (!w)
        return p;
      var L, W = "", re, pe = 0;
      for (re = w.index; re < p.length; re++) {
        switch (p.charCodeAt(re)) {
          case 34:
            L = "&quot;";
            break;
          case 38:
            L = "&amp;";
            break;
          case 39:
            L = "&#x27;";
            break;
          case 60:
            L = "&lt;";
            break;
          case 62:
            L = "&gt;";
            break;
          default:
            continue;
        }
        pe !== re && (W += p.substring(pe, re)), pe = re + 1, W += L;
      }
      return pe !== re ? W + p.substring(pe, re) : W;
    }
    function _t(u) {
      return typeof u == "boolean" || typeof u == "number" ? "" + u : zt(u);
    }
    var Tn = /([A-Z])/g, Wn = /^ms-/;
    function Y(u) {
      return u.replace(Tn, "-$1").toLowerCase().replace(Wn, "-ms-");
    }
    var $e = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, et = !1;
    function Ve(u) {
      !et && $e.test(u) && (et = !0, a("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(u)));
    }
    var pt = Array.isArray;
    function ot(u) {
      return pt(u);
    }
    var bt = m("<script>"), mt = m("<\/script>"), qe = m('<script src="'), Ut = m('<script type="module" src="'), Qt = m('" async=""><\/script>');
    function cn(u) {
      return B(u), ("" + u).replace(Jt, Kt);
    }
    var Jt = /(<\/|<)(s)(cript)/gi, Kt = function(u, p, w, L) {
      return "" + p + (w === "s" ? "\\u0073" : "\\u0053") + L;
    };
    function $t(u, p, w, L, W) {
      var re = u === void 0 ? "" : u, pe = p === void 0 ? bt : m('<script nonce="' + _t(p) + '">'), ke = [];
      if (w !== void 0 && ke.push(pe, T(cn(w)), mt), L !== void 0)
        for (var l = 0; l < L.length; l++)
          ke.push(qe, T(_t(L[l])), Qt);
      if (W !== void 0)
        for (var h = 0; h < W.length; h++)
          ke.push(Ut, T(_t(W[h])), Qt);
      return {
        bootstrapChunks: ke,
        startInlineScript: pe,
        placeholderPrefix: m(re + "P:"),
        segmentPrefix: m(re + "S:"),
        boundaryPrefix: re + "B:",
        idPrefix: re,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1
      };
    }
    var Bt = 0, xt = 1, mn = 2, Sn = 3, Ht = 4, En = 5, xn = 6, Xt = 7;
    function en(u, p) {
      return {
        insertionMode: u,
        selectedValue: p
      };
    }
    function Bn(u) {
      var p = u === "http://www.w3.org/2000/svg" ? mn : u === "http://www.w3.org/1998/Math/MathML" ? Sn : Bt;
      return en(p, null);
    }
    function Vn(u, p, w) {
      switch (p) {
        case "select":
          return en(xt, w.value != null ? w.value : w.defaultValue);
        case "svg":
          return en(mn, null);
        case "math":
          return en(Sn, null);
        case "foreignObject":
          return en(xt, null);
        case "table":
          return en(Ht, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return en(En, null);
        case "colgroup":
          return en(Xt, null);
        case "tr":
          return en(xn, null);
      }
      return u.insertionMode >= Ht || u.insertionMode === Bt ? en(xt, null) : u;
    }
    var or = null;
    function Zn(u) {
      var p = u.nextSuspenseID++;
      return m(u.boundaryPrefix + p.toString(16));
    }
    function sn(u, p, w) {
      var L = u.idPrefix, W = ":" + L + "R" + p;
      return w > 0 && (W += "H" + w.toString(32)), W + ":";
    }
    function Ln(u) {
      return _t(u);
    }
    var Ar = m("<!-- -->");
    function hr(u, p, w, L) {
      return p === "" ? L : (L && u.push(Ar), u.push(T(Ln(p))), !0);
    }
    function pr(u, p, w, L) {
      w && L && u.push(Ar);
    }
    var x = /* @__PURE__ */ new Map();
    function A(u) {
      var p = x.get(u);
      if (p !== void 0)
        return p;
      var w = m(_t(Y(u)));
      return x.set(u, w), w;
    }
    var $ = m(' style="'), X = m(":"), be = m(";");
    function ye(u, p, w) {
      if (typeof w != "object")
        throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      var L = !0;
      for (var W in w)
        if (U.call(w, W)) {
          var re = w[W];
          if (!(re == null || typeof re == "boolean" || re === "")) {
            var pe = void 0, ke = void 0, l = W.indexOf("--") === 0;
            l ? (pe = T(_t(W)), I(re, W), ke = T(_t(("" + re).trim()))) : (Tt(W, re), pe = A(W), typeof re == "number" ? re !== 0 && !U.call(Oe, W) ? ke = T(re + "px") : ke = T("" + re) : (I(re, W), ke = T(_t(("" + re).trim())))), L ? (L = !1, u.push($, pe, X, ke)) : u.push(be, pe, X, ke);
          }
        }
      L || u.push(lt);
    }
    var Te = m(" "), je = m('="'), lt = m('"'), gt = m('=""');
    function dt(u, p, w, L) {
      switch (w) {
        case "style": {
          ye(u, p, L);
          return;
        }
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (
        // shouldIgnoreAttribute
        // We have already filtered out null/undefined and reserved words.
        !(w.length > 2 && (w[0] === "o" || w[0] === "O") && (w[1] === "n" || w[1] === "N"))
      ) {
        var W = xe(w);
        if (W !== null) {
          switch (typeof L) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!W.acceptsBooleans)
                return;
          }
          var re = W.attributeName, pe = T(re);
          switch (W.type) {
            case te:
              L && u.push(Te, pe, gt);
              return;
            case me:
              L === !0 ? u.push(Te, pe, gt) : L === !1 || u.push(Te, pe, je, T(_t(L)), lt);
              return;
            case H:
              isNaN(L) || u.push(Te, pe, je, T(_t(L)), lt);
              break;
            case le:
              !isNaN(L) && L >= 1 && u.push(Te, pe, je, T(_t(L)), lt);
              break;
            default:
              W.sanitizeURL && (D(L, re), L = "" + L, Ve(L)), u.push(Te, pe, je, T(_t(L)), lt);
          }
        } else if (ee(w)) {
          switch (typeof L) {
            case "function":
            case "symbol":
              return;
            case "boolean": {
              var ke = w.toLowerCase().slice(0, 5);
              if (ke !== "data-" && ke !== "aria-")
                return;
            }
          }
          u.push(Te, T(w), je, T(_t(L)), lt);
        }
      }
    }
    var Nt = m(">"), On = m("/>");
    function Pn(u, p, w) {
      if (p != null) {
        if (w != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof p != "object" || !("__html" in p))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var L = p.__html;
        L != null && (B(L), u.push(T("" + L)));
      }
    }
    var Rn = !1, ne = !1, J = !1, de = !1, Re = !1, Mt = !1, qt = !1;
    function Mn(u, p) {
      {
        var w = u[p];
        if (w != null) {
          var L = ot(w);
          u.multiple && !L ? a("The `%s` prop supplied to <select> must be an array if `multiple` is true.", p) : !u.multiple && L && a("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", p);
        }
      }
    }
    function Pr(u, p, w) {
      He("select", p), Mn(p, "value"), Mn(p, "defaultValue"), p.value !== void 0 && p.defaultValue !== void 0 && !J && (a("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), J = !0), u.push(Qn("select"));
      var L = null, W = null;
      for (var re in p)
        if (U.call(p, re)) {
          var pe = p[re];
          if (pe == null)
            continue;
          switch (re) {
            case "children":
              L = pe;
              break;
            case "dangerouslySetInnerHTML":
              W = pe;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              dt(u, w, re, pe);
              break;
          }
        }
      return u.push(Nt), Pn(u, W, L), L;
    }
    function il(u) {
      var p = "";
      return e.Children.forEach(u, function(w) {
        w != null && (p += w, !Re && typeof w != "string" && typeof w != "number" && (Re = !0, a("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }), p;
    }
    var Ka = m(' selected=""');
    function ol(u, p, w, L) {
      var W = L.selectedValue;
      u.push(Qn("option"));
      var re = null, pe = null, ke = null, l = null;
      for (var h in p)
        if (U.call(p, h)) {
          var S = p[h];
          if (S == null)
            continue;
          switch (h) {
            case "children":
              re = S;
              break;
            case "selected":
              ke = S, qt || (a("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), qt = !0);
              break;
            case "dangerouslySetInnerHTML":
              l = S;
              break;
            case "value":
              pe = S;
            default:
              dt(u, w, h, S);
              break;
          }
        }
      if (W != null) {
        var C;
        if (pe !== null ? (D(pe, "value"), C = "" + pe) : (l !== null && (Mt || (Mt = !0, a("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), C = il(re)), ot(W))
          for (var F = 0; F < W.length; F++) {
            D(W[F], "value");
            var Q = "" + W[F];
            if (Q === C) {
              u.push(Ka);
              break;
            }
          }
        else
          D(W, "select.value"), "" + W === C && u.push(Ka);
      } else
        ke && u.push(Ka);
      return u.push(Nt), Pn(u, l, re), re;
    }
    function Ya(u, p, w) {
      He("input", p), p.checked !== void 0 && p.defaultChecked !== void 0 && !ne && (a("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", p.type), ne = !0), p.value !== void 0 && p.defaultValue !== void 0 && !Rn && (a("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", p.type), Rn = !0), u.push(Qn("input"));
      var L = null, W = null, re = null, pe = null;
      for (var ke in p)
        if (U.call(p, ke)) {
          var l = p[ke];
          if (l == null)
            continue;
          switch (ke) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              pe = l;
              break;
            case "defaultValue":
              W = l;
              break;
            case "checked":
              re = l;
              break;
            case "value":
              L = l;
              break;
            default:
              dt(u, w, ke, l);
              break;
          }
        }
      return re !== null ? dt(u, w, "checked", re) : pe !== null && dt(u, w, "checked", pe), L !== null ? dt(u, w, "value", L) : W !== null && dt(u, w, "value", W), u.push(On), null;
    }
    function mr(u, p, w) {
      He("textarea", p), p.value !== void 0 && p.defaultValue !== void 0 && !de && (a("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), de = !0), u.push(Qn("textarea"));
      var L = null, W = null, re = null;
      for (var pe in p)
        if (U.call(p, pe)) {
          var ke = p[pe];
          if (ke == null)
            continue;
          switch (pe) {
            case "children":
              re = ke;
              break;
            case "value":
              L = ke;
              break;
            case "defaultValue":
              W = ke;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              dt(u, w, pe, ke);
              break;
          }
        }
      if (L === null && W !== null && (L = W), u.push(Nt), re != null) {
        if (a("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), L != null)
          throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
        if (ot(re)) {
          if (re.length > 1)
            throw new Error("<textarea> can only have at most one child.");
          B(re[0]), L = "" + re[0];
        }
        B(re), L = "" + re;
      }
      return typeof L == "string" && L[0] === `
` && u.push(Rr), L !== null && (D(L, "value"), u.push(T(Ln("" + L)))), null;
    }
    function Jr(u, p, w, L) {
      u.push(Qn(w));
      for (var W in p)
        if (U.call(p, W)) {
          var re = p[W];
          if (re == null)
            continue;
          switch (W) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error(w + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              dt(u, L, W, re);
              break;
          }
        }
      return u.push(On), null;
    }
    function pa(u, p, w) {
      u.push(Qn("menuitem"));
      for (var L in p)
        if (U.call(p, L)) {
          var W = p[L];
          if (W == null)
            continue;
          switch (L) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              dt(u, w, L, W);
              break;
          }
        }
      return u.push(Nt), null;
    }
    function rn(u, p, w) {
      u.push(Qn("title"));
      var L = null;
      for (var W in p)
        if (U.call(p, W)) {
          var re = p[W];
          if (re == null)
            continue;
          switch (W) {
            case "children":
              L = re;
              break;
            case "dangerouslySetInnerHTML":
              throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              dt(u, w, W, re);
              break;
          }
        }
      u.push(Nt);
      {
        var pe = Array.isArray(L) && L.length < 2 ? L[0] || null : L;
        Array.isArray(L) && L.length > 1 ? a("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : pe != null && pe.$$typeof != null ? a("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : pe != null && typeof pe != "string" && typeof pe != "number" && a("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
      }
      return L;
    }
    function vr(u, p, w, L) {
      u.push(Qn(w));
      var W = null, re = null;
      for (var pe in p)
        if (U.call(p, pe)) {
          var ke = p[pe];
          if (ke == null)
            continue;
          switch (pe) {
            case "children":
              W = ke;
              break;
            case "dangerouslySetInnerHTML":
              re = ke;
              break;
            default:
              dt(u, L, pe, ke);
              break;
          }
        }
      return u.push(Nt), Pn(u, re, W), typeof W == "string" ? (u.push(T(Ln(W))), null) : W;
    }
    function Un(u, p, w, L) {
      u.push(Qn(w));
      var W = null, re = null;
      for (var pe in p)
        if (U.call(p, pe)) {
          var ke = p[pe];
          if (ke == null)
            continue;
          switch (pe) {
            case "children":
              W = ke;
              break;
            case "dangerouslySetInnerHTML":
              re = ke;
              break;
            case "style":
              ye(u, L, ke);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              ee(pe) && typeof ke != "function" && typeof ke != "symbol" && u.push(Te, T(pe), je, T(_t(ke)), lt);
              break;
          }
        }
      return u.push(Nt), Pn(u, re, W), W;
    }
    var Rr = m(`
`);
    function xr(u, p, w, L) {
      u.push(Qn(w));
      var W = null, re = null;
      for (var pe in p)
        if (U.call(p, pe)) {
          var ke = p[pe];
          if (ke == null)
            continue;
          switch (pe) {
            case "children":
              W = ke;
              break;
            case "dangerouslySetInnerHTML":
              re = ke;
              break;
            default:
              dt(u, L, pe, ke);
              break;
          }
        }
      if (u.push(Nt), re != null) {
        if (W != null)
          throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if (typeof re != "object" || !("__html" in re))
          throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        var l = re.__html;
        l != null && (typeof l == "string" && l.length > 0 && l[0] === `
` ? u.push(Rr, T(l)) : (B(l), u.push(T("" + l))));
      }
      return typeof W == "string" && W[0] === `
` && u.push(Rr), W;
    }
    var ma = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, br = /* @__PURE__ */ new Map();
    function Qn(u) {
      var p = br.get(u);
      if (p === void 0) {
        if (!ma.test(u))
          throw new Error("Invalid tag: " + u);
        p = m("<" + u), br.set(u, p);
      }
      return p;
    }
    var Xa = m("<!DOCTYPE html>");
    function qa(u, p, w, L, W) {
      switch (Fe(p, w), Ke(p, w), Ft(p, w, null), !w.suppressContentEditableWarning && w.contentEditable && w.children != null && a("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), W.insertionMode !== mn && W.insertionMode !== Sn && p.indexOf("-") === -1 && typeof w.is != "string" && p.toLowerCase() !== p && a("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", p), p) {
        case "select":
          return Pr(u, w, L);
        case "option":
          return ol(u, w, L, W);
        case "textarea":
          return mr(u, w, L);
        case "input":
          return Ya(u, w, L);
        case "menuitem":
          return pa(u, w, L);
        case "title":
          return rn(u, w, L);
        case "listing":
        case "pre":
          return xr(u, w, p, L);
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return Jr(u, w, p, L);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return vr(u, w, p, L);
        case "html":
          return W.insertionMode === Bt && u.push(Xa), vr(u, w, p, L);
        default:
          return p.indexOf("-") === -1 && typeof w.is != "string" ? vr(u, w, p, L) : Un(u, w, p, L);
      }
    }
    var ji = m("</"), Ui = m(">");
    function Ki(u, p, w) {
      switch (p) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          u.push(ji, T(p), Ui);
      }
    }
    function ll(u, p) {
      for (var w = p.bootstrapChunks, L = 0; L < w.length - 1; L++)
        y(u, w[L]);
      return L < w.length ? v(u, w[L]) : !0;
    }
    var sl = m('<template id="'), ga = m('"></template>');
    function ya(u, p, w) {
      y(u, sl), y(u, p.placeholderPrefix);
      var L = T(w.toString(16));
      return y(u, L), v(u, ga);
    }
    var va = m("<!--$-->"), ea = m('<!--$?--><template id="'), ul = m('"></template>'), ta = m("<!--$!-->"), Ga = m("<!--/$-->"), Za = m("<template"), $r = m('"'), Br = m(' data-dgst="'), xa = m(' data-msg="'), Yi = m(' data-stck="'), Qa = m("></template>");
    function Xi(u, p) {
      return v(u, va);
    }
    function ba(u, p, w) {
      if (y(u, ea), w === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return y(u, w), v(u, ul);
    }
    function Kn(u, p, w, L, W) {
      var re;
      return re = v(u, ta), y(u, Za), w && (y(u, Br), y(u, T(_t(w))), y(u, $r)), L && (y(u, xa), y(u, T(_t(L))), y(u, $r)), W && (y(u, Yi), y(u, T(_t(W))), y(u, $r)), re = v(u, Qa), re;
    }
    function qi(u, p) {
      return v(u, Ga);
    }
    function Sa(u, p) {
      return v(u, Ga);
    }
    function cl(u, p) {
      return v(u, Ga);
    }
    var Gi = m('<div hidden id="'), Ea = m('">'), Zi = m("</div>"), Qi = m('<svg aria-hidden="true" style="display:none" id="'), ka = m('">'), wa = m("</svg>"), Ji = m('<math aria-hidden="true" style="display:none" id="'), eo = m('">'), to = m("</math>"), Ja = m('<table hidden id="'), no = m('">'), b = m("</table>"), P = m('<table hidden><tbody id="'), z = m('">'), G = m("</tbody></table>"), Se = m('<table hidden><tr id="'), ve = m('">'), Ne = m("</tr></table>"), Ue = m('<table hidden><colgroup id="'), vt = m('">'), Dt = m("</colgroup></table>");
    function At(u, p, w, L) {
      switch (w.insertionMode) {
        case Bt:
        case xt:
          return y(u, Gi), y(u, p.segmentPrefix), y(u, T(L.toString(16))), v(u, Ea);
        case mn:
          return y(u, Qi), y(u, p.segmentPrefix), y(u, T(L.toString(16))), v(u, ka);
        case Sn:
          return y(u, Ji), y(u, p.segmentPrefix), y(u, T(L.toString(16))), v(u, eo);
        case Ht:
          return y(u, Ja), y(u, p.segmentPrefix), y(u, T(L.toString(16))), v(u, no);
        case En:
          return y(u, P), y(u, p.segmentPrefix), y(u, T(L.toString(16))), v(u, z);
        case xn:
          return y(u, Se), y(u, p.segmentPrefix), y(u, T(L.toString(16))), v(u, ve);
        case Xt:
          return y(u, Ue), y(u, p.segmentPrefix), y(u, T(L.toString(16))), v(u, vt);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function ln(u, p) {
      switch (p.insertionMode) {
        case Bt:
        case xt:
          return v(u, Zi);
        case mn:
          return v(u, wa);
        case Sn:
          return v(u, to);
        case Ht:
          return v(u, b);
        case En:
          return v(u, G);
        case xn:
          return v(u, Ne);
        case Xt:
          return v(u, Dt);
        default:
          throw new Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Yn = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", Jn = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', er = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Ta = m(Yn + ';$RS("'), ro = m('$RS("'), ei = m('","'), _c = m('")<\/script>');
    function Nc(u, p, w) {
      y(u, p.startInlineScript), p.sentCompleteSegmentFunction ? y(u, ro) : (p.sentCompleteSegmentFunction = !0, y(u, Ta)), y(u, p.segmentPrefix);
      var L = T(w.toString(16));
      return y(u, L), y(u, ei), y(u, p.placeholderPrefix), y(u, L), v(u, _c);
    }
    var Fc = m(Jn + ';$RC("'), zc = m('$RC("'), $c = m('","'), Bc = m('")<\/script>');
    function dl(u, p, w, L) {
      if (y(u, p.startInlineScript), p.sentCompleteBoundaryFunction ? y(u, zc) : (p.sentCompleteBoundaryFunction = !0, y(u, Fc)), w === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      var W = T(L.toString(16));
      return y(u, w), y(u, $c), y(u, p.segmentPrefix), y(u, W), v(u, Bc);
    }
    var Ic = m(er + ';$RX("'), Hc = m('$RX("'), fl = m('"'), Wc = m(")<\/script>"), hl = m(",");
    function Os(u, p, w, L, W, re) {
      if (y(u, p.startInlineScript), p.sentClientRenderFunction ? y(u, Hc) : (p.sentClientRenderFunction = !0, y(u, Ic)), w === null)
        throw new Error("An ID must have been assigned before we can complete the boundary.");
      return y(u, w), y(u, fl), (L || W || re) && (y(u, hl), y(u, T(pl(L || "")))), (W || re) && (y(u, hl), y(u, T(pl(W || "")))), re && (y(u, hl), y(u, T(pl(re)))), v(u, Wc);
    }
    var Ms = /[<\u2028\u2029]/g;
    function pl(u) {
      var p = JSON.stringify(u);
      return p.replace(Ms, function(w) {
        switch (w) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    var lr = Object.assign, Vc = Symbol.for("react.element"), _s = Symbol.for("react.portal"), tr = Symbol.for("react.fragment"), Ns = Symbol.for("react.strict_mode"), ml = Symbol.for("react.profiler"), ao = Symbol.for("react.provider"), io = Symbol.for("react.context"), oo = Symbol.for("react.forward_ref"), ti = Symbol.for("react.suspense"), ni = Symbol.for("react.suspense_list"), ri = Symbol.for("react.memo"), Ca = Symbol.for("react.lazy"), gl = Symbol.for("react.scope"), yl = Symbol.for("react.debug_trace_mode"), lo = Symbol.for("react.legacy_hidden"), jc = Symbol.for("react.default_value"), Fs = Symbol.iterator, Uc = "@@iterator";
    function Kc(u) {
      if (u === null || typeof u != "object")
        return null;
      var p = Fs && u[Fs] || u[Uc];
      return typeof p == "function" ? p : null;
    }
    function zs(u, p, w) {
      var L = u.displayName;
      if (L)
        return L;
      var W = p.displayName || p.name || "";
      return W !== "" ? w + "(" + W + ")" : w;
    }
    function $s(u) {
      return u.displayName || "Context";
    }
    function bn(u) {
      if (u == null)
        return null;
      if (typeof u.tag == "number" && a("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof u == "function")
        return u.displayName || u.name || null;
      if (typeof u == "string")
        return u;
      switch (u) {
        case tr:
          return "Fragment";
        case _s:
          return "Portal";
        case ml:
          return "Profiler";
        case Ns:
          return "StrictMode";
        case ti:
          return "Suspense";
        case ni:
          return "SuspenseList";
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case io:
            var p = u;
            return $s(p) + ".Consumer";
          case ao:
            var w = u;
            return $s(w._context) + ".Provider";
          case oo:
            return zs(u, u.render, "ForwardRef");
          case ri:
            var L = u.displayName || null;
            return L !== null ? L : bn(u.type) || "Memo";
          case Ca: {
            var W = u, re = W._payload, pe = W._init;
            try {
              return bn(pe(re));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ai = 0, vl, gn, Aa, xl, bl, Sl, El;
    function kl() {
    }
    kl.__reactDisabledLog = !0;
    function Bs() {
      {
        if (ai === 0) {
          vl = console.log, gn = console.info, Aa = console.warn, xl = console.error, bl = console.group, Sl = console.groupCollapsed, El = console.groupEnd;
          var u = {
            configurable: !0,
            enumerable: !0,
            value: kl,
            writable: !0
          };
          Object.defineProperties(console, {
            info: u,
            log: u,
            warn: u,
            error: u,
            group: u,
            groupCollapsed: u,
            groupEnd: u
          });
        }
        ai++;
      }
    }
    function Is() {
      {
        if (ai--, ai === 0) {
          var u = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: lr({}, u, {
              value: vl
            }),
            info: lr({}, u, {
              value: gn
            }),
            warn: lr({}, u, {
              value: Aa
            }),
            error: lr({}, u, {
              value: xl
            }),
            group: lr({}, u, {
              value: bl
            }),
            groupCollapsed: lr({}, u, {
              value: Sl
            }),
            groupEnd: lr({}, u, {
              value: El
            })
          });
        }
        ai < 0 && a("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var so = r.ReactCurrentDispatcher, wl;
    function ii(u, p, w) {
      {
        if (wl === void 0)
          try {
            throw Error();
          } catch (W) {
            var L = W.stack.trim().match(/\n( *(at )?)/);
            wl = L && L[1] || "";
          }
        return `
` + wl + u;
      }
    }
    var oi = !1, Pa;
    {
      var li = typeof WeakMap == "function" ? WeakMap : Map;
      Pa = new li();
    }
    function si(u, p) {
      if (!u || oi)
        return "";
      {
        var w = Pa.get(u);
        if (w !== void 0)
          return w;
      }
      var L;
      oi = !0;
      var W = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var re;
      re = so.current, so.current = null, Bs();
      try {
        if (p) {
          var pe = function() {
            throw Error();
          };
          if (Object.defineProperty(pe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(pe, []);
            } catch (ce) {
              L = ce;
            }
            Reflect.construct(u, [], pe);
          } else {
            try {
              pe.call();
            } catch (ce) {
              L = ce;
            }
            u.call(pe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ce) {
            L = ce;
          }
          u();
        }
      } catch (ce) {
        if (ce && L && typeof ce.stack == "string") {
          for (var ke = ce.stack.split(`
`), l = L.stack.split(`
`), h = ke.length - 1, S = l.length - 1; h >= 1 && S >= 0 && ke[h] !== l[S]; )
            S--;
          for (; h >= 1 && S >= 0; h--, S--)
            if (ke[h] !== l[S]) {
              if (h !== 1 || S !== 1)
                do
                  if (h--, S--, S < 0 || ke[h] !== l[S]) {
                    var C = `
` + ke[h].replace(" at new ", " at ");
                    return u.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", u.displayName)), typeof u == "function" && Pa.set(u, C), C;
                  }
                while (h >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        oi = !1, so.current = re, Is(), Error.prepareStackTrace = W;
      }
      var F = u ? u.displayName || u.name : "", Q = F ? ii(F) : "";
      return typeof u == "function" && Pa.set(u, Q), Q;
    }
    function uo(u, p, w) {
      return si(u, !0);
    }
    function Hs(u, p, w) {
      return si(u, !1);
    }
    function Tl(u) {
      var p = u.prototype;
      return !!(p && p.isReactComponent);
    }
    function Cl(u, p, w) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return si(u, Tl(u));
      if (typeof u == "string")
        return ii(u);
      switch (u) {
        case ti:
          return ii("Suspense");
        case ni:
          return ii("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case oo:
            return Hs(u.render);
          case ri:
            return Cl(u.type, p, w);
          case Ca: {
            var L = u, W = L._payload, re = L._init;
            try {
              return Cl(re(W), p, w);
            } catch {
            }
          }
        }
      return "";
    }
    var Al = {}, Ws = r.ReactDebugCurrentFrame;
    function Ra(u) {
      if (u) {
        var p = u._owner, w = Cl(u.type, u._source, p ? p.type : null);
        Ws.setExtraStackFrame(w);
      } else
        Ws.setExtraStackFrame(null);
    }
    function Pl(u, p, w, L, W) {
      {
        var re = Function.call.bind(U);
        for (var pe in u)
          if (re(u, pe)) {
            var ke = void 0;
            try {
              if (typeof u[pe] != "function") {
                var l = Error((L || "React class") + ": " + w + " type `" + pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw l.name = "Invariant Violation", l;
              }
              ke = u[pe](p, pe, L, w, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (h) {
              ke = h;
            }
            ke && !(ke instanceof Error) && (Ra(W), a("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", L || "React class", w, pe, typeof ke), Ra(null)), ke instanceof Error && !(ke.message in Al) && (Al[ke.message] = !0, Ra(W), a("Failed %s type: %s", w, ke.message), Ra(null));
          }
      }
    }
    var co;
    co = {};
    var na = {};
    Object.freeze(na);
    function Rl(u, p) {
      {
        var w = u.contextTypes;
        if (!w)
          return na;
        var L = {};
        for (var W in w)
          L[W] = p[W];
        {
          var re = bn(u) || "Unknown";
          Pl(w, L, "context", re);
        }
        return L;
      }
    }
    function Ll(u, p, w, L) {
      {
        if (typeof u.getChildContext != "function") {
          {
            var W = bn(p) || "Unknown";
            co[W] || (co[W] = !0, a("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", W, W));
          }
          return w;
        }
        var re = u.getChildContext();
        for (var pe in re)
          if (!(pe in L))
            throw new Error((bn(p) || "Unknown") + '.getChildContext(): key "' + pe + '" is not defined in childContextTypes.');
        {
          var ke = bn(p) || "Unknown";
          Pl(L, re, "child context", ke);
        }
        return lr({}, w, re);
      }
    }
    var Ir;
    Ir = {};
    var Vs = null, ra = null;
    function aa(u) {
      u.context._currentValue = u.parentValue;
    }
    function Dl(u) {
      u.context._currentValue = u.value;
    }
    function Sr(u, p) {
      if (u !== p) {
        aa(u);
        var w = u.parent, L = p.parent;
        if (w === null) {
          if (L !== null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (L === null)
            throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
          Sr(w, L);
        }
        Dl(p);
      }
    }
    function fo(u) {
      aa(u);
      var p = u.parent;
      p !== null && fo(p);
    }
    function ho(u) {
      var p = u.parent;
      p !== null && ho(p), Dl(u);
    }
    function ui(u, p) {
      aa(u);
      var w = u.parent;
      if (w === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      w.depth === p.depth ? Sr(w, p) : ui(w, p);
    }
    function Ol(u, p) {
      var w = p.parent;
      if (w === null)
        throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      u.depth === w.depth ? Sr(u, w) : Ol(u, w), Dl(p);
    }
    function ci(u) {
      var p = ra, w = u;
      p !== w && (p === null ? ho(w) : w === null ? fo(p) : p.depth === w.depth ? Sr(p, w) : p.depth > w.depth ? ui(p, w) : Ol(p, w), ra = w);
    }
    function js(u, p) {
      var w;
      w = u._currentValue, u._currentValue = p, u._currentRenderer !== void 0 && u._currentRenderer !== null && u._currentRenderer !== Ir && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), u._currentRenderer = Ir;
      var L = ra, W = {
        parent: L,
        depth: L === null ? 0 : L.depth + 1,
        context: u,
        parentValue: w,
        value: p
      };
      return ra = W, W;
    }
    function Us(u) {
      var p = ra;
      if (p === null)
        throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
      p.context !== u && a("The parent context is not the expected context. This is probably a bug in React.");
      {
        var w = p.parentValue;
        w === jc ? p.context._currentValue = p.context._defaultValue : p.context._currentValue = w, u._currentRenderer !== void 0 && u._currentRenderer !== null && u._currentRenderer !== Ir && a("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), u._currentRenderer = Ir;
      }
      return ra = p.parent;
    }
    function po() {
      return ra;
    }
    function di(u) {
      var p = u._currentValue;
      return p;
    }
    function Ml(u) {
      return u._reactInternals;
    }
    function Yc(u, p) {
      u._reactInternals = p;
    }
    var La = {}, mo = {}, _l, go, yo, fi, vo, Da, hi, xo, Oa;
    {
      _l = /* @__PURE__ */ new Set(), go = /* @__PURE__ */ new Set(), yo = /* @__PURE__ */ new Set(), hi = /* @__PURE__ */ new Set(), fi = /* @__PURE__ */ new Set(), xo = /* @__PURE__ */ new Set(), Oa = /* @__PURE__ */ new Set();
      var bo = /* @__PURE__ */ new Set();
      Da = function(u, p) {
        if (!(u === null || typeof u == "function")) {
          var w = p + "_" + u;
          bo.has(w) || (bo.add(w), a("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", p, u));
        }
      }, vo = function(u, p) {
        if (p === void 0) {
          var w = bn(u) || "Component";
          fi.has(w) || (fi.add(w), a("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", w));
        }
      };
    }
    function So(u, p) {
      {
        var w = u.constructor, L = w && bn(w) || "ReactClass", W = L + "." + p;
        if (La[W])
          return;
        a(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, p, p, L), La[W] = !0;
      }
    }
    var Eo = {
      isMounted: function(u) {
        return !1;
      },
      enqueueSetState: function(u, p, w) {
        var L = Ml(u);
        L.queue === null ? So(u, "setState") : (L.queue.push(p), w != null && Da(w, "setState"));
      },
      enqueueReplaceState: function(u, p, w) {
        var L = Ml(u);
        L.replace = !0, L.queue = [p], w != null && Da(w, "setState");
      },
      enqueueForceUpdate: function(u, p) {
        var w = Ml(u);
        w.queue === null ? So(u, "forceUpdate") : p != null && Da(p, "setState");
      }
    };
    function Ks(u, p, w, L, W) {
      var re = w(W, L);
      vo(p, re);
      var pe = re == null ? L : lr({}, L, re);
      return pe;
    }
    function Ys(u, p, w) {
      var L = na, W = u.contextType;
      if ("contextType" in u) {
        var re = (
          // Allow null for conditional declaration
          W === null || W !== void 0 && W.$$typeof === io && W._context === void 0
        );
        if (!re && !Oa.has(u)) {
          Oa.add(u);
          var pe = "";
          W === void 0 ? pe = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof W != "object" ? pe = " However, it is set to a " + typeof W + "." : W.$$typeof === ao ? pe = " Did you accidentally pass the Context.Provider instead?" : W._context !== void 0 ? pe = " Did you accidentally pass the Context.Consumer instead?" : pe = " However, it is set to an object with keys {" + Object.keys(W).join(", ") + "}.", a("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", bn(u) || "Component", pe);
        }
      }
      typeof W == "object" && W !== null ? L = di(W) : L = w;
      var ke = new u(p, L);
      {
        if (typeof u.getDerivedStateFromProps == "function" && (ke.state === null || ke.state === void 0)) {
          var l = bn(u) || "Component";
          _l.has(l) || (_l.add(l), a("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", l, ke.state === null ? "null" : "undefined", l));
        }
        if (typeof u.getDerivedStateFromProps == "function" || typeof ke.getSnapshotBeforeUpdate == "function") {
          var h = null, S = null, C = null;
          if (typeof ke.componentWillMount == "function" && ke.componentWillMount.__suppressDeprecationWarning !== !0 ? h = "componentWillMount" : typeof ke.UNSAFE_componentWillMount == "function" && (h = "UNSAFE_componentWillMount"), typeof ke.componentWillReceiveProps == "function" && ke.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? S = "componentWillReceiveProps" : typeof ke.UNSAFE_componentWillReceiveProps == "function" && (S = "UNSAFE_componentWillReceiveProps"), typeof ke.componentWillUpdate == "function" && ke.componentWillUpdate.__suppressDeprecationWarning !== !0 ? C = "componentWillUpdate" : typeof ke.UNSAFE_componentWillUpdate == "function" && (C = "UNSAFE_componentWillUpdate"), h !== null || S !== null || C !== null) {
            var F = bn(u) || "Component", Q = typeof u.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            yo.has(F) || (yo.add(F), a(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, F, Q, h !== null ? `
  ` + h : "", S !== null ? `
  ` + S : "", C !== null ? `
  ` + C : ""));
          }
        }
      }
      return ke;
    }
    function Xs(u, p, w) {
      {
        var L = bn(p) || "Component", W = u.render;
        W || (p.prototype && typeof p.prototype.render == "function" ? a("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", L) : a("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", L)), u.getInitialState && !u.getInitialState.isReactClassApproved && !u.state && a("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", L), u.getDefaultProps && !u.getDefaultProps.isReactClassApproved && a("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", L), u.propTypes && a("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", L), u.contextType && a("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", L), u.contextTypes && a("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", L), p.contextType && p.contextTypes && !xo.has(p) && (xo.add(p), a("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", L)), typeof u.componentShouldUpdate == "function" && a("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", L), p.prototype && p.prototype.isPureReactComponent && typeof u.shouldComponentUpdate < "u" && a("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", bn(p) || "A pure component"), typeof u.componentDidUnmount == "function" && a("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", L), typeof u.componentDidReceiveProps == "function" && a("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", L), typeof u.componentWillRecieveProps == "function" && a("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", L), typeof u.UNSAFE_componentWillRecieveProps == "function" && a("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", L);
        var re = u.props !== w;
        u.props !== void 0 && re && a("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", L, L), u.defaultProps && a("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", L, L), typeof u.getSnapshotBeforeUpdate == "function" && typeof u.componentDidUpdate != "function" && !go.has(p) && (go.add(p), a("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", bn(p))), typeof u.getDerivedStateFromProps == "function" && a("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", L), typeof u.getDerivedStateFromError == "function" && a("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", L), typeof p.getSnapshotBeforeUpdate == "function" && a("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", L);
        var pe = u.state;
        pe && (typeof pe != "object" || ot(pe)) && a("%s.state: must be set to an object or null", L), typeof u.getChildContext == "function" && typeof p.childContextTypes != "object" && a("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", L);
      }
    }
    function Xc(u, p) {
      var w = p.state;
      if (typeof p.componentWillMount == "function") {
        if (p.componentWillMount.__suppressDeprecationWarning !== !0) {
          var L = bn(u) || "Unknown";
          mo[L] || (n(
            // keep this warning in sync with ReactStrictModeWarning.js
            `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
            L
          ), mo[L] = !0);
        }
        p.componentWillMount();
      }
      typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), w !== p.state && (a("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", bn(u) || "Component"), Eo.enqueueReplaceState(p, p.state, null));
    }
    function qc(u, p, w, L) {
      if (u.queue !== null && u.queue.length > 0) {
        var W = u.queue, re = u.replace;
        if (u.queue = null, u.replace = !1, re && W.length === 1)
          p.state = W[0];
        else {
          for (var pe = re ? W[0] : p.state, ke = !0, l = re ? 1 : 0; l < W.length; l++) {
            var h = W[l], S = typeof h == "function" ? h.call(p, pe, w, L) : h;
            S != null && (ke ? (ke = !1, pe = lr({}, pe, S)) : lr(pe, S));
          }
          p.state = pe;
        }
      } else
        u.queue = null;
    }
    function qs(u, p, w, L) {
      Xs(u, p, w);
      var W = u.state !== void 0 ? u.state : null;
      u.updater = Eo, u.props = w, u.state = W;
      var re = {
        queue: [],
        replace: !1
      };
      Yc(u, re);
      var pe = p.contextType;
      if (typeof pe == "object" && pe !== null ? u.context = di(pe) : u.context = L, u.state === w) {
        var ke = bn(p) || "Component";
        hi.has(ke) || (hi.add(ke), a("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", ke));
      }
      var l = p.getDerivedStateFromProps;
      typeof l == "function" && (u.state = Ks(u, p, l, W, w)), typeof p.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Xc(p, u), qc(re, u, w, L));
    }
    var Gc = {
      id: 1,
      overflow: ""
    };
    function Zc(u) {
      var p = u.overflow, w = u.id, L = w & ~Qc(w);
      return L.toString(32) + p;
    }
    function ko(u, p, w) {
      var L = u.id, W = u.overflow, re = wo(L) - 1, pe = L & ~(1 << re), ke = w + 1, l = wo(p) + re;
      if (l > 30) {
        var h = re - re % 5, S = (1 << h) - 1, C = (pe & S).toString(32), F = pe >> h, Q = re - h, ce = wo(p) + Q, Ee = ke << Q, Be = Ee | F, tt = C + W;
        return {
          id: 1 << ce | Be,
          overflow: tt
        };
      } else {
        var ct = ke << re, St = ct | pe, dn = W;
        return {
          id: 1 << l | St,
          overflow: dn
        };
      }
    }
    function wo(u) {
      return 32 - Nl(u);
    }
    function Qc(u) {
      return 1 << wo(u) - 1;
    }
    var Nl = Math.clz32 ? Math.clz32 : ed, To = Math.log, Jc = Math.LN2;
    function ed(u) {
      var p = u >>> 0;
      return p === 0 ? 32 : 31 - (To(p) / Jc | 0) | 0;
    }
    function td(u, p) {
      return u === p && (u !== 0 || 1 / u === 1 / p) || u !== u && p !== p;
    }
    var nd = typeof Object.is == "function" ? Object.is : td, Lr = null, Fl = null, Co = null, Wt = null, ia = !1, oa = !1, tn = 0, sr = null, la = 0, Ao = 25, In = !1, Dr;
    function sa() {
      if (Lr === null)
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
      return In && a("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), Lr;
    }
    function Er(u, p) {
      if (p === null)
        return a("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Dr), !1;
      u.length !== p.length && a(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Dr, "[" + u.join(", ") + "]", "[" + p.join(", ") + "]");
      for (var w = 0; w < p.length && w < u.length; w++)
        if (!nd(u[w], p[w]))
          return !1;
      return !0;
    }
    function ua() {
      if (la > 0)
        throw new Error("Rendered more hooks than during the previous render");
      return {
        memoizedState: null,
        queue: null,
        next: null
      };
    }
    function Or() {
      return Wt === null ? Co === null ? (ia = !1, Co = Wt = ua()) : (ia = !0, Wt = Co) : Wt.next === null ? (ia = !1, Wt = Wt.next = ua()) : (ia = !0, Wt = Wt.next), Wt;
    }
    function rd(u, p) {
      Lr = p, Fl = u, In = !1, tn = 0;
    }
    function Gs(u, p, w, L) {
      for (; oa; )
        oa = !1, tn = 0, la += 1, Wt = null, w = u(p, L);
      return zl(), w;
    }
    function Po() {
      var u = tn !== 0;
      return u;
    }
    function zl() {
      In = !1, Lr = null, Fl = null, oa = !1, Co = null, la = 0, sr = null, Wt = null;
    }
    function ad(u) {
      return In && a("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), di(u);
    }
    function Zs(u) {
      return Dr = "useContext", sa(), di(u);
    }
    function pi(u, p) {
      return typeof p == "function" ? p(u) : p;
    }
    function id(u) {
      return Dr = "useState", Qs(
        pi,
        // useReducer has a special case to support lazy useState initializers
        u
      );
    }
    function Qs(u, p, w) {
      if (u !== pi && (Dr = "useReducer"), Lr = sa(), Wt = Or(), ia) {
        var L = Wt.queue, W = L.dispatch;
        if (sr !== null) {
          var re = sr.get(L);
          if (re !== void 0) {
            sr.delete(L);
            var pe = Wt.memoizedState, ke = re;
            do {
              var l = ke.action;
              In = !0, pe = u(pe, l), In = !1, ke = ke.next;
            } while (ke !== null);
            return Wt.memoizedState = pe, [pe, W];
          }
        }
        return [Wt.memoizedState, W];
      } else {
        In = !0;
        var h;
        u === pi ? h = typeof p == "function" ? p() : p : h = w !== void 0 ? w(p) : p, In = !1, Wt.memoizedState = h;
        var S = Wt.queue = {
          last: null,
          dispatch: null
        }, C = S.dispatch = eu.bind(null, Lr, S);
        return [Wt.memoizedState, C];
      }
    }
    function Ro(u, p) {
      Lr = sa(), Wt = Or();
      var w = p === void 0 ? null : p;
      if (Wt !== null) {
        var L = Wt.memoizedState;
        if (L !== null && w !== null) {
          var W = L[1];
          if (Er(w, W))
            return L[0];
        }
      }
      In = !0;
      var re = u();
      return In = !1, Wt.memoizedState = [re, w], re;
    }
    function od(u) {
      Lr = sa(), Wt = Or();
      var p = Wt.memoizedState;
      if (p === null) {
        var w = {
          current: u
        };
        return Object.seal(w), Wt.memoizedState = w, w;
      } else
        return p;
    }
    function Js(u, p) {
      Dr = "useLayoutEffect", a("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
    }
    function eu(u, p, w) {
      if (la >= Ao)
        throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (u === Lr) {
        oa = !0;
        var L = {
          action: w,
          next: null
        };
        sr === null && (sr = /* @__PURE__ */ new Map());
        var W = sr.get(p);
        if (W === void 0)
          sr.set(p, L);
        else {
          for (var re = W; re.next !== null; )
            re = re.next;
          re.next = L;
        }
      }
    }
    function ld(u, p) {
      return Ro(function() {
        return u;
      }, p);
    }
    function sd(u, p, w) {
      return sa(), p(u._source);
    }
    function ud(u, p, w) {
      if (w === void 0)
        throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return w();
    }
    function cd(u) {
      return sa(), u;
    }
    function dd() {
      throw new Error("startTransition cannot be called during server rendering.");
    }
    function fd() {
      return sa(), [!1, dd];
    }
    function hd() {
      var u = Fl, p = Zc(u.treeContext), w = $l;
      if (w === null)
        throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      var L = tn++;
      return sn(w, p, L);
    }
    function Lo() {
    }
    var tu = {
      readContext: ad,
      useContext: Zs,
      useMemo: Ro,
      useReducer: Qs,
      useRef: od,
      useState: id,
      useInsertionEffect: Lo,
      useLayoutEffect: Js,
      useCallback: ld,
      // useImperativeHandle is not run in the server environment
      useImperativeHandle: Lo,
      // Effects are not run in the server environment.
      useEffect: Lo,
      // Debugging effect
      useDebugValue: Lo,
      useDeferredValue: cd,
      useTransition: fd,
      useId: hd,
      // Subscriptions are not setup in a server environment.
      useMutableSource: sd,
      useSyncExternalStore: ud
    }, $l = null;
    function mi(u) {
      $l = u;
    }
    function nu(u) {
      try {
        var p = "", w = u;
        do {
          switch (w.tag) {
            case 0:
              p += ii(w.type, null, null);
              break;
            case 1:
              p += Hs(w.type, null, null);
              break;
            case 2:
              p += uo(w.type, null, null);
              break;
          }
          w = w.parent;
        } while (w);
        return p;
      } catch (L) {
        return `
Error generating stack: ` + L.message + `
` + L.stack;
      }
    }
    var gi = r.ReactCurrentDispatcher, Do = r.ReactDebugCurrentFrame, Bl = 0, Hr = 1, Oo = 2, Mo = 3, ca = 4, ru = 0, Il = 1, da = 2, pd = 12800;
    function au(u) {
      return console.error(u), null;
    }
    function kr() {
    }
    function md(u, p, w, L, W, re, pe, ke, l) {
      var h = [], S = /* @__PURE__ */ new Set(), C = {
        destination: null,
        responseState: p,
        progressiveChunkSize: L === void 0 ? pd : L,
        status: ru,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: S,
        pingedTasks: h,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: W === void 0 ? au : W,
        onAllReady: re === void 0 ? kr : re,
        onShellReady: pe === void 0 ? kr : pe,
        onShellError: ke === void 0 ? kr : ke,
        onFatalError: l === void 0 ? kr : l
      }, F = _o(
        C,
        0,
        null,
        w,
        // Root segments are never embedded in Text on either edge
        !1,
        !1
      );
      F.parentFlushed = !0;
      var Q = Hl(C, u, null, F, S, na, Vs, Gc);
      return h.push(Q), C;
    }
    function gd(u, p) {
      var w = u.pingedTasks;
      w.push(p), w.length === 1 && f(function() {
        return Ei(u);
      });
    }
    function yi(u, p) {
      return {
        id: or,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        forceClientRender: !1,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: p,
        errorDigest: null
      };
    }
    function Hl(u, p, w, L, W, re, pe, ke) {
      u.allPendingTasks++, w === null ? u.pendingRootTasks++ : w.pendingTasks++;
      var l = {
        node: p,
        ping: function() {
          return gd(u, l);
        },
        blockedBoundary: w,
        blockedSegment: L,
        abortSet: W,
        legacyContext: re,
        context: pe,
        treeContext: ke
      };
      return l.componentStack = null, W.add(l), l;
    }
    function _o(u, p, w, L, W, re) {
      return {
        status: Bl,
        id: -1,
        // lazily assigned later
        index: p,
        parentFlushed: !1,
        chunks: [],
        children: [],
        formatContext: L,
        boundary: w,
        lastPushedText: W,
        textEmbedded: re
      };
    }
    var Mr = null;
    function vi() {
      return Mr === null || Mr.componentStack === null ? "" : nu(Mr.componentStack);
    }
    function Wr(u, p) {
      u.componentStack = {
        tag: 0,
        parent: u.componentStack,
        type: p
      };
    }
    function wr(u, p) {
      u.componentStack = {
        tag: 1,
        parent: u.componentStack,
        type: p
      };
    }
    function Wl(u, p) {
      u.componentStack = {
        tag: 2,
        parent: u.componentStack,
        type: p
      };
    }
    function ur(u) {
      u.componentStack === null ? a("Unexpectedly popped too many stack frames. This is a bug in React.") : u.componentStack = u.componentStack.parent;
    }
    var Ma = null;
    function Vl(u, p) {
      {
        var w;
        typeof p == "string" ? w = p : p && typeof p.message == "string" ? w = p.message : w = String(p);
        var L = Ma || vi();
        Ma = null, u.errorMessage = w, u.errorComponentStack = L;
      }
    }
    function cr(u, p) {
      var w = u.onError(p);
      if (w != null && typeof w != "string")
        throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof w + '" instead');
      return w;
    }
    function Vr(u, p) {
      var w = u.onShellError;
      w(p);
      var L = u.onFatalError;
      L(p), u.destination !== null ? (u.status = da, R(u.destination, p)) : (u.status = Il, u.fatalError = p);
    }
    function jl(u, p, w) {
      Wr(p, "Suspense");
      var L = p.blockedBoundary, W = p.blockedSegment, re = w.fallback, pe = w.children, ke = /* @__PURE__ */ new Set(), l = yi(u, ke), h = W.chunks.length, S = _o(
        u,
        h,
        l,
        W.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      W.children.push(S), W.lastPushedText = !1;
      var C = _o(
        u,
        0,
        null,
        W.formatContext,
        // boundaries never require text embedding at their edges because comment nodes bound them
        !1,
        !1
      );
      C.parentFlushed = !0, p.blockedBoundary = l, p.blockedSegment = C;
      try {
        if (Jl(u, p, pe), pr(C.chunks, u.responseState, C.lastPushedText, C.textEmbedded), C.status = Hr, zo(l, C), l.pendingTasks === 0) {
          ur(p);
          return;
        }
      } catch (Q) {
        C.status = ca, l.forceClientRender = !0, l.errorDigest = cr(u, Q), Vl(l, Q);
      } finally {
        p.blockedBoundary = L, p.blockedSegment = W;
      }
      var F = Hl(u, re, L, S, ke, p.legacyContext, p.context, p.treeContext);
      F.componentStack = p.componentStack, u.pingedTasks.push(F), ur(p);
    }
    function xi(u, p, w, L) {
      Wr(p, w);
      var W = p.blockedSegment, re = qa(W.chunks, w, L, u.responseState, W.formatContext);
      W.lastPushedText = !1;
      var pe = W.formatContext;
      W.formatContext = Vn(pe, w, L), Jl(u, p, re), W.formatContext = pe, Ki(W.chunks, w), W.lastPushedText = !1, ur(p);
    }
    function No(u) {
      return u.prototype && u.prototype.isReactComponent;
    }
    function iu(u, p, w, L, W) {
      var re = {};
      rd(p, re);
      var pe = w(L, W);
      return Gs(w, L, pe, W);
    }
    function ou(u, p, w, L, W) {
      var re = w.render();
      w.props !== W && (Si || a("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", bn(L) || "a component"), Si = !0);
      {
        var pe = L.childContextTypes;
        if (pe != null) {
          var ke = p.legacyContext, l = Ll(w, L, ke, pe);
          p.legacyContext = l, nr(u, p, re), p.legacyContext = ke;
          return;
        }
      }
      nr(u, p, re);
    }
    function yd(u, p, w, L) {
      Wl(p, w);
      var W = Rl(w, p.legacyContext), re = Ys(w, L, W);
      qs(re, w, L, W), ou(u, p, re, w, L), ur(p);
    }
    var Ul = {}, bi = {}, lu = {}, Kl = {}, Si = !1, Yl = !1, Xl = !1, ql = !1;
    function su(u, p, w, L) {
      var W;
      if (W = Rl(w, p.legacyContext), wr(p, w), w.prototype && typeof w.prototype.render == "function") {
        var re = bn(w) || "Unknown";
        Ul[re] || (a("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", re, re), Ul[re] = !0);
      }
      var pe = iu(u, p, w, L, W), ke = Po();
      if (typeof pe == "object" && pe !== null && typeof pe.render == "function" && pe.$$typeof === void 0) {
        var l = bn(w) || "Unknown";
        bi[l] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", l, l, l), bi[l] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof pe == "object" && pe !== null && typeof pe.render == "function" && pe.$$typeof === void 0
      ) {
        {
          var h = bn(w) || "Unknown";
          bi[h] || (a("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", h, h, h), bi[h] = !0);
        }
        qs(pe, w, L, W), ou(u, p, pe, w, L);
      } else if (uu(w), ke) {
        var S = p.treeContext, C = 1, F = 0;
        p.treeContext = ko(S, C, F);
        try {
          nr(u, p, pe);
        } finally {
          p.treeContext = S;
        }
      } else
        nr(u, p, pe);
      ur(p);
    }
    function uu(u) {
      {
        if (u && u.childContextTypes && a("%s(...): childContextTypes cannot be defined on a function component.", u.displayName || u.name || "Component"), typeof u.getDerivedStateFromProps == "function") {
          var p = bn(u) || "Unknown";
          Kl[p] || (a("%s: Function components do not support getDerivedStateFromProps.", p), Kl[p] = !0);
        }
        if (typeof u.contextType == "object" && u.contextType !== null) {
          var w = bn(u) || "Unknown";
          lu[w] || (a("%s: Function components do not support contextType.", w), lu[w] = !0);
        }
      }
    }
    function Gl(u, p) {
      if (u && u.defaultProps) {
        var w = lr({}, p), L = u.defaultProps;
        for (var W in L)
          w[W] === void 0 && (w[W] = L[W]);
        return w;
      }
      return p;
    }
    function vd(u, p, w, L, W) {
      wr(p, w.render);
      var re = iu(u, p, w.render, L, W), pe = Po();
      if (pe) {
        var ke = p.treeContext, l = 1, h = 0;
        p.treeContext = ko(ke, l, h);
        try {
          nr(u, p, re);
        } finally {
          p.treeContext = ke;
        }
      } else
        nr(u, p, re);
      ur(p);
    }
    function xd(u, p, w, L, W) {
      var re = w.type, pe = Gl(re, L);
      Zl(u, p, re, pe, W);
    }
    function cu(u, p, w, L) {
      w._context === void 0 ? w !== w.Consumer && (ql || (ql = !0, a("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : w = w._context;
      var W = L.children;
      typeof W != "function" && a("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
      var re = di(w), pe = W(re);
      nr(u, p, pe);
    }
    function bd(u, p, w, L) {
      var W = w._context, re = L.value, pe = L.children, ke;
      ke = p.context, p.context = js(W, re), nr(u, p, pe), p.context = Us(W), ke !== p.context && a("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
    }
    function Sd(u, p, w, L, W) {
      Wr(p, "Lazy");
      var re = w._payload, pe = w._init, ke = pe(re), l = Gl(ke, L);
      Zl(u, p, ke, l, W), ur(p);
    }
    function Zl(u, p, w, L, W) {
      if (typeof w == "function")
        if (No(w)) {
          yd(u, p, w, L);
          return;
        } else {
          su(u, p, w, L);
          return;
        }
      if (typeof w == "string") {
        xi(u, p, w, L);
        return;
      }
      switch (w) {
        case lo:
        case yl:
        case Ns:
        case ml:
        case tr: {
          nr(u, p, L.children);
          return;
        }
        case ni: {
          Wr(p, "SuspenseList"), nr(u, p, L.children), ur(p);
          return;
        }
        case gl:
          throw new Error("ReactDOMServer does not yet support scope components.");
        case ti: {
          jl(u, p, L);
          return;
        }
      }
      if (typeof w == "object" && w !== null)
        switch (w.$$typeof) {
          case oo: {
            vd(u, p, w, L, W);
            return;
          }
          case ri: {
            xd(u, p, w, L, W);
            return;
          }
          case ao: {
            bd(u, p, w, L);
            return;
          }
          case io: {
            cu(u, p, w, L);
            return;
          }
          case Ca: {
            Sd(u, p, w, L);
            return;
          }
        }
      var re = "";
      throw (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (re += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (w == null ? w : typeof w) + "." + re));
    }
    function Ed(u, p) {
      typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
      u[Symbol.toStringTag] === "Generator" && (Yl || a("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Yl = !0), u.entries === p && (Xl || a("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Xl = !0);
    }
    function nr(u, p, w) {
      try {
        return Ql(u, p, w);
      } catch (L) {
        throw typeof L == "object" && L !== null && typeof L.then == "function" || (Ma = Ma !== null ? Ma : vi()), L;
      }
    }
    function Ql(u, p, w) {
      if (p.node = w, typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case Vc: {
            var L = w, W = L.type, re = L.props, pe = L.ref;
            Zl(u, p, W, re, pe);
            return;
          }
          case _s:
            throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case Ca: {
            var ke = w, l = ke._payload, h = ke._init, S;
            try {
              S = h(l);
            } catch (ct) {
              throw typeof ct == "object" && ct !== null && typeof ct.then == "function" && Wr(p, "Lazy"), ct;
            }
            nr(u, p, S);
            return;
          }
        }
        if (ot(w)) {
          du(u, p, w);
          return;
        }
        var C = Kc(w);
        if (C) {
          Ed(w, C);
          var F = C.call(w);
          if (F) {
            var Q = F.next();
            if (!Q.done) {
              var ce = [];
              do
                ce.push(Q.value), Q = F.next();
              while (!Q.done);
              du(u, p, ce);
              return;
            }
            return;
          }
        }
        var Ee = Object.prototype.toString.call(w);
        throw new Error("Objects are not valid as a React child (found: " + (Ee === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : Ee) + "). If you meant to render a collection of children, use an array instead.");
      }
      if (typeof w == "string") {
        var Be = p.blockedSegment;
        Be.lastPushedText = hr(p.blockedSegment.chunks, w, u.responseState, Be.lastPushedText);
        return;
      }
      if (typeof w == "number") {
        var tt = p.blockedSegment;
        tt.lastPushedText = hr(p.blockedSegment.chunks, "" + w, u.responseState, tt.lastPushedText);
        return;
      }
      typeof w == "function" && a("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    }
    function du(u, p, w) {
      for (var L = w.length, W = 0; W < L; W++) {
        var re = p.treeContext;
        p.treeContext = ko(re, L, W);
        try {
          Jl(u, p, w[W]);
        } finally {
          p.treeContext = re;
        }
      }
    }
    function rr(u, p, w) {
      var L = p.blockedSegment, W = L.chunks.length, re = _o(
        u,
        W,
        null,
        L.formatContext,
        // Adopt the parent segment's leading text embed
        L.lastPushedText,
        // Assume we are text embedded at the trailing edge
        !0
      );
      L.children.push(re), L.lastPushedText = !1;
      var pe = Hl(u, p.node, p.blockedBoundary, re, p.abortSet, p.legacyContext, p.context, p.treeContext);
      p.componentStack !== null && (pe.componentStack = p.componentStack.parent);
      var ke = pe.ping;
      w.then(ke, ke);
    }
    function Jl(u, p, w) {
      var L = p.blockedSegment.formatContext, W = p.legacyContext, re = p.context, pe = null;
      pe = p.componentStack;
      try {
        return nr(u, p, w);
      } catch (ke) {
        if (zl(), typeof ke == "object" && ke !== null && typeof ke.then == "function") {
          rr(u, p, ke), p.blockedSegment.formatContext = L, p.legacyContext = W, p.context = re, ci(re), p.componentStack = pe;
          return;
        } else
          throw p.blockedSegment.formatContext = L, p.legacyContext = W, p.context = re, ci(re), p.componentStack = pe, ke;
      }
    }
    function fu(u, p, w, L) {
      var W = cr(u, L);
      if (p === null ? Vr(u, L) : (p.pendingTasks--, p.forceClientRender || (p.forceClientRender = !0, p.errorDigest = W, Vl(p, L), p.parentFlushed && u.clientRenderedBoundaries.push(p))), u.allPendingTasks--, u.allPendingTasks === 0) {
        var re = u.onAllReady;
        re();
      }
    }
    function kd(u) {
      var p = this, w = u.blockedBoundary, L = u.blockedSegment;
      L.status = Mo, hu(p, w, L);
    }
    function Fo(u, p, w) {
      var L = u.blockedBoundary, W = u.blockedSegment;
      if (W.status = Mo, L === null)
        p.allPendingTasks--, p.status !== da && (p.status = da, p.destination !== null && k(p.destination));
      else {
        if (L.pendingTasks--, !L.forceClientRender) {
          L.forceClientRender = !0;
          var re = w === void 0 ? new Error("The render was aborted by the server without a reason.") : w;
          L.errorDigest = p.onError(re);
          {
            var pe = "The server did not finish this Suspense boundary: ";
            re && typeof re.message == "string" ? re = pe + re.message : re = pe + String(re);
            var ke = Mr;
            Mr = u;
            try {
              Vl(L, re);
            } finally {
              Mr = ke;
            }
          }
          L.parentFlushed && p.clientRenderedBoundaries.push(L);
        }
        if (L.fallbackAbortableTasks.forEach(function(h) {
          return Fo(h, p, w);
        }), L.fallbackAbortableTasks.clear(), p.allPendingTasks--, p.allPendingTasks === 0) {
          var l = p.onAllReady;
          l();
        }
      }
    }
    function zo(u, p) {
      if (p.chunks.length === 0 && p.children.length === 1 && p.children[0].boundary === null) {
        var w = p.children[0];
        w.id = p.id, w.parentFlushed = !0, w.status === Hr && zo(u, w);
      } else {
        var L = u.completedSegments;
        L.push(p);
      }
    }
    function hu(u, p, w) {
      if (p === null) {
        if (w.parentFlushed) {
          if (u.completedRootSegment !== null)
            throw new Error("There can only be one root segment. This is a bug in React.");
          u.completedRootSegment = w;
        }
        if (u.pendingRootTasks--, u.pendingRootTasks === 0) {
          u.onShellError = kr;
          var L = u.onShellReady;
          L();
        }
      } else if (p.pendingTasks--, !p.forceClientRender) {
        if (p.pendingTasks === 0)
          w.parentFlushed && w.status === Hr && zo(p, w), p.parentFlushed && u.completedBoundaries.push(p), p.fallbackAbortableTasks.forEach(kd, u), p.fallbackAbortableTasks.clear();
        else if (w.parentFlushed && w.status === Hr) {
          zo(p, w);
          var W = p.completedSegments;
          W.length === 1 && p.parentFlushed && u.partialBoundaries.push(p);
        }
      }
      if (u.allPendingTasks--, u.allPendingTasks === 0) {
        var re = u.onAllReady;
        re();
      }
    }
    function pu(u, p) {
      var w = p.blockedSegment;
      if (w.status === Bl) {
        ci(p.context);
        var L = null;
        L = Mr, Mr = p;
        try {
          nr(u, p, p.node), pr(w.chunks, u.responseState, w.lastPushedText, w.textEmbedded), p.abortSet.delete(p), w.status = Hr, hu(u, p.blockedBoundary, w);
        } catch (re) {
          if (zl(), typeof re == "object" && re !== null && typeof re.then == "function") {
            var W = p.ping;
            re.then(W, W);
          } else
            p.abortSet.delete(p), w.status = ca, fu(u, p.blockedBoundary, w, re);
        } finally {
          Mr = L;
        }
      }
    }
    function Ei(u) {
      if (u.status !== da) {
        var p = po(), w = gi.current;
        gi.current = tu;
        var L;
        L = Do.getCurrentStack, Do.getCurrentStack = vi;
        var W = $l;
        mi(u.responseState);
        try {
          var re = u.pingedTasks, pe;
          for (pe = 0; pe < re.length; pe++) {
            var ke = re[pe];
            pu(u, ke);
          }
          re.splice(0, pe), u.destination !== null && Bo(u, u.destination);
        } catch (l) {
          cr(u, l), Vr(u, l);
        } finally {
          mi(W), gi.current = w, Do.getCurrentStack = L, w === tu && ci(p);
        }
      }
    }
    function ki(u, p, w) {
      switch (w.parentFlushed = !0, w.status) {
        case Bl: {
          var L = w.id = u.nextSegmentId++;
          return w.lastPushedText = !1, w.textEmbedded = !1, ya(p, u.responseState, L);
        }
        case Hr: {
          w.status = Oo;
          for (var W = !0, re = w.chunks, pe = 0, ke = w.children, l = 0; l < ke.length; l++) {
            for (var h = ke[l]; pe < h.index; pe++)
              y(p, re[pe]);
            W = $o(u, p, h);
          }
          for (; pe < re.length - 1; pe++)
            y(p, re[pe]);
          return pe < re.length && (W = v(p, re[pe])), W;
        }
        default:
          throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function $o(u, p, w) {
      var L = w.boundary;
      if (L === null)
        return ki(u, p, w);
      if (L.parentFlushed = !0, L.forceClientRender)
        return Kn(p, u.responseState, L.errorDigest, L.errorMessage, L.errorComponentStack), ki(u, p, w), cl(p, u.responseState);
      if (L.pendingTasks > 0) {
        L.rootSegmentID = u.nextSegmentId++, L.completedSegments.length > 0 && u.partialBoundaries.push(L);
        var W = L.id = Zn(u.responseState);
        return ba(p, u.responseState, W), ki(u, p, w), Sa(p, u.responseState);
      } else {
        if (L.byteSize > u.progressiveChunkSize)
          return L.rootSegmentID = u.nextSegmentId++, u.completedBoundaries.push(L), ba(p, u.responseState, L.id), ki(u, p, w), Sa(p, u.responseState);
        Xi(p, u.responseState);
        var re = L.completedSegments;
        if (re.length !== 1)
          throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        var pe = re[0];
        return $o(u, p, pe), qi(p, u.responseState);
      }
    }
    function mu(u, p, w) {
      return Os(p, u.responseState, w.id, w.errorDigest, w.errorMessage, w.errorComponentStack);
    }
    function wi(u, p, w) {
      return At(p, u.responseState, w.formatContext, w.id), $o(u, p, w), ln(p, w.formatContext);
    }
    function Ti(u, p, w) {
      for (var L = w.completedSegments, W = 0; W < L.length; W++) {
        var re = L[W];
        es(u, p, w, re);
      }
      return L.length = 0, dl(p, u.responseState, w.id, w.rootSegmentID);
    }
    function wd(u, p, w) {
      for (var L = w.completedSegments, W = 0; W < L.length; W++) {
        var re = L[W];
        if (!es(u, p, w, re))
          return W++, L.splice(0, W), !1;
      }
      return L.splice(0, W), !0;
    }
    function es(u, p, w, L) {
      if (L.status === Oo)
        return !0;
      var W = L.id;
      if (W === -1) {
        var re = L.id = w.rootSegmentID;
        if (re === -1)
          throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return wi(u, p, L);
      } else
        return wi(u, p, L), Nc(p, u.responseState, W);
    }
    function Bo(u, p) {
      g();
      try {
        var w = u.completedRootSegment;
        w !== null && u.pendingRootTasks === 0 && ($o(u, p, w), u.completedRootSegment = null, ll(p, u.responseState));
        var L = u.clientRenderedBoundaries, W;
        for (W = 0; W < L.length; W++) {
          var re = L[W];
          mu(u, p, re);
        }
        L.splice(0, W);
        var pe = u.completedBoundaries;
        for (W = 0; W < pe.length; W++) {
          var ke = pe[W];
          Ti(u, p, ke);
        }
        pe.splice(0, W), E(p), g(p);
        var l = u.partialBoundaries;
        for (W = 0; W < l.length; W++) {
          var h = l[W];
          if (!wd(u, p, h)) {
            u.destination = null, W++, l.splice(0, W);
            return;
          }
        }
        l.splice(0, W);
        var S = u.completedBoundaries;
        for (W = 0; W < S.length; W++) {
          var C = S[W];
          Ti(u, p, C);
        }
        S.splice(0, W);
      } finally {
        E(p), u.allPendingTasks === 0 && u.pingedTasks.length === 0 && u.clientRenderedBoundaries.length === 0 && u.completedBoundaries.length === 0 && (u.abortableTasks.size !== 0 && a("There was still abortable task at the root when we closed. This is a bug in React."), k(p));
      }
    }
    function Td(u) {
      f(function() {
        return Ei(u);
      });
    }
    function gu(u, p) {
      if (u.status === Il) {
        u.status = da, R(p, u.fatalError);
        return;
      }
      if (u.status !== da && u.destination === null) {
        u.destination = p;
        try {
          Bo(u, p);
        } catch (w) {
          cr(u, w), Vr(u, w);
        }
      }
    }
    function Io(u, p) {
      try {
        var w = u.abortableTasks;
        w.forEach(function(L) {
          return Fo(L, u, p);
        }), w.clear(), u.destination !== null && Bo(u, u.destination);
      } catch (L) {
        cr(u, L), Vr(u, L);
      }
    }
    function Cd(u, p) {
      return new Promise(function(w, L) {
        var W, re, pe = new Promise(function(F, Q) {
          re = F, W = Q;
        });
        function ke() {
          var F = new ReadableStream(
            {
              type: "bytes",
              pull: function(Q) {
                gu(h, Q);
              },
              cancel: function(Q) {
                Io(h);
              }
            },
            // $FlowFixMe size() methods are not allowed on byte streams.
            {
              highWaterMark: 0
            }
          );
          F.allReady = pe, w(F);
        }
        function l(F) {
          pe.catch(function() {
          }), L(F);
        }
        var h = md(u, $t(p ? p.identifierPrefix : void 0, p ? p.nonce : void 0, p ? p.bootstrapScriptContent : void 0, p ? p.bootstrapScripts : void 0, p ? p.bootstrapModules : void 0), Bn(p ? p.namespaceURI : void 0), p ? p.progressiveChunkSize : void 0, p ? p.onError : void 0, re, ke, l, W);
        if (p && p.signal) {
          var S = p.signal, C = function() {
            Io(h, S.reason), S.removeEventListener("abort", C);
          };
          S.addEventListener("abort", C);
        }
        Td(h);
      });
    }
    Mu.renderToReadableStream = Cd, Mu.version = t;
  }()), Mu;
}
var Hi, Rf;
process.env.NODE_ENV === "production" ? (Hi = TE(), Rf = CE()) : (Hi = AE(), Rf = PE());
Ua.version = Hi.version;
Ua.renderToString = Hi.renderToString;
Ua.renderToStaticMarkup = Hi.renderToStaticMarkup;
Ua.renderToNodeStream = Hi.renderToNodeStream;
Ua.renderToStaticNodeStream = Hi.renderToStaticNodeStream;
Ua.renderToReadableStream = Rf.renderToReadableStream;
const RE = ({ width: e, height: t, runtime: r }) => {
  var xe, De;
  const { config: n } = se.useContext(wt), { sankey: a } = n, o = n == null ? void 0 : n.data[0], [f, s] = se.useState(0), c = se.useRef([]), [d, g] = se.useState(""), y = (oe) => {
    g(oe);
  }, v = () => {
    g("");
  }, [E, k] = se.useState(!1);
  se.useEffect(() => {
    window.innerWidth < 768 && window.innerHeight > window.innerWidth && k(!0);
  }, [window.innerWidth]);
  const M = () => {
    k(!1);
  };
  se.useEffect(() => {
    var ze;
    let oe = 0;
    (ze = c == null ? void 0 : c.current) == null || ze.map((Ie) => {
      const Ce = Ie == null ? void 0 : Ie.getBoundingClientRect().width;
      Ce > oe && (oe = Ce);
    }), s(oe);
  }, [c, a, window.innerWidth]);
  const T = Array.from(new Set((xe = o == null ? void 0 : o.links) == null ? void 0 : xe.flatMap((oe) => [oe.source, oe.target]))), m = {
    nodes: T.map((oe) => ({ id: oe })),
    links: (De = o == null ? void 0 : o.links) == null ? void 0 : De.map((oe) => ({
      source: T.findIndex((ze) => ze === oe.source),
      target: T.findIndex((ze) => ze === oe.target),
      value: oe.value
    }))
  };
  let R = 5;
  const O = 50, _ = SE().nodeWidth(a.nodeSize.nodeWidth).nodePadding(a.nodePadding).iterations(a.iterations).nodeAlign(gE).extent([
    [a.margin.margin_x, Number(a.margin.margin_y)],
    [e - R - f, n.heights.vertical - O]
  ]), { nodes: N, links: D } = _(m), I = (oe) => {
    var Oe;
    let ze = 30, Ie = 0, Ce = "node-value--storynode", ge = !0;
    return (Oe = o == null ? void 0 : o.storyNodeText) != null && Oe.every((ie) => ie.StoryNode !== oe) && (ge = !1, Ie = 10, ze = 8, Ce = "node-value"), { textPositionHorizontal: ze, textPositionVertical: Ie, classStyle: Ce, storyNodes: ge };
  }, B = (oe) => {
    const ze = m.nodes.find((ge) => ge.id === oe), Ie = [], Ce = [];
    return ze && (D.forEach((ge) => {
      const Oe = ge.target, ie = ge.source;
      Oe.id === oe && Ie.push(ie.id);
    }), Ie.forEach((ge) => {
      D.forEach((Oe) => {
        const ie = Oe.target, we = Oe.source;
        ie.id === d && we.id === ge && Ce.push(Oe);
      });
    })), { sourceNodes: Ie, activeLinks: Ce };
  }, U = `${((o == null ? void 0 : o.tooltips.find((oe) => oe.node === d)) || {}).value}`, q = `${((o == null ? void 0 : o.tooltips.find((oe) => oe.node === d)) || {}).summary}`, K = ((o == null ? void 0 : o.tooltips.find((oe) => oe.node === d)) || {}).column1Label, j = ((o == null ? void 0 : o.tooltips.find((oe) => oe.node === d)) || {}).column2Label, te = ((o == null ? void 0 : o.tooltips.find((oe) => oe.node === d)) || {}).column1, me = ((o == null ? void 0 : o.tooltips.find((oe) => oe.node === d)) || {}).column2, H = ({ columnData: oe }) => /* @__PURE__ */ i.createElement("ul", null, oe == null ? void 0 : oe.map((ze, Ie) => /* @__PURE__ */ i.createElement("li", { key: Ie }, ze.label, ": ", ze.value, " (", ze.additional_info, "%)"))), le = Ua.renderToString(/* @__PURE__ */ i.createElement(H, { columnData: te })), ue = Ua.renderToString(/* @__PURE__ */ i.createElement(H, { columnData: me })), fe = `<div class="sankey-chart__tooltip">
                    <span class="sankey-chart__tooltip--tooltip-header">${d}</span>
                    <span class="sankey-chart__tooltip--tooltip-header">${U}</span>
                    <div class="divider"></div>
                    <span><strong>Summary: </strong>${q}</span>
                    <div class="divider"></div>
                      <div class="sankey-chart__tooltip--info-section">
                        <div>
                          <span><strong>${K}<strong></span>
                          ${le}
                        </div>
                        <div>
                          <span><strong>${j}<strong></span>
                          ${ue}
                        </div>
                      </div>
                    </div>`, ae = m.nodes.map((oe, ze) => {
    var He, Ye;
    let { textPositionHorizontal: Ie, textPositionVertical: Ce, classStyle: ge, storyNodes: Oe } = I(oe.id), { sourceNodes: ie } = B(d), we = a.opacity.nodeOpacityDefault, Pe = a.nodeColor.default;
    return d !== oe.id && d !== "" && !ie.includes(oe.id) && (Pe = a.nodeColor.inactive, we = a.opacity.nodeOpacityInactive), /* @__PURE__ */ i.createElement(rt, { className: "", key: ze }, /* @__PURE__ */ i.createElement(
      "rect",
      {
        height: oe.y1 - oe.y0 + 2,
        width: _.nodeWidth(),
        x: oe.x0,
        y: oe.y0 - 1,
        fill: Pe,
        fillOpacity: we,
        rx: a.rxValue,
        "data-tooltip-html": o.tooltips && n.enableTooltips ? fe : null,
        "data-tooltip-id": `cdc-open-viz-tooltip-${r.uniqueId}-sankey`,
        onClick: () => y(oe.id),
        style: { pointerEvents: "visible", cursor: "pointer" }
      }
    ), Oe ? /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
      Et,
      {
        x: oe.x0 + Ie,
        textAnchor: m.nodes.length - 1 === ze ? "end" : "start",
        verticalAnchor: "end",
        y: (oe.y1 + oe.y0) / 2 - 30,
        fill: a.nodeFontColor,
        fontWeight: "bold",
        style: { pointerEvents: "none" },
        className: "node-text"
      },
      (((He = o == null ? void 0 : o.storyNodeText) == null ? void 0 : He.find((Je) => Je.StoryNode === oe.id)) || {}).segmentTextBefore
    ), /* @__PURE__ */ i.createElement(Et, { verticalAnchor: "end", className: ge, x: oe.x0 + Ie, y: (oe.y1 + oe.y0 + 25) / 2, fill: a.storyNodeFontColor || a.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, typeof oe.value == "number" ? oe.value.toLocaleString() : oe.value), /* @__PURE__ */ i.createElement(
      Et,
      {
        x: oe.x0 + Ie,
        y: (oe.y1 + oe.y0) / 2 + 50,
        fill: a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: m.nodes.length === ze ? "end" : "start",
        style: { pointerEvents: "none" },
        className: "node-text",
        verticalAnchor: "end"
      },
      (((Ye = o == null ? void 0 : o.storyNodeText) == null ? void 0 : Ye.find((Je) => Je.StoryNode === oe.id)) || {}).segmentTextAfter
    )) : /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("text", { x: oe.x0 + Ie, y: (oe.y1 + oe.y0) / 2 + Ce, dominantBaseline: "text-before-edge", fill: a.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, /* @__PURE__ */ i.createElement("tspan", { id: oe.id, className: "node-id" }, oe.id)), /* @__PURE__ */ i.createElement(
      "text",
      {
        x: oe.x0 + Ie,
        y: (oe.y1 + oe.y0) / 2 + 30,
        dominantBaseline: "text-before-edge",
        fill: a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start",
        style: { pointerEvents: "none" }
      },
      /* @__PURE__ */ i.createElement("tspan", { className: ge }, a.nodeValueStyle.textBefore + (typeof oe.value == "number" ? oe.value.toLocaleString() : oe.value) + a.nodeValueStyle.textAfter)
    )));
  }), V = D.map((oe, ze) => {
    const Ce = wE()(oe);
    let ge = a.opacity.LinkOpacityDefault, Oe = a.linkColor.default, { activeLinks: ie } = B(d);
    return !ie.includes(oe) && d !== "" && (Oe = a.linkColor.inactive, ge = a.opacity.LinkOpacityInactive), /* @__PURE__ */ i.createElement("path", { key: ze, d: Ce, stroke: Oe, fill: "none", strokeOpacity: ge, strokeWidth: oe.width + 2 });
  }), Z = m.nodes.reduce((oe, ze) => Math.max(oe, ze.depth), -1), Ae = m.nodes.filter((oe) => oe.depth === Z).map((oe, ze) => {
    var He, Ye;
    let { textPositionHorizontal: Ie, textPositionVertical: Ce, classStyle: ge, storyNodes: Oe } = I(oe.id), { sourceNodes: ie } = B(d), we = a.opacity.nodeOpacityDefault, Pe = a.nodeColor.default;
    return d !== oe.id && d !== "" && !ie.includes(oe.id) && (Pe = a.nodeColor.inactive, we = a.opacity.nodeOpacityInactive), /* @__PURE__ */ i.createElement(rt, { className: "", key: ze, innerRef: (Je) => c.current[ze] = Je }, /* @__PURE__ */ i.createElement(
      "rect",
      {
        height: oe.y1 - oe.y0 + 2,
        width: _.nodeWidth(),
        x: oe.x0,
        y: oe.y0 - 1,
        fill: Pe,
        fillOpacity: we,
        rx: a.rxValue,
        "data-tooltip-html": o.tooltips && n.enableTooltips ? fe : null,
        "data-tooltip-id": "tooltip",
        onClick: () => y(oe.id),
        style: { pointerEvents: "visible", cursor: "pointer" }
      }
    ), Oe ? /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
      Et,
      {
        x: oe.x0 + Ie,
        textAnchor: m.nodes.length - 1 === ze ? "end" : "start",
        verticalAnchor: "end",
        y: (oe.y1 + oe.y0) / 2 - 30,
        fill: a.nodeFontColor,
        fontWeight: "bold",
        style: { pointerEvents: "none" },
        className: "node-text"
      },
      (((He = o == null ? void 0 : o.storyNodeText) == null ? void 0 : He.find((Je) => Je.StoryNode === oe.id)) || {}).segmentTextBefore
    ), /* @__PURE__ */ i.createElement(Et, { verticalAnchor: "end", className: ge, x: oe.x0 + Ie, y: (oe.y1 + oe.y0 + 25) / 2, fill: a.storyNodeFontColor || a.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, typeof oe.value == "number" ? oe.value.toLocaleString() : oe.value), /* @__PURE__ */ i.createElement(
      Et,
      {
        x: oe.x0 + Ie,
        y: (oe.y1 + oe.y0) / 2 + 50,
        fill: a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: m.nodes.length === ze ? "end" : "start",
        style: { pointerEvents: "none" },
        className: "node-text",
        verticalAnchor: "end"
      },
      (((Ye = o == null ? void 0 : o.storyNodeText) == null ? void 0 : Ye.find((Je) => Je.StoryNode === oe.id)) || {}).segmentTextAfter
    )) : /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("text", { x: oe.x0 + Ie, y: (oe.y1 + oe.y0) / 2 + Ce, dominantBaseline: "text-before-edge", fill: a.nodeFontColor, fontWeight: "bold", textAnchor: "start", style: { pointerEvents: "none" } }, /* @__PURE__ */ i.createElement("tspan", { id: oe.id, className: "node-id" }, oe.id)), /* @__PURE__ */ i.createElement(
      "text",
      {
        x: oe.x0 + Ie,
        y: (oe.y1 + oe.y0) / 2 + 30,
        dominantBaseline: "text-before-edge",
        fill: a.nodeFontColor,
        fontWeight: "bold",
        textAnchor: "start",
        style: { pointerEvents: "none" }
      },
      /* @__PURE__ */ i.createElement("tspan", { className: ge }, a.nodeValueStyle.textBefore + (typeof oe.value == "number" ? oe.value.toLocaleString() : oe.value) + a.nodeValueStyle.textAfter)
    )));
  });
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: "sankey-chart" }, /* @__PURE__ */ i.createElement("svg", { className: "sankey-chart__diagram", width: e, height: Number(n.heights.vertical), style: { overflow: "visible" } }, /* @__PURE__ */ i.createElement(rt, { className: "links" }, V), /* @__PURE__ */ i.createElement(rt, { className: "nodes" }, ae), /* @__PURE__ */ i.createElement(rt, { className: "finalNodes", style: { display: "none" } }, Ae)), /* @__PURE__ */ i.createElement(sy, { id: `cdc-open-viz-tooltip-${r.uniqueId}-sankey`, afterHide: () => v(), events: ["click"], place: "bottom", style: { backgroundColor: "rgba(238, 238, 238, 1)", color: "black", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" } }), E && /* @__PURE__ */ i.createElement("div", { className: "popup" }, /* @__PURE__ */ i.createElement("div", { className: "popup-content" }, /* @__PURE__ */ i.createElement("button", { className: "visually-hidden", onClick: M }, "Select for accessible version."), /* @__PURE__ */ i.createElement("p", null, /* @__PURE__ */ i.createElement("strong", null, "Please change the orientation of your screen or increase the size of your browser to view the diagram better."))))));
};
var LE = {
  top: "top",
  left: "left",
  right: "right",
  bottom: "bottom"
};
const ir = LE;
function DE(e) {
  var t = e.labelOffset, r = e.labelProps, n = e.orientation, a = e.range, o = e.tickLabelFontSize, f = e.tickLength, s = n === ir.left || n === ir.top ? -1 : 1, c, d, g;
  if (n === ir.top || n === ir.bottom) {
    var y = n === ir.bottom && typeof r.fontSize == "number" ? r.fontSize : 0;
    c = (Number(a[0]) + Number(a[a.length - 1])) / 2, d = s * (f + t + o + y);
  } else
    c = s * ((Number(a[0]) + Number(a[a.length - 1])) / 2), d = -(f + t), g = "rotate(" + s * 90 + ")";
  return {
    x: c,
    y: d,
    transform: g
  };
}
function vs() {
  return vs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vs.apply(this, arguments);
}
function OE(e) {
  var t = e.hideTicks, r = e.horizontal, n = e.orientation, a = e.tickClassName, o = e.tickComponent, f = e.tickLabelProps, s = e.tickStroke, c = s === void 0 ? "#222" : s, d = e.tickTransform, g = e.ticks, y = e.strokeWidth, v = e.tickLineProps;
  return g.map(function(E) {
    var k, M = E.value, T = E.index, m = E.from, R = E.to, O = E.formattedValue, _ = (k = f[T]) != null ? k : {}, N = Math.max(10, typeof _.fontSize == "number" && _.fontSize || 0), D = R.y + (r && n !== ir.top ? N : 0);
    return /* @__PURE__ */ i.createElement(rt, {
      key: "visx-tick-" + M + "-" + T,
      className: Dn("visx-axis-tick", a),
      transform: d
    }, !t && /* @__PURE__ */ i.createElement(an, vs({
      from: m,
      to: R,
      stroke: c,
      strokeWidth: y,
      strokeLinecap: "square"
    }, v)), o ? o(vs({}, _, {
      x: R.x,
      y: D,
      formattedValue: O
    })) : /* @__PURE__ */ i.createElement(Et, vs({
      x: R.x,
      y: D
    }, _), O));
  });
}
function pc() {
  return pc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, pc.apply(this, arguments);
}
var lm = {
  textAnchor: "middle",
  fontFamily: "Arial",
  fontSize: 10,
  fill: "#222"
};
function ME(e) {
  var t = e.axisFromPoint, r = e.axisLineClassName, n = e.axisToPoint, a = e.hideAxisLine, o = e.hideTicks, f = e.horizontal, s = e.label, c = s === void 0 ? "" : s, d = e.labelClassName, g = e.labelOffset, y = g === void 0 ? 14 : g, v = e.labelProps, E = v === void 0 ? lm : v, k = e.orientation, M = k === void 0 ? ir.bottom : k, T = e.scale, m = e.stroke, R = m === void 0 ? "#222" : m, O = e.strokeDasharray, _ = e.strokeWidth, N = _ === void 0 ? 1 : _, D = e.tickClassName, I = e.tickComponent, B = e.tickLineProps, U = e.tickLabelProps, q = e.tickLength, K = q === void 0 ? 8 : q, j = e.tickStroke, te = j === void 0 ? "#222" : j, me = e.tickTransform, H = e.ticks, le = e.ticksComponent, ue = le === void 0 ? OE : le, fe = pc({}, lm, typeof U == "object" ? U : null), ae = H.map(function(Z) {
    var ee = Z.value, Ae = Z.index;
    return typeof U == "function" ? U(ee, Ae, H) : fe;
  }), V = Math.max.apply(Math, [10].concat(ae.map(function(Z) {
    return typeof Z.fontSize == "number" ? Z.fontSize : 0;
  })));
  return /* @__PURE__ */ i.createElement(i.Fragment, null, ue({
    hideTicks: o,
    horizontal: f,
    orientation: M,
    scale: T,
    tickClassName: D,
    tickComponent: I,
    tickLabelProps: ae,
    tickStroke: te,
    tickTransform: me,
    ticks: H,
    strokeWidth: N,
    tickLineProps: B
  }), !a && /* @__PURE__ */ i.createElement(an, {
    className: Dn("visx-axis-line", r),
    from: t,
    to: n,
    stroke: R,
    strokeWidth: N,
    strokeDasharray: O
  }), c && /* @__PURE__ */ i.createElement(Et, pc({
    className: Dn("visx-axis-label", d)
  }, DE({
    labelOffset: y,
    labelProps: E,
    orientation: M,
    range: T.range(),
    tickLabelFontSize: V,
    tickLength: K
  }), E), c));
}
function _E(e, t) {
  t === void 0 && (t = "center");
  var r = e;
  if (t !== "start" && "bandwidth" in r) {
    var n = r.bandwidth();
    return t === "center" && (n /= 2), r.round() && (n = Math.round(n)), function(a) {
      var o = r(a);
      return typeof o == "number" ? o + n : o;
    };
  }
  return e;
}
function NE(e) {
  var t = e;
  return "tickFormat" in t ? t.tickFormat() : Tv;
}
function _u(e, t) {
  var r = e.x, n = e.y;
  return new rl(t ? {
    x: r,
    y: n
  } : {
    x: n,
    y: r
  });
}
function Lf() {
  return Lf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Lf.apply(this, arguments);
}
var Yd = 0;
function FE(e) {
  return e === void 0 && (e = Yd), typeof e == "number" ? {
    start: e,
    end: e
  } : Lf({
    start: Yd,
    end: Yd
  }, e);
}
var zE = ["children", "axisClassName", "hideAxisLine", "hideTicks", "hideZero", "innerRef", "left", "numTicks", "orientation", "rangePadding", "scale", "tickFormat", "tickLength", "tickValues", "top"];
function Df() {
  return Df = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Df.apply(this, arguments);
}
function $E(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Lc(e) {
  var t = e.children, r = t === void 0 ? ME : t, n = e.axisClassName, a = e.hideAxisLine, o = a === void 0 ? !1 : a, f = e.hideTicks, s = f === void 0 ? !1 : f, c = e.hideZero, d = c === void 0 ? !1 : c, g = e.innerRef, y = e.left, v = y === void 0 ? 0 : y, E = e.numTicks, k = E === void 0 ? 10 : E, M = e.orientation, T = M === void 0 ? ir.bottom : M, m = e.rangePadding, R = m === void 0 ? 0 : m, O = e.scale, _ = e.tickFormat, N = e.tickLength, D = N === void 0 ? 8 : N, I = e.tickValues, B = e.top, U = B === void 0 ? 0 : B, q = $E(e, zE), K = _ ?? NE(O), j = T === ir.left, te = T === ir.top, me = te || T === ir.bottom, H = _E(O), le = j || te ? -1 : 1, ue = O.range(), fe = FE(R), ae = _u({
    x: Number(ue[0]) + 0.5 - fe.start,
    y: 0
  }, me), V = _u({
    x: Number(ue[ue.length - 1]) + 0.5 + fe.end,
    y: 0
  }, me), Z = (I ?? wv(O, k)).filter(function(Ae) {
    return !d || Ae !== 0 && Ae !== "0";
  }).map(function(Ae, xe) {
    return {
      value: Ae,
      index: xe
    };
  }), ee = Z.map(function(Ae) {
    var xe = Ae.value, De = Ae.index, oe = kv(H(xe));
    return {
      value: xe,
      index: De,
      from: _u({
        x: oe,
        y: 0
      }, me),
      to: _u({
        x: oe,
        y: D * le
      }, me),
      formattedValue: K(xe, De, Z)
    };
  });
  return /* @__PURE__ */ i.createElement(rt, {
    className: Dn("visx-axis", n),
    innerRef: g,
    top: U,
    left: v
  }, r(Df({}, q, {
    axisFromPoint: ae,
    axisToPoint: V,
    hideAxisLine: o,
    hideTicks: s,
    hideZero: d,
    horizontal: me,
    numTicks: k,
    orientation: T,
    rangePadding: R,
    scale: O,
    tickFormat: K,
    tickLength: D,
    tickPosition: H,
    tickSign: le,
    ticks: ee
  })));
}
var BE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function mc() {
  return mc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, mc.apply(this, arguments);
}
function IE(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var HE = {
  dx: "-0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "end"
};
function WE(e) {
  var t = e.axisClassName, r = e.labelOffset, n = r === void 0 ? 36 : r, a = e.tickLength, o = a === void 0 ? 8 : a, f = e.tickLabelProps, s = IE(e, BE), c = typeof f == "function" ? f : mc({}, HE, f);
  return /* @__PURE__ */ i.createElement(Lc, mc({
    axisClassName: Dn("visx-axis-left", t),
    labelOffset: n,
    orientation: ir.left,
    tickLabelProps: c,
    tickLength: o
  }, s));
}
var VE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function gc() {
  return gc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, gc.apply(this, arguments);
}
function jE(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var UE = {
  dx: "0.25em",
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "start"
};
function KE(e) {
  var t = e.axisClassName, r = e.labelOffset, n = r === void 0 ? 36 : r, a = e.tickLength, o = a === void 0 ? 8 : a, f = e.tickLabelProps, s = jE(e, VE), c = typeof f == "function" ? f : gc({}, UE, f);
  return /* @__PURE__ */ i.createElement(Lc, gc({
    axisClassName: Dn("visx-axis-right", t),
    labelOffset: n,
    orientation: ir.right,
    tickLabelProps: c,
    tickLength: o
  }, s));
}
var YE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function yc() {
  return yc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, yc.apply(this, arguments);
}
function XE(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var qE = {
  dy: "-0.75em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function GE(e) {
  var t = e.axisClassName, r = e.labelOffset, n = r === void 0 ? 8 : r, a = e.tickLength, o = a === void 0 ? 8 : a, f = e.tickLabelProps, s = XE(e, YE), c = typeof f == "function" ? f : yc({}, qE, f);
  return /* @__PURE__ */ i.createElement(Lc, yc({
    axisClassName: Dn("visx-axis-top", t),
    labelOffset: n,
    orientation: ir.top,
    tickLabelProps: c,
    tickLength: o
  }, s));
}
var ZE = ["axisClassName", "labelOffset", "tickLength", "tickLabelProps"];
function vc() {
  return vc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vc.apply(this, arguments);
}
function QE(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var JE = {
  dy: "0.25em",
  fill: "#222",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "middle"
};
function Hu(e) {
  var t = e.axisClassName, r = e.labelOffset, n = r === void 0 ? 8 : r, a = e.tickLength, o = a === void 0 ? 8 : a, f = e.tickLabelProps, s = QE(e, ZE), c = typeof f == "function" ? f : vc({}, JE, f);
  return /* @__PURE__ */ i.createElement(Lc, vc({
    axisClassName: Dn("visx-axis-bottom", t),
    labelOffset: n,
    orientation: ir.bottom,
    tickLabelProps: c,
    tickLength: o
  }, s));
}
const xs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  curveBasis: h0,
  curveBasisClosed: p0,
  curveBasisOpen: m0,
  curveBundle: g0,
  curveCardinal: y0,
  curveCardinalClosed: v0,
  curveCardinalOpen: x0,
  curveCatmullRom: b0,
  curveCatmullRomClosed: S0,
  curveCatmullRomOpen: E0,
  curveLinear: wc,
  curveLinearClosed: lf,
  curveMonotoneX: Iu,
  curveMonotoneY: k0,
  curveNatural: w0,
  curveStep: T0,
  curveStepAfter: A0,
  curveStepBefore: C0
}, Symbol.toStringTag, { value: "Module" })), ek = (e) => {
  var N;
  const { xScale: t, yScale: r, yMax: n, xMax: a, handleTooltipMouseOver: o, handleTooltipMouseOff: f, isDebug: s, children: c } = e;
  let { transformedData: d, config: g, handleLineType: y, parseDate: v, formatDate: E, formatNumber: k, seriesHighlight: M, colorScale: T, rawData: m } = se.useContext(wt);
  const R = g.brush.active && ((N = g.brush.data) != null && N.length) ? g.brush.data : d;
  if (!R)
    return;
  const O = (D) => (Cn(g.xAxis) ? t(v(D[g.xAxis.dataKey], !1)) : t(D[g.xAxis.dataKey])) + (t.bandwidth ? t.bandwidth() / 2 : 0), _ = (D, I, B = void 0) => r(D[B.dataKey]);
  return R && /* @__PURE__ */ i.createElement("svg", null, /* @__PURE__ */ i.createElement(zr, { component: "AreaChart" }, /* @__PURE__ */ i.createElement(rt, { className: "area-chart", key: "area-wrapper", left: Number(g.yAxis.size) }, (g.runtime.areaSeriesKeys || g.series).map((D, I) => {
    let B = R.map((j) => ({
      [g.xAxis.dataKey]: j[g.xAxis.dataKey],
      [D.dataKey]: j[D.dataKey]
    })), U = xs[D.lineType], q = g.legend.behavior === "highlight" && M.length > 0 && M.indexOf(D.dataKey) === -1, K = g.legend.behavior === "highlight" || M.length === 0 || M.indexOf(D.dataKey) !== -1;
    return /* @__PURE__ */ i.createElement(i.Fragment, { key: I }, /* @__PURE__ */ i.createElement(
      fa,
      {
        data: B,
        x: (j) => O(j),
        y: (j) => _(j, I, D),
        stroke: K ? T ? T(g.runtime.seriesLabels ? g.runtime.seriesLabels[D.dataKey] : D.dataKey) : "#000" : "transparent",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        curve: U,
        strokeDasharray: D.type ? y(D.type) : 0
      }
    ), /* @__PURE__ */ i.createElement(
      J0,
      {
        key: "area-chart",
        fill: K ? T ? T(g.runtime.seriesLabels ? g.runtime.seriesLabels[D.dataKey] : D.dataKey) : "#000" : "transparent",
        fillOpacity: q ? 0.25 : 0.5,
        data: B,
        x: (j) => O(j),
        y: (j) => _(j, I, D),
        yScale: r,
        curve: U,
        strokeDasharray: D.type ? y(D.type) : 0
      }
    ));
  }), /* @__PURE__ */ i.createElement(yr, { width: Number(a), height: Number(n), fill: "transparent", fillOpacity: 0.05, onMouseMove: (D) => o(D, m), onMouseLeave: f }))));
}, tk = se.memo(ek), xc = {
  Linear: "curveLinear",
  Cardinal: "curveCardinal",
  Natural: "curveNatural",
  "Monotone X": "curveMonotoneX",
  Step: "curveStep"
}, nk = ({ xScale: e, yScale: t, yMax: r, xMax: n, handleTooltipMouseOver: a, handleTooltipMouseOff: o, isDebug: f }) => {
  var M;
  let { transformedData: s, config: c, seriesHighlight: d, colorScale: g, rawData: y } = se.useContext(wt);
  const v = c.brush.active && ((M = c.brush.data) != null && M.length) ? c.brush.data : s;
  if (!v)
    return;
  const E = (T) => {
    if (c.xAxis.type === "categorical")
      return e(T);
    if (Cn(c.xAxis)) {
      let m = new Date(T);
      return e(m);
    }
  }, k = 2;
  return v && /* @__PURE__ */ i.createElement("svg", { height: Number(r) }, /* @__PURE__ */ i.createElement(zr, { component: "AreaChartStacked" }, /* @__PURE__ */ i.createElement(rt, { className: "area-chart", key: "area-wrapper", left: Number(c.yAxis.size) + k / 2, height: Number(r), style: { overflow: "hidden" } }, /* @__PURE__ */ i.createElement(
    iS,
    {
      data: v,
      keys: c.runtime.areaSeriesKeys.map((T) => T.dataKey) || c.series.map((T) => T.dataKey),
      x0: (T) => E(T.data[c.xAxis.dataKey]),
      y0: (T) => Number(t(T[0])),
      y1: (T) => Number(t(T[1])),
      curve: xs[xc[c.stackedAreaChartLineType]]
    },
    ({ stacks: T, path: m }) => T.map((R, O) => {
      let _ = c.legend.behavior === "highlight" && d.length > 0 && d.indexOf(R.key) === -1, N = c.legend.behavior === "highlight" || d.length === 0 || d.indexOf(R.key) !== -1;
      return (
        // prettier-ignore
        /* @__PURE__ */ i.createElement(
          "path",
          {
            key: R.key,
            d: m(R) || "",
            strokeWidth: 2,
            stroke: N ? g ? g(c.runtime.seriesLabels ? c.runtime.seriesLabels[R.key] : R.key) : "#000" : "transparent",
            fillOpacity: _ ? 0.2 : 1,
            fill: N ? g ? g(c.runtime.seriesLabels ? c.runtime.seriesLabels[R.key] : R.key) : "#000" : "transparent"
          }
        )
      );
    })
  ), /* @__PURE__ */ i.createElement(yr, { width: Number(n), height: Number(r), fill: "transparent", onMouseMove: (T) => a(T, y), onMouseLeave: o }))));
}, rk = se.memo(nk), Rs = () => {
  const { config: e, colorPalettes: t, tableData: r, updateConfig: n, parseDate: a, formatDate: o, setSeriesHighlight: f, seriesHighlight: s } = se.useContext(wt), { orientation: c } = e, [d, g] = se.useState(null), y = c === "horizontal", v = 1, E = e.lollipopSize === "large" ? 7 : e.lollipopSize === "medium" ? 6 : 5, k = e.lollipopSize === "large" ? 14 : e.lollipopSize === "medium" ? 12 : 10, M = e.yAxis.labelPlacement === "Below Bar", T = e.yAxis.displayNumbersOnBar, m = e.orientation === "horizontal" ? "yAxis" : "xAxis", R = e.barStyle === "rounded", O = e.visualizationSubType === "stacked", _ = e.tipRounding, N = e.roundingStyle === "standard" ? "8px" : e.roundingStyle === "shallow" ? "5px" : e.roundingStyle === "finger" ? "15px" : "0px", D = e.runtime.seriesKeys.length, I = { small: 16, medium: 18, large: 20 }, B = Object.keys(e.runtime.seriesLabels).length > 1, q = e.visualizationType === "Bar" && e.legend.behavior === "isolate" && e.legend.axisAlign && (s != null && s.length) ? s : e.runtime.barSeriesKeys || e.runtime.seriesKeys;
  return se.useEffect(() => {
    c === "horizontal" && !e.yAxis.labelPlacement && n({
      ...e,
      yAxis: {
        ...e,
        labelPlacement: "Below Bar"
      }
    });
  }, [e, n]), se.useEffect(() => {
    e.isLollipopChart === !1 && e.barHeight < 25 && n({ ...e, barHeight: 25 });
  }, [e.isLollipopChart]), se.useEffect(() => {
    e.visualizationSubType === "horizontal" && n({
      ...e,
      orientation: "horizontal"
    });
  }, []), se.useEffect(() => {
    e.barStyle === "lollipop" && !e.isLollipopChart && n({ ...e, isLollipopChart: !0 }), (R || e.barStyle === "flat") && n({ ...e, isLollipopChart: !1 });
  }, [e.barStyle]), {
    generateIconSize: (V) => V < 4 ? 1 : V < 5 ? 4 : V < 10 ? 6 : V < 15 ? 7 : V < 20 || V < 90 ? 8 : 0,
    isHorizontal: y,
    barBorderWidth: v,
    lollipopBarWidth: E,
    lollipopShapeSize: k,
    isLabelBelowBar: M,
    displayNumbersOnBar: T,
    section: m,
    isRounded: R,
    isStacked: O,
    tipRounding: _,
    radius: N,
    stackCount: D,
    barStackedSeriesKeys: q,
    fontSize: I,
    hasMultipleSeries: B,
    applyRadius: (V) => {
      if (V == null || !R)
        return {};
      let Z = {};
      return (O && V + 1 === D || !O) && (Z = y ? { borderRadius: `0 ${N}  ${N}  0` } : { borderRadius: `${N} ${N} 0 0` }), !O && V === -1 && (Z = y ? { borderRadius: `${N} 0  0 ${N} ` } : { borderRadius: ` 0  0 ${N} ${N}` }), _ === "full" && O && V === 0 && D > 1 && (Z = y ? { borderRadius: `${N} 0 0 ${N}` } : { borderRadius: `0 0 ${N} ${N}` }), _ === "full" && (O && V === 0 && D === 1 || !O) && (Z = { borderRadius: N }), Z;
    },
    updateBars: (V) => {
      if (e.visualizationType !== "Bar" && !y)
        return V;
      const Z = [...V];
      let ee;
      const Ae = {
        stacked: e.barHeight,
        lollipop: E
      };
      O ? ee = Ae.stacked : ee = Ae[e.isLollipopChart ? "lollipop" : "stacked"] * D;
      const xe = M ? I[e.fontSize] * 1.2 : 0;
      let De = Number(e.barSpace), oe = Z.length * (ee + xe + De);
      return y && (e.heights.horizontal = oe), Z.map((ze, Ie) => {
        let Ce = 0;
        return ze.index !== 0 && (Ce = (ee + De + xe) * Ie), { ...ze, y: Ce, height: ee };
      });
    },
    assignColorsToValues: (V, Z, ee) => {
      if (!e.legend.colorCode && e.series.length > 1)
        return ee;
      const Ae = e.customColors ?? t[e.palette], xe = r.map((Ie) => Ie[e.legend.colorCode]);
      let De = /* @__PURE__ */ new Map(), oe = [];
      for (let Ie = 0; Ie < xe.length; Ie++)
        De.has(xe[Ie]) || De.set(xe[Ie], Ae[De.size % Ae.length]), oe.push(De.get(xe[Ie]));
      for (; oe.length < V; )
        oe = oe.concat(oe);
      return oe[Z];
    },
    getHighlightedBarColorByValue: (V) => {
      const Z = e == null ? void 0 : e.highlightedBarValues.find((ee) => {
        if (ee.value)
          return e.xAxis.type === "date" ? o(a(ee.value)) === V : ee.value === V;
      });
      return Z != null && Z.color ? Z.color : "rgba(255, 102, 1)";
    },
    getHighlightedBarByValue: (V) => {
      const Z = e == null ? void 0 : e.highlightedBarValues.filter((ee) => {
        if (ee.value)
          return e.xAxis.type === "date" ? o(a(ee.value)) === V : ee.value === V;
      })[0];
      return Z != null && Z.color ? Z : !1;
    },
    getAdditionalColumn: (V, Z) => {
      if (!Z)
        return "";
      const ee = e.columns, Ae = [];
      let xe = "";
      const De = r.find((oe) => oe[e.xAxis.dataKey] === Z) || {};
      return Object.keys(ee).forEach((oe) => {
        if (V && e.columns[oe].series && e.columns[oe].series !== V)
          return;
        const ze = {
          addColPrefix: e.columns[oe].prefix,
          addColSuffix: e.columns[oe].suffix,
          addColRoundTo: e.columns[oe].roundToPlace ? e.columns[oe].roundToPlace : "",
          addColCommas: e.columns[oe].commas
        }, Ie = wm(De[e.columns[oe].name], "left", !0, e, ze);
        e.columns[oe].tooltips && Ae.push([e.columns[oe].label, Ie]);
      }), Ae.forEach((oe) => {
        xe += `${oe[0]} : ${oe[1]} <br/>`;
      }), xe;
    },
    hoveredBar: d,
    setHoveredBar: g,
    onMouseOverBar: (V, Z) => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && Z && f([Z]), g(V);
    },
    onMouseLeaveBar: () => {
      e.legend.highlightOnHover && e.legend.behavior === "highlight" && f([]);
    }
  };
}, Ls = se.createContext(null), mh = ({ xScale: e, barWidth: t = 0, totalBarsInGroup: r = 1, yMax: n, handleTooltipMouseOff: a, handleTooltipMouseOver: o, handleTooltipClick: f, tooltipData: s, showTooltip: c, hideTooltip: d }) => {
  const { parseDate: g, config: y } = se.useContext(wt), { runtime: v, regions: E, visualizationType: k, orientation: M, xAxis: T } = y, m = e.domain(), R = (N) => {
    let D;
    if (!(N != null && N.fromType) || N.fromType === "Fixed") {
      const I = new Date(N.from), B = g(ts(y.xAxis.dateParseFormat, I)).getTime();
      D = e(B), k === "Bar" && T.type === "date-time" && (D = D - t * r / 2);
    }
    if (N.fromType === "Previous Days") {
      const I = Number(N.from) || 0;
      m.map((K) => ts(y.xAxis.dateParseFormat, new Date(K)));
      const B = N.toType === "Last Date" ? new Date(m[m.length - 1]).getTime() : new Date(N.to), U = y.xAxis.type === "categorical" ? ts(y.xAxis.dateParseFormat, B) : ts(y.xAxis.dateParseFormat, B), q = new Date(U);
      if (D = new Date(q.setDate(q.getDate() - Number(I))), T.type === "date") {
        D = new Date(ts(T.dateParseFormat, D)).getTime();
        let K = m[0], j = Math.abs(D - K);
        for (let te = 1; te < m.length; te++) {
          const me = Math.abs(D - m[te]);
          me < j && (j = me, K = m[te]);
        }
        D = K;
      }
      if (T.type === "categorical") {
        let K = m[0], j = Math.abs(new Date(D).getTime() - new Date(K).getTime());
        for (let te = 1; te < m.length; te++) {
          const me = Math.abs(new Date(D).getTime() - new Date(m[te]).getTime());
          me < j && (j = me, K = m[te]);
        }
        D = K;
      }
      D = e(D);
    }
    if (T.type === "categorical" && N.fromType !== "Previous Days" && (D = e(N.from)), k === "Line" || k === "Area Chart") {
      let I = Number(y.yAxis.size);
      e.bandwidth && (I += e.bandwidth() / 2), D = D + I;
    }
    return k === "Bar" && y.xAxis.type === "date-time" && N.fromType === "Previous Days" && (D = D - t * r / 2), D;
  }, O = (N) => {
    let D;
    if (T.type === "categorical" && (D = e(N.to)), Cn(T) && ((!(N != null && N.toType) || N.toType === "Fixed") && (D = e(g(N.to).getTime())), (k === "Bar" || y.visualizationType === "Combo") && (D = N.toType !== "Last Date" ? e(g(N.to).getTime()) + t * r : D)), N.toType === "Last Date") {
      const I = m[m.length - 1];
      D = Number(e(I) + ((k === "Bar" || k === "Combo") && y.xAxis.type === "date" ? t * r : 0));
    }
    if (k === "Line" || k === "Area Chart") {
      let I = Number(y.yAxis.size);
      e.bandwidth && (I += e.bandwidth() / 2), D = D + I;
    }
    return k === "Bar" && y.xAxis.type === "date-time" && N.toType !== "Last Date" && (D = D - t * r / 2), (k === "Bar" || k === "Combo") && T.type === "categorical" && (D = D + (k === "Bar" || k === "Combo" ? t * r : 0)), D;
  }, _ = (N, D) => N - D;
  if (E && M === "vertical")
    return E.map((N) => {
      const D = R(N), I = O(N), B = _(I, D);
      if (!D || !I)
        return null;
      const U = () => /* @__PURE__ */ i.createElement(
        "path",
        {
          stroke: "#333",
          d: `M${D} -5
                L${D} 5
                M${D} 0
                L${I} 0
                M${I} -5
                L${I} 5`
        }
      ), q = () => /* @__PURE__ */ i.createElement("rect", { x: D, y: 0, width: B, height: n, fill: N.background, opacity: 0.3 });
      return /* @__PURE__ */ i.createElement(rt, { height: 100, fill: "red", className: "regions regions-group--line zzz", key: N.label, onMouseMove: o, onMouseLeave: a, handleTooltipClick: f, tooltipData: JSON.stringify(s), showTooltip: c }, /* @__PURE__ */ i.createElement(U, null), /* @__PURE__ */ i.createElement(q, null), /* @__PURE__ */ i.createElement(Et, { x: D + B / 2, y: 5, fill: N.color, verticalAnchor: "start", textAnchor: "middle" }, N.label));
    });
};
function Dc(e) {
  var ae, V;
  const { config: t, index: r, id: n, className: a, background: o, borderColor: f, borderWidth: s, width: c, height: d, x: g, y, onMouseOver: v, onMouseLeave: E, onClick: k, tooltipHtml: M, tooltipId: T, styleOverrides: m, seriesHighlight: R } = e, O = t.orientation === "horizontal", _ = t.barStyle === "rounded", N = t.visualizationSubType === "stacked", D = t.tipRounding, I = t.visualizationType === "Combo" && ((V = (ae = t.runtime) == null ? void 0 : ae.barSeriesKeys) == null ? void 0 : V.length), B = t.runtime.seriesKeys.length, U = t.visualizationType === "Bar" && t.legend.axisAlign && (R != null && R.length) ? R == null ? void 0 : R.length : 0, q = I || U || B;
  let K = t.roundingStyle === "standard" ? 8 : t.roundingStyle === "shallow" ? 5 : t.roundingStyle === "finger" ? 15 : 0;
  (K > c / 2 || K > d / 2) && (K = Math.min(c / 2, d / 2));
  const j = () => `M${g},${y + d}
      L${g},${y + K}
      Q${g},${y} ${g + K},${y}
      L${g + c - K},${y}
      Q${g + c},${y} ${g + c},${y + K}
      L${g + c},${y + d}
      L${g},${y + d}`, te = () => `M${g},${y + d}
      L${g},${y}
      L${g + c - K},${y}
      Q${g + c},${y} ${g + c},${y + K}
      L${g + c},${y + d - K}
      Q${g + c},${y + d} ${g + c - K},${y + d}
      L${g},${y + d}`, me = () => `M${g + K},${y + d}
      Q${g},${y + d} ${g},${y + d - K}
      L${g},${y}
      L${g + c},${y}
      L${g + c},${y + d - K}
      Q${g + c},${y + d} ${g + c - K},${y + d}
      L${g + K},${y + d}`, H = () => `M${g + K},${y + d}
      Q${g},${y + d} ${g},${y + d - K}
      L${g},${y + K}
      Q${g},${y} ${g + K},${y}
      L${g + c},${y}
      L${g + c},${y + d}
      L${g + K},${y + d}`, le = () => `M${g + K},${y + d}
      Q${g},${y + d} ${g},${y + d - K}
      L${g},${y + K}
      Q${g},${y} ${g + K},${y}
      L${g + c - K},${y}
      Q${g + c},${y} ${g + c},${y + K}
      L${g + c},${y + d - K}
      Q${g + c},${y + d} ${g + c - K},${y + d}
      L${g + K},${y + d}`, ue = () => `M${g},${y}
      L${g + c},${y}
      L${g + c},${y + d}
      L${g},${y + d}
      L${g},${y}`;
  let fe;
  return r == null || !_ ? fe = ue() : (fe = ue(), (N && r + 1 === q || !N) && (fe = O ? te() : j()), !N && r === -1 && (fe = O ? H() : me()), D === "full" && N && r === 0 && q > 1 && (fe = O ? H() : me()), D === "full" && (N && r === 0 && q === 1 || !N) && (fe = le())), /* @__PURE__ */ i.createElement(
    "path",
    {
      id: n,
      className: a,
      d: fe,
      fill: o,
      stroke: f,
      strokeWidth: s,
      onMouseOver: v,
      onMouseLeave: E,
      onClick: k,
      "data-tooltip-html": M,
      "data-tooltip-id": T,
      style: {
        transition: "all 0.2s linear",
        ...m
      }
    }
  );
}
const ak = () => {
  var B;
  const [e, t] = se.useState(0), { xScale: r, yScale: n, xMax: a, yMax: o } = se.useContext(Ls), { transformedData: f, colorScale: s, seriesHighlight: c, config: d, formatNumber: g, formatDate: y, parseDate: v, setSharedFilter: E } = se.useContext(wt), { isHorizontal: k, barBorderWidth: M, applyRadius: T, hoveredBar: m, getAdditionalColumn: R, onMouseLeaveBar: O, onMouseOverBar: _, barStackedSeriesKeys: N } = Rs(), { orientation: D } = d, I = d.brush.active && ((B = d.brush.data) != null && B.length) ? d.brush.data : f;
  return d.visualizationSubType === "stacked" && !k && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(cS, { data: I, keys: N, x: (U) => U[d.runtime.xAxis.dataKey], xScale: r, yScale: n, color: s }, (U) => U.reverse().map(
    (q) => q.bars.map((K) => {
      let j = d.legend.behavior === "highlight" && c.length > 0 && c.indexOf(K.key) === -1, te = d.legend.behavior === "highlight" || c.length === 0 || c.indexOf(K.key) !== -1, me = d.xAxis.type === "date-time" ? d.barThickness * (r.range()[1] - r.range()[0]) : a / q.bars.length, H = me * (d.xAxis.type === "date-time" ? 1 : d.barThickness || 0.8);
      me * (1 - (d.barThickness || 0.8)) / 2;
      const le = K.bar.data[d.runtime.xAxis.dataKey], ue = d.runtime.xAxis.type === "date" ? y(v(le)) : le, fe = g(K.bar ? K.bar.data[K.key] : 0, "left");
      if (!fe)
        return;
      const ae = r(d.runtime.xAxis.type === "date" ? v(le) : le) - (d.xAxis.type === "date" && d.xAxis.sortDates ? H / 2 : 0);
      T(q.index);
      const V = d.runtime.xAxis.label ? `${d.runtime.xAxis.label}: ${ue}` : ue, Z = R(m), ee = `${d.runtime.seriesLabels[K.key]}: ${fe}`, Ae = `<ul>
                  <li class="tooltip-heading"">${V}</li>
                  <li class="tooltip-body ">${ee}</li>
                  <li class="tooltip-body ">${Z}</li>
                    </li></ul>`;
      return t(H), /* @__PURE__ */ i.createElement(rt, { key: `${q.index}--${K.index}--${D}` }, /* @__PURE__ */ i.createElement(rt, { key: `bar-stack-${q.index}-${K.index}`, id: `barStack${q.index}-${K.index}`, className: "stack vertical" }, /* @__PURE__ */ i.createElement(Et, { display: d.labels && te ? "block" : "none", opacity: j ? 0.5 : 1, x: ae + e / 2, y: K.y - 5, fill: "#000", textAnchor: "middle" }, fe), Dc({
        config: d,
        seriesHighlight: c,
        index: q.index,
        background: s(d.runtime.seriesLabels[K.key]),
        borderColor: "#333",
        borderStyle: "solid",
        borderWidth: `${d.barHasBorder === "true" ? M : 0}px`,
        width: H,
        height: K.height,
        x: ae,
        y: K.y,
        onMouseOver: () => _(ue, K.key),
        onMouseLeave: O,
        tooltipHtml: Ae,
        tooltipId: `cdc-open-viz-tooltip-${d.runtime.uniqueId}`,
        onClick: (xe) => {
          xe.preventDefault(), E && (K[d.xAxis.dataKey] = ue, E(d.uid, K));
        },
        styleOverrides: {
          animationDelay: `${q.index * 0.5}s`,
          transformOrigin: `${H / 2}px ${K.y + K.height}px`,
          opacity: j ? 0.2 : 1,
          display: te ? "block" : "none"
        }
      })));
    })
  )), /* @__PURE__ */ i.createElement(mh, { xScale: r, yMax: o, barWidth: e, totalBarsInGroup: 1 }));
}, ik = () => {
  const { yMax: e, yScale: t, xScale: r } = se.useContext(Ls), {
    animatedChart: n,
    colorScale: a,
    config: o,
    formatDate: f,
    formatNumber: s,
    getTextWidth: c,
    parseDate: d,
    seriesHighlight: g,
    setSharedFilter: y,
    transformedData: v
  } = se.useContext(wt), { barBorderWidth: E, displayNumbersOnBar: k, fontSize: M, getAdditionalColumn: T, hoveredBar: m, isHorizontal: R, isLabelBelowBar: O, onMouseLeaveBar: _, onMouseOverBar: N, updateBars: D, barStackedSeriesKeys: I } = Rs(), { orientation: B, visualizationSubType: U } = o;
  return o.visualizationSubType === "stacked" && R && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(hS, { data: v, keys: I, height: e, y: (q) => q[o.runtime.yAxis.dataKey], xScale: r, yScale: t, color: a, offset: "none" }, (q) => q.map(
    (K) => D(K.bars).map((j, te) => {
      const me = o.legend.behavior === "highlight" && g.length > 0 && g.indexOf(j.key) === -1, H = o.legend.behavior === "highlight" || g.length === 0 || g.indexOf(j.key) !== -1;
      o.barHeight = Number(o.barHeight);
      const le = Zo("#000", a(o.runtime.seriesLabels[j.key])), ue = s(v[j.index][j.key], "left"), fe = o.runtime.yAxis.type === "date" ? f(d(v[j.index][o.runtime.originalXAxis.dataKey])) : v[j.index][o.runtime.originalXAxis.dataKey], ae = o.runtime.yAxis.label ? `${o.runtime.yAxis.label}: ${fe}` : fe, V = c(ue, `normal ${M[o.fontSize]}px sans-serif`), Z = T(m), ee = `${o.runtime.seriesLabels[j.key]}: ${ue}`, Ae = `<ul>
                  <li class="tooltip-heading"">${ae}</li>
                  <li class="tooltip-body ">${ee}</li>
                  <li class="tooltip-body ">${Z}</li>
                    </li></ul>`;
      return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(rt, { key: te, id: `barStack${K.index}-${j.index}`, className: "stack horizontal" }, Dc({
        config: o,
        seriesHighlight: g,
        index: K.index,
        className: `animated-chart group ${n ? "animated" : ""}`,
        background: a(o.runtime.seriesLabels[j.key]),
        borderColor: "#333",
        borderStyle: "solid",
        borderWidth: `${o.barHasBorder === "true" ? E : 0}px`,
        width: j.width,
        height: j.height,
        x: j.x,
        y: j.y,
        onMouseOver: () => N(fe, j.key),
        onMouseLeave: _,
        tooltipHtml: Ae,
        tooltipId: `cdc-open-viz-tooltip-${o.runtime.uniqueId}`,
        onClick: (xe) => {
          xe.preventDefault(), y && (j[o.xAxis.dataKey] = ue, y(o.uid, j));
        },
        styleOverrides: {
          animationDelay: `${K.index * 0.5}s`,
          transformOrigin: `${j.x}px 0`,
          opacity: me ? 0.2 : 1,
          display: H ? "block" : "none"
        }
      }), B === "horizontal" && U === "stacked" && O && K.index === 0 && !o.yAxis.hideLabel && /* @__PURE__ */ i.createElement(
        Et,
        {
          x: `${j.x + (o.isLollipopChart ? 15 : 5)}`,
          y: j.y + j.height * 1.2,
          fill: "#000000",
          textAnchor: "start",
          verticalAnchor: "start"
        },
        fe
      ), k && V < j.width && /* @__PURE__ */ i.createElement(
        Et,
        {
          display: H ? "block" : "none",
          x: j.x + K.bars[j.index].width / 2,
          y: j.y + j.height / 2,
          fill: le,
          textAnchor: "middle",
          verticalAnchor: "middle"
        },
        ue
      )));
    })
  )));
}, ok = () => {
  var V;
  const { xScale: e, yScale: t, xMax: r, yMax: n, seriesScale: a } = se.useContext(Ls), [o, f] = se.useState(0), [s, c] = se.useState(0), {
    applyRadius: d,
    assignColorsToValues: g,
    barBorderWidth: y,
    generateIconSize: v,
    getAdditionalColumn: E,
    getHighlightedBarByValue: k,
    getHighlightedBarColorByValue: M,
    lollipopBarWidth: T,
    lollipopShapeSize: m,
    onMouseLeaveBar: R,
    onMouseOverBar: O,
    section: _
  } = Rs(), {
    colorScale: N,
    config: D,
    dashboardConfig: I,
    formatDate: B,
    formatNumber: U,
    getXAxisData: q,
    getYAxisData: K,
    isNumber: j,
    parseDate: te,
    seriesHighlight: me,
    setSharedFilter: H,
    transformedData: le
  } = se.useContext(wt), { HighLightedBarUtils: ue } = Ac(D), fe = D.brush.active && ((V = D.brush.data) != null && V.length) ? D.brush.data : le, ae = (Z, ee) => {
    var De;
    let Ae = null;
    const xe = v(ee);
    return (De = D.suppressedData) == null || De.forEach((oe) => {
      Z.key === oe.column && String(Z.value) === String(oe.value) && oe.icon && (Ae = /* @__PURE__ */ i.createElement(fh, { color: "#000", size: xe }));
    }), Ae;
  };
  return D.visualizationSubType !== "stacked" && (D.visualizationType === "Bar" || D.visualizationType === "Combo") && D.orientation === "vertical" && /* @__PURE__ */ i.createElement(rt, null, /* @__PURE__ */ i.createElement(
    Og,
    {
      data: fe,
      keys: D.runtime.barSeriesKeys || D.runtime.seriesKeys,
      height: n,
      x0: (Z) => {
        const ee = Z[D.runtime.originalXAxis.dataKey];
        return Cn(D.runtime.xAxis) ? te(ee) : ee;
      },
      x0Scale: e,
      x1Scale: a,
      yScale: t,
      color: () => ""
    },
    (Z) => Z.map((ee, Ae) => /* @__PURE__ */ i.createElement(rt, { className: `bar-group-${ee.index}-${ee.x0}--${Ae} ${D.orientation}`, key: `bar-group-${ee.index}-${ee.x0}--${Ae}`, id: `bar-group-${ee.index}-${ee.x0}--${Ae}`, left: ee.x0 }, ee.bars.map((xe, De) => {
      const oe = D.useLogScale ? 0.1 : 0, ze = 20;
      let Ie = D.highlightedBarValues.map((Rt) => Rt.value).filter((Rt) => Rt !== void 0);
      Ie = D.xAxis.type === "date" ? ue.formatDates(Ie) : Ie;
      let Ce = D.legend.behavior === "highlight" && me.length > 0 && me.indexOf(xe.key) === -1, ge = D.legend.behavior === "highlight" || me.length === 0 || me.indexOf(xe.key) !== -1, Oe = Math.abs(t(xe.value) - t(oe)), ie = xe.value >= 0 && j(xe.value) ? xe.y : t(0);
      const we = xe.value >= 0 && j(xe.value) ? t(oe) - ze : t(0), Pe = D.suppressedData.some((Rt) => xe.key === Rt.column && String(xe.value) === String(Rt.value)) ? we : ie;
      let He = a.range()[1], Ye = D.isLollipopChart ? T : He / ee.bars.length, Je = xe.x + (D.isLollipopChart ? (He / ee.bars.length - T) / 2 : 0) - (D.xAxis.type === "date-time" ? He / 2 : 0);
      f(Ye), c(ee.bars.length);
      let at = U(xe.value, "left"), it = D.runtime[_].type === "date" ? B(te(fe[ee.index][D.runtime.originalXAxis.dataKey])) : fe[ee.index][D.runtime.originalXAxis.dataKey];
      const st = xe.value < 0 ? -1 : De, Ge = E(xe.key, fe[ee.index][D.runtime.originalXAxis.dataKey]);
      let We = D.runtime.xAxis.label ? `${D.runtime.xAxis.label}: ${it}` : it;
      const Fe = `${D.runtime.seriesLabels[xe.key]}: ${at}`, ft = `<ul>
                  <li class="tooltip-heading">${We}</li>
                  <li class="tooltip-body ">${Fe}</li>
                  ${Ge ? '<li class="tooltip-body ">' + Ge + "</li>" : ""}
                    </li></ul>`;
      let Ke = "#000000";
      Ke = ue.checkFontColor(at, Ie, Ke);
      let Ze = D.runtime.seriesLabels && D.runtime.seriesLabels[xe.key] ? N(D.runtime.seriesLabels[xe.key]) : N(xe.key);
      Ze = g(Z.length, ee.index, Ze);
      const ut = D.isLollipopChart && D.lollipopColorStyle === "regular", ht = D.isLollipopChart && D.lollipopColorStyle === "two-tone", Pt = Ie == null ? void 0 : Ie.includes(it), on = M(it), un = k(it), Ot = Pt ? on : D.barHasBorder === "true" ? "#000" : "transparent", jt = Pt ? un.borderWidth : D.isLollipopChart ? 0 : D.barHasBorder === "true" ? y : 0, Ft = D.suppressedData.some((Rt) => xe.key === Rt.column && xe.value === Rt.value) ? "" : at;
      let nn = D.suppressedData.some((Rt) => xe.key === Rt.column && String(xe.value) === String(Rt.value)) ? ze : Oe;
      const yn = D.suppressedData.some((Rt) => xe.key === Rt.column && xe.value === Rt.value) ? "none" : "block", hn = (Rt, Zt) => {
        let _e = Rt, wn = Zt || "#f2f2f2";
        if (I && I.dashboard.sharedFilters) {
          const { sharedFilters: Lt } = I.dashboard;
          return _e = Lt.map((vn) => vn.setBy === D.uid ? vn.resetLabel === vn.active || vn.active === le[ee.index][D.xAxis.dataKey] ? Rt : wn : Rt)[0], ut && (_e = Rt), ht && (_e = bs(Rt).brighten(1)), Pt && (_e = "transparent"), _e;
        }
        return ht && (_e = bs(Rt).brighten(1)), Pt && (_e = "transparent"), _e;
      };
      return /* @__PURE__ */ i.createElement(rt, { key: `${ee.index}--${De}` }, /* @__PURE__ */ i.createElement(rt, { key: `bar-sub-group-${ee.index}-${ee.x0}-${Pe}--${De}` }, Dc({
        config: D,
        index: st,
        id: `barGroup${ee.index}`,
        background: hn(Ze),
        borderColor: Ot,
        borderStyle: "solid",
        borderWidth: `${jt}px`,
        width: Ye,
        height: nn,
        x: Je,
        y: Pe,
        onMouseOver: () => O(it, xe.key),
        onMouseLeave: R,
        tooltipHtml: ft,
        tooltipId: `cdc-open-viz-tooltip-${D.runtime.uniqueId}`,
        onClick: (Rt) => {
          Rt.preventDefault(), H && (xe[D.xAxis.dataKey] = it, H(D.uid, xe));
        },
        styleOverrides: {
          transformOrigin: `0 ${Pe + nn}px`,
          opacity: Ce ? 0.2 : 1,
          display: ge ? "block" : "none",
          cursor: I ? "pointer" : "default"
        }
      }), /* @__PURE__ */ i.createElement(
        "g",
        {
          transform: `translate(${Je},${n - ze})`,
          onMouseOver: () => O(it, xe.key),
          onMouseLeave: R,
          opacity: Ce ? 0.2 : 1,
          display: ge ? "block" : "none",
          "data-tooltip-html": ft,
          "data-tooltip-id": `cdc-open-viz-tooltip-${D.runtime.uniqueId}`,
          onClick: (Rt) => {
            Rt.preventDefault(), H && (xe[D.xAxis.dataKey] = it, H(D.uid, xe));
          }
        },
        ae(xe, Ye)
      ), /* @__PURE__ */ i.createElement(
        Et,
        {
          display: D.labels && ge ? "block" : "none",
          opacity: Ce ? 0.5 : 1,
          x: Je + Ye / 2,
          y: Pe - 5,
          fill: Ke,
          textAnchor: "middle"
        },
        Ft
      ), D.isLollipopChart && D.lollipopShape === "circle" && /* @__PURE__ */ i.createElement(
        "circle",
        {
          display: yn,
          cx: Je + m / 3.5,
          cy: xe.y,
          r: m / 2,
          fill: Ze,
          key: `circle--${xe.index}`,
          "data-tooltip-html": ft,
          "data-tooltip-id": `cdc-open-viz-tooltip-${D.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), D.isLollipopChart && D.lollipopShape === "square" && /* @__PURE__ */ i.createElement(
        "rect",
        {
          display: yn,
          x: Je - T / 2,
          y: Pe,
          width: m,
          height: m,
          fill: Ze,
          key: `circle--${xe.index}`,
          "data-tooltip-html": ft,
          "data-tooltip-id": `cdc-open-viz-tooltip-${D.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ i.createElement("animate", { attributeName: "height", values: `0, ${m}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(D.confidenceKeys).length > 0 ? fe.map((Z) => {
    let ee, Ae, xe, De, oe = 5;
    return ee = e(q(Z)) + (D.xAxis.type !== "date" || D.xAxis.type !== "date-time" ? a.range()[1] / 2 : 0), xe = t(K(Z, D.confidenceKeys.lower)), De = t(K(Z, D.confidenceKeys.upper)), /* @__PURE__ */ i.createElement(
      "path",
      {
        key: `confidence-interval-v-${Ae}-${Z[D.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${ee - oe} ${xe}
                    L${ee + oe} ${xe}
                    M${ee} ${xe}
                    L${ee} ${De}
                    M${ee - oe} ${De}
                    L${ee + oe} ${De}`
      }
    );
  }) : "", /* @__PURE__ */ i.createElement(mh, { xScale: e, yMax: n, barWidth: o, totalBarsInGroup: s }));
}, lk = () => {
  const { xScale: e, yScale: t, yMax: r, seriesScale: n } = se.useContext(Ls), { transformedData: a, colorScale: o, seriesHighlight: f, config: s, formatNumber: c, formatDate: d, parseDate: g, setSharedFilter: y, isNumber: v, getTextWidth: E, getYAxisData: k, getXAxisData: M } = se.useContext(wt), {
    isHorizontal: T,
    barBorderWidth: m,
    updateBars: R,
    assignColorsToValues: O,
    section: _,
    fontSize: N,
    isLabelBelowBar: D,
    displayNumbersOnBar: I,
    lollipopBarWidth: B,
    lollipopShapeSize: U,
    getHighlightedBarColorByValue: q,
    getHighlightedBarByValue: K,
    generateIconSize: j,
    getAdditionalColumn: te,
    hoveredBar: me,
    onMouseLeaveBar: H,
    onMouseOverBar: le
  } = Rs(), { HighLightedBarUtils: ue } = Ac(s), fe = (ae, V) => {
    var Ae;
    let Z = null;
    const ee = j(V);
    return (Ae = s.suppressedData) == null || Ae.forEach((xe) => {
      ae.key === xe.column && String(ae.value) === String(xe.value) && xe.icon && (Z = /* @__PURE__ */ i.createElement(fh, { color: "#000", size: ee }));
    }), Z;
  };
  return s.visualizationSubType !== "stacked" && s.visualizationType === "Bar" && s.orientation === "horizontal" && /* @__PURE__ */ i.createElement(rt, null, /* @__PURE__ */ i.createElement(
    Og,
    {
      data: a,
      keys: s.runtime.barSeriesKeys || s.runtime.seriesKeys,
      height: r,
      x0: (ae) => ae[s.runtime.originalXAxis.dataKey],
      x0Scale: t,
      x1Scale: n,
      yScale: e,
      color: () => ""
    },
    (ae) => R(ae).map((V, Z) => /* @__PURE__ */ i.createElement(rt, { className: `bar-group-${V.index}-${V.x0}--${Z} ${s.orientation}`, key: `bar-group-${V.index}-${V.x0}--${Z}`, id: `bar-group-${V.index}-${V.x0}--${Z}`, top: V.y }, V.bars.map((ee, Ae) => {
      const xe = s.useLogScale ? 0.1 : 0;
      let De = s.highlightedBarValues.map((It) => It.value).filter((It) => It !== void 0);
      De = s.xAxis.type === "date" ? ue.formatDates(De) : De;
      let oe = s.legend.behavior === "highlight" && f.length > 0 && f.indexOf(ee.key) === -1, ze = s.legend.behavior === "highlight" || f.length === 0 || f.indexOf(ee.key) !== -1, Ie = s.barHeight, Ce = parseInt(s.isLollipopChart ? B : Ie);
      isNaN(Ce) && (Ce = 25);
      let ge = ee.value >= 0 && v(ee.value) ? ee.y : t(xe);
      const Oe = ee.value < 0 ? Math.abs(e(ee.value)) : e(xe), ie = Math.abs(e(ee.value) - e(xe)), we = 25, Pe = ee.value >= 0 && v(ee.value);
      let He = ee.value && s.suppressedData.some(({ column: It, value: pn }) => ee.key === It && ee.value === pn) ? we : ie;
      const Ye = Pe ? e(0) : e(xe) - we, Je = s.suppressedData.some((It) => ee.key === It.column && String(ee.value) === String(It.value)) ? Ye : Oe, at = c(ee.value, "left"), it = s.runtime[_].type === "date" ? d(g(a[V.index][s.runtime.originalXAxis.dataKey])) : a[V.index][s.runtime.originalXAxis.dataKey], st = Pe ? "above" : "below", Ge = s.suppressedData.some((It) => ee.key === It.column && ee.value === It.value) ? "" : at;
      let Fe = E(it, `normal ${N[s.fontSize]}px sans-serif`) < ie - 5, ft = Fe ? "end" : "start", Ke = "start", Ze = Fe ? -5 : 5, ut = 10;
      st === "below" && (ft = Fe ? "start" : "end", Ze = Fe ? 5 : -5, s.isLollipopChart && (Ke = "end", ut = -10));
      const ht = ee.value < 0 ? -1 : Ae;
      let Pt = s.runtime.yAxis.label ? `${s.runtime.yAxis.label}: ${it}` : it;
      const on = te(me), un = `${s.runtime.seriesLabels[ee.key]}: ${at}`, Ot = `<ul>
                  <li class="tooltip-heading"">${Pt}</li>
                  <li class="tooltip-body ">${un}</li>
                  <li class="tooltip-body ">${on}</li>
                    </li></ul>`;
      let jt = "#000000";
      jt = ue.checkFontColor(at, De, jt);
      let Ft = s.runtime.seriesLabels && s.runtime.seriesLabels[ee.key] ? o(s.runtime.seriesLabels[ee.key]) : o(ee.key);
      Ft = O(ae.length, V.index, Ft);
      const nn = s.isLollipopChart && s.lollipopColorStyle === "regular", yn = s.isLollipopChart && s.lollipopColorStyle === "two-tone", hn = De == null ? void 0 : De.includes(at), Rt = q(at), Zt = K(at), _e = hn ? Rt : s.barHasBorder === "true" ? "#000" : "transparent", wn = hn ? Zt.borderWidth : s.isLollipopChart ? 0 : s.barHasBorder === "true" ? m : 0, Lt = s.suppressedData.some((It) => ee.key === It.column && ee.value === It.value) ? "none" : "block";
      Ft && jt && Fe && (jt = Zo("#000", Ft));
      const vn = () => nn ? Ft : yn ? bs(Ft).brighten(1) : hn ? "transparent" : Ft;
      return /* @__PURE__ */ i.createElement(rt, { key: `${V.index}--${Ae}` }, /* @__PURE__ */ i.createElement(rt, { key: `bar-sub-group-${V.index}-${V.x0}-${ge}--${Ae}` }, Dc({
        config: s,
        index: ht,
        id: `barGroup${V.index}`,
        background: vn(),
        borderColor: _e,
        borderStyle: "solid",
        borderWidth: `${wn}px`,
        width: He,
        height: Ce,
        x: Je,
        y: Ie * ee.index,
        onMouseOver: () => le(it, ee.key),
        onMouseLeave: H,
        tooltipHtml: Ot,
        tooltipId: `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
        onClick: (It) => {
          It.preventDefault(), y && (ee[s.xAxis.dataKey] = at, y(s.uid, ee));
        },
        styleOverrides: {
          transformOrigin: `0 ${ge + Ie}px`,
          opacity: oe ? 0.2 : 1,
          display: ze ? "block" : "none"
        }
      }), /* @__PURE__ */ i.createElement(
        "g",
        {
          transform: `translate(${Je},${Ie * ee.index})`,
          onMouseOver: () => le(it, ee.key),
          onMouseLeave: H,
          opacity: oe ? 0.2 : 1,
          display: ze ? "block" : "none",
          "data-tooltip-html": Ot,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          onClick: (It) => {
            It.preventDefault(), y && (ee[s.xAxis.dataKey] = at, y(s.uid, ee));
          }
        },
        fe(ee, He)
      ), !s.isLollipopChart && I && /* @__PURE__ */ i.createElement(
        Et,
        {
          display: ze ? "block" : "none",
          x: ee.y,
          y: s.barHeight / 2 + s.barHeight * ee.index,
          fill: jt,
          dx: Ze,
          verticalAnchor: "middle",
          textAnchor: ft
        },
        Ge
      ), s.isLollipopChart && I && /* @__PURE__ */ i.createElement(
        Et,
        {
          display: ze ? "block" : "none",
          x: ee.y,
          y: 0,
          fill: "#000000",
          dx: ut,
          textAnchor: Ke,
          verticalAnchor: "middle",
          fontWeight: "normal"
        },
        Ge
      ), D && !s.yAxis.hideLabel && /* @__PURE__ */ i.createElement(Et, { x: s.yAxis.hideAxis ? 0 : 5, y: V.height, dy: 4, verticalAnchor: "start", textAnchor: "start" }, s.runtime.yAxis.type === "date" ? d(g(a[V.index][s.runtime.originalXAxis.dataKey])) : T ? a[V.index][s.runtime.originalXAxis.dataKey] : c(a[V.index][s.runtime.originalXAxis.dataKey])), s.isLollipopChart && s.lollipopShape === "circle" && /* @__PURE__ */ i.createElement(
        "circle",
        {
          display: Lt,
          cx: ee.y,
          cy: Ie * ee.index + B / 2,
          r: U / 2,
          fill: Ft,
          key: `circle--${ee.index}`,
          "data-tooltip-html": Ot,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          style: { filter: "unset", opacity: 1 }
        }
      ), s.isLollipopChart && s.lollipopShape === "square" && /* @__PURE__ */ i.createElement(
        "rect",
        {
          display: Lt,
          x: ee.y > 10 ? ee.y - U / 2 : 0,
          y: 0 - B / 2,
          width: U,
          height: U,
          fill: Ft,
          key: `circle--${ee.index}`,
          "data-tooltip-html": Ot,
          "data-tooltip-id": `cdc-open-viz-tooltip-${s.runtime.uniqueId}`,
          style: { opacity: 1, filter: "unset" }
        },
        /* @__PURE__ */ i.createElement("animate", { attributeName: "height", values: `0, ${U}`, dur: "2.5s" })
      )));
    })))
  ), Object.keys(s.confidenceKeys).length > 0 ? a.map((ae) => {
    let V, Z, ee, Ae = 5;
    return V = t(M(ae)) - 0.75 * s.barHeight, Z = e(k(ae, s.confidenceKeys.upper)), ee = e(k(ae, s.confidenceKeys.lower)), /* @__PURE__ */ i.createElement(
      "path",
      {
        key: `confidence-interval-h-${V}-${ae[s.runtime.originalXAxis.dataKey]}`,
        stroke: "#333",
        strokeWidth: "px",
        d: `
                    M${ee} ${V - Ae}
                    L${ee} ${V + Ae}
                    M${ee} ${V}
                    L${Z} ${V}
                    M${Z} ${V - Ae}
                    L${Z} ${V + Ae} `
      }
    );
  }) : "");
}, Nu = {
  Vertical: ok,
  Horizontal: lk,
  StackedVertical: ak,
  StackedHorizontal: ik
}, sk = ({ xScale: e, yScale: t, seriesScale: r, xMax: n, yMax: a, handleTooltipMouseOver: o, handleTooltipMouseOff: f, handleTooltipClick: s }) => {
  const { transformedData: c, config: d } = se.useContext(wt), g = {
    xScale: e,
    yScale: t,
    xMax: n,
    yMax: a,
    seriesScale: r
  };
  return /* @__PURE__ */ i.createElement(zr, { component: "BarChart" }, /* @__PURE__ */ i.createElement(Ls.Provider, { value: g }, /* @__PURE__ */ i.createElement(rt, { left: parseFloat(d.runtime.yAxis.size) }, /* @__PURE__ */ i.createElement(Nu.StackedVertical, null), /* @__PURE__ */ i.createElement(Nu.StackedHorizontal, null), /* @__PURE__ */ i.createElement(Nu.Vertical, null), /* @__PURE__ */ i.createElement(Nu.Horizontal, null), /* @__PURE__ */ i.createElement(yr, { key: "bars", display: d.tooltips.singleSeries ? "none" : "block", width: Number(n), height: Number(a), fill: "transparent", fillOpacity: 0.05, onMouseMove: (y) => o(y, c), onMouseOut: f, onClick: (y) => s(y, c) }))));
};
function $a() {
  return $a = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $a.apply(this, arguments);
}
function Oi(e) {
  var t = e.x1, r = e.x2, n = e.y1, a = e.y2;
  return {
    x1: n,
    x2: a,
    y1: t,
    y2: r
  };
}
function uy(e) {
  var t = e.left, r = t === void 0 ? 0 : t, n = e.top, a = n === void 0 ? 0 : n, o = e.className, f = e.max, s = e.min, c = e.firstQuartile, d = e.thirdQuartile, g = e.median, y = e.boxWidth, v = y === void 0 ? 10 : y, E = e.fill, k = e.fillOpacity, M = e.stroke, T = e.strokeWidth, m = e.rx, R = m === void 0 ? 2 : m, O = e.ry, _ = O === void 0 ? 2 : O, N = e.valueScale, D = e.outliers, I = D === void 0 ? [] : D, B = e.horizontal, U = e.medianProps, q = U === void 0 ? {} : U, K = e.maxProps, j = K === void 0 ? {} : K, te = e.minProps, me = te === void 0 ? {} : te, H = e.boxProps, le = H === void 0 ? {} : H, ue = e.outlierProps, fe = ue === void 0 ? {} : ue, ae = e.container, V = ae === void 0 ? !1 : ae, Z = e.containerProps, ee = Z === void 0 ? {} : Z, Ae = e.children, xe = B ? a : r, De = xe + (v || 0) / 2, oe = N.range(), ze = N(s ?? 0), Ie = N(c ?? 0), Ce = N(g ?? 0), ge = N(d ?? 0), Oe = N(f ?? 0), ie = {
    valueRange: oe,
    center: De,
    offset: xe,
    boxWidth: v,
    max: {
      x1: De - (v || 0) / 4,
      x2: De + (v || 0) / 4,
      y1: Oe,
      y2: Oe
    },
    maxToThird: {
      x1: De,
      x2: De,
      y1: Oe,
      y2: ge
    },
    median: {
      x1: xe,
      x2: xe + (v || 0),
      y1: Ce,
      y2: Ce
    },
    minToFirst: {
      x1: De,
      x2: De,
      y1: Ie,
      y2: ze
    },
    min: {
      x1: De - (v || 0) / 4,
      x2: De + (v || 0) / 4,
      y1: ze,
      y2: ze
    },
    box: {
      x1: xe,
      x2: v || 0,
      y1: ge,
      y2: Math.abs(ge - Ie)
    },
    container: {
      x1: xe,
      x2: v || 0,
      y1: Math.min.apply(Math, oe),
      y2: Math.abs(oe[0] - oe[1])
    }
  };
  return B && (ie.max = Oi(ie.max), ie.maxToThird = Oi(ie.maxToThird), ie.box.y1 = Ie, ie.box = Oi(ie.box), ie.median = Oi(ie.median), ie.minToFirst = Oi(ie.minToFirst), ie.min = Oi(ie.min), ie.container = Oi(ie.container), ie.container.y1 = Math.min.apply(Math, oe)), Ae ? /* @__PURE__ */ i.createElement(i.Fragment, null, Ae(ie)) : /* @__PURE__ */ i.createElement(rt, {
    className: Dn("visx-boxplot", o)
  }, I.map(function(we, Pe) {
    var He = B ? N(we) : De, Ye = B ? De : N(we);
    return /* @__PURE__ */ i.createElement("circle", $a({
      key: "visx-boxplot-outlier-" + Pe,
      className: "visx-boxplot-outlier",
      cx: He,
      cy: Ye,
      r: 4,
      stroke: M,
      strokeWidth: T,
      fill: E,
      fillOpacity: k
    }, fe));
  }), /* @__PURE__ */ i.createElement("line", $a({
    className: "visx-boxplot-max",
    x1: ie.max.x1,
    y1: ie.max.y1,
    x2: ie.max.x2,
    y2: ie.max.y2,
    stroke: M,
    strokeWidth: T
  }, j)), /* @__PURE__ */ i.createElement("line", {
    className: "visx-boxplot-max-to-third",
    x1: ie.maxToThird.x1,
    y1: ie.maxToThird.y1,
    x2: ie.maxToThird.x2,
    y2: ie.maxToThird.y2,
    stroke: M,
    strokeWidth: T
  }), /* @__PURE__ */ i.createElement("rect", $a({
    className: "visx-boxplot-box",
    x: ie.box.x1,
    y: ie.box.y1,
    width: ie.box.x2,
    height: ie.box.y2,
    stroke: M,
    strokeWidth: T,
    fill: E,
    fillOpacity: k,
    rx: R,
    ry: _
  }, le)), /* @__PURE__ */ i.createElement("line", $a({
    className: "visx-boxplot-median",
    x1: ie.median.x1,
    y1: ie.median.y1,
    x2: ie.median.x2,
    y2: ie.median.y2,
    stroke: M,
    strokeWidth: T
  }, q)), /* @__PURE__ */ i.createElement("line", {
    className: "visx-boxplot-min-to-first",
    x1: ie.minToFirst.x1,
    y1: ie.minToFirst.y1,
    x2: ie.minToFirst.x2,
    y2: ie.minToFirst.y2,
    stroke: M,
    strokeWidth: T
  }), /* @__PURE__ */ i.createElement("line", $a({
    className: "visx-boxplot-min",
    x1: ie.min.x1,
    y1: ie.min.y1,
    x2: ie.min.x2,
    y2: ie.min.y2,
    stroke: M,
    strokeWidth: T
  }, me)), V && /* @__PURE__ */ i.createElement("rect", $a({
    x: ie.container.x1,
    y: ie.container.y1,
    width: ie.container.x2,
    height: ie.container.y2,
    fillOpacity: "0"
  }, ee)));
}
uy.propTypes = {
  max: he.number,
  min: he.number,
  firstQuartile: he.number,
  thirdQuartile: he.number,
  median: he.number,
  boxWidth: he.number,
  fill: he.string,
  fillOpacity: he.oneOfType([he.number, he.string]),
  stroke: he.string,
  strokeWidth: he.oneOfType([he.number, he.string]),
  rx: he.number,
  ry: he.number,
  outliers: he.arrayOf(he.number),
  container: he.bool,
  children: he.func
};
const uk = ({ xScale: e, yScale: t }) => {
  const { config: r, setConfig: n } = se.useContext(wt), { boxplot: a } = r;
  se.useEffect(() => {
    r.legend.hide === !1 && n({
      ...r,
      legend: {
        ...r.legend,
        hide: !0
      }
    });
  }, []);
  const o = `cdc-open-viz-tooltip-${r.runtime.uniqueId}`, f = (T) => `
      <strong>${T.columnCategory}</strong></br>
      ${a.labels.q1}: ${T.columnFirstQuartile}<br/>
      ${a.labels.q3}: ${T.columnThirdQuartile}<br/>
      ${a.labels.iqr}: ${T.columnIqr}<br/>
      ${a.labels.median}: ${T.columnMedian}
    `, s = (T) => Number(T.columnMax), c = (T) => Number(T.columnMin), d = (T) => Number(T.columnMedian), g = (T) => Number(T.columnThirdQuartile), y = (T) => Number(T.columnFirstQuartile), v = 0.5, E = e.bandwidth(), k = Math.min(40, E), M = fr[r == null ? void 0 : r.palette][0] ? fr[r == null ? void 0 : r.palette][0] : "#000";
  return /* @__PURE__ */ i.createElement(zr, { component: "BoxPlot" }, /* @__PURE__ */ i.createElement(rt, { className: "boxplot", key: "boxplot-group" }, a.plots.map((T, m) => {
    const R = E - k, O = 4;
    return /* @__PURE__ */ i.createElement(rt, { key: `boxplotplot-${m}` }, a.plotNonOutlierValues && T.nonOutlierValues.map((_, N) => /* @__PURE__ */ i.createElement("circle", { cx: e(T.columnCategory) + Number(r.yAxis.size) + E / 2, cy: t(_), r: O, fill: "#ccc", style: { opacity: 1, fillOpacity: 1, stroke: "black" }, key: `boxplot-${m}--circle-${N}` })), /* @__PURE__ */ i.createElement(
      uy,
      {
        "data-left": e(T.columnCategory) + r.yAxis.size + R / 2 + 0.5,
        key: `box-plot-${m}`,
        min: c(T),
        max: s(T),
        left: Number(e(T.columnCategory)) + Number(r.yAxis.size) + R / 2 + 0.5,
        firstQuartile: y(T),
        thirdQuartile: g(T),
        median: d(T),
        boxWidth: k,
        fill: M,
        fillOpacity: v,
        stroke: "black",
        valueScale: t,
        outliers: a.plotOutlierValues ? T.columnOutliers : [],
        outlierProps: {
          style: {
            fill: `${M}`,
            opacity: 1
          }
        },
        medianProps: {
          style: {
            stroke: "black"
          }
        },
        boxProps: {
          style: {
            stroke: "black",
            strokeWidth: a.borders === "true" ? 1 : 0
          }
        },
        maxProps: {
          style: {
            stroke: "black"
          }
        },
        container: !0,
        containerProps: {
          "data-tooltip-html": f(T),
          "data-tooltip-id": o,
          tabIndex: -1
        }
      }
    ));
  })));
}, ck = ({ xScale: e, yScale: t, getXAxisData: r, getYAxisData: n }) => {
  const { colorScale: a, transformedData: o, config: f, formatNumber: s, seriesHighlight: c, colorPalettes: d } = se.useContext(wt);
  let g = 4.5;
  const y = Object.keys(f.runtime.seriesLabels).length > 1, v = (E, k) => `<div>
    ${f.legend.showLegendValuesTooltip && f.runtime.seriesLabels && y ? `${f.runtime.seriesLabels[k] || ""}<br/>` : ""}
    ${f.xAxis.label}: ${s(E[f.xAxis.dataKey], "bottom")} <br/>
    ${f.yAxis.label}: ${s(E[k], "left")}
</div>`;
  return /* @__PURE__ */ i.createElement(rt, { className: "scatter-plot", left: f.yAxis.size }, o.map((E, k) => f.runtime.seriesKeys.map((M, T) => {
    const m = f.legend.behavior === "highlight" && c.length > 0 && c.indexOf(M) === -1, R = f.legend.behavior === "highlight" || c.length === 0 || c.indexOf(M) !== -1, O = f.palette ? d[f.palette][T] : "#000";
    let _ = {
      filter: "unset",
      opacity: 1,
      stroke: R ? "black" : ""
    };
    return /* @__PURE__ */ i.createElement(
      "circle",
      {
        key: `${k}-${T}`,
        r: g,
        cx: e(E[f.xAxis.dataKey]),
        cy: t(E[M]),
        fill: R ? O : "transparent",
        fillOpacity: m ? 0.25 : 1,
        style: _,
        "data-tooltip-html": v(E, M),
        "data-tooltip-id": `cdc-open-viz-tooltip-${f.runtime.uniqueId}`,
        tabIndex: -1
      }
    );
  })));
};
function dk({ height: e, xScale: t }) {
  const { transformedData: r, config: n, formatNumber: a, twoColorPalette: o, getTextWidth: f, updateConfig: s, parseDate: c, formatDate: d, currentViewport: g } = se.useContext(wt), { barStyle: y, tipRounding: v, roundingStyle: E, twoColor: k } = n, M = se.useRef([]), [T, m] = se.useState(window.innerWidth), R = E === "standard" ? "8px" : E === "shallow" ? "5px" : E === "finger" ? "15px" : "0px", O = { small: 16, medium: 18, large: 20 };
  n.barStyle;
  const _ = Number(n.xAxis.target), N = n.series[0].dataKey, D = Number(t.domain()[1]), B = r.some((ae) => ae[N] < 0) || _ > 0 || t.domain()[0] < 0, U = n.barHasBorder === "true" ? 1 : 0, q = n.lollipopSize === "large" ? 7 : n.lollipopSize === "medium" ? 6 : 5, K = n.lollipopSize === "large" ? 14 : n.lollipopSize === "medium" ? 12 : 10, j = Math.max(t(0), Math.min(t(_), t(D))), te = (ae) => {
    if (ae == null || y !== "rounded")
      return;
    let V = {};
    return ae === "left" && (V = { borderRadius: `${R} 0 0 ${R}` }), ae === "right" && (V = { borderRadius: `0 ${R} ${R} 0` }), v === "full" && (V = { borderRadius: R }), V;
  }, me = {
    calculate: function() {
      const V = r[0][N] < _ ? "left" : "right", Z = `${n.xAxis.targetLabel} ${a(n.xAxis.target || 0, "left")}`, ee = f(Z, `bold ${O[n.fontSize]}px sans-serif`);
      let Ae = n.isLollipopChart ? q / 2 : Number(n.barHeight) / 2, xe = 0, De = 0, oe = !1;
      V === "right" && (xe = -10, oe = ee - xe < j, De = j - ee), V === "left" && (xe = 10, oe = t(D) - j > ee + xe, De = j), this.text = Z, this.y = Ae, this.x = De, this.padding = xe, this.showLabel = n.xAxis.showTargetLabel ? oe : !1;
    }
  };
  me.calculate();
  const H = se.useRef(null), le = ch(H, {});
  se.useEffect(() => {
    const ae = () => {
      m(window.innerWidth), M.current.forEach((V) => {
        V.style.transition = "none", V.style.transform = "translate(0) scale(1)";
      });
    };
    return window.addEventListener("resize", ae), () => {
      window.removeEventListener("resize", ae);
    };
  }, []);
  const [ue, fe] = se.useState(!1);
  return se.useEffect(() => {
    le != null && le.isIntersecting && setTimeout(() => {
      fe(!0);
    }, 100);
  }, [le == null ? void 0 : le.isIntersecting, n.animate]), se.useEffect(() => {
    M.current.forEach((ae, V) => {
      if (n.animate) {
        const Z = _ / D * 100;
        ae.style.opacity = "0", ae.style.transform = `translate(${Z / 1.07}%) scale(0, 1)`, setTimeout(() => {
          ae.style.opacity = "1", ae.style.transform = "translate(0) scale(1)", ae.style.transition = "transform 0.5s ease";
        }, 100);
      } else
        ae.style.transition = "none", ae.style.opacity = "0";
      n.animate || (ae.style.transition = "none", ae.style.opacity = "1");
    });
  }, [n.animate, n, ue]), /* @__PURE__ */ i.createElement(zr, { component: "Deviation Bar" }, /* @__PURE__ */ i.createElement(rt, { left: Number(n.xAxis.size) }, r.map((ae, V) => {
    const Z = Number(ae[N]), ee = n.isLollipopChart ? q : Number(n.barHeight), Ae = Number(n.barSpace), xe = Math.abs(t(Z) - j), De = t(Z), oe = Z > _ ? j : De, ze = Z < _ ? "left" : "right";
    let Ie = 0;
    Ie = V !== 0 ? (Ae + ee + U) * V : Ie;
    const Ce = (Ae + ee + U) * r.length;
    n.heights.horizontal = Ce;
    const Oe = f(a(Z, "left"), `normal ${O[n.fontSize]}px sans-serif`) < xe - 6, ie = De, we = Ie + ee / 2, Pe = De, He = Ie + ee / 2, Ye = De, Je = Ie - ee / 2, at = te(ze), [it, st] = o[k.palette], Ge = { left: it, right: st }, We = Zo("#000", Ge[ze]);
    let Fe = fk(n.isLollipopChart, Oe, K, We);
    const ft = a(Z, "left"), Ke = n.runtime.yAxis.type === "date" ? d(c(r[V][n.runtime.originalXAxis.dataKey])) : r[V][n.runtime.originalXAxis.dataKey];
    let Ze = n.runtime.yAxis.label ? `${n.runtime.yAxis.label}: ${Ke}` : Ke, ut = n.runtime.xAxis.label ? `${n.runtime.xAxis.label}: ${ft}` : ft;
    const ht = `<div>
          ${Ze}<br />
          ${ut}
            </div>`;
    return /* @__PURE__ */ i.createElement(rt, { key: `deviation-bar-${n.orientation}-${N}-${V}` }, /* @__PURE__ */ i.createElement(
      "foreignObject",
      {
        ref: (Pt) => {
          M.current[V] = Pt;
        },
        x: oe,
        y: Ie,
        width: xe,
        height: ee,
        "data-tooltip-html": ht,
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.runtime.uniqueId}`,
        tabIndex: -1
      },
      /* @__PURE__ */ i.createElement("div", { style: { width: xe, height: ee, border: `${U}px solid #333`, backgroundColor: Ge[ze], ...at } })
    ), n.yAxis.displayNumbersOnBar && /* @__PURE__ */ i.createElement(Et, { verticalAnchor: "middle", x: ie, y: we, ...Fe[ze] }, a(ae[N], "left")), n.isLollipopChart && n.lollipopShape === "circle" && /* @__PURE__ */ i.createElement("circle", { cx: Pe, cy: He, r: K / 2, fill: Ge[ze], style: { filter: "unset", opacity: 1 } }), n.isLollipopChart && n.lollipopShape === "square" && /* @__PURE__ */ i.createElement("rect", { x: Ye, y: Je, width: K, height: K, fill: Ge[ze], style: { opacity: 1, filter: "unset" } }));
  }), me.showLabel && /* @__PURE__ */ i.createElement(Et, { fontWeight: "bold", dx: me.padding, verticalAnchor: "middle", x: me.x, y: me.y }, me.text), B && /* @__PURE__ */ i.createElement(an, { from: { x: j, y: 0 }, to: { x: j, y: e }, stroke: "#333", strokeWidth: 2 })), /* @__PURE__ */ i.createElement("foreignObject", { y: e / 2, ref: H }));
}
function fk(e, t, r, n) {
  return e ? {
    right: {
      textAnchor: "start",
      dx: r + 6,
      fill: "#000000"
    },
    left: {
      textAnchor: "end",
      dx: -r,
      fill: "#000000"
    }
  } : {
    right: {
      textAnchor: t ? "end" : "start",
      dx: t ? -6 : 6,
      fill: t ? n : "#000000"
    },
    left: {
      textAnchor: t ? "start" : "end",
      dx: t ? 6 : -6,
      fill: t ? n : "#000000"
    }
  };
}
const hk = ({ xScale: e, yScale: t, height: r, width: n, handleTooltipMouseOver: a, handleTooltipMouseOff: o }) => {
  var k;
  const { transformedData: f, rawData: s, config: c, seriesHighlight: d } = se.useContext(wt), { xAxis: g, yAxis: y, legend: v, runtime: E } = c;
  return f && /* @__PURE__ */ i.createElement(zr, { component: "ForecastingChart" }, /* @__PURE__ */ i.createElement(rt, { className: "forecasting-items", key: "forecasting-items-wrapper", left: Number(y.size) }, (k = E.forecastingSeriesKeys) == null ? void 0 : k.map((M, T) => !M || !M.stages ? !1 : M.stages.map((m, R) => {
    var I;
    const { behavior: O } = v, _ = s.filter((B) => B[M.stageColumn] === m.key);
    let N = O === "highlight" && d.length > 0 && d.indexOf(m.key) === -1, D = O === "highlight" || d.length === 0 || d.indexOf(m.key) !== -1;
    return /* @__PURE__ */ i.createElement(rt, { className: `forecasting-areas-combo-${T}`, key: `forecasting-areas--stage-${m.key.replaceAll(" ", "-")}-${T}` }, (I = M.confidenceIntervals) == null ? void 0 : I.map((B, U) => {
      const q = Uu[m.color] || fr[m.color] || !1, K = () => D && q[2] ? q[2] : "transparent", j = () => D && q[1] ? q[1] : "transparent";
      if (!(B.high === "" || B.low === ""))
        return /* @__PURE__ */ i.createElement(rt, { key: `forecasting-areas--stage-${m.key.replaceAll(" ", "-")}--group-${R}-${U}` }, /* @__PURE__ */ i.createElement(
          G0,
          {
            curve: Iu,
            data: _,
            fill: K(),
            opacity: N ? 0.1 : 0.5,
            x: (te) => e(Date.parse(te[g.dataKey])),
            y0: (te) => t(te[B.low]),
            y1: (te) => t(te[B.high])
          }
        ), U === 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(fa, { data: _, x: (te) => Number(e(Date.parse(te[g.dataKey]))), y: (te) => Number(t(te[B.high])), curve: Iu, stroke: j(), strokeWidth: 1, strokeOpacity: 1 }), /* @__PURE__ */ i.createElement(fa, { data: _, x: (te) => Number(e(Date.parse(te[g.dataKey]))), y: (te) => Number(t(te[B.low])), curve: Iu, stroke: j(), strokeWidth: 1, strokeOpacity: 1 })));
    }));
  })), /* @__PURE__ */ i.createElement(rt, { key: "tooltip-hover-section" }, /* @__PURE__ */ i.createElement(yr, { key: "bars", width: Number(n), height: Number(r), fill: "transparent", fillOpacity: 0.05, onMouseMove: (M) => a(M, f), onMouseOut: o }))));
};
function Wu(e = "") {
  return typeof e == "number" ? !Number.isNaN(e) : typeof e == "string" ? e !== null && e !== "" && /\d+\.?\d*/.test(e) : !1;
}
function Oc(e, t) {
  const r = e.series.every(({ type: v }) => v === "Bar"), n = e.series.every(({ type: v }) => ["Line", "dashed-sm", "dashed-md", "dashed-lg"].includes(v)), a = (v) => (E) => v.reduce((k, M) => isNaN(Number(E[M])) ? k : k + Number(E[M]), 0), o = () => {
    let v = Math.max(...t.map((E) => Math.max(...e.runtime.seriesKeys.map((k) => Wu(E[k]) ? Number(c(E[k])) : 0))));
    if ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && r) && e.visualizationSubType === "stacked") {
      const E = t.map(a(e.runtime.seriesKeys)).filter((k) => !isNaN(k));
      v = Math.max(...E);
    }
    if (e.visualizationSubType === "stacked" && e.visualizationType === "Area Chart") {
      const E = t.map(a(e.runtime.seriesKeys));
      v = Math.max(...E);
    }
    if ((e.visualizationType === "Bar" || e.visualizationType === "Deviation Bar") && e.series && e.series.dataKey && (v = Math.max(...t.map((E) => Wu(E[e.series.dataKey]) ? Number(c(E[e.series.dataKey])) : 0))), e.visualizationType === "Combo" && e.visualizationSubType === "stacked" && !r && e.runtime.barSeriesKeys && e.runtime.lineSeriesKeys) {
      const E = t.map(a(e.runtime.barSeriesKeys)), k = Math.max(...t.map((T) => Math.max(...e.runtime.lineSeriesKeys.map((m) => Number(c(T[m])))))), M = Math.max(...E);
      v = Math.max(M, k);
    }
    return v;
  }, f = () => {
    const v = Math.min(...t.map((E) => Math.min(...e.runtime.seriesKeys.map((k) => Wu(E[k]) ? Number(c(E[k])) : 1 / 0))));
    return String(v);
  }, s = () => e.runtime.seriesKeys ? e.runtime.seriesKeys.some((v) => t.some((E) => E[v] >= 0)) : !1, c = (v) => v === null || v === "" ? "" : typeof v == "string" ? v.replace(/[,$]/g, "") : v, d = Number(o()), g = Number(f()), y = s();
  return { minValue: g, maxValue: d, existPositiveValue: y, isAllLine: n };
}
function gh({ config: e, yMax: t = 0, data: r = [], updateConfig: n }) {
  var v, E, k, M;
  const a = e.visualizationType === "Combo" && e.orientation === "vertical", o = e.series && e.series.filter((T) => T.axis === "Right").map((T) => T.dataKey);
  let { minValue: f } = Oc(e, r);
  const s = (T) => {
    if (!T)
      return [0];
    let m = [];
    return T.map((R, O) => m = [...m, ...r.map((_) => Number(_[R]))]), m;
  };
  let c = Math.max.apply(null, s(o));
  e.yAxis.rightMax > c && (c = e.yAxis.rightMax), e.yAxis.rightMin < f && (f = e.yAxis.rightMin);
  const d = ((E = (v = e.runtime) == null ? void 0 : v.barSeriesKeys) == null ? void 0 : E.length) > 0, g = ((M = (k = e.runtime) == null ? void 0 : k.lineSeriesKeys) == null ? void 0 : M.length) > 0;
  return (d || g) && f > 0 && (f = 0), { yScaleRight: Xn({
    domain: [f, c],
    range: [t, 0]
  }), hasRightAxis: a };
}
const pk = (e) => {
  const { preliminaryData: t, data: r, stroke: n, strokeWidth: a, handleLineType: o, lineType: f, seriesKey: s } = e, c = t.filter((v) => v.seriesKey && v.column && v.value && v.type && v.style), d = (v) => c.find((E) => E.seriesKey === s && v[E.column] === E.value && E.type === "effect" && E.style !== "Open Circles");
  let g = [];
  const y = (v) => ({
    stroke: n,
    strokeWidth: a,
    strokeDasharray: v
  });
  return r.forEach((v, E) => {
    let k = d(v), M = y(o(k ? k.style : f));
    g.push(M), k && E > 0 && (g[E - 1] = y(o(k.style)));
  }), g;
}, mk = (e, t, r) => {
  const n = e.filter((o) => o.style === "Open Circles" && o.type === "effect").map((o) => ({ column: o.column, value: o.value, seriesKey: o.seriesKey }));
  let a = [];
  return t.forEach((o) => {
    n.some((f) => o[f.column] === f.value && f.seriesKey === r) && a.push(o);
  }), a;
}, Xd = (e) => {
  var O, _, N, D, I, B;
  const { config: t, d: r, displayArea: n, seriesKey: a, tooltipData: o, xScale: f, yScale: s, colorScale: c, parseDate: d, yScaleRight: g, data: y, circleData: v, dataIndex: E, mode: k } = e, { lineDatapointStyle: M } = t, T = (O = t == null ? void 0 : t.series.filter((U) => U.dataKey === a)) == null ? void 0 : O[0], m = (U, q, K, j, te) => {
    const me = K.runtime.seriesLabels || [];
    let H;
    return U ? H = q(me[j] || te) : H = "transparent", K.lineDatapointColor === "Lighter than Line" && H !== "transparent" && H && (H = bs(H).brighten(1)), H;
  }, R = (U) => (t.xAxis.type === "categorical" ? f(U) : f(d(U))) + (f.bandwidth ? f.bandwidth() / 2 : 0);
  if (k === "ALWAYS_SHOW_POINTS") {
    if (M === "hidden")
      return /* @__PURE__ */ i.createElement(i.Fragment, null);
    if (M === "always show")
      return (v == null ? void 0 : v.some((q) => q[t.xAxis.dataKey] === r[t.xAxis.dataKey] && q[a] === r[a])) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(
        "circle",
        {
          cx: R(r[t.xAxis.dataKey]),
          cy: T.axis === "Right" ? g(r[T.dataKey]) : s(r[T.dataKey]),
          r: 4.5,
          opacity: r[a] ? 1 : 0,
          fillOpacity: 1,
          fill: m(n, c, t, a, a),
          style: { filter: "unset", opacity: 1 }
        }
      );
  }
  if (k === "HOVER_POINTS" && M === "hover") {
    if (!o || !a || !o.data)
      return;
    let U = (N = (_ = o == null ? void 0 : o.data) == null ? void 0 : _[0]) == null ? void 0 : N[1];
    if (!U)
      return;
    let q, K = o.data.filter((me) => me[0] === a), j = (D = K == null ? void 0 : K[0]) == null ? void 0 : D[0], te = (I = K == null ? void 0 : K[0]) == null ? void 0 : I[2];
    return j ? (o == null || o.data.indexOf(j), q = (B = y == null ? void 0 : y.find((me) => me[t == null ? void 0 : t.xAxis.dataKey] === U)) == null ? void 0 : B[a], o == null ? void 0 : o.data.map((me, H) => (t.runtime.seriesLabelsAll.indexOf(U), isNaN(q) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : (v == null ? void 0 : v.some((ue) => ue[t.xAxis.dataKey] === U)) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(
      "circle",
      {
        cx: R(U),
        cy: te === "right" ? g(q) : s(q),
        r: 4.5,
        opacity: 1,
        fillOpacity: 1,
        fill: m(n, c, t, j, a),
        style: { filter: "unset", opacity: 1 },
        key: `line-chart-circle--${JSON.stringify(me)}--${H}`
      }
    )))) : void 0;
  }
  return k === "ISOLATED_POINTS" && k && ((q, K) => {
    const j = y[q], te = y[q - 1], me = y[q + 1];
    if (q === 0 && !me[K] || q === y.length - 1 && !te[K] || q !== 0 && j[K] && !te[K] && !me[K])
      return !0;
  })(E, a) ? /* @__PURE__ */ i.createElement("circle", { cx: R(r[t.xAxis.dataKey]), cy: T.axis === "Right" ? g(r[T.dataKey]) : s(r[T.dataKey]), r: 5.3, strokeWidth: 2, stroke: c(t.runtime.seriesLabels[a]), fill: c(t.runtime.seriesLabels[a]) }) : null;
}, sm = (e) => {
  const {
    getXAxisData: t,
    getYAxisData: r,
    handleTooltipClick: n,
    handleTooltipMouseOff: a,
    handleTooltipMouseOver: o,
    tooltipData: f,
    xMax: s,
    xScale: c,
    yMax: d,
    yScale: g
  } = e, {
    colorScale: y,
    config: v,
    formatNumber: E,
    handleLineType: k,
    isNumber: M,
    parseDate: T,
    seriesHighlight: m,
    tableData: R,
    transformedData: O,
    updateConfig: _,
    rawData: N
  } = se.useContext(wt), { yScaleRight: D } = gh({ config: v, yMax: d, data: O, updateConfig: _ });
  if (!o)
    return;
  const { lineDatapointStyle: I, showLineSeriesLabels: B, legend: U } = v;
  return /* @__PURE__ */ i.createElement(zr, { component: "LineChart" }, /* @__PURE__ */ i.createElement(rt, { left: v.runtime.yAxis.size }, " ", (v.runtime.lineSeriesKeys || v.runtime.seriesKeys).map((q, K) => {
    var ae;
    let j = v.series.filter((V) => V.dataKey === q)[0].type;
    const te = v.series.filter((V) => V.dataKey === q), me = te[0].axis ? te[0].axis : "left";
    let H = U.behavior === "highlight" || m.length === 0 || m.indexOf(q) !== -1;
    const le = mk(v.preliminaryData, N, q);
    let ue = pk({ preliminaryData: v.preliminaryData, data: R, stroke: y(v.runtime.seriesLabels[q]), strokeWidth: te[0].weight || 2, handleLineType: k, lineType: j, seriesKey: q }), fe = (V) => c(t(V)) + (c.bandwidth ? c.bandwidth() / 2 : 0);
    return /* @__PURE__ */ i.createElement(
      rt,
      {
        key: `series-${q}`,
        opacity: U.behavior === "highlight" && m.length > 0 && m.indexOf(q) === -1 ? 0.5 : 1,
        display: U.behavior === "highlight" || m.length === 0 && !U.dynamicLegend || m.indexOf(q) !== -1 ? "block" : "none"
      },
      O.map((V, Z) => {
        const ee = v.series.find(({ dataKey: ze }) => ze === q), { axis: Ae } = ee, xe = Object.keys(v.runtime.seriesLabels).length > 1, De = Ae === "Right" ? "rightLabel" : "label";
        let oe = v.runtime.yAxis[De];
        return xe || (oe = v.isLegendValue ? v.runtime.seriesLabels[q] : oe), V[q] !== void 0 && V[q] !== "" && V[q] !== null && M(V[q]) && /* @__PURE__ */ i.createElement(rt, { key: `series-${q}-point-${Z}`, className: "checkwidth" }, /* @__PURE__ */ i.createElement(yr, { key: "bars", width: Number(s), height: Number(d), fill: "transparent", fillOpacity: 0.05, onMouseMove: (ze) => o(ze, R), onMouseOut: a, onClick: (ze) => n(ze, O) }), /* @__PURE__ */ i.createElement(Et, { display: v.labels ? "block" : "none", x: fe(V), y: me === "Right" ? D(r(V, q)) : g(r(V, q)), fill: "#000", textAnchor: "middle" }, E(V[q], "left")), (I === "hidden" || I === "always show") && /* @__PURE__ */ i.createElement(
          Xd,
          {
            mode: "ALWAYS_SHOW_POINTS",
            dataIndex: Z,
            circleData: le,
            data: O,
            d: V,
            config: v,
            seriesKey: q,
            displayArea: H,
            tooltipData: f,
            xScale: c,
            yScale: g,
            colorScale: y,
            parseDate: T,
            yScaleRight: D,
            seriesAxis: me,
            key: `line-circle--${Z}`
          }
        ), /* @__PURE__ */ i.createElement(
          Xd,
          {
            mode: "ISOLATED_POINTS",
            dataIndex: Z,
            circleData: le,
            data: O,
            d: V,
            config: v,
            seriesKey: q,
            displayArea: H,
            tooltipData: f,
            xScale: c,
            yScale: g,
            colorScale: y,
            parseDate: T,
            yScaleRight: D,
            seriesAxis: me,
            key: `isolated-circle-${Z}`
          }
        ));
      }),
      /* @__PURE__ */ i.createElement(i.Fragment, null, I === "hover" && /* @__PURE__ */ i.createElement(
        Xd,
        {
          dataIndex: 0,
          mode: "HOVER_POINTS",
          circleData: le,
          data: O,
          config: v,
          seriesKey: q,
          displayArea: H,
          tooltipData: f,
          xScale: c,
          yScale: g,
          colorScale: y,
          parseDate: T,
          yScaleRight: D,
          seriesAxis: me
        }
      )),
      (ae = v == null ? void 0 : v.preliminaryData) != null && ae.some((V) => V.value && V.column) ? /* @__PURE__ */ i.createElement(
        Ng,
        {
          curve: xs[te[0].lineType],
          segments: (v.xAxis.type === "date-time" ? O.sort((V, Z) => {
            let ee = t(V), Ae = t(Z);
            return ee < Ae ? -1 : Ae < ee ? 1 : 0;
          }) : O).map((V) => [V]),
          segmentation: "x",
          x: (V) => fe(V),
          y: (V) => me === "Right" ? D(r(V, q)) : g(Number(r(V, q))),
          styles: ue,
          defined: (V, Z) => V[q] !== "" && V[q] !== null && V[q] !== void 0
        }
      ) : /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
        fa,
        {
          curve: xs[te[0].lineType],
          data: v.xAxis.type === "date-time" ? O.sort((V, Z) => {
            let ee = t(V), Ae = t(Z);
            return ee < Ae ? -1 : Ae < ee ? 1 : 0;
          }) : O,
          x: (V) => fe(V),
          y: (V) => me === "Right" ? D(r(V, q)) : g(Number(r(V, q))),
          stroke: y(v.runtime.seriesLabels[q]),
          strokeWidth: te[0].weight || 2,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: j ? k(j) : 0,
          defined: (V, Z) => V[q] !== "" && V[q] !== null && V[q] !== void 0
        }
      )),
      le.map((V, Z) => /* @__PURE__ */ i.createElement("circle", { key: Z, cx: fe(V), cy: me === "Right" ? D(r(V, q)) : g(Number(r(V, q))), r: 6, strokeWidth: te[0].weight || 2, stroke: y ? y(v.runtime.seriesLabels[q]) : "#000", fill: "#fff" })),
      v.animate && /* @__PURE__ */ i.createElement(
        fa,
        {
          className: "animation",
          curve: xs[te[0].lineType],
          data: O,
          x: (V) => fe(V),
          y: (V) => me === "Right" ? D(r(V, q)) : g(Number(r(V, q))),
          stroke: "#fff",
          strokeWidth: 3,
          strokeOpacity: 1,
          shapeRendering: "geometricPrecision",
          strokeDasharray: j ? k(j) : 0,
          defined: (V, Z) => V[q] !== "" && V[q] !== null && V[q] !== void 0
        }
      ),
      B && (v.runtime.lineSeriesKeys || v.runtime.seriesKeys).map((V) => {
        let Z;
        for (let ee = O.length - 1; ee >= 0; ee--)
          if (O[ee][V]) {
            Z = O[ee];
            break;
          }
        return Z ? /* @__PURE__ */ i.createElement("text", { x: fe(Z) + 5, y: g(r(Z, V)), alignmentBaseline: "middle", fill: v.colorMatchLineSeriesLabels && y ? y(v.runtime.seriesLabels[V] || V) : "black" }, v.runtime.seriesLabels[V] || V) : /* @__PURE__ */ i.createElement(i.Fragment, null);
      })
    );
  }), v.legend.dynamicLegend && m.length === 0 && /* @__PURE__ */ i.createElement(Et, { x: s / 2, y: d / 2, fill: "black", textAnchor: "middle", color: "black" }, v.legend.dynamicLegendChartMessage)));
}, gk = (e) => {
  const { rawData: t, updateConfig: r } = se.useContext(wt), { xScale: n, yScale: a, config: o, height: f, width: s, handleTooltipMouseOff: c, handleTooltipMouseOver: d } = e, { forestPlot: g } = o, y = o.xAxis.tickWidthMax + 10, [v, E] = se.useState(!1);
  se.useEffect(() => {
    try {
      const _ = ["estimateField", "lower", "upper", "estimateRadius"], N = o, D = 10;
      for (let I = 0; I < D; I++)
        _.forEach((B) => {
          var U;
          o.forestPlot[B] && o.forestPlot[B] !== ((U = N.columns[o.forestPlot[`additionalColumn${I}`]]) == null ? void 0 : U.name) && (delete N.columns[`additionalColumn${I}`], N.columns[o.forestPlot[B]] = {}, N.columns[o.forestPlot[B]].dataKey = N.forestPlot[B], N.columns[o.forestPlot[B]].name = N.forestPlot[B], N.columns[o.forestPlot[B]].dataTable = !0, N.columns[o.forestPlot[B]].tooltips = !0, N.columns[o.forestPlot[B]].label = N.forestPlot[B]);
        });
      o.forestPlot.radius.scalingColumn && (N.columns[o.forestPlot.radius.scalingColumn] = {}, N.columns[o.forestPlot.radius.scalingColumn].dataKey = N.forestPlot.radius.scalingColumn, N.columns[o.forestPlot.radius.scalingColumn].name = N.forestPlot.radius.scalingColumn, N.columns[o.forestPlot.radius.scalingColumn].label = N.forestPlot.radius.scalingColumn, N.columns[o.forestPlot.radius.scalingColumn].dataTable = !0, N.columns[o.forestPlot.radius.scalingColumn].tooltips = !0), N.table.showVertical && (N.table.indexLabel = o.xAxis.dataKey), r(N);
    } catch (_) {
      console.log(_.message);
    }
  }, []), se.useEffect(() => {
    !v && o.forestPlot.type === "Logarithmic" && (r({
      ...o,
      dataFormat: {
        ...o.dataFormat,
        roundTo: 2
      }
    }), E(!0));
  }, [o.forestPlot.type]);
  const k = o.data.find((_) => _[o.xAxis.dataKey] === o.forestPlot.pooledResult.column), M = k ? [
    { x: n(k[o.forestPlot.lower]), y: f - Number(o.forestPlot.rowHeight) },
    { x: n(k[o.forestPlot.estimateField]), y: f - g.pooledResult.diamondHeight - Number(o.forestPlot.rowHeight) },
    { x: n(k[o.forestPlot.upper]), y: f - Number(o.forestPlot.rowHeight) },
    { x: n(k[o.forestPlot.estimateField]), y: f + g.pooledResult.diamondHeight - Number(o.forestPlot.rowHeight) },
    { x: n(k[o.forestPlot.lower]), y: f - Number(o.forestPlot.rowHeight) }
  ] : [], T = o.forestPlot.rowHeight, m = [
    { x: 0, y: T },
    { x: s, y: T }
  ], R = [
    { x: 0, y: f },
    { x: s, y: f }
  ], O = Object.entries(o.columns).map((_) => _[1]).filter((_) => _.forestPlot === !0);
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(rt, { width: s }, g.title && /* @__PURE__ */ i.createElement(Et, { className: "forest-plot--title", x: g.type === "Linear" ? n(0) : n(1), y: 0, textAnchor: "middle", verticalAnchor: "start", fontSize: Ai(o.fontSize), fill: "black" }, g.title), g.lineOfNoEffect.show && g.type === "Linear" && /* @__PURE__ */ i.createElement(an, { from: { x: n(0), y: 0 + T }, to: { x: n(0), y: f }, className: "forestplot__line-of-no-effect", stroke: g.regression.baseLineColor || "black" }), g.lineOfNoEffect.show && g.type === "Logarithmic" && /* @__PURE__ */ i.createElement(an, { from: { x: n(1), y: 0 + T }, to: { x: n(1), y: f }, className: "forestplot__line-of-no-effect", stroke: g.regression.baseLineColor || "black" }), t.map((_, N) => {
    const D = Xn({
      domain: t.map((j) => j[g.radius.scalingColumn]),
      range: [g.radius.min, g.radius.max]
    }), I = g.radius.scalingColumn !== "" ? D(t[N][g.radius.scalingColumn]) : 4, B = g.colors.shape ? g.colors.shape : "black", U = g.colors.line ? g.colors.line : "black", q = 4;
    return _[o.xAxis.dataKey] === g.pooledResult.column ? /* @__PURE__ */ i.createElement(fa, { data: M, x: (j) => j.x, y: (j) => j.y - Ai(o.fontSize) / 2, stroke: "black", strokeWidth: 2, fill: "black", curve: lf }) : /* @__PURE__ */ i.createElement(rt, null, /* @__PURE__ */ i.createElement(
      "path",
      {
        stroke: U,
        strokeWidth: 1,
        className: "lower-ci",
        d: `
                    M${n(_[g.lower])} ${a(N) - Number(q)}
                    L${n(_[g.lower])} ${a(N) + Number(q)}
                `
      }
    ), /* @__PURE__ */ i.createElement(
      "path",
      {
        stroke: U,
        strokeWidth: 1,
        className: "upper-ci",
        d: `
                    M${n(_[g.upper])} ${a(N) - Number(q)}
                    L${n(_[g.upper])} ${a(N) + Number(q)}
                `
      }
    ), /* @__PURE__ */ i.createElement("line", { stroke: U, className: `line-${_[o.yAxis.dataKey]}`, key: N, x1: n(_[g.lower]), x2: n(_[g.upper]), y1: a(N), y2: a(N) }), g.shape === "circle" && /* @__PURE__ */ i.createElement(_y, { className: "forest-plot--circle", cx: n(Number(_[g.estimateField])), cy: a(N), r: g.radius.scalingColumn !== "" ? D(t[N][g.radius.scalingColumn]) : 4, fill: B, style: { opacity: 1, filter: "unset" } }), g.shape === "square" && /* @__PURE__ */ i.createElement("rect", { className: "forest-plot--square", x: n(Number(_[g.estimateField])), y: a(N) - I / 2, width: I, height: I, fill: B, style: { opacity: 1, filter: "unset" } }), g.shape === "text" && /* @__PURE__ */ i.createElement(Et, { className: "forest-plot--text", x: n(Number(_[g.estimateField])), y: a(N), textAnchor: "middle", verticalAnchor: "middle", fontSize: Ai(o.fontSize), fill: B }, _[g.estimateField]));
  }), M && g.regression.showDiamond && /* @__PURE__ */ i.createElement(fa, { data: M, x: (_) => _.x, y: (_) => _.y, stroke: "black", strokeWidth: 2, fill: g.regression.baseLineColor, curve: lf }), g.regression.description && /* @__PURE__ */ i.createElement(Et, { x: 0 - Number(o.xAxis.size), width: s, y: f - o.forestPlot.rowHeight - Number(g.rowHeight) / 3, verticalAnchor: "start", textAnchor: "start", style: { fontWeight: "bold", fontSize: 12 } }, g.regression.description), /* @__PURE__ */ i.createElement(yr, { key: "forest-plot-tooltip-area", className: "forest-plot-tooltip-area", width: s, height: f, fill: "transparent", fillOpacity: 0.5, onMouseMove: (_) => d(_, t), onMouseOut: c })), /* @__PURE__ */ i.createElement(an, { from: m[0], to: m[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__top-line" }), /* @__PURE__ */ i.createElement(an, { from: R[0], to: R[1], style: { stroke: "black", strokeWidth: 2 }, className: "forestplot__bottom-line" }), O.map((_) => t.map((N, D) => /* @__PURE__ */ i.createElement(Et, { className: `${N[_.name]}`, x: _.forestPlotAlignRight ? s : _.forestPlotStartingPoint, y: a(D), textAnchor: _.forestPlotAlignRight ? "end" : "start", verticalAnchor: "middle", fontSize: Ai(o.fontSize), fill: "black" }, N[_.name]))), !g.hideDateCategoryCol && t.map((_, N) => /* @__PURE__ */ i.createElement(Et, { className: `${_[o.xAxis.dataKey]}`, x: 0, y: a(N), textAnchor: "start", verticalAnchor: "middle", fontSize: Ai(o.fontSize), fill: "black" }, _[o.xAxis.dataKey])), !g.hideDateCategoryCol && o.xAxis.dataKey && /* @__PURE__ */ i.createElement(Et, { className: o.xAxis.dataKey, x: 0, y: 0, textAnchor: "start", verticalAnchor: "start", fontSize: Ai(o.fontSize), fill: "black" }, o.xAxis.dataKey), O.map((_) => /* @__PURE__ */ i.createElement(Et, { className: `${_.label}`, x: _.forestPlotAlignRight ? s : _.forestPlotStartingPoint, y: 0, textAnchor: _.forestPlotAlignRight ? "end" : "start", verticalAnchor: "start", fontSize: Ai(o.fontSize), fill: "black" }, _.label)), g.leftLabel && /* @__PURE__ */ i.createElement(Et, { className: "forest-plot__left-label", x: g.type === "Linear" ? n(0) - 25 : n(1) - 25, y: f + y, textAnchor: "end", verticalAnchor: "start" }, g.leftLabel), g.rightLabel && /* @__PURE__ */ i.createElement(Et, { className: "forest-plot__right-label", x: g.type === "Linear" ? n(0) + 25 : n(1) + 25, y: f + y, textAnchor: "start", verticalAnchor: "start" }, g.rightLabel));
}, yk = ({ width: e, height: t, originalWidth: r }) => {
  var O;
  const { config: n, colorScale: a, transformedData: o, formatNumber: f, seriesHighlight: s, getTextWidth: c } = se.useContext(wt);
  if (!n || ((O = n == null ? void 0 : n.series) == null ? void 0 : O.length) < 2)
    return;
  const d = n.barHasBorder === "true" ? 1 : 0, g = e / 2, y = { small: 16, medium: 18, large: 20 }, v = 1.02, E = {
    parentKey: n.dataDescription.seriesKey,
    dataKey: n.series[0].dataKey,
    dataKeyLabel: n.runtime.seriesLabels[n.series[0].dataKey] || n.series[0].dataKey,
    color: a(n.runtime.seriesLabels[n.series[0].dataKey]),
    max: Math.max.apply(
      Math,
      o.map((_) => _[n.series[0].dataKey])
    ),
    labelColor: ""
  }, k = {
    parentKey: n.dataDescription.seriesKey,
    dataKey: n.series[1].dataKey,
    dataKeyLabel: n.runtime.seriesLabels[n.series[1].dataKey] || n.series[1].dataKey,
    color: a(n.runtime.seriesLabels[n.series[1].dataKey]),
    max: Math.max.apply(
      Math,
      o.map((_) => _[n.series[1].dataKey])
    ),
    labelColor: ""
  }, M = Xn({
    domain: [0, Math.max(E.max * v, k.max * 1.1)],
    range: [0, g]
  });
  E.labelColor = E.color ? Zo("#000", E.color) : "#000", k.labelColor = k.color ? Zo("#000", k.color) : "#000";
  const T = n.yAxis.label ? `${n.yAxis.label}: ` : "", m = (_) => `<p>
				${n.dataDescription.seriesKey}: ${E.dataKeyLabel}<br/>
				${n.xAxis.dataKey}: ${_[n.xAxis.dataKey]}<br/>
				${T}${f(_[E.dataKey], "left")}
			</p>`, R = (_) => `<p>
				${n.dataDescription.seriesKey}: ${k.dataKeyLabel}<br/>
				${n.xAxis.dataKey}: ${_[n.xAxis.dataKey]}<br/>
				${T}${f(_[k.dataKey], "left")}
			</p>`;
  return e > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `
				#cdc-visualization__paired-bar-chart,
				 #cdc-visualization__paired-bar-chart > .visx-group {
					transform-origin: center
				}
				`), /* @__PURE__ */ i.createElement("svg", { id: "cdc-visualization__paired-bar-chart", width: r, height: t, viewBox: `0 0 ${e + Number(n.runtime.yAxis.size)} ${t}`, role: "img", tabIndex: 0 }, /* @__PURE__ */ i.createElement("title", null, `Paired bar chart graphic with the title ${n.title ? n.title : "No Title Found"}`), /* @__PURE__ */ i.createElement(rt, { top: 0, left: Number(n.xAxis.size) }, o.filter((_) => n.series[0].dataKey === E.dataKey).map((_, N) => {
    let D = n.legend.behavior === "highlight" && s.length > 0 && s.indexOf(n.series[0].dataKey) === -1, I = n.legend.behavior === "highlight" || s.length === 0 || s.indexOf(n.series[0].dataKey) !== -1, B = M(_[n.series[0].dataKey]), U = Number(n.barHeight) ? Number(n.barHeight) : 25, q = 0;
    q = N !== 0 ? (Number(n.barSpace) + U + d) * N : q;
    const K = (Number(n.barSpace) + U + d) * o.length;
    n.heights.horizontal = K;
    const te = c(f(_[E.dataKey], "left"), `normal ${y[n.fontSize]}px sans-serif`) < B - 5;
    return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(rt, { key: `group-${E.dataKey}-${_[n.xAxis.dataKey]}`, className: "horizontal" }, /* @__PURE__ */ i.createElement(
      yr,
      {
        id: `bar-${E.dataKey}-${_[n.dataDescription.xKey]}`,
        className: "bar group-1",
        key: `bar-${E.dataKey}-${_[n.dataDescription.xKey]}`,
        x: g - B,
        y: q,
        width: M(_[n.series[0].dataKey]),
        height: U,
        fill: E.color,
        "data-tooltip-html": m(_),
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.runtime.uniqueId}`,
        stroke: "#333",
        strokeWidth: d,
        opacity: D ? 0.5 : 1,
        display: I ? "block" : "none",
        tabIndex: -1
      }
    ), n.yAxis.displayNumbersOnBar && I && /* @__PURE__ */ i.createElement(Et, { textAnchor: te ? "start" : "end", dx: te ? 5 : -5, verticalAnchor: "middle", x: g - B, y: q + n.barHeight / 2, fill: te ? E.labelColor : "#000" }, f(_[E.dataKey], "left"))));
  }), o.filter((_) => n.series[1].dataKey === k.dataKey).map((_, N) => {
    let D = M(_[n.series[1].dataKey]), I = n.legend.behavior === "highlight" && s.length > 0 && s.indexOf(n.series[1].dataKey) === -1, B = n.legend.behavior === "highlight" || s.length === 0 || s.indexOf(n.series[1].dataKey) !== -1, U = n.barHeight ? Number(n.barHeight) : 25, q = 0;
    q = N !== 0 ? (Number(n.barSpace) + U + d) * N : q;
    const K = (Number(n.barSpace) + U + d) * o.length;
    n.heights.horizontal = K;
    const te = c(f(_[k.dataKey], "left"), `normal ${y[n.fontSize]}px sans-serif`) < D - 5;
    return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `
                      .bar-${k.dataKey}-${_[n.xAxis.dataKey]} {
                          transform-origin: ${g}px ${q}px
                      }
							      `), /* @__PURE__ */ i.createElement(rt, { key: `group-${k.dataKey}-${_[n.dataDescription.xKey]}`, className: "horizontal" }, /* @__PURE__ */ i.createElement(
      yr,
      {
        id: `bar-${k.dataKey}-${_[n.dataDescription.xKey]}`,
        className: "bar group-2",
        key: `bar-${k.dataKey}-${_[n.dataDescription.xKey]}`,
        x: g,
        y: q,
        width: M(_[n.series[1].dataKey]),
        height: U,
        fill: k.color,
        "data-tooltip-html": R(_),
        "data-tooltip-id": `cdc-open-viz-tooltip-${n.runtime.uniqueId}`,
        strokeWidth: d,
        stroke: "#333",
        opacity: I ? 0.5 : 1,
        display: B ? "block" : "none",
        tabIndex: -1
      }
    ), n.yAxis.displayNumbersOnBar && B && /* @__PURE__ */ i.createElement(Et, { textAnchor: te ? "end" : "start", dx: te ? -5 : 5, verticalAnchor: "middle", x: g + D, y: q + n.barHeight / 2, fill: te ? k.labelColor : "#000" }, f(_[k.dataKey], "left"))));
  }))));
}, cy = ({ config: e, minValue: t, maxValue: r, existPositiveValue: n, data: a, isAllLine: o }) => {
  let f = 0, s = 0, c = 0, d = 0;
  if (!a)
    return { min: f, max: s };
  const { visualizationType: g, series: y } = e, { max: v, min: E } = e.runtime.yAxis, k = n ? v >= r : v >= 0, M = e.useLogScale ? E >= 0 : E <= 0 && t >= 0 || E <= t && t < 0;
  f = E && M ? E : t, s = v && k ? v : Number.MIN_VALUE;
  const { lower: T, upper: m } = (e == null ? void 0 : e.confidenceKeys) || {};
  if (T && m && e.visualizationType === "Bar") {
    const R = f < 0 ? 1.1 : 0;
    s = Math.max(r, Math.max(...a.flatMap((O) => [O[m], O[T]])) * 1.15), f = Math.min(t, Math.min(...a.flatMap((O) => [O[m], O[T]])) * 1.15) * R;
  }
  if (e.series.filter((R) => (R == null ? void 0 : R.type) === "Forecasting")) {
    const {
      runtime: { forecastingSeriesKeys: R }
    } = e;
    if ((R == null ? void 0 : R.length) > 0) {
      let O = [];
      R.forEach((I) => {
        var B;
        (B = I.confidenceIntervals) == null || B.map((U) => {
          O.push(U.high), O.push(U.low);
        });
      });
      const _ = a.map((I) => O.map((B) => I[B])), N = Math.max.apply(
        null,
        _.map((I) => I[0])
      ), D = Math.min.apply(
        null,
        _.map((I) => I[1])
      );
      N > s && (s = N), D < f && (f = D);
    }
  }
  if (g === "Combo")
    try {
      if (!a)
        throw new Error("COVE: missing data while getting min/max for combo chart.");
      let R = y.filter((N) => N.axis === "Left"), O = y.filter((N) => N.axis === "Right");
      const _ = (N, D, I, B = "left") => {
        let U = 0;
        return (D.map((K) => K.dataKey) || []).forEach((K) => {
          let j = D.find((H) => H.dataKey === K), te = N.map((H) => H[K]), me = Math.max.apply(null, te);
          e.visualizationSubType === "stacked" && B === "left" && j.type === "Bar" && (U += me), me > I && (I = me), I < U && (I = U);
        }), I;
      };
      c = _(a, R, c, "left"), d = _(a, O, d, "right"), c < v && (c = v);
    } catch (R) {
      console.error(R.message);
    }
  if ((g === "Bar" || g === "Combo" && !o) && f > 0 && (f = 0), (e.visualizationType === "Bar" || e.visualizationType === "Combo" && !o) && f < 0 && (f = f * 1.1), e.visualizationType === "Combo" && o && ((E == null || E === "") && f > 0 && (f = 0), E)) {
    const R = e.useLogScale ? E >= 0 && E < t : E < t;
    f = E && R ? E : t;
  }
  if (e.visualizationType === "Deviation Bar" && f > 0) {
    const R = Number(E) < Math.min(t, Number(e.xAxis.target));
    f = E && R ? E : 0;
  }
  if (e.visualizationType === "Line") {
    const R = e.useLogScale ? E >= 0 && E < t : E < t;
    f = E && R ? E : t;
  }
  if (s === Number.MIN_VALUE && (s = n ? r : 0), e.runtime.yAxis.paddingPercent) {
    let R = (s - f) * e.runtime.yAxis.paddingPercent;
    f -= R, s += R;
  }
  if (e.isLollipopChart && e.yAxis.displayNumbersOnBar) {
    const R = a.map((_) => _[e.series[0].dataKey]), O = Math.max(...R).toString().length;
    switch (!0) {
      case (O > 8 && O <= 12):
        s = s * 1.3;
        break;
      case (O > 4 && O <= 7):
        s = s * 1.1;
        break;
    }
  }
  return e.yAxis.enablePadding && (f < 0 ? (s *= 1 + e.yAxis.scalePadding * 2 / 100, f *= 1 + e.yAxis.scalePadding * 2 / 100) : s *= 1 + e.yAxis.scalePadding / 100), { min: f, max: s, leftMax: c, rightMax: d };
}, Kr = {
  TIME: "time",
  LOG: "log",
  POINT: "point",
  LINEAR: "linear",
  BAND: "band"
}, vk = (e) => {
  let { xAxisDataMapped: t, xMax: r, yMax: n, min: a, max: o, config: f, data: s } = e;
  const { rawData: c, dimensions: d } = se.useContext(wt), [g, y] = d, v = f.runtime.barSeriesKeys || f.runtime.seriesKeys, E = f.runtime.xAxis.type, k = f.orientation === "horizontal", M = (U) => U[f.runtime.originalXAxis.dataKey], T = s.map((U) => M(U)), { visualizationType: m } = f;
  let R = null, O = null, _ = null, N = null, D = null, I = null, B = null;
  if (k && (R = xk({ min: a * 1.03, ...e }), R.type = f.useLogScale ? Kr.LOG : Kr.LINEAR, O = Sk(E, t), O.rangeRound([0, n]), D = um(v, [0, n])), k || (B = um(T, [0, r], 0.5), R = qd(t, [0, r], 1 - f.barThickness), O = bk(e), D = qd(v, [0, R.bandwidth()], 0)), f.xAxis.type === "date-time") {
    let U = Math.min(...t), q = Math.max(...t);
    U -= (f.xAxis.padding ? f.xAxis.padding * 0.01 : 0) * (q - U), q += (f.xAxis.padding ? f.xAxis.padding * 0.01 : 0) * (q - U), R = bv({
      domain: [U, q],
      range: [0, r]
    }), B = R, R.type = Kr.TIME, D = qd(v, [0, f.barThickness * r], 0);
  }
  if (f.visualizationType === "Deviation Bar") {
    const U = f.isLollipopChart ? 1.05 : 1.03;
    O = Jd({
      domain: t,
      range: [0, n]
    }), R = Xn({
      domain: [a * U, Math.max(Number(f.xAxis.target), o)],
      range: [0, r],
      round: !0,
      nice: !0
    }), R.type = Kr.LINEAR;
  }
  if (f.visualizationType === "Scatter Plot" && f.xAxis.type === "continuous" && (R = Xn({
    domain: [0, Math.max.apply(null, R.domain())],
    range: [0, r]
  }), R.type = Kr.LINEAR), m === "Box Plot") {
    const U = [];
    if (f.boxplot.plots.map((te) => te.columnOutliers.map((me) => U.push(me))) && !f.boxplot.hideOutliers) {
      let te = Math.min(...U), me = Math.max(...U);
      te < a && (a = te), me > o && (o = me);
    }
    let K = Math.min(...f.boxplot.plots.map((te) => te.columnLowerBounds)), j = Math.max(...f.boxplot.plots.map((te) => te.columnUpperBounds));
    K < a && (a = K), j > o && (o = j), O = Xn({
      range: [n, 0],
      round: !0,
      domain: [a, o]
    }), R = Jd({
      range: [0, r],
      round: !0,
      domain: f.boxplot.categories,
      padding: 0.4
    }), R.type = Kr.BAND;
  }
  if (m === "Paired Bar") {
    let q = Math.max.apply(
      Math,
      s.map((j) => {
        var te;
        return j[(te = f.series[0]) == null ? void 0 : te.dataKey];
      })
    ), K = Math.max.apply(
      Math,
      s.map((j) => {
        var te;
        return j[(te = f.series[1]) == null ? void 0 : te.dataKey];
      })
    );
    N = Xn({
      domain: [0, Math.max(q, K) * 1.02],
      range: [r / 2, 0]
    }), _ = Xn({
      domain: N.domain(),
      range: [r / 2, r],
      nice: !0
    });
  }
  if (m === "Forest Plot") {
    const U = () => f.forestPlot.regression.showDiamond || f.forestPlot.regression.description ? [0 + f.forestPlot.rowHeight * 2, n - f.forestPlot.rowHeight] : [0 + f.forestPlot.rowHeight * 2, n];
    O = Xn({
      domain: [0, c.length],
      range: U()
    });
    const q = 5, K = Number(f.forestPlot.leftWidthOffset) / 100 * r, j = Number(f.forestPlot.rightWidthOffset) / 100 * r, te = Number(f.forestPlot.rightWidthOffsetMobile) / 100 * r, me = Number(f.forestPlot.leftWidthOffsetMobile) / 100 * r;
    if (g > 480) {
      if (f.forestPlot.type === "Linear" && (R = Xn({
        domain: [Math.min(...s.map((H) => parseFloat(H[f.forestPlot.lower]))) - q, Math.max(...s.map((H) => parseFloat(H[f.forestPlot.upper]))) + q],
        range: [K, d[0] - j]
      }), R.type = Kr.LINEAR), f.forestPlot.type === "Logarithmic") {
        let H = Math.max(...s.map((ue) => parseFloat(ue[f.forestPlot.upper]))), le = Math.min(...s.map((ue) => parseFloat(ue[f.forestPlot.lower])));
        R = Yu({
          domain: [le, H],
          range: [K, r - j],
          nice: !0
        }), R.type = Kr.LOG;
      }
    } else if (f.forestPlot.type === "Linear" && (R = Xn({
      domain: [Math.min(...s.map((H) => parseFloat(H[f.forestPlot.lower]))) - q, Math.max(...s.map((H) => parseFloat(H[f.forestPlot.upper]))) + q],
      range: [me, r - te],
      type: Kr.LINEAR
    })), f.forestPlot.type === "Logarithmic") {
      let H = Math.max(...s.map((ue) => parseFloat(ue[f.forestPlot.upper]))), le = Math.min(...s.map((ue) => parseFloat(ue[f.forestPlot.lower])));
      R = Yu({
        domain: [le, H],
        range: [K, r - j],
        nice: !0,
        base: H > 1 ? 10 : 2,
        round: !1,
        type: Kr.LOG
      });
    }
  }
  return { xScale: R, yScale: O, seriesScale: D, g1xScale: N, g2xScale: _, xScaleNoPadding: I, xScaleBrush: B };
}, xk = ({ min: e, max: t, xMax: r, config: n }) => (e = n.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e, (n.useLogScale ? Yu : Xn)({
  domain: [e, t],
  range: [0, r],
  nice: n.useLogScale,
  zero: n.useLogScale
})), bk = ({ min: e, max: t, yMax: r, config: n, leftMax: a }) => {
  e = n.useLogScale && e >= 0 && e < 1 ? e + 0.1 : e;
  const o = n.useLogScale ? Yu : Xn;
  return n.visualizationType === "Combo" && (t = a), o({
    domain: [e, t],
    range: [r, 0],
    nice: n.useLogScale,
    zero: n.useLogScale
  });
}, Sk = (e, t) => e === "date" ? Xn({
  domain: [Math.min(...t), Math.max(...t)]
}) : Yo({ domain: t, padding: 0.5 }), um = (e, t, r = 0) => Yo({
  domain: e,
  range: t,
  padding: r
}), qd = (e, t, r = 0) => Jd({
  domain: e,
  range: t,
  padding: r
});
function Ek(e) {
  return { hasTopAxis: e.visualizationType === "Bar" || e.visualizationType === "Combo" || e.visualizationType === "Line" };
}
const Ds = () => {
  const { config: e } = se.useContext(wt), { visualizationType: t, series: r, orientation: n, visualizationSubType: a } = e, o = [
    "Area Chart",
    "Bar",
    "Box Plot",
    "Combo",
    "Deviation Bar",
    "Forecasting",
    // 'Forest Plot',
    "Line",
    "Paired Bar",
    "Pie",
    "Scatter Plot",
    "Spark Line",
    "Sankey"
  ], f = ["theme-blue", "theme-purple", "theme-brown", "theme-teal", "theme-pink", "theme-orange", "theme-slate", "theme-indigo", "theme-cyan", "theme-green", "theme-amber"], s = () => !["Forest Plot", "Sankey"].includes(t), c = () => !["Spark Line"].includes(t), d = () => !["Spark Line"].includes(t), g = () => !["Area Chart", "Box Plot", "Pie", "Scatter Plot", "Forest Plot", "Spark Line", "Sankey"].includes(t), y = () => !["Area Chart", "Scatter Plot", "Box Plot", "Forest Plot", "Spark Line", "Sankey"].includes(t), v = () => {
    switch (t) {
      case "Box Plot":
        return !1;
      case "Forest Plot":
        return !1;
      case "Spark Line":
        return !1;
      case "Sankey":
        return !1;
      default:
        return !0;
    }
  }, E = () => t === "Forest Plot" ? !1 : e.orientation === "horizontal" && (e.yAxis.labelPlacement === "Below Bar" || e.yAxis.labelPlacement === "On Date/Category Axis" || e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar"), k = () => {
    switch (t) {
      case "Area Chart":
        return !0;
      case "Combo":
        return !0;
      case "Line":
        return !0;
      case "Bar":
        return !0;
      case "Scatter Plot":
        return !0;
      default:
        return !1;
    }
  }, M = () => {
    if ((t === "Bar" || "Combo") && a === "regular")
      return !0;
  }, T = () => ["Line", "Bar", "Area Chart", "Combo"].includes(t) && n === "vertical", m = () => ["Box Plot", "Scatter Plot", "Pie"].includes(t) ? !1 : r == null ? void 0 : r.some((Pe) => Pe.type === "Bar" || Pe.type === "Paired Bar" || Pe.type === "Deviation Bar"), R = () => {
    switch (t) {
      case "Sankey":
        return !1;
      case "Forest Plot":
        return !1;
      case "Box Plot":
        return !1;
      case "Pie":
        return !1;
      case "Spark Line":
        return !1;
      default:
        return !0;
    }
  }, O = !["Box Plot", "Forest Plot", "Spark Line"].includes(t);
  return {
    enabledChartTypes: o,
    headerColors: f,
    visCanAnimate: y,
    visHasAnchors: k,
    visHasBarBorders: m,
    visHasDataCutoff: R,
    visHasLabelOnData: g,
    visHasDataSuppression: M,
    visHasLegend: v,
    visHasLegendAxisAlign: () => t === "Bar" && a === "stacked" && e.legend.behavior === "isolate",
    visHasBrushChart: T,
    visHasNumbersOnBars: E,
    visSupportsBarSpace: () => ["Forest Plot"].includes(t) ? !1 : n === "horizontal" || t === "Paired Bar",
    visSupportsBarThickness: () => !["Forest Plot"].includes(t),
    visSupportsChartHeight: () => !["Spark Line"].includes(t),
    visSupportsDateCategoryAxis: s,
    visSupportsDateCategoryAxisLabel: () => !["Forest Plot", "Spark Line"].includes(t),
    visSupportsDateCategoryAxisLine: () => !["Forest Plot", "Spark Line"].includes(t),
    visSupportsDateCategoryAxisTicks: () => !["Forest Plot", "Spark Line"].includes(t),
    visSupportsDateCategoryHeight: () => !["Spark Line", "Sankey"].includes(t),
    visSupportsDateCategoryNumTicks: () => !["Spark Line"].includes(t),
    visSupportsDateCategoryTickRotation: () => !["Spark Line"].includes(t),
    visSupportsDateCategoryAxisPadding: () => e.xAxis.type === "date-time",
    visSupportsFilters: () => !["Forest Plot", "Sankey"].includes(t),
    visSupportsFootnotes: d,
    visSupportsLeftValueAxis: () => !["Spark Line", "Sankey"].includes(t),
    visSupportsNonSequentialPallete: () => !["Paired Bar", "Deviation Bar", "Forest Plot", "Forecasting", "Sankey"].includes(t),
    visSupportsPreliminaryData: () => {
      const we = e == null ? void 0 : e.series.some((Pe) => ["Line", "dashed-sm", "dashed-md", "dashed-lg"].includes(Pe == null ? void 0 : Pe.type));
      return !!(t === "Line" || t === "Combo" && we);
    },
    visSupportsRankByValue: () => !["Spark Line"].includes(t),
    visSupportsRegions: () => !["Forest Plot", "Pie", "Paired Bar", "Spark Line", "Sankey"].includes(t),
    visSupportsResponsiveTicks: () => !["Spark Line"].includes(t),
    visSupportsReverseColorPalette: () => !["Forest Plot", "Paired Bar", "Deviation Bar", "Sankey"].includes(t),
    visSupportsSequentialPallete: () => !["Paired Bar", "Deviation Bar", "Forest Plot", "Forecasting", "Sankey"].includes(t),
    visSupportsSuperTitle: c,
    visSupportsTooltipLines: () => !!["Combo", "Forecasting", "Area Chart", "Line", "Bar"].includes(t),
    visHasSelectableLegendValues: O,
    visSupportsTooltipOpacity: () => !["Spark Line", "Sankey"].includes(t),
    visSupportsValueAxisGridLines: () => {
      const we = ["Forest Plot"];
      return !(n === "horizontal" || we.includes(t));
    },
    visSupportsValueAxisLabels: () => !["Forest Plot"].includes(t),
    visSupportsValueAxisLine: () => !["Forest Plot"].includes(t),
    visSupportsValueAxisTicks: () => !["Forest Plot"].includes(t),
    visSupportsReactTooltip: () => {
      if (["Deviation Bar", "Box Plot", "Scatter Plot", "Paired Bar"].includes(t) || t === "Bar" && e.tooltips.singleSeries)
        return !0;
    },
    visSupportsValueAxisMax: () => !["Forest Plot"].includes(t),
    visSupportsValueAxisMin: () => !["Forest Plot"].includes(t)
  };
};
var yh = {};
const kk = /* @__PURE__ */ Wf(OS), wk = /* @__PURE__ */ Wf(HS);
var vh = {};
vh.__esModule = !0;
vh.default = Tk;
var Fu = se;
function Tk(e) {
  var t = (0, Fu.useState)(e), r = t[0], n = t[1], a = (0, Fu.useRef)(null), o = (0, Fu.useCallback)(function(f, s) {
    a.current = s || null, n(f);
  }, [n]);
  return (0, Fu.useLayoutEffect)(function() {
    a.current && (a.current(r), a.current = null);
  }, [r]), [r, o];
}
var xh = {}, bh = {};
bh.__esModule = !0;
bh.default = Ck;
function Ck(e, t, r) {
  return Math.min(Math.max(e, t), r);
}
var Sh = {};
Sh.__esModule = !0;
Sh.default = Rk;
function Ak(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = Pk(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pk(e, t) {
  if (e) {
    if (typeof e == "string")
      return cm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return cm(e, t);
  }
}
function cm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Rk(e, t) {
  for (var r = e, n = 1 / 0, a = Ak(t), o; !(o = a()).done; ) {
    var f = o.value, s = Math.sqrt(Math.pow(f.x - e.x, 2) + Math.pow(f.y - e.y, 2));
    s < n && (n = s, r = {
      x: f.x,
      y: f.y
    });
  }
  return r;
}
xh.__esModule = !0;
xh.default = Dk;
var dm = dy(bh), Lk = dy(Sh);
function dy(e) {
  return e && e.__esModule ? e : { default: e };
}
function Dk(e, t, r) {
  var n, a, o, f;
  return r === void 0 && (r = {}), t.length > 0 ? (0, Lk.default)(e, t) : {
    x: (0, dm.default)(e.x, (n = r.xMin) != null ? n : -1 / 0, (a = r.xMax) != null ? a : 1 / 0),
    y: (0, dm.default)(e.y, (o = r.yMin) != null ? o : -1 / 0, (f = r.yMax) != null ? f : 1 / 0)
  };
}
var Eh = {};
Eh.__esModule = !0;
Eh.default = _k;
var Ok = se;
function Mk(e, t, r) {
  if (r === void 0 && (r = 1), !e)
    return [];
  for (var n = [], a = e.getTotalLength(), o = 0; o <= a; o += r) {
    var f = e.getPointAtLength(o), s = f.matrixTransform(t);
    n.push(s);
  }
  return n;
}
function _k(e) {
  var t = (0, Ok.useMemo)(function() {
    if (!e)
      return [];
    var r = e.getCTM() || new DOMMatrix();
    return Mk(e, r);
  }, [e == null ? void 0 : e.getTotalLength()]);
  return t;
}
yh.__esModule = !0;
yh.default = zk;
var Mi = se, Uo = kk, fm = wk, Nk = kh(vh), hm = kh(xh), Fk = kh(Eh);
function kh(e) {
  return e && e.__esModule ? e : { default: e };
}
function qr() {
  return qr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, qr.apply(this, arguments);
}
function zk(e) {
  var t = e === void 0 ? {} : e, r = t.resetOnStart, n = r === void 0 ? !1 : r, a = t.snapToPointer, o = a === void 0 ? !0 : a, f = t.onDragEnd, s = t.onDragMove, c = t.onDragStart, d = t.x, g = t.y, y = t.dx, v = t.dy, E = t.isDragging, k = t.restrict, M = k === void 0 ? {} : k, T = t.restrictToPath, m = (0, Mi.useRef)({
    x: d,
    y: g,
    dx: y,
    dy: v
  }), R = (0, Nk.default)({
    x: d,
    y: g,
    dx: y ?? 0,
    dy: v ?? 0,
    isDragging: !1
  }), O = R[0], _ = R[1], N = (0, Mi.useState)(new Uo.Point({
    x: 0,
    y: 0
  })), D = N[0], I = N[1];
  (0, Mi.useEffect)(function() {
    (m.current.x !== d || m.current.y !== g || m.current.dx !== y || m.current.dy !== v) && (m.current = {
      x: d,
      y: g,
      dx: y,
      dy: v
    }, _(function(j) {
      return qr({}, j, {
        x: d,
        y: g,
        dx: y ?? 0,
        dy: v ?? 0
      });
    }));
  }), (0, Mi.useEffect)(function() {
    E !== void 0 && O.isDragging !== E && _(function(j) {
      return qr({}, j, {
        isDragging: E
      });
    });
  }, [O.isDragging, E, _]);
  var B = (0, Fk.default)(T), U = (0, Mi.useCallback)(function(j) {
    j.persist(), _(function(te) {
      var me = te.x, H = me === void 0 ? 0 : me, le = te.y, ue = le === void 0 ? 0 : le, fe = te.dx, ae = te.dy, V = new Uo.Point({
        x: (H || 0) + fe,
        y: (ue || 0) + ae
      }), Z = (0, fm.localPoint)(j) || new Uo.Point({
        x: 0,
        y: 0
      }), ee = o ? Z : V, Ae = (0, hm.default)(ee, B, M);
      return I((0, Uo.subtractPoints)(V, Z)), {
        isDragging: !0,
        dx: n ? 0 : te.dx,
        dy: n ? 0 : te.dy,
        x: n ? Ae.x : Ae.x - te.dx,
        y: n ? Ae.y : Ae.y - te.dy
      };
    }, c && function(te) {
      c(qr({}, te, {
        event: j
      }));
    });
  }, [c, n, M, B, _, o]), q = (0, Mi.useCallback)(function(j) {
    j.persist(), _(function(te) {
      if (!te.isDragging)
        return te;
      var me = te.x, H = me === void 0 ? 0 : me, le = te.y, ue = le === void 0 ? 0 : le, fe = (0, fm.localPoint)(j) || new Uo.Point({
        x: 0,
        y: 0
      }), ae = o ? fe : (0, Uo.sumPoints)(fe, D), V = (0, hm.default)(ae, B, M);
      return qr({}, te, {
        dx: V.x - H,
        dy: V.y - ue
      });
    }, s && function(te) {
      te.isDragging && s(qr({}, te, {
        event: j
      }));
    });
  }, [_, s, o, D, B, M]), K = (0, Mi.useCallback)(function(j) {
    j.persist(), _(function(te) {
      return qr({}, te, {
        isDragging: !1
      });
    }, f && function(te) {
      f(qr({}, te, {
        event: j
      }));
    });
  }, [f, _]);
  return qr({}, O, {
    dragEnd: K,
    dragMove: q,
    dragStart: U
  });
}
var Mc = fy, os = wh(Sm), Gd = wh(se), $k = wh(yh);
function wh(e) {
  return e && e.__esModule ? e : { default: e };
}
function fy(e) {
  var t = e.captureDragArea, r = t === void 0 ? !0 : t, n = e.snapToPointer, a = n === void 0 ? !0 : n, o = e.children, f = e.dx, s = e.dy, c = e.height, d = e.onDragEnd, g = e.onDragMove, y = e.onDragStart, v = e.resetOnStart, E = e.width, k = e.x, M = e.y, T = e.isDragging, m = e.restrict, R = e.restrictToPath, O = (0, $k.default)({
    resetOnStart: v,
    snapToPointer: a,
    onDragEnd: d,
    onDragMove: g,
    onDragStart: y,
    x: k,
    y: M,
    dx: f,
    dy: s,
    isDragging: T,
    restrict: m,
    restrictToPath: R
  });
  return /* @__PURE__ */ Gd.default.createElement(Gd.default.Fragment, null, O.isDragging && r && /* @__PURE__ */ Gd.default.createElement("rect", {
    width: E,
    height: c,
    onPointerDown: O.dragStart,
    onPointerMove: O.dragMove,
    onPointerUp: O.dragEnd,
    fill: "transparent"
  }), o(O));
}
fy.propTypes = {
  children: os.default.func.isRequired,
  width: os.default.number.isRequired,
  height: os.default.number.isRequired,
  captureDragArea: os.default.bool,
  isDragging: os.default.bool
};
function bc(e, t) {
  if ("invert" in e && typeof e.invert < "u")
    return e.invert(t).valueOf();
  var r = e.range(), n = r[0], a = r[1], o = 0, f = "step" in e && typeof e.step < "u" ? e.step() : 1, s = f * (a - n) / Math.abs(a - n);
  if (s > 0)
    for (; t > n + s * (o + 1); )
      o += 1;
  else
    for (; t < n + s * (o + 1); )
      o += 1;
  return o;
}
function pm(e, t, r, n) {
  var a, o = bc(e, t + (t < r ? -n : n)), f = bc(e, r + (r < t ? -n : n)), s = Math.min(o, f), c = Math.max(o, f);
  if ("invert" in e && typeof e.invert < "u")
    a = {
      start: s,
      end: c
    };
  else {
    for (var d = [], g = e.domain(), y = s; y <= c; y += 1)
      d.push(g[y]);
    a = {
      values: d
    };
  }
  return a;
}
function Th(e) {
  if (typeof window < "u" && window.TouchEvent && e instanceof TouchEvent)
    return {
      pageX: e.touches[0].pageX,
      pageY: e.touches[0].pageY
    };
  var t = e;
  return {
    pageX: t.pageX,
    pageY: t.pageY
  };
}
function Tr() {
  return Tr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Tr.apply(this, arguments);
}
function Bk(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Of(e, t);
}
function Of(e, t) {
  return Of = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Of(e, t);
}
var hy = /* @__PURE__ */ function(e) {
  Bk(t, e);
  function t() {
    for (var n, a = arguments.length, o = new Array(a), f = 0; f < a; f++)
      o[f] = arguments[f];
    return n = e.call.apply(e, [this].concat(o)) || this, n.handleDragStart = function(s) {
      var c = n.props, d = c.onBrushHandleChange, g = c.type, y = c.onBrushStart;
      d && d(g, Th(s.event)), y && y(s);
    }, n.handleDragMove = function(s) {
      var c = n.props, d = c.updateBrush, g = c.type, y = c.isControlled;
      !s.isDragging || y || d(function(v) {
        var E = v.start, k = v.end, M = 0, T = Math.max(E.x, k.x), m = Math.min(E.x, k.x), R = Math.max(E.y, k.y), O = Math.min(E.y, k.y);
        switch (g) {
          case "right":
            return M = T + s.dx, Tr({}, v, {
              activeHandle: g,
              extent: Tr({}, v.extent, {
                x0: Math.max(Math.min(M, E.x), v.bounds.x0),
                x1: Math.min(Math.max(M, E.x), v.bounds.x1)
              })
            });
          case "left":
            return M = m + s.dx, Tr({}, v, {
              activeHandle: g,
              extent: Tr({}, v.extent, {
                x0: Math.min(M, k.x),
                x1: Math.max(M, k.x)
              })
            });
          case "bottom":
            return M = R + s.dy, Tr({}, v, {
              activeHandle: g,
              extent: Tr({}, v.extent, {
                y0: Math.min(M, E.y),
                y1: Math.max(M, E.y)
              })
            });
          case "top":
            return M = O + s.dy, Tr({}, v, {
              activeHandle: g,
              extent: Tr({}, v.extent, {
                y0: Math.min(M, k.y),
                y1: Math.max(M, k.y)
              })
            });
          default:
            return v;
        }
      });
    }, n.handleDragEnd = function() {
      var s = n.props, c = s.updateBrush, d = s.onBrushEnd, g = s.onBrushHandleChange, y = s.isControlled;
      y || c(function(v) {
        var E = v.start, k = v.end, M = v.extent;
        E.x = Math.min(M.x0, M.x1), E.y = Math.min(M.y0, M.y0), k.x = Math.max(M.x0, M.x1), k.y = Math.max(M.y0, M.y1);
        var T = Tr({}, v, {
          start: E,
          end: k,
          activeHandle: null,
          isBrushing: !1,
          extent: {
            x0: Math.min(E.x, k.x),
            x1: Math.max(E.x, k.x),
            y0: Math.min(E.y, k.y),
            y1: Math.max(E.y, k.y)
          }
        });
        return d && d(T), T;
      }), g && g();
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var a = this, o = this.props, f = o.stageWidth, s = o.stageHeight, c = o.brush, d = o.type, g = o.handle, y = o.isControlled, v = o.isDragInProgress, E = o.renderBrushHandle, k = g.x, M = g.y, T = g.width, m = g.height, R = d === "right" || d === "left" ? "ew-resize" : "ns-resize";
    return /* @__PURE__ */ i.createElement(Mc, {
      width: f,
      height: s,
      onDragStart: this.handleDragStart,
      onDragMove: this.handleDragMove,
      onDragEnd: this.handleDragEnd,
      resetOnStart: !0,
      isDragging: y ? v : void 0
    }, function(O) {
      var _ = O.dragStart, N = O.dragEnd, D = O.dragMove, I = O.isDragging;
      return /* @__PURE__ */ i.createElement("g", null, I && /* @__PURE__ */ i.createElement("rect", {
        fill: "transparent",
        width: f,
        height: s,
        style: {
          cursor: R
        },
        onPointerMove: D,
        onPointerUp: y ? void 0 : N,
        onPointerLeave: y ? void 0 : N
      }), !E && /* @__PURE__ */ i.createElement("rect", {
        x: k,
        y: M,
        width: T,
        height: m,
        fill: "transparent",
        className: "visx-brush-handle-" + d,
        onPointerDown: _,
        onPointerMove: D,
        onPointerUp: y ? void 0 : N,
        style: {
          cursor: R,
          pointerEvents: c.activeHandle || c.isBrushing ? "none" : "all"
        }
      }), E && /* @__PURE__ */ i.createElement("g", {
        onPointerDown: _,
        onPointerMove: D,
        onPointerUp: y ? void 0 : N
      }, E(Tr({}, a.props.handle, {
        height: s,
        className: "visx-brush-handle-" + d,
        isBrushActive: c.extent.x0 !== -1 && c.extent.x1 !== -1
      }))));
    });
  }, t;
}(i.Component);
hy.propTypes = {
  stageWidth: he.number.isRequired,
  stageHeight: he.number.isRequired,
  updateBrush: he.func.isRequired,
  onBrushStart: he.func,
  onBrushEnd: he.func,
  handle: he.shape({
    x: he.number.isRequired,
    y: he.number.isRequired,
    width: he.number.isRequired,
    height: he.number.isRequired
  }).isRequired,
  isControlled: he.bool,
  isDragInProgress: he.bool,
  onBrushHandleChange: he.func,
  renderBrushHandle: he.func
};
function gr() {
  return gr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, gr.apply(this, arguments);
}
function Ik(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Mf(e, t);
}
function Mf(e, t) {
  return Mf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Mf(e, t);
}
var Ch = /* @__PURE__ */ function(e) {
  Ik(t, e);
  function t() {
    for (var n, a = arguments.length, o = new Array(a), f = 0; f < a; f++)
      o[f] = arguments[f];
    return n = e.call.apply(e, [this].concat(o)) || this, n.cornerDragMove = function(s) {
      var c = n.props, d = c.updateBrush, g = c.type;
      s.isDragging && d(function(y) {
        var v = y.start, E = y.end, k = Math.max(v.x, E.x), M = Math.min(v.x, E.x), T = Math.max(v.y, E.y), m = Math.min(v.y, E.y), R = 0, O = 0;
        switch (g) {
          case "topRight":
            return R = k + s.dx, O = m + s.dy, gr({}, y, {
              activeHandle: g,
              extent: gr({}, y.extent, {
                x0: Math.max(Math.min(R, v.x), y.bounds.x0),
                x1: Math.min(Math.max(R, v.x), y.bounds.x1),
                y0: Math.max(Math.min(O, E.y), y.bounds.y0),
                y1: Math.min(Math.max(O, E.y), y.bounds.y1)
              })
            });
          case "topLeft":
            return R = M + s.dx, O = m + s.dy, gr({}, y, {
              activeHandle: g,
              extent: gr({}, y.extent, {
                x0: Math.max(Math.min(R, E.x), y.bounds.x0),
                x1: Math.min(Math.max(R, E.x), y.bounds.x1),
                y0: Math.max(Math.min(O, E.y), y.bounds.y0),
                y1: Math.min(Math.max(O, E.y), y.bounds.y1)
              })
            });
          case "bottomLeft":
            return R = M + s.dx, O = T + s.dy, gr({}, y, {
              activeHandle: g,
              extent: gr({}, y.extent, {
                x0: Math.max(Math.min(R, E.x), y.bounds.x0),
                x1: Math.min(Math.max(R, E.x), y.bounds.x1),
                y0: Math.max(Math.min(O, v.y), y.bounds.y0),
                y1: Math.min(Math.max(O, v.y), y.bounds.y1)
              })
            });
          case "bottomRight":
            return R = k + s.dx, O = T + s.dy, gr({}, y, {
              activeHandle: g,
              extent: gr({}, y.extent, {
                x0: Math.max(Math.min(R, v.x), y.bounds.x0),
                x1: Math.min(Math.max(R, v.x), y.bounds.x1),
                y0: Math.max(Math.min(O, v.y), y.bounds.y0),
                y1: Math.min(Math.max(O, v.y), y.bounds.y1)
              })
            });
          default:
            return y;
        }
      });
    }, n.cornerDragEnd = function() {
      var s = n.props, c = s.updateBrush, d = s.onBrushEnd;
      c(function(g) {
        var y = g.start, v = g.end, E = g.extent;
        y.x = Math.min(E.x0, E.x1), y.y = Math.min(E.y0, E.y0), v.x = Math.max(E.x0, E.x1), v.y = Math.max(E.y0, E.y1);
        var k = gr({}, g, {
          start: y,
          end: v,
          activeHandle: null,
          domain: {
            x0: Math.min(y.x, v.x),
            x1: Math.max(y.x, v.x),
            y0: Math.min(y.y, v.y),
            y1: Math.max(y.y, v.y)
          }
        });
        return d && d(k), k;
      });
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var a = this.props, o = a.type, f = a.brush, s = a.stageWidth, c = a.stageHeight, d = a.style, g = a.corner, y = (d == null ? void 0 : d.cursor) || (o === "topLeft" || o === "bottomRight" ? "nwse-resize" : "nesw-resize"), v = f.activeHandle || f.isBrushing ? "none" : "all";
    return /* @__PURE__ */ i.createElement(Mc, {
      width: s,
      height: c,
      onDragMove: this.cornerDragMove,
      onDragEnd: this.cornerDragEnd,
      resetOnStart: !0
    }, function(E) {
      var k = E.dragMove, M = E.dragEnd, T = E.dragStart, m = E.isDragging;
      return /* @__PURE__ */ i.createElement("g", null, m && /* @__PURE__ */ i.createElement("rect", {
        fill: "transparent",
        width: s,
        height: c,
        style: {
          cursor: y
        },
        onPointerMove: k,
        onPointerUp: M
      }), /* @__PURE__ */ i.createElement("rect", gr({
        fill: "transparent",
        onPointerDown: T,
        onPointerMove: k,
        onPointerUp: M,
        className: "visx-brush-corner-" + o,
        style: gr({
          cursor: y,
          pointerEvents: v
        }, d)
      }, g)));
    });
  }, t;
}(i.Component);
Ch.propTypes = {
  stageWidth: he.number.isRequired,
  stageHeight: he.number.isRequired,
  updateBrush: he.func.isRequired,
  onBrushEnd: he.func,
  corner: he.shape({
    x: he.number.isRequired,
    y: he.number.isRequired,
    width: he.number.isRequired,
    height: he.number.isRequired
  }).isRequired
};
Ch.defaultProps = {
  style: {}
};
function Ba() {
  return Ba = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ba.apply(this, arguments);
}
function Hk(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, _f(e, t);
}
function _f(e, t) {
  return _f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, _f(e, t);
}
var Wk = {
  cursor: "move"
}, Ah = /* @__PURE__ */ function(e) {
  Hk(t, e);
  function t() {
    for (var n, a = arguments.length, o = new Array(a), f = 0; f < a; f++)
      o[f] = arguments[f];
    return n = e.call.apply(e, [this].concat(o)) || this, n.selectionDragStart = function(s) {
      var c = n.props, d = c.onMoveSelectionChange, g = c.onBrushStart;
      d && d("move", Th(s.event)), g && g(s);
    }, n.selectionDragMove = function(s) {
      var c = n.props, d = c.updateBrush, g = c.isControlled;
      g || d(function(y) {
        var v = y.start, E = v.x, k = v.y, M = y.end, T = M.x, m = M.y, R = s.dx > 0 ? Math.min(s.dx, y.bounds.x1 - T) : Math.max(s.dx, y.bounds.x0 - E), O = s.dy > 0 ? Math.min(s.dy, y.bounds.y1 - m) : Math.max(s.dy, y.bounds.y0 - k);
        return Ba({}, y, {
          isBrushing: !0,
          extent: Ba({}, y.extent, {
            x0: E + R,
            x1: T + R,
            y0: k + O,
            y1: m + O
          })
        });
      });
    }, n.selectionDragEnd = function() {
      var s = n.props, c = s.updateBrush, d = s.onBrushEnd, g = s.onMoveSelectionChange, y = s.isControlled;
      y || c(function(v) {
        var E = Ba({}, v, {
          isBrushing: !1,
          start: Ba({}, v.start, {
            x: Math.min(v.extent.x0, v.extent.x1),
            y: Math.min(v.extent.y0, v.extent.y1)
          }),
          end: Ba({}, v.end, {
            x: Math.max(v.extent.x0, v.extent.x1),
            y: Math.max(v.extent.y0, v.extent.y1)
          })
        });
        return d && d(E), E;
      }), g && g();
    }, n;
  }
  var r = t.prototype;
  return r.render = function() {
    var a = this.props, o = a.width, f = a.height, s = a.stageWidth, c = a.stageHeight, d = a.brush, g = a.disableDraggingSelection, y = a.onMouseLeave, v = a.onMouseMove, E = a.onMouseUp, k = a.onClick, M = a.selectedBoxStyle, T = a.isControlled, m = a.isDragInProgress;
    return /* @__PURE__ */ i.createElement(Mc, {
      width: o,
      height: f,
      resetOnStart: !0,
      onDragStart: this.selectionDragStart,
      onDragMove: this.selectionDragMove,
      onDragEnd: this.selectionDragEnd,
      isDragging: T ? m : void 0
    }, function(R) {
      var O = R.isDragging, _ = R.dragStart, N = R.dragEnd, D = R.dragMove;
      return /* @__PURE__ */ i.createElement("g", null, O && /* @__PURE__ */ i.createElement("rect", {
        width: s,
        height: c,
        fill: "transparent",
        onPointerUp: T ? void 0 : N,
        onPointerMove: D,
        onPointerLeave: T ? void 0 : N,
        style: Wk
      }), /* @__PURE__ */ i.createElement("rect", Ba({
        x: Math.min(d.extent.x0, d.extent.x1),
        y: Math.min(d.extent.y0, d.extent.y1),
        width: o,
        height: f,
        className: "visx-brush-selection",
        onPointerDown: g ? void 0 : _,
        onPointerLeave: function(B) {
          y && y(B);
        },
        onPointerMove: function(B) {
          D(B), v && v(B);
        },
        onPointerUp: function(B) {
          T || N(B), E && E(B);
        },
        onClick: function(B) {
          k && k(B);
        },
        style: {
          pointerEvents: d.isBrushing || d.activeHandle ? "none" : "all",
          cursor: g ? void 0 : "move"
        }
      }, M)));
    });
  }, t;
}(i.Component);
Ah.propTypes = {
  width: he.number.isRequired,
  height: he.number.isRequired,
  stageWidth: he.number.isRequired,
  stageHeight: he.number.isRequired,
  updateBrush: he.func.isRequired,
  onMoveSelectionChange: he.func,
  onBrushStart: he.func,
  onBrushEnd: he.func,
  disableDraggingSelection: he.bool.isRequired,
  onMouseLeave: he.func,
  onMouseMove: he.func,
  onMouseUp: he.func,
  onClick: he.func,
  isControlled: he.bool,
  isDragInProgress: he.bool
};
Ah.defaultProps = {
  onMouseLeave: null,
  onMouseUp: null,
  onMouseMove: null,
  onClick: null
};
function Nf() {
  return Nf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Nf.apply(this, arguments);
}
function Ff(e) {
  return /* @__PURE__ */ i.createElement(yr, Nf({
    className: "visx-brush-overlay",
    fill: "transparent",
    x: 0,
    y: 0
  }, e));
}
Ff.propTypes = {
  width: he.number.isRequired,
  height: he.number.isRequired,
  onClick: he.func,
  onDoubleClick: he.func,
  onPointerDown: he.func,
  onPointerLeave: he.func,
  onPointerMove: he.func,
  onPointerUp: he.func
};
function ar() {
  return ar = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ar.apply(this, arguments);
}
function Vk(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, zf(e, t);
}
function zf(e, t) {
  return zf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, zf(e, t);
}
var Ph = /* @__PURE__ */ function(e) {
  Vk(t, e);
  function t(n) {
    var a;
    a = e.call(this, n) || this, a.mouseUpTime = 0, a.mouseDownTime = 0, a.getIdleState = function() {
      var s = a.props, c = s.width, d = s.height;
      return {
        start: {
          x: 0,
          y: 0
        },
        end: {
          x: 0,
          y: 0
        },
        extent: {
          x0: -1,
          x1: -1,
          y0: -1,
          y1: -1
        },
        bounds: {
          x0: 0,
          x1: c,
          y0: 0,
          y1: d
        },
        isBrushing: !1,
        brushPageOffset: void 0,
        activeHandle: null,
        brushingType: void 0
      };
    }, a.handleWindowPointerUp = function() {
      var s = a.props, c = s.useWindowMoveEvents, d = s.onBrushEnd, g = s.resetOnEnd, y = a.state.brushingType;
      c && y && a.updateBrush(function(v) {
        var E = v.start, k = v.end, M = v.extent;
        E.x = Math.min(M.x0, M.x1), E.y = Math.min(M.y0, M.y0), k.x = Math.max(M.x0, M.x1), k.y = Math.max(M.y0, M.y1);
        var T = ar({}, v, {
          activeHandle: null,
          isBrushing: !1,
          brushingType: void 0
        });
        return d && d(T), g && (T = ar({}, T, a.getIdleState())), T;
      });
    }, a.handleWindowPointerMove = function(s) {
      var c = a.props.useWindowMoveEvents, d = a.state, g = d.brushingType, y = d.isBrushing, v = d.brushPageOffset, E = d.start;
      if (!(!c || !y)) {
        var k = s.pageX - ((v == null ? void 0 : v.pageX) || 0), M = s.pageY - ((v == null ? void 0 : v.pageY) || 0);
        ["left", "right", "top", "bottom"].includes(g ?? "") && a.updateBrush(function(T) {
          var m = T.start, R = m.x, O = m.y, _ = T.end, N = _.x, D = _.y;
          return ar({}, T, {
            isBrushing: !0,
            extent: ar({}, T.extent, a.getExtent({
              x: g === "left" ? Math.min(Math.max(R + k, T.bounds.x0), T.bounds.x1) : R,
              y: g === "top" ? Math.min(Math.max(O + M, T.bounds.y0), T.bounds.y1) : O
            }, {
              x: g === "right" ? Math.min(Math.max(N + k, T.bounds.x0), T.bounds.x1) : N,
              y: g === "bottom" ? Math.min(Math.max(D + M, T.bounds.y0), T.bounds.y1) : D
            }))
          });
        }), g === "move" && a.updateBrush(function(T) {
          var m = T.start, R = m.x, O = m.y, _ = T.end, N = _.x, D = _.y, I = k > 0 ? Math.min(k, T.bounds.x1 - N) : Math.max(k, T.bounds.x0 - R), B = M > 0 ? Math.min(M, T.bounds.y1 - D) : Math.max(M, T.bounds.y0 - O);
          return ar({}, T, {
            isBrushing: !0,
            extent: ar({}, T.extent, {
              x0: R + I,
              y0: O + B,
              x1: N + I,
              y1: D + B
            })
          });
        }), g === "select" && a.updateBrush(function(T) {
          var m = T.start, R = m.x, O = m.y, _ = {
            x: Math.min(Math.max(R + k, T.bounds.x0), T.bounds.x1),
            y: Math.min(Math.max(O + M, T.bounds.y0), T.bounds.y1)
          }, N = a.getExtent(E, _), D = ar({}, T, {
            end: _,
            extent: N
          });
          return D;
        });
      }
    }, a.getExtent = function(s, c) {
      var d = a.props, g = d.brushDirection, y = d.width, v = d.height, E = g === "vertical" ? 0 : Math.min(s.x || 0, c.x || 0), k = g === "vertical" ? y : Math.max(s.x || 0, c.x || 0), M = g === "horizontal" ? 0 : Math.min(s.y || 0, c.y || 0), T = g === "horizontal" ? v : Math.max(s.y || 0, c.y || 0);
      return {
        x0: E,
        x1: k,
        y0: M,
        y1: T
      };
    }, a.handleDragStart = function(s) {
      var c = a.props, d = c.onBrushStart, g = c.left, y = c.top, v = c.inheritedMargin, E = c.useWindowMoveEvents, k = v != null && v.left ? v.left : 0, M = v != null && v.top ? v.top : 0, T = {
        x: (s.x || 0) + s.dx - g - k,
        y: (s.y || 0) + s.dy - y - M
      }, m = ar({}, T);
      d && d(T), a.updateBrush(function(R) {
        return ar({}, R, {
          start: T,
          end: m,
          extent: {
            x0: -1,
            x1: -1,
            y0: -1,
            y1: -1
          },
          isBrushing: !0,
          brushingType: "select",
          brushPageOffset: E ? Th(s.event) : void 0
        });
      });
    }, a.handleBrushStart = function(s) {
      var c = a.props, d = c.onBrushStart, g = c.left, y = c.top, v = c.inheritedMargin;
      if (d) {
        var E = v != null && v.left ? v.left : 0, k = v != null && v.top ? v.top : 0, M = {
          x: (s.x || 0) + s.dx - g - E,
          y: (s.y || 0) + s.dy - y - k
        };
        d(M);
      }
    }, a.handleDragMove = function(s) {
      var c = a.props, d = c.left, g = c.top, y = c.inheritedMargin, v = c.useWindowMoveEvents;
      if (!(!s.isDragging || v)) {
        var E = (y == null ? void 0 : y.left) || 0, k = (y == null ? void 0 : y.top) || 0, M = {
          x: (s.x || 0) + s.dx - d - E,
          y: (s.y || 0) + s.dy - g - k
        };
        a.updateBrush(function(T) {
          var m = T.start, R = a.getExtent(m, M);
          return ar({}, T, {
            end: M,
            extent: R
          });
        });
      }
    }, a.handleDragEnd = function() {
      var s = a.props, c = s.onBrushEnd, d = s.resetOnEnd, g = s.useWindowMoveEvents;
      g || a.updateBrush(function(y) {
        var v = y.extent, E = ar({}, y, {
          start: {
            x: v.x0,
            y: v.y0
          },
          end: {
            x: v.x1,
            y: v.y1
          },
          isBrushing: !1,
          brushingType: void 0,
          activeHandle: null
        });
        return c && c(E), d && (E = ar({}, E, a.getIdleState())), E;
      });
    }, a.getBrushWidth = function() {
      var s = a.state.extent, c = s.x0, d = s.x1;
      return Math.max(Math.max(c, d) - Math.min(c, d), 0);
    }, a.getBrushHeight = function() {
      var s = a.state.extent, c = s.y1, d = s.y0;
      return Math.max(Math.max(d, c) - Math.min(d, c), 0);
    }, a.handles = function() {
      var s = a.props.handleSize, c = a.state.extent, d = c.x0, g = c.x1, y = c.y0, v = c.y1, E = s / 2, k = a.getBrushWidth(), M = a.getBrushHeight();
      return {
        top: {
          x: d - E,
          y: y - E,
          height: s,
          width: k + s
        },
        bottom: {
          x: d - E,
          y: v - E,
          height: s,
          width: k + s
        },
        right: {
          x: g - E,
          y: y - E,
          height: M + s,
          width: s
        },
        left: {
          x: d - E,
          y: y - E,
          height: M + s,
          width: s
        }
      };
    }, a.corners = function() {
      var s = a.props.handleSize, c = a.state.extent, d = c.x0, g = c.x1, y = c.y0, v = c.y1, E = s / 2, k = s, M = s;
      return {
        topLeft: {
          x: Math.min(d, g) - E,
          y: Math.min(y, v) - E,
          width: k,
          height: M
        },
        topRight: {
          x: Math.max(d, g) - E,
          y: Math.min(y, v) - E,
          width: k,
          height: M
        },
        bottomLeft: {
          x: Math.min(d, g) - E,
          y: Math.max(y, v) - E,
          width: k,
          height: M
        },
        bottomRight: {
          x: Math.max(d, g) - E,
          y: Math.max(y, v) - E,
          width: k,
          height: M
        }
      };
    }, a.updateBrush = function(s) {
      var c = a.props.onChange;
      a.setState(s, function() {
        c && c(a.state);
      });
    }, a.reset = function() {
      return a.updateBrush(function() {
        return a.getIdleState();
      });
    }, a.handleBrushingTypeChange = function(s, c) {
      a.updateBrush(function(d) {
        var g = ar({}, d, {
          brushingType: s,
          isBrushing: s !== void 0
        });
        return (c || s === void 0) && (g.brushPageOffset = c), g;
      });
    };
    var o = n.initialBrushPosition, f = o ? a.getExtent(o.start, o.end) : {
      x0: -1,
      x1: -1,
      y0: -1,
      y1: -1
    };
    return a.state = {
      start: {
        x: Math.max(0, f.x0),
        y: Math.max(0, f.y0)
      },
      end: {
        x: Math.max(0, f.x1),
        y: Math.max(0, f.y1)
      },
      extent: f,
      bounds: {
        x0: 0,
        x1: a.props.width,
        y0: 0,
        y1: a.props.height
      },
      isBrushing: !1,
      brushingType: void 0,
      activeHandle: null
    }, a;
  }
  var r = t.prototype;
  return r.componentDidUpdate = function(a) {
    var o = this;
    (this.props.width !== a.width || this.props.height !== a.height) && this.setState(function(f) {
      var s = f.start, c = f.end, d = f.extent;
      if (!(d.x0 === -1 && d.x1 === -1 && d.y0 === -1 && d.y1 === -1)) {
        var g = o.props.width / a.width, y = o.props.height / a.height;
        s = {
          x: g * d.x0,
          y: y * d.y0
        }, c = {
          x: g * d.x1,
          y: y * d.y1
        }, d = o.getExtent(s, c);
      }
      return {
        start: s,
        end: c,
        extent: d,
        bounds: {
          x0: 0,
          x1: o.props.width,
          y0: 0,
          y1: o.props.height
        }
      };
    });
  }, r.componentDidMount = function() {
    this.props.useWindowMoveEvents && (window.addEventListener("mouseup", this.handleWindowPointerUp), window.addEventListener("mousemove", this.handleWindowPointerMove));
  }, r.componentWillUnmount = function() {
    this.props.useWindowMoveEvents && (window.removeEventListener("mouseup", this.handleWindowPointerUp), window.removeEventListener("mousemove", this.handleWindowPointerMove));
  }, r.render = function() {
    var a = this, o = this.state, f = o.start, s = o.end, c = this.props, d = c.top, g = c.left, y = c.width, v = c.height, E = c.onMouseLeave, k = c.onMouseUp, M = c.onMouseMove, T = c.onBrushEnd, m = c.onClick, R = c.resizeTriggerAreas, O = c.selectedBoxStyle, _ = c.disableDraggingSelection, N = c.disableDraggingOverlay, D = c.clickSensitivity, I = c.useWindowMoveEvents, B = c.renderBrushHandle, U = this.state.brushingType, q = this.handles(), K = this.corners(), j = this.getBrushWidth(), te = this.getBrushHeight(), me = new Set(R);
    return /* @__PURE__ */ i.createElement(rt, {
      className: "visx-brush",
      top: d,
      left: g
    }, N ? /* @__PURE__ */ i.createElement(Ff, {
      width: y,
      height: v,
      onClick: function(le) {
        var ue = a.mouseUpTime - a.mouseDownTime;
        m && ue < D && m(le);
      },
      style: {
        cursor: "default"
      }
    }) : /* @__PURE__ */ i.createElement(Mc, {
      width: y,
      height: v,
      resetOnStart: !0,
      onDragStart: this.handleDragStart,
      onDragMove: this.handleDragMove,
      onDragEnd: this.handleDragEnd,
      isDragging: I ? U === "select" : void 0
    }, function(H) {
      var le = H.dragStart, ue = H.isDragging, fe = H.dragMove, ae = H.dragEnd;
      return /* @__PURE__ */ i.createElement(Ff, {
        width: y,
        height: v,
        onDoubleClick: function() {
          return a.reset();
        },
        onClick: function(Z) {
          var ee = a.mouseUpTime - a.mouseDownTime;
          m && ee < D && m(Z);
        },
        onPointerDown: function(Z) {
          a.mouseDownTime = Date.now(), le(Z);
        },
        onPointerLeave: function(Z) {
          E && E(Z);
        },
        onPointerMove: function(Z) {
          !ue && M && M(Z), ue && fe(Z);
        },
        onPointerUp: function(Z) {
          a.mouseUpTime = Date.now(), k && k(Z), ae(Z);
        },
        style: {
          cursor: "crosshair"
        }
      });
    }), f && s && /* @__PURE__ */ i.createElement(Ah, {
      updateBrush: this.updateBrush,
      width: j,
      height: te,
      stageWidth: y,
      stageHeight: v,
      brush: this.state,
      disableDraggingSelection: _,
      onBrushEnd: T,
      onBrushStart: this.handleBrushStart,
      onMouseLeave: E,
      onMouseMove: M,
      onMouseUp: k,
      onMoveSelectionChange: this.handleBrushingTypeChange,
      onClick: m,
      selectedBoxStyle: O,
      isControlled: I,
      isDragInProgress: I ? U === "move" : void 0
    }), f && s && Object.keys(q).filter(function(H) {
      return me.has(H);
    }).map(function(H) {
      var le = q[H];
      return le && /* @__PURE__ */ i.createElement(hy, {
        key: "handle-" + H,
        type: H,
        handle: le,
        stageWidth: y,
        stageHeight: v,
        updateBrush: a.updateBrush,
        brush: a.state,
        onBrushStart: a.handleBrushStart,
        onBrushEnd: T,
        isControlled: I,
        isDragInProgress: I ? U === H : void 0,
        onBrushHandleChange: a.handleBrushingTypeChange,
        renderBrushHandle: B
      });
    }), f && s && Object.keys(K).filter(function(H) {
      return me.has(H);
    }).map(function(H) {
      var le = K[H];
      return le && /* @__PURE__ */ i.createElement(Ch, {
        key: "corner-" + H,
        type: H,
        brush: a.state,
        updateBrush: a.updateBrush,
        stageWidth: y,
        stageHeight: v,
        corner: le,
        onBrushEnd: T
      });
    }));
  }, t;
}(i.Component);
Ph.propTypes = {
  brushDirection: he.oneOf(["horizontal", "vertical", "both"]),
  width: he.number.isRequired,
  height: he.number.isRequired,
  left: he.number.isRequired,
  top: he.number.isRequired,
  onChange: he.func,
  handleSize: he.number,
  resizeTriggerAreas: he.array,
  onBrushStart: he.func,
  onBrushEnd: he.func,
  onMouseLeave: he.func,
  onMouseUp: he.func,
  onMouseMove: he.func,
  onClick: he.func,
  clickSensitivity: he.number,
  disableDraggingSelection: he.bool,
  disableDraggingOverlay: he.bool,
  resetOnEnd: he.bool,
  useWindowMoveEvents: he.bool,
  renderBrushHandle: he.func
};
Ph.defaultProps = {
  brushDirection: "both",
  inheritedMargin: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  },
  onChange: null,
  handleSize: 4,
  resizeTriggerAreas: ["left", "right"],
  onBrushStart: null,
  onBrushEnd: null,
  onMouseLeave: null,
  onMouseUp: null,
  onMouseMove: null,
  onClick: null,
  disableDraggingSelection: !1,
  disableDraggingOverlay: !1,
  clickSensitivity: 200,
  resetOnEnd: !1,
  initialBrushPosition: null,
  useWindowMoveEvents: !1,
  renderBrushHandles: null
};
function jk(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, $f(e, t);
}
function $f(e, t) {
  return $f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, $f(e, t);
}
var mm = 2, gm = "steelblue", Rh = /* @__PURE__ */ function(e) {
  jk(t, e);
  function t() {
    for (var n, a = arguments.length, o = new Array(a), f = 0; f < a; f++)
      o[f] = arguments[f];
    return n = e.call.apply(e, [this].concat(o)) || this, n.handleChange = function(s) {
      var c = n.props.onChange;
      if (c) {
        var d = s.extent.x0;
        if (typeof d > "u" || d < 0) {
          c(null);
          return;
        }
        var g = n.convertRangeToDomain(s);
        c(g);
      }
    }, n.handleBrushStart = function(s) {
      var c = n.props.onBrushStart;
      if (c) {
        var d = s.x, g = s.y, y = n.props, v = y.xScale, E = y.yScale, k = bc(v, d), M = bc(E, g);
        c({
          x: "invert" in v && typeof v.invert < "u" ? k : v.domain()[k],
          y: "invert" in E && typeof E.invert < "u" ? M : E.domain()[M]
        });
      }
    }, n.handleBrushEnd = function(s) {
      var c = n.props.onBrushEnd;
      if (c) {
        var d = s.extent.x0;
        if (typeof d > "u" || d < 0) {
          c(null);
          return;
        }
        var g = n.convertRangeToDomain(s);
        c(g);
      }
    }, n;
  }
  var r = t.prototype;
  return r.convertRangeToDomain = function(a) {
    var o = this.props, f = o.xScale, s = o.yScale, c = a.extent, d = c.x0, g = c.x1, y = c.y0, v = c.y1, E = pm(f, d || 0, g || 0, mm), k = pm(s, y || 0, v || 0, mm), M = {
      x0: E.start || 0,
      x1: E.end || 0,
      xValues: E.values,
      y0: k.start || 0,
      y1: k.end || 0,
      yValues: k.values
    };
    return M;
  }, r.render = function() {
    var a = this.props, o = a.xScale, f = a.yScale, s = a.height, c = a.width, d = a.margin, g = a.brushDirection, y = a.initialBrushPosition, v = a.innerRef, E = a.resizeTriggerAreas, k = a.brushRegion, M = a.yAxisOrientation, T = a.xAxisOrientation, m = a.selectedBoxStyle, R = a.disableDraggingSelection, O = a.disableDraggingOverlay, _ = a.resetOnEnd, N = a.onMouseLeave, D = a.onMouseMove, I = a.onClick, B = a.handleSize, U = a.useWindowMoveEvents, q = a.renderBrushHandle;
    if (!o || !f)
      return null;
    var K, j, te, me, H = d != null && d.left ? d.left : 0, le = d != null && d.top ? d.top : 0, ue = d != null && d.right ? d.right : 0, fe = d != null && d.bottom ? d.bottom : 0;
    return k === "chart" ? (te = 0, me = 0, K = c, j = s) : k === "yAxis" ? (me = 0, j = s, M === "right" ? (te = c, K = ue) : (te = -H, K = H)) : (te = 0, K = c, T === "bottom" ? (me = s, j = fe) : (me = -le, j = le)), /* @__PURE__ */ i.createElement(Ph, {
      width: K,
      height: j,
      left: te,
      top: me,
      brushDirection: g,
      disableDraggingSelection: R,
      disableDraggingOverlay: O,
      handleSize: B,
      inheritedMargin: d,
      initialBrushPosition: y,
      ref: v,
      resetOnEnd: _,
      resizeTriggerAreas: E,
      selectedBoxStyle: m,
      onBrushEnd: this.handleBrushEnd,
      onBrushStart: this.handleBrushStart,
      onChange: this.handleChange,
      onClick: I,
      onMouseLeave: N,
      onMouseMove: D,
      useWindowMoveEvents: U,
      renderBrushHandle: q
    });
  }, t;
}(se.Component);
Rh.propTypes = {
  height: he.number,
  width: he.number,
  onChange: he.func,
  onBrushEnd: he.func,
  brushDirection: he.oneOf(["vertical", "horizontal", "both"]),
  resizeTriggerAreas: he.array,
  brushRegion: he.oneOf(["xAxis", "yAxis", "chart"]),
  yAxisOrientation: he.oneOf(["left", "right"]),
  xAxisOrientation: he.oneOf(["top", "bottom"]),
  disableDraggingSelection: he.bool,
  disableDraggingOverlay: he.bool,
  resetOnEnd: he.bool,
  handleSize: he.number,
  useWindowMoveEvents: he.bool,
  renderBrushHandle: he.func
};
Rh.defaultProps = {
  xScale: null,
  yScale: null,
  onChange: null,
  height: 0,
  width: 0,
  selectedBoxStyle: {
    fill: gm,
    fillOpacity: 0.2,
    stroke: gm,
    strokeWidth: 1,
    strokeOpacity: 0.8
  },
  margin: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  handleSize: 4,
  brushDirection: "horizontal",
  initialBrushPosition: null,
  resizeTriggerAreas: ["left", "right"],
  brushRegion: "chart",
  yAxisOrientation: "right",
  xAxisOrientation: "bottom",
  onBrushStart: null,
  onBrushEnd: null,
  disableDraggingSelection: !1,
  resetOnEnd: !1,
  onMouseMove: null,
  onMouseLeave: null,
  onClick: null,
  useWindowMoveEvents: !1,
  renderBrushHandles: null
};
const Uk = Rh, Kk = (e) => {
  const { transformedData: t, config: r, parseDate: n, formatDate: a, updateConfig: o } = se.useContext(wt), { fontSize: f } = Rs(), [s, c] = se.useState([...t]), d = se.useRef(null), g = 15, [y, v] = se.useState({
    startPosition: 0,
    endPosition: 0,
    startValue: "",
    endValue: ""
  }), E = {
    start: { x: 0 },
    end: { x: e.xMax }
  }, k = {
    fill: "#ddd",
    stroke: "blue",
    fillOpacity: 0.8,
    strokeOpacity: 0,
    rx: g
  }, M = (m) => {
    var B;
    if (!m)
      return;
    const { xValues: R } = m, O = (B = r.xAxis) == null ? void 0 : B.dataKey, _ = t.filter((U) => R.includes(U[O])), N = R.slice().reverse().find((U) => U !== void 0), D = R.find((U) => U !== void 0), I = (U) => Cn(r.runtime.xAxis) ? a(n(U)) : U;
    v((U) => {
      var q, K;
      return {
        ...U,
        startPosition: (q = d.current) == null ? void 0 : q.state.start.x,
        endPosition: (K = d.current) == null ? void 0 : K.state.end.x,
        endValue: I(N),
        startValue: I(D)
      };
    }), c(_);
  };
  se.useEffect(() => {
    o({
      ...r,
      brush: {
        ...r.brush,
        data: s
      }
    });
  }, [s]), se.useEffect(() => {
    r.brush.active || c(t);
  }, [r.brush.active]);
  const T = () => {
    const m = Number(r.xAxis.tickRotation) > 0 ? Number(r.xAxis.tickRotation) : 0;
    let R = 0;
    const O = 20;
    return r.xAxis.label || (!r.isResponsiveTicks && m && (R = Number(m + r.xAxis.tickWidthMax) / 1.6), !r.isResponsiveTicks && !m && (R = Number(r.xAxis.labelOffset) - O), r.isResponsiveTicks && r.dynamicMarginTop && (R = Number(r.xAxis.labelOffset + r.xAxis.tickWidthMax / 1.6)), r.isResponsiveTicks && !r.dynamicMarginTop && (R = Number(r.xAxis.labelOffset - O))), r.xAxis.label && (!r.isResponsiveTicks && m && (R = Number(r.xAxis.tickWidthMax + m)), !r.isResponsiveTicks && !m && (R = r.xAxis.labelOffset + O), r.isResponsiveTicks && !m && (R = Number(r.dynamicMarginTop ? r.dynamicMarginTop : r.xAxis.labelOffset) + O)), R;
  };
  if (["Line", "Bar", "Area Chart", "Combo"].includes(r.visualizationType))
    return /* @__PURE__ */ i.createElement(rt, { display: r.brush.active ? "block" : "none", top: Number(e.yMax) + T(), left: Number(r.runtime.yAxis.size), pointerEvents: "fill" }, /* @__PURE__ */ i.createElement("rect", { fill: "#eee", width: e.xMax, height: r.brush.height, rx: g }), /* @__PURE__ */ i.createElement(
      Uk,
      {
        renderBrushHandle: (m) => {
          var R;
          return /* @__PURE__ */ i.createElement(Yk, { textProps: y, fontSize: f[r.fontSize], ...m, isBrushing: (R = d.current) == null ? void 0 : R.state.isBrushing });
        },
        innerRef: d,
        useWindowMoveEvents: !0,
        selectedBoxStyle: k,
        xScale: e.xScaleBrush,
        yScale: e.yScale,
        width: e.xMax,
        resizeTriggerAreas: ["left", "right"],
        height: r.brush.height,
        handleSize: 8,
        brushDirection: "horizontal",
        initialBrushPosition: E,
        onChange: M
      }
    ));
}, Yk = (e) => {
  const { x: t, isBrushActive: r, isBrushing: n, className: a, textProps: o } = e, f = 8;
  if (!r)
    return null;
  const s = a.includes("left"), c = s ? "scale(-1, 1)" : "translate(0,0)", d = s ? "end" : "start";
  return /* @__PURE__ */ i.createElement(rt, { left: t + f / 2, top: -2 }, /* @__PURE__ */ i.createElement(Et, { pointerEvents: "visiblePainted", dominantBaseline: "hanging", x: 0, verticalAnchor: "start", textAnchor: d, fontSize: e.fontSize / 1.4, dy: 10, y: 15 }, s ? o.startValue : o.endValue), /* @__PURE__ */ i.createElement("path", { cursor: "ew-resize", d: "M0.5,10A6,6 0 0 1 6.5,16V14A6,6 0 0 1 0.5,20ZM2.5,18V12M4.5,18V12", fill: n ? "#297EF1" : "#666", strokeWidth: "1", transform: c }));
}, Yr = (e) => {
  var vn, It, pn, An, $n;
  const { transformedData: t, dimensions: r, config: n, parseDate: a, formatDate: o, currentViewport: f, formatNumber: s, handleChartAriaLabels: c, updateConfig: d, handleLineType: g, getTextWidth: y } = se.useContext(wt), { visualizationType: v, visualizationSubType: E, orientation: k, xAxis: M, yAxis: T, runtime: m, debugSvg: R } = n;
  let [O] = r;
  n && n.legend && !n.legend.hide && n.legend.position !== "bottom" && ["lg", "md"].includes(f) && (O = O * 0.73);
  const { horizontal: _ } = n.heights, N = k === "horizontal" || n.visualizationType === "Forest Plot", D = !0;
  let I = n.aspectRatio ? O * n.aspectRatio : n.visualizationType === "Forest Plot" ? n.heights.vertical : n.heights[k];
  const B = O - m.yAxis.size - (v === "Combo" ? n.yAxis.rightAxisSize : 0);
  let U = I - (k === "horizontal" ? 0 : m.xAxis.size);
  n.visualizationType === "Forest Plot" && (I = I + n.data.length * n.forestPlot.rowHeight, U = U + n.data.length * n.forestPlot.rowHeight, O = r[0]), (vn = n.brush) != null && vn.active && (I = I + ((It = n.brush) == null ? void 0 : It.height));
  const { minValue: q, maxValue: K, existPositiveValue: j, isAllLine: te } = Oc(n, t), { visSupportsReactTooltip: me } = Ds(), { hasTopAxis: H } = Ek(n), [le, ue] = se.useState(!1), [fe, ae] = se.useState({ x: 0, y: 0 }), V = se.useRef(), Z = se.useRef(), ee = ch(V, {
    freezeOnceVisible: !1
  }), Ae = (Me) => Cn(n.runtime.xAxis) ? a(Me[n.runtime.originalXAxis.dataKey]).getTime() : Me[n.runtime.originalXAxis.dataKey], xe = (Me, Xe) => Me[Xe], De = n.brush.active && ((pn = n.brush.data) != null && pn.length) ? n.brush.data.map((Me) => Ae(Me)) : t.map((Me) => Ae(Me)), oe = n.orientation === "horizontal" || n.visualizationType === "Forest Plot" ? "yAxis" : "xAxis", ze = { data: t, config: n, minValue: q, maxValue: K, isAllLine: te, existPositiveValue: j, xAxisDataMapped: De, xMax: B, yMax: U }, { min: Ie, max: Ce, leftMax: ge, rightMax: Oe } = cy(ze), { yScaleRight: ie, hasRightAxis: we } = gh({ config: n, yMax: U, data: t, updateConfig: d }), { xScale: Pe, yScale: He, seriesScale: Ye, g1xScale: Je, g2xScale: at, xScaleNoPadding: it, xScaleBrush: st } = vk({ ...ze, min: Ie, max: Ce, leftMax: ge, rightMax: Oe, dimensions: r }), [Ge, We] = se.useState(null);
  se.useEffect(() => {
    var Me;
    We((Me = Z == null ? void 0 : Z.current) == null ? void 0 : Me.getBoundingClientRect());
  }, [Z, n.legend]);
  const Fe = (Me, Xe) => {
    if (n.useLogScale && Me === 0.1 && (Me = 0), !(n.data && !n.data[Xe] && v === "Forest Plot"))
      return n.visualizationType === "Forest Plot" ? n.data[Xe][n.xAxis.dataKey] : Cn(m.yAxis) ? o(a(Me)) : k === "vertical" ? s(Me, "left", D) : Me;
  }, ft = (Me) => (n.useLogScale && Me === 0.1 && (Me = 0), Cn(m.xAxis) && n.visualizationType !== "Forest Plot" ? o(Me) : k === "horizontal" && n.visualizationType !== "Forest Plot" ? s(Me, "left", D) : n.xAxis.type === "continuous" && n.visualizationType !== "Forest Plot" ? s(Me, "bottom", D) : n.visualizationType === "Forest Plot" ? s(Me, "left", n.dataFormat.abbreviated, n.runtime.xAxis.prefix, n.runtime.xAxis.suffix, Number(n.dataFormat.roundTo)) : Me), Ke = (Me) => {
    const { numTicks: Xe } = m[Me];
    let Tt;
    return Me === "yAxis" && (Tt = N && !Xe ? t.length : N && Xe ? Xe : !N && !Xe ? void 0 : !N && Xe && Xe, Tt === void 0 && !n.dataFormat.roundTo && (Number(Ce) <= 3 ? Tt = 2 : Tt = 4), Number(Tt) > Number(Ce) && (Tt = Number(Ie) < 0 ? Math.round(Ce) * 2 : Math.round(Ce))), Me === "xAxis" && (Tt = N && !Xe ? void 0 : N && Xe ? Xe : !N && !Xe ? void 0 : !N && Xe && Xe, N && Tt === void 0 && !n.dataFormat.roundTo && (Ce <= 3 ? Tt = 2 : Tt = 4), n.visualizationType === "Forest Plot" && (Tt = n.yAxis.numTicks !== "" ? n.yAxis.numTicks : 4)), Tt;
  }, { tooltipData: Ze, showTooltip: ut, hideTooltip: ht, tooltipOpen: Pt, tooltipLeft: on, tooltipTop: un } = Fg(), {
    handleTooltipMouseOver: Ot,
    handleTooltipClick: jt,
    handleTooltipMouseOff: Ft,
    tooltipStyles: nn,
    TooltipListItem: yn,
    getXValueFromCoordinateDate: hn,
    getXValueFromCoordinate: Rt
  } = Hg({
    xScale: Pe,
    yScale: He,
    showTooltip: ut,
    hideTooltip: ht
  });
  se.useEffect(() => {
    document.querySelector(".isEditor") && ue((Xe) => !0);
  }), se.useEffect(() => {
    (ee == null ? void 0 : ee.isIntersecting) === !0 && n.animate && setTimeout(() => {
      ue((Me) => !0);
    }, 500);
  }, [ee == null ? void 0 : ee.isIntersecting, n.animate]);
  const Zt = () => {
    const { visualizationType: Me } = n;
    return Me === "Combo" && m.forecastingSeriesKeys > 0 || Me === "Area Chart" || Me === "Line" || Me === "Bar";
  }, _e = Number(k === "horizontal" ? n.xAxis.size : n.yAxis.size), wn = () => n.visualizationType === "Forest Plot" ? n.data.length : Ke("yAxis"), Lt = (Me) => {
    const Xe = Me.currentTarget.getBoundingClientRect(), Tt = Me.clientX - Xe.left, nt = Me.clientY - Xe.top;
    ae({
      x: Tt,
      y: nt
    });
  };
  return isNaN(O) ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement(zr, { component: "LinearChart" }, /* @__PURE__ */ i.createElement("div", { style: { width: `${O}px`, height: `${I}px`, overflow: "visible" }, className: "tooltip-boundary" }, /* @__PURE__ */ i.createElement(
    "svg",
    {
      onMouseMove: Lt,
      width: "100%",
      height: "100%",
      className: `linear ${n.animate ? "animated" : ""} ${le && n.animate ? "animate" : ""} ${R && "debug"}`,
      role: "img",
      "aria-label": c(n),
      ref: Z,
      style: { overflow: "visible" }
    },
    /* @__PURE__ */ i.createElement(yr, { width: O, height: I, fill: "transparent" }),
    " ",
    !["Spark Line", "Forest Plot"].includes(v) && /* @__PURE__ */ i.createElement(WE, { scale: He, tickLength: n.useLogScale ? 6 : 8, left: Number(m.yAxis.size) - n.yAxis.axisPadding, label: ((An = m.yAxis.yAxis) == null ? void 0 : An.label) || m.yAxis.label, stroke: "#333", tickFormat: (Me, Xe) => Fe(Me, Xe), numTicks: wn() }, (Me) => {
      const Xe = n.orientation === "horizontal" ? (Me.axisToPoint.y - Me.axisFromPoint.y) / 2 : (Me.axisFromPoint.y - Me.axisToPoint.y) / 2, Tt = U / Me.ticks.length / 2 - U / Me.ticks.length * (1 - n.barThickness) + 5;
      return /* @__PURE__ */ i.createElement(rt, { className: "left-axis" }, Me.ticks.map((nt, zt) => {
        const _t = Me.ticks[0].to.y, Tn = 15, Wn = String(nt.value).startsWith("1") || nt.value === 0.1 ? "block" : "none", Y = Wn === "block" ? 7 : 0, $e = { x: nt.to.x - Y, y: nt.to.y };
        return /* @__PURE__ */ i.createElement(rt, { key: `vx-tick-${nt.value}-${zt}`, className: "vx-axis-tick" }, !m.yAxis.hideTicks && /* @__PURE__ */ i.createElement(an, { key: `${nt.value}--hide-hideTicks`, from: nt.from, to: n.useLogScale ? $e : nt.to, stroke: n.yAxis.tickColor, display: k === "horizontal" ? "none" : "block" }), m.yAxis.gridLines ? /* @__PURE__ */ i.createElement(an, { key: `${nt.value}--hide-hideGridLines`, display: (n.useLogScale && Wn).toString(), from: { x: nt.from.x + B, y: nt.from.y }, to: nt.from, stroke: "rgba(0,0,0,0.3)" }) : "", k === "horizontal" && E !== "stacked" && n.yAxis.labelPlacement === "On Date/Category Axis" && !n.yAxis.hideLabel && /* @__PURE__ */ i.createElement(
          Et,
          {
            transform: `translate(${nt.to.x - 5}, ${n.isLollipopChart ? nt.to.y - _t : nt.to.y - _t + (Number(n.barHeight * n.series.length) - Tn) / 2}) rotate(-${n.runtime.horizontal && n.runtime.yAxis.tickRotation || 0})`,
            verticalAnchor: "start",
            textAnchor: "end"
          },
          nt.formattedValue
        ), k === "horizontal" && E === "stacked" && n.yAxis.labelPlacement === "On Date/Category Axis" && !n.yAxis.hideLabel && /* @__PURE__ */ i.createElement(Et, { transform: `translate(${nt.to.x - 5}, ${nt.to.y - _t + (Number(n.barHeight) - Tn) / 2}) rotate(-${m.horizontal ? m.yAxis.tickRotation : 0})`, verticalAnchor: "start", textAnchor: "end" }, nt.formattedValue), k === "horizontal" && v === "Paired Bar" && !n.yAxis.hideLabel && /* @__PURE__ */ i.createElement(Et, { transform: `translate(${nt.to.x - 5}, ${nt.to.y - _t + Number(n.barHeight) / 2}) rotate(-${m.horizontal ? m.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, nt.formattedValue), k === "horizontal" && v === "Deviation Bar" && !n.yAxis.hideLabel && /* @__PURE__ */ i.createElement(Et, { transform: `translate(${nt.to.x - 5}, ${n.isLollipopChart ? nt.to.y - _t + 2 : nt.to.y - _t + Number(n.barHeight) / 2}) rotate(-${m.horizontal ? m.yAxis.tickRotation : 0})`, textAnchor: "end", verticalAnchor: "middle" }, nt.formattedValue), k === "vertical" && v !== "Paired Bar" && !n.yAxis.hideLabel && /* @__PURE__ */ i.createElement(
          Et,
          {
            display: n.useLogScale ? Wn : "block",
            dx: n.useLogScale ? -6 : 0,
            x: n.runtime.horizontal ? nt.from.x + 2 : nt.to.x,
            y: nt.to.y + (n.runtime.horizontal ? Tt : 0),
            angle: -Number(n.yAxis.tickRotation) || 0,
            verticalAnchor: n.runtime.horizontal ? "start" : "middle",
            textAnchor: n.runtime.horizontal ? "start" : "end",
            fill: n.yAxis.tickLabelColor
          },
          nt.formattedValue
        ));
      }), !n.yAxis.hideAxis && /* @__PURE__ */ i.createElement(an, { from: Me.axisFromPoint, to: m.horizontal ? { x: 0, y: n.visualizationType === "Forest Plot" ? I : Number(_) } : Me.axisToPoint, stroke: "#000" }), He.domain()[0] < 0 && /* @__PURE__ */ i.createElement(an, { from: { x: Me.axisFromPoint.x, y: He(0) }, to: { x: B, y: He(0) }, stroke: "#333" }), v === "Bar" && k === "horizontal" && Pe.domain()[0] < 0 && /* @__PURE__ */ i.createElement(an, { from: { x: Pe(0), y: 0 }, to: { x: Pe(0), y: U }, stroke: "#333", strokeWidth: 2 }), /* @__PURE__ */ i.createElement(Et, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${-1 * m.yAxis.size}, ${Xe}) rotate(-90)`, fontWeight: "bold", fill: n.yAxis.labelColor }, Me.label));
    }),
    we && /* @__PURE__ */ i.createElement(KE, { scale: ie, left: Number(O - n.yAxis.rightAxisSize), label: n.yAxis.rightLabel, tickFormat: (Me) => s(Me, "right"), numTicks: m.yAxis.rightNumTicks || void 0, labelOffset: 45 }, (Me) => {
      const Xe = n.orientation === "horizontal" ? (Me.axisToPoint.y - Me.axisFromPoint.y) / 2 : (Me.axisFromPoint.y - Me.axisToPoint.y) / 2, Tt = U / Me.ticks.length / 2 - U / Me.ticks.length * (1 - n.barThickness) + 5;
      return /* @__PURE__ */ i.createElement(rt, { className: "right-axis" }, Me.ticks.map((nt, zt) => /* @__PURE__ */ i.createElement(rt, { key: `vx-tick-${nt.value}-${zt}`, className: "vx-axis-tick" }, !m.yAxis.rightHideTicks && /* @__PURE__ */ i.createElement(an, { from: nt.from, to: nt.to, display: m.horizontal ? "none" : "block", stroke: n.yAxis.rightAxisTickColor }), m.yAxis.rightGridLines ? /* @__PURE__ */ i.createElement(an, { from: { x: nt.from.x + B, y: nt.from.y }, to: nt.from, stroke: "rgba(0,0,0,0.3)" }) : "", !n.yAxis.rightHideLabel && /* @__PURE__ */ i.createElement(Et, { x: nt.to.x, y: nt.to.y + (m.horizontal ? Tt : 0), verticalAnchor: m.horizontal ? "start" : "middle", textAnchor: "start", fill: n.yAxis.rightAxisTickLabelColor }, nt.formattedValue))), !n.yAxis.rightHideAxis && /* @__PURE__ */ i.createElement(an, { from: Me.axisFromPoint, to: Me.axisToPoint, stroke: "#333" }), /* @__PURE__ */ i.createElement(Et, { className: "y-label", textAnchor: "middle", verticalAnchor: "start", transform: `translate(${n.yAxis.rightLabelOffsetSize ? n.yAxis.rightLabelOffsetSize : 0}, ${Xe}) rotate(-90)`, fontWeight: "bold", fill: n.yAxis.rightAxisLabelColor }, Me.label));
    }),
    H && n.topAxis.hasLine && /* @__PURE__ */ i.createElement(
      GE,
      {
        stroke: "#333",
        left: Number(m.yAxis.size),
        scale: Pe,
        hideTicks: !0,
        hideZero: !0,
        tickLabelProps: () => ({
          fill: "transparent"
        })
      }
    ),
    v !== "Paired Bar" && v !== "Spark Line" && /* @__PURE__ */ i.createElement(
      Hu,
      {
        top: m.horizontal && n.visualizationType !== "Forest Plot" ? Number(_) + Number(n.xAxis.axisPadding) : n.visualizationType === "Forest Plot" ? U + Number(n.xAxis.axisPadding) : U,
        left: n.visualizationType !== "Forest Plot" ? Number(m.yAxis.size) : 0,
        label: m.xAxis.label,
        tickFormat: ft,
        scale: Pe,
        stroke: "#333",
        numTicks: Ke("xAxis"),
        tickStroke: "#333"
      },
      (Me) => {
        const Xe = n.visualizationType !== "Forest Plot" ? (Me.axisToPoint.x - Me.axisFromPoint.x) / 2 : r[0] / 2, Tt = (mt) => /\s/.test(mt), nt = Me.ticks.some((mt) => Tt(mt.value)), zt = { small: 16, medium: 18, large: 20 }, _t = 8, Tn = Math.max(...Me.ticks.map((mt) => y(mt.formattedValue, `normal ${zt[n.fontSize]}px sans-serif`))), Wn = nt ? 180 : 100, Y = Me.ticks.map((mt) => y(mt.formattedValue, `normal ${zt[n.fontSize]}px sans-serif`)), $e = Y.reduce((mt, qe) => mt + qe, Wn), et = (B - $e) / (Me.ticks.length - 1);
        let Ve = [0];
        for (let mt = 1; mt < Y.length; mt++)
          Ve[mt] = Ve[mt - 1] + Y[mt - 1] + et;
        let pt = !1;
        Y.forEach((mt, qe) => {
          if (Ve[qe] + Y[qe] > Ve[qe + 1]) {
            pt = !0;
            return;
          }
        });
        const ot = pt && n.isResponsiveTicks ? Tn + _t + 20 : 0, bt = Number(n.xAxis.tickRotation) > 0 ? Number(n.xAxis.tickRotation) : 0;
        return n.dynamicMarginTop = ot, n.xAxis.tickWidthMax = Tn, /* @__PURE__ */ i.createElement(rt, { className: "bottom-axis", width: r[0] }, Me.ticks.map((mt, qe, Ut) => {
          const Qt = String(mt.value).startsWith("1") || mt.value === 0.1 ? "block" : "none", cn = Qt === "block" ? 16 : _t, Jt = { x: mt.to.x, y: cn };
          let Kt = y(mt.formattedValue, `normal ${zt[n.fontSize]}px sans-serif`), $t = 100 / Ut.length;
          n.yAxis.tickRotation = n.isResponsiveTicks && n.orientation === "horizontal" ? 0 : n.yAxis.tickRotation, n.xAxis.tickRotation = n.isResponsiveTicks && n.orientation === "vertical" ? 0 : n.xAxis.tickRotation;
          const Bt = n.isResponsiveTicks && pt ? -Number(n.xAxis.maxTickRotation) || -90 : -Number(n.runtime.xAxis.tickRotation);
          return /* @__PURE__ */ i.createElement(rt, { key: `vx-tick-${mt.value}-${qe}`, className: "vx-axis-tick" }, !n.xAxis.hideTicks && /* @__PURE__ */ i.createElement(an, { from: mt.from, to: k === "horizontal" && n.useLogScale ? Jt : mt.to, stroke: n.xAxis.tickColor, strokeWidth: Qt === "block" && n.useLogScale ? 1.3 : 1 }), !n.xAxis.hideLabel && /* @__PURE__ */ i.createElement(
            Et,
            {
              dy: n.orientation === "horizontal" && n.useLogScale ? 8 : 0,
              display: n.orientation === "horizontal" && n.useLogScale ? Qt : "block",
              x: mt.to.x,
              y: mt.to.y,
              angle: Bt,
              verticalAnchor: Bt < -50 ? "middle" : "start",
              textAnchor: Bt ? "end" : "middle",
              width: pt && !n.isResponsiveTicks && !Number(n[oe].tickRotation) ? $t : Kt,
              fill: n.xAxis.tickLabelColor
            },
            mt.formattedValue
          ));
        }), !n.xAxis.hideAxis && /* @__PURE__ */ i.createElement(an, { from: Me.axisFromPoint, to: Me.axisToPoint, stroke: "#333" }), /* @__PURE__ */ i.createElement(
          Et,
          {
            x: Xe,
            y: n.visualizationType === "Forest Plot" ? n.xAxis.tickWidthMax + 40 : n.orientation === "horizontal" ? ot || n.xAxis.labelOffset : n.isResponsiveTicks && ot && !N ? ot : Number(bt) && !n.isResponsiveTicks && !N ? Number(bt + Tn / 1.3) : Number(n.xAxis.labelOffset),
            textAnchor: "middle",
            verticalAnchor: "start",
            fontWeight: "bold",
            fill: n.xAxis.labelColor
          },
          Me.label
        ));
      }
    ),
    v === "Paired Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Hu, { top: U, left: Number(m.yAxis.size), label: m.xAxis.label, tickFormat: Cn(m.xAxis) ? o : s, scale: Je, stroke: "#333", tickStroke: "#333", numTicks: m.xAxis.numTicks || void 0 }, (Me) => /* @__PURE__ */ i.createElement(rt, { className: "bottom-axis" }, Me.ticks.map((Xe, Tt) => {
      const nt = Xe.index !== 0 ? n.yAxis.tickRotation : 0, zt = Xe.index !== 0 && n.yAxis.tickRotation && n.yAxis.tickRotation > 0 ? "end" : "middle";
      return /* @__PURE__ */ i.createElement(rt, { key: `vx-tick-${Xe.value}-${Tt}`, className: "vx-axis-tick" }, !m.yAxis.hideTicks && /* @__PURE__ */ i.createElement(an, { from: Xe.from, to: Xe.to, stroke: "#333" }), !m.yAxis.hideLabel && /* @__PURE__ */ i.createElement(Et, { x: Xe.to.x, y: Xe.to.y, angle: -nt, verticalAnchor: "start", textAnchor: zt }, s(Xe.value, "left")));
    }), !m.yAxis.hideAxis && /* @__PURE__ */ i.createElement(an, { from: Me.axisFromPoint, to: Me.axisToPoint, stroke: "#333" }))), /* @__PURE__ */ i.createElement(
      Hu,
      {
        top: U,
        left: Number(m.yAxis.size),
        label: m.xAxis.label,
        tickFormat: Cn(m.xAxis) ? o : m.xAxis.dataKey !== "Year" ? s : (Me) => Me,
        scale: at,
        stroke: "#333",
        tickStroke: "#333",
        numTicks: m.xAxis.numTicks || void 0
      },
      (Me) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(rt, { className: "bottom-axis" }, Me.ticks.map((Xe, Tt) => {
        const nt = Xe.index !== 0 ? n.yAxis.tickRotation : 0, zt = Xe.index !== 0 && n.yAxis.tickRotation && n.yAxis.tickRotation > 0 ? "end" : "middle";
        return /* @__PURE__ */ i.createElement(rt, { key: `vx-tick-${Xe.value}-${Tt}`, className: "vx-axis-tick" }, !m.yAxis.hideTicks && /* @__PURE__ */ i.createElement(an, { from: Xe.from, to: Xe.to, stroke: "#333" }), !m.yAxis.hideLabel && /* @__PURE__ */ i.createElement(Et, { x: Xe.to.x, y: Xe.to.y, angle: -nt, verticalAnchor: "start", textAnchor: zt }, s(Xe.value, "left")));
      }), !m.yAxis.hideAxis && /* @__PURE__ */ i.createElement(an, { from: Me.axisFromPoint, to: Me.axisToPoint, stroke: "#333" })), /* @__PURE__ */ i.createElement(rt, null, /* @__PURE__ */ i.createElement(Et, { x: B / 2, y: n.xAxis.labelOffset, stroke: "#333", textAnchor: "middle", verticalAnchor: "start" }, m.xAxis.label)))
    )),
    v === "Deviation Bar" && (($n = n.series) == null ? void 0 : $n.length) === 1 && /* @__PURE__ */ i.createElement(dk, { animatedChart: le, xScale: Pe, yScale: He, width: B, height: U }),
    v === "Paired Bar" && /* @__PURE__ */ i.createElement(yk, { originalWidth: O, width: B, height: U }),
    v === "Scatter Plot" && /* @__PURE__ */ i.createElement(
      ck,
      {
        xScale: Pe,
        yScale: He,
        getXAxisData: Ae,
        getYAxisData: xe,
        xMax: B,
        yMax: U,
        handleTooltipMouseOver: Ot,
        handleTooltipMouseOff: Ft,
        handleTooltipClick: jt,
        tooltipData: Ze,
        showTooltip: ut
      }
    ),
    v === "Box Plot" && /* @__PURE__ */ i.createElement(uk, { xScale: Pe, yScale: He }),
    (v === "Area Chart" && n.visualizationSubType === "regular" || v === "Combo") && /* @__PURE__ */ i.createElement(tk, { xScale: Pe, yScale: He, yMax: U, xMax: B, chartRef: Z, width: B, height: U, handleTooltipMouseOver: Ot, handleTooltipMouseOff: Ft, tooltipData: Ze, showTooltip: ut }),
    (v === "Area Chart" && n.visualizationSubType === "stacked" || v === "Combo") && /* @__PURE__ */ i.createElement(rk, { xScale: Pe, yScale: He, yMax: U, xMax: B, chartRef: Z, width: B, height: U, handleTooltipMouseOver: Ot, handleTooltipMouseOff: Ft, tooltipData: Ze, showTooltip: ut }),
    (v === "Bar" || v === "Combo") && /* @__PURE__ */ i.createElement(
      sk,
      {
        xScale: Pe,
        yScale: He,
        seriesScale: Ye,
        xMax: B,
        yMax: U,
        getXAxisData: Ae,
        getYAxisData: xe,
        animatedChart: le,
        visible: le,
        handleTooltipMouseOver: Ot,
        handleTooltipMouseOff: Ft,
        handleTooltipClick: jt,
        tooltipData: Ze,
        showTooltip: ut,
        chartRef: Z
      }
    ),
    (v === "Line" || v === "Combo") && /* @__PURE__ */ i.createElement(
      sm,
      {
        xScale: Pe,
        yScale: He,
        getXAxisData: Ae,
        getYAxisData: xe,
        xMax: B,
        yMax: U,
        seriesStyle: n.series,
        handleTooltipMouseOver: Ot,
        handleTooltipMouseOff: Ft,
        handleTooltipClick: jt,
        tooltipData: Ze,
        showTooltip: ut,
        chartRef: Z
      }
    ),
    (v === "Forecasting" || v === "Combo") && /* @__PURE__ */ i.createElement(
      hk,
      {
        showTooltip: ut,
        tooltipData: Ze,
        xScale: Pe,
        yScale: He,
        width: B,
        le: !0,
        height: U,
        xScaleNoPadding: it,
        chartRef: Z,
        getXValueFromCoordinate: Rt,
        handleTooltipMouseOver: Ot,
        handleTooltipMouseOff: Ft,
        isBrush: !1
      }
    ),
    n.yAxis.anchors && n.yAxis.anchors.map((Me) => /* @__PURE__ */ i.createElement(an, { strokeDasharray: g(Me.lineStyle), stroke: "rgba(0,0,0,1)", className: "customAnchor", from: { x: 0 + n.yAxis.size, y: He(Me.value) }, to: { x: B, y: He(Me.value) }, display: m.horizontal ? "none" : "block" })),
    v === "Forest Plot" && /* @__PURE__ */ i.createElement(
      gk,
      {
        xScale: Pe,
        yScale: He,
        seriesScale: Ye,
        width: O,
        height: I,
        getXAxisData: Ae,
        getYAxisData: xe,
        animatedChart: le,
        visible: le,
        handleTooltipMouseOver: Ot,
        handleTooltipMouseOff: Ft,
        handleTooltipClick: jt,
        tooltipData: Ze,
        showTooltip: ut,
        chartRef: Z,
        config: n
      }
    ),
    ["Line", "Bar", "Combo", "Area Chart"].includes(n.visualizationType) && !N && /* @__PURE__ */ i.createElement(Kk, { xScaleBrush: st, yScale: He, xMax: B, yMax: U }),
    v !== "Bar" && v !== "Paired Bar" && v !== "Box Plot" && v !== "Area Chart" && v !== "Scatter Plot" && v !== "Deviation Bar" && v !== "Forecasting" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(sm, { xScale: Pe, yScale: He, getXAxisData: Ae, getYAxisData: xe, xMax: B, yMax: U, seriesStyle: n.series })),
    n.yAxis.anchors && n.yAxis.anchors.map((Me, Xe) => {
      let Tt = He(Me.value);
      if (!Me.value)
        return;
      const nt = k === "horizontal" && v === "Bar" ? n.barHeight / 4 : 0;
      if (Tt)
        return (
          // prettier-ignore
          /* @__PURE__ */ i.createElement(
            an,
            {
              key: `yAxis-${Me.value}--${Xe}`,
              strokeDasharray: g(Me.lineStyle),
              stroke: Me.color ? Me.color : "rgba(0,0,0,1)",
              className: "anchor-y",
              from: { x: 0 + _e, y: Tt - nt },
              to: { x: O - n.yAxis.rightAxisSize, y: Tt - nt }
            }
          )
        );
    }),
    n.xAxis.anchors && n.xAxis.anchors.map((Me, Xe) => {
      let Tt = M;
      k === "horizontal" && (Tt = T);
      let nt = Cn(Tt) ? Pe(a(Me.value, !1)) : Pe(Me.value);
      if (nt)
        return (
          // prettier-ignore
          /* @__PURE__ */ i.createElement(
            an,
            {
              key: `xAxis-${Me.value}--${Xe}`,
              strokeDasharray: g(Me.lineStyle),
              stroke: Me.color ? Me.color : "rgba(0,0,0,1)",
              fill: Me.color ? Me.color : "rgba(0,0,0,1)",
              className: "anchor-x",
              from: { x: Number(nt) + Number(_e), y: 0 },
              to: { x: Number(nt) + Number(_e), y: U }
            }
          )
        );
    }),
    n.visualizationType !== "Bar" && n.visualizationType !== "Combo" && /* @__PURE__ */ i.createElement(mh, { xScale: Pe, handleTooltipClick: jt, handleTooltipMouseOff: Ft, handleTooltipMouseOver: Ot, showTooltip: ut, hideTooltip: ht, tooltipData: Ze, yMax: U, width: O }),
    Zt && ut && Ze && n.visual.verticalHoverLine && /* @__PURE__ */ i.createElement(rt, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ i.createElement(an, { from: { x: Ze.dataXPosition - 10, y: 0 }, to: { x: Ze.dataXPosition - 10, y: U }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" })),
    Zt && ut && Ze && n.visual.horizontalHoverLine && /* @__PURE__ */ i.createElement(rt, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: n.yAxis.size ? n.yAxis.size : 0 }, /* @__PURE__ */ i.createElement(an, { from: { x: 0, y: Ze.dataYPosition }, to: { x: B, y: Ze.dataYPosition }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    n.filters && n.filters.values.length === 0 && t.length === 0 && /* @__PURE__ */ i.createElement(Et, { x: Number(n.yAxis.size) + Number(B / 2), y: I / 2 - n.xAxis.size / 2, textAnchor: "middle" }, n.chartMessage.noData),
    n.visualizationType === "Bar" && n.tooltips.singleSeries && n.visual.horizontalHoverLine && /* @__PURE__ */ i.createElement(rt, { key: "tooltipLine-horizontal", className: "horizontal-tooltip-line", left: n.yAxis.size ? n.yAxis.size : 0 }, /* @__PURE__ */ i.createElement(an, { from: { x: 0, y: fe.y }, to: { x: B, y: fe.y }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "horizontal-tooltip-line" })),
    n.visualizationType === "Bar" && n.tooltips.singleSeries && n.visual.verticalHoverLine && /* @__PURE__ */ i.createElement(rt, { key: "tooltipLine-vertical", className: "vertical-tooltip-line" }, /* @__PURE__ */ i.createElement(an, { from: { x: fe.x, y: 0 }, to: { x: fe.x, y: U }, stroke: "black", strokeWidth: 1, pointerEvents: "none", strokeDasharray: "5,5", className: "vertical-tooltip-line" }))
  ), Ze && Object.entries(Ze.data).length > 0 && Pt && ut && Ze.dataYPosition && Ze.dataXPosition && !n.tooltips.singleSeries && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("style", null, `.tooltip {background-color: rgba(255,255,255, ${n.tooltips.opacity / 100}) !important`), /* @__PURE__ */ i.createElement(Ig, { key: Math.random(), className: "tooltip cdc-open-viz-module", left: on, top: un }, /* @__PURE__ */ i.createElement("ul", null, typeof Ze == "object" && Object.entries(Ze.data).map((Me, Xe) => /* @__PURE__ */ i.createElement(yn, { item: Me, key: Xe }))))), me() && /* @__PURE__ */ i.createElement(sy, { id: `cdc-open-viz-tooltip-${m.uniqueId}`, variant: "light", arrowColor: "rgba(0,0,0,0)", className: "tooltip", style: { background: `rgba(255,255,255, ${n.tooltips.opacity / 100})`, color: "black" } }), /* @__PURE__ */ i.createElement("div", { className: "animation-trigger", ref: V })));
};
var Xk = ["id", "markerWidth", "markerHeight", "markerUnits", "children"];
function Bf() {
  return Bf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Bf.apply(this, arguments);
}
function qk(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function py(e) {
  var t = e.id, r = e.markerWidth, n = r === void 0 ? 3 : r, a = e.markerHeight, o = a === void 0 ? 3 : a, f = e.markerUnits, s = f === void 0 ? "userSpaceOnUse" : f, c = e.children, d = qk(e, Xk);
  return /* @__PURE__ */ i.createElement("defs", null, /* @__PURE__ */ i.createElement("marker", Bf({
    id: t,
    markerWidth: n,
    markerHeight: o,
    markerUnits: s
  }, d), c));
}
py.propTypes = {
  id: he.string.isRequired,
  size: he.number,
  markerWidth: he.oneOfType([he.string, he.number]),
  markerHeight: he.oneOfType([he.string, he.number]),
  markerUnits: he.string,
  refX: he.oneOfType([he.string, he.number]),
  refY: he.oneOfType([he.string, he.number]),
  strokeWidth: he.number,
  children: he.node.isRequired
};
var Gk = ["id", "size", "strokeWidth"];
function If() {
  return If = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, If.apply(this, arguments);
}
function Zk(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, o;
  for (o = 0; o < n.length; o++)
    a = n[o], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Qk(e) {
  var t = e.id, r = e.size, n = r === void 0 ? 9 : r, a = e.strokeWidth, o = a === void 0 ? 1 : a, f = Zk(e, Gk), s = n + o * 2, c = n, d = s / 2, g = "0 0, " + n + " " + n / 2 + ", 0 " + n;
  return /* @__PURE__ */ i.createElement(py, If({
    id: t,
    markerWidth: s,
    markerHeight: s,
    refX: c,
    refY: d,
    orient: "auto",
    markerUnits: "strokeWidth",
    fill: "none",
    strokeWidth: o
  }, f), /* @__PURE__ */ i.createElement("g", {
    transform: "translate(" + o + ", " + o + ")"
  }, /* @__PURE__ */ i.createElement("polyline", {
    points: g
  })));
}
const Jk = (e) => {
  var K;
  const { width: t, height: r } = e, { transformedData: n, config: a, parseDate: o, formatDate: f, seriesHighlight: s, formatNumber: c, colorScale: d, handleChartAriaLabels: g } = se.useContext(wt);
  let y = Number(t);
  const { minValue: v, maxValue: E } = Oc(a, n), k = { top: 5, right: 10, bottom: 10, left: 10 }, M = Number(r), T = y - a.runtime.yAxis.size, m = M - k.top - 20, R = (j) => a.runtime.xAxis.type === "date" ? o(j[a.runtime.originalXAxis.dataKey]).getTime() : j[a.runtime.originalXAxis.dataKey], O = (j, te) => j[te];
  let _, N;
  const { max: D, min: I } = a.runtime.yAxis, B = Number(D) >= Number(E), U = Number(I) <= Number(v);
  if (n) {
    let j = Number(I && U ? I : v), te = Number(D && B ? D : Number.MIN_VALUE);
    if (te === Number.MIN_VALUE && (te = E), a.runtime.yAxis.paddingPercent) {
      let H = (te - j) * a.runtime.yAxis.paddingPercent;
      j -= H, te += H;
    }
    let me = n.map((H) => R(H));
    a.runtime.horizontal ? (_ = Xn({
      domain: [j, te],
      range: [0, T]
    }), N = a.runtime.xAxis.type === "date" ? Xn({ domain: [Math.min(...me), Math.max(...me)] }) : Yo({ domain: me, padding: 0.5 }), Yo({
      domain: a.runtime.barSeriesKeys || a.runtime.seriesKeys,
      range: [0, m]
    }), N.rangeRound([0, m])) : (j = j < 0 ? j * 1.11 : j, N = Xn({
      domain: [j, te],
      range: [m - k.bottom, k.top]
    }), _ = Yo({
      domain: me,
      range: [k.left, y - k.right]
    }), Yo({
      domain: a.runtime.barSeriesKeys || a.runtime.seriesKeys,
      range: [0, T]
    }));
  }
  const q = [_.domain()[0], _.domain()[_.domain().length - 1]];
  return /* @__PURE__ */ i.createElement(zr, { component: "SparkLine" }, /* @__PURE__ */ i.createElement("svg", { role: "img", "aria-label": g(a), width: t, height: 100, className: "sparkline", tabIndex: 0 }, /* @__PURE__ */ i.createElement("title", null, `Spark line graphic with the title ${a.title ? a.title : "No Title Found"}`), ((K = a.runtime.lineSeriesKeys) == null ? void 0 : K.length) > 0 ? a.runtime.lineSeriesKeys : a.runtime.seriesKeys.map((j, te) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    rt,
    {
      style: { width: y },
      className: "sparkline-group",
      key: `series-${j}`,
      opacity: a.legend.behavior === "highlight" && s.length > 0 && s.indexOf(j) === -1 ? 0.5 : 1,
      display: a.legend.behavior === "highlight" || s.length === 0 || s.indexOf(j) !== -1 ? "block" : "none"
    },
    n.map((me, H) => /* @__PURE__ */ i.createElement(rt, { key: `series-${j}-point-${H}` }, /* @__PURE__ */ i.createElement(Et, { display: a.labels ? "block" : "none", x: _(R(me)), y: N(O(me, j)), fill: d ? d(a.runtime.seriesLabels ? a.runtime.seriesLabels[j] : j) : "#000", textAnchor: "middle" }, c(me[j])))),
    /* @__PURE__ */ i.createElement(
      fa,
      {
        curve: wc,
        data: n,
        x: (me) => _(R(me)),
        y: (me) => N(O(me, j)),
        stroke: d ? d(a.runtime.seriesLabels ? a.runtime.seriesLabels[j] : j) : "#000",
        strokeWidth: 2,
        strokeOpacity: 1,
        shapeRendering: "geometricPrecision",
        markerEnd: `url(#arrow--${te})`
      }
    ),
    /* @__PURE__ */ i.createElement(Qk, { id: `arrow--${te}`, refX: 2, size: 6, markerEnd: `url(#arrow--${te})`, strokeOpacity: 1, fillOpacity: 1, fill: d ? d(a.runtime.seriesLabels ? a.runtime.seriesLabels[j] : j) : "#000" })
  ), /* @__PURE__ */ i.createElement(
    Hu,
    {
      top: m + k.top,
      hideAxisLine: !0,
      hideTicks: !0,
      scale: _,
      tickValues: q,
      tickFormat: (me) => a.xAxis.type === "date" ? f(me) : null,
      stroke: "black",
      tickStroke: "black",
      tickLabelProps: () => ({
        fill: "black",
        fontSize: 11,
        textAnchor: "middle"
      })
    }
  )))));
}, ew = se.forwardRef((e, t) => {
  const {
    config: r,
    colorScale: n,
    seriesHighlight: a,
    highlight: o,
    tableData: f,
    highlightReset: s,
    transformedData: c,
    currentViewport: d
  } = se.useContext(wt);
  if (!r.legend)
    return null;
  const g = Xg(r, f, c, n);
  return !["Box Plot", "Pie"].includes(r.visualizationType) && /* @__PURE__ */ i.createElement(Yg, { ref: t, skipId: e.skipId || "legend", config: r, colorScale: n, seriesHighlight: a, highlight: o, highlightReset: s, currentViewport: d, formatLabels: g });
}), Zd = {
  type: "chart",
  debugSvg: !1,
  chartMessage: {
    noData: "No Data Available"
  },
  title: "",
  showTitle: !0,
  showDownloadMediaButton: !1,
  theme: "theme-blue",
  animate: !1,
  fontSize: "medium",
  lineDatapointStyle: "hover",
  lineDatapointColor: "Same as Line",
  barHasBorder: "false",
  isLollipopChart: !1,
  lollipopShape: "circle",
  lollipopColorStyle: "two-tone",
  visualizationSubType: "regular",
  barStyle: "",
  roundingStyle: "standard",
  tipRounding: "top",
  isResponsiveTicks: !1,
  general: {
    showDownloadButton: !1
  },
  padding: {
    left: 5,
    right: 5
  },
  suppressedData: [],
  preliminaryData: [],
  yAxis: {
    hideAxis: !1,
    displayNumbersOnBar: !1,
    hideLabel: !1,
    hideTicks: !1,
    size: 50,
    gridLines: !1,
    enablePadding: !1,
    min: "",
    max: "",
    labelColor: "#333",
    tickLabelColor: "#333",
    tickColor: "#333",
    rightHideAxis: !0,
    rightAxisSize: 0,
    rightLabel: "",
    rightLabelOffsetSize: 0,
    rightAxisLabelColor: "#333",
    rightAxisTickLabelColor: "#333",
    rightAxisTickColor: "#333",
    numTicks: "",
    axisPadding: 0,
    scalePadding: 10,
    tickRotation: 0,
    anchors: []
  },
  boxplot: {
    plots: [],
    borders: "true",
    firstQuartilePercentage: 25,
    thirdQuartilePercentage: 75,
    boxWidthPercentage: 40,
    plotOutlierValues: !1,
    plotNonOutlierValues: !0,
    legend: {
      showHowToReadText: !1,
      howToReadText: ""
    },
    labels: {
      q1: "Lower Quartile",
      q2: "q2",
      q3: "Upper Quartile",
      q4: "q4",
      minimum: "Minimum",
      maximum: "Maximum",
      mean: "Mean",
      median: "Median",
      sd: "Standard Deviation",
      iqr: "Interquartile Range",
      total: "Total",
      outliers: "Outliers",
      values: "Values",
      lowerBounds: "Lower Bounds",
      upperBounds: "Upper Bounds"
    }
  },
  topAxis: {
    hasLine: !1
  },
  isLegendValue: !1,
  barThickness: 0.35,
  barHeight: 25,
  barSpace: 15,
  heights: {
    vertical: 300,
    horizontal: 750
  },
  xAxis: {
    sortDates: !1,
    anchors: [],
    type: "categorical",
    showTargetLabel: !0,
    targetLabel: "Target",
    hideAxis: !1,
    hideLabel: !1,
    hideTicks: !1,
    size: 75,
    tickRotation: 0,
    min: "",
    max: "",
    labelColor: "#333",
    tickLabelColor: "#333",
    tickColor: "#333",
    numTicks: "",
    labelOffset: 65,
    axisPadding: 200,
    target: 0,
    maxTickRotation: 0
  },
  table: {
    label: "Data Table",
    expanded: !0,
    limitHeight: !1,
    height: "",
    caption: "",
    showDownloadUrl: !1,
    showDataTableLink: !0,
    indexLabel: "",
    download: !1,
    showVertical: !0,
    dateDisplayFormat: ""
  },
  orientation: "vertical",
  color: "pinkpurple",
  columns: {
    // start with a blank list
  },
  legend: {
    hide: !1,
    behavior: "isolate",
    axisAlign: !0,
    singleRow: !0,
    colorCode: "",
    reverseLabelOrder: !1,
    description: "",
    dynamicLegend: !1,
    dynamicLegendDefaultText: "Show All",
    dynamicLegendItemLimit: 5,
    dynamicLegendItemLimitMessage: "Dynamic Legend Item Limit Hit.",
    dynamicLegendChartMessage: "Select Options from the Legend",
    lineMode: !1,
    verticalSorted: !1,
    highlightOnHover: !1,
    seriesHighlight: []
  },
  brush: {
    height: 25,
    data: [],
    active: !1
  },
  exclusions: {
    active: !1,
    keys: []
  },
  palette: "qualitative-bold",
  isPaletteReversed: !1,
  twoColor: {
    palette: "monochrome-1",
    isPaletteReversed: !1
  },
  labels: !1,
  dataFormat: {
    commas: !1,
    prefix: "",
    suffix: "",
    abbreviated: !1,
    bottomSuffix: "",
    bottomPrefix: "",
    bottomAbbreviated: !1
  },
  confidenceKeys: {},
  visual: {
    border: !0,
    accent: !0,
    background: !0,
    verticalHoverLine: !1,
    horizontalHoverLine: !1
  },
  useLogScale: !1,
  filterBehavior: "Filter Change",
  highlightedBarValues: [],
  series: [],
  tooltips: {
    opacity: 90,
    singleSeries: !1,
    dateDisplayFormat: ""
  },
  forestPlot: {
    startAt: 0,
    colors: {
      line: "",
      shape: ""
    },
    lineOfNoEffect: {
      show: !0
    },
    type: "",
    pooledResult: {
      diamondHeight: 5,
      column: ""
    },
    estimateField: "",
    estimateRadius: "",
    shape: "square",
    rowHeight: 20,
    description: {
      show: !0,
      text: "description",
      location: 0
    },
    result: {
      show: !0,
      text: "result",
      location: 100
    },
    radius: {
      min: 2,
      max: 10,
      scalingColumn: ""
    },
    regression: {
      lower: 0,
      upper: 0,
      estimateField: 0
    },
    leftWidthOffset: 0,
    rightWidthOffset: 0,
    showZeroLine: !1,
    leftLabel: "",
    rightLabel: ""
  },
  area: {
    isStacked: !1
  },
  sankey: {
    title: {
      defaultColor: "black"
    },
    iterations: 1,
    rxValue: 0.9,
    overallSize: {
      width: 900,
      height: 700
    },
    margin: {
      margin_y: 25,
      margin_x: 0
    },
    nodeSize: {
      nodeWidth: 26,
      nodeHeight: 40
    },
    nodePadding: 55,
    nodeFontColor: "black",
    nodeColor: {
      default: "#ff8500",
      inactive: "#808080"
    },
    linkColor: {
      default: "#ffc900",
      inactive: "#D3D3D3"
    },
    opacity: {
      nodeOpacityDefault: 1,
      nodeOpacityInactive: 0.1,
      LinkOpacityDefault: 1,
      LinkOpacityInactive: 0.1
    },
    storyNodeFontColor: "#006778",
    storyNodeText: [],
    nodeValueStyle: {
      textBefore: "(",
      textAfter: ")"
    },
    data: []
  }
}, Vu = (e) => /* @__PURE__ */ se.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", ...e }, /* @__PURE__ */ se.createElement("path", { fill: "currentColor", d: "M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" })), tw = ({ name: e }) => {
  var s, c, d, g, y;
  const { config: t, rawData: r, updateConfig: n } = se.useContext(wt);
  if (t.visualizationType !== "Forest Plot")
    return;
  const a = (v) => {
    v.orientation === "horizontal" && (v.labels = !1), v.table.show === void 0 && (v.table.show = !isDashboard), v.visualizationType === "Combo" && (v.orientation = "vertical");
  }, o = (v = !0) => {
    let E = {};
    return r.forEach((k) => {
      Object.keys(k).forEach((M) => E[M] = !0);
    }), v && Object.keys(E).forEach((k) => {
      (t.series && t.series.filter((M) => M.dataKey === k).length > 0 || t.confidenceKeys && Object.keys(t.confidenceKeys).includes(k)) && delete E[k];
    }), Object.keys(E);
  }, f = (v, E, k, M) => {
    if (v === "boxplot" && E === "legend") {
      n({
        ...t,
        [v]: {
          ...t[v],
          [E]: {
            ...t.boxplot[E],
            [k]: M
          }
        }
      });
      return;
    }
    if (v === "boxplot" && E === "labels") {
      n({
        ...t,
        [v]: {
          ...t[v],
          [E]: {
            ...t.boxplot[E],
            [k]: M
          }
        }
      });
      return;
    }
    if (v === "forestPlot" && E) {
      let O = {
        ...t,
        [v]: {
          ...t[v],
          [E]: {
            ...t.forestPlot[E],
            [k]: M
          }
        }
      };
      n(O);
      return;
    }
    if (v === "columns" && E !== "" && k !== "") {
      n({
        ...t,
        [v]: {
          ...t[v],
          [E]: {
            ...t[v][E],
            [k]: M
          }
        }
      });
      return;
    }
    if (v === null && E === null) {
      let O = { ...t, [k]: M };
      a(O), n(O);
      return;
    }
    const T = Array.isArray(t[v]);
    let m = T ? [...t[v], M] : { ...t[v], [k]: M };
    E !== null && (T ? (m = [...t[v]], m[E] = { ...m[E], [k]: M }) : typeof M == "string" ? m[E] = M : m = { ...t[v], [E]: { ...t[v][E], [k]: M } });
    let R = { ...t, [v]: m };
    a(R), n(R);
  };
  return /* @__PURE__ */ i.createElement(_n, null, /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement(Fn, null, e, (!t.forestPlot.estimateField || !t.forestPlot.upper || !t.forestPlot.lower) && /* @__PURE__ */ i.createElement(Vu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(zn, null, /* @__PURE__ */ i.createElement(
    Ct,
    {
      value: t.xAxis.dataKey || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Study Column",
      initial: "Select",
      required: !0,
      updateField: f,
      options: o(!1),
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
    }
  ), /* @__PURE__ */ i.createElement(
    Ct,
    {
      value: t.forestPlot.type,
      label: "Forest Plot Type",
      initial: "Select",
      required: !0,
      onChange: (v) => {
        v.target.value !== "" && v.target.value !== "Select" && n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            type: v.target.value
          }
        }), v.target.value = "";
      },
      options: ["Linear", "Logarithmic"],
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Linear - Typically used for continuous outcomes. Line of no effect is positioned on 0 (zero) ", /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("br", null), " Logarithmic - Typically used for binary outcomes such as risk ratios and odds ratios. Line of no effect is positioned on 1.")))
    }
  ), /* @__PURE__ */ i.createElement(Qe, { type: "text", value: ((s = t.forestPlot) == null ? void 0 : s.title) || "", updateField: f, section: "forestPlot", fieldName: "title", label: "Plot Title" }), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("h4", null, "Column Settings"), /* @__PURE__ */ i.createElement(
    Ct,
    {
      value: t.forestPlot.estimateField,
      label: "Point Estimate Column",
      initial: t.forestPlot.estimateField || "Select",
      required: !0,
      onChange: (v) => {
        v.target.value !== "" && v.target.value !== "Select" && n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            estimateField: v.target.value
          }
        }), v.target.value = "";
      },
      options: o(!1)
    }
  ), /* @__PURE__ */ i.createElement(
    Ct,
    {
      value: t.forestPlot.shape,
      label: "Point Estimate Shape",
      onChange: (v) => {
        v.target.value !== "" && v.target.value !== "Select" && n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            shape: v.target.value
          }
        }), v.target.value = "";
      },
      options: ["text", "circle", "square"]
    }
  ), /* @__PURE__ */ i.createElement(
    Ct,
    {
      value: t.forestPlot.lower,
      label: "Lower CI Column",
      required: !0,
      initial: t.forestPlot.lower || "Select",
      onChange: (v) => {
        v.target.value !== "" && v.target.value !== "Select" && n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            lower: v.target.value
          }
        }), v.target.value = "";
      },
      options: o(!1)
    }
  ), /* @__PURE__ */ i.createElement(
    Ct,
    {
      value: t.forestPlot.upper,
      label: "Upper CI Column",
      initial: t.forestPlot.upper || "Select",
      required: !0,
      onChange: (v) => {
        v.target.value !== "" && v.target.value !== "Select" && n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            upper: v.target.value
          }
        }), v.target.value = "";
      },
      options: o(!1)
    }
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Pooled Result Column", /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: t.forestPlot.pooledResult.column || "",
      label: "Pooled Result Row",
      onChange: (v) => {
        n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            pooledResult: {
              ...t.forestPlot.pooledResult,
              column: v.target.value
            }
          }
        }), v.target.value = "";
      }
    }
  ))), /* @__PURE__ */ i.createElement(yt, { value: ((d = (c = t.forestPlot) == null ? void 0 : c.lineOfNoEffect) == null ? void 0 : d.show) || !1, section: "forestPlot", subsection: "lineOfNoEffect", fieldName: "show", label: "Show Line of No Effect", updateField: f }), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("h4", null, "Width Settings"), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Left (%)"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "number",
      min: 0,
      max: 100,
      value: t.forestPlot.leftWidthOffset || 0,
      onChange: (v) => {
        n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            leftWidthOffset: v.target.value
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Left Mobile(%)"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "number",
      min: 0,
      max: 100,
      value: t.forestPlot.leftWidthOffsetMobile || 0,
      onChange: (v) => {
        n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            leftWidthOffsetMobile: v.target.value
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Right (%)"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "number",
      min: 0,
      max: 100,
      value: t.forestPlot.rightWidthOffset || 0,
      onChange: (v) => {
        n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            rightWidthOffset: v.target.value
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Chart Offset Right Mobile(%)"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "number",
      min: 0,
      max: 100,
      value: t.forestPlot.rightWidthOffsetMobile || 0,
      onChange: (v) => {
        n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            rightWidthOffsetMobile: v.target.value
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement(Qe, { type: "number", min: 20, max: 45, value: t.forestPlot.rowHeight ? t.forestPlot.rowHeight : 10, updateField: f, section: "forestPlot", fieldName: "rowHeight", label: "Row Height", placeholder: "10" }), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("h4", null, "Labels Settings"), /* @__PURE__ */ i.createElement(Qe, { type: "text", value: ((g = t.forestPlot) == null ? void 0 : g.leftLabel) || "", updateField: f, section: "forestPlot", fieldName: "leftLabel", label: "Left Label" }), /* @__PURE__ */ i.createElement(Qe, { type: "text", value: ((y = t.forestPlot) == null ? void 0 : y.rightLabel) || "", updateField: f, section: "forestPlot", fieldName: "rightLabel", label: "Right Label" }), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("hr", null), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement(
    Ct,
    {
      value: t.forestPlot.radius.scalingColumn,
      label: "Weight Column",
      initial: "Select",
      onChange: (v) => {
        v.target.value !== "" && v.target.value !== "Select" && n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            radius: {
              ...t.forestPlot.radius,
              scalingColumn: v.target.value
            }
          }
        }), v.target.value = "";
      },
      options: o(!1)
    }
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Radius Minimum Size"), /* @__PURE__ */ i.createElement(
    "input",
    {
      min: 3,
      max: 6,
      value: t.forestPlot.radius.min || 3,
      onChange: (v) => {
        n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            radius: {
              ...t.forestPlot.radius,
              min: Number(v.target.value)
            }
          }
        });
      },
      type: "number",
      label: "Radius Minimum",
      placeholder: " 1"
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Radius Maximum Size"), /* @__PURE__ */ i.createElement(
    "input",
    {
      min: 7,
      max: 10,
      value: t.forestPlot.radius.max,
      onChange: (v) => {
        n({
          ...t,
          forestPlot: {
            ...t.forestPlot,
            radius: {
              ...t.forestPlot.radius,
              max: Number(v.target.value)
            }
          }
        });
      },
      type: "number",
      label: "Radius Minimum",
      placeholder: " 1"
    }
  ))));
}, al = i.createContext(), nw = (e) => {
  const { updateConfig: t, config: r, rawData: n } = se.useContext(wt), { getColumns: a, selectComponent: o } = e, f = ["Line", "dashed-sm", "dashed-md", "dashed-lg"], s = (c, d, g) => {
    let y = [...r.series];
    if (y[c][g] = d, g === "type" && d === "Bar" && (y[c].axis = "Left"), y[c].type === "Forecasting") {
      let v = Array.from(new Set(n.map((k) => k[y[c].dataKey]))), E = [];
      v.forEach((k) => {
        E.push({ key: k });
      }), y[c].stages = E, y[c].stageColumn = y[c].dataKey;
    }
    t({ ...r, series: y });
  };
  return /* @__PURE__ */ i.createElement(al.Provider, { value: { updateSeries: s, supportedRightAxisTypes: f, getColumns: a, selectComponent: o } }, e.children);
}, rw = (e) => {
  const { config: t, updateConfig: r } = se.useContext(wt), { series: n, index: a } = e;
  if (!(() => {
    let c = !1;
    return t.visualizationSubType === "stacked" || ["Line", "dashed-sm", "dashed-md", "dashed-lg", "Area Chart"].some((g) => g.includes(n.type)) && (c = !0), c;
  })())
    return;
  const f = (c, d) => {
    let g = [...t.series];
    g[c].lineType = d, r({ ...t, series: g });
  };
  let s = [];
  return Object.keys(xc).map((c) => s.push(xc[c])), /* @__PURE__ */ i.createElement(
    Wa,
    {
      initial: "Select an option",
      value: n.lineType ? n.lineType : "curveLinear",
      label: "Series Line Type",
      onChange: (c) => {
        f(a, c.target.value);
      },
      options: s
    }
  );
}, aw = (e) => {
  const { config: t } = se.useContext(wt), { updateSeries: r } = se.useContext(al), { index: n, series: a } = e, o = () => {
    if (t.visualizationType === "Combo")
      return {
        Bar: "Bar",
        Line: "Line",
        "dashed-sm": "Small Dashed",
        "dashed-md": "Medium Dashed",
        "dashed-lg": "Large Dashed",
        "Area Chart": "Area Chart",
        Forecasting: "Forecasting"
      };
    if (t.visualizationType === "Line")
      return {
        Line: "Line",
        "dashed-sm": "Small Dashed",
        "dashed-md": "Medium Dashed",
        "dashed-lg": "Large Dashed"
      };
  };
  if (["Line", "Combo"].includes(t.visualizationType))
    return /* @__PURE__ */ i.createElement(
      Wa,
      {
        initial: "Select an option",
        value: a.type,
        label: "Series Type",
        onChange: (f) => {
          r(n, f.target.value, "type");
        },
        options: o()
      }
    );
}, iw = (e) => {
  const { config: t, updateConfig: r, rawData: n } = se.useContext(wt), { updateSeries: a, getColumns: o } = se.useContext(al), { index: f, series: s } = e;
  return /* @__PURE__ */ i.createElement(
    Wa,
    {
      initial: "Select an option",
      value: s.stageColumn,
      label: "Add Forecasting Stages",
      onChange: (c) => {
        let d = [], g = new Set(n == null ? void 0 : n.map((v) => v[c.target.value]));
        g = Array.from(g), g = g.filter((v) => v !== void 0), g.forEach((v) => d.push({ key: v }));
        const y = [...t.series];
        y[f] = { ...y[f], stages: d, stageColumn: c.target.value }, r({
          ...t,
          series: y
        });
      },
      options: o(!1)
    }
  );
}, ow = (e) => {
  const { config: t, rawData: r } = se.useContext(wt), { updateSeries: n } = se.useContext(al), { index: a, series: o } = e;
  if (o.type !== "Forecasting" || !r || !o.stageColumn)
    return;
  let f = new Set(r.map((s) => s[o.stageColumn]));
  return f = Array.from(f), f = f.filter((s) => s !== void 0), /* @__PURE__ */ i.createElement(
    Wa,
    {
      initial: "Select an option",
      value: o.stageItem,
      label: "Forecasting Item Column",
      onChange: (s) => {
        n(a, s.target.value, "stageItem");
      },
      options: f
    }
  );
}, lw = (e) => {
  const { config: t } = se.useContext(wt), { updateSeries: r, supportedRightAxisTypes: n } = se.useContext(al), { index: a, series: o } = e;
  if (!(t.visualizationType !== "Combo" || !o) && n.includes(o.type))
    return /* @__PURE__ */ i.createElement(
      Wa,
      {
        initial: "Select an option",
        value: o.axis ? o.axis : "Left",
        label: "Series Axis",
        onChange: (f) => {
          r(a, f.target.value, "axis");
        },
        options: {
          Left: "Left",
          Right: "Right"
        }
      }
    );
}, sw = (e) => {
  var o;
  const { config: t, updateConfig: r } = se.useContext(wt), { index: n, series: a } = e;
  if (a.type === "Forecasting" && a)
    return (o = a == null ? void 0 : a.stages) == null ? void 0 : o.map((f, s) => {
      var c, d, g, y;
      return /* @__PURE__ */ i.createElement(
        Wa,
        {
          key: `${f}--${s}`,
          initial: "Select an option",
          value: (d = (c = t.series) == null ? void 0 : c[n].stages) != null && d[s].color ? (y = (g = t.series) == null ? void 0 : g[n].stages) == null ? void 0 : y[s].color : "Select",
          label: `${f.key} Series Color`,
          onChange: (v) => {
            const E = [...t.series], k = E[n].stages;
            k[s].color = v.target.value, E[n] = { ...E[n], stages: k }, r({
              ...t,
              series: E
            });
          },
          options: Object.keys(Uu)
        }
      );
    });
}, uw = (e) => {
  var f;
  const { config: t, updateConfig: r } = se.useContext(wt), { series: n, index: a } = e, { getColumns: o } = se.useContext(al);
  if (n.type === "Forecasting")
    return /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Confidence Interval Groups"), /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement(Ni, { allowZeroExpanded: !0 }, (f = n == null ? void 0 : n.confidenceIntervals) == null ? void 0 : f.map((s, c) => {
      const d = s.showInTooltip ? s.showInTooltip : !1, g = (y, v, E) => {
        y.preventDefault();
        let k = [...t.series];
        k[v].confidenceIntervals[E].showInTooltip = !d, r({
          ...t,
          series: k
        });
      };
      return /* @__PURE__ */ i.createElement(_n, { className: "series-item series-item--chart", key: `${c}` }, /* @__PURE__ */ i.createElement(Nn, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Fn, { className: "accordion__button accordion__button" }, "Group ", c + 1, /* @__PURE__ */ i.createElement(
        "button",
        {
          className: "series-list__remove",
          onClick: (y) => {
            y.preventDefault();
            const v = [...t.series[a].confidenceIntervals];
            v.splice(c, 1);
            const E = [...t.series];
            E[a] = { ...E[a], confidenceIntervals: [...v] }, r({
              ...t,
              series: E
            });
          }
        },
        "Remove"
      )))), /* @__PURE__ */ i.createElement(zn, null, /* @__PURE__ */ i.createElement("div", { className: "input-group" }, /* @__PURE__ */ i.createElement("label", { htmlFor: "showInTooltip" }, "Show In Tooltip"), /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox--small", onClick: (y) => g(y, a, c) }, /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, d && /* @__PURE__ */ i.createElement(Pm, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ i.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: "showInTooltip", checked: d || !1, readOnly: !0 }))), /* @__PURE__ */ i.createElement(
        Wa,
        {
          initial: "Select an option",
          value: t.series[a].confidenceIntervals[c].low ? t.series[a].confidenceIntervals[c].low : "Select",
          label: "Low Confidence Interval",
          onChange: (y) => {
            const v = [...t.series[a].confidenceIntervals];
            v[c].low = y.target.value;
            const E = [...t.series];
            E[a] = { ...E[a], confidenceIntervals: v }, r({
              ...t,
              series: E
            });
          },
          options: o()
        }
      ), /* @__PURE__ */ i.createElement(
        Wa,
        {
          initial: "Select an option",
          value: t.series[a].confidenceIntervals[c].high ? t.series[a].confidenceIntervals[c].high : "Select",
          label: "High Confidence Interval",
          onChange: (y) => {
            const v = [...t.series[a].confidenceIntervals];
            v[c].high = y.target.value;
            const E = [...t.series];
            E[a] = { ...E[a], confidenceIntervals: v }, r({
              ...t,
              series: E
            });
          },
          options: o()
        }
      )));
    })), /* @__PURE__ */ i.createElement(
      "button",
      {
        className: "btn full-width",
        onClick: (s) => {
          s.preventDefault();
          let c = null;
          t.series[a].confidenceIntervals ? c = [...t.series[a].confidenceIntervals] : c = [];
          const d = [...t.series];
          d[a] = { ...d[a], confidenceIntervals: [...c, { high: "", low: "" }] }, r({
            ...t,
            series: d
          });
        }
      },
      "Add Confidence Interval Group"
    )));
}, cw = (e) => {
  const { series: t, index: r } = e, { config: n, updateConfig: a } = se.useContext(wt);
  if (!["Line", "Combo", "dashed-sm", "dashed-md", "dashed-lg"].includes(t.type))
    return;
  const f = (s, c, d, g) => {
    let y = [...n.series], v = { ...n.runtime.seriesLabels };
    y[s].weight = c && Math.max(Number(d), Math.min(Number(g), Number(c))), v[y[s].dataKey] = y[s].weight ? y[s].weight : y[s].dataKey;
    const E = {
      ...n,
      series: y,
      runtime: {
        ...n.runtime,
        seriesLabels: v
      }
    };
    a(E);
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", { htmlFor: "series-weight" }, "Line Weight"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "number",
      key: `series-weight-${r}`,
      value: t.weight ? t.weight : "",
      min: "1",
      max: "9",
      onChange: (s) => {
        f(r, s.target.value, s.target.min, s.target.max);
      }
    }
  ));
}, dw = (e) => {
  const { series: t, index: r } = e, { config: n, updateConfig: a } = se.useContext(wt);
  if (!["Bar", "Line", "Area Chart", "Combo", "Deviation Bar", "Paired Bar", "Scatter Plot", "dashed-sm", "dashed-md", "dashed-lg"].includes(t.type))
    return;
  const f = (s, c) => {
    let d = [...n.series], g = { ...n.runtime.seriesLabels };
    d[s].name = c, g[d[s].dataKey] = d[s].name ? d[s].name : d[s].dataKey;
    let y = {
      ...n,
      series: d,
      runtime: {
        ...n.runtime,
        seriesLabels: g
      }
    };
    a(y);
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", { htmlFor: "series-name" }, "Series Name"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      key: `series-name-${r}`,
      value: t.name ? t.name : "",
      onChange: (s) => {
        f(r, s.target.value);
      }
    }
  ));
}, fw = (e) => {
  const { series: t, index: r } = e, { config: n, updateConfig: a } = se.useContext(wt);
  if (["Paired Bar", "Scatter Plot", "Deviation Bar"].includes(n.visualizationType))
    return;
  const o = (f) => {
    let s = [...n.series];
    s[f].tooltip && s[f].tooltip, s[f].tooltip = !s[f].tooltip, a({
      ...n,
      series: s
    });
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("div", { className: "input-group" }, /* @__PURE__ */ i.createElement("label", { htmlFor: `series-tooltip--${r}` }, "Show In Tooltip"), /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox--small", onClick: (f) => o(r) }, /* @__PURE__ */ i.createElement("div", { className: "cove-input__checkbox-box custom-color", style: { backgroundColor: "" } }, t.tooltip && /* @__PURE__ */ i.createElement(Pm, { className: "", style: { fill: "#025eaa" } })), /* @__PURE__ */ i.createElement("input", { className: "cove-input--hidden", type: "checkbox", name: `series-tooltip--${r}`, checked: t.tooltip ? t.tooltip : !1, readOnly: !0 }))));
}, hw = (e) => {
  const { config: t, updateConfig: r } = se.useContext(wt), { series: n, index: a } = e, o = (s) => {
    let c = [...t.series], d = -1;
    for (let g = 0; g < c.length; g++)
      if (c[g].dataKey === s) {
        d = g;
        break;
      }
    if (d !== -1) {
      c.splice(d, 1);
      let g = { ...t, series: c };
      c.length === 0 && delete g.series, r(g);
    }
    t.visualizationType === "Paired Bar" && r({
      ...t,
      series: []
    });
  }, f = (s, c, d) => {
    s.preventDefault(), o(c.dataKey);
  };
  return t.series && t.series.length > 1 && /* @__PURE__ */ i.createElement("button", { className: "series-list__remove", onClick: (s) => f(s, n) }, "Remove");
}, my = (e) => {
  const { config: t } = se.useContext(wt), { series: r, getItemStyle: n, sortableItemStyles: a, chartsWithOptions: o, index: f } = e;
  return /* @__PURE__ */ i.createElement(Em, { key: r.dataKey, draggableId: `draggableFilter-${r.dataKey}`, index: f }, (s, c) => /* @__PURE__ */ i.createElement("div", { key: f, className: c.isDragging ? "currently-dragging" : "", style: n(c.isDragging, s.draggableProps.style, a), ref: s.innerRef, ...s.draggableProps, ...s.dragHandleProps }, /* @__PURE__ */ i.createElement(Ni, { allowZeroExpanded: !0 }, /* @__PURE__ */ i.createElement(_n, { className: "series-item series-item--chart" }, /* @__PURE__ */ i.createElement(Nn, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(Fn, { className: o.includes(t.visualizationType) ? "accordion__button" : "accordion__button hide-arrow" }, /* @__PURE__ */ i.createElement(kt, { display: "move", size: 15, style: { cursor: "default" } }), r.dataKey, /* @__PURE__ */ i.createElement(Xr.Button.Remove, { series: r, index: f }))), o.includes(t.visualizationType) && /* @__PURE__ */ i.createElement(zn, null, /* @__PURE__ */ i.createElement(Xr.Input.Name, { series: r, index: f }), /* @__PURE__ */ i.createElement(Xr.Input.Weight, { series: r, index: f }), /* @__PURE__ */ i.createElement(Xr.Dropdown.SeriesType, { series: r, index: f }), /* @__PURE__ */ i.createElement(Xr.Dropdown.AxisPosition, { series: r, index: f }), /* @__PURE__ */ i.createElement(Xr.Dropdown.LineType, { series: r, index: f }), /* @__PURE__ */ i.createElement(Xr.Dropdown.ForecastingColor, { series: r, index: f }), /* @__PURE__ */ i.createElement(Xr.Dropdown.ConfidenceInterval, { series: r, index: f }), /* @__PURE__ */ i.createElement(Xr.Checkbox.DisplayInTooltip, { series: r, index: f }))))));
}, pw = (e) => {
  const { series: t, getItemStyle: r, sortableItemStyles: n, chartsWithOptions: a } = e;
  return t.map((o, f) => /* @__PURE__ */ i.createElement(my, { getItemStyle: r, sortableItemStyles: n, chartsWithOptions: a, series: o, index: f, key: `series-list-${f}` }));
}, Xr = {
  Wrapper: nw,
  Dropdown: {
    SeriesType: aw,
    AxisPosition: lw,
    ConfidenceInterval: uw,
    LineType: rw,
    ForecastingStage: iw,
    ForecastingColumn: ow,
    ForecastingColor: sw
  },
  Input: {
    Name: dw,
    Weight: cw
  },
  Checkbox: {
    DisplayInTooltip: fw
  },
  Button: {
    Remove: hw
  },
  Item: my,
  List: pw
}, mw = se.memo(({ config: e, updateConfig: t }) => {
  let r = (c, d, g) => {
    let y = [];
    e.regions && (y = [...e.regions]), y[g][c] = d, t({ ...e, regions: y });
  }, n = (c, d, g, y, v) => r(g, y, v), a = (c) => {
    let d = [];
    e.regions && (d = [...e.regions]), d.splice(c, 1), t({ ...e, regions: d });
  }, o = () => {
    let c = [];
    e.regions && (c = [...e.regions]), c.push({}), t({ ...e, regions: c });
  };
  const f = ["Fixed", "Previous Days"], s = ["Last Date", "Fixed"];
  return /* @__PURE__ */ i.createElement(i.Fragment, null, e.regions && e.regions.map(({ label: c, color: d, from: g, to: y, background: v, range: E = "Custom" }, k) => {
    var M;
    return /* @__PURE__ */ i.createElement("div", { className: "edit-block", key: `region-${k}` }, /* @__PURE__ */ i.createElement(
      "button",
      {
        type: "button",
        className: "remove-column",
        onClick: (T) => {
          T.preventDefault(), a(k);
        }
      },
      "Remove"
    ), /* @__PURE__ */ i.createElement(Qe, { value: c, label: "Region Label", fieldName: "label", i: k, updateField: n }), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(Qe, { value: d, label: "Text Color", fieldName: "color", updateField: (T, m, R, O) => r(R, O, k) }), /* @__PURE__ */ i.createElement(Qe, { value: v, label: "Background", fieldName: "background", updateField: (T, m, R, O) => r(R, O, k) })), /* @__PURE__ */ i.createElement(
      Ct,
      {
        value: e.regions[k].fromType ?? "Fixed",
        label: "Minimum Region Type",
        initial: "Select",
        required: !0,
        onChange: (T) => {
          if (T.target.value !== "" && T.target.value !== "Select") {
            const m = [...e.regions];
            m[k].fromType = T.target.value, t({
              ...e,
              regions: m
            });
          }
          T.target.value = "";
        },
        options: f
      }
    ), (e.regions[k].fromType === "Fixed" || e.regions[k].fromType === "Previous Days" || !e.regions[k].fromType) && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
      Qe,
      {
        value: g,
        label: e.regions[k].fromType === "Fixed" || !((M = e.regions[k]) != null && M.fromType) ? "From Value" : "Previous Number of Days",
        fieldName: "from",
        updateField: (T, m, R, O) => r(R, O, k),
        tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "When using categorical (linear scale) match the data set value. When using date (linear / date time scale) match the x-axis value.")))
      }
    )), /* @__PURE__ */ i.createElement(
      Ct,
      {
        value: e.regions[k].toType ?? "Fixed",
        label: "Maximum Region Type",
        initial: "Select",
        required: !0,
        onChange: (T) => {
          if (T.target.value !== "" && T.target.value !== "Select") {
            const m = [...e.regions];
            m[k].toType = T.target.value, t({
              ...e,
              regions: m
            });
          }
          T.target.value = "";
        },
        options: s
      }
    ), (e.regions[k].toType === "Fixed" || !e.regions[k].toType) && /* @__PURE__ */ i.createElement(Qe, { value: y, label: "To Value", fieldName: "to", updateField: (T, m, R, O) => r(R, O, k) }));
  }), !e.regions && /* @__PURE__ */ i.createElement("p", { style: { textAlign: "center" } }, "There are currently no regions."), /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "btn full-width",
      onClick: (c) => {
        c.preventDefault(), o();
      }
    },
    "Add Region"
  ));
}), gw = ({ name: e }) => {
  const { visSupportsRegions: t } = Ds(), { config: r, updateConfig: n } = se.useContext(wt);
  return t() ? /* @__PURE__ */ i.createElement(_n, null, /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement(Fn, null, e)), /* @__PURE__ */ i.createElement(zn, null, /* @__PURE__ */ i.createElement(mw, { config: r, updateConfig: n }))) : null;
}, Lh = se.createContext(null), Dh = () => {
  const e = se.useContext(Lh);
  if (e === null)
    throw new Error("COVE: editor panel context is null.");
  return e;
}, yw = (e) => {
  const { config: t } = se.useContext(wt), { updateField: r } = Dh(), { enabledChartTypes: n, visHasNumbersOnBars: a, visHasLabelOnData: o, visSupportsChartHeight: f, visSupportsSuperTitle: s, visSupportsFootnotes: c } = Ds(), { visualizationType: d, visualizationSubType: g, barStyle: y } = t, v = () => (d === "Bar" || d === "Deviation Bar") && g !== "stacked" && (t.orientation === "horizontal" || t.orientation === "vertical") ? ["flat", "rounded", "lollipop"] : ["flat", "rounded"];
  return /* @__PURE__ */ i.createElement(_n, null, " ", /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement(Fn, null, "General")), /* @__PURE__ */ i.createElement(zn, null, /* @__PURE__ */ i.createElement(Ct, { value: d, fieldName: "visualizationType", label: "Chart Type", updateField: r, options: n }), (d === "Bar" || d === "Combo" || d === "Area Chart") && /* @__PURE__ */ i.createElement(Ct, { value: g || "Regular", fieldName: "visualizationSubType", label: "Chart Subtype", updateField: r, options: ["regular", "stacked"] }), d === "Area Chart" && g === "stacked" && /* @__PURE__ */ i.createElement(Ct, { value: t.stackedAreaChartLineType || "Linear", fieldName: "stackedAreaChartLineType", label: "Stacked Area Chart Line Type", updateField: r, options: Object.keys(xc) }), d === "Bar" && /* @__PURE__ */ i.createElement(Ct, { value: t.orientation || "vertical", fieldName: "orientation", label: "Orientation", updateField: r, options: ["vertical", "horizontal"] }), d === "Deviation Bar" && /* @__PURE__ */ i.createElement(Ct, { label: "Orientation", options: ["horizontal"] }), (d === "Bar" || d === "Deviation Bar") && /* @__PURE__ */ i.createElement(Ct, { value: t.isLollipopChart ? "lollipop" : y || "flat", fieldName: "barStyle", label: "bar style", updateField: r, options: v() }), (d === "Bar" || d === "Deviation Bar") && y === "rounded" && /* @__PURE__ */ i.createElement(Ct, { value: t.tipRounding || "top", fieldName: "tipRounding", label: "tip rounding", updateField: r, options: ["top", "full"] }), (d === "Bar" || d === "Deviation Bar") && y === "rounded" && /* @__PURE__ */ i.createElement(Ct, { value: t.roundingStyle || "standard", fieldName: "roundingStyle", label: "rounding style", updateField: r, options: ["standard", "shallow", "finger"] }), d === "Bar" && t.orientation === "horizontal" && /* @__PURE__ */ i.createElement(Ct, { value: t.yAxis.labelPlacement || "Below Bar", section: "yAxis", fieldName: "labelPlacement", label: "Label Placement", updateField: r, options: ["Below Bar", "On Date/Category Axis"] }), a() ? /* @__PURE__ */ i.createElement(yt, { value: t.yAxis.displayNumbersOnBar, section: "yAxis", fieldName: "displayNumbersOnBar", label: t.isLollipopChart ? "Display Numbers after Bar" : "Display Numbers on Bar", updateField: r }) : o() && /* @__PURE__ */ i.createElement(yt, { value: t.labels, fieldName: "labels", label: "Display label on data", updateField: r }), d === "Pie" && /* @__PURE__ */ i.createElement(Ct, { fieldName: "pieType", label: "Pie Chart Type", updateField: r, options: ["Regular", "Donut"] }), /* @__PURE__ */ i.createElement(
    Qe,
    {
      value: t.title || "Chart Title",
      fieldName: "title",
      id: "title",
      label: "Title",
      placeholder: "Chart Title",
      updateField: r,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Title is required to set the name of the download file but can be hidden using the option below.")))
    }
  ), /* @__PURE__ */ i.createElement(yt, { value: t.showTitle, fieldName: "showTitle", label: "Show Title", updateField: r }), s() && /* @__PURE__ */ i.createElement(
    Qe,
    {
      value: t.superTitle,
      updateField: r,
      fieldName: "superTitle",
      label: "Super Title",
      placeholder: "Super Title",
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Super Title")))
    }
  ), /* @__PURE__ */ i.createElement(
    Qe,
    {
      type: "textarea",
      value: t.introText,
      updateField: r,
      fieldName: "introText",
      label: "Message",
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Intro Text")))
    }
  ), /* @__PURE__ */ i.createElement(
    Qe,
    {
      type: "textarea",
      value: t.description,
      fieldName: "description",
      label: "Subtext/Citation",
      updateField: r,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter supporting text to display below the data visualization, if applicable. The following HTML tags are supported: strong, em, sup, and sub.")))
    }
  ), c() && /* @__PURE__ */ i.createElement(
    Qe,
    {
      type: "textarea",
      value: t.footnotes,
      updateField: r,
      fieldName: "footnotes",
      label: "Footnotes",
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Footnotes")))
    }
  ), f() && t.orientation === "vertical" && /* @__PURE__ */ i.createElement(Qe, { type: "number", value: t.heights.vertical, section: "heights", fieldName: "vertical", label: "Chart Height", updateField: r })));
}, vw = (e) => {
  const { config: t } = se.useContext(wt), { boxplot: r } = t;
  if (t.visualizationType !== "Box Plot")
    return;
  const { updateField: n } = Dh();
  return /* @__PURE__ */ i.createElement(_n, null, /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement(Fn, null, e.name)), /* @__PURE__ */ i.createElement(zn, null, /* @__PURE__ */ i.createElement("h4", { style: { fontSize: "18px" } }, "Labels for 5-Number Summary"), /* @__PURE__ */ i.createElement(
    Qe,
    {
      type: "text",
      value: r.labels.maximum,
      fieldName: "maximum",
      section: "boxplot",
      subsection: "labels",
      label: "Maximum",
      updateField: n,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Highest value, excluding outliers")))
    }
  ), /* @__PURE__ */ i.createElement(
    Qe,
    {
      type: "text",
      value: r.labels.q3,
      fieldName: "q3",
      section: "boxplot",
      subsection: "labels",
      label: "Upper Quartile",
      updateField: n,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Represented by top line of box. 25% of data are higher.")))
    }
  ), /* @__PURE__ */ i.createElement(
    Qe,
    {
      type: "text",
      value: r.labels.median,
      fieldName: "median",
      section: "boxplot",
      subsection: "labels",
      label: "Median",
      updateField: n,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Middle data point. Half of data are higher value.")))
    }
  ), /* @__PURE__ */ i.createElement(
    Qe,
    {
      type: "text",
      value: r.labels.q1,
      fieldName: "q1",
      section: "boxplot",
      subsection: "labels",
      label: "Lower Quartile",
      updateField: n,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Represented by bottom line of box. 25% of data are lower.")))
    }
  ), /* @__PURE__ */ i.createElement(
    Qe,
    {
      type: "text",
      value: r.labels.minimum,
      fieldName: "minimum",
      section: "boxplot",
      subsection: "labels",
      label: "Minimum",
      updateField: n,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Lowest value, excluding outliers")))
    }
  ), /* @__PURE__ */ i.createElement("br", null), /* @__PURE__ */ i.createElement("h4", { style: { fontSize: "18px" } }, "Labels for Additional Measures"), /* @__PURE__ */ i.createElement(Qe, { type: "text", value: r.labels.iqr, fieldName: "iqr", section: "boxplot", subsection: "labels", label: "Interquartile Range", updateField: n }), /* @__PURE__ */ i.createElement(Qe, { type: "text", value: r.labels.total, fieldName: "total", section: "boxplot", subsection: "labels", label: "Total", updateField: n }), /* @__PURE__ */ i.createElement(Qe, { type: "text", value: r.labels.mean, fieldName: "mean", section: "boxplot", subsection: "labels", label: "Mean", updateField: n }), /* @__PURE__ */ i.createElement(Qe, { type: "text", value: r.labels.outliers, fieldName: "outliers", section: "boxplot", subsection: "labels", label: "Outliers", updateField: n }), /* @__PURE__ */ i.createElement(Qe, { type: "text", value: r.labels.values, fieldName: "values", section: "boxplot", subsection: "labels", label: "Values", updateField: n })));
}, gy = (e, t) => {
  let r = [], n = [], a = [];
  if (e.visualizationType === "Paired Bar" || e.visualizationType === "Deviation Bar") {
    const o = e.twoColor.isPaletteReversed;
    r = Object.keys(ju).filter((f) => o ? f.endsWith("reverse") : !f.endsWith("reverse"));
  } else {
    const o = [], f = [];
    for (const s in fr) {
      const c = s.startsWith("sequential"), d = s.startsWith("qualitative"), g = s.endsWith("reverse");
      c && (!e.isPaletteReversed && !g || e.isPaletteReversed && g) && o.push(s), d && (!e.isPaletteReversed && !g || e.isPaletteReversed && g) && f.push(s);
    }
    n = o, a = f;
  }
  return se.useEffect(() => {
    let o = "";
    e.twoColor.isPaletteReversed && !e.twoColor.palette.endsWith("reverse") && (o = e.twoColor.palette + "reverse"), !e.twoColor.isPaletteReversed && e.twoColor.palette.endsWith("reverse") && (o = e.twoColor.palette.slice(0, -7)), t({ ...e, twoColor: { ...e.twoColor, palette: o } });
  }, [e.twoColor.isPaletteReversed]), se.useEffect(() => {
    let o = "";
    e.isPaletteReversed && !e.palette.endsWith("reverse") && (o = e.palette + "reverse"), !e.isPaletteReversed && e.palette.endsWith("reverse") && (o = e.palette.slice(0, -7)), t({ ...e, palette: o });
  }, [e.isPaletteReversed]), { twoColorPalettes: r, sequential: n, nonSequential: a };
}, xw = (e) => {
  var I;
  const { config: t, updateConfig: r, colorPalettes: n, twoColorPalette: a } = se.useContext(wt), { visual: o } = t, { setLollipopShape: f, updateField: s } = Dh(), { visHasBarBorders: c, visCanAnimate: d, visSupportsNonSequentialPallete: g, headerColors: y, visSupportsTooltipOpacity: v, visSupportsTooltipLines: E, visSupportsBarSpace: k, visSupportsBarThickness: M, visHasDataCutoff: T, visSupportsSequentialPallete: m, visSupportsReverseColorPalette: R } = Ds(), { twoColorPalettes: O, sequential: _, nonSequential: N } = gy(t, r), D = (B, U) => {
    if (console.log("value", U), B === "storyNodeFontColor") {
      r({
        ...t,
        sankey: {
          ...t.sankey,
          storyNodeFontColor: U
        }
      });
      return;
    } else
      r({
        ...t,
        sankey: {
          ...t.sankey,
          [B]: {
            ...t.sankey[B],
            default: U
          }
        }
      });
  };
  return /* @__PURE__ */ i.createElement(_n, null, /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement(Fn, null, "Visual")), /* @__PURE__ */ i.createElement(zn, null, t.isLollipopChart && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("fieldset", { className: "header" }, /* @__PURE__ */ i.createElement("legend", { className: "edit-label" }, "Lollipop Shape"), /* @__PURE__ */ i.createElement(
    "div",
    {
      onChange: (B) => {
        f(B.target.value);
      }
    },
    /* @__PURE__ */ i.createElement("label", { className: "radio-label" }, /* @__PURE__ */ i.createElement("input", { type: "radio", name: "lollipopShape", value: "circle", checked: t.lollipopShape === "circle" }), "Circle"),
    /* @__PURE__ */ i.createElement("label", { className: "radio-label" }, /* @__PURE__ */ i.createElement("input", { type: "radio", name: "lollipopShape", value: "square", checked: t.lollipopShape === "square" }), "Square")
  )), /* @__PURE__ */ i.createElement(Ct, { value: t.lollipopColorStyle ? t.lollipopColorStyle : "two-tone", fieldName: "lollipopColorStyle", label: "Lollipop Color Style", updateField: s, options: ["regular", "two-tone"] }), /* @__PURE__ */ i.createElement(Ct, { value: t.lollipopSize ? t.lollipopSize : "small", fieldName: "lollipopSize", label: "Lollipop Size", updateField: s, options: ["small", "medium", "large"] })), t.visualizationType === "Box Plot" && /* @__PURE__ */ i.createElement("fieldset", { className: "fieldset fieldset--boxplot" }, /* @__PURE__ */ i.createElement("legend", { className: "" }, "Box Plot Settings"), /* @__PURE__ */ i.createElement(Ct, { value: t.boxplot.borders, fieldName: "borders", section: "boxplot", label: "Box Plot Borders", updateField: s, options: ["true", "false"] }), /* @__PURE__ */ i.createElement(yt, { value: t.boxplot.plotOutlierValues, fieldName: "plotOutlierValues", section: "boxplot", label: "Plot Outliers", updateField: s }), /* @__PURE__ */ i.createElement(yt, { value: t.boxplot.plotNonOutlierValues, fieldName: "plotNonOutlierValues", section: "boxplot", label: "Plot non-outlier values", updateField: s })), /* @__PURE__ */ i.createElement(Ct, { value: t.fontSize, fieldName: "fontSize", label: "Font Size", updateField: s, options: ["small", "medium", "large"] }), c() && /* @__PURE__ */ i.createElement(Ct, { value: t.barHasBorder, fieldName: "barHasBorder", label: "Bar Borders", updateField: s, options: ["true", "false"] }), d() && /* @__PURE__ */ i.createElement(yt, { value: t.animate, fieldName: "animate", label: "Animate Visualization", updateField: s }), (((I = t.series) == null ? void 0 : I.some((B) => B.type === "Line" || B.type === "dashed-lg" || B.type === "dashed-sm" || B.type === "dashed-md")) && t.visualizationType === "Combo" || t.visualizationType === "Line") && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ct, { value: t.lineDatapointStyle, fieldName: "lineDatapointStyle", label: "Line Datapoint Style", updateField: s, options: ["hidden", "hover", "always show"] }), /* @__PURE__ */ i.createElement(Ct, { value: t.lineDatapointColor, fieldName: "lineDatapointColor", label: "Line Datapoint Color", updateField: s, options: ["Same as Line", "Lighter than Line"] })), /* @__PURE__ */ i.createElement("label", { className: "header" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Header Theme"), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, y.map((B) => /* @__PURE__ */ i.createElement(
    "button",
    {
      title: B,
      key: B,
      onClick: (U) => {
        U.preventDefault(), r({ ...t, theme: B });
      },
      className: t.theme === B ? "selected " + B : B
    }
  )))), (g() || g()) && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Chart Color Palette")), R() && /* @__PURE__ */ i.createElement(Bh, { fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: s, value: t.isPaletteReversed }), m() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", null, "Sequential"), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, _.map((B) => {
    const U = {
      backgroundColor: n[B][2]
    }, q = {
      backgroundColor: n[B][3]
    }, K = {
      backgroundColor: n[B][5]
    };
    return /* @__PURE__ */ i.createElement(
      "button",
      {
        title: B,
        key: B,
        onClick: (j) => {
          j.preventDefault(), r({ ...t, palette: B });
        },
        className: t.palette === B ? "selected" : ""
      },
      /* @__PURE__ */ i.createElement("span", { style: U }),
      /* @__PURE__ */ i.createElement("span", { style: q }),
      /* @__PURE__ */ i.createElement("span", { style: K })
    );
  }))), g() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", null, "Non-Sequential"), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, N.map((B) => {
    const U = {
      backgroundColor: n[B][2]
    }, q = {
      backgroundColor: n[B][4]
    }, K = {
      backgroundColor: n[B][6]
    };
    return /* @__PURE__ */ i.createElement(
      "button",
      {
        title: B,
        key: B,
        onClick: (j) => {
          j.preventDefault(), r({ ...t, palette: B });
        },
        className: t.palette === B ? "selected" : ""
      },
      /* @__PURE__ */ i.createElement("span", { style: U }),
      /* @__PURE__ */ i.createElement("span", { style: q }),
      /* @__PURE__ */ i.createElement("span", { style: K })
    );
  })))), t.visualizationType === "Sankey" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ i.createElement("input", { type: "color", value: t.sankey.nodeColor.default, id: "storyNodeColor", name: "storyNodeColor", onChange: (B) => D("nodeColor", B.target.value) }), /* @__PURE__ */ i.createElement("label", { htmlFor: "storyNodeColor" }, "Story Node Color")), /* @__PURE__ */ i.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ i.createElement("input", { type: "color", value: t.sankey.storyNodeFontColor || "red", id: "storyNodeFontColor", name: "storyNodeFontColor", onChange: (B) => D("storyNodeFontColor", B.target.value) }), /* @__PURE__ */ i.createElement("label", { htmlFor: "storyNodeFontColor" }, "Story Node Font Color")), /* @__PURE__ */ i.createElement("span", { className: "sankey__color-input" }, /* @__PURE__ */ i.createElement("input", { type: "color", value: t.sankey.linkColor.default, id: "linkColor", name: "linkColor", onChange: (B) => D("linkColor", B.target.value) }), /* @__PURE__ */ i.createElement("label", { htmlFor: "linkColor" }, "Link Color"))), (t.visualizationType === "Paired Bar" || t.visualizationType === "Deviation Bar") && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Bh, { section: "twoColor", fieldName: "isPaletteReversed", size: "small", label: "Use selected palette in reverse order", updateField: s, value: t.twoColor.isPaletteReversed }), /* @__PURE__ */ i.createElement("ul", { className: "color-palette" }, O.map((B) => {
    const U = {
      backgroundColor: a[B][0]
    }, q = {
      backgroundColor: a[B][1]
    };
    return /* @__PURE__ */ i.createElement(
      "button",
      {
        title: B,
        key: B,
        onClick: (K) => {
          K.preventDefault(), r({ ...t, twoColor: { ...t.twoColor, palette: B } });
        },
        className: t.twoColor.palette === B ? "selected" : ""
      },
      /* @__PURE__ */ i.createElement("span", { className: "two-color", style: U }),
      /* @__PURE__ */ i.createElement("span", { className: "two-color", style: q })
    );
  }))), T() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    Qe,
    {
      value: t.dataCutoff,
      type: "number",
      fieldName: "dataCutoff",
      className: "number-narrow",
      label: "Data Cutoff",
      updateField: s,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Any value below the cut-off value is included in a special "less than" category. This option supports special conditions like suppressed data.')))
    }
  )), M() && t.orientation === "horizontal" && !t.isLollipopChart && t.yAxis.labelPlacement !== "On Bar" && /* @__PURE__ */ i.createElement(Qe, { type: "number", value: t.barHeight || "25", fieldName: "barHeight", label: " Bar Thickness", updateField: s, min: 15 }), (t.visualizationType === "Bar" && t.orientation !== "horizontal" || t.visualizationType === "Combo") && /* @__PURE__ */ i.createElement(Qe, { value: t.barThickness, type: "number", fieldName: "barThickness", label: "Bar Thickness", updateField: s }), k() && /* @__PURE__ */ i.createElement(Qe, { type: "number", value: t.barSpace || "15", fieldName: "barSpace", label: "Bar Space", updateField: s, min: 0 }), (t.visualizationType === "Bar" || t.visualizationType === "Line" || t.visualizationType === "Combo") && /* @__PURE__ */ i.createElement(yt, { value: t.topAxis.hasLine, section: "topAxis", fieldName: "hasLine", label: "Add Top Axis Line", updateField: s }), t.visualizationType === "Spark Line" && /* @__PURE__ */ i.createElement("div", { className: "cove-accordion__panel-section checkbox-group" }, /* @__PURE__ */ i.createElement(yt, { value: o == null ? void 0 : o.border, section: "visual", fieldName: "border", label: "Show Border", updateField: s }), /* @__PURE__ */ i.createElement(yt, { value: o == null ? void 0 : o.borderColorTheme, section: "visual", fieldName: "borderColorTheme", label: "Use Border Color Theme", updateField: s }), /* @__PURE__ */ i.createElement(yt, { value: o == null ? void 0 : o.accent, section: "visual", fieldName: "accent", label: "Use Accent Style", updateField: s }), /* @__PURE__ */ i.createElement(yt, { value: o == null ? void 0 : o.background, section: "visual", fieldName: "background", label: "Use Theme Background Color", updateField: s }), /* @__PURE__ */ i.createElement(yt, { value: o == null ? void 0 : o.hideBackgroundColor, section: "visual", fieldName: "hideBackgroundColor", label: "Hide Background Color", updateField: s })), (t.visualizationType === "Line" || t.visualizationType === "Combo") && /* @__PURE__ */ i.createElement(yt, { value: t.showLineSeriesLabels, fieldName: "showLineSeriesLabels", label: "Append Series Name to End of Line Charts", updateField: s }), (t.visualizationType === "Line" || t.visualizationType === "Combo") && t.showLineSeriesLabels && /* @__PURE__ */ i.createElement(yt, { value: t.colorMatchLineSeriesLabels, fieldName: "colorMatchLineSeriesLabels", label: "Match Series Color to Name at End of Line Charts", updateField: s }), E() && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(yt, { value: o.verticalHoverLine, fieldName: "verticalHoverLine", section: "visual", label: "Vertical Hover Line", updateField: s }), /* @__PURE__ */ i.createElement(yt, { value: o.horizontalHoverLine, fieldName: "horizontalHoverLine", section: "visual", label: "Horizontal Hover Line", updateField: s })), v() && /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Tooltip Opacity"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "number",
      value: t.tooltips.opacity ? t.tooltips.opacity : 100,
      onChange: (B) => r({
        ...t,
        tooltips: {
          ...t.tooltips,
          opacity: B.target.value
        }
      })
    }
  )), t.visualizationType === "Bar" && /* @__PURE__ */ i.createElement(yt, { value: t.tooltips.singleSeries, fieldName: "singleSeries", section: "tooltips", label: "SHOW HOVER FOR SINGLE DATA SERIES", updateField: s }), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "No Data Message"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: t.chartMessage.noData ? t.chartMessage.noData : "",
      onChange: (B) => r({
        ...t,
        chartMessage: {
          ...t.chartMessage,
          noData: B.target.value
        }
      })
    }
  ))));
}, bw = () => {
  var s, c, d;
  const { config: e, updateConfig: t } = se.useContext(wt), r = (s = e.data) == null ? void 0 : s[0], { updateField: n } = se.useContext(Lh);
  if (e.visualizationType !== "Sankey")
    return;
  const a = (g, y, v) => {
    let E = [];
    r != null && r.storyNodeText && (E = [...r == null ? void 0 : r.storyNodeText]), E[v][g] = y, t({
      ...e,
      sankey: {
        ...e.sankey,
        data: {
          ...e.sankey.data,
          storyNodeText: E
        }
      }
    });
  }, o = () => {
    const g = r;
    g.storyNodeText.push({
      StoryNode: "",
      segmentTextBefore: "",
      segmentTextAfter: ""
    }), t({
      ...e,
      sankey: {
        ...e.sankey,
        data: [{ ...g }]
      }
    });
  }, f = (g) => {
    const y = r;
    y.storyNodeText.splice(g, 1), t({ ...e, sankey: { ...e.sankey, data: { ...y } } });
  };
  return /* @__PURE__ */ i.createElement(_n, null, /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement(Fn, null, "Sankey Settings")), /* @__PURE__ */ i.createElement(zn, null, (r == null ? void 0 : r.storyNodeText) && (r == null ? void 0 : r.storyNodeText.map(({ StoryNode: g, segmentTextBefore: y, segmentTextAfter: v }, E) => /* @__PURE__ */ i.createElement("div", { key: E, style: { border: "1px solid black", margin: "15px auto", padding: "15px", borderRadius: "10px" } }, /* @__PURE__ */ i.createElement("label", null, "Story Node Text", /* @__PURE__ */ i.createElement("input", { type: "text", value: g, fieldName: "StoryNode", label: "StoryNode", onChange: (k) => a("StoryNode", k.target.value, E) })), /* @__PURE__ */ i.createElement("label", null, "Story Text Before", /* @__PURE__ */ i.createElement("input", { type: "text", value: y, fieldName: "segmentTextBefore", label: "Segment Text Before", onChange: (k) => a("segmentTextBefore", k.target.value, E) })), /* @__PURE__ */ i.createElement("label", null, "Story Text After", /* @__PURE__ */ i.createElement("input", { type: "text", value: v, fieldName: "segmentTextAfter", label: "Segment Text After", onChange: (k) => a("segmentTextAfter", k.target.value, E) })), /* @__PURE__ */ i.createElement(Hf, { onClick: (k) => f(E), className: "btn", style: { background: "tomato" } }, "Remove Story Node")))), `Total Story Nodes: ${(c = r == null ? void 0 : r.storyNodeText) == null ? void 0 : c.length}`, ((d = r == null ? void 0 : r.storyNodeText) == null ? void 0 : d.length) < 3 && /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "btn full-width",
      onClick: (g) => {
        g.preventDefault(), o();
      }
    },
    "Add StoryNode"
  ), /* @__PURE__ */ i.createElement(yt, { value: e.enableTooltips, fieldName: "enableTooltips", label: "Enable Tooltips", updateField: n })));
}, Fa = {
  ForestPlot: tw,
  Series: Xr,
  Regions: gw,
  General: yw,
  BoxPlot: vw,
  Visual: xw,
  Sankey: bw
};
se.memo(({ config: e, updateConfig: t, data: r }) => {
  const n = () => {
    const c = /* @__PURE__ */ new Set();
    return r.forEach((d) => {
      Object.keys(d).forEach((g) => {
        c.add(g);
      });
    }), [...c];
  }, a = () => ["star"];
  let o = (c) => {
    let d = [];
    e.suppressedData && (d = [...e.suppressedData]), d.splice(c, 1), t({ ...e, suppressedData: d });
  }, f = () => {
    let c = e.suppressedData ? [...e.suppressedData] : [];
    c.push({ label: "", column: "", value: "", icon: "" }), t({ ...e, suppressedData: c });
  }, s = (c, d, g) => {
    let y = [];
    e.suppressedData && (y = [...e.suppressedData]), y[g][c] = d, t({ ...e, suppressedData: y });
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, e.suppressedData && e.suppressedData.map(({ label: c, column: d, value: g, icon: y }, v) => /* @__PURE__ */ i.createElement("div", { key: `suppressed-${v}`, className: "edit-block" }, /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: (E) => {
        E.preventDefault(), o(v);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement(Ct, { value: d, initial: "Select", fieldName: "column", label: "Column", updateField: (E, k, M, T) => s(M, T, v), options: n() }), /* @__PURE__ */ i.createElement(Qe, { value: g, fieldName: "value", label: "Value", updateField: (E, k, M, T) => s(M, T, v) }), /* @__PURE__ */ i.createElement(Ct, { value: y, initial: "Select", fieldName: "icon", label: "Icon", updateField: (E, k, M, T) => s(M, T, v), options: a() }), /* @__PURE__ */ i.createElement(Qe, { value: c, fieldName: "label", label: "Label", placeholder: "suppressed", updateField: (E, k, M, T) => s(M, T, v) }))), /* @__PURE__ */ i.createElement("button", { type: "button", onClick: f, className: "btn full-width" }, "Add Suppression Class"));
});
const Sw = se.memo(({ config: e, updateConfig: t, data: r }) => {
  const n = () => {
    const d = /* @__PURE__ */ new Set();
    return r.forEach((g) => {
      Object.keys(g).forEach((y) => {
        d.add(y);
      });
    }), [...d];
  }, a = () => e.visualizationType === "Line" || e.visualizationType === "Combo" ? ["effect"] : ["suppression"], o = () => {
    if (e.visualizationType === "Line" || e.visualizationType === "Combo")
      return ["Dashed Small", "Dashed Medium", "Dashed Large", "Open Circles"];
    if (e.visualizationType === "Bar")
      return ["star"];
  };
  let f = (d) => {
    let g = [];
    e.preliminaryData && (g = [...e.preliminaryData]), g.splice(d, 1), t({ ...e, preliminaryData: g });
  }, s = () => {
    let d = e.preliminaryData ? [...e.preliminaryData] : [];
    d.push({ type: "", label: "", column: "", value: "", style: "" }), t({ ...e, preliminaryData: d });
  }, c = (d, g, y) => {
    let v = [];
    e.preliminaryData && (v = [...e.preliminaryData]), v[y][d] = g, t({ ...e, preliminaryData: v });
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, e.preliminaryData && e.preliminaryData.map(({ seriesKey: d, type: g, label: y, column: v, value: E, style: k }, M) => {
    var T;
    return /* @__PURE__ */ i.createElement("div", { key: `preliminaryData-${M}`, className: "edit-block" }, /* @__PURE__ */ i.createElement(
      "button",
      {
        type: "button",
        className: "remove-column",
        onClick: (m) => {
          m.preventDefault(), f(M);
        }
      },
      "Remove"
    ), /* @__PURE__ */ i.createElement(Ct, { value: g, initial: "Select", fieldName: "type", label: "Type", updateField: (m, R, O, _) => c(O, _, M), options: a() }), /* @__PURE__ */ i.createElement(Ct, { value: d, initial: "Select", fieldName: "seriesKey", label: "ASSOCIATE TO SERIES", updateField: (m, R, O, _) => c(O, _, M), options: e.runtime.lineSeriesKeys ?? ((T = e.runtime) == null ? void 0 : T.seriesKeys) }), /* @__PURE__ */ i.createElement(Ct, { value: v, initial: "Select", fieldName: "column", label: "COLUMN WITH CONFIGURATION VALUE", updateField: (m, R, O, _) => c(O, _, M), options: n() }), /* @__PURE__ */ i.createElement(Qe, { value: E, fieldName: "value", label: "VALUE TO TRIGGER", updateField: (m, R, O, _) => c(O, _, M) }), /* @__PURE__ */ i.createElement(Ct, { value: k, initial: "Select", fieldName: "style", label: "Style", updateField: (m, R, O, _) => c(O, _, M), options: o() }), /* @__PURE__ */ i.createElement(Qe, { value: y, fieldName: "label", label: "Label", placeholder: "", updateField: (m, R, O, _) => c(O, _, M) }));
  }), /* @__PURE__ */ i.createElement("button", { type: "button", onClick: s, className: "btn full-width" }, e.visualizationType === "Line" || e.visualizationType === "Combo" ? "Add Special Line" : e.visualizationType === "Bar" ? " Add Special Bar" : "Add Special Line/Bar"));
}), Ew = () => {
  var hr, pr, x, A, $, X, be, ye, Te, je, lt, gt, dt, Nt, On, Pn, Rn;
  const {
    config: e,
    updateConfig: t,
    tableData: r,
    transformedData: n,
    loading: a,
    colorScale: o,
    colorPalettes: f,
    twoColorPalette: s,
    unfilteredData: c,
    excludedData: d,
    isDashboard: g,
    setParentConfig: y,
    missingRequiredSections: v,
    isDebug: E,
    setFilteredData: k,
    lineOptions: M,
    rawData: T,
    highlight: m,
    highlightReset: R
  } = se.useContext(wt), { minValue: O, maxValue: _, existPositiveValue: N, isAllLine: D } = Oc(e, c);
  gy(e, t);
  const I = { data: n, config: e }, { leftMax: B, rightMax: U } = cy(I), {
    headerColors: q,
    visSupportsTooltipLines: K,
    visSupportsNonSequentialPallete: j,
    visSupportsSequentialPallete: te,
    visSupportsReverseColorPalette: me,
    visHasLabelOnData: H,
    visHasNumbersOnBars: le,
    visHasAnchors: ue,
    visHasBarBorders: fe,
    visHasDataCutoff: ae,
    visHasSelectableLegendValues: V,
    visCanAnimate: Z,
    visHasLegend: ee,
    visHasLegendAxisAlign: Ae,
    visHasBrushChart: xe,
    visSupportsDateCategoryAxis: De,
    visSupportsValueAxisMin: oe,
    visSupportsValueAxisMax: ze,
    visSupportsDateCategoryAxisLabel: Ie,
    visSupportsDateCategoryAxisLine: Ce,
    visSupportsDateCategoryAxisTicks: ge,
    visSupportsDateCategoryTickRotation: Oe,
    visSupportsDateCategoryNumTicks: ie,
    visSupportsDateCategoryAxisPadding: we,
    visSupportsRegions: Pe,
    visSupportsFilters: He,
    visSupportsPreliminaryData: Ye,
    visSupportsValueAxisGridLines: Je,
    visSupportsValueAxisLine: at,
    visSupportsValueAxisTicks: it,
    visSupportsValueAxisLabels: st,
    visSupportsBarSpace: Ge,
    visSupportsBarThickness: We,
    visSupportsFootnotes: Fe,
    visSupportsSuperTitle: ft,
    visSupportsDataCutoff: Ke,
    visSupportsChartHeight: Ze,
    visSupportsLeftValueAxis: ut,
    visSupportsTooltipOpacity: ht,
    visSupportsRankByValue: Pt,
    visSupportsResponsiveTicks: on,
    visSupportsDateCategoryHeight: un,
    visHasDataSuppression: Ot
  } = Ds(), { handleFilterOrder: jt, filterOrderOptions: Ft, filterStyleOptions: nn } = Ry({ config: e, setConfig: t, filteredData: n, setFilteredData: k });
  se.useEffect(() => {
    let ne = [];
    e.series && (ne = e.series.map((J) => ({
      ...J,
      type: e.visualizationType === "Combo" ? "Bar" : e.visualizationType ? e.visualizationType : "Bar",
      axis: "Left"
    }))), t({
      ...e,
      series: ne
    });
  }, [e.visualizationType]), se.useEffect(() => {
    e.visualizationType === "Scatter Plot" && t({
      ...e,
      xAxis: {
        ...e.xAxis,
        type: "continuous"
      }
    });
  }, []), se.useEffect(() => {
    e.visualizationType !== "Bar" && t({ ...e, tooltips: { ...e.tooltips, singleSeries: !1 } });
  }, [e.visualizationType]);
  const { hasRightAxis: yn } = gh({ config: e, yMax: e.yAxis.size, data: e.data, updateConfig: t }), hn = (ne, J) => ({
    ...J
  }), Rt = {
    animate: !1,
    animateReplay: !0,
    display: "block",
    boxSizing: "border-box",
    border: "1px solid #D1D1D1",
    borderRadius: "2px",
    background: "#F1F1F1",
    padding: ".4em .6em",
    fontSize: ".8em",
    marginRight: ".3em",
    marginBottom: ".3em",
    cursor: "move",
    zIndex: "999"
  }, Zt = (ne) => {
    ne.orientation === "horizontal" && (ne.labels = !1), ne.table.show === void 0 && (ne.table.show = !g), ne.visualizationType === "Combo" && (ne.orientation = "vertical"), Cn(ne.xAxis) && !ne.xAxis.padding && (ne.xAxis.padding = 6);
  }, _e = (ne, J, de, Re) => {
    if (E && console.log("#COVE: CHART: EditorPanel: section, subsection, fieldName, newValue", ne, J, de, Re), ne === "boxplot" && J === "legend") {
      t({
        ...e,
        [ne]: {
          ...e[ne],
          [J]: {
            ...e.boxplot[J],
            [de]: Re
          }
        }
      });
      return;
    }
    if (ne === "boxplot" && J === "labels") {
      t({
        ...e,
        [ne]: {
          ...e[ne],
          [J]: {
            ...e.boxplot[J],
            [de]: Re
          }
        }
      });
      return;
    }
    if (ne === "columns" && J !== "" && de !== "") {
      t({
        ...e,
        [ne]: {
          ...e[ne],
          [J]: {
            ...e[ne][J],
            [de]: Re
          }
        }
      });
      return;
    }
    if (ne === null && J === null) {
      let Pr = { ...e, [de]: Re };
      Zt(Pr), t(Pr);
      return;
    }
    const Mt = Array.isArray(e[ne]);
    let qt = Mt ? [...e[ne], Re] : { ...e[ne], [de]: Re };
    J !== null && (Mt ? (qt = [...e[ne]], qt[J] = { ...qt[J], [de]: Re }) : typeof Re == "string" ? qt[J] = Re : qt = { ...e[ne], [J]: { ...e[ne][J], [de]: Re } });
    let Mn = { ...e, [ne]: qt };
    Zt(Mn), t(Mn);
  }, [wn, Lt] = se.useState(!0);
  if (a)
    return null;
  se.useEffect(() => {
    var ne;
    (ne = e.general) != null && ne.boxplot && (e.general.boxplot.firstQuartilePercentage || t({
      ...e,
      boxplot: {
        ...e.boxplot,
        firstQuartilePercentage: 25
      }
    }));
  }, [e]);
  const vn = (ne) => {
    t({
      ...e,
      lollipopShape: ne
    });
  }, It = (ne) => {
    let J = [...e.filters];
    J.splice(ne, 1), t({ ...e, filters: J });
  }, pn = (ne, J, de) => {
    let Re = [...e.filters];
    Re[J][ne] = de, t({ ...e, filters: Re });
  }, An = () => {
    let ne = e.filters ? [...e.filters] : [];
    ne.push({ values: [] }), t({ ...e, filters: ne });
  }, $n = (ne) => {
    let J = e.series ? [...e.series] : [], de = Array.from(new Set(n.map((Mt) => Mt[ne]))), Re = [];
    de.forEach((Mt) => {
      Re.push({ key: Mt });
    }), e.visualizationType === "Forecasting" ? J.push({ dataKey: ne, type: e.visualizationType, stages: Re, stageColumn: ne, axis: "Left", tooltip: !0 }) : J.push({ dataKey: ne, type: e.visualizationType, axis: "Left", tooltip: !0 }), t({ ...e, series: J });
  }, Me = (ne) => {
    const J = e.series[0].dataKey, de = n.sort((Mt, qt) => Mt[J] - qt[J]), Re = ne === "asc" ? de : de.reverse();
    t({ ...e }, Re);
  }, Xe = (ne) => {
    let J = [...e.exclusions.keys];
    J.push(ne);
    let de = { ...e.exclusions, keys: J };
    t({ ...e, exclusions: de });
  }, Tt = (ne) => {
    let J = -1, de = [...e.exclusions.keys];
    for (let Re = 0; Re < de.length; Re++)
      if (de[Re] === ne) {
        J = Re;
        break;
      }
    if (J !== -1) {
      de.splice(J, 1);
      let Re = { ...e.exclusions, keys: de }, Mt = { ...e, exclusions: Re };
      de.length === 0 && delete Mt.exclusions.keys, t(Mt);
    }
  }, nt = () => {
    let ne = {};
    return c.forEach((J) => {
      Object.keys(J).forEach((de) => ne[de] = !0);
    }), Object.keys(ne);
  }, zt = (ne = !0) => {
    let J = {};
    if (c.forEach((de) => {
      Object.keys(de).forEach((Re) => J[Re] = !0);
    }), ne) {
      const { lower: de, upper: Re } = e.confidenceKeys || {};
      Object.keys(J).forEach((Mt) => {
        (e.series && e.series.filter((qt) => qt.dataKey === Mt).length > 0 || e.confidenceKeys && Object.keys(e.confidenceKeys).includes(Mt) && (de && Re || de || Re) && Mt !== de && Mt !== Re) && delete J[Mt];
      });
    }
    return Object.keys(J);
  }, _t = (ne) => {
    if (!ne)
      return [];
    const J = /* @__PURE__ */ new Set();
    for (let de = 0; de < ne.length; de++)
      for (const [Re] of Object.entries(ne[de]))
        J.add(Re);
    return Array.from(J);
  }, Tn = (ne, J = !1) => {
    let de = [];
    return d.forEach((Re) => {
      de.push(Re[ne]);
    }), J ? [...new Set(de)] : de;
  }, Wn = () => {
    Lt(!wn), t({
      ...e,
      showEditorPanel: !wn
    });
  }, Y = () => {
    let ne = JSON.parse(JSON.stringify(e));
    return v() === !1 && delete ne.newViz, delete ne.runtime, ne;
  };
  se.useEffect(() => {
    if (y) {
      const ne = Y();
      y(ne);
    }
  }, [e]), se.useEffect(() => {
    const ne = e.xAxis.anchors.length > 0 ? e.xAxis.anchors : [], J = e.yAxis.anchors.length > 0 ? e.yAxis.anchors : [];
    t({
      ...e,
      xAxis: {
        ...e.xAxis,
        anchors: J
      },
      yAxis: {
        ...e.yAxis,
        anchors: ne
      }
    });
  }, [e.orientation]), se.useEffect(() => {
    e.visualizationType === "Paired Bar" && t({
      ...e,
      orientation: "horizontal"
    });
  }, []), se.useEffect(() => {
    e.orientation === "horizontal" && t({
      ...e,
      lollipopShape: e.lollipopShape
    });
  }, [e.isLollipopChart, e.lollipopShape]), se.useEffect(() => {
    e.visualizationType === "Deviation Bar" && t({ ...e, orientation: "horizontal" });
  }, [e.visualizationType]);
  const $e = se.useCallback(() => {
    const ne = [...e.exclusions.keys];
    return /* @__PURE__ */ i.createElement("ul", { className: "series-list" }, ne.map((J, de) => /* @__PURE__ */ i.createElement("li", { key: J }, /* @__PURE__ */ i.createElement("div", { className: "series-list__name", "data-title": J }, /* @__PURE__ */ i.createElement("div", { className: "series-list__name--text" }, J)), /* @__PURE__ */ i.createElement("button", { className: "series-list__remove", onClick: () => Tt(J) }, "×"))));
  }, [e]), et = (ne, J) => {
    let de = e.series, [Re] = de.splice(ne, 1);
    de.splice(J, 0, Re), t({ ...e, series: de });
  };
  e.isLollipopChart && ((hr = e == null ? void 0 : e.series) == null ? void 0 : hr.length) > 1 && (e.runtime.editorErrorMessage = "Lollipop charts must use only one data series"), e.visualizationType === "Paired Bar" && ((pr = e == null ? void 0 : e.series) == null ? void 0 : pr.length) !== 2 && (e.runtime.editorErrorMessage = "Paired Bar charts must use exactly two data series"), e.visualizationType === "Deviation Bar" && ((x = e == null ? void 0 : e.series) == null ? void 0 : x.length) !== 1 && (e.runtime.editorErrorMessage = "Deviation Bar charts must use exactly one data series"), e.isLollipopChart && ((A = e == null ? void 0 : e.series) == null ? void 0 : A.length) === 0 && (e.runtime.editorErrorMessage = "Add a data series");
  const Ve = e.orientation === "horizontal" ? "xAxis" : "yAxis", [pt, ot] = se.useState({ maxMsg: "", minMsg: "", rightMaxMessage: "", minMsgRight: "" }), bt = () => {
    const ne = e[Ve].max, J = e[Ve].rightMax;
    let de = "", Re = "";
    if (e.visualizationType !== "Combo")
      switch (!0) {
        case (ne && parseFloat(ne) < parseFloat(_) && N):
          de = "Max value must be more than " + _;
          break;
        case (ne && parseFloat(ne) < 0 && !N):
          de = "Value must be more than or equal to 0";
          break;
        default:
          de = "";
      }
    if (e.visualizationType === "Combo")
      switch (!0) {
        case (ne && parseFloat(ne) < B):
          de = "Max value must be more than " + B;
          break;
        case (J && parseFloat(J) < U):
          Re = "Max value must be more than " + U;
          break;
        case (ne && parseFloat(ne) < 0 && !N):
          de = "Value must be more than or equal to 0";
          break;
        default:
          de = "";
      }
    ot((Mt) => ({ ...Mt, maxMsg: de, rightMaxMessage: Re }));
  }, mt = () => {
    const ne = parseFloat(e[Ve].min);
    let J = Number(O), de = "";
    switch (!0) {
      case (e.useLogScale && ["Line", "Combo", "Bar"].includes(e.visualizationType) && ne < 0):
        de = "Negative numbers are not supported in logarithmic scale";
        break;
      case ((e.visualizationType === "Line" || e.visualizationType === "Spark Line") && ne > J):
        de = "Value should not exceed " + O;
        break;
      case (e.visualizationType === "Combo" && D && ne > J):
        de = "Value should not exceed " + O;
        break;
      case ((e.visualizationType === "Bar" || e.visualizationType === "Combo" && !D) && J > 0 && ne > 0):
        de = e.useLogScale ? "Value must be equal to 0" : "Value must be less than or equal to 0";
        break;
      case (e.visualizationType === "Deviation Bar" && ne >= Math.min(J, e.xAxis.target)):
        de = "Value must be less than " + Math.min(J, e.xAxis.target);
        break;
      case (e.visualizationType !== "Deviation Bar" && ne && J < 0 && ne > J):
        de = "Value should not exceed " + O;
        break;
      default:
        de = "";
    }
    ot((Re) => ({ ...Re, minMsg: de }));
  };
  se.useEffect(() => {
    mt(), bt();
  }, [O, _, e]);
  const qe = (($ = e == null ? void 0 : e.dataKey) == null ? void 0 : $.includes("http://")) || ((X = e == null ? void 0 : e.dataKey) == null ? void 0 : X.includes("https://")), Ut = () => {
    var ne, J;
    if (E !== void 0 && E && !((ne = e == null ? void 0 : e.xAxis) != null && ne.dataKey)) {
      let de = zt(!1);
      if (de.includes("Date"))
        return "Date";
      if (de.includes("Race"))
        return "Race";
      if (de.includes("Month"))
        return "Month";
    }
    return ((J = e == null ? void 0 : e.xAxis) == null ? void 0 : J.dataKey) || "";
  }, Qt = () => {
    if (E !== void 0 && E && zt(!1).length > 0) {
      let ne = zt(!1).filter((J) => J !== Ut());
      if (ne.length > 0)
        return ne[0];
    }
    return "";
  };
  if (E && !e.xAxis.dataKey && (e.xAxis.dataKey = Ut()), E && ((be = e == null ? void 0 : e.series) == null ? void 0 : be.length) === 0) {
    let ne = Qt();
    ne !== "" && $n(ne), E && console.log("### COVE DEBUG: Chart: Setting default datacol=", ne);
  }
  const cn = ["Area Chart", "Combo", "Line", "Bar", "Forecasting", "Scatter Plot", "Paired Bar", "Deviation Bar"], Jt = [
    /* @__PURE__ */ i.createElement("option", { value: "", key: "Select Option" }, "- Select Option -")
  ];
  if (e.data && e.series) {
    Object.keys(((ye = e.data) == null ? void 0 : ye[0]) || []).map((J) => {
      const de = e == null ? void 0 : e.series.some((Re) => Re.dataKey === J);
      if (J !== e.xAxis.dataKey && !de)
        return Jt.push(
          /* @__PURE__ */ i.createElement("option", { value: J, key: J }, J)
        );
    });
    let ne = {};
    e.data.forEach((J) => {
      Object.keys(J).forEach((de) => {
        ne[de] = ne[de] || [];
        const Re = typeof J[de] == "number" ? J[de].toString() : J[de];
        ne[de].indexOf(Re) === -1 && ne[de].push(Re);
      });
    });
  }
  if (!e.data && n) {
    if (!n[0])
      return;
    Object.keys(n[0]).map((J) => {
      const de = n.some((Re) => Re.dataKey === J);
      if (J !== e.xAxis.dataKey && !de)
        return Jt.push(
          /* @__PURE__ */ i.createElement("option", { value: J, key: J }, J)
        );
    });
    let ne = {};
    n.forEach((J) => {
      Object.keys(J).forEach((de) => {
        ne[de] = ne[de] || [];
        const Re = typeof J[de] == "number" ? J[de].toString() : J[de];
        ne[de].indexOf(Re) === -1 && ne[de].push(Re);
      });
    });
  }
  const Kt = Object.keys(e.columns).filter((ne) => [e.xAxis.dataKey].includes(ne) !== !0), $t = (ne) => {
    const J = `additionalColumn${ne}`;
    t({
      ...e,
      columns: {
        ...e.columns,
        [J]: {
          label: "New Column",
          dataTable: !1,
          tooltips: !1,
          prefix: "",
          suffix: "",
          forestPlot: !1,
          startingPoint: "0",
          forestPlotAlignRight: !1
        }
      }
    });
  }, Bt = (ne) => {
    const J = e.columns;
    delete J[ne], t({
      ...e,
      columns: J
    });
  }, xt = async (ne, J, de) => {
    switch (J) {
      case "name":
        t({
          ...e,
          columns: {
            ...e.columns,
            [ne]: {
              ...e.columns[ne],
              [J]: de
            }
          }
        });
        break;
      default:
        t({
          ...e,
          columns: {
            ...e.columns,
            [ne]: {
              ...e.columns[ne],
              [J]: de
            }
          }
        });
        break;
    }
  }, {
    highlightedBarValues: mn,
    highlightedSeriesValues: Sn,
    handleUpdateHighlightedBar: Ht,
    handleAddNewHighlightedBar: En,
    handleRemoveHighlightedBar: xn,
    handleUpdateHighlightedBarColor: Xt,
    handleHighlightedBarLegendLabel: en,
    handleUpdateHighlightedBorderWidth: Bn
  } = Ac(e, t), Vn = (ne, J) => {
    let de = e.columns;
    de[ne].tooltips = J, t({
      ...e,
      columns: de
    });
  }, or = e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1, Zn = () => {
    const ne = n.map((J) => J[e.legend.colorCode]);
    return or ? ne : zt(!1).filter((J) => J !== e.xAxis.dataKey);
  }, sn = (ne) => {
    t({ ...e, legend: { ...e.legend, seriesHighlight: ne } });
  }, Ln = (ne, J, de) => {
    var qt;
    const Re = { ...e[ne], [J]: de }, Mt = { ...e, [ne]: Re };
    de === "highlight" && ((qt = e.legend.seriesHighlight) != null && qt.length) && (Mt.legend.seriesHighlight.length = 0), t(Mt);
  }, Ar = {
    addNewExclusion: Xe,
    data: n,
    editColumn: xt,
    getColumns: zt,
    getDataValueOptions: _t,
    getDataValues: Tn,
    getItemStyle: hn,
    handleSeriesChange: et,
    handleAddNewHighlightedBar: En,
    setCategoryAxis: Ut,
    sortSeries: Me,
    updateField: _e,
    warningMsg: pt,
    highlightedBarValues: mn,
    handleHighlightedBarLegendLabel: en,
    handleUpdateHighlightedBar: Ht,
    handleRemoveHighlightedBar: xn,
    isPaletteReversed: e.isPaletteReversed,
    highlightedSeriesValues: Sn,
    handleUpdateHighlightedBorderWidth: Bn,
    handleUpdateHighlightedBarColor: Xt,
    setLollipopShape: vn
  };
  return /* @__PURE__ */ i.createElement(Lh.Provider, { value: Ar }, /* @__PURE__ */ i.createElement(zr, { component: "EditorPanel" }, /* @__PURE__ */ i.createElement(Qd.Sidebar, { displayPanel: wn, isDashboard: g, title: "Configure Chart", onBackClick: Wn }, /* @__PURE__ */ i.createElement(Ni, { allowZeroExpanded: !0 }, /* @__PURE__ */ i.createElement(Fa.General, { name: "General" }), /* @__PURE__ */ i.createElement(Fa.ForestPlot, { name: "Forest Plot Settings" }), /* @__PURE__ */ i.createElement(Fa.Sankey, { name: "Sankey" }), e.visualizationType !== "Pie" && e.visualizationType !== "Forest Plot" && e.visualizationType !== "Sankey" && /* @__PURE__ */ i.createElement(_n, null, /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement(Fn, null, "Data Series ", (!e.series || e.series.length === 0 || e.visualizationType === "Paired Bar" && e.series.length < 2) && /* @__PURE__ */ i.createElement(Vu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(zn, null, (!e.series || e.series.length === 0) && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement("p", { className: "warning" }, "At least one series is required"), (!e.series || e.series.length === 0 || e.series.length < 2) && e.visualizationType === "Paired Bar" && /* @__PURE__ */ i.createElement("p", { className: "warning" }, "Select two data series for paired bar chart (e.g., Male and Female)."), /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    Ct,
    {
      fieldName: "visualizationType",
      label: "Add Data Series",
      initial: "Select",
      onChange: (ne) => {
        ne.target.value !== "" && ne.target.value !== "Select" && $n(ne.target.value), ne.target.value = "";
      },
      options: zt()
    }
  ), e.series && e.series.length !== 0 && /* @__PURE__ */ i.createElement(Fa.Series.Wrapper, { getColumns: zt }, /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("legend", { className: "edit-label float-left" }, "Displaying"), /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "A data series is a set of related data points plotted in a chart and typically represented in the chart legend.")))), /* @__PURE__ */ i.createElement(Ih, { onDragEnd: ({ source: ne, destination: J }) => et(ne.index, J.index) }, /* @__PURE__ */ i.createElement(Hh, { droppableId: "filter_order" }, (ne) => /* @__PURE__ */ i.createElement("ul", { ...ne.droppableProps, className: "series-list", ref: ne.innerRef }, /* @__PURE__ */ i.createElement(Fa.Series.List, { series: e.series, getItemStyle: hn, sortableItemStyles: Rt, chartsWithOptions: cn }), ne.placeholder))))), e.series && e.series.length <= 1 && e.visualizationType === "Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", { className: "divider-heading" }, "Confidence Keys"), /* @__PURE__ */ i.createElement(Ct, { value: e.confidenceKeys.upper || "", section: "confidenceKeys", fieldName: "upper", label: "Upper", updateField: _e, initial: "Select", options: zt() }), /* @__PURE__ */ i.createElement(Ct, { value: e.confidenceKeys.lower || "", section: "confidenceKeys", fieldName: "lower", label: "Lower", updateField: _e, initial: "Select", options: zt() })), Pt() && e.series && e.series.length === 1 && /* @__PURE__ */ i.createElement(Ct, { fieldName: "visualizationType", label: "Rank by Value", initial: "Select", onChange: (ne) => Me(ne.target.value), options: ["asc", "desc"] }), Ye() && /* @__PURE__ */ i.createElement(Sw, { config: e, updateConfig: t, data: n }))), /* @__PURE__ */ i.createElement(Fa.BoxPlot, { name: "Measures" }), ut() && /* @__PURE__ */ i.createElement(_n, null, /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement(Fn, null, e.visualizationType === "Pie" ? "Data Format" : e.orientation === "vertical" ? "Left Value Axis" : "Value Axis", e.visualizationType === "Pie" && !e.yAxis.dataKey && /* @__PURE__ */ i.createElement(Vu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(zn, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement(
    Ct,
    {
      value: e.yAxis.dataKey || "",
      section: "yAxis",
      fieldName: "dataKey",
      label: "Data Column",
      initial: "Select",
      required: !0,
      updateField: _e,
      options: zt(!1),
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Select the source data to be visually represented.")))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Qe, { value: e.yAxis.label, section: "yAxis", fieldName: "label", label: "Label ", updateField: _e }), e.runtime.seriesKeys && e.runtime.seriesKeys.length === 1 && !["Box Plot", "Deviation Bar", "Forest Plot"].includes(e.visualizationType) && /* @__PURE__ */ i.createElement(yt, { value: e.isLegendValue, fieldName: "isLegendValue", label: "Use Legend Value in Hover", updateField: _e }), /* @__PURE__ */ i.createElement(Qe, { value: e.yAxis.numTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "numTicks", label: "Number of ticks", className: "number-narrow", updateField: _e }), /* @__PURE__ */ i.createElement(
    Qe,
    {
      value: e.yAxis.size,
      type: "number",
      section: "yAxis",
      fieldName: "size",
      label: e.orientation === "horizontal" ? "Size (Height)" : "Size (Width)",
      className: "number-narrow",
      updateField: _e,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, `Increase the size if elements in the ${e.orientation} axis are being crowded or hidden behind other elements.  Decrease if less space is required for the value axis.`)))
    }
  ), e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(yt, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: _e }), (e.orientation === "vertical" || !e.isResponsiveTicks) && /* @__PURE__ */ i.createElement(Qe, { value: e.yAxis.tickRotation || 0, type: "number", min: 0, section: "yAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: _e }), e.isResponsiveTicks && e.orientation === "horizontal" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(
    Qe,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: _e,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" && /* @__PURE__ */ i.createElement(Qe, { value: e.xAxis.labelOffset, section: "xAxis", fieldName: "labelOffset", label: "Label offset", type: "number", className: "number-narrow", updateField: _e }), Je() && /* @__PURE__ */ i.createElement(yt, { value: e.yAxis.gridLines, section: "yAxis", fieldName: "gridLines", label: "Show Gridlines", updateField: _e }), /* @__PURE__ */ i.createElement(yt, { value: e.yAxis.enablePadding, section: "yAxis", fieldName: "enablePadding", label: "Add Padding to Value Axis Scale", updateField: _e }), e.yAxis.enablePadding && /* @__PURE__ */ i.createElement(Qe, { type: "number", section: "yAxis", fieldName: "scalePadding", label: "Padding Percentage", className: "number-narrow", updateField: _e, value: e.yAxis.scalePadding }), e.visualizationSubType === "regular" && e.visualizationType !== "Forest Plot" && /* @__PURE__ */ i.createElement(yt, { value: e.useLogScale, fieldName: "useLogScale", label: "use logarithmic scale", updateField: _e })), /* @__PURE__ */ i.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ i.createElement(yt, { value: e.dataFormat.commas, section: "dataFormat", fieldName: "commas", label: "Add commas", updateField: _e }), /* @__PURE__ */ i.createElement(
    yt,
    {
      value: e.dataFormat.abbreviated,
      section: "dataFormat",
      fieldName: "abbreviated",
      label: "Abbreviate Axis Values",
      updateField: _e,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  ), /* @__PURE__ */ i.createElement(Qe, { value: e.dataFormat.roundTo ? e.dataFormat.roundTo : 0, type: "number", section: "dataFormat", fieldName: "roundTo", label: "Round to decimal point", className: "number-narrow", updateField: _e, min: 0 }), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(
    Qe,
    {
      value: e.dataFormat.prefix,
      section: "dataFormat",
      fieldName: "prefix",
      label: "Prefix",
      updateField: _e,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    Qe,
    {
      value: e.dataFormat.suffix,
      section: "dataFormat",
      fieldName: "suffix",
      label: "Suffix",
      updateField: _e,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), e.orientation === "horizontal" ? (
    // horizontal - x is vertical y is horizontal
    /* @__PURE__ */ i.createElement(i.Fragment, null, at() && /* @__PURE__ */ i.createElement(yt, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: _e }), st() && /* @__PURE__ */ i.createElement(yt, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Label", updateField: _e }), it() && /* @__PURE__ */ i.createElement(yt, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: _e }), ze() && /* @__PURE__ */ i.createElement(Qe, { value: e.xAxis.max, section: "xAxis", fieldName: "max", label: "max value", type: "number", placeholder: "Auto", updateField: _e }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, pt.maxMsg), oe() && /* @__PURE__ */ i.createElement(Qe, { value: e.xAxis.min, section: "xAxis", fieldName: "min", type: "number", label: "min value", placeholder: "Auto", updateField: _e }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, pt.minMsg), e.visualizationType === "Deviation Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Qe, { value: e.xAxis.target, section: "xAxis", fieldName: "target", type: "number", label: "Deviation point", placeholder: "Auto", updateField: _e }), /* @__PURE__ */ i.createElement(Qe, { value: e.xAxis.targetLabel || "Target", section: "xAxis", fieldName: "targetLabel", type: "text", label: "Deviation point Label", updateField: _e }), /* @__PURE__ */ i.createElement(yt, { value: e.xAxis.showTargetLabel, section: "xAxis", fieldName: "showTargetLabel", label: "Show Deviation point label", updateField: _e })))
  ) : e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(yt, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: _e }), /* @__PURE__ */ i.createElement(yt, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Label", updateField: _e }), /* @__PURE__ */ i.createElement(yt, { value: e.yAxis.hideTicks, section: "yAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: _e }), /* @__PURE__ */ i.createElement(Qe, { value: e.yAxis.max, section: "yAxis", fieldName: "max", type: "number", label: "left axis max value", placeholder: "Auto", updateField: _e }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, pt.maxMsg), /* @__PURE__ */ i.createElement(Qe, { value: e.yAxis.min, section: "yAxis", fieldName: "min", type: "number", label: "left axis min value", placeholder: "Auto", updateField: _e }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, pt.minMsg)), ue() && e.orientation !== "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(Ni, { allowZeroExpanded: !0 }, (je = (Te = e.yAxis) == null ? void 0 : Te.anchors) == null ? void 0 : je.map((ne, J) => /* @__PURE__ */ i.createElement(_n, { className: "series-item series-item--chart", key: `yaxis-anchors-2-${J}` }, /* @__PURE__ */ i.createElement(Nn, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Fn, { className: "accordion__button accordion__button" }, "Anchor ", J + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (de) => {
        de.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re.splice(J, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(zn, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[J].value ? e.yAxis.anchors[J].value : "",
      onChange: (de) => {
        de.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re[J].value = de.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Color"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[J].color ? e.yAxis.anchors[J].color : "",
      onChange: (de) => {
        de.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re[J].color = de.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.yAxis.anchors[J].lineStyle || "",
      onChange: (de) => {
        const Re = [...e.yAxis.anchors];
        Re[J].lineStyle = de.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    },
    /* @__PURE__ */ i.createElement("option", null, "Select"),
    M.map((de) => /* @__PURE__ */ i.createElement("option", { key: de.key }, de.value))
  )))))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (ne) => {
        ne.preventDefault();
        const J = [...e.yAxis.anchors];
        J.push({}), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: J
          }
        });
      }
    },
    "Add Anchor"
  )), ue() && e.orientation === "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(Ni, { allowZeroExpanded: !0 }, (gt = (lt = e.xAxis) == null ? void 0 : lt.anchors) == null ? void 0 : gt.map((ne, J) => /* @__PURE__ */ i.createElement(_n, { className: "series-item series-item--chart", key: `xaxis-anchors-${J}` }, /* @__PURE__ */ i.createElement(Nn, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Fn, { className: "accordion__button accordion__button" }, "Anchor ", J + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (de) => {
        de.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re.splice(J, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(zn, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[J].value ? e.xAxis.anchors[J].value : "",
      onChange: (de) => {
        de.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re[J].value = de.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Color"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[J].color ? e.xAxis.anchors[J].color : "",
      onChange: (de) => {
        de.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re[J].color = de.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.xAxis.anchors[J].lineStyle || "",
      onChange: (de) => {
        const Re = [...e.xAxis.anchors];
        Re[J].lineStyle = de.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    },
    /* @__PURE__ */ i.createElement("option", null, "Select"),
    M.map((de) => /* @__PURE__ */ i.createElement("option", { key: de.key }, de.value))
  )))))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (ne) => {
        ne.preventDefault();
        const J = [...e.xAxis.anchors];
        J.push({}), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: J
          }
        });
      }
    },
    "Add Anchor"
  )))), yn && /* @__PURE__ */ i.createElement(_n, null, /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement(Fn, null, "Right Value Axis")), /* @__PURE__ */ i.createElement(zn, null, /* @__PURE__ */ i.createElement(Qe, { value: e.yAxis.rightLabel, section: "yAxis", fieldName: "rightLabel", label: "Label", updateField: _e }), /* @__PURE__ */ i.createElement(Qe, { value: e.yAxis.rightNumTicks, placeholder: "Auto", type: "number", section: "yAxis", fieldName: "rightNumTicks", label: "Number of ticks", className: "number-narrow", updateField: _e }), /* @__PURE__ */ i.createElement(Qe, { value: e.yAxis.rightAxisSize, type: "number", section: "yAxis", fieldName: "rightAxisSize", label: "Size (Width)", className: "number-narrow", updateField: _e }), /* @__PURE__ */ i.createElement(Qe, { value: e.yAxis.rightLabelOffsetSize, type: "number", section: "yAxis", fieldName: "rightLabelOffsetSize", label: "Label Offset", className: "number-narrow", updateField: _e }), /* @__PURE__ */ i.createElement("span", { className: "divider-heading" }, "Number Formatting"), /* @__PURE__ */ i.createElement(yt, { value: e.dataFormat.rightCommas, section: "dataFormat", fieldName: "rightCommas", label: "Add commas", updateField: _e }), /* @__PURE__ */ i.createElement(Qe, { value: e.dataFormat.rightRoundTo, type: "number", section: "dataFormat", fieldName: "rightRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: _e, min: 0 }), /* @__PURE__ */ i.createElement("div", { className: "two-col-inputs" }, /* @__PURE__ */ i.createElement(
    Qe,
    {
      value: e.dataFormat.rightPrefix,
      section: "dataFormat",
      fieldName: "rightPrefix",
      label: "Prefix",
      updateField: _e,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data prefix to display in the data table and chart tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data prefix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    Qe,
    {
      value: e.dataFormat.rightSuffix,
      section: "dataFormat",
      fieldName: "rightSuffix",
      label: "Suffix",
      updateField: _e,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("p", null, "Enter a data suffix to display in the data table and tooltips, if applicable."), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  )), /* @__PURE__ */ i.createElement(yt, { value: e.yAxis.rightHideAxis, section: "yAxis", fieldName: "rightHideAxis", label: "Hide Axis", updateField: _e }), /* @__PURE__ */ i.createElement(yt, { value: e.yAxis.rightHideLabel, section: "yAxis", fieldName: "rightHideLabel", label: "Hide Label", updateField: _e }), /* @__PURE__ */ i.createElement(yt, { value: e.yAxis.rightHideTicks, section: "yAxis", fieldName: "rightHideTicks", label: "Hide Ticks", updateField: _e }), /* @__PURE__ */ i.createElement(Qe, { value: e.yAxis.max, section: "yAxis", fieldName: "rightMax", type: "number", label: "right axis max value", placeholder: "Auto", updateField: _e }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, pt.rightMaxMessage), /* @__PURE__ */ i.createElement(Qe, { value: e.yAxis.min, section: "yAxis", fieldName: "rightMin", type: "number", label: "right axis min value", placeholder: "Auto", updateField: _e }), /* @__PURE__ */ i.createElement("span", { style: { color: "red", display: "block" } }, pt.minMsg))), De() && /* @__PURE__ */ i.createElement(_n, null, /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement(Fn, null, e.visualizationType === "Pie" ? "Segments" : "Date/Category Axis", !e.xAxis.dataKey && /* @__PURE__ */ i.createElement(Vu, { width: "25", className: "warning-icon" }))), /* @__PURE__ */ i.createElement(zn, null, e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, e.visualizationType !== "Forest Plot" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Data Scaling Type", /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none", display: "inline-block" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, "Linear scales are employed for quantitative data, while time scales are used for time-series data."))), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.xAxis.type,
      onChange: (ne) => t({
        ...e,
        xAxis: {
          ...e.xAxis,
          type: ne.target.value
        }
      })
    },
    /* @__PURE__ */ i.createElement("option", { value: "categorical" }, "Categorical (Linear Scale)"),
    /* @__PURE__ */ i.createElement("option", { value: "date" }, "Date (Linear Scale)"),
    /* @__PURE__ */ i.createElement("option", { value: "date-time" }, "Date (Date Time Scale)"),
    e.visualizationType === "Scatter Plot" && /* @__PURE__ */ i.createElement("option", { value: "continuous" }, "Continuous")
  )), we() && /* @__PURE__ */ i.createElement(
    Qe,
    {
      value: e.xAxis.padding,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "padding",
      label: "Padding (Percent)",
      className: "number-narrow",
      updateField: _e,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "For use with date scale. Extends the earliest and latest dates represented on the scale by the percentage specified.")))
    }
  )), /* @__PURE__ */ i.createElement(
    Ct,
    {
      value: e.xAxis.dataKey || Ut() || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Data Key",
      initial: "Select",
      required: !0,
      updateField: _e,
      options: zt(!1),
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Select the column or row containing the categories or dates for this axis. ")))
    }
  )), e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement(
    Ct,
    {
      value: e.xAxis.dataKey || "",
      section: "xAxis",
      fieldName: "dataKey",
      label: "Segment Labels",
      initial: "Select",
      required: !0,
      updateField: _e,
      options: zt(!1),
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Select the source row or column that contains the segment labels. Depending on the data structure, it may be listed as "Key."')))
    }
  ), e.visualizationType !== "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Qe, { value: e.xAxis.label, section: "xAxis", fieldName: "label", label: "Label", updateField: _e }), e.xAxis.type === "continuous" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    Qe,
    {
      value: e.dataFormat.bottomPrefix,
      section: "dataFormat",
      fieldName: "bottomPrefix",
      label: "Prefix",
      updateField: _e,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "$"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    Qe,
    {
      value: e.dataFormat.bottomSuffix,
      section: "dataFormat",
      fieldName: "bottomSuffix",
      label: "Suffix",
      updateField: _e,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, 'Enter a data suffix (such as "%"), if applicable.')))
    }
  ), /* @__PURE__ */ i.createElement(
    yt,
    {
      value: e.dataFormat.bottomAbbreviated,
      section: "dataFormat",
      fieldName: "bottomAbbreviated",
      label: "Abbreviate Axis Values",
      updateField: _e,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "This option abbreviates very large or very small numbers on the value axis")))
    }
  )), Cn(e.xAxis) && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("p", { style: { padding: "1.5em 0 0.5em", fontSize: ".9rem", lineHeight: "1rem" } }, "Format how charts should parse and display your dates using", " ", /* @__PURE__ */ i.createElement("a", { href: "https://github.com/d3/d3-time-format#locale_format", target: "_blank", rel: "noreferrer" }, "these guidelines"), "."), /* @__PURE__ */ i.createElement(
    Qe,
    {
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "This field specifies the pattern used to read and interpret dates in your dataset, ensuring the dates are correctly understood and processed. "))),
      value: e.xAxis.dateParseFormat,
      section: "xAxis",
      fieldName: "dateParseFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "Date Parse Format",
      updateField: _e
    }
  ), /* @__PURE__ */ i.createElement(
    Qe,
    {
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, " Adjusts the date display format on the axis for clear, visual date representation."))),
      value: e.xAxis.dateDisplayFormat,
      section: "xAxis",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "AXIS DATE DISPLAY FORMAT",
      updateField: _e
    }
  ), /* @__PURE__ */ i.createElement(
    Qe,
    {
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Specify a custom format for displaying dates in data table. If left empty, dates will adopt the Axis Date Display format. "))),
      value: e.table.dateDisplayFormat,
      section: "table",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "DATA TABLE DATE DISPLAY FORMAT",
      updateField: _e
    }
  ), /* @__PURE__ */ i.createElement(
    Qe,
    {
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Specify a custom format for displaying dates on hovers. If left empty, dates will adopt the Axis Date Display format. "))),
      value: e.tooltips.dateDisplayFormat,
      section: "tooltips",
      fieldName: "dateDisplayFormat",
      placeholder: "Ex. %Y-%m-%d",
      label: "HOVER DATE DISPLAY FORMAT",
      updateField: _e
    }
  )), /* @__PURE__ */ i.createElement(
    yt,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: e.xAxis.type === "date" ? "Limit by start and/or end dates" : "Exclude one or more values",
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "When this option is checked, you can select source-file values for exclusion from the date/category axis. "))),
      updateField: _e
    }
  ), e.exclusions.active && /* @__PURE__ */ i.createElement(i.Fragment, null, e.xAxis.type === "categorical" && /* @__PURE__ */ i.createElement(i.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ i.createElement($e, null)), /* @__PURE__ */ i.createElement(
    Ct,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (ne) => {
        ne.target.value !== "" && ne.target.value !== "Select" && Xe(ne.target.value), ne.target.value = "";
      },
      options: Tn(e.xAxis.dataKey, !0)
    }
  )), e.xAxis.type === "date" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Qe, { type: "date", section: "exclusions", fieldName: "dateStart", label: "Start Date", updateField: _e, value: e.exclusions.dateStart || "" }), /* @__PURE__ */ i.createElement(Qe, { type: "date", section: "exclusions", fieldName: "dateEnd", label: "End Date", updateField: _e, value: e.exclusions.dateEnd || "" }))), ie() && /* @__PURE__ */ i.createElement(Qe, { value: e.xAxis.numTicks, placeholder: "Auto", type: "number", min: 1, section: "xAxis", fieldName: "numTicks", label: "Number of ticks", className: "number-narrow", updateField: _e }), un() && /* @__PURE__ */ i.createElement(Qe, { value: e.xAxis.size, type: "number", min: 0, section: "xAxis", fieldName: "size", label: e.orientation === "horizontal" ? "Size (Width)" : "Size (Height)", className: "number-narrow", updateField: _e }), (e.xAxis.type === "continuous" || e.forestPlot.type === "Logarithmic") && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(yt, { value: e.dataFormat.bottomCommas, section: "dataFormat", fieldName: "bottomCommas", label: "Add commas", updateField: _e }), /* @__PURE__ */ i.createElement(Qe, { value: e.dataFormat.bottomRoundTo, type: "number", section: "dataFormat", fieldName: "bottomRoundTo", label: "Round to decimal point", className: "number-narrow", updateField: _e, min: 0 })), on() && e.orientation === "vertical" && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(yt, { value: e.isResponsiveTicks, fieldName: "isResponsiveTicks", label: "Use Responsive Ticks", updateField: _e }), (e.orientation === "horizontal" || !e.isResponsiveTicks) && Oe() && /* @__PURE__ */ i.createElement(Qe, { value: e.xAxis.tickRotation, type: "number", min: 0, section: "xAxis", fieldName: "tickRotation", label: "Tick rotation (Degrees)", className: "number-narrow", updateField: _e }), e.orientation === "vertical" && e.isResponsiveTicks && e.visualizationType !== "Paired Bar" && /* @__PURE__ */ i.createElement(
    Qe,
    {
      value: e.xAxis.maxTickRotation,
      type: "number",
      min: 0,
      section: "xAxis",
      fieldName: "maxTickRotation",
      label: "Max Tick Rotation",
      className: "number-narrow",
      updateField: _e,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Degrees ticks will be rotated if values overlap, especially in smaller viewports.")))
    }
  ), e.orientation === "horizontal" ? /* @__PURE__ */ i.createElement(i.Fragment, null, Ce() && /* @__PURE__ */ i.createElement(yt, { value: e.yAxis.hideAxis, section: "yAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: _e }), Ie() && /* @__PURE__ */ i.createElement(yt, { value: e.yAxis.hideLabel, section: "yAxis", fieldName: "hideLabel", label: "Hide Label", updateField: _e })) : /* @__PURE__ */ i.createElement(i.Fragment, null, Ce() && /* @__PURE__ */ i.createElement(yt, { value: e.xAxis.hideAxis, section: "xAxis", fieldName: "hideAxis", label: "Hide Axis", updateField: _e }), Ie() && /* @__PURE__ */ i.createElement(yt, { value: e.xAxis.hideLabel, section: "xAxis", fieldName: "hideLabel", label: "Hide Label", updateField: _e }), ge() && /* @__PURE__ */ i.createElement(yt, { value: e.xAxis.hideTicks, section: "xAxis", fieldName: "hideTicks", label: "Hide Ticks", updateField: _e })), ((dt = e.series) == null ? void 0 : dt.length) === 1 && e.visualizationType === "Bar" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("label", { htmlFor: "barHighlight" }, "Bar Highlighting"), e.series.length === 1 && mn.map((ne, J) => /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("div", { className: "edit-block", key: `highlighted-bar-${J}` }, /* @__PURE__ */ i.createElement("button", { className: "remove-column", onClick: (de) => xn(de, J) }, "Remove"), /* @__PURE__ */ i.createElement("p", null, "Highlighted Bar ", J + 1), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Value"), /* @__PURE__ */ i.createElement("select", { value: e.highlightedBarValues[J].value, onChange: (de) => Ht(de, J) }, /* @__PURE__ */ i.createElement("option", { value: "" }, "- Select Value -"), Sn && [...new Set(Sn)].sort().map((de) => /* @__PURE__ */ i.createElement("option", { key: `special-class-value-option-${J}-${de}` }, de)))), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Color"), /* @__PURE__ */ i.createElement("input", { type: "text", value: e.highlightedBarValues[J].color ? e.highlightedBarValues[J].color : "", onChange: (de) => Xt(de, J) })), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Border Width"), /* @__PURE__ */ i.createElement("input", { max: "5", min: "0", type: "number", value: e.highlightedBarValues[J].borderWidth ? e.highlightedBarValues[J].borderWidth : "", onChange: (de) => Bn(de, J) })), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Legend Label"), /* @__PURE__ */ i.createElement("input", { type: "text", value: e.highlightedBarValues[J].legendLabel ? e.highlightedBarValues[J].legendLabel : "", onChange: (de) => en(de, J) }))))), /* @__PURE__ */ i.createElement("button", { className: "btn full-width", onClick: (ne) => En(ne) }, "Add Highlighted Bar"))), e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    yt,
    {
      value: e.exclusions.active,
      section: "exclusions",
      fieldName: "active",
      label: "Exclude one or more values",
      updateField: _e,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "When this option is checked, you can select values for exclusion from the pie segments.")))
    }
  ), e.exclusions.active && /* @__PURE__ */ i.createElement(i.Fragment, null, e.exclusions.keys.length > 0 && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("fieldset", null, /* @__PURE__ */ i.createElement("legend", { className: "edit-label" }, "Excluded Keys")), /* @__PURE__ */ i.createElement($e, null)), /* @__PURE__ */ i.createElement(
    Ct,
    {
      fieldName: "visualizationType",
      label: "Add Exclusion",
      initial: "Select",
      onChange: (ne) => {
        ne.target.value !== "" && ne.target.value !== "Select" && Xe(ne.target.value), ne.target.value = "";
      },
      options: Tn(e.xAxis.dataKey, !0)
    }
  ))), ue() && e.orientation !== "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(Ni, { allowZeroExpanded: !0 }, (On = (Nt = e.xAxis) == null ? void 0 : Nt.anchors) == null ? void 0 : On.map((ne, J) => /* @__PURE__ */ i.createElement(_n, { className: "series-item series-item--chart", key: `xaxis-anchors-2-${J}` }, /* @__PURE__ */ i.createElement(Nn, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Fn, { className: "accordion__button accordion__button" }, "Anchor ", J + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (de) => {
        de.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re.splice(J, 1), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(zn, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[J].value ? e.xAxis.anchors[J].value : "",
      onChange: (de) => {
        de.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re[J].value = de.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Color"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.xAxis.anchors[J].color ? e.xAxis.anchors[J].color : "",
      onChange: (de) => {
        de.preventDefault();
        const Re = [...e.xAxis.anchors];
        Re[J].color = de.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.xAxis.anchors[J].lineStyle || "",
      onChange: (de) => {
        const Re = [...e.xAxis.anchors];
        Re[J].lineStyle = de.target.value, t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: Re
          }
        });
      }
    },
    /* @__PURE__ */ i.createElement("option", null, "Select"),
    M.map((de) => /* @__PURE__ */ i.createElement("option", { key: de.key }, de.value))
  )))))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (ne) => {
        ne.preventDefault();
        const J = [...e.xAxis.anchors];
        J.push({}), t({
          ...e,
          xAxis: {
            ...e.xAxis,
            anchors: J
          }
        });
      }
    },
    "Add Anchor"
  )), ue() && e.orientation === "horizontal" && /* @__PURE__ */ i.createElement("div", { className: "edit-block" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Anchors"), /* @__PURE__ */ i.createElement(Ni, { allowZeroExpanded: !0 }, (Rn = (Pn = e.yAxis) == null ? void 0 : Pn.anchors) == null ? void 0 : Rn.map((ne, J) => /* @__PURE__ */ i.createElement(_n, { className: "series-item series-item--chart", key: `accordion-yaxis-anchors-${J}` }, /* @__PURE__ */ i.createElement(Nn, { className: "series-item__title" }, /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Fn, { className: "accordion__button accordion__button" }, "Anchor ", J + 1, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "series-list__remove",
      onClick: (de) => {
        de.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re.splice(J, 1), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    },
    "Remove"
  )))), /* @__PURE__ */ i.createElement(zn, null, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Value"), /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "Enter the value as its shown in the data column"))), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[J].value ? e.yAxis.anchors[J].value : "",
      onChange: (de) => {
        de.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re[J].value = de.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", null, "Anchor Color"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: e.yAxis.anchors[J].color ? e.yAxis.anchors[J].color : "",
      onChange: (de) => {
        de.preventDefault();
        const Re = [...e.yAxis.anchors];
        Re[J].color = de.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, "Anchor Line Style", /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.yAxis.anchors[J].lineStyle || "",
      onChange: (de) => {
        const Re = [...e.yAxis.anchors];
        Re[J].lineStyle = de.target.value, t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: Re
          }
        });
      }
    },
    /* @__PURE__ */ i.createElement("option", null, "Select"),
    M.map((de) => /* @__PURE__ */ i.createElement("option", { key: de.key }, de.value))
  )))))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (ne) => {
        ne.preventDefault();
        const J = [...e.yAxis.anchors];
        J.push({}), t({
          ...e,
          yAxis: {
            ...e.yAxis,
            anchors: J
          }
        });
      }
    },
    "Add Anchor"
  )))), /* @__PURE__ */ i.createElement(Fa.Regions, { name: "Regions" }), e.visualizationType !== "Box Plot" && /* @__PURE__ */ i.createElement(_n, null, /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement(Fn, null, "Columns")), /* @__PURE__ */ i.createElement(zn, null, e.type !== "navigation" && /* @__PURE__ */ i.createElement("fieldset", { className: "primary-fieldset edit-block" }, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Additional Columns", /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "You can specify additional columns to display in tooltips and / or the supporting data table."))))), Kt.map((ne) => /* @__PURE__ */ i.createElement("fieldset", { className: "edit-block", key: ne }, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (J) => {
        J.preventDefault(), Bt(ne);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Column"), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.columns[ne] ? e.columns[ne].name : zt()[0],
      onChange: (J) => {
        xt(ne, "name", J.target.value);
      }
    },
    zt().map((J) => /* @__PURE__ */ i.createElement("option", null, J))
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Associate to Series"), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: e.columns[ne] ? e.columns[ne].series : "",
      onChange: (J) => {
        xt(ne, "series", J.target.value);
      }
    },
    /* @__PURE__ */ i.createElement("option", { value: "" }, "Select series"),
    e.series.map((J) => /* @__PURE__ */ i.createElement("option", null, J.dataKey))
  )), /* @__PURE__ */ i.createElement(Qe, { value: e.columns[ne].label, section: "columns", subsection: ne, fieldName: "label", label: "Label", updateField: _e }), /* @__PURE__ */ i.createElement("ul", { className: "column-edit" }, /* @__PURE__ */ i.createElement("li", { className: "three-col" }, /* @__PURE__ */ i.createElement(Qe, { value: e.columns[ne].prefix, section: "columns", subsection: ne, fieldName: "prefix", label: "Prefix", updateField: _e }), /* @__PURE__ */ i.createElement(Qe, { value: e.columns[ne].suffix, section: "columns", subsection: ne, fieldName: "suffix", label: "Suffix", updateField: _e }), /* @__PURE__ */ i.createElement(Qe, { type: "number", value: e.columns[ne].roundToPlace, section: "columns", subsection: ne, fieldName: "roundToPlace", label: "Round", updateField: _e })), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[ne].commas,
      onChange: (J) => {
        xt(ne, "commas", J.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Add Commas to Numbers"))), /* @__PURE__ */ i.createElement("li", null, e.table.showVertical && /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[ne].dataTable,
      onChange: (J) => {
        xt(ne, "dataTable", J.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Show in Data Table"))), e.visualizationType === "Pie" && /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[ne].showInViz,
      onChange: (J) => {
        xt(ne, "showInViz", J.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Show in Visualization"))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[ne].tooltips || !1,
      onChange: (J) => {
        Vn(ne, J.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Show in tooltip"))), e.visualizationType === "Forest Plot" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[ne].forestPlot || !1,
      onChange: (J) => {
        xt(ne, "forestPlot", J.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Show in Forest Plot"))), /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "checkbox" }, /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: e.columns[ne].forestPlotAlignRight || !1,
      onChange: (J) => {
        xt(ne, "forestPlotAlignRight", J.target.checked);
      }
    }
  ), /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Align Right"))), !e.columns[ne].forestPlotAlignRight && /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("label", { className: "text" }, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Forest Plot Starting Point"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "number",
      value: e.columns[ne].forestPlotStartingPoint || 0,
      onChange: (J) => {
        xt(ne, "forestPlotStartingPoint", J.target.value);
      }
    }
  ))))))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (ne) => {
        ne.preventDefault(), $t(Kt.length + 1);
      }
    },
    "Add Column"
  )), e.legend.type === "category" && /* @__PURE__ */ i.createElement("fieldset", { className: "primary-fieldset edit-block" }, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Additional Category", /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "You can provide additional categories to ensure they appear in the legend"))))), e.legend.additionalCategories && e.legend.additionalCategories.map((ne, J) => /* @__PURE__ */ i.createElement("fieldset", { className: "edit-block", key: ne }, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (de) => {
        de.preventDefault();
        const Re = [...e.legend.additionalCategories];
        Re.splice(J, 1), _e("legend", null, "additionalCategories", Re);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement(
    Qe,
    {
      value: ne,
      label: "Category",
      section: "legend",
      subsection: null,
      fieldName: "additionalCategories",
      updateField: (de, Re, Mt, qt) => {
        const Mn = [...e.legend.additionalCategories];
        Mn[J] = qt, _e(de, Re, Mt, Mn);
      }
    }
  ))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (ne) => {
        ne.preventDefault();
        const J = [...e.legend.additionalCategories || []];
        J.push(""), _e("legend", null, "additionalCategories", J);
      }
    },
    "Add Category"
  )))), ee() && /* @__PURE__ */ i.createElement(_n, null, /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement(Fn, null, "Legend")), /* @__PURE__ */ i.createElement(zn, null, /* @__PURE__ */ i.createElement(yt, { value: e.legend.reverseLabelOrder, section: "legend", fieldName: "reverseLabelOrder", label: "Reverse Labels", updateField: _e }), /* @__PURE__ */ i.createElement(
    yt,
    {
      value: !!e.legend.hide,
      section: "legend",
      fieldName: "hide",
      label: "Hide Legend",
      updateField: _e,
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "With a single-series chart, consider hiding the legend to reduce visual clutter.")))
    }
  ), e.visualizationType === "Line" && /* @__PURE__ */ i.createElement(yt, { value: e.legend.lineMode, section: "legend", fieldName: "lineMode", label: "Show Lined Style Legend", updateField: _e }), e.visualizationType === "Bar" && e.visualizationSubType === "regular" && e.runtime.seriesKeys.length === 1 && /* @__PURE__ */ i.createElement(Ct, { value: e.legend.colorCode, section: "legend", fieldName: "colorCode", label: "Color code by category", initial: "Select", updateField: _e, options: _t(n) }), /* @__PURE__ */ i.createElement(Ct, { value: e.legend.behavior, section: "legend", fieldName: "behavior", label: "Legend Behavior (When clicked)", updateField: (...[ne, , J, de]) => Ln(ne, J, de), options: ["highlight", "isolate"] }), Ae() && /* @__PURE__ */ i.createElement(yt, { value: e.legend.axisAlign, fieldName: "axisAlign", section: "legend", label: "Align to Axis on Isolate", updateField: _e }), e.legend.behavior === "highlight" && e.tooltips.singleSeries && /* @__PURE__ */ i.createElement(yt, { value: e.legend.highlightOnHover, section: "legend", fieldName: "highlightOnHover", label: "HIGHLIGHT DATA SERIES ON HOVER", updateField: _e }), V && e.legend.behavior === "isolate" && !or && /* @__PURE__ */ i.createElement("fieldset", { className: "primary-fieldset edit-block", key: "additional-highlight-values" }, /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label" }, "Isolate Data Series", /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, "You can choose data series that are shown on load. Others will be added when the user clicks on them in the legend."))))), e.legend.seriesHighlight && e.legend.seriesHighlight.map((ne, J) => /* @__PURE__ */ i.createElement("fieldset", { className: "edit-block", key: `${ne}-${J}` }, /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "remove-column",
      onClick: (de) => {
        de.preventDefault();
        const Re = [...e.legend.seriesHighlight];
        Re.splice(J, 1), _e("legend", null, "seriesHighlight", Re), Re.length || R();
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement(
    Ct,
    {
      value: e.legend.seriesHighlight[J],
      fieldName: "seriesHighlight",
      label: "Isolate Value",
      onChange: (de) => {
        const Re = [...e.legend.seriesHighlight];
        Re.includes(de.target.value) || (Re[J] = de.target.value, sn([...Re]));
      },
      options: Zn()
    }
  ))), /* @__PURE__ */ i.createElement(
    "button",
    {
      className: "btn full-width",
      onClick: (ne) => {
        ne.preventDefault();
        const J = Zn(), de = [...e.legend.seriesHighlight];
        if (de.length < J.length) {
          const [Mt] = J.filter((qt) => !de.includes(qt));
          de.push(Mt), sn([...de]);
        }
      }
    },
    "Add Isolate Value"
  )), /* @__PURE__ */ i.createElement(Qe, { value: e.legend.label, section: "legend", fieldName: "label", label: "Title", updateField: _e }), /* @__PURE__ */ i.createElement(Ct, { value: e.legend.position, section: "legend", fieldName: "position", label: "Position", updateField: _e, options: ["right", "left", "bottom"] }), e.legend.position === "bottom" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(yt, { value: e.legend.singleRow, section: "legend", fieldName: "singleRow", label: "Single Row Legend", updateField: _e }), /* @__PURE__ */ i.createElement(yt, { value: e.legend.verticalSorted, section: "legend", fieldName: "verticalSorted", label: "Vertical sorted Legend", updateField: _e })), /* @__PURE__ */ i.createElement(Qe, { type: "textarea", value: e.legend.description, updateField: _e, section: "legend", fieldName: "description", label: "Legend Description" }))), He() && /* @__PURE__ */ i.createElement(_n, null, /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement(Fn, null, "Filters")), /* @__PURE__ */ i.createElement(zn, null, e.filters && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    Ct,
    {
      value: e.filterBehavior,
      fieldName: "filterBehavior",
      label: "Filter Behavior",
      updateField: _e,
      options: ["Apply Button", "Filter Change"],
      tooltip: /* @__PURE__ */ i.createElement(Le, { style: { textTransform: "none" } }, /* @__PURE__ */ i.createElement(Le.Target, null, /* @__PURE__ */ i.createElement(kt, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ i.createElement(Le.Content, null, /* @__PURE__ */ i.createElement("p", null, 'The Apply Button option changes the visualization when the user clicks "apply". The Filter Change option immediately changes the visualization when the selection is changed.')))
    }
  ), /* @__PURE__ */ i.createElement("br", null)), e.filters && /* @__PURE__ */ i.createElement("ul", { className: "filters-list" }, e.filters.map((ne, J) => ne.type === "url" ? /* @__PURE__ */ i.createElement(i.Fragment, null) : /* @__PURE__ */ i.createElement("fieldset", { className: "edit-block", key: J }, /* @__PURE__ */ i.createElement(
    "button",
    {
      type: "button",
      className: "remove-column",
      onClick: () => {
        It(J);
      }
    },
    "Remove"
  ), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Filter"), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: ne.columnName,
      onChange: (de) => {
        pn("columnName", J, de.target.value);
      }
    },
    /* @__PURE__ */ i.createElement("option", { value: "" }, "- Select Option -"),
    nt().map((de, Re) => /* @__PURE__ */ i.createElement("option", { value: de, key: Re }, de))
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-showDropdown column-heading" }, "Show Filter Input"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "checkbox",
      checked: ne.showDropdown === void 0 ? !0 : ne.showDropdown,
      onChange: (de) => {
        pn("showDropdown", J, de.target.checked);
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Filter Style"), /* @__PURE__ */ i.createElement(
    "select",
    {
      value: ne.filterStyle,
      onChange: (de) => {
        pn("filterStyle", J, de.target.value);
      }
    },
    nn.map((de, Re) => /* @__PURE__ */ i.createElement("option", { key: `filter-style-${Re}`, value: de }, de))
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Label"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: ne.label,
      onChange: (de) => {
        pn("label", J, de.target.value);
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-label column-heading" }, "Default Value Set By Query String Parameter"), /* @__PURE__ */ i.createElement(
    "input",
    {
      type: "text",
      value: ne.setByQueryParameter,
      onChange: (de) => {
        pn("setByQueryParameter", J, de.target.value);
      }
    }
  )), /* @__PURE__ */ i.createElement("label", null, /* @__PURE__ */ i.createElement("span", { className: "edit-filterOrder column-heading" }, "Filter Order"), /* @__PURE__ */ i.createElement("select", { value: ne.order ? ne.order : "asc", onChange: (de) => pn("order", J, de.target.value) }, Ft.map((de, Re) => /* @__PURE__ */ i.createElement("option", { value: de.value, key: `filter-${Re}` }, de.label))), ne.order === "cust" && /* @__PURE__ */ i.createElement(Ih, { onDragEnd: ({ source: de, destination: Re }) => jt(de.index, Re.index, J, e.filters[J]) }, /* @__PURE__ */ i.createElement(Hh, { droppableId: "filter_order" }, (de) => {
    var Re;
    return /* @__PURE__ */ i.createElement("ul", { ...de.droppableProps, className: "sort-list", ref: de.innerRef, style: { marginTop: "1em" } }, (Re = e.filters[J]) == null ? void 0 : Re.values.map((Mt, qt) => /* @__PURE__ */ i.createElement(Em, { key: Mt, draggableId: `draggableFilter-${Mt}`, index: qt }, (Mn, Pr) => /* @__PURE__ */ i.createElement("li", null, /* @__PURE__ */ i.createElement("div", { className: Pr.isDragging ? "currently-dragging" : "", style: hn(Pr.isDragging, Mn.draggableProps.style), ref: Mn.innerRef, ...Mn.draggableProps, ...Mn.dragHandleProps }, Mt)))), de.placeholder);
  })))))), !e.filters && /* @__PURE__ */ i.createElement("p", { style: { textAlign: "center" } }, "There are currently no filters."), /* @__PURE__ */ i.createElement("button", { type: "button", onClick: An, className: "btn full-width" }, "Add Filter"))), /* @__PURE__ */ i.createElement(Fa.Visual, { name: "Visual" }), e.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement(_n, null, /* @__PURE__ */ i.createElement(Nn, null, /* @__PURE__ */ i.createElement(Fn, null, "Data Table")), /* @__PURE__ */ i.createElement(zn, null, /* @__PURE__ */ i.createElement(Wy, { config: e, columns: Object.keys(n[0] || {}), updateField: _e, isDashboard: g, isLoadedFromUrl: qe }), " "))), e.type !== "Spark Line" && /* @__PURE__ */ i.createElement(Sy, { loadConfig: t, state: e, convertStateToConfig: Y }))));
}, ym = (e) => {
  let t = "", r = Math.abs(e);
  return r >= 1e9 ? (t = "B", e = e / 1e9) : r >= 1e6 ? (t = "M", e = e / 1e6) : r >= 1e3 && (t = "K", e = e / 1e3), e + t;
}, kw = (e) => {
  e.sort((d, g) => d - g);
  const t = Math.floor(e.length / 2), r = e.length % 2 === 0, n = r ? e.slice(0, t) : e.slice(0, t + 1), a = r ? e.slice(t) : e.slice(t + 1), o = Math.floor(n.length / 2), f = r ? (n[o - 1] + n[o]) / 2 : n[o], s = Math.floor(a.length / 2), c = r ? (a[s - 1] + a[s]) / 2 : a[s];
  return { q1: f, q3: c };
}, ww = (e, t) => e.toString().localeCompare(t.toString(), "en", { numeric: !0 }), Tw = (e, t) => t.toString().localeCompare(e.toString(), "en", { numeric: !0 }), za = (e, t) => {
  let r = [];
  return t.forEach((n) => {
    let a = !0;
    e.filter((o) => o.type !== "url").forEach((o) => {
      n[o.columnName] != o.active && (a = !1);
    }), a && r.push(n);
  }), r;
}, Cw = [
  {
    value: "Dashed Small",
    key: "dashed-sm"
  },
  {
    value: "Dashed Medium",
    key: "dashed-md"
  },
  {
    value: "Dashed Large",
    key: "dashed-lg"
  },
  {
    value: "Solid Line",
    key: "solid-line"
  }
], vm = (e = "#000000", t = !1) => {
  let r = bs(e), n = t ? r.brighten(0.5).hex() : r.saturate(1.3).hex();
  return [e, n, r.darken(0.3).hex()];
}, xm = (e, t, r) => {
  var g, y;
  const n = t.position === "bottom" || ["sm", "xs", "xxs"].includes(r), a = e.orientation === "horizontal", o = Number(e.xAxis.tickRotation) > 0 ? Number(e.xAxis.tickRotation) : 0, f = (g = e == null ? void 0 : e.brush) == null ? void 0 : g.active, s = 20, c = (y = e == null ? void 0 : e.brush) == null ? void 0 : y.height;
  let d = 0;
  return !n && a && !e.yAxis.label && (d = Number(e.xAxis.labelOffset)), !n && a && e.yAxis.label && !e.isResponsiveTicks && (d = Number(e.runtime.xAxis.size) + Number(e.xAxis.labelOffset)), !n && a && e.yAxis.label && e.isResponsiveTicks && (d = e.dynamicMarginTop + s), !n && a && !e.yAxis.label && e.isResponsiveTicks && (d = e.dynamicMarginTop ? e.dynamicMarginTop - s : Number(e.xAxis.labelOffset) - s), !n && a && e.yAxis.label && e.isResponsiveTicks && (d = e.dynamicMarginTop ? e.dynamicMarginTop + s : Number(e.xAxis.labelOffset)), !a && !n && e.xAxis.label && o && !e.isResponsiveTicks && (d = f ? c + e.xAxis.tickWidthMax + -e.xAxis.size + e.xAxis.labelOffset + s : e.xAxis.tickWidthMax + s + -e.xAxis.size + e.xAxis.labelOffset), !a && !n && !e.xAxis.label && o && e.isResponsiveTicks, !a && !n && !e.xAxis.label && o && !e.dynamicMarginTop && !e.isResponsiveTicks && (d = f ? e.xAxis.tickWidthMax + c + s + -e.xAxis.size : 0), !a && !n && e.xAxis.label && !o && !e.isResponsiveTicks && (d = f ? c + -e.xAxis.size + e.xAxis.labelOffset + s : -e.xAxis.size + e.xAxis.labelOffset + s), !a && !n && e.xAxis.label && e.dynamicMarginTop && e.isResponsiveTicks && (d = f ? c + e.xAxis.labelOffset + -e.xAxis.size + e.xAxis.tickWidthMax : e.dynamicMarginTop + -e.xAxis.size + s), !a && !n && !e.xAxis.label && e.dynamicMarginTop && e.isResponsiveTicks && (d = f ? c + e.xAxis.labelOffset + -e.xAxis.size + e.xAxis.tickWidthMax : e.dynamicMarginTop + -e.xAxis.size - s), !a && !n && e.xAxis.label && !e.dynamicMarginTop && e.isResponsiveTicks && (d = f ? c + e.xAxis.labelOffset + -e.xAxis.size + 25 : e.xAxis.labelOffset + -e.xAxis.size + s), !a && !n && !e.xAxis.label && !e.dynamicMarginTop && e.isResponsiveTicks && (d = -e.xAxis.size + s + e.xAxis.labelOffset), !a && !n && !e.xAxis.label && !o && !e.dynamicMarginTop && !e.isResponsiveTicks && (d = f ? c + -e.xAxis.size + e.xAxis.labelOffset : 0), `${d}px`;
};
const bm = (e) => {
  const t = /(?:\.([^.]+))$/, r = /[?&]wt=(csv|json)(?:&|$)/, n = new URL(e, window.location.origin), a = n.pathname, o = n.search, f = t.exec(a);
  if (f && f[1])
    return f[1];
  const s = r.exec(o);
  return s && s[1] ? s[1] : "";
};
function eT({ configUrl: e, config: t, isEditor: r = !1, isDebug: n = !1, isDashboard: a = !1, setConfig: o, setEditing: f, hostname: s, link: c, setSharedFilter: d, setSharedFilterValue: g, dashboardConfig: y }) {
  var pn, An, $n, Me, Xe, Tt, nt, zt, _t, Tn, Wn;
  const v = new km(), [E, k] = se.useState(!0), [M, T] = se.useState(null), [m, R] = se.useState({}), [O, _] = se.useState(m.data || []), [N, D] = se.useState(void 0), [I, B] = se.useState(void 0), [U, q] = se.useState(t && ((An = (pn = t == null ? void 0 : t.legend) == null ? void 0 : pn.seriesHighlight) != null && An.length) ? [...($n = t == null ? void 0 : t.legend) == null ? void 0 : $n.seriesHighlight] : []), [K, j] = se.useState("lg"), [te, me] = se.useState([]), [H, le] = se.useState(), [ue, fe] = se.useState(), [ae, V] = se.useState(!1), [Z, ee] = se.useState([]), [Ae] = se.useState(`cove-${Math.random().toString(16).slice(-4)}`);
  se.useRef(/* @__PURE__ */ new Map()), se.useRef();
  const xe = se.useRef(null);
  n && console.log("Chart config, isEditor", m, r);
  let { legend: De, title: oe, description: ze, visualizationType: Ie } = m;
  r && (!oe || oe === "") && (oe = "Chart Title"), m.table && (!((Me = m.table) != null && Me.label) || ((Xe = m.table) == null ? void 0 : Xe.label) === "") && (m.table.label = "Data Table");
  const { barBorderClass: Ce, lineDatapointClass: ge, contentClasses: Oe, sparkLineStyles: ie } = Vy(m), we = se.useId(), Pe = (Tt = m.legend) != null && Tt.hide ? m != null && m.title ? `dataTableSection__${m.title.replace(/\s/g, "")}` : "dataTableSection" : we, He = async () => {
    var Y;
    if (m.dataUrl) {
      const $e = new URL(m.runtimeDataUrl || m.dataUrl, window.location.origin);
      let et = Object.fromEntries(new URLSearchParams($e.search)), Ve = !1;
      if ((Y = m.filters) == null || Y.forEach((bt) => {
        bt.type === "url" && et[bt.queryParameter] !== decodeURIComponent(bt.active) && (et[bt.queryParameter] = bt.active, Ve = !0);
      }), (!m.formattedData || m.formattedData.urlFiltered) && !Ve)
        return;
      let pt = `${$e.origin}${$e.pathname}${Object.keys(et).map((bt, mt) => {
        let qe = mt === 0 ? "?" : "&";
        return qe += bt + "=", qe += et[bt], qe;
      }).join("")}`, ot = [];
      try {
        const bt = bm($e.href);
        bt === "csv" || Oh(pt) ? ot = await fetch(pt).then((mt) => mt.text()).then((mt) => _h.parse(mt, {
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0
        }).data) : bt === "json" || Mh(pt) ? ot = await fetch(pt).then((mt) => mt.json()) : ot = [];
      } catch {
        console.error(`Cannot parse URL: ${pt}`), ot = [];
      }
      m.dataDescription && (ot = v.autoStandardize(ot), ot = v.developerStandardize(ot, m.dataDescription)), Object.assign(ot, { urlFiltered: !0 }), Je({ ...m, runtimeDataUrl: pt, data: ot, formattedData: ot }), ot && (_(ot), D(ot), B(za(m.filters, ot)));
    }
  }, Ye = async () => {
    let Y = t || await (await fetch(e)).json(), $e = Y.data || [];
    const et = Y.filters ? Y.filters.filter((ot) => ot.type === "url").length > 0 : !1;
    if (Y.dataUrl && !et)
      try {
        const ot = bm(Y.dataUrl);
        (ot === "csv" || Oh(Y.dataUrl)) && ($e = await fetch(Y.dataUrl + `?v=${qh()}`).then((bt) => bt.text()).then((bt) => (bt = bt.replace(/(".*?")|,/g, (...qe) => qe[1] || "|"), bt = bt.replace(/["]+/g, ""), _h.parse(bt, {
          //quotes: "true",  // dont need these
          //quoteChar: "'",  // has no effect that I can tell
          header: !0,
          dynamicTyping: !0,
          skipEmptyLines: !0,
          delimiter: "|"
          // we are using pipe symbol as delimiter so setting this explicitly for Papa.parse
        }).data))), (ot === "json" || Mh(Y.dataUrl)) && ($e = await fetch(Y.dataUrl + `?v=${qh()}`).then((bt) => bt.json()));
      } catch {
        console.error(`COVE: Cannot parse URL: ${Y.dataUrl}`), $e = [];
      }
    Y.dataDescription && ($e = v.autoStandardize($e), $e = v.developerStandardize($e, Y.dataDescription)), $e && (_($e), D($e)), Y !== void 0 && Y.table !== void 0 && (!Y.table || !Y.table.showVertical) && (Y.table = Y.table || {}, Y.table.showVertical = !1);
    let Ve = { ...Zd, ...Y };
    Ve.filters && Ve.filters.forEach((ot, bt) => {
      const mt = Ey(ot);
      mt && (Ve.filters[bt].active = mt);
    }), Ve.visualizationType === "Box Plot" && (Ve.legend.hide = !0), Ve.table.show === void 0 && (Ve.table.show = !a), Ve.series.map((ot) => {
      ot.tooltip || (ot.tooltip = !0), ot.axis || (ot.axis = "Left");
    }), !Ve.data && $e && (Ve.data = $e);
    const pt = { ...await ky(Ve) };
    Je(pt, $e);
  }, Je = (Y, $e) => {
    var ot, bt, mt;
    let et = $e || O;
    Object.keys(Zd).forEach((qe) => {
      Y[qe] && typeof Y[qe] == "object" && !Array.isArray(Y[qe]) && (Y[qe] = { ...Zd[qe], ...Y[qe] });
    });
    let Ve = [];
    if (Y.exclusions && Y.exclusions.active)
      if (Y.xAxis.type === "categorical" && ((ot = Y.exclusions.keys) == null ? void 0 : ot.length) > 0)
        Ve = et.filter((qe) => !Y.exclusions.keys.includes(qe[Y.xAxis.dataKey]));
      else if (Cn(Y.xAxis) && (Y.exclusions.dateStart || Y.exclusions.dateEnd) && Y.xAxis.dateParseFormat) {
        const qe = (Kt) => new Date(Kt).getTime();
        let Ut = qe(Y.exclusions.dateStart), Qt = qe(Y.exclusions.dateEnd) + 86399999, cn = typeof Ut !== void 0 && isNaN(Ut) === !1, Jt = typeof Qt !== void 0 && isNaN(Qt) === !1;
        cn && Jt ? Ve = et.filter((Kt) => qe(Kt[Y.xAxis.dataKey]) >= Ut && qe(Kt[Y.xAxis.dataKey]) <= Qt) : cn ? Ve = et.filter((Kt) => qe(Kt[Y.xAxis.dataKey]) >= Ut) : Jt && (Ve = et.filter((Kt) => qe(Kt[Y.xAxis.dataKey]) <= Qt));
      } else
        Ve = $e || O;
    else
      Ve = $e || O;
    D(Ve);
    let pt = [];
    if (Y.filters && (Y.filters.forEach((qe, Ut) => {
      let Qt = [];
      Qt = qe.orderedValues || at(qe.columnName, Ve).sort(qe.order === "desc" ? Tw : ww), Y.filters[Ut].values = Qt, Y.filters[Ut].active = Y.filters[Ut].active || Qt[0], Y.filters[Ut].filterStyle = Y.filters[Ut].filterStyle ? Y.filters[Ut].filterStyle : "dropdown";
    }), pt = za(Y.filters, Ve), B(pt)), Y.xAxis.type === "date-time" && Y.barThickness > 0.1 ? Y.barThickness = 0.035 : Y.xAxis.type !== "date-time" && Y.barThickness < 0.1 && (Y.barThickness = 0.35), Y.runtime = {}, Y.runtime.seriesLabels = {}, Y.runtime.seriesLabelsAll = [], Y.runtime.originalXAxis = Y.xAxis, Y.visualizationType === "Pie" ? (Y.runtime.seriesKeys = ($e || et).map((qe) => qe[Y.xAxis.dataKey]), Y.runtime.seriesLabelsAll = Y.runtime.seriesKeys) : Y.runtime.seriesKeys = Y.series ? Y.series.map((qe) => (Y.runtime.seriesLabels[qe.dataKey] = qe.name || qe.label || qe.dataKey, Y.runtime.seriesLabelsAll.push(qe.name || qe.dataKey), qe.dataKey)) : [], Y.visualizationType === "Box Plot" && Y.series) {
      let qe = Ve ? Ve.map(($t) => $t[Y.xAxis.dataKey]) : et.map(($t) => $t[Y.xAxis.dataKey]), Ut = Ve ? Ve.map(($t) => {
        var Bt;
        return Number($t[(Bt = Y == null ? void 0 : Y.series[0]) == null ? void 0 : Bt.dataKey]);
      }) : et.map(($t) => {
        var Bt;
        return Number($t[(Bt = Y == null ? void 0 : Y.series[0]) == null ? void 0 : Bt.dataKey]);
      });
      const cn = function($t) {
        return $t.filter(function(Bt, xt, mn) {
          return mn.indexOf(Bt) === xt;
        });
      }(qe);
      let Jt = [];
      const Kt = [];
      if (!cn)
        return;
      cn.forEach(($t) => {
        try {
          if (!$t)
            throw new nn("No groups resolved in box plots");
          let Bt = Ve ? Ve.filter((sn) => sn[Y.xAxis.dataKey] === $t) : et.filter((sn) => sn[Y.xAxis.dataKey] === $t), xt = Bt.map((sn) => {
            var Ln;
            return Number(sn[(Ln = Y == null ? void 0 : Y.series[0]) == null ? void 0 : Ln.dataKey]);
          }), mn = xt.sort((sn, Ln) => sn - Ln);
          const Sn = kw(mn);
          if (!Bt)
            throw new nn("boxplots dont have data yet");
          if (!Kt)
            throw new nn("boxplots dont have plots yet");
          Y.boxplot.firstQuartilePercentage === "" && (Y.boxplot.firstQuartilePercentage = 0), Y.boxplot.thirdQuartilePercentage === "" && (Y.boxplot.thirdQuartilePercentage = 0);
          const Ht = Sn.q1, En = Sn.q3, xn = En - Ht, Xt = Ht - (En - Ht) * 1.5, en = En + (En - Ht) * 1.5, Bn = mn.filter((sn) => sn < Xt || sn > en);
          let Vn = xt;
          Vn = Vn.filter((sn) => !Bn.includes(sn));
          const or = us(xt) || 0, Zn = ss([or, Ht - 1.5 * xn]);
          Kt.push({
            columnCategory: $t,
            columnMax: us([ss(xt), Ht + 1.5 * xn]),
            columnThirdQuartile: Number(En).toFixed(Y.dataFormat.roundTo),
            columnMedian: Number(Jy(xt)).toFixed(Y.dataFormat.roundTo),
            columnFirstQuartile: Ht.toFixed(Y.dataFormat.roundTo),
            columnMin: Zn,
            columnTotal: xt.reduce((sn, Ln) => sn + Ln, 0),
            columnSd: Number(Gy(xt)).toFixed(Y.dataFormat.roundTo),
            columnMean: Number(Qy(xt)).toFixed(Y.dataFormat.roundTo),
            columnIqr: Number(xn).toFixed(Y.dataFormat.roundTo),
            columnLowerBounds: Zn,
            columnUpperBounds: us([ss(mn), Ht + 1.5 * xn]),
            columnOutliers: Bn,
            values: xt,
            nonOutlierValues: Vn
          });
        } catch (Bt) {
          console.error("COVE: ", Bt.message);
        }
      }), Jt = JSON.parse(JSON.stringify(Kt)), Jt.map(($t) => ($t.columnIqr = void 0, $t.nonOutlierValues = void 0, $t.columnLowerBounds = void 0, $t.columnUpperBounds = void 0, null)), Y.boxplot.allValues = Ut, Y.boxplot.categories = cn, Y.boxplot.plots = Kt, Y.boxplot.tableData = Jt;
    }
    Y.visualizationType === "Combo" && Y.series && (Y.runtime.barSeriesKeys = [], Y.runtime.lineSeriesKeys = [], Y.runtime.areaSeriesKeys = [], Y.runtime.forecastingSeriesKeys = [], Y.series.forEach((qe) => {
      qe.type === "Area Chart" && Y.runtime.areaSeriesKeys.push(qe), qe.type === "Forecasting" && Y.runtime.forecastingSeriesKeys.push(qe), (qe.type === "Bar" || qe.type === "Combo") && Y.runtime.barSeriesKeys.push(qe.dataKey), (qe.type === "Line" || qe.type === "dashed-sm" || qe.type === "dashed-md" || qe.type === "dashed-lg") && Y.runtime.lineSeriesKeys.push(qe.dataKey), qe.type === "Combo" && (qe.type = "Bar");
    })), Y.visualizationType === "Forecasting" && Y.series && (Y.runtime.forecastingSeriesKeys = [], Y.series.forEach((qe) => {
      qe.type === "Forecasting" && Y.runtime.forecastingSeriesKeys.push(qe);
    })), Y.visualizationType === "Area Chart" && Y.series && (Y.runtime.areaSeriesKeys = [], Y.series.forEach((qe) => {
      Y.runtime.areaSeriesKeys.push({ ...qe, type: "Area Chart" });
    })), Y.visualizationType === "Bar" && Y.orientation === "horizontal" || ["Deviation Bar", "Paired Bar", "Forest Plot"].includes(Y.visualizationType) ? (Y.runtime.xAxis = Y.yAxis.yAxis ? Y.yAxis.yAxis : Y.yAxis, Y.runtime.yAxis = Y.xAxis.xAxis ? Y.xAxis.xAxis : Y.xAxis, Y.runtime.horizontal = !1, Y.orientation = "horizontal") : ["Box Plot", "Scatter Plot", "Area Chart", "Line", "Forecasting"].includes(Y.visualizationType) ? (Y.runtime.xAxis = Y.xAxis, Y.runtime.yAxis = Y.yAxis, Y.runtime.horizontal = !1, Y.orientation = "vertical") : (Y.runtime.xAxis = Y.xAxis, Y.runtime.yAxis = Y.yAxis, Y.runtime.horizontal = !1), Y.runtime.uniqueId = Date.now(), Y.runtime.editorErrorMessage = Y.visualizationType === "Pie" && !Y.yAxis.dataKey ? "Data Key property in Y Axis section must be set for pie charts." : "", Y.runtime.editorErrorMessage = Y.visualizationType === "Sankey" && !Y.description ? "SUBTEXT/CITATION field is empty: A description of the Sankey Diagram data must be inputted." : "", (bt = Y.legend.seriesHighlight) != null && bt.length && q((mt = Y.legend) == null ? void 0 : mt.seriesHighlight), R(Y);
  }, at = (Y, $e = this.state.data) => {
    const et = [];
    return $e.forEach((Ve) => {
      const pt = Ve[Y];
      pt && et.includes(pt) === !1 && et.push(pt);
    }), et;
  }, it = (Y, $e) => {
    let et = m.visualizationType === "Bar" && m.visualizationSubType === "horizontal" ? m.xAxis.dataKey : m.yAxis.sortKey, Ve = parseFloat(Y[et]), pt = parseFloat($e[et]);
    return Ve < pt ? m.sortData === "ascending" ? 1 : -1 : Ve > pt ? m.sortData === "ascending" ? -1 : 1 : 0;
  }, st = new xy((Y) => {
    for (let $e of Y) {
      let { width: et, height: Ve } = $e.contentRect, pt = by(et), ot = 32, bt = 350;
      j(pt), r && (et = et - bt), $e.target.dataset.lollipop === "true" && (et = et - 2.5), et = et - ot, me([et, Ve]);
    }
  }), Ge = se.useCallback((Y) => {
    Y !== null && st.observe(Y), fe(Y);
  }, []);
  function We(Y) {
    return Object.keys(Y).length === 0;
  }
  se.useEffect(() => {
    Ye();
  }, []), se.useEffect(() => {
    He();
  }, [JSON.stringify(m.filters)]), se.useEffect(() => {
    ue && !We(m) && !ae && (jy("cove_loaded", { config: m }), V(!0));
  }, [ue, m]), se.useEffect(() => {
    const Y = ($e) => {
      let et = [];
      et.push($e.detail), le(et);
    };
    return Uy("cove_filterData", ($e) => Y($e)), () => {
      Ky("cove_filterData", Y);
    };
  }, [m]), se.useEffect(() => {
    if (H && H[0] && !H[0].hasOwnProperty("active")) {
      let $e = { ...m };
      delete $e.filters, R($e), B(za(H, N));
    }
    if (H && H.length > 0 && H.length > 0 && H[0].hasOwnProperty("active")) {
      let Y = { ...m, filters: H };
      R(Y), B(za(H, N));
    }
  }, [H]), t && se.useEffect(() => {
    Ye();
  }, [t.data]), se.useEffect(() => {
    var Y;
    if (O && m.xAxis && ((Y = m.runtime) != null && Y.seriesKeys)) {
      const $e = ["Paired Bar", "Deviation Bar"].includes(m.visualizationType) ? m.twoColor.palette : m.palette, et = { ...fr, ...ju };
      let Ve = m.customColors || et[$e], pt = m.runtime.seriesKeys.length, ot;
      for (; pt > Ve.length; )
        Ve = Ve.concat(Ve);
      Ve = Ve.slice(0, pt), ot = () => Uf({
        domain: m.runtime.seriesLabelsAll,
        range: Ve,
        unknown: null
      }), T(ot), k(!1);
    }
    m && O && m.sortData && O.sort(it);
  }, [m, O]);
  const Fe = (Y) => {
    if (U.length + 1 === m.runtime.seriesKeys.length && m.visualizationType !== "Forecasting") {
      ft();
      return;
    }
    const $e = [...U];
    let et = Y.datum;
    m.runtime.seriesLabels && m.runtime.seriesKeys.forEach((Ve) => {
      m.runtime.seriesLabels[Ve] === Y.datum && (et = Ve);
    }), $e.indexOf(et) !== -1 ? $e.splice($e.indexOf(et), 1) : $e.push(et), q($e);
  }, ft = () => {
    try {
      const Y = xe.current;
      if (!Y)
        throw new nn("No legend available to set previous focus on.");
      Y.focus();
    } catch (Y) {
      console.error("COVE:", Y.message);
    }
    q([]);
  }, Ke = m.orientation === "horizontal" ? "yAxis" : "xAxis", Ze = (Y, $e = !0) => {
    let et = sg(m.runtime[Ke].dateParseFormat)(Y);
    return et || ($e && (m.runtime.editorErrorMessage = `Error parsing date "${Y}". Try reviewing your data and date parse settings in the X Axis section.`), /* @__PURE__ */ new Date());
  }, ut = (Y) => tf(m.runtime[Ke].dateDisplayFormat)(Y), ht = (Y) => tf(m.tooltips.dateDisplayFormat)(Y);
  function Pt(Y, $e) {
    const Ve = document.createElement("canvas").getContext("2d");
    if (!Ve) {
      console.error("2d context not found");
      return;
    }
    return Ve.font = $e || getComputedStyle(document.body).font, Math.ceil(Ve.measureText(Y).width);
  }
  const on = (Y, $e, et = !1, Ve, pt, ot) => {
    if (isNaN(Y) || !Y)
      return Y;
    const bt = Y < 0;
    ($e === void 0 || !$e) && ($e = "left"), bt && (Y = Math.abs(Y));
    let {
      dataFormat: { commas: mt, abbreviated: qe, roundTo: Ut, prefix: Qt, suffix: cn, rightRoundTo: Jt, bottomRoundTo: Kt, rightPrefix: $t, rightSuffix: Bt, bottomPrefix: xt, bottomSuffix: mn, bottomAbbreviated: Sn }
    } = m;
    String(Y).indexOf(",") !== -1 && (Y = Y.replaceAll(",", ""));
    let Ht = Y, En = {
      useGrouping: !!mt
      // for old chart data table to work right cant just leave this to undefined
    };
    if ($e === "left" || $e === void 0) {
      let en;
      ot !== void 0 ? en = ot ? Number(ot) : 0 : en = Ut ? Number(Ut) : 0, En = {
        useGrouping: ot ? !0 : !!m.dataFormat.commas,
        minimumFractionDigits: en,
        maximumFractionDigits: en
      };
    }
    $e === "right" && (En = {
      useGrouping: !!m.dataFormat.rightCommas,
      minimumFractionDigits: Jt ? Number(Jt) : 0,
      maximumFractionDigits: Jt ? Number(Jt) : 0
    });
    const xn = () => m.forestPlot.type === "Logarithmic" && !Kt ? 2 : Number(Kt) ? Number(Kt) : 0;
    if ($e === "bottom" && (En = {
      useGrouping: !!m.dataFormat.bottomCommas,
      minimumFractionDigits: xn(),
      maximumFractionDigits: xn()
    }), Y = Xh(Y), isNaN(Y))
      return m.runtime.editorErrorMessage = `Unable to parse number from data ${Ht}. Try reviewing your data and selections in the Data Series section.`, Ht;
    if (!m.dataFormat)
      return Y;
    if (m.dataCutoff) {
      let en = Xh(m.dataCutoff);
      Y < en && (Y = en);
    }
    $e === "left" && mt && qe && et || $e === "bottom" && mt && qe && et ? Y = Y : Y = Y.toLocaleString("en-US", En);
    let Xt = "";
    return qe && $e === "left" && et && (Y = ym(parseFloat(Y))), Sn && $e === "bottom" && et && (Y = ym(parseFloat(Y))), Ve && $e === "left" ? Xt = Ve + Xt : Qt && $e === "left" && (Xt += Qt), $t && $e === "right" && (Xt += $t), xt && $e === "bottom" && (Xt += xt), Xt += Y, pt && $e === "left" ? Xt += pt : cn && $e === "left" && (Xt += cn), Bt && $e === "right" && (Xt += Bt), mn && $e === "bottom" && (Xt += mn), bt && (Xt = "-" + Xt), String(Xt);
  }, un = {
    "Paired Bar": /* @__PURE__ */ i.createElement(Yr, null),
    Forecasting: /* @__PURE__ */ i.createElement(Yr, null),
    Bar: /* @__PURE__ */ i.createElement(Yr, null),
    Line: /* @__PURE__ */ i.createElement(Yr, null),
    Combo: /* @__PURE__ */ i.createElement(Yr, null),
    Pie: /* @__PURE__ */ i.createElement(eE, null),
    "Box Plot": /* @__PURE__ */ i.createElement(Yr, null),
    "Area Chart": /* @__PURE__ */ i.createElement(Yr, null),
    "Scatter Plot": /* @__PURE__ */ i.createElement(Yr, null),
    "Deviation Bar": /* @__PURE__ */ i.createElement(Yr, null),
    "Forest Plot": /* @__PURE__ */ i.createElement(Yr, null)
  }, Ot = () => {
    if (m.visualizationType === "Sankey" || m.visualizationType === "Forecasting" || m.visualizationType === "Forest Plot")
      return !1;
    if (m.visualizationType === "Pie") {
      if ((m == null ? void 0 : m.yAxis.dataKey) === void 0)
        return !0;
    } else if ((m == null ? void 0 : m.series) === void 0 || !((m == null ? void 0 : m.series.length) > 0))
      return !0;
    return !m.xAxis.dataKey;
  }, jt = (Y, $e) => {
    if (Y === null || Y === "" || Y === void 0)
      return "";
    if (typeof Y == "string" && Y.length > 0 && m.legend.type === "equalnumber")
      return Y;
    let et = Y, Ve;
    if (Object.keys(m.columns).length > 0 && Object.keys(m.columns).forEach(function(pt) {
      var ot = m.columns[pt];
      ot.name === $e && (Ve = ot);
    }), Ve === void 0 && (Ve = m.type === "chart" ? m.dataFormat : m.primary, Ve.useCommas = Ve.commas, Ve.roundToPlace = Ve.roundTo ? Ve.roundTo : ""), Ve) {
      let pt = !1, ot = 0;
      Number(Y) && (Ve.roundToPlace >= 0 && (pt = Ve.roundToPlace ? Ve.roundToPlace !== "" || Ve.roundToPlace !== null : !1, ot = Ve.roundToPlace ? Number(Ve.roundToPlace) : 0, Ve.hasOwnProperty("roundToPlace") && pt && (et = Number(Y).toFixed(ot))), Ve.hasOwnProperty("useCommas") && Ve.useCommas === !0 && (et = Number(Y).toLocaleString("en-US", {
        style: "decimal",
        minimumFractionDigits: pt ? ot : 0,
        maximumFractionDigits: pt ? ot : 5
      }))), et = (Ve.prefix || "") + et + (Ve.suffix || "");
    }
    return et;
  }, Ft = () => {
    const Y = (et) => {
      et && et.preventDefault();
      let Ve = { ...m };
      delete Ve.newViz, Je(Ve);
    }, $e = {
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gridArea: "content"
    };
    return /* @__PURE__ */ i.createElement("section", { className: "waiting", style: $e }, /* @__PURE__ */ i.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ i.createElement("h3", null, "Finish Configuring"), /* @__PURE__ */ i.createElement("p", null, "Set all required options to the left and confirm below to display a preview of the chart."), /* @__PURE__ */ i.createElement(Hf, { className: "btn", style: { margin: "1em auto" }, disabled: Ot(), onClick: (et) => Y(et) }, "I'm Done")));
  }, nn = () => {
    const Y = {
      position: "absolute",
      background: "white",
      zIndex: "999",
      height: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gridArea: "content"
    };
    return /* @__PURE__ */ i.createElement("section", { className: "waiting", style: Y }, /* @__PURE__ */ i.createElement("section", { className: "waiting-container" }, /* @__PURE__ */ i.createElement("h3", null, "Error With Configuration"), /* @__PURE__ */ i.createElement("p", null, m.runtime.editorErrorMessage)));
  }, yn = (Y) => {
    try {
      if (!Y)
        throw new nn("COVE: No rowObj in applyLegendToRow");
      if (m.type === "navigation") {
        let $e = fr[m.color] || fr.bluegreenreverse;
        return vm($e[3]);
      }
      return vm();
    } catch ($e) {
      console.error("COVE: ", $e);
    }
  }, hn = (Y) => {
    var $e;
    return Array.isArray(Y) ? m.visualizationType === "Forecasting" ? Y : ($e = m == null ? void 0 : m.xAxis) != null && $e.dataKey ? v.cleanData(Y, m.xAxis.dataKey) : Y : [];
  }, Rt = (Y) => Y;
  let Zt = /* @__PURE__ */ i.createElement(My, null);
  const _e = () => {
    const Y = ["chart-container", "p-relative"];
    return m.legend.position === "bottom" && Y.push("bottom"), m.legend.hide && Y.push("legend-hidden"), ge && Y.push(ge), m.barHasBorder || Y.push("chart-bar--no-border"), n && Y.push("debug"), Y.push(...Oe), Y;
  };
  if (!E) {
    const Y = /* @__PURE__ */ i.createElement("a", { href: `#data-table-${m.dataKey}`, className: "margin-left-href" }, m.dataKey, " (Go to Table)");
    Zt = /* @__PURE__ */ i.createElement(i.Fragment, null, r && /* @__PURE__ */ i.createElement(Ew, null), /* @__PURE__ */ i.createElement(Qd.Responsive, { isEditor: r }, m.newViz && /* @__PURE__ */ i.createElement(Ft, null), m.newViz === void 0 && r && m.runtime && ((nt = m.runtime) == null ? void 0 : nt.editorErrorMessage) && /* @__PURE__ */ i.createElement(nn, null), !Ot() && !m.newViz && /* @__PURE__ */ i.createElement("div", { className: "cdc-chart-inner-container cove-component__content", "aria-label": Ef(m), tabIndex: 0 }, /* @__PURE__ */ i.createElement(Ty, { showTitle: m.showTitle, isDashboard: a, title: oe, superTitle: m.superTitle, classes: ["chart-title", `${m.theme}`, "cove-component__header"], style: void 0 }), m.filters && !H && m.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement(Wh, { config: m, setConfig: R, setFilteredData: B, filteredData: I, excludedData: N, filterData: za, dimensions: te }), /* @__PURE__ */ i.createElement(Dy, { skipId: Pe, skipMessage: "Skip Over Chart Container" }), (m == null ? void 0 : m.introText) && m.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement("section", { className: "introText" }, _i(m.introText)), /* @__PURE__ */ i.createElement("div", { style: { marginBottom: xm(m, De, K) }, className: _e().join(" ") }, m.visualizationType !== "Spark Line" && un[m.visualizationType], m.visualizationType === "Spark Line" && /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Wh, { config: m, setConfig: R, setFilteredData: B, filteredData: I, excludedData: N, filterData: za, dimensions: te }), (m == null ? void 0 : m.introText) && /* @__PURE__ */ i.createElement("section", { className: "introText", style: { padding: "0px 0 35px" } }, _i(m.introText)), /* @__PURE__ */ i.createElement("div", { style: { height: "100px", width: "100%", ...ie } }, /* @__PURE__ */ i.createElement(fp, null, ($e) => /* @__PURE__ */ i.createElement(Jk, { width: $e.width, height: $e.height }))), ze && /* @__PURE__ */ i.createElement("div", { className: "subtext", style: { padding: "35px 0 15px" } }, _i(ze))), m.visualizationType === "Sankey" && /* @__PURE__ */ i.createElement(fp, { "aria-hidden": "true" }, ($e) => /* @__PURE__ */ i.createElement(RE, { runtime: m.runtime, width: $e.width, height: $e.height })), !m.legend.hide && m.visualizationType !== "Spark Line" && m.visualizationType !== "Sankey" && /* @__PURE__ */ i.createElement(ew, { ref: xe })), a && m.table && m.table.show && m.table.showDataTableLink ? Y : c && c, ze && m.visualizationType !== "Spark Line" && /* @__PURE__ */ i.createElement("div", { className: "column " + m.isResponsiveTicks ? "subtext--responsive-ticks" : "subtext" }, _i(ze)), /* @__PURE__ */ i.createElement(Pd.Section, { classes: ["download-buttons"] }, m.table.showDownloadImgButton && /* @__PURE__ */ i.createElement(Pd.Button, { text: "Download Image", title: "Download Chart as Image", type: "image", state: m, elementToCapture: Ae }), m.table.showDownloadPdfButton && /* @__PURE__ */ i.createElement(Pd.Button, { text: "Download PDF", title: "Download Chart as PDF", type: "pdf", state: m, elementToCapture: Ae })), (m.xAxis.dataKey && m.table.show && m.visualizationType !== "Spark Line" && m.visualizationType !== "Sankey" || m.visualizationType === "Sankey" && m.table.show) && /* @__PURE__ */ i.createElement(
      Oy,
      {
        config: m,
        rawData: m.visualizationType === "Sankey" ? (_t = (zt = m == null ? void 0 : m.data) == null ? void 0 : zt[0]) == null ? void 0 : _t.tableData : m.table.customTableConfig ? za(m.filters, m.data) : m.data,
        runtimeData: m.visualizationType === "Sankey" ? (Wn = (Tn = m == null ? void 0 : m.data) == null ? void 0 : Tn[0]) == null ? void 0 : Wn.tableData : v.applySuppression(I || N, m.suppressedData),
        expandDataTable: m.table.expanded,
        columns: m.columns,
        displayDataAsText: jt,
        displayGeoName: Rt,
        applyLegendToRow: yn,
        tableTitle: m.table.label,
        indexTitle: m.table.indexLabel,
        vizTitle: oe,
        viewport: K,
        tabbingId: Pe,
        colorScale: M
      }
    ), (m == null ? void 0 : m.footnotes) && /* @__PURE__ */ i.createElement("section", { className: "footnotes" }, _i(m.footnotes)))));
  }
  const It = {
    capitalize: (Y) => Y.charAt(0).toUpperCase() + Y.slice(1),
    computeMarginBottom: xm,
    getXAxisData: (Y) => Cn(m.runtime.xAxis) ? Ze(Y[m.runtime.originalXAxis.dataKey]).getTime() : Y[m.runtime.originalXAxis.dataKey],
    getYAxisData: (Y, $e) => Y[$e],
    config: m,
    setConfig: R,
    rawData: O ?? {},
    excludedData: N,
    transformedData: hn(I || N),
    // do this right before passing to components
    tableData: I || N,
    // do not clean table data
    unfilteredData: O,
    seriesHighlight: U,
    colorScale: M,
    dimensions: te,
    currentViewport: K,
    parseDate: Ze,
    formatDate: ut,
    formatTooltipsDate: ht,
    formatNumber: on,
    loading: E,
    updateConfig: Je,
    colorPalettes: fr,
    isDashboard: a,
    setParentConfig: o,
    missingRequiredSections: Ot,
    setEditing: f,
    setFilteredData: B,
    handleChartAriaLabels: Ef,
    highlight: Fe,
    highlightReset: ft,
    legend: De,
    setSeriesHighlight: q,
    dynamicLegendItems: Z,
    setDynamicLegendItems: ee,
    filterData: za,
    imageId: Ae,
    handleLineType: Cf,
    lineOptions: Cw,
    isNumber: Wu,
    getTextWidth: Pt,
    twoColorPalette: ju,
    isEditor: r,
    isDebug: n,
    setSharedFilter: d,
    setSharedFilterValue: g,
    dashboardConfig: y,
    debugSvg: n
  };
  return /* @__PURE__ */ i.createElement(wt.Provider, { value: It }, /* @__PURE__ */ i.createElement(Qd.VisualizationWrapper, { config: m, isEditor: r, currentViewport: K, ref: Ge, imageId: Ae, showEditorPanel: m == null ? void 0 : m.showEditorPanel }, Zt));
}
export {
  eT as C
};