import { setApiKey, send } from '@sendgrid/mail';
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



