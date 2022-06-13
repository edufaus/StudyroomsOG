import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
let API_KEY = "AIzaSyAtSk0LT5zsT5bINyAHeDsNKITFxoRRTaY";
let AUTH_DOMAIN = "westudy-b6e45.firebaseapp.com";
let PROJECT_ID = "westudy-b6e45";
let STORAGE_BUCKET = "westudy-b6e45.appspot.com";
let MESSAGE_SENDER_ID = "651694035014";
let APP_ID = "1:651694035014:web:3a6849170771c6d2edfa47";
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGE_SENDER_ID,
  appId: APP_ID
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db };
