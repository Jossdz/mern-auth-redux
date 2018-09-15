import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import swal from 'sweetalert2'

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

  submit = event => {
    event.preventDefault()
    swal({
      type: 'success',
      title: 'Usuario Creado',
      text: this.state.username
    })
  }

  onRedirect = () => {
    return (this.state.user === '') ?
      <form onSubmit={this.submit}>
        <label htmlfor='username'>Username</label>
        <input onChange={this.inputChange} name='username' id='username' type='text'/>
        <label htmlfor='password'>Password</label>
        <input onChange={this.inputChange} name='password' id='password' type='password'/>
        <input type='submit' value='Signup' className='btn btn-success'/>
        <span> or <Link to='/login'>Login</Link></span>
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