import React, { Component } from "react";

import { likeRoute, selectRoute } from "../actions/index";
import { connect } from "react-redux";

import { store } from "../index";

class Route extends Component {
  componentDidMount = () => {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  };

  componentWillUnmount = () => {
    this.unsubscribe();
  };

  getClassName = id => {
    return `row m-0 border border-dark rounded mt-1 ${
      store.getState().selectedRoute.id === id ? "bg-info" : null
    }`;
  };

  handleSelect = id => {
    const { selectRoute } = this.props;
    store.dispatch(selectRoute(id));
  };

  handleLike = (id, newState) => {
    const { likeRoute } = this.props;
    likeRoute(id, newState);
  };

  render() {
    const { route } = this.props;
    return (
      <div
        className={this.getClassName(route.id)}
        onClick={() => {
          this.handleSelect(route.id);
        }}
      >
        <div className="d-flex align-items-center justify-content-center col-lg-2 p-1">
          <svg
            width="40"
            height="40"
            onClick={() => {
              this.handleLike(route.id, !route.isFavorite);
            }}
          >
            <polygon
              points="20,2 8,39.6 38,15.6 2,15.6 32,39.6"
              stroke="black"
              strokeWidth="1"
              fill={route.isFavorite ? "yellow" : "transparent"}
            />
          </svg>
        </div>
        <div className="col-lg-7 p-1">
          <h2 className="h5 m-0 p-1">{route.title}</h2>
          <p className="m-0 p-1">{route.shortDesc}</p>
        </div>
        <div className="d-flex align-items-center justify-content-center col-lg-2 p-1">
          {route.length}
        </div>
        <div className="d-flex align-items-center justify-content-center col-lg-1 p-1">
          ->
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { likeRoute, selectRoute }
)(Route);
