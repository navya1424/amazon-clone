import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA2BxDl6DTZ8rsd6cYZ04MgQkFSoH5wXeo",
    authDomain: "project-5506b.firebaseapp.com",
    projectId: "project-5506b",
    storageBucket: "project-5506b.appspot.com",
    messagingSenderId: "923712118690",
    appId: "1:923712118690:web:901b0e4237d7f9a6201cfb",
    measurementId: "G-JZJ24HPZGW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);


  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export {db, auth};