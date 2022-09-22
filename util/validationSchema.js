import * as Yup from "yup";

export const loginValidation = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

export const signupValidation = Yup.object({
  name: Yup.string()
    .min(4, "Name must be 4 characters long")
    .max(25, "Name must not be more then 25 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be 8 characters long")
    .max(20, "Password must not be more then 20 characters")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol")
    .required("Required"),
});

export const forgotPasswordValidation = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
});

export const resetValidation = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be 8 characters long")
    .max(20, "Password must not be more then 20 characters")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password must be same"
  ),
});
