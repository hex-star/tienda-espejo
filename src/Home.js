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
import Contact from "./Contact";
import Dashboard from './Dashboard.js';

function App() {

    const { products } = ProductList;
    const [cartItems, setCartItems] = useState([]);
    const [category, setCategory] = useState([]);

    const itemsCount = cartItems.reduce((a, c) => a + c.qty, 0);

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
    
    const handleCategory = (category) => {
      setCategory(category);
    };
    
    const [login,setLogin] = React.useState({});


  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index cartItemsCount={itemsCount} email={login.email} />
        </Route>
        <Route path="/signin">
          <SignIn cartItemsCount={itemsCount} 
          setLogin={setLogin}  />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/terms">
          <Terms cartItemsCount={itemsCount} email={login.email}  />
        </Route>
        <Route path="/basket">
          <BasketView products={products} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} email={login.email} />
        </Route>
        <Route path="/categories">
          <Categories cartItemsCount={itemsCount} handleCategory={handleCategory} email={login.email} />
        </Route>
        <Route path="/products">
          <Products products={products} onAdd={onAdd} cartItems={cartItems} category={category} email={login.email}  />
        </Route>
        <Route path="/checkout" >
          <CheckoutView cartItems={cartItems} email={login.email}  />
        </Route>
        <Route path="/contact">
          <Contact cartItemsCount={itemsCount} email={login.email}  />
        </Route>
        <Route path="/adminPanel">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

function Index(props) {
  const { cartItemsCount, email } = props;
  return (
    <React.Fragment>
      <AppAppBar cartItemsCount={cartItemsCount} email={email} />
      <ProductHero />
      <ProductHowItWorks />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(App);
