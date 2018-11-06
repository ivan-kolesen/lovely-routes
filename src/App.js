import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Popup from "./Popup";
import Header from "./Header";
import Main from "./Main";
import { routes } from "./config";

class App extends Component {
  state = {
    inputValue: "",
    isPopUpOpened: false,
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

  handleAddRouteBtn = () => this.setState({ isPopUpOpened: true });

  handleCloseBtn = () => this.setState({ isPopUpOpened: false });

  handleAddRoute = route => {
    const routes = [...this.state.routes, route];
    this.setState({ routes });
  };

  render() {
    return (
      <Fragment>
        <div
          className="container bg-light d-flex flex-column"
          style={{ height: "100vh" }}
        >
          <Header onAddRouteBtn={this.handleAddRouteBtn} />
          <Main
            routes={this.state.routes}
            inputValue={this.state.inputValue}
            onInputChange={this.handleInputChange}
            onToggleIsFavorite={this.handleIsFavorite}
            onSelectRoute={this.handleIsSelected}
            onRemoveRoute={this.handleRemoveRoute}
          />
        </div>
        {this.state.isPopUpOpened ? (
          <Popup
            isPopUpOpened={this.state.isPopUpOpened}
            onCloseBtn={this.handleCloseBtn}
            onAddRoute={this.handleAddRoute}
          />
        ) : null}
      </Fragment>
    );
  }
}

export default App;
