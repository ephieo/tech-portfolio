import React from "react";
//react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//images
import react from "./../images/react.png";
import styled from "./../images/styled.png";
import travis from "./../images/travis.png";
import postgres from "./../images/postgres.png";

export default function TechStack2(props) {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    autoplay: true,
    // speed: 1500,
    autoplaySpeed: 1300,
    cssEase: "linear",
  };
  return (
    <div id={props.class}>
      <Slider {...settings} className="slide-container">
        <section className="slides">
          <Img src={postgres} alt="postgres logo" class="smllogo" />
        </section>
        <section className="slides">
          <Img src={react} alt="react logo" class="smllogo" />
        </section>
        <section className="slides">
          <Img src={styled} alt="styled components logo" class="smllogo" />
        </section>
        <section className="slides">
          <Img src={travis} alt="travis ci logo" class="smllogo" />
        </section>
      </Slider>
    </div>
  );
}
function Img(props) {
  return (
    <>
      <img src={props.src} alt={props.alt} className={props.class} />
    </>
  );
}
