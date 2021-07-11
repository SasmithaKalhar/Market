import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { useStyles } from "./classes";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import footerLogo from "../../assets/images/footer-logo.png";

export default function Footer() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item lg={8} md={8} sm={12} className={classes.iconSet1}>
          <div className={classes.iconSet2}>
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
        </Grid>

        <Grid item lg={4} md={4} sm={12} className={classes.center}>
          <div>
            <img className={classes.logo2} src={footerLogo} alt="logo" />
            <div className={classes.txt}>
              Copyright © 2021 GottaMenu - All Rights Reserved.
            </div>
          </div>
        </Grid>
      </React.Fragment>
    );
  }
  function FormRow3() {
    return (
      <React.Fragment>
        <Grid item sm={3} xs={6}>
          <a
            href="https://gottamenu.com/"
            target="_blank"
            rel="noreferrer noopener"
            className={classes.link}
          >
            {" "}
            Home{" "}
          </a>
        </Grid>
        <Grid item sm={3} xs={6}>
          <Link to="/dummy-page" className={classes.link}>
            Pricing
          </Link>
        </Grid>
        <Grid item sm={3} xs={6}>
          <a
            href="https://gottamenu.com/about-us-1"
            target="_blank"
            rel="noreferrer noopener"
            className={classes.link}
          >
            {" "}
            About Us
          </a>
        </Grid>
        <Grid item sm={3} xs={6}>
          <Link to="/terms-and-conditions" className={classes.link}>
            Terms & Conditions
          </Link>
        </Grid>
      </React.Fragment>
    );
  }
  function FormRow4() {
    return (
      <React.Fragment>
        <Grid item sm={3} xs={6}>
          <a
            href="https://gottamenu.com/business"
            target="_blank"
            rel="noreferrer noopener"
            className={classes.link}
          >
            {" "}
            Restaurant Owners
          </a>
        </Grid>
        <Grid item sm={3} xs={6}>
          <Link to="/coronaUpdates" className={classes.link}>
            Coronavirus Updates
          </Link>
        </Grid>
        <Grid item sm={3} xs={6}>
          <Link to="/privacy-policy" className={classes.link}>
            Privacy Policy
          </Link>
        </Grid>
        <Grid item sm={3} xs={6}>
          <Link to="/privacy-policy" className={classes.link}></Link>
        </Grid>
      </React.Fragment>
    );
  }

  function FormRow2() {
    return (
      <React.Fragment>
        <Grid item lg={8} md={8} sm={12} xs={12}>
          <Grid container spacing={2}>
            <Grid container item xs={12} spacing={1}>
              <FormRow3 />
            </Grid>
            <Grid container item xs={12} spacing={1}>
              <FormRow4 />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12} className={classes.center}>
          <img className={classes.logo1} src={footerLogo} alt="logo" />
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={1}>
          <FormRow2 />
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
