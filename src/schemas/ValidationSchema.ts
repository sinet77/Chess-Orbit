import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// 1 numeric digit, 1 lower case letter, 1 uppe case letter, min 5 characters

export const RegisterSchema = yup.object().shape({
  login: yup.string().required("Login is required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
});

export const LoginSchema = yup.object().shape({
  login: yup.string().required("Required"),
  password: yup.string().required("Required"),
  remember: yup.boolean().optional(),
});
