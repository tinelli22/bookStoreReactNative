import { authref, firestoreRef } from "../config/firebaseConfig"
import { LOAD_USER } from "../store/consts"
import { usersCollection } from "../config/consts"

export function load(email) {
    
    firestoreRef.collection(usersCollection)
        .where('email', '==', email).limit(1).get().then(({ docs }) => {
            docs.forEach(doc => console.log(doc.data()))
        }).catch(err => console.error(err))
    
}