import { booksCollection } from "../config/consts"
import { firestoreRef, authref } from "../config/firebaseConfig"


const booksRef = firestoreRef.doc(authref.currentUser.uid).collection(booksCollection)

export function saveBook(book) {
    return booksRef.add(book)
}