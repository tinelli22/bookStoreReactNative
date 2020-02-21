import { ADD_BOOK, USER_BOOKS } from "../consts";


export const saveBookAction = book => ({ type: ADD_BOOK, payload: book})
export const getBooks = books => ({ type: USER_BOOKS, payload: books})