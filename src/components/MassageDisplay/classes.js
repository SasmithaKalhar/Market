import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField } from "formik-material-ui";

export const useStyles = makeStyles((theme) => ({
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
  forms: {
    fontFamily: "Gilroy-ExtraBold, serif",
    color: "#000",
    fontSize: "1.2rem",
    marginTop: 20,
    marginLeft: 25,
    marginBottom: 40,
  },
  changePas: {
    fontFamily: "Gilroy-ExtraBold, serif",
    color: "#000",
    fontSize: "1.2rem",
    marginTop: 20,
    marginLeft: 25,
    paddingTop: 20,
    marginBottom: 40,
  },
  fieldText1: {
    fontFamily: "Gilroy-Light, serif",
    textTransform: "capitalize",
    fontSize: "0.9rem",
    marginLeft: 30,
    marginBottom: 10,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  fieldText2: {
    fontFamily: "Gilroy-Light, serif",
    textTransform: "capitalize",
    fontSize: "0.9rem",
    marginLeft: 30,
    [theme.breakpoints.down("sm")]: {
      marginTop: -10,
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  account: {
    width: "90%",
    marginTop: 20,
    marginLeft: 30,
    backgroundColor: "#FFFAF7",
    [theme.breakpoints.down("sm")]: {
      width: "737px",
      marginTop: 0,
      marginLeft: 0,
      marginBottom: 30,
    },
    [theme.breakpoints.down("xs")]: {
      width: 345,
      marginTop: 10,
      marginLeft: 0,
    },
  },
  divide: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  displayRow: {
    display: "flex",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  displayFlex: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  imageDirection: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 100,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 30,
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  change: {
    width: "90%",
    marginTop: 15,
    marginBottom: 80,
    marginLeft: 30,
    backgroundColor: "#FFFAF7",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: 0,
      marginLeft: 0,
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginTop: 0,
      marginLeft: 0,
    },
  },
  field: {
    width: "70%",
    marginBottom: 10,
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "96%",
      marginLeft: "2%",
      marginRight: "2%",
    },
  },
  image: {
    width: 200,
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: 150,
      height: 150,
      marginLeft: 15,
    },
  },

  button: {
    borderRadius: "20px",
    fontFamily: "Gilroy-Light, serif",
    textTransform: "capitalize",
    fontSize: "1rem",
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
  cancel: {
    borderRadius: "20px",
    fontFamily: "Gilroy-Light, serif",
    textTransform: "capitalize",
    marginLeft: 20,
    fontSize: "1rem",
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
  upload: {
    borderRadius: "20px",
    fontFamily: "Gilroy-Light, serif",
    textTransform: "capitalize",
    fontSize: "1rem",
    border: "2px solid #e45826",
    backgroundColor: "#fff",
    color: "#e45826",
    width: "160px",
    fontWeight: 400,
    height: 40,
    marginTop: 80,
    marginLeft: 10,
    "&:hover": {
      backgroundColor: "#fff",
      boxShadow: "none",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 50,
    },
  },
  alert: {
    marginTop: 5,
    marginBottom: 10,
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
