import firebase from './firebase'
import { signInRequest, signInSuccess, singInFailure } from '../actions'

export function signInWithGmailPopup(dispatch=()=>{}) {
    dispatch(signInRequest())
    return new Promise((resolve, reject) => {
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((data)=>{
            var user = data.user;
            dispatch(signInSuccess(user))
            resolve(data)
        }).catch(err => {
            dispatch(singInFailure(err))
            reject(err)
        })
    })
}
