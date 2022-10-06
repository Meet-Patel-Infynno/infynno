import React from "react";
import { Form, Formik } from "formik";
import Image from "next/image";
import Button from "../../../components/form/Button";
import InputField from "../../../components/form/InputField";
import BackArrow from "../../../components/layout/BackArrow";
import resetLogo from "../../../assets/images/reset-password.svg";
import { useRouter } from "next/router";
import { resetPassword } from "../../../redux/reducers/AuthenticationSlice";
import { useDispatch, useSelector } from "react-redux";
import { resetValidation } from "../../../util/validationSchema";

const ResetPassword = () => {
  const router = useRouter();
  const { key } = router.query;
  const { isLoading } = useSelector(state => state.authentication.user_data.isLoading);
  const dispatch = useDispatch();

  const handleResetSubmit = (val) => {
    dispatch(resetPassword({ key: key.join("/"), data : {password: val?.password}}));
  };

  return (
    <>
      <div className="w-max mt-7 ml-7 sm:ml-14 md:ml-24 md:mt-14">
        <BackArrow />
      </div>
    <section className="flex relative min-h-auth-screen xs:mb-14 md:mb-0 flex-col md:gap-16 md:flex-row md:px-12 sm:justify-between max-w-5xl mx-auto items-center">
      <div className="px-28 md:mt-5 md:px-6 mt-16 ">
        <Image src={resetLogo} width="319" height="490" alt="Logo" />
      </div>
      <div>
        <div className="page-main px-6 sm:p-0 flex justify-center md:items-center">
          <div className="mx-auto w-full xs:w-max  flex flex-col">
            <div className="mb-6 md:mb-12 text-center w-full lg:mt-0">
              <h2 className="font-semibold text-2xl xs:text-3xl sm:text-4xl !leading-56 tracking-wide text-black-600 font-poppins">
                Reset Your Password
              </h2>
            </div>
            <Formik
              initialValues={{ password: "", confirmPassword: "" }}
              onSubmit={handleResetSubmit}
              validationSchema={resetValidation}
            >
              <Form className="flex flex-col gap-8 md:px-7 w-full max-w-sm  mx-auto">
                <div className="flex flex-col gap-7">
                  <InputField
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-transparent focus:outline-none font-medium text-base leading-4 tracking-wide"
                  />
                  <InputField
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="bg-transparent focus:outline-none font-medium text-base leading-4 tracking-wide"
                  />
                </div>
                <div className="w-full">
                  <Button type="submit" className="py-3 disabled:bg-gray-500" disabled={isLoading}>
                    Change Password
                  </Button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ResetPassword;
