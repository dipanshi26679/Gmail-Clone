import firebase from "firebase/compat/app"
import   "firebase/compat/firestore";
import "firebase/compat/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCB3oH5Hztz5eK8zrkW-RfD5b136Uc409s",
  authDomain: "clone-b7e4a.firebaseapp.com",
  projectId: "clone-b7e4a",
  storageBucket: "clone-b7e4a.appspot.com",
  messagingSenderId: "323626277649",
  appId: "1:323626277649:web:18739c8e5c35ce0be54ab0"
};


  const firebaseapp = firebase.initializeApp(firebaseConfig);

  const db = firebaseapp.firestore();


const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
  export {db ,auth,provider}