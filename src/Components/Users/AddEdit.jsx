import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "yup-phone";

const AddEdit = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  // const [loader, setLoader] = useState(true);
  const isAddMode = !id;
  const [formInitialSchema, setVals] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });
  const formValidationSchema = yup.object({
    name: yup.string().required("Name is required"),
    username: yup.string().required("User Name is required"),
    email: yup
      .string()
      .email("Enter Valid Email Address")
      .required("Email is required"),
    phone: yup.string().required("Phone Number is required").phone("IN"),
  });

  const renderError = (message) => (
    <p className="text-danger mt-2">{message}</p>
  );

  async function handleFormSubmit(values) {
    if (isAddMode) {
      console.log(values);
      await axios.post("http://localhost:3001/users", values);
      navigate("/");
    } else {
      await axios.put(`http://localhost:3001/users/${id}`, values);
      navigate("/");
    }
  }
  useEffect(() => {
    if (!isAddMode) {
      // console.log("id get ");
      loadUser();
    } else {
      setVals({
        name: "",
        username: "",
        email: "",
        phone: "",
      });
    }
  }, []);

  async function loadUser() {
    const result = await axios.get(`http://localhost:3001/users/${id}`);
    console.log(result, "Asdf");
    // result ? setLoader(false) : setLoader(true);
    setVals({
      name: result.data.name,
      username: result.data.username,
      email: result.data.email,
      phone: result.data.phone,
    });
  }
  // if (loader) {
  //   return <div>loading...</div>;
  // }

  return (
    <>
      <div className="container py-5">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">
            {isAddMode ? "Add A User" : "Edit A User"}
          </h2>
          <Formik
            initialValues={formInitialSchema}
            onSubmit={(values) => handleFormSubmit(values)}
            validationSchema={formValidationSchema}
            enableReinitialize
          >
            <Form>
              <div className="form-group mb-3">
                <Field
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Name"
                  name="name"
                />
                <ErrorMessage name="name" render={renderError} />
              </div>
              <div className="form-group mb-3">
                <Field
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Username"
                  name="username"
                />
                <ErrorMessage name="username" render={renderError} />
              </div>
              <div className="form-group mb-3">
                <Field
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter Your E-mail Address"
                  name="email"
                />
                <ErrorMessage name="email" render={renderError} />
              </div>
              <div className="form-group mb-3">
                <Field
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Phone Number"
                  name="phone"
                />
                <ErrorMessage name="phone" render={renderError} />
              </div>
              <button className="btn btn-primary btn-block" type="submit">
                {isAddMode ? "Add User" : "Update User"}
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default AddEdit;
