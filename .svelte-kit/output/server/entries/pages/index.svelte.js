import { c as create_ssr_component, a as add_attribute } from "../../chunks/index-6db6ab93.js";
import "../endpoints/room/database.js";
import "firebase/database";
import "firebase/app";
var index = /* @__PURE__ */ (() => ".control {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2px 0;\n  gap: 5px;\n  margin: 0 auto;\n  max-width: 768px;\n}\n.control button {\n  border: none;\n  cursor: pointer;\n  margin: 0 auto;\n  padding: 4px;\n  outline: none;\n  border-radius: 1pc;\n  background-color: transparent;\n}\n.play {\n  border: 1px solid red;\n}\n.trackslider {\n  width: 100%;\n  width: calc(100% - 5px);\n  filter: hue-rotate(150deg);\n  height: 5px;\n}\n.volume {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n.volume input[type=range] {\n  max-width: 100px;\n}\n\n.volume input[type=range] {\n  width: 100%;\n  height: 2px;\n  margin: 10px 0 0 0;\n  filter: grayscale(5);\n}\n.volume input[type=range]:focus {\n  outline: none;\n}\n")();
var AudioPlayer_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".track-time.svelte-1v9blzi{display:flex;align-items:center;justify-content:space-between}.d-none.svelte-1v9blzi{display:none}")();
let roomId = 0;
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


<div class="${"columns is-half box is-centered is-vcentered has-text-centered"}"><div class="${"column"}"><figure class="${"image is-16x16 is-size-6"}" style="${"height: auto; width: auto; max-width: 100%; max-height: 100%;"}"><img alt="${"me"}" src="${"https://media.discordapp.net/attachments/984119111015628890/985273162533052416/bg-01.jpg?width=515&height=671"}"></figure></div>
    <div class="${"column"}"><div class="${"box"}"><input class="${"input"}" maxlength="${"8"}" type="${"number"}" placeholder="${"RoomId"}"${add_attribute("blind:value", roomId, 0)}>
            <a${add_attribute("href", "/room/" + roomId, 0)}><div class="${"button"}">Join Room</div></a>
            <div class="${"button"}">Generate Room</div></div>
			<audio controls><source src="${"https://coderadio-admin.freecodecamp.org/radio/8010/radio.mp3"}" type="${"audio/mpeg"}"></audio>
            <audio controls><source src="${"https://www1.morexlusive.com/wp-content/uploads/2022/01/Future_-_Mask_Off.mp3"}" type="${"audio/mpeg"}"></audio> 
			</div></div>`;
});
export { Routes as default };
