import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <section className="navbar flex justify-center items-center bg-white h-[68px] border-b border-[#E4E4EB]">
      <div className="mainnav flex h-[68px] gap-[301px] items-center pt-4 pb-4">
        <div className="left flex gap-9 uppercase font-semibold text-xs leading-5 text-[#28293D]">
          <div className="item1">How it works</div>
          <div className="item2">Why us</div>
          <div className="item3">Contact us</div>
        </div>
        <div className="middle">
          <div className="logo">
            <Image src="/autodigg.png" width={132} height={36}></Image>
          </div>
        </div>
        <div className="right flex justify-center items-center gap-9">
          <div className="carsale flex justify-center items-center flex-col gap-[5px]">
            <div className="flex justify-center items-center text-[12px] gap-1">
              <Image src="/car.png" width={24} height={20}></Image>
              <div className=" uppercase font-semibold text-xs leading-5 text-[#FF8800]">
                Used cars for sale
              </div>
            </div>
            <span className="w-full h-[3px] bg-[#FF8800]"></span>
          </div>
          <div className="login">
            <button className="  rounded-[13px] px-5 py-2 uppercase bg-[#28293D] font-semibold text-xs leading-5 text-white">
              Sign in/ Register
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
