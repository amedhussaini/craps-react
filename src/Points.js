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
        <div className={ this.isPoint(4) + " point" }><div className={ "point-top" }><div>Buy</div><div>Lay</div></div><div className={ "point-middle" }><p className="number">4</p></div><div className={ "point-bottom" }>Place</div></div>
        <div className={ this.isPoint(5) + " point" }><div className={ "point-top" }><div>Buy</div><div>Lay</div></div><div className={ "point-middle" }><p className="number">5</p></div><div className={ "point-bottom" }>Place</div></div>
        <div className={ this.isPoint(6) + " point" }><div className={ "point-top" }><div>Buy</div><div>Lay</div></div><div className={ "point-middle" }><p className="number">6</p></div><div className={ "point-bottom" }>Place</div></div>
        <div className={ this.isPoint(8) + " point" }><div className={ "point-top" }><div>Buy</div><div>Lay</div></div><div className={ "point-middle" }><p className="number">8</p></div><div className={ "point-bottom" }>Place</div></div>
        <div className={ this.isPoint(9) + " point" }><div className={ "point-top" }><div>Buy</div><div>Lay</div></div><div className={ "point-middle" }><p className="number">9</p></div><div className={ "point-bottom" }>Place</div></div>
        <div className={ this.isPoint(10) + " point" }><div className={ "point-top" }><div>Buy</div><div>Lay</div></div><div className={ "point-middle" }><p className="number">10</p></div><div className={ "point-bottom" }>Place</div></div>
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
