<script>
	import {child, get, ref} from "firebase/database";
	import {db} from "./database.js";

	let roomId = 0
	async function createRoom() {
		var randomRoomId =  Math.floor(10000000 + Math.random() * 90000000);
		const checkifexists = ref(db, 'Rooms/' + randomRoomId.toString());
		get(child(ref(db), `Rooms/${roomId}`)).then((snapshot) => {
			if (snapshot.exists()){
				createRoom()
			}
			else {
				location.href = "/room/" + randomRoomId
			}
		}).catch((error) => {
			console.error(error);
		});
	}
</script>
<title>Invalid Room ID</title>
<div class="box">
    <div class="title is-1 is-red">Invalid Room id</div>
</div>
<div class="box">
	<div class="box has-text-centered">
		<div class="button" on:click={createRoom}>Create Room</div>
		<br>
		<br>
		<input maxlength="8" type="number" class="input" placeholder="Room Id" bind:value={roomId}>
		<br>
		<br>
		<a href={ "/room/" + roomId}><div class="button">Join Room</div></a>
	</div>
</div>