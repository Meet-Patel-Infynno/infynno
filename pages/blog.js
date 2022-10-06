import Image from "next/image";
import React from "react";
import { useState } from "react";
import blogImg from "../assets/images/blog-card.svg";
import { BlogRightArrow } from "../components/icons";

const Blog = () => {
  const card = [1, 2];
  const [readMore, setReadMore] = useState({
    read: false,
    data: "",
  });
  const readMoree = (data) => {
    setReadMore({ read: true, data: data });
  };
  return (
    <section className="font-josefin flex justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center gap-16 md:gap-36">
        <div className="bg-blog-back bg-cover w-full h-80 md:h-[70vh] flex justify-center items-center md:items-end ">
          <h1 className="font-semibold text-4xl text-orange-500 md:mb-24 drop-shadow-blog-shadow">
            BLOG
          </h1>
        </div>
        {readMore.read ? (
          <div className="max-w-6xl flex flex-col gap-12 px-6">
            <div className="flex flex-col sm:grid sm:grid-cols-[34%_60%] gap-12">
              <div className="relative max-w-sm lg:row-span-2 row-auto w-full">
                <Image src={blogImg} layout="responsive" alt="img" />
              </div>
              <div>
                <div className="mb-6">
                  <h1 className="font-medium text-3xl text-orange-500">
                    Facts about skin
                  </h1>
                </div>
                <div className="flex flex-col gap-12 font-light text-lg leading-5 text-black">
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
              <div className="flex col-span-2 lg:col-auto flex-col gap-12 font-light text-lg leading-5 text-black">
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
            <div className="flex flex-col gap-12 font-light text-lg leading-5  text-black">
              <p>
                Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages.
              </p>
              <p>
                Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages.
              </p>
              <p>
                Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-16 md:gap-36 justify-center items-center w-full px-6">
            {card.map((data) => {
              return (
                <div
                  key={data}
                  className="bg-appointment-form shadow-blog-card rounded-lg w-full max-w-6xl flex flex-col md:flex-row gap-7 lg:gap-14"
                >
                  <div className="max-w-sm h-64 md:h-auto rounded-lg w-full relative">
                    <Image
                      className="rounded-lg"
                      src={blogImg}
                      layout="fill"
                      objectFit="cover"
                      alt="img"
                    />
                  </div>
                  <div className="max-w-md lg:max-w-lg flex flex-col gap-8 justify-center md:py-6 px-4">
                    <div>
                      <h2 className="font-medium text-3xl text-orange-500">
                        Facts about skin
                      </h2>
                    </div>
                    <div>
                      <p className="font-light text-lg leading-5 text-black">
                        Lorem Ipsum has been the industry&apos;s standard dummy
                        text ever since the 1500s, when an unknown printer took
                        a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem
                        Ipsum passages.
                      </p>
                    </div>
                    <div
                      onClick={(data) => readMoree(data)}
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
