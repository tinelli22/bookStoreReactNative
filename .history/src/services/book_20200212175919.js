import { booksCollection } from "../config/consts"
import { firestoreRef, authref } from "../config/firebaseConfig"


const booksRef = authref.currentUser ? firestoreRef.doc(authref.currentUser.uid).collection(booksCollection)
: null


export function saveBookService(book) {
   return booksRef.add(book)
}

export function getBooksService() {
    return booksRef.get()
}