import { Grid, Paper } from '@material-ui/core'
import React from 'react'
import { useStyles } from './classes'
import error from '../../assets/error-results.png'

export default function PageNotFound() {
  const classes = useStyles()

  return (
    <Grid className={classes.resultNotFoundRoot}>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item xs={8}>
          <Paper className={classes.paper} elevation={2}>
            <img src={error} alt='error' className={classes.img} />
            <p>
              {' '}
              <span
                style={{
                  color: '#000',
                  fontFamily: 'Gilroy-ExtraBold, serif',
                }}
              >
                Oops...
              </span>
              {' '}
              <span
                style={{
                  color: '#d62828',
                  fontFamily: 'Gilroy-ExtraBold, serif',
                }}
              >
                GottaMenu
              </span>{' '}
              couldn't find what you are looking for.
            </p>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  )
}
