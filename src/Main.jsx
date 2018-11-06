import React, { Component } from "react";
import Routes from "./Routes";
import Description from "./Description";

class Main extends Component {
  render() {
    const [selectedRoute] = this.props.routes.filter(route => route.isSelected);
    return (
      <div className="row flex-grow-1">
        <div className="d-flex flex-column col-lg-6 p-3 border-right text-center">
          <input
            className="w-100 pl-2 mb-3"
            placeholder="Search..."
            onChange={this.props.onInputChange}
          />
          <Routes
            routes={this.props.routes}
            inputValue={this.props.inputValue}
            onToggleIsFavorite={this.props.onToggleIsFavorite}
            onSelectRoute={this.props.onSelectRoute}
          />
        </div>
        {selectedRoute ? (
          <Description
            route={selectedRoute}
            onToggleIsFavorite={this.props.onToggleIsFavorite}
            onRemoveRoute={this.props.onRemoveRoute}
          />
        ) : null}
      </div>
    );
  }
}

export default Main;
