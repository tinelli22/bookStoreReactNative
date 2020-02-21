
import { firestoreRef } from "../config/firebaseConfig"
import { messageError, messageSuccess, messageWarning } from "../components/ToastMessage"
import { loadUser } from "../store/actions/user"
import { LOAD_USER } from "../store/consts"


export function load(uid) {
    return firestoreRef.where('uid', '==', uid).get() 
}


export function saveUserService(id, user) {
    firestoreRef.doc(id).update({ ...user}).then(resp => {
        messageSuccess({text: 'Dados salvos com sucesso.'})
        loadUser({ type: LOAD_USER, payload: user })

    }).catch(_ => messageError({ text: 'Erro ao salvar.'}))
}