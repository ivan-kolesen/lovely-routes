/*
import React, { Component } from "react";

import store from "../store/store";
import { closePopUpWindow } from "../ducks/popupwindow";
import { setRoutes } from "../ducks/routes";

const hash = require("object-hash");

class Popup extends Component {
  state = {
    id: "",
    isSelected: false,
    isFavourite: false,
    title: "",
    shortDesc: "",
    fullDesc: "",
    length: "10km"
  };

  handleCloseBtn = () => {
    store.dispatch(closePopUpWindow());
  };

  handleInputChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    const id = hash(this.state);

    this.setState(() => {
      return { id: id };
    });

    const updatedRoutes = [...store.getState().routes.allRoutes, this.state];
    store.dispatch(setRoutes(updatedRoutes));
    store.dispatch(closePopUpWindow());
  };

  render() {
    return (
      <div
        className="d-flex position-absolute justify-content-center align-items-center w-100 h-100"
        style={{ backgroundColor: "rgba(255,255,255,0.8)", top: 0 }}
      >
        <div className="position-absolute row w-75 h-75 bg-light border border-info rounded">
          <form
            className="d-flex flex-column col-lg-6 h-100 p-3 was-validated"
            noValidate=""
            style={{ overflow: "hidden" }}
          >
            <div className="form-group">
              <label htmlFor="inputTitle">Route title</label>
              <input
                type="text"
                className="form-control"
                id="inputTitle"
                name="title"
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputShortDesc">Route short description</label>
              <textarea
                className="form-control"
                id="inputShortDesc"
                name="shortDesc"
                onChange={this.handleInputChange}
                rows="3"
                maxLength="160"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputFullDesc">Route full description</label>
              <textarea
                className="form-control"
                id="inputShortDesc"
                name="fullDesc"
                onChange={this.handleInputChange}
                rows="3"
                required
              />
            </div>
            <div className="text-center">45km</div>
            <button
              type="button"
              className="btn btn-info w-50 m-auto"
              onClick={() => {
                this.handleSubmit();
              }}
            >
              Submit
            </button>
          </form>
          <div className="col-lg-6 h-100 bg-success" />
          <button
            className="btn btn-sm close position-absolute"
            style={{ top: "2%", right: "2%" }}
            onClick={this.handleCloseBtn}
          >
            &times;
          </button>
        </div>
      </div>
    );
  }
}

export default Popup;
*/
