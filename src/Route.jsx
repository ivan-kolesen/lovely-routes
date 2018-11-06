import React, { Component } from "react";

class Route extends Component {
  render() {
    return (
      <div className="row m-0 border border-dark rounded mt-1">
        <div className="d-flex align-items-center justify-content-center col-lg-2 p-1">
          <svg width="40" height="40">
            <polygon
              points="20,2 8,39.6 38,15.6 2,15.6 32,39.6"
              stroke="black"
              strokeWidth="1"
            />
          </svg>
        </div>
        <div className="col-lg-7 p-1">
          <h2 className="h5 m-0 p-1">{this.props.route.title}</h2>
          <p className="m-0 p-1">{this.props.route.shortDesc}</p>
        </div>
        <div className="d-flex align-items-center justify-content-center col-lg-2 p-1">
          {this.props.route.length}
        </div>
        <div className="d-flex align-items-center justify-content-center col-lg-1 p-1">
          ->
        </div>
      </div>
    );
  }
}

export default Route;
