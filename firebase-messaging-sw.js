importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyAdh9iKQqeEonjpBMiORMJnnqNZhXiJlXg",
  authDomain: "fir-example-9cbe6.firebaseapp.com",
  projectId: "fir-example-9cbe6",
  storageBucket: "fir-example-9cbe6.appspot.com",
  messagingSenderId: "899709179218",
  appId: "1:899709179218:web:6f2d6e734a762812db968b"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});