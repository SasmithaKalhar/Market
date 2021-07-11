import React, { useState, useEffect } from "react";
import { useStyles } from "./classes";

import { Typography, Box, Paper, Avatar } from "@material-ui/core";
import { Link, Switch, Route } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import CreateIcon from "@material-ui/icons/Create";
import ListIcon from "@material-ui/icons/List";
import HistoryIcon from "@material-ui/icons/History";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import PublishIcon from "@material-ui/icons/Publish";
import RateReviewIcon from "@material-ui/icons/RateReview";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import * as actionType from "../../redux/constants/actionTypes";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import EditInformation from "../../components/EditInformation/EditInformation";
import Item from "../../components/item/item";
import * as api from "../../api/index.js";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CreditCard from "../../components/Creditcard/CreditCard";
import DeliveryForm from "../../components/DeliveryForm/DeliveryForm";
import User from "../../components/User/User";
import Package from "../../components/Package/Package";
import Bid from "../../components/Bid/Bid";
import Refund from "../../components/Refund/refund";
import Booking from "../../components/Booking/Booking";
import Notification from "../../components/Notification/Notification";
import Massage from "../../components/Massage/Massage";

import { isMobile } from "react-device-detect";

const UserDashboard = (props) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [nuser, setNuser] = useState(
    JSON.parse(sessionStorage.getItem("profile"))
  );
  // eslint-disable-next-line
  const [isDivice, setIsDivice] = useState(false);
  useEffect(() => {
    if (isMobile) {
      setIsDivice(true);
    } else {
      setIsDivice(false);
    }

    // eslint-disable-next-line
  }, [user, nuser]);

  const checkUpdates = JSON.parse(localStorage.getItem("userUpdate"));
  // const [checkUpdates, setcheckUpdates] = useState(JSON.parse(localStorage.getItem('userUpdate')));

  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [picture, setPicture] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

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
    fetchResults();
    if (checkUpdates) {
      localStorage.removeItem("userUpdate");
    }
    // if (!isDivice) {
    //   dispatch(showSearch());
    // }

    // eslint-disable-next-line
  }, [checkUpdates]);

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push("/");
  };

  useEffect(() => {
    const token = user?.token;
    fetchResults();
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
    setNuser(JSON.parse(sessionStorage.getItem("profile")));
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {isMobile ? (
        <div style={{ marginTop: "85px" }}>
          <Paper elevation={3} className={classes.userMobile}>
            <Avatar
              src={user || nuser ? picture : ""}
              className={classes.userImage}
            />
            <Typography className={classes.userName}>
              {name.firstName}&nbsp; {name.lastName}
            </Typography>
          </Paper>

          <div className={classes.spin}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <CreateIcon />{" "}
                <Typography className={classes.heading}>
                  &nbsp;&nbsp; EDIT INFORMATION
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{ padding: 0 }}>
                <EditInformation />
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <MenuBookIcon />{" "}
                <Typography className={classes.heading}>
                  &nbsp;&nbsp; REFUND
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{ padding: 0 }}>
                <Refund />
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <ListIcon />
                <Typography className={classes.heading}>
                  &nbsp;&nbsp; FAVORITE MENU ITEMS
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{ padding: 0 }}>
                {/* body */}
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <RestaurantIcon className={classes.select} />{" "}
                <Typography className={classes.heading}>
                  &nbsp;&nbsp; FAVORITE RESTAURANTS
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{ padding: 0 }}>
                {/* body */}
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <PlaylistAddCheckIcon />{" "}
                <Typography className={classes.heading}>
                  &nbsp;&nbsp; USER PREFERENCES
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{ padding: 0 }}>
                {/* body */}
              </AccordionDetails>
            </Accordion>

            <Accordion disabled>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <PublishIcon />{" "}
                <Typography className={classes.heading}>
                  &nbsp;&nbsp; UPLOADED MENUS
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{ padding: 0 }}>
                {/* <UploadedMenus /> */}
                {/* body */}
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <HistoryIcon />{" "}
                <Typography className={classes.heading}>
                  &nbsp;&nbsp; VIEW HISTORY{" "}
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{ padding: 0 }}>
                {/* body */}
              </AccordionDetails>
            </Accordion>

            <Accordion style={{ marginBottom: 50 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <RateReviewIcon />{" "}
                <Typography className={classes.heading}>
                  &nbsp;&nbsp; VIEW TEST
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{ padding: 0 }}>
                {/* body */}
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      ) : (
        <div
          style={{ marginTop: "85px", display: "flex", flexDirection: "row" }}
        >
          <Box
            style={{
              width: "27%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Paper elevation={3} className={classes.userCard}>
              <Avatar
                src={user || nuser ? picture : ""}
                className={classes.userImage}
              />
              <Typography className={classes.userName}>
                Dilanka&nbsp; Madhushan
              </Typography>
            </Paper>
            <Paper elevation={3} className={classes.nav}>
              <div className={classes.list}>
                <List component="nav" aria-label="main mailbox folders">
                  <Link to="/dashboard" className={classes.link}>
                    <ListItem
                      className={classes.select}
                      button
                      classes={{
                        root: classes.root,
                        selected: classes.selected,
                      }}
                      selected={selectedIndex === 0}
                      onClick={(event) => handleListItemClick(event, 0)}
                    >
                      <ListItemIcon>
                        <MenuBookIcon className={classes.select} />
                      </ListItemIcon>
                      <ListItemText
                        className={classes.items}
                        primary="FEEDBACk"
                      />
                    </ListItem>
                    <Divider />
                  </Link>

                  <Link to="/dashboard/item" className={classes.link}>
                    <ListItem
                      className={classes.select}
                      button
                      classes={{
                        root: classes.root,
                        selected: classes.selected,
                      }}
                      selected={selectedIndex === 1}
                      onClick={(event) => handleListItemClick(event, 1)}
                    >
                      <ListItemIcon>
                        <MenuBookIcon className={classes.select} />
                      </ListItemIcon>
                      <ListItemText
                        className={classes.items}
                        primary="ITEM CRUD"
                      />
                    </ListItem>
                    <Divider />
                  </Link>
                  

                  <Link
                    to="/dashboard/card"
                    className={classes.link}
                  >
                    <ListItem
                      className={classes.select}
                      button
                      classes={{
                        root: classes.root,
                        selected: classes.selected,
                      }}
                      selected={selectedIndex === 2}
                      onClick={(event) => handleListItemClick(event, 2)}
                    >
                      <ListItemIcon>
                        <ListIcon className={classes.select} />
                      </ListItemIcon>
                      <ListItemText
                        className={classes.items}
                        primary="CREDITCARD CRUD"
                      />
                    </ListItem>
                    <Divider />
                  </Link>
                  <Link
                    to="/dashboard/delivery"
                    className={classes.link}
                  >
                    <ListItem
                      className={classes.select}
                      button
                      classes={{
                        root: classes.root,
                        selected: classes.selected,
                      }}
                      selected={selectedIndex === 3}
                      onClick={(event) => handleListItemClick(event, 3)}
                    >
                      <ListItemIcon>
                        <ListIcon className={classes.select} />
                      </ListItemIcon>
                      <ListItemText
                        className={classes.items}
                        primary="DELIVERYFORM"
                      />
                    </ListItem>
                    <Divider />
                  </Link>
                  

                  <Link
                    to="/dashboard/user"
                    className={classes.link}
                  >
                    <ListItem
                      className={classes.select}
                      button
                      classes={{
                        root: classes.root,
                        selected: classes.selected,
                      }}
                      selected={selectedIndex === 4}
                      onClick={(event) => handleListItemClick(event, 4)}
                    >
                      <ListItemIcon>
                        <PlaylistAddCheckIcon className={classes.select} />
                      </ListItemIcon>
                      <ListItemText
                        className={classes.items}
                        primary="USER"
                      />
                    </ListItem>
                    <Divider />
                  </Link>

                  
                  <Link
                    to="/dashboard/Bid"
                    className={classes.link}
                  >
                    <ListItem
                      className={classes.select}
                      button
                      classes={{
                        root: classes.root,
                        selected: classes.selected,
                      }}
                      selected={selectedIndex === 5}
                      onClick={(event) => handleListItemClick(event, 5)}
                    >
                      <ListItemIcon>
                        <PlaylistAddCheckIcon className={classes.select} />
                      </ListItemIcon>
                      <ListItemText
                        className={classes.items}
                        primary="BID"
                      />
                    </ListItem>
                    <Divider />
                  </Link>

                  <Link to="/dashboard/package" className={classes.link}>
                    <ListItem
                      button
                      classes={{
                        root: classes.root,
                        selected: classes.selected,
                      }}
                      selected={selectedIndex === 6}
                      onClick={(event) => handleListItemClick(event, 6)}
                    >
                      <ListItemIcon className={classes.select}>
                        <HistoryIcon className={classes.select} />
                      </ListItemIcon>
                      <ListItemText
                        className={classes.items}
                        primary="Package"
                      />
                    </ListItem>
                    <Divider />
                  </Link>

                  
                  <Link
                    to="/dashboard/refund"
                    className={classes.link}
                  >
                    <ListItem
                      className={classes.select}
                      button
                      classes={{
                        root: classes.root,
                        selected: classes.selected,
                      }}
                      selected={selectedIndex === 7}
                      onClick={(event) => handleListItemClick(event, 7)}
                    >
                      <ListItemIcon>
                        <PlaylistAddCheckIcon className={classes.select} />
                      </ListItemIcon>
                      <ListItemText
                        className={classes.items}
                        primary="Refund"
                      />
                    </ListItem>
                    <Divider />
                  </Link>

                                    
                  <Link
                    to="/dashboard/booking"
                    className={classes.link}
                  >
                    <ListItem
                      className={classes.select}
                      button
                      classes={{
                        root: classes.root,
                        selected: classes.selected,
                      }}
                      selected={selectedIndex === 8}
                      onClick={(event) => handleListItemClick(event, 8)}
                    >
                      <ListItemIcon>
                        <PlaylistAddCheckIcon className={classes.select} />
                      </ListItemIcon>
                      <ListItemText
                        className={classes.items}
                        primary="Booking"
                      />
                    </ListItem>
                    <Divider />
                  </Link>


                  <Link to="/dashboard/notification" className={classes.link}>
                    <ListItem
                      className={classes.select}
                      button
                      classes={{
                        root: classes.root,
                        selected: classes.selected,
                      }}
                      selected={selectedIndex === 9}
                      onClick={(event) => handleListItemClick(event, 9)}
                    >
                      <ListItemIcon className={classes.select}>
                        <RateReviewIcon />
                      </ListItemIcon>
                      <ListItemText
                        className={classes.items}
                        primary="Notification "
                      />
                    </ListItem>
                    <Divider />
                  </Link>

                  
                  <Link to="/dashboard/massage" className={classes.link}>
                    <ListItem
                      className={classes.select}
                      button
                      classes={{
                        root: classes.root,
                        selected: classes.selected,
                      }}
                      selected={selectedIndex === 10}
                      onClick={(event) => handleListItemClick(event, 10)}
                    >
                      <ListItemIcon className={classes.select}>
                        <RateReviewIcon />
                      </ListItemIcon>
                      <ListItemText
                        className={classes.items}
                        primary="Massage "
                      />
                    </ListItem>
                    <Divider />
                  </Link>
                </List>
              </div>
            </Paper>
          </Box>
          <Box style={{ width: "73%" }}>
            <Switch>
              <Route
                exact
                path="/dashboard"
                component={EditInformation}
              ></Route>
              <Route
                exact
                path="/dashboard/item"
                component={Item}
              ></Route>
              <Route
                exact
                path="/dashboard/card"
                component={CreditCard}
              ></Route>
               <Route
                exact
                path="/dashboard/delivery"
                component={DeliveryForm}
              ></Route>
              <Route
                exact
                path="/dashboard/user"
                component={ User }
              ></Route>
              <Route
                exact
                path="/dashboard/Bid"
                component={ Bid }
              ></Route>
              <Route
                exact
                path="/dashboard/refund"
                component={ Refund }
              ></Route>
              <Route
                exact
                path="/dashboard/booking"
                component={ Booking }
              ></Route>
              <Route
                exact
                path="/dashboard/package"
                component={ Package }
              ></Route>
              <Route
                exact
                path="/dashboard/notification"
                component={ Notification }
              ></Route>
              <Route
                exact
                path="/dashboard/massage"
                component={ Massage }
              ></Route>
            </Switch>
          </Box>
        </div>
      )}
    </>
  );
};

export default UserDashboard;
