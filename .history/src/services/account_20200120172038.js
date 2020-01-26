import firebase from 'firebase/app'
import { usersCollection, authRef } from '../config/consts'
const firestoreRef = firebase.firestore().collection(usersCollection)

export function signup(user) {
    return createAccount(user.email, user.password).catch(err => console.error(err))
    .then(resp => {
        const newUser = {
            ...user,
            uid: resp.user.uid
        }
        return firestoreRef.add(newUser)

    })
}

function createAccount(email, password) {
    return authRef.createUserWithEmailAndPassword(email, password)
}