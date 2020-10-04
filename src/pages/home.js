import React from "react";
import Intro from "../components/intro.js";
import Face from "../components/images.js";
import TechStack from "../components/techstack.js";
import TeachStackInfo from "../components/tech-stack-info.js";

export default function Home() {
  return (
    <>
      <div className="main">
        <Intro />
        <Face />
      </div>
      <div className="techstack-outer">
        <TechStack />
        <TeachStackInfo />
      </div>
    </>
  );
}
