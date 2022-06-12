
<!-- 
<div id="aboutme" class="is-halfheight is-half" style="height:50%;">
    <br>
    <br>
    <div class="columns is- half is-halfheight is-desktop">
        <div class="column">
            <figure class="image is-16x16 is-size-6" style=" height: auto; width: auto; max-width: 100%; max-height: 100%;">
                <img alt="me" src="https://media.discordapp.net/attachments/984119111015628890/985273162533052416/bg-01.jpg?width=515&height=671">
            </figure>
            </div>
        </div>
        <div class="columns is-half is-halfheight is-mobile">
            Hello
        </div>
</div> -->
<script>
	import {db} from "./room/database.js";
	import {ref, get, child} from "firebase/database";
	import {AudioPlayer} from 'svelte-mp3';
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

<div class="columns is-half box is-centered is-vcentered has-text-centered">
    <div class="column">
        <figure class="image is-16x16 is-size-6" style=" height: auto; width: auto; max-width: 100%; max-height: 100%;">
            <img alt="me" src="https://media.discordapp.net/attachments/984119111015628890/985273162533052416/bg-01.jpg?width=515&height=671">
        </figure>
    </div>
    <div class="column">
        <div class="box">
           <input class="input" maxlength="8" type="number" placeholder="RoomId" blind:value={roomId}>
            <a href={"/room/" + roomId}><div class="button">Join Room</div></a>
            <div class="button" on:click={createRoom}>Generate Room</div>
        </div>
			<audio controls>
				<source src = "https://coderadio-admin.freecodecamp.org/radio/8010/radio.mp3" type = "audio/mpeg">
			</audio>
            <audio controls>
				<source src = "https://www1.morexlusive.com/wp-content/uploads/2022/01/Future_-_Mask_Off.mp3" type = "audio/mpeg">
			</audio> 
			<!-- <AudioPlayer urls="https://coderadio-admin.freecodecamp.org/radio/8010/radio.mp3"> </AudioPlayer> -->
    </div>
    </div>