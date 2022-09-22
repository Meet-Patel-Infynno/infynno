import React from "react";
import InputField from "../../components/form/InputField";
import { Formik, Form } from "formik";
import { forgotPasswordValidation } from "../../util/validationSchema";
import Button from "../../components/form/Button";
import { User } from "../icons";
import BackArrow from "../layout/BackArrow";

const Forgot = ({ setCheckEmail }) => {
  const handleForgotSubmit = (val) => {
    setCheckEmail(true);
  };
  return (
    <div className="page-main min-h-auth-screen px-6 sm:p-0 flex flex-col justify-center items-center">
      <div className="absolute top-7 left-7 sm:left-14 md:left-24 md:top-14" >
        <BackArrow />
      </div>
      <div className="mx-auto w-full sm:w-max flex flex-col md:mt-12 lg:mt-0">
        <div className="mb-10 md:mb-12 text-center w-full lg:mt-0">
          <h2 className="font-semibold text-xl xs:text-2xl leading-9 md:text-4xl md:leading-56 tracking-wide text-black-600 font-poppins">
            Enter your email address
          </h2>
          <p className="font-poppins text-lg xs:text-xl md:text-3xl mt-2 font-normal md:leading-45 tracking-wide text-black">
            We will sent link on it
          </p>
        </div>

        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={forgotPasswordValidation}
          onSubmit={handleForgotSubmit}
        >
          <Form className="flex flex-col gap-9 md:gap-16 w-full max-w-sm mx-auto xs:px-6">
            <div>
              <InputField
                type="text"
                name="email"
                placeholder="Email"
                className="bg-transparent focus:outline-none font-medium text-base leading-4 tracking-wide"
                startIcon={<User wrapperClass="w-4 h-4" />}
              />
            </div>
            <div className="w-full">
              <Button type="submit" className="py-3">
                Submit
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Forgot;
