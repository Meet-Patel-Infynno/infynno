import Image from "next/image";
import React from "react";

const NoCars = () => {
  return (
    <div className="noCars flex flex-col shadow-noCar-shadow mb-[-50px] w-full h-[512px] justify-center items-center gap-5">
      <div className="img">
        <Image src={"/noCars.png"} width={312} height={312}></Image>
      </div>
      <div className="nobigtitle leading-[1.5] text-[rgb(40,41,61)] font-bold text-xl">
        No cars found to match your search
      </div>
      <div className="nosmalltitle font-normal leading-[1.5] text-[rgb(143,144,166)] text-base">
        Try searching for different cars or changing filters
      </div>
    </div>
  );
};

export default NoCars;
