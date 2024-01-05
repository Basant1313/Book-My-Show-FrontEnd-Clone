import axios from "axios";
import React, { useState, useEffect } from "react";
import EntertaimentCardSlider from "../components/Entertainment/Entertainmentcard.component";
import { Premier } from "../components/Premier/Premier.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import TempPostersPremier from "../config/TempPostersPremier.config";
import YTMusicSTudioImagesImages from "../config/TempPostersYTMusicSTudio.config";
import OutdoorEventsImages from "../config/TempPostersOutdoorEvents.config";
import LaughterTherapyImages from "../config/TempPostersLaughter.config";

const Homepage = () => {
  const [popularMovies, setpopularMovies] = useState([]);

  useEffect(() => {
    const requestpopularMovies = async () => {
      const getPopularMovies = await axios.get("/movie/now_playing");
      setpopularMovies(getPopularMovies.data.results);
    };
    requestpopularMovies();
  }, []);

  // console.log(popularMovies);

  const [tvLatestSeries, settvLatestSeries] = useState([]);

  useEffect(() => {
    const requesttvLatestSeries = async () => {
      const gettvLatestSeries = await axios.get("/tv/popular");
      settvLatestSeries(gettvLatestSeries.data.results);
    };
    requesttvLatestSeries();
  }, []);

//   console.log(tvPopular);

  
  const [topRatedTVSeries, settopRatedTVSeries] = useState([]);

  useEffect(() => {
    const requesttopRatedTVSeries = async () => {
      const gettopRatedTVSeries = await axios.get("/tv/top_rated");
      settopRatedTVSeries(gettopRatedTVSeries.data.results);
    };
    requesttopRatedTVSeries();
  }, []);

  // console.log(topRatedTVSeries);
  
  const [topRatedMovies, settopRatedMovies] = useState([]);

  useEffect(() => {
    const requesttopRatedMovies = async () => {
      const gettopRatedMovies = await axios.get("/movie/top_rated");
      settopRatedMovies(gettopRatedMovies.data.results);
    };
    requesttopRatedMovies();
  }, []);

  // console.log(topRatedMovies);

  const [tvPopular, settvPopular] = useState([]);

  useEffect(() => {
    const requesttvPopular = async () => {
      const gettvPopular = await axios.get("/tv/popular");
      settvPopular(gettvPopular.data.results);
    };
    requesttvPopular();
  }, []);

//   console.log(tvPopular);
 

  return (
    <>
      <div className=" flex flex-col gap-10">
        <div className="container mx-auto px-4 py-8">
          <PosterSlider
            images={popularMovies}
            title="Recommended Movies"
            isDark={false}
          />
        </div>

        <div className="px-20">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png"
            alt="ads"
          />
        </div>

        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-800 pt-5">
            The Best of Entertainment
          </h1>
          <EntertaimentCardSlider />
        </div>

        <div className="bg-navColor-200 py-16 ">
          <div className="container mx-auto px-4">
            <div className="flex">
              <img
                src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png"
                alt="Premiere"
                className="w-full h-full"
              />
            </div>
            <PosterSlider
              images={tvLatestSeries}
              title="Premiere"
              subtitle="Brand new release everyfriday "
              isDark
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
      <div className="container mx-auto px-4">
        <PosterSlider
          images={topRatedTVSeries}
          title="Top Rated Tv Series"
          isDark={false}
        />
      </div>
      <div className="container mx-auto px-4">
        <PosterSlider images={topRatedMovies} title="Top Rated Movies " isDark={false} />
      </div>
      <div className="container mx-auto px-4">
        <PosterSlider images={tvPopular} title="Popular TV Shows" isDark={false} />
      </div>
      </div>
    </>
  );
};

export default Homepage;
