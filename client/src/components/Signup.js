import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

class Signup extends Component {
  state = {
    user: '',
    password: '',
    username: ''
  }

  inputChange = event => {
    const { target } = event
    const { name, value } = target

    this.setState({
      [name]: value
    })
  }

  onRedirect = () => {
    return (this.state.user === '') ?
      <form>
        <label htmlfor='username'>Username</label>
        <input onChange={this.inputChange} name='username' id='username' type='text'/>
        <label htmlfor='password'>Password</label>
        <input onChange={this.inputChange} name='password' id='password' type='password'/>
        <input type='submit' value='Signup'/>
        <span>or <Link to='/login'>Login</Link></span>
      </form> :
    <Redirect to='/'/>
  }

  render(){
    return <div>
      {this.onRedirect()}
    </div>
  }
}

export default Signup