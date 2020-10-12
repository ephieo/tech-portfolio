import React from "react";
//react slick
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
//------styled-components---------
import {
  TechCont,
  TechImg,
  // TechOverlayText,
} from "./../styled-components/TechStack";
//images
import css from "./../images/css.png";
import html from "./../images/html.png";
import jest from "./../images/jest.png";
import cypress from "./../images/cypress.png";
import heroku from "./../images/heroku.png";
import netlify from "./../images/netlify.png";
import node from "./../images/node.png";
import js from "./../images/js.png";
import react from "./../images/react.png";
import styled from "./../images/styled.png";
import travis from "./../images/travis.png";
import postgres from "./../images/postgres.png";

export function TechStack(props) {
  return (
    <div id={props.id}>
      <TechCont>
        <TechImg src={css} alt="" width="5rem" height="7rem" />
        <h2>CSS</h2>
      </TechCont>
      <TechCont>
        <TechImg src={html} alt="" width="7rem" height="7rem" />
        <h2>HTML</h2>
      </TechCont>
      <TechCont>
        <TechImg src={jest} alt="" width="7rem" height="7rem" />
        <h2>JEST</h2>
      </TechCont>
      <TechCont>
        <TechImg src={heroku} alt="" width="5rem" height="7rem" />
      </TechCont>
      <TechCont longwidth>
        <TechImg src={cypress} alt="" width="18rem" height="7rem" />
      </TechCont>
      <TechCont>
        <TechImg src={netlify} alt="" width="7rem" height="7rem" />
        <h2>NETLIFY</h2>
      </TechCont>
      <TechCont>
        <TechImg src={node} alt="" width="12rem" height="7rem" />
        <h2>NODE</h2>
      </TechCont>
      <TechCont>
        <TechImg src={react} alt="" width="7rem" height="7rem" />
        <h2>REACT</h2>
      </TechCont>
      <TechCont>
        <TechImg src={styled} alt="" width="7rem" height="7rem" />
        <h2 align="center">STYLED COMPONENTS</h2>
      </TechCont>
      <TechCont>
        <TechImg src={travis} alt="" width="7rem" height="9rem" />
        <h2>TRAVIS CI</h2>
      </TechCont>
      <TechCont>
        <TechImg src={postgres} alt="" width="7rem" height="7rem" />
        <h2>POSTGRES</h2>
      </TechCont>
      <TechCont>
        <TechImg src={js} alt="" width="7rem" height="7rem" />
        <h2>JAVASCRIPT</h2>
      </TechCont>
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
