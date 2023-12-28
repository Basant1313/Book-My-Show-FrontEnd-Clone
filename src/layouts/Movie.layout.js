import React from "react";

import MovieNavbar from "../components/Navbar/movieNavbar.component";


const MovieLayout = (props) => {
    // Along with the parent component <DefaultLayout> child component shuould also be rendered To make sure all components are also rendered we have put {props.children}  below your main TAG.
    return (
        <>
        <MovieNavbar />
        {props.children}
        </>
    );
};

export default MovieLayout;