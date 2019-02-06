import React, { Component } from "react";

class Undo extends Component {
  render() {
    let btnStyle = {
      color: "white",
      padding: "3%",
      display: "inline-block",
      width: "30%",
      maxWidth: "400px",
      margin: "3%",
      borderRadius: "16px",
      border: "none",
      boxShadow: "1px 3px 5px #201aff"
    };

    if (this.props.enabled) {
      btnStyle.pointerEvents = "auto";
      btnStyle.backgroundColor = "rgba(30,160,220,0.75)";
    } else {
      btnStyle.pointerEvents = "none";
      btnStyle.backgroundColor = "rgba(130,160,220,0.9)";
    }

    return (
      <button
        disabled={!this.props.enabled}
        style={btnStyle}
        onClick={this.props.click}
      >
        UNDO
      </button>
    );
  }
}

export default Undo;
