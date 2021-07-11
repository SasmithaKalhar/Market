import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {},

  header: {
    margin: "0",
    height: "80px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.up("xl")]: {
      margin: "0",
    },
    [theme.breakpoints.down("md")]: {
      height: "65px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "65px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "65px",
    },
  },
  shadow: {
    boxShadow: "0 3px 11px rgb(0 0 0 / 16%)",
  },
  container: {
    maxWidth: "100%",
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0",
    },
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down("md")]: {
      flexGrow: 1,
    },
  },
  menuButton: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  logo: {
    height: "79px",
    width: "auto",
    alignItems: "center",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      height: "45px",
      width: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      height: "45px",
      width: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      height: "65px",
      width: "auto",
    },
  },

  search: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  centerH: {
    width: "45%",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "50%",
    },
  },
  rightSec: {
    textAlign: "right",
    display: "flex",
  },
  button: {
    padding: "0px 20px",
    height: "40px",
    fontFamily: "Gilroy-Light",
    fontSize: "14px",
    fontWeight: "normal",
    outline: "none",
    cursor: "pointer",
    borderRadius: "50px",
    backgroundColor: "white",
    borderColor: "#F95919",
    color: "#F95919",
    opacity: "1",
    textTransform: "unset",

    boxShadow: "0 3px 6px rgb(187 131 83 / 25%)",
    "&.secondary": {},
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    // [theme.breakpoints.up('sm')]: {
    //   display: 'flex',
    // },
  },
  link: {
    textDecoration: "none",
    color: "#000",
    fontFamily: "Gilroy-Light",
    fontSize: "18px",
    margin: "0px 15px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  linkButton: {
    fontFamily: "Gilroy-Light, serif",
    textTransform: "capitalize",
    fontSize: "14px",
    "&:hover": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  linkButtonDrawer: {
    fontFamily: "Gilroy-Light, serif",
    fontSize: "14px",
    cursor: "pointer",
  },
  icon: {
    textDecoration: "none",
    color: "#000",
  },
}));
