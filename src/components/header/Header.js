import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  AppBar,
  Toolbar,
  createMuiTheme,
  ThemeProvider,
  Button,
  IconButton,
  Grid,
  Avatar,
  Container,
} from "@material-ui/core";
import headerLogo from "../../assets/images/Logo-L.jpg";
import SystemUpdateIcon from "@material-ui/icons/SystemUpdate";
import HelpIcon from "@material-ui/icons/Help";
import MenuIcon from "@material-ui/icons/Menu";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import Auth from "../Auth/Auth";
import * as api from "../../api/index.js";
import { useDispatch } from "react-redux";
import * as actionType from "../../redux/constants/actionTypes";
import "./Header.css";
import AuthDrawer from "../Auth/AuthDrawer";

import "./Header.css";

import { useStyles } from "./classes";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
});

const Header = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [nuser, setNuser] = useState(
    JSON.parse(sessionStorage.getItem("profile"))
  );

  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [picture, setPicture] = useState("");
  const dispatch = useDispatch();
  const [isSignout, setIsSignout] = useState(false);
  const showSearch = useSelector((state) => state.showSearch.showSearch);
  const showHeader = useSelector((state) => state.showHeader.showHeader);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const userdash = () => {
    if (isSignout) {
      logout();
    } else {
      history.push("/dashboard");
    }
  };
  const fetchResults = async () => {
    try {
      const { data } = await api.getDetails();

      setName({
        ...name,
        firstName: data.local.firstName,
        lastName: data.local.lastName,
      });
      setPicture(data.displayPicture);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user || nuser) {
      fetchResults();
    }
    // eslint-disable-next-line
  }, [user, nuser]);

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push("/");
  };

  useEffect(() => {
    if (
      location.pathname === "/dashboard" ||
      location.pathname === "/dashboard/uploadedMenus" ||
      location.pathname === "/dashboard/viewHistory" ||
      location.pathname === "/dashboard/favoriteMenus" ||
      location.pathname === "/dashboard/favoriteRestaurant" ||
      location.pathname === "/dashboard/userPreferences" ||
      location.pathname === "/dashboard/viewFeedback" ||
      location.pathname === "/dashboard/favoriteMenuItems"
    ) {
      setIsSignout(true);
    } else {
      setIsSignout(false);
    }
    // console.log('test user', user)
    // const token = user?.token
    // if (token) {
    //   const decodedToken = decode(token);

    //   if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    // }

    setUser(JSON.parse(localStorage.getItem("profile")));
    setNuser(JSON.parse(sessionStorage.getItem("profile")));
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      {showHeader && (
        <ThemeProvider theme={theme}>
          <div className={classes.root}>
            <AppBar position="fixed" className={classes.shadow}>
              <Container className={classes.container}>
                <Toolbar>
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    onClick={handleClick}
                  >
                    <MenuIcon />
                  </IconButton>

                  <Grid container className={classes.header}>
                    <div
                      className={classes.leftH}
                      justify="flex-start"
                      alignItems="center"
                    >
                      <NavLink to="/">
                        <img
                          src={headerLogo}
                          alt="logo"
                          className={classes.logo}
                        />
                      </NavLink>
                    </div>
                    <div
                      className={classes.centerH}
                      container
                      justify="center"
                      alignItems="center"
                    ></div>
                    <div
                      justify="flex-end"
                      alignItems="center"
                      className={classes.rightSec}
                    >
                      <Grid style={{ overflow: "hidden" }}>
                        {user ? (
                          <Button
                            startIcon={
                              <Avatar
                                src={user ? picture : ""}
                                style={{ width: 20, height: 20 }}
                              />
                            }
                            className={classes.linkButton}
                            disableRipple
                            onClick={userdash}
                          >
                            {isSignout ? "Sign Out" : name.firstName}
                          </Button>
                        ) : (
                          <Auth />
                        )}
                      </Grid>
                    </div>
                  </Grid>

                  <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                      <div className="nav-links" onClick={closeMobileMenu}>
                        {user ? (
                          <h3
                            className={classes.linkButtonDrawer}
                            onClick={userdash}
                          >
                            {isSignout ? "Sign Out" : name.firstName}
                          </h3>
                        ) : (
                          <AuthDrawer />
                        )}
                      </div>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        to="/dummy-page2"
                        className="nav-links"
                        activeClassName="nav-links-active"
                        onClick={closeMobileMenu}
                        style={{ fontFamily: "Gilroy-Light, serif" }}
                      >
                        Get the App
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        to="/dummy-page3"
                        className="nav-links"
                        activeClassName="nav-links-active"
                        onClick={closeMobileMenu}
                        style={{ fontFamily: "Gilroy-Light, serif" }}
                      >
                        Need Help
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        to="/"
                        className="nav-links"
                        activeClassName="nav-links-active"
                        onClick={closeMobileMenu}
                        style={{ fontFamily: "Gilroy-Light, serif" }}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        to="/dummy-page4"
                        className="nav-links"
                        activeClassName="nav-links-active"
                        onClick={closeMobileMenu}
                        style={{ fontFamily: "Gilroy-Light, serif" }}
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        to="/dummy-page5"
                        className="nav-links"
                        activeClassName="nav-links-active"
                        onClick={closeMobileMenu}
                        style={{ fontFamily: "Gilroy-Light, serif" }}
                      >
                        Pricing
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        to="/dummy-page6"
                        className="nav-links"
                        activeClassName="nav-links-active"
                        onClick={closeMobileMenu}
                        style={{ fontFamily: "Gilroy-Light, serif" }}
                      >
                        Restaurant Owners
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        to="/dummy-page7"
                        className="nav-links"
                        activeClassName="nav-links-active"
                        onClick={closeMobileMenu}
                        style={{ fontFamily: "Gilroy-Light, serif" }}
                      >
                        Careers
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        to="/dummy-page8"
                        className="nav-links"
                        activeClassName="nav-links-active"
                        onClick={closeMobileMenu}
                        style={{ fontFamily: "Gilroy-Light, serif" }}
                      >
                        Coronavirus Updates
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        to="/dummy-page9"
                        className="nav-links"
                        activeClassName="nav-links-active"
                        onClick={closeMobileMenu}
                        style={{ fontFamily: "Gilroy-Light, serif" }}
                      >
                        Terms & Conditions
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        to="/dummy-page10"
                        className="nav-links"
                        activeClassName="nav-links-active"
                        onClick={closeMobileMenu}
                        style={{ fontFamily: "Gilroy-Light, serif" }}
                      >
                        Privacy Policy
                      </NavLink>
                    </li>
                    <div>
                      <li className="nav-item">
                        <div className="icon-set">
                          <a
                            href="https://www.facebook.com/gottamenu"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <FacebookIcon className={classes.icon} />
                          </a>
                          <a
                            href="https://www.instagram.com/gottamenu/"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <InstagramIcon className={classes.icon} />
                          </a>
                          <a
                            href="https://www.linkedin.com/company/gottamenu/"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <LinkedInIcon className={classes.icon} />
                          </a>
                          <a
                            href="https://twitter.com/gottamenu"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <TwitterIcon className={classes.icon} />
                          </a>
                        </div>
                      </li>
                      <li
                        className="nav-item"
                        style={{ fontFamily: "Gilroy-Light, serif" }}
                      >
                        <div className="copy-right">
                          Copyright © 2021 GottaMenu - All Rights Reserved.
                        </div>
                      </li>
                    </div>
                  </ul>
                </Toolbar>
              </Container>
            </AppBar>
          </div>
        </ThemeProvider>
      )}
    </>
  );
};

export default Header;
