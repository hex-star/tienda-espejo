// --- Post bootstrap -----
import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppFooter from "./modules/views/AppFooter";
import AppAppBar from "./modules/views/AppAppBar";
import {Grid} from '@material-ui/core';
import Terms from "./Terms";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Typography from './modules/components/Typography';
import Container from '@material-ui/core/Container';
import Button from './modules/components/Button';
import Avatar from '@material-ui/core/Avatar';
import { Toolbar } from '@material-ui/core';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function BasketView(props) {
  const { products, onAdd, onRemove, cartItems } = props;

  const itemsCount = cartItems.reduce((a, c) => a + c.qty, 0);
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.21;
  const shippingPrice = itemsPrice > 2000 ? 0 : 800;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  const styles = (theme) => ({
    root: {
      display: 'flex',
      backgroundColor: theme.palette.secondary.light,
      overflow: 'hidden',
    },
    toolbar: theme.mixins.toolbar,
    container: {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(15),
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    item: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(0, 5),
    },
    title: {
      marginBottom: theme.spacing(14),
    },
    number: {
      fontSize: 24,
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.secondary.main,
      fontWeight: theme.typography.fontWeightMedium,
    },
    image: {
      height: 55,
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    curvyLines: {
      pointerEvents: 'none',
      position: 'absolute',
      top: -180,
      opacity: 0.7,
    },
    button: {
      marginTop: theme.spacing(8),
    },
  });

  return (
    <React.Fragment>
    <AppAppBar cartItemsCount={itemsCount}  />
    <div className={styles.toolbar}>
      <Typography variant="h3" gutterBottom marked="center" align="center">
          Mi carrito
      </Typography>
      {cartItems.length === 0 && <Typography variant="h5" marked="center" align="center" >Tu carrito esta vacío!</Typography>}
      <Grid container component="section">
        <Grid item xs={2} spacing={1}></Grid>
        <Grid item xs={4} spacing={1}>
            <Container>
              {cartItems.length !== 0 && <Typography variant="h5">Tus productos:</Typography>
              }
              <Grid container xs={12} spacing={12}></Grid>
              {cartItems.map((item) => (
                <Grid container spacing={5}>
                  <Grid item xs={1} spacing={2}>
                    <Avatar variant="square" src={item.avatarUrl}></Avatar> 
                  </Grid>
                  <Grid item xs={11} spacing={2}>
                  
                    <Typography variant="body1">{item.type} - {item.title}</Typography>
                    <Typography variant="body2">{item.qty} x ${item.price.toFixed(2)}</Typography>
                    <button
                      onClick={() => onRemove(item)} className="remove">
                      -
                    </button>{' '}
                    <button onClick={() => onAdd(item)} className="add">
                      +
                    </button>
                  </Grid>
                </Grid>
              ))}
        
            </Container>  
        </Grid>
        <Grid item xs={1} spacing={1}></Grid>
        <Grid item xs={4} spacing={1}>
              {cartItems.length !== 0 && (
              <>
                <Container align="center" className="row">
                  <hr></hr>
                  <Container className="row">
                  <Typography variant="body1">Precio de los productos</Typography>
                  <Typography variant="body1">${itemsPrice.toFixed(2)}</Typography>
                  </Container>
                  <Container className="row">
                  <Typography variant="body1">Impuestos</Typography>
                    <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
                  </Container>
                  <Container className="row">
                  <Typography variant="body1">Costo de envío</Typography>
                  <Typography variant="body1">
                      ${shippingPrice.toFixed(2)}
                      </Typography>
                  </Container>
                  <Container className="row">
                  <Typography variant="body1">
                      <strong>Precio final:</strong>
                      </Typography>
                      <Typography variant="body1">
                      <strong>${totalPrice.toFixed(2)}</strong>
                      </Typography>
                  </Container>
                  <hr />
                  <Container className="row">
                    <Link to={"/checkout"}>
                      <Button
                        color="secondary"
                        variant="contained"
                        component="a" >
                        Comprar
                      </Button>
                    </Link>
                  </Container>
                </Container>
              </>
            )}
              
        </Grid>
      </Grid>
    </div>
    <AppFooter />
  </React.Fragment>
  );
}
