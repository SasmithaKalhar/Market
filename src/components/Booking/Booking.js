import React, { useState, Fragment, useEffect } from "react";
import { Paper, Typography, Button, Avatar } from "@material-ui/core";
import { useStyles, CssTextField } from "./classes";
import footerLogo from "../../assets/prediction2.jpg";
import BookingDisplay from "../BookingDisplay/BookingDisplay";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// validation
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";

//meka mulinma hadanna ogollai ekata adalawa
let initialValues = {
    location: "",
    // dateCheckin: "",
    // dateCheckout: "",
    rooms: "",
    price: "",
};

let bookingSchema = Yup.object().shape({
    location: Yup.string()
    .required("Your location is required!")
    .max(15, "Max length for the item name is 15."),
    // dateCheckin: Yup.date()
    // .required("Your dateCheckin is required!")
    // .max(15, "Max length for the item name is 15."),
    // dateCheckout: Yup.date()
    // .required("Your dateCheckout is required!")
    // .max(500, "Max length for the item name is 15."),
    rooms: Yup.number()
    .required("Your rooms is required!")
    .max(100000, "Max length for the item name is 15."),
    price: Yup.number()
    .required("Your price is required!")
    .max(100000, "Max length for the item name is 15."),
});



const Booking = () => {
  const classes = useStyles();

  const [isSuccess, setIsSuccess] = useState(false);
  const [isServerError, setIsServerError] = useState(false);

  const user = JSON.parse(localStorage.getItem("profile"));

  const submit1 = async (e) => {
    try {

        console.log("test submit", e.location)
      var current = new Date();

      await axios.post("/booking/addBooking", {
        userId: "6038b63c2394a8054055ef1b",
        location: e.location,
        dateCheckin: e.dateCheckin,
        dateCheckout: e.dateCheckout,
        rooms: e.rooms,
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
        <Typography className={classes.editInfo}>ADD ITEM</Typography>

        <Paper className={classes.account}>
          <Formik
            initialValues={initialValues}
            onSubmit={submit1}
            validationSchema={bookingSchema}
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
                      name="location"
                      placeholder=" add location here..."
                      component={CssTextField}
                      className={classes.field}
                      variant="outlined"
                      fullWidth
                    ></Field>

                    <Field
                      name="dateCheckin"
                      placeholder="  add dateCheckin here..."
                      component={CssTextField}
                      className={classes.field}
                      variant="outlined"
                      fullWidth
                    ></Field>

                    <Field
                      name="dateCheckout"
                      placeholder="  add dateCheckout here..."
                      component={CssTextField}
                      className={classes.field}
                      variant="outlined"
                      fullWidth
                    ></Field>

                    <Field
                      name="rooms"
                      placeholder="  add rooms here..."
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
                  item added successfully!
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

          <BookingDisplay />
        </Paper>
      </div>
    </>
  );
};

export default Booking;