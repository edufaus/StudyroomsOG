import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../chunks/index-6db6ab93.js";
import "../endpoints/room/database.js";
import "firebase/database";
import { L as Login, M as Music } from "../../chunks/login-434652ea.js";
import "firebase/app";
import "firebase/auth";
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".tryingtomakeresponsive.svelte-17zahsa.svelte-17zahsa{display:flex;align-items:center;justify-content:center;flex-direction:column}.mySection.svelte-17zahsa.svelte-17zahsa{background-color:#dddddd;color:white;border:1px solid white}.myHero.svelte-17zahsa.svelte-17zahsa{padding:50px 0 50px 75px}.myHero.svelte-17zahsa .hr.svelte-17zahsa{display:inline-block;width:100px;height:15px;background:white;border-radius:20px;margin-bottom:15px}.myHero.svelte-17zahsa h1.svelte-17zahsa{font-size:50px}@media(max-width: 768px){.myHero.svelte-17zahsa.svelte-17zahsa{padding:50px !important}}")();
const css = {
  code: ".tryingtomakeresponsive.svelte-17zahsa.svelte-17zahsa{display:flex;align-items:center;justify-content:center;flex-direction:column}.mySection.svelte-17zahsa.svelte-17zahsa{background-color:#dddddd;color:white;border:1px solid white}.myHero.svelte-17zahsa.svelte-17zahsa{padding:50px 0 50px 75px}.myHero.svelte-17zahsa .hr.svelte-17zahsa{display:inline-block;width:100px;height:15px;background:white;border-radius:20px;margin-bottom:15px}.myHero.svelte-17zahsa h1.svelte-17zahsa{font-size:50px}@media(max-width: 768px){.myHero.svelte-17zahsa.svelte-17zahsa{padding:50px !important}}",
  map: null
};
let roomId = 0;
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let user = null;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<head><meta name="${"monetization"}" content="${"$ilp.uphold.com/egpErgzkYGw6"}"></head>

  <section class="${"mySection is-hidden-touch svelte-17zahsa"}"><div class="${"columns is-vcentered"}"><div class="${"column is-5-tablet is-5-desktop"}"><div class="${"myHero svelte-17zahsa"}"><div style="${"background-color: black;"}" class="${"hr svelte-17zahsa"}"></div>
          <h1 style="${"color: black;"}" class="${"svelte-17zahsa"}">Virtual Study Rooms</h1>
          <p style="${"color: black; text-align: center;"}">Create study rooms that have music, extensive todo lists, flashcards,
            pommodoro timer, and a chat. Send study room code or share the link to
            collaborate with others easily.
          </p>
          <br>
          <br>
          <input class="${"input"}" maxlength="${"8"}" type="${"number"}" placeholder="${"RoomId"}"${add_attribute("blind:value", roomId, 0)}>
          <a${add_attribute("href", "/room/" + roomId, 0)}><div class="${"button"}">Join Room</div></a>
          <div class="${"button"}">Generate Room</div>
          ${validate_component(Login, "Login").$$render($$result, { resultuser: user }, {
      resultuser: ($$value) => {
        user = $$value;
        $$settled = false;
      }
    }, {})}
          ${validate_component(Music, "Music").$$render($$result, {}, {}, {})}</div></div>
      <div class="${"column is-7-tablet is-7-desktop"}"><figure class="${"image is4by3"}"><img style="${"max-height:100vh"}" src="${"https://images.unsplash.com/photo-1557754897-ca12c5049d83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"}"></figure></div></div></section>
  <section class="${"section is-hidden-desktop is-hidden-fullhd is-hidden-widescreen"}"><div class="${"myHero svelte-17zahsa"}"><div class="${"hr svelte-17zahsa"}"></div>
      <h1 style="${"font-size: 4rem; line-height: 1.1; margin: 2rem auto; text-align:center;"}" class="${"svelte-17zahsa"}">Virtual Study Rooms
      </h1>
      <figure class="${"image "}"><img src="${"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"}"></figure>
      <p style="${"text-align: center;"}">Create study rooms that have music, extensive todo lists, flashcards,
        pommodoro timer, and a chat. Send study room code or share the link to
        collaborate with others easily.
      </p>
      <br>
      <br>
      <input class="${"input"}" maxlength="${"8"}" type="${"number"}" placeholder="${"RoomId"}"${add_attribute("blind:value", roomId, 0)}>
     <div class="${"tryingtomakeresponsive svelte-17zahsa"}"><a style="${"margin-bottom: 2%; margin-top: 1%;"}"${add_attribute("href", "/room/" + roomId, 0)}><div class="${"button"}">Join Room</div></a>
      <div style="${"margin-bottom: 2%;"}" class="${"button"}">Generate Room</div>
      ${validate_component(Login, "Login").$$render($$result, { resultuser: user }, {
      resultuser: ($$value) => {
        user = $$value;
        $$settled = false;
      }
    }, {})}
      ${validate_component(Music, "Music").$$render($$result, {}, {}, {})}</div></div>
  </section>`;
  } while (!$$settled);
  return $$rendered;
});
export { Routes as default };
