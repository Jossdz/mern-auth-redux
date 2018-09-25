import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './actions'

import Header from './components/Header'
import Signup from './components/Signup'
import Login from './components/Login'
import Private from './components/Private'

const Home = () => <h1> Home </h1>

class Router extends Component{
  componentWillMount(){
    this.props.loggedin()
  }
  render(){
    return <BrowserRouter>
    <Fragment>
      <Header/>
      <Fragment>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/private' component={Private}/>
      </Fragment>
    </Fragment>
  </BrowserRouter>
  }
}

export default connect(null, actions)(Router)