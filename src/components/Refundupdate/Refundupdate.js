import React, { useState, Fragment, useEffect } from "react";
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Paper, Typography, Button, Avatar } from "@material-ui/core";
import { useStyles, CssTextField } from "./classes";
import footerLogo from "../../assets/prediction2.jpg";
import RefundDisplay from "../RefundDisplay/RefundDisplay";
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

export default function Refundupdate(update) {


  let initialValues = {
    reason: update.reason,
    price: update.price,
    discription: update.discription,
};

let refundSchema = Yup.object().shape({
    reason: Yup.string()
    .required("Your reason is required!")
    .max(15, "Max length for the item name is 15."),
    price: Yup.string()
    .required("Your price is required!")
    .max(15, "Max length for the item name is 15."),
    discription: Yup.string()
    .required("Your discription is required!")
    .max(500, "Max length for the item name is 15."),
});


  const classes = useStyles();
const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};

  const [isSuccess, setIsSuccess] = useState(false);
  const [isServerError, setIsServerError] = useState(false);

  const user = JSON.parse(localStorage.getItem("profile"));

  const submit1 = async (e) => {
    try {

        console.log("test submit", e.item)
      var current = new Date();

      await axios.put("/refund/refundUpdate", {
        _id:  update._id, 
        userId: "6038b63c2394a8054055ef1b",
        reason: e.reason,
        price: e.price,
        discription: e.discription,
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
        Update
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </DialogTitle>
        <DialogContent dividers>
        <div>
        <Typography className={classes.editInfo}>ADD REFUND</Typography>

        <Paper className={classes.account}>
          <Formik
            initialValues={initialValues}
            onSubmit={submit1}
            validationSchema={refundSchema}
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
                      marginLeft: 150,
                    }}
                  >
                    <Field
                      name="reason"
                      placeholder=" Type your reason here..."
                      component={CssTextField}
                      className={classes.field}
                      variant="outlined"
                      fullWidth
                    ></Field>

                    <Field
                      name="price"
                      placeholder=" Type your reason here..."
                      component={CssTextField}
                      className={classes.field}
                      variant="outlined"
                      fullWidth
                    ></Field>

                    <Field
                      name="discription"
                      placeholder="   Type your reason here..."
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
                      submit
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
                Refund added successfully!
                </Alert>
              </>
            )}
            {isServerError && (
              <>
                <Alert icon={false} severity="error">
                  website is currently busy Preparing your Refund..!
                </Alert>
              </>
            )}
          </div>
        </Paper>

        <Paper className={classes.change}>
          <Typography className={classes.changePas}>
            Add Refund
          </Typography>
        </Paper>
      </div>
        </DialogContent>
      </Dialog>
    </div>
  );
 
}