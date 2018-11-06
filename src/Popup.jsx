import React, { Component } from "react";

class Popup extends Component {
  getClassName = () => {
    const display = this.props.isPopUpOpened ? "d-flex" : "d-none";
    return `position-absolute justify-content-center align-items-center w-100 h-100 ${display}`;
  };

  render() {
    return (
      <div
        className={this.getClassName()}
        style={{ backgroundColor: "rgba(255,255,255,0.8)", top: 0 }}
      >
        <div className="w-75 h-75 bg-light border border-info rounded">
          <div className="panel">
            <button
              className="btn btn-sm close mr-2"
              onClick={this.props.onCloseBtn}
            >
              &times;
            </button>
          </div>
          <div className="page">
            <div className="info">
              <div className="title" />
              <div className="shortDesc" />
              <div className="fullDesc" />
              <div className="length" />
              <div className="button" />
            </div>
            <div className="map" />
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
