import { ADD_BOOK, USER_BOOKS, LOAD_IMAGES_BOOK, REMOVE_BOOK } from "../consts"

const initialState = {
    images: [],
    myBooks: []
}

export default function(state = initialState, action) {
    
    switch (action.type) {
        case ADD_BOOK: 
        return {
            ...state,
            myBooks: state.myBooks.push(action.payload)
        }
        case USER_BOOKS:
            return {
                ...state,
                myBooks: action.payload
            }
        case LOAD_IMAGES_BOOK:
            return {
                ...state,
                images: action.payload
            }
        case REMOVE_BOOK:
            return {
                ...state,
                myBooks: state.myBooks.map(b => b.id !== payload)
            }
        default:
           return state
    }
}