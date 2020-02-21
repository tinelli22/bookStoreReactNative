import { ADD_BOOK, USER_BOOKS } from "../consts";


export const saveBook = book => ({ type: ADD_BOOK, payload: book})
export const getBooks = books => ({ type: USER_BOOKS, payload: books})