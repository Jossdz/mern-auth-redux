import axios from 'axios'

import { LOGIN_USER, SIGNUP_USER } from './types'

const baseURL = `http://localhost:3000/auth`

export const loginUser = () => {
  return function(dispatch){
    axios.post(`${baseURL}/login`)
    .then(res => dispatch({
      type: LOGIN_USER, 
      payload: res
    }))
  }
}