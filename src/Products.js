import withRoot from "./modules/withRoot";
// --- Post bootstrap -----
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductCategories from "./modules/views/ProductCategories";
import AppFooter from "./modules/views/AppFooter";
import ProductHero from "./modules/views/ProductHero";
import AppAppBar from "./modules/views/AppAppBar";
import AppTabBar from "./modules/views/AppTabBar"
import Container from '@material-ui/core/Container';
import Terms from "./Terms";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Basket from "./Basket"
import ProductList from "./modules/components/ProductList"
import {Grid} from '@material-ui/core';
import Content from "./modules/components/Content";

function Products() {
  return (
    <React.Fragment>
    <AppAppBar />
    <AppTabBar />

    <Grid container direction = "column">
      <Grid item container>
        <Grid item xs={2} sm={2}/>
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={2} sm={2}/>
          
        </Grid>  
      </Grid>
    {/* <Container >
      <div>
        {ProductList.map((product) => (
            <div >
              <h1>{product.name}</h1>
            </div>
        ))}
      </div>
    </Container>
     */}


    <AppFooter />
  </React.Fragment>
  );
}

export default withRoot(Products);
