import React, { Component } from "react";

import Routes from "./Routes";
import Description from "./Description";

import store from "./store/store";
import { setValue } from "./ducks/searchbar";

class Main extends Component {
  handleSearch = e => {
    store.dispatch(setValue(e.target.value));
  };

  render() {
    const [selectedRoute] = store
      .getState()
      .routes.allRoutes.filter(route => route.isSelected);
    return (
      <div className="row flex-grow-1">
        <div className="d-flex flex-column col-lg-6 p-3 border-right text-center">
          <input
            className="w-100 pl-2 mb-3"
            placeholder="Search..."
            onChange={this.handleSearch}
          />
          <Routes />
        </div>
        {selectedRoute ? <Description route={selectedRoute} /> : null}
      </div>
    );
  }
}

export default Main;
