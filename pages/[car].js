import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import Gallery from "../components/Gallery";
import Head from "next/head";
import { RWebShare } from "react-web-share";

export async function getServerSideProps(context) {
  const { car } = context.params;

  const carDetail = await axios.get(
    `https://autodigg.com/ad-api/cars/list?vin=${car}`
  );
  const carDetails = carDetail.data[0];

  return {
    props: {
      carDetails,
    },
  };
}

const Car = ({ carDetails }) => {
  const router = useRouter();
  const car = router.query.car;
  const cararr = carDetails.features1.split(",");

  return (
    <>
      <Head>
        <meta property="og:image" content={carDetails.photos[0]} />

        <meta property="og:title" content="Cars" />

        <meta
          property="og:description"
          content="A full description of the page."
        />

        <meta property="og:image:width" content="1200" />

        <meta property="og:image:height" content="630" />
      </Head>
      <section className="detail max-w-[1520px] mx-auto">
        <div className="dmain">
          <div className="d-top">
            <div className="dt-info flex justify-between h-[160px] px-[72px] bg-white items-center">
              <div className="dti-left flex gap-4">
                <div className="backarrow ">
                  <Link href="/">
                    <Image src={"/backar.png"} width={60} height={60}></Image>
                  </Link>
                </div>
                <div className="dtil-title">
                  <div className="dt-basicinfo ">
                    <div className="carname flex justify-center items-center font-bold text-[32px] lead-[44px] text-[#28293D]">
                      {carDetails.year} {carDetails.make} {carDetails.model}
                    </div>
                  </div>
                  <div className="font-normal text-base leading-6 tracking-[0.2px] text-[#8F90A6]">
                    {carDetails.dealership} • {carDetails.milage} •{" "}
                    {carDetails.exterior_color}
                  </div>
                  <div className="font-normal text-base leading-6 tracking-[0.2px] text-[#8F90A6]">
                    {carDetails.city}, {carDetails.state}
                  </div>
                </div>
                <div>
                  <RWebShare
                    data={{
                      text: "Like humans, flamingos make friends for life",
                      url: "https://infynno-3zbu9ji3l-meet-patel1501.vercel.app/KL8CB6SA3NC026445",
                      title: "Share this article on Flamingos",
                    }}
                    onClick={() => console.info("share successful!")}
                  >
                    <button className="share-btn">Share</button>
                  </RWebShare>
                </div>
              </div>
              <div className="dti-right flex justify-center items-center gap-6">
                <div className="dt-info-isymbol flex items-center gap-2">
                  <div className="dt-priice font-semibold text-[28px] leading-[38px] text-[#28293D]">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "USD",
                      maximumSignificantDigits: 3,
                    }).format(carDetails.price)}
                  </div>
                  <div className="rounded-full text-white italic text-xs bg-[#8F90A6] w-4 h-4 flex justify-center items-center">
                    i
                  </div>
                </div>
                <div className="dt-btn">
                  <div className="shadow-btn-shadow gap-[2px] px-4 py-[6px] whitespace-nowrap  ctrbright card-btn w-[137px] h-[36px] text-white rounded-[10px] flex justify-center items-center">
                    <button className="flex justify-center items-center w-full">
                      Invite dealer
                    </button>
                    <div className="flex justify-center item-center mt-1 w-full">
                      <Image src={"/send.png"} width={22} height={22}></Image>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="cbottom flex flex-col px-[150px] h-[108px] bg-[#FFF8E6] justify-center items-start">
                <div className="btop flex gap-1">
                  <div className="btlogo">
                    <Image src={"/star.png"} width={15} height={15}></Image>
                  </div>
                  <div className="btcontent font-semibold text-xs leading-5 uppercase text-[#05A660]">
                    Special offers
                  </div>
                </div>
                <div className="bbottom flex gap-4 font-normal text-sm leading-6 text-[#28293D]">
                  <div className="bcontent1">
                    •{" "}
                    {carDetails.car_offers &&
                      carDetails.car_offers
                        .split(",")[0]
                        .replace(/[\[\]'"]+/g, "")}
                  </div>
                  <div className="bcontent2">
                    •{" "}
                    {carDetails.car_offers &&
                      carDetails.car_offers
                        .split(",")[1]
                        .replace(/[\[\]'"]+/g, "")}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[64px]">
            <div className="slick-slider h-[828px">
              <Gallery imgUrl={carDetails.photos} />
            </div>
            <div className="cdetail px-[60px]">
              <div className="bg-white flex flex-col gap-9 h-auto p-[36px] rounded-[10px] shadow-car-detail">
                <div className="cdtitle font-bold text-[32px] leading-[44px] text-[#28293D]">
                  Car details
                </div>
                <div className="flex flex-col flex-wrap gap-6 max-h-[284px]">
                  <div className="cddetail flex gap-4">
                    <div className="cdlogo">
                      <Image
                        src={"/cartype.png"}
                        width={40}
                        height={40}
                      ></Image>
                    </div>
                    <div className="cddetail">
                      <div className="font-semibold text-xs leading-4 uppercase text-[#8F90A6]">
                        Car type
                      </div>
                      <div className="font-medium text-sm leading-5 text-[#28293D]">
                        {carDetails.car_type}
                      </div>
                    </div>
                  </div>
                  <div className="cddetail flex gap-4">
                    <div className="cdlogo">
                      <Image
                        src={"/mileage.png"}
                        width={40}
                        height={40}
                      ></Image>
                    </div>
                    <div className="cddetail">
                      <div className="font-semibold text-xs leading-4 uppercase text-[#8F90A6]">
                        Mileage
                      </div>
                      <div className="font-medium text-sm leading-5 text-[#28293D]">
                        {carDetails.milage.toLocaleString("en-US")}
                      </div>
                    </div>
                  </div>
                  <div className="cddetail flex gap-4">
                    <div className="cdlogo">
                      <Image
                        src={"/cartype.png"}
                        width={40}
                        height={40}
                      ></Image>
                    </div>
                    <div className="cddetail">
                      <div className="font-semibold text-xs leading-4 uppercase text-[#8F90A6]">
                        trim
                      </div>
                      <div className="font-medium text-sm leading-5 text-[#28293D]">
                        {carDetails.trim}
                      </div>
                    </div>
                  </div>
                  <div className="cddetail flex gap-4">
                    <div className="cdlogo">
                      <Image src={"/engine.png"} width={40} height={40}></Image>
                    </div>
                    <div className="cddetail">
                      <div className="font-semibold text-xs leading-4 uppercase text-[#8F90A6]">
                        engine
                      </div>
                      <div className="font-medium text-sm leading-5 text-[#28293D] max-w-[314px]">
                        {carDetails.engine_description}
                      </div>
                    </div>
                  </div>

                  <div className="cddetail flex gap-4">
                    <div className="cdlogo">
                      <Image src={"/year.png"} width={40} height={40}></Image>
                    </div>
                    <div className="cddetail">
                      <div className="font-semibold text-xs leading-4 uppercase text-[#8F90A6]">
                        year
                      </div>
                      <div className="font-medium text-sm leading-5 text-[#28293D]">
                        {carDetails.year}
                      </div>
                    </div>
                  </div>
                  <div className="cddetail flex gap-4">
                    <div className="cdlogo">
                      <Image
                        src={"/extcolor.png"}
                        width={40}
                        height={40}
                      ></Image>
                    </div>
                    <div className="cddetail">
                      <div className="font-semibold text-xs leading-4 uppercase text-[#8F90A6]">
                        Exterior color
                      </div>
                      <div className="font-medium text-sm leading-5 text-[#28293D]">
                        {carDetails.exterior_color}
                      </div>
                    </div>
                  </div>
                  <div className="cddetail flex gap-4">
                    <div className="cdlogo">
                      <Image
                        src={"/transmission.png"}
                        width={40}
                        height={40}
                      ></Image>
                    </div>
                    <div className="cddetail">
                      <div className="font-semibold text-xs leading-4 uppercase text-[#8F90A6]">
                        Transmission
                      </div>
                      <div className="font-medium text-sm leading-5 text-[#28293D]">
                        {carDetails.transmission}
                      </div>
                    </div>
                  </div>
                  <div className="cddetail flex gap-4">
                    <div className="cdlogo">
                      <Image src={"/vin.png"} width={40} height={40}></Image>
                    </div>
                    <div className="cddetail">
                      <div className="font-semibold text-xs leading-4 uppercase text-[#8F90A6]">
                        vin
                      </div>
                      <div className="font-medium text-sm leading-5 text-[#28293D]">
                        {carDetails.vin}
                      </div>
                    </div>
                  </div>
                  <div className="cddetail flex gap-4">
                    <div className="cdlogo">
                      <Image src={"/fuel.png"} width={40} height={40}></Image>
                    </div>
                    <div className="cddetail">
                      <div className="font-semibold text-xs leading-4 uppercase text-[#8F90A6]">
                        fuel
                      </div>
                      <div className="font-medium text-sm leading-5 text-[#28293D]">
                        {carDetails.fuel_type}
                      </div>
                    </div>
                  </div>
                  <div className="cddetail flex gap-4">
                    <div className="cdlogo">
                      <Image
                        src={"/drivetrain.png"}
                        width={40}
                        height={40}
                      ></Image>
                    </div>
                    <div className="cddetail">
                      <div className="font-semibold text-xs leading-4 uppercase text-[#8F90A6]">
                        Drivetrain
                      </div>
                      <div className="font-medium text-sm leading-5 text-[#28293D]">
                        {carDetails.drivetrain}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="cdetail px-[60px]">
                <div className="bg-white flex flex-col gap-9 h-auto p-[36px] rounded-[10px] shadow-car-detail">
                  <div className="cdtitle font-bold text-[32px] leading-[44px] text-[#28293D]">
                    Other features
                  </div>
                  <div className="features flex flex-wrap justify-between gap-8 h-auto">
                    {cararr?.map((data) => {
                      return (
                        <>
                          <p className=" font-medium text-sm leading-5 text-[#28293D] w-[360px]">
                            {data.replace(/[\[\]'"*]+/g, "")}
                          </p>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Car;
