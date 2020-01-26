import { authref } from "../config/firebaseConfig"

export async function signup(user) {
    return createAccount(user.email, user.password)
}

async function createAccount(email, password) {
    const resp = await authref.createUserWithEmailAndPassword(email, password)
    console.warn(resp)
}