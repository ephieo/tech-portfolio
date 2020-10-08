import React from "react";
import ProjectCards from "../components/card.js";
// import Card from "./components/card.js";

export default function Projects() {
  return (
    <div className="pjcts">
      <div className="projectBox">
        <ProjectCards
          src={"./../stopwatch-img.png"}
          alt={"picture of stopwatch app"}
          href={"https://ephie-stopwatch.netlify.app/"}
          info={"Stopwatch App"}
        />
        <ProjectCards
          src={"./../marvel-wars-img.png"}
          alt={"picture of marvel wars app"}
          href={"https://marvel-wars.netlify.app/"}
          info={"Marvel Wars App"}
        />
        <ProjectCards
          src={"./../calc-1-img.png"}
          alt={"picture of calculator app"}
          href={"https://ephieo.github.io/FAC20-CALCULATOR/"}
          info={"Calculator 1"}
        />
        <ProjectCards
          src={"./../cal-2-img.png"}
          alt={"picture of second calculator app"}
          href={"https://ephieo.github.io/FAC2020-CALC-2-/"}
          info={"Calculator 2"}
        />
        <ProjectCards
          src={"./../cloudy-app-img.png"}
          alt={"picture of cloudy task app"}
          href={"https://fac20.github.io/Week-3-CIKP/"}
          info={"Cloudy Task App"}
        />
      </div>
    </div>
  );
}
