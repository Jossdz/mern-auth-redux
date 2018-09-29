import axios from 'axios'
import { LOGIN_USER, LOGOUT_USER, SIGNUP_USER } from './types'
import swal from 'sweetalert2'

const baseURL = `http://localhost:3000/auth`

const notification = (type, title, text) => {
  swal({type, title, text})
}

export const loggedin = () => async dispatch => {
  try{
    const res = await axios.get(`${baseURL}/loggedin`, { withCredentials: true })
    dispatch({ type: LOGIN_USER, payload:res})
    console.log(res)
  }catch(err){
    console.log(err.message)
    // console.log(err.response.data.message)
  }
}

export const loginUser = (username, password) => async dispatch => {
  try {
    const res = await axios.post(`${baseURL}/login`, {username, password}, {withCredentials: true})
    dispatch({ type: LOGIN_USER, payload: res})
  }catch(err){
    console.log(err)
    //notification('error', 'Error:', err.response.data.message)
  }
}

export const logoutUser = () => async dispatch => {
  await axios.get(`${baseURL}/logout`, { withCredentials: true })
  swal({ type: 'success', title: 'Adios' })
  dispatch({type: LOGOUT_USER, payload: {}})
}
