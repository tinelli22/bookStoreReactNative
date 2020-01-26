import { LOAD_USER } from "../store/consts"
import { usersCollection } from "../config/consts"
import { firestoreRef } from "../config/firebaseConfig"
import { messageError } from "../components/ToastMessage"


export function load(uid) {
    return dispatch => {
        firestoreRef.where('uid', '==', uid).get()
        .then(resp => {
            resp.docs.forEach(d => {
                console.log(d)
                dispatch({ type: LOAD_USER, payload: d.data()})
            })
        }).catch(err => messageError({ text: 'Erro ao carregar dados'}))

    }
}