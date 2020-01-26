import { authref } from "../config/firebaseConfig"
import { Toast } from "native-base"

export function addUser(user) {
    
}

export function createAccount(email, password) {
    return authref.createUserWithEmailAndPassword(email, password)
}