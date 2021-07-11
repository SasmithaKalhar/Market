import { Button, Grid, Paper } from '@material-ui/core'
import React from 'react'
import { useStyles } from './classes'
import error from '../../assets/error-404.png'
import { useHistory } from 'react-router-dom'


export default function PageNotFound() {
  const classes = useStyles()
  let history = useHistory();

  return (
    <Grid className={classes.pageNotFoundRoot}>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item xs={8}>
          <Paper className={classes.paper} elevation={2}>
            <img src={error} alt='error' className={classes.img} />
            <p>
              {' '}
              <span
                style={{
                  color: '#d62828',
                  fontFamily: 'Gilroy-ExtraBold, serif',
                }}
              >
                GottaMenu
              </span>{' '}
              couldn't find the page you are looking for. Please return to the
              Home of all restaurant menus here.
            </p>
            <Button variant='contained' className={classes.button} onClick={() => history.goBack()}>
              Go Back
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  )
}
