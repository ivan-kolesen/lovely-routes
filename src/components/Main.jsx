import React, { Component } from "react";

import Route from "./Route";
import Description from "./Description";

import { store } from "../index";

import { setValue } from "../actions/index";
import { connect } from "react-redux";

class Main extends Component {
  componentDidMount = () => {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  };

  componentWillUnmount = () => {
    this.unsubscribe();
  };

  handleSearch = e => {
    const { setValue } = this.props;
    setValue(e.target.value);
  };

  render() {
    const [selectedRoute] = store
      .getState()
      .routes.allRoutes.filter(route => route.isSelected);
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
      <div className="row flex-grow-1">
        <div className="d-flex flex-column col-lg-6 p-3 border-right text-center">
          <input
            className="w-100 pl-2 mb-3"
            placeholder="Search..."
            onChange={this.handleSearch}
          />
          <div className="flex-grow-1" style={{ overflow: "scroll" }}>
            {routes.map(route => {
              return <Route key={route.id} route={route} />;
            })}
          </div>
        </div>
        {selectedRoute ? <Description route={selectedRoute} /> : null}
      </div>
    );
  }
}

export default connect(
  null,
  { setValue }
)(Main);
