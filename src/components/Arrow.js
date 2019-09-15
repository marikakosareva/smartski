import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";

class Arrow extends Component {

    render() {
        if (this.props.side === "left") {
            return <Button  variant="outline-primary" onClick={this.props.onClickFun} disabled={this.props.disabled}>⯇</Button>
        } else {
            return <Button  variant="outline-primary" onClick={this.props.onClickFun} disabled={this.props.disabled}>⯈</Button>
        }
    }
}

export default Arrow;