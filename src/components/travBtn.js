import React from "react";

export default function TravelBtn(props) {
  return (
    <div className="navBtn">
      <a href={props.href}>
        <button className={props.className} id={props.id}>
          {props.text}
        </button>
      </a>
    </div>
  );
}
