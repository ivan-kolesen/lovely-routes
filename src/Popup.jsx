import React, {Component} from 'react';

class Popup extends Component{
  render(){
    return (
      <div className="popup">
        <div className="panel"></div>
        <div className="page">
          <div className="info">
            <div className="title"></div>
            <div className="shortDesc"></div>
            <div className="fullDesc"></div>
            <div className="length"></div>
            <div className="button"></div>
          </div>
          <div className="map"></div>
        </div>
      </div>
    );
  }
}

export default Popup;