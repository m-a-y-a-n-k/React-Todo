import React, { Component } from "react";
import Add from "./Add";
import Delete from "./Remove";

class Item extends Component {

  render() {
    let itemStyle = {
      backgroundColor: "rgba(240,200,255,0.1)",
      border: "none",
      margin: "auto 1%",
      padding: "2%"
    };

    return (
      <li style={itemStyle}>
        <input
          style={{
            width: "60%",
            padding: "3%",
            margin: "auto",
            borderRadius: "15px",
            border: "1px solid grey"
          }}
          type="text"
          onChange={event => {
            this.props.content.change(event);
          }}
          value={this.props.content.todo}
        />
        <Add
          click={() => {
            this.props.content.add();
          }}
        />
        <Delete
          click={() => {
            this.props.content.remove();
          }}
        />
      </li>
    );
  }
}

export default Item;
