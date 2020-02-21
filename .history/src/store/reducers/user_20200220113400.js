import { LOAD_USER, LOGOFF_USER } from '../consts';

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
        case LOGOFF_USER:
            return {
                state: initialState
            }   
        default:
           return state
    }
}