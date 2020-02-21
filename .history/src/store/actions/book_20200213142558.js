import { ADD_BOOK, USER_BOOKS, LOAD_IMAGES_BOOK } from "../consts";
import { initialize } from 'redux-form'


export const saveBookAction = book => ({ type: ADD_BOOK, payload: book})
export const getBooksAction = books => ({ type: USER_BOOKS, payload: books})
export const loadBookAction = values => (initialize('book', values))
export const loadImagesBookAction = images => ({ type: LOAD_IMAGES_BOOK, payload: images })