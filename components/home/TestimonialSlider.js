import React from "react";
import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";

const TestimonialSlider = ({ Ratings }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="testimonial-slider bg-black-500 px-5 md:px-32 pt-36 pb-8 bg-testimonial-back bg-cover bg-center">
      <Slider {...settings}>
        {Ratings?.map((data, index) => {
          return (
            <div key={index}>
              <TestimonialCard Rating={data} />;
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
