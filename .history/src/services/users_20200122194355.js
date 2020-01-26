import { authref, firestoreRef } from "../config/firebaseConfig"
import { LOAD_USER } from "../store/consts"
import { usersCollection } from "../config/consts"

export function load(email) {
    firestoreRef.where('email', '==', email).get().then(({ docs }) => {
        docs.forEach(d => console.log(d))
    }).catch(err => console.error(err))
}