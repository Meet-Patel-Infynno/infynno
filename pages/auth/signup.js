import React from "react";
import { User, Logo, Lock, Mail } from "../../components/icons";
import SocialAuth from "../../components/auth/SocialAuth";
import { Formik, Form } from "formik";
import { signupValidation } from "../../util/validationSchema";
import InputField from "../../components/form/InputField";
import Button from "../../components/form/Button";
import Link from "next/link";
import CopyRight from "../../components/layout/CopyRight";
import Image from "next/image";
import WelcomeImage from "../../assets/images/welcomeImage.svg";

const Signup = () => {
  const handleSignupSubmit = (val) => {};
  return (
    <div className="flex max-w-screen-2xl 2xl:h-auto 2xl:mx-auto mt-0 2xl:mt-16">
      <div className="bg-orange-500 w-full max-w-2xl md:min-h-auth-screen 2xl:min-h-fit relative bg-back-image-welcome bg-center bg-cover lg:flex items-center justify-center px-16 hidden">
        <div className="absolute top-14 left-16">
          <Logo color="white" />
        </div>
        <div className="h-auto w-full max-w-lg ">
          <Image src={WelcomeImage} width="528" height="530" alt="background" />
        </div>
      </div>
      <div className="w-full flex justify-center items-center flex-col gap-28">
        <div className="w-full flex justify-center mt-12 lg:hidden">
          <Logo color="#FF6D04" />
        </div>
        <div className="lg:min-h-auth-screen 2xl:min-h-fit px-6 sm:p-0 flex justify-center items-center lg:mt-28">
          <div className="mx-auto w-full sm:w-max flex flex-col">
            <div className="mb-16 text-center w-full mt-16 lg:mt-0">
              <h2 className="font-semibold text-3xl md:text-4xl leading-56 tracking-wide text-black-600 font-poppins">
                Welcome
              </h2>
              <p className="font-normal text-2xl leading-10 tracking-wide text-gray-500">
                Create Your Account
              </p>
            </div>
            <Formik
              initialValues={{ name: "", email: "", password: "" }}
              onSubmit={handleSignupSubmit}
              validationSchema={signupValidation}
            >
              <Form className="flex flex-col w-full max-w-sm mx-auto gap-7">
                <InputField
                  type="name"
                  startIcon={<User />}
                  name="name"
                  placeholder="Name"
                  className="bg-transparent focus:outline-none font-medium text-base leading-4 tracking-wide"
                />
                <InputField
                  type="email"
                  startIcon={<Mail />}
                  name="email"
                  placeholder="Email"
                  className="bg-transparent focus:outline-none font-medium text-base leading-4 tracking-wide"
                />
                <InputField
                  type="password"
                  startIcon={<Lock />}
                  name="password"
                  placeholder="Password"
                  className="bg-transparent focus:outline-none font-medium text-base leading-4 tracking-wide w-full"
                />
                <Button className="py-3" type="submit">
                  Create account
                </Button>
              </Form>
            </Formik>
            <SocialAuth />
            <div className="w-full max-w-sm mx-auto">
              <p className="font-light text-sm sm:text-base leading-6 tracking-wide text-black-600 mt-4">
                Already have an account?
                <Link href="/auth/login">
                  <a className="text-orange-500">Sign In</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <CopyRight className="self-end" />
      </div>
    </div>
  );
};

export default Signup;
