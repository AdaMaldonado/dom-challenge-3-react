import './App.css';

function App() {
  return (
    <div className="App">
      <div id="control-panel">
        <button id="addRows">Add Row</button>
        <button id="addColumns">Add Column</button>

        <label htmlFor="clrSelection">Color Selection</label>
        <select id="clrSelection">
          <option>None</option>
          <option value="blue" id="op1">Blue</option>
          <option value="red" id="op2">Red</option>
          <option value="yellow" id="op3">Yellow</option>
        </select>
      </div>
    </div>
  );
}

export default App;
