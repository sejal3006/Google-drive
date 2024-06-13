import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDicUamG6lqxXzrCbAY4ap2AZ2DiErLE-g",
    authDomain: "drive-f3f9b.firebaseapp.com",
    projectId: "drive-f3f9b",
    storageBucket: "drive-f3f9b.appspot.com",
    messagingSenderId: "68964460159",
    appId: "1:68964460159:web:02d46404dfbdff4c26414a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider }