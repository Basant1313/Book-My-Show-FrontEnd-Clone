import React from "react";
//pros -> src , title , subtitle m isDark(bool)


// below functional component is for single poster
// when we have conflict between single and double quotes we use backtick
const Poster =  (props) => {

    // we are access our poster_path from props

    return(
        <>
        <div className="flex flex-col items-center gap-2 px-3 ">
            <div className="h-80">
                <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.original_title} className="w-full h-full rounded-xl" />
            </div>
            <h3 className={`text-lg font-bold ${props.isDark ? "text-white": "text-gray-700"}`}>
            {props.title}
            </h3>
            <h3 className={`text-lg font-bold ${props.isDark ? "text-white": "text-gray-700"}`}>
            {props.name}
            </h3>
            <p className={`text-sm ${props.isDark ? "text-white":"text-gray-500"}`}>{props.subtitle}</p>
        </div>
        
        </>
    )

};


export default Poster;