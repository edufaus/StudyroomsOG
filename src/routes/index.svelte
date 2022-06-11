<script>
	import {db} from "./room/database.js";
	import {ref, get, child} from "firebase/database";
	// import { Player } from 'svelte-react-player';
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

<!-- <svelte:head>
	<title>Home</title>
</svelte:head> -->


<section>
	<!-- <p>Hello World</p> -->
	<!-- <Player url = "https://www.youtube.com/watch?v=5qap5aO4i9A" /> -->
	<!-- <audio controls>
		<source src = "https://coderadio-admin.freecodecamp.org/radio/8010/radio.mp3" type = "audio/mpeg">
	</audio> -->
	<div class="nav">
		<!-- <GoogleAuthProvider/> -->
	</div>
	<!-- <div class="columns is-mobile is-vcentered">
		<div class="side-image">
			<img src="https://media.discordapp.net/attachments/984119111015628890/985273162533052416/bg-01.jpg?width=515&height=671" alt = "image" >
		</div>
		<div class="column">
			<div class="upper-part">
				<h1>We Study</h1>
				<h2 class="below-text">Plan with others</h2>
			</div>
			-->
			<!-- <div class="box-createRoom">
				<div class="button" on:click={createRoom}>Create Room</div>
				<div class="input-createRoom"><input maxlength="8" type="number" placeholder="RoomId" blind:value={roomId}></div>
				<a href={"/room/" + roomId}><div class="button">Join Room</div></a>
			</div> -->
				<!--
		</div>
	</div>  -->
	<!-- <div class="bg-image" 
	style="background-image: url('https://mdbootstrap.com/img/Photos/Others/images/77.jpg');
		   width: 50vh;">
</div> -->
<div id="leftHalf"></div>
			<div class="box-createRoom">
<div id="rightHalf">
		<div class="box columns is-vcentered">
				<div class="button" on:click={createRoom}>Create Room</div>
				<div class="input-createRoom"><input maxlength="8" type="number" placeholder="RoomId" blind:value={roomId}></div>
				<a href={"/room/" + roomId}><div class="button">Join Room</div></a>
			</div>
			<audio controls>
				<source src = "https://coderadio-admin.freecodecamp.org/radio/8010/radio.mp3" type = "audio/mpeg">
			</audio> 
</div>
</section>
<style>
	.hero-bg {
  background: url(https://placeimg.com/1000/1000/any);
  min-height: 100vh;
}
.hero.is-fullheight > .columns {
  flex: 1;
}

.hero.is-fullheight > .columns > .column {
  display: flex;
}


	.Container .side-image {
		margin-right: 5%;
		margin-top: -5%;
		margin-left: -20%;
		padding: 0;
		height: 100%;
		width: 100%;
	}

	.upper-part {
		text-align: center;
		color: #324D67;
		font-size: 1.5rem;
	}

	h1 {
		margin-bottom: 10px;
	}

	h2 {
		margin-bottom: 10px;
	}

	.box-createRoom {
		align-items: center;
		justify-content: center;
		text-align: center;
		background-color: #324D67;
		/* width: 40%; */
	}

	/* img {
		height: 100vh;
		width: 300px;
	} */
	
	.Container {
		display: flex;
	}
	#leftHalf {
   background-image: url("https://media.discordapp.net/attachments/984119111015628890/985273162533052416/bg-01.jpg?width=515&height=671");
   width: 50%;
   position: absolute;
   left: 0px;
   height: 100%;
}

#rightHalf {

   width: 50%;
   position: absolute;
   right: 0px;
   height: 100%;
}
</style>
