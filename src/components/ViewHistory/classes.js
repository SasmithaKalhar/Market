import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  account: {
    width: "90%",
    marginTop: 20,
    marginLeft: 30,
    backgroundColor: "#FFFAF7",
    padding: 25,
    [theme.breakpoints.down("sm")]: {
      width: 696,
      maxWidth: 696,
      margin: 0,
      padding: 20,
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      maxWidth: 325,
      overflow: "auto",
      marginLeft: 0,
      marginTop: 0,
      padding: 10,
    },
  },
  paper: {
    padding: 25,
    marginBottom: 50,
    background: "#ffffff",
    [theme.breakpoints.down("sm")]: {
      padding: 15,
    },
    [theme.breakpoints.down("xs")]: {
      padding: 15,
    },
  },
  container: {
    maxHeight: 440,
  },
  editInfo: {
    fontFamily: "Gilroy-ExtraBold, serif",
    color: "#000",
    fontSize: "1.5rem",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 25,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  cell: {
    fontFamily: "Gilroy-ExtraBold, serif",
    color: "#000",
    fontSize: "0.9rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.9rem",
    },
  },
  cellText: {
    fontFamily: "Gilroy-Light, serif",
    color: "#000",
    fontSize: "0.9rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.9rem",
    },
  },
}));
