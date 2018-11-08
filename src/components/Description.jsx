import React, { Component } from "react";

import { setRoutes } from "../actions/index";
import { connect } from "react-redux";
import { store } from "../index";

class Description extends Component {
  handleLike = route => {
    const routes = store.getState().routes.allRoutes;
    const index = routes.indexOf(route);
    routes[index].isFavourite = !routes[index].isFavourite;
    store.dispatch(setRoutes(routes));
  };

  handleRemove = id => {
    const routes = store
      .getState()
      .routes.allRoutes.filter(route => route.id !== id);
    store.dispatch(setRoutes(routes));
  };

  getClassName = () => {
    return `btn btn-sm m-1 ${
      this.props.route.isFavourite ? "btn-warning" : "btn-success"
    }`;
  };

  getButtonName = () => {
    return this.props.route.isFavourite
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
        <div className="h-50 bg-warning" />
        <div className="">
          <button
            className={this.getClassName()}
            onClick={() => {
              this.handleLike(route);
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
  { setRoutes }
)(Description);
