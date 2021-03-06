import firebase from 'firebase/app'
import { usersCollection, authRef } from '../config/consts'
import { Toast } from 'native-base'
const firestoreRef = firebase.firestore().collection(usersCollection)

export async function signup(user) {
    return createAccount(user.email, user.password)
}

async function createAccount(email, password) {
    const resp = await authRef.createUserWithEmailAndPassword(email, password)
    console.log(resp)
}