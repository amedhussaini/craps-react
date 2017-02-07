import React, { Component } from 'react';
import './Dice.css';
class Dice extends Component {
  constructor() {
    super();
    this.getRolls = this.getRolls.bind(this);
  }
  render() {
      var dices = [9856, 9857, 9858, 9859, 9860, 9861];
      let array = this.getRolls();
      if (array !== null) {
        let dice1 = array[0];
        let dice2 = array[1];
        return (
          <div>
          <span className="dice">{String.fromCharCode(dices[dice1 - 1])}</span>
          <span className="dice">{String.fromCharCode(dices[dice2 - 1])}</span>
          </div>
        )
      } else {
        return (
          <div>
          <span className="dice">{String.fromCharCode(9856)}</span>
          <span className="dice">{String.fromCharCode(9856)}</span>
          </div>
        )
      }

  }
  getRolls() {
    //console.log(this.props.roll());
    return this.props.roll();
  }
}

export default Dice;
