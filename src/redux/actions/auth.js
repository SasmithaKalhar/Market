import { AUTH, AUTH_KEEP } from "../constants/actionTypes";
import * as api from "../../api/index";

export const signin = (formData, checked) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    localStorage.setItem("signIn", JSON.stringify({ data }));
    if (checked) {
      dispatch({ type: AUTH, data });
    } else {
      dispatch({ type: AUTH_KEEP, data });
    }
  } catch (error) {
    if (error.response.status === 401) {
      localStorage.setItem("Unauthorized", JSON.stringify({ error }));
    } else {
      localStorage.setItem("server", JSON.stringify({ error }));
    }
  }
};

export const signup = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });
  } catch (error) {
    localStorage.setItem("server", JSON.stringify({ serverError: "error" }));
  }
};
