import React from "react";
import SocialAuth from "../../components/auth/SocialAuth";
import { Formik, Form } from "formik";
import { loginValidation } from "../../util/validationSchema";
import InputField from "../../components/form/InputField";
import Button from "../../components/form/Button";
import Link from "next/link";
import { User, Lock } from "../../components/icons";
import BackArrow from "../../components/layout/BackArrow";

const Login = () => {
  const handleLoginSubmit = (val) => {};
  return (
    <div className="px-6 sm:p-0 flex justify-between items-center mb-9 relative min-h-screen">
      <div className="absolute top-7 left-7 sm:left-14 md:left-24 md:top-14" >
        <BackArrow />
      </div>
      <div className="mx-auto w-full sm:w-max flex flex-col mt-8 md:mt-0">
        <div className="mb-16 text-center w-full mt-16 lg:mt-0">
          <h2 className="font-semibold leading-10 text-3xl md:text-4xl md:leading-56 tracking-wide text-black-600 font-poppins">
            Login to Cinderella
          </h2>
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleLoginSubmit}
          validationSchema={loginValidation}
        >
          <Form className="w-full max-w-sm mx-auto">
            <div className="flex flex-col gap-7">
              <InputField
                type="email"
                startIcon={<User />}
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
            </div>
            <div className="w-full text-right mb-2">
              <Link href="/auth/forgot-password">
                <a className="w-full font-medium leading-5 h-7 mt-1 mb-1 text-xs tracking-wide text-gray-400">
                  Forgot Password?
                </a>
              </Link>
            </div>
            <Button className="py-3" type="submit">
              Login
            </Button>
          </Form>
        </Formik>
        <SocialAuth />
        <div className="w-full max-w-sm mx-auto">
          <p className="font-light text-sm sm:text-base leading-6 tracking-wide text-black-600 mt-4">
            Didn’t have an account?
            <Link href="/auth/signup">
              <a className="text-orange-500">Sign up</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
