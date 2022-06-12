import { c as create_ssr_component, a as add_attribute } from "../../chunks/index-6db6ab93.js";
import "../endpoints/room/database.js";
import "firebase/database";
import "firebase/app";
var oldindex_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => '.box-createRoom.svelte-ymhtdo{align-items:center;justify-content:center;text-align:center;background-color:#324D67}#leftHalf.svelte-ymhtdo{background-image:url("https://media.discordapp.net/attachments/984119111015628890/985273162533052416/bg-01.jpg?width=515&height=671");width:50%;position:absolute;left:0px;height:100%}#rightHalf.svelte-ymhtdo{width:50%;position:absolute;right:0px;height:100%}')();
const css = {
  code: '.box-createRoom.svelte-ymhtdo{align-items:center;justify-content:center;text-align:center;background-color:#324D67}#leftHalf.svelte-ymhtdo{background-image:url("https://media.discordapp.net/attachments/984119111015628890/985273162533052416/bg-01.jpg?width=515&height=671");width:50%;position:absolute;left:0px;height:100%}#rightHalf.svelte-ymhtdo{width:50%;position:absolute;right:0px;height:100%}',
  map: null
};
let roomId = 0;
const Oldindex = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `


<section>
	
	
	<div class="${"nav"}"></div>
	
			
				
	
<div id="${"leftHalf"}" class="${"svelte-ymhtdo"}"></div>
			<div class="${"box-createRoom svelte-ymhtdo"}"><div id="${"rightHalf"}" class="${"svelte-ymhtdo"}"><div class="${"box columns is-vcentered"}"><div class="${"button"}">Create Room</div>
				<div class="${"input-createRoom"}"><input maxlength="${"8"}" type="${"number"}" placeholder="${"RoomId"}"${add_attribute("blind:value", roomId, 0)}></div>
				<a${add_attribute("href", "/room/" + roomId, 0)}><div class="${"button"}">Join Room</div></a></div>
			<audio controls><source src="${"https://coderadio-admin.freecodecamp.org/radio/8010/radio.mp3"}" type="${"audio/mpeg"}"></audio></div></div></section>`;
});
export { Oldindex as default };
