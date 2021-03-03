import firebase from './firebase'


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
