importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// तपाईंको Firebase Config यहाँ राख्नुहोस्
const firebaseConfig = {
    apiKey: "AIzaSyAjJpK-3eNIXFM7V7dWLJhWua5T3fF3_2E",
    authDomain: "user-store-srt.firebaseapp.com",
    projectId: "user-store-srt",
    storageBucket: "user-store-srt.firebasestorage.app",
    messagingSenderId: "932714544224",
    appId: "1:932714544224:web:7ecaecb707b59b3b7d1705"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// ब्याकग्राउन्डमा मेसेज आउँदा यो चल्छ
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification.title || "SRT SUPREME ALERT";
  const notificationOptions = {
    body: payload.notification.body || "New request received!",
    icon: 'https://cdn-icons-png.flaticon.com/512/595/595067.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
