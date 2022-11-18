import * as Yup from "yup";

const FILE_SIZE = 160 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

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

export const barberSignupValidation = Yup.object({
  first_name: Yup.string()
    .min(4, "Name must be 4 characters long")
    .max(25, "Name must not be more then 25 characters")
    .required("Required"),
  last_name: Yup.string()
    .min(4, "Name must be 4 characters long")
    .max(25, "Name must not be more then 25 characters")
    .required("Required"),
  phone_number: Yup.string()
    .required("Required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ),
  address: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  zip_code: Yup.string().required("Required"),
  id_proof: Yup.mixed()
    .required("Required")
    .test(
      "fileSize",
      "File too large",
      (value) => value && value.size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "Only jpg/png/jpeg Format Supported",
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    ),
  profile_image: Yup.mixed()
    .required("Required")
    .test(
      "fileSize",
      "File too large",
      (value) => value && value.size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "Only jpg/png/jpeg Format Supported",
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    ),
  about_us: Yup.string().required("Required"),
});

export const forgotPasswordValidation = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
});

export const resetValidation = Yup.object({
  password: Yup.string()
    .required("Password is Required")
    .required("Required")
    .min(8, "Password must be 8 characters long")
    .max(20, "Password must not be more then 20 characters")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[^\w]/, "Password requires a symbol"),
  confirmPassword: Yup.string()
    .required("Confirm password is Required")
    .oneOf([Yup.ref("password"), null], "Password must be same"),
});

export const appointmentValidation = Yup.object({
  appointment_name: Yup.string()
    .min(4, "Name must be 4 characters long")
    .max(25, "Name must not be more then 25 characters")
    .required("Required"),
  date: Yup.date()
    .nullable()
    .typeError("Please Enter a Valid Date")
    .required("Required"),
  time: Yup.date().nullable().required("Required"),
  services: Yup.array().required("Required"),
  location: Yup.string().required("Required"),
  barber: Yup.string().nullable().required("Required"),
});

export const contactUsValidation = Yup.object({
  first_name: Yup.string()
    .min(4, "Name must be 4 characters long")
    .max(25, "Name must not be more then 25 characters")
    .required("Required"),
  last_name: Yup.string()
    .min(4, "Name must be 4 characters long")
    .max(25, "Name must not be more then 25 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  message: Yup.string().required("Required"),
});
