import React, { Component } from 'react'
import { Grid, withStyles, Button, Paper, Input, InputLabel, FormControl, Typography} from '@material-ui/core'

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100vw',
    height: '90vh'
  },
  paper: {
    width: 500,
    padding: 10
  },
  button: {
    margin: theme.spacing.unit,
  },
})

class Home extends Component{
  state = {
    search: ''
  }

  handleChange = e => {
    this.setState({
      search: e.target.value
    })
  }
  render(){
    const {classes} = this.props
    return <Grid className={classes.root} container
    justify="center"
    alignItems="center">
      <Grid item xs={12} sm={6} >
        <Paper className={classes.paper}>
          <Typography variant="headline" component="h3">
            Evaluación docente
          </Typography>
          <FormControl style={{width:'30em'}}>
            <InputLabel htmlFor='search'>Buscar</InputLabel>
            <Input value={this.state.search} id='search' type='text' placeholder='Buscar tu encuesta' fullWidth onChange={this.handleChange}/>
            <Button color="primary" className={classes.button} fullWidth>
              Buscar
            </Button>
          </FormControl>
        </Paper>
      </Grid>
    </Grid>
  }
}

export default withStyles(styles)(Home)