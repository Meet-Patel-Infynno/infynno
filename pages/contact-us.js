import { Form, Formik } from "formik";
import React from "react";
import Button from "../components/form/Button";
import InputField from "../components/form/InputField";
import { Logo } from "../components/icons";
import { resetValidation } from "../util/validationSchema";

const ContactUs = () => {
  const handleResetSubmit = (val) => {};
  return (
    <section className="flex w-full justify-center 3xl:max-w-screen-2xl mx-auto">
      <div className="bg-contact-image md:max-w-654 hidden md:block md:w-full backdrop-blur-35 md:px-10 xl:px-20 py-14">
        <Logo color="#FF6D04" />
      </div>
      <div className="flex flex-col px-8 w-full py-16 gap-16">
        <div className="w-full xl:flex hidden justify-center font-josefin gap-11 font-normal text-2xl leading-6 text-black">
          <div className="cursor-pointer">Home</div>
          <div className="cursor-pointer">Services</div>
          <div className="cursor-pointer">Blog</div>
          <div className="cursor-pointer">Contact Us </div>
        </div>
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
                firstname: "",
                lastname: "",
                email: "",
                message: "",
              }}
              validationSchema={resetValidation}
              onSubmit={handleResetSubmit}
            >
              <Form className="w-full flex flex-col gap-6 md:gap-10">
                <div className="flex flex-wrap md:flex-nowrap gap-6 md:gap-5 w-full">
                  <InputField
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    className="bg-transparent focus:outline-none font-medium text-base leading-4 tracking-wide"
                  />
                  <InputField
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    className="bg-transparent focus:outline-none font-medium text-base leading-4 tracking-wide"
                  />
                </div>
                <div>
                  <InputField
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-transparent focus:outline-none font-medium text-base leading-4 tracking-wide"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="6"
                    placeholder="Your message here..."
                    className="bg-transparent focus:outline-none font-medium text-base leading-4 tracking-wide w-full py-3 px-3 rounded-md flex justify-start items-center border border-gray-300"
                  ></textarea>
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
      </div>
    </section>
  );
};

export default ContactUs;
