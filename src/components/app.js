import React, { Component } from "react";
import Slider from "./slider";
import Navbar from "./nav/navbar";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Slider />
      </div>
    );
  }
}
