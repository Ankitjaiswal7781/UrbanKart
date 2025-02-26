import HomeBanner from "../../Components/HomeBanner";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import Button from '@mui/material/Button';
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import Slider from "react-slick";
import ProductItem from "../../Components/ProductItem";
import HomeCat from "../../Components/HomeCat";
import banner3 from "../../assets/images/banner3.png";
import banner4 from "../../assets/images/banner4.png";
import newsLetterImg from "../../assets/images/coupon.webp";
import { IoMailOutline } from "react-icons/io5";

export default function Home() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:true,
        fade:false
      };

    return (
        <>
            <HomeBanner />
            <HomeCat/>
            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="sticky">
                            <div className="banner">
                                <img src={banner1} className="cursor w-100" alt="banner 1" />
                            </div>

                            <div className="banner mt-4">
                                <img src={banner2} className="cursor w-100" alt="banner 2" />
                            </div>
                            </div>
                        </div>
                        
                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">BEST SELLERS</h3>
                                    <p className="text-light2 text-sml mb-0">Do not miss the current offers until the end of March.</p>
                                </div>
                                <Button className="viewAllBtn ml-auto">View All <IoIosArrowRoundForward /></Button>
                            </div>

                            <div className="product_row w-100 mt-4">
                                <Slider {...settings} className="homeProductsSlider" id="homeProductsSlider">
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
                            
                            <div className="d-flex align-items-center mt-5">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                                    <p className="text-light2 text-sml mb-0">New products with updated stocks.</p>
                                </div>
                                <Button className="viewAllBtn ml-auto">View All <IoIosArrowRoundForward /></Button>
                            </div>

                            <div className=" productRow2 w-100 mt-4 d-flex">
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            </div>
                            <div className="d-flex mt-4 mb-5 bannerSec">
                            <div className="banner">
                                <img src={banner3} className="cursor w-100" alt="banner 3"/>
                            </div>

                            <div className="banner">
                                <img src={banner4} className="cursor w-100" alt="banner 4" />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="text-white mb-1">$20 discount for your first order</p>
                            <h3 className="text-white">Join our newsletter and get...</h3>
                            <p className="text-light2">Join our email subscription now to get updates on <br/> promotions and coupons.</p>
                            
                            <form>
                                <IoMailOutline />
                                <input type="text" placeholder="Your email address"/>
                                <Button>Subscribe</Button>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <img src={newsLetterImg} alt="newsLetter coupon"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
