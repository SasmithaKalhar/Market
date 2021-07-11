import React, { useState, Fragment, useEffect } from "react";
import { Paper, Typography, Button, Avatar } from "@material-ui/core";
import { useStyles, CssTextField } from "./classes";
import CreditCarddisplay from "../CreditcardDispaly/CreditCarddisplay";
// validation
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";

//meka mulinma hadanna ogollai ekata adalawa


const CreditCard = () => {

  let initialValues = {
    card: "",
    name: "",
    cvv: "",
};

let CreditCardSchema = Yup.object().shape({
    card: Yup.string()
    .required("Your card is required!")
    .max(500, "Max length for the item name is 15."),
    name: Yup.string()
    .required("Your name is required!")
    .max(500, "Max length for the item name is 15."),
    cvv: Yup.string()
    .required("Your cvv is required!")
    .max(500, "Max length for the item name is 15."),
});

  const classes = useStyles();

  const [isSuccess, setIsSuccess] = useState(false);
  const [isServerError, setIsServerError] = useState(false);

  const user = JSON.parse(localStorage.getItem("profile"));

  const submit1 = async (e) => {
    try {
        console.log("test",e)
      var current = new Date();

      await axios.post("/creditCard/addCreditCard", {
        userId: "6038b63c2394a8054055ef16",
        card: e.card,
        name: e.name,
        cvv: e.cvv,
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
    <>
      <div>
        <Typography className={classes.editInfo}>CREDIT CARD</Typography>

        <Paper className={classes.account}>
          <Formik
            initialValues={initialValues}
            onSubmit={submit1}
            validationSchema={CreditCardSchema}
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
                      name="card"
                      placeholder="  card"
                      component={CssTextField}
                      className={classes.field}
                      variant="outlined"
                      fullWidth
                    ></Field>

                    <Field
                      name="name"
                      placeholder="  Name"
                      component={CssTextField}
                      className={classes.field}
                      variant="outlined"
                      fullWidth
                    ></Field>

                    <Field
                      name="cvv"
                      placeholder="  cvv"
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
                  credit card added successfully!
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

        <Paper className={classes.change}>
          <Typography className={classes.changePas}>
            Item List
          </Typography>

          <CreditCarddisplay />
        </Paper>
      </div>
    </>
  );
};

export default CreditCard;
