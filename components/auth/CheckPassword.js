import React from "react";
import Button from "../form/Button";
import BackArrow from "../layout/BackArrow";

const CheckPassword = () => {
  return (
    <div className="page-main min-h-auth-screen px-3 md:px-6 sm:p-0 flex flex-col justify-center items-center">
      <div className="absolute top-7 left-7 sm:left-14 md:left-24 md:top-14" >
        <BackArrow />
      </div>
      <div className="mx-auto max-w-lg px-3 py-7  md:px-16 md:py-9 text-center flex flex-col gap-20 rounded-md bg-gradient-main">
        <div className="w-full">
          <p className="text-black font-poppins text-center !leading-7 font-medium text-sm xs:text-base md:text-lg tracking-wide">
            Please check your email, We sent a link on your registered email
            address to create a new password
          </p>
        </div>
        <div className="w-full">
          <Button className="py-3">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default CheckPassword;
