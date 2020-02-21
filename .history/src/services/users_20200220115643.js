import { firestoreRef } from "../config/firebaseConfig"
import { booksCollection } from "../config/consts"


export function loadUserService(uid) {
    return firestoreRef.doc(uid).get()
}

export function saveUserService(id, user) {
    return firestoreRef.doc(id).update({ ...user})
}

export function loadUsersBooksService() {
    const books = []

    firestoreRef.get().then(resp => {
        resp.forEach(u => {
            return firestoreRef.doc(u.id).collection(booksCollection).get().then(bks => {
                bks.forEach(b => books.push({ user: u.data(), ...b.data()}))
            })
        })
    })

    return books
}