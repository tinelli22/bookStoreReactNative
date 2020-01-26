import { LOAD_USER } from "../consts";
import { initialize } from 'redux-form'

export const loadUser = user => ({ type: LOAD_USER, payload: user})

export const loadForm = values => (initialize('info', values))