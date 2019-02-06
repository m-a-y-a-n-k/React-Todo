import React, { Component } from "react";

class Redo extends Component {
  render() {
    let btnStyle = {
      color: "white",
      padding: "3%",
      display: "inline-block",
      width: "30%",
      maxWidth: "400px",
      margin: "5%",
      borderRadius: "16px",
      border: "none",
      boxShadow: "1px 3px 5px #ff1a04"
    };

    if (this.props.enabled) {
      btnStyle.pointerEvents = "auto";
      btnStyle.backgroundColor = "rgba(240,20,20,0.75)";
    } else {
      btnStyle.pointerEvents = "none";
      btnStyle.backgroundColor = "rgba(250,120,120,0.9)";
    }

    return (
      <button
        style={btnStyle}
        disabled={!this.props.enabled}
        onClick={this.props.click}
      >
        REDO
      </button>
    );
  }
}

export default Redo;
