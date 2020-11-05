import firebase from "firebase";

const firebaseConfig = {
  // your firebase credentials go here
  apiKey: "AIzaSyAyghdeNaJDngEF12maxS328y7uYBu54F4",
  authDomain: "imessage-clone-7c56e.firebaseapp.com",
  databaseURL: "https://imessage-clone-7c56e.firebaseio.com",
  projectId: "imessage-clone-7c56e",
  storageBucket: "imessage-clone-7c56e.appspot.com",
  messagingSenderId: "305098459141",
  appId: "1:305098459141:web:7bb2d5aa2a12cb615e746c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
