import React, { Component } from "react";

import store from "../store/store";

import { selectRoute, likeRoute } from "../ducks/route";
import { connect } from "react-redux";

class Route extends Component {
  getClassName = id => {
    return `row m-0 border border-dark rounded mt-1 ${
      store.getState().selectedRoute.id === id ? "bg-info" : null
    }`;
  };

  handleSelect = id => {
    store.dispatch(selectRoute(id));
  };

  handleLike = (id, isFavorite) => {
    const { likeRoute } = this.props;
    likeRoute(id, !isFavorite);
  };

  componentDidMount = () => {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  };

  componentWillUnmount = () => {
    this.unsubscribe();
  };

  render() {
    const { route, routeId } = this.props;

    return (
      <div
        className={this.getClassName(routeId)}
        onClick={() => {
          this.handleSelect(routeId);
        }}
      >
        <div className="d-flex align-items-center justify-content-center col-lg-2 p-1">
          <svg
            width="40"
            height="40"
            onClick={() => {
              this.handleLike(routeId, route.isFavorite);
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

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(
  mapStateToProps,
  { likeRoute }
)(Route);
