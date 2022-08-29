import React from 'react'

const CardLoader = () => {
  return (
    <section
      className="card w-[984px] h-[330px] bg-white animate-pulse rounded-[10px] shadow-card-shadow overflow-hidden"
    >
      <div className="cmain w-full">
        <div className="ctop animate-pulse  flex gap-6">
          <div className="ctleft animate-pulse bg-slate-400 rounded-[10px] w-[360px] h-[254px]">
            {/* <Image
              src={props.cars.photos ? props.cars.photos[0] : "/defaultcar.png"}
              alt="logo"
              width={360}
              height={254}
            ></Image> */}
          </div>
          <div className="ctright  pt-6 flex flex-col justify-between">
            <div className="ctrtop animate-pulse w-[280px] h-[60px] bg-slate-400 rounded-[8px]">
              <div className="font-bold text-xl leading-8 text-[#28293D]">
                {/* {props.cars.year} {props.cars.make} {props.cars.model} */}
              </div>
              <div className="font-normal  text-xs leading-4 tracking-[0.2px] text-[#8F90A6]">
                {/* {props.cars.dealership} • {props.cars.milage} •{" "}
                {props.cars.exterior_color} */}
              </div>
              <div className="font-normal text-xs leading-4 tracking-[0.2px] text-[#8F90A6]">
                {/* {props.cars.city}, {props.cars.state} */}
              </div>
            </div>
            <div className="ctrbottom flex gap-80 w-full">
              <div className="ctrbleft animate-pulse bg-slate-400 rounded-[8px] w-[120px] h-[40px] flex justify-center items-center gap-2">
                <div className="font-semibold  text-[28px] leadin-[38px] text-[#28293D]">
                  {/* {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "USD",
                    maximumSignificantDigits: 3,
                  }).format(props.cars.price)} */}
                </div>
                <div className="rounded-full animate-pulse text-white italic text-xs bg-[#8F90A6] w-4 h-4 flex justify-center items-center">
                  
                </div>
              </div>
              <div className="  animate-pulse shadow-btn-shadow mb-6 gap-[2px] px-4 py-[6px] whitespace-nowrap  ctrbright card-btn w-[137px] h-[36px] text-white rounded-[10px] flex justify-center items-center">
                <button className="flex justify-center items-center w-full">
                 
                </button>
                <div className=" animate-pulse flex justify-center item-center mt-1 w-full">
                  {/* <Image src={"/send.png"} width={22} height={22}></Image> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" animate-pulse cbottom flex flex-col h-[76px] bg-[#FFF8E6] justify-center items-start pl-6 ">
          <div className="btop flex gap-1">
            <div className="btlogo animate-pulse">
              {/* <Image src={"/star.png"} width={15} height={15}></Image> */}
            </div>
            <div className="animate-pulse btcontent font-semibold text-xs leading-5 uppercase text-[#05A660]"></div>
          </div>
          <div className="bbottom animate-pulse flex gap-4 font-normal text-sm leading-6 text-[#28293D]">
            <div className="bcontent1">
              {/* •{" "}
              {props.cars.car_offers &&
                props.cars.car_offers.split(",")[0].replace(/[\[\]'"]+/g, "")} */}
            </div>
            <div className="bcontent2">
              {/* •{" "}
              {props.cars.car_offers &&
                props.cars.car_offers.split(",")[1].replace(/[\[\]'"]+/g, "")} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardLoader
