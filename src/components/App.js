import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Popup from "./Popup";
import Header from "./Header";
import Main from "./Main";

import { store } from "../index";

import { fetchRoutes } from "../actions/index";

class App extends Component {
  componentWillMount() {
    this.props.fetchRoutes();
  }

  componentDidMount = () => {
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  };

  componentWillUnmount = () => {
    this.unsubscribe();
  };

  render() {
    return (
      <Fragment>
        <div
          className="container bg-light d-flex flex-column"
          style={{ height: "100vh" }}
        >
          <Header />
          <Main />
        </div>
        {store.getState().popUpWindow.isOpened ? <Popup /> : null}
      </Fragment>
    );
  }
}

export default connect(
  null,
  { fetchRoutes }
)(App);
