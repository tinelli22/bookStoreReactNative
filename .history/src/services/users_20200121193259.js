import { authref, firestoreRef } from "../config/firebaseConfig"
import { LOAD_USER } from "../store/consts"

export function loadUser(uid) {
    return dispatch => {
        firestoreRef.where('uid', '==', uid).limit(1).get().then(resp => {
            resp.docs.forEach(doc => {
                console.log(doc)
                dispatch({ type: LOAD_USER, payload: doc.data()}) 
            })
        })
    }
}