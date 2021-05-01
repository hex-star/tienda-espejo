import withRoot from "./modules/withRoot";
// --- Post bootstrap -----
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductCategories from "./modules/views/ProductCategories";
import AppFooter from "./modules/views/AppFooter";
import ProductHero from "./modules/views/ProductHero";
import AppAppBar from "./modules/views/AppAppBar";
import Terms from "./Terms";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import BasketView from "./BasketView"

function Categories(props) {
  const { cartItemscount } = props;
  return (
    <React.Fragment>
    <AppAppBar cartItemsLenght={cartItemscount}  />
    <ProductCategories />
    <AppFooter />
  </React.Fragment>
  );
}

export default withRoot(Categories);
