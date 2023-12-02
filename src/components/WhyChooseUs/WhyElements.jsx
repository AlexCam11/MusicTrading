import React, { useEffect, useState } from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import icon01 from "../../assets/img/icon/choose_icon01.svg";
import icon02 from "../../assets/img/icon/choose_icon02.svg";
import icon03 from "../../assets/img/icon/choose_icon03.svg";
import icon04 from "../../assets/img/icon/choose_icon04.svg";

import m1 from "../../assets/img/partner/logo-sony.png";
import m2 from "../../assets/img/partner/logo-universal.png";
import m3 from "../../assets/img/partner/PIAwarner music.png";

import WhyChooseUsItem from "./WhyChooseUsItem";

const WhyElements = () => {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const slider_items = [
    {
      src: m1,
      alt: "",
      link: "/",
      title: "Mobile payment make easy",
      description: "Add new, trending and rare artwork to your collection.",
    },
    {
      src: m2,
      alt: "",
      link: "/",
      title: "Lifetime free transaction",
      description: "Add new, trending and rare artwork to your collection.",
    },
    {
      src: m3,
      alt: "",
      link: "/",
      title: <>Protect the identity</>,
      description: "Add new, trending and rare artwork to your collection.",
    }
  ];

  const initalState = 0;
  const [count, setCount] = useState(initalState);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((old) => (old == 6 ? 0 : old + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toMultiply = 100 / slider_items.length;

  return (
    <section className="choose-area pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-50">
              
            </div>
          </div>
        </div>

        <div className="row">
            
            {slider_items.map((item, index) => (
              <div key={index} className="col-md-4 align-items-center justify-content-center">
             
                   
                        <img src={item.src}  />
                    
                   
                    
              </div>
            ))}
        </div>

       
        


        {/* <div
          className="slide-progress"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <span className="slider__label sr-only"></span>
        </div> */}
      </div>
    </section>
  );
};

export default WhyElements;
