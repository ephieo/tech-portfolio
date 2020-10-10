import React from "react";
import "./App.css";
// import Card from "./components/card.js";
import Navbar from "./components/navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home.js";
import Resume from "./pages/resume.js";
import Blog from "./pages/blog.js";
import Projects from "./pages/projects.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <section className="homeSection">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={Projects} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
