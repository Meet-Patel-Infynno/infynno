import React from "react";
import InputField from "../../components/form/InputField";
import { Formik, Form } from "formik";
import { forgotPasswordValidation } from "../../util/validationSchema";
import Button from "../../components/form/Button";
import { User } from "../icons";
import BackArrow from "../layout/BackArrow";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../redux/reducers/AuthenticationSlice";

const Forgot = ({ setCheckEmail }) => {
  const { isLoading, error } = useSelector((state) => ({
    isLoading: state.authentication.user_data.isLoading,
    error: state.authentication.user_data.form.error,
  }));
  const dispatch = useDispatch();
  const handleForgotSubmit = (val) => {
    dispatch(resetPassword(val));
    error !== "" && setCheckEmail(true);
  };
  return (
    <>
      <div className="w-max mt-7 ml-7 sm:ml-14 md:ml-24 md:mt-14">
        <BackArrow />
      </div>
      <div className="page-main relative min-h-auth-screen px-6 sm:p-0 flex flex-col justify-center items-center">
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
                <Button
                  type="submit"
                  className="py-3 disabled:bg-gray-500"
                  disabled={isLoading}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Forgot;
