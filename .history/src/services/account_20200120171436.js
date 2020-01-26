import firebase from 'firebase/app'
import { usersCollection, authRef } from '../config/consts'
const firestoreRef = firebase.firestore().collection(usersCollection)

export function signup(user) {
    createAccount(user.email, user.password)
}

async function createAccount(email, password) {
    const resp = await authRef.createUserWithEmailAndPassword(email, password)
    console.warn(resp)
}