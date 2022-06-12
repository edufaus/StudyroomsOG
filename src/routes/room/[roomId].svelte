<script>
import {db} from "./database.js";

import { ref, set, onValue, get, child} from "firebase/database";
import { page } from '$app/stores';
import { goto } from '$app/navigation';
import { onMount } from 'svelte';

import Chat from "../../components/chat.svelte";
import Todos from "../../components/todos.svelte";
import Timer from "../../components/timer.svelte";
import Music from "../../components/music.svelte";

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
<br>
<h1 class="title has-text-centered is-1">Your Room Code Is {roomid}</h1>
<div class="tile is-ancestor ">
  <div class="tile is-4 is-vertical is-parent">
    <div class="tile is-child box">
    <Timer></Timer>
    </div>
    <div class="tile is-child box">
      <p class="title is-4">Play Relaxing Lofi Study Music</p>
     <Music></Music>
    </div>
  </div>
  <div class="tile is-parent">
    <div class="tile is-child box">
      <Todos todos={todos} db={db} roomid={roomid}></Todos>
    </div>
  </div>
  <div class="tile is-parent">
    <div class="tile is-child box">
      <Chat class='column' messages={messages} db={db} roomid={roomid}></Chat>
    </div>
  </div>
</div>
<style>
  .content.is-vcentered {
  display: flex;
  flex-wrap: wrap;
  align-content: center; /* used this for multiple child */
  align-items: center; /* if an only child */
}
  </style>