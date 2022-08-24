import React from "react";
import ImageGallery from "react-image-gallery";

const Gallery = (imgUrl) => {
  const images = imgUrl.imgUrl
    ? imgUrl.imgUrl.map((data) => {
        return {
          original: data,
          thumbnail: data,
        };
      })
    : [{ original: "/defaultcar.png", thumbnail: "/defaultcar.png" }];
  return (
    <>
      <div className="bg-black px-[60px] py-[36px]">
        <ImageGallery items={images} showPlayButton={false} />
      </div>
    </>
  );
};

export default Gallery;
