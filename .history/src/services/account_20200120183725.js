import { authref } from "../config/firebaseConfig"
import { Toast } from "native-base"

export async function signup(user) {
    return createAccount(user.email, user.password).catch(_ => Toast.show({ text: 'Email inválido ou ja em uso', type: 'danger', position: 'top'}))
}

function createAccount(email, password) {
    return authref.createUserWithEmailAndPassword(email, password)
}