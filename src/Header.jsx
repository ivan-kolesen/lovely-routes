import React, { Component } from "react";

import store from "./store/store";
import { openPopUpWindow } from "./ducks/popupwindow";

class Header extends Component {
  handleAddPathBtn = () => {
    store.dispatch(openPopUpWindow());
  };

  render() {
    return (
      <div className="row border-bottom border-info">
        <div className="col-lg-8 p-3 text-center">
          <h1 className="h1">LovelyRoutes</h1>
        </div>
        <div className="col-lg-4 p-3 text-center">
          <button
            className="btn btn-sm btn-info pl-4 pr-4 m-2"
            onClick={this.handleAddPathBtn}
          >
            Add Path
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
