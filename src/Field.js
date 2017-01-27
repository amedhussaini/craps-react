import React, { Component } from 'react';
import './Field.css';

class Field extends Component {

  constructor() {
    super();
    this.clickedField = this.clickedField.bind(this);
  }

  render() {
    return(
      <div className="field" onClick={ this.clickedField }>Play the Field</div>
    )
  }
  clickedField() {
    this.props.clickedField()
  }
}

export default Field;
