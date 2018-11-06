import React, { Component } from "react";

class Description extends Component {
  render() {
    return (
      <div className="d-flex flex-column col-lg-6 p-4 text-center">
        <div className="d-flex flex-row justify-content-between p-2">
          <div className="">{this.props.route.title}</div>
          <div className="">{this.props.route.length}</div>
        </div>
        <div className="p-2 flex-grow-1" style={{ overflow: "scroll" }}>
          {this.props.route.fullDesc}
        </div>
        <div className="h-50 bg-warning" />
        <div className="">
          <button
            className="btn btn-sm btn-success m-1"
            onClick={() => {
              this.props.onToggleIsFavorite(this.props.route);
            }}
          >
            {this.props.route.isFavourite
              ? "Remove from favorites"
              : "Add to favorites"}
          </button>
          <button
            className="btn btn-sm btn-danger m-1"
            onClick={() => {
              this.props.onRemoveRoute(this.props.route.id);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
}

export default Description;
