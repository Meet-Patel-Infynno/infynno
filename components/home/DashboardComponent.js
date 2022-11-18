import React, { useEffect, useState } from "react";
import expert1Image from "../../assets/images/expert1.svg";
import expert2Image from "../../assets/images/expert2.svg";
import masterImage from "../../assets/images/master.svg";
import slateImage from "../../assets/images/slate.svg";
import orangeImage from "../../assets/images/orange.svg";
import Button from "../form/Button";
import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie";

const DashboardComponent = () => {
  const [Beautician, setIsBeautician] = useState(null);

  useEffect(() => {
    setIsBeautician(Cookies.get("Beautician") === "true" ? true : false);
  }, []);

  if (Beautician === null) {
    return null;
  }
  return (
    <>
      <section className="mt-32 md:mt-64 lg:mt-64 flex justify-center items-center">
        <div className="w-full max-w-lg flex flex-col gap-8 px-4">
          <div>
            <Link
              href={
                Beautician ? "/barber/appointment" : "/user/viewappointments"
              }
            >
              <a>
                <Button className="py-3 lg:py-6">
                  {Beautician ? "Appointments" : "View Appointment"}
                </Button>
              </a>
            </Link>
          </div>
          <div>
            <Link
              href={Beautician ? `/barber/salon/profile` : "/user/appointment"}
            >
              <a>
                <Button className="py-3 lg:py-6">
                  {Beautician ? "Set Avalibility" : "Book Appointment"}
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full font-josefin mt-14 md:mt-20 lg:mt-48 flex flex-col justify-center items-center">
        <div className="flex justify-between w-full items-center max-w-5xl lg:px-20 px-5 lg:mb-8 xl:px-0 md:mb-0 mb-8">
          <h2 className="font-medium text-xl lg:text-36 leading-9 text-black">
            Featured Barbers
          </h2>
          <p className="font-normal text-base lg:text-3xl text-black">
            View all
          </p>
        </div>
        <div className="flex flex-wrap px-16 md:px-2 w-full justify-center items-center">
          <div>
            <div>
              <Image src={expert1Image} width="304" height="386" alt="expert" />
            </div>
            <div className="relative -top-10 flex justify-center items-center">
              <Image src={slateImage} width="332" height="86" alt="slate" />
              <div className="absolute md:top-2 flex flex-col items-center justify-center">
                <p className="font-josefin font-normal text-xs md:text-base text-white">
                  Color Expert
                </p>
                <h2 className="font-josefin font-medium text-lg md:text-4xl text-white ">
                  Steve John
                </h2>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Image src={masterImage} alt="expert" />
            </div>
            <div className="relative -top-14 flex justify-center items-center">
              <Image src={orangeImage} width="332" height="86" alt="slate" />
              <div className="absolute md:top-2 flex flex-col items-center justify-center">
                <p className="font-josefin font-normal text-xs md:text-base text-white">
                  Color Expert
                </p>
                <h2 className="font-josefin font-medium text-lg md:text-4xl text-white">
                  Steve John
                </h2>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Image src={expert2Image} width="304" height="386" alt="expert" />
            </div>
            <div className="relative -top-10 flex justify-center items-center">
              <Image src={slateImage} width="332" height="86" alt="slate" />
              <div className="absolute md:top-2 flex flex-col items-center justify-center">
                <p className="font-josefin font-normal text-xs md:text-base text-white">
                  Color Expert
                </p>
                <h2 className="font-josefin font-medium text-lg md:text-4xl text-white">
                  Steve John
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardComponent;
