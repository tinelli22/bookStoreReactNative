import { LOAD_USER } from "../consts";

export const loadUser = user => dispatch({ type: LOAD_USER, payload: user})