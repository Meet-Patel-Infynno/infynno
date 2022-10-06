import Image from "next/image";
import React from "react";
import confiramImae from "../../assets/images/confirmation.svg";
import Button from "../form/Button";

const Confirmation = () => {
  const array = [
    "Hair cut",
    "Facial",
    "Hair colors",
    "Hair treatments",
    "Body treatments",
  ];
  return (
    <section className="w-full flex justify-center items-center font-josefin px-2">
      <div className="max-w-4xl py-12 px-5 w-full bg-appointment-form shadow-confirmation-shadow flex flex-col justify-center items-center">
        <div className="mb-12 w-full">
          <h2 className="font-josefin font-medium text-center text-3xl text-orange-500">
            Thank you for confirmation
          </h2>
        </div>
        <div className="flex flex-col md:flex-row lg:grid lg:grid-cols-2 gap-10 lg:gap-18 lg:px-8 justify-center items-start w-full">
          <div className="flex flex-col gap-2 w-full xs:justify-center xs:items-center">
            <div className="w-full">
              <Image src={confiramImae} layout="responsive" alt="img" />
            </div>
            <div className="flex justify-between items-center w-full px-3">
              <div>
                <h2 className="font-medium text-lg md:text-2xl text-black-600">
                  Barber Shop
                </h2>
                <p className="text-xs font-normal text-black">Surat, india</p>
              </div>
              <div className="flex flex-col justify-center items-end">
                <p className="font-medium text-xs text-gray-500">
                  Color expert
                </p>
                <p className="font-medium text-xs text-black-600">
                  20+ Yrs Experience
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-5">
              <h2 className="font-semibold text-base text-black-600">
                5.0 ⭐⭐⭐⭐⭐
              </h2>
              <p className="font-normal text-base text-black-600">
                123 Reviews
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center w-full px-5">
            <h3 className="font-josefin font-medium md:text-left w-full mb-6 text-3xl text-black">
              Services
            </h3>
            <div className="w-full flex flex-col gap-6  ">
              {array.map((data, index) => {
                return (
                  <div key={index} className="flex justify-between">
                    <div className="font-josefin font-normal text-2xl text-gray-200">
                      <p>{data}</p>
                    </div>
                    <div className="font-josefin font-normal text-lg text-yellow-600">
                      <p>.......$15</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-full border border-gray-200 h-0 bg-gray-200"></div>
            <div className="flex justify-between w-full">
              <p className="font-josefin font-normal text-2xl text-gray-200">
                Total
              </p>
              <p className="font-josefin font-normal text-lg text-yellow-600">
                $60
              </p>
            </div>
            <div className="w-full flex justify-center items-center mt-5">
              <Button className={"py-3 max-w-180"}>Download</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Confirmation;
