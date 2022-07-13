import React from "react";
import { image_original_path } from "../Config";

const Similar = (movie) => {
  //   console.log(movie, "asasaa");
  return (
    <>
      <section className="Cards">
        <div className="conatiner">
          <div class="card">
            <img
              src={`${image_original_path}${movie.movie.backdrop_path}`}
              class="similar-img-top"
              alt="..."
            />
            <div className="hover">
              <div className="htitle">
                <p style={{ color: "white" }}>{movie.movie.title}</p>
                {/* <p style={{ color: "white" }}>{movie.movie.overview}</p> */}
              </div>
            </div>
            <div class="card-body"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Similar;
