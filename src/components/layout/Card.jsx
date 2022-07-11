import React from "react";
import "../components.css";
import { image_original_path } from "../Config";
import { FaImdb } from "react-icons/fa";
import { BsEye } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

const Card = ({ movie }) => {
  return (
    <>
      <section className="Cards">
        <div className="conatiner">
          <div class="card">
            <img
              src={`${image_original_path}${movie.poster_path}`}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{movie.title}</h5>
              <p className="carddate">
                {new Date(movie.release_date).getFullYear()}
              </p>
              <div className="cardinfo">
                <div className="cardrating">
                  <p className="cardicon">
                    <FaImdb size={28} color="rgba(255, 201, 7, 1)"></FaImdb>
                  </p>
                  <p className="cardvote">{movie.vote_average}</p>
                </div>
                <div className="cardaction">
                  <p>
                    <BsEye size={14} color="white"></BsEye>
                  </p>
                  <p>
                    <FaHeart size={14} color="white"></FaHeart>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
