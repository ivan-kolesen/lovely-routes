import React, { Component } from "react";

import { setRoutes } from "../actions/index";
import { connect } from "react-redux";

import { store } from "../index";

class Route extends Component {
  componentDidMount = () => {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  };

  componentWillUnmount = () => {
    this.unsubscribe();
  };

  getClassName = route => {
    return `row m-0 border border-dark rounded mt-1 ${
      route.isSelected ? "bg-info" : null
    }`;
  };

  handleSelect = route => {
    const { setRoutes } = this.props;
    const routes = store.getState().routes.allRoutes;
    const index = routes.indexOf(route);
    routes.forEach(route => (route.isSelected = false));
    routes[index].isSelected = true;
    store.dispatch(setRoutes(routes));
  };

  handleLike = route => {
    const routes = store.getState().routes.allRoutes;
    const index = routes.indexOf(route);
    routes[index].isFavourite = !routes[index].isFavourite;
    store.dispatch(setRoutes(routes));
  };

  render() {
    const { route } = this.props;
    return (
      <div
        className={this.getClassName(route)}
        onClick={() => {
          this.handleSelect(route);
        }}
      >
        <div className="d-flex align-items-center justify-content-center col-lg-2 p-1">
          <svg
            width="40"
            height="40"
            onClick={() => {
              this.handleLike(route);
            }}
          >
            <polygon
              points="20,2 8,39.6 38,15.6 2,15.6 32,39.6"
              stroke="black"
              strokeWidth="1"
              fill={route.isFavourite ? "yellow" : "transparent"}
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
  { setRoutes }
)(Route);
