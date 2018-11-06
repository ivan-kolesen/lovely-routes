import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Popup from "./Popup";
import Header from "./Header";
import Main from "./Main";
import { routes } from "./config";

class App extends Component {
  state = {
    inputValue: "",
    routes: routes
  };

  handleIsFavorite = route => {
    const routes = [...this.state.routes];
    const index = routes.indexOf(route);
    routes[index].isFavourite = !routes[index].isFavourite;
    this.setState(routes);
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <Main
          routes={this.state.routes}
          inputValue={this.state.inputValue}
          onToggleIsFavorite={this.handleIsFavorite}
          onInputChange={this.handleInputChange}
        />
        <Popup />
      </Fragment>
    );
  }
}

export default App;
