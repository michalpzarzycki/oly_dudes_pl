import firebase  from 'firebase';

var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
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
  export function signInWithGmailPopup() {
    return new Promise((resolve, reject) => {
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((data)=>{
            var user = data.user;
            console.log(user)
            resolve(data)
        }).catch(err => {
            reject(err)
        })
    })
}
  export default firebase;