import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import { Container } from "postcss";
import {BiCameraMovie} from "react-icons/bi";
import CastImages from "../config/TempPostersCast.config.js";
import CastSlider from "../components/CastSlider/CastSlider.component.js";
import CrewImages from "../config/TempPosterCrew.config.js";

const Movie = () => {

  // container - To get equal separation in the right margin 
    return (
        <>
      <MovieHero />
      <div className="my-12 container mx-auto px-4 lg:w-2/3 lg:ml-44">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
          <p>Brace yourself for an extraordinary tale of rebellion filled with power-packed action.</p>
        </div>
        <div className="my-8">
        <hr />
        </div>

        <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">Cast</h2>
          <div className="container mx-auto px-4">
            <CastSlider images={CastImages}  isDark={false} />
        </div>

        </div>
        <div className="my-8">
        <hr />
        </div>

        <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">Cast</h2>
          <div className="container mx-auto px-4">
            <CastSlider images={CrewImages}  isDark={false} />
        </div>

        </div>
        <div className="my-8">
        <hr />
        </div>

        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold text-2xl">Applicable Offers</h1>
          <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-2 border-dashed rounded-md p-3 w-96" >
            <div className="w-8 h-8">
          <BiCameraMovie  className="w-full h-full"/>
            </div>
          <div className="flex flex-col items-start">
            <h3 className="text-gray-900 text-lg">Flimy Pass</h3>
            <p className="text-gray-600 text-sm">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Flimy Pass @Rs.99.</p>
          </div>
          </div>
        </div>
      </div>

        </>
    );
};



export default Movie;