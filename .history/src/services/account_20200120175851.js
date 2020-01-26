import { usersCollection, authRef } from '../config/consts'
const firestoreRef = firebase.firestore().collection(usersCollection)

export async function signup(user) {
    return createAccount(user.email, user.password)
}

async function createAccount(email, password) {
    const resp = await authRef.createUserWithEmailAndPassword(email, password)
    console.warn(resp)
}