import { LOGIN_USER, LOGOUT_USER, SIGNUP_USER } from '../actions/types'

export default (state = {}, action) => {
  switch(action.type){
    case LOGIN_USER:
      return action.payload
    case SIGNUP_USER:
      return action.payload
    case LOGOUT_USER:
      return action.payload
    default:
      return state
  }
}