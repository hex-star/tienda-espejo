import withRoot from "./modules/withRoot";
// --- Post bootstrap -----
import React from "react";
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductCategories from "./modules/views/ProductCategories";
import AppAppBar from "./modules/views/AppAppBar";
import AppFooter from "./modules/views/AppFooter";
import ProductHero from "./modules/views/ProductHero";
import Terms from "./Terms";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import CheckoutView from "./CheckoutView";
import BasketView from "./BasketView";
import Products from "./Products";
import Categories from "./Categories";
import ProductHowItWorks from "./modules/views/ProductHowItWorks";
import ProductList from "./modules/components/ProductList"

function App() {

    const { products } = ProductList;
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist) {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        );
      } else {
        setCartItems([...cartItems, { ...product, qty: 1 }]);
      }
    };
    const onRemove = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.id !== product.id));
      } else {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
          )
        );
      }
    };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index cartItemsCount={cartItems.length} />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/terms">
          <Terms cartItemsCount={cartItems.length} />
        </Route>
        <Route path="/basket">
          <BasketView products={products} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
        </Route>
        <Route path="/categories">
          <Categories cartItemsCount={cartItems.length}  />
        </Route>
        <Route path="/products">
          <Products products={products} onAdd={onAdd} cartItems={cartItems} />
        </Route>
        <Route path="/checkout">
          <CheckoutView />
        </Route>
      </Switch>
    </Router>
  );
}

function Index(props) {
  const { cartItemsCount } = props;
  return (
    <React.Fragment>
      <AppAppBar cartItemsCount={cartItemsCount} />
      <ProductHero />
      <ProductHowItWorks />
      {/* <ProductCategories /> */}
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(App);
