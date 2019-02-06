import React, { Component } from "react";

class Add extends Component {
  render() {
    const addStyle = {
      backgroundColor: "rgb(10,225,130)",
      color: "white",
      borderRadius: "100%",
      fontSize: "18px",
      padding: "12px",
      margin: "3%",
      boxShadow: "0px 3px 9px #21ff8a",
      border: "none"
    };

    return (
      <button style={addStyle} onClick={this.props.click}>
        +
      </button>
    );
  }
}

export default Add;
