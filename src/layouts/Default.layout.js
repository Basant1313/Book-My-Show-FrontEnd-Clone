import React from "react";

import Navbar from "../components/Navbar/navbar.component"
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";


const DefaultLayout = (props) => {
    // Along with the parent component <DefaultLayout> child component shuould also be rendered To make sure all components are also rendered we have put {props.children}  below your main TAG.
    return (
        <>
        <Navbar />
        <HeroCarousal />
        {props.children}
        </>
    );
};

export default DefaultLayout;