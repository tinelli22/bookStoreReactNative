import { booksCollection } from "../config/consts"
import { firestoreRef, authref } from "../config/firebaseConfig"


const booksRef = firestoreRef.doc(authref.currentUser.uid).collection(booksCollection)

export function saveBookService(book) {
   return booksRef.add(book)
}

export function getBooksService() {
    return booksRef.get()
}