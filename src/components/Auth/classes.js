import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField } from "formik-material-ui";

export const useStyles = makeStyles((theme) => ({
  test: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: "100%",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  button: {
    borderRadius: "20px",
    fontFamily: "Gilroy-Light, serif",
    textTransform: "capitalize",
    fontSize: "14px",
    backgroundColor: "#e45826",
    color: "#fff",
    width: "160px",
    fontWeight: 400,
    height: 40,
    "&:hover": {
      backgroundColor: "#e45826",
      boxShadow: "none",
    },
  },
  facebook: {
    fontFamily: "Gilroy-Light, serif",
    textTransform: "capitalize",
    fontSize: "1.1rem",
    backgroundColor: "#507CC0",
    display: "flex",
    justifyContent: "flex-start",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    color: "#fff",
    width: "385px",
    height: 65,
    borderWidth: "0px",
    borderColor: "#ffffff",
    borderRadius: "50px",
    "&:hover": {
      backgroundColor: "#507CC0",
      boxShadow: "none",
      borderWidth: "0px",
      borderColor: "#ffffff",
    },
    [theme.breakpoints.down("sm")]: {
      width: "290px",
      height: 65,
      fontSize: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "270px",
      marginTop: 45,
      height: 60,
      fontSize: "0.9rem",
    },
  },
  google: {
    fontFamily: "Gilroy-Light, serif",
    textTransform: "capitalize",
    fontSize: "1.1rem",
    backgroundColor: "#DF4930",
    borderRadius: "50px",
    display: "flex",
    justifyContent: "flex-start",
    color: "#fff",
    width: "385px",
    height: 65,
    "&:hover": {
      backgroundColor: "#DF4930",
      boxShadow: "none",
    },
    [theme.breakpoints.down("sm")]: {
      width: "290px",
      fontSize: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "270px",
      height: 60,
      fontSize: "0.9rem",
      marginBottom: 20,
    },
  },
  apple: {
    fontFamily: "Gilroy-Light, serif",
    textTransform: "capitalize",
    backgroundColor: "#000000",
    borderRadius: "50px",
    color: "#fff",
    width: 350,
    height: 70,
    "&:hover": {
      backgroundColor: "#000000",
      boxShadow: "none",
    },
    [theme.breakpoints.down("xs")]: {
      width: 300,
      height: 60,
    },
  },
  linkButton: {
    fontFamily: "Gilroy-Light, serif",
    textTransform: "unset",
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
  subtitle: {
    fontFamily: "Gilroy-Light, serif",
    color: "#000",
    fontSize: "1.3rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  textCheckbox: {
    marginTop: "10px",
    fontFamily: "Gilroy-Light, serif",
    color: "#000",
    fontSize: "1.1rem",
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
      fontSize: "1rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },
  bottom: {
    marginBottom: "10px",
    textTransform: "capitalize",
    fontFamily: "Gilroy-Light, serif",
    color: "#000",
    fontSize: "1.1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
  forget: {
    marginBottom: "0px",
    textTransform: "capitalize",
    fontFamily: "Gilroy-Light, serif",
    color: "#000",
    fontSize: "1.1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
  spanText: {
    color: "#D62828",
  },
  field: {
    marginTop: "1.5rem",
    alignSelf: "center",
    borderRadius: "25px",
    marginBottom: 29,
    width: "85%",
    height: "30px",
  },
  drop: {
    border: "2px solid #e45826",
    borderRadius: 60,
  },
  dialog: {
    borderRadius: 60,
  },
  res: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alginItem: "center",
    width: "100%",
  },
  privacy1: {
    display: "flex",
    justifyContent: "center",
    alginItem: "center",
    alginSelf: "center",
    fontFamily: "Gilroy-Light, serif",
    color: "#000",
    fontSize: "0.8rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.7rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.7rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7rem",
    },
  },
  privacy2: {
    display: "flex",
    justifyContent: "center",
    alginItem: "center",
    alginSelf: "center",
    fontFamily: "Gilroy-Light, serif",
    color: "#000",
    fontSize: "0.8rem",
    marginBottom: "30px",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.7rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.7rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7rem",
    },
  },
}));

export const CssTextField = withStyles((theme) => ({
  root: {
    "& label.Mui-focused": {
      color: "#e45826",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#e45826",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "2px solid #e45826",
        borderRadius: 60,
        height: "50px",
        fontSize: "1.3rem",
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,

        [theme.breakpoints.down("md")]: {
          height: "50px",
          fontSize: "1.2rem",
        },
        [theme.breakpoints.down("sm")]: {
          height: "50px",
          fontSize: "1.1rem",
        },
        [theme.breakpoints.down("xs")]: {
          height: "45px",
          fontSize: "1rem",
        },
      },
      "&:hover fieldset": {
        borderColor: "#e45826",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#e45826",
      },
    },
  },
}))(TextField);
