import React from "react";
import TableRow from "./TableRow";
import './App.css';

class Table extends React.Component {

    render() {
        const rowArr = []
        for (let i = 0; i < this.props.row; i++) {
            rowArr.push(<TableRow column={this.props.column} color={this.props.color}/>)
        }
        return (
            <div className="tableGrid">
                {rowArr}
            </div>
        );
    }
}

export default Table;