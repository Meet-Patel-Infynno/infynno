import React, { useEffect, useState } from "react";
import Card from "../Layout/Card";
import Slider from "react-slick";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
// import axios from "axios";
// import { api_base_url, api_include, api_key } from "../../config";
// import { Link } from "react-router-dom";
import Finished from "../Pages/Finished";
import { Bars } from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { fixture } from "./HomeSlice";

export function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "white",
        borderRadius: "50%",
        height: "48px",
        width: "48px",
        overflow: "hidden",
        zIndex: "2",
        boxShadow: "rgb(0 0 0 / 10%) 0px 0px 8px 0px",
        position: "absolute",
        top: "115px",
      }}
      onClick={onClick}
    >
      <HiArrowRight
        className="h-[24px] w-[24px] relative top-[-8px] left-[11px]"
        fill="#ff5000"
      ></HiArrowRight>
    </div>
  );
}
export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "white",
        borderRadius: "50%",
        height: "48px",
        width: "48px",
        overflow: "hidden",
        zIndex: "2",
        boxShadow: "rgb(0 0 0 / 10%) 0px 0px 8px 0px",
        position: "absolute",
        top: "115px",
      }}
      onClick={onClick}
    >
      <HiArrowLeft
        className="h-[24px] w-[24px] relative top-[-8px] left-[11px]"
        fill="#ff5000"
      ></HiArrowLeft>
    </div>
  );
}

const Home = () => {
  const dispatch = useDispatch();
  const { fixtures, finished, upcoming } = useSelector(
    (state) => state.HomeSlice
  );
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

  //   const level = res.data
  //     .filter((daat) => {
  //       if (daat.live === false) {
  //         return daat;
  //       }
  //     })
  //     .slice(3, 12);
  //   setFinished(level);

  //   const upc = res.data
  //     .filter((daat) => {
  //       if (daat.status === "Aban.") {
  //         return daat;
  //       }
  //     })
  //     .slice(2, 10);
  //   setUpcoming(upc);
  // }
  // console.log(upcoming, "upcoming32434...");

  useEffect(() => {
    dispatch(fixture());
  }, []);

  return (
    <>
      {fixtures.length === 0 ? (
        <div className="flex justify-center items-center h-[300px] w-[100%] mt-[100px]">
          <Bars
            height="80"
            width="80"
            color="rgb(255, 80, 0)"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <section className="home flex flex-col items-center h-[300px] mt-[20px] justify-start ">
          <div className="bg-nav-rgba w-full h-[168px] absolute left-0 top-[60px] z-0"></div>
          <div className=" z-10 relative top-[60px]">
            <div className="w-[1024px]">
              <div className="title mb-3 flex justify-between items-center ">
                <p className="text-white text-xl font-semibold z-10 leading-relaxed">
                  Featured Matches
                </p>
                <div className="dots"></div>
              </div>
              <div className="cricket-card">
                <Slider {...settings}>
                  {console.log(fixtures, "stateeee")}
                  {fixtures.length !== 0 &&
                    fixtures.map((data) => {
                      return (
                        <>
                          <Card response={data}></Card>
                        </>
                      );
                    })}
                </Slider>
              </div>
            </div>
          </div>
        </section>
      )}
      {finished.length > 0 && (
        <>
          <Finished title="Finished Matches" data={finished}></Finished>
        </>
      )}
      {upcoming.length > 0 && (
        <>
          <Finished title="Upcoming Matches" data={upcoming}></Finished>
        </>
      )}
    </>
  );
};

export default Home;
