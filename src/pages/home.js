import React from "react";
import Intro from "../components/intro.js";
import Face from "../components/images.js";
import TechStack from "../components/techstack.js";
import TeachStackInfo from "../components/tech-stack-info.js";
import TravelBtn from "../components/travBtn.js";

export default function Home() {
  return (
    <>
      <div className="main">
        <Intro />
        <Face />
      </div>
      <TravelBtn href="#techcont" text="SCROLL DOWN" />
      <div className="techstack-outer">
        <TechStack class="techcont" />
        <TeachStackInfo />
      </div>
      <TravelBtn href="#nbdiv" text="SCROLL UP" />
    </>
  );
}
