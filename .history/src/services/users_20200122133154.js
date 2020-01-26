import { authref, firestoreRef } from "../config/firebaseConfig"
import { LOAD_USER } from "../store/consts"
import { usersCollection } from "../config/consts"

export function load(email) {
    
    return dispatch => {
        return firestoreRef.collection(usersCollection)
        .where('email', '===', email).get().then(resp => {
            console.log(resp)
        }).catch(err => console.error(err))
    }
}