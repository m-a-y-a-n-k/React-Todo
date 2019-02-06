import React, { Component } from "react";
import "../css/App.css";
import Undo from "./Undo";
import Redo from "./Redo";
import Add from "./Add";
import Item from "./Item";

class App extends Component {
  state = {
    redoEnabled: false,
    undoEnabled: true,
    todos: []
  };
  latestState = { ...this.state };
  originalState = { ...this.state };

  redoClicked = () => {
    this.latestState = { ...this.state };
    this.setState(this.originalState);
    this.setState({
      redoEnabled: false,
      undoEnabled: false
    });
  };

  handleUndo = () => {
    this.originalState = { ...this.state };
    this.setState(this.latestState);
    this.setState({
      redoEnabled: true
    });
  };

  addItem = pos => {
    if (pos >= 0 && pos <= this.state.todos.length) {
      this.latestState = { ...this.state };
      let Todos = [...this.state.todos];
      let todo =
        Todos && pos && Todos[pos] && Todos[pos] !== ""
          ? Todos[pos - 1]
          : "Hi, I am Mayank";
      Todos.splice(pos, 0, todo);
      this.setState({
        todos: Todos,
        undoEnabled: true
      });
    }
  };

  removeItem = pos => {
    if (pos < this.state.todos.length) {
      this.latestState = { ...this.state };
      let Todos = [...this.state.todos];
      Todos.splice(pos, 1);
      this.setState({
        todos: Todos,
        undoEnabled: true
      });
    }
  };

  handleItemChange = (event, pos) => {
    this.latestState = { ...this.state };
    let Todos = [...this.state.todos];
    Todos[pos] = event.target.value;
    this.setState({
      todos: Todos,
      undoEnabled: true
    });
  };

  render() {
    let Todos = this.state.todos.map((todo, pos) => {
      let con = {
        add: () => {
          this.addItem(pos + 1);
        },
        remove: () => {
          this.removeItem(pos);
        },
        change: event => {
          this.handleItemChange(event, pos);
        },
        todo: this.state.todos[pos]
      };
      return <Item key={pos} content={con} />;
    });

    return (
      <div className="App">
        <Undo
          enabled={this.state.undoEnabled}
          click={() => {
            this.handleUndo();
          }}
        />
        <Redo
          enabled={this.state.redoEnabled}
          click={() => {
            this.redoClicked();
          }}
        />
        <Add
          click={() => {
            this.addItem(0);
          }}
        />
        <div>
          <ol>{Todos}</ol>
        </div>
      </div>
    );
  }
}

export default App;
