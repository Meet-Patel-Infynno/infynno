import React from "react";
import Button from "../form/Button";
import { Apple, Google } from "../icons";

const SocialAuth = () => {
  return (
    <div className="flex flex-col pt-6 w-full max-w-sm mx-auto">
      <div className="w-full flex items-center justify-between gap-4">
        <span className="bg-gray-500 h-0.4 w-full"></span>
        <p className="font-normal text-xs leading-5 text-gray-400">Or</p>
        <span className="bg-gray-500 h-0.4 w-full"></span>
      </div>
      <div className="pt-7">
        <div className="flex flex-col gap-7 w-full">
          <Button
            className="border border-solid border-gray-400 py-3 px-9 gap-5 sm:gap-8 md:justify-start"
            bgColor="bg-transparent"
          >
            <Apple />
            <p className="font-medium text-sm sm:text-base leading-6 tracking-wide text-gray-400">
              Continue with apple
            </p>
          </Button>
          <Button
            className="border border-solid border-gray-400 py-3 px-9 gap-5 sm:gap-8 md:justify-start"
            bgColor="bg-transparent"
          >
            <Google />
            <p className="font-medium text-sm sm:text-base leading-6 tracking-wide text-gray-400">
              Continue with google
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SocialAuth;
