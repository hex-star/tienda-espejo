// --- Post bootstrap -----
import React from "react";
import AppFooter from "./modules/views/AppFooter";
import AppAppBar from "./modules/views/AppAppBar";
import ProductCard from "./modules/components/Card/ProductCard";
import ProductList from "./modules/components/ProductList";
import {Grid} from '@material-ui/core';
import Terms from "./Terms";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import BasketView from "./BasketView"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Products(props) {
  const { products, onAdd, cartItems } = props;

  return (
    <React.Fragment>
    <AppAppBar cartItemsLenght={cartItems.lenght}  />
    <Grid container direction = "column">
      <Grid item container>
        <Grid item xs={2} sm={2}/>
        <Grid item xs={12} sm={8}>
        
          {/* <Content /> */}
          <Grid container spacing = {2} >
              {ProductList.map(product => (
                <Grid item xs={12} sm={4}>
                    <ProductCard product={product} onAdd={onAdd} />
                </Grid>
              ))}
          </Grid>

        </Grid>
        <Grid item xs={2} sm={2}/>
          
        </Grid>  
      </Grid>


    <AppFooter />
  </React.Fragment>
  );
}
