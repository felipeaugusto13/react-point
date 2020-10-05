import firebase from 'firebase/app';
import 'firebase/database'

let firebaseConfig = {
    apiKey: "AIzaSyBagGqGM-X6oCPVD-eHfsSXsi7su0ktd4Y",
    authDomain: "pointcontrol-bceed.firebaseapp.com",
    databaseURL: "https://pointcontrol-bceed.firebaseio.com",
    projectId: "pointcontrol-bceed",
    storageBucket: "pointcontrol-bceed.appspot.com",
    messagingSenderId: "285144834357",
    appId: "1:285144834357:web:8de062aff9494af9ecac7c",
    measurementId: "G-YF9T2S8DCP"
  };
  // Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
  
export default firebase;