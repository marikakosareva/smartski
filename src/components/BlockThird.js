import React, {Component} from 'react';
import Arrow from "./Arrow";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Container from "react-bootstrap/Container";


class BlockThird extends Component {

    render () {
        return (
            <Container>
                <Row>
                    <Col sm={12} md={{span: 8, offset: 2}}>
                        <Form>
                            <Form.Group as={Row} value = {this.props.mountainHeight} onChange={this.props.setMountainHeight}>
                                <Form.Label column sm="2">
                                    Mountain height
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check inline type="radio" label="250m" value={250} name="mountainHeight" checked={this.props.mountainHeight == 250} />
                                    <Form.Check inline type="radio" label="500m" value={500} name="mountainHeight" checked={this.props.mountainHeight == 500} />
                                    <Form.Check inline type="radio" label="1000m" value={1000} name="mountainHeight" checked={this.props.mountainHeight == 1000} />
                                    <Form.Check inline type="radio" label="2500m" value={2500} name="mountainHeight" checked={this.props.mountainHeight == 2500} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} value = {this.props.level} onChange={this.props.setLevel}>
                                <Form.Label column sm="2">
                                    Level of skiing
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check inline type="radio" label="Beginner" value={1} name="level" checked={this.props.level == 1} />
                                    <Form.Check inline type="radio" label="Intermediate" value={2} name="level" checked={this.props.level == 2} />
                                    <Form.Check inline type="radio" label="Advanced" value={3} name="level" checked={this.props.level == 3} />
                                    <Form.Check inline type="radio" label="Expert" value={4} name="level" checked={this.props.level == 4} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} value = {this.props.ambitions} onChange={this.props.setAmbitions}>
                                <Form.Label column sm="2">
                                    Ambitions to increase you level
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check inline type="radio" label="No" value={1} name="ambitions" checked={this.props.ambitions == 1} />
                                    <Form.Check inline type="radio" label="1 more level" value={2} name="ambitions" checked={this.props.ambitions == 2} />
                                    <Form.Check inline type="radio" label="2 more levels" value={3} name="ambitions" checked={this.props.ambitions == 3} />
                                </Col>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default BlockThird;