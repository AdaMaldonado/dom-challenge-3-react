import './App.css';
import React from "react";

class TableCell extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            color: ""
        };
    }

    boxClick = () => {
        this.setState({color: this.props.color})
    }

    render() {
        return (
            <div
                style={{backgroundColor: this.state.color}}
                className="cell"
                onClick={this.boxClick}
            />
        );
    }
}

export default TableCell;