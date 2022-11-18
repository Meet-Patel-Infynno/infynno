import React from "react";
import { User, Logo, Lock, Mail } from "../../../components/icons";
import { Formik, Form } from "formik";
import { signupValidation } from "../../../util/validationSchema";
import InputField from "../../../components/form/InputField";
import Button from "../../../components/form/Button";
import Link from "next/link";
import CopyRight from "../../../components/layout/CopyRight";
import Image from "next/image";
import WelcomeImage from "../../../assets/images/welcomeImage.svg";
import { registerUser } from "../../../redux/reducers/AuthenticationSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../components/loader/Loading";

const Signup = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state) => state.authentication.userData.isLoading
  );
  const handleSignupSubmit = (val) => {
    dispatch(registerUser(val));
  };

  return (
    <div className="flex">
      <div className="bg-orange-500 w-full max-w-2xl md:min-h-auth-screen 2xl:min-h-fit relative bg-back-image-welcome bg-center bg-cover lg:flex items-center justify-center px-16 hidden">
        <div className="absolute top-14 left-16">
          <Link href="/">
            <a>
              <Logo className="text-white" />
            </a>
          </Link>
        </div>
        <div className="h-auto w-full max-w-lg ">
          <Image src={WelcomeImage} width="528" height="530" alt="background" />
        </div>
      </div>
      <div className="w-full flex justify-center items-center flex-col lg:gap-28">
        <div className="w-full flex justify-center mt-12 lg:hidden">
          <Link href="/">
            <a>
              <Logo className="text-orange-500" />
            </a>
          </Link>
        </div>
        <div className="mb-28 lg:mb-0 lg:min-h-auth-screen 2xl:min-h-fit px-6 sm:p-0 flex justify-center items-center lg:mt-28">
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
                <Button
                  className="py-3 disabled:bg-gray-500"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? <Loading /> : "Create Account"}
                </Button>
              </Form>
            </Formik>
            <div className="w-full max-w-sm mx-auto">
              <p className="font-light text-sm sm:text-base leading-6 tracking-wide text-black-600 mt-4">
                Already have an account?
                <Link href="/auth/user/login">
                  <a className="text-orange-500"> Sign In</a>
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
