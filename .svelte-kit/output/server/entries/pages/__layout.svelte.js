import { c as create_ssr_component } from "../../chunks/index-6db6ab93.js";
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"}">
<main>${slots.default ? slots.default({}) : ``}</main>

`;
});
export { _layout as default };
