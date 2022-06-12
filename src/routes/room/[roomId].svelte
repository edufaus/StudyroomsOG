<script>
import {db} from "./database.js";

import { ref, set, onValue, get, child} from "firebase/database";
import { page } from '$app/stores';
import { goto } from '$app/navigation';
import { onMount } from 'svelte';

import Chat from "../../components/chat.svelte";
import Todos from "../../components/todos.svelte";
import Timer from "../../components/timer.svelte";

let roomid = $page.url.toString().split('/').pop()

onMount(async () => {
    if (isNaN(roomid) || roomid.length != 8) {
        goto("/room/invalidId")
      }
      else {
        get(child(ref(db), `Rooms/${roomid}`)).then((snapshot) => {
          if (!snapshot.exists()) {
              set(ref(db, 'Rooms/' + roomid), {
                  "GlobalTimer": 0,
                  "Todos": {
                      "ignor": ""
                  },
                  "Messages": {
                      "ignor": ""
                  }
              })
          }
      }).catch((error) => {
          console.error(error);
      });
      }
	});
let messages = {}
let todos = {}
let servertime = 0
const roomChange = ref(db, "Rooms/"+roomid);
onValue(roomChange, async function (snapshot) {
    if (snapshot.exists()) {
      console.log(await snapshot.val());
      messages = await snapshot.val().Messages;
      delete messages["ignor"]
      todos = await snapshot.val().Todos;
      delete todos["ignor"]
      servertime = await snapshot.val().GlobalTimer;
    }
  })
</script>
<Chat messages={messages} db={db} roomid={roomid}></Chat>
<Todos todos={todos} db={db} roomid={roomid}></Todos>
<Timer></Timer>