import Image from "next/image";
import React from "react";
import Button from "../form/Button";
import { Call, Message, More } from "../icons";
import barberImg from "../../assets/images/barber.svg";
import classNames from "classnames";

const BarberProfileCard = ({ className }) => {
  return (
    <div className={classNames("relative", className)}>
      <div className="relative">
        <Image
          src={barberImg}
          className="rounded-md"
          layout="responsive"
          alt="img"
        />
        <div className="absolute w-full flex justify-center gap-5 lg:gap-11 items-center bottom-5">
          <Button className="py-2 max-w-180 rounded-3xl w-full">
            Follow barber
          </Button>
          <More className="text-white" />
        </div>
      </div>
      <div className="max-w-365 flex flex-col gap-6 bg-white w-full py-7 rounded-md">
        <div className="flex flex-col gap-6 bg-white w-full px-14">
          <div>
            <p className="font-semibold text-base text-black-600">
              5.0 ⭐⭐⭐⭐⭐
            </p>
            <p className="font-normal text-base text-black-600">123 Reviews</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-normal text-xl text-black">About</h2>
            <p className="font-light text-xs text-black">
              Lorem Ipsum has been the industry`&apos;` standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-3 2xl:gap-8 px-6">
          <Button className="py-3 truncate gap-2 2xl:gap-3 whitespace-nowrap rounded-xl">
            <Call className="h-4 w-4" /> Call Now
          </Button>
          <Button
            bgColor="bg-transperent"
            className="border border-orange-500 px-2 whitespace-nowrap py-3 gap-2 2xl:gap-3 rounded-xl"
            textColor="text-black"
          >
            <Message className="w-4 h-4" /> Chat Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BarberProfileCard;
