importScripts('https://www.gstatic.com/firebasejs/7.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.8.1/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.5/firebase-analytics.js');

firebase.initializeApp({
    apiKey: "AIzaSyA5S2k7VCZnZCALM4oJtS51DrVlAQTA1h8",
    authDomain: "healthe-ad3b8.firebaseapp.com",
    databaseURL: "https://healthe-ad3b8.firebaseio.com",
    projectId: "healthe-ad3b8",
    storageBucket: "healthe-ad3b8.appspot.com",
    messagingSenderId: "462956120928",
    appId: "1:462956120928:web:718a7917b94eeef8db6c05"
});

const messaging = firebase.messaging();


//[START background_handler]
messaging.setBackgroundMessageHandler(function (payload) {

    console.log('Message recieved in BackgroungHandler' + payload);
    const notificationTitle = 'Calling';
    const notificationOptions = {
        body: 'Calling',
        icon: '/firebase-logo.png'
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});
//[END background_handler]