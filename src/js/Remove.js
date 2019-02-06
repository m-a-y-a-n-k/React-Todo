import React, { Component } from "react";

class Remove extends Component {
  render() {
    const delStyle = {
      backgroundColor: "rgb(255,10,80)",
      color: "white",
      borderRadius: "100%",
      fontSize: "18px",
      padding: "12px",
      margin: "3%",
      boxShadow: "0px 3px 9px #21ff8a",
      border: "none"
    };

    return (
      <button style={delStyle} onClick={this.props.click}>
        x
      </button>
    );
  }
}

export default Remove;
