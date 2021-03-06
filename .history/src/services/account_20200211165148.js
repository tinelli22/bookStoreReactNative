import { authref, firestoreRef, provider } from "../config/firebaseConfig"
import { load } from "./users"
import { LOAD_USER } from "../store/consts"
import { messageWarning } from "../components/ToastMessage"
import { loadUser } from "../store/actions/user"


export function addUser(user) {
    return firestoreRef.doc(user.uid).set(user)
}

export function createAccount(email, password) {
    return authref.createUserWithEmailAndPassword(email, password)
}

export function loginWithEmailAndPassword(email, password) {
    return authref.signInWithEmailAndPassword(email, password)
}

export function logout() {
    return authref.signOut()
}