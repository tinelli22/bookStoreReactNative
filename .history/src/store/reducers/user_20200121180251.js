import { useState } from 'react'
import { LOAD_USER } from '../consts';

const [userState, setUserState] = useState({
    user: null,
})

export default function(state = userState, action) {

    switch (action.type) {
        case LOAD_USER:

        default:
           return state
    }
}