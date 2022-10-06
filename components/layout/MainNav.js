import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Button from "../form/Button";
import { ArrowDown, Cross, MobMenu } from "../icons";

const MainNav = (props) => {
  const router = useRouter();
  const [showSideBar, setShowSideBar] = useState(false);
  const openSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <>
      <div
        onClick={openSideBar}
        className={`h-screen w-full bg-overlay fixed top-0 left-0 z-40 ${
          showSideBar ? "block" : "hidden"
        } md:hidden
          mx-auto max-w-screen-2xl w-full pt-6 pb-4 px-6 md:pt-14 md:pb-8 sm:px-10 xl:px-20 flex items-center justify-between gap-6 xl:gap-0
          `}
      ></div>

      <nav
        className={`${
          props?.className
        } gap-5 z-40 md:z-0 xl:gap-10 md:flex-row flex-col text-black ${
          showSideBar ? "right-0" : "right-full"
        } flex md:w-full justify-start md:justify-center md:right-0 md:items-center md:text-white font-josefin h-screen md:h-auto bg-gradient-main md:bg-none md:bg-transparent fixed md:relative top-0 right-0 py-7 px-8`}
      >
        <div className="w-full text-right md:hidden">
          <button onClick={openSideBar}>
            <Cross className="text-xl" />
          </button>
        </div>
        <Link href="/">
          <a
            className={`relative font-normal text-lg whitespace-nowrap xl:text-2xl leading-6 w-max ${
              router.route === "/" && "active"
            }`}
          >
            Home
          </a>
        </Link>
        <Link href="/">
          <a
            className={`relative font-normal text-lg whitespace-nowrap xl:text-2xl leading-6 w-max`}
          >
            Services
          </a>
        </Link>
        <Link href="/">
          <a className="relative font-normal text-lg whitespace-nowrap xl:text-2xl leading-6 w-max">
            Blog
          </a>
        </Link>
        <Link href="/contact-us">
          <a
            className={`relative font-normal text-lg whitespace-nowrap xl:text-2xl leading-6 w-max${
              router.route === "/contact-us" && " active"
            }`}
          >
            Contact Us
          </a>
        </Link>
        <div className="flex md:hidden w-max gap-6 md:flex-row flex-col">
          <Link href="/auth/login">
            <a>
              <Button
                bgColor="bg-transparent"
                className="border-0 md:border border-solid w-max border-orange-500 rounded-md py-0 px-0 md:py-2 md:px-4 xl:px-9 md:w-full whitespace-nowrap"
              >
                <p className="font-medium text-black md:text-white text-base xl:text-xl leading-5">
                  Log in
                </p>
              </Button>
            </a>
          </Link>
          <Link href="/auth/signup">
            <a>
              <Button
                bgColor="bg-transparent md:bg-orange-500"
                className="bg-none rounded-md py-0 md:py-2 px-0 md:px-4 xl:px-8 w-max md:w-full whitespace-nowrap"
              >
                <p className="font-medium text-base xl:text-xl text-black md:text-white leading-5">
                  Sign up
                </p>
              </Button>
            </a>
          </Link>
        </div>
      </nav>
      <button className="md:hidden block" onClick={openSideBar}>
        <MobMenu
          className={`${
            props?.menuIconClassName ? props.menuIconClassName : "text-white"
          }`}
        />
      </button>
    </>
  );
};

export default MainNav;
