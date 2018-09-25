import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from '../actions'

import {Input,
  InputLabel,
  FormControl,
  Button,
  withStyles,
  Grid,
  Paper,
  Typography
} from '@material-ui/core'

class Login extends Component {
  state = {
    user: '',
    password: '',
    username: ''
  }

  componentWillReceiveProps({data}){
    if(data){
      const {user} = data
      this.setState({ user })
    }
  }


  inputChange = event => {
    const { target } = event
    const { name, value } = target

    this.setState({
      [name]: value
    })
  }

  submit = event => {
    const {username, password} = this.state
    event.preventDefault()
    this.props.loginUser(username, password)
  }

  onRedirect = (classes) => {
    return (this.state.user === '') ?
      <div className={classes.root} style={{height:'100vh', paddingTop:'4rem'}}>
      <Grid container spacing={24} justify='center' alignContent='center'>
        <Grid item xs={6} >
          <Paper className={classes.control}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Typography variant='display2'>Login</Typography>
              </Grid>
            <form onSubmit={this.submit} className={classes.container}>
              <Grid item xs={12}>
                <FormControl className={classes.formControl} fullWidth>
                  <InputLabel htmlFor='username'>Username</InputLabel>
                  <Input onChange={this.inputChange} name='username' id='username' type='text'/>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl className={classes.formControl} fullWidth>
                  <InputLabel htmlFor='password'>Password</InputLabel>
                  <Input onChange={this.inputChange} name='password' id='password' type='password'/>
                </FormControl>
              </Grid>
              <Grid container spacing={24} justify='center' alignItems='center'>
                <Grid item xs={4}>
                  <Button fullWidth variant="outlined" color="primary" type='submit' className='btn btn-success'>
                    Signup
                  </Button>
                </Grid>
                <Grid item xs={4}><Typography variant='caption' style={{padding:'0 3.5rem'}}> - or - </Typography></Grid>
                <Grid item xs={4}><Link to='/login'><Button fullWidth>Login</Button></Link></Grid>
              </Grid>
            </form>
            </Grid>
          </Paper>
        </Grid>
      </Grid>  
      </div> :
    <Redirect to='/'/>
  }

  render(){
    return <div>
      {this.onRedirect(this.props.classes)}
    </div>
  }
}

const mapStateToProps = ({ auth }) => {
  return auth
 }

 const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  root: {
    flexGrow: 1,
    margin: '10rem, 0'
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 4,
  }
});
const styledSignup = withStyles(styles)(Login)

export default connect(mapStateToProps, actions)(styledSignup)