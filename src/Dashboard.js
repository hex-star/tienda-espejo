import React from "react";
// import "./styles.css";
import AbmProductos from "./modules/components/Dashboard/ABMProducts";
// import Contact from "./Contact";
// import About from "./About";
import { Route, Switch } from "react-router-dom";
import Drawer from "./modules/components/Dashboard/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import Home from './Home'
import Orders from "./modules/components/Dashboard/Orders";
import Header from "./modules/components/Dashboard/Header";

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Drawer />

      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact from="/adminPanel/AbmProductos" render={props => <AbmProductos {...props} />} />
        <Route exact from="/adminPanel/Ventas" render={
          props => <Orders {...props} />}/>
        }
        {/* <Route exact path="/adminPanel/ABMProductos" render={props => <Contact {...props} />} />
        <Route exact path="/adminPanel/Ventas" render={props => <About {...props} />} /> */}
      </Switch>
    </div>
  );
}
