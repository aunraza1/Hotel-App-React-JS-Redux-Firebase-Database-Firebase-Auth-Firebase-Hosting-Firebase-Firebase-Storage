import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBM07yUbsag7jgp0wTTo_B-0U4XNSwQHhI",
    authDomain: "hotel-app-f3239.firebaseapp.com",
    projectId: "hotel-app-f3239",
    storageBucket: "hotel-app-f3239.appspot.com",
    messagingSenderId: "753860300076",
    appId: "1:753860300076:web:61fdaefbc4accc89d43089",
    measurementId: "G-63TCBKM2C4"
  };
  // Initialize Firebase
  
firebase.initializeApp(firebaseConfig);
const storage=firebase.storage();

export{storage ,firebase as default}
