import firebase from './firebase';
import { signUpRequest, signUpSuccess, singUpFailure } from '../actions'

export function signUpUserWithEmailAndPassword(email, password, dispatch) {
    dispatch(signUpRequest())
    return new Promise((resolve, reject) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log("SUCCESS")
                dispatch(signUpSuccess())
                // Signed in 
                var user = userCredential.user;
                resolve(user)

            })
            .catch((error) => {
                dispatch(singUpFailure(error))
                console.log("FAIL")
                var errorCode = error.code;
                var errorMessage = error.message;
                reject(error)
            })
    })
}