import { LOAD_USER } from "../store/consts"
import { usersCollection } from "../config/consts"
import { firestoreRef } from "../config/firebaseConfig"
import { messageError } from "../components/ToastMessage"


export function load(uid) {
    return firestoreRef.where('uid', '==', uid).get() 
}