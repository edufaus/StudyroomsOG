import { GoogleAuthProvider, getAuth, signInWithPopup } from  'firebase/auth';
import { browser } from '$app/env';
import { writable } from 'svelte/store';

export async function GAUTH() {
    //Local Storage Stuff
    const defaultValue = 'N/A';
    const initialValue = browser ? window.localStorage.getItem('theme') ?? defaultValue : defaultValue;
    const theme = writable<string>(initialValue);
    theme.subscribe((value) => {
        if (browser) {
          window.localStorage.setItem('username', value);
        }
    });

    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/cloud-platform.read-only'); //Get read only data such as profile picture and name / email :)
    const auth = getAuth();
    auth.languageCode = 'it';
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken; // Access token for all of the juicy stuff such as name and pfp of the google account
        const user = result.user;
        // All stuff need to be stored local cache
        console.log(user.email);
    }).catch((error) => {
        const errorCode = error.code; // Debugging
        const errorMessage = error.message; // Debugging
        const email = error.customData.email; // Debugging
        const credential = GoogleAuthProvider.credentialFromError(error);
    })
}
