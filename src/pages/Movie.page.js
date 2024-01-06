import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
import { Container } from "postcss";
import {BiCameraMovie} from "react-icons/bi";
import CastImages from "../config/TempPostersCast.config.js";
import CastSlider from "../components/CastSlider/CastSlider.component.js";
import CrewImages from "../config/TempPosterCrew.config.js";

const launchRazorPay = () => {
  let options = {
      key: "rzp_test_qHT01gLYYByqfa",
      amount: 500,
      currency: "INR",
      name: "Book My Show Clone",
      description: "Movie Purchase on Rental",
      image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticker-png.png",
      handler: () => {
        alert("Payment Done")
      },
      theme: {
        color:"#c4242d"
      } // This will trigger when payment is successfull we are not doing any backend successfull payment just on the frontend that will be a user interface which will come. When success will come this handler function will br triggered. Inside handler function we can make another functional component or REDIRECT this page to other success page. 
  };

  let rzp = new window.Razorpay(options);
  rzp.open();
  
  // From the entire window we are accessing the Razorpay Method because we have imported the script and the RazorPay method is now the part of your entire window. Window is like Parent
}

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