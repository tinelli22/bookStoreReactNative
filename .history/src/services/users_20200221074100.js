import { firestoreRef } from "../config/firebaseConfig"
import { booksCollection } from "../config/consts"


export function loadUserService(uid) {
    return firestoreRef.doc(uid).get()
}

export function saveUserService(id, user) {
    return firestoreRef.doc(id).update({ ...user})
}

export function loadUsersBooksService() {
    const books = []
    
    return new Promise((resolve, reject) => {
        
    })
}