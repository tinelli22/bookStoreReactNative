import { booksCollection } from "../config/consts"
import { firestoreRef } from "../config/firebaseConfig"


export function saveBookService(book) {
   return booksRef.add(book)
}

export function getBooksService() {
    return booksRef.get()
}