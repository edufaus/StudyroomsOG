import { c as create_ssr_component } from "../../../chunks/index-2835083a.js";
import "../../endpoints/room/database.js";
import "firebase/app";
import "firebase/database";
let roomid = "0";
async function load({ params }) {
  roomid = params.roomId;
  if (isNaN(roomid) || roomid.length != 8) {
    return { status: 302, redirect: "/room/invalidId" };
  }
  return {};
}
const U5BroomIdu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `







































































































































`;
});
export { U5BroomIdu5D as default, load };
