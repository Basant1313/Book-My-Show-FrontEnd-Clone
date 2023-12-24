import React from "react";
import Slider from "react-slick";


//component
import Poster from "../Poster/poster.component";

export const Premier = () => {
    const settings = {

        infinite: true,
        autoplay: false,
        slidesToShow: 5,
        slideToScroll: 2,
        IntialSlide: 0

    };

    const PremierImages = [

        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC41LzEwICAzMDkuMUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00301886-besswargmd-portrait.jpg ",
            alt:  "Salaar " ,
            title:" Salaar: Cease Fire - Part1" ,
            subtilte:"Action/Thriller" ,
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny41LzEwICAxNTMuOUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00326964-mmmhjkbgst-portrait.jpg",
            alt:  "Dunki " ,
            title:" Dunki" ,
            subtilte:"Comedy/Drama" ,
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny44LzEwICAxMC41SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00321161-mrfugutvqq-portrait.jpg ",
            alt:  "Aquaman " ,
            title:" Aquaman And The Lost Kingdom" ,
            subtilte:"Action/Adventure/Fantasy/Supernatural" ,
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4zLzEwICA1NDYuM0sgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00311762-egcaxfqbml-portrait.jpg",
            alt:  "Animal " ,
            title:" Animal" ,
            subtilte:"Action/Crime/Drama" ,
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICAxMDRLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00310187-nbqbszhvcm-portrait.jpg ",
            alt:  "Sam Bahadur " ,
            title:" Sam Bahadur" ,
            subtilte:"Biography/Drama" ,
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4yLzEwICA5NEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00364503-ybandkparz-portrait.jpg",
            alt:  "Hi Nanna " ,
            title:" Hi Nanna" ,
            subtilte:"Drama/Family/Romantic" ,
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NjYuNUsgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00355776-cpwhdjbpqs-portrait.jpg ",
            alt:  "Kaatera " ,
            title:" Kaatera" ,
            subtilte:"Action/Drama/Period" ,
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4xLzEwICAxNS4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00379301-esmzjmyvaj-portrait.jpg",
            alt:  "Neru" ,
            title:" Neru" ,
            subtilte:"Drama/Thriller" ,
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4zLzEwICAxLjFLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00375998-ltuxvbuykj-portrait.jpg ",
            alt:  "Kaiva " ,
            title:" Kaiva" ,
            subtilte:"Action/Drama" ,
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICA4MzEgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00380404-fajbxcuzhw-portrait.jpg ",
            alt:  "Saba Nayagan " ,
            title:" Saba Nayagan" ,
            subtilte:"Comedy/Romantic" ,
        }
       

    ];
        // {...image} it will basically take all of the property of the image and spread it . And we don't need to pass individual property.
    return(
        <>
        <Slider {...settings} >
            {
                PremierImages.map((image) =>(
                    <Poster {...image} />
                ))
            }
        </Slider>
        </>
    );
};