import firebase from './firebase';


export function signUpUserWithEmailAndPassword(email, password) {
    console.log("EMAIL", email)
    console.log("PASS", password)
    return new Promise((resolve, reject) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log("SUCCESS")
                // Signed in 
                var user = userCredential.user;
                resolve(user)

            })
            .catch((error) => {
                console.log("FAIL")
                var errorCode = error.code;
                var errorMessage = error.message;
                reject(error)
            })
    })
}
