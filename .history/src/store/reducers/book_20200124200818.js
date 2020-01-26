import { ADD_BOOK } from "../consts"

const initialState = {
    book: {},
    myBooks: []
}

export default function(state = initialState, action) {
    
    switch (action.type) {
        case ADD_BOOK:
           return {
              ...state, myBooks: [action.payload]
           }
        default:
           return state
    }
}