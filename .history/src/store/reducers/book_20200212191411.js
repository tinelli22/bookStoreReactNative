import { ADD_BOOK, USER_BOOKS } from "../consts"

const initialState = {
    book: {},
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
                mybooks: [action.payload]
            }
        default:
           return state
    }
}