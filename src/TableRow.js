import React from "react";
import TableCell from "./TableCell";
import './App.css';

class TableRow extends React.Component {

    render() {
        const columnArr = []
        if (this.props.column === 0) {
            columnArr.push(<TableCell/>)
        } else {
            for (let i = 0; i < this.props.column; i++) {
                columnArr.push(<TableCell color={this.props.color}/>)
            }
        }
        return (
            <div className="row">
                {columnArr}
            </div>
        );
    }
}

export default TableRow;