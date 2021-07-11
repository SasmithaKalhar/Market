import React, { useState, Fragment, useEffect } from "react";
import { Paper, Typography, Button, Avatar } from "@material-ui/core";
import { useStyles, CssTextField } from "./classes";
import Deliveryformdisplay from "../DeliveryFormDisplay/DeliveryFormdisplay";
// validation
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";

let initialValues = {
  fullName: "",
  phoneNumber:"",
  emailAddres:"",
  province:"",
  district:"",
  cty:"",
  addres:"",
  lable:"",
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

const DeliveryForm = () => {
  const classes = useStyles();

  const [isSuccess, setIsSuccess] = useState(false);
  const [isServerError, setIsServerError] = useState(false);

  const user = JSON.parse(localStorage.getItem("profile"));

  const submit = async (e) => {
    try {
      console.log("test 123",e)
      var current = new Date();

      const place = await axios.post("/deliveryForm/addDelivery", {
        userId: "6038b63c2394a8054055ef27",
        fullName: e.fullName,
        phoneNumber: e.phoneNumber,
        emailAddres: e.emailAddres,
        province: e.province,
        district: e.district,
        cty: e.cty,
        addres: e.addres,
        lable: e.lable,

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
        <Typography className={classes.editInfo}>ADD DELEVERY FORM</Typography>

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
                      marginLeft: 150,
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

          <Deliveryformdisplay />
        </Paper>
      </div>
    </>
  );
};

export default DeliveryForm;