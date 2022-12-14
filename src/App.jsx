import React from "react";
import "./app.css";

import {
  Footer,
  Blog,
  Possibility,
  Header,
  WhatGPT3,
  Features,
} from "./containers";

import { CTA, Brand, Navbar } from "./components";

const App = () => {
  return (
    <div className="app">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
