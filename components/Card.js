import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import CardLoader from "./cardLoader";
import MyModal from "./MyModal";

const Card = (props) => {
  const router = useRouter();
  const {isLoading} = useSelector((state)=>state.homePageSlice)

  return (
    <>
      {isLoading?<CardLoader />:
   
      <section
      onClick={() => router.push(`/${props.cars.vin}`)}
        className="card w-[984px] h-[330px] bg-[#FFFFFF] rounded-[10px] shadow-card-shadow overflow-hidden"
      >
        <div className="cmain w-full">
          <div className="ctop flex gap-6">
            <div className="ctleft rounded-tl-[10px] w-[360px] h-[254px]">
              <Image
                src={props.cars.photos?props.cars.photos[0]:"/defaultcar.png"}
                alt="logo"
                width={360}
                height={254}
              ></Image>
            </div>
            <div className="ctright pt-6 flex flex-col justify-between">
              <div className="ctrtop">
                <div className="font-bold text-xl leading-8 text-[#28293D]">
                  {props.cars.year} {props.cars.make} {props.cars.model}
                </div>
                <div className="font-normal text-xs leading-4 tracking-[0.2px] text-[#8F90A6]">
                  {props.cars.dealership} • {props.cars.milage} •{" "}
                  {props.cars.exterior_color}
                </div>
                <div className="font-normal text-xs leading-4 tracking-[0.2px] text-[#8F90A6]">
                  {props.cars.city}, {props.cars.state}
                </div>
              </div>
              <div className="ctrbottom flex gap-80 w-full">
                <div className="ctrbleft flex justify-center items-center gap-2">
                  <div className="font-semibold text-[28px] leadin-[38px] text-[#28293D]">
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "USD",
                      maximumSignificantDigits: 3,
                    }).format(props.cars.price)}
                  </div>
                  <div className="rounded-full text-white italic text-xs bg-[#8F90A6] w-4 h-4 flex justify-center items-center">
                    i
                  </div>
                </div>
                <div className="shadow-btn-shadow mb-6 gap-[2px] px-4 py-[6px] whitespace-nowrap  ctrbright card-btn w-[137px] h-[36px] text-white rounded-[10px] flex justify-center items-center">
                  <div onClick={(e)=>e.stopPropagation()} className="flex justify-center items-center w-full">
                    <MyModal></MyModal>
                  </div>
                  <div className="flex justify-center item-center mt-1 w-full">
                    <Image src={"/send.png"} width={22} height={22}></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cbottom flex flex-col h-[76px] bg-[#FFF8E6] justify-center items-start pl-6 ">
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
                { props.cars.car_offers && props.cars.car_offers.split(",")[0].replace(/[\[\]'"]+/g, "")}
              </div>
              <div className="bcontent2">
                •{" "}
                { props.cars.car_offers && props.cars.car_offers.split(",")[1].replace(/[\[\]'"]+/g, "")}
              </div>
            </div>
          </div>
        </div>
      </section>
       }
    </>
  );
};

export default Card;
