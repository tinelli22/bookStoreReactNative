import { booksCollection } from "../config/consts"
import { firestoreRef, authref } from "../config/firebaseConfig"

export function saveBookService(uid,book) {
   return firestoreRef.collection(booksCollection).add({uid, ...book})
}

export function getBooksService(uid) {
    return firestoreRef.collection(booksCollection).get()
}

export function removeBookService(id) {
    return firestoreRef.collection(booksCollection).doc(id).delete()
}