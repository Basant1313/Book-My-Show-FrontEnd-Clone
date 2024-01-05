import axios from "axios";
import React, {useState, useEffect} from "react";

const PremierImages = () => {



    const [popularMovies, setpopularMovies] = useState([]);

    useEffect (() => {
        const requestpopularMovies = async () => {
            const getPopularMovies = await axios.get("/movie/popular")
            setpopularMovies(getPopularMovies.data.results);
        };
        requestpopularMovies();
    },[]);

};

export default PremierImages;












