import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import navlogo from "../../navlogo.svg";

const Footer = () => {
  return (
    <>
      <section className="footer bg-nav-rgba flex flex-col justify-center items-center">
        <div className="fmain flex justify-center items-center w-full p-[32px] border-solid border-fborder-rgba border-b-[1px]">
          <img src={navlogo} className="w-[144px]" alt="" />
        </div>
        <div className="fcontact w-full flex justify-center items-center p-[24px] border-solid border-fborder-rgba border-b-[1px]">
          <div className="fccontent flex justify-center items-center flex-col gap-[23px]">
            <div className="fctop">
              <p className="text-[rgb(200,200,200)] text-lg">Connect With Us</p>
            </div>
            <div className="fcbottom flex justify-center items-center gap-3 h-[48px]">
              <div className="border-solid rounded-full p-3 border-active-rgba border-[1px] w-[48px] h-[48px] flex justify-center items-center">
                <BsTwitter fill="rgb(255, 80, 0)"></BsTwitter>
              </div>
              <div className="border-solid rounded-full p-3 border-active-rgba border-[1px] w-[48px] h-[48px] flex justify-center items-center">
                <BsInstagram fill="rgb(255, 80, 0)"></BsInstagram>
              </div>
              <div className="border-solid rounded-full p-3 border-active-rgba border-[1px] w-[48px] h-[48px] flex justify-center items-center">
                <FaFacebookF fill="rgb(255, 80, 0)"></FaFacebookF>
              </div>
            </div>
          </div>
        </div>
        <div className="fcopy flex justify-between px-8 gap-[8px] h-[50px]">
          <div className="fcopyleft text-center p-[8px]">
            <p className="text-center text-sm text-white leading-[1.29] tracking-[0.25px]">
              Corporate Office: ONE BKC, Tower A, 12th &amp; 14th Floor, Unit
              1201 &amp; 1202 and 1401 &amp; 1402, Plot C-66, G Block, Bandra
              Kurla Complex, Bandra (East), Mumbai, Maharashtra-400051
            </p>
          </div>
          <div className="fcopyright text-sm text-white font-medium tracking-[1.25px] p-[8px]">
            <a className="mr-2">Careers |</a>
            <a className="mr-2">Help Desk |</a>
            <a className="mr-2">T&Cs |</a>
            <a className="mr-2">Privacy Policy |</a>
            <a className="mr-2">About Us |</a>
            <a className="mr-2">IND vs WI</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
