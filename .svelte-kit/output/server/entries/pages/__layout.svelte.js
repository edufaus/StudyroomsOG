import { c as create_ssr_component } from "../../chunks/index-2835083a.js";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "{background-color:#f2eee2;color:#0084f6;transition:background-color 0.3s\n	}main.svelte-4ilog7{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box}@media(min-width: 480px){}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `
<link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"}">
<main class="${"svelte-4ilog7"}">${slots.default ? slots.default({}) : ``}</main>

`;
});
export { _layout as default };
