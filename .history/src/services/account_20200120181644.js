import { usersCollection, authRef } from '../config/consts'
import { firebaseRef } from '../config/firebaseConfig'
const firestoreRef = firebaseRef.firestore().collection(usersCollection)

export async function signup(user) {
    return createAccount(user.email, user.password)
}

async function createAccount(email, password) {
    const resp = await authRef.createUserWithEmailAndPassword(email, password)
    console.warn(resp)
}