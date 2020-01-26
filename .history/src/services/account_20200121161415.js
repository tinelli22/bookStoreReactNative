import { authref, firestoreRef, provider } from "../config/firebaseConfig"


export function addUser(user) {
    return firestoreRef.add(user)
}

export function createAccount(email, password) {
    return authref.createUserWithEmailAndPassword(email, password)
}

export function loginWithEmailAndPassword(email, password) {
    return authref.signInWithEmailAndPassword(email, password)
}