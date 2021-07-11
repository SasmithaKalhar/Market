import React, { useState, Fragment, useEffect } from "react";
import { Paper, Typography, Button, Avatar } from "@material-ui/core";
import { useStyles, CssTextField } from "./classes";
import footerLogo from "../../assets/prediction2.jpg";
import DishHistory from "../ViewHistory/DishHistory";
// validation
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { storage } from "../../firebase/firebase";
import { useHistory } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";

let initialValues = {
  feed: "",
};

let feedSchema = Yup.object().shape({
  feed: Yup.string()
    .required("Your feedback is required!")
    .max(500, "Max length for the password is 15."),
});

const Medical = () => {
  const classes = useStyles();

  const [isSuccess, setIsSuccess] = useState(false);
  const [isServerError, setIsServerError] = useState(false);

  const user = JSON.parse(localStorage.getItem("profile"));

  const submit = async (e) => {
    try {
      var current = new Date();

      const place = await axios.post("/feedback/addFeed", {
        feed: e.feed,
        userId: "6038b63c2394a8054055ef1b",
        view: current.toLocaleDateString(),
        resName: "WebVisit",
        restaurantId: "6056c93afe24d1fcd469595c",
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
        <Typography className={classes.editInfo}>ADD FEEDBACK</Typography>

        <Paper className={classes.account}>
          <Formik
            initialValues={initialValues}
            onSubmit={submit}
            validationSchema={feedSchema}
          >
            {({ dirty, isValid, resetForm }) => {
              return (
                <Form>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alginItem: "center",
                      alginSelf: "center",
                      marginTop: 10,
                      marginBottom: 20,
                    }}
                  >
                    <Field
                      name="feed"
                      placeholder="  Add Feedback here.."
                      multiline
                      rows={3}
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
                  Feedback added successfully!
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
        </Paper>

        <Paper className={classes.change}>
          <Typography className={classes.changePas}>
            Monthly Prediction
          </Typography>

          <DishHistory />
        </Paper>
      </div>
    </>
  );
};

export default Medical;
