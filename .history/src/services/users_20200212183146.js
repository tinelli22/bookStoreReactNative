
import { firestoreRef } from "../config/firebaseConfig"



export function load(uid) {
    return firestoreRef.where('uid', '==', uid).get() 
}


export function saveUserService(id, user) {
    return firestoreRef.doc(id).update({ ...user})
}