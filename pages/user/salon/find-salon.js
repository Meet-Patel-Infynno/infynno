import React, { useEffect, useState } from "react";
import BarberShopCard from "../../../components/salon/BarberShopCard";
import Slider from "react-slick";
import axios from "axios";

const FindSalon = ({ salonList }) => {
  const [salonData, setSalonData] = useState();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoPlay: true,
  };

  const cards_per_page = 15;

  useEffect(() => {
    setSalonData(salonList);
  }, [salonList]);

  return salonData?.results ? (
    <>
      <section className="flex items-center flex-col justify-around h-screen-70 max-h-521 w-full bg-blog-back bg-center bg-cover">
        <span></span>
        <h2 className="font-semibold drop-shadow-page-header leading-10 text-4xl text-orange-500">
          FIND SALON
        </h2>
      </section>
      <section className="flex w-full salon-grid-slider flex-col justify-center px-6 2xl:px-0">
        <div className="pb-6 pt-14 max-w-7xl w-full mx-auto border-b border-solid border-gray-800">
          <h3 className="font-normal text-xl leading-5 text-black-600">
            {`${salonData?.count || 0} Salon Found`}
          </h3>
        </div>
        <Slider {...settings}>
          {salonData?.results.length &&
          salonData?.results.length <= cards_per_page ? (
            <div
              className="!grid sm:grid-cols-2 lg:!grid-cols-3 gap-5 md:gap-x-14 gap-y-20 w-full max-w-7xl pt-16 box-border"
              key=""
            >
              {[...salonData?.results].map((salon, i) => (
                <>
                  <BarberShopCard barber_data={salon} key={i} />
                </>
              ))}
            </div>
          ) : (
            [
              ...Array(
                Math.ceil(salonData?.results.length / cards_per_page)
              ).keys(),
            ]?.map((t) => {
              return (
                <div
                  className="!grid sm:grid-cols-2 lg:!grid-cols-3 gap-5 md:gap-x-14 gap-y-20 w-full max-w-7xl pt-16 box-border"
                  key=""
                >
                  {[...salonData?.results]
                    .splice(t, cards_per_page)
                    ?.map((salon, i) => (
                      <BarberShopCard barber_data={salon} key={i} />
                    ))}
                </div>
              );
            })
          )}
        </Slider>
      </section>
    </>
  ) : null;
};

export const getServerSideProps = async (context) => {
  try {
    const res = await axios.get(
      process.env.NEXT_PUBLIC_API_BASE_URL + "/user/page/"
    );
    return {
      props: {
        salonList: res.data,
      },
    };
  } catch (e) {
    throw "find salon error : " + e.response.data;
  }
  return {
    props: {
      salonList: [],
    },
  };
};

export default FindSalon;
