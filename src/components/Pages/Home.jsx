import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import {
  api_base_url,
  api_key,
  api_tv_base_url,
  image_original_path,
  image_path,
} from "../Config";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { FaImdb } from "react-icons/fa";
import Sidebar from "../layout/Sidebar";
import MustWatch from "./MustWatch";

const Home = () => {
  const [apiData, setApiData] = useState([]);
  const [apiImageData, setApiImageData] = useState([]);

  async function load() {
    const result = await axios.get(api_tv_base_url + "63174" + api_key);
    console.log(result.data);
    setApiData(result.data);

    const imagesData = await axios.get(
      api_tv_base_url + "63174/images" + api_key
    );
    console.log(imagesData.data);
    setApiImageData(imagesData.data);
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
              <div className="images">
                <img
                  className="posterimg"
                  src={`${image_original_path}${apiImageData.backdrops[5].file_path}`}
                  alt=""
                />
              </div>
              <div className="home-info">
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
                </div>
                <div className="col-md-12 rating-info">
                  <p>
                    <FaImdb color="rgba(255, 201, 7, 1)" size={40}></FaImdb>
                  </p>
                  <p className="vote">{apiData.vote_average}</p>
                  <p className="ext">U/A</p>
                  <p className="ext">4K</p>
                  <p className="date">
                    {new Date(apiData.first_air_date).getFullYear()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MustWatch type={"popular"} title={"MOVIES YOU MUST WATCH"}></MustWatch>
      <MustWatch
        type={"284052/similar"}
        title={"RECOMMENDED MOVIES FOR YOU"}
      ></MustWatch>
      <MustWatch type={"top_rated"} title={"BOLLYWOOD CLASSICS"}></MustWatch>
    </>
  );
};

export default Home;
