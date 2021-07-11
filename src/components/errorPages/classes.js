import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  pageNotFoundRoot: {
    height: '95vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffaf7',
    fontFamily: 'Gilroy-Light, serif',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8rem'
    },
  },
  resultNotFoundRoot: {
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffaf7',
    fontFamily: 'Gilroy-Light, serif',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8rem'
    },
    [theme.breakpoints.up('xl')]: {
      height: '50vh',
    },
  },
  img: {
    width: '150px',
    marginBottom: '1.5rem'
  },

  button: {
    marginTop: '1.5rem',
    borderRadius: '20px',
    fontFamily: 'Gilroy-Light, serif',
    textTransform: 'capitalize',
    backgroundColor: '#e45826',
    color: '#fff',
    width: '140px',
    '&:hover': {
      backgroundColor: '#e45826',
      boxShadow: 'none',
    },
  },
  paper: {
    padding: '40px 50px',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      padding: '30px 20px',
    },

  },
  body: {
    padding: '20px 40px',
    textAlign: 'center',
    fontSize: '16px',
    lineHeight: '25px',
    [theme.breakpoints.down('xs')]: {
      padding: '30px 20px',
    },
  },
  body2: {
    padding: '30px 40px',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      padding: '30px 20px',
    },
  },
  box: {
    padding: '20px 40px',
  },

  innerBox: {
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      flexGrow: 0
    },
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  linkButton: {
    fontFamily: 'Gilroy-ExtraBold, serif',
    textTransform: 'lowercase',
    '&:hover': {
      backgroundColor: 'transparent'
    },
    cursor: 'default'
  },

}))
