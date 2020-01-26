import { authref, firestoreRef } from "../config/firebaseConfig"
import { LOAD_USER } from "../store/consts"

export function load(uid) {
    
    return dispatch => {
        return firestoreRef.where('uid', '==', uid).get().then(({ docs }) => {
            docs.forEach(doc => console.log(doc))
        }).catch(err => console.error(err))
    }
}