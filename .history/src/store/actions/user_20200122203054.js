import { LOAD_USER } from "../consts";

export const loadUser = user => ({ type: LOAD_USER, payload: user})