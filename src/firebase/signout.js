import firebase from './firebase'
export function signOut(dispatch) {
    return new Promise((resolve, reject) => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            console.log("SIGNED OUT SUCCESULLY")
          }).catch((error) => {
            console.log("SIGNED OUT ERROR")
        
            // An error happened.
          });
          
    })
}
