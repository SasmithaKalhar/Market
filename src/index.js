import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';

// import { reducers } from "./redux/reducers" ;
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BE_URL;
console.log("process.env.REACT_APP_BE_URL", process.env.REACT_APP_BE_URL);
console.log(
  "process.env.REACT_APP_GOOGLE_PLACES_KEY",
  process.env.REACT_APP_GOOGLE_PLACES_KEY
);

// const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
