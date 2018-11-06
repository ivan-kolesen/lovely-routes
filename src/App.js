import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="bg-success" style={{height: "100vh"}}>
        <div className="header">
          <div className="title"></div>
          <div className="button"></div>
        </div>
        <div className="main">
          <div className="allRoutes">
            <div className="input"></div>
            <div className="routes">
              <div className="route">
                <div className="star"></div>
                <div className="info">
                  <div className="routeTitle"></div>
                  <div className="shortDesc"></div>
                </div>
                <div className="km"></div>
                <div className="arrow"></div>
              </div>
            </div>
          </div>
          <div className="selectedRoute">
            <div className="selectedTitle">
              <div className="title"></div>
              <div className="km"></div>
            </div>
            <div className="fullDesc"></div>
            <div className="image"></div>
            <div className="buttons">
              <div className="button1"></div>
              <div className="button2"></div>
            </div>
          </div>
        </div>
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
      </div>
    );
  }
}

export default App;
