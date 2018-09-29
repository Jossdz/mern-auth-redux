import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import { connect} from 'react-redux'
import * as actions from '../actions'

import { withStyles } from '@material-ui/core/styles';
import {AppBar, Button, Toolbar, Typography, IconButton} from '@material-ui/core';


class Header extends React.Component{
  state = {
    user: ''
  }

  handleLogout = () => {
    this.props.logoutUser()
  }
  componentWillReceiveProps({data}){
    (data === undefined)?
      this.setState({ user: '' }) :
      this.setState({ user: data.username })
  }

  renderNav = () => {
    return (this.state.user === '') ?
      <Fragment>
        <Button color='inherit'>
          <Link to='/login'> Login </Link>
        </Button>
      </Fragment> :
      <Fragment>
        <Button color='inherit'>
          <Link to='/private'> DashBoard </Link>
        </Button>
        <Button color='inherit' onClick={this.handleLogout}>
          Logout
        </Button>
      </Fragment>
  }

  render(){
    const {classes} = this.props
    return (
      <div className={classes.root}>
      <AppBar position='sticky'>
        <Toolbar>
          <Link to='/'>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <img src={'https://image.flaticon.com/icons/svg/676/676089.svg'} width='45px' alt='logo'></img>
          </IconButton>
          </Link>
          <Typography variant="title" color="inherit" className={classes.grow}>
            
          </Typography>
          {this.renderNav()}
        </Toolbar>
      </AppBar>
    </div>
    )
  }
}

const mapStateToProps = ({auth}) => auth

const styles = {
  root: {
    flexGrow: 1,
    margin: '0, 3em, 0, 0'
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const styledHeader = withStyles(styles)(Header)
export default connect(mapStateToProps, actions)(styledHeader)