import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer bg-[#28293D] flex justify-center items-center ">
        <div className="mainfooter flex flex-col justify-center items-center w-full">
          <div className="tfooter flex justify-center items-center gap-[350px] h-[232px] w-full">
            <div className="tleft flex flex-col justify-center items-start gap-6">
              <Image src="/flogo.png" width={132} height={36}></Image>
              <div className="tlcontent w-[424px] font-normal text-sm text-[#8F90A6] leading-6">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </div>
            </div>
            <div className="tright flex flex-col justify-center items-end gap-[78px]">
              <div className="flex justify-center items-center gap-9">
                <Image src="/facebook.png" width={45} height={45}></Image>
                <Image src="/twitter.png" width={45} height={45}></Image>
                <Image src="/instagram.png" width={45} height={45}></Image>
              </div>
              <div className="flex justify-center items-center gap-8 font-medium text-sm leading-6 text-white">
                <div>How it works</div>
                <div>Blog</div>
                <div>Frequently asked questions</div>
                <div>Are you a dealer?</div>
                <div>Contact us</div>
              </div>
            </div>
          </div>
          <div className="bfooter bg-[#1C1C28] w-full flex justify-center items-center gap-[1003px] w-full h-[60px]">
            <div className="bleft text-[#8F90A6] text-[10px] leading-3 font-normal text-center">
              © AutoDigg 2021. All Rights Reserved.
            </div>
            <div className="bright flex justify-center items-center gap-8 text-white text-[10px] leading-4 font-semibold">
              <div>Terms of Service</div>
              <div>Privacy Policy</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
