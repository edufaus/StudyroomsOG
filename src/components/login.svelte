<script>
    import { browser } from '$app/env';
    import { GAUTH } from '../functions/verification';
    
// import { Player } from 'svelte-react-player';
export let resultuser = null;
let user = browser ? JSON.parse(window.sessionStorage.getItem('user')) ?? '' : '';
resultuser = user;
let loginbutton = false
$: if (user === null || user === '') {
    resultuser = null;
loginbutton = true
} else {
loginbutton = false
}
function logout() {
    sessionStorage.setItem('user', null);
user = browser ? JSON.parse(window.sessionStorage.getItem('user')) ?? '' : '';
resultuser = user;
loginbutton = false
if (user === null || user === '') {
    resultuser = null;
loginbutton = true
} else {
loginbutton = false
}
    resultuser=null
}
async function login() {
   if (await GAUTH()) {
    user = browser ? JSON.parse(window.sessionStorage.getItem('user')) ?? '' : '';
    resultuser = user;
    location.reload();
   }
   else {
    console.log("error")
   }

}
    </script>
            {#if loginbutton}

            <img style="cursor:pointer;" src="https://developers.google.com/identity/images/btn_google_signin_light_normal_web.png" on:click={login}>
            {/if}
            {#if !loginbutton}
            <div class="button" on:click={logout}>Log Out</div>
            {/if}