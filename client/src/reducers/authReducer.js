import { LOGIN_USER, LOGOUT_USER } from '../actions/types'

export default (state = {}, action) => {
  console.log('type:', action.type)
  switch(action.type){
    case LOGIN_USER:
      return action.payload || {}
    case LOGOUT_USER:
      return action.payload
    default:
      return state
  }
}