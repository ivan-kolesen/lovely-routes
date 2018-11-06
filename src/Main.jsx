import React, {Component} from 'react';
import Routes from "./Routes";
import Description from "./Description";

class Main extends Component{
  render(){
    return (
      <div className="main">
        <div className="allRoutes">
          <div className="input"></div>
          <Routes />
        </div>
        <Description />
      </div>
    );
  }
}

export default Main;