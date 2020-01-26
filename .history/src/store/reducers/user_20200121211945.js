import { LOAD_USER } from '../consts';

const initialState = {
    user: null,
}

export default function(state = initialState, action) {
    console.log(action.payload)
    switch (action.type) {
        case LOAD_USER:
           return {
               ...state,
               user: action.payload
           }
        default:
           return state
    }
}