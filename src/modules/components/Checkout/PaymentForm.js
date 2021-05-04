import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm(props) {
  const {handleCardInfoChange} = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Medio de pago
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Titular"
            helperText="Tal como aparece en la tarjeta"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            onChange={handleCardInfoChange('cardName')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Número de tarjeta"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            onChange={handleCardInfoChange('cardNumber')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Fecha de expiración"
            helperText="En format MM/AA"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            onChange={handleCardInfoChange('expDate')}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Código de 3 dígitos al reverso de la tarjeta"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
