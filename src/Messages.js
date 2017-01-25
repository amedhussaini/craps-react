import React, { Component } from 'react';

class Messages extends Component {
  render() {
    return (
      <div>
        <p>Message: {this.props.message}</p>
        <p>Point: {this.props.point}</p>
      </div>
    )
  }

}

export default Messages
