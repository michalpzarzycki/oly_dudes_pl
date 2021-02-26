import firebase  from 'firebase';
import 'firebase/firestore'
import 'firebase/storage'

var firebaseConfig = {

  apiKey: "AIzaSyBC2PPQFkWNJVJu5cCaTdDDlEwni7O1OSA",
  authDomain: "oly2-3d5fe.firebaseapp.com",
  projectId: "oly2-3d5fe",
  storageBucket: "oly2-3d5fe.appspot.com",
  messagingSenderId: "1053423044710",
  appId: "1:1053423044710:web:b61f78f128e27652bec5a7",
  measurementId: "G-TTPV4VWYYY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export function signInWithEmailAndPassword(email, password) {
    return new Promise((resolve, reject) => {
      firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        resolve(result)
      })
      .catch((err) => reject(err))
    })
  }
  export let db = firebase.firestore()
  export let storage = firebase.storage();

  export default firebase