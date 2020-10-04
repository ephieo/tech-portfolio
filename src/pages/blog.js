import React from "react";
import ProjectCards from "../components/card.js";

export default function Blog() {
  return (
    <div>
      <div className="projectBox">
        <ProjectCards
          src={"./../stopwatch-blog.png"}
          alt={"picture of stopwatch blog piece"}
          href={
            "https://dev.to/ephieo/beginners-attempt-at-creating-a-javascript-stopwatch-4kg6"
          }
          info={"Beginners attempt at creating a JavaScript stopwatch."}
        />
      </div>
    </div>
  );
}
//ephie-portfolio/public/stopwatch-img.png
