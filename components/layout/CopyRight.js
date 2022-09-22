import Link from "next/link";
import React from "react";

const CopyRight = ({ className, ...props }) => {
  return (
    <div className={`${className && className} ${props?.showFooter ? "px-0" : "px-6 sm:px-16" }  w-full box-border`}>
      <div className={`border-t w-full flex gap-2 ${props?.showFooter ? "flex-col md:flex-row justify-between px-6 sm:px-16 pt-6" : "flex-col justify-center pt-7"} items-center pb-6 border-gray-600`}>
        {props?.showFooter ? 
          <p className="font-normal text-sm sm:text-base leading-6 tracking-wide text-black-600">
            Cinderella ©2022 All Rights Reserved
          </p> :
          <p className="font-normal text-sm tracking-wide text-black-600">
            ©2022 Cinderella All Right Reserved
          </p>
        }
        <div className={`flex gap-5 rounded-md ${props?.showFooter && "flex-row-reverse"} `}>
          <Link href="#">
            <a className="font-normal text-base leading-6 tracking-wide text-black-600">
            {props?.showFooter ? "Privacy Policy" : "Privacy"}
            </a>
          </Link>
          {props?.showFooter && "|"}
          <Link href="#">
            <a className="font-normal text-sm tracking-wide text-black-600">
            {props?.showFooter ? "Terms of Service" : "Terms"}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
