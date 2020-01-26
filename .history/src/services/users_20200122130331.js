import { authref, firestoreRef } from "../config/firebaseConfig"
import { LOAD_USER } from "../store/consts"

export function load(uid) {
    console.log(uid)
    return dispatch => {
        return firestoreRef.where('uid', '==', uid).limit(1).get().then(resp => {
            resp.docs.forEach(doc => {
                
                console.log(doc + 'chamando?')
                dispatch({ type: LOAD_USER, payload: doc.data()}) 
            })
        }).catch(err => console.error(err))
    }
}