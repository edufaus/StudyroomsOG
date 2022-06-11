<!-- 
<script context="module">
  import {db} from "./database.js";
  import { ref, set, onValue, get, child} from "firebase/database";
  let reload = true
  let messages = {};
  let servertime = Date.now();
  let todos = {};
  let roomid = "0";
  let respon = {};
  // const database = collection(db, "events")
  // const phonenumbers = collection(db, "phonenumbers")
  // function reload(){
  //   location.reload();
  // }
  function setdata(x) {
    respon = x;
  }
  export async function load({params}) {
      roomid = await params.roomId;
      console.log(roomid);
      if (isNaN(roomid) || roomid.length != 8) {
          return {
              status: 302,
              redirect: "/room/invalidId"
          }
      }
      get(child(ref(db), `Rooms/${roomid}`)).then((snapshot) => {
          if (!snapshot.exists()) {
              set(refer, {
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
      const refer = ref(db, 'Rooms/' + roomid);
// 		onValue(refer, (snapshot) => {
// 			if (!snapshot.exists()){
// 				set(refer,{
//     "GlobalTimer": 0,
//     "Todos": {
//       "ignor": ""
//     },
//     "Messages": {
//       "ignor": ""
//     }
// })
// 			}
// 		});
      // roomEvents = await getEvents(roomid)
      roomid = params.roomId;
      const roomChange = ref(db, "Rooms/"+roomid);
  onValue(roomChange, async function (snapshot) {
    respon = snapshot.val();
    if (snapshot.exists()) {
      console.log(await snapshot.val());
      setdata(await snapshot.val());
      messages = await snapshot.val().Messages;
      todos = await snapshot.val().Todos;
      servertime = await snapshot.val().GlobalTimer;
      reload = false;
      reload = true;
    }
  })
      return {}
  }
</script>
<h1>fr</h1>
{#if reload}
{#each Object.entries(messages) as [key, value]}
e
{/each}
{/if}
<button on:click={async function() {console.log(messages)}} class="button">Log</button> -->