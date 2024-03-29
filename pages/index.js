import Image from "next/image";
import aboutImage from "../assets/images/about.svg";
import serviceImage from "../assets/images/service.svg";
import hairImage from "../assets/images/haircut.svg";
import expert1Image from "../assets/images/expert1.svg";
import expert2Image from "../assets/images/expert2.svg";
import masterImage from "../assets/images/master.svg";
import slateImage from "../assets/images/slate.svg";
import orangeImage from "../assets/images/orange.svg";
import shopImage from "../assets/images/shop.svg";
import Button from "../components/form/Button";
import HomeSlider from "../components/home/HomeSlider";
import TestimonialSlider from "../components/home/TestimonialSlider";
import Link from "next/link";
import axiosInterceptor from "../util/axiosInterceptor";
import { useEffect } from "react";

export const getServerSideProps = async (context) => {
  const token = context.req.cookies?.access;
  token &&
    (axiosInterceptor.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token}`);
  try {
    const res = await Promise.all([
      axiosInterceptor.get("user/all-servicedetail/"),
      axiosInterceptor.get("rating/"),
    ]);
    return {
      props: {
        Services: res[0]?.data.service || null,
        Profile: res[1]?.data?.profile || null,
        Shop_photos: res[1]?.data?.shop_photos || null,
        Ratings: res[1]?.data?.data || null,
      },
    };
  } catch (e) {}
  return {
    props: {
      providerData: [],
    },
  };
};

const Home = ({ Services, Profile, Shop_photos, Ratings }) => {
  useEffect(() => {}, []);

  return (
    <>
      <section className="w-full">
        <HomeSlider />
      </section>
      <section className="mt-7 md:my-10 lg:my-0 flex justify-center items-center container lg:min-h-screen mx-auto">
        <div className="md:gap-20 flex flex-col md:flex-row w-max px-2 md:text-left text-center">
          <div className="images px-16 md:px-0">
            <Image src={aboutImage} width="425" height="537" alt="about" />
          </div>
          <div className=" mt-5 contant max-w-xl flex flex-col md:mt-5 lg:mt-14 gap-8 px-2 md:gap-16">
            <div className="title">
              <h2 className="font-josefin font-semibold text-3xl md:text-4xl leading-9 text-black">
                About Us
              </h2>
            </div>
            <div className="font-josefin font-light text-xl md:max-w-654 md:text-2xl text-black">
              <p>
                At Cinderella Salon we provide many services to beautify you and
                make you feel gorgeous. Our vibe is always warm and relaxed.
                Join us for hair care, spa, holistic care or one of our wide
                array of specialty treatments.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative mt-7">
        <div className="w-full top-0 absolute -z-10">
          <Image src={serviceImage} sizes="100vw" height="623" alt="service" />
        </div>
        <div className="flex px-5 flex-col justify-center items-center w-full max-h">
          <div className="flex flex-col justify-center gap-2 md:gap-10 items-center max-w-xl text-center">
            <h2 className="uppercase font-josefin font-bold md:text-4xl text-white mt-4 md:mt-16">
              OUR BEST SERVICES THAT WE OFFERING TO YOU
            </h2>
            <div className="border md:border-4 border-white bg-white w-24 md:w-48 rounded-md"></div>
          </div>
          <div className="card shadow-service-shadow flex flex-col justify-center items-center gap-12 lg:gap-28 rounded-lg lg:max-w-5xl bg-gradient-main px-6 lg:px-24 py-6 md:py-10 lg:py-24 mt-3 md:mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:gap-x-20 gap-y-4 md:gap-y-10 lg:gap-y-20 w-full lg:max-w-5xl">
              {Services?.map((data, index) => {
                return (
                  <div
                    className="flex min-w-fit max-w-md justify-start gap-4 lg:gap-9 items-center"
                    key={index}
                  >
                    <div className="w-10 h-10 lg:w-14 lg:h-14">
                      <Image
                        src={hairImage}
                        width="58"
                        height="58"
                        layout="responsive"
                        alt="hair"
                      />
                    </div>
                    <div className="xs:max-w-180 max-w-100" title={data}>
                      <p className="font-josefin truncate font-normal whitespace-nowrap md:text-2xl text-black">
                        {data.service_name}
                      </p>
                    </div>
                    <div>
                      <p className="font-josefin font-normal md:text-2xl text-yellow-600">
                        ...........${data.price}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="max-w-xs w-full">
              <Link href="/user/salon/find-salon">
                <a>
                  <Button className="py-3">Find Salon</Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mt-14 md:mt-20 lg:mt-36 flex flex-col justify-center items-center gap-8 md:gap-20">
        <div className="flex flex-col justify-center gap-2 md:gap-10 items-center max-w-xl text-center">
          <div className="xs:px-5 md:px-0">
            <h2 className="uppercase font-josefin font-bold md:text-4xl text-black">
              OUR AWARD WINNER HAIR CUT EXPARTS FOR YOU
            </h2>
          </div>
          <div className="border md:border-4 border-black bg-black w-24 md:w-48 rounded-md"></div>
        </div>

        <div className="flex flex-wrap px-16 md:px-2 w-full justify-center items-center">
          {/* {Profile.map((data, index) => {
            return ( */}
          <div>
            <div>
              <Image
                src={
                  process.env.NEXT_PUBLIC_APP_BASE_URL +
                  Profile[0]?.profile_image
                }
                className="rounded-md"
                width="304"
                height="386"
                alt="expert"
              />
            </div>
            <div className="relative -top-10 right-4 flex justify-center items-center">
              <Image src={slateImage} width="332" height="86" alt="slate" />
              <div className="absolute md:top-2 flex flex-col items-center justify-center">
                <p className="font-josefin font-normal text-xs md:text-base text-white">
                  Color Expert
                </p>
                <h2 className="font-josefin truncate w-full max-w-246 font-medium text-lg md:text-4xl text-white ">
                  {Profile[0]?.first_name + Profile[0]?.last_name}
                </h2>
              </div>
            </div>
          </div>
          {/* );
          })} */}
          <div>
            <div>
              <Image
                src={
                  process.env.NEXT_PUBLIC_APP_BASE_URL +
                  Profile[1]?.profile_image
                }
                className="rounded-md"
                width="304"
                height="386"
                alt="expert"
              />
            </div>
            <div className="relative -top-10 right-4 flex justify-center items-center">
              <Image src={orangeImage} width="332" height="86" alt="slate" />
              <div className="absolute md:top-2 flex flex-col items-center justify-center">
                <p className="font-josefin font-normal text-xs md:text-base text-white">
                  Color Expert
                </p>
                <h2 className="font-josefin truncate w-full max-w-246 font-medium text-lg md:text-4xl text-white">
                  {Profile[1]?.first_name + Profile[1]?.last_name}
                </h2>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Image
                src={
                  process.env.NEXT_PUBLIC_APP_BASE_URL +
                  Profile[2]?.profile_image
                }
                className="rounded-md"
                width="304"
                height="386"
                alt="expert"
              />
            </div>
            <div className="relative -top-10 right-4 flex justify-center items-center">
              <Image src={slateImage} width="332" height="86" alt="slate" />
              <div className="absolute md:top-2 flex flex-col items-center justify-center">
                <p className="font-josefin font-normal text-xs md:text-base text-white">
                  Color Expert
                </p>
                <h2 className="font-josefin truncate w-full max-w-246 font-medium text-lg md:text-4xl text-white">
                  {Profile[2]?.first_name + Profile[2]?.last_name}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mt-8 md:mt-20 lg:mt-36 flex flex-col justify-center items-center  gap-10 md:gap-20">
        <div className="flex flex-col justify-center gap-2 md:gap-10 items-center max-w-xl text-center">
          <div className="px-10 md:px-0">
            <h2 className="uppercase font-josefin font-bold md:text-4xl text-black">
              SOME IMAGES FROM OUR BARBER SHOP
            </h2>
          </div>
          <div className="border md:border-4 border-black bg-black w-24 md:w-48 rounded-md"></div>
        </div>
        <div className=" px-5 flex flex-col gap-7 md:gap-10 w-full lg:max-w-5xl">
          <div className="grid xs:grid-cols-1 gap-7 md:gap-0 md:grid-cols-67_30 md:justify-between w-full">
            <div className="w-full h-40 md:h-72 relative">
              <Image
                className="rounded-lg"
                src={
                  process.env.NEXT_PUBLIC_APP_BASE_URL + Shop_photos[0]?.image
                }
                alt="shop"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-full h-40 md:h-72 relative">
              <Image
                className="rounded-lg"
                src={
                  process.env.NEXT_PUBLIC_APP_BASE_URL + Shop_photos[1]?.image
                }
                alt="shop"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="grid xs:grid-cols-1 gap-7 md:gap-0 md:grid-cols-30_67 md:justify-between w-full">
            <div className="w-full h-40 md:h-72 relative">
              <Image
                className="rounded-lg"
                src={
                  process.env.NEXT_PUBLIC_APP_BASE_URL + Shop_photos[2]?.image
                }
                alt="shop"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-full h-40 md:h-72 relative">
              <Image
                className="rounded-lg"
                src={
                  process.env.NEXT_PUBLIC_APP_BASE_URL + Shop_photos[3]?.image
                }
                alt="shop"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className=" mt-14 md:mt-40">
        <TestimonialSlider Ratings={Ratings} />
      </section>
    </>
  );
};

export default Home;
