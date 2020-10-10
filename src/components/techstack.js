import React from "react";
//react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//images
import css from "./../images/css.png";
import html from "./../images/html.png";
import jest from "./../images/jest.png";
import cypress from "./../images/cypress.png";
import heroku from "./../images/js.png";
import netlify from "./../images/netlify.png";
import node from "./../images/node.png";
import js from "./../images/js.png";

export function TechStack(props) {
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
          <Img src={css} alt="css logo" class="lrglogo" />
        </section>
        <section className="slides">
          <Img src={cypress} alt="cypress logo" class="paddinglogo" />
        </section>
        <section className="slides">
          <Img src={html} alt="html logo" class="smllogo" />
        </section>
        <section className="slides">
          <Img src={heroku} alt="heroku logo" class="logo" />
        </section>
        <section className="slides">
          <Img src={jest} alt="jest logo" class="logo" />
        </section>
        <section className="slides">
          <Img src={js} alt="javascript logo" class="logo" />
        </section>
        <section className="slides">
          <Img src={netlify} alt="netlify logo" class="smllogo" />
        </section>
        <section className="slides">
          <Img src={node} alt="node.js logo" class="node" />
        </section>
      </Slider>
    </div>
  );
}
export function Img(props) {
  return (
    <>
      <img src={props.src} alt={props.alt} className={props.class} />
    </>
  );
}
