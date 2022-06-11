import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAtSk0LT5zsT5bINyAHeDsNKITFxoRRTaY",
  authDomain: "westudy-b6e45.firebaseapp.com",
  projectId: "westudy-b6e45",
  storageBucket: "westudy-b6e45.appspot.com",
  messagingSenderId: "651694035014",
  appId: "1:651694035014:web:3a6849170771c6d2edfa47"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db };
