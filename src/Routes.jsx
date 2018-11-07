import React, { Component } from "react";
import Route from "./Route";

import store from "./store/store";

class Routes extends Component {
  render() {
    let routes = store
      .getState()
      .routes.allRoutes.sort((a, b) => b.isFavourite - a.isFavourite);
    routes = routes.filter(route => {
      const inputValue = store.getState().searchBar.value.toLowerCase();
      const formatedTitle = route.title.toLowerCase();
      const formatedDesc = route.fullDesc.toLowerCase();
      return (
        formatedTitle.indexOf(inputValue) > -1 ||
        formatedDesc.indexOf(inputValue) > -1
      );
    });
    return (
      <div className="flex-grow-1" style={{ overflow: "scroll" }}>
        {routes.map(route => {
          return <Route key={route.id} route={route} />;
        })}
      </div>
    );
  }
}

export default Routes;
