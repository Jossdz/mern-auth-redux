import axios from 'axios'

import { LOGIN_USER, LOGOUT_USER } from './types'

import swal from 'sweetalert2'

const baseURL = `http://localhost:3000/auth`

export const loginUser = (username, password) => async dispatch => {
    const res = await axios.post(`${baseURL}/login`, {username, password})
    swal({ type: 'success', title: 'Bienvenido', text: res.data.username})
    dispatch({ type: LOGIN_USER, payload: res}) 
  }

export const logoutUser = () => async dispatch => {
  const res = await axios.get(`${baseURL}/logout`)
  swal({ type: 'success', title: 'Adios' })
  dispatch({type: LOGOUT_USER, payload: {}})
}