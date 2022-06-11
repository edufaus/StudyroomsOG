import { c as create_ssr_component, a as add_attribute } from "../../chunks/index-2835083a.js";
import "../endpoints/room/database.js";
import "firebase/database";
import "firebase/app";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-mjk9ig{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let roomId = 0;
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}`, ""}

<section class="${"svelte-mjk9ig"}"><div class="${"box"}"><div class="${"title is-1"}">WeStudy</div></div>
	<div class="${"box"}"><div class="${"title is-3 has-text-centered"}">Plan events with others. Create a rooms and share your plans.
			</div></div>
	<div class="${"box has-text-centered"}"><div class="${"button"}">Create Room</div>
		<br>
		<br>
		<input maxlength="${"8"}" type="${"number"}" class="${"input"}" placeholder="${"Room Id"}"${add_attribute("value", roomId, 0)}>
		<br>
		<br>
		<a${add_attribute("href", "/room/" + roomId, 0)}><div class="${"button"}">Join Room</div></a></div>
</section>`;
});
export { Routes as default };
