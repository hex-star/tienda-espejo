// --- Post bootstrap -----
import React, { useState, useEffect } from "react";
import { withStyles } from '@material-ui/core/styles';
import AppFooter from "./modules/views/AppFooter";
import AppAppBar from "./modules/views/AppAppBar";
import {Grid} from '@material-ui/core';
import Terms from "./Terms";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Typography from './modules/components/Typography';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Paper, Box, } from "@material-ui/core";
import { makeStyles, } from '@material-ui/core/styles';
// import { Checkout } from './components/CheckoutForm/Checkout';

const useStyles = makeStyles(theme => ({
    boxWrapper: {
        marginBottom: "55px",
        minHeight: "calc(26vh + 260px)"
    },
    container: {
        position: "relative",
        zIndex: "1100",
        marginTop: "-95px",
        marginBottom: "45px",
    }
}));

export default function CheckoutView(props) {
    const montoTotal = props;
    return (<React.Fragment>
      <AppAppBar cartItemsLenght={0}  />
      {/* <Checkout /> */}
      <AppFooter />
    </React.Fragment>
  );
}