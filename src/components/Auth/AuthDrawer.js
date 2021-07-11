import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// dialog
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';


import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
// import AppleLogin from 'react-apple-login'
import { signin, signup } from "../../redux/actions/auth";
import { AUTH } from "../../redux/constants/actionTypes";
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Alert from '@material-ui/lab/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle} from '@fortawesome/free-brands-svg-icons' 
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { useStyles, CssTextField } from './classes'
// import * as api from '../../api/index.js';


// validation
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// import { Box } from '@material-ui/core';



//dialog close styles
const styles = (theme) => ({

  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});


let initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  role: "user",
};

let SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required!")
               .max(15, "Max length for the password is 15."),
  lastName: Yup.string().required("Last Name is required!")
               .max(15, "Max length for the password is 15."),
    email: Yup.string().email().required("Email is required!"),
    password: Yup.string()
        .required("Password is required!")
        .min(6, "Min length for the password is 6.")
        .max(15, "Max length for the password is 15."), 
});

let SignInSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required!"),
    password: Yup.string()
        .required("Password is required!")
        .min(6, "Min length for the password is 6.")
        .max(15, "Max length for the password is 15."), 
});

const Auth1 = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch();
  const history = useHistory();
    
  const [isSignup, setIsSignup] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isUnauthorized, setIsUnauthorized] = useState(false);
  const [isServerError, setIsServerError] = useState(false);
  
    
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    };
    
  const forgetPassword = () => {
    setOpen(false); 
    history.push('/forget-password');
   }

  
    const submit = async (e) => {
        // e.preventDefault();
        const data = {local: e}
        try {
          if (isSignup) {
            try {
                await dispatch(signup(data, history));
                setIsSuccess(true)
                setTimeout(() => {
                  setIsSuccess(false) 
                    }, 3000);   
                  setTimeout(() => {
                  setIsSignup(false)
                    }, 3500); 
              
                const ServerError = JSON.parse(localStorage.getItem('server'))
                  if (ServerError) {
                    setIsServerError(true)
                    setTimeout(() => {
                      setIsServerError(false)
                      localStorage.clear();
                    }, 3000); 
                 }
            } catch (error) {
              console.log(error)
              
              }

          } else {
            try {
                await dispatch(signin(e, history));
                  const user = JSON.parse(localStorage.getItem('signIn'))
                  if (user) {
                      setOpen(false);
                      history.push('/dashboard');
                    
                  }
                  
                  const Unauthorized = JSON.parse(localStorage.getItem('Unauthorized'))
                  if (Unauthorized) {
                    setIsUnauthorized(true)
                    setTimeout(() => {
                      setIsUnauthorized(false)
                      localStorage.clear();
                    }, 3000); 
                 }
                  const ServerError = JSON.parse(localStorage.getItem('server'))
                  if (ServerError) {
                    setIsServerError(true)
                    setTimeout(() => {
                      setIsServerError(false)
                      localStorage.clear();
                    }, 3000); 
                 }
              
            } catch (error) {
              console.log(error)
              
            }

                
        }
        
    } catch (error) {
      console.log(error)
    }
  };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
        
        setOpen(false);
      };


      const googleSuccess = async (res) => {
            const result = res?.profileObj;
            const token = res?.tokenId;

            try {
            dispatch({ type: AUTH, data: { result, token } });
            history.push('/dashboard');
            } catch (error) {
            console.log(error);
            }
        };

        const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

        const responseFacebook = (response) => {
        }
        
      const [checked, setChecked] = React.useState(true);

      const handleChange = (event) => {
        setChecked(event.target.checked);
       };
  

    return (
    <>  
            <div>
            {/* <Box display="flex" flexDirection="row-reverse"> */}
            <h3 onClick={handleClickOpen} className={classes.linkButtonDrawer}>Sign In</h3>
            {/* </Box> */}
          <Dialog fullWidth={true} maxWidth="md"  PaperProps={{
                            style: { borderRadius: 50, padding: 0, margin: 0, }
                        }} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>

                    <DialogContent style={{ padding: 0, margin: 0,}}>
                    <Grid container spacing={0}>
                            <Grid item xs={12} sm={6} md={6}>
                            <Paper className={classes.paper}>
                                <ButtonGroup
                                    orientation="vertical"
                                    className={classes.test}
                                >

                                    <FacebookLogin
                                        appId="259283389118967"
                                        autoLoad={false}
                                        fields="name,email,picture"
                                        textButton="Continue With Facebook"
                                        callback={responseFacebook}
                                        cssClass={classes.facebook}
                                        icon={
                                              <FontAwesomeIcon icon={faFacebook } style={{width:45, height:45 , marginRight: 30, marginLeft: 15, }}/>
                                            }
                                    />
                                    
                                    <GoogleLogin
                                        clientId="736529255244-p4e16scvogcjcih794ur7bmqmb1nl58n.apps.googleusercontent.com"
                                        render={renderProps => (
                                        <Button startIcon={
                                              <FontAwesomeIcon icon={faGoogle } style={{width:42, height:42 , marginRight: 20, marginLeft: 5, }}/>
                                            } variant='contained'  className={classes.google} onClick={renderProps.onClick} disabled={renderProps.disabled} > Continue With Google </Button>
                                        )}
                                        buttonText="Continue With Google"
                                        onSuccess={googleSuccess}
                                        onFailure={googleError}
                                        cookiePolicy={'single_host_origin'}
                                    /> 
            
                                        
                                    {/* <AppleLogin  clientId="com.react.apple.login" className={classes.apple} redirectURI="https://redirectUrl.com" disabled
                                        
                                    /> */}

                                </ButtonGroup>

                            </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6}>

                            <div>
                              <DialogTitle id="customized-dialog-title" onClose={handleClose}></DialogTitle>
                                        <Formik
                                            initialValues={initialValues}
                                            onSubmit={submit}
                                            validationSchema={isSignup ? SignUpSchema : SignInSchema }
                                        >
                                            {({ dirty, isValid }) => {
                                            return (
                                                <Form>
                                                  <div style={{ display: "flex", justifyContent: "center", alginItem: "center", alginSelf: "center", marginTop: 10, marginBottom: 20 }}>
                                                    { isSignup ?  <Typography className={classes.subtitle}>Create your <span className={classes.spanText}>GottaMenu</span> Account</Typography> :  <Typography className={classes.subtitle}>Sign in with Your <span className={classes.spanText}>GottaMenu</span> Account</Typography> }
                                                  </div>
                                                      
                                                  <div className={classes.res}>
                                                  
                                                    { isSignup && (
                                                      <>
                                                          <Field
                                                              name="firstName"
                                                              placeholder="  First Name"
                                                              component={CssTextField}
                                                              className={classes.field}
                                                              variant="outlined"
                                                              
                                                          ></Field>
                                                          <Field
                                                              name="lastName"
                                                              placeholder="  Last Name"
                                                              component={CssTextField}
                                                              className={classes.field}
                                                              variant="outlined"
                                                              fullWidth                                                     
                                                          ></Field>
                                                      </>
                                                  )}
                                                      <Field
                                                      name="email"
                                                      placeholder="  Email"
                                                      component={CssTextField}
                                                      className={classes.field}
                                                      variant="outlined"
                                                      fullWidth
                                                      ></Field>
                                                  
                                                      <Field
                                                      name="password"
                                                      placeholder="  Password"
                                                      component={CssTextField}
                                                      className={classes.field}
                                                      type="password"
                                                      variant="outlined"
                                                      fullWidth
                                                      
                                                      />
                                                  </div>
                                                  <div  >
                                                    <Typography className={classes.textCheckbox}>
                                                      <Checkbox
                                                        checked={checked}
                                                        onChange={handleChange}
                                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                                        style ={{
                                                            color: "#e45826",
                                                          }}
                                                      /> keep me signed in
                                                    </Typography>
                                                    <div style={{ display: "flex", justifyContent: "center", alginItem: "center", alginSelf: "center", marginTop: 10,  }}>
                                                        <Button
                                                        variant="contained"
                                                        className={classes.button}
                                                        disabled={!dirty || !isValid || !checked}
                                                        type="submit"
                                                        >
                                                         { isSignup ? 'SIGN UP' : 'SIGN IN' }
                                                    </Button>
                                                    
                                                    </div>
                                                   <div style={{ display: "flex", justifyContent: "center", alginItem: "center", alginSelf: "center", marginTop: 10,  }}>
                                                      { isSuccess && (
                                                        <>
                                                            <Alert icon={false} severity="success">
                                                              User created successfully!
                                                            </Alert>
                                                        </>
                                                       )}
                                                      { isUnauthorized && (
                                                        <>
                                                            <Alert icon={false} severity="error">
                                                              Incorrect email or password!
                                                            </Alert>
                                                        </>
                                                      )}
                                                      
                                                      {isServerError && (
                                                        <>
                                                            <Alert icon={false} severity="error">
                                                              GottaMenu is currently busy Preparing your menus..!
                                                            </Alert>
                                                        </>
                                                       )}
                                                      
                                                   </div>
                                                  <div style={{ display: "flex", justifyContent: "center", alginItem: "center", alginSelf: "center", }}>
                                                      { !isSignup && (
                                                      <>
                                                            <Button className={classes.forget} onClick={forgetPassword} ><Typography >Forget Password? </Typography></Button>
                                                      </>
                                                  )}
                                                  </div>
                                                  <div style={{ display: "flex", justifyContent: "center", alginItem: "center", alginSelf: "center", }}>
                                                    <Button className={classes.bottom} onClick={switchMode}>
                                                      { isSignup ? <Typography ><FontAwesomeIcon icon={['fas', 'code']} />Have an Account? <span className={classes.spanText}>Sign In</span></Typography> :  <Typography >Need an Account? <span className={classes.spanText}>Sign Up</span></Typography> }
                                                    </Button>
                                                   
                                                  </div>
                                                    
                                                  </div>

                                                </Form>
                                            );
                                            }}
                                        </Formik>
                                     </div>
                                              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alginItem: "center", alginSelf: "center", }}>
                                                  { isSignup && (
                                                    <>
                                                      <Typography className={classes.privacy1}>By Creating your GottaMenu Account, You agree to the</Typography>
                                                      <Typography className={classes.privacy2}> <span className={classes.spanText}> Terms of use </span>&nbsp;and&nbsp;<span className={classes.spanText}> Privacy Policy</span> </Typography>
                                                    </>
                                                  )}
                                                </div>
                                              
                            </Grid>
                        </Grid>
     
                    </DialogContent>
              </Dialog>
            </div>
            
            
           
    </>
  );
};

export default Auth1;