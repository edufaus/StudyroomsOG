import { g as getContext, c as create_ssr_component, b as each, a as add_attribute, v as validate_component, e as escape, d as subscribe } from "../../../chunks/index-6db6ab93.js";
import { db } from "../../endpoints/room/database.js";
import { ref, onValue } from "firebase/database";
import { L as Login, M as Music } from "../../../chunks/login-434652ea.js";
import "uuid";
import "firebase/app";
import "firebase/auth";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var chat_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".message.svelte-ifrbzr{background-color:#dddd;color:#000;padding-bottom:15px}.input.svelte-ifrbzr{flex:1;height:40px;border:none;outline:none;padding-left:5px;font-size:16px}.button.svelte-ifrbzr{width:auto;font-size:18px;border:none;outline:none;background-color:#3b5998;color:white\n    }.main-Chat.svelte-ifrbzr{max-height:502px}")();
const css$2 = {
  code: ".message.svelte-ifrbzr{background-color:#dddd;color:#000;padding-bottom:15px}.input.svelte-ifrbzr{flex:1;height:40px;border:none;outline:none;padding-left:5px;font-size:16px}.button.svelte-ifrbzr{width:auto;font-size:18px;border:none;outline:none;background-color:#3b5998;color:white\n    }.main-Chat.svelte-ifrbzr{max-height:502px}",
  map: null
};
const Chat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { messages = {} } = $$props;
  let { db: db2 } = $$props;
  let { roomid } = $$props;
  let { user } = $$props;
  let message = "";
  function sortmessages() {
    let temp = Object.entries(messages).sort(([, a], [, b]) => a.Time - b.Time);
    return temp.slice(-9);
  }
  if ($$props.messages === void 0 && $$bindings.messages && messages !== void 0)
    $$bindings.messages(messages);
  if ($$props.db === void 0 && $$bindings.db && db2 !== void 0)
    $$bindings.db(db2);
  if ($$props.roomid === void 0 && $$bindings.roomid && roomid !== void 0)
    $$bindings.roomid(roomid);
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  $$result.css.add(css$2);
  return `<div class="${"main-Chat svelte-ifrbzr"}"><h1 class="${"title"}" style="${"text-align: center;"}">Chat</h1>
    <hr>
    <div class="${"message svelte-ifrbzr"}">${each(sortmessages(), ([key, value]) => {
    return `${escape(value.User)}: ${escape(value.Message)} <br>`;
  })}</div>
    <br>
    ${user != null ? `<input class="${"input svelte-ifrbzr"}" type="${"text"}" placeholder="${"Type a message..."}"${add_attribute("value", message, 0)}>
    <button style="${"color:white;"}" class="${"button svelte-ifrbzr"}">Send Message</button>` : `To send a message  ${validate_component(Login, "Login").$$render($$result, {}, {}, {})}`}</div>`;
});
const Todos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { todos = {} } = $$props;
  let { db: db2 } = $$props;
  let { roomid } = $$props;
  let { user } = $$props;
  let username = null;
  let todotext = "";
  if ($$props.todos === void 0 && $$bindings.todos && todos !== void 0)
    $$bindings.todos(todos);
  if ($$props.db === void 0 && $$bindings.db && db2 !== void 0)
    $$bindings.db(db2);
  if ($$props.roomid === void 0 && $$bindings.roomid && roomid !== void 0)
    $$bindings.roomid(roomid);
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  {
    if (user != null) {
      username = user.displayName;
    }
  }
  return `<div class="${"has-text-centered"}"><h1 class="${"title"}">Todos</h1>
    <hr>
    <br>
<div class="${"columns is-multiline is-mobile"}">${each(Object.entries(todos), ([key, value]) => {
    return `<div class="${"column"}"><h1 class="${"title"}">${escape(key)}</h1>
        <hr>
        ${each(Object.entries(value), ([k, v]) => {
      return `${escape(v.text)}
        ${key == username ? `<input type="${"checkbox"}"${add_attribute("checked", v.done, 1)}>
        <button class="${"button is-danger is-small"}">Delete
          </button>` : ``}
        <br>
        <br>`;
    })}
    </div>`;
  })}</div>
${user != null ? `<input class="${"input"}" placeholder="${"Todo Text"}"${add_attribute("value", todotext, 0)}>
<button class="${"button"}">Add</button>` : `<p>Please login to add todos</p>
${validate_component(Login, "Login").$$render($$result, {}, {}, {})}`}</div>`;
});
var timer_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => 'time.svelte-a06y9s{display:block;font-size:5em;margin-bottom:0.2em}h1.svelte-a06y9s{color:var(--accent);text-transform:uppercase;font-size:6em;margin:0;font-weight:100}@media(min-width: 640px){}:root{--black:#333;--base:white;--base-light:#f4f4f4;--base-dark:#ddd;--white:white;--accent:orangered;--accent-light:#ff4500d6;--accent-dark:#e83f00}html, body{position:relative;width:100%;height:100%}body{color:var(--black);margin:0;padding:8px;box-sizing:border-box;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;font-weight:300}a{color:rgb(0,100,200);text-decoration:none}input, button, select, textarea{font-family:inherit;font-size:1.5em;font-weight:inherit;padding:0.4em;margin:0 0 0.5em 0;box-sizing:border-box;border:1px solid #ccc;border-radius:2px}input:disabled{color:#ccc}input[type="range"]{height:0}button{background-color:var(--base);border-color:var(--black);color:var(--black);font-size:1.5em;font-weight:inherit;outline:none;text-transform:uppercase;transition:background-color .2s, color .2s, border-color .2s, opacity .2s}button:disabled{opacity:0.5}button:focus,button:not(:disabled):hover{background-color:var(--base-light)}button:not(:disabled):active{background-color:var(--base-dark)}button.primary{background-color:var(--accent);border-color:var(--accent);color:var(--white)}button.primary:not(:disabled):hover{background-color:var(--accent-light);border-color:var(--accent-light)}button.primary:not(:disabled):active{background-color:var(--accent-dark);border-color:var(--accent-dark)}')();
const css$1 = {
  code: 'time.svelte-a06y9s{display:block;font-size:5em;margin-bottom:0.2em}h1.svelte-a06y9s{color:var(--accent);text-transform:uppercase;font-size:6em;margin:0;font-weight:100}@media(min-width: 640px){}:root{--black:#333;--base:white;--base-light:#f4f4f4;--base-dark:#ddd;--white:white;--accent:orangered;--accent-light:#ff4500d6;--accent-dark:#e83f00}html, body{position:relative;width:100%;height:100%}body{color:var(--black);margin:0;padding:8px;box-sizing:border-box;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;font-weight:300}a{color:rgb(0,100,200);text-decoration:none}input, button, select, textarea{font-family:inherit;font-size:1.5em;font-weight:inherit;padding:0.4em;margin:0 0 0.5em 0;box-sizing:border-box;border:1px solid #ccc;border-radius:2px}input:disabled{color:#ccc}input[type="range"]{height:0}button{background-color:var(--base);border-color:var(--black);color:var(--black);font-size:1.5em;font-weight:inherit;outline:none;text-transform:uppercase;transition:background-color .2s, color .2s, border-color .2s, opacity .2s}button:disabled{opacity:0.5}button:focus,button:not(:disabled):hover{background-color:var(--base-light)}button:not(:disabled):active{background-color:var(--base-dark)}button.primary{background-color:var(--accent);border-color:var(--accent);color:var(--white)}button.primary:not(:disabled):hover{background-color:var(--accent-light);border-color:var(--accent-light)}button.primary:not(:disabled):active{background-color:var(--accent-dark);border-color:var(--accent-dark)}',
  map: null
};
const Timer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let audio;
  const minutesToSeconds = (minutes) => minutes * 60;
  const secondsToMinutes = (seconds) => Math.floor(seconds / 60);
  const padWithZeroes = (number) => number.toString().padStart(2, "0");
  const POMODORO_S = minutesToSeconds(25);
  let pomodoroTime = POMODORO_S;
  function formatTime(timeInSeconds) {
    const minutes = secondsToMinutes(timeInSeconds);
    const remainingSeconds = timeInSeconds % 60;
    return `${padWithZeroes(minutes)}:${padWithZeroes(remainingSeconds)}`;
  }
  $$result.css.add(css$1);
  return `<audio src="${"https://download1478.mediafire.com/2g2unotmxx0g/xd7am36c7ivuf0w/message-ringtone-magic.mp3"}" preload="${"auto"}"${add_attribute("this", audio, 0)}></audio>
  
  
  <section class="${"has-text-centered"}"><h1 class="${"title is-2 svelte-a06y9s"}">Pomodoro Timer</h1>
    <time class="${"svelte-a06y9s"}">${escape(formatTime(pomodoroTime))}</time>
    <footer><button class="${"primary"}" ${""}>start</button>
      <button ${"disabled"}>cancel</button>
      </footer></section>`;
});
const Money = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isLoading = true;
  let isMonetized = false;
  return `${slots.default ? slots.default({ isLoading, isMonetized }) : ``}`;
});
const Ad = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"ads-widget-container"}"><figure><ins class="${"adsbygoogle"}" style="${"display:block"}" data-ad-client="${"ca-pub-8897569169223812"}" data-ad-slot="${"7437714072"}" data-ad-format="${"auto"}" data-full-width-responsive="${"true"}"></ins></figure></div>
<figure><amp-ad width="${"100vw"}" height="${"320"}" type="${"adsense"}" data-ad-client="${"ca-pub-8897569169223812"}" data-ad-slot="${"7437714072"}" data-auto-format="${"rspv"}" data-full-width="${""}"><div overflow="${""}"></div></amp-ad></figure>`;
});
const SMS = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { user = "" } = $$props;
  let { roomid = "" } = $$props;
  let phonenumber = "";
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  if ($$props.roomid === void 0 && $$bindings.roomid && roomid !== void 0)
    $$bindings.roomid(roomid);
  return `<h1 class="${"title is-3"}">Share To Friend</h1>
