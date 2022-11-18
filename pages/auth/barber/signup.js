import React from "react";
import { User, Logo, Lock, Mail } from "../../../components/icons";
import { Formik, Form } from "formik";
import { barberSignupValidation } from "../../../util/validationSchema";
import InputField from "../../../components/form/InputField";
import Button from "../../../components/form/Button";
import Link from "next/link";
import CopyRight from "../../../components/layout/CopyRight";
import Image from "next/image";
import WelcomeImage from "../../../assets/images/welcomeImage.svg";
import { registerBarber } from "../../../redux/reducers/AuthenticationSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../components/loader/Loading";
import TextAreaField from "../../../components/form/TextAreaField";

const Signup = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(
    (state) => state.authentication.userData.isLoading
  );
  const handleSignupSubmit = (val) => {
    const formData = new FormData();
    Object.entries(val)?.map((key) => {
      formData.append(key[0], key[1]);
    });

    dispatch(registerBarber(formData));
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
              initialValues={{
                first_name: "",
                last_name: "",
                phone_number: "",
                address: "",
                city: "",
                state: "",
                zip_code: "",
                id_proof: "",
                shop_name: "",
                profile_image: "",
                about_us: "",
              }}
              onSubmit={handleSignupSubmit}
              validationSchema={barberSignupValidation}
            >
              {({ setFieldValue, values }) => (
                <Form
                  encType="multipart/form-data"
                  className="flex flex-col w-full md:px-10 xl:px-0 lg:max-w-lg xl:max-w-none mx-auto gap-7"
                >
                  <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-6">
                    <InputField
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      className="bg-transparent focus:outline-none font-medium text-base leading-4 tracking-wide"
                    />
                    <InputField
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      className="bg-transparent focus:outline-none font-medium text-base leading-4 tracking-wide"
                    />
                    <InputField
                      type="text"
                      name="phone_number"
                      placeholder="Phone Number"
                      className="bg-transparent focus:outline-none font-medium text-base leading-4 tracking-wide w-full"
                    />
                    <InputField
                      type="text"
                      name="address"
                      placeholder="Address"
                      className="bg-transparent focus:outline-none font-medium text-base leading-4 tracking-wide w-full"
                    />
                    <InputField
                      type="text"
                      name="city"
                      placeholder="City"
                      className="bg-transparent focus:outline-none font-medium text-base leading-4 tracking-wide w-full"
                    />
                    <InputField
                      type="text"
                      name="state"
                      placeholder="State"
                      className="bg-transparent focus:outline-none font-medium text-base leading-4 tracking-wide w-full"
                    />
                    <InputField
                      type="text"
                      name="zip_code"
                      placeholder="Zip Code"
                      className="bg-transparent focus:outline-none font-medium text-base leading-4 tracking-wide w-full"
                    />
                    <InputField
                      type="text"
                      name="shop_name"
                      placeholder="Shop Name"
                      className="bg-transparent focus:outline-none font-medium text-base leading-4 tracking-wide w-full"
                    />
                    <div className="col-span-2">
                      <InputField
                        type="file"
                        name="id_proof"
                        label="ID Proof"
                        labelClassName="text-gray-400 py-3"
                        placeholder="Select File"
                        onChange={(event) => {
                          setFieldValue(
                            "id_proof",
                            event.currentTarget.files[0]
                          );
                        }}
                        value={undefined}
                        className="bg-transparent  px-0 file:h-full file:border-none file:mr-8 file:bg-gray-600 file:text-black-600 file:py-3 py-0 file:rounded-tl-md file:rounded-bl-md focus:outline-none font-medium text-base leading-4 tracking-wide w-full"
                      />
                    </div>
                    <div className="col-span-2">
                      <InputField
                        type="file"
                        name="profile_image"
                        label="Profile Image"
                        labelClassName="text-gray-400 py-3"
                        onChange={(event) => {
                          setFieldValue(
                            "profile_image",
                            event.currentTarget.files[0]
                          );
                        }}
                        value={undefined}
                        className="bg-transparent px-0 file:border-none  file:mr-8 file:bg-gray-600 file:text-black-600 file:py-3 py-0 file:rounded-tl-md file:rounded-bl-md focus:outline-none font-medium text-base leading-4 tracking-wide w-full"
                      />
                    </div>
                    <div className="col-span-2">
                      <TextAreaField
                        type="text"
                        name="about_us"
                        cols="30"
                        rows="6"
                        placeholder="About Us..."
                        className="bg-transparent focus:outline-none font-medium text-base leading-4 tracking-wide w-full"
                      />
                    </div>
                  </div>
                  <Button
                    className="py-3 disabled:bg-gray-500"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? <Loading /> : "Create Account"}
                  </Button>
                </Form>
              )}
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
