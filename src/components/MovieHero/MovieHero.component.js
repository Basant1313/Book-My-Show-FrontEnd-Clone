import React from "react";

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
                <div className="absolute z-30 w-64 h-94 left-28 top-11">
                    <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/salaar-cease-fire--part-1-et00301886-1702971289.jpg" alt="Poster" className="h-full w-full rounded-xl" />
                </div>
            <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/salaar-cease-fire--part-1-et00301886-1702971289.jpg" alt="" className="w-full h-full " />
            </div>
        </>
    )
};


export default MovieHero;