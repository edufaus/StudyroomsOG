import { c as create_ssr_component, a as add_attribute } from "../../../chunks/index-2835083a.js";
import "firebase/database";
import "../../endpoints/room/database.js";
import "firebase/app";
const InvalidId = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let roomId = 0;
  return `<title>Invalid Room ID</title>
<div class="${"box"}"><div class="${"title is-1 is-red"}">Invalid Room id</div></div>
<div class="${"box"}"><div class="${"box has-text-centered"}"><div class="${"button"}">Create Room</div>
		<br>
		<br>
		<input maxlength="${"8"}" type="${"number"}" class="${"input"}" placeholder="${"Room Id"}"${add_attribute("value", roomId, 0)}>
		<br>
		<br>
		<a${add_attribute("href", "/room/" + roomId, 0)}><div class="${"button"}">Join Room</div></a></div></div>`;
});
export { InvalidId as default };
