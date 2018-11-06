import React, {Component} from 'react';

class Description extends Component{
  render(){
    return (
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
    );
  }
}

export default Description;