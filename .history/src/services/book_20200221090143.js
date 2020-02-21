import { booksCollection } from "../config/consts"
import firebase from 'firebase/app'

const firestoreRef = firebase.firestore().collection(booksCollection)

export function saveBookService(uid,book) {
   return firestoreRef.add({uid, ...book})
}

export function getBooksService(uid) {
    return new Promise((resolve, reject) => {
        const books = []
        firestoreRef.where('uid', '==', uid).get().then(resp => {
            resp.forEach(b => books.push({ id: b.id, ...b.data()}))
            resolve(books)    
        }).catch(_ => reject('Erro ao carregar livros'))
    })
}

export function removeBookService(id) {
    return firestoreRef.doc(id).delete()
}