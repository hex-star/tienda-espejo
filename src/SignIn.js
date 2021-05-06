import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  makeStyles,
} from "@material-ui/core";
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import AppForm from './modules/views/AppForm';
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

function SignIn(props) {
  const classes = useStyles();
  const { cartItemsCount } = props;

  return (
    <React.Fragment>
      <AppAppBar cartItemsCount={cartItemsCount} />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Iniciar sesión
          </Typography>
          <Typography variant="body2" align="center">
            {'No eres miembro todavía? '}
            <Link style={{textDecoration: 'none'}} to={"/signup"} align="center" underline="always">
              Registrate aquí
            </Link>
          </Typography>
        </React.Fragment>

        <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Debe ser un mail válido")
                .max(255)
                .required("Email requerido"),
              password: Yup.string()
                .max(255)
                .required("Contraseña requerida"),
            })}
            onSubmit={async (values) => {
              try {
                /*
                await Auth.signIn(values.email, values.password);
                userHasAuthenticated(true);
                navigate("/app/account");
                */
                window.location.reload();
              } catch (e) {
                alert(e.message);
              }
            }}
          >
            {({
              errors,
              handleBlur,
              handleSubmit,
              handleChange,
              isSubmitting,
              touched,
              values,
            }) => (
              <form onSubmit={handleSubmit}>

                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Contraseña"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Ingresar
                  </Button>
                </Box>
                <Typography color="textSecondary" variant="body1">
                  No tienes una cuenta?{" "}
                  <Link style={{textDecoration: 'none'}} to={"signup"} variant="h6">
                    Registrarse
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(SignIn);
