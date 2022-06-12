import { GoogleAuthProvider, getAuth, signInWithPopup } from  'firebase/auth';
import { browser } from '$app/env';
import { writable } from 'svelte/store';


export async function GAUTH() {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/cloud-platform.read-only'); //Get read only data such as profile picture and name / email :)
    const auth = getAuth();
    auth.languageCode = 'it';
    await signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken; // Access token for all of the juicy stuff such as name and pfp of the google account
        const user = result.user;
        if (browser) {
            sessionStorage.setItem('user', JSON.stringify(user));
        }
        return true;
    }).catch((error) => {
        const errorCode = error.code; // Debugging
        const errorMessage = error.message; // Debugging
        const email = error.customData.email; // Debugging
        const credential = GoogleAuthProvider.credentialFromError(error);
        return false;
    })
    return true;
}
