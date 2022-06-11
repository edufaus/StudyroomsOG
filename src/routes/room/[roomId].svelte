
<script context="module">
  import {db} from "./database.js";
  import { ref, set } from "firebase/database";

  let roomid = "0"
  // const database = collection(db, "events")
  // const phonenumbers = collection(db, "phonenumbers")
  function reload(){
    location.reload()
  }
  export async function load({params}) {
    roomid = params.roomId
    if (isNaN(roomid) || roomid.length != 8) {
      return {
        status: 302,
        redirect: "/room/invalidId"
      }
    }
		const refer = ref(db, 'Rooms/' + roomid);
		onValue(refer, (snapshot) => {
			if (!snapshot.exists()){
				set(refer, {

        })
			}
		});
    // roomEvents = await getEvents(roomid)
    return {}
  }
  </script>
