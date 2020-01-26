import { authref, firestoreRef } from "../config/firebaseConfig"

export function loadUser(uid) {
    firestoreRef.where('uid', '==', uid).limit(1).get().then(resp => console.log(resp.docs))
    .catch(err => console.error(err))
}