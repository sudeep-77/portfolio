import React from "react";
import "./index.css";

import Navbar from "./component/Navbar";
import About from "./component/About";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import Connect from "./component/Connect";

const App = () => {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Connect />
    </main>
  );
};

export default App;
