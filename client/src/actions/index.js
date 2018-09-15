import axios from 'axios'

import { LOGIN_USER, SIGNUP_USER } from './types'

import swal from 'sweetalert2'

const baseURL = `http://localhost:3000/auth`

export const loginUser = (username, password) => {
  return function(dispatch){
    axios
    .post(`${baseURL}/login`, {username, password})
    .then(res => {
      swal({
        type: 'success',
        title: 'Bienvenido',
        text: res.data.username
      })
      return res
    })
    .then(res => {
      console.log(res)
      dispatch({
      type: LOGIN_USER, 
      payload: res
    }) })   
  }
}