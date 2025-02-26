import React from "react";
import Slider from "react-slick";
import ProductItem from "../../../Components/ProductItem";


export default function RelatedProducts(props){

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows:true,
        fade:false
      };

    return(
        <>
             <div className="d-flex align-items-center mt-3">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">{props.title}</h3>
                                </div>
                            </div>

                            <div className="product_row w-100 mt-3">
                                <Slider {...settings} className="homeProductsSlider relatedProductsSlider" id="homeProductsSlider">
                                        <ProductItem/>
                                        <ProductItem/>
                                        <ProductItem/>
                                        <ProductItem/>
                                        <ProductItem/>
                                        <ProductItem/>
                                        <ProductItem/>
                                        <ProductItem/>
                                </Slider>
                            </div>
        </>
    )
}