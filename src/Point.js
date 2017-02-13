import React, { Component } from 'react';
import './Point.css';

export default class Point extends Component {
  constructor() {
    super();
    this.isPoint = this.isPoint.bind(this);

  }
  render() {
    return(
      <div className={ this.isPoint(this.props.number) + " point" }><div className={ "point-top" }><div>Buy</div><div>Lay</div></div><div className={ "point-middle" }><p className="number">{ this.props.number }</p></div><div className={ "point-bottom" }>Place</div></div>
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
