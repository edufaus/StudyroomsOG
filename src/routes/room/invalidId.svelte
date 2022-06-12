<script>
	import { child, get, ref } from "firebase/database";
	import { db } from "./database.js";
	let roomId = 0;
	async function createRoom() {
	  var randomRoomId = Math.floor(10000000 + Math.random() * 90000000);
	  const checkifexists = ref(db, "Rooms/" + randomRoomId.toString());
	  get(child(ref(db), `Rooms/${roomId}`))
		.then((snapshot) => {
		  if (snapshot.exists()) {
			createRoom();
		  } else {
			location.href = "/room/" + randomRoomId;
		  }
		})
		.catch((error) => {
		  console.error(error);
		});
	}
  </script>
  
  <title>Invalid Room ID</title>
  <div class="main">
	<div class="header">
	  <h1>Invalid Id!</h1>
	</div>
	<div class="Create-Room-box">
	  <input
		type="number"
		maxlength="8"
		class="input-Room"
		placeholder="Room Id"
		bind:value={roomId}
	  /> <br />
	  <a href={"/room/" + roomId}><div class="button">Join Room</div></a>
	  <p>Or</p>
	  <div class="button" on:click={createRoom}>Create Room</div>
	</div>
  </div>
  
  <style>
	h1 {
	  font-weight: 500;
	  font-size: 3rem;
	  color: black;
	}
	.header {
	  padding-top: 10%;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  flex-direction: column;
	}
	input {
	  width: 40%;
	  height: 50px;
	  border-radius: 10px;
	  box-shadow: 5px 5px #000000;
	  font-size: 1rem;
	}
	.Create-Room-box {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  flex-direction: column;
	}
	.main {
	  background-color: #dddd;
	  height: 100vh;
	  width: 100%;
	}
	.button {
	  box-shadow: 2px 2px #000000;
	  margin: 5px;
	}
  </style>
  