import Link from "next/link";
import React from "react";
import {
  CardDiscover,
  CardVisa,
  CreditCard,
  FaceBook,
  Instagram,
  LinkedIn,
  Logo,
  Twitter,
} from "../icons";
import CopyRight from "./CopyRight";

const Footer = ({ showFooter }) => {
  return (
    <>
      <footer className="w-full max-w-screen-2xl mx-auto font-josefin">
        {showFooter && (
          <div className="mt-32 mb-24 flex flex-col justify-center items-center gap-11 px-8 md:px-0">
            <div>
              <Link href="/">
                <a>
                  <Logo className="text-orange-500" />
                </a>
              </Link>
            </div>
            <div className="w-full md:max-w-2xl max-w-md mx-auto">
              <p className="font-light text-sm md:text-xl text-center leading-5">
                {`Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled.`}
              </p>
            </div>
            <div className="text-center">
              <p className="font-normal text-black text-lg md:text-2xl leading-6">
                Connect with us on social media
              </p>
              <div className="flex gap-9 items-center w-max mx-auto mt-5">
                <FaceBook />
                <LinkedIn />
                <Twitter />
                <Instagram />
              </div>
            </div>
            <div>
              <p className="text-lg md:text-2xl text-black text-center leading-6">
                We accept
              </p>
              <div className="flex gap-2 items-center w-max">
                <CardDiscover />
                <CreditCard />
                <CardVisa />
              </div>
            </div>
          </div>
        )}
        <CopyRight showFooter={showFooter} />
      </footer>
    </>
  );
};

export default Footer;
