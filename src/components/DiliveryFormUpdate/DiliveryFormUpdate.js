import React, { useState, Fragment, useEffect } from "react";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';


import { Paper, Avatar } from "@material-ui/core";
import { useStyles, CssTextField } from "./classes";
import Deliveryformdisplay from "../DeliveryFormDisplay/DeliveryFormdisplay";
// validation
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";

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
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function DiliveryFormUpdate({update}) {
    console.log("console" ,update)
    let initialValues = {
        fullName: update.FullName,
        phoneNumber: update.phoneNumber,
        emailAddres: update.emailAddres,
        province: update.province,
        district: update.district,
        cty: update.cty,
        addres: update.address,
        lable: update.label,
      };
      
      let DeliveryFormSchema = Yup.object().shape({
        fullName: Yup.string()
          .required("Your fullName is required!")
          .max(500, "Max length for the password is 15."),
       phoneNumber: Yup.string()
          .required("Your phoneNumber is required!")
          .max(500, "Max length for the password is 15."),
       emailAddres: Yup.string()
          .required("Your emailAddres is required!")
          .max(500, "Max length for the password is 15."),
       province: Yup.string()
          .required("Your province is required!")
          .max(500, "Max length for the password is 15."),
       district: Yup.string()
          .required("Your district is required!")
          .max(500, "Max length for the password is 15."),
       cty: Yup.string()
          .required("Your cty is required!")
          .max(500, "Max length for the password is 15."),
       addres: Yup.string()
          .required("Your addres is required!")
          .max(500, "Max length for the password is 15."),
       lable: Yup.string()
          .required("Your lable is required!")
          .max(500, "Max length for the password is 15."),
      });
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  const [isSuccess, setIsSuccess] = useState(false);
  const [isServerError, setIsServerError] = useState(false);

  const user = JSON.parse(localStorage.getItem("profile"));

  const submit = async (e) => {
    try {
      console.log("test 123",e)
      var current = new Date();

      const place = await axios.put("/deliveryForm/update", {
        _id: update._id,
        FullName: e.fullName,
        phoneNumber: e.phoneNumber,
        emailAddres: e.emailAddres,
        province: e.province,
        district: e.district,
        cty: e.cty,
        address: e.addres,
        label: e.lable,

      });
      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      setIsServerError(true);
      setTimeout(() => {
        setIsServerError(false);
      }, 3000);
    }
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      UPDATE
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        DELEVERY FORM UPDATE
        </DialogTitle>
        <div>
        <Typography className={classes.editInfo}>DELEVERY FORM</Typography>

        <Paper className={classes.account}>
          <Formik
            initialValues={initialValues}
            onSubmit={submit}
            validationSchema={DeliveryFormSchema}
          >
            {({ dirty, isValid, resetForm }) => {
              return (
                <Form>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alginItem: "center",
                      alginSelf: "center",
                      marginTop: 10,
                      marginBottom: 20,
                    }}
                  >
                    <Field
                      name="fullName"
                      placeholder="  Add Full Name here.."
                      component={CssTextField}
                      className={classes.field}
                      variant="outlined"
                      fullWidth>
                      </Field>
                      <Field
                      name="phoneNumber"
                      placeholder="  Add phone number here.."
                      component={CssTextField}
                      className={classes.field}
                      variant="outlined"
                      fullWidth
                      ></Field>

                      <Field
                      name="emailAddres"
                      placeholder="  Add email addres here.."
                      component={CssTextField}
                      className={classes.field}
                      variant="outlined"
                      fullWidth
                      ></Field>

                     <Field
                      name="province"
                      placeholder="  Add province here.."
                      component={CssTextField}
                      className={classes.field}
                      variant="outlined"
                      fullWidth
                      ></Field>

                      <Field
                      name="district"
                      placeholder="  Add district here.."
                      component={CssTextField}
                      className={classes.field}
                      variant="outlined"
                      fullWidth
                      ></Field>
                      
                      <Field
                      name="cty"
                      placeholder="  Add cty here.."
                      component={CssTextField}
                      className={classes.field}
                      variant="outlined"
                      fullWidth
                      ></Field>

                    <Field
                      name="addres"
                      placeholder="  Add addres here.."
                      component={CssTextField}
                      className={classes.field}
                      variant="outlined"
                      fullWidth
                      ></Field>

                      <Field
                      name="lable"
                      placeholder="  Add lable here.."
                      component={CssTextField}
                      className={classes.field}
                      variant="outlined"
                      fullWidth
                    ></Field>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "space-between",
                      alignItems: "space-between",
                      marginBottom: 40,
                    }}
                  >
                    <Button
                      variant="contained"
                      className={classes.button}
                      disabled={!dirty || !isValid}
                      type="submit"
                    >
                     UPDATE
                    </Button>
                    <Button
                      variant="contained"
                      className={classes.cancel}
                      onClick={resetForm}
                    >
                      Cancel
                    </Button>
                  </div>
                </Form>
              );
            }}
          </Formik>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alginItem: "center",
              alginSelf: "center",
            }}
          >
            {isSuccess && (
              <>
                <Alert icon={false} severity="success">
                  Feedback added successfully!
                </Alert>
              </>
            )}
            {isServerError && (
              <>
                <Alert icon={false} severity="error">
                website is currently busy Preparing your menus..!
                </Alert>
              </>
            )}
          </div>
        </Paper>
      </div>
      </Dialog>
    </div>
  );
}