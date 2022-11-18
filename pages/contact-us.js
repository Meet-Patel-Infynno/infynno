import { Form, Formik } from "formik";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../components/form/InputField";
import TextAreaField from "../components/form/TextAreaField";
import { Logo } from "../components/icons";
import MainNav from "../components/layout/MainNav";
import Loading from "../components/loader/Loading";
import { contactUs } from "../redux/reducers/ContactUsSlice";
import { contactUsValidation } from "../util/validationSchema";
import Button from "../components/form/Button";

const ContactUs = () => {
  const { isLoading, errors } = useSelector((state) => ({
    isLoading: state.contactus.isLoading,
    errors: state.contactus.errors,
  }));
  const dispatch = useDispatch();
  const handleSubmit = (val, { resetForm }) => {
    dispatch(contactUs(val));
    resetForm();
  };
  return (
    <section className="flex w-full justify-center 3xl:max-w-screen-3xl mx-auto">
      <div className="bg-contact-image md:max-w-654 hidden md:block md:w-full backdrop-blur-35 md:px-10 xl:px-20 py-14">
        <Link href="/">
          <a>
            <Logo className="text-orange-500" />
          </a>
        </Link>
      </div>
      <div className="flex flex-col px-8 w-full py-16 gap-16">
        <MainNav
          showAuthButtons={false}
          className="font-josefin w-max justify-start md:justify-center font-normal text-2xl leading-6 !text-black md:w-full gap-11"
          menuIconClassName="text-black text-10"
        />
        <div className="flex justify-center flex-col items-center gap-6 md:gap-10">
          <div className="flex flex-col gap-4 md:gap-6 justify-center max-w-xl">
            <div className="font-semibold text-black font-poppins text-xl xs:text-2xl md:text-3xl xl:text-4xl xl:pr-32">
              <h2> Let’s Give Your Business A Boost </h2>
            </div>
            <div className="smt font-light text-xs xs:text-sm md:text-lg xl:text-xl text-black font-josefin">
              <p>
                the 1500s, when an unknown printer took a galley of type. Lorem
                Ipsum has been the industry’s standard dummy text ever since
              </p>
            </div>
          </div>
          <div className="bottom w-full max-w-xl">
            <Formik
              initialValues={{
                first_name: "",
                last_name: "",
                email: "",
                message: "",
              }}
              validationSchema={contactUsValidation}
              onSubmit={handleSubmit}
            >
              <Form className="w-full flex flex-col gap-6 md:gap-10">
                <div className="flex flex-wrap md:flex-nowrap gap-6 md:gap-5 w-full">
                  <div className="flex flex-col w-full">
                    <InputField
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      className="bg-transparent focus:outline-none font-medium text-base leading-4 tracking-wide"
                    />
                    {errors?.first_name && (
                      <p className="text-red-600">{errors?.first_name}</p>
                    )}
                  </div>
                  <div className="flex flex-col w-full">
                    <InputField
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      className="bg-transparent focus:outline-none font-medium text-base leading-4 tracking-wide"
                    />
                    {errors?.last_name && (
                      <p className="text-red-600">{errors?.last_name}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <InputField
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-transparent focus:outline-none font-medium text-base leading-4 tracking-wide"
                  />
                </div>
                {errors?.email && (
                  <p className="text-red-600">{errors?.email}</p>
                )}
                <div className="flex- flex-col w-full">
                  <TextAreaField
                    type="text"
                    name="message"
                    cols="30"
                    rows="6"
                    placeholder="Your message here..."
                  />
                  {errors?.message && (
                    <p className="text-red-600">{errors?.message}</p>
                  )}
                </div>
                <div className="w-full">
                  <Button
                    type="submit"
                    className="py-3 disabled:bg-gray-500"
                    disabled={isLoading}
                  >
                    {isLoading ? <Loading /> : "Submit"}
                  </Button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
