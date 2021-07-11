import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import UserDashboard from "./screens/UserDashboard/UserDashboard";
import PageNotFound from "./components/errorPages/PageNotFound";
import store from "./redux/store";

const App = (props) => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/dashboard" component={UserDashboard} />
            <Route path="/" component={UserDashboard} exact />
            <Route component={PageNotFound}></Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
