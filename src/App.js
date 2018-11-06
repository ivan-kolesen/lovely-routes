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

  handleIsSelected = route => {
    const routes = [...this.state.routes];
    const index = routes.indexOf(route);
    routes.forEach(route => (route.isSelected = false));
    routes[index].isSelected = true;
    this.setState(routes);
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

  handleRemoveRoute = id => {
    const routes = this.state.routes.filter(route => route.id !== id);
    this.setState({ routes });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <Main
          routes={this.state.routes}
          inputValue={this.state.inputValue}
          onInputChange={this.handleInputChange}
          onToggleIsFavorite={this.handleIsFavorite}
          onSelectRoute={this.handleIsSelected}
          onRemoveRoute={this.handleRemoveRoute}
        />
        <Popup />
      </Fragment>
    );
  }
}

export default App;
