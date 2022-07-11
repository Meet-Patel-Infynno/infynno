import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "../components.css";
import { api_base_url, api_key } from "../Config";
import Card from "../layout/Card";
import { BsChevronDown } from "react-icons/bs";
import Slider from "react-slick";

const MustWatch = (props) => {
  const [apiData, setApiData] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    cssEase: "linear",
  };

  async function load() {
    const result = await axios.get(api_base_url + props.type + api_key);
    console.log(result.data, "popular");
    setApiData(result.data);
  }

  useEffect(() => {
    load();
  }, []);

  //   if (apiData.length === 0) {
  //     return <p>jhgjhg</p>;
  //   }

  return (
    <>
      <section
        className={props.type === "popular" ? "mustwatch" : "comsection"}
      >
        <div className="container mw">
          <div className="mwhead">
            <div className="mwtitle">
              <h4>{props.title}</h4>
            </div>
            {props.type === "popular" && (
              <div className="filter">
                <div class="dropdown">
                  <button
                    class=" dropdown-toggle dt"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Filter
                  </button>
                </div>
              </div>
            )}
          </div>
          {props.type === "284052/similar" && (
            <div className="rbuttons">
              <button className="ractive">Hindi</button>
              <button>Bengali</button>
              <button>Marathi</button>
              <button>Assamese</button>
              <button>Telugu</button>
              <button>Tamil</button>
              <button>Malaalam</button>
            </div>
          )}
          <div className="mwmovies mt-3">
            <Slider {...settings}>
              {apiData.length !== 0 &&
                apiData.results.map((Movies) => {
                  return (
                    <>
                      <Card movie={Movies}></Card>
                    </>
                  );
                })}
            </Slider>
          </div>
        </div>
      </section>
      {props.type === "top_rated" && (
        <section className="showmore">
          <button>
            Show More<BsChevronDown></BsChevronDown>
          </button>
        </section>
      )}
    </>
  );
};

export default MustWatch;
