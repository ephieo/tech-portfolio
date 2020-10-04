import React from "react";
// import { Link } from "react-router-dom";

export default function ProjectCards(props) {
  return (
    <div>
      <div className="projects">
        <a className="cardlinks" href={props.href} target="blank">
          <img src={props.src} alt={props.alt} className="appimgs" />
        </a>
      </div>
      <p align="center">{props.info}</p>
    </div>
  );
}
