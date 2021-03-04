import firebase from './firebase';
import { signInRequest, signInSuccess, singInFailure } from '../actions'


export function signInWithFacebookPopup(dispatch=()=>{}) {
    dispatch(signInRequest())
    let provider = new firebase.auth.FacebookAuthProvider();

    return new Promise((resolve, reject) => {
        firebase.auth().signInWithPopup(provider)
        .then(data => {
            dispatch(signInSuccess(data.user))
            resolve(data)
        }).catch(err => {
            dispatch(singInFailure(err))
            reject(err)

        })
    })
}

