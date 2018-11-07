import React, { Component, Fragment } from "react";

import Popup from "./Popup";
import Header from "./Header";
import Main from "./Main";
import { routes } from "./config";

import store from "./store/store";
import { setRoutes } from "./ducks/routes";

class App extends Component {
  componentWillMount = () => {
    store.dispatch(setRoutes(routes));
  };

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

export default App;
