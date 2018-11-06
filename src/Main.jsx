import React, { Component } from "react";
import Routes from "./Routes";
import Description from "./Description";

class Main extends Component {
  render() {
    return (
      <div className="row flex-grow-1">
        <div className="col-lg-6 p-3 border-right text-center">
          <input className="w-100 pl-2" placeholder="Search..." />
          <Routes />
        </div>
        <Description />
      </div>
    );
  }
}

export default Main;
