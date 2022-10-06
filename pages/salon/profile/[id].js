import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import blogImg from "../../../assets/images/blog.svg";
import ServiceImg from "../../../assets/images/barberService.svg";
import BarberProfileCard from "../../../components/salon/BarberProfileCard";

const Salon = () => {
  const router = useRouter();
  const { id } = router.query;
  const services = [
    "Hair cut",
    "Facial",
    "Hair colors",
    "Hair spa",
    "Makeup",
    "Hair colors",
    "Hair spa",
    "Makeup",
    "Hair cut",
    "Massages",
    "Hair styles",
    "Body spa",
  ];
  const photos = [
    "Hair cut",
    "Facial",
    "Hair colors",
    "Hair spa",
    "Makeup",
    "Hair colors",
  ];

  return (
    <>
      <section className="font-josefin w-full flex justify-center px-6">
        <div className="w-full md:overflow-hidden h-52 md:h-80 absolute top-0 -z-20 ">
          <Image
            src={blogImg}
            layout="fill"
            objectFit="cover"
            objectPosition={"top"}
            alt="img"
          />
        </div>
        <div className="max-w-6xl mt-32 md:mt-56 lg:mt-52 grid md:grid-cols-[34%_58%] lg:grid-cols-[30%_65%] justify-between w-full">
          <BarberProfileCard className="hidden md:block" />
          <div className="py-5  ">
            <div className="flex justify-between lg:mb-14">
              <div className="w-ful">
                <h2 className="font-semibold md:text-3xl lg:text-5xl text-white">
                  Barber shop
                </h2>
                <p className="font-normal lg:text-2xl text-white">
                  Surat, india
                </p>
              </div>
              <div className="flex gap-2 md:gap-9">
                <div className="flex flex-col justify-center items-center">
                  <p className="font-normal lg:text-2xl tracking-wide text-white">
                    6
                  </p>
                  <p className="font-light lg:text-2xl tracking-wide text-white">
                    photos
                  </p>
                </div>
                <div className="bg-white border border-white"></div>
                <div className="flex flex-col justify-center items-center">
                  <p className="font-normal lg:text-2xl tracking-wide text-white">
                    300
                  </p>
                  <p className="font-light lg:text-2xl tracking-wide text-white">
                    Followers
                  </p>
                </div>
              </div>
            </div>
            <BarberProfileCard className="block mt-12 md:hidden" />
            <div className=" mt-10 lg:mt-20 w-full">
              <h2 className="font-medium text-4xl leading-10 text-black mb-6 md:mb-16 ">
                Services
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-x-16 md:gap-y-8 w-full">
                {services.map((data, index) => {
                  return (
                    <div
                      className="px-4 w-full max-w-180 h-12 border flex justify-center items-center truncate border-orange-500 rounded-md"
                      key={index}
                    >
                      <h2 className="w-full flex justify-center items-center font-normal text-2xl leading-6 text-black">
                        {data}
                      </h2>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 w-full mt-14 flex flex-col justify-center items-center font-josefin">
        <div className="max-w-6xl flex flex-col gap-5 md:gap-12 w-full">
          <h2 className="w-full font-medium text-4xl text-black">Photos</h2>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 md:gap-x-6 lg:gap-12 2xl:gap-y-28 md:px-20">
            {photos.map((data, index) => {
              return (
                <div key={index}>
                  <Image src={ServiceImg} alt="img" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 w-full mt-14 md:mt-20 font-josefin flex flex-col justify-center items-center">
        <div className="max-w-6xl w-full flex flex-col gap-5 md:gap-12">
          <h2 className="font-medium text-4xl text-black">About</h2>
          <p className="font-light text-xl text-black">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p className="font-light text-xl text-black">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p className="font-light text-xl text-black">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </section>
    </>
  );
};

export default Salon;
