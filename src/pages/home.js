import React from "react";
import Intro from "../components/intro.js";
import Face from "../components/images.js";
import { TechStack, Img } from "../components/techstack.js";
import TechStack2 from "../components/techCont2";
import arrow from "./../images/arrow.svg";
//ephie-portfolio/src/images/arrow.svg

export default function Home() {
  return (
    <section className="homeSection">
      <div className="main">
        <Intro />
        <Face />
      </div>
      <div className="downbtn">
        <h1>Tech Stack</h1>
        <a href="#techcont">
          <Img src={arrow} alt=" down button" class="downbtnstyle" />
        </a>
      </div>
      <div className="techstack-outer">
        <TechStack class="techcont" />
        <TechStack2 class="techcont" />
      </div>
    </section>
  );
}
