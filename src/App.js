import React, { Component } from 'react';
import Craps from './include/Craps.js';
import Dashboard from './Dashboard.js';
import Messages from './Messages.js';
import Passline from './Passline.js';
import Nopassline from './Nopassline.js';
import BetTable from './BetTable.js';
import Points from './Points.js';
import Dice from './Dice.js';
import Field from './Field.js';
import Come from './Come.js';

import './reset.css';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.craps = new Craps();
    let initial_craps_state = this.craps.getState();

    this.state = {
      value: 500,
      craps: initial_craps_state
    }

    this.addFunds = this.addFunds.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.getBank = this.getBank.bind(this);
    this.rollDice = this.rollDice.bind(this);
    this.clickedPassline = this.clickedPassline.bind(this);
    this.clickedDontpassline = this.clickedDontpassline.bind(this);
    this.clickedField = this.clickedField.bind(this);
    this.getRoll = this.getRoll.bind(this);
  }
  render() {
    return (
      <div className="App">
        <div className="left-container">
          <Dashboard bank={ this.state.craps.bank } />
          <input type="text" onChange={ this.inputChange } />
          <button onClick={ this.addFunds }>Add Funds</button>
          <Dice roll={ this.getRoll }/>
          <button onClick={ this.rollDice }>Roll Dice</button>
          <BetTable bets={ this.state.craps.bets }/>
          <Messages messages={ this.state.craps.messages } />
        </div>
        <div className="right-container">
          <Points point={ this.state.craps.point } />
          <Come />
          <Field clickedField={ this.clickedField }/>
          <Nopassline clickedDontpassline={ this.clickedDontpassline }/>
          <Passline clickedPassline={ this.clickedPassline } />



        </div>
      </div>
    );
  }
  addFunds() {
    let new_state = this.craps.addFunds(parseInt(this.state.forms.deposit, 10));
    this.setState({craps: new_state});

  }
  inputChange(event) {
    this.setState({forms: {deposit: parseInt(event.target.value, 10)}});
  }
  getBank() {
    return this.state.forms.deposit;
  }
  rollDice() {
    this.setState(this.craps.roll());
  }
  clickedPassline() {
    this.setState(this.craps.placeBet(5, "passline"));
  }
  clickedDontpassline() {
    this.setState(this.craps.placeBet(5, "dontpass"));
  }
  clickedField() {
    this.setState(this.craps.placeBet(5, "field"));
  }
  getRoll() {
    if (this.state.craps.rolls.length > 0) {
      return this.state.craps.rolls[this.state.craps.rolls.length -1];
    } else {
      return null;
    }
  }
}

export default App;
