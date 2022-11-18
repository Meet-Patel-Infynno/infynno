import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
import blogImg from "../assets/images/blog-card.svg";
import { ArrowLeft, BlogRightArrow } from "../components/icons";
import axiosInterceptor from "../util/axiosInterceptor";

export const getServerSideProps = async (context) => {
  const token = context.req.cookies?.access;
  token &&
    (axiosInterceptor.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token}`);
  try {
    const res = await Promise.all([axiosInterceptor.get("blog/")]);
    return {
      props: {
        Blogs: res[0].data?.data || null,
      },
    };
  } catch (e) {}
  return {
    props: {
      providerData: [],
    },
  };
};

const Blog = ({ Blogs }) => {
  const card = [1, 2];
  const [readMore, setReadMore] = useState({
    read: false,
    data: "",
  });
  const readMoree = (data) => {
    setReadMore({ read: true, data: data });
  };

  const handleBack = () => {
    setReadMore({ read: false, data: "  " });
  };

  useEffect(() => {}, []);

  return (
    <section className="font-josefin flex justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center gap-16 md:gap-36">
        <div className="bg-blog-back bg-cover w-full h-80 md:h-screen-70 flex justify-center items-center md:items-end ">
          <h1 className="font-semibold text-4xl text-orange-500 md:mb-24 drop-shadow-blog-shadow">
            BLOG
          </h1>
        </div>

        {readMore.read ? (
          <>
            <p
              className="text-lg w-fit absolute left-0 bottom-36 text-black cursor-pointer mt-5"
              onClick={handleBack}
            >
              <div className="w-max mt-7 ml-7 sm:ml-14 md:ml-24 md:mt-14">
                <ArrowLeft />
              </div>
            </p>
            <div className="max-w-6xl flex flex-col gap-12 px-6">
              <div className="flex flex-col sm:grid sm:grid-cols-34_58 gap-12">
                <div className="relative max-w-sm lg:row-span-2 row-auto w-full">
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_APP_BASE_URL + readMore.data.image
                    }
                    className="rounded-md"
                    layout="responsive"
                    width={385}
                    height={345}
                    alt="img"
                  />
                </div>
                <div>
                  <div className="mb-6">
                    <h1 className="font-medium text-3xl text-orange-500">
                      {readMore.data.title}
                    </h1>
                  </div>
                  <div className="flex flex-col gap-12 font-light text-lg leading-5 text-black">
                    <p>{readMore.data.blog}</p>
                  </div>
                </div>
                <div className="flex col-span-2 lg:col-auto flex-col gap-12 font-light text-lg leading-5 text-black">
                  <p>
                    Lorem Ipsum has been the industry&apos;s standard dummy text
                    ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. It
                    has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It
                    was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-12 font-light text-lg leading-5  text-black">
                <p>
                  Lorem Ipsum has been the industry&apos;s standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It
                  was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages.
                </p>
                <p>
                  Lorem Ipsum has been the industry&apos;s standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It
                  was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages.
                </p>
                <p>
                  Lorem Ipsum has been the industry&apos;s standard dummy text
                  ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged. It
                  was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages.
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-16 md:gap-36 justify-center items-center w-full px-6">
            {Blogs?.slice(0, 2).map((data, index) => {
              return (
                <div
                  key={index}
                  className="bg-appointment-form shadow-blog-card rounded-lg w-full max-w-6xl flex flex-col md:flex-row gap-7 lg:gap-14"
                >
                  <div className="max-w-sm h-64 md:h-auto rounded-lg w-full relative">
                    <Image
                      className="rounded-lg"
                      src={process.env.NEXT_PUBLIC_APP_BASE_URL + data?.image}
                      width={385}
                      height={345}
                      layout="responsive"
                      objectFit="cover"
                      alt="img"
                    />
                  </div>
                  <div className="max-w-md lg:max-w-lg flex flex-col gap-8 justify-center md:py-6 px-4">
                    <div>
                      <h2 className="font-medium text-3xl text-orange-500">
                        {data.title}
                      </h2>
                    </div>
                    <div>
                      <p className="font-light text-lg leading-5 text-black">
                        {data.blog}
                      </p>
                    </div>
                    <div
                      onClick={() => readMoree(data)}
                      className="flex mb-4 md:mb-0 justify-start gap-4 items-center cursor-pointer"
                    >
                      <p className="font-normal text-lg text-orange-500">
                        Read More
                      </p>
                      <BlogRightArrow className="text-orange-500" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
