import React from "react";
import Slider from "react-slick";
import Banner1 from "../../assets/images/sliderImage1.webp";
import Banner2 from "../../assets/images/sliderImage2.webp";

export default function HomeBanner(){
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true
      };
    return(
        <>
        <div className="homeBannerSection">
        <Slider {...settings} classname="homeSlider">
            <div className="item">
                <img src={Banner2} className="w-100" alt="Banner 2" />
            </div>
            <div className="item">
                <img src={Banner1} className="w-100" alt="Banner 1" />
            </div>
            </Slider>
            </div>
        </>
    )
}