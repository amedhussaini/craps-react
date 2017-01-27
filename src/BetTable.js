import React, { Component } from 'react'
import './index.css';
class BetTable extends Component {

render() {

  let bets = this.props.bets;
  let betsList = bets.map((name, index) => {
    return (
      <tr key={index}><td>{name.type}</td><td>{name.value}</td></tr>
    )
  })
  return (
    <table className="u-full-width">
    <thead>
      <tr><th>Bet</th><th>Wager</th></tr>
    </thead>
    <tbody>
      { betsList }
    </tbody>
    </table>
  )
}

}

export default BetTable;
