import React, { Component } from "react";
import Route from "./Route";

class Routes extends Component {
  render() {
    let routes = this.props.routes.sort(
      (a, b) => b.isFavourite - a.isFavourite
    );
    return (
      <div className="flex-grow-1" style={{ overflow: "scroll" }}>
        {routes.map(route => {
          return (
            <Route
              key={route.id}
              route={route}
              onToggleIsFavorite={this.props.onToggleIsFavorite}
            />
          );
        })}
      </div>
    );
  }
}

export default Routes;
