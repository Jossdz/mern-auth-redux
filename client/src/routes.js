import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './actions'

import Header from './components/Header'
import Login from './components/Login'
import Private from './components/Private'
import Home from './components/Home'

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
        <Route path='/private' component={Private}/>
      </Fragment>
    </Fragment>
  </BrowserRouter>
  }
}

export default connect(null, actions)(Router)