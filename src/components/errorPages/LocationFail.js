import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { useStyles } from './classes'
import { Grid } from '@material-ui/core'
import error from '../../assets/error-location.png'


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
})

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      {onClose ? (
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const LocationFail = ({ open, handleOpen }) => {
  const classes = useStyles()



  const handleClose = () => {
    handleOpen(false)
  }
  return (
    <div>

      <Dialog
        PaperProps={{
          style: { borderRadius: 10 },
        }}
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <div>
          <DialogTitle id='customized-dialog-title' onClose={handleClose} />
        </div>

        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
          style={{
            fontFamily: 'Gilroy-Light, serif',
          }}
        >
          <img src={error} alt='error' className={classes.img} />
          <Grid className={classes.body2}>
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
              needs to know where you are! Please enable the location on your Browser or Device.
            </p>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  )
}

export default LocationFail
