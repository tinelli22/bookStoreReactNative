import { LOAD_USER } from '../consts';

const initialState = {
    user: {},
}

export default function(state = initialState, action) {

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