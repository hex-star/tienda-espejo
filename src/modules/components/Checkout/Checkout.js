import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  main: {
    marginBottom: theme.spacing(4),
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Datos del envío', 'Información de pago', 'Confirmación'];

function getStepContent(step, cartItems, address, handleAddressChange, cardInfo, handleCardInfoChange) {
  switch (step) {
    case 0:
      return <AddressForm handleAddressChange={handleAddressChange} />;
    case 1:
      return <PaymentForm handleCardInfoChange={handleCardInfoChange} />;
    case 2:
      return <Review cartItems={cartItems} address={address} cardInfo={cardInfo} />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout(props) {
  
  const { cartItems } = props;
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const [address, setAddress] = React.useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });

  const handleAddressChange = (prop) => (event) => {
    setAddress({ ...address, [prop]: event.target.value });
  };

  const [cardInfo, setCardInfo] = React.useState({
    cardName: '',
    cardNumber: '',
    expDate: ''
  });

  const handleCardInfoChange = (prop) => (event) => {
    setCardInfo({ ...cardInfo, [prop]: event.target.value });
  };

  return (
    <React.Fragment>
      <Container component="main" className={classes.main} maxWidth="sm">
        <Paper className={classes.paper} variant="outlined">
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Gracias por tu compra!
                </Typography>
                <Typography variant="subtitle1">
                  Tu pedido ha sido realizado exitosamente. Te hemos enviado por 
                  mail la confirmación y te avisaremos tan pronto sea despachado.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, cartItems, address, handleAddressChange, cardInfo, handleCardInfoChange)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Volver
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Completar pedido' : 'Siguiente'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
