import React from "react";

export default function TravelBtn(props) {
  return (
    <div className="navBtn">
      <a href={props.href}>
        <button className="navbtnstyle">{props.text}</button>
      </a>
    </div>
  );
}
