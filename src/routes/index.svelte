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
    import { db } from "./room/database.js";
    import { ref, get, child } from "firebase/database";
    import { GAUTH } from "../functions/verification";
	import { config } from 'dotenv';
	config();
    // import { Player } from 'svelte-react-player';
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
  
  <section class="mySection is-hidden-touch">
    <div class="columns is-vcentered">
      <div class="column is-5-tablet is-5-desktop">
        <div class="myHero">
          <div class="hr" />
          <h1>Virtual Study Rooms</h1>
          <p>
            Create study rooms that have music, extensive todo lists, flashcards,
            pommodoro timer, and a chat. Send study room code or share the link to
            collaborate with others easily.
          </p>
          <br />
          <br />
          <input
            class="input"
            maxlength="8"
            type="number"
            placeholder="RoomId"
            blind:value={roomId}
          />
          <a href={"/room/" + roomId}><div class="button">Join Room</div></a>
          <div class="button" on:click={createRoom}>Generate Room</div>
          <div class="button" on:click={GAUTH}>Authentication</div>
          <audio controls style="margin-top:2%; ">
            <source
              src="https://coderadio-admin.freecodecamp.org/radio/8010/radio.mp3"
              type="audio/mpeg"
            />
          </audio>
        </div>
      </div>
      <div class="column is-7-tablet is-7-desktop">
        <figure class="image is4by3">
          <img
            style="max-height:100vh"
            src="https://images.unsplash.com/photo-1557754897-ca12c5049d83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
          />
        </figure>
      </div>
    </div>
  </section>
  <section class="section is-hidden-desktop ">
    <div class="myHero">
      <div class="hr" />
      <h1
        style=" font-size: 4rem; line-height: 1.1;
      margin: 2rem auto;"
      >
        Virtual Study Rooms
      </h1>
      <figure class="image ">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
        />
      </figure>
      <p>
        Create study rooms that have music, extensive todo lists, flashcards,
        pommodoro timer, and a chat. Send study room code or share the link to
        collaborate with others easily.
      </p>
      <br />
      <br />
      <input
        class="input"
        maxlength="8"
        type="number"
        placeholder="RoomId"
        blind:value={roomId}
      />
      <a href={"/room/" + roomId}><div class="button">Join Room</div></a>
      <div class="button" on:click={createRoom}>Generate Room</div>
      <div class="button" on:click={GAUTH}>Authentication</div>
      <audio controls style="margin-top: 2%;">
        <source
          src="https://coderadio-admin.freecodecamp.org/radio/8010/radio.mp3"
          type="audio/mpeg"
        />
      </audio>
    </div>
  </section>
  
  <!-- <div class="video-container">
    <img
      src="https://cdn.discordapp.com/attachments/985046705521164288/985451426891333643/45273763131232b8d5c3b239a4be8129.gif"
      alt=""
    /> -->
  <!-- <video
      style="width: 100%; height: 100%; object-fit:cover; background-size:cover
        object-fit: cover;
        transform: scale(1.04); "
      src="https://cdn.discordapp.com/attachments/985046705521164288/985451426891333643/45273763131232b8d5c3b239a4be8129.gif"
      autoplay
      muted
      loop
    /> -->
  <!-- </div> -->
  
  <!-- <div class="columns is-half box is-centered is-vcentered has-text-centered"> -->
  <!-- <div class="column">
        <figure
          class="image is-16x16 is-size-6"
          style=" height: auto; width: auto; max-width: 100%; max-height: 100%;"
        >
          <img
            alt="me"
            src="https://media.discordapp.net/attachments/984119111015628890/985273162533052416/bg-01.jpg?width=515&height=671"
          />
        </figure>
      </div> -->
  <!-- <div class="createRoom-container">
      <div class="createRoom-input">
        <div class="createRoom-box">
          <input
            class="input"
            maxlength="8"
            type="number"
            placeholder="RoomId"
            blind:value={roomId}
          />
          <div class="all-Buttons">
            <a href={"/room/" + roomId}
              ><div class="button Join" style="margin:10px">Join Room</div></a
            >
            <div class="button Create" style="margin:10px" on:click={createRoom}>
              Generate Room
            </div>
  
            <div class="button" style="margin:10px" on:click={GAUTH}>
              Authentication
            </div>
          </div>
        </div>
        <audio controls>
          <source
            src="https://coderadio-admin.freecodecamp.org/radio/8010/radio.mp3"
            type="audio/mpeg"
          />
        </audio>
        <audio controls>
          <source
            src="https://www1.morexlusive.com/wp-content/uploads/2022/01/Future_-_Mask_Off.mp3"
            type="audio/mpeg"
          />
        </audio>
        <AudioPlayer urls="https://coderadio-admin.freecodecamp.org/radio/8010/radio.mp3"> </AudioPlayer> -->
  <!-- </div> -->
  <!-- </div> -->
  <!-- </div> -->
  
  <!-- <style>
    .video-container {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      /* overflow: hidden; */
    }
    .video-container img {
      /* Make video to at least 100% wide and tall */
      min-width: 100%;
      min-height: 100%;
      /* Setting width & height to auto prevents the browser from stretching or squishing the video */
      width: auto;
      height: auto;
      max-height: 1vh;
    }
    .createRoom-input {
      margin-top: 15%;
      background-color: rgba(0, 0, 0, 0.4);
      -webkit-backdrop-filter: blur(5px);
      padding: 10%;
      backdrop-filter: blur(5px);
      border-radius: 10px;
    }
  
    .createRoom-box input {
      margin-bottom: 5%;
      border-radius: 10px;
    }
  
    .button {
      background-color: #ffc3f2;
      color: black;
      border-radius: 10px;
    }
  </style>  -->
  <style>
    .mySection {
      background-color: #dddddd;
      color: white;
      border: 1px solid white;
    }
  
    .myHero {
      padding: 50px 0 50px 75px;
    }
  
    .myHero .hr {
      display: inline-block;
      width: 100px;
      height: 15px;
      background: white;
      border-radius: 20px;
      margin-bottom: 15px;
    }
  
    .myHero h1 {
      font-size: 50px;
    }
  
    @media (max-width: 768px) {
      .myHero {
        padding: 50px !important;
      }
    }
    .content.is-vcentered {
      display: flex;
      flex-wrap: wrap;
      align-content: center; /* used this for multiple child */
      align-items: center; /* if an only child */
    }
  </style>
  