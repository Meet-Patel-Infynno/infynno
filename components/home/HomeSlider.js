import Image from "next/image";
import React from "react";
import HomeBackground from "../../assets/images/home-back.svg";
import Button from "../form/Button";
import { EditNote } from "../icons";
import Slider from "react-slick";

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoPlay: true,
  };
  return (
    <div className="home-slider flex h-full justify-center items-center flex-col gap-44 relative">
      <div className="relative max-w-screen-3xl w-full">
        <Slider {...settings}>
          <div className="relative slide-container h-screen overflow-hidden w-full max-w-screen">
            <Image
              src={HomeBackground}
              layout="fill"
              objectFit="cover"
              alt="hero background"
            />
          </div>
          <div className="relative slide-container h-screen overflow-hidden w-full max-w-screen">
            <Image
              src={HomeBackground}
              layout="fill"
              objectFit="cover"
              alt="hero background"
            />
          </div>
        </Slider>
      </div>
      <div className="flex h-max gap-12 lg:gap-40 justify-between items-center flex-col absolute">
        <div className="flex flex-col gap-5 max-w-xs xs:max-w-sm sm:max-w-none px-5">
          <h2 className="max-w-lg lg:leading-45 mx-auto font-bold font-josefin text-white text-2xl xs:text-3xl lg:text-4xl text-center">
            BEST PLACE FOR YOU <span className="text-orange-500">BEAUTY</span> &
            <span className="text-orange-500"> RELAXATION</span>
          </h2>
          <p className="font-light font-josefin text-white text-xl xs:text-2xl lg:text-3xl leading-8 text-center">
            Welcome to beauty lab, where you can relax and enjoy life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
