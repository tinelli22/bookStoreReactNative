import { booksCollection } from "../config/consts"
import { firestoreRef, authref } from "../config/firebaseConfig"
import { saveBookAction } from '../store/actions/book'
import { messageError, messageSuccess } from "../components/ToastMessage"

const booksRef = firestoreRef.doc(authref.currentUser.uid).collection(booksCollection)

export function saveBookService(book) {
   return booksRef.add(book)
}

export function getBooks() {
    return booksRef.get()
}