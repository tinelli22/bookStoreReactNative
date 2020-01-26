import { LOAD_USER } from "../store/consts"
import { usersCollection } from "../config/consts"
import { firestoreRef } from "../config/firebaseConfig"
import { messageError, messageSuccess, messageWarning } from "../components/ToastMessage"
import { loadUser } from "../store/actions/user"


export function load(uid) {
    return firestoreRef.where('uid', '==', uid).get() 
}

export function findUser(uid, user) {
    return async dispatch => {
        return firestoreRef.where('uid', '==', uid).get().then(({ docs  }) => {
            docs.forEach(d => saveUser(d.id, user)
            .then(_ => {
                messageSuccess({ text: 'Dados salvo com sucesso!'})
                dispatch(loadUser(user))
            })
            .catch(_ => messageWarning({text: 'Erro ao salvar. Tente novamente mais tarde.'}))
            )
        })
    }
}

function saveUser(id, user) {
    return firestoreRef.doc(id).update({ ...user})
}