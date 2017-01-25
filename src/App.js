import React, { Component } from 'react';
//import logo from './logo.svg';
import Craps from './include/Craps.js';
import './App.css';
import Dashboard from './Dashboard.js';
import Messages from './Messages.js';
import Passline from './Passline.js';
import Nopassline from './Nopassline.js';
import BetTable from './BetTable.js';
import Points from './Points.js';
//let craps = new Craps();

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
    this.passBack = this.passBack.bind(this);
  }
  render() {
    return (
      <div className="App">
        <Dashboard bank={this.state.craps.bank} />
        <Points />
        <Nopassline />
        <Passline clickedPassline={this.clickedPassline} />
        <input type="text" onChange={this.inputChange} />
        <button onClick={ this.addFunds }>Add Funds</button>
        <button onClick={ this.rollDice }>Roll Dice</button>
        <Messages message={this.state.craps.message} point={this.state.craps.point}/>
        <BetTable bets={this.state.craps.bets}/>
      </div>
    );
  }
  passBack() {
    alert("testing");
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
}

export default App;
