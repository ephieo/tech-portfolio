import React from "react";
import css from "./../images/css.png";
import html from "./../images/html.png";
import jest from "./../images/jest.png";
import cypress from "./../images/cypress.png";
import heroku from "./../images/js.png";
import netlify from "./../images/netlify.png";
import node from "./../images/node.png";
import js from "./../images/js.png";

export default function TeachStack(props) {
  return (
    <div className="techcont">
      <section className="techstack-inner">
        <marquee scrollAmount="30">
          <Img src={css} alt="css logo" />
          <Img src={cypress} alt="cypress logo" />
          <Img src={html} alt="html logo" />
          <Img src={heroku} alt="heroku logo" />
          <Img src={jest} alt="jest logo" />
          <Img src={js} alt="javascript logo" />
          <Img src={netlify} alt="netlify logo" />
          <Img src={node} alt="node.js logo" />
        </marquee>
      </section>
    </div>
  );
}

function Img(props) {
  return (
    <>
      <img src={props.src} alt={props.alt} className="logo" />
    </>
  );
}
