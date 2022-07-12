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
            <div class="card-body"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Similar;
