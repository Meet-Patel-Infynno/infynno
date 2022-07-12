import React from "react";
import { image_original_path } from "../Config";

const Cast = (cast) => {
  //   console.log(cast);
  return (
    <>
      <section className="Cards">
        <div className="conatiner">
          <div class="card">
            <img
              src={`${image_original_path}${cast.cast.profile_path}`}
              class="cast-img-top "
              alt="..."
            />
            <div class="card-body">
              <h4 class="cast-title">{cast.cast.original_name}</h4>
              <p className="castchar">As {cast.cast.character}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cast;
