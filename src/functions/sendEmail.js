import { setApiKey, send } from '@sendgrid/mail';
import { v4 as genid } from 'uuid';
import { getDatabase, ref, set, get, child} from "firebase/database";

function checkIfUserExists (userusssid) {
    get(child(ref(db), `Users/${userssid}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return true
      } else {
        return false
      }
    })
    .catch((error) => {
      console.error(error);
      return false
    });
}
function createUser(userusssid) {
    set(ref(db, 'Users/' + userusssid),v4())
}
setApiKey(import.meta.env.VITE_TWILIO_KEY);

const message = {
    to: 'email',
    from: 'email',
    subject: 'Welcome to Virtual Study Rooms',
    text: '',
    html: ''
}

send(message)
.then((response) => {
    console.log(response[0].statusCode);
    console.log(response[0].headers);
})
.catch((error) => {
    console.log(error);
})



