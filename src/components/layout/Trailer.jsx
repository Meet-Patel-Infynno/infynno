import React from "react";
import ReactPlayer from "react-player";

const Trailer = (src) => {
  console.log(src, "keyyy");
  const url = `https://www.youtube.com/watch?v=${src.src}`;

  return (
    <>
      <ReactPlayer
        light
        playing
        config
        controls
        width="307px"
        height="170px"
        url={url}
      />
    </>
  );
};
export default Trailer;
