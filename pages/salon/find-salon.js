import React from 'react';
import BarberShopCard from '../../components/salon/BarberShopCard';
import Slider from "react-slick";

const FindSalon = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoPlay: true,
  };

  const barber_data ={
    shop_name : "Barber Shop",
    expert_in: "Color expert",
    experience: "20",
    stars: "5.0",
    reviews: "123",
  };
  const cards_per_page = 15;
  const mapped_data = [...Array(30).keys()];

  return (
    <>
      <section className='flex items-center flex-col justify-around h-screen-70 max-h-521 w-full bg-blog-back bg-center bg-cover'>
        <span></span>
        <h2 className="font-semibold drop-shadow-page-header leading-10 text-4xl text-orange-500" >FIND SALON</h2>
      </section>
      <section className='flex w-full salon-grid-slider flex-col justify-center px-6 2xl:px-0'>
        <div className='pb-6 pt-14 max-w-7xl w-full mx-auto border-b border-solid border-gray-800'>
          <h3 className='font-normal text-xl leading-5 text-black-600'>
            {`365 Salon Found`}
          </h3>
        </div>
        <Slider {...settings}  >
        {[...Array(Math.ceil(mapped_data.length / cards_per_page)).keys()].map(t => {
          return(
          <div className='!grid sm:grid-cols-2 lg:!grid-cols-3 gap-5 md:gap-x-14 gap-y-20 w-full max-w-7xl pt-16 box-border' key="">
            {mapped_data.splice(0, cards_per_page).map(i => (<BarberShopCard barber_data={{...barber_data, shop_name: `Barber Shop ${i+1}`}} key={i} />))}
          </div>
          );
        })}
        </Slider>
      </section>
    </>
  )
}

export default FindSalon;