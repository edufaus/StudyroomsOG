
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyAtSk0LT5zsT5bINyAHeDsNKITFxoRRTaY",
  authDomain: "westudy-b6e45.firebaseapp.com",
  projectId: "westudy-b6e45",
  storageBucket: "westudy-b6e45.appspot.com",
  messagingSenderId: "651694035014",
  appId: "1:651694035014:web:3a6849170771c6d2edfa47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getDatabase(app);