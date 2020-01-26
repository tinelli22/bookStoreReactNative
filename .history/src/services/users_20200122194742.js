import firebase, { firestore } from 'firebase'
import { LOAD_USER } from "../store/consts"
import { usersCollection } from "../config/consts"

const firestoreRef = firestore().collection(usersCollection)

export function load(email) {
   firestoreRef.where('email', '==', email).get().then(({ docs }) => {
        docs.forEach(d => console.log(d.data()))
   })
}