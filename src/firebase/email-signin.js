import firebase from './firebase'

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