import { R as e } from "./storybook-b5af0f4a.es.js";
import { A as o } from "./storybook-35663d54.es.js";
import "./storybook-92157f1b.es.js";
import "./storybook-38eee769.es.js";
import "./storybook-8c97bf69.es.js";
import "./storybook-c59d598b.es.js";
const h = {
  title: "Components/Molecules/Accordion",
  component: o
}, n = {
  args: {
    title: "Collapsed Section Content",
    warnIf: !0,
    tooltipText: "This is an <strong>example</strong> tooltip."
  },
  argTypes: {
    warnIf: {
      control: "boolean"
    }
  },
  render: (t) => /* @__PURE__ */ e.createElement(o, null, /* @__PURE__ */ e.createElement(o.Section, { ...t }, /* @__PURE__ */ e.createElement("p", null, "An accordion is used to show (and hide) HTML content."), /* @__PURE__ */ e.createElement("p", null, "Both the element that is used to open the accordion and the accordion's content can be any HTML element.")), /* @__PURE__ */ e.createElement(o.Section, { ...t }, /* @__PURE__ */ e.createElement("p", null, "An accordion is used to show (and hide) HTML content."), /* @__PURE__ */ e.createElement("p", null, "Both the element that is used to open the accordion and the accordion's content can be any HTML element.")))
};
var r, c, a;
n.parameters = {
  ...n.parameters,
  docs: {
    ...(r = n.parameters) == null ? void 0 : r.docs,
    source: {
      originalSource: `{
  args: {
    title: 'Collapsed Section Content',
    warnIf: 1 === 1,
    tooltipText: 'This is an <strong>example</strong> tooltip.'
  },
  argTypes: {
    warnIf: {
      control: 'boolean'
    }
  },
  render: args => <Accordion>\r
      <Accordion.Section {...args}>\r
        <p>An accordion is used to show (and hide) HTML content.</p>\r
        <p>Both the element that is used to open the accordion and the accordion's content can be any HTML element.</p>\r
      </Accordion.Section>\r
      <Accordion.Section {...args}>\r
        <p>An accordion is used to show (and hide) HTML content.</p>\r
        <p>Both the element that is used to open the accordion and the accordion's content can be any HTML element.</p>\r
      </Accordion.Section>\r
    </Accordion>
}`,
      ...(a = (c = n.parameters) == null ? void 0 : c.docs) == null ? void 0 : a.source
    }
  }
};
const u = ["Primary"];
export {
  n as Primary,
  u as __namedExportsOrder,
  h as default
};