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
        <div className={this.isPoint(4)}>4</div>
        <div className={this.isPoint(5)}>5</div>
        <div className={this.isPoint(6)}>6</div>
        <div className={this.isPoint(8)}>8</div>
        <div className={this.isPoint(9)}>9</div>
        <div className={this.isPoint(10)}>10</div>
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
