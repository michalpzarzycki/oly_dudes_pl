import firebase from './firebase'
import { signOutRequest, signOutSuccess, singOutFailure} from '../actions'
export function signOut(dispatch) {
    dispatch(signOutRequest())
    return new Promise((resolve, reject) => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            dispatch(signOutSuccess())
            console.log("SIGNED OUT SUCCESULLY")
          }).catch((error) => {
              dispatch(singOutFailure())
            console.log("SIGNED OUT ERROR")
        
            // An error happened.
          });
          
    })
}
