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
import Basket from "./Basket";
import Products from "./Products";
import Categories from "./Categories";
import ProductHowItWorks from "./modules/views/ProductHowItWorks";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
        <Route path="/basket">
          <Basket />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </Switch>
    </Router>
  );
}

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      {/* <AppTabBar /> */}
      <ProductHero />
      <ProductHowItWorks />
      {/* <ProductCategories /> */}
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(App);
