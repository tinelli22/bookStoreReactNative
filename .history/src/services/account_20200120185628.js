import { authref, firestoreRef } from "../config/firebaseConfig"
import { Toast } from "native-base"

export function addUser(user) {
    return firestoreRef.add(user)
}

export function createAccount(email, password) {
    return authref.createUserWithEmailAndPassword(email, password)
}