import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { useStyles } from './classes'
import { Box, Grid, } from '@material-ui/core'
import error from '../../assets/error-support.png'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'
import { Link } from 'react-router-dom'

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

const DataLoadingFail = ({ show, dialogOpen }) => {
  const classes = useStyles()



  const handleClose = () => {
    dialogOpen(false)
  }

  const refreshPage = () => {
    window.location.reload();
  }

  return (
    <div>
      <Dialog
        PaperProps={{
          style: { borderRadius: 10 },
        }}
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={show}
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
          <Grid className={classes.body}>
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
              is currently busy preparing your menus. Return to our{' '}
              <Link to='/' style={{ textDecoration: 'none' }} onClick={refreshPage}>
                <span
                  style={{
                    color: '#e45826',
                    fontFamily: 'Gilroy-ExtraBold, serif',
                    textDecoration: 'underline'
                  }}
                >
                  HOME
              </span>{' '}
              </Link>
              or Contact Our Support Team via Email or Contact Number.
            </p>
          </Grid>
          <div style={{ width: '100%' }}>
            <Box display='flex' p={0.5} className={classes.box} flexWrap='wrap' justifyContent='center'>
              <Box p={0.2} bgcolor='#fffaf7' className={classes.innerBox}>
                <Button startIcon={<EmailIcon />} className={classes.linkButton} disableRipple>contact@gottamenu.com</Button>
              </Box>
              <Box p={0.2} bgcolor='#fffaf7'>
                <Button startIcon={<PhoneIcon />} className={classes.linkButton} disableRipple>(415) 606-5291</Button>
              </Box>
            </Box>
          </div>
        </Grid>
      </Dialog>
    </div>
  )
}

export default DataLoadingFail
