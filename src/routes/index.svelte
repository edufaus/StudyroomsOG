
<head>
<meta name="monetization" content="$ilp.uphold.com/egpErgzkYGw6">
</head>
<script>
    import { db } from "./room/database.js";
    import { ref, get, child } from "firebase/database";
    import Music from ".././components/music.svelte";
    import Login from ".././components/login.svelte";
    let user = null;
    let roomId = 0;
    async function createRoom() {
      var randomRoomId = Math.floor(10000000 + Math.random() * 90000000);
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
          <div style="background-color: black;"class="hr" />
          <h1 style="color: black;">Virtual Study Rooms</h1>
          <p style="color: black; text-align: center;">
            Create study rooms that have music, extensive todo lists,
            pomodoro timer, and a chat. Send study room code or share the link to
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
          <Login bind:resultuser={user}></Login>
          <Music></Music>
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
  <section class="section is-hidden-desktop  is-hidden-fullhd is-hidden-widescreen">
    <div class="myHero">
      <div class="hr" />
      <h1
        style=" font-size: 4rem; line-height: 1.1;
      margin: 2rem auto; text-align:center;"
      >
        Virtual Study Rooms
      </h1>
      <figure class="image ">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
        />
      </figure>
      <p style="text-align: center;">
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
     <div class="tryingtomakeresponsive">
      <a style="margin-bottom: 2%; margin-top: 1%;" href={"/room/" + roomId}><div class="button">Join Room</div></a>
      <div style="margin-bottom: 2%;" class="button" on:click={createRoom}>Generate Room</div>
      <Login bind:resultuser={user}></Login>
      <Music></Music>
     </div> 
      
    </div>
  </section>
  

  <style>
    .tryingtomakeresponsive {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    
    .mySection {
      background-color: #dddddd;
      color: white;
      border: 1px solid white;
    }

    .hidden{
      display: none;
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
      align-content: center;
      align-items: center; 
    }
  </style>
  