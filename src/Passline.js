import React, { Component } from 'react'
import './passline.css'

class Passline extends Component {
  constructor() {
    super();
    this.clickedPassline = this.clickedPassline.bind(this);
  }

  render() {
    return (
      <div className="passline" onClick={ this.clickedPassline }>PASS LINE</div>
    )
  }
  clickedPassline() {
    this.props.clickedPassline()
  }
}

export default Passline;
