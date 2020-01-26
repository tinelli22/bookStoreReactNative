import { authref, firestoreRef } from "../config/firebaseConfig"
import { LOAD_USER } from "../store/consts"
import { usersCollection } from "../config/consts"

export function load(email) {
    return dispatch => {
        firestoreRef
            .where('email', '==', email).limit(1).get().then(({ docs }) => {
                docs.forEach(doc => dispatch({ type: LOAD_USER, payload: doc.data()}))
            }).catch(err => console.error(err))
    }
    
}