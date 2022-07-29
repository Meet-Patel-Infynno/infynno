import React, { useEffect } from "react";
import Slider from "react-slick";
import Card from "../Layout/Card";
import { SampleNextArrow, SamplePrevArrow } from "./Home";

const Finished = (props) => {
  //   useEffect(() => {
  //     console.log("save");
  //   }, []);
  //   console.log(props, "ffff");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          position: "relative",
          top: "-282px",
          left: "0",
          height: "45px",
          right: "0",
          // border: "1px solid red",
        }}
      >
        <ul
          style={{
            position: "relative",
            float: "right",
            margin: "0px",
            maxHeight: "15px",
          }}
        >
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "white",
          position: "relative",
        }}
      >
        {"•"}
      </div>
    ),
  };
  return (
    <>
      {console.log("fffffffff", props)}
      <section className="finished flex flex-col justify-start items-center w-full h-[300px] mt-28 ">
        <div className="fcontent ">
          <div className="ftitle mb-3">
            <p className="text-xl text-black font-semibold">{props.title}</p>
          </div>
          <div className="fcard w-[1024px]">
            <Slider {...settings}>
              {/* {console.log(fixtures, "stateeee")} */}
              {props.data.length !== 0 &&
                props.data.map((data) => {
                  return (
                    <>
                      <Card response={data}></Card>
                    </>
                  );
                })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Finished;
