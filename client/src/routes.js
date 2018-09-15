import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Signup from './components/Signup'
import Login from './components/Login'
import Private from './components/Private'

const Home    = () => <h1> Home </h1>


export default () =>
  <BrowserRouter>
    <div>
      <Header/>
      <div className='container'>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/private' component={Private}/>
      </div>
    </div>
  </BrowserRouter>