import React, { useState, Fragment, useEffect } from "react";
import { Paper, Typography, Button, Avatar } from "@material-ui/core";
import { useStyles, CssTextField } from "./classes";
import footerLogo from "../../assets/prediction.PNG";
import ViewHistory from "../ViewHistory/ViewHistory";
// validation
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { storage } from "../../firebase/firebase";
import { useHistory } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import * as api from "../../api/index.js";

let initialValues = {
  current: "",
  new: "",
  confirm: "",
};

let changeSchema = Yup.object().shape({
  current: Yup.string()
    .required("Password is required!")
    .min(6, "Min length for the password is 6.")
    .max(15, "Max length for the password is 15."),
  new: Yup.string()
    .required("Password is required!")
    .min(6, "Min length for the password is 6.")
    .max(15, "Max length for the password is 15."),
  confirm: Yup.string()
    .required("Password is required!")
    .min(6, "Min length for the password is 6.")
    .max(15, "Max length for the password is 15."),
});

let passSchema = Yup.object().shape({
  new: Yup.string()
    .required("Password is required!")
    .min(6, "Min length for the password is 6.")
    .max(15, "Max length for the password is 15."),
  confirm: Yup.string()
    .required("Password is required!")
    .min(6, "Min length for the password is 6.")
    .max(15, "Max length for the password is 15."),
});

let infoSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First Name is required!")
    .max(15, "Max length for the password is 15."),
  lastName: Yup.string()
    .required("Last Name is required!")
    .max(15, "Max length for the password is 15."),
});

const ShortDrinks = () => {
  const classes = useStyles();
  const history = useHistory();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPass, setIsPass] = useState(false);
  const [isFalse, setIsFalse] = useState(false);
  const [isSuccessPass, setIsSuccessPass] = useState(false);
  const [isFalsePass, setIsFalsePass] = useState(false);
  const [isErrorPass, setIsErrorPass] = useState(false);
  const [defaultImageUpload, setDefaultImageUpload] = useState(false);
  const checkUpdates = JSON.parse(localStorage.getItem("userUpdate"));
  const nuser = JSON.parse(sessionStorage.getItem("profile"));

  useEffect(() => {
    fetchResults();
    if (checkUpdates) {
      localStorage.removeItem("userUpdate");
    }
    // eslint-disable-next-line
  }, [checkUpdates, nuser]);

  const [initialValues2, setInitialValues2] = useState({
    firstName: "",
    lastName: "",
    image: "",
  });

  const fetchResults = async () => {
    try {
      const { data } = await api.getDetails();

      if (data.local.password) {
        setIsPass(true);
      }
      setInitialValues2({
        ...initialValues2,
        firstName: data.local.firstName,
        lastName: data.local.lastName,
        image: data.displayPicture,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const submit = async (e, { resetForm }) => {
    try {
      if (e.new === e.confirm) {
        const formData = { oldPassword: e.current, password: e.confirm };

        const { data } = await api.changePassword(formData);
        if (data) {
          setIsSuccessPass(true);
          setTimeout(() => {
            setIsSuccessPass(false);
          }, 3000);
        }

        resetForm();
      } else {
        setIsFalsePass(true);
        setTimeout(() => {
          setIsFalsePass(false);
        }, 3000);
      }
    } catch (error) {
      if (error.response.status === 401) {
        setIsErrorPass(true);
        setTimeout(() => {
          setIsErrorPass(false);
        }, 3000);
      }
    }
  };

  const changeNames = async (e) => {
    try {
      if (e.image) {
        const formData = {
          displayPicture: e.image,
          firstName: e.firstName,
          lastName: e.lastName,
        };
        const { data } = await api.updateUser(formData);

        if (data) {
          setIsSuccess(true);
          setTimeout(() => {
            setIsSuccess(false);
          }, 3000);
          localStorage.setItem("userUpdate", JSON.stringify({ formData }));
          history.push("/dashboard");
        } else {
          setIsFalse(true);
          setTimeout(() => {
            setIsFalse(false);
          }, 3000);
        }
      } else {
        const formData1 = {
          displayPicture: " ",
          firstName: e.firstName,
          lastName: e.lastName,
        };
        const { data } = await api.updateUser(formData1);

        if (data) {
          setIsSuccess(true);
          setTimeout(() => {
            setIsSuccess(false);
          }, 3000);
          localStorage.setItem("userUpdate", JSON.stringify({ formData1 }));
          history.push("/dashboard");
        } else {
          setIsFalse(true);
          setTimeout(() => {
            setIsFalse(false);
          }, 3000);
        }
      }
    } catch (error) {
      setIsFalse(true);
      setTimeout(() => {
        setIsFalse(false);
      }, 3000);
    }
  };

  const handleImageAsFile = async (e, setFieldValue, type, values) => {
    try {
      setDefaultImageUpload(true);
      const image = e.target.files[0];
      const storageRef = storage.ref();
      const fileRef = storageRef.child(`dish/${image.name}`);
      const uploadTaskSnapshot = await fileRef.put(image);
      const imageUrl = await uploadTaskSnapshot.ref.getDownloadURL();

      // if (type === "logo") {
      //   setFieldValue("logo", imageUrl);
      // } else {
      //   setFieldValue(`images[${values.images.length}]`,imageUrl)
      // }

      setFieldValue("image", imageUrl);

      // setArtWorkUpload(imageUrl);
    } catch (error) {
      console.error(error);
    } finally {
      setDefaultImageUpload(false);
    }
    // setImageAsFile(imageFile => (image))
  };

  return (
    <>
      <div>
        <Typography className={classes.editInfo}>
          Short Drinks Forcast
        </Typography>

        <Paper className={classes.account}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <img
              className={classes.logo2}
              src={footerLogo}
              alt="logo"
              width="600px"
            />
          </div>
        </Paper>

        <Paper className={classes.change}>
          <Typography className={classes.changePas}>
            Monthly Prediction
          </Typography>

          <ViewHistory />
        </Paper>
      </div>
    </>
  );
};

export default ShortDrinks;
