import { booksCollection } from "../config/consts"
import firebase from 'firebase/app'

const firestoreRef = firebase.firestore().collection(booksCollection)

export function saveBookService(uid,book) {
   return firestoreRef.add({uid, ...book})
}

export function getBooksService(uid) {
    return firestoreRef.get()
}

export function removeBookService(id) {
    return firestoreRef.doc(id).delete()
}