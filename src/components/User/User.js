import React, { useState, Fragment, useEffect } from "react";
import { Paper, Typography, Button, Avatar } from "@material-ui/core";
import { useStyles, CssTextField } from "./classes";
import UserDisplay from "../UserDisplay/UserDisplay";

// validation
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";

//meka mulinma hadanna ogollai ekata adalawa


const User = () => {

  let initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    number: "",
    gender: "",
    birthday: "",
    
};

let UserSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Your item first name is required!")
    .max(500, "Max length for the item name is 15."),
    lastName: Yup.string()
    .required("Your last name is required!")
    .max(500, "Max length for the item name is 15."),
    email: Yup.string()
    .required("Your email is required!")
    .max(500, "Max length for the item name is 15."),
    password: Yup.string()
    .required("Your password is required!")
    .max(500, "Max length for the item name is 15."),
    number: Yup.string()
    .required("Your number is required!")
    .max(500, "Max length for the item name is 15."),
    gender: Yup.string()
    .required("Your gender is required!")
    .max(500, "Max length for the item name is 15."),
    birthday: Yup.string()
    .required("Your birthday is required!")
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

      await axios.post("/user/addUser", {
        userId: "6038b63c2394a8054055ef16",
        firstName: e.firstName,
        lastName: e.lastName,
        email: e.email,
        password: e.password,
        number: e.number,
        gender: e.gender,
        birthday: e.birthday,
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
        <Typography className={classes.editInfo}>USER</Typography>

        <Paper className={classes.account}>
          <Formik
            initialValues={initialValues}
            onSubmit={submit1}
            validationSchema={UserSchema}
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
                      name="firstName"
                      placeholder="  firstName"
                      component={CssTextField}
                      className={classes.field}
                      variant="outlined"
                      fullWidth
                    ></Field>

                    <Field
                      name="lastName"
                      placeholder="  lastName"
                      component={CssTextField}
                      className={classes.field}
                      variant="outlined"
                      fullWidth
                    ></Field>

                    <Field
                      name="email"
                      placeholder="  email"
                      component={CssTextField}
                      className={classes.field}
                      variant="outlined"
                      fullWidth
                    ></Field>

                    <Field
                      name="password"
                      placeholder="  password"
                      component={CssTextField}
                      className={classes.field}
                      variant="outlined"
                      fullWidth
                    ></Field>

                    <Field
                      name="number"
                      placeholder="  number"
                      component={CssTextField}
                      className={classes.field}
                      variant="outlined"
                      fullWidth
                    ></Field>
                    
                    <Field
                      name="gender"
                      placeholder="  gender"
                      component={CssTextField}
                      className={classes.field}
                      variant="outlined"
                      fullWidth
                    ></Field>
                    
                    <Field
                      name="birthday"
                      placeholder="  birthday"
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

          <UserDisplay />
        </Paper>
      </div>
    </>
  );
};

export default User;