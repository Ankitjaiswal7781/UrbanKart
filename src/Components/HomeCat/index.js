import React from "react";
import Slider from "react-slick";

export default function HomeCat() {
    const itemBg =[
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4'
    ];
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        arrows:true,
        fade:false
      };
    return (
        <>
            <section className="catSliderSection">
                <div className="container">
                    <h3 class="mb-3 hd">Featured Categories</h3>
                                    <Slider {...settings} className="catSlider" id="catSlider">
                                        {
                                            itemBg.length!==0 && itemBg.map((item, index)=>{
                                                return(
                                                <div className="item text-center cursor"  key={index} >
                                                <div className="info" style={{background:item}}>
                                                <img src="https://nest-grocery.vercel.app/assets/category/cat-13.png" alt="Cake & Milk" />
                                                <h6>Cake & Milk</h6>
                                                </div>
                                            </div>
                                                )
                                            })
                                        }
                                    </Slider>
                </div>
            </section>
        </>
    )
}