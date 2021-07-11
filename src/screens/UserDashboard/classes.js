import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    '&$selected': {
      backgroundColor: '#e45826',
      '&:hover': {
        backgroundColor: '#e45826',
      }
    },
  },
  selected: {},
  userCard: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    width: "80%",
    marginTop: 20,
  },
  userMobile: {
    width: "98%",
    display: 'flex',
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    [theme.breakpoints.down('sm')]: {
      justifyContent: "flex-start",
      alignContent: "center",
      width: "96%",
      marginRight: "2%",
      marginLeft: "2%",
      marginBottom: 10,
    },
    [theme.breakpoints.down('xs')]: {
      alignItems: "center",
      width: "92%",
      marginRight: "4%",
      marginLeft: "4%",
    },
  },
  spin: {
    [theme.breakpoints.down('sm')]: {
      width: "96%",
      marginRight: "2%",
      marginLeft: "2%",
    },
    [theme.breakpoints.down('xs')]: {
      width: "92%",
      marginRight: "4%",
      marginLeft: "4%",
    },
  },
    nav: {
    display: 'flex',
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: "80%",
    marginTop: 15,
    marginBottom: 40,
  },
  userImage: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 20,
    [theme.breakpoints.down('sm')]: {
        width: "50px",
        height: "50px",
        marginLeft: 10,
    },
    [theme.breakpoints.down('xs')]: {
        width: "50px",
        height: "50px",
        marginLeft: 10,
    },
  },
  userName: {
    fontFamily: 'Gilroy-ExtraBold, serif',
    color: '#000',
    fontSize: '1.2rem',
    alignSelf: "center",
    marginBottom: 20,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
      marginLeft: 20,
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: 0,
      marginLeft: 20,
    },
  },
  navText: {
    fontFamily: 'Gilroy-ExtraBold, serif',
    color: '#000',
    fontSize: '2rem',
    [theme.breakpoints.down('sm')]: {

    },
    [theme.breakpoints.down('xs')]: {

    },
  },
  list: {
    width: '90%',
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: "#FFFAF7",
  },
  select: {
    fontFamily: 'Gilroy-ExtraBold, serif',
    color: '#000',
    fontSize: '1.5rem',
  },

  editInfo: {
    fontFamily: 'Gilroy-ExtraBold, serif',
    color: '#000',
    fontSize: '1.5rem',
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 25,
  },
  link: {
    textDecoration: 'none',
    color: '#000',
  },
  heading: {
   fontFamily: 'Gilroy-Light, serif',
    color: '#000',
    fontSize: '1rem',
  },
  items: {
    '& span, & svg': {
      fontSize: '1rem',
      fontFamily: 'Gilroy-Light, serif',
      color: '#000',
    }
  },

}))




