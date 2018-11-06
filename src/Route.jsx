import React, {Component} from 'react';

class Route extends Component{
  render(){
    return (
      <div className="route">
        <div className="star"></div>
        <div className="info">
          <div className="routeTitle"></div>
          <div className="shortDesc"></div>
        </div>
        <div className="km"></div>
        <div className="arrow"></div>
      </div>
    );
  }
}

export default Route;