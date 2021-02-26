import firebase  from 'firebase';
const {
    REACT_APP_API_KEY,
    REACT_APP_AUTH_DOMAIN,
    REACT_APP_PROJECT_ID,
    REACT_APP_STORAGE_BUCKET,
    REACT_APP_MESSAGING_SENDER_ID,
    REACT_APP_APP_ID 
} = process.env;

var firebaseConfig = {
    apiKey: REACT_APP_API_KEY,
    authDomain: REACT_APP_AUTH_DOMAIN,
    projectId: REACT_APP_PROJECT_ID,
    storageBucket: REACT_APP_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
    appId: REACT_APP_APP_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export function signInWithEmailAndPassword(email, password) {
    return new Promise((resolve, reject) => {
      firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
          console.log("RESOLVE", result)
        resolve(result)
      })
      .catch((err) => {
          console.log("REJECT", err)
        reject(err)
      })
    })
  }
  export default firebase;