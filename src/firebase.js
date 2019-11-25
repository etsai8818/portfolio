import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyCrLP74cFcxD5Odqy_ZbsuWaoojQlLw7VQ",
    authDomain: "eric-tsai-portfolio.firebaseapp.com",
    databaseURL: "https://eric-tsai-portfolio.firebaseio.com",
    projectId: "eric-tsai-portfolio",
    storageBucket: "eric-tsai-portfolio.appspot.com",
    messagingSenderId: "134977150683",
    appId: "1:134977150683:web:6681b92e71f4b10ce0b6fe",
    measurementId: "G-0RQCR6TWJB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;