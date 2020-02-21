import { firestoreRef } from "../config/firebaseConfig"


export function load(uid) {
    return firestoreRef.doc(uid).get()
}

export function saveUserService(id, user) {
    return firestoreRef.doc(id).update({ ...user})
}