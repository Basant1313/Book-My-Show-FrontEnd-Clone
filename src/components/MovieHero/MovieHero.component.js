import React from "react";
import star from "../MovieHero/star.svg";

const MovieHero = () => {
    

    // if you write anything as Hidden or Block thatr basically means that it will be Hidden or Blocked for that particular size and every screen greater than this.


    //style: {{}} inline CSS inbuilt CSS => vw-> viewport which means and 180 means entire viewport if we have a very big poster which have very big height and its not adjusting in the entire height and width vw tries to aquire viewport height and width.

    // parent div(class)-> relative and the child div(class) -> absolute we are giving it because we want the gradient should follow the parent child relationship and should be overlaying on entire poster.

    // z-index (z-10) -> is for poster should overlay on the gradient also.

    // since Poster has a h relative and absolute position so we don't have to give padding and margin.because whenever the relative and absolute is present then margin and padding are predefined
    return (
        <>
            <div className="md:hidden" style={{height: "clac(180vw)"}} >
            <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/salaar-cease-fire--part-1-et00301886-1702971289.jpg" alt=""  />
            </div>
            
            <div className="hidden md:block lg:hidden">
            <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/salaar-cease-fire--part-1-et00301886-1702971289.jpg" alt=""  />
            </div>


            <div className="relative hidden lg:block" style={{height:"30rem"}}>
                <div className="absolute h-full w-full z-10"
                    style={
                       { backgroundImage: "linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%)"}}
                    
                />
                
                <div className="absolute z-30 flex gap-8 left-28 top-11">

                <div className="z-30 w-64 h-94">
                    <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/salaar-cease-fire--part-1-et00301886-1702971289.jpg" alt="Poster" className="h-full w-full rounded-xl" />
                </div>
               
                <div className=" z-30 flex flex-col gap-3">

                <div className=" py-5 "> 
                    <h1 className="text-4xl text-white font-bold">Salaar: Cease Fire - Part 1</h1>
                </div>

                <div className="z-30 flex gap-2">
                    <div className="w-6">
                    <img src={star} alt="star" className="w-full"/>
                    </div>
                  
                  <div className="flex gap-2">
                    <h2 className=" text-xl text-white font-bold">8.4/10</h2>
                    <p className="text-gray-300 text-sm py-1">550.2k Votes</p>
                  </div>
                </div>

                <div className="flex justify-between w-full h-20 bg-[#404040] items-center rounded-md">
                    <div className="text-white px-5">

                    <h3 className="text-md font-bold">Add your rating & review</h3>
                    <p className="text-gray-400">Your rating matter</p>
                    </div>
                    <div className="w-32 h-12 text-black bg-white font-bold rounded-md mx-5">
                        <button className="w-full h-full">Rate Now</button>
                    </div>
                </div>
                    <div className="flex gap-1 ">
                        <div className="w-28 h-8 text-black bg-gray-300 rounded-sm pl-3 ">
                            <h4 className="w-full h-full">2D, IMAX 2D</h4>
                        </div>
                        <div className="w-80 h-8 text-black bg-gray-300 rounded-sm pl-3">
                            <h4 className="w-full h-full">Telugu, Hindi, Malayalam, Kannada, Tamil </h4>
                        </div>
                    </div>

                    <div className="z-30 text-white flex gap-3">
                        
                        <p>2h 55m</p>
                        <span> • </span>
                        <a href="">Action,</a>
                        <span>,</span>
                        <a href="">Thriller</a>
                        <span> • </span>
                        <p>A</p>
                        <span> • </span>
                        <p>22 Dec, 2023</p>
                    </div>

                <div className="w-48 h-12 bg-[#f62252] rounded-md text-white font-bold ">
                    <button className="w-full h-full">Book tickets</button>
                </div>

                </div>
                </div>
                
            <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/salaar-cease-fire--part-1-et00301886-1702971289.jpg" alt="" className="w-full h-full " />
            </div>
        </>
    )
};


export default MovieHero;