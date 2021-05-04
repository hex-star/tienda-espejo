
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review(props) {

  const { cartItems, address, cardInfo } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.21;
  const shippingPrice = itemsPrice > 2000 ? 0 : 800;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Resumen de tu orden
      </Typography>
      <List disablePadding>
        {cartItems.map((product) => (
          <ListItem className={classes.listItem} key={product.title}>
            <ListItemText primary={product.title} secondary={product.description.substring(0, 55)+'...'} />
            <Typography variant="body2">{product.qty} x ${product.price.toFixed(2)}</Typography>
          </ListItem>
        ))}

        <ListItem className={classes.listItem}>
          <ListItemText primary="Subtotal" />
          <Typography variant="body2" className={classes.total}>
            ${itemsPrice.toFixed(2)}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Costo de envío" />
          <Typography variant="body2" className={classes.total}>
            ${shippingPrice.toFixed(2)}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Impuestos" />
          <Typography variant="body2" className={classes.total}>
            ${taxPrice.toFixed(2)}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            ${totalPrice.toFixed(2)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Envío
          </Typography>
          <Typography gutterBottom>{address.firstName + ' ' + address.lastName}</Typography>
          <Typography gutterBottom>{[address.address1, address.address2, address.city, address.state, address.zip].join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Informacion de pago
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography gutterBottom>Titular:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{cardInfo.cardName}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Numero de tarjeta:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{'xxxx-xxxx-xxxx-' + cardInfo.cardNumber.substring(12,16) }</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Fecha de expiración:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{cardInfo.expDate}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
