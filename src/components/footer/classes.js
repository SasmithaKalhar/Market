import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontSize: "14px",
    [theme.breakpoints.down("sm")]: {
      padding: "30px",
      fontSize: "13px",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "50px",
    },
    backgroundColor: "#202124",
    color: "#fff",
    fontFamily: "Gilroy-Light, serif",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
  },
  gridLink: {
    marginBottom: "1rem",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "14px",
    [theme.breakpoints.down("xs")]: {
      marginTop: 20,
    },
  },
  a: {
    textDecoration: "none",
    color: "#fff",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      textAlign: "left",
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      textAlign: "left",
    },
  },
  logo1: {
    width: "311px",
    float: "right",
    [theme.breakpoints.between("xs", "sm")]: {
      display: "none",
    },
  },
  logo2: {
    width: "282px",
    marginTop: "1rem",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
    [theme.breakpoints.between("md", "lg")]: {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "3%",
    },
  },
  iconSet1: {
    [theme.breakpoints.between("xs", "sm")]: {
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
      marginLeft: "23%",
    },
  },
  iconSet2: {
    marginTop: "1.5rem",
    display: "flex",
    width: "150px",
    justifyContent: "space-between",
  },
  icon: {
    textDecoration: "none",
    color: "#fff",
  },
  txt: {
    marginTop: "28px",
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
    [theme.breakpoints.between("md", "lg")]: {
      textAlign: "left",
      fontSize: "12px",
    },
    [theme.breakpoints.only("lg")]: {
      textAlign: "right",
    },
  },
  center: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
}));
