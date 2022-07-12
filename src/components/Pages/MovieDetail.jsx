import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsChevronDown, BsFillPlayFill } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";
import { FaImdb } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import {
  api_base_url,
  api_key,
  api_tv_base_url,
  image_original_path,
  image_path,
} from "../Config";
import Cast from "../layout/Cast";
import Similar from "../layout/Similar";
import Trailer from "../layout/Trailer";
import MustWatch from "./MustWatch";

const MovieDetail = () => {
  const [apiData, setApiData] = useState([]);
  const [apiImageData, setApiImageData] = useState([]);
  const [apiCastData, setApiCastData] = useState([]);
  const [apiVideoData, setApiVideoData] = useState([]);
  const [apiSimilarData, setApiSimilarData] = useState([]);
  const { id } = useParams();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    cssEase: "linear",
  };

  async function load() {
    console.log({ id });
    const result = await axios.get(api_base_url + id + api_key);
    console.log(result.data);
    setApiData(result.data);

    const imagesData = await axios.get(api_base_url + `${id}/images` + api_key);
    console.log(imagesData.data);
    setApiImageData(imagesData.data);

    const CastsData = await axios.get(api_base_url + `${id}/credits` + api_key);
    console.log(CastsData.data);
    setApiCastData(CastsData.data);

    const VideosData = await axios.get(api_base_url + `${id}/videos` + api_key);
    console.log(VideosData, "video");
    setApiVideoData(VideosData.data.results[0]);
    console.log(VideosData.data.results[0].key, "re");

    const SimilarData = await axios.get(
      api_base_url + id + "/similar" + api_key
    );
    console.log(SimilarData.data);
    setApiSimilarData(SimilarData.data);
  }
  useEffect(() => {
    load();
  }, []);

  if (apiData.length === 0 || apiImageData.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <section className="home">
        {/* <Sidebar></Sidebar> */}
        <div className="container">
          <div className="row">
            <div className="home-content">
              <div className="images ctimages">
                <img
                  className="posterimg ctimg"
                  src={`${image_original_path}${apiImageData.backdrops[0].file_path}`}
                  alt=""
                />
              </div>
              <div className="home-info ct-info">
                <div className="col-md-12 logo">
                  <img
                    src={`${image_path}${apiImageData.logos[0].file_path}`}
                    alt=""
                  />
                </div>
                <div className="col-md-12 overview">
                  <p>{apiData.overview}</p>
                </div>
                <div className="col-md-12 genres">
                  <span>GENRES</span>
                  <p>
                    {apiData?.genres[0].name} , {apiData?.genres[1].name}
                  </p>
                </div>
                <div className="col-md-12 buttons">
                  <button className="btn-watch">
                    Watch<BsFillPlayFill size={28}></BsFillPlayFill>
                  </button>
                  <button className="btn-list">
                    My List<AiOutlinePlus size={28}></AiOutlinePlus>
                  </button>
                  <button className="btn-download">
                    <BsDownload size={28} color="white"></BsDownload>
                  </button>
                </div>
                <div className="col-md-12 rating-info">
                  <p>
                    <FaImdb color="rgba(255, 201, 7, 1)" size={40}></FaImdb>
                  </p>
                  <p className="vote">{apiData.vote_average}</p>
                  <p className="ext">U/A</p>
                  <p className="ext">4K</p>
                  <p className="date">
                    {new Date(apiData.release_date).getFullYear()}
                  </p>
                </div>
                <div className="col-md-12 genres">
                  <span>AUDIO</span>
                  <p>
                    {/* {apiData?.genres[0].name} , {apiData?.genres[1].name} */}
                  </p>
                </div>
                <div className="col-md-12 genres">
                  <span>SUBTITLES</span>
                  <p>
                    {/* {apiData?.genres[0].name} , {apiData?.genres[1].name} */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mustwatch">
        <div className="container mw">
          <div className="row">
            <div className="col-md-4">
              <div className="mwhead">
                <div className="cttitle">
                  <p>TRAILER</p>
                </div>
              </div>
              <div className="mwmovies mt-3">
                <Trailer src={apiVideoData.key}></Trailer>
              </div>
            </div>
            <div className="col-md-8">
              <div className="mwhead">
                <div className="cttitle">
                  <p>CAST AND CREW INFO</p>
                </div>
              </div>
              <div className="mwmovies mt-3">
                <Slider {...settings}>
                  {apiCastData.length !== 0 &&
                    apiCastData.cast?.map((Casts) => {
                      if (Casts.profile_path) {
                        return (
                          <>
                            <Cast cast={Casts}></Cast>
                          </>
                        );
                      }
                    })}
                </Slider>
              </div>
              <section className="showmore ctmore">
                <button>
                  Show More<BsChevronDown></BsChevronDown>
                </button>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section className="similar">
        <div className="container">
          <div className="row">
            <div className="col-md-12 similar-text">
              <p>MORE LIKE THIS</p>
            </div>
            <div className="col-md-12">
              <div className="mwmovies mt-3">
                <Slider {...settings1}>
                  {apiSimilarData.length !== 0 &&
                    apiSimilarData.results.map((Movies) => {
                      return (
                        <>
                          <Link to={`/${Movies.id}`}>
                            <Similar movie={Movies}></Similar>
                          </Link>
                        </>
                      );
                    })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <MustWatch type={`${id}/similar`} title={"MORE LIKE THIS"}></MustWatch> */}
    </>
  );
};

export default MovieDetail;
