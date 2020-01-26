import { authref } from "../config/firebaseConfig"
import { Toast } from "native-base"

export async function signup(user) {
    return createAccount(user.email, user.password)
}

async function createAccount(email, password) {
    const resp = await authref.createUserWithEmailAndPassword(email, password)
    if(!resp.user) {
        Toast.show({ text: 'Conta ja em uso', type: 'warning'})
    }
}