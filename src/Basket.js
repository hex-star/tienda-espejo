import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React, { useState }  from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormHelperText,
  TextField,
  makeStyles,
} from "@material-ui/core";
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import AppForm from './modules/views/AppForm';
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
}));

function Basket() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [newUser, setNewUser] = useState(null);

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Mi carrito
          </Typography>
        </React.Fragment>
        </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Basket);
