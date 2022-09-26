import Link from "next/link";
import React from "react";
import Button from "../form/Button";
import { Dots, Logo } from "../icons";

const Header = ({className}) => {
  return (
    <div className={`${className && className} w-full z-50`}>
      <div className="mx-auto max-w-screen-2xl w-full pt-6 pb-4 px-6 md:pt-14 md:pb-8 sm:px-10 xl:px-20 flex items-center justify-between gap-6 xl:gap-0">
        <div className="h-12 md:h-14 max-w-180 md:max-w-none">
          <Logo className="-translate-y-4 md:-translate-y-5 w-full" />
        </div>
        <nav className="md:flex gap-5 xl:gap-10 text-white font-josefin hidden">
          <Link href="/">
            <a className="font-normal text-lg whitespace-nowrap xl:text-2xl leading-6 ">
              Home
            </a>
          </Link>
          <div className="group relative before:content-blank before:absolute before:w-full before:h-8 before:top-full">
            <Link href="/">
              <a className="font-normal text-lg whitespace-nowrap xl:text-2xl leading-6 ">
                Services
              </a>
            </Link>
            <div className="relative hidden group-hover:block before:h-8 before:content-blank ">
              <div className="bg-white backdrop-blur-2xl pl-3 pr-6 absolute h-max flex flex-col -translate-x-1/2 left-1/2 w-64 top-8">
                <Link href="/">
                  <a className="py-3 xl:py-4 text-lg xl:text-2xl leading-6 border-b border-solid text-black-500 last:border-0">
                    Men
                  </a>
                </Link>
                <Link href="/">
                  <a className="py-3 xl:py-4 text-lg xl:text-2xl leading-6 border-b border-solid text-black-500 last:border-0">
                    Women
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <Link href="/">
            <a className="font-normal text-lg whitespace-nowrap xl:text-2xl leading-6 ">
              Blog
            </a>
          </Link>
          <Link href="/">
            <a className="font-normal text-lg whitespace-nowrap xl:text-2xl leading-6 ">
              Contact Us{" "}
            </a>
          </Link>
        </nav>
        <div className="flex w-max gap-6">
          <Link href="/auth/login">
            <a className="md:block hidden ">
              <Button
                bgColor={`bg-transparent`}
                className="border border-solid border-orange-500 rounded-md py-2 px-4 xl:px-9 w-full whitespace-nowrap"
              >
                <p className="font-medium text-base xl:text-xl leading-5">
                  Log in
                </p>
              </Button>
            </a>
          </Link>
          <Link href="/auth/signup">
            <a className="md:block hidden ">
              <Button className="bg-orange-500 text-white rounded-md py-2 px-4 xl:px-8 w-full whitespace-nowrap">
                <p className="font-medium text-base xl:text-xl leading-5">
                  Sign up
                </p>
              </Button>
            </a>
          </Link>
          <Dots className="md:hidden block text-white" />
        </div>
      </div>
    </div>
  );
}
export default Header;
