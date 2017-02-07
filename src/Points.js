import React, { Component } from 'react'
import './points.css';

class Points extends Component {
  constructor() {
    super();
    this.isPoint = this.isPoint.bind(this);
  }
  render() {
    return (
      <div className="points">
        <div className={this.isPoint(4)}><div>Buy Lay</div><p className="number">4</p><div>Place</div></div>
        <div className={this.isPoint(5)}><div>Buy Lay</div><p className="number">5</p><div>Place</div></div>
        <div className={this.isPoint(6)}><div>Buy Lay</div><p className="number">6</p><div>Place</div></div>
        <div className={this.isPoint(8)}><div>Buy Lay</div><p className="number">8</p><div>Place</div></div>
        <div className={this.isPoint(9)}><div>Buy Lay</div><p className="number">9</p><div>Place</div></div>
        <div className={this.isPoint(10)}><div>Buy Lay</div><p className="number">10</p><div>Place</div></div>
      </div>
    )
  }
  isPoint(point) {
    if (this.props.point === point) {
      return "on";
    } else {
      return "off"
    }
  }
}

export default Points;
