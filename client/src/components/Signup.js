import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from '../actions'

class Signup extends Component {
  state = {
    user: '',
    password: '',
    username: ''
  }

  componentWillReceiveProps({data}){
    if(data){
      const {user} = data
      this.setState({ user })
    }
  }


  inputChange = event => {
    const { target } = event
    const { name, value } = target

    this.setState({
      [name]: value
    })
  }

  submit = event => {
    const {username, password} = this.state
    event.preventDefault()
    this.props.signupUser(username, password)
  }

  onRedirect = () => {
    return (this.state.user === '') ?
      <form onSubmit={this.submit}>
        <label htmlFor='username'>Username</label>
        <input onChange={this.inputChange} name='username' id='username' type='text'/>
        <label htmlFor='password'>Password</label>
        <input onChange={this.inputChange} name='password' id='password' type='password'/>
        <input type='submit' value='Signup' className='btn btn-success'/>
        <span> or <Link to='/login'>Login</Link></span>
      </form> :
    <Redirect to='/'/>
  }

  render(){
    return <div>
      <h1>Signup</h1>
      {this.onRedirect()}
    </div>
  }
}

const mapStateToProps = ({ auth }) => {
  return auth
 }

export default connect(mapStateToProps, actions)(Signup)