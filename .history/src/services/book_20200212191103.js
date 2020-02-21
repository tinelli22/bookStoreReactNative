import { booksCollection } from "../config/consts"
import { firestoreRef, authref } from "../config/firebaseConfig"

export function saveBookService(uid,book) {
   return firestoreRef.doc(uid).collection(booksCollection).add(book)
}

export function getBooksService(uid) {
    console.log(uid)
    return firestoreRef.doc(uid).collection(booksCollection).get()
}