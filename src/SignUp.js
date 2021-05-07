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

function SignUp() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [newUser, setNewUser] = useState(null);

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Registrarse
          </Typography>
          <Typography variant="body2" align="center">
            <Link style={{textDecoration: 'none'}} to={"/signin"} underline="always">
              Ya tienes una cuenta?
            </Link>
          </Typography>
        </React.Fragment>
        <Formik
              initialValues={{
                email: "",
                password: "",
                confirmpassword: "",
                ConfirmationCode:"",
                policy: false,
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .email("Debe ser un email válido")
                  .max(255)
                  .required("Email requerido"),
                password: Yup.string()
                  .max(255)
                  .required("Contraseña con longitud mínima de 8 carácteres. Son requeridos minúsculas, mayúsculas y númberos."),
                confirmpassword: Yup.string().oneOf(
                  [Yup.ref("password"), null],
                  "Las contraseñas deben coincidir"
                ),
                policy: Yup.boolean().oneOf(
                  [true],
                  "Debe leer y aceptar nuestros términos y condiciones"
                ),
              })}
              onSubmit={async (values) => {
                setIsLoading(true);
                try {
                  /*const newUser = await Auth.signUp({
                    username: values.email,
                    password: values.password,
                  });*/
                  setIsLoading(false);
                  setNewUser(newUser);
                } catch (e) {
                  setIsLoading(false);
                }
              }}
            >
              {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,
                touched,
                values,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Box mb={3}>
                  </Box>
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
                  <TextField
                    error={Boolean(
                      touched.confirmpassword && errors.confirmpassword
                    )}
                    fullWidth
                    helperText={
                      touched.confirmpassword && errors.confirmpassword
                    }
                    label="Confirmar Contraseña"
                    margin="normal"
                    name="confirmpassword"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.confirmpassword}
                    variant="outlined"
                  />
                  <Box alignItems="center" display="flex" ml={-1}>
                    <Checkbox
                      checked={values.policy}
                      name="policy"
                      onChange={handleChange}
                    />
                    <Typography color="textSecondary" variant="body1">
                      He leído{" "}
                        <a target="_blank" rel="noopener noreferrer" href={"/terms"}>Términos y Condiciones</a>
                    </Typography>
                  </Box>
                  {Boolean(touched.policy && errors.policy) && (
                    <FormHelperText error>{errors.policy}</FormHelperText>
                  )}
                  <Box my={2}>
                    <Button
                      color="primary"
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Registrarse
                    </Button>
                  </Box>
                  <Typography color="textSecondary" variant="body1">
                    Tienes una cuenta?{" "}
                    <Link style={{textDecoration: 'none'}} to={'/signin'} variant="h6">
                      Iniciar sesión
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

export default withRoot(SignUp);
