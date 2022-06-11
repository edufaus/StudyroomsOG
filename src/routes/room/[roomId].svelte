<script>
import {db} from "./database.js";
import { ref, set, onValue, get, child} from "firebase/database";
import { page } from '$app/stores';
let roomid = $page.url.toString().split('/').pop()
const roomChange = ref(db, "Rooms/"+roomid);
let messages = {}
let todos = {}
let servertime = 0

onValue(roomChange, async function (snapshot) {
    if (snapshot.exists()) {
      console.log(await snapshot.val());
      messages = await snapshot.val().Messages;
      todos = await snapshot.val().Todos;
      servertime = await snapshot.val().GlobalTimer;
    }
  })
</script>
<h1>{roomid}</h1>
<h1>{messages}</h1>