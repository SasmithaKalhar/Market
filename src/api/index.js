import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BE_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  if (sessionStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(sessionStorage.getItem("profile")).token
    }`;
  }
  return req;
});

//login endpoints
export const signIn = (formData) => axios.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user", formData);
export const google = (formData) => API.post("/user/oauth/google", formData);
export const facebook = (formData) =>
  API.post("/user/oauth/facebook", formData);

//user details endpoints
export const getDetails = () => API.get("/user/me");
export const getHistory = () => API.get("/user/history");
export const updateUser = (formData) => API.put("/user/update-me", formData);
export const changePassword = (formData) =>
  API.put("/user/update-password", formData);
export const userFav = () => API.get("/userFavorites/restaurants");
export const userFavMenu = () => API.get("/userFavorites/menus");
export const userFavMenuItem = () => API.get("/userFavorites/dishes");
export const addToFavd = (formData) => API.post("/userFavorites/add", formData);
export const removeFavd = (formData) =>
  API.post("/userFavorites/remove", formData);

export const getDishHistory = () => API.get("/analytics/dishHistory");
export const addMenuClick = (formData) =>
  API.post("/analytics/addMenu", formData);
export const getmenuHistory = () => API.get("/analytics/menuHistory");

//search realated enpoints
export const searchResults = (formData) => API.post("/searchResults", formData);
export const restaurant = (id) => API.get(`restaurant/${id}`);
export const resDish = (id) => API.get(`/restaurant/category/${id}`);
export const getMenu = (id) => API.get(`searchMenu/getMenusByRestaurant/${id}`);

//feedback
export const addFeeed = (formData) => API.post("/feedback/addFeed", formData);
export const addReplyFeed = (formData) =>
  API.post("/feedback/addReplyFeed", formData);
export const getUserFeed = () => API.get("/feedback/list");
export const getReplyFeed = (formData) =>
  API.post("/feedback/replyFeed", formData);
//others
export const getTags = () => API.get("/tag");
