import React, { Component } from 'react'
import './nopassline.css'



class Nopassline extends Component {

  constructor() {
    super();
    this.clickedDontpassline = this.clickedDontpassline.bind(this);
  }

  render() {
    return (
      <div className="nopassline" onClick={ this.clickedDontpassline }>DONT PASS</div>
    )
  }
  clickedDontpassline() {
    this.props.clickedDontpassline();
  }
}

export default Nopassline;
