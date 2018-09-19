import axios from 'axios'
import { LOGIN_USER, LOGOUT_USER, SIGNUP_USER } from './types'
import swal from 'sweetalert2'

const baseURL = `http://localhost:3000/auth`

const notification = (type, title, text) => {
  swal({type, title, text})
}

export const loginUser = (username, password) => async dispatch => {
  const res = await axios.post(`${baseURL}/login`, {username, password})
  try {
    notification('success', 'Bienvenido', res.data.username)
    dispatch({ type: LOGIN_USER, payload: res})
  }catch(err){
    console.log(err)
  }
}

export const signupUser = (username, password) => async dispatch => {
  try{
    const res = await axios.post(`${baseURL}/signup`, {username, password})
    notification('success', 'Usuario creado', res.data.username)
    dispatch({ type: SIGNUP_USER, payload: res})
  }catch(err){
    notification('error', 'Error:', err.response.data.message)
  }
  
}

export const logoutUser = () => async dispatch => {
  const res = await axios.get(`${baseURL}/logout`)
  swal({ type: 'success', title: 'Adios' })
  dispatch({type: LOGOUT_USER, payload: {}})
}
