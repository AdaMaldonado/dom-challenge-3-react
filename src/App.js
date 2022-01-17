import './App.css';
import React from "react";
import Table from "./Table";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      row: 0,
      column: 1,
      color: ""
    };
  }

  createRow = () => {
    this.setState({row: this.state.row + 1})
  }

  createColumn = () => {
    this.setState({column: this.state.column + 1})
  }

  render() {
    return (
        <div className="App">
          <div id="control-panel">
            <button id="addRows" onClick={this.createRow}>Add Row</button>
            <button id="addColumns" onClick={this.createColumn}>Add Column</button>
            <label htmlFor="clrSelection">Color Selection</label>

            <select id="clrSelection">
              <option value="transparent">None</option>
              <option value="blue" id="op1">Blue</option>
              <option value="red" id="op2">Red</option>
              <option value="yellow" id="op3">Yellow</option>
            </select>
          </div>

          <div className="grid">
            <Table
              row={this.state.row}
              column={this.state.column}
              />
          </div>
        </div>
    );
  }
}

export default App;
