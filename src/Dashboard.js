import React, { Component } from 'react';

class Dashboard extends Component {

  constructor() {
    super();

  }
  render() {
    return (
    <p>${this.props.bank}</p>
    )

  }
}

export default Dashboard
