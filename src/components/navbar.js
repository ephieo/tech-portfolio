import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="nbdiv">
      <section className="navbar">
        <Link to="/">
          <h1 className="name">Ephie Oyedoh</h1>
        </Link>
        <ul className="list">
          <Link to="/about">
            <li className="li-item">About</li>
          </Link>
          <Link to="/projects">
            <li className="li-item">Projects</li>
          </Link>
          <Link to="/blog">
            <li className="li-item">Blog</li>
          </Link>
        </ul>
      </section>
    </div>
  );
}
