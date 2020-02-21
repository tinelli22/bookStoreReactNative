import { booksCollection } from "../config/consts"
import { firestoreRef, authref } from "../config/firebaseConfig"

export function saveBookService(uid,book) {
   return firestoreRef.doc(uid).collection(booksCollection).add(book)
}

export function getBooksService(uid) {
    return firestoreRef.doc(uid).collection(booksCollection).get()
}

export function removeBookService(uid, id) {
    return firestoreRef.doc(uid).collection(booksCollection).doc(id).delete()
}