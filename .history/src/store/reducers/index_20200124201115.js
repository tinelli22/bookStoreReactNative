import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import userReducer from './user'
import bookReducer from './book'

export default combineReducers({
    form: formReducer,
    user: userReducer,
    book: bookReducer,
})