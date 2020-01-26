import { authref, firestoreRef } from "../config/firebaseConfig"
import { LOAD_USER } from "../store/consts"

export function load(email) {
    
    return dispatch => {
        return firestoreRef.where('email', '===', email).get().then(({ docs }) => {
            docs.forEach(doc => console.log(doc))
        }).catch(err => console.error(err))
    }
}