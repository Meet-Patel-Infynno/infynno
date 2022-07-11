import axios from "axios";
import React, { useState, useEffect } from "react";
import { api_base_url, api_key } from "../Config";
import Card from "../layout/Card";

const Recommended = () => {
  const [apiData, setApiData] = useState([]);

  async function load() {
    const result = await axios.get(api_base_url + "616037/similar" + api_key);
    console.log(result.data, "popular");
    setApiData(result.data);
  }

  useEffect(() => {
    load();
  }, []);
  return (
    <>
      <section className="recommended">
        <div className="container">
          <div className="rcontent">
            <div className="title">
              <h5>RECOMMENDED FOR YOU</h5>
            </div>
            <div className="rbuttons">
              <button>Hindi</button>
              <button>Bengali</button>
              <button>Marathi</button>
              <button>Assamese</button>
              <button>Telugu</button>
              <button>Tamil</button>
              <button>Malaalam</button>
            </div>
            <div className="mwmovies">
              {apiData.length !== 0 &&
                apiData.results.map((Movies) => {
                  return (
                    <>
                      <Card movie={Movies}></Card>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recommended;
