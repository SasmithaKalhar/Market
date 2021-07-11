import React, { useState, Fragment, useEffect } from "react";
import { Paper, Typography, Button, Avatar } from "@material-ui/core";
import { useStyles, CssTextField } from "./classes";
import BidDisplay from "../BidDisplay/BidDisplay"
// validation
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";

//meka mulinma hadanna ogollai ekata adalawa
//test comment

const Bid = () => {

  let initialValues = {
    itemname: "",
    hours: "",
    price: "",
};

let BidSchema = Yup.object().shape({
    itemname: Yup.string()
    .required("Your item name is required!")
    .max(500, "Max length for the item name is 15."),
    hours: Yup.number()
    .required("Your hours are required!")
    .max(1000000, "Max length for the hours is 1000000."),
    price: Yup.number()
    .required("Your price is required!")
    .max(1000000, "Max length for the price is 1000000."),
});

  const classes = useStyles();

  const [isSuccess, setIsSuccess] = useState(false);
  const [isServerError, setIsServerError] = useState(false);

  const user = JSON.parse(localStorage.getItem("profile"));

  const submit1 = async (e) => {
    try {
        console.log("test",e)
      var current = new Date();

      await axios.post("/bid/addBid", {
        userId: "6038b63c2394a8054055ef16",
        itemname: e.itemname,
        hours: e.hours,
        price: e.price,
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
        <Typography className={classes.editInfo}>BID</Typography>

        <Paper className={classes.account}>
          <Formik
            initialValues={initialValues}
            onSubmit={submit1}
            validationSchema={BidSchema}
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
                      name="itemname"
                      placeholder=" add item name here..."
                      component={CssTextField}
                      className={classes.field}
                      variant="outlined"
                      fullWidth
                    ></Field>

                    <Field
                      name="hours"
                      placeholder=" add hours here..."
                      component={CssTextField}
                      className={classes.field}
                      variant="outlined"
                      fullWidth
                    ></Field>

                    <Field
                      name="price"
                      placeholder="  add price here..."
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
                  Your bid is successfully!
                </Alert>
              </>
            )}
            {isServerError && (
              <>
                <Alert icon={false} severity="error">
                  website is currently busy Preparing your bids..!
                </Alert>
              </>
            )}
          </div>
        </Paper>

        <Paper className={classes.change}>
          <Typography className={classes.changePas}>
            Bid List
          </Typography>

          <BidDisplay />
        </Paper>
      </div>
    </>
  );
};

export default Bid;
