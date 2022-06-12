<script>
    import { getDatabase, ref, set } from "firebase/database";
    import { v4 as genid } from 'uuid';
    export let messages = {}
    export let db;
    export let roomid;
    export let username = "eduard faus"
    let message = "";
    let sortmes = "";
    function sortmessages() {
        let temp = Object.entries(messages)
            .sort(([,a],[,b]) => a.Time-b.Time)
            // .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
        return temp.slice(-9)
    }
    function sendMessage() {
        if (message==""){return;}
        let tempmes = messages

        set(ref(db, "Rooms/"+roomid+"/Messages/"+genid()), {
            "User":username,
            "Message": message,
            "Time": Date.now()
        })
    }
</script>
<style>
</style>
<div style="">
    <br>
    <h1 class="title">Chat</h1>
    <hr>
    {#each sortmessages(messages) as [key, value]}
       {value.User}: {value.Message} <br>
    {/each}
    <br>
    <input bind:value={message} class="input" type="text" placeholder="Type a message...">
    <button class="button" on:click={sendMessage}>Send Message</button>
</div>


