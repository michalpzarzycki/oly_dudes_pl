import firebase from './firebase';


export function signInWithFacebookPopup() {
    let provider = new firebase.auth.FacebookAuthProvider();

    return new Promise((resolve, reject) => {
        firebase.auth().signInWithPopup(provider)
        .then(data => {
            console.log(data.user)
            resolve(data)
        }).catch(err => {
            reject(err)

        })
    })
}
