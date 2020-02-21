import { booksCollection } from "../config/consts"
import firebase from 'firebase/app'

const firestoreRef = firebase.firestore().collection(booksCollection)

export function saveBookService(uid,book) {
   return firestoreRef.collection(booksCollection).add({uid, ...book})
}

export function getBooksService(uid) {
    return firestoreRef.collection(booksCollection).get()
}

export function removeBookService(id) {
    return firestoreRef.collection(booksCollection).doc(id).delete()
}