<p>Will not work unless specific phonenumber is used due to twilio trial restrictions.</p>
<br>
${user ? `<input placeholder="${"type phonenumber here (ex +1 786 724 755)"}" class="${"input"}"${add_attribute("value", phonenumber, 0)}>
<button class="${"button"}">Send Message</button>` : `Login to share ${validate_component(Login, "Login").$$render($$result, {}, {}, {})}`}`;
});
var _roomId__svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".image.svelte-7jrnus img.svelte-7jrnus{width:auto;height:auto;max-height:100%;object-fit:fill}")();
const css = {
  code: ".image.svelte-7jrnus img.svelte-7jrnus{width:auto;height:auto;max-height:100%;object-fit:fill}",
  map: null
};
const U5BroomIdu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let user = null;
  let roomid = $page.url.toString().split("/").pop().replace(/\?/g, "");
  let messages = {};
  let todos = {};
  const roomChange = ref(db, "Rooms/" + roomid);
  onValue(roomChange, async function(snapshot) {
    if (snapshot.exists()) {
      messages = await snapshot.val().Messages;
      delete messages["ignor"];
      todos = await snapshot.val().Todos;
      delete todos["ignor"];
      await snapshot.val().GlobalTimer;
    }
  });
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<br>
<h1 class="${"title has-text-centered is-1"}">Your Room Code Is ${escape(roomid)} ${validate_component(Login, "Login").$$render($$result, { resultuser: user }, {
      resultuser: ($$value) => {
        user = $$value;
        $$settled = false;
      }
    }, {})}</h1> 
<div class="${"tile is-ancestor is-flex-wrap-wrap"}"><div class="${"tile is-4 is-vertical is-parent"}"><div class="${"tile is-child box"}">${validate_component(Timer, "Timer").$$render($$result, {}, {}, {})}</div>
    <div class="${"tile is-child box"}"><p class="${"title is-4"}">Play Relaxing Lofi Study Music</p>
     ${validate_component(Music, "Music").$$render($$result, {}, {}, {})}</div></div>
  <div class="${"tile is-parent is-vertical is-4"}"><div class="${"tile is-child box"}">${validate_component(Todos, "Todos").$$render($$result, { user, todos, db, roomid }, {}, {})}</div></div>
  <div class="${"tile is-parent is-3"}"><div class="${"tile is-child box"}">${validate_component(Chat, "Chat").$$render($$result, {
      class: "column",
      user,
      messages,
      db,
      roomid
    }, {}, {})}</div></div>
  <div class="${"tile is-parent"}"><div class="${"tile is-child box"}">${validate_component(SMS, "Sms").$$render($$result, { user, roomid }, {
      user: ($$value) => {
        user = $$value;
        $$settled = false;
      },
      roomid: ($$value) => {
        roomid = $$value;
        $$settled = false;
      }
    }, {})}</div></div></div>
${validate_component(Money, "Money").$$render($$result, {}, {}, {
      default: ({ isLoading, isMonetized }) => {
        return `${isLoading ? `<div><p class="${"title is-4"}">Loading</p></div>` : `${isMonetized ? `<div>No Ads :D</div>` : `<div><h1 class="${"Title is-4"}">Make a coil account to Remove Ads </h1>
    <figure style="${"max-height=20vh"}" class="${"image is-16by9 has-text-centered center svelte-7jrnus"}"><img style="${""}" src="${"https://media.discordapp.net/attachments/984119111015628890/985662466375712848/unknown.png?width=974&height=500"}" class="${"svelte-7jrnus"}"></figure>
    ${validate_component(Ad, "Ad").$$render($$result, {}, {}, {})}</div>`}`}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export { U5BroomIdu5D as default };
