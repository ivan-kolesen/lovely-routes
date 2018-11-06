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

  handleIsFavorite = route => {
    const routes = [...this.state.routes];
    const index = routes.indexOf(route);
    routes[index].isFavourite = !routes[index].isFavourite;
    this.setState(routes);
  };

  render() {
    return (
      <Fragment>
        <Header />
        <Main
          routes={this.state.routes}
          onToggleIsFavorite={this.handleIsFavorite}
        />
        <Popup />
      </Fragment>
    );
  }
}

export default App;
