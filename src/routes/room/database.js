import { config } from 'dotenv';
config();
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
// let apikey = {
//   apiKey:process.env.apiKey,
//   authDomain:process.env.authDomain,
  
// }
// console.log(apikey);
// console.log(process.env.authDomain);
// console.log(process.env.projectID);
let API_KEY = process.env.apiKey;
let AUTH_DOMAIN = process.env.authDomain;
let PROJECT_ID = process.env.projectID;
let STORAGE_BUCKET = process.env.storageBucket;
let MESSAGE_SENDER_ID = process.env.messagingSenderID;
let APP_ID = process.env.appID;
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGE_SENDER_ID,
  appId: APP_ID
};
console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getDatabase(app);