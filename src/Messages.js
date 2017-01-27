import React, { Component } from 'react';
import './Messages.css';

class Messages extends Component {
  render() {
    let message = this.props.messages.reverse();
    let messageList = message.map((message, index) => {
      return (
        <li key={index}>{message}</li>
      )
    });

    return (
      <div className="message-div">
        <ul className="message-ul">
          {messageList}
        </ul>

      </div>
    )
  }

}

export default Messages
