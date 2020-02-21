
import { firestoreRef } from "../config/firebaseConfig"
import { messageError, messageSuccess, messageWarning } from "../components/ToastMessage"
import { loadUser } from "../store/actions/user"


export function load(uid) {
    return firestoreRef.where('uid', '==', uid).get() 
}


export function saveUserService(id, user) {
    return firestoreRef.doc(id).update({ ...user})
}