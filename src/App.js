import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Popup from "./Popup";
import Header from "./Header";
import Main from "./Main";
import { routes } from "./config";

class App extends Component {
  state = {
    input: "",
    routes: routes
  };

  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        <Popup />
      </Fragment>
    );
  }
}

export default App;
