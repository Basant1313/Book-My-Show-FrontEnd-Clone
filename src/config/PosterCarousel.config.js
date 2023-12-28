// Now we use it anywhere we want you just need import it
const settings = {

    infinite: true,
    autoplay: false,
    slidesToShow:5,
    slideToScroll:2,
    IntialSlide: 0,

    responsive: [

        {
            breakpoint: 1024, // Any screen size less than 1024 px will be applied
            settings: {
                slidesToShow: 3,
                slideToScroll: 3,
                
            }
        },
        {
            breakpoint: 600, // Any screen size less than 600 px will be applied
            settings: {
                slidesToShow: 2,
                slideToScroll: 2,
                
            }
        },
        {
            breakpoint: 400, // Any screen size less than 400 px will be applied
            settings: {
                slidesToShow: 1,
                slideToScroll: 1,
                
            }
        },
    ]

};

export default settings;