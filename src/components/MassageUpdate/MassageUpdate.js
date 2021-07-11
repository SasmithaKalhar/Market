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
import MassageDisplay from "../MassageDisplay/MassageDisplay";
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

export default function MassageUpdate({update}) {

    let initialValues = {
        text: update.text,
    
    };
    
    let massageSchema = Yup.object().shape({
        text: Yup.string()
        .required("Your item is required!")
        .max(15, "Max length for the item name is 15."),
    });
    const classes = useStyles();

    const [isSuccess, setIsSuccess] = useState(false);
    const [isServerError, setIsServerError] = useState(false);
  
    const user = JSON.parse(localStorage.getItem("profile"));
  
    const submit1 = async (e) => {
      try {
  
        var current = new Date();
  
        await axios.put("/massege/itemUpdate", {
          _id:update._id,
          text: e.text,
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
    } 
    
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Update
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Update
        </DialogTitle>
        <DialogContent dividers>
        <div>
        <Typography className={classes.editInfo}>ADD MASSAGE</Typography>

        <Paper className={classes.account}>
          <Formik
            initialValues={initialValues}
            onSubmit={submit1}
            validationSchema={massageSchema}
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
                      name="text"
                      placeholder="  text "
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
                  item massage successfully!
                </Alert>
              </>
            )}
            {isServerError && (
              <>
                <Alert icon={false} severity="error">
                  website is currently busy Preparing your massage..!
                </Alert>
              </>
            )}
          </div>
        </Paper>

        <Paper className={classes.change}>
        </Paper>
      </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}