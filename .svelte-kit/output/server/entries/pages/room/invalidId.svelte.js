import { c as create_ssr_component, a as add_attribute } from "../../../chunks/index-6db6ab93.js";
import "firebase/database";
import "../../endpoints/room/database.js";
import "firebase/app";
var invalidId_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "h1.svelte-r8ywqn{font-weight:500;font-size:3rem;color:black}.header.svelte-r8ywqn{padding-top:10%;display:flex;align-items:center;justify-content:center;flex-direction:column}input.svelte-r8ywqn{width:40%;height:50px;border-radius:10px;box-shadow:5px 5px #000000;font-size:1rem}.Create-Room-box.svelte-r8ywqn{display:flex;align-items:center;justify-content:center;flex-direction:column}.main.svelte-r8ywqn{background-color:#dddd;height:100vh;width:100%}.button.svelte-r8ywqn{box-shadow:2px 2px #000000;margin:5px}")();
const css = {
  code: "h1.svelte-r8ywqn{font-weight:500;font-size:3rem;color:black}.header.svelte-r8ywqn{padding-top:10%;display:flex;align-items:center;justify-content:center;flex-direction:column}input.svelte-r8ywqn{width:40%;height:50px;border-radius:10px;box-shadow:5px 5px #000000;font-size:1rem}.Create-Room-box.svelte-r8ywqn{display:flex;align-items:center;justify-content:center;flex-direction:column}.main.svelte-r8ywqn{background-color:#dddd;height:100vh;width:100%}.button.svelte-r8ywqn{box-shadow:2px 2px #000000;margin:5px}",
  map: null
};
const InvalidId = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let roomId = 0;
  $$result.css.add(css);
  return `<title>Invalid Room ID</title>
  <div class="${"main svelte-r8ywqn"}"><div class="${"header svelte-r8ywqn"}"><h1 class="${"svelte-r8ywqn"}">Invalid Id!</h1></div>
	<div class="${"Create-Room-box svelte-r8ywqn"}"><input type="${"number"}" maxlength="${"8"}" class="${"input-Room svelte-r8ywqn"}" placeholder="${"Room Id"}"${add_attribute("value", roomId, 0)}> <br>
	  <a${add_attribute("href", "/room/" + roomId, 0)}><div class="${"button svelte-r8ywqn"}">Join Room</div></a>
	  <p>Or</p>
	  <div class="${"button svelte-r8ywqn"}">Create Room</div></div>
  </div>`;
});
export { InvalidId as default };
