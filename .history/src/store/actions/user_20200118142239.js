import { ADD_USER } from "../consts";

export const addUser = user => ({ type: ADD_USER, payload: user })