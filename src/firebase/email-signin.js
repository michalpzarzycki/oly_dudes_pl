import firebase from './firebase'
import { signInRequest, signInSuccess, singInFailure } from '../actions'

export function signInWithEmailAndPassword(email, password, dispatch=()=>{}) {
    dispatch(signInRequest())
    return new Promise((resolve, reject) => {
      firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
          console.log(result)
          dispatch(signInSuccess(result.user))
        resolve(result)
      })
      .catch((err) => {
        dispatch(singInFailure(err))
          console.log(err)
        reject(err)
      })
    })
  }