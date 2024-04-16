import { r as f, R as e } from "./storybook-index-45401197.es.js";
import { T as a } from "./storybook-Tooltip-edc0f7ab.es.js";
import { a as y } from "./storybook-Icon-adc4a8a7.es.js";
import { u as C } from "./storybook-useDebounce-78f40efd.es.js";
import { M as D } from "./storybook-MultiSelect-7f6cca7c.es.js";
const g = f.memo((t) => {
  const { label: l, tooltip: m, section: r = null, subsection: n = null, fieldName: o, updateField: s, value: i, type: c = "text", i: T = null, min: d = null, ...E } = t, [u, b] = f.useState(i), [h] = C(u, 500);
  f.useEffect(() => {
    typeof h == "string" && i !== h && s(r, n, o, h, T);
  }, [h]);
  let w = n ? `${r}-${n}-${o}` : `${r}-${n}-${o}`;
  const v = (N) => {
    c !== "number" || d === null || !N.target.value || d <= parseFloat(N.target.value) ? b(N.target.value) : b(d.toString());
  };
  let x = /* @__PURE__ */ e.createElement("input", { type: "text", name: w, onChange: v, ...E, value: u });
  return c === "textarea" && (x = /* @__PURE__ */ e.createElement("textarea", { name: w, onChange: v, ...E, value: u })), c === "number" && (x = /* @__PURE__ */ e.createElement("input", { type: "number", name: w, onChange: v, ...E, value: u })), c === "date" && (x = /* @__PURE__ */ e.createElement("input", { type: "date", name: w, onChange: v, ...E, value: u })), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, l, m), x);
}), p = f.memo((t) => {
  const { label: l, value: m, fieldName: r, section: n = null, subsection: o = null, tooltip: s, updateField: i, ...c } = t;
  return /* @__PURE__ */ e.createElement("label", { className: "checkbox column-heading" }, /* @__PURE__ */ e.createElement(
    "input",
    {
      type: "checkbox",
      name: r,
      checked: m,
      onChange: (T) => {
        i(n, o, r, !m);
      },
      ...c
    }
  ), /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, l, s));
}), V = f.memo((t) => {
  const { label: l, value: m, options: r, fieldName: n, section: o = null, subsection: s = null, required: i = !1, tooltip: c, updateField: T, initial: d, ...E } = t;
  let u = r.map((b, h) => /* @__PURE__ */ e.createElement("option", { value: b, key: h }, b));
  return d && u.unshift(
    /* @__PURE__ */ e.createElement("option", { value: "", key: "initial" }, d)
  ), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label" }, l, c), /* @__PURE__ */ e.createElement(
    "select",
    {
      className: i && !m ? "warning" : "",
      name: n,
      value: m,
      onChange: (b) => {
        T(o, s, n, b.target.value);
      },
      ...E
    },
    u
  ));
}), I = ({ config: t, updateField: l, isDashboard: m, columns: r }) => {
  var o, s;
  const n = ((o = t.dataKey) == null ? void 0 : o.includes("http://")) || ((s = t == null ? void 0 : t.dataKey) == null ? void 0 : s.includes("https://"));
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
    g,
    {
      value: t.table.label,
      updateField: l,
      section: "table",
      fieldName: "label",
      id: "tableLabel",
      label: "Data Table Title",
      placeholder: "Data Table",
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(y, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Label is required for Data Table for 508 Compliance")))
    }
  ), /* @__PURE__ */ e.createElement(
    p,
    {
      value: t.table.show,
      fieldName: "show",
      label: "Show Data Table",
      section: "table",
      updateField: l,
      className: "column-heading",
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(y, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Hiding the data table may affect accessibility. An alternate form of accessing visualization data is a 508 requirement.")))
    }
  ), t.visualizationType !== "Box Plot" && /* @__PURE__ */ e.createElement(
    p,
    {
      value: t.table.showVertical,
      fieldName: "showVertical",
      label: "Show Vertical Data",
      section: "table",
      updateField: l,
      className: "column-heading",
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(y, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "This will draw the data table with vertical data instead of horizontal.")))
    }
  ), /* @__PURE__ */ e.createElement(g, { value: t.table.indexLabel, section: "table", fieldName: "indexLabel", label: "Index Column Header", updateField: l }), /* @__PURE__ */ e.createElement(
    g,
    {
      value: t.table.caption,
      updateField: l,
      section: "table",
      type: "textarea",
      fieldName: "caption",
      label: "Screen Reader Description",
      placeholder: " Data table",
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(y, { display: "question", style: { marginLeft: "0.5rem" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "Enter a description of the data table to be read by screen readers.")))
    }
  ), /* @__PURE__ */ e.createElement(p, { value: t.table.limitHeight, section: "table", fieldName: "limitHeight", label: "Limit Table Height", updateField: l }), t.type !== "table" && /* @__PURE__ */ e.createElement(
    p,
    {
      value: t.table.customTableConfig,
      fieldName: "customTableConfig",
      label: "Customize Table Config",
      section: "table",
      updateField: l,
      tooltip: /* @__PURE__ */ e.createElement(a, { style: { textTransform: "none" } }, /* @__PURE__ */ e.createElement(a.Target, null, /* @__PURE__ */ e.createElement(y, { display: "question", style: { marginLeft: "0.5rem", display: "inline-block", whiteSpace: "nowrap" } })), /* @__PURE__ */ e.createElement(a.Content, null, /* @__PURE__ */ e.createElement("p", null, "This will display all available columns in the data set. It will not show any columns where all of the column cells are null.")))
    }
  ), t.table.customTableConfig && /* @__PURE__ */ e.createElement(D, { options: r.map((i) => ({ label: i, value: i })), fieldName: "excludeColumns", label: "Exclude Columns", section: "table", updateField: l }), t.table.limitHeight && /* @__PURE__ */ e.createElement(g, { value: t.table.height, section: "table", fieldName: "height", label: "Data Table Height", type: "number", min: 0, max: 500, placeholder: "Height(px)", updateField: l }), /* @__PURE__ */ e.createElement(p, { value: t.table.expanded, fieldName: "expanded", label: "Expanded by Default", section: "table", updateField: l }), m && t.type !== "table" && /* @__PURE__ */ e.createElement(p, { value: t.table.showDataTableLink, fieldName: "showDataTableLink", label: "Show Data Table Name & Link", section: "table", updateField: l }), n && /* @__PURE__ */ e.createElement(p, { value: t.table.showDownloadUrl, fieldName: "showDownloadUrl", label: "Show URL to Automatically Updated Data", section: "table", updateField: l }), t.type !== "table" && /* @__PURE__ */ e.createElement(p, { value: t.table.showDownloadImgButton, fieldName: "showDownloadImgButton", label: "Display Image Button", section: "table", updateField: l }), /* @__PURE__ */ e.createElement("label", null, /* @__PURE__ */ e.createElement("span", { className: "edit-label column-heading" }, "Table Cell Min Width"), /* @__PURE__ */ e.createElement("input", { type: "number", value: t.table.cellMinWidth ? t.table.cellMinWidth : 0, onChange: (i) => l("table", null, "cellMinWidth", i.target.value) })));
};
export {
  p as C,
  I as D,
  V as S,
  g as T
};