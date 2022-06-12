import { g as getContext, c as create_ssr_component, b as each, a as add_attribute, e as escape, d as subscribe, v as validate_component } from "../../../chunks/index-6db6ab93.js";
import { db } from "../../endpoints/room/database.js";
import { ref, onValue } from "firebase/database";
import "uuid";
import "firebase/app";
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
var chat_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".box.svelte-1tez4ab{border-radius:50px}")();
const css = {
  code: ".box.svelte-1tez4ab{border-radius:50px}",
  map: null
};
const Chat = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { messages = {} } = $$props;
  let { db: db2 } = $$props;
  let { roomid } = $$props;
  let { username = "eduard faus" } = $$props;
  let message = "";
  function sortmessages() {
    let temp = Object.entries(messages).sort(([, a], [, b]) => a.Time - b.Time);
    return temp;
  }
  if ($$props.messages === void 0 && $$bindings.messages && messages !== void 0)
    $$bindings.messages(messages);
  if ($$props.db === void 0 && $$bindings.db && db2 !== void 0)
    $$bindings.db(db2);
  if ($$props.roomid === void 0 && $$bindings.roomid && roomid !== void 0)
    $$bindings.roomid(roomid);
  if ($$props.username === void 0 && $$bindings.username && username !== void 0)
    $$bindings.username(username);
  $$result.css.add(css);
  return `<div class="${"box svelte-1tez4ab"}">${each(sortmessages(), ([key, value]) => {
    return `${escape(value.User)}: ${escape(value.Message)} <br>`;
  })}
    <input class="${"input"}" type="${"text"}" placeholder="${"Type a message..."}"${add_attribute("value", message, 0)}>
    <button class="${"button"}">Send Message</button></div>`;
});
const Todos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { todos = {} } = $$props;
  let { db: db2 } = $$props;
  let { roomid } = $$props;
  let { username = "eduard faus" } = $$props;
  let todotext = "";
  console.log(todos);
  if ($$props.todos === void 0 && $$bindings.todos && todos !== void 0)
    $$bindings.todos(todos);
  if ($$props.db === void 0 && $$bindings.db && db2 !== void 0)
    $$bindings.db(db2);
  if ($$props.roomid === void 0 && $$bindings.roomid && roomid !== void 0)
    $$bindings.roomid(roomid);
  if ($$props.username === void 0 && $$bindings.username && username !== void 0)
    $$bindings.username(username);
  return `<div class="${"box has-text-centered"}"><div class="${"columns is-multiline is-mobile"}">${each(Object.entries(todos), ([key, value]) => {
    return `<div class="${"column"}"><h1 class="${"title"}">${escape(key)}</h1>
        <hr>
        ${each(Object.entries(value), ([k, v]) => {
      return `${escape(v.text)} 
        <br>`;
    })}
    </div>`;
  })}
    <div class="${"column"}"><h1 class="${"title"}">Ashh</h1>
        <hr>
        random todo
    </div></div>
<input class="${"input"}" placeholder="${"Todo Text"}"${add_attribute("value", todotext, 0)}>
<button class="${"button"}">Add</button></div>`;
});
const U5BroomIdu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let roomid = $page.url.toString().split("/").pop();
  let messages = {};
  let todos = {};
  const roomChange = ref(db, "Rooms/" + roomid);
  onValue(roomChange, async function(snapshot) {
    if (snapshot.exists()) {
      console.log(await snapshot.val());
      messages = await snapshot.val().Messages;
      delete messages["ignor"];
      todos = await snapshot.val().Todos;
      delete todos["ignor"];
      await snapshot.val().GlobalTimer;
    }
  });
  $$unsubscribe_page();
  return `${validate_component(Chat, "Chat").$$render($$result, { messages, db, roomid }, {}, {})}
${validate_component(Todos, "Todos").$$render($$result, { todos, db, roomid }, {}, {})}`;
});
export { U5BroomIdu5D as default };
