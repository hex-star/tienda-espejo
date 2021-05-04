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
import Checkout from './modules/components/Checkout/Checkout'
// import Map from "./modules/components/Map/Map"

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
}));

export default function CheckoutView(props) {
    const { cartItems } = props;
    const classes = useStyles();

    return (
    <React.Fragment>
      <AppAppBar />
        <Typography variant="h3" gutterBottom marked="center" align="center">
          Checkout
        </Typography>
        <Checkout cartItems={cartItems} />
        {/* <Map
          width='450px'
          center={{lat: 18.5204, lng: 73.8567}}
          height='300px'
          zoom={15}
          /> */}
      <AppFooter />
    </React.Fragment>
  );
}