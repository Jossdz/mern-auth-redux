import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Private extends Component{
  state = {
    user : ''
  }

  componentWillMount(){
    if(this.props.data){
      this.setState({
        user: this.props.data.username 
      })
    }
    
  }

  onRedirect = () => {
    return (this.state.user === '') ?
    <Redirect to='/login'/> :
    <h1> Bienvenido { this.state.user } </h1>
  }

  render(){
    return <div>
    {this.onRedirect()}
    </div>
  }
}

const mapStateToProps = ({ auth }) => auth

export default connect(mapStateToProps)(Private)