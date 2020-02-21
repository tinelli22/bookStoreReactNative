import { booksCollection } from "../config/consts"
import firebase from 'firebase/app'

const firestoreRef = firebase.firestore().collection(booksCollection)

export function saveBookService(uid,book) {
   return firestoreRef.add({uid, ...book})
}

export function getBooksService(uid) {
    return new Promise((resolve, reject) => {
         firestoreRef.where('uid', '==', uid).get().then(resp => {
            
            resp.docs.map(book => {
                return { id: book.id, ...book.data()}
            })
            resolve(resp.docs)
        }).catch(_ => reject('Erro ao carregar livros'))
    })
}

export function removeBookService(id) {
    return firestoreRef.doc(id).delete()
}