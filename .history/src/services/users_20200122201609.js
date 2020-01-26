import { LOAD_USER } from "../store/consts"
import { usersCollection } from "../config/consts"
import { firestoreRef } from "../config/firebaseConfig"


export function load(uid) {
    return dispatch => {
        firestoreRef.where('uid', '==', uid).get()
        .then(resp => {
            resp.docs.forEach(d => dispatch({ type: LOAD_USER, payload: d.data()}))
        })

    }
}