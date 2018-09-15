import axios from 'axios'

import { LOGIN_USER, SIGNUP_USER } from './types'

const baseURL = `http://localhost:3000/auth`

export const loginUser = (username, password) => {
  return function(dispatch){
    axios
    .post(`${baseURL}/login`, {username, password})
    .then(res => dispatch({
      type: LOGIN_USER, 
      payload: res
    }))
  }
}