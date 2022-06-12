import twilio from 'twilio';

export function sendMessage(number, name, roomCode) {
    const accountSid = 'ACe5564689d66b1dbbd962c738509eef6e'; 
    const authToken = import.meta.env.VITE_TWILIO_KEY; 
    const client = twilio(accountSid, authToken); 
    let messageToSend = 'Hello your friend ' + name + ' has invited you to study with them!\nPlease click this link to join a study session with them!\nhttps://virtualstudyroom.tech/room/' + roomCode; 
    client.messages 
        .create({ 
            body: messageToSend,  
            messagingServiceSid: 'MG12436adb40019e59d6abf962e4204e49',
            from: '+19257388240',
            to: number 
        }) 
        .then(message => console.log(message.sid)) 
        .done();
}