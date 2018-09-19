import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes'

import 'sweetalert2/dist/sweetalert2.min.css'
import './styles.css'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

const store = createStore(reducers, {}, applyMiddleware(thunk))
window.store = store 
ReactDOM.render(
  <Provider store={store}>
    <Router/>
  </Provider>
  , document.getElementById('root'));

