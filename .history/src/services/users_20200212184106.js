import { firestoreRef } from "../config/firebaseConfig"


export function loadUserService(uid) {
    return firestoreRef.doc(uid).get()
}

export function saveUserService(id, user) {
    return firestoreRef.doc(id).update({ ...user})
}