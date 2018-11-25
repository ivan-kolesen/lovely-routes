import React, { Component } from "react";
import { Map } from "./Map";

import { removeRoute, likeRoute } from "../actions/index";
import { connect } from "react-redux";
import { store } from "../index";

class Description extends Component {
  componentDidMount = () => {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  };

  componentWillUnmount = () => {
    this.unsubscribe();
  };

  handleLike = (id, newState) => {
    const { likeRoute } = this.props;
    likeRoute(id, newState);
  };

  handleRemove = id => {
    const { removeRoute } = this.props;
    removeRoute(id);
  };

  getClassName = () => {
    return `btn btn-sm m-1 ${
      this.props.route.isFavorite ? "btn-warning" : "btn-success"
    }`;
  };

  getButtonName = () => {
    return this.props.route.isFavorite
      ? "Remove from favorites"
      : "Add to favorites";
  };

  render() {
    const { route } = this.props;
    return (
      <div className="d-flex flex-column col-lg-6 p-4 text-center">
        <div className="d-flex flex-row justify-content-between p-2">
          <div className="">{route.title}</div>
          <div className="">{route.length}</div>
        </div>
        <div className="p-2 flex-grow-1" style={{ overflow: "scroll" }}>
          {route.fullDesc}
        </div>
        <div className="h-50 bg-warning">
          <Map isMarkerShown />
        </div>
        <div className="">
          <button
            className={this.getClassName()}
            onClick={() => {
              this.handleLike(route.id, !route.isFavorite);
            }}
          >
            {this.getButtonName()}
          </button>
          <button
            className="btn btn-sm btn-danger m-1"
            onClick={() => {
              this.handleRemove(route.id);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { removeRoute, likeRoute }
)(Description);
