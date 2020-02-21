import { booksCollection } from "../config/consts"
import { firestoreRef, authref } from "../config/firebaseConfig"
import { saveBookAction } from '../store/actions/book'
import { messageError, messageSuccess } from "../components/ToastMessage"

const booksRef = firestoreRef.doc(authref.currentUser.uid).collection(booksCollection)

export function saveBookService(book) {
    return async dispatch => {
        booksRef.add(book).then(resp => {
            const bookUser = {
                id: resp.id,
                ...book
            }
            dispatch(saveBookAction(bookUser))
            messageSuccess({ text: 'Livro salvo com sucesso!'})
        }).catch(_ => messageError({text: 'Erro ao cadastrar livro.'}))
    }
}

export function getBooks() {

}