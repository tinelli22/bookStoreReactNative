import { LOAD_USER } from '../consts';

const initialState ={
    user: null,
}

export default function(state = initialState, action) {

    switch (action.type) {
        case LOAD_USER:
           return {
               user: action.payload
           }
        default:
           return state
    }
}