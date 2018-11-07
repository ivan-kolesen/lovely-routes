import React, { Component } from "react";

import store from "../store/store";
import { setRoutes } from "../ducks/routes";

class Description extends Component {
  /*handleLike = route => {
    const routes = [...store.getState().routes.allRoutes];
    const index = routes.indexOf(route);
    routes[index].isFavourite = !routes[index].isFavourite;
    store.dispatch(setRoutes(routes));
  };

  handleRemove = id => {
    const routes = store
      .getState()
      .routes.allRoutes.filter(route => route.id !== id);
    store.dispatch(setRoutes(routes));
  };*/

  /*getClassName = () => {
    return `btn btn-sm m-1 ${
      store.getState().routes.allRoutes.selectedRouteId.isFavourite ? "btn-warning" : "btn-success"
    }`;
  };

  getButtonName = () => {
    return store.getState().routes.allRoutes.selectedRouteId.isFavourite
      ? "Remove from favorites"
      : "Add to favorites";
  };*/

  render() {
    return (
      <div className="d-flex flex-column col-lg-6 p-4 text-center">
        <div className="d-flex flex-row justify-content-between p-2">
          <div className="">title</div>
          <div className="">length</div>
        </div>
        <div className="p-2 flex-grow-1" style={{ overflow: "scroll" }}>
          fulldesc
        </div>
        <div className="h-50 bg-warning" />
        <div className="">
          <button className="" onClick={() => {}}>
            btnname
          </button>
          <button className="btn btn-sm btn-danger m-1" onClick={() => {}}>
            Remove
          </button>
        </div>
      </div>
    );
  }
}

export default Description;
