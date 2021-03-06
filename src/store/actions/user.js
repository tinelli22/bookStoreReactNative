import { LOAD_USER } from "../consts";
import { initialize } from 'redux-form'

export const loadUserAction = user => ({ type: LOAD_USER, payload: user})
export const logoutUserAction = () => ({ type: LOGOFF_USER})
export const loadForm = values => (initialize('info', values))