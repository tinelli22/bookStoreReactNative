import { ADD_BOOK } from "../consts";


export const saveBook = book => ({ type: ADD_BOOK, payload: book})