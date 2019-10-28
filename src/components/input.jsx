import React, { Component } from "react";

class Input extends Component {
  state = { value: null };

  render() {
    return (
      <div>
        <input
          onChange={event =>
            this.setState({ value: event.target.value.toUpperCase() })
          }
          type="text"
          value={this.state.value}
        />
      </div>
    );
  }
}

export default Input;
