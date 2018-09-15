import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Signup from './components/Signup'

const Login   = () => <h1> Login </h1>
const Home    = () => <h1> Home </h1>
const Private = () => <h1> Private</h1>

export default () =>
  <BrowserRouter>
    <div>
      <Header/>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/private' component={Private}/>
    </div>
  </BrowserRouter>