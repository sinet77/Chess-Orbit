import { LoginSchema } from "../../schemas/ValidationSchema";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "./../../firebase/auth";
import * as style from "./LoginForm.style";
import { Formik, Form, Field } from "formik";
import {
  Box,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  Divider,
  Link,
} from "@mui/material";
import { useAuth } from "../../context/authContext";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function LoginForm() {
  const { userLoggedIn } = useAuth();
  const [isSigningIn, setIsSigningIn] = useState(false);

  const onSubmit = async (values, { setSubmitting }) => {
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(values.login, values.password);
      } catch (error) {
        // obsłuż błąd logowania
      }
      setSubmitting(false);
      setIsSigningIn(false);
    }
  };

  const onGoogleSignIn = async () => {
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithGoogle();
      } catch (error) {
        setIsSigningIn(false);
      }
    }
  };

  return (
    <Box sx={style.Main}>
      {userLoggedIn && <Navigate to={"/"} replace={true} />}
      <Typography sx={style.Text}>Start your journey</Typography>
      <Formik
        initialValues={{ login: "", password: "", remember: false }}
        validationSchema={LoginSchema}
        validateOnChange={true}
        validateOnBlur={true}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <Box sx={style.Form}>
              <Field
                sx={style.TextField}
                name="login"
                as={TextField}
                fullWidth
                id="login"
                label="Login"
                placeholder="Login"
                error={touched.login && Boolean(errors.login)}
                helperText={touched.login && errors.login}
              />

              <Field
                sx={style.TextField}
                name="password"
                as={TextField}
                fullWidth
                id="password"
                label="Password"
                type="password"
                placeholder="Password"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />

              <FormControlLabel
                control={
                  <Field
                    as={Checkbox}
                    name="remember"
                    color="primary"
                    sx={style.Checkbox}
                  />
                }
                label="Remember"
              />
              <Box sx={style.Centered}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSigningIn}
                  sx={style.Button}
                >
                  {isSigningIn ? "Loading..." : "Login"}
                </Button>
                <Divider sx={style.Divider}>OR</Divider>
                <Button
                  onClick={onGoogleSignIn}
                  variant="contained"
                  color="primary"
                  sx={style.Button}
                >
                  Sign in with Google
                </Button>
                <Link href="/register" underline="hover">
                  Register
                </Link>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
