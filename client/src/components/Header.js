import React from 'react'
import { Link } from 'react-router-dom'
import { connect} from 'react-redux'
import * as actions from '../actions'

class Header extends React.Component{
  state = {
    user: ''
  }

  handleLogout = () => {
    this.props.logoutUser()
  }
  componentWillReceiveProps({data}){
    console.log('data: ',data)
    if(data === undefined){
      this.setState({
        user: ''
      })
    }else {
      this.setState({
        user: data.username
      })
    }
  }

  renderNav = () => {
    return (this.state.user === '') ?
      <div>
        <li> <Link to='/signup'>  Signup </Link> </li>
        <li> <Link to='/login'>   Login </Link> </li>
      </div> :
      <div>
        <li> <Link to='/private'> Private</Link></li>
        <li> <a onClick={this.handleLogout}>Logout</a> </li>
      </div>
  }

  render(){
    return (
    <nav className='indigo darken-1'>
      <div className="nav-wrapper container">
        <Link to='/' className="brand-logo">Redux</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          { this.renderNav() }
        </ul>
      </div>
    </nav>
    )
  }
}

const mapStateToProps = ({auth}) => auth

export default connect(mapStateToProps, actions)(Header)