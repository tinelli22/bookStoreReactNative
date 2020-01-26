import firebase from 'firebase/app'
import { usersCollection, authRef } from '../config/consts'
import { Toast } from 'native-base'
const firestoreRef = firebase.firestore().collection(usersCollection)

export function signup(user) {
    return createAccount(user.email, user.password).catch(err => Toast.show({ text: 'Email já em uso', type: 'danger', position: 'top'}))
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