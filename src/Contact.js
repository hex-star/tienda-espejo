import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Markdown from './modules/components/Markdown';
import Typography from './modules/components/Typography';
import AppAppBar from './modules/views/AppAppBar';
import terms from './modules/views/terms.md';
import AppFooter from './modules/views/AppFooter';
import AppForm from './modules/views/AppForm';
import { Formik, validateYupSchema } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { purple,pink } from '@material-ui/core/colors';

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    '&:hover': {
      backgroundColor: pink[700],
    },
  },
}))(Button);


function Contact(props) {
  const { cartItemsCount } = props;
  return (
    <React.Fragment>
      <AppAppBar cartItemsCount={cartItemsCount}  />
      <AppForm>
        <React.Fragment>
        <Typography variant="h3" gutterBottom marked="center" align="center">
            Contacto
          </Typography>
        </React.Fragment>
      <form>
        {/* <p>Ingrese su nombre:</p> */}
        <div style={{display:'block'}}>
        <div>
        <TextField 
          label="nombre"
          style={{margin:8}}
          fullWidth
          margin="normal" />
        {/* <input type="text"/> */}
        {/* <p>Ingrese su email:</p> */}
        </div>
        <div>
        <TextField 
          label="email"
          style={{margin:8}}
          fullWidth
          margin="normal" />
        </div>
        <div>
        <TextField
          id="standard-multiline-static"
          label="consulta"
          multiline
          rows={4}
          style={{margin:8}}
          fullWidth
          margin="normal"
          helperText="Escriba su consulta"
        />
        </div>
        <br></br>
        <div style={{}}>
        <ColorButton variant="contained" color="primary">
          Enviar consulta
        </ColorButton>
        </div>
        </div>
      </form>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Contact);
