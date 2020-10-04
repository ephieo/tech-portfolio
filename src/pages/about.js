import React from "react";

export default function About() {
  return (
    <div className="cv">
      <video width="820" height="1000" duration="infinity" autoPlay={true}>
        <source src="cv-video.mp4" type="video/webm" />
        <source src="cv-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
