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
        <div className="position-absolute row w-75 h-75 bg-light border border-info rounded">
          <form
            className="d-flex flex-column col-lg-6 h-100 p-3"
            style={{ overflow: "hidden" }}
          >
            <div className="form-group">
              <label htmlFor="inputTitle">Route title</label>
              <input type="text" className="form-control" id="inputTitle" />
            </div>
            <div className="form-group">
              <label htmlFor="inputShortDesc">Route short description</label>
              <textarea
                className="form-control"
                id="inputShortDesc"
                rows="3"
                maxLength="160"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputFullDesc">Route full description</label>
              <textarea className="form-control" id="inputShortDesc" rows="3" />
            </div>
            <div className="text-center">45km</div>
            <button type="submit" className="btn btn-info w-50 m-auto">
              Submit
            </button>
          </form>
          <div className="col-lg-6 h-100 bg-success" />
          <button
            className="btn btn-sm close position-absolute"
            style={{ top: "2%", right: "2%" }}
            onClick={this.props.onCloseBtn}
          >
            &times;
          </button>
        </div>
      </div>
    );
  }
}

export default Popup;
