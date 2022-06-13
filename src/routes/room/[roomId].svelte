




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
import Login from "../../components/login.svelte";
import Money from "../../components/money.svelte";
import Ad from "../../components/ad.svelte";
import Sms from "../../components/SMS.svelte";

let user = null;

let roomid = $page.url.toString().split('/').pop().replace(/\?/g,'')


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
let messages = {};
let todos = {};
const roomChange = ref(db, "Rooms/"+roomid);
onValue(roomChange, async function (snapshot) {
    if (snapshot.exists()) {
      messages = await snapshot.val().Messages;
      delete messages["ignor"]
      todos = await snapshot.val().Todos;
      delete todos["ignor"]
      servertime = await snapshot.val().GlobalTimer;
    }
  })
</script>





<br>
<h1 class="title has-text-centered is-1">Your Room Code Is {roomid} <Login bind:resultuser={user}></Login></h1> 
<div class="tile is-ancestor is-flex-wrap-wrap">
  <div class="tile is-4 is-vertical is-parent">
    <div class="tile is-child box">
    <Timer></Timer>
    </div>
    <div class="tile is-child box">
      <p class="title is-4">Play Relaxing Lofi Study Music</p>
     <Music></Music>
    </div>
  </div>
  <div class="tile is-parent is-vertical is-4">
    <div class="tile is-child box">
      <Todos user={user} todos={todos} db={db} roomid={roomid}></Todos>
    </div>
  </div>
  <div class="tile is-parent is-3">
    <div class="tile is-child box">
      <Chat class='column' user={user} messages={messages} db={db} roomid={roomid}></Chat>
    </div>
  </div>
  <div class="tile is-parent">
    <div class="tile is-child box">
      <Sms bind:user={user} bind:roomid={roomid}></Sms>
    </div>
  </div>
</div>
<Money let:isLoading let:isMonetized>
  {#if isLoading}
    <div><p class="title is-4">Loading</p></div>
  {:else if isMonetized}
    <div>No Ads :D</div>
  {:else}
  <div>
    <h1 class="Title is-4">Make a coil account to remove Ads </h1>
    <figure style="max-height=20vh" class="image is-16by9 has-text-centered center">
      <img
        style=""
        src="https://media.discordapp.net/attachments/984119111015628890/985662466375712848/unknown.png?width=974&height=500"
      />
    </figure>
    <Ad></Ad>
  </div>
 
  {/if}
</Money>
<style>
  .content.is-vcentered {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center; 
}
.image img {
    width: auto;
    height: auto;
    max-height: 100%;
    object-fit: fill;
}
  </style>