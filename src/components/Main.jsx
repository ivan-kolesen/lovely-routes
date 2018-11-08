import React, { Component } from "react";

import Route from "./Route";
import Description from "./Description";

import store from "../store/store";
import { setValue } from "../ducks/searchbar";
import { setRoutes } from "../ducks/routes";

import { connect } from "react-redux";
import { fetchRoutes, addRoute } from "../ducks/routes";

import _ from "lodash";

class Main extends Component {
  componentWillMount = () => {
    this.props.fetchRoutes();
  };

  componentDidMount = () => {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  };

  componentWillUnmount = () => {
    this.unsubscribe();
  };

  handleSearch = e => {
    store.dispatch(setValue(e.target.value));
  };

  render() {
    let { routes } = this.props;
    console.log(routes);

    /*const selectedRouteId = _.findKey(store.getState().routes.allRoutes, 'isSelected');*/

    /*let routes = store
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
    });*/

    return (
      <div className="row flex-grow-1">
        <div className="d-flex flex-column col-lg-6 p-3 border-right text-center">
          <input
            className="w-100 pl-2 mb-3"
            placeholder="Search..."
            onChange={this.handleSearch}
          />
          <div className="flex-grow-1" style={{ overflow: "scroll" }}>
            {_.map(routes, (value, key) => {
              return <Route key={key} route={value} routeId={key} />;
            })}
          </div>
        </div>
        {/*{selectedRouteId ? <Description selectedRouteId={selectedRouteId} /> : null}*/}
      </div>
    );
  }
}

const mapStateToProps = ({ routes }) => {
  return {
    routes
  };
};

export default connect(
  mapStateToProps,
  { fetchRoutes, addRoute }
)(Main);
