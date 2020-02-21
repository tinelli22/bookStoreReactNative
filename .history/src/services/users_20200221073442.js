import { firestoreRef } from "../config/firebaseConfig"
import { booksCollection } from "../config/consts"


export function loadUserService(uid) {
    return firestoreRef.doc(uid).get()
}

export function saveUserService(id, user) {
    return firestoreRef.doc(id).update({ ...user})
}

export function loadUsersBooksService() {

   return firestoreRef.get().then(resp => {
         return resp.forEach(u => {
            return firestoreRef.doc(u.id).collection(booksCollection).get().then(bks => {
                bks.forEach(b => books.push({ user: u.data(), ...b.data()}))
            })
        })
    })

}