import Link from "next/link";
import React from "react";
import { Quote, TestimonialArrow } from "../icons";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="border-4 border-solid border-orange-500 rounded-xl py-7 px-4 md:px-16 font-josefin  flex flex-col gap-6">
      <div className="flex flex-col gap-11">
        <Quote className="h-10 w-10 md:h-max md:w-max" />
        <p className="text-white font-normal text-lg md:text-xl leading-5">
          Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <Link href="/">
        <a className="flex items-center gap-7 border-t border-solid border-white pt-6 font-normal text-lg md:text-xl leading-6 text-orange-500">
          Read More
          <TestimonialArrow className="h-4 w-2 md:h-max md:w-max" />
        </a>
      </Link>
    </div>
  );
};

export default TestimonialCard;
