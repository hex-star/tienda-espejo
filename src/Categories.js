import withRoot from "./modules/withRoot";
// --- Post bootstrap -----
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductCategories from "./modules/views/ProductCategories";
import AppFooter from "./modules/views/AppFooter";
import ProductHero from "./modules/views/ProductHero";
import AppAppBar from "./modules/views/AppAppBar";
import AppTabBar from "./modules/views/AppTabBar"
import Terms from "./Terms";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Basket from "./Basket"

function Categories() {
  return (
    <React.Fragment>
    <AppAppBar />
    <AppTabBar />
    <ProductCategories />
    <AppFooter />
  </React.Fragment>
  );
}

export default withRoot(Categories);
