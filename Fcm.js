
firebase.initializeApp({
    apiKey: "AIzaSyA5S2k7VCZnZCALM4oJtS51DrVlAQTA1h8",
    authDomain: "healthe-ad3b8.firebaseapp.com",
    databaseURL: "https://healthe-ad3b8.firebaseio.com",
    projectId: "healthe-ad3b8",
    storageBucket: "healthe-ad3b8.appspot.com",
    messagingSenderId: "462956120928",
    appId: "1:462956120928:web:718a7917b94eeef8db6c05"
});
debugger
//Retrive Messaging Object
const messaging = firebase.messaging();



if (!isTokenSentToServer()) {
    messaging.getToken().then((currentToken) => {
        debugger
        if (currentToken) {
            sendTokenToServer(currentToken);
            alert("hi im from fcm");
        } else {

            console.log('No Instance ID token available. Request permission to generate one.');
            setTokenSentToServer(false);
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);

        setTokenSentToServer(false);
    });

}
messaging.onMessage((payload) => {
    console.log("Message Recieved in on message" + payload);


});

function isTokenSentToServer() {
    return window.localStorage.getItem('sentToServer') === '1';
}

function setTokenSentToServer(sent) {
    window.localStorage.setItem('sentToServer', sent ? '1' : '0');
}



function sendTokenToServer(currentToken) {
    if (!isTokenSentToServer()) {

        console.log('Sending token to server...');
        $.ajax({
            type: "POST",
            url: "/Doctor/InsertFCMToken",
            data: { 'Token': currentToken },
            success: function (response) {
                debugger
                if (response._response) {
                    console.log("Sussessfully Sended");
                    setTokenSentToServer(true);
                }
                else {
                    console.log("Something went Wrong, Token Not Sent");
                }
            },
            error: function (e) {
                setTokenSentToServer(false);
                console.log("Something went Wrong, Token Not Sent");
            }

        });
       
    } else {
        console.log('Token already sent to server so won\'t send it again ' +
            'unless it changes');
    }

}