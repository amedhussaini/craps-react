import React, { Component } from 'react'
import './points.css';
import Point from './Point.js';

class Points extends Component {
  constructor() {
    super();
    this.isPoint = this.isPoint.bind(this);
  }
  render() {
    return (
      <div className="points">
              <Point point={ this.props.point } number={ 4 }/>
              <Point point={ this.props.point } number={ 5 }/>
              <Point point={ this.props.point } number={ 6 }/>
              <Point point={ this.props.point } number={ 8 }/>
              <Point point={ this.props.point } number={ 9 }/>
              <Point point={ this.props.point } number={ 10 }/>
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
