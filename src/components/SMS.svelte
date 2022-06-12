<script>
    import Login from "./login.svelte";
    export let user = "";
    export let roomid = "";
    let phonenumber = "";
    async function sendMessage() {
        let phonenum = encodeURIComponent(phonenumber.replace(/[^\d.]/g, ''));
        let username = encodeURIComponent(user.displayName);
        let c = await fetch("https://virtualstudyroomsms.herokuapp.com/sendmessage/"+phonenum+"/"+username+"/"+roomid);
        phonenumber = "";
    }

</script>
<h1 class="title is-3">Share To Friend</h1>
<p>Will not work unless specific phonenumber is used due to twilio trial restrictions.</p>
<br>
{#if user}
<input bind:value={phonenumber} placeholder="type phonenumber here (ex +1 786 724 755)" class="input">
<button on:click={sendMessage} class="button">Send Message</button>
{:else}
Login to share <Login></Login>
{/if}